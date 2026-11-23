/*! For license information please see w4ddu.219.9f0b8b79.chunk.js.LICENSE.txt */
export const id = 219;
export const ids = [219];
export const modules = {
  39388: (CC, zC, ZC) => {
    CC.exports = wC;
    var QC = ZC(338);

    function wC(CC, zC) {
      if (!(this instanceof wC)) return new wC(CC, zC);
      var ZC = QC.create();
      QC.add(ZC, CC, zC), this.base = QC.min(QC.create(), CC, ZC), this.vec = QC.clone(zC), this.max = QC.max(QC.create(), CC, ZC), this.mag = QC.length(this.vec)
    }
    var bC = wC.prototype;
    bC.width = function() {
      return this.vec[0]
    }, bC.height = function() {
      return this.vec[1]
    }, bC.depth = function() {
      return this.vec[2]
    }, bC.x0 = function() {
      return this.base[0]
    }, bC.y0 = function() {
      return this.base[1]
    }, bC.z0 = function() {
      return this.base[2]
    }, bC.x1 = function() {
      return this.max[0]
    }, bC.y1 = function() {
      return this.max[1]
    }, bC.z1 = function() {
      return this.max[2]
    }, bC.translate = function(CC) {
      return QC.add(this.max, this.max, CC), QC.add(this.base, this.base, CC), this
    }, bC.setPosition = function(CC) {
      return QC.add(this.max, CC, this.vec), QC.copy(this.base, CC), this
    }, bC.expand = function(CC) {
      var zC = QC.create(),
        ZC = QC.create();
      return QC.max(zC, CC.max, this.max), QC.min(ZC, CC.base, this.base), QC.subtract(zC, zC, ZC), new wC(ZC, zC)
    }, bC.intersects = function(CC) {
      return !(CC.base[0] > this.max[0]) && (!(CC.base[1] > this.max[1]) && (!(CC.base[2] > this.max[2]) && (!(CC.max[0] < this.base[0]) && (!(CC.max[1] < this.base[1]) && !(CC.max[2] < this.base[2])))))
    }, bC.touches = function(CC) {
      var zC = this.union(CC);
      return null !== zC && (0 == zC.width() || 0 == zC.height() || 0 == zC.depth())
    }, bC.union = function(CC) {
      if (!this.intersects(CC)) return null;
      var zC = Math.max(CC.base[0], this.base[0]),
        ZC = Math.max(CC.base[1], this.base[1]),
        QC = Math.max(CC.base[2], this.base[2]);
      return new wC([zC, ZC, QC], [Math.min(CC.max[0], this.max[0]) - zC, Math.min(CC.max[1], this.max[1]) - ZC, Math.min(CC.max[2], this.max[2]) - QC])
    }
  },
  39384: CC => {
    CC.exports = function(CC, zC, ZC, QC, wC, bC) {
      var nC = +zC[0],
        fC = +zC[1],
        oC = +zC[2],
        qC = +ZC[0],
        FC = +ZC[1],
        WC = +ZC[2],
        NC = Math.sqrt(qC * qC + FC * FC + WC * WC);
      if (0 === NC) throw new Error("Can't raycast along a zero vector");
      return function(CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC) {
        for (var FC = 0, WC = Math.floor, NC = 0 | WC(zC), MC = 0 | WC(ZC), gC = 0 | WC(QC), SC = wC > 0 ? 1 : -1, pC = bC > 0 ? 1 : -1, PC = nC > 0 ? 1 : -1, GC = Math.abs(1 / wC), RC = Math.abs(1 / bC), AC = Math.abs(1 / nC), xC = GC < 1 / 0 ? GC * (SC > 0 ? NC + 1 - zC : zC - NC) : 1 / 0, JC = RC < 1 / 0 ? RC * (pC > 0 ? MC + 1 - ZC : ZC - MC) : 1 / 0, IC = AC < 1 / 0 ? AC * (PC > 0 ? gC + 1 - QC : QC - gC) : 1 / 0, iC = -1; FC <= fC;) {
          var vC = CC(NC, MC, gC);
          if (vC) return oC && (oC[0] = zC + FC * wC, oC[1] = ZC + FC * bC, oC[2] = QC + FC * nC), qC && (qC[0] = qC[1] = qC[2] = 0, 0 === iC && (qC[0] = -SC), 1 === iC && (qC[1] = -pC), 2 === iC && (qC[2] = -PC)), vC;
          xC < JC ? xC < IC ? (NC += SC, FC = xC, xC += GC, iC = 0) : (gC += PC, FC = IC, IC += AC, iC = 2) : JC < IC ? (MC += pC, FC = JC, JC += RC, iC = 1) : (gC += PC, FC = IC, IC += AC, iC = 2)
        }
        return oC && (oC[0] = zC + FC * wC, oC[1] = ZC + FC * bC, oC[2] = QC + FC * nC), qC && (qC[0] = qC[1] = qC[2] = 0), 0
      }(CC, nC, fC, oC, qC /= NC, FC /= NC, WC /= NC, QC = "undefined" === typeof QC ? 64 : +QC, wC, bC)
    }
  },
  38946: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => fC,
      d: () => bC
    });
    var QC = ZC(4036);
    let wC = null;

    function bC(CC) {
      return null !== wC && CC === wC
    }

    function nC() {
      this.rD = !1, this.stopPropagation = !1, this.jD = !1, this.disabled = !1
    }
    class fC {
      constructor(CC, zC) {
        this.version = "0.7.0";
        var ZC = Object.assign({}, new nC, zC || {});
        this.element = CC || document, this.rD = !!ZC.rD, this.stopPropagation = !!ZC.stopPropagation, this.jD = !!ZC.jD, this.disabled = !!ZC.disabled, this.filterEvents = (CC, zC) => !0, this.ignoreEvent = CC => !1, this.down = new QC.EventEmitter, this.up = new QC.EventEmitter, this.state = {}, this.Fy = {
          dx: 0,
          dy: 0,
          OCC: 0,
          kCC: 0,
          VCC: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? qC(this) : document.addEventListener("DOMContentLoaded", (CC => {
          qC(this)
        }), {
          once: !0
        })
      }
      bind(CC) {
        for (var zC = arguments.length, ZC = new Array(zC > 1 ? zC - 1 : 0), QC = 1; QC < zC; QC++) ZC[QC - 1] = arguments[QC];
        ZC.forEach((zC => {
          var ZC = this._keyBindmap[zC] || [];
          ZC.includes(CC) || (ZC.push(CC), this._keyBindmap[zC] = ZC)
        })), this.state[CC] = !!this.state[CC], this.pressCount[CC] = this.pressCount[CC] || 0, this.releaseCount[CC] = this.releaseCount[CC] || 0
      }
      unbind(CC) {
        for (var zC in this._keyBindmap) {
          var ZC = this._keyBindmap[zC],
            QC = ZC.indexOf(CC);
          QC > -1 && ZC.splice(QC, 1)
        }
      }
      getBindings() {
        var CC = {};
        for (var zC in this._keyBindmap) {
          this._keyBindmap[zC].forEach((ZC => {
            CC[ZC] = CC[ZC] || [], CC[ZC].push(zC)
          }))
        }
        return CC
      }
      ZN() {
        oC(this.Fy), oC(this.pressCount), oC(this.releaseCount)
      }
    }

    function oC(CC) {
      for (var zC in CC) CC[zC] = 0
    }

    function qC(CC) {
      window.addEventListener("keydown", pC.bind(null, CC, !0), !1), window.addEventListener("keyup", pC.bind(null, CC, !1), !1);
      var zC = {
        passive: !0
      };
      CC.element.addEventListener("touchstart", MC.bind(void 0, CC), {
        passive: !1
      }), CC.element.addEventListener("touchend", SC.bind(void 0, CC), zC), CC.element.addEventListener("mousedown", PC.bind(null, CC, !0), zC), window.document.addEventListener("mouseup", PC.bind(null, CC, !1), zC), CC.element.addEventListener("touchmove", GC.bind(null, CC), zC), CC.element.addEventListener("mousemove", GC.bind(null, CC), zC), window.PointerEvent, CC.element.addEventListener("wheel", RC.bind(null, CC), zC), CC.element.addEventListener("contextmenu", AC.bind(null, CC), !1), window.addEventListener("blur", IC.bind(null, CC), !1)
    }
    var FC = 0,
      WC = 0,
      NC = null;

    function MC(CC, zC) {
      zC.preventDefault(), gC(zC)
    }

    function gC(CC) {
      let zC = !1;
      for (let ZC = 0; ZC < CC.touches.length; ++ZC)
        if (CC.touches[ZC].identifier === NC) {
          zC = !0;
          break
        } if (!zC) {
        const zC = CC.changedTouches[0];
        FC = zC.clientX, WC = zC.clientY, NC = zC.identifier
      }
    }

    function SC(CC, zC) {
      for (var ZC = zC.changedTouches, QC = 0; QC < ZC.length; ++QC) ZC[QC].identifier === NC && (NC = null)
    }

    function pC(CC, zC, ZC) {
      if (!CC.ignoreEvent(ZC)) try {
        iC(CC, ZC), zC && ZC.isTrusted && !ZC.repeat && CC._keyStates[ZC.code] && vC(CC, ZC.code)
      } finally {
        eC(ZC.code, zC, CC, ZC)
      }
    }

    function PC(CC, zC, ZC) {
      if (!CC.ignoreEvent(ZC)) try {
        iC(CC, ZC)
      } finally {
        ! function(CC, zC, ZC) {
          if ("pointerId" in ZC)
            if (zC) {
              if (null !== CC._touches.currID) return;
              CC._touches.currID = ZC.pointerId
            } else {
              if (CC._touches.currID !== ZC.pointerId) return;
              CC._touches.currID = null
            } var QC = "button" in ZC ? ZC.button + 1 : 1;
          eC("Mouse" + QC, zC, CC, ZC)
        }(CC, zC, ZC)
      }
    }

    function GC(CC, zC) {
      var ZC = zC.movementX || zC.mozMovementX || 0,
        QC = zC.movementY || zC.mozMovementY || 0;
      if (zC.touches && 0 === (ZC | QC)) {
        var wC = function(CC) {
          gC(CC);
          for (let zC = 0; zC < CC.changedTouches.length; ++zC)
            if (CC.changedTouches[zC].identifier == NC) {
              const ZC = CC.changedTouches[zC],
                QC = [ZC.clientX - FC, ZC.clientY - WC];
              return FC = ZC.clientX, WC = ZC.clientY, QC
            } return console.error(`Did not find touch id ${NC}`), [0, 0]
        }(zC);
        ZC = wC[0], QC = wC[1]
      }
      CC.Fy.dx += ZC, CC.Fy.dy += QC
    }

    function RC(CC, zC) {
      iC(CC, zC);
      var ZC = 1;
      switch (zC.deltaMode) {
        case 0:
          ZC = 1;
          break;
        case 1:
          ZC = 12;
          break;
        case 2:
          ZC = CC.element.clientHeight || window.innerHeight
      }
      CC.Fy.OCC += (zC.deltaX || 0) * ZC, CC.Fy.kCC += (zC.deltaY || 0) * ZC, CC.Fy.VCC += (zC.deltaZ || 0) * ZC
    }

    function AC(CC, zC) {
      if (!CC.jD) return zC.preventDefault(), !1
    }
    var xC = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function JC(CC, zC) {
      return !!CC[xC[zC]] || ("AltRight" === zC || "ControlLeft" === zC) && "function" === typeof CC.getModifierState && !0 === CC.getModifierState("AltGraph")
    }

    function IC(CC, zC) {
      for (var ZC in CC._modifiersHeldThroughBlur = {}, xC) CC._keyStates[ZC] && (CC._modifiersHeldThroughBlur[ZC] = !0);
      zC && zC.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (CC) {
          return !0
        }
      }() && (clearTimeout(CC._blurRelease), CC._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var zC in CC._modifiersHeldThroughBlur = {}, CC._keyStates) CC._keyStates[zC] && !/^Mouse\d/.test(zC) && vC(CC, zC)
      }), 0))
    }

    function iC(CC, zC) {
      var ZC = CC._modifiersHeldThroughBlur;
      if (ZC && zC.isTrusted && document.hasFocus())
        for (var QC in ZC) delete ZC[QC], CC._keyStates[QC] && QC !== zC.code && (JC(zC, QC) || vC(CC, QC))
    }

    function vC(CC, zC) {
      const ZC = {
          code: zC,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        QC = wC;
      wC = ZC;
      try {
        eC(zC, !1, CC, ZC)
      } finally {
        wC = QC
      }
    }

    function eC(CC, zC, ZC, QC) {
      var wC = ZC._keyBindmap[CC];
      wC && (hC(ZC._keyStates[CC], zC) && (ZC._keyStates[CC] = zC, wC.forEach((CC => {
        (!ZC.filterEvents || ZC.filterEvents(QC, CC)) && function(CC, zC, ZC, QC) {
          var wC = zC ? ZC.pressCount : ZC.releaseCount;
          wC[CC] = (wC[CC] || 0) + 1;
          var bC = ZC._bindPressCount[CC] || 0;
          (bC += zC ? 1 : -1) < 0 && (bC = 0);
          ZC._bindPressCount[CC] = bC;
          var nC = ZC.state[CC];
          if (hC(nC, bC)) {
            ZC.state[CC] = bC > 0;
            var fC = zC ? ZC.down : ZC.up;
            ZC.disabled || fC.emit(CC, QC)
          }
        }(CC, zC, ZC, QC)
      }))), "button" in QC || (ZC.rD && !QC.defaultPrevented && QC.preventDefault(), ZC.stopPropagation && QC.stopPropagation()))
    }

    function hC(CC, zC) {
      return CC ? !zC : zC
    }
  },
  36417: (CC, zC) => {
    function ZC(CC) {
      if (CC && "object" === typeof CC) {
        var zC = CC.which || CC.keyCode || CC.charCode;
        zC && (CC = zC)
      }
      if ("number" === typeof CC) return nC[CC];
      var ZC, bC = String(CC);
      return (ZC = QC[bC.toLowerCase()]) ? ZC : (ZC = wC[bC.toLowerCase()]) || (1 === bC.length ? bC.charCodeAt(0) : void 0)
    }
    ZC.isEventKey = function(CC, zC) {
      if (CC && "object" === typeof CC) {
        var ZC = CC.which || CC.keyCode || CC.charCode;
        if (null === ZC || void 0 === ZC) return !1;
        if ("string" === typeof zC) {
          var bC;
          if (bC = QC[zC.toLowerCase()]) return bC === ZC;
          if (bC = wC[zC.toLowerCase()]) return bC === ZC
        } else if ("number" === typeof zC) return zC === ZC;
        return !1
      }
    };
    var QC = (zC = CC.exports = ZC).code = zC.codes = {
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
      wC = zC.aliases = {
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
    for (bC = 97; bC < 123; bC++) QC[String.fromCharCode(bC)] = bC - 32;
    for (var bC = 48; bC < 58; bC++) QC[bC - 48] = bC;
    for (bC = 1; bC < 13; bC++) QC["f" + bC] = bC + 111;
    for (bC = 0; bC < 10; bC++) QC["numpad " + bC] = bC + 96;
    var nC = zC.names = zC.title = {};
    for (bC in QC) nC[QC[bC]] = bC;
    for (var fC in wC) QC[fC] = wC[fC]
  },
  39376: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => QC
    });
    class QC {
      constructor() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        this.Gl = !1, this.Rl = !1, this.Jm = 30, this.yE = 0, this.Al = 100, this.rp = !1, this.fullscreen = !1, this.sG = function(CC) {}, this.Kl = function(CC, zC, ZC) {}, this.Bl = function() {}, this.mG = function() {}, this.Tl = function() {}, this.onFullscreenChanged = function() {}, this.onPointerLockError = function(CC) {}, this._data = new wC(zC),
          function(CC) {
            if ("loading" === document.readyState) {
              var zC = () => {
                document.removeEventListener("readystatechange", zC), CC()
              };
              document.addEventListener("readystatechange", zC)
            } else setTimeout(CC, 0)
          }((() => {
            ! function(CC) {
              var zC = CC._data,
                ZC = zC.nowObject.now();
              zC.lastTickStarted = ZC, zC.lastFrameStarted = ZC, zC.lastRenderStarted = ZC, zC.frameCB = () => function(CC) {
                var zC = CC._data;
                requestAnimationFrame(zC.frameCB), fC(CC);
                var ZC = zC.nowObject.now(),
                  QC = ZC - zC.lastFrameStarted;
                if (zC.lastFrameStarted = ZC, CC.yE > 0) {
                  zC.renderAccum += QC;
                  var wC = 1e3 / CC.yE;
                  if (zC.renderAccum < wC) return;
                  zC.renderAccum -= wC, zC.renderAccum > wC && (zC.renderAccum = wC)
                }
                var bC = ZC - zC.lastRenderStarted;
                zC.lastRenderStarted = ZC;
                var nC = 1e3 / CC.Jm,
                  oC = (ZC - zC.lastTickStarted) / nC;
                oC < 0 && (oC = 0);
                CC.Kl(bC, oC, nC), setTimeout(fC, 0, CC, !0)
              }(CC), zC.intervalCB = () => fC(CC), requestAnimationFrame(zC.frameCB), zC.pollTime > 0 && (zC.intervalID = setInterval(zC.intervalCB, Math.max(zC.pollTime, 1e3 / CC.Jm / 2)))
            }(this),
            function(CC, zC) {
              if (!zC) return;
              var ZC = !1,
                QC = !1,
                wC = CC => {
                  if (!!CC !== (ZC = zC === document.pointerLockElement))
                    if (CC) {
                      var QC = zC.requestPointerLock();
                      QC && QC.catch && QC.catch((CC => {}))
                    } else document.exitPointerLock()
                },
                bC = CC => {
                  !!CC !== (QC = zC === document.fullscreenElement) && (CC ? zC.requestFullscreen ? zC.requestFullscreen() : zC.webkitRequestFullscreen && zC.webkitRequestFullscreen() : document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen())
                };
              document.addEventListener("pointerlockchange", (QC => {
                ZC = zC === document.pointerLockElement, CC.Tl(ZC)
              })), document.addEventListener("fullscreenchange", (ZC => {
                QC = zC === document.fullscreenElement, CC.onFullscreenChanged(QC)
              })), document.addEventListener("pointerlockerror", (QC => {
                ZC = zC === document.pointerLockElement, CC.onPointerLockError(QC)
              })), Object.defineProperty(CC, "rp", {
                get: () => ZC,
                set: wC
              }), Object.defineProperty(CC, "fullscreen", {
                get: () => QC,
                set: bC
              }), zC.addEventListener("click", (zC => {
                CC.Gl && wC(!0), CC.Rl && bC(!0)
              }));
              var nC = () => CC.mG();
              if (window.ResizeObserver) {
                new ResizeObserver(nC).observe(zC)
              } else window.addEventListener("resize", nC)
            }(this, CC), this.Bl()
          }))
      }
    }

    function wC() {
      let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      this.nowObject = performance || Date, this.pollTime = CC, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
    }
    var bC = 3,
      nC = 20;

    function fC(CC) {
      for (var zC = CC._data, ZC = 1e3 / CC.Jm, QC = zC.nowObject.now() + nC, wC = 0; zC.nowObject.now() >= zC.lastTickStarted + ZC && zC.nowObject.now() < QC && ++wC <= bC;) CC.sG(ZC), zC.lastTickStarted += ZC;
      var fC = 5 * (ZC + 5),
        oC = zC.nowObject.now();
      if (oC - zC.lastTickStarted > fC)
        for (; oC >= zC.lastTickStarted + ZC;) zC.lastTickStarted += ZC
    }
  },
  36581: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => nC
    });
    var QC = ZC(48);
    const wC = QC.useLayoutEffect;
    const bC = function(CC) {
      var zC = (0, QC.useRef)(CC);
      return wC((function() {
        zC.current = CC
      })), zC
    };
    var nC = function(CC) {
      var zC = bC(CC);
      (0, QC.useEffect)((function() {
        var CC = function(CC) {
          var ZC;
          if (null != zC.current && (ZC = zC.current(CC)), CC.defaultPrevented && (CC.returnValue = ""), "string" === typeof ZC) return CC.returnValue = ZC, ZC
        };
        return window.addEventListener("beforeunload", CC),
          function() {
            window.removeEventListener("beforeunload", CC)
          }
      }), [])
    }
  },
  36466: CC => {
    var zC, ZC = "undefined" !== typeof window ? window.navigator.userAgent : "",
      QC = /OS X/.test(ZC),
      wC = /Opera/.test(ZC),
      bC = !/like Gecko/.test(ZC) && !wC,
      nC = CC.exports = {
        0: QC ? "<menu>" : "<UNK>",
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
        93: QC ? "<meta>" : "<menu>",
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
        173: QC && bC ? "-" : "<volume-mute>",
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
        231: wC ? "`" : "<unicode>",
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
    for (zC = 58; zC < 65; ++zC) nC[zC] = String.fromCharCode(zC);
    for (zC = 48; zC < 58; ++zC) nC[zC] = zC - 48 + "";
    for (zC = 65; zC < 91; ++zC) nC[zC] = String.fromCharCode(zC);
    for (zC = 96; zC < 106; ++zC) nC[zC] = "<num-" + (zC - 96) + ">";
    for (zC = 112; zC < 136; ++zC) nC[zC] = "F" + (zC - 111)
  },
  38815: (CC, zC, ZC) => {
    function QC(CC, zC, ZC, QC, wC) {
      var bC = {};
      return Object.keys(QC).forEach((function(CC) {
        bC[CC] = QC[CC]
      })), bC.enumerable = !!bC.enumerable, bC.configurable = !!bC.configurable, ("value" in bC || bC.initializer) && (bC.writable = !0), bC = ZC.slice().reverse().reduce((function(ZC, QC) {
        return QC(CC, zC, ZC) || ZC
      }), bC), wC && void 0 !== bC.initializer && (bC.value = bC.initializer ? bC.initializer.call(wC) : void 0, bC.initializer = void 0), void 0 === bC.initializer && (Object.defineProperty(CC, zC, bC), bC = null), bC
    }
    ZC.d(zC, {
      d: () => QC
    })
  },
  38813: (CC, zC, ZC) => {
    function QC(CC, zC, ZC, QC) {
      ZC && Object.defineProperty(CC, zC, {
        enumerable: ZC.enumerable,
        configurable: ZC.configurable,
        writable: ZC.writable,
        value: ZC.initializer ? ZC.initializer.call(QC) : void 0
      })
    }
    ZC.d(zC, {
      b: () => QC
    })
  },
  38501: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => bC
    });
    var QC = ZC(38507);
    const wC = (CC, zC, ZC) => CC ? CC.getClassName && "Mesh" === CC.getClassName() ? null : !CC.getClassName || "SubMesh" !== CC.getClassName() && "PhysicsBody" !== CC.getClassName() ? CC.clone ? CC.clone() : Array.isArray(CC) ? CC.slice() : ZC && "object" === typeof CC ? {
      ...CC
    } : null : CC.clone(zC) : null;
    class bC {
      static DeepCopy(CC, zC, ZC, bC) {
        let nC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const fC = function(CC) {
          const zC = [];
          do {
            const ZC = Object.getOwnPropertyNames(CC);
            for (const CC of ZC) - 1 === zC.indexOf(CC) && zC.push(CC)
          } while (CC = Object.getPrototypeOf(CC));
          return zC
        }(CC);
        for (const qC of fC) {
          if ("_" === qC[0] && (!bC || -1 === bC.indexOf(qC))) continue;
          if (qC.endsWith("Observable")) continue;
          if (ZC && -1 !== ZC.indexOf(qC)) continue;
          const fC = CC[qC],
            FC = typeof fC;
          if ("function" !== FC) try {
            if ("object" === FC)
              if (fC instanceof Uint8Array) zC[qC] = Uint8Array.from(fC);
              else if (fC instanceof Array) {
              if (zC[qC] = [], fC.length > 0)
                if ("object" == typeof fC[0])
                  for (let CC = 0; CC < fC.length; CC++) {
                    const ZC = wC(fC[CC], zC, nC); - 1 === zC[qC].indexOf(ZC) && zC[qC].push(ZC)
                  } else zC[qC] = fC.slice(0)
            } else zC[qC] = wC(fC, zC, nC);
            else zC[qC] = fC
          } catch (oC) {
            QC.c.Warn(oC.message)
          }
        }
      }
    }
  },
  38538: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => wC,
      f: () => bC,
      g: () => nC,
      k: () => fC
    });
    var QC = ZC(37142);
    class wC {
      constructor(CC, zC, ZC) {
        this.gradient = CC, this.color1 = zC, this.color2 = ZC
      }
      getColorToRef(CC) {
        this.color2 ? QC.g.LerpToRef(this.color1, this.color2, Math.random(), CC) : CC.Av(this.color1)
      }
    }
    class bC {
      constructor(CC, zC) {
        this.gradient = CC, this.color = zC
      }
    }
    class nC {
      constructor(CC, zC, ZC) {
        this.gradient = CC, this.factor1 = zC, this.factor2 = ZC
      }
      getFactor() {
        return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
      }
    }
    class fC {
      static GetCurrentGradient(CC, zC, ZC) {
        if (zC[0].gradient > CC) return void ZC(zC[0], zC[0], 1);
        for (let wC = 0; wC < zC.length - 1; wC++) {
          const QC = zC[wC],
            bC = zC[wC + 1];
          if (CC >= QC.gradient && CC <= bC.gradient) {
            return void ZC(QC, bC, (CC - QC.gradient) / (bC.gradient - QC.gradient))
          }
        }
        const QC = zC.length - 1;
        ZC(zC[QC], zC[QC], 1)
      }
    }
  },
  38507: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => QC
    });
    class QC {
      static _CheckLimit(CC, zC) {
        let ZC = QC._LogLimitOutputs[CC];
        return ZC ? ZC.current++ : (ZC = {
          limit: zC,
          current: 1
        }, QC._LogLimitOutputs[CC] = ZC), ZC.current <= ZC.limit
      }
      static _GenerateLimitMessage(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const ZC = QC._LogLimitOutputs[CC];
        if (!ZC || !QC.MessageLimitReached) return;
        const wC = this._Levels[zC];
        ZC.current === ZC.limit && QC[wC.name](QC.MessageLimitReached.replace(/%LIMIT%/g, "" + ZC.limit).replace(/%TYPE%/g, wC.name ?? ""))
      }
      static _AddLogEntry(CC) {
        QC._LogCache = CC + QC._LogCache, QC.OnNewCacheEntry && QC.OnNewCacheEntry(CC)
      }
      static _FormatMessage(CC) {
        const zC = CC => CC < 10 ? "0" + CC : "" + CC,
          ZC = new Date;
        return "[" + zC(ZC.getHours()) + ":" + zC(ZC.getMinutes()) + ":" + zC(ZC.getSeconds()) + "]: " + CC
      }
      static _LogDisabled(CC, zC) {}
      static _LogEnabled() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          zC = arguments.length > 1 ? arguments[1] : void 0,
          ZC = arguments.length > 2 ? arguments[2] : void 0;
        const wC = Array.isArray(zC) ? zC[0] : zC;
        if (void 0 !== ZC && !QC._CheckLimit(wC, ZC)) return;
        const bC = QC._FormatMessage(wC),
          nC = this._Levels[CC],
          fC = Array.isArray(zC) ? zC.slice(1) : [];
        nC.logFunc && nC.logFunc("BJS - " + bC, ...fC);
        const oC = `<div style='color:${nC.color}'>${bC}</div><br>`;
        QC._AddLogEntry(oC), QC._GenerateLimitMessage(wC, CC)
      }
      static get LogCache() {
        return QC._LogCache
      }
      static ClearLogCache() {
        QC._LogCache = "", QC._LogLimitOutputs = {}, QC.errorsCount = 0
      }
      static set LogLevels(CC) {
        QC.Log = QC._LogDisabled, QC.Warn = QC._LogDisabled, QC.Error = QC._LogDisabled;
        const zC = [QC.MessageLogLevel, QC.WarningLogLevel, QC.ErrorLogLevel];
        for (const ZC of zC)
          if ((CC & ZC) === ZC) {
            const CC = this._Levels[ZC];
            QC[CC.name] = QC._LogEnabled.bind(QC, ZC)
          }
      }
    }
    QC.NoneLogLevel = 0, QC.MessageLogLevel = 1, QC.WarningLogLevel = 2, QC.ErrorLogLevel = 4, QC.AllLogLevel = 7, QC.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", QC._LogCache = "", QC._LogLimitOutputs = {}, QC._Levels = [{}, {
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
    }], QC.errorsCount = 0, QC.Log = QC._LogEnabled.bind(QC, QC.MessageLogLevel), QC.Warn = QC._LogEnabled.bind(QC, QC.WarningLogLevel), QC.Error = QC._LogEnabled.bind(QC, QC.ErrorLogLevel)
  },
  38544: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => nC
    });
    var QC = ZC(36963),
      wC = ZC(36991),
      bC = ZC(38501);
    class nC {
      constructor() {
        this.direction1 = new QC.r(0, 1, 0), this.direction2 = new QC.r(0, 1, 0), this.minEmitBox = new QC.r(-.5, -.5, -.5), this.maxEmitBox = new QC.r(.5, .5, .5)
      }
      startDirectionFunction(CC, zC, ZC, bC) {
        const nC = (0, wC.RandomRange)(this.direction1.x, this.direction2.x),
          fC = (0, wC.RandomRange)(this.direction1.y, this.direction2.y),
          oC = (0, wC.RandomRange)(this.direction1.z, this.direction2.z);
        if (bC) return zC.x = nC, zC.y = fC, void(zC.z = oC);
        QC.r.TransformNormalFromFloatsToRef(nC, fC, oC, CC, zC)
      }
      startPositionFunction(CC, zC, ZC, bC) {
        const nC = (0, wC.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
          fC = (0, wC.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
          oC = (0, wC.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
        if (bC) return zC.x = nC, zC.y = fC, void(zC.z = oC);
        QC.r.TransformCoordinatesFromFloatsToRef(nC, fC, oC, CC, zC)
      }
      clone() {
        const CC = new nC;
        return bC.e.DeepCopy(this, CC), CC
      }
      applyToShader(CC) {
        CC.setVector3("direction1", this.direction1), CC.setVector3("direction2", this.direction2), CC.setVector3("minEmitBox", this.minEmitBox), CC.setVector3("maxEmitBox", this.maxEmitBox)
      }
      buildUniformLayout(CC) {
        CC.addUniform("direction1", 3), CC.addUniform("direction2", 3), CC.addUniform("minEmitBox", 3), CC.addUniform("maxEmitBox", 3)
      }
      getEffectDefines() {
        return "#define BOXEMITTER"
      }
      getClassName() {
        return "BoxParticleEmitter"
      }
      serialize() {
        const CC = {};
        return CC.type = this.getClassName(), CC.direction1 = this.direction1.VZC(), CC.direction2 = this.direction2.VZC(), CC.minEmitBox = this.minEmitBox.VZC(), CC.maxEmitBox = this.maxEmitBox.VZC(), CC
      }
      parse(CC) {
        QC.r.FromArrayToRef(CC.direction1, 0, this.direction1), QC.r.FromArrayToRef(CC.direction2, 0, this.direction2), QC.r.FromArrayToRef(CC.minEmitBox, 0, this.minEmitBox), QC.r.FromArrayToRef(CC.maxEmitBox, 0, this.maxEmitBox)
      }
    }
  },
  38497: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => fC,
      i: () => nC
    });
    var QC = ZC(36963),
      wC = ZC(36991),
      bC = ZC(38501);
    class nC {
      constructor() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          wC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.radius = CC, this.height = zC, this.radiusRange = ZC, this.directionRandomizer = wC, this._tempVector = QC.r.Zero()
      }
      startDirectionFunction(CC, zC, ZC, bC, nC) {
        ZC.position.subtractToRef(CC.getTranslation(), this._tempVector), this._tempVector.normalize(), QC.r.TransformNormalToRef(this._tempVector, nC, this._tempVector);
        const fC = (0, wC.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
        let oC = Math.atan2(this._tempVector.x, this._tempVector.z);
        oC += (0, wC.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = fC, this._tempVector.x = Math.sin(oC), this._tempVector.z = Math.cos(oC), this._tempVector.normalize(), bC ? zC.Av(this._tempVector) : QC.r.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, CC, zC)
      }
      startPositionFunction(CC, zC, ZC, bC) {
        const nC = (0, wC.RandomRange)(-this.height / 2, this.height / 2),
          fC = (0, wC.RandomRange)(0, 2 * Math.PI),
          oC = (0, wC.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
          qC = Math.sqrt(oC) * this.radius,
          FC = qC * Math.cos(fC),
          WC = qC * Math.sin(fC);
        bC ? zC.L_(FC, nC, WC) : QC.r.TransformCoordinatesFromFloatsToRef(FC, nC, WC, CC, zC)
      }
      clone() {
        const CC = new nC(this.radius, this.directionRandomizer);
        return bC.e.DeepCopy(this, CC), CC
      }
      applyToShader(CC) {
        CC.setFloat("radius", this.radius), CC.setFloat("height", this.height), CC.setFloat("radiusRange", this.radiusRange), CC.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(CC) {
        CC.addUniform("radius", 1), CC.addUniform("height", 1), CC.addUniform("radiusRange", 1), CC.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderParticleEmitter"
      }
      serialize() {
        const CC = {};
        return CC.type = this.getClassName(), CC.radius = this.radius, CC.height = this.height, CC.radiusRange = this.radiusRange, CC.directionRandomizer = this.directionRandomizer, CC
      }
      parse(CC) {
        this.radius = CC.radius, this.height = CC.height, this.radiusRange = CC.radiusRange, this.directionRandomizer = CC.directionRandomizer
      }
    }
    class fC extends nC {
      constructor() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          wC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new QC.r(0, 1, 0),
          bC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new QC.r(0, 1, 0);
        super(CC, zC, ZC), this.direction1 = wC, this.direction2 = bC
      }
      startDirectionFunction(CC, zC, ZC, bC) {
        const nC = (0, wC.RandomRange)(this.direction1.x, this.direction2.x),
          fC = (0, wC.RandomRange)(this.direction1.y, this.direction2.y),
          oC = (0, wC.RandomRange)(this.direction1.z, this.direction2.z);
        bC ? zC.L_(nC, fC, oC) : QC.r.TransformNormalFromFloatsToRef(nC, fC, oC, CC, zC)
      }
      clone() {
        const CC = new fC(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
        return bC.e.DeepCopy(this, CC), CC
      }
      applyToShader(CC) {
        CC.setFloat("radius", this.radius), CC.setFloat("height", this.height), CC.setFloat("radiusRange", this.radiusRange), CC.setVector3("direction1", this.direction1), CC.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(CC) {
        CC.addUniform("radius", 1), CC.addUniform("height", 1), CC.addUniform("radiusRange", 1), CC.addUniform("direction1", 3), CC.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER\n#define DIRECTEDCYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderDirectedParticleEmitter"
      }
      serialize() {
        const CC = super.serialize();
        return CC.direction1 = this.direction1.VZC(), CC.direction2 = this.direction2.VZC(), CC
      }
      parse(CC) {
        super.parse(CC), QC.r.FromArrayToRef(CC.direction1, 0, this.direction1), QC.r.FromArrayToRef(CC.direction2, 0, this.direction2)
      }
    }
  },
  38617: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => WC
    });
    const QC = .5 * (Math.sqrt(3) - 1),
      wC = (3 - Math.sqrt(3)) / 6,
      bC = 1 / 3,
      nC = 1 / 6,
      fC = (Math.sqrt(5) - 1) / 4,
      oC = (5 - Math.sqrt(5)) / 20,
      qC = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
      FC = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]);
    const WC = class {
      constructor() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
        const zC = "function" == typeof CC ? CC : function(CC) {
          let zC = 0,
            ZC = 0,
            QC = 0,
            wC = 1;
          const bC = function() {
            let CC = 4022871197;
            return function(zC) {
              zC = zC.toString();
              for (let ZC = 0; ZC < zC.length; ZC++) {
                CC += zC.charCodeAt(ZC);
                let QC = .02519603282416938 * CC;
                CC = QC >>> 0, QC -= CC, QC *= CC, CC = QC >>> 0, QC -= CC, CC += 4294967296 * QC
              }
              return 2.3283064365386963e-10 * (CC >>> 0)
            }
          }();
          zC = bC(" "), ZC = bC(" "), QC = bC(" "), zC -= bC(CC), zC < 0 && (zC += 1);
          ZC -= bC(CC), ZC < 0 && (ZC += 1);
          QC -= bC(CC), QC < 0 && (QC += 1);
          return function() {
            const CC = 2091639 * zC + 2.3283064365386963e-10 * wC;
            return zC = ZC, ZC = QC, QC = CC - (wC = 0 | CC)
          }
        }(CC);
        this.p = function(CC) {
          const zC = new Uint8Array(256);
          for (let ZC = 0; ZC < 256; ZC++) zC[ZC] = ZC;
          for (let ZC = 0; ZC < 255; ZC++) {
            const QC = ZC + ~~(CC() * (256 - ZC)),
              wC = zC[ZC];
            zC[ZC] = zC[QC], zC[QC] = wC
          }
          return zC
        }(zC), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
        for (let ZC = 0; ZC < 512; ZC++) this.perm[ZC] = this.p[255 & ZC], this.permMod12[ZC] = this.perm[ZC] % 12
      }
      noise2D(CC, zC) {
        const ZC = this.permMod12,
          bC = this.perm;
        let nC = 0,
          fC = 0,
          oC = 0;
        const FC = (CC + zC) * QC,
          WC = Math.floor(CC + FC),
          NC = Math.floor(zC + FC),
          MC = (WC + NC) * wC,
          gC = CC - (WC - MC),
          SC = zC - (NC - MC);
        let pC, PC;
        gC > SC ? (pC = 1, PC = 0) : (pC = 0, PC = 1);
        const GC = gC - pC + wC,
          RC = SC - PC + wC,
          AC = gC - 1 + 2 * wC,
          xC = SC - 1 + 2 * wC,
          JC = 255 & WC,
          IC = 255 & NC;
        let iC = .5 - gC * gC - SC * SC;
        if (iC >= 0) {
          const CC = 3 * ZC[JC + bC[IC]];
          iC *= iC, nC = iC * iC * (qC[CC] * gC + qC[CC + 1] * SC)
        }
        let vC = .5 - GC * GC - RC * RC;
        if (vC >= 0) {
          const CC = 3 * ZC[JC + pC + bC[IC + PC]];
          vC *= vC, fC = vC * vC * (qC[CC] * GC + qC[CC + 1] * RC)
        }
        let eC = .5 - AC * AC - xC * xC;
        if (eC >= 0) {
          const CC = 3 * ZC[JC + 1 + bC[IC + 1]];
          eC *= eC, oC = eC * eC * (qC[CC] * AC + qC[CC + 1] * xC)
        }
        return 70 * (nC + fC + oC)
      }
      noise3D(CC, zC, ZC) {
        const QC = this.permMod12,
          wC = this.perm;
        let fC, oC, FC, WC;
        const NC = (CC + zC + ZC) * bC,
          MC = Math.floor(CC + NC),
          gC = Math.floor(zC + NC),
          SC = Math.floor(ZC + NC),
          pC = (MC + gC + SC) * nC,
          PC = CC - (MC - pC),
          GC = zC - (gC - pC),
          RC = ZC - (SC - pC);
        let AC, xC, JC, IC, iC, vC;
        PC >= GC ? GC >= RC ? (AC = 1, xC = 0, JC = 0, IC = 1, iC = 1, vC = 0) : PC >= RC ? (AC = 1, xC = 0, JC = 0, IC = 1, iC = 0, vC = 1) : (AC = 0, xC = 0, JC = 1, IC = 1, iC = 0, vC = 1) : GC < RC ? (AC = 0, xC = 0, JC = 1, IC = 0, iC = 1, vC = 1) : PC < RC ? (AC = 0, xC = 1, JC = 0, IC = 0, iC = 1, vC = 1) : (AC = 0, xC = 1, JC = 0, IC = 1, iC = 1, vC = 0);
        const eC = PC - AC + nC,
          hC = GC - xC + nC,
          KC = RC - JC + nC,
          YC = PC - IC + 2 * nC,
          dC = GC - iC + 2 * nC,
          mC = RC - vC + 2 * nC,
          HC = PC - 1 + .5,
          EC = GC - 1 + .5,
          lC = RC - 1 + .5,
          XC = 255 & MC,
          cC = 255 & gC,
          uC = 255 & SC;
        let rC = .6 - PC * PC - GC * GC - RC * RC;
        if (rC < 0) fC = 0;
        else {
          const CC = 3 * QC[XC + wC[cC + wC[uC]]];
          rC *= rC, fC = rC * rC * (qC[CC] * PC + qC[CC + 1] * GC + qC[CC + 2] * RC)
        }
        let sC = .6 - eC * eC - hC * hC - KC * KC;
        if (sC < 0) oC = 0;
        else {
          const CC = 3 * QC[XC + AC + wC[cC + xC + wC[uC + JC]]];
          sC *= sC, oC = sC * sC * (qC[CC] * eC + qC[CC + 1] * hC + qC[CC + 2] * KC)
        }
        let TC = .6 - YC * YC - dC * dC - mC * mC;
        if (TC < 0) FC = 0;
        else {
          const CC = 3 * QC[XC + IC + wC[cC + iC + wC[uC + vC]]];
          TC *= TC, FC = TC * TC * (qC[CC] * YC + qC[CC + 1] * dC + qC[CC + 2] * mC)
        }
        let aC = .6 - HC * HC - EC * EC - lC * lC;
        if (aC < 0) WC = 0;
        else {
          const CC = 3 * QC[XC + 1 + wC[cC + 1 + wC[uC + 1]]];
          aC *= aC, WC = aC * aC * (qC[CC] * HC + qC[CC + 1] * EC + qC[CC + 2] * lC)
        }
        return 32 * (fC + oC + FC + WC)
      }
      noise4D(CC, zC, ZC, QC) {
        const wC = this.perm;
        let bC, nC, qC, WC, NC;
        const MC = (CC + zC + ZC + QC) * fC,
          gC = Math.floor(CC + MC),
          SC = Math.floor(zC + MC),
          pC = Math.floor(ZC + MC),
          PC = Math.floor(QC + MC),
          GC = (gC + SC + pC + PC) * oC,
          RC = CC - (gC - GC),
          AC = zC - (SC - GC),
          xC = ZC - (pC - GC),
          JC = QC - (PC - GC);
        let IC = 0,
          iC = 0,
          vC = 0,
          eC = 0;
        RC > AC ? IC++ : iC++, RC > xC ? IC++ : vC++, RC > JC ? IC++ : eC++, AC > xC ? iC++ : vC++, AC > JC ? iC++ : eC++, xC > JC ? vC++ : eC++;
        const hC = IC >= 3 ? 1 : 0,
          KC = iC >= 3 ? 1 : 0,
          YC = vC >= 3 ? 1 : 0,
          dC = eC >= 3 ? 1 : 0,
          mC = IC >= 2 ? 1 : 0,
          HC = iC >= 2 ? 1 : 0,
          EC = vC >= 2 ? 1 : 0,
          lC = eC >= 2 ? 1 : 0,
          XC = IC >= 1 ? 1 : 0,
          cC = iC >= 1 ? 1 : 0,
          uC = vC >= 1 ? 1 : 0,
          rC = eC >= 1 ? 1 : 0,
          sC = RC - hC + oC,
          TC = AC - KC + oC,
          aC = xC - YC + oC,
          tC = JC - dC + oC,
          DC = RC - mC + 2 * oC,
          jC = AC - HC + 2 * oC,
          yC = xC - EC + 2 * oC,
          LC = JC - lC + 2 * oC,
          UC = RC - XC + 3 * oC,
          BC = AC - cC + 3 * oC,
          OC = xC - uC + 3 * oC,
          kC = JC - rC + 3 * oC,
          VC = RC - 1 + 4 * oC,
          Cz = AC - 1 + 4 * oC,
          zz = xC - 1 + 4 * oC,
          Zz = JC - 1 + 4 * oC,
          Qz = 255 & gC,
          wz = 255 & SC,
          bz = 255 & pC,
          nz = 255 & PC;
        let fz = .6 - RC * RC - AC * AC - xC * xC - JC * JC;
        if (fz < 0) bC = 0;
        else {
          const CC = wC[Qz + wC[wz + wC[bz + wC[nz]]]] % 32 * 4;
          fz *= fz, bC = fz * fz * (FC[CC] * RC + FC[CC + 1] * AC + FC[CC + 2] * xC + FC[CC + 3] * JC)
        }
        let oz = .6 - sC * sC - TC * TC - aC * aC - tC * tC;
        if (oz < 0) nC = 0;
        else {
          const CC = wC[Qz + hC + wC[wz + KC + wC[bz + YC + wC[nz + dC]]]] % 32 * 4;
          oz *= oz, nC = oz * oz * (FC[CC] * sC + FC[CC + 1] * TC + FC[CC + 2] * aC + FC[CC + 3] * tC)
        }
        let qz = .6 - DC * DC - jC * jC - yC * yC - LC * LC;
        if (qz < 0) qC = 0;
        else {
          const CC = wC[Qz + mC + wC[wz + HC + wC[bz + EC + wC[nz + lC]]]] % 32 * 4;
          qz *= qz, qC = qz * qz * (FC[CC] * DC + FC[CC + 1] * jC + FC[CC + 2] * yC + FC[CC + 3] * LC)
        }
        let Fz = .6 - UC * UC - BC * BC - OC * OC - kC * kC;
        if (Fz < 0) WC = 0;
        else {
          const CC = wC[Qz + XC + wC[wz + cC + wC[bz + uC + wC[nz + rC]]]] % 32 * 4;
          Fz *= Fz, WC = Fz * Fz * (FC[CC] * UC + FC[CC + 1] * BC + FC[CC + 2] * OC + FC[CC + 3] * kC)
        }
        let Wz = .6 - VC * VC - Cz * Cz - zz * zz - Zz * Zz;
        if (Wz < 0) NC = 0;
        else {
          const CC = wC[Qz + 1 + wC[wz + 1 + wC[bz + 1 + wC[nz + 1]]]] % 32 * 4;
          Wz *= Wz, NC = Wz * Wz * (FC[CC] * VC + FC[CC + 1] * Cz + FC[CC + 2] * zz + FC[CC + 3] * Zz)
        }
        return 27 * (bC + nC + qC + WC + NC)
      }
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);