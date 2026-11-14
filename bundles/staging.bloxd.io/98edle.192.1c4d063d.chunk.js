/*! For license information please see 98edle.192.1c4d063d.chunk.js.LICENSE.txt */
export const id = 192;
export const ids = [192];
export const modules = {
  37325: (WW, RW, MW) => {
    WW.exports = CW;
    var wW = MW(290);

    function CW(WW, RW) {
      if (!(this instanceof CW)) return new CW(WW, RW);
      var MW = wW.create();
      wW.add(MW, WW, RW), this.base = wW.min(wW.create(), WW, MW), this.vec = wW.clone(RW), this.max = wW.max(wW.create(), WW, MW), this.mag = wW.length(this.vec)
    }
    var zR = CW.prototype;
    zR.width = function() {
      return this.vec[0]
    }, zR.height = function() {
      return this.vec[1]
    }, zR.depth = function() {
      return this.vec[2]
    }, zR.x0 = function() {
      return this.base[0]
    }, zR.y0 = function() {
      return this.base[1]
    }, zR.z0 = function() {
      return this.base[2]
    }, zR.x1 = function() {
      return this.max[0]
    }, zR.y1 = function() {
      return this.max[1]
    }, zR.z1 = function() {
      return this.max[2]
    }, zR.translate = function(WW) {
      return wW.add(this.max, this.max, WW), wW.add(this.base, this.base, WW), this
    }, zR.setPosition = function(WW) {
      return wW.add(this.max, WW, this.vec), wW.copy(this.base, WW), this
    }, zR.expand = function(WW) {
      var RW = wW.create(),
        MW = wW.create();
      return wW.max(RW, WW.max, this.max), wW.min(MW, WW.base, this.base), wW.subtract(RW, RW, MW), new CW(MW, RW)
    }, zR.intersects = function(WW) {
      return !(WW.base[0] > this.max[0]) && (!(WW.base[1] > this.max[1]) && (!(WW.base[2] > this.max[2]) && (!(WW.max[0] < this.base[0]) && (!(WW.max[1] < this.base[1]) && !(WW.max[2] < this.base[2])))))
    }, zR.touches = function(WW) {
      var RW = this.union(WW);
      return null !== RW && (0 == RW.width() || 0 == RW.height() || 0 == RW.depth())
    }, zR.union = function(WW) {
      if (!this.intersects(WW)) return null;
      var RW = Math.max(WW.base[0], this.base[0]),
        MW = Math.max(WW.base[1], this.base[1]),
        wW = Math.max(WW.base[2], this.base[2]);
      return new CW([RW, MW, wW], [Math.min(WW.max[0], this.max[0]) - RW, Math.min(WW.max[1], this.max[1]) - MW, Math.min(WW.max[2], this.max[2]) - wW])
    }
  },
  34930: WW => {
    WW.exports = function WW(RW, MW) {
      if (RW === MW) return !0;
      if (RW && MW && "object" == typeof RW && "object" == typeof MW) {
        if (RW.constructor !== MW.constructor) return !1;
        var wW, CW, zR;
        if (Array.isArray(RW)) {
          if ((wW = RW.length) != MW.length) return !1;
          for (CW = wW; 0 !== CW--;)
            if (!WW(RW[CW], MW[CW])) return !1;
          return !0
        }
        if (RW.constructor === RegExp) return RW.source === MW.source && RW.flags === MW.flags;
        if (RW.valueOf !== Object.prototype.valueOf) return RW.valueOf() === MW.valueOf();
        if (RW.toString !== Object.prototype.toString) return RW.toString() === MW.toString();
        if ((wW = (zR = Object.keys(RW)).length) !== Object.keys(MW).length) return !1;
        for (CW = wW; 0 !== CW--;)
          if (!Object.prototype.hasOwnProperty.call(MW, zR[CW])) return !1;
        for (CW = wW; 0 !== CW--;) {
          var AW = zR[CW];
          if (!WW(RW[AW], MW[AW])) return !1
        }
        return !0
      }
      return RW !== RW && MW !== MW
    }
  },
  37322: WW => {
    WW.exports = function(WW, RW, MW, wW, CW, zR) {
      var AW = +RW[0],
        bR = +RW[1],
        yR = +RW[2],
        NW = +MW[0],
        eW = +MW[1],
        BW = +MW[2],
        tR = Math.sqrt(NW * NW + eW * eW + BW * BW);
      if (0 === tR) throw new Error("Can't raycast along a zero vector");
      return function(WW, RW, MW, wW, CW, zR, AW, bR, yR, NW) {
        for (var eW = 0, BW = Math.floor, tR = 0 | BW(RW), TW = 0 | BW(MW), gR = 0 | BW(wW), iR = CW > 0 ? 1 : -1, YW = zR > 0 ? 1 : -1, JW = AW > 0 ? 1 : -1, PW = Math.abs(1 / CW), IW = Math.abs(1 / zR), oW = Math.abs(1 / AW), lW = PW < 1 / 0 ? PW * (iR > 0 ? tR + 1 - RW : RW - tR) : 1 / 0, FW = IW < 1 / 0 ? IW * (YW > 0 ? TW + 1 - MW : MW - TW) : 1 / 0, fW = oW < 1 / 0 ? oW * (JW > 0 ? gR + 1 - wW : wW - gR) : 1 / 0, QW = -1; eW <= bR;) {
          var rR = WW(tR, TW, gR);
          if (rR) return yR && (yR[0] = RW + eW * CW, yR[1] = MW + eW * zR, yR[2] = wW + eW * AW), NW && (NW[0] = NW[1] = NW[2] = 0, 0 === QW && (NW[0] = -iR), 1 === QW && (NW[1] = -YW), 2 === QW && (NW[2] = -JW)), rR;
          lW < FW ? lW < fW ? (tR += iR, eW = lW, lW += PW, QW = 0) : (gR += JW, eW = fW, fW += oW, QW = 2) : FW < fW ? (TW += YW, eW = FW, FW += IW, QW = 1) : (gR += JW, eW = fW, fW += oW, QW = 2)
        }
        return yR && (yR[0] = RW + eW * CW, yR[1] = MW + eW * zR, yR[2] = wW + eW * AW), NW && (NW[0] = NW[1] = NW[2] = 0), 0
      }(WW, AW, bR, yR, NW /= tR, eW /= tR, BW /= tR, wW = "undefined" === typeof wW ? 64 : +wW, CW, zR)
    }
  },
  37101: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => bR,
      f: () => zR
    });
    var wW = MW(3205);
    let CW = null;

    function zR(WW) {
      return null !== CW && WW === CW
    }

    function AW() {
      this.RwW = !1, this.stopPropagation = !1, this.MwW = !1, this.disabled = !1
    }
    class bR {
      constructor(WW, RW) {
        this.version = "0.7.0";
        var MW = Object.assign({}, new AW, RW || {});
        this.element = WW || document, this.RwW = !!MW.RwW, this.stopPropagation = !!MW.stopPropagation, this.MwW = !!MW.MwW, this.disabled = !!MW.disabled, this.filterEvents = (WW, RW) => !0, this.down = new wW.EventEmitter, this.up = new wW.EventEmitter, this.state = {}, this.XwW = {
          dx: 0,
          dy: 0,
          AbW: 0,
          byW: 0,
          yyW: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? NW(this) : document.addEventListener("DOMContentLoaded", (WW => {
          NW(this)
        }), {
          once: !0
        })
      }
      bind(WW) {
        for (var RW = arguments.length, MW = new Array(RW > 1 ? RW - 1 : 0), wW = 1; wW < RW; wW++) MW[wW - 1] = arguments[wW];
        MW.forEach((RW => {
          var MW = this._keyBindmap[RW] || [];
          MW.includes(WW) || (MW.push(WW), this._keyBindmap[RW] = MW)
        })), this.state[WW] = !!this.state[WW], this.pressCount[WW] = this.pressCount[WW] || 0, this.releaseCount[WW] = this.releaseCount[WW] || 0
      }
      unbind(WW) {
        for (var RW in this._keyBindmap) {
          var MW = this._keyBindmap[RW],
            wW = MW.indexOf(WW);
          wW > -1 && MW.splice(wW, 1)
        }
      }
      getBindings() {
        var WW = {};
        for (var RW in this._keyBindmap) {
          this._keyBindmap[RW].forEach((MW => {
            WW[MW] = WW[MW] || [], WW[MW].push(RW)
          }))
        }
        return WW
      }
      WR() {
        yR(this.XwW), yR(this.pressCount), yR(this.releaseCount)
      }
    }

    function yR(WW) {
      for (var RW in WW) WW[RW] = 0
    }

    function NW(WW) {
      window.addEventListener("keydown", YW.bind(null, WW, !0), !1), window.addEventListener("keyup", YW.bind(null, WW, !1), !1);
      var RW = {
        passive: !0
      };
      WW.element.addEventListener("touchstart", TW.bind(void 0, WW), {
        passive: !1
      }), WW.element.addEventListener("touchend", iR.bind(void 0, WW), RW), WW.element.addEventListener("mousedown", JW.bind(null, WW, !0), RW), window.document.addEventListener("mouseup", JW.bind(null, WW, !1), RW), WW.element.addEventListener("touchmove", PW.bind(null, WW), RW), WW.element.addEventListener("mousemove", PW.bind(null, WW), RW), window.PointerEvent, WW.element.addEventListener("wheel", IW.bind(null, WW), RW), WW.element.addEventListener("contextmenu", oW.bind(null, WW), !1), window.addEventListener("blur", fW.bind(null, WW), !1)
    }
    var eW = 0,
      BW = 0,
      tR = null;

    function TW(WW, RW) {
      RW.preventDefault(), gR(RW)
    }

    function gR(WW) {
      let RW = !1;
      for (let MW = 0; MW < WW.touches.length; ++MW)
        if (WW.touches[MW].identifier === tR) {
          RW = !0;
          break
        } if (!RW) {
        const RW = WW.changedTouches[0];
        eW = RW.clientX, BW = RW.clientY, tR = RW.identifier
      }
    }

    function iR(WW, RW) {
      for (var MW = RW.changedTouches, wW = 0; wW < MW.length; ++wW) MW[wW].identifier === tR && (tR = null)
    }

    function YW(WW, RW, MW) {
      try {
        QW(WW, MW), RW && MW.isTrusted && !MW.repeat && WW._keyStates[MW.code] && rR(WW, MW.code)
      } finally {
        cR(MW.code, RW, WW, MW)
      }
    }

    function JW(WW, RW, MW) {
      try {
        QW(WW, MW)
      } finally {
        ! function(WW, RW, MW) {
          if ("pointerId" in MW)
            if (RW) {
              if (null !== WW._touches.currID) return;
              WW._touches.currID = MW.pointerId
            } else {
              if (WW._touches.currID !== MW.pointerId) return;
              WW._touches.currID = null
            } var wW = "button" in MW ? MW.button + 1 : 1;
          cR("Mouse" + wW, RW, WW, MW)
        }(WW, RW, MW)
      }
    }

    function PW(WW, RW) {
      var MW = RW.movementX || RW.mozMovementX || 0,
        wW = RW.movementY || RW.mozMovementY || 0;
      if (RW.touches && 0 === (MW | wW)) {
        var CW = function(WW) {
          gR(WW);
          for (let RW = 0; RW < WW.changedTouches.length; ++RW)
            if (WW.changedTouches[RW].identifier == tR) {
              const MW = WW.changedTouches[RW],
                wW = [MW.clientX - eW, MW.clientY - BW];
              return eW = MW.clientX, BW = MW.clientY, wW
            } return console.error(`Did not find touch id ${tR}`), [0, 0]
        }(RW);
        MW = CW[0], wW = CW[1]
      }
      WW.XwW.dx += MW, WW.XwW.dy += wW
    }

    function IW(WW, RW) {
      QW(WW, RW);
      var MW = 1;
      switch (RW.deltaMode) {
        case 0:
          MW = 1;
          break;
        case 1:
          MW = 12;
          break;
        case 2:
          MW = WW.element.clientHeight || window.innerHeight
      }
      WW.XwW.AbW += (RW.deltaX || 0) * MW, WW.XwW.byW += (RW.deltaY || 0) * MW, WW.XwW.yyW += (RW.deltaZ || 0) * MW
    }

    function oW(WW, RW) {
      if (!WW.MwW) return RW.preventDefault(), !1
    }
    var lW = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function FW(WW, RW) {
      return !!WW[lW[RW]] || ("AltRight" === RW || "ControlLeft" === RW) && "function" === typeof WW.getModifierState && !0 === WW.getModifierState("AltGraph")
    }

    function fW(WW) {
      for (var RW in WW._modifiersHeldThroughBlur = {}, lW) WW._keyStates[RW] && (WW._modifiersHeldThroughBlur[RW] = !0)
    }

    function QW(WW, RW) {
      var MW = WW._modifiersHeldThroughBlur;
      if (MW && RW.isTrusted && document.hasFocus())
        for (var wW in MW) delete MW[wW], WW._keyStates[wW] && wW !== RW.code && (FW(RW, wW) || rR(WW, wW))
    }

    function rR(WW, RW) {
      const MW = {
          code: RW,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        wW = CW;
      CW = MW;
      try {
        cR(RW, !1, WW, MW)
      } finally {
        CW = wW
      }
    }

    function cR(WW, RW, MW, wW) {
      var CW = MW._keyBindmap[WW];
      CW && (XW(MW._keyStates[WW], RW) && (MW._keyStates[WW] = RW, CW.forEach((WW => {
        (!MW.filterEvents || MW.filterEvents(wW, WW)) && function(WW, RW, MW, wW) {
          var CW = RW ? MW.pressCount : MW.releaseCount;
          CW[WW] = (CW[WW] || 0) + 1;
          var zR = MW._bindPressCount[WW] || 0;
          (zR += RW ? 1 : -1) < 0 && (zR = 0);
          MW._bindPressCount[WW] = zR;
          var AW = MW.state[WW];
          if (XW(AW, zR)) {
            MW.state[WW] = zR > 0;
            var bR = RW ? MW.down : MW.up;
            MW.disabled || bR.emit(WW, wW)
          }
        }(WW, RW, MW, wW)
      }))), "button" in wW || (MW.RwW && !wW.defaultPrevented && wW.preventDefault(), MW.stopPropagation && wW.stopPropagation()))
    }

    function XW(WW, RW) {
      return WW ? !RW : RW
    }
  },
  34755: (WW, RW) => {
    function MW(WW) {
      if (WW && "object" === typeof WW) {
        var RW = WW.which || WW.keyCode || WW.charCode;
        RW && (WW = RW)
      }
      if ("number" === typeof WW) return AW[WW];
      var MW, zR = String(WW);
      return (MW = wW[zR.toLowerCase()]) ? MW : (MW = CW[zR.toLowerCase()]) || (1 === zR.length ? zR.charCodeAt(0) : void 0)
    }
    MW.isEventKey = function(WW, RW) {
      if (WW && "object" === typeof WW) {
        var MW = WW.which || WW.keyCode || WW.charCode;
        if (null === MW || void 0 === MW) return !1;
        if ("string" === typeof RW) {
          var zR;
          if (zR = wW[RW.toLowerCase()]) return zR === MW;
          if (zR = CW[RW.toLowerCase()]) return zR === MW
        } else if ("number" === typeof RW) return RW === MW;
        return !1
      }
    };
    var wW = (RW = WW.exports = MW).code = RW.codes = {
        backspace: 8,
        tab: 9,
        enter: 13,
        shift: 16,
        ctrl: 17,
        alt: 18,
        "pause/break": 19,
        "caps lock": 20,
        esc: 27,
        space: 32,
        "page up": 33,
        "page down": 34,
        end: 35,
        home: 36,
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        insert: 45,
        delete: 46,
        command: 91,
        "left command": 91,
        "right command": 93,
        "numpad *": 106,
        "numpad +": 107,
        "numpad -": 109,
        "numpad .": 110,
        "numpad /": 111,
        "num lock": 144,
        "scroll lock": 145,
        "my computer": 182,
        "my calculator": 183,
        ";": 186,
        "=": 187,
        ",": 188,
        "-": 189,
        ".": 190,
        "/": 191,
        "`": 192,
        "[": 219,
        "\\": 220,
        "]": 221,
        "'": 222
      },
      CW = RW.aliases = {
        windows: 91,
        "\u21e7": 16,
        "\u2325": 18,
        "\u2303": 17,
        "\u2318": 91,
        ctl: 17,
        control: 17,
        option: 18,
        pause: 19,
        break: 19,
        caps: 20,
        return: 13,
        escape: 27,
        spc: 32,
        spacebar: 32,
        pgup: 33,
        pgdn: 34,
        ins: 45,
        del: 46,
        cmd: 91
      };
    for (zR = 97; zR < 123; zR++) wW[String.fromCharCode(zR)] = zR - 32;
    for (var zR = 48; zR < 58; zR++) wW[zR - 48] = zR;
    for (zR = 1; zR < 13; zR++) wW["f" + zR] = zR + 111;
    for (zR = 0; zR < 10; zR++) wW["numpad " + zR] = zR + 96;
    var AW = RW.names = RW.title = {};
    for (zR in wW) AW[wW[zR]] = zR;
    for (var bR in CW) wW[bR] = CW[bR]
  },
  37307: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => wW
    });
    class wW {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        this.bwW = !1, this.ywW = !1, this.FRW = 30, this.MMW = 0, this.NMW = 100, this.nA = !1, this.fullscreen = !1, this.SF = function(WW) {}, this.eMW = function(WW, RW, MW) {}, this.TMW = function() {}, this.FQ = function() {}, this.BMW = function() {}, this.onFullscreenChanged = function() {}, this.onPointerLockError = function(WW) {}, this._data = new CW(RW),
          function(WW) {
            if ("loading" === document.readyState) {
              var RW = () => {
                document.removeEventListener("readystatechange", RW), WW()
              };
              document.addEventListener("readystatechange", RW)
            } else setTimeout(WW, 0)
          }((() => {
            ! function(WW) {
              var RW = WW._data,
                MW = RW.nowObject.now();
              RW.lastTickStarted = MW, RW.lastFrameStarted = MW, RW.lastRenderStarted = MW, RW.frameCB = () => function(WW) {
                var RW = WW._data;
                requestAnimationFrame(RW.frameCB), bR(WW);
                var MW = RW.nowObject.now(),
                  wW = MW - RW.lastFrameStarted;
                if (RW.lastFrameStarted = MW, WW.MMW > 0) {
                  RW.renderAccum += wW;
                  var CW = 1e3 / WW.MMW;
                  if (RW.renderAccum < CW) return;
                  RW.renderAccum -= CW, RW.renderAccum > CW && (RW.renderAccum = CW)
                }
                var zR = MW - RW.lastRenderStarted;
                RW.lastRenderStarted = MW;
                var AW = 1e3 / WW.FRW,
                  yR = (MW - RW.lastTickStarted) / AW;
                yR < 0 && (yR = 0);
                WW.eMW(zR, yR, AW), setTimeout(bR, 0, WW, !0)
              }(WW), RW.intervalCB = () => bR(WW), requestAnimationFrame(RW.frameCB), RW.pollTime > 0 && (RW.intervalID = setInterval(RW.intervalCB, Math.max(RW.pollTime, 1e3 / WW.FRW / 2)))
            }(this),
            function(WW, RW) {
              if (!RW) return;
              var MW = !1,
                wW = !1,
                CW = WW => {
                  if (!!WW !== (MW = RW === document.pointerLockElement))
                    if (WW) {
                      var wW = RW.requestPointerLock();
                      wW && wW.catch && wW.catch((WW => {}))
                    } else document.exitPointerLock()
                },
                zR = WW => {
                  !!WW !== (wW = RW === document.fullscreenElement) && (WW ? RW.requestFullscreen ? RW.requestFullscreen() : RW.webkitRequestFullscreen && RW.webkitRequestFullscreen() : document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen())
                };
              document.addEventListener("pointerlockchange", (wW => {
                MW = RW === document.pointerLockElement, WW.BMW(MW)
              })), document.addEventListener("fullscreenchange", (MW => {
                wW = RW === document.fullscreenElement, WW.onFullscreenChanged(wW)
              })), document.addEventListener("pointerlockerror", (wW => {
                MW = RW === document.pointerLockElement, WW.onPointerLockError(wW)
              })), Object.defineProperty(WW, "nA", {
                get: () => MW,
                set: CW
              }), Object.defineProperty(WW, "fullscreen", {
                get: () => wW,
                set: zR
              }), RW.addEventListener("click", (RW => {
                WW.bwW && CW(!0), WW.ywW && zR(!0)
              }));
              var AW = () => WW.FQ();
              if (window.ResizeObserver) {
                new ResizeObserver(AW).observe(RW)
              } else window.addEventListener("resize", AW)
            }(this, WW), this.TMW()
          }))
      }
    }

    function CW() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      this.nowObject = performance || Date, this.pollTime = WW, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
    }
    var zR = 3,
      AW = 20;

    function bR(WW) {
      for (var RW = WW._data, MW = 1e3 / WW.FRW, wW = RW.nowObject.now() + AW, CW = 0; RW.nowObject.now() >= RW.lastTickStarted + MW && RW.nowObject.now() < wW && ++CW <= zR;) WW.SF(MW), RW.lastTickStarted += MW;
      var bR = 5 * (MW + 5),
        yR = RW.nowObject.now();
      if (yR - RW.lastTickStarted > bR)
        for (; yR >= RW.lastTickStarted + MW;) RW.lastTickStarted += MW
    }
  },
  34948: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => AW
    });
    var wW = MW(75);
    const CW = wW.useLayoutEffect;
    const zR = function(WW) {
      var RW = (0, wW.useRef)(WW);
      return CW((function() {
        RW.current = WW
      })), RW
    };
    var AW = function(WW) {
      var RW = zR(WW);
      (0, wW.useEffect)((function() {
        var WW = function(WW) {
          var MW;
          if (null != RW.current && (MW = RW.current(WW)), WW.defaultPrevented && (WW.returnValue = ""), "string" === typeof MW) return WW.returnValue = MW, MW
        };
        return window.addEventListener("beforeunload", WW),
          function() {
            window.removeEventListener("beforeunload", WW)
          }
      }), [])
    }
  },
  34799: WW => {
    var RW, MW = "undefined" !== typeof window ? window.navigator.userAgent : "",
      wW = /OS X/.test(MW),
      CW = /Opera/.test(MW),
      zR = !/like Gecko/.test(MW) && !CW,
      AW = WW.exports = {
        0: wW ? "<menu>" : "<UNK>",
        1: "<mouse 1>",
        2: "<mouse 2>",
        3: "<break>",
        4: "<mouse 3>",
        5: "<mouse 4>",
        6: "<mouse 5>",
        8: "<backspace>",
        9: "<tab>",
        12: "<clear>",
        13: "<enter>",
        16: "<shift>",
        17: "<control>",
        18: "<alt>",
        19: "<pause>",
        20: "<caps-lock>",
        21: "<ime-hangul>",
        23: "<ime-junja>",
        24: "<ime-final>",
        25: "<ime-kanji>",
        27: "<escape>",
        28: "<ime-convert>",
        29: "<ime-nonconvert>",
        30: "<ime-accept>",
        31: "<ime-mode-change>",
        32: "<space>",
        33: "<page-up>",
        34: "<page-down>",
        35: "<end>",
        36: "<home>",
        37: "<left>",
        38: "<up>",
        39: "<right>",
        40: "<down>",
        41: "<select>",
        42: "<print>",
        43: "<execute>",
        44: "<snapshot>",
        45: "<insert>",
        46: "<delete>",
        47: "<help>",
        91: "<meta>",
        92: "<meta>",
        93: wW ? "<meta>" : "<menu>",
        95: "<sleep>",
        106: "<num-*>",
        107: "<num-+>",
        108: "<num-enter>",
        109: "<num--\x3e",
        110: "<num-.>",
        111: "<num-/>",
        144: "<num-lock>",
        145: "<scroll-lock>",
        160: "<shift-left>",
        161: "<shift-right>",
        162: "<control-left>",
        163: "<control-right>",
        164: "<alt-left>",
        165: "<alt-right>",
        166: "<browser-back>",
        167: "<browser-forward>",
        168: "<browser-refresh>",
        169: "<browser-stop>",
        170: "<browser-search>",
        171: "<browser-favorites>",
        172: "<browser-home>",
        173: wW && zR ? "-" : "<volume-mute>",
        174: "<volume-down>",
        175: "<volume-up>",
        176: "<next-track>",
        177: "<prev-track>",
        178: "<stop>",
        179: "<play-pause>",
        180: "<launch-mail>",
        181: "<launch-media-select>",
        182: "<launch-app 1>",
        183: "<launch-app 2>",
        186: ";",
        187: "=",
        188: ",",
        189: "-",
        190: ".",
        191: "/",
        192: "`",
        219: "[",
        220: "\\",
        221: "]",
        222: "'",
        223: "<meta>",
        224: "<meta>",
        226: "<alt-gr>",
        229: "<ime-process>",
        231: CW ? "`" : "<unicode>",
        246: "<attention>",
        247: "<crsel>",
        248: "<exsel>",
        249: "<erase-eof>",
        250: "<play>",
        251: "<zoom>",
        252: "<no-name>",
        253: "<pa-1>",
        254: "<clear>"
      };
    for (RW = 58; RW < 65; ++RW) AW[RW] = String.fromCharCode(RW);
    for (RW = 48; RW < 58; ++RW) AW[RW] = RW - 48 + "";
    for (RW = 65; RW < 91; ++RW) AW[RW] = String.fromCharCode(RW);
    for (RW = 96; RW < 106; ++RW) AW[RW] = "<num-" + (RW - 96) + ">";
    for (RW = 112; RW < 136; ++RW) AW[RW] = "F" + (RW - 111)
  },
  37057: (WW, RW, MW) => {
    function wW(WW, RW, MW, wW, CW) {
      var zR = {};
      return Object.keys(wW).forEach((function(WW) {
        zR[WW] = wW[WW]
      })), zR.enumerable = !!zR.enumerable, zR.configurable = !!zR.configurable, ("value" in zR || zR.initializer) && (zR.writable = !0), zR = MW.slice().reverse().reduce((function(MW, wW) {
        return wW(WW, RW, MW) || MW
      }), zR), CW && void 0 !== zR.initializer && (zR.value = zR.initializer ? zR.initializer.call(CW) : void 0, zR.initializer = void 0), void 0 === zR.initializer && (Object.defineProperty(WW, RW, zR), zR = null), zR
    }
    MW.d(RW, {
      e: () => wW
    })
  },
  37050: (WW, RW, MW) => {
    function wW(WW, RW, MW, wW) {
      MW && Object.defineProperty(WW, RW, {
        enumerable: MW.enumerable,
        configurable: MW.configurable,
        writable: MW.writable,
        value: MW.initializer ? MW.initializer.call(wW) : void 0
      })
    }
    MW.d(RW, {
      d: () => wW
    })
  },
  36716: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => zR
    });
    var wW = MW(36721);
    const CW = (WW, RW, MW) => WW ? WW.getClassName && "Mesh" === WW.getClassName() ? null : !WW.getClassName || "SubMesh" !== WW.getClassName() && "PhysicsBody" !== WW.getClassName() ? WW.clone ? WW.clone() : Array.isArray(WW) ? WW.slice() : MW && "object" === typeof WW ? {
      ...WW
    } : null : WW.clone(RW) : null;
    class zR {
      static DeepCopy(WW, RW, MW, zR) {
        let AW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const bR = function(WW) {
          const RW = [];
          do {
            const MW = Object.getOwnPropertyNames(WW);
            for (const WW of MW) - 1 === RW.indexOf(WW) && RW.push(WW)
          } while (WW = Object.getPrototypeOf(WW));
          return RW
        }(WW);
        for (const NW of bR) {
          if ("_" === NW[0] && (!zR || -1 === zR.indexOf(NW))) continue;
          if (NW.endsWith("Observable")) continue;
          if (MW && -1 !== MW.indexOf(NW)) continue;
          const bR = WW[NW],
            eW = typeof bR;
          if ("function" !== eW) try {
            if ("object" === eW)
              if (bR instanceof Uint8Array) RW[NW] = Uint8Array.from(bR);
              else if (bR instanceof Array) {
              if (RW[NW] = [], bR.length > 0)
                if ("object" == typeof bR[0])
                  for (let WW = 0; WW < bR.length; WW++) {
                    const MW = CW(bR[WW], RW, AW); - 1 === RW[NW].indexOf(MW) && RW[NW].push(MW)
                  } else RW[NW] = bR.slice(0)
            } else RW[NW] = CW(bR, RW, AW);
            else RW[NW] = bR
          } catch (yR) {
            wW.b.Warn(yR.message)
          }
        }
      }
    }
  },
  36750: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => CW,
      d: () => zR,
      f: () => AW,
      g: () => bR
    });
    var wW = MW(35376);
    class CW {
      constructor(WW, RW, MW) {
        this.gradient = WW, this.color1 = RW, this.color2 = MW
      }
      getColorToRef(WW) {
        this.color2 ? wW.h.LerpToRef(this.color1, this.color2, Math.random(), WW) : WW.hyW(this.color1)
      }
    }
    class zR {
      constructor(WW, RW) {
        this.gradient = WW, this.color = RW
      }
    }
    class AW {
      constructor(WW, RW, MW) {
        this.gradient = WW, this.factor1 = RW, this.factor2 = MW
      }
      getFactor() {
        return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
      }
    }
    class bR {
      static GetCurrentGradient(WW, RW, MW) {
        if (RW[0].gradient > WW) return void MW(RW[0], RW[0], 1);
        for (let CW = 0; CW < RW.length - 1; CW++) {
          const wW = RW[CW],
            zR = RW[CW + 1];
          if (WW >= wW.gradient && WW <= zR.gradient) {
            return void MW(wW, zR, (WW - wW.gradient) / (zR.gradient - wW.gradient))
          }
        }
        const wW = RW.length - 1;
        MW(RW[wW], RW[wW], 1)
      }
    }
  },
  36721: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => wW
    });
    class wW {
      static _CheckLimit(WW, RW) {
        let MW = wW._LogLimitOutputs[WW];
        return MW ? MW.current++ : (MW = {
          limit: RW,
          current: 1
        }, wW._LogLimitOutputs[WW] = MW), MW.current <= MW.limit
      }
      static _GenerateLimitMessage(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const MW = wW._LogLimitOutputs[WW];
        if (!MW || !wW.MessageLimitReached) return;
        const CW = this._Levels[RW];
        MW.current === MW.limit && wW[CW.name](wW.MessageLimitReached.replace(/%LIMIT%/g, "" + MW.limit).replace(/%TYPE%/g, CW.name ?? ""))
      }
      static _AddLogEntry(WW) {
        wW._LogCache = WW + wW._LogCache, wW.OnNewCacheEntry && wW.OnNewCacheEntry(WW)
      }
      static _FormatMessage(WW) {
        const RW = WW => WW < 10 ? "0" + WW : "" + WW,
          MW = new Date;
        return "[" + RW(MW.getHours()) + ":" + RW(MW.getMinutes()) + ":" + RW(MW.getSeconds()) + "]: " + WW
      }
      static _LogDisabled(WW, RW) {}
      static _LogEnabled() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          RW = arguments.length > 1 ? arguments[1] : void 0,
          MW = arguments.length > 2 ? arguments[2] : void 0;
        const CW = Array.isArray(RW) ? RW[0] : RW;
        if (void 0 !== MW && !wW._CheckLimit(CW, MW)) return;
        const zR = wW._FormatMessage(CW),
          AW = this._Levels[WW],
          bR = Array.isArray(RW) ? RW.slice(1) : [];
        AW.logFunc && AW.logFunc("BJS - " + zR, ...bR);
        const yR = `<div style='color:${AW.color}'>${zR}</div><br>`;
        wW._AddLogEntry(yR), wW._GenerateLimitMessage(CW, WW)
      }
      static get LogCache() {
        return wW._LogCache
      }
      static ClearLogCache() {
        wW._LogCache = "", wW._LogLimitOutputs = {}, wW.errorsCount = 0
      }
      static set LogLevels(WW) {
        wW.Log = wW._LogDisabled, wW.Warn = wW._LogDisabled, wW.Error = wW._LogDisabled;
        const RW = [wW.MessageLogLevel, wW.WarningLogLevel, wW.ErrorLogLevel];
        for (const MW of RW)
          if ((WW & MW) === MW) {
            const WW = this._Levels[MW];
            wW[WW.name] = wW._LogEnabled.bind(wW, MW)
          }
      }
    }
    wW.NoneLogLevel = 0, wW.MessageLogLevel = 1, wW.WarningLogLevel = 2, wW.ErrorLogLevel = 4, wW.AllLogLevel = 7, wW.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", wW._LogCache = "", wW._LogLimitOutputs = {}, wW._Levels = [{}, {
      color: "white",
      logFunc: console.log,
      name: "Log"
    }, {
      color: "orange",
      logFunc: console.warn,
      name: "Warn"
    }, {}, {
      color: "red",
      logFunc: console.error,
      name: "Error"
    }], wW.errorsCount = 0, wW.Log = wW._LogEnabled.bind(wW, wW.MessageLogLevel), wW.Warn = wW._LogEnabled.bind(wW, wW.WarningLogLevel), wW.Error = wW._LogEnabled.bind(wW, wW.ErrorLogLevel)
  },
  36755: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => AW
    });
    var wW = MW(35324),
      CW = MW(35353),
      zR = MW(36716);
    class AW {
      constructor() {
        this.direction1 = new wW.q(0, 1, 0), this.direction2 = new wW.q(0, 1, 0), this.minEmitBox = new wW.q(-.5, -.5, -.5), this.maxEmitBox = new wW.q(.5, .5, .5)
      }
      startDirectionFunction(WW, RW, MW, zR) {
        const AW = (0, CW.RandomRange)(this.direction1.x, this.direction2.x),
          bR = (0, CW.RandomRange)(this.direction1.y, this.direction2.y),
          yR = (0, CW.RandomRange)(this.direction1.z, this.direction2.z);
        if (zR) return RW.x = AW, RW.y = bR, void(RW.z = yR);
        wW.q.TransformNormalFromFloatsToRef(AW, bR, yR, WW, RW)
      }
      startPositionFunction(WW, RW, MW, zR) {
        const AW = (0, CW.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
          bR = (0, CW.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
          yR = (0, CW.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
        if (zR) return RW.x = AW, RW.y = bR, void(RW.z = yR);
        wW.q.TransformCoordinatesFromFloatsToRef(AW, bR, yR, WW, RW)
      }
      clone() {
        const WW = new AW;
        return zR.c.DeepCopy(this, WW), WW
      }
      applyToShader(WW) {
        WW.setVector3("direction1", this.direction1), WW.setVector3("direction2", this.direction2), WW.setVector3("minEmitBox", this.minEmitBox), WW.setVector3("maxEmitBox", this.maxEmitBox)
      }
      buildUniformLayout(WW) {
        WW.addUniform("direction1", 3), WW.addUniform("direction2", 3), WW.addUniform("minEmitBox", 3), WW.addUniform("maxEmitBox", 3)
      }
      getEffectDefines() {
        return "#define BOXEMITTER"
      }
      getClassName() {
        return "BoxParticleEmitter"
      }
      serialize() {
        const WW = {};
        return WW.type = this.getClassName(), WW.direction1 = this.direction1.JNW(), WW.direction2 = this.direction2.JNW(), WW.minEmitBox = this.minEmitBox.JNW(), WW.maxEmitBox = this.maxEmitBox.JNW(), WW
      }
      parse(WW) {
        wW.q.FromArrayToRef(WW.direction1, 0, this.direction1), wW.q.FromArrayToRef(WW.direction2, 0, this.direction2), wW.q.FromArrayToRef(WW.minEmitBox, 0, this.minEmitBox), wW.q.FromArrayToRef(WW.maxEmitBox, 0, this.maxEmitBox)
      }
    }
  },
  36707: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => bR,
      e: () => AW
    });
    var wW = MW(35324),
      CW = MW(35353),
      zR = MW(36716);
    class AW {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          CW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.radius = WW, this.height = RW, this.radiusRange = MW, this.directionRandomizer = CW, this._tempVector = wW.q.Zero()
      }
      startDirectionFunction(WW, RW, MW, zR, AW) {
        MW.position.subtractToRef(WW.getTranslation(), this._tempVector), this._tempVector.normalize(), wW.q.TransformNormalToRef(this._tempVector, AW, this._tempVector);
        const bR = (0, CW.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
        let yR = Math.atan2(this._tempVector.x, this._tempVector.z);
        yR += (0, CW.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = bR, this._tempVector.x = Math.sin(yR), this._tempVector.z = Math.cos(yR), this._tempVector.normalize(), zR ? RW.hyW(this._tempVector) : wW.q.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, WW, RW)
      }
      startPositionFunction(WW, RW, MW, zR) {
        const AW = (0, CW.RandomRange)(-this.height / 2, this.height / 2),
          bR = (0, CW.RandomRange)(0, 2 * Math.PI),
          yR = (0, CW.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
          NW = Math.sqrt(yR) * this.radius,
          eW = NW * Math.cos(bR),
          BW = NW * Math.sin(bR);
        zR ? RW.nzW(eW, AW, BW) : wW.q.TransformCoordinatesFromFloatsToRef(eW, AW, BW, WW, RW)
      }
      clone() {
        const WW = new AW(this.radius, this.directionRandomizer);
        return zR.c.DeepCopy(this, WW), WW
      }
      applyToShader(WW) {
        WW.setFloat("radius", this.radius), WW.setFloat("height", this.height), WW.setFloat("radiusRange", this.radiusRange), WW.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(WW) {
        WW.addUniform("radius", 1), WW.addUniform("height", 1), WW.addUniform("radiusRange", 1), WW.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderParticleEmitter"
      }
      serialize() {
        const WW = {};
        return WW.type = this.getClassName(), WW.radius = this.radius, WW.height = this.height, WW.radiusRange = this.radiusRange, WW.directionRandomizer = this.directionRandomizer, WW
      }
      parse(WW) {
        this.radius = WW.radius, this.height = WW.height, this.radiusRange = WW.radiusRange, this.directionRandomizer = WW.directionRandomizer
      }
    }
    class bR extends AW {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          CW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new wW.q(0, 1, 0),
          zR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new wW.q(0, 1, 0);
        super(WW, RW, MW), this.direction1 = CW, this.direction2 = zR
      }
      startDirectionFunction(WW, RW, MW, zR) {
        const AW = (0, CW.RandomRange)(this.direction1.x, this.direction2.x),
          bR = (0, CW.RandomRange)(this.direction1.y, this.direction2.y),
          yR = (0, CW.RandomRange)(this.direction1.z, this.direction2.z);
        zR ? RW.nzW(AW, bR, yR) : wW.q.TransformNormalFromFloatsToRef(AW, bR, yR, WW, RW)
      }
      clone() {
        const WW = new bR(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
        return zR.c.DeepCopy(this, WW), WW
      }
      applyToShader(WW) {
        WW.setFloat("radius", this.radius), WW.setFloat("height", this.height), WW.setFloat("radiusRange", this.radiusRange), WW.setVector3("direction1", this.direction1), WW.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(WW) {
        WW.addUniform("radius", 1), WW.addUniform("height", 1), WW.addUniform("radiusRange", 1), WW.addUniform("direction1", 3), WW.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER\n#define DIRECTEDCYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderDirectedParticleEmitter"
      }
      serialize() {
        const WW = super.serialize();
        return WW.direction1 = this.direction1.JNW(), WW.direction2 = this.direction2.JNW(), WW
      }
      parse(WW) {
        super.parse(WW), wW.q.FromArrayToRef(WW.direction1, 0, this.direction1), wW.q.FromArrayToRef(WW.direction2, 0, this.direction2)
      }
    }
  },
  36811: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => BW
    });
    const wW = .5 * (Math.sqrt(3) - 1),
      CW = (3 - Math.sqrt(3)) / 6,
      zR = 1 / 3,
      AW = 1 / 6,
      bR = (Math.sqrt(5) - 1) / 4,
      yR = (5 - Math.sqrt(5)) / 20,
      NW = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
      eW = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]);
    const BW = class {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
        const RW = "function" == typeof WW ? WW : function(WW) {
          let RW = 0,
            MW = 0,
            wW = 0,
            CW = 1;
          const zR = function() {
            let WW = 4022871197;
            return function(RW) {
              RW = RW.toString();
              for (let MW = 0; MW < RW.length; MW++) {
                WW += RW.charCodeAt(MW);
                let wW = .02519603282416938 * WW;
                WW = wW >>> 0, wW -= WW, wW *= WW, WW = wW >>> 0, wW -= WW, WW += 4294967296 * wW
              }
              return 2.3283064365386963e-10 * (WW >>> 0)
            }
          }();
          RW = zR(" "), MW = zR(" "), wW = zR(" "), RW -= zR(WW), RW < 0 && (RW += 1);
          MW -= zR(WW), MW < 0 && (MW += 1);
          wW -= zR(WW), wW < 0 && (wW += 1);
          return function() {
            const WW = 2091639 * RW + 2.3283064365386963e-10 * CW;
            return RW = MW, MW = wW, wW = WW - (CW = 0 | WW)
          }
        }(WW);
        this.p = function(WW) {
          const RW = new Uint8Array(256);
          for (let MW = 0; MW < 256; MW++) RW[MW] = MW;
          for (let MW = 0; MW < 255; MW++) {
            const wW = MW + ~~(WW() * (256 - MW)),
              CW = RW[MW];
            RW[MW] = RW[wW], RW[wW] = CW
          }
          return RW
        }(RW), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
        for (let MW = 0; MW < 512; MW++) this.perm[MW] = this.p[255 & MW], this.permMod12[MW] = this.perm[MW] % 12
      }
      noise2D(WW, RW) {
        const MW = this.permMod12,
          zR = this.perm;
        let AW = 0,
          bR = 0,
          yR = 0;
        const eW = (WW + RW) * wW,
          BW = Math.floor(WW + eW),
          tR = Math.floor(RW + eW),
          TW = (BW + tR) * CW,
          gR = WW - (BW - TW),
          iR = RW - (tR - TW);
        let YW, JW;
        gR > iR ? (YW = 1, JW = 0) : (YW = 0, JW = 1);
        const PW = gR - YW + CW,
          IW = iR - JW + CW,
          oW = gR - 1 + 2 * CW,
          lW = iR - 1 + 2 * CW,
          FW = 255 & BW,
          fW = 255 & tR;
        let QW = .5 - gR * gR - iR * iR;
        if (QW >= 0) {
          const WW = 3 * MW[FW + zR[fW]];
          QW *= QW, AW = QW * QW * (NW[WW] * gR + NW[WW + 1] * iR)
        }
        let rR = .5 - PW * PW - IW * IW;
        if (rR >= 0) {
          const WW = 3 * MW[FW + YW + zR[fW + JW]];
          rR *= rR, bR = rR * rR * (NW[WW] * PW + NW[WW + 1] * IW)
        }
        let cR = .5 - oW * oW - lW * lW;
        if (cR >= 0) {
          const WW = 3 * MW[FW + 1 + zR[fW + 1]];
          cR *= cR, yR = cR * cR * (NW[WW] * oW + NW[WW + 1] * lW)
        }
        return 70 * (AW + bR + yR)
      }
      noise3D(WW, RW, MW) {
        const wW = this.permMod12,
          CW = this.perm;
        let bR, yR, eW, BW;
        const tR = (WW + RW + MW) * zR,
          TW = Math.floor(WW + tR),
          gR = Math.floor(RW + tR),
          iR = Math.floor(MW + tR),
          YW = (TW + gR + iR) * AW,
          JW = WW - (TW - YW),
          PW = RW - (gR - YW),
          IW = MW - (iR - YW);
        let oW, lW, FW, fW, QW, rR;
        JW >= PW ? PW >= IW ? (oW = 1, lW = 0, FW = 0, fW = 1, QW = 1, rR = 0) : JW >= IW ? (oW = 1, lW = 0, FW = 0, fW = 1, QW = 0, rR = 1) : (oW = 0, lW = 0, FW = 1, fW = 1, QW = 0, rR = 1) : PW < IW ? (oW = 0, lW = 0, FW = 1, fW = 0, QW = 1, rR = 1) : JW < IW ? (oW = 0, lW = 1, FW = 0, fW = 0, QW = 1, rR = 1) : (oW = 0, lW = 1, FW = 0, fW = 1, QW = 1, rR = 0);
        const cR = JW - oW + AW,
          XW = PW - lW + AW,
          jR = IW - FW + AW,
          kR = JW - fW + 2 * AW,
          aR = PW - QW + 2 * AW,
          sW = IW - rR + 2 * AW,
          dW = JW - 1 + .5,
          pW = PW - 1 + .5,
          hW = IW - 1 + .5,
          UW = 255 & TW,
          EW = 255 & gR,
          VW = 255 & iR;
        let mR = .6 - JW * JW - PW * PW - IW * IW;
        if (mR < 0) bR = 0;
        else {
          const WW = 3 * wW[UW + CW[EW + CW[VW]]];
          mR *= mR, bR = mR * mR * (NW[WW] * JW + NW[WW + 1] * PW + NW[WW + 2] * IW)
        }
        let xR = .6 - cR * cR - XW * XW - jR * jR;
        if (xR < 0) yR = 0;
        else {
          const WW = 3 * wW[UW + oW + CW[EW + lW + CW[VW + FW]]];
          xR *= xR, yR = xR * xR * (NW[WW] * cR + NW[WW + 1] * XW + NW[WW + 2] * jR)
        }
        let vR = .6 - kR * kR - aR * aR - sW * sW;
        if (vR < 0) eW = 0;
        else {
          const WW = 3 * wW[UW + fW + CW[EW + QW + CW[VW + rR]]];
          vR *= vR, eW = vR * vR * (NW[WW] * kR + NW[WW + 1] * aR + NW[WW + 2] * sW)
        }
        let KW = .6 - dW * dW - pW * pW - hW * hW;
        if (KW < 0) BW = 0;
        else {
          const WW = 3 * wW[UW + 1 + CW[EW + 1 + CW[VW + 1]]];
          KW *= KW, BW = KW * KW * (NW[WW] * dW + NW[WW + 1] * pW + NW[WW + 2] * hW)
        }
        return 32 * (bR + yR + eW + BW)
      }
      noise4D(WW, RW, MW, wW) {
        const CW = this.perm;
        let zR, AW, NW, BW, tR;
        const TW = (WW + RW + MW + wW) * bR,
          gR = Math.floor(WW + TW),
          iR = Math.floor(RW + TW),
          YW = Math.floor(MW + TW),
          JW = Math.floor(wW + TW),
          PW = (gR + iR + YW + JW) * yR,
          IW = WW - (gR - PW),
          oW = RW - (iR - PW),
          lW = MW - (YW - PW),
          FW = wW - (JW - PW);
        let fW = 0,
          QW = 0,
          rR = 0,
          cR = 0;
        IW > oW ? fW++ : QW++, IW > lW ? fW++ : rR++, IW > FW ? fW++ : cR++, oW > lW ? QW++ : rR++, oW > FW ? QW++ : cR++, lW > FW ? rR++ : cR++;
        const XW = fW >= 3 ? 1 : 0,
          jR = QW >= 3 ? 1 : 0,
          kR = rR >= 3 ? 1 : 0,
          aR = cR >= 3 ? 1 : 0,
          sW = fW >= 2 ? 1 : 0,
          dW = QW >= 2 ? 1 : 0,
          pW = rR >= 2 ? 1 : 0,
          hW = cR >= 2 ? 1 : 0,
          UW = fW >= 1 ? 1 : 0,
          EW = QW >= 1 ? 1 : 0,
          VW = rR >= 1 ? 1 : 0,
          mR = cR >= 1 ? 1 : 0,
          xR = IW - XW + yR,
          vR = oW - jR + yR,
          KW = lW - kR + yR,
          uW = FW - aR + yR,
          OW = IW - sW + 2 * yR,
          nW = oW - dW + 2 * yR,
          GW = lW - pW + 2 * yR,
          LW = FW - hW + 2 * yR,
          HW = IW - UW + 3 * yR,
          DW = oW - EW + 3 * yR,
          qR = lW - VW + 3 * yR,
          ZW = FW - mR + 3 * yR,
          SW = IW - 1 + 4 * yR,
          WR = oW - 1 + 4 * yR,
          RR = lW - 1 + 4 * yR,
          MR = FW - 1 + 4 * yR,
          wR = 255 & gR,
          CR = 255 & iR,
          zM = 255 & YW,
          AR = 255 & JW;
        let bM = .6 - IW * IW - oW * oW - lW * lW - FW * FW;
        if (bM < 0) zR = 0;
        else {
          const WW = CW[wR + CW[CR + CW[zM + CW[AR]]]] % 32 * 4;
          bM *= bM, zR = bM * bM * (eW[WW] * IW + eW[WW + 1] * oW + eW[WW + 2] * lW + eW[WW + 3] * FW)
        }
        let yM = .6 - xR * xR - vR * vR - KW * KW - uW * uW;
        if (yM < 0) AW = 0;
        else {
          const WW = CW[wR + XW + CW[CR + jR + CW[zM + kR + CW[AR + aR]]]] % 32 * 4;
          yM *= yM, AW = yM * yM * (eW[WW] * xR + eW[WW + 1] * vR + eW[WW + 2] * KW + eW[WW + 3] * uW)
        }
        let NR = .6 - OW * OW - nW * nW - GW * GW - LW * LW;
        if (NR < 0) NW = 0;
        else {
          const WW = CW[wR + sW + CW[CR + dW + CW[zM + pW + CW[AR + hW]]]] % 32 * 4;
          NR *= NR, NW = NR * NR * (eW[WW] * OW + eW[WW + 1] * nW + eW[WW + 2] * GW + eW[WW + 3] * LW)
        }
        let eR = .6 - HW * HW - DW * DW - qR * qR - ZW * ZW;
        if (eR < 0) BW = 0;
        else {
          const WW = CW[wR + UW + CW[CR + EW + CW[zM + VW + CW[AR + mR]]]] % 32 * 4;
          eR *= eR, BW = eR * eR * (eW[WW] * HW + eW[WW + 1] * DW + eW[WW + 2] * qR + eW[WW + 3] * ZW)
        }
        let BR = .6 - SW * SW - WR * WR - RR * RR - MR * MR;
        if (BR < 0) tR = 0;
        else {
          const WW = CW[wR + 1 + CW[CR + 1 + CW[zM + 1 + CW[AR + 1]]]] % 32 * 4;
          BR *= BR, tR = BR * BR * (eW[WW] * SW + eW[WW + 1] * WR + eW[WW + 2] * RR + eW[WW + 3] * MR)
        }
        return 27 * (zR + AW + NW + BW + tR)
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);