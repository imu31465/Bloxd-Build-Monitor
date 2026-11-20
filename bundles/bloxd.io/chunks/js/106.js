export const id = 106;
export const ids = [106];
export const modules = {
  4715: (bb, cb, sb) => {
    function kb(bb) {
      return kb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, kb(bb)
    }
    Object.defineProperty(cb, "__esModule", {
      value: !0
    }), cb.default = void 0;
    var Wb = Mb(sb(1033)),
      ab = function(bb, cb) {
        if (!cb && bb && bb.__esModule) return bb;
        if (null === bb || "object" !== kb(bb) && "function" !== typeof bb) return {
          default: bb
        };
        var sb = fb(cb);
        if (sb && sb.has(bb)) return sb.get(bb);
        var Wb = {},
          ab = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var Tb in bb)
          if ("default" !== Tb && Object.prototype.hasOwnProperty.call(bb, Tb)) {
            var Ub = ab ? Object.getOwnPropertyDescriptor(bb, Tb) : null;
            Ub && (Ub.get || Ub.set) ? Object.defineProperty(Wb, Tb, Ub) : Wb[Tb] = bb[Tb]
          } Wb.default = bb, sb && sb.set(bb, Wb);
        return Wb
      }(sb(64)),
      Tb = Mb(sb(4669)),
      Ub = Mb(sb(4721)),
      Ib = sb(4726),
      Hb = sb(1087);

    function fb(bb) {
      if ("function" !== typeof WeakMap) return null;
      var cb = new WeakMap,
        sb = new WeakMap;
      return (fb = function(bb) {
        return bb ? sb : cb
      })(bb)
    }

    function Mb(bb) {
      return bb && bb.__esModule ? bb : {
        default: bb
      }
    }

    function Xb(bb, cb) {
      var sb = "undefined" !== typeof Symbol && bb[Symbol.iterator] || bb["@@iterator"];
      if (!sb) {
        if (Array.isArray(bb) || (sb = function(bb, cb) {
            if (!bb) return;
            if ("string" === typeof bb) return nb(bb, cb);
            var sb = Object.prototype.toString.call(bb).slice(8, -1);
            "Object" === sb && bb.constructor && (sb = bb.constructor.name);
            if ("Map" === sb || "Set" === sb) return Array.from(bb);
            if ("Arguments" === sb || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(sb)) return nb(bb, cb)
          }(bb)) || cb && bb && "number" === typeof bb.length) {
          sb && (bb = sb);
          var kb = 0,
            Wb = function() {};
          return {
            s: Wb,
            n: function() {
              return kb >= bb.length ? {
                done: !0
              } : {
                done: !1,
                value: bb[kb++]
              }
            },
            e: function(bb) {
              throw bb
            },
            f: Wb
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var ab, Tb = !0,
        Ub = !1;
      return {
        s: function() {
          sb = sb.call(bb)
        },
        n: function() {
          var bb = sb.next();
          return Tb = bb.done, bb
        },
        e: function(bb) {
          Ub = !0, ab = bb
        },
        f: function() {
          try {
            Tb || null == sb.return || sb.return()
          } finally {
            if (Ub) throw ab
          }
        }
      }
    }

    function nb(bb, cb) {
      (null == cb || cb > bb.length) && (cb = bb.length);
      for (var sb = 0, kb = new Array(cb); sb < cb; sb++) kb[sb] = bb[sb];
      return kb
    }

    function mb(bb, cb) {
      for (var sb = 0; sb < cb.length; sb++) {
        var kb = cb[sb];
        kb.enumerable = kb.enumerable || !1, kb.configurable = !0, "value" in kb && (kb.writable = !0), Object.defineProperty(bb, kb.key, kb)
      }
    }

    function lb(bb, cb) {
      return lb = Object.setPrototypeOf || function(bb, cb) {
        return bb.__proto__ = cb, bb
      }, lb(bb, cb)
    }

    function Qb(bb) {
      var cb = function() {
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
        var sb, Wb = Cb(bb);
        if (cb) {
          var ab = Cb(this).constructor;
          sb = Reflect.construct(Wb, arguments, ab)
        } else sb = Wb.apply(this, arguments);
        return function(bb, cb) {
          if (cb && ("object" === kb(cb) || "function" === typeof cb)) return cb;
          if (void 0 !== cb) throw new TypeError("Derived constructors may only return object or undefined");
          return eb(bb)
        }(this, sb)
      }
    }

    function eb(bb) {
      if (void 0 === bb) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return bb
    }

    function Cb(bb) {
      return Cb = Object.setPrototypeOf ? Object.getPrototypeOf : function(bb) {
        return bb.__proto__ || Object.getPrototypeOf(bb)
      }, Cb(bb)
    }

    function Nb(bb, cb, sb) {
      return cb in bb ? Object.defineProperty(bb, cb, {
        value: sb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[cb] = sb, bb
    }
    var Vb = {
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
      Lb = function(bb) {
        ! function(bb, cb) {
          if ("function" !== typeof cb && null !== cb) throw new TypeError("Super expression must either be null or a function");
          Object.defineProperty(bb, "prototype", {
            value: Object.create(cb && cb.prototype, {
              constructor: {
                value: bb,
                writable: !0,
                configurable: !0
              }
            }),
            writable: !1
          }), cb && lb(bb, cb)
        }(Tb, bb);
        var cb, sb, kb, ab = Qb(Tb);

        function Tb(bb, cb) {
          var sb;
          return function(bb, cb) {
            if (!(bb instanceof cb)) throw new TypeError("Cannot call a class as a function")
          }(this, Tb), Nb(eb(sb = ab.call(this, bb, cb)), "handleFormat", (function(bb) {
            var cb = sb.props.format;
            return cb ? cb(bb) : bb
          })), Nb(eb(sb), "handleUpdate", (function() {
            if (sb.slider) {
              var bb = sb.props.orientation,
                cb = (0, Ib.capitalize)(Vb.orientation[bb].dimension),
                kb = sb.slider["offset".concat(cb)],
                Wb = sb.handle["offset".concat(cb)];
              sb.setState({
                limit: kb - Wb,
                grab: Wb / 2
              })
            }
          })), Nb(eb(sb), "handleStart", (function(bb) {
            var cb = sb.props.onChangeStart;
            document.addEventListener("mousemove", sb.handleDrag), document.addEventListener("mouseup", sb.handleEnd), sb.setState({
              active: !0
            }, (function() {
              cb && cb(bb)
            }))
          })), Nb(eb(sb), "handleDrag", (function(bb) {
            bb.stopPropagation();
            var cb = sb.props.onChange,
              kb = bb.target,
              Wb = kb.className,
              ab = kb.classList,
              Tb = kb.dataset;
            if (cb && "rangeslider__labels" !== Wb) {
              var Ub = sb.position(bb);
              ab && ab.contains("rangeslider__label-item") && Tb.value && (Ub = parseFloat(Tb.value)), cb && cb(Ub, bb)
            }
          })), Nb(eb(sb), "handleEnd", (function(bb) {
            var cb = sb.props.onChangeComplete;
            sb.setState({
              active: !1
            }, (function() {
              cb && cb(bb)
            })), document.removeEventListener("mousemove", sb.handleDrag), document.removeEventListener("mouseup", sb.handleEnd)
          })), Nb(eb(sb), "handleKeyDown", (function(bb) {
            bb.preventDefault();
            var cb, kb = bb.keyCode,
              Wb = sb.props,
              ab = Wb.value,
              Tb = Wb.min,
              Ub = Wb.max,
              Ib = Wb.step,
              Hb = Wb.onChange;
            switch (kb) {
              case 38:
              case 39:
                cb = ab + Ib > Ub ? Ub : ab + Ib, Hb && Hb(cb, bb);
                break;
              case 37:
              case 40:
                cb = ab - Ib < Tb ? Tb : ab - Ib, Hb && Hb(cb, bb)
            }
          })), Nb(eb(sb), "getPositionFromValue", (function(bb) {
            var cb = sb.state.limit,
              kb = sb.props,
              Wb = kb.min,
              ab = (bb - Wb) / (kb.max - Wb);
            return Math.round(ab * cb)
          })), Nb(eb(sb), "getValueFromPosition", (function(bb) {
            var cb = sb.state.limit,
              kb = sb.props,
              Wb = kb.orientation,
              ab = kb.min,
              Tb = kb.max,
              Ub = kb.step,
              Hb = (0, Ib.clamp)(bb, 0, cb) / (cb || 1),
              fb = Ub * Math.round(Hb * (Tb - ab) / Ub),
              Mb = "horizontal" === Wb ? fb + ab : Tb - fb;
            return (0, Ib.clamp)(Mb, ab, Tb)
          })), Nb(eb(sb), "position", (function(bb) {
            var cb = sb.state.grab,
              kb = sb.props,
              Wb = kb.orientation,
              ab = kb.reverse,
              Tb = sb.slider,
              Ub = Vb.orientation[Wb].coordinate,
              Hb = ab ? Vb.orientation[Wb].reverseDirection : Vb.orientation[Wb].direction,
              fb = "client".concat((0, Ib.capitalize)(Ub)),
              Mb = bb.touches ? bb.touches[0][fb] : bb[fb],
              Xb = Tb.getBoundingClientRect()[Hb],
              nb = ab ? Xb - Mb - cb : Mb - Xb - cb;
            return sb.getValueFromPosition(nb)
          })), Nb(eb(sb), "coordinates", (function(bb) {
            var cb = sb.state,
              kb = cb.limit,
              Wb = cb.grab,
              ab = sb.props.orientation,
              Tb = sb.getValueFromPosition(bb),
              Ub = sb.getPositionFromValue(Tb),
              Ib = "horizontal" === ab ? Ub + Wb : Ub;
            return {
              fill: "horizontal" === ab ? Ib : kb - Ib,
              handle: Ib,
              label: Ib
            }
          })), Nb(eb(sb), "renderLabels", (function(bb) {
            return (0, Hb.jsx)("ul", {
              ref: function(bb) {
                sb.labels = bb
              },
              className: (0, Wb.default)("rangeslider__labels"),
              children: bb
            })
          })), sb.state = {
            active: !1,
            limit: 0,
            grab: 0
          }, sb
        }
        return cb = Tb, (sb = [{
          key: "componentDidMount",
          value: function() {
            this.handleUpdate(), new Ub.default(this.handleUpdate).observe(this.slider)
          }
        }, {
          key: "render",
          value: function() {
            var bb = this,
              cb = this.props,
              sb = cb.value,
              kb = cb.orientation,
              ab = cb.className,
              Tb = cb.tooltip,
              Ub = cb.reverse,
              Ib = cb.labels,
              fb = cb.min,
              Mb = cb.max,
              nb = cb.handleLabel,
              mb = this.state.active,
              lb = Vb.orientation[kb].dimension,
              Qb = Ub ? Vb.orientation[kb].reverseDirection : Vb.orientation[kb].direction,
              eb = this.getPositionFromValue(sb),
              Cb = this.coordinates(eb),
              Lb = Nb({}, lb, "".concat(Cb.fill, "px")),
              ub = Nb({}, Qb, "".concat(Cb.handle, "px")),
              Yb = Tb && mb,
              hb = [],
              Jb = Object.keys(Ib);
            if (Jb.length > 0) {
              var gb, Bb = Xb(Jb = Jb.sort((function(bb, cb) {
                return Ub ? bb - cb : cb - bb
              })));
              try {
                for (Bb.s(); !(gb = Bb.n()).done;) {
                  var tb = gb.value,
                    yb = this.getPositionFromValue(tb),
                    Pb = this.coordinates(yb),
                    Db = Nb({}, Qb, "".concat(Pb.label, "px"));
                  hb.push((0, Hb.jsx)("li", {
                    className: (0, Wb.default)("rangeslider__label-item"),
                    "data-value": tb,
                    onMouseDown: this.handleDrag,
                    onTouchStart: this.handleStart,
                    onTouchEnd: this.handleEnd,
                    style: Db,
                    children: this.props.labels[tb]
                  }, tb))
                }
              } catch (Eb) {
                Bb.e(Eb)
              } finally {
                Bb.f()
              }
            }
            return (0, Hb.jsxs)("div", {
              ref: function(cb) {
                bb.slider = cb
              },
              className: (0, Wb.default)("rangeslider", "rangeslider-".concat(kb), {
                "rangeslider-reverse": Ub
              }, ab),
              onMouseDown: this.handleDrag,
              onMouseUp: this.handleEnd,
              onTouchStart: this.handleStart,
              onTouchEnd: this.handleEnd,
              "aria-valuemin": fb,
              "aria-valuemax": Mb,
              "aria-valuenow": sb,
              "aria-orientation": kb,
              children: [(0, Hb.jsx)("div", {
                className: "rangeslider__fill",
                style: Lb
              }), (0, Hb.jsxs)("div", {
                ref: function(cb) {
                  bb.handle = cb
                },
                className: "rangeslider__handle",
                onMouseDown: this.handleStart,
                onTouchMove: this.handleDrag,
                onTouchEnd: this.handleEnd,
                onKeyDown: this.handleKeyDown,
                style: ub,
                tabIndex: 0,
                children: [Yb && (0, Hb.jsx)("div", {
                  ref: function(cb) {
                    bb.tooltip = cb
                  },
                  className: "rangeslider__handle-tooltip",
                  children: (0, Hb.jsx)("span", {
                    children: this.handleFormat(sb)
                  })
                }), (0, Hb.jsx)("div", {
                  className: "rangeslider__handle-label",
                  children: nb
                })]
              }), Ib && this.renderLabels(hb)]
            })
          }
        }]) && mb(cb.prototype, sb), kb && mb(cb, kb), Object.defineProperty(cb, "prototype", {
          writable: !1
        }), Tb
      }(ab.Component);
    Nb(Lb, "propTypes", {
      min: Tb.default.number,
      max: Tb.default.number,
      step: Tb.default.number,
      value: Tb.default.number,
      orientation: Tb.default.string,
      tooltip: Tb.default.bool,
      reverse: Tb.default.bool,
      labels: Tb.default.object,
      handleLabel: Tb.default.string,
      format: Tb.default.func,
      onChangeStart: Tb.default.func,
      onChange: Tb.default.func,
      onChangeComplete: Tb.default.func
    }), Nb(Lb, "defaultProps", {
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
    var ub = Lb;
    cb.default = ub
  },
  4709: (bb, cb, sb) => {
    var kb;
    cb.e = void 0;
    var Wb = ((kb = sb(4715)) && kb.__esModule ? kb : {
      default: kb
    }).default;
    cb.e = Wb
  },
  4726: (bb, cb) => {
    Object.defineProperty(cb, "__esModule", {
      value: !0
    }), cb.capitalize = function(bb) {
      return bb.charAt(0).toUpperCase() + bb.substr(1)
    }, cb.clamp = function(bb, cb, sb) {
      return Math.min(Math.max(bb, cb), sb)
    }
  },
  4676: (bb, cb, sb) => {
    var kb = sb(4684);

    function Wb() {}

    function ab() {}
    ab.resetWarningCache = Wb, bb.exports = function() {
      function bb(bb, cb, sb, Wb, ab, Tb) {
        if (Tb !== kb) {
          var Ub = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw Ub.name = "Invariant Violation", Ub
        }
      }

      function cb() {
        return bb
      }
      bb.isRequired = bb;
      var sb = {
        array: bb,
        bigint: bb,
        bool: bb,
        func: bb,
        number: bb,
        object: bb,
        string: bb,
        symbol: bb,
        any: bb,
        arrayOf: cb,
        element: bb,
        elementType: bb,
        instanceOf: cb,
        node: bb,
        objectOf: cb,
        oneOf: cb,
        oneOfType: cb,
        shape: cb,
        exact: cb,
        checkPropTypes: ab,
        resetWarningCache: Wb
      };
      return sb.PropTypes = sb, sb
    }
  },
  4669: (bb, cb, sb) => {
    bb.exports = sb(4676)()
  },
  4684: bb => {
    bb.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  4721: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      default: () => hb
    });
    var kb = function() {
        if ("undefined" !== typeof Map) return Map;

        function bb(bb, cb) {
          var sb = -1;
          return bb.some((function(bb, kb) {
            return bb[0] === cb && (sb = kb, !0)
          })), sb
        }
        return function() {
          function cb() {
            this.__entries__ = []
          }
          return Object.defineProperty(cb.prototype, "size", {
            get: function() {
              return this.__entries__.length
            },
            enumerable: !0,
            configurable: !0
          }), cb.prototype.get = function(cb) {
            var sb = bb(this.__entries__, cb),
              kb = this.__entries__[sb];
            return kb && kb[1]
          }, cb.prototype.set = function(cb, sb) {
            var kb = bb(this.__entries__, cb);
            ~kb ? this.__entries__[kb][1] = sb : this.__entries__.push([cb, sb])
          }, cb.prototype.delete = function(cb) {
            var sb = this.__entries__,
              kb = bb(sb, cb);
            ~kb && sb.splice(kb, 1)
          }, cb.prototype.has = function(cb) {
            return !!~bb(this.__entries__, cb)
          }, cb.prototype.clear = function() {
            this.__entries__.splice(0)
          }, cb.prototype.forEach = function(bb, cb) {
            void 0 === cb && (cb = null);
            for (var sb = 0, kb = this.__entries__; sb < kb.length; sb++) {
              var Wb = kb[sb];
              bb.call(cb, Wb[1], Wb[0])
            }
          }, cb
        }()
      }(),
      Wb = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document,
      ab = "undefined" !== typeof sb.g && sb.g.Math === Math ? sb.g : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")(),
      Tb = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(ab) : function(bb) {
        return setTimeout((function() {
          return bb(Date.now())
        }), 1e3 / 60)
      };
    var Ub = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
      Ib = "undefined" !== typeof MutationObserver,
      Hb = function() {
        function bb() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(bb, cb) {
            var sb = !1,
              kb = !1,
              Wb = 0;

            function ab() {
              sb && (sb = !1, bb()), kb && Ib()
            }

            function Ub() {
              Tb(ab)
            }

            function Ib() {
              var bb = Date.now();
              if (sb) {
                if (bb - Wb < 2) return;
                kb = !0
              } else sb = !0, kb = !1, setTimeout(Ub, cb);
              Wb = bb
            }
            return Ib
          }(this.refresh.bind(this), 20)
        }
        return bb.prototype.addObserver = function(bb) {
          ~this.observers_.indexOf(bb) || this.observers_.push(bb), this.connected_ || this.connect_()
        }, bb.prototype.removeObserver = function(bb) {
          var cb = this.observers_,
            sb = cb.indexOf(bb);
          ~sb && cb.splice(sb, 1), !cb.length && this.connected_ && this.disconnect_()
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
          Wb && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Ib ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
          })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, bb.prototype.disconnect_ = function() {
          Wb && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, bb.prototype.onTransitionEnd_ = function(bb) {
          var cb = bb.propertyName,
            sb = void 0 === cb ? "" : cb;
          Ub.some((function(bb) {
            return !!~sb.indexOf(bb)
          })) && this.refresh()
        }, bb.getInstance = function() {
          return this.instance_ || (this.instance_ = new bb), this.instance_
        }, bb.instance_ = null, bb
      }(),
      fb = function(bb, cb) {
        for (var sb = 0, kb = Object.keys(cb); sb < kb.length; sb++) {
          var Wb = kb[sb];
          Object.defineProperty(bb, Wb, {
            value: cb[Wb],
            enumerable: !1,
            writable: !1,
            configurable: !0
          })
        }
        return bb
      },
      Mb = function(bb) {
        return bb && bb.ownerDocument && bb.ownerDocument.defaultView || ab
      },
      Xb = Cb(0, 0, 0, 0);

    function nb(bb) {
      return parseFloat(bb) || 0
    }

    function mb(bb) {
      for (var cb = [], sb = 1; sb < arguments.length; sb++) cb[sb - 1] = arguments[sb];
      return cb.reduce((function(cb, sb) {
        return cb + nb(bb["border-" + sb + "-width"])
      }), 0)
    }

    function lb(bb) {
      var cb = bb.clientWidth,
        sb = bb.clientHeight;
      if (!cb && !sb) return Xb;
      var kb = Mb(bb).getComputedStyle(bb),
        Wb = function(bb) {
          for (var cb = {}, sb = 0, kb = ["top", "right", "bottom", "left"]; sb < kb.length; sb++) {
            var Wb = kb[sb],
              ab = bb["padding-" + Wb];
            cb[Wb] = nb(ab)
          }
          return cb
        }(kb),
        ab = Wb.left + Wb.right,
        Tb = Wb.top + Wb.bottom,
        Ub = nb(kb.width),
        Ib = nb(kb.height);
      if ("border-box" === kb.boxSizing && (Math.round(Ub + ab) !== cb && (Ub -= mb(kb, "left", "right") + ab), Math.round(Ib + Tb) !== sb && (Ib -= mb(kb, "top", "bottom") + Tb)), ! function(bb) {
          return bb === Mb(bb).document.documentElement
        }(bb)) {
        var Hb = Math.round(Ub + ab) - cb,
          fb = Math.round(Ib + Tb) - sb;
        1 !== Math.abs(Hb) && (Ub -= Hb), 1 !== Math.abs(fb) && (Ib -= fb)
      }
      return Cb(Wb.left, Wb.top, Ub, Ib)
    }
    var Qb = "undefined" !== typeof SVGGraphicsElement ? function(bb) {
      return bb instanceof Mb(bb).SVGGraphicsElement
    } : function(bb) {
      return bb instanceof Mb(bb).SVGElement && "function" === typeof bb.getBBox
    };

    function eb(bb) {
      return Wb ? Qb(bb) ? function(bb) {
        var cb = bb.getBBox();
        return Cb(0, 0, cb.width, cb.height)
      }(bb) : lb(bb) : Xb
    }

    function Cb(bb, cb, sb, kb) {
      return {
        x: bb,
        y: cb,
        width: sb,
        height: kb
      }
    }
    var Nb = function() {
        function bb(bb) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Cb(0, 0, 0, 0), this.target = bb
        }
        return bb.prototype.isActive = function() {
          var bb = eb(this.target);
          return this.contentRect_ = bb, bb.width !== this.broadcastWidth || bb.height !== this.broadcastHeight
        }, bb.prototype.broadcastRect = function() {
          var bb = this.contentRect_;
          return this.broadcastWidth = bb.width, this.broadcastHeight = bb.height, bb
        }, bb
      }(),
      Vb = function(bb, cb) {
        var sb = function(bb) {
          var cb = bb.x,
            sb = bb.y,
            kb = bb.width,
            Wb = bb.height,
            ab = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
            Tb = Object.create(ab.prototype);
          return fb(Tb, {
            x: cb,
            y: sb,
            width: kb,
            height: Wb,
            top: sb,
            right: cb + kb,
            bottom: Wb + sb,
            left: cb
          }), Tb
        }(cb);
        fb(this, {
          target: bb,
          contentRect: sb
        })
      },
      Lb = function() {
        function bb(bb, cb, sb) {
          if (this.activeObservations_ = [], this.observations_ = new kb, "function" !== typeof bb) throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = bb, this.controller_ = cb, this.callbackCtx_ = sb
        }
        return bb.prototype.observe = function(bb) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(bb instanceof Mb(bb).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var cb = this.observations_;
            cb.has(bb) || (cb.set(bb, new Nb(bb)), this.controller_.addObserver(this), this.controller_.refresh())
          }
        }, bb.prototype.unobserve = function(bb) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(bb instanceof Mb(bb).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var cb = this.observations_;
            cb.has(bb) && (cb.delete(bb), cb.size || this.controller_.removeObserver(this))
          }
        }, bb.prototype.disconnect = function() {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, bb.prototype.gatherActive = function() {
          var bb = this;
          this.clearActive(), this.observations_.forEach((function(cb) {
            cb.isActive() && bb.activeObservations_.push(cb)
          }))
        }, bb.prototype.broadcastActive = function() {
          if (this.hasActive()) {
            var bb = this.callbackCtx_,
              cb = this.activeObservations_.map((function(bb) {
                return new Vb(bb.target, bb.broadcastRect())
              }));
            this.callback_.call(bb, cb, bb), this.clearActive()
          }
        }, bb.prototype.clearActive = function() {
          this.activeObservations_.splice(0)
        }, bb.prototype.hasActive = function() {
          return this.activeObservations_.length > 0
        }, bb
      }(),
      ub = "undefined" !== typeof WeakMap ? new WeakMap : new kb,
      Yb = function bb(cb) {
        if (!(this instanceof bb)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var sb = Hb.getInstance(),
          kb = new Lb(cb, sb, this);
        ub.set(this, kb)
      };
    ["observe", "unobserve", "disconnect"].forEach((function(bb) {
      Yb.prototype[bb] = function() {
        var cb;
        return (cb = ub.get(this))[bb].apply(cb, arguments)
      }
    }));
    const hb = "undefined" !== typeof ab.ResizeObserver ? ab.ResizeObserver : Yb
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);