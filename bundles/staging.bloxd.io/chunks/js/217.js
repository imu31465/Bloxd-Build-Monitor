/*! For license information please see 3lwmg.217.5a82eac8.chunk.js.LICENSE.txt */
export const id = 217;
export const ids = [217];
export const modules = {
  39122: (kk, ek, ik) => {
    kk.exports = fk;
    var Dk = ik(330);

    function fk(kk, ek) {
      if (!(this instanceof fk)) return new fk(kk, ek);
      var ik = Dk.create();
      Dk.add(ik, kk, ek), this.base = Dk.min(Dk.create(), kk, ik), this.vec = Dk.clone(ek), this.max = Dk.max(Dk.create(), kk, ik), this.mag = Dk.length(this.vec)
    }
    var Sk = fk.prototype;
    Sk.width = function() {
      return this.vec[0]
    }, Sk.height = function() {
      return this.vec[1]
    }, Sk.depth = function() {
      return this.vec[2]
    }, Sk.x0 = function() {
      return this.base[0]
    }, Sk.y0 = function() {
      return this.base[1]
    }, Sk.z0 = function() {
      return this.base[2]
    }, Sk.x1 = function() {
      return this.max[0]
    }, Sk.y1 = function() {
      return this.max[1]
    }, Sk.z1 = function() {
      return this.max[2]
    }, Sk.translate = function(kk) {
      return Dk.add(this.max, this.max, kk), Dk.add(this.base, this.base, kk), this
    }, Sk.setPosition = function(kk) {
      return Dk.add(this.max, kk, this.vec), Dk.copy(this.base, kk), this
    }, Sk.expand = function(kk) {
      var ek = Dk.create(),
        ik = Dk.create();
      return Dk.max(ek, kk.max, this.max), Dk.min(ik, kk.base, this.base), Dk.subtract(ek, ek, ik), new fk(ik, ek)
    }, Sk.intersects = function(kk) {
      return !(kk.base[0] > this.max[0]) && (!(kk.base[1] > this.max[1]) && (!(kk.base[2] > this.max[2]) && (!(kk.max[0] < this.base[0]) && (!(kk.max[1] < this.base[1]) && !(kk.max[2] < this.base[2])))))
    }, Sk.touches = function(kk) {
      var ek = this.union(kk);
      return null !== ek && (0 == ek.width() || 0 == ek.height() || 0 == ek.depth())
    }, Sk.union = function(kk) {
      if (!this.intersects(kk)) return null;
      var ek = Math.max(kk.base[0], this.base[0]),
        ik = Math.max(kk.base[1], this.base[1]),
        Dk = Math.max(kk.base[2], this.base[2]);
      return new fk([ek, ik, Dk], [Math.min(kk.max[0], this.max[0]) - ek, Math.min(kk.max[1], this.max[1]) - ik, Math.min(kk.max[2], this.max[2]) - Dk])
    }
  },
  39119: kk => {
    kk.exports = function(kk, ek, ik, Dk, fk, Sk) {
      var bk = +ek[0],
        rk = +ek[1],
        Pk = +ek[2],
        mk = +ik[0],
        Mk = +ik[1],
        Kk = +ik[2],
        xk = Math.sqrt(mk * mk + Mk * Mk + Kk * Kk);
      if (0 === xk) throw new Error("Can't raycast along a zero vector");
      return function(kk, ek, ik, Dk, fk, Sk, bk, rk, Pk, mk) {
        for (var Mk = 0, Kk = Math.floor, xk = 0 | Kk(ek), nk = 0 | Kk(ik), Uk = 0 | Kk(Dk), Hk = fk > 0 ? 1 : -1, wk = Sk > 0 ? 1 : -1, lk = bk > 0 ? 1 : -1, pk = Math.abs(1 / fk), yk = Math.abs(1 / Sk), Yk = Math.abs(1 / bk), Lk = pk < 1 / 0 ? pk * (Hk > 0 ? xk + 1 - ek : ek - xk) : 1 / 0, Ck = yk < 1 / 0 ? yk * (wk > 0 ? nk + 1 - ik : ik - nk) : 1 / 0, Ak = Yk < 1 / 0 ? Yk * (lk > 0 ? Uk + 1 - Dk : Dk - Uk) : 1 / 0, jk = -1; Mk <= rk;) {
          var sk = kk(xk, nk, Uk);
          if (sk) return Pk && (Pk[0] = ek + Mk * fk, Pk[1] = ik + Mk * Sk, Pk[2] = Dk + Mk * bk), mk && (mk[0] = mk[1] = mk[2] = 0, 0 === jk && (mk[0] = -Hk), 1 === jk && (mk[1] = -wk), 2 === jk && (mk[2] = -lk)), sk;
          Lk < Ck ? Lk < Ak ? (xk += Hk, Mk = Lk, Lk += pk, jk = 0) : (Uk += lk, Mk = Ak, Ak += Yk, jk = 2) : Ck < Ak ? (nk += wk, Mk = Ck, Ck += yk, jk = 1) : (Uk += lk, Mk = Ak, Ak += Yk, jk = 2)
        }
        return Pk && (Pk[0] = ek + Mk * fk, Pk[1] = ik + Mk * Sk, Pk[2] = Dk + Mk * bk), mk && (mk[0] = mk[1] = mk[2] = 0), 0
      }(kk, bk, rk, Pk, mk /= xk, Mk /= xk, Kk /= xk, Dk = "undefined" === typeof Dk ? 64 : +Dk, fk, Sk)
    }
  },
  38682: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => rk,
      e: () => Sk
    });
    var Dk = ik(4019);
    let fk = null;

    function Sk(kk) {
      return null !== fk && kk === fk
    }

    function bk() {
      this.oB = !1, this.stopPropagation = !1, this.JB = !1, this.disabled = !1
    }
    class rk {
      constructor(kk, ek) {
        this.version = "0.7.0";
        var ik = Object.assign({}, new bk, ek || {});
        this.element = kk || document, this.oB = !!ik.oB, this.stopPropagation = !!ik.stopPropagation, this.JB = !!ik.JB, this.disabled = !!ik.disabled, this.filterEvents = (kk, ek) => !0, this.ignoreEvent = kk => !1, this.down = new Dk.EventEmitter, this.up = new Dk.EventEmitter, this.state = {}, this.wT = {
          dx: 0,
          dy: 0,
          Wkk: 0,
          tkk: 0,
          Xkk: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? mk(this) : document.addEventListener("DOMContentLoaded", (kk => {
          mk(this)
        }), {
          once: !0
        })
      }
      bind(kk) {
        for (var ek = arguments.length, ik = new Array(ek > 1 ? ek - 1 : 0), Dk = 1; Dk < ek; Dk++) ik[Dk - 1] = arguments[Dk];
        ik.forEach((ek => {
          var ik = this._keyBindmap[ek] || [];
          ik.includes(kk) || (ik.push(kk), this._keyBindmap[ek] = ik)
        })), this.state[kk] = !!this.state[kk], this.pressCount[kk] = this.pressCount[kk] || 0, this.releaseCount[kk] = this.releaseCount[kk] || 0
      }
      unbind(kk) {
        for (var ek in this._keyBindmap) {
          var ik = this._keyBindmap[ek],
            Dk = ik.indexOf(kk);
          Dk > -1 && ik.splice(Dk, 1)
        }
      }
      getBindings() {
        var kk = {};
        for (var ek in this._keyBindmap) {
          this._keyBindmap[ek].forEach((ik => {
            kk[ik] = kk[ik] || [], kk[ik].push(ek)
          }))
        }
        return kk
      }
      Px() {
        Pk(this.wT), Pk(this.pressCount), Pk(this.releaseCount)
      }
    }

    function Pk(kk) {
      for (var ek in kk) kk[ek] = 0
    }

    function mk(kk) {
      window.addEventListener("keydown", wk.bind(null, kk, !0), !1), window.addEventListener("keyup", wk.bind(null, kk, !1), !1);
      var ek = {
        passive: !0
      };
      kk.element.addEventListener("touchstart", nk.bind(void 0, kk), {
        passive: !1
      }), kk.element.addEventListener("touchend", Hk.bind(void 0, kk), ek), kk.element.addEventListener("mousedown", lk.bind(null, kk, !0), ek), window.document.addEventListener("mouseup", lk.bind(null, kk, !1), ek), kk.element.addEventListener("touchmove", pk.bind(null, kk), ek), kk.element.addEventListener("mousemove", pk.bind(null, kk), ek), window.PointerEvent, kk.element.addEventListener("wheel", yk.bind(null, kk), ek), kk.element.addEventListener("contextmenu", Yk.bind(null, kk), !1), window.addEventListener("blur", Ak.bind(null, kk), !1)
    }
    var Mk = 0,
      Kk = 0,
      xk = null;

    function nk(kk, ek) {
      ek.preventDefault(), Uk(ek)
    }

    function Uk(kk) {
      let ek = !1;
      for (let ik = 0; ik < kk.touches.length; ++ik)
        if (kk.touches[ik].identifier === xk) {
          ek = !0;
          break
        } if (!ek) {
        const ek = kk.changedTouches[0];
        Mk = ek.clientX, Kk = ek.clientY, xk = ek.identifier
      }
    }

    function Hk(kk, ek) {
      for (var ik = ek.changedTouches, Dk = 0; Dk < ik.length; ++Dk) ik[Dk].identifier === xk && (xk = null)
    }

    function wk(kk, ek, ik) {
      if (!kk.ignoreEvent(ik)) try {
        jk(kk, ik), ek && ik.isTrusted && !ik.repeat && kk._keyStates[ik.code] && sk(kk, ik.code)
      } finally {
        dk(ik.code, ek, kk, ik)
      }
    }

    function lk(kk, ek, ik) {
      if (!kk.ignoreEvent(ik)) try {
        jk(kk, ik)
      } finally {
        ! function(kk, ek, ik) {
          if ("pointerId" in ik)
            if (ek) {
              if (null !== kk._touches.currID) return;
              kk._touches.currID = ik.pointerId
            } else {
              if (kk._touches.currID !== ik.pointerId) return;
              kk._touches.currID = null
            } var Dk = "button" in ik ? ik.button + 1 : 1;
          dk("Mouse" + Dk, ek, kk, ik)
        }(kk, ek, ik)
      }
    }

    function pk(kk, ek) {
      var ik = ek.movementX || ek.mozMovementX || 0,
        Dk = ek.movementY || ek.mozMovementY || 0;
      if (ek.touches && 0 === (ik | Dk)) {
        var fk = function(kk) {
          Uk(kk);
          for (let ek = 0; ek < kk.changedTouches.length; ++ek)
            if (kk.changedTouches[ek].identifier == xk) {
              const ik = kk.changedTouches[ek],
                Dk = [ik.clientX - Mk, ik.clientY - Kk];
              return Mk = ik.clientX, Kk = ik.clientY, Dk
            } return console.error(`Did not find touch id ${xk}`), [0, 0]
        }(ek);
        ik = fk[0], Dk = fk[1]
      }
      kk.wT.dx += ik, kk.wT.dy += Dk
    }

    function yk(kk, ek) {
      jk(kk, ek);
      var ik = 1;
      switch (ek.deltaMode) {
        case 0:
          ik = 1;
          break;
        case 1:
          ik = 12;
          break;
        case 2:
          ik = kk.element.clientHeight || window.innerHeight
      }
      kk.wT.Wkk += (ek.deltaX || 0) * ik, kk.wT.tkk += (ek.deltaY || 0) * ik, kk.wT.Xkk += (ek.deltaZ || 0) * ik
    }

    function Yk(kk, ek) {
      if (!kk.JB) return ek.preventDefault(), !1
    }
    var Lk = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function Ck(kk, ek) {
      return !!kk[Lk[ek]] || ("AltRight" === ek || "ControlLeft" === ek) && "function" === typeof kk.getModifierState && !0 === kk.getModifierState("AltGraph")
    }

    function Ak(kk, ek) {
      for (var ik in kk._modifiersHeldThroughBlur = {}, Lk) kk._keyStates[ik] && (kk._modifiersHeldThroughBlur[ik] = !0);
      ek && ek.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (kk) {
          return !0
        }
      }() && (clearTimeout(kk._blurRelease), kk._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var ek in kk._modifiersHeldThroughBlur = {}, kk._keyStates) kk._keyStates[ek] && !/^Mouse\d/.test(ek) && sk(kk, ek)
      }), 0))
    }

    function jk(kk, ek) {
      var ik = kk._modifiersHeldThroughBlur;
      if (ik && ek.isTrusted && document.hasFocus())
        for (var Dk in ik) delete ik[Dk], kk._keyStates[Dk] && Dk !== ek.code && (Ck(ek, Dk) || sk(kk, Dk))
    }

    function sk(kk, ek) {
      const ik = {
          code: ek,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        Dk = fk;
      fk = ik;
      try {
        dk(ek, !1, kk, ik)
      } finally {
        fk = Dk
      }
    }

    function dk(kk, ek, ik, Dk) {
      var fk = ik._keyBindmap[kk];
      fk && (Vk(ik._keyStates[kk], ek) && (ik._keyStates[kk] = ek, fk.forEach((kk => {
        (!ik.filterEvents || ik.filterEvents(Dk, kk)) && function(kk, ek, ik, Dk) {
          var fk = ek ? ik.pressCount : ik.releaseCount;
          fk[kk] = (fk[kk] || 0) + 1;
          var Sk = ik._bindPressCount[kk] || 0;
          (Sk += ek ? 1 : -1) < 0 && (Sk = 0);
          ik._bindPressCount[kk] = Sk;
          var bk = ik.state[kk];
          if (Vk(bk, Sk)) {
            ik.state[kk] = Sk > 0;
            var rk = ek ? ik.down : ik.up;
            ik.disabled || rk.emit(kk, Dk)
          }
        }(kk, ek, ik, Dk)
      }))), "button" in Dk || (ik.oB && !Dk.defaultPrevented && Dk.preventDefault(), ik.stopPropagation && Dk.stopPropagation()))
    }

    function Vk(kk, ek) {
      return kk ? !ek : ek
    }
  },
  36067: (kk, ek) => {
    function ik(kk) {
      if (kk && "object" === typeof kk) {
        var ek = kk.which || kk.keyCode || kk.charCode;
        ek && (kk = ek)
      }
      if ("number" === typeof kk) return bk[kk];
      var ik, Sk = String(kk);
      return (ik = Dk[Sk.toLowerCase()]) ? ik : (ik = fk[Sk.toLowerCase()]) || (1 === Sk.length ? Sk.charCodeAt(0) : void 0)
    }
    ik.isEventKey = function(kk, ek) {
      if (kk && "object" === typeof kk) {
        var ik = kk.which || kk.keyCode || kk.charCode;
        if (null === ik || void 0 === ik) return !1;
        if ("string" === typeof ek) {
          var Sk;
          if (Sk = Dk[ek.toLowerCase()]) return Sk === ik;
          if (Sk = fk[ek.toLowerCase()]) return Sk === ik
        } else if ("number" === typeof ek) return ek === ik;
        return !1
      }
    };
    var Dk = (ek = kk.exports = ik).code = ek.codes = {
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
      fk = ek.aliases = {
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
    for (Sk = 97; Sk < 123; Sk++) Dk[String.fromCharCode(Sk)] = Sk - 32;
    for (var Sk = 48; Sk < 58; Sk++) Dk[Sk - 48] = Sk;
    for (Sk = 1; Sk < 13; Sk++) Dk["f" + Sk] = Sk + 111;
    for (Sk = 0; Sk < 10; Sk++) Dk["numpad " + Sk] = Sk + 96;
    var bk = ek.names = ek.title = {};
    for (Sk in Dk) bk[Dk[Sk]] = Sk;
    for (var rk in fk) Dk[rk] = fk[rk]
  },
  39112: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Dk
    });
    class Dk {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        this.ZI = !1, this.JI = !1, this.uF = 30, this.pI = 0, this.Yz = 100, this.Gw = !1, this.fullscreen = !1, this.Iy = function(kk) {}, this.FQ = function(kk, ek, ik) {}, this.Av = function() {}, this.Ay = function() {}, this.EQ = function() {}, this.onFullscreenChanged = function() {}, this.onPointerLockError = function(kk) {}, this._data = new fk(ek),
          function(kk) {
            if ("loading" === document.readyState) {
              var ek = () => {
                document.removeEventListener("readystatechange", ek), kk()
              };
              document.addEventListener("readystatechange", ek)
            } else setTimeout(kk, 0)
          }((() => {
            ! function(kk) {
              var ek = kk._data,
                ik = ek.nowObject.now();
              ek.lastTickStarted = ik, ek.lastFrameStarted = ik, ek.lastRenderStarted = ik, ek.frameCB = () => function(kk) {
                var ek = kk._data;
                requestAnimationFrame(ek.frameCB), rk(kk);
                var ik = ek.nowObject.now(),
                  Dk = ik - ek.lastFrameStarted;
                if (ek.lastFrameStarted = ik, kk.pI > 0) {
                  ek.renderAccum += Dk;
                  var fk = 1e3 / kk.pI;
                  if (ek.renderAccum < fk) return;
                  ek.renderAccum -= fk, ek.renderAccum > fk && (ek.renderAccum = fk)
                }
                var Sk = ik - ek.lastRenderStarted;
                ek.lastRenderStarted = ik;
                var bk = 1e3 / kk.uF,
                  Pk = (ik - ek.lastTickStarted) / bk;
                Pk < 0 && (Pk = 0);
                kk.FQ(Sk, Pk, bk), setTimeout(rk, 0, kk, !0)
              }(kk), ek.intervalCB = () => rk(kk), requestAnimationFrame(ek.frameCB), ek.pollTime > 0 && (ek.intervalID = setInterval(ek.intervalCB, Math.max(ek.pollTime, 1e3 / kk.uF / 2)))
            }(this),
            function(kk, ek) {
              if (!ek) return;
              var ik = !1,
                Dk = !1,
                fk = kk => {
                  if (!!kk !== (ik = ek === document.pointerLockElement))
                    if (kk) {
                      var Dk = ek.requestPointerLock();
                      Dk && Dk.catch && Dk.catch((kk => {}))
                    } else document.exitPointerLock()
                },
                Sk = kk => {
                  !!kk !== (Dk = ek === document.fullscreenElement) && (kk ? ek.requestFullscreen ? ek.requestFullscreen() : ek.webkitRequestFullscreen && ek.webkitRequestFullscreen() : document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen())
                };
              document.addEventListener("pointerlockchange", (Dk => {
                ik = ek === document.pointerLockElement, kk.EQ(ik)
              })), document.addEventListener("fullscreenchange", (ik => {
                Dk = ek === document.fullscreenElement, kk.onFullscreenChanged(Dk)
              })), document.addEventListener("pointerlockerror", (Dk => {
                ik = ek === document.pointerLockElement, kk.onPointerLockError(Dk)
              })), Object.defineProperty(kk, "Gw", {
                get: () => ik,
                set: fk
              }), Object.defineProperty(kk, "fullscreen", {
                get: () => Dk,
                set: Sk
              }), ek.addEventListener("click", (ek => {
                kk.ZI && fk(!0), kk.JI && Sk(!0)
              }));
              var bk = () => kk.Ay();
              if (window.ResizeObserver) {
                new ResizeObserver(bk).observe(ek)
              } else window.addEventListener("resize", bk)
            }(this, kk), this.Av()
          }))
      }
    }

    function fk() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      this.nowObject = performance || Date, this.pollTime = kk, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
    }
    var Sk = 3,
      bk = 20;

    function rk(kk) {
      for (var ek = kk._data, ik = 1e3 / kk.uF, Dk = ek.nowObject.now() + bk, fk = 0; ek.nowObject.now() >= ek.lastTickStarted + ik && ek.nowObject.now() < Dk && ++fk <= Sk;) kk.Iy(ik), ek.lastTickStarted += ik;
      var rk = 5 * (ik + 5),
        Pk = ek.nowObject.now();
      if (Pk - ek.lastTickStarted > rk)
        for (; Pk >= ek.lastTickStarted + ik;) ek.lastTickStarted += ik
    }
  },
  36263: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => bk
    });
    var Dk = ik(60);
    const fk = Dk.useLayoutEffect;
    const Sk = function(kk) {
      var ek = (0, Dk.useRef)(kk);
      return fk((function() {
        ek.current = kk
      })), ek
    };
    var bk = function(kk) {
      var ek = Sk(kk);
      (0, Dk.useEffect)((function() {
        var kk = function(kk) {
          var ik;
          if (null != ek.current && (ik = ek.current(kk)), kk.defaultPrevented && (kk.returnValue = ""), "string" === typeof ik) return kk.returnValue = ik, ik
        };
        return window.addEventListener("beforeunload", kk),
          function() {
            window.removeEventListener("beforeunload", kk)
          }
      }), [])
    }
  },
  36127: kk => {
    var ek, ik = "undefined" !== typeof window ? window.navigator.userAgent : "",
      Dk = /OS X/.test(ik),
      fk = /Opera/.test(ik),
      Sk = !/like Gecko/.test(ik) && !fk,
      bk = kk.exports = {
        0: Dk ? "<menu>" : "<UNK>",
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
        93: Dk ? "<meta>" : "<menu>",
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
        173: Dk && Sk ? "-" : "<volume-mute>",
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
        231: fk ? "`" : "<unicode>",
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
    for (ek = 58; ek < 65; ++ek) bk[ek] = String.fromCharCode(ek);
    for (ek = 48; ek < 58; ++ek) bk[ek] = ek - 48 + "";
    for (ek = 65; ek < 91; ++ek) bk[ek] = String.fromCharCode(ek);
    for (ek = 96; ek < 106; ++ek) bk[ek] = "<num-" + (ek - 96) + ">";
    for (ek = 112; ek < 136; ++ek) bk[ek] = "F" + (ek - 111)
  },
  38565: (kk, ek, ik) => {
    function Dk(kk, ek, ik, Dk, fk) {
      var Sk = {};
      return Object.keys(Dk).forEach((function(kk) {
        Sk[kk] = Dk[kk]
      })), Sk.enumerable = !!Sk.enumerable, Sk.configurable = !!Sk.configurable, ("value" in Sk || Sk.initializer) && (Sk.writable = !0), Sk = ik.slice().reverse().reduce((function(ik, Dk) {
        return Dk(kk, ek, ik) || ik
      }), Sk), fk && void 0 !== Sk.initializer && (Sk.value = Sk.initializer ? Sk.initializer.call(fk) : void 0, Sk.initializer = void 0), void 0 === Sk.initializer && (Object.defineProperty(kk, ek, Sk), Sk = null), Sk
    }
    ik.d(ek, {
      b: () => Dk
    })
  },
  38558: (kk, ek, ik) => {
    function Dk(kk, ek, ik, Dk) {
      ik && Object.defineProperty(kk, ek, {
        enumerable: ik.enumerable,
        configurable: ik.configurable,
        writable: ik.writable,
        value: ik.initializer ? ik.initializer.call(Dk) : void 0
      })
    }
    ik.d(ek, {
      e: () => Dk
    })
  },
  38265: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Sk
    });
    var Dk = ik(38272);
    const fk = (kk, ek, ik) => kk ? kk.getClassName && "Mesh" === kk.getClassName() ? null : !kk.getClassName || "SubMesh" !== kk.getClassName() && "PhysicsBody" !== kk.getClassName() ? kk.clone ? kk.clone() : Array.isArray(kk) ? kk.slice() : ik && "object" === typeof kk ? {
      ...kk
    } : null : kk.clone(ek) : null;
    class Sk {
      static DeepCopy(kk, ek, ik, Sk) {
        let bk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const rk = function(kk) {
          const ek = [];
          do {
            const ik = Object.getOwnPropertyNames(kk);
            for (const kk of ik) - 1 === ek.indexOf(kk) && ek.push(kk)
          } while (kk = Object.getPrototypeOf(kk));
          return ek
        }(kk);
        for (const mk of rk) {
          if ("_" === mk[0] && (!Sk || -1 === Sk.indexOf(mk))) continue;
          if (mk.endsWith("Observable")) continue;
          if (ik && -1 !== ik.indexOf(mk)) continue;
          const rk = kk[mk],
            Mk = typeof rk;
          if ("function" !== Mk) try {
            if ("object" === Mk)
              if (rk instanceof Uint8Array) ek[mk] = Uint8Array.from(rk);
              else if (rk instanceof Array) {
              if (ek[mk] = [], rk.length > 0)
                if ("object" == typeof rk[0])
                  for (let kk = 0; kk < rk.length; kk++) {
                    const ik = fk(rk[kk], ek, bk); - 1 === ek[mk].indexOf(ik) && ek[mk].push(ik)
                  } else ek[mk] = rk.slice(0)
            } else ek[mk] = fk(rk, ek, bk);
            else ek[mk] = rk
          } catch (Pk) {
            Dk.b.Warn(Pk.message)
          }
        }
      }
    }
  },
  38294: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => fk,
      h: () => Sk,
      l: () => bk,
      m: () => rk
    });
    var Dk = ik(36874);
    class fk {
      constructor(kk, ek, ik) {
        this.gradient = kk, this.color1 = ek, this.color2 = ik
      }
      getColorToRef(kk) {
        this.color2 ? Dk.f.LerpToRef(this.color1, this.color2, Math.random(), kk) : kk.Fs(this.color1)
      }
    }
    class Sk {
      constructor(kk, ek) {
        this.gradient = kk, this.color = ek
      }
    }
    class bk {
      constructor(kk, ek, ik) {
        this.gradient = kk, this.factor1 = ek, this.factor2 = ik
      }
      getFactor() {
        return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
      }
    }
    class rk {
      static GetCurrentGradient(kk, ek, ik) {
        if (ek[0].gradient > kk) return void ik(ek[0], ek[0], 1);
        for (let fk = 0; fk < ek.length - 1; fk++) {
          const Dk = ek[fk],
            Sk = ek[fk + 1];
          if (kk >= Dk.gradient && kk <= Sk.gradient) {
            return void ik(Dk, Sk, (kk - Dk.gradient) / (Sk.gradient - Dk.gradient))
          }
        }
        const Dk = ek.length - 1;
        ik(ek[Dk], ek[Dk], 1)
      }
    }
  },
  38272: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Dk
    });
    class Dk {
      static _CheckLimit(kk, ek) {
        let ik = Dk._LogLimitOutputs[kk];
        return ik ? ik.current++ : (ik = {
          limit: ek,
          current: 1
        }, Dk._LogLimitOutputs[kk] = ik), ik.current <= ik.limit
      }
      static _GenerateLimitMessage(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const ik = Dk._LogLimitOutputs[kk];
        if (!ik || !Dk.MessageLimitReached) return;
        const fk = this._Levels[ek];
        ik.current === ik.limit && Dk[fk.name](Dk.MessageLimitReached.replace(/%LIMIT%/g, "" + ik.limit).replace(/%TYPE%/g, fk.name ?? ""))
      }
      static _AddLogEntry(kk) {
        Dk._LogCache = kk + Dk._LogCache, Dk.OnNewCacheEntry && Dk.OnNewCacheEntry(kk)
      }
      static _FormatMessage(kk) {
        const ek = kk => kk < 10 ? "0" + kk : "" + kk,
          ik = new Date;
        return "[" + ek(ik.getHours()) + ":" + ek(ik.getMinutes()) + ":" + ek(ik.getSeconds()) + "]: " + kk
      }
      static _LogDisabled(kk, ek) {}
      static _LogEnabled() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ek = arguments.length > 1 ? arguments[1] : void 0,
          ik = arguments.length > 2 ? arguments[2] : void 0;
        const fk = Array.isArray(ek) ? ek[0] : ek;
        if (void 0 !== ik && !Dk._CheckLimit(fk, ik)) return;
        const Sk = Dk._FormatMessage(fk),
          bk = this._Levels[kk],
          rk = Array.isArray(ek) ? ek.slice(1) : [];
        bk.logFunc && bk.logFunc("BJS - " + Sk, ...rk);
        const Pk = `<div style='color:${bk.color}'>${Sk}</div><br>`;
        Dk._AddLogEntry(Pk), Dk._GenerateLimitMessage(fk, kk)
      }
      static get LogCache() {
        return Dk._LogCache
      }
      static ClearLogCache() {
        Dk._LogCache = "", Dk._LogLimitOutputs = {}, Dk.errorsCount = 0
      }
      static set LogLevels(kk) {
        Dk.Log = Dk._LogDisabled, Dk.Warn = Dk._LogDisabled, Dk.Error = Dk._LogDisabled;
        const ek = [Dk.MessageLogLevel, Dk.WarningLogLevel, Dk.ErrorLogLevel];
        for (const ik of ek)
          if ((kk & ik) === ik) {
            const kk = this._Levels[ik];
            Dk[kk.name] = Dk._LogEnabled.bind(Dk, ik)
          }
      }
    }
    Dk.NoneLogLevel = 0, Dk.MessageLogLevel = 1, Dk.WarningLogLevel = 2, Dk.ErrorLogLevel = 4, Dk.AllLogLevel = 7, Dk.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Dk._LogCache = "", Dk._LogLimitOutputs = {}, Dk._Levels = [{}, {
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
    }], Dk.errorsCount = 0, Dk.Log = Dk._LogEnabled.bind(Dk, Dk.MessageLogLevel), Dk.Warn = Dk._LogEnabled.bind(Dk, Dk.WarningLogLevel), Dk.Error = Dk._LogEnabled.bind(Dk, Dk.ErrorLogLevel)
  },
  38296: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => bk
    });
    var Dk = ik(36698),
      fk = ik(36729),
      Sk = ik(38265);
    class bk {
      constructor() {
        this.direction1 = new Dk.o(0, 1, 0), this.direction2 = new Dk.o(0, 1, 0), this.minEmitBox = new Dk.o(-.5, -.5, -.5), this.maxEmitBox = new Dk.o(.5, .5, .5)
      }
      startDirectionFunction(kk, ek, ik, Sk) {
        const bk = (0, fk.RandomRange)(this.direction1.x, this.direction2.x),
          rk = (0, fk.RandomRange)(this.direction1.y, this.direction2.y),
          Pk = (0, fk.RandomRange)(this.direction1.z, this.direction2.z);
        if (Sk) return ek.x = bk, ek.y = rk, void(ek.z = Pk);
        Dk.o.TransformNormalFromFloatsToRef(bk, rk, Pk, kk, ek)
      }
      startPositionFunction(kk, ek, ik, Sk) {
        const bk = (0, fk.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
          rk = (0, fk.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
          Pk = (0, fk.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
        if (Sk) return ek.x = bk, ek.y = rk, void(ek.z = Pk);
        Dk.o.TransformCoordinatesFromFloatsToRef(bk, rk, Pk, kk, ek)
      }
      clone() {
        const kk = new bk;
        return Sk.c.DeepCopy(this, kk), kk
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
        return kk.type = this.getClassName(), kk.direction1 = this.direction1.Tik(), kk.direction2 = this.direction2.Tik(), kk.minEmitBox = this.minEmitBox.Tik(), kk.maxEmitBox = this.maxEmitBox.Tik(), kk
      }
      parse(kk) {
        Dk.o.FromArrayToRef(kk.direction1, 0, this.direction1), Dk.o.FromArrayToRef(kk.direction2, 0, this.direction2), Dk.o.FromArrayToRef(kk.minEmitBox, 0, this.minEmitBox), Dk.o.FromArrayToRef(kk.maxEmitBox, 0, this.maxEmitBox)
      }
    }
  },
  38262: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => rk,
      f: () => bk
    });
    var Dk = ik(36698),
      fk = ik(36729),
      Sk = ik(38265);
    class bk {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          fk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.radius = kk, this.height = ek, this.radiusRange = ik, this.directionRandomizer = fk, this._tempVector = Dk.o.Zero()
      }
      startDirectionFunction(kk, ek, ik, Sk, bk) {
        ik.position.subtractToRef(kk.getTranslation(), this._tempVector), this._tempVector.normalize(), Dk.o.TransformNormalToRef(this._tempVector, bk, this._tempVector);
        const rk = (0, fk.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
        let Pk = Math.atan2(this._tempVector.x, this._tempVector.z);
        Pk += (0, fk.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = rk, this._tempVector.x = Math.sin(Pk), this._tempVector.z = Math.cos(Pk), this._tempVector.normalize(), Sk ? ek.Fs(this._tempVector) : Dk.o.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, kk, ek)
      }
      startPositionFunction(kk, ek, ik, Sk) {
        const bk = (0, fk.RandomRange)(-this.height / 2, this.height / 2),
          rk = (0, fk.RandomRange)(0, 2 * Math.PI),
          Pk = (0, fk.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
          mk = Math.sqrt(Pk) * this.radius,
          Mk = mk * Math.cos(rk),
          Kk = mk * Math.sin(rk);
        Sk ? ek.Z6(Mk, bk, Kk) : Dk.o.TransformCoordinatesFromFloatsToRef(Mk, bk, Kk, kk, ek)
      }
      clone() {
        const kk = new bk(this.radius, this.directionRandomizer);
        return Sk.c.DeepCopy(this, kk), kk
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
    class rk extends bk {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          fk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Dk.o(0, 1, 0),
          Sk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Dk.o(0, 1, 0);
        super(kk, ek, ik), this.direction1 = fk, this.direction2 = Sk
      }
      startDirectionFunction(kk, ek, ik, Sk) {
        const bk = (0, fk.RandomRange)(this.direction1.x, this.direction2.x),
          rk = (0, fk.RandomRange)(this.direction1.y, this.direction2.y),
          Pk = (0, fk.RandomRange)(this.direction1.z, this.direction2.z);
        Sk ? ek.Z6(bk, rk, Pk) : Dk.o.TransformNormalFromFloatsToRef(bk, rk, Pk, kk, ek)
      }
      clone() {
        const kk = new rk(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
        return Sk.c.DeepCopy(this, kk), kk
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
        return kk.direction1 = this.direction1.Tik(), kk.direction2 = this.direction2.Tik(), kk
      }
      parse(kk) {
        super.parse(kk), Dk.o.FromArrayToRef(kk.direction1, 0, this.direction1), Dk.o.FromArrayToRef(kk.direction2, 0, this.direction2)
      }
    }
  },
  38368: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Kk
    });
    const Dk = .5 * (Math.sqrt(3) - 1),
      fk = (3 - Math.sqrt(3)) / 6,
      Sk = 1 / 3,
      bk = 1 / 6,
      rk = (Math.sqrt(5) - 1) / 4,
      Pk = (5 - Math.sqrt(5)) / 20,
      mk = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
      Mk = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]);
    const Kk = class {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
        const ek = "function" == typeof kk ? kk : function(kk) {
          let ek = 0,
            ik = 0,
            Dk = 0,
            fk = 1;
          const Sk = function() {
            let kk = 4022871197;
            return function(ek) {
              ek = ek.toString();
              for (let ik = 0; ik < ek.length; ik++) {
                kk += ek.charCodeAt(ik);
                let Dk = .02519603282416938 * kk;
                kk = Dk >>> 0, Dk -= kk, Dk *= kk, kk = Dk >>> 0, Dk -= kk, kk += 4294967296 * Dk
              }
              return 2.3283064365386963e-10 * (kk >>> 0)
            }
          }();
          ek = Sk(" "), ik = Sk(" "), Dk = Sk(" "), ek -= Sk(kk), ek < 0 && (ek += 1);
          ik -= Sk(kk), ik < 0 && (ik += 1);
          Dk -= Sk(kk), Dk < 0 && (Dk += 1);
          return function() {
            const kk = 2091639 * ek + 2.3283064365386963e-10 * fk;
            return ek = ik, ik = Dk, Dk = kk - (fk = 0 | kk)
          }
        }(kk);
        this.p = function(kk) {
          const ek = new Uint8Array(256);
          for (let ik = 0; ik < 256; ik++) ek[ik] = ik;
          for (let ik = 0; ik < 255; ik++) {
            const Dk = ik + ~~(kk() * (256 - ik)),
              fk = ek[ik];
            ek[ik] = ek[Dk], ek[Dk] = fk
          }
          return ek
        }(ek), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
        for (let ik = 0; ik < 512; ik++) this.perm[ik] = this.p[255 & ik], this.permMod12[ik] = this.perm[ik] % 12
      }
      noise2D(kk, ek) {
        const ik = this.permMod12,
          Sk = this.perm;
        let bk = 0,
          rk = 0,
          Pk = 0;
        const Mk = (kk + ek) * Dk,
          Kk = Math.floor(kk + Mk),
          xk = Math.floor(ek + Mk),
          nk = (Kk + xk) * fk,
          Uk = kk - (Kk - nk),
          Hk = ek - (xk - nk);
        let wk, lk;
        Uk > Hk ? (wk = 1, lk = 0) : (wk = 0, lk = 1);
        const pk = Uk - wk + fk,
          yk = Hk - lk + fk,
          Yk = Uk - 1 + 2 * fk,
          Lk = Hk - 1 + 2 * fk,
          Ck = 255 & Kk,
          Ak = 255 & xk;
        let jk = .5 - Uk * Uk - Hk * Hk;
        if (jk >= 0) {
          const kk = 3 * ik[Ck + Sk[Ak]];
          jk *= jk, bk = jk * jk * (mk[kk] * Uk + mk[kk + 1] * Hk)
        }
        let sk = .5 - pk * pk - yk * yk;
        if (sk >= 0) {
          const kk = 3 * ik[Ck + wk + Sk[Ak + lk]];
          sk *= sk, rk = sk * sk * (mk[kk] * pk + mk[kk + 1] * yk)
        }
        let dk = .5 - Yk * Yk - Lk * Lk;
        if (dk >= 0) {
          const kk = 3 * ik[Ck + 1 + Sk[Ak + 1]];
          dk *= dk, Pk = dk * dk * (mk[kk] * Yk + mk[kk + 1] * Lk)
        }
        return 70 * (bk + rk + Pk)
      }
      noise3D(kk, ek, ik) {
        const Dk = this.permMod12,
          fk = this.perm;
        let rk, Pk, Mk, Kk;
        const xk = (kk + ek + ik) * Sk,
          nk = Math.floor(kk + xk),
          Uk = Math.floor(ek + xk),
          Hk = Math.floor(ik + xk),
          wk = (nk + Uk + Hk) * bk,
          lk = kk - (nk - wk),
          pk = ek - (Uk - wk),
          yk = ik - (Hk - wk);
        let Yk, Lk, Ck, Ak, jk, sk;
        lk >= pk ? pk >= yk ? (Yk = 1, Lk = 0, Ck = 0, Ak = 1, jk = 1, sk = 0) : lk >= yk ? (Yk = 1, Lk = 0, Ck = 0, Ak = 1, jk = 0, sk = 1) : (Yk = 0, Lk = 0, Ck = 1, Ak = 1, jk = 0, sk = 1) : pk < yk ? (Yk = 0, Lk = 0, Ck = 1, Ak = 0, jk = 1, sk = 1) : lk < yk ? (Yk = 0, Lk = 1, Ck = 0, Ak = 0, jk = 1, sk = 1) : (Yk = 0, Lk = 1, Ck = 0, Ak = 1, jk = 1, sk = 0);
        const dk = lk - Yk + bk,
          Vk = pk - Lk + bk,
          Fk = yk - Ck + bk,
          uk = lk - Ak + 2 * bk,
          qk = pk - jk + 2 * bk,
          Ik = yk - sk + 2 * bk,
          zk = lk - 1 + .5,
          Qk = pk - 1 + .5,
          vk = yk - 1 + .5,
          Ek = 255 & nk,
          hk = 255 & Uk,
          ak = 255 & Hk;
        let Wk = .6 - lk * lk - pk * pk - yk * yk;
        if (Wk < 0) rk = 0;
        else {
          const kk = 3 * Dk[Ek + fk[hk + fk[ak]]];
          Wk *= Wk, rk = Wk * Wk * (mk[kk] * lk + mk[kk + 1] * pk + mk[kk + 2] * yk)
        }
        let tk = .6 - dk * dk - Vk * Vk - Fk * Fk;
        if (tk < 0) Pk = 0;
        else {
          const kk = 3 * Dk[Ek + Yk + fk[hk + Lk + fk[ak + Ck]]];
          tk *= tk, Pk = tk * tk * (mk[kk] * dk + mk[kk + 1] * Vk + mk[kk + 2] * Fk)
        }
        let Xk = .6 - uk * uk - qk * qk - Ik * Ik;
        if (Xk < 0) Mk = 0;
        else {
          const kk = 3 * Dk[Ek + Ak + fk[hk + jk + fk[ak + sk]]];
          Xk *= Xk, Mk = Xk * Xk * (mk[kk] * uk + mk[kk + 1] * qk + mk[kk + 2] * Ik)
        }
        let Bk = .6 - zk * zk - Qk * Qk - vk * vk;
        if (Bk < 0) Kk = 0;
        else {
          const kk = 3 * Dk[Ek + 1 + fk[hk + 1 + fk[ak + 1]]];
          Bk *= Bk, Kk = Bk * Bk * (mk[kk] * zk + mk[kk + 1] * Qk + mk[kk + 2] * vk)
        }
        return 32 * (rk + Pk + Mk + Kk)
      }
      noise4D(kk, ek, ik, Dk) {
        const fk = this.perm;
        let Sk, bk, mk, Kk, xk;
        const nk = (kk + ek + ik + Dk) * rk,
          Uk = Math.floor(kk + nk),
          Hk = Math.floor(ek + nk),
          wk = Math.floor(ik + nk),
          lk = Math.floor(Dk + nk),
          pk = (Uk + Hk + wk + lk) * Pk,
          yk = kk - (Uk - pk),
          Yk = ek - (Hk - pk),
          Lk = ik - (wk - pk),
          Ck = Dk - (lk - pk);
        let Ak = 0,
          jk = 0,
          sk = 0,
          dk = 0;
        yk > Yk ? Ak++ : jk++, yk > Lk ? Ak++ : sk++, yk > Ck ? Ak++ : dk++, Yk > Lk ? jk++ : sk++, Yk > Ck ? jk++ : dk++, Lk > Ck ? sk++ : dk++;
        const Vk = Ak >= 3 ? 1 : 0,
          Fk = jk >= 3 ? 1 : 0,
          uk = sk >= 3 ? 1 : 0,
          qk = dk >= 3 ? 1 : 0,
          Ik = Ak >= 2 ? 1 : 0,
          zk = jk >= 2 ? 1 : 0,
          Qk = sk >= 2 ? 1 : 0,
          vk = dk >= 2 ? 1 : 0,
          Ek = Ak >= 1 ? 1 : 0,
          hk = jk >= 1 ? 1 : 0,
          ak = sk >= 1 ? 1 : 0,
          Wk = dk >= 1 ? 1 : 0,
          tk = yk - Vk + Pk,
          Xk = Yk - Fk + Pk,
          Bk = Lk - uk + Pk,
          ck = Ck - qk + Pk,
          Tk = yk - Ik + 2 * Pk,
          Zk = Yk - zk + 2 * Pk,
          Ok = Lk - Qk + 2 * Pk,
          gk = Ck - vk + 2 * Pk,
          Gk = yk - Ek + 3 * Pk,
          Nk = Yk - hk + 3 * Pk,
          Rk = Lk - ak + 3 * Pk,
          Jk = Ck - Wk + 3 * Pk,
          ke = yk - 1 + 4 * Pk,
          ee = Yk - 1 + 4 * Pk,
          ie = Lk - 1 + 4 * Pk,
          De = Ck - 1 + 4 * Pk,
          fe = 255 & Uk,
          Se = 255 & Hk,
          be = 255 & wk,
          re = 255 & lk;
        let Pe = .6 - yk * yk - Yk * Yk - Lk * Lk - Ck * Ck;
        if (Pe < 0) Sk = 0;
        else {
          const kk = fk[fe + fk[Se + fk[be + fk[re]]]] % 32 * 4;
          Pe *= Pe, Sk = Pe * Pe * (Mk[kk] * yk + Mk[kk + 1] * Yk + Mk[kk + 2] * Lk + Mk[kk + 3] * Ck)
        }
        let me = .6 - tk * tk - Xk * Xk - Bk * Bk - ck * ck;
        if (me < 0) bk = 0;
        else {
          const kk = fk[fe + Vk + fk[Se + Fk + fk[be + uk + fk[re + qk]]]] % 32 * 4;
          me *= me, bk = me * me * (Mk[kk] * tk + Mk[kk + 1] * Xk + Mk[kk + 2] * Bk + Mk[kk + 3] * ck)
        }
        let Me = .6 - Tk * Tk - Zk * Zk - Ok * Ok - gk * gk;
        if (Me < 0) mk = 0;
        else {
          const kk = fk[fe + Ik + fk[Se + zk + fk[be + Qk + fk[re + vk]]]] % 32 * 4;
          Me *= Me, mk = Me * Me * (Mk[kk] * Tk + Mk[kk + 1] * Zk + Mk[kk + 2] * Ok + Mk[kk + 3] * gk)
        }
        let Ke = .6 - Gk * Gk - Nk * Nk - Rk * Rk - Jk * Jk;
        if (Ke < 0) Kk = 0;
        else {
          const kk = fk[fe + Ek + fk[Se + hk + fk[be + ak + fk[re + Wk]]]] % 32 * 4;
          Ke *= Ke, Kk = Ke * Ke * (Mk[kk] * Gk + Mk[kk + 1] * Nk + Mk[kk + 2] * Rk + Mk[kk + 3] * Jk)
        }
        let xe = .6 - ke * ke - ee * ee - ie * ie - De * De;
        if (xe < 0) xk = 0;
        else {
          const kk = fk[fe + 1 + fk[Se + 1 + fk[be + 1 + fk[re + 1]]]] % 32 * 4;
          xe *= xe, xk = xe * xe * (Mk[kk] * ke + Mk[kk + 1] * ee + Mk[kk + 2] * ie + Mk[kk + 3] * De)
        }
        return 27 * (Sk + bk + mk + Kk + xk)
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);