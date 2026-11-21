export const id = 107;
export const ids = [107];
export const modules = {
  4890: (dd, Jd, kd) => {
    function pd(dd) {
      return pd = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
        return typeof dd
      } : function(dd) {
        return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
      }, pd(dd)
    }
    Object.defineProperty(Jd, "__esModule", {
      value: !0
    }), Jd.default = void 0;
    var Nd = od(kd(1044)),
      Wd = function(dd, Jd) {
        if (!Jd && dd && dd.__esModule) return dd;
        if (null === dd || "object" !== pd(dd) && "function" !== typeof dd) return {
          default: dd
        };
        var kd = Kd(Jd);
        if (kd && kd.has(dd)) return kd.get(dd);
        var Nd = {},
          Wd = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var Pd in dd)
          if ("default" !== Pd && Object.prototype.hasOwnProperty.call(dd, Pd)) {
            var Zd = Wd ? Object.getOwnPropertyDescriptor(dd, Pd) : null;
            Zd && (Zd.get || Zd.set) ? Object.defineProperty(Nd, Pd, Zd) : Nd[Pd] = dd[Pd]
          } Nd.default = dd, kd && kd.set(dd, Nd);
        return Nd
      }(kd(56)),
      Pd = od(kd(4845)),
      Zd = od(kd(4894)),
      gd = kd(4902),
      Cd = kd(1103);

    function Kd(dd) {
      if ("function" !== typeof WeakMap) return null;
      var Jd = new WeakMap,
        kd = new WeakMap;
      return (Kd = function(dd) {
        return dd ? kd : Jd
      })(dd)
    }

    function od(dd) {
      return dd && dd.__esModule ? dd : {
        default: dd
      }
    }

    function ld(dd, Jd) {
      var kd = "undefined" !== typeof Symbol && dd[Symbol.iterator] || dd["@@iterator"];
      if (!kd) {
        if (Array.isArray(dd) || (kd = function(dd, Jd) {
            if (!dd) return;
            if ("string" === typeof dd) return Qd(dd, Jd);
            var kd = Object.prototype.toString.call(dd).slice(8, -1);
            "Object" === kd && dd.constructor && (kd = dd.constructor.name);
            if ("Map" === kd || "Set" === kd) return Array.from(dd);
            if ("Arguments" === kd || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(kd)) return Qd(dd, Jd)
          }(dd)) || Jd && dd && "number" === typeof dd.length) {
          kd && (dd = kd);
          var pd = 0,
            Nd = function() {};
          return {
            s: Nd,
            n: function() {
              return pd >= dd.length ? {
                done: !0
              } : {
                done: !1,
                value: dd[pd++]
              }
            },
            e: function(dd) {
              throw dd
            },
            f: Nd
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var Wd, Pd = !0,
        Zd = !1;
      return {
        s: function() {
          kd = kd.call(dd)
        },
        n: function() {
          var dd = kd.next();
          return Pd = dd.done, dd
        },
        e: function(dd) {
          Zd = !0, Wd = dd
        },
        f: function() {
          try {
            Pd || null == kd.return || kd.return()
          } finally {
            if (Zd) throw Wd
          }
        }
      }
    }

    function Qd(dd, Jd) {
      (null == Jd || Jd > dd.length) && (Jd = dd.length);
      for (var kd = 0, pd = new Array(Jd); kd < Jd; kd++) pd[kd] = dd[kd];
      return pd
    }

    function Ld(dd, Jd) {
      for (var kd = 0; kd < Jd.length; kd++) {
        var pd = Jd[kd];
        pd.enumerable = pd.enumerable || !1, pd.configurable = !0, "value" in pd && (pd.writable = !0), Object.defineProperty(dd, pd.key, pd)
      }
    }

    function Od(dd, Jd) {
      return Od = Object.setPrototypeOf || function(dd, Jd) {
        return dd.__proto__ = Jd, dd
      }, Od(dd, Jd)
    }

    function ed(dd) {
      var Jd = function() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (dd) {
          return !1
        }
      }();
      return function() {
        var kd, Nd = Id(dd);
        if (Jd) {
          var Wd = Id(this).constructor;
          kd = Reflect.construct(Nd, arguments, Wd)
        } else kd = Nd.apply(this, arguments);
        return function(dd, Jd) {
          if (Jd && ("object" === pd(Jd) || "function" === typeof Jd)) return Jd;
          if (void 0 !== Jd) throw new TypeError("Derived constructors may only return object or undefined");
          return Rd(dd)
        }(this, kd)
      }
    }

    function Rd(dd) {
      if (void 0 === dd) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return dd
    }

    function Id(dd) {
      return Id = Object.setPrototypeOf ? Object.getPrototypeOf : function(dd) {
        return dd.__proto__ || Object.getPrototypeOf(dd)
      }, Id(dd)
    }

    function Gd(dd, Jd, kd) {
      return Jd in dd ? Object.defineProperty(dd, Jd, {
        value: kd,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : dd[Jd] = kd, dd
    }
    var vd = {
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
      xd = function(dd) {
        ! function(dd, Jd) {
          if ("function" !== typeof Jd && null !== Jd) throw new TypeError("Super expression must either be null or a function");
          Object.defineProperty(dd, "prototype", {
            value: Object.create(Jd && Jd.prototype, {
              constructor: {
                value: dd,
                writable: !0,
                configurable: !0
              }
            }),
            writable: !1
          }), Jd && Od(dd, Jd)
        }(Pd, dd);
        var Jd, kd, pd, Wd = ed(Pd);

        function Pd(dd, Jd) {
          var kd;
          return function(dd, Jd) {
            if (!(dd instanceof Jd)) throw new TypeError("Cannot call a class as a function")
          }(this, Pd), Gd(Rd(kd = Wd.call(this, dd, Jd)), "handleFormat", (function(dd) {
            var Jd = kd.props.format;
            return Jd ? Jd(dd) : dd
          })), Gd(Rd(kd), "handleUpdate", (function() {
            if (kd.slider) {
              var dd = kd.props.orientation,
                Jd = (0, gd.capitalize)(vd.orientation[dd].dimension),
                pd = kd.slider["offset".concat(Jd)],
                Nd = kd.handle["offset".concat(Jd)];
              kd.setState({
                limit: pd - Nd,
                grab: Nd / 2
              })
            }
          })), Gd(Rd(kd), "handleStart", (function(dd) {
            var Jd = kd.props.onChangeStart;
            document.addEventListener("mousemove", kd.handleDrag), document.addEventListener("mouseup", kd.handleEnd), kd.setState({
              active: !0
            }, (function() {
              Jd && Jd(dd)
            }))
          })), Gd(Rd(kd), "handleDrag", (function(dd) {
            dd.stopPropagation();
            var Jd = kd.props.onChange,
              pd = dd.target,
              Nd = pd.className,
              Wd = pd.classList,
              Pd = pd.dataset;
            if (Jd && "rangeslider__labels" !== Nd) {
              var Zd = kd.position(dd);
              Wd && Wd.contains("rangeslider__label-item") && Pd.value && (Zd = parseFloat(Pd.value)), Jd && Jd(Zd, dd)
            }
          })), Gd(Rd(kd), "handleEnd", (function(dd) {
            var Jd = kd.props.onChangeComplete;
            kd.setState({
              active: !1
            }, (function() {
              Jd && Jd(dd)
            })), document.removeEventListener("mousemove", kd.handleDrag), document.removeEventListener("mouseup", kd.handleEnd)
          })), Gd(Rd(kd), "handleKeyDown", (function(dd) {
            dd.preventDefault();
            var Jd, pd = dd.keyCode,
              Nd = kd.props,
              Wd = Nd.value,
              Pd = Nd.min,
              Zd = Nd.max,
              gd = Nd.step,
              Cd = Nd.onChange;
            switch (pd) {
              case 38:
              case 39:
                Jd = Wd + gd > Zd ? Zd : Wd + gd, Cd && Cd(Jd, dd);
                break;
              case 37:
              case 40:
                Jd = Wd - gd < Pd ? Pd : Wd - gd, Cd && Cd(Jd, dd)
            }
          })), Gd(Rd(kd), "getPositionFromValue", (function(dd) {
            var Jd = kd.state.limit,
              pd = kd.props,
              Nd = pd.min,
              Wd = (dd - Nd) / (pd.max - Nd);
            return Math.round(Wd * Jd)
          })), Gd(Rd(kd), "getValueFromPosition", (function(dd) {
            var Jd = kd.state.limit,
              pd = kd.props,
              Nd = pd.orientation,
              Wd = pd.min,
              Pd = pd.max,
              Zd = pd.step,
              Cd = (0, gd.clamp)(dd, 0, Jd) / (Jd || 1),
              Kd = Zd * Math.round(Cd * (Pd - Wd) / Zd),
              od = "horizontal" === Nd ? Kd + Wd : Pd - Kd;
            return (0, gd.clamp)(od, Wd, Pd)
          })), Gd(Rd(kd), "position", (function(dd) {
            var Jd = kd.state.grab,
              pd = kd.props,
              Nd = pd.orientation,
              Wd = pd.reverse,
              Pd = kd.slider,
              Zd = vd.orientation[Nd].coordinate,
              Cd = Wd ? vd.orientation[Nd].reverseDirection : vd.orientation[Nd].direction,
              Kd = "client".concat((0, gd.capitalize)(Zd)),
              od = dd.touches ? dd.touches[0][Kd] : dd[Kd],
              ld = Pd.getBoundingClientRect()[Cd],
              Qd = Wd ? ld - od - Jd : od - ld - Jd;
            return kd.getValueFromPosition(Qd)
          })), Gd(Rd(kd), "coordinates", (function(dd) {
            var Jd = kd.state,
              pd = Jd.limit,
              Nd = Jd.grab,
              Wd = kd.props.orientation,
              Pd = kd.getValueFromPosition(dd),
              Zd = kd.getPositionFromValue(Pd),
              gd = "horizontal" === Wd ? Zd + Nd : Zd;
            return {
              fill: "horizontal" === Wd ? gd : pd - gd,
              handle: gd,
              label: gd
            }
          })), Gd(Rd(kd), "renderLabels", (function(dd) {
            return (0, Cd.jsx)("ul", {
              ref: function(dd) {
                kd.labels = dd
              },
              className: (0, Nd.default)("rangeslider__labels"),
              children: dd
            })
          })), kd.state = {
            active: !1,
            limit: 0,
            grab: 0
          }, kd
        }
        return Jd = Pd, (kd = [{
          key: "componentDidMount",
          value: function() {
            this.handleUpdate(), new Zd.default(this.handleUpdate).observe(this.slider)
          }
        }, {
          key: "render",
          value: function() {
            var dd = this,
              Jd = this.props,
              kd = Jd.value,
              pd = Jd.orientation,
              Wd = Jd.className,
              Pd = Jd.tooltip,
              Zd = Jd.reverse,
              gd = Jd.labels,
              Kd = Jd.min,
              od = Jd.max,
              Qd = Jd.handleLabel,
              Ld = this.state.active,
              Od = vd.orientation[pd].dimension,
              ed = Zd ? vd.orientation[pd].reverseDirection : vd.orientation[pd].direction,
              Rd = this.getPositionFromValue(kd),
              Id = this.coordinates(Rd),
              xd = Gd({}, Od, "".concat(Id.fill, "px")),
              qd = Gd({}, ed, "".concat(Id.handle, "px")),
              Bd = Pd && Ld,
              sd = [],
              ad = Object.keys(gd);
            if (ad.length > 0) {
              var Md, Fd = ld(ad = ad.sort((function(dd, Jd) {
                return Zd ? dd - Jd : Jd - dd
              })));
              try {
                for (Fd.s(); !(Md = Fd.n()).done;) {
                  var Yd = Md.value,
                    md = this.getPositionFromValue(Yd),
                    bd = this.coordinates(md),
                    Sd = Gd({}, ed, "".concat(bd.label, "px"));
                  sd.push((0, Cd.jsx)("li", {
                    className: (0, Nd.default)("rangeslider__label-item"),
                    "data-value": Yd,
                    onMouseDown: this.handleDrag,
                    onTouchStart: this.handleStart,
                    onTouchEnd: this.handleEnd,
                    style: Sd,
                    children: this.props.labels[Yd]
                  }, Yd))
                }
              } catch (jd) {
                Fd.e(jd)
              } finally {
                Fd.f()
              }
            }
            return (0, Cd.jsxs)("div", {
              ref: function(Jd) {
                dd.slider = Jd
              },
              className: (0, Nd.default)("rangeslider", "rangeslider-".concat(pd), {
                "rangeslider-reverse": Zd
              }, Wd),
              onMouseDown: this.handleDrag,
              onMouseUp: this.handleEnd,
              onTouchStart: this.handleStart,
              onTouchEnd: this.handleEnd,
              "aria-valuemin": Kd,
              "aria-valuemax": od,
              "aria-valuenow": kd,
              "aria-orientation": pd,
              children: [(0, Cd.jsx)("div", {
                className: "rangeslider__fill",
                style: xd
              }), (0, Cd.jsxs)("div", {
                ref: function(Jd) {
                  dd.handle = Jd
                },
                className: "rangeslider__handle",
                onMouseDown: this.handleStart,
                onTouchMove: this.handleDrag,
                onTouchEnd: this.handleEnd,
                onKeyDown: this.handleKeyDown,
                style: qd,
                tabIndex: 0,
                children: [Bd && (0, Cd.jsx)("div", {
                  ref: function(Jd) {
                    dd.tooltip = Jd
                  },
                  className: "rangeslider__handle-tooltip",
                  children: (0, Cd.jsx)("span", {
                    children: this.handleFormat(kd)
                  })
                }), (0, Cd.jsx)("div", {
                  className: "rangeslider__handle-label",
                  children: Qd
                })]
              }), gd && this.renderLabels(sd)]
            })
          }
        }]) && Ld(Jd.prototype, kd), pd && Ld(Jd, pd), Object.defineProperty(Jd, "prototype", {
          writable: !1
        }), Pd
      }(Wd.Component);
    Gd(xd, "propTypes", {
      min: Pd.default.number,
      max: Pd.default.number,
      step: Pd.default.number,
      value: Pd.default.number,
      orientation: Pd.default.string,
      tooltip: Pd.default.bool,
      reverse: Pd.default.bool,
      labels: Pd.default.object,
      handleLabel: Pd.default.string,
      format: Pd.default.func,
      onChangeStart: Pd.default.func,
      onChange: Pd.default.func,
      onChangeComplete: Pd.default.func
    }), Gd(xd, "defaultProps", {
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
    var qd = xd;
    Jd.default = qd
  },
  4883: (dd, Jd, kd) => {
    var pd;
    Jd.c = void 0;
    var Nd = ((pd = kd(4890)) && pd.__esModule ? pd : {
      default: pd
    }).default;
    Jd.c = Nd
  },
  4902: (dd, Jd) => {
    Object.defineProperty(Jd, "__esModule", {
      value: !0
    }), Jd.capitalize = function(dd) {
      return dd.charAt(0).toUpperCase() + dd.substr(1)
    }, Jd.clamp = function(dd, Jd, kd) {
      return Math.min(Math.max(dd, Jd), kd)
    }
  },
  4854: (dd, Jd, kd) => {
    var pd = kd(4856);

    function Nd() {}

    function Wd() {}
    Wd.resetWarningCache = Nd, dd.exports = function() {
      function dd(dd, Jd, kd, Nd, Wd, Pd) {
        if (Pd !== pd) {
          var Zd = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw Zd.name = "Invariant Violation", Zd
        }
      }

      function Jd() {
        return dd
      }
      dd.isRequired = dd;
      var kd = {
        array: dd,
        bigint: dd,
        bool: dd,
        func: dd,
        number: dd,
        object: dd,
        string: dd,
        symbol: dd,
        any: dd,
        arrayOf: Jd,
        element: dd,
        elementType: dd,
        instanceOf: Jd,
        node: dd,
        objectOf: Jd,
        oneOf: Jd,
        oneOfType: Jd,
        shape: Jd,
        exact: Jd,
        checkPropTypes: Wd,
        resetWarningCache: Nd
      };
      return kd.PropTypes = kd, kd
    }
  },
  4845: (dd, Jd, kd) => {
    dd.exports = kd(4854)()
  },
  4856: dd => {
    dd.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  4894: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      default: () => sd
    });
    var pd = function() {
        if ("undefined" !== typeof Map) return Map;

        function dd(dd, Jd) {
          var kd = -1;
          return dd.some((function(dd, pd) {
            return dd[0] === Jd && (kd = pd, !0)
          })), kd
        }
        return function() {
          function Jd() {
            this.__entries__ = []
          }
          return Object.defineProperty(Jd.prototype, "size", {
            get: function() {
              return this.__entries__.length
            },
            enumerable: !0,
            configurable: !0
          }), Jd.prototype.get = function(Jd) {
            var kd = dd(this.__entries__, Jd),
              pd = this.__entries__[kd];
            return pd && pd[1]
          }, Jd.prototype.set = function(Jd, kd) {
            var pd = dd(this.__entries__, Jd);
            ~pd ? this.__entries__[pd][1] = kd : this.__entries__.push([Jd, kd])
          }, Jd.prototype.delete = function(Jd) {
            var kd = this.__entries__,
              pd = dd(kd, Jd);
            ~pd && kd.splice(pd, 1)
          }, Jd.prototype.has = function(Jd) {
            return !!~dd(this.__entries__, Jd)
          }, Jd.prototype.clear = function() {
            this.__entries__.splice(0)
          }, Jd.prototype.forEach = function(dd, Jd) {
            void 0 === Jd && (Jd = null);
            for (var kd = 0, pd = this.__entries__; kd < pd.length; kd++) {
              var Nd = pd[kd];
              dd.call(Jd, Nd[1], Nd[0])
            }
          }, Jd
        }()
      }(),
      Nd = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document,
      Wd = "undefined" !== typeof kd.g && kd.g.Math === Math ? kd.g : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")(),
      Pd = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(Wd) : function(dd) {
        return setTimeout((function() {
          return dd(Date.now())
        }), 1e3 / 60)
      };
    var Zd = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
      gd = "undefined" !== typeof MutationObserver,
      Cd = function() {
        function dd() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(dd, Jd) {
            var kd = !1,
              pd = !1,
              Nd = 0;

            function Wd() {
              kd && (kd = !1, dd()), pd && gd()
            }

            function Zd() {
              Pd(Wd)
            }

            function gd() {
              var dd = Date.now();
              if (kd) {
                if (dd - Nd < 2) return;
                pd = !0
              } else kd = !0, pd = !1, setTimeout(Zd, Jd);
              Nd = dd
            }
            return gd
          }(this.refresh.bind(this), 20)
        }
        return dd.prototype.addObserver = function(dd) {
          ~this.observers_.indexOf(dd) || this.observers_.push(dd), this.connected_ || this.connect_()
        }, dd.prototype.removeObserver = function(dd) {
          var Jd = this.observers_,
            kd = Jd.indexOf(dd);
          ~kd && Jd.splice(kd, 1), !Jd.length && this.connected_ && this.disconnect_()
        }, dd.prototype.refresh = function() {
          this.updateObservers_() && this.refresh()
        }, dd.prototype.updateObservers_ = function() {
          var dd = this.observers_.filter((function(dd) {
            return dd.gatherActive(), dd.hasActive()
          }));
          return dd.forEach((function(dd) {
            return dd.broadcastActive()
          })), dd.length > 0
        }, dd.prototype.connect_ = function() {
          Nd && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), gd ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
          })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, dd.prototype.disconnect_ = function() {
          Nd && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, dd.prototype.onTransitionEnd_ = function(dd) {
          var Jd = dd.propertyName,
            kd = void 0 === Jd ? "" : Jd;
          Zd.some((function(dd) {
            return !!~kd.indexOf(dd)
          })) && this.refresh()
        }, dd.getInstance = function() {
          return this.instance_ || (this.instance_ = new dd), this.instance_
        }, dd.instance_ = null, dd
      }(),
      Kd = function(dd, Jd) {
        for (var kd = 0, pd = Object.keys(Jd); kd < pd.length; kd++) {
          var Nd = pd[kd];
          Object.defineProperty(dd, Nd, {
            value: Jd[Nd],
            enumerable: !1,
            writable: !1,
            configurable: !0
          })
        }
        return dd
      },
      od = function(dd) {
        return dd && dd.ownerDocument && dd.ownerDocument.defaultView || Wd
      },
      ld = Id(0, 0, 0, 0);

    function Qd(dd) {
      return parseFloat(dd) || 0
    }

    function Ld(dd) {
      for (var Jd = [], kd = 1; kd < arguments.length; kd++) Jd[kd - 1] = arguments[kd];
      return Jd.reduce((function(Jd, kd) {
        return Jd + Qd(dd["border-" + kd + "-width"])
      }), 0)
    }

    function Od(dd) {
      var Jd = dd.clientWidth,
        kd = dd.clientHeight;
      if (!Jd && !kd) return ld;
      var pd = od(dd).getComputedStyle(dd),
        Nd = function(dd) {
          for (var Jd = {}, kd = 0, pd = ["top", "right", "bottom", "left"]; kd < pd.length; kd++) {
            var Nd = pd[kd],
              Wd = dd["padding-" + Nd];
            Jd[Nd] = Qd(Wd)
          }
          return Jd
        }(pd),
        Wd = Nd.left + Nd.right,
        Pd = Nd.top + Nd.bottom,
        Zd = Qd(pd.width),
        gd = Qd(pd.height);
      if ("border-box" === pd.boxSizing && (Math.round(Zd + Wd) !== Jd && (Zd -= Ld(pd, "left", "right") + Wd), Math.round(gd + Pd) !== kd && (gd -= Ld(pd, "top", "bottom") + Pd)), ! function(dd) {
          return dd === od(dd).document.documentElement
        }(dd)) {
        var Cd = Math.round(Zd + Wd) - Jd,
          Kd = Math.round(gd + Pd) - kd;
        1 !== Math.abs(Cd) && (Zd -= Cd), 1 !== Math.abs(Kd) && (gd -= Kd)
      }
      return Id(Nd.left, Nd.top, Zd, gd)
    }
    var ed = "undefined" !== typeof SVGGraphicsElement ? function(dd) {
      return dd instanceof od(dd).SVGGraphicsElement
    } : function(dd) {
      return dd instanceof od(dd).SVGElement && "function" === typeof dd.getBBox
    };

    function Rd(dd) {
      return Nd ? ed(dd) ? function(dd) {
        var Jd = dd.getBBox();
        return Id(0, 0, Jd.width, Jd.height)
      }(dd) : Od(dd) : ld
    }

    function Id(dd, Jd, kd, pd) {
      return {
        x: dd,
        y: Jd,
        width: kd,
        height: pd
      }
    }
    var Gd = function() {
        function dd(dd) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Id(0, 0, 0, 0), this.target = dd
        }
        return dd.prototype.isActive = function() {
          var dd = Rd(this.target);
          return this.contentRect_ = dd, dd.width !== this.broadcastWidth || dd.height !== this.broadcastHeight
        }, dd.prototype.broadcastRect = function() {
          var dd = this.contentRect_;
          return this.broadcastWidth = dd.width, this.broadcastHeight = dd.height, dd
        }, dd
      }(),
      vd = function(dd, Jd) {
        var kd = function(dd) {
          var Jd = dd.x,
            kd = dd.y,
            pd = dd.width,
            Nd = dd.height,
            Wd = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
            Pd = Object.create(Wd.prototype);
          return Kd(Pd, {
            x: Jd,
            y: kd,
            width: pd,
            height: Nd,
            top: kd,
            right: Jd + pd,
            bottom: Nd + kd,
            left: Jd
          }), Pd
        }(Jd);
        Kd(this, {
          target: dd,
          contentRect: kd
        })
      },
      xd = function() {
        function dd(dd, Jd, kd) {
          if (this.activeObservations_ = [], this.observations_ = new pd, "function" !== typeof dd) throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = dd, this.controller_ = Jd, this.callbackCtx_ = kd
        }
        return dd.prototype.observe = function(dd) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(dd instanceof od(dd).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var Jd = this.observations_;
            Jd.has(dd) || (Jd.set(dd, new Gd(dd)), this.controller_.addObserver(this), this.controller_.refresh())
          }
        }, dd.prototype.unobserve = function(dd) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(dd instanceof od(dd).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var Jd = this.observations_;
            Jd.has(dd) && (Jd.delete(dd), Jd.size || this.controller_.removeObserver(this))
          }
        }, dd.prototype.disconnect = function() {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, dd.prototype.gatherActive = function() {
          var dd = this;
          this.clearActive(), this.observations_.forEach((function(Jd) {
            Jd.isActive() && dd.activeObservations_.push(Jd)
          }))
        }, dd.prototype.broadcastActive = function() {
          if (this.hasActive()) {
            var dd = this.callbackCtx_,
              Jd = this.activeObservations_.map((function(dd) {
                return new vd(dd.target, dd.broadcastRect())
              }));
            this.callback_.call(dd, Jd, dd), this.clearActive()
          }
        }, dd.prototype.clearActive = function() {
          this.activeObservations_.splice(0)
        }, dd.prototype.hasActive = function() {
          return this.activeObservations_.length > 0
        }, dd
      }(),
      qd = "undefined" !== typeof WeakMap ? new WeakMap : new pd,
      Bd = function dd(Jd) {
        if (!(this instanceof dd)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var kd = Cd.getInstance(),
          pd = new xd(Jd, kd, this);
        qd.set(this, pd)
      };
    ["observe", "unobserve", "disconnect"].forEach((function(dd) {
      Bd.prototype[dd] = function() {
        var Jd;
        return (Jd = qd.get(this))[dd].apply(Jd, arguments)
      }
    }));
    const sd = "undefined" !== typeof Wd.ResizeObserver ? Wd.ResizeObserver : Bd
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);