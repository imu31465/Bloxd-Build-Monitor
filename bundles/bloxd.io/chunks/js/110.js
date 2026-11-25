export const id = 110;
export const ids = [110];
export const modules = {
  5170: (tt, et, Vt) => {
    function Ot(tt) {
      return Ot = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(tt) {
        return typeof tt
      } : function(tt) {
        return tt && "function" == typeof Symbol && tt.constructor === Symbol && tt !== Symbol.prototype ? "symbol" : typeof tt
      }, Ot(tt)
    }
    Object.defineProperty(et, "__esModule", {
      value: !0
    }), et.default = void 0;
    var qt = Qt(Vt(1140)),
      Dt = function(tt, et) {
        if (!et && tt && tt.__esModule) return tt;
        if (null === tt || "object" !== Ot(tt) && "function" !== typeof tt) return {
          default: tt
        };
        var Vt = Xt(et);
        if (Vt && Vt.has(tt)) return Vt.get(tt);
        var qt = {},
          Dt = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var mt in tt)
          if ("default" !== mt && Object.prototype.hasOwnProperty.call(tt, mt)) {
            var dt = Dt ? Object.getOwnPropertyDescriptor(tt, mt) : null;
            dt && (dt.get || dt.set) ? Object.defineProperty(qt, mt, dt) : qt[mt] = tt[mt]
          } qt.default = tt, Vt && Vt.set(tt, qt);
        return qt
      }(Vt(63)),
      mt = Qt(Vt(5127)),
      dt = Qt(Vt(5177)),
      jt = Vt(5184),
      Ht = Vt(1188);

    function Xt(tt) {
      if ("function" !== typeof WeakMap) return null;
      var et = new WeakMap,
        Vt = new WeakMap;
      return (Xt = function(tt) {
        return tt ? Vt : et
      })(tt)
    }

    function Qt(tt) {
      return tt && tt.__esModule ? tt : {
        default: tt
      }
    }

    function lt(tt, et) {
      var Vt = "undefined" !== typeof Symbol && tt[Symbol.iterator] || tt["@@iterator"];
      if (!Vt) {
        if (Array.isArray(tt) || (Vt = function(tt, et) {
            if (!tt) return;
            if ("string" === typeof tt) return Et(tt, et);
            var Vt = Object.prototype.toString.call(tt).slice(8, -1);
            "Object" === Vt && tt.constructor && (Vt = tt.constructor.name);
            if ("Map" === Vt || "Set" === Vt) return Array.from(tt);
            if ("Arguments" === Vt || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Vt)) return Et(tt, et)
          }(tt)) || et && tt && "number" === typeof tt.length) {
          Vt && (tt = Vt);
          var Ot = 0,
            qt = function() {};
          return {
            s: qt,
            n: function() {
              return Ot >= tt.length ? {
                done: !0
              } : {
                done: !1,
                value: tt[Ot++]
              }
            },
            e: function(tt) {
              throw tt
            },
            f: qt
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var Dt, mt = !0,
        dt = !1;
      return {
        s: function() {
          Vt = Vt.call(tt)
        },
        n: function() {
          var tt = Vt.next();
          return mt = tt.done, tt
        },
        e: function(tt) {
          dt = !0, Dt = tt
        },
        f: function() {
          try {
            mt || null == Vt.return || Vt.return()
          } finally {
            if (dt) throw Dt
          }
        }
      }
    }

    function Et(tt, et) {
      (null == et || et > tt.length) && (et = tt.length);
      for (var Vt = 0, Ot = new Array(et); Vt < et; Vt++) Ot[Vt] = tt[Vt];
      return Ot
    }

    function ft(tt, et) {
      for (var Vt = 0; Vt < et.length; Vt++) {
        var Ot = et[Vt];
        Ot.enumerable = Ot.enumerable || !1, Ot.configurable = !0, "value" in Ot && (Ot.writable = !0), Object.defineProperty(tt, Ot.key, Ot)
      }
    }

    function wt(tt, et) {
      return wt = Object.setPrototypeOf || function(tt, et) {
        return tt.__proto__ = et, tt
      }, wt(tt, et)
    }

    function yt(tt) {
      var et = function() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (tt) {
          return !1
        }
      }();
      return function() {
        var Vt, qt = Mt(tt);
        if (et) {
          var Dt = Mt(this).constructor;
          Vt = Reflect.construct(qt, arguments, Dt)
        } else Vt = qt.apply(this, arguments);
        return function(tt, et) {
          if (et && ("object" === Ot(et) || "function" === typeof et)) return et;
          if (void 0 !== et) throw new TypeError("Derived constructors may only return object or undefined");
          return Nt(tt)
        }(this, Vt)
      }
    }

    function Nt(tt) {
      if (void 0 === tt) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return tt
    }

    function Mt(tt) {
      return Mt = Object.setPrototypeOf ? Object.getPrototypeOf : function(tt) {
        return tt.__proto__ || Object.getPrototypeOf(tt)
      }, Mt(tt)
    }

    function bt(tt, et, Vt) {
      return et in tt ? Object.defineProperty(tt, et, {
        value: Vt,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : tt[et] = Vt, tt
    }
    var Jt = {
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
      Ct = function(tt) {
        ! function(tt, et) {
          if ("function" !== typeof et && null !== et) throw new TypeError("Super expression must either be null or a function");
          Object.defineProperty(tt, "prototype", {
            value: Object.create(et && et.prototype, {
              constructor: {
                value: tt,
                writable: !0,
                configurable: !0
              }
            }),
            writable: !1
          }), et && wt(tt, et)
        }(mt, tt);
        var et, Vt, Ot, Dt = yt(mt);

        function mt(tt, et) {
          var Vt;
          return function(tt, et) {
            if (!(tt instanceof et)) throw new TypeError("Cannot call a class as a function")
          }(this, mt), bt(Nt(Vt = Dt.call(this, tt, et)), "handleFormat", (function(tt) {
            var et = Vt.props.format;
            return et ? et(tt) : tt
          })), bt(Nt(Vt), "handleUpdate", (function() {
            if (Vt.slider) {
              var tt = Vt.props.orientation,
                et = (0, jt.capitalize)(Jt.orientation[tt].dimension),
                Ot = Vt.slider["offset".concat(et)],
                qt = Vt.handle["offset".concat(et)];
              Vt.setState({
                limit: Ot - qt,
                grab: qt / 2
              })
            }
          })), bt(Nt(Vt), "handleStart", (function(tt) {
            var et = Vt.props.onChangeStart;
            document.addEventListener("mousemove", Vt.handleDrag), document.addEventListener("mouseup", Vt.handleEnd), Vt.setState({
              active: !0
            }, (function() {
              et && et(tt)
            }))
          })), bt(Nt(Vt), "handleDrag", (function(tt) {
            tt.stopPropagation();
            var et = Vt.props.onChange,
              Ot = tt.target,
              qt = Ot.className,
              Dt = Ot.classList,
              mt = Ot.dataset;
            if (et && "rangeslider__labels" !== qt) {
              var dt = Vt.position(tt);
              Dt && Dt.contains("rangeslider__label-item") && mt.value && (dt = parseFloat(mt.value)), et && et(dt, tt)
            }
          })), bt(Nt(Vt), "handleEnd", (function(tt) {
            var et = Vt.props.onChangeComplete;
            Vt.setState({
              active: !1
            }, (function() {
              et && et(tt)
            })), document.removeEventListener("mousemove", Vt.handleDrag), document.removeEventListener("mouseup", Vt.handleEnd)
          })), bt(Nt(Vt), "handleKeyDown", (function(tt) {
            tt.preventDefault();
            var et, Ot = tt.keyCode,
              qt = Vt.props,
              Dt = qt.value,
              mt = qt.min,
              dt = qt.max,
              jt = qt.step,
              Ht = qt.onChange;
            switch (Ot) {
              case 38:
              case 39:
                et = Dt + jt > dt ? dt : Dt + jt, Ht && Ht(et, tt);
                break;
              case 37:
              case 40:
                et = Dt - jt < mt ? mt : Dt - jt, Ht && Ht(et, tt)
            }
          })), bt(Nt(Vt), "getPositionFromValue", (function(tt) {
            var et = Vt.state.limit,
              Ot = Vt.props,
              qt = Ot.min,
              Dt = (tt - qt) / (Ot.max - qt);
            return Math.round(Dt * et)
          })), bt(Nt(Vt), "getValueFromPosition", (function(tt) {
            var et = Vt.state.limit,
              Ot = Vt.props,
              qt = Ot.orientation,
              Dt = Ot.min,
              mt = Ot.max,
              dt = Ot.step,
              Ht = (0, jt.clamp)(tt, 0, et) / (et || 1),
              Xt = dt * Math.round(Ht * (mt - Dt) / dt),
              Qt = "horizontal" === qt ? Xt + Dt : mt - Xt;
            return (0, jt.clamp)(Qt, Dt, mt)
          })), bt(Nt(Vt), "position", (function(tt) {
            var et = Vt.state.grab,
              Ot = Vt.props,
              qt = Ot.orientation,
              Dt = Ot.reverse,
              mt = Vt.slider,
              dt = Jt.orientation[qt].coordinate,
              Ht = Dt ? Jt.orientation[qt].reverseDirection : Jt.orientation[qt].direction,
              Xt = "client".concat((0, jt.capitalize)(dt)),
              Qt = tt.touches ? tt.touches[0][Xt] : tt[Xt],
              lt = mt.getBoundingClientRect()[Ht],
              Et = Dt ? lt - Qt - et : Qt - lt - et;
            return Vt.getValueFromPosition(Et)
          })), bt(Nt(Vt), "coordinates", (function(tt) {
            var et = Vt.state,
              Ot = et.limit,
              qt = et.grab,
              Dt = Vt.props.orientation,
              mt = Vt.getValueFromPosition(tt),
              dt = Vt.getPositionFromValue(mt),
              jt = "horizontal" === Dt ? dt + qt : dt;
            return {
              fill: "horizontal" === Dt ? jt : Ot - jt,
              handle: jt,
              label: jt
            }
          })), bt(Nt(Vt), "renderLabels", (function(tt) {
            return (0, Ht.jsx)("ul", {
              ref: function(tt) {
                Vt.labels = tt
              },
              className: (0, qt.default)("rangeslider__labels"),
              children: tt
            })
          })), Vt.state = {
            active: !1,
            limit: 0,
            grab: 0
          }, Vt
        }
        return et = mt, (Vt = [{
          key: "componentDidMount",
          value: function() {
            this.handleUpdate(), new dt.default(this.handleUpdate).observe(this.slider)
          }
        }, {
          key: "render",
          value: function() {
            var tt = this,
              et = this.props,
              Vt = et.value,
              Ot = et.orientation,
              Dt = et.className,
              mt = et.tooltip,
              dt = et.reverse,
              jt = et.labels,
              Xt = et.min,
              Qt = et.max,
              Et = et.handleLabel,
              ft = this.state.active,
              wt = Jt.orientation[Ot].dimension,
              yt = dt ? Jt.orientation[Ot].reverseDirection : Jt.orientation[Ot].direction,
              Nt = this.getPositionFromValue(Vt),
              Mt = this.coordinates(Nt),
              Ct = bt({}, wt, "".concat(Mt.fill, "px")),
              ut = bt({}, yt, "".concat(Mt.handle, "px")),
              Kt = mt && ft,
              ht = [],
              vt = Object.keys(jt);
            if (vt.length > 0) {
              var Wt, St = lt(vt = vt.sort((function(tt, et) {
                return dt ? tt - et : et - tt
              })));
              try {
                for (St.s(); !(Wt = St.n()).done;) {
                  var ct = Wt.value,
                    Rt = this.getPositionFromValue(ct),
                    It = this.coordinates(Rt),
                    Pt = bt({}, yt, "".concat(It.label, "px"));
                  ht.push((0, Ht.jsx)("li", {
                    className: (0, qt.default)("rangeslider__label-item"),
                    "data-value": ct,
                    onMouseDown: this.handleDrag,
                    onTouchStart: this.handleStart,
                    onTouchEnd: this.handleEnd,
                    style: Pt,
                    children: this.props.labels[ct]
                  }, ct))
                }
              } catch (Zt) {
                St.e(Zt)
              } finally {
                St.f()
              }
            }
            return (0, Ht.jsxs)("div", {
              ref: function(et) {
                tt.slider = et
              },
              className: (0, qt.default)("rangeslider", "rangeslider-".concat(Ot), {
                "rangeslider-reverse": dt
              }, Dt),
              onMouseDown: this.handleDrag,
              onMouseUp: this.handleEnd,
              onTouchStart: this.handleStart,
              onTouchEnd: this.handleEnd,
              "aria-valuemin": Xt,
              "aria-valuemax": Qt,
              "aria-valuenow": Vt,
              "aria-orientation": Ot,
              children: [(0, Ht.jsx)("div", {
                className: "rangeslider__fill",
                style: Ct
              }), (0, Ht.jsxs)("div", {
                ref: function(et) {
                  tt.handle = et
                },
                className: "rangeslider__handle",
                onMouseDown: this.handleStart,
                onTouchMove: this.handleDrag,
                onTouchEnd: this.handleEnd,
                onKeyDown: this.handleKeyDown,
                style: ut,
                tabIndex: 0,
                children: [Kt && (0, Ht.jsx)("div", {
                  ref: function(et) {
                    tt.tooltip = et
                  },
                  className: "rangeslider__handle-tooltip",
                  children: (0, Ht.jsx)("span", {
                    children: this.handleFormat(Vt)
                  })
                }), (0, Ht.jsx)("div", {
                  className: "rangeslider__handle-label",
                  children: Et
                })]
              }), jt && this.renderLabels(ht)]
            })
          }
        }]) && ft(et.prototype, Vt), Ot && ft(et, Ot), Object.defineProperty(et, "prototype", {
          writable: !1
        }), mt
      }(Dt.Component);
    bt(Ct, "propTypes", {
      min: mt.default.number,
      max: mt.default.number,
      step: mt.default.number,
      value: mt.default.number,
      orientation: mt.default.string,
      tooltip: mt.default.bool,
      reverse: mt.default.bool,
      labels: mt.default.object,
      handleLabel: mt.default.string,
      format: mt.default.func,
      onChangeStart: mt.default.func,
      onChange: mt.default.func,
      onChangeComplete: mt.default.func
    }), bt(Ct, "defaultProps", {
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
    var ut = Ct;
    et.default = ut
  },
  5162: (tt, et, Vt) => {
    var Ot;
    et.d = void 0;
    var qt = ((Ot = Vt(5170)) && Ot.__esModule ? Ot : {
      default: Ot
    }).default;
    et.d = qt
  },
  5184: (tt, et) => {
    Object.defineProperty(et, "__esModule", {
      value: !0
    }), et.capitalize = function(tt) {
      return tt.charAt(0).toUpperCase() + tt.substr(1)
    }, et.clamp = function(tt, et, Vt) {
      return Math.min(Math.max(tt, et), Vt)
    }
  },
  5134: (tt, et, Vt) => {
    var Ot = Vt(5136);

    function qt() {}

    function Dt() {}
    Dt.resetWarningCache = qt, tt.exports = function() {
      function tt(tt, et, Vt, qt, Dt, mt) {
        if (mt !== Ot) {
          var dt = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw dt.name = "Invariant Violation", dt
        }
      }

      function et() {
        return tt
      }
      tt.isRequired = tt;
      var Vt = {
        array: tt,
        bigint: tt,
        bool: tt,
        func: tt,
        number: tt,
        object: tt,
        string: tt,
        symbol: tt,
        any: tt,
        arrayOf: et,
        element: tt,
        elementType: tt,
        instanceOf: et,
        node: tt,
        objectOf: et,
        oneOf: et,
        oneOfType: et,
        shape: et,
        exact: et,
        checkPropTypes: Dt,
        resetWarningCache: qt
      };
      return Vt.PropTypes = Vt, Vt
    }
  },
  5127: (tt, et, Vt) => {
    tt.exports = Vt(5134)()
  },
  5136: tt => {
    tt.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  5177: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      default: () => ht
    });
    var Ot = function() {
        if ("undefined" !== typeof Map) return Map;

        function tt(tt, et) {
          var Vt = -1;
          return tt.some((function(tt, Ot) {
            return tt[0] === et && (Vt = Ot, !0)
          })), Vt
        }
        return function() {
          function et() {
            this.__entries__ = []
          }
          return Object.defineProperty(et.prototype, "size", {
            get: function() {
              return this.__entries__.length
            },
            enumerable: !0,
            configurable: !0
          }), et.prototype.get = function(et) {
            var Vt = tt(this.__entries__, et),
              Ot = this.__entries__[Vt];
            return Ot && Ot[1]
          }, et.prototype.set = function(et, Vt) {
            var Ot = tt(this.__entries__, et);
            ~Ot ? this.__entries__[Ot][1] = Vt : this.__entries__.push([et, Vt])
          }, et.prototype.delete = function(et) {
            var Vt = this.__entries__,
              Ot = tt(Vt, et);
            ~Ot && Vt.splice(Ot, 1)
          }, et.prototype.has = function(et) {
            return !!~tt(this.__entries__, et)
          }, et.prototype.clear = function() {
            this.__entries__.splice(0)
          }, et.prototype.forEach = function(tt, et) {
            void 0 === et && (et = null);
            for (var Vt = 0, Ot = this.__entries__; Vt < Ot.length; Vt++) {
              var qt = Ot[Vt];
              tt.call(et, qt[1], qt[0])
            }
          }, et
        }()
      }(),
      qt = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document,
      Dt = "undefined" !== typeof Vt.g && Vt.g.Math === Math ? Vt.g : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")(),
      mt = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(Dt) : function(tt) {
        return setTimeout((function() {
          return tt(Date.now())
        }), 1e3 / 60)
      };
    var dt = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
      jt = "undefined" !== typeof MutationObserver,
      Ht = function() {
        function tt() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(tt, et) {
            var Vt = !1,
              Ot = !1,
              qt = 0;

            function Dt() {
              Vt && (Vt = !1, tt()), Ot && jt()
            }

            function dt() {
              mt(Dt)
            }

            function jt() {
              var tt = Date.now();
              if (Vt) {
                if (tt - qt < 2) return;
                Ot = !0
              } else Vt = !0, Ot = !1, setTimeout(dt, et);
              qt = tt
            }
            return jt
          }(this.refresh.bind(this), 20)
        }
        return tt.prototype.addObserver = function(tt) {
          ~this.observers_.indexOf(tt) || this.observers_.push(tt), this.connected_ || this.connect_()
        }, tt.prototype.removeObserver = function(tt) {
          var et = this.observers_,
            Vt = et.indexOf(tt);
          ~Vt && et.splice(Vt, 1), !et.length && this.connected_ && this.disconnect_()
        }, tt.prototype.refresh = function() {
          this.updateObservers_() && this.refresh()
        }, tt.prototype.updateObservers_ = function() {
          var tt = this.observers_.filter((function(tt) {
            return tt.gatherActive(), tt.hasActive()
          }));
          return tt.forEach((function(tt) {
            return tt.broadcastActive()
          })), tt.length > 0
        }, tt.prototype.connect_ = function() {
          qt && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), jt ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
          })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, tt.prototype.disconnect_ = function() {
          qt && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, tt.prototype.onTransitionEnd_ = function(tt) {
          var et = tt.propertyName,
            Vt = void 0 === et ? "" : et;
          dt.some((function(tt) {
            return !!~Vt.indexOf(tt)
          })) && this.refresh()
        }, tt.getInstance = function() {
          return this.instance_ || (this.instance_ = new tt), this.instance_
        }, tt.instance_ = null, tt
      }(),
      Xt = function(tt, et) {
        for (var Vt = 0, Ot = Object.keys(et); Vt < Ot.length; Vt++) {
          var qt = Ot[Vt];
          Object.defineProperty(tt, qt, {
            value: et[qt],
            enumerable: !1,
            writable: !1,
            configurable: !0
          })
        }
        return tt
      },
      Qt = function(tt) {
        return tt && tt.ownerDocument && tt.ownerDocument.defaultView || Dt
      },
      lt = Mt(0, 0, 0, 0);

    function Et(tt) {
      return parseFloat(tt) || 0
    }

    function ft(tt) {
      for (var et = [], Vt = 1; Vt < arguments.length; Vt++) et[Vt - 1] = arguments[Vt];
      return et.reduce((function(et, Vt) {
        return et + Et(tt["border-" + Vt + "-width"])
      }), 0)
    }

    function wt(tt) {
      var et = tt.clientWidth,
        Vt = tt.clientHeight;
      if (!et && !Vt) return lt;
      var Ot = Qt(tt).getComputedStyle(tt),
        qt = function(tt) {
          for (var et = {}, Vt = 0, Ot = ["top", "right", "bottom", "left"]; Vt < Ot.length; Vt++) {
            var qt = Ot[Vt],
              Dt = tt["padding-" + qt];
            et[qt] = Et(Dt)
          }
          return et
        }(Ot),
        Dt = qt.left + qt.right,
        mt = qt.top + qt.bottom,
        dt = Et(Ot.width),
        jt = Et(Ot.height);
      if ("border-box" === Ot.boxSizing && (Math.round(dt + Dt) !== et && (dt -= ft(Ot, "left", "right") + Dt), Math.round(jt + mt) !== Vt && (jt -= ft(Ot, "top", "bottom") + mt)), ! function(tt) {
          return tt === Qt(tt).document.documentElement
        }(tt)) {
        var Ht = Math.round(dt + Dt) - et,
          Xt = Math.round(jt + mt) - Vt;
        1 !== Math.abs(Ht) && (dt -= Ht), 1 !== Math.abs(Xt) && (jt -= Xt)
      }
      return Mt(qt.left, qt.top, dt, jt)
    }
    var yt = "undefined" !== typeof SVGGraphicsElement ? function(tt) {
      return tt instanceof Qt(tt).SVGGraphicsElement
    } : function(tt) {
      return tt instanceof Qt(tt).SVGElement && "function" === typeof tt.getBBox
    };

    function Nt(tt) {
      return qt ? yt(tt) ? function(tt) {
        var et = tt.getBBox();
        return Mt(0, 0, et.width, et.height)
      }(tt) : wt(tt) : lt
    }

    function Mt(tt, et, Vt, Ot) {
      return {
        x: tt,
        y: et,
        width: Vt,
        height: Ot
      }
    }
    var bt = function() {
        function tt(tt) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Mt(0, 0, 0, 0), this.target = tt
        }
        return tt.prototype.isActive = function() {
          var tt = Nt(this.target);
          return this.contentRect_ = tt, tt.width !== this.broadcastWidth || tt.height !== this.broadcastHeight
        }, tt.prototype.broadcastRect = function() {
          var tt = this.contentRect_;
          return this.broadcastWidth = tt.width, this.broadcastHeight = tt.height, tt
        }, tt
      }(),
      Jt = function(tt, et) {
        var Vt = function(tt) {
          var et = tt.x,
            Vt = tt.y,
            Ot = tt.width,
            qt = tt.height,
            Dt = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
            mt = Object.create(Dt.prototype);
          return Xt(mt, {
            x: et,
            y: Vt,
            width: Ot,
            height: qt,
            top: Vt,
            right: et + Ot,
            bottom: qt + Vt,
            left: et
          }), mt
        }(et);
        Xt(this, {
          target: tt,
          contentRect: Vt
        })
      },
      Ct = function() {
        function tt(tt, et, Vt) {
          if (this.activeObservations_ = [], this.observations_ = new Ot, "function" !== typeof tt) throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = tt, this.controller_ = et, this.callbackCtx_ = Vt
        }
        return tt.prototype.observe = function(tt) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(tt instanceof Qt(tt).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var et = this.observations_;
            et.has(tt) || (et.set(tt, new bt(tt)), this.controller_.addObserver(this), this.controller_.refresh())
          }
        }, tt.prototype.unobserve = function(tt) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(tt instanceof Qt(tt).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var et = this.observations_;
            et.has(tt) && (et.delete(tt), et.size || this.controller_.removeObserver(this))
          }
        }, tt.prototype.disconnect = function() {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, tt.prototype.gatherActive = function() {
          var tt = this;
          this.clearActive(), this.observations_.forEach((function(et) {
            et.isActive() && tt.activeObservations_.push(et)
          }))
        }, tt.prototype.broadcastActive = function() {
          if (this.hasActive()) {
            var tt = this.callbackCtx_,
              et = this.activeObservations_.map((function(tt) {
                return new Jt(tt.target, tt.broadcastRect())
              }));
            this.callback_.call(tt, et, tt), this.clearActive()
          }
        }, tt.prototype.clearActive = function() {
          this.activeObservations_.splice(0)
        }, tt.prototype.hasActive = function() {
          return this.activeObservations_.length > 0
        }, tt
      }(),
      ut = "undefined" !== typeof WeakMap ? new WeakMap : new Ot,
      Kt = function tt(et) {
        if (!(this instanceof tt)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var Vt = Ht.getInstance(),
          Ot = new Ct(et, Vt, this);
        ut.set(this, Ot)
      };
    ["observe", "unobserve", "disconnect"].forEach((function(tt) {
      Kt.prototype[tt] = function() {
        var et;
        return (et = ut.get(this))[tt].apply(et, arguments)
      }
    }));
    const ht = "undefined" !== typeof Dt.ResizeObserver ? Dt.ResizeObserver : Kt
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);