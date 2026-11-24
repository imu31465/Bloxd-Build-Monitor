export const id = 110;
export const ids = [110];
export const modules = {
  5098: (TT, UT, mT) => {
    function WT(TT) {
      return WT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, WT(TT)
    }
    Object.defineProperty(UT, "__esModule", {
      value: !0
    }), UT.default = void 0;
    var zT = lT(mT(1126)),
      MT = function(TT, UT) {
        if (!UT && TT && TT.__esModule) return TT;
        if (null === TT || "object" !== WT(TT) && "function" !== typeof TT) return {
          default: TT
        };
        var mT = jT(UT);
        if (mT && mT.has(TT)) return mT.get(TT);
        var zT = {},
          MT = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var gT in TT)
          if ("default" !== gT && Object.prototype.hasOwnProperty.call(TT, gT)) {
            var nT = MT ? Object.getOwnPropertyDescriptor(TT, gT) : null;
            nT && (nT.get || nT.set) ? Object.defineProperty(zT, gT, nT) : zT[gT] = TT[gT]
          } zT.default = TT, mT && mT.set(TT, zT);
        return zT
      }(mT(63)),
      gT = lT(mT(5066)),
      nT = lT(mT(5103)),
      HT = mT(5110),
      kT = mT(1188);

    function jT(TT) {
      if ("function" !== typeof WeakMap) return null;
      var UT = new WeakMap,
        mT = new WeakMap;
      return (jT = function(TT) {
        return TT ? mT : UT
      })(TT)
    }

    function lT(TT) {
      return TT && TT.__esModule ? TT : {
        default: TT
      }
    }

    function LT(TT, UT) {
      var mT = "undefined" !== typeof Symbol && TT[Symbol.iterator] || TT["@@iterator"];
      if (!mT) {
        if (Array.isArray(TT) || (mT = function(TT, UT) {
            if (!TT) return;
            if ("string" === typeof TT) return pT(TT, UT);
            var mT = Object.prototype.toString.call(TT).slice(8, -1);
            "Object" === mT && TT.constructor && (mT = TT.constructor.name);
            if ("Map" === mT || "Set" === mT) return Array.from(TT);
            if ("Arguments" === mT || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(mT)) return pT(TT, UT)
          }(TT)) || UT && TT && "number" === typeof TT.length) {
          mT && (TT = mT);
          var WT = 0,
            zT = function() {};
          return {
            s: zT,
            n: function() {
              return WT >= TT.length ? {
                done: !0
              } : {
                done: !1,
                value: TT[WT++]
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
      var MT, gT = !0,
        nT = !1;
      return {
        s: function() {
          mT = mT.call(TT)
        },
        n: function() {
          var TT = mT.next();
          return gT = TT.done, TT
        },
        e: function(TT) {
          nT = !0, MT = TT
        },
        f: function() {
          try {
            gT || null == mT.return || mT.return()
          } finally {
            if (nT) throw MT
          }
        }
      }
    }

    function pT(TT, UT) {
      (null == UT || UT > TT.length) && (UT = TT.length);
      for (var mT = 0, WT = new Array(UT); mT < UT; mT++) WT[mT] = TT[mT];
      return WT
    }

    function BT(TT, UT) {
      for (var mT = 0; mT < UT.length; mT++) {
        var WT = UT[mT];
        WT.enumerable = WT.enumerable || !1, WT.configurable = !0, "value" in WT && (WT.writable = !0), Object.defineProperty(TT, WT.key, WT)
      }
    }

    function ZT(TT, UT) {
      return ZT = Object.setPrototypeOf || function(TT, UT) {
        return TT.__proto__ = UT, TT
      }, ZT(TT, UT)
    }

    function cT(TT) {
      var UT = function() {
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
        var mT, zT = fT(TT);
        if (UT) {
          var MT = fT(this).constructor;
          mT = Reflect.construct(zT, arguments, MT)
        } else mT = zT.apply(this, arguments);
        return function(TT, UT) {
          if (UT && ("object" === WT(UT) || "function" === typeof UT)) return UT;
          if (void 0 !== UT) throw new TypeError("Derived constructors may only return object or undefined");
          return vT(TT)
        }(this, mT)
      }
    }

    function vT(TT) {
      if (void 0 === TT) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return TT
    }

    function fT(TT) {
      return fT = Object.setPrototypeOf ? Object.getPrototypeOf : function(TT) {
        return TT.__proto__ || Object.getPrototypeOf(TT)
      }, fT(TT)
    }

    function qT(TT, UT, mT) {
      return UT in TT ? Object.defineProperty(TT, UT, {
        value: mT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[UT] = mT, TT
    }
    var iT = {
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
      bT = function(TT) {
        ! function(TT, UT) {
          if ("function" !== typeof UT && null !== UT) throw new TypeError("Super expression must either be null or a function");
          Object.defineProperty(TT, "prototype", {
            value: Object.create(UT && UT.prototype, {
              constructor: {
                value: TT,
                writable: !0,
                configurable: !0
              }
            }),
            writable: !1
          }), UT && ZT(TT, UT)
        }(gT, TT);
        var UT, mT, WT, MT = cT(gT);

        function gT(TT, UT) {
          var mT;
          return function(TT, UT) {
            if (!(TT instanceof UT)) throw new TypeError("Cannot call a class as a function")
          }(this, gT), qT(vT(mT = MT.call(this, TT, UT)), "handleFormat", (function(TT) {
            var UT = mT.props.format;
            return UT ? UT(TT) : TT
          })), qT(vT(mT), "handleUpdate", (function() {
            if (mT.slider) {
              var TT = mT.props.orientation,
                UT = (0, HT.capitalize)(iT.orientation[TT].dimension),
                WT = mT.slider["offset".concat(UT)],
                zT = mT.handle["offset".concat(UT)];
              mT.setState({
                limit: WT - zT,
                grab: zT / 2
              })
            }
          })), qT(vT(mT), "handleStart", (function(TT) {
            var UT = mT.props.onChangeStart;
            document.addEventListener("mousemove", mT.handleDrag), document.addEventListener("mouseup", mT.handleEnd), mT.setState({
              active: !0
            }, (function() {
              UT && UT(TT)
            }))
          })), qT(vT(mT), "handleDrag", (function(TT) {
            TT.stopPropagation();
            var UT = mT.props.onChange,
              WT = TT.target,
              zT = WT.className,
              MT = WT.classList,
              gT = WT.dataset;
            if (UT && "rangeslider__labels" !== zT) {
              var nT = mT.position(TT);
              MT && MT.contains("rangeslider__label-item") && gT.value && (nT = parseFloat(gT.value)), UT && UT(nT, TT)
            }
          })), qT(vT(mT), "handleEnd", (function(TT) {
            var UT = mT.props.onChangeComplete;
            mT.setState({
              active: !1
            }, (function() {
              UT && UT(TT)
            })), document.removeEventListener("mousemove", mT.handleDrag), document.removeEventListener("mouseup", mT.handleEnd)
          })), qT(vT(mT), "handleKeyDown", (function(TT) {
            TT.preventDefault();
            var UT, WT = TT.keyCode,
              zT = mT.props,
              MT = zT.value,
              gT = zT.min,
              nT = zT.max,
              HT = zT.step,
              kT = zT.onChange;
            switch (WT) {
              case 38:
              case 39:
                UT = MT + HT > nT ? nT : MT + HT, kT && kT(UT, TT);
                break;
              case 37:
              case 40:
                UT = MT - HT < gT ? gT : MT - HT, kT && kT(UT, TT)
            }
          })), qT(vT(mT), "getPositionFromValue", (function(TT) {
            var UT = mT.state.limit,
              WT = mT.props,
              zT = WT.min,
              MT = (TT - zT) / (WT.max - zT);
            return Math.round(MT * UT)
          })), qT(vT(mT), "getValueFromPosition", (function(TT) {
            var UT = mT.state.limit,
              WT = mT.props,
              zT = WT.orientation,
              MT = WT.min,
              gT = WT.max,
              nT = WT.step,
              kT = (0, HT.clamp)(TT, 0, UT) / (UT || 1),
              jT = nT * Math.round(kT * (gT - MT) / nT),
              lT = "horizontal" === zT ? jT + MT : gT - jT;
            return (0, HT.clamp)(lT, MT, gT)
          })), qT(vT(mT), "position", (function(TT) {
            var UT = mT.state.grab,
              WT = mT.props,
              zT = WT.orientation,
              MT = WT.reverse,
              gT = mT.slider,
              nT = iT.orientation[zT].coordinate,
              kT = MT ? iT.orientation[zT].reverseDirection : iT.orientation[zT].direction,
              jT = "client".concat((0, HT.capitalize)(nT)),
              lT = TT.touches ? TT.touches[0][jT] : TT[jT],
              LT = gT.getBoundingClientRect()[kT],
              pT = MT ? LT - lT - UT : lT - LT - UT;
            return mT.getValueFromPosition(pT)
          })), qT(vT(mT), "coordinates", (function(TT) {
            var UT = mT.state,
              WT = UT.limit,
              zT = UT.grab,
              MT = mT.props.orientation,
              gT = mT.getValueFromPosition(TT),
              nT = mT.getPositionFromValue(gT),
              HT = "horizontal" === MT ? nT + zT : nT;
            return {
              fill: "horizontal" === MT ? HT : WT - HT,
              handle: HT,
              label: HT
            }
          })), qT(vT(mT), "renderLabels", (function(TT) {
            return (0, kT.jsx)("ul", {
              ref: function(TT) {
                mT.labels = TT
              },
              className: (0, zT.default)("rangeslider__labels"),
              children: TT
            })
          })), mT.state = {
            active: !1,
            limit: 0,
            grab: 0
          }, mT
        }
        return UT = gT, (mT = [{
          key: "componentDidMount",
          value: function() {
            this.handleUpdate(), new nT.default(this.handleUpdate).observe(this.slider)
          }
        }, {
          key: "render",
          value: function() {
            var TT = this,
              UT = this.props,
              mT = UT.value,
              WT = UT.orientation,
              MT = UT.className,
              gT = UT.tooltip,
              nT = UT.reverse,
              HT = UT.labels,
              jT = UT.min,
              lT = UT.max,
              pT = UT.handleLabel,
              BT = this.state.active,
              ZT = iT.orientation[WT].dimension,
              cT = nT ? iT.orientation[WT].reverseDirection : iT.orientation[WT].direction,
              vT = this.getPositionFromValue(mT),
              fT = this.coordinates(vT),
              bT = qT({}, ZT, "".concat(fT.fill, "px")),
              OT = qT({}, cT, "".concat(fT.handle, "px")),
              eT = gT && BT,
              YT = [],
              JT = Object.keys(HT);
            if (JT.length > 0) {
              var xT, dT = LT(JT = JT.sort((function(TT, UT) {
                return nT ? TT - UT : UT - TT
              })));
              try {
                for (dT.s(); !(xT = dT.n()).done;) {
                  var wT = xT.value,
                    tT = this.getPositionFromValue(wT),
                    aT = this.coordinates(tT),
                    yT = qT({}, cT, "".concat(aT.label, "px"));
                  YT.push((0, kT.jsx)("li", {
                    className: (0, zT.default)("rangeslider__label-item"),
                    "data-value": wT,
                    onMouseDown: this.handleDrag,
                    onTouchStart: this.handleStart,
                    onTouchEnd: this.handleEnd,
                    style: yT,
                    children: this.props.labels[wT]
                  }, wT))
                }
              } catch (XT) {
                dT.e(XT)
              } finally {
                dT.f()
              }
            }
            return (0, kT.jsxs)("div", {
              ref: function(UT) {
                TT.slider = UT
              },
              className: (0, zT.default)("rangeslider", "rangeslider-".concat(WT), {
                "rangeslider-reverse": nT
              }, MT),
              onMouseDown: this.handleDrag,
              onMouseUp: this.handleEnd,
              onTouchStart: this.handleStart,
              onTouchEnd: this.handleEnd,
              "aria-valuemin": jT,
              "aria-valuemax": lT,
              "aria-valuenow": mT,
              "aria-orientation": WT,
              children: [(0, kT.jsx)("div", {
                className: "rangeslider__fill",
                style: bT
              }), (0, kT.jsxs)("div", {
                ref: function(UT) {
                  TT.handle = UT
                },
                className: "rangeslider__handle",
                onMouseDown: this.handleStart,
                onTouchMove: this.handleDrag,
                onTouchEnd: this.handleEnd,
                onKeyDown: this.handleKeyDown,
                style: OT,
                tabIndex: 0,
                children: [eT && (0, kT.jsx)("div", {
                  ref: function(UT) {
                    TT.tooltip = UT
                  },
                  className: "rangeslider__handle-tooltip",
                  children: (0, kT.jsx)("span", {
                    children: this.handleFormat(mT)
                  })
                }), (0, kT.jsx)("div", {
                  className: "rangeslider__handle-label",
                  children: pT
                })]
              }), HT && this.renderLabels(YT)]
            })
          }
        }]) && BT(UT.prototype, mT), WT && BT(UT, WT), Object.defineProperty(UT, "prototype", {
          writable: !1
        }), gT
      }(MT.Component);
    qT(bT, "propTypes", {
      min: gT.default.number,
      max: gT.default.number,
      step: gT.default.number,
      value: gT.default.number,
      orientation: gT.default.string,
      tooltip: gT.default.bool,
      reverse: gT.default.bool,
      labels: gT.default.object,
      handleLabel: gT.default.string,
      format: gT.default.func,
      onChangeStart: gT.default.func,
      onChange: gT.default.func,
      onChangeComplete: gT.default.func
    }), qT(bT, "defaultProps", {
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
    var OT = bT;
    UT.default = OT
  },
  5095: (TT, UT, mT) => {
    var WT;
    UT.d = void 0;
    var zT = ((WT = mT(5098)) && WT.__esModule ? WT : {
      default: WT
    }).default;
    UT.d = zT
  },
  5110: (TT, UT) => {
    Object.defineProperty(UT, "__esModule", {
      value: !0
    }), UT.capitalize = function(TT) {
      return TT.charAt(0).toUpperCase() + TT.substr(1)
    }, UT.clamp = function(TT, UT, mT) {
      return Math.min(Math.max(TT, UT), mT)
    }
  },
  5068: (TT, UT, mT) => {
    var WT = mT(5072);

    function zT() {}

    function MT() {}
    MT.resetWarningCache = zT, TT.exports = function() {
      function TT(TT, UT, mT, zT, MT, gT) {
        if (gT !== WT) {
          var nT = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw nT.name = "Invariant Violation", nT
        }
      }

      function UT() {
        return TT
      }
      TT.isRequired = TT;
      var mT = {
        array: TT,
        bigint: TT,
        bool: TT,
        func: TT,
        number: TT,
        object: TT,
        string: TT,
        symbol: TT,
        any: TT,
        arrayOf: UT,
        element: TT,
        elementType: TT,
        instanceOf: UT,
        node: TT,
        objectOf: UT,
        oneOf: UT,
        oneOfType: UT,
        shape: UT,
        exact: UT,
        checkPropTypes: MT,
        resetWarningCache: zT
      };
      return mT.PropTypes = mT, mT
    }
  },
  5066: (TT, UT, mT) => {
    TT.exports = mT(5068)()
  },
  5072: TT => {
    TT.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  5103: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      default: () => YT
    });
    var WT = function() {
        if ("undefined" !== typeof Map) return Map;

        function TT(TT, UT) {
          var mT = -1;
          return TT.some((function(TT, WT) {
            return TT[0] === UT && (mT = WT, !0)
          })), mT
        }
        return function() {
          function UT() {
            this.__entries__ = []
          }
          return Object.defineProperty(UT.prototype, "size", {
            get: function() {
              return this.__entries__.length
            },
            enumerable: !0,
            configurable: !0
          }), UT.prototype.get = function(UT) {
            var mT = TT(this.__entries__, UT),
              WT = this.__entries__[mT];
            return WT && WT[1]
          }, UT.prototype.set = function(UT, mT) {
            var WT = TT(this.__entries__, UT);
            ~WT ? this.__entries__[WT][1] = mT : this.__entries__.push([UT, mT])
          }, UT.prototype.delete = function(UT) {
            var mT = this.__entries__,
              WT = TT(mT, UT);
            ~WT && mT.splice(WT, 1)
          }, UT.prototype.has = function(UT) {
            return !!~TT(this.__entries__, UT)
          }, UT.prototype.clear = function() {
            this.__entries__.splice(0)
          }, UT.prototype.forEach = function(TT, UT) {
            void 0 === UT && (UT = null);
            for (var mT = 0, WT = this.__entries__; mT < WT.length; mT++) {
              var zT = WT[mT];
              TT.call(UT, zT[1], zT[0])
            }
          }, UT
        }()
      }(),
      zT = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document,
      MT = "undefined" !== typeof mT.g && mT.g.Math === Math ? mT.g : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")(),
      gT = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(MT) : function(TT) {
        return setTimeout((function() {
          return TT(Date.now())
        }), 1e3 / 60)
      };
    var nT = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
      HT = "undefined" !== typeof MutationObserver,
      kT = function() {
        function TT() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(TT, UT) {
            var mT = !1,
              WT = !1,
              zT = 0;

            function MT() {
              mT && (mT = !1, TT()), WT && HT()
            }

            function nT() {
              gT(MT)
            }

            function HT() {
              var TT = Date.now();
              if (mT) {
                if (TT - zT < 2) return;
                WT = !0
              } else mT = !0, WT = !1, setTimeout(nT, UT);
              zT = TT
            }
            return HT
          }(this.refresh.bind(this), 20)
        }
        return TT.prototype.addObserver = function(TT) {
          ~this.observers_.indexOf(TT) || this.observers_.push(TT), this.connected_ || this.connect_()
        }, TT.prototype.removeObserver = function(TT) {
          var UT = this.observers_,
            mT = UT.indexOf(TT);
          ~mT && UT.splice(mT, 1), !UT.length && this.connected_ && this.disconnect_()
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
          zT && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), HT ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
          })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, TT.prototype.disconnect_ = function() {
          zT && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, TT.prototype.onTransitionEnd_ = function(TT) {
          var UT = TT.propertyName,
            mT = void 0 === UT ? "" : UT;
          nT.some((function(TT) {
            return !!~mT.indexOf(TT)
          })) && this.refresh()
        }, TT.getInstance = function() {
          return this.instance_ || (this.instance_ = new TT), this.instance_
        }, TT.instance_ = null, TT
      }(),
      jT = function(TT, UT) {
        for (var mT = 0, WT = Object.keys(UT); mT < WT.length; mT++) {
          var zT = WT[mT];
          Object.defineProperty(TT, zT, {
            value: UT[zT],
            enumerable: !1,
            writable: !1,
            configurable: !0
          })
        }
        return TT
      },
      lT = function(TT) {
        return TT && TT.ownerDocument && TT.ownerDocument.defaultView || MT
      },
      LT = fT(0, 0, 0, 0);

    function pT(TT) {
      return parseFloat(TT) || 0
    }

    function BT(TT) {
      for (var UT = [], mT = 1; mT < arguments.length; mT++) UT[mT - 1] = arguments[mT];
      return UT.reduce((function(UT, mT) {
        return UT + pT(TT["border-" + mT + "-width"])
      }), 0)
    }

    function ZT(TT) {
      var UT = TT.clientWidth,
        mT = TT.clientHeight;
      if (!UT && !mT) return LT;
      var WT = lT(TT).getComputedStyle(TT),
        zT = function(TT) {
          for (var UT = {}, mT = 0, WT = ["top", "right", "bottom", "left"]; mT < WT.length; mT++) {
            var zT = WT[mT],
              MT = TT["padding-" + zT];
            UT[zT] = pT(MT)
          }
          return UT
        }(WT),
        MT = zT.left + zT.right,
        gT = zT.top + zT.bottom,
        nT = pT(WT.width),
        HT = pT(WT.height);
      if ("border-box" === WT.boxSizing && (Math.round(nT + MT) !== UT && (nT -= BT(WT, "left", "right") + MT), Math.round(HT + gT) !== mT && (HT -= BT(WT, "top", "bottom") + gT)), ! function(TT) {
          return TT === lT(TT).document.documentElement
        }(TT)) {
        var kT = Math.round(nT + MT) - UT,
          jT = Math.round(HT + gT) - mT;
        1 !== Math.abs(kT) && (nT -= kT), 1 !== Math.abs(jT) && (HT -= jT)
      }
      return fT(zT.left, zT.top, nT, HT)
    }
    var cT = "undefined" !== typeof SVGGraphicsElement ? function(TT) {
      return TT instanceof lT(TT).SVGGraphicsElement
    } : function(TT) {
      return TT instanceof lT(TT).SVGElement && "function" === typeof TT.getBBox
    };

    function vT(TT) {
      return zT ? cT(TT) ? function(TT) {
        var UT = TT.getBBox();
        return fT(0, 0, UT.width, UT.height)
      }(TT) : ZT(TT) : LT
    }

    function fT(TT, UT, mT, WT) {
      return {
        x: TT,
        y: UT,
        width: mT,
        height: WT
      }
    }
    var qT = function() {
        function TT(TT) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = fT(0, 0, 0, 0), this.target = TT
        }
        return TT.prototype.isActive = function() {
          var TT = vT(this.target);
          return this.contentRect_ = TT, TT.width !== this.broadcastWidth || TT.height !== this.broadcastHeight
        }, TT.prototype.broadcastRect = function() {
          var TT = this.contentRect_;
          return this.broadcastWidth = TT.width, this.broadcastHeight = TT.height, TT
        }, TT
      }(),
      iT = function(TT, UT) {
        var mT = function(TT) {
          var UT = TT.x,
            mT = TT.y,
            WT = TT.width,
            zT = TT.height,
            MT = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
            gT = Object.create(MT.prototype);
          return jT(gT, {
            x: UT,
            y: mT,
            width: WT,
            height: zT,
            top: mT,
            right: UT + WT,
            bottom: zT + mT,
            left: UT
          }), gT
        }(UT);
        jT(this, {
          target: TT,
          contentRect: mT
        })
      },
      bT = function() {
        function TT(TT, UT, mT) {
          if (this.activeObservations_ = [], this.observations_ = new WT, "function" !== typeof TT) throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = TT, this.controller_ = UT, this.callbackCtx_ = mT
        }
        return TT.prototype.observe = function(TT) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(TT instanceof lT(TT).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var UT = this.observations_;
            UT.has(TT) || (UT.set(TT, new qT(TT)), this.controller_.addObserver(this), this.controller_.refresh())
          }
        }, TT.prototype.unobserve = function(TT) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(TT instanceof lT(TT).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var UT = this.observations_;
            UT.has(TT) && (UT.delete(TT), UT.size || this.controller_.removeObserver(this))
          }
        }, TT.prototype.disconnect = function() {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, TT.prototype.gatherActive = function() {
          var TT = this;
          this.clearActive(), this.observations_.forEach((function(UT) {
            UT.isActive() && TT.activeObservations_.push(UT)
          }))
        }, TT.prototype.broadcastActive = function() {
          if (this.hasActive()) {
            var TT = this.callbackCtx_,
              UT = this.activeObservations_.map((function(TT) {
                return new iT(TT.target, TT.broadcastRect())
              }));
            this.callback_.call(TT, UT, TT), this.clearActive()
          }
        }, TT.prototype.clearActive = function() {
          this.activeObservations_.splice(0)
        }, TT.prototype.hasActive = function() {
          return this.activeObservations_.length > 0
        }, TT
      }(),
      OT = "undefined" !== typeof WeakMap ? new WeakMap : new WT,
      eT = function TT(UT) {
        if (!(this instanceof TT)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var mT = kT.getInstance(),
          WT = new bT(UT, mT, this);
        OT.set(this, WT)
      };
    ["observe", "unobserve", "disconnect"].forEach((function(TT) {
      eT.prototype[TT] = function() {
        var UT;
        return (UT = OT.get(this))[TT].apply(UT, arguments)
      }
    }));
    const YT = "undefined" !== typeof MT.ResizeObserver ? MT.ResizeObserver : eT
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);