export const id = 108;
export const ids = [108];
export const modules = {
  4996: (kk, Fk, Ik) => {
    function Xk(kk) {
      return Xk = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, Xk(kk)
    }
    Object.defineProperty(Fk, "__esModule", {
      value: !0
    }), Fk.default = void 0;
    var Tk = tk(Ik(1055)),
      ik = function(kk, Fk) {
        if (!Fk && kk && kk.__esModule) return kk;
        if (null === kk || "object" !== Xk(kk) && "function" !== typeof kk) return {
          default: kk
        };
        var Ik = Lk(Fk);
        if (Ik && Ik.has(kk)) return Ik.get(kk);
        var Tk = {},
          ik = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var yk in kk)
          if ("default" !== yk && Object.prototype.hasOwnProperty.call(kk, yk)) {
            var lk = ik ? Object.getOwnPropertyDescriptor(kk, yk) : null;
            lk && (lk.get || lk.set) ? Object.defineProperty(Tk, yk, lk) : Tk[yk] = kk[yk]
          } Tk.default = kk, Ik && Ik.set(kk, Tk);
        return Tk
      }(Ik(58)),
      yk = tk(Ik(4946)),
      lk = tk(Ik(5002)),
      ak = Ik(5007),
      qk = Ik(1096);

    function Lk(kk) {
      if ("function" !== typeof WeakMap) return null;
      var Fk = new WeakMap,
        Ik = new WeakMap;
      return (Lk = function(kk) {
        return kk ? Ik : Fk
      })(kk)
    }

    function tk(kk) {
      return kk && kk.__esModule ? kk : {
        default: kk
      }
    }

    function Zk(kk, Fk) {
      var Ik = "undefined" !== typeof Symbol && kk[Symbol.iterator] || kk["@@iterator"];
      if (!Ik) {
        if (Array.isArray(kk) || (Ik = function(kk, Fk) {
            if (!kk) return;
            if ("string" === typeof kk) return jk(kk, Fk);
            var Ik = Object.prototype.toString.call(kk).slice(8, -1);
            "Object" === Ik && kk.constructor && (Ik = kk.constructor.name);
            if ("Map" === Ik || "Set" === Ik) return Array.from(kk);
            if ("Arguments" === Ik || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Ik)) return jk(kk, Fk)
          }(kk)) || Fk && kk && "number" === typeof kk.length) {
          Ik && (kk = Ik);
          var Xk = 0,
            Tk = function() {};
          return {
            s: Tk,
            n: function() {
              return Xk >= kk.length ? {
                done: !0
              } : {
                done: !1,
                value: kk[Xk++]
              }
            },
            e: function(kk) {
              throw kk
            },
            f: Tk
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var ik, yk = !0,
        lk = !1;
      return {
        s: function() {
          Ik = Ik.call(kk)
        },
        n: function() {
          var kk = Ik.next();
          return yk = kk.done, kk
        },
        e: function(kk) {
          lk = !0, ik = kk
        },
        f: function() {
          try {
            yk || null == Ik.return || Ik.return()
          } finally {
            if (lk) throw ik
          }
        }
      }
    }

    function jk(kk, Fk) {
      (null == Fk || Fk > kk.length) && (Fk = kk.length);
      for (var Ik = 0, Xk = new Array(Fk); Ik < Fk; Ik++) Xk[Ik] = kk[Ik];
      return Xk
    }

    function ek(kk, Fk) {
      for (var Ik = 0; Ik < Fk.length; Ik++) {
        var Xk = Fk[Ik];
        Xk.enumerable = Xk.enumerable || !1, Xk.configurable = !0, "value" in Xk && (Xk.writable = !0), Object.defineProperty(kk, Xk.key, Xk)
      }
    }

    function wk(kk, Fk) {
      return wk = Object.setPrototypeOf || function(kk, Fk) {
        return kk.__proto__ = Fk, kk
      }, wk(kk, Fk)
    }

    function Hk(kk) {
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
        var Ik, Tk = xk(kk);
        if (Fk) {
          var ik = xk(this).constructor;
          Ik = Reflect.construct(Tk, arguments, ik)
        } else Ik = Tk.apply(this, arguments);
        return function(kk, Fk) {
          if (Fk && ("object" === Xk(Fk) || "function" === typeof Fk)) return Fk;
          if (void 0 !== Fk) throw new TypeError("Derived constructors may only return object or undefined");
          return Jk(kk)
        }(this, Ik)
      }
    }

    function Jk(kk) {
      if (void 0 === kk) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return kk
    }

    function xk(kk) {
      return xk = Object.setPrototypeOf ? Object.getPrototypeOf : function(kk) {
        return kk.__proto__ || Object.getPrototypeOf(kk)
      }, xk(kk)
    }

    function Pk(kk, Fk, Ik) {
      return Fk in kk ? Object.defineProperty(kk, Fk, {
        value: Ik,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[Fk] = Ik, kk
    }
    var Kk = {
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
      Qk = function(kk) {
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
          }), Fk && wk(kk, Fk)
        }(yk, kk);
        var Fk, Ik, Xk, ik = Hk(yk);

        function yk(kk, Fk) {
          var Ik;
          return function(kk, Fk) {
            if (!(kk instanceof Fk)) throw new TypeError("Cannot call a class as a function")
          }(this, yk), Pk(Jk(Ik = ik.call(this, kk, Fk)), "handleFormat", (function(kk) {
            var Fk = Ik.props.format;
            return Fk ? Fk(kk) : kk
          })), Pk(Jk(Ik), "handleUpdate", (function() {
            if (Ik.slider) {
              var kk = Ik.props.orientation,
                Fk = (0, ak.capitalize)(Kk.orientation[kk].dimension),
                Xk = Ik.slider["offset".concat(Fk)],
                Tk = Ik.handle["offset".concat(Fk)];
              Ik.setState({
                limit: Xk - Tk,
                grab: Tk / 2
              })
            }
          })), Pk(Jk(Ik), "handleStart", (function(kk) {
            var Fk = Ik.props.onChangeStart;
            document.addEventListener("mousemove", Ik.handleDrag), document.addEventListener("mouseup", Ik.handleEnd), Ik.setState({
              active: !0
            }, (function() {
              Fk && Fk(kk)
            }))
          })), Pk(Jk(Ik), "handleDrag", (function(kk) {
            kk.stopPropagation();
            var Fk = Ik.props.onChange,
              Xk = kk.target,
              Tk = Xk.className,
              ik = Xk.classList,
              yk = Xk.dataset;
            if (Fk && "rangeslider__labels" !== Tk) {
              var lk = Ik.position(kk);
              ik && ik.contains("rangeslider__label-item") && yk.value && (lk = parseFloat(yk.value)), Fk && Fk(lk, kk)
            }
          })), Pk(Jk(Ik), "handleEnd", (function(kk) {
            var Fk = Ik.props.onChangeComplete;
            Ik.setState({
              active: !1
            }, (function() {
              Fk && Fk(kk)
            })), document.removeEventListener("mousemove", Ik.handleDrag), document.removeEventListener("mouseup", Ik.handleEnd)
          })), Pk(Jk(Ik), "handleKeyDown", (function(kk) {
            kk.preventDefault();
            var Fk, Xk = kk.keyCode,
              Tk = Ik.props,
              ik = Tk.value,
              yk = Tk.min,
              lk = Tk.max,
              ak = Tk.step,
              qk = Tk.onChange;
            switch (Xk) {
              case 38:
              case 39:
                Fk = ik + ak > lk ? lk : ik + ak, qk && qk(Fk, kk);
                break;
              case 37:
              case 40:
                Fk = ik - ak < yk ? yk : ik - ak, qk && qk(Fk, kk)
            }
          })), Pk(Jk(Ik), "getPositionFromValue", (function(kk) {
            var Fk = Ik.state.limit,
              Xk = Ik.props,
              Tk = Xk.min,
              ik = (kk - Tk) / (Xk.max - Tk);
            return Math.round(ik * Fk)
          })), Pk(Jk(Ik), "getValueFromPosition", (function(kk) {
            var Fk = Ik.state.limit,
              Xk = Ik.props,
              Tk = Xk.orientation,
              ik = Xk.min,
              yk = Xk.max,
              lk = Xk.step,
              qk = (0, ak.clamp)(kk, 0, Fk) / (Fk || 1),
              Lk = lk * Math.round(qk * (yk - ik) / lk),
              tk = "horizontal" === Tk ? Lk + ik : yk - Lk;
            return (0, ak.clamp)(tk, ik, yk)
          })), Pk(Jk(Ik), "position", (function(kk) {
            var Fk = Ik.state.grab,
              Xk = Ik.props,
              Tk = Xk.orientation,
              ik = Xk.reverse,
              yk = Ik.slider,
              lk = Kk.orientation[Tk].coordinate,
              qk = ik ? Kk.orientation[Tk].reverseDirection : Kk.orientation[Tk].direction,
              Lk = "client".concat((0, ak.capitalize)(lk)),
              tk = kk.touches ? kk.touches[0][Lk] : kk[Lk],
              Zk = yk.getBoundingClientRect()[qk],
              jk = ik ? Zk - tk - Fk : tk - Zk - Fk;
            return Ik.getValueFromPosition(jk)
          })), Pk(Jk(Ik), "coordinates", (function(kk) {
            var Fk = Ik.state,
              Xk = Fk.limit,
              Tk = Fk.grab,
              ik = Ik.props.orientation,
              yk = Ik.getValueFromPosition(kk),
              lk = Ik.getPositionFromValue(yk),
              ak = "horizontal" === ik ? lk + Tk : lk;
            return {
              fill: "horizontal" === ik ? ak : Xk - ak,
              handle: ak,
              label: ak
            }
          })), Pk(Jk(Ik), "renderLabels", (function(kk) {
            return (0, qk.jsx)("ul", {
              ref: function(kk) {
                Ik.labels = kk
              },
              className: (0, Tk.default)("rangeslider__labels"),
              children: kk
            })
          })), Ik.state = {
            active: !1,
            limit: 0,
            grab: 0
          }, Ik
        }
        return Fk = yk, (Ik = [{
          key: "componentDidMount",
          value: function() {
            this.handleUpdate(), new lk.default(this.handleUpdate).observe(this.slider)
          }
        }, {
          key: "render",
          value: function() {
            var kk = this,
              Fk = this.props,
              Ik = Fk.value,
              Xk = Fk.orientation,
              ik = Fk.className,
              yk = Fk.tooltip,
              lk = Fk.reverse,
              ak = Fk.labels,
              Lk = Fk.min,
              tk = Fk.max,
              jk = Fk.handleLabel,
              ek = this.state.active,
              wk = Kk.orientation[Xk].dimension,
              Hk = lk ? Kk.orientation[Xk].reverseDirection : Kk.orientation[Xk].direction,
              Jk = this.getPositionFromValue(Ik),
              xk = this.coordinates(Jk),
              Qk = Pk({}, wk, "".concat(xk.fill, "px")),
              sk = Pk({}, Hk, "".concat(xk.handle, "px")),
              Vk = yk && ek,
              zk = [],
              Sk = Object.keys(ak);
            if (Sk.length > 0) {
              var vk, Ek = Zk(Sk = Sk.sort((function(kk, Fk) {
                return lk ? kk - Fk : Fk - kk
              })));
              try {
                for (Ek.s(); !(vk = Ek.n()).done;) {
                  var Ok = vk.value,
                    nk = this.getPositionFromValue(Ok),
                    Gk = this.coordinates(nk),
                    pk = Pk({}, Hk, "".concat(Gk.label, "px"));
                  zk.push((0, qk.jsx)("li", {
                    className: (0, Tk.default)("rangeslider__label-item"),
                    "data-value": Ok,
                    onMouseDown: this.handleDrag,
                    onTouchStart: this.handleStart,
                    onTouchEnd: this.handleEnd,
                    style: pk,
                    children: this.props.labels[Ok]
                  }, Ok))
                }
              } catch (uk) {
                Ek.e(uk)
              } finally {
                Ek.f()
              }
            }
            return (0, qk.jsxs)("div", {
              ref: function(Fk) {
                kk.slider = Fk
              },
              className: (0, Tk.default)("rangeslider", "rangeslider-".concat(Xk), {
                "rangeslider-reverse": lk
              }, ik),
              onMouseDown: this.handleDrag,
              onMouseUp: this.handleEnd,
              onTouchStart: this.handleStart,
              onTouchEnd: this.handleEnd,
              "aria-valuemin": Lk,
              "aria-valuemax": tk,
              "aria-valuenow": Ik,
              "aria-orientation": Xk,
              children: [(0, qk.jsx)("div", {
                className: "rangeslider__fill",
                style: Qk
              }), (0, qk.jsxs)("div", {
                ref: function(Fk) {
                  kk.handle = Fk
                },
                className: "rangeslider__handle",
                onMouseDown: this.handleStart,
                onTouchMove: this.handleDrag,
                onTouchEnd: this.handleEnd,
                onKeyDown: this.handleKeyDown,
                style: sk,
                tabIndex: 0,
                children: [Vk && (0, qk.jsx)("div", {
                  ref: function(Fk) {
                    kk.tooltip = Fk
                  },
                  className: "rangeslider__handle-tooltip",
                  children: (0, qk.jsx)("span", {
                    children: this.handleFormat(Ik)
                  })
                }), (0, qk.jsx)("div", {
                  className: "rangeslider__handle-label",
                  children: jk
                })]
              }), ak && this.renderLabels(zk)]
            })
          }
        }]) && ek(Fk.prototype, Ik), Xk && ek(Fk, Xk), Object.defineProperty(Fk, "prototype", {
          writable: !1
        }), yk
      }(ik.Component);
    Pk(Qk, "propTypes", {
      min: yk.default.number,
      max: yk.default.number,
      step: yk.default.number,
      value: yk.default.number,
      orientation: yk.default.string,
      tooltip: yk.default.bool,
      reverse: yk.default.bool,
      labels: yk.default.object,
      handleLabel: yk.default.string,
      format: yk.default.func,
      onChangeStart: yk.default.func,
      onChange: yk.default.func,
      onChangeComplete: yk.default.func
    }), Pk(Qk, "defaultProps", {
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
    var sk = Qk;
    Fk.default = sk
  },
  4988: (kk, Fk, Ik) => {
    var Xk;
    Fk.c = void 0;
    var Tk = ((Xk = Ik(4996)) && Xk.__esModule ? Xk : {
      default: Xk
    }).default;
    Fk.c = Tk
  },
  5007: (kk, Fk) => {
    Object.defineProperty(Fk, "__esModule", {
      value: !0
    }), Fk.capitalize = function(kk) {
      return kk.charAt(0).toUpperCase() + kk.substr(1)
    }, Fk.clamp = function(kk, Fk, Ik) {
      return Math.min(Math.max(kk, Fk), Ik)
    }
  },
  4953: (kk, Fk, Ik) => {
    var Xk = Ik(4960);

    function Tk() {}

    function ik() {}
    ik.resetWarningCache = Tk, kk.exports = function() {
      function kk(kk, Fk, Ik, Tk, ik, yk) {
        if (yk !== Xk) {
          var lk = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw lk.name = "Invariant Violation", lk
        }
      }

      function Fk() {
        return kk
      }
      kk.isRequired = kk;
      var Ik = {
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
        checkPropTypes: ik,
        resetWarningCache: Tk
      };
      return Ik.PropTypes = Ik, Ik
    }
  },
  4946: (kk, Fk, Ik) => {
    kk.exports = Ik(4953)()
  },
  4960: kk => {
    kk.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  5002: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      default: () => zk
    });
    var Xk = function() {
        if ("undefined" !== typeof Map) return Map;

        function kk(kk, Fk) {
          var Ik = -1;
          return kk.some((function(kk, Xk) {
            return kk[0] === Fk && (Ik = Xk, !0)
          })), Ik
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
            var Ik = kk(this.__entries__, Fk),
              Xk = this.__entries__[Ik];
            return Xk && Xk[1]
          }, Fk.prototype.set = function(Fk, Ik) {
            var Xk = kk(this.__entries__, Fk);
            ~Xk ? this.__entries__[Xk][1] = Ik : this.__entries__.push([Fk, Ik])
          }, Fk.prototype.delete = function(Fk) {
            var Ik = this.__entries__,
              Xk = kk(Ik, Fk);
            ~Xk && Ik.splice(Xk, 1)
          }, Fk.prototype.has = function(Fk) {
            return !!~kk(this.__entries__, Fk)
          }, Fk.prototype.clear = function() {
            this.__entries__.splice(0)
          }, Fk.prototype.forEach = function(kk, Fk) {
            void 0 === Fk && (Fk = null);
            for (var Ik = 0, Xk = this.__entries__; Ik < Xk.length; Ik++) {
              var Tk = Xk[Ik];
              kk.call(Fk, Tk[1], Tk[0])
            }
          }, Fk
        }()
      }(),
      Tk = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document,
      ik = "undefined" !== typeof Ik.g && Ik.g.Math === Math ? Ik.g : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")(),
      yk = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(ik) : function(kk) {
        return setTimeout((function() {
          return kk(Date.now())
        }), 1e3 / 60)
      };
    var lk = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
      ak = "undefined" !== typeof MutationObserver,
      qk = function() {
        function kk() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(kk, Fk) {
            var Ik = !1,
              Xk = !1,
              Tk = 0;

            function ik() {
              Ik && (Ik = !1, kk()), Xk && ak()
            }

            function lk() {
              yk(ik)
            }

            function ak() {
              var kk = Date.now();
              if (Ik) {
                if (kk - Tk < 2) return;
                Xk = !0
              } else Ik = !0, Xk = !1, setTimeout(lk, Fk);
              Tk = kk
            }
            return ak
          }(this.refresh.bind(this), 20)
        }
        return kk.prototype.addObserver = function(kk) {
          ~this.observers_.indexOf(kk) || this.observers_.push(kk), this.connected_ || this.connect_()
        }, kk.prototype.removeObserver = function(kk) {
          var Fk = this.observers_,
            Ik = Fk.indexOf(kk);
          ~Ik && Fk.splice(Ik, 1), !Fk.length && this.connected_ && this.disconnect_()
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
          Tk && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), ak ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
          })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, kk.prototype.disconnect_ = function() {
          Tk && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, kk.prototype.onTransitionEnd_ = function(kk) {
          var Fk = kk.propertyName,
            Ik = void 0 === Fk ? "" : Fk;
          lk.some((function(kk) {
            return !!~Ik.indexOf(kk)
          })) && this.refresh()
        }, kk.getInstance = function() {
          return this.instance_ || (this.instance_ = new kk), this.instance_
        }, kk.instance_ = null, kk
      }(),
      Lk = function(kk, Fk) {
        for (var Ik = 0, Xk = Object.keys(Fk); Ik < Xk.length; Ik++) {
          var Tk = Xk[Ik];
          Object.defineProperty(kk, Tk, {
            value: Fk[Tk],
            enumerable: !1,
            writable: !1,
            configurable: !0
          })
        }
        return kk
      },
      tk = function(kk) {
        return kk && kk.ownerDocument && kk.ownerDocument.defaultView || ik
      },
      Zk = xk(0, 0, 0, 0);

    function jk(kk) {
      return parseFloat(kk) || 0
    }

    function ek(kk) {
      for (var Fk = [], Ik = 1; Ik < arguments.length; Ik++) Fk[Ik - 1] = arguments[Ik];
      return Fk.reduce((function(Fk, Ik) {
        return Fk + jk(kk["border-" + Ik + "-width"])
      }), 0)
    }

    function wk(kk) {
      var Fk = kk.clientWidth,
        Ik = kk.clientHeight;
      if (!Fk && !Ik) return Zk;
      var Xk = tk(kk).getComputedStyle(kk),
        Tk = function(kk) {
          for (var Fk = {}, Ik = 0, Xk = ["top", "right", "bottom", "left"]; Ik < Xk.length; Ik++) {
            var Tk = Xk[Ik],
              ik = kk["padding-" + Tk];
            Fk[Tk] = jk(ik)
          }
          return Fk
        }(Xk),
        ik = Tk.left + Tk.right,
        yk = Tk.top + Tk.bottom,
        lk = jk(Xk.width),
        ak = jk(Xk.height);
      if ("border-box" === Xk.boxSizing && (Math.round(lk + ik) !== Fk && (lk -= ek(Xk, "left", "right") + ik), Math.round(ak + yk) !== Ik && (ak -= ek(Xk, "top", "bottom") + yk)), ! function(kk) {
          return kk === tk(kk).document.documentElement
        }(kk)) {
        var qk = Math.round(lk + ik) - Fk,
          Lk = Math.round(ak + yk) - Ik;
        1 !== Math.abs(qk) && (lk -= qk), 1 !== Math.abs(Lk) && (ak -= Lk)
      }
      return xk(Tk.left, Tk.top, lk, ak)
    }
    var Hk = "undefined" !== typeof SVGGraphicsElement ? function(kk) {
      return kk instanceof tk(kk).SVGGraphicsElement
    } : function(kk) {
      return kk instanceof tk(kk).SVGElement && "function" === typeof kk.getBBox
    };

    function Jk(kk) {
      return Tk ? Hk(kk) ? function(kk) {
        var Fk = kk.getBBox();
        return xk(0, 0, Fk.width, Fk.height)
      }(kk) : wk(kk) : Zk
    }

    function xk(kk, Fk, Ik, Xk) {
      return {
        x: kk,
        y: Fk,
        width: Ik,
        height: Xk
      }
    }
    var Pk = function() {
        function kk(kk) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = xk(0, 0, 0, 0), this.target = kk
        }
        return kk.prototype.isActive = function() {
          var kk = Jk(this.target);
          return this.contentRect_ = kk, kk.width !== this.broadcastWidth || kk.height !== this.broadcastHeight
        }, kk.prototype.broadcastRect = function() {
          var kk = this.contentRect_;
          return this.broadcastWidth = kk.width, this.broadcastHeight = kk.height, kk
        }, kk
      }(),
      Kk = function(kk, Fk) {
        var Ik = function(kk) {
          var Fk = kk.x,
            Ik = kk.y,
            Xk = kk.width,
            Tk = kk.height,
            ik = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
            yk = Object.create(ik.prototype);
          return Lk(yk, {
            x: Fk,
            y: Ik,
            width: Xk,
            height: Tk,
            top: Ik,
            right: Fk + Xk,
            bottom: Tk + Ik,
            left: Fk
          }), yk
        }(Fk);
        Lk(this, {
          target: kk,
          contentRect: Ik
        })
      },
      Qk = function() {
        function kk(kk, Fk, Ik) {
          if (this.activeObservations_ = [], this.observations_ = new Xk, "function" !== typeof kk) throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = kk, this.controller_ = Fk, this.callbackCtx_ = Ik
        }
        return kk.prototype.observe = function(kk) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(kk instanceof tk(kk).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var Fk = this.observations_;
            Fk.has(kk) || (Fk.set(kk, new Pk(kk)), this.controller_.addObserver(this), this.controller_.refresh())
          }
        }, kk.prototype.unobserve = function(kk) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(kk instanceof tk(kk).Element)) throw new TypeError('parameter 1 is not of type "Element".');
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
                return new Kk(kk.target, kk.broadcastRect())
              }));
            this.callback_.call(kk, Fk, kk), this.clearActive()
          }
        }, kk.prototype.clearActive = function() {
          this.activeObservations_.splice(0)
        }, kk.prototype.hasActive = function() {
          return this.activeObservations_.length > 0
        }, kk
      }(),
      sk = "undefined" !== typeof WeakMap ? new WeakMap : new Xk,
      Vk = function kk(Fk) {
        if (!(this instanceof kk)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var Ik = qk.getInstance(),
          Xk = new Qk(Fk, Ik, this);
        sk.set(this, Xk)
      };
    ["observe", "unobserve", "disconnect"].forEach((function(kk) {
      Vk.prototype[kk] = function() {
        var Fk;
        return (Fk = sk.get(this))[kk].apply(Fk, arguments)
      }
    }));
    const zk = "undefined" !== typeof ik.ResizeObserver ? ik.ResizeObserver : Vk
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);