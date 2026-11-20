/*! For license information please see fsa8nn.213.c4a080c9.chunk.js.LICENSE.txt */
export const id = 213;
export const ids = [213];
export const modules = {
  39145: (bb, cb, sb) => {
    bb.exports = Wb;
    var kb = sb(356);

    function Wb(bb, cb) {
      if (!(this instanceof Wb)) return new Wb(bb, cb);
      var sb = kb.create();
      kb.add(sb, bb, cb), this.base = kb.min(kb.create(), bb, sb), this.vec = kb.clone(cb), this.max = kb.max(kb.create(), bb, sb), this.mag = kb.length(this.vec)
    }
    var ab = Wb.prototype;
    ab.width = function() {
      return this.vec[0]
    }, ab.height = function() {
      return this.vec[1]
    }, ab.depth = function() {
      return this.vec[2]
    }, ab.x0 = function() {
      return this.base[0]
    }, ab.y0 = function() {
      return this.base[1]
    }, ab.z0 = function() {
      return this.base[2]
    }, ab.x1 = function() {
      return this.max[0]
    }, ab.y1 = function() {
      return this.max[1]
    }, ab.z1 = function() {
      return this.max[2]
    }, ab.translate = function(bb) {
      return kb.add(this.max, this.max, bb), kb.add(this.base, this.base, bb), this
    }, ab.setPosition = function(bb) {
      return kb.add(this.max, bb, this.vec), kb.copy(this.base, bb), this
    }, ab.expand = function(bb) {
      var cb = kb.create(),
        sb = kb.create();
      return kb.max(cb, bb.max, this.max), kb.min(sb, bb.base, this.base), kb.subtract(cb, cb, sb), new Wb(sb, cb)
    }, ab.intersects = function(bb) {
      return !(bb.base[0] > this.max[0]) && (!(bb.base[1] > this.max[1]) && (!(bb.base[2] > this.max[2]) && (!(bb.max[0] < this.base[0]) && (!(bb.max[1] < this.base[1]) && !(bb.max[2] < this.base[2])))))
    }, ab.touches = function(bb) {
      var cb = this.union(bb);
      return null !== cb && (0 == cb.width() || 0 == cb.height() || 0 == cb.depth())
    }, ab.union = function(bb) {
      if (!this.intersects(bb)) return null;
      var cb = Math.max(bb.base[0], this.base[0]),
        sb = Math.max(bb.base[1], this.base[1]),
        kb = Math.max(bb.base[2], this.base[2]);
      return new Wb([cb, sb, kb], [Math.min(bb.max[0], this.max[0]) - cb, Math.min(bb.max[1], this.max[1]) - sb, Math.min(bb.max[2], this.max[2]) - kb])
    }
  },
  39140: bb => {
    bb.exports = function(bb, cb, sb, kb, Wb, ab) {
      var Tb = +cb[0],
        Ub = +cb[1],
        Ib = +cb[2],
        Hb = +sb[0],
        fb = +sb[1],
        Mb = +sb[2],
        Xb = Math.sqrt(Hb * Hb + fb * fb + Mb * Mb);
      if (0 === Xb) throw new Error("Can't raycast along a zero vector");
      return function(bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib, Hb) {
        for (var fb = 0, Mb = Math.floor, Xb = 0 | Mb(cb), nb = 0 | Mb(sb), mb = 0 | Mb(kb), lb = Wb > 0 ? 1 : -1, Qb = ab > 0 ? 1 : -1, eb = Tb > 0 ? 1 : -1, Cb = Math.abs(1 / Wb), Nb = Math.abs(1 / ab), Vb = Math.abs(1 / Tb), Lb = Cb < 1 / 0 ? Cb * (lb > 0 ? Xb + 1 - cb : cb - Xb) : 1 / 0, ub = Nb < 1 / 0 ? Nb * (Qb > 0 ? nb + 1 - sb : sb - nb) : 1 / 0, Yb = Vb < 1 / 0 ? Vb * (eb > 0 ? mb + 1 - kb : kb - mb) : 1 / 0, hb = -1; fb <= Ub;) {
          var Jb = bb(Xb, nb, mb);
          if (Jb) return Ib && (Ib[0] = cb + fb * Wb, Ib[1] = sb + fb * ab, Ib[2] = kb + fb * Tb), Hb && (Hb[0] = Hb[1] = Hb[2] = 0, 0 === hb && (Hb[0] = -lb), 1 === hb && (Hb[1] = -Qb), 2 === hb && (Hb[2] = -eb)), Jb;
          Lb < ub ? Lb < Yb ? (Xb += lb, fb = Lb, Lb += Cb, hb = 0) : (mb += eb, fb = Yb, Yb += Vb, hb = 2) : ub < Yb ? (nb += Qb, fb = ub, ub += Nb, hb = 1) : (mb += eb, fb = Yb, Yb += Vb, hb = 2)
        }
        return Ib && (Ib[0] = cb + fb * Wb, Ib[1] = sb + fb * ab, Ib[2] = kb + fb * Tb), Hb && (Hb[0] = Hb[1] = Hb[2] = 0), 0
      }(bb, Tb, Ub, Ib, Hb /= Xb, fb /= Xb, Mb /= Xb, kb = "undefined" === typeof kb ? 64 : +kb, Wb, ab)
    }
  },
  38680: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Ub,
      f: () => ab
    });
    var kb = sb(3876);
    let Wb = null;

    function ab(bb) {
      return null !== Wb && bb === Wb
    }

    function Tb() {
      this.mG = !1, this.stopPropagation = !1, this.lG = !1, this.disabled = !1
    }
    class Ub {
      constructor(bb, cb) {
        this.version = "0.7.0";
        var sb = Object.assign({}, new Tb, cb || {});
        this.element = bb || document, this.mG = !!sb.mG, this.stopPropagation = !!sb.stopPropagation, this.lG = !!sb.lG, this.disabled = !!sb.disabled, this.filterEvents = (bb, cb) => !0, this.down = new kb.EventEmitter, this.up = new kb.EventEmitter, this.state = {}, this.YG = {
          dx: 0,
          dy: 0,
          ubb: 0,
          Ybb: 0,
          hbb: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? Hb(this) : document.addEventListener("DOMContentLoaded", (bb => {
          Hb(this)
        }), {
          once: !0
        })
      }
      bind(bb) {
        for (var cb = arguments.length, sb = new Array(cb > 1 ? cb - 1 : 0), kb = 1; kb < cb; kb++) sb[kb - 1] = arguments[kb];
        sb.forEach((cb => {
          var sb = this._keyBindmap[cb] || [];
          sb.includes(bb) || (sb.push(bb), this._keyBindmap[cb] = sb)
        })), this.state[bb] = !!this.state[bb], this.pressCount[bb] = this.pressCount[bb] || 0, this.releaseCount[bb] = this.releaseCount[bb] || 0
      }
      unbind(bb) {
        for (var cb in this._keyBindmap) {
          var sb = this._keyBindmap[cb],
            kb = sb.indexOf(bb);
          kb > -1 && sb.splice(kb, 1)
        }
      }
      getBindings() {
        var bb = {};
        for (var cb in this._keyBindmap) {
          this._keyBindmap[cb].forEach((sb => {
            bb[sb] = bb[sb] || [], bb[sb].push(cb)
          }))
        }
        return bb
      }
      aX() {
        Ib(this.YG), Ib(this.pressCount), Ib(this.releaseCount)
      }
    }

    function Ib(bb) {
      for (var cb in bb) bb[cb] = 0
    }

    function Hb(bb) {
      window.addEventListener("keydown", Qb.bind(null, bb, !0), !1), window.addEventListener("keyup", Qb.bind(null, bb, !1), !1);
      var cb = {
        passive: !0
      };
      bb.element.addEventListener("touchstart", nb.bind(void 0, bb), {
        passive: !1
      }), bb.element.addEventListener("touchend", lb.bind(void 0, bb), cb), bb.element.addEventListener("mousedown", eb.bind(null, bb, !0), cb), window.document.addEventListener("mouseup", eb.bind(null, bb, !1), cb), bb.element.addEventListener("touchmove", Cb.bind(null, bb), cb), bb.element.addEventListener("mousemove", Cb.bind(null, bb), cb), window.PointerEvent, bb.element.addEventListener("wheel", Nb.bind(null, bb), cb), bb.element.addEventListener("contextmenu", Vb.bind(null, bb), !1), window.addEventListener("blur", Yb.bind(null, bb), !1)
    }
    var fb = 0,
      Mb = 0,
      Xb = null;

    function nb(bb, cb) {
      cb.preventDefault(), mb(cb)
    }

    function mb(bb) {
      let cb = !1;
      for (let sb = 0; sb < bb.touches.length; ++sb)
        if (bb.touches[sb].identifier === Xb) {
          cb = !0;
          break
        } if (!cb) {
        const cb = bb.changedTouches[0];
        fb = cb.clientX, Mb = cb.clientY, Xb = cb.identifier
      }
    }

    function lb(bb, cb) {
      for (var sb = cb.changedTouches, kb = 0; kb < sb.length; ++kb) sb[kb].identifier === Xb && (Xb = null)
    }

    function Qb(bb, cb, sb) {
      try {
        hb(bb, sb), cb && sb.isTrusted && !sb.repeat && bb._keyStates[sb.code] && Jb(bb, sb.code)
      } finally {
        gb(sb.code, cb, bb, sb)
      }
    }

    function eb(bb, cb, sb) {
      try {
        hb(bb, sb)
      } finally {
        ! function(bb, cb, sb) {
          if ("pointerId" in sb)
            if (cb) {
              if (null !== bb._touches.currID) return;
              bb._touches.currID = sb.pointerId
            } else {
              if (bb._touches.currID !== sb.pointerId) return;
              bb._touches.currID = null
            } var kb = "button" in sb ? sb.button + 1 : 1;
          gb("Mouse" + kb, cb, bb, sb)
        }(bb, cb, sb)
      }
    }

    function Cb(bb, cb) {
      var sb = cb.movementX || cb.mozMovementX || 0,
        kb = cb.movementY || cb.mozMovementY || 0;
      if (cb.touches && 0 === (sb | kb)) {
        var Wb = function(bb) {
          mb(bb);
          for (let cb = 0; cb < bb.changedTouches.length; ++cb)
            if (bb.changedTouches[cb].identifier == Xb) {
              const sb = bb.changedTouches[cb],
                kb = [sb.clientX - fb, sb.clientY - Mb];
              return fb = sb.clientX, Mb = sb.clientY, kb
            } return console.error(`Did not find touch id ${Xb}`), [0, 0]
        }(cb);
        sb = Wb[0], kb = Wb[1]
      }
      bb.YG.dx += sb, bb.YG.dy += kb
    }

    function Nb(bb, cb) {
      hb(bb, cb);
      var sb = 1;
      switch (cb.deltaMode) {
        case 0:
          sb = 1;
          break;
        case 1:
          sb = 12;
          break;
        case 2:
          sb = bb.element.clientHeight || window.innerHeight
      }
      bb.YG.ubb += (cb.deltaX || 0) * sb, bb.YG.Ybb += (cb.deltaY || 0) * sb, bb.YG.hbb += (cb.deltaZ || 0) * sb
    }

    function Vb(bb, cb) {
      if (!bb.lG) return cb.preventDefault(), !1
    }
    var Lb = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function ub(bb, cb) {
      return !!bb[Lb[cb]] || ("AltRight" === cb || "ControlLeft" === cb) && "function" === typeof bb.getModifierState && !0 === bb.getModifierState("AltGraph")
    }

    function Yb(bb, cb) {
      for (var sb in bb._modifiersHeldThroughBlur = {}, Lb) bb._keyStates[sb] && (bb._modifiersHeldThroughBlur[sb] = !0);
      cb && cb.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (bb) {
          return !0
        }
      }() && (clearTimeout(bb._blurRelease), bb._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var cb in bb._modifiersHeldThroughBlur = {}, bb._keyStates) bb._keyStates[cb] && !/^Mouse\d/.test(cb) && Jb(bb, cb)
      }), 0))
    }

    function hb(bb, cb) {
      var sb = bb._modifiersHeldThroughBlur;
      if (sb && cb.isTrusted && document.hasFocus())
        for (var kb in sb) delete sb[kb], bb._keyStates[kb] && kb !== cb.code && (ub(cb, kb) || Jb(bb, kb))
    }

    function Jb(bb, cb) {
      const sb = {
          code: cb,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        kb = Wb;
      Wb = sb;
      try {
        gb(cb, !1, bb, sb)
      } finally {
        Wb = kb
      }
    }

    function gb(bb, cb, sb, kb) {
      var Wb = sb._keyBindmap[bb];
      Wb && (Bb(sb._keyStates[bb], cb) && (sb._keyStates[bb] = cb, Wb.forEach((bb => {
        (!sb.filterEvents || sb.filterEvents(kb, bb)) && function(bb, cb, sb, kb) {
          var Wb = cb ? sb.pressCount : sb.releaseCount;
          Wb[bb] = (Wb[bb] || 0) + 1;
          var ab = sb._bindPressCount[bb] || 0;
          (ab += cb ? 1 : -1) < 0 && (ab = 0);
          sb._bindPressCount[bb] = ab;
          var Tb = sb.state[bb];
          if (Bb(Tb, ab)) {
            sb.state[bb] = ab > 0;
            var Ub = cb ? sb.down : sb.up;
            sb.disabled || Ub.emit(bb, kb)
          }
        }(bb, cb, sb, kb)
      }))), "button" in kb || (sb.mG && !kb.defaultPrevented && kb.preventDefault(), sb.stopPropagation && kb.stopPropagation()))
    }

    function Bb(bb, cb) {
      return bb ? !cb : cb
    }
  },
  36201: (bb, cb) => {
    function sb(bb) {
      if (bb && "object" === typeof bb) {
        var cb = bb.which || bb.keyCode || bb.charCode;
        cb && (bb = cb)
      }
      if ("number" === typeof bb) return Tb[bb];
      var sb, ab = String(bb);
      return (sb = kb[ab.toLowerCase()]) ? sb : (sb = Wb[ab.toLowerCase()]) || (1 === ab.length ? ab.charCodeAt(0) : void 0)
    }
    sb.isEventKey = function(bb, cb) {
      if (bb && "object" === typeof bb) {
        var sb = bb.which || bb.keyCode || bb.charCode;
        if (null === sb || void 0 === sb) return !1;
        if ("string" === typeof cb) {
          var ab;
          if (ab = kb[cb.toLowerCase()]) return ab === sb;
          if (ab = Wb[cb.toLowerCase()]) return ab === sb
        } else if ("number" === typeof cb) return cb === sb;
        return !1
      }
    };
    var kb = (cb = bb.exports = sb).code = cb.codes = {
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
      Wb = cb.aliases = {
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
    for (ab = 97; ab < 123; ab++) kb[String.fromCharCode(ab)] = ab - 32;
    for (var ab = 48; ab < 58; ab++) kb[ab - 48] = ab;
    for (ab = 1; ab < 13; ab++) kb["f" + ab] = ab + 111;
    for (ab = 0; ab < 10; ab++) kb["numpad " + ab] = ab + 96;
    var Tb = cb.names = cb.title = {};
    for (ab in kb) Tb[kb[ab]] = ab;
    for (var Ub in Wb) kb[Ub] = Wb[Ub]
  },
  39135: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => kb
    });
    class kb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        this.lB = !1, this.uB = !1, this.hY = 30, this.vJ = 0, this.YB = 100, this.KQ = !1, this.fullscreen = !1, this.RC = function(bb) {}, this.JB = function(bb, cb, sb) {}, this.qB = function() {}, this.pC = function() {}, this.yB = function() {}, this.onFullscreenChanged = function() {}, this.onPointerLockError = function(bb) {}, this._data = new Wb(cb),
          function(bb) {
            if ("loading" === document.readyState) {
              var cb = () => {
                document.removeEventListener("readystatechange", cb), bb()
              };
              document.addEventListener("readystatechange", cb)
            } else setTimeout(bb, 0)
          }((() => {
            ! function(bb) {
              var cb = bb._data,
                sb = cb.nowObject.now();
              cb.lastTickStarted = sb, cb.lastFrameStarted = sb, cb.lastRenderStarted = sb, cb.frameCB = () => function(bb) {
                var cb = bb._data;
                requestAnimationFrame(cb.frameCB), Ub(bb);
                var sb = cb.nowObject.now(),
                  kb = sb - cb.lastFrameStarted;
                if (cb.lastFrameStarted = sb, bb.vJ > 0) {
                  cb.renderAccum += kb;
                  var Wb = 1e3 / bb.vJ;
                  if (cb.renderAccum < Wb) return;
                  cb.renderAccum -= Wb, cb.renderAccum > Wb && (cb.renderAccum = Wb)
                }
                var ab = sb - cb.lastRenderStarted;
                cb.lastRenderStarted = sb;
                var Tb = 1e3 / bb.hY,
                  Ib = (sb - cb.lastTickStarted) / Tb;
                Ib < 0 && (Ib = 0);
                bb.JB(ab, Ib, Tb), setTimeout(Ub, 0, bb, !0)
              }(bb), cb.intervalCB = () => Ub(bb), requestAnimationFrame(cb.frameCB), cb.pollTime > 0 && (cb.intervalID = setInterval(cb.intervalCB, Math.max(cb.pollTime, 1e3 / bb.hY / 2)))
            }(this),
            function(bb, cb) {
              if (!cb) return;
              var sb = !1,
                kb = !1,
                Wb = bb => {
                  if (!!bb !== (sb = cb === document.pointerLockElement))
                    if (bb) {
                      var kb = cb.requestPointerLock();
                      kb && kb.catch && kb.catch((bb => {}))
                    } else document.exitPointerLock()
                },
                ab = bb => {
                  !!bb !== (kb = cb === document.fullscreenElement) && (bb ? cb.requestFullscreen ? cb.requestFullscreen() : cb.webkitRequestFullscreen && cb.webkitRequestFullscreen() : document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen())
                };
              document.addEventListener("pointerlockchange", (kb => {
                sb = cb === document.pointerLockElement, bb.yB(sb)
              })), document.addEventListener("fullscreenchange", (sb => {
                kb = cb === document.fullscreenElement, bb.onFullscreenChanged(kb)
              })), document.addEventListener("pointerlockerror", (kb => {
                sb = cb === document.pointerLockElement, bb.onPointerLockError(kb)
              })), Object.defineProperty(bb, "KQ", {
                get: () => sb,
                set: Wb
              }), Object.defineProperty(bb, "fullscreen", {
                get: () => kb,
                set: ab
              }), cb.addEventListener("click", (cb => {
                bb.lB && Wb(!0), bb.uB && ab(!0)
              }));
              var Tb = () => bb.pC();
              if (window.ResizeObserver) {
                new ResizeObserver(Tb).observe(cb)
              } else window.addEventListener("resize", Tb)
            }(this, bb), this.qB()
          }))
      }
    }

    function Wb() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      this.nowObject = performance || Date, this.pollTime = bb, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
    }
    var ab = 3,
      Tb = 20;

    function Ub(bb) {
      for (var cb = bb._data, sb = 1e3 / bb.hY, kb = cb.nowObject.now() + Tb, Wb = 0; cb.nowObject.now() >= cb.lastTickStarted + sb && cb.nowObject.now() < kb && ++Wb <= ab;) bb.RC(sb), cb.lastTickStarted += sb;
      var Ub = 5 * (sb + 5),
        Ib = cb.nowObject.now();
      if (Ib - cb.lastTickStarted > Ub)
        for (; Ib >= cb.lastTickStarted + sb;) cb.lastTickStarted += sb
    }
  },
  36344: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Tb
    });
    var kb = sb(64);
    const Wb = kb.useLayoutEffect;
    const ab = function(bb) {
      var cb = (0, kb.useRef)(bb);
      return Wb((function() {
        cb.current = bb
      })), cb
    };
    var Tb = function(bb) {
      var cb = ab(bb);
      (0, kb.useEffect)((function() {
        var bb = function(bb) {
          var sb;
          if (null != cb.current && (sb = cb.current(bb)), bb.defaultPrevented && (bb.returnValue = ""), "string" === typeof sb) return bb.returnValue = sb, sb
        };
        return window.addEventListener("beforeunload", bb),
          function() {
            window.removeEventListener("beforeunload", bb)
          }
      }), [])
    }
  },
  36231: bb => {
    var cb, sb = "undefined" !== typeof window ? window.navigator.userAgent : "",
      kb = /OS X/.test(sb),
      Wb = /Opera/.test(sb),
      ab = !/like Gecko/.test(sb) && !Wb,
      Tb = bb.exports = {
        0: kb ? "<menu>" : "<UNK>",
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
        93: kb ? "<meta>" : "<menu>",
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
        173: kb && ab ? "-" : "<volume-mute>",
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
        231: Wb ? "`" : "<unicode>",
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
    for (cb = 58; cb < 65; ++cb) Tb[cb] = String.fromCharCode(cb);
    for (cb = 48; cb < 58; ++cb) Tb[cb] = cb - 48 + "";
    for (cb = 65; cb < 91; ++cb) Tb[cb] = String.fromCharCode(cb);
    for (cb = 96; cb < 106; ++cb) Tb[cb] = "<num-" + (cb - 96) + ">";
    for (cb = 112; cb < 136; ++cb) Tb[cb] = "F" + (cb - 111)
  },
  38599: (bb, cb, sb) => {
    function kb(bb, cb, sb, kb, Wb) {
      var ab = {};
      return Object.keys(kb).forEach((function(bb) {
        ab[bb] = kb[bb]
      })), ab.enumerable = !!ab.enumerable, ab.configurable = !!ab.configurable, ("value" in ab || ab.initializer) && (ab.writable = !0), ab = sb.slice().reverse().reduce((function(sb, kb) {
        return kb(bb, cb, sb) || sb
      }), ab), Wb && void 0 !== ab.initializer && (ab.value = ab.initializer ? ab.initializer.call(Wb) : void 0, ab.initializer = void 0), void 0 === ab.initializer && (Object.defineProperty(bb, cb, ab), ab = null), ab
    }
    sb.d(cb, {
      b: () => kb
    })
  },
  38594: (bb, cb, sb) => {
    function kb(bb, cb, sb, kb) {
      sb && Object.defineProperty(bb, cb, {
        enumerable: sb.enumerable,
        configurable: sb.configurable,
        writable: sb.writable,
        value: sb.initializer ? sb.initializer.call(kb) : void 0
      })
    }
    sb.d(cb, {
      b: () => kb
    })
  },
  38279: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => ab
    });
    var kb = sb(38284);
    const Wb = (bb, cb, sb) => bb ? bb.getClassName && "Mesh" === bb.getClassName() ? null : !bb.getClassName || "SubMesh" !== bb.getClassName() && "PhysicsBody" !== bb.getClassName() ? bb.clone ? bb.clone() : Array.isArray(bb) ? bb.slice() : sb && "object" === typeof bb ? {
      ...bb
    } : null : bb.clone(cb) : null;
    class ab {
      static DeepCopy(bb, cb, sb, ab) {
        let Tb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Ub = function(bb) {
          const cb = [];
          do {
            const sb = Object.getOwnPropertyNames(bb);
            for (const bb of sb) - 1 === cb.indexOf(bb) && cb.push(bb)
          } while (bb = Object.getPrototypeOf(bb));
          return cb
        }(bb);
        for (const Hb of Ub) {
          if ("_" === Hb[0] && (!ab || -1 === ab.indexOf(Hb))) continue;
          if (Hb.endsWith("Observable")) continue;
          if (sb && -1 !== sb.indexOf(Hb)) continue;
          const Ub = bb[Hb],
            fb = typeof Ub;
          if ("function" !== fb) try {
            if ("object" === fb)
              if (Ub instanceof Uint8Array) cb[Hb] = Uint8Array.from(Ub);
              else if (Ub instanceof Array) {
              if (cb[Hb] = [], Ub.length > 0)
                if ("object" == typeof Ub[0])
                  for (let bb = 0; bb < Ub.length; bb++) {
                    const sb = Wb(Ub[bb], cb, Tb); - 1 === cb[Hb].indexOf(sb) && cb[Hb].push(sb)
                  } else cb[Hb] = Ub.slice(0)
            } else cb[Hb] = Wb(Ub, cb, Tb);
            else cb[Hb] = Ub
          } catch (Ib) {
            kb.c.Warn(Ib.message)
          }
        }
      }
    }
  },
  38313: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Wb,
      f: () => ab,
      h: () => Tb,
      i: () => Ub
    });
    var kb = sb(36830);
    class Wb {
      constructor(bb, cb, sb) {
        this.gradient = bb, this.color1 = cb, this.color2 = sb
      }
      getColorToRef(bb) {
        this.color2 ? kb.g.LerpToRef(this.color1, this.color2, Math.random(), bb) : bb.ssb(this.color1)
      }
    }
    class ab {
      constructor(bb, cb) {
        this.gradient = bb, this.color = cb
      }
    }
    class Tb {
      constructor(bb, cb, sb) {
        this.gradient = bb, this.factor1 = cb, this.factor2 = sb
      }
      getFactor() {
        return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
      }
    }
    class Ub {
      static GetCurrentGradient(bb, cb, sb) {
        if (cb[0].gradient > bb) return void sb(cb[0], cb[0], 1);
        for (let Wb = 0; Wb < cb.length - 1; Wb++) {
          const kb = cb[Wb],
            ab = cb[Wb + 1];
          if (bb >= kb.gradient && bb <= ab.gradient) {
            return void sb(kb, ab, (bb - kb.gradient) / (ab.gradient - kb.gradient))
          }
        }
        const kb = cb.length - 1;
        sb(cb[kb], cb[kb], 1)
      }
    }
  },
  38284: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => kb
    });
    class kb {
      static _CheckLimit(bb, cb) {
        let sb = kb._LogLimitOutputs[bb];
        return sb ? sb.current++ : (sb = {
          limit: cb,
          current: 1
        }, kb._LogLimitOutputs[bb] = sb), sb.current <= sb.limit
      }
      static _GenerateLimitMessage(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const sb = kb._LogLimitOutputs[bb];
        if (!sb || !kb.MessageLimitReached) return;
        const Wb = this._Levels[cb];
        sb.current === sb.limit && kb[Wb.name](kb.MessageLimitReached.replace(/%LIMIT%/g, "" + sb.limit).replace(/%TYPE%/g, Wb.name ?? ""))
      }
      static _AddLogEntry(bb) {
        kb._LogCache = bb + kb._LogCache, kb.OnNewCacheEntry && kb.OnNewCacheEntry(bb)
      }
      static _FormatMessage(bb) {
        const cb = bb => bb < 10 ? "0" + bb : "" + bb,
          sb = new Date;
        return "[" + cb(sb.getHours()) + ":" + cb(sb.getMinutes()) + ":" + cb(sb.getSeconds()) + "]: " + bb
      }
      static _LogDisabled(bb, cb) {}
      static _LogEnabled() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          cb = arguments.length > 1 ? arguments[1] : void 0,
          sb = arguments.length > 2 ? arguments[2] : void 0;
        const Wb = Array.isArray(cb) ? cb[0] : cb;
        if (void 0 !== sb && !kb._CheckLimit(Wb, sb)) return;
        const ab = kb._FormatMessage(Wb),
          Tb = this._Levels[bb],
          Ub = Array.isArray(cb) ? cb.slice(1) : [];
        Tb.logFunc && Tb.logFunc("BJS - " + ab, ...Ub);
        const Ib = `<div style='color:${Tb.color}'>${ab}</div><br>`;
        kb._AddLogEntry(Ib), kb._GenerateLimitMessage(Wb, bb)
      }
      static get LogCache() {
        return kb._LogCache
      }
      static ClearLogCache() {
        kb._LogCache = "", kb._LogLimitOutputs = {}, kb.errorsCount = 0
      }
      static set LogLevels(bb) {
        kb.Log = kb._LogDisabled, kb.Warn = kb._LogDisabled, kb.Error = kb._LogDisabled;
        const cb = [kb.MessageLogLevel, kb.WarningLogLevel, kb.ErrorLogLevel];
        for (const sb of cb)
          if ((bb & sb) === sb) {
            const bb = this._Levels[sb];
            kb[bb.name] = kb._LogEnabled.bind(kb, sb)
          }
      }
    }
    kb.NoneLogLevel = 0, kb.MessageLogLevel = 1, kb.WarningLogLevel = 2, kb.ErrorLogLevel = 4, kb.AllLogLevel = 7, kb.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", kb._LogCache = "", kb._LogLimitOutputs = {}, kb._Levels = [{}, {
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
    }], kb.errorsCount = 0, kb.Log = kb._LogEnabled.bind(kb, kb.MessageLogLevel), kb.Warn = kb._LogEnabled.bind(kb, kb.WarningLogLevel), kb.Error = kb._LogEnabled.bind(kb, kb.ErrorLogLevel)
  },
  38315: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Tb
    });
    var kb = sb(36656),
      Wb = sb(36688),
      ab = sb(38279);
    class Tb {
      constructor() {
        this.direction1 = new kb.p(0, 1, 0), this.direction2 = new kb.p(0, 1, 0), this.minEmitBox = new kb.p(-.5, -.5, -.5), this.maxEmitBox = new kb.p(.5, .5, .5)
      }
      startDirectionFunction(bb, cb, sb, ab) {
        const Tb = (0, Wb.RandomRange)(this.direction1.x, this.direction2.x),
          Ub = (0, Wb.RandomRange)(this.direction1.y, this.direction2.y),
          Ib = (0, Wb.RandomRange)(this.direction1.z, this.direction2.z);
        if (ab) return cb.x = Tb, cb.y = Ub, void(cb.z = Ib);
        kb.p.TransformNormalFromFloatsToRef(Tb, Ub, Ib, bb, cb)
      }
      startPositionFunction(bb, cb, sb, ab) {
        const Tb = (0, Wb.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
          Ub = (0, Wb.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
          Ib = (0, Wb.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
        if (ab) return cb.x = Tb, cb.y = Ub, void(cb.z = Ib);
        kb.p.TransformCoordinatesFromFloatsToRef(Tb, Ub, Ib, bb, cb)
      }
      clone() {
        const bb = new Tb;
        return ab.c.DeepCopy(this, bb), bb
      }
      applyToShader(bb) {
        bb.setVector3("direction1", this.direction1), bb.setVector3("direction2", this.direction2), bb.setVector3("minEmitBox", this.minEmitBox), bb.setVector3("maxEmitBox", this.maxEmitBox)
      }
      buildUniformLayout(bb) {
        bb.addUniform("direction1", 3), bb.addUniform("direction2", 3), bb.addUniform("minEmitBox", 3), bb.addUniform("maxEmitBox", 3)
      }
      getEffectDefines() {
        return "#define BOXEMITTER"
      }
      getClassName() {
        return "BoxParticleEmitter"
      }
      serialize() {
        const bb = {};
        return bb.type = this.getClassName(), bb.direction1 = this.direction1.Osb(), bb.direction2 = this.direction2.Osb(), bb.minEmitBox = this.minEmitBox.Osb(), bb.maxEmitBox = this.maxEmitBox.Osb(), bb
      }
      parse(bb) {
        kb.p.FromArrayToRef(bb.direction1, 0, this.direction1), kb.p.FromArrayToRef(bb.direction2, 0, this.direction2), kb.p.FromArrayToRef(bb.minEmitBox, 0, this.minEmitBox), kb.p.FromArrayToRef(bb.maxEmitBox, 0, this.maxEmitBox)
      }
    }
  },
  38274: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Ub,
      g: () => Tb
    });
    var kb = sb(36656),
      Wb = sb(36688),
      ab = sb(38279);
    class Tb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Wb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.radius = bb, this.height = cb, this.radiusRange = sb, this.directionRandomizer = Wb, this._tempVector = kb.p.Zero()
      }
      startDirectionFunction(bb, cb, sb, ab, Tb) {
        sb.position.subtractToRef(bb.getTranslation(), this._tempVector), this._tempVector.normalize(), kb.p.TransformNormalToRef(this._tempVector, Tb, this._tempVector);
        const Ub = (0, Wb.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
        let Ib = Math.atan2(this._tempVector.x, this._tempVector.z);
        Ib += (0, Wb.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = Ub, this._tempVector.x = Math.sin(Ib), this._tempVector.z = Math.cos(Ib), this._tempVector.normalize(), ab ? cb.ssb(this._tempVector) : kb.p.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, bb, cb)
      }
      startPositionFunction(bb, cb, sb, ab) {
        const Tb = (0, Wb.RandomRange)(-this.height / 2, this.height / 2),
          Ub = (0, Wb.RandomRange)(0, 2 * Math.PI),
          Ib = (0, Wb.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
          Hb = Math.sqrt(Ib) * this.radius,
          fb = Hb * Math.cos(Ub),
          Mb = Hb * Math.sin(Ub);
        ab ? cb.I5(fb, Tb, Mb) : kb.p.TransformCoordinatesFromFloatsToRef(fb, Tb, Mb, bb, cb)
      }
      clone() {
        const bb = new Tb(this.radius, this.directionRandomizer);
        return ab.c.DeepCopy(this, bb), bb
      }
      applyToShader(bb) {
        bb.setFloat("radius", this.radius), bb.setFloat("height", this.height), bb.setFloat("radiusRange", this.radiusRange), bb.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(bb) {
        bb.addUniform("radius", 1), bb.addUniform("height", 1), bb.addUniform("radiusRange", 1), bb.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderParticleEmitter"
      }
      serialize() {
        const bb = {};
        return bb.type = this.getClassName(), bb.radius = this.radius, bb.height = this.height, bb.radiusRange = this.radiusRange, bb.directionRandomizer = this.directionRandomizer, bb
      }
      parse(bb) {
        this.radius = bb.radius, this.height = bb.height, this.radiusRange = bb.radiusRange, this.directionRandomizer = bb.directionRandomizer
      }
    }
    class Ub extends Tb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Wb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new kb.p(0, 1, 0),
          ab = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new kb.p(0, 1, 0);
        super(bb, cb, sb), this.direction1 = Wb, this.direction2 = ab
      }
      startDirectionFunction(bb, cb, sb, ab) {
        const Tb = (0, Wb.RandomRange)(this.direction1.x, this.direction2.x),
          Ub = (0, Wb.RandomRange)(this.direction1.y, this.direction2.y),
          Ib = (0, Wb.RandomRange)(this.direction1.z, this.direction2.z);
        ab ? cb.I5(Tb, Ub, Ib) : kb.p.TransformNormalFromFloatsToRef(Tb, Ub, Ib, bb, cb)
      }
      clone() {
        const bb = new Ub(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
        return ab.c.DeepCopy(this, bb), bb
      }
      applyToShader(bb) {
        bb.setFloat("radius", this.radius), bb.setFloat("height", this.height), bb.setFloat("radiusRange", this.radiusRange), bb.setVector3("direction1", this.direction1), bb.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(bb) {
        bb.addUniform("radius", 1), bb.addUniform("height", 1), bb.addUniform("radiusRange", 1), bb.addUniform("direction1", 3), bb.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER\n#define DIRECTEDCYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderDirectedParticleEmitter"
      }
      serialize() {
        const bb = super.serialize();
        return bb.direction1 = this.direction1.Osb(), bb.direction2 = this.direction2.Osb(), bb
      }
      parse(bb) {
        super.parse(bb), kb.p.FromArrayToRef(bb.direction1, 0, this.direction1), kb.p.FromArrayToRef(bb.direction2, 0, this.direction2)
      }
    }
  },
  38388: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Mb
    });
    const kb = .5 * (Math.sqrt(3) - 1),
      Wb = (3 - Math.sqrt(3)) / 6,
      ab = 1 / 3,
      Tb = 1 / 6,
      Ub = (Math.sqrt(5) - 1) / 4,
      Ib = (5 - Math.sqrt(5)) / 20,
      Hb = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
      fb = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]);
    const Mb = class {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
        const cb = "function" == typeof bb ? bb : function(bb) {
          let cb = 0,
            sb = 0,
            kb = 0,
            Wb = 1;
          const ab = function() {
            let bb = 4022871197;
            return function(cb) {
              cb = cb.toString();
              for (let sb = 0; sb < cb.length; sb++) {
                bb += cb.charCodeAt(sb);
                let kb = .02519603282416938 * bb;
                bb = kb >>> 0, kb -= bb, kb *= bb, bb = kb >>> 0, kb -= bb, bb += 4294967296 * kb
              }
              return 2.3283064365386963e-10 * (bb >>> 0)
            }
          }();
          cb = ab(" "), sb = ab(" "), kb = ab(" "), cb -= ab(bb), cb < 0 && (cb += 1);
          sb -= ab(bb), sb < 0 && (sb += 1);
          kb -= ab(bb), kb < 0 && (kb += 1);
          return function() {
            const bb = 2091639 * cb + 2.3283064365386963e-10 * Wb;
            return cb = sb, sb = kb, kb = bb - (Wb = 0 | bb)
          }
        }(bb);
        this.p = function(bb) {
          const cb = new Uint8Array(256);
          for (let sb = 0; sb < 256; sb++) cb[sb] = sb;
          for (let sb = 0; sb < 255; sb++) {
            const kb = sb + ~~(bb() * (256 - sb)),
              Wb = cb[sb];
            cb[sb] = cb[kb], cb[kb] = Wb
          }
          return cb
        }(cb), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
        for (let sb = 0; sb < 512; sb++) this.perm[sb] = this.p[255 & sb], this.permMod12[sb] = this.perm[sb] % 12
      }
      noise2D(bb, cb) {
        const sb = this.permMod12,
          ab = this.perm;
        let Tb = 0,
          Ub = 0,
          Ib = 0;
        const fb = (bb + cb) * kb,
          Mb = Math.floor(bb + fb),
          Xb = Math.floor(cb + fb),
          nb = (Mb + Xb) * Wb,
          mb = bb - (Mb - nb),
          lb = cb - (Xb - nb);
        let Qb, eb;
        mb > lb ? (Qb = 1, eb = 0) : (Qb = 0, eb = 1);
        const Cb = mb - Qb + Wb,
          Nb = lb - eb + Wb,
          Vb = mb - 1 + 2 * Wb,
          Lb = lb - 1 + 2 * Wb,
          ub = 255 & Mb,
          Yb = 255 & Xb;
        let hb = .5 - mb * mb - lb * lb;
        if (hb >= 0) {
          const bb = 3 * sb[ub + ab[Yb]];
          hb *= hb, Tb = hb * hb * (Hb[bb] * mb + Hb[bb + 1] * lb)
        }
        let Jb = .5 - Cb * Cb - Nb * Nb;
        if (Jb >= 0) {
          const bb = 3 * sb[ub + Qb + ab[Yb + eb]];
          Jb *= Jb, Ub = Jb * Jb * (Hb[bb] * Cb + Hb[bb + 1] * Nb)
        }
        let gb = .5 - Vb * Vb - Lb * Lb;
        if (gb >= 0) {
          const bb = 3 * sb[ub + 1 + ab[Yb + 1]];
          gb *= gb, Ib = gb * gb * (Hb[bb] * Vb + Hb[bb + 1] * Lb)
        }
        return 70 * (Tb + Ub + Ib)
      }
      noise3D(bb, cb, sb) {
        const kb = this.permMod12,
          Wb = this.perm;
        let Ub, Ib, fb, Mb;
        const Xb = (bb + cb + sb) * ab,
          nb = Math.floor(bb + Xb),
          mb = Math.floor(cb + Xb),
          lb = Math.floor(sb + Xb),
          Qb = (nb + mb + lb) * Tb,
          eb = bb - (nb - Qb),
          Cb = cb - (mb - Qb),
          Nb = sb - (lb - Qb);
        let Vb, Lb, ub, Yb, hb, Jb;
        eb >= Cb ? Cb >= Nb ? (Vb = 1, Lb = 0, ub = 0, Yb = 1, hb = 1, Jb = 0) : eb >= Nb ? (Vb = 1, Lb = 0, ub = 0, Yb = 1, hb = 0, Jb = 1) : (Vb = 0, Lb = 0, ub = 1, Yb = 1, hb = 0, Jb = 1) : Cb < Nb ? (Vb = 0, Lb = 0, ub = 1, Yb = 0, hb = 1, Jb = 1) : eb < Nb ? (Vb = 0, Lb = 1, ub = 0, Yb = 0, hb = 1, Jb = 1) : (Vb = 0, Lb = 1, ub = 0, Yb = 1, hb = 1, Jb = 0);
        const gb = eb - Vb + Tb,
          Bb = Cb - Lb + Tb,
          tb = Nb - ub + Tb,
          yb = eb - Yb + 2 * Tb,
          Pb = Cb - hb + 2 * Tb,
          Db = Nb - Jb + 2 * Tb,
          Eb = eb - 1 + .5,
          ib = Cb - 1 + .5,
          Ob = Nb - 1 + .5,
          Gb = 255 & nb,
          Kb = 255 & mb,
          Zb = 255 & lb;
        let zb = .6 - eb * eb - Cb * Cb - Nb * Nb;
        if (zb < 0) Ub = 0;
        else {
          const bb = 3 * kb[Gb + Wb[Kb + Wb[Zb]]];
          zb *= zb, Ub = zb * zb * (Hb[bb] * eb + Hb[bb + 1] * Cb + Hb[bb + 2] * Nb)
        }
        let qb = .6 - gb * gb - Bb * Bb - tb * tb;
        if (qb < 0) Ib = 0;
        else {
          const bb = 3 * kb[Gb + Vb + Wb[Kb + Lb + Wb[Zb + ub]]];
          qb *= qb, Ib = qb * qb * (Hb[bb] * gb + Hb[bb + 1] * Bb + Hb[bb + 2] * tb)
        }
        let db = .6 - yb * yb - Pb * Pb - Db * Db;
        if (db < 0) fb = 0;
        else {
          const bb = 3 * kb[Gb + Yb + Wb[Kb + hb + Wb[Zb + Jb]]];
          db *= db, fb = db * db * (Hb[bb] * yb + Hb[bb + 1] * Pb + Hb[bb + 2] * Db)
        }
        let Ab = .6 - Eb * Eb - ib * ib - Ob * Ob;
        if (Ab < 0) Mb = 0;
        else {
          const bb = 3 * kb[Gb + 1 + Wb[Kb + 1 + Wb[Zb + 1]]];
          Ab *= Ab, Mb = Ab * Ab * (Hb[bb] * Eb + Hb[bb + 1] * ib + Hb[bb + 2] * Ob)
        }
        return 32 * (Ub + Ib + fb + Mb)
      }
      noise4D(bb, cb, sb, kb) {
        const Wb = this.perm;
        let ab, Tb, Hb, Mb, Xb;
        const nb = (bb + cb + sb + kb) * Ub,
          mb = Math.floor(bb + nb),
          lb = Math.floor(cb + nb),
          Qb = Math.floor(sb + nb),
          eb = Math.floor(kb + nb),
          Cb = (mb + lb + Qb + eb) * Ib,
          Nb = bb - (mb - Cb),
          Vb = cb - (lb - Cb),
          Lb = sb - (Qb - Cb),
          ub = kb - (eb - Cb);
        let Yb = 0,
          hb = 0,
          Jb = 0,
          gb = 0;
        Nb > Vb ? Yb++ : hb++, Nb > Lb ? Yb++ : Jb++, Nb > ub ? Yb++ : gb++, Vb > Lb ? hb++ : Jb++, Vb > ub ? hb++ : gb++, Lb > ub ? Jb++ : gb++;
        const Bb = Yb >= 3 ? 1 : 0,
          tb = hb >= 3 ? 1 : 0,
          yb = Jb >= 3 ? 1 : 0,
          Pb = gb >= 3 ? 1 : 0,
          Db = Yb >= 2 ? 1 : 0,
          Eb = hb >= 2 ? 1 : 0,
          ib = Jb >= 2 ? 1 : 0,
          Ob = gb >= 2 ? 1 : 0,
          Gb = Yb >= 1 ? 1 : 0,
          Kb = hb >= 1 ? 1 : 0,
          Zb = Jb >= 1 ? 1 : 0,
          zb = gb >= 1 ? 1 : 0,
          qb = Nb - Bb + Ib,
          db = Vb - tb + Ib,
          Ab = Lb - yb + Ib,
          wb = ub - Pb + Ib,
          rb = Nb - Db + 2 * Ib,
          ob = Vb - Eb + 2 * Ib,
          Sb = Lb - ib + 2 * Ib,
          Rb = ub - Ob + 2 * Ib,
          vb = Nb - Gb + 3 * Ib,
          Fb = Vb - Kb + 3 * Ib,
          xb = Lb - Zb + 3 * Ib,
          jb = ub - zb + 3 * Ib,
          pb = Nb - 1 + 4 * Ib,
          bc = Vb - 1 + 4 * Ib,
          cc = Lb - 1 + 4 * Ib,
          sc = ub - 1 + 4 * Ib,
          kc = 255 & mb,
          Wc = 255 & lb,
          ac = 255 & Qb,
          Tc = 255 & eb;
        let Uc = .6 - Nb * Nb - Vb * Vb - Lb * Lb - ub * ub;
        if (Uc < 0) ab = 0;
        else {
          const bb = Wb[kc + Wb[Wc + Wb[ac + Wb[Tc]]]] % 32 * 4;
          Uc *= Uc, ab = Uc * Uc * (fb[bb] * Nb + fb[bb + 1] * Vb + fb[bb + 2] * Lb + fb[bb + 3] * ub)
        }
        let Ic = .6 - qb * qb - db * db - Ab * Ab - wb * wb;
        if (Ic < 0) Tb = 0;
        else {
          const bb = Wb[kc + Bb + Wb[Wc + tb + Wb[ac + yb + Wb[Tc + Pb]]]] % 32 * 4;
          Ic *= Ic, Tb = Ic * Ic * (fb[bb] * qb + fb[bb + 1] * db + fb[bb + 2] * Ab + fb[bb + 3] * wb)
        }
        let Hc = .6 - rb * rb - ob * ob - Sb * Sb - Rb * Rb;
        if (Hc < 0) Hb = 0;
        else {
          const bb = Wb[kc + Db + Wb[Wc + Eb + Wb[ac + ib + Wb[Tc + Ob]]]] % 32 * 4;
          Hc *= Hc, Hb = Hc * Hc * (fb[bb] * rb + fb[bb + 1] * ob + fb[bb + 2] * Sb + fb[bb + 3] * Rb)
        }
        let fc = .6 - vb * vb - Fb * Fb - xb * xb - jb * jb;
        if (fc < 0) Mb = 0;
        else {
          const bb = Wb[kc + Gb + Wb[Wc + Kb + Wb[ac + Zb + Wb[Tc + zb]]]] % 32 * 4;
          fc *= fc, Mb = fc * fc * (fb[bb] * vb + fb[bb + 1] * Fb + fb[bb + 2] * xb + fb[bb + 3] * jb)
        }
        let Mc = .6 - pb * pb - bc * bc - cc * cc - sc * sc;
        if (Mc < 0) Xb = 0;
        else {
          const bb = Wb[kc + 1 + Wb[Wc + 1 + Wb[ac + 1 + Wb[Tc + 1]]]] % 32 * 4;
          Mc *= Mc, Xb = Mc * Mc * (fb[bb] * pb + fb[bb + 1] * bc + fb[bb + 2] * cc + fb[bb + 3] * sc)
        }
        return 27 * (ab + Tb + Hb + Mb + Xb)
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);