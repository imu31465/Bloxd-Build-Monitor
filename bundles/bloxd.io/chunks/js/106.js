export const id = 106;
export const ids = [106];
export const modules = {
  4781: (DD, CD, cD) => {
    function ID(DD) {
      return ID = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, ID(DD)
    }
    Object.defineProperty(CD, "__esModule", {
      value: !0
    }), CD.default = void 0;
    var pD = BD(cD(1049)),
      iD = function(DD, CD) {
        if (!CD && DD && DD.__esModule) return DD;
        if (null === DD || "object" !== ID(DD) && "function" !== typeof DD) return {
          default: DD
        };
        var cD = SD(CD);
        if (cD && cD.has(DD)) return cD.get(DD);
        var pD = {},
          iD = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var fD in DD)
          if ("default" !== fD && Object.prototype.hasOwnProperty.call(DD, fD)) {
            var bD = iD ? Object.getOwnPropertyDescriptor(DD, fD) : null;
            bD && (bD.get || bD.set) ? Object.defineProperty(pD, fD, bD) : pD[fD] = DD[fD]
          } pD.default = DD, cD && cD.set(DD, pD);
        return pD
      }(cD(53)),
      fD = BD(cD(4741)),
      bD = BD(cD(4785)),
      QD = cD(4794),
      wD = cD(1093);

    function SD(DD) {
      if ("function" !== typeof WeakMap) return null;
      var CD = new WeakMap,
        cD = new WeakMap;
      return (SD = function(DD) {
        return DD ? cD : CD
      })(DD)
    }

    function BD(DD) {
      return DD && DD.__esModule ? DD : {
        default: DD
      }
    }

    function yD(DD, CD) {
      var cD = "undefined" !== typeof Symbol && DD[Symbol.iterator] || DD["@@iterator"];
      if (!cD) {
        if (Array.isArray(DD) || (cD = function(DD, CD) {
            if (!DD) return;
            if ("string" === typeof DD) return MD(DD, CD);
            var cD = Object.prototype.toString.call(DD).slice(8, -1);
            "Object" === cD && DD.constructor && (cD = DD.constructor.name);
            if ("Map" === cD || "Set" === cD) return Array.from(DD);
            if ("Arguments" === cD || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cD)) return MD(DD, CD)
          }(DD)) || CD && DD && "number" === typeof DD.length) {
          cD && (DD = cD);
          var ID = 0,
            pD = function() {};
          return {
            s: pD,
            n: function() {
              return ID >= DD.length ? {
                done: !0
              } : {
                done: !1,
                value: DD[ID++]
              }
            },
            e: function(DD) {
              throw DD
            },
            f: pD
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var iD, fD = !0,
        bD = !1;
      return {
        s: function() {
          cD = cD.call(DD)
        },
        n: function() {
          var DD = cD.next();
          return fD = DD.done, DD
        },
        e: function(DD) {
          bD = !0, iD = DD
        },
        f: function() {
          try {
            fD || null == cD.return || cD.return()
          } finally {
            if (bD) throw iD
          }
        }
      }
    }

    function MD(DD, CD) {
      (null == CD || CD > DD.length) && (CD = DD.length);
      for (var cD = 0, ID = new Array(CD); cD < CD; cD++) ID[cD] = DD[cD];
      return ID
    }

    function tD(DD, CD) {
      for (var cD = 0; cD < CD.length; cD++) {
        var ID = CD[cD];
        ID.enumerable = ID.enumerable || !1, ID.configurable = !0, "value" in ID && (ID.writable = !0), Object.defineProperty(DD, ID.key, ID)
      }
    }

    function ZD(DD, CD) {
      return ZD = Object.setPrototypeOf || function(DD, CD) {
        return DD.__proto__ = CD, DD
      }, ZD(DD, CD)
    }

    function oD(DD) {
      var CD = function() {
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
        var cD, pD = ND(DD);
        if (CD) {
          var iD = ND(this).constructor;
          cD = Reflect.construct(pD, arguments, iD)
        } else cD = pD.apply(this, arguments);
        return function(DD, CD) {
          if (CD && ("object" === ID(CD) || "function" === typeof CD)) return CD;
          if (void 0 !== CD) throw new TypeError("Derived constructors may only return object or undefined");
          return vD(DD)
        }(this, cD)
      }
    }

    function vD(DD) {
      if (void 0 === DD) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return DD
    }

    function ND(DD) {
      return ND = Object.setPrototypeOf ? Object.getPrototypeOf : function(DD) {
        return DD.__proto__ || Object.getPrototypeOf(DD)
      }, ND(DD)
    }

    function gD(DD, CD, cD) {
      return CD in DD ? Object.defineProperty(DD, CD, {
        value: cD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[CD] = cD, DD
    }
    var XD = {
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
      mD = function(DD) {
        ! function(DD, CD) {
          if ("function" !== typeof CD && null !== CD) throw new TypeError("Super expression must either be null or a function");
          Object.defineProperty(DD, "prototype", {
            value: Object.create(CD && CD.prototype, {
              constructor: {
                value: DD,
                writable: !0,
                configurable: !0
              }
            }),
            writable: !1
          }), CD && ZD(DD, CD)
        }(fD, DD);
        var CD, cD, ID, iD = oD(fD);

        function fD(DD, CD) {
          var cD;
          return function(DD, CD) {
            if (!(DD instanceof CD)) throw new TypeError("Cannot call a class as a function")
          }(this, fD), gD(vD(cD = iD.call(this, DD, CD)), "handleFormat", (function(DD) {
            var CD = cD.props.format;
            return CD ? CD(DD) : DD
          })), gD(vD(cD), "handleUpdate", (function() {
            if (cD.slider) {
              var DD = cD.props.orientation,
                CD = (0, QD.capitalize)(XD.orientation[DD].dimension),
                ID = cD.slider["offset".concat(CD)],
                pD = cD.handle["offset".concat(CD)];
              cD.setState({
                limit: ID - pD,
                grab: pD / 2
              })
            }
          })), gD(vD(cD), "handleStart", (function(DD) {
            var CD = cD.props.onChangeStart;
            document.addEventListener("mousemove", cD.handleDrag), document.addEventListener("mouseup", cD.handleEnd), cD.setState({
              active: !0
            }, (function() {
              CD && CD(DD)
            }))
          })), gD(vD(cD), "handleDrag", (function(DD) {
            DD.stopPropagation();
            var CD = cD.props.onChange,
              ID = DD.target,
              pD = ID.className,
              iD = ID.classList,
              fD = ID.dataset;
            if (CD && "rangeslider__labels" !== pD) {
              var bD = cD.position(DD);
              iD && iD.contains("rangeslider__label-item") && fD.value && (bD = parseFloat(fD.value)), CD && CD(bD, DD)
            }
          })), gD(vD(cD), "handleEnd", (function(DD) {
            var CD = cD.props.onChangeComplete;
            cD.setState({
              active: !1
            }, (function() {
              CD && CD(DD)
            })), document.removeEventListener("mousemove", cD.handleDrag), document.removeEventListener("mouseup", cD.handleEnd)
          })), gD(vD(cD), "handleKeyDown", (function(DD) {
            DD.preventDefault();
            var CD, ID = DD.keyCode,
              pD = cD.props,
              iD = pD.value,
              fD = pD.min,
              bD = pD.max,
              QD = pD.step,
              wD = pD.onChange;
            switch (ID) {
              case 38:
              case 39:
                CD = iD + QD > bD ? bD : iD + QD, wD && wD(CD, DD);
                break;
              case 37:
              case 40:
                CD = iD - QD < fD ? fD : iD - QD, wD && wD(CD, DD)
            }
          })), gD(vD(cD), "getPositionFromValue", (function(DD) {
            var CD = cD.state.limit,
              ID = cD.props,
              pD = ID.min,
              iD = (DD - pD) / (ID.max - pD);
            return Math.round(iD * CD)
          })), gD(vD(cD), "getValueFromPosition", (function(DD) {
            var CD = cD.state.limit,
              ID = cD.props,
              pD = ID.orientation,
              iD = ID.min,
              fD = ID.max,
              bD = ID.step,
              wD = (0, QD.clamp)(DD, 0, CD) / (CD || 1),
              SD = bD * Math.round(wD * (fD - iD) / bD),
              BD = "horizontal" === pD ? SD + iD : fD - SD;
            return (0, QD.clamp)(BD, iD, fD)
          })), gD(vD(cD), "position", (function(DD) {
            var CD = cD.state.grab,
              ID = cD.props,
              pD = ID.orientation,
              iD = ID.reverse,
              fD = cD.slider,
              bD = XD.orientation[pD].coordinate,
              wD = iD ? XD.orientation[pD].reverseDirection : XD.orientation[pD].direction,
              SD = "client".concat((0, QD.capitalize)(bD)),
              BD = DD.touches ? DD.touches[0][SD] : DD[SD],
              yD = fD.getBoundingClientRect()[wD],
              MD = iD ? yD - BD - CD : BD - yD - CD;
            return cD.getValueFromPosition(MD)
          })), gD(vD(cD), "coordinates", (function(DD) {
            var CD = cD.state,
              ID = CD.limit,
              pD = CD.grab,
              iD = cD.props.orientation,
              fD = cD.getValueFromPosition(DD),
              bD = cD.getPositionFromValue(fD),
              QD = "horizontal" === iD ? bD + pD : bD;
            return {
              fill: "horizontal" === iD ? QD : ID - QD,
              handle: QD,
              label: QD
            }
          })), gD(vD(cD), "renderLabels", (function(DD) {
            return (0, wD.jsx)("ul", {
              ref: function(DD) {
                cD.labels = DD
              },
              className: (0, pD.default)("rangeslider__labels"),
              children: DD
            })
          })), cD.state = {
            active: !1,
            limit: 0,
            grab: 0
          }, cD
        }
        return CD = fD, (cD = [{
          key: "componentDidMount",
          value: function() {
            this.handleUpdate(), new bD.default(this.handleUpdate).observe(this.slider)
          }
        }, {
          key: "render",
          value: function() {
            var DD = this,
              CD = this.props,
              cD = CD.value,
              ID = CD.orientation,
              iD = CD.className,
              fD = CD.tooltip,
              bD = CD.reverse,
              QD = CD.labels,
              SD = CD.min,
              BD = CD.max,
              MD = CD.handleLabel,
              tD = this.state.active,
              ZD = XD.orientation[ID].dimension,
              oD = bD ? XD.orientation[ID].reverseDirection : XD.orientation[ID].direction,
              vD = this.getPositionFromValue(cD),
              ND = this.coordinates(vD),
              mD = gD({}, ZD, "".concat(ND.fill, "px")),
              nD = gD({}, oD, "".concat(ND.handle, "px")),
              OD = fD && tD,
              PD = [],
              HD = Object.keys(QD);
            if (HD.length > 0) {
              var UD, xD = yD(HD = HD.sort((function(DD, CD) {
                return bD ? DD - CD : CD - DD
              })));
              try {
                for (xD.s(); !(UD = xD.n()).done;) {
                  var qD = UD.value,
                    JD = this.getPositionFromValue(qD),
                    KD = this.coordinates(JD),
                    aD = gD({}, oD, "".concat(KD.label, "px"));
                  PD.push((0, wD.jsx)("li", {
                    className: (0, pD.default)("rangeslider__label-item"),
                    "data-value": qD,
                    onMouseDown: this.handleDrag,
                    onTouchStart: this.handleStart,
                    onTouchEnd: this.handleEnd,
                    style: aD,
                    children: this.props.labels[qD]
                  }, qD))
                }
              } catch (VD) {
                xD.e(VD)
              } finally {
                xD.f()
              }
            }
            return (0, wD.jsxs)("div", {
              ref: function(CD) {
                DD.slider = CD
              },
              className: (0, pD.default)("rangeslider", "rangeslider-".concat(ID), {
                "rangeslider-reverse": bD
              }, iD),
              onMouseDown: this.handleDrag,
              onMouseUp: this.handleEnd,
              onTouchStart: this.handleStart,
              onTouchEnd: this.handleEnd,
              "aria-valuemin": SD,
              "aria-valuemax": BD,
              "aria-valuenow": cD,
              "aria-orientation": ID,
              children: [(0, wD.jsx)("div", {
                className: "rangeslider__fill",
                style: mD
              }), (0, wD.jsxs)("div", {
                ref: function(CD) {
                  DD.handle = CD
                },
                className: "rangeslider__handle",
                onMouseDown: this.handleStart,
                onTouchMove: this.handleDrag,
                onTouchEnd: this.handleEnd,
                onKeyDown: this.handleKeyDown,
                style: nD,
                tabIndex: 0,
                children: [OD && (0, wD.jsx)("div", {
                  ref: function(CD) {
                    DD.tooltip = CD
                  },
                  className: "rangeslider__handle-tooltip",
                  children: (0, wD.jsx)("span", {
                    children: this.handleFormat(cD)
                  })
                }), (0, wD.jsx)("div", {
                  className: "rangeslider__handle-label",
                  children: MD
                })]
              }), QD && this.renderLabels(PD)]
            })
          }
        }]) && tD(CD.prototype, cD), ID && tD(CD, ID), Object.defineProperty(CD, "prototype", {
          writable: !1
        }), fD
      }(iD.Component);
    gD(mD, "propTypes", {
      min: fD.default.number,
      max: fD.default.number,
      step: fD.default.number,
      value: fD.default.number,
      orientation: fD.default.string,
      tooltip: fD.default.bool,
      reverse: fD.default.bool,
      labels: fD.default.object,
      handleLabel: fD.default.string,
      format: fD.default.func,
      onChangeStart: fD.default.func,
      onChange: fD.default.func,
      onChangeComplete: fD.default.func
    }), gD(mD, "defaultProps", {
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
    var nD = mD;
    CD.default = nD
  },
  4774: (DD, CD, cD) => {
    var ID;
    CD.e = void 0;
    var pD = ((ID = cD(4781)) && ID.__esModule ? ID : {
      default: ID
    }).default;
    CD.e = pD
  },
  4794: (DD, CD) => {
    Object.defineProperty(CD, "__esModule", {
      value: !0
    }), CD.capitalize = function(DD) {
      return DD.charAt(0).toUpperCase() + DD.substr(1)
    }, CD.clamp = function(DD, CD, cD) {
      return Math.min(Math.max(DD, CD), cD)
    }
  },
  4746: (DD, CD, cD) => {
    var ID = cD(4752);

    function pD() {}

    function iD() {}
    iD.resetWarningCache = pD, DD.exports = function() {
      function DD(DD, CD, cD, pD, iD, fD) {
        if (fD !== ID) {
          var bD = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw bD.name = "Invariant Violation", bD
        }
      }

      function CD() {
        return DD
      }
      DD.isRequired = DD;
      var cD = {
        array: DD,
        bigint: DD,
        bool: DD,
        func: DD,
        number: DD,
        object: DD,
        string: DD,
        symbol: DD,
        any: DD,
        arrayOf: CD,
        element: DD,
        elementType: DD,
        instanceOf: CD,
        node: DD,
        objectOf: CD,
        oneOf: CD,
        oneOfType: CD,
        shape: CD,
        exact: CD,
        checkPropTypes: iD,
        resetWarningCache: pD
      };
      return cD.PropTypes = cD, cD
    }
  },
  4741: (DD, CD, cD) => {
    DD.exports = cD(4746)()
  },
  4752: DD => {
    DD.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  4785: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      default: () => PD
    });
    var ID = function() {
        if ("undefined" !== typeof Map) return Map;

        function DD(DD, CD) {
          var cD = -1;
          return DD.some((function(DD, ID) {
            return DD[0] === CD && (cD = ID, !0)
          })), cD
        }
        return function() {
          function CD() {
            this.__entries__ = []
          }
          return Object.defineProperty(CD.prototype, "size", {
            get: function() {
              return this.__entries__.length
            },
            enumerable: !0,
            configurable: !0
          }), CD.prototype.get = function(CD) {
            var cD = DD(this.__entries__, CD),
              ID = this.__entries__[cD];
            return ID && ID[1]
          }, CD.prototype.set = function(CD, cD) {
            var ID = DD(this.__entries__, CD);
            ~ID ? this.__entries__[ID][1] = cD : this.__entries__.push([CD, cD])
          }, CD.prototype.delete = function(CD) {
            var cD = this.__entries__,
              ID = DD(cD, CD);
            ~ID && cD.splice(ID, 1)
          }, CD.prototype.has = function(CD) {
            return !!~DD(this.__entries__, CD)
          }, CD.prototype.clear = function() {
            this.__entries__.splice(0)
          }, CD.prototype.forEach = function(DD, CD) {
            void 0 === CD && (CD = null);
            for (var cD = 0, ID = this.__entries__; cD < ID.length; cD++) {
              var pD = ID[cD];
              DD.call(CD, pD[1], pD[0])
            }
          }, CD
        }()
      }(),
      pD = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document,
      iD = "undefined" !== typeof cD.g && cD.g.Math === Math ? cD.g : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")(),
      fD = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(iD) : function(DD) {
        return setTimeout((function() {
          return DD(Date.now())
        }), 1e3 / 60)
      };
    var bD = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
      QD = "undefined" !== typeof MutationObserver,
      wD = function() {
        function DD() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(DD, CD) {
            var cD = !1,
              ID = !1,
              pD = 0;

            function iD() {
              cD && (cD = !1, DD()), ID && QD()
            }

            function bD() {
              fD(iD)
            }

            function QD() {
              var DD = Date.now();
              if (cD) {
                if (DD - pD < 2) return;
                ID = !0
              } else cD = !0, ID = !1, setTimeout(bD, CD);
              pD = DD
            }
            return QD
          }(this.refresh.bind(this), 20)
        }
        return DD.prototype.addObserver = function(DD) {
          ~this.observers_.indexOf(DD) || this.observers_.push(DD), this.connected_ || this.connect_()
        }, DD.prototype.removeObserver = function(DD) {
          var CD = this.observers_,
            cD = CD.indexOf(DD);
          ~cD && CD.splice(cD, 1), !CD.length && this.connected_ && this.disconnect_()
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
          pD && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), QD ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
          })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, DD.prototype.disconnect_ = function() {
          pD && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, DD.prototype.onTransitionEnd_ = function(DD) {
          var CD = DD.propertyName,
            cD = void 0 === CD ? "" : CD;
          bD.some((function(DD) {
            return !!~cD.indexOf(DD)
          })) && this.refresh()
        }, DD.getInstance = function() {
          return this.instance_ || (this.instance_ = new DD), this.instance_
        }, DD.instance_ = null, DD
      }(),
      SD = function(DD, CD) {
        for (var cD = 0, ID = Object.keys(CD); cD < ID.length; cD++) {
          var pD = ID[cD];
          Object.defineProperty(DD, pD, {
            value: CD[pD],
            enumerable: !1,
            writable: !1,
            configurable: !0
          })
        }
        return DD
      },
      BD = function(DD) {
        return DD && DD.ownerDocument && DD.ownerDocument.defaultView || iD
      },
      yD = ND(0, 0, 0, 0);

    function MD(DD) {
      return parseFloat(DD) || 0
    }

    function tD(DD) {
      for (var CD = [], cD = 1; cD < arguments.length; cD++) CD[cD - 1] = arguments[cD];
      return CD.reduce((function(CD, cD) {
        return CD + MD(DD["border-" + cD + "-width"])
      }), 0)
    }

    function ZD(DD) {
      var CD = DD.clientWidth,
        cD = DD.clientHeight;
      if (!CD && !cD) return yD;
      var ID = BD(DD).getComputedStyle(DD),
        pD = function(DD) {
          for (var CD = {}, cD = 0, ID = ["top", "right", "bottom", "left"]; cD < ID.length; cD++) {
            var pD = ID[cD],
              iD = DD["padding-" + pD];
            CD[pD] = MD(iD)
          }
          return CD
        }(ID),
        iD = pD.left + pD.right,
        fD = pD.top + pD.bottom,
        bD = MD(ID.width),
        QD = MD(ID.height);
      if ("border-box" === ID.boxSizing && (Math.round(bD + iD) !== CD && (bD -= tD(ID, "left", "right") + iD), Math.round(QD + fD) !== cD && (QD -= tD(ID, "top", "bottom") + fD)), ! function(DD) {
          return DD === BD(DD).document.documentElement
        }(DD)) {
        var wD = Math.round(bD + iD) - CD,
          SD = Math.round(QD + fD) - cD;
        1 !== Math.abs(wD) && (bD -= wD), 1 !== Math.abs(SD) && (QD -= SD)
      }
      return ND(pD.left, pD.top, bD, QD)
    }
    var oD = "undefined" !== typeof SVGGraphicsElement ? function(DD) {
      return DD instanceof BD(DD).SVGGraphicsElement
    } : function(DD) {
      return DD instanceof BD(DD).SVGElement && "function" === typeof DD.getBBox
    };

    function vD(DD) {
      return pD ? oD(DD) ? function(DD) {
        var CD = DD.getBBox();
        return ND(0, 0, CD.width, CD.height)
      }(DD) : ZD(DD) : yD
    }

    function ND(DD, CD, cD, ID) {
      return {
        x: DD,
        y: CD,
        width: cD,
        height: ID
      }
    }
    var gD = function() {
        function DD(DD) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = ND(0, 0, 0, 0), this.target = DD
        }
        return DD.prototype.isActive = function() {
          var DD = vD(this.target);
          return this.contentRect_ = DD, DD.width !== this.broadcastWidth || DD.height !== this.broadcastHeight
        }, DD.prototype.broadcastRect = function() {
          var DD = this.contentRect_;
          return this.broadcastWidth = DD.width, this.broadcastHeight = DD.height, DD
        }, DD
      }(),
      XD = function(DD, CD) {
        var cD = function(DD) {
          var CD = DD.x,
            cD = DD.y,
            ID = DD.width,
            pD = DD.height,
            iD = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
            fD = Object.create(iD.prototype);
          return SD(fD, {
            x: CD,
            y: cD,
            width: ID,
            height: pD,
            top: cD,
            right: CD + ID,
            bottom: pD + cD,
            left: CD
          }), fD
        }(CD);
        SD(this, {
          target: DD,
          contentRect: cD
        })
      },
      mD = function() {
        function DD(DD, CD, cD) {
          if (this.activeObservations_ = [], this.observations_ = new ID, "function" !== typeof DD) throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = DD, this.controller_ = CD, this.callbackCtx_ = cD
        }
        return DD.prototype.observe = function(DD) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(DD instanceof BD(DD).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var CD = this.observations_;
            CD.has(DD) || (CD.set(DD, new gD(DD)), this.controller_.addObserver(this), this.controller_.refresh())
          }
        }, DD.prototype.unobserve = function(DD) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(DD instanceof BD(DD).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var CD = this.observations_;
            CD.has(DD) && (CD.delete(DD), CD.size || this.controller_.removeObserver(this))
          }
        }, DD.prototype.disconnect = function() {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, DD.prototype.gatherActive = function() {
          var DD = this;
          this.clearActive(), this.observations_.forEach((function(CD) {
            CD.isActive() && DD.activeObservations_.push(CD)
          }))
        }, DD.prototype.broadcastActive = function() {
          if (this.hasActive()) {
            var DD = this.callbackCtx_,
              CD = this.activeObservations_.map((function(DD) {
                return new XD(DD.target, DD.broadcastRect())
              }));
            this.callback_.call(DD, CD, DD), this.clearActive()
          }
        }, DD.prototype.clearActive = function() {
          this.activeObservations_.splice(0)
        }, DD.prototype.hasActive = function() {
          return this.activeObservations_.length > 0
        }, DD
      }(),
      nD = "undefined" !== typeof WeakMap ? new WeakMap : new ID,
      OD = function DD(CD) {
        if (!(this instanceof DD)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var cD = wD.getInstance(),
          ID = new mD(CD, cD, this);
        nD.set(this, ID)
      };
    ["observe", "unobserve", "disconnect"].forEach((function(DD) {
      OD.prototype[DD] = function() {
        var CD;
        return (CD = nD.get(this))[DD].apply(CD, arguments)
      }
    }));
    const PD = "undefined" !== typeof iD.ResizeObserver ? iD.ResizeObserver : OD
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);