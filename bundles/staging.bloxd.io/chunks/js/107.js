export const id = 107;
export const ids = [107];
export const modules = {
  4952: (TT, kT, cT) => {
    function lT(TT) {
      return lT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, lT(TT)
    }
    Object.defineProperty(kT, "__esModule", {
      value: !0
    }), kT.default = void 0;
    var MT = AT(cT(1046)),
      KT = function(TT, kT) {
        if (!kT && TT && TT.__esModule) return TT;
        if (null === TT || "object" !== lT(TT) && "function" !== typeof TT) return {
          default: TT
        };
        var cT = IT(kT);
        if (cT && cT.has(TT)) return cT.get(TT);
        var MT = {},
          KT = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var OT in TT)
          if ("default" !== OT && Object.prototype.hasOwnProperty.call(TT, OT)) {
            var yT = KT ? Object.getOwnPropertyDescriptor(TT, OT) : null;
            yT && (yT.get || yT.set) ? Object.defineProperty(MT, OT, yT) : MT[OT] = TT[OT]
          } MT.default = TT, cT && cT.set(TT, MT);
        return MT
      }(cT(71)),
      OT = AT(cT(4917)),
      yT = AT(cT(4956)),
      fT = cT(4959),
      xT = cT(1099);

    function IT(TT) {
      if ("function" !== typeof WeakMap) return null;
      var kT = new WeakMap,
        cT = new WeakMap;
      return (IT = function(TT) {
        return TT ? cT : kT
      })(TT)
    }

    function AT(TT) {
      return TT && TT.__esModule ? TT : {
        default: TT
      }
    }

    function CT(TT, kT) {
      var cT = "undefined" !== typeof Symbol && TT[Symbol.iterator] || TT["@@iterator"];
      if (!cT) {
        if (Array.isArray(TT) || (cT = function(TT, kT) {
            if (!TT) return;
            if ("string" === typeof TT) return jT(TT, kT);
            var cT = Object.prototype.toString.call(TT).slice(8, -1);
            "Object" === cT && TT.constructor && (cT = TT.constructor.name);
            if ("Map" === cT || "Set" === cT) return Array.from(TT);
            if ("Arguments" === cT || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cT)) return jT(TT, kT)
          }(TT)) || kT && TT && "number" === typeof TT.length) {
          cT && (TT = cT);
          var lT = 0,
            MT = function() {};
          return {
            s: MT,
            n: function() {
              return lT >= TT.length ? {
                done: !0
              } : {
                done: !1,
                value: TT[lT++]
              }
            },
            e: function(TT) {
              throw TT
            },
            f: MT
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var KT, OT = !0,
        yT = !1;
      return {
        s: function() {
          cT = cT.call(TT)
        },
        n: function() {
          var TT = cT.next();
          return OT = TT.done, TT
        },
        e: function(TT) {
          yT = !0, KT = TT
        },
        f: function() {
          try {
            OT || null == cT.return || cT.return()
          } finally {
            if (yT) throw KT
          }
        }
      }
    }

    function jT(TT, kT) {
      (null == kT || kT > TT.length) && (kT = TT.length);
      for (var cT = 0, lT = new Array(kT); cT < kT; cT++) lT[cT] = TT[cT];
      return lT
    }

    function vT(TT, kT) {
      for (var cT = 0; cT < kT.length; cT++) {
        var lT = kT[cT];
        lT.enumerable = lT.enumerable || !1, lT.configurable = !0, "value" in lT && (lT.writable = !0), Object.defineProperty(TT, lT.key, lT)
      }
    }

    function tT(TT, kT) {
      return tT = Object.setPrototypeOf || function(TT, kT) {
        return TT.__proto__ = kT, TT
      }, tT(TT, kT)
    }

    function hT(TT) {
      var kT = function() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (TT) {
          return !1
        }
      }();
      return function() {
        var cT, MT = QT(TT);
        if (kT) {
          var KT = QT(this).constructor;
          cT = Reflect.construct(MT, arguments, KT)
        } else cT = MT.apply(this, arguments);
        return function(TT, kT) {
          if (kT && ("object" === lT(kT) || "function" === typeof kT)) return kT;
          if (void 0 !== kT) throw new TypeError("Derived constructors may only return object or undefined");
          return NT(TT)
        }(this, cT)
      }
    }

    function NT(TT) {
      if (void 0 === TT) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return TT
    }

    function QT(TT) {
      return QT = Object.setPrototypeOf ? Object.getPrototypeOf : function(TT) {
        return TT.__proto__ || Object.getPrototypeOf(TT)
      }, QT(TT)
    }

    function ST(TT, kT, cT) {
      return kT in TT ? Object.defineProperty(TT, kT, {
        value: cT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[kT] = cT, TT
    }
    var DT = {
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
      aT = function(TT) {
        ! function(TT, kT) {
          if ("function" !== typeof kT && null !== kT) throw new TypeError("Super expression must either be null or a function");
          Object.defineProperty(TT, "prototype", {
            value: Object.create(kT && kT.prototype, {
              constructor: {
                value: TT,
                writable: !0,
                configurable: !0
              }
            }),
            writable: !1
          }), kT && tT(TT, kT)
        }(OT, TT);
        var kT, cT, lT, KT = hT(OT);

        function OT(TT, kT) {
          var cT;
          return function(TT, kT) {
            if (!(TT instanceof kT)) throw new TypeError("Cannot call a class as a function")
          }(this, OT), ST(NT(cT = KT.call(this, TT, kT)), "handleFormat", (function(TT) {
            var kT = cT.props.format;
            return kT ? kT(TT) : TT
          })), ST(NT(cT), "handleUpdate", (function() {
            if (cT.slider) {
              var TT = cT.props.orientation,
                kT = (0, fT.capitalize)(DT.orientation[TT].dimension),
                lT = cT.slider["offset".concat(kT)],
                MT = cT.handle["offset".concat(kT)];
              cT.setState({
                limit: lT - MT,
                grab: MT / 2
              })
            }
          })), ST(NT(cT), "handleStart", (function(TT) {
            var kT = cT.props.onChangeStart;
            document.addEventListener("mousemove", cT.handleDrag), document.addEventListener("mouseup", cT.handleEnd), cT.setState({
              active: !0
            }, (function() {
              kT && kT(TT)
            }))
          })), ST(NT(cT), "handleDrag", (function(TT) {
            TT.stopPropagation();
            var kT = cT.props.onChange,
              lT = TT.target,
              MT = lT.className,
              KT = lT.classList,
              OT = lT.dataset;
            if (kT && "rangeslider__labels" !== MT) {
              var yT = cT.position(TT);
              KT && KT.contains("rangeslider__label-item") && OT.value && (yT = parseFloat(OT.value)), kT && kT(yT, TT)
            }
          })), ST(NT(cT), "handleEnd", (function(TT) {
            var kT = cT.props.onChangeComplete;
            cT.setState({
              active: !1
            }, (function() {
              kT && kT(TT)
            })), document.removeEventListener("mousemove", cT.handleDrag), document.removeEventListener("mouseup", cT.handleEnd)
          })), ST(NT(cT), "handleKeyDown", (function(TT) {
            TT.preventDefault();
            var kT, lT = TT.keyCode,
              MT = cT.props,
              KT = MT.value,
              OT = MT.min,
              yT = MT.max,
              fT = MT.step,
              xT = MT.onChange;
            switch (lT) {
              case 38:
              case 39:
                kT = KT + fT > yT ? yT : KT + fT, xT && xT(kT, TT);
                break;
              case 37:
              case 40:
                kT = KT - fT < OT ? OT : KT - fT, xT && xT(kT, TT)
            }
          })), ST(NT(cT), "getPositionFromValue", (function(TT) {
            var kT = cT.state.limit,
              lT = cT.props,
              MT = lT.min,
              KT = (TT - MT) / (lT.max - MT);
            return Math.round(KT * kT)
          })), ST(NT(cT), "getValueFromPosition", (function(TT) {
            var kT = cT.state.limit,
              lT = cT.props,
              MT = lT.orientation,
              KT = lT.min,
              OT = lT.max,
              yT = lT.step,
              xT = (0, fT.clamp)(TT, 0, kT) / (kT || 1),
              IT = yT * Math.round(xT * (OT - KT) / yT),
              AT = "horizontal" === MT ? IT + KT : OT - IT;
            return (0, fT.clamp)(AT, KT, OT)
          })), ST(NT(cT), "position", (function(TT) {
            var kT = cT.state.grab,
              lT = cT.props,
              MT = lT.orientation,
              KT = lT.reverse,
              OT = cT.slider,
              yT = DT.orientation[MT].coordinate,
              xT = KT ? DT.orientation[MT].reverseDirection : DT.orientation[MT].direction,
              IT = "client".concat((0, fT.capitalize)(yT)),
              AT = TT.touches ? TT.touches[0][IT] : TT[IT],
              CT = OT.getBoundingClientRect()[xT],
              jT = KT ? CT - AT - kT : AT - CT - kT;
            return cT.getValueFromPosition(jT)
          })), ST(NT(cT), "coordinates", (function(TT) {
            var kT = cT.state,
              lT = kT.limit,
              MT = kT.grab,
              KT = cT.props.orientation,
              OT = cT.getValueFromPosition(TT),
              yT = cT.getPositionFromValue(OT),
              fT = "horizontal" === KT ? yT + MT : yT;
            return {
              fill: "horizontal" === KT ? fT : lT - fT,
              handle: fT,
              label: fT
            }
          })), ST(NT(cT), "renderLabels", (function(TT) {
            return (0, xT.jsx)("ul", {
              ref: function(TT) {
                cT.labels = TT
              },
              className: (0, MT.default)("rangeslider__labels"),
              children: TT
            })
          })), cT.state = {
            active: !1,
            limit: 0,
            grab: 0
          }, cT
        }
        return kT = OT, (cT = [{
          key: "componentDidMount",
          value: function() {
            this.handleUpdate(), new yT.default(this.handleUpdate).observe(this.slider)
          }
        }, {
          key: "render",
          value: function() {
            var TT = this,
              kT = this.props,
              cT = kT.value,
              lT = kT.orientation,
              KT = kT.className,
              OT = kT.tooltip,
              yT = kT.reverse,
              fT = kT.labels,
              IT = kT.min,
              AT = kT.max,
              jT = kT.handleLabel,
              vT = this.state.active,
              tT = DT.orientation[lT].dimension,
              hT = yT ? DT.orientation[lT].reverseDirection : DT.orientation[lT].direction,
              NT = this.getPositionFromValue(cT),
              QT = this.coordinates(NT),
              aT = ST({}, tT, "".concat(QT.fill, "px")),
              FT = ST({}, hT, "".concat(QT.handle, "px")),
              rT = OT && vT,
              PT = [],
              wT = Object.keys(fT);
            if (wT.length > 0) {
              var mT, bT = CT(wT = wT.sort((function(TT, kT) {
                return yT ? TT - kT : kT - TT
              })));
              try {
                for (bT.s(); !(mT = bT.n()).done;) {
                  var zT = mT.value,
                    JT = this.getPositionFromValue(zT),
                    oT = this.coordinates(JT),
                    HT = ST({}, hT, "".concat(oT.label, "px"));
                  PT.push((0, xT.jsx)("li", {
                    className: (0, MT.default)("rangeslider__label-item"),
                    "data-value": zT,
                    onMouseDown: this.handleDrag,
                    onTouchStart: this.handleStart,
                    onTouchEnd: this.handleEnd,
                    style: HT,
                    children: this.props.labels[zT]
                  }, zT))
                }
              } catch (eT) {
                bT.e(eT)
              } finally {
                bT.f()
              }
            }
            return (0, xT.jsxs)("div", {
              ref: function(kT) {
                TT.slider = kT
              },
              className: (0, MT.default)("rangeslider", "rangeslider-".concat(lT), {
                "rangeslider-reverse": yT
              }, KT),
              onMouseDown: this.handleDrag,
              onMouseUp: this.handleEnd,
              onTouchStart: this.handleStart,
              onTouchEnd: this.handleEnd,
              "aria-valuemin": IT,
              "aria-valuemax": AT,
              "aria-valuenow": cT,
              "aria-orientation": lT,
              children: [(0, xT.jsx)("div", {
                className: "rangeslider__fill",
                style: aT
              }), (0, xT.jsxs)("div", {
                ref: function(kT) {
                  TT.handle = kT
                },
                className: "rangeslider__handle",
                onMouseDown: this.handleStart,
                onTouchMove: this.handleDrag,
                onTouchEnd: this.handleEnd,
                onKeyDown: this.handleKeyDown,
                style: FT,
                tabIndex: 0,
                children: [rT && (0, xT.jsx)("div", {
                  ref: function(kT) {
                    TT.tooltip = kT
                  },
                  className: "rangeslider__handle-tooltip",
                  children: (0, xT.jsx)("span", {
                    children: this.handleFormat(cT)
                  })
                }), (0, xT.jsx)("div", {
                  className: "rangeslider__handle-label",
                  children: jT
                })]
              }), fT && this.renderLabels(PT)]
            })
          }
        }]) && vT(kT.prototype, cT), lT && vT(kT, lT), Object.defineProperty(kT, "prototype", {
          writable: !1
        }), OT
      }(KT.Component);
    ST(aT, "propTypes", {
      min: OT.default.number,
      max: OT.default.number,
      step: OT.default.number,
      value: OT.default.number,
      orientation: OT.default.string,
      tooltip: OT.default.bool,
      reverse: OT.default.bool,
      labels: OT.default.object,
      handleLabel: OT.default.string,
      format: OT.default.func,
      onChangeStart: OT.default.func,
      onChange: OT.default.func,
      onChangeComplete: OT.default.func
    }), ST(aT, "defaultProps", {
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
    var FT = aT;
    kT.default = FT
  },
  4948: (TT, kT, cT) => {
    var lT;
    kT.b = void 0;
    var MT = ((lT = cT(4952)) && lT.__esModule ? lT : {
      default: lT
    }).default;
    kT.b = MT
  },
  4959: (TT, kT) => {
    Object.defineProperty(kT, "__esModule", {
      value: !0
    }), kT.capitalize = function(TT) {
      return TT.charAt(0).toUpperCase() + TT.substr(1)
    }, kT.clamp = function(TT, kT, cT) {
      return Math.min(Math.max(TT, kT), cT)
    }
  },
  4919: (TT, kT, cT) => {
    var lT = cT(4923);

    function MT() {}

    function KT() {}
    KT.resetWarningCache = MT, TT.exports = function() {
      function TT(TT, kT, cT, MT, KT, OT) {
        if (OT !== lT) {
          var yT = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw yT.name = "Invariant Violation", yT
        }
      }

      function kT() {
        return TT
      }
      TT.isRequired = TT;
      var cT = {
        array: TT,
        bigint: TT,
        bool: TT,
        func: TT,
        number: TT,
        object: TT,
        string: TT,
        symbol: TT,
        any: TT,
        arrayOf: kT,
        element: TT,
        elementType: TT,
        instanceOf: kT,
        node: TT,
        objectOf: kT,
        oneOf: kT,
        oneOfType: kT,
        shape: kT,
        exact: kT,
        checkPropTypes: KT,
        resetWarningCache: MT
      };
      return cT.PropTypes = cT, cT
    }
  },
  4917: (TT, kT, cT) => {
    TT.exports = cT(4919)()
  },
  4923: TT => {
    TT.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  4956: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      default: () => PT
    });
    var lT = function() {
        if ("undefined" !== typeof Map) return Map;

        function TT(TT, kT) {
          var cT = -1;
          return TT.some((function(TT, lT) {
            return TT[0] === kT && (cT = lT, !0)
          })), cT
        }
        return function() {
          function kT() {
            this.__entries__ = []
          }
          return Object.defineProperty(kT.prototype, "size", {
            get: function() {
              return this.__entries__.length
            },
            enumerable: !0,
            configurable: !0
          }), kT.prototype.get = function(kT) {
            var cT = TT(this.__entries__, kT),
              lT = this.__entries__[cT];
            return lT && lT[1]
          }, kT.prototype.set = function(kT, cT) {
            var lT = TT(this.__entries__, kT);
            ~lT ? this.__entries__[lT][1] = cT : this.__entries__.push([kT, cT])
          }, kT.prototype.delete = function(kT) {
            var cT = this.__entries__,
              lT = TT(cT, kT);
            ~lT && cT.splice(lT, 1)
          }, kT.prototype.has = function(kT) {
            return !!~TT(this.__entries__, kT)
          }, kT.prototype.clear = function() {
            this.__entries__.splice(0)
          }, kT.prototype.forEach = function(TT, kT) {
            void 0 === kT && (kT = null);
            for (var cT = 0, lT = this.__entries__; cT < lT.length; cT++) {
              var MT = lT[cT];
              TT.call(kT, MT[1], MT[0])
            }
          }, kT
        }()
      }(),
      MT = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document,
      KT = "undefined" !== typeof cT.g && cT.g.Math === Math ? cT.g : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")(),
      OT = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(KT) : function(TT) {
        return setTimeout((function() {
          return TT(Date.now())
        }), 1e3 / 60)
      };
    var yT = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
      fT = "undefined" !== typeof MutationObserver,
      xT = function() {
        function TT() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(TT, kT) {
            var cT = !1,
              lT = !1,
              MT = 0;

            function KT() {
              cT && (cT = !1, TT()), lT && fT()
            }

            function yT() {
              OT(KT)
            }

            function fT() {
              var TT = Date.now();
              if (cT) {
                if (TT - MT < 2) return;
                lT = !0
              } else cT = !0, lT = !1, setTimeout(yT, kT);
              MT = TT
            }
            return fT
          }(this.refresh.bind(this), 20)
        }
        return TT.prototype.addObserver = function(TT) {
          ~this.observers_.indexOf(TT) || this.observers_.push(TT), this.connected_ || this.connect_()
        }, TT.prototype.removeObserver = function(TT) {
          var kT = this.observers_,
            cT = kT.indexOf(TT);
          ~cT && kT.splice(cT, 1), !kT.length && this.connected_ && this.disconnect_()
        }, TT.prototype.refresh = function() {
          this.updateObservers_() && this.refresh()
        }, TT.prototype.updateObservers_ = function() {
          var TT = this.observers_.filter((function(TT) {
            return TT.gatherActive(), TT.hasActive()
          }));
          return TT.forEach((function(TT) {
            return TT.broadcastActive()
          })), TT.length > 0
        }, TT.prototype.connect_ = function() {
          MT && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), fT ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
          })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, TT.prototype.disconnect_ = function() {
          MT && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, TT.prototype.onTransitionEnd_ = function(TT) {
          var kT = TT.propertyName,
            cT = void 0 === kT ? "" : kT;
          yT.some((function(TT) {
            return !!~cT.indexOf(TT)
          })) && this.refresh()
        }, TT.getInstance = function() {
          return this.instance_ || (this.instance_ = new TT), this.instance_
        }, TT.instance_ = null, TT
      }(),
      IT = function(TT, kT) {
        for (var cT = 0, lT = Object.keys(kT); cT < lT.length; cT++) {
          var MT = lT[cT];
          Object.defineProperty(TT, MT, {
            value: kT[MT],
            enumerable: !1,
            writable: !1,
            configurable: !0
          })
        }
        return TT
      },
      AT = function(TT) {
        return TT && TT.ownerDocument && TT.ownerDocument.defaultView || KT
      },
      CT = QT(0, 0, 0, 0);

    function jT(TT) {
      return parseFloat(TT) || 0
    }

    function vT(TT) {
      for (var kT = [], cT = 1; cT < arguments.length; cT++) kT[cT - 1] = arguments[cT];
      return kT.reduce((function(kT, cT) {
        return kT + jT(TT["border-" + cT + "-width"])
      }), 0)
    }

    function tT(TT) {
      var kT = TT.clientWidth,
        cT = TT.clientHeight;
      if (!kT && !cT) return CT;
      var lT = AT(TT).getComputedStyle(TT),
        MT = function(TT) {
          for (var kT = {}, cT = 0, lT = ["top", "right", "bottom", "left"]; cT < lT.length; cT++) {
            var MT = lT[cT],
              KT = TT["padding-" + MT];
            kT[MT] = jT(KT)
          }
          return kT
        }(lT),
        KT = MT.left + MT.right,
        OT = MT.top + MT.bottom,
        yT = jT(lT.width),
        fT = jT(lT.height);
      if ("border-box" === lT.boxSizing && (Math.round(yT + KT) !== kT && (yT -= vT(lT, "left", "right") + KT), Math.round(fT + OT) !== cT && (fT -= vT(lT, "top", "bottom") + OT)), ! function(TT) {
          return TT === AT(TT).document.documentElement
        }(TT)) {
        var xT = Math.round(yT + KT) - kT,
          IT = Math.round(fT + OT) - cT;
        1 !== Math.abs(xT) && (yT -= xT), 1 !== Math.abs(IT) && (fT -= IT)
      }
      return QT(MT.left, MT.top, yT, fT)
    }
    var hT = "undefined" !== typeof SVGGraphicsElement ? function(TT) {
      return TT instanceof AT(TT).SVGGraphicsElement
    } : function(TT) {
      return TT instanceof AT(TT).SVGElement && "function" === typeof TT.getBBox
    };

    function NT(TT) {
      return MT ? hT(TT) ? function(TT) {
        var kT = TT.getBBox();
        return QT(0, 0, kT.width, kT.height)
      }(TT) : tT(TT) : CT
    }

    function QT(TT, kT, cT, lT) {
      return {
        x: TT,
        y: kT,
        width: cT,
        height: lT
      }
    }
    var ST = function() {
        function TT(TT) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = QT(0, 0, 0, 0), this.target = TT
        }
        return TT.prototype.isActive = function() {
          var TT = NT(this.target);
          return this.contentRect_ = TT, TT.width !== this.broadcastWidth || TT.height !== this.broadcastHeight
        }, TT.prototype.broadcastRect = function() {
          var TT = this.contentRect_;
          return this.broadcastWidth = TT.width, this.broadcastHeight = TT.height, TT
        }, TT
      }(),
      DT = function(TT, kT) {
        var cT = function(TT) {
          var kT = TT.x,
            cT = TT.y,
            lT = TT.width,
            MT = TT.height,
            KT = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
            OT = Object.create(KT.prototype);
          return IT(OT, {
            x: kT,
            y: cT,
            width: lT,
            height: MT,
            top: cT,
            right: kT + lT,
            bottom: MT + cT,
            left: kT
          }), OT
        }(kT);
        IT(this, {
          target: TT,
          contentRect: cT
        })
      },
      aT = function() {
        function TT(TT, kT, cT) {
          if (this.activeObservations_ = [], this.observations_ = new lT, "function" !== typeof TT) throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = TT, this.controller_ = kT, this.callbackCtx_ = cT
        }
        return TT.prototype.observe = function(TT) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(TT instanceof AT(TT).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var kT = this.observations_;
            kT.has(TT) || (kT.set(TT, new ST(TT)), this.controller_.addObserver(this), this.controller_.refresh())
          }
        }, TT.prototype.unobserve = function(TT) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(TT instanceof AT(TT).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var kT = this.observations_;
            kT.has(TT) && (kT.delete(TT), kT.size || this.controller_.removeObserver(this))
          }
        }, TT.prototype.disconnect = function() {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, TT.prototype.gatherActive = function() {
          var TT = this;
          this.clearActive(), this.observations_.forEach((function(kT) {
            kT.isActive() && TT.activeObservations_.push(kT)
          }))
        }, TT.prototype.broadcastActive = function() {
          if (this.hasActive()) {
            var TT = this.callbackCtx_,
              kT = this.activeObservations_.map((function(TT) {
                return new DT(TT.target, TT.broadcastRect())
              }));
            this.callback_.call(TT, kT, TT), this.clearActive()
          }
        }, TT.prototype.clearActive = function() {
          this.activeObservations_.splice(0)
        }, TT.prototype.hasActive = function() {
          return this.activeObservations_.length > 0
        }, TT
      }(),
      FT = "undefined" !== typeof WeakMap ? new WeakMap : new lT,
      rT = function TT(kT) {
        if (!(this instanceof TT)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var cT = xT.getInstance(),
          lT = new aT(kT, cT, this);
        FT.set(this, lT)
      };
    ["observe", "unobserve", "disconnect"].forEach((function(TT) {
      rT.prototype[TT] = function() {
        var kT;
        return (kT = FT.get(this))[TT].apply(kT, arguments)
      }
    }));
    const PT = "undefined" !== typeof KT.ResizeObserver ? KT.ResizeObserver : rT
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);