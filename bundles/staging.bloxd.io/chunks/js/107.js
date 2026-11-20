export const id = 107;
export const ids = [107];
export const modules = {
  4744: (vv, zv, Pv) => {
    function hv(vv) {
      return hv = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(vv) {
        return typeof vv
      } : function(vv) {
        return vv && "function" == typeof Symbol && vv.constructor === Symbol && vv !== Symbol.prototype ? "symbol" : typeof vv
      }, hv(vv)
    }
    Object.defineProperty(zv, "__esModule", {
      value: !0
    }), zv.default = void 0;
    var Sv = Tv(Pv(1035)),
      ev = function(vv, zv) {
        if (!zv && vv && vv.__esModule) return vv;
        if (null === vv || "object" !== hv(vv) && "function" !== typeof vv) return {
          default: vv
        };
        var Pv = lv(zv);
        if (Pv && Pv.has(vv)) return Pv.get(vv);
        var Sv = {},
          ev = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var gv in vv)
          if ("default" !== gv && Object.prototype.hasOwnProperty.call(vv, gv)) {
            var pv = ev ? Object.getOwnPropertyDescriptor(vv, gv) : null;
            pv && (pv.get || pv.set) ? Object.defineProperty(Sv, gv, pv) : Sv[gv] = vv[gv]
          } Sv.default = vv, Pv && Pv.set(vv, Sv);
        return Sv
      }(Pv(52)),
      gv = Tv(Pv(4702)),
      pv = Tv(Pv(4752)),
      dv = Pv(4757),
      Nv = Pv(1082);

    function lv(vv) {
      if ("function" !== typeof WeakMap) return null;
      var zv = new WeakMap,
        Pv = new WeakMap;
      return (lv = function(vv) {
        return vv ? Pv : zv
      })(vv)
    }

    function Tv(vv) {
      return vv && vv.__esModule ? vv : {
        default: vv
      }
    }

    function Wv(vv, zv) {
      var Pv = "undefined" !== typeof Symbol && vv[Symbol.iterator] || vv["@@iterator"];
      if (!Pv) {
        if (Array.isArray(vv) || (Pv = function(vv, zv) {
            if (!vv) return;
            if ("string" === typeof vv) return wv(vv, zv);
            var Pv = Object.prototype.toString.call(vv).slice(8, -1);
            "Object" === Pv && vv.constructor && (Pv = vv.constructor.name);
            if ("Map" === Pv || "Set" === Pv) return Array.from(vv);
            if ("Arguments" === Pv || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Pv)) return wv(vv, zv)
          }(vv)) || zv && vv && "number" === typeof vv.length) {
          Pv && (vv = Pv);
          var hv = 0,
            Sv = function() {};
          return {
            s: Sv,
            n: function() {
              return hv >= vv.length ? {
                done: !0
              } : {
                done: !1,
                value: vv[hv++]
              }
            },
            e: function(vv) {
              throw vv
            },
            f: Sv
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var ev, gv = !0,
        pv = !1;
      return {
        s: function() {
          Pv = Pv.call(vv)
        },
        n: function() {
          var vv = Pv.next();
          return gv = vv.done, vv
        },
        e: function(vv) {
          pv = !0, ev = vv
        },
        f: function() {
          try {
            gv || null == Pv.return || Pv.return()
          } finally {
            if (pv) throw ev
          }
        }
      }
    }

    function wv(vv, zv) {
      (null == zv || zv > vv.length) && (zv = vv.length);
      for (var Pv = 0, hv = new Array(zv); Pv < zv; Pv++) hv[Pv] = vv[Pv];
      return hv
    }

    function av(vv, zv) {
      for (var Pv = 0; Pv < zv.length; Pv++) {
        var hv = zv[Pv];
        hv.enumerable = hv.enumerable || !1, hv.configurable = !0, "value" in hv && (hv.writable = !0), Object.defineProperty(vv, hv.key, hv)
      }
    }

    function sv(vv, zv) {
      return sv = Object.setPrototypeOf || function(vv, zv) {
        return vv.__proto__ = zv, vv
      }, sv(vv, zv)
    }

    function Cv(vv) {
      var zv = function() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (vv) {
          return !1
        }
      }();
      return function() {
        var Pv, Sv = cv(vv);
        if (zv) {
          var ev = cv(this).constructor;
          Pv = Reflect.construct(Sv, arguments, ev)
        } else Pv = Sv.apply(this, arguments);
        return function(vv, zv) {
          if (zv && ("object" === hv(zv) || "function" === typeof zv)) return zv;
          if (void 0 !== zv) throw new TypeError("Derived constructors may only return object or undefined");
          return iv(vv)
        }(this, Pv)
      }
    }

    function iv(vv) {
      if (void 0 === vv) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return vv
    }

    function cv(vv) {
      return cv = Object.setPrototypeOf ? Object.getPrototypeOf : function(vv) {
        return vv.__proto__ || Object.getPrototypeOf(vv)
      }, cv(vv)
    }

    function Gv(vv, zv, Pv) {
      return zv in vv ? Object.defineProperty(vv, zv, {
        value: Pv,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : vv[zv] = Pv, vv
    }
    var mv = {
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
      jv = function(vv) {
        ! function(vv, zv) {
          if ("function" !== typeof zv && null !== zv) throw new TypeError("Super expression must either be null or a function");
          Object.defineProperty(vv, "prototype", {
            value: Object.create(zv && zv.prototype, {
              constructor: {
                value: vv,
                writable: !0,
                configurable: !0
              }
            }),
            writable: !1
          }), zv && sv(vv, zv)
        }(gv, vv);
        var zv, Pv, hv, ev = Cv(gv);

        function gv(vv, zv) {
          var Pv;
          return function(vv, zv) {
            if (!(vv instanceof zv)) throw new TypeError("Cannot call a class as a function")
          }(this, gv), Gv(iv(Pv = ev.call(this, vv, zv)), "handleFormat", (function(vv) {
            var zv = Pv.props.format;
            return zv ? zv(vv) : vv
          })), Gv(iv(Pv), "handleUpdate", (function() {
            if (Pv.slider) {
              var vv = Pv.props.orientation,
                zv = (0, dv.capitalize)(mv.orientation[vv].dimension),
                hv = Pv.slider["offset".concat(zv)],
                Sv = Pv.handle["offset".concat(zv)];
              Pv.setState({
                limit: hv - Sv,
                grab: Sv / 2
              })
            }
          })), Gv(iv(Pv), "handleStart", (function(vv) {
            var zv = Pv.props.onChangeStart;
            document.addEventListener("mousemove", Pv.handleDrag), document.addEventListener("mouseup", Pv.handleEnd), Pv.setState({
              active: !0
            }, (function() {
              zv && zv(vv)
            }))
          })), Gv(iv(Pv), "handleDrag", (function(vv) {
            vv.stopPropagation();
            var zv = Pv.props.onChange,
              hv = vv.target,
              Sv = hv.className,
              ev = hv.classList,
              gv = hv.dataset;
            if (zv && "rangeslider__labels" !== Sv) {
              var pv = Pv.position(vv);
              ev && ev.contains("rangeslider__label-item") && gv.value && (pv = parseFloat(gv.value)), zv && zv(pv, vv)
            }
          })), Gv(iv(Pv), "handleEnd", (function(vv) {
            var zv = Pv.props.onChangeComplete;
            Pv.setState({
              active: !1
            }, (function() {
              zv && zv(vv)
            })), document.removeEventListener("mousemove", Pv.handleDrag), document.removeEventListener("mouseup", Pv.handleEnd)
          })), Gv(iv(Pv), "handleKeyDown", (function(vv) {
            vv.preventDefault();
            var zv, hv = vv.keyCode,
              Sv = Pv.props,
              ev = Sv.value,
              gv = Sv.min,
              pv = Sv.max,
              dv = Sv.step,
              Nv = Sv.onChange;
            switch (hv) {
              case 38:
              case 39:
                zv = ev + dv > pv ? pv : ev + dv, Nv && Nv(zv, vv);
                break;
              case 37:
              case 40:
                zv = ev - dv < gv ? gv : ev - dv, Nv && Nv(zv, vv)
            }
          })), Gv(iv(Pv), "getPositionFromValue", (function(vv) {
            var zv = Pv.state.limit,
              hv = Pv.props,
              Sv = hv.min,
              ev = (vv - Sv) / (hv.max - Sv);
            return Math.round(ev * zv)
          })), Gv(iv(Pv), "getValueFromPosition", (function(vv) {
            var zv = Pv.state.limit,
              hv = Pv.props,
              Sv = hv.orientation,
              ev = hv.min,
              gv = hv.max,
              pv = hv.step,
              Nv = (0, dv.clamp)(vv, 0, zv) / (zv || 1),
              lv = pv * Math.round(Nv * (gv - ev) / pv),
              Tv = "horizontal" === Sv ? lv + ev : gv - lv;
            return (0, dv.clamp)(Tv, ev, gv)
          })), Gv(iv(Pv), "position", (function(vv) {
            var zv = Pv.state.grab,
              hv = Pv.props,
              Sv = hv.orientation,
              ev = hv.reverse,
              gv = Pv.slider,
              pv = mv.orientation[Sv].coordinate,
              Nv = ev ? mv.orientation[Sv].reverseDirection : mv.orientation[Sv].direction,
              lv = "client".concat((0, dv.capitalize)(pv)),
              Tv = vv.touches ? vv.touches[0][lv] : vv[lv],
              Wv = gv.getBoundingClientRect()[Nv],
              wv = ev ? Wv - Tv - zv : Tv - Wv - zv;
            return Pv.getValueFromPosition(wv)
          })), Gv(iv(Pv), "coordinates", (function(vv) {
            var zv = Pv.state,
              hv = zv.limit,
              Sv = zv.grab,
              ev = Pv.props.orientation,
              gv = Pv.getValueFromPosition(vv),
              pv = Pv.getPositionFromValue(gv),
              dv = "horizontal" === ev ? pv + Sv : pv;
            return {
              fill: "horizontal" === ev ? dv : hv - dv,
              handle: dv,
              label: dv
            }
          })), Gv(iv(Pv), "renderLabels", (function(vv) {
            return (0, Nv.jsx)("ul", {
              ref: function(vv) {
                Pv.labels = vv
              },
              className: (0, Sv.default)("rangeslider__labels"),
              children: vv
            })
          })), Pv.state = {
            active: !1,
            limit: 0,
            grab: 0
          }, Pv
        }
        return zv = gv, (Pv = [{
          key: "componentDidMount",
          value: function() {
            this.handleUpdate(), new pv.default(this.handleUpdate).observe(this.slider)
          }
        }, {
          key: "render",
          value: function() {
            var vv = this,
              zv = this.props,
              Pv = zv.value,
              hv = zv.orientation,
              ev = zv.className,
              gv = zv.tooltip,
              pv = zv.reverse,
              dv = zv.labels,
              lv = zv.min,
              Tv = zv.max,
              wv = zv.handleLabel,
              av = this.state.active,
              sv = mv.orientation[hv].dimension,
              Cv = pv ? mv.orientation[hv].reverseDirection : mv.orientation[hv].direction,
              iv = this.getPositionFromValue(Pv),
              cv = this.coordinates(iv),
              jv = Gv({}, sv, "".concat(cv.fill, "px")),
              fv = Gv({}, Cv, "".concat(cv.handle, "px")),
              Fv = gv && av,
              Yv = [],
              nv = Object.keys(dv);
            if (nv.length > 0) {
              var Ov, Dv = Wv(nv = nv.sort((function(vv, zv) {
                return pv ? vv - zv : zv - vv
              })));
              try {
                for (Dv.s(); !(Ov = Dv.n()).done;) {
                  var Kv = Ov.value,
                    Vv = this.getPositionFromValue(Kv),
                    Uv = this.coordinates(Vv),
                    Rv = Gv({}, Cv, "".concat(Uv.label, "px"));
                  Yv.push((0, Nv.jsx)("li", {
                    className: (0, Sv.default)("rangeslider__label-item"),
                    "data-value": Kv,
                    onMouseDown: this.handleDrag,
                    onTouchStart: this.handleStart,
                    onTouchEnd: this.handleEnd,
                    style: Rv,
                    children: this.props.labels[Kv]
                  }, Kv))
                }
              } catch (xv) {
                Dv.e(xv)
              } finally {
                Dv.f()
              }
            }
            return (0, Nv.jsxs)("div", {
              ref: function(zv) {
                vv.slider = zv
              },
              className: (0, Sv.default)("rangeslider", "rangeslider-".concat(hv), {
                "rangeslider-reverse": pv
              }, ev),
              onMouseDown: this.handleDrag,
              onMouseUp: this.handleEnd,
              onTouchStart: this.handleStart,
              onTouchEnd: this.handleEnd,
              "aria-valuemin": lv,
              "aria-valuemax": Tv,
              "aria-valuenow": Pv,
              "aria-orientation": hv,
              children: [(0, Nv.jsx)("div", {
                className: "rangeslider__fill",
                style: jv
              }), (0, Nv.jsxs)("div", {
                ref: function(zv) {
                  vv.handle = zv
                },
                className: "rangeslider__handle",
                onMouseDown: this.handleStart,
                onTouchMove: this.handleDrag,
                onTouchEnd: this.handleEnd,
                onKeyDown: this.handleKeyDown,
                style: fv,
                tabIndex: 0,
                children: [Fv && (0, Nv.jsx)("div", {
                  ref: function(zv) {
                    vv.tooltip = zv
                  },
                  className: "rangeslider__handle-tooltip",
                  children: (0, Nv.jsx)("span", {
                    children: this.handleFormat(Pv)
                  })
                }), (0, Nv.jsx)("div", {
                  className: "rangeslider__handle-label",
                  children: wv
                })]
              }), dv && this.renderLabels(Yv)]
            })
          }
        }]) && av(zv.prototype, Pv), hv && av(zv, hv), Object.defineProperty(zv, "prototype", {
          writable: !1
        }), gv
      }(ev.Component);
    Gv(jv, "propTypes", {
      min: gv.default.number,
      max: gv.default.number,
      step: gv.default.number,
      value: gv.default.number,
      orientation: gv.default.string,
      tooltip: gv.default.bool,
      reverse: gv.default.bool,
      labels: gv.default.object,
      handleLabel: gv.default.string,
      format: gv.default.func,
      onChangeStart: gv.default.func,
      onChange: gv.default.func,
      onChangeComplete: gv.default.func
    }), Gv(jv, "defaultProps", {
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
    var fv = jv;
    zv.default = fv
  },
  4738: (vv, zv, Pv) => {
    var hv;
    zv.d = void 0;
    var Sv = ((hv = Pv(4744)) && hv.__esModule ? hv : {
      default: hv
    }).default;
    zv.d = Sv
  },
  4757: (vv, zv) => {
    Object.defineProperty(zv, "__esModule", {
      value: !0
    }), zv.capitalize = function(vv) {
      return vv.charAt(0).toUpperCase() + vv.substr(1)
    }, zv.clamp = function(vv, zv, Pv) {
      return Math.min(Math.max(vv, zv), Pv)
    }
  },
  4706: (vv, zv, Pv) => {
    var hv = Pv(4711);

    function Sv() {}

    function ev() {}
    ev.resetWarningCache = Sv, vv.exports = function() {
      function vv(vv, zv, Pv, Sv, ev, gv) {
        if (gv !== hv) {
          var pv = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw pv.name = "Invariant Violation", pv
        }
      }

      function zv() {
        return vv
      }
      vv.isRequired = vv;
      var Pv = {
        array: vv,
        bigint: vv,
        bool: vv,
        func: vv,
        number: vv,
        object: vv,
        string: vv,
        symbol: vv,
        any: vv,
        arrayOf: zv,
        element: vv,
        elementType: vv,
        instanceOf: zv,
        node: vv,
        objectOf: zv,
        oneOf: zv,
        oneOfType: zv,
        shape: zv,
        exact: zv,
        checkPropTypes: ev,
        resetWarningCache: Sv
      };
      return Pv.PropTypes = Pv, Pv
    }
  },
  4702: (vv, zv, Pv) => {
    vv.exports = Pv(4706)()
  },
  4711: vv => {
    vv.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  4752: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      default: () => Yv
    });
    var hv = function() {
        if ("undefined" !== typeof Map) return Map;

        function vv(vv, zv) {
          var Pv = -1;
          return vv.some((function(vv, hv) {
            return vv[0] === zv && (Pv = hv, !0)
          })), Pv
        }
        return function() {
          function zv() {
            this.__entries__ = []
          }
          return Object.defineProperty(zv.prototype, "size", {
            get: function() {
              return this.__entries__.length
            },
            enumerable: !0,
            configurable: !0
          }), zv.prototype.get = function(zv) {
            var Pv = vv(this.__entries__, zv),
              hv = this.__entries__[Pv];
            return hv && hv[1]
          }, zv.prototype.set = function(zv, Pv) {
            var hv = vv(this.__entries__, zv);
            ~hv ? this.__entries__[hv][1] = Pv : this.__entries__.push([zv, Pv])
          }, zv.prototype.delete = function(zv) {
            var Pv = this.__entries__,
              hv = vv(Pv, zv);
            ~hv && Pv.splice(hv, 1)
          }, zv.prototype.has = function(zv) {
            return !!~vv(this.__entries__, zv)
          }, zv.prototype.clear = function() {
            this.__entries__.splice(0)
          }, zv.prototype.forEach = function(vv, zv) {
            void 0 === zv && (zv = null);
            for (var Pv = 0, hv = this.__entries__; Pv < hv.length; Pv++) {
              var Sv = hv[Pv];
              vv.call(zv, Sv[1], Sv[0])
            }
          }, zv
        }()
      }(),
      Sv = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document,
      ev = "undefined" !== typeof Pv.g && Pv.g.Math === Math ? Pv.g : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")(),
      gv = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(ev) : function(vv) {
        return setTimeout((function() {
          return vv(Date.now())
        }), 1e3 / 60)
      };
    var pv = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
      dv = "undefined" !== typeof MutationObserver,
      Nv = function() {
        function vv() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(vv, zv) {
            var Pv = !1,
              hv = !1,
              Sv = 0;

            function ev() {
              Pv && (Pv = !1, vv()), hv && dv()
            }

            function pv() {
              gv(ev)
            }

            function dv() {
              var vv = Date.now();
              if (Pv) {
                if (vv - Sv < 2) return;
                hv = !0
              } else Pv = !0, hv = !1, setTimeout(pv, zv);
              Sv = vv
            }
            return dv
          }(this.refresh.bind(this), 20)
        }
        return vv.prototype.addObserver = function(vv) {
          ~this.observers_.indexOf(vv) || this.observers_.push(vv), this.connected_ || this.connect_()
        }, vv.prototype.removeObserver = function(vv) {
          var zv = this.observers_,
            Pv = zv.indexOf(vv);
          ~Pv && zv.splice(Pv, 1), !zv.length && this.connected_ && this.disconnect_()
        }, vv.prototype.refresh = function() {
          this.updateObservers_() && this.refresh()
        }, vv.prototype.updateObservers_ = function() {
          var vv = this.observers_.filter((function(vv) {
            return vv.gatherActive(), vv.hasActive()
          }));
          return vv.forEach((function(vv) {
            return vv.broadcastActive()
          })), vv.length > 0
        }, vv.prototype.connect_ = function() {
          Sv && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), dv ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
          })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, vv.prototype.disconnect_ = function() {
          Sv && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, vv.prototype.onTransitionEnd_ = function(vv) {
          var zv = vv.propertyName,
            Pv = void 0 === zv ? "" : zv;
          pv.some((function(vv) {
            return !!~Pv.indexOf(vv)
          })) && this.refresh()
        }, vv.getInstance = function() {
          return this.instance_ || (this.instance_ = new vv), this.instance_
        }, vv.instance_ = null, vv
      }(),
      lv = function(vv, zv) {
        for (var Pv = 0, hv = Object.keys(zv); Pv < hv.length; Pv++) {
          var Sv = hv[Pv];
          Object.defineProperty(vv, Sv, {
            value: zv[Sv],
            enumerable: !1,
            writable: !1,
            configurable: !0
          })
        }
        return vv
      },
      Tv = function(vv) {
        return vv && vv.ownerDocument && vv.ownerDocument.defaultView || ev
      },
      Wv = cv(0, 0, 0, 0);

    function wv(vv) {
      return parseFloat(vv) || 0
    }

    function av(vv) {
      for (var zv = [], Pv = 1; Pv < arguments.length; Pv++) zv[Pv - 1] = arguments[Pv];
      return zv.reduce((function(zv, Pv) {
        return zv + wv(vv["border-" + Pv + "-width"])
      }), 0)
    }

    function sv(vv) {
      var zv = vv.clientWidth,
        Pv = vv.clientHeight;
      if (!zv && !Pv) return Wv;
      var hv = Tv(vv).getComputedStyle(vv),
        Sv = function(vv) {
          for (var zv = {}, Pv = 0, hv = ["top", "right", "bottom", "left"]; Pv < hv.length; Pv++) {
            var Sv = hv[Pv],
              ev = vv["padding-" + Sv];
            zv[Sv] = wv(ev)
          }
          return zv
        }(hv),
        ev = Sv.left + Sv.right,
        gv = Sv.top + Sv.bottom,
        pv = wv(hv.width),
        dv = wv(hv.height);
      if ("border-box" === hv.boxSizing && (Math.round(pv + ev) !== zv && (pv -= av(hv, "left", "right") + ev), Math.round(dv + gv) !== Pv && (dv -= av(hv, "top", "bottom") + gv)), ! function(vv) {
          return vv === Tv(vv).document.documentElement
        }(vv)) {
        var Nv = Math.round(pv + ev) - zv,
          lv = Math.round(dv + gv) - Pv;
        1 !== Math.abs(Nv) && (pv -= Nv), 1 !== Math.abs(lv) && (dv -= lv)
      }
      return cv(Sv.left, Sv.top, pv, dv)
    }
    var Cv = "undefined" !== typeof SVGGraphicsElement ? function(vv) {
      return vv instanceof Tv(vv).SVGGraphicsElement
    } : function(vv) {
      return vv instanceof Tv(vv).SVGElement && "function" === typeof vv.getBBox
    };

    function iv(vv) {
      return Sv ? Cv(vv) ? function(vv) {
        var zv = vv.getBBox();
        return cv(0, 0, zv.width, zv.height)
      }(vv) : sv(vv) : Wv
    }

    function cv(vv, zv, Pv, hv) {
      return {
        x: vv,
        y: zv,
        width: Pv,
        height: hv
      }
    }
    var Gv = function() {
        function vv(vv) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = cv(0, 0, 0, 0), this.target = vv
        }
        return vv.prototype.isActive = function() {
          var vv = iv(this.target);
          return this.contentRect_ = vv, vv.width !== this.broadcastWidth || vv.height !== this.broadcastHeight
        }, vv.prototype.broadcastRect = function() {
          var vv = this.contentRect_;
          return this.broadcastWidth = vv.width, this.broadcastHeight = vv.height, vv
        }, vv
      }(),
      mv = function(vv, zv) {
        var Pv = function(vv) {
          var zv = vv.x,
            Pv = vv.y,
            hv = vv.width,
            Sv = vv.height,
            ev = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
            gv = Object.create(ev.prototype);
          return lv(gv, {
            x: zv,
            y: Pv,
            width: hv,
            height: Sv,
            top: Pv,
            right: zv + hv,
            bottom: Sv + Pv,
            left: zv
          }), gv
        }(zv);
        lv(this, {
          target: vv,
          contentRect: Pv
        })
      },
      jv = function() {
        function vv(vv, zv, Pv) {
          if (this.activeObservations_ = [], this.observations_ = new hv, "function" !== typeof vv) throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = vv, this.controller_ = zv, this.callbackCtx_ = Pv
        }
        return vv.prototype.observe = function(vv) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(vv instanceof Tv(vv).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var zv = this.observations_;
            zv.has(vv) || (zv.set(vv, new Gv(vv)), this.controller_.addObserver(this), this.controller_.refresh())
          }
        }, vv.prototype.unobserve = function(vv) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(vv instanceof Tv(vv).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var zv = this.observations_;
            zv.has(vv) && (zv.delete(vv), zv.size || this.controller_.removeObserver(this))
          }
        }, vv.prototype.disconnect = function() {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, vv.prototype.gatherActive = function() {
          var vv = this;
          this.clearActive(), this.observations_.forEach((function(zv) {
            zv.isActive() && vv.activeObservations_.push(zv)
          }))
        }, vv.prototype.broadcastActive = function() {
          if (this.hasActive()) {
            var vv = this.callbackCtx_,
              zv = this.activeObservations_.map((function(vv) {
                return new mv(vv.target, vv.broadcastRect())
              }));
            this.callback_.call(vv, zv, vv), this.clearActive()
          }
        }, vv.prototype.clearActive = function() {
          this.activeObservations_.splice(0)
        }, vv.prototype.hasActive = function() {
          return this.activeObservations_.length > 0
        }, vv
      }(),
      fv = "undefined" !== typeof WeakMap ? new WeakMap : new hv,
      Fv = function vv(zv) {
        if (!(this instanceof vv)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var Pv = Nv.getInstance(),
          hv = new jv(zv, Pv, this);
        fv.set(this, hv)
      };
    ["observe", "unobserve", "disconnect"].forEach((function(vv) {
      Fv.prototype[vv] = function() {
        var zv;
        return (zv = fv.get(this))[vv].apply(zv, arguments)
      }
    }));
    const Yv = "undefined" !== typeof ev.ResizeObserver ? ev.ResizeObserver : Fv
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);