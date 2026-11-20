export const id = 106;
export const ids = [106];
export const modules = {
  4684: (bb, ab, Ub) => {
    function Ab(bb) {
      return Ab = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Ab(bb)
    }
    Object.defineProperty(ab, "__esModule", {
      value: !0
    }), ab.default = void 0;
    var Mb = Lb(Ub(984)),
      Tb = function(bb, ab) {
        if (!ab && bb && bb.__esModule) return bb;
        if (null === bb || "object" !== Ab(bb) && "function" !== typeof bb) return {
          default: bb
        };
        var Ub = vb(ab);
        if (Ub && Ub.has(bb)) return Ub.get(bb);
        var Mb = {},
          Tb = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var Eb in bb)
          if ("default" !== Eb && Object.prototype.hasOwnProperty.call(bb, Eb)) {
            var Yb = Tb ? Object.getOwnPropertyDescriptor(bb, Eb) : null;
            Yb && (Yb.get || Yb.set) ? Object.defineProperty(Mb, Eb, Yb) : Mb[Eb] = bb[Eb]
          } Mb.default = bb, Ub && Ub.set(bb, Mb);
        return Mb
      }(Ub(52)),
      Eb = Lb(Ub(4642)),
      Yb = Lb(Ub(4686)),
      Bb = Ub(4688),
      eb = Ub(1023);

    function vb(bb) {
      if ("function" !== typeof WeakMap) return null;
      var ab = new WeakMap,
        Ub = new WeakMap;
      return (vb = function(bb) {
        return bb ? Ub : ab
      })(bb)
    }

    function Lb(bb) {
      return bb && bb.__esModule ? bb : {
        default: bb
      }
    }

    function Pb(bb, ab) {
      var Ub = "undefined" !== typeof Symbol && bb[Symbol.iterator] || bb["@@iterator"];
      if (!Ub) {
        if (Array.isArray(bb) || (Ub = function(bb, ab) {
            if (!bb) return;
            if ("string" === typeof bb) return Xb(bb, ab);
            var Ub = Object.prototype.toString.call(bb).slice(8, -1);
            "Object" === Ub && bb.constructor && (Ub = bb.constructor.name);
            if ("Map" === Ub || "Set" === Ub) return Array.from(bb);
            if ("Arguments" === Ub || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Ub)) return Xb(bb, ab)
          }(bb)) || ab && bb && "number" === typeof bb.length) {
          Ub && (bb = Ub);
          var Ab = 0,
            Mb = function() {};
          return {
            s: Mb,
            n: function() {
              return Ab >= bb.length ? {
                done: !0
              } : {
                done: !1,
                value: bb[Ab++]
              }
            },
            e: function(bb) {
              throw bb
            },
            f: Mb
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var Tb, Eb = !0,
        Yb = !1;
      return {
        s: function() {
          Ub = Ub.call(bb)
        },
        n: function() {
          var bb = Ub.next();
          return Eb = bb.done, bb
        },
        e: function(bb) {
          Yb = !0, Tb = bb
        },
        f: function() {
          try {
            Eb || null == Ub.return || Ub.return()
          } finally {
            if (Yb) throw Tb
          }
        }
      }
    }

    function Xb(bb, ab) {
      (null == ab || ab > bb.length) && (ab = bb.length);
      for (var Ub = 0, Ab = new Array(ab); Ub < ab; Ub++) Ab[Ub] = bb[Ub];
      return Ab
    }

    function jb(bb, ab) {
      for (var Ub = 0; Ub < ab.length; Ub++) {
        var Ab = ab[Ub];
        Ab.enumerable = Ab.enumerable || !1, Ab.configurable = !0, "value" in Ab && (Ab.writable = !0), Object.defineProperty(bb, Ab.key, Ab)
      }
    }

    function Rb(bb, ab) {
      return Rb = Object.setPrototypeOf || function(bb, ab) {
        return bb.__proto__ = ab, bb
      }, Rb(bb, ab)
    }

    function kb(bb) {
      var ab = function() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (bb) {
          return !1
        }
      }();
      return function() {
        var Ub, Mb = Zb(bb);
        if (ab) {
          var Tb = Zb(this).constructor;
          Ub = Reflect.construct(Mb, arguments, Tb)
        } else Ub = Mb.apply(this, arguments);
        return function(bb, ab) {
          if (ab && ("object" === Ab(ab) || "function" === typeof ab)) return ab;
          if (void 0 !== ab) throw new TypeError("Derived constructors may only return object or undefined");
          return yb(bb)
        }(this, Ub)
      }
    }

    function yb(bb) {
      if (void 0 === bb) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return bb
    }

    function Zb(bb) {
      return Zb = Object.setPrototypeOf ? Object.getPrototypeOf : function(bb) {
        return bb.__proto__ || Object.getPrototypeOf(bb)
      }, Zb(bb)
    }

    function Db(bb, ab, Ub) {
      return ab in bb ? Object.defineProperty(bb, ab, {
        value: Ub,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ab] = Ub, bb
    }
    var zb = {
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
      xb = function(bb) {
        ! function(bb, ab) {
          if ("function" !== typeof ab && null !== ab) throw new TypeError("Super expression must either be null or a function");
          Object.defineProperty(bb, "prototype", {
            value: Object.create(ab && ab.prototype, {
              constructor: {
                value: bb,
                writable: !0,
                configurable: !0
              }
            }),
            writable: !1
          }), ab && Rb(bb, ab)
        }(Eb, bb);
        var ab, Ub, Ab, Tb = kb(Eb);

        function Eb(bb, ab) {
          var Ub;
          return function(bb, ab) {
            if (!(bb instanceof ab)) throw new TypeError("Cannot call a class as a function")
          }(this, Eb), Db(yb(Ub = Tb.call(this, bb, ab)), "handleFormat", (function(bb) {
            var ab = Ub.props.format;
            return ab ? ab(bb) : bb
          })), Db(yb(Ub), "handleUpdate", (function() {
            if (Ub.slider) {
              var bb = Ub.props.orientation,
                ab = (0, Bb.capitalize)(zb.orientation[bb].dimension),
                Ab = Ub.slider["offset".concat(ab)],
                Mb = Ub.handle["offset".concat(ab)];
              Ub.setState({
                limit: Ab - Mb,
                grab: Mb / 2
              })
            }
          })), Db(yb(Ub), "handleStart", (function(bb) {
            var ab = Ub.props.onChangeStart;
            document.addEventListener("mousemove", Ub.handleDrag), document.addEventListener("mouseup", Ub.handleEnd), Ub.setState({
              active: !0
            }, (function() {
              ab && ab(bb)
            }))
          })), Db(yb(Ub), "handleDrag", (function(bb) {
            bb.stopPropagation();
            var ab = Ub.props.onChange,
              Ab = bb.target,
              Mb = Ab.className,
              Tb = Ab.classList,
              Eb = Ab.dataset;
            if (ab && "rangeslider__labels" !== Mb) {
              var Yb = Ub.position(bb);
              Tb && Tb.contains("rangeslider__label-item") && Eb.value && (Yb = parseFloat(Eb.value)), ab && ab(Yb, bb)
            }
          })), Db(yb(Ub), "handleEnd", (function(bb) {
            var ab = Ub.props.onChangeComplete;
            Ub.setState({
              active: !1
            }, (function() {
              ab && ab(bb)
            })), document.removeEventListener("mousemove", Ub.handleDrag), document.removeEventListener("mouseup", Ub.handleEnd)
          })), Db(yb(Ub), "handleKeyDown", (function(bb) {
            bb.preventDefault();
            var ab, Ab = bb.keyCode,
              Mb = Ub.props,
              Tb = Mb.value,
              Eb = Mb.min,
              Yb = Mb.max,
              Bb = Mb.step,
              eb = Mb.onChange;
            switch (Ab) {
              case 38:
              case 39:
                ab = Tb + Bb > Yb ? Yb : Tb + Bb, eb && eb(ab, bb);
                break;
              case 37:
              case 40:
                ab = Tb - Bb < Eb ? Eb : Tb - Bb, eb && eb(ab, bb)
            }
          })), Db(yb(Ub), "getPositionFromValue", (function(bb) {
            var ab = Ub.state.limit,
              Ab = Ub.props,
              Mb = Ab.min,
              Tb = (bb - Mb) / (Ab.max - Mb);
            return Math.round(Tb * ab)
          })), Db(yb(Ub), "getValueFromPosition", (function(bb) {
            var ab = Ub.state.limit,
              Ab = Ub.props,
              Mb = Ab.orientation,
              Tb = Ab.min,
              Eb = Ab.max,
              Yb = Ab.step,
              eb = (0, Bb.clamp)(bb, 0, ab) / (ab || 1),
              vb = Yb * Math.round(eb * (Eb - Tb) / Yb),
              Lb = "horizontal" === Mb ? vb + Tb : Eb - vb;
            return (0, Bb.clamp)(Lb, Tb, Eb)
          })), Db(yb(Ub), "position", (function(bb) {
            var ab = Ub.state.grab,
              Ab = Ub.props,
              Mb = Ab.orientation,
              Tb = Ab.reverse,
              Eb = Ub.slider,
              Yb = zb.orientation[Mb].coordinate,
              eb = Tb ? zb.orientation[Mb].reverseDirection : zb.orientation[Mb].direction,
              vb = "client".concat((0, Bb.capitalize)(Yb)),
              Lb = bb.touches ? bb.touches[0][vb] : bb[vb],
              Pb = Eb.getBoundingClientRect()[eb],
              Xb = Tb ? Pb - Lb - ab : Lb - Pb - ab;
            return Ub.getValueFromPosition(Xb)
          })), Db(yb(Ub), "coordinates", (function(bb) {
            var ab = Ub.state,
              Ab = ab.limit,
              Mb = ab.grab,
              Tb = Ub.props.orientation,
              Eb = Ub.getValueFromPosition(bb),
              Yb = Ub.getPositionFromValue(Eb),
              Bb = "horizontal" === Tb ? Yb + Mb : Yb;
            return {
              fill: "horizontal" === Tb ? Bb : Ab - Bb,
              handle: Bb,
              label: Bb
            }
          })), Db(yb(Ub), "renderLabels", (function(bb) {
            return (0, eb.jsx)("ul", {
              ref: function(bb) {
                Ub.labels = bb
              },
              className: (0, Mb.default)("rangeslider__labels"),
              children: bb
            })
          })), Ub.state = {
            active: !1,
            limit: 0,
            grab: 0
          }, Ub
        }
        return ab = Eb, (Ub = [{
          key: "componentDidMount",
          value: function() {
            this.handleUpdate(), new Yb.default(this.handleUpdate).observe(this.slider)
          }
        }, {
          key: "render",
          value: function() {
            var bb = this,
              ab = this.props,
              Ub = ab.value,
              Ab = ab.orientation,
              Tb = ab.className,
              Eb = ab.tooltip,
              Yb = ab.reverse,
              Bb = ab.labels,
              vb = ab.min,
              Lb = ab.max,
              Xb = ab.handleLabel,
              jb = this.state.active,
              Rb = zb.orientation[Ab].dimension,
              kb = Yb ? zb.orientation[Ab].reverseDirection : zb.orientation[Ab].direction,
              yb = this.getPositionFromValue(Ub),
              Zb = this.coordinates(yb),
              xb = Db({}, Rb, "".concat(Zb.fill, "px")),
              ib = Db({}, kb, "".concat(Zb.handle, "px")),
              fb = Eb && jb,
              mb = [],
              pb = Object.keys(Bb);
            if (pb.length > 0) {
              var Nb, Wb = Pb(pb = pb.sort((function(bb, ab) {
                return Yb ? bb - ab : ab - bb
              })));
              try {
                for (Wb.s(); !(Nb = Wb.n()).done;) {
                  var Hb = Nb.value,
                    Ib = this.getPositionFromValue(Hb),
                    db = this.coordinates(Ib),
                    Fb = Db({}, kb, "".concat(db.label, "px"));
                  mb.push((0, eb.jsx)("li", {
                    className: (0, Mb.default)("rangeslider__label-item"),
                    "data-value": Hb,
                    onMouseDown: this.handleDrag,
                    onTouchStart: this.handleStart,
                    onTouchEnd: this.handleEnd,
                    style: Fb,
                    children: this.props.labels[Hb]
                  }, Hb))
                }
              } catch (hb) {
                Wb.e(hb)
              } finally {
                Wb.f()
              }
            }
            return (0, eb.jsxs)("div", {
              ref: function(ab) {
                bb.slider = ab
              },
              className: (0, Mb.default)("rangeslider", "rangeslider-".concat(Ab), {
                "rangeslider-reverse": Yb
              }, Tb),
              onMouseDown: this.handleDrag,
              onMouseUp: this.handleEnd,
              onTouchStart: this.handleStart,
              onTouchEnd: this.handleEnd,
              "aria-valuemin": vb,
              "aria-valuemax": Lb,
              "aria-valuenow": Ub,
              "aria-orientation": Ab,
              children: [(0, eb.jsx)("div", {
                className: "rangeslider__fill",
                style: xb
              }), (0, eb.jsxs)("div", {
                ref: function(ab) {
                  bb.handle = ab
                },
                className: "rangeslider__handle",
                onMouseDown: this.handleStart,
                onTouchMove: this.handleDrag,
                onTouchEnd: this.handleEnd,
                onKeyDown: this.handleKeyDown,
                style: ib,
                tabIndex: 0,
                children: [fb && (0, eb.jsx)("div", {
                  ref: function(ab) {
                    bb.tooltip = ab
                  },
                  className: "rangeslider__handle-tooltip",
                  children: (0, eb.jsx)("span", {
                    children: this.handleFormat(Ub)
                  })
                }), (0, eb.jsx)("div", {
                  className: "rangeslider__handle-label",
                  children: Xb
                })]
              }), Bb && this.renderLabels(mb)]
            })
          }
        }]) && jb(ab.prototype, Ub), Ab && jb(ab, Ab), Object.defineProperty(ab, "prototype", {
          writable: !1
        }), Eb
      }(Tb.Component);
    Db(xb, "propTypes", {
      min: Eb.default.number,
      max: Eb.default.number,
      step: Eb.default.number,
      value: Eb.default.number,
      orientation: Eb.default.string,
      tooltip: Eb.default.bool,
      reverse: Eb.default.bool,
      labels: Eb.default.object,
      handleLabel: Eb.default.string,
      format: Eb.default.func,
      onChangeStart: Eb.default.func,
      onChange: Eb.default.func,
      onChangeComplete: Eb.default.func
    }), Db(xb, "defaultProps", {
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
    var ib = xb;
    ab.default = ib
  },
  4675: (bb, ab, Ub) => {
    var Ab;
    ab.d = void 0;
    var Mb = ((Ab = Ub(4684)) && Ab.__esModule ? Ab : {
      default: Ab
    }).default;
    ab.d = Mb
  },
  4688: (bb, ab) => {
    Object.defineProperty(ab, "__esModule", {
      value: !0
    }), ab.capitalize = function(bb) {
      return bb.charAt(0).toUpperCase() + bb.substr(1)
    }, ab.clamp = function(bb, ab, Ub) {
      return Math.min(Math.max(bb, ab), Ub)
    }
  },
  4648: (bb, ab, Ub) => {
    var Ab = Ub(4651);

    function Mb() {}

    function Tb() {}
    Tb.resetWarningCache = Mb, bb.exports = function() {
      function bb(bb, ab, Ub, Mb, Tb, Eb) {
        if (Eb !== Ab) {
          var Yb = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw Yb.name = "Invariant Violation", Yb
        }
      }

      function ab() {
        return bb
      }
      bb.isRequired = bb;
      var Ub = {
        array: bb,
        bigint: bb,
        bool: bb,
        func: bb,
        number: bb,
        object: bb,
        string: bb,
        symbol: bb,
        any: bb,
        arrayOf: ab,
        element: bb,
        elementType: bb,
        instanceOf: ab,
        node: bb,
        objectOf: ab,
        oneOf: ab,
        oneOfType: ab,
        shape: ab,
        exact: ab,
        checkPropTypes: Tb,
        resetWarningCache: Mb
      };
      return Ub.PropTypes = Ub, Ub
    }
  },
  4642: (bb, ab, Ub) => {
    bb.exports = Ub(4648)()
  },
  4651: bb => {
    bb.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  4686: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      default: () => mb
    });
    var Ab = function() {
        if ("undefined" !== typeof Map) return Map;

        function bb(bb, ab) {
          var Ub = -1;
          return bb.some((function(bb, Ab) {
            return bb[0] === ab && (Ub = Ab, !0)
          })), Ub
        }
        return function() {
          function ab() {
            this.__entries__ = []
          }
          return Object.defineProperty(ab.prototype, "size", {
            get: function() {
              return this.__entries__.length
            },
            enumerable: !0,
            configurable: !0
          }), ab.prototype.get = function(ab) {
            var Ub = bb(this.__entries__, ab),
              Ab = this.__entries__[Ub];
            return Ab && Ab[1]
          }, ab.prototype.set = function(ab, Ub) {
            var Ab = bb(this.__entries__, ab);
            ~Ab ? this.__entries__[Ab][1] = Ub : this.__entries__.push([ab, Ub])
          }, ab.prototype.delete = function(ab) {
            var Ub = this.__entries__,
              Ab = bb(Ub, ab);
            ~Ab && Ub.splice(Ab, 1)
          }, ab.prototype.has = function(ab) {
            return !!~bb(this.__entries__, ab)
          }, ab.prototype.clear = function() {
            this.__entries__.splice(0)
          }, ab.prototype.forEach = function(bb, ab) {
            void 0 === ab && (ab = null);
            for (var Ub = 0, Ab = this.__entries__; Ub < Ab.length; Ub++) {
              var Mb = Ab[Ub];
              bb.call(ab, Mb[1], Mb[0])
            }
          }, ab
        }()
      }(),
      Mb = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document,
      Tb = "undefined" !== typeof Ub.g && Ub.g.Math === Math ? Ub.g : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")(),
      Eb = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(Tb) : function(bb) {
        return setTimeout((function() {
          return bb(Date.now())
        }), 1e3 / 60)
      };
    var Yb = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
      Bb = "undefined" !== typeof MutationObserver,
      eb = function() {
        function bb() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(bb, ab) {
            var Ub = !1,
              Ab = !1,
              Mb = 0;

            function Tb() {
              Ub && (Ub = !1, bb()), Ab && Bb()
            }

            function Yb() {
              Eb(Tb)
            }

            function Bb() {
              var bb = Date.now();
              if (Ub) {
                if (bb - Mb < 2) return;
                Ab = !0
              } else Ub = !0, Ab = !1, setTimeout(Yb, ab);
              Mb = bb
            }
            return Bb
          }(this.refresh.bind(this), 20)
        }
        return bb.prototype.addObserver = function(bb) {
          ~this.observers_.indexOf(bb) || this.observers_.push(bb), this.connected_ || this.connect_()
        }, bb.prototype.removeObserver = function(bb) {
          var ab = this.observers_,
            Ub = ab.indexOf(bb);
          ~Ub && ab.splice(Ub, 1), !ab.length && this.connected_ && this.disconnect_()
        }, bb.prototype.refresh = function() {
          this.updateObservers_() && this.refresh()
        }, bb.prototype.updateObservers_ = function() {
          var bb = this.observers_.filter((function(bb) {
            return bb.gatherActive(), bb.hasActive()
          }));
          return bb.forEach((function(bb) {
            return bb.broadcastActive()
          })), bb.length > 0
        }, bb.prototype.connect_ = function() {
          Mb && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Bb ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
          })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, bb.prototype.disconnect_ = function() {
          Mb && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, bb.prototype.onTransitionEnd_ = function(bb) {
          var ab = bb.propertyName,
            Ub = void 0 === ab ? "" : ab;
          Yb.some((function(bb) {
            return !!~Ub.indexOf(bb)
          })) && this.refresh()
        }, bb.getInstance = function() {
          return this.instance_ || (this.instance_ = new bb), this.instance_
        }, bb.instance_ = null, bb
      }(),
      vb = function(bb, ab) {
        for (var Ub = 0, Ab = Object.keys(ab); Ub < Ab.length; Ub++) {
          var Mb = Ab[Ub];
          Object.defineProperty(bb, Mb, {
            value: ab[Mb],
            enumerable: !1,
            writable: !1,
            configurable: !0
          })
        }
        return bb
      },
      Lb = function(bb) {
        return bb && bb.ownerDocument && bb.ownerDocument.defaultView || Tb
      },
      Pb = Zb(0, 0, 0, 0);

    function Xb(bb) {
      return parseFloat(bb) || 0
    }

    function jb(bb) {
      for (var ab = [], Ub = 1; Ub < arguments.length; Ub++) ab[Ub - 1] = arguments[Ub];
      return ab.reduce((function(ab, Ub) {
        return ab + Xb(bb["border-" + Ub + "-width"])
      }), 0)
    }

    function Rb(bb) {
      var ab = bb.clientWidth,
        Ub = bb.clientHeight;
      if (!ab && !Ub) return Pb;
      var Ab = Lb(bb).getComputedStyle(bb),
        Mb = function(bb) {
          for (var ab = {}, Ub = 0, Ab = ["top", "right", "bottom", "left"]; Ub < Ab.length; Ub++) {
            var Mb = Ab[Ub],
              Tb = bb["padding-" + Mb];
            ab[Mb] = Xb(Tb)
          }
          return ab
        }(Ab),
        Tb = Mb.left + Mb.right,
        Eb = Mb.top + Mb.bottom,
        Yb = Xb(Ab.width),
        Bb = Xb(Ab.height);
      if ("border-box" === Ab.boxSizing && (Math.round(Yb + Tb) !== ab && (Yb -= jb(Ab, "left", "right") + Tb), Math.round(Bb + Eb) !== Ub && (Bb -= jb(Ab, "top", "bottom") + Eb)), ! function(bb) {
          return bb === Lb(bb).document.documentElement
        }(bb)) {
        var eb = Math.round(Yb + Tb) - ab,
          vb = Math.round(Bb + Eb) - Ub;
        1 !== Math.abs(eb) && (Yb -= eb), 1 !== Math.abs(vb) && (Bb -= vb)
      }
      return Zb(Mb.left, Mb.top, Yb, Bb)
    }
    var kb = "undefined" !== typeof SVGGraphicsElement ? function(bb) {
      return bb instanceof Lb(bb).SVGGraphicsElement
    } : function(bb) {
      return bb instanceof Lb(bb).SVGElement && "function" === typeof bb.getBBox
    };

    function yb(bb) {
      return Mb ? kb(bb) ? function(bb) {
        var ab = bb.getBBox();
        return Zb(0, 0, ab.width, ab.height)
      }(bb) : Rb(bb) : Pb
    }

    function Zb(bb, ab, Ub, Ab) {
      return {
        x: bb,
        y: ab,
        width: Ub,
        height: Ab
      }
    }
    var Db = function() {
        function bb(bb) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Zb(0, 0, 0, 0), this.target = bb
        }
        return bb.prototype.isActive = function() {
          var bb = yb(this.target);
          return this.contentRect_ = bb, bb.width !== this.broadcastWidth || bb.height !== this.broadcastHeight
        }, bb.prototype.broadcastRect = function() {
          var bb = this.contentRect_;
          return this.broadcastWidth = bb.width, this.broadcastHeight = bb.height, bb
        }, bb
      }(),
      zb = function(bb, ab) {
        var Ub = function(bb) {
          var ab = bb.x,
            Ub = bb.y,
            Ab = bb.width,
            Mb = bb.height,
            Tb = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
            Eb = Object.create(Tb.prototype);
          return vb(Eb, {
            x: ab,
            y: Ub,
            width: Ab,
            height: Mb,
            top: Ub,
            right: ab + Ab,
            bottom: Mb + Ub,
            left: ab
          }), Eb
        }(ab);
        vb(this, {
          target: bb,
          contentRect: Ub
        })
      },
      xb = function() {
        function bb(bb, ab, Ub) {
          if (this.activeObservations_ = [], this.observations_ = new Ab, "function" !== typeof bb) throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = bb, this.controller_ = ab, this.callbackCtx_ = Ub
        }
        return bb.prototype.observe = function(bb) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(bb instanceof Lb(bb).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var ab = this.observations_;
            ab.has(bb) || (ab.set(bb, new Db(bb)), this.controller_.addObserver(this), this.controller_.refresh())
          }
        }, bb.prototype.unobserve = function(bb) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(bb instanceof Lb(bb).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var ab = this.observations_;
            ab.has(bb) && (ab.delete(bb), ab.size || this.controller_.removeObserver(this))
          }
        }, bb.prototype.disconnect = function() {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, bb.prototype.gatherActive = function() {
          var bb = this;
          this.clearActive(), this.observations_.forEach((function(ab) {
            ab.isActive() && bb.activeObservations_.push(ab)
          }))
        }, bb.prototype.broadcastActive = function() {
          if (this.hasActive()) {
            var bb = this.callbackCtx_,
              ab = this.activeObservations_.map((function(bb) {
                return new zb(bb.target, bb.broadcastRect())
              }));
            this.callback_.call(bb, ab, bb), this.clearActive()
          }
        }, bb.prototype.clearActive = function() {
          this.activeObservations_.splice(0)
        }, bb.prototype.hasActive = function() {
          return this.activeObservations_.length > 0
        }, bb
      }(),
      ib = "undefined" !== typeof WeakMap ? new WeakMap : new Ab,
      fb = function bb(ab) {
        if (!(this instanceof bb)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var Ub = eb.getInstance(),
          Ab = new xb(ab, Ub, this);
        ib.set(this, Ab)
      };
    ["observe", "unobserve", "disconnect"].forEach((function(bb) {
      fb.prototype[bb] = function() {
        var ab;
        return (ab = ib.get(this))[bb].apply(ab, arguments)
      }
    }));
    const mb = "undefined" !== typeof Tb.ResizeObserver ? Tb.ResizeObserver : fb
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);