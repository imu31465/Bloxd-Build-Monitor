export const id = 112;
export const ids = [112];
export const modules = {
  5359: (QQ, WQ, XQ) => {
    function wQ(QQ) {
      return wQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, wQ(QQ)
    }
    Object.defineProperty(WQ, "__esModule", {
      value: !0
    }), WQ.default = void 0;
    var qQ = JQ(XQ(1081)),
      TQ = function(QQ, WQ) {
        if (!WQ && QQ && QQ.__esModule) return QQ;
        if (null === QQ || "object" !== wQ(QQ) && "function" !== typeof QQ) return {
          default: QQ
        };
        var XQ = gQ(WQ);
        if (XQ && XQ.has(QQ)) return XQ.get(QQ);
        var qQ = {},
          TQ = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var zQ in QQ)
          if ("default" !== zQ && Object.prototype.hasOwnProperty.call(QQ, zQ)) {
            var sQ = TQ ? Object.getOwnPropertyDescriptor(QQ, zQ) : null;
            sQ && (sQ.get || sQ.set) ? Object.defineProperty(qQ, zQ, sQ) : qQ[zQ] = QQ[zQ]
          } qQ.default = QQ, XQ && XQ.set(QQ, qQ);
        return qQ
      }(XQ(61)),
      zQ = JQ(XQ(5318)),
      sQ = JQ(XQ(5368)),
      FQ = XQ(5373),
      PQ = XQ(1145);

    function gQ(QQ) {
      if ("function" !== typeof WeakMap) return null;
      var WQ = new WeakMap,
        XQ = new WeakMap;
      return (gQ = function(QQ) {
        return QQ ? XQ : WQ
      })(QQ)
    }

    function JQ(QQ) {
      return QQ && QQ.__esModule ? QQ : {
        default: QQ
      }
    }

    function rQ(QQ, WQ) {
      var XQ = "undefined" !== typeof Symbol && QQ[Symbol.iterator] || QQ["@@iterator"];
      if (!XQ) {
        if (Array.isArray(QQ) || (XQ = function(QQ, WQ) {
            if (!QQ) return;
            if ("string" === typeof QQ) return IQ(QQ, WQ);
            var XQ = Object.prototype.toString.call(QQ).slice(8, -1);
            "Object" === XQ && QQ.constructor && (XQ = QQ.constructor.name);
            if ("Map" === XQ || "Set" === XQ) return Array.from(QQ);
            if ("Arguments" === XQ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(XQ)) return IQ(QQ, WQ)
          }(QQ)) || WQ && QQ && "number" === typeof QQ.length) {
          XQ && (QQ = XQ);
          var wQ = 0,
            qQ = function() {};
          return {
            s: qQ,
            n: function() {
              return wQ >= QQ.length ? {
                done: !0
              } : {
                done: !1,
                value: QQ[wQ++]
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
      var TQ, zQ = !0,
        sQ = !1;
      return {
        s: function() {
          XQ = XQ.call(QQ)
        },
        n: function() {
          var QQ = XQ.next();
          return zQ = QQ.done, QQ
        },
        e: function(QQ) {
          sQ = !0, TQ = QQ
        },
        f: function() {
          try {
            zQ || null == XQ.return || XQ.return()
          } finally {
            if (sQ) throw TQ
          }
        }
      }
    }

    function IQ(QQ, WQ) {
      (null == WQ || WQ > QQ.length) && (WQ = QQ.length);
      for (var XQ = 0, wQ = new Array(WQ); XQ < WQ; XQ++) wQ[XQ] = QQ[XQ];
      return wQ
    }

    function jQ(QQ, WQ) {
      for (var XQ = 0; XQ < WQ.length; XQ++) {
        var wQ = WQ[XQ];
        wQ.enumerable = wQ.enumerable || !1, wQ.configurable = !0, "value" in wQ && (wQ.writable = !0), Object.defineProperty(QQ, wQ.key, wQ)
      }
    }

    function BQ(QQ, WQ) {
      return BQ = Object.setPrototypeOf || function(QQ, WQ) {
        return QQ.__proto__ = WQ, QQ
      }, BQ(QQ, WQ)
    }

    function yQ(QQ) {
      var WQ = function() {
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
        var XQ, qQ = DQ(QQ);
        if (WQ) {
          var TQ = DQ(this).constructor;
          XQ = Reflect.construct(qQ, arguments, TQ)
        } else XQ = qQ.apply(this, arguments);
        return function(QQ, WQ) {
          if (WQ && ("object" === wQ(WQ) || "function" === typeof WQ)) return WQ;
          if (void 0 !== WQ) throw new TypeError("Derived constructors may only return object or undefined");
          return VQ(QQ)
        }(this, XQ)
      }
    }

    function VQ(QQ) {
      if (void 0 === QQ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return QQ
    }

    function DQ(QQ) {
      return DQ = Object.setPrototypeOf ? Object.getPrototypeOf : function(QQ) {
        return QQ.__proto__ || Object.getPrototypeOf(QQ)
      }, DQ(QQ)
    }

    function pQ(QQ, WQ, XQ) {
      return WQ in QQ ? Object.defineProperty(QQ, WQ, {
        value: XQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[WQ] = XQ, QQ
    }
    var GQ = {
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
      UQ = function(QQ) {
        ! function(QQ, WQ) {
          if ("function" !== typeof WQ && null !== WQ) throw new TypeError("Super expression must either be null or a function");
          Object.defineProperty(QQ, "prototype", {
            value: Object.create(WQ && WQ.prototype, {
              constructor: {
                value: QQ,
                writable: !0,
                configurable: !0
              }
            }),
            writable: !1
          }), WQ && BQ(QQ, WQ)
        }(zQ, QQ);
        var WQ, XQ, wQ, TQ = yQ(zQ);

        function zQ(QQ, WQ) {
          var XQ;
          return function(QQ, WQ) {
            if (!(QQ instanceof WQ)) throw new TypeError("Cannot call a class as a function")
          }(this, zQ), pQ(VQ(XQ = TQ.call(this, QQ, WQ)), "handleFormat", (function(QQ) {
            var WQ = XQ.props.format;
            return WQ ? WQ(QQ) : QQ
          })), pQ(VQ(XQ), "handleUpdate", (function() {
            if (XQ.slider) {
              var QQ = XQ.props.orientation,
                WQ = (0, FQ.capitalize)(GQ.orientation[QQ].dimension),
                wQ = XQ.slider["offset".concat(WQ)],
                qQ = XQ.handle["offset".concat(WQ)];
              XQ.setState({
                limit: wQ - qQ,
                grab: qQ / 2
              })
            }
          })), pQ(VQ(XQ), "handleStart", (function(QQ) {
            var WQ = XQ.props.onChangeStart;
            document.addEventListener("mousemove", XQ.handleDrag), document.addEventListener("mouseup", XQ.handleEnd), XQ.setState({
              active: !0
            }, (function() {
              WQ && WQ(QQ)
            }))
          })), pQ(VQ(XQ), "handleDrag", (function(QQ) {
            QQ.stopPropagation();
            var WQ = XQ.props.onChange,
              wQ = QQ.target,
              qQ = wQ.className,
              TQ = wQ.classList,
              zQ = wQ.dataset;
            if (WQ && "rangeslider__labels" !== qQ) {
              var sQ = XQ.position(QQ);
              TQ && TQ.contains("rangeslider__label-item") && zQ.value && (sQ = parseFloat(zQ.value)), WQ && WQ(sQ, QQ)
            }
          })), pQ(VQ(XQ), "handleEnd", (function(QQ) {
            var WQ = XQ.props.onChangeComplete;
            XQ.setState({
              active: !1
            }, (function() {
              WQ && WQ(QQ)
            })), document.removeEventListener("mousemove", XQ.handleDrag), document.removeEventListener("mouseup", XQ.handleEnd)
          })), pQ(VQ(XQ), "handleKeyDown", (function(QQ) {
            QQ.preventDefault();
            var WQ, wQ = QQ.keyCode,
              qQ = XQ.props,
              TQ = qQ.value,
              zQ = qQ.min,
              sQ = qQ.max,
              FQ = qQ.step,
              PQ = qQ.onChange;
            switch (wQ) {
              case 38:
              case 39:
                WQ = TQ + FQ > sQ ? sQ : TQ + FQ, PQ && PQ(WQ, QQ);
                break;
              case 37:
              case 40:
                WQ = TQ - FQ < zQ ? zQ : TQ - FQ, PQ && PQ(WQ, QQ)
            }
          })), pQ(VQ(XQ), "getPositionFromValue", (function(QQ) {
            var WQ = XQ.state.limit,
              wQ = XQ.props,
              qQ = wQ.min,
              TQ = (QQ - qQ) / (wQ.max - qQ);
            return Math.round(TQ * WQ)
          })), pQ(VQ(XQ), "getValueFromPosition", (function(QQ) {
            var WQ = XQ.state.limit,
              wQ = XQ.props,
              qQ = wQ.orientation,
              TQ = wQ.min,
              zQ = wQ.max,
              sQ = wQ.step,
              PQ = (0, FQ.clamp)(QQ, 0, WQ) / (WQ || 1),
              gQ = sQ * Math.round(PQ * (zQ - TQ) / sQ),
              JQ = "horizontal" === qQ ? gQ + TQ : zQ - gQ;
            return (0, FQ.clamp)(JQ, TQ, zQ)
          })), pQ(VQ(XQ), "position", (function(QQ) {
            var WQ = XQ.state.grab,
              wQ = XQ.props,
              qQ = wQ.orientation,
              TQ = wQ.reverse,
              zQ = XQ.slider,
              sQ = GQ.orientation[qQ].coordinate,
              PQ = TQ ? GQ.orientation[qQ].reverseDirection : GQ.orientation[qQ].direction,
              gQ = "client".concat((0, FQ.capitalize)(sQ)),
              JQ = QQ.touches ? QQ.touches[0][gQ] : QQ[gQ],
              rQ = zQ.getBoundingClientRect()[PQ],
              IQ = TQ ? rQ - JQ - WQ : JQ - rQ - WQ;
            return XQ.getValueFromPosition(IQ)
          })), pQ(VQ(XQ), "coordinates", (function(QQ) {
            var WQ = XQ.state,
              wQ = WQ.limit,
              qQ = WQ.grab,
              TQ = XQ.props.orientation,
              zQ = XQ.getValueFromPosition(QQ),
              sQ = XQ.getPositionFromValue(zQ),
              FQ = "horizontal" === TQ ? sQ + qQ : sQ;
            return {
              fill: "horizontal" === TQ ? FQ : wQ - FQ,
              handle: FQ,
              label: FQ
            }
          })), pQ(VQ(XQ), "renderLabels", (function(QQ) {
            return (0, PQ.jsx)("ul", {
              ref: function(QQ) {
                XQ.labels = QQ
              },
              className: (0, qQ.default)("rangeslider__labels"),
              children: QQ
            })
          })), XQ.state = {
            active: !1,
            limit: 0,
            grab: 0
          }, XQ
        }
        return WQ = zQ, (XQ = [{
          key: "componentDidMount",
          value: function() {
            this.handleUpdate(), new sQ.default(this.handleUpdate).observe(this.slider)
          }
        }, {
          key: "render",
          value: function() {
            var QQ = this,
              WQ = this.props,
              XQ = WQ.value,
              wQ = WQ.orientation,
              TQ = WQ.className,
              zQ = WQ.tooltip,
              sQ = WQ.reverse,
              FQ = WQ.labels,
              gQ = WQ.min,
              JQ = WQ.max,
              IQ = WQ.handleLabel,
              jQ = this.state.active,
              BQ = GQ.orientation[wQ].dimension,
              yQ = sQ ? GQ.orientation[wQ].reverseDirection : GQ.orientation[wQ].direction,
              VQ = this.getPositionFromValue(XQ),
              DQ = this.coordinates(VQ),
              UQ = pQ({}, BQ, "".concat(DQ.fill, "px")),
              bQ = pQ({}, yQ, "".concat(DQ.handle, "px")),
              vQ = zQ && jQ,
              dQ = [],
              HQ = Object.keys(FQ);
            if (HQ.length > 0) {
              var aQ, lQ = rQ(HQ = HQ.sort((function(QQ, WQ) {
                return sQ ? QQ - WQ : WQ - QQ
              })));
              try {
                for (lQ.s(); !(aQ = lQ.n()).done;) {
                  var hQ = aQ.value,
                    iQ = this.getPositionFromValue(hQ),
                    cQ = this.coordinates(iQ),
                    AQ = pQ({}, yQ, "".concat(cQ.label, "px"));
                  dQ.push((0, PQ.jsx)("li", {
                    className: (0, qQ.default)("rangeslider__label-item"),
                    "data-value": hQ,
                    onMouseDown: this.handleDrag,
                    onTouchStart: this.handleStart,
                    onTouchEnd: this.handleEnd,
                    style: AQ,
                    children: this.props.labels[hQ]
                  }, hQ))
                }
              } catch (RQ) {
                lQ.e(RQ)
              } finally {
                lQ.f()
              }
            }
            return (0, PQ.jsxs)("div", {
              ref: function(WQ) {
                QQ.slider = WQ
              },
              className: (0, qQ.default)("rangeslider", "rangeslider-".concat(wQ), {
                "rangeslider-reverse": sQ
              }, TQ),
              onMouseDown: this.handleDrag,
              onMouseUp: this.handleEnd,
              onTouchStart: this.handleStart,
              onTouchEnd: this.handleEnd,
              "aria-valuemin": gQ,
              "aria-valuemax": JQ,
              "aria-valuenow": XQ,
              "aria-orientation": wQ,
              children: [(0, PQ.jsx)("div", {
                className: "rangeslider__fill",
                style: UQ
              }), (0, PQ.jsxs)("div", {
                ref: function(WQ) {
                  QQ.handle = WQ
                },
                className: "rangeslider__handle",
                onMouseDown: this.handleStart,
                onTouchMove: this.handleDrag,
                onTouchEnd: this.handleEnd,
                onKeyDown: this.handleKeyDown,
                style: bQ,
                tabIndex: 0,
                children: [vQ && (0, PQ.jsx)("div", {
                  ref: function(WQ) {
                    QQ.tooltip = WQ
                  },
                  className: "rangeslider__handle-tooltip",
                  children: (0, PQ.jsx)("span", {
                    children: this.handleFormat(XQ)
                  })
                }), (0, PQ.jsx)("div", {
                  className: "rangeslider__handle-label",
                  children: IQ
                })]
              }), FQ && this.renderLabels(dQ)]
            })
          }
        }]) && jQ(WQ.prototype, XQ), wQ && jQ(WQ, wQ), Object.defineProperty(WQ, "prototype", {
          writable: !1
        }), zQ
      }(TQ.Component);
    pQ(UQ, "propTypes", {
      min: zQ.default.number,
      max: zQ.default.number,
      step: zQ.default.number,
      value: zQ.default.number,
      orientation: zQ.default.string,
      tooltip: zQ.default.bool,
      reverse: zQ.default.bool,
      labels: zQ.default.object,
      handleLabel: zQ.default.string,
      format: zQ.default.func,
      onChangeStart: zQ.default.func,
      onChange: zQ.default.func,
      onChangeComplete: zQ.default.func
    }), pQ(UQ, "defaultProps", {
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
    var bQ = UQ;
    WQ.default = bQ
  },
  5351: (QQ, WQ, XQ) => {
    var wQ;
    WQ.c = void 0;
    var qQ = ((wQ = XQ(5359)) && wQ.__esModule ? wQ : {
      default: wQ
    }).default;
    WQ.c = qQ
  },
  5373: (QQ, WQ) => {
    Object.defineProperty(WQ, "__esModule", {
      value: !0
    }), WQ.capitalize = function(QQ) {
      return QQ.charAt(0).toUpperCase() + QQ.substr(1)
    }, WQ.clamp = function(QQ, WQ, XQ) {
      return Math.min(Math.max(QQ, WQ), XQ)
    }
  },
  5320: (QQ, WQ, XQ) => {
    var wQ = XQ(5328);

    function qQ() {}

    function TQ() {}
    TQ.resetWarningCache = qQ, QQ.exports = function() {
      function QQ(QQ, WQ, XQ, qQ, TQ, zQ) {
        if (zQ !== wQ) {
          var sQ = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw sQ.name = "Invariant Violation", sQ
        }
      }

      function WQ() {
        return QQ
      }
      QQ.isRequired = QQ;
      var XQ = {
        array: QQ,
        bigint: QQ,
        bool: QQ,
        func: QQ,
        number: QQ,
        object: QQ,
        string: QQ,
        symbol: QQ,
        any: QQ,
        arrayOf: WQ,
        element: QQ,
        elementType: QQ,
        instanceOf: WQ,
        node: QQ,
        objectOf: WQ,
        oneOf: WQ,
        oneOfType: WQ,
        shape: WQ,
        exact: WQ,
        checkPropTypes: TQ,
        resetWarningCache: qQ
      };
      return XQ.PropTypes = XQ, XQ
    }
  },
  5318: (QQ, WQ, XQ) => {
    QQ.exports = XQ(5320)()
  },
  5328: QQ => {
    QQ.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  5368: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      default: () => dQ
    });
    var wQ = function() {
        if ("undefined" !== typeof Map) return Map;

        function QQ(QQ, WQ) {
          var XQ = -1;
          return QQ.some((function(QQ, wQ) {
            return QQ[0] === WQ && (XQ = wQ, !0)
          })), XQ
        }
        return function() {
          function WQ() {
            this.__entries__ = []
          }
          return Object.defineProperty(WQ.prototype, "size", {
            get: function() {
              return this.__entries__.length
            },
            enumerable: !0,
            configurable: !0
          }), WQ.prototype.get = function(WQ) {
            var XQ = QQ(this.__entries__, WQ),
              wQ = this.__entries__[XQ];
            return wQ && wQ[1]
          }, WQ.prototype.set = function(WQ, XQ) {
            var wQ = QQ(this.__entries__, WQ);
            ~wQ ? this.__entries__[wQ][1] = XQ : this.__entries__.push([WQ, XQ])
          }, WQ.prototype.delete = function(WQ) {
            var XQ = this.__entries__,
              wQ = QQ(XQ, WQ);
            ~wQ && XQ.splice(wQ, 1)
          }, WQ.prototype.has = function(WQ) {
            return !!~QQ(this.__entries__, WQ)
          }, WQ.prototype.clear = function() {
            this.__entries__.splice(0)
          }, WQ.prototype.forEach = function(QQ, WQ) {
            void 0 === WQ && (WQ = null);
            for (var XQ = 0, wQ = this.__entries__; XQ < wQ.length; XQ++) {
              var qQ = wQ[XQ];
              QQ.call(WQ, qQ[1], qQ[0])
            }
          }, WQ
        }()
      }(),
      qQ = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document,
      TQ = "undefined" !== typeof XQ.g && XQ.g.Math === Math ? XQ.g : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")(),
      zQ = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(TQ) : function(QQ) {
        return setTimeout((function() {
          return QQ(Date.now())
        }), 1e3 / 60)
      };
    var sQ = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
      FQ = "undefined" !== typeof MutationObserver,
      PQ = function() {
        function QQ() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(QQ, WQ) {
            var XQ = !1,
              wQ = !1,
              qQ = 0;

            function TQ() {
              XQ && (XQ = !1, QQ()), wQ && FQ()
            }

            function sQ() {
              zQ(TQ)
            }

            function FQ() {
              var QQ = Date.now();
              if (XQ) {
                if (QQ - qQ < 2) return;
                wQ = !0
              } else XQ = !0, wQ = !1, setTimeout(sQ, WQ);
              qQ = QQ
            }
            return FQ
          }(this.refresh.bind(this), 20)
        }
        return QQ.prototype.addObserver = function(QQ) {
          ~this.observers_.indexOf(QQ) || this.observers_.push(QQ), this.connected_ || this.connect_()
        }, QQ.prototype.removeObserver = function(QQ) {
          var WQ = this.observers_,
            XQ = WQ.indexOf(QQ);
          ~XQ && WQ.splice(XQ, 1), !WQ.length && this.connected_ && this.disconnect_()
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
          qQ && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), FQ ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
          })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, QQ.prototype.disconnect_ = function() {
          qQ && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, QQ.prototype.onTransitionEnd_ = function(QQ) {
          var WQ = QQ.propertyName,
            XQ = void 0 === WQ ? "" : WQ;
          sQ.some((function(QQ) {
            return !!~XQ.indexOf(QQ)
          })) && this.refresh()
        }, QQ.getInstance = function() {
          return this.instance_ || (this.instance_ = new QQ), this.instance_
        }, QQ.instance_ = null, QQ
      }(),
      gQ = function(QQ, WQ) {
        for (var XQ = 0, wQ = Object.keys(WQ); XQ < wQ.length; XQ++) {
          var qQ = wQ[XQ];
          Object.defineProperty(QQ, qQ, {
            value: WQ[qQ],
            enumerable: !1,
            writable: !1,
            configurable: !0
          })
        }
        return QQ
      },
      JQ = function(QQ) {
        return QQ && QQ.ownerDocument && QQ.ownerDocument.defaultView || TQ
      },
      rQ = DQ(0, 0, 0, 0);

    function IQ(QQ) {
      return parseFloat(QQ) || 0
    }

    function jQ(QQ) {
      for (var WQ = [], XQ = 1; XQ < arguments.length; XQ++) WQ[XQ - 1] = arguments[XQ];
      return WQ.reduce((function(WQ, XQ) {
        return WQ + IQ(QQ["border-" + XQ + "-width"])
      }), 0)
    }

    function BQ(QQ) {
      var WQ = QQ.clientWidth,
        XQ = QQ.clientHeight;
      if (!WQ && !XQ) return rQ;
      var wQ = JQ(QQ).getComputedStyle(QQ),
        qQ = function(QQ) {
          for (var WQ = {}, XQ = 0, wQ = ["top", "right", "bottom", "left"]; XQ < wQ.length; XQ++) {
            var qQ = wQ[XQ],
              TQ = QQ["padding-" + qQ];
            WQ[qQ] = IQ(TQ)
          }
          return WQ
        }(wQ),
        TQ = qQ.left + qQ.right,
        zQ = qQ.top + qQ.bottom,
        sQ = IQ(wQ.width),
        FQ = IQ(wQ.height);
      if ("border-box" === wQ.boxSizing && (Math.round(sQ + TQ) !== WQ && (sQ -= jQ(wQ, "left", "right") + TQ), Math.round(FQ + zQ) !== XQ && (FQ -= jQ(wQ, "top", "bottom") + zQ)), ! function(QQ) {
          return QQ === JQ(QQ).document.documentElement
        }(QQ)) {
        var PQ = Math.round(sQ + TQ) - WQ,
          gQ = Math.round(FQ + zQ) - XQ;
        1 !== Math.abs(PQ) && (sQ -= PQ), 1 !== Math.abs(gQ) && (FQ -= gQ)
      }
      return DQ(qQ.left, qQ.top, sQ, FQ)
    }
    var yQ = "undefined" !== typeof SVGGraphicsElement ? function(QQ) {
      return QQ instanceof JQ(QQ).SVGGraphicsElement
    } : function(QQ) {
      return QQ instanceof JQ(QQ).SVGElement && "function" === typeof QQ.getBBox
    };

    function VQ(QQ) {
      return qQ ? yQ(QQ) ? function(QQ) {
        var WQ = QQ.getBBox();
        return DQ(0, 0, WQ.width, WQ.height)
      }(QQ) : BQ(QQ) : rQ
    }

    function DQ(QQ, WQ, XQ, wQ) {
      return {
        x: QQ,
        y: WQ,
        width: XQ,
        height: wQ
      }
    }
    var pQ = function() {
        function QQ(QQ) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = DQ(0, 0, 0, 0), this.target = QQ
        }
        return QQ.prototype.isActive = function() {
          var QQ = VQ(this.target);
          return this.contentRect_ = QQ, QQ.width !== this.broadcastWidth || QQ.height !== this.broadcastHeight
        }, QQ.prototype.broadcastRect = function() {
          var QQ = this.contentRect_;
          return this.broadcastWidth = QQ.width, this.broadcastHeight = QQ.height, QQ
        }, QQ
      }(),
      GQ = function(QQ, WQ) {
        var XQ = function(QQ) {
          var WQ = QQ.x,
            XQ = QQ.y,
            wQ = QQ.width,
            qQ = QQ.height,
            TQ = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
            zQ = Object.create(TQ.prototype);
          return gQ(zQ, {
            x: WQ,
            y: XQ,
            width: wQ,
            height: qQ,
            top: XQ,
            right: WQ + wQ,
            bottom: qQ + XQ,
            left: WQ
          }), zQ
        }(WQ);
        gQ(this, {
          target: QQ,
          contentRect: XQ
        })
      },
      UQ = function() {
        function QQ(QQ, WQ, XQ) {
          if (this.activeObservations_ = [], this.observations_ = new wQ, "function" !== typeof QQ) throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = QQ, this.controller_ = WQ, this.callbackCtx_ = XQ
        }
        return QQ.prototype.observe = function(QQ) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(QQ instanceof JQ(QQ).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var WQ = this.observations_;
            WQ.has(QQ) || (WQ.set(QQ, new pQ(QQ)), this.controller_.addObserver(this), this.controller_.refresh())
          }
        }, QQ.prototype.unobserve = function(QQ) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(QQ instanceof JQ(QQ).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var WQ = this.observations_;
            WQ.has(QQ) && (WQ.delete(QQ), WQ.size || this.controller_.removeObserver(this))
          }
        }, QQ.prototype.disconnect = function() {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, QQ.prototype.gatherActive = function() {
          var QQ = this;
          this.clearActive(), this.observations_.forEach((function(WQ) {
            WQ.isActive() && QQ.activeObservations_.push(WQ)
          }))
        }, QQ.prototype.broadcastActive = function() {
          if (this.hasActive()) {
            var QQ = this.callbackCtx_,
              WQ = this.activeObservations_.map((function(QQ) {
                return new GQ(QQ.target, QQ.broadcastRect())
              }));
            this.callback_.call(QQ, WQ, QQ), this.clearActive()
          }
        }, QQ.prototype.clearActive = function() {
          this.activeObservations_.splice(0)
        }, QQ.prototype.hasActive = function() {
          return this.activeObservations_.length > 0
        }, QQ
      }(),
      bQ = "undefined" !== typeof WeakMap ? new WeakMap : new wQ,
      vQ = function QQ(WQ) {
        if (!(this instanceof QQ)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var XQ = PQ.getInstance(),
          wQ = new UQ(WQ, XQ, this);
        bQ.set(this, wQ)
      };
    ["observe", "unobserve", "disconnect"].forEach((function(QQ) {
      vQ.prototype[QQ] = function() {
        var WQ;
        return (WQ = bQ.get(this))[QQ].apply(WQ, arguments)
      }
    }));
    const dQ = "undefined" !== typeof TQ.ResizeObserver ? TQ.ResizeObserver : vQ
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);