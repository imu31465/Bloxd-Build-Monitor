export const id = 106;
export const ids = [106];
export const modules = {
  4699: (kk, Fk, Bk) => {
    function Rk(kk) {
      return Rk = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, Rk(kk)
    }
    Object.defineProperty(Fk, "__esModule", {
      value: !0
    }), Fk.default = void 0;
    var tk = Vk(Bk(1020)),
      ak = function(kk, Fk) {
        if (!Fk && kk && kk.__esModule) return kk;
        if (null === kk || "object" !== Rk(kk) && "function" !== typeof kk) return {
          default: kk
        };
        var Bk = sk(Fk);
        if (Bk && Bk.has(kk)) return Bk.get(kk);
        var tk = {},
          ak = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var Xk in kk)
          if ("default" !== Xk && Object.prototype.hasOwnProperty.call(kk, Xk)) {
            var bk = ak ? Object.getOwnPropertyDescriptor(kk, Xk) : null;
            bk && (bk.get || bk.set) ? Object.defineProperty(tk, Xk, bk) : tk[Xk] = kk[Xk]
          } tk.default = kk, Bk && Bk.set(kk, tk);
        return tk
      }(Bk(61)),
      Xk = Vk(Bk(4667)),
      bk = Vk(Bk(4701)),
      wk = Bk(4707),
      dk = Bk(1069);

    function sk(kk) {
      if ("function" !== typeof WeakMap) return null;
      var Fk = new WeakMap,
        Bk = new WeakMap;
      return (sk = function(kk) {
        return kk ? Bk : Fk
      })(kk)
    }

    function Vk(kk) {
      return kk && kk.__esModule ? kk : {
        default: kk
      }
    }

    function Jk(kk, Fk) {
      var Bk = "undefined" !== typeof Symbol && kk[Symbol.iterator] || kk["@@iterator"];
      if (!Bk) {
        if (Array.isArray(kk) || (Bk = function(kk, Fk) {
            if (!kk) return;
            if ("string" === typeof kk) return Ak(kk, Fk);
            var Bk = Object.prototype.toString.call(kk).slice(8, -1);
            "Object" === Bk && kk.constructor && (Bk = kk.constructor.name);
            if ("Map" === Bk || "Set" === Bk) return Array.from(kk);
            if ("Arguments" === Bk || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Bk)) return Ak(kk, Fk)
          }(kk)) || Fk && kk && "number" === typeof kk.length) {
          Bk && (kk = Bk);
          var Rk = 0,
            tk = function() {};
          return {
            s: tk,
            n: function() {
              return Rk >= kk.length ? {
                done: !0
              } : {
                done: !1,
                value: kk[Rk++]
              }
            },
            e: function(kk) {
              throw kk
            },
            f: tk
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var ak, Xk = !0,
        bk = !1;
      return {
        s: function() {
          Bk = Bk.call(kk)
        },
        n: function() {
          var kk = Bk.next();
          return Xk = kk.done, kk
        },
        e: function(kk) {
          bk = !0, ak = kk
        },
        f: function() {
          try {
            Xk || null == Bk.return || Bk.return()
          } finally {
            if (bk) throw ak
          }
        }
      }
    }

    function Ak(kk, Fk) {
      (null == Fk || Fk > kk.length) && (Fk = kk.length);
      for (var Bk = 0, Rk = new Array(Fk); Bk < Fk; Bk++) Rk[Bk] = kk[Bk];
      return Rk
    }

    function ek(kk, Fk) {
      for (var Bk = 0; Bk < Fk.length; Bk++) {
        var Rk = Fk[Bk];
        Rk.enumerable = Rk.enumerable || !1, Rk.configurable = !0, "value" in Rk && (Rk.writable = !0), Object.defineProperty(kk, Rk.key, Rk)
      }
    }

    function yk(kk, Fk) {
      return yk = Object.setPrototypeOf || function(kk, Fk) {
        return kk.__proto__ = Fk, kk
      }, yk(kk, Fk)
    }

    function fk(kk) {
      var Fk = function() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (kk) {
          return !1
        }
      }();
      return function() {
        var Bk, tk = Wk(kk);
        if (Fk) {
          var ak = Wk(this).constructor;
          Bk = Reflect.construct(tk, arguments, ak)
        } else Bk = tk.apply(this, arguments);
        return function(kk, Fk) {
          if (Fk && ("object" === Rk(Fk) || "function" === typeof Fk)) return Fk;
          if (void 0 !== Fk) throw new TypeError("Derived constructors may only return object or undefined");
          return mk(kk)
        }(this, Bk)
      }
    }

    function mk(kk) {
      if (void 0 === kk) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return kk
    }

    function Wk(kk) {
      return Wk = Object.setPrototypeOf ? Object.getPrototypeOf : function(kk) {
        return kk.__proto__ || Object.getPrototypeOf(kk)
      }, Wk(kk)
    }

    function vk(kk, Fk, Bk) {
      return Fk in kk ? Object.defineProperty(kk, Fk, {
        value: Bk,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[Fk] = Bk, kk
    }
    var ik = {
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
      Yk = function(kk) {
        ! function(kk, Fk) {
          if ("function" !== typeof Fk && null !== Fk) throw new TypeError("Super expression must either be null or a function");
          Object.defineProperty(kk, "prototype", {
            value: Object.create(Fk && Fk.prototype, {
              constructor: {
                value: kk,
                writable: !0,
                configurable: !0
              }
            }),
            writable: !1
          }), Fk && yk(kk, Fk)
        }(Xk, kk);
        var Fk, Bk, Rk, ak = fk(Xk);

        function Xk(kk, Fk) {
          var Bk;
          return function(kk, Fk) {
            if (!(kk instanceof Fk)) throw new TypeError("Cannot call a class as a function")
          }(this, Xk), vk(mk(Bk = ak.call(this, kk, Fk)), "handleFormat", (function(kk) {
            var Fk = Bk.props.format;
            return Fk ? Fk(kk) : kk
          })), vk(mk(Bk), "handleUpdate", (function() {
            if (Bk.slider) {
              var kk = Bk.props.orientation,
                Fk = (0, wk.capitalize)(ik.orientation[kk].dimension),
                Rk = Bk.slider["offset".concat(Fk)],
                tk = Bk.handle["offset".concat(Fk)];
              Bk.setState({
                limit: Rk - tk,
                grab: tk / 2
              })
            }
          })), vk(mk(Bk), "handleStart", (function(kk) {
            var Fk = Bk.props.onChangeStart;
            document.addEventListener("mousemove", Bk.handleDrag), document.addEventListener("mouseup", Bk.handleEnd), Bk.setState({
              active: !0
            }, (function() {
              Fk && Fk(kk)
            }))
          })), vk(mk(Bk), "handleDrag", (function(kk) {
            kk.stopPropagation();
            var Fk = Bk.props.onChange,
              Rk = kk.target,
              tk = Rk.className,
              ak = Rk.classList,
              Xk = Rk.dataset;
            if (Fk && "rangeslider__labels" !== tk) {
              var bk = Bk.position(kk);
              ak && ak.contains("rangeslider__label-item") && Xk.value && (bk = parseFloat(Xk.value)), Fk && Fk(bk, kk)
            }
          })), vk(mk(Bk), "handleEnd", (function(kk) {
            var Fk = Bk.props.onChangeComplete;
            Bk.setState({
              active: !1
            }, (function() {
              Fk && Fk(kk)
            })), document.removeEventListener("mousemove", Bk.handleDrag), document.removeEventListener("mouseup", Bk.handleEnd)
          })), vk(mk(Bk), "handleKeyDown", (function(kk) {
            kk.preventDefault();
            var Fk, Rk = kk.keyCode,
              tk = Bk.props,
              ak = tk.value,
              Xk = tk.min,
              bk = tk.max,
              wk = tk.step,
              dk = tk.onChange;
            switch (Rk) {
              case 38:
              case 39:
                Fk = ak + wk > bk ? bk : ak + wk, dk && dk(Fk, kk);
                break;
              case 37:
              case 40:
                Fk = ak - wk < Xk ? Xk : ak - wk, dk && dk(Fk, kk)
            }
          })), vk(mk(Bk), "getPositionFromValue", (function(kk) {
            var Fk = Bk.state.limit,
              Rk = Bk.props,
              tk = Rk.min,
              ak = (kk - tk) / (Rk.max - tk);
            return Math.round(ak * Fk)
          })), vk(mk(Bk), "getValueFromPosition", (function(kk) {
            var Fk = Bk.state.limit,
              Rk = Bk.props,
              tk = Rk.orientation,
              ak = Rk.min,
              Xk = Rk.max,
              bk = Rk.step,
              dk = (0, wk.clamp)(kk, 0, Fk) / (Fk || 1),
              sk = bk * Math.round(dk * (Xk - ak) / bk),
              Vk = "horizontal" === tk ? sk + ak : Xk - sk;
            return (0, wk.clamp)(Vk, ak, Xk)
          })), vk(mk(Bk), "position", (function(kk) {
            var Fk = Bk.state.grab,
              Rk = Bk.props,
              tk = Rk.orientation,
              ak = Rk.reverse,
              Xk = Bk.slider,
              bk = ik.orientation[tk].coordinate,
              dk = ak ? ik.orientation[tk].reverseDirection : ik.orientation[tk].direction,
              sk = "client".concat((0, wk.capitalize)(bk)),
              Vk = kk.touches ? kk.touches[0][sk] : kk[sk],
              Jk = Xk.getBoundingClientRect()[dk],
              Ak = ak ? Jk - Vk - Fk : Vk - Jk - Fk;
            return Bk.getValueFromPosition(Ak)
          })), vk(mk(Bk), "coordinates", (function(kk) {
            var Fk = Bk.state,
              Rk = Fk.limit,
              tk = Fk.grab,
              ak = Bk.props.orientation,
              Xk = Bk.getValueFromPosition(kk),
              bk = Bk.getPositionFromValue(Xk),
              wk = "horizontal" === ak ? bk + tk : bk;
            return {
              fill: "horizontal" === ak ? wk : Rk - wk,
              handle: wk,
              label: wk
            }
          })), vk(mk(Bk), "renderLabels", (function(kk) {
            return (0, dk.jsx)("ul", {
              ref: function(kk) {
                Bk.labels = kk
              },
              className: (0, tk.default)("rangeslider__labels"),
              children: kk
            })
          })), Bk.state = {
            active: !1,
            limit: 0,
            grab: 0
          }, Bk
        }
        return Fk = Xk, (Bk = [{
          key: "componentDidMount",
          value: function() {
            this.handleUpdate(), new bk.default(this.handleUpdate).observe(this.slider)
          }
        }, {
          key: "render",
          value: function() {
            var kk = this,
              Fk = this.props,
              Bk = Fk.value,
              Rk = Fk.orientation,
              ak = Fk.className,
              Xk = Fk.tooltip,
              bk = Fk.reverse,
              wk = Fk.labels,
              sk = Fk.min,
              Vk = Fk.max,
              Ak = Fk.handleLabel,
              ek = this.state.active,
              yk = ik.orientation[Rk].dimension,
              fk = bk ? ik.orientation[Rk].reverseDirection : ik.orientation[Rk].direction,
              mk = this.getPositionFromValue(Bk),
              Wk = this.coordinates(mk),
              Yk = vk({}, yk, "".concat(Wk.fill, "px")),
              Lk = vk({}, fk, "".concat(Wk.handle, "px")),
              Ok = Xk && ek,
              Ek = [],
              Sk = Object.keys(wk);
            if (Sk.length > 0) {
              var Nk, Hk = Jk(Sk = Sk.sort((function(kk, Fk) {
                return bk ? kk - Fk : Fk - kk
              })));
              try {
                for (Hk.s(); !(Nk = Hk.n()).done;) {
                  var uk = Nk.value,
                    Mk = this.getPositionFromValue(uk),
                    gk = this.coordinates(Mk),
                    Uk = vk({}, fk, "".concat(gk.label, "px"));
                  Ek.push((0, dk.jsx)("li", {
                    className: (0, tk.default)("rangeslider__label-item"),
                    "data-value": uk,
                    onMouseDown: this.handleDrag,
                    onTouchStart: this.handleStart,
                    onTouchEnd: this.handleEnd,
                    style: Uk,
                    children: this.props.labels[uk]
                  }, uk))
                }
              } catch (ck) {
                Hk.e(ck)
              } finally {
                Hk.f()
              }
            }
            return (0, dk.jsxs)("div", {
              ref: function(Fk) {
                kk.slider = Fk
              },
              className: (0, tk.default)("rangeslider", "rangeslider-".concat(Rk), {
                "rangeslider-reverse": bk
              }, ak),
              onMouseDown: this.handleDrag,
              onMouseUp: this.handleEnd,
              onTouchStart: this.handleStart,
              onTouchEnd: this.handleEnd,
              "aria-valuemin": sk,
              "aria-valuemax": Vk,
              "aria-valuenow": Bk,
              "aria-orientation": Rk,
              children: [(0, dk.jsx)("div", {
                className: "rangeslider__fill",
                style: Yk
              }), (0, dk.jsxs)("div", {
                ref: function(Fk) {
                  kk.handle = Fk
                },
                className: "rangeslider__handle",
                onMouseDown: this.handleStart,
                onTouchMove: this.handleDrag,
                onTouchEnd: this.handleEnd,
                onKeyDown: this.handleKeyDown,
                style: Lk,
                tabIndex: 0,
                children: [Ok && (0, dk.jsx)("div", {
                  ref: function(Fk) {
                    kk.tooltip = Fk
                  },
                  className: "rangeslider__handle-tooltip",
                  children: (0, dk.jsx)("span", {
                    children: this.handleFormat(Bk)
                  })
                }), (0, dk.jsx)("div", {
                  className: "rangeslider__handle-label",
                  children: Ak
                })]
              }), wk && this.renderLabels(Ek)]
            })
          }
        }]) && ek(Fk.prototype, Bk), Rk && ek(Fk, Rk), Object.defineProperty(Fk, "prototype", {
          writable: !1
        }), Xk
      }(ak.Component);
    vk(Yk, "propTypes", {
      min: Xk.default.number,
      max: Xk.default.number,
      step: Xk.default.number,
      value: Xk.default.number,
      orientation: Xk.default.string,
      tooltip: Xk.default.bool,
      reverse: Xk.default.bool,
      labels: Xk.default.object,
      handleLabel: Xk.default.string,
      format: Xk.default.func,
      onChangeStart: Xk.default.func,
      onChange: Xk.default.func,
      onChangeComplete: Xk.default.func
    }), vk(Yk, "defaultProps", {
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
    var Lk = Yk;
    Fk.default = Lk
  },
  4696: (kk, Fk, Bk) => {
    var Rk;
    Fk.d = void 0;
    var tk = ((Rk = Bk(4699)) && Rk.__esModule ? Rk : {
      default: Rk
    }).default;
    Fk.d = tk
  },
  4707: (kk, Fk) => {
    Object.defineProperty(Fk, "__esModule", {
      value: !0
    }), Fk.capitalize = function(kk) {
      return kk.charAt(0).toUpperCase() + kk.substr(1)
    }, Fk.clamp = function(kk, Fk, Bk) {
      return Math.min(Math.max(kk, Fk), Bk)
    }
  },
  4669: (kk, Fk, Bk) => {
    var Rk = Bk(4671);

    function tk() {}

    function ak() {}
    ak.resetWarningCache = tk, kk.exports = function() {
      function kk(kk, Fk, Bk, tk, ak, Xk) {
        if (Xk !== Rk) {
          var bk = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw bk.name = "Invariant Violation", bk
        }
      }

      function Fk() {
        return kk
      }
      kk.isRequired = kk;
      var Bk = {
        array: kk,
        bigint: kk,
        bool: kk,
        func: kk,
        number: kk,
        object: kk,
        string: kk,
        symbol: kk,
        any: kk,
        arrayOf: Fk,
        element: kk,
        elementType: kk,
        instanceOf: Fk,
        node: kk,
        objectOf: Fk,
        oneOf: Fk,
        oneOfType: Fk,
        shape: Fk,
        exact: Fk,
        checkPropTypes: ak,
        resetWarningCache: tk
      };
      return Bk.PropTypes = Bk, Bk
    }
  },
  4667: (kk, Fk, Bk) => {
    kk.exports = Bk(4669)()
  },
  4671: kk => {
    kk.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  4701: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      default: () => Ek
    });
    var Rk = function() {
        if ("undefined" !== typeof Map) return Map;

        function kk(kk, Fk) {
          var Bk = -1;
          return kk.some((function(kk, Rk) {
            return kk[0] === Fk && (Bk = Rk, !0)
          })), Bk
        }
        return function() {
          function Fk() {
            this.__entries__ = []
          }
          return Object.defineProperty(Fk.prototype, "size", {
            get: function() {
              return this.__entries__.length
            },
            enumerable: !0,
            configurable: !0
          }), Fk.prototype.get = function(Fk) {
            var Bk = kk(this.__entries__, Fk),
              Rk = this.__entries__[Bk];
            return Rk && Rk[1]
          }, Fk.prototype.set = function(Fk, Bk) {
            var Rk = kk(this.__entries__, Fk);
            ~Rk ? this.__entries__[Rk][1] = Bk : this.__entries__.push([Fk, Bk])
          }, Fk.prototype.delete = function(Fk) {
            var Bk = this.__entries__,
              Rk = kk(Bk, Fk);
            ~Rk && Bk.splice(Rk, 1)
          }, Fk.prototype.has = function(Fk) {
            return !!~kk(this.__entries__, Fk)
          }, Fk.prototype.clear = function() {
            this.__entries__.splice(0)
          }, Fk.prototype.forEach = function(kk, Fk) {
            void 0 === Fk && (Fk = null);
            for (var Bk = 0, Rk = this.__entries__; Bk < Rk.length; Bk++) {
              var tk = Rk[Bk];
              kk.call(Fk, tk[1], tk[0])
            }
          }, Fk
        }()
      }(),
      tk = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document,
      ak = "undefined" !== typeof Bk.g && Bk.g.Math === Math ? Bk.g : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")(),
      Xk = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(ak) : function(kk) {
        return setTimeout((function() {
          return kk(Date.now())
        }), 1e3 / 60)
      };
    var bk = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
      wk = "undefined" !== typeof MutationObserver,
      dk = function() {
        function kk() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(kk, Fk) {
            var Bk = !1,
              Rk = !1,
              tk = 0;

            function ak() {
              Bk && (Bk = !1, kk()), Rk && wk()
            }

            function bk() {
              Xk(ak)
            }

            function wk() {
              var kk = Date.now();
              if (Bk) {
                if (kk - tk < 2) return;
                Rk = !0
              } else Bk = !0, Rk = !1, setTimeout(bk, Fk);
              tk = kk
            }
            return wk
          }(this.refresh.bind(this), 20)
        }
        return kk.prototype.addObserver = function(kk) {
          ~this.observers_.indexOf(kk) || this.observers_.push(kk), this.connected_ || this.connect_()
        }, kk.prototype.removeObserver = function(kk) {
          var Fk = this.observers_,
            Bk = Fk.indexOf(kk);
          ~Bk && Fk.splice(Bk, 1), !Fk.length && this.connected_ && this.disconnect_()
        }, kk.prototype.refresh = function() {
          this.updateObservers_() && this.refresh()
        }, kk.prototype.updateObservers_ = function() {
          var kk = this.observers_.filter((function(kk) {
            return kk.gatherActive(), kk.hasActive()
          }));
          return kk.forEach((function(kk) {
            return kk.broadcastActive()
          })), kk.length > 0
        }, kk.prototype.connect_ = function() {
          tk && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), wk ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
          })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, kk.prototype.disconnect_ = function() {
          tk && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, kk.prototype.onTransitionEnd_ = function(kk) {
          var Fk = kk.propertyName,
            Bk = void 0 === Fk ? "" : Fk;
          bk.some((function(kk) {
            return !!~Bk.indexOf(kk)
          })) && this.refresh()
        }, kk.getInstance = function() {
          return this.instance_ || (this.instance_ = new kk), this.instance_
        }, kk.instance_ = null, kk
      }(),
      sk = function(kk, Fk) {
        for (var Bk = 0, Rk = Object.keys(Fk); Bk < Rk.length; Bk++) {
          var tk = Rk[Bk];
          Object.defineProperty(kk, tk, {
            value: Fk[tk],
            enumerable: !1,
            writable: !1,
            configurable: !0
          })
        }
        return kk
      },
      Vk = function(kk) {
        return kk && kk.ownerDocument && kk.ownerDocument.defaultView || ak
      },
      Jk = Wk(0, 0, 0, 0);

    function Ak(kk) {
      return parseFloat(kk) || 0
    }

    function ek(kk) {
      for (var Fk = [], Bk = 1; Bk < arguments.length; Bk++) Fk[Bk - 1] = arguments[Bk];
      return Fk.reduce((function(Fk, Bk) {
        return Fk + Ak(kk["border-" + Bk + "-width"])
      }), 0)
    }

    function yk(kk) {
      var Fk = kk.clientWidth,
        Bk = kk.clientHeight;
      if (!Fk && !Bk) return Jk;
      var Rk = Vk(kk).getComputedStyle(kk),
        tk = function(kk) {
          for (var Fk = {}, Bk = 0, Rk = ["top", "right", "bottom", "left"]; Bk < Rk.length; Bk++) {
            var tk = Rk[Bk],
              ak = kk["padding-" + tk];
            Fk[tk] = Ak(ak)
          }
          return Fk
        }(Rk),
        ak = tk.left + tk.right,
        Xk = tk.top + tk.bottom,
        bk = Ak(Rk.width),
        wk = Ak(Rk.height);
      if ("border-box" === Rk.boxSizing && (Math.round(bk + ak) !== Fk && (bk -= ek(Rk, "left", "right") + ak), Math.round(wk + Xk) !== Bk && (wk -= ek(Rk, "top", "bottom") + Xk)), ! function(kk) {
          return kk === Vk(kk).document.documentElement
        }(kk)) {
        var dk = Math.round(bk + ak) - Fk,
          sk = Math.round(wk + Xk) - Bk;
        1 !== Math.abs(dk) && (bk -= dk), 1 !== Math.abs(sk) && (wk -= sk)
      }
      return Wk(tk.left, tk.top, bk, wk)
    }
    var fk = "undefined" !== typeof SVGGraphicsElement ? function(kk) {
      return kk instanceof Vk(kk).SVGGraphicsElement
    } : function(kk) {
      return kk instanceof Vk(kk).SVGElement && "function" === typeof kk.getBBox
    };

    function mk(kk) {
      return tk ? fk(kk) ? function(kk) {
        var Fk = kk.getBBox();
        return Wk(0, 0, Fk.width, Fk.height)
      }(kk) : yk(kk) : Jk
    }

    function Wk(kk, Fk, Bk, Rk) {
      return {
        x: kk,
        y: Fk,
        width: Bk,
        height: Rk
      }
    }
    var vk = function() {
        function kk(kk) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Wk(0, 0, 0, 0), this.target = kk
        }
        return kk.prototype.isActive = function() {
          var kk = mk(this.target);
          return this.contentRect_ = kk, kk.width !== this.broadcastWidth || kk.height !== this.broadcastHeight
        }, kk.prototype.broadcastRect = function() {
          var kk = this.contentRect_;
          return this.broadcastWidth = kk.width, this.broadcastHeight = kk.height, kk
        }, kk
      }(),
      ik = function(kk, Fk) {
        var Bk = function(kk) {
          var Fk = kk.x,
            Bk = kk.y,
            Rk = kk.width,
            tk = kk.height,
            ak = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
            Xk = Object.create(ak.prototype);
          return sk(Xk, {
            x: Fk,
            y: Bk,
            width: Rk,
            height: tk,
            top: Bk,
            right: Fk + Rk,
            bottom: tk + Bk,
            left: Fk
          }), Xk
        }(Fk);
        sk(this, {
          target: kk,
          contentRect: Bk
        })
      },
      Yk = function() {
        function kk(kk, Fk, Bk) {
          if (this.activeObservations_ = [], this.observations_ = new Rk, "function" !== typeof kk) throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = kk, this.controller_ = Fk, this.callbackCtx_ = Bk
        }
        return kk.prototype.observe = function(kk) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(kk instanceof Vk(kk).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var Fk = this.observations_;
            Fk.has(kk) || (Fk.set(kk, new vk(kk)), this.controller_.addObserver(this), this.controller_.refresh())
          }
        }, kk.prototype.unobserve = function(kk) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(kk instanceof Vk(kk).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var Fk = this.observations_;
            Fk.has(kk) && (Fk.delete(kk), Fk.size || this.controller_.removeObserver(this))
          }
        }, kk.prototype.disconnect = function() {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, kk.prototype.gatherActive = function() {
          var kk = this;
          this.clearActive(), this.observations_.forEach((function(Fk) {
            Fk.isActive() && kk.activeObservations_.push(Fk)
          }))
        }, kk.prototype.broadcastActive = function() {
          if (this.hasActive()) {
            var kk = this.callbackCtx_,
              Fk = this.activeObservations_.map((function(kk) {
                return new ik(kk.target, kk.broadcastRect())
              }));
            this.callback_.call(kk, Fk, kk), this.clearActive()
          }
        }, kk.prototype.clearActive = function() {
          this.activeObservations_.splice(0)
        }, kk.prototype.hasActive = function() {
          return this.activeObservations_.length > 0
        }, kk
      }(),
      Lk = "undefined" !== typeof WeakMap ? new WeakMap : new Rk,
      Ok = function kk(Fk) {
        if (!(this instanceof kk)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var Bk = dk.getInstance(),
          Rk = new Yk(Fk, Bk, this);
        Lk.set(this, Rk)
      };
    ["observe", "unobserve", "disconnect"].forEach((function(kk) {
      Ok.prototype[kk] = function() {
        var Fk;
        return (Fk = Lk.get(this))[kk].apply(Fk, arguments)
      }
    }));
    const Ek = "undefined" !== typeof ak.ResizeObserver ? ak.ResizeObserver : Ok
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);