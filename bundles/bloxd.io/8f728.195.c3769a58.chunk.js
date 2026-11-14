/*! For license information please see 8f728.195.c3769a58.chunk.js.LICENSE.txt */
export const id = 195;
export const ids = [195];
export const modules = {
  37786: (cB, Bc, nc) => {
    cB.exports = Ic;
    var Vc = nc(309);

    function Ic(cB, Bc) {
      if (!(this instanceof Ic)) return new Ic(cB, Bc);
      var nc = Vc.create();
      Vc.add(nc, cB, Bc), this.base = Vc.min(Vc.create(), cB, nc), this.vec = Vc.clone(Bc), this.max = Vc.max(Vc.create(), cB, nc), this.mag = Vc.length(this.vec)
    }
    var rB = Ic.prototype;
    rB.width = function() {
      return this.vec[0]
    }, rB.height = function() {
      return this.vec[1]
    }, rB.depth = function() {
      return this.vec[2]
    }, rB.x0 = function() {
      return this.base[0]
    }, rB.y0 = function() {
      return this.base[1]
    }, rB.z0 = function() {
      return this.base[2]
    }, rB.x1 = function() {
      return this.max[0]
    }, rB.y1 = function() {
      return this.max[1]
    }, rB.z1 = function() {
      return this.max[2]
    }, rB.translate = function(cB) {
      return Vc.add(this.max, this.max, cB), Vc.add(this.base, this.base, cB), this
    }, rB.setPosition = function(cB) {
      return Vc.add(this.max, cB, this.vec), Vc.copy(this.base, cB), this
    }, rB.expand = function(cB) {
      var Bc = Vc.create(),
        nc = Vc.create();
      return Vc.max(Bc, cB.max, this.max), Vc.min(nc, cB.base, this.base), Vc.subtract(Bc, Bc, nc), new Ic(nc, Bc)
    }, rB.intersects = function(cB) {
      return !(cB.base[0] > this.max[0]) && (!(cB.base[1] > this.max[1]) && (!(cB.base[2] > this.max[2]) && (!(cB.max[0] < this.base[0]) && (!(cB.max[1] < this.base[1]) && !(cB.max[2] < this.base[2])))))
    }, rB.touches = function(cB) {
      var Bc = this.union(cB);
      return null !== Bc && (0 == Bc.width() || 0 == Bc.height() || 0 == Bc.depth())
    }, rB.union = function(cB) {
      if (!this.intersects(cB)) return null;
      var Bc = Math.max(cB.base[0], this.base[0]),
        nc = Math.max(cB.base[1], this.base[1]),
        Vc = Math.max(cB.base[2], this.base[2]);
      return new Ic([Bc, nc, Vc], [Math.min(cB.max[0], this.max[0]) - Bc, Math.min(cB.max[1], this.max[1]) - nc, Math.min(cB.max[2], this.max[2]) - Vc])
    }
  },
  35333: cB => {
    cB.exports = function cB(Bc, nc) {
      if (Bc === nc) return !0;
      if (Bc && nc && "object" == typeof Bc && "object" == typeof nc) {
        if (Bc.constructor !== nc.constructor) return !1;
        var Vc, Ic, rB;
        if (Array.isArray(Bc)) {
          if ((Vc = Bc.length) != nc.length) return !1;
          for (Ic = Vc; 0 !== Ic--;)
            if (!cB(Bc[Ic], nc[Ic])) return !1;
          return !0
        }
        if (Bc.constructor === RegExp) return Bc.source === nc.source && Bc.flags === nc.flags;
        if (Bc.valueOf !== Object.prototype.valueOf) return Bc.valueOf() === nc.valueOf();
        if (Bc.toString !== Object.prototype.toString) return Bc.toString() === nc.toString();
        if ((Vc = (rB = Object.keys(Bc)).length) !== Object.keys(nc).length) return !1;
        for (Ic = Vc; 0 !== Ic--;)
          if (!Object.prototype.hasOwnProperty.call(nc, rB[Ic])) return !1;
        for (Ic = Vc; 0 !== Ic--;) {
          var uc = rB[Ic];
          if (!cB(Bc[uc], nc[uc])) return !1
        }
        return !0
      }
      return Bc !== Bc && nc !== nc
    }
  },
  37780: cB => {
    cB.exports = function(cB, Bc, nc, Vc, Ic, rB) {
      var uc = +Bc[0],
        sc = +Bc[1],
        Mc = +Bc[2],
        Pc = +nc[0],
        qB = +nc[1],
        Oc = +nc[2],
        Tc = Math.sqrt(Pc * Pc + qB * qB + Oc * Oc);
      if (0 === Tc) throw new Error("Can't raycast along a zero vector");
      return function(cB, Bc, nc, Vc, Ic, rB, uc, sc, Mc, Pc) {
        for (var qB = 0, Oc = Math.floor, Tc = 0 | Oc(Bc), fc = 0 | Oc(nc), mB = 0 | Oc(Vc), ec = Ic > 0 ? 1 : -1, tB = rB > 0 ? 1 : -1, Sc = uc > 0 ? 1 : -1, yB = Math.abs(1 / Ic), zB = Math.abs(1 / rB), pc = Math.abs(1 / uc), hc = yB < 1 / 0 ? yB * (ec > 0 ? Tc + 1 - Bc : Bc - Tc) : 1 / 0, aB = zB < 1 / 0 ? zB * (tB > 0 ? fc + 1 - nc : nc - fc) : 1 / 0, lc = pc < 1 / 0 ? pc * (Sc > 0 ? mB + 1 - Vc : Vc - mB) : 1 / 0, Yc = -1; qB <= sc;) {
          var Lc = cB(Tc, fc, mB);
          if (Lc) return Mc && (Mc[0] = Bc + qB * Ic, Mc[1] = nc + qB * rB, Mc[2] = Vc + qB * uc), Pc && (Pc[0] = Pc[1] = Pc[2] = 0, 0 === Yc && (Pc[0] = -ec), 1 === Yc && (Pc[1] = -tB), 2 === Yc && (Pc[2] = -Sc)), Lc;
          hc < aB ? hc < lc ? (Tc += ec, qB = hc, hc += yB, Yc = 0) : (mB += Sc, qB = lc, lc += pc, Yc = 2) : aB < lc ? (fc += tB, qB = aB, aB += zB, Yc = 1) : (mB += Sc, qB = lc, lc += pc, Yc = 2)
        }
        return Mc && (Mc[0] = Bc + qB * Ic, Mc[1] = nc + qB * rB, Mc[2] = Vc + qB * uc), Pc && (Pc[0] = Pc[1] = Pc[2] = 0), 0
      }(cB, uc, sc, Mc, Pc /= Tc, qB /= Tc, Oc /= Tc, Vc = "undefined" === typeof Vc ? 64 : +Vc, Ic, rB)
    }
  },
  37573: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => sc,
      g: () => rB
    });
    var Vc = nc(3271);
    let Ic = null;

    function rB(cB) {
      return null !== Ic && cB === Ic
    }

    function uc() {
      this.tIc = !1, this.stopPropagation = !1, this.SVc = !1, this.disabled = !1
    }
    class sc {
      constructor(cB, Bc) {
        this.version = "0.7.0";
        var nc = Object.assign({}, new uc, Bc || {});
        this.element = cB || document, this.tIc = !!nc.tIc, this.stopPropagation = !!nc.stopPropagation, this.SVc = !!nc.SVc, this.disabled = !!nc.disabled, this.filterEvents = (cB, Bc) => !0, this.down = new Vc.EventEmitter, this.up = new Vc.EventEmitter, this.state = {}, this.FVc = {
          dx: 0,
          dy: 0,
          Nsc: 0,
          osc: 0,
          Wsc: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? Pc(this) : document.addEventListener("DOMContentLoaded", (cB => {
          Pc(this)
        }), {
          once: !0
        })
      }
      bind(cB) {
        for (var Bc = arguments.length, nc = new Array(Bc > 1 ? Bc - 1 : 0), Vc = 1; Vc < Bc; Vc++) nc[Vc - 1] = arguments[Vc];
        nc.forEach((Bc => {
          var nc = this._keyBindmap[Bc] || [];
          nc.includes(cB) || (nc.push(cB), this._keyBindmap[Bc] = nc)
        })), this.state[cB] = !!this.state[cB], this.pressCount[cB] = this.pressCount[cB] || 0, this.releaseCount[cB] = this.releaseCount[cB] || 0
      }
      unbind(cB) {
        for (var Bc in this._keyBindmap) {
          var nc = this._keyBindmap[Bc],
            Vc = nc.indexOf(cB);
          Vc > -1 && nc.splice(Vc, 1)
        }
      }
      getBindings() {
        var cB = {};
        for (var Bc in this._keyBindmap) {
          this._keyBindmap[Bc].forEach((nc => {
            cB[nc] = cB[nc] || [], cB[nc].push(Bc)
          }))
        }
        return cB
      }
      cn() {
        Mc(this.FVc), Mc(this.pressCount), Mc(this.releaseCount)
      }
    }

    function Mc(cB) {
      for (var Bc in cB) cB[Bc] = 0
    }

    function Pc(cB) {
      window.addEventListener("keydown", tB.bind(null, cB, !0), !1), window.addEventListener("keyup", tB.bind(null, cB, !1), !1);
      var Bc = {
        passive: !0
      };
      cB.element.addEventListener("touchstart", fc.bind(void 0, cB), {
        passive: !1
      }), cB.element.addEventListener("touchend", ec.bind(void 0, cB), Bc), cB.element.addEventListener("mousedown", Sc.bind(null, cB, !0), Bc), window.document.addEventListener("mouseup", Sc.bind(null, cB, !1), Bc), cB.element.addEventListener("touchmove", yB.bind(null, cB), Bc), cB.element.addEventListener("mousemove", yB.bind(null, cB), Bc), window.PointerEvent, cB.element.addEventListener("wheel", zB.bind(null, cB), Bc), cB.element.addEventListener("contextmenu", pc.bind(null, cB), !1), window.addEventListener("blur", lc.bind(null, cB), !1)
    }
    var qB = 0,
      Oc = 0,
      Tc = null;

    function fc(cB, Bc) {
      Bc.preventDefault(), mB(Bc)
    }

    function mB(cB) {
      let Bc = !1;
      for (let nc = 0; nc < cB.touches.length; ++nc)
        if (cB.touches[nc].identifier === Tc) {
          Bc = !0;
          break
        } if (!Bc) {
        const Bc = cB.changedTouches[0];
        qB = Bc.clientX, Oc = Bc.clientY, Tc = Bc.identifier
      }
    }

    function ec(cB, Bc) {
      for (var nc = Bc.changedTouches, Vc = 0; Vc < nc.length; ++Vc) nc[Vc].identifier === Tc && (Tc = null)
    }

    function tB(cB, Bc, nc) {
      try {
        Yc(cB, nc), Bc && nc.isTrusted && !nc.repeat && cB._keyStates[nc.code] && Lc(cB, nc.code)
      } finally {
        gB(nc.code, Bc, cB, nc)
      }
    }

    function Sc(cB, Bc, nc) {
      try {
        Yc(cB, nc)
      } finally {
        ! function(cB, Bc, nc) {
          if ("pointerId" in nc)
            if (Bc) {
              if (null !== cB._touches.currID) return;
              cB._touches.currID = nc.pointerId
            } else {
              if (cB._touches.currID !== nc.pointerId) return;
              cB._touches.currID = null
            } var Vc = "button" in nc ? nc.button + 1 : 1;
          gB("Mouse" + Vc, Bc, cB, nc)
        }(cB, Bc, nc)
      }
    }

    function yB(cB, Bc) {
      var nc = Bc.movementX || Bc.mozMovementX || 0,
        Vc = Bc.movementY || Bc.mozMovementY || 0;
      if (Bc.touches && 0 === (nc | Vc)) {
        var Ic = function(cB) {
          mB(cB);
          for (let Bc = 0; Bc < cB.changedTouches.length; ++Bc)
            if (cB.changedTouches[Bc].identifier == Tc) {
              const nc = cB.changedTouches[Bc],
                Vc = [nc.clientX - qB, nc.clientY - Oc];
              return qB = nc.clientX, Oc = nc.clientY, Vc
            } return console.error(`Did not find touch id ${Tc}`), [0, 0]
        }(Bc);
        nc = Ic[0], Vc = Ic[1]
      }
      cB.FVc.dx += nc, cB.FVc.dy += Vc
    }

    function zB(cB, Bc) {
      Yc(cB, Bc);
      var nc = 1;
      switch (Bc.deltaMode) {
        case 0:
          nc = 1;
          break;
        case 1:
          nc = 12;
          break;
        case 2:
          nc = cB.element.clientHeight || window.innerHeight
      }
      cB.FVc.Nsc += (Bc.deltaX || 0) * nc, cB.FVc.osc += (Bc.deltaY || 0) * nc, cB.FVc.Wsc += (Bc.deltaZ || 0) * nc
    }

    function pc(cB, Bc) {
      if (!cB.SVc) return Bc.preventDefault(), !1
    }
    var hc = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function aB(cB, Bc) {
      return !!cB[hc[Bc]] || ("AltRight" === Bc || "ControlLeft" === Bc) && "function" === typeof cB.getModifierState && !0 === cB.getModifierState("AltGraph")
    }

    function lc(cB) {
      for (var Bc in cB._modifiersHeldThroughBlur = {}, hc) cB._keyStates[Bc] && (cB._modifiersHeldThroughBlur[Bc] = !0)
    }

    function Yc(cB, Bc) {
      var nc = cB._modifiersHeldThroughBlur;
      if (nc && Bc.isTrusted && document.hasFocus())
        for (var Vc in nc) delete nc[Vc], cB._keyStates[Vc] && Vc !== Bc.code && (aB(Bc, Vc) || Lc(cB, Vc))
    }

    function Lc(cB, Bc) {
      const nc = {
          code: Bc,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        Vc = Ic;
      Ic = nc;
      try {
        gB(Bc, !1, cB, nc)
      } finally {
        Ic = Vc
      }
    }

    function gB(cB, Bc, nc, Vc) {
      var Ic = nc._keyBindmap[cB];
      Ic && (Uc(nc._keyStates[cB], Bc) && (nc._keyStates[cB] = Bc, Ic.forEach((cB => {
        (!nc.filterEvents || nc.filterEvents(Vc, cB)) && function(cB, Bc, nc, Vc) {
          var Ic = Bc ? nc.pressCount : nc.releaseCount;
          Ic[cB] = (Ic[cB] || 0) + 1;
          var rB = nc._bindPressCount[cB] || 0;
          (rB += Bc ? 1 : -1) < 0 && (rB = 0);
          nc._bindPressCount[cB] = rB;
          var uc = nc.state[cB];
          if (Uc(uc, rB)) {
            nc.state[cB] = rB > 0;
            var sc = Bc ? nc.down : nc.up;
            nc.disabled || sc.emit(cB, Vc)
          }
        }(cB, Bc, nc, Vc)
      }))), "button" in Vc || (nc.tIc && !Vc.defaultPrevented && Vc.preventDefault(), nc.stopPropagation && Vc.stopPropagation()))
    }

    function Uc(cB, Bc) {
      return cB ? !Bc : Bc
    }
  },
  35195: (cB, Bc) => {
    function nc(cB) {
      if (cB && "object" === typeof cB) {
        var Bc = cB.which || cB.keyCode || cB.charCode;
        Bc && (cB = Bc)
      }
      if ("number" === typeof cB) return uc[cB];
      var nc, rB = String(cB);
      return (nc = Vc[rB.toLowerCase()]) ? nc : (nc = Ic[rB.toLowerCase()]) || (1 === rB.length ? rB.charCodeAt(0) : void 0)
    }
    nc.isEventKey = function(cB, Bc) {
      if (cB && "object" === typeof cB) {
        var nc = cB.which || cB.keyCode || cB.charCode;
        if (null === nc || void 0 === nc) return !1;
        if ("string" === typeof Bc) {
          var rB;
          if (rB = Vc[Bc.toLowerCase()]) return rB === nc;
          if (rB = Ic[Bc.toLowerCase()]) return rB === nc
        } else if ("number" === typeof Bc) return Bc === nc;
        return !1
      }
    };
    var Vc = (Bc = cB.exports = nc).code = Bc.codes = {
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
      Ic = Bc.aliases = {
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
    for (rB = 97; rB < 123; rB++) Vc[String.fromCharCode(rB)] = rB - 32;
    for (var rB = 48; rB < 58; rB++) Vc[rB - 48] = rB;
    for (rB = 1; rB < 13; rB++) Vc["f" + rB] = rB + 111;
    for (rB = 0; rB < 10; rB++) Vc["numpad " + rB] = rB + 96;
    var uc = Bc.names = Bc.title = {};
    for (rB in Vc) uc[Vc[rB]] = rB;
    for (var sc in Ic) Vc[sc] = Ic[sc]
  },
  37770: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Vc
    });
    class Vc {
      constructor() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        this.lnB = !1, this.Ync = !1, this.WBc = 30, this.zVc = 0, this.Lnc = 100, this.Bs = !1, this.fullscreen = !1, this.eZ = function(cB) {}, this.gVc = function(cB, Bc, nc) {}, this.Znc = function() {}, this.ZZ = function() {}, this.Unc = function() {}, this.onFullscreenChanged = function() {}, this.onPointerLockError = function(cB) {}, this._data = new Ic(Bc),
          function(cB) {
            if ("loading" === document.readyState) {
              var Bc = () => {
                document.removeEventListener("readystatechange", Bc), cB()
              };
              document.addEventListener("readystatechange", Bc)
            } else setTimeout(cB, 0)
          }((() => {
            ! function(cB) {
              var Bc = cB._data,
                nc = Bc.nowObject.now();
              Bc.lastTickStarted = nc, Bc.lastFrameStarted = nc, Bc.lastRenderStarted = nc, Bc.frameCB = () => function(cB) {
                var Bc = cB._data;
                requestAnimationFrame(Bc.frameCB), sc(cB);
                var nc = Bc.nowObject.now(),
                  Vc = nc - Bc.lastFrameStarted;
                if (Bc.lastFrameStarted = nc, cB.zVc > 0) {
                  Bc.renderAccum += Vc;
                  var Ic = 1e3 / cB.zVc;
                  if (Bc.renderAccum < Ic) return;
                  Bc.renderAccum -= Ic, Bc.renderAccum > Ic && (Bc.renderAccum = Ic)
                }
                var rB = nc - Bc.lastRenderStarted;
                Bc.lastRenderStarted = nc;
                var uc = 1e3 / cB.WBc,
                  Mc = (nc - Bc.lastTickStarted) / uc;
                Mc < 0 && (Mc = 0);
                cB.gVc(rB, Mc, uc), setTimeout(sc, 0, cB, !0)
              }(cB), Bc.intervalCB = () => sc(cB), requestAnimationFrame(Bc.frameCB), Bc.pollTime > 0 && (Bc.intervalID = setInterval(Bc.intervalCB, Math.max(Bc.pollTime, 1e3 / cB.WBc / 2)))
            }(this),
            function(cB, Bc) {
              if (!Bc) return;
              var nc = !1,
                Vc = !1,
                Ic = cB => {
                  if (!!cB !== (nc = Bc === document.pointerLockElement))
                    if (cB) {
                      var Vc = Bc.requestPointerLock();
                      Vc && Vc.catch && Vc.catch((cB => {}))
                    } else document.exitPointerLock()
                },
                rB = cB => {
                  !!cB !== (Vc = Bc === document.fullscreenElement) && (cB ? Bc.requestFullscreen ? Bc.requestFullscreen() : Bc.webkitRequestFullscreen && Bc.webkitRequestFullscreen() : document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen())
                };
              document.addEventListener("pointerlockchange", (Vc => {
                nc = Bc === document.pointerLockElement, cB.Unc(nc)
              })), document.addEventListener("fullscreenchange", (nc => {
                Vc = Bc === document.fullscreenElement, cB.onFullscreenChanged(Vc)
              })), document.addEventListener("pointerlockerror", (Vc => {
                nc = Bc === document.pointerLockElement, cB.onPointerLockError(Vc)
              })), Object.defineProperty(cB, "Bs", {
                get: () => nc,
                set: Ic
              }), Object.defineProperty(cB, "fullscreen", {
                get: () => Vc,
                set: rB
              }), Bc.addEventListener("click", (Bc => {
                cB.lnB && Ic(!0), cB.Ync && rB(!0)
              }));
              var uc = () => cB.ZZ();
              if (window.ResizeObserver) {
                new ResizeObserver(uc).observe(Bc)
              } else window.addEventListener("resize", uc)
            }(this, cB), this.Znc()
          }))
      }
    }

    function Ic() {
      let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      this.nowObject = performance || Date, this.pollTime = cB, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
    }
    var rB = 3,
      uc = 20;

    function sc(cB) {
      for (var Bc = cB._data, nc = 1e3 / cB.WBc, Vc = Bc.nowObject.now() + uc, Ic = 0; Bc.nowObject.now() >= Bc.lastTickStarted + nc && Bc.nowObject.now() < Vc && ++Ic <= rB;) cB.eZ(nc), Bc.lastTickStarted += nc;
      var sc = 5 * (nc + 5),
        Mc = Bc.nowObject.now();
      if (Mc - Bc.lastTickStarted > sc)
        for (; Mc >= Bc.lastTickStarted + nc;) Bc.lastTickStarted += nc
    }
  },
  35355: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => uc
    });
    var Vc = nc(73);
    const Ic = Vc.useLayoutEffect;
    const rB = function(cB) {
      var Bc = (0, Vc.useRef)(cB);
      return Ic((function() {
        Bc.current = cB
      })), Bc
    };
    var uc = function(cB) {
      var Bc = rB(cB);
      (0, Vc.useEffect)((function() {
        var cB = function(cB) {
          var nc;
          if (null != Bc.current && (nc = Bc.current(cB)), cB.defaultPrevented && (cB.returnValue = ""), "string" === typeof nc) return cB.returnValue = nc, nc
        };
        return window.addEventListener("beforeunload", cB),
          function() {
            window.removeEventListener("beforeunload", cB)
          }
      }), [])
    }
  },
  35234: cB => {
    var Bc, nc = "undefined" !== typeof window ? window.navigator.userAgent : "",
      Vc = /OS X/.test(nc),
      Ic = /Opera/.test(nc),
      rB = !/like Gecko/.test(nc) && !Ic,
      uc = cB.exports = {
        0: Vc ? "<menu>" : "<UNK>",
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
        93: Vc ? "<meta>" : "<menu>",
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
        173: Vc && rB ? "-" : "<volume-mute>",
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
        231: Ic ? "`" : "<unicode>",
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
    for (Bc = 58; Bc < 65; ++Bc) uc[Bc] = String.fromCharCode(Bc);
    for (Bc = 48; Bc < 58; ++Bc) uc[Bc] = Bc - 48 + "";
    for (Bc = 65; Bc < 91; ++Bc) uc[Bc] = String.fromCharCode(Bc);
    for (Bc = 96; Bc < 106; ++Bc) uc[Bc] = "<num-" + (Bc - 96) + ">";
    for (Bc = 112; Bc < 136; ++Bc) uc[Bc] = "F" + (Bc - 111)
  },
  37525: (cB, Bc, nc) => {
    function Vc(cB, Bc, nc, Vc, Ic) {
      var rB = {};
      return Object.keys(Vc).forEach((function(cB) {
        rB[cB] = Vc[cB]
      })), rB.enumerable = !!rB.enumerable, rB.configurable = !!rB.configurable, ("value" in rB || rB.initializer) && (rB.writable = !0), rB = nc.slice().reverse().reduce((function(nc, Vc) {
        return Vc(cB, Bc, nc) || nc
      }), rB), Ic && void 0 !== rB.initializer && (rB.value = rB.initializer ? rB.initializer.call(Ic) : void 0, rB.initializer = void 0), void 0 === rB.initializer && (Object.defineProperty(cB, Bc, rB), rB = null), rB
    }
    nc.d(Bc, {
      e: () => Vc
    })
  },
  37517: (cB, Bc, nc) => {
    function Vc(cB, Bc, nc, Vc) {
      nc && Object.defineProperty(cB, Bc, {
        enumerable: nc.enumerable,
        configurable: nc.configurable,
        writable: nc.writable,
        value: nc.initializer ? nc.initializer.call(Vc) : void 0
      })
    }
    nc.d(Bc, {
      c: () => Vc
    })
  },
  37185: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => rB
    });
    var Vc = nc(37191);
    const Ic = (cB, Bc, nc) => cB ? cB.getClassName && "Mesh" === cB.getClassName() ? null : !cB.getClassName || "SubMesh" !== cB.getClassName() && "PhysicsBody" !== cB.getClassName() ? cB.clone ? cB.clone() : Array.isArray(cB) ? cB.slice() : nc && "object" === typeof cB ? {
      ...cB
    } : null : cB.clone(Bc) : null;
    class rB {
      static DeepCopy(cB, Bc, nc, rB) {
        let uc = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const sc = function(cB) {
          const Bc = [];
          do {
            const nc = Object.getOwnPropertyNames(cB);
            for (const cB of nc) - 1 === Bc.indexOf(cB) && Bc.push(cB)
          } while (cB = Object.getPrototypeOf(cB));
          return Bc
        }(cB);
        for (const Pc of sc) {
          if ("_" === Pc[0] && (!rB || -1 === rB.indexOf(Pc))) continue;
          if (Pc.endsWith("Observable")) continue;
          if (nc && -1 !== nc.indexOf(Pc)) continue;
          const sc = cB[Pc],
            qB = typeof sc;
          if ("function" !== qB) try {
            if ("object" === qB)
              if (sc instanceof Uint8Array) Bc[Pc] = Uint8Array.from(sc);
              else if (sc instanceof Array) {
              if (Bc[Pc] = [], sc.length > 0)
                if ("object" == typeof sc[0])
                  for (let cB = 0; cB < sc.length; cB++) {
                    const nc = Ic(sc[cB], Bc, uc); - 1 === Bc[Pc].indexOf(nc) && Bc[Pc].push(nc)
                  } else Bc[Pc] = sc.slice(0)
            } else Bc[Pc] = Ic(sc, Bc, uc);
            else Bc[Pc] = sc
          } catch (Mc) {
            Vc.c.Warn(Mc.message)
          }
        }
      }
    }
  },
  37224: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Ic,
      e: () => rB,
      h: () => uc,
      l: () => sc
    });
    var Vc = nc(35815);
    class Ic {
      constructor(cB, Bc, nc) {
        this.gradient = cB, this.color1 = Bc, this.color2 = nc
      }
      getColorToRef(cB) {
        this.color2 ? Vc.g.LerpToRef(this.color1, this.color2, Math.random(), cB) : cB.qqc(this.color1)
      }
    }
    class rB {
      constructor(cB, Bc) {
        this.gradient = cB, this.color = Bc
      }
    }
    class uc {
      constructor(cB, Bc, nc) {
        this.gradient = cB, this.factor1 = Bc, this.factor2 = nc
      }
      getFactor() {
        return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
      }
    }
    class sc {
      static GetCurrentGradient(cB, Bc, nc) {
        if (Bc[0].gradient > cB) return void nc(Bc[0], Bc[0], 1);
        for (let Ic = 0; Ic < Bc.length - 1; Ic++) {
          const Vc = Bc[Ic],
            rB = Bc[Ic + 1];
          if (cB >= Vc.gradient && cB <= rB.gradient) {
            return void nc(Vc, rB, (cB - Vc.gradient) / (rB.gradient - Vc.gradient))
          }
        }
        const Vc = Bc.length - 1;
        nc(Bc[Vc], Bc[Vc], 1)
      }
    }
  },
  37191: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Vc
    });
    class Vc {
      static _CheckLimit(cB, Bc) {
        let nc = Vc._LogLimitOutputs[cB];
        return nc ? nc.current++ : (nc = {
          limit: Bc,
          current: 1
        }, Vc._LogLimitOutputs[cB] = nc), nc.current <= nc.limit
      }
      static _GenerateLimitMessage(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const nc = Vc._LogLimitOutputs[cB];
        if (!nc || !Vc.MessageLimitReached) return;
        const Ic = this._Levels[Bc];
        nc.current === nc.limit && Vc[Ic.name](Vc.MessageLimitReached.replace(/%LIMIT%/g, "" + nc.limit).replace(/%TYPE%/g, Ic.name ?? ""))
      }
      static _AddLogEntry(cB) {
        Vc._LogCache = cB + Vc._LogCache, Vc.OnNewCacheEntry && Vc.OnNewCacheEntry(cB)
      }
      static _FormatMessage(cB) {
        const Bc = cB => cB < 10 ? "0" + cB : "" + cB,
          nc = new Date;
        return "[" + Bc(nc.getHours()) + ":" + Bc(nc.getMinutes()) + ":" + Bc(nc.getSeconds()) + "]: " + cB
      }
      static _LogDisabled(cB, Bc) {}
      static _LogEnabled() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Bc = arguments.length > 1 ? arguments[1] : void 0,
          nc = arguments.length > 2 ? arguments[2] : void 0;
        const Ic = Array.isArray(Bc) ? Bc[0] : Bc;
        if (void 0 !== nc && !Vc._CheckLimit(Ic, nc)) return;
        const rB = Vc._FormatMessage(Ic),
          uc = this._Levels[cB],
          sc = Array.isArray(Bc) ? Bc.slice(1) : [];
        uc.logFunc && uc.logFunc("BJS - " + rB, ...sc);
        const Mc = `<div style='color:${uc.color}'>${rB}</div><br>`;
        Vc._AddLogEntry(Mc), Vc._GenerateLimitMessage(Ic, cB)
      }
      static get LogCache() {
        return Vc._LogCache
      }
      static ClearLogCache() {
        Vc._LogCache = "", Vc._LogLimitOutputs = {}, Vc.errorsCount = 0
      }
      static set LogLevels(cB) {
        Vc.Log = Vc._LogDisabled, Vc.Warn = Vc._LogDisabled, Vc.Error = Vc._LogDisabled;
        const Bc = [Vc.MessageLogLevel, Vc.WarningLogLevel, Vc.ErrorLogLevel];
        for (const nc of Bc)
          if ((cB & nc) === nc) {
            const cB = this._Levels[nc];
            Vc[cB.name] = Vc._LogEnabled.bind(Vc, nc)
          }
      }
    }
    Vc.NoneLogLevel = 0, Vc.MessageLogLevel = 1, Vc.WarningLogLevel = 2, Vc.ErrorLogLevel = 4, Vc.AllLogLevel = 7, Vc.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Vc._LogCache = "", Vc._LogLimitOutputs = {}, Vc._Levels = [{}, {
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
    }], Vc.errorsCount = 0, Vc.Log = Vc._LogEnabled.bind(Vc, Vc.MessageLogLevel), Vc.Warn = Vc._LogEnabled.bind(Vc, Vc.WarningLogLevel), Vc.Error = Vc._LogEnabled.bind(Vc, Vc.ErrorLogLevel)
  },
  37228: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => uc
    });
    var Vc = nc(35756),
      Ic = nc(35785),
      rB = nc(37185);
    class uc {
      constructor() {
        this.direction1 = new Vc.p(0, 1, 0), this.direction2 = new Vc.p(0, 1, 0), this.minEmitBox = new Vc.p(-.5, -.5, -.5), this.maxEmitBox = new Vc.p(.5, .5, .5)
      }
      startDirectionFunction(cB, Bc, nc, rB) {
        const uc = (0, Ic.RandomRange)(this.direction1.x, this.direction2.x),
          sc = (0, Ic.RandomRange)(this.direction1.y, this.direction2.y),
          Mc = (0, Ic.RandomRange)(this.direction1.z, this.direction2.z);
        if (rB) return Bc.x = uc, Bc.y = sc, void(Bc.z = Mc);
        Vc.p.TransformNormalFromFloatsToRef(uc, sc, Mc, cB, Bc)
      }
      startPositionFunction(cB, Bc, nc, rB) {
        const uc = (0, Ic.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
          sc = (0, Ic.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
          Mc = (0, Ic.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
        if (rB) return Bc.x = uc, Bc.y = sc, void(Bc.z = Mc);
        Vc.p.TransformCoordinatesFromFloatsToRef(uc, sc, Mc, cB, Bc)
      }
      clone() {
        const cB = new uc;
        return rB.b.DeepCopy(this, cB), cB
      }
      applyToShader(cB) {
        cB.setVector3("direction1", this.direction1), cB.setVector3("direction2", this.direction2), cB.setVector3("minEmitBox", this.minEmitBox), cB.setVector3("maxEmitBox", this.maxEmitBox)
      }
      buildUniformLayout(cB) {
        cB.addUniform("direction1", 3), cB.addUniform("direction2", 3), cB.addUniform("minEmitBox", 3), cB.addUniform("maxEmitBox", 3)
      }
      getEffectDefines() {
        return "#define BOXEMITTER"
      }
      getClassName() {
        return "BoxParticleEmitter"
      }
      serialize() {
        const cB = {};
        return cB.type = this.getClassName(), cB.direction1 = this.direction1.KPc(), cB.direction2 = this.direction2.KPc(), cB.minEmitBox = this.minEmitBox.KPc(), cB.maxEmitBox = this.maxEmitBox.KPc(), cB
      }
      parse(cB) {
        Vc.p.FromArrayToRef(cB.direction1, 0, this.direction1), Vc.p.FromArrayToRef(cB.direction2, 0, this.direction2), Vc.p.FromArrayToRef(cB.minEmitBox, 0, this.minEmitBox), Vc.p.FromArrayToRef(cB.maxEmitBox, 0, this.maxEmitBox)
      }
    }
  },
  37176: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => sc,
      f: () => uc
    });
    var Vc = nc(35756),
      Ic = nc(35785),
      rB = nc(37185);
    class uc {
      constructor() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Ic = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.radius = cB, this.height = Bc, this.radiusRange = nc, this.directionRandomizer = Ic, this._tempVector = Vc.p.Zero()
      }
      startDirectionFunction(cB, Bc, nc, rB, uc) {
        nc.position.subtractToRef(cB.getTranslation(), this._tempVector), this._tempVector.normalize(), Vc.p.TransformNormalToRef(this._tempVector, uc, this._tempVector);
        const sc = (0, Ic.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
        let Mc = Math.atan2(this._tempVector.x, this._tempVector.z);
        Mc += (0, Ic.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = sc, this._tempVector.x = Math.sin(Mc), this._tempVector.z = Math.cos(Mc), this._tempVector.normalize(), rB ? Bc.qqc(this._tempVector) : Vc.p.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, cB, Bc)
      }
      startPositionFunction(cB, Bc, nc, rB) {
        const uc = (0, Ic.RandomRange)(-this.height / 2, this.height / 2),
          sc = (0, Ic.RandomRange)(0, 2 * Math.PI),
          Mc = (0, Ic.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
          Pc = Math.sqrt(Mc) * this.radius,
          qB = Pc * Math.cos(sc),
          Oc = Pc * Math.sin(sc);
        rB ? Bc.puc(qB, uc, Oc) : Vc.p.TransformCoordinatesFromFloatsToRef(qB, uc, Oc, cB, Bc)
      }
      clone() {
        const cB = new uc(this.radius, this.directionRandomizer);
        return rB.b.DeepCopy(this, cB), cB
      }
      applyToShader(cB) {
        cB.setFloat("radius", this.radius), cB.setFloat("height", this.height), cB.setFloat("radiusRange", this.radiusRange), cB.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(cB) {
        cB.addUniform("radius", 1), cB.addUniform("height", 1), cB.addUniform("radiusRange", 1), cB.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderParticleEmitter"
      }
      serialize() {
        const cB = {};
        return cB.type = this.getClassName(), cB.radius = this.radius, cB.height = this.height, cB.radiusRange = this.radiusRange, cB.directionRandomizer = this.directionRandomizer, cB
      }
      parse(cB) {
        this.radius = cB.radius, this.height = cB.height, this.radiusRange = cB.radiusRange, this.directionRandomizer = cB.directionRandomizer
      }
    }
    class sc extends uc {
      constructor() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Ic = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Vc.p(0, 1, 0),
          rB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Vc.p(0, 1, 0);
        super(cB, Bc, nc), this.direction1 = Ic, this.direction2 = rB
      }
      startDirectionFunction(cB, Bc, nc, rB) {
        const uc = (0, Ic.RandomRange)(this.direction1.x, this.direction2.x),
          sc = (0, Ic.RandomRange)(this.direction1.y, this.direction2.y),
          Mc = (0, Ic.RandomRange)(this.direction1.z, this.direction2.z);
        rB ? Bc.puc(uc, sc, Mc) : Vc.p.TransformNormalFromFloatsToRef(uc, sc, Mc, cB, Bc)
      }
      clone() {
        const cB = new sc(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
        return rB.b.DeepCopy(this, cB), cB
      }
      applyToShader(cB) {
        cB.setFloat("radius", this.radius), cB.setFloat("height", this.height), cB.setFloat("radiusRange", this.radiusRange), cB.setVector3("direction1", this.direction1), cB.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(cB) {
        cB.addUniform("radius", 1), cB.addUniform("height", 1), cB.addUniform("radiusRange", 1), cB.addUniform("direction1", 3), cB.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER\n#define DIRECTEDCYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderDirectedParticleEmitter"
      }
      serialize() {
        const cB = super.serialize();
        return cB.direction1 = this.direction1.KPc(), cB.direction2 = this.direction2.KPc(), cB
      }
      parse(cB) {
        super.parse(cB), Vc.p.FromArrayToRef(cB.direction1, 0, this.direction1), Vc.p.FromArrayToRef(cB.direction2, 0, this.direction2)
      }
    }
  },
  37287: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Oc
    });
    const Vc = .5 * (Math.sqrt(3) - 1),
      Ic = (3 - Math.sqrt(3)) / 6,
      rB = 1 / 3,
      uc = 1 / 6,
      sc = (Math.sqrt(5) - 1) / 4,
      Mc = (5 - Math.sqrt(5)) / 20,
      Pc = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
      qB = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]);
    const Oc = class {
      constructor() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
        const Bc = "function" == typeof cB ? cB : function(cB) {
          let Bc = 0,
            nc = 0,
            Vc = 0,
            Ic = 1;
          const rB = function() {
            let cB = 4022871197;
            return function(Bc) {
              Bc = Bc.toString();
              for (let nc = 0; nc < Bc.length; nc++) {
                cB += Bc.charCodeAt(nc);
                let Vc = .02519603282416938 * cB;
                cB = Vc >>> 0, Vc -= cB, Vc *= cB, cB = Vc >>> 0, Vc -= cB, cB += 4294967296 * Vc
              }
              return 2.3283064365386963e-10 * (cB >>> 0)
            }
          }();
          Bc = rB(" "), nc = rB(" "), Vc = rB(" "), Bc -= rB(cB), Bc < 0 && (Bc += 1);
          nc -= rB(cB), nc < 0 && (nc += 1);
          Vc -= rB(cB), Vc < 0 && (Vc += 1);
          return function() {
            const cB = 2091639 * Bc + 2.3283064365386963e-10 * Ic;
            return Bc = nc, nc = Vc, Vc = cB - (Ic = 0 | cB)
          }
        }(cB);
        this.p = function(cB) {
          const Bc = new Uint8Array(256);
          for (let nc = 0; nc < 256; nc++) Bc[nc] = nc;
          for (let nc = 0; nc < 255; nc++) {
            const Vc = nc + ~~(cB() * (256 - nc)),
              Ic = Bc[nc];
            Bc[nc] = Bc[Vc], Bc[Vc] = Ic
          }
          return Bc
        }(Bc), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
        for (let nc = 0; nc < 512; nc++) this.perm[nc] = this.p[255 & nc], this.permMod12[nc] = this.perm[nc] % 12
      }
      noise2D(cB, Bc) {
        const nc = this.permMod12,
          rB = this.perm;
        let uc = 0,
          sc = 0,
          Mc = 0;
        const qB = (cB + Bc) * Vc,
          Oc = Math.floor(cB + qB),
          Tc = Math.floor(Bc + qB),
          fc = (Oc + Tc) * Ic,
          mB = cB - (Oc - fc),
          ec = Bc - (Tc - fc);
        let tB, Sc;
        mB > ec ? (tB = 1, Sc = 0) : (tB = 0, Sc = 1);
        const yB = mB - tB + Ic,
          zB = ec - Sc + Ic,
          pc = mB - 1 + 2 * Ic,
          hc = ec - 1 + 2 * Ic,
          aB = 255 & Oc,
          lc = 255 & Tc;
        let Yc = .5 - mB * mB - ec * ec;
        if (Yc >= 0) {
          const cB = 3 * nc[aB + rB[lc]];
          Yc *= Yc, uc = Yc * Yc * (Pc[cB] * mB + Pc[cB + 1] * ec)
        }
        let Lc = .5 - yB * yB - zB * zB;
        if (Lc >= 0) {
          const cB = 3 * nc[aB + tB + rB[lc + Sc]];
          Lc *= Lc, sc = Lc * Lc * (Pc[cB] * yB + Pc[cB + 1] * zB)
        }
        let gB = .5 - pc * pc - hc * hc;
        if (gB >= 0) {
          const cB = 3 * nc[aB + 1 + rB[lc + 1]];
          gB *= gB, Mc = gB * gB * (Pc[cB] * pc + Pc[cB + 1] * hc)
        }
        return 70 * (uc + sc + Mc)
      }
      noise3D(cB, Bc, nc) {
        const Vc = this.permMod12,
          Ic = this.perm;
        let sc, Mc, qB, Oc;
        const Tc = (cB + Bc + nc) * rB,
          fc = Math.floor(cB + Tc),
          mB = Math.floor(Bc + Tc),
          ec = Math.floor(nc + Tc),
          tB = (fc + mB + ec) * uc,
          Sc = cB - (fc - tB),
          yB = Bc - (mB - tB),
          zB = nc - (ec - tB);
        let pc, hc, aB, lc, Yc, Lc;
        Sc >= yB ? yB >= zB ? (pc = 1, hc = 0, aB = 0, lc = 1, Yc = 1, Lc = 0) : Sc >= zB ? (pc = 1, hc = 0, aB = 0, lc = 1, Yc = 0, Lc = 1) : (pc = 0, hc = 0, aB = 1, lc = 1, Yc = 0, Lc = 1) : yB < zB ? (pc = 0, hc = 0, aB = 1, lc = 0, Yc = 1, Lc = 1) : Sc < zB ? (pc = 0, hc = 1, aB = 0, lc = 0, Yc = 1, Lc = 1) : (pc = 0, hc = 1, aB = 0, lc = 1, Yc = 1, Lc = 0);
        const gB = Sc - pc + uc,
          Uc = yB - hc + uc,
          bB = zB - aB + uc,
          Zc = Sc - lc + 2 * uc,
          Qc = yB - Yc + 2 * uc,
          Cc = zB - Lc + 2 * uc,
          vB = Sc - 1 + .5,
          Dc = yB - 1 + .5,
          Nc = zB - 1 + .5,
          Ec = 255 & fc,
          oc = 255 & mB,
          Wc = 255 & ec;
        let wc = .6 - Sc * Sc - yB * yB - zB * zB;
        if (wc < 0) sc = 0;
        else {
          const cB = 3 * Vc[Ec + Ic[oc + Ic[Wc]]];
          wc *= wc, sc = wc * wc * (Pc[cB] * Sc + Pc[cB + 1] * yB + Pc[cB + 2] * zB)
        }
        let kB = .6 - gB * gB - Uc * Uc - bB * bB;
        if (kB < 0) Mc = 0;
        else {
          const cB = 3 * Vc[Ec + pc + Ic[oc + hc + Ic[Wc + aB]]];
          kB *= kB, Mc = kB * kB * (Pc[cB] * gB + Pc[cB + 1] * Uc + Pc[cB + 2] * bB)
        }
        let Xc = .6 - Zc * Zc - Qc * Qc - Cc * Cc;
        if (Xc < 0) qB = 0;
        else {
          const cB = 3 * Vc[Ec + lc + Ic[oc + Yc + Ic[Wc + Lc]]];
          Xc *= Xc, qB = Xc * Xc * (Pc[cB] * Zc + Pc[cB + 1] * Qc + Pc[cB + 2] * Cc)
        }
        let Hc = .6 - vB * vB - Dc * Dc - Nc * Nc;
        if (Hc < 0) Oc = 0;
        else {
          const cB = 3 * Vc[Ec + 1 + Ic[oc + 1 + Ic[Wc + 1]]];
          Hc *= Hc, Oc = Hc * Hc * (Pc[cB] * vB + Pc[cB + 1] * Dc + Pc[cB + 2] * Nc)
        }
        return 32 * (sc + Mc + qB + Oc)
      }
      noise4D(cB, Bc, nc, Vc) {
        const Ic = this.perm;
        let rB, uc, Pc, Oc, Tc;
        const fc = (cB + Bc + nc + Vc) * sc,
          mB = Math.floor(cB + fc),
          ec = Math.floor(Bc + fc),
          tB = Math.floor(nc + fc),
          Sc = Math.floor(Vc + fc),
          yB = (mB + ec + tB + Sc) * Mc,
          zB = cB - (mB - yB),
          pc = Bc - (ec - yB),
          hc = nc - (tB - yB),
          aB = Vc - (Sc - yB);
        let lc = 0,
          Yc = 0,
          Lc = 0,
          gB = 0;
        zB > pc ? lc++ : Yc++, zB > hc ? lc++ : Lc++, zB > aB ? lc++ : gB++, pc > hc ? Yc++ : Lc++, pc > aB ? Yc++ : gB++, hc > aB ? Lc++ : gB++;
        const Uc = lc >= 3 ? 1 : 0,
          bB = Yc >= 3 ? 1 : 0,
          Zc = Lc >= 3 ? 1 : 0,
          Qc = gB >= 3 ? 1 : 0,
          Cc = lc >= 2 ? 1 : 0,
          vB = Yc >= 2 ? 1 : 0,
          Dc = Lc >= 2 ? 1 : 0,
          Nc = gB >= 2 ? 1 : 0,
          Ec = lc >= 1 ? 1 : 0,
          oc = Yc >= 1 ? 1 : 0,
          Wc = Lc >= 1 ? 1 : 0,
          wc = gB >= 1 ? 1 : 0,
          kB = zB - Uc + Mc,
          Xc = pc - bB + Mc,
          Hc = hc - Zc + Mc,
          Fc = aB - Qc + Mc,
          Jc = zB - Cc + 2 * Mc,
          jB = pc - vB + 2 * Mc,
          Rc = hc - Dc + 2 * Mc,
          iB = aB - Nc + 2 * Mc,
          Kc = zB - Ec + 3 * Mc,
          xB = pc - oc + 3 * Mc,
          dc = hc - Wc + 3 * Mc,
          Ac = aB - wc + 3 * Mc,
          Gc = zB - 1 + 4 * Mc,
          cn = pc - 1 + 4 * Mc,
          BB = hc - 1 + 4 * Mc,
          nB = aB - 1 + 4 * Mc,
          VB = 255 & mB,
          IB = 255 & ec,
          rn = 255 & tB,
          uB = 255 & Sc;
        let sB = .6 - zB * zB - pc * pc - hc * hc - aB * aB;
        if (sB < 0) rB = 0;
        else {
          const cB = Ic[VB + Ic[IB + Ic[rn + Ic[uB]]]] % 32 * 4;
          sB *= sB, rB = sB * sB * (qB[cB] * zB + qB[cB + 1] * pc + qB[cB + 2] * hc + qB[cB + 3] * aB)
        }
        let MB = .6 - kB * kB - Xc * Xc - Hc * Hc - Fc * Fc;
        if (MB < 0) uc = 0;
        else {
          const cB = Ic[VB + Uc + Ic[IB + bB + Ic[rn + Zc + Ic[uB + Qc]]]] % 32 * 4;
          MB *= MB, uc = MB * MB * (qB[cB] * kB + qB[cB + 1] * Xc + qB[cB + 2] * Hc + qB[cB + 3] * Fc)
        }
        let PB = .6 - Jc * Jc - jB * jB - Rc * Rc - iB * iB;
        if (PB < 0) Pc = 0;
        else {
          const cB = Ic[VB + Cc + Ic[IB + vB + Ic[rn + Dc + Ic[uB + Nc]]]] % 32 * 4;
          PB *= PB, Pc = PB * PB * (qB[cB] * Jc + qB[cB + 1] * jB + qB[cB + 2] * Rc + qB[cB + 3] * iB)
        }
        let qn = .6 - Kc * Kc - xB * xB - dc * dc - Ac * Ac;
        if (qn < 0) Oc = 0;
        else {
          const cB = Ic[VB + Ec + Ic[IB + oc + Ic[rn + Wc + Ic[uB + wc]]]] % 32 * 4;
          qn *= qn, Oc = qn * qn * (qB[cB] * Kc + qB[cB + 1] * xB + qB[cB + 2] * dc + qB[cB + 3] * Ac)
        }
        let OB = .6 - Gc * Gc - cn * cn - BB * BB - nB * nB;
        if (OB < 0) Tc = 0;
        else {
          const cB = Ic[VB + 1 + Ic[IB + 1 + Ic[rn + 1 + Ic[uB + 1]]]] % 32 * 4;
          OB *= OB, Tc = OB * OB * (qB[cB] * Gc + qB[cB + 1] * cn + qB[cB + 2] * BB + qB[cB + 3] * nB)
        }
        return 27 * (rB + uc + Pc + Oc + Tc)
      }
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);