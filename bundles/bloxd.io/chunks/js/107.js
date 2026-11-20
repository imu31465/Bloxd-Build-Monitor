export const id = 107;
export const ids = [107];
export const modules = {
  4845: (qq, Eq, gq) => {
    function Yq(qq) {
      return Yq = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(qq) {
        return typeof qq
      } : function(qq) {
        return qq && "function" == typeof Symbol && qq.constructor === Symbol && qq !== Symbol.prototype ? "symbol" : typeof qq
      }, Yq(qq)
    }
    Object.defineProperty(Eq, "__esModule", {
      value: !0
    }), Eq.default = void 0;
    var lq = Bq(gq(1018)),
      Oq = function(qq, Eq) {
        if (!Eq && qq && qq.__esModule) return qq;
        if (null === qq || "object" !== Yq(qq) && "function" !== typeof qq) return {
          default: qq
        };
        var gq = uq(Eq);
        if (gq && gq.has(qq)) return gq.get(qq);
        var lq = {},
          Oq = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var mq in qq)
          if ("default" !== mq && Object.prototype.hasOwnProperty.call(qq, mq)) {
            var xq = Oq ? Object.getOwnPropertyDescriptor(qq, mq) : null;
            xq && (xq.get || xq.set) ? Object.defineProperty(lq, mq, xq) : lq[mq] = qq[mq]
          } lq.default = qq, gq && gq.set(qq, lq);
        return lq
      }(gq(57)),
      mq = Bq(gq(4800)),
      xq = Bq(gq(4853)),
      Aq = gq(4856),
      cq = gq(1070);

    function uq(qq) {
      if ("function" !== typeof WeakMap) return null;
      var Eq = new WeakMap,
        gq = new WeakMap;
      return (uq = function(qq) {
        return qq ? gq : Eq
      })(qq)
    }

    function Bq(qq) {
      return qq && qq.__esModule ? qq : {
        default: qq
      }
    }

    function Wq(qq, Eq) {
      var gq = "undefined" !== typeof Symbol && qq[Symbol.iterator] || qq["@@iterator"];
      if (!gq) {
        if (Array.isArray(qq) || (gq = function(qq, Eq) {
            if (!qq) return;
            if ("string" === typeof qq) return Nq(qq, Eq);
            var gq = Object.prototype.toString.call(qq).slice(8, -1);
            "Object" === gq && qq.constructor && (gq = qq.constructor.name);
            if ("Map" === gq || "Set" === gq) return Array.from(qq);
            if ("Arguments" === gq || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gq)) return Nq(qq, Eq)
          }(qq)) || Eq && qq && "number" === typeof qq.length) {
          gq && (qq = gq);
          var Yq = 0,
            lq = function() {};
          return {
            s: lq,
            n: function() {
              return Yq >= qq.length ? {
                done: !0
              } : {
                done: !1,
                value: qq[Yq++]
              }
            },
            e: function(qq) {
              throw qq
            },
            f: lq
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var Oq, mq = !0,
        xq = !1;
      return {
        s: function() {
          gq = gq.call(qq)
        },
        n: function() {
          var qq = gq.next();
          return mq = qq.done, qq
        },
        e: function(qq) {
          xq = !0, Oq = qq
        },
        f: function() {
          try {
            mq || null == gq.return || gq.return()
          } finally {
            if (xq) throw Oq
          }
        }
      }
    }

    function Nq(qq, Eq) {
      (null == Eq || Eq > qq.length) && (Eq = qq.length);
      for (var gq = 0, Yq = new Array(Eq); gq < Eq; gq++) Yq[gq] = qq[gq];
      return Yq
    }

    function aq(qq, Eq) {
      for (var gq = 0; gq < Eq.length; gq++) {
        var Yq = Eq[gq];
        Yq.enumerable = Yq.enumerable || !1, Yq.configurable = !0, "value" in Yq && (Yq.writable = !0), Object.defineProperty(qq, Yq.key, Yq)
      }
    }

    function Vq(qq, Eq) {
      return Vq = Object.setPrototypeOf || function(qq, Eq) {
        return qq.__proto__ = Eq, qq
      }, Vq(qq, Eq)
    }

    function dq(qq) {
      var Eq = function() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (qq) {
          return !1
        }
      }();
      return function() {
        var gq, lq = Hq(qq);
        if (Eq) {
          var Oq = Hq(this).constructor;
          gq = Reflect.construct(lq, arguments, Oq)
        } else gq = lq.apply(this, arguments);
        return function(qq, Eq) {
          if (Eq && ("object" === Yq(Eq) || "function" === typeof Eq)) return Eq;
          if (void 0 !== Eq) throw new TypeError("Derived constructors may only return object or undefined");
          return jq(qq)
        }(this, gq)
      }
    }

    function jq(qq) {
      if (void 0 === qq) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return qq
    }

    function Hq(qq) {
      return Hq = Object.setPrototypeOf ? Object.getPrototypeOf : function(qq) {
        return qq.__proto__ || Object.getPrototypeOf(qq)
      }, Hq(qq)
    }

    function oq(qq, Eq, gq) {
      return Eq in qq ? Object.defineProperty(qq, Eq, {
        value: gq,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : qq[Eq] = gq, qq
    }
    var Pq = {
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
      Qq = function(qq) {
        ! function(qq, Eq) {
          if ("function" !== typeof Eq && null !== Eq) throw new TypeError("Super expression must either be null or a function");
          Object.defineProperty(qq, "prototype", {
            value: Object.create(Eq && Eq.prototype, {
              constructor: {
                value: qq,
                writable: !0,
                configurable: !0
              }
            }),
            writable: !1
          }), Eq && Vq(qq, Eq)
        }(mq, qq);
        var Eq, gq, Yq, Oq = dq(mq);

        function mq(qq, Eq) {
          var gq;
          return function(qq, Eq) {
            if (!(qq instanceof Eq)) throw new TypeError("Cannot call a class as a function")
          }(this, mq), oq(jq(gq = Oq.call(this, qq, Eq)), "handleFormat", (function(qq) {
            var Eq = gq.props.format;
            return Eq ? Eq(qq) : qq
          })), oq(jq(gq), "handleUpdate", (function() {
            if (gq.slider) {
              var qq = gq.props.orientation,
                Eq = (0, Aq.capitalize)(Pq.orientation[qq].dimension),
                Yq = gq.slider["offset".concat(Eq)],
                lq = gq.handle["offset".concat(Eq)];
              gq.setState({
                limit: Yq - lq,
                grab: lq / 2
              })
            }
          })), oq(jq(gq), "handleStart", (function(qq) {
            var Eq = gq.props.onChangeStart;
            document.addEventListener("mousemove", gq.handleDrag), document.addEventListener("mouseup", gq.handleEnd), gq.setState({
              active: !0
            }, (function() {
              Eq && Eq(qq)
            }))
          })), oq(jq(gq), "handleDrag", (function(qq) {
            qq.stopPropagation();
            var Eq = gq.props.onChange,
              Yq = qq.target,
              lq = Yq.className,
              Oq = Yq.classList,
              mq = Yq.dataset;
            if (Eq && "rangeslider__labels" !== lq) {
              var xq = gq.position(qq);
              Oq && Oq.contains("rangeslider__label-item") && mq.value && (xq = parseFloat(mq.value)), Eq && Eq(xq, qq)
            }
          })), oq(jq(gq), "handleEnd", (function(qq) {
            var Eq = gq.props.onChangeComplete;
            gq.setState({
              active: !1
            }, (function() {
              Eq && Eq(qq)
            })), document.removeEventListener("mousemove", gq.handleDrag), document.removeEventListener("mouseup", gq.handleEnd)
          })), oq(jq(gq), "handleKeyDown", (function(qq) {
            qq.preventDefault();
            var Eq, Yq = qq.keyCode,
              lq = gq.props,
              Oq = lq.value,
              mq = lq.min,
              xq = lq.max,
              Aq = lq.step,
              cq = lq.onChange;
            switch (Yq) {
              case 38:
              case 39:
                Eq = Oq + Aq > xq ? xq : Oq + Aq, cq && cq(Eq, qq);
                break;
              case 37:
              case 40:
                Eq = Oq - Aq < mq ? mq : Oq - Aq, cq && cq(Eq, qq)
            }
          })), oq(jq(gq), "getPositionFromValue", (function(qq) {
            var Eq = gq.state.limit,
              Yq = gq.props,
              lq = Yq.min,
              Oq = (qq - lq) / (Yq.max - lq);
            return Math.round(Oq * Eq)
          })), oq(jq(gq), "getValueFromPosition", (function(qq) {
            var Eq = gq.state.limit,
              Yq = gq.props,
              lq = Yq.orientation,
              Oq = Yq.min,
              mq = Yq.max,
              xq = Yq.step,
              cq = (0, Aq.clamp)(qq, 0, Eq) / (Eq || 1),
              uq = xq * Math.round(cq * (mq - Oq) / xq),
              Bq = "horizontal" === lq ? uq + Oq : mq - uq;
            return (0, Aq.clamp)(Bq, Oq, mq)
          })), oq(jq(gq), "position", (function(qq) {
            var Eq = gq.state.grab,
              Yq = gq.props,
              lq = Yq.orientation,
              Oq = Yq.reverse,
              mq = gq.slider,
              xq = Pq.orientation[lq].coordinate,
              cq = Oq ? Pq.orientation[lq].reverseDirection : Pq.orientation[lq].direction,
              uq = "client".concat((0, Aq.capitalize)(xq)),
              Bq = qq.touches ? qq.touches[0][uq] : qq[uq],
              Wq = mq.getBoundingClientRect()[cq],
              Nq = Oq ? Wq - Bq - Eq : Bq - Wq - Eq;
            return gq.getValueFromPosition(Nq)
          })), oq(jq(gq), "coordinates", (function(qq) {
            var Eq = gq.state,
              Yq = Eq.limit,
              lq = Eq.grab,
              Oq = gq.props.orientation,
              mq = gq.getValueFromPosition(qq),
              xq = gq.getPositionFromValue(mq),
              Aq = "horizontal" === Oq ? xq + lq : xq;
            return {
              fill: "horizontal" === Oq ? Aq : Yq - Aq,
              handle: Aq,
              label: Aq
            }
          })), oq(jq(gq), "renderLabels", (function(qq) {
            return (0, cq.jsx)("ul", {
              ref: function(qq) {
                gq.labels = qq
              },
              className: (0, lq.default)("rangeslider__labels"),
              children: qq
            })
          })), gq.state = {
            active: !1,
            limit: 0,
            grab: 0
          }, gq
        }
        return Eq = mq, (gq = [{
          key: "componentDidMount",
          value: function() {
            this.handleUpdate(), new xq.default(this.handleUpdate).observe(this.slider)
          }
        }, {
          key: "render",
          value: function() {
            var qq = this,
              Eq = this.props,
              gq = Eq.value,
              Yq = Eq.orientation,
              Oq = Eq.className,
              mq = Eq.tooltip,
              xq = Eq.reverse,
              Aq = Eq.labels,
              uq = Eq.min,
              Bq = Eq.max,
              Nq = Eq.handleLabel,
              aq = this.state.active,
              Vq = Pq.orientation[Yq].dimension,
              dq = xq ? Pq.orientation[Yq].reverseDirection : Pq.orientation[Yq].direction,
              jq = this.getPositionFromValue(gq),
              Hq = this.coordinates(jq),
              Qq = oq({}, Vq, "".concat(Hq.fill, "px")),
              yq = oq({}, dq, "".concat(Hq.handle, "px")),
              tq = mq && aq,
              rq = [],
              vq = Object.keys(Aq);
            if (vq.length > 0) {
              var hq, nq = Wq(vq = vq.sort((function(qq, Eq) {
                return xq ? qq - Eq : Eq - qq
              })));
              try {
                for (nq.s(); !(hq = nq.n()).done;) {
                  var bq = hq.value,
                    iq = this.getPositionFromValue(bq),
                    Zq = this.coordinates(iq),
                    fq = oq({}, dq, "".concat(Zq.label, "px"));
                  rq.push((0, cq.jsx)("li", {
                    className: (0, lq.default)("rangeslider__label-item"),
                    "data-value": bq,
                    onMouseDown: this.handleDrag,
                    onTouchStart: this.handleStart,
                    onTouchEnd: this.handleEnd,
                    style: fq,
                    children: this.props.labels[bq]
                  }, bq))
                }
              } catch (Mq) {
                nq.e(Mq)
              } finally {
                nq.f()
              }
            }
            return (0, cq.jsxs)("div", {
              ref: function(Eq) {
                qq.slider = Eq
              },
              className: (0, lq.default)("rangeslider", "rangeslider-".concat(Yq), {
                "rangeslider-reverse": xq
              }, Oq),
              onMouseDown: this.handleDrag,
              onMouseUp: this.handleEnd,
              onTouchStart: this.handleStart,
              onTouchEnd: this.handleEnd,
              "aria-valuemin": uq,
              "aria-valuemax": Bq,
              "aria-valuenow": gq,
              "aria-orientation": Yq,
              children: [(0, cq.jsx)("div", {
                className: "rangeslider__fill",
                style: Qq
              }), (0, cq.jsxs)("div", {
                ref: function(Eq) {
                  qq.handle = Eq
                },
                className: "rangeslider__handle",
                onMouseDown: this.handleStart,
                onTouchMove: this.handleDrag,
                onTouchEnd: this.handleEnd,
                onKeyDown: this.handleKeyDown,
                style: yq,
                tabIndex: 0,
                children: [tq && (0, cq.jsx)("div", {
                  ref: function(Eq) {
                    qq.tooltip = Eq
                  },
                  className: "rangeslider__handle-tooltip",
                  children: (0, cq.jsx)("span", {
                    children: this.handleFormat(gq)
                  })
                }), (0, cq.jsx)("div", {
                  className: "rangeslider__handle-label",
                  children: Nq
                })]
              }), Aq && this.renderLabels(rq)]
            })
          }
        }]) && aq(Eq.prototype, gq), Yq && aq(Eq, Yq), Object.defineProperty(Eq, "prototype", {
          writable: !1
        }), mq
      }(Oq.Component);
    oq(Qq, "propTypes", {
      min: mq.default.number,
      max: mq.default.number,
      step: mq.default.number,
      value: mq.default.number,
      orientation: mq.default.string,
      tooltip: mq.default.bool,
      reverse: mq.default.bool,
      labels: mq.default.object,
      handleLabel: mq.default.string,
      format: mq.default.func,
      onChangeStart: mq.default.func,
      onChange: mq.default.func,
      onChangeComplete: mq.default.func
    }), oq(Qq, "defaultProps", {
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
    var yq = Qq;
    Eq.default = yq
  },
  4837: (qq, Eq, gq) => {
    var Yq;
    Eq.d = void 0;
    var lq = ((Yq = gq(4845)) && Yq.__esModule ? Yq : {
      default: Yq
    }).default;
    Eq.d = lq
  },
  4856: (qq, Eq) => {
    Object.defineProperty(Eq, "__esModule", {
      value: !0
    }), Eq.capitalize = function(qq) {
      return qq.charAt(0).toUpperCase() + qq.substr(1)
    }, Eq.clamp = function(qq, Eq, gq) {
      return Math.min(Math.max(qq, Eq), gq)
    }
  },
  4807: (qq, Eq, gq) => {
    var Yq = gq(4811);

    function lq() {}

    function Oq() {}
    Oq.resetWarningCache = lq, qq.exports = function() {
      function qq(qq, Eq, gq, lq, Oq, mq) {
        if (mq !== Yq) {
          var xq = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw xq.name = "Invariant Violation", xq
        }
      }

      function Eq() {
        return qq
      }
      qq.isRequired = qq;
      var gq = {
        array: qq,
        bigint: qq,
        bool: qq,
        func: qq,
        number: qq,
        object: qq,
        string: qq,
        symbol: qq,
        any: qq,
        arrayOf: Eq,
        element: qq,
        elementType: qq,
        instanceOf: Eq,
        node: qq,
        objectOf: Eq,
        oneOf: Eq,
        oneOfType: Eq,
        shape: Eq,
        exact: Eq,
        checkPropTypes: Oq,
        resetWarningCache: lq
      };
      return gq.PropTypes = gq, gq
    }
  },
  4800: (qq, Eq, gq) => {
    qq.exports = gq(4807)()
  },
  4811: qq => {
    qq.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  4853: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      default: () => rq
    });
    var Yq = function() {
        if ("undefined" !== typeof Map) return Map;

        function qq(qq, Eq) {
          var gq = -1;
          return qq.some((function(qq, Yq) {
            return qq[0] === Eq && (gq = Yq, !0)
          })), gq
        }
        return function() {
          function Eq() {
            this.__entries__ = []
          }
          return Object.defineProperty(Eq.prototype, "size", {
            get: function() {
              return this.__entries__.length
            },
            enumerable: !0,
            configurable: !0
          }), Eq.prototype.get = function(Eq) {
            var gq = qq(this.__entries__, Eq),
              Yq = this.__entries__[gq];
            return Yq && Yq[1]
          }, Eq.prototype.set = function(Eq, gq) {
            var Yq = qq(this.__entries__, Eq);
            ~Yq ? this.__entries__[Yq][1] = gq : this.__entries__.push([Eq, gq])
          }, Eq.prototype.delete = function(Eq) {
            var gq = this.__entries__,
              Yq = qq(gq, Eq);
            ~Yq && gq.splice(Yq, 1)
          }, Eq.prototype.has = function(Eq) {
            return !!~qq(this.__entries__, Eq)
          }, Eq.prototype.clear = function() {
            this.__entries__.splice(0)
          }, Eq.prototype.forEach = function(qq, Eq) {
            void 0 === Eq && (Eq = null);
            for (var gq = 0, Yq = this.__entries__; gq < Yq.length; gq++) {
              var lq = Yq[gq];
              qq.call(Eq, lq[1], lq[0])
            }
          }, Eq
        }()
      }(),
      lq = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document,
      Oq = "undefined" !== typeof gq.g && gq.g.Math === Math ? gq.g : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")(),
      mq = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(Oq) : function(qq) {
        return setTimeout((function() {
          return qq(Date.now())
        }), 1e3 / 60)
      };
    var xq = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
      Aq = "undefined" !== typeof MutationObserver,
      cq = function() {
        function qq() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(qq, Eq) {
            var gq = !1,
              Yq = !1,
              lq = 0;

            function Oq() {
              gq && (gq = !1, qq()), Yq && Aq()
            }

            function xq() {
              mq(Oq)
            }

            function Aq() {
              var qq = Date.now();
              if (gq) {
                if (qq - lq < 2) return;
                Yq = !0
              } else gq = !0, Yq = !1, setTimeout(xq, Eq);
              lq = qq
            }
            return Aq
          }(this.refresh.bind(this), 20)
        }
        return qq.prototype.addObserver = function(qq) {
          ~this.observers_.indexOf(qq) || this.observers_.push(qq), this.connected_ || this.connect_()
        }, qq.prototype.removeObserver = function(qq) {
          var Eq = this.observers_,
            gq = Eq.indexOf(qq);
          ~gq && Eq.splice(gq, 1), !Eq.length && this.connected_ && this.disconnect_()
        }, qq.prototype.refresh = function() {
          this.updateObservers_() && this.refresh()
        }, qq.prototype.updateObservers_ = function() {
          var qq = this.observers_.filter((function(qq) {
            return qq.gatherActive(), qq.hasActive()
          }));
          return qq.forEach((function(qq) {
            return qq.broadcastActive()
          })), qq.length > 0
        }, qq.prototype.connect_ = function() {
          lq && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Aq ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
          })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, qq.prototype.disconnect_ = function() {
          lq && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, qq.prototype.onTransitionEnd_ = function(qq) {
          var Eq = qq.propertyName,
            gq = void 0 === Eq ? "" : Eq;
          xq.some((function(qq) {
            return !!~gq.indexOf(qq)
          })) && this.refresh()
        }, qq.getInstance = function() {
          return this.instance_ || (this.instance_ = new qq), this.instance_
        }, qq.instance_ = null, qq
      }(),
      uq = function(qq, Eq) {
        for (var gq = 0, Yq = Object.keys(Eq); gq < Yq.length; gq++) {
          var lq = Yq[gq];
          Object.defineProperty(qq, lq, {
            value: Eq[lq],
            enumerable: !1,
            writable: !1,
            configurable: !0
          })
        }
        return qq
      },
      Bq = function(qq) {
        return qq && qq.ownerDocument && qq.ownerDocument.defaultView || Oq
      },
      Wq = Hq(0, 0, 0, 0);

    function Nq(qq) {
      return parseFloat(qq) || 0
    }

    function aq(qq) {
      for (var Eq = [], gq = 1; gq < arguments.length; gq++) Eq[gq - 1] = arguments[gq];
      return Eq.reduce((function(Eq, gq) {
        return Eq + Nq(qq["border-" + gq + "-width"])
      }), 0)
    }

    function Vq(qq) {
      var Eq = qq.clientWidth,
        gq = qq.clientHeight;
      if (!Eq && !gq) return Wq;
      var Yq = Bq(qq).getComputedStyle(qq),
        lq = function(qq) {
          for (var Eq = {}, gq = 0, Yq = ["top", "right", "bottom", "left"]; gq < Yq.length; gq++) {
            var lq = Yq[gq],
              Oq = qq["padding-" + lq];
            Eq[lq] = Nq(Oq)
          }
          return Eq
        }(Yq),
        Oq = lq.left + lq.right,
        mq = lq.top + lq.bottom,
        xq = Nq(Yq.width),
        Aq = Nq(Yq.height);
      if ("border-box" === Yq.boxSizing && (Math.round(xq + Oq) !== Eq && (xq -= aq(Yq, "left", "right") + Oq), Math.round(Aq + mq) !== gq && (Aq -= aq(Yq, "top", "bottom") + mq)), ! function(qq) {
          return qq === Bq(qq).document.documentElement
        }(qq)) {
        var cq = Math.round(xq + Oq) - Eq,
          uq = Math.round(Aq + mq) - gq;
        1 !== Math.abs(cq) && (xq -= cq), 1 !== Math.abs(uq) && (Aq -= uq)
      }
      return Hq(lq.left, lq.top, xq, Aq)
    }
    var dq = "undefined" !== typeof SVGGraphicsElement ? function(qq) {
      return qq instanceof Bq(qq).SVGGraphicsElement
    } : function(qq) {
      return qq instanceof Bq(qq).SVGElement && "function" === typeof qq.getBBox
    };

    function jq(qq) {
      return lq ? dq(qq) ? function(qq) {
        var Eq = qq.getBBox();
        return Hq(0, 0, Eq.width, Eq.height)
      }(qq) : Vq(qq) : Wq
    }

    function Hq(qq, Eq, gq, Yq) {
      return {
        x: qq,
        y: Eq,
        width: gq,
        height: Yq
      }
    }
    var oq = function() {
        function qq(qq) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Hq(0, 0, 0, 0), this.target = qq
        }
        return qq.prototype.isActive = function() {
          var qq = jq(this.target);
          return this.contentRect_ = qq, qq.width !== this.broadcastWidth || qq.height !== this.broadcastHeight
        }, qq.prototype.broadcastRect = function() {
          var qq = this.contentRect_;
          return this.broadcastWidth = qq.width, this.broadcastHeight = qq.height, qq
        }, qq
      }(),
      Pq = function(qq, Eq) {
        var gq = function(qq) {
          var Eq = qq.x,
            gq = qq.y,
            Yq = qq.width,
            lq = qq.height,
            Oq = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
            mq = Object.create(Oq.prototype);
          return uq(mq, {
            x: Eq,
            y: gq,
            width: Yq,
            height: lq,
            top: gq,
            right: Eq + Yq,
            bottom: lq + gq,
            left: Eq
          }), mq
        }(Eq);
        uq(this, {
          target: qq,
          contentRect: gq
        })
      },
      Qq = function() {
        function qq(qq, Eq, gq) {
          if (this.activeObservations_ = [], this.observations_ = new Yq, "function" !== typeof qq) throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = qq, this.controller_ = Eq, this.callbackCtx_ = gq
        }
        return qq.prototype.observe = function(qq) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(qq instanceof Bq(qq).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var Eq = this.observations_;
            Eq.has(qq) || (Eq.set(qq, new oq(qq)), this.controller_.addObserver(this), this.controller_.refresh())
          }
        }, qq.prototype.unobserve = function(qq) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(qq instanceof Bq(qq).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var Eq = this.observations_;
            Eq.has(qq) && (Eq.delete(qq), Eq.size || this.controller_.removeObserver(this))
          }
        }, qq.prototype.disconnect = function() {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, qq.prototype.gatherActive = function() {
          var qq = this;
          this.clearActive(), this.observations_.forEach((function(Eq) {
            Eq.isActive() && qq.activeObservations_.push(Eq)
          }))
        }, qq.prototype.broadcastActive = function() {
          if (this.hasActive()) {
            var qq = this.callbackCtx_,
              Eq = this.activeObservations_.map((function(qq) {
                return new Pq(qq.target, qq.broadcastRect())
              }));
            this.callback_.call(qq, Eq, qq), this.clearActive()
          }
        }, qq.prototype.clearActive = function() {
          this.activeObservations_.splice(0)
        }, qq.prototype.hasActive = function() {
          return this.activeObservations_.length > 0
        }, qq
      }(),
      yq = "undefined" !== typeof WeakMap ? new WeakMap : new Yq,
      tq = function qq(Eq) {
        if (!(this instanceof qq)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var gq = cq.getInstance(),
          Yq = new Qq(Eq, gq, this);
        yq.set(this, Yq)
      };
    ["observe", "unobserve", "disconnect"].forEach((function(qq) {
      tq.prototype[qq] = function() {
        var Eq;
        return (Eq = yq.get(this))[qq].apply(Eq, arguments)
      }
    }));
    const rq = "undefined" !== typeof Oq.ResizeObserver ? Oq.ResizeObserver : tq
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);