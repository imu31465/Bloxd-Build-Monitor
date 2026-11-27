export const id = 129;
export const ids = [129];
export const modules = {
  5965: (rr, Sr, Qr) => {
    function Zr(rr) {
      return Zr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(rr) {
        return typeof rr
      } : function(rr) {
        return rr && "function" == typeof Symbol && rr.constructor === Symbol && rr !== Symbol.prototype ? "symbol" : typeof rr
      }, Zr(rr)
    }
    Object.defineProperty(Sr, "__esModule", {
      value: !0
    }), Sr.default = void 0;
    var Wr = xr(Qr(1155)),
      ar = function(rr, Sr) {
        if (!Sr && rr && rr.__esModule) return rr;
        if (null === rr || "object" !== Zr(rr) && "function" !== typeof rr) return {
          default: rr
        };
        var Qr = pr(Sr);
        if (Qr && Qr.has(rr)) return Qr.get(rr);
        var Wr = {},
          ar = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var jr in rr)
          if ("default" !== jr && Object.prototype.hasOwnProperty.call(rr, jr)) {
            var Ir = ar ? Object.getOwnPropertyDescriptor(rr, jr) : null;
            Ir && (Ir.get || Ir.set) ? Object.defineProperty(Wr, jr, Ir) : Wr[jr] = rr[jr]
          } Wr.default = rr, Qr && Qr.set(rr, Wr);
        return Wr
      }(Qr(72)),
      jr = xr(Qr(5927)),
      Ir = xr(Qr(5968)),
      fr = Qr(5977),
      Er = Qr(1338);

    function pr(rr) {
      if ("function" !== typeof WeakMap) return null;
      var Sr = new WeakMap,
        Qr = new WeakMap;
      return (pr = function(rr) {
        return rr ? Qr : Sr
      })(rr)
    }

    function xr(rr) {
      return rr && rr.__esModule ? rr : {
        default: rr
      }
    }

    function mr(rr, Sr) {
      var Qr = "undefined" !== typeof Symbol && rr[Symbol.iterator] || rr["@@iterator"];
      if (!Qr) {
        if (Array.isArray(rr) || (Qr = function(rr, Sr) {
            if (!rr) return;
            if ("string" === typeof rr) return Nr(rr, Sr);
            var Qr = Object.prototype.toString.call(rr).slice(8, -1);
            "Object" === Qr && rr.constructor && (Qr = rr.constructor.name);
            if ("Map" === Qr || "Set" === Qr) return Array.from(rr);
            if ("Arguments" === Qr || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Qr)) return Nr(rr, Sr)
          }(rr)) || Sr && rr && "number" === typeof rr.length) {
          Qr && (rr = Qr);
          var Zr = 0,
            Wr = function() {};
          return {
            s: Wr,
            n: function() {
              return Zr >= rr.length ? {
                done: !0
              } : {
                done: !1,
                value: rr[Zr++]
              }
            },
            e: function(rr) {
              throw rr
            },
            f: Wr
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var ar, jr = !0,
        Ir = !1;
      return {
        s: function() {
          Qr = Qr.call(rr)
        },
        n: function() {
          var rr = Qr.next();
          return jr = rr.done, rr
        },
        e: function(rr) {
          Ir = !0, ar = rr
        },
        f: function() {
          try {
            jr || null == Qr.return || Qr.return()
          } finally {
            if (Ir) throw ar
          }
        }
      }
    }

    function Nr(rr, Sr) {
      (null == Sr || Sr > rr.length) && (Sr = rr.length);
      for (var Qr = 0, Zr = new Array(Sr); Qr < Sr; Qr++) Zr[Qr] = rr[Qr];
      return Zr
    }

    function Ur(rr, Sr) {
      for (var Qr = 0; Qr < Sr.length; Qr++) {
        var Zr = Sr[Qr];
        Zr.enumerable = Zr.enumerable || !1, Zr.configurable = !0, "value" in Zr && (Zr.writable = !0), Object.defineProperty(rr, Zr.key, Zr)
      }
    }

    function tr(rr, Sr) {
      return tr = Object.setPrototypeOf || function(rr, Sr) {
        return rr.__proto__ = Sr, rr
      }, tr(rr, Sr)
    }

    function hr(rr) {
      var Sr = function() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (rr) {
          return !1
        }
      }();
      return function() {
        var Qr, Wr = Yr(rr);
        if (Sr) {
          var ar = Yr(this).constructor;
          Qr = Reflect.construct(Wr, arguments, ar)
        } else Qr = Wr.apply(this, arguments);
        return function(rr, Sr) {
          if (Sr && ("object" === Zr(Sr) || "function" === typeof Sr)) return Sr;
          if (void 0 !== Sr) throw new TypeError("Derived constructors may only return object or undefined");
          return zr(rr)
        }(this, Qr)
      }
    }

    function zr(rr) {
      if (void 0 === rr) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return rr
    }

    function Yr(rr) {
      return Yr = Object.setPrototypeOf ? Object.getPrototypeOf : function(rr) {
        return rr.__proto__ || Object.getPrototypeOf(rr)
      }, Yr(rr)
    }

    function nr(rr, Sr, Qr) {
      return Sr in rr ? Object.defineProperty(rr, Sr, {
        value: Qr,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : rr[Sr] = Qr, rr
    }
    var er = {
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
      Kr = function(rr) {
        ! function(rr, Sr) {
          if ("function" !== typeof Sr && null !== Sr) throw new TypeError("Super expression must either be null or a function");
          Object.defineProperty(rr, "prototype", {
            value: Object.create(Sr && Sr.prototype, {
              constructor: {
                value: rr,
                writable: !0,
                configurable: !0
              }
            }),
            writable: !1
          }), Sr && tr(rr, Sr)
        }(jr, rr);
        var Sr, Qr, Zr, ar = hr(jr);

        function jr(rr, Sr) {
          var Qr;
          return function(rr, Sr) {
            if (!(rr instanceof Sr)) throw new TypeError("Cannot call a class as a function")
          }(this, jr), nr(zr(Qr = ar.call(this, rr, Sr)), "handleFormat", (function(rr) {
            var Sr = Qr.props.format;
            return Sr ? Sr(rr) : rr
          })), nr(zr(Qr), "handleUpdate", (function() {
            if (Qr.slider) {
              var rr = Qr.props.orientation,
                Sr = (0, fr.capitalize)(er.orientation[rr].dimension),
                Zr = Qr.slider["offset".concat(Sr)],
                Wr = Qr.handle["offset".concat(Sr)];
              Qr.setState({
                limit: Zr - Wr,
                grab: Wr / 2
              })
            }
          })), nr(zr(Qr), "handleStart", (function(rr) {
            var Sr = Qr.props.onChangeStart;
            document.addEventListener("mousemove", Qr.handleDrag), document.addEventListener("mouseup", Qr.handleEnd), Qr.setState({
              active: !0
            }, (function() {
              Sr && Sr(rr)
            }))
          })), nr(zr(Qr), "handleDrag", (function(rr) {
            rr.stopPropagation();
            var Sr = Qr.props.onChange,
              Zr = rr.target,
              Wr = Zr.className,
              ar = Zr.classList,
              jr = Zr.dataset;
            if (Sr && "rangeslider__labels" !== Wr) {
              var Ir = Qr.position(rr);
              ar && ar.contains("rangeslider__label-item") && jr.value && (Ir = parseFloat(jr.value)), Sr && Sr(Ir, rr)
            }
          })), nr(zr(Qr), "handleEnd", (function(rr) {
            var Sr = Qr.props.onChangeComplete;
            Qr.setState({
              active: !1
            }, (function() {
              Sr && Sr(rr)
            })), document.removeEventListener("mousemove", Qr.handleDrag), document.removeEventListener("mouseup", Qr.handleEnd)
          })), nr(zr(Qr), "handleKeyDown", (function(rr) {
            rr.preventDefault();
            var Sr, Zr = rr.keyCode,
              Wr = Qr.props,
              ar = Wr.value,
              jr = Wr.min,
              Ir = Wr.max,
              fr = Wr.step,
              Er = Wr.onChange;
            switch (Zr) {
              case 38:
              case 39:
                Sr = ar + fr > Ir ? Ir : ar + fr, Er && Er(Sr, rr);
                break;
              case 37:
              case 40:
                Sr = ar - fr < jr ? jr : ar - fr, Er && Er(Sr, rr)
            }
          })), nr(zr(Qr), "getPositionFromValue", (function(rr) {
            var Sr = Qr.state.limit,
              Zr = Qr.props,
              Wr = Zr.min,
              ar = (rr - Wr) / (Zr.max - Wr);
            return Math.round(ar * Sr)
          })), nr(zr(Qr), "getValueFromPosition", (function(rr) {
            var Sr = Qr.state.limit,
              Zr = Qr.props,
              Wr = Zr.orientation,
              ar = Zr.min,
              jr = Zr.max,
              Ir = Zr.step,
              Er = (0, fr.clamp)(rr, 0, Sr) / (Sr || 1),
              pr = Ir * Math.round(Er * (jr - ar) / Ir),
              xr = "horizontal" === Wr ? pr + ar : jr - pr;
            return (0, fr.clamp)(xr, ar, jr)
          })), nr(zr(Qr), "position", (function(rr) {
            var Sr = Qr.state.grab,
              Zr = Qr.props,
              Wr = Zr.orientation,
              ar = Zr.reverse,
              jr = Qr.slider,
              Ir = er.orientation[Wr].coordinate,
              Er = ar ? er.orientation[Wr].reverseDirection : er.orientation[Wr].direction,
              pr = "client".concat((0, fr.capitalize)(Ir)),
              xr = rr.touches ? rr.touches[0][pr] : rr[pr],
              mr = jr.getBoundingClientRect()[Er],
              Nr = ar ? mr - xr - Sr : xr - mr - Sr;
            return Qr.getValueFromPosition(Nr)
          })), nr(zr(Qr), "coordinates", (function(rr) {
            var Sr = Qr.state,
              Zr = Sr.limit,
              Wr = Sr.grab,
              ar = Qr.props.orientation,
              jr = Qr.getValueFromPosition(rr),
              Ir = Qr.getPositionFromValue(jr),
              fr = "horizontal" === ar ? Ir + Wr : Ir;
            return {
              fill: "horizontal" === ar ? fr : Zr - fr,
              handle: fr,
              label: fr
            }
          })), nr(zr(Qr), "renderLabels", (function(rr) {
            return (0, Er.jsx)("ul", {
              ref: function(rr) {
                Qr.labels = rr
              },
              className: (0, Wr.default)("rangeslider__labels"),
              children: rr
            })
          })), Qr.state = {
            active: !1,
            limit: 0,
            grab: 0
          }, Qr
        }
        return Sr = jr, (Qr = [{
          key: "componentDidMount",
          value: function() {
            this.handleUpdate(), new Ir.default(this.handleUpdate).observe(this.slider)
          }
        }, {
          key: "render",
          value: function() {
            var rr = this,
              Sr = this.props,
              Qr = Sr.value,
              Zr = Sr.orientation,
              ar = Sr.className,
              jr = Sr.tooltip,
              Ir = Sr.reverse,
              fr = Sr.labels,
              pr = Sr.min,
              xr = Sr.max,
              Nr = Sr.handleLabel,
              Ur = this.state.active,
              tr = er.orientation[Zr].dimension,
              hr = Ir ? er.orientation[Zr].reverseDirection : er.orientation[Zr].direction,
              zr = this.getPositionFromValue(Qr),
              Yr = this.coordinates(zr),
              Kr = nr({}, tr, "".concat(Yr.fill, "px")),
              yr = nr({}, hr, "".concat(Yr.handle, "px")),
              Br = jr && Ur,
              Tr = [],
              vr = Object.keys(fr);
            if (vr.length > 0) {
              var Or, Lr = mr(vr = vr.sort((function(rr, Sr) {
                return Ir ? rr - Sr : Sr - rr
              })));
              try {
                for (Lr.s(); !(Or = Lr.n()).done;) {
                  var lr = Or.value,
                    Xr = this.getPositionFromValue(lr),
                    Pr = this.coordinates(Xr),
                    Hr = nr({}, hr, "".concat(Pr.label, "px"));
                  Tr.push((0, Er.jsx)("li", {
                    className: (0, Wr.default)("rangeslider__label-item"),
                    "data-value": lr,
                    onMouseDown: this.handleDrag,
                    onTouchStart: this.handleStart,
                    onTouchEnd: this.handleEnd,
                    style: Hr,
                    children: this.props.labels[lr]
                  }, lr))
                }
              } catch (qr) {
                Lr.e(qr)
              } finally {
                Lr.f()
              }
            }
            return (0, Er.jsxs)("div", {
              ref: function(Sr) {
                rr.slider = Sr
              },
              className: (0, Wr.default)("rangeslider", "rangeslider-".concat(Zr), {
                "rangeslider-reverse": Ir
              }, ar),
              onMouseDown: this.handleDrag,
              onMouseUp: this.handleEnd,
              onTouchStart: this.handleStart,
              onTouchEnd: this.handleEnd,
              "aria-valuemin": pr,
              "aria-valuemax": xr,
              "aria-valuenow": Qr,
              "aria-orientation": Zr,
              children: [(0, Er.jsx)("div", {
                className: "rangeslider__fill",
                style: Kr
              }), (0, Er.jsxs)("div", {
                ref: function(Sr) {
                  rr.handle = Sr
                },
                className: "rangeslider__handle",
                onMouseDown: this.handleStart,
                onTouchMove: this.handleDrag,
                onTouchEnd: this.handleEnd,
                onKeyDown: this.handleKeyDown,
                style: yr,
                tabIndex: 0,
                children: [Br && (0, Er.jsx)("div", {
                  ref: function(Sr) {
                    rr.tooltip = Sr
                  },
                  className: "rangeslider__handle-tooltip",
                  children: (0, Er.jsx)("span", {
                    children: this.handleFormat(Qr)
                  })
                }), (0, Er.jsx)("div", {
                  className: "rangeslider__handle-label",
                  children: Nr
                })]
              }), fr && this.renderLabels(Tr)]
            })
          }
        }]) && Ur(Sr.prototype, Qr), Zr && Ur(Sr, Zr), Object.defineProperty(Sr, "prototype", {
          writable: !1
        }), jr
      }(ar.Component);
    nr(Kr, "propTypes", {
      min: jr.default.number,
      max: jr.default.number,
      step: jr.default.number,
      value: jr.default.number,
      orientation: jr.default.string,
      tooltip: jr.default.bool,
      reverse: jr.default.bool,
      labels: jr.default.object,
      handleLabel: jr.default.string,
      format: jr.default.func,
      onChangeStart: jr.default.func,
      onChange: jr.default.func,
      onChangeComplete: jr.default.func
    }), nr(Kr, "defaultProps", {
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
    var yr = Kr;
    Sr.default = yr
  },
  5960: (rr, Sr, Qr) => {
    var Zr;
    Sr.c = void 0;
    var Wr = ((Zr = Qr(5965)) && Zr.__esModule ? Zr : {
      default: Zr
    }).default;
    Sr.c = Wr
  },
  5977: (rr, Sr) => {
    Object.defineProperty(Sr, "__esModule", {
      value: !0
    }), Sr.capitalize = function(rr) {
      return rr.charAt(0).toUpperCase() + rr.substr(1)
    }, Sr.clamp = function(rr, Sr, Qr) {
      return Math.min(Math.max(rr, Sr), Qr)
    }
  },
  5929: (rr, Sr, Qr) => {
    var Zr = Qr(5933);

    function Wr() {}

    function ar() {}
    ar.resetWarningCache = Wr, rr.exports = function() {
      function rr(rr, Sr, Qr, Wr, ar, jr) {
        if (jr !== Zr) {
          var Ir = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw Ir.name = "Invariant Violation", Ir
        }
      }

      function Sr() {
        return rr
      }
      rr.isRequired = rr;
      var Qr = {
        array: rr,
        bigint: rr,
        bool: rr,
        func: rr,
        number: rr,
        object: rr,
        string: rr,
        symbol: rr,
        any: rr,
        arrayOf: Sr,
        element: rr,
        elementType: rr,
        instanceOf: Sr,
        node: rr,
        objectOf: Sr,
        oneOf: Sr,
        oneOfType: Sr,
        shape: Sr,
        exact: Sr,
        checkPropTypes: ar,
        resetWarningCache: Wr
      };
      return Qr.PropTypes = Qr, Qr
    }
  },
  5927: (rr, Sr, Qr) => {
    rr.exports = Qr(5929)()
  },
  5933: rr => {
    rr.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  5968: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      default: () => Tr
    });
    var Zr = function() {
        if ("undefined" !== typeof Map) return Map;

        function rr(rr, Sr) {
          var Qr = -1;
          return rr.some((function(rr, Zr) {
            return rr[0] === Sr && (Qr = Zr, !0)
          })), Qr
        }
        return function() {
          function Sr() {
            this.__entries__ = []
          }
          return Object.defineProperty(Sr.prototype, "size", {
            get: function() {
              return this.__entries__.length
            },
            enumerable: !0,
            configurable: !0
          }), Sr.prototype.get = function(Sr) {
            var Qr = rr(this.__entries__, Sr),
              Zr = this.__entries__[Qr];
            return Zr && Zr[1]
          }, Sr.prototype.set = function(Sr, Qr) {
            var Zr = rr(this.__entries__, Sr);
            ~Zr ? this.__entries__[Zr][1] = Qr : this.__entries__.push([Sr, Qr])
          }, Sr.prototype.delete = function(Sr) {
            var Qr = this.__entries__,
              Zr = rr(Qr, Sr);
            ~Zr && Qr.splice(Zr, 1)
          }, Sr.prototype.has = function(Sr) {
            return !!~rr(this.__entries__, Sr)
          }, Sr.prototype.clear = function() {
            this.__entries__.splice(0)
          }, Sr.prototype.forEach = function(rr, Sr) {
            void 0 === Sr && (Sr = null);
            for (var Qr = 0, Zr = this.__entries__; Qr < Zr.length; Qr++) {
              var Wr = Zr[Qr];
              rr.call(Sr, Wr[1], Wr[0])
            }
          }, Sr
        }()
      }(),
      Wr = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document,
      ar = "undefined" !== typeof Qr.g && Qr.g.Math === Math ? Qr.g : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")(),
      jr = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(ar) : function(rr) {
        return setTimeout((function() {
          return rr(Date.now())
        }), 1e3 / 60)
      };
    var Ir = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
      fr = "undefined" !== typeof MutationObserver,
      Er = function() {
        function rr() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(rr, Sr) {
            var Qr = !1,
              Zr = !1,
              Wr = 0;

            function ar() {
              Qr && (Qr = !1, rr()), Zr && fr()
            }

            function Ir() {
              jr(ar)
            }

            function fr() {
              var rr = Date.now();
              if (Qr) {
                if (rr - Wr < 2) return;
                Zr = !0
              } else Qr = !0, Zr = !1, setTimeout(Ir, Sr);
              Wr = rr
            }
            return fr
          }(this.refresh.bind(this), 20)
        }
        return rr.prototype.addObserver = function(rr) {
          ~this.observers_.indexOf(rr) || this.observers_.push(rr), this.connected_ || this.connect_()
        }, rr.prototype.removeObserver = function(rr) {
          var Sr = this.observers_,
            Qr = Sr.indexOf(rr);
          ~Qr && Sr.splice(Qr, 1), !Sr.length && this.connected_ && this.disconnect_()
        }, rr.prototype.refresh = function() {
          this.updateObservers_() && this.refresh()
        }, rr.prototype.updateObservers_ = function() {
          var rr = this.observers_.filter((function(rr) {
            return rr.gatherActive(), rr.hasActive()
          }));
          return rr.forEach((function(rr) {
            return rr.broadcastActive()
          })), rr.length > 0
        }, rr.prototype.connect_ = function() {
          Wr && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), fr ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
          })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, rr.prototype.disconnect_ = function() {
          Wr && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, rr.prototype.onTransitionEnd_ = function(rr) {
          var Sr = rr.propertyName,
            Qr = void 0 === Sr ? "" : Sr;
          Ir.some((function(rr) {
            return !!~Qr.indexOf(rr)
          })) && this.refresh()
        }, rr.getInstance = function() {
          return this.instance_ || (this.instance_ = new rr), this.instance_
        }, rr.instance_ = null, rr
      }(),
      pr = function(rr, Sr) {
        for (var Qr = 0, Zr = Object.keys(Sr); Qr < Zr.length; Qr++) {
          var Wr = Zr[Qr];
          Object.defineProperty(rr, Wr, {
            value: Sr[Wr],
            enumerable: !1,
            writable: !1,
            configurable: !0
          })
        }
        return rr
      },
      xr = function(rr) {
        return rr && rr.ownerDocument && rr.ownerDocument.defaultView || ar
      },
      mr = Yr(0, 0, 0, 0);

    function Nr(rr) {
      return parseFloat(rr) || 0
    }

    function Ur(rr) {
      for (var Sr = [], Qr = 1; Qr < arguments.length; Qr++) Sr[Qr - 1] = arguments[Qr];
      return Sr.reduce((function(Sr, Qr) {
        return Sr + Nr(rr["border-" + Qr + "-width"])
      }), 0)
    }

    function tr(rr) {
      var Sr = rr.clientWidth,
        Qr = rr.clientHeight;
      if (!Sr && !Qr) return mr;
      var Zr = xr(rr).getComputedStyle(rr),
        Wr = function(rr) {
          for (var Sr = {}, Qr = 0, Zr = ["top", "right", "bottom", "left"]; Qr < Zr.length; Qr++) {
            var Wr = Zr[Qr],
              ar = rr["padding-" + Wr];
            Sr[Wr] = Nr(ar)
          }
          return Sr
        }(Zr),
        ar = Wr.left + Wr.right,
        jr = Wr.top + Wr.bottom,
        Ir = Nr(Zr.width),
        fr = Nr(Zr.height);
      if ("border-box" === Zr.boxSizing && (Math.round(Ir + ar) !== Sr && (Ir -= Ur(Zr, "left", "right") + ar), Math.round(fr + jr) !== Qr && (fr -= Ur(Zr, "top", "bottom") + jr)), ! function(rr) {
          return rr === xr(rr).document.documentElement
        }(rr)) {
        var Er = Math.round(Ir + ar) - Sr,
          pr = Math.round(fr + jr) - Qr;
        1 !== Math.abs(Er) && (Ir -= Er), 1 !== Math.abs(pr) && (fr -= pr)
      }
      return Yr(Wr.left, Wr.top, Ir, fr)
    }
    var hr = "undefined" !== typeof SVGGraphicsElement ? function(rr) {
      return rr instanceof xr(rr).SVGGraphicsElement
    } : function(rr) {
      return rr instanceof xr(rr).SVGElement && "function" === typeof rr.getBBox
    };

    function zr(rr) {
      return Wr ? hr(rr) ? function(rr) {
        var Sr = rr.getBBox();
        return Yr(0, 0, Sr.width, Sr.height)
      }(rr) : tr(rr) : mr
    }

    function Yr(rr, Sr, Qr, Zr) {
      return {
        x: rr,
        y: Sr,
        width: Qr,
        height: Zr
      }
    }
    var nr = function() {
        function rr(rr) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Yr(0, 0, 0, 0), this.target = rr
        }
        return rr.prototype.isActive = function() {
          var rr = zr(this.target);
          return this.contentRect_ = rr, rr.width !== this.broadcastWidth || rr.height !== this.broadcastHeight
        }, rr.prototype.broadcastRect = function() {
          var rr = this.contentRect_;
          return this.broadcastWidth = rr.width, this.broadcastHeight = rr.height, rr
        }, rr
      }(),
      er = function(rr, Sr) {
        var Qr = function(rr) {
          var Sr = rr.x,
            Qr = rr.y,
            Zr = rr.width,
            Wr = rr.height,
            ar = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
            jr = Object.create(ar.prototype);
          return pr(jr, {
            x: Sr,
            y: Qr,
            width: Zr,
            height: Wr,
            top: Qr,
            right: Sr + Zr,
            bottom: Wr + Qr,
            left: Sr
          }), jr
        }(Sr);
        pr(this, {
          target: rr,
          contentRect: Qr
        })
      },
      Kr = function() {
        function rr(rr, Sr, Qr) {
          if (this.activeObservations_ = [], this.observations_ = new Zr, "function" !== typeof rr) throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = rr, this.controller_ = Sr, this.callbackCtx_ = Qr
        }
        return rr.prototype.observe = function(rr) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(rr instanceof xr(rr).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var Sr = this.observations_;
            Sr.has(rr) || (Sr.set(rr, new nr(rr)), this.controller_.addObserver(this), this.controller_.refresh())
          }
        }, rr.prototype.unobserve = function(rr) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(rr instanceof xr(rr).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var Sr = this.observations_;
            Sr.has(rr) && (Sr.delete(rr), Sr.size || this.controller_.removeObserver(this))
          }
        }, rr.prototype.disconnect = function() {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, rr.prototype.gatherActive = function() {
          var rr = this;
          this.clearActive(), this.observations_.forEach((function(Sr) {
            Sr.isActive() && rr.activeObservations_.push(Sr)
          }))
        }, rr.prototype.broadcastActive = function() {
          if (this.hasActive()) {
            var rr = this.callbackCtx_,
              Sr = this.activeObservations_.map((function(rr) {
                return new er(rr.target, rr.broadcastRect())
              }));
            this.callback_.call(rr, Sr, rr), this.clearActive()
          }
        }, rr.prototype.clearActive = function() {
          this.activeObservations_.splice(0)
        }, rr.prototype.hasActive = function() {
          return this.activeObservations_.length > 0
        }, rr
      }(),
      yr = "undefined" !== typeof WeakMap ? new WeakMap : new Zr,
      Br = function rr(Sr) {
        if (!(this instanceof rr)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var Qr = Er.getInstance(),
          Zr = new Kr(Sr, Qr, this);
        yr.set(this, Zr)
      };
    ["observe", "unobserve", "disconnect"].forEach((function(rr) {
      Br.prototype[rr] = function() {
        var Sr;
        return (Sr = yr.get(this))[rr].apply(Sr, arguments)
      }
    }));
    const Tr = "undefined" !== typeof ar.ResizeObserver ? ar.ResizeObserver : Br
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);