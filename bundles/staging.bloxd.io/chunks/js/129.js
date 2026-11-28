export const id = 129;
export const ids = [129];
export const modules = {
  5914: (dd, Od, md) => {
    function Wd(dd) {
      return Wd = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
        return typeof dd
      } : function(dd) {
        return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
      }, Wd(dd)
    }
    Object.defineProperty(Od, "__esModule", {
      value: !0
    }), Od.default = void 0;
    var Fd = td(md(1155)),
      Rd = function(dd, Od) {
        if (!Od && dd && dd.__esModule) return dd;
        if (null === dd || "object" !== Wd(dd) && "function" !== typeof dd) return {
          default: dd
        };
        var md = Qd(Od);
        if (md && md.has(dd)) return md.get(dd);
        var Fd = {},
          Rd = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var Xd in dd)
          if ("default" !== Xd && Object.prototype.hasOwnProperty.call(dd, Xd)) {
            var Kd = Rd ? Object.getOwnPropertyDescriptor(dd, Xd) : null;
            Kd && (Kd.get || Kd.set) ? Object.defineProperty(Fd, Xd, Kd) : Fd[Xd] = dd[Xd]
          } Fd.default = dd, md && md.set(dd, Fd);
        return Fd
      }(md(66)),
      Xd = td(md(5864)),
      Kd = td(md(5920)),
      hd = md(5928),
      vd = md(1341);

    function Qd(dd) {
      if ("function" !== typeof WeakMap) return null;
      var Od = new WeakMap,
        md = new WeakMap;
      return (Qd = function(dd) {
        return dd ? md : Od
      })(dd)
    }

    function td(dd) {
      return dd && dd.__esModule ? dd : {
        default: dd
      }
    }

    function od(dd, Od) {
      var md = "undefined" !== typeof Symbol && dd[Symbol.iterator] || dd["@@iterator"];
      if (!md) {
        if (Array.isArray(dd) || (md = function(dd, Od) {
            if (!dd) return;
            if ("string" === typeof dd) return Nd(dd, Od);
            var md = Object.prototype.toString.call(dd).slice(8, -1);
            "Object" === md && dd.constructor && (md = dd.constructor.name);
            if ("Map" === md || "Set" === md) return Array.from(dd);
            if ("Arguments" === md || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(md)) return Nd(dd, Od)
          }(dd)) || Od && dd && "number" === typeof dd.length) {
          md && (dd = md);
          var Wd = 0,
            Fd = function() {};
          return {
            s: Fd,
            n: function() {
              return Wd >= dd.length ? {
                done: !0
              } : {
                done: !1,
                value: dd[Wd++]
              }
            },
            e: function(dd) {
              throw dd
            },
            f: Fd
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var Rd, Xd = !0,
        Kd = !1;
      return {
        s: function() {
          md = md.call(dd)
        },
        n: function() {
          var dd = md.next();
          return Xd = dd.done, dd
        },
        e: function(dd) {
          Kd = !0, Rd = dd
        },
        f: function() {
          try {
            Xd || null == md.return || md.return()
          } finally {
            if (Kd) throw Rd
          }
        }
      }
    }

    function Nd(dd, Od) {
      (null == Od || Od > dd.length) && (Od = dd.length);
      for (var md = 0, Wd = new Array(Od); md < Od; md++) Wd[md] = dd[md];
      return Wd
    }

    function qd(dd, Od) {
      for (var md = 0; md < Od.length; md++) {
        var Wd = Od[md];
        Wd.enumerable = Wd.enumerable || !1, Wd.configurable = !0, "value" in Wd && (Wd.writable = !0), Object.defineProperty(dd, Wd.key, Wd)
      }
    }

    function Hd(dd, Od) {
      return Hd = Object.setPrototypeOf || function(dd, Od) {
        return dd.__proto__ = Od, dd
      }, Hd(dd, Od)
    }

    function yd(dd) {
      var Od = function() {
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
        var md, Fd = Td(dd);
        if (Od) {
          var Rd = Td(this).constructor;
          md = Reflect.construct(Fd, arguments, Rd)
        } else md = Fd.apply(this, arguments);
        return function(dd, Od) {
          if (Od && ("object" === Wd(Od) || "function" === typeof Od)) return Od;
          if (void 0 !== Od) throw new TypeError("Derived constructors may only return object or undefined");
          return bd(dd)
        }(this, md)
      }
    }

    function bd(dd) {
      if (void 0 === dd) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return dd
    }

    function Td(dd) {
      return Td = Object.setPrototypeOf ? Object.getPrototypeOf : function(dd) {
        return dd.__proto__ || Object.getPrototypeOf(dd)
      }, Td(dd)
    }

    function pd(dd, Od, md) {
      return Od in dd ? Object.defineProperty(dd, Od, {
        value: md,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : dd[Od] = md, dd
    }
    var Yd = {
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
      gd = function(dd) {
        ! function(dd, Od) {
          if ("function" !== typeof Od && null !== Od) throw new TypeError("Super expression must either be null or a function");
          Object.defineProperty(dd, "prototype", {
            value: Object.create(Od && Od.prototype, {
              constructor: {
                value: dd,
                writable: !0,
                configurable: !0
              }
            }),
            writable: !1
          }), Od && Hd(dd, Od)
        }(Xd, dd);
        var Od, md, Wd, Rd = yd(Xd);

        function Xd(dd, Od) {
          var md;
          return function(dd, Od) {
            if (!(dd instanceof Od)) throw new TypeError("Cannot call a class as a function")
          }(this, Xd), pd(bd(md = Rd.call(this, dd, Od)), "handleFormat", (function(dd) {
            var Od = md.props.format;
            return Od ? Od(dd) : dd
          })), pd(bd(md), "handleUpdate", (function() {
            if (md.slider) {
              var dd = md.props.orientation,
                Od = (0, hd.capitalize)(Yd.orientation[dd].dimension),
                Wd = md.slider["offset".concat(Od)],
                Fd = md.handle["offset".concat(Od)];
              md.setState({
                limit: Wd - Fd,
                grab: Fd / 2
              })
            }
          })), pd(bd(md), "handleStart", (function(dd) {
            var Od = md.props.onChangeStart;
            document.addEventListener("mousemove", md.handleDrag), document.addEventListener("mouseup", md.handleEnd), md.setState({
              active: !0
            }, (function() {
              Od && Od(dd)
            }))
          })), pd(bd(md), "handleDrag", (function(dd) {
            dd.stopPropagation();
            var Od = md.props.onChange,
              Wd = dd.target,
              Fd = Wd.className,
              Rd = Wd.classList,
              Xd = Wd.dataset;
            if (Od && "rangeslider__labels" !== Fd) {
              var Kd = md.position(dd);
              Rd && Rd.contains("rangeslider__label-item") && Xd.value && (Kd = parseFloat(Xd.value)), Od && Od(Kd, dd)
            }
          })), pd(bd(md), "handleEnd", (function(dd) {
            var Od = md.props.onChangeComplete;
            md.setState({
              active: !1
            }, (function() {
              Od && Od(dd)
            })), document.removeEventListener("mousemove", md.handleDrag), document.removeEventListener("mouseup", md.handleEnd)
          })), pd(bd(md), "handleKeyDown", (function(dd) {
            dd.preventDefault();
            var Od, Wd = dd.keyCode,
              Fd = md.props,
              Rd = Fd.value,
              Xd = Fd.min,
              Kd = Fd.max,
              hd = Fd.step,
              vd = Fd.onChange;
            switch (Wd) {
              case 38:
              case 39:
                Od = Rd + hd > Kd ? Kd : Rd + hd, vd && vd(Od, dd);
                break;
              case 37:
              case 40:
                Od = Rd - hd < Xd ? Xd : Rd - hd, vd && vd(Od, dd)
            }
          })), pd(bd(md), "getPositionFromValue", (function(dd) {
            var Od = md.state.limit,
              Wd = md.props,
              Fd = Wd.min,
              Rd = (dd - Fd) / (Wd.max - Fd);
            return Math.round(Rd * Od)
          })), pd(bd(md), "getValueFromPosition", (function(dd) {
            var Od = md.state.limit,
              Wd = md.props,
              Fd = Wd.orientation,
              Rd = Wd.min,
              Xd = Wd.max,
              Kd = Wd.step,
              vd = (0, hd.clamp)(dd, 0, Od) / (Od || 1),
              Qd = Kd * Math.round(vd * (Xd - Rd) / Kd),
              td = "horizontal" === Fd ? Qd + Rd : Xd - Qd;
            return (0, hd.clamp)(td, Rd, Xd)
          })), pd(bd(md), "position", (function(dd) {
            var Od = md.state.grab,
              Wd = md.props,
              Fd = Wd.orientation,
              Rd = Wd.reverse,
              Xd = md.slider,
              Kd = Yd.orientation[Fd].coordinate,
              vd = Rd ? Yd.orientation[Fd].reverseDirection : Yd.orientation[Fd].direction,
              Qd = "client".concat((0, hd.capitalize)(Kd)),
              td = dd.touches ? dd.touches[0][Qd] : dd[Qd],
              od = Xd.getBoundingClientRect()[vd],
              Nd = Rd ? od - td - Od : td - od - Od;
            return md.getValueFromPosition(Nd)
          })), pd(bd(md), "coordinates", (function(dd) {
            var Od = md.state,
              Wd = Od.limit,
              Fd = Od.grab,
              Rd = md.props.orientation,
              Xd = md.getValueFromPosition(dd),
              Kd = md.getPositionFromValue(Xd),
              hd = "horizontal" === Rd ? Kd + Fd : Kd;
            return {
              fill: "horizontal" === Rd ? hd : Wd - hd,
              handle: hd,
              label: hd
            }
          })), pd(bd(md), "renderLabels", (function(dd) {
            return (0, vd.jsx)("ul", {
              ref: function(dd) {
                md.labels = dd
              },
              className: (0, Fd.default)("rangeslider__labels"),
              children: dd
            })
          })), md.state = {
            active: !1,
            limit: 0,
            grab: 0
          }, md
        }
        return Od = Xd, (md = [{
          key: "componentDidMount",
          value: function() {
            this.handleUpdate(), new Kd.default(this.handleUpdate).observe(this.slider)
          }
        }, {
          key: "render",
          value: function() {
            var dd = this,
              Od = this.props,
              md = Od.value,
              Wd = Od.orientation,
              Rd = Od.className,
              Xd = Od.tooltip,
              Kd = Od.reverse,
              hd = Od.labels,
              Qd = Od.min,
              td = Od.max,
              Nd = Od.handleLabel,
              qd = this.state.active,
              Hd = Yd.orientation[Wd].dimension,
              yd = Kd ? Yd.orientation[Wd].reverseDirection : Yd.orientation[Wd].direction,
              bd = this.getPositionFromValue(md),
              Td = this.coordinates(bd),
              gd = pd({}, Hd, "".concat(Td.fill, "px")),
              wd = pd({}, yd, "".concat(Td.handle, "px")),
              Ed = Xd && qd,
              Jd = [],
              Ud = Object.keys(hd);
            if (Ud.length > 0) {
              var xd, Bd = od(Ud = Ud.sort((function(dd, Od) {
                return Kd ? dd - Od : Od - dd
              })));
              try {
                for (Bd.s(); !(xd = Bd.n()).done;) {
                  var Sd = xd.value,
                    sd = this.getPositionFromValue(Sd),
                    ud = this.coordinates(sd),
                    Vd = pd({}, yd, "".concat(ud.label, "px"));
                  Jd.push((0, vd.jsx)("li", {
                    className: (0, Fd.default)("rangeslider__label-item"),
                    "data-value": Sd,
                    onMouseDown: this.handleDrag,
                    onTouchStart: this.handleStart,
                    onTouchEnd: this.handleEnd,
                    style: Vd,
                    children: this.props.labels[Sd]
                  }, Sd))
                }
              } catch (Ad) {
                Bd.e(Ad)
              } finally {
                Bd.f()
              }
            }
            return (0, vd.jsxs)("div", {
              ref: function(Od) {
                dd.slider = Od
              },
              className: (0, Fd.default)("rangeslider", "rangeslider-".concat(Wd), {
                "rangeslider-reverse": Kd
              }, Rd),
              onMouseDown: this.handleDrag,
              onMouseUp: this.handleEnd,
              onTouchStart: this.handleStart,
              onTouchEnd: this.handleEnd,
              "aria-valuemin": Qd,
              "aria-valuemax": td,
              "aria-valuenow": md,
              "aria-orientation": Wd,
              children: [(0, vd.jsx)("div", {
                className: "rangeslider__fill",
                style: gd
              }), (0, vd.jsxs)("div", {
                ref: function(Od) {
                  dd.handle = Od
                },
                className: "rangeslider__handle",
                onMouseDown: this.handleStart,
                onTouchMove: this.handleDrag,
                onTouchEnd: this.handleEnd,
                onKeyDown: this.handleKeyDown,
                style: wd,
                tabIndex: 0,
                children: [Ed && (0, vd.jsx)("div", {
                  ref: function(Od) {
                    dd.tooltip = Od
                  },
                  className: "rangeslider__handle-tooltip",
                  children: (0, vd.jsx)("span", {
                    children: this.handleFormat(md)
                  })
                }), (0, vd.jsx)("div", {
                  className: "rangeslider__handle-label",
                  children: Nd
                })]
              }), hd && this.renderLabels(Jd)]
            })
          }
        }]) && qd(Od.prototype, md), Wd && qd(Od, Wd), Object.defineProperty(Od, "prototype", {
          writable: !1
        }), Xd
      }(Rd.Component);
    pd(gd, "propTypes", {
      min: Xd.default.number,
      max: Xd.default.number,
      step: Xd.default.number,
      value: Xd.default.number,
      orientation: Xd.default.string,
      tooltip: Xd.default.bool,
      reverse: Xd.default.bool,
      labels: Xd.default.object,
      handleLabel: Xd.default.string,
      format: Xd.default.func,
      onChangeStart: Xd.default.func,
      onChange: Xd.default.func,
      onChangeComplete: Xd.default.func
    }), pd(gd, "defaultProps", {
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
    var wd = gd;
    Od.default = wd
  },
  5909: (dd, Od, md) => {
    var Wd;
    Od.e = void 0;
    var Fd = ((Wd = md(5914)) && Wd.__esModule ? Wd : {
      default: Wd
    }).default;
    Od.e = Fd
  },
  5928: (dd, Od) => {
    Object.defineProperty(Od, "__esModule", {
      value: !0
    }), Od.capitalize = function(dd) {
      return dd.charAt(0).toUpperCase() + dd.substr(1)
    }, Od.clamp = function(dd, Od, md) {
      return Math.min(Math.max(dd, Od), md)
    }
  },
  5870: (dd, Od, md) => {
    var Wd = md(5874);

    function Fd() {}

    function Rd() {}
    Rd.resetWarningCache = Fd, dd.exports = function() {
      function dd(dd, Od, md, Fd, Rd, Xd) {
        if (Xd !== Wd) {
          var Kd = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw Kd.name = "Invariant Violation", Kd
        }
      }

      function Od() {
        return dd
      }
      dd.isRequired = dd;
      var md = {
        array: dd,
        bigint: dd,
        bool: dd,
        func: dd,
        number: dd,
        object: dd,
        string: dd,
        symbol: dd,
        any: dd,
        arrayOf: Od,
        element: dd,
        elementType: dd,
        instanceOf: Od,
        node: dd,
        objectOf: Od,
        oneOf: Od,
        oneOfType: Od,
        shape: Od,
        exact: Od,
        checkPropTypes: Rd,
        resetWarningCache: Fd
      };
      return md.PropTypes = md, md
    }
  },
  5864: (dd, Od, md) => {
    dd.exports = md(5870)()
  },
  5874: dd => {
    dd.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  5920: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      default: () => Jd
    });
    var Wd = function() {
        if ("undefined" !== typeof Map) return Map;

        function dd(dd, Od) {
          var md = -1;
          return dd.some((function(dd, Wd) {
            return dd[0] === Od && (md = Wd, !0)
          })), md
        }
        return function() {
          function Od() {
            this.__entries__ = []
          }
          return Object.defineProperty(Od.prototype, "size", {
            get: function() {
              return this.__entries__.length
            },
            enumerable: !0,
            configurable: !0
          }), Od.prototype.get = function(Od) {
            var md = dd(this.__entries__, Od),
              Wd = this.__entries__[md];
            return Wd && Wd[1]
          }, Od.prototype.set = function(Od, md) {
            var Wd = dd(this.__entries__, Od);
            ~Wd ? this.__entries__[Wd][1] = md : this.__entries__.push([Od, md])
          }, Od.prototype.delete = function(Od) {
            var md = this.__entries__,
              Wd = dd(md, Od);
            ~Wd && md.splice(Wd, 1)
          }, Od.prototype.has = function(Od) {
            return !!~dd(this.__entries__, Od)
          }, Od.prototype.clear = function() {
            this.__entries__.splice(0)
          }, Od.prototype.forEach = function(dd, Od) {
            void 0 === Od && (Od = null);
            for (var md = 0, Wd = this.__entries__; md < Wd.length; md++) {
              var Fd = Wd[md];
              dd.call(Od, Fd[1], Fd[0])
            }
          }, Od
        }()
      }(),
      Fd = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document,
      Rd = "undefined" !== typeof md.g && md.g.Math === Math ? md.g : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")(),
      Xd = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(Rd) : function(dd) {
        return setTimeout((function() {
          return dd(Date.now())
        }), 1e3 / 60)
      };
    var Kd = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
      hd = "undefined" !== typeof MutationObserver,
      vd = function() {
        function dd() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(dd, Od) {
            var md = !1,
              Wd = !1,
              Fd = 0;

            function Rd() {
              md && (md = !1, dd()), Wd && hd()
            }

            function Kd() {
              Xd(Rd)
            }

            function hd() {
              var dd = Date.now();
              if (md) {
                if (dd - Fd < 2) return;
                Wd = !0
              } else md = !0, Wd = !1, setTimeout(Kd, Od);
              Fd = dd
            }
            return hd
          }(this.refresh.bind(this), 20)
        }
        return dd.prototype.addObserver = function(dd) {
          ~this.observers_.indexOf(dd) || this.observers_.push(dd), this.connected_ || this.connect_()
        }, dd.prototype.removeObserver = function(dd) {
          var Od = this.observers_,
            md = Od.indexOf(dd);
          ~md && Od.splice(md, 1), !Od.length && this.connected_ && this.disconnect_()
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
          Fd && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), hd ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
          })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, dd.prototype.disconnect_ = function() {
          Fd && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, dd.prototype.onTransitionEnd_ = function(dd) {
          var Od = dd.propertyName,
            md = void 0 === Od ? "" : Od;
          Kd.some((function(dd) {
            return !!~md.indexOf(dd)
          })) && this.refresh()
        }, dd.getInstance = function() {
          return this.instance_ || (this.instance_ = new dd), this.instance_
        }, dd.instance_ = null, dd
      }(),
      Qd = function(dd, Od) {
        for (var md = 0, Wd = Object.keys(Od); md < Wd.length; md++) {
          var Fd = Wd[md];
          Object.defineProperty(dd, Fd, {
            value: Od[Fd],
            enumerable: !1,
            writable: !1,
            configurable: !0
          })
        }
        return dd
      },
      td = function(dd) {
        return dd && dd.ownerDocument && dd.ownerDocument.defaultView || Rd
      },
      od = Td(0, 0, 0, 0);

    function Nd(dd) {
      return parseFloat(dd) || 0
    }

    function qd(dd) {
      for (var Od = [], md = 1; md < arguments.length; md++) Od[md - 1] = arguments[md];
      return Od.reduce((function(Od, md) {
        return Od + Nd(dd["border-" + md + "-width"])
      }), 0)
    }

    function Hd(dd) {
      var Od = dd.clientWidth,
        md = dd.clientHeight;
      if (!Od && !md) return od;
      var Wd = td(dd).getComputedStyle(dd),
        Fd = function(dd) {
          for (var Od = {}, md = 0, Wd = ["top", "right", "bottom", "left"]; md < Wd.length; md++) {
            var Fd = Wd[md],
              Rd = dd["padding-" + Fd];
            Od[Fd] = Nd(Rd)
          }
          return Od
        }(Wd),
        Rd = Fd.left + Fd.right,
        Xd = Fd.top + Fd.bottom,
        Kd = Nd(Wd.width),
        hd = Nd(Wd.height);
      if ("border-box" === Wd.boxSizing && (Math.round(Kd + Rd) !== Od && (Kd -= qd(Wd, "left", "right") + Rd), Math.round(hd + Xd) !== md && (hd -= qd(Wd, "top", "bottom") + Xd)), ! function(dd) {
          return dd === td(dd).document.documentElement
        }(dd)) {
        var vd = Math.round(Kd + Rd) - Od,
          Qd = Math.round(hd + Xd) - md;
        1 !== Math.abs(vd) && (Kd -= vd), 1 !== Math.abs(Qd) && (hd -= Qd)
      }
      return Td(Fd.left, Fd.top, Kd, hd)
    }
    var yd = "undefined" !== typeof SVGGraphicsElement ? function(dd) {
      return dd instanceof td(dd).SVGGraphicsElement
    } : function(dd) {
      return dd instanceof td(dd).SVGElement && "function" === typeof dd.getBBox
    };

    function bd(dd) {
      return Fd ? yd(dd) ? function(dd) {
        var Od = dd.getBBox();
        return Td(0, 0, Od.width, Od.height)
      }(dd) : Hd(dd) : od
    }

    function Td(dd, Od, md, Wd) {
      return {
        x: dd,
        y: Od,
        width: md,
        height: Wd
      }
    }
    var pd = function() {
        function dd(dd) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Td(0, 0, 0, 0), this.target = dd
        }
        return dd.prototype.isActive = function() {
          var dd = bd(this.target);
          return this.contentRect_ = dd, dd.width !== this.broadcastWidth || dd.height !== this.broadcastHeight
        }, dd.prototype.broadcastRect = function() {
          var dd = this.contentRect_;
          return this.broadcastWidth = dd.width, this.broadcastHeight = dd.height, dd
        }, dd
      }(),
      Yd = function(dd, Od) {
        var md = function(dd) {
          var Od = dd.x,
            md = dd.y,
            Wd = dd.width,
            Fd = dd.height,
            Rd = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
            Xd = Object.create(Rd.prototype);
          return Qd(Xd, {
            x: Od,
            y: md,
            width: Wd,
            height: Fd,
            top: md,
            right: Od + Wd,
            bottom: Fd + md,
            left: Od
          }), Xd
        }(Od);
        Qd(this, {
          target: dd,
          contentRect: md
        })
      },
      gd = function() {
        function dd(dd, Od, md) {
          if (this.activeObservations_ = [], this.observations_ = new Wd, "function" !== typeof dd) throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = dd, this.controller_ = Od, this.callbackCtx_ = md
        }
        return dd.prototype.observe = function(dd) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(dd instanceof td(dd).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var Od = this.observations_;
            Od.has(dd) || (Od.set(dd, new pd(dd)), this.controller_.addObserver(this), this.controller_.refresh())
          }
        }, dd.prototype.unobserve = function(dd) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(dd instanceof td(dd).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var Od = this.observations_;
            Od.has(dd) && (Od.delete(dd), Od.size || this.controller_.removeObserver(this))
          }
        }, dd.prototype.disconnect = function() {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, dd.prototype.gatherActive = function() {
          var dd = this;
          this.clearActive(), this.observations_.forEach((function(Od) {
            Od.isActive() && dd.activeObservations_.push(Od)
          }))
        }, dd.prototype.broadcastActive = function() {
          if (this.hasActive()) {
            var dd = this.callbackCtx_,
              Od = this.activeObservations_.map((function(dd) {
                return new Yd(dd.target, dd.broadcastRect())
              }));
            this.callback_.call(dd, Od, dd), this.clearActive()
          }
        }, dd.prototype.clearActive = function() {
          this.activeObservations_.splice(0)
        }, dd.prototype.hasActive = function() {
          return this.activeObservations_.length > 0
        }, dd
      }(),
      wd = "undefined" !== typeof WeakMap ? new WeakMap : new Wd,
      Ed = function dd(Od) {
        if (!(this instanceof dd)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var md = vd.getInstance(),
          Wd = new gd(Od, md, this);
        wd.set(this, Wd)
      };
    ["observe", "unobserve", "disconnect"].forEach((function(dd) {
      Ed.prototype[dd] = function() {
        var Od;
        return (Od = wd.get(this))[dd].apply(Od, arguments)
      }
    }));
    const Jd = "undefined" !== typeof Rd.ResizeObserver ? Rd.ResizeObserver : Ed
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);