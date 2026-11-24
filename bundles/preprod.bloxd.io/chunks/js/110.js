export const id = 110;
export const ids = [110];
export const modules = {
  5127: (pp, ip, cp) => {
    function Op(pp) {
      return Op = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
        return typeof pp
      } : function(pp) {
        return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
      }, Op(pp)
    }
    Object.defineProperty(ip, "__esModule", {
      value: !0
    }), ip.default = void 0;
    var op = Ap(cp(1049)),
      Ip = function(pp, ip) {
        if (!ip && pp && pp.__esModule) return pp;
        if (null === pp || "object" !== Op(pp) && "function" !== typeof pp) return {
          default: pp
        };
        var cp = Dp(ip);
        if (cp && cp.has(pp)) return cp.get(pp);
        var op = {},
          Ip = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var Sp in pp)
          if ("default" !== Sp && Object.prototype.hasOwnProperty.call(pp, Sp)) {
            var xp = Ip ? Object.getOwnPropertyDescriptor(pp, Sp) : null;
            xp && (xp.get || xp.set) ? Object.defineProperty(op, Sp, xp) : op[Sp] = pp[Sp]
          } op.default = pp, cp && cp.set(pp, op);
        return op
      }(cp(62)),
      Sp = Ap(cp(5081)),
      xp = Ap(cp(5129)),
      Lp = cp(5137),
      Yp = cp(1112);

    function Dp(pp) {
      if ("function" !== typeof WeakMap) return null;
      var ip = new WeakMap,
        cp = new WeakMap;
      return (Dp = function(pp) {
        return pp ? cp : ip
      })(pp)
    }

    function Ap(pp) {
      return pp && pp.__esModule ? pp : {
        default: pp
      }
    }

    function Pp(pp, ip) {
      var cp = "undefined" !== typeof Symbol && pp[Symbol.iterator] || pp["@@iterator"];
      if (!cp) {
        if (Array.isArray(pp) || (cp = function(pp, ip) {
            if (!pp) return;
            if ("string" === typeof pp) return Wp(pp, ip);
            var cp = Object.prototype.toString.call(pp).slice(8, -1);
            "Object" === cp && pp.constructor && (cp = pp.constructor.name);
            if ("Map" === cp || "Set" === cp) return Array.from(pp);
            if ("Arguments" === cp || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cp)) return Wp(pp, ip)
          }(pp)) || ip && pp && "number" === typeof pp.length) {
          cp && (pp = cp);
          var Op = 0,
            op = function() {};
          return {
            s: op,
            n: function() {
              return Op >= pp.length ? {
                done: !0
              } : {
                done: !1,
                value: pp[Op++]
              }
            },
            e: function(pp) {
              throw pp
            },
            f: op
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var Ip, Sp = !0,
        xp = !1;
      return {
        s: function() {
          cp = cp.call(pp)
        },
        n: function() {
          var pp = cp.next();
          return Sp = pp.done, pp
        },
        e: function(pp) {
          xp = !0, Ip = pp
        },
        f: function() {
          try {
            Sp || null == cp.return || cp.return()
          } finally {
            if (xp) throw Ip
          }
        }
      }
    }

    function Wp(pp, ip) {
      (null == ip || ip > pp.length) && (ip = pp.length);
      for (var cp = 0, Op = new Array(ip); cp < ip; cp++) Op[cp] = pp[cp];
      return Op
    }

    function yp(pp, ip) {
      for (var cp = 0; cp < ip.length; cp++) {
        var Op = ip[cp];
        Op.enumerable = Op.enumerable || !1, Op.configurable = !0, "value" in Op && (Op.writable = !0), Object.defineProperty(pp, Op.key, Op)
      }
    }

    function Up(pp, ip) {
      return Up = Object.setPrototypeOf || function(pp, ip) {
        return pp.__proto__ = ip, pp
      }, Up(pp, ip)
    }

    function wp(pp) {
      var ip = function() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (pp) {
          return !1
        }
      }();
      return function() {
        var cp, op = tp(pp);
        if (ip) {
          var Ip = tp(this).constructor;
          cp = Reflect.construct(op, arguments, Ip)
        } else cp = op.apply(this, arguments);
        return function(pp, ip) {
          if (ip && ("object" === Op(ip) || "function" === typeof ip)) return ip;
          if (void 0 !== ip) throw new TypeError("Derived constructors may only return object or undefined");
          return vp(pp)
        }(this, cp)
      }
    }

    function vp(pp) {
      if (void 0 === pp) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return pp
    }

    function tp(pp) {
      return tp = Object.setPrototypeOf ? Object.getPrototypeOf : function(pp) {
        return pp.__proto__ || Object.getPrototypeOf(pp)
      }, tp(pp)
    }

    function Hp(pp, ip, cp) {
      return ip in pp ? Object.defineProperty(pp, ip, {
        value: cp,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : pp[ip] = cp, pp
    }
    var dp = {
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
      ep = function(pp) {
        ! function(pp, ip) {
          if ("function" !== typeof ip && null !== ip) throw new TypeError("Super expression must either be null or a function");
          Object.defineProperty(pp, "prototype", {
            value: Object.create(ip && ip.prototype, {
              constructor: {
                value: pp,
                writable: !0,
                configurable: !0
              }
            }),
            writable: !1
          }), ip && Up(pp, ip)
        }(Sp, pp);
        var ip, cp, Op, Ip = wp(Sp);

        function Sp(pp, ip) {
          var cp;
          return function(pp, ip) {
            if (!(pp instanceof ip)) throw new TypeError("Cannot call a class as a function")
          }(this, Sp), Hp(vp(cp = Ip.call(this, pp, ip)), "handleFormat", (function(pp) {
            var ip = cp.props.format;
            return ip ? ip(pp) : pp
          })), Hp(vp(cp), "handleUpdate", (function() {
            if (cp.slider) {
              var pp = cp.props.orientation,
                ip = (0, Lp.capitalize)(dp.orientation[pp].dimension),
                Op = cp.slider["offset".concat(ip)],
                op = cp.handle["offset".concat(ip)];
              cp.setState({
                limit: Op - op,
                grab: op / 2
              })
            }
          })), Hp(vp(cp), "handleStart", (function(pp) {
            var ip = cp.props.onChangeStart;
            document.addEventListener("mousemove", cp.handleDrag), document.addEventListener("mouseup", cp.handleEnd), cp.setState({
              active: !0
            }, (function() {
              ip && ip(pp)
            }))
          })), Hp(vp(cp), "handleDrag", (function(pp) {
            pp.stopPropagation();
            var ip = cp.props.onChange,
              Op = pp.target,
              op = Op.className,
              Ip = Op.classList,
              Sp = Op.dataset;
            if (ip && "rangeslider__labels" !== op) {
              var xp = cp.position(pp);
              Ip && Ip.contains("rangeslider__label-item") && Sp.value && (xp = parseFloat(Sp.value)), ip && ip(xp, pp)
            }
          })), Hp(vp(cp), "handleEnd", (function(pp) {
            var ip = cp.props.onChangeComplete;
            cp.setState({
              active: !1
            }, (function() {
              ip && ip(pp)
            })), document.removeEventListener("mousemove", cp.handleDrag), document.removeEventListener("mouseup", cp.handleEnd)
          })), Hp(vp(cp), "handleKeyDown", (function(pp) {
            pp.preventDefault();
            var ip, Op = pp.keyCode,
              op = cp.props,
              Ip = op.value,
              Sp = op.min,
              xp = op.max,
              Lp = op.step,
              Yp = op.onChange;
            switch (Op) {
              case 38:
              case 39:
                ip = Ip + Lp > xp ? xp : Ip + Lp, Yp && Yp(ip, pp);
                break;
              case 37:
              case 40:
                ip = Ip - Lp < Sp ? Sp : Ip - Lp, Yp && Yp(ip, pp)
            }
          })), Hp(vp(cp), "getPositionFromValue", (function(pp) {
            var ip = cp.state.limit,
              Op = cp.props,
              op = Op.min,
              Ip = (pp - op) / (Op.max - op);
            return Math.round(Ip * ip)
          })), Hp(vp(cp), "getValueFromPosition", (function(pp) {
            var ip = cp.state.limit,
              Op = cp.props,
              op = Op.orientation,
              Ip = Op.min,
              Sp = Op.max,
              xp = Op.step,
              Yp = (0, Lp.clamp)(pp, 0, ip) / (ip || 1),
              Dp = xp * Math.round(Yp * (Sp - Ip) / xp),
              Ap = "horizontal" === op ? Dp + Ip : Sp - Dp;
            return (0, Lp.clamp)(Ap, Ip, Sp)
          })), Hp(vp(cp), "position", (function(pp) {
            var ip = cp.state.grab,
              Op = cp.props,
              op = Op.orientation,
              Ip = Op.reverse,
              Sp = cp.slider,
              xp = dp.orientation[op].coordinate,
              Yp = Ip ? dp.orientation[op].reverseDirection : dp.orientation[op].direction,
              Dp = "client".concat((0, Lp.capitalize)(xp)),
              Ap = pp.touches ? pp.touches[0][Dp] : pp[Dp],
              Pp = Sp.getBoundingClientRect()[Yp],
              Wp = Ip ? Pp - Ap - ip : Ap - Pp - ip;
            return cp.getValueFromPosition(Wp)
          })), Hp(vp(cp), "coordinates", (function(pp) {
            var ip = cp.state,
              Op = ip.limit,
              op = ip.grab,
              Ip = cp.props.orientation,
              Sp = cp.getValueFromPosition(pp),
              xp = cp.getPositionFromValue(Sp),
              Lp = "horizontal" === Ip ? xp + op : xp;
            return {
              fill: "horizontal" === Ip ? Lp : Op - Lp,
              handle: Lp,
              label: Lp
            }
          })), Hp(vp(cp), "renderLabels", (function(pp) {
            return (0, Yp.jsx)("ul", {
              ref: function(pp) {
                cp.labels = pp
              },
              className: (0, op.default)("rangeslider__labels"),
              children: pp
            })
          })), cp.state = {
            active: !1,
            limit: 0,
            grab: 0
          }, cp
        }
        return ip = Sp, (cp = [{
          key: "componentDidMount",
          value: function() {
            this.handleUpdate(), new xp.default(this.handleUpdate).observe(this.slider)
          }
        }, {
          key: "render",
          value: function() {
            var pp = this,
              ip = this.props,
              cp = ip.value,
              Op = ip.orientation,
              Ip = ip.className,
              Sp = ip.tooltip,
              xp = ip.reverse,
              Lp = ip.labels,
              Dp = ip.min,
              Ap = ip.max,
              Wp = ip.handleLabel,
              yp = this.state.active,
              Up = dp.orientation[Op].dimension,
              wp = xp ? dp.orientation[Op].reverseDirection : dp.orientation[Op].direction,
              vp = this.getPositionFromValue(cp),
              tp = this.coordinates(vp),
              ep = Hp({}, Up, "".concat(tp.fill, "px")),
              jp = Hp({}, wp, "".concat(tp.handle, "px")),
              kp = Sp && yp,
              mp = [],
              Rp = Object.keys(Lp);
            if (Rp.length > 0) {
              var qp, Mp = Pp(Rp = Rp.sort((function(pp, ip) {
                return xp ? pp - ip : ip - pp
              })));
              try {
                for (Mp.s(); !(qp = Mp.n()).done;) {
                  var Cp = qp.value,
                    Ep = this.getPositionFromValue(Cp),
                    Xp = this.coordinates(Ep),
                    lp = Hp({}, wp, "".concat(Xp.label, "px"));
                  mp.push((0, Yp.jsx)("li", {
                    className: (0, op.default)("rangeslider__label-item"),
                    "data-value": Cp,
                    onMouseDown: this.handleDrag,
                    onTouchStart: this.handleStart,
                    onTouchEnd: this.handleEnd,
                    style: lp,
                    children: this.props.labels[Cp]
                  }, Cp))
                }
              } catch (Qp) {
                Mp.e(Qp)
              } finally {
                Mp.f()
              }
            }
            return (0, Yp.jsxs)("div", {
              ref: function(ip) {
                pp.slider = ip
              },
              className: (0, op.default)("rangeslider", "rangeslider-".concat(Op), {
                "rangeslider-reverse": xp
              }, Ip),
              onMouseDown: this.handleDrag,
              onMouseUp: this.handleEnd,
              onTouchStart: this.handleStart,
              onTouchEnd: this.handleEnd,
              "aria-valuemin": Dp,
              "aria-valuemax": Ap,
              "aria-valuenow": cp,
              "aria-orientation": Op,
              children: [(0, Yp.jsx)("div", {
                className: "rangeslider__fill",
                style: ep
              }), (0, Yp.jsxs)("div", {
                ref: function(ip) {
                  pp.handle = ip
                },
                className: "rangeslider__handle",
                onMouseDown: this.handleStart,
                onTouchMove: this.handleDrag,
                onTouchEnd: this.handleEnd,
                onKeyDown: this.handleKeyDown,
                style: jp,
                tabIndex: 0,
                children: [kp && (0, Yp.jsx)("div", {
                  ref: function(ip) {
                    pp.tooltip = ip
                  },
                  className: "rangeslider__handle-tooltip",
                  children: (0, Yp.jsx)("span", {
                    children: this.handleFormat(cp)
                  })
                }), (0, Yp.jsx)("div", {
                  className: "rangeslider__handle-label",
                  children: Wp
                })]
              }), Lp && this.renderLabels(mp)]
            })
          }
        }]) && yp(ip.prototype, cp), Op && yp(ip, Op), Object.defineProperty(ip, "prototype", {
          writable: !1
        }), Sp
      }(Ip.Component);
    Hp(ep, "propTypes", {
      min: Sp.default.number,
      max: Sp.default.number,
      step: Sp.default.number,
      value: Sp.default.number,
      orientation: Sp.default.string,
      tooltip: Sp.default.bool,
      reverse: Sp.default.bool,
      labels: Sp.default.object,
      handleLabel: Sp.default.string,
      format: Sp.default.func,
      onChangeStart: Sp.default.func,
      onChange: Sp.default.func,
      onChangeComplete: Sp.default.func
    }), Hp(ep, "defaultProps", {
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
    var jp = ep;
    ip.default = jp
  },
  5122: (pp, ip, cp) => {
    var Op;
    ip.b = void 0;
    var op = ((Op = cp(5127)) && Op.__esModule ? Op : {
      default: Op
    }).default;
    ip.b = op
  },
  5137: (pp, ip) => {
    Object.defineProperty(ip, "__esModule", {
      value: !0
    }), ip.capitalize = function(pp) {
      return pp.charAt(0).toUpperCase() + pp.substr(1)
    }, ip.clamp = function(pp, ip, cp) {
      return Math.min(Math.max(pp, ip), cp)
    }
  },
  5085: (pp, ip, cp) => {
    var Op = cp(5088);

    function op() {}

    function Ip() {}
    Ip.resetWarningCache = op, pp.exports = function() {
      function pp(pp, ip, cp, op, Ip, Sp) {
        if (Sp !== Op) {
          var xp = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw xp.name = "Invariant Violation", xp
        }
      }

      function ip() {
        return pp
      }
      pp.isRequired = pp;
      var cp = {
        array: pp,
        bigint: pp,
        bool: pp,
        func: pp,
        number: pp,
        object: pp,
        string: pp,
        symbol: pp,
        any: pp,
        arrayOf: ip,
        element: pp,
        elementType: pp,
        instanceOf: ip,
        node: pp,
        objectOf: ip,
        oneOf: ip,
        oneOfType: ip,
        shape: ip,
        exact: ip,
        checkPropTypes: Ip,
        resetWarningCache: op
      };
      return cp.PropTypes = cp, cp
    }
  },
  5081: (pp, ip, cp) => {
    pp.exports = cp(5085)()
  },
  5088: pp => {
    pp.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  5129: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      default: () => mp
    });
    var Op = function() {
        if ("undefined" !== typeof Map) return Map;

        function pp(pp, ip) {
          var cp = -1;
          return pp.some((function(pp, Op) {
            return pp[0] === ip && (cp = Op, !0)
          })), cp
        }
        return function() {
          function ip() {
            this.__entries__ = []
          }
          return Object.defineProperty(ip.prototype, "size", {
            get: function() {
              return this.__entries__.length
            },
            enumerable: !0,
            configurable: !0
          }), ip.prototype.get = function(ip) {
            var cp = pp(this.__entries__, ip),
              Op = this.__entries__[cp];
            return Op && Op[1]
          }, ip.prototype.set = function(ip, cp) {
            var Op = pp(this.__entries__, ip);
            ~Op ? this.__entries__[Op][1] = cp : this.__entries__.push([ip, cp])
          }, ip.prototype.delete = function(ip) {
            var cp = this.__entries__,
              Op = pp(cp, ip);
            ~Op && cp.splice(Op, 1)
          }, ip.prototype.has = function(ip) {
            return !!~pp(this.__entries__, ip)
          }, ip.prototype.clear = function() {
            this.__entries__.splice(0)
          }, ip.prototype.forEach = function(pp, ip) {
            void 0 === ip && (ip = null);
            for (var cp = 0, Op = this.__entries__; cp < Op.length; cp++) {
              var op = Op[cp];
              pp.call(ip, op[1], op[0])
            }
          }, ip
        }()
      }(),
      op = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document,
      Ip = "undefined" !== typeof cp.g && cp.g.Math === Math ? cp.g : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")(),
      Sp = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(Ip) : function(pp) {
        return setTimeout((function() {
          return pp(Date.now())
        }), 1e3 / 60)
      };
    var xp = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
      Lp = "undefined" !== typeof MutationObserver,
      Yp = function() {
        function pp() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(pp, ip) {
            var cp = !1,
              Op = !1,
              op = 0;

            function Ip() {
              cp && (cp = !1, pp()), Op && Lp()
            }

            function xp() {
              Sp(Ip)
            }

            function Lp() {
              var pp = Date.now();
              if (cp) {
                if (pp - op < 2) return;
                Op = !0
              } else cp = !0, Op = !1, setTimeout(xp, ip);
              op = pp
            }
            return Lp
          }(this.refresh.bind(this), 20)
        }
        return pp.prototype.addObserver = function(pp) {
          ~this.observers_.indexOf(pp) || this.observers_.push(pp), this.connected_ || this.connect_()
        }, pp.prototype.removeObserver = function(pp) {
          var ip = this.observers_,
            cp = ip.indexOf(pp);
          ~cp && ip.splice(cp, 1), !ip.length && this.connected_ && this.disconnect_()
        }, pp.prototype.refresh = function() {
          this.updateObservers_() && this.refresh()
        }, pp.prototype.updateObservers_ = function() {
          var pp = this.observers_.filter((function(pp) {
            return pp.gatherActive(), pp.hasActive()
          }));
          return pp.forEach((function(pp) {
            return pp.broadcastActive()
          })), pp.length > 0
        }, pp.prototype.connect_ = function() {
          op && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Lp ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
          })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, pp.prototype.disconnect_ = function() {
          op && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, pp.prototype.onTransitionEnd_ = function(pp) {
          var ip = pp.propertyName,
            cp = void 0 === ip ? "" : ip;
          xp.some((function(pp) {
            return !!~cp.indexOf(pp)
          })) && this.refresh()
        }, pp.getInstance = function() {
          return this.instance_ || (this.instance_ = new pp), this.instance_
        }, pp.instance_ = null, pp
      }(),
      Dp = function(pp, ip) {
        for (var cp = 0, Op = Object.keys(ip); cp < Op.length; cp++) {
          var op = Op[cp];
          Object.defineProperty(pp, op, {
            value: ip[op],
            enumerable: !1,
            writable: !1,
            configurable: !0
          })
        }
        return pp
      },
      Ap = function(pp) {
        return pp && pp.ownerDocument && pp.ownerDocument.defaultView || Ip
      },
      Pp = tp(0, 0, 0, 0);

    function Wp(pp) {
      return parseFloat(pp) || 0
    }

    function yp(pp) {
      for (var ip = [], cp = 1; cp < arguments.length; cp++) ip[cp - 1] = arguments[cp];
      return ip.reduce((function(ip, cp) {
        return ip + Wp(pp["border-" + cp + "-width"])
      }), 0)
    }

    function Up(pp) {
      var ip = pp.clientWidth,
        cp = pp.clientHeight;
      if (!ip && !cp) return Pp;
      var Op = Ap(pp).getComputedStyle(pp),
        op = function(pp) {
          for (var ip = {}, cp = 0, Op = ["top", "right", "bottom", "left"]; cp < Op.length; cp++) {
            var op = Op[cp],
              Ip = pp["padding-" + op];
            ip[op] = Wp(Ip)
          }
          return ip
        }(Op),
        Ip = op.left + op.right,
        Sp = op.top + op.bottom,
        xp = Wp(Op.width),
        Lp = Wp(Op.height);
      if ("border-box" === Op.boxSizing && (Math.round(xp + Ip) !== ip && (xp -= yp(Op, "left", "right") + Ip), Math.round(Lp + Sp) !== cp && (Lp -= yp(Op, "top", "bottom") + Sp)), ! function(pp) {
          return pp === Ap(pp).document.documentElement
        }(pp)) {
        var Yp = Math.round(xp + Ip) - ip,
          Dp = Math.round(Lp + Sp) - cp;
        1 !== Math.abs(Yp) && (xp -= Yp), 1 !== Math.abs(Dp) && (Lp -= Dp)
      }
      return tp(op.left, op.top, xp, Lp)
    }
    var wp = "undefined" !== typeof SVGGraphicsElement ? function(pp) {
      return pp instanceof Ap(pp).SVGGraphicsElement
    } : function(pp) {
      return pp instanceof Ap(pp).SVGElement && "function" === typeof pp.getBBox
    };

    function vp(pp) {
      return op ? wp(pp) ? function(pp) {
        var ip = pp.getBBox();
        return tp(0, 0, ip.width, ip.height)
      }(pp) : Up(pp) : Pp
    }

    function tp(pp, ip, cp, Op) {
      return {
        x: pp,
        y: ip,
        width: cp,
        height: Op
      }
    }
    var Hp = function() {
        function pp(pp) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = tp(0, 0, 0, 0), this.target = pp
        }
        return pp.prototype.isActive = function() {
          var pp = vp(this.target);
          return this.contentRect_ = pp, pp.width !== this.broadcastWidth || pp.height !== this.broadcastHeight
        }, pp.prototype.broadcastRect = function() {
          var pp = this.contentRect_;
          return this.broadcastWidth = pp.width, this.broadcastHeight = pp.height, pp
        }, pp
      }(),
      dp = function(pp, ip) {
        var cp = function(pp) {
          var ip = pp.x,
            cp = pp.y,
            Op = pp.width,
            op = pp.height,
            Ip = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
            Sp = Object.create(Ip.prototype);
          return Dp(Sp, {
            x: ip,
            y: cp,
            width: Op,
            height: op,
            top: cp,
            right: ip + Op,
            bottom: op + cp,
            left: ip
          }), Sp
        }(ip);
        Dp(this, {
          target: pp,
          contentRect: cp
        })
      },
      ep = function() {
        function pp(pp, ip, cp) {
          if (this.activeObservations_ = [], this.observations_ = new Op, "function" !== typeof pp) throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = pp, this.controller_ = ip, this.callbackCtx_ = cp
        }
        return pp.prototype.observe = function(pp) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(pp instanceof Ap(pp).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var ip = this.observations_;
            ip.has(pp) || (ip.set(pp, new Hp(pp)), this.controller_.addObserver(this), this.controller_.refresh())
          }
        }, pp.prototype.unobserve = function(pp) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(pp instanceof Ap(pp).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var ip = this.observations_;
            ip.has(pp) && (ip.delete(pp), ip.size || this.controller_.removeObserver(this))
          }
        }, pp.prototype.disconnect = function() {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, pp.prototype.gatherActive = function() {
          var pp = this;
          this.clearActive(), this.observations_.forEach((function(ip) {
            ip.isActive() && pp.activeObservations_.push(ip)
          }))
        }, pp.prototype.broadcastActive = function() {
          if (this.hasActive()) {
            var pp = this.callbackCtx_,
              ip = this.activeObservations_.map((function(pp) {
                return new dp(pp.target, pp.broadcastRect())
              }));
            this.callback_.call(pp, ip, pp), this.clearActive()
          }
        }, pp.prototype.clearActive = function() {
          this.activeObservations_.splice(0)
        }, pp.prototype.hasActive = function() {
          return this.activeObservations_.length > 0
        }, pp
      }(),
      jp = "undefined" !== typeof WeakMap ? new WeakMap : new Op,
      kp = function pp(ip) {
        if (!(this instanceof pp)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var cp = Yp.getInstance(),
          Op = new ep(ip, cp, this);
        jp.set(this, Op)
      };
    ["observe", "unobserve", "disconnect"].forEach((function(pp) {
      kp.prototype[pp] = function() {
        var ip;
        return (ip = jp.get(this))[pp].apply(ip, arguments)
      }
    }));
    const mp = "undefined" !== typeof Ip.ResizeObserver ? Ip.ResizeObserver : kp
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);