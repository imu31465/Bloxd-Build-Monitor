export const id = 107;
export const ids = [107];
export const modules = {
  4491: (TT, oT, IT) => {
    function iT(TT) {
      return iT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, iT(TT)
    }
    Object.defineProperty(oT, "__esModule", {
      value: !0
    }), oT.default = void 0;
    var zT = DT(IT(1042)),
      kT = function(TT, oT) {
        if (!oT && TT && TT.__esModule) return TT;
        if (null === TT || "object" !== iT(TT) && "function" !== typeof TT) return {
          default: TT
        };
        var IT = ST(oT);
        if (IT && IT.has(TT)) return IT.get(TT);
        var zT = {},
          kT = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var WT in TT)
          if ("default" !== WT && Object.prototype.hasOwnProperty.call(TT, WT)) {
            var XT = kT ? Object.getOwnPropertyDescriptor(TT, WT) : null;
            XT && (XT.get || XT.set) ? Object.defineProperty(zT, WT, XT) : zT[WT] = TT[WT]
          } zT.default = TT, IT && IT.set(TT, zT);
        return zT
      }(IT(46)),
      WT = DT(IT(4442)),
      XT = DT(IT(4497)),
      BT = IT(4505),
      FT = IT(1083);

    function ST(TT) {
      if ("function" !== typeof WeakMap) return null;
      var oT = new WeakMap,
        IT = new WeakMap;
      return (ST = function(TT) {
        return TT ? IT : oT
      })(TT)
    }

    function DT(TT) {
      return TT && TT.__esModule ? TT : {
        default: TT
      }
    }

    function LT(TT, oT) {
      var IT = "undefined" !== typeof Symbol && TT[Symbol.iterator] || TT["@@iterator"];
      if (!IT) {
        if (Array.isArray(TT) || (IT = function(TT, oT) {
            if (!TT) return;
            if ("string" === typeof TT) return xT(TT, oT);
            var IT = Object.prototype.toString.call(TT).slice(8, -1);
            "Object" === IT && TT.constructor && (IT = TT.constructor.name);
            if ("Map" === IT || "Set" === IT) return Array.from(TT);
            if ("Arguments" === IT || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(IT)) return xT(TT, oT)
          }(TT)) || oT && TT && "number" === typeof TT.length) {
          IT && (TT = IT);
          var iT = 0,
            zT = function() {};
          return {
            s: zT,
            n: function() {
              return iT >= TT.length ? {
                done: !0
              } : {
                done: !1,
                value: TT[iT++]
              }
            },
            e: function(TT) {
              throw TT
            },
            f: zT
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var kT, WT = !0,
        XT = !1;
      return {
        s: function() {
          IT = IT.call(TT)
        },
        n: function() {
          var TT = IT.next();
          return WT = TT.done, TT
        },
        e: function(TT) {
          XT = !0, kT = TT
        },
        f: function() {
          try {
            WT || null == IT.return || IT.return()
          } finally {
            if (XT) throw kT
          }
        }
      }
    }

    function xT(TT, oT) {
      (null == oT || oT > TT.length) && (oT = TT.length);
      for (var IT = 0, iT = new Array(oT); IT < oT; IT++) iT[IT] = TT[IT];
      return iT
    }

    function cT(TT, oT) {
      for (var IT = 0; IT < oT.length; IT++) {
        var iT = oT[IT];
        iT.enumerable = iT.enumerable || !1, iT.configurable = !0, "value" in iT && (iT.writable = !0), Object.defineProperty(TT, iT.key, iT)
      }
    }

    function KT(TT, oT) {
      return KT = Object.setPrototypeOf || function(TT, oT) {
        return TT.__proto__ = oT, TT
      }, KT(TT, oT)
    }

    function MT(TT) {
      var oT = function() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (TT) {
          return !1
        }
      }();
      return function() {
        var IT, zT = AT(TT);
        if (oT) {
          var kT = AT(this).constructor;
          IT = Reflect.construct(zT, arguments, kT)
        } else IT = zT.apply(this, arguments);
        return function(TT, oT) {
          if (oT && ("object" === iT(oT) || "function" === typeof oT)) return oT;
          if (void 0 !== oT) throw new TypeError("Derived constructors may only return object or undefined");
          return rT(TT)
        }(this, IT)
      }
    }

    function rT(TT) {
      if (void 0 === TT) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return TT
    }

    function AT(TT) {
      return AT = Object.setPrototypeOf ? Object.getPrototypeOf : function(TT) {
        return TT.__proto__ || Object.getPrototypeOf(TT)
      }, AT(TT)
    }

    function gT(TT, oT, IT) {
      return oT in TT ? Object.defineProperty(TT, oT, {
        value: IT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[oT] = IT, TT
    }
    var hT = {
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
      wT = function(TT) {
        ! function(TT, oT) {
          if ("function" !== typeof oT && null !== oT) throw new TypeError("Super expression must either be null or a function");
          Object.defineProperty(TT, "prototype", {
            value: Object.create(oT && oT.prototype, {
              constructor: {
                value: TT,
                writable: !0,
                configurable: !0
              }
            }),
            writable: !1
          }), oT && KT(TT, oT)
        }(WT, TT);
        var oT, IT, iT, kT = MT(WT);

        function WT(TT, oT) {
          var IT;
          return function(TT, oT) {
            if (!(TT instanceof oT)) throw new TypeError("Cannot call a class as a function")
          }(this, WT), gT(rT(IT = kT.call(this, TT, oT)), "handleFormat", (function(TT) {
            var oT = IT.props.format;
            return oT ? oT(TT) : TT
          })), gT(rT(IT), "handleUpdate", (function() {
            if (IT.slider) {
              var TT = IT.props.orientation,
                oT = (0, BT.capitalize)(hT.orientation[TT].dimension),
                iT = IT.slider["offset".concat(oT)],
                zT = IT.handle["offset".concat(oT)];
              IT.setState({
                limit: iT - zT,
                grab: zT / 2
              })
            }
          })), gT(rT(IT), "handleStart", (function(TT) {
            var oT = IT.props.onChangeStart;
            document.addEventListener("mousemove", IT.handleDrag), document.addEventListener("mouseup", IT.handleEnd), IT.setState({
              active: !0
            }, (function() {
              oT && oT(TT)
            }))
          })), gT(rT(IT), "handleDrag", (function(TT) {
            TT.stopPropagation();
            var oT = IT.props.onChange,
              iT = TT.target,
              zT = iT.className,
              kT = iT.classList,
              WT = iT.dataset;
            if (oT && "rangeslider__labels" !== zT) {
              var XT = IT.position(TT);
              kT && kT.contains("rangeslider__label-item") && WT.value && (XT = parseFloat(WT.value)), oT && oT(XT, TT)
            }
          })), gT(rT(IT), "handleEnd", (function(TT) {
            var oT = IT.props.onChangeComplete;
            IT.setState({
              active: !1
            }, (function() {
              oT && oT(TT)
            })), document.removeEventListener("mousemove", IT.handleDrag), document.removeEventListener("mouseup", IT.handleEnd)
          })), gT(rT(IT), "handleKeyDown", (function(TT) {
            TT.preventDefault();
            var oT, iT = TT.keyCode,
              zT = IT.props,
              kT = zT.value,
              WT = zT.min,
              XT = zT.max,
              BT = zT.step,
              FT = zT.onChange;
            switch (iT) {
              case 38:
              case 39:
                oT = kT + BT > XT ? XT : kT + BT, FT && FT(oT, TT);
                break;
              case 37:
              case 40:
                oT = kT - BT < WT ? WT : kT - BT, FT && FT(oT, TT)
            }
          })), gT(rT(IT), "getPositionFromValue", (function(TT) {
            var oT = IT.state.limit,
              iT = IT.props,
              zT = iT.min,
              kT = (TT - zT) / (iT.max - zT);
            return Math.round(kT * oT)
          })), gT(rT(IT), "getValueFromPosition", (function(TT) {
            var oT = IT.state.limit,
              iT = IT.props,
              zT = iT.orientation,
              kT = iT.min,
              WT = iT.max,
              XT = iT.step,
              FT = (0, BT.clamp)(TT, 0, oT) / (oT || 1),
              ST = XT * Math.round(FT * (WT - kT) / XT),
              DT = "horizontal" === zT ? ST + kT : WT - ST;
            return (0, BT.clamp)(DT, kT, WT)
          })), gT(rT(IT), "position", (function(TT) {
            var oT = IT.state.grab,
              iT = IT.props,
              zT = iT.orientation,
              kT = iT.reverse,
              WT = IT.slider,
              XT = hT.orientation[zT].coordinate,
              FT = kT ? hT.orientation[zT].reverseDirection : hT.orientation[zT].direction,
              ST = "client".concat((0, BT.capitalize)(XT)),
              DT = TT.touches ? TT.touches[0][ST] : TT[ST],
              LT = WT.getBoundingClientRect()[FT],
              xT = kT ? LT - DT - oT : DT - LT - oT;
            return IT.getValueFromPosition(xT)
          })), gT(rT(IT), "coordinates", (function(TT) {
            var oT = IT.state,
              iT = oT.limit,
              zT = oT.grab,
              kT = IT.props.orientation,
              WT = IT.getValueFromPosition(TT),
              XT = IT.getPositionFromValue(WT),
              BT = "horizontal" === kT ? XT + zT : XT;
            return {
              fill: "horizontal" === kT ? BT : iT - BT,
              handle: BT,
              label: BT
            }
          })), gT(rT(IT), "renderLabels", (function(TT) {
            return (0, FT.jsx)("ul", {
              ref: function(TT) {
                IT.labels = TT
              },
              className: (0, zT.default)("rangeslider__labels"),
              children: TT
            })
          })), IT.state = {
            active: !1,
            limit: 0,
            grab: 0
          }, IT
        }
        return oT = WT, (IT = [{
          key: "componentDidMount",
          value: function() {
            this.handleUpdate(), new XT.default(this.handleUpdate).observe(this.slider)
          }
        }, {
          key: "render",
          value: function() {
            var TT = this,
              oT = this.props,
              IT = oT.value,
              iT = oT.orientation,
              kT = oT.className,
              WT = oT.tooltip,
              XT = oT.reverse,
              BT = oT.labels,
              ST = oT.min,
              DT = oT.max,
              xT = oT.handleLabel,
              cT = this.state.active,
              KT = hT.orientation[iT].dimension,
              MT = XT ? hT.orientation[iT].reverseDirection : hT.orientation[iT].direction,
              rT = this.getPositionFromValue(IT),
              AT = this.coordinates(rT),
              wT = gT({}, KT, "".concat(AT.fill, "px")),
              mT = gT({}, MT, "".concat(AT.handle, "px")),
              eT = WT && cT,
              RT = [],
              uT = Object.keys(BT);
            if (uT.length > 0) {
              var vT, ET = LT(uT = uT.sort((function(TT, oT) {
                return XT ? TT - oT : oT - TT
              })));
              try {
                for (ET.s(); !(vT = ET.n()).done;) {
                  var fT = vT.value,
                    CT = this.getPositionFromValue(fT),
                    jT = this.coordinates(CT),
                    JT = gT({}, MT, "".concat(jT.label, "px"));
                  RT.push((0, FT.jsx)("li", {
                    className: (0, zT.default)("rangeslider__label-item"),
                    "data-value": fT,
                    onMouseDown: this.handleDrag,
                    onTouchStart: this.handleStart,
                    onTouchEnd: this.handleEnd,
                    style: JT,
                    children: this.props.labels[fT]
                  }, fT))
                }
              } catch (UT) {
                ET.e(UT)
              } finally {
                ET.f()
              }
            }
            return (0, FT.jsxs)("div", {
              ref: function(oT) {
                TT.slider = oT
              },
              className: (0, zT.default)("rangeslider", "rangeslider-".concat(iT), {
                "rangeslider-reverse": XT
              }, kT),
              onMouseDown: this.handleDrag,
              onMouseUp: this.handleEnd,
              onTouchStart: this.handleStart,
              onTouchEnd: this.handleEnd,
              "aria-valuemin": ST,
              "aria-valuemax": DT,
              "aria-valuenow": IT,
              "aria-orientation": iT,
              children: [(0, FT.jsx)("div", {
                className: "rangeslider__fill",
                style: wT
              }), (0, FT.jsxs)("div", {
                ref: function(oT) {
                  TT.handle = oT
                },
                className: "rangeslider__handle",
                onMouseDown: this.handleStart,
                onTouchMove: this.handleDrag,
                onTouchEnd: this.handleEnd,
                onKeyDown: this.handleKeyDown,
                style: mT,
                tabIndex: 0,
                children: [eT && (0, FT.jsx)("div", {
                  ref: function(oT) {
                    TT.tooltip = oT
                  },
                  className: "rangeslider__handle-tooltip",
                  children: (0, FT.jsx)("span", {
                    children: this.handleFormat(IT)
                  })
                }), (0, FT.jsx)("div", {
                  className: "rangeslider__handle-label",
                  children: xT
                })]
              }), BT && this.renderLabels(RT)]
            })
          }
        }]) && cT(oT.prototype, IT), iT && cT(oT, iT), Object.defineProperty(oT, "prototype", {
          writable: !1
        }), WT
      }(kT.Component);
    gT(wT, "propTypes", {
      min: WT.default.number,
      max: WT.default.number,
      step: WT.default.number,
      value: WT.default.number,
      orientation: WT.default.string,
      tooltip: WT.default.bool,
      reverse: WT.default.bool,
      labels: WT.default.object,
      handleLabel: WT.default.string,
      format: WT.default.func,
      onChangeStart: WT.default.func,
      onChange: WT.default.func,
      onChangeComplete: WT.default.func
    }), gT(wT, "defaultProps", {
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
    var mT = wT;
    oT.default = mT
  },
  4483: (TT, oT, IT) => {
    var iT;
    oT.d = void 0;
    var zT = ((iT = IT(4491)) && iT.__esModule ? iT : {
      default: iT
    }).default;
    oT.d = zT
  },
  4505: (TT, oT) => {
    Object.defineProperty(oT, "__esModule", {
      value: !0
    }), oT.capitalize = function(TT) {
      return TT.charAt(0).toUpperCase() + TT.substr(1)
    }, oT.clamp = function(TT, oT, IT) {
      return Math.min(Math.max(TT, oT), IT)
    }
  },
  4444: (TT, oT, IT) => {
    var iT = IT(4451);

    function zT() {}

    function kT() {}
    kT.resetWarningCache = zT, TT.exports = function() {
      function TT(TT, oT, IT, zT, kT, WT) {
        if (WT !== iT) {
          var XT = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw XT.name = "Invariant Violation", XT
        }
      }

      function oT() {
        return TT
      }
      TT.isRequired = TT;
      var IT = {
        array: TT,
        bigint: TT,
        bool: TT,
        func: TT,
        number: TT,
        object: TT,
        string: TT,
        symbol: TT,
        any: TT,
        arrayOf: oT,
        element: TT,
        elementType: TT,
        instanceOf: oT,
        node: TT,
        objectOf: oT,
        oneOf: oT,
        oneOfType: oT,
        shape: oT,
        exact: oT,
        checkPropTypes: kT,
        resetWarningCache: zT
      };
      return IT.PropTypes = IT, IT
    }
  },
  4442: (TT, oT, IT) => {
    TT.exports = IT(4444)()
  },
  4451: TT => {
    TT.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  4497: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      default: () => RT
    });
    var iT = function() {
        if ("undefined" !== typeof Map) return Map;

        function TT(TT, oT) {
          var IT = -1;
          return TT.some((function(TT, iT) {
            return TT[0] === oT && (IT = iT, !0)
          })), IT
        }
        return function() {
          function oT() {
            this.__entries__ = []
          }
          return Object.defineProperty(oT.prototype, "size", {
            get: function() {
              return this.__entries__.length
            },
            enumerable: !0,
            configurable: !0
          }), oT.prototype.get = function(oT) {
            var IT = TT(this.__entries__, oT),
              iT = this.__entries__[IT];
            return iT && iT[1]
          }, oT.prototype.set = function(oT, IT) {
            var iT = TT(this.__entries__, oT);
            ~iT ? this.__entries__[iT][1] = IT : this.__entries__.push([oT, IT])
          }, oT.prototype.delete = function(oT) {
            var IT = this.__entries__,
              iT = TT(IT, oT);
            ~iT && IT.splice(iT, 1)
          }, oT.prototype.has = function(oT) {
            return !!~TT(this.__entries__, oT)
          }, oT.prototype.clear = function() {
            this.__entries__.splice(0)
          }, oT.prototype.forEach = function(TT, oT) {
            void 0 === oT && (oT = null);
            for (var IT = 0, iT = this.__entries__; IT < iT.length; IT++) {
              var zT = iT[IT];
              TT.call(oT, zT[1], zT[0])
            }
          }, oT
        }()
      }(),
      zT = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document,
      kT = "undefined" !== typeof IT.g && IT.g.Math === Math ? IT.g : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")(),
      WT = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(kT) : function(TT) {
        return setTimeout((function() {
          return TT(Date.now())
        }), 1e3 / 60)
      };
    var XT = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
      BT = "undefined" !== typeof MutationObserver,
      FT = function() {
        function TT() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(TT, oT) {
            var IT = !1,
              iT = !1,
              zT = 0;

            function kT() {
              IT && (IT = !1, TT()), iT && BT()
            }

            function XT() {
              WT(kT)
            }

            function BT() {
              var TT = Date.now();
              if (IT) {
                if (TT - zT < 2) return;
                iT = !0
              } else IT = !0, iT = !1, setTimeout(XT, oT);
              zT = TT
            }
            return BT
          }(this.refresh.bind(this), 20)
        }
        return TT.prototype.addObserver = function(TT) {
          ~this.observers_.indexOf(TT) || this.observers_.push(TT), this.connected_ || this.connect_()
        }, TT.prototype.removeObserver = function(TT) {
          var oT = this.observers_,
            IT = oT.indexOf(TT);
          ~IT && oT.splice(IT, 1), !oT.length && this.connected_ && this.disconnect_()
        }, TT.prototype.refresh = function() {
          this.updateObservers_() && this.refresh()
        }, TT.prototype.updateObservers_ = function() {
          var TT = this.observers_.filter((function(TT) {
            return TT.gatherActive(), TT.hasActive()
          }));
          return TT.forEach((function(TT) {
            return TT.broadcastActive()
          })), TT.length > 0
        }, TT.prototype.connect_ = function() {
          zT && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), BT ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
          })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, TT.prototype.disconnect_ = function() {
          zT && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, TT.prototype.onTransitionEnd_ = function(TT) {
          var oT = TT.propertyName,
            IT = void 0 === oT ? "" : oT;
          XT.some((function(TT) {
            return !!~IT.indexOf(TT)
          })) && this.refresh()
        }, TT.getInstance = function() {
          return this.instance_ || (this.instance_ = new TT), this.instance_
        }, TT.instance_ = null, TT
      }(),
      ST = function(TT, oT) {
        for (var IT = 0, iT = Object.keys(oT); IT < iT.length; IT++) {
          var zT = iT[IT];
          Object.defineProperty(TT, zT, {
            value: oT[zT],
            enumerable: !1,
            writable: !1,
            configurable: !0
          })
        }
        return TT
      },
      DT = function(TT) {
        return TT && TT.ownerDocument && TT.ownerDocument.defaultView || kT
      },
      LT = AT(0, 0, 0, 0);

    function xT(TT) {
      return parseFloat(TT) || 0
    }

    function cT(TT) {
      for (var oT = [], IT = 1; IT < arguments.length; IT++) oT[IT - 1] = arguments[IT];
      return oT.reduce((function(oT, IT) {
        return oT + xT(TT["border-" + IT + "-width"])
      }), 0)
    }

    function KT(TT) {
      var oT = TT.clientWidth,
        IT = TT.clientHeight;
      if (!oT && !IT) return LT;
      var iT = DT(TT).getComputedStyle(TT),
        zT = function(TT) {
          for (var oT = {}, IT = 0, iT = ["top", "right", "bottom", "left"]; IT < iT.length; IT++) {
            var zT = iT[IT],
              kT = TT["padding-" + zT];
            oT[zT] = xT(kT)
          }
          return oT
        }(iT),
        kT = zT.left + zT.right,
        WT = zT.top + zT.bottom,
        XT = xT(iT.width),
        BT = xT(iT.height);
      if ("border-box" === iT.boxSizing && (Math.round(XT + kT) !== oT && (XT -= cT(iT, "left", "right") + kT), Math.round(BT + WT) !== IT && (BT -= cT(iT, "top", "bottom") + WT)), ! function(TT) {
          return TT === DT(TT).document.documentElement
        }(TT)) {
        var FT = Math.round(XT + kT) - oT,
          ST = Math.round(BT + WT) - IT;
        1 !== Math.abs(FT) && (XT -= FT), 1 !== Math.abs(ST) && (BT -= ST)
      }
      return AT(zT.left, zT.top, XT, BT)
    }
    var MT = "undefined" !== typeof SVGGraphicsElement ? function(TT) {
      return TT instanceof DT(TT).SVGGraphicsElement
    } : function(TT) {
      return TT instanceof DT(TT).SVGElement && "function" === typeof TT.getBBox
    };

    function rT(TT) {
      return zT ? MT(TT) ? function(TT) {
        var oT = TT.getBBox();
        return AT(0, 0, oT.width, oT.height)
      }(TT) : KT(TT) : LT
    }

    function AT(TT, oT, IT, iT) {
      return {
        x: TT,
        y: oT,
        width: IT,
        height: iT
      }
    }
    var gT = function() {
        function TT(TT) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = AT(0, 0, 0, 0), this.target = TT
        }
        return TT.prototype.isActive = function() {
          var TT = rT(this.target);
          return this.contentRect_ = TT, TT.width !== this.broadcastWidth || TT.height !== this.broadcastHeight
        }, TT.prototype.broadcastRect = function() {
          var TT = this.contentRect_;
          return this.broadcastWidth = TT.width, this.broadcastHeight = TT.height, TT
        }, TT
      }(),
      hT = function(TT, oT) {
        var IT = function(TT) {
          var oT = TT.x,
            IT = TT.y,
            iT = TT.width,
            zT = TT.height,
            kT = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
            WT = Object.create(kT.prototype);
          return ST(WT, {
            x: oT,
            y: IT,
            width: iT,
            height: zT,
            top: IT,
            right: oT + iT,
            bottom: zT + IT,
            left: oT
          }), WT
        }(oT);
        ST(this, {
          target: TT,
          contentRect: IT
        })
      },
      wT = function() {
        function TT(TT, oT, IT) {
          if (this.activeObservations_ = [], this.observations_ = new iT, "function" !== typeof TT) throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = TT, this.controller_ = oT, this.callbackCtx_ = IT
        }
        return TT.prototype.observe = function(TT) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(TT instanceof DT(TT).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var oT = this.observations_;
            oT.has(TT) || (oT.set(TT, new gT(TT)), this.controller_.addObserver(this), this.controller_.refresh())
          }
        }, TT.prototype.unobserve = function(TT) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(TT instanceof DT(TT).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var oT = this.observations_;
            oT.has(TT) && (oT.delete(TT), oT.size || this.controller_.removeObserver(this))
          }
        }, TT.prototype.disconnect = function() {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, TT.prototype.gatherActive = function() {
          var TT = this;
          this.clearActive(), this.observations_.forEach((function(oT) {
            oT.isActive() && TT.activeObservations_.push(oT)
          }))
        }, TT.prototype.broadcastActive = function() {
          if (this.hasActive()) {
            var TT = this.callbackCtx_,
              oT = this.activeObservations_.map((function(TT) {
                return new hT(TT.target, TT.broadcastRect())
              }));
            this.callback_.call(TT, oT, TT), this.clearActive()
          }
        }, TT.prototype.clearActive = function() {
          this.activeObservations_.splice(0)
        }, TT.prototype.hasActive = function() {
          return this.activeObservations_.length > 0
        }, TT
      }(),
      mT = "undefined" !== typeof WeakMap ? new WeakMap : new iT,
      eT = function TT(oT) {
        if (!(this instanceof TT)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var IT = FT.getInstance(),
          iT = new wT(oT, IT, this);
        mT.set(this, iT)
      };
    ["observe", "unobserve", "disconnect"].forEach((function(TT) {
      eT.prototype[TT] = function() {
        var oT;
        return (oT = mT.get(this))[TT].apply(oT, arguments)
      }
    }));
    const RT = "undefined" !== typeof kT.ResizeObserver ? kT.ResizeObserver : eT
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);