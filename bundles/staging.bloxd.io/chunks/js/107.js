export const id = 107;
export const ids = [107];
export const modules = {
  4772: (bb, ub, hb) => {
    function Bb(bb) {
      return Bb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Bb(bb)
    }
    Object.defineProperty(ub, "__esModule", {
      value: !0
    }), ub.default = void 0;
    var Ob = Hb(hb(958)),
      Gb = function(bb, ub) {
        if (!ub && bb && bb.__esModule) return bb;
        if (null === bb || "object" !== Bb(bb) && "function" !== typeof bb) return {
          default: bb
        };
        var hb = ab(ub);
        if (hb && hb.has(bb)) return hb.get(bb);
        var Ob = {},
          Gb = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var Ub in bb)
          if ("default" !== Ub && Object.prototype.hasOwnProperty.call(bb, Ub)) {
            var Lb = Gb ? Object.getOwnPropertyDescriptor(bb, Ub) : null;
            Lb && (Lb.get || Lb.set) ? Object.defineProperty(Ob, Ub, Lb) : Ob[Ub] = bb[Ub]
          } Ob.default = bb, hb && hb.set(bb, Ob);
        return Ob
      }(hb(49)),
      Ub = Hb(hb(4729)),
      Lb = Hb(hb(4778)),
      Yb = hb(4782),
      Sb = hb(1007);

    function ab(bb) {
      if ("function" !== typeof WeakMap) return null;
      var ub = new WeakMap,
        hb = new WeakMap;
      return (ab = function(bb) {
        return bb ? hb : ub
      })(bb)
    }

    function Hb(bb) {
      return bb && bb.__esModule ? bb : {
        default: bb
      }
    }

    function wb(bb, ub) {
      var hb = "undefined" !== typeof Symbol && bb[Symbol.iterator] || bb["@@iterator"];
      if (!hb) {
        if (Array.isArray(bb) || (hb = function(bb, ub) {
            if (!bb) return;
            if ("string" === typeof bb) return Zb(bb, ub);
            var hb = Object.prototype.toString.call(bb).slice(8, -1);
            "Object" === hb && bb.constructor && (hb = bb.constructor.name);
            if ("Map" === hb || "Set" === hb) return Array.from(bb);
            if ("Arguments" === hb || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(hb)) return Zb(bb, ub)
          }(bb)) || ub && bb && "number" === typeof bb.length) {
          hb && (bb = hb);
          var Bb = 0,
            Ob = function() {};
          return {
            s: Ob,
            n: function() {
              return Bb >= bb.length ? {
                done: !0
              } : {
                done: !1,
                value: bb[Bb++]
              }
            },
            e: function(bb) {
              throw bb
            },
            f: Ob
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var Gb, Ub = !0,
        Lb = !1;
      return {
        s: function() {
          hb = hb.call(bb)
        },
        n: function() {
          var bb = hb.next();
          return Ub = bb.done, bb
        },
        e: function(bb) {
          Lb = !0, Gb = bb
        },
        f: function() {
          try {
            Ub || null == hb.return || hb.return()
          } finally {
            if (Lb) throw Gb
          }
        }
      }
    }

    function Zb(bb, ub) {
      (null == ub || ub > bb.length) && (ub = bb.length);
      for (var hb = 0, Bb = new Array(ub); hb < ub; hb++) Bb[hb] = bb[hb];
      return Bb
    }

    function Xb(bb, ub) {
      for (var hb = 0; hb < ub.length; hb++) {
        var Bb = ub[hb];
        Bb.enumerable = Bb.enumerable || !1, Bb.configurable = !0, "value" in Bb && (Bb.writable = !0), Object.defineProperty(bb, Bb.key, Bb)
      }
    }

    function pb(bb, ub) {
      return pb = Object.setPrototypeOf || function(bb, ub) {
        return bb.__proto__ = ub, bb
      }, pb(bb, ub)
    }

    function ob(bb) {
      var ub = function() {
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
        var hb, Ob = lb(bb);
        if (ub) {
          var Gb = lb(this).constructor;
          hb = Reflect.construct(Ob, arguments, Gb)
        } else hb = Ob.apply(this, arguments);
        return function(bb, ub) {
          if (ub && ("object" === Bb(ub) || "function" === typeof ub)) return ub;
          if (void 0 !== ub) throw new TypeError("Derived constructors may only return object or undefined");
          return Ab(bb)
        }(this, hb)
      }
    }

    function Ab(bb) {
      if (void 0 === bb) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return bb
    }

    function lb(bb) {
      return lb = Object.setPrototypeOf ? Object.getPrototypeOf : function(bb) {
        return bb.__proto__ || Object.getPrototypeOf(bb)
      }, lb(bb)
    }

    function Kb(bb, ub, hb) {
      return ub in bb ? Object.defineProperty(bb, ub, {
        value: hb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ub] = hb, bb
    }
    var Wb = {
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
      Cb = function(bb) {
        ! function(bb, ub) {
          if ("function" !== typeof ub && null !== ub) throw new TypeError("Super expression must either be null or a function");
          Object.defineProperty(bb, "prototype", {
            value: Object.create(ub && ub.prototype, {
              constructor: {
                value: bb,
                writable: !0,
                configurable: !0
              }
            }),
            writable: !1
          }), ub && pb(bb, ub)
        }(Ub, bb);
        var ub, hb, Bb, Gb = ob(Ub);

        function Ub(bb, ub) {
          var hb;
          return function(bb, ub) {
            if (!(bb instanceof ub)) throw new TypeError("Cannot call a class as a function")
          }(this, Ub), Kb(Ab(hb = Gb.call(this, bb, ub)), "handleFormat", (function(bb) {
            var ub = hb.props.format;
            return ub ? ub(bb) : bb
          })), Kb(Ab(hb), "handleUpdate", (function() {
            if (hb.slider) {
              var bb = hb.props.orientation,
                ub = (0, Yb.capitalize)(Wb.orientation[bb].dimension),
                Bb = hb.slider["offset".concat(ub)],
                Ob = hb.handle["offset".concat(ub)];
              hb.setState({
                limit: Bb - Ob,
                grab: Ob / 2
              })
            }
          })), Kb(Ab(hb), "handleStart", (function(bb) {
            var ub = hb.props.onChangeStart;
            document.addEventListener("mousemove", hb.handleDrag), document.addEventListener("mouseup", hb.handleEnd), hb.setState({
              active: !0
            }, (function() {
              ub && ub(bb)
            }))
          })), Kb(Ab(hb), "handleDrag", (function(bb) {
            bb.stopPropagation();
            var ub = hb.props.onChange,
              Bb = bb.target,
              Ob = Bb.className,
              Gb = Bb.classList,
              Ub = Bb.dataset;
            if (ub && "rangeslider__labels" !== Ob) {
              var Lb = hb.position(bb);
              Gb && Gb.contains("rangeslider__label-item") && Ub.value && (Lb = parseFloat(Ub.value)), ub && ub(Lb, bb)
            }
          })), Kb(Ab(hb), "handleEnd", (function(bb) {
            var ub = hb.props.onChangeComplete;
            hb.setState({
              active: !1
            }, (function() {
              ub && ub(bb)
            })), document.removeEventListener("mousemove", hb.handleDrag), document.removeEventListener("mouseup", hb.handleEnd)
          })), Kb(Ab(hb), "handleKeyDown", (function(bb) {
            bb.preventDefault();
            var ub, Bb = bb.keyCode,
              Ob = hb.props,
              Gb = Ob.value,
              Ub = Ob.min,
              Lb = Ob.max,
              Yb = Ob.step,
              Sb = Ob.onChange;
            switch (Bb) {
              case 38:
              case 39:
                ub = Gb + Yb > Lb ? Lb : Gb + Yb, Sb && Sb(ub, bb);
                break;
              case 37:
              case 40:
                ub = Gb - Yb < Ub ? Ub : Gb - Yb, Sb && Sb(ub, bb)
            }
          })), Kb(Ab(hb), "getPositionFromValue", (function(bb) {
            var ub = hb.state.limit,
              Bb = hb.props,
              Ob = Bb.min,
              Gb = (bb - Ob) / (Bb.max - Ob);
            return Math.round(Gb * ub)
          })), Kb(Ab(hb), "getValueFromPosition", (function(bb) {
            var ub = hb.state.limit,
              Bb = hb.props,
              Ob = Bb.orientation,
              Gb = Bb.min,
              Ub = Bb.max,
              Lb = Bb.step,
              Sb = (0, Yb.clamp)(bb, 0, ub) / (ub || 1),
              ab = Lb * Math.round(Sb * (Ub - Gb) / Lb),
              Hb = "horizontal" === Ob ? ab + Gb : Ub - ab;
            return (0, Yb.clamp)(Hb, Gb, Ub)
          })), Kb(Ab(hb), "position", (function(bb) {
            var ub = hb.state.grab,
              Bb = hb.props,
              Ob = Bb.orientation,
              Gb = Bb.reverse,
              Ub = hb.slider,
              Lb = Wb.orientation[Ob].coordinate,
              Sb = Gb ? Wb.orientation[Ob].reverseDirection : Wb.orientation[Ob].direction,
              ab = "client".concat((0, Yb.capitalize)(Lb)),
              Hb = bb.touches ? bb.touches[0][ab] : bb[ab],
              wb = Ub.getBoundingClientRect()[Sb],
              Zb = Gb ? wb - Hb - ub : Hb - wb - ub;
            return hb.getValueFromPosition(Zb)
          })), Kb(Ab(hb), "coordinates", (function(bb) {
            var ub = hb.state,
              Bb = ub.limit,
              Ob = ub.grab,
              Gb = hb.props.orientation,
              Ub = hb.getValueFromPosition(bb),
              Lb = hb.getPositionFromValue(Ub),
              Yb = "horizontal" === Gb ? Lb + Ob : Lb;
            return {
              fill: "horizontal" === Gb ? Yb : Bb - Yb,
              handle: Yb,
              label: Yb
            }
          })), Kb(Ab(hb), "renderLabels", (function(bb) {
            return (0, Sb.jsx)("ul", {
              ref: function(bb) {
                hb.labels = bb
              },
              className: (0, Ob.default)("rangeslider__labels"),
              children: bb
            })
          })), hb.state = {
            active: !1,
            limit: 0,
            grab: 0
          }, hb
        }
        return ub = Ub, (hb = [{
          key: "componentDidMount",
          value: function() {
            this.handleUpdate(), new Lb.default(this.handleUpdate).observe(this.slider)
          }
        }, {
          key: "render",
          value: function() {
            var bb = this,
              ub = this.props,
              hb = ub.value,
              Bb = ub.orientation,
              Gb = ub.className,
              Ub = ub.tooltip,
              Lb = ub.reverse,
              Yb = ub.labels,
              ab = ub.min,
              Hb = ub.max,
              Zb = ub.handleLabel,
              Xb = this.state.active,
              pb = Wb.orientation[Bb].dimension,
              ob = Lb ? Wb.orientation[Bb].reverseDirection : Wb.orientation[Bb].direction,
              Ab = this.getPositionFromValue(hb),
              lb = this.coordinates(Ab),
              Cb = Kb({}, pb, "".concat(lb.fill, "px")),
              db = Kb({}, ob, "".concat(lb.handle, "px")),
              rb = Ub && Xb,
              jb = [],
              nb = Object.keys(Yb);
            if (nb.length > 0) {
              var Db, xb = wb(nb = nb.sort((function(bb, ub) {
                return Lb ? bb - ub : ub - bb
              })));
              try {
                for (xb.s(); !(Db = xb.n()).done;) {
                  var zb = Db.value,
                    gb = this.getPositionFromValue(zb),
                    ib = this.coordinates(gb),
                    vb = Kb({}, ob, "".concat(ib.label, "px"));
                  jb.push((0, Sb.jsx)("li", {
                    className: (0, Ob.default)("rangeslider__label-item"),
                    "data-value": zb,
                    onMouseDown: this.handleDrag,
                    onTouchStart: this.handleStart,
                    onTouchEnd: this.handleEnd,
                    style: vb,
                    children: this.props.labels[zb]
                  }, zb))
                }
              } catch (tb) {
                xb.e(tb)
              } finally {
                xb.f()
              }
            }
            return (0, Sb.jsxs)("div", {
              ref: function(ub) {
                bb.slider = ub
              },
              className: (0, Ob.default)("rangeslider", "rangeslider-".concat(Bb), {
                "rangeslider-reverse": Lb
              }, Gb),
              onMouseDown: this.handleDrag,
              onMouseUp: this.handleEnd,
              onTouchStart: this.handleStart,
              onTouchEnd: this.handleEnd,
              "aria-valuemin": ab,
              "aria-valuemax": Hb,
              "aria-valuenow": hb,
              "aria-orientation": Bb,
              children: [(0, Sb.jsx)("div", {
                className: "rangeslider__fill",
                style: Cb
              }), (0, Sb.jsxs)("div", {
                ref: function(ub) {
                  bb.handle = ub
                },
                className: "rangeslider__handle",
                onMouseDown: this.handleStart,
                onTouchMove: this.handleDrag,
                onTouchEnd: this.handleEnd,
                onKeyDown: this.handleKeyDown,
                style: db,
                tabIndex: 0,
                children: [rb && (0, Sb.jsx)("div", {
                  ref: function(ub) {
                    bb.tooltip = ub
                  },
                  className: "rangeslider__handle-tooltip",
                  children: (0, Sb.jsx)("span", {
                    children: this.handleFormat(hb)
                  })
                }), (0, Sb.jsx)("div", {
                  className: "rangeslider__handle-label",
                  children: Zb
                })]
              }), Yb && this.renderLabels(jb)]
            })
          }
        }]) && Xb(ub.prototype, hb), Bb && Xb(ub, Bb), Object.defineProperty(ub, "prototype", {
          writable: !1
        }), Ub
      }(Gb.Component);
    Kb(Cb, "propTypes", {
      min: Ub.default.number,
      max: Ub.default.number,
      step: Ub.default.number,
      value: Ub.default.number,
      orientation: Ub.default.string,
      tooltip: Ub.default.bool,
      reverse: Ub.default.bool,
      labels: Ub.default.object,
      handleLabel: Ub.default.string,
      format: Ub.default.func,
      onChangeStart: Ub.default.func,
      onChange: Ub.default.func,
      onChangeComplete: Ub.default.func
    }), Kb(Cb, "defaultProps", {
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
    var db = Cb;
    ub.default = db
  },
  4770: (bb, ub, hb) => {
    var Bb;
    ub.b = void 0;
    var Ob = ((Bb = hb(4772)) && Bb.__esModule ? Bb : {
      default: Bb
    }).default;
    ub.b = Ob
  },
  4782: (bb, ub) => {
    Object.defineProperty(ub, "__esModule", {
      value: !0
    }), ub.capitalize = function(bb) {
      return bb.charAt(0).toUpperCase() + bb.substr(1)
    }, ub.clamp = function(bb, ub, hb) {
      return Math.min(Math.max(bb, ub), hb)
    }
  },
  4733: (bb, ub, hb) => {
    var Bb = hb(4740);

    function Ob() {}

    function Gb() {}
    Gb.resetWarningCache = Ob, bb.exports = function() {
      function bb(bb, ub, hb, Ob, Gb, Ub) {
        if (Ub !== Bb) {
          var Lb = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw Lb.name = "Invariant Violation", Lb
        }
      }

      function ub() {
        return bb
      }
      bb.isRequired = bb;
      var hb = {
        array: bb,
        bigint: bb,
        bool: bb,
        func: bb,
        number: bb,
        object: bb,
        string: bb,
        symbol: bb,
        any: bb,
        arrayOf: ub,
        element: bb,
        elementType: bb,
        instanceOf: ub,
        node: bb,
        objectOf: ub,
        oneOf: ub,
        oneOfType: ub,
        shape: ub,
        exact: ub,
        checkPropTypes: Gb,
        resetWarningCache: Ob
      };
      return hb.PropTypes = hb, hb
    }
  },
  4729: (bb, ub, hb) => {
    bb.exports = hb(4733)()
  },
  4740: bb => {
    bb.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  4778: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      default: () => jb
    });
    var Bb = function() {
        if ("undefined" !== typeof Map) return Map;

        function bb(bb, ub) {
          var hb = -1;
          return bb.some((function(bb, Bb) {
            return bb[0] === ub && (hb = Bb, !0)
          })), hb
        }
        return function() {
          function ub() {
            this.__entries__ = []
          }
          return Object.defineProperty(ub.prototype, "size", {
            get: function() {
              return this.__entries__.length
            },
            enumerable: !0,
            configurable: !0
          }), ub.prototype.get = function(ub) {
            var hb = bb(this.__entries__, ub),
              Bb = this.__entries__[hb];
            return Bb && Bb[1]
          }, ub.prototype.set = function(ub, hb) {
            var Bb = bb(this.__entries__, ub);
            ~Bb ? this.__entries__[Bb][1] = hb : this.__entries__.push([ub, hb])
          }, ub.prototype.delete = function(ub) {
            var hb = this.__entries__,
              Bb = bb(hb, ub);
            ~Bb && hb.splice(Bb, 1)
          }, ub.prototype.has = function(ub) {
            return !!~bb(this.__entries__, ub)
          }, ub.prototype.clear = function() {
            this.__entries__.splice(0)
          }, ub.prototype.forEach = function(bb, ub) {
            void 0 === ub && (ub = null);
            for (var hb = 0, Bb = this.__entries__; hb < Bb.length; hb++) {
              var Ob = Bb[hb];
              bb.call(ub, Ob[1], Ob[0])
            }
          }, ub
        }()
      }(),
      Ob = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document,
      Gb = "undefined" !== typeof hb.g && hb.g.Math === Math ? hb.g : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")(),
      Ub = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(Gb) : function(bb) {
        return setTimeout((function() {
          return bb(Date.now())
        }), 1e3 / 60)
      };
    var Lb = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
      Yb = "undefined" !== typeof MutationObserver,
      Sb = function() {
        function bb() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(bb, ub) {
            var hb = !1,
              Bb = !1,
              Ob = 0;

            function Gb() {
              hb && (hb = !1, bb()), Bb && Yb()
            }

            function Lb() {
              Ub(Gb)
            }

            function Yb() {
              var bb = Date.now();
              if (hb) {
                if (bb - Ob < 2) return;
                Bb = !0
              } else hb = !0, Bb = !1, setTimeout(Lb, ub);
              Ob = bb
            }
            return Yb
          }(this.refresh.bind(this), 20)
        }
        return bb.prototype.addObserver = function(bb) {
          ~this.observers_.indexOf(bb) || this.observers_.push(bb), this.connected_ || this.connect_()
        }, bb.prototype.removeObserver = function(bb) {
          var ub = this.observers_,
            hb = ub.indexOf(bb);
          ~hb && ub.splice(hb, 1), !ub.length && this.connected_ && this.disconnect_()
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
          Ob && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Yb ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
          })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, bb.prototype.disconnect_ = function() {
          Ob && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, bb.prototype.onTransitionEnd_ = function(bb) {
          var ub = bb.propertyName,
            hb = void 0 === ub ? "" : ub;
          Lb.some((function(bb) {
            return !!~hb.indexOf(bb)
          })) && this.refresh()
        }, bb.getInstance = function() {
          return this.instance_ || (this.instance_ = new bb), this.instance_
        }, bb.instance_ = null, bb
      }(),
      ab = function(bb, ub) {
        for (var hb = 0, Bb = Object.keys(ub); hb < Bb.length; hb++) {
          var Ob = Bb[hb];
          Object.defineProperty(bb, Ob, {
            value: ub[Ob],
            enumerable: !1,
            writable: !1,
            configurable: !0
          })
        }
        return bb
      },
      Hb = function(bb) {
        return bb && bb.ownerDocument && bb.ownerDocument.defaultView || Gb
      },
      wb = lb(0, 0, 0, 0);

    function Zb(bb) {
      return parseFloat(bb) || 0
    }

    function Xb(bb) {
      for (var ub = [], hb = 1; hb < arguments.length; hb++) ub[hb - 1] = arguments[hb];
      return ub.reduce((function(ub, hb) {
        return ub + Zb(bb["border-" + hb + "-width"])
      }), 0)
    }

    function pb(bb) {
      var ub = bb.clientWidth,
        hb = bb.clientHeight;
      if (!ub && !hb) return wb;
      var Bb = Hb(bb).getComputedStyle(bb),
        Ob = function(bb) {
          for (var ub = {}, hb = 0, Bb = ["top", "right", "bottom", "left"]; hb < Bb.length; hb++) {
            var Ob = Bb[hb],
              Gb = bb["padding-" + Ob];
            ub[Ob] = Zb(Gb)
          }
          return ub
        }(Bb),
        Gb = Ob.left + Ob.right,
        Ub = Ob.top + Ob.bottom,
        Lb = Zb(Bb.width),
        Yb = Zb(Bb.height);
      if ("border-box" === Bb.boxSizing && (Math.round(Lb + Gb) !== ub && (Lb -= Xb(Bb, "left", "right") + Gb), Math.round(Yb + Ub) !== hb && (Yb -= Xb(Bb, "top", "bottom") + Ub)), ! function(bb) {
          return bb === Hb(bb).document.documentElement
        }(bb)) {
        var Sb = Math.round(Lb + Gb) - ub,
          ab = Math.round(Yb + Ub) - hb;
        1 !== Math.abs(Sb) && (Lb -= Sb), 1 !== Math.abs(ab) && (Yb -= ab)
      }
      return lb(Ob.left, Ob.top, Lb, Yb)
    }
    var ob = "undefined" !== typeof SVGGraphicsElement ? function(bb) {
      return bb instanceof Hb(bb).SVGGraphicsElement
    } : function(bb) {
      return bb instanceof Hb(bb).SVGElement && "function" === typeof bb.getBBox
    };

    function Ab(bb) {
      return Ob ? ob(bb) ? function(bb) {
        var ub = bb.getBBox();
        return lb(0, 0, ub.width, ub.height)
      }(bb) : pb(bb) : wb
    }

    function lb(bb, ub, hb, Bb) {
      return {
        x: bb,
        y: ub,
        width: hb,
        height: Bb
      }
    }
    var Kb = function() {
        function bb(bb) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = lb(0, 0, 0, 0), this.target = bb
        }
        return bb.prototype.isActive = function() {
          var bb = Ab(this.target);
          return this.contentRect_ = bb, bb.width !== this.broadcastWidth || bb.height !== this.broadcastHeight
        }, bb.prototype.broadcastRect = function() {
          var bb = this.contentRect_;
          return this.broadcastWidth = bb.width, this.broadcastHeight = bb.height, bb
        }, bb
      }(),
      Wb = function(bb, ub) {
        var hb = function(bb) {
          var ub = bb.x,
            hb = bb.y,
            Bb = bb.width,
            Ob = bb.height,
            Gb = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
            Ub = Object.create(Gb.prototype);
          return ab(Ub, {
            x: ub,
            y: hb,
            width: Bb,
            height: Ob,
            top: hb,
            right: ub + Bb,
            bottom: Ob + hb,
            left: ub
          }), Ub
        }(ub);
        ab(this, {
          target: bb,
          contentRect: hb
        })
      },
      Cb = function() {
        function bb(bb, ub, hb) {
          if (this.activeObservations_ = [], this.observations_ = new Bb, "function" !== typeof bb) throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = bb, this.controller_ = ub, this.callbackCtx_ = hb
        }
        return bb.prototype.observe = function(bb) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(bb instanceof Hb(bb).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var ub = this.observations_;
            ub.has(bb) || (ub.set(bb, new Kb(bb)), this.controller_.addObserver(this), this.controller_.refresh())
          }
        }, bb.prototype.unobserve = function(bb) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(bb instanceof Hb(bb).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var ub = this.observations_;
            ub.has(bb) && (ub.delete(bb), ub.size || this.controller_.removeObserver(this))
          }
        }, bb.prototype.disconnect = function() {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, bb.prototype.gatherActive = function() {
          var bb = this;
          this.clearActive(), this.observations_.forEach((function(ub) {
            ub.isActive() && bb.activeObservations_.push(ub)
          }))
        }, bb.prototype.broadcastActive = function() {
          if (this.hasActive()) {
            var bb = this.callbackCtx_,
              ub = this.activeObservations_.map((function(bb) {
                return new Wb(bb.target, bb.broadcastRect())
              }));
            this.callback_.call(bb, ub, bb), this.clearActive()
          }
        }, bb.prototype.clearActive = function() {
          this.activeObservations_.splice(0)
        }, bb.prototype.hasActive = function() {
          return this.activeObservations_.length > 0
        }, bb
      }(),
      db = "undefined" !== typeof WeakMap ? new WeakMap : new Bb,
      rb = function bb(ub) {
        if (!(this instanceof bb)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var hb = Sb.getInstance(),
          Bb = new Cb(ub, hb, this);
        db.set(this, Bb)
      };
    ["observe", "unobserve", "disconnect"].forEach((function(bb) {
      rb.prototype[bb] = function() {
        var ub;
        return (ub = db.get(this))[bb].apply(ub, arguments)
      }
    }));
    const jb = "undefined" !== typeof Gb.ResizeObserver ? Gb.ResizeObserver : rb
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);