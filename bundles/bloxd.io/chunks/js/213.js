/*! For license information please see 7rj44.213.27f42c1d.chunk.js.LICENSE.txt */
export const id = 213;
export const ids = [213];
export const modules = {
  38905: (zz, tz, sz) => {
    zz.exports = Wz;
    var Fz = sz(330);

    function Wz(zz, tz) {
      if (!(this instanceof Wz)) return new Wz(zz, tz);
      var sz = Fz.create();
      Fz.add(sz, zz, tz), this.base = Fz.min(Fz.create(), zz, sz), this.vec = Fz.clone(tz), this.max = Fz.max(Fz.create(), zz, sz), this.mag = Fz.length(this.vec)
    }
    var Xz = Wz.prototype;
    Xz.width = function() {
      return this.vec[0]
    }, Xz.height = function() {
      return this.vec[1]
    }, Xz.depth = function() {
      return this.vec[2]
    }, Xz.x0 = function() {
      return this.base[0]
    }, Xz.y0 = function() {
      return this.base[1]
    }, Xz.z0 = function() {
      return this.base[2]
    }, Xz.x1 = function() {
      return this.max[0]
    }, Xz.y1 = function() {
      return this.max[1]
    }, Xz.z1 = function() {
      return this.max[2]
    }, Xz.translate = function(zz) {
      return Fz.add(this.max, this.max, zz), Fz.add(this.base, this.base, zz), this
    }, Xz.setPosition = function(zz) {
      return Fz.add(this.max, zz, this.vec), Fz.copy(this.base, zz), this
    }, Xz.expand = function(zz) {
      var tz = Fz.create(),
        sz = Fz.create();
      return Fz.max(tz, zz.max, this.max), Fz.min(sz, zz.base, this.base), Fz.subtract(tz, tz, sz), new Wz(sz, tz)
    }, Xz.intersects = function(zz) {
      return !(zz.base[0] > this.max[0]) && (!(zz.base[1] > this.max[1]) && (!(zz.base[2] > this.max[2]) && (!(zz.max[0] < this.base[0]) && (!(zz.max[1] < this.base[1]) && !(zz.max[2] < this.base[2])))))
    }, Xz.touches = function(zz) {
      var tz = this.union(zz);
      return null !== tz && (0 == tz.width() || 0 == tz.height() || 0 == tz.depth())
    }, Xz.union = function(zz) {
      if (!this.intersects(zz)) return null;
      var tz = Math.max(zz.base[0], this.base[0]),
        sz = Math.max(zz.base[1], this.base[1]),
        Fz = Math.max(zz.base[2], this.base[2]);
      return new Wz([tz, sz, Fz], [Math.min(zz.max[0], this.max[0]) - tz, Math.min(zz.max[1], this.max[1]) - sz, Math.min(zz.max[2], this.max[2]) - Fz])
    }
  },
  38896: zz => {
    zz.exports = function(zz, tz, sz, Fz, Wz, Xz) {
      var Oz = +tz[0],
        oz = +tz[1],
        vz = +tz[2],
        Uz = +sz[0],
        Kz = +sz[1],
        uz = +sz[2],
        Nz = Math.sqrt(Uz * Uz + Kz * Kz + uz * uz);
      if (0 === Nz) throw new Error("Can't raycast along a zero vector");
      return function(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz, Uz) {
        for (var Kz = 0, uz = Math.floor, Nz = 0 | uz(tz), bz = 0 | uz(sz), wz = 0 | uz(Fz), Dz = Wz > 0 ? 1 : -1, gz = Xz > 0 ? 1 : -1, Hz = Oz > 0 ? 1 : -1, Bz = Math.abs(1 / Wz), Pz = Math.abs(1 / Xz), rz = Math.abs(1 / Oz), Yz = Bz < 1 / 0 ? Bz * (Dz > 0 ? Nz + 1 - tz : tz - Nz) : 1 / 0, xz = Pz < 1 / 0 ? Pz * (gz > 0 ? bz + 1 - sz : sz - bz) : 1 / 0, mz = rz < 1 / 0 ? rz * (Hz > 0 ? wz + 1 - Fz : Fz - wz) : 1 / 0, Jz = -1; Kz <= oz;) {
          var Iz = zz(Nz, bz, wz);
          if (Iz) return vz && (vz[0] = tz + Kz * Wz, vz[1] = sz + Kz * Xz, vz[2] = Fz + Kz * Oz), Uz && (Uz[0] = Uz[1] = Uz[2] = 0, 0 === Jz && (Uz[0] = -Dz), 1 === Jz && (Uz[1] = -gz), 2 === Jz && (Uz[2] = -Hz)), Iz;
          Yz < xz ? Yz < mz ? (Nz += Dz, Kz = Yz, Yz += Bz, Jz = 0) : (wz += Hz, Kz = mz, mz += rz, Jz = 2) : xz < mz ? (bz += gz, Kz = xz, xz += Pz, Jz = 1) : (wz += Hz, Kz = mz, mz += rz, Jz = 2)
        }
        return vz && (vz[0] = tz + Kz * Wz, vz[1] = sz + Kz * Xz, vz[2] = Fz + Kz * Oz), Uz && (Uz[0] = Uz[1] = Uz[2] = 0), 0
      }(zz, Oz, oz, vz, Uz /= Nz, Kz /= Nz, uz /= Nz, Fz = "undefined" === typeof Fz ? 64 : +Fz, Wz, Xz)
    }
  },
  38521: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => oz,
      d: () => Xz
    });
    var Fz = sz(3786);
    let Wz = null;

    function Xz(zz) {
      return null !== Wz && zz === Wz
    }

    function Oz() {
      this.FQ = !1, this.stopPropagation = !1, this.EQ = !1, this.disabled = !1
    }
    class oz {
      constructor(zz, tz) {
        this.version = "0.7.0";
        var sz = Object.assign({}, new Oz, tz || {});
        this.element = zz || document, this.FQ = !!sz.FQ, this.stopPropagation = !!sz.stopPropagation, this.EQ = !!sz.EQ, this.disabled = !!sz.disabled, this.filterEvents = (zz, tz) => !0, this.down = new Fz.EventEmitter, this.up = new Fz.EventEmitter, this.state = {}, this.Fk = {
          dx: 0,
          dy: 0,
          Gzz: 0,
          Tzz: 0,
          czz: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? Uz(this) : document.addEventListener("DOMContentLoaded", (zz => {
          Uz(this)
        }), {
          once: !0
        })
      }
      bind(zz) {
        for (var tz = arguments.length, sz = new Array(tz > 1 ? tz - 1 : 0), Fz = 1; Fz < tz; Fz++) sz[Fz - 1] = arguments[Fz];
        sz.forEach((tz => {
          var sz = this._keyBindmap[tz] || [];
          sz.includes(zz) || (sz.push(zz), this._keyBindmap[tz] = sz)
        })), this.state[zz] = !!this.state[zz], this.pressCount[zz] = this.pressCount[zz] || 0, this.releaseCount[zz] = this.releaseCount[zz] || 0
      }
      unbind(zz) {
        for (var tz in this._keyBindmap) {
          var sz = this._keyBindmap[tz],
            Fz = sz.indexOf(zz);
          Fz > -1 && sz.splice(Fz, 1)
        }
      }
      getBindings() {
        var zz = {};
        for (var tz in this._keyBindmap) {
          this._keyBindmap[tz].forEach((sz => {
            zz[sz] = zz[sz] || [], zz[sz].push(tz)
          }))
        }
        return zz
      }
      wN() {
        vz(this.Fk), vz(this.pressCount), vz(this.releaseCount)
      }
    }

    function vz(zz) {
      for (var tz in zz) zz[tz] = 0
    }

    function Uz(zz) {
      window.addEventListener("keydown", gz.bind(null, zz, !0), !1), window.addEventListener("keyup", gz.bind(null, zz, !1), !1);
      var tz = {
        passive: !0
      };
      zz.element.addEventListener("touchstart", bz.bind(void 0, zz), {
        passive: !1
      }), zz.element.addEventListener("touchend", Dz.bind(void 0, zz), tz), zz.element.addEventListener("mousedown", Hz.bind(null, zz, !0), tz), window.document.addEventListener("mouseup", Hz.bind(null, zz, !1), tz), zz.element.addEventListener("touchmove", Bz.bind(null, zz), tz), zz.element.addEventListener("mousemove", Bz.bind(null, zz), tz), window.PointerEvent, zz.element.addEventListener("wheel", Pz.bind(null, zz), tz), zz.element.addEventListener("contextmenu", rz.bind(null, zz), !1), window.addEventListener("blur", mz.bind(null, zz), !1)
    }
    var Kz = 0,
      uz = 0,
      Nz = null;

    function bz(zz, tz) {
      tz.preventDefault(), wz(tz)
    }

    function wz(zz) {
      let tz = !1;
      for (let sz = 0; sz < zz.touches.length; ++sz)
        if (zz.touches[sz].identifier === Nz) {
          tz = !0;
          break
        } if (!tz) {
        const tz = zz.changedTouches[0];
        Kz = tz.clientX, uz = tz.clientY, Nz = tz.identifier
      }
    }

    function Dz(zz, tz) {
      for (var sz = tz.changedTouches, Fz = 0; Fz < sz.length; ++Fz) sz[Fz].identifier === Nz && (Nz = null)
    }

    function gz(zz, tz, sz) {
      try {
        Jz(zz, sz), tz && sz.isTrusted && !sz.repeat && zz._keyStates[sz.code] && Iz(zz, sz.code)
      } finally {
        Cz(sz.code, tz, zz, sz)
      }
    }

    function Hz(zz, tz, sz) {
      try {
        Jz(zz, sz)
      } finally {
        ! function(zz, tz, sz) {
          if ("pointerId" in sz)
            if (tz) {
              if (null !== zz._touches.currID) return;
              zz._touches.currID = sz.pointerId
            } else {
              if (zz._touches.currID !== sz.pointerId) return;
              zz._touches.currID = null
            } var Fz = "button" in sz ? sz.button + 1 : 1;
          Cz("Mouse" + Fz, tz, zz, sz)
        }(zz, tz, sz)
      }
    }

    function Bz(zz, tz) {
      var sz = tz.movementX || tz.mozMovementX || 0,
        Fz = tz.movementY || tz.mozMovementY || 0;
      if (tz.touches && 0 === (sz | Fz)) {
        var Wz = function(zz) {
          wz(zz);
          for (let tz = 0; tz < zz.changedTouches.length; ++tz)
            if (zz.changedTouches[tz].identifier == Nz) {
              const sz = zz.changedTouches[tz],
                Fz = [sz.clientX - Kz, sz.clientY - uz];
              return Kz = sz.clientX, uz = sz.clientY, Fz
            } return console.error(`Did not find touch id ${Nz}`), [0, 0]
        }(tz);
        sz = Wz[0], Fz = Wz[1]
      }
      zz.Fk.dx += sz, zz.Fk.dy += Fz
    }

    function Pz(zz, tz) {
      Jz(zz, tz);
      var sz = 1;
      switch (tz.deltaMode) {
        case 0:
          sz = 1;
          break;
        case 1:
          sz = 12;
          break;
        case 2:
          sz = zz.element.clientHeight || window.innerHeight
      }
      zz.Fk.Gzz += (tz.deltaX || 0) * sz, zz.Fk.Tzz += (tz.deltaY || 0) * sz, zz.Fk.czz += (tz.deltaZ || 0) * sz
    }

    function rz(zz, tz) {
      if (!zz.EQ) return tz.preventDefault(), !1
    }
    var Yz = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function xz(zz, tz) {
      return !!zz[Yz[tz]] || ("AltRight" === tz || "ControlLeft" === tz) && "function" === typeof zz.getModifierState && !0 === zz.getModifierState("AltGraph")
    }

    function mz(zz, tz) {
      for (var sz in zz._modifiersHeldThroughBlur = {}, Yz) zz._keyStates[sz] && (zz._modifiersHeldThroughBlur[sz] = !0);
      tz && tz.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (zz) {
          return !0
        }
      }() && (clearTimeout(zz._blurRelease), zz._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var tz in zz._modifiersHeldThroughBlur = {}, zz._keyStates) zz._keyStates[tz] && !/^Mouse\d/.test(tz) && Iz(zz, tz)
      }), 0))
    }

    function Jz(zz, tz) {
      var sz = zz._modifiersHeldThroughBlur;
      if (sz && tz.isTrusted && document.hasFocus())
        for (var Fz in sz) delete sz[Fz], zz._keyStates[Fz] && Fz !== tz.code && (xz(tz, Fz) || Iz(zz, Fz))
    }

    function Iz(zz, tz) {
      const sz = {
          code: tz,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        Fz = Wz;
      Wz = sz;
      try {
        Cz(tz, !1, zz, sz)
      } finally {
        Wz = Fz
      }
    }

    function Cz(zz, tz, sz, Fz) {
      var Wz = sz._keyBindmap[zz];
      Wz && (ez(sz._keyStates[zz], tz) && (sz._keyStates[zz] = tz, Wz.forEach((zz => {
        (!sz.filterEvents || sz.filterEvents(Fz, zz)) && function(zz, tz, sz, Fz) {
          var Wz = tz ? sz.pressCount : sz.releaseCount;
          Wz[zz] = (Wz[zz] || 0) + 1;
          var Xz = sz._bindPressCount[zz] || 0;
          (Xz += tz ? 1 : -1) < 0 && (Xz = 0);
          sz._bindPressCount[zz] = Xz;
          var Oz = sz.state[zz];
          if (ez(Oz, Xz)) {
            sz.state[zz] = Xz > 0;
            var oz = tz ? sz.down : sz.up;
            sz.disabled || oz.emit(zz, Fz)
          }
        }(zz, tz, sz, Fz)
      }))), "button" in Fz || (sz.FQ && !Fz.defaultPrevented && Fz.preventDefault(), sz.stopPropagation && Fz.stopPropagation()))
    }

    function ez(zz, tz) {
      return zz ? !tz : tz
    }
  },
  36033: (zz, tz) => {
    function sz(zz) {
      if (zz && "object" === typeof zz) {
        var tz = zz.which || zz.keyCode || zz.charCode;
        tz && (zz = tz)
      }
      if ("number" === typeof zz) return Oz[zz];
      var sz, Xz = String(zz);
      return (sz = Fz[Xz.toLowerCase()]) ? sz : (sz = Wz[Xz.toLowerCase()]) || (1 === Xz.length ? Xz.charCodeAt(0) : void 0)
    }
    sz.isEventKey = function(zz, tz) {
      if (zz && "object" === typeof zz) {
        var sz = zz.which || zz.keyCode || zz.charCode;
        if (null === sz || void 0 === sz) return !1;
        if ("string" === typeof tz) {
          var Xz;
          if (Xz = Fz[tz.toLowerCase()]) return Xz === sz;
          if (Xz = Wz[tz.toLowerCase()]) return Xz === sz
        } else if ("number" === typeof tz) return tz === sz;
        return !1
      }
    };
    var Fz = (tz = zz.exports = sz).code = tz.codes = {
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
      Wz = tz.aliases = {
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
    for (Xz = 97; Xz < 123; Xz++) Fz[String.fromCharCode(Xz)] = Xz - 32;
    for (var Xz = 48; Xz < 58; Xz++) Fz[Xz - 48] = Xz;
    for (Xz = 1; Xz < 13; Xz++) Fz["f" + Xz] = Xz + 111;
    for (Xz = 0; Xz < 10; Xz++) Fz["numpad " + Xz] = Xz + 96;
    var Oz = tz.names = tz.title = {};
    for (Xz in Fz) Oz[Fz[Xz]] = Xz;
    for (var oz in Wz) Fz[oz] = Wz[oz]
  },
  38885: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Fz
    });
    class Fz {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        this.sZ = !1, this.uZ = !1, this.iJ = 30, this.nC = 0, this.bZ = 100, this.cg = !1, this.fullscreen = !1, this.uB = function(zz) {}, this.wZ = function(zz, tz, sz) {}, this.eZ = function() {}, this.YB = function() {}, this.HZ = function() {}, this.onFullscreenChanged = function() {}, this.onPointerLockError = function(zz) {}, this._data = new Wz(tz),
          function(zz) {
            if ("loading" === document.readyState) {
              var tz = () => {
                document.removeEventListener("readystatechange", tz), zz()
              };
              document.addEventListener("readystatechange", tz)
            } else setTimeout(zz, 0)
          }((() => {
            ! function(zz) {
              var tz = zz._data,
                sz = tz.nowObject.now();
              tz.lastTickStarted = sz, tz.lastFrameStarted = sz, tz.lastRenderStarted = sz, tz.frameCB = () => function(zz) {
                var tz = zz._data;
                requestAnimationFrame(tz.frameCB), oz(zz);
                var sz = tz.nowObject.now(),
                  Fz = sz - tz.lastFrameStarted;
                if (tz.lastFrameStarted = sz, zz.nC > 0) {
                  tz.renderAccum += Fz;
                  var Wz = 1e3 / zz.nC;
                  if (tz.renderAccum < Wz) return;
                  tz.renderAccum -= Wz, tz.renderAccum > Wz && (tz.renderAccum = Wz)
                }
                var Xz = sz - tz.lastRenderStarted;
                tz.lastRenderStarted = sz;
                var Oz = 1e3 / zz.iJ,
                  vz = (sz - tz.lastTickStarted) / Oz;
                vz < 0 && (vz = 0);
                zz.wZ(Xz, vz, Oz), setTimeout(oz, 0, zz, !0)
              }(zz), tz.intervalCB = () => oz(zz), requestAnimationFrame(tz.frameCB), tz.pollTime > 0 && (tz.intervalID = setInterval(tz.intervalCB, Math.max(tz.pollTime, 1e3 / zz.iJ / 2)))
            }(this),
            function(zz, tz) {
              if (!tz) return;
              var sz = !1,
                Fz = !1,
                Wz = zz => {
                  if (!!zz !== (sz = tz === document.pointerLockElement))
                    if (zz) {
                      var Fz = tz.requestPointerLock();
                      Fz && Fz.catch && Fz.catch((zz => {}))
                    } else document.exitPointerLock()
                },
                Xz = zz => {
                  !!zz !== (Fz = tz === document.fullscreenElement) && (zz ? tz.requestFullscreen ? tz.requestFullscreen() : tz.webkitRequestFullscreen && tz.webkitRequestFullscreen() : document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen())
                };
              document.addEventListener("pointerlockchange", (Fz => {
                sz = tz === document.pointerLockElement, zz.HZ(sz)
              })), document.addEventListener("fullscreenchange", (sz => {
                Fz = tz === document.fullscreenElement, zz.onFullscreenChanged(Fz)
              })), document.addEventListener("pointerlockerror", (Fz => {
                sz = tz === document.pointerLockElement, zz.onPointerLockError(Fz)
              })), Object.defineProperty(zz, "cg", {
                get: () => sz,
                set: Wz
              }), Object.defineProperty(zz, "fullscreen", {
                get: () => Fz,
                set: Xz
              }), tz.addEventListener("click", (tz => {
                zz.sZ && Wz(!0), zz.uZ && Xz(!0)
              }));
              var Oz = () => zz.YB();
              if (window.ResizeObserver) {
                new ResizeObserver(Oz).observe(tz)
              } else window.addEventListener("resize", Oz)
            }(this, zz), this.eZ()
          }))
      }
    }

    function Wz() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      this.nowObject = performance || Date, this.pollTime = zz, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
    }
    var Xz = 3,
      Oz = 20;

    function oz(zz) {
      for (var tz = zz._data, sz = 1e3 / zz.iJ, Fz = tz.nowObject.now() + Oz, Wz = 0; tz.nowObject.now() >= tz.lastTickStarted + sz && tz.nowObject.now() < Fz && ++Wz <= Xz;) zz.uB(sz), tz.lastTickStarted += sz;
      var oz = 5 * (sz + 5),
        vz = tz.nowObject.now();
      if (vz - tz.lastTickStarted > oz)
        for (; vz >= tz.lastTickStarted + sz;) tz.lastTickStarted += sz
    }
  },
  36186: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Oz
    });
    var Fz = sz(65);
    const Wz = Fz.useLayoutEffect;
    const Xz = function(zz) {
      var tz = (0, Fz.useRef)(zz);
      return Wz((function() {
        tz.current = zz
      })), tz
    };
    var Oz = function(zz) {
      var tz = Xz(zz);
      (0, Fz.useEffect)((function() {
        var zz = function(zz) {
          var sz;
          if (null != tz.current && (sz = tz.current(zz)), zz.defaultPrevented && (zz.returnValue = ""), "string" === typeof sz) return zz.returnValue = sz, sz
        };
        return window.addEventListener("beforeunload", zz),
          function() {
            window.removeEventListener("beforeunload", zz)
          }
      }), [])
    }
  },
  36064: zz => {
    var tz, sz = "undefined" !== typeof window ? window.navigator.userAgent : "",
      Fz = /OS X/.test(sz),
      Wz = /Opera/.test(sz),
      Xz = !/like Gecko/.test(sz) && !Wz,
      Oz = zz.exports = {
        0: Fz ? "<menu>" : "<UNK>",
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
        93: Fz ? "<meta>" : "<menu>",
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
        173: Fz && Xz ? "-" : "<volume-mute>",
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
        231: Wz ? "`" : "<unicode>",
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
    for (tz = 58; tz < 65; ++tz) Oz[tz] = String.fromCharCode(tz);
    for (tz = 48; tz < 58; ++tz) Oz[tz] = tz - 48 + "";
    for (tz = 65; tz < 91; ++tz) Oz[tz] = String.fromCharCode(tz);
    for (tz = 96; tz < 106; ++tz) Oz[tz] = "<num-" + (tz - 96) + ">";
    for (tz = 112; tz < 136; ++tz) Oz[tz] = "F" + (tz - 111)
  },
  38442: (zz, tz, sz) => {
    function Fz(zz, tz, sz, Fz, Wz) {
      var Xz = {};
      return Object.keys(Fz).forEach((function(zz) {
        Xz[zz] = Fz[zz]
      })), Xz.enumerable = !!Xz.enumerable, Xz.configurable = !!Xz.configurable, ("value" in Xz || Xz.initializer) && (Xz.writable = !0), Xz = sz.slice().reverse().reduce((function(sz, Fz) {
        return Fz(zz, tz, sz) || sz
      }), Xz), Wz && void 0 !== Xz.initializer && (Xz.value = Xz.initializer ? Xz.initializer.call(Wz) : void 0, Xz.initializer = void 0), void 0 === Xz.initializer && (Object.defineProperty(zz, tz, Xz), Xz = null), Xz
    }
    sz.d(tz, {
      b: () => Fz
    })
  },
  38437: (zz, tz, sz) => {
    function Fz(zz, tz, sz, Fz) {
      sz && Object.defineProperty(zz, tz, {
        enumerable: sz.enumerable,
        configurable: sz.configurable,
        writable: sz.writable,
        value: sz.initializer ? sz.initializer.call(Fz) : void 0
      })
    }
    sz.d(tz, {
      e: () => Fz
    })
  },
  38091: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Xz
    });
    var Fz = sz(38097);
    const Wz = (zz, tz, sz) => zz ? zz.getClassName && "Mesh" === zz.getClassName() ? null : !zz.getClassName || "SubMesh" !== zz.getClassName() && "PhysicsBody" !== zz.getClassName() ? zz.clone ? zz.clone() : Array.isArray(zz) ? zz.slice() : sz && "object" === typeof zz ? {
      ...zz
    } : null : zz.clone(tz) : null;
    class Xz {
      static DeepCopy(zz, tz, sz, Xz) {
        let Oz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const oz = function(zz) {
          const tz = [];
          do {
            const sz = Object.getOwnPropertyNames(zz);
            for (const zz of sz) - 1 === tz.indexOf(zz) && tz.push(zz)
          } while (zz = Object.getPrototypeOf(zz));
          return tz
        }(zz);
        for (const Uz of oz) {
          if ("_" === Uz[0] && (!Xz || -1 === Xz.indexOf(Uz))) continue;
          if (Uz.endsWith("Observable")) continue;
          if (sz && -1 !== sz.indexOf(Uz)) continue;
          const oz = zz[Uz],
            Kz = typeof oz;
          if ("function" !== Kz) try {
            if ("object" === Kz)
              if (oz instanceof Uint8Array) tz[Uz] = Uint8Array.from(oz);
              else if (oz instanceof Array) {
              if (tz[Uz] = [], oz.length > 0)
                if ("object" == typeof oz[0])
                  for (let zz = 0; zz < oz.length; zz++) {
                    const sz = Wz(oz[zz], tz, Oz); - 1 === tz[Uz].indexOf(sz) && tz[Uz].push(sz)
                  } else tz[Uz] = oz.slice(0)
            } else tz[Uz] = Wz(oz, tz, Oz);
            else tz[Uz] = oz
          } catch (vz) {
            Fz.e.Warn(vz.message)
          }
        }
      }
    }
  },
  38126: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Wz,
      i: () => Xz,
      m: () => Oz,
      o: () => oz
    });
    var Fz = sz(36654);
    class Wz {
      constructor(zz, tz, sz) {
        this.gradient = zz, this.color1 = tz, this.color2 = sz
      }
      getColorToRef(zz) {
        this.color2 ? Fz.d.LerpToRef(this.color1, this.color2, Math.random(), zz) : zz.vsz(this.color1)
      }
    }
    class Xz {
      constructor(zz, tz) {
        this.gradient = zz, this.color = tz
      }
    }
    class Oz {
      constructor(zz, tz, sz) {
        this.gradient = zz, this.factor1 = tz, this.factor2 = sz
      }
      getFactor() {
        return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
      }
    }
    class oz {
      static GetCurrentGradient(zz, tz, sz) {
        if (tz[0].gradient > zz) return void sz(tz[0], tz[0], 1);
        for (let Wz = 0; Wz < tz.length - 1; Wz++) {
          const Fz = tz[Wz],
            Xz = tz[Wz + 1];
          if (zz >= Fz.gradient && zz <= Xz.gradient) {
            return void sz(Fz, Xz, (zz - Fz.gradient) / (Xz.gradient - Fz.gradient))
          }
        }
        const Fz = tz.length - 1;
        sz(tz[Fz], tz[Fz], 1)
      }
    }
  },
  38097: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Fz
    });
    class Fz {
      static _CheckLimit(zz, tz) {
        let sz = Fz._LogLimitOutputs[zz];
        return sz ? sz.current++ : (sz = {
          limit: tz,
          current: 1
        }, Fz._LogLimitOutputs[zz] = sz), sz.current <= sz.limit
      }
      static _GenerateLimitMessage(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const sz = Fz._LogLimitOutputs[zz];
        if (!sz || !Fz.MessageLimitReached) return;
        const Wz = this._Levels[tz];
        sz.current === sz.limit && Fz[Wz.name](Fz.MessageLimitReached.replace(/%LIMIT%/g, "" + sz.limit).replace(/%TYPE%/g, Wz.name ?? ""))
      }
      static _AddLogEntry(zz) {
        Fz._LogCache = zz + Fz._LogCache, Fz.OnNewCacheEntry && Fz.OnNewCacheEntry(zz)
      }
      static _FormatMessage(zz) {
        const tz = zz => zz < 10 ? "0" + zz : "" + zz,
          sz = new Date;
        return "[" + tz(sz.getHours()) + ":" + tz(sz.getMinutes()) + ":" + tz(sz.getSeconds()) + "]: " + zz
      }
      static _LogDisabled(zz, tz) {}
      static _LogEnabled() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          tz = arguments.length > 1 ? arguments[1] : void 0,
          sz = arguments.length > 2 ? arguments[2] : void 0;
        const Wz = Array.isArray(tz) ? tz[0] : tz;
        if (void 0 !== sz && !Fz._CheckLimit(Wz, sz)) return;
        const Xz = Fz._FormatMessage(Wz),
          Oz = this._Levels[zz],
          oz = Array.isArray(tz) ? tz.slice(1) : [];
        Oz.logFunc && Oz.logFunc("BJS - " + Xz, ...oz);
        const vz = `<div style='color:${Oz.color}'>${Xz}</div><br>`;
        Fz._AddLogEntry(vz), Fz._GenerateLimitMessage(Wz, zz)
      }
      static get LogCache() {
        return Fz._LogCache
      }
      static ClearLogCache() {
        Fz._LogCache = "", Fz._LogLimitOutputs = {}, Fz.errorsCount = 0
      }
      static set LogLevels(zz) {
        Fz.Log = Fz._LogDisabled, Fz.Warn = Fz._LogDisabled, Fz.Error = Fz._LogDisabled;
        const tz = [Fz.MessageLogLevel, Fz.WarningLogLevel, Fz.ErrorLogLevel];
        for (const sz of tz)
          if ((zz & sz) === sz) {
            const zz = this._Levels[sz];
            Fz[zz.name] = Fz._LogEnabled.bind(Fz, sz)
          }
      }
    }
    Fz.NoneLogLevel = 0, Fz.MessageLogLevel = 1, Fz.WarningLogLevel = 2, Fz.ErrorLogLevel = 4, Fz.AllLogLevel = 7, Fz.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Fz._LogCache = "", Fz._LogLimitOutputs = {}, Fz._Levels = [{}, {
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
    }], Fz.errorsCount = 0, Fz.Log = Fz._LogEnabled.bind(Fz, Fz.MessageLogLevel), Fz.Warn = Fz._LogEnabled.bind(Fz, Fz.WarningLogLevel), Fz.Error = Fz._LogEnabled.bind(Fz, Fz.ErrorLogLevel)
  },
  38131: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Oz
    });
    var Fz = sz(36475),
      Wz = sz(36507),
      Xz = sz(38091);
    class Oz {
      constructor() {
        this.direction1 = new Fz.p(0, 1, 0), this.direction2 = new Fz.p(0, 1, 0), this.minEmitBox = new Fz.p(-.5, -.5, -.5), this.maxEmitBox = new Fz.p(.5, .5, .5)
      }
      startDirectionFunction(zz, tz, sz, Xz) {
        const Oz = (0, Wz.RandomRange)(this.direction1.x, this.direction2.x),
          oz = (0, Wz.RandomRange)(this.direction1.y, this.direction2.y),
          vz = (0, Wz.RandomRange)(this.direction1.z, this.direction2.z);
        if (Xz) return tz.x = Oz, tz.y = oz, void(tz.z = vz);
        Fz.p.TransformNormalFromFloatsToRef(Oz, oz, vz, zz, tz)
      }
      startPositionFunction(zz, tz, sz, Xz) {
        const Oz = (0, Wz.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
          oz = (0, Wz.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
          vz = (0, Wz.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
        if (Xz) return tz.x = Oz, tz.y = oz, void(tz.z = vz);
        Fz.p.TransformCoordinatesFromFloatsToRef(Oz, oz, vz, zz, tz)
      }
      clone() {
        const zz = new Oz;
        return Xz.d.DeepCopy(this, zz), zz
      }
      applyToShader(zz) {
        zz.setVector3("direction1", this.direction1), zz.setVector3("direction2", this.direction2), zz.setVector3("minEmitBox", this.minEmitBox), zz.setVector3("maxEmitBox", this.maxEmitBox)
      }
      buildUniformLayout(zz) {
        zz.addUniform("direction1", 3), zz.addUniform("direction2", 3), zz.addUniform("minEmitBox", 3), zz.addUniform("maxEmitBox", 3)
      }
      getEffectDefines() {
        return "#define BOXEMITTER"
      }
      getClassName() {
        return "BoxParticleEmitter"
      }
      serialize() {
        const zz = {};
        return zz.type = this.getClassName(), zz.direction1 = this.direction1.hsz(), zz.direction2 = this.direction2.hsz(), zz.minEmitBox = this.minEmitBox.hsz(), zz.maxEmitBox = this.maxEmitBox.hsz(), zz
      }
      parse(zz) {
        Fz.p.FromArrayToRef(zz.direction1, 0, this.direction1), Fz.p.FromArrayToRef(zz.direction2, 0, this.direction2), Fz.p.FromArrayToRef(zz.minEmitBox, 0, this.minEmitBox), Fz.p.FromArrayToRef(zz.maxEmitBox, 0, this.maxEmitBox)
      }
    }
  },
  38084: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => oz,
      g: () => Oz
    });
    var Fz = sz(36475),
      Wz = sz(36507),
      Xz = sz(38091);
    class Oz {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Wz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.radius = zz, this.height = tz, this.radiusRange = sz, this.directionRandomizer = Wz, this._tempVector = Fz.p.Zero()
      }
      startDirectionFunction(zz, tz, sz, Xz, Oz) {
        sz.position.subtractToRef(zz.getTranslation(), this._tempVector), this._tempVector.normalize(), Fz.p.TransformNormalToRef(this._tempVector, Oz, this._tempVector);
        const oz = (0, Wz.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
        let vz = Math.atan2(this._tempVector.x, this._tempVector.z);
        vz += (0, Wz.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = oz, this._tempVector.x = Math.sin(vz), this._tempVector.z = Math.cos(vz), this._tempVector.normalize(), Xz ? tz.vsz(this._tempVector) : Fz.p.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, zz, tz)
      }
      startPositionFunction(zz, tz, sz, Xz) {
        const Oz = (0, Wz.RandomRange)(-this.height / 2, this.height / 2),
          oz = (0, Wz.RandomRange)(0, 2 * Math.PI),
          vz = (0, Wz.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
          Uz = Math.sqrt(vz) * this.radius,
          Kz = Uz * Math.cos(oz),
          uz = Uz * Math.sin(oz);
        Xz ? tz.m_(Kz, Oz, uz) : Fz.p.TransformCoordinatesFromFloatsToRef(Kz, Oz, uz, zz, tz)
      }
      clone() {
        const zz = new Oz(this.radius, this.directionRandomizer);
        return Xz.d.DeepCopy(this, zz), zz
      }
      applyToShader(zz) {
        zz.setFloat("radius", this.radius), zz.setFloat("height", this.height), zz.setFloat("radiusRange", this.radiusRange), zz.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(zz) {
        zz.addUniform("radius", 1), zz.addUniform("height", 1), zz.addUniform("radiusRange", 1), zz.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderParticleEmitter"
      }
      serialize() {
        const zz = {};
        return zz.type = this.getClassName(), zz.radius = this.radius, zz.height = this.height, zz.radiusRange = this.radiusRange, zz.directionRandomizer = this.directionRandomizer, zz
      }
      parse(zz) {
        this.radius = zz.radius, this.height = zz.height, this.radiusRange = zz.radiusRange, this.directionRandomizer = zz.directionRandomizer
      }
    }
    class oz extends Oz {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Wz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Fz.p(0, 1, 0),
          Xz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Fz.p(0, 1, 0);
        super(zz, tz, sz), this.direction1 = Wz, this.direction2 = Xz
      }
      startDirectionFunction(zz, tz, sz, Xz) {
        const Oz = (0, Wz.RandomRange)(this.direction1.x, this.direction2.x),
          oz = (0, Wz.RandomRange)(this.direction1.y, this.direction2.y),
          vz = (0, Wz.RandomRange)(this.direction1.z, this.direction2.z);
        Xz ? tz.m_(Oz, oz, vz) : Fz.p.TransformNormalFromFloatsToRef(Oz, oz, vz, zz, tz)
      }
      clone() {
        const zz = new oz(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
        return Xz.d.DeepCopy(this, zz), zz
      }
      applyToShader(zz) {
        zz.setFloat("radius", this.radius), zz.setFloat("height", this.height), zz.setFloat("radiusRange", this.radiusRange), zz.setVector3("direction1", this.direction1), zz.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(zz) {
        zz.addUniform("radius", 1), zz.addUniform("height", 1), zz.addUniform("radiusRange", 1), zz.addUniform("direction1", 3), zz.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER\n#define DIRECTEDCYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderDirectedParticleEmitter"
      }
      serialize() {
        const zz = super.serialize();
        return zz.direction1 = this.direction1.hsz(), zz.direction2 = this.direction2.hsz(), zz
      }
      parse(zz) {
        super.parse(zz), Fz.p.FromArrayToRef(zz.direction1, 0, this.direction1), Fz.p.FromArrayToRef(zz.direction2, 0, this.direction2)
      }
    }
  },
  38201: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => uz
    });
    const Fz = .5 * (Math.sqrt(3) - 1),
      Wz = (3 - Math.sqrt(3)) / 6,
      Xz = 1 / 3,
      Oz = 1 / 6,
      oz = (Math.sqrt(5) - 1) / 4,
      vz = (5 - Math.sqrt(5)) / 20,
      Uz = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
      Kz = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]);
    const uz = class {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
        const tz = "function" == typeof zz ? zz : function(zz) {
          let tz = 0,
            sz = 0,
            Fz = 0,
            Wz = 1;
          const Xz = function() {
            let zz = 4022871197;
            return function(tz) {
              tz = tz.toString();
              for (let sz = 0; sz < tz.length; sz++) {
                zz += tz.charCodeAt(sz);
                let Fz = .02519603282416938 * zz;
                zz = Fz >>> 0, Fz -= zz, Fz *= zz, zz = Fz >>> 0, Fz -= zz, zz += 4294967296 * Fz
              }
              return 2.3283064365386963e-10 * (zz >>> 0)
            }
          }();
          tz = Xz(" "), sz = Xz(" "), Fz = Xz(" "), tz -= Xz(zz), tz < 0 && (tz += 1);
          sz -= Xz(zz), sz < 0 && (sz += 1);
          Fz -= Xz(zz), Fz < 0 && (Fz += 1);
          return function() {
            const zz = 2091639 * tz + 2.3283064365386963e-10 * Wz;
            return tz = sz, sz = Fz, Fz = zz - (Wz = 0 | zz)
          }
        }(zz);
        this.p = function(zz) {
          const tz = new Uint8Array(256);
          for (let sz = 0; sz < 256; sz++) tz[sz] = sz;
          for (let sz = 0; sz < 255; sz++) {
            const Fz = sz + ~~(zz() * (256 - sz)),
              Wz = tz[sz];
            tz[sz] = tz[Fz], tz[Fz] = Wz
          }
          return tz
        }(tz), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
        for (let sz = 0; sz < 512; sz++) this.perm[sz] = this.p[255 & sz], this.permMod12[sz] = this.perm[sz] % 12
      }
      noise2D(zz, tz) {
        const sz = this.permMod12,
          Xz = this.perm;
        let Oz = 0,
          oz = 0,
          vz = 0;
        const Kz = (zz + tz) * Fz,
          uz = Math.floor(zz + Kz),
          Nz = Math.floor(tz + Kz),
          bz = (uz + Nz) * Wz,
          wz = zz - (uz - bz),
          Dz = tz - (Nz - bz);
        let gz, Hz;
        wz > Dz ? (gz = 1, Hz = 0) : (gz = 0, Hz = 1);
        const Bz = wz - gz + Wz,
          Pz = Dz - Hz + Wz,
          rz = wz - 1 + 2 * Wz,
          Yz = Dz - 1 + 2 * Wz,
          xz = 255 & uz,
          mz = 255 & Nz;
        let Jz = .5 - wz * wz - Dz * Dz;
        if (Jz >= 0) {
          const zz = 3 * sz[xz + Xz[mz]];
          Jz *= Jz, Oz = Jz * Jz * (Uz[zz] * wz + Uz[zz + 1] * Dz)
        }
        let Iz = .5 - Bz * Bz - Pz * Pz;
        if (Iz >= 0) {
          const zz = 3 * sz[xz + gz + Xz[mz + Hz]];
          Iz *= Iz, oz = Iz * Iz * (Uz[zz] * Bz + Uz[zz + 1] * Pz)
        }
        let Cz = .5 - rz * rz - Yz * Yz;
        if (Cz >= 0) {
          const zz = 3 * sz[xz + 1 + Xz[mz + 1]];
          Cz *= Cz, vz = Cz * Cz * (Uz[zz] * rz + Uz[zz + 1] * Yz)
        }
        return 70 * (Oz + oz + vz)
      }
      noise3D(zz, tz, sz) {
        const Fz = this.permMod12,
          Wz = this.perm;
        let oz, vz, Kz, uz;
        const Nz = (zz + tz + sz) * Xz,
          bz = Math.floor(zz + Nz),
          wz = Math.floor(tz + Nz),
          Dz = Math.floor(sz + Nz),
          gz = (bz + wz + Dz) * Oz,
          Hz = zz - (bz - gz),
          Bz = tz - (wz - gz),
          Pz = sz - (Dz - gz);
        let rz, Yz, xz, mz, Jz, Iz;
        Hz >= Bz ? Bz >= Pz ? (rz = 1, Yz = 0, xz = 0, mz = 1, Jz = 1, Iz = 0) : Hz >= Pz ? (rz = 1, Yz = 0, xz = 0, mz = 1, Jz = 0, Iz = 1) : (rz = 0, Yz = 0, xz = 1, mz = 1, Jz = 0, Iz = 1) : Bz < Pz ? (rz = 0, Yz = 0, xz = 1, mz = 0, Jz = 1, Iz = 1) : Hz < Pz ? (rz = 0, Yz = 1, xz = 0, mz = 0, Jz = 1, Iz = 1) : (rz = 0, Yz = 1, xz = 0, mz = 1, Jz = 1, Iz = 0);
        const Cz = Hz - rz + Oz,
          ez = Bz - Yz + Oz,
          Zz = Pz - xz + Oz,
          Gz = Hz - mz + 2 * Oz,
          Tz = Bz - Jz + 2 * Oz,
          cz = Pz - Iz + 2 * Oz,
          jz = Hz - 1 + .5,
          Az = Bz - 1 + .5,
          yz = Pz - 1 + .5,
          Mz = 255 & bz,
          dz = 255 & wz,
          hz = 255 & Dz;
        let Qz = .6 - Hz * Hz - Bz * Bz - Pz * Pz;
        if (Qz < 0) oz = 0;
        else {
          const zz = 3 * Fz[Mz + Wz[dz + Wz[hz]]];
          Qz *= Qz, oz = Qz * Qz * (Uz[zz] * Hz + Uz[zz + 1] * Bz + Uz[zz + 2] * Pz)
        }
        let kz = .6 - Cz * Cz - ez * ez - Zz * Zz;
        if (kz < 0) vz = 0;
        else {
          const zz = 3 * Fz[Mz + rz + Wz[dz + Yz + Wz[hz + xz]]];
          kz *= kz, vz = kz * kz * (Uz[zz] * Cz + Uz[zz + 1] * ez + Uz[zz + 2] * Zz)
        }
        let iz = .6 - Gz * Gz - Tz * Tz - cz * cz;
        if (iz < 0) Kz = 0;
        else {
          const zz = 3 * Fz[Mz + mz + Wz[dz + Jz + Wz[hz + Iz]]];
          iz *= iz, Kz = iz * iz * (Uz[zz] * Gz + Uz[zz + 1] * Tz + Uz[zz + 2] * cz)
        }
        let Lz = .6 - jz * jz - Az * Az - yz * yz;
        if (Lz < 0) uz = 0;
        else {
          const zz = 3 * Fz[Mz + 1 + Wz[dz + 1 + Wz[hz + 1]]];
          Lz *= Lz, uz = Lz * Lz * (Uz[zz] * jz + Uz[zz + 1] * Az + Uz[zz + 2] * yz)
        }
        return 32 * (oz + vz + Kz + uz)
      }
      noise4D(zz, tz, sz, Fz) {
        const Wz = this.perm;
        let Xz, Oz, Uz, uz, Nz;
        const bz = (zz + tz + sz + Fz) * oz,
          wz = Math.floor(zz + bz),
          Dz = Math.floor(tz + bz),
          gz = Math.floor(sz + bz),
          Hz = Math.floor(Fz + bz),
          Bz = (wz + Dz + gz + Hz) * vz,
          Pz = zz - (wz - Bz),
          rz = tz - (Dz - Bz),
          Yz = sz - (gz - Bz),
          xz = Fz - (Hz - Bz);
        let mz = 0,
          Jz = 0,
          Iz = 0,
          Cz = 0;
        Pz > rz ? mz++ : Jz++, Pz > Yz ? mz++ : Iz++, Pz > xz ? mz++ : Cz++, rz > Yz ? Jz++ : Iz++, rz > xz ? Jz++ : Cz++, Yz > xz ? Iz++ : Cz++;
        const ez = mz >= 3 ? 1 : 0,
          Zz = Jz >= 3 ? 1 : 0,
          Gz = Iz >= 3 ? 1 : 0,
          Tz = Cz >= 3 ? 1 : 0,
          cz = mz >= 2 ? 1 : 0,
          jz = Jz >= 2 ? 1 : 0,
          Az = Iz >= 2 ? 1 : 0,
          yz = Cz >= 2 ? 1 : 0,
          Mz = mz >= 1 ? 1 : 0,
          dz = Jz >= 1 ? 1 : 0,
          hz = Iz >= 1 ? 1 : 0,
          Qz = Cz >= 1 ? 1 : 0,
          kz = Pz - ez + vz,
          iz = rz - Zz + vz,
          Lz = Yz - Gz + vz,
          lz = xz - Tz + vz,
          nz = Pz - cz + 2 * vz,
          az = rz - jz + 2 * vz,
          qz = Yz - Az + 2 * vz,
          Sz = xz - yz + 2 * vz,
          Vz = Pz - Mz + 3 * vz,
          Rz = rz - dz + 3 * vz,
          pz = Yz - hz + 3 * vz,
          fz = xz - Qz + 3 * vz,
          Ez = Pz - 1 + 4 * vz,
          zt = rz - 1 + 4 * vz,
          tt = Yz - 1 + 4 * vz,
          st = xz - 1 + 4 * vz,
          Ft = 255 & wz,
          Wt = 255 & Dz,
          Xt = 255 & gz,
          Ot = 255 & Hz;
        let ot = .6 - Pz * Pz - rz * rz - Yz * Yz - xz * xz;
        if (ot < 0) Xz = 0;
        else {
          const zz = Wz[Ft + Wz[Wt + Wz[Xt + Wz[Ot]]]] % 32 * 4;
          ot *= ot, Xz = ot * ot * (Kz[zz] * Pz + Kz[zz + 1] * rz + Kz[zz + 2] * Yz + Kz[zz + 3] * xz)
        }
        let vt = .6 - kz * kz - iz * iz - Lz * Lz - lz * lz;
        if (vt < 0) Oz = 0;
        else {
          const zz = Wz[Ft + ez + Wz[Wt + Zz + Wz[Xt + Gz + Wz[Ot + Tz]]]] % 32 * 4;
          vt *= vt, Oz = vt * vt * (Kz[zz] * kz + Kz[zz + 1] * iz + Kz[zz + 2] * Lz + Kz[zz + 3] * lz)
        }
        let Ut = .6 - nz * nz - az * az - qz * qz - Sz * Sz;
        if (Ut < 0) Uz = 0;
        else {
          const zz = Wz[Ft + cz + Wz[Wt + jz + Wz[Xt + Az + Wz[Ot + yz]]]] % 32 * 4;
          Ut *= Ut, Uz = Ut * Ut * (Kz[zz] * nz + Kz[zz + 1] * az + Kz[zz + 2] * qz + Kz[zz + 3] * Sz)
        }
        let Kt = .6 - Vz * Vz - Rz * Rz - pz * pz - fz * fz;
        if (Kt < 0) uz = 0;
        else {
          const zz = Wz[Ft + Mz + Wz[Wt + dz + Wz[Xt + hz + Wz[Ot + Qz]]]] % 32 * 4;
          Kt *= Kt, uz = Kt * Kt * (Kz[zz] * Vz + Kz[zz + 1] * Rz + Kz[zz + 2] * pz + Kz[zz + 3] * fz)
        }
        let ut = .6 - Ez * Ez - zt * zt - tt * tt - st * st;
        if (ut < 0) Nz = 0;
        else {
          const zz = Wz[Ft + 1 + Wz[Wt + 1 + Wz[Xt + 1 + Wz[Ot + 1]]]] % 32 * 4;
          ut *= ut, Nz = ut * ut * (Kz[zz] * Ez + Kz[zz + 1] * zt + Kz[zz + 2] * tt + Kz[zz + 3] * st)
        }
        return 27 * (Xz + Oz + Uz + uz + Nz)
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);