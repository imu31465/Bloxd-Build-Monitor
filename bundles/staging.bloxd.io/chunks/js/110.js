export const id = 110;
export const ids = [110];
export const modules = {
  5024: (GG, bG, ZG) => {
    function wG(GG) {
      return wG = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(GG) {
        return typeof GG
      } : function(GG) {
        return GG && "function" == typeof Symbol && GG.constructor === Symbol && GG !== Symbol.prototype ? "symbol" : typeof GG
      }, wG(GG)
    }
    Object.defineProperty(bG, "__esModule", {
      value: !0
    }), bG.default = void 0;
    var SG = pG(ZG(1006)),
      LG = function(GG, bG) {
        if (!bG && GG && GG.__esModule) return GG;
        if (null === GG || "object" !== wG(GG) && "function" !== typeof GG) return {
          default: GG
        };
        var ZG = VG(bG);
        if (ZG && ZG.has(GG)) return ZG.get(GG);
        var SG = {},
          LG = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var yG in GG)
          if ("default" !== yG && Object.prototype.hasOwnProperty.call(GG, yG)) {
            var kG = LG ? Object.getOwnPropertyDescriptor(GG, yG) : null;
            kG && (kG.get || kG.set) ? Object.defineProperty(SG, yG, kG) : SG[yG] = GG[yG]
          } SG.default = GG, ZG && ZG.set(GG, SG);
        return SG
      }(ZG(51)),
      yG = pG(ZG(4985)),
      kG = pG(ZG(5030)),
      UG = ZG(5032),
      YG = ZG(1067);

    function VG(GG) {
      if ("function" !== typeof WeakMap) return null;
      var bG = new WeakMap,
        ZG = new WeakMap;
      return (VG = function(GG) {
        return GG ? ZG : bG
      })(GG)
    }

    function pG(GG) {
      return GG && GG.__esModule ? GG : {
        default: GG
      }
    }

    function fG(GG, bG) {
      var ZG = "undefined" !== typeof Symbol && GG[Symbol.iterator] || GG["@@iterator"];
      if (!ZG) {
        if (Array.isArray(GG) || (ZG = function(GG, bG) {
            if (!GG) return;
            if ("string" === typeof GG) return QG(GG, bG);
            var ZG = Object.prototype.toString.call(GG).slice(8, -1);
            "Object" === ZG && GG.constructor && (ZG = GG.constructor.name);
            if ("Map" === ZG || "Set" === ZG) return Array.from(GG);
            if ("Arguments" === ZG || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZG)) return QG(GG, bG)
          }(GG)) || bG && GG && "number" === typeof GG.length) {
          ZG && (GG = ZG);
          var wG = 0,
            SG = function() {};
          return {
            s: SG,
            n: function() {
              return wG >= GG.length ? {
                done: !0
              } : {
                done: !1,
                value: GG[wG++]
              }
            },
            e: function(GG) {
              throw GG
            },
            f: SG
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var LG, yG = !0,
        kG = !1;
      return {
        s: function() {
          ZG = ZG.call(GG)
        },
        n: function() {
          var GG = ZG.next();
          return yG = GG.done, GG
        },
        e: function(GG) {
          kG = !0, LG = GG
        },
        f: function() {
          try {
            yG || null == ZG.return || ZG.return()
          } finally {
            if (kG) throw LG
          }
        }
      }
    }

    function QG(GG, bG) {
      (null == bG || bG > GG.length) && (bG = GG.length);
      for (var ZG = 0, wG = new Array(bG); ZG < bG; ZG++) wG[ZG] = GG[ZG];
      return wG
    }

    function KG(GG, bG) {
      for (var ZG = 0; ZG < bG.length; ZG++) {
        var wG = bG[ZG];
        wG.enumerable = wG.enumerable || !1, wG.configurable = !0, "value" in wG && (wG.writable = !0), Object.defineProperty(GG, wG.key, wG)
      }
    }

    function hG(GG, bG) {
      return hG = Object.setPrototypeOf || function(GG, bG) {
        return GG.__proto__ = bG, GG
      }, hG(GG, bG)
    }

    function dG(GG) {
      var bG = function() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (GG) {
          return !1
        }
      }();
      return function() {
        var ZG, SG = rG(GG);
        if (bG) {
          var LG = rG(this).constructor;
          ZG = Reflect.construct(SG, arguments, LG)
        } else ZG = SG.apply(this, arguments);
        return function(GG, bG) {
          if (bG && ("object" === wG(bG) || "function" === typeof bG)) return bG;
          if (void 0 !== bG) throw new TypeError("Derived constructors may only return object or undefined");
          return JG(GG)
        }(this, ZG)
      }
    }

    function JG(GG) {
      if (void 0 === GG) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return GG
    }

    function rG(GG) {
      return rG = Object.setPrototypeOf ? Object.getPrototypeOf : function(GG) {
        return GG.__proto__ || Object.getPrototypeOf(GG)
      }, rG(GG)
    }

    function zG(GG, bG, ZG) {
      return bG in GG ? Object.defineProperty(GG, bG, {
        value: ZG,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : GG[bG] = ZG, GG
    }
    var EG = {
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
      oG = function(GG) {
        ! function(GG, bG) {
          if ("function" !== typeof bG && null !== bG) throw new TypeError("Super expression must either be null or a function");
          Object.defineProperty(GG, "prototype", {
            value: Object.create(bG && bG.prototype, {
              constructor: {
                value: GG,
                writable: !0,
                configurable: !0
              }
            }),
            writable: !1
          }), bG && hG(GG, bG)
        }(yG, GG);
        var bG, ZG, wG, LG = dG(yG);

        function yG(GG, bG) {
          var ZG;
          return function(GG, bG) {
            if (!(GG instanceof bG)) throw new TypeError("Cannot call a class as a function")
          }(this, yG), zG(JG(ZG = LG.call(this, GG, bG)), "handleFormat", (function(GG) {
            var bG = ZG.props.format;
            return bG ? bG(GG) : GG
          })), zG(JG(ZG), "handleUpdate", (function() {
            if (ZG.slider) {
              var GG = ZG.props.orientation,
                bG = (0, UG.capitalize)(EG.orientation[GG].dimension),
                wG = ZG.slider["offset".concat(bG)],
                SG = ZG.handle["offset".concat(bG)];
              ZG.setState({
                limit: wG - SG,
                grab: SG / 2
              })
            }
          })), zG(JG(ZG), "handleStart", (function(GG) {
            var bG = ZG.props.onChangeStart;
            document.addEventListener("mousemove", ZG.handleDrag), document.addEventListener("mouseup", ZG.handleEnd), ZG.setState({
              active: !0
            }, (function() {
              bG && bG(GG)
            }))
          })), zG(JG(ZG), "handleDrag", (function(GG) {
            GG.stopPropagation();
            var bG = ZG.props.onChange,
              wG = GG.target,
              SG = wG.className,
              LG = wG.classList,
              yG = wG.dataset;
            if (bG && "rangeslider__labels" !== SG) {
              var kG = ZG.position(GG);
              LG && LG.contains("rangeslider__label-item") && yG.value && (kG = parseFloat(yG.value)), bG && bG(kG, GG)
            }
          })), zG(JG(ZG), "handleEnd", (function(GG) {
            var bG = ZG.props.onChangeComplete;
            ZG.setState({
              active: !1
            }, (function() {
              bG && bG(GG)
            })), document.removeEventListener("mousemove", ZG.handleDrag), document.removeEventListener("mouseup", ZG.handleEnd)
          })), zG(JG(ZG), "handleKeyDown", (function(GG) {
            GG.preventDefault();
            var bG, wG = GG.keyCode,
              SG = ZG.props,
              LG = SG.value,
              yG = SG.min,
              kG = SG.max,
              UG = SG.step,
              YG = SG.onChange;
            switch (wG) {
              case 38:
              case 39:
                bG = LG + UG > kG ? kG : LG + UG, YG && YG(bG, GG);
                break;
              case 37:
              case 40:
                bG = LG - UG < yG ? yG : LG - UG, YG && YG(bG, GG)
            }
          })), zG(JG(ZG), "getPositionFromValue", (function(GG) {
            var bG = ZG.state.limit,
              wG = ZG.props,
              SG = wG.min,
              LG = (GG - SG) / (wG.max - SG);
            return Math.round(LG * bG)
          })), zG(JG(ZG), "getValueFromPosition", (function(GG) {
            var bG = ZG.state.limit,
              wG = ZG.props,
              SG = wG.orientation,
              LG = wG.min,
              yG = wG.max,
              kG = wG.step,
              YG = (0, UG.clamp)(GG, 0, bG) / (bG || 1),
              VG = kG * Math.round(YG * (yG - LG) / kG),
              pG = "horizontal" === SG ? VG + LG : yG - VG;
            return (0, UG.clamp)(pG, LG, yG)
          })), zG(JG(ZG), "position", (function(GG) {
            var bG = ZG.state.grab,
              wG = ZG.props,
              SG = wG.orientation,
              LG = wG.reverse,
              yG = ZG.slider,
              kG = EG.orientation[SG].coordinate,
              YG = LG ? EG.orientation[SG].reverseDirection : EG.orientation[SG].direction,
              VG = "client".concat((0, UG.capitalize)(kG)),
              pG = GG.touches ? GG.touches[0][VG] : GG[VG],
              fG = yG.getBoundingClientRect()[YG],
              QG = LG ? fG - pG - bG : pG - fG - bG;
            return ZG.getValueFromPosition(QG)
          })), zG(JG(ZG), "coordinates", (function(GG) {
            var bG = ZG.state,
              wG = bG.limit,
              SG = bG.grab,
              LG = ZG.props.orientation,
              yG = ZG.getValueFromPosition(GG),
              kG = ZG.getPositionFromValue(yG),
              UG = "horizontal" === LG ? kG + SG : kG;
            return {
              fill: "horizontal" === LG ? UG : wG - UG,
              handle: UG,
              label: UG
            }
          })), zG(JG(ZG), "renderLabels", (function(GG) {
            return (0, YG.jsx)("ul", {
              ref: function(GG) {
                ZG.labels = GG
              },
              className: (0, SG.default)("rangeslider__labels"),
              children: GG
            })
          })), ZG.state = {
            active: !1,
            limit: 0,
            grab: 0
          }, ZG
        }
        return bG = yG, (ZG = [{
          key: "componentDidMount",
          value: function() {
            this.handleUpdate(), new kG.default(this.handleUpdate).observe(this.slider)
          }
        }, {
          key: "render",
          value: function() {
            var GG = this,
              bG = this.props,
              ZG = bG.value,
              wG = bG.orientation,
              LG = bG.className,
              yG = bG.tooltip,
              kG = bG.reverse,
              UG = bG.labels,
              VG = bG.min,
              pG = bG.max,
              QG = bG.handleLabel,
              KG = this.state.active,
              hG = EG.orientation[wG].dimension,
              dG = kG ? EG.orientation[wG].reverseDirection : EG.orientation[wG].direction,
              JG = this.getPositionFromValue(ZG),
              rG = this.coordinates(JG),
              oG = zG({}, hG, "".concat(rG.fill, "px")),
              XG = zG({}, dG, "".concat(rG.handle, "px")),
              uG = yG && KG,
              iG = [],
              CG = Object.keys(UG);
            if (CG.length > 0) {
              var WG, mG = fG(CG = CG.sort((function(GG, bG) {
                return kG ? GG - bG : bG - GG
              })));
              try {
                for (mG.s(); !(WG = mG.n()).done;) {
                  var IG = WG.value,
                    FG = this.getPositionFromValue(IG),
                    vG = this.coordinates(FG),
                    aG = zG({}, dG, "".concat(vG.label, "px"));
                  iG.push((0, YG.jsx)("li", {
                    className: (0, SG.default)("rangeslider__label-item"),
                    "data-value": IG,
                    onMouseDown: this.handleDrag,
                    onTouchStart: this.handleStart,
                    onTouchEnd: this.handleEnd,
                    style: aG,
                    children: this.props.labels[IG]
                  }, IG))
                }
              } catch (cG) {
                mG.e(cG)
              } finally {
                mG.f()
              }
            }
            return (0, YG.jsxs)("div", {
              ref: function(bG) {
                GG.slider = bG
              },
              className: (0, SG.default)("rangeslider", "rangeslider-".concat(wG), {
                "rangeslider-reverse": kG
              }, LG),
              onMouseDown: this.handleDrag,
              onMouseUp: this.handleEnd,
              onTouchStart: this.handleStart,
              onTouchEnd: this.handleEnd,
              "aria-valuemin": VG,
              "aria-valuemax": pG,
              "aria-valuenow": ZG,
              "aria-orientation": wG,
              children: [(0, YG.jsx)("div", {
                className: "rangeslider__fill",
                style: oG
              }), (0, YG.jsxs)("div", {
                ref: function(bG) {
                  GG.handle = bG
                },
                className: "rangeslider__handle",
                onMouseDown: this.handleStart,
                onTouchMove: this.handleDrag,
                onTouchEnd: this.handleEnd,
                onKeyDown: this.handleKeyDown,
                style: XG,
                tabIndex: 0,
                children: [uG && (0, YG.jsx)("div", {
                  ref: function(bG) {
                    GG.tooltip = bG
                  },
                  className: "rangeslider__handle-tooltip",
                  children: (0, YG.jsx)("span", {
                    children: this.handleFormat(ZG)
                  })
                }), (0, YG.jsx)("div", {
                  className: "rangeslider__handle-label",
                  children: QG
                })]
              }), UG && this.renderLabels(iG)]
            })
          }
        }]) && KG(bG.prototype, ZG), wG && KG(bG, wG), Object.defineProperty(bG, "prototype", {
          writable: !1
        }), yG
      }(LG.Component);
    zG(oG, "propTypes", {
      min: yG.default.number,
      max: yG.default.number,
      step: yG.default.number,
      value: yG.default.number,
      orientation: yG.default.string,
      tooltip: yG.default.bool,
      reverse: yG.default.bool,
      labels: yG.default.object,
      handleLabel: yG.default.string,
      format: yG.default.func,
      onChangeStart: yG.default.func,
      onChange: yG.default.func,
      onChangeComplete: yG.default.func
    }), zG(oG, "defaultProps", {
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
    var XG = oG;
    bG.default = XG
  },
  5021: (GG, bG, ZG) => {
    var wG;
    bG.e = void 0;
    var SG = ((wG = ZG(5024)) && wG.__esModule ? wG : {
      default: wG
    }).default;
    bG.e = SG
  },
  5032: (GG, bG) => {
    Object.defineProperty(bG, "__esModule", {
      value: !0
    }), bG.capitalize = function(GG) {
      return GG.charAt(0).toUpperCase() + GG.substr(1)
    }, bG.clamp = function(GG, bG, ZG) {
      return Math.min(Math.max(GG, bG), ZG)
    }
  },
  4993: (GG, bG, ZG) => {
    var wG = ZG(4997);

    function SG() {}

    function LG() {}
    LG.resetWarningCache = SG, GG.exports = function() {
      function GG(GG, bG, ZG, SG, LG, yG) {
        if (yG !== wG) {
          var kG = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw kG.name = "Invariant Violation", kG
        }
      }

      function bG() {
        return GG
      }
      GG.isRequired = GG;
      var ZG = {
        array: GG,
        bigint: GG,
        bool: GG,
        func: GG,
        number: GG,
        object: GG,
        string: GG,
        symbol: GG,
        any: GG,
        arrayOf: bG,
        element: GG,
        elementType: GG,
        instanceOf: bG,
        node: GG,
        objectOf: bG,
        oneOf: bG,
        oneOfType: bG,
        shape: bG,
        exact: bG,
        checkPropTypes: LG,
        resetWarningCache: SG
      };
      return ZG.PropTypes = ZG, ZG
    }
  },
  4985: (GG, bG, ZG) => {
    GG.exports = ZG(4993)()
  },
  4997: GG => {
    GG.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  5030: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      default: () => iG
    });
    var wG = function() {
        if ("undefined" !== typeof Map) return Map;

        function GG(GG, bG) {
          var ZG = -1;
          return GG.some((function(GG, wG) {
            return GG[0] === bG && (ZG = wG, !0)
          })), ZG
        }
        return function() {
          function bG() {
            this.__entries__ = []
          }
          return Object.defineProperty(bG.prototype, "size", {
            get: function() {
              return this.__entries__.length
            },
            enumerable: !0,
            configurable: !0
          }), bG.prototype.get = function(bG) {
            var ZG = GG(this.__entries__, bG),
              wG = this.__entries__[ZG];
            return wG && wG[1]
          }, bG.prototype.set = function(bG, ZG) {
            var wG = GG(this.__entries__, bG);
            ~wG ? this.__entries__[wG][1] = ZG : this.__entries__.push([bG, ZG])
          }, bG.prototype.delete = function(bG) {
            var ZG = this.__entries__,
              wG = GG(ZG, bG);
            ~wG && ZG.splice(wG, 1)
          }, bG.prototype.has = function(bG) {
            return !!~GG(this.__entries__, bG)
          }, bG.prototype.clear = function() {
            this.__entries__.splice(0)
          }, bG.prototype.forEach = function(GG, bG) {
            void 0 === bG && (bG = null);
            for (var ZG = 0, wG = this.__entries__; ZG < wG.length; ZG++) {
              var SG = wG[ZG];
              GG.call(bG, SG[1], SG[0])
            }
          }, bG
        }()
      }(),
      SG = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document,
      LG = "undefined" !== typeof ZG.g && ZG.g.Math === Math ? ZG.g : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")(),
      yG = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(LG) : function(GG) {
        return setTimeout((function() {
          return GG(Date.now())
        }), 1e3 / 60)
      };
    var kG = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
      UG = "undefined" !== typeof MutationObserver,
      YG = function() {
        function GG() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(GG, bG) {
            var ZG = !1,
              wG = !1,
              SG = 0;

            function LG() {
              ZG && (ZG = !1, GG()), wG && UG()
            }

            function kG() {
              yG(LG)
            }

            function UG() {
              var GG = Date.now();
              if (ZG) {
                if (GG - SG < 2) return;
                wG = !0
              } else ZG = !0, wG = !1, setTimeout(kG, bG);
              SG = GG
            }
            return UG
          }(this.refresh.bind(this), 20)
        }
        return GG.prototype.addObserver = function(GG) {
          ~this.observers_.indexOf(GG) || this.observers_.push(GG), this.connected_ || this.connect_()
        }, GG.prototype.removeObserver = function(GG) {
          var bG = this.observers_,
            ZG = bG.indexOf(GG);
          ~ZG && bG.splice(ZG, 1), !bG.length && this.connected_ && this.disconnect_()
        }, GG.prototype.refresh = function() {
          this.updateObservers_() && this.refresh()
        }, GG.prototype.updateObservers_ = function() {
          var GG = this.observers_.filter((function(GG) {
            return GG.gatherActive(), GG.hasActive()
          }));
          return GG.forEach((function(GG) {
            return GG.broadcastActive()
          })), GG.length > 0
        }, GG.prototype.connect_ = function() {
          SG && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), UG ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
          })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, GG.prototype.disconnect_ = function() {
          SG && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, GG.prototype.onTransitionEnd_ = function(GG) {
          var bG = GG.propertyName,
            ZG = void 0 === bG ? "" : bG;
          kG.some((function(GG) {
            return !!~ZG.indexOf(GG)
          })) && this.refresh()
        }, GG.getInstance = function() {
          return this.instance_ || (this.instance_ = new GG), this.instance_
        }, GG.instance_ = null, GG
      }(),
      VG = function(GG, bG) {
        for (var ZG = 0, wG = Object.keys(bG); ZG < wG.length; ZG++) {
          var SG = wG[ZG];
          Object.defineProperty(GG, SG, {
            value: bG[SG],
            enumerable: !1,
            writable: !1,
            configurable: !0
          })
        }
        return GG
      },
      pG = function(GG) {
        return GG && GG.ownerDocument && GG.ownerDocument.defaultView || LG
      },
      fG = rG(0, 0, 0, 0);

    function QG(GG) {
      return parseFloat(GG) || 0
    }

    function KG(GG) {
      for (var bG = [], ZG = 1; ZG < arguments.length; ZG++) bG[ZG - 1] = arguments[ZG];
      return bG.reduce((function(bG, ZG) {
        return bG + QG(GG["border-" + ZG + "-width"])
      }), 0)
    }

    function hG(GG) {
      var bG = GG.clientWidth,
        ZG = GG.clientHeight;
      if (!bG && !ZG) return fG;
      var wG = pG(GG).getComputedStyle(GG),
        SG = function(GG) {
          for (var bG = {}, ZG = 0, wG = ["top", "right", "bottom", "left"]; ZG < wG.length; ZG++) {
            var SG = wG[ZG],
              LG = GG["padding-" + SG];
            bG[SG] = QG(LG)
          }
          return bG
        }(wG),
        LG = SG.left + SG.right,
        yG = SG.top + SG.bottom,
        kG = QG(wG.width),
        UG = QG(wG.height);
      if ("border-box" === wG.boxSizing && (Math.round(kG + LG) !== bG && (kG -= KG(wG, "left", "right") + LG), Math.round(UG + yG) !== ZG && (UG -= KG(wG, "top", "bottom") + yG)), ! function(GG) {
          return GG === pG(GG).document.documentElement
        }(GG)) {
        var YG = Math.round(kG + LG) - bG,
          VG = Math.round(UG + yG) - ZG;
        1 !== Math.abs(YG) && (kG -= YG), 1 !== Math.abs(VG) && (UG -= VG)
      }
      return rG(SG.left, SG.top, kG, UG)
    }
    var dG = "undefined" !== typeof SVGGraphicsElement ? function(GG) {
      return GG instanceof pG(GG).SVGGraphicsElement
    } : function(GG) {
      return GG instanceof pG(GG).SVGElement && "function" === typeof GG.getBBox
    };

    function JG(GG) {
      return SG ? dG(GG) ? function(GG) {
        var bG = GG.getBBox();
        return rG(0, 0, bG.width, bG.height)
      }(GG) : hG(GG) : fG
    }

    function rG(GG, bG, ZG, wG) {
      return {
        x: GG,
        y: bG,
        width: ZG,
        height: wG
      }
    }
    var zG = function() {
        function GG(GG) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = rG(0, 0, 0, 0), this.target = GG
        }
        return GG.prototype.isActive = function() {
          var GG = JG(this.target);
          return this.contentRect_ = GG, GG.width !== this.broadcastWidth || GG.height !== this.broadcastHeight
        }, GG.prototype.broadcastRect = function() {
          var GG = this.contentRect_;
          return this.broadcastWidth = GG.width, this.broadcastHeight = GG.height, GG
        }, GG
      }(),
      EG = function(GG, bG) {
        var ZG = function(GG) {
          var bG = GG.x,
            ZG = GG.y,
            wG = GG.width,
            SG = GG.height,
            LG = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
            yG = Object.create(LG.prototype);
          return VG(yG, {
            x: bG,
            y: ZG,
            width: wG,
            height: SG,
            top: ZG,
            right: bG + wG,
            bottom: SG + ZG,
            left: bG
          }), yG
        }(bG);
        VG(this, {
          target: GG,
          contentRect: ZG
        })
      },
      oG = function() {
        function GG(GG, bG, ZG) {
          if (this.activeObservations_ = [], this.observations_ = new wG, "function" !== typeof GG) throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = GG, this.controller_ = bG, this.callbackCtx_ = ZG
        }
        return GG.prototype.observe = function(GG) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(GG instanceof pG(GG).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var bG = this.observations_;
            bG.has(GG) || (bG.set(GG, new zG(GG)), this.controller_.addObserver(this), this.controller_.refresh())
          }
        }, GG.prototype.unobserve = function(GG) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(GG instanceof pG(GG).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var bG = this.observations_;
            bG.has(GG) && (bG.delete(GG), bG.size || this.controller_.removeObserver(this))
          }
        }, GG.prototype.disconnect = function() {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, GG.prototype.gatherActive = function() {
          var GG = this;
          this.clearActive(), this.observations_.forEach((function(bG) {
            bG.isActive() && GG.activeObservations_.push(bG)
          }))
        }, GG.prototype.broadcastActive = function() {
          if (this.hasActive()) {
            var GG = this.callbackCtx_,
              bG = this.activeObservations_.map((function(GG) {
                return new EG(GG.target, GG.broadcastRect())
              }));
            this.callback_.call(GG, bG, GG), this.clearActive()
          }
        }, GG.prototype.clearActive = function() {
          this.activeObservations_.splice(0)
        }, GG.prototype.hasActive = function() {
          return this.activeObservations_.length > 0
        }, GG
      }(),
      XG = "undefined" !== typeof WeakMap ? new WeakMap : new wG,
      uG = function GG(bG) {
        if (!(this instanceof GG)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var ZG = YG.getInstance(),
          wG = new oG(bG, ZG, this);
        XG.set(this, wG)
      };
    ["observe", "unobserve", "disconnect"].forEach((function(GG) {
      uG.prototype[GG] = function() {
        var bG;
        return (bG = XG.get(this))[GG].apply(bG, arguments)
      }
    }));
    const iG = "undefined" !== typeof LG.ResizeObserver ? LG.ResizeObserver : uG
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);