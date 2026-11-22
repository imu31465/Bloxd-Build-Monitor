export const id = 108;
export const ids = [108];
export const modules = {
  4937: (kk, ek, ik) => {
    function Dk(kk) {
      return Dk = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, Dk(kk)
    }
    Object.defineProperty(ek, "__esModule", {
      value: !0
    }), ek.default = void 0;
    var fk = Kk(ik(1021)),
      Sk = function(kk, ek) {
        if (!ek && kk && kk.__esModule) return kk;
        if (null === kk || "object" !== Dk(kk) && "function" !== typeof kk) return {
          default: kk
        };
        var ik = Mk(ek);
        if (ik && ik.has(kk)) return ik.get(kk);
        var fk = {},
          Sk = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var bk in kk)
          if ("default" !== bk && Object.prototype.hasOwnProperty.call(kk, bk)) {
            var rk = Sk ? Object.getOwnPropertyDescriptor(kk, bk) : null;
            rk && (rk.get || rk.set) ? Object.defineProperty(fk, bk, rk) : fk[bk] = kk[bk]
          } fk.default = kk, ik && ik.set(kk, fk);
        return fk
      }(ik(60)),
      bk = Kk(ik(4893)),
      rk = Kk(ik(4939)),
      Pk = ik(4941),
      mk = ik(1066);

    function Mk(kk) {
      if ("function" !== typeof WeakMap) return null;
      var ek = new WeakMap,
        ik = new WeakMap;
      return (Mk = function(kk) {
        return kk ? ik : ek
      })(kk)
    }

    function Kk(kk) {
      return kk && kk.__esModule ? kk : {
        default: kk
      }
    }

    function xk(kk, ek) {
      var ik = "undefined" !== typeof Symbol && kk[Symbol.iterator] || kk["@@iterator"];
      if (!ik) {
        if (Array.isArray(kk) || (ik = function(kk, ek) {
            if (!kk) return;
            if ("string" === typeof kk) return nk(kk, ek);
            var ik = Object.prototype.toString.call(kk).slice(8, -1);
            "Object" === ik && kk.constructor && (ik = kk.constructor.name);
            if ("Map" === ik || "Set" === ik) return Array.from(kk);
            if ("Arguments" === ik || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ik)) return nk(kk, ek)
          }(kk)) || ek && kk && "number" === typeof kk.length) {
          ik && (kk = ik);
          var Dk = 0,
            fk = function() {};
          return {
            s: fk,
            n: function() {
              return Dk >= kk.length ? {
                done: !0
              } : {
                done: !1,
                value: kk[Dk++]
              }
            },
            e: function(kk) {
              throw kk
            },
            f: fk
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var Sk, bk = !0,
        rk = !1;
      return {
        s: function() {
          ik = ik.call(kk)
        },
        n: function() {
          var kk = ik.next();
          return bk = kk.done, kk
        },
        e: function(kk) {
          rk = !0, Sk = kk
        },
        f: function() {
          try {
            bk || null == ik.return || ik.return()
          } finally {
            if (rk) throw Sk
          }
        }
      }
    }

    function nk(kk, ek) {
      (null == ek || ek > kk.length) && (ek = kk.length);
      for (var ik = 0, Dk = new Array(ek); ik < ek; ik++) Dk[ik] = kk[ik];
      return Dk
    }

    function Uk(kk, ek) {
      for (var ik = 0; ik < ek.length; ik++) {
        var Dk = ek[ik];
        Dk.enumerable = Dk.enumerable || !1, Dk.configurable = !0, "value" in Dk && (Dk.writable = !0), Object.defineProperty(kk, Dk.key, Dk)
      }
    }

    function Hk(kk, ek) {
      return Hk = Object.setPrototypeOf || function(kk, ek) {
        return kk.__proto__ = ek, kk
      }, Hk(kk, ek)
    }

    function wk(kk) {
      var ek = function() {
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
        var ik, fk = pk(kk);
        if (ek) {
          var Sk = pk(this).constructor;
          ik = Reflect.construct(fk, arguments, Sk)
        } else ik = fk.apply(this, arguments);
        return function(kk, ek) {
          if (ek && ("object" === Dk(ek) || "function" === typeof ek)) return ek;
          if (void 0 !== ek) throw new TypeError("Derived constructors may only return object or undefined");
          return lk(kk)
        }(this, ik)
      }
    }

    function lk(kk) {
      if (void 0 === kk) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return kk
    }

    function pk(kk) {
      return pk = Object.setPrototypeOf ? Object.getPrototypeOf : function(kk) {
        return kk.__proto__ || Object.getPrototypeOf(kk)
      }, pk(kk)
    }

    function yk(kk, ek, ik) {
      return ek in kk ? Object.defineProperty(kk, ek, {
        value: ik,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[ek] = ik, kk
    }
    var Yk = {
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
      Lk = function(kk) {
        ! function(kk, ek) {
          if ("function" !== typeof ek && null !== ek) throw new TypeError("Super expression must either be null or a function");
          Object.defineProperty(kk, "prototype", {
            value: Object.create(ek && ek.prototype, {
              constructor: {
                value: kk,
                writable: !0,
                configurable: !0
              }
            }),
            writable: !1
          }), ek && Hk(kk, ek)
        }(bk, kk);
        var ek, ik, Dk, Sk = wk(bk);

        function bk(kk, ek) {
          var ik;
          return function(kk, ek) {
            if (!(kk instanceof ek)) throw new TypeError("Cannot call a class as a function")
          }(this, bk), yk(lk(ik = Sk.call(this, kk, ek)), "handleFormat", (function(kk) {
            var ek = ik.props.format;
            return ek ? ek(kk) : kk
          })), yk(lk(ik), "handleUpdate", (function() {
            if (ik.slider) {
              var kk = ik.props.orientation,
                ek = (0, Pk.capitalize)(Yk.orientation[kk].dimension),
                Dk = ik.slider["offset".concat(ek)],
                fk = ik.handle["offset".concat(ek)];
              ik.setState({
                limit: Dk - fk,
                grab: fk / 2
              })
            }
          })), yk(lk(ik), "handleStart", (function(kk) {
            var ek = ik.props.onChangeStart;
            document.addEventListener("mousemove", ik.handleDrag), document.addEventListener("mouseup", ik.handleEnd), ik.setState({
              active: !0
            }, (function() {
              ek && ek(kk)
            }))
          })), yk(lk(ik), "handleDrag", (function(kk) {
            kk.stopPropagation();
            var ek = ik.props.onChange,
              Dk = kk.target,
              fk = Dk.className,
              Sk = Dk.classList,
              bk = Dk.dataset;
            if (ek && "rangeslider__labels" !== fk) {
              var rk = ik.position(kk);
              Sk && Sk.contains("rangeslider__label-item") && bk.value && (rk = parseFloat(bk.value)), ek && ek(rk, kk)
            }
          })), yk(lk(ik), "handleEnd", (function(kk) {
            var ek = ik.props.onChangeComplete;
            ik.setState({
              active: !1
            }, (function() {
              ek && ek(kk)
            })), document.removeEventListener("mousemove", ik.handleDrag), document.removeEventListener("mouseup", ik.handleEnd)
          })), yk(lk(ik), "handleKeyDown", (function(kk) {
            kk.preventDefault();
            var ek, Dk = kk.keyCode,
              fk = ik.props,
              Sk = fk.value,
              bk = fk.min,
              rk = fk.max,
              Pk = fk.step,
              mk = fk.onChange;
            switch (Dk) {
              case 38:
              case 39:
                ek = Sk + Pk > rk ? rk : Sk + Pk, mk && mk(ek, kk);
                break;
              case 37:
              case 40:
                ek = Sk - Pk < bk ? bk : Sk - Pk, mk && mk(ek, kk)
            }
          })), yk(lk(ik), "getPositionFromValue", (function(kk) {
            var ek = ik.state.limit,
              Dk = ik.props,
              fk = Dk.min,
              Sk = (kk - fk) / (Dk.max - fk);
            return Math.round(Sk * ek)
          })), yk(lk(ik), "getValueFromPosition", (function(kk) {
            var ek = ik.state.limit,
              Dk = ik.props,
              fk = Dk.orientation,
              Sk = Dk.min,
              bk = Dk.max,
              rk = Dk.step,
              mk = (0, Pk.clamp)(kk, 0, ek) / (ek || 1),
              Mk = rk * Math.round(mk * (bk - Sk) / rk),
              Kk = "horizontal" === fk ? Mk + Sk : bk - Mk;
            return (0, Pk.clamp)(Kk, Sk, bk)
          })), yk(lk(ik), "position", (function(kk) {
            var ek = ik.state.grab,
              Dk = ik.props,
              fk = Dk.orientation,
              Sk = Dk.reverse,
              bk = ik.slider,
              rk = Yk.orientation[fk].coordinate,
              mk = Sk ? Yk.orientation[fk].reverseDirection : Yk.orientation[fk].direction,
              Mk = "client".concat((0, Pk.capitalize)(rk)),
              Kk = kk.touches ? kk.touches[0][Mk] : kk[Mk],
              xk = bk.getBoundingClientRect()[mk],
              nk = Sk ? xk - Kk - ek : Kk - xk - ek;
            return ik.getValueFromPosition(nk)
          })), yk(lk(ik), "coordinates", (function(kk) {
            var ek = ik.state,
              Dk = ek.limit,
              fk = ek.grab,
              Sk = ik.props.orientation,
              bk = ik.getValueFromPosition(kk),
              rk = ik.getPositionFromValue(bk),
              Pk = "horizontal" === Sk ? rk + fk : rk;
            return {
              fill: "horizontal" === Sk ? Pk : Dk - Pk,
              handle: Pk,
              label: Pk
            }
          })), yk(lk(ik), "renderLabels", (function(kk) {
            return (0, mk.jsx)("ul", {
              ref: function(kk) {
                ik.labels = kk
              },
              className: (0, fk.default)("rangeslider__labels"),
              children: kk
            })
          })), ik.state = {
            active: !1,
            limit: 0,
            grab: 0
          }, ik
        }
        return ek = bk, (ik = [{
          key: "componentDidMount",
          value: function() {
            this.handleUpdate(), new rk.default(this.handleUpdate).observe(this.slider)
          }
        }, {
          key: "render",
          value: function() {
            var kk = this,
              ek = this.props,
              ik = ek.value,
              Dk = ek.orientation,
              Sk = ek.className,
              bk = ek.tooltip,
              rk = ek.reverse,
              Pk = ek.labels,
              Mk = ek.min,
              Kk = ek.max,
              nk = ek.handleLabel,
              Uk = this.state.active,
              Hk = Yk.orientation[Dk].dimension,
              wk = rk ? Yk.orientation[Dk].reverseDirection : Yk.orientation[Dk].direction,
              lk = this.getPositionFromValue(ik),
              pk = this.coordinates(lk),
              Lk = yk({}, Hk, "".concat(pk.fill, "px")),
              Ck = yk({}, wk, "".concat(pk.handle, "px")),
              Ak = bk && Uk,
              jk = [],
              sk = Object.keys(Pk);
            if (sk.length > 0) {
              var dk, Vk = xk(sk = sk.sort((function(kk, ek) {
                return rk ? kk - ek : ek - kk
              })));
              try {
                for (Vk.s(); !(dk = Vk.n()).done;) {
                  var Fk = dk.value,
                    uk = this.getPositionFromValue(Fk),
                    qk = this.coordinates(uk),
                    Ik = yk({}, wk, "".concat(qk.label, "px"));
                  jk.push((0, mk.jsx)("li", {
                    className: (0, fk.default)("rangeslider__label-item"),
                    "data-value": Fk,
                    onMouseDown: this.handleDrag,
                    onTouchStart: this.handleStart,
                    onTouchEnd: this.handleEnd,
                    style: Ik,
                    children: this.props.labels[Fk]
                  }, Fk))
                }
              } catch (zk) {
                Vk.e(zk)
              } finally {
                Vk.f()
              }
            }
            return (0, mk.jsxs)("div", {
              ref: function(ek) {
                kk.slider = ek
              },
              className: (0, fk.default)("rangeslider", "rangeslider-".concat(Dk), {
                "rangeslider-reverse": rk
              }, Sk),
              onMouseDown: this.handleDrag,
              onMouseUp: this.handleEnd,
              onTouchStart: this.handleStart,
              onTouchEnd: this.handleEnd,
              "aria-valuemin": Mk,
              "aria-valuemax": Kk,
              "aria-valuenow": ik,
              "aria-orientation": Dk,
              children: [(0, mk.jsx)("div", {
                className: "rangeslider__fill",
                style: Lk
              }), (0, mk.jsxs)("div", {
                ref: function(ek) {
                  kk.handle = ek
                },
                className: "rangeslider__handle",
                onMouseDown: this.handleStart,
                onTouchMove: this.handleDrag,
                onTouchEnd: this.handleEnd,
                onKeyDown: this.handleKeyDown,
                style: Ck,
                tabIndex: 0,
                children: [Ak && (0, mk.jsx)("div", {
                  ref: function(ek) {
                    kk.tooltip = ek
                  },
                  className: "rangeslider__handle-tooltip",
                  children: (0, mk.jsx)("span", {
                    children: this.handleFormat(ik)
                  })
                }), (0, mk.jsx)("div", {
                  className: "rangeslider__handle-label",
                  children: nk
                })]
              }), Pk && this.renderLabels(jk)]
            })
          }
        }]) && Uk(ek.prototype, ik), Dk && Uk(ek, Dk), Object.defineProperty(ek, "prototype", {
          writable: !1
        }), bk
      }(Sk.Component);
    yk(Lk, "propTypes", {
      min: bk.default.number,
      max: bk.default.number,
      step: bk.default.number,
      value: bk.default.number,
      orientation: bk.default.string,
      tooltip: bk.default.bool,
      reverse: bk.default.bool,
      labels: bk.default.object,
      handleLabel: bk.default.string,
      format: bk.default.func,
      onChangeStart: bk.default.func,
      onChange: bk.default.func,
      onChangeComplete: bk.default.func
    }), yk(Lk, "defaultProps", {
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
    var Ck = Lk;
    ek.default = Ck
  },
  4935: (kk, ek, ik) => {
    var Dk;
    ek.e = void 0;
    var fk = ((Dk = ik(4937)) && Dk.__esModule ? Dk : {
      default: Dk
    }).default;
    ek.e = fk
  },
  4941: (kk, ek) => {
    Object.defineProperty(ek, "__esModule", {
      value: !0
    }), ek.capitalize = function(kk) {
      return kk.charAt(0).toUpperCase() + kk.substr(1)
    }, ek.clamp = function(kk, ek, ik) {
      return Math.min(Math.max(kk, ek), ik)
    }
  },
  4902: (kk, ek, ik) => {
    var Dk = ik(4909);

    function fk() {}

    function Sk() {}
    Sk.resetWarningCache = fk, kk.exports = function() {
      function kk(kk, ek, ik, fk, Sk, bk) {
        if (bk !== Dk) {
          var rk = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw rk.name = "Invariant Violation", rk
        }
      }

      function ek() {
        return kk
      }
      kk.isRequired = kk;
      var ik = {
        array: kk,
        bigint: kk,
        bool: kk,
        func: kk,
        number: kk,
        object: kk,
        string: kk,
        symbol: kk,
        any: kk,
        arrayOf: ek,
        element: kk,
        elementType: kk,
        instanceOf: ek,
        node: kk,
        objectOf: ek,
        oneOf: ek,
        oneOfType: ek,
        shape: ek,
        exact: ek,
        checkPropTypes: Sk,
        resetWarningCache: fk
      };
      return ik.PropTypes = ik, ik
    }
  },
  4893: (kk, ek, ik) => {
    kk.exports = ik(4902)()
  },
  4909: kk => {
    kk.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  4939: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      default: () => jk
    });
    var Dk = function() {
        if ("undefined" !== typeof Map) return Map;

        function kk(kk, ek) {
          var ik = -1;
          return kk.some((function(kk, Dk) {
            return kk[0] === ek && (ik = Dk, !0)
          })), ik
        }
        return function() {
          function ek() {
            this.__entries__ = []
          }
          return Object.defineProperty(ek.prototype, "size", {
            get: function() {
              return this.__entries__.length
            },
            enumerable: !0,
            configurable: !0
          }), ek.prototype.get = function(ek) {
            var ik = kk(this.__entries__, ek),
              Dk = this.__entries__[ik];
            return Dk && Dk[1]
          }, ek.prototype.set = function(ek, ik) {
            var Dk = kk(this.__entries__, ek);
            ~Dk ? this.__entries__[Dk][1] = ik : this.__entries__.push([ek, ik])
          }, ek.prototype.delete = function(ek) {
            var ik = this.__entries__,
              Dk = kk(ik, ek);
            ~Dk && ik.splice(Dk, 1)
          }, ek.prototype.has = function(ek) {
            return !!~kk(this.__entries__, ek)
          }, ek.prototype.clear = function() {
            this.__entries__.splice(0)
          }, ek.prototype.forEach = function(kk, ek) {
            void 0 === ek && (ek = null);
            for (var ik = 0, Dk = this.__entries__; ik < Dk.length; ik++) {
              var fk = Dk[ik];
              kk.call(ek, fk[1], fk[0])
            }
          }, ek
        }()
      }(),
      fk = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document,
      Sk = "undefined" !== typeof ik.g && ik.g.Math === Math ? ik.g : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")(),
      bk = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(Sk) : function(kk) {
        return setTimeout((function() {
          return kk(Date.now())
        }), 1e3 / 60)
      };
    var rk = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
      Pk = "undefined" !== typeof MutationObserver,
      mk = function() {
        function kk() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(kk, ek) {
            var ik = !1,
              Dk = !1,
              fk = 0;

            function Sk() {
              ik && (ik = !1, kk()), Dk && Pk()
            }

            function rk() {
              bk(Sk)
            }

            function Pk() {
              var kk = Date.now();
              if (ik) {
                if (kk - fk < 2) return;
                Dk = !0
              } else ik = !0, Dk = !1, setTimeout(rk, ek);
              fk = kk
            }
            return Pk
          }(this.refresh.bind(this), 20)
        }
        return kk.prototype.addObserver = function(kk) {
          ~this.observers_.indexOf(kk) || this.observers_.push(kk), this.connected_ || this.connect_()
        }, kk.prototype.removeObserver = function(kk) {
          var ek = this.observers_,
            ik = ek.indexOf(kk);
          ~ik && ek.splice(ik, 1), !ek.length && this.connected_ && this.disconnect_()
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
          fk && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Pk ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
          })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, kk.prototype.disconnect_ = function() {
          fk && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, kk.prototype.onTransitionEnd_ = function(kk) {
          var ek = kk.propertyName,
            ik = void 0 === ek ? "" : ek;
          rk.some((function(kk) {
            return !!~ik.indexOf(kk)
          })) && this.refresh()
        }, kk.getInstance = function() {
          return this.instance_ || (this.instance_ = new kk), this.instance_
        }, kk.instance_ = null, kk
      }(),
      Mk = function(kk, ek) {
        for (var ik = 0, Dk = Object.keys(ek); ik < Dk.length; ik++) {
          var fk = Dk[ik];
          Object.defineProperty(kk, fk, {
            value: ek[fk],
            enumerable: !1,
            writable: !1,
            configurable: !0
          })
        }
        return kk
      },
      Kk = function(kk) {
        return kk && kk.ownerDocument && kk.ownerDocument.defaultView || Sk
      },
      xk = pk(0, 0, 0, 0);

    function nk(kk) {
      return parseFloat(kk) || 0
    }

    function Uk(kk) {
      for (var ek = [], ik = 1; ik < arguments.length; ik++) ek[ik - 1] = arguments[ik];
      return ek.reduce((function(ek, ik) {
        return ek + nk(kk["border-" + ik + "-width"])
      }), 0)
    }

    function Hk(kk) {
      var ek = kk.clientWidth,
        ik = kk.clientHeight;
      if (!ek && !ik) return xk;
      var Dk = Kk(kk).getComputedStyle(kk),
        fk = function(kk) {
          for (var ek = {}, ik = 0, Dk = ["top", "right", "bottom", "left"]; ik < Dk.length; ik++) {
            var fk = Dk[ik],
              Sk = kk["padding-" + fk];
            ek[fk] = nk(Sk)
          }
          return ek
        }(Dk),
        Sk = fk.left + fk.right,
        bk = fk.top + fk.bottom,
        rk = nk(Dk.width),
        Pk = nk(Dk.height);
      if ("border-box" === Dk.boxSizing && (Math.round(rk + Sk) !== ek && (rk -= Uk(Dk, "left", "right") + Sk), Math.round(Pk + bk) !== ik && (Pk -= Uk(Dk, "top", "bottom") + bk)), ! function(kk) {
          return kk === Kk(kk).document.documentElement
        }(kk)) {
        var mk = Math.round(rk + Sk) - ek,
          Mk = Math.round(Pk + bk) - ik;
        1 !== Math.abs(mk) && (rk -= mk), 1 !== Math.abs(Mk) && (Pk -= Mk)
      }
      return pk(fk.left, fk.top, rk, Pk)
    }
    var wk = "undefined" !== typeof SVGGraphicsElement ? function(kk) {
      return kk instanceof Kk(kk).SVGGraphicsElement
    } : function(kk) {
      return kk instanceof Kk(kk).SVGElement && "function" === typeof kk.getBBox
    };

    function lk(kk) {
      return fk ? wk(kk) ? function(kk) {
        var ek = kk.getBBox();
        return pk(0, 0, ek.width, ek.height)
      }(kk) : Hk(kk) : xk
    }

    function pk(kk, ek, ik, Dk) {
      return {
        x: kk,
        y: ek,
        width: ik,
        height: Dk
      }
    }
    var yk = function() {
        function kk(kk) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = pk(0, 0, 0, 0), this.target = kk
        }
        return kk.prototype.isActive = function() {
          var kk = lk(this.target);
          return this.contentRect_ = kk, kk.width !== this.broadcastWidth || kk.height !== this.broadcastHeight
        }, kk.prototype.broadcastRect = function() {
          var kk = this.contentRect_;
          return this.broadcastWidth = kk.width, this.broadcastHeight = kk.height, kk
        }, kk
      }(),
      Yk = function(kk, ek) {
        var ik = function(kk) {
          var ek = kk.x,
            ik = kk.y,
            Dk = kk.width,
            fk = kk.height,
            Sk = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
            bk = Object.create(Sk.prototype);
          return Mk(bk, {
            x: ek,
            y: ik,
            width: Dk,
            height: fk,
            top: ik,
            right: ek + Dk,
            bottom: fk + ik,
            left: ek
          }), bk
        }(ek);
        Mk(this, {
          target: kk,
          contentRect: ik
        })
      },
      Lk = function() {
        function kk(kk, ek, ik) {
          if (this.activeObservations_ = [], this.observations_ = new Dk, "function" !== typeof kk) throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = kk, this.controller_ = ek, this.callbackCtx_ = ik
        }
        return kk.prototype.observe = function(kk) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(kk instanceof Kk(kk).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var ek = this.observations_;
            ek.has(kk) || (ek.set(kk, new yk(kk)), this.controller_.addObserver(this), this.controller_.refresh())
          }
        }, kk.prototype.unobserve = function(kk) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(kk instanceof Kk(kk).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var ek = this.observations_;
            ek.has(kk) && (ek.delete(kk), ek.size || this.controller_.removeObserver(this))
          }
        }, kk.prototype.disconnect = function() {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, kk.prototype.gatherActive = function() {
          var kk = this;
          this.clearActive(), this.observations_.forEach((function(ek) {
            ek.isActive() && kk.activeObservations_.push(ek)
          }))
        }, kk.prototype.broadcastActive = function() {
          if (this.hasActive()) {
            var kk = this.callbackCtx_,
              ek = this.activeObservations_.map((function(kk) {
                return new Yk(kk.target, kk.broadcastRect())
              }));
            this.callback_.call(kk, ek, kk), this.clearActive()
          }
        }, kk.prototype.clearActive = function() {
          this.activeObservations_.splice(0)
        }, kk.prototype.hasActive = function() {
          return this.activeObservations_.length > 0
        }, kk
      }(),
      Ck = "undefined" !== typeof WeakMap ? new WeakMap : new Dk,
      Ak = function kk(ek) {
        if (!(this instanceof kk)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var ik = mk.getInstance(),
          Dk = new Lk(ek, ik, this);
        Ck.set(this, Dk)
      };
    ["observe", "unobserve", "disconnect"].forEach((function(kk) {
      Ak.prototype[kk] = function() {
        var ek;
        return (ek = Ck.get(this))[kk].apply(ek, arguments)
      }
    }));
    const jk = "undefined" !== typeof Sk.ResizeObserver ? Sk.ResizeObserver : Ak
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);