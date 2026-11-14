export const id = 93;
export const ids = [93];
export const modules = {
  4050: (cB, Bc, nc) => {
    function Vc(cB) {
      return Vc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(cB) {
        return typeof cB
      } : function(cB) {
        return cB && "function" == typeof Symbol && cB.constructor === Symbol && cB !== Symbol.prototype ? "symbol" : typeof cB
      }, Vc(cB)
    }
    Object.defineProperty(Bc, "__esModule", {
      value: !0
    }), Bc.default = void 0;
    var Ic = Oc(nc(912)),
      rB = function(cB, Bc) {
        if (!Bc && cB && cB.__esModule) return cB;
        if (null === cB || "object" !== Vc(cB) && "function" !== typeof cB) return {
          default: cB
        };
        var nc = qB(Bc);
        if (nc && nc.has(cB)) return nc.get(cB);
        var Ic = {},
          rB = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var uc in cB)
          if ("default" !== uc && Object.prototype.hasOwnProperty.call(cB, uc)) {
            var sc = rB ? Object.getOwnPropertyDescriptor(cB, uc) : null;
            sc && (sc.get || sc.set) ? Object.defineProperty(Ic, uc, sc) : Ic[uc] = cB[uc]
          } Ic.default = cB, nc && nc.set(cB, Ic);
        return Ic
      }(nc(73)),
      uc = Oc(nc(4013)),
      sc = Oc(nc(4057)),
      Mc = nc(4064),
      Pc = nc(957);

    function qB(cB) {
      if ("function" !== typeof WeakMap) return null;
      var Bc = new WeakMap,
        nc = new WeakMap;
      return (qB = function(cB) {
        return cB ? nc : Bc
      })(cB)
    }

    function Oc(cB) {
      return cB && cB.__esModule ? cB : {
        default: cB
      }
    }

    function Tc(cB, Bc) {
      var nc = "undefined" !== typeof Symbol && cB[Symbol.iterator] || cB["@@iterator"];
      if (!nc) {
        if (Array.isArray(cB) || (nc = function(cB, Bc) {
            if (!cB) return;
            if ("string" === typeof cB) return fc(cB, Bc);
            var nc = Object.prototype.toString.call(cB).slice(8, -1);
            "Object" === nc && cB.constructor && (nc = cB.constructor.name);
            if ("Map" === nc || "Set" === nc) return Array.from(cB);
            if ("Arguments" === nc || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(nc)) return fc(cB, Bc)
          }(cB)) || Bc && cB && "number" === typeof cB.length) {
          nc && (cB = nc);
          var Vc = 0,
            Ic = function() {};
          return {
            s: Ic,
            n: function() {
              return Vc >= cB.length ? {
                done: !0
              } : {
                done: !1,
                value: cB[Vc++]
              }
            },
            e: function(cB) {
              throw cB
            },
            f: Ic
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var rB, uc = !0,
        sc = !1;
      return {
        s: function() {
          nc = nc.call(cB)
        },
        n: function() {
          var cB = nc.next();
          return uc = cB.done, cB
        },
        e: function(cB) {
          sc = !0, rB = cB
        },
        f: function() {
          try {
            uc || null == nc.return || nc.return()
          } finally {
            if (sc) throw rB
          }
        }
      }
    }

    function fc(cB, Bc) {
      (null == Bc || Bc > cB.length) && (Bc = cB.length);
      for (var nc = 0, Vc = new Array(Bc); nc < Bc; nc++) Vc[nc] = cB[nc];
      return Vc
    }

    function mB(cB, Bc) {
      for (var nc = 0; nc < Bc.length; nc++) {
        var Vc = Bc[nc];
        Vc.enumerable = Vc.enumerable || !1, Vc.configurable = !0, "value" in Vc && (Vc.writable = !0), Object.defineProperty(cB, Vc.key, Vc)
      }
    }

    function ec(cB, Bc) {
      return ec = Object.setPrototypeOf || function(cB, Bc) {
        return cB.__proto__ = Bc, cB
      }, ec(cB, Bc)
    }

    function tB(cB) {
      var Bc = function() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (cB) {
          return !1
        }
      }();
      return function() {
        var nc, Ic = yB(cB);
        if (Bc) {
          var rB = yB(this).constructor;
          nc = Reflect.construct(Ic, arguments, rB)
        } else nc = Ic.apply(this, arguments);
        return function(cB, Bc) {
          if (Bc && ("object" === Vc(Bc) || "function" === typeof Bc)) return Bc;
          if (void 0 !== Bc) throw new TypeError("Derived constructors may only return object or undefined");
          return Sc(cB)
        }(this, nc)
      }
    }

    function Sc(cB) {
      if (void 0 === cB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return cB
    }

    function yB(cB) {
      return yB = Object.setPrototypeOf ? Object.getPrototypeOf : function(cB) {
        return cB.__proto__ || Object.getPrototypeOf(cB)
      }, yB(cB)
    }

    function zB(cB, Bc, nc) {
      return Bc in cB ? Object.defineProperty(cB, Bc, {
        value: nc,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : cB[Bc] = nc, cB
    }
    var pc = {
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
      hc = function(cB) {
        ! function(cB, Bc) {
          if ("function" !== typeof Bc && null !== Bc) throw new TypeError("Super expression must either be null or a function");
          Object.defineProperty(cB, "prototype", {
            value: Object.create(Bc && Bc.prototype, {
              constructor: {
                value: cB,
                writable: !0,
                configurable: !0
              }
            }),
            writable: !1
          }), Bc && ec(cB, Bc)
        }(uc, cB);
        var Bc, nc, Vc, rB = tB(uc);

        function uc(cB, Bc) {
          var nc;
          return function(cB, Bc) {
            if (!(cB instanceof Bc)) throw new TypeError("Cannot call a class as a function")
          }(this, uc), zB(Sc(nc = rB.call(this, cB, Bc)), "handleFormat", (function(cB) {
            var Bc = nc.props.format;
            return Bc ? Bc(cB) : cB
          })), zB(Sc(nc), "handleUpdate", (function() {
            if (nc.slider) {
              var cB = nc.props.orientation,
                Bc = (0, Mc.capitalize)(pc.orientation[cB].dimension),
                Vc = nc.slider["offset".concat(Bc)],
                Ic = nc.handle["offset".concat(Bc)];
              nc.setState({
                limit: Vc - Ic,
                grab: Ic / 2
              })
            }
          })), zB(Sc(nc), "handleStart", (function(cB) {
            var Bc = nc.props.onChangeStart;
            document.addEventListener("mousemove", nc.handleDrag), document.addEventListener("mouseup", nc.handleEnd), nc.setState({
              active: !0
            }, (function() {
              Bc && Bc(cB)
            }))
          })), zB(Sc(nc), "handleDrag", (function(cB) {
            cB.stopPropagation();
            var Bc = nc.props.onChange,
              Vc = cB.target,
              Ic = Vc.className,
              rB = Vc.classList,
              uc = Vc.dataset;
            if (Bc && "rangeslider__labels" !== Ic) {
              var sc = nc.position(cB);
              rB && rB.contains("rangeslider__label-item") && uc.value && (sc = parseFloat(uc.value)), Bc && Bc(sc, cB)
            }
          })), zB(Sc(nc), "handleEnd", (function(cB) {
            var Bc = nc.props.onChangeComplete;
            nc.setState({
              active: !1
            }, (function() {
              Bc && Bc(cB)
            })), document.removeEventListener("mousemove", nc.handleDrag), document.removeEventListener("mouseup", nc.handleEnd)
          })), zB(Sc(nc), "handleKeyDown", (function(cB) {
            cB.preventDefault();
            var Bc, Vc = cB.keyCode,
              Ic = nc.props,
              rB = Ic.value,
              uc = Ic.min,
              sc = Ic.max,
              Mc = Ic.step,
              Pc = Ic.onChange;
            switch (Vc) {
              case 38:
              case 39:
                Bc = rB + Mc > sc ? sc : rB + Mc, Pc && Pc(Bc, cB);
                break;
              case 37:
              case 40:
                Bc = rB - Mc < uc ? uc : rB - Mc, Pc && Pc(Bc, cB)
            }
          })), zB(Sc(nc), "getPositionFromValue", (function(cB) {
            var Bc = nc.state.limit,
              Vc = nc.props,
              Ic = Vc.min,
              rB = (cB - Ic) / (Vc.max - Ic);
            return Math.round(rB * Bc)
          })), zB(Sc(nc), "getValueFromPosition", (function(cB) {
            var Bc = nc.state.limit,
              Vc = nc.props,
              Ic = Vc.orientation,
              rB = Vc.min,
              uc = Vc.max,
              sc = Vc.step,
              Pc = (0, Mc.clamp)(cB, 0, Bc) / (Bc || 1),
              qB = sc * Math.round(Pc * (uc - rB) / sc),
              Oc = "horizontal" === Ic ? qB + rB : uc - qB;
            return (0, Mc.clamp)(Oc, rB, uc)
          })), zB(Sc(nc), "position", (function(cB) {
            var Bc = nc.state.grab,
              Vc = nc.props,
              Ic = Vc.orientation,
              rB = Vc.reverse,
              uc = nc.slider,
              sc = pc.orientation[Ic].coordinate,
              Pc = rB ? pc.orientation[Ic].reverseDirection : pc.orientation[Ic].direction,
              qB = "client".concat((0, Mc.capitalize)(sc)),
              Oc = cB.touches ? cB.touches[0][qB] : cB[qB],
              Tc = uc.getBoundingClientRect()[Pc],
              fc = rB ? Tc - Oc - Bc : Oc - Tc - Bc;
            return nc.getValueFromPosition(fc)
          })), zB(Sc(nc), "coordinates", (function(cB) {
            var Bc = nc.state,
              Vc = Bc.limit,
              Ic = Bc.grab,
              rB = nc.props.orientation,
              uc = nc.getValueFromPosition(cB),
              sc = nc.getPositionFromValue(uc),
              Mc = "horizontal" === rB ? sc + Ic : sc;
            return {
              fill: "horizontal" === rB ? Mc : Vc - Mc,
              handle: Mc,
              label: Mc
            }
          })), zB(Sc(nc), "renderLabels", (function(cB) {
            return (0, Pc.jsx)("ul", {
              ref: function(cB) {
                nc.labels = cB
              },
              className: (0, Ic.default)("rangeslider__labels"),
              children: cB
            })
          })), nc.state = {
            active: !1,
            limit: 0,
            grab: 0
          }, nc
        }
        return Bc = uc, (nc = [{
          key: "componentDidMount",
          value: function() {
            this.handleUpdate(), new sc.default(this.handleUpdate).observe(this.slider)
          }
        }, {
          key: "render",
          value: function() {
            var cB = this,
              Bc = this.props,
              nc = Bc.value,
              Vc = Bc.orientation,
              rB = Bc.className,
              uc = Bc.tooltip,
              sc = Bc.reverse,
              Mc = Bc.labels,
              qB = Bc.min,
              Oc = Bc.max,
              fc = Bc.handleLabel,
              mB = this.state.active,
              ec = pc.orientation[Vc].dimension,
              tB = sc ? pc.orientation[Vc].reverseDirection : pc.orientation[Vc].direction,
              Sc = this.getPositionFromValue(nc),
              yB = this.coordinates(Sc),
              hc = zB({}, ec, "".concat(yB.fill, "px")),
              aB = zB({}, tB, "".concat(yB.handle, "px")),
              lc = uc && mB,
              Yc = [],
              Lc = Object.keys(Mc);
            if (Lc.length > 0) {
              var gB, Uc = Tc(Lc = Lc.sort((function(cB, Bc) {
                return sc ? cB - Bc : Bc - cB
              })));
              try {
                for (Uc.s(); !(gB = Uc.n()).done;) {
                  var bB = gB.value,
                    Zc = this.getPositionFromValue(bB),
                    Qc = this.coordinates(Zc),
                    Cc = zB({}, tB, "".concat(Qc.label, "px"));
                  Yc.push((0, Pc.jsx)("li", {
                    className: (0, Ic.default)("rangeslider__label-item"),
                    "data-value": bB,
                    onMouseDown: this.handleDrag,
                    onTouchStart: this.handleStart,
                    onTouchEnd: this.handleEnd,
                    style: Cc,
                    children: this.props.labels[bB]
                  }, bB))
                }
              } catch (vB) {
                Uc.e(vB)
              } finally {
                Uc.f()
              }
            }
            return (0, Pc.jsxs)("div", {
              ref: function(Bc) {
                cB.slider = Bc
              },
              className: (0, Ic.default)("rangeslider", "rangeslider-".concat(Vc), {
                "rangeslider-reverse": sc
              }, rB),
              onMouseDown: this.handleDrag,
              onMouseUp: this.handleEnd,
              onTouchStart: this.handleStart,
              onTouchEnd: this.handleEnd,
              "aria-valuemin": qB,
              "aria-valuemax": Oc,
              "aria-valuenow": nc,
              "aria-orientation": Vc,
              children: [(0, Pc.jsx)("div", {
                className: "rangeslider__fill",
                style: hc
              }), (0, Pc.jsxs)("div", {
                ref: function(Bc) {
                  cB.handle = Bc
                },
                className: "rangeslider__handle",
                onMouseDown: this.handleStart,
                onTouchMove: this.handleDrag,
                onTouchEnd: this.handleEnd,
                onKeyDown: this.handleKeyDown,
                style: aB,
                tabIndex: 0,
                children: [lc && (0, Pc.jsx)("div", {
                  ref: function(Bc) {
                    cB.tooltip = Bc
                  },
                  className: "rangeslider__handle-tooltip",
                  children: (0, Pc.jsx)("span", {
                    children: this.handleFormat(nc)
                  })
                }), (0, Pc.jsx)("div", {
                  className: "rangeslider__handle-label",
                  children: fc
                })]
              }), Mc && this.renderLabels(Yc)]
            })
          }
        }]) && mB(Bc.prototype, nc), Vc && mB(Bc, Vc), Object.defineProperty(Bc, "prototype", {
          writable: !1
        }), uc
      }(rB.Component);
    zB(hc, "propTypes", {
      min: uc.default.number,
      max: uc.default.number,
      step: uc.default.number,
      value: uc.default.number,
      orientation: uc.default.string,
      tooltip: uc.default.bool,
      reverse: uc.default.bool,
      labels: uc.default.object,
      handleLabel: uc.default.string,
      format: uc.default.func,
      onChangeStart: uc.default.func,
      onChange: uc.default.func,
      onChangeComplete: uc.default.func
    }), zB(hc, "defaultProps", {
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
    var aB = hc;
    Bc.default = aB
  },
  4041: (cB, Bc, nc) => {
    var Vc;
    Bc.e = void 0;
    var Ic = ((Vc = nc(4050)) && Vc.__esModule ? Vc : {
      default: Vc
    }).default;
    Bc.e = Ic
  },
  4064: (cB, Bc) => {
    Object.defineProperty(Bc, "__esModule", {
      value: !0
    }), Bc.capitalize = function(cB) {
      return cB.charAt(0).toUpperCase() + cB.substr(1)
    }, Bc.clamp = function(cB, Bc, nc) {
      return Math.min(Math.max(cB, Bc), nc)
    }
  },
  4016: (cB, Bc, nc) => {
    var Vc = nc(4018);

    function Ic() {}

    function rB() {}
    rB.resetWarningCache = Ic, cB.exports = function() {
      function cB(cB, Bc, nc, Ic, rB, uc) {
        if (uc !== Vc) {
          var sc = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw sc.name = "Invariant Violation", sc
        }
      }

      function Bc() {
        return cB
      }
      cB.isRequired = cB;
      var nc = {
        array: cB,
        bigint: cB,
        bool: cB,
        func: cB,
        number: cB,
        object: cB,
        string: cB,
        symbol: cB,
        any: cB,
        arrayOf: Bc,
        element: cB,
        elementType: cB,
        instanceOf: Bc,
        node: cB,
        objectOf: Bc,
        oneOf: Bc,
        oneOfType: Bc,
        shape: Bc,
        exact: Bc,
        checkPropTypes: rB,
        resetWarningCache: Ic
      };
      return nc.PropTypes = nc, nc
    }
  },
  4013: (cB, Bc, nc) => {
    cB.exports = nc(4016)()
  },
  4018: cB => {
    cB.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  4057: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      default: () => Yc
    });
    var Vc = function() {
        if ("undefined" !== typeof Map) return Map;

        function cB(cB, Bc) {
          var nc = -1;
          return cB.some((function(cB, Vc) {
            return cB[0] === Bc && (nc = Vc, !0)
          })), nc
        }
        return function() {
          function Bc() {
            this.__entries__ = []
          }
          return Object.defineProperty(Bc.prototype, "size", {
            get: function() {
              return this.__entries__.length
            },
            enumerable: !0,
            configurable: !0
          }), Bc.prototype.get = function(Bc) {
            var nc = cB(this.__entries__, Bc),
              Vc = this.__entries__[nc];
            return Vc && Vc[1]
          }, Bc.prototype.set = function(Bc, nc) {
            var Vc = cB(this.__entries__, Bc);
            ~Vc ? this.__entries__[Vc][1] = nc : this.__entries__.push([Bc, nc])
          }, Bc.prototype.delete = function(Bc) {
            var nc = this.__entries__,
              Vc = cB(nc, Bc);
            ~Vc && nc.splice(Vc, 1)
          }, Bc.prototype.has = function(Bc) {
            return !!~cB(this.__entries__, Bc)
          }, Bc.prototype.clear = function() {
            this.__entries__.splice(0)
          }, Bc.prototype.forEach = function(cB, Bc) {
            void 0 === Bc && (Bc = null);
            for (var nc = 0, Vc = this.__entries__; nc < Vc.length; nc++) {
              var Ic = Vc[nc];
              cB.call(Bc, Ic[1], Ic[0])
            }
          }, Bc
        }()
      }(),
      Ic = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document,
      rB = "undefined" !== typeof nc.g && nc.g.Math === Math ? nc.g : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")(),
      uc = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(rB) : function(cB) {
        return setTimeout((function() {
          return cB(Date.now())
        }), 1e3 / 60)
      };
    var sc = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
      Mc = "undefined" !== typeof MutationObserver,
      Pc = function() {
        function cB() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(cB, Bc) {
            var nc = !1,
              Vc = !1,
              Ic = 0;

            function rB() {
              nc && (nc = !1, cB()), Vc && Mc()
            }

            function sc() {
              uc(rB)
            }

            function Mc() {
              var cB = Date.now();
              if (nc) {
                if (cB - Ic < 2) return;
                Vc = !0
              } else nc = !0, Vc = !1, setTimeout(sc, Bc);
              Ic = cB
            }
            return Mc
          }(this.refresh.bind(this), 20)
        }
        return cB.prototype.addObserver = function(cB) {
          ~this.observers_.indexOf(cB) || this.observers_.push(cB), this.connected_ || this.connect_()
        }, cB.prototype.removeObserver = function(cB) {
          var Bc = this.observers_,
            nc = Bc.indexOf(cB);
          ~nc && Bc.splice(nc, 1), !Bc.length && this.connected_ && this.disconnect_()
        }, cB.prototype.refresh = function() {
          this.updateObservers_() && this.refresh()
        }, cB.prototype.updateObservers_ = function() {
          var cB = this.observers_.filter((function(cB) {
            return cB.gatherActive(), cB.hasActive()
          }));
          return cB.forEach((function(cB) {
            return cB.broadcastActive()
          })), cB.length > 0
        }, cB.prototype.connect_ = function() {
          Ic && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Mc ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
          })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, cB.prototype.disconnect_ = function() {
          Ic && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, cB.prototype.onTransitionEnd_ = function(cB) {
          var Bc = cB.propertyName,
            nc = void 0 === Bc ? "" : Bc;
          sc.some((function(cB) {
            return !!~nc.indexOf(cB)
          })) && this.refresh()
        }, cB.getInstance = function() {
          return this.instance_ || (this.instance_ = new cB), this.instance_
        }, cB.instance_ = null, cB
      }(),
      qB = function(cB, Bc) {
        for (var nc = 0, Vc = Object.keys(Bc); nc < Vc.length; nc++) {
          var Ic = Vc[nc];
          Object.defineProperty(cB, Ic, {
            value: Bc[Ic],
            enumerable: !1,
            writable: !1,
            configurable: !0
          })
        }
        return cB
      },
      Oc = function(cB) {
        return cB && cB.ownerDocument && cB.ownerDocument.defaultView || rB
      },
      Tc = yB(0, 0, 0, 0);

    function fc(cB) {
      return parseFloat(cB) || 0
    }

    function mB(cB) {
      for (var Bc = [], nc = 1; nc < arguments.length; nc++) Bc[nc - 1] = arguments[nc];
      return Bc.reduce((function(Bc, nc) {
        return Bc + fc(cB["border-" + nc + "-width"])
      }), 0)
    }

    function ec(cB) {
      var Bc = cB.clientWidth,
        nc = cB.clientHeight;
      if (!Bc && !nc) return Tc;
      var Vc = Oc(cB).getComputedStyle(cB),
        Ic = function(cB) {
          for (var Bc = {}, nc = 0, Vc = ["top", "right", "bottom", "left"]; nc < Vc.length; nc++) {
            var Ic = Vc[nc],
              rB = cB["padding-" + Ic];
            Bc[Ic] = fc(rB)
          }
          return Bc
        }(Vc),
        rB = Ic.left + Ic.right,
        uc = Ic.top + Ic.bottom,
        sc = fc(Vc.width),
        Mc = fc(Vc.height);
      if ("border-box" === Vc.boxSizing && (Math.round(sc + rB) !== Bc && (sc -= mB(Vc, "left", "right") + rB), Math.round(Mc + uc) !== nc && (Mc -= mB(Vc, "top", "bottom") + uc)), ! function(cB) {
          return cB === Oc(cB).document.documentElement
        }(cB)) {
        var Pc = Math.round(sc + rB) - Bc,
          qB = Math.round(Mc + uc) - nc;
        1 !== Math.abs(Pc) && (sc -= Pc), 1 !== Math.abs(qB) && (Mc -= qB)
      }
      return yB(Ic.left, Ic.top, sc, Mc)
    }
    var tB = "undefined" !== typeof SVGGraphicsElement ? function(cB) {
      return cB instanceof Oc(cB).SVGGraphicsElement
    } : function(cB) {
      return cB instanceof Oc(cB).SVGElement && "function" === typeof cB.getBBox
    };

    function Sc(cB) {
      return Ic ? tB(cB) ? function(cB) {
        var Bc = cB.getBBox();
        return yB(0, 0, Bc.width, Bc.height)
      }(cB) : ec(cB) : Tc
    }

    function yB(cB, Bc, nc, Vc) {
      return {
        x: cB,
        y: Bc,
        width: nc,
        height: Vc
      }
    }
    var zB = function() {
        function cB(cB) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = yB(0, 0, 0, 0), this.target = cB
        }
        return cB.prototype.isActive = function() {
          var cB = Sc(this.target);
          return this.contentRect_ = cB, cB.width !== this.broadcastWidth || cB.height !== this.broadcastHeight
        }, cB.prototype.broadcastRect = function() {
          var cB = this.contentRect_;
          return this.broadcastWidth = cB.width, this.broadcastHeight = cB.height, cB
        }, cB
      }(),
      pc = function(cB, Bc) {
        var nc = function(cB) {
          var Bc = cB.x,
            nc = cB.y,
            Vc = cB.width,
            Ic = cB.height,
            rB = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
            uc = Object.create(rB.prototype);
          return qB(uc, {
            x: Bc,
            y: nc,
            width: Vc,
            height: Ic,
            top: nc,
            right: Bc + Vc,
            bottom: Ic + nc,
            left: Bc
          }), uc
        }(Bc);
        qB(this, {
          target: cB,
          contentRect: nc
        })
      },
      hc = function() {
        function cB(cB, Bc, nc) {
          if (this.activeObservations_ = [], this.observations_ = new Vc, "function" !== typeof cB) throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = cB, this.controller_ = Bc, this.callbackCtx_ = nc
        }
        return cB.prototype.observe = function(cB) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(cB instanceof Oc(cB).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var Bc = this.observations_;
            Bc.has(cB) || (Bc.set(cB, new zB(cB)), this.controller_.addObserver(this), this.controller_.refresh())
          }
        }, cB.prototype.unobserve = function(cB) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(cB instanceof Oc(cB).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var Bc = this.observations_;
            Bc.has(cB) && (Bc.delete(cB), Bc.size || this.controller_.removeObserver(this))
          }
        }, cB.prototype.disconnect = function() {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, cB.prototype.gatherActive = function() {
          var cB = this;
          this.clearActive(), this.observations_.forEach((function(Bc) {
            Bc.isActive() && cB.activeObservations_.push(Bc)
          }))
        }, cB.prototype.broadcastActive = function() {
          if (this.hasActive()) {
            var cB = this.callbackCtx_,
              Bc = this.activeObservations_.map((function(cB) {
                return new pc(cB.target, cB.broadcastRect())
              }));
            this.callback_.call(cB, Bc, cB), this.clearActive()
          }
        }, cB.prototype.clearActive = function() {
          this.activeObservations_.splice(0)
        }, cB.prototype.hasActive = function() {
          return this.activeObservations_.length > 0
        }, cB
      }(),
      aB = "undefined" !== typeof WeakMap ? new WeakMap : new Vc,
      lc = function cB(Bc) {
        if (!(this instanceof cB)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var nc = Pc.getInstance(),
          Vc = new hc(Bc, nc, this);
        aB.set(this, Vc)
      };
    ["observe", "unobserve", "disconnect"].forEach((function(cB) {
      lc.prototype[cB] = function() {
        var Bc;
        return (Bc = aB.get(this))[cB].apply(Bc, arguments)
      }
    }));
    const Yc = "undefined" !== typeof rB.ResizeObserver ? rB.ResizeObserver : lc
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);