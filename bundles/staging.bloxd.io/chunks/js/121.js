export const id = 121;
export const ids = [121];
export const modules = {
  5518: (ee, ie, He) => {
    function ye(ee) {
      return ye = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(ee) {
        return typeof ee
      } : function(ee) {
        return ee && "function" == typeof Symbol && ee.constructor === Symbol && ee !== Symbol.prototype ? "symbol" : typeof ee
      }, ye(ee)
    }
    Object.defineProperty(ie, "__esModule", {
      value: !0
    }), ie.default = void 0;
    var be = Re(He(1053)),
      Me = function(ee, ie) {
        if (!ie && ee && ee.__esModule) return ee;
        if (null === ee || "object" !== ye(ee) && "function" !== typeof ee) return {
          default: ee
        };
        var He = oe(ie);
        if (He && He.has(ee)) return He.get(ee);
        var be = {},
          Me = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var Ke in ee)
          if ("default" !== Ke && Object.prototype.hasOwnProperty.call(ee, Ke)) {
            var Ue = Me ? Object.getOwnPropertyDescriptor(ee, Ke) : null;
            Ue && (Ue.get || Ue.set) ? Object.defineProperty(be, Ke, Ue) : be[Ke] = ee[Ke]
          } be.default = ee, He && He.set(ee, be);
        return be
      }(He(59)),
      Ke = Re(He(5461)),
      Ue = Re(He(5525)),
      Fe = He(5531),
      Je = He(1228);

    function oe(ee) {
      if ("function" !== typeof WeakMap) return null;
      var ie = new WeakMap,
        He = new WeakMap;
      return (oe = function(ee) {
        return ee ? He : ie
      })(ee)
    }

    function Re(ee) {
      return ee && ee.__esModule ? ee : {
        default: ee
      }
    }

    function ke(ee, ie) {
      var He = "undefined" !== typeof Symbol && ee[Symbol.iterator] || ee["@@iterator"];
      if (!He) {
        if (Array.isArray(ee) || (He = function(ee, ie) {
            if (!ee) return;
            if ("string" === typeof ee) return qe(ee, ie);
            var He = Object.prototype.toString.call(ee).slice(8, -1);
            "Object" === He && ee.constructor && (He = ee.constructor.name);
            if ("Map" === He || "Set" === He) return Array.from(ee);
            if ("Arguments" === He || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(He)) return qe(ee, ie)
          }(ee)) || ie && ee && "number" === typeof ee.length) {
          He && (ee = He);
          var ye = 0,
            be = function() {};
          return {
            s: be,
            n: function() {
              return ye >= ee.length ? {
                done: !0
              } : {
                done: !1,
                value: ee[ye++]
              }
            },
            e: function(ee) {
              throw ee
            },
            f: be
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var Me, Ke = !0,
        Ue = !1;
      return {
        s: function() {
          He = He.call(ee)
        },
        n: function() {
          var ee = He.next();
          return Ke = ee.done, ee
        },
        e: function(ee) {
          Ue = !0, Me = ee
        },
        f: function() {
          try {
            Ke || null == He.return || He.return()
          } finally {
            if (Ue) throw Me
          }
        }
      }
    }

    function qe(ee, ie) {
      (null == ie || ie > ee.length) && (ie = ee.length);
      for (var He = 0, ye = new Array(ie); He < ie; He++) ye[He] = ee[He];
      return ye
    }

    function fe(ee, ie) {
      for (var He = 0; He < ie.length; He++) {
        var ye = ie[He];
        ye.enumerable = ye.enumerable || !1, ye.configurable = !0, "value" in ye && (ye.writable = !0), Object.defineProperty(ee, ye.key, ye)
      }
    }

    function Te(ee, ie) {
      return Te = Object.setPrototypeOf || function(ee, ie) {
        return ee.__proto__ = ie, ee
      }, Te(ee, ie)
    }

    function pe(ee) {
      var ie = function() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (ee) {
          return !1
        }
      }();
      return function() {
        var He, be = ze(ee);
        if (ie) {
          var Me = ze(this).constructor;
          He = Reflect.construct(be, arguments, Me)
        } else He = be.apply(this, arguments);
        return function(ee, ie) {
          if (ie && ("object" === ye(ie) || "function" === typeof ie)) return ie;
          if (void 0 !== ie) throw new TypeError("Derived constructors may only return object or undefined");
          return Xe(ee)
        }(this, He)
      }
    }

    function Xe(ee) {
      if (void 0 === ee) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return ee
    }

    function ze(ee) {
      return ze = Object.setPrototypeOf ? Object.getPrototypeOf : function(ee) {
        return ee.__proto__ || Object.getPrototypeOf(ee)
      }, ze(ee)
    }

    function Be(ee, ie, He) {
      return ie in ee ? Object.defineProperty(ee, ie, {
        value: He,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : ee[ie] = He, ee
    }
    var Ee = {
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
      ge = function(ee) {
        ! function(ee, ie) {
          if ("function" !== typeof ie && null !== ie) throw new TypeError("Super expression must either be null or a function");
          Object.defineProperty(ee, "prototype", {
            value: Object.create(ie && ie.prototype, {
              constructor: {
                value: ee,
                writable: !0,
                configurable: !0
              }
            }),
            writable: !1
          }), ie && Te(ee, ie)
        }(Ke, ee);
        var ie, He, ye, Me = pe(Ke);

        function Ke(ee, ie) {
          var He;
          return function(ee, ie) {
            if (!(ee instanceof ie)) throw new TypeError("Cannot call a class as a function")
          }(this, Ke), Be(Xe(He = Me.call(this, ee, ie)), "handleFormat", (function(ee) {
            var ie = He.props.format;
            return ie ? ie(ee) : ee
          })), Be(Xe(He), "handleUpdate", (function() {
            if (He.slider) {
              var ee = He.props.orientation,
                ie = (0, Fe.capitalize)(Ee.orientation[ee].dimension),
                ye = He.slider["offset".concat(ie)],
                be = He.handle["offset".concat(ie)];
              He.setState({
                limit: ye - be,
                grab: be / 2
              })
            }
          })), Be(Xe(He), "handleStart", (function(ee) {
            var ie = He.props.onChangeStart;
            document.addEventListener("mousemove", He.handleDrag), document.addEventListener("mouseup", He.handleEnd), He.setState({
              active: !0
            }, (function() {
              ie && ie(ee)
            }))
          })), Be(Xe(He), "handleDrag", (function(ee) {
            ee.stopPropagation();
            var ie = He.props.onChange,
              ye = ee.target,
              be = ye.className,
              Me = ye.classList,
              Ke = ye.dataset;
            if (ie && "rangeslider__labels" !== be) {
              var Ue = He.position(ee);
              Me && Me.contains("rangeslider__label-item") && Ke.value && (Ue = parseFloat(Ke.value)), ie && ie(Ue, ee)
            }
          })), Be(Xe(He), "handleEnd", (function(ee) {
            var ie = He.props.onChangeComplete;
            He.setState({
              active: !1
            }, (function() {
              ie && ie(ee)
            })), document.removeEventListener("mousemove", He.handleDrag), document.removeEventListener("mouseup", He.handleEnd)
          })), Be(Xe(He), "handleKeyDown", (function(ee) {
            ee.preventDefault();
            var ie, ye = ee.keyCode,
              be = He.props,
              Me = be.value,
              Ke = be.min,
              Ue = be.max,
              Fe = be.step,
              Je = be.onChange;
            switch (ye) {
              case 38:
              case 39:
                ie = Me + Fe > Ue ? Ue : Me + Fe, Je && Je(ie, ee);
                break;
              case 37:
              case 40:
                ie = Me - Fe < Ke ? Ke : Me - Fe, Je && Je(ie, ee)
            }
          })), Be(Xe(He), "getPositionFromValue", (function(ee) {
            var ie = He.state.limit,
              ye = He.props,
              be = ye.min,
              Me = (ee - be) / (ye.max - be);
            return Math.round(Me * ie)
          })), Be(Xe(He), "getValueFromPosition", (function(ee) {
            var ie = He.state.limit,
              ye = He.props,
              be = ye.orientation,
              Me = ye.min,
              Ke = ye.max,
              Ue = ye.step,
              Je = (0, Fe.clamp)(ee, 0, ie) / (ie || 1),
              oe = Ue * Math.round(Je * (Ke - Me) / Ue),
              Re = "horizontal" === be ? oe + Me : Ke - oe;
            return (0, Fe.clamp)(Re, Me, Ke)
          })), Be(Xe(He), "position", (function(ee) {
            var ie = He.state.grab,
              ye = He.props,
              be = ye.orientation,
              Me = ye.reverse,
              Ke = He.slider,
              Ue = Ee.orientation[be].coordinate,
              Je = Me ? Ee.orientation[be].reverseDirection : Ee.orientation[be].direction,
              oe = "client".concat((0, Fe.capitalize)(Ue)),
              Re = ee.touches ? ee.touches[0][oe] : ee[oe],
              ke = Ke.getBoundingClientRect()[Je],
              qe = Me ? ke - Re - ie : Re - ke - ie;
            return He.getValueFromPosition(qe)
          })), Be(Xe(He), "coordinates", (function(ee) {
            var ie = He.state,
              ye = ie.limit,
              be = ie.grab,
              Me = He.props.orientation,
              Ke = He.getValueFromPosition(ee),
              Ue = He.getPositionFromValue(Ke),
              Fe = "horizontal" === Me ? Ue + be : Ue;
            return {
              fill: "horizontal" === Me ? Fe : ye - Fe,
              handle: Fe,
              label: Fe
            }
          })), Be(Xe(He), "renderLabels", (function(ee) {
            return (0, Je.jsx)("ul", {
              ref: function(ee) {
                He.labels = ee
              },
              className: (0, be.default)("rangeslider__labels"),
              children: ee
            })
          })), He.state = {
            active: !1,
            limit: 0,
            grab: 0
          }, He
        }
        return ie = Ke, (He = [{
          key: "componentDidMount",
          value: function() {
            this.handleUpdate(), new Ue.default(this.handleUpdate).observe(this.slider)
          }
        }, {
          key: "render",
          value: function() {
            var ee = this,
              ie = this.props,
              He = ie.value,
              ye = ie.orientation,
              Me = ie.className,
              Ke = ie.tooltip,
              Ue = ie.reverse,
              Fe = ie.labels,
              oe = ie.min,
              Re = ie.max,
              qe = ie.handleLabel,
              fe = this.state.active,
              Te = Ee.orientation[ye].dimension,
              pe = Ue ? Ee.orientation[ye].reverseDirection : Ee.orientation[ye].direction,
              Xe = this.getPositionFromValue(He),
              ze = this.coordinates(Xe),
              ge = Be({}, Te, "".concat(ze.fill, "px")),
              Oe = Be({}, pe, "".concat(ze.handle, "px")),
              de = Ke && fe,
              We = [],
              te = Object.keys(Fe);
            if (te.length > 0) {
              var Ze, we = ke(te = te.sort((function(ee, ie) {
                return Ue ? ee - ie : ie - ee
              })));
              try {
                for (we.s(); !(Ze = we.n()).done;) {
                  var De = Ze.value,
                    Pe = this.getPositionFromValue(De),
                    Ae = this.coordinates(Pe),
                    Ye = Be({}, pe, "".concat(Ae.label, "px"));
                  We.push((0, Je.jsx)("li", {
                    className: (0, be.default)("rangeslider__label-item"),
                    "data-value": De,
                    onMouseDown: this.handleDrag,
                    onTouchStart: this.handleStart,
                    onTouchEnd: this.handleEnd,
                    style: Ye,
                    children: this.props.labels[De]
                  }, De))
                }
              } catch (Ve) {
                we.e(Ve)
              } finally {
                we.f()
              }
            }
            return (0, Je.jsxs)("div", {
              ref: function(ie) {
                ee.slider = ie
              },
              className: (0, be.default)("rangeslider", "rangeslider-".concat(ye), {
                "rangeslider-reverse": Ue
              }, Me),
              onMouseDown: this.handleDrag,
              onMouseUp: this.handleEnd,
              onTouchStart: this.handleStart,
              onTouchEnd: this.handleEnd,
              "aria-valuemin": oe,
              "aria-valuemax": Re,
              "aria-valuenow": He,
              "aria-orientation": ye,
              children: [(0, Je.jsx)("div", {
                className: "rangeslider__fill",
                style: ge
              }), (0, Je.jsxs)("div", {
                ref: function(ie) {
                  ee.handle = ie
                },
                className: "rangeslider__handle",
                onMouseDown: this.handleStart,
                onTouchMove: this.handleDrag,
                onTouchEnd: this.handleEnd,
                onKeyDown: this.handleKeyDown,
                style: Oe,
                tabIndex: 0,
                children: [de && (0, Je.jsx)("div", {
                  ref: function(ie) {
                    ee.tooltip = ie
                  },
                  className: "rangeslider__handle-tooltip",
                  children: (0, Je.jsx)("span", {
                    children: this.handleFormat(He)
                  })
                }), (0, Je.jsx)("div", {
                  className: "rangeslider__handle-label",
                  children: qe
                })]
              }), Fe && this.renderLabels(We)]
            })
          }
        }]) && fe(ie.prototype, He), ye && fe(ie, ye), Object.defineProperty(ie, "prototype", {
          writable: !1
        }), Ke
      }(Me.Component);
    Be(ge, "propTypes", {
      min: Ke.default.number,
      max: Ke.default.number,
      step: Ke.default.number,
      value: Ke.default.number,
      orientation: Ke.default.string,
      tooltip: Ke.default.bool,
      reverse: Ke.default.bool,
      labels: Ke.default.object,
      handleLabel: Ke.default.string,
      format: Ke.default.func,
      onChangeStart: Ke.default.func,
      onChange: Ke.default.func,
      onChangeComplete: Ke.default.func
    }), Be(ge, "defaultProps", {
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
    var Oe = ge;
    ie.default = Oe
  },
  5510: (ee, ie, He) => {
    var ye;
    ie.c = void 0;
    var be = ((ye = He(5518)) && ye.__esModule ? ye : {
      default: ye
    }).default;
    ie.c = be
  },
  5531: (ee, ie) => {
    Object.defineProperty(ie, "__esModule", {
      value: !0
    }), ie.capitalize = function(ee) {
      return ee.charAt(0).toUpperCase() + ee.substr(1)
    }, ie.clamp = function(ee, ie, He) {
      return Math.min(Math.max(ee, ie), He)
    }
  },
  5469: (ee, ie, He) => {
    var ye = He(5475);

    function be() {}

    function Me() {}
    Me.resetWarningCache = be, ee.exports = function() {
      function ee(ee, ie, He, be, Me, Ke) {
        if (Ke !== ye) {
          var Ue = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw Ue.name = "Invariant Violation", Ue
        }
      }

      function ie() {
        return ee
      }
      ee.isRequired = ee;
      var He = {
        array: ee,
        bigint: ee,
        bool: ee,
        func: ee,
        number: ee,
        object: ee,
        string: ee,
        symbol: ee,
        any: ee,
        arrayOf: ie,
        element: ee,
        elementType: ee,
        instanceOf: ie,
        node: ee,
        objectOf: ie,
        oneOf: ie,
        oneOfType: ie,
        shape: ie,
        exact: ie,
        checkPropTypes: Me,
        resetWarningCache: be
      };
      return He.PropTypes = He, He
    }
  },
  5461: (ee, ie, He) => {
    ee.exports = He(5469)()
  },
  5475: ee => {
    ee.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  5525: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      default: () => We
    });
    var ye = function() {
        if ("undefined" !== typeof Map) return Map;

        function ee(ee, ie) {
          var He = -1;
          return ee.some((function(ee, ye) {
            return ee[0] === ie && (He = ye, !0)
          })), He
        }
        return function() {
          function ie() {
            this.__entries__ = []
          }
          return Object.defineProperty(ie.prototype, "size", {
            get: function() {
              return this.__entries__.length
            },
            enumerable: !0,
            configurable: !0
          }), ie.prototype.get = function(ie) {
            var He = ee(this.__entries__, ie),
              ye = this.__entries__[He];
            return ye && ye[1]
          }, ie.prototype.set = function(ie, He) {
            var ye = ee(this.__entries__, ie);
            ~ye ? this.__entries__[ye][1] = He : this.__entries__.push([ie, He])
          }, ie.prototype.delete = function(ie) {
            var He = this.__entries__,
              ye = ee(He, ie);
            ~ye && He.splice(ye, 1)
          }, ie.prototype.has = function(ie) {
            return !!~ee(this.__entries__, ie)
          }, ie.prototype.clear = function() {
            this.__entries__.splice(0)
          }, ie.prototype.forEach = function(ee, ie) {
            void 0 === ie && (ie = null);
            for (var He = 0, ye = this.__entries__; He < ye.length; He++) {
              var be = ye[He];
              ee.call(ie, be[1], be[0])
            }
          }, ie
        }()
      }(),
      be = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document,
      Me = "undefined" !== typeof He.g && He.g.Math === Math ? He.g : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")(),
      Ke = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(Me) : function(ee) {
        return setTimeout((function() {
          return ee(Date.now())
        }), 1e3 / 60)
      };
    var Ue = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
      Fe = "undefined" !== typeof MutationObserver,
      Je = function() {
        function ee() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(ee, ie) {
            var He = !1,
              ye = !1,
              be = 0;

            function Me() {
              He && (He = !1, ee()), ye && Fe()
            }

            function Ue() {
              Ke(Me)
            }

            function Fe() {
              var ee = Date.now();
              if (He) {
                if (ee - be < 2) return;
                ye = !0
              } else He = !0, ye = !1, setTimeout(Ue, ie);
              be = ee
            }
            return Fe
          }(this.refresh.bind(this), 20)
        }
        return ee.prototype.addObserver = function(ee) {
          ~this.observers_.indexOf(ee) || this.observers_.push(ee), this.connected_ || this.connect_()
        }, ee.prototype.removeObserver = function(ee) {
          var ie = this.observers_,
            He = ie.indexOf(ee);
          ~He && ie.splice(He, 1), !ie.length && this.connected_ && this.disconnect_()
        }, ee.prototype.refresh = function() {
          this.updateObservers_() && this.refresh()
        }, ee.prototype.updateObservers_ = function() {
          var ee = this.observers_.filter((function(ee) {
            return ee.gatherActive(), ee.hasActive()
          }));
          return ee.forEach((function(ee) {
            return ee.broadcastActive()
          })), ee.length > 0
        }, ee.prototype.connect_ = function() {
          be && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Fe ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
          })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, ee.prototype.disconnect_ = function() {
          be && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, ee.prototype.onTransitionEnd_ = function(ee) {
          var ie = ee.propertyName,
            He = void 0 === ie ? "" : ie;
          Ue.some((function(ee) {
            return !!~He.indexOf(ee)
          })) && this.refresh()
        }, ee.getInstance = function() {
          return this.instance_ || (this.instance_ = new ee), this.instance_
        }, ee.instance_ = null, ee
      }(),
      oe = function(ee, ie) {
        for (var He = 0, ye = Object.keys(ie); He < ye.length; He++) {
          var be = ye[He];
          Object.defineProperty(ee, be, {
            value: ie[be],
            enumerable: !1,
            writable: !1,
            configurable: !0
          })
        }
        return ee
      },
      Re = function(ee) {
        return ee && ee.ownerDocument && ee.ownerDocument.defaultView || Me
      },
      ke = ze(0, 0, 0, 0);

    function qe(ee) {
      return parseFloat(ee) || 0
    }

    function fe(ee) {
      for (var ie = [], He = 1; He < arguments.length; He++) ie[He - 1] = arguments[He];
      return ie.reduce((function(ie, He) {
        return ie + qe(ee["border-" + He + "-width"])
      }), 0)
    }

    function Te(ee) {
      var ie = ee.clientWidth,
        He = ee.clientHeight;
      if (!ie && !He) return ke;
      var ye = Re(ee).getComputedStyle(ee),
        be = function(ee) {
          for (var ie = {}, He = 0, ye = ["top", "right", "bottom", "left"]; He < ye.length; He++) {
            var be = ye[He],
              Me = ee["padding-" + be];
            ie[be] = qe(Me)
          }
          return ie
        }(ye),
        Me = be.left + be.right,
        Ke = be.top + be.bottom,
        Ue = qe(ye.width),
        Fe = qe(ye.height);
      if ("border-box" === ye.boxSizing && (Math.round(Ue + Me) !== ie && (Ue -= fe(ye, "left", "right") + Me), Math.round(Fe + Ke) !== He && (Fe -= fe(ye, "top", "bottom") + Ke)), ! function(ee) {
          return ee === Re(ee).document.documentElement
        }(ee)) {
        var Je = Math.round(Ue + Me) - ie,
          oe = Math.round(Fe + Ke) - He;
        1 !== Math.abs(Je) && (Ue -= Je), 1 !== Math.abs(oe) && (Fe -= oe)
      }
      return ze(be.left, be.top, Ue, Fe)
    }
    var pe = "undefined" !== typeof SVGGraphicsElement ? function(ee) {
      return ee instanceof Re(ee).SVGGraphicsElement
    } : function(ee) {
      return ee instanceof Re(ee).SVGElement && "function" === typeof ee.getBBox
    };

    function Xe(ee) {
      return be ? pe(ee) ? function(ee) {
        var ie = ee.getBBox();
        return ze(0, 0, ie.width, ie.height)
      }(ee) : Te(ee) : ke
    }

    function ze(ee, ie, He, ye) {
      return {
        x: ee,
        y: ie,
        width: He,
        height: ye
      }
    }
    var Be = function() {
        function ee(ee) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = ze(0, 0, 0, 0), this.target = ee
        }
        return ee.prototype.isActive = function() {
          var ee = Xe(this.target);
          return this.contentRect_ = ee, ee.width !== this.broadcastWidth || ee.height !== this.broadcastHeight
        }, ee.prototype.broadcastRect = function() {
          var ee = this.contentRect_;
          return this.broadcastWidth = ee.width, this.broadcastHeight = ee.height, ee
        }, ee
      }(),
      Ee = function(ee, ie) {
        var He = function(ee) {
          var ie = ee.x,
            He = ee.y,
            ye = ee.width,
            be = ee.height,
            Me = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
            Ke = Object.create(Me.prototype);
          return oe(Ke, {
            x: ie,
            y: He,
            width: ye,
            height: be,
            top: He,
            right: ie + ye,
            bottom: be + He,
            left: ie
          }), Ke
        }(ie);
        oe(this, {
          target: ee,
          contentRect: He
        })
      },
      ge = function() {
        function ee(ee, ie, He) {
          if (this.activeObservations_ = [], this.observations_ = new ye, "function" !== typeof ee) throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = ee, this.controller_ = ie, this.callbackCtx_ = He
        }
        return ee.prototype.observe = function(ee) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(ee instanceof Re(ee).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var ie = this.observations_;
            ie.has(ee) || (ie.set(ee, new Be(ee)), this.controller_.addObserver(this), this.controller_.refresh())
          }
        }, ee.prototype.unobserve = function(ee) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(ee instanceof Re(ee).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var ie = this.observations_;
            ie.has(ee) && (ie.delete(ee), ie.size || this.controller_.removeObserver(this))
          }
        }, ee.prototype.disconnect = function() {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, ee.prototype.gatherActive = function() {
          var ee = this;
          this.clearActive(), this.observations_.forEach((function(ie) {
            ie.isActive() && ee.activeObservations_.push(ie)
          }))
        }, ee.prototype.broadcastActive = function() {
          if (this.hasActive()) {
            var ee = this.callbackCtx_,
              ie = this.activeObservations_.map((function(ee) {
                return new Ee(ee.target, ee.broadcastRect())
              }));
            this.callback_.call(ee, ie, ee), this.clearActive()
          }
        }, ee.prototype.clearActive = function() {
          this.activeObservations_.splice(0)
        }, ee.prototype.hasActive = function() {
          return this.activeObservations_.length > 0
        }, ee
      }(),
      Oe = "undefined" !== typeof WeakMap ? new WeakMap : new ye,
      de = function ee(ie) {
        if (!(this instanceof ee)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var He = Je.getInstance(),
          ye = new ge(ie, He, this);
        Oe.set(this, ye)
      };
    ["observe", "unobserve", "disconnect"].forEach((function(ee) {
      de.prototype[ee] = function() {
        var ie;
        return (ie = Oe.get(this))[ee].apply(ie, arguments)
      }
    }));
    const We = "undefined" !== typeof Me.ResizeObserver ? Me.ResizeObserver : de
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);