export const id = 100;
export const ids = [100];
export const modules = {
  4409: (JJ, cJ, ZJ) => {
    function FJ(JJ) {
      return FJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(JJ) {
        return typeof JJ
      } : function(JJ) {
        return JJ && "function" == typeof Symbol && JJ.constructor === Symbol && JJ !== Symbol.prototype ? "symbol" : typeof JJ
      }, FJ(JJ)
    }
    Object.defineProperty(cJ, "__esModule", {
      value: !0
    }), cJ.default = void 0;
    var UJ = hJ(ZJ(926)),
      eJ = function(JJ, cJ) {
        if (!cJ && JJ && JJ.__esModule) return JJ;
        if (null === JJ || "object" !== FJ(JJ) && "function" !== typeof JJ) return {
          default: JJ
        };
        var ZJ = YJ(cJ);
        if (ZJ && ZJ.has(JJ)) return ZJ.get(JJ);
        var UJ = {},
          eJ = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var XJ in JJ)
          if ("default" !== XJ && Object.prototype.hasOwnProperty.call(JJ, XJ)) {
            var AJ = eJ ? Object.getOwnPropertyDescriptor(JJ, XJ) : null;
            AJ && (AJ.get || AJ.set) ? Object.defineProperty(UJ, XJ, AJ) : UJ[XJ] = JJ[XJ]
          } UJ.default = JJ, ZJ && ZJ.set(JJ, UJ);
        return UJ
      }(ZJ(47)),
      XJ = hJ(ZJ(4367)),
      AJ = hJ(ZJ(4412)),
      qJ = ZJ(4419),
      jJ = ZJ(990);

    function YJ(JJ) {
      if ("function" !== typeof WeakMap) return null;
      var cJ = new WeakMap,
        ZJ = new WeakMap;
      return (YJ = function(JJ) {
        return JJ ? ZJ : cJ
      })(JJ)
    }

    function hJ(JJ) {
      return JJ && JJ.__esModule ? JJ : {
        default: JJ
      }
    }

    function DJ(JJ, cJ) {
      var ZJ = "undefined" !== typeof Symbol && JJ[Symbol.iterator] || JJ["@@iterator"];
      if (!ZJ) {
        if (Array.isArray(JJ) || (ZJ = function(JJ, cJ) {
            if (!JJ) return;
            if ("string" === typeof JJ) return sJ(JJ, cJ);
            var ZJ = Object.prototype.toString.call(JJ).slice(8, -1);
            "Object" === ZJ && JJ.constructor && (ZJ = JJ.constructor.name);
            if ("Map" === ZJ || "Set" === ZJ) return Array.from(JJ);
            if ("Arguments" === ZJ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZJ)) return sJ(JJ, cJ)
          }(JJ)) || cJ && JJ && "number" === typeof JJ.length) {
          ZJ && (JJ = ZJ);
          var FJ = 0,
            UJ = function() {};
          return {
            s: UJ,
            n: function() {
              return FJ >= JJ.length ? {
                done: !0
              } : {
                done: !1,
                value: JJ[FJ++]
              }
            },
            e: function(JJ) {
              throw JJ
            },
            f: UJ
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var eJ, XJ = !0,
        AJ = !1;
      return {
        s: function() {
          ZJ = ZJ.call(JJ)
        },
        n: function() {
          var JJ = ZJ.next();
          return XJ = JJ.done, JJ
        },
        e: function(JJ) {
          AJ = !0, eJ = JJ
        },
        f: function() {
          try {
            XJ || null == ZJ.return || ZJ.return()
          } finally {
            if (AJ) throw eJ
          }
        }
      }
    }

    function sJ(JJ, cJ) {
      (null == cJ || cJ > JJ.length) && (cJ = JJ.length);
      for (var ZJ = 0, FJ = new Array(cJ); ZJ < cJ; ZJ++) FJ[ZJ] = JJ[ZJ];
      return FJ
    }

    function nJ(JJ, cJ) {
      for (var ZJ = 0; ZJ < cJ.length; ZJ++) {
        var FJ = cJ[ZJ];
        FJ.enumerable = FJ.enumerable || !1, FJ.configurable = !0, "value" in FJ && (FJ.writable = !0), Object.defineProperty(JJ, FJ.key, FJ)
      }
    }

    function GJ(JJ, cJ) {
      return GJ = Object.setPrototypeOf || function(JJ, cJ) {
        return JJ.__proto__ = cJ, JJ
      }, GJ(JJ, cJ)
    }

    function fJ(JJ) {
      var cJ = function() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (JJ) {
          return !1
        }
      }();
      return function() {
        var ZJ, UJ = rJ(JJ);
        if (cJ) {
          var eJ = rJ(this).constructor;
          ZJ = Reflect.construct(UJ, arguments, eJ)
        } else ZJ = UJ.apply(this, arguments);
        return function(JJ, cJ) {
          if (cJ && ("object" === FJ(cJ) || "function" === typeof cJ)) return cJ;
          if (void 0 !== cJ) throw new TypeError("Derived constructors may only return object or undefined");
          return xJ(JJ)
        }(this, ZJ)
      }
    }

    function xJ(JJ) {
      if (void 0 === JJ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return JJ
    }

    function rJ(JJ) {
      return rJ = Object.setPrototypeOf ? Object.getPrototypeOf : function(JJ) {
        return JJ.__proto__ || Object.getPrototypeOf(JJ)
      }, rJ(JJ)
    }

    function vJ(JJ, cJ, ZJ) {
      return cJ in JJ ? Object.defineProperty(JJ, cJ, {
        value: ZJ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : JJ[cJ] = ZJ, JJ
    }
    var mJ = {
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
      QJ = function(JJ) {
        ! function(JJ, cJ) {
          if ("function" !== typeof cJ && null !== cJ) throw new TypeError("Super expression must either be null or a function");
          Object.defineProperty(JJ, "prototype", {
            value: Object.create(cJ && cJ.prototype, {
              constructor: {
                value: JJ,
                writable: !0,
                configurable: !0
              }
            }),
            writable: !1
          }), cJ && GJ(JJ, cJ)
        }(XJ, JJ);
        var cJ, ZJ, FJ, eJ = fJ(XJ);

        function XJ(JJ, cJ) {
          var ZJ;
          return function(JJ, cJ) {
            if (!(JJ instanceof cJ)) throw new TypeError("Cannot call a class as a function")
          }(this, XJ), vJ(xJ(ZJ = eJ.call(this, JJ, cJ)), "handleFormat", (function(JJ) {
            var cJ = ZJ.props.format;
            return cJ ? cJ(JJ) : JJ
          })), vJ(xJ(ZJ), "handleUpdate", (function() {
            if (ZJ.slider) {
              var JJ = ZJ.props.orientation,
                cJ = (0, qJ.capitalize)(mJ.orientation[JJ].dimension),
                FJ = ZJ.slider["offset".concat(cJ)],
                UJ = ZJ.handle["offset".concat(cJ)];
              ZJ.setState({
                limit: FJ - UJ,
                grab: UJ / 2
              })
            }
          })), vJ(xJ(ZJ), "handleStart", (function(JJ) {
            var cJ = ZJ.props.onChangeStart;
            document.addEventListener("mousemove", ZJ.handleDrag), document.addEventListener("mouseup", ZJ.handleEnd), ZJ.setState({
              active: !0
            }, (function() {
              cJ && cJ(JJ)
            }))
          })), vJ(xJ(ZJ), "handleDrag", (function(JJ) {
            JJ.stopPropagation();
            var cJ = ZJ.props.onChange,
              FJ = JJ.target,
              UJ = FJ.className,
              eJ = FJ.classList,
              XJ = FJ.dataset;
            if (cJ && "rangeslider__labels" !== UJ) {
              var AJ = ZJ.position(JJ);
              eJ && eJ.contains("rangeslider__label-item") && XJ.value && (AJ = parseFloat(XJ.value)), cJ && cJ(AJ, JJ)
            }
          })), vJ(xJ(ZJ), "handleEnd", (function(JJ) {
            var cJ = ZJ.props.onChangeComplete;
            ZJ.setState({
              active: !1
            }, (function() {
              cJ && cJ(JJ)
            })), document.removeEventListener("mousemove", ZJ.handleDrag), document.removeEventListener("mouseup", ZJ.handleEnd)
          })), vJ(xJ(ZJ), "handleKeyDown", (function(JJ) {
            JJ.preventDefault();
            var cJ, FJ = JJ.keyCode,
              UJ = ZJ.props,
              eJ = UJ.value,
              XJ = UJ.min,
              AJ = UJ.max,
              qJ = UJ.step,
              jJ = UJ.onChange;
            switch (FJ) {
              case 38:
              case 39:
                cJ = eJ + qJ > AJ ? AJ : eJ + qJ, jJ && jJ(cJ, JJ);
                break;
              case 37:
              case 40:
                cJ = eJ - qJ < XJ ? XJ : eJ - qJ, jJ && jJ(cJ, JJ)
            }
          })), vJ(xJ(ZJ), "getPositionFromValue", (function(JJ) {
            var cJ = ZJ.state.limit,
              FJ = ZJ.props,
              UJ = FJ.min,
              eJ = (JJ - UJ) / (FJ.max - UJ);
            return Math.round(eJ * cJ)
          })), vJ(xJ(ZJ), "getValueFromPosition", (function(JJ) {
            var cJ = ZJ.state.limit,
              FJ = ZJ.props,
              UJ = FJ.orientation,
              eJ = FJ.min,
              XJ = FJ.max,
              AJ = FJ.step,
              jJ = (0, qJ.clamp)(JJ, 0, cJ) / (cJ || 1),
              YJ = AJ * Math.round(jJ * (XJ - eJ) / AJ),
              hJ = "horizontal" === UJ ? YJ + eJ : XJ - YJ;
            return (0, qJ.clamp)(hJ, eJ, XJ)
          })), vJ(xJ(ZJ), "position", (function(JJ) {
            var cJ = ZJ.state.grab,
              FJ = ZJ.props,
              UJ = FJ.orientation,
              eJ = FJ.reverse,
              XJ = ZJ.slider,
              AJ = mJ.orientation[UJ].coordinate,
              jJ = eJ ? mJ.orientation[UJ].reverseDirection : mJ.orientation[UJ].direction,
              YJ = "client".concat((0, qJ.capitalize)(AJ)),
              hJ = JJ.touches ? JJ.touches[0][YJ] : JJ[YJ],
              DJ = XJ.getBoundingClientRect()[jJ],
              sJ = eJ ? DJ - hJ - cJ : hJ - DJ - cJ;
            return ZJ.getValueFromPosition(sJ)
          })), vJ(xJ(ZJ), "coordinates", (function(JJ) {
            var cJ = ZJ.state,
              FJ = cJ.limit,
              UJ = cJ.grab,
              eJ = ZJ.props.orientation,
              XJ = ZJ.getValueFromPosition(JJ),
              AJ = ZJ.getPositionFromValue(XJ),
              qJ = "horizontal" === eJ ? AJ + UJ : AJ;
            return {
              fill: "horizontal" === eJ ? qJ : FJ - qJ,
              handle: qJ,
              label: qJ
            }
          })), vJ(xJ(ZJ), "renderLabels", (function(JJ) {
            return (0, jJ.jsx)("ul", {
              ref: function(JJ) {
                ZJ.labels = JJ
              },
              className: (0, UJ.default)("rangeslider__labels"),
              children: JJ
            })
          })), ZJ.state = {
            active: !1,
            limit: 0,
            grab: 0
          }, ZJ
        }
        return cJ = XJ, (ZJ = [{
          key: "componentDidMount",
          value: function() {
            this.handleUpdate(), new AJ.default(this.handleUpdate).observe(this.slider)
          }
        }, {
          key: "render",
          value: function() {
            var JJ = this,
              cJ = this.props,
              ZJ = cJ.value,
              FJ = cJ.orientation,
              eJ = cJ.className,
              XJ = cJ.tooltip,
              AJ = cJ.reverse,
              qJ = cJ.labels,
              YJ = cJ.min,
              hJ = cJ.max,
              sJ = cJ.handleLabel,
              nJ = this.state.active,
              GJ = mJ.orientation[FJ].dimension,
              fJ = AJ ? mJ.orientation[FJ].reverseDirection : mJ.orientation[FJ].direction,
              xJ = this.getPositionFromValue(ZJ),
              rJ = this.coordinates(xJ),
              QJ = vJ({}, GJ, "".concat(rJ.fill, "px")),
              EJ = vJ({}, fJ, "".concat(rJ.handle, "px")),
              VJ = XJ && nJ,
              KJ = [],
              yJ = Object.keys(qJ);
            if (yJ.length > 0) {
              var SJ, IJ = DJ(yJ = yJ.sort((function(JJ, cJ) {
                return AJ ? JJ - cJ : cJ - JJ
              })));
              try {
                for (IJ.s(); !(SJ = IJ.n()).done;) {
                  var MJ = SJ.value,
                    bJ = this.getPositionFromValue(MJ),
                    wJ = this.coordinates(bJ),
                    WJ = vJ({}, fJ, "".concat(wJ.label, "px"));
                  KJ.push((0, jJ.jsx)("li", {
                    className: (0, UJ.default)("rangeslider__label-item"),
                    "data-value": MJ,
                    onMouseDown: this.handleDrag,
                    onTouchStart: this.handleStart,
                    onTouchEnd: this.handleEnd,
                    style: WJ,
                    children: this.props.labels[MJ]
                  }, MJ))
                }
              } catch (gJ) {
                IJ.e(gJ)
              } finally {
                IJ.f()
              }
            }
            return (0, jJ.jsxs)("div", {
              ref: function(cJ) {
                JJ.slider = cJ
              },
              className: (0, UJ.default)("rangeslider", "rangeslider-".concat(FJ), {
                "rangeslider-reverse": AJ
              }, eJ),
              onMouseDown: this.handleDrag,
              onMouseUp: this.handleEnd,
              onTouchStart: this.handleStart,
              onTouchEnd: this.handleEnd,
              "aria-valuemin": YJ,
              "aria-valuemax": hJ,
              "aria-valuenow": ZJ,
              "aria-orientation": FJ,
              children: [(0, jJ.jsx)("div", {
                className: "rangeslider__fill",
                style: QJ
              }), (0, jJ.jsxs)("div", {
                ref: function(cJ) {
                  JJ.handle = cJ
                },
                className: "rangeslider__handle",
                onMouseDown: this.handleStart,
                onTouchMove: this.handleDrag,
                onTouchEnd: this.handleEnd,
                onKeyDown: this.handleKeyDown,
                style: EJ,
                tabIndex: 0,
                children: [VJ && (0, jJ.jsx)("div", {
                  ref: function(cJ) {
                    JJ.tooltip = cJ
                  },
                  className: "rangeslider__handle-tooltip",
                  children: (0, jJ.jsx)("span", {
                    children: this.handleFormat(ZJ)
                  })
                }), (0, jJ.jsx)("div", {
                  className: "rangeslider__handle-label",
                  children: sJ
                })]
              }), qJ && this.renderLabels(KJ)]
            })
          }
        }]) && nJ(cJ.prototype, ZJ), FJ && nJ(cJ, FJ), Object.defineProperty(cJ, "prototype", {
          writable: !1
        }), XJ
      }(eJ.Component);
    vJ(QJ, "propTypes", {
      min: XJ.default.number,
      max: XJ.default.number,
      step: XJ.default.number,
      value: XJ.default.number,
      orientation: XJ.default.string,
      tooltip: XJ.default.bool,
      reverse: XJ.default.bool,
      labels: XJ.default.object,
      handleLabel: XJ.default.string,
      format: XJ.default.func,
      onChangeStart: XJ.default.func,
      onChange: XJ.default.func,
      onChangeComplete: XJ.default.func
    }), vJ(QJ, "defaultProps", {
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
    var EJ = QJ;
    cJ.default = EJ
  },
  4407: (JJ, cJ, ZJ) => {
    var FJ;
    cJ.c = void 0;
    var UJ = ((FJ = ZJ(4409)) && FJ.__esModule ? FJ : {
      default: FJ
    }).default;
    cJ.c = UJ
  },
  4419: (JJ, cJ) => {
    Object.defineProperty(cJ, "__esModule", {
      value: !0
    }), cJ.capitalize = function(JJ) {
      return JJ.charAt(0).toUpperCase() + JJ.substr(1)
    }, cJ.clamp = function(JJ, cJ, ZJ) {
      return Math.min(Math.max(JJ, cJ), ZJ)
    }
  },
  4375: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4383);

    function UJ() {}

    function eJ() {}
    eJ.resetWarningCache = UJ, JJ.exports = function() {
      function JJ(JJ, cJ, ZJ, UJ, eJ, XJ) {
        if (XJ !== FJ) {
          var AJ = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw AJ.name = "Invariant Violation", AJ
        }
      }

      function cJ() {
        return JJ
      }
      JJ.isRequired = JJ;
      var ZJ = {
        array: JJ,
        bigint: JJ,
        bool: JJ,
        func: JJ,
        number: JJ,
        object: JJ,
        string: JJ,
        symbol: JJ,
        any: JJ,
        arrayOf: cJ,
        element: JJ,
        elementType: JJ,
        instanceOf: cJ,
        node: JJ,
        objectOf: cJ,
        oneOf: cJ,
        oneOfType: cJ,
        shape: cJ,
        exact: cJ,
        checkPropTypes: eJ,
        resetWarningCache: UJ
      };
      return ZJ.PropTypes = ZJ, ZJ
    }
  },
  4367: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ(4375)()
  },
  4383: JJ => {
    JJ.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  4412: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      default: () => KJ
    });
    var FJ = function() {
        if ("undefined" !== typeof Map) return Map;

        function JJ(JJ, cJ) {
          var ZJ = -1;
          return JJ.some((function(JJ, FJ) {
            return JJ[0] === cJ && (ZJ = FJ, !0)
          })), ZJ
        }
        return function() {
          function cJ() {
            this.__entries__ = []
          }
          return Object.defineProperty(cJ.prototype, "size", {
            get: function() {
              return this.__entries__.length
            },
            enumerable: !0,
            configurable: !0
          }), cJ.prototype.get = function(cJ) {
            var ZJ = JJ(this.__entries__, cJ),
              FJ = this.__entries__[ZJ];
            return FJ && FJ[1]
          }, cJ.prototype.set = function(cJ, ZJ) {
            var FJ = JJ(this.__entries__, cJ);
            ~FJ ? this.__entries__[FJ][1] = ZJ : this.__entries__.push([cJ, ZJ])
          }, cJ.prototype.delete = function(cJ) {
            var ZJ = this.__entries__,
              FJ = JJ(ZJ, cJ);
            ~FJ && ZJ.splice(FJ, 1)
          }, cJ.prototype.has = function(cJ) {
            return !!~JJ(this.__entries__, cJ)
          }, cJ.prototype.clear = function() {
            this.__entries__.splice(0)
          }, cJ.prototype.forEach = function(JJ, cJ) {
            void 0 === cJ && (cJ = null);
            for (var ZJ = 0, FJ = this.__entries__; ZJ < FJ.length; ZJ++) {
              var UJ = FJ[ZJ];
              JJ.call(cJ, UJ[1], UJ[0])
            }
          }, cJ
        }()
      }(),
      UJ = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document,
      eJ = "undefined" !== typeof ZJ.g && ZJ.g.Math === Math ? ZJ.g : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")(),
      XJ = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(eJ) : function(JJ) {
        return setTimeout((function() {
          return JJ(Date.now())
        }), 1e3 / 60)
      };
    var AJ = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
      qJ = "undefined" !== typeof MutationObserver,
      jJ = function() {
        function JJ() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(JJ, cJ) {
            var ZJ = !1,
              FJ = !1,
              UJ = 0;

            function eJ() {
              ZJ && (ZJ = !1, JJ()), FJ && qJ()
            }

            function AJ() {
              XJ(eJ)
            }

            function qJ() {
              var JJ = Date.now();
              if (ZJ) {
                if (JJ - UJ < 2) return;
                FJ = !0
              } else ZJ = !0, FJ = !1, setTimeout(AJ, cJ);
              UJ = JJ
            }
            return qJ
          }(this.refresh.bind(this), 20)
        }
        return JJ.prototype.addObserver = function(JJ) {
          ~this.observers_.indexOf(JJ) || this.observers_.push(JJ), this.connected_ || this.connect_()
        }, JJ.prototype.removeObserver = function(JJ) {
          var cJ = this.observers_,
            ZJ = cJ.indexOf(JJ);
          ~ZJ && cJ.splice(ZJ, 1), !cJ.length && this.connected_ && this.disconnect_()
        }, JJ.prototype.refresh = function() {
          this.updateObservers_() && this.refresh()
        }, JJ.prototype.updateObservers_ = function() {
          var JJ = this.observers_.filter((function(JJ) {
            return JJ.gatherActive(), JJ.hasActive()
          }));
          return JJ.forEach((function(JJ) {
            return JJ.broadcastActive()
          })), JJ.length > 0
        }, JJ.prototype.connect_ = function() {
          UJ && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), qJ ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
          })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, JJ.prototype.disconnect_ = function() {
          UJ && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, JJ.prototype.onTransitionEnd_ = function(JJ) {
          var cJ = JJ.propertyName,
            ZJ = void 0 === cJ ? "" : cJ;
          AJ.some((function(JJ) {
            return !!~ZJ.indexOf(JJ)
          })) && this.refresh()
        }, JJ.getInstance = function() {
          return this.instance_ || (this.instance_ = new JJ), this.instance_
        }, JJ.instance_ = null, JJ
      }(),
      YJ = function(JJ, cJ) {
        for (var ZJ = 0, FJ = Object.keys(cJ); ZJ < FJ.length; ZJ++) {
          var UJ = FJ[ZJ];
          Object.defineProperty(JJ, UJ, {
            value: cJ[UJ],
            enumerable: !1,
            writable: !1,
            configurable: !0
          })
        }
        return JJ
      },
      hJ = function(JJ) {
        return JJ && JJ.ownerDocument && JJ.ownerDocument.defaultView || eJ
      },
      DJ = rJ(0, 0, 0, 0);

    function sJ(JJ) {
      return parseFloat(JJ) || 0
    }

    function nJ(JJ) {
      for (var cJ = [], ZJ = 1; ZJ < arguments.length; ZJ++) cJ[ZJ - 1] = arguments[ZJ];
      return cJ.reduce((function(cJ, ZJ) {
        return cJ + sJ(JJ["border-" + ZJ + "-width"])
      }), 0)
    }

    function GJ(JJ) {
      var cJ = JJ.clientWidth,
        ZJ = JJ.clientHeight;
      if (!cJ && !ZJ) return DJ;
      var FJ = hJ(JJ).getComputedStyle(JJ),
        UJ = function(JJ) {
          for (var cJ = {}, ZJ = 0, FJ = ["top", "right", "bottom", "left"]; ZJ < FJ.length; ZJ++) {
            var UJ = FJ[ZJ],
              eJ = JJ["padding-" + UJ];
            cJ[UJ] = sJ(eJ)
          }
          return cJ
        }(FJ),
        eJ = UJ.left + UJ.right,
        XJ = UJ.top + UJ.bottom,
        AJ = sJ(FJ.width),
        qJ = sJ(FJ.height);
      if ("border-box" === FJ.boxSizing && (Math.round(AJ + eJ) !== cJ && (AJ -= nJ(FJ, "left", "right") + eJ), Math.round(qJ + XJ) !== ZJ && (qJ -= nJ(FJ, "top", "bottom") + XJ)), ! function(JJ) {
          return JJ === hJ(JJ).document.documentElement
        }(JJ)) {
        var jJ = Math.round(AJ + eJ) - cJ,
          YJ = Math.round(qJ + XJ) - ZJ;
        1 !== Math.abs(jJ) && (AJ -= jJ), 1 !== Math.abs(YJ) && (qJ -= YJ)
      }
      return rJ(UJ.left, UJ.top, AJ, qJ)
    }
    var fJ = "undefined" !== typeof SVGGraphicsElement ? function(JJ) {
      return JJ instanceof hJ(JJ).SVGGraphicsElement
    } : function(JJ) {
      return JJ instanceof hJ(JJ).SVGElement && "function" === typeof JJ.getBBox
    };

    function xJ(JJ) {
      return UJ ? fJ(JJ) ? function(JJ) {
        var cJ = JJ.getBBox();
        return rJ(0, 0, cJ.width, cJ.height)
      }(JJ) : GJ(JJ) : DJ
    }

    function rJ(JJ, cJ, ZJ, FJ) {
      return {
        x: JJ,
        y: cJ,
        width: ZJ,
        height: FJ
      }
    }
    var vJ = function() {
        function JJ(JJ) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = rJ(0, 0, 0, 0), this.target = JJ
        }
        return JJ.prototype.isActive = function() {
          var JJ = xJ(this.target);
          return this.contentRect_ = JJ, JJ.width !== this.broadcastWidth || JJ.height !== this.broadcastHeight
        }, JJ.prototype.broadcastRect = function() {
          var JJ = this.contentRect_;
          return this.broadcastWidth = JJ.width, this.broadcastHeight = JJ.height, JJ
        }, JJ
      }(),
      mJ = function(JJ, cJ) {
        var ZJ = function(JJ) {
          var cJ = JJ.x,
            ZJ = JJ.y,
            FJ = JJ.width,
            UJ = JJ.height,
            eJ = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
            XJ = Object.create(eJ.prototype);
          return YJ(XJ, {
            x: cJ,
            y: ZJ,
            width: FJ,
            height: UJ,
            top: ZJ,
            right: cJ + FJ,
            bottom: UJ + ZJ,
            left: cJ
          }), XJ
        }(cJ);
        YJ(this, {
          target: JJ,
          contentRect: ZJ
        })
      },
      QJ = function() {
        function JJ(JJ, cJ, ZJ) {
          if (this.activeObservations_ = [], this.observations_ = new FJ, "function" !== typeof JJ) throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = JJ, this.controller_ = cJ, this.callbackCtx_ = ZJ
        }
        return JJ.prototype.observe = function(JJ) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(JJ instanceof hJ(JJ).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var cJ = this.observations_;
            cJ.has(JJ) || (cJ.set(JJ, new vJ(JJ)), this.controller_.addObserver(this), this.controller_.refresh())
          }
        }, JJ.prototype.unobserve = function(JJ) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(JJ instanceof hJ(JJ).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var cJ = this.observations_;
            cJ.has(JJ) && (cJ.delete(JJ), cJ.size || this.controller_.removeObserver(this))
          }
        }, JJ.prototype.disconnect = function() {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, JJ.prototype.gatherActive = function() {
          var JJ = this;
          this.clearActive(), this.observations_.forEach((function(cJ) {
            cJ.isActive() && JJ.activeObservations_.push(cJ)
          }))
        }, JJ.prototype.broadcastActive = function() {
          if (this.hasActive()) {
            var JJ = this.callbackCtx_,
              cJ = this.activeObservations_.map((function(JJ) {
                return new mJ(JJ.target, JJ.broadcastRect())
              }));
            this.callback_.call(JJ, cJ, JJ), this.clearActive()
          }
        }, JJ.prototype.clearActive = function() {
          this.activeObservations_.splice(0)
        }, JJ.prototype.hasActive = function() {
          return this.activeObservations_.length > 0
        }, JJ
      }(),
      EJ = "undefined" !== typeof WeakMap ? new WeakMap : new FJ,
      VJ = function JJ(cJ) {
        if (!(this instanceof JJ)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var ZJ = jJ.getInstance(),
          FJ = new QJ(cJ, ZJ, this);
        EJ.set(this, FJ)
      };
    ["observe", "unobserve", "disconnect"].forEach((function(JJ) {
      VJ.prototype[JJ] = function() {
        var cJ;
        return (cJ = EJ.get(this))[JJ].apply(cJ, arguments)
      }
    }));
    const KJ = "undefined" !== typeof eJ.ResizeObserver ? eJ.ResizeObserver : VJ
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);