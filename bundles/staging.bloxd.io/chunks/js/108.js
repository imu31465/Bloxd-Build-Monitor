export const id = 108;
export const ids = [108];
export const modules = {
  4961: (mm, Tm, fm) => {
    function hm(mm) {
      return hm = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(mm) {
        return typeof mm
      } : function(mm) {
        return mm && "function" == typeof Symbol && mm.constructor === Symbol && mm !== Symbol.prototype ? "symbol" : typeof mm
      }, hm(mm)
    }
    Object.defineProperty(Tm, "__esModule", {
      value: !0
    }), Tm.default = void 0;
    var Am = pm(fm(1080)),
      am = function(mm, Tm) {
        if (!Tm && mm && mm.__esModule) return mm;
        if (null === mm || "object" !== hm(mm) && "function" !== typeof mm) return {
          default: mm
        };
        var fm = Rm(Tm);
        if (fm && fm.has(mm)) return fm.get(mm);
        var Am = {},
          am = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var xm in mm)
          if ("default" !== xm && Object.prototype.hasOwnProperty.call(mm, xm)) {
            var wm = am ? Object.getOwnPropertyDescriptor(mm, xm) : null;
            wm && (wm.get || wm.set) ? Object.defineProperty(Am, xm, wm) : Am[xm] = mm[xm]
          } Am.default = mm, fm && fm.set(mm, Am);
        return Am
      }(fm(59)),
      xm = pm(fm(4909)),
      wm = pm(fm(4966)),
      Dm = fm(4968),
      im = fm(1135);

    function Rm(mm) {
      if ("function" !== typeof WeakMap) return null;
      var Tm = new WeakMap,
        fm = new WeakMap;
      return (Rm = function(mm) {
        return mm ? fm : Tm
      })(mm)
    }

    function pm(mm) {
      return mm && mm.__esModule ? mm : {
        default: mm
      }
    }

    function Em(mm, Tm) {
      var fm = "undefined" !== typeof Symbol && mm[Symbol.iterator] || mm["@@iterator"];
      if (!fm) {
        if (Array.isArray(mm) || (fm = function(mm, Tm) {
            if (!mm) return;
            if ("string" === typeof mm) return om(mm, Tm);
            var fm = Object.prototype.toString.call(mm).slice(8, -1);
            "Object" === fm && mm.constructor && (fm = mm.constructor.name);
            if ("Map" === fm || "Set" === fm) return Array.from(mm);
            if ("Arguments" === fm || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(fm)) return om(mm, Tm)
          }(mm)) || Tm && mm && "number" === typeof mm.length) {
          fm && (mm = fm);
          var hm = 0,
            Am = function() {};
          return {
            s: Am,
            n: function() {
              return hm >= mm.length ? {
                done: !0
              } : {
                done: !1,
                value: mm[hm++]
              }
            },
            e: function(mm) {
              throw mm
            },
            f: Am
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var am, xm = !0,
        wm = !1;
      return {
        s: function() {
          fm = fm.call(mm)
        },
        n: function() {
          var mm = fm.next();
          return xm = mm.done, mm
        },
        e: function(mm) {
          wm = !0, am = mm
        },
        f: function() {
          try {
            xm || null == fm.return || fm.return()
          } finally {
            if (wm) throw am
          }
        }
      }
    }

    function om(mm, Tm) {
      (null == Tm || Tm > mm.length) && (Tm = mm.length);
      for (var fm = 0, hm = new Array(Tm); fm < Tm; fm++) hm[fm] = mm[fm];
      return hm
    }

    function Om(mm, Tm) {
      for (var fm = 0; fm < Tm.length; fm++) {
        var hm = Tm[fm];
        hm.enumerable = hm.enumerable || !1, hm.configurable = !0, "value" in hm && (hm.writable = !0), Object.defineProperty(mm, hm.key, hm)
      }
    }

    function Ym(mm, Tm) {
      return Ym = Object.setPrototypeOf || function(mm, Tm) {
        return mm.__proto__ = Tm, mm
      }, Ym(mm, Tm)
    }

    function qm(mm) {
      var Tm = function() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (mm) {
          return !1
        }
      }();
      return function() {
        var fm, Am = Vm(mm);
        if (Tm) {
          var am = Vm(this).constructor;
          fm = Reflect.construct(Am, arguments, am)
        } else fm = Am.apply(this, arguments);
        return function(mm, Tm) {
          if (Tm && ("object" === hm(Tm) || "function" === typeof Tm)) return Tm;
          if (void 0 !== Tm) throw new TypeError("Derived constructors may only return object or undefined");
          return jm(mm)
        }(this, fm)
      }
    }

    function jm(mm) {
      if (void 0 === mm) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return mm
    }

    function Vm(mm) {
      return Vm = Object.setPrototypeOf ? Object.getPrototypeOf : function(mm) {
        return mm.__proto__ || Object.getPrototypeOf(mm)
      }, Vm(mm)
    }

    function Im(mm, Tm, fm) {
      return Tm in mm ? Object.defineProperty(mm, Tm, {
        value: fm,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : mm[Tm] = fm, mm
    }
    var Km = {
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
      Qm = function(mm) {
        ! function(mm, Tm) {
          if ("function" !== typeof Tm && null !== Tm) throw new TypeError("Super expression must either be null or a function");
          Object.defineProperty(mm, "prototype", {
            value: Object.create(Tm && Tm.prototype, {
              constructor: {
                value: mm,
                writable: !0,
                configurable: !0
              }
            }),
            writable: !1
          }), Tm && Ym(mm, Tm)
        }(xm, mm);
        var Tm, fm, hm, am = qm(xm);

        function xm(mm, Tm) {
          var fm;
          return function(mm, Tm) {
            if (!(mm instanceof Tm)) throw new TypeError("Cannot call a class as a function")
          }(this, xm), Im(jm(fm = am.call(this, mm, Tm)), "handleFormat", (function(mm) {
            var Tm = fm.props.format;
            return Tm ? Tm(mm) : mm
          })), Im(jm(fm), "handleUpdate", (function() {
            if (fm.slider) {
              var mm = fm.props.orientation,
                Tm = (0, Dm.capitalize)(Km.orientation[mm].dimension),
                hm = fm.slider["offset".concat(Tm)],
                Am = fm.handle["offset".concat(Tm)];
              fm.setState({
                limit: hm - Am,
                grab: Am / 2
              })
            }
          })), Im(jm(fm), "handleStart", (function(mm) {
            var Tm = fm.props.onChangeStart;
            document.addEventListener("mousemove", fm.handleDrag), document.addEventListener("mouseup", fm.handleEnd), fm.setState({
              active: !0
            }, (function() {
              Tm && Tm(mm)
            }))
          })), Im(jm(fm), "handleDrag", (function(mm) {
            mm.stopPropagation();
            var Tm = fm.props.onChange,
              hm = mm.target,
              Am = hm.className,
              am = hm.classList,
              xm = hm.dataset;
            if (Tm && "rangeslider__labels" !== Am) {
              var wm = fm.position(mm);
              am && am.contains("rangeslider__label-item") && xm.value && (wm = parseFloat(xm.value)), Tm && Tm(wm, mm)
            }
          })), Im(jm(fm), "handleEnd", (function(mm) {
            var Tm = fm.props.onChangeComplete;
            fm.setState({
              active: !1
            }, (function() {
              Tm && Tm(mm)
            })), document.removeEventListener("mousemove", fm.handleDrag), document.removeEventListener("mouseup", fm.handleEnd)
          })), Im(jm(fm), "handleKeyDown", (function(mm) {
            mm.preventDefault();
            var Tm, hm = mm.keyCode,
              Am = fm.props,
              am = Am.value,
              xm = Am.min,
              wm = Am.max,
              Dm = Am.step,
              im = Am.onChange;
            switch (hm) {
              case 38:
              case 39:
                Tm = am + Dm > wm ? wm : am + Dm, im && im(Tm, mm);
                break;
              case 37:
              case 40:
                Tm = am - Dm < xm ? xm : am - Dm, im && im(Tm, mm)
            }
          })), Im(jm(fm), "getPositionFromValue", (function(mm) {
            var Tm = fm.state.limit,
              hm = fm.props,
              Am = hm.min,
              am = (mm - Am) / (hm.max - Am);
            return Math.round(am * Tm)
          })), Im(jm(fm), "getValueFromPosition", (function(mm) {
            var Tm = fm.state.limit,
              hm = fm.props,
              Am = hm.orientation,
              am = hm.min,
              xm = hm.max,
              wm = hm.step,
              im = (0, Dm.clamp)(mm, 0, Tm) / (Tm || 1),
              Rm = wm * Math.round(im * (xm - am) / wm),
              pm = "horizontal" === Am ? Rm + am : xm - Rm;
            return (0, Dm.clamp)(pm, am, xm)
          })), Im(jm(fm), "position", (function(mm) {
            var Tm = fm.state.grab,
              hm = fm.props,
              Am = hm.orientation,
              am = hm.reverse,
              xm = fm.slider,
              wm = Km.orientation[Am].coordinate,
              im = am ? Km.orientation[Am].reverseDirection : Km.orientation[Am].direction,
              Rm = "client".concat((0, Dm.capitalize)(wm)),
              pm = mm.touches ? mm.touches[0][Rm] : mm[Rm],
              Em = xm.getBoundingClientRect()[im],
              om = am ? Em - pm - Tm : pm - Em - Tm;
            return fm.getValueFromPosition(om)
          })), Im(jm(fm), "coordinates", (function(mm) {
            var Tm = fm.state,
              hm = Tm.limit,
              Am = Tm.grab,
              am = fm.props.orientation,
              xm = fm.getValueFromPosition(mm),
              wm = fm.getPositionFromValue(xm),
              Dm = "horizontal" === am ? wm + Am : wm;
            return {
              fill: "horizontal" === am ? Dm : hm - Dm,
              handle: Dm,
              label: Dm
            }
          })), Im(jm(fm), "renderLabels", (function(mm) {
            return (0, im.jsx)("ul", {
              ref: function(mm) {
                fm.labels = mm
              },
              className: (0, Am.default)("rangeslider__labels"),
              children: mm
            })
          })), fm.state = {
            active: !1,
            limit: 0,
            grab: 0
          }, fm
        }
        return Tm = xm, (fm = [{
          key: "componentDidMount",
          value: function() {
            this.handleUpdate(), new wm.default(this.handleUpdate).observe(this.slider)
          }
        }, {
          key: "render",
          value: function() {
            var mm = this,
              Tm = this.props,
              fm = Tm.value,
              hm = Tm.orientation,
              am = Tm.className,
              xm = Tm.tooltip,
              wm = Tm.reverse,
              Dm = Tm.labels,
              Rm = Tm.min,
              pm = Tm.max,
              om = Tm.handleLabel,
              Om = this.state.active,
              Ym = Km.orientation[hm].dimension,
              qm = wm ? Km.orientation[hm].reverseDirection : Km.orientation[hm].direction,
              jm = this.getPositionFromValue(fm),
              Vm = this.coordinates(jm),
              Qm = Im({}, Ym, "".concat(Vm.fill, "px")),
              nm = Im({}, qm, "".concat(Vm.handle, "px")),
              Jm = xm && Om,
              cm = [],
              zm = Object.keys(Dm);
            if (zm.length > 0) {
              var Zm, km = Em(zm = zm.sort((function(mm, Tm) {
                return wm ? mm - Tm : Tm - mm
              })));
              try {
                for (km.s(); !(Zm = km.n()).done;) {
                  var bm = Zm.value,
                    Sm = this.getPositionFromValue(bm),
                    em = this.coordinates(Sm),
                    Nm = Im({}, qm, "".concat(em.label, "px"));
                  cm.push((0, im.jsx)("li", {
                    className: (0, Am.default)("rangeslider__label-item"),
                    "data-value": bm,
                    onMouseDown: this.handleDrag,
                    onTouchStart: this.handleStart,
                    onTouchEnd: this.handleEnd,
                    style: Nm,
                    children: this.props.labels[bm]
                  }, bm))
                }
              } catch (Gm) {
                km.e(Gm)
              } finally {
                km.f()
              }
            }
            return (0, im.jsxs)("div", {
              ref: function(Tm) {
                mm.slider = Tm
              },
              className: (0, Am.default)("rangeslider", "rangeslider-".concat(hm), {
                "rangeslider-reverse": wm
              }, am),
              onMouseDown: this.handleDrag,
              onMouseUp: this.handleEnd,
              onTouchStart: this.handleStart,
              onTouchEnd: this.handleEnd,
              "aria-valuemin": Rm,
              "aria-valuemax": pm,
              "aria-valuenow": fm,
              "aria-orientation": hm,
              children: [(0, im.jsx)("div", {
                className: "rangeslider__fill",
                style: Qm
              }), (0, im.jsxs)("div", {
                ref: function(Tm) {
                  mm.handle = Tm
                },
                className: "rangeslider__handle",
                onMouseDown: this.handleStart,
                onTouchMove: this.handleDrag,
                onTouchEnd: this.handleEnd,
                onKeyDown: this.handleKeyDown,
                style: nm,
                tabIndex: 0,
                children: [Jm && (0, im.jsx)("div", {
                  ref: function(Tm) {
                    mm.tooltip = Tm
                  },
                  className: "rangeslider__handle-tooltip",
                  children: (0, im.jsx)("span", {
                    children: this.handleFormat(fm)
                  })
                }), (0, im.jsx)("div", {
                  className: "rangeslider__handle-label",
                  children: om
                })]
              }), Dm && this.renderLabels(cm)]
            })
          }
        }]) && Om(Tm.prototype, fm), hm && Om(Tm, hm), Object.defineProperty(Tm, "prototype", {
          writable: !1
        }), xm
      }(am.Component);
    Im(Qm, "propTypes", {
      min: xm.default.number,
      max: xm.default.number,
      step: xm.default.number,
      value: xm.default.number,
      orientation: xm.default.string,
      tooltip: xm.default.bool,
      reverse: xm.default.bool,
      labels: xm.default.object,
      handleLabel: xm.default.string,
      format: xm.default.func,
      onChangeStart: xm.default.func,
      onChange: xm.default.func,
      onChangeComplete: xm.default.func
    }), Im(Qm, "defaultProps", {
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
    var nm = Qm;
    Tm.default = nm
  },
  4957: (mm, Tm, fm) => {
    var hm;
    Tm.d = void 0;
    var Am = ((hm = fm(4961)) && hm.__esModule ? hm : {
      default: hm
    }).default;
    Tm.d = Am
  },
  4968: (mm, Tm) => {
    Object.defineProperty(Tm, "__esModule", {
      value: !0
    }), Tm.capitalize = function(mm) {
      return mm.charAt(0).toUpperCase() + mm.substr(1)
    }, Tm.clamp = function(mm, Tm, fm) {
      return Math.min(Math.max(mm, Tm), fm)
    }
  },
  4917: (mm, Tm, fm) => {
    var hm = fm(4926);

    function Am() {}

    function am() {}
    am.resetWarningCache = Am, mm.exports = function() {
      function mm(mm, Tm, fm, Am, am, xm) {
        if (xm !== hm) {
          var wm = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw wm.name = "Invariant Violation", wm
        }
      }

      function Tm() {
        return mm
      }
      mm.isRequired = mm;
      var fm = {
        array: mm,
        bigint: mm,
        bool: mm,
        func: mm,
        number: mm,
        object: mm,
        string: mm,
        symbol: mm,
        any: mm,
        arrayOf: Tm,
        element: mm,
        elementType: mm,
        instanceOf: Tm,
        node: mm,
        objectOf: Tm,
        oneOf: Tm,
        oneOfType: Tm,
        shape: Tm,
        exact: Tm,
        checkPropTypes: am,
        resetWarningCache: Am
      };
      return fm.PropTypes = fm, fm
    }
  },
  4909: (mm, Tm, fm) => {
    mm.exports = fm(4917)()
  },
  4926: mm => {
    mm.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  4966: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      default: () => cm
    });
    var hm = function() {
        if ("undefined" !== typeof Map) return Map;

        function mm(mm, Tm) {
          var fm = -1;
          return mm.some((function(mm, hm) {
            return mm[0] === Tm && (fm = hm, !0)
          })), fm
        }
        return function() {
          function Tm() {
            this.__entries__ = []
          }
          return Object.defineProperty(Tm.prototype, "size", {
            get: function() {
              return this.__entries__.length
            },
            enumerable: !0,
            configurable: !0
          }), Tm.prototype.get = function(Tm) {
            var fm = mm(this.__entries__, Tm),
              hm = this.__entries__[fm];
            return hm && hm[1]
          }, Tm.prototype.set = function(Tm, fm) {
            var hm = mm(this.__entries__, Tm);
            ~hm ? this.__entries__[hm][1] = fm : this.__entries__.push([Tm, fm])
          }, Tm.prototype.delete = function(Tm) {
            var fm = this.__entries__,
              hm = mm(fm, Tm);
            ~hm && fm.splice(hm, 1)
          }, Tm.prototype.has = function(Tm) {
            return !!~mm(this.__entries__, Tm)
          }, Tm.prototype.clear = function() {
            this.__entries__.splice(0)
          }, Tm.prototype.forEach = function(mm, Tm) {
            void 0 === Tm && (Tm = null);
            for (var fm = 0, hm = this.__entries__; fm < hm.length; fm++) {
              var Am = hm[fm];
              mm.call(Tm, Am[1], Am[0])
            }
          }, Tm
        }()
      }(),
      Am = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document,
      am = "undefined" !== typeof fm.g && fm.g.Math === Math ? fm.g : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")(),
      xm = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(am) : function(mm) {
        return setTimeout((function() {
          return mm(Date.now())
        }), 1e3 / 60)
      };
    var wm = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
      Dm = "undefined" !== typeof MutationObserver,
      im = function() {
        function mm() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(mm, Tm) {
            var fm = !1,
              hm = !1,
              Am = 0;

            function am() {
              fm && (fm = !1, mm()), hm && Dm()
            }

            function wm() {
              xm(am)
            }

            function Dm() {
              var mm = Date.now();
              if (fm) {
                if (mm - Am < 2) return;
                hm = !0
              } else fm = !0, hm = !1, setTimeout(wm, Tm);
              Am = mm
            }
            return Dm
          }(this.refresh.bind(this), 20)
        }
        return mm.prototype.addObserver = function(mm) {
          ~this.observers_.indexOf(mm) || this.observers_.push(mm), this.connected_ || this.connect_()
        }, mm.prototype.removeObserver = function(mm) {
          var Tm = this.observers_,
            fm = Tm.indexOf(mm);
          ~fm && Tm.splice(fm, 1), !Tm.length && this.connected_ && this.disconnect_()
        }, mm.prototype.refresh = function() {
          this.updateObservers_() && this.refresh()
        }, mm.prototype.updateObservers_ = function() {
          var mm = this.observers_.filter((function(mm) {
            return mm.gatherActive(), mm.hasActive()
          }));
          return mm.forEach((function(mm) {
            return mm.broadcastActive()
          })), mm.length > 0
        }, mm.prototype.connect_ = function() {
          Am && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Dm ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
          })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, mm.prototype.disconnect_ = function() {
          Am && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, mm.prototype.onTransitionEnd_ = function(mm) {
          var Tm = mm.propertyName,
            fm = void 0 === Tm ? "" : Tm;
          wm.some((function(mm) {
            return !!~fm.indexOf(mm)
          })) && this.refresh()
        }, mm.getInstance = function() {
          return this.instance_ || (this.instance_ = new mm), this.instance_
        }, mm.instance_ = null, mm
      }(),
      Rm = function(mm, Tm) {
        for (var fm = 0, hm = Object.keys(Tm); fm < hm.length; fm++) {
          var Am = hm[fm];
          Object.defineProperty(mm, Am, {
            value: Tm[Am],
            enumerable: !1,
            writable: !1,
            configurable: !0
          })
        }
        return mm
      },
      pm = function(mm) {
        return mm && mm.ownerDocument && mm.ownerDocument.defaultView || am
      },
      Em = Vm(0, 0, 0, 0);

    function om(mm) {
      return parseFloat(mm) || 0
    }

    function Om(mm) {
      for (var Tm = [], fm = 1; fm < arguments.length; fm++) Tm[fm - 1] = arguments[fm];
      return Tm.reduce((function(Tm, fm) {
        return Tm + om(mm["border-" + fm + "-width"])
      }), 0)
    }

    function Ym(mm) {
      var Tm = mm.clientWidth,
        fm = mm.clientHeight;
      if (!Tm && !fm) return Em;
      var hm = pm(mm).getComputedStyle(mm),
        Am = function(mm) {
          for (var Tm = {}, fm = 0, hm = ["top", "right", "bottom", "left"]; fm < hm.length; fm++) {
            var Am = hm[fm],
              am = mm["padding-" + Am];
            Tm[Am] = om(am)
          }
          return Tm
        }(hm),
        am = Am.left + Am.right,
        xm = Am.top + Am.bottom,
        wm = om(hm.width),
        Dm = om(hm.height);
      if ("border-box" === hm.boxSizing && (Math.round(wm + am) !== Tm && (wm -= Om(hm, "left", "right") + am), Math.round(Dm + xm) !== fm && (Dm -= Om(hm, "top", "bottom") + xm)), ! function(mm) {
          return mm === pm(mm).document.documentElement
        }(mm)) {
        var im = Math.round(wm + am) - Tm,
          Rm = Math.round(Dm + xm) - fm;
        1 !== Math.abs(im) && (wm -= im), 1 !== Math.abs(Rm) && (Dm -= Rm)
      }
      return Vm(Am.left, Am.top, wm, Dm)
    }
    var qm = "undefined" !== typeof SVGGraphicsElement ? function(mm) {
      return mm instanceof pm(mm).SVGGraphicsElement
    } : function(mm) {
      return mm instanceof pm(mm).SVGElement && "function" === typeof mm.getBBox
    };

    function jm(mm) {
      return Am ? qm(mm) ? function(mm) {
        var Tm = mm.getBBox();
        return Vm(0, 0, Tm.width, Tm.height)
      }(mm) : Ym(mm) : Em
    }

    function Vm(mm, Tm, fm, hm) {
      return {
        x: mm,
        y: Tm,
        width: fm,
        height: hm
      }
    }
    var Im = function() {
        function mm(mm) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Vm(0, 0, 0, 0), this.target = mm
        }
        return mm.prototype.isActive = function() {
          var mm = jm(this.target);
          return this.contentRect_ = mm, mm.width !== this.broadcastWidth || mm.height !== this.broadcastHeight
        }, mm.prototype.broadcastRect = function() {
          var mm = this.contentRect_;
          return this.broadcastWidth = mm.width, this.broadcastHeight = mm.height, mm
        }, mm
      }(),
      Km = function(mm, Tm) {
        var fm = function(mm) {
          var Tm = mm.x,
            fm = mm.y,
            hm = mm.width,
            Am = mm.height,
            am = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
            xm = Object.create(am.prototype);
          return Rm(xm, {
            x: Tm,
            y: fm,
            width: hm,
            height: Am,
            top: fm,
            right: Tm + hm,
            bottom: Am + fm,
            left: Tm
          }), xm
        }(Tm);
        Rm(this, {
          target: mm,
          contentRect: fm
        })
      },
      Qm = function() {
        function mm(mm, Tm, fm) {
          if (this.activeObservations_ = [], this.observations_ = new hm, "function" !== typeof mm) throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = mm, this.controller_ = Tm, this.callbackCtx_ = fm
        }
        return mm.prototype.observe = function(mm) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(mm instanceof pm(mm).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var Tm = this.observations_;
            Tm.has(mm) || (Tm.set(mm, new Im(mm)), this.controller_.addObserver(this), this.controller_.refresh())
          }
        }, mm.prototype.unobserve = function(mm) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(mm instanceof pm(mm).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var Tm = this.observations_;
            Tm.has(mm) && (Tm.delete(mm), Tm.size || this.controller_.removeObserver(this))
          }
        }, mm.prototype.disconnect = function() {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, mm.prototype.gatherActive = function() {
          var mm = this;
          this.clearActive(), this.observations_.forEach((function(Tm) {
            Tm.isActive() && mm.activeObservations_.push(Tm)
          }))
        }, mm.prototype.broadcastActive = function() {
          if (this.hasActive()) {
            var mm = this.callbackCtx_,
              Tm = this.activeObservations_.map((function(mm) {
                return new Km(mm.target, mm.broadcastRect())
              }));
            this.callback_.call(mm, Tm, mm), this.clearActive()
          }
        }, mm.prototype.clearActive = function() {
          this.activeObservations_.splice(0)
        }, mm.prototype.hasActive = function() {
          return this.activeObservations_.length > 0
        }, mm
      }(),
      nm = "undefined" !== typeof WeakMap ? new WeakMap : new hm,
      Jm = function mm(Tm) {
        if (!(this instanceof mm)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var fm = im.getInstance(),
          hm = new Qm(Tm, fm, this);
        nm.set(this, hm)
      };
    ["observe", "unobserve", "disconnect"].forEach((function(mm) {
      Jm.prototype[mm] = function() {
        var Tm;
        return (Tm = nm.get(this))[mm].apply(Tm, arguments)
      }
    }));
    const cm = "undefined" !== typeof am.ResizeObserver ? am.ResizeObserver : Jm
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);