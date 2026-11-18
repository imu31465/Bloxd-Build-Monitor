export const id = 56;
export const ids = [56];
export const modules = {
  38233: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Uy,
      e: () => hy
    });
    const Uy = "The world isn't loaded, so no blocks can be seen.",
      hy = "The world isn't loaded, so nothing in it can be seen."
  },
  37761: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Sy,
      g: () => Ey,
      i: () => sy
    });
    var Uy = Wy(2444);
    const hy = 0,
      fy = 2,
      Zy = 3,
      cb = 4;
    class Py {
      constructor(yb, bb) {
        this.width = yb, this.Hy = bb, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(yb * bb)
      }
      push(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Wy = this.data.subarray(this.next * this.width, (this.next + 1) * this.width);
        for (let Uy = 0; Uy < this.width; Uy++) Wy[Uy] = yb[bb + Uy];
        return this.next = (this.next + 1) % this.Hy, this.size = Math.min(this.size + 1, this.Hy), Wy
      }
      lines() {
        const yb = [],
          bb = (this.next - this.size + this.Hy) % this.Hy;
        for (let Wy = 0; Wy < this.size; Wy++) {
          const Uy = (bb + Wy) % this.Hy * this.width;
          yb.push(Array.from(this.data.subarray(Uy, Uy + this.width)).join(","))
        }
        return yb
      }
    }

    function oy(yb) {
      return Number.isFinite(yb) ? String(Math.round(10 * yb) / 10) : String(yb)
    }

    function By(yb) {
      return Number.isFinite(yb) ? yb.toFixed(1) : String(yb)
    }
    class Ky {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.VUy = 0, this.pastLimit = 0, this.lockSkips = 0, this.uZ = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
    }
    class ey {
      constructor() {
        var yb = this;
        this.tally = new Ky, this.records = new Py(10, 3600), this.events = new Py(4, 12e3), this.event = new Float64Array(4), this.take = null, this.client = "js", this.started = !1, this.record = function(bb) {
          let Wy = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const [Uy, Py, Ky, ey, qb, sy, Sy, Ey, ly, mb] = yb.records.push(bb, Wy), Cy = yb.tally;
          switch (Cy.frames++, Sy) {
            case hy:
              return void Cy.idle++;
            case cb:
              return void Cy.uZ++;
            case Zy:
              return Cy.lockSkips++, void(0 === Ky && 0 === ey || yb.outlier(`lock skip dropped raw (${oy(Ky)}, ${oy(ey)}) at ${By(Uy)} ms`))
          }
          Cy.looked++, Number.isFinite(Py) && (Cy.dtMin = Math.min(Cy.dtMin, Py), Cy.dtMax = Math.max(Cy.dtMax, Py), Cy.dtSum += Py, Py > 0 && (Cy.peakRate = Math.max(Cy.peakRate, Math.hypot(qb, sy) / Py))), Cy.raw[0] += Ky, Cy.raw[1] += ey, Cy.turned[0] += qb, Cy.turned[1] += sy;
          const Ty = Math.abs(Ky) > mb || Math.abs(ey) > mb,
            Vy = `raw (${oy(Ky)}, ${oy(ey)}) over ${By(Py)} ms, limit ${oy(mb)}, filter v (${Ey.toFixed(3)}, ${ly.toFixed(3)}) px/ms, at ${By(Uy)} ms`;
          Sy === fy ? (Cy.VUy++, yb.outlier(`spike put right: ${Vy} -> turned (${oy(qb)}, ${oy(sy)})`)) : Ty ? (Cy.pastLimit++, yb.outlier(`kept past limit: ${Vy}`)) : Py > 50 && (Cy.longFrames++, yb.outlier(`long frame: ${Vy}, turned in full`))
        }, this.onMouseMove = yb => {
          const bb = this.tally,
            {
              movementX: Wy,
              movementY: Uy
            } = yb;
          bb.events++;
          const hy = Math.max(Math.abs(Wy), Math.abs(Uy));
          bb.eventMax = Math.max(bb.eventMax, hy);
          const fy = null !== document.pointerLockElement,
            Zy = this.event;
          Zy[0] = yb.timeStamp, Zy[1] = Wy, Zy[2] = Uy, Zy[3] = fy ? 1 : 0, this.events.push(Zy), hy >= 200 && (bb.bigEvents++, this.eventOutlier(`big mousemove (${Wy}, ${Uy}) at ${By(yb.timeStamp)} ms, lock ${fy?"kW":"free"}`))
        }, this.onLockChange = () => {
          const yb = document.pointerLockElement;
          (0, Uy.h)("look", `pointer lock ${yb?`gained (${yb.tagName.toLowerCase()})`:"lost"} at ${By(performance.now())} ms`)
        }, this.onLockError = () => {
          (0, Uy.h)("look", `pointer lock request failed at ${By(performance.now())} ms`)
        }, this.onVisibility = () => {
          (0, Uy.h)("look", `page ${document.visibilityState} at ${By(performance.now())} ms`)
        }, this.flush = () => {
          this.takeRecords();
          const yb = this.tally;
          if (this.tally = new Ky, 0 === yb.events && 0 === yb.raw[0] && 0 === yb.raw[1] && 0 === yb.lockSkips && 0 === yb.VUy && 0 === yb.dropped) return;
          const bb = yb.looked > 0 ? yb.dtSum / yb.looked : NaN,
            Wy = [`${yb.frames} frames (${yb.looked} looked, ${yb.idle} idle${"wasm"===this.client?`, ${yb.uZ} carried`:""})`, `dt avg ${By(bb)} min ${By(yb.dtMin)} max ${By(yb.dtMax)}, ${yb.longFrames} long`, `${yb.events} mousemoves (max ${oy(yb.eventMax)} px, ${yb.bigEvents} big)`, `raw (${oy(yb.raw[0])}, ${oy(yb.raw[1])}) turned (${oy(yb.turned[0])}, ${oy(yb.turned[1])})`, `peak ${yb.peakRate.toFixed(2)} px/ms`, `put right ${yb.VUy}, past limit ${yb.pastLimit}, lock skips ${yb.lockSkips}`, "lock " + (document.pointerLockElement ? "kW" : "free")];
          yb.dropped > 0 && Wy.push(`${yb.dropped} doubled spike copies dropped`), yb.lost > 0 && Wy.push(`${yb.lost} records lost`), yb.suppressed > 0 && Wy.push(`${yb.suppressed} outlier lines not shown`), (0, Uy.h)("look", `1s: ${Wy.join("; ")}`)
        }, this.dump = () => [`look records (${this.client}): nowMs,dtMs,rawX,rawY,turnedX,turnedY,outcome,vX,vY,limit`, ...this.records.lines(), "mousemove events: timeStamp,movementX,movementY,locked", ...this.events.lines()].join("\n")
      }
      start(yb, bb) {
        this.client = yb, this.take = bb;
        const {
          screen: Wy
        } = window;
        (0, Uy.h)("look", `start: ${yb} client, dpr ${window.devicePixelRatio}, screen ${Wy.width}x${Wy.height}, pointer lock ${document.pointerLockElement?"kW":"free"}`), this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), (0, Uy.f)("look", this.dump))
      }
      outlier(yb) {
        const bb = this.tally;
        bb.outliers >= 20 ? bb.suppressed++ : (bb.outliers++, (0, Uy.h)("look", yb))
      }
      eventOutlier(yb) {
        const bb = this.tally;
        bb.eventLines >= 10 ? bb.suppressed++ : (bb.eventLines++, (0, Uy.h)("look", yb))
      }
      takeRecords() {
        var yb;
        const bb = null === (yb = this.take) || void 0 === yb ? void 0 : yb.call(this);
        if (bb && bb.length >= 2) {
          this.tally.lost += bb[0], this.tally.dropped += bb[1];
          for (let yb = 2; yb + 10 <= bb.length; yb += 10) this.record(bb, yb)
        }
      }
      droppedCopy() {
        this.tally.dropped++
      }
      endTake() {
        this.takeRecords(), this.take = null
      }
    }
    let qb = null;

    function sy(yb) {
      let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return qb ??= new ey, qb.start(yb, bb), qb.record
    }

    function Sy() {
      var yb;
      null === (yb = qb) || void 0 === yb || yb.endTake()
    }

    function Ey() {
      var yb;
      null === (yb = qb) || void 0 === yb || yb.droppedCopy()
    }
  },
  8350: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Uy
    });
    const Uy = new Set(["chunkBorders"])
  },
  35580: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Uy,
      f: () => cb
    });
    const Uy = {
      yaw: .61 * Math.PI,
      pitch: Math.PI / 2.05,
      radius: 30
    };

    function hy(yb, bb) {
      yb instanceof Promise ? yb.then(bb).catch((yb => {
        console.error("Couldn't open the preview", yb)
      })) : bb(yb)
    }
    class fy {
      constructor(yb) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, hy(yb, (yb => {
          this.closed ? yb.close() : (this.opened = yb, null !== this.size && yb.resize(this.size.width, this.size.height), null !== this.view && yb.show(this.view))
        }))
      }
      show(yb) {
        var bb;
        this.view = yb, null === (bb = this.opened) || void 0 === bb || bb.show(yb)
      }
      resize(yb, bb) {
        var Wy;
        this.size = {
          width: yb,
          height: bb
        }, null === (Wy = this.opened) || void 0 === Wy || Wy.resize(yb, bb)
      }
      close() {
        var yb;
        this.closed = !0, null === (yb = this.opened) || void 0 === yb || yb.close(), this.opened = null
      }
    }
    class Zy {
      constructor(yb) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(yb).then((yb => yb.ready)), hy(yb, (yb => {
          this.closed ? yb.close() : (this.opened = yb, null !== this.size && yb.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var yb, bb;
        return null !== (yb = null === (bb = this.opened) || void 0 === bb ? void 0 : bb.isReady()) && void 0 !== yb && yb
      }
      setCosmetic(yb, bb) {
        var Wy;
        null === (Wy = this.opened) || void 0 === Wy || Wy.setCosmetic(yb, bb)
      }
      playEmote(yb) {
        var bb;
        null === (bb = this.opened) || void 0 === bb || bb.playEmote(yb)
      }
      resetCamera() {
        var yb;
        null === (yb = this.opened) || void 0 === yb || yb.resetCamera()
      }
      async untilDrawn(yb) {
        var bb;
        await this.ready, await (null === (bb = this.opened) || void 0 === bb ? void 0 : bb.untilDrawn(yb))
      }
      resize(yb, bb) {
        var Wy;
        this.size = {
          width: yb,
          height: bb
        }, null === (Wy = this.opened) || void 0 === Wy || Wy.resize(yb, bb)
      }
      close() {
        var yb;
        this.closed = !0, null === (yb = this.opened) || void 0 === yb || yb.close(), this.opened = null
      }
    }
    const cb = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(yb) {
        this.host = yb
      }
      setDefaultHost(yb) {
        this.makeDefault = yb
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(yb) {
        return new fy(this.current().openMob(yb))
      }
      openPet(yb) {
        return new fy(this.current().openPet(yb))
      }
      openMobLineup(yb) {
        return new fy(this.current().openMobLineup(yb))
      }
      openCharacter(yb) {
        return new Zy(this.current().openCharacter(yb))
      }
    }
  },
  37888: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Ky,
      e: () => ey
    });
    var Uy = Wy(143),
      hy = Wy(1322),
      fy = Wy(1317),
      Zy = Wy(2539),
      cb = Wy(1339),
      Py = Wy(35272),
      oy = Wy(942),
      By = Wy(37862);

    function Ky(yb) {
      (0, Zy.c)("matchmake_failed", yb, Uy.i[Uy.i.SHADER_PACK])
    }
    async function ey(yb, bb) {
      var Wy;
      const Uy = null === (Wy = await By.shaderPackPage.preload()) || void 0 === Wy ? void 0 : Wy.listing,
        Zy = (0, Py.d)();
      Uy && null !== Zy && await cb.c.reportShaderPackSession(yb, {
        packId: Uy.packId,
        sourceHash: Uy.sourceHash,
        game: (0, fy.g)(bb, hy.p, "other"),
        playSessionId: Zy,
        visitSessionId: (0, oy.d)()
      })
    }
  },
  37720: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => cb
    });
    var Uy = Wy(23),
      hy = Wy(1145),
      fy = Wy(2767);
    const Zy = "Reconnecting";
    class cb {
      constructor(yb) {
        this.hooks = yb, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = yb => {
          yb.persisted || this.qh()
        }, this.controller = new fy.d((bb => yb.reconnect(bb)), {
          isSessionLive: () => !this.ended && yb.isLive(),
          onPhaseChanged: yb => {
            this.onPhaseChanged(yb)
          },
          onReconnected: bb => {
            yb.onReconnected(bb)
          },
          onGaveUp: bb => {
            !this.ended && yb.isLive() && yb.onGaveUp(this.sessionBased, bb)
          }
        })
      }
      onInitialInfo(yb, bb) {
        this.graceMs = yb, this.sessionBased = bb
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(yb) {
        this.ended || this.controller.onConnectionLost(yb, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      qh() {
        const yb = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          bb = this.controller.heldToken;
        this.end(), yb && "" !== bb && this.hooks.releaseSeat(bb)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(yb) {
        const bb = "frozen" === yb || "resuming" === yb;
        bb !== this.stopped && (this.stopped = bb, this.hooks.freeze(bb));
        const Wy = "frozen" === yb || "resuming" === yb && this.frozen;
        Wy && !this.frozen ? (0, hy.h)(Zy) : !Wy && this.frozen && (0, hy.g)(Zy), this.frozen = Wy, this.setListening("connected" !== yb), Uy.g.EZ(fy.o, Wy ? "frozen" : yb)
      }
      setListening(yb) {
        yb !== this.listening && (this.listening = yb, yb ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  37728: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Uy
    });
    class Uy {
      constructor(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = yb, this.now = bb, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const yb = this.now(),
            bb = yb - this.lastCheckAt <= 2e3;
          this.lastCheckAt = yb;
          const Wy = "visible" === document.visibilityState;
          !Wy || bb && this.wasVisible || (this.resumedAt = yb), this.wasVisible = Wy, Wy && yb - this.lastHeardAt > 12e3 && yb - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = bb(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  37875: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => hy
    });
    let Uy = !1;
    async function hy(yb, bb) {
      if (!Uy) {
        Uy = !0;
        try {
          const [{
            reloadBloxd: Uy
          }, {
            NotificationProvider: hy
          }] = await Promise.all([Promise.resolve().then((() => Wy(1496))), Promise.resolve().then((() => Wy(1207)))]);
          if (!yb || !0 === await hy.showPromptPopup({
              title: "Unsaved changes",
              subtitle: "Exit and lose your unsaved changes?",
              confirmText: "Exit",
              destructive: !0,
              cancelText: "Cancel",
              unlockPointerKey: "replayExitUnsavedChanges"
            }).getResult()) return void Uy(bb)
        } catch (hy) {
          console.error("Leaving the replay failed", hy)
        }
        Uy = !1
      }
    }
  },
  5740: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => cb,
      e: () => fy,
      f: () => hy,
      j: () => Zy
    });
    const Uy = new WeakMap;

    function hy(yb, bb) {
      yb.signal.aborted || Uy.set(yb.signal, bb), yb.abort(bb)
    }

    function fy(yb) {
      var bb;
      const Wy = null !== (bb = null === yb || void 0 === yb ? void 0 : yb.reason) && void 0 !== bb ? bb : yb && Uy.get(yb);
      if (void 0 !== Wy && null !== Wy) return Wy;
      const hy = new DOMException("signal is aborted without reason", "AbortError");
      return null !== yb && void 0 !== yb && yb.aborted && Uy.set(yb, hy), hy
    }

    function Zy(yb) {
      if (null !== yb && void 0 !== yb && yb.aborted) throw fy(yb)
    }
    class cb {
      constructor(yb) {
        this.outer = yb, this.controller = new AbortController, this.onOuterAbort = () => {
          hy(this.controller, fy(this.outer))
        }, null !== yb && void 0 !== yb && yb.aborted ? this.onOuterAbort() : null === yb || void 0 === yb || yb.addEventListener("abort", this.onOuterAbort, {
          once: !0
        })
      }
      get signal() {
        return this.controller.signal
      }
      unfollow() {
        var yb;
        null === (yb = this.outer) || void 0 === yb || yb.removeEventListener("abort", this.onOuterAbort)
      }
    }
  },
  37735: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => hy
    });
    var Uy = Wy(5740);

    function hy(yb, bb) {
      return new Promise(((Wy, hy) => {
        if (null !== bb && void 0 !== bb && bb.aborted) return void hy((0, Uy.e)(bb));
        const fy = () => {
            clearTimeout(Zy), hy((0, Uy.e)(bb))
          },
          Zy = setTimeout((() => {
            null === bb || void 0 === bb || bb.removeEventListener("abort", fy), Wy()
          }), yb);
        null === bb || void 0 === bb || bb.addEventListener("abort", fy, {
          once: !0
        })
      }))
    }
  },
  37743: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Py,
      d: () => oy
    });
    var Uy = Wy(167),
      hy = Wy(19),
      fy = Wy(1052),
      Zy = Wy(1524),
      cb = Wy(987);
    async function Py(yb, bb) {
      return function(yb) {
        return "object" === typeof yb && null !== yb && yb.code === Uy.b.VpnIp.code
      }(bb) && function(yb) {
        return hy.d.get("reactNativeFeatureFlags").appCheck && yb.isLoggedIn() && !yb.hasTriedAppAttestation()
      }(yb) && await async function(yb) {
        try {
          const bb = await (0, Zy.e)();
          if (null === bb) return console.warn("The app couldn't get an App Check token"), yb.markAppAttestationTried(), !1;
          const {
            "3PSIDMCPP": Wy
          } = await (0, cb.postJsonWithMetricsCookiesAndJsonResponse)(`${fy.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: bb.token
          }, {
            retries: 0
          }, yb.getMetricsCookies());
          return yb.setAppAttestedAuthJwt(Wy), !0
        } catch (bb) {
          return console.error("Failed to attest the app:", bb), !1
        }
      }(yb)
    }
    async function oy(yb, bb) {
      try {
        return await bb()
      } catch (Wy) {
        if (!await Py(yb, Wy)) throw Wy
      }
      return bb()
    }
  },
  39541: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Py
    });
    var Uy = Wy(1506);
    const hy = 33177600,
      fy = 3e4;
    let Zy = !1;

    function cb(yb, bb, Wy) {
      if (!yb.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (Zy) return Promise.reject(new Error("A screenshot is already being taken"));
      Zy = !0;
      const Uy = function(yb, bb, Wy) {
        const Uy = Math.max(1, yb),
          fy = Math.max(1, bb),
          Zy = Math.min(1, Wy / Math.max(Uy, fy), Math.sqrt(hy / (Uy * fy)));
        return {
          width: Math.max(1, Math.floor(Uy * Zy)),
          height: Math.max(1, Math.floor(fy * Zy))
        }
      }(bb, Wy, yb.maxTextureSize);
      return yb.resize(Uy.width, Uy.height), new Promise(((bb, Wy) => {
        let Uy, hy = 2,
          cb = null;
        const Py = () => {
          var bb;
          Zy = !1, null === (bb = cb) || void 0 === bb || bb(), clearTimeout(Uy), yb.restoreSize()
        };
        Uy = setTimeout((() => {
          Py(), Wy(new Error("No frame was drawn to capture"))
        }), fy), cb = yb.onFrameDrawn((() => {
          if (hy--, hy > 0) return;
          const {
            canvas: Uy
          } = yb, fy = {
            width: Uy.width,
            height: Uy.height
          };
          try {
            Uy.toBlob((yb => {
              yb ? bb({
                blob: yb,
                ...fy
              }) : Wy(new Error("The canvas gave no image"))
            }), "image/png")
          } catch (Zy) {
            Wy(Zy)
          } finally {
            Py()
          }
        }))
      }))
    }
    async function Py(yb, bb, Wy) {
      try {
        const hy = await cb(yb, bb, Wy);
        (0, Uy.b)(hy.blob, `bloxd-screenshot-${hy.width}x${hy.height}-${Date.now()}.png`)
      } catch (hy) {
        console.error("Error taking screenshot:", hy)
      }
    }
  },
  8397: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => cb
    });
    var Uy = Wy(167),
      hy = Wy(1541),
      fy = Wy(33);
    const Zy = 2;

    function cb() {
      let yb = Py("chunkHorizAddDist", Uy.c.defaultChunkHorizAddDistance),
        bb = Py("chunkVertAddDist", Uy.c.defaultChunkVertAddDistance);
      return yb = (0, hy.f)(yb, Zy, Uy.c.maxChunkHorizAddDistance), bb = (0, hy.f)(bb, Zy, Uy.c.maxChunkVertAddDistance), [yb, bb]
    }

    function Py(yb, bb) {
      const Wy = fy.e.getItem(yb),
        Uy = "number" === typeof Wy || "string" === typeof Wy ? Number(Wy) : Number.NaN;
      return Number.isFinite(Uy) ? Uy : bb
    }
  },
  37730: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Ky,
      i: () => oy
    });
    var Uy = Wy(167),
      hy = Wy(37735),
      fy = Wy(5740);
    const Zy = [250, 500, 1e3, 2e3, 1250],
      cb = 406;

    function Py(yb) {
      if ("object" !== typeof yb || null === yb) return !1;
      const {
        code: bb,
        message: Wy
      } = yb, hy = Uy.b.duplicateLobbyNameError;
      return (bb === hy.code || bb === cb) && (Wy === hy.text || Wy === hy.text + Uy.f)
    }
    async function oy(yb, bb) {
      let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : hy.b;
      for (let hy = 0;; hy++) {
        let cb;
        (0, fy.j)(bb);
        try {
          return await yb()
        } catch (Uy) {
          if (cb = Zy[hy], void 0 === cb || !Py(Uy)) throw Uy
        }
        await Wy(cb, bb)
      }
    }
    const By = new Set([Uy.b.duplicateLobbyNameError.code, Uy.b.lobbyCantBeCreated.code, Uy.b.roomDisposedEarlyError.code, Uy.b.roomDisposedLateError.code, Uy.b.serverRoomLimitReached.code]);

    function Ky(yb) {
      if (Py(yb)) return !0;
      const bb = "object" === typeof yb && null !== yb ? yb.code : void 0;
      return "number" === typeof bb && By.has(bb)
    }
  },
  37436: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => fy,
      f: () => Py,
      j: () => cb,
      k: () => Zy
    });
    const Uy = "A valid external Instance reference no longer exists.",
      hy = [
        [1e4, "<10s"],
        [6e4, "<1m"],
        [3e5, "<5m"],
        [18e5, "<30m"]
      ];
    const fy = {
      WebGPU: "WebGPU device lost",
      WebGL2: "WebGL2 context lost"
    };

    function Zy(yb, bb) {
      return yb ? "frames_refused" : arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? "browser_destroyed" : function(yb) {
        var bb;
        const Wy = null !== (bb = /Device removed reason: (?!S_OK)([A-Z][A-Z0-9_]+)/.exec(yb)) && void 0 !== bb ? bb : /failed with ([A-Z][A-Z0-9_]+)/.exec(yb);
        return Wy ? Wy[1] : yb.includes(Uy) ? "gpu_process_lost" : "other"
      }(bb)
    }

    function cb(yb) {
      return `${(null===yb||void 0===yb?void 0:yb.vendor)||"unknown vendor"} ${(null===yb||void 0===yb?void 0:yb.architecture)||"unknown architecture"}`
    }

    function Py(yb) {
      var bb;
      const Wy = hy.find((bb => {
        let [Wy] = bb;
        return yb < Wy
      }));
      return null !== (bb = null === Wy || void 0 === Wy ? void 0 : Wy[1]) && void 0 !== bb ? bb : "30m+"
    }
  },
  37817: (yb, bb, Wy) => {
    function Uy(yb, bb) {
      const Wy = yb || 4;
      return Wy <= 6 ? 1 : Wy <= 8 || bb ? 2 : 3
    }
    Wy.d(bb, {
      d: () => Uy
    })
  },
  37813: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Zy
    });
    var Uy = Wy(248),
      hy = Wy(139),
      fy = Wy(33);

    function Zy() {
      fy.e.setItem(Uy.Jb, fy.e.getItem(Uy.Jb) + 1), (0, hy.o)() && fy.e.setItem(Uy.Fb, fy.e.getItem(Uy.Fb) + 1)
    }
  },
  35272: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => ey,
      h: () => By,
      l: () => qb,
      m: () => Ky
    });
    var Uy = Wy(258),
      hy = Wy(568),
      fy = Wy(945),
      Zy = Wy(33);
    const cb = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      Py = "playSessionGameNameWithVariation",
      oy = "wasMatchmakePlayer";

    function By() {
      let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zy.g;
      (0, fy.j)(yb, cb)
    }

    function Ky() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zy.g).setItem(oy, !0)
    }

    function ey() {
      let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zy.g;
      return (0, fy.d)(yb, cb)
    }

    function qb(yb) {
      let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Zy.g;
      const Wy = (0, fy.d)(bb, cb),
        By = function(yb) {
          const bb = yb.getItem(Py);
          return "string" !== typeof bb ? null : bb
        }(bb),
        Ky = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zy.g).getItem(oy)
        }(bb);
      let ey;
      return ey = null !== Wy && null !== By && (0, fy.g)(bb, cb) && function(yb, bb, Wy) {
          const hy = (0, Uy.Rb)(yb),
            fy = (0, Uy.Rb)(bb),
            Zy = (0, Uy.Mb)(yb),
            cb = (0, Uy.Mb)(bb);
          return !(hy !== fy || !Wy) || hy === fy && Zy === cb
        }(By, yb, Ky) ? Wy : (0, hy.e)(), (0, fy.k)(bb, cb, ey), bb.setItem(Py, yb),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zy.g).removeItem(oy)
        }(bb), ey
    }
  },
  35269: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Ey,
      g: () => ly
    });
    var Uy = Wy(865),
      hy = Wy(552),
      fy = Wy(258),
      Zy = Wy(873),
      cb = Wy(562),
      Py = Wy(3725),
      oy = Wy(94),
      By = Wy(139),
      Ky = Wy(1496),
      ey = Wy(105),
      qb = Wy(35272),
      sy = Wy(33),
      Sy = Wy(942);

    function Ey() {
      var yb, bb;
      return [...null !== (yb = navigator.languages) && void 0 !== yb ? yb : [null !== (bb = navigator.language) && void 0 !== bb ? bb : "none"], "En-GB"]
    }

    function ly(yb, bb, Wy, ly, mb) {
      const Cy = (0, Uy.p)(bb) ? (0, Uy.v)(bb) : null,
        Ty = {
          cookies: (0, Ky.getAllCookiesForGameNameWithVariation)(bb),
          isMobile: (0, oy.isMobile)(),
          isUsingCustomGameTexturePack: null !== Cy && mb(Cy),
          generalCookies: {
            joinDiscord: !!sy.e.getItem("DiscordPressed"),
            newGo: Py.c,
            ...yb.getMetricsCookies(),
            trafficCode: ly,
            compliance: oy.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, oy.getBrowserName)(),
            version: (0, oy.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, oy.getPlatformType)(),
            deviceType: (0, ey.b)()
          },
          isLoggedIn: yb.isLoggedIn(),
          lobbyName: Wy,
          languages: Ey(),
          version: hy.b,
          siteUsed: By.u,
          subsiteUsed: By.B,
          playSessionId: (0, qb.l)(bb),
          visitSessionId: (0, Sy.d)(),
          clientReason: cb.h.reason
        };
      return null !== Cy && (0, fy.yc)(Cy) ? (Ty.lobbyName = (0, Uy.l)(Cy, (0, Uy.r)(bb), Wy), {
        roomName: `classic_${Zy.e}`,
        joinOptions: Ty
      }) : {
        roomName: bb,
        joinOptions: Ty
      }
    }
  },
  37746: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Uy,
      d: () => hy
    });
    const Uy = 45e3;
    class hy extends Error {
      constructor() {
        super("The game server didn't answer in time"), this.name = "SeatRequestTimedOut"
      }
    }
  },
  37895: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Uy
    });
    const Uy = "Traffic checks failed! Please use Chrome, disable extensions and refresh your page. Report on Discord if this persists."
  },
  39177: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => cb
    });
    var Uy = Wy(38233);

    function hy(yb) {
      return {
        current: () => yb,
        watch: () => () => {}
      }
    }

    function fy() {}
    const Zy = Object.freeze([0, 0, 0]),
      cb = {
        states: {
          health: hy({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: hy({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: hy({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: hy({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: hy({}),
          creativeVisibility: hy({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: hy(null),
          heldItemAim: hy({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: hy(!1),
          gliderBoostFuel: hy(0),
          flight: hy({
            canFly: !1,
            flying: !1
          }),
          crafting: hy({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: hy({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: hy({}),
          fullInventory: hy(!1),
          crosshairTarget: hy({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: hy(!0),
          replay: hy(null),
          replayEdits: hy(null),
          replayRecorder: hy({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: hy(!1)
        },
        events: {
          hotbarSlotRequested: {
            watch: () => () => {}
          },
          hotbarScrolled: {
            watch: () => () => {}
          },
          hotbarDropRequested: {
            watch: () => () => {}
          },
          inventoryDropRequested: {
            watch: () => () => {}
          },
          numberKeyPressed: {
            watch: () => () => {}
          },
          chestToggled: {
            watch: () => () => {}
          },
          chestRefreshed: {
            watch: () => () => {}
          },
          inventorySynced: {
            watch: () => () => {}
          },
          enchantingTableOpened: {
            watch: () => () => {}
          },
          cosmeticsUpdated: {
            watch: () => () => {}
          },
          shotDamageToShow: {
            watch: () => () => {}
          },
          boardEditRequested: {
            watch: () => () => {}
          },
          kill: {
            watch: () => () => {}
          },
          chatReceived: {
            watch: () => () => {}
          },
          ironChestOpenRequested: {
            watch: () => () => {}
          },
          localEffectUpdated: {
            watch: () => () => {}
          },
          localPlayerAliveSet: {
            watch: () => () => {}
          },
          replayUiActionRequested: {
            watch: () => () => {}
          },
          replayViewerRequested: {
            watch: () => () => {}
          }
        },
        commands: {
          selectHotbarSlot: fy,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: fy,
          setInventoryOpen: fy,
          changeIronChestPasskey: fy,
          dragReplayCamera: fy,
          applyTemporaryThirdPerson: fy,
          holdEmoteWheel: fy,
          recordFlyingMiddleText: fy,
          focusCrafting: fy,
          craftRecipe: () => ({
            UH: 0,
            cL: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: fy,
          setShopOpen: fy,
          buyShopItem: fy,
          sendChatMessage: fy,
          ignorePlayer: fy,
          reportPlayer: fy,
          reportWorldCodeChat: fy,
          requestDiscordReportKey: fy,
          reportLobbyOrGame: fy,
          playEmote: fy,
          updateMyCosmetic: fy,
          writeOnBoard: fy,
          writeBook: fy,
          writeNameTag: fy,
          setCustomLobbyBlock: fy,
          openIronChest: fy,
          sendCodeCollab: fy,
          clickCodeBlock: fy,
          bindCustomButtonKeys: fy,
          pressCustomButton: fy,
          moveReplayFreecam: fy,
          holdReplayFreecamVertical: fy,
          respawn: fy,
          wakeUp: fy,
          requestLeaderboard: fy,
          completeTask: fy,
          setServerCookie: fy,
          answerUiRequest: fy,
          chooseRewardedAd: fy,
          setCameraZoom: fy,
          setCrosshairInteractPrompt: fy,
          setLookSensitivity: fy,
          replayAction: fy,
          setReplayPlaying: fy,
          seekReplay: fy,
          setReplayCameraMode: fy,
          syncReplayCameraMode: fy,
          setReplayCameraKeyframe: fy,
          moveReplayCameraKeyframe: fy,
          deleteReplayCameraKeyframes: fy,
          setReplayPlaybackMark: fy,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: fy,
          exportReplayVideo: fy,
          toggleRecording: fy,
          saveClip: fy,
          setRecorderPrefs: fy,
          setReplayViewerOpen: fy
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => Uy.b,
          worldCodeAiGameState: () => Uy.e
        },
        lookups: {
          localPos: () => Zy,
          momentumFrac: () => 0,
          screenPos: () => ({
            x: 0,
            y: 0
          }),
          cameraZoom: () => 0,
          blocksStandingOn: () => [],
          dropAhead: () => !1,
          replayCamera: () => null,
          leaveGameReloadsPage: () => !1,
          codeBlockClickable: () => !1
        }
      }
  },
  39386: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Uy,
      f: () => hy,
      h: () => fy
    });
    const Uy = 1024,
      hy = 1024 * Uy;

    function fy(yb) {
      return (yb / hy).toFixed(1)
    }
  },
  39383: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => fy,
      g: () => cb,
      h: () => Zy,
      l: () => Py,
      p: () => oy
    });
    var Uy = Wy(167);
    const hy = 32 * Wy(39386).f,
      fy = 6144,
      Zy = 4608,
      cb = 512;

    function Py(yb) {
      return Math.floor(hy * yb / fy)
    }

    function oy(yb) {
      const bb = yb - Math.floor(yb / 6);
      let Wy = Uy.c.maxChunkHorizAddDistance,
        hy = Uy.c.maxChunkVertAddDistance;
      if (By(Wy + 1, hy + 1) <= bb) return null;
      for (; By(Wy + 1, hy + 1) > bb && (Wy > 0 || hy > 0);) Wy > hy ? Wy-- : hy--;
      return {
        horizontal: Wy,
        vertical: hy
      }
    }

    function By(yb, bb) {
      const Wy = Math.max(yb, bb);
      let Uy = 0;
      for (let hy = -Wy; hy <= Wy; hy++)
        for (let fy = -Wy; fy <= Wy; fy++)
          for (let Zy = -Wy; Zy <= Wy; Zy++) Ky(yb, bb, hy, fy, Zy) && Uy++;
      return Uy
    }

    function Ky(yb, bb, Wy, Uy, hy) {
      const fy = Wy * Wy + hy * hy;
      return yb === bb ? fy + Uy * Uy <= yb * yb : yb > bb ? Math.abs(Uy) <= bb && fy + Uy * Uy <= yb * yb : fy <= yb * yb && fy + Uy * Uy <= bb * bb
    }
  },
  39343: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => hy,
      g: () => fy,
      i: () => cb,
      m: () => By,
      p: () => Py,
      r: () => Zy
    });
    var Uy = Wy(167);
    const hy = 3e3,
      fy = 15e3;

    function Zy(yb) {
      const bb = yb.endsWith(Uy.f);
      return {
        text: (bb ? yb.slice(0, -Uy.f.length) : yb) || null,
        dropsCache: bb
      }
    }
    const cb = "Either your internet isn't working or this is a bug.";

    function Py(yb, bb) {
      const Wy = By(yb);
      return null !== Wy.name && "" === Uy.b[Wy.name].text && null !== bb ? bb : Wy.reason
    }
    const oy = "You were removed from the game.";

    function By(yb) {
      var bb;
      let Wy = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const hy = null !== (bb = Object.keys(Uy.b).find((bb => Uy.b[bb].code === yb))) && void 0 !== bb ? bb : null;
      if (null === hy) return {
        code: yb,
        name: hy,
        reason: null !== Wy && void 0 !== Wy ? Wy : `${cb}\nCode: ${yb}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: fy,
        canReconnect: Zy = !1
      } = Uy.b[hy], Py = yb === Uy.b.outdatedVersion.code || yb === Uy.b.loadRecaptchaError.code;
      return {
        code: yb,
        name: hy,
        reason: "" !== fy ? fy : null !== Wy && void 0 !== Wy ? Wy : yb === Uy.b.gameOrPluginKick.code ? oy : `Code: ${yb}`,
        canReconnect: Zy,
        automaticallyReconnect: yb === Uy.b.customGameUpdated.code || yb === Uy.b.duplicateLobbyNameError.code,
        requiresRefresh: Py
      }
    }
  },
  39156: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Uy,
      f: () => Ky,
      j: () => cb,
      n: () => fy,
      q: () => hy,
      s: () => Py,
      v: () => By
    });
    class Uy extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function hy(yb) {
      return yb instanceof RangeError && /call stack/i.test(yb.message) || yb instanceof Error && "InternalError" === yb.name && /recursion/i.test(yb.message)
    }

    function fy(yb) {
      return /out of (executable )?memory|could not allocate memory|array buffer allocation failed/i.test(String(yb))
    }
    const Zy = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function cb(yb) {
      var bb;
      return yb instanceof WebAssembly.RuntimeError || yb instanceof Uy || hy(yb) && Zy.test(null !== (bb = yb.stack) && void 0 !== bb ? bb : "")
    }

    function Py(yb, bb) {
      if (cb(yb)) throw yb;
      console.error(bb, yb)
    }

    function oy(yb, bb, Wy, hy, fy) {
      if (bb % hy !== 0 || bb + Wy > yb.byteLength) throw new Uy(`${fy}: ${Wy} bytes at ${bb}, ${hy}-aligned, outside ${yb.byteLength} bytes of memory`)
    }

    function By(yb, bb, Wy, Uy, hy) {
      return 0 === Wy ? null : (oy(bb, Wy, Uy * yb.BYTES_PER_ELEMENT, yb.BYTES_PER_ELEMENT, hy), new yb(bb, Wy, Uy))
    }

    function Ky(yb, bb, Wy, Uy, hy) {
      return 0 === bb ? null : (oy(yb, bb, Wy, Uy, hy), new DataView(yb, bb, Wy))
    }
  },
  39498: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Uy
    });
    const Uy = {
      destroy_stage_0: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAK0lEQVQYlWP8//8/IwMewIRPknQFjIyM/wmaYGdn9w9FE7IjYSagiFHsCwCM7A/Ccc+NjAAAAABJRU5ErkJggg==",
      destroy_stage_1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAQklEQVQYlYWPMQ4AIAgDOeO7+v9XWScMOGinpjmgYJt4aKQB/ASqKtwASeuGZxrbAEhyRJxe1JJ1debtRIZt6PfmBqYNG36KBWHbAAAAAElFTkSuQmCC",
      destroy_stage_2: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAARUlEQVQYlYWPwQnAMAwDdaVr2ftPVfWVIBJC9DI6LMvYRpIAjzn1rMaq9wQAbwnd/SWUJNkmb1eVkx07zPK5PaLTu37xA3+wH3UI6vmHAAAAAElFTkSuQmCC",
      destroy_stage_3: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAASUlEQVQYlW2PwQ3AMAjEfFXXYv+x3A+pSNqT+IBPMlEDkEQ6awdwMaJGzYTfVJUL4GydUFW5AbM5j2o+DrMEcE+g5dKzf/FrDjw47TfQdOS/BAAAAABJRU5ErkJggg==",
      destroy_stage_4: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAATklEQVQYlYWPsRHDQAzDQF/W4u8/lZEmn5PtwuwkETwqagCSyE97B3AwpEbNNH8A1lpn2wvwN824tqpp6yN2G+dRzaPDhLgPm56peXvzC7EqSTSAXQcxAAAAAElFTkSuQmCC",
      destroy_stage_5: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAATElEQVQYlW2PwREAMQgCIX1p/1Xd3idmNBN/iotowJJkG+2q2WkARwRD2LUkKTO/m44I7mWVyxDrxIsEvCqg7ZOhAyNx0d3Vrzc7+AM+lEvjLYgPSwAAAABJRU5ErkJggg==",
      destroy_stage_6: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAT0lEQVQYlW2PyQ2AQAwDx9tXtv+qGD4ERQt+RY7lI2oAksiD5gBWH1WlGjUtTuIC2HtfHHi5qvJ0mRxt27nzqWZ1VhJnuU/Js8u77m/mFNyVEDqzHRw/iwAAAABJRU5ErkJggg==",
      destroy_stage_7: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAJklEQVQYlWNgQAK2trb/GXABXJIsuCThYsiSMDZBq7AqoEw3Pp0AAAYX+aJ4oVQAAAAASUVORK5CYII=",
      destroy_stage_8: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAUUlEQVQYlV2PwQ3AMAwCoepazvDJXr1+apWEl40BYQHWh6pCAcACDLiq6DlFtySNMZ4kt6RcOiW5LdI2eZxzXmpBurPLVqjda60/Ob84uwB+AVXlTrnZ3+XVAAAAAElFTkSuQmCC",
      destroy_stage_9: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAUElEQVQYlW2OyQ3AMAgEhyhtQfF2X9m8IKvIvBDMHkgKSQGQmcJGUtBAZsr3hm6Aqnr4zUBOt4vfJh8gIuTPtdZFK1ztXUbtcXvvz/nU3F1eyBpW2eqlL9QAAAAASUVORK5CYII="
    }
  },
  39445: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => sy,
      f: () => Sy,
      g: () => ey,
      k: () => Ky
    });
    const Uy = 2e3,
      hy = "unavailable";
    let fy = () => Promise.resolve().then((() => Wy(2547))),
      Zy = null,
      cb = null,
      Py = oy();

    function oy() {
      let yb = () => {};
      return {
        promise: new Promise((bb => {
          yb = () => {
            bb(null)
          }
        })),
        resolve: yb
      }
    }

    function By() {
      if (null === Zy) {
        const yb = fy();
        Zy = yb, yb.then((bb => {
          Zy === yb && (cb = bb)
        }), (() => {
          Zy === yb && (Zy = null)
        }))
      }
      return Zy
    }

    function Ky() {
      By().catch((() => {}))
    }

    function ey() {
      Py.resolve()
    }

    function qb(yb, bb, Wy, Uy) {
      if (null === yb) return {
        errorKind: bb,
        fingerprint: hy,
        dedupe: `${bb}|${Uy}`
      };
      const {
        fingerprint: fy
      } = yb.clientErrorKey(bb, Wy, Uy);
      return {
        errorKind: bb,
        fingerprint: fy,
        dedupe: fy
      }
    }

    function sy(yb, bb, Wy, Uy) {
      return null === cb ? Uy ? (Ky(), qb(null, yb, bb, Wy)) : null : qb(cb, yb, bb, Wy)
    }
    async function Sy(yb, bb, Wy) {
      let hy;
      const fy = new Promise((yb => {
        hy = setTimeout((() => {
          yb(null)
        }), Uy)
      }));
      try {
        return qb(await Promise.race([By(), fy, Py.promise]), yb, bb, Wy)
      } catch {
        return qb(null, yb, bb, Wy)
      } finally {
        clearTimeout(hy)
      }
    }
  },
  39441: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      BUILT_IN_ANIMATIONS_SITE: () => Ay,
      CORE_ERRORS_SITE: () => Qy,
      EVENT_OVERFLOW_SITE: () => xb,
      JOIN_SITE: () => Dy,
      LEAVE_SITE: () => tb,
      MODEL_FEED_SITE: () => wy,
      MODEL_POOL_SITE: () => kb,
      NON_FATAL_LOKI_REPORTS_PER_PAGE: () => bW,
      NON_FATAL_REPORTS_PER_SESSION: () => Eb,
      PREVIEW_ANIMATIONS_SITE: () => Iy,
      RENDER_RELOAD_SITE: () => zb,
      TEXTURE_NAMES_SITE: () => Ny,
      TEXTURE_PACK_FEED_SITE: () => dy,
      TurnstilePageError: () => Db,
      WASM_LOAD_SITE: () => jb,
      crashError: () => Vb,
      crashReportsSettled: () => vW,
      flushCrashReports: () => Ob,
      joinFailureCode: () => tW,
      lokiTransport: () => hb,
      modelFailureCode: () => Ab,
      readTrap: () => Yb,
      renderLossDetail: () => qU,
      renderReloadMessage: () => KW,
      reportCoreErrors: () => Mb,
      reportCountedLoadFallback: () => Qb,
      reportCrash: () => Jb,
      reportDataLoadFailure: () => lW,
      reportDisconnect: () => Ib,
      reportDracoDecoderFailure: () => bU,
      reportEventOverflow: () => hW,
      reportGpuFallback: () => Lb,
      reportMemoryShed: () => cU,
      reportModelFailure: () => db,
      reportModelPoolFailure: () => yU,
      reportPageJoinFailure: () => kW,
      reportReconnectGaveUp: () => xW,
      reportRenderReload: () => sW,
      reportReplayFault: () => oW,
      reportStaleBuildReload: () => CW,
      reportStoppedCore: () => rW,
      reportTerrainTextureFailure: () => SW,
      reportTexturePackFeedLoadFailure: () => UW,
      reportUnstreamedCoreLoad: () => jW,
      reportUnsupportedFallback: () => Fb,
      reportUnusedSeat: () => zW,
      reportWorkerLost: () => fW,
      reportWorkerStartTimeout: () => PW,
      reportWorldgenGaveUp: () => ZW,
      reportWorldgenLoadFailure: () => WW,
      resetCrashReports: () => iW,
      setCrashBackend: () => Kb,
      setCrashScreen: () => ob,
      setCrashTransport: () => cW,
      showCrash: () => ub,
      showJoinFailure: () => wb,
      showUnsupported: () => aW
    });
    var Uy = Wy(930),
      hy = Wy(2551),
      fy = Wy(39445),
      Zy = Wy(3996),
      cb = Wy(4001);
    const Py = 18,
      oy = {
        1: "link",
        2: "draw",
        3: "draw base vertex",
        4: "draw no index buffer",
        7: "draw missing block",
        8: "draw small binding",
        9: "draw missing texture",
        10: "draw no texture storage",
        11: "draw missing sampler",
        12: "draw missing vertex buffer",
        13: "draw short constant",
        15: "draw no zero buffer",
        16: "draw feedback loop",
        [Py]: "retry linked",
        32: "compile validation",
        33: "compile internal",
        34: "compile timeout"
      },
      By = {
        1: "renderer",
        2: "sky",
        3: "meshes",
        4: "terrain"
      },
      Ky = {
        0: "transform",
        1: "object",
        2: "instance batch",
        3: "material",
        4: "terrain part",
        5: "particle system",
        6: "geometry",
        7: "texture",
        9: "shader pack",
        10: "text plane",
        11: "object chunk"
      },
      ey = {
        1: "mesh undecodable",
        2: "part refused",
        3: "terrain ids full",
        4: "unknown terrain id",
        5: "buffer failed"
      };

    function qb(yb) {
      return String(yb).replace(/\d/g, (yb => String.fromCharCode(97 + Number(yb))))
    }

    function sy(yb, bb) {
      var Wy;
      return null !== (Wy = yb[bb]) && void 0 !== Wy ? Wy : qb(bb)
    }

    function Sy(yb, bb) {
      switch (yb) {
        case cb.f.RenderSceneRowNotDrawn:
          return {
            words: ` ${sy(Ky,bb)}`, instance: String(bb), group: String(yb)
          };
        case cb.f.RenderChunkMeshNotDrawn: {
          const Wy = 0 === (128 & bb) ? "" : " shortage",
            Uy = bb >>> 8;
          return {
            words: ` ${sy(ey,127&bb)}${Wy}${0===Uy?"":` kind ${qb(Uy)}`}`,
            instance: String(bb),
            group: String(yb)
          }
        }
        case cb.f.RenderInternal: {
          const Wy = sy(By, 255 & bb),
            Uy = bb >>> 8 & 255;
          if (0 === Uy) return {
            words: ` ${Wy}`,
            instance: String(bb),
            group: String(yb)
          };
          const hy = sy(oy, Uy),
            fy = bb >>> 16;
          return {
            words: ` ${Wy} ${hy} program ${qb(fy)}`,
            instance: `${Wy} ${hy}`,
            group: Uy === Py ? "program retry" : "program",
            program: {
              programFailure: hy,
              program: String(fy)
            }
          }
        }
        default:
          return null
      }
    }
    const Ey = 2,
      ly = new Map;

    function mb(yb) {
      let {
        group: bb,
        instance: Wy
      } = yb, Uy = ly.get(bb);
      return void 0 === Uy && (Uy = [], ly.set(bb, Uy)), !Uy.includes(Wy) && (Uy.length >= Ey || (Uy.push(Wy), !1))
    }
    var Cy = Wy(2767),
      Ty = Wy(37436),
      Vy = Wy(121),
      Jy = Wy(2770),
      gb = Wy(37746),
      Gy = Wy(2363),
      Oy = Wy(39408),
      Ry = Wy(39108),
      vb = Wy(39351),
      ib = Wy(39353),
      My = Wy(39454),
      Yy = Wy(2995),
      Xy = Wy(3004),
      ny = Wy(39461),
      uy = Wy(39481),
      rb = Wy(39503),
      Hy = Wy(2559),
      ab = Wy(39401),
      Fy = Wy(39305),
      py = Wy(39307);
    const Ly = "[bloxd-wasm-client]",
      Qy = "coreErrors",
      jb = "wasmLoad",
      Dy = "join",
      tb = "qh",
      wy = "modelFeed",
      kb = "modelWorkerPool",
      Ny = "textureNames",
      zb = "renderReload",
      Iy = "previewAnimations",
      xb = "eventOverflow",
      Ay = "builtInAnimations",
      dy = "texturePackFeed",
      yW = 300,
      bW = 8;
    let Wb = 0;
    const Ub = new Set,
      hb = (yb, bb) => {
        const Wy = eb[yb.kind];
        if (null === Wy) return void fb(yb, bb, Bb, null);
        const Uy = (0, fy.e)(Wy, yb.message, yb.code, yb.fatal);
        if (null !== Uy) return void fb(yb, bb, Bb, Uy);
        const hy = Bb;
        Gb("Loki", (async () => {
          fb(yb, bb, hy, await (0, fy.f)(Wy, yb.message, yb.code))
        }))
      };

    function fb(yb, bb, Wy, fy) {
      const {
        kind: Zy,
        code: cb,
        site: Py,
        fatal: oy,
        details: By
      } = yb;
      if (!oy)
        if (null === fy || (0, hy.e)(fy.errorKind) || Ub.has(fy.dedupe)) {
          if (Wb >= bW) return;
          Wb++
        } else Ub.add(fy.dedupe);
      const Ky = {
        ...By,
        kind: Zy,
        code: cb,
        site: Py,
        fatal: String(oy),
        backend: Wy
      };
      null !== fy && (Ky.errorKind = fy.errorKind, Ky.fingerprint = fy.fingerprint), bb instanceof Error && "string" === typeof bb.stack && (Ky.causeStack = bb.stack.slice(0, 2e3)), (0, Uy.Dh)(Vb(yb, bb), Ky)
    }
    let Zb = hb;

    function cW(yb) {
      const bb = Zb;
      return Zb = yb, bb
    }
    let Pb = () => {};

    function ob(yb) {
      const bb = Pb;
      return Pb = yb, bb
    }
    let Bb = "unpicked";

    function Kb(yb) {
      Bb = yb
    }
    const eb = {
        crash: "wasm_load",
        unsupported: "wasm_load",
        model: "wasm_load",
        join: "matchmake_failed",
        pageJoin: null,
        unsupportedFallback: null,
        gpuFallback: null,
        coreError: null,
        meshHeap: null,
        recovered: null,
        unstreamedLoad: null,
        modelLate: null,
        worldgenLoad: null,
        texturePackLoad: null,
        terrainTexture: null,
        previewAnimations: null,
        builtInAnimations: null,
        seat: null,
        staleBuild: "wasm_load",
        disconnect: "disconnect"
      },
      qW = {
        coreError: "wasm_load",
        recovered: "wasm_load",
        unstreamedLoad: "wasm_load",
        gpuFallback: "wasm_load"
      },
      sb = new Set(["unstreamedLoad"]);
    let Sb = !1;
    const Eb = 20,
      lb = new Map;
    let mW = 0,
      Cb = 0;
    const Tb = new Set;

    function Vb(yb, bb) {
      const Wy = Object.assign(new Error(`${yb.code}: ${yb.message}`), {
        name: "WasmClientCrash",
        cause: null !== bb && void 0 !== bb ? bb : void 0
      });
      return bb instanceof Error && bb.stack && (Wy.stack = bb.stack), Wy
    }

    function Jb(yb) {
      var bb, Uy;
      const {
        kind: hy,
        code: fy,
        site: Zy,
        fatal: cb,
        message: Py,
        error: oy
      } = yb, By = !1 !== yb.toTransport && !sb.has(hy), Ky = !cb && By, ey = {
        kind: hy,
        code: fy,
        site: Zy,
        fatal: cb,
        message: Py,
        details: null !== (bb = yb.details) && void 0 !== bb ? bb : {}
      }, qb = `${fy}@${Zy}${void 0===yb.instance?"":`#${yb.instance}`}${cb?"!":""}`, sy = (null !== (Uy = lb.get(qb)) && void 0 !== Uy ? Uy : 0) + 1;
      if (lb.set(qb, sy), sy > 1 ? 0 === (sy & sy - 1) && gW((() => {
          console.warn(`${Ly} ${fy} at ${Zy} reported ${sy} times`)
        })) : Ky && mW >= Eb ? gW((() => {
          console.warn(`${Ly} ${hy} ${fy} at ${Zy}: ${Py} (not sent: the session's ${Eb} went)`, ey.details, null !== oy && void 0 !== oy ? oy : "")
        })) : (Ky && mW++, function(yb, bb, Uy) {
          var hy, fy;
          const {
            kind: Zy,
            code: cb,
            site: Py,
            fatal: oy,
            message: By,
            details: Ky
          } = yb;
          gW((() => {
            (oy ? console.error : console.warn)(`${Ly} ${Zy} ${cb} at ${Py}: ${By}`, Ky, null !== bb && void 0 !== bb ? bb : "")
          }));
          const ey = qW[Zy],
            qb = null !== (hy = null !== (fy = eb[Zy]) && void 0 !== fy ? fy : ey) && void 0 !== hy ? hy : null;
          null !== qb && Gb("counts", (async () => {
            const {
              peekVisitSessionId: yb
            } = await Promise.resolve().then((() => Wy(942)));
            if (null !== yb()) {
              const {
                reportCappedWasmFailure: yb,
                reportWasmFailure: bb
              } = await Wy.e(191).then((() => Wy(35103)));
              (void 0 === ey ? bb : yb)(qb, By, cb), Sb = !0
            }
          }));
          Uy && gW((() => {
            Zb(yb, bb)
          }))
        }(ey, oy, By)), cb) {
        var Sy;
        const bb = null !== (Sy = yb.screen) && void 0 !== Sy ? Sy : {
          text: (0, rb.g)(ey, !0),
          reload: !0
        };
        gW((() => {
          Pb(bb)
        }))
      }
      return ey
    }

    function gW(yb) {
      try {
        yb()
      } catch (bb) {
        try {
          console.warn(`${Ly} could not send a report`, bb)
        } catch {}
      }
    }

    function Gb(yb, bb) {
      try {
        const Wy = bb().catch((bb => {
          console.warn(`${Ly} could not send the report to ${yb}`, bb)
        })).finally((() => {
          Tb.delete(Wy)
        }));
        Tb.add(Wy)
      } catch (Wy) {
        console.warn(`${Ly} could not send the report to ${yb}`, Wy)
      }
    }
    async function Ob(yb) {
      let bb;
      (0, fy.g)();
      const Wy = new Promise((Wy => {
        bb = setTimeout(Wy, yb)
      }));
      await Promise.race([Rb(), Wy]), clearTimeout(bb)
    }
    async function Rb() {
      if (await Promise.allSettled([...Tb]), Sb) try {
        const {
          flushClientAnalyticsEvents: yb
        } = await Promise.resolve().then((() => Wy(1331)));
        await yb()
      } catch (yb) {
        console.warn(`${Ly} could not send the counts`, yb)
      }
    }
    async function vW() {
      for (; Tb.size > 0;) await Promise.allSettled([...Tb])
    }

    function iW() {
      lb.clear(), mW = 0, Sb = !1, Wb = 0, Ub.clear(), Cb = 0, ly.clear()
    }

    function Mb(yb, bb, Wy, Uy) {
      Cb += bb;
      for (const {
          code: cb,
          detail: Py
        }
        of yb) {
        var hy, fy;
        const yb = (0, Zy.Jd)(cb),
          bb = Sy(cb, Py),
          oy = null === Uy || void 0 === Uy ? void 0 : Uy(cb, Py),
          By = void 0 === (null === bb || void 0 === bb ? void 0 : bb.program) || null === (hy = (0, Vy.o)()) || void 0 === hy ? void 0 : hy.renderer,
          Ky = Array.from([By && `gpu ${By}`, oy].filter(Boolean).join("; ")).slice(0, yW).join(""),
          ey = `core error ${yb}${null!==(fy=null===bb||void 0===bb?void 0:bb.words)&&void 0!==fy?fy:""}${Ky?`: ${Ky}`:""}`,
          qb = {
            errorCode: String(cb),
            detail: String(Py),
            droppedBefore: String(Cb),
            wasmBuild: Wy.wasm,
            clientVersion: Wy.client,
            ...null === bb || void 0 === bb ? void 0 : bb.program
          };
        null !== bb && mb(bb) ? gW((() => {
          console.warn(`${Ly} coreError CORE-${yb}: ${ey} (not sent: the session's render warnings of its kind went)`, qb)
        })) : Jb({
          kind: cb === Zy.F.JobsHeapGaveUp ? "meshHeap" : "coreError",
          code: `CORE-${yb}`,
          site: Qy,
          fatal: !1,
          message: ey,
          details: qb,
          instance: null === bb || void 0 === bb ? void 0 : bb.instance
        })
      }
    }

    function Yb(yb) {
      return (0, ab.n)(yb instanceof Fy.c ? yb.trap : yb, Yy.F, Yy._)
    }
    const Xb = "declined=js";

    function nb(yb) {
      return yb ? {
        labels: [Xb],
        details: {
          declined: "js"
        }
      } : {
        labels: [],
        details: {}
      }
    }

    function ub(yb, bb, Wy) {
      return Hb(yb, bb, Wy, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !0)
    }

    function rW(yb, bb, Wy) {
      return Hb(yb, bb, Wy, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !1)
    }

    function Hb(yb, bb, Wy, Uy, hy) {
      let {
        memoryDetails: fy = {},
        declined: Zy = !1
      } = Uy;
      const {
        code: cb,
        details: Py,
        message: oy
      } = (0, Oy.L)(yb, bb), By = [];
      null !== Wy && (Py.trapKind = Wy.kind, null !== Wy.panic && (Py.panic = (0, ab.j)(Wy.panic)), Wy.refusedBytes > 0 && (Py.refusedAllocation = String(Wy.refusedBytes)), By.push((0, ab.r)(Wy.kind, Wy.refusedBytes)));
      const Ky = nb(Zy);
      return Jb({
        kind: "crash",
        code: cb,
        site: yb.site,
        fatal: hy,
        message: [...By, ...Ky.labels, oy].join("; "),
        details: {
          ...Py,
          ...Ky.details,
          ...fy
        },
        error: yb.error
      })
    }

    function aW(yb, bb, Wy) {
      return Jb({
        kind: "unsupported",
        code: bb,
        site: jb,
        fatal: !0,
        message: Wy,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: yb,
          status: bb
        },
        screen: {
          text: (0, rb.r)(yb),
          reload: "download" === yb
        }
      })
    }

    function Fb(yb, bb) {
      return Jb({
        kind: "unsupportedFallback",
        code: "unsupported",
        site: jb,
        fatal: !1,
        message: bb,
        details: {
          ...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          cause: yb,
          status: "unsupported",
          fallback: "js"
        }
      })
    }
    const pb = "misdrawn_gpu_js_fallback";

    function Lb(yb) {
      return Jb({
        kind: "gpuFallback",
        code: pb,
        site: jb,
        fatal: !1,
        message: `the renderer misdraws ${yb}`,
        details: {
          gpuFamily: yb,
          fallback: "js"
        }
      })
    }

    function Qb(yb, bb, Wy, Uy) {
      const hy = nb(Uy);
      return Jb({
        kind: "unsupported",
        code: bb,
        site: jb,
        fatal: !1,
        message: [...hy.labels, Wy].join("; "),
        details: {
          cause: yb,
          status: bb,
          fallback: "js",
          ...hy.details
        }
      })
    }

    function jW() {
      const {
        code: yb,
        message: bb
      } = Hy.d;
      return Jb({
        kind: "unstreamedLoad",
        code: yb,
        site: jb,
        fatal: !1,
        message: bb
      })
    }
    class Db extends Error {
      constructor() {
        super("the shell's page can't run the Turnstile check: join from /play"), this.name = "TurnstilePageError"
      }
    }

    function tW(yb) {
      return yb instanceof vb.n ? 0 === yb.code ? "JOIN-matchmake" : `JOIN-${yb.code}` : yb instanceof vb.e ? 0 === yb.code ? `JOIN-${yb.stage}` : `JOIN-${yb.stage}-${yb.code}` : yb instanceof Ry.c ? "JOIN-gameCode" : yb instanceof Db ? "JOIN-turnstilePage" : yb instanceof vb.x ? "JOIN-trafficCheck" : yb instanceof gb.d ? "JOIN-timeout" : "JOIN-network"
    }

    function wb(yb, bb) {
      const Wy = (0, py.f)(yb),
        Uy = {
          wasmBuild: bb.wasm,
          clientVersion: bb.client
        },
        hy = yb instanceof Db ? {
          text: (0, rb.l)(),
          reload: !1
        } : void 0,
        fy = (0, ib.e)(yb),
        Zy = "expected" !== fy;
      return Jb({
        kind: "join",
        code: tW(yb),
        site: Dy,
        fatal: !0,
        message: Wy,
        details: Uy,
        error: yb,
        screen: hy,
        toTransport: Zy,
        instance: fy
      })
    }

    function kW(yb, bb, Wy) {
      var Uy;
      const hy = (0, ib.e)(yb),
        fy = {
          cause: (yb instanceof vb.e || yb instanceof vb.n) && null !== (Uy = yb.serverText) && void 0 !== Uy ? Uy : "",
          sinceJoinStart: (0, Jy.e)(Wy.sinceJoinStartMs),
          game: Wy.game,
          ...(0, Jy.p)(),
          wasmBuild: bb.wasm,
          clientVersion: bb.client
        };
      return Jb({
        kind: "pageJoin",
        code: tW(yb),
        site: Dy,
        fatal: !1,
        message: (0, py.f)(yb),
        details: fy,
        error: yb,
        toTransport: "unrecognised" === hy,
        instance: hy
      })
    }
    const Nb = {
      renewed: {
        code: "CORE-seatRenewed",
        message: "the early seat outlasted the room's hold, so the join reserved another"
      },
      lost: {
        code: "CORE-seatAbandoned",
        message: "the early seat's request failed before the join, so the join reserved another"
      },
      rematched: {
        code: "CORE-seatAbandoned",
        message: "the early seat was for a place matchmaking replaced"
      },
      abandoned: {
        code: "CORE-seatAbandoned",
        message: "the early seat was abandoned by a leave or a failed boot or join"
      }
    };

    function zW(yb, bb) {
      let {
        unused: Wy,
        answered: Uy,
        heldMs: hy
      } = yb;
      const {
        code: fy,
        message: Zy
      } = Nb[Wy], cb = {
        unused: Wy,
        answered: String(Uy),
        heldMs: String(hy),
        wasmBuild: bb.wasm,
        clientVersion: bb.client
      };
      return Jb({
        kind: "seat",
        code: fy,
        site: Dy,
        fatal: !1,
        message: Zy,
        details: cb
      })
    }

    function Ib(yb, bb, Wy) {
      var Uy;
      let hy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null !== (Uy = yb.name) && void 0 !== Uy ? Uy : String(yb.code);
      const fy = {
          closeCode: String(yb.code),
          recognised: String(null !== yb.name),
          closeReason: Wy.closeReason,
          sinceJoined: (0, Jy.e)(Wy.sinceJoinedMs),
          game: Wy.game,
          ...(0, Jy.p)(),
          wasmBuild: bb.wasm,
          clientVersion: bb.client
        },
        Zy = null === yb.name && !(0, Jy.i)(yb.code);
      return Jb({
        kind: "disconnect",
        code: hy,
        site: tb,
        fatal: !1,
        message: "Left room",
        details: fy,
        toTransport: Zy
      })
    }

    function xW(yb, bb) {
      const Wy = {
        ...(0, Cy.l)(yb),
        wasmBuild: bb.wasm,
        clientVersion: bb.client
      };
      return Jb({
        kind: "disconnect",
        code: `reconnect-${yb.reason}`,
        site: Dy,
        fatal: !1,
        message: "Reconnect failed",
        details: Wy
      })
    }

    function Ab(yb) {
      return yb.error instanceof Xy.d ? `MODEL-${yb.error.status}` : yb.error instanceof ny.l ? "MODEL-ring" : "MODEL-network"
    }

    function db(yb, bb) {
      const Wy = Ab(yb),
        Uy = `model file ${yb.file} ${yb.startup?"(startup) ":""}could not load`,
        hy = {
          file: String(yb.file),
          url: yb.url,
          wasmBuild: bb.wasm,
          clientVersion: bb.client
        };
      return Jb({
        kind: yb.startup ? "model" : "modelLate",
        code: Wy,
        site: wy,
        fatal: yb.startup,
        message: Uy,
        details: hy,
        error: yb.error
      })
    }

    function yU(yb, bb) {
      const Wy = {
        wasmBuild: bb.wasm,
        clientVersion: bb.client
      };
      return Jb({
        kind: "model",
        code: "CORE-modelWorkerPool",
        site: kb,
        fatal: !1,
        message: "the model workers could not start: no model can build",
        details: Wy,
        error: yb
      })
    }

    function bU(yb, bb) {
      const Wy = {
        wasmBuild: bb.wasm,
        clientVersion: bb.client
      };
      return Jb({
        kind: "recovered",
        code: "CORE-dracoDecoder",
        site: kb,
        fatal: !1,
        message: "the Draco decoder did not load: the Draco files waiting on it failed",
        details: Wy,
        error: yb
      })
    }

    function WW(yb, bb) {
      const Wy = {
        wasmBuild: bb.wasm,
        clientVersion: bb.client
      };
      return Jb({
        kind: "worldgenLoad",
        code: "CORE-worldgenLoad",
        site: Oy.F,
        fatal: !1,
        message: "world-gen worker code could not load",
        details: Wy,
        error: yb
      })
    }

    function UW(yb, bb) {
      const Wy = {
        wasmBuild: bb.wasm,
        clientVersion: bb.client
      };
      return Jb({
        kind: "texturePackLoad",
        code: "CORE-texturePackLoad",
        site: dy,
        fatal: !1,
        message: "texture pack feed code could not load",
        details: Wy,
        error: yb
      })
    }

    function hW(yb, bb) {
      const {
        frames: Wy,
        acks: Uy,
        mask: hy,
        outcome: fy
      } = yb, Zy = {
        frames: String(Wy),
        acks: String(Uy),
        mask: String(hy),
        outcome: null !== fy && void 0 !== fy ? fy : "resynced",
        wasmBuild: bb.wasm,
        clientVersion: bb.client
      };
      return Jb({
        kind: "recovered",
        code: "rejoined" === fy ? "CORE-eventOverflowRejoin" : "failed" === fy ? "CORE-eventOverflowFailed" : "CORE-eventOverflow",
        site: xb,
        fatal: !1,
        message: `the event buffer refused records in ${Wy} frames`,
        details: Zy
      })
    }

    function fW(yb, bb, Wy) {
      return Jb({
        kind: "recovered",
        code: "CORE-workerLost",
        site: yb,
        fatal: !1,
        message: `a ${yb} worker was lost`,
        details: {
          reason: bb,
          wasmBuild: Wy.wasm,
          clientVersion: Wy.client
        }
      })
    }

    function ZW(yb, bb) {
      const Wy = {
        lastReason: yb,
        wasmBuild: bb.wasm,
        clientVersion: bb.client
      };
      return Jb({
        kind: "recovered",
        code: "CORE-worldgenGaveUp",
        site: Oy.F,
        fatal: !1,
        message: "no world-gen worker generated: chunks come whole",
        details: Wy
      })
    }

    function cU(yb, bb, Wy) {
      return Jb({
        kind: "recovered",
        code: "CORE-memoryShed",
        site: Oy.j,
        fatal: !1,
        message: (0, My.f)(yb) ? "wasm memory was refused: the session shed load" : "the tab's footprint reached its budget: the session shed load",
        details: {
          cause: yb,
          ...bb,
          wasmBuild: Wy.wasm,
          clientVersion: Wy.client
        }
      })
    }

    function PW(yb, bb, Wy) {
      return Jb({
        kind: "recovered",
        code: "CORE-workerStartTimeout",
        site: yb,
        fatal: !1,
        message: `a ${yb} worker did not start`,
        details: {
          waitedMs: String(Math.round(bb)),
          wasmBuild: Wy.wasm,
          clientVersion: Wy.client
        }
      })
    }

    function oW(yb, bb, Wy) {
      return Jb({
        kind: "recovered",
        code: "CORE-replayFault",
        site: yb,
        fatal: !1,
        message: `the replay's ${yb} failed`,
        details: {
          wasmBuild: Wy.wasm,
          clientVersion: Wy.client
        },
        error: bb
      })
    }
    const BW = {
      lost: "render device was lost",
      frames_refused: "render device refused a frame",
      start_failed: "renderer couldn't start",
      pipeline_failed: "renderer's terrain pipeline failed"
    };

    function KW(yb, bb, Wy) {
      const Uy = "lost" === bb && void 0 !== Wy ? ` (${Wy})` : "";
      return `the ${yb} ${BW[bb]}${Uy}`
    }
    const eW = {
      adapter: null,
      boundAtMs: null
    };

    function qU(yb, bb, Wy) {
      let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now();
      const hy = null === Wy.boundAtMs ? "unbound" : `up${(0,Ty.f)(Uy-Wy.boundAtMs)}`,
        fy = null === Wy.adapter ? "no adapter" : (0, Ty.j)(Wy.adapter),
        Zy = `${(0,Gy.e)()?"hidden":"visible"} ${hy} ${fy}`;
      if ("pipeline_failed" === yb) return `${yb} ${Zy}`;
      const cb = null === bb || void 0 === bb ? void 0 : bb.message;
      return `${bb instanceof Gy.c?"timeout":(0,Ty.k)("frames_refused"===yb,"string"===typeof cb?cb:"")} ${Zy}`
    }

    function sW(yb, bb, Uy) {
      let {
        cause: hy = "lost",
        error: fy,
        context: Zy = eW
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const cb = qU(hy, fy, Zy),
        Py = {
          losses: String(bb),
          cause: hy,
          detail: cb,
          wasmBuild: Uy.wasm,
          clientVersion: Uy.client
        },
        oy = KW(yb, hy),
        By = Jb({
          kind: "recovered",
          code: "CORE-renderLost",
          site: zb,
          fatal: !1,
          message: oy,
          details: Py,
          error: fy
        });
      return Gb("ga", (async () => {
        const {
          logError: bb
        } = await Promise.resolve().then((() => Wy(2293))), Uy = `${Ty.e["webgpu"===yb?"WebGPU":"WebGL2"]}\n Error: ${cb}`;
        bb("warning", Uy), bb("error", Uy)
      })), By
    }

    function SW(yb, bb) {
      var Wy, Uy;
      const hy = null === yb.name ? "TEXTURE-sources" : null === yb.url ? "TEXTURE-nourl" : yb.error instanceof uy.d ? `TEXTURE-${yb.error.status}` : "TEXTURE-network",
        fy = null === yb.name ? "terrain textures could not load" : `terrain texture ${yb.name} could not load`,
        Zy = {
          texture: null !== (Wy = yb.name) && void 0 !== Wy ? Wy : "",
          url: null !== (Uy = yb.url) && void 0 !== Uy ? Uy : "",
          wasmBuild: bb.wasm,
          clientVersion: bb.client
        };
      return Jb({
        kind: "terrainTexture",
        code: hy,
        site: Oy.B,
        fatal: !1,
        message: fy,
        details: Zy,
        error: yb.error
      })
    }
    const EW = {
      previewAnimations: {
        site: Iy,
        prefix: "ANIMS",
        name: "the previews' animations"
      },
      builtInAnimations: {
        site: Ay,
        prefix: "BUILTIN",
        name: "the built-in animations"
      }
    };

    function lW(yb, bb, Wy, Uy) {
      const {
        site: hy,
        prefix: fy,
        name: Zy
      } = EW[yb], {
        stage: cb,
        error: Py
      } = Wy;
      return Jb({
        kind: yb,
        code: "decode" === cb ? null === Py ? `${fy}-decode` : `${fy}-trap` : Py instanceof Xy.d ? `${fy}-${Py.status}` : `${fy}-network`,
        site: hy,
        fatal: !1,
        message: "decode" === cb ? `${Zy} did not decode` : `${Zy} could not load`,
        details: {
          url: bb,
          wasmBuild: Uy.wasm,
          clientVersion: Uy.client
        },
        error: Py
      })
    }
    const mU = "staleBuild";

    function CW(yb, bb, Wy) {
      const Uy = {
          failedSite: yb.site,
          url: yb.url,
          from: yb.from,
          sameBuild: String(yb.from === bb),
          reloadMs: String(Math.max(0, Date.now() - yb.at)),
          wasmBuild: Wy.wasm,
          clientVersion: Wy.client
        },
        hy = `reloaded into a newer build after ${yb.site} failed to load: ${yb.error}`;
      return Jb({
        kind: "staleBuild",
        code: "CORE-staleBuild",
        site: mU,
        fatal: !1,
        message: hy,
        details: Uy
      })
    }
  },
  39374: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Gy,
      i: () => gb,
      k: () => Jy
    });
    var Uy = Wy(167),
      hy = Wy(94),
      fy = Wy(3650),
      Zy = Wy(565),
      cb = Wy(39383);
    const Py = 1048576,
      oy = 1024 * Py,
      By = 400 * Py,
      Ky = 147456,
      ey = .5,
      qb = 1.5 * oy,
      sy = 768 * Py,
      Sy = new Set(["428x926@3", "393x852@3", "430x932@3", "402x874@3", "440x956@3", "420x912@3"]),
      Ey = 600,
      ly = 8;

    function mb(yb) {
      return By + yb * Ky
    }

    function Cy(yb, bb, Wy) {
      var hy, fy;
      let {
        footprintBytes: Zy,
        basis: Py,
        namesLimit: Cy
      } = function(yb) {
        const {
          os: bb,
          deviceMemory: Wy
        } = yb;
        if ("ios" === bb) {
          const bb = Math.min(yb.screenWidth, yb.screenHeight),
            Wy = Math.max(yb.screenWidth, yb.screenHeight);
          return bb >= Ey ? yb.hardwareConcurrency >= ly ? {
            footprintBytes: mb(cb.e),
            basis: "ipad-m",
            namesLimit: !1
          } : {
            footprintBytes: sy,
            basis: "ipad",
            namesLimit: !0
          } : Sy.has(`${bb}x${Wy}@${yb.devicePixelRatio}`) ? {
            footprintBytes: qb,
            basis: "iphone-6gb",
            namesLimit: !0
          } : {
            footprintBytes: sy,
            basis: "iphone",
            namesLimit: !0
          }
        }
        return "number" === typeof Wy && Number.isFinite(Wy) && Wy > 0 ? {
          footprintBytes: Wy * oy * ey,
          basis: `memory-${Wy}`,
          namesLimit: !0
        } : "android" === bb ? {
          footprintBytes: sy,
          basis: "android",
          namesLimit: !0
        } : {
          footprintBytes: mb(cb.h),
          basis: "unreported",
          namesLimit: !1
        }
      }(yb);
      if (Wy) {
        const yb = Math.min(Zy, mb(cb.e));
        Zy = By + Math.max(0, yb - By) / 2, Py += "+killed", Cy = !0
      }
      null !== bb && mb(bb) < Zy && (Zy = mb(bb), Py += "+learned", Cy = !0);
      const Ty = function(yb) {
          const bb = Math.floor((yb - By) / Ky);
          return Math.min(cb.e, Math.max(cb.g, bb))
        }(Zy),
        Vy = (0, cb.p)(Ty);
      return {
        footprintBytes: Zy,
        shedFootprintBytes: Cy ? Math.max(Zy, mb(Ty)) : null,
        chunkCap: Ty,
        maxHorizDistance: null !== (hy = null === Vy || void 0 === Vy ? void 0 : Vy.horizontal) && void 0 !== hy ? hy : Uy.c.maxChunkHorizAddDistance,
        maxVertDistance: null !== (fy = null === Vy || void 0 === Vy ? void 0 : Vy.vertical) && void 0 !== fy ? fy : Uy.c.maxChunkVertAddDistance,
        basis: Py
      }
    }
    let Ty = null;

    function Vy() {
      return Cy({
        os: (0, hy.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        screenWidth: window.screen.width,
        screenHeight: window.screen.height,
        devicePixelRatio: window.devicePixelRatio,
        hardwareConcurrency: navigator.hardwareConcurrency
      }, (0, fy.f)(), (0, Zy.y)("wasm").length > 0)
    }

    function Jy() {
      return Ty ??= Vy(), Ty
    }

    function gb() {
      var yb;
      return (null !== (yb = Ty) && void 0 !== yb ? yb : Vy()).basis
    }

    function Gy(yb, bb) {
      return yb.setChunkCap(bb.chunkCap)
    }
  },
  39108: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Uy,
      f: () => ly,
      i: () => Sy,
      l: () => Ey,
      n: () => ey,
      o: () => qb,
      s: () => By,
      t: () => Ky,
      u: () => sy
    });
    class Uy extends Error {
      constructor(yb) {
        super(`the join's code did not load: ${yb instanceof Error?yb.message:String(yb)}`, {
          cause: yb
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === yb || void 0 === yb ? void 0 : yb.request
      }
    }
    let hy = null,
      fy = null,
      Zy = null;
    const cb = [];
    let Py = null;

    function oy(yb, bb) {
      try {
        yb(bb)
      } catch (Wy) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", Wy)
      }
    }

    function By() {
      return Py
    }

    function Ky(yb) {
      cb.push(yb), null !== Py && oy(yb, Py)
    }

    function ey(yb) {
      return hy ??= Promise.all([Wy.e(63), Wy.e(84), Wy.e(197), Wy.e(126), Wy.e(221), Wy.e(198), Wy.e(199), Wy.e(82), Wy.e(227), Wy.e(177), Wy.e(129), Wy.e(183), Wy.e(77), Wy.e(105), Wy.e(224), Wy.e(49)]).then((() => Wy(41060))).then((bb => {
        bb.loadAudio(yb), Py = bb;
        for (const yb of cb) oy(yb, bb);
        return bb
      })).catch((yb => {
        throw hy = null, yb
      })), hy
    }
    async function qb(yb, bb) {
      try {
        const Wy = await ey(yb);
        await Wy.loadClientGame(bb)
      } catch (Wy) {
        throw new Uy(Wy)
      }
    }

    function sy(yb, bb) {
      fy = {
        running: yb,
        shell: bb
      }
    }

    function Sy() {
      return Zy
    }
    async function Ey(yb) {
      const bb = fy;
      if ((null === bb || void 0 === bb ? void 0 : bb.running) !== yb) throw new Error("the core's session has ended");
      const Wy = await ey(bb.shell.audio).catch((yb => {
        throw new Uy(yb)
      }));
      if (null !== Zy) return Zy;
      if (fy !== bb || yb.isStopped) throw new Error("the core stopped while the game code loaded");
      if (Zy = Wy.startGameHost(yb, bb.shell), null === Zy) throw new Error("the core's shared tables didn't read, so the game can't start");
      return Zy
    }

    function ly() {
      null !== Zy && (null !== Py ? Py.endGameHost(Zy) : Zy.closeGame()), Zy = null, fy = null
    }
  },
  39539: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Zy,
      f: () => fy
    });
    var Uy = Wy(2481),
      hy = Wy(865);

    function fy(yb, bb) {
      return null !== yb.gameSource && (0, Uy.l)(bb, yb.gameSource)
    }

    function Zy(yb, bb) {
      if (null === yb.gameSource || "" === yb.gameSource || null === bb) return !0;
      const Wy = (0, hy.p)(bb) ? (0, hy.v)(bb) : null;
      return null !== Wy && fy(yb, Wy)
    }
  },
  39520: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => fy,
      h: () => Sy,
      j: () => oy,
      m: () => By,
      q: () => sy
    });
    var Uy = Wy(39466),
      hy = Wy(39525);
    const fy = 396,
      Zy = 1,
      cb = 2,
      Py = 3,
      oy = {
        Glb: 1,
        LifeformAtlas: 2,
        ArmourAtlas: 3,
        Cape: 4,
        GroupAtlas: 5,
        Particle: 6,
        AttachmentImage: 7,
        BlockImage: 8
      },
      By = {
        File: 0,
        Item: 1
      },
      Ky = 0,
      ey = 1,
      qb = 2;

    function sy(yb) {
      const bb = (0, Uy.k)();
      bb.catch((() => {}));
      let hy = null;
      return {
        glbUrl: yb,
        lifeformAtlasUrl: async yb => (await bb).lifeformAtlasUrl(yb),
        armourAtlasUrl: async () => (await Wy.e(186).then((() => Wy(33215)))).armourAtlasUrl,
        capeUrl: async yb => (await bb).capeUrl(yb),
        attachmentImageUrl: async yb => (await bb).attachmentImageUrl(yb),
        blockImageUrl: async yb => (await bb).blockImageUrl(yb),
        groupAtlasUrl: async yb => (await bb).groupAtlasUrl(yb),
        particleTextureUrl: async yb => (await bb).particleTextureUrl(yb),
        particleItemUrl: async yb => (hy ??= Wy.e(35).then((() => Wy(50241))).catch((yb => {
          throw hy = null, yb
        })), (await hy).particleItemUrl(yb))
      }
    }
    class Sy {
      constructor(yb, bb) {
        var Wy, fy, Zy;
        let cb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.sources = yb, this.onFailure = bb, this.loading = new Map, this.glbImages = new Map, this.glbWrittenImages = new Map, this.glbTakenCount = new Map, this.answered = new Map, this.ready = [], this.load = void 0, this.release = void 0, this.fetchFile = void 0, this.rh = !1, this.load = null !== (Wy = cb.load) && void 0 !== Wy ? Wy : (yb, bb) => (0, hy.p)(yb, cb.fetchImage, bb), this.release = null !== (fy = cb.release) && void 0 !== fy ? fy : hy.t, this.fetchFile = null !== (Zy = cb.fetchFile) && void 0 !== Zy ? Zy : yb => (0, Uy.h)(yb)
      }
      get waiting() {
        return this.ready.length
      }
      get inFlight() {
        return this.loading.size
      }
      glbWritten(yb, bb) {
        this.glbWrittenImages.set(yb, Jy(bb))
      }
      glbTaken(yb, bb) {
        const Wy = this.glbWrittenImages.get(yb);
        this.glbWrittenImages.delete(yb), bb && this.setGlbImages(yb, void 0 !== Wy && Wy.length > 0 ? Wy : void 0)
      }
      setGlbImages(yb, bb) {
        var Wy;
        this.glbTakenCount.set(yb, (null !== (Wy = this.glbTakenCount.get(yb)) && void 0 !== Wy ? Wy : 0) + 1), void 0 === bb ? this.glbImages.delete(yb) : this.glbImages.set(yb, bb);
        const Uy = [];
        for (const {
            key: hy
          }
          of this.loading.values()) hy.kind === oy.Glb && hy.word === yb && Uy.push(hy);
        for (let hy = this.ready.length - 1; hy >= 0; hy--) {
          const {
            key: bb,
            id: Wy
          } = this.ready[hy];
          bb.kind === oy.Glb && bb.word === yb && (this.ready.splice(hy, 1), null !== Wy && (this.answered.delete(Wy), this.release(Wy)), Uy.push(bb))
        }
        this.loadAgain(Uy)
      }
      onEvent(yb) {
        if (this.rh) return;
        const bb = new DataView(yb.buffer, yb.byteOffset, yb.byteLength);
        for (let Wy = 0; Wy + 8 <= yb.byteLength; Wy += 8) {
          const yb = bb.getUint8(Wy),
            Uy = bb.getUint32(Wy + 4, !0);
          if (yb === Py) {
            this.answered.delete(Uy), this.release(Uy);
            continue
          }
          const hy = {
            kind: bb.getUint8(Wy + 1),
            index: bb.getUint8(Wy + 2),
            word: Uy
          };
          yb === Zy ? this.want(hy) : yb === cb && this.loading.delete(Ey(hy))
        }
      }
      reload(yb, bb) {
        const Wy = Wy => yb.includes(Wy.kind) && (void 0 === bb || bb(Wy)),
          Uy = new Map;
        for (const hy of this.answered.values()) Wy(hy) && Uy.set(Ey(hy), hy);
        for (const [hy, {
            key: fy
          }] of this.loading) Wy(fy) && Uy.set(hy, fy);
        this.loadAgain(Uy.values())
      }
      loadAgain(yb) {
        for (const bb of yb) this.loading.delete(Ey(bb)), this.want(bb)
      }
      drain(yb) {
        if (null !== yb)
          for (; this.ready.length > 0;) {
            if (!yb(fy, 0, this.ready[0].record)) return;
            this.ready.shift()
          }
      }
      dispose() {
        this.rh = !0, this.loading.clear(), this.ready.length = 0;
        for (const yb of this.answered.keys()) this.release(yb);
        this.answered.clear()
      }
      want(yb) {
        const bb = Ey(yb);
        if (this.loading.has(bb)) return;
        const Wy = {
          key: yb
        };
        this.loading.set(bb, Wy), this.loadKey(yb).then((Uy => {
          this.rh || this.loading.get(bb) !== Wy ? this.release(Uy.id) : (this.loading.delete(bb), this.answered.set(Uy.id, yb), this.ready.push({
            record: mb(yb, Ky, Uy),
            key: yb,
            id: Uy.id
          }))
        }), (Uy => {
          if (this.rh || this.loading.get(bb) !== Wy) return;
          this.loading.delete(bb), this.onFailure({
            key: yb,
            error: Uy
          });
          const fy = Uy instanceof hy.e && "decode" === Uy.stage ? ey : qb;
          this.ready.push({
            record: mb(yb, fy, null),
            key: yb,
            id: null
          })
        }))
      }
      async loadKey(yb) {
        switch (yb.kind) {
          case oy.Glb:
            return this.load(await this.glbImage(yb), "none");
          case oy.LifeformAtlas:
            return this.load(ly(await this.sources.lifeformAtlasUrl(yb.word), yb), "none");
          case oy.ArmourAtlas:
            return this.load(ly(await this.sources.armourAtlasUrl(), yb), "none");
          case oy.Cape:
            return this.load(ly(await this.sources.capeUrl(yb.word), yb), "none");
          case oy.AttachmentImage:
            return this.load(ly(await this.sources.attachmentImageUrl(yb.word), yb), "none");
          case oy.GroupAtlas:
            return this.load(ly(await this.sources.groupAtlasUrl(yb.word), yb), "none");
          case oy.BlockImage:
            return this.load(ly(await this.sources.blockImageUrl(yb.word), yb), "none");
          case oy.Particle: {
            const bb = await (yb.index === By.Item ? this.sources.particleItemUrl(yb.word) : this.sources.particleTextureUrl(yb.word));
            return this.load(ly(bb, yb), "flipY")
          }
          default:
            throw new hy.e("fetch", `image kind ${yb.kind}`, {
              cause: null
            })
        }
      }
      async glbImage(yb) {
        var bb;
        let Wy = this.glbImages.get(yb.word);
        if (void 0 === Wy) {
          const bb = this.glbTakenCount.get(yb.word),
            Uy = ly(await this.sources.glbUrl(yb.word), yb);
          try {
            Wy = Jy(await this.fetchFile(Uy))
          } catch (fy) {
            throw new hy.e("fetch", Uy, {
              cause: fy
            })
          }
          this.glbTakenCount.get(yb.word) === bb && this.glbImages.set(yb.word, Wy)
        }
        const Uy = null === (bb = Wy) || void 0 === bb ? void 0 : bb[yb.index];
        if (!Uy) throw new hy.e("decode", `image ${yb.index} of file ${2147483647&yb.word}`, {
          cause: null
        });
        return Uy
      }
    }

    function Ey(yb) {
      let {
        kind: bb,
        index: Wy,
        word: Uy
      } = yb;
      return `${bb}:${Wy}:${Uy}`
    }

    function ly(yb, bb) {
      if (null === yb) throw new hy.e("fetch", `no URL for image ${Ey(bb)}`, {
        cause: null
      });
      return yb
    }

    function mb(yb, bb, Wy) {
      var Uy, hy, fy;
      const Zy = new Uint8Array(16),
        cb = new DataView(Zy.buffer);
      return cb.setUint8(0, yb.kind), cb.setUint8(1, yb.index), cb.setUint8(2, bb), cb.setUint32(4, yb.word, !0), cb.setUint32(8, null !== (Uy = null === Wy || void 0 === Wy ? void 0 : Wy.id) && void 0 !== Uy ? Uy : 0, !0), cb.setUint16(12, Math.min(null !== (hy = null === Wy || void 0 === Wy ? void 0 : Wy.width) && void 0 !== hy ? hy : 0, 65535), !0), cb.setUint16(14, Math.min(null !== (fy = null === Wy || void 0 === Wy ? void 0 : Wy.height) && void 0 !== fy ? fy : 0, 65535), !0), Zy
    }
    const Cy = 1179937895,
      Ty = 1313821514,
      Vy = 5130562;

    function Jy(yb) {
      var bb;
      const Wy = new DataView(yb.buffer, yb.byteOffset, yb.byteLength);
      if (yb.byteLength < 20 || Wy.getUint32(0, !0) !== Cy || Wy.getUint32(16, !0) !== Ty) return [];
      let Uy, hy = 20 + Wy.getUint32(12, !0);
      try {
        Uy = JSON.parse((new TextDecoder).decode(yb.subarray(20, hy)))
      } catch {
        return []
      }
      for (; hy + 8 <= yb.byteLength && Wy.getUint32(hy + 4, !0) !== Vy;) hy += 8 + Wy.getUint32(hy, !0);
      const fy = null !== (bb = Uy.images) && void 0 !== bb ? bb : [];
      if (0 === fy.length || hy + 8 > yb.byteLength) return fy.map((() => null));
      const Zy = yb.subarray(hy + 8, Math.min(yb.byteLength, hy + 8 + Wy.getUint32(hy, !0)));
      return fy.map((yb => {
        var bb, Wy, hy;
        const fy = void 0 === yb.bufferView || null === (bb = Uy.bufferViews) || void 0 === bb ? void 0 : bb[yb.bufferView];
        if (!fy || 0 !== (null !== (Wy = fy.buffer) && void 0 !== Wy ? Wy : 0) || void 0 === fy.byteLength) return null;
        const cb = null !== (hy = fy.byteOffset) && void 0 !== hy ? hy : 0,
          Py = cb + fy.byteLength;
        return Py <= Zy.byteLength ? Zy.slice(cb, Py) : null
      }))
    }
  },
  39179: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Zy,
      f: () => fy,
      i: () => hy
    });
    let Uy = null;

    function hy(yb) {
      Uy = yb
    }

    function fy(yb) {
      Uy === yb && (Uy = null)
    }

    function Zy() {
      var yb;
      null === (yb = Uy) || void 0 === yb || yb()
    }
  },
  35358: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => cb,
      g: () => Ky,
      k: () => Zy
    });
    var Uy = Wy(1977),
      hy = Wy(1983),
      fy = Wy(1991);

    function Zy(yb, bb) {
      return (!(0, fy.d)() || 0 === yb && 0 === bb) && (0, hy.w)(Uy.f.Joystick, 0, yb, bb, 0)
    }
    const cb = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function Py(yb) {
      return !(yb instanceof HTMLElement) || yb.offsetWidth <= 0 || yb.offsetHeight <= 0 ? null : {
        width: yb.offsetWidth,
        height: yb.offsetHeight
      }
    }

    function oy(yb, bb) {
      const Wy = yb => Math.min(65535, Math.round(4 * yb));
      return (Wy(yb) | Wy(bb) << 16) >>> 0
    }

    function By(yb) {
      return {
        x: yb.left + yb.width / 2,
        y: yb.top + yb.height / 2,
        radius: Math.min(yb.width, yb.height) / 2
      }
    }
    const Ky = new class {
      constructor(yb) {
        this.write = yb, this.elements = new Map
      }
      set(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        bb ? this.elements.set(yb, {
          element: bb,
          hidden: Wy
        }) : this.elements.delete(yb), this.measureOne(yb)
      }
      measure() {
        for (const yb of this.elements.keys()) this.measureOne(yb)
      }
      hitZone(yb, bb) {
        let Wy = null,
          Uy = 1;
        for (const hy of this.elements.keys()) {
          const fy = this.shown(hy);
          if (!fy) continue;
          const {
            rect: Zy,
            element: cb
          } = fy, oy = By(Zy), Ky = Math.max(0, Zy.width / 2 - oy.radius), ey = Math.max(0, Zy.height / 2 - oy.radius), qb = Math.max(0, Math.abs(yb - oy.x) - Ky), sy = Math.max(0, Math.abs(bb - oy.y) - ey), Sy = cb.firstElementChild;
          let Ey = Math.hypot(qb, sy) / oy.radius;
          const ly = Py(Sy);
          ly && (Ey = Math.min(Ey, Math.max(2 * Math.abs(yb - oy.x) / ly.width, 2 * Math.abs(bb - oy.y) / ly.height))), Ey < Uy && (Wy = {
            code: hy,
            element: cb,
            key: Sy,
            ...oy
          }, Uy = Ey)
        }
        return Wy
      }
      measureOne(yb) {
        const bb = this.shown(yb);
        if (!bb) return void this.write(Uy.f.TouchZone, yb, 0, 0, 0);
        const {
          rect: Wy,
          element: hy
        } = bb, fy = By(Wy);
        this.write(Uy.f.TouchZone, yb, fy.x, fy.y, oy(Wy.width, Wy.height));
        const Zy = Py(hy.firstElementChild);
        this.write(Uy.f.TouchZone, 256 | yb, 0, 0, Zy ? oy(Zy.width, Zy.height) : 0)
      }
      shown(yb) {
        const bb = this.elements.get(yb);
        if (!bb || bb.hidden) return null;
        const Wy = bb.element.getBoundingClientRect();
        return Wy.width <= 0 || Wy.height <= 0 ? null : {
          rect: Wy,
          element: bb.element
        }
      }
    }(hy.w)
  },
  39351: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => oy,
      g: () => fy,
      i: () => Zy,
      m: () => hy,
      n: () => qb,
      o: () => By,
      q: () => Py,
      t: () => ey,
      x: () => Ky,
      z: () => cb
    });
    var Uy = Wy(37895);
    const hy = new Uint8Array([12]),
      fy = 2e3,
      Zy = 257;

    function cb(yb) {
      const bb = new Uint8Array(4);
      return new DataView(bb.buffer).setUint32(0, yb, !0), bb
    }
    class Py extends Error {
      constructor() {
        super("the game was left while it reconnected"), this.name = "AbortError"
      }
    }
    class oy extends Error {
      constructor(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(yb), this.stage = bb, this.code = Wy, this.serverText = Uy, this.name = "JoinError"
      }
    }
    class By extends Error {
      constructor(yb) {
        super(yb), this.final = !0, this.name = "ResumeRefusedError"
      }
    }
    class Ky extends Error {
      constructor() {
        super(Uy.d), this.name = "TrafficCheckError"
      }
    }
    class ey extends Error {
      constructor(yb, bb, Wy) {
        super(yb, {
          cause: Wy
        }), this.networkLost = bb, this.name = "SeatRequestError"
      }
    }
    class qb extends Error {
      constructor(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        super(yb), this.code = bb, this.serverText = Wy, this.name = "MatchmakeError"
      }
    }
  },
  39353: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => ey,
      e: () => Ky
    });
    var Uy = Wy(2096),
      hy = Wy(2770),
      fy = Wy(37746),
      Zy = Wy(39343),
      cb = Wy(39351),
      Py = Wy(39358);
    const oy = "seat reservation expired.",
      By = "early_leave";

    function Ky(yb) {
      if (yb instanceof fy.d) return "expected";
      if (yb instanceof cb.t) return yb.networkLost ? "expected" : "unrecognised";
      if (yb instanceof cb.e) {
        if ("closed" === yb.stage && (0 === yb.code || (0, hy.i)(yb.code))) return "expected";
        if ("roomError" === yb.stage && (yb.serverText === oy || yb.serverText === By)) return "expected"
      }
      return yb instanceof cb.e || yb instanceof cb.n ? null === (0, Zy.m)(yb.code).name ? "unrecognised" : "known" : (0, Uy.e)(yb) ? "expected" : yb instanceof cb.x || yb instanceof Py.e ? "known" : "unrecognised"
    }

    function ey(yb) {
      return yb instanceof fy.d ? "timedOut" : "expected" !== Ky(yb) || (0, Uy.e)(yb) || yb instanceof cb.e && 1001 === yb.code ? void 0 : "failed"
    }
  },
  39368: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => oy,
      f: () => By
    });
    var Uy = Wy(39388),
      hy = Wy(37743),
      fy = Wy(35269),
      Zy = Wy(39374),
      cb = Wy(39310),
      Py = Wy(39351);
    const oy = Uy.c.timeForPlayerToConnect - 1e4;
    async function By(yb, bb, Wy) {
      const Uy = await yb.getTrafficCode().then((yb => null !== yb && void 0 !== yb ? yb : null), (yb => (console.error("[bloxd-wasm-client] could not get a traffic code", yb), null)));
      if (null === Uy) throw new Py.x;
      const {
        gameNameWithVariation: oy,
        lobbyName: By
      } = bb, Ky = () => {
        const bb = (0, fy.g)(yb, oy, By, Uy, (yb => {
          var bb;
          return null !== (bb = null === Wy || void 0 === Wy ? void 0 : Wy.isUsingCustomGameTexturePack(yb)) && void 0 !== bb && bb
        }));
        bb.joinOptions.wasmClient = !0, bb.joinOptions.budgetBasis = (0, Zy.i)();
        const hy = (0, cb.C)();
        return null !== hy && (bb.joinOptions.renderBackend = hy), bb
      }, {
        roomName: ey,
        joinOptions: qb
      } = Ky();
      return {
        endpoint: bb.endpoint,
        roomName: ey,
        joinOptions: qb,
        session: {
          gameNameWithVariation: oy,
          lobbyName: By,
          playerDbId: yb.whamm
        },
        optionsAfterRefusal: async bb => await (0, hy.b)(yb, bb) ? Ky().joinOptions : null
      }
    }
  },
  39454: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Oy,
      f: () => Ky,
      i: () => Vy,
      m: () => ly,
      p: () => gb
    });
    var Uy = Wy(39386),
      hy = Wy(39383);
    const fy = 64 * Uy.e,
      Zy = 40 * Uy.f,
      cb = 36 * Uy.f,
      Py = 20 * Uy.f,
      oy = 2 * Uy.f,
      By = 5 * Uy.f;

    function Ky(yb) {
      return "footprint" !== yb
    }
    const ey = 2 * Uy.f,
      qb = 4 * Uy.f,
      sy = 35 * Uy.f + ey + qb,
      Sy = 6.5 * Uy.f,
      Ey = 132.5 * Uy.e;

    function ly(yb) {
      const bb = Sy + (0, hy.l)(yb) + yb * Ey;
      return Math.ceil((2 * sy + bb) / fy) * fy
    }
    const mb = ly(hy.e),
      Cy = (Uy.f, Uy.f, Uy.f, {
        targetBytes: Zy,
        leastBytes: Py
      }),
      Ty = {
        targetBytes: cb,
        leastBytes: Py
      };

    function Vy(yb) {
      return yb >= hy.e ? Cy : Ty
    }
    const Jy = 2 * fy;

    function gb(yb, bb, Wy) {
      return yb + bb + Jy > (null !== Wy && void 0 !== Wy ? Wy : mb)
    }
    const Gy = {
      now: () => performance.now(),
      requestIdle: "function" === typeof requestIdleCallback ? yb => {
        requestIdleCallback(yb)
      } : null
    };
    class Oy {
      constructor(yb, bb, Wy) {
        let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Gy;
        this.memory = yb, this.readPeakStoredChunks = bb, this.onError = Wy, this.clock = Uy, this.pendingSince = null, this.stepsRefused = !1, this.stepsHeldUntil = null, this.shedding = null, this.sheds = 0, this.shedCap = null, this.stopped = !1, this.statsAt = -1 / 0, this.main = null, this.peakStoredChunks = 0, this.workers = new Map, this.replacedRefusals = {
          reserves: 0,
          allocations: 0
        }, this.joinReserveTaken = null, this.ceilingBytes = null, this.ballastCheckAt = -1 / 0, this.ballastPeakBytes = 0, this.distanceInUse = null, this.footprint = null
      }
      setShed(yb, bb, Wy) {
        this.shedding = {
          shed: yb,
          KU: bb,
          readDistanceInUse: Wy
        }
      }
      shedDistanceInUse() {
        return this.distanceInUse
      }
      setFootprint(yb) {
        this.footprint = yb
      }
      setCeiling(yb) {
        this.ceilingBytes = yb, this.call((() => {
          this.memory.setCeiling(yb)
        }), void 0)
      }
      ceilingMayRefuse(yb) {
        return gb(this.memory.memoryBytes(), yb, this.ceilingBytes)
      }
      reserveAtJoin(yb) {
        let {
          targetBytes: bb,
          leastBytes: Wy
        } = yb;
        const Uy = this.memory.memoryBytes(),
          hy = Uy + Wy,
          fy = Math.max(bb + (this.ballastOn() ? By : 0), hy),
          Zy = this.call((() => this.memory.reserveUpFront(fy) ? "target" : fy > hy && this.memory.reserveUpFront(hy) ? "least" : "none"), "none");
        if (this.stopped) return !1;
        if ("target" !== Zy) {
          const yb = "least" === Zy ? `took ${hy} bytes instead` : "frames grow it in steps";
          console.warn(`[bloxd-wasm-client] wasm memory: the join's reserve to ${fy} bytes was refused at ${Uy} bytes; ${yb}`)
        }
        return this.joinReserveTaken = Zy, this.takePressure(), this.takeBallast(this.clock.now()), this.refreshStats(), "target" !== Zy && this.shedFor("joinReserve"), "none" !== Zy
      }
      afterFrame() {
        if (this.stopped) return;
        const yb = this.clock.now(),
          bb = null !== this.stepsHeldUntil && yb >= this.stepsHeldUntil;
        if (bb && (this.stepsHeldUntil = null), this.takePressure() && null === this.stepsHeldUntil && !this.stepsRefused && this.shedFor("allocation"), this.stopped) return;
        if (null === this.stepsHeldUntil && yb >= this.ballastCheckAt && (this.takeBallast(yb), this.stopped)) return;
        const Wy = this.stepsRefused || null !== this.stepsHeldUntil ? "none" : this.call((() => this.memory.lowWater()), "none"),
          Uy = bb && "now" === Wy ? "none" : Wy,
          {
            requestIdle: hy
          } = this.clock;
        "now" === Uy || null !== this.pendingSince && yb - this.pendingSince >= 500 ? this.step() : "idle" === Uy && null === this.pendingSince && (null === hy ? this.step() : (this.pendingSince = yb, hy((() => {
          null !== this.pendingSince && this.step()
        })))), yb - this.statsAt >= 1e3 && (this.statsAt = yb, this.refreshStats(), this.checkFootprint())
      }
      refreshStats() {
        this.call((() => {
          var yb, bb;
          (this.main = this.memory.stats(), this.peakStoredChunks = this.readPeakStoredChunks(), this.sheds > 0 && null !== this.shedding) && (this.distanceInUse = null !== (bb = this.shedding.readDistanceInUse()) && void 0 !== bb ? bb : this.distanceInUse);
          null === (yb = this.footprint) || void 0 === yb || yb.read(this.memory.memoryBytes() + this.workersMemoryBytes())
        }), void 0)
      }
      stop() {
        this.stopped = !0, this.pendingSince = null
      }
      noteMeshWorker(yb, bb) {
        this.noteWorker(`Mesh${yb}`, bb)
      }
      meshWorkerGone(yb) {
        this.workerGone(`Mesh${yb}`)
      }
      noteWorldgen(yb) {
        this.noteWorker("Worldgen", yb)
      }
      worldgenGone() {
        this.workerGone("Worldgen")
      }
      noteWorker(yb, bb) {
        const Wy = this.workers.get(yb);
        null !== Wy && void 0 !== Wy && Wy.gone && (this.replacedRefusals.reserves += Wy.stats.reservesRefused, this.replacedRefusals.allocations += Wy.stats.allocationsRefused), this.workers.set(yb, {
          stats: bb,
          gone: !1
        })
      }
      workerGone(yb) {
        const bb = this.workers.get(yb);
        bb && (bb.gone = !0)
      }
      details() {
        var yb, bb;
        const Wy = {
          wasmMemoryNow: `${(0,Uy.h)(this.memory.memoryBytes())} MiB`
        };
        null !== this.joinReserveTaken && (Wy.wasmMemoryJoinReserve = this.joinReserveTaken), this.sheds > 0 && (Wy.wasmMemoryShed = `${this.sheds}, chunk cap ${this.shedCap}`);
        const hy = this.main;
        if (hy) {
          Wy.wasmMemoryMain = Ry(hy);
          const yb = Math.max(0, hy.peakLiveBytes - this.ballastPeakBytes),
            bb = 0 === this.peakStoredChunks ? "-" : (yb / this.peakStoredChunks / Uy.e).toFixed(1);
          Wy.wasmMemoryChunks = `peak stored ${this.peakStoredChunks}, peak live per stored chunk ${bb} KiB`
        }
        for (const [Uy, {
            stats: Zy,
            gone: cb
          }] of this.workers) Wy[`wasmMemory${Uy}`] = Ry(Zy) + (cb ? " (gone)" : "");
        const fy = null !== (yb = null === (bb = this.footprint) || void 0 === bb ? void 0 : bb.describe()) && void 0 !== yb ? yb : null;
        return null !== fy && (Wy.wasmMemoryFootprint = fy), Wy
      }
      pageKillSnapshot() {
        var yb, bb, Wy, hy, fy;
        let Zy = (null !== (yb = null === (bb = this.main) || void 0 === bb ? void 0 : bb.reservesRefused) && void 0 !== yb ? yb : 0) + this.replacedRefusals.reserves,
          cb = (null !== (Wy = null === (hy = this.main) || void 0 === hy ? void 0 : hy.allocationsRefused) && void 0 !== Wy ? Wy : 0) + this.replacedRefusals.allocations;
        for (const {
            stats: Uy
          }
          of this.workers.values()) Zy += Uy.reservesRefused, cb += Uy.allocationsRefused;
        return {
          wasmMainMiB: Number((0, Uy.h)(this.memory.memoryBytes())),
          wasmWorkersMiB: Number((0, Uy.h)(this.workersMemoryBytes())),
          peakStoredChunks: this.peakStoredChunks,
          refusedReserves: Zy,
          refusedAllocations: cb,
          sheds: this.sheds,
          ...null === (fy = this.footprint) || void 0 === fy ? void 0 : fy.snapshot()
        }
      }
      workersMemoryBytes() {
        let yb = 0;
        for (const {
            stats: bb,
            gone: Wy
          }
          of this.workers.values()) yb += Wy ? 0 : bb.memoryBytes;
        return yb
      }
      checkFootprint() {
        null === this.footprint || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil || this.footprint.takeShed() && this.shedFor("footprint")
      }
      step() {
        this.pendingSince = null, this.call((() => this.memory.reserveAhead(oy)), !0) || (null === this.shedding ? this.stopSteps("a step ahead was refused (the ceiling, or the browser)") : this.shedFor("step"))
      }
      ballastOn() {
        return null !== this.shedding
      }
      takeBallast(yb) {
        if (!this.ballastOn() || null === this.joinReserveTaken) return;
        this.ballastCheckAt = yb + 1e3;
        const bb = this.call((() => this.memory.takeBallast()), 0);
        this.ballastPeakBytes = Math.max(this.ballastPeakBytes, bb)
      }
      takePressure() {
        return this.ballastOn() && this.call((() => this.memory.takePressure()), !1)
      }
      stopSteps(yb) {
        this.stepsRefused = !0, console.warn(`[bloxd-wasm-client] wasm memory: ${yb}: frames grow on demand from here`)
      }
      shedFor(yb) {
        const {
          shedding: bb
        } = this;
        if (null === bb) return;
        this.pendingSince = null;
        const Wy = this.call((() => bb.shed(yb)), null);
        this.stopped || (null !== Wy ? (this.sheds++, this.shedCap = Wy, this.stepsHeldUntil = this.clock.now() + 5e3, this.refreshStats(), bb.KU(yb, this.sheds, this.details())) : Ky(yb) && this.stopSteps("nothing is left to shed"))
      }
      call(yb, bb) {
        if (this.stopped) return bb;
        try {
          return yb()
        } catch (Wy) {
          return this.stop(), this.onError(Wy), bb
        }
      }
    }

    function Ry(yb) {
      const bb = (yb, bb) => `${yb}/${(0,Uy.h)(bb)}`;
      return `memory ${(0,Uy.h)(yb.memoryBytes)} live ${(0,Uy.h)(yb.liveBytes)} peak ${(0,Uy.h)(yb.peakLiveBytes)} unused ${(0,Uy.h)(yb.unusedBytes)} ceiling ${(0,Uy.h)(yb.ceilingBytes)} MiB; grows upFront ${bb(yb.grows.upFront,yb.grownBytes.upFront)} ahead ${bb(yb.grows.ahead,yb.grownBytes.ahead)} inFrame ${bb(yb.grows.onDemandInFrame,yb.grownBytes.onDemandInFrame)} other ${bb(yb.grows.onDemand,yb.grownBytes.onDemand)}; refused reserves ${yb.reservesRefused} allocations ${yb.allocationsRefused}`
    }
  },
  39461: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Zy,
      e: () => cb,
      h: () => Ky,
      l: () => oy
    });
    var Uy = Wy(3996),
      hy = Wy(39466),
      fy = Wy(39473);
    const Zy = 395,
      cb = 2147483648,
      Py = new Uint8Array(0);
    class oy extends Error {
      constructor() {
        super(...arguments), this.name = "ModelRingError"
      }
    }
    class By extends Error {
      constructor() {
        super(...arguments), this.name = "ModelPackRefusedError"
      }
    }
    class Ky {
      constructor(yb, bb, Wy) {
        var Uy, fy, Zy, cb;
        let Py = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        this.files = yb, this.build = bb, this.onFailure = Wy, this.ready = [], this.pending = new Map, this.written = new Map, this.drawn = new Map, this.undrawn = new Set, this.DW = new Map, this.keptTotal = 0, this.refusedPack = new Map, this.startupLeft = void 0, this.fetchFile = void 0, this.onWritten = void 0, this.onTaken = void 0, this.onPackFileFailed = void 0, this.refreshes = 0, this.nextSeq = 1, this.fetchFile = null !== (Uy = Py.fetchFile) && void 0 !== Uy ? Uy : yb => (0, hy.h)(yb), this.onWritten = null !== (fy = Py.onWritten) && void 0 !== fy ? fy : null, this.onTaken = null !== (Zy = Py.onTaken) && void 0 !== Zy ? Zy : null, this.onPackFileFailed = null !== (cb = Py.onPackFileFailed) && void 0 !== cb ? cb : null, this.startupLeft = new Set(yb.startup);
        for (const hy of yb.startup) this.request(hy)
      }
      get startupDone() {
        return 0 === this.startupLeft.size
      }
      get waiting() {
        return this.ready.length
      }
      get asking() {
        return this.pending.size
      }
      get inFlight() {
        return this.pending.size - this.ready.length
      }
      get unanswered() {
        return this.written.size
      }
      get keptBytes() {
        return this.keptTotal
      }
      drawnUrl(yb) {
        return this.drawn.get(yb)
      }
      request(yb) {
        const bb = this.pending.get(yb);
        if (!0 === (null === bb || void 0 === bb ? void 0 : bb.ask)) return;
        const Wy = this.vU(yb, !0);
        Wy.recheck = void 0 !== bb;
        const Uy = this.drawn.get(yb);
        if (void 0 !== Uy) return Wy.kW = !0, Wy.recheck = !0, void this.fetch(yb, Wy, Uy);
        this.fetchWanted(yb, Wy)
      }
      async refresh() {
        const yb = ++this.refreshes,
          bb = new Set;
        for (const Zy of [this.drawn.keys(), this.written.keys(), this.pending.keys(), this.undrawn.values()])
          for (const yb of Zy) 0 === (yb & hy.e) && bb.add(yb);
        const Wy = [...bb];
        let Uy;
        try {
          Uy = await Promise.all(Wy.map((yb => this.wanted(yb))))
        } catch {
          return null
        }
        if (yb !== this.refreshes) return null;
        const fy = {
          resent: 0,
          refetched: 0,
          delivered: Wy.filter((yb => this.drawn.has(yb))).length
        };
        return Wy.forEach(((yb, bb) => {
          const {
            url: Wy,
            inPlaceOf: hy
          } = Uy[bb], Zy = this.pending.get(yb);
          if (void 0 !== Zy) {
            if (Zy.kW || void 0 === Zy.url) return void(Zy.recheck = !0);
            if (Zy.url === Wy) return;
            fy.refetched++;
            const bb = this.vU(yb, Zy.ask);
            return bb.recheck = Zy.recheck, void this.fetch(yb, bb, Wy, hy)
          }
          const cb = this.written.get(yb);
          void 0 === cb ? this.drawn.get(yb) !== (null !== Wy && void 0 !== Wy ? Wy : void 0) && (fy.resent++, this.fetch(yb, this.vU(yb, !1), Wy, hy)) : cb.url !== (null !== Wy && void 0 !== Wy ? Wy : "") && (cb.attempt.recheck = !0)
        })), fy
      }
      taken(yb, bb) {
        const Wy = new Set,
          Uy = new Set;
        for (const hy of Array.from(bb)) 0 === (hy & cb) ? Wy.add(hy) : Uy.add((hy & ~cb) >>> 0);
        for (const [hy, fy] of this.written) fy.seq > yb || (this.written.delete(hy), Wy.has(fy.seq) ? this.refusedFile(hy, fy) : this.takenFile(hy, fy, !fy.empty && !Uy.has(fy.seq)))
      }
      takenFile(yb, bb, Wy) {
        const {
          attempt: Uy
        } = bb;
        if (Wy) {
          var hy;
          this.drawn.set(yb, bb.url), this.undrawn.delete(yb), void 0 !== Uy.inPlaceOf ? this.refusedPack.set(yb, Uy.inPlaceOf) : Uy.kW || this.refusedPack.delete(yb), null === (hy = this.onTaken) || void 0 === hy || hy.call(this, yb, !0);
          const Wy = this.pending.get(yb);
          if (!0 === (null === Wy || void 0 === Wy ? void 0 : Wy.kW) && Wy.url !== bb.url) {
            const Wy = this.vU(yb, !0);
            Wy.kW = !0, Wy.recheck = !0, this.fetch(yb, Wy, bb.url)
          }
        } else {
          var fy;
          this.drawn.has(yb) || this.undrawn.add(yb), null === (fy = this.onTaken) || void 0 === fy || fy.call(this, yb, !1)
        }
        Uy.recheck && this.resendIfChanged(yb)
      }
      refusedFile(yb, bb) {
        var Wy, Uy;
        if (null === (Wy = this.onTaken) || void 0 === Wy || Wy.call(this, yb, !1), this.refusedPack.set(yb, bb.url), this.pending.has(yb)) return void(null === (Uy = this.onPackFileFailed) || void 0 === Uy || Uy.call(this, yb, ey(bb.url)));
        const hy = this.vU(yb, bb.attempt.ask);
        hy.recheck = bb.attempt.recheck, this.afterRefusal(yb, hy, bb.url)
      }
      async afterRefusal(yb, bb, Wy) {
        var Uy;
        let hy;
        try {
          hy = await this.wanted(yb)
        } catch (fy) {
          return void(this.pending.get(yb) === bb && this.giveUp(yb, bb, Wy, fy))
        }
        this.pending.get(yb) === bb && (hy.inPlaceOf !== Wy ? bb.ask || (null !== (Uy = hy.url) && void 0 !== Uy ? Uy : void 0) !== this.drawn.get(yb) ? this.fetch(yb, bb, hy.url, hy.inPlaceOf) : this.pending.delete(yb) : this.fallBack(yb, bb, Wy, ey(Wy)))
      }
      vU(yb, bb) {
        const Wy = {
          url: void 0,
          ask: bb,
          kW: !1,
          recheck: !1,
          inPlaceOf: void 0
        };
        this.pending.set(yb, Wy);
        for (let Uy = this.ready.length - 1; Uy >= 0; Uy--) this.ready[Uy].file === yb && this.ready.splice(Uy, 1);
        return Wy
      }
      async wanted(yb) {
        const bb = await this.files.url(yb);
        return null !== bb && this.refusedPack.get(yb) === bb ? {
          url: await this.files.shippedUrl(yb),
          inPlaceOf: bb
        } : {
          url: bb,
          inPlaceOf: void 0
        }
      }
      fetchWanted(yb, bb) {
        const Wy = this.files.url(yb);
        Wy instanceof Promise ? Wy.then((Wy => {
          this.fetchFound(yb, bb, Wy)
        }), (Wy => {
          this.pending.get(yb) === bb && this.giveUp(yb, bb, "", Wy)
        })) : this.fetchFound(yb, bb, Wy)
      }
      fetchFound(yb, bb, Wy) {
        null !== Wy && this.refusedPack.get(yb) === Wy ? Promise.resolve(this.files.shippedUrl(yb)).then((Uy => {
          this.fetch(yb, bb, Uy, Wy)
        }), (Uy => {
          this.pending.get(yb) === bb && this.giveUp(yb, bb, Wy, Uy)
        })) : this.fetch(yb, bb, Wy)
      }
      fetch(yb, bb, Wy, Uy) {
        this.pending.get(yb) === bb && (bb.url = Wy, bb.inPlaceOf = Uy, null !== Wy ? this.load(yb, bb, Wy) : this.buildFile(yb, bb, "", Py))
      }
      load(yb, bb, Wy) {
        const Uy = this.DW.get(yb);
        (null === Uy || void 0 === Uy ? void 0 : Uy.url) !== Wy ? this.fetchFile(Wy).then((Uy => {
          var hy, fy;
          this.pending.get(yb) === bb && (this.keptTotal += Uy.byteLength - (null !== (hy = null === (fy = this.DW.get(yb)) || void 0 === fy ? void 0 : fy.glb.byteLength) && void 0 !== hy ? hy : 0), this.DW.set(yb, {
            url: Wy,
            glb: Uy
          }), this.buildFile(yb, bb, Wy, Uy))
        }), (Uy => {
          this.pending.get(yb) === bb && this.fallBack(yb, bb, Wy, Uy)
        })) : this.buildFile(yb, bb, Wy, Uy.glb)
      }
      buildFile(yb, bb, Wy, Zy) {
        let cb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Py = Zy.byteLength > 0 && (0, hy.j)(Wy) ? (yb | hy.c) >>> 0 : yb;
        this.build(Py, Zy).then((hy => {
          if (this.pending.get(yb) !== bb) return;
          if (Uy.o + (0, Uy.Wd)(hy.byteLength) > Uy.rc) return void this.ringRefused(yb, bb, Wy, new oy(`${qb(Wy)}'s record is ${hy.byteLength-fy.b} bytes, past the cmd ring's ${Uy.rc}`), cb);
          const Py = {
            file: yb,
            url: Wy,
            payload: hy,
            glb: Zy,
            attempt: bb
          };
          cb ? this.ready.unshift(Py) : this.ready.push(Py)
        }))
      }
      async fallBack(yb, bb, Wy, Uy) {
        var hy;
        let fy = null,
          Zy = Uy;
        try {
          fy = await this.files.shippedUrl(yb)
        } catch (cb) {
          Zy = cb
        }
        this.pending.get(yb) === bb && (null !== fy && fy !== Wy ? (null === (hy = this.onPackFileFailed) || void 0 === hy || hy.call(this, yb, Uy), bb.ask || this.drawn.get(yb) !== fy ? (bb.url = fy, bb.inPlaceOf = Wy, this.load(yb, bb, fy)) : this.pending.delete(yb)) : this.giveUp(yb, bb, Wy, Zy))
      }
      ringRefused(yb, bb, Wy, Uy) {
        let fy = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        (0, hy.j)(Wy) ? this.fallBack(yb, bb, Wy, Uy): this.giveUp(yb, bb, Wy, Uy, fy)
      }
      giveUp(yb, bb, Wy, Uy) {
        let hy = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        this.onFailure({
          file: yb,
          url: qb(Wy),
          error: Uy,
          startup: this.startupLeft.has(yb)
        }), bb.ask || !this.drawn.has(yb) ? this.buildFile(yb, bb, Wy, Py, hy) : this.pending.delete(yb)
      }
      async resendIfChanged(yb) {
        var bb;
        if (0 !== (yb & hy.e)) return;
        let Wy;
        try {
          Wy = await this.wanted(yb)
        } catch {
          return
        }(null !== (bb = Wy.url) && void 0 !== bb ? bb : void 0) === this.drawn.get(yb) || this.pending.has(yb) || this.written.has(yb) || this.fetch(yb, this.vU(yb, !1), Wy.url, Wy.inPlaceOf)
      }
      drain(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null === yb) return;
        let Wy = 0,
          Uy = 0;
        for (; Uy < this.ready.length && Wy < 262144;) {
          const By = this.ready[Uy];
          if (this.written.has(By.file)) {
            Uy++;
            continue
          }
          const Ky = this.nextSeq;
          new DataView(By.payload.buffer, By.payload.byteOffset, By.payload.byteLength).setUint32(fy.e, Ky, !0);
          const ey = By.attempt.kW && By.glb.byteLength > 0 && this.drawn.get(By.file) === By.url;
          if (yb(Zy, ey ? 1 : 0, By.payload)) {
            if (this.nextSeq = Ky >= cb - 1 ? 1 : Ky + 1, this.ready.splice(Uy, 1), Wy += By.payload.byteLength, this.pending.delete(By.file), this.startupLeft.delete(By.file), this.written.set(By.file, {
                seq: Ky,
                url: By.url,
                empty: 0 === By.glb.byteLength,
                attempt: By.attempt
              }), By.glb.byteLength > 0) try {
              var hy;
              null === (hy = this.onWritten) || void 0 === hy || hy.call(this, By.file, By.glb)
            } catch (Py) {
              console.warn("ModelFeed: reading the file's images failed", Py)
            }
          } else {
            if (null === bb || 0 === By.glb.byteLength || bb(By.payload.byteLength)) return;
            this.ready.splice(Uy, 1);
            const yb = new oy(`${qb(By.url)}'s record is ${By.payload.byteLength-fy.b} bytes, more than the cmd ring can grow to take`);
            this.ringRefused(By.file, By.attempt, By.url, yb, !0)
          }
        }
      }
    }

    function ey(yb) {
      return new By(`presentation refused ${qb(yb)}`)
    }

    function qb(yb) {
      return yb.startsWith("data:") ? `${yb.slice(0,Math.min(Math.max(yb.indexOf(","),5),64))},...` : yb
    }
  },
  39466: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Zy,
      e: () => fy,
      h: () => By,
      j: () => cb,
      k: () => oy,
      m: () => Py
    });
    var Uy = Wy(3004),
      hy = Wy(2515);
    const fy = 2147483648,
      Zy = 1073741824;

    function cb(yb) {
      return yb.startsWith("data:")
    }

    function Py(yb) {
      let {
        onTableFailed: bb,
        packUrl: Wy
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const Uy = oy();
      Uy.catch((yb => {
        null === bb || void 0 === bb || bb(yb)
      }));
      const hy = async bb => (await Uy).fileUrl((bb & ~fy) >>> 0, yb);
      return {
        startup: [],
        url: async yb => {
          if (Wy && 0 === (yb & fy)) {
            const bb = await Uy,
              hy = bb.filePackName(yb),
              fy = null === hy || "lifeform" === bb.fileSource(yb) ? null : Wy(hy);
            if (null !== fy) return fy
          }
          return hy(yb)
        },
        shippedUrl: hy
      }
    }

    function oy() {
      return Wy.e(38).then((() => Wy(41892)))
    }
    async function By(yb) {
      let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return yb.startsWith("data:") ? (0, hy.b)(yb.slice(yb.indexOf(",") + 1), bb) : (0, Uy.B)(yb, {
        spare: bb
      })
    }
  },
  39473: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Py,
      e: () => oy,
      h: () => ey,
      k: () => sy,
      l: () => Ky,
      o: () => qb
    });
    const Uy = 826427981,
      hy = 1,
      fy = 2,
      Zy = 44,
      cb = 46,
      Py = 8,
      oy = 4;

    function By(yb, bb, Wy) {
      const hy = (new TextEncoder).encode(Wy),
        fy = Py + 4 * (bb.length + 2),
        Zy = new Uint8Array(fy + (hy.byteLength + 3 & -4)),
        cb = new DataView(Zy.buffer);
      return cb.setUint32(0, yb, !0), cb.setUint32(Py, Uy, !0), bb.forEach(((yb, bb) => {
        cb.setUint32(Py + 4 * (bb + 1), yb, !0)
      })), cb.setUint32(fy - 4, hy.byteLength, !0), Zy.set(hy, fy), Zy
    }

    function Ky(yb, bb) {
      return By(yb, [fy], bb)
    }

    function ey(yb, bb) {
      return By(yb, [hy, cb], bb)
    }

    function qb(yb, bb) {
      return By(yb, [hy, Zy], bb)
    }

    function sy(yb) {
      const bb = Py;
      if (yb.byteLength < bb + 12) return !1;
      const Wy = new DataView(yb.buffer, yb.byteOffset, yb.byteLength);
      return Wy.getUint32(bb, !0) === Uy && Wy.getUint32(bb + 4, !0) === hy && Wy.getUint32(bb + 8, !0) === Zy
    }
  },
  4243: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => cb,
      c: () => Zy
    });
    var Uy = Wy(2481),
      hy = Wy(4246);
    let fy = null;

    function Zy(yb, bb) {
      fy = {
        pack: yb.metaData.id === Uy.c ? null : yb,
        prompt: bb
      }
    }

    function cb(yb, bb) {
      const Wy = fy;
      null !== Wy && (0, hy.c)(Wy.pack, yb) && (fy = null, bb && Wy.prompt())
    }
  },
  39531: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => By,
      f: () => fy,
      h: () => Ky,
      k: () => Zy
    });
    var Uy = Wy(39520),
      hy = Wy(39466);
    const fy = new class {
      constructor() {
        this.page = null, this.session = void 0, this.follower = null, this.isWanted = !1, this.listeners = new Set, this.pageListeners = new Set, this.wantedListeners = new Set
      }
      get current() {
        return void 0 === this.session ? this.page : this.session
      }
      setPageFiles(yb) {
        this.change((() => {
          this.page = yb
        }))
      }
      setSessionFiles(yb) {
        const bb = void 0 !== this.session && void 0 === yb;
        if (this.change((() => {
            this.session = yb
          })), bb)
          for (const Wy of [...this.pageListeners]) Wy()
      }
      showsPage() {
        return void 0 === this.session
      }
      onPageShown(yb) {
        return this.pageListeners.add(yb), () => {
          this.pageListeners.delete(yb)
        }
      }
      setFollower(yb) {
        this.follower = yb, this.startFollower()
      }
      wanted() {
        this.isWanted = !0;
        for (const yb of [...this.wantedListeners]) yb();
        this.startFollower()
      }
      onWanted(yb) {
        return this.wantedListeners.add(yb), () => {
          this.wantedListeners.delete(yb)
        }
      }
      onChange(yb) {
        return this.listeners.add(yb), () => {
          this.listeners.delete(yb)
        }
      }
      startFollower() {
        const yb = this.follower;
        this.isWanted && null !== yb && (this.follower = null, yb((() => {
          this.follower = yb
        })))
      }
      change(yb) {
        const bb = this.current;
        if (yb(), this.current !== bb)
          for (const Wy of this.listeners) Wy()
      }
    };

    function Zy(yb, bb) {
      return {
        ...yb,
        armourAtlasUrl: () => {
          var Wy, Uy;
          return null !== (Wy = null === (Uy = bb()) || void 0 === Uy ? void 0 : Uy.armourAtlasUrl()) && void 0 !== Wy ? Wy : yb.armourAtlasUrl()
        },
        lifeformAtlasUrl: Wy => Py(bb(), (yb => yb.LIFEFORM_ATLAS_PATHS[Wy]), (() => yb.lifeformAtlasUrl(Wy))),
        groupAtlasUrl: Wy => Py(bb(), (yb => yb.GROUP_ATLAS_PATHS[Wy]), (() => yb.groupAtlasUrl(Wy))),
        particleItemUrl: Uy => oy(bb(), (async () => {
          const yb = await Wy.e(35).then((() => Wy(50241))).catch((() => null));
          return (null === yb || void 0 === yb ? void 0 : yb.particleItemSprite(Uy)) || null
        }), (() => yb.particleItemUrl(Uy))),
        blockImageUrl: Wy => oy(bb(), (async () => {
          var yb, bb;
          return null !== (yb = null === (bb = await cb()) || void 0 === bb ? void 0 : bb.blockImageName(Wy)) && void 0 !== yb ? yb : null
        }), (() => yb.blockImageUrl(Wy)))
      }
    }

    function cb() {
      return (0, hy.k)().catch((() => null))
    }

    function Py(yb, bb, Wy) {
      return oy(yb, (async () => {
        var yb;
        const Wy = await cb(),
          Uy = null === Wy ? null : bb(Wy),
          hy = null !== (yb = null === Uy || void 0 === Uy ? void 0 : Uy.slice(Uy.lastIndexOf("/") + 1)) && void 0 !== yb ? yb : null;
        return "Player_Atlas" === hy ? null : hy
      }), Wy)
    }
    async function oy(yb, bb, Wy) {
      if (null !== yb) {
        const Wy = await bb(),
          Uy = null === Wy ? null : yb.textureUrl(Wy);
        if (null !== Uy) return Uy
      }
      return Wy()
    }
    const By = 0;

    function Ky(yb) {
      const bb = [Uy.j.ArmourAtlas, Uy.j.LifeformAtlas, Uy.j.GroupAtlas, Uy.j.BlockImage, Uy.j.Particle];
      yb.reload(bb, (yb => {
        switch (yb.kind) {
          case Uy.j.Particle:
            return yb.index === Uy.m.Item;
          case Uy.j.LifeformAtlas:
            return yb.word !== By;
          default:
            return !0
        }
      }))
    }
  },
  39391: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Uy,
      h: () => cb,
      l: () => Zy,
      m: () => hy,
      q: () => fy
    });
    const Uy = 1e3;

    function hy() {
      Py((() => {
        window.location.reload()
      }))
    }

    function fy() {
      return new Promise((() => {}))
    }

    function Zy(yb) {
      Py((() => {
        window.location.replace(yb(window.location.href))
      }))
    }

    function cb(yb) {
      Promise.resolve().then((() => Wy(103))).then((bb => {
        let {
          currentUrl: Wy
        } = bb;
        Zy((() => Wy.mergeSearchParamsInto(yb)))
      }), (() => {
        Zy((() => yb))
      }))
    }

    function Py(yb) {
      null !== window.onbeforeunload ? Promise.resolve().then((() => Wy(1496))).then((bb => {
        let {
          prepareForUnloadWithoutConfirmation: Wy
        } = bb;
        try {
          Wy()
        } catch (Uy) {
          console.warn("[bloxd-wasm-client] prepareForUnloadWithoutConfirmation threw: leaving plainly", Uy), window.onbeforeunload = null
        }
        yb()
      }), (() => {
        window.onbeforeunload = null, yb()
      })) : yb()
    }
  },
  4246: (yb, bb, Wy) => {
    function Uy(yb, bb) {
      return hy(yb, bb)
    }

    function hy(yb, bb) {
      if (yb === bb) return !0;
      if ("object" !== typeof yb || "object" !== typeof bb || null === yb || null === bb || Array.isArray(yb) !== Array.isArray(bb)) return !1;
      const Wy = yb,
        Uy = bb,
        fy = Object.keys(Wy);
      return fy.length === Object.keys(Uy).length && fy.every((yb => Object.prototype.hasOwnProperty.call(Uy, yb) && hy(Wy[yb], Uy[yb])))
    }
    Wy.d(bb, {
      c: () => Uy
    })
  },
  39432: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => gb,
      f: () => Vy,
      i: () => Ey,
      l: () => Sy
    });
    var Uy = Wy(37735),
      hy = Wy(5740),
      fy = Wy(37730),
      Zy = Wy(37746),
      cb = Wy(2363),
      Py = Wy(39343),
      oy = Wy(39351);
    const By = {
        "X-Requested-With": "XMLHtttpRequest"
      },
      Ky = 3,
      ey = [500, 1500];

    function qb(yb) {
      const bb = new URL(yb);
      return {
        secure: "https:" === bb.protocol || "wss:" === bb.protocol,
        host: bb.host,
        pathname: bb.pathname.replace(/\/+$/, ""),
        search: bb.searchParams.toString()
      }
    }

    function sy(yb, bb, Wy) {
      const {
        secure: Uy,
        host: hy,
        pathname: fy,
        search: Zy
      } = qb(yb);
      return `${Uy?"https":"http"}://${hy}${fy}/matchmake/${bb}/${encodeURIComponent(Wy)}${Zy?`?${Zy}`:""}`
    }

    function Sy(yb, bb) {
      var Wy;
      const Uy = null !== (Wy = bb.protocol) && void 0 !== Wy ? Wy : "ws";
      if ("ws" !== Uy) throw new Error(`seat reservation asks for the ${Uy} transport`);
      const {
        secure: hy,
        host: fy,
        pathname: Zy,
        search: cb
      } = qb(yb), Py = new URLSearchParams(cb);
      Py.append("sessionId", bb.sessionId), bb.reconnectionToken && Py.append("reconnectionToken", bb.reconnectionToken);
      return `${hy?"wss":"ws"}://${bb.room.publicAddress||`${fy}${Zy}`}/${bb.room.processId}/${bb.room.roomId}?${Py.toString()}`
    }
    async function Ey(yb, bb, Wy) {
      var Py;
      let By = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const qb = null !== (Py = By.sleep) && void 0 !== Py ? Py : Uy.b,
        Sy = new hy.c(By.signal),
        Ey = new cb.b(Zy.c, (() => {
          (0, hy.f)(Sy.controller, new Zy.d)
        })),
        {
          signal: Ty
        } = Sy;
      try {
        return await (0, fy.i)((() => async function(yb, bb, Wy, Uy) {
          var fy;
          const {
            signal: Zy,
            sleep: cb
          } = Uy, Py = sy(yb, "joinOrCreate", bb), By = JSON.stringify(Wy);
          let qb = null;
          for (let sy = 0; sy < Ky; sy++) {
            var Sy;
            if (sy > 0) await cb(null !== (Sy = ey[sy - 1]) && void 0 !== Sy ? Sy : 1500, Zy);
            let yb;
            (0, hy.j)(Zy);
            try {
              yb = await mb(Py, By, Uy)
            } catch (Ey) {
              (0, hy.j)(Zy), qb = ly(Ey);
              continue
            }
            const {
              response: bb,
              answer: Wy,
              refusal: fy,
              lost: Ky
            } = yb;
            if (null === Ky) {
              if (null !== fy) throw Cy(fy, Wy);
              if (bb.ok && null !== Wy && Gy(Wy)) return Wy;
              qb = new oy.t(`seat request answered HTTP ${bb.status}${null===Wy?" without JSON":" without a seat"}`, !1)
            } else qb = ly(Ky.error)
          }
          throw null !== (fy = qb) && void 0 !== fy ? fy : new oy.t("seat request made no attempt", !1)
        }(yb, bb, Wy, {
          ...By,
          signal: Ty,
          sleep: qb
        })), Ty, qb)
      } finally {
        Ey.stop(), Sy.unfollow()
      }
    }

    function ly(yb) {
      return new oy.t(yb instanceof Error ? yb.message : String(yb), !0, yb)
    }
    async function mb(yb, bb, Wy) {
      var Uy;
      const {
        signal: fy
      } = Wy, Zy = null !== (Uy = Wy.fetch) && void 0 !== Uy ? Uy : fetch, cb = await Zy(yb, {
        method: "POST",
        headers: {
          ...By,
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: bb,
        credentials: "include",
        signal: fy
      }), {
        answer: Py,
        lost: oy
      } = await async function(yb) {
        try {
          const bb = await yb.json();
          return {
            answer: "object" === typeof bb && null !== bb ? bb : null,
            lost: null
          }
        } catch (bb) {
          return {
            answer: null,
            lost: bb instanceof SyntaxError ? null : {
              error: bb
            }
          }
        }
      }(cb), Ky = null !== Py && "string" === typeof Py.error ? Py.error : null;
      var ey;
      null !== Ky && (null === (ey = Wy.onRefusal) || void 0 === ey || ey.call(Wy));
      return (0, hy.j)(fy), {
        response: cb,
        answer: Py,
        refusal: Ky,
        lost: oy
      }
    }

    function Cy(yb, bb) {
      return new oy.n(yb, "number" === typeof(null === bb || void 0 === bb ? void 0 : bb.code) ? bb.code : 0, (0, Py.r)(yb).text)
    }
    class Ty extends Error {
      constructor(yb, bb) {
        super(yb), this.code = bb, this.name = "SeatHttpError"
      }
    }
    async function Vy(yb, bb, Wy) {
      let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        response: hy,
        answer: fy,
        refusal: Zy,
        lost: cb
      } = await mb(sy(yb, "reconnect", bb), JSON.stringify({
        reconnectionToken: Wy
      }), Uy);
      if (null !== cb) throw cb.error;
      if (!hy.ok) {
        const yb = null !== fy && "number" === typeof fy.code && 0 !== fy.code ? fy.code : hy.status;
        throw new Ty(`the seat's reconnect was refused: ${null!==Zy&&void 0!==Zy?Zy:`HTTP ${hy.status}`}`, yb)
      }
      if (null !== Zy) throw Cy(Zy, fy);
      if (null === fy || !Gy(fy)) throw new Error("the seat's reconnect answered " + (null === fy ? "without JSON" : "without a seat"));
      return {
        ...fy,
        reconnectionToken: Wy
      }
    }
    const Jy = 10;

    function gb(yb) {
      if (yb.byteLength < 2 || yb[0] !== Jy) return null;
      const bb = 2 + yb[1];
      return bb > yb.byteLength ? null : (new TextDecoder).decode(yb.subarray(2, bb))
    }

    function Gy(yb) {
      const bb = yb.room;
      return "string" === typeof yb.sessionId && "object" === typeof bb && null !== bb && "string" === typeof bb.roomId && "string" === typeof bb.processId && "string" === typeof bb.name
    }
  },
  39113: (yb, bb, Wy) => {
    Wy.d(bb, {
      C: () => My,
      F: () => Ty,
      H: () => Vy,
      L: () => Ey,
      N: () => Ry,
      O: () => Xy,
      Q: () => sy,
      U: () => uy,
      Y: () => mb,
      Z: () => ly,
      ab: () => Cy,
      d: () => hy,
      db: () => Jy,
      g: () => ny,
      j: () => Yy,
      l: () => qb,
      p: () => Sy,
      t: () => ib,
      u: () => Gy,
      v: () => vb,
      x: () => Oy,
      z: () => gb
    });
    var Uy = Wy(2321);
    const hy = {
      Chat: 49,
      UiRequestResponded: 91,
      CodeCollab: 89,
      SetCustomLobbyBlock: 60,
      UpdateBook: 56,
      UpdateBoard: 33,
      UpdateMyCosmetic: 45,
      PlayEmote: 90,
      ReqDiscordReportKey: 9,
      UserReport: 11,
      LobbyReport: 12,
      CustomGameReport: 13,
      IgnoreUser: 34,
      ShopMenuChanged: 26,
      GeneralCookieSet: 72,
      CompleteTask: 69,
      OpenIronChest: 80,
      ChangeIronChestPasskey: 81,
      StopSleeping: 78,
      AnalyticsUpdate: 3,
      UiRequestResp: 15,
      QteResponse: 16,
      ItemBought: 25,
      LeaderboardRequest: 40,
      UpdateNameTag: 53
    };

    function fy(yb, bb) {
      return !ArrayBuffer.isView(yb) || yb instanceof DataView ? Array.isArray(yb) ? yb.map((yb => bb(yb))) : yb : Array.from(yb, (yb => bb(yb)))
    }

    function Zy(yb) {
      if ("string" !== typeof yb) return yb;
      for (let bb = 0; bb < yb.length; bb++) {
        const Wy = yb.charCodeAt(bb);
        if (Wy >= 55296 && Wy <= 57343) return Py.decode(cb.encode(yb))
      }
      return yb
    }
    const cb = new TextEncoder,
      Py = new TextDecoder;

    function oy(yb) {
      return yb
    }
    let By;

    function Ky(yb) {
      return null === yb || "object" !== typeof yb ? yb : [Zy(yb.CU), Zy(yb.pR)]
    }

    function ey(yb) {
      return null === yb || "object" !== typeof yb ? yb : [fy(yb.Dv, oy), fy(yb.RP, oy)]
    }

    function qb(yb) {
      return null === (bb = yb) || "object" !== typeof bb ? bb : [Zy(bb.vc), Zy(bb.mH)];
      var bb
    }

    function sy(yb) {
      return null === (bb = yb) || "object" !== typeof bb ? bb : [bb.id, bb.Ul];
      var bb
    }

    function Sy(yb) {
      return null === (bb = yb) || "object" !== typeof bb ? bb : [bb.qY, Zy(bb.EM), bb.mY, Zy(bb.XM), bb.rY, bb.aY, bb.zD, Zy(bb.fD), Zy(bb.ZD)];
      var bb
    }

    function Ey(yb) {
      return null === (bb = yb) || "object" !== typeof bb ? bb : [fy(bb.qH, oy), bb.Df];
      var bb
    }

    function ly(yb) {
      return null === (bb = yb) || "object" !== typeof bb ? bb : [fy(bb.pY, (yb => Zy(yb))), Zy(bb.wY), bb.AY];
      var bb
    }

    function mb(yb) {
      return null === (bb = yb) || "object" !== typeof bb ? bb : [fy(bb.EY, oy), Zy(bb.lY), bb.VY];
      var bb
    }

    function Cy(yb) {
      return null === (bb = yb) || "object" !== typeof bb ? bb : [Zy(bb.Kl), Zy(bb.qm)];
      var bb
    }

    function Ty(yb) {
      return null === (bb = yb) || "object" !== typeof bb ? bb : [Zy(bb.Zm)];
      var bb
    }

    function Vy(yb) {
      return Zy(yb)
    }

    function Jy(yb) {
      return null === (bb = yb) || "object" !== typeof bb ? bb : [Zy(bb.QF), Zy(bb.kp), Zy(bb.CU), Zy(bb.pR)];
      var bb
    }

    function gb(yb) {
      return Ky(yb)
    }

    function Gy(yb) {
      return Ky(yb)
    }

    function Oy(yb) {
      return null === (bb = yb) || "object" !== typeof bb ? bb : [Zy(bb.JY)];
      var bb
    }

    function Ry(yb) {
      return yb
    }

    function vb(yb) {
      return null === (bb = yb) || "object" !== typeof bb ? bb : [Zy(bb.HL), Zy(bb.wL)];
      var bb
    }

    function ib(yb) {
      return Zy(yb)
    }

    function My(yb) {
      return ey(yb)
    }

    function Yy(yb) {
      return ey(yb)
    }

    function Xy(yb) {
      return null === (bb = yb) || "object" !== typeof bb ? bb : [Zy(bb.KD)];
      var bb
    }

    function ny(yb) {
      return (By ??= (0, Uy.d)().map((yb => yb.name)), By).map((bb => {
        return "string" === typeof(Wy = yb[bb]) ? Zy(Wy) : fy(Wy, oy);
        var Wy
      }))
    }

    function uy(yb) {
      return null === (bb = yb) || "object" !== typeof bb ? bb : [bb.xG, bb.WG, bb.hG];
      var bb
    }
  },
  39534: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => fy
    });
    var Uy = Wy(39539),
      hy = Wy(39531);
    const fy = new class {
      constructor(yb) {
        this.pack = yb, this.game = void 0, this.settle = null, this.hold = null, this.endedWhileHeld = !1, this.gameListeners = new Set, yb.onWanted((() => {
          this.release()
        }))
      }
      setGame(yb) {
        if (void 0 === yb && null !== this.hold) return void(this.endedWhileHeld = !0);
        this.hold = null, this.endedWhileHeld = !1;
        const bb = this.inGame();
        if (this.game = yb, this.update(), this.inGame() !== bb)
          for (const Wy of this.gameListeners) Wy()
      }
      inGame() {
        return void 0 !== this.game
      }
      onGameChange(yb) {
        return this.gameListeners.add(yb), () => {
          this.gameListeners.delete(yb)
        }
      }
      unwantedLeave(yb) {
        yb && void 0 !== this.game ? this.hold = {
          game: this.game
        } : this.release()
      }
      rejoinHold() {
        return this.hold
      }
      releaseHold(yb) {
        null !== yb && yb === this.hold && this.release()
      }
      release() {
        if (null === this.hold) return;
        const yb = this.endedWhileHeld;
        this.hold = null, this.endedWhileHeld = !1, yb && this.setGame(void 0)
      }
      setSettled(yb) {
        this.settle = yb, this.update()
      }
      update() {
        void 0 === this.game ? this.pack.setSessionFiles(void 0) : null !== this.settle && (0, Uy.b)(this.settle.state, this.game) && this.pack.setSessionFiles(this.settle.files)
      }
    }(hy.f)
  },
  39358: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => ly,
      e: () => mb,
      f: () => Ey,
      g: () => Jy
    });
    var Uy = Wy(5905),
      hy = Wy(23),
      fy = Wy(3581),
      Zy = Wy(4001),
      cb = Wy(5898),
      Py = Wy(39363);

    function oy(yb, bb) {
      const Wy = (0, cb.e)(bb.variants);
      return yb.setShaderPack(Wy.variantFlags, Wy.hooks, Wy.moduleCodes, (0, Py.B)(bb.layers), Py.o[bb.CU], bb.keepCircleShadows)
    }
    const By = 0,
      Ky = 1,
      ey = 2,
      qb = "shaderPack:failedToCompile",
      sy = new Set(["no_webgpu_api", "no_adapter", "software_adapter", "adapter_error", "start_no_adapter"]),
      Sy = new Set(["not_requested", "off_after_loss", "gpu_class_webgl"]);

    function Ey(yb, bb) {
      var Wy;
      const Uy = null !== (Wy = null === yb || void 0 === yb ? void 0 : yb.reason) && void 0 !== Wy ? Wy : "none";
      return sy.has(Uy) ? {
        messageKey: bb ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu",
        noAdapter: !0
      } : "not_requested" === Uy && "override" === (null === yb || void 0 === yb ? void 0 : yb.source) ? {
        messageKey: "shaderPack:failedRendererOverride",
        noAdapter: !1
      } : "gpu_class_webgl" === Uy && "default" !== (null === yb || void 0 === yb ? void 0 : yb.source) ? {
        messageKey: "shaderPack:failedNoWebGpu",
        noAdapter: !1
      } : {
        messageKey: Sy.has(Uy) ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu",
        noAdapter: !1
      }
    }
    const ly = {
      messageKey: "shaderPack:failedDeviceGraphics",
      noAdapter: !1
    };
    class mb extends Error {
      constructor(yb) {
        super(`the shader pack can't run in this game: ${yb}`), this.messageKey = yb, this.name = "ShaderPackJoinError"
      }
    }
    const Cy = "strict";
    class Ty {
      constructor(yb) {
        this.deps = yb, this.pagePack = void 0, this.loaded = null, this.CU = Cy, this.failedPolicies = new Set, this.failedModelPolicies = new Set, this.refused = !1, this.joined = !1, this.playing = !1, this.game = 0, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1, this.pagePack = yb.load().catch((bb => (yb.warn("the shader pack could not load: the game draws without it", bb), {
          status: "none"
        }))).then((yb => (this.loaded = yb, "active" === yb.status && (this.handOverToPreviews(yb), null !== yb.harnessPolicy && (this.CU = yb.harnessPolicy, this.handOver())), yb)))
      }
      async join(yb) {
        this.qh();
        const bb = this.game,
          [Wy, hy] = await Promise.all([this.pagePack, this.policyOf(yb)]);
        if (bb !== this.game || "none" === Wy.status) return null;
        const fy = "active" === Wy.status ? Wy.pack.variants : Wy.variants,
          Zy = (0, Uy.h)(fy, hy);
        if (Zy && "active" === Wy.status && null === this.deps.core) return this.joined = !0, this.offInThisGame = !0, this.couldntRun = this.deps.noWebGpu.messageKey, null;
        if (Zy) {
          const yb = this.cantRun(Wy, hy);
          if (null !== yb) return yb
        } else if ("blocked" === Wy.status || null === this.deps.core) return null;
        return this.CU = hy, this.handOver(), Zy && this.refused ? qb : (this.joined = !0, this.offInThisGame = !Zy, null)
      }
      async replay(yb) {
        const bb = await this.join(yb);
        null === bb ? this.playable() : this.deps.failInGame(bb)
      }
      cantRun(yb, bb) {
        const {
          core: Wy,
          noWebGpu: Uy
        } = this.deps;
        if ("blocked" === yb.status) {
          return "shaderPack:failedUnchecked" === yb.messageKey && null === Wy && Uy.noAdapter ? Uy.messageKey : yb.messageKey
        }
        return this.refused || this.failedPolicies.has(bb) ? qb : null
      }
      runsInJoinedGame() {
        return this.joined && !this.offInThisGame
      }
      couldntRunInJoinedGame() {
        return this.couldntRun
      }
      playable() {
        this.joined && !this.playing && (this.playing = !0, this.failedWhileJoining ? this.fail(qb) : (null !== this.couldntRun ? this.notify(fy.d, this.couldntRun) : this.offInThisGame && this.notify("shaderPack:offInThisGame"), this.failedModelPolicies.has(this.CU) && this.notifyModelFallback()))
      }
      qh() {
        this.game++, this.joined = !1, this.playing = !1, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1
      }
      coreErrors(yb) {
        for (const {
            code: bb,
            detail: Wy
          }
          of yb)
          if (bb === Zy.f.RenderShaderPackNotRun) switch (255 & Wy) {
            case By:
              this.refused = !0, this.failed();
              break;
            case Ky:
              this.failedPolicies.add(this.CU), this.failed();
              break;
            case ey:
              this.failedModelPolicies.add(this.CU), this.playing && this.notifyModelFallback()
          }
      }
      failed() {
        this.joined && !this.offInThisGame && (this.playing ? this.fail(qb) : this.failedWhileJoining = !0)
      }
      fail(yb) {
        this.qh(), this.deps.failInGame(yb)
      }
      notifyModelFallback() {
        this.modelsNotified || (this.modelsNotified = !0, this.notify("shaderPack:modelsWithoutPack"))
      }
      notify(yb, bb) {
        const Wy = this.game;
        this.deps.notify(yb, (() => Wy === this.game && this.joined), bb)
      }
      handOver() {
        var yb;
        const {
          core: bb
        } = this.deps;
        null !== bb && "active" === (null === (yb = this.loaded) || void 0 === yb ? void 0 : yb.status) && (oy(bb, {
          ...this.loaded.pack,
          CU: this.CU
        }) || (this.refused = !0, this.deps.warn("the core refused the shader pack: the games it runs in fail", null)))
      }
      handOverToPreviews(yb) {
        let {
          pack: bb,
          harnessPolicy: Wy
        } = yb;
        const {
          previews: Uy
        } = this.deps;
        null !== Uy && oy(Uy, {
          ...bb,
          CU: null !== Wy && void 0 !== Wy ? Wy : Cy
        })
      }
      policyOf(yb) {
        return this.deps.policyOf(yb).catch((yb => (this.deps.warn("the game's shader pack policy could not load: the policy of a game without one", yb), Cy)))
      }
    }
    const Vy = "wasmShaderPackNotice";

    function Jy(yb, bb, Wy, Uy) {
      return hy.g.subscribe(Vy, (yb => {
        let {
          translationKey: bb,
          stillCurrent: Wy,
          reasonKey: Uy
        } = yb;
        Wy() && hy.g.EZ("chat", (0, fy.j)(bb, Uy))
      })), new Ty({
        load: gb,
        policyOf: Gy,
        core: yb,
        previews: bb,
        noWebGpu: Wy,
        notify: (yb, bb, Wy) => {
          const Uy = {
            translationKey: yb,
            stillCurrent: bb,
            reasonKey: Wy
          };
          hy.g.EZ(Vy, Uy, !0)
        },
        failInGame: yb => {
          hy.g.EZ(fy.h, yb)
        },
        warn: Uy
      })
    }
    async function gb() {
      const [{
        shaderPackPage: yb,
        harnessShaderPackMode: bb
      }, {
        shaderPackTextures: Uy
      }] = await Promise.all([Promise.resolve().then((() => Wy(37862))), Promise.resolve().then((() => Wy(5893)))]), hy = await yb.load();
      return "active" !== hy.status ? hy : {
        status: "active",
        pack: {
          variants: hy.pack.variants,
          layers: Uy().layers,
          keepCircleShadows: hy.pack.keepCircleShadows
        },
        harnessPolicy: bb()
      }
    }
    async function Gy(yb) {
      var bb;
      const [{
        harnessShaderPackMode: Uy
      }, {
        getShaderPackPolicy: hy
      }] = await Promise.all([Promise.resolve().then((() => Wy(37862))), Wy.e(79).then((() => Wy(41805)))]);
      return null !== (bb = Uy()) && void 0 !== bb ? bb : hy(yb)
    }
  },
  39481: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => cb,
      g: () => Ey,
      k: () => Py,
      n: () => oy,
      r: () => By,
      v: () => ey
    });
    var Uy = Wy(39490),
      hy = Wy(39498);
    const fy = "atlas:",
      Zy = 3e4;
    class cb extends Error {
      constructor(yb, bb) {
        super(`fetching ${yb} answered HTTP ${bb}`), this.url = yb, this.status = bb, this.name = "TerrainTextureFetchError"
      }
    }

    function Py(yb) {
      if (!yb.startsWith(fy)) return null;
      const bb = Number(yb.slice(fy.length));
      return Number.isInteger(bb) && bb >= 0 ? bb : null
    }
    async function oy() {
      const yb = await Wy.e(186).then((() => Wy(33215)));
      return {
        atlasSheets: yb.blockAtlasUrls,
        texture: bb => {
          var Wy, Uy, fy;
          return null !== (Wy = null !== (Uy = null !== (fy = yb.animatedBlockTextures[bb]) && void 0 !== fy ? fy : yb.rotatedBlockTextures[bb]) && void 0 !== Uy ? Uy : hy.c[bb]) && void 0 !== Wy ? Wy : null
        }
      }
    }
    async function By(yb) {
      const bb = new AbortController,
        Wy = setTimeout((() => {
          bb.abort(new DOMException(`${yb} took over ${Zy} ms`, "TimeoutError"))
        }), Zy);
      let Uy;
      try {
        const Wy = await fetch(yb, {
          signal: bb.signal
        });
        if (!Wy.ok) throw new cb(yb, Wy.status);
        Uy = await Wy.blob()
      } finally {
        clearTimeout(Wy)
      }
      const hy = await createImageBitmap(Uy, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none"
      });
      try {
        return ey(hy)
      } finally {
        hy.close()
      }
    }
    const Ky = 8192;

    function ey(yb) {
      const {
        width: bb,
        height: Wy
      } = yb, hy = Math.max(1, Math.min(Wy, Ky)), fy = (0, Uy.g)(bb, hy, {
        willReadFrequently: !0
      });
      if (!fy) throw new Error("no 2D context to read the texture back");
      fy.globalCompositeOperation = "copy";
      const Zy = new Uint8Array(bb * Wy * 4);
      for (let Uy = 0; Uy < Wy; Uy += hy) {
        const cb = Math.min(hy, Wy - Uy);
        fy.drawImage(yb, 0, Uy, bb, cb, 0, 0, bb, cb), Zy.set(fy.getImageData(0, 0, bb, cb).data, Uy * bb * 4)
      }
      return {
        width: bb,
        height: Wy,
        pixels: Zy
      }
    }
    async function qb(yb, bb) {
      let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : By;
      const Uy = [],
        hy = await Promise.all(yb.map((async yb => {
          var hy, Zy;
          const cb = null !== (hy = null === (Zy = bb.decoded) || void 0 === Zy ? void 0 : Zy.call(bb, yb)) && void 0 !== hy ? hy : null,
            oy = null === cb ? function(yb, bb) {
              if (yb.startsWith(fy)) {
                var Wy;
                const Uy = Py(yb);
                return null === Uy ? null : null !== (Wy = bb.atlasSheets[Uy]) && void 0 !== Wy ? Wy : null
              }
              return bb.texture(yb)
            }(yb, bb) : null,
            By = null !== cb && void 0 !== cb ? cb : null === oy ? null : Wy(oy);
          if (null === By) return Uy.push({
            name: yb,
            url: oy,
            error: new Error(`no URL for terrain texture ${yb}`)
          }), null;
          try {
            const bb = await By;
            if (bb.pixels.byteLength !== bb.width * bb.height * 4) throw new Error(`decoded ${bb.pixels.byteLength} bytes for ${bb.width}x${bb.height} texels`);
            return {
              name: yb,
              texture: bb
            }
          } catch (Ky) {
            return Uy.push({
              name: yb,
              url: oy,
              error: Ky
            }), null
          }
        }))),
        Zy = hy.filter((yb => null !== yb)),
        cb = new Uint32Array(2 * Zy.length);
      Zy.forEach(((yb, bb) => {
        let {
          texture: Wy
        } = yb;
        cb[2 * bb] = Wy.width, cb[2 * bb + 1] = Wy.height
      }));
      return {
        handOver: {
          names: Zy.map((yb => {
            let {
              name: bb
            } = yb;
            return bb
          })),
          textures: Zy.map((yb => {
            let {
              texture: bb
            } = yb;
            return bb.pixels
          })),
          sizes: cb
        },
        failures: Uy
      }
    }
    const sy = [2e3, 1e4, 3e4, 6e4, 12e4];

    function Sy() {}
    class Ey {
      constructor(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : sy,
          Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1048576;
        this.core = yb, this.retryMs = bb, this.keepBelow = Wy, this.started = 0, this.landed = 0, this.current = null, this.restoring = null
      }
      async swap(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oy,
          Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const Uy = ++this.started,
          hy = {
            decode: Wy.decode,
            wholeAtlas: Wy.wholeAtlas
          };
        return this.loadAndHandOver(bb, hy, yb, (() => {
          var yb;
          return Uy < this.landed || !1 === (null === (yb = Wy.wanted) || void 0 === yb ? void 0 : yb.call(Wy))
        }), {
          onTaken: (yb, Wy) => {
            this.landed = Uy, this.current = {
              mine: Uy,
              sources: bb,
              load: hy,
              DW: yb,
              failed: Wy
            }
          }
        })
      }
      restore(yb) {
        var bb;
        const Wy = this.current;
        if (null === Wy) return Promise.resolve(null);
        if ((null === (bb = this.restoring) || void 0 === bb ? void 0 : bb.mine) === Wy.mine) return this.restoring.done;
        const Uy = {
          mine: Wy.mine,
          done: this.restoreLanded(Wy, yb).finally((() => {
            this.restoring === Uy && (this.restoring = null)
          }))
        };
        return this.restoring = Uy, Uy.done
      }
      async restoreLanded(yb, bb) {
        const Wy = () => this.landed !== yb.mine,
          {
            DW: Uy
          } = yb;
        if (null !== Uy) return this.stopped() ? null : this.core.setTerrainTextures(Uy.names, Uy.textures, Uy.sizes);
        let hy = bb;
        for (let fy = 0;; fy++) {
          const bb = this.retryMs.at(fy),
            Uy = {
              allOrNothingExcept: void 0 === bb ? void 0 : yb.failed
            },
            Zy = await this.loadAndHandOver(yb.sources, yb.load, hy, Wy, Uy);
          if (!1 !== Zy || void 0 === bb || this.stopped()) return Zy;
          if (hy = Sy, await new Promise((yb => {
              setTimeout(yb, bb)
            })), Wy()) return null
        }
      }
      stopped() {
        return !0 === this.core.isStopped
      }
      async loadAndHandOver(yb, bb, Wy, Uy) {
        let hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.stopped()) return null;
        const fy = this.core.terrainTextureNames();
        var Zy;
        if (0 === fy.length) return null === (Zy = hy.onTaken) || void 0 === Zy || Zy.call(hy, null, new Set), !0;
        let cb, oy;
        try {
          cb = await yb(), oy = await qb(fy, cb, bb.decode)
        } catch (Ey) {
          return Uy() ? null : (Wy({
            name: null,
            url: null,
            error: Ey
          }), !1)
        }
        if (Uy() || this.stopped()) return null;
        for (const Py of oy.failures) Wy(Py);
        const By = hy.allOrNothingExcept;
        if (void 0 !== By && oy.failures.some((yb => {
            let {
              name: bb
            } = yb;
            return null === bb || !By.has(bb)
          })) || !0 === bb.wholeAtlas && oy.failures.some((yb => {
            let {
              name: bb
            } = yb;
            return null === bb || null !== Py(bb)
          }))) return !1;
        const {
          handOver: Ky
        } = oy, ey = function(yb) {
          return yb.textures.reduce(((yb, bb) => yb + bb.byteLength), 0)
        }(Ky) < this.keepBelow, sy = this.core.setTerrainTextures(Ky.names, Ky.textures, Ky.sizes, ey ? void 0 : () => {
          !async function(yb, bb) {
            await bb;
            for (const {
                buffer: Uy
              }
              of yb) {
              const yb = Uy;
              var Wy;
              if (!yb.detached) null === (Wy = yb.transfer) || void 0 === Wy || Wy.call(yb, 0)
            }
          }(Ky.textures, cb.heldUntil)
        });
        if (sy) {
          var Sy;
          const yb = new Set(oy.failures.flatMap((yb => {
            let {
              name: bb
            } = yb;
            return null === bb ? [] : [bb]
          })));
          null === (Sy = hy.onTaken) || void 0 === Sy || Sy.call(hy, ey ? Ky : null, yb)
        }
        return sy
      }
    }
  },
  39503: (yb, bb, Wy) => {
    function Uy(yb) {
      return "fetch" === yb || "timeout" === yb || "integrity" === yb ? "download" : "browser"
    }
    Wy.d(bb, {
      c: () => hy,
      g: () => Zy,
      k: () => Py,
      l: () => cb,
      n: () => Uy,
      r: () => fy
    });
    const hy = "https://discord.gg/playbloxd";

    function fy(yb) {
      return "download" === yb ? {
        icon: "wifi",
        title: "wasmScreens:downloadFailedTitle",
        help: "wasmScreens:downloadFailedHelp",
        helpValues: {},
        discordLink: !1,
        confirm: "general:tryAgain",
        cancel: "general:back"
      } : {
        icon: "face-dizzy",
        title: "wasmScreens:unsupportedTitle",
        help: "wasmScreens:unsupportedHelp",
        helpValues: {},
        discordLink: !1,
        confirm: "general:ok",
        cancel: null
      }
    }

    function Zy(yb, bb) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: bb ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: yb.code
        },
        discordLink: bb,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function cb() {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:turnstilePageTitle",
        help: "wasmScreens:turnstilePageHelp",
        helpValues: {},
        discordLink: !1,
        confirm: "general:ok",
        cancel: null
      }
    }

    function Py(yb, bb, Wy) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: Wy ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: yb.reason
        },
        discordLink: null === yb.name,
        confirm: bb ? "general:reconnect" : yb.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  39340: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      followPageUiPack: () => AP,
      packForGame: () => GP,
      playWasmGame: () => Bo,
      prefetchWasmPreviews: () => sc,
      setGamePackConfirm: () => go,
      startWasmPlay: () => Uo,
      startWasmPreviews: () => qP
    });
    var Uy = Wy(167),
      hy = Wy(1109),
      fy = Wy(143),
      Zy = Wy(37752),
      cb = Wy(1572),
      Py = Wy(23),
      oy = Wy(3883),
      By = Wy(1162),
      Ky = Wy(1177),
      ey = Wy(37875),
      qb = Wy(37888),
      sy = Wy(37813),
      Sy = Wy(35272),
      Ey = Wy(37730),
      ly = Wy(37746),
      mb = Wy(39192),
      Cy = Wy(3991),
      Ty = Wy(39108),
      Vy = Wy(39177),
      Jy = Wy(39113);
    const gb = {
      states: {
        health: !0,
        aura: !0,
        hotbar: !0,
        heldItemAim: !0,
        crouching: !0,
        flight: !0,
        gliderBoostFuel: !0,
        crosshairTarget: !0,
        inventory: !0,
        crafting: !0,
        stationItems: !0,
        itemInfo: !0,
        creativeVisibility: !0,
        fullInventory: !0,
        replay: !0,
        replayEdits: !0,
        replayRecorder: !0,
        replayVideoExporting: !0,
        players: !0,
        lobbyLeaderboardRows: !0
      },
      events: {
        hotbarSlotRequested: !0,
        hotbarScrolled: !0,
        numberKeyPressed: !0,
        shotDamageToShow: !0,
        chatReceived: !0,
        chestToggled: !0,
        chestRefreshed: !0,
        inventorySynced: !0,
        inventoryDropRequested: !0,
        enchantingTableOpened: !0,
        localEffectUpdated: !0,
        kill: !0,
        replayUiActionRequested: !0,
        replayViewerRequested: !0,
        cosmeticsUpdated: !0,
        boardEditRequested: !0,
        ironChestOpenRequested: !0
      },
      commands: {
        clickCodeBlock: !0,
        selectHotbarSlot: !0,
        setCrosshairInteractPrompt: !0,
        sendChatMessage: !0,
        removeInventoryItem: !0,
        swapInventorySlots: !0,
        moveInventoryItem: !0,
        quickMoveInventoryItem: !0,
        setInventoryOpen: !0,
        closeChest: !0,
        focusCrafting: !0,
        craftRecipe: !0,
        salvageItem: !0,
        enchantItem: !0,
        changeIronChestPasskey: !0,
        openIronChest: !0,
        completeTask: !0,
        setServerCookie: !0,
        answerUiRequest: !0,
        requestLeaderboard: !0,
        chooseRewardedAd: !0,
        ignorePlayer: !0,
        reportPlayer: !0,
        reportWorldCodeChat: !0,
        requestDiscordReportKey: !0,
        reportLobbyOrGame: !0,
        updateMyCosmetic: !0,
        holdEmoteWheel: !0,
        writeOnBoard: !0,
        writeBook: !0,
        writeNameTag: !0,
        setCustomLobbyBlock: !0,
        sendCodeCollab: !0,
        replayAction: !0,
        setReplayPlaying: !0,
        seekReplay: !0,
        setReplayCameraMode: !0,
        syncReplayCameraMode: !0,
        setReplayCameraKeyframe: !0,
        moveReplayCameraKeyframe: !0,
        deleteReplayCameraKeyframes: !0,
        setReplayPlaybackMark: !0,
        cropReplay: !0,
        holdReplayForShaderPackFailure: !0,
        exportReplayVideo: !0,
        toggleRecording: !0,
        saveClip: !0,
        setRecorderPrefs: !0,
        setReplayViewerOpen: !0,
        recordFlyingMiddleText: !0,
        dragReplayCamera: !0,
        moveReplayFreecam: !0,
        holdReplayFreecamVertical: !0,
        setShopOpen: !0,
        buyShopItem: !0
      },
      queries: {
        enchantingOffer: !0,
        worldCodeAiChunk: !0,
        worldCodeAiGameState: !0
      },
      lookups: {
        momentumFrac: !0,
        localPos: !0,
        screenPos: !0,
        codeBlockClickable: !0,
        blocksStandingOn: !0,
        dropAhead: !0,
        replayCamera: !0,
        leaveGameReloadsPage: !0
      }
    };

    function Gy(yb) {
      const bb = {
        ...Vy.b[yb]
      };
      for (const Wy of Object.keys(gb[yb])) delete bb[Wy];
      return bb
    }

    function Oy() {
      var yb, bb;
      return null === (yb = null === (bb = (0, Ty.i)()) || void 0 === bb ? void 0 : bb.localPlayerAlive()) || void 0 === yb || yb
    }

    function Ry() {
      var yb, bb;
      return null !== (yb = null === (bb = (0, Ty.i)()) || void 0 === bb ? void 0 : bb.localDeaths()) && void 0 !== yb ? yb : null
    }
    const vb = {
        current: Oy,
        watch: yb => {
          let bb = Oy(),
            Wy = Ry();
          return (0, Cy.z)((() => {
            const Uy = Oy(),
              hy = Ry(),
              fy = null !== hy && null !== Wy && hy !== Wy;
            Wy = hy, fy ? (bb || yb(!0), yb(!1), Uy && yb(!0), bb = Uy) : Uy !== bb && (bb = Uy, yb(Uy))
          }))
        }
      },
      ib = {
        states: {
          ...Gy("states"),
          localPlayerAlive: vb
        },
        events: {
          ...Gy("events"),
          localPlayerAliveSet: {
            watch: vb.watch
          }
        },
        commands: {
          ...Gy("commands"),
          respawn: () => {
            var yb;
            null === (yb = (0, Ty.i)()) || void 0 === yb || yb.respawn()
          },
          playEmote: yb => {
            var bb;
            null === (bb = (0, Ty.i)()) || void 0 === bb || bb.send(Jy.d.PlayEmote, (0, Jy.F)({
              Zm: yb
            }))
          },
          applyTemporaryThirdPerson: yb => {
            var bb;
            let {
              durationMs: Wy
            } = yb;
            null === (bb = (0, Ty.i)()) || void 0 === bb || bb.thirdPersonFor(Wy)
          },
          bindCustomButtonKeys: yb => {
            var bb;
            null === (bb = (0, Ty.i)()) || void 0 === bb || bb.bindCustomButtonKeys(yb)
          },
          pressCustomButton: yb => {
            var bb;
            let {
              id: Wy,
              down: Uy
            } = yb;
            null === (bb = (0, Ty.i)()) || void 0 === bb || bb.pressCustomButton(Wy, Uy)
          },
          setLookSensitivity: () => {},
          wakeUp: yb => {
            const bb = (0, Jy.O)({
                KD: yb
              }),
              Wy = () => {
                const yb = (0, Ty.i)();
                return !(null !== yb && void 0 !== yb && yb.isSessionLive) || yb.send(Jy.d.StopSleeping, bb)
              };
            if (!Wy()) {
              const yb = (0, Cy.z)((() => {
                Wy() && yb()
              }))
            }
          },
          setCameraZoom: yb => {
            var bb;
            null === (bb = (0, Ty.i)()) || void 0 === bb || bb.setCameraZoom(yb)
          }
        },
        queries: Gy("queries"),
        lookups: {
          ...Gy("lookups"),
          cameraZoom: () => {
            var yb, bb;
            return null !== (yb = null === (bb = (0, Ty.i)()) || void 0 === bb ? void 0 : bb.cameraZoom()) && void 0 !== yb ? yb : 0
          }
        }
      };
    var My = Wy(39343),
      Yy = Wy(39351),
      Xy = Wy(39353),
      ny = Wy(39368),
      uy = Wy(1118),
      rb = Wy(103),
      Hy = Wy(3725),
      ab = Wy(3025),
      Fy = Wy(1020);
    const py = {
      uE: () => (0, uy.b)(),
      inbuiltOverwritten: () => Hy.g,
      reflectApplyHit: () => Fy.b,
      definerHit: () => rb.currentUrl.c,
      emitReplaced: () => (0, Py.b)(),
      confirmMesh: () => (0, ab.c)()
    };
    var Ly = Wy(39358),
      Qy = Wy(39391);
    var jb = Wy(19),
      Dy = Wy(1580),
      tb = Wy(1620),
      wy = Wy(1461),
      kb = Wy(1667),
      Ny = Wy(1042),
      zb = Wy(1115);

    function Iy() {
      return zb.f.get().getCurrentLanguageCode()
    }

    function xb(yb) {
      const bb = () => {
        yb({
          translate: (yb, bb) => (0, Ny.w)(Iy(), yb, bb),
          keyBindingText: yb => {
            const bb = (0, tb.u)(yb, jb.d.get("isTouchScreen"));
            return null !== bb ? (0, Ny.A)(Iy(), bb.translationKey, bb.params) : (0, tb.o)((0, tb.q)(yb))
          },
          isFriend: kb.f,
          hiddenNames: Dy.d.shown
        })
      };
      let Wy = !1;
      const Uy = () => {
          const yb = Iy();
          (0, Ny.n)(yb).then((() => {
            Wy || yb !== Iy() || bb()
          }))
        },
        hy = () => wy.d.getSocialState().friends.map((yb => yb.name.toLowerCase())).sort().join(" ");
      let fy = hy();
      bb(), Uy();
      const Zy = [(0, zb.h)((() => {
        bb(), Uy()
      })), (0, Py.h)("customBindingsChanged", bb), (0, Py.h)("appManagerUpdated|isTouchScreen", bb), (0, kb.b)((() => {
        const yb = hy();
        yb !== fy && (fy = yb, bb())
      })), Dy.d.subscribe(bb)];
      return () => {
        Wy = !0;
        for (const yb of Zy) yb()
      }
    }
    var Ay = Wy(552),
      dy = Wy(865),
      yW = Wy(1597),
      bW = Wy(248),
      Wb = Wy(2995),
      Ub = Wy(35132),
      hb = Wy(3004),
      fb = Wy(37400),
      Zb = Wy(5885),
      cW = Wy(39273),
      Pb = Wy(562),
      ob = Wy(1595),
      Bb = Wy(3027),
      Kb = Wy(2591);
    let eb = null;
    var qW = Wy(1052),
      sb = Wy(5740),
      Sb = Wy(37817),
      Eb = Wy(2747),
      lb = Wy(46),
      mW = Wy(244),
      Cb = Wy(240),
      Tb = Wy(39219),
      Vb = Wy(3994);
    class Jb {
      constructor(yb, bb) {
        this.showView = yb, this.holdForAd = bb
      }
      pointerUnlockRequestsChanged() {
        (0, Tb.y)()
      }
      pointerLockDebugEntries() {
        return [{
          label: "Locked to the canvas",
          value: String((0, Tb.r)())
        }]
      }
      setGameViewShown(yb) {
        this.showView(yb)
      }
      videoAdHold(yb, bb) {
        this.holdForAd(yb, bb)
      }
    }
    class gW {
      qh(yb) {
        ! function(yb) {
          if (null !== (0, Ky.e)().websocketUrl) try {
            (0, Cy.M)().leaveGame(yb)
          } finally {
            (0, Ky.n)({
              websocketUrl: null
            })
          }
        }(yb)
      }
      isReplay() {
        return !1
      }
    }
    class Gb {
      watchFrameStarts(yb) {
        return (0, Cy.t)(yb)
      }
      watchFrames(yb) {
        return (0, Cy.r)(yb)
      }
      watchTicks(yb) {
        return (0, Cy.z)(yb)
      }
    }
    var Ob = Wy(1156),
      Rb = Wy(39399);

    function vW(yb) {
      return yb >= 0 ? Math.min(1, yb) : 0
    }

    function iW(yb, bb) {
      const {
        fade: Wy
      } = yb;
      return null === Wy || bb - Wy.at >= Wy.ms ? yb.volume : Wy.from + (yb.volume - Wy.from) * Math.max(0, (bb - Wy.at) / Wy.ms)
    }

    function Mb(yb) {
      const bb = Object.entries(yb),
        Wy = new Uint32Array(bb.length);
      let Uy = 0;
      for (const [Zy, [, cb]] of bb.entries()) Wy[Zy] = cb.length, Uy += cb.length;
      const hy = new Float64Array(3 * Uy);
      let fy = 0;
      for (const [, Zy] of bb)
        for (const yb of Zy) hy.set(yb, fy), fy += 3;
      return {
        blocks: bb.map((yb => {
          let [bb] = yb;
          return bb
        })).join("\0"),
        counts: Wy,
        values: hy
      }
    }
    class Yb {
      constructor(yb, bb) {
        this.core = yb, this.warn = bb, this.latest = 0
      }
      async feed() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xb;
        const bb = ++this.latest;
        let Wy;
        try {
          Wy = await yb()
        } catch (Uy) {
          return void(this.core.isStopped || bb !== this.latest || this.warn("the block colours didn't load, so block particles draw grey", Uy))
        }
        bb === this.latest && (this.core.setBlockColours(Wy) || this.core.isStopped || this.warn("the core refused the block colours: block particles draw grey"))
      }
    }
    async function Xb() {
      return Mb((await Wy.e(186).then((() => Wy(33215)))).averageColors)
    }
    var nb = Wy(3996),
      ub = Wy(4001),
      rW = Wy(39156),
      Hb = Wy(39401),
      aW = Wy(39317),
      Fb = Wy(542),
      pb = Wy(35759),
      Lb = Wy(535),
      Qb = Wy(258),
      jW = Wy(39305);
    const Db = [3e4, 12e4, 3e5];
    class tW extends Error {}
    const wb = {
      mobTypes: Fb.i,
      vehicleTypes: pb.d,
      mobAiStates: Fb.g,
      playerPoses: Lb.m
    };
    var kW = Wy(39288),
      Nb = Wy(39408),
      zW = Wy(39418),
      Ib = Wy(39426),
      xW = Wy(2767),
      Ab = Wy(37720),
      db = Wy(4022),
      yU = Wy(1977);
    const bU = yU.v.KeysDisabled | yU.v.LookFrozen | yU.v.ClicksSuppressed,
      WW = xW.h;
    var UW = (0, Ib.d)("resumingConn");
    class hW {
      constructor(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.shell = yb, this.now = bb, this.session = void 0, this.attempt = null, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, Object.defineProperty(this, UW, {
          writable: !0,
          value: 0
        }), this.drops = 0, this.session = new Ab.c({
          reconnect: yb => this.reconnect(yb),
          isLive: () => yb.isLive(),
          onReconnected: bb => {
            this.landed = bb, yb.onReconnected(bb), this.landIfResumed()
          },
          onGaveUp: (bb, Wy) => {
            this.abortAttempt(), yb.onGaveUp(bb, Wy)
          },
          freeze: bb => {
            yb.Jby(bb), (0, db.h)(bU, bb ? bU : 0, "reconnectFreeze")
          },
          releaseSeat: yb => {
            this.releaseSeat(yb)
          }
        })
      }
      isResuming() {
        return this.session.isResuming()
      }
      get resumingConn() {
        return (0, zW.c)(this, UW)[UW]
      }
      canHoldSeat() {
        return this.session.canHoldSeat()
      }
      onInitialInfo(yb) {
        let {
          conn: bb,
          graceMs: Wy,
          sessionBased: Uy,
          replayOffer: hy
        } = yb;
        this.session.onInitialInfo(Wy, Uy), this.isResuming() && (this.initialInfoConn = bb, this.initialInfoOffer = hy, this.landIfResumed())
      }
      onResumeComplete(yb) {
        0 !== yb && (yb === (0, zW.c)(this, UW)[UW] ? ((0, zW.c)(this, UW)[UW] = 0, this.session.onResumed()) : this.isResuming() && (this.completedEarlyConn = yb))
      }
      onDropped(yb) {
        this.drops++, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, (0, zW.c)(this, UW)[UW] = 0, this.session.onConnectionLost(yb)
      }
      qh() {
        this.session.qh(), this.dispose()
      }
      dispose() {
        this.abortAttempt(), this.landed = null, this.completedEarlyConn = 0, (0, zW.c)(this, UW)[UW] = 0, this.session.end()
      }
      reconnect(yb) {
        const bb = this.attempt;
        if (null !== bb && this.awaitingJoinRoom(bb)) return bb.result;
        this.abortAttempt();
        const Wy = new AbortController,
          Uy = this.drops,
          hy = {
            attachedAt: null
          },
          fy = this.shell.reconnect(yb, Wy.signal, (() => {
            hy.attachedAt = this.now()
          })).then((yb => {
            if (this.clearAttempt(Zy), this.drops !== Uy) throw new Error("the resumed room dropped before its attempt settled");
            return yb
          }), (yb => {
            throw this.clearAttempt(Zy), yb
          })),
          Zy = {
            abort: Wy,
            socket: hy,
            result: fy
          };
        return this.attempt = Zy, fy
      }
      clearAttempt(yb) {
        this.attempt === yb && (this.attempt = null)
      }
      abortAttempt() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new DOMException("the reconnect attempt was given up", "AbortError");
        const bb = this.attempt;
        this.attempt = null, null === bb || void 0 === bb || bb.abort.abort(yb)
      }
      awaitingJoinRoom(yb) {
        const bb = yb.socket.attachedAt;
        return null !== bb && this.now() - bb < WW
      }
      releaseSeat(yb) {
        const bb = this.attempt,
          Wy = null !== bb && this.awaitingJoinRoom(bb);
        this.abortAttempt(new Yy.q), Wy || this.shell.releaseSeat(yb)
      }
      landIfResumed() {
        const yb = this.landed;
        if (null !== yb && yb.conn === this.initialInfoConn) {
          const bb = this.initialInfoOffer && this.completedEarlyConn !== yb.conn;
          if (this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, this.abortAttempt(), !bb) return void this.session.onResumed();
          (0, zW.c)(this, UW)[UW] = yb.conn, this.session.onResuming()
        }
      }
    }
    var fW = Wy(37728),
      ZW = Wy(39432),
      cU = Wy(39383),
      PW = Wy(39374),
      oW = Wy(4243),
      BW = Wy(8397),
      KW = Wy(2586),
      eW = Wy(39233),
      qU = Wy(565),
      sW = Wy(3715),
      SW = Wy(33),
      EW = Wy(39441),
      lW = Wy(3666),
      mU = Wy(1983),
      CW = Wy(1458),
      TW = Wy(1477),
      VW = Wy(1145),
      JW = Wy(105),
      gU = Wy(1991),
      GW = Wy(4013);
    const OW = new Set([nb.hb.KeyDown, nb.hb.MouseMove, nb.hb.MouseDown, nb.hb.Wheel, nb.hb.TouchStart, nb.hb.TouchMove]);

    function RW(yb) {
      return (yb.shiftKey ? nb.qb.Shift : 0) | (yb.ctrlKey ? nb.qb.Ctrl : 0) | (yb.altKey ? nb.qb.Alt : 0) | (yb.metaKey ? nb.qb.Meta : 0) | ("repeat" in yb && yb.repeat ? nb.qb.Repeat : 0) | (yb.isTrusted ? 0 : nb.qb.Untrusted)
    }

    function vU(yb) {
      return "touchOnly" !== (0, JW.b)() && "function" === typeof yb.requestPointerLock
    }

    function iU(yb) {
      return 0 === yb.button ? yb.altKey ? GW.k["Alt+Left Click"] : GW.k.Mouse1 : 1 === yb.button ? GW.k.Mouse2 : GW.k.Mouse3
    }
    const MW = new Set(["AltLeft", "AltRight", "ArrowUp", "ArrowDown"]),
      YW = new Map([
        ["AltLeft", "altKey"],
        ["AltRight", "altKey"],
        ["ControlLeft", "ctrlKey"],
        ["ControlRight", "ctrlKey"],
        ["ShiftLeft", "shiftKey"],
        ["ShiftRight", "shiftKey"],
        ["MetaLeft", "metaKey"],
        ["MetaRight", "metaKey"]
      ]),
      XW = 32768,
      nW = 1;

    function uW(yb) {
      return Math.min(Math.max(Math.round(yb), 0), 65535)
    }

    function rU(yb, bb, Wy) {
      const Uy = [],
        hy = (yb, bb, Wy, hy) => {
          const fy = yb => {
            (0, TW.u)(yb) || Wy(yb)
          };
          yb.addEventListener(bb, fy, hy), Uy.push((() => {
            yb.removeEventListener(bb, fy, hy)
          }))
        },
        fy = {
          capture: !0,
          passive: !0
        },
        Zy = (yb, Wy, Uy, hy, fy) => (!(0, gU.d)() || !OW.has(yb)) && (bb(yb, Wy, Uy, hy, fy), !0),
        cb = () => document.pointerLockElement === yb,
        Py = function() {
          try {
            return window.self !== window.top
          } catch {
            return !0
          }
        }(),
        oy = yb => {
          yb.ctrlKey && Wy.ctrlCombosAreGames() && !(0, db.g)(yb.target) && yb.preventDefault()
        },
        By = (yb, Uy, hy) => {
          Wy.inspect(yb, Uy, !1), bb(nb.hb.KeyUp, Uy, 0, 0, (0, mU.s)(hy, yb.timeStamp)), Wy.keyReleased(Uy)
        },
        Ky = new Map,
        ey = (yb, bb, Wy) => yb[Wy] || ("AltRight" === bb || "ControlLeft" === bb) && yb.getModifierState("AltGraph"),
        qb = new Map,
        sy = () => {
          Ky.clear(), qb.clear()
        },
        Sy = yb => {
          if (document.hasFocus())
            for (const [bb, Wy] of qb) qb.delete(bb), ey(yb, bb, Wy) || (Ky.delete(bb), By(yb, GW.k[bb], RW(yb)))
        };
      yb.tabIndex = -1;
      let Ey = 0,
        ly = 0;
      const mb = () => {
        const bb = yb.getBoundingClientRect();
        Ey = bb.left, ly = bb.top
      };
      let Cy = "mouse";
      const Ty = () => !cb() && ("mouse" === Cy || !Wy.touchUiShown()),
        Vy = (yb, bb, Wy) => {
          const Uy = (uW(yb.clientX - Ey) | uW(yb.clientY - ly) << 16) >>> 0;
          Zy(nb.hb.MouseMove, nb.ub.Point, bb, Wy, Uy)
        };
      let Jy = !1,
        gb = 0;
      const Gy = () => {
        Jy && (Jy = !1, Wy.viewShown() && (0, Tb.K)())
      };
      Uy.push((() => {
        clearTimeout(gb)
      })), hy(window, "keydown", (yb => {
        "Escape" === yb.key ? (0, Tb.D)(!0) : yb.repeat || (0, db.g)(yb.target) || (Jy = !0, clearTimeout(gb), gb = window.setTimeout(Gy, 0))
      }), fy), hy(window, "keydown", (yb => {
        Gy(), oy(yb), Sy(yb);
        const bb = GW.k[yb.code];
        if ("number" !== typeof bb || !Wy.viewShown()) return;
        const Uy = (0, db.g)(yb.target);
        Uy || !Wy.prevents(bb) && !MW.has(yb.code) || yb.preventDefault(), yb.repeat || Wy.inspect(yb, bb, !0), Zy(nb.hb.KeyDown, bb, 0, 0, (0, mU.s)(RW(yb), yb.timeStamp)) && Ky.set(yb.code, bb), Uy || Wy.keyPressed(bb)
      }), {
        capture: !1,
        passive: !1
      }), hy(window, "keyup", (yb => {
        "Escape" === yb.key && (0, Tb.D)(!1), oy(yb), Ky.delete(yb.code), qb.delete(yb.code), Sy(yb);
        const bb = GW.k[yb.code];
        "number" === typeof bb && By(yb, bb, RW(yb))
      }), {
        capture: !0,
        passive: !1
      }), hy(window, "mousemove", (yb => {
        "mouse" === Cy && Ty() ? Vy(yb, yb.movementX, yb.movementY) : cb() ? Zy(nb.hb.MouseMove, nb.ub.Stamped, yb.movementX, yb.movementY, (0, mU.s)(0, yb.timeStamp)) : Zy(nb.hb.MouseMove, 0, yb.movementX, yb.movementY, 0)
      }), fy);
      let Oy = 0,
        Ry = 0;
      const vb = [];
      let ib = !1,
        My = !1;
      hy(yb, "mousedown", (yb => {
        if ((0, gU.d)()) return;
        Sy(yb);
        const Uy = 1 << yb.button;
        if (!cb() && (0, Tb.J)() && (0, Tb.g)() && (My = !0, !ib)) return void(Oy |= Uy);
        Oy &= ~Uy;
        const hy = yb.button <= 2 ? iU(yb) : void 0;
        void 0 !== hy && (vb[yb.button] = hy, Wy.inspect(yb, hy, !0)), Ty() && Vy(yb, 0, 0), bb(nb.hb.MouseDown, yb.button, yb.clientX, yb.clientY, (0, mU.s)(RW(yb), yb.timeStamp)), Ry |= Uy, void 0 !== hy && Wy.keyPressed(hy)
      }), fy), hy(window, "mouseup", (yb => {
        var Uy;
        Sy(yb);
        const hy = 1 << yb.button,
          fy = 0 !== (Oy & ~Ry & hy);
        if (Oy &= ~hy, Ry &= ~hy, fy) return;
        const Zy = yb.button <= 2 ? null !== (Uy = vb[yb.button]) && void 0 !== Uy ? Uy : iU(yb) : void 0;
        void 0 !== Zy && Wy.inspect(yb, Zy, !1), bb(nb.hb.MouseUp, yb.button, yb.clientX, yb.clientY, (0, mU.s)(RW(yb), yb.timeStamp)), void 0 !== Zy && Wy.keyReleased(Zy)
      }), fy), hy(yb, "contextmenu", (yb => {
        yb.preventDefault()
      }), {
        passive: !1
      });
      const Yy = yb => {
        (cb() || (0, Tb.o)() && (0, VW.l)()) && (yb.ctrlKey || Py && !document.fullscreenElement) && yb.preventDefault()
      };
      hy(yb, "wheel", (yb => {
        Yy(yb), Sy(yb), Zy(nb.hb.Wheel, yb.deltaMode, yb.deltaX, yb.deltaY, 0)
      }), {
        capture: !0,
        passive: !1
      });
      const Xy = {
          capture: !0,
          passive: !1
        },
        ny = yb => {
          yb ? window.addEventListener("wheel", Yy, Xy) : window.removeEventListener("wheel", Yy, Xy)
        };
      ny((0, Tb.o)()), Uy.push((0, Tb.u)(ny)), Uy.push((() => {
        ny(!1)
      }));
      const uy = new Map,
        rb = new Set,
        Hy = yb => {
          const bb = "stylus" === yb.touchType;
          for (const Wy of uy.values())
            if (!Wy.touched && (bb || Math.abs(yb.clientX - Wy.x) <= nW && Math.abs(yb.clientY - Wy.y) <= nW)) return Wy.touched = !0, !0;
          return !1
        },
        ab = yb => 32767 & yb,
        Fy = new Set,
        py = yb => Wy => {
          const Uy = (0, mU.s)(RW(Wy), Wy.timeStamp);
          yb !== nb.hb.TouchStart && yb !== nb.hb.TouchMove || ((yb, Wy) => {
            const Uy = yb.touches;
            if (Uy)
              for (const hy of Fy) {
                let yb = !1;
                for (let bb = 0; bb < Uy.length && !yb; bb++) yb = ab(Uy[bb].identifier) === hy;
                yb || (Fy.delete(hy), bb(nb.hb.TouchCancel, hy, 0, 0, Wy))
              }
          })(Wy, Uy);
          const hy = Wy.changedTouches;
          for (let bb = 0; bb < hy.length; bb++) {
            const Wy = hy[bb];
            if (yb === nb.hb.TouchStart && Hy(Wy) && rb.add(Wy.identifier), rb.has(Wy.identifier)) {
              yb !== nb.hb.TouchEnd && yb !== nb.hb.TouchCancel || rb.delete(Wy.identifier);
              continue
            }
            const fy = ab(Wy.identifier),
              cb = Zy(yb, fy, Wy.clientX, Wy.clientY, Uy);
            yb === nb.hb.TouchStart ? cb && Fy.add(fy) : yb !== nb.hb.TouchMove && Fy.delete(fy)
          }
        },
        Ly = py(nb.hb.TouchStart);
      hy(yb, "touchstart", (yb => {
        yb.preventDefault(), (0, gU.d)() || (Wy.touchStarting(), Ly(yb))
      }), {
        passive: !1
      }), hy(yb, "touchmove", py(nb.hb.TouchMove), fy), hy(yb, "touchend", py(nb.hb.TouchEnd), fy), hy(yb, "touchcancel", py(nb.hb.TouchCancel), fy);
      const Qy = yb => XW | 32767 & yb,
        jb = (yb, bb) => {
          Zy(yb, Qy(bb.pointerId), bb.clientX, bb.clientY, (0, mU.s)(RW(bb), bb.timeStamp))
        };
      hy(window, "pointerdown", (bb => {
        Cy = bb.pointerType, "mouse" === bb.pointerType && bb.target !== yb && Wy.viewShown() && (0, Tb.N)()
      }), fy), hy(yb, "pointerdown", (yb => {
        "pen" === yb.pointerType && 0 === yb.button && (0, Tb.o)() && (0, VW.l)() && (yb.preventDefault(), (0, gU.d)() || (uy.set(yb.pointerId, {
          x: yb.clientX,
          y: yb.clientY,
          touched: !1
        }), Wy.touchStarting(), jb(nb.hb.TouchStart, yb)))
      }), {
        passive: !1
      }), hy(window, "pointermove", (yb => {
        Cy = yb.pointerType, uy.has(yb.pointerId) && jb(nb.hb.TouchMove, yb), "mouse" !== yb.pointerType && Ty() && Vy(yb, 0, 0)
      }), fy);
      const Dy = yb => bb => {
        uy.delete(bb.pointerId) && jb(yb, bb)
      };
      hy(window, "pointerup", Dy(nb.hb.TouchEnd), fy), hy(window, "pointercancel", Dy(nb.hb.TouchCancel), fy);
      let tb = 0;
      const wy = () => {
          tb = 0, mb(), Wy.resized()
        },
        kb = () => {
          const yb = Wy.sizeCanvas();
          null !== yb && bb(nb.hb.Resize, 0, yb.cssWidth, yb.cssHeight, (0, mU.h)(yb.renderScale)), mb(), Wy.resized(), 0 === tb && (tb = requestAnimationFrame(wy))
        };
      hy(window, "resize", kb, fy), Uy.push(Wy.watchRenderScale(kb)), Uy.push((() => {
        cancelAnimationFrame(tb)
      })), hy(window, "focus", (yb => {
        yb.isTrusted && (bb(nb.hb.Focus, 0, 0, 0, 0), Wy.viewShown() && (0, Tb.N)())
      }), {
        passive: !0
      });
      const Ny = () => {
          (0, Tb.D)(!1), Oy = 0
        },
        zb = () => {
          Fy.clear(), uy.clear(), rb.clear()
        };
      let Iy = 0,
        xb = 0;
      hy(window, "blur", (Uy => {
        Ny(), (0, Tb.k)();
        for (const yb of Ky.keys()) {
          const bb = YW.get(yb);
          void 0 !== bb && qb.set(yb, bb)
        }
        Uy.isTrusted && ((yb => {
          for (const [Wy, Uy] of uy) bb(nb.hb.TouchCancel, Qy(Wy), Uy.x, Uy.y, (0, mU.s)(0, yb));
          uy.clear()
        })(Uy.timeStamp), bb(nb.hb.Blur, nb.n.KeepTouches, 0, 0, 0)), Py && Uy.isTrusted && (clearTimeout(xb), xb = window.setTimeout((() => {
          if (!document.hasFocus()) {
            for (const yb of Ky.values()) By(Uy, yb, 0);
            sy()
          }
        }), 0)), clearTimeout(Iy), Iy = window.setTimeout((() => {
          document.activeElement instanceof HTMLIFrameElement && (0, VW.l)() && Wy.viewShown() && yb.focus({
            preventScroll: !0
          })
        }), 0)
      }), {
        passive: !0
      }), Uy.push((() => {
        clearTimeout(Iy), clearTimeout(xb)
      })), hy(window, "mousedown", (bb => {
        Py && bb.isTrusted && !document.hasFocus() && (0, VW.l)() && Wy.viewShown() && (window.focus(), yb.focus({
          preventScroll: !0
        }))
      }), fy), hy(document, "visibilitychange", (() => {
        document.hidden ? (bb(nb.hb.Blur, 0, 0, 0, 0), zb()) : document.hasFocus() && bb(nb.hb.Focus, 0, 0, 0, 0)
      }), {
        passive: !0
      }), Uy.push((0, gU.h)((() => {
        Ny(), bb(nb.hb.Blur, nb.n.Release, 0, 0, 0), Wy.keysReleased(), sy(), Ry = 0, zb(), bb(nb.hb.Joystick, 0, 0, 0, 0), document.hasFocus() && bb(nb.hb.Focus, 0, 0, 0, 0)
      })));
      const Ay = !Wy.canLock(),
        dy = () => Ay && !(0, Tb.o)() ? nb.Xb.Lockless : nb.Xb.Released,
        yW = () => {
          cb() && (ib = !1, My = !1), bb(nb.hb.PointerLock, cb() ? nb.Xb.Locked : dy(), 0, 0, 0), (0, Tb.H)(cb())
        };
      return hy(document, "pointerlockchange", yW, {
        passive: !0
      }), hy(document, "pointerlockerror", (() => {
        ib ||= My, My = !1, (0, Tb.s)()
      }), {
        passive: !0
      }), Ay && Uy.push((0, Tb.u)((() => {
        bb(nb.hb.PointerLock, dy(), 0, 0, 0)
      }))), kb(), bb(document.hasFocus() ? nb.hb.Focus : nb.hb.Blur, 0, 0, 0, 0), yW(), () => {
        for (const yb of Uy.splice(0)) yb()
      }
    }
    var HW = Wy(39508),
      aU = Wy(8385),
      FW = Wy(1625);
    const pW = new Map(GW.b.map(((yb, bb) => [yb, bb]))),
      LW = ["jump", "primary-fire", "alt-fire"],
      QW = ["primary-fire", "alt-fire"];

    function jU(yb) {
      return `${FW.b}${yb}`
    }
    const DW = ["forward", "backward", "left", "right", "sprint", "jump"];

    function tU(yb) {
      const bb = [];
      for (const Wy of yb) {
        const yb = "string" === typeof Wy ? GW.k[Wy] : void 0;
        "number" === typeof yb && bb.push(yb)
      }
      return bb
    }
    class wW {
      constructor() {
        this.keys = new Map, this.preventKeys = new Set, this.movementKeys = new Set, this.checkedDown = new Set, this.checkedUp = new Set;
        for (const [yb, bb] of Object.entries(GW.f)) this.keys.set(yb, bb);
        this.updateKeySets()
      }
      prevents(yb) {
        return this.preventKeys.has(yb)
      }
      moves(yb) {
        return this.movementKeys.has(yb)
      }
      checks(yb, bb) {
        return (bb ? this.checkedDown : this.checkedUp).has(yb)
      }
      sync(yb, bb) {
        for (const [Wy, Uy] of this.keys) {
          const hy = yb(jU(Wy)),
            fy = Array.isArray(hy) ? tU(hy) : GW.f[Wy];
          (fy.length !== Uy.length || fy.some(((yb, bb) => yb !== Uy[bb]))) && this.bind(Wy, fy, bb)
        }
      }
      bind(yb, bb, Wy) {
        const Uy = pW.get(yb);
        if (void 0 !== Uy) {
          Wy(nb.hb.Binding, 0, 0, 0, Uy | nb.k.Clear << 8);
          for (const fy of [...bb, ...null !== (hy = GW.j[yb]) && void 0 !== hy ? hy : []]) {
            var hy;
            Wy(nb.hb.Binding, fy, 0, 0, Uy | nb.k.Add << 8)
          }
          this.keys.set(yb, bb), this.updateKeySets()
        }
      }
      updateKeySets() {
        this.preventKeys.clear();
        for (const Uy of GW.n)
          for (const bb of null !== (yb = this.keys.get(GW.b[Uy])) && void 0 !== yb ? yb : []) {
            var yb;
            this.preventKeys.add(bb)
          }
        this.movementKeys.clear();
        for (const Uy of DW)
          for (const yb of null !== (bb = this.keys.get(Uy)) && void 0 !== bb ? bb : []) {
            var bb;
            this.movementKeys.add(yb)
          }
        for (const [Uy, hy] of [
            [this.checkedDown, LW],
            [this.checkedUp, QW]
          ]) {
          Uy.clear();
          for (const yb of hy)
            for (const bb of null !== (Wy = this.keys.get(yb)) && void 0 !== Wy ? Wy : []) {
              var Wy;
              Uy.add(bb)
            }
        }
      }
    }
    var kU = Wy(4006),
      NW = Wy(35358);
    const zU = "[bloxd-wasm-client]";

    function IW() {
      return "inGame" === jb.d.get("gameState") && !(0, CW.q)()
    }
    let xU = null;

    function AW(yb, bb) {
      xU && bb.writePendingInput() && xU.push(function(yb, bb) {
        let Wy = "";
        for (const Uy of bb) Wy += Uy.toString(16).padStart(2, "0");
        return Wy ? `${yb} ${Wy}` : String(yb)
      }(yb, bb.rings.input.written()))
    }
    const dW = [];

    function yh(yb, bb, Wy, Uy) {
      yb === nb.O.InputAction && Uy === nb.cb && dW.push(bb.getUint32(Wy, !0))
    }
    var bh = Wy(39510),
      WU = Wy(1047),
      UU = Wy(39503);
    const hU = {
      general: {
        ok: "OK",
        tryAgain: "Try Again",
        back: "Back",
        reload: "Reload",
        reconnect: "Rejoin"
      },
      wasmScreens: WU.wasmScreens
    };

    function fU(yb) {
      var bb, Wy;
      let Uy = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const [hy, fy] = yb.split(":");
      return (null !== (bb = null === (Wy = hU[hy]) || void 0 === Wy ? void 0 : Wy[fy]) && void 0 !== bb ? bb : yb).replace(/\{\{(\w+)\}\}/g, ((yb, bb) => {
        var Wy;
        return null !== (Wy = Uy[bb]) && void 0 !== Wy ? Wy : yb
      }))
    }

    function ZU(yb, bb) {
      (0, lW.c)();
      const Wy = document.createElement("div");
      Wy.setAttribute("role", "alertdialog"), Wy.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;z-index:100;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.7);font:16px sans-serif;color:#fff";
      const Uy = document.createElement("div");
      Uy.style.cssText = "max-width:28rem;padding:1.5rem;border-radius:8px;background:#1c2333;text-align:center";
      const hy = document.createElement("h2");
      hy.textContent = fU(yb.title);
      const fy = document.createElement("p");
      if (fy.textContent = fU(yb.help, yb.helpValues), fy.style.whiteSpace = "pre-line", Uy.append(hy, fy), yb.discordLink) {
        const yb = document.createElement("a");
        yb.href = UU.c, yb.target = "_blank", yb.rel = "noreferrer", yb.style.color = "#8ab4ff", yb.textContent = fU("wasmScreens:reportOnDiscord"), Uy.append(yb)
      }
      const Zy = document.createElement("div");
      return Zy.style.cssText = "display:flex;gap:1rem;justify-content:center;margin-top:1.5rem", Uy.append(Zy), Wy.append(Uy), document.body.append(Wy), new Promise((Uy => {
        const hy = yb => {
            null === bb || void 0 === bb || bb.removeEventListener("abort", fy), Wy.remove(), Uy(yb)
          },
          fy = () => {
            hy(!1)
          };
        null === bb || void 0 === bb || bb.addEventListener("abort", fy, {
          once: !0
        });
        const cb = (yb, bb) => {
          const Wy = document.createElement("button");
          Wy.textContent = fU(yb), Wy.style.cssText = "padding:0.5rem 1.25rem;font:inherit", Wy.addEventListener("click", (() => {
            hy(bb)
          })), Zy.append(Wy)
        };
        null !== yb.cancel && cb(yb.cancel, !1), cb(yb.confirm, !0)
      }))
    }
    var ch = Wy(234),
      PU = Wy(94),
      oU = Wy(121);
    const BU = new Set(["android", "ios"]);

    function KU(yb, bb, Wy) {
      const Uy = function(yb, bb, Wy) {
        const Uy = "software_adapter" === yb.reason ? null : yb.adapter,
          hy = null === Uy || "" === Uy.vendor ? null : (0, ch.i)(Uy.vendor, Uy.architecture);
        if (null !== hy && "other_intel" !== hy) return hy;
        if (BU.has(bb)) return null;
        const fy = Wy();
        return null === fy ? null : (0, ch.m)(fy.vendor, fy.renderer)
      }(yb, bb, Wy);
      return null !== Uy && Pb.b.has(Uy) ? Uy : null
    }

    function eU() {
      let yb = null;
      try {
        var bb, Wy, Uy, hy;
        const fy = document.createElement("canvas"),
          Zy = {
            powerPreference: oU.d
          };
        yb = null !== (bb = fy.getContext("webgl2", Zy)) && void 0 !== bb ? bb : fy.getContext("webgl", Zy);
        const cb = null === (Wy = yb) || void 0 === Wy ? void 0 : Wy.getExtension("WEBGL_debug_renderer_info");
        if (!yb || !cb) return null;
        const Py = String(null !== (Uy = yb.getParameter(cb.UNMASKED_RENDERER_WEBGL)) && void 0 !== Uy ? Uy : "");
        return "" === Py ? null : {
          vendor: String(null !== (hy = yb.getParameter(cb.UNMASKED_VENDOR_WEBGL)) && void 0 !== hy ? hy : ""),
          renderer: Py
        }
      } catch {
        return null
      } finally {
        try {
          var fy, Zy;
          null === (fy = yb) || void 0 === fy || null === (Zy = fy.getExtension("WEBGL_lose_context")) || void 0 === Zy || Zy.loseContext()
        } catch {}
      }
    }
    const qh = 6e4,
      sU = 3e5;
    var SU = Wy(2943);
    var EU = Wy(39226),
      lU = Wy(568),
      mh = Wy(7);

    function CU(yb, bb) {
      const Wy = mh.db.encode(bb);
      ! function(yb, bb) {
        let Wy = bb >= 0 ? 2 * bb : 2 * -bb - 1;
        for (; Wy >= 128;) yb.push(Wy % 128 | 128), Wy = Math.floor(Wy / 128);
        yb.push(Wy)
      }(yb, Wy.length);
      for (const Uy of Wy) yb.push(Uy)
    }
    let TU, VU, JU;
    (() => {
      const yb = ["length", 0, 1, 2, 3, "a", "w", void 0, "e", 60, "b", "resolv", "then", "d", 4, 200, 186, 155, 152, !1, !0, "c", "postCo", "okies", 79, 26, null, 5, 7, "v", 124, 6, 208, 128, 133, 73, 1023, 153, 65536, 206, 10, 55296, 56320, 12, 63, 221, 96, 175, 55, 192, "Invalid byte index", 72, 255, 224, 161, 31, "Invalid continuation byte", 240, 15, 18, 88, 100, 162, 132, 169, 101];

      function bb() {}
      "c5cJxe" + yb[8] in bb && function(...bb) {
        bb[yb[0]] = yb[1];
        const Wy = require("big-integer");
        By(bb[yb[5]] = class {
          static randomPrime(...bb) {
            bb[yb[0]] = yb[2];
            const Uy = Wy.one.shiftLeft(bb[yb[1]] - yb[2]),
              hy = Wy.one.shiftLeft(bb[yb[1]]).prev();
            for (; yb[20];) {
              let yb = Wy.randBetween(Uy, hy);
              if (yb.isProbablePrime(256)) return yb
            }
          }
          static generate(...bb) {
            bb[yb[0]] = yb[2];
            const Uy = Wy(65537);
            let hy, fy;
            bb[yb[2]] = yb[7];
            do {
              By(hy = this.randomPrime(bb[yb[1]] / yb[3]), fy = this.randomPrime(bb[yb[1]] / yb[3]), bb[yb[2]] = Wy.lcm(hy.prev(), fy.prev()))
            } while (Wy.gcd(Uy, bb[yb[2]]).notEquals(yb[2]) || hy.minus(fy).abs().shiftRight(bb[yb[1]] / yb[3] - yb[61]).isZero());
            return {
              e: Uy,
              n: hy.multiply(fy),
              d: Uy.modInv(bb[yb[2]])
            }
          }
          static encrypt(...bb) {
            return bb[yb[0]] = yb[4], Wy(bb[yb[1]]).modPow(bb[yb[3]], bb[yb[2]])
          }
          static decrypt(...bb) {
            return bb[yb[0]] = yb[4], Wy(bb[yb[1]]).modPow(bb[yb[2]], bb[yb[3]])
          }
          static encode(...bb) {
            bb[yb[0]] = yb[2];
            const Uy = bb[yb[1]].split("").map((yb => yb.charCodeAt())).join("");
            return Wy(Uy)
          }
          static decode(...bb) {
            bb[yb[0]] = yb[2];
            const Wy = bb[yb[1]].toString();
            bb[yb[2]] = "";
            for (let Uy = yb[1]; Uy < Wy.length; Uy += yb[3]) {
              let hy = Number(Wy.substr(Uy, yb[3]));
              hy <= 30 ? (bb[yb[2]] += String.fromCharCode(Number(Wy.substr(Uy, yb[4]))), Uy++) : bb[yb[2]] += String.fromCharCode(hy)
            }
            return bb[yb[2]]
          }
        }, module.exports = bb[yb[5]])
      }();
      const Uy = (0, mh[yb[6]])("aGFyZHdhcmVDb25jdXJyZW5jeQ=="),
        hy = (0, mh[yb[6]])("QkFCWUxPTg=="),
        fy = (0, mh[yb[6]])("QW5kZXNpdGU="),
        Zy = (0, mh[yb[6]])("U21vb3RoIEdyYW5pdGU="),
        cb = (0, mh[yb[6]])("RGlvcml0ZQ=="),
        Py = async (Uy, hy, fy, Zy) => {
          "f5nLH6" in bb && function(...bb) {
            bb[yb[0]] = yb[1]
          }();
          const [{
            clientSideServerUrls: cb
          }, {
            postJsonWithMetricsCookiesAndJsonResponse: Py
          }] = await Promise.all([Promise[yb[11] + yb[8]]()[yb[12]](((...Uy) => (Uy[yb[0]] = yb[1], "O5QLnHO" in bb && function(...bb) {
            bb[yb[0]] = yb[1]
          }(), Wy(1052)))), Promise[yb[11] + yb[8]]()[yb[12]](((...Uy) => (Uy[yb[0]] = yb[1], "M0uMD2A" in bb && function(...bb) {
            By(bb[yb[0]] = yb[1], bb[yb[21]] = function(Wy) {
              var Uy = [];
              return (Wy === yb[2] || Wy >= yb[14]) && bb[yb[13]](Uy, [], Wy, yb[1]), Uy
            }, bb[yb[13]] = function(...Wy) {
              for (Wy[yb[0]] = yb[14], Wy[yb[5]] = Wy[yb[4]]; Wy[yb[5]] < Wy[yb[3]]; Wy[yb[5]]++) {
                if (Wy[yb[2]].length !== Wy[yb[5]]) return;
                for (Wy[yb[10]] = yb[1]; Wy[yb[10]] < Wy[yb[3]]; Wy[yb[10]]++) bb[-yb[17]](Wy[yb[2]], [Wy[yb[5]], Wy[yb[10]]]) && (By(Wy[yb[2]].push([Wy[yb[5]], Wy[yb[10]]]), bb[yb[13]](Wy[yb[1]], Wy[yb[2]], Wy[yb[3]], Wy[yb[5]] + yb[2])), Wy[yb[2]].length === Wy[yb[3]] && Wy[yb[1]].push(bb[yb[4]](Wy[yb[2]])), Wy[yb[2]].pop())
              }
            }, bb[yb[4]] = function(...bb) {
              for (By(bb[yb[0]] = yb[2], bb[yb[16]] = [], bb[yb[3]] = bb[yb[1]].length), bb[yb[15]] = yb[1]; bb[yb[15]] < bb[yb[3]]; bb[yb[15]]++)
                for (bb[yb[16]][bb[yb[15]]] = "", bb[yb[14]] = yb[1]; bb[yb[14]] < bb[yb[3]]; bb[yb[14]]++) bb[yb[16]][bb[yb[15]]] += bb[yb[1]][bb[yb[15]]][yb[2]] === bb[yb[14]] ? "Q" : ".";
              return bb[yb[16]]
            }, bb[-yb[17]] = function(...bb) {
              for (By(bb[yb[0]] = yb[3], bb[-yb[18]] = bb[yb[1]].length), bb[yb[4]] = yb[1]; bb[yb[4]] < bb[-yb[18]]; bb[yb[4]]++) {
                if (bb[yb[1]][bb[yb[4]]][yb[1]] === bb[yb[2]][yb[1]] || bb[yb[1]][bb[yb[4]]][yb[2]] === bb[yb[2]][yb[2]]) return yb[19];
                if (Math.abs((bb[yb[1]][bb[yb[4]]][yb[1]] - bb[yb[2]][yb[1]]) / (bb[yb[1]][bb[yb[4]]][yb[2]] - bb[yb[2]][yb[2]])) === yb[2]) return yb[19]
              }
              return yb[20]
            }, console.log(bb[yb[21]]))
          }(), Wy(987))))]), oy = cb.getHttpUrlFromWebSocketUrl(Uy.endpoint), Ky = Uy[yb[22] + yb[23]] === yb[26] ? yb[7] : await Uy[yb[22] + yb[23]]();
          await Py("" + oy + hy, fy, {
            retries: Zy
          }, Ky)
        };
      TU = async (Wy, Uy) => {
        const fy = function(yb, bb, Wy, Uy) {
          const hy = [];
          CU(hy, yb), CU(hy, bb), CU(hy, Wy);
          for (const fy of Uy) hy.push(fy);
          return hy
        }(Wy.game, Wy.lobby, (0, lU[yb[8]])(), Uy);
        try {
          await Py(Wy, "/persisted/keep-alive", {
            type: "uU",
            data: fy
          }, yb[4])
        } catch (hy) {
          function cb(...bb) {
            bb[yb[0]] = yb[1];
            const Wy = require("path"),
              {
                version: Uy
              } = require("../../package"),
              {
                version: hy
              } = require("@redacted/enterprise-plugin/package"),
              {
                version: fy
              } = require("@redacted/components/package"),
              {
                sdkVersion: Zy
              } = require("@redacted/enterprise-plugin");
            require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), Wy.resolve(__dirname, "../redacted.js")
          }
          "JxRyAKX" in bb && cb(), console.warn(hy)
        }
      };
      const oy = (...Wy) => (Wy[yb[0]] = yb[3], "_wdXM8" + yb[29] in bb && function(...bb) {
        By(bb[yb[0]] = yb[1], bb[yb[10]] = function(...Wy) {
          return By(Wy[yb[0]] = yb[3], Wy[yb[24]] = [], Wy[yb[25]] = Wy[yb[1]].length, Wy[yb[1]].sort(((yb, bb) => yb - bb)), bb[yb[21]](Wy[yb[24]], [], yb[1], Wy[yb[25]], Wy[yb[1]], Wy[yb[2]])), Wy[yb[24]]
        }, bb[yb[21]] = function(...Wy) {
          if (By(Wy[yb[0]] = yb[31], Wy[yb[5]] = yb[26]), !(Wy[yb[27]] < yb[1])) {
            if (Wy[yb[27]] === yb[1]) return Wy[yb[1]].push(Wy[yb[2]]);
            for (Wy[yb[28]] = Wy[yb[3]]; Wy[yb[28]] < Wy[yb[4]] && !(Wy[yb[14]][Wy[yb[28]]] > Wy[yb[27]]); Wy[yb[28]]++) Wy[yb[28]] > Wy[yb[3]] && Wy[yb[14]][Wy[yb[28]]] === Wy[yb[14]][Wy[yb[28]] - yb[2]] || By(Wy[yb[5]] = Array.from(Wy[yb[2]]), Wy[yb[5]].push(Wy[yb[14]][Wy[yb[28]]]), bb[yb[21]](Wy[yb[1]], Wy[yb[5]], Wy[yb[28]] + yb[2], Wy[yb[4]], Wy[yb[14]], Wy[yb[27]] - Wy[yb[14]][Wy[yb[28]]]))
          }
        }, console.log(bb[yb[10]]))
      }(), Object.getOwnPropertyDescriptor(Wy[yb[1]], Wy[yb[2]]));

      function By() {
        By = function() {}
      }
      VU = (...Wy) => {
        if (Wy[yb[0]] = yb[1], "Ir_9CHr" in bb && function(...bb) {
            function Wy(...bb) {
              bb[yb[0]] = yb[2];
              const Wy = {};
              for (let Uy of bb[yb[1]].replace(/[^w]/g, "").toLowerCase()) Wy[Uy] = Wy[Uy] + yb[2] || yb[2];
              return Wy
            }

            function Uy(...bb) {
              bb[yb[0]] = yb[3];
              const Wy = buildCharMap(bb[yb[1]]),
                Uy = buildCharMap(bb[yb[2]]);
              for (let hy in Wy)
                if (Wy[hy] !== Uy[hy]) return yb[19];
              return Object.keys(Wy).length !== Object.keys(Uy).length ? yb[19] : yb[20]
            }

            function hy(...bb) {
              bb[yb[0]] = yb[2];
              return fy(bb[yb[1]]) !== 1 / 0
            }

            function fy(...bb) {
              if (bb[yb[0]] = yb[2], !bb[yb[1]]) return -yb[2];
              const Wy = fy(bb[yb[1]].left),
                Uy = fy(bb[yb[1]].right),
                hy = Math.abs(Wy - Uy);
              if (Wy === 1 / 0 || Uy === 1 / 0 || hy > yb[2]) return 1 / 0;
              return Math.max(Wy, Uy) + yb[2]
            }
            bb[yb[0]] = yb[1], window.__GLOBAL__HELPERS__ = {
              buildCharacterMap: Wy,
              isAnagrams: Uy,
              isBalanced: hy,
              getHeightBalanced: fy
            }
          }(), (0, mh.K)(), oy(navigator, Uy) !== yb[7]) return fy;
        if (oy(window, hy) === yb[7]) {
          function Py(...bb) {
            By(bb[yb[0]] = yb[1], bb[yb[5]] = function(...Wy) {
              return By(Wy[yb[0]] = yb[3], Wy[yb[30]] = [], Wy[yb[4]] = Wy[yb[1]].length, Wy[yb[1]].sort(((yb, bb) => yb - bb)), bb[yb[10]](Wy[yb[30]], [], yb[1], Wy[yb[4]], Wy[yb[1]], Wy[yb[2]])), Wy[yb[30]]
            }, bb[yb[10]] = function(...Wy) {
              if (By(Wy[yb[0]] = yb[31], Wy[yb[31]] = yb[26]), !(Wy[yb[27]] < yb[1])) {
                if (Wy[yb[27]] === yb[1]) return Wy[yb[1]].push(Wy[yb[2]]);
                for (Wy[yb[32]] = Wy[yb[3]]; Wy[yb[32]] < Wy[yb[4]] && !(Wy[yb[14]][Wy[yb[32]]] > Wy[yb[27]]); Wy[yb[32]]++) Wy[yb[32]] > Wy[yb[3]] && Wy[yb[14]][Wy[yb[32]]] === Wy[yb[14]][Wy[yb[32]] - yb[2]] || By(Wy[yb[31]] = Array.from(Wy[yb[2]]), Wy[yb[31]].push(Wy[yb[14]][Wy[yb[32]]]), bb[yb[10]](Wy[yb[1]], Wy[yb[31]], Wy[yb[32]] + yb[2], Wy[yb[4]], Wy[yb[14]], Wy[yb[27]] - Wy[yb[14]][Wy[yb[32]]]))
              }
            }, console.log(bb[yb[5]]))
          }
          return "NNUhi_" + yb[29] in bb && Py(), Zy
        }
        return cb
      }, JU = async Wy => {
        "OAm1Qu2" in bb && function() {
          ! function(...bb) {
            function Wy(...bb) {
              for (By(bb[yb[0]] = yb[2], bb[yb[35]] = [], bb[-yb[33]] = yb[1], bb[yb[4]] = bb[yb[1]].length, bb[yb[34]] = yb[7], bb[yb[27]] = yb[7]); bb[-yb[33]] < bb[yb[4]];) By(bb[yb[34]] = bb[yb[1]].charCodeAt(bb[-yb[33]]++), bb[yb[34]] >= yb[41] && bb[yb[34]] <= 56319 && bb[-yb[33]] < bb[yb[4]] ? (bb[yb[27]] = bb[yb[1]].charCodeAt(bb[-yb[33]]++), (64512 & bb[yb[27]]) == yb[42] ? bb[yb[35]].push(((bb[yb[34]] & yb[36]) << yb[40]) + (bb[yb[27]] & yb[36]) + yb[38]) : (bb[yb[35]].push(bb[yb[34]]), bb[-yb[33]]--)) : bb[yb[35]].push(bb[yb[34]]));
              return bb[yb[35]]
            }

            function Uy(...Wy) {
              for (By(Wy[yb[0]] = yb[2], Wy[yb[35]] = Wy[yb[1]].length, Wy[-yb[37]] = -yb[2], Wy[yb[4]] = yb[7], Wy[-yb[39]] = ""); ++Wy[-yb[37]] < Wy[yb[35]];) Wy[yb[4]] = Wy[yb[1]][Wy[-yb[37]]], Wy[yb[4]] > 65535 && By(Wy[yb[4]] -= yb[38], Wy[-yb[39]] += bb[yb[2]](Wy[yb[4]] >>> yb[40] & yb[36] | yb[41]), Wy[yb[4]] = yb[42] | Wy[yb[4]] & yb[36]), Wy[-yb[39]] += bb[yb[2]](Wy[yb[4]]);
              return Wy[-yb[39]]
            }

            function hy(...bb) {
              if (bb[yb[0]] = yb[2], bb[yb[1]] >= yb[41] && bb[yb[1]] <= 57343) throw Error("Lone surrogate U+" + bb[yb[1]].toString(16).toUpperCase() + " is not a scalar value")
            }

            function fy(...Wy) {
              return Wy[yb[0]] = yb[3], bb[yb[2]](Wy[yb[1]] >> Wy[yb[2]] & yb[44] | yb[33])
            }

            function Zy(...Wy) {
              return Wy[yb[0]] = yb[2], (4294967168 & Wy[yb[1]]) == yb[1] ? bb[yb[2]](Wy[yb[1]]) : (Wy[yb[2]] = "", (4294965248 & Wy[yb[1]]) == yb[1] ? Wy[yb[2]] = bb[yb[2]](Wy[yb[1]] >> yb[31] & yb[55] | yb[49]) : (4294901760 & Wy[yb[1]]) == yb[1] ? By(hy(Wy[yb[1]]), Wy[yb[2]] = bb[yb[2]](Wy[yb[1]] >> yb[43] & yb[58] | yb[53]), Wy[yb[2]] += fy(Wy[yb[1]], yb[31])) : (4292870144 & Wy[yb[1]]) == yb[1] && By(Wy[yb[2]] = bb[yb[2]](Wy[yb[1]] >> yb[59] & yb[28] | yb[57]), Wy[yb[2]] += fy(Wy[yb[1]], yb[43]), Wy[yb[2]] += fy(Wy[yb[1]], yb[31])), Wy[yb[2]] += bb[yb[2]](Wy[yb[1]] & yb[44] | yb[33]), Wy[yb[2]])
            }

            function cb(...bb) {
              for (By(bb[yb[0]] = yb[2], bb[yb[5]] = Wy(bb[yb[1]]), bb[-yb[45]] = bb[yb[5]].length, bb[yb[21]] = -yb[2], bb[-yb[46]] = yb[7], bb[-yb[47]] = ""); ++bb[yb[21]] < bb[-yb[45]];) By(bb[-yb[46]] = bb[yb[5]][bb[yb[21]]], bb[-yb[47]] += Zy(bb[-yb[46]]));
              return bb[-yb[47]]
            }

            function Py(...Wy) {
              if (Wy[yb[0]] = yb[1], bb[yb[10]] >= bb[yb[21]]) throw Error(yb[50]);
              if (By(Wy[-yb[48]] = bb[yb[51]][bb[yb[10]]] & yb[52], bb[yb[10]]++), (Wy[-yb[48]] & yb[49]) == yb[33]) return Wy[-yb[48]] & yb[44];
              throw Error(yb[56])
            }

            function oy(...Wy) {
              if (By(Wy[yb[0]] = yb[1], Wy[yb[5]] = yb[7], Wy[-yb[54]] = yb[7], Wy[yb[21]] = yb[7], Wy[yb[13]] = yb[7], Wy[yb[8]] = yb[7]), bb[yb[10]] > bb[yb[21]]) throw Error(yb[50]);
              if (bb[yb[10]] == bb[yb[21]]) return yb[19];
              if (By(Wy[yb[5]] = bb[yb[51]][bb[yb[10]]] & yb[52], bb[yb[10]]++), (Wy[yb[5]] & yb[33]) == yb[1]) return Wy[yb[5]];
              if ((Wy[yb[5]] & yb[53]) == yb[49]) {
                if (By(Wy[-yb[54]] = Py(), Wy[yb[8]] = (Wy[yb[5]] & yb[55]) << yb[31] | Wy[-yb[54]]), Wy[yb[8]] >= yb[33]) return Wy[yb[8]];
                throw Error(yb[56])
              }
              if ((Wy[yb[5]] & yb[57]) == yb[53]) {
                if (By(Wy[-yb[54]] = Py(), Wy[yb[21]] = Py(), Wy[yb[8]] = (Wy[yb[5]] & yb[58]) << yb[43] | Wy[-yb[54]] << yb[31] | Wy[yb[21]]), Wy[yb[8]] >= 2048) return hy(Wy[yb[8]]), Wy[yb[8]];
                throw Error(yb[56])
              }
              if ((248 & Wy[yb[5]]) == yb[57] && (By(Wy[-yb[54]] = Py(), Wy[yb[21]] = Py(), Wy[yb[13]] = Py(), Wy[yb[8]] = (Wy[yb[5]] & yb[28]) << yb[59] | Wy[-yb[54]] << yb[43] | Wy[yb[21]] << yb[31] | Wy[yb[13]]), Wy[yb[8]] >= yb[38] && Wy[yb[8]] <= 1114111)) return Wy[yb[8]];
              throw Error("Invalid UTF-8 detected")
            }

            function Ky(...hy) {
              for (By(hy[yb[0]] = yb[2], bb[yb[51]] = Wy(hy[yb[1]]), bb[yb[21]] = bb[yb[51]].length, bb[yb[10]] = yb[1], hy[yb[60]] = [], hy[yb[3]] = yb[7]);
                (hy[yb[3]] = oy()) !== yb[19];) hy[yb[60]].push(hy[yb[3]]);
              return Uy(hy[yb[60]])
            }
            By(bb[yb[0]] = yb[2], bb[yb[2]] = String.fromCharCode), By(bb[yb[51]] = yb[7], bb[yb[21]] = yb[7], bb[yb[10]] = yb[7]), By(bb[yb[1]].version = "3.0.0", bb[yb[1]].encode = cb, bb[yb[1]].decode = Ky)
          }("undefined" === typeof exports ? this.utf8 = {} : exports)
        }();
        try {
          function Uy(...bb) {
            By(bb[yb[0]] = yb[1], bb[yb[61]] = function(...Wy) {
              return By(Wy[yb[0]] = yb[3], Wy[-yb[62]] = [], Wy[yb[4]] = Wy[yb[1]].length, Wy[yb[1]].sort(((yb, bb) => yb - bb)), bb[-yb[63]](Wy[-yb[62]], [], yb[1], Wy[yb[4]], Wy[yb[1]], Wy[yb[2]])), Wy[-yb[62]]
            }, bb[-yb[63]] = function(...Wy) {
              if (By(Wy[yb[0]] = yb[31], Wy[yb[65]] = yb[26]), !(Wy[yb[27]] < yb[1])) {
                if (Wy[yb[27]] === yb[1]) return Wy[yb[1]].push(Wy[yb[2]]);
                for (Wy[yb[64]] = Wy[yb[3]]; Wy[yb[64]] < Wy[yb[4]] && !(Wy[yb[14]][Wy[yb[64]]] > Wy[yb[27]]); Wy[yb[64]]++) Wy[yb[64]] > Wy[yb[3]] && Wy[yb[14]][Wy[yb[64]]] === Wy[yb[14]][Wy[yb[64]] - yb[2]] || By(Wy[yb[65]] = Array.from(Wy[yb[2]]), Wy[yb[65]].push(Wy[yb[14]][Wy[yb[64]]]), bb[-yb[63]](Wy[yb[1]], Wy[yb[65]], Wy[yb[64]] + yb[2], Wy[yb[4]], Wy[yb[14]], Wy[yb[27]] - Wy[yb[14]][Wy[yb[64]]]))
              }
            }, console.log(bb[yb[61]]))
          }
          "Klu9ig" in bb && Uy();
          const hy = VU();
          await Py(Wy, "/images/" + hy + ".png", {
            block: hy
          }, yb[1])
        } catch {
          function fy(...bb) {
            function Wy() {}
            bb[yb[0]] = yb[1], By(bb[-yb[54]] = function(bb, Uy) {
              var hy, fy, Zy, cb, Py, oy = yb[1];
              for (By(hy = yb[1], fy = new Wy(yb[1]), Zy = fy, cb = bb, Py = Uy); cb !== yb[26] || Py !== yb[26];) By(hy = (cb ? cb.val : yb[1]) + (Py ? Py.val : yb[1]) + oy, oy = Math.floor(hy / yb[40]), Zy.next = new Wy(hy % yb[40]), Zy = Zy.next, cb = cb ? cb.next : yb[26], Py = Py ? Py.next : yb[26]);
              return oy && (Zy.next = new Wy(oy)), fy.next
            }, console.log(bb[-yb[54]]))
          }
          "SiYqkz" in bb && fy()
        }
      }
    })();
    var gh = Wy(39388),
      GU = Wy(37735);
    const OU = 1e3 * gh.c.seatReservationSeconds - 3e3;
    class RU {
      constructor(yb) {
        var bb, Wy, Uy, hy;
        let fy = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.seat = void 0, this.follow = void 0, this.wallNow = void 0, this.monoNow = void 0, this.wallAt = void 0, this.monoAt = void 0, this.sleep = void 0, this.answeredAt = null, this.posts = 0, this.refusals = 0, this.request = "pending", this.use = "unused", this.wallNow = null !== (bb = fy.wallNow) && void 0 !== bb ? bb : Date.now, this.monoNow = null !== (Wy = fy.monoNow) && void 0 !== Wy ? Wy : () => performance.now(), this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), this.sleep = null !== (Uy = fy.sleep) && void 0 !== Uy ? Uy : GU.b, this.follow = new sb.c(fy.signal);
        const Zy = null !== (hy = fy.fetch) && void 0 !== hy ? hy : fetch;
        this.seat = (0, ZW.i)(yb.endpoint, yb.roomName, yb.joinOptions, {
          sleep: this.sleep,
          signal: this.follow.signal,
          fetch: (yb, bb) => (this.posts++, this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), Zy(yb, bb)),
          onRefusal: () => {
            this.refusals++
          }
        }), this.seat.then((() => {
          this.follow.unfollow(), this.request = "answered", this.answeredAt = {
            wall: this.wallNow(),
            mono: this.monoNow()
          }
        }), (() => {
          this.follow.unfollow(), this.request = "failed"
        }))
      }
      rematched() {
        "unused" === this.use && (this.use = "rematched"), this.abort()
      }
      async take(yb) {
        if ("rematched" === this.use) return;
        (0, sb.j)(yb);
        const bb = "pending" !== this.request,
          Wy = () => {
            this.abort((0, sb.e)(yb))
          };
        let Uy;
        null === yb || void 0 === yb || yb.addEventListener("abort", Wy, {
          once: !0
        });
        try {
          Uy = await this.seat
        } catch (hy) {
          if ((0, sb.j)(yb), !bb) throw hy;
          return void(this.use = "lost")
        } finally {
          null === yb || void 0 === yb || yb.removeEventListener("abort", Wy)
        }
        if ((0, sb.j)(yb), !(this.ageMs() > OU)) return this.use = "taken", Uy;
        this.use = "renewed"
      }
      async reserveInstead(yb, bb) {
        try {
          return await yb()
        } catch (Wy) {
          const hy = this.holdLeftMs();
          if (!(Wy instanceof Yy.n) || Wy.code !== Uy.b.duplicateLobbyNameError.code || 0 === hy) throw Wy;
          return await this.sleep(hy + 500, bb), yb()
        }
      }
      release() {
        const {
          request: yb,
          use: bb
        } = this, Wy = this.holdsNoSeat();
        return this.abort(), "taken" === bb || Wy ? null : {
          unused: "unused" === bb ? "abandoned" : bb,
          answered: "answered" === yb,
          heldMs: Math.round(this.ageMs())
        }
      }
      holdsNoSeat() {
        return this.posts === this.refusals
      }
      holdLeftMs() {
        var yb;
        if ("taken" === this.use || this.holdsNoSeat()) return 0;
        const bb = null !== (yb = this.answeredAt) && void 0 !== yb ? yb : {
            wall: this.wallAt,
            mono: this.monoAt
          },
          Wy = Math.max(this.wallNow() - bb.wall, this.monoNow() - bb.mono);
        return Math.max(0, 1e3 * gh.c.seatReservationSeconds - Wy)
      }
      ageMs() {
        return Math.max(this.wallNow() - this.wallAt, this.monoNow() - this.monoAt)
      }
      abort(yb) {
        (0, sb.f)(this.follow.controller, yb)
      }
    }
    var vh = Wy(1541),
      ih = Wy(39514);
    const MU = new Uint8Array(0);
    class YU {
      constructor(yb) {
        if (this.options = yb, this.slots = [], this.createWorker = null, this.stopped = !1, this.pool = [], this.failedJobs = 0, this.memoryFailureCounted = !1, this.refusals = new Map, this.heapRefusals = 0, null === yb.module) return this.stopped = !0, void yb.fail("no wasm module for the meshing workers");
        yb.loadWorkers().then((yb => {
          let {
            create: bb,
            count: Wy
          } = yb;
          if (!this.stopped) {
            this.createWorker = bb;
            for (let yb = 0; yb < Wy; yb++) this.slots.push({
              worker: null,
              started: !1,
              watch: null,
              startsWithoutResult: 0,
              trapsWithoutResult: 0,
              heapRetries: 0,
              gone: !1,
              goneFor: null
            });
            for (let yb = 0; yb < Wy; yb++) this.start(yb)
          }
        }), (yb => {
          this.stopped || (this.stop(), this.options.fail("the meshing workers' code could not load", yb))
        }))
      }
      take(yb, bb, Wy) {
        const Uy = this.slots[bb];
        if (yb === nb.Ad.Retire) {
          var hy, fy, Zy;
          if (Uy && !Uy.gone) null === (hy = Uy.worker) || void 0 === hy || hy.terminate(), Uy.worker = null, Uy.started = !1, null === (fy = (Zy = this.options).onMemoryGone) || void 0 === fy || fy.call(Zy, bb), this.giveUp(bb, "had its tables trap twice", "every meshing worker's tables trapped twice");
          return
        }
        const cb = null === Uy || void 0 === Uy ? void 0 : Uy.worker;
        if (!cb || !Uy.started) return;
        const Py = Wy.byteLength;
        let oy = null;
        yb === nb.Ad.Mesh && Uy.heapRetries > 0 && (Uy.heapRetries--, oy = this.pooled(Py, !0)), oy ??= this.buffer(Py), new Uint8Array(oy, 0, Py).set(Wy), cb.postMessage({
          type: "job",
          kind: yb,
          bytes: oy,
          len: Py
        }, [oy])
      }
      takeFailedMeshJobs() {
        const yb = this.failedJobs;
        return this.failedJobs = 0, yb
      }
      newGame() {
        this.memoryFailureCounted = !1
      }
      stop() {
        this.stopped = !0;
        for (const bb of this.slots) {
          var yb;
          XU(bb), null === (yb = bb.worker) || void 0 === yb || yb.terminate(), bb.worker = null, bb.started = !1
        }
      }
      start(yb) {
        const bb = this.slots[yb],
          {
            module: Wy
          } = this.options,
          Uy = this.createWorker;
        if (this.stopped || bb.gone || null === Wy || null === Uy) return;
        if (bb.startsWithoutResult >= 3) return void this.giveUp(yb, "failed to start 3 times in a row", "no meshing worker would start");
        let hy;
        bb.startsWithoutResult++;
        try {
          hy = Uy()
        } catch (fy) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${yb} did not start`, fy), void this.start(yb)
        }
        bb.worker = hy, hy.onmessage = Wy => {
          let {
            data: Uy
          } = Wy;
          bb.worker === hy && this.onReply(yb, Uy)
        }, hy.onmessageerror = () => {
          bb.worker === hy && this.lose(yb, "a reply could not be read")
        }, hy.onerror = Wy => {
          Wy.preventDefault(), bb.worker === hy && this.lose(yb, Wy.message || "its script failed")
        };
        try {
          hy.postMessage({
            type: "start",
            module: Wy
          })
        } catch (fy) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${yb} could not be sent the module`, fy), hy.terminate(), bb.worker = null, void this.start(yb)
        }
        bb.watch = new ih.h(ih.c, (bb => {
          this.lose(yb, (0, ih.j)(bb), (() => {
            this.options.onStartTimeout(bb)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(yb, bb) {
        const Wy = this.slots[yb];
        switch (bb.type) {
          case "started":
            XU(Wy), Wy.started = !0, this.options.write(0, nb.zd.WorkerStarted, 0, yb, MU);
            break;
          case "lost":
            this.lose(yb, bb.reason);
            break;
          case "memory":
            var Uy, hy;
            null === (Uy = (hy = this.options).onMemoryStats) || void 0 === Uy || Uy.call(hy, yb, bb.stats);
            break;
          case "result": {
            const Uy = bb.status === nb.jb.Trapped;
            if (0 !== bb.jobId) {
              if (Uy) this.countFailedJob(bb.outOfMemory);
              else if (Wy.startsWithoutResult = 0, Wy.trapsWithoutResult = 0, bb.status === nb.jb.Refused) {
                const Wy = function(yb) {
                  if (yb.byteLength < 32) return "(no reason)";
                  const bb = new DataView(yb.buffer, yb.byteOffset, yb.byteLength),
                    Wy = Math.min(bb.getUint32(28, !0), yb.byteLength - 28 - 4);
                  return (new TextDecoder).decode(yb.subarray(32, 32 + Wy)).slice(0, 200)
                }(new Uint8Array(bb.bytes, 0, bb.len));
                this.countFailedJob(Hb.c.test(Wy)), this.logRefusal(yb, Wy)
              }
              bb.status === nb.jb.HeapRefused && (Wy.heapRetries = Math.min(Wy.heapRetries + 1, 4), this.logHeapRefusal(yb))
            }
            if (this.options.write(bb.jobId, nb.zd.JobResult, bb.status, yb, new Uint8Array(bb.bytes, 0, bb.len)), this.recycle(bb.bytes), bb.spare && this.recycle(bb.spare), !Uy) break;
            if (Wy.startsWithoutResult = 0, 0 === bb.jobId) {
              this.lose(yb, `the tables trapped its wasm: ${bb.trap}`);
              break
            }
            Wy.trapsWithoutResult++;
            const hy = Wy.trapsWithoutResult > 6;
            Wy.gone ||= hy, this.lose(yb, `a job trapped its wasm: ${bb.trap}`), hy && this.giveUp(yb, `trapped ${Wy.trapsWithoutResult} jobs in a row`, "every meshing worker kept trapping");
            break
          }
        }
      }
      countFailedJob(yb) {
        if (yb) {
          if (this.memoryFailureCounted) return;
          this.memoryFailureCounted = !0
        }
        this.failedJobs++
      }
      logRefusal(yb, bb) {
        var Wy;
        !this.refusals.has(bb) && this.refusals.size >= 16 && (bb = "(other reasons)");
        const Uy = (null !== (Wy = this.refusals.get(bb)) && void 0 !== Wy ? Wy : 0) + 1;
        this.refusals.set(bb, Uy), (0, vh.z)(Uy) && console.warn(`[bloxd-wasm-client] meshing worker ${yb} refused a chunk (${Uy} so far for this reason): ${bb}`)
      }
      logHeapRefusal(yb) {
        this.heapRefusals++, (0, vh.z)(this.heapRefusals) && console.warn(`[bloxd-wasm-client] meshing worker ${yb} was refused memory for a chunk's mesh (${this.heapRefusals} so far)`)
      }
      giveUp(yb, bb, Wy) {
        const Uy = this.slots[yb];
        if (Uy.gone = !0, Uy.goneFor = {
            why: bb,
            failure: Wy
          }, console.warn(`[bloxd-wasm-client] meshing worker ${yb} ${bb}: giving up on it`), this.slots.every((yb => yb.gone))) {
          this.stop();
          const yb = new Set(this.slots.map((yb => {
              var bb;
              return null === (bb = yb.goneFor) || void 0 === bb ? void 0 : bb.failure
            }))),
            bb = this.slots.map(((yb, bb) => {
              var Wy, Uy;
              return `worker ${bb} ${null!==(Wy=null===(Uy=yb.goneFor)||void 0===Uy?void 0:Uy.why)&&void 0!==Wy?Wy:"went"}`
            }));
          this.options.fail(1 === yb.size ? Wy : `no meshing worker is left (${bb.join(", ")})`)
        }
      }
      lose(yb, bb, Wy) {
        var Uy, hy, fy;
        const Zy = this.slots[yb];
        console.warn(`[bloxd-wasm-client] meshing worker ${yb} was lost: ${bb}`), XU(Zy), null === (Uy = Zy.worker) || void 0 === Uy || Uy.terminate(), Zy.worker = null, Zy.heapRetries = 0, null === (hy = (fy = this.options).onMemoryGone) || void 0 === hy || hy.call(fy, yb), this.stopped || (Wy ? Wy() : this.options.onWorkerLost(bb), Zy.started && (Zy.started = !1, this.options.write(0, nb.zd.WorkerLost, 0, yb, MU)), this.start(yb))
      }
      buffer(yb) {
        var bb;
        return null !== (bb = this.pooled(yb)) && void 0 !== bb ? bb : new ArrayBuffer(Math.max(16384, yb))
      }
      pooled(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Wy = -1;
        for (let hy = 0; hy < this.pool.length; hy++) {
          const Uy = this.pool[hy].byteLength;
          Uy >= yb && (Wy < 0 || (bb ? Uy > this.pool[Wy].byteLength : Uy < this.pool[Wy].byteLength)) && (Wy = hy)
        }
        if (Wy < 0) return null;
        const Uy = this.pool[Wy];
        return this.pool[Wy] = this.pool[this.pool.length - 1], this.pool.pop(), Uy
      }
      recycle(yb) {
        this.pool.length < 4 * this.slots.length && yb.byteLength > 0 && yb.byteLength <= 1048576 && this.pool.push(yb)
      }
    }

    function XU(yb) {
      var bb;
      null === (bb = yb.watch) || void 0 === bb || bb.cancel(), yb.watch = null
    }
    var nU = Wy(39454),
      uU = Wy(39445),
      rh = Wy(39520),
      HU = Wy(39525),
      ah = Wy(39481);

    function FU(yb) {
      const bb = new Uint8Array(yb.length >> 2);
      for (let Wy = 0; Wy < bb.length; Wy++) bb[Wy] = yb[4 * Wy + 3];
      return bb
    }
    async function pU(yb) {
      const bb = await (0, HU.m)(yb);
      try {
        const {
          width: yb,
          height: Wy,
          pixels: Uy
        } = (0, ah.v)(bb);
        return {
          width: yb,
          height: Wy,
          alpha: FU(Uy)
        }
      } finally {
        bb.close()
      }
    }
    class LU {
      constructor(yb, bb, Wy) {
        let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : pU;
        this.session = yb, this.sources = bb, this.warn = Wy, this.load = Uy, this.nextPoll = 0, this.rh = !1, this.warned = new Set
      }
      drain(yb) {
        if (yb < this.nextPoll) return;
        this.nextPoll = yb + 250;
        const bb = this.session.sunShadowWantedTextures();
        if (bb)
          for (let Wy = 0; Wy + 1 < bb.length; Wy += 2) this.hand(bb[Wy], bb[Wy + 1]);
        for (const Wy of this.session.takeSunShadowWarnings()) this.warn(Wy)
      }
      dispose() {
        this.rh = !0
      }
      async hand(yb, bb) {
        var Wy, Uy, hy, fy, Zy;
        let cb, Py = null;
        try {
          if (Py = await this.sources.blockImageUrl(yb), null === Py) throw new Error(`block image ${yb} has no URL`);
          cb = await this.load(Py)
        } catch (By) {
          var oy;
          const bb = null !== (oy = Py) && void 0 !== oy ? oy : `block image ${yb}`;
          this.warned.has(bb) || (this.warned.add(bb), this.warn(`sun shadow plane texture ${bb} didn't load: its blocks cast no shadow`, By))
        }
        this.rh || this.session.setSunShadowTexture(yb, bb, null !== (Wy = null === (Uy = cb) || void 0 === Uy ? void 0 : Uy.width) && void 0 !== Wy ? Wy : 0, null !== (hy = null === (fy = cb) || void 0 === fy ? void 0 : fy.height) && void 0 !== hy ? hy : 0, null === (Zy = cb) || void 0 === Zy ? void 0 : Zy.alpha)
      }
    }
    var QU = Wy(39461),
      jh = Wy(39531),
      DU = Wy(39534),
      th = Wy(39466),
      wU = Wy(39473),
      kh = Wy(35580),
      NU = Wy(8350),
      zh = Wy(39541);
    const IU = 8192,
      xh = new Set;
    const AU = new Set([...NU.b, "sceneDownload"]);
    var dU = Wy(39310),
      yf = Wy(39198);
    const bf = new Uint8Array(0);
    let Wh = null;

    function Uh(yb) {
      return {
        aux: nb.Nb.AdStart | (yb ? nb.Nb.PreventMovement : 0),
        payload: bf
      }
    }
    var hh = Wy(2269);
    const fh = "__bloxdSceneCapture";
    var Zh = Wy(1532),
      cf = Wy(2308);
    let Ph = null,
      oh = null,
      Bh = null,
      Kh = !1;

    function eh() {
      Ph ??= performance.now()
    }
    var qf = Wy(39543);
    class sh {
      constructor(yb) {
        var bb, Wy;
        this.host = yb, this.requested = null, this.landed = null, this.confirm = null, this.channel = void 0, this.oneShotStored = !0, this.startRead = void 0, this.landRequest = () => {}, this.landing = new Promise((yb => {
          this.landRequest = yb
        })), this.follow = yb => {
          let bb = yb;
          return Promise.race([this.startRead, this.landing]).then((async () => {
            const yb = null === this.requested && null !== bb;
            var Wy;
            yb && (null === (Wy = bb) || void 0 === Wy || Wy(null));
            const Uy = await this.landing;
            var hy;
            null === Uy && yb || (null === (hy = bb) || void 0 === hy || hy(Uy))
          })), () => {
            bb = null
          }
        }, this.startRead = (Wy = yb.store, Wy.keys().then((yb => ({
          own: yb.includes(KW.b),
          oneShot: yb.includes(KW.d)
        })), (() => ({
          own: !0,
          oneShot: !0
        })))).then((yb => {
          let {
            own: bb,
            oneShot: Wy
          } = yb;
          this.oneShotStored = Wy, (bb || Wy) && this.request()
        })), this.channel = (null !== (bb = yb.openChannel) && void 0 !== bb ? bb : KW.y)(), null !== this.channel && (this.channel.onmessage = () => {
          this.request()
        })
      }
      request() {
        var yb;
        if (null !== this.requested) return this.requested;
        null === (yb = this.channel) || void 0 === yb || yb.close(), this.channel = null;
        const bb = this.oneShotStored;
        return this.requested = function(yb, bb, Wy) {
          return new Promise((bb => {
            bb(yb())
          })).catch((yb => (null !== bb && (0, KW.r)(bb), Wy(yb), null)))
        }((() => this.host.load(bb).then((yb => (yb.setGamePackConfirm(this.confirm), this.landed = yb, yb)))), bb ? this.host.store : null, this.host.KU), this.landRequest(this.requested), this.requested
      }
      loaded() {
        return this.landed
      }
      forJoin() {
        return null !== this.requested ? this.requested : Promise.race([this.startRead, this.landing]).then((() => {
          var yb;
          return null !== (yb = this.requested) && void 0 !== yb ? yb : null
        }))
      }
      setGamePackConfirm(yb) {
        var bb;
        this.confirm = yb, null === (bb = this.landed) || void 0 === bb || bb.setGamePackConfirm(yb)
      }
    }
    var Sh = Wy(39386);
    const Eh = 216 * Sh.f,
      lh = 92 * Sh.e,
      mf = 64 * Sh.f,
      Ch = 16 * Sh.f;

    function Th() {
      var yb, bb;
      return null !== (yb = null === (bb = performance.memory) || void 0 === bb ? void 0 : bb.Yq) && void 0 !== yb ? yb : null
    }
    class Vh {
      constructor(yb, bb) {
        this.budgetBytes = yb, this.reads = bb, this.estimate = null, this.shedAt = null
      }
      read(yb) {
        var bb;
        const Wy = this.reads.storedChunks(),
          Uy = this.reads.gpuBytes(),
          hy = Math.max(null !== (bb = this.reads.jsHeapBytes()) && void 0 !== bb ? bb : 0, mf),
          fy = Eh + yb + hy + Uy + Wy * lh;
        this.estimate = {
          wasmBytes: yb,
          jsHeapBytes: hy,
          gpuBytes: Uy,
          storedChunks: Wy,
          totalBytes: fy
        }
      }
      last() {
        return this.estimate
      }
      takeShed() {
        const {
          estimate: yb,
          budgetBytes: bb,
          shedAt: Wy
        } = this;
        return !(null === yb || null === bb || yb.totalBytes < bb || null !== Wy && yb.totalBytes < Wy + Ch) && (this.shedAt = yb.totalBytes, !0)
      }
      describe() {
        const {
          estimate: yb,
          budgetBytes: bb
        } = this;
        return null === yb ? null : `estimate ${(0,Sh.h)(yb.totalBytes)} MiB of budget ${null===bb?"none":(0,Sh.h)(bb)}: wasm ${(0,Sh.h)(yb.wasmBytes)} js ${(0,Sh.h)(yb.jsHeapBytes)} gpu ${(0,Sh.h)(yb.gpuBytes)} chunks ${yb.storedChunks}`
      }
      snapshot() {
        const {
          estimate: yb,
          budgetBytes: bb
        } = this;
        return {
          ...null === yb ? {} : {
            footprintMiB: Number((0, Sh.h)(yb.totalBytes)),
            gpuMiB: Number((0, Sh.h)(yb.gpuBytes)),
            storedChunks: yb.storedChunks
          },
          footprintBudgetMiB: null === bb ? -1 : Number((0, Sh.h)(bb))
        }
      }
    }
    var Jh = Wy(2444),
      gf = Wy(37761),
      Gh = Wy(2559);
    const Oh = new Uint8Array(0);
    class Rh {
      constructor(yb) {
        this.options = yb, this.worker = null, this.watch = null, this.createWorker = null, this.loading = !1, this.kW = [], this.startsWithoutResult = 0, this.lastLoss = "", this.seed = null, this.gone = !1, this.pool = [], null !== yb.module ? yb.write(0, nb.zd.WorldgenStarted, 0, Oh) : this.giveUp()
      }
      take(yb, bb) {
        if (!(this.gone || null === this.worker && null === this.kW))
          if (yb === nb.Ad.WorldgenSeed) {
            const yb = 0 === bb.byteLength ? null : this.options.decodeSettings(bb);
            null === yb || function(yb, bb) {
              if ((null === yb || void 0 === yb ? void 0 : yb.byteLength) !== bb.byteLength) return !1;
              for (let Wy = 0; Wy < yb.byteLength; Wy++)
                if (yb[Wy] !== bb[Wy]) return !1;
              return !0
            }(this.seed, bb) || (this.seed = bb.slice(), this.startsWithoutResult = null === this.worker ? 0 : 1), this.dropHeld(), this.post({
              type: "seed",
              settings: yb
            }, []), null !== yb && this.load()
          } else if (yb === nb.Ad.Generate) {
          var Wy;
          const yb = new DataView(bb.buffer, bb.byteOffset, nb.pd),
            Uy = null !== (Wy = this.pool.pop()) && void 0 !== Wy ? Wy : new ArrayBuffer(8192);
          this.post({
            type: "generate",
            ticket: yb.getUint32(0, !0),
            x: yb.getInt32(4, !0),
            y: yb.getInt32(8, !0),
            z: yb.getInt32(12, !0),
            bytes: Uy
          }, [Uy])
        }
      }
      stop() {
        var yb;
        this.gone = !0, this.dropHeld(), this.endWatch(), null === (yb = this.worker) || void 0 === yb || yb.terminate(), this.worker = null
      }
      post(yb, bb) {
        var Wy;
        null !== this.kW ? this.kW.push({
          message: yb,
          transfer: bb
        }) : null === (Wy = this.worker) || void 0 === Wy || Wy.postMessage(yb, bb)
      }
      load() {
        this.loading || (this.loading = !0, this.options.loadWorker().then((yb => {
          this.createWorker = yb, this.start()
        }), (yb => {
          this.gone || (this.giveUp(), this.options.onLoadFailed(yb))
        })))
      }
      start() {
        const {
          module: yb
        } = this.options, bb = this.createWorker;
        if (this.gone || null === yb || null === bb) return;
        if (this.startsWithoutResult >= 3) return this.giveUp(), void this.options.onGaveUp(this.lastLoss);
        let Wy;
        this.startsWithoutResult++;
        try {
          Wy = bb()
        } catch (hy) {
          return console.warn("[bloxd-wasm-client] the world-gen worker did not start", hy), this.lastLoss = `it did not start (${String(hy)})`, void this.start()
        }
        this.worker = Wy, Wy.onmessage = yb => {
          let {
            data: bb
          } = yb;
          this.worker === Wy && this.onReply(Wy, bb)
        }, Wy.onerror = yb => {
          yb.preventDefault(), this.worker === Wy && this.lose(yb.message || "its script failed")
        };
        try {
          Wy.postMessage({
            type: "start",
            module: yb,
            DU: Uy.c.DU
          })
        } catch (hy) {
          return console.warn("[bloxd-wasm-client] the world-gen worker could not be sent the module", hy), this.lastLoss = `it could not be sent the module (${String(hy)})`, Wy.terminate(), this.worker = null, void this.start()
        }
        this.watch = new ih.h(ih.e, (yb => {
          this.lose((0, ih.j)(yb), (() => {
            this.options.onStartTimeout(yb)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(yb, bb) {
        switch (bb.type) {
          case "started": {
            this.endWatch();
            const bb = this.kW;
            if (null === bb) {
              this.options.write(0, nb.zd.WorldgenStarted, 0, Oh);
              break
            }
            this.kW = null;
            for (const {
                message: Wy,
                transfer: Uy
              }
              of bb) yb.postMessage(Wy, Uy);
            break
          }
          case "lost":
            this.lose(bb.reason);
            break;
          case "memory":
            var Wy, Uy;
            null === (Wy = (Uy = this.options).onMemoryStats) || void 0 === Wy || Wy.call(Uy, bb.stats);
            break;
          case "result":
            bb.status !== nb.jb.Trapped && (this.startsWithoutResult = 0), this.options.write(bb.ticket, nb.zd.WorldgenResult, bb.status, new Uint8Array(bb.bytes, 0, bb.len)), this.recycle(bb.bytes), bb.spare && this.recycle(bb.spare)
        }
      }
      lose(yb, bb) {
        var Wy, Uy, hy;
        console.warn(`[bloxd-wasm-client] the world-gen worker was lost: ${yb}`), this.lastLoss = yb, this.endWatch(), null === (Wy = this.worker) || void 0 === Wy || Wy.terminate(), this.worker = null, null === (Uy = (hy = this.options).onMemoryGone) || void 0 === Uy || Uy.call(hy), this.gone || (bb ? bb() : this.options.onWorkerLost(yb), this.dropHeld(), this.kW = null, this.options.write(0, nb.zd.WorldgenLost, nb.Dd.Lost, Oh), this.start())
      }
      giveUp() {
        this.gone = !0, this.dropHeld(), this.options.write(0, nb.zd.WorldgenLost, nb.Dd.Gone, Oh)
      }
      endWatch() {
        var yb;
        null === (yb = this.watch) || void 0 === yb || yb.cancel(), this.watch = null
      }
      dropHeld() {
        if (null !== this.kW) {
          for (const {
              message: yb
            }
            of this.kW) "generate" === yb.type && this.recycle(yb.bytes);
          this.kW.length = 0
        }
      }
      recycle(yb) {
        this.pool.length < 16 && yb.byteLength > 0 && yb.byteLength <= 16384 && this.pool.push(yb)
      }
    }
    var vf = Wy(36403),
      Mh = Wy(3018),
      Yh = Wy(39179),
      Xh = Wy(39545),
      nh = Wy(39415);
    const uh = (yb, bb) => yb.includes(bb),
      rf = yb => {
        try {
          return yb()
        } catch {
          return !1
        }
      },
      Hh = -1,
      af = yb => {
        try {
          return yb()
        } catch {
          return Hh
        }
      };

    function Fh(yb, bb) {
      return {
        probe: (Wy, Uy, hy) => {
          try {
            return ((Wy, Uy, hy) => {
              switch (Wy) {
                case nb.Yb.StackCheck:
                  return bb.stackCheck() ? 1 : 0;
                case nb.Yb.ConfirmMesh:
                  return bb.confirmMesh();
                case nb.Yb.IndexPassReplaced:
                  return bb.indexPassReplaced() ? 1 : 0;
                case nb.Yb.ProductSubChanged:
                  return bb.productSubChanged() ? 1 : 0;
                case nb.Yb.RenderStatus:
                  return bb.lU();
                case nb.Yb.Held:
                  return bb.kW();
                case nb.Yb.PlayerKilledSubs:
                  return bb.playerKilledSubs();
                case nb.V: {
                  const Wy = bb.getComplete();
                  return null === Wy ? 0 : (0, mh.q)(mh.B, mh.db, [Wy, new mh.c((0, mh.J)(yb()), Uy, hy)]).written
                }
                default:
                  return 0
              }
            })(Wy, Uy, hy)
          } catch {
            return nb.Tb
          }
        }
      }
    }
    class ph {
      constructor(yb) {
        this.write = yb, this.flagsWritten = 0, this.written = (0, mh.u)(null)
      }
      Zb(yb) {
        let {
          flags: bb,
          values: Wy
        } = yb;
        for (let Uy = 0; Uy < Wy.length; Uy++) this.value(Wy[Uy][0], Wy[Uy][1]);
        this.setFlags(bb | nb.f.Ready)
      }
      value(yb, bb) {
        this.written[yb] !== bb && this.write(yb, bb, 0) && (this.written[yb] = bb)
      }
      setFlags(yb) {
        const bb = yb & ~this.flagsWritten;
        0 !== bb && this.write(nb.g.Flags, bb, bb) && (this.flagsWritten |= bb)
      }
      originStackHit() {
        return this.write(nb.g.Flags, nb.f.OriginStackHit, nb.f.OriginStackHit)
      }
    }
    const Lh = {
        InputListeners: 0,
        InputWriter: 1,
        CoreFrame: 2,
        GlueFrame: 3,
        SocketSend: 4,
        AddEventListener: 5,
        DispatchEvent: 6,
        RequestAnimationFrame: 7,
        PerformanceNow: 8,
        DateNow: 9
      },
      Qh = 1e3;

    function jf(yb, bb) {
      const Wy = new ph(bb);
      let Uy = !1;
      Wy.Zb(yb.Zb());
      const hy = (0, mh.V)((() => {
          Wy.Zb(yb.Zb())
        }), Qh),
        fy = () => {
          yb.checks.stackCheck() && (Uy = !0)
        };
      (0, Xh.h)(fy);
      const Zy = () => {
        const bb = yb.checkPadCall();
        0 !== bb && Wy.setFlags(bb)
      };
      return (0, Yh.i)(Zy), {
        onInput: bb => {
          (function(yb) {
            switch (yb) {
              case nb.hb.KeyDown:
              case nb.hb.KeyUp:
              case nb.hb.MouseDown:
              case nb.hb.MouseUp:
              case nb.hb.Wheel:
              case nb.hb.TouchStart:
              case nb.hb.TouchEnd:
              case nb.hb.TouchButton:
              case nb.hb.PadAction:
                return !0;
              default:
                return !1
            }
          })(bb) && yb.checks.stackCheck() && (Uy = !0)
        },
        onSend: fy,
        beforeFrame: () => {
          Uy && Wy.originStackHit() && (Uy = !1)
        },
        onEvent: bb => {
          const Uy = yb.checkEvent(bb);
          Wy.value(nb.g.ProbeUsedProp, yb.usedProp()), 0 !== Uy && Wy.setFlags(Uy)
        },
        stop: () => {
          (0, mh.Z)(hy), (0, Xh.f)(fy), (0, Yh.f)(Zy)
        }
      }
    }
    let Dh;
    const tf = [1, "length", 2, void 0, null, 3, 0, "w", "c3RhY2", "cw==", 33554432, 67108864, 100, 202, 4, 51, "f", "a", "b", "d", 93, 195, 1e5, !1, 123, 5, "c", 39, !0, 16, 71, 238, 147, 200, 6, 138, 9, 111, 27, "__GLOB", "AL__HE", "LPERS_", "_", 233, 176, 31, 46, 207, 243, 159, 7, 28, 8, 234, 20, 241, 32, 182, 75, 151, 86, 248, 1023, 65536, 229, 10, 55296, 56320, 19, 12, 63, 128, 50, 192, 224, "Invalid byte index", 255, 30, "Invalid continuation byte", 240, 15, 18, 37, "e", 177, 197, "u", 164, "string", "j", "functi", "on", "q", "N", "protot", "ype", "decode", "2", "I=", "eTR5bm", "t", "r", "O", "H", "fd", "s", "chEven", "dispat", "now", 158, "confir", "mMesh", "produc", "player", "Killed", "number", 65535, "toString", "g", "get", "v", "o", 106, 186, "None", 11, "En", "tOverw", "ritten", "plete", "p"];

    function wh() {}

    function kf() {
      kf = function() {}
    }
    Dh = function(yb) {
      let bb = arguments[tf[1]] > tf[0] && arguments[tf[0]] !== tf[3] ? arguments[tf[0]] : () => tf[4],
        Wy = arguments[tf[1]] > tf[2] && arguments[tf[2]] !== tf[3] ? arguments[tf[2]] : tf[4],
        Uy = arguments[tf[1]] > tf[5] && arguments[tf[5]] !== tf[3] ? arguments[tf[5]] : "";
      const hy = window,
        fy = (tf[6], mh[tf[7]])("RXJyb3" + tf[98]),
        Zy = (tf[6], mh[tf[7]])(tf[8] + "s="),
        cb = (tf[6], mh[tf[7]])("Y2FwdHVyZVN0YWNrVHJhY2U="),
        oy = (tf[6], mh[tf[7]])(tf[8] + "tUcmFjZUxpbWl0"),
        By = (tf[6], mh[tf[7]])("bmF0aXZl"),
        Ky = [(tf[6], mh[tf[7]])("bWFpbi5qcw=="), (tf[6], mh[tf[7]])("aW5kZXguanM="), (tf[6], mh[tf[7]])("dXNlcnNjcmlwdA=="), (tf[6], mh[tf[7]])("Y29udGVudC5q" + tf[9]), (tf[6], mh[tf[7]])("b3B0aW9ucy5q" + tf[9]), (tf[6], mh[tf[7]])("cG9wdXAuanM="), (tf[6], mh[tf[7]])("LnVzZXIuanM="), (tf[6], mh[tf[7]])("Y2hyb21lLWV4dGVuc2lvbg==")],
        ey = (...yb) => {
          yb[tf[1]] = tf[0], "szP7MB" in wh && function(...yb) {
            function bb(...yb) {
              return yb[tf[1]] = tf[0], yb[tf[6]][tf[0]] * tf[11] + (yb[tf[6]][tf[6]] < tf[6] ? tf[10] | yb[tf[6]][tf[6]] : yb[tf[6]][tf[6]])
            }

            function Wy(...yb) {
              switch (yb[tf[1]] = tf[0], ((yb[tf[6]] & tf[10]) !== tf[6]) * tf[0] + (yb[tf[6]] < tf[6]) * tf[2]) {
                case tf[6]:
                  return [yb[tf[6]] % tf[10], Math.trunc(yb[tf[6]] / tf[11])];
                case tf[0]:
                  return [yb[tf[6]] % tf[10] - tf[10], Math.trunc(yb[tf[6]] / tf[11]) + tf[0]];
                case tf[2]:
                  return [((yb[tf[6]] + tf[10]) % tf[10] + tf[10]) % tf[10], Math.round(yb[tf[6]] / tf[11])];
                case tf[5]:
                  return [yb[tf[6]] % tf[10], Math.trunc(yb[tf[6]] / tf[11])]
              }
            }
            yb[tf[1]] = tf[6], kf(yb[tf[12]] = bb([tf[2], tf[14]]), yb[tf[13]] = bb([tf[0], tf[2]]), yb[tf[2]] = yb[tf[12]] + yb[tf[13]], yb[tf[15]] = yb[tf[2]] - yb[tf[13]], yb[tf[14]] = yb[tf[15]] * tf[2], yb[tf[16]] = yb[tf[14]] / tf[2], console.log(Wy(yb[tf[2]])), console.log(Wy(yb[tf[15]])), console.log(Wy(yb[tf[14]])), console.log(Wy(yb[tf[16]])))
          }();
          const bb = hy[fy],
            Wy = bb;
          if (Wy[oy] < tf[22]) {
            function Sy(...yb) {
              function bb(...yb) {
                return yb[tf[1]] = tf[0], yb[tf[6]][tf[0]] * tf[11] + (yb[tf[6]][tf[6]] < tf[6] ? tf[10] | yb[tf[6]][tf[6]] : yb[tf[6]][tf[6]])
              }

              function Wy(...yb) {
                switch (yb[tf[1]] = tf[0], ((yb[tf[6]] & tf[10]) !== tf[6]) * tf[0] + (yb[tf[6]] < tf[6]) * tf[2]) {
                  case tf[6]:
                    return [yb[tf[6]] % tf[10], Math.trunc(yb[tf[6]] / tf[11])];
                  case tf[0]:
                    return [yb[tf[6]] % tf[10] - tf[10], Math.trunc(yb[tf[6]] / tf[11]) + tf[0]];
                  case tf[2]:
                    return [((yb[tf[6]] + tf[10]) % tf[10] + tf[10]) % tf[10], Math.round(yb[tf[6]] / tf[11])];
                  case tf[5]:
                    return [yb[tf[6]] % tf[10], Math.trunc(yb[tf[6]] / tf[11])]
                }
              }
              yb[tf[1]] = tf[6], kf(yb[tf[17]] = bb([tf[2], tf[14]]), yb[tf[18]] = bb([tf[0], tf[2]]), yb[tf[2]] = yb[tf[17]] + yb[tf[18]], yb[tf[19]] = yb[tf[2]] - yb[tf[18]], yb[-tf[20]] = yb[tf[19]] * tf[2], yb[-tf[21]] = yb[-tf[20]] / tf[2], console.log(Wy(yb[tf[2]])), console.log(Wy(yb[tf[19]])), console.log(Wy(yb[-tf[20]])), console.log(Wy(yb[-tf[21]])))
            }
            "NRPiUZ" in wh && Sy(), Wy[oy] = tf[22]
          }
          const Uy = "string" === typeof(ey = (new bb)[Zy]) ? ey : `${ey}`,
            Py = {},
            By = Wy[cb];
          var ey;
          if (typeof By === tf[90] + tf[91]) {
            function Ey() {
              function yb(...bb) {
                if (bb[tf[1]] = tf[0], !bb[tf[6]]) return -tf[0];
                const Wy = yb(bb[tf[6]].left),
                  Uy = yb(bb[tf[6]].right),
                  hy = Math.abs(Wy - Uy);
                if (Wy === 1 / 0 || Uy === 1 / 0 || hy > tf[0]) return 1 / 0;
                return Math.max(Wy, Uy) + tf[0]
              }
              window[tf[39] + tf[40] + tf[41] + tf[42]] = {
                buildCharacterMap: function(...yb) {
                  yb[tf[1]] = tf[0];
                  const bb = {};
                  for (let Wy of yb[tf[6]].replace(/[^w]/g, "").toLowerCase()) bb[Wy] = bb[Wy] + tf[0] || tf[0];
                  return bb
                },
                isAnagrams: function(...yb) {
                  yb[tf[1]] = tf[2];
                  const bb = buildCharMap(yb[tf[6]]),
                    Wy = buildCharMap(yb[tf[0]]);
                  for (let Uy in bb)
                    if (bb[Uy] !== Wy[Uy]) return tf[23];
                  return Object.keys(bb).length !== Object.keys(Wy).length ? tf[23] : tf[28]
                },
                isBalanced: function(...bb) {
                  return bb[tf[1]] = tf[0], yb(bb[tf[6]]) !== 1 / 0
                },
                getHeightBalanced: yb
              }
            }
            "cGaMgu" + tf[93] in wh && Ey(), (tf[6], mh[tf[92]])(By, bb, [Py])
          }
          const qb = Py[Zy],
            sy = yb[tf[6]] ? Ky[tf[1]] : Ky[tf[1]] - tf[0];
          for (let ly = tf[6]; ly < sy; ly++) {
            function mb(...yb) {
              kf(yb[tf[1]] = tf[6], yb[tf[17]] = function(...yb) {
                for (kf(yb[tf[1]] = tf[0], yb[tf[0]] = yb[tf[6]].length, yb[tf[2]] = [], yb[tf[26]] = tf[6]), yb[-tf[24]] = tf[6]; yb[-tf[24]] < yb[tf[0]]; yb[-tf[24]]++) yb[tf[2]].push(yb[-tf[24]] !== tf[6] && yb[tf[6]][yb[-tf[24]]] > yb[tf[6]][yb[-tf[24]] - tf[0]] ? yb[tf[2]][yb[-tf[24]] - tf[0]] + tf[0] : tf[0]);
                for (yb[tf[25]] = yb[tf[0]] - tf[0]; yb[tf[25]] >= tf[6]; yb[tf[25]]--) yb[tf[25]] !== yb[tf[0]] - tf[0] && yb[tf[6]][yb[tf[25]]] > yb[tf[6]][yb[tf[25]] + tf[0]] && (yb[tf[2]][yb[tf[25]]] = Math.max(yb[tf[2]][yb[tf[25]]], yb[tf[2]][yb[tf[25]] + tf[0]] + tf[0])), yb[tf[26]] += yb[tf[2]][yb[tf[25]]];
                return yb[tf[26]]
              }, console.log(yb[tf[17]]))
            }
            if ("xi9q5Rk" in wh && mb(), uh(Uy, Ky[ly]) || typeof qb === tf[88] && uh(qb, Ky[ly])) {
              function Cy(...yb) {
                kf(yb[tf[1]] = tf[6], yb[-tf[29]] = function(...bb) {
                  return kf(bb[tf[1]] = tf[0], bb[tf[17]] = []), (bb[tf[6]] === tf[0] || bb[tf[6]] >= tf[14]) && yb[tf[0]](bb[tf[17]], [], bb[tf[6]], tf[6]), bb[tf[17]]
                }, yb[tf[0]] = function(...bb) {
                  for (bb[tf[1]] = tf[14], bb[tf[14]] = bb[tf[5]]; bb[tf[14]] < bb[tf[2]]; bb[tf[14]]++) {
                    if (bb[tf[0]].length !== bb[tf[14]]) return;
                    for (bb[tf[25]] = tf[6]; bb[tf[25]] < bb[tf[2]]; bb[tf[25]]++) yb[tf[26]](bb[tf[0]], [bb[tf[14]], bb[tf[25]]]) && (kf(bb[tf[0]].push([bb[tf[14]], bb[tf[25]]]), yb[tf[0]](bb[tf[6]], bb[tf[0]], bb[tf[2]], bb[tf[14]] + tf[0])), bb[tf[0]].length === bb[tf[2]] && bb[tf[6]].push(yb[tf[5]](bb[tf[0]])), bb[tf[0]].pop())
                  }
                }, yb[tf[5]] = function(...yb) {
                  for (kf(yb[tf[1]] = tf[0], yb[tf[17]] = [], yb[tf[27]] = yb[tf[6]].length), yb[tf[5]] = tf[6]; yb[tf[5]] < yb[tf[27]]; yb[tf[5]]++)
                    for (yb[tf[17]][yb[tf[5]]] = "", yb[tf[19]] = tf[6]; yb[tf[19]] < yb[tf[27]]; yb[tf[19]]++) yb[tf[17]][yb[tf[5]]] += yb[tf[6]][yb[tf[5]]][tf[0]] === yb[tf[19]] ? "Q" : ".";
                  return yb[tf[17]]
                }, yb[tf[26]] = function(...yb) {
                  for (kf(yb[tf[1]] = tf[2], yb[tf[17]] = yb[tf[6]].length), yb[tf[5]] = tf[6]; yb[tf[5]] < yb[tf[17]]; yb[tf[5]]++) {
                    if (yb[tf[6]][yb[tf[5]]][tf[6]] === yb[tf[0]][tf[6]] || yb[tf[6]][yb[tf[5]]][tf[0]] === yb[tf[0]][tf[0]]) return tf[23];
                    if (Math.abs((yb[tf[6]][yb[tf[5]]][tf[6]] - yb[tf[0]][tf[6]]) / (yb[tf[6]][yb[tf[5]]][tf[0]] - yb[tf[0]][tf[0]])) === tf[0]) return tf[23]
                  }
                  return tf[28]
                }, console.log(yb[-tf[29]]))
              }
              return "EMGgZH" in wh && Cy(), tf[28]
            }
          }
          return tf[23]
        },
        qb = (...yb) => {
          yb[tf[1]] = tf[0], "ne_hma" + tf[19] in wh && function(...yb) {
            kf(yb[tf[1]] = tf[6], yb[-tf[38]] = function(...yb) {
              if (kf(yb[tf[1]] = tf[0], yb[tf[30]] = yb[tf[6]].length), yb[tf[30]] < tf[2]) return tf[6];
              if (kf(yb[-tf[31]] = Math.max(...yb[tf[6]]), yb[tf[26]] = Math.min(...yb[tf[6]])), yb[-tf[31]] === yb[tf[26]]) return tf[6];
              for (kf(yb[tf[19]] = Array(yb[tf[30]] - tf[0]).fill(Number.MAX_SAFE_INTEGER), yb[tf[25]] = Array(yb[tf[30]] - tf[0]).fill(Number.MIN_SAFE_INTEGER), yb[tf[34]] = Math.ceil((yb[-tf[31]] - yb[tf[26]]) / (yb[tf[30]] - tf[0])), yb[tf[33]] = tf[6]), yb[tf[32]] = tf[6]; yb[tf[32]] < yb[tf[30]]; yb[tf[32]]++) yb[tf[6]][yb[tf[32]]] !== yb[tf[26]] && yb[tf[6]][yb[tf[32]]] !== yb[-tf[31]] && kf(yb[tf[33]] = Math.floor((yb[tf[6]][yb[tf[32]]] - yb[tf[26]]) / yb[tf[34]]), yb[tf[19]][yb[tf[33]]] = Math.min(yb[tf[19]][yb[tf[33]]], yb[tf[6]][yb[tf[32]]]), yb[tf[25]][yb[tf[33]]] = Math.max(yb[tf[25]][yb[tf[33]]], yb[tf[6]][yb[tf[32]]]));
              for (kf(yb[tf[36]] = Number.MIN_SAFE_INTEGER, yb[tf[37]] = yb[tf[26]]), yb[-tf[35]] = tf[6]; yb[-tf[35]] < yb[tf[30]] - tf[0]; yb[-tf[35]]++) yb[tf[19]][yb[-tf[35]]] === Number.MAX_SAFE_INTEGER && yb[tf[25]][yb[-tf[35]]] === Number.MIN_SAFE_INTEGER || kf(yb[tf[36]] = Math.max(yb[tf[36]], yb[tf[19]][yb[-tf[35]]] - yb[tf[37]]), yb[tf[37]] = yb[tf[25]][yb[-tf[35]]]);
              return yb[tf[36]] = Math.max(yb[tf[36]], yb[-tf[31]] - yb[tf[37]]), yb[tf[36]]
            }, console.log(yb[-tf[38]]))
          }();
          try {
            function bb() {
              function yb(...bb) {
                if (bb[tf[1]] = tf[0], !bb[tf[6]]) return -tf[0];
                const Wy = yb(bb[tf[6]].left),
                  Uy = yb(bb[tf[6]].right),
                  hy = Math.abs(Wy - Uy);
                if (Wy === 1 / 0 || Uy === 1 / 0 || hy > tf[0]) return 1 / 0;
                return Math.max(Wy, Uy) + tf[0]
              }
              window[tf[39] + tf[40] + tf[41] + tf[42]] = {
                buildCharacterMap: function(...yb) {
                  yb[tf[1]] = tf[0];
                  const bb = {};
                  for (let Wy of yb[tf[6]].replace(/[^w]/g, "").toLowerCase()) bb[Wy] = bb[Wy] + tf[0] || tf[0];
                  return bb
                },
                isAnagrams: function(...yb) {
                  yb[tf[1]] = tf[2];
                  const bb = buildCharMap(yb[tf[6]]),
                    Wy = buildCharMap(yb[tf[0]]);
                  for (let Uy in bb)
                    if (bb[Uy] !== Wy[Uy]) return tf[23];
                  return Object.keys(bb).length !== Object.keys(Wy).length ? tf[23] : tf[28]
                },
                isBalanced: function(...bb) {
                  return bb[tf[1]] = tf[0], yb(bb[tf[6]]) !== 1 / 0
                },
                getHeightBalanced: yb
              }
            }
            return "eVfmma" in wh && bb(), yb[tf[6]]()
          } catch {
            function Wy(...yb) {
              kf(yb[tf[1]] = tf[6], yb[tf[49]] = function(...yb) {
                for (kf(yb[tf[1]] = tf[0], yb[tf[0]] = tf[6], yb[-tf[45]] = {}, yb[-tf[46]] = tf[6], yb[tf[14]] = tf[6], yb[-tf[48]] = tf[6], yb[tf[44]] = yb[tf[6]].length), yb[-tf[43]] = tf[6]; yb[-tf[43]] < yb[tf[44]]; yb[-tf[43]]++) {
                  for (kf(yb[-tf[45]] = {}, yb[-tf[46]] = tf[6], yb[tf[14]] = tf[0]), yb[tf[47]] = yb[-tf[43]] + tf[0]; yb[tf[47]] < yb[tf[44]]; yb[tf[47]]++) yb[tf[6]][yb[-tf[43]]].x !== yb[tf[6]][yb[tf[47]]].x || yb[tf[6]][yb[-tf[43]]].y !== yb[tf[6]][yb[tf[47]]].y ? (yb[tf[6]][yb[-tf[43]]].y === yb[tf[6]][yb[tf[47]]].y ? yb[-tf[48]] = Number.MAX_SAFE_INTEGER : yb[-tf[48]] = (yb[tf[6]][yb[-tf[43]]].x - yb[tf[6]][yb[tf[47]]].x) / (yb[tf[6]][yb[-tf[43]]].y - yb[tf[6]][yb[tf[47]]].y), yb[-tf[45]][yb[-tf[48]]] || (yb[-tf[45]][yb[-tf[48]]] = tf[6]), kf(yb[-tf[45]][yb[-tf[48]]]++, yb[-tf[46]] = Math.max(yb[-tf[46]], yb[-tf[45]][yb[-tf[48]]]))) : yb[tf[14]]++;
                  kf(yb[-tf[46]] += yb[tf[14]], yb[tf[0]] = Math.max(yb[tf[0]], yb[-tf[46]]))
                }
                return yb[tf[0]]
              }, console.log(yb[tf[49]]))
            }
            return "t0vH139" in wh && Wy(), tf[28]
          }
        };
      let sy = tf[23];
      const Sy = (...yb) => {
          if (yb[tf[1]] = tf[6], "gZ0g1EW" in wh && function(...yb) {
              kf(yb[tf[1]] = tf[6], yb[tf[17]] = function(...yb) {
                for (kf(yb[tf[1]] = tf[0], yb[-tf[53]] = tf[6], yb[-tf[51]] = {}, yb[-tf[45]] = tf[6], yb[tf[19]] = tf[6], yb[tf[25]] = tf[6], yb[tf[34]] = yb[tf[6]].length), yb[tf[50]] = tf[6]; yb[tf[50]] < yb[tf[34]]; yb[tf[50]]++) {
                  for (kf(yb[-tf[51]] = {}, yb[-tf[45]] = tf[6], yb[tf[19]] = tf[0]), yb[tf[52]] = yb[tf[50]] + tf[0]; yb[tf[52]] < yb[tf[34]]; yb[tf[52]]++) yb[tf[6]][yb[tf[50]]].x !== yb[tf[6]][yb[tf[52]]].x || yb[tf[6]][yb[tf[50]]].y !== yb[tf[6]][yb[tf[52]]].y ? (yb[tf[6]][yb[tf[50]]].y === yb[tf[6]][yb[tf[52]]].y ? yb[tf[25]] = Number.MAX_SAFE_INTEGER : yb[tf[25]] = (yb[tf[6]][yb[tf[50]]].x - yb[tf[6]][yb[tf[52]]].x) / (yb[tf[6]][yb[tf[50]]].y - yb[tf[6]][yb[tf[52]]].y), yb[-tf[51]][yb[tf[25]]] || (yb[-tf[51]][yb[tf[25]]] = tf[6]), kf(yb[-tf[51]][yb[tf[25]]]++, yb[-tf[45]] = Math.max(yb[-tf[45]], yb[-tf[51]][yb[tf[25]]]))) : yb[tf[19]]++;
                  kf(yb[-tf[45]] += yb[tf[19]], yb[-tf[53]] = Math.max(yb[-tf[53]], yb[-tf[45]]))
                }
                return yb[-tf[53]]
              }, console.log(yb[tf[17]]))
            }(), !sy && (tf[6], mh.y)()) {
            function bb(...yb) {
              kf(yb[tf[1]] = tf[6], yb[tf[52]] = function(yb) {
                var bb, Wy, Uy, hy, fy, Zy, cb = tf[6];
                for (kf(bb = {}, Wy = tf[6], Uy = tf[6], hy = tf[6], fy = yb.length), Zy = tf[6]; Zy < fy; Zy++) {
                  var Py;
                  for (kf(bb = {}, Wy = tf[6], Uy = tf[0]), Py = Zy + tf[0]; Py < fy; Py++) yb[Zy].x !== yb[Py].x || yb[Zy].y !== yb[Py].y ? (bb[hy = yb[Zy].y === yb[Py].y ? Number.MAX_SAFE_INTEGER : (yb[Zy].x - yb[Py].x) / (yb[Zy].y - yb[Py].y)] || (bb[hy] = tf[6]), kf(bb[hy]++, Wy = Math.max(Wy, bb[hy]))) : Uy++;
                  kf(Wy += Uy, cb = Math.max(cb, Wy))
                }
                return cb
              }, console.log(yb[tf[52]]))
            }
            "zfYh7Z" + tf[97] in wh && bb(), sy = tf[28]
          }
        },
        Ey = (...yb) => {
          yb[tf[1]] = tf[0], "CMSCWQ" in wh && function(...yb) {
            kf(yb[tf[1]] = tf[6], yb[-tf[27]] = function(...yb) {
              for (kf(yb[tf[1]] = tf[0], yb[-tf[55]] = yb[tf[6]].length, yb[tf[18]] = [], yb[tf[5]] = tf[6], yb[tf[19]] = tf[6], yb[tf[6]].sort(((yb, bb) => yb - bb))), yb[-tf[54]] = tf[6]; yb[-tf[54]] < yb[-tf[55]]; yb[-tf[54]]++)
                if (!(yb[-tf[54]] > tf[6] && yb[tf[6]][yb[-tf[54]]] === yb[tf[6]][yb[-tf[54]] - tf[0]]))
                  for (kf(yb[tf[5]] = yb[-tf[54]] + tf[0], yb[tf[19]] = yb[-tf[55]] - tf[0]); yb[tf[5]] < yb[tf[19]];)
                    if (yb[tf[6]][yb[-tf[54]]] + yb[tf[6]][yb[tf[5]]] + yb[tf[6]][yb[tf[19]]] < tf[6]) yb[tf[5]]++;
                    else if (yb[tf[6]][yb[-tf[54]]] + yb[tf[6]][yb[tf[5]]] + yb[tf[6]][yb[tf[19]]] > tf[6]) yb[tf[19]]--;
              else {
                for (yb[tf[18]].push([yb[tf[6]][yb[-tf[54]]], yb[tf[6]][yb[tf[5]]], yb[tf[6]][yb[tf[19]]]]); yb[tf[5]] < yb[tf[19]] && yb[tf[6]][yb[tf[5]]] === yb[tf[6]][yb[tf[5]] + tf[0]];) yb[tf[5]]++;
                for (; yb[tf[5]] < yb[tf[19]] && yb[tf[6]][yb[tf[19]]] === yb[tf[6]][yb[tf[19]] - tf[0]];) yb[tf[19]]--;
                kf(yb[tf[5]]++, yb[tf[19]]--)
              }
              return yb[tf[18]]
            }, console.log(yb[-tf[27]]))
          }();
          try {
            function bb(...yb) {
              kf(yb[tf[1]] = tf[6], yb[tf[26]] = function(...yb) {
                for (kf(yb[tf[1]] = tf[0], yb[tf[0]] = tf[6], yb[tf[57]] = {}, yb[tf[58]] = tf[6], yb[tf[19]] = tf[6], yb[tf[60]] = tf[6], yb[tf[16]] = yb[tf[6]].length), yb[-tf[56]] = tf[6]; yb[-tf[56]] < yb[tf[16]]; yb[-tf[56]]++) {
                  for (kf(yb[tf[57]] = {}, yb[tf[58]] = tf[6], yb[tf[19]] = tf[0]), yb[-tf[59]] = yb[-tf[56]] + tf[0]; yb[-tf[59]] < yb[tf[16]]; yb[-tf[59]]++) yb[tf[6]][yb[-tf[56]]].x !== yb[tf[6]][yb[-tf[59]]].x || yb[tf[6]][yb[-tf[56]]].y !== yb[tf[6]][yb[-tf[59]]].y ? (yb[tf[6]][yb[-tf[56]]].y === yb[tf[6]][yb[-tf[59]]].y ? yb[tf[60]] = Number.MAX_SAFE_INTEGER : yb[tf[60]] = (yb[tf[6]][yb[-tf[56]]].x - yb[tf[6]][yb[-tf[59]]].x) / (yb[tf[6]][yb[-tf[56]]].y - yb[tf[6]][yb[-tf[59]]].y), yb[tf[57]][yb[tf[60]]] || (yb[tf[57]][yb[tf[60]]] = tf[6]), kf(yb[tf[57]][yb[tf[60]]]++, yb[tf[58]] = Math.max(yb[tf[58]], yb[tf[57]][yb[tf[60]]]))) : yb[tf[19]]++;
                  kf(yb[tf[58]] += yb[tf[19]], yb[tf[0]] = Math.max(yb[tf[0]], yb[tf[58]]))
                }
                return yb[tf[0]]
              }, console.log(yb[tf[26]]))
            }
            return "MNg5qZ" in wh && bb(), yb[tf[6]]()
          } catch {
            function Wy() {
              ! function(...yb) {
                function bb(...yb) {
                  for (kf(yb[tf[1]] = tf[0], yb[tf[0]] = [], yb[tf[2]] = tf[6], yb[tf[5]] = yb[tf[6]].length, yb[tf[61]] = tf[3], yb[tf[25]] = tf[3]); yb[tf[2]] < yb[tf[5]];) kf(yb[tf[61]] = yb[tf[6]].charCodeAt(yb[tf[2]]++), yb[tf[61]] >= tf[66] && yb[tf[61]] <= 56319 && yb[tf[2]] < yb[tf[5]] ? (yb[tf[25]] = yb[tf[6]].charCodeAt(yb[tf[2]]++), (64512 & yb[tf[25]]) == tf[67] ? yb[tf[0]].push(((yb[tf[61]] & tf[62]) << tf[65]) + (yb[tf[25]] & tf[62]) + tf[63]) : (yb[tf[0]].push(yb[tf[61]]), yb[tf[2]]--)) : yb[tf[0]].push(yb[tf[61]]));
                  return yb[tf[0]]
                }

                function Wy(...yb) {
                  if (yb[tf[1]] = tf[0], yb[tf[6]] >= tf[66] && yb[tf[6]] <= 57343) throw Error("Lone surrogate U+" + yb[tf[6]].toString(tf[29]).toUpperCase() + " is not a scalar value")
                }

                function Uy(...bb) {
                  return bb[tf[1]] = tf[2], yb[tf[64]](bb[tf[6]] >> bb[tf[0]] & tf[70] | tf[71])
                }

                function hy(...bb) {
                  return bb[tf[1]] = tf[0], (4294967168 & bb[tf[6]]) == tf[6] ? yb[tf[64]](bb[tf[6]]) : (bb[-tf[68]] = "", (4294965248 & bb[tf[6]]) == tf[6] ? bb[-tf[68]] = yb[tf[64]](bb[tf[6]] >> tf[34] & tf[45] | tf[73]) : (4294901760 & bb[tf[6]]) == tf[6] ? kf(Wy(bb[tf[6]]), bb[-tf[68]] = yb[tf[64]](bb[tf[6]] >> tf[69] & tf[80] | tf[74]), bb[-tf[68]] += Uy(bb[tf[6]], tf[34])) : (4292870144 & bb[tf[6]]) == tf[6] && kf(bb[-tf[68]] = yb[tf[64]](bb[tf[6]] >> tf[81] & tf[50] | tf[79]), bb[-tf[68]] += Uy(bb[tf[6]], tf[69]), bb[-tf[68]] += Uy(bb[tf[6]], tf[34])), bb[-tf[68]] += yb[tf[64]](bb[tf[6]] & tf[70] | tf[71]), bb[-tf[68]])
                }

                function fy() {
                  var bb;
                  if (yb[tf[2]] >= yb[tf[26]]) throw Error(tf[75]);
                  if (kf(bb = yb[tf[14]][yb[tf[2]]] & tf[76], yb[tf[2]]++), (bb & tf[73]) == tf[71]) return bb & tf[70];
                  throw Error(tf[78])
                }

                function Zy(...bb) {
                  if (kf(bb[tf[1]] = tf[6], bb[-tf[74]] = tf[3], bb[tf[0]] = tf[3], bb[tf[19]] = tf[3], bb[tf[5]] = tf[3], bb[-tf[77]] = tf[3]), yb[tf[2]] > yb[tf[26]]) throw Error(tf[75]);
                  if (yb[tf[2]] == yb[tf[26]]) return tf[23];
                  if (kf(bb[-tf[74]] = yb[tf[14]][yb[tf[2]]] & tf[76], yb[tf[2]]++), (bb[-tf[74]] & tf[71]) == tf[6]) return bb[-tf[74]];
                  if ((bb[-tf[74]] & tf[74]) == tf[73]) {
                    if (kf(bb[tf[0]] = fy(), bb[-tf[77]] = (bb[-tf[74]] & tf[45]) << tf[34] | bb[tf[0]]), bb[-tf[77]] >= tf[71]) return bb[-tf[77]];
                    throw Error(tf[78])
                  }
                  if ((bb[-tf[74]] & tf[79]) == tf[74]) {
                    if (kf(bb[tf[0]] = fy(), bb[tf[19]] = fy(), bb[-tf[77]] = (bb[-tf[74]] & tf[80]) << tf[69] | bb[tf[0]] << tf[34] | bb[tf[19]]), bb[-tf[77]] >= 2048) return Wy(bb[-tf[77]]), bb[-tf[77]];
                    throw Error(tf[78])
                  }
                  if ((bb[-tf[74]] & tf[61]) == tf[79] && (kf(bb[tf[0]] = fy(), bb[tf[19]] = fy(), bb[tf[5]] = fy(), bb[-tf[77]] = (bb[-tf[74]] & tf[50]) << tf[81] | bb[tf[0]] << tf[69] | bb[tf[19]] << tf[34] | bb[tf[5]]), bb[-tf[77]] >= tf[63] && bb[-tf[77]] <= 1114111)) return bb[-tf[77]];
                  throw Error("Invalid UTF-8 detected")
                }
                kf(yb[tf[1]] = tf[0], yb[tf[64]] = String.fromCharCode), kf(yb[tf[14]] = tf[3], yb[tf[26]] = tf[3], yb[tf[2]] = tf[3]), kf(yb[tf[6]].version = "3.0.0", yb[tf[6]].encode = function(...yb) {
                  for (kf(yb[tf[1]] = tf[0], yb[tf[0]] = bb(yb[tf[6]]), yb[tf[2]] = yb[tf[0]].length, yb[tf[26]] = -tf[0], yb[tf[14]] = tf[3], yb[-tf[72]] = ""); ++yb[tf[26]] < yb[tf[2]];) kf(yb[tf[14]] = yb[tf[0]][yb[tf[26]]], yb[-tf[72]] += hy(yb[tf[14]]));
                  return yb[-tf[72]]
                }, yb[tf[6]].decode = function(Wy) {
                  var Uy, hy;
                  for (kf(yb[tf[14]] = bb(Wy), yb[tf[26]] = yb[tf[14]].length, yb[tf[2]] = tf[6], Uy = [], hy = void 0);
                    (hy = Zy()) !== tf[23];) Uy.push(hy);
                  return function(...bb) {
                    for (kf(bb[tf[1]] = tf[0], bb[-tf[5]] = bb[tf[6]].length, bb[tf[2]] = -tf[0], bb[tf[26]] = tf[3], bb[tf[19]] = ""); ++bb[tf[2]] < bb[-tf[5]];) bb[tf[26]] = bb[tf[6]][bb[tf[2]]], bb[tf[26]] > tf[116] && kf(bb[tf[26]] -= tf[63], bb[tf[19]] += yb[tf[64]](bb[tf[26]] >>> tf[65] & tf[62] | tf[66]), bb[tf[26]] = tf[67] | bb[tf[26]] & tf[62]), bb[tf[19]] += yb[tf[64]](bb[tf[26]]);
                    return bb[tf[19]]
                  }(Uy)
                })
              }("undefined" === typeof exports ? this.utf8 = {} : exports)
            }
            return "USn6h4" in wh && Wy(), tf[3]
          }
        },
        ly = yb => {
          try {
            function bb(...yb) {
              yb[tf[1]] = tf[6];
              const bb = require("path"),
                {
                  version: Wy
                } = require("../../package"),
                {
                  version: Uy
                } = require("@redacted/enterprise-plugin/package"),
                {
                  version: hy
                } = require("@redacted/components/package"),
                {
                  sdkVersion: fy
                } = require("@redacted/enterprise-plugin");
              require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), bb.resolve(__dirname, "../redacted.js")
            }
            return "RStDGGR" in wh && bb(), yb(), tf[28]
          } catch {
            function Wy(...yb) {
              kf(yb[tf[1]] = tf[6], yb[tf[85]] = function(...yb) {
                for (kf(yb[tf[1]] = tf[0], yb[tf[84]] = tf[6], yb[tf[82]] = {}, yb[tf[5]] = tf[6], yb[tf[19]] = tf[6], yb[tf[83]] = tf[6], yb[tf[16]] = yb[tf[6]].length), yb[tf[50]] = tf[6]; yb[tf[50]] < yb[tf[16]]; yb[tf[50]]++) {
                  for (kf(yb[tf[82]] = {}, yb[tf[5]] = tf[6], yb[tf[19]] = tf[0]), yb[tf[52]] = yb[tf[50]] + tf[0]; yb[tf[52]] < yb[tf[16]]; yb[tf[52]]++) yb[tf[6]][yb[tf[50]]].x !== yb[tf[6]][yb[tf[52]]].x || yb[tf[6]][yb[tf[50]]].y !== yb[tf[6]][yb[tf[52]]].y ? (yb[tf[6]][yb[tf[50]]].y === yb[tf[6]][yb[tf[52]]].y ? yb[tf[83]] = Number.MAX_SAFE_INTEGER : yb[tf[83]] = (yb[tf[6]][yb[tf[50]]].x - yb[tf[6]][yb[tf[52]]].x) / (yb[tf[6]][yb[tf[50]]].y - yb[tf[6]][yb[tf[52]]].y), yb[tf[82]][yb[tf[83]]] || (yb[tf[82]][yb[tf[83]]] = tf[6]), kf(yb[tf[82]][yb[tf[83]]]++, yb[tf[5]] = Math.max(yb[tf[5]], yb[tf[82]][yb[tf[83]]]))) : yb[tf[19]]++;
                  kf(yb[tf[5]] += yb[tf[19]], yb[tf[84]] = Math.max(yb[tf[84]], yb[tf[5]]))
                }
                return yb[tf[84]]
              }, console.log(yb[tf[85]]))
            }
            return "sZbuCU" + tf[102] in wh && Wy(), tf[23]
          }
        },
        mb = (tf[6], mh[tf[7]])("a29qbzYzb25i"),
        Cy = (tf[6], mh[tf[86]])(tf[4]);
      let Ty = tf[4],
        Vy = tf[23],
        Jy = tf[23];
      const gb = (tf[6], mh[tf[86]])(tf[4]);
      let Gy = tf[6];
      const Oy = (tf[6], mh[tf[86]])(tf[4]);
      let Ry = tf[6];
      const vb = (tf[6], mh[tf[86]])(tf[4]);
      let ib = tf[23],
        My = tf[23];
      const Yy = (...bb) => {
          if (bb[tf[1]] = tf[2], bb[tf[6]] === yb) {
            function hy(...yb) {
              function bb(yb) {
                if (!yb) return -tf[0];
                const Wy = bb(yb.left),
                  Uy = bb(yb.right),
                  hy = Math.abs(Wy - Uy);
                if (Wy === 1 / 0 || Uy === 1 / 0 || hy > tf[0]) return 1 / 0;
                return Math.max(Wy, Uy) + tf[0]
              }
              yb[tf[1]] = tf[6], window[tf[39] + tf[40] + tf[41] + tf[42]] = {
                buildCharacterMap: function(...yb) {
                  yb[tf[1]] = tf[0];
                  const bb = {};
                  for (let Wy of yb[tf[6]].replace(/[^w]/g, "").toLowerCase()) bb[Wy] = bb[Wy] + tf[0] || tf[0];
                  return bb
                },
                isAnagrams: function(...yb) {
                  yb[tf[1]] = tf[2];
                  const bb = buildCharMap(yb[tf[6]]),
                    Wy = buildCharMap(yb[tf[0]]);
                  for (let Uy in bb)
                    if (bb[Uy] !== Wy[Uy]) return tf[23];
                  return Object.keys(bb).length !== Object.keys(Wy).length ? tf[23] : tf[28]
                },
                isBalanced: function(...yb) {
                  return yb[tf[1]] = tf[0], bb(yb[tf[6]]) !== 1 / 0
                },
                getHeightBalanced: bb
              }
            }
            if ("uzf5W2G" in wh && hy(), Ty === tf[4]) {
              function fy() {
                var yb;
                kf(yb = function(...bb) {
                  if (kf(bb[tf[1]] = tf[34], bb[tf[34]] = tf[4]), !(bb[tf[25]] < tf[6])) {
                    if (bb[tf[25]] === tf[6]) return bb[tf[6]].push(bb[tf[0]]);
                    for (bb[-tf[87]] = bb[tf[2]]; bb[-tf[87]] < bb[tf[5]] && !(bb[tf[14]][bb[-tf[87]]] > bb[tf[25]]); bb[-tf[87]]++) bb[-tf[87]] > bb[tf[2]] && bb[tf[14]][bb[-tf[87]]] === bb[tf[14]][bb[-tf[87]] - tf[0]] || kf(bb[tf[34]] = Array.from(bb[tf[0]]), bb[tf[34]].push(bb[tf[14]][bb[-tf[87]]]), yb(bb[tf[6]], bb[tf[34]], bb[-tf[87]] + tf[0], bb[tf[5]], bb[tf[14]], bb[tf[25]] - bb[tf[14]][bb[-tf[87]]]))
                  }
                }, console.log((function(...bb) {
                  return kf(bb[tf[1]] = tf[2], bb[tf[2]] = [], bb[-tf[21]] = bb[tf[6]].length, bb[tf[6]].sort(((yb, bb) => yb - bb)), yb(bb[tf[2]], [], tf[6], bb[-tf[21]], bb[tf[6]], bb[tf[0]])), bb[tf[2]]
                })))
              }
              "HeAxFQ" in wh && fy(), Ty = typeof bb[tf[0]] === tf[115] ? bb[tf[0]] : -tf[0]
            } else {
              "nU2IsP8" in wh && (module.exports = async (yb = () => {
                throw new Error("No redacted path provided")
              }) => {
                const bb = new Set(process.argv.slice(tf[2]));
                if (!bb.has("--version")) {
                  if (bb.size !== tf[0]) return tf[23];
                  if (!bb.has("-v")) return tf[23]
                }
                return await (async () => void 0 === await yb() ? " (local)" : "")(), tf[28]
              }), Vy = tf[28]
            }
            return
          }
          const Wy = Cy[bb[tf[6]]];
          if (!bb[tf[0]]) return void(Wy && (Jy = tf[28]));
          if (bb[tf[6]] !== mb) {
            function Zy(...yb) {
              yb[tf[1]] = tf[6]
            }
            return "sSed00" in wh && Zy(), void(Cy[bb[tf[6]]] = bb[tf[0]])
          }
          Cy[bb[tf[6]]] = tf[28];
          const Uy = typeof bb[tf[0]] === tf[88] ? bb[tf[0]] : "" + bb[tf[0]];
          if (vb[Uy]) {
            function cb() {
              var yb;
              kf(yb = function(...bb) {
                if (kf(bb[tf[1]] = tf[5], bb[tf[5]] = {}), bb[tf[6]][bb[tf[0]] + bb[tf[2]]] !== tf[3]) return bb[tf[6]][bb[tf[0]] + bb[tf[2]]];
                if (bb[tf[0]] === bb[tf[2]]) return tf[28];
                for (bb[tf[18]] = tf[6]; bb[tf[18]] < bb[tf[0]].length; bb[tf[18]]++) bb[tf[5]][bb[tf[0]][bb[tf[18]]]] === tf[3] && (bb[tf[5]][bb[tf[0]][bb[tf[18]]]] = tf[6]), bb[tf[5]][bb[tf[2]][bb[tf[18]]]] === tf[3] && (bb[tf[5]][bb[tf[2]][bb[tf[18]]]] = tf[6]), kf(bb[tf[5]][bb[tf[0]][bb[tf[18]]]]++, bb[tf[5]][bb[tf[2]][bb[tf[18]]]]--);
                for (bb[tf[25]] in bb[tf[5]])
                  if (bb[tf[5]][bb[tf[25]]] !== tf[6]) return bb[tf[6]][bb[tf[0]] + bb[tf[2]]] = tf[23], tf[23];
                for (bb[tf[19]] = tf[0]; bb[tf[19]] < bb[tf[0]].length; bb[tf[19]]++)
                  if (yb(bb[tf[6]], bb[tf[0]].substr(tf[6], bb[tf[19]]), bb[tf[2]].substr(tf[6], bb[tf[19]])) && yb(bb[tf[6]], bb[tf[0]].substr(bb[tf[19]]), bb[tf[2]].substr(bb[tf[19]])) || yb(bb[tf[6]], bb[tf[0]].substr(tf[6], bb[tf[19]]), bb[tf[2]].substr(bb[tf[2]].length - bb[tf[19]])) && yb(bb[tf[6]], bb[tf[0]].substr(bb[tf[19]]), bb[tf[2]].substr(tf[6], bb[tf[2]].length - bb[tf[19]]))) return bb[tf[6]][bb[tf[0]] + bb[tf[2]]] = tf[28], tf[28];
                return bb[tf[6]][bb[tf[0]] + bb[tf[2]]] = tf[23], tf[23]
              }, console.log((function(...bb) {
                return bb[tf[1]] = tf[2], yb({}, bb[tf[6]], bb[tf[0]])
              })))
            }
            "jtKiPk" + tf[7] in wh && cb()
          } else(tf[6], vf[tf[89]])(Uy) ? My = tf[28] : (tf[6], vf.m)(Uy) ? Gy < 8 ? kf(vb[Uy] = tf[28], gb[Gy++] = Uy, ib ||= (tf[6], vf[tf[16]])(Uy)) : !ib && (tf[6], vf[tf[16]])(Uy) && kf(vb[Uy] = tf[28], gb[8 - tf[0]] = Uy, ib = tf[28]) : Ry < 4 && kf(vb[Uy] = tf[28], Oy[Ry++] = Uy)
        },
        Xy = (tf[6], Mh[tf[89]])(yb),
        ny = Xy ? Xy.replaced : (() => {
          try {
            return hy[yb]
          } catch {
            return tf[3]
          }
        })();
      if (ly((() => {
          hy[yb] = Yy
        })), typeof ny === tf[90] + tf[91]) {
        const yb = ny;
        ly((() => {
          yb(Yy)
        }))
      }
      if (Xy) {
        const bb = Xy.reports;
        ly((() => {
          for (const Wy in bb)(tf[6], mh[tf[92]])(mh[tf[103]], bb, [Wy]) && Wy !== yb && Yy(Wy, bb[Wy])
        }))
      }
      const uy = Xy ? tf[2] : tf[0];
      let rb = tf[23];
      const Hy = (...bb) => (bb[tf[1]] = tf[6], Vy ? tf[28] : (kf(bb[tf[17]] = tf[23], rb = !ly((() => {
          bb[tf[17]] = hy[yb] !== Yy
        }))), bb[tf[17]])),
        ab = qb(((...bb) => {
          bb[tf[1]] = tf[6];
          const Wy = (tf[6], mh[tf[93]])(hy, yb);
          return (Wy === tf[4] || Wy === void tf[6] ? void tf[6] : Wy.configurable) !== tf[23] || typeof Wy[tf[119]] !== tf[90] + tf[91] || Ty !== uy
        })),
        Fy = {},
        py = () => {
          try {
            return navigator[tf[112] + "tSub"]
          } catch {
            return Fy
          }
        },
        Ly = py(),
        Qy = Wy,
        jb = Qy === tf[4] ? ((...yb) => {
          yb[tf[1]] = tf[6];
          kf(yb[tf[26]] = tf[23], yb[tf[19]] = 60 - tf[0]);
          const bb = TextDecoder[tf[94] + tf[95]][tf[96]],
            Wy = function() {
              yb[tf[19]]++, 60 === yb[tf[19]] && (rf((() => ey(tf[23]))) && (yb[tf[26]] = tf[28]), yb[tf[19]] = tf[6]);
              for (var Wy = arguments[tf[1]], Uy = new Array(Wy), hy = tf[6]; hy < Wy; hy++) Uy[hy] = arguments[hy];
              return (tf[6], mh[tf[92]])(bb, this, Uy)
            };
          return ly((() => {
            TextDecoder[tf[94] + tf[95]][tf[96]] = Wy
          })), () => yb[tf[26]] ? tf[2] : af((() => TextDecoder[tf[94] + tf[95]][tf[96]] !== Wy ? tf[34] : tf[6]))
        })() : () => af((() => Qy[tf[110] + tf[111]]())),
        Dy = (tf[6], Eb[tf[18]])(),
        tb = (tf[6], mh[tf[86]])(tf[4]),
        wy = (tf[6], mh[tf[86]])(tf[4]);
      let kb = tf[6],
        Ny = tf[6],
        zb = tf[6];
      const Iy = (tf[6], mh[tf[86]])(tf[4]),
        xb = (tf[6], mh[tf[86]])(tf[4]);
      let Ay = tf[4],
        dy = (tf[6], mh[tf[86]])(tf[4]);
      const yW = (yb, bb) => {
          kf(tb[kb] = yb, wy[kb] = bb, kb++)
        },
        bW = (...yb) => (kf(yb[tf[1]] = tf[0], yb[tf[0]] = tf[3]), (yb[tf[0]] = (wy[yb[tf[6]]] ? xb : Iy)[tb[yb[tf[6]]]]) !== tf[4] && yb[tf[0]] !== void tf[6] ? yb[tf[0]] : -tf[0]),
        Wb = (tf[6], mh[tf[7]])("d2lvNjQz"),
        Ub = (tf[6], mh[tf[7]])("amtsa2plZndu"),
        hb = [
          [(tf[6], mh[tf[7]])("aW9qZndlODNq"), tf[97]],
          [(tf[6], mh[tf[7]])("a3Bq"), "4"],
          [(tf[6], mh[tf[7]])("dXJocmZm"), "5"]
        ],
        fb = [
          [(tf[6], mh[tf[7]])(tf[99] + tf[98]), tf[130]],
          [(tf[6], mh[tf[7]])(tf[99] + "w="), tf[121]]
        ],
        cW = (tf[6], mh[tf[7]])("eTR5bnM="),
        Pb = (tf[6], mh[tf[7]])("aHRleWpldA=="),
        ob = (tf[6], mh[tf[7]])("c2RmbGpneGxmY2pr"),
        Bb = [
          [(tf[6], mh[tf[7]])("a3NhZmR1"), tf[101]],
          [(tf[6], mh[tf[7]])("ZGZnYWFzZGFz"), tf[105]],
          [ob, tf[100]],
          [(tf[6], mh[tf[7]])("bGFzZWRraGFz"), tf[86]],
          [(tf[6], mh[tf[7]])("cW16ZjhrM24="), tf[17]]
        ],
        Kb = [
          [cW, tf[120]],
          [Pb, tf[92]],
          [(tf[6], mh[tf[7]])("bmI3ZnEy"), tf[18]]
        ],
        eb = (tf[6], mh[tf[7]])("bGtxM20="),
        qW = (tf[6], mh[tf[7]])("bWtxN3" + tf[98]),
        sb = ["mk:tw", "mk:jf"],
        Sb = (() => {
          try {
            var yb;
            return (yb = hy[(tf[6], mh[tf[7]])("V2ViU29ja2V0")]) === tf[4] || yb === void tf[6] ? void tf[6] : yb[tf[94] + tf[95]]
          } catch {
            return tf[3]
          }
        })(),
        lb = ["send", "close", "addEventListener", "removeEventListener", tf[107] + tf[106] + tf[100]],
        mW = ["onmessage", "onopen", "onclos" + tf[83], "onerro" + tf[101]];
      let Cb = tf[23];
      const Tb = (...yb) => {
          yb[tf[1]] = tf[6];
          const Wy = bb();
          Wy === tf[4] || Cb || (Cb = qb((() => {
            if (Sb !== tf[3] && (tf[6], mh[tf[102]])(Wy) !== Sb) return tf[28];
            for (let yb = tf[6]; yb < lb[tf[1]]; yb++)
              if ((tf[6], mh[tf[92]])(mh[tf[103]], Wy, [lb[yb]])) return tf[28];
            for (let yb = tf[6]; yb < mW[tf[1]]; yb++)
              if (Wy[mW[yb]] !== tf[4] && Wy[mW[yb]] !== tf[3]) return tf[28];
            return tf[23]
          })))
        },
        Vb = (tf[6], mh[tf[7]])("RXZlbnQ=");
      let Jb = nb[tf[104]][tf[124]],
        gW = tf[6];
      const Gb = () => gW++ === tf[25] ? (gW = tf[6], ey(tf[23]) ? nb[tf[16]].CheckFuncHit : tf[6]) : tf[6],
        Ob = (tf[6], mh[tf[86]])(tf[4]),
        Rb = Uy[tf[1]];
      for (let Py = tf[6]; Py < Rb; Py++) {
        const yb = (tf[6], mh[tf[92]])(mh.ab, Uy, [Py]);
        Ob[Py] = yb >= 99 && yb <= 122 ? yb : tf[6]
      }
      const vW = (...yb) => {
          return yb[tf[1]] = tf[2], typeof yb[tf[6]] === tf[90] + tf[91] && (tf[6], mh[tf[92]])(mh.S, yb[tf[0]], [(bb = yb[tf[6]], (0, mh.q)(mh.F, bb, []))]) !== tf[4];
          var bb
        },
        iW = new RegExp("^function dispatchEvent\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        Mb = new RegExp("^function now\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        Yb = [
          [Lh["Dispat" + tf[106] + tf[100]], () => !vW(EventTarget[tf[94] + tf[95]][tf[107] + tf[106] + tf[100]], iW)],
          [Lh.PerformanceNow, () => !vW(performance[tf[108]], Mb)],
          [Lh["DateNo" + tf[7]], () => !vW(Date[tf[108]], Mb)]
        ],
        Xb = (tf[6], mh[tf[86]])(tf[4]);
      let ub = tf[6];
      const rW = {
        stackCheck: () => rf((() => ey(tf[28]))),
        [tf[110] + tf[111]]: (...yb) => {
          yb[tf[1]] = tf[6];
          const bb = jb();
          if (bb === tf[2]) return tf[2];
          if (Cy[Wb]) return tf[5];
          const Wy = af((() => hy[Ub] ? tf[14] : tf[6]));
          return Wy !== tf[6] ? Wy === tf[14] ? tf[14] : tf[6] : bb === Hh ? tf[6] : bb === tf[34] ? tf[34] : (Sy(), Uy = Function[tf[94] + tf[95]], fy = tf[117], Zy = (...yb) => (yb[tf[1]] = tf[0], yb[tf[6]].writable !== tf[28]), rf((() => {
            const yb = Object.getOwnPropertyDescriptor(Uy, fy);
            return void 0 !== yb && Zy(yb)
          })) ? tf[50] : tf[6]);
          var Uy, fy, Zy
        },
        indexPassReplaced: Hy,
        [tf[112] + "tSubChanged"]: (...yb) => {
          if (yb[tf[1]] = tf[6], Ly === Fy || rb) return tf[23];
          const bb = py();
          return bb !== Fy && bb !== Ly
        },
        kW: (...yb) => {
          kf(yb[tf[1]] = tf[6], yb[-tf[109]] = Rb);
          for (let bb = tf[6]; bb < Yb[tf[1]] + ub; bb++) {
            const Wy = bb < Yb[tf[1]] ? Yb[bb] : Xb[bb - Yb[tf[1]]];
            Wy[tf[6]] < yb[-tf[109]] && qb(Wy[tf[0]]) && (yb[-tf[109]] = Wy[tf[6]])
          }
          return yb[-tf[109]] < Rb ? Ob[yb[-tf[109]]] : tf[6]
        },
        lU: () => Dy ? Eb[tf[83]] : tf[52],
        [tf[113] + tf[114] + "Subs"]: (...yb) => {
          yb[tf[1]] = tf[6];
          const bb = Py[tf[118]].oB[tf[113] + tf[114]];
          return typeof bb === tf[115] && bb > tf[6] ? bb > tf[116] ? tf[116] : bb : tf[6]
        },
        ["getCom" + tf[129]]: (...yb) => {
          kf(yb[tf[1]] = tf[6], yb[tf[122]] = tf[3], kb = tf[6]);
          for (let Wy = tf[6]; Wy < Gy; Wy++) yW(gb[Wy], tf[28]);
          for (let Wy = tf[6]; Wy < hb[tf[1]]; Wy++) Cy[hb[Wy][tf[6]]] && yW(hb[Wy][tf[0]], tf[28]);
          const bb = af((() => uh(atob[tf[117]](), By) ? tf[6] : tf[0]));
          bb === tf[0] && yW(tf[118], tf[28]), Sy();
          const Uy = bb === Hh ? Hh : af((() => {
            const yb = Object.getOwnPropertyDescriptor(window, "atob");
            return yb === tf[3] ? Hh : yb[tf[119]] !== tf[3] ? tf[0] : tf[6]
          }));
          Uy === tf[0] && yW(tf[16], tf[28]);
          const hy = Uy === Hh;
          for (let Wy = tf[6]; Wy < fb[tf[1]] && !hy; Wy++) Cy[fb[Wy][tf[6]]] && yW(fb[Wy][tf[0]], tf[28]);
          const fy = kb > Gy;
          yb[tf[0]] = tf[4], Gy === tf[6] && (Ry > tf[6] ? yb[tf[0]] = Oy[tf[6]] : My ? yb[tf[0]] = "fp" : fy || (yb[tf[0]] = Cy[cW] ? tf[120] : Cy[Pb] ? tf[92] : tf[4]));
          for (let Wy = tf[6]; Wy < Bb[tf[1]] && !hy; Wy++) Cy[Bb[Wy][tf[6]]] && yW(Bb[Wy][tf[0]], tf[28]);
          const Zy = kb,
            cb = (tf[6], nh[tf[83]])(),
            Py = cb !== tf[4] && (tf[6], Zb[tf[121]])(cb);
          Py && !hy && yW(cb, tf[23]), ab && yW("ix", tf[23]), Jy && yW("il", tf[23]);
          for (let Wy = tf[6]; Wy < Ry; Wy++) yW(Oy[Wy], tf[28]);
          for (let Wy = tf[6]; Wy < Kb[tf[1]]; Wy++) Cy[Kb[Wy][tf[6]]] && yW(Kb[Wy][tf[0]], tf[28]);
          Cy[eb] && yW("mk:lk", tf[28]);
          const oy = ((...yb) => {
            yb[tf[1]] = tf[0];
            for (let bb = tf[6]; bb < sb[tf[1]]; bb++)
              if (yb[tf[6]] === sb[bb]) return sb[bb];
            return tf[4]
          })(Cy[qW]);
          if (oy !== tf[4] && yW(oy, tf[28]), Wy !== tf[4] && Ey(Wy.emitReplaced) === tf[28] && yW("mk:em", tf[28]), Cb && yW("3s", tf[23]), mh.T && yW("3b", tf[23]), Sy(), sy && yW("3d", tf[23]), hy && yW("3g", tf[23]), cb === tf[4] || Py || yW(cb, tf[23]), kb === tf[6]) return tf[4];
          if (yb[tf[0]] === tf[4] && wy[tf[6]] && !(tf[6], vf[tf[16]])(tb[tf[6]]))
            for (let Wy = tf[0]; Wy < Zy; Wy++)
              if (wy[Wy] && (tf[6], vf[tf[16]])(tb[Wy])) {
                const yb = tb[Wy];
                for (let bb = Wy; bb > tf[6]; bb--) kf(tb[bb] = tb[bb - tf[0]], wy[bb] = wy[bb - tf[0]]);
                kf(tb[tf[6]] = yb, wy[tf[6]] = tf[28]);
                break
              } if (kf(yb[-tf[122]] = tf[6], yb[tf[123]] = yb[tf[0]] === tf[4] ? tf[6] : Zy), yb[tf[123]] > tf[6] && cb !== tf[4] && Py && !hy) {
            for (let bb = yb[tf[123]]; bb > tf[6]; bb--) kf(tb[bb] = tb[bb - tf[0]], wy[bb] = wy[bb - tf[0]]);
            kf(tb[tf[6]] = cb, wy[tf[6]] = tf[23], yb[-tf[122]] = tf[0], yb[tf[123]]++)
          }
          if (yb[tf[83]] = tf[6], Ny++ % tf[2] === tf[0])
            for (let Wy = tf[0]; Wy < kb; Wy++) bW(Wy) < bW(yb[tf[83]]) && (yb[tf[83]] = Wy);
          const Ky = tb[yb[tf[83]]];
          (wy[yb[tf[83]]] ? xb : Iy)[Ky] = zb++;
          const ey = yb[tf[83]] >= yb[-tf[122]] && yb[tf[83]] < yb[tf[123]];
          if (!wy[yb[tf[83]]] || Ky === yb[tf[0]] || yb[tf[83]] === tf[6] && !ey) return Ky === tf[100] ? (tf[6], vf[tf[100]])(Cy[ob], vf[tf[19]]) : Ky;
          const qb = (yb[tf[122]] = yb[tf[0]]) !== tf[4] && yb[tf[122]] !== void tf[6] ? yb[tf[122]] : tb[tf[6]];
          return qb !== Ay && kf(Ay = qb, dy = (tf[6], mh[tf[86]])(tf[4])), dy[Ky] ??= (tf[6], vf[tf[92]])(Ky, qb)
        }
      };
      let Hb = nb[tf[104]][tf[124]];
      const aW = () => Jb !== nb[tf[104]][tf[124]] ? Jb : Hb;
      let Fb = tf[6],
        pb = tf[2],
        Lb = tf[6],
        Qb = tf[6];
      return {
        checks: rW,
        checkEvent: (...yb) => {
          yb[tf[1]] = tf[0];
          try {
            const bb = hy[Vb];
            if (typeof bb === tf[90] + tf[91] && !(yb[tf[6]] instanceof bb) && !(tf[6], mh.I)(yb[tf[6]])) return Jb = nb[tf[104]].NotEvent, tf[6];
            if (yb[tf[6]].isTrusted === tf[23]) return tf[6];
            let Wy = tf[6];
            for (const Uy in yb[tf[6]]) Wy++;
            return Wy < tf[65] ? (Jb = nb[tf[104]]["FewPropertie" + tf[105]], tf[6]) : Gb()
          } catch {}
          return tf[6]
        },
        checkPadCall: () => {
          try {
            return Gb()
          } catch {
            return tf[6]
          }
        },
        usedProp: aW,
        watchHeld: (...yb) => {
          kf(yb[tf[1]] = tf[2], yb[tf[2]] = tf[3]);
          const bb = ly((() => {
            yb[tf[2]] = yb[tf[0]]()
          }));
          Xb[ub++] = [yb[tf[6]], () => !bb || yb[tf[0]]() !== yb[tf[2]]]
        },
        Zb: (...yb) => {
          yb[tf[1]] = tf[6];
          const bb = Hy();
          return ((...yb) => {
            if (kf(yb[tf[1]] = tf[0], yb[-tf[0]] = tf[3], yb[tf[18]] = tf[3]), Wy !== tf[4]) {
              const bb = Ey(Wy.uE),
                Uy = "v3" === bb ? tf[5] : "v5" === bb ? tf[25] : "v6" === bb ? tf[34] : tf[2];
              Uy !== tf[2] && (pb = Uy);
              const hy = Ey(Wy["inbuil" + tf[127] + tf[128]]);
              typeof hy === tf[115] && hy >= tf[6] && hy <= tf[125] && (hy | tf[6]) === hy && (Lb = hy), kf(yb[-tf[0]] = Ey(Wy.reflectApplyHit), yb[tf[18]] = Ey(Wy.definerHit))
            }
            const bb = yb[tf[6]] ? tf[80] : "11" === yb[tf[18]] ? tf[125] : "13" === yb[tf[18]] ? 13 : yb[-tf[0]] !== tf[3] && yb[-tf[0]] !== tf[4] ? tf[2] : "10" === yb[tf[18]] ? tf[65] : "12" === yb[tf[18]] ? tf[69] : tf[6];
            bb !== tf[6] && (Qb = bb)
          })(bb), Fb++ % 10 === tf[6] && (Tb(), rf((() => !uh(hy[fy][tf[117]][tf[117]](), By))) && (Hb = Hb === nb[tf[104]][tf[126]] ? nb[tf[104]][tf[126]] : nb[tf[104]].Fr), rf((() => !uh(hy[fy][tf[117]](), By))) && (Hb = nb[tf[104]][tf[126]])), {
            flags: bb ? nb[tf[16]].Butto : tf[6],
            values: [
              [nb[tf[118]].PhysicsVersion, pb],
              [nb[tf[118]]["Inbuil" + tf[127] + tf[128]], Lb],
              [nb[tf[118]]["AltCom" + tf[129]], Qb],
              [nb[tf[118]]["ProbeUsedPro" + tf[130]], aW()]
            ]
          }
        }
      }
    };
    const Nh = "[bloxd-wasm-client]",
      zf = "bloxdWasmDownloadFailed",
      Ih = kW.d,
      xf = "boot",
      Ah = "playSources",
      dh = "wasmBuild",
      yZ = "bloxd-wasm-joined",
      bZ = "bloxd-wasm-first-view",
      Wf = "bloxd-wasm-playable-legacy",
      Uf = 1048576,
      hf = 8 * Uf,
      ff = 8,
      Zf = 1006,
      cZ = 1e3,
      Pf = "You lost connection to the server.",
      of = "general:lostConnection",
      Bf = 1048576,
      Kf = 5e3,
      ef = 100,
      qZ = [2e3, 1e4, 3e4];
    let sf = null,
      Sf = null,
      Ef = !1,
      lf = !1,
      mZ = !1,
      Cf = null,
      Tf = null,
      Vf = null,
      Jf = null,
      gZ = null,
      Gf = null,
      Of = null;
    const Rf = new class {
      constructor(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now();
        this.master = yb, this.soundOn = bb, this.now = Wy, this.player = null, this.local = [], this.stopped = !1
      }
      get loaded() {
        return null !== this.player
      }
      get queued() {
        return this.local.length
      }
      prepare() {
        var yb;
        null === (yb = this.player) || void 0 === yb || yb.prepare()
      }
      preload(yb) {
        var bb;
        this.stopped || (null === (bb = this.player) || void 0 === bb || bb.preload(yb))
      }
      cancelPreload() {
        var yb;
        null === (yb = this.player) || void 0 === yb || yb.cancelPreload()
      }
      load(yb) {
        if (null !== this.player || this.stopped) return;
        this.player = yb, yb.setMaster(this.master, this.soundOn);
        const bb = this.now(),
          Wy = this.local;
        this.local = [];
        for (const hy of Wy)
          if (!(hy.stopped || !hy.loop && bb - hy.at >= 300)) try {
            this.start(hy, yb, bb)
          } catch (Uy) {
            console.error("[bloxd-wasm-client] a queued sound wouldn't start", Uy)
          }
      }
      start(yb, bb, Wy) {
        const {
          name: Uy,
          pos: hy,
          ear: fy,
          maxHearDist: Zy,
          refDistance: cb,
          loop: Py,
          fade: oy
        } = yb, By = bb.playGame(Uy, iW(yb, Wy), hy, fy, Zy, cb, Py);
        if (yb.sound = By, 1 !== yb.rate && By.rate(yb.rate), null !== yb.panner && By.setPannerAttr(yb.panner), null !== yb.moved && By.setPosition(yb.moved), null !== oy && Wy - oy.at < oy.ms) {
          const bb = vW(this.master);
          bb > 0 ? By.fade(0, yb.volume * bb, oy.at + oy.ms - Wy) : By.setRelativeVolume(yb.volume)
        }
      }
      onAudioEvent(yb, bb, Wy, Uy) {
        var hy, fy;
        return null === (hy = null === (fy = this.player) || void 0 === fy ? void 0 : fy.onAudioEvent(yb, bb, Wy, Uy)) || void 0 === hy || hy
      }
      applyListener(yb) {
        var bb;
        null === (bb = this.player) || void 0 === bb || bb.applyListener(yb)
      }
      playGame(yb, bb, Wy, Uy, hy, fy, Zy) {
        if (this.stopped) return Rb.e;
        if (this.player) return this.player.playGame(yb, bb, Wy, Uy, hy, fy, Zy);
        const cb = this.now();
        this.local = this.local.filter((yb => !yb.stopped && (yb.loop || cb - yb.at < 300)));
        const Py = {
          name: yb,
          volume: vW(bb),
          fade: null,
          pos: Wy && [Wy[0], Wy[1], Wy[2]],
          ear: Uy && [Uy[0], Uy[1], Uy[2]],
          maxHearDist: hy,
          refDistance: fy,
          loop: Zy,
          rate: 1,
          panner: null,
          moved: null,
          at: cb,
          stopped: !1,
          sound: null
        };
        this.local.push(Py);
        const oy = {
          stop: () => {
            var yb;
            return Py.stopped = !0, null === (yb = Py.sound) || void 0 === yb || yb.stop(), oy
          },
          fade: (yb, bb, Wy) => {
            if (Py.sound) return Py.sound.fade(yb, bb, Wy), oy;
            const Uy = vW(this.master),
              hy = vW(Uy > 0 ? bb / Uy : bb > 0 ? Py.volume : 0),
              fy = this.now(),
              Zy = iW(Py, fy);
            return Py.volume = hy, Py.fade = Wy > 0 && Zy !== hy ? {
              from: Zy,
              at: fy,
              ms: Wy
            } : null, oy
          },
          rate: yb => (Py.sound ? Py.sound.rate(yb) : Py.rate = yb, oy),
          getVolume: () => Py.sound ? Py.sound.getVolume() : Py.volume * vW(this.master),
          getRelativeVolume: () => Py.sound ? Py.sound.getRelativeVolume() : Py.volume,
          setRelativeVolume: yb => (Py.sound ? Py.sound.setRelativeVolume(yb) : (Py.volume = vW(yb), Py.fade = null), oy),
          setPannerAttr: yb => (Py.sound ? Py.sound.setPannerAttr(yb) : Py.panner = {
            ...yb
          }, oy),
          setPosition: yb => (Py.sound ? Py.sound.setPosition(yb) : Py.moved = [yb[0], yb[1], yb[2]], oy)
        };
        return oy
      }
      setMaster(yb, bb) {
        var Wy;
        this.master = yb, this.soundOn = bb, null === (Wy = this.player) || void 0 === Wy || Wy.setMaster(yb, bb)
      }
      stop() {
        var yb;
        this.stopped = !0, null === (yb = this.player) || void 0 === yb || yb.stopAll();
        for (const bb of this.local) bb.stopped = !0;
        this.local = []
      }
    }((0, lb.c)(), !0);
    let vZ = {
        wasm: "unknown",
        client: String(Ay.b)
      },
      iZ = null,
      Mf = () => {};
    const Yf = new Promise((yb => {
      Mf = yb
    }));
    let Xf = () => {};
    const nf = new Promise((yb => {
      Xf = yb
    }));
    let uf = null,
      rZ = null,
      Hf = null,
      aZ = null,
      Ff = null,
      pf = null,
      Lf = null,
      Qf = null,
      jZ = null,
      Df = null,
      tZ = null,
      wf = null,
      kZ = null,
      Nf = null,
      zZ = null,
      If = null,
      xZ = null,
      Af = null,
      df = !1,
      yc = null;
    const bc = new Set,
      WZ = new Set;

    function UZ(yb) {
      if (!bc.has(yb)) {
        bc.add(yb);
        for (const Wy of WZ) try {
          Wy(yb)
        } catch (bb) {
          console.error(`${Nh} a startup listener threw`, bb)
        }
      }
    }

    function hZ(yb) {
      df = !0, yb.isStopped || UZ("texturesIn")
    }
    let fZ = 1,
      ZZ = -1 / 0,
      cc = !1,
      PZ = !1,
      oZ = 0,
      BZ = null,
      KZ = !1;
    const eZ = {
      dropped: -1 / 0,
      pause: -1 / 0
    };
    let qc = 0,
      sZ = 0,
      SZ = null,
      EZ = null,
      lZ = null,
      mc = null;
    const CZ = new WeakMap;
    let TZ = null,
      VZ = null,
      JZ = null,
      gc = null,
      GZ = null,
      OZ = null,
      RZ = null,
      vc = 0,
      ic = null,
      MZ = null,
      YZ = null,
      XZ = null,
      nZ = -1 / 0,
      uZ = null;
    const rc = new Set;
    let HZ = !1,
      ac = null;
    const FZ = new Map,
      pZ = new Set;
    let LZ = !1;
    const QZ = {
      adapter: null,
      boundAtMs: null
    };
    let jc = null,
      DZ = () => [0, 0],
      tc = () => {},
      wZ = () => {},
      kc = null,
      NZ = null;
    const zc = new class {
      constructor(yb) {
        this.reached = yb, this.next = 1
      }
      observe(yb) {
        if (!(yb < this.next)) {
          for (; this.next <= yb;) this.next *= 2;
          this.reached(yb)
        }
      }
    }((yb => {
      console.warn(`${Nh} chunk cancels from the server this session: ${yb}`)
    }));
    let IZ = null,
      xc = null,
      AZ = null,
      dZ = null,
      yP = !1,
      bP = !1,
      Wc = null,
      Uc = !1,
      hc = !1,
      fc = !0,
      Zc = null,
      cP = !1,
      Pc = !1,
      oc = !1;

    function Bc() {
      return Vf ??= Promise.all([Wy.e(198), Wy.e(129), Wy.e(52)]).then((() => Wy(41808))).then((yb => (Tf = yb, Object.assign(globalThis, {
        bloxdPreviewPage: yb.pagePreviews()
      }), yb)), (yb => {
        throw Vf = null, yb
      })), Vf
    }

    function Kc() {
      return Cf ??= Wy.e(50).then((() => Wy(41827))).catch((yb => {
        throw Cf = null, new Ty.c(yb)
      })), Cf
    }
    class ec {
      constructor() {
        this.host = null
      }
      open(yb) {
        return null !== this.host ? yb(this.host) : Bc().then((bb => (this.host ??= new bb.WasmPreviewHost(bb.pagePreviews()), yb(this.host))))
      }
      openMob(yb) {
        return this.open((bb => bb.openMob(yb)))
      }
      openPet(yb) {
        return this.open((bb => bb.openPet(yb)))
      }
      openMobLineup(yb) {
        return this.open((bb => bb.openMobLineup(yb)))
      }
      openCharacter(yb) {
        return this.open((bb => bb.openCharacter(yb)))
      }
    }

    function qP() {
      mZ || (mZ = !0, kh.f.setHost(new ec), (0, KW.n)(), jh.f.setFollower(EP), Object.assign(globalThis, {
        bloxdPreviews: kh.f
      }))
    }

    function sc() {
      Bc().then((yb => {
        yb.pagePreviews().prefetch()
      }), (() => {}))
    }

    function Sc() {
      let yb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (lf) return;
      lf = !0, hc = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), fc = !hc, console.info(`${Nh} starting`), Ef || (Ef = !0, (0, Ob.z)(new Jb(uc, jP)), (0, Ky.m)(new gW), (0, Ob.x)(new Gb), (0, Ob.u)()), qP(), (0, EW.setCrashScreen)((yb => {
        let {
          text: bb,
          reload: Wy
        } = yb;
        ! function(yb, bb) {
          var Wy, Uy;
          if (cP) return;
          cP = !0, (0, qU.f)(), null === (Wy = uZ) || void 0 === Wy || Wy.abort(), uZ = null, DU.d.release();
          const hy = hc ? null !== (Uy = yb.cancel) && void 0 !== Uy ? Uy : "general:back" : null;
          ZU({
            ...yb,
            cancel: hy
          }).then((yb => {
            yb && bb && Pc ? (0, Qy.l)(Pb.r) : yb && bb ? (0, Qy.m)() : hc && (0, Qy.h)("/")
          }))
        }(bb, Wy)
      })), (0, uU.k)(), (0, Eb.b)();
      let bb = null;
      try {
        bb = Dh("62e2oyn09cq", (() => {
          var yb, bb;
          return null !== (yb = null === (bb = uf) || void 0 === bb ? void 0 : bb.ws) && void 0 !== yb ? yb : null
        }), yb, "oldfwvgcpm")
      } catch (hy) {
        console.error(`${Nh} probes`, hy)
      }
      const Uy = function() {
        const yb = (0, SU.l)(),
          bb = (0, SU.h)();
        let Wy = !1;
        return Uy => {
          yb && !Wy && (Wy = !0, (0, EW.reportStaleBuildReload)(yb, bb, Uy))
        }
      }();
      mo(), hc || function() {
        const yb = function(yb) {
          var bb;
          const Wy = new URLSearchParams(yb),
            Uy = Wy.get("game");
          return Uy ? {
            game: Uy,
            lobby: null !== (bb = Wy.get("lobby")) && void 0 !== bb ? bb : null
          } : null
        }(window.location.search);
        if (yb) return (0, dy.p)(yb.game) && mo().request(), void mP(yb.game, yb.lobby);
        const bb = new URLSearchParams(window.location.search).get("ws");
        if (!bb) return;
        Yf.then((yb => {
          yb && async function(yb, bb) {
            try {
              await (0, Ty.l)(yb), VZ = Nc(new WebSocket(bb)), null !== VZ && DU.d.setGame(null), Ec()
            } catch (hy) {
              console.error(`${Nh} ?ws=${bb} did not attach`, hy)
            }
          }(yb, bb)
        }))
      }(), async function(yb) {
        var bb, Uy, fy, Zy, cb;
        if ("undefined" === typeof WebAssembly) return oP("noWebAssembly", "This browser has no WebAssembly"), null;
        const oy = await (0, dU.I)();
        if ((0, EW.setCrashBackend)((0, kW.p)(oy) ? "unsupported" : null !== (bb = null === oy || void 0 === oy ? void 0 : oy.backend) && void 0 !== bb ? bb : "none"), (0, kW.p)(oy)) return oP("browser", `No WebGPU or WebGL2, and WebGL1 lacks ${oy.missing.join(", ")}`, {
          missing: oy.missing.join(",")
        }), null;
        if ((0, Jh.l)("render")) try {
          const {
            startRenderDebug: yb
          } = await Wy.e(44).then((() => Wy(3892)));
          yb(oy)
        } catch (mW) {
          console.warn("The render debug topic didn't load", mW)
        }
        const By = null !== oy && BP() ? function(yb) {
          let bb;
          try {
            bb = (0, PU.getOperatingSystem)()
          } catch {
            return null
          }
          return KU(yb, bb, eU)
        }(oy) : null;
        if (null !== By) return (0, EW.reportGpuFallback)(By), (0, Pb.n)(By), KP(`the wasm client's renderer misdraws this GPU (${By})`, "gpu"), null;
        const Ky = null !== (Uy = null === oy || void 0 === oy ? void 0 : oy.backend) && void 0 !== Uy ? Uy : null;
        QZ.adapter = null !== (fy = null === oy || void 0 === oy ? void 0 : oy.adapter) && void 0 !== fy ? fy : null, QZ.boundAtMs = null;
        const ey = !(0, kW.W)();
        null !== oy && "none" !== oy.reason && console.info(`${Nh} drawing with ${oy.backend}: ${oy.reason}`);
        const qb = (0, dU.y)();
        Xf(!0), (0, Ty.t)((yb => {
          try {
            null !== Ky && (kc = yb.startSkyFeed, qo(), function(yb) {
              var bb, Wy;
              DZ = yb.rasterText, gc = yb.setTextLocalPlayer, yb.setTextLocalPlayer(null !== (bb = null === (Wy = JZ) || void 0 === Wy ? void 0 : Wy.info.playerDbId) && void 0 !== bb ? bb : null), tc = yb.drainTextRerasters, wZ = yb.loadTextIcons, yb.warmText((() => yP)), yb.textChanged(), yP && setTimeout(wZ, 0)
            }(yb), NZ = yb.startShellAnalytics, OP())
          } finally {
            oc || (AZ = yb.followMenuPrefs({
              setSoundPrefs: tP,
              setEnvPrefs: wc,
              setUiPrefs: Dc,
              setLookPrefs: kP
            }))
          }
        })), (0, Ty.n)(Rf).catch((yb => {
          console.warn(`${Nh} the game code did not load: a join asks again`, yb)
        }));
        const sy = (0, dU.o)(oy);
        let Sy, Ey;
        sy.catch((() => {})), "loading" === (0, Wb.C)() && eh();
        try {
          Sy = function(yb) {
            const bb = null !== yb && void 0 !== yb ? yb : document.createElement("canvas");
            bb.id = "wasm-game-canvas";
            const Wy = (0, HW.g)(),
              Uy = (0, HW.j)(Wy);
            return bb.style.cssText = "position:fixed;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, hh.f)(bb, Uy), (0, HW.d)(bb, Wy), bb.width = Uy.bufferWidth, bb.height = Uy.bufferHeight, rP(bb, fc), Zc = bb, document.body.append(bb), bb
          }(null === Ky ? null : await (await Bc()).pagePreviews().beginSession())
        } catch (hy) {
          return await xo({
            site: dh,
            error: hy
          }, (() => {
            (0, EW.showUnsupported)((0, UU.n)("fetch"), Gh.e.fetch, `the previews did not load: ${String(hy)}`)
          })), null
        }
        eh();
        try {
          Ey = await sy
        } catch (hy) {
          return await xo({
            site: dh,
            error: hy
          }, (() => {
            (0, EW.showUnsupported)((0, UU.n)("fetch"), Gh.e.fetch, `the ${null!==Ky&&void 0!==Ky?Ky:"client"} build did not load: ${String(hy)}`)
          })), null
        }
        const ly = (0, dU.i)(),
          mb = !ly && !0 !== SW.g.getItem(zf),
          Vy = !ly && "loading" === (0, Wb.C)();
        await (0, Ub.h)(Ey, cW.h, {
          reloadFailedDownload: mb
        }), Vy && !(0, Wb.P)() && await (0, Ub.h)(Ey, cW.h, {
          reloadFailedDownload: mb
        });
        oh = performance.now();
        const Jy = vZ;
        if (!(0, Wb.P)()) {
          (0, Wb.M)() && SW.g.setItem(zf, !0);
          const yb = (0, Wb.s)();
          if ("call" === yb) to({
            site: Nb.s,
            error: (0, Wb.p)(),
            header: null
          }, Jy);
          else {
            const bb = null !== yb && void 0 !== yb ? yb : "instantiate",
              Wy = () => {
                (0, EW.showUnsupported)((0, UU.n)(bb), Gh.e[bb], (0, Wb.k)())
              };
            if ("compile" !== yb && "instantiate" !== yb || !BP())
              if ("fetch" === bb) {
                const yb = [Ey.url().href, cW.h.url().href];
                await xo({
                  site: dh,
                  error: (0, Wb.k)(),
                  urls: yb
                }, Wy)
              } else Wy();
            else {
              const bb = (0, Wb.k)(),
                Wy = (0, rW.n)((0, Wb.p)());
              (0, EW.reportCountedLoadFallback)((0, UU.n)(yb), Gh.e[yb], bb, Wy), KP(`the wasm client did not ${yb} here (${bb})`, Wy ? "oom" : null)
            }
          }
          return null
        }(0, hb.H)(Ey.url()) && (0, EW.reportUnstreamedCoreLoad)();
        const gb = (0, Wb.E)();
        let Gy, Oy = Jy;
        try {
          Oy = {
            ...Jy,
            wasm: gb.Xy()
          };
          const {
            Pc: yb
          } = Ey.sU, bb = yb.kBy();
          if (bb !== nb.v) return to({
            site: Nb.b,
            error: `core ABI ${bb}, page ABI ${nb.v}`,
            header: null
          }, Oy), null;
          const [Wy, Uy] = (0, nb.Td)();
          Gy = new yb(Wy, Uy)
        } catch (hy) {
          return to({
            site: Nb.b,
            error: hy,
            header: null
          }, Oy), null
        }
        vZ = Oy, iZ = Ey.sU;
        const Ry = new Nb.g(Gy, Wb.x, {
          onCrash: yb => {
            ey && function(yb, bb, Wy) {
              if ("webgpu" !== bb || (0, dU.e)()) return !1;
              const Uy = function(yb) {
                if (yb.site === Nb.e && (0, kW.s)(yb.error)) return "frames_refused";
                return yb.site === Ih && (0, kW.u)(yb.error) ? "start_failed" : null
              }(yb);
              if (null === Uy || !(0, kW.S)(Uy)) return !1;
              return (0, EW.reportRenderReload)("webgpu", "start_failed" === Uy ? 0 : 1, Wy, {
                cause: Uy,
                error: yb.error,
                context: QZ
              }), YP(), !0
            }(yb, Ky, Oy) || to(yb, Oy)
          },
          onNetEvent: MP,
          onReconnectGrace: fP,
          onCoreErrors: (yb, bb) => {
            var Wy;
            (0, EW.reportCoreErrors)(yb, bb, Oy, ((yb, bb) => {
              var Wy;
              return null === (Wy = jc) || void 0 === Wy ? void 0 : Wy.poy(yb, bb)
            })), null === (Wy = yc) || void 0 === Wy || Wy.coreErrors(yb)
          },
          onRenderReload: (yb, bb, Wy) => {
            ! function(yb, bb, Wy, Uy, hy, fy) {
              if ((0, dU.e)()) return;
              const Zy = bb === nb.Hc.WEBGPU,
                cb = Uy === nb.Hc.PIPELINE_FAILED ? "pipeline_failed" : "lost",
                Py = (0, kW.V)(jc),
                oy = Zy ? (0, kW.P)(cb, hy) : null;
              if (null !== oy) {
                const bb = void 0 === Py ? "" : ` (${Py.message})`;
                return void yb.crash(EW.RENDER_RELOAD_SITE, new Error(`${(0,EW.renderReloadMessage)("webgpu",cb,Wy)} and ${oy}${bb}`))
              }
              const By = Zy ? "webgpu" : "webgl1" === fy ? "webgl1" : "webgl";
              (0, EW.reportRenderReload)(By, Wy, vZ, {
                cause: cb,
                error: Py,
                context: QZ
              }), YP()
            }(Ry, yb, bb, Wy, ey, Ky)
          },
          onEnvEvent: yb => {
            var bb;
            yb.kind === nb.O.SkyImages && (null === (bb = If) || void 0 === bb || bb.onEvent(yb.payload))
          },
          onImages: yb => {
            var bb;
            null === (bb = xZ) || void 0 === bb || bb.onEvent(yb)
          },
          onModelRequest: yb => {
            var bb;
            null === (bb = kZ) || void 0 === bb || bb.request(yb)
          },
          onModelTaken: (yb, bb) => {
            var Wy;
            null === (Wy = kZ) || void 0 === Wy || Wy.taken(yb, bb)
          },
          onTerrainTexturesWanted: () => {
            queueMicrotask((() => {
              ! function(yb, bb) {
                const Wy = Of;
                if (null === Wy || yb.isStopped) return;
                Wy.restore((yb => {
                  (0, EW.reportTerrainTextureFailure)(yb, bb)
                })).then((bb => {
                  !1 !== bb || yb.isStopped ? !0 === bb && console.info(`${Nh} terrain textures handed over again after the renderer lost them`) : console.warn(`${Nh} the terrain textures couldn't be handed over again: the terrain draws blank`)
                }))
              }(Ry, Oy)
            }))
          },
          onKeepAlive: yb => {
            const bb = null === mc ? void 0 : CZ.get(mc);
            void 0 !== bb && TU(bb, yb)
          }
        });
        if (Jf = Ry, null !== yb) {
          Ry.setAntiCheatProbes(Fh(Wb.x, yb.checks)), yb.watchHeld(Lh.CoreFrame, (() => Ry.frame)), yb.watchHeld(Lh.GlueFrame, (() => Gy.frame));
          const bb = jf(yb, ((yb, bb, Wy) => {
            let Uy = !1;
            return zo(Ry, (() => {
              Uy = Ry.rings.input.writeRecord(nb.hb.AntiCheat, yb, bb, Wy, 0)
            })), Uy
          }));
          Ry.isStopped ? bb.stop() : tZ = bb
        }
        sf = (yb, bb, Wy) => Ry.rings.cmd.writeCmd(yb, bb, Wy), Sf = yb => Ry.rings.cmd.growForCmd(yb), KZ = !1, qo(), (0, Ty.u)(Ry, {
          core: Gy,
          memory: Wb.x,
          staleOr: (yb, bb, Wy) => xo({
            site: yb,
            error: bb
          }, Wy),
          reportReplayFault: (yb, bb) => {
            (0, EW.reportReplayFault)(yb, bb, vZ)
          },
          audio: Rf,
          options: ob.c,
          onNetEvent: MP,
          sessionInfo: yb => {
            var bb;
            return (null === (bb = JZ) || void 0 === bb ? void 0 : bb.conn) === yb ? JZ.info : null
          },
          onEventOverflow: Xc,
          replayShaderPack: yb => {
            var bb;
            null === (bb = yc) || void 0 === bb || bb.replay(yb)
          },
          hasPackModel: yb => {
            var bb, Wy;
            return null !== (null !== (bb = null === (Wy = sP()) || void 0 === Wy ? void 0 : Wy.modelUrl(yb)) && void 0 !== bb ? bb : null)
          },
          beforeWrite: () => (!cc && Ry.rings.net.cursor > 0 && uP(Ry, !1, "all"), !Ry.isStopped),
          beforeOp: () => (!cc && Ry.netWrittenSinceFrame > 0 && uP(Ry, !1, "budget"), !Ry.isStopped)
        }), (0, Cy.K)({
          lockPointer: () => {
            if (!vU(Sy)) return !1;
            try {
              Promise.resolve(Sy.requestPointerLock()).catch((() => {}))
            } catch {
              return !1
            }
            return !0
          },
          unlockPointer: () => {
            (0, lW.c)()
          },
          leaveGame: () => {
            Yc()
          },
          canvas: () => Sy
        }), wf = (0, Cy.z)((() => {
          var yb;
          const bb = (0, Ty.i)();
          null === (yb = (0, Ty.s)()) || void 0 === yb || yb.followCursorAim(!0 === (null === bb || void 0 === bb ? void 0 : bb.isSessionLive) ? bb : null)
        })), SZ && Ry.setUiPrefs(SZ);
        EZ && Ry.setEnvPrefs(EZ);
        lZ && Ry.setLookPrefs(lZ);
        const vb = Wh ? Uh(Wh.preventMovement) : null;
        vb && Qc(vb);
        const ib = (0, PW.k)(),
          My = (0, PW.e)(Ry, ib);
        jZ = ib.basis, (0, sW.f)(null === My ? null : (0, cU.p)(My)), Qf = My;
        const Yy = (0, fb.d)();
        let Xy = 1 / 0,
          ny = !0,
          uy = ib.shedFootprintBytes;
        const rb = new nU.c(Yy, (() => Gy.Sc()), (yb => {
          Ry.crash(Nb.j, yb)
        }));
        pf = rb, Lf = rb, null !== My && rb.setCeiling(Math.min((0, nU.m)(My), Xy));
        if (ny) {
          rb.setShed((yb => {
            const bb = Ry.shedMemory("joinReserve" !== yb);
            return null !== bb && (null === Qf || bb < Qf) && (Qf = bb, (0, sW.f)((0, cU.p)(bb))), bb
          }), ((yb, bb, Wy) => {
            1 === bb ? (0, EW.reportMemoryShed)(yb, Wy, vZ) : console.warn(`${Nh} wasm memory: shed again (${yb}): shed ${bb}`, Wy.wasmMemoryShed)
          }), (() => Ry.addDistanceInUse()));
          const yb = (0, kW.K)(gb);
          rb.setFootprint(new Vh(uy, {
            storedChunks: () => Gy.Noy(),
            gpuBytes: () => {
              var bb;
              return null !== (bb = null === yb || void 0 === yb ? void 0 : yb.zBy()) && void 0 !== bb ? bb : 0
            },
            jsHeapBytes: Th
          }))
        }
        window.addEventListener("pagehide", (() => {
          pf === rb && (rb.refreshStats(), NP(rb))
        })), window.addEventListener("pagehide", XP), window.addEventListener("pagehide", nP), !1;
        const [Hy, ab] = (0, BW.e)();
        dZ = (0, eW.h)((yb => Ry.setChunkAddDistance(yb.horizontal, yb.vertical)), {
          horizontal: Hy,
          vertical: ab
        }), Ry.setAmbientOcclusion(!0 !== SW.e.getItem("disableAmbientOcclusion")), Ry.setPoseLod(!0 !== SW.e.getItem(bW.R)), (0, Jh.l)("look") && (Ry.setLookDebug(!0), (0, gf.i)("wasm", (() => Ry.takeLookDebug())));
        const Fy = function(yb, bb, Wy, Uy) {
          const hy = new wW,
            fy = yb => SW.e.getItem(yb);
          hy.sync(fy, bb), (0, Tb.R)();
          const Zy = (0, Py.h)("customBindingsChanged", (() => {
            hy.sync(fy, bb)
          }));
          (0, mU.o)(bb);
          const cb = new Set,
            oy = (0, Cy.z)((() => {
              var yb;
              cb.size > 0 && IW() && !0 === (null === (yb = (0, Ty.i)()) || void 0 === yb ? void 0 : yb.localPlayerAlive()) && Py.g.EZ("usedKeyboard")
            })),
            By = rU(yb, bb, {
              prevents: yb => hy.prevents(yb),
              keyPressed: yb => {
                hy.moves(yb) && (cb.add(yb), IW() && Py.g.EZ("usedKeyboard"))
              },
              keyReleased: yb => {
                cb.delete(yb)
              },
              keysReleased: () => {
                cb.clear()
              },
              resized: () => {
                NW.g.measure(), (0, aU.m)()
              },
              sizeCanvas: () => (0, HW.k)(yb),
              watchRenderScale: bb => (0, HW.l)(yb, bb),
              touchStarting: () => {
                NW.g.measure()
              },
              viewShown: Wy,
              touchUiShown: () => jb.d.get("isTouchScreen"),
              ctrlCombosAreGames: IW,
              inspect: (yb, bb, Wy) => {
                hy.checks(bb, Wy) && Uy(yb)
              },
              canLock: () => vU(yb)
            }),
            Ky = (0, db.e)(bb);
          return () => {
            Zy(), oy(), (0, mU.o)(null), Ky(), By()
          }
        }(Sy, ((yb, bb, Wy, Uy, hy) => {
          var fy;
          zo(Ry, (() => {
            Ry.rings.input.writeRecord(yb, bb, Wy, Uy, hy)
          })), null === (fy = tZ) || void 0 === fy || fy.onInput(yb), !PZ && (0, bh.d)(yb, hy) && (0, bh.b)((() => {
            Jf !== Ry || oc || Ry.isStopped || !pP() || uP(Ry, !1, "budget", !1)
          }))
        }), (() => fc), (yb => {
          var bb;
          null === (bb = tZ) || void 0 === bb || bb.onEvent(yb)
        }));
        if (Ry.isStopped) return Fy(), null;
        rZ = Fy;
        const py = () => !Ry.isStopped && !cP;
        if (Ry.isStopped) return null;
        (0, Wb.V)((() => {
          "call" === (0, Wb.s)() && Ry.crash(Nb.s, (0, Wb.p)())
        }));
        const Dy = (0, Nb.O)(Ry.rings.worker, (() => {
          uP(Ry, !1, "budget")
        }));
        Hf = function(yb, bb) {
          return IP().catch((() => {})), new Rh({
            module: (0, Wb.z)(),
            decodeSettings: yb => {
              const bb = (0, Ty.s)();
              if (null === bb) throw new Error("no game code to decode the world-gen seed with");
              return bb.decodeMapSettings(yb)
            },
            loadWorker: IP,
            onLoadFailed: yb => {
              (0, EW.reportWorldgenLoadFailure)(yb, vZ)
            },
            onWorkerLost: yb => {
              (0, EW.reportWorkerLost)(Nb.F, yb, vZ)
            },
            onStartTimeout: yb => {
              (0, EW.reportWorkerStartTimeout)(Nb.F, yb, vZ)
            },
            onGaveUp: yb => {
              (0, EW.reportWorldgenGaveUp)(yb, vZ)
            },
            onMemoryStats: yb => {
              var bb;
              null === (bb = pf) || void 0 === bb || bb.noteWorldgen(yb)
            },
            onMemoryGone: () => {
              var yb;
              null === (yb = pf) || void 0 === yb || yb.worldgenGone()
            },
            write: (Wy, Uy, hy, fy) => {
              zo(yb, (() => {
                yb.rings.worker.writeWorkerRecord(Wy, Uy, hy, 0, fy) || yb.crash(Nb.F, `a world-gen record of kind ${Uy} did not fit the worker-in ring`)
              })), bb()
            }
          })
        }(Ry, Dy), Ff = function(yb, bb) {
          return new YU({
            module: (0, Wb.z)(),
            loadWorkers: async () => {
              const [{
                createMeshWorker: yb
              }, bb] = await Promise.all([Wy.e(37).then((() => Wy(41875))), Promise.resolve().then((() => Wy(94))).then((yb => {
                let {
                  isMobile: bb
                } = yb;
                return bb()
              }), (() => !1))]);
              return {
                create: yb,
                count: (0, Sb.d)(navigator.hardwareConcurrency, bb)
              }
            },
            write: (Wy, Uy, hy, fy, Zy) => {
              (0, aU.j)(), zo(yb, (() => {
                yb.rings.worker.writeWorkerRecord(Wy, Uy, hy, fy, Zy) || yb.crash(Nb.k, `a meshing record of kind ${Uy} did not fit the worker-in ring`)
              })), bb()
            },
            onWorkerLost: yb => {
              (0, EW.reportWorkerLost)(Nb.k, yb, vZ)
            },
            onStartTimeout: yb => {
              (0, EW.reportWorkerStartTimeout)(Nb.k, yb, vZ)
            },
            onMemoryStats: (yb, bb) => {
              var Wy;
              null === (Wy = pf) || void 0 === Wy || Wy.noteMeshWorker(yb, bb)
            },
            onMemoryGone: yb => {
              var bb;
              null === (bb = pf) || void 0 === bb || bb.meshWorkerGone(yb)
            },
            fail: (bb, Wy) => {
              const Uy = () => {
                yb.crash(Nb.k, void 0 === Wy ? bb : new Error(bb, {
                  cause: Wy
                }))
              };
              void 0 !== Wy ? xo({
                site: Nb.k,
                error: Wy
              }, Uy) : Uy()
            }
          })
        }(Ry, Dy);
        const tb = (0, th.m)(qW.clientSideServerUrls.staticUrl, {
            onTableFailed: yb => {
              xo({
                site: EW.MODEL_FEED_SITE,
                error: yb
              }, (() => {}), py)
            },
            packUrl: yb => {
              var bb, Wy;
              return null !== (bb = null === (Wy = sP()) || void 0 === Wy ? void 0 : Wy.modelUrl(yb)) && void 0 !== bb ? bb : null
            }
          }),
          wy = function(yb, bb, Wy) {
            const Uy = Wy => {
              var Uy, hy;
              return null !== (Uy = null === (hy = bb()) || void 0 === hy ? void 0 : hy.drawnUrl(Wy)) && void 0 !== Uy ? Uy : yb.url(Wy)
            };
            return (0, jh.k)((0, rh.q)(Uy), Wy)
          }(tb, (() => kZ), sP),
          kb = new rh.h(wy, (yb => {
            console.warn(`${Nh} image ${yb.key.kind}:${yb.key.index}:${yb.key.word} failed`, yb.error)
          }));
        xZ = kb, Af = new LU(Ry, wy, ((yb, bb) => {
          void 0 === bb ? console.warn(`${Nh} ${yb}`) : lP(yb, bb)
        }));
        const Ny = new QU.h(tb, function(yb, bb) {
          let Uy = !1,
            hy = null,
            fy = null;
          const Zy = {
              onUnavailable: (Wy, Uy) => {
                fy ??= xo({
                  site: EW.MODEL_POOL_SITE,
                  error: Wy,
                  urls: Uy
                }, (() => {
                  (0, EW.reportModelPoolFailure)(Wy, yb)
                }), bb)
              },
              onDecoderFailed: (Wy, Uy) => {
                const hy = () => {
                  (0, EW.reportDracoDecoderFailure)(Wy, yb)
                };
                void 0 !== Uy ? xo({
                  site: EW.MODEL_POOL_SITE,
                  error: Wy,
                  urls: Uy
                }, hy, bb) : hy()
              },
              onWorkerLost: bb => {
                (0, EW.reportWorkerLost)(EW.MODEL_POOL_SITE, bb, yb)
              }
            },
            cb = Wy.e(39).then((() => Wy(41880))).then((yb => {
              let {
                pageModelPool: bb
              } = yb;
              if (Uy) return null;
              const Wy = bb(Zy);
              return hy = Wy.unlisten, Nf = Wy.pool, Wy.pool
            }), (yb => (Uy || Zy.onUnavailable(yb, void 0), null)));
          return zZ = () => {
            var yb;
            Uy = !0, null === (yb = hy) || void 0 === yb || yb(), Nf = null
          }, (yb, bb) => cb.then((Wy => {
            var Uy;
            return null !== (Uy = null === Wy || void 0 === Wy ? void 0 : Wy.build(yb, bb)) && void 0 !== Uy ? Uy : (0, wU.o)(yb, "the model workers did not load")
          })).then((yb => null !== fy && (0, wU.k)(yb) ? fy.then((() => yb)) : yb))
        }(Oy, py), (yb => {
          yb.startup ? (DP(), xo({
            site: EW.MODEL_FEED_SITE,
            error: yb.error,
            urls: "" === yb.url ? void 0 : [yb.url]
          }, (() => {
            (0, EW.reportModelFailure)(yb, Oy)
          }))) : (0, EW.reportModelFailure)(yb, Oy)
        }), {
          onWritten: (yb, bb) => {
            kb.glbWritten(yb, bb)
          },
          onTaken: (yb, bb) => {
            kb.glbTaken(yb, bb)
          },
          onPackFileFailed: (yb, bb) => {
            console.warn(`${Nh} the texture pack's model file ${yb} failed: the shipped one loads`, bb)
          }
        });
        kZ = Ny;
        const zb = new ah.g(Ry);
        Of = zb, zb.swap((yb => {
          const bb = () => {
            (0, EW.reportTerrainTextureFailure)(yb, Oy)
          };
          if (yP) return void bb();
          const Wy = () => !yP,
            Uy = null === yb.url ? void 0 : [yb.url];
          xo({
            site: Nb.B,
            error: yb.error,
            urls: Uy
          }, bb, Wy)
        })).then((yb => {
          null !== yb && (yb || Ry.isStopped || console.warn(`${Nh} the core refused the terrain textures: terrain draws untextured`), hZ(Ry))
        }));
        const Iy = new Yb(Ry, ((yb, bb) => {
          console.warn(`${Nh} ${yb}`, ...void 0 === bb ? [] : [bb])
        }));
        Iy.feed(), null !== Ky && function(yb, bb, Uy, hy, fy, Zy) {
          let cb = null,
            Py = null,
            oy = !1;
          const By = {
            textures: null,
            stop: () => {
              var yb, bb;
              oy = !0, null === (yb = Py) || void 0 === yb || yb(), null === (bb = cb) || void 0 === bb || bb(), DU.d.setSettled(null), null !== iZ && lc.clear(iZ)
            }
          };
          Gf = By, Py = mo().follow((Py => {
            null !== Py && Promise.all([Wy.e(179), Wy.e(42)]).then((() => Wy(41837))).then((Wy => {
              let {
                PackTextures: Ky
              } = Wy;
              if (oy || yb.isStopped) return;
              const ey = new Ky({
                feed: Py,
                terrain: bb,
                backend: Uy,
                stopped: () => yb.isStopped,
                landed: () => {
                  hZ(yb)
                },
                packSwapped: () => {
                  (0, jh.h)(hy), Zy.feed((() => async function(yb) {
                    const bb = null === yb ? null : await yb.averageColours;
                    return null === bb ? Xb() : Mb(bb)
                  }(ey.assets))), SP(ey.iconOverrides()), fy.refresh().then((yb => {
                    null !== yb && console.info(`${Nh} texture pack models: ${yb.resent} of ${yb.delivered} files written again, ${yb.refetched} refetched`)
                  }))
                },
                settled: (yb, bb, Wy) => {
                  var Uy;
                  (DU.d.setSettled({
                    state: yb,
                    files: bb
                  }), null === yb.gameSource && (0, oW.b)(yb.pack, Wy), Wy) || function(yb) {
                    const bb = iZ;
                    null !== bb && lc.apply(bb, yb).then((bb => {
                      bb && yb && console.info(`${Nh} the texture pack's animations are in (${Object.keys(yb).length} files)`)
                    }))
                  }(null === (Uy = yb.pack) || void 0 === Uy ? void 0 : Uy.animations)
                },
                settling: () => {
                  DU.d.setSettled(null)
                },
                warn: lP,
                maxTextureSize: () => Promise.resolve((0, kW.X)(document.createElement("canvas")))
              });
              By.textures = ey, cb = ey.start()
            }), (yb => {
              console.warn(`${Nh} the texture pack's terrain didn't load: the built atlas stays`, yb)
            }))
          }))
        }(Ry, zb, Ky, kb, Ny, Iy);
        const xb = () => {
            Ry.setTextureLayers("")
          },
          Ay = yb => {
            (eb ??= Wy.e(46).then((() => Wy(41886))).then((yb => {
              let {
                TEXTURE_NAMES: bb
              } = yb;
              return bb
            }), (yb => {
              throw eb = null, yb
            })), eb).then((yb => {
              Ry.setTextureLayers(yb) || Ry.isStopped || (console.warn(`${Nh} the core refused the texture names: textured Boxes draw textureNotFound`), xb())
            }), (bb => {
              if (Ry.isStopped) return;
              const [Wy, ...Uy] = yb;
              void 0 === Wy ? xo({
                site: EW.TEXTURE_NAMES_SITE,
                error: bb
              }, (() => {
                console.warn(`${Nh} the texture names didn't load, so textured Boxes draw textureNotFound`, bb), xb()
              }), py) : setTimeout((() => {
                Ay(Uy)
              }), Wy)
            }))
          };
        if (Ay(qZ), null !== Ky && !await async function(yb, bb, Wy, Uy, fy, Zy) {
            var cb;
            const Py = (0, kW.K)(Wy);
            if (null === Py) return yb.crash(Ih, new Error(`this ${Uy} build has no openRenderer`)), !1;
            let oy;
            jc = Py;
            try {
              var By, Ky, ey, qb;
              const hy = null !== (By = null === (Ky = Tf) || void 0 === Ky ? void 0 : Ky.pagePreviews()) && void 0 !== By ? By : null,
                cb = null !== (ey = null === (qb = Tf) || void 0 === qb ? void 0 : qb.previewModule(Wy)) && void 0 !== ey ? ey : null;
              if (null === hy || null === cb) {
                null === hy || void 0 === hy || hy.endSession(!1), oy = (0, HW.g)().sampleCount, await (0, kW.g)(bb, Py, Zy, eP, oy, await fy);
                const yb = (0, kW.n)(Wy);
                null === yb && console.warn(`${Nh} this ${Uy} build has no image registry: sky and model images won't show`), (0, HU.i)(yb)
              } else {
                (0, dU.e)() && await (0, Qy.q)();
                const Wy = (0, dU.F)();
                if (null !== Wy) {
                  const bb = (0, kW.V)(Py);
                  return yb.crash(EW.RENDER_RELOAD_SITE, new Error(`${Wy}${void 0===bb?"":` (${bb.message})`}`)), !1
                }
                oy = await hy.bindSession(cb, bb, (async yb => (0, kW.w)(Py, Ih, Zy, yb, eP, await fy)))
              }
            } catch (hy) {
              return yb.crash(Ih, hy), !1
            }(function(yb, bb) {
              const Wy = yb,
                {
                  requestCapture: Uy,
                  takeCapture: hy
                } = Wy;
              if ("function" !== typeof Uy || "function" !== typeof hy) return;
              const fy = {
                request() {
                  Uy.call(Wy, bb)
                },
                take() {
                  var yb;
                  return null !== (yb = hy.call(Wy)) && void 0 !== yb ? yb : null
                }
              };
              window[fh] = fy
            })(bb, oy), LZ = !0;
            const sy = performance.now();
            return QZ.boundAtMs = null !== (cb = (0, dU.G)()) && void 0 !== cb ? cb : sy, console.info(`${Nh} ${Uy} renderer bound at ${Math.round(sy)} ms`), !yb.isStopped
          }(Ry, Gy, gb, Ky, qb, Sy)) return null;
        if (null !== Ky) {
          var dy, yW, Bb;
          (0, Zb.F)(Ky);
          const yb = () => !Ry.isStopped && FP();
          Wy.e(176).then((() => Wy(8345))).then((bb => {
            let {
              devTools: Wy
            } = bb;
            Ry.isStopped || Wy.setHost(function(yb) {
              return {
                tools: AU,
                async downloadScene(bb, Wy) {
                  let {
                    width: Uy,
                    height: hy,
                    colouring: fy
                  } = Wy;
                  "screenshot" === bb && null === fy ? await (0, zh.d)(yb, Uy, hy) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
                },
                setAmbientLightIntensity: () => (console.warn("The Rust client's renderer has no ambient light setting"), Promise.resolve())
              }
            }(function(yb, bb) {
              return {
                canvas: yb,
                maxTextureSize: IU,
                drawing: bb,
                resize: (yb, bb) => {
                  (0, mU.w)(nb.hb.Resize, 0, yb, bb, (0, mU.h)(1))
                },
                restoreSize: () => {
                  const bb = (0, HW.k)(yb);
                  null !== bb && (0, mU.w)(nb.hb.Resize, 0, bb.cssWidth, bb.cssHeight, (0, mU.h)(bb.renderScale))
                },
                onFrameDrawn: yb => (xh.add(yb), () => {
                  xh.delete(yb)
                })
              }
            }(Sy, yb)))
          }), (yb => {
            console.warn(`${Nh} the developer tools didn't load: no captures this session`, yb)
          }));
          const bb = "webgpu" === Ky && null !== (dy = null === oy || void 0 === oy || null === (yW = oy.adapter) || void 0 === yW ? void 0 : yW.vendor) && void 0 !== dy ? dy : null;
          IZ = {
            backend: Ky,
            canvas: Sy,
            fallbackReason: null !== (Bb = null === oy || void 0 === oy ? void 0 : oy.reason) && void 0 !== Bb ? Bb : null,
            adapterVendor: bb
          }, OP();
          try {
            (0, aU.v)(Ky, Sy, bb)
          } catch (hy) {
            (0, aU.x)(), console.error(`${Nh} the quality steps didn't start`, hy)
          }
        }
        const {
          storagePullBreaks: Kb
        } = await qb, sb = Kb ? Ly.d : (0, Ly.f)(oy, (0, Cb.b)()), Eb = "webgpu" === Ky && !Kb;
        if (yc = (0, Ly.g)(Eb ? Ry : null, Eb && null !== (Zy = null === (cb = Tf) || void 0 === cb ? void 0 : cb.pagePreviews().eU) && void 0 !== Zy ? Zy : null, sb, lP), oc) return null;
        if (rb.reserveAtJoin((0, nU.i)(null !== My && void 0 !== My ? My : cU.g)), Ry.isStopped) return null;
        const lb = yb => {
          if (null !== xc) try {
            xc.animationFrame(yb)
          } catch (hy) {
            io(hy)
          }
          if (function(yb, bb) {
              return bb && !oc && !PZ && pP() && FP() && yb.framePaces(performance.now())
            }(Ry, fc)) return Ry.writePendingInput(), (0, Cy.h)(yb, ro), RP(!1, yb), void requestAnimationFrame(lb);
          uP(Ry, fc, "budget") && ((0, Vb.g)(Ry.lastFrameKind) && FP() && (0, Cy.h)(yb, ro), RP(fc && Uc, yb), wP(Ry), rb.afterFrame(), requestAnimationFrame(lb))
        };
        requestAnimationFrame(lb);
        return function(yb) {
          if (yb.has("inputLog") && (0, kU.k)((yb => {
              let {
                action: bb,
                down: Wy,
                press: Uy
              } = yb;
              console.info(`${zU} input ${bb} ${Wy?"down":"up"} press ${Uy} at ${performance.now().toFixed(1)}`)
            })), yb.has("inputDump")) {
            const yb = [];
            xU = yb, Object.assign(window, {
              bloxdInputDump: () => yb.join("\n")
            })
          }
        }(new URLSearchParams(window.location.search)), Df = function(yb, bb) {
          let Wy = null;
          const Uy = () => {
              null !== Wy && (clearInterval(Wy), Wy = null)
            },
            hy = () => {
              document.hidden ? Wy ??= setInterval((() => {
                uP(yb, !1, "budget") ? (wP(yb), bb.afterFrame()) : Uy()
              }), ef) : Uy()
            };
          return document.addEventListener("visibilitychange", hy), hy(), () => {
            Uy(), document.removeEventListener("visibilitychange", hy)
          }
        }(Ry, rb), Ry
      }(bb).then((yb => {
        var bb;
        (Uy(vZ), Xf(null !== yb), null !== yb && (Bh = performance.now()), Mf(yb), null === yb) ? null === (bb = Tf) || void 0 === bb || bb.pagePreviews().endSession(null === (0, Wb.s)()): UZ("booted")
      }), (yb => {
        Uy(vZ), Xf(!1), Mf(null), to({
          site: xf,
          error: yb,
          header: null
        }, vZ)
      }))
    }

    function Ec() {
      const yb = iZ;
      null !== yb && Bc().then((bb => {
        let {
          pageBuiltInAnimationPack: Wy
        } = bb;
        Wy().provide(yb)
      }), (yb => {
        console.warn(`${Nh} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, yb)
      }))
    }
    const lc = new class {
      constructor(yb) {
        this.deps = yb, this.latest = 0, this.kW = null
      }
      apply(yb, bb) {
        return this.load(yb, bb, 0)
      }
      async load(yb, bb, Wy) {
        var Uy;
        const hy = ++this.latest,
          fy = this.deps.compiler;
        if (void 0 === bb || null === bb || "object" !== typeof bb || 0 === Object.keys(bb).length || null === fy) return this.drop(yb), !1;
        if ((null === (Uy = this.kW) || void 0 === Uy ? void 0 : Uy.module) === yb && (0, Qb.Qd)(this.kW.files, bb)) return !1;
        try {
          const [Wy, Uy] = await Promise.all([fy(), this.deps.builtIns()]);
          if (hy !== this.latest) return !1;
          const Zy = await Wy(bb, wb, {
            builtIns: Uy
          });
          if (hy !== this.latest) return !1;
          const cb = this.call(yb, Zy);
          if (void 0 === cb) throw new tW("the compiled animations didn't read against the built-in pack");
          return this.kW = {
              module: yb,
              files: bb
            },
            function(yb) {
              for (let bb = 0; bb + 2 < yb.length; bb += 3) {
                ("error" === yb[bb] ? console.error : console.warn)(`Animation for the texture pack: ${yb[bb+1]}: ${yb[bb+2]}`)
              }
            }(cb), !0
        } catch (cb) {
          var Zy;
          if (hy !== this.latest) return !1;
          this.drop(yb), 0 === Wy && this.deps.warn("the texture pack's animations didn't load: lifeforms play the built-in ones", cb);
          const Uy = (null !== (Zy = this.deps.retryAfterMs) && void 0 !== Zy ? Zy : Db)[Wy];
          return void 0 === Uy || cb instanceof tW || (0, jW.i)(yb) || setTimeout((() => {
            hy === this.latest && this.load(yb, bb, Wy + 1)
          }), Uy), !1
        }
      }
      call(yb, bb) {
        try {
          return yb.woy(bb)
        } catch (Wy) {
          throw (0, jW.k)(yb, Wy), Wy
        }
      }
      clear(yb) {
        this.latest++, this.drop(yb)
      }
      drop(yb) {
        const bb = this.kW;
        if (this.kW = null, (null === bb || void 0 === bb ? void 0 : bb.module) === yb && !(0, jW.i)(yb)) try {
          this.call(yb, null)
        } catch {}
      }
    }({
      compiler: aW.b,
      builtIns: async () => {
        const {
          pageBuiltInAnimationPack: yb
        } = await Bc();
        return yb().whenSet()
      },
      warn: lP
    });
    async function mP(yb, bb) {
      let Uy = !1;
      await Cc({
        matchmake: async () => {
          const {
            guestJoinTarget: hy,
            guestJoinWithPack: fy
          } = await Wy.e(330).then((() => Wy(41830)));
          return Uy ? hy(yb, bb, TP()) : (Uy = !0, fy(yb, bb, (bb => VP(yb, bb)), TP))
        },
        onFailure: yb => {
          (0, EW.showJoinFailure)(yb, vZ)
        },
        rejoin: Hc,
        invalidateTrafficCode: aP
      })
    }
    async function Cc(yb) {
      let {
        matchmake: bb,
        onFailure: Wy,
        rejoin: hy,
        invalidateTrafficCode: fy,
        pageReady: Zy,
        signal: cb
      } = yb;
      const Py = () => !0 === (null === cb || void 0 === cb ? void 0 : cb.aborted);
      let oy;
      const By = DU.d.rejoinHold(),
        Ky = (0, qU.C)("wasm", ko);
      let ey = !1,
        qb = performance.now();
      try {
        if (!await nf) return {
          kind: "stopped"
        };
        if (Py()) return {
          kind: "RZ"
        };
        Kc().catch((() => {}));
        let yb = await bb();
        qb = performance.now();
        const Wy = () => performance.now() - yb.matchedAt <= yb.freshMs,
          Uy = Vc(yb.target).catch((() => {}));
        Wy() && !Py() && (oy = new RU(yb.target, {
          signal: cb
        }));
        const fy = performance.now();
        if (null === await Yf) return {
          kind: "stopped"
        };
        var sy;
        if (function(yb) {
            var bb, Wy;
            if (Zh.b.markGameEngineConstructed(), Kh) return;
            Kh = !0;
            const Uy = Math.max(yb, null !== (bb = Ph) && void 0 !== bb ? bb : yb);
            (0, cf.h)("ready", Math.max(0, (null !== (Wy = oh) && void 0 !== Wy ? Wy : Uy) - Uy) / 1e3)
          }(fy), Py() || (null !== oh && null !== Bh ? ((0, Ob.g)("wasm_loaded", oh), (0, Ob.g)("wasm_core_ready", Bh)) : console.warn("[bloxd-wasm-client] a join found the core before boot marked its steps")), await Uy, !Wy() && !Py()) null === (sy = oy) || void 0 === sy || sy.rematched(), yb = await bb(), qb = performance.now();
        if (Py()) return {
          kind: "RZ"
        };
        const By = await async function(yb) {
          var bb, Wy, Uy;
          let {
            signal: hy,
            rejoin: fy = null,
            early: Zy,
            pageReady: cb
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null !== hy && void 0 !== hy && hy.aborted) throw new DOMException("the join was left", "AbortError");
          const Py = (oy = MZ, By = performance.now(), null !== oy && By - oy < qh);
          var oy, By;
          MZ = null;
          const Ky = new AbortController;
          Oc({
            controller: Ky,
            game: null !== (bb = null === (Wy = yb.session) || void 0 === Wy ? void 0 : Wy.gameNameWithVariation) && void 0 !== bb ? bb : null
          }), YZ = null, null === (Uy = uZ) || void 0 === Uy || Uy.abort(), uZ = null, HZ = !1, ac = null, FZ.clear();
          const ey = () => {
            (0, sb.f)(Ky, (0, sb.e)(hy))
          };
          null === hy || void 0 === hy || hy.addEventListener("abort", ey, {
            once: !0
          });
          try {
            var qb, sy, Sy;
            const bb = await Yf;
            if (null === bb || bb.isStopped || oc) throw new Error("no core is running to join a game with");
            if (yb.session && null !== yc) {
              const bb = await Jc(yc.join(yb.session.gameNameWithVariation), Ky.signal);
              if (null !== bb) throw new Ly.e(bb)
            }
            const [, , , {
              joinRoom: Wy
            }] = await Jc(Promise.all([(0, Ty.l)(bb), Vc(yb), null === cb || void 0 === cb ? void 0 : cb(), Kc()]), Ky.signal), Uy = yb.session, hy = Uy ? {
              ...Lc,
              attachSocket: bb => {
                const Wy = Nc(bb, yb.endpoint);
                var hy;
                null !== Wy && (JZ = {
                  conn: Wy,
                  info: Uy
                }, null === (hy = gc) || void 0 === hy || hy(Uy.playerDbId));
                return Wy
              }
            } : Lc, oy = await Wy(hy, yb, {
              signal: Ky.signal,
              early: Zy
            }).catch((yb => {
              throw function(yb) {
                if (!(yb instanceof Yy.e)) return yb;
                if ("roomError" === yb.stage && null !== ac) return Tc(new Yy.e(yb.message, yb.stage, yb.code, ac), yb);
                const bb = "closed" === yb.stage && null !== XZ ? FZ.get(XZ.conn) : void 0;
                return void 0 === bb ? yb : Tc(new Yy.e(yb.message, yb.stage, bb.code), yb)
              }(yb)
            }));
            if (TZ !== Ky) throw oy.qh(), new DOMException("the join was left", "AbortError");
            vP(oy), null === (qb = Ff) || void 0 === qb || qb.newGame();
            const By = function(yb) {
              var bb, Wy;
              const {
                session: Uy
              } = yb, hy = void 0 === Uy ? yb.joinOptions.lobbyName : Uy.lobbyName;
              return {
                endpoint: yb.endpoint,
                game: null !== (bb = null === Uy || void 0 === Uy ? void 0 : Uy.gameNameWithVariation) && void 0 !== bb ? bb : yb.roomName,
                lobby: String(null !== hy && void 0 !== hy ? hy : null),
                postCookies: null !== (Wy = yb.postCookies) && void 0 !== Wy ? Wy : null
              }
            }(yb);
            CZ.set(oy, By), JU(By);
            const ey = performance.now(),
              Ey = {
                conn: oy.conn,
                rejoin: fy,
                game: null !== (sy = null === (Sy = yb.session) || void 0 === Sy ? void 0 : Sy.gameNameWithVariation) && void 0 !== sy ? sy : "",
                joinedAt: ey,
                rejoinedAt: Py ? ey : null,
                overflow: null
              };
            GZ = Ey,
              function(yb, bb) {
                WP();
                const Wy = {
                  endpoint: bb,
                  roomId: yb.seat.room.roomId,
                  heldConn: 0,
                  dropCode: 0,
                  pendingHold: null,
                  resume: new hW({
                    reconnect: (yb, bb, Uy) => ZP(Wy, yb, bb, Uy),
                    releaseSeat: yb => {
                      !async function(yb, bb) {
                        const {
                          roomId: Wy,
                          roomToken: Uy
                        } = hP(yb, bb);
                        try {
                          const {
                            leaveHeldSeat: bb
                          } = await Kc();
                          await bb(yb.endpoint, Wy, Uy)
                        } catch (hy) {
                          console.warn(`${Nh} the held seat of a game left while it reconnected couldn't be released`, hy)
                        }
                      }(Wy, yb)
                    },
                    isLive: () => OZ === Wy && null !== GZ && !oc,
                    Jby: yb => {
                      ic = yb, bo()
                    },
                    onReconnected: yb => {
                      ! function(yb) {
                        const bb = mc;
                        if (null !== bb && bb !== yb) {
                          const Wy = CZ.get(bb);
                          void 0 !== Wy && CZ.set(yb, Wy), Wc === bb && (Wc = yb), bb.detach()
                        }
                        vP(yb)
                      }(yb)
                    },
                    onGaveUp: (yb, bb) => {
                      ! function(yb, bb, Wy) {
                        var Uy, hy;
                        console.warn(`${Nh} gave up reconnecting (${Wy.reason}, ${Wy.attempts} attempts)`, Wy.lastError), (0, EW.reportReconnectGaveUp)(Wy, vZ);
                        const fy = null !== (Uy = null === (hy = GZ) || void 0 === hy ? void 0 : hy.rejoin) && void 0 !== Uy ? Uy : null;
                        UP(yb, "gaveUp"), Mc();
                        const Zy = {
                          code: yb.dropCode,
                          name: null,
                          reason: Pf,
                          canReconnect: !bb,
                          automaticallyReconnect: !1,
                          requiresRefresh: !1
                        };
                        pc(Zy, bb ? null : fy, !1, {
                          reasonKey: of,
                          canPlayAgain: bb
                        })
                      }(Wy, yb, bb)
                    }
                  })
                };
                OZ = Wy, null !== RZ && RZ.conn === yb.conn && Wy.resume.onInitialInfo(RZ)
              }(oy, yb.endpoint), performance.mark(yZ), (0, Ob.g)("wasm_joined", ey), setTimeout((() => {
                mc === oy && (0, Ob.b)()
              }), 0), Ec(), console.info(`${Nh} joined ${yb.roomName} as ${oy.seat.sessionId} at ${Math.round(performance.now())} ms`);
            const ly = YZ;
            YZ = null, null !== ly && nc(Ey, ly.mask, ly.frames);
            const mb = FZ.get(oy.conn);
            return FZ.clear(), void 0 !== mb && (vP(null), Fc(oy.conn, mb.code, mb.reason)), oy
          } finally {
            var Ey;
            null === hy || void 0 === hy || hy.removeEventListener("abort", ey), TZ === Ky && Rc(mc, null), (null === (Ey = XZ) || void 0 === Ey ? void 0 : Ey.join) === Ky && (XZ = null)
          }
        }(yb.target, {
          signal: cb,
          rejoin: hy(yb.target),
          early: oy,
          pageReady: Zy
        });
        return ey = !0, {
          kind: "joined",
          game: By
        }
      } catch (Ey) {
        if (Ey instanceof DOMException && "AbortError" === Ey.name || Py()) return {
          kind: "RZ"
        };
        if (oc) return {
          kind: "stopped"
        };
        if (HZ && (HZ = !1, await fy().catch((yb => {
            console.warn(`${Nh} the cached traffic code could not be dropped`, yb)
          }))), null === await Yf) return {
          kind: "stopped"
        };
        if (Ey instanceof Ly.e) return Wy(Ey, performance.now() - qb), {
          kind: "failed",
          error: Ey,
          reloading: !1
        };
        if (Ey instanceof Yy.e && Ey.code === Uy.b.wasmClientNotAllowed.code && hc) return KP("this server refused the wasm client to this account", "refused"), {
          kind: "failed",
          error: Ey,
          reloading: !0
        };
        const yb = Ey instanceof Yy.e && Ey.code === Uy.b.outdatedVersion.code,
          bb = () => null === mc,
          hy = await xo({
            site: EW.JOIN_SITE,
            error: Ey,
            outdated: yb
          }, (() => {
            Wy(Ey, performance.now() - qb)
          }), bb);
        return {
          kind: "failed",
          error: Ey,
          reloading: hy
        }
      } finally {
        var Sy;
        ey || Ky.end(), DU.d.releaseHold(By);
        const yb = null === (Sy = oy) || void 0 === Sy ? void 0 : Sy.release();
        yb && (0, EW.reportUnusedSeat)(yb, vZ)
      }
    }

    function Tc(yb, bb) {
      return yb.stack = bb.stack, yb
    }

    function Vc(yb) {
      return yb.session ? (0, Ty.o)(Rf, yb.session.gameNameWithVariation) : Promise.resolve()
    }

    function Jc(yb, bb) {
      return (0, sb.j)(bb), new Promise(((Wy, Uy) => {
        const hy = () => {
          Uy((0, sb.e)(bb))
        };
        bb.addEventListener("abort", hy, {
          once: !0
        }), yb.then((yb => {
          bb.removeEventListener("abort", hy), Wy(yb)
        }), (yb => {
          bb.removeEventListener("abort", hy), Uy(yb)
        }))
      }))
    }

    function gP() {
      var yb, bb;
      return null !== (yb = null === (bb = yc) || void 0 === bb ? void 0 : bb.runsInJoinedGame()) && void 0 !== yb && yb
    }

    function Gc() {
      Oc(null)
    }

    function Oc(yb) {
      var bb, Wy, Uy;
      (function() {
        const yb = OZ;
        null !== yb && UP(yb, "left")
      }(), null === uf || uf.left) || (uf.left = !0, null === (Uy = (0, Ty.i)()) || void 0 === Uy || Uy.socketLeft(), (0, Ky.n)({
        websocketUrl: null
      }));
      TZ && (0, sb.f)(TZ, new DOMException("the join was left", "AbortError")), Mc(null !== yb), null === (bb = yc) || void 0 === bb || bb.qh();
      const hy = mc;
      null !== yb && DU.d.setGame(yb.game), Rc(null, null !== (Wy = null === yb || void 0 === yb ? void 0 : yb.controller) && void 0 !== Wy ? Wy : null), null === hy || void 0 === hy || hy.qh(), iP(0), (0, Bb.e)()
    }

    function Rc(yb, bb) {
      mc = yb, TZ = bb, null === mc && null === TZ && DU.d.setGame(void 0)
    }

    function vP(yb) {
      Rc(yb, TZ)
    }

    function iP(yb) {
      const bb = Jf;
      return null !== sf && !oc && null !== bb && !bb.isStopped && (!!sf(Yy.i, 0, (0, Yy.z)(yb)) && (KZ = !0, 0 === yb || PZ || uP(bb, !1, "all"), !0))
    }

    function Mc() {
      var yb, bb;
      arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (0, qU.f)();
      const Wy = null !== (yb = null === (bb = GZ) || void 0 === bb ? void 0 : bb.overflow) && void 0 !== yb ? yb : null;
      GZ = null, null !== Wy && (0, EW.reportEventOverflow)(Wy, vZ)
    }

    function Yc() {
      null !== mc || null !== TZ ? Gc() : zP()
    }

    function Xc(yb, bb) {
      console.warn(`${Nh} the event buffer refused records in ${bb} frames (categories ${yb})`), oc || (null !== GZ ? nc(GZ, yb, bb) : null !== TZ && function(yb, bb, Wy) {
        var Uy;
        const hy = function(yb, bb) {
          return null === yb ? "drop" : yb.activated ? "keep" : 0 !== (bb & ub.o.NetSession) ? "fail" : "drop"
        }((null === (Uy = XZ) || void 0 === Uy ? void 0 : Uy.join) === yb ? XZ : null, bb);
        "keep" === hy ? YZ = {
          mask: bb,
          frames: Wy
        } : "fail" === hy && (0, sb.f)(yb, new Error("the join's net session was lost to an event overflow"))
      }(TZ, yb, bb))
    }

    function nc(yb, bb, Wy) {
      const Uy = yb.overflow ??= {
        frames: 0,
        acks: 0,
        mask: 0,
        outcome: null
      };
      Uy.frames += Wy, Uy.acks++, Uy.mask |= bb;
      const hy = function(yb, bb, Wy) {
        if (0 === (yb & ub.o.NetSession)) return "none";
        const Uy = null !== bb.rejoinedAt && Wy - bb.rejoinedAt < sU;
        return null === bb.rejoin || Uy ? "fail" : "rejoin"
      }(bb, yb, performance.now());
      "none" !== hy && queueMicrotask((() => {
        if (GZ !== yb) return;
        const bb = "rejoin" === hy && performance.now() - nZ >= My.g;
        Uy.outcome = bb ? "rejoined" : "failed", pc(function(yb, bb) {
          return {
            code: 0,
            name: "eventOverflow",
            reason: "Your game fell behind the server.",
            canReconnect: yb,
            automaticallyReconnect: bb,
            requiresRefresh: !1
          }
        }(null !== yb.rejoin, bb), yb.rejoin, bb), Gc(), bb && (MZ = performance.now())
      }))
    }

    function uc(yb) {
      fc = yb, Zc && rP(Zc, yb)
    }

    function rP(yb, bb) {
      yb.style.visibility = bb ? "visible" : "hidden"
    }

    function Hc(yb) {
      var bb;
      const Wy = yb.roomName,
        Uy = null !== (bb = yb.joinOptions.lobbyName) && void 0 !== bb ? bb : null;
      return () => {
        mP(Wy, Uy)
      }
    }

    function aP() {
      return Wy.e(330).then((() => Wy(41830))).then((yb => {
        let {
          invalidateGuestTrafficCode: bb
        } = yb;
        return bb()
      })).catch((yb => {
        console.warn(`${Nh} the cached traffic code could not be dropped`, yb)
      }))
    }

    function Fc(yb, bb, Wy) {
      var hy, fy;
      let Zy = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (oc) return;
      if ((null === (hy = GZ) || void 0 === hy ? void 0 : hy.conn) !== yb) return void(null !== TZ && FZ.set(yb, {
        code: bb,
        reason: Wy
      }));
      const {
        rejoin: cb,
        game: Py,
        joinedAt: oy
      } = GZ;
      Mc(), WP();
      const By = (0, My.m)(bb, (0, EU.e)(yb));
      if (console.info(`${Nh} the game's connection closed with code ${bb} (${null!==(fy=By.name)&&void 0!==fy?fy:"unrecognised"})`), bb === Uy.b.gameOrPluginKick.code || Zy || (0, EW.reportDisconnect)(By, vZ, {
          closeReason: Wy,
          sinceJoinedMs: performance.now() - oy,
          game: Py
        }), By.requiresRefresh) {
        const yb = "outdatedVersion" === By.name,
          Wy = new Error(`the game's connection closed with code ${bb}`),
          Uy = () => null === GZ && null === TZ;
        return void xo({
          site: EW.JOIN_SITE,
          error: Wy,
          outdated: yb
        }, (() => {
          Uy() && pc(By, null, !1)
        }), Uy)
      }
      const Ky = By.canReconnect ? cb : null,
        ey = null !== Ky && By.automaticallyReconnect && performance.now() - nZ >= My.g;
      pc(By, Ky, ey)
    }

    function pc(yb, bb, Wy) {
      var Uy;
      let hy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        reasonKey: null,
        canPlayAgain: !1
      };
      if (cP) return;
      DU.d.unwantedLeave(Wy && null !== bb && 0 === rc.size), null === (Uy = uZ) || void 0 === Uy || Uy.abort();
      const fy = new AbortController;
      uZ = fy;
      const Zy = null === bb ? null : () => {
        fy.signal.aborted || (fy.abort(), bb())
      };
      if (Wy && null !== Zy) {
        nZ = performance.now();
        const yb = setTimeout(Zy, My.d);
        fy.signal.addEventListener("abort", (() => {
          clearTimeout(yb)
        }))
      }
      const cb = {
        code: yb.code,
        name: yb.name,
        reason: yb.reason,
        reasonKey: hy.reasonKey,
        reconnect: Zy,
        reconnecting: Wy,
        requiresRefresh: yb.requiresRefresh,
        canPlayAgain: hy.canPlayAgain
      };
      if (rc.size > 0)
        for (const oy of [...rc]) try {
          oy(cb)
        } catch (Py) {
          console.error(`${Nh} an unwanted-leave listener threw`, Py)
        } else ZU((0, UU.k)(yb, null !== Zy, Wy), fy.signal).then((bb => {
          bb && (null !== Zy ? Zy() : yb.requiresRefresh && (0, Qy.m)())
        }))
    }
    const Lc = {
      attachSocket: yb => Nc(yb),
      onConnection: yb => (pZ.add(yb), () => {
        pZ.delete(yb)
      }),
      sendRaw: (yb, bb) => {
        const Wy = uf;
        return null !== Wy && Wy.conn === yb && jo(Wy, bb)
      },
      leaveRoom: iP,
      closeSocket: yb => {
        var bb;
        (null === (bb = uf) || void 0 === bb ? void 0 : bb.conn) === yb && zP()
      },
      flushNet: Ic
    };

    function Qc(yb) {
      var bb;
      let {
        aux: Wy,
        payload: Uy
      } = yb;
      null === (bb = Jf) || void 0 === bb || bb.queueOptions(Wy, Uy)
    }

    function jP(yb, bb) {
      Qc(function(yb, bb) {
        return Wh = yb ? {
          preventMovement: bb
        } : null, yb ? Uh(bb) : {
          aux: nb.Nb.AdEnd,
          payload: bf
        }
      }(yb, bb))
    }

    function Dc(yb) {
      var bb;
      SZ = yb, null === (bb = Jf) || void 0 === bb || bb.setUiPrefs(yb)
    }

    function tP(yb, bb) {
      Rf.setMaster(yb, bb)
    }

    function wc(yb) {
      var bb;
      EZ = yb, null === (bb = Jf) || void 0 === bb || bb.setEnvPrefs(yb)
    }

    function kP(yb) {
      var bb;
      lZ = yb, null === (bb = Jf) || void 0 === bb || bb.setLookPrefs(yb)
    }

    function Nc(yb) {
      var bb;
      let Wy = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new URL(yb.url).origin,
        Uy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (yb.readyState === WebSocket.CLOSING || yb.readyState === WebSocket.CLOSED) return console.warn(`${Nh} a closing or closed socket can't be attached`), null;
      const hy = Jf;
      if (!hy || hy.isStopped) return console.warn(`${Nh} no core is running to attach a socket to`), yb.close(), null;
      if (null === (0, Ty.i)()) return console.warn(`${Nh} the game has not started to attach a socket to`), yb.close(), null;
      if (fZ > nb.t) return console.warn(`${Nh} this core has attached all the sockets it can; reload to play on`), yb.close(), null;
      if (KZ && !PZ && (uP(hy, !1, "all"), hy.isStopped || oc)) return yb.close(), null;
      zP();
      const fy = fZ++;
      if (!PP(hy, "open", fy, Uy ? nb.Jb.Resume : 0)) return yb.close(), null;
      XZ = null === TZ ? null : {
        join: TZ,
        conn: fy,
        activated: !1
      }, yb.binaryType = "arraybuffer";
      const Zy = new fW.c((() => {
          ! function(yb, bb) {
            if (uf !== bb || yb.isStopped || null === dc(bb, Zf)) return;
            bb.detach(), uf = null, Ac(yb, bb, Zf, "", !0), bb.ws.close()
          }(hy, cb)
        })),
        cb = {
          ws: yb,
          conn: fy,
          pending: [],
          pendingBytes: 0,
          left: !1,
          resume: Uy,
          token: null,
          detach: () => {
            Zy.dispose(), yb.removeEventListener("message", Py), yb.removeEventListener("open", oy), yb.removeEventListener("close", By)
          }
        },
        Py = yb => {
          if (yb.data instanceof ArrayBuffer) {
            var bb;
            const Wy = new Uint8Array(yb.data);
            Zy.heard(), cb.token = null !== (bb = (0, ZW.b)(Wy)) && void 0 !== bb ? bb : cb.token,
              function(yb, bb, Wy) {
                zo(yb, (() => {
                  yb.rings.net.writeFrame(bb, Wy) || yb.crash(Nb.o, `a socket frame of ${Wy.byteLength} bytes did not fit the net-in ring`)
                }));
                const Uy = yb.rings.net.cursor >= hf;
                (Uy || yb.netWrittenSinceFrame >= Uf || document.hidden && performance.now() - ZZ >= ef) && uP(yb, !1, "budget")
              }(hy, fy, Wy)
          }
        },
        oy = () => {
          for (const bb of cb.pending.splice(0)) yb.send(bb);
          cb.pendingBytes = 0
        },
        By = yb => {
          if (uf === cb && hy.rings.net.cursor > 0 && uP(hy, !1, "all"), uf === cb) {
            if (cb.detach(), uf = null, Ac(hy, cb, yb.code, yb.reason) || xP(hy, cb)) return;
            PP(hy, "close", fy), yo(fy, cb.left), Fc(fy, yb.code, yb.reason)
          }
        };
      return yb.addEventListener("message", Py), yb.addEventListener("open", oy), yb.addEventListener("close", By), uf = cb, null === (bb = (0, Ty.i)()) || void 0 === bb || bb.socketAttached(fy), (0, Ky.n)({
        websocketUrl: Wy
      }), fy
    }

    function zP() {
      const yb = uf;
      if (!yb) return;
      const bb = Jf,
        Wy = yb.resume;
      Wy && (Ic(), uf !== yb) || (uf = null, yb.detach(), yb.ws.close(), null !== bb && (xP(bb, yb) || Wy && Ac(bb, yb, cZ)) || (null !== bb && PP(bb, "close", yb.conn), yo(yb.conn, yb.left)))
    }

    function Ic() {
      const yb = Jf;
      null !== yb && !yb.isStopped && !oc && !PZ && yb.rings.net.cursor > 0 && uP(yb, !1, "all")
    }

    function xP(yb, bb) {
      var Wy;
      if (!bb.resume) return !1;
      const Uy = OZ;
      return null !== Uy && null !== bb.token && "" !== bb.token && (Uy.pendingHold = {
        conn: bb.conn,
        token: `${Uy.roomId}:${bb.token}`
      }), PP(yb, "close", bb.conn), null === (Wy = (0, Ty.i)()) || void 0 === Wy || Wy.socketDetached(bb.conn), !0
    }

    function Ac(yb, bb, Wy) {
      let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
        hy = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      const fy = dc(bb, Wy);
      if (null === fy) return !1;
      const {
        kW: Zy,
        token: cb,
        game: Py,
        joinedAt: oy
      } = fy;
      if (!PP(yb, "close", bb.conn, nb.z.Held)) return !0;
      console.warn(`${Nh} the game's connection ${hy?"went silent":`dropped with code ${Wy}`}, holding it`);
      const By = {
        closeReason: Uy,
        sinceJoinedMs: performance.now() - oy,
        game: Py
      };
      return (0, EW.reportDisconnect)((0, My.m)(Wy), vZ, By, hy ? "silent" : void 0), Zy.heldConn = bb.conn, Zy.dropCode = Wy, Zy.pendingHold = {
        conn: bb.conn,
        token: `${Zy.roomId}:${cb}`
      }, PZ || uP(yb, !1, "all"), !0
    }

    function dc(yb, bb) {
      const Wy = OZ,
        hy = GZ,
        fy = yb.token;
      return null === Wy || null === hy || oc || yb.left || hy.conn !== yb.conn || null === fy || "" === fy ? null : (0, Uy.d)(bb) && Wy.resume.canHoldSeat() ? {
        kW: Wy,
        token: fy,
        game: hy.game,
        joinedAt: hy.joinedAt
      } : null
    }

    function yo(yb, bb) {
      var Wy;
      null === (Wy = (0, Ty.i)()) || void 0 === Wy || Wy.closeGame(yb), (0, yf.b)().close(yb), bb || (0, Ky.n)({
        websocketUrl: null
      })
    }

    function bo() {
      const yb = ic;
      if (null === yb) return;
      const bb = (0, Ty.i)();
      oc || null === bb || bb.Jby(yb) ? ic = null : performance.now() - eZ.pause >= Kf && (eZ.pause = performance.now(), console.warn(`${Nh} the cmd ring had no room for SetPaused(${yb}): written before the next frame`))
    }

    function WP() {
      const yb = OZ;
      OZ = null, null === yb || void 0 === yb || yb.resume.dispose()
    }

    function UP(yb, bb) {
      var Wy, Uy;
      const {
        heldConn: hy
      } = yb, fy = yb.resume.resumingConn;
      yb.heldConn = 0, yb.pendingHold = null, OZ === yb && (OZ = null), "left" === bb ? yb.resume.qh() : yb.resume.dispose(), 0 === vc || (null === (Wy = uf) || void 0 === Wy ? void 0 : Wy.conn) !== vc || "left" === bb && (null === (Uy = mc) || void 0 === Uy ? void 0 : Uy.conn) === vc || co(vc), "gaveUp" === bb && 0 !== fy && co(fy), 0 !== hy && "refused" !== bb && (console.info(`${Nh} the game held through its drop ${"left"===bb?"was left":"is given up"}`), null === Jf || Jf.isStopped || PP(Jf, "close", hy), yo(hy, !1))
    }

    function hP(yb, bb) {
      const Wy = bb.indexOf(":");
      return {
        roomId: Wy < 0 ? yb.roomId : bb.slice(0, Wy),
        roomToken: bb.slice(Wy + 1)
      }
    }

    function fP(yb) {
      var bb;
      RZ = yb, yb.conn === vc && (vc = 0);
      const Wy = OZ;
      null !== Wy && (null === (bb = GZ) || void 0 === bb ? void 0 : bb.conn) === yb.conn && Wy.resume.onInitialInfo(yb)
    }
    async function ZP(yb, bb, Wy, Uy) {
      const {
        roomId: hy,
        roomToken: fy
      } = hP(yb, bb);
      if (null === Jf || Jf.isStopped || oc) throw new Error("no core is running to resume the game on");
      const {
        resumeRoom: Zy
      } = await Jc(Kc(), Wy);
      return Zy({
        ...Lc,
        attachSocket: bb => OZ !== yb || 0 === yb.heldConn ? (bb.close(), null) : Nc(bb, yb.endpoint, !0)
      }, yb.endpoint, hy, fy, {
        signal: Wy,
        onAttached: Uy
      })
    }

    function co(yb) {
      var bb;
      const Wy = uf;
      (null === Wy || void 0 === Wy ? void 0 : Wy.conn) === yb && (Wy.left = !0, null === (bb = (0, Ty.i)()) || void 0 === bb || bb.socketLeft(), (0, Ky.n)({
        websocketUrl: null
      }), iP(yb) ? setTimeout((() => {
        uf === Wy && zP()
      }), Yy.g) : zP())
    }

    function PP(yb, bb, Wy) {
      let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        hy = !1;
      return zo(yb, (() => {
        const {
          net: fy
        } = yb.rings;
        hy = "open" === bb ? fy.writeOpen(Wy, Uy) : fy.writeClose(Wy, Uy), hy || yb.crash(Nb.o, `a socket ${bb} did not fit the net-in ring`)
      })), hy
    }

    function oP(yb, bb) {
      let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if (BP()) return (0, EW.reportUnsupportedFallback)(yb, bb, Wy), void KP(`the wasm client can't run here (${bb})`, "unsupported");
      (0, EW.showUnsupported)(yb, "unsupported", bb, Wy)
    }

    function BP() {
      return hc && "wasm" !== (0, Pb.f)(window.location.search)
    }

    function KP(yb, bb) {
      console.warn(`${Nh} ${yb}: reloading on the JS client`), null !== bb && (0, Pb.k)(bb);
      const Wy = () => {
        (0, Qy.l)(Pb.r)
      };
      (0, EW.flushCrashReports)(Qy.e).then(Wy, Wy)
    }

    function eP(yb, bb, Wy, Uy) {
      return DZ(yb, bb, Wy, Uy)
    }

    function qo() {
      null === kc || null === Jf || Jf.isStopped || oc || null !== If || null === sf || (If = kc(sf, lP, mo().follow))
    }

    function sP() {
      var yb, bb, Wy;
      return null !== (yb = null === (bb = Gf) || void 0 === bb || null === (Wy = bb.textures) || void 0 === Wy ? void 0 : Wy.files()) && void 0 !== yb ? yb : null
    }

    function SP(yb) {
      Wy.e(248).then((() => Wy(39241))).then((bb => {
        let {
          setIconFileOverrides: Wy
        } = bb;
        Wy(yb)
      }), (yb => {
        console.warn(`${Nh} the item icons couldn't take the texture pack's files`, yb)
      }))
    }

    function EP(yb) {
      mo().follow((bb => {
        null !== bb && Promise.all([Promise.all([Wy.e(179), Wy.e(42)]).then((() => Wy(41858))), (0, dU.I)()]).then((yb => {
          let [{
            followPagePackFiles: Wy
          }, Uy] = yb;
          const hy = null === Uy || (0, kW.p)(Uy) ? "webgl" : Uy.backend;
          Wy(bb, jh.f, hy, (yb => {
            jh.f.setPageFiles(yb)
          }), lP)
        }), (bb => {
          console.warn(`${Nh} the texture pack's files didn't load: the previews draw the shipped ones until the next opens`, bb), yb()
        }))
      }))
    }

    function lP(yb, bb) {
      console.warn(`${Nh} ${yb}`, bb)
    }

    function mo() {
      return gZ ??= new sh({
        load: yb => Promise.all([Wy.e(179), Wy.e(47)]).then((() => Wy(41863))).then((bb => {
          let {
            startPageTexturePackFeed: Wy
          } = bb;
          return Wy(lP, yb)
        })),
        store: SW.d,
        KU: yb => {
          Yf.then((() => {
            (0, EW.reportTexturePackFeedLoadFailure)(yb, vZ)
          }))
        }
      }), gZ
    }
    const CP = yb => mo().follow(yb);

    function TP() {
      return mo().loaded()
    }
    const VP = function(yb, bb, Wy) {
        let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now(),
          hy = 0;
        return async function(fy, Zy) {
          let cb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
          const Py = ++hy,
            oy = Uy() + bb,
            By = await
          function(yb, bb) {
            let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
            return new Promise((Uy => {
              const hy = setTimeout((() => {
                Uy(null), yb.then((yb => {
                  null !== yb && (yb.joinedWithout(), Wy(yb))
                }))
              }), bb);
              yb.then((yb => {
                clearTimeout(hy), Uy(yb)
              }))
            }))
          }(yb(fy), bb, (yb => {
            Py === hy && cb() && Zy(yb, Uy() + bb).catch((yb => {
              Wy("the texture pack step after the join failed", yb)
            }))
          }));
          return null === By ? null : Zy(By, oy)
        }
      }((yb => (0, dy.p)(yb) ? mo().request() : mo().forJoin()), qf.d, lP),
      JP = function(yb, bb) {
        let Wy = !1;
        return {
          setGamePackConfirm: yb => {
            Wy = null !== yb, bb(yb)
          },
          packStep: (bb, Uy, hy) => yb(bb, Uy, (() => Wy && hy()))
        }
      }(VP, (yb => {
        mo().setGamePackConfirm(yb)
      }));

    function go(yb) {
      JP.setGamePackConfirm(yb)
    }
    async function GP(yb, bb, Uy) {
      const {
        gamePackSource: hy
      } = await Wy.e(331).then((() => Wy(41833)));
      await JP.packStep(yb, ((Wy, Uy) => Wy.packForGame(yb, hy(bb), Uy)), Uy)
    }

    function OP() {
      if (oc || null !== xc || null === NZ || null === IZ) return;
      const {
        backend: yb,
        canvas: bb,
        fallbackReason: Wy,
        adapterVendor: Uy
      } = IZ, hy = NZ;
      NZ = null;
      try {
        xc = hy({
          backend: yb,
          canvas: bb,
          fallbackReason: Wy,
          adapterVendor: Uy,
          joinedGame: () => oc ? null : mc,
          inGame: vo,
          shaderPackRuns: gP,
          writeCmd: (yb, bb, Wy) => null !== sf && sf(yb, bb, Wy),
          takeFailedMeshJobs: () => {
            var yb, bb;
            return null !== (yb = null === (bb = Ff) || void 0 === bb ? void 0 : bb.takeFailedMeshJobs()) && void 0 !== yb ? yb : 0
          }
        })
      } catch (fy) {
        console.error(`${Nh} the frame telemetry didn't start`, fy)
      }
    }

    function RP(yb, bb) {
      try {
        var Wy, Uy, hy;
        const fy = LZ && null !== (Wy = null === (Uy = Jf) || void 0 === Uy || null === (hy = Uy.lastHeader) || void 0 === hy ? void 0 : hy.renderPending) && void 0 !== Wy ? Wy : 0;
        (0, aU.g)(bb, yb, vo() && !(null !== Wh), fy)
      } catch (fy) {
        (0, aU.x)(), console.error(`${Nh} the quality steps stopped`, fy)
      }
    }

    function vo() {
      return null !== mc && Wc === mc && !oc
    }

    function io(yb) {
      const bb = xc;
      xc = null;
      try {
        null === bb || void 0 === bb || bb.stop()
      } catch {}
      console.error(`${Nh} the frame telemetry threw: it stops`, yb)
    }

    function MP(yb) {
      var bb, Wy, Uy;
      if ((0, yf.b)().fire(yb), "message" === yb.type) {
        if (oZ++, yb.vc === nb.vc.ERROR && null !== TZ) {
          var hy;
          const {
            text: bb,
            dropsCache: Wy
          } = (0, My.r)((new TextDecoder).decode(yb.payload));
          HZ ||= Wy, (null === (hy = XZ) || void 0 === hy ? void 0 : hy.conn) === yb.conn && (ac = bb)
        } else if (yb.vc === ub.Tb.ResumeComplete) {
          var fy;
          null === (fy = OZ) || void 0 === fy || fy.resume.onResumeComplete(yb.conn)
        }
        return
      }
      if (yb.phase === nb.A.Left) BZ = yb.conn;
      else if (yb.phase === nb.A.Activated) {
        var Zy;
        ob.c.reset(), (null === (Zy = XZ) || void 0 === Zy ? void 0 : Zy.conn) === yb.conn && (XZ.activated = !0)
      } else yb.phase === nb.A.Resumed ? function(yb) {
        var bb, Wy;
        vc = yb;
        const Uy = OZ;
        if (null === Uy || 0 === Uy.heldConn || (null === (bb = uf) || void 0 === bb ? void 0 : bb.conn) !== yb || !uf.resume || null === GZ) return;
        console.info(`${Nh} the game resumed on conn ${yb}, waiting for its InitialInfo`);
        const hy = Uy.heldConn;
        Uy.heldConn = 0, uf.resume = !1, GZ.conn = yb, (null === (Wy = JZ) || void 0 === Wy ? void 0 : Wy.conn) === hy && (JZ = {
          conn: yb,
          info: JZ.info
        }), ob.c.apply({
          shopInfo: null,
          _shopVersion: yW.c
        })
      }(yb.conn) : yb.phase === nb.A.Held ? function(yb) {
        var bb;
        const Wy = OZ,
          Uy = null !== (bb = null === Wy || void 0 === Wy ? void 0 : Wy.pendingHold) && void 0 !== bb ? bb : null;
        if (null !== Wy && null !== Uy && Uy.conn === yb) return Wy.pendingHold = null, Wy.heldConn = yb, vc = 0, console.warn(`${Nh} the core holds the game, reconnecting`), void Wy.resume.onDropped(Uy.token);
        if (yb === vc) {
          vc = 0;
          const bb = Jf;
          null === bb || bb.isStopped || (console.info(`${Nh} the core held again a resumed game the shell ended before its InitialInfo: closing it again`), PP(bb, "close", yb))
        }
      }(yb.conn) : yb.phase === nb.A.Closed && (null === (bb = OZ) || void 0 === bb || null === (Wy = bb.pendingHold) || void 0 === Wy ? void 0 : Wy.conn) === yb.conn && (OZ.heldConn === yb.conn ? function(yb) {
        const bb = yb.heldConn,
          Wy = yb.dropCode;
        UP(yb, "refused"), console.info(`${Nh} the core didn't hold the game through its drop: it hadn't started`), queueMicrotask((() => {
          yo(bb, !1), Fc(bb, Wy, "", !0)
        }))
      }(OZ) : OZ.pendingHold = null);
      const cb = Object.keys(nb.A).find((bb => nb.A[bb] === yb.phase)),
        Py = 0 === yb.code ? "" : ` (code ${yb.code})`;
      console.info(`${Nh} conn ${yb.conn}: ${null!==cb&&void 0!==cb?cb:yb.phase}${Py}, ${oZ} raw messages so far`), (null === (Uy = mc) || void 0 === Uy ? void 0 : Uy.conn) !== yb.conn || yb.phase !== nb.A.Left && yb.phase !== nb.A.Closed || vP(null), VZ !== yb.conn || yb.phase !== nb.A.Left && yb.phase !== nb.A.Closed || (VZ = null, null === mc && null === TZ && DU.d.setGame(void 0));
      for (const By of [...pZ]) try {
        By(yb.conn, yb.phase, yb.code)
      } catch (oy) {
        (0, rW.s)(oy, `${Nh} a connection listener threw`)
      }
    }

    function YP() {
      (0, dU.q)(), queueMicrotask((() => {
        try {
          DP()
        } catch (yb) {
          console.warn(`${Nh} stopping before the reload threw`, yb)
        }(0, EW.flushCrashReports)(Qy.e).then(Qy.m, Qy.m)
      }))
    }

    function XP() {
      const yb = Jf;
      null === yb || yb.isStopped || null === uf || PZ || !yb.hasPendingCommands() || uP(yb, !1, "budget")
    }

    function nP(yb) {
      var bb;
      const Wy = mc;
      yb.persisted || null === Wy || (null === (bb = uf) || void 0 === bb ? void 0 : bb.conn) !== Wy.conn || uf.left || Wy.qh()
    }

    function uP(yb, bb, Uy) {
      let hy = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const fy = PZ;
      PZ = !0;
      try {
        return function(yb, bb, Uy, hy) {
          var fy, Zy, cb;
          if (oc) return !1;
          if (zo(yb, HP), oc || yb.isStopped) return !1;
          LP() && UZ("modelsIn");
          bo(), ZZ = performance.now(), BZ = null, KZ = !1, (0, Cy.O)(), null === (fy = tZ) || void 0 === fy || fy.beforeFrame(), AW(ZZ, yb), (0, Cy.H)(ZZ, ao), cc = !0;
          const Py = bb && pP();
          let oy;
          try {
            oy = yb.frame(ZZ, Py, Uy)
          } finally {
            cc = !1
          }
          if (!oy) return !1;
          zc.observe(null !== (Zy = null === (cb = yb.lastHeader) || void 0 === cb ? void 0 : cb.chunksCancelled) && void 0 !== Zy ? Zy : 0);
          const By = yb.lastFrameKind,
            Ky = (0, Vb.b)(By);
          bb && (Uc = Ky);
          Ky && (0, mW.d)(ZZ);
          if (null !== xc) try {
            xc.frameRan(yb, ZZ, performance.now(), By)
          } catch (qb) {
            io(qb)
          }
          "drawn" === By && FP() && function() {
            for (const yb of [...xh]) yb()
          }();
          yb.forEachNetOut(QP);
          const ey = uf;
          null !== BZ && (null === ey || void 0 === ey ? void 0 : ey.conn) === BZ && jo(ey, Yy.m);
          bb && function(yb) {
            var bb, Uy, hy;
            if (null === mc || !pP()) return;
            const fy = yb.lastHeader,
              Zy = !LZ || 0 === (null === fy || void 0 === fy ? void 0 : fy.renderPending);
            !bP && Zy && (bP = !0, performance.mark(Wf));
            if (Wc === mc) return;
            const cb = null !== (bb = null === fy || void 0 === fy ? void 0 : fy.firstView) && void 0 !== bb ? bb : nb.P.NotYet;
            if (LZ && cb === nb.P.NotYet) return;
            if (yP && (!0 !== (null === (Uy = (0, Ty.i)()) || void 0 === Uy ? void 0 : Uy.isSessionLive) || !Zy)) return;
            Wc = mc;
            const Py = mc;
            if (setTimeout((() => {
                mc === Py && (0, Ob.d)()
              }), 0), null === (hy = yc) || void 0 === hy || hy.playable(), yP) return;
            yP = !0, performance.mark(bZ), (0, Jh.l)("render") && Wy.e(44).then((() => Wy(3892))).then((yb => {
              let {
                renderDebugPlayable: bb
              } = yb;
              bb()
            }), (yb => {
              console.warn("The render debug topic didn't load", yb)
            }));
            const oy = Math.round(performance.now());
            LZ && cb === nb.P.Backstop ? console.warn(`${Nh} playable at ${oy} ms on the first view's backstop: it wasn't drawn whole in time`) : console.info(`${Nh} playable at ${oy} ms${LZ?"":" (no renderer)"}`);
            setTimeout(wZ, 0), (0, Kb.d)().catch((yb => {
              console.error(`${Nh} item sprites didn't load, so item particles show the missing texture`, yb)
            }))
          }(yb);
          (0, Nb.M)(yb, {
            worldgen: Hf,
            mesh: Ff
          }),
          function(yb) {
            yb.forEachEvent(yh);
            for (const bb of dW) try {
              (0, kU.d)(bb)
            } catch (qb) {
              if ((0, rW.j)(qb)) {
                yb.crashOn(Nb.i, qb);
                break
              }
              console.error(`${zU} an input action listener threw`, qb)
            }
            dW.length = 0
          }(yb), hy && (0, Tb.e)();
          return !yb.isStopped
        }(yb, bb, "all" === Uy || yb.rings.net.cursor >= hf || yb.netKeptFrames >= ff, hy)
      } finally {
        PZ = fy
      }
    }

    function ro(yb) {
      console.error(`${Nh} a frame-start listener threw`, yb)
    }

    function HP() {
      var yb, bb, Wy, Uy;
      null === (yb = kZ) || void 0 === yb || yb.drain(sf, Sf), null === (bb = xZ) || void 0 === bb || bb.drain(sf), null === (Wy = Af) || void 0 === Wy || Wy.drain(performance.now()), tc(sf), null === (Uy = If) || void 0 === Uy || Uy.drain()
    }

    function ao(yb) {
      console.error(`${Nh} a before-frame listener threw`, yb)
    }

    function FP() {
      return LZ && pP()
    }

    function pP() {
      return df && LP()
    }

    function LP() {
      return null === kZ || kZ.startupDone
    }

    function QP(yb, bb) {
      const Wy = uf;
      (null === Wy || void 0 === Wy ? void 0 : Wy.conn) === yb ? jo(Wy, bb) : sZ++
    }

    function jo(yb, bb) {
      const {
        ws: Wy
      } = yb;
      return Wy.readyState === WebSocket.OPEN ? (Wy.send(bb), !0) : Wy.readyState === WebSocket.CONNECTING && yb.pendingBytes + bb.byteLength <= Bf ? (yb.pending.push(bb.slice()), yb.pendingBytes += bb.byteLength, !0) : (sZ++, !1)
    }

    function DP() {
      var yb, bb, Wy, Uy, hy, fy, Zy, cb, Py, oy, By, Ky, ey, qb, sy, Sy, Ey;
      oc = !0, (0, gf.c)(), WP(), (0, Cy.M)().unlockPointer(), (0, Cy.K)(null), null === (yb = wf) || void 0 === yb || yb(), wf = null, null === (bb = (0, Ty.s)()) || void 0 === bb || bb.followCursorAim(null), (0, Tb.C)(), (0, Ty.f)(), Rf.stop(), null === (Wy = AZ) || void 0 === Wy || Wy(), AZ = null, null === (Uy = dZ) || void 0 === Uy || Uy(), dZ = null, null === (hy = xc) || void 0 === hy || hy.stop(), xc = null, (0, mU.o)(null), null === (fy = rZ) || void 0 === fy || fy(), rZ = null, null === (Zy = Hf) || void 0 === Zy || Zy.stop(), Hf = null, null === (cb = Ff) || void 0 === cb || cb.stop(), Ff = null, null !== (Py = Gf) && void 0 !== Py && null !== (oy = Py.textures) && void 0 !== oy && oy.assets && SP(null), null === (By = Gf) || void 0 === By || By.stop(), Gf = null, Of = null;
      const ly = pf;
      pf = null, ly && (ly.stop(), NP(ly)), null === (Ky = xZ) || void 0 === Ky || Ky.dispose(), xZ = null, null === (ey = Af) || void 0 === ey || ey.dispose(), Af = null, kZ = null, null === (qb = zZ) || void 0 === qb || qb(), zZ = null, null === (sy = Df) || void 0 === sy || sy(), Df = null, null === (Sy = tZ) || void 0 === Sy || Sy.stop(), tZ = null, Gc(), DU.d.release(), zP();
      const mb = If;
      If = null;
      try {
        null === mb || void 0 === mb || mb.dispose()
      } catch (Vy) {
        console.warn(`${Nh} the sky's images didn't release`, Vy)
      }(0, HU.i)(null), null === (Ey = Tf) || void 0 === Ey || Ey.pagePreviews().endSession(null === (0, Wb.s)())
    }

    function to(yb, bb) {
      var Wy, Uy;
      const hy = null !== (Wy = null === (Uy = pf) || void 0 === Uy ? void 0 : Uy.details()) && void 0 !== Wy ? Wy : {},
        fy = yb.site === Ih || yb.site === xf || yb.site === EW.RENDER_RELOAD_SITE || yb.site === Ah ? yb.error instanceof WebAssembly.RuntimeError || yb.error instanceof jW.c : !(0, kW.s)(yb.error) && (0, Nb.H)(yb);
      fy && yb.error instanceof Error && (0, Wb.R)(yb.error);
      const Zy = fy || yb.site === Nb.s ? (0, EW.readTrap)(yb.error) : null,
        cb = null !== Zy && (0, Hb.g)(Zy.kind, Zy.refusedBytes) ? Zy.refusedBytes : 0,
        Py = null === Lf ? (0, nU.p)(function() {
          try {
            return (0, Wb.x)().buffer.byteLength
          } catch {
            return 0
          }
        }(), cb, null) : Lf.ceilingMayRefuse(cb),
        oy = cb > 0 && !Py && BP();
      var By;
      if (oy && ((0, Pb.k)("oom"), Pc = !0), DP(), (0, dU.e)()) return console.warn(`${Nh} the session stopped at ${yb.site} as the page reloads`, yb.error), void((0, kW.s)(yb.error) || (null === (By = yb.header) || void 0 === By ? void 0 : By.lastError) === nb.F.CoreBusy || (0, EW.reportStoppedCore)(yb, bb, Zy, {
        memoryDetails: hy,
        declined: oy
      }));
      (0, EW.showCrash)(yb, bb, Zy, {
        memoryDetails: hy,
        declined: oy
      })
    }

    function wP(yb) {
      const {
        input: bb,
        net: Wy,
        worker: Uy
      } = yb.rings, hy = yb.optionsDropped, fy = bb.dropped + hy + Wy.dropped + Uy.dropped + sZ;
      fy !== qc && function(yb, bb) {
        const Wy = performance.now();
        return !(Wy - eZ[yb] < Kf) && (eZ[yb] = Wy, console.warn(`${Nh} ${bb}`), !0)
      }("dropped", `${fy} records dropped so far (input ${bb.dropped}, options ${hy}, net ${Wy.dropped}, worker ${Uy.dropped}, net-out ${sZ})`) && (qc = fy)
    }

    function ko() {
      var yb, bb, Wy, Uy;
      const hy = (0, eW.e)(),
        fy = null === hy ? null : (0, sW.j)(hy);
      return {
        ...null === (yb = pf) || void 0 === yb ? void 0 : yb.pageKillSnapshot(),
        renderDistance: null === fy ? null : Math.min(fy.horizontal, null !== (bb = null === (Wy = pf) || void 0 === Wy ? void 0 : Wy.shedDistanceInUse()) && void 0 !== bb ? bb : 1 / 0),
        renderDistanceVertical: null !== (Uy = null === fy || void 0 === fy ? void 0 : fy.vertical) && void 0 !== Uy ? Uy : null,
        chunkCap: Qf,
        budgetBasis: jZ,
        renderBackend: (0, dU.C)()
      }
    }

    function NP(yb) {
      console.info(`${Nh} wasm memory at the session's end`, yb.details())
    }

    function zo(yb, bb) {
      if (!yb.isStopped) try {
        bb()
      } catch (Wy) {
        yb.crash(Nb.t, Wy)
      }
    }
    async function IP() {
      const {
        createWorldgenWorker: yb,
        worldgenWorkerReady: bb
      } = await (aZ ??= Wy.e(62).then((() => Wy(41870))).catch((yb => {
        throw aZ = null, yb
      })), aZ);
      return await bb(), yb
    }

    function xo(yb, bb, Wy) {
      return async function(yb, bb, Wy) {
        let {
          stop: Uy,
          stillWanted: hy
        } = Wy;
        const fy = await (0, SU.i)(yb, {
          stillWanted: hy,
          beforeReload: async () => {
            Uy(), await (0, EW.flushCrashReports)(Qy.e)
          },
          reload: Qy.m
        });
        return fy || bb(), fy
      }(yb, bb, {
        stop: DP,
        stillWanted: Wy
      })
    }

    function AP(yb) {
      ! function(yb, bb) {
        yb((yb => {
          null === yb || void 0 === yb || yb.subscribe((yb => {
            let {
              pack: Wy,
              gameSource: Uy
            } = yb;
            bb(null === Uy || null === Wy ? null : {
              pack: Wy,
              source: "" === Uy ? null : Uy
            })
          }))
        }))
      }(CP, yb)
    }
    let dP = !1,
      yB = null,
      bB = !1,
      Wo = !1;

    function Uo() {
      var yb;
      dP || (dP = !0, Sc("play", py), (0, Ky.m)(new So), cb.gameBridge.attach(ib), oo().catch((() => {})), (0, Ty.t)((yb => {
        xb(yb.setTextHost)
      })), yb = Zo, rc.add(yb), function(yb) {
        for (const bb of bc) yb(bb);
        WZ.add(yb)
      }((yb => {
        fo(ho[yb])
      })))
    }
    const ho = {
      booted: fy.i.INITIALISE_NOA,
      texturesIn: fy.i.REGISTRATION,
      modelsIn: fy.i.SETUP_LIFEFORMS
    };

    function fo(yb) {
      Py.g.EZ("matchmakeAndPlayStepCompleted", {
        step: yb,
        totalSubSteps: 1
      })
    }

    function Zo(yb) {
      if (!bB) return;
      const {
        gameNameWithVariation: bb,
        lobbyName: Wy
      } = (0, Ky.e)();
      if (yb.code === Uy.b.serverUpdating.code) return (new So).leaveLive(), void Po(bb, Wy);
      Py.g.EZ("unwantedLeftGame", {
        reason: cB(yb),
        requiresRefresh: yb.requiresRefresh,
        canReconnect: null !== yb.reconnect,
        automaticallyReconnect: yb.reconnecting,
        canPlayAgain: yb.canPlayAgain,
        gameNameWithVariation: bb,
        lobbyName: Wy
      }), (new So).leaveLive()
    }

    function cB(yb) {
      return null !== yb.reasonKey ? {
        translationKey: yb.reasonKey
      } : "gameOrPluginKick" === yb.name ? yb.reason : `You have disconnected from the server.\n${yb.reason}`
    }

    function Po(yb, bb) {
      var Uy;
      Uy = (0, oy.B)(yb, bb), Promise.resolve().then((() => Wy(1356))).then((yb => {
        let {
          navigatePreserveSearch: bb
        } = yb;
        bb(Uy)
      })).catch((yb => {
        console.warn("[bloxd-wasm-client] the page's router didn't navigate: loading the page instead", yb), (0, Qy.h)(Uy)
      }))
    }

    function oo() {
      return yB ??= Promise.all([Wy.e(63), Wy.e(66), Wy.e(65), Wy.e(64), Wy.e(76), Wy.e(75), Wy.e(227), Wy.e(200), Wy.e(224), Wy.e(225), Wy.e(43)]).then((() => Wy(39184))).then((yb => {
        try {
          yb.attachPlayGameSources()
        } catch (bb) {
          throw console.error("[bloxd-wasm-client] the play sources did not attach", bb),
            function(yb) {
              Yf.then((bb => {
                null === bb || bb.isStopped || oc ? console.warn(`${Nh} the play sources threw as they attached, after the client stopped`, yb) : to({
                  site: Ah,
                  error: yb,
                  header: null
                }, vZ)
              }))
            }(bb), bb
        }
      }), (yb => {
        throw yB = null, new Ty.c(yb)
      })), yB
    }
    async function Bo(yb, bb) {
      Uo(), bB = !0;
      let Wy = {
          place: yb.place,
          matchedAt: yb.matchedAt
        },
        Zy = yb.place.gameNameWithVariation,
        cb = null;
      const Py = await Cc({
        matchmake: async () => {
          let bb = Wy;
          if (Wy = null, null === bb) {
            const Wy = await yb.rematch();
            if (Wy.isError()) throw cb = Wy.asError().forward(), new Error(Wy.asError().message);
            bb = {
              place: Wy.getValue(),
              matchedAt: performance.now()
            }
          }
          Zy = bb.place.gameNameWithVariation;
          return {
            target: await (0, ny.f)(yb.userContext, bb.place, TP()),
            matchedAt: bb.matchedAt,
            freshMs: ny.b
          }
        },
        pageReady: oo,
        onFailure: (yb, bb) => {
          null === cb && function(yb, bb) {
            (0, EW.reportPageJoinFailure)(yb, vZ, bb)
          }(yb, {
            sinceJoinStartMs: bb,
            game: Zy
          })
        },
        rejoin: () => () => {},
        invalidateTrafficCode: () => yb.userContext.invalidateTrafficCode(),
        signal: bb
      });
      switch (Py.kind) {
        case "joined":
          return Wo || (Wo = !0, (0, sy.b)()), bB ? (fo(fy.i.CONNECT_TO_GAME_SERVER), fo(fy.i.SHADER_PACK), gP() && (0, qb.e)(yb.userContext, Zy).catch((yb => {
            console.error("Failed to report the shader pack session", yb)
          })), function() {
            const yb = function() {
              var yb, bb;
              return null !== (yb = null === (bb = yc) || void 0 === bb ? void 0 : bb.couldntRunInJoinedGame()) && void 0 !== yb ? yb : null
            }();
            null !== yb && (0, qb.b)(yb)
          }(), hy.c.value(void 0)) : so("The server ended the game as it joined");
        case "failed":
          if (!Py.reloading) {
            if (null !== cb) return cb;
            if ((Py.error instanceof Yy.n || Py.error instanceof Yy.e) && Py.error.code === Uy.b.serverUpdating.code) {
              if (bb.aborted) return so("Left the game while it loaded");
              const {
                gameNameWithVariation: yb,
                lobbyName: Wy
              } = (0, Ky.e)();
              return Po(yb, Wy), so("The server is updating")
            }
            return Py.error instanceof Ly.e ? hy.c.errorWithCode(Py.error.messageKey, fy.i.SHADER_PACK, {
              severity: "medium"
            }) : hy.c.errorWithCode(function(yb) {
              if (yb instanceof Yy.x || yb instanceof ly.d) return yb.message;
              if (Ko(yb)) return (0, My.p)(yb.code, yb.serverText);
              return My.i
            }(Py.error), fy.i.CONNECT_TO_GAME_SERVER, {
              error: eo(Py.error) ? Py.error : void 0,
              severity: qB(Py.error),
              gameServerUnreachable: (0, Xy.d)(Py.error),
              rematch: (0, Ey.e)(Py.error)
            })
          }
          return so("Reloading into the new build");
        case "stopped":
          return so("The game client stopped, and shows why");
        case "RZ":
          return so("Left the game while it loaded")
      }
    }

    function Ko(yb) {
      return yb instanceof Yy.n || yb instanceof Yy.e && "attach" !== yb.stage
    }

    function eo(yb) {
      return !(yb instanceof Yy.x) && !Ko(yb) && void 0 === (0, Xy.d)(yb)
    }

    function qB(yb) {
      return Ko(yb) ? yb instanceof Yy.e && (0, My.m)(yb.code).requiresRefresh ? "medium" : "low" : eo(yb) || yb instanceof Yy.x ? "medium" : "low"
    }

    function so(yb) {
      return hy.c.errorWithCode(yb, fy.i.CONNECT_TO_GAME_SERVER, {
        severity: "low",
        RZ: !0
      })
    }
    class So {
      qh(yb) {
        if ((0, mb.e)()) {
          var bb, Wy;
          if ((0, Zy.c)()) return;
          (0, ey.e)(!0 === (null === (bb = (0, mb.l)()) || void 0 === bb || null === (Wy = bb.currentViewer) || void 0 === Wy ? void 0 : Wy.unsavedChanges), yb)
        } else this.leaveLive()
      }
      leaveLive() {
        var yb;
        if (null === (yb = TP()) || void 0 === yb || yb.endGamePack(), !bB) return;
        bB = !1, (0, Sy.h)();
        try {
          var bb;
          null === (bb = (0, Ty.s)()) || void 0 === bb || bb.clearWasmCameraScreen()
        } catch (Uy) {
          console.error("[bloxd-wasm-client] the camera screen didn't clear", Uy)
        }
        const {
          gameNameWithVariation: Wy
        } = (0, Ky.e)();
        try {
          Yc()
        } finally {
          (0, Ky.n)({
            websocketUrl: null
          }), Py.g.EZ("leaveGame", {
            gameNameWithVariation: Wy
          }), (0, By.J)()
        }
      }
      isReplay() {
        return (0, mb.e)()
      }
    }
  },
  39514: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => hy,
      e: () => Uy,
      h: () => cb,
      j: () => Zy
    });
    const Uy = 12e4,
      hy = 3e4,
      fy = {
        hidden: () => "undefined" !== typeof document && document.hidden,
        listen: yb => "undefined" === typeof document ? () => {} : (document.addEventListener("visibilitychange", yb), () => {
          document.removeEventListener("visibilitychange", yb)
        })
      };

    function Zy(yb) {
      return `it sent no start within ${Math.round(yb)} ms`
    }
    class cb {
      constructor(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : fy;
        this.timeoutMs = yb, this.onTimeout = bb, this.now = Wy, this.visibility = Uy, this.timer = null, this.counted = 0, this.step = null, this.unlisten = void 0, this.unlisten = Uy.listen((() => {
          this.onVisibility()
        })), Uy.hidden() || this.next()
      }
      cancel() {
        this.pause(), this.unlisten()
      }
      onVisibility() {
        this.visibility.hidden() ? (this.counted += this.credit(), this.pause()) : null === this.timer && this.next()
      }
      credit() {
        const yb = this.step;
        return null === yb ? 0 : Math.min(this.now() - yb.at, yb.ms)
      }
      pause() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), this.step = null
      }
      next() {
        const yb = this.timeoutMs - this.counted;
        if (yb <= 0) return void this.arm(1e3, (() => {
          this.cancel(), this.onTimeout(this.counted)
        }));
        const bb = Math.min(yb, 5e3);
        this.step = {
          at: this.now(),
          ms: bb
        }, this.arm(bb, (() => {
          this.counted += this.credit(), this.step = null, this.next()
        }))
      }
      arm(yb, bb) {
        this.timer = setTimeout((() => {
          this.timer = null, bb()
        }), yb)
      }
    }
  },
  36403: (yb, bb, Wy) => {
    function Uy(yb) {
      return "string" !== typeof yb || 2 !== yb.length && ":" !== yb[2] ? null : yb[0] + yb[1]
    }

    function hy(yb) {
      const bb = Uy(yb);
      return "op" === bb || "ep" === bb || "wi" === bb || "pp" === bb || "fp:call" === yb || "fp:t" === yb
    }

    function fy(yb) {
      return "fp" === Uy(yb) && !hy(yb)
    }

    function Zy(yb) {
      if ("string" !== typeof yb) return !1;
      return "o" === yb[0] && "p" === yb[1] && (2 === yb.length || ":" === yb[2]) || "fp:call" === yb || "2" === yb || "t" === yb || "a" === yb
    }

    function cb(yb, bb) {
      return `~${function(yb){return yb.length<2?yb:":"===yb[1]?yb[0]:yb[0]+yb[1]}(bb)}~${yb}`
    }
    Wy.d(bb, {
      d: () => sy,
      f: () => Zy,
      j: () => fy,
      m: () => hy,
      q: () => cb,
      t: () => qb
    });
    const Py = 200;

    function oy(yb) {
      let bb = yb.length - 1;
      for (let Wy = 0; Wy < 2; Wy++) {
        const Wy = bb;
        for (; bb >= 0 && yb[bb] >= "0" && yb[bb] <= "9";) bb--;
        if (bb < 0 || bb === Wy || ":" !== yb[bb]) return -1;
        bb--
      }
      return bb + 1
    }

    function By(yb) {
      return "unknown" === yb || oy(yb) >= 0
    }

    function Ky(yb, bb) {
      return yb[bb] >= "\ud800" && yb[bb] <= "\udbff" && bb + 1 < yb.length && yb[bb + 1] >= "\udc00" && yb[bb + 1] <= "\udfff" ? 2 : 1
    }

    function ey(yb, bb, Wy) {
      return 2 === Wy ? 4 : yb[bb] <= "\x7f" ? 1 : yb[bb] <= "\u07ff" ? 2 : 3
    }

    function qb(yb) {
      let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0;
      if ("string" !== typeof yb || yb.length > Py || !By(yb)) return "t";
      let Wy = 2;
      for (let cb = 0; cb < yb.length;) {
        const bb = Ky(yb, cb);
        Wy += ey(yb, cb, bb), cb += bb
      }
      if (Wy <= bb) return `t ${yb}`;
      const Uy = oy(yb);
      let hy = bb - 2 - (yb.length - Uy);
      if (hy < 0) return "t";
      let fy = 0;
      for (; fy < Uy;) {
        const bb = Ky(yb, fy),
          Wy = ey(yb, fy, bb);
        if (Wy > hy) break;
        hy -= Wy, fy += bb
      }
      let Zy = "t ";
      for (let cb = 0; cb < fy; cb++) Zy += yb[cb];
      for (let cb = Uy; cb < yb.length; cb++) Zy += yb[cb];
      return Zy
    }
    const sy = 62
  },
  39388: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Uy
    });
    const Uy = {
      roomsPerServerMax: 30,
      timeForPlayerToConnect: 3e4,
      seatReservationSeconds: 15,
      healthWindowMs: 3e5,
      minAttemptsForRoomHealthWindow: 6,
      minAttemptsForServerHealthWindow: 20,
      minAttemptsForEmptyServerHealthWindow: 6,
      playerTimeoutThreshold: .8,
      gameServerMatchmakingHeartbeatInterval: 2e3,
      gameServerMatchmakingAnalyticsHeartbeatInterval: 1e4,
      SetRoomsHeartbeatBackoffMultiplier: 1.5,
      SetRoomsHeartbeatMaxInterval: 1e4,
      AnalyticsHeartbeatBackoffMultiplier: 1.2,
      AnalyticsHeartbeatMaxInterval: 3e4,
      defaultSubtractionFromMaxPlayersForSoftCap: 2,
      saveExpectedPlayersEvery: 1e4,
      unregisterFrozenGameServersIntervalMs: 1e3,
      gameServerFrozenThresholdMs: 3e4,
      matchmakingSkipsDrainingLobbies: !0,
      minNotDrainingShareToSkipDrainingLobbies: .5,
      drainingSessionLobbyFillMs: 3e5
    }
  },
  37400: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => fy
    });
    var Uy = Wy(2995);
    const hy = ["none", "idle", "now"];

    function fy() {
      const yb = () => (0, Uy.E)();
      return {
        memoryBytes: () => (0, Uy.x)().buffer.byteLength,
        reserveUpFront: bb => yb().Ty(bb),
        reserveAhead: bb => yb().Cy(bb),
        setCeiling: bb => {
          yb().Vy(bb)
        },
        lowWater: () => hy[yb().ly()] ?? "none",
        stats: () => function(yb) {
          const bb = new Uint32Array((0, Uy.x)().buffer, yb, 17),
            Wy = yb => bb[yb] ?? 0,
            hy = yb => ({
              upFront: Wy(yb),
              ahead: Wy(yb + 1),
              onDemandInFrame: Wy(yb + 2),
              onDemand: Wy(yb + 3)
            });
          return {
            memoryBytes: Wy(0),
            initialBytes: Wy(1),
            liveBytes: Wy(2),
            peakLiveBytes: Wy(3),
            headroomBytes: Wy(4),
            unusedBytes: Wy(5),
            ceilingBytes: Wy(6),
            reservesRefused: Wy(7),
            grows: hy(8),
            grownBytes: hy(12),
            allocationsRefused: Wy(16)
          }
        }(yb().Jy()),
        takeBallast: () => yb().gb(),
        takePressure: () => yb().Gy()
      }
    }
  },
  5898: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Ty,
      f: () => Vy,
      j: () => mb,
      m: () => ly
    });
    var Uy = Wy(5905);
    const hy = 6,
      fy = 3,
      Zy = 1,
      cb = 2,
      Py = 4,
      oy = 8,
      By = 16,
      Ky = 32,
      ey = 64,
      qb = 128,
      sy = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function Sy(yb) {
      if (!yb) return 0;
      const bb = sy.indexOf(yb);
      if (bb <= 0) throw new Error(`"${yb}" is not a shader pack hook function`);
      return bb
    }

    function Ey(yb) {
      if (0 === yb) return null;
      const bb = sy[yb];
      if (void 0 === bb) throw new Error(`${yb} is not a shader pack hook function id`);
      return bb
    }

    function ly(yb) {
      const bb = Uy.e.length;
      return {
        strict: yb >= bb,
        program: Uy.e[yb % bb]
      }
    }

    function mb(yb) {
      return Number(yb.strict) * Uy.e.length + Uy.e.indexOf(yb.program)
    }

    function Cy(yb) {
      return "" === yb ? [] : yb.split(" ")
    }

    function Ty(yb) {
      const bb = {
        variantFlags: new Uint8Array(hy),
        hooks: new Uint8Array(hy * fy),
        moduleCodes: Array(hy).fill(""),
        reads: Array(2 * hy).fill("")
      };
      for (const Wy of yb) {
        const yb = mb(Wy.key),
          Uy = (yb, bb) => null === Wy.hooks.surface || Wy.reads.fragment.includes(yb) ? 0 : bb;
        bb.variantFlags[yb] = (Wy.sceneDepth ? Zy : 0) | (Wy.movesVertices ? cb : 0) | (Wy.sunShadow ? Py : 0) | (Wy.airShadow ? oy : 0) | (Wy.discards ? By : 0) | Uy("localPosition", Ky) | Uy("enchantSpeed", ey) | Uy("enchantTier", qb), bb.hooks[yb * fy] = Sy(Wy.hooks.vertex), bb.hooks[yb * fy + 1] = Sy(Wy.hooks.surface), bb.hooks[yb * fy + 2] = Sy(Wy.hooks.light), bb.moduleCodes[yb] = Wy.moduleCode, bb.reads[2 * yb] = Wy.reads.vertex.join(" "), bb.reads[2 * yb + 1] = Wy.reads.fragment.join(" ")
      }
      return bb
    }

    function Vy(yb) {
      const {
        hooks: bb,
        moduleCodes: Wy,
        reads: Uy
      } = yb;
      return Array.from(yb.variantFlags, ((yb, hy) => {
        const Ky = hy * fy;
        return {
          key: ly(hy),
          hooks: {
            vertex: Ey(bb[Ky]),
            surface: Ey(bb[Ky + 1]),
            light: Ey(bb[Ky + 2])
          },
          moduleCode: Wy[hy],
          sceneDepth: 0 !== (yb & Zy),
          sunShadow: 0 !== (yb & Py),
          airShadow: 0 !== (yb & oy),
          movesVertices: 0 !== (yb & cb),
          discards: 0 !== (yb & By),
          reads: {
            vertex: Cy(Uy[2 * hy]),
            fragment: Cy(Uy[2 * hy + 1])
          }
        }
      }))
    }
  },
  39363: (yb, bb, Wy) => {
    Wy.d(bb, {
      B: () => Sy,
      D: () => qb,
      G: () => sy,
      d: () => hy,
      h: () => Uy,
      k: () => ey,
      n: () => By,
      o: () => Ey,
      p: () => fy,
      s: () => cb,
      u: () => Py,
      x: () => Zy
    });
    const Uy = 3,
      hy = 0,
      fy = 1,
      Zy = 2,
      cb = {
        uniform: 3,
        pb: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      Py = 10,
      oy = "BloxdPackInputs",
      By = "bloxdPackInputs",
      Ky = [{
        name: "seconds",
        type: "f32",
        offset: 0
      }, {
        name: "lit",
        type: "u32",
        offset: 4
      }, {
        name: "renderOffset",
        type: "vec3i",
        offset: 16
      }, {
        name: "sunDirection",
        type: "vec3f",
        offset: 32
      }, {
        name: "eyePosition",
        type: "vec3f",
        offset: 48
      }, {
        name: "shadowDirection",
        type: "vec3f",
        offset: 64
      }],
      ey = 80;

    function qb() {
      const yb = Ky.map((yb => {
        let {
          name: bb,
          type: Wy
        } = yb;
        return `    ${bb}: ${Wy},\n`
      })).join("");
      return `struct ${oy} {\n${yb}}\n@group(${Uy}) @binding(${hy}) var<uniform> ${By}: ${oy};\n`
    }

    function sy(yb, bb) {
      const Wy = new DataView(yb, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, ey),
        [Uy, hy, fy, Zy, cb, Py] = Ky;
      Wy.setFloat32(Uy.offset, bb.seconds, !0), Wy.setUint32(hy.offset, bb.lit ? 1 : 0, !0);
      for (let oy = 0; oy < 3; oy++) Wy.setInt32(fy.offset + 4 * oy, bb.renderOffset[oy], !0), Wy.setFloat32(Zy.offset + 4 * oy, bb.QZy[oy], !0), Wy.setFloat32(cb.offset + 4 * oy, bb.eyePosition[oy], !0), Wy.setFloat32(Py.offset + 4 * oy, bb.shadowDirection[oy], !0)
    }

    function Sy(yb) {
      const bb = new Uint32Array(Math.max(1, yb.length));
      return yb.forEach(((yb, Wy) => {
        let {
          id: Uy,
          rotation: hy
        } = yb;
        bb[Wy] = 65535 & Uy | (3 & hy) << 16
      })), bb
    }
    const Ey = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  5905: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Uy,
      f: () => hy,
      h: () => fy
    });
    const Uy = ["terrain", "liquid", "model"];

    function hy(yb) {
      return !yb.hooks.vertex && !yb.hooks.surface && !yb.hooks.light
    }

    function fy(yb, bb) {
      return "off" !== bb && (null === yb || yb.some((yb => yb.key.strict === ("strict" === bb) && !hy(yb))))
    }
  },
  39401: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Uy,
      g: () => fy,
      j: () => Py,
      n: () => Zy,
      r: () => hy
    });
    const Uy = /^alloc_failed (\d+) bytes$/;

    function hy(yb, bb) {
      return fy(yb, bb) ? `trap=alloc_failed ${bb} bytes` : `trap=${yb}`
    }

    function fy(yb, bb) {
      return "unreachable" === yb && bb > 0
    }

    function Zy(yb, bb, Wy) {
      const Uy = function(yb) {
        return yb instanceof WebAssembly.RuntimeError ? /unreachable/i.test(yb.message) ? "unreachable" : /out of bounds/i.test(yb.message) ? "out_of_bounds" : "runtime_error" : (yb instanceof RangeError || yb instanceof Error && "InternalError" === yb.name) && /call stack|recursion/i.test(yb.message) ? "stack_overflow" : "js_error"
      }(yb);
      if ("unreachable" !== Uy) return {
        kind: Uy,
        panic: null,
        refusedBytes: 0
      };
      const hy = bb(),
        fy = Wy();
      return {
        kind: Uy,
        panic: fy > 0 ? null : hy,
        refusedBytes: fy
      }
    }
    const cb = 300;

    function Py(yb) {
      return yb.replace(/\s*\n\s*/g, " / ").slice(0, cb)
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);