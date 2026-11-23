export const id = 108;
export const ids = [108];
export const modules = {
  4951: (CC, zC, ZC) => {
    function QC(CC) {
      return QC = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(CC) {
        return typeof CC
      } : function(CC) {
        return CC && "function" == typeof Symbol && CC.constructor === Symbol && CC !== Symbol.prototype ? "symbol" : typeof CC
      }, QC(CC)
    }
    Object.defineProperty(zC, "__esModule", {
      value: !0
    }), zC.default = void 0;
    var wC = WC(ZC(1002)),
      bC = function(CC, zC) {
        if (!zC && CC && CC.__esModule) return CC;
        if (null === CC || "object" !== QC(CC) && "function" !== typeof CC) return {
          default: CC
        };
        var ZC = FC(zC);
        if (ZC && ZC.has(CC)) return ZC.get(CC);
        var wC = {},
          bC = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var nC in CC)
          if ("default" !== nC && Object.prototype.hasOwnProperty.call(CC, nC)) {
            var fC = bC ? Object.getOwnPropertyDescriptor(CC, nC) : null;
            fC && (fC.get || fC.set) ? Object.defineProperty(wC, nC, fC) : wC[nC] = CC[nC]
          } wC.default = CC, ZC && ZC.set(CC, wC);
        return wC
      }(ZC(48)),
      nC = WC(ZC(4903)),
      fC = WC(ZC(4959)),
      oC = ZC(4965),
      qC = ZC(1056);

    function FC(CC) {
      if ("function" !== typeof WeakMap) return null;
      var zC = new WeakMap,
        ZC = new WeakMap;
      return (FC = function(CC) {
        return CC ? ZC : zC
      })(CC)
    }

    function WC(CC) {
      return CC && CC.__esModule ? CC : {
        default: CC
      }
    }

    function NC(CC, zC) {
      var ZC = "undefined" !== typeof Symbol && CC[Symbol.iterator] || CC["@@iterator"];
      if (!ZC) {
        if (Array.isArray(CC) || (ZC = function(CC, zC) {
            if (!CC) return;
            if ("string" === typeof CC) return MC(CC, zC);
            var ZC = Object.prototype.toString.call(CC).slice(8, -1);
            "Object" === ZC && CC.constructor && (ZC = CC.constructor.name);
            if ("Map" === ZC || "Set" === ZC) return Array.from(CC);
            if ("Arguments" === ZC || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZC)) return MC(CC, zC)
          }(CC)) || zC && CC && "number" === typeof CC.length) {
          ZC && (CC = ZC);
          var QC = 0,
            wC = function() {};
          return {
            s: wC,
            n: function() {
              return QC >= CC.length ? {
                done: !0
              } : {
                done: !1,
                value: CC[QC++]
              }
            },
            e: function(CC) {
              throw CC
            },
            f: wC
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var bC, nC = !0,
        fC = !1;
      return {
        s: function() {
          ZC = ZC.call(CC)
        },
        n: function() {
          var CC = ZC.next();
          return nC = CC.done, CC
        },
        e: function(CC) {
          fC = !0, bC = CC
        },
        f: function() {
          try {
            nC || null == ZC.return || ZC.return()
          } finally {
            if (fC) throw bC
          }
        }
      }
    }

    function MC(CC, zC) {
      (null == zC || zC > CC.length) && (zC = CC.length);
      for (var ZC = 0, QC = new Array(zC); ZC < zC; ZC++) QC[ZC] = CC[ZC];
      return QC
    }

    function gC(CC, zC) {
      for (var ZC = 0; ZC < zC.length; ZC++) {
        var QC = zC[ZC];
        QC.enumerable = QC.enumerable || !1, QC.configurable = !0, "value" in QC && (QC.writable = !0), Object.defineProperty(CC, QC.key, QC)
      }
    }

    function SC(CC, zC) {
      return SC = Object.setPrototypeOf || function(CC, zC) {
        return CC.__proto__ = zC, CC
      }, SC(CC, zC)
    }

    function pC(CC) {
      var zC = function() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (CC) {
          return !1
        }
      }();
      return function() {
        var ZC, wC = GC(CC);
        if (zC) {
          var bC = GC(this).constructor;
          ZC = Reflect.construct(wC, arguments, bC)
        } else ZC = wC.apply(this, arguments);
        return function(CC, zC) {
          if (zC && ("object" === QC(zC) || "function" === typeof zC)) return zC;
          if (void 0 !== zC) throw new TypeError("Derived constructors may only return object or undefined");
          return PC(CC)
        }(this, ZC)
      }
    }

    function PC(CC) {
      if (void 0 === CC) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return CC
    }

    function GC(CC) {
      return GC = Object.setPrototypeOf ? Object.getPrototypeOf : function(CC) {
        return CC.__proto__ || Object.getPrototypeOf(CC)
      }, GC(CC)
    }

    function RC(CC, zC, ZC) {
      return zC in CC ? Object.defineProperty(CC, zC, {
        value: ZC,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : CC[zC] = ZC, CC
    }
    var AC = {
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
      xC = function(CC) {
        ! function(CC, zC) {
          if ("function" !== typeof zC && null !== zC) throw new TypeError("Super expression must either be null or a function");
          Object.defineProperty(CC, "prototype", {
            value: Object.create(zC && zC.prototype, {
              constructor: {
                value: CC,
                writable: !0,
                configurable: !0
              }
            }),
            writable: !1
          }), zC && SC(CC, zC)
        }(nC, CC);
        var zC, ZC, QC, bC = pC(nC);

        function nC(CC, zC) {
          var ZC;
          return function(CC, zC) {
            if (!(CC instanceof zC)) throw new TypeError("Cannot call a class as a function")
          }(this, nC), RC(PC(ZC = bC.call(this, CC, zC)), "handleFormat", (function(CC) {
            var zC = ZC.props.format;
            return zC ? zC(CC) : CC
          })), RC(PC(ZC), "handleUpdate", (function() {
            if (ZC.slider) {
              var CC = ZC.props.orientation,
                zC = (0, oC.capitalize)(AC.orientation[CC].dimension),
                QC = ZC.slider["offset".concat(zC)],
                wC = ZC.handle["offset".concat(zC)];
              ZC.setState({
                limit: QC - wC,
                grab: wC / 2
              })
            }
          })), RC(PC(ZC), "handleStart", (function(CC) {
            var zC = ZC.props.onChangeStart;
            document.addEventListener("mousemove", ZC.handleDrag), document.addEventListener("mouseup", ZC.handleEnd), ZC.setState({
              active: !0
            }, (function() {
              zC && zC(CC)
            }))
          })), RC(PC(ZC), "handleDrag", (function(CC) {
            CC.stopPropagation();
            var zC = ZC.props.onChange,
              QC = CC.target,
              wC = QC.className,
              bC = QC.classList,
              nC = QC.dataset;
            if (zC && "rangeslider__labels" !== wC) {
              var fC = ZC.position(CC);
              bC && bC.contains("rangeslider__label-item") && nC.value && (fC = parseFloat(nC.value)), zC && zC(fC, CC)
            }
          })), RC(PC(ZC), "handleEnd", (function(CC) {
            var zC = ZC.props.onChangeComplete;
            ZC.setState({
              active: !1
            }, (function() {
              zC && zC(CC)
            })), document.removeEventListener("mousemove", ZC.handleDrag), document.removeEventListener("mouseup", ZC.handleEnd)
          })), RC(PC(ZC), "handleKeyDown", (function(CC) {
            CC.preventDefault();
            var zC, QC = CC.keyCode,
              wC = ZC.props,
              bC = wC.value,
              nC = wC.min,
              fC = wC.max,
              oC = wC.step,
              qC = wC.onChange;
            switch (QC) {
              case 38:
              case 39:
                zC = bC + oC > fC ? fC : bC + oC, qC && qC(zC, CC);
                break;
              case 37:
              case 40:
                zC = bC - oC < nC ? nC : bC - oC, qC && qC(zC, CC)
            }
          })), RC(PC(ZC), "getPositionFromValue", (function(CC) {
            var zC = ZC.state.limit,
              QC = ZC.props,
              wC = QC.min,
              bC = (CC - wC) / (QC.max - wC);
            return Math.round(bC * zC)
          })), RC(PC(ZC), "getValueFromPosition", (function(CC) {
            var zC = ZC.state.limit,
              QC = ZC.props,
              wC = QC.orientation,
              bC = QC.min,
              nC = QC.max,
              fC = QC.step,
              qC = (0, oC.clamp)(CC, 0, zC) / (zC || 1),
              FC = fC * Math.round(qC * (nC - bC) / fC),
              WC = "horizontal" === wC ? FC + bC : nC - FC;
            return (0, oC.clamp)(WC, bC, nC)
          })), RC(PC(ZC), "position", (function(CC) {
            var zC = ZC.state.grab,
              QC = ZC.props,
              wC = QC.orientation,
              bC = QC.reverse,
              nC = ZC.slider,
              fC = AC.orientation[wC].coordinate,
              qC = bC ? AC.orientation[wC].reverseDirection : AC.orientation[wC].direction,
              FC = "client".concat((0, oC.capitalize)(fC)),
              WC = CC.touches ? CC.touches[0][FC] : CC[FC],
              NC = nC.getBoundingClientRect()[qC],
              MC = bC ? NC - WC - zC : WC - NC - zC;
            return ZC.getValueFromPosition(MC)
          })), RC(PC(ZC), "coordinates", (function(CC) {
            var zC = ZC.state,
              QC = zC.limit,
              wC = zC.grab,
              bC = ZC.props.orientation,
              nC = ZC.getValueFromPosition(CC),
              fC = ZC.getPositionFromValue(nC),
              oC = "horizontal" === bC ? fC + wC : fC;
            return {
              fill: "horizontal" === bC ? oC : QC - oC,
              handle: oC,
              label: oC
            }
          })), RC(PC(ZC), "renderLabels", (function(CC) {
            return (0, qC.jsx)("ul", {
              ref: function(CC) {
                ZC.labels = CC
              },
              className: (0, wC.default)("rangeslider__labels"),
              children: CC
            })
          })), ZC.state = {
            active: !1,
            limit: 0,
            grab: 0
          }, ZC
        }
        return zC = nC, (ZC = [{
          key: "componentDidMount",
          value: function() {
            this.handleUpdate(), new fC.default(this.handleUpdate).observe(this.slider)
          }
        }, {
          key: "render",
          value: function() {
            var CC = this,
              zC = this.props,
              ZC = zC.value,
              QC = zC.orientation,
              bC = zC.className,
              nC = zC.tooltip,
              fC = zC.reverse,
              oC = zC.labels,
              FC = zC.min,
              WC = zC.max,
              MC = zC.handleLabel,
              gC = this.state.active,
              SC = AC.orientation[QC].dimension,
              pC = fC ? AC.orientation[QC].reverseDirection : AC.orientation[QC].direction,
              PC = this.getPositionFromValue(ZC),
              GC = this.coordinates(PC),
              xC = RC({}, SC, "".concat(GC.fill, "px")),
              JC = RC({}, pC, "".concat(GC.handle, "px")),
              IC = nC && gC,
              iC = [],
              vC = Object.keys(oC);
            if (vC.length > 0) {
              var eC, hC = NC(vC = vC.sort((function(CC, zC) {
                return fC ? CC - zC : zC - CC
              })));
              try {
                for (hC.s(); !(eC = hC.n()).done;) {
                  var KC = eC.value,
                    YC = this.getPositionFromValue(KC),
                    dC = this.coordinates(YC),
                    mC = RC({}, pC, "".concat(dC.label, "px"));
                  iC.push((0, qC.jsx)("li", {
                    className: (0, wC.default)("rangeslider__label-item"),
                    "data-value": KC,
                    onMouseDown: this.handleDrag,
                    onTouchStart: this.handleStart,
                    onTouchEnd: this.handleEnd,
                    style: mC,
                    children: this.props.labels[KC]
                  }, KC))
                }
              } catch (HC) {
                hC.e(HC)
              } finally {
                hC.f()
              }
            }
            return (0, qC.jsxs)("div", {
              ref: function(zC) {
                CC.slider = zC
              },
              className: (0, wC.default)("rangeslider", "rangeslider-".concat(QC), {
                "rangeslider-reverse": fC
              }, bC),
              onMouseDown: this.handleDrag,
              onMouseUp: this.handleEnd,
              onTouchStart: this.handleStart,
              onTouchEnd: this.handleEnd,
              "aria-valuemin": FC,
              "aria-valuemax": WC,
              "aria-valuenow": ZC,
              "aria-orientation": QC,
              children: [(0, qC.jsx)("div", {
                className: "rangeslider__fill",
                style: xC
              }), (0, qC.jsxs)("div", {
                ref: function(zC) {
                  CC.handle = zC
                },
                className: "rangeslider__handle",
                onMouseDown: this.handleStart,
                onTouchMove: this.handleDrag,
                onTouchEnd: this.handleEnd,
                onKeyDown: this.handleKeyDown,
                style: JC,
                tabIndex: 0,
                children: [IC && (0, qC.jsx)("div", {
                  ref: function(zC) {
                    CC.tooltip = zC
                  },
                  className: "rangeslider__handle-tooltip",
                  children: (0, qC.jsx)("span", {
                    children: this.handleFormat(ZC)
                  })
                }), (0, qC.jsx)("div", {
                  className: "rangeslider__handle-label",
                  children: MC
                })]
              }), oC && this.renderLabels(iC)]
            })
          }
        }]) && gC(zC.prototype, ZC), QC && gC(zC, QC), Object.defineProperty(zC, "prototype", {
          writable: !1
        }), nC
      }(bC.Component);
    RC(xC, "propTypes", {
      min: nC.default.number,
      max: nC.default.number,
      step: nC.default.number,
      value: nC.default.number,
      orientation: nC.default.string,
      tooltip: nC.default.bool,
      reverse: nC.default.bool,
      labels: nC.default.object,
      handleLabel: nC.default.string,
      format: nC.default.func,
      onChangeStart: nC.default.func,
      onChange: nC.default.func,
      onChangeComplete: nC.default.func
    }), RC(xC, "defaultProps", {
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
    var JC = xC;
    zC.default = JC
  },
  4947: (CC, zC, ZC) => {
    var QC;
    zC.b = void 0;
    var wC = ((QC = ZC(4951)) && QC.__esModule ? QC : {
      default: QC
    }).default;
    zC.b = wC
  },
  4965: (CC, zC) => {
    Object.defineProperty(zC, "__esModule", {
      value: !0
    }), zC.capitalize = function(CC) {
      return CC.charAt(0).toUpperCase() + CC.substr(1)
    }, zC.clamp = function(CC, zC, ZC) {
      return Math.min(Math.max(CC, zC), ZC)
    }
  },
  4911: (CC, zC, ZC) => {
    var QC = ZC(4915);

    function wC() {}

    function bC() {}
    bC.resetWarningCache = wC, CC.exports = function() {
      function CC(CC, zC, ZC, wC, bC, nC) {
        if (nC !== QC) {
          var fC = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw fC.name = "Invariant Violation", fC
        }
      }

      function zC() {
        return CC
      }
      CC.isRequired = CC;
      var ZC = {
        array: CC,
        bigint: CC,
        bool: CC,
        func: CC,
        number: CC,
        object: CC,
        string: CC,
        symbol: CC,
        any: CC,
        arrayOf: zC,
        element: CC,
        elementType: CC,
        instanceOf: zC,
        node: CC,
        objectOf: zC,
        oneOf: zC,
        oneOfType: zC,
        shape: zC,
        exact: zC,
        checkPropTypes: bC,
        resetWarningCache: wC
      };
      return ZC.PropTypes = ZC, ZC
    }
  },
  4903: (CC, zC, ZC) => {
    CC.exports = ZC(4911)()
  },
  4915: CC => {
    CC.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  4959: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      default: () => iC
    });
    var QC = function() {
        if ("undefined" !== typeof Map) return Map;

        function CC(CC, zC) {
          var ZC = -1;
          return CC.some((function(CC, QC) {
            return CC[0] === zC && (ZC = QC, !0)
          })), ZC
        }
        return function() {
          function zC() {
            this.__entries__ = []
          }
          return Object.defineProperty(zC.prototype, "size", {
            get: function() {
              return this.__entries__.length
            },
            enumerable: !0,
            configurable: !0
          }), zC.prototype.get = function(zC) {
            var ZC = CC(this.__entries__, zC),
              QC = this.__entries__[ZC];
            return QC && QC[1]
          }, zC.prototype.set = function(zC, ZC) {
            var QC = CC(this.__entries__, zC);
            ~QC ? this.__entries__[QC][1] = ZC : this.__entries__.push([zC, ZC])
          }, zC.prototype.delete = function(zC) {
            var ZC = this.__entries__,
              QC = CC(ZC, zC);
            ~QC && ZC.splice(QC, 1)
          }, zC.prototype.has = function(zC) {
            return !!~CC(this.__entries__, zC)
          }, zC.prototype.clear = function() {
            this.__entries__.splice(0)
          }, zC.prototype.forEach = function(CC, zC) {
            void 0 === zC && (zC = null);
            for (var ZC = 0, QC = this.__entries__; ZC < QC.length; ZC++) {
              var wC = QC[ZC];
              CC.call(zC, wC[1], wC[0])
            }
          }, zC
        }()
      }(),
      wC = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document,
      bC = "undefined" !== typeof ZC.g && ZC.g.Math === Math ? ZC.g : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")(),
      nC = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(bC) : function(CC) {
        return setTimeout((function() {
          return CC(Date.now())
        }), 1e3 / 60)
      };
    var fC = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
      oC = "undefined" !== typeof MutationObserver,
      qC = function() {
        function CC() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(CC, zC) {
            var ZC = !1,
              QC = !1,
              wC = 0;

            function bC() {
              ZC && (ZC = !1, CC()), QC && oC()
            }

            function fC() {
              nC(bC)
            }

            function oC() {
              var CC = Date.now();
              if (ZC) {
                if (CC - wC < 2) return;
                QC = !0
              } else ZC = !0, QC = !1, setTimeout(fC, zC);
              wC = CC
            }
            return oC
          }(this.refresh.bind(this), 20)
        }
        return CC.prototype.addObserver = function(CC) {
          ~this.observers_.indexOf(CC) || this.observers_.push(CC), this.connected_ || this.connect_()
        }, CC.prototype.removeObserver = function(CC) {
          var zC = this.observers_,
            ZC = zC.indexOf(CC);
          ~ZC && zC.splice(ZC, 1), !zC.length && this.connected_ && this.disconnect_()
        }, CC.prototype.refresh = function() {
          this.updateObservers_() && this.refresh()
        }, CC.prototype.updateObservers_ = function() {
          var CC = this.observers_.filter((function(CC) {
            return CC.gatherActive(), CC.hasActive()
          }));
          return CC.forEach((function(CC) {
            return CC.broadcastActive()
          })), CC.length > 0
        }, CC.prototype.connect_ = function() {
          wC && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), oC ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
          })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, CC.prototype.disconnect_ = function() {
          wC && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, CC.prototype.onTransitionEnd_ = function(CC) {
          var zC = CC.propertyName,
            ZC = void 0 === zC ? "" : zC;
          fC.some((function(CC) {
            return !!~ZC.indexOf(CC)
          })) && this.refresh()
        }, CC.getInstance = function() {
          return this.instance_ || (this.instance_ = new CC), this.instance_
        }, CC.instance_ = null, CC
      }(),
      FC = function(CC, zC) {
        for (var ZC = 0, QC = Object.keys(zC); ZC < QC.length; ZC++) {
          var wC = QC[ZC];
          Object.defineProperty(CC, wC, {
            value: zC[wC],
            enumerable: !1,
            writable: !1,
            configurable: !0
          })
        }
        return CC
      },
      WC = function(CC) {
        return CC && CC.ownerDocument && CC.ownerDocument.defaultView || bC
      },
      NC = GC(0, 0, 0, 0);

    function MC(CC) {
      return parseFloat(CC) || 0
    }

    function gC(CC) {
      for (var zC = [], ZC = 1; ZC < arguments.length; ZC++) zC[ZC - 1] = arguments[ZC];
      return zC.reduce((function(zC, ZC) {
        return zC + MC(CC["border-" + ZC + "-width"])
      }), 0)
    }

    function SC(CC) {
      var zC = CC.clientWidth,
        ZC = CC.clientHeight;
      if (!zC && !ZC) return NC;
      var QC = WC(CC).getComputedStyle(CC),
        wC = function(CC) {
          for (var zC = {}, ZC = 0, QC = ["top", "right", "bottom", "left"]; ZC < QC.length; ZC++) {
            var wC = QC[ZC],
              bC = CC["padding-" + wC];
            zC[wC] = MC(bC)
          }
          return zC
        }(QC),
        bC = wC.left + wC.right,
        nC = wC.top + wC.bottom,
        fC = MC(QC.width),
        oC = MC(QC.height);
      if ("border-box" === QC.boxSizing && (Math.round(fC + bC) !== zC && (fC -= gC(QC, "left", "right") + bC), Math.round(oC + nC) !== ZC && (oC -= gC(QC, "top", "bottom") + nC)), ! function(CC) {
          return CC === WC(CC).document.documentElement
        }(CC)) {
        var qC = Math.round(fC + bC) - zC,
          FC = Math.round(oC + nC) - ZC;
        1 !== Math.abs(qC) && (fC -= qC), 1 !== Math.abs(FC) && (oC -= FC)
      }
      return GC(wC.left, wC.top, fC, oC)
    }
    var pC = "undefined" !== typeof SVGGraphicsElement ? function(CC) {
      return CC instanceof WC(CC).SVGGraphicsElement
    } : function(CC) {
      return CC instanceof WC(CC).SVGElement && "function" === typeof CC.getBBox
    };

    function PC(CC) {
      return wC ? pC(CC) ? function(CC) {
        var zC = CC.getBBox();
        return GC(0, 0, zC.width, zC.height)
      }(CC) : SC(CC) : NC
    }

    function GC(CC, zC, ZC, QC) {
      return {
        x: CC,
        y: zC,
        width: ZC,
        height: QC
      }
    }
    var RC = function() {
        function CC(CC) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = GC(0, 0, 0, 0), this.target = CC
        }
        return CC.prototype.isActive = function() {
          var CC = PC(this.target);
          return this.contentRect_ = CC, CC.width !== this.broadcastWidth || CC.height !== this.broadcastHeight
        }, CC.prototype.broadcastRect = function() {
          var CC = this.contentRect_;
          return this.broadcastWidth = CC.width, this.broadcastHeight = CC.height, CC
        }, CC
      }(),
      AC = function(CC, zC) {
        var ZC = function(CC) {
          var zC = CC.x,
            ZC = CC.y,
            QC = CC.width,
            wC = CC.height,
            bC = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
            nC = Object.create(bC.prototype);
          return FC(nC, {
            x: zC,
            y: ZC,
            width: QC,
            height: wC,
            top: ZC,
            right: zC + QC,
            bottom: wC + ZC,
            left: zC
          }), nC
        }(zC);
        FC(this, {
          target: CC,
          contentRect: ZC
        })
      },
      xC = function() {
        function CC(CC, zC, ZC) {
          if (this.activeObservations_ = [], this.observations_ = new QC, "function" !== typeof CC) throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = CC, this.controller_ = zC, this.callbackCtx_ = ZC
        }
        return CC.prototype.observe = function(CC) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(CC instanceof WC(CC).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var zC = this.observations_;
            zC.has(CC) || (zC.set(CC, new RC(CC)), this.controller_.addObserver(this), this.controller_.refresh())
          }
        }, CC.prototype.unobserve = function(CC) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(CC instanceof WC(CC).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var zC = this.observations_;
            zC.has(CC) && (zC.delete(CC), zC.size || this.controller_.removeObserver(this))
          }
        }, CC.prototype.disconnect = function() {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, CC.prototype.gatherActive = function() {
          var CC = this;
          this.clearActive(), this.observations_.forEach((function(zC) {
            zC.isActive() && CC.activeObservations_.push(zC)
          }))
        }, CC.prototype.broadcastActive = function() {
          if (this.hasActive()) {
            var CC = this.callbackCtx_,
              zC = this.activeObservations_.map((function(CC) {
                return new AC(CC.target, CC.broadcastRect())
              }));
            this.callback_.call(CC, zC, CC), this.clearActive()
          }
        }, CC.prototype.clearActive = function() {
          this.activeObservations_.splice(0)
        }, CC.prototype.hasActive = function() {
          return this.activeObservations_.length > 0
        }, CC
      }(),
      JC = "undefined" !== typeof WeakMap ? new WeakMap : new QC,
      IC = function CC(zC) {
        if (!(this instanceof CC)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var ZC = qC.getInstance(),
          QC = new xC(zC, ZC, this);
        JC.set(this, QC)
      };
    ["observe", "unobserve", "disconnect"].forEach((function(CC) {
      IC.prototype[CC] = function() {
        var zC;
        return (zC = JC.get(this))[CC].apply(zC, arguments)
      }
    }));
    const iC = "undefined" !== typeof bC.ResizeObserver ? bC.ResizeObserver : IC
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);