/*! For license information please see 31kiid.219.4bba5e46.chunk.js.LICENSE.txt */
export const id = 219;
export const ids = [219];
export const modules = {
  39572: (kk, Fk, Ik) => {
    kk.exports = Tk;
    var Xk = Ik(354);

    function Tk(kk, Fk) {
      if (!(this instanceof Tk)) return new Tk(kk, Fk);
      var Ik = Xk.create();
      Xk.add(Ik, kk, Fk), this.base = Xk.min(Xk.create(), kk, Ik), this.vec = Xk.clone(Fk), this.max = Xk.max(Xk.create(), kk, Ik), this.mag = Xk.length(this.vec)
    }
    var ik = Tk.prototype;
    ik.width = function() {
      return this.vec[0]
    }, ik.height = function() {
      return this.vec[1]
    }, ik.depth = function() {
      return this.vec[2]
    }, ik.x0 = function() {
      return this.base[0]
    }, ik.y0 = function() {
      return this.base[1]
    }, ik.z0 = function() {
      return this.base[2]
    }, ik.x1 = function() {
      return this.max[0]
    }, ik.y1 = function() {
      return this.max[1]
    }, ik.z1 = function() {
      return this.max[2]
    }, ik.translate = function(kk) {
      return Xk.add(this.max, this.max, kk), Xk.add(this.base, this.base, kk), this
    }, ik.setPosition = function(kk) {
      return Xk.add(this.max, kk, this.vec), Xk.copy(this.base, kk), this
    }, ik.expand = function(kk) {
      var Fk = Xk.create(),
        Ik = Xk.create();
      return Xk.max(Fk, kk.max, this.max), Xk.min(Ik, kk.base, this.base), Xk.subtract(Fk, Fk, Ik), new Tk(Ik, Fk)
    }, ik.intersects = function(kk) {
      return !(kk.base[0] > this.max[0]) && (!(kk.base[1] > this.max[1]) && (!(kk.base[2] > this.max[2]) && (!(kk.max[0] < this.base[0]) && (!(kk.max[1] < this.base[1]) && !(kk.max[2] < this.base[2])))))
    }, ik.touches = function(kk) {
      var Fk = this.union(kk);
      return null !== Fk && (0 == Fk.width() || 0 == Fk.height() || 0 == Fk.depth())
    }, ik.union = function(kk) {
      if (!this.intersects(kk)) return null;
      var Fk = Math.max(kk.base[0], this.base[0]),
        Ik = Math.max(kk.base[1], this.base[1]),
        Xk = Math.max(kk.base[2], this.base[2]);
      return new Tk([Fk, Ik, Xk], [Math.min(kk.max[0], this.max[0]) - Fk, Math.min(kk.max[1], this.max[1]) - Ik, Math.min(kk.max[2], this.max[2]) - Xk])
    }
  },
  39565: kk => {
    kk.exports = function(kk, Fk, Ik, Xk, Tk, ik) {
      var yk = +Fk[0],
        lk = +Fk[1],
        ak = +Fk[2],
        qk = +Ik[0],
        Lk = +Ik[1],
        tk = +Ik[2],
        Zk = Math.sqrt(qk * qk + Lk * Lk + tk * tk);
      if (0 === Zk) throw new Error("Can't raycast along a zero vector");
      return function(kk, Fk, Ik, Xk, Tk, ik, yk, lk, ak, qk) {
        for (var Lk = 0, tk = Math.floor, Zk = 0 | tk(Fk), jk = 0 | tk(Ik), ek = 0 | tk(Xk), wk = Tk > 0 ? 1 : -1, Hk = ik > 0 ? 1 : -1, Jk = yk > 0 ? 1 : -1, xk = Math.abs(1 / Tk), Pk = Math.abs(1 / ik), Kk = Math.abs(1 / yk), Qk = xk < 1 / 0 ? xk * (wk > 0 ? Zk + 1 - Fk : Fk - Zk) : 1 / 0, sk = Pk < 1 / 0 ? Pk * (Hk > 0 ? jk + 1 - Ik : Ik - jk) : 1 / 0, Vk = Kk < 1 / 0 ? Kk * (Jk > 0 ? ek + 1 - Xk : Xk - ek) : 1 / 0, zk = -1; Lk <= lk;) {
          var Sk = kk(Zk, jk, ek);
          if (Sk) return ak && (ak[0] = Fk + Lk * Tk, ak[1] = Ik + Lk * ik, ak[2] = Xk + Lk * yk), qk && (qk[0] = qk[1] = qk[2] = 0, 0 === zk && (qk[0] = -wk), 1 === zk && (qk[1] = -Hk), 2 === zk && (qk[2] = -Jk)), Sk;
          Qk < sk ? Qk < Vk ? (Zk += wk, Lk = Qk, Qk += xk, zk = 0) : (ek += Jk, Lk = Vk, Vk += Kk, zk = 2) : sk < Vk ? (jk += Hk, Lk = sk, sk += Pk, zk = 1) : (ek += Jk, Lk = Vk, Vk += Kk, zk = 2)
        }
        return ak && (ak[0] = Fk + Lk * Tk, ak[1] = Ik + Lk * ik, ak[2] = Xk + Lk * yk), qk && (qk[0] = qk[1] = qk[2] = 0), 0
      }(kk, yk, lk, ak, qk /= Zk, Lk /= Zk, tk /= Zk, Xk = "undefined" === typeof Xk ? 64 : +Xk, Tk, ik)
    }
  },
  39113: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => lk,
      c: () => ik
    });
    var Xk = Ik(4062);
    let Tk = null;

    function ik(kk) {
      return null !== Tk && kk === Tk
    }

    function yk() {
      this.dW = !1, this.stopPropagation = !1, this.rW = !1, this.disabled = !1
    }
    class lk {
      constructor(kk, Fk) {
        this.version = "0.7.0";
        var Ik = Object.assign({}, new yk, Fk || {});
        this.element = kk || document, this.dW = !!Ik.dW, this.stopPropagation = !!Ik.stopPropagation, this.rW = !!Ik.rW, this.disabled = !!Ik.disabled, this.filterEvents = (kk, Fk) => !0, this.ignoreEvent = kk => !1, this.down = new Xk.EventEmitter, this.up = new Xk.EventEmitter, this.state = {}, this.XB = {
          dx: 0,
          dy: 0,
          iFk: 0,
          yFk: 0,
          lFk: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? qk(this) : document.addEventListener("DOMContentLoaded", (kk => {
          qk(this)
        }), {
          once: !0
        })
      }
      bind(kk) {
        for (var Fk = arguments.length, Ik = new Array(Fk > 1 ? Fk - 1 : 0), Xk = 1; Xk < Fk; Xk++) Ik[Xk - 1] = arguments[Xk];
        Ik.forEach((Fk => {
          var Ik = this._keyBindmap[Fk] || [];
          Ik.includes(kk) || (Ik.push(kk), this._keyBindmap[Fk] = Ik)
        })), this.state[kk] = !!this.state[kk], this.pressCount[kk] = this.pressCount[kk] || 0, this.releaseCount[kk] = this.releaseCount[kk] || 0
      }
      unbind(kk) {
        for (var Fk in this._keyBindmap) {
          var Ik = this._keyBindmap[Fk],
            Xk = Ik.indexOf(kk);
          Xk > -1 && Ik.splice(Xk, 1)
        }
      }
      getBindings() {
        var kk = {};
        for (var Fk in this._keyBindmap) {
          this._keyBindmap[Fk].forEach((Ik => {
            kk[Ik] = kk[Ik] || [], kk[Ik].push(Fk)
          }))
        }
        return kk
      }
      Dt() {
        ak(this.XB), ak(this.pressCount), ak(this.releaseCount)
      }
    }

    function ak(kk) {
      for (var Fk in kk) kk[Fk] = 0
    }

    function qk(kk) {
      window.addEventListener("keydown", Hk.bind(null, kk, !0), !1), window.addEventListener("keyup", Hk.bind(null, kk, !1), !1);
      var Fk = {
        passive: !0
      };
      kk.element.addEventListener("touchstart", jk.bind(void 0, kk), {
        passive: !1
      }), kk.element.addEventListener("touchend", wk.bind(void 0, kk), Fk), kk.element.addEventListener("mousedown", Jk.bind(null, kk, !0), Fk), window.document.addEventListener("mouseup", Jk.bind(null, kk, !1), Fk), kk.element.addEventListener("touchmove", xk.bind(null, kk), Fk), kk.element.addEventListener("mousemove", xk.bind(null, kk), Fk), window.PointerEvent, kk.element.addEventListener("wheel", Pk.bind(null, kk), Fk), kk.element.addEventListener("contextmenu", Kk.bind(null, kk), !1), window.addEventListener("blur", Vk.bind(null, kk), !1)
    }
    var Lk = 0,
      tk = 0,
      Zk = null;

    function jk(kk, Fk) {
      Fk.preventDefault(), ek(Fk)
    }

    function ek(kk) {
      let Fk = !1;
      for (let Ik = 0; Ik < kk.touches.length; ++Ik)
        if (kk.touches[Ik].identifier === Zk) {
          Fk = !0;
          break
        } if (!Fk) {
        const Fk = kk.changedTouches[0];
        Lk = Fk.clientX, tk = Fk.clientY, Zk = Fk.identifier
      }
    }

    function wk(kk, Fk) {
      for (var Ik = Fk.changedTouches, Xk = 0; Xk < Ik.length; ++Xk) Ik[Xk].identifier === Zk && (Zk = null)
    }

    function Hk(kk, Fk, Ik) {
      if (!kk.ignoreEvent(Ik)) try {
        zk(kk, Ik), Fk && Ik.isTrusted && !Ik.repeat && kk._keyStates[Ik.code] && Sk(kk, Ik.code)
      } finally {
        vk(Ik.code, Fk, kk, Ik)
      }
    }

    function Jk(kk, Fk, Ik) {
      if (!kk.ignoreEvent(Ik)) try {
        zk(kk, Ik)
      } finally {
        ! function(kk, Fk, Ik) {
          if ("pointerId" in Ik)
            if (Fk) {
              if (null !== kk._touches.currID) return;
              kk._touches.currID = Ik.pointerId
            } else {
              if (kk._touches.currID !== Ik.pointerId) return;
              kk._touches.currID = null
            } var Xk = "button" in Ik ? Ik.button + 1 : 1;
          vk("Mouse" + Xk, Fk, kk, Ik)
        }(kk, Fk, Ik)
      }
    }

    function xk(kk, Fk) {
      var Ik = Fk.movementX || Fk.mozMovementX || 0,
        Xk = Fk.movementY || Fk.mozMovementY || 0;
      if (Fk.touches && 0 === (Ik | Xk)) {
        var Tk = function(kk) {
          ek(kk);
          for (let Fk = 0; Fk < kk.changedTouches.length; ++Fk)
            if (kk.changedTouches[Fk].identifier == Zk) {
              const Ik = kk.changedTouches[Fk],
                Xk = [Ik.clientX - Lk, Ik.clientY - tk];
              return Lk = Ik.clientX, tk = Ik.clientY, Xk
            } return console.error(`Did not find touch id ${Zk}`), [0, 0]
        }(Fk);
        Ik = Tk[0], Xk = Tk[1]
      }
      kk.XB.dx += Ik, kk.XB.dy += Xk
    }

    function Pk(kk, Fk) {
      zk(kk, Fk);
      var Ik = 1;
      switch (Fk.deltaMode) {
        case 0:
          Ik = 1;
          break;
        case 1:
          Ik = 12;
          break;
        case 2:
          Ik = kk.element.clientHeight || window.innerHeight
      }
      kk.XB.iFk += (Fk.deltaX || 0) * Ik, kk.XB.yFk += (Fk.deltaY || 0) * Ik, kk.XB.lFk += (Fk.deltaZ || 0) * Ik
    }

    function Kk(kk, Fk) {
      if (!kk.rW) return Fk.preventDefault(), !1
    }
    var Qk = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function sk(kk, Fk) {
      return !!kk[Qk[Fk]] || ("AltRight" === Fk || "ControlLeft" === Fk) && "function" === typeof kk.getModifierState && !0 === kk.getModifierState("AltGraph")
    }

    function Vk(kk, Fk) {
      for (var Ik in kk._modifiersHeldThroughBlur = {}, Qk) kk._keyStates[Ik] && (kk._modifiersHeldThroughBlur[Ik] = !0);
      Fk && Fk.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (kk) {
          return !0
        }
      }() && (clearTimeout(kk._blurRelease), kk._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var Fk in kk._modifiersHeldThroughBlur = {}, kk._keyStates) kk._keyStates[Fk] && !/^Mouse\d/.test(Fk) && Sk(kk, Fk)
      }), 0))
    }

    function zk(kk, Fk) {
      var Ik = kk._modifiersHeldThroughBlur;
      if (Ik && Fk.isTrusted && document.hasFocus())
        for (var Xk in Ik) delete Ik[Xk], kk._keyStates[Xk] && Xk !== Fk.code && (sk(Fk, Xk) || Sk(kk, Xk))
    }

    function Sk(kk, Fk) {
      const Ik = {
          code: Fk,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        Xk = Tk;
      Tk = Ik;
      try {
        vk(Fk, !1, kk, Ik)
      } finally {
        Tk = Xk
      }
    }

    function vk(kk, Fk, Ik, Xk) {
      var Tk = Ik._keyBindmap[kk];
      Tk && (Ek(Ik._keyStates[kk], Fk) && (Ik._keyStates[kk] = Fk, Tk.forEach((kk => {
        (!Ik.filterEvents || Ik.filterEvents(Xk, kk)) && function(kk, Fk, Ik, Xk) {
          var Tk = Fk ? Ik.pressCount : Ik.releaseCount;
          Tk[kk] = (Tk[kk] || 0) + 1;
          var ik = Ik._bindPressCount[kk] || 0;
          (ik += Fk ? 1 : -1) < 0 && (ik = 0);
          Ik._bindPressCount[kk] = ik;
          var yk = Ik.state[kk];
          if (Ek(yk, ik)) {
            Ik.state[kk] = ik > 0;
            var lk = Fk ? Ik.down : Ik.up;
            Ik.disabled || lk.emit(kk, Xk)
          }
        }(kk, Fk, Ik, Xk)
      }))), "button" in Xk || (Ik.dW && !Xk.defaultPrevented && Xk.preventDefault(), Ik.stopPropagation && Xk.stopPropagation()))
    }

    function Ek(kk, Fk) {
      return kk ? !Fk : Fk
    }
  },
  36537: (kk, Fk) => {
    function Ik(kk) {
      if (kk && "object" === typeof kk) {
        var Fk = kk.which || kk.keyCode || kk.charCode;
        Fk && (kk = Fk)
      }
      if ("number" === typeof kk) return yk[kk];
      var Ik, ik = String(kk);
      return (Ik = Xk[ik.toLowerCase()]) ? Ik : (Ik = Tk[ik.toLowerCase()]) || (1 === ik.length ? ik.charCodeAt(0) : void 0)
    }
    Ik.isEventKey = function(kk, Fk) {
      if (kk && "object" === typeof kk) {
        var Ik = kk.which || kk.keyCode || kk.charCode;
        if (null === Ik || void 0 === Ik) return !1;
        if ("string" === typeof Fk) {
          var ik;
          if (ik = Xk[Fk.toLowerCase()]) return ik === Ik;
          if (ik = Tk[Fk.toLowerCase()]) return ik === Ik
        } else if ("number" === typeof Fk) return Fk === Ik;
        return !1
      }
    };
    var Xk = (Fk = kk.exports = Ik).code = Fk.codes = {
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
      Tk = Fk.aliases = {
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
    for (ik = 97; ik < 123; ik++) Xk[String.fromCharCode(ik)] = ik - 32;
    for (var ik = 48; ik < 58; ik++) Xk[ik - 48] = ik;
    for (ik = 1; ik < 13; ik++) Xk["f" + ik] = ik + 111;
    for (ik = 0; ik < 10; ik++) Xk["numpad " + ik] = ik + 96;
    var yk = Fk.names = Fk.title = {};
    for (ik in Xk) yk[Xk[ik]] = ik;
    for (var lk in Tk) Xk[lk] = Tk[lk]
  },
  39551: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Xk
    });
    class Xk {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        this.pU = !1, this.WU = !1, this.WG = 30, this.aU = 0, this.dU = 100, this.uH = !1, this.fullscreen = !1, this.VJ = function(kk) {}, this.hU = function(kk, Fk, Ik) {}, this.lC = function() {}, this.PJ = function() {}, this.rU = function() {}, this.onFullscreenChanged = function() {}, this.onPointerLockError = function(kk) {}, this._data = new Tk(Fk),
          function(kk) {
            if ("loading" === document.readyState) {
              var Fk = () => {
                document.removeEventListener("readystatechange", Fk), kk()
              };
              document.addEventListener("readystatechange", Fk)
            } else setTimeout(kk, 0)
          }((() => {
            ! function(kk) {
              var Fk = kk._data,
                Ik = Fk.nowObject.now();
              Fk.lastTickStarted = Ik, Fk.lastFrameStarted = Ik, Fk.lastRenderStarted = Ik, Fk.frameCB = () => function(kk) {
                var Fk = kk._data;
                requestAnimationFrame(Fk.frameCB), lk(kk);
                var Ik = Fk.nowObject.now(),
                  Xk = Ik - Fk.lastFrameStarted;
                if (Fk.lastFrameStarted = Ik, kk.aU > 0) {
                  Fk.renderAccum += Xk;
                  var Tk = 1e3 / kk.aU;
                  if (Fk.renderAccum < Tk) return;
                  Fk.renderAccum -= Tk, Fk.renderAccum > Tk && (Fk.renderAccum = Tk)
                }
                var ik = Ik - Fk.lastRenderStarted;
                Fk.lastRenderStarted = Ik;
                var yk = 1e3 / kk.WG,
                  ak = (Ik - Fk.lastTickStarted) / yk;
                ak < 0 && (ak = 0);
                kk.hU(ik, ak, yk), setTimeout(lk, 0, kk, !0)
              }(kk), Fk.intervalCB = () => lk(kk), requestAnimationFrame(Fk.frameCB), Fk.pollTime > 0 && (Fk.intervalID = setInterval(Fk.intervalCB, Math.max(Fk.pollTime, 1e3 / kk.WG / 2)))
            }(this),
            function(kk, Fk) {
              if (!Fk) return;
              var Ik = !1,
                Xk = !1,
                Tk = kk => {
                  if (!!kk !== (Ik = Fk === document.pointerLockElement))
                    if (kk) {
                      var Xk = Fk.requestPointerLock();
                      Xk && Xk.catch && Xk.catch((kk => {}))
                    } else document.exitPointerLock()
                },
                ik = kk => {
                  !!kk !== (Xk = Fk === document.fullscreenElement) && (kk ? Fk.requestFullscreen ? Fk.requestFullscreen() : Fk.webkitRequestFullscreen && Fk.webkitRequestFullscreen() : document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen())
                };
              document.addEventListener("pointerlockchange", (Xk => {
                Ik = Fk === document.pointerLockElement, kk.rU(Ik)
              })), document.addEventListener("fullscreenchange", (Ik => {
                Xk = Fk === document.fullscreenElement, kk.onFullscreenChanged(Xk)
              })), document.addEventListener("pointerlockerror", (Xk => {
                Ik = Fk === document.pointerLockElement, kk.onPointerLockError(Xk)
              })), Object.defineProperty(kk, "uH", {
                get: () => Ik,
                set: Tk
              }), Object.defineProperty(kk, "fullscreen", {
                get: () => Xk,
                set: ik
              }), Fk.addEventListener("click", (Fk => {
                kk.pU && Tk(!0), kk.WU && ik(!0)
              }));
              var yk = () => kk.PJ();
              if (window.ResizeObserver) {
                new ResizeObserver(yk).observe(Fk)
              } else window.addEventListener("resize", yk)
            }(this, kk), this.lC()
          }))
      }
    }

    function Tk() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      this.nowObject = performance || Date, this.pollTime = kk, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
    }
    var ik = 3,
      yk = 20;

    function lk(kk) {
      for (var Fk = kk._data, Ik = 1e3 / kk.WG, Xk = Fk.nowObject.now() + yk, Tk = 0; Fk.nowObject.now() >= Fk.lastTickStarted + Ik && Fk.nowObject.now() < Xk && ++Tk <= ik;) kk.VJ(Ik), Fk.lastTickStarted += Ik;
      var lk = 5 * (Ik + 5),
        ak = Fk.nowObject.now();
      if (ak - Fk.lastTickStarted > lk)
        for (; ak >= Fk.lastTickStarted + Ik;) Fk.lastTickStarted += Ik
    }
  },
  36699: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => yk
    });
    var Xk = Ik(58);
    const Tk = Xk.useLayoutEffect;
    const ik = function(kk) {
      var Fk = (0, Xk.useRef)(kk);
      return Tk((function() {
        Fk.current = kk
      })), Fk
    };
    var yk = function(kk) {
      var Fk = ik(kk);
      (0, Xk.useEffect)((function() {
        var kk = function(kk) {
          var Ik;
          if (null != Fk.current && (Ik = Fk.current(kk)), kk.defaultPrevented && (kk.returnValue = ""), "string" === typeof Ik) return kk.returnValue = Ik, Ik
        };
        return window.addEventListener("beforeunload", kk),
          function() {
            window.removeEventListener("beforeunload", kk)
          }
      }), [])
    }
  },
  36580: kk => {
    var Fk, Ik = "undefined" !== typeof window ? window.navigator.userAgent : "",
      Xk = /OS X/.test(Ik),
      Tk = /Opera/.test(Ik),
      ik = !/like Gecko/.test(Ik) && !Tk,
      yk = kk.exports = {
        0: Xk ? "<menu>" : "<UNK>",
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
        93: Xk ? "<meta>" : "<menu>",
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
        173: Xk && ik ? "-" : "<volume-mute>",
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
        231: Tk ? "`" : "<unicode>",
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
    for (Fk = 58; Fk < 65; ++Fk) yk[Fk] = String.fromCharCode(Fk);
    for (Fk = 48; Fk < 58; ++Fk) yk[Fk] = Fk - 48 + "";
    for (Fk = 65; Fk < 91; ++Fk) yk[Fk] = String.fromCharCode(Fk);
    for (Fk = 96; Fk < 106; ++Fk) yk[Fk] = "<num-" + (Fk - 96) + ">";
    for (Fk = 112; Fk < 136; ++Fk) yk[Fk] = "F" + (Fk - 111)
  },
  38967: (kk, Fk, Ik) => {
    function Xk(kk, Fk, Ik, Xk, Tk) {
      var ik = {};
      return Object.keys(Xk).forEach((function(kk) {
        ik[kk] = Xk[kk]
      })), ik.enumerable = !!ik.enumerable, ik.configurable = !!ik.configurable, ("value" in ik || ik.initializer) && (ik.writable = !0), ik = Ik.slice().reverse().reduce((function(Ik, Xk) {
        return Xk(kk, Fk, Ik) || Ik
      }), ik), Tk && void 0 !== ik.initializer && (ik.value = ik.initializer ? ik.initializer.call(Tk) : void 0, ik.initializer = void 0), void 0 === ik.initializer && (Object.defineProperty(kk, Fk, ik), ik = null), ik
    }
    Ik.d(Fk, {
      b: () => Xk
    })
  },
  38960: (kk, Fk, Ik) => {
    function Xk(kk, Fk, Ik, Xk) {
      Ik && Object.defineProperty(kk, Fk, {
        enumerable: Ik.enumerable,
        configurable: Ik.configurable,
        writable: Ik.writable,
        value: Ik.initializer ? Ik.initializer.call(Xk) : void 0
      })
    }
    Ik.d(Fk, {
      e: () => Xk
    })
  },
  38666: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => ik
    });
    var Xk = Ik(38674);
    const Tk = (kk, Fk, Ik) => kk ? kk.getClassName && "Mesh" === kk.getClassName() ? null : !kk.getClassName || "SubMesh" !== kk.getClassName() && "PhysicsBody" !== kk.getClassName() ? kk.clone ? kk.clone() : Array.isArray(kk) ? kk.slice() : Ik && "object" === typeof kk ? {
      ...kk
    } : null : kk.clone(Fk) : null;
    class ik {
      static DeepCopy(kk, Fk, Ik, ik) {
        let yk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const lk = function(kk) {
          const Fk = [];
          do {
            const Ik = Object.getOwnPropertyNames(kk);
            for (const kk of Ik) - 1 === Fk.indexOf(kk) && Fk.push(kk)
          } while (kk = Object.getPrototypeOf(kk));
          return Fk
        }(kk);
        for (const qk of lk) {
          if ("_" === qk[0] && (!ik || -1 === ik.indexOf(qk))) continue;
          if (qk.endsWith("Observable")) continue;
          if (Ik && -1 !== Ik.indexOf(qk)) continue;
          const lk = kk[qk],
            Lk = typeof lk;
          if ("function" !== Lk) try {
            if ("object" === Lk)
              if (lk instanceof Uint8Array) Fk[qk] = Uint8Array.from(lk);
              else if (lk instanceof Array) {
              if (Fk[qk] = [], lk.length > 0)
                if ("object" == typeof lk[0])
                  for (let kk = 0; kk < lk.length; kk++) {
                    const Ik = Tk(lk[kk], Fk, yk); - 1 === Fk[qk].indexOf(Ik) && Fk[qk].push(Ik)
                  } else Fk[qk] = lk.slice(0)
            } else Fk[qk] = Tk(lk, Fk, yk);
            else Fk[qk] = lk
          } catch (ak) {
            Xk.e.Warn(ak.message)
          }
        }
      }
    }
  },
  38706: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Tk,
      c: () => ik,
      d: () => yk,
      e: () => lk
    });
    var Xk = Ik(37331);
    class Tk {
      constructor(kk, Fk, Ik) {
        this.gradient = kk, this.color1 = Fk, this.color2 = Ik
      }
      getColorToRef(kk) {
        this.color2 ? Xk.h.LerpToRef(this.color1, this.color2, Math.random(), kk) : kk.kS(this.color1)
      }
    }
    class ik {
      constructor(kk, Fk) {
        this.gradient = kk, this.color = Fk
      }
    }
    class yk {
      constructor(kk, Fk, Ik) {
        this.gradient = kk, this.factor1 = Fk, this.factor2 = Ik
      }
      getFactor() {
        return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
      }
    }
    class lk {
      static GetCurrentGradient(kk, Fk, Ik) {
        if (Fk[0].gradient > kk) return void Ik(Fk[0], Fk[0], 1);
        for (let Tk = 0; Tk < Fk.length - 1; Tk++) {
          const Xk = Fk[Tk],
            ik = Fk[Tk + 1];
          if (kk >= Xk.gradient && kk <= ik.gradient) {
            return void Ik(Xk, ik, (kk - Xk.gradient) / (ik.gradient - Xk.gradient))
          }
        }
        const Xk = Fk.length - 1;
        Ik(Fk[Xk], Fk[Xk], 1)
      }
    }
  },
  38674: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Xk
    });
    class Xk {
      static _CheckLimit(kk, Fk) {
        let Ik = Xk._LogLimitOutputs[kk];
        return Ik ? Ik.current++ : (Ik = {
          limit: Fk,
          current: 1
        }, Xk._LogLimitOutputs[kk] = Ik), Ik.current <= Ik.limit
      }
      static _GenerateLimitMessage(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const Ik = Xk._LogLimitOutputs[kk];
        if (!Ik || !Xk.MessageLimitReached) return;
        const Tk = this._Levels[Fk];
        Ik.current === Ik.limit && Xk[Tk.name](Xk.MessageLimitReached.replace(/%LIMIT%/g, "" + Ik.limit).replace(/%TYPE%/g, Tk.name ?? ""))
      }
      static _AddLogEntry(kk) {
        Xk._LogCache = kk + Xk._LogCache, Xk.OnNewCacheEntry && Xk.OnNewCacheEntry(kk)
      }
      static _FormatMessage(kk) {
        const Fk = kk => kk < 10 ? "0" + kk : "" + kk,
          Ik = new Date;
        return "[" + Fk(Ik.getHours()) + ":" + Fk(Ik.getMinutes()) + ":" + Fk(Ik.getSeconds()) + "]: " + kk
      }
      static _LogDisabled(kk, Fk) {}
      static _LogEnabled() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Fk = arguments.length > 1 ? arguments[1] : void 0,
          Ik = arguments.length > 2 ? arguments[2] : void 0;
        const Tk = Array.isArray(Fk) ? Fk[0] : Fk;
        if (void 0 !== Ik && !Xk._CheckLimit(Tk, Ik)) return;
        const ik = Xk._FormatMessage(Tk),
          yk = this._Levels[kk],
          lk = Array.isArray(Fk) ? Fk.slice(1) : [];
        yk.logFunc && yk.logFunc("BJS - " + ik, ...lk);
        const ak = `<div style='color:${yk.color}'>${ik}</div><br>`;
        Xk._AddLogEntry(ak), Xk._GenerateLimitMessage(Tk, kk)
      }
      static get LogCache() {
        return Xk._LogCache
      }
      static ClearLogCache() {
        Xk._LogCache = "", Xk._LogLimitOutputs = {}, Xk.errorsCount = 0
      }
      static set LogLevels(kk) {
        Xk.Log = Xk._LogDisabled, Xk.Warn = Xk._LogDisabled, Xk.Error = Xk._LogDisabled;
        const Fk = [Xk.MessageLogLevel, Xk.WarningLogLevel, Xk.ErrorLogLevel];
        for (const Ik of Fk)
          if ((kk & Ik) === Ik) {
            const kk = this._Levels[Ik];
            Xk[kk.name] = Xk._LogEnabled.bind(Xk, Ik)
          }
      }
    }
    Xk.NoneLogLevel = 0, Xk.MessageLogLevel = 1, Xk.WarningLogLevel = 2, Xk.ErrorLogLevel = 4, Xk.AllLogLevel = 7, Xk.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Xk._LogCache = "", Xk._LogLimitOutputs = {}, Xk._Levels = [{}, {
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
    }], Xk.errorsCount = 0, Xk.Log = Xk._LogEnabled.bind(Xk, Xk.MessageLogLevel), Xk.Warn = Xk._LogEnabled.bind(Xk, Xk.WarningLogLevel), Xk.Error = Xk._LogEnabled.bind(Xk, Xk.ErrorLogLevel)
  },
  38708: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => yk
    });
    var Xk = Ik(37153),
      Tk = Ik(37189),
      ik = Ik(38666);
    class yk {
      constructor() {
        this.direction1 = new Xk.t(0, 1, 0), this.direction2 = new Xk.t(0, 1, 0), this.minEmitBox = new Xk.t(-.5, -.5, -.5), this.maxEmitBox = new Xk.t(.5, .5, .5)
      }
      startDirectionFunction(kk, Fk, Ik, ik) {
        const yk = (0, Tk.RandomRange)(this.direction1.x, this.direction2.x),
          lk = (0, Tk.RandomRange)(this.direction1.y, this.direction2.y),
          ak = (0, Tk.RandomRange)(this.direction1.z, this.direction2.z);
        if (ik) return Fk.x = yk, Fk.y = lk, void(Fk.z = ak);
        Xk.t.TransformNormalFromFloatsToRef(yk, lk, ak, kk, Fk)
      }
      startPositionFunction(kk, Fk, Ik, ik) {
        const yk = (0, Tk.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
          lk = (0, Tk.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
          ak = (0, Tk.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
        if (ik) return Fk.x = yk, Fk.y = lk, void(Fk.z = ak);
        Xk.t.TransformCoordinatesFromFloatsToRef(yk, lk, ak, kk, Fk)
      }
      clone() {
        const kk = new yk;
        return ik.c.DeepCopy(this, kk), kk
      }
      applyToShader(kk) {
        kk.setVector3("direction1", this.direction1), kk.setVector3("direction2", this.direction2), kk.setVector3("minEmitBox", this.minEmitBox), kk.setVector3("maxEmitBox", this.maxEmitBox)
      }
      buildUniformLayout(kk) {
        kk.addUniform("direction1", 3), kk.addUniform("direction2", 3), kk.addUniform("minEmitBox", 3), kk.addUniform("maxEmitBox", 3)
      }
      getEffectDefines() {
        return "#define BOXEMITTER"
      }
      getClassName() {
        return "BoxParticleEmitter"
      }
      serialize() {
        const kk = {};
        return kk.type = this.getClassName(), kk.direction1 = this.direction1.iXk(), kk.direction2 = this.direction2.iXk(), kk.minEmitBox = this.minEmitBox.iXk(), kk.maxEmitBox = this.maxEmitBox.iXk(), kk
      }
      parse(kk) {
        Xk.t.FromArrayToRef(kk.direction1, 0, this.direction1), Xk.t.FromArrayToRef(kk.direction2, 0, this.direction2), Xk.t.FromArrayToRef(kk.minEmitBox, 0, this.minEmitBox), Xk.t.FromArrayToRef(kk.maxEmitBox, 0, this.maxEmitBox)
      }
    }
  },
  38661: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => lk,
      e: () => yk
    });
    var Xk = Ik(37153),
      Tk = Ik(37189),
      ik = Ik(38666);
    class yk {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Tk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.radius = kk, this.height = Fk, this.radiusRange = Ik, this.directionRandomizer = Tk, this._tempVector = Xk.t.Zero()
      }
      startDirectionFunction(kk, Fk, Ik, ik, yk) {
        Ik.position.subtractToRef(kk.getTranslation(), this._tempVector), this._tempVector.normalize(), Xk.t.TransformNormalToRef(this._tempVector, yk, this._tempVector);
        const lk = (0, Tk.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
        let ak = Math.atan2(this._tempVector.x, this._tempVector.z);
        ak += (0, Tk.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = lk, this._tempVector.x = Math.sin(ak), this._tempVector.z = Math.cos(ak), this._tempVector.normalize(), ik ? Fk.kS(this._tempVector) : Xk.t.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, kk, Fk)
      }
      startPositionFunction(kk, Fk, Ik, ik) {
        const yk = (0, Tk.RandomRange)(-this.height / 2, this.height / 2),
          lk = (0, Tk.RandomRange)(0, 2 * Math.PI),
          ak = (0, Tk.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
          qk = Math.sqrt(ak) * this.radius,
          Lk = qk * Math.cos(lk),
          tk = qk * Math.sin(lk);
        ik ? Fk.t5(Lk, yk, tk) : Xk.t.TransformCoordinatesFromFloatsToRef(Lk, yk, tk, kk, Fk)
      }
      clone() {
        const kk = new yk(this.radius, this.directionRandomizer);
        return ik.c.DeepCopy(this, kk), kk
      }
      applyToShader(kk) {
        kk.setFloat("radius", this.radius), kk.setFloat("height", this.height), kk.setFloat("radiusRange", this.radiusRange), kk.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(kk) {
        kk.addUniform("radius", 1), kk.addUniform("height", 1), kk.addUniform("radiusRange", 1), kk.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderParticleEmitter"
      }
      serialize() {
        const kk = {};
        return kk.type = this.getClassName(), kk.radius = this.radius, kk.height = this.height, kk.radiusRange = this.radiusRange, kk.directionRandomizer = this.directionRandomizer, kk
      }
      parse(kk) {
        this.radius = kk.radius, this.height = kk.height, this.radiusRange = kk.radiusRange, this.directionRandomizer = kk.directionRandomizer
      }
    }
    class lk extends yk {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Tk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Xk.t(0, 1, 0),
          ik = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Xk.t(0, 1, 0);
        super(kk, Fk, Ik), this.direction1 = Tk, this.direction2 = ik
      }
      startDirectionFunction(kk, Fk, Ik, ik) {
        const yk = (0, Tk.RandomRange)(this.direction1.x, this.direction2.x),
          lk = (0, Tk.RandomRange)(this.direction1.y, this.direction2.y),
          ak = (0, Tk.RandomRange)(this.direction1.z, this.direction2.z);
        ik ? Fk.t5(yk, lk, ak) : Xk.t.TransformNormalFromFloatsToRef(yk, lk, ak, kk, Fk)
      }
      clone() {
        const kk = new lk(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
        return ik.c.DeepCopy(this, kk), kk
      }
      applyToShader(kk) {
        kk.setFloat("radius", this.radius), kk.setFloat("height", this.height), kk.setFloat("radiusRange", this.radiusRange), kk.setVector3("direction1", this.direction1), kk.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(kk) {
        kk.addUniform("radius", 1), kk.addUniform("height", 1), kk.addUniform("radiusRange", 1), kk.addUniform("direction1", 3), kk.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER\n#define DIRECTEDCYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderDirectedParticleEmitter"
      }
      serialize() {
        const kk = super.serialize();
        return kk.direction1 = this.direction1.iXk(), kk.direction2 = this.direction2.iXk(), kk
      }
      parse(kk) {
        super.parse(kk), Xk.t.FromArrayToRef(kk.direction1, 0, this.direction1), Xk.t.FromArrayToRef(kk.direction2, 0, this.direction2)
      }
    }
  },
  38789: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => tk
    });
    const Xk = .5 * (Math.sqrt(3) - 1),
      Tk = (3 - Math.sqrt(3)) / 6,
      ik = 1 / 3,
      yk = 1 / 6,
      lk = (Math.sqrt(5) - 1) / 4,
      ak = (5 - Math.sqrt(5)) / 20,
      qk = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
      Lk = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]);
    const tk = class {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
        const Fk = "function" == typeof kk ? kk : function(kk) {
          let Fk = 0,
            Ik = 0,
            Xk = 0,
            Tk = 1;
          const ik = function() {
            let kk = 4022871197;
            return function(Fk) {
              Fk = Fk.toString();
              for (let Ik = 0; Ik < Fk.length; Ik++) {
                kk += Fk.charCodeAt(Ik);
                let Xk = .02519603282416938 * kk;
                kk = Xk >>> 0, Xk -= kk, Xk *= kk, kk = Xk >>> 0, Xk -= kk, kk += 4294967296 * Xk
              }
              return 2.3283064365386963e-10 * (kk >>> 0)
            }
          }();
          Fk = ik(" "), Ik = ik(" "), Xk = ik(" "), Fk -= ik(kk), Fk < 0 && (Fk += 1);
          Ik -= ik(kk), Ik < 0 && (Ik += 1);
          Xk -= ik(kk), Xk < 0 && (Xk += 1);
          return function() {
            const kk = 2091639 * Fk + 2.3283064365386963e-10 * Tk;
            return Fk = Ik, Ik = Xk, Xk = kk - (Tk = 0 | kk)
          }
        }(kk);
        this.p = function(kk) {
          const Fk = new Uint8Array(256);
          for (let Ik = 0; Ik < 256; Ik++) Fk[Ik] = Ik;
          for (let Ik = 0; Ik < 255; Ik++) {
            const Xk = Ik + ~~(kk() * (256 - Ik)),
              Tk = Fk[Ik];
            Fk[Ik] = Fk[Xk], Fk[Xk] = Tk
          }
          return Fk
        }(Fk), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
        for (let Ik = 0; Ik < 512; Ik++) this.perm[Ik] = this.p[255 & Ik], this.permMod12[Ik] = this.perm[Ik] % 12
      }
      noise2D(kk, Fk) {
        const Ik = this.permMod12,
          ik = this.perm;
        let yk = 0,
          lk = 0,
          ak = 0;
        const Lk = (kk + Fk) * Xk,
          tk = Math.floor(kk + Lk),
          Zk = Math.floor(Fk + Lk),
          jk = (tk + Zk) * Tk,
          ek = kk - (tk - jk),
          wk = Fk - (Zk - jk);
        let Hk, Jk;
        ek > wk ? (Hk = 1, Jk = 0) : (Hk = 0, Jk = 1);
        const xk = ek - Hk + Tk,
          Pk = wk - Jk + Tk,
          Kk = ek - 1 + 2 * Tk,
          Qk = wk - 1 + 2 * Tk,
          sk = 255 & tk,
          Vk = 255 & Zk;
        let zk = .5 - ek * ek - wk * wk;
        if (zk >= 0) {
          const kk = 3 * Ik[sk + ik[Vk]];
          zk *= zk, yk = zk * zk * (qk[kk] * ek + qk[kk + 1] * wk)
        }
        let Sk = .5 - xk * xk - Pk * Pk;
        if (Sk >= 0) {
          const kk = 3 * Ik[sk + Hk + ik[Vk + Jk]];
          Sk *= Sk, lk = Sk * Sk * (qk[kk] * xk + qk[kk + 1] * Pk)
        }
        let vk = .5 - Kk * Kk - Qk * Qk;
        if (vk >= 0) {
          const kk = 3 * Ik[sk + 1 + ik[Vk + 1]];
          vk *= vk, ak = vk * vk * (qk[kk] * Kk + qk[kk + 1] * Qk)
        }
        return 70 * (yk + lk + ak)
      }
      noise3D(kk, Fk, Ik) {
        const Xk = this.permMod12,
          Tk = this.perm;
        let lk, ak, Lk, tk;
        const Zk = (kk + Fk + Ik) * ik,
          jk = Math.floor(kk + Zk),
          ek = Math.floor(Fk + Zk),
          wk = Math.floor(Ik + Zk),
          Hk = (jk + ek + wk) * yk,
          Jk = kk - (jk - Hk),
          xk = Fk - (ek - Hk),
          Pk = Ik - (wk - Hk);
        let Kk, Qk, sk, Vk, zk, Sk;
        Jk >= xk ? xk >= Pk ? (Kk = 1, Qk = 0, sk = 0, Vk = 1, zk = 1, Sk = 0) : Jk >= Pk ? (Kk = 1, Qk = 0, sk = 0, Vk = 1, zk = 0, Sk = 1) : (Kk = 0, Qk = 0, sk = 1, Vk = 1, zk = 0, Sk = 1) : xk < Pk ? (Kk = 0, Qk = 0, sk = 1, Vk = 0, zk = 1, Sk = 1) : Jk < Pk ? (Kk = 0, Qk = 1, sk = 0, Vk = 0, zk = 1, Sk = 1) : (Kk = 0, Qk = 1, sk = 0, Vk = 1, zk = 1, Sk = 0);
        const vk = Jk - Kk + yk,
          Ek = xk - Qk + yk,
          Ok = Pk - sk + yk,
          nk = Jk - Vk + 2 * yk,
          Gk = xk - zk + 2 * yk,
          pk = Pk - Sk + 2 * yk,
          uk = Jk - 1 + .5,
          bk = xk - 1 + .5,
          Rk = Pk - 1 + .5,
          Uk = 255 & jk,
          Ck = 255 & ek,
          Nk = 255 & wk;
        let ck = .6 - Jk * Jk - xk * xk - Pk * Pk;
        if (ck < 0) lk = 0;
        else {
          const kk = 3 * Xk[Uk + Tk[Ck + Tk[Nk]]];
          ck *= ck, lk = ck * ck * (qk[kk] * Jk + qk[kk + 1] * xk + qk[kk + 2] * Pk)
        }
        let Wk = .6 - vk * vk - Ek * Ek - Ok * Ok;
        if (Wk < 0) ak = 0;
        else {
          const kk = 3 * Xk[Uk + Kk + Tk[Ck + Qk + Tk[Nk + sk]]];
          Wk *= Wk, ak = Wk * Wk * (qk[kk] * vk + qk[kk + 1] * Ek + qk[kk + 2] * Ok)
        }
        let fk = .6 - nk * nk - Gk * Gk - pk * pk;
        if (fk < 0) Lk = 0;
        else {
          const kk = 3 * Xk[Uk + Vk + Tk[Ck + zk + Tk[Nk + Sk]]];
          fk *= fk, Lk = fk * fk * (qk[kk] * nk + qk[kk + 1] * Gk + qk[kk + 2] * pk)
        }
        let Bk = .6 - uk * uk - bk * bk - Rk * Rk;
        if (Bk < 0) tk = 0;
        else {
          const kk = 3 * Xk[Uk + 1 + Tk[Ck + 1 + Tk[Nk + 1]]];
          Bk *= Bk, tk = Bk * Bk * (qk[kk] * uk + qk[kk + 1] * bk + qk[kk + 2] * Rk)
        }
        return 32 * (lk + ak + Lk + tk)
      }
      noise4D(kk, Fk, Ik, Xk) {
        const Tk = this.perm;
        let ik, yk, qk, tk, Zk;
        const jk = (kk + Fk + Ik + Xk) * lk,
          ek = Math.floor(kk + jk),
          wk = Math.floor(Fk + jk),
          Hk = Math.floor(Ik + jk),
          Jk = Math.floor(Xk + jk),
          xk = (ek + wk + Hk + Jk) * ak,
          Pk = kk - (ek - xk),
          Kk = Fk - (wk - xk),
          Qk = Ik - (Hk - xk),
          sk = Xk - (Jk - xk);
        let Vk = 0,
          zk = 0,
          Sk = 0,
          vk = 0;
        Pk > Kk ? Vk++ : zk++, Pk > Qk ? Vk++ : Sk++, Pk > sk ? Vk++ : vk++, Kk > Qk ? zk++ : Sk++, Kk > sk ? zk++ : vk++, Qk > sk ? Sk++ : vk++;
        const Ek = Vk >= 3 ? 1 : 0,
          Ok = zk >= 3 ? 1 : 0,
          nk = Sk >= 3 ? 1 : 0,
          Gk = vk >= 3 ? 1 : 0,
          pk = Vk >= 2 ? 1 : 0,
          uk = zk >= 2 ? 1 : 0,
          bk = Sk >= 2 ? 1 : 0,
          Rk = vk >= 2 ? 1 : 0,
          Uk = Vk >= 1 ? 1 : 0,
          Ck = zk >= 1 ? 1 : 0,
          Nk = Sk >= 1 ? 1 : 0,
          ck = vk >= 1 ? 1 : 0,
          Wk = Pk - Ek + ak,
          fk = Kk - Ok + ak,
          Bk = Qk - nk + ak,
          dk = sk - Gk + ak,
          Yk = Pk - pk + 2 * ak,
          Ak = Kk - uk + 2 * ak,
          gk = Qk - bk + 2 * ak,
          mk = sk - Rk + 2 * ak,
          hk = Pk - Uk + 3 * ak,
          rk = Kk - Ck + 3 * ak,
          Dk = Qk - Nk + 3 * ak,
          Mk = sk - ck + 3 * ak,
          kF = Pk - 1 + 4 * ak,
          FF = Kk - 1 + 4 * ak,
          IF = Qk - 1 + 4 * ak,
          XF = sk - 1 + 4 * ak,
          TF = 255 & ek,
          iF = 255 & wk,
          yF = 255 & Hk,
          lF = 255 & Jk;
        let aF = .6 - Pk * Pk - Kk * Kk - Qk * Qk - sk * sk;
        if (aF < 0) ik = 0;
        else {
          const kk = Tk[TF + Tk[iF + Tk[yF + Tk[lF]]]] % 32 * 4;
          aF *= aF, ik = aF * aF * (Lk[kk] * Pk + Lk[kk + 1] * Kk + Lk[kk + 2] * Qk + Lk[kk + 3] * sk)
        }
        let qF = .6 - Wk * Wk - fk * fk - Bk * Bk - dk * dk;
        if (qF < 0) yk = 0;
        else {
          const kk = Tk[TF + Ek + Tk[iF + Ok + Tk[yF + nk + Tk[lF + Gk]]]] % 32 * 4;
          qF *= qF, yk = qF * qF * (Lk[kk] * Wk + Lk[kk + 1] * fk + Lk[kk + 2] * Bk + Lk[kk + 3] * dk)
        }
        let LF = .6 - Yk * Yk - Ak * Ak - gk * gk - mk * mk;
        if (LF < 0) qk = 0;
        else {
          const kk = Tk[TF + pk + Tk[iF + uk + Tk[yF + bk + Tk[lF + Rk]]]] % 32 * 4;
          LF *= LF, qk = LF * LF * (Lk[kk] * Yk + Lk[kk + 1] * Ak + Lk[kk + 2] * gk + Lk[kk + 3] * mk)
        }
        let tF = .6 - hk * hk - rk * rk - Dk * Dk - Mk * Mk;
        if (tF < 0) tk = 0;
        else {
          const kk = Tk[TF + Uk + Tk[iF + Ck + Tk[yF + Nk + Tk[lF + ck]]]] % 32 * 4;
          tF *= tF, tk = tF * tF * (Lk[kk] * hk + Lk[kk + 1] * rk + Lk[kk + 2] * Dk + Lk[kk + 3] * Mk)
        }
        let ZF = .6 - kF * kF - FF * FF - IF * IF - XF * XF;
        if (ZF < 0) Zk = 0;
        else {
          const kk = Tk[TF + 1 + Tk[iF + 1 + Tk[yF + 1 + Tk[lF + 1]]]] % 32 * 4;
          ZF *= ZF, Zk = ZF * ZF * (Lk[kk] * kF + Lk[kk + 1] * FF + Lk[kk + 2] * IF + Lk[kk + 3] * XF)
        }
        return 27 * (ik + yk + qk + tk + Zk)
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);