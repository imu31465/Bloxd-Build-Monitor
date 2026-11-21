export const id = 107;
export const ids = [107];
export const modules = {
  4851: (QQ, FQ, wQ) => {
    function LQ(QQ) {
      return LQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, LQ(QQ)
    }
    Object.defineProperty(FQ, "__esModule", {
      value: !0
    }), FQ.default = void 0;
    var qQ = HQ(wQ(1070)),
      oQ = function(QQ, FQ) {
        if (!FQ && QQ && QQ.__esModule) return QQ;
        if (null === QQ || "object" !== LQ(QQ) && "function" !== typeof QQ) return {
          default: QQ
        };
        var wQ = uQ(FQ);
        if (wQ && wQ.has(QQ)) return wQ.get(QQ);
        var qQ = {},
          oQ = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var DQ in QQ)
          if ("default" !== DQ && Object.prototype.hasOwnProperty.call(QQ, DQ)) {
            var kQ = oQ ? Object.getOwnPropertyDescriptor(QQ, DQ) : null;
            kQ && (kQ.get || kQ.set) ? Object.defineProperty(qQ, DQ, kQ) : qQ[DQ] = QQ[DQ]
          } qQ.default = QQ, wQ && wQ.set(QQ, qQ);
        return qQ
      }(wQ(53)),
      DQ = HQ(wQ(4799)),
      kQ = HQ(wQ(4856)),
      vQ = wQ(4863),
      mQ = wQ(1107);

    function uQ(QQ) {
      if ("function" !== typeof WeakMap) return null;
      var FQ = new WeakMap,
        wQ = new WeakMap;
      return (uQ = function(QQ) {
        return QQ ? wQ : FQ
      })(QQ)
    }

    function HQ(QQ) {
      return QQ && QQ.__esModule ? QQ : {
        default: QQ
      }
    }

    function bQ(QQ, FQ) {
      var wQ = "undefined" !== typeof Symbol && QQ[Symbol.iterator] || QQ["@@iterator"];
      if (!wQ) {
        if (Array.isArray(QQ) || (wQ = function(QQ, FQ) {
            if (!QQ) return;
            if ("string" === typeof QQ) return YQ(QQ, FQ);
            var wQ = Object.prototype.toString.call(QQ).slice(8, -1);
            "Object" === wQ && QQ.constructor && (wQ = QQ.constructor.name);
            if ("Map" === wQ || "Set" === wQ) return Array.from(QQ);
            if ("Arguments" === wQ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(wQ)) return YQ(QQ, FQ)
          }(QQ)) || FQ && QQ && "number" === typeof QQ.length) {
          wQ && (QQ = wQ);
          var LQ = 0,
            qQ = function() {};
          return {
            s: qQ,
            n: function() {
              return LQ >= QQ.length ? {
                done: !0
              } : {
                done: !1,
                value: QQ[LQ++]
              }
            },
            e: function(QQ) {
              throw QQ
            },
            f: qQ
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var oQ, DQ = !0,
        kQ = !1;
      return {
        s: function() {
          wQ = wQ.call(QQ)
        },
        n: function() {
          var QQ = wQ.next();
          return DQ = QQ.done, QQ
        },
        e: function(QQ) {
          kQ = !0, oQ = QQ
        },
        f: function() {
          try {
            DQ || null == wQ.return || wQ.return()
          } finally {
            if (kQ) throw oQ
          }
        }
      }
    }

    function YQ(QQ, FQ) {
      (null == FQ || FQ > QQ.length) && (FQ = QQ.length);
      for (var wQ = 0, LQ = new Array(FQ); wQ < FQ; wQ++) LQ[wQ] = QQ[wQ];
      return LQ
    }

    function xQ(QQ, FQ) {
      for (var wQ = 0; wQ < FQ.length; wQ++) {
        var LQ = FQ[wQ];
        LQ.enumerable = LQ.enumerable || !1, LQ.configurable = !0, "value" in LQ && (LQ.writable = !0), Object.defineProperty(QQ, LQ.key, LQ)
      }
    }

    function AQ(QQ, FQ) {
      return AQ = Object.setPrototypeOf || function(QQ, FQ) {
        return QQ.__proto__ = FQ, QQ
      }, AQ(QQ, FQ)
    }

    function tQ(QQ) {
      var FQ = function() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (QQ) {
          return !1
        }
      }();
      return function() {
        var wQ, qQ = MQ(QQ);
        if (FQ) {
          var oQ = MQ(this).constructor;
          wQ = Reflect.construct(qQ, arguments, oQ)
        } else wQ = qQ.apply(this, arguments);
        return function(QQ, FQ) {
          if (FQ && ("object" === LQ(FQ) || "function" === typeof FQ)) return FQ;
          if (void 0 !== FQ) throw new TypeError("Derived constructors may only return object or undefined");
          return eQ(QQ)
        }(this, wQ)
      }
    }

    function eQ(QQ) {
      if (void 0 === QQ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return QQ
    }

    function MQ(QQ) {
      return MQ = Object.setPrototypeOf ? Object.getPrototypeOf : function(QQ) {
        return QQ.__proto__ || Object.getPrototypeOf(QQ)
      }, MQ(QQ)
    }

    function GQ(QQ, FQ, wQ) {
      return FQ in QQ ? Object.defineProperty(QQ, FQ, {
        value: wQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[FQ] = wQ, QQ
    }
    var pQ = {
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
      cQ = function(QQ) {
        ! function(QQ, FQ) {
          if ("function" !== typeof FQ && null !== FQ) throw new TypeError("Super expression must either be null or a function");
          Object.defineProperty(QQ, "prototype", {
            value: Object.create(FQ && FQ.prototype, {
              constructor: {
                value: QQ,
                writable: !0,
                configurable: !0
              }
            }),
            writable: !1
          }), FQ && AQ(QQ, FQ)
        }(DQ, QQ);
        var FQ, wQ, LQ, oQ = tQ(DQ);

        function DQ(QQ, FQ) {
          var wQ;
          return function(QQ, FQ) {
            if (!(QQ instanceof FQ)) throw new TypeError("Cannot call a class as a function")
          }(this, DQ), GQ(eQ(wQ = oQ.call(this, QQ, FQ)), "handleFormat", (function(QQ) {
            var FQ = wQ.props.format;
            return FQ ? FQ(QQ) : QQ
          })), GQ(eQ(wQ), "handleUpdate", (function() {
            if (wQ.slider) {
              var QQ = wQ.props.orientation,
                FQ = (0, vQ.capitalize)(pQ.orientation[QQ].dimension),
                LQ = wQ.slider["offset".concat(FQ)],
                qQ = wQ.handle["offset".concat(FQ)];
              wQ.setState({
                limit: LQ - qQ,
                grab: qQ / 2
              })
            }
          })), GQ(eQ(wQ), "handleStart", (function(QQ) {
            var FQ = wQ.props.onChangeStart;
            document.addEventListener("mousemove", wQ.handleDrag), document.addEventListener("mouseup", wQ.handleEnd), wQ.setState({
              active: !0
            }, (function() {
              FQ && FQ(QQ)
            }))
          })), GQ(eQ(wQ), "handleDrag", (function(QQ) {
            QQ.stopPropagation();
            var FQ = wQ.props.onChange,
              LQ = QQ.target,
              qQ = LQ.className,
              oQ = LQ.classList,
              DQ = LQ.dataset;
            if (FQ && "rangeslider__labels" !== qQ) {
              var kQ = wQ.position(QQ);
              oQ && oQ.contains("rangeslider__label-item") && DQ.value && (kQ = parseFloat(DQ.value)), FQ && FQ(kQ, QQ)
            }
          })), GQ(eQ(wQ), "handleEnd", (function(QQ) {
            var FQ = wQ.props.onChangeComplete;
            wQ.setState({
              active: !1
            }, (function() {
              FQ && FQ(QQ)
            })), document.removeEventListener("mousemove", wQ.handleDrag), document.removeEventListener("mouseup", wQ.handleEnd)
          })), GQ(eQ(wQ), "handleKeyDown", (function(QQ) {
            QQ.preventDefault();
            var FQ, LQ = QQ.keyCode,
              qQ = wQ.props,
              oQ = qQ.value,
              DQ = qQ.min,
              kQ = qQ.max,
              vQ = qQ.step,
              mQ = qQ.onChange;
            switch (LQ) {
              case 38:
              case 39:
                FQ = oQ + vQ > kQ ? kQ : oQ + vQ, mQ && mQ(FQ, QQ);
                break;
              case 37:
              case 40:
                FQ = oQ - vQ < DQ ? DQ : oQ - vQ, mQ && mQ(FQ, QQ)
            }
          })), GQ(eQ(wQ), "getPositionFromValue", (function(QQ) {
            var FQ = wQ.state.limit,
              LQ = wQ.props,
              qQ = LQ.min,
              oQ = (QQ - qQ) / (LQ.max - qQ);
            return Math.round(oQ * FQ)
          })), GQ(eQ(wQ), "getValueFromPosition", (function(QQ) {
            var FQ = wQ.state.limit,
              LQ = wQ.props,
              qQ = LQ.orientation,
              oQ = LQ.min,
              DQ = LQ.max,
              kQ = LQ.step,
              mQ = (0, vQ.clamp)(QQ, 0, FQ) / (FQ || 1),
              uQ = kQ * Math.round(mQ * (DQ - oQ) / kQ),
              HQ = "horizontal" === qQ ? uQ + oQ : DQ - uQ;
            return (0, vQ.clamp)(HQ, oQ, DQ)
          })), GQ(eQ(wQ), "position", (function(QQ) {
            var FQ = wQ.state.grab,
              LQ = wQ.props,
              qQ = LQ.orientation,
              oQ = LQ.reverse,
              DQ = wQ.slider,
              kQ = pQ.orientation[qQ].coordinate,
              mQ = oQ ? pQ.orientation[qQ].reverseDirection : pQ.orientation[qQ].direction,
              uQ = "client".concat((0, vQ.capitalize)(kQ)),
              HQ = QQ.touches ? QQ.touches[0][uQ] : QQ[uQ],
              bQ = DQ.getBoundingClientRect()[mQ],
              YQ = oQ ? bQ - HQ - FQ : HQ - bQ - FQ;
            return wQ.getValueFromPosition(YQ)
          })), GQ(eQ(wQ), "coordinates", (function(QQ) {
            var FQ = wQ.state,
              LQ = FQ.limit,
              qQ = FQ.grab,
              oQ = wQ.props.orientation,
              DQ = wQ.getValueFromPosition(QQ),
              kQ = wQ.getPositionFromValue(DQ),
              vQ = "horizontal" === oQ ? kQ + qQ : kQ;
            return {
              fill: "horizontal" === oQ ? vQ : LQ - vQ,
              handle: vQ,
              label: vQ
            }
          })), GQ(eQ(wQ), "renderLabels", (function(QQ) {
            return (0, mQ.jsx)("ul", {
              ref: function(QQ) {
                wQ.labels = QQ
              },
              className: (0, qQ.default)("rangeslider__labels"),
              children: QQ
            })
          })), wQ.state = {
            active: !1,
            limit: 0,
            grab: 0
          }, wQ
        }
        return FQ = DQ, (wQ = [{
          key: "componentDidMount",
          value: function() {
            this.handleUpdate(), new kQ.default(this.handleUpdate).observe(this.slider)
          }
        }, {
          key: "render",
          value: function() {
            var QQ = this,
              FQ = this.props,
              wQ = FQ.value,
              LQ = FQ.orientation,
              oQ = FQ.className,
              DQ = FQ.tooltip,
              kQ = FQ.reverse,
              vQ = FQ.labels,
              uQ = FQ.min,
              HQ = FQ.max,
              YQ = FQ.handleLabel,
              xQ = this.state.active,
              AQ = pQ.orientation[LQ].dimension,
              tQ = kQ ? pQ.orientation[LQ].reverseDirection : pQ.orientation[LQ].direction,
              eQ = this.getPositionFromValue(wQ),
              MQ = this.coordinates(eQ),
              cQ = GQ({}, AQ, "".concat(MQ.fill, "px")),
              CQ = GQ({}, tQ, "".concat(MQ.handle, "px")),
              SQ = DQ && xQ,
              iQ = [],
              WQ = Object.keys(vQ);
            if (WQ.length > 0) {
              var RQ, OQ = bQ(WQ = WQ.sort((function(QQ, FQ) {
                return kQ ? QQ - FQ : FQ - QQ
              })));
              try {
                for (OQ.s(); !(RQ = OQ.n()).done;) {
                  var sQ = RQ.value,
                    rQ = this.getPositionFromValue(sQ),
                    IQ = this.coordinates(rQ),
                    UQ = GQ({}, tQ, "".concat(IQ.label, "px"));
                  iQ.push((0, mQ.jsx)("li", {
                    className: (0, qQ.default)("rangeslider__label-item"),
                    "data-value": sQ,
                    onMouseDown: this.handleDrag,
                    onTouchStart: this.handleStart,
                    onTouchEnd: this.handleEnd,
                    style: UQ,
                    children: this.props.labels[sQ]
                  }, sQ))
                }
              } catch (NQ) {
                OQ.e(NQ)
              } finally {
                OQ.f()
              }
            }
            return (0, mQ.jsxs)("div", {
              ref: function(FQ) {
                QQ.slider = FQ
              },
              className: (0, qQ.default)("rangeslider", "rangeslider-".concat(LQ), {
                "rangeslider-reverse": kQ
              }, oQ),
              onMouseDown: this.handleDrag,
              onMouseUp: this.handleEnd,
              onTouchStart: this.handleStart,
              onTouchEnd: this.handleEnd,
              "aria-valuemin": uQ,
              "aria-valuemax": HQ,
              "aria-valuenow": wQ,
              "aria-orientation": LQ,
              children: [(0, mQ.jsx)("div", {
                className: "rangeslider__fill",
                style: cQ
              }), (0, mQ.jsxs)("div", {
                ref: function(FQ) {
                  QQ.handle = FQ
                },
                className: "rangeslider__handle",
                onMouseDown: this.handleStart,
                onTouchMove: this.handleDrag,
                onTouchEnd: this.handleEnd,
                onKeyDown: this.handleKeyDown,
                style: CQ,
                tabIndex: 0,
                children: [SQ && (0, mQ.jsx)("div", {
                  ref: function(FQ) {
                    QQ.tooltip = FQ
                  },
                  className: "rangeslider__handle-tooltip",
                  children: (0, mQ.jsx)("span", {
                    children: this.handleFormat(wQ)
                  })
                }), (0, mQ.jsx)("div", {
                  className: "rangeslider__handle-label",
                  children: YQ
                })]
              }), vQ && this.renderLabels(iQ)]
            })
          }
        }]) && xQ(FQ.prototype, wQ), LQ && xQ(FQ, LQ), Object.defineProperty(FQ, "prototype", {
          writable: !1
        }), DQ
      }(oQ.Component);
    GQ(cQ, "propTypes", {
      min: DQ.default.number,
      max: DQ.default.number,
      step: DQ.default.number,
      value: DQ.default.number,
      orientation: DQ.default.string,
      tooltip: DQ.default.bool,
      reverse: DQ.default.bool,
      labels: DQ.default.object,
      handleLabel: DQ.default.string,
      format: DQ.default.func,
      onChangeStart: DQ.default.func,
      onChange: DQ.default.func,
      onChangeComplete: DQ.default.func
    }), GQ(cQ, "defaultProps", {
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
    var CQ = cQ;
    FQ.default = CQ
  },
  4844: (QQ, FQ, wQ) => {
    var LQ;
    FQ.b = void 0;
    var qQ = ((LQ = wQ(4851)) && LQ.__esModule ? LQ : {
      default: LQ
    }).default;
    FQ.b = qQ
  },
  4863: (QQ, FQ) => {
    Object.defineProperty(FQ, "__esModule", {
      value: !0
    }), FQ.capitalize = function(QQ) {
      return QQ.charAt(0).toUpperCase() + QQ.substr(1)
    }, FQ.clamp = function(QQ, FQ, wQ) {
      return Math.min(Math.max(QQ, FQ), wQ)
    }
  },
  4806: (QQ, FQ, wQ) => {
    var LQ = wQ(4815);

    function qQ() {}

    function oQ() {}
    oQ.resetWarningCache = qQ, QQ.exports = function() {
      function QQ(QQ, FQ, wQ, qQ, oQ, DQ) {
        if (DQ !== LQ) {
          var kQ = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw kQ.name = "Invariant Violation", kQ
        }
      }

      function FQ() {
        return QQ
      }
      QQ.isRequired = QQ;
      var wQ = {
        array: QQ,
        bigint: QQ,
        bool: QQ,
        func: QQ,
        number: QQ,
        object: QQ,
        string: QQ,
        symbol: QQ,
        any: QQ,
        arrayOf: FQ,
        element: QQ,
        elementType: QQ,
        instanceOf: FQ,
        node: QQ,
        objectOf: FQ,
        oneOf: FQ,
        oneOfType: FQ,
        shape: FQ,
        exact: FQ,
        checkPropTypes: oQ,
        resetWarningCache: qQ
      };
      return wQ.PropTypes = wQ, wQ
    }
  },
  4799: (QQ, FQ, wQ) => {
    QQ.exports = wQ(4806)()
  },
  4815: QQ => {
    QQ.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  4856: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      default: () => iQ
    });
    var LQ = function() {
        if ("undefined" !== typeof Map) return Map;

        function QQ(QQ, FQ) {
          var wQ = -1;
          return QQ.some((function(QQ, LQ) {
            return QQ[0] === FQ && (wQ = LQ, !0)
          })), wQ
        }
        return function() {
          function FQ() {
            this.__entries__ = []
          }
          return Object.defineProperty(FQ.prototype, "size", {
            get: function() {
              return this.__entries__.length
            },
            enumerable: !0,
            configurable: !0
          }), FQ.prototype.get = function(FQ) {
            var wQ = QQ(this.__entries__, FQ),
              LQ = this.__entries__[wQ];
            return LQ && LQ[1]
          }, FQ.prototype.set = function(FQ, wQ) {
            var LQ = QQ(this.__entries__, FQ);
            ~LQ ? this.__entries__[LQ][1] = wQ : this.__entries__.push([FQ, wQ])
          }, FQ.prototype.delete = function(FQ) {
            var wQ = this.__entries__,
              LQ = QQ(wQ, FQ);
            ~LQ && wQ.splice(LQ, 1)
          }, FQ.prototype.has = function(FQ) {
            return !!~QQ(this.__entries__, FQ)
          }, FQ.prototype.clear = function() {
            this.__entries__.splice(0)
          }, FQ.prototype.forEach = function(QQ, FQ) {
            void 0 === FQ && (FQ = null);
            for (var wQ = 0, LQ = this.__entries__; wQ < LQ.length; wQ++) {
              var qQ = LQ[wQ];
              QQ.call(FQ, qQ[1], qQ[0])
            }
          }, FQ
        }()
      }(),
      qQ = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document,
      oQ = "undefined" !== typeof wQ.g && wQ.g.Math === Math ? wQ.g : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")(),
      DQ = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(oQ) : function(QQ) {
        return setTimeout((function() {
          return QQ(Date.now())
        }), 1e3 / 60)
      };
    var kQ = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
      vQ = "undefined" !== typeof MutationObserver,
      mQ = function() {
        function QQ() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(QQ, FQ) {
            var wQ = !1,
              LQ = !1,
              qQ = 0;

            function oQ() {
              wQ && (wQ = !1, QQ()), LQ && vQ()
            }

            function kQ() {
              DQ(oQ)
            }

            function vQ() {
              var QQ = Date.now();
              if (wQ) {
                if (QQ - qQ < 2) return;
                LQ = !0
              } else wQ = !0, LQ = !1, setTimeout(kQ, FQ);
              qQ = QQ
            }
            return vQ
          }(this.refresh.bind(this), 20)
        }
        return QQ.prototype.addObserver = function(QQ) {
          ~this.observers_.indexOf(QQ) || this.observers_.push(QQ), this.connected_ || this.connect_()
        }, QQ.prototype.removeObserver = function(QQ) {
          var FQ = this.observers_,
            wQ = FQ.indexOf(QQ);
          ~wQ && FQ.splice(wQ, 1), !FQ.length && this.connected_ && this.disconnect_()
        }, QQ.prototype.refresh = function() {
          this.updateObservers_() && this.refresh()
        }, QQ.prototype.updateObservers_ = function() {
          var QQ = this.observers_.filter((function(QQ) {
            return QQ.gatherActive(), QQ.hasActive()
          }));
          return QQ.forEach((function(QQ) {
            return QQ.broadcastActive()
          })), QQ.length > 0
        }, QQ.prototype.connect_ = function() {
          qQ && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), vQ ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
          })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, QQ.prototype.disconnect_ = function() {
          qQ && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, QQ.prototype.onTransitionEnd_ = function(QQ) {
          var FQ = QQ.propertyName,
            wQ = void 0 === FQ ? "" : FQ;
          kQ.some((function(QQ) {
            return !!~wQ.indexOf(QQ)
          })) && this.refresh()
        }, QQ.getInstance = function() {
          return this.instance_ || (this.instance_ = new QQ), this.instance_
        }, QQ.instance_ = null, QQ
      }(),
      uQ = function(QQ, FQ) {
        for (var wQ = 0, LQ = Object.keys(FQ); wQ < LQ.length; wQ++) {
          var qQ = LQ[wQ];
          Object.defineProperty(QQ, qQ, {
            value: FQ[qQ],
            enumerable: !1,
            writable: !1,
            configurable: !0
          })
        }
        return QQ
      },
      HQ = function(QQ) {
        return QQ && QQ.ownerDocument && QQ.ownerDocument.defaultView || oQ
      },
      bQ = MQ(0, 0, 0, 0);

    function YQ(QQ) {
      return parseFloat(QQ) || 0
    }

    function xQ(QQ) {
      for (var FQ = [], wQ = 1; wQ < arguments.length; wQ++) FQ[wQ - 1] = arguments[wQ];
      return FQ.reduce((function(FQ, wQ) {
        return FQ + YQ(QQ["border-" + wQ + "-width"])
      }), 0)
    }

    function AQ(QQ) {
      var FQ = QQ.clientWidth,
        wQ = QQ.clientHeight;
      if (!FQ && !wQ) return bQ;
      var LQ = HQ(QQ).getComputedStyle(QQ),
        qQ = function(QQ) {
          for (var FQ = {}, wQ = 0, LQ = ["top", "right", "bottom", "left"]; wQ < LQ.length; wQ++) {
            var qQ = LQ[wQ],
              oQ = QQ["padding-" + qQ];
            FQ[qQ] = YQ(oQ)
          }
          return FQ
        }(LQ),
        oQ = qQ.left + qQ.right,
        DQ = qQ.top + qQ.bottom,
        kQ = YQ(LQ.width),
        vQ = YQ(LQ.height);
      if ("border-box" === LQ.boxSizing && (Math.round(kQ + oQ) !== FQ && (kQ -= xQ(LQ, "left", "right") + oQ), Math.round(vQ + DQ) !== wQ && (vQ -= xQ(LQ, "top", "bottom") + DQ)), ! function(QQ) {
          return QQ === HQ(QQ).document.documentElement
        }(QQ)) {
        var mQ = Math.round(kQ + oQ) - FQ,
          uQ = Math.round(vQ + DQ) - wQ;
        1 !== Math.abs(mQ) && (kQ -= mQ), 1 !== Math.abs(uQ) && (vQ -= uQ)
      }
      return MQ(qQ.left, qQ.top, kQ, vQ)
    }
    var tQ = "undefined" !== typeof SVGGraphicsElement ? function(QQ) {
      return QQ instanceof HQ(QQ).SVGGraphicsElement
    } : function(QQ) {
      return QQ instanceof HQ(QQ).SVGElement && "function" === typeof QQ.getBBox
    };

    function eQ(QQ) {
      return qQ ? tQ(QQ) ? function(QQ) {
        var FQ = QQ.getBBox();
        return MQ(0, 0, FQ.width, FQ.height)
      }(QQ) : AQ(QQ) : bQ
    }

    function MQ(QQ, FQ, wQ, LQ) {
      return {
        x: QQ,
        y: FQ,
        width: wQ,
        height: LQ
      }
    }
    var GQ = function() {
        function QQ(QQ) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = MQ(0, 0, 0, 0), this.target = QQ
        }
        return QQ.prototype.isActive = function() {
          var QQ = eQ(this.target);
          return this.contentRect_ = QQ, QQ.width !== this.broadcastWidth || QQ.height !== this.broadcastHeight
        }, QQ.prototype.broadcastRect = function() {
          var QQ = this.contentRect_;
          return this.broadcastWidth = QQ.width, this.broadcastHeight = QQ.height, QQ
        }, QQ
      }(),
      pQ = function(QQ, FQ) {
        var wQ = function(QQ) {
          var FQ = QQ.x,
            wQ = QQ.y,
            LQ = QQ.width,
            qQ = QQ.height,
            oQ = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
            DQ = Object.create(oQ.prototype);
          return uQ(DQ, {
            x: FQ,
            y: wQ,
            width: LQ,
            height: qQ,
            top: wQ,
            right: FQ + LQ,
            bottom: qQ + wQ,
            left: FQ
          }), DQ
        }(FQ);
        uQ(this, {
          target: QQ,
          contentRect: wQ
        })
      },
      cQ = function() {
        function QQ(QQ, FQ, wQ) {
          if (this.activeObservations_ = [], this.observations_ = new LQ, "function" !== typeof QQ) throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = QQ, this.controller_ = FQ, this.callbackCtx_ = wQ
        }
        return QQ.prototype.observe = function(QQ) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(QQ instanceof HQ(QQ).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var FQ = this.observations_;
            FQ.has(QQ) || (FQ.set(QQ, new GQ(QQ)), this.controller_.addObserver(this), this.controller_.refresh())
          }
        }, QQ.prototype.unobserve = function(QQ) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(QQ instanceof HQ(QQ).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var FQ = this.observations_;
            FQ.has(QQ) && (FQ.delete(QQ), FQ.size || this.controller_.removeObserver(this))
          }
        }, QQ.prototype.disconnect = function() {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, QQ.prototype.gatherActive = function() {
          var QQ = this;
          this.clearActive(), this.observations_.forEach((function(FQ) {
            FQ.isActive() && QQ.activeObservations_.push(FQ)
          }))
        }, QQ.prototype.broadcastActive = function() {
          if (this.hasActive()) {
            var QQ = this.callbackCtx_,
              FQ = this.activeObservations_.map((function(QQ) {
                return new pQ(QQ.target, QQ.broadcastRect())
              }));
            this.callback_.call(QQ, FQ, QQ), this.clearActive()
          }
        }, QQ.prototype.clearActive = function() {
          this.activeObservations_.splice(0)
        }, QQ.prototype.hasActive = function() {
          return this.activeObservations_.length > 0
        }, QQ
      }(),
      CQ = "undefined" !== typeof WeakMap ? new WeakMap : new LQ,
      SQ = function QQ(FQ) {
        if (!(this instanceof QQ)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var wQ = mQ.getInstance(),
          LQ = new cQ(FQ, wQ, this);
        CQ.set(this, LQ)
      };
    ["observe", "unobserve", "disconnect"].forEach((function(QQ) {
      SQ.prototype[QQ] = function() {
        var FQ;
        return (FQ = CQ.get(this))[QQ].apply(FQ, arguments)
      }
    }));
    const iQ = "undefined" !== typeof oQ.ResizeObserver ? oQ.ResizeObserver : SQ
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);