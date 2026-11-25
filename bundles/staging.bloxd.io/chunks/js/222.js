/*! For license information please see wp3j0a.222.6279b7ed.chunk.js.LICENSE.txt */
export const id = 222;
export const ids = [222];
export const modules = {
  39959: (GG, bG, ZG) => {
    GG.exports = SG;
    var wG = ZG(364);

    function SG(GG, bG) {
      if (!(this instanceof SG)) return new SG(GG, bG);
      var ZG = wG.create();
      wG.add(ZG, GG, bG), this.base = wG.min(wG.create(), GG, ZG), this.vec = wG.clone(bG), this.max = wG.max(wG.create(), GG, ZG), this.mag = wG.length(this.vec)
    }
    var LG = SG.prototype;
    LG.width = function() {
      return this.vec[0]
    }, LG.height = function() {
      return this.vec[1]
    }, LG.depth = function() {
      return this.vec[2]
    }, LG.x0 = function() {
      return this.base[0]
    }, LG.y0 = function() {
      return this.base[1]
    }, LG.z0 = function() {
      return this.base[2]
    }, LG.x1 = function() {
      return this.max[0]
    }, LG.y1 = function() {
      return this.max[1]
    }, LG.z1 = function() {
      return this.max[2]
    }, LG.translate = function(GG) {
      return wG.add(this.max, this.max, GG), wG.add(this.base, this.base, GG), this
    }, LG.setPosition = function(GG) {
      return wG.add(this.max, GG, this.vec), wG.copy(this.base, GG), this
    }, LG.expand = function(GG) {
      var bG = wG.create(),
        ZG = wG.create();
      return wG.max(bG, GG.max, this.max), wG.min(ZG, GG.base, this.base), wG.subtract(bG, bG, ZG), new SG(ZG, bG)
    }, LG.intersects = function(GG) {
      return !(GG.base[0] > this.max[0]) && (!(GG.base[1] > this.max[1]) && (!(GG.base[2] > this.max[2]) && (!(GG.max[0] < this.base[0]) && (!(GG.max[1] < this.base[1]) && !(GG.max[2] < this.base[2])))))
    }, LG.touches = function(GG) {
      var bG = this.union(GG);
      return null !== bG && (0 == bG.width() || 0 == bG.height() || 0 == bG.depth())
    }, LG.union = function(GG) {
      if (!this.intersects(GG)) return null;
      var bG = Math.max(GG.base[0], this.base[0]),
        ZG = Math.max(GG.base[1], this.base[1]),
        wG = Math.max(GG.base[2], this.base[2]);
      return new SG([bG, ZG, wG], [Math.min(GG.max[0], this.max[0]) - bG, Math.min(GG.max[1], this.max[1]) - ZG, Math.min(GG.max[2], this.max[2]) - wG])
    }
  },
  39952: GG => {
    GG.exports = function(GG, bG, ZG, wG, SG, LG) {
      var yG = +bG[0],
        kG = +bG[1],
        UG = +bG[2],
        YG = +ZG[0],
        VG = +ZG[1],
        pG = +ZG[2],
        fG = Math.sqrt(YG * YG + VG * VG + pG * pG);
      if (0 === fG) throw new Error("Can't raycast along a zero vector");
      return function(GG, bG, ZG, wG, SG, LG, yG, kG, UG, YG) {
        for (var VG = 0, pG = Math.floor, fG = 0 | pG(bG), QG = 0 | pG(ZG), KG = 0 | pG(wG), hG = SG > 0 ? 1 : -1, dG = LG > 0 ? 1 : -1, JG = yG > 0 ? 1 : -1, rG = Math.abs(1 / SG), zG = Math.abs(1 / LG), EG = Math.abs(1 / yG), oG = rG < 1 / 0 ? rG * (hG > 0 ? fG + 1 - bG : bG - fG) : 1 / 0, XG = zG < 1 / 0 ? zG * (dG > 0 ? QG + 1 - ZG : ZG - QG) : 1 / 0, uG = EG < 1 / 0 ? EG * (JG > 0 ? KG + 1 - wG : wG - KG) : 1 / 0, iG = -1; VG <= kG;) {
          var CG = GG(fG, QG, KG);
          if (CG) return UG && (UG[0] = bG + VG * SG, UG[1] = ZG + VG * LG, UG[2] = wG + VG * yG), YG && (YG[0] = YG[1] = YG[2] = 0, 0 === iG && (YG[0] = -hG), 1 === iG && (YG[1] = -dG), 2 === iG && (YG[2] = -JG)), CG;
          oG < XG ? oG < uG ? (fG += hG, VG = oG, oG += rG, iG = 0) : (KG += JG, VG = uG, uG += EG, iG = 2) : XG < uG ? (QG += dG, VG = XG, XG += zG, iG = 1) : (KG += JG, VG = uG, uG += EG, iG = 2)
        }
        return UG && (UG[0] = bG + VG * SG, UG[1] = ZG + VG * LG, UG[2] = wG + VG * yG), YG && (YG[0] = YG[1] = YG[2] = 0), 0
      }(GG, yG, kG, UG, YG /= fG, VG /= fG, pG /= fG, wG = "undefined" === typeof wG ? 64 : +wG, SG, LG)
    }
  },
  39522: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => kG,
      d: () => LG
    });
    var wG = ZG(4105);
    let SG = null;

    function LG(GG) {
      return null !== SG && GG === SG
    }

    function yG() {
      this.bD = !1, this.stopPropagation = !1, this.ZD = !1, this.disabled = !1
    }
    class kG {
      constructor(GG, bG) {
        this.version = "0.7.0";
        var ZG = Object.assign({}, new yG, bG || {});
        this.element = GG || document, this.bD = !!ZG.bD, this.stopPropagation = !!ZG.stopPropagation, this.ZD = !!ZG.ZD, this.disabled = !!ZG.disabled, this.filterEvents = (GG, bG) => !0, this.ignoreEvent = GG => !1, this.down = new wG.EventEmitter, this.up = new wG.EventEmitter, this.state = {}, this.pD = {
          dx: 0,
          dy: 0,
          ibG: 0,
          CbG: 0,
          WbG: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? YG(this) : document.addEventListener("DOMContentLoaded", (GG => {
          YG(this)
        }), {
          once: !0
        })
      }
      bind(GG) {
        for (var bG = arguments.length, ZG = new Array(bG > 1 ? bG - 1 : 0), wG = 1; wG < bG; wG++) ZG[wG - 1] = arguments[wG];
        ZG.forEach((bG => {
          var ZG = this._keyBindmap[bG] || [];
          ZG.includes(GG) || (ZG.push(GG), this._keyBindmap[bG] = ZG)
        })), this.state[GG] = !!this.state[GG], this.pressCount[GG] = this.pressCount[GG] || 0, this.releaseCount[GG] = this.releaseCount[GG] || 0
      }
      unbind(GG) {
        for (var bG in this._keyBindmap) {
          var ZG = this._keyBindmap[bG],
            wG = ZG.indexOf(GG);
          wG > -1 && ZG.splice(wG, 1)
        }
      }
      getBindings() {
        var GG = {};
        for (var bG in this._keyBindmap) {
          this._keyBindmap[bG].forEach((ZG => {
            GG[ZG] = GG[ZG] || [], GG[ZG].push(bG)
          }))
        }
        return GG
      }
      Tp() {
        UG(this.pD), UG(this.pressCount), UG(this.releaseCount)
      }
    }

    function UG(GG) {
      for (var bG in GG) GG[bG] = 0
    }

    function YG(GG) {
      window.addEventListener("keydown", dG.bind(null, GG, !0), !1), window.addEventListener("keyup", dG.bind(null, GG, !1), !1);
      var bG = {
        passive: !0
      };
      GG.element.addEventListener("touchstart", QG.bind(void 0, GG), {
        passive: !1
      }), GG.element.addEventListener("touchend", hG.bind(void 0, GG), bG), GG.element.addEventListener("mousedown", JG.bind(null, GG, !0), bG), window.document.addEventListener("mouseup", JG.bind(null, GG, !1), bG), GG.element.addEventListener("touchmove", rG.bind(null, GG), bG), GG.element.addEventListener("mousemove", rG.bind(null, GG), bG), window.PointerEvent, GG.element.addEventListener("wheel", zG.bind(null, GG), bG), GG.element.addEventListener("contextmenu", EG.bind(null, GG), !1), window.addEventListener("blur", uG.bind(null, GG), !1)
    }
    var VG = 0,
      pG = 0,
      fG = null;

    function QG(GG, bG) {
      bG.preventDefault(), KG(bG)
    }

    function KG(GG) {
      let bG = !1;
      for (let ZG = 0; ZG < GG.touches.length; ++ZG)
        if (GG.touches[ZG].identifier === fG) {
          bG = !0;
          break
        } if (!bG) {
        const bG = GG.changedTouches[0];
        VG = bG.clientX, pG = bG.clientY, fG = bG.identifier
      }
    }

    function hG(GG, bG) {
      for (var ZG = bG.changedTouches, wG = 0; wG < ZG.length; ++wG) ZG[wG].identifier === fG && (fG = null)
    }

    function dG(GG, bG, ZG) {
      if (!GG.ignoreEvent(ZG)) try {
        iG(GG, ZG), bG && ZG.isTrusted && !ZG.repeat && GG._keyStates[ZG.code] && CG(GG, ZG.code)
      } finally {
        WG(ZG.code, bG, GG, ZG)
      }
    }

    function JG(GG, bG, ZG) {
      if (!GG.ignoreEvent(ZG)) try {
        iG(GG, ZG)
      } finally {
        ! function(GG, bG, ZG) {
          if ("pointerId" in ZG)
            if (bG) {
              if (null !== GG._touches.currID) return;
              GG._touches.currID = ZG.pointerId
            } else {
              if (GG._touches.currID !== ZG.pointerId) return;
              GG._touches.currID = null
            } var wG = "button" in ZG ? ZG.button + 1 : 1;
          WG("Mouse" + wG, bG, GG, ZG)
        }(GG, bG, ZG)
      }
    }

    function rG(GG, bG) {
      var ZG = bG.movementX || bG.mozMovementX || 0,
        wG = bG.movementY || bG.mozMovementY || 0;
      if (bG.touches && 0 === (ZG | wG)) {
        var SG = function(GG) {
          KG(GG);
          for (let bG = 0; bG < GG.changedTouches.length; ++bG)
            if (GG.changedTouches[bG].identifier == fG) {
              const ZG = GG.changedTouches[bG],
                wG = [ZG.clientX - VG, ZG.clientY - pG];
              return VG = ZG.clientX, pG = ZG.clientY, wG
            } return console.error(`Did not find touch id ${fG}`), [0, 0]
        }(bG);
        ZG = SG[0], wG = SG[1]
      }
      GG.pD.dx += ZG, GG.pD.dy += wG
    }

    function zG(GG, bG) {
      iG(GG, bG);
      var ZG = 1;
      switch (bG.deltaMode) {
        case 0:
          ZG = 1;
          break;
        case 1:
          ZG = 12;
          break;
        case 2:
          ZG = GG.element.clientHeight || window.innerHeight
      }
      GG.pD.ibG += (bG.deltaX || 0) * ZG, GG.pD.CbG += (bG.deltaY || 0) * ZG, GG.pD.WbG += (bG.deltaZ || 0) * ZG
    }

    function EG(GG, bG) {
      if (!GG.ZD) return bG.preventDefault(), !1
    }
    var oG = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function XG(GG, bG) {
      return !!GG[oG[bG]] || ("AltRight" === bG || "ControlLeft" === bG) && "function" === typeof GG.getModifierState && !0 === GG.getModifierState("AltGraph")
    }

    function uG(GG, bG) {
      for (var ZG in GG._modifiersHeldThroughBlur = {}, oG) GG._keyStates[ZG] && (GG._modifiersHeldThroughBlur[ZG] = !0);
      bG && bG.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (GG) {
          return !0
        }
      }() && (clearTimeout(GG._blurRelease), GG._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var bG in GG._modifiersHeldThroughBlur = {}, GG._keyStates) GG._keyStates[bG] && !/^Mouse\d/.test(bG) && CG(GG, bG)
      }), 0))
    }

    function iG(GG, bG) {
      var ZG = GG._modifiersHeldThroughBlur;
      if (ZG && bG.isTrusted && document.hasFocus())
        for (var wG in ZG) delete ZG[wG], GG._keyStates[wG] && wG !== bG.code && (XG(bG, wG) || CG(GG, wG))
    }

    function CG(GG, bG) {
      const ZG = {
          code: bG,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        wG = SG;
      SG = ZG;
      try {
        WG(bG, !1, GG, ZG)
      } finally {
        SG = wG
      }
    }

    function WG(GG, bG, ZG, wG) {
      var SG = ZG._keyBindmap[GG];
      SG && (mG(ZG._keyStates[GG], bG) && (ZG._keyStates[GG] = bG, SG.forEach((GG => {
        (!ZG.filterEvents || ZG.filterEvents(wG, GG)) && function(GG, bG, ZG, wG) {
          var SG = bG ? ZG.pressCount : ZG.releaseCount;
          SG[GG] = (SG[GG] || 0) + 1;
          var LG = ZG._bindPressCount[GG] || 0;
          (LG += bG ? 1 : -1) < 0 && (LG = 0);
          ZG._bindPressCount[GG] = LG;
          var yG = ZG.state[GG];
          if (mG(yG, LG)) {
            ZG.state[GG] = LG > 0;
            var kG = bG ? ZG.down : ZG.up;
            ZG.disabled || kG.emit(GG, wG)
          }
        }(GG, bG, ZG, wG)
      }))), "button" in wG || (ZG.bD && !wG.defaultPrevented && wG.preventDefault(), ZG.stopPropagation && wG.stopPropagation()))
    }

    function mG(GG, bG) {
      return GG ? !bG : bG
    }
  },
  36874: (GG, bG) => {
    function ZG(GG) {
      if (GG && "object" === typeof GG) {
        var bG = GG.which || GG.keyCode || GG.charCode;
        bG && (GG = bG)
      }
      if ("number" === typeof GG) return yG[GG];
      var ZG, LG = String(GG);
      return (ZG = wG[LG.toLowerCase()]) ? ZG : (ZG = SG[LG.toLowerCase()]) || (1 === LG.length ? LG.charCodeAt(0) : void 0)
    }
    ZG.isEventKey = function(GG, bG) {
      if (GG && "object" === typeof GG) {
        var ZG = GG.which || GG.keyCode || GG.charCode;
        if (null === ZG || void 0 === ZG) return !1;
        if ("string" === typeof bG) {
          var LG;
          if (LG = wG[bG.toLowerCase()]) return LG === ZG;
          if (LG = SG[bG.toLowerCase()]) return LG === ZG
        } else if ("number" === typeof bG) return bG === ZG;
        return !1
      }
    };
    var wG = (bG = GG.exports = ZG).code = bG.codes = {
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
      SG = bG.aliases = {
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
    for (LG = 97; LG < 123; LG++) wG[String.fromCharCode(LG)] = LG - 32;
    for (var LG = 48; LG < 58; LG++) wG[LG - 48] = LG;
    for (LG = 1; LG < 13; LG++) wG["f" + LG] = LG + 111;
    for (LG = 0; LG < 10; LG++) wG["numpad " + LG] = LG + 96;
    var yG = bG.names = bG.title = {};
    for (LG in wG) yG[wG[LG]] = LG;
    for (var kG in SG) wG[kG] = SG[kG]
  },
  39942: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => wG
    });
    class wG {
      constructor() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        this.Jq = !1, this.zq = !1, this.Fv = 30, this.wq = 0, this.oq = 100, this.gd = !1, this.fullscreen = !1, this.gJ = function(GG) {}, this.uq = function(GG, bG, ZG) {}, this.Fq = function() {}, this.PJ = function() {}, this.mq = function() {}, this.onFullscreenChanged = function() {}, this.onPointerLockError = function(GG) {}, this._data = new SG(bG),
          function(GG) {
            if ("loading" === document.readyState) {
              var bG = () => {
                document.removeEventListener("readystatechange", bG), GG()
              };
              document.addEventListener("readystatechange", bG)
            } else setTimeout(GG, 0)
          }((() => {
            ! function(GG) {
              var bG = GG._data,
                ZG = bG.nowObject.now();
              bG.lastTickStarted = ZG, bG.lastFrameStarted = ZG, bG.lastRenderStarted = ZG, bG.frameCB = () => function(GG) {
                var bG = GG._data;
                requestAnimationFrame(bG.frameCB), kG(GG);
                var ZG = bG.nowObject.now(),
                  wG = ZG - bG.lastFrameStarted;
                if (bG.lastFrameStarted = ZG, GG.wq > 0) {
                  bG.renderAccum += wG;
                  var SG = 1e3 / GG.wq;
                  if (bG.renderAccum < SG) return;
                  bG.renderAccum -= SG, bG.renderAccum > SG && (bG.renderAccum = SG)
                }
                var LG = ZG - bG.lastRenderStarted;
                bG.lastRenderStarted = ZG;
                var yG = 1e3 / GG.Fv,
                  UG = (ZG - bG.lastTickStarted) / yG;
                UG < 0 && (UG = 0);
                GG.uq(LG, UG, yG), setTimeout(kG, 0, GG, !0)
              }(GG), bG.intervalCB = () => kG(GG), requestAnimationFrame(bG.frameCB), bG.pollTime > 0 && (bG.intervalID = setInterval(bG.intervalCB, Math.max(bG.pollTime, 1e3 / GG.Fv / 2)))
            }(this),
            function(GG, bG) {
              if (!bG) return;
              var ZG = !1,
                wG = !1,
                SG = GG => {
                  if (!!GG !== (ZG = bG === document.pointerLockElement))
                    if (GG) {
                      var wG = bG.requestPointerLock();
                      wG && wG.catch && wG.catch((GG => {}))
                    } else document.exitPointerLock()
                },
                LG = GG => {
                  !!GG !== (wG = bG === document.fullscreenElement) && (GG ? bG.requestFullscreen ? bG.requestFullscreen() : bG.webkitRequestFullscreen && bG.webkitRequestFullscreen() : document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen())
                };
              document.addEventListener("pointerlockchange", (wG => {
                ZG = bG === document.pointerLockElement, GG.mq(ZG)
              })), document.addEventListener("fullscreenchange", (ZG => {
                wG = bG === document.fullscreenElement, GG.onFullscreenChanged(wG)
              })), document.addEventListener("pointerlockerror", (wG => {
                ZG = bG === document.pointerLockElement, GG.onPointerLockError(wG)
              })), Object.defineProperty(GG, "gd", {
                get: () => ZG,
                set: SG
              }), Object.defineProperty(GG, "fullscreen", {
                get: () => wG,
                set: LG
              }), bG.addEventListener("click", (bG => {
                GG.Jq && SG(!0), GG.zq && LG(!0)
              }));
              var yG = () => GG.PJ();
              if (window.ResizeObserver) {
                new ResizeObserver(yG).observe(bG)
              } else window.addEventListener("resize", yG)
            }(this, GG), this.Fq()
          }))
      }
    }

    function SG() {
      let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      this.nowObject = performance || Date, this.pollTime = GG, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
    }
    var LG = 3,
      yG = 20;

    function kG(GG) {
      for (var bG = GG._data, ZG = 1e3 / GG.Fv, wG = bG.nowObject.now() + yG, SG = 0; bG.nowObject.now() >= bG.lastTickStarted + ZG && bG.nowObject.now() < wG && ++SG <= LG;) GG.gJ(ZG), bG.lastTickStarted += ZG;
      var kG = 5 * (ZG + 5),
        UG = bG.nowObject.now();
      if (UG - bG.lastTickStarted > kG)
        for (; UG >= bG.lastTickStarted + ZG;) bG.lastTickStarted += ZG
    }
  },
  37052: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => yG
    });
    var wG = ZG(51);
    const SG = wG.useLayoutEffect;
    const LG = function(GG) {
      var bG = (0, wG.useRef)(GG);
      return SG((function() {
        bG.current = GG
      })), bG
    };
    var yG = function(GG) {
      var bG = LG(GG);
      (0, wG.useEffect)((function() {
        var GG = function(GG) {
          var ZG;
          if (null != bG.current && (ZG = bG.current(GG)), GG.defaultPrevented && (GG.returnValue = ""), "string" === typeof ZG) return GG.returnValue = ZG, ZG
        };
        return window.addEventListener("beforeunload", GG),
          function() {
            window.removeEventListener("beforeunload", GG)
          }
      }), [])
    }
  },
  36932: GG => {
    var bG, ZG = "undefined" !== typeof window ? window.navigator.userAgent : "",
      wG = /OS X/.test(ZG),
      SG = /Opera/.test(ZG),
      LG = !/like Gecko/.test(ZG) && !SG,
      yG = GG.exports = {
        0: wG ? "<menu>" : "<UNK>",
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
        93: wG ? "<meta>" : "<menu>",
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
        173: wG && LG ? "-" : "<volume-mute>",
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
        231: SG ? "`" : "<unicode>",
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
    for (bG = 58; bG < 65; ++bG) yG[bG] = String.fromCharCode(bG);
    for (bG = 48; bG < 58; ++bG) yG[bG] = bG - 48 + "";
    for (bG = 65; bG < 91; ++bG) yG[bG] = String.fromCharCode(bG);
    for (bG = 96; bG < 106; ++bG) yG[bG] = "<num-" + (bG - 96) + ">";
    for (bG = 112; bG < 136; ++bG) yG[bG] = "F" + (bG - 111)
  },
  39376: (GG, bG, ZG) => {
    function wG(GG, bG, ZG, wG, SG) {
      var LG = {};
      return Object.keys(wG).forEach((function(GG) {
        LG[GG] = wG[GG]
      })), LG.enumerable = !!LG.enumerable, LG.configurable = !!LG.configurable, ("value" in LG || LG.initializer) && (LG.writable = !0), LG = ZG.slice().reverse().reduce((function(ZG, wG) {
        return wG(GG, bG, ZG) || ZG
      }), LG), SG && void 0 !== LG.initializer && (LG.value = LG.initializer ? LG.initializer.call(SG) : void 0, LG.initializer = void 0), void 0 === LG.initializer && (Object.defineProperty(GG, bG, LG), LG = null), LG
    }
    ZG.d(bG, {
      b: () => wG
    })
  },
  39368: (GG, bG, ZG) => {
    function wG(GG, bG, ZG, wG) {
      ZG && Object.defineProperty(GG, bG, {
        enumerable: ZG.enumerable,
        configurable: ZG.configurable,
        writable: ZG.writable,
        value: ZG.initializer ? ZG.initializer.call(wG) : void 0
      })
    }
    ZG.d(bG, {
      b: () => wG
    })
  },
  39086: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => LG
    });
    var wG = ZG(39093);
    const SG = (GG, bG, ZG) => GG ? GG.getClassName && "Mesh" === GG.getClassName() ? null : !GG.getClassName || "SubMesh" !== GG.getClassName() && "PhysicsBody" !== GG.getClassName() ? GG.clone ? GG.clone() : Array.isArray(GG) ? GG.slice() : ZG && "object" === typeof GG ? {
      ...GG
    } : null : GG.clone(bG) : null;
    class LG {
      static DeepCopy(GG, bG, ZG, LG) {
        let yG = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const kG = function(GG) {
          const bG = [];
          do {
            const ZG = Object.getOwnPropertyNames(GG);
            for (const GG of ZG) - 1 === bG.indexOf(GG) && bG.push(GG)
          } while (GG = Object.getPrototypeOf(GG));
          return bG
        }(GG);
        for (const YG of kG) {
          if ("_" === YG[0] && (!LG || -1 === LG.indexOf(YG))) continue;
          if (YG.endsWith("Observable")) continue;
          if (ZG && -1 !== ZG.indexOf(YG)) continue;
          const kG = GG[YG],
            VG = typeof kG;
          if ("function" !== VG) try {
            if ("object" === VG)
              if (kG instanceof Uint8Array) bG[YG] = Uint8Array.from(kG);
              else if (kG instanceof Array) {
              if (bG[YG] = [], kG.length > 0)
                if ("object" == typeof kG[0])
                  for (let GG = 0; GG < kG.length; GG++) {
                    const ZG = SG(kG[GG], bG, yG); - 1 === bG[YG].indexOf(ZG) && bG[YG].push(ZG)
                  } else bG[YG] = kG.slice(0)
            } else bG[YG] = SG(kG, bG, yG);
            else bG[YG] = kG
          } catch (UG) {
            wG.c.Warn(UG.message)
          }
        }
      }
    }
  },
  39116: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => SG,
      h: () => LG,
      i: () => yG,
      m: () => kG
    });
    var wG = ZG(37621);
    class SG {
      constructor(GG, bG, ZG) {
        this.gradient = GG, this.color1 = bG, this.color2 = ZG
      }
      getColorToRef(GG) {
        this.color2 ? wG.d.LerpToRef(this.color1, this.color2, Math.random(), GG) : GG.oW(this.color1)
      }
    }
    class LG {
      constructor(GG, bG) {
        this.gradient = GG, this.color = bG
      }
    }
    class yG {
      constructor(GG, bG, ZG) {
        this.gradient = GG, this.factor1 = bG, this.factor2 = ZG
      }
      getFactor() {
        return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
      }
    }
    class kG {
      static GetCurrentGradient(GG, bG, ZG) {
        if (bG[0].gradient > GG) return void ZG(bG[0], bG[0], 1);
        for (let SG = 0; SG < bG.length - 1; SG++) {
          const wG = bG[SG],
            LG = bG[SG + 1];
          if (GG >= wG.gradient && GG <= LG.gradient) {
            return void ZG(wG, LG, (GG - wG.gradient) / (LG.gradient - wG.gradient))
          }
        }
        const wG = bG.length - 1;
        ZG(bG[wG], bG[wG], 1)
      }
    }
  },
  39093: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => wG
    });
    class wG {
      static _CheckLimit(GG, bG) {
        let ZG = wG._LogLimitOutputs[GG];
        return ZG ? ZG.current++ : (ZG = {
          limit: bG,
          current: 1
        }, wG._LogLimitOutputs[GG] = ZG), ZG.current <= ZG.limit
      }
      static _GenerateLimitMessage(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const ZG = wG._LogLimitOutputs[GG];
        if (!ZG || !wG.MessageLimitReached) return;
        const SG = this._Levels[bG];
        ZG.current === ZG.limit && wG[SG.name](wG.MessageLimitReached.replace(/%LIMIT%/g, "" + ZG.limit).replace(/%TYPE%/g, SG.name ?? ""))
      }
      static _AddLogEntry(GG) {
        wG._LogCache = GG + wG._LogCache, wG.OnNewCacheEntry && wG.OnNewCacheEntry(GG)
      }
      static _FormatMessage(GG) {
        const bG = GG => GG < 10 ? "0" + GG : "" + GG,
          ZG = new Date;
        return "[" + bG(ZG.getHours()) + ":" + bG(ZG.getMinutes()) + ":" + bG(ZG.getSeconds()) + "]: " + GG
      }
      static _LogDisabled(GG, bG) {}
      static _LogEnabled() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          bG = arguments.length > 1 ? arguments[1] : void 0,
          ZG = arguments.length > 2 ? arguments[2] : void 0;
        const SG = Array.isArray(bG) ? bG[0] : bG;
        if (void 0 !== ZG && !wG._CheckLimit(SG, ZG)) return;
        const LG = wG._FormatMessage(SG),
          yG = this._Levels[GG],
          kG = Array.isArray(bG) ? bG.slice(1) : [];
        yG.logFunc && yG.logFunc("BJS - " + LG, ...kG);
        const UG = `<div style='color:${yG.color}'>${LG}</div><br>`;
        wG._AddLogEntry(UG), wG._GenerateLimitMessage(SG, GG)
      }
      static get LogCache() {
        return wG._LogCache
      }
      static ClearLogCache() {
        wG._LogCache = "", wG._LogLimitOutputs = {}, wG.errorsCount = 0
      }
      static set LogLevels(GG) {
        wG.Log = wG._LogDisabled, wG.Warn = wG._LogDisabled, wG.Error = wG._LogDisabled;
        const bG = [wG.MessageLogLevel, wG.WarningLogLevel, wG.ErrorLogLevel];
        for (const ZG of bG)
          if ((GG & ZG) === ZG) {
            const GG = this._Levels[ZG];
            wG[GG.name] = wG._LogEnabled.bind(wG, ZG)
          }
      }
    }
    wG.NoneLogLevel = 0, wG.MessageLogLevel = 1, wG.WarningLogLevel = 2, wG.ErrorLogLevel = 4, wG.AllLogLevel = 7, wG.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", wG._LogCache = "", wG._LogLimitOutputs = {}, wG._Levels = [{}, {
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
    }], wG.errorsCount = 0, wG.Log = wG._LogEnabled.bind(wG, wG.MessageLogLevel), wG.Warn = wG._LogEnabled.bind(wG, wG.WarningLogLevel), wG.Error = wG._LogEnabled.bind(wG, wG.ErrorLogLevel)
  },
  39119: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => yG
    });
    var wG = ZG(37439),
      SG = ZG(37471),
      LG = ZG(39086);
    class yG {
      constructor() {
        this.direction1 = new wG.p(0, 1, 0), this.direction2 = new wG.p(0, 1, 0), this.minEmitBox = new wG.p(-.5, -.5, -.5), this.maxEmitBox = new wG.p(.5, .5, .5)
      }
      startDirectionFunction(GG, bG, ZG, LG) {
        const yG = (0, SG.RandomRange)(this.direction1.x, this.direction2.x),
          kG = (0, SG.RandomRange)(this.direction1.y, this.direction2.y),
          UG = (0, SG.RandomRange)(this.direction1.z, this.direction2.z);
        if (LG) return bG.x = yG, bG.y = kG, void(bG.z = UG);
        wG.p.TransformNormalFromFloatsToRef(yG, kG, UG, GG, bG)
      }
      startPositionFunction(GG, bG, ZG, LG) {
        const yG = (0, SG.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
          kG = (0, SG.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
          UG = (0, SG.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
        if (LG) return bG.x = yG, bG.y = kG, void(bG.z = UG);
        wG.p.TransformCoordinatesFromFloatsToRef(yG, kG, UG, GG, bG)
      }
      clone() {
        const GG = new yG;
        return LG.e.DeepCopy(this, GG), GG
      }
      applyToShader(GG) {
        GG.setVector3("direction1", this.direction1), GG.setVector3("direction2", this.direction2), GG.setVector3("minEmitBox", this.minEmitBox), GG.setVector3("maxEmitBox", this.maxEmitBox)
      }
      buildUniformLayout(GG) {
        GG.addUniform("direction1", 3), GG.addUniform("direction2", 3), GG.addUniform("minEmitBox", 3), GG.addUniform("maxEmitBox", 3)
      }
      getEffectDefines() {
        return "#define BOXEMITTER"
      }
      getClassName() {
        return "BoxParticleEmitter"
      }
      serialize() {
        const GG = {};
        return GG.type = this.getClassName(), GG.direction1 = this.direction1.mwG(), GG.direction2 = this.direction2.mwG(), GG.minEmitBox = this.minEmitBox.mwG(), GG.maxEmitBox = this.maxEmitBox.mwG(), GG
      }
      parse(GG) {
        wG.p.FromArrayToRef(GG.direction1, 0, this.direction1), wG.p.FromArrayToRef(GG.direction2, 0, this.direction2), wG.p.FromArrayToRef(GG.minEmitBox, 0, this.minEmitBox), wG.p.FromArrayToRef(GG.maxEmitBox, 0, this.maxEmitBox)
      }
    }
  },
  39083: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => kG,
      f: () => yG
    });
    var wG = ZG(37439),
      SG = ZG(37471),
      LG = ZG(39086);
    class yG {
      constructor() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          SG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.radius = GG, this.height = bG, this.radiusRange = ZG, this.directionRandomizer = SG, this._tempVector = wG.p.Zero()
      }
      startDirectionFunction(GG, bG, ZG, LG, yG) {
        ZG.position.subtractToRef(GG.getTranslation(), this._tempVector), this._tempVector.normalize(), wG.p.TransformNormalToRef(this._tempVector, yG, this._tempVector);
        const kG = (0, SG.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
        let UG = Math.atan2(this._tempVector.x, this._tempVector.z);
        UG += (0, SG.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = kG, this._tempVector.x = Math.sin(UG), this._tempVector.z = Math.cos(UG), this._tempVector.normalize(), LG ? bG.oW(this._tempVector) : wG.p.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, GG, bG)
      }
      startPositionFunction(GG, bG, ZG, LG) {
        const yG = (0, SG.RandomRange)(-this.height / 2, this.height / 2),
          kG = (0, SG.RandomRange)(0, 2 * Math.PI),
          UG = (0, SG.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
          YG = Math.sqrt(UG) * this.radius,
          VG = YG * Math.cos(kG),
          pG = YG * Math.sin(kG);
        LG ? bG.fGG(VG, yG, pG) : wG.p.TransformCoordinatesFromFloatsToRef(VG, yG, pG, GG, bG)
      }
      clone() {
        const GG = new yG(this.radius, this.directionRandomizer);
        return LG.e.DeepCopy(this, GG), GG
      }
      applyToShader(GG) {
        GG.setFloat("radius", this.radius), GG.setFloat("height", this.height), GG.setFloat("radiusRange", this.radiusRange), GG.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(GG) {
        GG.addUniform("radius", 1), GG.addUniform("height", 1), GG.addUniform("radiusRange", 1), GG.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderParticleEmitter"
      }
      serialize() {
        const GG = {};
        return GG.type = this.getClassName(), GG.radius = this.radius, GG.height = this.height, GG.radiusRange = this.radiusRange, GG.directionRandomizer = this.directionRandomizer, GG
      }
      parse(GG) {
        this.radius = GG.radius, this.height = GG.height, this.radiusRange = GG.radiusRange, this.directionRandomizer = GG.directionRandomizer
      }
    }
    class kG extends yG {
      constructor() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          SG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new wG.p(0, 1, 0),
          LG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new wG.p(0, 1, 0);
        super(GG, bG, ZG), this.direction1 = SG, this.direction2 = LG
      }
      startDirectionFunction(GG, bG, ZG, LG) {
        const yG = (0, SG.RandomRange)(this.direction1.x, this.direction2.x),
          kG = (0, SG.RandomRange)(this.direction1.y, this.direction2.y),
          UG = (0, SG.RandomRange)(this.direction1.z, this.direction2.z);
        LG ? bG.fGG(yG, kG, UG) : wG.p.TransformNormalFromFloatsToRef(yG, kG, UG, GG, bG)
      }
      clone() {
        const GG = new kG(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
        return LG.e.DeepCopy(this, GG), GG
      }
      applyToShader(GG) {
        GG.setFloat("radius", this.radius), GG.setFloat("height", this.height), GG.setFloat("radiusRange", this.radiusRange), GG.setVector3("direction1", this.direction1), GG.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(GG) {
        GG.addUniform("radius", 1), GG.addUniform("height", 1), GG.addUniform("radiusRange", 1), GG.addUniform("direction1", 3), GG.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER\n#define DIRECTEDCYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderDirectedParticleEmitter"
      }
      serialize() {
        const GG = super.serialize();
        return GG.direction1 = this.direction1.mwG(), GG.direction2 = this.direction2.mwG(), GG
      }
      parse(GG) {
        super.parse(GG), wG.p.FromArrayToRef(GG.direction1, 0, this.direction1), wG.p.FromArrayToRef(GG.direction2, 0, this.direction2)
      }
    }
  },
  39190: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => pG
    });
    const wG = .5 * (Math.sqrt(3) - 1),
      SG = (3 - Math.sqrt(3)) / 6,
      LG = 1 / 3,
      yG = 1 / 6,
      kG = (Math.sqrt(5) - 1) / 4,
      UG = (5 - Math.sqrt(5)) / 20,
      YG = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
      VG = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]);
    const pG = class {
      constructor() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
        const bG = "function" == typeof GG ? GG : function(GG) {
          let bG = 0,
            ZG = 0,
            wG = 0,
            SG = 1;
          const LG = function() {
            let GG = 4022871197;
            return function(bG) {
              bG = bG.toString();
              for (let ZG = 0; ZG < bG.length; ZG++) {
                GG += bG.charCodeAt(ZG);
                let wG = .02519603282416938 * GG;
                GG = wG >>> 0, wG -= GG, wG *= GG, GG = wG >>> 0, wG -= GG, GG += 4294967296 * wG
              }
              return 2.3283064365386963e-10 * (GG >>> 0)
            }
          }();
          bG = LG(" "), ZG = LG(" "), wG = LG(" "), bG -= LG(GG), bG < 0 && (bG += 1);
          ZG -= LG(GG), ZG < 0 && (ZG += 1);
          wG -= LG(GG), wG < 0 && (wG += 1);
          return function() {
            const GG = 2091639 * bG + 2.3283064365386963e-10 * SG;
            return bG = ZG, ZG = wG, wG = GG - (SG = 0 | GG)
          }
        }(GG);
        this.p = function(GG) {
          const bG = new Uint8Array(256);
          for (let ZG = 0; ZG < 256; ZG++) bG[ZG] = ZG;
          for (let ZG = 0; ZG < 255; ZG++) {
            const wG = ZG + ~~(GG() * (256 - ZG)),
              SG = bG[ZG];
            bG[ZG] = bG[wG], bG[wG] = SG
          }
          return bG
        }(bG), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
        for (let ZG = 0; ZG < 512; ZG++) this.perm[ZG] = this.p[255 & ZG], this.permMod12[ZG] = this.perm[ZG] % 12
      }
      noise2D(GG, bG) {
        const ZG = this.permMod12,
          LG = this.perm;
        let yG = 0,
          kG = 0,
          UG = 0;
        const VG = (GG + bG) * wG,
          pG = Math.floor(GG + VG),
          fG = Math.floor(bG + VG),
          QG = (pG + fG) * SG,
          KG = GG - (pG - QG),
          hG = bG - (fG - QG);
        let dG, JG;
        KG > hG ? (dG = 1, JG = 0) : (dG = 0, JG = 1);
        const rG = KG - dG + SG,
          zG = hG - JG + SG,
          EG = KG - 1 + 2 * SG,
          oG = hG - 1 + 2 * SG,
          XG = 255 & pG,
          uG = 255 & fG;
        let iG = .5 - KG * KG - hG * hG;
        if (iG >= 0) {
          const GG = 3 * ZG[XG + LG[uG]];
          iG *= iG, yG = iG * iG * (YG[GG] * KG + YG[GG + 1] * hG)
        }
        let CG = .5 - rG * rG - zG * zG;
        if (CG >= 0) {
          const GG = 3 * ZG[XG + dG + LG[uG + JG]];
          CG *= CG, kG = CG * CG * (YG[GG] * rG + YG[GG + 1] * zG)
        }
        let WG = .5 - EG * EG - oG * oG;
        if (WG >= 0) {
          const GG = 3 * ZG[XG + 1 + LG[uG + 1]];
          WG *= WG, UG = WG * WG * (YG[GG] * EG + YG[GG + 1] * oG)
        }
        return 70 * (yG + kG + UG)
      }
      noise3D(GG, bG, ZG) {
        const wG = this.permMod12,
          SG = this.perm;
        let kG, UG, VG, pG;
        const fG = (GG + bG + ZG) * LG,
          QG = Math.floor(GG + fG),
          KG = Math.floor(bG + fG),
          hG = Math.floor(ZG + fG),
          dG = (QG + KG + hG) * yG,
          JG = GG - (QG - dG),
          rG = bG - (KG - dG),
          zG = ZG - (hG - dG);
        let EG, oG, XG, uG, iG, CG;
        JG >= rG ? rG >= zG ? (EG = 1, oG = 0, XG = 0, uG = 1, iG = 1, CG = 0) : JG >= zG ? (EG = 1, oG = 0, XG = 0, uG = 1, iG = 0, CG = 1) : (EG = 0, oG = 0, XG = 1, uG = 1, iG = 0, CG = 1) : rG < zG ? (EG = 0, oG = 0, XG = 1, uG = 0, iG = 1, CG = 1) : JG < zG ? (EG = 0, oG = 1, XG = 0, uG = 0, iG = 1, CG = 1) : (EG = 0, oG = 1, XG = 0, uG = 1, iG = 1, CG = 0);
        const WG = JG - EG + yG,
          mG = rG - oG + yG,
          IG = zG - XG + yG,
          FG = JG - uG + 2 * yG,
          vG = rG - iG + 2 * yG,
          aG = zG - CG + 2 * yG,
          cG = JG - 1 + .5,
          lG = rG - 1 + .5,
          jG = zG - 1 + .5,
          PG = 255 & QG,
          MG = 255 & KG,
          AG = 255 & hG;
        let sG = .6 - JG * JG - rG * rG - zG * zG;
        if (sG < 0) kG = 0;
        else {
          const GG = 3 * wG[PG + SG[MG + SG[AG]]];
          sG *= sG, kG = sG * sG * (YG[GG] * JG + YG[GG + 1] * rG + YG[GG + 2] * zG)
        }
        let qG = .6 - WG * WG - mG * mG - IG * IG;
        if (qG < 0) UG = 0;
        else {
          const GG = 3 * wG[PG + EG + SG[MG + oG + SG[AG + XG]]];
          qG *= qG, UG = qG * qG * (YG[GG] * WG + YG[GG + 1] * mG + YG[GG + 2] * IG)
        }
        let nG = .6 - FG * FG - vG * vG - aG * aG;
        if (nG < 0) VG = 0;
        else {
          const GG = 3 * wG[PG + uG + SG[MG + iG + SG[AG + CG]]];
          nG *= nG, VG = nG * nG * (YG[GG] * FG + YG[GG + 1] * vG + YG[GG + 2] * aG)
        }
        let gG = .6 - cG * cG - lG * lG - jG * jG;
        if (gG < 0) pG = 0;
        else {
          const GG = 3 * wG[PG + 1 + SG[MG + 1 + SG[AG + 1]]];
          gG *= gG, pG = gG * gG * (YG[GG] * cG + YG[GG + 1] * lG + YG[GG + 2] * jG)
        }
        return 32 * (kG + UG + VG + pG)
      }
      noise4D(GG, bG, ZG, wG) {
        const SG = this.perm;
        let LG, yG, YG, pG, fG;
        const QG = (GG + bG + ZG + wG) * kG,
          KG = Math.floor(GG + QG),
          hG = Math.floor(bG + QG),
          dG = Math.floor(ZG + QG),
          JG = Math.floor(wG + QG),
          rG = (KG + hG + dG + JG) * UG,
          zG = GG - (KG - rG),
          EG = bG - (hG - rG),
          oG = ZG - (dG - rG),
          XG = wG - (JG - rG);
        let uG = 0,
          iG = 0,
          CG = 0,
          WG = 0;
        zG > EG ? uG++ : iG++, zG > oG ? uG++ : CG++, zG > XG ? uG++ : WG++, EG > oG ? iG++ : CG++, EG > XG ? iG++ : WG++, oG > XG ? CG++ : WG++;
        const mG = uG >= 3 ? 1 : 0,
          IG = iG >= 3 ? 1 : 0,
          FG = CG >= 3 ? 1 : 0,
          vG = WG >= 3 ? 1 : 0,
          aG = uG >= 2 ? 1 : 0,
          cG = iG >= 2 ? 1 : 0,
          lG = CG >= 2 ? 1 : 0,
          jG = WG >= 2 ? 1 : 0,
          PG = uG >= 1 ? 1 : 0,
          MG = iG >= 1 ? 1 : 0,
          AG = CG >= 1 ? 1 : 0,
          sG = WG >= 1 ? 1 : 0,
          qG = zG - mG + UG,
          nG = EG - IG + UG,
          gG = oG - FG + UG,
          eG = XG - vG + UG,
          RG = zG - aG + 2 * UG,
          TG = EG - cG + 2 * UG,
          HG = oG - lG + 2 * UG,
          tG = XG - jG + 2 * UG,
          DG = zG - PG + 3 * UG,
          NG = EG - MG + 3 * UG,
          OG = oG - AG + 3 * UG,
          xG = XG - sG + 3 * UG,
          BG = zG - 1 + 4 * UG,
          Gb = EG - 1 + 4 * UG,
          bb = oG - 1 + 4 * UG,
          Zb = XG - 1 + 4 * UG,
          wb = 255 & KG,
          Sb = 255 & hG,
          Lb = 255 & dG,
          yb = 255 & JG;
        let kb = .6 - zG * zG - EG * EG - oG * oG - XG * XG;
        if (kb < 0) LG = 0;
        else {
          const GG = SG[wb + SG[Sb + SG[Lb + SG[yb]]]] % 32 * 4;
          kb *= kb, LG = kb * kb * (VG[GG] * zG + VG[GG + 1] * EG + VG[GG + 2] * oG + VG[GG + 3] * XG)
        }
        let Ub = .6 - qG * qG - nG * nG - gG * gG - eG * eG;
        if (Ub < 0) yG = 0;
        else {
          const GG = SG[wb + mG + SG[Sb + IG + SG[Lb + FG + SG[yb + vG]]]] % 32 * 4;
          Ub *= Ub, yG = Ub * Ub * (VG[GG] * qG + VG[GG + 1] * nG + VG[GG + 2] * gG + VG[GG + 3] * eG)
        }
        let Yb = .6 - RG * RG - TG * TG - HG * HG - tG * tG;
        if (Yb < 0) YG = 0;
        else {
          const GG = SG[wb + aG + SG[Sb + cG + SG[Lb + lG + SG[yb + jG]]]] % 32 * 4;
          Yb *= Yb, YG = Yb * Yb * (VG[GG] * RG + VG[GG + 1] * TG + VG[GG + 2] * HG + VG[GG + 3] * tG)
        }
        let Vb = .6 - DG * DG - NG * NG - OG * OG - xG * xG;
        if (Vb < 0) pG = 0;
        else {
          const GG = SG[wb + PG + SG[Sb + MG + SG[Lb + AG + SG[yb + sG]]]] % 32 * 4;
          Vb *= Vb, pG = Vb * Vb * (VG[GG] * DG + VG[GG + 1] * NG + VG[GG + 2] * OG + VG[GG + 3] * xG)
        }
        let pb = .6 - BG * BG - Gb * Gb - bb * bb - Zb * Zb;
        if (pb < 0) fG = 0;
        else {
          const GG = SG[wb + 1 + SG[Sb + 1 + SG[Lb + 1 + SG[yb + 1]]]] % 32 * 4;
          pb *= pb, fG = pb * pb * (VG[GG] * BG + VG[GG + 1] * Gb + VG[GG + 2] * bb + VG[GG + 3] * Zb)
        }
        return 27 * (LG + yG + YG + pG + fG)
      }
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);