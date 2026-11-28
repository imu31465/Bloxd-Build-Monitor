export const id = 129;
export const ids = [129];
export const modules = {
  6065: (bb, wb, Mb) => {
    function eb(bb) {
      return eb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, eb(bb)
    }
    Object.defineProperty(wb, "__esModule", {
      value: !0
    }), wb.default = void 0;
    var Hb = Ob(Mb(1159)),
      pb = function(bb, wb) {
        if (!wb && bb && bb.__esModule) return bb;
        if (null === bb || "object" !== eb(bb) && "function" !== typeof bb) return {
          default: bb
        };
        var Mb = Ib(wb);
        if (Mb && Mb.has(bb)) return Mb.get(bb);
        var Hb = {},
          pb = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var Vb in bb)
          if ("default" !== Vb && Object.prototype.hasOwnProperty.call(bb, Vb)) {
            var gb = pb ? Object.getOwnPropertyDescriptor(bb, Vb) : null;
            gb && (gb.get || gb.set) ? Object.defineProperty(Hb, Vb, gb) : Hb[Vb] = bb[Vb]
          } Hb.default = bb, Mb && Mb.set(bb, Hb);
        return Hb
      }(Mb(64)),
      Vb = Ob(Mb(6022)),
      gb = Ob(Mb(6074)),
      lb = Mb(6083),
      Lb = Mb(1364);

    function Ib(bb) {
      if ("function" !== typeof WeakMap) return null;
      var wb = new WeakMap,
        Mb = new WeakMap;
      return (Ib = function(bb) {
        return bb ? Mb : wb
      })(bb)
    }

    function Ob(bb) {
      return bb && bb.__esModule ? bb : {
        default: bb
      }
    }

    function Ub(bb, wb) {
      var Mb = "undefined" !== typeof Symbol && bb[Symbol.iterator] || bb["@@iterator"];
      if (!Mb) {
        if (Array.isArray(bb) || (Mb = function(bb, wb) {
            if (!bb) return;
            if ("string" === typeof bb) return tb(bb, wb);
            var Mb = Object.prototype.toString.call(bb).slice(8, -1);
            "Object" === Mb && bb.constructor && (Mb = bb.constructor.name);
            if ("Map" === Mb || "Set" === Mb) return Array.from(bb);
            if ("Arguments" === Mb || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Mb)) return tb(bb, wb)
          }(bb)) || wb && bb && "number" === typeof bb.length) {
          Mb && (bb = Mb);
          var eb = 0,
            Hb = function() {};
          return {
            s: Hb,
            n: function() {
              return eb >= bb.length ? {
                done: !0
              } : {
                done: !1,
                value: bb[eb++]
              }
            },
            e: function(bb) {
              throw bb
            },
            f: Hb
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var pb, Vb = !0,
        gb = !1;
      return {
        s: function() {
          Mb = Mb.call(bb)
        },
        n: function() {
          var bb = Mb.next();
          return Vb = bb.done, bb
        },
        e: function(bb) {
          gb = !0, pb = bb
        },
        f: function() {
          try {
            Vb || null == Mb.return || Mb.return()
          } finally {
            if (gb) throw pb
          }
        }
      }
    }

    function tb(bb, wb) {
      (null == wb || wb > bb.length) && (wb = bb.length);
      for (var Mb = 0, eb = new Array(wb); Mb < wb; Mb++) eb[Mb] = bb[Mb];
      return eb
    }

    function Cb(bb, wb) {
      for (var Mb = 0; Mb < wb.length; Mb++) {
        var eb = wb[Mb];
        eb.enumerable = eb.enumerable || !1, eb.configurable = !0, "value" in eb && (eb.writable = !0), Object.defineProperty(bb, eb.key, eb)
      }
    }

    function Eb(bb, wb) {
      return Eb = Object.setPrototypeOf || function(bb, wb) {
        return bb.__proto__ = wb, bb
      }, Eb(bb, wb)
    }

    function Fb(bb) {
      var wb = function() {
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
        var Mb, Hb = sb(bb);
        if (wb) {
          var pb = sb(this).constructor;
          Mb = Reflect.construct(Hb, arguments, pb)
        } else Mb = Hb.apply(this, arguments);
        return function(bb, wb) {
          if (wb && ("object" === eb(wb) || "function" === typeof wb)) return wb;
          if (void 0 !== wb) throw new TypeError("Derived constructors may only return object or undefined");
          return Bb(bb)
        }(this, Mb)
      }
    }

    function Bb(bb) {
      if (void 0 === bb) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return bb
    }

    function sb(bb) {
      return sb = Object.setPrototypeOf ? Object.getPrototypeOf : function(bb) {
        return bb.__proto__ || Object.getPrototypeOf(bb)
      }, sb(bb)
    }

    function mb(bb, wb, Mb) {
      return wb in bb ? Object.defineProperty(bb, wb, {
        value: Mb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[wb] = Mb, bb
    }
    var hb = {
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
      zb = function(bb) {
        ! function(bb, wb) {
          if ("function" !== typeof wb && null !== wb) throw new TypeError("Super expression must either be null or a function");
          Object.defineProperty(bb, "prototype", {
            value: Object.create(wb && wb.prototype, {
              constructor: {
                value: bb,
                writable: !0,
                configurable: !0
              }
            }),
            writable: !1
          }), wb && Eb(bb, wb)
        }(Vb, bb);
        var wb, Mb, eb, pb = Fb(Vb);

        function Vb(bb, wb) {
          var Mb;
          return function(bb, wb) {
            if (!(bb instanceof wb)) throw new TypeError("Cannot call a class as a function")
          }(this, Vb), mb(Bb(Mb = pb.call(this, bb, wb)), "handleFormat", (function(bb) {
            var wb = Mb.props.format;
            return wb ? wb(bb) : bb
          })), mb(Bb(Mb), "handleUpdate", (function() {
            if (Mb.slider) {
              var bb = Mb.props.orientation,
                wb = (0, lb.capitalize)(hb.orientation[bb].dimension),
                eb = Mb.slider["offset".concat(wb)],
                Hb = Mb.handle["offset".concat(wb)];
              Mb.setState({
                limit: eb - Hb,
                grab: Hb / 2
              })
            }
          })), mb(Bb(Mb), "handleStart", (function(bb) {
            var wb = Mb.props.onChangeStart;
            document.addEventListener("mousemove", Mb.handleDrag), document.addEventListener("mouseup", Mb.handleEnd), Mb.setState({
              active: !0
            }, (function() {
              wb && wb(bb)
            }))
          })), mb(Bb(Mb), "handleDrag", (function(bb) {
            bb.stopPropagation();
            var wb = Mb.props.onChange,
              eb = bb.target,
              Hb = eb.className,
              pb = eb.classList,
              Vb = eb.dataset;
            if (wb && "rangeslider__labels" !== Hb) {
              var gb = Mb.position(bb);
              pb && pb.contains("rangeslider__label-item") && Vb.value && (gb = parseFloat(Vb.value)), wb && wb(gb, bb)
            }
          })), mb(Bb(Mb), "handleEnd", (function(bb) {
            var wb = Mb.props.onChangeComplete;
            Mb.setState({
              active: !1
            }, (function() {
              wb && wb(bb)
            })), document.removeEventListener("mousemove", Mb.handleDrag), document.removeEventListener("mouseup", Mb.handleEnd)
          })), mb(Bb(Mb), "handleKeyDown", (function(bb) {
            bb.preventDefault();
            var wb, eb = bb.keyCode,
              Hb = Mb.props,
              pb = Hb.value,
              Vb = Hb.min,
              gb = Hb.max,
              lb = Hb.step,
              Lb = Hb.onChange;
            switch (eb) {
              case 38:
              case 39:
                wb = pb + lb > gb ? gb : pb + lb, Lb && Lb(wb, bb);
                break;
              case 37:
              case 40:
                wb = pb - lb < Vb ? Vb : pb - lb, Lb && Lb(wb, bb)
            }
          })), mb(Bb(Mb), "getPositionFromValue", (function(bb) {
            var wb = Mb.state.limit,
              eb = Mb.props,
              Hb = eb.min,
              pb = (bb - Hb) / (eb.max - Hb);
            return Math.round(pb * wb)
          })), mb(Bb(Mb), "getValueFromPosition", (function(bb) {
            var wb = Mb.state.limit,
              eb = Mb.props,
              Hb = eb.orientation,
              pb = eb.min,
              Vb = eb.max,
              gb = eb.step,
              Lb = (0, lb.clamp)(bb, 0, wb) / (wb || 1),
              Ib = gb * Math.round(Lb * (Vb - pb) / gb),
              Ob = "horizontal" === Hb ? Ib + pb : Vb - Ib;
            return (0, lb.clamp)(Ob, pb, Vb)
          })), mb(Bb(Mb), "position", (function(bb) {
            var wb = Mb.state.grab,
              eb = Mb.props,
              Hb = eb.orientation,
              pb = eb.reverse,
              Vb = Mb.slider,
              gb = hb.orientation[Hb].coordinate,
              Lb = pb ? hb.orientation[Hb].reverseDirection : hb.orientation[Hb].direction,
              Ib = "client".concat((0, lb.capitalize)(gb)),
              Ob = bb.touches ? bb.touches[0][Ib] : bb[Ib],
              Ub = Vb.getBoundingClientRect()[Lb],
              tb = pb ? Ub - Ob - wb : Ob - Ub - wb;
            return Mb.getValueFromPosition(tb)
          })), mb(Bb(Mb), "coordinates", (function(bb) {
            var wb = Mb.state,
              eb = wb.limit,
              Hb = wb.grab,
              pb = Mb.props.orientation,
              Vb = Mb.getValueFromPosition(bb),
              gb = Mb.getPositionFromValue(Vb),
              lb = "horizontal" === pb ? gb + Hb : gb;
            return {
              fill: "horizontal" === pb ? lb : eb - lb,
              handle: lb,
              label: lb
            }
          })), mb(Bb(Mb), "renderLabels", (function(bb) {
            return (0, Lb.jsx)("ul", {
              ref: function(bb) {
                Mb.labels = bb
              },
              className: (0, Hb.default)("rangeslider__labels"),
              children: bb
            })
          })), Mb.state = {
            active: !1,
            limit: 0,
            grab: 0
          }, Mb
        }
        return wb = Vb, (Mb = [{
          key: "componentDidMount",
          value: function() {
            this.handleUpdate(), new gb.default(this.handleUpdate).observe(this.slider)
          }
        }, {
          key: "render",
          value: function() {
            var bb = this,
              wb = this.props,
              Mb = wb.value,
              eb = wb.orientation,
              pb = wb.className,
              Vb = wb.tooltip,
              gb = wb.reverse,
              lb = wb.labels,
              Ib = wb.min,
              Ob = wb.max,
              tb = wb.handleLabel,
              Cb = this.state.active,
              Eb = hb.orientation[eb].dimension,
              Fb = gb ? hb.orientation[eb].reverseDirection : hb.orientation[eb].direction,
              Bb = this.getPositionFromValue(Mb),
              sb = this.coordinates(Bb),
              zb = mb({}, Eb, "".concat(sb.fill, "px")),
              Xb = mb({}, Fb, "".concat(sb.handle, "px")),
              xb = Vb && Cb,
              jb = [],
              Kb = Object.keys(lb);
            if (Kb.length > 0) {
              var rb, Rb = Ub(Kb = Kb.sort((function(bb, wb) {
                return gb ? bb - wb : wb - bb
              })));
              try {
                for (Rb.s(); !(rb = Rb.n()).done;) {
                  var Db = rb.value,
                    cb = this.getPositionFromValue(Db),
                    Yb = this.coordinates(cb),
                    Zb = mb({}, Fb, "".concat(Yb.label, "px"));
                  jb.push((0, Lb.jsx)("li", {
                    className: (0, Hb.default)("rangeslider__label-item"),
                    "data-value": Db,
                    onMouseDown: this.handleDrag,
                    onTouchStart: this.handleStart,
                    onTouchEnd: this.handleEnd,
                    style: Zb,
                    children: this.props.labels[Db]
                  }, Db))
                }
              } catch (fb) {
                Rb.e(fb)
              } finally {
                Rb.f()
              }
            }
            return (0, Lb.jsxs)("div", {
              ref: function(wb) {
                bb.slider = wb
              },
              className: (0, Hb.default)("rangeslider", "rangeslider-".concat(eb), {
                "rangeslider-reverse": gb
              }, pb),
              onMouseDown: this.handleDrag,
              onMouseUp: this.handleEnd,
              onTouchStart: this.handleStart,
              onTouchEnd: this.handleEnd,
              "aria-valuemin": Ib,
              "aria-valuemax": Ob,
              "aria-valuenow": Mb,
              "aria-orientation": eb,
              children: [(0, Lb.jsx)("div", {
                className: "rangeslider__fill",
                style: zb
              }), (0, Lb.jsxs)("div", {
                ref: function(wb) {
                  bb.handle = wb
                },
                className: "rangeslider__handle",
                onMouseDown: this.handleStart,
                onTouchMove: this.handleDrag,
                onTouchEnd: this.handleEnd,
                onKeyDown: this.handleKeyDown,
                style: Xb,
                tabIndex: 0,
                children: [xb && (0, Lb.jsx)("div", {
                  ref: function(wb) {
                    bb.tooltip = wb
                  },
                  className: "rangeslider__handle-tooltip",
                  children: (0, Lb.jsx)("span", {
                    children: this.handleFormat(Mb)
                  })
                }), (0, Lb.jsx)("div", {
                  className: "rangeslider__handle-label",
                  children: tb
                })]
              }), lb && this.renderLabels(jb)]
            })
          }
        }]) && Cb(wb.prototype, Mb), eb && Cb(wb, eb), Object.defineProperty(wb, "prototype", {
          writable: !1
        }), Vb
      }(pb.Component);
    mb(zb, "propTypes", {
      min: Vb.default.number,
      max: Vb.default.number,
      step: Vb.default.number,
      value: Vb.default.number,
      orientation: Vb.default.string,
      tooltip: Vb.default.bool,
      reverse: Vb.default.bool,
      labels: Vb.default.object,
      handleLabel: Vb.default.string,
      format: Vb.default.func,
      onChangeStart: Vb.default.func,
      onChange: Vb.default.func,
      onChangeComplete: Vb.default.func
    }), mb(zb, "defaultProps", {
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
    var Xb = zb;
    wb.default = Xb
  },
  6056: (bb, wb, Mb) => {
    var eb;
    wb.e = void 0;
    var Hb = ((eb = Mb(6065)) && eb.__esModule ? eb : {
      default: eb
    }).default;
    wb.e = Hb
  },
  6083: (bb, wb) => {
    Object.defineProperty(wb, "__esModule", {
      value: !0
    }), wb.capitalize = function(bb) {
      return bb.charAt(0).toUpperCase() + bb.substr(1)
    }, wb.clamp = function(bb, wb, Mb) {
      return Math.min(Math.max(bb, wb), Mb)
    }
  },
  6028: (bb, wb, Mb) => {
    var eb = Mb(6030);

    function Hb() {}

    function pb() {}
    pb.resetWarningCache = Hb, bb.exports = function() {
      function bb(bb, wb, Mb, Hb, pb, Vb) {
        if (Vb !== eb) {
          var gb = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw gb.name = "Invariant Violation", gb
        }
      }

      function wb() {
        return bb
      }
      bb.isRequired = bb;
      var Mb = {
        array: bb,
        bigint: bb,
        bool: bb,
        func: bb,
        number: bb,
        object: bb,
        string: bb,
        symbol: bb,
        any: bb,
        arrayOf: wb,
        element: bb,
        elementType: bb,
        instanceOf: wb,
        node: bb,
        objectOf: wb,
        oneOf: wb,
        oneOfType: wb,
        shape: wb,
        exact: wb,
        checkPropTypes: pb,
        resetWarningCache: Hb
      };
      return Mb.PropTypes = Mb, Mb
    }
  },
  6022: (bb, wb, Mb) => {
    bb.exports = Mb(6028)()
  },
  6030: bb => {
    bb.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6074: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      default: () => jb
    });
    var eb = function() {
        if ("undefined" !== typeof Map) return Map;

        function bb(bb, wb) {
          var Mb = -1;
          return bb.some((function(bb, eb) {
            return bb[0] === wb && (Mb = eb, !0)
          })), Mb
        }
        return function() {
          function wb() {
            this.__entries__ = []
          }
          return Object.defineProperty(wb.prototype, "size", {
            get: function() {
              return this.__entries__.length
            },
            enumerable: !0,
            configurable: !0
          }), wb.prototype.get = function(wb) {
            var Mb = bb(this.__entries__, wb),
              eb = this.__entries__[Mb];
            return eb && eb[1]
          }, wb.prototype.set = function(wb, Mb) {
            var eb = bb(this.__entries__, wb);
            ~eb ? this.__entries__[eb][1] = Mb : this.__entries__.push([wb, Mb])
          }, wb.prototype.delete = function(wb) {
            var Mb = this.__entries__,
              eb = bb(Mb, wb);
            ~eb && Mb.splice(eb, 1)
          }, wb.prototype.has = function(wb) {
            return !!~bb(this.__entries__, wb)
          }, wb.prototype.clear = function() {
            this.__entries__.splice(0)
          }, wb.prototype.forEach = function(bb, wb) {
            void 0 === wb && (wb = null);
            for (var Mb = 0, eb = this.__entries__; Mb < eb.length; Mb++) {
              var Hb = eb[Mb];
              bb.call(wb, Hb[1], Hb[0])
            }
          }, wb
        }()
      }(),
      Hb = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document,
      pb = "undefined" !== typeof Mb.g && Mb.g.Math === Math ? Mb.g : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")(),
      Vb = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(pb) : function(bb) {
        return setTimeout((function() {
          return bb(Date.now())
        }), 1e3 / 60)
      };
    var gb = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
      lb = "undefined" !== typeof MutationObserver,
      Lb = function() {
        function bb() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(bb, wb) {
            var Mb = !1,
              eb = !1,
              Hb = 0;

            function pb() {
              Mb && (Mb = !1, bb()), eb && lb()
            }

            function gb() {
              Vb(pb)
            }

            function lb() {
              var bb = Date.now();
              if (Mb) {
                if (bb - Hb < 2) return;
                eb = !0
              } else Mb = !0, eb = !1, setTimeout(gb, wb);
              Hb = bb
            }
            return lb
          }(this.refresh.bind(this), 20)
        }
        return bb.prototype.addObserver = function(bb) {
          ~this.observers_.indexOf(bb) || this.observers_.push(bb), this.connected_ || this.connect_()
        }, bb.prototype.removeObserver = function(bb) {
          var wb = this.observers_,
            Mb = wb.indexOf(bb);
          ~Mb && wb.splice(Mb, 1), !wb.length && this.connected_ && this.disconnect_()
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
          Hb && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), lb ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
          })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, bb.prototype.disconnect_ = function() {
          Hb && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, bb.prototype.onTransitionEnd_ = function(bb) {
          var wb = bb.propertyName,
            Mb = void 0 === wb ? "" : wb;
          gb.some((function(bb) {
            return !!~Mb.indexOf(bb)
          })) && this.refresh()
        }, bb.getInstance = function() {
          return this.instance_ || (this.instance_ = new bb), this.instance_
        }, bb.instance_ = null, bb
      }(),
      Ib = function(bb, wb) {
        for (var Mb = 0, eb = Object.keys(wb); Mb < eb.length; Mb++) {
          var Hb = eb[Mb];
          Object.defineProperty(bb, Hb, {
            value: wb[Hb],
            enumerable: !1,
            writable: !1,
            configurable: !0
          })
        }
        return bb
      },
      Ob = function(bb) {
        return bb && bb.ownerDocument && bb.ownerDocument.defaultView || pb
      },
      Ub = sb(0, 0, 0, 0);

    function tb(bb) {
      return parseFloat(bb) || 0
    }

    function Cb(bb) {
      for (var wb = [], Mb = 1; Mb < arguments.length; Mb++) wb[Mb - 1] = arguments[Mb];
      return wb.reduce((function(wb, Mb) {
        return wb + tb(bb["border-" + Mb + "-width"])
      }), 0)
    }

    function Eb(bb) {
      var wb = bb.clientWidth,
        Mb = bb.clientHeight;
      if (!wb && !Mb) return Ub;
      var eb = Ob(bb).getComputedStyle(bb),
        Hb = function(bb) {
          for (var wb = {}, Mb = 0, eb = ["top", "right", "bottom", "left"]; Mb < eb.length; Mb++) {
            var Hb = eb[Mb],
              pb = bb["padding-" + Hb];
            wb[Hb] = tb(pb)
          }
          return wb
        }(eb),
        pb = Hb.left + Hb.right,
        Vb = Hb.top + Hb.bottom,
        gb = tb(eb.width),
        lb = tb(eb.height);
      if ("border-box" === eb.boxSizing && (Math.round(gb + pb) !== wb && (gb -= Cb(eb, "left", "right") + pb), Math.round(lb + Vb) !== Mb && (lb -= Cb(eb, "top", "bottom") + Vb)), ! function(bb) {
          return bb === Ob(bb).document.documentElement
        }(bb)) {
        var Lb = Math.round(gb + pb) - wb,
          Ib = Math.round(lb + Vb) - Mb;
        1 !== Math.abs(Lb) && (gb -= Lb), 1 !== Math.abs(Ib) && (lb -= Ib)
      }
      return sb(Hb.left, Hb.top, gb, lb)
    }
    var Fb = "undefined" !== typeof SVGGraphicsElement ? function(bb) {
      return bb instanceof Ob(bb).SVGGraphicsElement
    } : function(bb) {
      return bb instanceof Ob(bb).SVGElement && "function" === typeof bb.getBBox
    };

    function Bb(bb) {
      return Hb ? Fb(bb) ? function(bb) {
        var wb = bb.getBBox();
        return sb(0, 0, wb.width, wb.height)
      }(bb) : Eb(bb) : Ub
    }

    function sb(bb, wb, Mb, eb) {
      return {
        x: bb,
        y: wb,
        width: Mb,
        height: eb
      }
    }
    var mb = function() {
        function bb(bb) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = sb(0, 0, 0, 0), this.target = bb
        }
        return bb.prototype.isActive = function() {
          var bb = Bb(this.target);
          return this.contentRect_ = bb, bb.width !== this.broadcastWidth || bb.height !== this.broadcastHeight
        }, bb.prototype.broadcastRect = function() {
          var bb = this.contentRect_;
          return this.broadcastWidth = bb.width, this.broadcastHeight = bb.height, bb
        }, bb
      }(),
      hb = function(bb, wb) {
        var Mb = function(bb) {
          var wb = bb.x,
            Mb = bb.y,
            eb = bb.width,
            Hb = bb.height,
            pb = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
            Vb = Object.create(pb.prototype);
          return Ib(Vb, {
            x: wb,
            y: Mb,
            width: eb,
            height: Hb,
            top: Mb,
            right: wb + eb,
            bottom: Hb + Mb,
            left: wb
          }), Vb
        }(wb);
        Ib(this, {
          target: bb,
          contentRect: Mb
        })
      },
      zb = function() {
        function bb(bb, wb, Mb) {
          if (this.activeObservations_ = [], this.observations_ = new eb, "function" !== typeof bb) throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = bb, this.controller_ = wb, this.callbackCtx_ = Mb
        }
        return bb.prototype.observe = function(bb) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(bb instanceof Ob(bb).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var wb = this.observations_;
            wb.has(bb) || (wb.set(bb, new mb(bb)), this.controller_.addObserver(this), this.controller_.refresh())
          }
        }, bb.prototype.unobserve = function(bb) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(bb instanceof Ob(bb).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var wb = this.observations_;
            wb.has(bb) && (wb.delete(bb), wb.size || this.controller_.removeObserver(this))
          }
        }, bb.prototype.disconnect = function() {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, bb.prototype.gatherActive = function() {
          var bb = this;
          this.clearActive(), this.observations_.forEach((function(wb) {
            wb.isActive() && bb.activeObservations_.push(wb)
          }))
        }, bb.prototype.broadcastActive = function() {
          if (this.hasActive()) {
            var bb = this.callbackCtx_,
              wb = this.activeObservations_.map((function(bb) {
                return new hb(bb.target, bb.broadcastRect())
              }));
            this.callback_.call(bb, wb, bb), this.clearActive()
          }
        }, bb.prototype.clearActive = function() {
          this.activeObservations_.splice(0)
        }, bb.prototype.hasActive = function() {
          return this.activeObservations_.length > 0
        }, bb
      }(),
      Xb = "undefined" !== typeof WeakMap ? new WeakMap : new eb,
      xb = function bb(wb) {
        if (!(this instanceof bb)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var Mb = Lb.getInstance(),
          eb = new zb(wb, Mb, this);
        Xb.set(this, eb)
      };
    ["observe", "unobserve", "disconnect"].forEach((function(bb) {
      xb.prototype[bb] = function() {
        var wb;
        return (wb = Xb.get(this))[bb].apply(wb, arguments)
      }
    }));
    const jb = "undefined" !== typeof pb.ResizeObserver ? pb.ResizeObserver : xb
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);