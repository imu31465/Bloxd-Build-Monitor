export const id = 108;
export const ids = [108];
export const modules = {
  5034: (DD, zD, wD) => {
    function pD(DD) {
      return pD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, pD(DD)
    }
    Object.defineProperty(zD, "__esModule", {
      value: !0
    }), zD.default = void 0;
    var sD = AD(wD(1044)),
      KD = function(DD, zD) {
        if (!zD && DD && DD.__esModule) return DD;
        if (null === DD || "object" !== pD(DD) && "function" !== typeof DD) return {
          default: DD
        };
        var wD = RD(zD);
        if (wD && wD.has(DD)) return wD.get(DD);
        var sD = {},
          KD = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var rD in DD)
          if ("default" !== rD && Object.prototype.hasOwnProperty.call(DD, rD)) {
            var LD = KD ? Object.getOwnPropertyDescriptor(DD, rD) : null;
            LD && (LD.get || LD.set) ? Object.defineProperty(sD, rD, LD) : sD[rD] = DD[rD]
          } sD.default = DD, wD && wD.set(DD, sD);
        return sD
      }(wD(58)),
      rD = AD(wD(4981)),
      LD = AD(wD(5041)),
      cD = wD(5046),
      gD = wD(1096);

    function RD(DD) {
      if ("function" !== typeof WeakMap) return null;
      var zD = new WeakMap,
        wD = new WeakMap;
      return (RD = function(DD) {
        return DD ? wD : zD
      })(DD)
    }

    function AD(DD) {
      return DD && DD.__esModule ? DD : {
        default: DD
      }
    }

    function UD(DD, zD) {
      var wD = "undefined" !== typeof Symbol && DD[Symbol.iterator] || DD["@@iterator"];
      if (!wD) {
        if (Array.isArray(DD) || (wD = function(DD, zD) {
            if (!DD) return;
            if ("string" === typeof DD) return fD(DD, zD);
            var wD = Object.prototype.toString.call(DD).slice(8, -1);
            "Object" === wD && DD.constructor && (wD = DD.constructor.name);
            if ("Map" === wD || "Set" === wD) return Array.from(DD);
            if ("Arguments" === wD || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(wD)) return fD(DD, zD)
          }(DD)) || zD && DD && "number" === typeof DD.length) {
          wD && (DD = wD);
          var pD = 0,
            sD = function() {};
          return {
            s: sD,
            n: function() {
              return pD >= DD.length ? {
                done: !0
              } : {
                done: !1,
                value: DD[pD++]
              }
            },
            e: function(DD) {
              throw DD
            },
            f: sD
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var KD, rD = !0,
        LD = !1;
      return {
        s: function() {
          wD = wD.call(DD)
        },
        n: function() {
          var DD = wD.next();
          return rD = DD.done, DD
        },
        e: function(DD) {
          LD = !0, KD = DD
        },
        f: function() {
          try {
            rD || null == wD.return || wD.return()
          } finally {
            if (LD) throw KD
          }
        }
      }
    }

    function fD(DD, zD) {
      (null == zD || zD > DD.length) && (zD = DD.length);
      for (var wD = 0, pD = new Array(zD); wD < zD; wD++) pD[wD] = DD[wD];
      return pD
    }

    function ID(DD, zD) {
      for (var wD = 0; wD < zD.length; wD++) {
        var pD = zD[wD];
        pD.enumerable = pD.enumerable || !1, pD.configurable = !0, "value" in pD && (pD.writable = !0), Object.defineProperty(DD, pD.key, pD)
      }
    }

    function BD(DD, zD) {
      return BD = Object.setPrototypeOf || function(DD, zD) {
        return DD.__proto__ = zD, DD
      }, BD(DD, zD)
    }

    function GD(DD) {
      var zD = function() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (DD) {
          return !1
        }
      }();
      return function() {
        var wD, sD = nD(DD);
        if (zD) {
          var KD = nD(this).constructor;
          wD = Reflect.construct(sD, arguments, KD)
        } else wD = sD.apply(this, arguments);
        return function(DD, zD) {
          if (zD && ("object" === pD(zD) || "function" === typeof zD)) return zD;
          if (void 0 !== zD) throw new TypeError("Derived constructors may only return object or undefined");
          return hD(DD)
        }(this, wD)
      }
    }

    function hD(DD) {
      if (void 0 === DD) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return DD
    }

    function nD(DD) {
      return nD = Object.setPrototypeOf ? Object.getPrototypeOf : function(DD) {
        return DD.__proto__ || Object.getPrototypeOf(DD)
      }, nD(DD)
    }

    function MD(DD, zD, wD) {
      return zD in DD ? Object.defineProperty(DD, zD, {
        value: wD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[zD] = wD, DD
    }
    var OD = {
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
      JD = function(DD) {
        ! function(DD, zD) {
          if ("function" !== typeof zD && null !== zD) throw new TypeError("Super expression must either be null or a function");
          Object.defineProperty(DD, "prototype", {
            value: Object.create(zD && zD.prototype, {
              constructor: {
                value: DD,
                writable: !0,
                configurable: !0
              }
            }),
            writable: !1
          }), zD && BD(DD, zD)
        }(rD, DD);
        var zD, wD, pD, KD = GD(rD);

        function rD(DD, zD) {
          var wD;
          return function(DD, zD) {
            if (!(DD instanceof zD)) throw new TypeError("Cannot call a class as a function")
          }(this, rD), MD(hD(wD = KD.call(this, DD, zD)), "handleFormat", (function(DD) {
            var zD = wD.props.format;
            return zD ? zD(DD) : DD
          })), MD(hD(wD), "handleUpdate", (function() {
            if (wD.slider) {
              var DD = wD.props.orientation,
                zD = (0, cD.capitalize)(OD.orientation[DD].dimension),
                pD = wD.slider["offset".concat(zD)],
                sD = wD.handle["offset".concat(zD)];
              wD.setState({
                limit: pD - sD,
                grab: sD / 2
              })
            }
          })), MD(hD(wD), "handleStart", (function(DD) {
            var zD = wD.props.onChangeStart;
            document.addEventListener("mousemove", wD.handleDrag), document.addEventListener("mouseup", wD.handleEnd), wD.setState({
              active: !0
            }, (function() {
              zD && zD(DD)
            }))
          })), MD(hD(wD), "handleDrag", (function(DD) {
            DD.stopPropagation();
            var zD = wD.props.onChange,
              pD = DD.target,
              sD = pD.className,
              KD = pD.classList,
              rD = pD.dataset;
            if (zD && "rangeslider__labels" !== sD) {
              var LD = wD.position(DD);
              KD && KD.contains("rangeslider__label-item") && rD.value && (LD = parseFloat(rD.value)), zD && zD(LD, DD)
            }
          })), MD(hD(wD), "handleEnd", (function(DD) {
            var zD = wD.props.onChangeComplete;
            wD.setState({
              active: !1
            }, (function() {
              zD && zD(DD)
            })), document.removeEventListener("mousemove", wD.handleDrag), document.removeEventListener("mouseup", wD.handleEnd)
          })), MD(hD(wD), "handleKeyDown", (function(DD) {
            DD.preventDefault();
            var zD, pD = DD.keyCode,
              sD = wD.props,
              KD = sD.value,
              rD = sD.min,
              LD = sD.max,
              cD = sD.step,
              gD = sD.onChange;
            switch (pD) {
              case 38:
              case 39:
                zD = KD + cD > LD ? LD : KD + cD, gD && gD(zD, DD);
                break;
              case 37:
              case 40:
                zD = KD - cD < rD ? rD : KD - cD, gD && gD(zD, DD)
            }
          })), MD(hD(wD), "getPositionFromValue", (function(DD) {
            var zD = wD.state.limit,
              pD = wD.props,
              sD = pD.min,
              KD = (DD - sD) / (pD.max - sD);
            return Math.round(KD * zD)
          })), MD(hD(wD), "getValueFromPosition", (function(DD) {
            var zD = wD.state.limit,
              pD = wD.props,
              sD = pD.orientation,
              KD = pD.min,
              rD = pD.max,
              LD = pD.step,
              gD = (0, cD.clamp)(DD, 0, zD) / (zD || 1),
              RD = LD * Math.round(gD * (rD - KD) / LD),
              AD = "horizontal" === sD ? RD + KD : rD - RD;
            return (0, cD.clamp)(AD, KD, rD)
          })), MD(hD(wD), "position", (function(DD) {
            var zD = wD.state.grab,
              pD = wD.props,
              sD = pD.orientation,
              KD = pD.reverse,
              rD = wD.slider,
              LD = OD.orientation[sD].coordinate,
              gD = KD ? OD.orientation[sD].reverseDirection : OD.orientation[sD].direction,
              RD = "client".concat((0, cD.capitalize)(LD)),
              AD = DD.touches ? DD.touches[0][RD] : DD[RD],
              UD = rD.getBoundingClientRect()[gD],
              fD = KD ? UD - AD - zD : AD - UD - zD;
            return wD.getValueFromPosition(fD)
          })), MD(hD(wD), "coordinates", (function(DD) {
            var zD = wD.state,
              pD = zD.limit,
              sD = zD.grab,
              KD = wD.props.orientation,
              rD = wD.getValueFromPosition(DD),
              LD = wD.getPositionFromValue(rD),
              cD = "horizontal" === KD ? LD + sD : LD;
            return {
              fill: "horizontal" === KD ? cD : pD - cD,
              handle: cD,
              label: cD
            }
          })), MD(hD(wD), "renderLabels", (function(DD) {
            return (0, gD.jsx)("ul", {
              ref: function(DD) {
                wD.labels = DD
              },
              className: (0, sD.default)("rangeslider__labels"),
              children: DD
            })
          })), wD.state = {
            active: !1,
            limit: 0,
            grab: 0
          }, wD
        }
        return zD = rD, (wD = [{
          key: "componentDidMount",
          value: function() {
            this.handleUpdate(), new LD.default(this.handleUpdate).observe(this.slider)
          }
        }, {
          key: "render",
          value: function() {
            var DD = this,
              zD = this.props,
              wD = zD.value,
              pD = zD.orientation,
              KD = zD.className,
              rD = zD.tooltip,
              LD = zD.reverse,
              cD = zD.labels,
              RD = zD.min,
              AD = zD.max,
              fD = zD.handleLabel,
              ID = this.state.active,
              BD = OD.orientation[pD].dimension,
              GD = LD ? OD.orientation[pD].reverseDirection : OD.orientation[pD].direction,
              hD = this.getPositionFromValue(wD),
              nD = this.coordinates(hD),
              JD = MD({}, BD, "".concat(nD.fill, "px")),
              ED = MD({}, GD, "".concat(nD.handle, "px")),
              QD = rD && ID,
              XD = [],
              VD = Object.keys(cD);
            if (VD.length > 0) {
              var PD, CD = UD(VD = VD.sort((function(DD, zD) {
                return LD ? DD - zD : zD - DD
              })));
              try {
                for (CD.s(); !(PD = CD.n()).done;) {
                  var xD = PD.value,
                    TD = this.getPositionFromValue(xD),
                    bD = this.coordinates(TD),
                    jD = MD({}, GD, "".concat(bD.label, "px"));
                  XD.push((0, gD.jsx)("li", {
                    className: (0, sD.default)("rangeslider__label-item"),
                    "data-value": xD,
                    onMouseDown: this.handleDrag,
                    onTouchStart: this.handleStart,
                    onTouchEnd: this.handleEnd,
                    style: jD,
                    children: this.props.labels[xD]
                  }, xD))
                }
              } catch (dD) {
                CD.e(dD)
              } finally {
                CD.f()
              }
            }
            return (0, gD.jsxs)("div", {
              ref: function(zD) {
                DD.slider = zD
              },
              className: (0, sD.default)("rangeslider", "rangeslider-".concat(pD), {
                "rangeslider-reverse": LD
              }, KD),
              onMouseDown: this.handleDrag,
              onMouseUp: this.handleEnd,
              onTouchStart: this.handleStart,
              onTouchEnd: this.handleEnd,
              "aria-valuemin": RD,
              "aria-valuemax": AD,
              "aria-valuenow": wD,
              "aria-orientation": pD,
              children: [(0, gD.jsx)("div", {
                className: "rangeslider__fill",
                style: JD
              }), (0, gD.jsxs)("div", {
                ref: function(zD) {
                  DD.handle = zD
                },
                className: "rangeslider__handle",
                onMouseDown: this.handleStart,
                onTouchMove: this.handleDrag,
                onTouchEnd: this.handleEnd,
                onKeyDown: this.handleKeyDown,
                style: ED,
                tabIndex: 0,
                children: [QD && (0, gD.jsx)("div", {
                  ref: function(zD) {
                    DD.tooltip = zD
                  },
                  className: "rangeslider__handle-tooltip",
                  children: (0, gD.jsx)("span", {
                    children: this.handleFormat(wD)
                  })
                }), (0, gD.jsx)("div", {
                  className: "rangeslider__handle-label",
                  children: fD
                })]
              }), cD && this.renderLabels(XD)]
            })
          }
        }]) && ID(zD.prototype, wD), pD && ID(zD, pD), Object.defineProperty(zD, "prototype", {
          writable: !1
        }), rD
      }(KD.Component);
    MD(JD, "propTypes", {
      min: rD.default.number,
      max: rD.default.number,
      step: rD.default.number,
      value: rD.default.number,
      orientation: rD.default.string,
      tooltip: rD.default.bool,
      reverse: rD.default.bool,
      labels: rD.default.object,
      handleLabel: rD.default.string,
      format: rD.default.func,
      onChangeStart: rD.default.func,
      onChange: rD.default.func,
      onChangeComplete: rD.default.func
    }), MD(JD, "defaultProps", {
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
    var ED = JD;
    zD.default = ED
  },
  5026: (DD, zD, wD) => {
    var pD;
    zD.c = void 0;
    var sD = ((pD = wD(5034)) && pD.__esModule ? pD : {
      default: pD
    }).default;
    zD.c = sD
  },
  5046: (DD, zD) => {
    Object.defineProperty(zD, "__esModule", {
      value: !0
    }), zD.capitalize = function(DD) {
      return DD.charAt(0).toUpperCase() + DD.substr(1)
    }, zD.clamp = function(DD, zD, wD) {
      return Math.min(Math.max(DD, zD), wD)
    }
  },
  4988: (DD, zD, wD) => {
    var pD = wD(4997);

    function sD() {}

    function KD() {}
    KD.resetWarningCache = sD, DD.exports = function() {
      function DD(DD, zD, wD, sD, KD, rD) {
        if (rD !== pD) {
          var LD = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw LD.name = "Invariant Violation", LD
        }
      }

      function zD() {
        return DD
      }
      DD.isRequired = DD;
      var wD = {
        array: DD,
        bigint: DD,
        bool: DD,
        func: DD,
        number: DD,
        object: DD,
        string: DD,
        symbol: DD,
        any: DD,
        arrayOf: zD,
        element: DD,
        elementType: DD,
        instanceOf: zD,
        node: DD,
        objectOf: zD,
        oneOf: zD,
        oneOfType: zD,
        shape: zD,
        exact: zD,
        checkPropTypes: KD,
        resetWarningCache: sD
      };
      return wD.PropTypes = wD, wD
    }
  },
  4981: (DD, zD, wD) => {
    DD.exports = wD(4988)()
  },
  4997: DD => {
    DD.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  5041: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      default: () => XD
    });
    var pD = function() {
        if ("undefined" !== typeof Map) return Map;

        function DD(DD, zD) {
          var wD = -1;
          return DD.some((function(DD, pD) {
            return DD[0] === zD && (wD = pD, !0)
          })), wD
        }
        return function() {
          function zD() {
            this.__entries__ = []
          }
          return Object.defineProperty(zD.prototype, "size", {
            get: function() {
              return this.__entries__.length
            },
            enumerable: !0,
            configurable: !0
          }), zD.prototype.get = function(zD) {
            var wD = DD(this.__entries__, zD),
              pD = this.__entries__[wD];
            return pD && pD[1]
          }, zD.prototype.set = function(zD, wD) {
            var pD = DD(this.__entries__, zD);
            ~pD ? this.__entries__[pD][1] = wD : this.__entries__.push([zD, wD])
          }, zD.prototype.delete = function(zD) {
            var wD = this.__entries__,
              pD = DD(wD, zD);
            ~pD && wD.splice(pD, 1)
          }, zD.prototype.has = function(zD) {
            return !!~DD(this.__entries__, zD)
          }, zD.prototype.clear = function() {
            this.__entries__.splice(0)
          }, zD.prototype.forEach = function(DD, zD) {
            void 0 === zD && (zD = null);
            for (var wD = 0, pD = this.__entries__; wD < pD.length; wD++) {
              var sD = pD[wD];
              DD.call(zD, sD[1], sD[0])
            }
          }, zD
        }()
      }(),
      sD = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document,
      KD = "undefined" !== typeof wD.g && wD.g.Math === Math ? wD.g : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")(),
      rD = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(KD) : function(DD) {
        return setTimeout((function() {
          return DD(Date.now())
        }), 1e3 / 60)
      };
    var LD = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
      cD = "undefined" !== typeof MutationObserver,
      gD = function() {
        function DD() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(DD, zD) {
            var wD = !1,
              pD = !1,
              sD = 0;

            function KD() {
              wD && (wD = !1, DD()), pD && cD()
            }

            function LD() {
              rD(KD)
            }

            function cD() {
              var DD = Date.now();
              if (wD) {
                if (DD - sD < 2) return;
                pD = !0
              } else wD = !0, pD = !1, setTimeout(LD, zD);
              sD = DD
            }
            return cD
          }(this.refresh.bind(this), 20)
        }
        return DD.prototype.addObserver = function(DD) {
          ~this.observers_.indexOf(DD) || this.observers_.push(DD), this.connected_ || this.connect_()
        }, DD.prototype.removeObserver = function(DD) {
          var zD = this.observers_,
            wD = zD.indexOf(DD);
          ~wD && zD.splice(wD, 1), !zD.length && this.connected_ && this.disconnect_()
        }, DD.prototype.refresh = function() {
          this.updateObservers_() && this.refresh()
        }, DD.prototype.updateObservers_ = function() {
          var DD = this.observers_.filter((function(DD) {
            return DD.gatherActive(), DD.hasActive()
          }));
          return DD.forEach((function(DD) {
            return DD.broadcastActive()
          })), DD.length > 0
        }, DD.prototype.connect_ = function() {
          sD && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), cD ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
          })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, DD.prototype.disconnect_ = function() {
          sD && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, DD.prototype.onTransitionEnd_ = function(DD) {
          var zD = DD.propertyName,
            wD = void 0 === zD ? "" : zD;
          LD.some((function(DD) {
            return !!~wD.indexOf(DD)
          })) && this.refresh()
        }, DD.getInstance = function() {
          return this.instance_ || (this.instance_ = new DD), this.instance_
        }, DD.instance_ = null, DD
      }(),
      RD = function(DD, zD) {
        for (var wD = 0, pD = Object.keys(zD); wD < pD.length; wD++) {
          var sD = pD[wD];
          Object.defineProperty(DD, sD, {
            value: zD[sD],
            enumerable: !1,
            writable: !1,
            configurable: !0
          })
        }
        return DD
      },
      AD = function(DD) {
        return DD && DD.ownerDocument && DD.ownerDocument.defaultView || KD
      },
      UD = nD(0, 0, 0, 0);

    function fD(DD) {
      return parseFloat(DD) || 0
    }

    function ID(DD) {
      for (var zD = [], wD = 1; wD < arguments.length; wD++) zD[wD - 1] = arguments[wD];
      return zD.reduce((function(zD, wD) {
        return zD + fD(DD["border-" + wD + "-width"])
      }), 0)
    }

    function BD(DD) {
      var zD = DD.clientWidth,
        wD = DD.clientHeight;
      if (!zD && !wD) return UD;
      var pD = AD(DD).getComputedStyle(DD),
        sD = function(DD) {
          for (var zD = {}, wD = 0, pD = ["top", "right", "bottom", "left"]; wD < pD.length; wD++) {
            var sD = pD[wD],
              KD = DD["padding-" + sD];
            zD[sD] = fD(KD)
          }
          return zD
        }(pD),
        KD = sD.left + sD.right,
        rD = sD.top + sD.bottom,
        LD = fD(pD.width),
        cD = fD(pD.height);
      if ("border-box" === pD.boxSizing && (Math.round(LD + KD) !== zD && (LD -= ID(pD, "left", "right") + KD), Math.round(cD + rD) !== wD && (cD -= ID(pD, "top", "bottom") + rD)), ! function(DD) {
          return DD === AD(DD).document.documentElement
        }(DD)) {
        var gD = Math.round(LD + KD) - zD,
          RD = Math.round(cD + rD) - wD;
        1 !== Math.abs(gD) && (LD -= gD), 1 !== Math.abs(RD) && (cD -= RD)
      }
      return nD(sD.left, sD.top, LD, cD)
    }
    var GD = "undefined" !== typeof SVGGraphicsElement ? function(DD) {
      return DD instanceof AD(DD).SVGGraphicsElement
    } : function(DD) {
      return DD instanceof AD(DD).SVGElement && "function" === typeof DD.getBBox
    };

    function hD(DD) {
      return sD ? GD(DD) ? function(DD) {
        var zD = DD.getBBox();
        return nD(0, 0, zD.width, zD.height)
      }(DD) : BD(DD) : UD
    }

    function nD(DD, zD, wD, pD) {
      return {
        x: DD,
        y: zD,
        width: wD,
        height: pD
      }
    }
    var MD = function() {
        function DD(DD) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = nD(0, 0, 0, 0), this.target = DD
        }
        return DD.prototype.isActive = function() {
          var DD = hD(this.target);
          return this.contentRect_ = DD, DD.width !== this.broadcastWidth || DD.height !== this.broadcastHeight
        }, DD.prototype.broadcastRect = function() {
          var DD = this.contentRect_;
          return this.broadcastWidth = DD.width, this.broadcastHeight = DD.height, DD
        }, DD
      }(),
      OD = function(DD, zD) {
        var wD = function(DD) {
          var zD = DD.x,
            wD = DD.y,
            pD = DD.width,
            sD = DD.height,
            KD = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
            rD = Object.create(KD.prototype);
          return RD(rD, {
            x: zD,
            y: wD,
            width: pD,
            height: sD,
            top: wD,
            right: zD + pD,
            bottom: sD + wD,
            left: zD
          }), rD
        }(zD);
        RD(this, {
          target: DD,
          contentRect: wD
        })
      },
      JD = function() {
        function DD(DD, zD, wD) {
          if (this.activeObservations_ = [], this.observations_ = new pD, "function" !== typeof DD) throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = DD, this.controller_ = zD, this.callbackCtx_ = wD
        }
        return DD.prototype.observe = function(DD) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(DD instanceof AD(DD).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var zD = this.observations_;
            zD.has(DD) || (zD.set(DD, new MD(DD)), this.controller_.addObserver(this), this.controller_.refresh())
          }
        }, DD.prototype.unobserve = function(DD) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(DD instanceof AD(DD).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var zD = this.observations_;
            zD.has(DD) && (zD.delete(DD), zD.size || this.controller_.removeObserver(this))
          }
        }, DD.prototype.disconnect = function() {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, DD.prototype.gatherActive = function() {
          var DD = this;
          this.clearActive(), this.observations_.forEach((function(zD) {
            zD.isActive() && DD.activeObservations_.push(zD)
          }))
        }, DD.prototype.broadcastActive = function() {
          if (this.hasActive()) {
            var DD = this.callbackCtx_,
              zD = this.activeObservations_.map((function(DD) {
                return new OD(DD.target, DD.broadcastRect())
              }));
            this.callback_.call(DD, zD, DD), this.clearActive()
          }
        }, DD.prototype.clearActive = function() {
          this.activeObservations_.splice(0)
        }, DD.prototype.hasActive = function() {
          return this.activeObservations_.length > 0
        }, DD
      }(),
      ED = "undefined" !== typeof WeakMap ? new WeakMap : new pD,
      QD = function DD(zD) {
        if (!(this instanceof DD)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var wD = gD.getInstance(),
          pD = new JD(zD, wD, this);
        ED.set(this, pD)
      };
    ["observe", "unobserve", "disconnect"].forEach((function(DD) {
      QD.prototype[DD] = function() {
        var zD;
        return (zD = ED.get(this))[DD].apply(zD, arguments)
      }
    }));
    const XD = "undefined" !== typeof KD.ResizeObserver ? KD.ResizeObserver : QD
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);