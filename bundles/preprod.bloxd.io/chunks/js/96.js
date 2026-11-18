export const id = 96;
export const ids = [96];
export const modules = {
  4213: (yb, bb, Wy) => {
    function Uy(yb) {
      return Uy = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(yb) {
        return typeof yb
      } : function(yb) {
        return yb && "function" == typeof Symbol && yb.constructor === Symbol && yb !== Symbol.prototype ? "symbol" : typeof yb
      }, Uy(yb)
    }
    Object.defineProperty(bb, "__esModule", {
      value: !0
    }), bb.default = void 0;
    var hy = Ky(Wy(898)),
      fy = function(yb, bb) {
        if (!bb && yb && yb.__esModule) return yb;
        if (null === yb || "object" !== Uy(yb) && "function" !== typeof yb) return {
          default: yb
        };
        var Wy = By(bb);
        if (Wy && Wy.has(yb)) return Wy.get(yb);
        var hy = {},
          fy = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var Zy in yb)
          if ("default" !== Zy && Object.prototype.hasOwnProperty.call(yb, Zy)) {
            var cb = fy ? Object.getOwnPropertyDescriptor(yb, Zy) : null;
            cb && (cb.get || cb.set) ? Object.defineProperty(hy, Zy, cb) : hy[Zy] = yb[Zy]
          } hy.default = yb, Wy && Wy.set(yb, hy);
        return hy
      }(Wy(55)),
      Zy = Ky(Wy(4172)),
      cb = Ky(Wy(4215)),
      Py = Wy(4218),
      oy = Wy(952);

    function By(yb) {
      if ("function" !== typeof WeakMap) return null;
      var bb = new WeakMap,
        Wy = new WeakMap;
      return (By = function(yb) {
        return yb ? Wy : bb
      })(yb)
    }

    function Ky(yb) {
      return yb && yb.__esModule ? yb : {
        default: yb
      }
    }

    function ey(yb, bb) {
      var Wy = "undefined" !== typeof Symbol && yb[Symbol.iterator] || yb["@@iterator"];
      if (!Wy) {
        if (Array.isArray(yb) || (Wy = function(yb, bb) {
            if (!yb) return;
            if ("string" === typeof yb) return qb(yb, bb);
            var Wy = Object.prototype.toString.call(yb).slice(8, -1);
            "Object" === Wy && yb.constructor && (Wy = yb.constructor.name);
            if ("Map" === Wy || "Set" === Wy) return Array.from(yb);
            if ("Arguments" === Wy || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Wy)) return qb(yb, bb)
          }(yb)) || bb && yb && "number" === typeof yb.length) {
          Wy && (yb = Wy);
          var Uy = 0,
            hy = function() {};
          return {
            s: hy,
            n: function() {
              return Uy >= yb.length ? {
                done: !0
              } : {
                done: !1,
                value: yb[Uy++]
              }
            },
            e: function(yb) {
              throw yb
            },
            f: hy
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var fy, Zy = !0,
        cb = !1;
      return {
        s: function() {
          Wy = Wy.call(yb)
        },
        n: function() {
          var yb = Wy.next();
          return Zy = yb.done, yb
        },
        e: function(yb) {
          cb = !0, fy = yb
        },
        f: function() {
          try {
            Zy || null == Wy.return || Wy.return()
          } finally {
            if (cb) throw fy
          }
        }
      }
    }

    function qb(yb, bb) {
      (null == bb || bb > yb.length) && (bb = yb.length);
      for (var Wy = 0, Uy = new Array(bb); Wy < bb; Wy++) Uy[Wy] = yb[Wy];
      return Uy
    }

    function sy(yb, bb) {
      for (var Wy = 0; Wy < bb.length; Wy++) {
        var Uy = bb[Wy];
        Uy.enumerable = Uy.enumerable || !1, Uy.configurable = !0, "value" in Uy && (Uy.writable = !0), Object.defineProperty(yb, Uy.key, Uy)
      }
    }

    function Sy(yb, bb) {
      return Sy = Object.setPrototypeOf || function(yb, bb) {
        return yb.__proto__ = bb, yb
      }, Sy(yb, bb)
    }

    function Ey(yb) {
      var bb = function() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (yb) {
          return !1
        }
      }();
      return function() {
        var Wy, hy = mb(yb);
        if (bb) {
          var fy = mb(this).constructor;
          Wy = Reflect.construct(hy, arguments, fy)
        } else Wy = hy.apply(this, arguments);
        return function(yb, bb) {
          if (bb && ("object" === Uy(bb) || "function" === typeof bb)) return bb;
          if (void 0 !== bb) throw new TypeError("Derived constructors may only return object or undefined");
          return ly(yb)
        }(this, Wy)
      }
    }

    function ly(yb) {
      if (void 0 === yb) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return yb
    }

    function mb(yb) {
      return mb = Object.setPrototypeOf ? Object.getPrototypeOf : function(yb) {
        return yb.__proto__ || Object.getPrototypeOf(yb)
      }, mb(yb)
    }

    function Cy(yb, bb, Wy) {
      return bb in yb ? Object.defineProperty(yb, bb, {
        value: Wy,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : yb[bb] = Wy, yb
    }
    var Ty = {
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
      Vy = function(yb) {
        ! function(yb, bb) {
          if ("function" !== typeof bb && null !== bb) throw new TypeError("Super expression must either be null or a function");
          Object.defineProperty(yb, "prototype", {
            value: Object.create(bb && bb.prototype, {
              constructor: {
                value: yb,
                writable: !0,
                configurable: !0
              }
            }),
            writable: !1
          }), bb && Sy(yb, bb)
        }(Zy, yb);
        var bb, Wy, Uy, fy = Ey(Zy);

        function Zy(yb, bb) {
          var Wy;
          return function(yb, bb) {
            if (!(yb instanceof bb)) throw new TypeError("Cannot call a class as a function")
          }(this, Zy), Cy(ly(Wy = fy.call(this, yb, bb)), "handleFormat", (function(yb) {
            var bb = Wy.props.format;
            return bb ? bb(yb) : yb
          })), Cy(ly(Wy), "handleUpdate", (function() {
            if (Wy.slider) {
              var yb = Wy.props.orientation,
                bb = (0, Py.capitalize)(Ty.orientation[yb].dimension),
                Uy = Wy.slider["offset".concat(bb)],
                hy = Wy.handle["offset".concat(bb)];
              Wy.setState({
                limit: Uy - hy,
                grab: hy / 2
              })
            }
          })), Cy(ly(Wy), "handleStart", (function(yb) {
            var bb = Wy.props.onChangeStart;
            document.addEventListener("mousemove", Wy.handleDrag), document.addEventListener("mouseup", Wy.handleEnd), Wy.setState({
              active: !0
            }, (function() {
              bb && bb(yb)
            }))
          })), Cy(ly(Wy), "handleDrag", (function(yb) {
            yb.stopPropagation();
            var bb = Wy.props.onChange,
              Uy = yb.target,
              hy = Uy.className,
              fy = Uy.classList,
              Zy = Uy.dataset;
            if (bb && "rangeslider__labels" !== hy) {
              var cb = Wy.position(yb);
              fy && fy.contains("rangeslider__label-item") && Zy.value && (cb = parseFloat(Zy.value)), bb && bb(cb, yb)
            }
          })), Cy(ly(Wy), "handleEnd", (function(yb) {
            var bb = Wy.props.onChangeComplete;
            Wy.setState({
              active: !1
            }, (function() {
              bb && bb(yb)
            })), document.removeEventListener("mousemove", Wy.handleDrag), document.removeEventListener("mouseup", Wy.handleEnd)
          })), Cy(ly(Wy), "handleKeyDown", (function(yb) {
            yb.preventDefault();
            var bb, Uy = yb.keyCode,
              hy = Wy.props,
              fy = hy.value,
              Zy = hy.min,
              cb = hy.max,
              Py = hy.step,
              oy = hy.onChange;
            switch (Uy) {
              case 38:
              case 39:
                bb = fy + Py > cb ? cb : fy + Py, oy && oy(bb, yb);
                break;
              case 37:
              case 40:
                bb = fy - Py < Zy ? Zy : fy - Py, oy && oy(bb, yb)
            }
          })), Cy(ly(Wy), "getPositionFromValue", (function(yb) {
            var bb = Wy.state.limit,
              Uy = Wy.props,
              hy = Uy.min,
              fy = (yb - hy) / (Uy.max - hy);
            return Math.round(fy * bb)
          })), Cy(ly(Wy), "getValueFromPosition", (function(yb) {
            var bb = Wy.state.limit,
              Uy = Wy.props,
              hy = Uy.orientation,
              fy = Uy.min,
              Zy = Uy.max,
              cb = Uy.step,
              oy = (0, Py.clamp)(yb, 0, bb) / (bb || 1),
              By = cb * Math.round(oy * (Zy - fy) / cb),
              Ky = "horizontal" === hy ? By + fy : Zy - By;
            return (0, Py.clamp)(Ky, fy, Zy)
          })), Cy(ly(Wy), "position", (function(yb) {
            var bb = Wy.state.grab,
              Uy = Wy.props,
              hy = Uy.orientation,
              fy = Uy.reverse,
              Zy = Wy.slider,
              cb = Ty.orientation[hy].coordinate,
              oy = fy ? Ty.orientation[hy].reverseDirection : Ty.orientation[hy].direction,
              By = "client".concat((0, Py.capitalize)(cb)),
              Ky = yb.touches ? yb.touches[0][By] : yb[By],
              ey = Zy.getBoundingClientRect()[oy],
              qb = fy ? ey - Ky - bb : Ky - ey - bb;
            return Wy.getValueFromPosition(qb)
          })), Cy(ly(Wy), "coordinates", (function(yb) {
            var bb = Wy.state,
              Uy = bb.limit,
              hy = bb.grab,
              fy = Wy.props.orientation,
              Zy = Wy.getValueFromPosition(yb),
              cb = Wy.getPositionFromValue(Zy),
              Py = "horizontal" === fy ? cb + hy : cb;
            return {
              fill: "horizontal" === fy ? Py : Uy - Py,
              handle: Py,
              label: Py
            }
          })), Cy(ly(Wy), "renderLabels", (function(yb) {
            return (0, oy.jsx)("ul", {
              ref: function(yb) {
                Wy.labels = yb
              },
              className: (0, hy.default)("rangeslider__labels"),
              children: yb
            })
          })), Wy.state = {
            active: !1,
            limit: 0,
            grab: 0
          }, Wy
        }
        return bb = Zy, (Wy = [{
          key: "componentDidMount",
          value: function() {
            this.handleUpdate(), new cb.default(this.handleUpdate).observe(this.slider)
          }
        }, {
          key: "render",
          value: function() {
            var yb = this,
              bb = this.props,
              Wy = bb.value,
              Uy = bb.orientation,
              fy = bb.className,
              Zy = bb.tooltip,
              cb = bb.reverse,
              Py = bb.labels,
              By = bb.min,
              Ky = bb.max,
              qb = bb.handleLabel,
              sy = this.state.active,
              Sy = Ty.orientation[Uy].dimension,
              Ey = cb ? Ty.orientation[Uy].reverseDirection : Ty.orientation[Uy].direction,
              ly = this.getPositionFromValue(Wy),
              mb = this.coordinates(ly),
              Vy = Cy({}, Sy, "".concat(mb.fill, "px")),
              Jy = Cy({}, Ey, "".concat(mb.handle, "px")),
              gb = Zy && sy,
              Gy = [],
              Oy = Object.keys(Py);
            if (Oy.length > 0) {
              var Ry, vb = ey(Oy = Oy.sort((function(yb, bb) {
                return cb ? yb - bb : bb - yb
              })));
              try {
                for (vb.s(); !(Ry = vb.n()).done;) {
                  var ib = Ry.value,
                    My = this.getPositionFromValue(ib),
                    Yy = this.coordinates(My),
                    Xy = Cy({}, Ey, "".concat(Yy.label, "px"));
                  Gy.push((0, oy.jsx)("li", {
                    className: (0, hy.default)("rangeslider__label-item"),
                    "data-value": ib,
                    onMouseDown: this.handleDrag,
                    onTouchStart: this.handleStart,
                    onTouchEnd: this.handleEnd,
                    style: Xy,
                    children: this.props.labels[ib]
                  }, ib))
                }
              } catch (ny) {
                vb.e(ny)
              } finally {
                vb.f()
              }
            }
            return (0, oy.jsxs)("div", {
              ref: function(bb) {
                yb.slider = bb
              },
              className: (0, hy.default)("rangeslider", "rangeslider-".concat(Uy), {
                "rangeslider-reverse": cb
              }, fy),
              onMouseDown: this.handleDrag,
              onMouseUp: this.handleEnd,
              onTouchStart: this.handleStart,
              onTouchEnd: this.handleEnd,
              "aria-valuemin": By,
              "aria-valuemax": Ky,
              "aria-valuenow": Wy,
              "aria-orientation": Uy,
              children: [(0, oy.jsx)("div", {
                className: "rangeslider__fill",
                style: Vy
              }), (0, oy.jsxs)("div", {
                ref: function(bb) {
                  yb.handle = bb
                },
                className: "rangeslider__handle",
                onMouseDown: this.handleStart,
                onTouchMove: this.handleDrag,
                onTouchEnd: this.handleEnd,
                onKeyDown: this.handleKeyDown,
                style: Jy,
                tabIndex: 0,
                children: [gb && (0, oy.jsx)("div", {
                  ref: function(bb) {
                    yb.tooltip = bb
                  },
                  className: "rangeslider__handle-tooltip",
                  children: (0, oy.jsx)("span", {
                    children: this.handleFormat(Wy)
                  })
                }), (0, oy.jsx)("div", {
                  className: "rangeslider__handle-label",
                  children: qb
                })]
              }), Py && this.renderLabels(Gy)]
            })
          }
        }]) && sy(bb.prototype, Wy), Uy && sy(bb, Uy), Object.defineProperty(bb, "prototype", {
          writable: !1
        }), Zy
      }(fy.Component);
    Cy(Vy, "propTypes", {
      min: Zy.default.number,
      max: Zy.default.number,
      step: Zy.default.number,
      value: Zy.default.number,
      orientation: Zy.default.string,
      tooltip: Zy.default.bool,
      reverse: Zy.default.bool,
      labels: Zy.default.object,
      handleLabel: Zy.default.string,
      format: Zy.default.func,
      onChangeStart: Zy.default.func,
      onChange: Zy.default.func,
      onChangeComplete: Zy.default.func
    }), Cy(Vy, "defaultProps", {
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
    var Jy = Vy;
    bb.default = Jy
  },
  4207: (yb, bb, Wy) => {
    var Uy;
    bb.b = void 0;
    var hy = ((Uy = Wy(4213)) && Uy.__esModule ? Uy : {
      default: Uy
    }).default;
    bb.b = hy
  },
  4218: (yb, bb) => {
    Object.defineProperty(bb, "__esModule", {
      value: !0
    }), bb.capitalize = function(yb) {
      return yb.charAt(0).toUpperCase() + yb.substr(1)
    }, bb.clamp = function(yb, bb, Wy) {
      return Math.min(Math.max(yb, bb), Wy)
    }
  },
  4175: (yb, bb, Wy) => {
    var Uy = Wy(4183);

    function hy() {}

    function fy() {}
    fy.resetWarningCache = hy, yb.exports = function() {
      function yb(yb, bb, Wy, hy, fy, Zy) {
        if (Zy !== Uy) {
          var cb = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw cb.name = "Invariant Violation", cb
        }
      }

      function bb() {
        return yb
      }
      yb.isRequired = yb;
      var Wy = {
        array: yb,
        bigint: yb,
        bool: yb,
        func: yb,
        number: yb,
        object: yb,
        string: yb,
        symbol: yb,
        any: yb,
        arrayOf: bb,
        element: yb,
        elementType: yb,
        instanceOf: bb,
        node: yb,
        objectOf: bb,
        oneOf: bb,
        oneOfType: bb,
        shape: bb,
        exact: bb,
        checkPropTypes: fy,
        resetWarningCache: hy
      };
      return Wy.PropTypes = Wy, Wy
    }
  },
  4172: (yb, bb, Wy) => {
    yb.exports = Wy(4175)()
  },
  4183: yb => {
    yb.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  4215: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      default: () => Gy
    });
    var Uy = function() {
        if ("undefined" !== typeof Map) return Map;

        function yb(yb, bb) {
          var Wy = -1;
          return yb.some((function(yb, Uy) {
            return yb[0] === bb && (Wy = Uy, !0)
          })), Wy
        }
        return function() {
          function bb() {
            this.__entries__ = []
          }
          return Object.defineProperty(bb.prototype, "size", {
            get: function() {
              return this.__entries__.length
            },
            enumerable: !0,
            configurable: !0
          }), bb.prototype.get = function(bb) {
            var Wy = yb(this.__entries__, bb),
              Uy = this.__entries__[Wy];
            return Uy && Uy[1]
          }, bb.prototype.set = function(bb, Wy) {
            var Uy = yb(this.__entries__, bb);
            ~Uy ? this.__entries__[Uy][1] = Wy : this.__entries__.push([bb, Wy])
          }, bb.prototype.delete = function(bb) {
            var Wy = this.__entries__,
              Uy = yb(Wy, bb);
            ~Uy && Wy.splice(Uy, 1)
          }, bb.prototype.has = function(bb) {
            return !!~yb(this.__entries__, bb)
          }, bb.prototype.clear = function() {
            this.__entries__.splice(0)
          }, bb.prototype.forEach = function(yb, bb) {
            void 0 === bb && (bb = null);
            for (var Wy = 0, Uy = this.__entries__; Wy < Uy.length; Wy++) {
              var hy = Uy[Wy];
              yb.call(bb, hy[1], hy[0])
            }
          }, bb
        }()
      }(),
      hy = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document,
      fy = "undefined" !== typeof Wy.g && Wy.g.Math === Math ? Wy.g : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")(),
      Zy = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(fy) : function(yb) {
        return setTimeout((function() {
          return yb(Date.now())
        }), 1e3 / 60)
      };
    var cb = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
      Py = "undefined" !== typeof MutationObserver,
      oy = function() {
        function yb() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(yb, bb) {
            var Wy = !1,
              Uy = !1,
              hy = 0;

            function fy() {
              Wy && (Wy = !1, yb()), Uy && Py()
            }

            function cb() {
              Zy(fy)
            }

            function Py() {
              var yb = Date.now();
              if (Wy) {
                if (yb - hy < 2) return;
                Uy = !0
              } else Wy = !0, Uy = !1, setTimeout(cb, bb);
              hy = yb
            }
            return Py
          }(this.refresh.bind(this), 20)
        }
        return yb.prototype.addObserver = function(yb) {
          ~this.observers_.indexOf(yb) || this.observers_.push(yb), this.connected_ || this.connect_()
        }, yb.prototype.removeObserver = function(yb) {
          var bb = this.observers_,
            Wy = bb.indexOf(yb);
          ~Wy && bb.splice(Wy, 1), !bb.length && this.connected_ && this.disconnect_()
        }, yb.prototype.refresh = function() {
          this.updateObservers_() && this.refresh()
        }, yb.prototype.updateObservers_ = function() {
          var yb = this.observers_.filter((function(yb) {
            return yb.gatherActive(), yb.hasActive()
          }));
          return yb.forEach((function(yb) {
            return yb.broadcastActive()
          })), yb.length > 0
        }, yb.prototype.connect_ = function() {
          hy && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Py ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
          })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, yb.prototype.disconnect_ = function() {
          hy && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, yb.prototype.onTransitionEnd_ = function(yb) {
          var bb = yb.propertyName,
            Wy = void 0 === bb ? "" : bb;
          cb.some((function(yb) {
            return !!~Wy.indexOf(yb)
          })) && this.refresh()
        }, yb.getInstance = function() {
          return this.instance_ || (this.instance_ = new yb), this.instance_
        }, yb.instance_ = null, yb
      }(),
      By = function(yb, bb) {
        for (var Wy = 0, Uy = Object.keys(bb); Wy < Uy.length; Wy++) {
          var hy = Uy[Wy];
          Object.defineProperty(yb, hy, {
            value: bb[hy],
            enumerable: !1,
            writable: !1,
            configurable: !0
          })
        }
        return yb
      },
      Ky = function(yb) {
        return yb && yb.ownerDocument && yb.ownerDocument.defaultView || fy
      },
      ey = mb(0, 0, 0, 0);

    function qb(yb) {
      return parseFloat(yb) || 0
    }

    function sy(yb) {
      for (var bb = [], Wy = 1; Wy < arguments.length; Wy++) bb[Wy - 1] = arguments[Wy];
      return bb.reduce((function(bb, Wy) {
        return bb + qb(yb["border-" + Wy + "-width"])
      }), 0)
    }

    function Sy(yb) {
      var bb = yb.clientWidth,
        Wy = yb.clientHeight;
      if (!bb && !Wy) return ey;
      var Uy = Ky(yb).getComputedStyle(yb),
        hy = function(yb) {
          for (var bb = {}, Wy = 0, Uy = ["top", "right", "bottom", "left"]; Wy < Uy.length; Wy++) {
            var hy = Uy[Wy],
              fy = yb["padding-" + hy];
            bb[hy] = qb(fy)
          }
          return bb
        }(Uy),
        fy = hy.left + hy.right,
        Zy = hy.top + hy.bottom,
        cb = qb(Uy.width),
        Py = qb(Uy.height);
      if ("border-box" === Uy.boxSizing && (Math.round(cb + fy) !== bb && (cb -= sy(Uy, "left", "right") + fy), Math.round(Py + Zy) !== Wy && (Py -= sy(Uy, "top", "bottom") + Zy)), ! function(yb) {
          return yb === Ky(yb).document.documentElement
        }(yb)) {
        var oy = Math.round(cb + fy) - bb,
          By = Math.round(Py + Zy) - Wy;
        1 !== Math.abs(oy) && (cb -= oy), 1 !== Math.abs(By) && (Py -= By)
      }
      return mb(hy.left, hy.top, cb, Py)
    }
    var Ey = "undefined" !== typeof SVGGraphicsElement ? function(yb) {
      return yb instanceof Ky(yb).SVGGraphicsElement
    } : function(yb) {
      return yb instanceof Ky(yb).SVGElement && "function" === typeof yb.getBBox
    };

    function ly(yb) {
      return hy ? Ey(yb) ? function(yb) {
        var bb = yb.getBBox();
        return mb(0, 0, bb.width, bb.height)
      }(yb) : Sy(yb) : ey
    }

    function mb(yb, bb, Wy, Uy) {
      return {
        x: yb,
        y: bb,
        width: Wy,
        height: Uy
      }
    }
    var Cy = function() {
        function yb(yb) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = mb(0, 0, 0, 0), this.target = yb
        }
        return yb.prototype.isActive = function() {
          var yb = ly(this.target);
          return this.contentRect_ = yb, yb.width !== this.broadcastWidth || yb.height !== this.broadcastHeight
        }, yb.prototype.broadcastRect = function() {
          var yb = this.contentRect_;
          return this.broadcastWidth = yb.width, this.broadcastHeight = yb.height, yb
        }, yb
      }(),
      Ty = function(yb, bb) {
        var Wy = function(yb) {
          var bb = yb.x,
            Wy = yb.y,
            Uy = yb.width,
            hy = yb.height,
            fy = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
            Zy = Object.create(fy.prototype);
          return By(Zy, {
            x: bb,
            y: Wy,
            width: Uy,
            height: hy,
            top: Wy,
            right: bb + Uy,
            bottom: hy + Wy,
            left: bb
          }), Zy
        }(bb);
        By(this, {
          target: yb,
          contentRect: Wy
        })
      },
      Vy = function() {
        function yb(yb, bb, Wy) {
          if (this.activeObservations_ = [], this.observations_ = new Uy, "function" !== typeof yb) throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = yb, this.controller_ = bb, this.callbackCtx_ = Wy
        }
        return yb.prototype.observe = function(yb) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(yb instanceof Ky(yb).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var bb = this.observations_;
            bb.has(yb) || (bb.set(yb, new Cy(yb)), this.controller_.addObserver(this), this.controller_.refresh())
          }
        }, yb.prototype.unobserve = function(yb) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(yb instanceof Ky(yb).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var bb = this.observations_;
            bb.has(yb) && (bb.delete(yb), bb.size || this.controller_.removeObserver(this))
          }
        }, yb.prototype.disconnect = function() {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, yb.prototype.gatherActive = function() {
          var yb = this;
          this.clearActive(), this.observations_.forEach((function(bb) {
            bb.isActive() && yb.activeObservations_.push(bb)
          }))
        }, yb.prototype.broadcastActive = function() {
          if (this.hasActive()) {
            var yb = this.callbackCtx_,
              bb = this.activeObservations_.map((function(yb) {
                return new Ty(yb.target, yb.broadcastRect())
              }));
            this.callback_.call(yb, bb, yb), this.clearActive()
          }
        }, yb.prototype.clearActive = function() {
          this.activeObservations_.splice(0)
        }, yb.prototype.hasActive = function() {
          return this.activeObservations_.length > 0
        }, yb
      }(),
      Jy = "undefined" !== typeof WeakMap ? new WeakMap : new Uy,
      gb = function yb(bb) {
        if (!(this instanceof yb)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var Wy = oy.getInstance(),
          Uy = new Vy(bb, Wy, this);
        Jy.set(this, Uy)
      };
    ["observe", "unobserve", "disconnect"].forEach((function(yb) {
      gb.prototype[yb] = function() {
        var bb;
        return (bb = Jy.get(this))[yb].apply(bb, arguments)
      }
    }));
    const Gy = "undefined" !== typeof fy.ResizeObserver ? fy.ResizeObserver : gb
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);