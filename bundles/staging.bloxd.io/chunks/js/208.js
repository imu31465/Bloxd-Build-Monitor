/*! For license information please see qsji88.208.92e68d31.chunk.js.LICENSE.txt */
export const id = 208;
export const ids = [208];
export const modules = {
  38493: (TT, oT, IT) => {
    TT.exports = zT;
    var iT = IT(319);

    function zT(TT, oT) {
      if (!(this instanceof zT)) return new zT(TT, oT);
      var IT = iT.create();
      iT.add(IT, TT, oT), this.base = iT.min(iT.create(), TT, IT), this.vec = iT.clone(oT), this.max = iT.max(iT.create(), TT, IT), this.mag = iT.length(this.vec)
    }
    var kT = zT.prototype;
    kT.width = function() {
      return this.vec[0]
    }, kT.height = function() {
      return this.vec[1]
    }, kT.depth = function() {
      return this.vec[2]
    }, kT.x0 = function() {
      return this.base[0]
    }, kT.y0 = function() {
      return this.base[1]
    }, kT.z0 = function() {
      return this.base[2]
    }, kT.x1 = function() {
      return this.max[0]
    }, kT.y1 = function() {
      return this.max[1]
    }, kT.z1 = function() {
      return this.max[2]
    }, kT.translate = function(TT) {
      return iT.add(this.max, this.max, TT), iT.add(this.base, this.base, TT), this
    }, kT.setPosition = function(TT) {
      return iT.add(this.max, TT, this.vec), iT.copy(this.base, TT), this
    }, kT.expand = function(TT) {
      var oT = iT.create(),
        IT = iT.create();
      return iT.max(oT, TT.max, this.max), iT.min(IT, TT.base, this.base), iT.subtract(oT, oT, IT), new zT(IT, oT)
    }, kT.intersects = function(TT) {
      return !(TT.base[0] > this.max[0]) && (!(TT.base[1] > this.max[1]) && (!(TT.base[2] > this.max[2]) && (!(TT.max[0] < this.base[0]) && (!(TT.max[1] < this.base[1]) && !(TT.max[2] < this.base[2])))))
    }, kT.touches = function(TT) {
      var oT = this.union(TT);
      return null !== oT && (0 == oT.width() || 0 == oT.height() || 0 == oT.depth())
    }, kT.union = function(TT) {
      if (!this.intersects(TT)) return null;
      var oT = Math.max(TT.base[0], this.base[0]),
        IT = Math.max(TT.base[1], this.base[1]),
        iT = Math.max(TT.base[2], this.base[2]);
      return new zT([oT, IT, iT], [Math.min(TT.max[0], this.max[0]) - oT, Math.min(TT.max[1], this.max[1]) - IT, Math.min(TT.max[2], this.max[2]) - iT])
    }
  },
  35680: TT => {
    TT.exports = function TT(oT, IT) {
      if (oT === IT) return !0;
      if (oT && IT && "object" == typeof oT && "object" == typeof IT) {
        if (oT.constructor !== IT.constructor) return !1;
        var iT, zT, kT;
        if (Array.isArray(oT)) {
          if ((iT = oT.length) != IT.length) return !1;
          for (zT = iT; 0 !== zT--;)
            if (!TT(oT[zT], IT[zT])) return !1;
          return !0
        }
        if (oT.constructor === RegExp) return oT.source === IT.source && oT.flags === IT.flags;
        if (oT.valueOf !== Object.prototype.valueOf) return oT.valueOf() === IT.valueOf();
        if (oT.toString !== Object.prototype.toString) return oT.toString() === IT.toString();
        if ((iT = (kT = Object.keys(oT)).length) !== Object.keys(IT).length) return !1;
        for (zT = iT; 0 !== zT--;)
          if (!Object.prototype.hasOwnProperty.call(IT, kT[zT])) return !1;
        for (zT = iT; 0 !== zT--;) {
          var WT = kT[zT];
          if (!TT(oT[WT], IT[WT])) return !1
        }
        return !0
      }
      return oT !== oT && IT !== IT
    }
  },
  38487: TT => {
    TT.exports = function(TT, oT, IT, iT, zT, kT) {
      var WT = +oT[0],
        XT = +oT[1],
        BT = +oT[2],
        FT = +IT[0],
        ST = +IT[1],
        DT = +IT[2],
        LT = Math.sqrt(FT * FT + ST * ST + DT * DT);
      if (0 === LT) throw new Error("Can't raycast along a zero vector");
      return function(TT, oT, IT, iT, zT, kT, WT, XT, BT, FT) {
        for (var ST = 0, DT = Math.floor, LT = 0 | DT(oT), xT = 0 | DT(IT), cT = 0 | DT(iT), KT = zT > 0 ? 1 : -1, MT = kT > 0 ? 1 : -1, rT = WT > 0 ? 1 : -1, AT = Math.abs(1 / zT), gT = Math.abs(1 / kT), hT = Math.abs(1 / WT), wT = AT < 1 / 0 ? AT * (KT > 0 ? LT + 1 - oT : oT - LT) : 1 / 0, mT = gT < 1 / 0 ? gT * (MT > 0 ? xT + 1 - IT : IT - xT) : 1 / 0, eT = hT < 1 / 0 ? hT * (rT > 0 ? cT + 1 - iT : iT - cT) : 1 / 0, RT = -1; ST <= XT;) {
          var uT = TT(LT, xT, cT);
          if (uT) return BT && (BT[0] = oT + ST * zT, BT[1] = IT + ST * kT, BT[2] = iT + ST * WT), FT && (FT[0] = FT[1] = FT[2] = 0, 0 === RT && (FT[0] = -KT), 1 === RT && (FT[1] = -MT), 2 === RT && (FT[2] = -rT)), uT;
          wT < mT ? wT < eT ? (LT += KT, ST = wT, wT += AT, RT = 0) : (cT += rT, ST = eT, eT += hT, RT = 2) : mT < eT ? (xT += MT, ST = mT, mT += gT, RT = 1) : (cT += rT, ST = eT, eT += hT, RT = 2)
        }
        return BT && (BT[0] = oT + ST * zT, BT[1] = IT + ST * kT, BT[2] = iT + ST * WT), FT && (FT[0] = FT[1] = FT[2] = 0), 0
      }(TT, WT, XT, BT, FT /= LT, ST /= LT, DT /= LT, iT = "undefined" === typeof iT ? 64 : +iT, zT, kT)
    }
  },
  38068: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => XT,
      e: () => kT
    });
    var iT = IT(3655);
    let zT = null;

    function kT(TT) {
      return null !== zT && TT === zT
    }

    function WT() {
      this.lq = !1, this.stopPropagation = !1, this.bq = !1, this.disabled = !1
    }
    class XT {
      constructor(TT, oT) {
        this.version = "0.7.0";
        var IT = Object.assign({}, new WT, oT || {});
        this.element = TT || document, this.lq = !!IT.lq, this.stopPropagation = !!IT.stopPropagation, this.bq = !!IT.bq, this.disabled = !!IT.disabled, this.filterEvents = (TT, oT) => !0, this.down = new iT.EventEmitter, this.up = new iT.EventEmitter, this.state = {}, this.xZ = {
          dx: 0,
          dy: 0,
          YTT: 0,
          QTT: 0,
          HTT: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? FT(this) : document.addEventListener("DOMContentLoaded", (TT => {
          FT(this)
        }), {
          once: !0
        })
      }
      bind(TT) {
        for (var oT = arguments.length, IT = new Array(oT > 1 ? oT - 1 : 0), iT = 1; iT < oT; iT++) IT[iT - 1] = arguments[iT];
        IT.forEach((oT => {
          var IT = this._keyBindmap[oT] || [];
          IT.includes(TT) || (IT.push(TT), this._keyBindmap[oT] = IT)
        })), this.state[TT] = !!this.state[TT], this.pressCount[TT] = this.pressCount[TT] || 0, this.releaseCount[TT] = this.releaseCount[TT] || 0
      }
      unbind(TT) {
        for (var oT in this._keyBindmap) {
          var IT = this._keyBindmap[oT],
            iT = IT.indexOf(TT);
          iT > -1 && IT.splice(iT, 1)
        }
      }
      getBindings() {
        var TT = {};
        for (var oT in this._keyBindmap) {
          this._keyBindmap[oT].forEach((IT => {
            TT[IT] = TT[IT] || [], TT[IT].push(oT)
          }))
        }
        return TT
      }
      dD() {
        BT(this.xZ), BT(this.pressCount), BT(this.releaseCount)
      }
    }

    function BT(TT) {
      for (var oT in TT) TT[oT] = 0
    }

    function FT(TT) {
      window.addEventListener("keydown", MT.bind(null, TT, !0), !1), window.addEventListener("keyup", MT.bind(null, TT, !1), !1);
      var oT = {
        passive: !0
      };
      TT.element.addEventListener("touchstart", xT.bind(void 0, TT), {
        passive: !1
      }), TT.element.addEventListener("touchend", KT.bind(void 0, TT), oT), TT.element.addEventListener("mousedown", rT.bind(null, TT, !0), oT), window.document.addEventListener("mouseup", rT.bind(null, TT, !1), oT), TT.element.addEventListener("touchmove", AT.bind(null, TT), oT), TT.element.addEventListener("mousemove", AT.bind(null, TT), oT), window.PointerEvent, TT.element.addEventListener("wheel", gT.bind(null, TT), oT), TT.element.addEventListener("contextmenu", hT.bind(null, TT), !1), window.addEventListener("blur", eT.bind(null, TT), !1)
    }
    var ST = 0,
      DT = 0,
      LT = null;

    function xT(TT, oT) {
      oT.preventDefault(), cT(oT)
    }

    function cT(TT) {
      let oT = !1;
      for (let IT = 0; IT < TT.touches.length; ++IT)
        if (TT.touches[IT].identifier === LT) {
          oT = !0;
          break
        } if (!oT) {
        const oT = TT.changedTouches[0];
        ST = oT.clientX, DT = oT.clientY, LT = oT.identifier
      }
    }

    function KT(TT, oT) {
      for (var IT = oT.changedTouches, iT = 0; iT < IT.length; ++iT) IT[iT].identifier === LT && (LT = null)
    }

    function MT(TT, oT, IT) {
      try {
        RT(TT, IT), oT && IT.isTrusted && !IT.repeat && TT._keyStates[IT.code] && uT(TT, IT.code)
      } finally {
        vT(IT.code, oT, TT, IT)
      }
    }

    function rT(TT, oT, IT) {
      try {
        RT(TT, IT)
      } finally {
        ! function(TT, oT, IT) {
          if ("pointerId" in IT)
            if (oT) {
              if (null !== TT._touches.currID) return;
              TT._touches.currID = IT.pointerId
            } else {
              if (TT._touches.currID !== IT.pointerId) return;
              TT._touches.currID = null
            } var iT = "button" in IT ? IT.button + 1 : 1;
          vT("Mouse" + iT, oT, TT, IT)
        }(TT, oT, IT)
      }
    }

    function AT(TT, oT) {
      var IT = oT.movementX || oT.mozMovementX || 0,
        iT = oT.movementY || oT.mozMovementY || 0;
      if (oT.touches && 0 === (IT | iT)) {
        var zT = function(TT) {
          cT(TT);
          for (let oT = 0; oT < TT.changedTouches.length; ++oT)
            if (TT.changedTouches[oT].identifier == LT) {
              const IT = TT.changedTouches[oT],
                iT = [IT.clientX - ST, IT.clientY - DT];
              return ST = IT.clientX, DT = IT.clientY, iT
            } return console.error(`Did not find touch id ${LT}`), [0, 0]
        }(oT);
        IT = zT[0], iT = zT[1]
      }
      TT.xZ.dx += IT, TT.xZ.dy += iT
    }

    function gT(TT, oT) {
      RT(TT, oT);
      var IT = 1;
      switch (oT.deltaMode) {
        case 0:
          IT = 1;
          break;
        case 1:
          IT = 12;
          break;
        case 2:
          IT = TT.element.clientHeight || window.innerHeight
      }
      TT.xZ.YTT += (oT.deltaX || 0) * IT, TT.xZ.QTT += (oT.deltaY || 0) * IT, TT.xZ.HTT += (oT.deltaZ || 0) * IT
    }

    function hT(TT, oT) {
      if (!TT.bq) return oT.preventDefault(), !1
    }
    var wT = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function mT(TT, oT) {
      return !!TT[wT[oT]] || ("AltRight" === oT || "ControlLeft" === oT) && "function" === typeof TT.getModifierState && !0 === TT.getModifierState("AltGraph")
    }

    function eT(TT, oT) {
      for (var IT in TT._modifiersHeldThroughBlur = {}, wT) TT._keyStates[IT] && (TT._modifiersHeldThroughBlur[IT] = !0);
      oT && oT.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (TT) {
          return !0
        }
      }() && (clearTimeout(TT._blurRelease), TT._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var oT in TT._modifiersHeldThroughBlur = {}, TT._keyStates) TT._keyStates[oT] && !/^Mouse\d/.test(oT) && uT(TT, oT)
      }), 0))
    }

    function RT(TT, oT) {
      var IT = TT._modifiersHeldThroughBlur;
      if (IT && oT.isTrusted && document.hasFocus())
        for (var iT in IT) delete IT[iT], TT._keyStates[iT] && iT !== oT.code && (mT(oT, iT) || uT(TT, iT))
    }

    function uT(TT, oT) {
      const IT = {
          code: oT,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        iT = zT;
      zT = IT;
      try {
        vT(oT, !1, TT, IT)
      } finally {
        zT = iT
      }
    }

    function vT(TT, oT, IT, iT) {
      var zT = IT._keyBindmap[TT];
      zT && (ET(IT._keyStates[TT], oT) && (IT._keyStates[TT] = oT, zT.forEach((TT => {
        (!IT.filterEvents || IT.filterEvents(iT, TT)) && function(TT, oT, IT, iT) {
          var zT = oT ? IT.pressCount : IT.releaseCount;
          zT[TT] = (zT[TT] || 0) + 1;
          var kT = IT._bindPressCount[TT] || 0;
          (kT += oT ? 1 : -1) < 0 && (kT = 0);
          IT._bindPressCount[TT] = kT;
          var WT = IT.state[TT];
          if (ET(WT, kT)) {
            IT.state[TT] = kT > 0;
            var XT = oT ? IT.down : IT.up;
            IT.disabled || XT.emit(TT, iT)
          }
        }(TT, oT, IT, iT)
      }))), "button" in iT || (IT.lq && !iT.defaultPrevented && iT.preventDefault(), IT.stopPropagation && iT.stopPropagation()))
    }

    function ET(TT, oT) {
      return TT ? !oT : oT
    }
  },
  35546: (TT, oT) => {
    function IT(TT) {
      if (TT && "object" === typeof TT) {
        var oT = TT.which || TT.keyCode || TT.charCode;
        oT && (TT = oT)
      }
      if ("number" === typeof TT) return WT[TT];
      var IT, kT = String(TT);
      return (IT = iT[kT.toLowerCase()]) ? IT : (IT = zT[kT.toLowerCase()]) || (1 === kT.length ? kT.charCodeAt(0) : void 0)
    }
    IT.isEventKey = function(TT, oT) {
      if (TT && "object" === typeof TT) {
        var IT = TT.which || TT.keyCode || TT.charCode;
        if (null === IT || void 0 === IT) return !1;
        if ("string" === typeof oT) {
          var kT;
          if (kT = iT[oT.toLowerCase()]) return kT === IT;
          if (kT = zT[oT.toLowerCase()]) return kT === IT
        } else if ("number" === typeof oT) return oT === IT;
        return !1
      }
    };
    var iT = (oT = TT.exports = IT).code = oT.codes = {
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
      zT = oT.aliases = {
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
    for (kT = 97; kT < 123; kT++) iT[String.fromCharCode(kT)] = kT - 32;
    for (var kT = 48; kT < 58; kT++) iT[kT - 48] = kT;
    for (kT = 1; kT < 13; kT++) iT["f" + kT] = kT + 111;
    for (kT = 0; kT < 10; kT++) iT["numpad " + kT] = kT + 96;
    var WT = oT.names = oT.title = {};
    for (kT in iT) WT[iT[kT]] = kT;
    for (var XT in zT) iT[XT] = zT[XT]
  },
  38472: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => iT
    });
    class iT {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        this.jU = !1, this.aU = !1, this.sC = 30, this.KU = 0, this.pU = 100, this.JM = !1, this.fullscreen = !1, this.pw = function(TT) {}, this.PU = function(TT, oT, IT) {}, this.kY = function() {}, this.Tm = function() {}, this.dU = function() {}, this.onFullscreenChanged = function() {}, this.onPointerLockError = function(TT) {}, this._data = new zT(oT),
          function(TT) {
            if ("loading" === document.readyState) {
              var oT = () => {
                document.removeEventListener("readystatechange", oT), TT()
              };
              document.addEventListener("readystatechange", oT)
            } else setTimeout(TT, 0)
          }((() => {
            ! function(TT) {
              var oT = TT._data,
                IT = oT.nowObject.now();
              oT.lastTickStarted = IT, oT.lastFrameStarted = IT, oT.lastRenderStarted = IT, oT.frameCB = () => function(TT) {
                var oT = TT._data;
                requestAnimationFrame(oT.frameCB), XT(TT);
                var IT = oT.nowObject.now(),
                  iT = IT - oT.lastFrameStarted;
                if (oT.lastFrameStarted = IT, TT.KU > 0) {
                  oT.renderAccum += iT;
                  var zT = 1e3 / TT.KU;
                  if (oT.renderAccum < zT) return;
                  oT.renderAccum -= zT, oT.renderAccum > zT && (oT.renderAccum = zT)
                }
                var kT = IT - oT.lastRenderStarted;
                oT.lastRenderStarted = IT;
                var WT = 1e3 / TT.sC,
                  BT = (IT - oT.lastTickStarted) / WT;
                BT < 0 && (BT = 0);
                TT.PU(kT, BT, WT), setTimeout(XT, 0, TT, !0)
              }(TT), oT.intervalCB = () => XT(TT), requestAnimationFrame(oT.frameCB), oT.pollTime > 0 && (oT.intervalID = setInterval(oT.intervalCB, Math.max(oT.pollTime, 1e3 / TT.sC / 2)))
            }(this),
            function(TT, oT) {
              if (!oT) return;
              var IT = !1,
                iT = !1,
                zT = TT => {
                  if (!!TT !== (IT = oT === document.pointerLockElement))
                    if (TT) {
                      var iT = oT.requestPointerLock();
                      iT && iT.catch && iT.catch((TT => {}))
                    } else document.exitPointerLock()
                },
                kT = TT => {
                  !!TT !== (iT = oT === document.fullscreenElement) && (TT ? oT.requestFullscreen ? oT.requestFullscreen() : oT.webkitRequestFullscreen && oT.webkitRequestFullscreen() : document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen())
                };
              document.addEventListener("pointerlockchange", (iT => {
                IT = oT === document.pointerLockElement, TT.dU(IT)
              })), document.addEventListener("fullscreenchange", (IT => {
                iT = oT === document.fullscreenElement, TT.onFullscreenChanged(iT)
              })), document.addEventListener("pointerlockerror", (iT => {
                IT = oT === document.pointerLockElement, TT.onPointerLockError(iT)
              })), Object.defineProperty(TT, "JM", {
                get: () => IT,
                set: zT
              }), Object.defineProperty(TT, "fullscreen", {
                get: () => iT,
                set: kT
              }), oT.addEventListener("click", (oT => {
                TT.jU && zT(!0), TT.aU && kT(!0)
              }));
              var WT = () => TT.Tm();
              if (window.ResizeObserver) {
                new ResizeObserver(WT).observe(oT)
              } else window.addEventListener("resize", WT)
            }(this, TT), this.kY()
          }))
      }
    }

    function zT() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      this.nowObject = performance || Date, this.pollTime = TT, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
    }
    var kT = 3,
      WT = 20;

    function XT(TT) {
      for (var oT = TT._data, IT = 1e3 / TT.sC, iT = oT.nowObject.now() + WT, zT = 0; oT.nowObject.now() >= oT.lastTickStarted + IT && oT.nowObject.now() < iT && ++zT <= kT;) TT.pw(IT), oT.lastTickStarted += IT;
      var XT = 5 * (IT + 5),
        BT = oT.nowObject.now();
      if (BT - oT.lastTickStarted > XT)
        for (; BT >= oT.lastTickStarted + IT;) oT.lastTickStarted += IT
    }
  },
  35700: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => WT
    });
    var iT = IT(46);
    const zT = iT.useLayoutEffect;
    const kT = function(TT) {
      var oT = (0, iT.useRef)(TT);
      return zT((function() {
        oT.current = TT
      })), oT
    };
    var WT = function(TT) {
      var oT = kT(TT);
      (0, iT.useEffect)((function() {
        var TT = function(TT) {
          var IT;
          if (null != oT.current && (IT = oT.current(TT)), TT.defaultPrevented && (TT.returnValue = ""), "string" === typeof IT) return TT.returnValue = IT, IT
        };
        return window.addEventListener("beforeunload", TT),
          function() {
            window.removeEventListener("beforeunload", TT)
          }
      }), [])
    }
  },
  35587: TT => {
    var oT, IT = "undefined" !== typeof window ? window.navigator.userAgent : "",
      iT = /OS X/.test(IT),
      zT = /Opera/.test(IT),
      kT = !/like Gecko/.test(IT) && !zT,
      WT = TT.exports = {
        0: iT ? "<menu>" : "<UNK>",
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
        93: iT ? "<meta>" : "<menu>",
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
        173: iT && kT ? "-" : "<volume-mute>",
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
        231: zT ? "`" : "<unicode>",
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
    for (oT = 58; oT < 65; ++oT) WT[oT] = String.fromCharCode(oT);
    for (oT = 48; oT < 58; ++oT) WT[oT] = oT - 48 + "";
    for (oT = 65; oT < 91; ++oT) WT[oT] = String.fromCharCode(oT);
    for (oT = 96; oT < 106; ++oT) WT[oT] = "<num-" + (oT - 96) + ">";
    for (oT = 112; oT < 136; ++oT) WT[oT] = "F" + (oT - 111)
  },
  37997: (TT, oT, IT) => {
    function iT(TT, oT, IT, iT, zT) {
      var kT = {};
      return Object.keys(iT).forEach((function(TT) {
        kT[TT] = iT[TT]
      })), kT.enumerable = !!kT.enumerable, kT.configurable = !!kT.configurable, ("value" in kT || kT.initializer) && (kT.writable = !0), kT = IT.slice().reverse().reduce((function(IT, iT) {
        return iT(TT, oT, IT) || IT
      }), kT), zT && void 0 !== kT.initializer && (kT.value = kT.initializer ? kT.initializer.call(zT) : void 0, kT.initializer = void 0), void 0 === kT.initializer && (Object.defineProperty(TT, oT, kT), kT = null), kT
    }
    IT.d(oT, {
      e: () => iT
    })
  },
  37994: (TT, oT, IT) => {
    function iT(TT, oT, IT, iT) {
      IT && Object.defineProperty(TT, oT, {
        enumerable: IT.enumerable,
        configurable: IT.configurable,
        writable: IT.writable,
        value: IT.initializer ? IT.initializer.call(iT) : void 0
      })
    }
    IT.d(oT, {
      d: () => iT
    })
  },
  37658: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => kT
    });
    var iT = IT(37660);
    const zT = (TT, oT, IT) => TT ? TT.getClassName && "Mesh" === TT.getClassName() ? null : !TT.getClassName || "SubMesh" !== TT.getClassName() && "PhysicsBody" !== TT.getClassName() ? TT.clone ? TT.clone() : Array.isArray(TT) ? TT.slice() : IT && "object" === typeof TT ? {
      ...TT
    } : null : TT.clone(oT) : null;
    class kT {
      static DeepCopy(TT, oT, IT, kT) {
        let WT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const XT = function(TT) {
          const oT = [];
          do {
            const IT = Object.getOwnPropertyNames(TT);
            for (const TT of IT) - 1 === oT.indexOf(TT) && oT.push(TT)
          } while (TT = Object.getPrototypeOf(TT));
          return oT
        }(TT);
        for (const FT of XT) {
          if ("_" === FT[0] && (!kT || -1 === kT.indexOf(FT))) continue;
          if (FT.endsWith("Observable")) continue;
          if (IT && -1 !== IT.indexOf(FT)) continue;
          const XT = TT[FT],
            ST = typeof XT;
          if ("function" !== ST) try {
            if ("object" === ST)
              if (XT instanceof Uint8Array) oT[FT] = Uint8Array.from(XT);
              else if (XT instanceof Array) {
              if (oT[FT] = [], XT.length > 0)
                if ("object" == typeof XT[0])
                  for (let TT = 0; TT < XT.length; TT++) {
                    const IT = zT(XT[TT], oT, WT); - 1 === oT[FT].indexOf(IT) && oT[FT].push(IT)
                  } else oT[FT] = XT.slice(0)
            } else oT[FT] = zT(XT, oT, WT);
            else oT[FT] = XT
          } catch (BT) {
            iT.d.Warn(BT.message)
          }
        }
      }
    }
  },
  37687: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => zT,
      e: () => kT,
      h: () => WT,
      i: () => XT
    });
    var iT = IT(36177);
    class zT {
      constructor(TT, oT, IT) {
        this.gradient = TT, this.color1 = oT, this.color2 = IT
      }
      getColorToRef(TT) {
        this.color2 ? iT.i.LerpToRef(this.color1, this.color2, Math.random(), TT) : TT.SIT(this.color1)
      }
    }
    class kT {
      constructor(TT, oT) {
        this.gradient = TT, this.color = oT
      }
    }
    class WT {
      constructor(TT, oT, IT) {
        this.gradient = TT, this.factor1 = oT, this.factor2 = IT
      }
      getFactor() {
        return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
      }
    }
    class XT {
      static GetCurrentGradient(TT, oT, IT) {
        if (oT[0].gradient > TT) return void IT(oT[0], oT[0], 1);
        for (let zT = 0; zT < oT.length - 1; zT++) {
          const iT = oT[zT],
            kT = oT[zT + 1];
          if (TT >= iT.gradient && TT <= kT.gradient) {
            return void IT(iT, kT, (TT - iT.gradient) / (kT.gradient - iT.gradient))
          }
        }
        const iT = oT.length - 1;
        IT(oT[iT], oT[iT], 1)
      }
    }
  },
  37660: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => iT
    });
    class iT {
      static _CheckLimit(TT, oT) {
        let IT = iT._LogLimitOutputs[TT];
        return IT ? IT.current++ : (IT = {
          limit: oT,
          current: 1
        }, iT._LogLimitOutputs[TT] = IT), IT.current <= IT.limit
      }
      static _GenerateLimitMessage(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const IT = iT._LogLimitOutputs[TT];
        if (!IT || !iT.MessageLimitReached) return;
        const zT = this._Levels[oT];
        IT.current === IT.limit && iT[zT.name](iT.MessageLimitReached.replace(/%LIMIT%/g, "" + IT.limit).replace(/%TYPE%/g, zT.name ?? ""))
      }
      static _AddLogEntry(TT) {
        iT._LogCache = TT + iT._LogCache, iT.OnNewCacheEntry && iT.OnNewCacheEntry(TT)
      }
      static _FormatMessage(TT) {
        const oT = TT => TT < 10 ? "0" + TT : "" + TT,
          IT = new Date;
        return "[" + oT(IT.getHours()) + ":" + oT(IT.getMinutes()) + ":" + oT(IT.getSeconds()) + "]: " + TT
      }
      static _LogDisabled(TT, oT) {}
      static _LogEnabled() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          oT = arguments.length > 1 ? arguments[1] : void 0,
          IT = arguments.length > 2 ? arguments[2] : void 0;
        const zT = Array.isArray(oT) ? oT[0] : oT;
        if (void 0 !== IT && !iT._CheckLimit(zT, IT)) return;
        const kT = iT._FormatMessage(zT),
          WT = this._Levels[TT],
          XT = Array.isArray(oT) ? oT.slice(1) : [];
        WT.logFunc && WT.logFunc("BJS - " + kT, ...XT);
        const BT = `<div style='color:${WT.color}'>${kT}</div><br>`;
        iT._AddLogEntry(BT), iT._GenerateLimitMessage(zT, TT)
      }
      static get LogCache() {
        return iT._LogCache
      }
      static ClearLogCache() {
        iT._LogCache = "", iT._LogLimitOutputs = {}, iT.errorsCount = 0
      }
      static set LogLevels(TT) {
        iT.Log = iT._LogDisabled, iT.Warn = iT._LogDisabled, iT.Error = iT._LogDisabled;
        const oT = [iT.MessageLogLevel, iT.WarningLogLevel, iT.ErrorLogLevel];
        for (const IT of oT)
          if ((TT & IT) === IT) {
            const TT = this._Levels[IT];
            iT[TT.name] = iT._LogEnabled.bind(iT, IT)
          }
      }
    }
    iT.NoneLogLevel = 0, iT.MessageLogLevel = 1, iT.WarningLogLevel = 2, iT.ErrorLogLevel = 4, iT.AllLogLevel = 7, iT.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", iT._LogCache = "", iT._LogLimitOutputs = {}, iT._Levels = [{}, {
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
    }], iT.errorsCount = 0, iT.Log = iT._LogEnabled.bind(iT, iT.MessageLogLevel), iT.Warn = iT._LogEnabled.bind(iT, iT.WarningLogLevel), iT.Error = iT._LogEnabled.bind(iT, iT.ErrorLogLevel)
  },
  37691: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => WT
    });
    var iT = IT(36118),
      zT = IT(36156),
      kT = IT(37658);
    class WT {
      constructor() {
        this.direction1 = new iT.m(0, 1, 0), this.direction2 = new iT.m(0, 1, 0), this.minEmitBox = new iT.m(-.5, -.5, -.5), this.maxEmitBox = new iT.m(.5, .5, .5)
      }
      startDirectionFunction(TT, oT, IT, kT) {
        const WT = (0, zT.RandomRange)(this.direction1.x, this.direction2.x),
          XT = (0, zT.RandomRange)(this.direction1.y, this.direction2.y),
          BT = (0, zT.RandomRange)(this.direction1.z, this.direction2.z);
        if (kT) return oT.x = WT, oT.y = XT, void(oT.z = BT);
        iT.m.TransformNormalFromFloatsToRef(WT, XT, BT, TT, oT)
      }
      startPositionFunction(TT, oT, IT, kT) {
        const WT = (0, zT.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
          XT = (0, zT.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
          BT = (0, zT.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
        if (kT) return oT.x = WT, oT.y = XT, void(oT.z = BT);
        iT.m.TransformCoordinatesFromFloatsToRef(WT, XT, BT, TT, oT)
      }
      clone() {
        const TT = new WT;
        return kT.d.DeepCopy(this, TT), TT
      }
      applyToShader(TT) {
        TT.setVector3("direction1", this.direction1), TT.setVector3("direction2", this.direction2), TT.setVector3("minEmitBox", this.minEmitBox), TT.setVector3("maxEmitBox", this.maxEmitBox)
      }
      buildUniformLayout(TT) {
        TT.addUniform("direction1", 3), TT.addUniform("direction2", 3), TT.addUniform("minEmitBox", 3), TT.addUniform("maxEmitBox", 3)
      }
      getEffectDefines() {
        return "#define BOXEMITTER"
      }
      getClassName() {
        return "BoxParticleEmitter"
      }
      serialize() {
        const TT = {};
        return TT.type = this.getClassName(), TT.direction1 = this.direction1.bIT(), TT.direction2 = this.direction2.bIT(), TT.minEmitBox = this.minEmitBox.bIT(), TT.maxEmitBox = this.maxEmitBox.bIT(), TT
      }
      parse(TT) {
        iT.m.FromArrayToRef(TT.direction1, 0, this.direction1), iT.m.FromArrayToRef(TT.direction2, 0, this.direction2), iT.m.FromArrayToRef(TT.minEmitBox, 0, this.minEmitBox), iT.m.FromArrayToRef(TT.maxEmitBox, 0, this.maxEmitBox)
      }
    }
  },
  37656: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => XT,
      h: () => WT
    });
    var iT = IT(36118),
      zT = IT(36156),
      kT = IT(37658);
    class WT {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          zT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.radius = TT, this.height = oT, this.radiusRange = IT, this.directionRandomizer = zT, this._tempVector = iT.m.Zero()
      }
      startDirectionFunction(TT, oT, IT, kT, WT) {
        IT.position.subtractToRef(TT.getTranslation(), this._tempVector), this._tempVector.normalize(), iT.m.TransformNormalToRef(this._tempVector, WT, this._tempVector);
        const XT = (0, zT.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
        let BT = Math.atan2(this._tempVector.x, this._tempVector.z);
        BT += (0, zT.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = XT, this._tempVector.x = Math.sin(BT), this._tempVector.z = Math.cos(BT), this._tempVector.normalize(), kT ? oT.SIT(this._tempVector) : iT.m.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, TT, oT)
      }
      startPositionFunction(TT, oT, IT, kT) {
        const WT = (0, zT.RandomRange)(-this.height / 2, this.height / 2),
          XT = (0, zT.RandomRange)(0, 2 * Math.PI),
          BT = (0, zT.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
          FT = Math.sqrt(BT) * this.radius,
          ST = FT * Math.cos(XT),
          DT = FT * Math.sin(XT);
        kT ? oT.S_(ST, WT, DT) : iT.m.TransformCoordinatesFromFloatsToRef(ST, WT, DT, TT, oT)
      }
      clone() {
        const TT = new WT(this.radius, this.directionRandomizer);
        return kT.d.DeepCopy(this, TT), TT
      }
      applyToShader(TT) {
        TT.setFloat("radius", this.radius), TT.setFloat("height", this.height), TT.setFloat("radiusRange", this.radiusRange), TT.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(TT) {
        TT.addUniform("radius", 1), TT.addUniform("height", 1), TT.addUniform("radiusRange", 1), TT.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderParticleEmitter"
      }
      serialize() {
        const TT = {};
        return TT.type = this.getClassName(), TT.radius = this.radius, TT.height = this.height, TT.radiusRange = this.radiusRange, TT.directionRandomizer = this.directionRandomizer, TT
      }
      parse(TT) {
        this.radius = TT.radius, this.height = TT.height, this.radiusRange = TT.radiusRange, this.directionRandomizer = TT.directionRandomizer
      }
    }
    class XT extends WT {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          zT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new iT.m(0, 1, 0),
          kT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new iT.m(0, 1, 0);
        super(TT, oT, IT), this.direction1 = zT, this.direction2 = kT
      }
      startDirectionFunction(TT, oT, IT, kT) {
        const WT = (0, zT.RandomRange)(this.direction1.x, this.direction2.x),
          XT = (0, zT.RandomRange)(this.direction1.y, this.direction2.y),
          BT = (0, zT.RandomRange)(this.direction1.z, this.direction2.z);
        kT ? oT.S_(WT, XT, BT) : iT.m.TransformNormalFromFloatsToRef(WT, XT, BT, TT, oT)
      }
      clone() {
        const TT = new XT(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
        return kT.d.DeepCopy(this, TT), TT
      }
      applyToShader(TT) {
        TT.setFloat("radius", this.radius), TT.setFloat("height", this.height), TT.setFloat("radiusRange", this.radiusRange), TT.setVector3("direction1", this.direction1), TT.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(TT) {
        TT.addUniform("radius", 1), TT.addUniform("height", 1), TT.addUniform("radiusRange", 1), TT.addUniform("direction1", 3), TT.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER\n#define DIRECTEDCYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderDirectedParticleEmitter"
      }
      serialize() {
        const TT = super.serialize();
        return TT.direction1 = this.direction1.bIT(), TT.direction2 = this.direction2.bIT(), TT
      }
      parse(TT) {
        super.parse(TT), iT.m.FromArrayToRef(TT.direction1, 0, this.direction1), iT.m.FromArrayToRef(TT.direction2, 0, this.direction2)
      }
    }
  },
  37768: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => DT
    });
    const iT = .5 * (Math.sqrt(3) - 1),
      zT = (3 - Math.sqrt(3)) / 6,
      kT = 1 / 3,
      WT = 1 / 6,
      XT = (Math.sqrt(5) - 1) / 4,
      BT = (5 - Math.sqrt(5)) / 20,
      FT = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
      ST = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]);
    const DT = class {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
        const oT = "function" == typeof TT ? TT : function(TT) {
          let oT = 0,
            IT = 0,
            iT = 0,
            zT = 1;
          const kT = function() {
            let TT = 4022871197;
            return function(oT) {
              oT = oT.toString();
              for (let IT = 0; IT < oT.length; IT++) {
                TT += oT.charCodeAt(IT);
                let iT = .02519603282416938 * TT;
                TT = iT >>> 0, iT -= TT, iT *= TT, TT = iT >>> 0, iT -= TT, TT += 4294967296 * iT
              }
              return 2.3283064365386963e-10 * (TT >>> 0)
            }
          }();
          oT = kT(" "), IT = kT(" "), iT = kT(" "), oT -= kT(TT), oT < 0 && (oT += 1);
          IT -= kT(TT), IT < 0 && (IT += 1);
          iT -= kT(TT), iT < 0 && (iT += 1);
          return function() {
            const TT = 2091639 * oT + 2.3283064365386963e-10 * zT;
            return oT = IT, IT = iT, iT = TT - (zT = 0 | TT)
          }
        }(TT);
        this.p = function(TT) {
          const oT = new Uint8Array(256);
          for (let IT = 0; IT < 256; IT++) oT[IT] = IT;
          for (let IT = 0; IT < 255; IT++) {
            const iT = IT + ~~(TT() * (256 - IT)),
              zT = oT[IT];
            oT[IT] = oT[iT], oT[iT] = zT
          }
          return oT
        }(oT), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
        for (let IT = 0; IT < 512; IT++) this.perm[IT] = this.p[255 & IT], this.permMod12[IT] = this.perm[IT] % 12
      }
      noise2D(TT, oT) {
        const IT = this.permMod12,
          kT = this.perm;
        let WT = 0,
          XT = 0,
          BT = 0;
        const ST = (TT + oT) * iT,
          DT = Math.floor(TT + ST),
          LT = Math.floor(oT + ST),
          xT = (DT + LT) * zT,
          cT = TT - (DT - xT),
          KT = oT - (LT - xT);
        let MT, rT;
        cT > KT ? (MT = 1, rT = 0) : (MT = 0, rT = 1);
        const AT = cT - MT + zT,
          gT = KT - rT + zT,
          hT = cT - 1 + 2 * zT,
          wT = KT - 1 + 2 * zT,
          mT = 255 & DT,
          eT = 255 & LT;
        let RT = .5 - cT * cT - KT * KT;
        if (RT >= 0) {
          const TT = 3 * IT[mT + kT[eT]];
          RT *= RT, WT = RT * RT * (FT[TT] * cT + FT[TT + 1] * KT)
        }
        let uT = .5 - AT * AT - gT * gT;
        if (uT >= 0) {
          const TT = 3 * IT[mT + MT + kT[eT + rT]];
          uT *= uT, XT = uT * uT * (FT[TT] * AT + FT[TT + 1] * gT)
        }
        let vT = .5 - hT * hT - wT * wT;
        if (vT >= 0) {
          const TT = 3 * IT[mT + 1 + kT[eT + 1]];
          vT *= vT, BT = vT * vT * (FT[TT] * hT + FT[TT + 1] * wT)
        }
        return 70 * (WT + XT + BT)
      }
      noise3D(TT, oT, IT) {
        const iT = this.permMod12,
          zT = this.perm;
        let XT, BT, ST, DT;
        const LT = (TT + oT + IT) * kT,
          xT = Math.floor(TT + LT),
          cT = Math.floor(oT + LT),
          KT = Math.floor(IT + LT),
          MT = (xT + cT + KT) * WT,
          rT = TT - (xT - MT),
          AT = oT - (cT - MT),
          gT = IT - (KT - MT);
        let hT, wT, mT, eT, RT, uT;
        rT >= AT ? AT >= gT ? (hT = 1, wT = 0, mT = 0, eT = 1, RT = 1, uT = 0) : rT >= gT ? (hT = 1, wT = 0, mT = 0, eT = 1, RT = 0, uT = 1) : (hT = 0, wT = 0, mT = 1, eT = 1, RT = 0, uT = 1) : AT < gT ? (hT = 0, wT = 0, mT = 1, eT = 0, RT = 1, uT = 1) : rT < gT ? (hT = 0, wT = 1, mT = 0, eT = 0, RT = 1, uT = 1) : (hT = 0, wT = 1, mT = 0, eT = 1, RT = 1, uT = 0);
        const vT = rT - hT + WT,
          ET = AT - wT + WT,
          fT = gT - mT + WT,
          CT = rT - eT + 2 * WT,
          jT = AT - RT + 2 * WT,
          JT = gT - uT + 2 * WT,
          UT = rT - 1 + .5,
          aT = AT - 1 + .5,
          YT = gT - 1 + .5,
          QT = 255 & xT,
          OT = 255 & cT,
          HT = 255 & KT;
        let nT = .6 - rT * rT - AT * AT - gT * gT;
        if (nT < 0) XT = 0;
        else {
          const TT = 3 * iT[QT + zT[OT + zT[HT]]];
          nT *= nT, XT = nT * nT * (FT[TT] * rT + FT[TT + 1] * AT + FT[TT + 2] * gT)
        }
        let qT = .6 - vT * vT - ET * ET - fT * fT;
        if (qT < 0) BT = 0;
        else {
          const TT = 3 * iT[QT + hT + zT[OT + wT + zT[HT + mT]]];
          qT *= qT, BT = qT * qT * (FT[TT] * vT + FT[TT + 1] * ET + FT[TT + 2] * fT)
        }
        let ZT = .6 - CT * CT - jT * jT - JT * JT;
        if (ZT < 0) ST = 0;
        else {
          const TT = 3 * iT[QT + eT + zT[OT + RT + zT[HT + uT]]];
          ZT *= ZT, ST = ZT * ZT * (FT[TT] * CT + FT[TT + 1] * jT + FT[TT + 2] * JT)
        }
        let lT = .6 - UT * UT - aT * aT - YT * YT;
        if (lT < 0) DT = 0;
        else {
          const TT = 3 * iT[QT + 1 + zT[OT + 1 + zT[HT + 1]]];
          lT *= lT, DT = lT * lT * (FT[TT] * UT + FT[TT + 1] * aT + FT[TT + 2] * YT)
        }
        return 32 * (XT + BT + ST + DT)
      }
      noise4D(TT, oT, IT, iT) {
        const zT = this.perm;
        let kT, WT, FT, DT, LT;
        const xT = (TT + oT + IT + iT) * XT,
          cT = Math.floor(TT + xT),
          KT = Math.floor(oT + xT),
          MT = Math.floor(IT + xT),
          rT = Math.floor(iT + xT),
          AT = (cT + KT + MT + rT) * BT,
          gT = TT - (cT - AT),
          hT = oT - (KT - AT),
          wT = IT - (MT - AT),
          mT = iT - (rT - AT);
        let eT = 0,
          RT = 0,
          uT = 0,
          vT = 0;
        gT > hT ? eT++ : RT++, gT > wT ? eT++ : uT++, gT > mT ? eT++ : vT++, hT > wT ? RT++ : uT++, hT > mT ? RT++ : vT++, wT > mT ? uT++ : vT++;
        const ET = eT >= 3 ? 1 : 0,
          fT = RT >= 3 ? 1 : 0,
          CT = uT >= 3 ? 1 : 0,
          jT = vT >= 3 ? 1 : 0,
          JT = eT >= 2 ? 1 : 0,
          UT = RT >= 2 ? 1 : 0,
          aT = uT >= 2 ? 1 : 0,
          YT = vT >= 2 ? 1 : 0,
          QT = eT >= 1 ? 1 : 0,
          OT = RT >= 1 ? 1 : 0,
          HT = uT >= 1 ? 1 : 0,
          nT = vT >= 1 ? 1 : 0,
          qT = gT - ET + BT,
          ZT = hT - fT + BT,
          lT = wT - CT + BT,
          sT = mT - jT + BT,
          tT = gT - JT + 2 * BT,
          GT = hT - UT + 2 * BT,
          pT = wT - aT + 2 * BT,
          bT = mT - YT + 2 * BT,
          yT = gT - QT + 3 * BT,
          NT = hT - OT + 3 * BT,
          PT = wT - HT + 3 * BT,
          dT = mT - nT + 3 * BT,
          VT = gT - 1 + 4 * BT,
          To = hT - 1 + 4 * BT,
          oo = wT - 1 + 4 * BT,
          Io = mT - 1 + 4 * BT,
          io = 255 & cT,
          zo = 255 & KT,
          ko = 255 & MT,
          Wo = 255 & rT;
        let Xo = .6 - gT * gT - hT * hT - wT * wT - mT * mT;
        if (Xo < 0) kT = 0;
        else {
          const TT = zT[io + zT[zo + zT[ko + zT[Wo]]]] % 32 * 4;
          Xo *= Xo, kT = Xo * Xo * (ST[TT] * gT + ST[TT + 1] * hT + ST[TT + 2] * wT + ST[TT + 3] * mT)
        }
        let Bo = .6 - qT * qT - ZT * ZT - lT * lT - sT * sT;
        if (Bo < 0) WT = 0;
        else {
          const TT = zT[io + ET + zT[zo + fT + zT[ko + CT + zT[Wo + jT]]]] % 32 * 4;
          Bo *= Bo, WT = Bo * Bo * (ST[TT] * qT + ST[TT + 1] * ZT + ST[TT + 2] * lT + ST[TT + 3] * sT)
        }
        let Fo = .6 - tT * tT - GT * GT - pT * pT - bT * bT;
        if (Fo < 0) FT = 0;
        else {
          const TT = zT[io + JT + zT[zo + UT + zT[ko + aT + zT[Wo + YT]]]] % 32 * 4;
          Fo *= Fo, FT = Fo * Fo * (ST[TT] * tT + ST[TT + 1] * GT + ST[TT + 2] * pT + ST[TT + 3] * bT)
        }
        let So = .6 - yT * yT - NT * NT - PT * PT - dT * dT;
        if (So < 0) DT = 0;
        else {
          const TT = zT[io + QT + zT[zo + OT + zT[ko + HT + zT[Wo + nT]]]] % 32 * 4;
          So *= So, DT = So * So * (ST[TT] * yT + ST[TT + 1] * NT + ST[TT + 2] * PT + ST[TT + 3] * dT)
        }
        let Do = .6 - VT * VT - To * To - oo * oo - Io * Io;
        if (Do < 0) LT = 0;
        else {
          const TT = zT[io + 1 + zT[zo + 1 + zT[ko + 1 + zT[Wo + 1]]]] % 32 * 4;
          Do *= Do, LT = Do * Do * (ST[TT] * VT + ST[TT + 1] * To + ST[TT + 2] * oo + ST[TT + 3] * Io)
        }
        return 27 * (kT + WT + FT + DT + LT)
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);