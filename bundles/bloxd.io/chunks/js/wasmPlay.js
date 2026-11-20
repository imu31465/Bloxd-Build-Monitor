export const id = 60;
export const ids = [60];
export const modules = {
  39213: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => kb,
      f: () => Wb
    });
    const kb = "The world isn't loaded, so no blocks can be seen.",
      Wb = "The world isn't loaded, so nothing in it can be seen."
  },
  38672: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => lb,
      f: () => Qb,
      j: () => mb
    });
    var kb = sb(2680);
    const Wb = 0,
      ab = 2,
      Tb = 3,
      Ub = 4;
    class Ib {
      constructor(bb, cb) {
        this.width = bb, this.GM = cb, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(bb * cb)
      }
      push(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const sb = this.data.subarray(this.next * this.width, (this.next + 1) * this.width);
        for (let kb = 0; kb < this.width; kb++) sb[kb] = bb[cb + kb];
        return this.next = (this.next + 1) % this.GM, this.size = Math.min(this.size + 1, this.GM), sb
      }
      lines() {
        const bb = [],
          cb = (this.next - this.size + this.GM) % this.GM;
        for (let sb = 0; sb < this.size; sb++) {
          const kb = (cb + sb) % this.GM * this.width;
          bb.push(Array.from(this.data.subarray(kb, kb + this.width)).join(","))
        }
        return bb
      }
    }

    function Hb(bb) {
      return Number.isFinite(bb) ? String(Math.round(10 * bb) / 10) : String(bb)
    }

    function fb(bb) {
      return Number.isFinite(bb) ? bb.toFixed(1) : String(bb)
    }
    class Mb {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.yE = 0, this.pastLimit = 0, this.lockSkips = 0, this.tQ = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
    }
    class Xb {
      constructor() {
        var bb = this;
        this.tally = new Mb, this.records = new Ib(10, 3600), this.events = new Ib(4, 12e3), this.event = new Float64Array(4), this.take = null, this.client = "js", this.started = !1, this.record = function(cb) {
          let sb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const [kb, Ib, Mb, Xb, nb, mb, lb, Qb, eb, Cb] = bb.records.push(cb, sb), Nb = bb.tally;
          switch (Nb.frames++, lb) {
            case Wb:
              return void Nb.idle++;
            case Ub:
              return void Nb.tQ++;
            case Tb:
              return Nb.lockSkips++, void(0 === Mb && 0 === Xb || bb.outlier(`lock skip dropped raw (${Hb(Mb)}, ${Hb(Xb)}) at ${fb(kb)} ms`))
          }
          Nb.looked++, Number.isFinite(Ib) && (Nb.dtMin = Math.min(Nb.dtMin, Ib), Nb.dtMax = Math.max(Nb.dtMax, Ib), Nb.dtSum += Ib, Ib > 0 && (Nb.peakRate = Math.max(Nb.peakRate, Math.hypot(nb, mb) / Ib))), Nb.raw[0] += Mb, Nb.raw[1] += Xb, Nb.turned[0] += nb, Nb.turned[1] += mb;
          const Vb = Math.abs(Mb) > Cb || Math.abs(Xb) > Cb,
            Lb = `raw (${Hb(Mb)}, ${Hb(Xb)}) over ${fb(Ib)} ms, limit ${Hb(Cb)}, filter v (${Qb.toFixed(3)}, ${eb.toFixed(3)}) px/ms, at ${fb(kb)} ms`;
          lb === ab ? (Nb.yE++, bb.outlier(`spike put right: ${Lb} -> turned (${Hb(nb)}, ${Hb(mb)})`)) : Vb ? (Nb.pastLimit++, bb.outlier(`kept past limit: ${Lb}`)) : Ib > 50 && (Nb.longFrames++, bb.outlier(`long frame: ${Lb}, turned in full`))
        }, this.onMouseMove = bb => {
          const cb = this.tally,
            {
              movementX: sb,
              movementY: kb
            } = bb;
          cb.events++;
          const Wb = Math.max(Math.abs(sb), Math.abs(kb));
          cb.eventMax = Math.max(cb.eventMax, Wb);
          const ab = null !== document.pointerLockElement,
            Tb = this.event;
          Tb[0] = bb.timeStamp, Tb[1] = sb, Tb[2] = kb, Tb[3] = ab ? 1 : 0, this.events.push(Tb), Wb >= 200 && (cb.bigEvents++, this.eventOutlier(`big mousemove (${sb}, ${kb}) at ${fb(bb.timeStamp)} ms, lock ${ab?"qU":"free"}`))
        }, this.onLockChange = () => {
          const bb = document.pointerLockElement;
          (0, kb.m)("look", `pointer lock ${bb?`gained (${bb.tagName.toLowerCase()})`:"lost"} at ${fb(performance.now())} ms`)
        }, this.onLockError = () => {
          (0, kb.m)("look", `pointer lock request failed at ${fb(performance.now())} ms`)
        }, this.onVisibility = () => {
          (0, kb.m)("look", `page ${document.visibilityState} at ${fb(performance.now())} ms`)
        }, this.flush = () => {
          this.takeRecords();
          const bb = this.tally;
          if (this.tally = new Mb, 0 === bb.events && 0 === bb.raw[0] && 0 === bb.raw[1] && 0 === bb.lockSkips && 0 === bb.yE && 0 === bb.dropped) return;
          const cb = bb.looked > 0 ? bb.dtSum / bb.looked : NaN,
            sb = [`${bb.frames} frames (${bb.looked} looked, ${bb.idle} idle${"wasm"===this.client?`, ${bb.tQ} carried`:""})`, `dt avg ${fb(cb)} min ${fb(bb.dtMin)} max ${fb(bb.dtMax)}, ${bb.longFrames} long`, `${bb.events} mousemoves (max ${Hb(bb.eventMax)} px, ${bb.bigEvents} big)`, `raw (${Hb(bb.raw[0])}, ${Hb(bb.raw[1])}) turned (${Hb(bb.turned[0])}, ${Hb(bb.turned[1])})`, `peak ${bb.peakRate.toFixed(2)} px/ms`, `put right ${bb.yE}, past limit ${bb.pastLimit}, lock skips ${bb.lockSkips}`, "lock " + (document.pointerLockElement ? "qU" : "free")];
          bb.dropped > 0 && sb.push(`${bb.dropped} doubled spike copies dropped`), bb.lost > 0 && sb.push(`${bb.lost} records lost`), bb.suppressed > 0 && sb.push(`${bb.suppressed} outlier lines not shown`), (0, kb.m)("look", `1s: ${sb.join("; ")}`)
        }, this.dump = () => [`look records (${this.client}): nowMs,dtMs,rawX,rawY,turnedX,turnedY,outcome,vX,vY,limit`, ...this.records.lines(), "mousemove events: timeStamp,movementX,movementY,locked", ...this.events.lines()].join("\n")
      }
      start(bb, cb) {
        this.client = bb, this.take = cb;
        const {
          screen: sb
        } = window;
        (0, kb.m)("look", `start: ${bb} client, dpr ${window.devicePixelRatio}, screen ${sb.width}x${sb.height}, pointer lock ${document.pointerLockElement?"qU":"free"}`), this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), (0, kb.k)("look", this.dump))
      }
      outlier(bb) {
        const cb = this.tally;
        cb.outliers >= 20 ? cb.suppressed++ : (cb.outliers++, (0, kb.m)("look", bb))
      }
      eventOutlier(bb) {
        const cb = this.tally;
        cb.eventLines >= 10 ? cb.suppressed++ : (cb.eventLines++, (0, kb.m)("look", bb))
      }
      takeRecords() {
        var bb;
        const cb = null === (bb = this.take) || void 0 === bb ? void 0 : bb.call(this);
        if (cb && cb.length >= 2) {
          this.tally.lost += cb[0], this.tally.dropped += cb[1];
          for (let bb = 2; bb + 10 <= cb.length; bb += 10) this.record(cb, bb)
        }
      }
      droppedCopy() {
        this.tally.dropped++
      }
      endTake() {
        this.takeRecords(), this.take = null
      }
    }
    let nb = null;

    function mb(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return nb ??= new Xb, nb.start(bb, cb), nb.record
    }

    function lb() {
      var bb;
      null === (bb = nb) || void 0 === bb || bb.endTake()
    }

    function Qb() {
      var bb;
      null === (bb = nb) || void 0 === bb || bb.droppedCopy()
    }
  },
  8827: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => kb
    });
    const kb = new Set(["chunkBorders"])
  },
  8960: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Tb,
      e: () => Wb,
      h: () => fb
    });
    var kb = sb(1544);

    function Wb(bb) {
      var cb;
      return {
        ...Tb.store,
        yaw: Tb.store.yaw + (null !== (cb = kb.b[bb].previewYaw) && void 0 !== cb ? cb : 0)
      }
    }
    const ab = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      Tb = {
        player: ab,
        store: {
          ...ab,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function Ub(bb, cb) {
      bb instanceof Promise ? bb.then(cb).catch((bb => {
        console.error("Couldn't open the preview", bb)
      })) : cb(bb)
    }
    class Ib {
      constructor(bb) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, Ub(bb, (bb => {
          this.closed ? bb.close() : (this.opened = bb, null !== this.size && bb.resize(this.size.width, this.size.height), null !== this.view && bb.show(this.view))
        }))
      }
      show(bb) {
        var cb;
        this.view = bb, null === (cb = this.opened) || void 0 === cb || cb.show(bb)
      }
      resize(bb, cb) {
        var sb;
        this.size = {
          width: bb,
          height: cb
        }, null === (sb = this.opened) || void 0 === sb || sb.resize(bb, cb)
      }
      close() {
        var bb;
        this.closed = !0, null === (bb = this.opened) || void 0 === bb || bb.close(), this.opened = null
      }
    }
    class Hb {
      constructor(bb) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(bb).then((bb => bb.ready)), Ub(bb, (bb => {
          this.closed ? bb.close() : (this.opened = bb, null !== this.size && bb.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var bb, cb;
        return null !== (bb = null === (cb = this.opened) || void 0 === cb ? void 0 : cb.isReady()) && void 0 !== bb && bb
      }
      setCosmetic(bb, cb) {
        var sb;
        null === (sb = this.opened) || void 0 === sb || sb.setCosmetic(bb, cb)
      }
      playEmote(bb) {
        var cb;
        null === (cb = this.opened) || void 0 === cb || cb.playEmote(bb)
      }
      setOrbit(bb) {
        var cb;
        null === (cb = this.opened) || void 0 === cb || cb.setOrbit(bb)
      }
      resetCamera() {
        var bb;
        null === (bb = this.opened) || void 0 === bb || bb.resetCamera()
      }
      async untilDrawn(bb) {
        var cb;
        await this.ready, await (null === (cb = this.opened) || void 0 === cb ? void 0 : cb.untilDrawn(bb))
      }
      resize(bb, cb) {
        var sb;
        this.size = {
          width: bb,
          height: cb
        }, null === (sb = this.opened) || void 0 === sb || sb.resize(bb, cb)
      }
      close() {
        var bb;
        this.closed = !0, null === (bb = this.opened) || void 0 === bb || bb.close(), this.opened = null
      }
    }
    const fb = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(bb) {
        this.host = bb
      }
      setDefaultHost(bb) {
        this.makeDefault = bb
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(bb) {
        return new Ib(this.current().openMob(bb))
      }
      openPet(bb) {
        return new Ib(this.current().openPet(bb))
      }
      openMobLineup(bb) {
        return new Ib(this.current().openMobLineup(bb))
      }
      openCharacter(bb, cb) {
        return new Hb(this.current().openCharacter(bb, cb))
      }
    }
  },
  38812: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Mb,
      e: () => Xb
    });
    var kb = sb(195),
      Wb = sb(214),
      ab = sb(1464),
      Tb = sb(2984),
      Ub = sb(1474),
      Ib = sb(36120),
      Hb = sb(667),
      fb = sb(38787);

    function Mb(bb) {
      (0, Tb.d)("matchmake_failed", bb, kb.k[kb.k.SHADER_PACK])
    }
    async function Xb(bb, cb) {
      var sb;
      const kb = null === (sb = await fb.shaderPackPage.preload()) || void 0 === sb ? void 0 : sb.listing,
        Tb = (0, Ib.e)();
      kb && null !== Tb && await Ub.b.reportShaderPackSession(bb, {
        packId: kb.packId,
        sourceHash: kb.sourceHash,
        game: (0, ab.e)(cb, Wb.B, "other"),
        playSessionId: Tb,
        visitSessionId: (0, Hb.c)()
      })
    }
  },
  38611: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Ub
    });
    var kb = sb(26),
      Wb = sb(1287),
      ab = sb(3243);
    const Tb = "Reconnecting";
    class Ub {
      constructor(bb) {
        this.hooks = bb, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = bb => {
          bb.persisted || this.leave()
        }, this.controller = new ab.b((cb => bb.reconnect(cb)), {
          isSessionLive: () => !this.ended && bb.isLive(),
          onPhaseChanged: bb => {
            this.onPhaseChanged(bb)
          },
          onReconnected: cb => {
            bb.onReconnected(cb)
          },
          onGaveUp: cb => {
            !this.ended && bb.isLive() && bb.onGaveUp(this.sessionBased, cb)
          }
        })
      }
      onInitialInfo(bb, cb) {
        this.graceMs = bb, this.sessionBased = cb
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(bb) {
        this.ended || this.controller.onConnectionLost(bb, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const bb = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          cb = this.controller.heldToken;
        this.end(), bb && "" !== cb && this.hooks.releaseSeat(cb)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(bb) {
        const cb = "frozen" === bb || "resuming" === bb;
        cb !== this.stopped && (this.stopped = cb, this.hooks.freeze(cb));
        const sb = "frozen" === bb || "resuming" === bb && this.frozen;
        sb && !this.frozen ? (0, Wb.n)(Tb) : !sb && this.frozen && (0, Wb.k)(Tb), this.frozen = sb, this.setListening("connected" !== bb), kb.j.QQ(ab.m, sb ? "frozen" : bb)
      }
      setListening(bb) {
        bb !== this.listening && (this.listening = bb, bb ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  38620: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => kb
    });
    class kb {
      constructor(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = bb, this.now = cb, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const bb = this.now(),
            cb = bb - this.lastCheckAt <= 2e3;
          this.lastCheckAt = bb;
          const sb = "visible" === document.visibilityState;
          !sb || cb && this.wasVisible || (this.resumedAt = bb), this.wasVisible = sb, sb && bb - this.lastHeardAt > 12e3 && bb - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = cb(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  8862: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => ab
    });
    var kb = sb(1058);

    function Wb() {
      var bb, cb;
      return null !== (bb = null === (cb = screen.orientation) || void 0 === cb ? void 0 : cb.type) && void 0 !== bb ? bb : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const ab = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && Wb() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = Wb(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, kb.dl)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const bb of this.resizers) bb()
          }
        }), 1e3)
      }
      heldSizer(bb) {
        let cb = !1;
        return () => {
          if (cb && this.isHeld()) return null;
          const sb = bb();
          return cb ||= null !== sb, sb
        }
      }
      onRelease(bb) {
        return this.resizers.add(bb), () => {
          this.resizers.delete(bb)
        }
      }
    }
  },
  38805: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Wb
    });
    let kb = !1;
    async function Wb(bb, cb) {
      if (!kb) {
        kb = !0;
        try {
          const [{
            reloadBloxd: kb
          }, {
            NotificationProvider: Wb
          }] = await Promise.all([Promise.resolve().then((() => sb(1704))), Promise.resolve().then((() => sb(1332)))]);
          if (!bb || !0 === await Wb.showPromptPopup({
              title: "Unsaved changes",
              subtitle: "Exit and lose your unsaved changes?",
              confirmText: "Exit",
              destructive: !0,
              cancelText: "Cancel",
              unlockPointerKey: "replayExitUnsavedChanges"
            }).getResult()) return void kb(cb)
        } catch (Wb) {
          console.error("Leaving the replay failed", Wb)
        }
        kb = !1
      }
    }
  },
  38633: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Hb,
      f: () => fb
    });
    var kb = sb(1694),
      Wb = sb(223),
      ab = sb(1670),
      Tb = sb(1750),
      Ub = sb(1208),
      Ib = sb(1126);
    async function Hb(bb, cb) {
      return function(bb) {
        return "object" === typeof bb && null !== bb && bb.code === Wb.d.VpnIp.code
      }(cb) && function(bb) {
        return ab.b.supports("appCheck") && bb.isLoggedIn() && !bb.hasTriedAppAttestation()
      }(bb) && await async function(bb) {
        try {
          const {
            token: cb
          } = await (0, Tb.e)(), {
            "3PSIDMCPP": sb
          } = await (0, Ib.postJsonWithMetricsCookiesAndJsonResponse)(`${Ub.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: cb
          }, {
            retries: 0
          }, bb.getMetricsCookies());
          return bb.setAppAttestedAuthJwt(sb), !0
        } catch (cb) {
          return cb instanceof kb.b && "failed" === cb.code ? (console.warn("The app couldn't get an App Check token:", cb), bb.markAppAttestationTried()) : console.error("Failed to attest the app:", cb), !1
        }
      }(bb)
    }
    async function fb(bb, cb) {
      try {
        return await cb()
      } catch (sb) {
        if (!await Hb(bb, sb)) throw sb
      }
      return cb()
    }
  },
  40474: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Ib
    });
    var kb = sb(1721);
    const Wb = 33177600,
      ab = 3e4;
    let Tb = !1;

    function Ub(bb, cb, sb) {
      if (!bb.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (Tb) return Promise.reject(new Error("A screenshot is already being taken"));
      Tb = !0;
      const kb = function(bb, cb, sb) {
        const kb = Math.max(1, bb),
          ab = Math.max(1, cb),
          Tb = Math.min(1, sb / Math.max(kb, ab), Math.sqrt(Wb / (kb * ab)));
        return {
          width: Math.max(1, Math.floor(kb * Tb)),
          height: Math.max(1, Math.floor(ab * Tb))
        }
      }(cb, sb, bb.maxTextureSize);
      return bb.resize(kb.width, kb.height), new Promise(((cb, sb) => {
        let kb, Wb = 2,
          Ub = null;
        const Ib = () => {
          var cb;
          Tb = !1, null === (cb = Ub) || void 0 === cb || cb(), clearTimeout(kb), bb.restoreSize()
        };
        kb = setTimeout((() => {
          Ib(), sb(new Error("No frame was drawn to capture"))
        }), ab), Ub = bb.onFrameDrawn((() => {
          if (Wb--, Wb > 0) return;
          const {
            canvas: kb
          } = bb, ab = {
            width: kb.width,
            height: kb.height
          };
          try {
            kb.toBlob((bb => {
              bb ? cb({
                blob: bb,
                ...ab
              }) : sb(new Error("The canvas gave no image"))
            }), "image/png")
          } catch (Tb) {
            sb(Tb)
          } finally {
            Ib()
          }
        }))
      }))
    }
    async function Ib(bb, cb, sb) {
      try {
        const Wb = await Ub(bb, cb, sb);
        (0, kb.c)(Wb.blob, `bloxd-screenshot-${Wb.width}x${Wb.height}-${Date.now()}.png`)
      } catch (Wb) {
        console.error("Error taking screenshot:", Wb)
      }
    }
  },
  38625: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Xb,
      d: () => fb
    });
    var kb = sb(223),
      Wb = sb(1767),
      ab = sb(1770),
      Tb = sb(8506);
    const Ub = [250, 500, 1e3, 2e3, 1250],
      Ib = 406;

    function Hb(bb) {
      if ("object" !== typeof bb || null === bb) return !1;
      const {
        code: cb,
        message: sb
      } = bb, Wb = kb.d.duplicateLobbyNameError;
      return (cb === Wb.code || cb === Ib) && (sb === Wb.text || sb === Wb.text + kb.j)
    }
    async function fb(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Wb.e;
      for (let Wb = 0;; Wb++) {
        let Tb;
        (0, ab.j)(cb);
        try {
          return await bb()
        } catch (kb) {
          if (Tb = Ub[Wb], void 0 === Tb || !Hb(kb)) throw kb
        }
        await sb(Tb, cb)
      }
    }
    const Mb = new Set([kb.d.duplicateLobbyNameError.code, kb.d.lobbyCantBeCreated.code, kb.d.roomDisposedEarlyError.code, kb.d.roomDisposedLateError.code, kb.d.serverRoomLimitReached.code]);

    function Xb(bb) {
      if (Hb(bb)) return !0;
      const cb = (0, Tb.g)(bb);
      return "number" === typeof cb && Mb.has(cb)
    }
  },
  8506: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => ab,
      g: () => Tb,
      h: () => Ub,
      j: () => Hb,
      m: () => Ib
    });
    var kb = sb(223),
      Wb = sb(4371);

    function ab(bb) {
      return Tb(bb) === kb.d.gameOrPluginOnPlayerAuthRejected.code
    }

    function Tb(bb) {
      return "object" === typeof bb && null !== bb ? bb.code : void 0
    }

    function Ub(bb) {
      var cb;
      return null !== (cb = Object.keys(Wb.d).find((cb => Wb.d[cb] === bb))) && void 0 !== cb ? cb : null
    }

    function Ib(bb) {
      return "notWhitelisted" === bb ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const Hb = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  38728: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Tb
    });
    var kb = sb(334),
      Wb = sb(167),
      ab = sb(37);

    function Tb() {
      ab.h.setItem(kb.Ob, ab.h.getItem(kb.Ob) + 1), (0, Wb.k)() && ab.h.setItem(kb.Nb, ab.h.getItem(kb.Nb) + 1)
    }
  },
  36112: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Cb,
      i: () => Nb
    });
    var kb = sb(1008),
      Wb = sb(635),
      ab = sb(344),
      Tb = sb(1013),
      Ub = sb(649),
      Ib = sb(683),
      Hb = sb(4257),
      fb = sb(117),
      Mb = sb(167),
      Xb = sb(1704),
      nb = sb(137),
      mb = sb(36120),
      lb = sb(37),
      Qb = sb(667),
      eb = sb(36127);

    function Cb() {
      var bb, cb;
      return [...null !== (bb = navigator.languages) && void 0 !== bb ? bb : [null !== (cb = navigator.language) && void 0 !== cb ? cb : "none"], "en-Gb"]
    }

    function Nb(bb, cb, sb, Nb, Vb) {
      const Lb = (0, kb.k)(cb) ? (0, kb.s)(cb) : null,
        ub = {
          cookies: (0, Xb.getAllCookiesForGameNameWithVariation)(cb),
          isMobile: (0, fb.isMobile)(),
          isUsingCustomGameTexturePack: null !== Lb && Vb(Lb),
          generalCookies: {
            joinDiscord: !!lb.h.getItem("DiscordPressed"),
            newGo: Hb.b,
            ...bb.getMetricsCookies(),
            trafficCode: Nb,
            compliance: fb.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, fb.getBrowserName)(),
            version: (0, fb.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, fb.getPlatformType)(),
            deviceType: (0, nb.c)()
          },
          isLoggedIn: bb.isLoggedIn(),
          lobbyName: sb,
          languages: Cb(),
          version: Wb.d,
          siteUsed: Mb.r,
          subsiteUsed: Mb.y,
          playSessionId: (0, mb.m)(cb),
          visitSessionId: (0, Qb.c)(),
          clientReason: Ub.n.reason,
          budgetBasis: (0, eb.f)(),
          ...null !== Ib.l && {
            diagClaim: Ib.l.claimId
          }
        };
      return null !== Lb && (0, ab.Fc)(Lb) ? (ub.lobbyName = (0, kb.i)(Lb, (0, kb.o)(cb), sb), {
        roomName: `classic_${Tb.f}`,
        joinOptions: ub
      }) : {
        roomName: cb,
        joinOptions: ub
      }
    }
  },
  40090: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Ub
    });
    var kb = sb(39213);

    function Wb(bb) {
      return {
        current: () => bb,
        watch: () => () => {}
      }
    }

    function ab() {}
    const Tb = Object.freeze([0, 0, 0]),
      Ub = {
        states: {
          health: Wb({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: Wb({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: Wb({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: Wb({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: Wb({}),
          creativeVisibility: Wb({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: Wb(null),
          heldItemAim: Wb({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: Wb(!1),
          gliderBoostFuel: Wb(0),
          flight: Wb({
            canFly: !1,
            flying: !1
          }),
          crafting: Wb({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: Wb({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: Wb({}),
          fullInventory: Wb(!1),
          crosshairTarget: Wb({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: Wb(!0),
          freeCamera: Wb({
            allowed: !1,
            movesFly: !1
          }),
          replay: Wb(null),
          replayEdits: Wb(null),
          replayRecorder: Wb({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: Wb(!1)
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
          selectHotbarSlot: ab,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: ab,
          setInventoryOpen: ab,
          changeIronChestPasskey: ab,
          dragReplayCamera: ab,
          applyTemporaryThirdPerson: ab,
          holdEmoteWheel: ab,
          recordFlyingMiddleText: ab,
          focusCrafting: ab,
          craftRecipe: () => ({
            tf: 0,
            TM: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: ab,
          setShopOpen: ab,
          buyShopItem: ab,
          sendChatMessage: ab,
          ignorePlayer: ab,
          reportPlayer: ab,
          reportWorldCodeChat: ab,
          requestDiscordReportKey: ab,
          reportLobbyOrGame: ab,
          playEmote: ab,
          updateMyCosmetic: ab,
          writeOnBoard: ab,
          writeBook: ab,
          writeNameTag: ab,
          setCustomLobbyBlock: ab,
          openIronChest: ab,
          sendCodeCollab: ab,
          clickCodeBlock: ab,
          bindCustomButtonKeys: ab,
          pressCustomButton: ab,
          moveReplayFreecam: ab,
          holdReplayFreecamVertical: ab,
          respawn: ab,
          wakeUp: ab,
          requestLeaderboard: ab,
          completeTask: ab,
          setServerCookie: ab,
          answerUiRequest: ab,
          chooseRewardedAd: ab,
          setCameraZoom: ab,
          setFreeCameraMovesFly: ab,
          setBlockHighlight: ab,
          setCrosshairInteractPrompt: ab,
          setLookSensitivity: ab,
          replayAction: ab,
          setReplayPlaying: ab,
          seekReplay: ab,
          setReplayCameraMode: ab,
          syncReplayCameraMode: ab,
          setReplayCameraKeyframe: ab,
          moveReplayCameraKeyframe: ab,
          deleteReplayCameraKeyframes: ab,
          setReplayPlaybackMark: ab,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: ab,
          exportReplayVideo: ab,
          toggleRecording: ab,
          saveClip: ab,
          setRecorderPrefs: ab,
          setReplayViewerOpen: ab
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => kb.e,
          worldCodeAiGameState: () => kb.f
        },
        lookups: {
          localPos: () => Tb,
          targetedBlockPos: () => null,
          blockAtViewPoint: () => null,
          momentumFrac: () => 0,
          screenPos: () => ({
            x: 0,
            y: 0
          }),
          cameraZoom: () => 0,
          freeCameraPos: () => null,
          blocksStandingOn: () => [],
          dropAhead: () => !1,
          replayCamera: () => null,
          leaveGameReloadsPage: () => !1,
          codeBlockClickable: () => !1
        }
      }
  },
  36127: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => ub,
      f: () => Lb,
      g: () => Vb
    });
    var kb = sb(223),
      Wb = sb(117),
      ab = sb(2693),
      Tb = sb(4146),
      Ub = sb(656),
      Ib = sb(36134);
    const Hb = 1048576,
      fb = 1024 * Hb,
      Mb = 400 * Hb,
      Xb = 147456,
      nb = .5,
      mb = 1.5 * fb,
      lb = 768 * Hb;

    function Qb(bb) {
      return Mb + bb * Xb
    }

    function eb(bb, cb, sb) {
      var Wb, Tb;
      let {
        footprintBytes: Ub,
        basis: Hb,
        namesLimit: eb
      } = function(bb) {
        const {
          os: cb,
          deviceMemory: sb
        } = bb;
        if ("ios" === cb) switch ((0, ab.g)(bb)) {
          case "ipad_m":
            return {
              footprintBytes: Qb(Ib.c), basis: "ipad-m", namesLimit: !1
            };
          case "ipad":
            return {
              footprintBytes: lb, basis: "ipad", namesLimit: !0
            };
          case "iphone_6gb":
            return {
              footprintBytes: mb, basis: "iphone-6gb", namesLimit: !0
            };
          case "iphone":
            return {
              footprintBytes: lb, basis: "iphone", namesLimit: !0
            }
        }
        return "number" === typeof sb && Number.isFinite(sb) && sb > 0 ? {
          footprintBytes: sb * fb * nb,
          basis: `memory-${sb}`,
          namesLimit: !0
        } : "android" === cb ? {
          footprintBytes: lb,
          basis: "android",
          namesLimit: !0
        } : {
          footprintBytes: Qb(Ib.e),
          basis: "unreported",
          namesLimit: !1
        }
      }(bb);
      if (sb) {
        const bb = Math.min(Ub, Qb(Ib.c));
        Ub = Mb + Math.max(0, bb - Mb) / 2, Hb += "+killed", eb = !0
      }
      null !== cb && Qb(cb) < Ub && (Ub = Qb(cb), Hb += "+learned", eb = !0);
      const Cb = function(bb) {
          const cb = Math.floor((bb - Mb) / Xb);
          return Math.min(Ib.c, Math.max(Ib.d, cb))
        }(Ub),
        Nb = (0, Ib.h)(Cb);
      return {
        footprintBytes: Ub,
        shedFootprintBytes: eb ? Math.max(Ub, Qb(Cb)) : null,
        chunkCap: Cb,
        maxHorizDistance: null !== (Wb = null === Nb || void 0 === Nb ? void 0 : Nb.horizontal) && void 0 !== Wb ? Wb : kb.e.maxChunkHorizAddDistance,
        maxVertDistance: null !== (Tb = null === Nb || void 0 === Nb ? void 0 : Nb.vertical) && void 0 !== Tb ? Tb : kb.e.maxChunkVertAddDistance,
        basis: Hb
      }
    }
    let Cb = null;

    function Nb() {
      return eb({
        os: (0, Wb.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, ab.k)()
      }, (0, Tb.d)(), (0, Ub.A)("wasm").length > 0)
    }

    function Vb() {
      return Cb ??= Nb(), Cb
    }

    function Lb() {
      var bb;
      return (null !== (bb = Cb) && void 0 !== bb ? bb : Nb()).basis
    }

    function ub(bb, cb) {
      return bb.setChunkCap(cb.chunkCap)
    }
  },
  40465: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Tb,
      h: () => ab
    });
    var kb = sb(2916),
      Wb = sb(1008);

    function ab(bb, cb) {
      return null !== bb.gameSource && (0, kb.m)(cb, bb.gameSource)
    }

    function Tb(bb, cb) {
      if (null === bb.gameSource || "" === bb.gameSource || null === cb) return !0;
      const sb = (0, Wb.k)(cb) ? (0, Wb.s)(cb) : null;
      return null !== sb && ab(bb, sb)
    }
  },
  40439: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Ub
    });
    var kb = sb(620),
      Wb = sb(40447),
      ab = sb(40406);
    async function Tb(bb) {
      const cb = await (0, Wb.j)({
        Helmet: sb(37547),
        Chestplate: sb(37549),
        Gauntlets: sb(37572),
        Leggings: sb(37558),
        Boots: sb(37566)
      } [kb.e[bb]]);
      try {
        return (0, ab.m)(cb)
      } finally {
        cb.close()
      }
    }
    const Ub = new class {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tb,
          cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Wb.n;
        this.decode = bb, this.register = cb, this.decoded = new Map
      }
      warm() {
        for (let bb = 0; bb < kb.e.length; bb++) this.part(bb).catch((cb => {
          console.warn(`The grayscale armour ${kb.e[bb]} image didn't decode ahead of use`, cb)
        }))
      }
      async load(bb, cb) {
        const {
          width: sb,
          height: ab,
          pixels: Tb
        } = await this.part(bb), Ub = new ImageData(function(bb, cb) {
          const sb = new Uint8ClampedArray(bb.length);
          for (let kb = 0; kb < bb.length; kb += 4) sb[kb] = Math.round(bb[kb] * cb[0] / 255), sb[kb + 1] = Math.round(bb[kb + 1] * cb[1] / 255), sb[kb + 2] = Math.round(bb[kb + 2] * cb[2] / 255), sb[kb + 3] = bb[kb + 3];
          return sb
        }(Tb, function(bb) {
          return [bb >>> 16 & 255, bb >>> 8 & 255, 255 & bb]
        }(cb)), sb, ab);
        let Ib;
        try {
          Ib = await createImageBitmap(Ub, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          })
        } catch (Hb) {
          throw new Wb.e("decode", `grayscale armour ${kb.e[bb]}`, {
            cause: Hb
          })
        }
        return {
          id: this.register(Ib),
          width: sb,
          height: ab
        }
      }
      part(bb) {
        const cb = this.decoded.get(bb);
        if (void 0 !== cb) return cb;
        const sb = this.decode(bb).catch((cb => {
          throw this.decoded.delete(bb), cb instanceof Wb.e ? cb : new Wb.e("decode", `grayscale armour ${kb.e[bb]}`, {
            cause: cb
          })
        }));
        return this.decoded.set(bb, sb), sb
      }
    }
  },
  40433: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Tb,
      g: () => Qb,
      j: () => fb,
      l: () => Mb,
      p: () => lb
    });
    var kb = sb(40391),
      Wb = sb(40439),
      ab = sb(40447);
    const Tb = 396,
      Ub = 1,
      Ib = 2,
      Hb = 3,
      fb = {
        Glb: 1,
        LifeformAtlas: 2,
        ArmourAtlas: 3,
        Cape: 4,
        GroupAtlas: 5,
        Particle: 6,
        AttachmentImage: 7,
        BlockImage: 8,
        GreyscaleArmour: 9
      },
      Mb = {
        File: 0,
        Item: 1
      },
      Xb = 0,
      nb = 1,
      mb = 2;

    function lb(bb) {
      const cb = (0, kb.m)();
      cb.catch((() => {}));
      let Wb = null;
      return {
        glbUrl: bb,
        lifeformAtlasUrl: async bb => (await cb).lifeformAtlasUrl(bb),
        armourAtlasUrl: async () => (await sb.e(201).then((() => sb(33944)))).armourAtlasUrl,
        capeUrl: async bb => (await cb).capeUrl(bb),
        attachmentImageUrl: async bb => (await cb).attachmentImageUrl(bb),
        blockImageUrl: async bb => (await cb).blockImageUrl(bb),
        groupAtlasUrl: async bb => (await cb).groupAtlasUrl(bb),
        particleTextureUrl: async bb => (await cb).particleTextureUrl(bb),
        particleItemUrl: async bb => (Wb ??= sb.e(38).then((() => sb(51096))).catch((bb => {
          throw Wb = null, bb
        })), (await Wb).particleItemUrl(bb))
      }
    }
    class Qb {
      constructor(bb, cb) {
        var sb, Tb, Ub, Ib;
        let Hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.sources = bb, this.onFailure = cb, this.loading = new Map, this.glbImages = new Map, this.glbWrittenImages = new Map, this.glbTakenCount = new Map, this.answered = new Map, this.ready = [], this.load = void 0, this.release = void 0, this.fetchFile = void 0, this.greyscaleArmour = void 0, this.Em = !1, this.load = null !== (sb = Hb.load) && void 0 !== sb ? sb : (bb, cb) => (0, ab.m)(bb, Hb.fetchImage, cb), this.release = null !== (Tb = Hb.release) && void 0 !== Tb ? Tb : ab.o, this.fetchFile = null !== (Ub = Hb.fetchFile) && void 0 !== Ub ? Ub : bb => (0, kb.j)(bb), this.greyscaleArmour = null !== (Ib = Hb.greyscaleArmour) && void 0 !== Ib ? Ib : Wb.c
      }
      get waiting() {
        return this.ready.length
      }
      get inFlight() {
        return this.loading.size
      }
      glbWritten(bb, cb) {
        this.glbWrittenImages.set(bb, Yb(cb))
      }
      glbTaken(bb, cb) {
        const sb = this.glbWrittenImages.get(bb);
        this.glbWrittenImages.delete(bb), cb && this.setGlbImages(bb, void 0 !== sb && sb.length > 0 ? sb : void 0)
      }
      setGlbImages(bb, cb) {
        var sb;
        this.glbTakenCount.set(bb, (null !== (sb = this.glbTakenCount.get(bb)) && void 0 !== sb ? sb : 0) + 1), void 0 === cb ? this.glbImages.delete(bb) : this.glbImages.set(bb, cb);
        const kb = [];
        for (const {
            key: Wb
          }
          of this.loading.values()) Wb.kind === fb.Glb && Wb.word === bb && kb.push(Wb);
        for (let Wb = this.ready.length - 1; Wb >= 0; Wb--) {
          const {
            key: cb,
            id: sb
          } = this.ready[Wb];
          cb.kind === fb.Glb && cb.word === bb && (this.ready.splice(Wb, 1), null !== sb && (this.answered.delete(sb), this.release(sb)), kb.push(cb))
        }
        this.loadAgain(kb)
      }
      onEvent(bb) {
        if (this.Em) return;
        const cb = new DataView(bb.buffer, bb.byteOffset, bb.byteLength);
        for (let sb = 0; sb + 8 <= bb.byteLength; sb += 8) {
          const bb = cb.getUint8(sb),
            kb = cb.getUint32(sb + 4, !0);
          if (bb === Hb) {
            this.answered.delete(kb), this.release(kb);
            continue
          }
          const Wb = {
            kind: cb.getUint8(sb + 1),
            index: cb.getUint8(sb + 2),
            word: kb
          };
          bb === Ub ? this.want(Wb) : bb === Ib && this.loading.delete(eb(Wb))
        }
      }
      reload(bb, cb) {
        const sb = sb => bb.includes(sb.kind) && (void 0 === cb || cb(sb)),
          kb = new Map;
        for (const Wb of this.answered.values()) sb(Wb) && kb.set(eb(Wb), Wb);
        for (const [Wb, {
            key: ab
          }] of this.loading) sb(ab) && kb.set(Wb, ab);
        this.loadAgain(kb.values())
      }
      loadAgain(bb) {
        for (const cb of bb) this.loading.delete(eb(cb)), this.want(cb)
      }
      drain(bb) {
        if (null !== bb)
          for (; this.ready.length > 0;) {
            if (!bb(Tb, 0, this.ready[0].record)) return;
            this.ready.shift()
          }
      }
      dispose() {
        this.Em = !0, this.loading.clear(), this.ready.length = 0;
        for (const bb of this.answered.keys()) this.release(bb);
        this.answered.clear()
      }
      want(bb) {
        const cb = eb(bb);
        if (this.loading.has(cb)) return;
        const sb = {
          key: bb
        };
        this.loading.set(cb, sb), this.loadKey(bb).then((kb => {
          this.Em || this.loading.get(cb) !== sb ? this.release(kb.id) : (this.loading.delete(cb), this.answered.set(kb.id, bb), this.ready.push({
            record: Nb(bb, Xb, kb),
            key: bb,
            id: kb.id
          }))
        }), (kb => {
          if (this.Em || this.loading.get(cb) !== sb) return;
          this.loading.delete(cb), this.onFailure({
            key: bb,
            error: kb
          });
          const Wb = kb instanceof ab.e && "decode" === kb.stage ? nb : mb;
          this.ready.push({
            record: Nb(bb, Wb, null),
            key: bb,
            id: null
          })
        }))
      }
      async loadKey(bb) {
        switch (bb.kind) {
          case fb.Glb:
            return this.load(await this.glbImage(bb), "none");
          case fb.LifeformAtlas:
            return this.load(Cb(await this.sources.lifeformAtlasUrl(bb.word), bb), "none");
          case fb.ArmourAtlas:
            return this.load(Cb(await this.sources.armourAtlasUrl(), bb), "none");
          case fb.Cape:
            return this.load(Cb(await this.sources.capeUrl(bb.word), bb), "none");
          case fb.AttachmentImage:
            return this.load(Cb(await this.sources.attachmentImageUrl(bb.word), bb), "none");
          case fb.GroupAtlas:
            return this.load(Cb(await this.sources.groupAtlasUrl(bb.word), bb), "none");
          case fb.BlockImage:
            return this.load(Cb(await this.sources.blockImageUrl(bb.word), bb), "none");
          case fb.Particle: {
            const cb = await (bb.index === Mb.Item ? this.sources.particleItemUrl(bb.word) : this.sources.particleTextureUrl(bb.word));
            return this.load(Cb(cb, bb), "flipY")
          }
          case fb.GreyscaleArmour:
            return this.greyscaleArmour.load(bb.index, bb.word);
          default:
            throw new ab.e("fetch", `image kind ${bb.kind}`, {
              cause: null
            })
        }
      }
      async glbImage(bb) {
        var cb;
        let sb = this.glbImages.get(bb.word);
        if (void 0 === sb) {
          const cb = this.glbTakenCount.get(bb.word),
            kb = Cb(await this.sources.glbUrl(bb.word), bb);
          try {
            sb = Yb(await this.fetchFile(kb))
          } catch (Wb) {
            throw new ab.e("fetch", kb, {
              cause: Wb
            })
          }
          this.glbTakenCount.get(bb.word) === cb && this.glbImages.set(bb.word, sb)
        }
        const kb = null === (cb = sb) || void 0 === cb ? void 0 : cb[bb.index];
        if (!kb) throw new ab.e("decode", `image ${bb.index} of file ${2147483647&bb.word}`, {
          cause: null
        });
        return kb
      }
    }

    function eb(bb) {
      let {
        kind: cb,
        index: sb,
        word: kb
      } = bb;
      return `${cb}:${sb}:${kb}`
    }

    function Cb(bb, cb) {
      if (null === bb) throw new ab.e("fetch", `no URL for image ${eb(cb)}`, {
        cause: null
      });
      return bb
    }

    function Nb(bb, cb, sb) {
      var kb, Wb, ab;
      const Tb = new Uint8Array(16),
        Ub = new DataView(Tb.buffer);
      return Ub.setUint8(0, bb.kind), Ub.setUint8(1, bb.index), Ub.setUint8(2, cb), Ub.setUint32(4, bb.word, !0), Ub.setUint32(8, null !== (kb = null === sb || void 0 === sb ? void 0 : sb.id) && void 0 !== kb ? kb : 0, !0), Ub.setUint16(12, Math.min(null !== (Wb = null === sb || void 0 === sb ? void 0 : sb.width) && void 0 !== Wb ? Wb : 0, 65535), !0), Ub.setUint16(14, Math.min(null !== (ab = null === sb || void 0 === sb ? void 0 : sb.height) && void 0 !== ab ? ab : 0, 65535), !0), Tb
    }
    const Vb = 1179937895,
      Lb = 1313821514,
      ub = 5130562;

    function Yb(bb) {
      var cb;
      const sb = new DataView(bb.buffer, bb.byteOffset, bb.byteLength);
      if (bb.byteLength < 20 || sb.getUint32(0, !0) !== Vb || sb.getUint32(16, !0) !== Lb) return [];
      let kb, Wb = 20 + sb.getUint32(12, !0);
      try {
        kb = JSON.parse((new TextDecoder).decode(bb.subarray(20, Wb)))
      } catch {
        return []
      }
      for (; Wb + 8 <= bb.byteLength && sb.getUint32(Wb + 4, !0) !== ub;) Wb += 8 + sb.getUint32(Wb, !0);
      const ab = null !== (cb = kb.images) && void 0 !== cb ? cb : [];
      if (0 === ab.length || Wb + 8 > bb.byteLength) return ab.map((() => null));
      const Tb = bb.subarray(Wb + 8, Math.min(bb.byteLength, Wb + 8 + sb.getUint32(Wb, !0)));
      return ab.map((bb => {
        var cb, sb, Wb;
        const ab = void 0 === bb.bufferView || null === (cb = kb.bufferViews) || void 0 === cb ? void 0 : cb[bb.bufferView];
        if (!ab || 0 !== (null !== (sb = ab.buffer) && void 0 !== sb ? sb : 0) || void 0 === ab.byteLength) return null;
        const Ub = null !== (Wb = ab.byteOffset) && void 0 !== Wb ? Wb : 0,
          Ib = Ub + ab.byteLength;
        return Ib <= Tb.byteLength ? Tb.slice(Ub, Ib) : null
      }))
    }
  },
  40099: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Tb,
      h: () => ab,
      l: () => Wb
    });
    let kb = null;

    function Wb(bb) {
      kb = bb
    }

    function ab(bb) {
      kb === bb && (kb = null)
    }

    function Tb() {
      var bb;
      null === (bb = kb) || void 0 === bb || bb()
    }
  },
  36233: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => fb,
      i: () => Xb,
      k: () => eb,
      l: () => Hb
    });
    var kb = sb(19),
      Wb = sb(2305),
      ab = sb(2310),
      Tb = sb(2319),
      Ub = sb(2367),
      Ib = sb(26);

    function Hb(bb, cb) {
      return (!(0, Tb.e)() || 0 === bb && 0 === cb) && (0, ab.r)(Wb.h.Joystick, 0, bb, cb, 0)
    }
    const fb = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function Mb(bb) {
      return bb.classList.contains("TouchKeyHit") && nb() ? null : bb.firstElementChild
    }

    function Xb(bb) {
      return bb.classList.contains("TouchKeyHit") && !bb.classList.contains("CanvasZone") ? {
        whole: !nb(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: mb(Mb(bb))
      }
    }

    function nb() {
      return document.documentElement.classList.contains(Ub.j)
    }

    function mb(bb) {
      return !(bb instanceof HTMLElement) || bb.offsetWidth <= 0 || bb.offsetHeight <= 0 ? null : {
        width: bb.offsetWidth,
        height: bb.offsetHeight
      }
    }

    function lb(bb, cb) {
      const sb = bb => Math.min(65535, Math.round(4 * bb));
      return (sb(bb) | sb(cb) << 16) >>> 0
    }

    function Qb(bb) {
      return {
        x: bb.left + bb.width / 2,
        y: bb.top + bb.height / 2,
        radius: Math.min(bb.width, bb.height) / 2
      }
    }
    const eb = new class {
      constructor(bb) {
        this.write = bb, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        cb ? this.elements.set(bb, {
          element: cb,
          hidden: sb
        }) : this.elements.delete(bb), this.measureOne(bb)
      }
      measure() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = bb.left, this.canvasTop = bb.top;
        for (const cb of this.elements.keys()) this.measureOne(cb)
      }
      hitZone(bb, cb) {
        let sb = null,
          kb = 1;
        for (const Wb of this.elements.keys()) {
          const ab = this.shown(Wb);
          if (!ab) continue;
          const {
            rect: Tb,
            element: Ub
          } = ab, Ib = Qb(Tb), Hb = Math.max(0, Tb.width / 2 - Ib.radius), fb = Math.max(0, Tb.height / 2 - Ib.radius), Xb = Math.max(0, Math.abs(bb - Ib.x) - Hb), nb = Math.max(0, Math.abs(cb - Ib.y) - fb), lb = Ub.firstElementChild;
          let eb = Math.hypot(Xb, nb) / Ib.radius;
          const Cb = mb(Mb(Ub));
          Cb && (eb = Math.min(eb, Math.max(2 * Math.abs(bb - Ib.x) / Cb.width, 2 * Math.abs(cb - Ib.y) / Cb.height))), eb < kb && (sb = {
            code: Wb,
            element: Ub,
            key: lb,
            ...Ib
          }, kb = eb)
        }
        return sb
      }
      measureOne(bb) {
        const cb = this.shown(bb);
        if (!cb) return void this.write(Wb.h.TouchZone, bb, 0, 0, 0);
        const {
          rect: sb,
          element: kb
        } = cb, ab = Qb(sb);
        this.write(Wb.h.TouchZone, bb, ab.x - this.canvasLeft, ab.y - this.canvasTop, lb(sb.width, sb.height));
        const Tb = mb(Mb(kb));
        this.write(Wb.h.TouchZone, 256 | bb, 0, 0, Tb ? lb(Tb.width, Tb.height) : 0)
      }
      shown(bb) {
        const cb = this.elements.get(bb),
          sb = kb.d.get("worldPanelHud");
        if (!cb || cb.hidden || "none" === sb) return null;
        const Wb = cb.element.getBoundingClientRect();
        return Wb.width <= 0 || Wb.height <= 0 ? null : {
          rect: Wb,
          element: cb.element
        }
      }
    }(ab.r);
    (0, Ib.l)(Ub.g, (() => {
      eb.measure()
    }))
  },
  40314: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Ib,
      e: () => Hb
    });
    var kb = sb(40323),
      Wb = sb(38633),
      ab = sb(36112),
      Tb = sb(40238),
      Ub = sb(40291);
    const Ib = kb.e.timeForPlayerToConnect - 1e4;
    async function Hb(bb, cb, sb, kb) {
      let Ib;
      try {
        Ib = await bb.getTrafficCode()
      } catch (mb) {
        throw console.error("[bloxd-wasm-client] could not get a traffic code", mb), new Ub.w(mb)
      }
      const {
        gameNameWithVariation: Hb,
        lobbyName: fb
      } = cb, Mb = () => {
        const cb = (0, ab.i)(bb, Hb, fb, Ib, (bb => {
          var cb;
          return null !== (cb = null === sb || void 0 === sb ? void 0 : sb.isUsingCustomGameTexturePack(bb)) && void 0 !== cb && cb
        }));
        cb.joinOptions.wasmClient = !0;
        const Wb = (0, Tb.D)();
        return null !== Wb && (cb.joinOptions.renderBackend = Wb), cb.joinOptions.joinAdHold = kb, cb
      }, {
        roomName: Xb,
        joinOptions: nb
      } = Mb();
      return {
        endpoint: cb.endpoint,
        roomName: Xb,
        joinOptions: nb,
        session: {
          gameNameWithVariation: Hb,
          lobbyName: fb,
          playerDbId: bb.whamm
        },
        optionsAfterRefusal: async cb => await (0, Wb.c)(bb, cb) ? Mb().joinOptions : null
      }
    }
  },
  4739: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Ub,
      c: () => Tb
    });
    var kb = sb(2916),
      Wb = sb(4747);
    let ab = null;

    function Tb(bb, cb) {
      ab = {
        pack: bb.metaData.id === kb.c ? null : bb,
        prompt: cb
      }
    }

    function Ub(bb, cb) {
      const sb = ab;
      null !== sb && (0, Wb.b)(sb.pack, bb) && (ab = null, cb && sb.prompt())
    }
  },
  40453: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => fb,
      h: () => ab,
      k: () => Mb,
      o: () => Tb
    });
    var kb = sb(40433),
      Wb = sb(40391);
    const ab = new class {
      constructor() {
        this.page = null, this.session = void 0, this.follower = null, this.isWanted = !1, this.listeners = new Set, this.pageListeners = new Set, this.wantedListeners = new Set
      }
      get current() {
        return void 0 === this.session ? this.page : this.session
      }
      setPageFiles(bb) {
        this.change((() => {
          this.page = bb
        }))
      }
      setSessionFiles(bb) {
        const cb = void 0 !== this.session && void 0 === bb;
        if (this.change((() => {
            this.session = bb
          })), cb)
          for (const sb of [...this.pageListeners]) sb()
      }
      showsPage() {
        return void 0 === this.session
      }
      onPageShown(bb) {
        return this.pageListeners.add(bb), () => {
          this.pageListeners.delete(bb)
        }
      }
      setFollower(bb) {
        this.follower = bb, this.startFollower()
      }
      wanted() {
        this.isWanted = !0;
        for (const bb of [...this.wantedListeners]) bb();
        this.startFollower()
      }
      onWanted(bb) {
        return this.wantedListeners.add(bb), () => {
          this.wantedListeners.delete(bb)
        }
      }
      onChange(bb) {
        return this.listeners.add(bb), () => {
          this.listeners.delete(bb)
        }
      }
      startFollower() {
        const bb = this.follower;
        this.isWanted && null !== bb && (this.follower = null, bb((() => {
          this.follower = bb
        })))
      }
      change(bb) {
        const cb = this.current;
        if (bb(), this.current !== cb)
          for (const sb of this.listeners) sb()
      }
    };

    function Tb(bb, cb) {
      return {
        ...bb,
        armourAtlasUrl: () => {
          var sb, kb;
          return null !== (sb = null === (kb = cb()) || void 0 === kb ? void 0 : kb.armourAtlasUrl()) && void 0 !== sb ? sb : bb.armourAtlasUrl()
        },
        lifeformAtlasUrl: sb => Ib(cb(), (bb => bb.LIFEFORM_ATLAS_PATHS[sb]), (() => bb.lifeformAtlasUrl(sb))),
        groupAtlasUrl: sb => Ib(cb(), (bb => bb.GROUP_ATLAS_PATHS[sb]), (() => bb.groupAtlasUrl(sb))),
        particleItemUrl: kb => Hb(cb(), (async () => {
          const bb = await sb.e(38).then((() => sb(51096))).catch((() => null));
          return (null === bb || void 0 === bb ? void 0 : bb.particleItemSprite(kb)) || null
        }), (() => bb.particleItemUrl(kb))),
        blockImageUrl: sb => Hb(cb(), (async () => {
          var bb, cb;
          return null !== (bb = null === (cb = await Ub()) || void 0 === cb ? void 0 : cb.blockImageName(sb)) && void 0 !== bb ? bb : null
        }), (() => bb.blockImageUrl(sb)))
      }
    }

    function Ub() {
      return (0, Wb.m)().catch((() => null))
    }

    function Ib(bb, cb, sb) {
      return Hb(bb, (async () => {
        var bb;
        const sb = await Ub(),
          kb = null === sb ? null : cb(sb),
          Wb = null !== (bb = null === kb || void 0 === kb ? void 0 : kb.slice(kb.lastIndexOf("/") + 1)) && void 0 !== bb ? bb : null;
        return "Player_Atlas" === Wb ? null : Wb
      }), sb)
    }
    async function Hb(bb, cb, sb) {
      if (null !== bb) {
        const sb = await cb(),
          kb = null === sb ? null : bb.textureUrl(sb);
        if (null !== kb) return kb
      }
      return sb()
    }
    const fb = 0;

    function Mb(bb) {
      const cb = [kb.j.ArmourAtlas, kb.j.LifeformAtlas, kb.j.GroupAtlas, kb.j.BlockImage, kb.j.Particle];
      bb.reload(cb, (bb => {
        switch (bb.kind) {
          case kb.j.Particle:
            return bb.index === kb.l.Item;
          case kb.j.LifeformAtlas:
            return bb.word !== fb;
          default:
            return !0
        }
      }))
    }
  },
  40332: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => kb,
      d: () => Ub,
      e: () => Tb,
      i: () => Wb,
      l: () => ab
    });
    const kb = 1e3;

    function Wb() {
      Ib((() => {
        window.location.reload()
      }))
    }

    function ab() {
      return new Promise((() => {}))
    }

    function Tb(bb) {
      Ib((() => {
        window.location.replace(bb(window.location.href))
      }))
    }

    function Ub(bb) {
      Promise.resolve().then((() => sb(131))).then((cb => {
        let {
          currentUrl: sb
        } = cb;
        Tb((() => sb.mergeSearchParamsInto(bb)))
      }), (() => {
        Tb((() => bb))
      }))
    }

    function Ib(bb) {
      null !== window.onbeforeunload ? Promise.resolve().then((() => sb(1704))).then((cb => {
        let {
          prepareForUnloadWithoutConfirmation: sb
        } = cb;
        try {
          sb()
        } catch (kb) {
          console.warn("[bloxd-wasm-client] prepareForUnloadWithoutConfirmation threw: leaving plainly", kb), window.onbeforeunload = null
        }
        bb()
      }), (() => {
        window.onbeforeunload = null, bb()
      })) : bb()
    }
  },
  4747: (bb, cb, sb) => {
    function kb(bb, cb) {
      return Wb(bb, cb)
    }

    function Wb(bb, cb) {
      if (bb === cb) return !0;
      if ("object" !== typeof bb || "object" !== typeof cb || null === bb || null === cb || Array.isArray(bb) !== Array.isArray(cb)) return !1;
      const sb = bb,
        kb = cb,
        ab = Object.keys(sb);
      return ab.length === Object.keys(kb).length && ab.every((bb => Object.prototype.hasOwnProperty.call(kb, bb) && Wb(sb[bb], kb[bb])))
    }
    sb.d(cb, {
      b: () => kb
    })
  },
  40368: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Yb,
      h: () => Lb,
      k: () => Qb,
      n: () => lb
    });
    var kb = sb(1767),
      Wb = sb(1770),
      ab = sb(38625),
      Tb = sb(38639),
      Ub = sb(1753),
      Ib = sb(40282),
      Hb = sb(40291);
    const fb = {
        "X-Requested-With": "XMLHtttpRequest"
      },
      Mb = 3,
      Xb = [500, 1500];

    function nb(bb) {
      const cb = new URL(bb);
      return {
        secure: "https:" === cb.protocol || "wss:" === cb.protocol,
        host: cb.host,
        pathname: cb.pathname.replace(/\/+$/, ""),
        search: cb.searchParams.toString()
      }
    }

    function mb(bb, cb, sb) {
      const {
        secure: kb,
        host: Wb,
        pathname: ab,
        search: Tb
      } = nb(bb);
      return `${kb?"https":"http"}://${Wb}${ab}/matchmake/${cb}/${encodeURIComponent(sb)}${Tb?`?${Tb}`:""}`
    }

    function lb(bb, cb) {
      var sb;
      const kb = null !== (sb = cb.protocol) && void 0 !== sb ? sb : "ws";
      if ("ws" !== kb) throw new Error(`seat reservation asks for the ${kb} transport`);
      const {
        secure: Wb,
        host: ab,
        pathname: Tb,
        search: Ub
      } = nb(bb), Ib = new URLSearchParams(Ub);
      Ib.append("sessionId", cb.sessionId), cb.reconnectionToken && Ib.append("reconnectionToken", cb.reconnectionToken);
      return `${Wb?"wss":"ws"}://${cb.room.publicAddress||`${ab}${Tb}`}/${cb.room.processId}/${cb.room.roomId}?${Ib.toString()}`
    }
    async function Qb(bb, cb, sb) {
      var Ib;
      let fb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const nb = null !== (Ib = fb.sleep) && void 0 !== Ib ? Ib : kb.e,
        lb = new Wb.b(fb.signal),
        Qb = new Ub.e(Tb.e, (() => {
          (0, Wb.h)(lb.controller, new Tb.i)
        })),
        {
          signal: Vb
        } = lb;
      try {
        return await (0, ab.d)((() => async function(bb, cb, sb, kb) {
          var ab;
          const {
            signal: Tb,
            sleep: Ub
          } = kb, Ib = mb(bb, "joinOrCreate", cb), fb = JSON.stringify(sb);
          let nb = null;
          for (let mb = 0; mb < Mb; mb++) {
            var lb;
            if (mb > 0) await Ub(null !== (lb = Xb[mb - 1]) && void 0 !== lb ? lb : 1500, Tb);
            let bb;
            (0, Wb.j)(Tb);
            try {
              bb = await Cb(Ib, fb, kb)
            } catch (Qb) {
              (0, Wb.j)(Tb), nb = eb(Qb);
              continue
            }
            const {
              response: cb,
              answer: sb,
              refusal: ab,
              lost: Mb
            } = bb;
            if (null === Mb) {
              if (null !== ab) throw Nb(ab, sb);
              if (cb.ok && null !== sb && hb(sb)) return sb;
              nb = new Hb.u(`seat request answered HTTP ${cb.status}${null===sb?" without JSON":" without a seat"}`, !1)
            } else nb = eb(Mb.error)
          }
          throw null !== (ab = nb) && void 0 !== ab ? ab : new Hb.u("seat request made no attempt", !1)
        }(bb, cb, sb, {
          ...fb,
          signal: Vb,
          sleep: nb
        })), Vb, nb)
      } finally {
        Qb.stop(), lb.unfollow()
      }
    }

    function eb(bb) {
      return new Hb.u(bb instanceof Error ? bb.message : String(bb), !0, bb)
    }
    async function Cb(bb, cb, sb) {
      var kb;
      const {
        signal: ab
      } = sb, Tb = null !== (kb = sb.fetch) && void 0 !== kb ? kb : fetch, Ub = await Tb(bb, {
        method: "POST",
        headers: {
          ...fb,
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: cb,
        credentials: "include",
        signal: ab
      }), {
        answer: Ib,
        lost: Hb
      } = await async function(bb) {
        try {
          const cb = await bb.json();
          return {
            answer: "object" === typeof cb && null !== cb ? cb : null,
            lost: null
          }
        } catch (cb) {
          return {
            answer: null,
            lost: cb instanceof SyntaxError ? null : {
              error: cb
            }
          }
        }
      }(Ub), Mb = null !== Ib && "string" === typeof Ib.error ? Ib.error : null;
      var Xb;
      null !== Mb && (null === (Xb = sb.onRefusal) || void 0 === Xb || Xb.call(sb));
      return (0, Wb.j)(ab), {
        response: Ub,
        answer: Ib,
        refusal: Mb,
        lost: Hb
      }
    }

    function Nb(bb, cb) {
      return new Hb.k(bb, "number" === typeof(null === cb || void 0 === cb ? void 0 : cb.code) ? cb.code : 0, (0, Ib.t)(bb).text)
    }
    class Vb extends Error {
      constructor(bb, cb) {
        super(bb), this.code = cb, this.name = "SeatHttpError"
      }
    }
    async function Lb(bb, cb, sb) {
      let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        response: Wb,
        answer: ab,
        refusal: Tb,
        lost: Ub
      } = await Cb(mb(bb, "reconnect", cb), JSON.stringify({
        reconnectionToken: sb
      }), kb);
      if (null !== Ub) throw Ub.error;
      if (!Wb.ok) {
        const bb = null !== ab && "number" === typeof ab.code && 0 !== ab.code ? ab.code : Wb.status;
        throw new Vb(`the seat's reconnect was refused: ${null!==Tb&&void 0!==Tb?Tb:`HTTP ${Wb.status}`}`, bb)
      }
      if (null !== Tb) throw Nb(Tb, ab);
      if (null === ab || !hb(ab)) throw new Error("the seat's reconnect answered " + (null === ab ? "without JSON" : "without a seat"));
      return {
        ...ab,
        reconnectionToken: sb
      }
    }
    const ub = 10;

    function Yb(bb) {
      if (bb.byteLength < 2 || bb[0] !== ub) return null;
      const cb = 2 + bb[1];
      return cb > bb.byteLength ? null : (new TextDecoder).decode(bb.subarray(2, cb))
    }

    function hb(bb) {
      const cb = bb.room;
      return "string" === typeof bb.sessionId && "object" === typeof cb && null !== cb && "string" === typeof cb.roomId && "string" === typeof cb.processId && "string" === typeof cb.name
    }
  },
  40020: (bb, cb, sb) => {
    sb.d(cb, {
      B: () => yb,
      E: () => Vb,
      H: () => Lb,
      J: () => Qb,
      N: () => gb,
      R: () => Db,
      S: () => mb,
      T: () => ib,
      X: () => Cb,
      Z: () => eb,
      ab: () => Nb,
      c: () => Wb,
      db: () => ub,
      e: () => Eb,
      i: () => Pb,
      m: () => nb,
      p: () => lb,
      q: () => tb,
      s: () => hb,
      u: () => Bb,
      y: () => Jb,
      z: () => Yb
    });
    var kb = sb(2740);
    const Wb = {
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

    function ab(bb, cb) {
      return !ArrayBuffer.isView(bb) || bb instanceof DataView ? Array.isArray(bb) ? bb.map((bb => cb(bb))) : bb : Array.from(bb, (bb => cb(bb)))
    }

    function Tb(bb) {
      if ("string" !== typeof bb) return bb;
      for (let cb = 0; cb < bb.length; cb++) {
        const sb = bb.charCodeAt(cb);
        if (sb >= 55296 && sb <= 57343) return Ib.decode(Ub.encode(bb))
      }
      return bb
    }
    const Ub = new TextEncoder,
      Ib = new TextDecoder;

    function Hb(bb) {
      return bb
    }
    let fb;

    function Mb(bb) {
      return null === bb || "object" !== typeof bb ? bb : [Tb(bb.YT), Tb(bb.hT)]
    }

    function Xb(bb) {
      return null === bb || "object" !== typeof bb ? bb : [ab(bb.XT, Hb), ab(bb.OH, Hb)]
    }

    function nb(bb) {
      return null === (cb = bb) || "object" !== typeof cb ? cb : [Tb(cb.jT), Tb(cb.pT)];
      var cb
    }

    function mb(bb) {
      return null === (cb = bb) || "object" !== typeof cb ? cb : [cb.id, cb.ET];
      var cb
    }

    function lb(bb) {
      return null === (cb = bb) || "object" !== typeof cb ? cb : [cb.Jc, Tb(cb.gc), cb.Bc, Tb(cb.Pc), cb.Gc, cb.Kc, cb.vT, Tb(cb.FT), Tb(cb.xT)];
      var cb
    }

    function Qb(bb) {
      return null === (cb = bb) || "object" !== typeof cb ? cb : [ab(cb.hf, Hb), cb.Jf];
      var cb
    }

    function eb(bb) {
      return null === (cb = bb) || "object" !== typeof cb ? cb : [ab(cb.GU, (bb => Tb(bb))), Tb(cb.KU), cb.ZU];
      var cb
    }

    function Cb(bb) {
      return null === (cb = bb) || "object" !== typeof cb ? cb : [ab(cb.iT, Hb), Tb(cb.OT), cb.GT];
      var cb
    }

    function Nb(bb) {
      return null === (cb = bb) || "object" !== typeof cb ? cb : [Tb(cb.mk), Tb(cb.lk)];
      var cb
    }

    function Vb(bb) {
      return null === (cb = bb) || "object" !== typeof cb ? cb : [Tb(cb.yU)];
      var cb
    }

    function Lb(bb) {
      return Tb(bb)
    }

    function ub(bb) {
      return null === (cb = bb) || "object" !== typeof cb ? cb : [Tb(cb.kM), Tb(cb.WM), Tb(cb.YT), Tb(cb.hT)];
      var cb
    }

    function Yb(bb) {
      return Mb(bb)
    }

    function hb(bb) {
      return Mb(bb)
    }

    function Jb(bb) {
      return null === (cb = bb) || "object" !== typeof cb ? cb : [Tb(cb.bU)];
      var cb
    }

    function gb(bb) {
      return bb
    }

    function Bb(bb) {
      return null === (cb = bb) || "object" !== typeof cb ? cb : [Tb(cb.BT), Tb(cb.tT)];
      var cb
    }

    function tb(bb) {
      return Tb(bb)
    }

    function yb(bb) {
      return Xb(bb)
    }

    function Pb(bb) {
      return Xb(bb)
    }

    function Db(bb) {
      return null === (cb = bb) || "object" !== typeof cb ? cb : [Tb(cb.iU)];
      var cb
    }

    function Eb(bb) {
      return (fb ??= (0, kb.e)().map((bb => bb.name)), fb).map((cb => {
        return "string" === typeof(sb = bb[cb]) ? Tb(sb) : ab(sb, Hb);
        var sb
      }))
    }

    function ib(bb) {
      return null === (cb = bb) || "object" !== typeof cb ? cb : [cb.AU, cb.wU, cb.rU];
      var cb
    }
  },
  40461: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => ab
    });
    var kb = sb(40465),
      Wb = sb(40453);
    const ab = new class {
      constructor(bb) {
        this.pack = bb, this.game = void 0, this.settle = null, this.hold = null, this.endedWhileHeld = !1, this.gameListeners = new Set, bb.onWanted((() => {
          this.release()
        }))
      }
      setGame(bb) {
        if (void 0 === bb && null !== this.hold) return void(this.endedWhileHeld = !0);
        this.hold = null, this.endedWhileHeld = !1;
        const cb = this.inGame();
        if (this.game = bb, this.update(), this.inGame() !== cb)
          for (const sb of this.gameListeners) sb()
      }
      inGame() {
        return void 0 !== this.game
      }
      onGameChange(bb) {
        return this.gameListeners.add(bb), () => {
          this.gameListeners.delete(bb)
        }
      }
      unwantedLeave(bb) {
        bb && void 0 !== this.game ? this.hold = {
          game: this.game
        } : this.release()
      }
      rejoinHold() {
        return this.hold
      }
      releaseHold(bb) {
        null !== bb && bb === this.hold && this.release()
      }
      release() {
        if (null === this.hold) return;
        const bb = this.endedWhileHeld;
        this.hold = null, this.endedWhileHeld = !1, bb && this.setGame(void 0)
      }
      setSettled(bb) {
        this.settle = bb, this.update()
      }
      update() {
        void 0 === this.game ? this.pack.setSessionFiles(void 0) : null !== this.settle && (0, kb.d)(this.settle.state, this.game) && this.pack.setSessionFiles(this.settle.files)
      }
    }(Wb.h)
  },
  40275: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      followPageUiPack: () => PH,
      packForGame: () => yH,
      playWasmGame: () => wH,
      prefetchWasmPreviews: () => wU,
      setGamePackConfirm: () => xI,
      startWasmPlay: () => GH,
      startWasmPreviews: () => AU
    });
    var kb = sb(223),
      Wb = sb(1255),
      ab = sb(195),
      Tb = sb(38648),
      Ub = sb(1870),
      Ib = sb(26),
      Hb = sb(4408),
      fb = sb(1302),
      Mb = sb(1702),
      Xb = sb(1312),
      nb = sb(38805),
      mb = sb(38812),
      lb = sb(38728),
      Qb = sb(36120),
      eb = sb(38625),
      Cb = sb(8506),
      Nb = sb(38639),
      Vb = sb(40120),
      Lb = sb(4498),
      ub = sb(40014),
      Yb = sb(40090),
      hb = sb(40020);
    const Jb = {
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
        lobbyLeaderboardRows: !0,
        freeCamera: !0
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
        buyShopItem: !0,
        setFreeCameraMovesFly: !0,
        setBlockHighlight: !0
      },
      queries: {
        enchantingOffer: !0,
        worldCodeAiChunk: !0,
        worldCodeAiGameState: !0
      },
      lookups: {
        momentumFrac: !0,
        localPos: !0,
        targetedBlockPos: !0,
        blockAtViewPoint: !0,
        screenPos: !0,
        codeBlockClickable: !0,
        blocksStandingOn: !0,
        dropAhead: !0,
        replayCamera: !0,
        leaveGameReloadsPage: !0,
        freeCameraPos: !0
      }
    };

    function gb(bb) {
      const cb = {
        ...Yb.b[bb]
      };
      for (const sb of Object.keys(Jb[bb])) delete cb[sb];
      return cb
    }

    function Bb() {
      var bb, cb;
      return null === (bb = null === (cb = (0, ub.h)()) || void 0 === cb ? void 0 : cb.localPlayerAlive()) || void 0 === bb || bb
    }

    function tb() {
      var bb, cb;
      return null !== (bb = null === (cb = (0, ub.h)()) || void 0 === cb ? void 0 : cb.localDeaths()) && void 0 !== bb ? bb : null
    }
    const yb = {
        current: Bb,
        watch: bb => {
          let cb = Bb(),
            sb = tb();
          return (0, Lb.C)((() => {
            const kb = Bb(),
              Wb = tb(),
              ab = null !== Wb && null !== sb && Wb !== sb;
            sb = Wb, ab ? (cb || bb(!0), bb(!1), kb && bb(!0), cb = kb) : kb !== cb && (cb = kb, bb(kb))
          }))
        }
      },
      Pb = {
        states: {
          ...gb("states"),
          localPlayerAlive: yb
        },
        events: {
          ...gb("events"),
          localPlayerAliveSet: {
            watch: yb.watch
          }
        },
        commands: {
          ...gb("commands"),
          respawn: () => {
            var bb;
            null === (bb = (0, ub.h)()) || void 0 === bb || bb.respawn()
          },
          playEmote: bb => {
            var cb;
            null === (cb = (0, ub.h)()) || void 0 === cb || cb.send(hb.c.PlayEmote, (0, hb.E)({
              yU: bb
            }))
          },
          applyTemporaryThirdPerson: bb => {
            var cb;
            let {
              durationMs: sb
            } = bb;
            null === (cb = (0, ub.h)()) || void 0 === cb || cb.thirdPersonFor(sb)
          },
          bindCustomButtonKeys: bb => {
            var cb;
            null === (cb = (0, ub.h)()) || void 0 === cb || cb.bindCustomButtonKeys(bb)
          },
          pressCustomButton: bb => {
            var cb;
            let {
              id: sb,
              down: kb
            } = bb;
            null === (cb = (0, ub.h)()) || void 0 === cb || cb.pressCustomButton(sb, kb)
          },
          setLookSensitivity: () => {},
          wakeUp: bb => {
            const cb = (0, hb.R)({
                iU: bb
              }),
              sb = () => {
                const bb = (0, ub.h)();
                return !(null !== bb && void 0 !== bb && bb.isSessionLive) || bb.send(hb.c.StopSleeping, cb)
              };
            if (!sb()) {
              const bb = (0, Lb.C)((() => {
                sb() && bb()
              }))
            }
          },
          setCameraZoom: bb => {
            var cb;
            null === (cb = (0, ub.h)()) || void 0 === cb || cb.setCameraZoom(bb)
          }
        },
        queries: gb("queries"),
        lookups: {
          ...gb("lookups"),
          cameraZoom: () => {
            var bb, cb;
            return null !== (bb = null === (cb = (0, ub.h)()) || void 0 === cb ? void 0 : cb.cameraZoom()) && void 0 !== bb ? bb : 0
          }
        }
      };
    var Db = sb(40282),
      Eb = sb(40291),
      ib = sb(40294),
      Ob = sb(40314),
      Gb = sb(1266),
      Kb = sb(131),
      Zb = sb(4257),
      zb = sb(3531),
      qb = sb(1170);
    const db = {
      Yf: () => (0, Gb.d)(),
      inbuiltOverwritten: () => Zb.f,
      reflectApplyHit: () => qb.b,
      definerHit: () => Kb.currentUrl.c,
      emitReplaced: () => (0, Ib.c)(),
      confirmMesh: () => (0, zb.c)()
    };
    var Ab = sb(40301),
      wb = sb(40332);
    var rb = sb(19),
      ob = sb(1876),
      Sb = sb(1917),
      Rb = sb(1629),
      vb = sb(1965),
      Fb = sb(1197),
      xb = sb(1258),
      jb = sb(40259);

    function pb() {
      return xb.e.get().getCurrentLanguageCode()
    }

    function bc(bb) {
      const cb = () => {
        bb({
          translate: (bb, cb) => (0, Fb.u)(pb(), bb, cb),
          keyBindingText: bb => {
            const cb = (0, Sb.s)(bb, rb.d.get("isTouchScreen"));
            return null !== cb ? (0, Fb.y)(pb(), cb.translationKey, cb.params) : (0, Sb.n)((0, Sb.o)(bb))
          },
          isFriend: vb.e,
          hiddenNames: ob.b.shown,
          loadsFontRest: (0, jb.e)(pb())
        })
      };
      let sb = !1;
      const kb = () => {
          const bb = pb();
          (0, Fb.k)(bb).then((() => {
            sb || bb !== pb() || cb()
          }))
        },
        Wb = () => Rb.c.getSocialState().friends.map((bb => bb.name.toLowerCase())).sort().join(" ");
      let ab = Wb();
      cb(), kb();
      const Tb = [(0, xb.g)((() => {
        cb(), kb()
      })), (0, Ib.l)("customBindingsChanged", cb), (0, Ib.l)("appManagerUpdated|isTouchScreen", cb), (0, vb.d)((() => {
        const bb = Wb();
        bb !== ab && (ab = bb, cb())
      })), ob.b.subscribe(cb)];
      return () => {
        sb = !0;
        for (const bb of Tb) bb()
      }
    }
    var cc = sb(635),
      sc = sb(1008),
      kc = sb(1902),
      Wc = sb(334),
      ac = sb(3500),
      Tc = sb(35976),
      Uc = sb(3505),
      Ic = sb(38335),
      Hc = sb(4425),
      fc = sb(40189),
      Mc = sb(649),
      Xc = sb(696),
      nc = sb(701),
      mc = sb(1895),
      lc = sb(3535),
      Qc = sb(3043);
    let ec = null;
    var Cc = sb(1208),
      Nc = sb(1770),
      Vc = sb(4174),
      Lc = sb(3220),
      uc = sb(56),
      Yc = sb(326),
      hc = sb(312),
      Jc = sb(40150),
      gc = sb(4507);
    var Bc = sb(40335);
    class tc {
      constructor(bb, cb) {
        this.showView = bb, this.holdForAd = cb
      }
      pointerUnlockRequestsChanged() {
        (0, Jc.G)()
      }
      pointerLockDebugEntries() {
        return [{
          label: "Locked to the canvas",
          value: String((0, Jc.u)())
        }]
      }
      setGameViewShown(bb) {
        this.showView(bb)
      }
      setGameView(bb) {
        (0, Bc.i)(bb)
      }
      videoAdHold(bb, cb) {
        this.holdForAd(bb, cb)
      }
    }
    class yc {
      leave(bb) {
        ! function(bb) {
          if (null !== (0, Xb.d)().websocketUrl) try {
            (0, Lb.N)().leaveGame(bb)
          } finally {
            (0, Xb.o)({
              websocketUrl: null
            })
          }
        }(bb)
      }
      isReplay() {
        return !1
      }
    }
    class Pc {
      watchFrameStarts(bb) {
        return (0, Lb.v)(bb)
      }
      watchFrames(bb) {
        return (0, Lb.u)(bb)
      }
      watchTicks(bb) {
        return (0, Lb.C)(bb)
      }
    }
    var Dc = sb(1291),
      Ec = sb(40342);

    function ic(bb) {
      return bb >= 0 ? Math.min(1, bb) : 0
    }

    function Oc(bb, cb) {
      const {
        fade: sb
      } = bb;
      return null === sb || cb - sb.at >= sb.ms ? bb.volume : sb.from + (bb.volume - sb.from) * Math.max(0, (cb - sb.at) / sb.ms)
    }

    function Gc(bb) {
      const cb = Object.entries(bb),
        sb = new Uint32Array(cb.length);
      let kb = 0;
      for (const [Tb, [, Ub]] of cb.entries()) sb[Tb] = Ub.length, kb += Ub.length;
      const Wb = new Float64Array(3 * kb);
      let ab = 0;
      for (const [, Tb] of cb)
        for (const bb of Tb) Wb.set(bb, ab), ab += 3;
      return {
        blocks: cb.map((bb => {
          let [cb] = bb;
          return cb
        })).join("\0"),
        counts: sb,
        values: Wb
      }
    }
    class Kc {
      constructor(bb, cb) {
        this.core = bb, this.warn = cb, this.latest = 0
      }
      async feed() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zc;
        const cb = ++this.latest;
        let sb;
        try {
          sb = await bb()
        } catch (kb) {
          return void(this.core.isStopped || cb !== this.latest || this.warn("the block colours didn't load, so block particles draw grey", kb))
        }
        cb === this.latest && (this.core.setBlockColours(sb) || this.core.isStopped || this.warn("the core refused the block colours: block particles draw grey"))
      }
    }
    async function Zc() {
      return Gc((await sb.e(201).then((() => sb(33944)))).averageColors)
    }
    var zc = sb(4512),
      qc = sb(4517),
      dc = sb(40070),
      Ac = sb(35941),
      wc = sb(40240),
      rc = sb(624),
      oc = sb(36614),
      Sc = sb(620),
      Rc = sb(344),
      vc = sb(40221);
    const Fc = [3e4, 12e4, 3e5];
    class xc extends Error {}
    const jc = {
      mobTypes: rc.l,
      vehicleTypes: oc.e,
      mobAiStates: rc.i,
      playerPoses: Sc.s
    };
    var pc = sb(40207),
      bs = sb(40350),
      cs = sb(40359),
      ss = sb(40363),
      ks = sb(3243),
      Ws = sb(38611),
      as = sb(4536),
      Ts = sb(2305);
    const Us = Ts.z.KeysDisabled | Ts.z.LookFrozen | Ts.z.ClicksSuppressed,
      Is = ks.d;
    var Hs = (0, ss.c)("resumingConn");
    class fs {
      constructor(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.shell = bb, this.now = cb, this.session = void 0, this.attempt = null, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, Object.defineProperty(this, Hs, {
          writable: !0,
          value: 0
        }), this.drops = 0, this.session = new Ws.d({
          reconnect: bb => this.reconnect(bb),
          isLive: () => bb.isLive(),
          onReconnected: cb => {
            this.landed = cb, bb.onReconnected(cb), this.landIfResumed()
          },
          onGaveUp: (cb, sb) => {
            this.abortAttempt(), bb.onGaveUp(cb, sb)
          },
          freeze: cb => {
            bb.fL(cb), (0, as.d)(Us, cb ? Us : 0, "reconnectFreeze")
          },
          releaseSeat: bb => {
            this.releaseSeat(bb)
          }
        })
      }
      isResuming() {
        return this.session.isResuming()
      }
      get resumingConn() {
        return (0, cs.e)(this, Hs)[Hs]
      }
      canHoldSeat() {
        return this.session.canHoldSeat()
      }
      onInitialInfo(bb) {
        let {
          conn: cb,
          graceMs: sb,
          sessionBased: kb,
          replayOffer: Wb
        } = bb;
        this.session.onInitialInfo(sb, kb), this.isResuming() && (this.initialInfoConn = cb, this.initialInfoOffer = Wb, this.landIfResumed())
      }
      onResumeComplete(bb) {
        0 !== bb && (bb === (0, cs.e)(this, Hs)[Hs] ? ((0, cs.e)(this, Hs)[Hs] = 0, this.session.onResumed()) : this.isResuming() && (this.completedEarlyConn = bb))
      }
      onDropped(bb) {
        this.drops++, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, (0, cs.e)(this, Hs)[Hs] = 0, this.session.onConnectionLost(bb)
      }
      leave() {
        this.session.leave(), this.dispose()
      }
      dispose() {
        this.abortAttempt(), this.landed = null, this.completedEarlyConn = 0, (0, cs.e)(this, Hs)[Hs] = 0, this.session.end()
      }
      reconnect(bb) {
        const cb = this.attempt;
        if (null !== cb && this.awaitingJoinRoom(cb)) return cb.result;
        this.abortAttempt();
        const sb = new AbortController,
          kb = this.drops,
          Wb = {
            attachedAt: null
          },
          ab = this.shell.reconnect(bb, sb.signal, (() => {
            Wb.attachedAt = this.now()
          })).then((bb => {
            if (this.clearAttempt(Tb), this.drops !== kb) throw new Error("the resumed room dropped before its attempt settled");
            return bb
          }), (bb => {
            throw this.clearAttempt(Tb), bb
          })),
          Tb = {
            abort: sb,
            socket: Wb,
            result: ab
          };
        return this.attempt = Tb, ab
      }
      clearAttempt(bb) {
        this.attempt === bb && (this.attempt = null)
      }
      abortAttempt() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new DOMException("the reconnect attempt was given up", "AbortError");
        const cb = this.attempt;
        this.attempt = null, null === cb || void 0 === cb || cb.abort.abort(bb)
      }
      awaitingJoinRoom(bb) {
        const cb = bb.socket.attachedAt;
        return null !== cb && this.now() - cb < Is
      }
      releaseSeat(bb) {
        const cb = this.attempt,
          sb = null !== cb && this.awaitingJoinRoom(cb);
        this.abortAttempt(new Eb.r), sb || this.shell.releaseSeat(bb)
      }
      landIfResumed() {
        const bb = this.landed;
        if (null !== bb && bb.conn === this.initialInfoConn) {
          const cb = this.initialInfoOffer && this.completedEarlyConn !== bb.conn;
          if (this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, this.abortAttempt(), !cb) return void this.session.onResumed();
          (0, cs.e)(this, Hs)[Hs] = bb.conn, this.session.onResuming()
        }
      }
    }
    var Ms = sb(38620),
      Xs = sb(40368),
      ns = sb(36134),
      ms = sb(36127),
      ls = sb(4739),
      Qs = sb(4161),
      es = sb(3029),
      Cs = sb(40160),
      Ns = sb(656),
      Vs = sb(4239),
      Ls = sb(37),
      us = sb(40373),
      Ys = sb(40402),
      hs = sb(4189),
      gs = sb(2310),
      Bs = sb(1626),
      ts = sb(1651),
      ys = sb(1287),
      Ps = sb(137),
      Ds = sb(2654),
      Es = sb(2319),
      is = sb(4530);
    const Os = new Set([zc.qb.KeyDown, zc.qb.MouseMove, zc.qb.MouseDown, zc.qb.Wheel, zc.qb.TouchStart, zc.qb.TouchMove]);

    function Gs(bb) {
      return (bb.shiftKey ? zc.Fb.Shift : 0) | (bb.ctrlKey ? zc.Fb.Ctrl : 0) | (bb.altKey ? zc.Fb.Alt : 0) | (bb.metaKey ? zc.Fb.Meta : 0) | ("repeat" in bb && bb.repeat ? zc.Fb.Repeat : 0) | (bb.isTrusted ? 0 : zc.Fb.Untrusted)
    }

    function Ks(bb) {
      return "touchOnly" !== (0, Ps.c)() && "function" === typeof bb.requestPointerLock
    }

    function Zs(bb) {
      return 0 === bb.button ? bb.altKey ? is.i["Alt+Left Click"] : is.i.Mouse1 : 1 === bb.button ? is.i.Mouse2 : is.i.Mouse3
    }
    const zs = new Set(["AltLeft", "AltRight", "ArrowUp", "ArrowDown"]),
      qs = new Map([
        ["AltLeft", "altKey"],
        ["AltRight", "altKey"],
        ["ControlLeft", "ctrlKey"],
        ["ControlRight", "ctrlKey"],
        ["ShiftLeft", "shiftKey"],
        ["ShiftRight", "shiftKey"],
        ["MetaLeft", "metaKey"],
        ["MetaRight", "metaKey"]
      ]),
      ds = 32768,
      As = 1;

    function ws(bb) {
      return Math.min(Math.max(Math.round(bb), 0), 65535)
    }

    function rs(bb, cb, sb) {
      const kb = [],
        Wb = (bb, cb, sb, Wb) => {
          const ab = bb => {
            (0, ts.p)(bb) || sb(bb)
          };
          bb.addEventListener(cb, ab, Wb), kb.push((() => {
            bb.removeEventListener(cb, ab, Wb)
          }))
        },
        ab = {
          capture: !0,
          passive: !0
        },
        Tb = (bb, sb, kb, Wb, ab) => (!(0, Es.e)() || !Os.has(bb)) && (cb(bb, sb, kb, Wb, ab), !0),
        Ub = () => document.pointerLockElement === bb,
        Ib = (0, Ds.b)(),
        Hb = bb => {
          bb.ctrlKey && sb.ctrlCombosAreGames() && !(0, as.c)(bb.target) && bb.preventDefault()
        },
        fb = (bb, kb, Wb) => {
          sb.inspect(bb, kb, !1), cb(zc.qb.KeyUp, kb, 0, 0, (0, gs.m)(Wb, bb.timeStamp)), sb.keyReleased(kb)
        },
        Mb = new Map,
        Xb = (bb, cb, sb) => bb[sb] || ("AltRight" === cb || "ControlLeft" === cb) && bb.getModifierState("AltGraph"),
        nb = new Map,
        mb = () => {
          Mb.clear(), nb.clear()
        },
        lb = bb => {
          if (document.hasFocus())
            for (const [cb, sb] of nb) nb.delete(cb), Xb(bb, cb, sb) || (Mb.delete(cb), fb(bb, is.i[cb], Gs(bb)))
        };
      bb.tabIndex = -1;
      let Qb = 0,
        eb = 0;
      const Cb = () => {
        const cb = bb.getBoundingClientRect();
        Qb = cb.left, eb = cb.top
      };
      let Nb = "mouse";
      const Vb = () => !Ub() && ("mouse" === Nb || !sb.touchUiShown()),
        Lb = (bb, cb, sb) => {
          const kb = (ws(bb.clientX - Qb) | ws(bb.clientY - eb) << 16) >>> 0;
          Tb(zc.qb.MouseMove, zc.Ib.Point, cb, sb, kb)
        };
      let ub = !1,
        Yb = 0;
      const hb = () => {
        ub && (ub = !1, sb.viewShown() && (0, Jc.V)())
      };
      kb.push((() => {
        clearTimeout(Yb)
      })), Wb(window, "keydown", (bb => {
        "Escape" === bb.key ? (0, Jc.K)(!0) : bb.repeat || (0, as.c)(bb.target) || (ub = !0, clearTimeout(Yb), Yb = window.setTimeout(hb, 0))
      }), ab), Wb(window, "keydown", (bb => {
        hb(), Hb(bb), lb(bb);
        const cb = is.i[bb.code];
        if ("number" !== typeof cb || !sb.viewShown()) return;
        const kb = (0, as.c)(bb.target);
        kb || !sb.prevents(cb) && !zs.has(bb.code) || bb.preventDefault(), bb.repeat || sb.inspect(bb, cb, !0), Tb(zc.qb.KeyDown, cb, 0, 0, (0, gs.m)(Gs(bb), bb.timeStamp)) && Mb.set(bb.code, cb), kb || sb.keyPressed(cb)
      }), {
        capture: !1,
        passive: !1
      }), Wb(window, "keyup", (bb => {
        "Escape" === bb.key && (0, Jc.K)(!1), Hb(bb), Mb.delete(bb.code), nb.delete(bb.code), lb(bb);
        const cb = is.i[bb.code];
        "number" === typeof cb && fb(bb, cb, Gs(bb))
      }), {
        capture: !0,
        passive: !1
      }), Wb(window, "mousemove", (bb => {
        "mouse" === Nb && Vb() ? Lb(bb, bb.movementX, bb.movementY) : Ub() ? Tb(zc.qb.MouseMove, zc.Ib.Stamped, bb.movementX, bb.movementY, (0, gs.m)(0, bb.timeStamp)) : Tb(zc.qb.MouseMove, 0, bb.movementX, bb.movementY, 0)
      }), ab);
      let Jb = 0,
        gb = 0;
      const Bb = [];
      let tb = !1,
        yb = !1;
      Wb(bb, "mousedown", (bb => {
        if ((0, Es.e)()) return;
        lb(bb);
        const kb = 1 << bb.button;
        if (!Ub() && (0, Jc.R)() && (0, Jc.h)() && (yb = !0, !tb)) return void(Jb |= kb);
        Jb &= ~kb;
        const Wb = bb.button <= 2 ? Zs(bb) : void 0;
        void 0 !== Wb && (Bb[bb.button] = Wb, sb.inspect(bb, Wb, !0)), Vb() && Lb(bb, 0, 0), cb(zc.qb.MouseDown, bb.button, bb.clientX, bb.clientY, (0, gs.m)(Gs(bb), bb.timeStamp)), gb |= kb, void 0 !== Wb && sb.keyPressed(Wb)
      }), ab), Wb(window, "mouseup", (bb => {
        var kb;
        lb(bb);
        const Wb = 1 << bb.button,
          ab = 0 !== (Jb & ~gb & Wb);
        if (Jb &= ~Wb, gb &= ~Wb, ab) return;
        const Tb = bb.button <= 2 ? null !== (kb = Bb[bb.button]) && void 0 !== kb ? kb : Zs(bb) : void 0;
        void 0 !== Tb && sb.inspect(bb, Tb, !1), cb(zc.qb.MouseUp, bb.button, bb.clientX, bb.clientY, (0, gs.m)(Gs(bb), bb.timeStamp)), void 0 !== Tb && sb.keyReleased(Tb)
      }), ab), Wb(bb, "contextmenu", (bb => {
        bb.preventDefault()
      }), {
        passive: !1
      });
      const Pb = bb => {
        (Ub() || (0, Jc.q)() && (0, ys.r)()) && (bb.ctrlKey || Ib && !document.fullscreenElement) && bb.preventDefault()
      };
      Wb(bb, "wheel", (bb => {
        Pb(bb), lb(bb), Tb(zc.qb.Wheel, bb.deltaMode, bb.deltaX, bb.deltaY, 0)
      }), {
        capture: !0,
        passive: !1
      });
      const Db = {
          capture: !0,
          passive: !1
        },
        Eb = bb => {
          bb ? window.addEventListener("wheel", Pb, Db) : window.removeEventListener("wheel", Pb, Db)
        };
      Eb((0, Jc.q)()), kb.push((0, Jc.z)(Eb)), kb.push((() => {
        Eb(!1)
      }));
      const ib = new Map,
        Ob = new Set,
        Gb = bb => {
          const cb = "stylus" === bb.touchType;
          for (const sb of ib.values())
            if (!sb.touched && (cb || Math.abs(bb.clientX - sb.x) <= As && Math.abs(bb.clientY - sb.y) <= As)) return sb.touched = !0, !0;
          return !1
        },
        Kb = bb => 32767 & bb,
        Zb = new Set,
        zb = bb => sb => {
          const kb = (0, gs.m)(Gs(sb), sb.timeStamp);
          bb !== zc.qb.TouchStart && bb !== zc.qb.TouchMove || ((bb, sb) => {
            const kb = bb.touches;
            if (kb)
              for (const Wb of Zb) {
                let bb = !1;
                for (let cb = 0; cb < kb.length && !bb; cb++) bb = Kb(kb[cb].identifier) === Wb;
                bb || (Zb.delete(Wb), cb(zc.qb.TouchCancel, Wb, 0, 0, sb))
              }
          })(sb, kb);
          const Wb = sb.changedTouches;
          for (let cb = 0; cb < Wb.length; cb++) {
            const sb = Wb[cb];
            if (bb === zc.qb.TouchStart && Gb(sb) && Ob.add(sb.identifier), Ob.has(sb.identifier)) {
              bb !== zc.qb.TouchEnd && bb !== zc.qb.TouchCancel || Ob.delete(sb.identifier);
              continue
            }
            const ab = Kb(sb.identifier),
              Ub = Tb(bb, ab, sb.clientX - Qb, sb.clientY - eb, kb);
            bb === zc.qb.TouchStart ? Ub && Zb.add(ab) : bb !== zc.qb.TouchMove && Zb.delete(ab)
          }
        },
        qb = zb(zc.qb.TouchStart);
      Wb(bb, "touchstart", (bb => {
        bb.preventDefault(), (0, Es.e)() || (sb.touchStarting(), qb(bb))
      }), {
        passive: !1
      }), Wb(bb, "touchmove", zb(zc.qb.TouchMove), ab), Wb(bb, "touchend", zb(zc.qb.TouchEnd), ab), Wb(bb, "touchcancel", zb(zc.qb.TouchCancel), ab);
      const db = bb => ds | 32767 & bb,
        Ab = (bb, cb) => {
          Tb(bb, db(cb.pointerId), cb.clientX - Qb, cb.clientY - eb, (0, gs.m)(Gs(cb), cb.timeStamp))
        };
      Wb(window, "pointerdown", (cb => {
        Nb = cb.pointerType, "mouse" === cb.pointerType && cb.target !== bb && sb.viewShown() && (0, Jc.Y)()
      }), ab), Wb(bb, "pointerdown", (bb => {
        "pen" === bb.pointerType && 0 === bb.button && (0, Jc.q)() && (0, ys.r)() && (bb.preventDefault(), (0, Es.e)() || (ib.set(bb.pointerId, {
          x: bb.clientX,
          y: bb.clientY,
          touched: !1
        }), sb.touchStarting(), Ab(zc.qb.TouchStart, bb)))
      }), {
        passive: !1
      }), Wb(window, "pointermove", (bb => {
        Nb = bb.pointerType, ib.has(bb.pointerId) && Ab(zc.qb.TouchMove, bb), "mouse" !== bb.pointerType && Vb() && Lb(bb, 0, 0)
      }), ab);
      const wb = bb => cb => {
        ib.delete(cb.pointerId) && Ab(bb, cb)
      };
      Wb(window, "pointerup", wb(zc.qb.TouchEnd), ab), Wb(window, "pointercancel", wb(zc.qb.TouchCancel), ab);
      let rb = 0;
      const ob = () => {
          rb = 0, Cb(), sb.resized()
        },
        Sb = () => {
          const bb = sb.sizeCanvas();
          null !== bb && cb(zc.qb.Resize, 0, bb.cssWidth, bb.cssHeight, (0, gs.j)(bb.renderScale)), Cb(), sb.resized(), 0 === rb && (rb = requestAnimationFrame(ob))
        };
      Wb(window, "resize", Sb, ab), kb.push(sb.watchRenderScale(Sb)), kb.push((() => {
        cancelAnimationFrame(rb)
      })), Wb(window, "focus", (bb => {
        bb.isTrusted && (cb(zc.qb.Focus, 0, 0, 0, 0), sb.viewShown() && (0, Jc.Y)())
      }), {
        passive: !0
      });
      const Rb = () => {
          (0, Jc.K)(!1), Jb = 0
        },
        vb = () => {
          Zb.clear(), ib.clear(), Ob.clear()
        };
      let Fb = 0,
        xb = 0;
      Wb(window, "blur", (kb => {
        Rb(), (0, Jc.m)();
        for (const bb of Mb.keys()) {
          const cb = qs.get(bb);
          void 0 !== cb && nb.set(bb, cb)
        }
        kb.isTrusted && ((bb => {
          for (const [sb, kb] of ib) cb(zc.qb.TouchCancel, db(sb), kb.x, kb.y, (0, gs.m)(0, bb));
          ib.clear()
        })(kb.timeStamp), cb(zc.qb.Blur, zc.n.KeepTouches, 0, 0, 0)), Ib && kb.isTrusted && (clearTimeout(xb), xb = window.setTimeout((() => {
          if (!document.hasFocus()) {
            for (const bb of Mb.values()) fb(kb, bb, 0);
            mb()
          }
        }), 0)), clearTimeout(Fb), Fb = window.setTimeout((() => {
          document.activeElement instanceof HTMLIFrameElement && (0, ys.r)() && sb.viewShown() && bb.focus({
            preventScroll: !0
          })
        }), 0)
      }), {
        passive: !0
      }), kb.push((() => {
        clearTimeout(Fb), clearTimeout(xb)
      })), Wb(window, "mousedown", (cb => {
        Ib && cb.isTrusted && !document.hasFocus() && (0, ys.r)() && sb.viewShown() && (window.focus(), bb.focus({
          preventScroll: !0
        }))
      }), ab), Wb(document, "visibilitychange", (() => {
        document.hidden ? (cb(zc.qb.Blur, 0, 0, 0, 0), vb()) : document.hasFocus() && cb(zc.qb.Focus, 0, 0, 0, 0)
      }), {
        passive: !0
      }), kb.push((0, Es.l)((() => {
        Rb(), cb(zc.qb.Blur, zc.n.Release, 0, 0, 0), sb.keysReleased(), mb(), gb = 0, vb(), cb(zc.qb.Joystick, 0, 0, 0, 0), document.hasFocus() && cb(zc.qb.Focus, 0, 0, 0, 0)
      })));
      const jb = !sb.canLock(),
        pb = () => jb && !(0, Jc.q)() ? zc.pc.Lockless : zc.pc.Released,
        bc = () => {
          Ub() && (tb = !1, yb = !1), cb(zc.qb.PointerLock, Ub() ? zc.pc.Locked : pb(), 0, 0, 0), (0, Jc.N)(Ub())
        };
      return Wb(document, "pointerlockchange", bc, {
        passive: !0
      }), Wb(document, "pointerlockerror", (() => {
        tb ||= yb, yb = !1, (0, Jc.x)()
      }), {
        passive: !0
      }), jb && kb.push((0, Jc.z)((() => {
        cb(zc.qb.PointerLock, pb(), 0, 0, 0)
      }))), Sb(), cb(document.hasFocus() ? zc.qb.Focus : zc.qb.Blur, 0, 0, 0, 0), bc(), () => {
        for (const bb of kb.splice(0)) bb()
      }
    }
    var os = sb(8862),
      Ss = sb(8849),
      Rs = sb(1921);
    const vs = new Map(is.b.map(((bb, cb) => [bb, cb]))),
      Fs = ["jump", "primary-fire", "alt-fire"],
      xs = ["primary-fire", "alt-fire"];

    function ps(bb) {
      return `${Rs.c}${bb}`
    }
    const bk = ["forward", "backward", "left", "right", "sprint", "jump"];

    function ck(bb) {
      const cb = [];
      for (const sb of bb) {
        const bb = "string" === typeof sb ? is.i[sb] : void 0;
        "number" === typeof bb && cb.push(bb)
      }
      return cb
    }
    class sk {
      constructor() {
        this.keys = new Map, this.preventKeys = new Set, this.movementKeys = new Set, this.checkedDown = new Set, this.checkedUp = new Set;
        for (const [bb, cb] of Object.entries(is.f)) this.keys.set(bb, cb);
        this.updateKeySets()
      }
      prevents(bb) {
        return this.preventKeys.has(bb)
      }
      moves(bb) {
        return this.movementKeys.has(bb)
      }
      checks(bb, cb) {
        return (cb ? this.checkedDown : this.checkedUp).has(bb)
      }
      sync(bb, cb) {
        for (const [sb, kb] of this.keys) {
          const Wb = bb(ps(sb)),
            ab = Array.isArray(Wb) ? ck(Wb) : is.f[sb];
          (ab.length !== kb.length || ab.some(((bb, cb) => bb !== kb[cb]))) && this.bind(sb, ab, cb)
        }
      }
      bind(bb, cb, sb) {
        const kb = vs.get(bb);
        if (void 0 !== kb) {
          sb(zc.qb.Binding, 0, 0, 0, kb | zc.m.Clear << 8);
          for (const ab of [...cb, ...null !== (Wb = is.h[bb]) && void 0 !== Wb ? Wb : []]) {
            var Wb;
            sb(zc.qb.Binding, ab, 0, 0, kb | zc.m.Add << 8)
          }
          this.keys.set(bb, cb), this.updateKeySets()
        }
      }
      updateKeySets() {
        this.preventKeys.clear();
        for (const kb of is.m)
          for (const cb of null !== (bb = this.keys.get(is.b[kb])) && void 0 !== bb ? bb : []) {
            var bb;
            this.preventKeys.add(cb)
          }
        this.movementKeys.clear();
        for (const kb of bk)
          for (const bb of null !== (cb = this.keys.get(kb)) && void 0 !== cb ? cb : []) {
            var cb;
            this.movementKeys.add(bb)
          }
        for (const [kb, Wb] of [
            [this.checkedDown, Fs],
            [this.checkedUp, xs]
          ]) {
          kb.clear();
          for (const bb of Wb)
            for (const cb of null !== (sb = this.keys.get(bb)) && void 0 !== sb ? sb : []) {
              var sb;
              kb.add(cb)
            }
        }
      }
    }
    var kk = sb(4523),
      Wk = sb(36233);
    const ak = "[bloxd-wasm-client]";

    function Tk() {
      return "inGame" === rb.d.get("gameState") && !(0, Bs.r)()
    }
    let Uk = null;

    function Ik(bb, cb) {
      Uk && cb.writePendingInput() && Uk.push(function(bb, cb) {
        let sb = "";
        for (const kb of cb) sb += kb.toString(16).padStart(2, "0");
        return sb ? `${bb} ${sb}` : String(bb)
      }(bb, cb.rings.input.written()))
    }
    const Hk = [];

    function fk(bb, cb, sb, kb) {
      bb === zc.P.InputAction && kb === zc.jb && Hk.push(cb.getUint32(sb, !0))
    }
    var Mk = sb(40420),
      Xk = sb(1203),
      nk = sb(36423);
    const mk = {
      general: {
        ok: "OK",
        tryAgain: "Try Again",
        back: "Back",
        reload: "Reload",
        reconnect: "Rejoin"
      },
      wasmScreens: Xk.wasmScreens
    };

    function lk(bb) {
      var cb, sb;
      let kb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const [Wb, ab] = bb.split(":");
      return (null !== (cb = null === (sb = mk[Wb]) || void 0 === sb ? void 0 : sb[ab]) && void 0 !== cb ? cb : bb).replace(/\{\{(\w+)\}\}/g, ((bb, cb) => {
        var sb;
        return null !== (sb = kb[cb]) && void 0 !== sb ? sb : bb
      }))
    }

    function Qk(bb, cb) {
      (0, hs.c)();
      const sb = document.createElement("div");
      sb.setAttribute("role", "alertdialog"), sb.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;z-index:100;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.7);font:16px sans-serif;color:#fff";
      const kb = document.createElement("div");
      kb.style.cssText = "max-width:28rem;padding:1.5rem;background:#1c2333;text-align:center";
      const Wb = document.createElement("h2");
      Wb.textContent = lk(bb.title);
      const ab = document.createElement("p");
      if (ab.textContent = lk(bb.help, bb.helpValues), ab.style.whiteSpace = "pre-line", kb.append(Wb, ab), bb.discordLink) {
        const bb = document.createElement("a");
        bb.href = nk.b, bb.target = "_blank", bb.rel = "noreferrer", bb.style.color = "#8ab4ff", bb.textContent = lk("wasmScreens:reportOnDiscord"), kb.append(bb)
      }
      const Tb = document.createElement("div");
      return Tb.style.cssText = "display:flex;gap:1rem;justify-content:center;margin-top:1.5rem", kb.append(Tb), sb.append(kb), document.body.append(sb), new Promise((kb => {
        const Wb = bb => {
            null === cb || void 0 === cb || cb.removeEventListener("abort", ab), sb.remove(), kb(bb)
          },
          ab = () => {
            Wb(!1)
          };
        null === cb || void 0 === cb || cb.addEventListener("abort", ab, {
          once: !0
        });
        const Ub = (bb, cb) => {
          const sb = document.createElement("button");
          sb.textContent = lk(bb), sb.style.cssText = "padding:0.5rem 1.25rem;font:inherit", sb.addEventListener("click", (() => {
            Wb(cb)
          })), Tb.append(sb)
        };
        null !== bb.cancel && Ub(bb.cancel, !1), Ub(bb.confirm, !0)
      }))
    }
    var ek = sb(40235);
    const Ck = 6e4,
      Nk = 3e5;
    var Vk = sb(3433);
    var Lk = sb(40152),
      uk = sb(664),
      Yk = sb(13);

    function hk(bb, cb) {
      const sb = Yk.bb.encode(cb);
      ! function(bb, cb) {
        let sb = cb >= 0 ? 2 * cb : 2 * -cb - 1;
        for (; sb >= 128;) bb.push(sb % 128 | 128), sb = Math.floor(sb / 128);
        bb.push(sb)
      }(bb, sb.length);
      for (const kb of sb) bb.push(kb)
    }
    let Jk, gk, Bk;
    (() => {
      const bb = [0, "s", "resolv", "e", "then", "postCo", "okies", 3, "length", 2, 1, void 0, "b", 117, 4, 206, 1023, "a", 208, 65536, 10, 55296, 56320, 6, 12, 63, 128, 145, 175, 176, 148, 192, "c", "d", "Invalid byte index", 149, 255, 224, 31, "Invalid continuation byte", 240, 15, 179, 7, 18, !1, 16, 8, 60, "mSTUdB", 512, "012345", 205, 244, 55, "f", 5, 124, 106, 56319, 57343, 170, 65535, 247, 32, 24, 19, 64, 219, 42, 173, "/", 68, 64512, 74, 166, "Lone s", "urroga", "te U+", " is no", "t a sc", "alar v", "alue", 4294967168, 4294965248, 4294901760, 4292870144, 72, "h", 163, 2048, 248, 1114111, "Invalid UTF-8 detected", "3.0.0", "undefi", "ned"];

      function cb() {}
      const kb = (0, Yk[bb[1]])("aGFyZHdhcmVDb25jdXJyZW5jeQ=="),
        Wb = (0, Yk[bb[1]])("QkFCWUxPTg=="),
        ab = (0, Yk[bb[1]])("QW5kZXNpdGU="),
        Tb = (0, Yk[bb[1]])("U21vb3RoIEdyYW5pdGU="),
        Ub = (0, Yk[bb[1]])("RGlvcml0ZQ=="),
        Ib = async (cb, kb, Wb, ab) => {
          const [{
            clientSideServerUrls: Tb
          }, {
            postJsonWithMetricsCookiesAndJsonResponse: Ub
          }] = await Promise.all([Promise[bb[2] + bb[3]]()[bb[4]]((() => sb(1208))), Promise[bb[2] + bb[3]]()[bb[4]]((() => sb(1126)))]), Ib = Tb.getHttpUrlFromWebSocketUrl(cb.endpoint), Hb = null === cb[bb[5] + bb[6]] ? bb[11] : await cb[bb[5] + bb[6]]();
          await Ub("" + Ib + kb, Wb, {
            ["retrie" + bb[1]]: ab
          }, Hb)
        };
      Jk = async (cb, sb) => {
        const Wb = function(bb, cb, sb, kb) {
          const Wb = [];
          hk(Wb, bb), hk(Wb, cb), hk(Wb, sb);
          for (const ab of kb) Wb.push(ab);
          return Wb
        }(cb.game, cb.lobby, (0, uk[bb[33]])(), sb);
        try {
          await Ib(cb, "/persisted/keep-alive", {
            type: "Dm",
            data: Wb
          }, bb[7])
        } catch (kb) {
          console.warn(kb)
        }
      };
      const Hb = (...sb) => (sb[bb[8]] = bb[9], "jQvhrHN" in cb && function() {
        ! function(...cb) {
          function sb(...cb) {
            for (fb(cb[bb[8]] = bb[10], cb[bb[15]] = [], cb[bb[12]] = bb[0], cb[bb[13]] = cb[bb[0]].length, cb[bb[14]] = bb[11], cb[bb[3]] = bb[11]); cb[bb[12]] < cb[bb[13]];) fb(cb[bb[14]] = cb[bb[0]].charCodeAt(cb[bb[12]]++), cb[bb[14]] >= bb[21] && cb[bb[14]] <= bb[59] && cb[bb[12]] < cb[bb[13]] ? (cb[bb[3]] = cb[bb[0]].charCodeAt(cb[bb[12]]++), (cb[bb[3]] & bb[73]) == bb[22] ? cb[bb[15]].push(((cb[bb[14]] & bb[16]) << bb[20]) + (cb[bb[3]] & bb[16]) + bb[19]) : (cb[bb[15]].push(cb[bb[14]]), cb[bb[12]]--)) : cb[bb[15]].push(cb[bb[14]]));
            return cb[bb[15]]
          }

          function kb(...sb) {
            for (fb(sb[bb[8]] = bb[10], sb[bb[17]] = sb[bb[0]].length, sb[bb[18]] = -bb[10], sb[bb[7]] = bb[11], sb[bb[14]] = ""); ++sb[bb[18]] < sb[bb[17]];) sb[bb[7]] = sb[bb[0]][sb[bb[18]]], sb[bb[7]] > bb[62] && fb(sb[bb[7]] -= bb[19], sb[bb[14]] += cb[bb[17]](sb[bb[7]] >>> bb[20] & bb[16] | bb[21]), sb[bb[7]] = bb[22] | sb[bb[7]] & bb[16]), sb[bb[14]] += cb[bb[17]](sb[bb[7]]);
            return sb[bb[14]]
          }

          function Wb(...cb) {
            if (cb[bb[8]] = bb[10], cb[bb[0]] >= bb[21] && cb[bb[0]] <= bb[60]) throw Error(bb[76] + bb[77] + bb[78] + cb[bb[0]].toString(bb[46]).toUpperCase() + (bb[79] + bb[80] + bb[81] + bb[82]))
          }

          function ab(...sb) {
            return sb[bb[8]] = bb[9], cb[bb[17]](sb[bb[0]] >> sb[bb[10]] & bb[25] | bb[26])
          }

          function Tb(...sb) {
            return sb[bb[8]] = bb[10], (sb[bb[0]] & bb[83]) == bb[0] ? cb[bb[17]](sb[bb[0]]) : (sb[bb[17]] = "", (sb[bb[0]] & bb[84]) == bb[0] ? sb[bb[17]] = cb[bb[17]](sb[bb[0]] >> bb[23] & bb[38] | bb[31]) : (sb[bb[0]] & bb[85]) == bb[0] ? fb(Wb(sb[bb[0]]), sb[bb[17]] = cb[bb[17]](sb[bb[0]] >> bb[24] & bb[41] | bb[37]), sb[bb[17]] += ab(sb[bb[0]], bb[23])) : (sb[bb[0]] & bb[86]) == bb[0] && fb(sb[bb[17]] = cb[bb[17]](sb[bb[0]] >> bb[44] & bb[43] | bb[40]), sb[bb[17]] += ab(sb[bb[0]], bb[24]), sb[bb[17]] += ab(sb[bb[0]], bb[23])), sb[bb[17]] += cb[bb[17]](sb[bb[0]] & bb[25] | bb[26]), sb[bb[17]])
          }

          function Ub(...cb) {
            for (fb(cb[bb[8]] = bb[10], cb[bb[27]] = sb(cb[bb[0]]), cb[bb[9]] = cb[bb[27]].length, cb[-bb[28]] = -bb[10], cb[bb[14]] = bb[11], cb[-bb[29]] = ""); ++cb[-bb[28]] < cb[bb[9]];) fb(cb[bb[14]] = cb[bb[27]][cb[-bb[28]]], cb[-bb[29]] += Tb(cb[bb[14]]));
            return cb[-bb[29]]
          }

          function Ib(...sb) {
            if (sb[bb[8]] = bb[0], cb[bb[9]] >= cb[bb[32]]) throw Error(bb[34]);
            if (fb(sb[bb[30]] = cb[bb[14]][cb[bb[9]]] & bb[36], cb[bb[9]]++), (sb[bb[30]] & bb[31]) == bb[26]) return sb[bb[30]] & bb[25];
            throw Error(bb[39])
          }

          function Hb(...sb) {
            if (fb(sb[bb[8]] = bb[0], sb[bb[35]] = bb[11], sb[bb[32]] = bb[11], sb[bb[33]] = bb[11], sb[-bb[42]] = bb[11], sb[bb[14]] = bb[11]), cb[bb[9]] > cb[bb[32]]) throw Error(bb[34]);
            if (cb[bb[9]] == cb[bb[32]]) return bb[45];
            if (fb(sb[bb[35]] = cb[bb[14]][cb[bb[9]]] & bb[36], cb[bb[9]]++), (sb[bb[35]] & bb[26]) == bb[0]) return sb[bb[35]];
            if ((sb[bb[35]] & bb[37]) == bb[31]) {
              if (fb(sb[bb[32]] = Ib(), sb[bb[14]] = (sb[bb[35]] & bb[38]) << bb[23] | sb[bb[32]]), sb[bb[14]] >= bb[26]) return sb[bb[14]];
              throw Error(bb[39])
            }
            if ((sb[bb[35]] & bb[40]) == bb[37]) {
              if (fb(sb[bb[32]] = Ib(), sb[bb[33]] = Ib(), sb[bb[14]] = (sb[bb[35]] & bb[41]) << bb[24] | sb[bb[32]] << bb[23] | sb[bb[33]]), sb[bb[14]] >= bb[90]) return Wb(sb[bb[14]]), sb[bb[14]];
              throw Error(bb[39])
            }
            if ((sb[bb[35]] & bb[91]) == bb[40] && (fb(sb[bb[32]] = Ib(), sb[bb[33]] = Ib(), sb[-bb[42]] = Ib(), sb[bb[14]] = (sb[bb[35]] & bb[43]) << bb[44] | sb[bb[32]] << bb[24] | sb[bb[33]] << bb[23] | sb[-bb[42]]), sb[bb[14]] >= bb[19] && sb[bb[14]] <= bb[92])) return sb[bb[14]];
            throw Error(bb[93])
          }

          function Mb(...Wb) {
            for (fb(Wb[bb[8]] = bb[10], cb[bb[14]] = sb(Wb[bb[0]]), cb[bb[32]] = cb[bb[14]].length, cb[bb[9]] = bb[0], Wb[bb[17]] = [], Wb[bb[12]] = bb[11]);
              (Wb[bb[12]] = Hb()) !== bb[45];) Wb[bb[17]].push(Wb[bb[12]]);
            return kb(Wb[bb[17]])
          }
          fb(cb[bb[8]] = bb[10], cb[bb[17]] = String.fromCharCode), fb(cb[bb[14]] = bb[11], cb[bb[32]] = bb[11], cb[bb[9]] = bb[11]), fb(cb[bb[0]].version = bb[94], cb[bb[0]].encode = Ub, cb[bb[0]].decode = Mb)
        }(typeof exports === bb[95] + bb[96] ? this.utf8 = {} : exports)
      }(), Object.getOwnPropertyDescriptor(sb[bb[0]], sb[bb[10]]));

      function fb() {
        fb = function() {}
      }
      gk = (...sb) => {
        if (sb[bb[8]] = bb[0], "Kh2Z4vV" in cb && function(...cb) {
            fb(cb[bb[8]] = bb[0], cb[bb[69]] = function(...cb) {
              function sb(...cb) {
                return cb[bb[8]] = bb[10], Ib(Tb(Xb(cb[bb[0]])))
              }

              function kb(...cb) {
                return cb[bb[8]] = bb[9], Ib(Ub(Xb(cb[bb[0]]), Xb(cb[bb[10]])))
              }

              function Wb(...cb) {
                return cb[bb[8]] = bb[9], Hb(Ub(Xb(cb[bb[0]]), Xb(cb[bb[10]])))
              }

              function ab(...cb) {
                return cb[bb[8]] = bb[7], Mb(Ub(Xb(cb[bb[0]]), Xb(cb[bb[10]])), cb[bb[9]])
              }

              function Tb(...cb) {
                return cb[bb[8]] = bb[10], mb(Yb(nb(cb[bb[0]]), cb[bb[0]].length * bb[47]))
              }

              function Ub(...cb) {
                fb(cb[bb[8]] = bb[9], cb[bb[17]] = nb(cb[bb[0]])), cb[bb[17]].length > bb[46] && (cb[bb[17]] = Yb(cb[bb[17]], cb[bb[0]].length * bb[47]));
                var sb = Array(bb[46]),
                  kb = Array(bb[46]);
                for (cb[bb[12]] = bb[0]; cb[bb[12]] < bb[46]; cb[bb[12]]++) fb(sb[cb[bb[12]]] = 909522486 ^ cb[bb[17]][cb[bb[12]]], kb[cb[bb[12]]] = 1549556828 ^ cb[bb[17]][cb[bb[12]]]);
                return cb[-bb[48]] = Yb(sb.concat(nb(cb[bb[10]])), bb[50] + cb[bb[10]].length * bb[47]), mb(Yb(kb.concat(cb[-bb[48]]), function(...cb) {
                  if (cb[bb[8]] = bb[7], cb[bb[0]] === bb[49]) return cb[bb[10]] + cb[bb[9]]
                }(bb[49], bb[50], 256)))
              }

              function Ib(...sb) {
                sb[bb[8]] = bb[10];
                try {
                  cb[bb[12]]
                } catch (kb) {
                  cb[bb[12]] = bb[0]
                }
                for (fb(sb[bb[10]] = cb[bb[12]] ? bb[51] + "6789ABCDEF" : bb[51] + "6789abcdef", sb[bb[9]] = "", sb[bb[53]] = bb[11]), sb[bb[52]] = bb[0]; sb[bb[52]] < sb[bb[0]].length; sb[bb[52]]++) fb(sb[bb[53]] = sb[bb[0]].charCodeAt(sb[bb[52]]), sb[bb[9]] += sb[bb[10]].charAt(sb[bb[53]] >>> bb[14] & bb[41]) + sb[bb[10]].charAt(sb[bb[53]] & bb[41]));
                return sb[bb[9]]
              }

              function Hb(...sb) {
                sb[bb[8]] = bb[10];
                try {
                  cb[bb[54]]
                } catch (kb) {
                  cb[bb[54]] = ""
                }
                for (fb(sb[bb[17]] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+" + bb[71], sb[bb[12]] = "", sb[bb[32]] = sb[bb[0]].length), sb[bb[14]] = bb[0]; sb[bb[14]] < sb[bb[32]]; sb[bb[14]] += bb[7])
                  for (sb[bb[56]] = sb[bb[0]].charCodeAt(sb[bb[14]]) << bb[46] | (sb[bb[14]] + bb[10] < sb[bb[32]] ? sb[bb[0]].charCodeAt(sb[bb[14]] + bb[10]) << bb[47] : bb[0]) | (sb[bb[14]] + bb[9] < sb[bb[32]] ? sb[bb[0]].charCodeAt(sb[bb[14]] + bb[9]) : bb[0]), sb[bb[55]] = bb[0]; sb[bb[55]] < bb[14]; sb[bb[55]]++) sb[bb[14]] * bb[47] + sb[bb[55]] * bb[23] > sb[bb[0]].length * bb[47] ? sb[bb[12]] += cb[bb[54]] : sb[bb[12]] += sb[bb[17]].charAt(sb[bb[56]] >>> bb[23] * (bb[7] - sb[bb[55]]) & bb[25]);
                return sb[bb[12]]
              }

              function Mb(...cb) {
                var sb, kb, Wb, ab;
                for (fb(cb[bb[8]] = bb[9], cb[bb[57]] = cb[bb[10]].length, cb[bb[12]] = Array()), cb[bb[14]] = Array(Math.ceil(cb[bb[0]].length / bb[9])), sb = bb[0]; sb < cb[bb[14]].length; sb++) cb[bb[14]][sb] = cb[bb[0]].charCodeAt(sb * bb[9]) << bb[47] | cb[bb[0]].charCodeAt(sb * bb[9] + bb[10]);
                for (; cb[bb[14]].length > bb[0];) {
                  for (fb(ab = Array(), Wb = bb[0]), sb = bb[0]; sb < cb[bb[14]].length; sb++) fb(Wb = (Wb << bb[46]) + cb[bb[14]][sb], kb = Math.floor(Wb / cb[bb[57]]), Wb -= kb * cb[bb[57]]), (ab.length > bb[0] || kb > bb[0]) && (ab[ab.length] = kb);
                  fb(cb[bb[12]][cb[bb[12]].length] = Wb, cb[bb[14]] = ab)
                }
                for (cb[bb[56]] = "", sb = cb[bb[12]].length - bb[10]; sb >= bb[0]; sb--) cb[bb[56]] += cb[bb[10]].charAt(cb[bb[12]][sb]);
                for (cb[-bb[58]] = Math.ceil(cb[bb[0]].length * bb[47] / (Math.log(cb[bb[10]].length) / Math.log(bb[9]))), sb = cb[bb[56]].length; sb < cb[-bb[58]]; sb++) cb[bb[56]] = cb[bb[10]][bb[0]] + cb[bb[56]];
                return cb[bb[56]]
              }

              function Xb(...cb) {
                var sb, kb;
                for (fb(cb[bb[8]] = bb[10], cb[bb[61]] = "", cb[bb[9]] = -bb[10]); ++cb[bb[9]] < cb[bb[0]].length;) fb(sb = cb[bb[0]].charCodeAt(cb[bb[9]]), kb = cb[bb[9]] + bb[10] < cb[bb[0]].length ? cb[bb[0]].charCodeAt(cb[bb[9]] + bb[10]) : bb[0]), bb[21] <= sb && sb <= bb[59] && bb[22] <= kb && kb <= bb[60] && fb(sb = bb[19] + ((sb & bb[16]) << bb[20]) + (kb & bb[16]), cb[bb[9]]++), sb <= 127 ? cb[bb[61]] += String.fromCharCode(sb) : sb <= 2047 ? cb[bb[61]] += String.fromCharCode(bb[31] | sb >>> bb[23] & bb[38], bb[26] | sb & bb[25]) : sb <= bb[62] ? cb[bb[61]] += String.fromCharCode(bb[37] | sb >>> bb[24] & bb[41], bb[26] | sb >>> bb[23] & bb[25], bb[26] | sb & bb[25]) : sb <= 2097151 && (cb[bb[61]] += String.fromCharCode(bb[40] | sb >>> bb[44] & bb[43], bb[26] | sb >>> bb[24] & bb[25], bb[26] | sb >>> bb[23] & bb[25], bb[26] | sb & bb[25]));
                return cb[bb[61]]
              }

              function nb(...cb) {
                for (fb(cb[bb[8]] = bb[10], cb[bb[10]] = Array(cb[bb[0]].length >> bb[9])), cb[bb[9]] = bb[0]; cb[bb[9]] < cb[bb[10]].length; cb[bb[9]]++) cb[bb[10]][cb[bb[9]]] = bb[0];
                for (cb[bb[9]] = bb[0]; cb[bb[9]] < cb[bb[0]].length * bb[47]; cb[bb[9]] += bb[47]) cb[bb[10]][cb[bb[9]] >> bb[56]] |= (cb[bb[0]].charCodeAt(cb[bb[9]] / bb[47]) & bb[36]) << bb[65] - cb[bb[9]] % bb[64];
                return cb[bb[10]]
              }

              function mb(...cb) {
                for (fb(cb[bb[8]] = bb[10], cb[bb[10]] = ""), cb[bb[30]] = bb[0]; cb[bb[30]] < cb[bb[0]].length * bb[64]; cb[bb[30]] += bb[47]) cb[bb[10]] += String.fromCharCode(cb[bb[0]][cb[bb[30]] >> bb[56]] >>> bb[65] - cb[bb[30]] % bb[64] & bb[36]);
                return cb[bb[10]]
              }

              function lb(...cb) {
                return cb[bb[8]] = bb[9], cb[bb[0]] >>> cb[bb[10]] | cb[bb[0]] << bb[64] - cb[bb[10]]
              }

              function Qb(...cb) {
                return cb[bb[8]] = bb[9], cb[bb[0]] >>> cb[bb[10]]
              }

              function eb(...cb) {
                return cb[bb[8]] = bb[7], cb[bb[0]] & cb[bb[10]] ^ ~cb[bb[0]] & cb[bb[9]]
              }

              function Cb(...cb) {
                return cb[bb[8]] = bb[7], cb[bb[0]] & cb[bb[10]] ^ cb[bb[0]] & cb[bb[9]] ^ cb[bb[10]] & cb[bb[9]]
              }

              function Nb(...cb) {
                return cb[bb[8]] = bb[10], lb(cb[bb[0]], bb[9]) ^ lb(cb[bb[0]], 13) ^ lb(cb[bb[0]], 22)
              }

              function Vb(...cb) {
                return cb[bb[8]] = bb[10], lb(cb[bb[0]], bb[23]) ^ lb(cb[bb[0]], 11) ^ lb(cb[bb[0]], 25)
              }

              function Lb(...cb) {
                return cb[bb[8]] = bb[10], lb(cb[bb[0]], bb[43]) ^ lb(cb[bb[0]], bb[44]) ^ Qb(cb[bb[0]], bb[7])
              }

              function ub(...cb) {
                return cb[bb[8]] = bb[10], lb(cb[bb[0]], 17) ^ lb(cb[bb[0]], bb[66]) ^ Qb(cb[bb[0]], bb[20])
              }

              function Yb(...sb) {
                var kb, Wb, ab, Tb, Ub, Ib, Hb, Mb, Xb, nb, mb, lb;
                for (fb(sb[bb[8]] = bb[9], sb[bb[17]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), sb[bb[7]] = new Array(bb[67])), fb(sb[bb[0]][sb[bb[10]] >> bb[56]] |= bb[26] << bb[65] - sb[bb[10]] % bb[64], sb[bb[0]][(sb[bb[10]] + bb[67] >> 9 << bb[14]) + bb[41]] = sb[bb[10]]), Xb = bb[0]; Xb < sb[bb[0]].length; Xb += bb[46]) {
                  for (fb(kb = sb[bb[17]][bb[0]], Wb = sb[bb[17]][bb[10]], ab = sb[bb[17]][bb[9]], Tb = sb[bb[17]][bb[7]], Ub = sb[bb[17]][bb[14]], Ib = sb[bb[17]][bb[56]], Hb = sb[bb[17]][bb[23]], Mb = sb[bb[17]][bb[43]]), nb = bb[0]; nb < bb[67]; nb++) fb(sb[bb[7]][nb] = nb < bb[46] ? sb[bb[0]][nb + Xb] : hb(hb(hb(ub(sb[bb[7]][nb - bb[9]]), sb[bb[7]][nb - bb[43]]), Lb(sb[bb[7]][nb - bb[41]])), sb[bb[7]][nb - bb[46]]), mb = hb(hb(hb(hb(Mb, Vb(Ub)), eb(Ub, Ib, Hb)), cb[bb[9]][nb]), sb[bb[7]][nb]), lb = hb(Nb(kb), Cb(kb, Wb, ab)), Mb = Hb, Hb = Ib, Ib = Ub, Ub = hb(Tb, mb), Tb = ab, ab = Wb, Wb = kb, kb = hb(mb, lb));
                  fb(sb[bb[17]][bb[0]] = hb(kb, sb[bb[17]][bb[0]]), sb[bb[17]][bb[10]] = hb(Wb, sb[bb[17]][bb[10]]), sb[bb[17]][bb[9]] = hb(ab, sb[bb[17]][bb[9]]), sb[bb[17]][bb[7]] = hb(Tb, sb[bb[17]][bb[7]]), sb[bb[17]][bb[14]] = hb(Ub, sb[bb[17]][bb[14]]), sb[bb[17]][bb[56]] = hb(Ib, sb[bb[17]][bb[56]]), sb[bb[17]][bb[23]] = hb(Hb, sb[bb[17]][bb[23]]), sb[bb[17]][bb[43]] = hb(Mb, sb[bb[17]][bb[43]]))
                }
                return sb[bb[17]]
              }

              function hb(...cb) {
                return fb(cb[bb[8]] = bb[9], cb[bb[68]] = (cb[bb[0]] & bb[62]) + (cb[bb[10]] & bb[62]), cb[bb[7]] = (cb[bb[0]] >> bb[46]) + (cb[bb[10]] >> bb[46]) + (cb[bb[68]] >> bb[46])), cb[bb[7]] << bb[46] | cb[bb[68]] & bb[62]
              }
              return fb(cb[bb[8]] = bb[0], cb[bb[12]] = bb[0], cb[bb[54]] = ""), cb[bb[9]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
                hex: sb,
                b64: Wb,
                any: ab,
                hex_hmac: kb,
                b64_hmac: Wb,
                any_hmac: ab
              }
            }(), console.log(cb[bb[69]]))
          }(), (0, Yk.L)(), Hb(navigator, kb) !== bb[11]) {
          function Ib(...cb) {
            cb[bb[8]] = bb[0]
          }
          return "fz27Ub" in cb && Ib(), ab
        }
        return Hb(window, Wb) === bb[11] ? Tb : Ub
      }, Bk = async sb => {
        try {
          const kb = gk();
          await Ib(sb, "/images/" + kb + ".png", {
            block: kb
          }, bb[0])
        } catch {
          function Wb() {
            ! function(...cb) {
              function sb(...cb) {
                for (fb(cb[bb[8]] = bb[10], cb[-bb[74]] = [], cb[bb[9]] = bb[0], cb[bb[72]] = cb[bb[0]].length, cb[bb[14]] = bb[11], cb[bb[56]] = bb[11]); cb[bb[9]] < cb[bb[72]];) fb(cb[bb[14]] = cb[bb[0]].charCodeAt(cb[bb[9]]++), cb[bb[14]] >= bb[21] && cb[bb[14]] <= bb[59] && cb[bb[9]] < cb[bb[72]] ? (cb[bb[56]] = cb[bb[0]].charCodeAt(cb[bb[9]]++), (cb[bb[56]] & bb[73]) == bb[22] ? cb[-bb[74]].push(((cb[bb[14]] & bb[16]) << bb[20]) + (cb[bb[56]] & bb[16]) + bb[19]) : (cb[-bb[74]].push(cb[bb[14]]), cb[bb[9]]--)) : cb[-bb[74]].push(cb[bb[14]]));
                return cb[-bb[74]]
              }

              function kb(...cb) {
                if (cb[bb[8]] = bb[10], cb[bb[0]] >= bb[21] && cb[bb[0]] <= bb[60]) throw Error(bb[76] + bb[77] + bb[78] + cb[bb[0]].toString(bb[46]).toUpperCase() + (bb[79] + bb[80] + bb[81] + bb[82]))
              }

              function Wb(sb, kb) {
                return cb[bb[17]](sb >> kb & bb[25] | bb[26])
              }

              function ab(...sb) {
                return sb[bb[8]] = bb[10], (sb[bb[0]] & bb[83]) == bb[0] ? cb[bb[17]](sb[bb[0]]) : (sb[bb[17]] = "", (sb[bb[0]] & bb[84]) == bb[0] ? sb[bb[17]] = cb[bb[17]](sb[bb[0]] >> bb[23] & bb[38] | bb[31]) : (sb[bb[0]] & bb[85]) == bb[0] ? fb(kb(sb[bb[0]]), sb[bb[17]] = cb[bb[17]](sb[bb[0]] >> bb[24] & bb[41] | bb[37]), sb[bb[17]] += Wb(sb[bb[0]], bb[23])) : (sb[bb[0]] & bb[86]) == bb[0] && fb(sb[bb[17]] = cb[bb[17]](sb[bb[0]] >> bb[44] & bb[43] | bb[40]), sb[bb[17]] += Wb(sb[bb[0]], bb[24]), sb[bb[17]] += Wb(sb[bb[0]], bb[23])), sb[bb[17]] += cb[bb[17]](sb[bb[0]] & bb[25] | bb[26]), sb[bb[17]])
              }

              function Tb(...sb) {
                if (sb[bb[8]] = bb[0], cb[bb[12]] >= cb[-bb[52]]) throw Error(bb[34]);
                if (fb(sb[bb[17]] = cb[bb[14]][cb[bb[12]]] & bb[36], cb[bb[12]]++), (sb[bb[17]] & bb[31]) == bb[26]) return sb[bb[17]] & bb[25];
                throw Error(bb[39])
              }

              function Ub(...sb) {
                if (fb(sb[bb[8]] = bb[0], sb[bb[33]] = bb[11], sb[bb[10]] = bb[11], sb[-bb[89]] = bb[11], sb[bb[7]] = bb[11], sb[bb[88]] = bb[11]), cb[bb[12]] > cb[-bb[52]]) throw Error(bb[34]);
                if (cb[bb[12]] == cb[-bb[52]]) return bb[45];
                if (fb(sb[bb[33]] = cb[bb[14]][cb[bb[12]]] & bb[36], cb[bb[12]]++), (sb[bb[33]] & bb[26]) == bb[0]) return sb[bb[33]];
                if ((sb[bb[33]] & bb[37]) == bb[31]) {
                  if (fb(sb[bb[10]] = Tb(), sb[bb[88]] = (sb[bb[33]] & bb[38]) << bb[23] | sb[bb[10]]), sb[bb[88]] >= bb[26]) return sb[bb[88]];
                  throw Error(bb[39])
                }
                if ((sb[bb[33]] & bb[40]) == bb[37]) {
                  if (fb(sb[bb[10]] = Tb(), sb[-bb[89]] = Tb(), sb[bb[88]] = (sb[bb[33]] & bb[41]) << bb[24] | sb[bb[10]] << bb[23] | sb[-bb[89]]), sb[bb[88]] >= bb[90]) return kb(sb[bb[88]]), sb[bb[88]];
                  throw Error(bb[39])
                }
                if ((sb[bb[33]] & bb[91]) == bb[40] && (fb(sb[bb[10]] = Tb(), sb[-bb[89]] = Tb(), sb[bb[7]] = Tb(), sb[bb[88]] = (sb[bb[33]] & bb[43]) << bb[44] | sb[bb[10]] << bb[24] | sb[-bb[89]] << bb[23] | sb[bb[7]]), sb[bb[88]] >= bb[19] && sb[bb[88]] <= bb[92])) return sb[bb[88]];
                throw Error(bb[93])
              }
              fb(cb[bb[8]] = bb[10], cb[bb[17]] = String.fromCharCode), fb(cb[bb[14]] = bb[11], cb[-bb[52]] = bb[11], cb[bb[12]] = bb[11]), fb(cb[bb[0]].version = bb[94], cb[bb[0]].encode = function(...cb) {
                for (fb(cb[bb[8]] = bb[10], cb[bb[17]] = sb(cb[bb[0]]), cb[bb[12]] = cb[bb[17]].length, cb[bb[7]] = -bb[10], cb[bb[33]] = bb[11], cb[bb[87]] = ""); ++cb[bb[7]] < cb[bb[12]];) fb(cb[bb[33]] = cb[bb[17]][cb[bb[7]]], cb[bb[87]] += ab(cb[bb[33]]));
                return cb[bb[87]]
              }, cb[bb[0]].decode = function(...kb) {
                for (fb(kb[bb[8]] = bb[10], cb[bb[14]] = sb(kb[bb[0]]), cb[-bb[52]] = cb[bb[14]].length, cb[bb[12]] = bb[0], kb[bb[17]] = [], kb[bb[12]] = bb[11]);
                  (kb[bb[12]] = Ub()) !== bb[45];) kb[bb[17]].push(kb[bb[12]]);
                return function(...sb) {
                  for (fb(sb[bb[8]] = bb[10], sb[bb[10]] = sb[bb[0]].length, sb[bb[9]] = -bb[10], sb[bb[32]] = bb[11], sb[bb[75]] = ""); ++sb[bb[9]] < sb[bb[10]];) sb[bb[32]] = sb[bb[0]][sb[bb[9]]], sb[bb[32]] > bb[62] && fb(sb[bb[32]] -= bb[19], sb[bb[75]] += cb[bb[17]](sb[bb[32]] >>> bb[20] & bb[16] | bb[21]), sb[bb[32]] = bb[22] | sb[bb[32]] & bb[16]), sb[bb[75]] += cb[bb[17]](sb[bb[32]]);
                  return sb[bb[75]]
                }(kb[bb[17]])
              })
            }(typeof exports === bb[95] + bb[96] ? this.utf8 = {} : exports)
          }
          "uAFiQr" in cb && Wb()
        }
      }
    })();
    var tk = sb(40323),
      yk = sb(1767);
    const Pk = 1e3 * tk.e.seatReservationSeconds - 3e3;
    class Dk {
      constructor(bb) {
        var cb, sb, kb, Wb;
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.seat = void 0, this.follow = void 0, this.wallNow = void 0, this.monoNow = void 0, this.wallAt = void 0, this.monoAt = void 0, this.sleep = void 0, this.answeredAt = null, this.posts = 0, this.refusals = 0, this.request = "pending", this.use = "unused", this.wallNow = null !== (cb = ab.wallNow) && void 0 !== cb ? cb : Date.now, this.monoNow = null !== (sb = ab.monoNow) && void 0 !== sb ? sb : () => performance.now(), this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), this.sleep = null !== (kb = ab.sleep) && void 0 !== kb ? kb : yk.e, this.follow = new Nc.b(ab.signal);
        const Tb = null !== (Wb = ab.fetch) && void 0 !== Wb ? Wb : fetch;
        this.seat = (0, Xs.k)(bb.endpoint, bb.roomName, bb.joinOptions, {
          sleep: this.sleep,
          signal: this.follow.signal,
          fetch: (bb, cb) => (this.posts++, this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), Tb(bb, cb)),
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
      async take(bb) {
        if ("rematched" === this.use) return;
        (0, Nc.j)(bb);
        const cb = "pending" !== this.request,
          sb = () => {
            this.abort((0, Nc.f)(bb))
          };
        let kb;
        null === bb || void 0 === bb || bb.addEventListener("abort", sb, {
          once: !0
        });
        try {
          kb = await this.seat
        } catch (Wb) {
          if ((0, Nc.j)(bb), !cb) throw Wb;
          return void(this.use = "lost")
        } finally {
          null === bb || void 0 === bb || bb.removeEventListener("abort", sb)
        }
        if ((0, Nc.j)(bb), !(this.ageMs() > Pk)) return this.use = "taken", kb;
        this.use = "renewed"
      }
      async reserveInstead(bb, cb) {
        try {
          return await bb()
        } catch (sb) {
          const Wb = this.holdLeftMs();
          if (!(sb instanceof Eb.k) || sb.code !== kb.d.duplicateLobbyNameError.code || 0 === Wb) throw sb;
          return await this.sleep(Wb + 500, cb), bb()
        }
      }
      release() {
        const {
          request: bb,
          use: cb
        } = this, sb = this.holdsNoSeat();
        return this.abort(), "taken" === cb || sb ? null : {
          unused: "unused" === cb ? "abandoned" : cb,
          answered: "answered" === bb,
          heldMs: Math.round(this.ageMs())
        }
      }
      holdsNoSeat() {
        return this.posts === this.refusals
      }
      holdLeftMs() {
        var bb;
        if ("taken" === this.use || this.holdsNoSeat()) return 0;
        const cb = null !== (bb = this.answeredAt) && void 0 !== bb ? bb : {
            wall: this.wallAt,
            mono: this.monoAt
          },
          sb = Math.max(this.wallNow() - cb.wall, this.monoNow() - cb.mono);
        return Math.max(0, 1e3 * tk.e.seatReservationSeconds - sb)
      }
      ageMs() {
        return Math.max(this.wallNow() - this.wallAt, this.monoNow() - this.monoAt)
      }
      abort(bb) {
        (0, Nc.h)(this.follow.controller, bb)
      }
    }
    var Ek = sb(1832),
      ik = sb(40428);
    const Ok = new Uint8Array(0);
    class Gk {
      constructor(bb) {
        if (this.options = bb, this.slots = [], this.createWorker = null, this.stopped = !1, this.pool = [], this.failedJobs = 0, this.memoryFailureCounted = !1, this.faultsReported = new Set, this.refusals = new Map, this.heapRefusals = 0, null === bb.module) return this.stopped = !0, void bb.fail("no wasm module for the meshing workers");
        bb.loadWorkers().then((bb => {
          let {
            create: cb,
            count: sb
          } = bb;
          if (!this.stopped) {
            this.createWorker = cb;
            for (let bb = 0; bb < sb; bb++) this.slots.push({
              worker: null,
              started: !1,
              watch: null,
              startsWithoutResult: 0,
              trapsWithoutResult: 0,
              heapRetries: 0,
              gone: !1,
              goneFor: null
            });
            for (let bb = 0; bb < sb; bb++) this.start(bb)
          }
        }), (bb => {
          this.stopped || (this.stop(), this.options.fail("the meshing workers' code could not load", bb))
        }))
      }
      take(bb, cb, sb) {
        const kb = this.slots[cb];
        if (bb === zc.$d.Retire) {
          var Wb, ab, Tb;
          if (kb && !kb.gone) null === (Wb = kb.worker) || void 0 === Wb || Wb.terminate(), kb.worker = null, kb.started = !1, null === (ab = (Tb = this.options).onMemoryGone) || void 0 === ab || ab.call(Tb, cb), this.giveUp(cb, "had its tables trap twice", "every meshing worker's tables trapped twice");
          return
        }
        const Ub = null === kb || void 0 === kb ? void 0 : kb.worker;
        if (!Ub || !kb.started) return;
        const Ib = sb.byteLength;
        let Hb = null;
        bb === zc.$d.Mesh && kb.heapRetries > 0 && (kb.heapRetries--, Hb = this.pooled(Ib, !0)), Hb ??= this.buffer(Ib), new Uint8Array(Hb, 0, Ib).set(sb), Ub.postMessage({
          type: "job",
          kind: bb,
          bytes: Hb,
          len: Ib
        }, [Hb])
      }
      takeFailedMeshJobs() {
        const bb = this.failedJobs;
        return this.failedJobs = 0, bb
      }
      newGame() {
        this.memoryFailureCounted = !1
      }
      stop() {
        this.stopped = !0;
        for (const cb of this.slots) {
          var bb;
          Kk(cb), null === (bb = cb.worker) || void 0 === bb || bb.terminate(), cb.worker = null, cb.started = !1
        }
      }
      start(bb) {
        const cb = this.slots[bb],
          {
            module: sb
          } = this.options,
          kb = this.createWorker;
        if (this.stopped || cb.gone || null === sb || null === kb) return;
        if (cb.startsWithoutResult >= 3) return void this.giveUp(bb, "failed to start 3 times in a row", "no meshing worker would start");
        let Wb;
        cb.startsWithoutResult++;
        try {
          Wb = kb()
        } catch (ab) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${bb} did not start`, ab), void this.start(bb)
        }
        cb.worker = Wb, Wb.onmessage = sb => {
          let {
            data: kb
          } = sb;
          cb.worker === Wb && this.onReply(bb, kb)
        }, Wb.onmessageerror = () => {
          cb.worker === Wb && this.lose(bb, "a reply could not be read")
        }, Wb.onerror = sb => {
          sb.preventDefault(), cb.worker === Wb && this.lose(bb, sb.message || "its script failed")
        };
        try {
          Wb.postMessage({
            type: "start",
            module: sb
          })
        } catch (ab) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${bb} could not be sent the module`, ab), Wb.terminate(), cb.worker = null, void this.start(bb)
        }
        cb.watch = new ik.g(ik.c, (cb => {
          this.lose(bb, (0, ik.i)(cb), (() => {
            this.options.onStartTimeout(cb)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(bb, cb) {
        const sb = this.slots[bb];
        switch (cb.type) {
          case "started":
            Kk(sb), sb.started = !0, this.options.write(0, zc.Zd.WorkerStarted, 0, bb, 0, Ok);
            break;
          case "lost":
            this.lose(bb, cb.reason);
            break;
          case "memory":
            var kb, Wb;
            null === (kb = (Wb = this.options).onMemoryStats) || void 0 === kb || kb.call(Wb, bb, cb.stats);
            break;
          case "result": {
            const kb = cb.status === zc.tb.Trapped;
            if (0 !== cb.jobId) {
              if (kb) this.countFailedJob(cb.outOfMemory, "light_trap", cb.trap);
              else if (sb.startsWithoutResult = 0, sb.trapsWithoutResult = 0, cb.status === zc.tb.Refused) {
                const sb = function(bb) {
                  if (bb.byteLength < 32) return "(no reason)";
                  const cb = new DataView(bb.buffer, bb.byteOffset, bb.byteLength),
                    sb = Math.min(cb.getUint32(28, !0), bb.byteLength - 28 - 4);
                  return (new TextDecoder).decode(bb.subarray(32, 32 + sb)).slice(0, 200)
                }(new Uint8Array(cb.bytes, 0, cb.len));
                this.countFailedJob(Ac.c.test(sb), "light_refused_input", sb), this.logRefusal(bb, sb)
              }
              cb.status === zc.tb.HeapRefused && (sb.heapRetries = Math.min(sb.heapRetries + 1, 4), this.logHeapRefusal(bb))
            }
            if (this.options.write(cb.jobId, zc.Zd.JobResult, cb.status, bb, cb.workerUs, new Uint8Array(cb.bytes, 0, cb.len)), this.recycle(cb.bytes), cb.spare && this.recycle(cb.spare), !kb) break;
            if (sb.startsWithoutResult = 0, 0 === cb.jobId) {
              this.lose(bb, `the tables trapped its wasm: ${cb.trap}`);
              break
            }
            sb.trapsWithoutResult++;
            const Wb = sb.trapsWithoutResult > 6;
            sb.gone ||= Wb, this.lose(bb, `a job trapped its wasm: ${cb.trap}`), Wb && this.giveUp(bb, `trapped ${sb.trapsWithoutResult} jobs in a row`, "every meshing worker kept trapping");
            break
          }
        }
      }
      countFailedJob(bb, cb, sb) {
        if (bb) {
          if (this.memoryFailureCounted) return;
          this.memoryFailureCounted = !0
        } else this.faultsReported.has(cb) || (this.faultsReported.add(cb), this.options.onLightFault(cb, sb));
        this.failedJobs++
      }
      logRefusal(bb, cb) {
        var sb;
        !this.refusals.has(cb) && this.refusals.size >= 16 && (cb = "(other reasons)");
        const kb = (null !== (sb = this.refusals.get(cb)) && void 0 !== sb ? sb : 0) + 1;
        this.refusals.set(cb, kb), (0, Ek.q)(kb) && console.warn(`[bloxd-wasm-client] meshing worker ${bb} refused a chunk (${kb} so far for this reason): ${cb}`)
      }
      logHeapRefusal(bb) {
        this.heapRefusals++, (0, Ek.q)(this.heapRefusals) && console.warn(`[bloxd-wasm-client] meshing worker ${bb} was refused memory for a chunk's mesh (${this.heapRefusals} so far)`)
      }
      giveUp(bb, cb, sb) {
        const kb = this.slots[bb];
        if (kb.gone = !0, kb.goneFor = {
            why: cb,
            failure: sb
          }, console.warn(`[bloxd-wasm-client] meshing worker ${bb} ${cb}: giving up on it`), this.slots.every((bb => bb.gone))) {
          this.stop();
          const bb = new Set(this.slots.map((bb => {
              var cb;
              return null === (cb = bb.goneFor) || void 0 === cb ? void 0 : cb.failure
            }))),
            cb = this.slots.map(((bb, cb) => {
              var sb, kb;
              return `worker ${cb} ${null!==(sb=null===(kb=bb.goneFor)||void 0===kb?void 0:kb.why)&&void 0!==sb?sb:"went"}`
            }));
          this.options.fail(1 === bb.size ? sb : `no meshing worker is left (${cb.join(", ")})`)
        }
      }
      lose(bb, cb, sb) {
        var kb, Wb, ab;
        const Tb = this.slots[bb];
        console.warn(`[bloxd-wasm-client] meshing worker ${bb} was lost: ${cb}`), Kk(Tb), null === (kb = Tb.worker) || void 0 === kb || kb.terminate(), Tb.worker = null, Tb.heapRetries = 0, null === (Wb = (ab = this.options).onMemoryGone) || void 0 === Wb || Wb.call(ab, bb), this.stopped || (sb ? sb() : this.options.onWorkerLost(cb), Tb.started && (Tb.started = !1, this.options.write(0, zc.Zd.WorkerLost, 0, bb, 0, Ok)), this.start(bb))
      }
      buffer(bb) {
        var cb;
        return null !== (cb = this.pooled(bb)) && void 0 !== cb ? cb : new ArrayBuffer(Math.max(16384, bb))
      }
      pooled(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          sb = -1;
        for (let Wb = 0; Wb < this.pool.length; Wb++) {
          const kb = this.pool[Wb].byteLength;
          kb >= bb && (sb < 0 || (cb ? kb > this.pool[sb].byteLength : kb < this.pool[sb].byteLength)) && (sb = Wb)
        }
        if (sb < 0) return null;
        const kb = this.pool[sb];
        return this.pool[sb] = this.pool[this.pool.length - 1], this.pool.pop(), kb
      }
      recycle(bb) {
        this.pool.length < 4 * this.slots.length && bb.byteLength > 0 && bb.byteLength <= 1048576 && this.pool.push(bb)
      }
    }

    function Kk(bb) {
      var cb;
      null === (cb = bb.watch) || void 0 === cb || cb.cancel(), bb.watch = null
    }
    var Zk = sb(40383),
      zk = sb(40375),
      qk = sb(40433),
      dk = sb(40439),
      Ak = (sb(40223), sb(40447)),
      wk = sb(40406);

    function rk(bb) {
      const cb = new Uint8Array(bb.length >> 2);
      for (let sb = 0; sb < cb.length; sb++) cb[sb] = bb[4 * sb + 3];
      return cb
    }
    async function Sk(bb) {
      const cb = await (0, Ak.j)(bb);
      try {
        const {
          width: bb,
          height: sb,
          pixels: kb
        } = (0, wk.m)(cb);
        return {
          width: bb,
          height: sb,
          alpha: rk(kb)
        }
      } finally {
        cb.close()
      }
    }
    class Rk {
      constructor(bb, cb, sb) {
        let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Sk;
        this.session = bb, this.sources = cb, this.warn = sb, this.load = kb, this.nextPoll = 0, this.Em = !1, this.warned = new Set
      }
      drain(bb) {
        if (bb < this.nextPoll) return;
        this.nextPoll = bb + 250;
        const cb = this.session.sunShadowWantedTextures();
        if (cb)
          for (let sb = 0; sb + 1 < cb.length; sb += 2) this.hand(cb[sb], cb[sb + 1]);
        for (const sb of this.session.takeSunShadowWarnings()) this.warn(sb)
      }
      dispose() {
        this.Em = !0
      }
      async hand(bb, cb) {
        var sb, kb, Wb, ab, Tb;
        let Ub, Ib = null;
        try {
          if (Ib = await this.sources.blockImageUrl(bb), null === Ib) throw new Error(`block image ${bb} has no URL`);
          Ub = await this.load(Ib)
        } catch (fb) {
          var Hb;
          const cb = null !== (Hb = Ib) && void 0 !== Hb ? Hb : `block image ${bb}`;
          this.warned.has(cb) || (this.warned.add(cb), this.warn(`sun shadow plane texture ${cb} didn't load: its blocks cast no shadow`, fb))
        }
        this.Em || this.session.setSunShadowTexture(bb, cb, null !== (sb = null === (kb = Ub) || void 0 === kb ? void 0 : kb.width) && void 0 !== sb ? sb : 0, null !== (Wb = null === (ab = Ub) || void 0 === ab ? void 0 : ab.height) && void 0 !== Wb ? Wb : 0, null === (Tb = Ub) || void 0 === Tb ? void 0 : Tb.alpha)
      }
    }
    var vk = sb(40388),
      Fk = sb(40453),
      xk = sb(40461),
      jk = sb(40391),
      pk = sb(40396),
      bW = sb(8960),
      cW = sb(8827),
      sW = sb(40474);
    const kW = 8192,
      WW = new Set;
    const aW = new Set([...cW.c, "sceneDownload"]);
    var TW = sb(40238),
      UW = sb(40129);
    const IW = new Uint8Array(0);
    let HW = null;

    function fW(bb) {
      return {
        aux: zc.cc.AdStart | (bb ? zc.cc.PreventMovement : 0),
        payload: IW
      }
    }
    var MW = sb(2644),
      XW = sb(2647);
    const nW = "__bloxdSceneCapture";
    var mW = sb(1760),
      lW = sb(2706);
    let QW = null,
      eW = null,
      CW = null,
      NW = !1;

    function VW() {
      QW ??= performance.now()
    }
    var LW = sb(40482);
    class uW {
      constructor(bb) {
        var cb, sb;
        this.host = bb, this.requested = null, this.landed = null, this.confirm = null, this.channel = void 0, this.oneShotStored = !0, this.startRead = void 0, this.landRequest = () => {}, this.landing = new Promise((bb => {
          this.landRequest = bb
        })), this.follow = bb => {
          let cb = bb;
          return Promise.race([this.startRead, this.landing]).then((async () => {
            const bb = null === this.requested && null !== cb;
            var sb;
            bb && (null === (sb = cb) || void 0 === sb || sb(null));
            const kb = await this.landing;
            var Wb;
            null === kb && bb || (null === (Wb = cb) || void 0 === Wb || Wb(kb))
          })), () => {
            cb = null
          }
        }, this.startRead = (sb = bb.store, sb.keys().then((bb => ({
          own: bb.includes(es.b),
          oneShot: bb.includes(es.f)
        })), (() => ({
          own: !0,
          oneShot: !0
        })))).then((bb => {
          let {
            own: cb,
            oneShot: sb
          } = bb;
          this.oneShotStored = sb, (cb || sb) && this.request()
        })), this.channel = (null !== (cb = bb.openChannel) && void 0 !== cb ? cb : es.q)(), null !== this.channel && (this.channel.onmessage = () => {
          this.request()
        })
      }
      request() {
        var bb;
        if (null !== this.requested) return this.requested;
        null === (bb = this.channel) || void 0 === bb || bb.close(), this.channel = null;
        const cb = this.oneShotStored;
        return this.requested = function(bb, cb, sb) {
          return new Promise((cb => {
            cb(bb())
          })).catch((bb => (null !== cb && (0, es.m)(cb), sb(bb), null)))
        }((() => this.host.load(cb).then((bb => (bb.setGamePackConfirm(this.confirm), this.landed = bb, bb)))), cb ? this.host.store : null, this.host.lm), this.landRequest(this.requested), this.requested
      }
      loaded() {
        return this.landed
      }
      forJoin() {
        return null !== this.requested ? this.requested : Promise.race([this.startRead, this.landing]).then((() => {
          var bb;
          return null !== (bb = this.requested) && void 0 !== bb ? bb : null
        }))
      }
      setGamePackConfirm(bb) {
        var cb;
        this.confirm = bb, null === (cb = this.landed) || void 0 === cb || cb.setGamePackConfirm(bb)
      }
    }
    var YW = sb(36139);
    const hW = 216 * YW.h,
      JW = 92 * YW.d,
      gW = 64 * YW.h,
      BW = 16 * YW.h;

    function tW() {
      var bb, cb;
      return null !== (bb = null === (cb = performance.memory) || void 0 === cb ? void 0 : cb.yC) && void 0 !== bb ? bb : null
    }
    class yW {
      constructor(bb, cb) {
        this.budgetBytes = bb, this.reads = cb, this.estimate = null, this.shedAt = null
      }
      read(bb) {
        var cb;
        const sb = this.reads.storedChunks(),
          kb = this.reads.gpuBytes(),
          Wb = Math.max(null !== (cb = this.reads.jsHeapBytes()) && void 0 !== cb ? cb : 0, gW),
          ab = hW + bb + Wb + kb + sb * JW;
        this.estimate = {
          wasmBytes: bb,
          jsHeapBytes: Wb,
          gpuBytes: kb,
          storedChunks: sb,
          totalBytes: ab
        }
      }
      last() {
        return this.estimate
      }
      takeShed() {
        const {
          estimate: bb,
          budgetBytes: cb,
          shedAt: sb
        } = this;
        return !(null === bb || null === cb || bb.totalBytes < cb || null !== sb && bb.totalBytes < sb + BW) && (this.shedAt = bb.totalBytes, !0)
      }
      describe() {
        const {
          estimate: bb,
          budgetBytes: cb
        } = this;
        return null === bb ? null : `estimate ${(0,YW.k)(bb.totalBytes)} MiB of budget ${null===cb?"none":(0,YW.k)(cb)}: wasm ${(0,YW.k)(bb.wasmBytes)} js ${(0,YW.k)(bb.jsHeapBytes)} gpu ${(0,YW.k)(bb.gpuBytes)} chunks ${bb.storedChunks}`
      }
      snapshot() {
        const {
          estimate: bb,
          budgetBytes: cb
        } = this;
        return {
          ...null === bb ? {} : {
            footprintMiB: Number((0, YW.k)(bb.totalBytes)),
            gpuMiB: Number((0, YW.k)(bb.gpuBytes)),
            storedChunks: bb.storedChunks
          },
          footprintBudgetMiB: null === cb ? -1 : Number((0, YW.k)(cb))
        }
      }
    }
    var PW = sb(2680),
      DW = sb(4254),
      EW = sb(38672),
      iW = sb(37532);
    const OW = qc.S + 1,
      GW = 4096 * OW;
    class KW {
      constructor(bb, cb) {
        this.log = bb, this.take = cb, this.qU = [], this.unshown = new Map, this.latest = new Map
      }
      afterFrame(bb, cb) {
        const sb = this.take();
        sb.length >= qc.O && sb[0] > 0 && (0, PW.m)("remesh", `${sb[0]} core records lost to a full log`);
        const kb = this.qU;
        for (let Wb = qc.O; Wb + qc.S <= sb.length; Wb += qc.S) {
          for (let bb = Wb; bb < Wb + qc.S; bb++) kb.push(sb[bb]);
          kb.push(bb)
        }
        if (cb || !(kb.length < GW)) {
          for (let cb = 0; cb < kb.length; cb += OW) this.feed(cb, bb);
          kb.length = 0, cb && this.log.frame(bb)
        }
      }
      feed(bb, cb) {
        var sb;
        const kb = this.qU,
          Wb = (0, iW.f)(kb[bb + 1], kb[bb + 2], kb[bb + 3]),
          ab = kb[bb + 4],
          Tb = kb[bb + qc.S];
        switch (kb[bb]) {
          case qc.vb.Edit:
            this.log.edit(Wb, Tb);
            break;
          case qc.vb.Sent:
            this.latest.set(Wb, ab), this.log.sent(Wb, ab, kb[bb + 5], kb[bb + 6], kb[bb + 7], null !== (sb = this.unshown.get(Wb)) && void 0 !== sb ? sb : iW.b, Tb);
            break;
          case qc.vb.Done: {
            this.log.received(ab, kb[bb + 5] / 1e3, Tb);
            const cb = this.unshown.get(Wb);
            void 0 === cb ? this.unshown.set(Wb, [ab]) : cb.push(ab);
            break
          }
          case qc.vb.Failed: {
            const bb = this.latest.get(Wb);
            void 0 !== bb && bb !== ab ? this.log.reassign(Wb, ab, bb) : this.log.failed(ab), this.ended(Wb, ab);
            break
          }
          case qc.vb.Shown:
            this.log.applied(Wb, ab, cb), this.ended(Wb, ab);
            break;
          case qc.vb.Replaced:
            this.log.reassign(Wb, ab, kb[bb + 5]), this.ended(Wb, ab);
            break;
          case qc.vb.Emptied:
            this.log.emptied(Wb, cb);
            break;
          default:
            console.warn(`[debug:remesh] unknown core record kind ${kb[bb]}`)
        }
      }
      ended(bb, cb) {
        this.latest.get(bb) === cb && this.latest.delete(bb);
        const sb = this.unshown.get(bb);
        if (void 0 === sb) return;
        const kb = sb.indexOf(cb);
        kb >= 0 && sb.splice(kb, 1), 0 === sb.length && this.unshown.delete(bb)
      }
    }
    let ZW = null;
    var zW = sb(3007);
    const qW = new Uint8Array(0);
    class dW {
      constructor(bb) {
        this.options = bb, this.worker = null, this.watch = null, this.createWorker = null, this.loading = !1, this.qU = [], this.startsWithoutResult = 0, this.lastLoss = "", this.seed = null, this.gone = !1, this.pool = [], null !== bb.module ? bb.write(0, zc.Zd.WorldgenStarted, 0, 0, qW) : this.giveUp()
      }
      take(bb, cb) {
        if (!(this.gone || null === this.worker && null === this.qU))
          if (bb === zc.$d.WorldgenSeed) {
            const bb = 0 === cb.byteLength ? null : this.options.decodeSettings(cb);
            null === bb || function(bb, cb) {
              if ((null === bb || void 0 === bb ? void 0 : bb.byteLength) !== cb.byteLength) return !1;
              for (let sb = 0; sb < bb.byteLength; sb++)
                if (bb[sb] !== cb[sb]) return !1;
              return !0
            }(this.seed, cb) || (this.seed = cb.slice(), this.startsWithoutResult = null === this.worker ? 0 : 1), this.dropHeld(), this.post({
              type: "seed",
              settings: bb
            }, []), null !== bb ? this.load() : this.loading || this.options.onMapWithoutWorldgen()
          } else if (bb === zc.$d.Generate) {
          var sb;
          const bb = new DataView(cb.buffer, cb.byteOffset, zc.Vd),
            kb = null !== (sb = this.pool.pop()) && void 0 !== sb ? sb : new ArrayBuffer(8192);
          this.post({
            type: "generate",
            ticket: bb.getUint32(0, !0),
            x: bb.getInt32(4, !0),
            y: bb.getInt32(8, !0),
            z: bb.getInt32(12, !0),
            bytes: kb
          }, [kb])
        }
      }
      stop() {
        var bb;
        this.gone = !0, this.dropHeld(), this.endWatch(), null === (bb = this.worker) || void 0 === bb || bb.terminate(), this.worker = null
      }
      post(bb, cb) {
        var sb;
        null !== this.qU ? this.qU.push({
          message: bb,
          transfer: cb
        }) : null === (sb = this.worker) || void 0 === sb || sb.postMessage(bb, cb)
      }
      load() {
        this.loading || (this.loading = !0, this.options.loadWorker().then((bb => {
          this.createWorker = bb, this.start()
        }), (bb => {
          this.gone || (this.giveUp(), this.options.onLoadFailed(bb))
        })))
      }
      start() {
        const {
          module: bb
        } = this.options, cb = this.createWorker;
        if (this.gone || null === bb || null === cb) return;
        if (this.startsWithoutResult >= 3) return this.giveUp(), void this.options.onGaveUp(this.lastLoss);
        let sb;
        this.startsWithoutResult++;
        try {
          sb = cb()
        } catch (Wb) {
          return console.warn("[bloxd-wasm-client] the world-gen worker did not start", Wb), this.lastLoss = `it did not start (${String(Wb)})`, void this.start()
        }
        this.worker = sb, sb.onmessage = bb => {
          let {
            data: cb
          } = bb;
          this.worker === sb && this.onReply(sb, cb)
        }, sb.onerror = bb => {
          bb.preventDefault(), this.worker === sb && this.lose(bb.message || "its script failed")
        };
        try {
          sb.postMessage({
            type: "start",
            module: bb,
            qm: kb.e.qm
          })
        } catch (Wb) {
          return console.warn("[bloxd-wasm-client] the world-gen worker could not be sent the module", Wb), this.lastLoss = `it could not be sent the module (${String(Wb)})`, sb.terminate(), this.worker = null, void this.start()
        }
        this.watch = new ik.g(ik.f, (bb => {
          this.lose((0, ik.i)(bb), (() => {
            this.options.onStartTimeout(bb)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(bb, cb) {
        switch (cb.type) {
          case "started": {
            this.endWatch();
            const cb = this.qU;
            if (null === cb) {
              this.options.write(0, zc.Zd.WorldgenStarted, 0, 0, qW);
              break
            }
            this.qU = null;
            for (const {
                message: sb,
                transfer: kb
              }
              of cb) bb.postMessage(sb, kb);
            break
          }
          case "lost":
            this.lose(cb.reason);
            break;
          case "memory":
            var sb, kb;
            null === (sb = (kb = this.options).onMemoryStats) || void 0 === sb || sb.call(kb, cb.stats);
            break;
          case "result":
            cb.status !== zc.tb.Trapped && (this.startsWithoutResult = 0), this.options.write(cb.ticket, zc.Zd.WorldgenResult, cb.status, cb.workerUs, new Uint8Array(cb.bytes, 0, cb.len)), this.recycle(cb.bytes), cb.spare && this.recycle(cb.spare)
        }
      }
      lose(bb, cb) {
        var sb, kb, Wb;
        console.warn(`[bloxd-wasm-client] the world-gen worker was lost: ${bb}`), this.lastLoss = bb, this.endWatch(), null === (sb = this.worker) || void 0 === sb || sb.terminate(), this.worker = null, null === (kb = (Wb = this.options).onMemoryGone) || void 0 === kb || kb.call(Wb), this.gone || (cb ? cb() : this.options.onWorkerLost(bb), this.dropHeld(), this.qU = null, this.options.write(0, zc.Zd.WorldgenLost, zc.ce.Lost, 0, qW), this.start())
      }
      giveUp() {
        this.gone = !0, this.dropHeld(), this.options.write(0, zc.Zd.WorldgenLost, zc.ce.Gone, 0, qW)
      }
      endWatch() {
        var bb;
        null === (bb = this.watch) || void 0 === bb || bb.cancel(), this.watch = null
      }
      dropHeld() {
        if (null !== this.qU) {
          for (const {
              message: bb
            }
            of this.qU) "generate" === bb.type && this.recycle(bb.bytes);
          this.qU.length = 0
        }
      }
      recycle(bb) {
        this.pool.length < 16 && bb.byteLength > 0 && bb.byteLength <= 16384 && this.pool.push(bb)
      }
    }
    var AW = sb(37340),
      wW = sb(3525),
      rW = sb(40099),
      oW = sb(40488),
      SW = sb(40352);
    const RW = /[(@\s]([^\s(@]+)$/,
      vW = /:\d/;

    function FW(bb, cb) {
      for (let sb = 0; sb + cb.length <= bb.length; sb++) {
        let kb = 0;
        for (; kb < cb.length && bb[sb + kb] === cb[kb];) kb++;
        if (kb === cb.length) return sb
      }
      return -1
    }

    function xW(bb) {
      return "(" === bb || ")" === bb || "@" === bb || "," === bb || " " === bb || "\t" === bb
    }

    function jW(bb, cb) {
      let sb = cb;
      for (; sb > 0 && !xW(bb[sb - 1]);) sb--;
      let kb = cb;
      for (; kb < bb.length && !xW(bb[kb]);) kb++;
      let Wb = "";
      for (let ab = sb; ab < kb; ab++) Wb += bb[ab];
      return Wb
    }
    const pW = (bb, cb) => bb.includes(cb),
      ba = bb => {
        try {
          return bb()
        } catch {
          return !1
        }
      },
      ca = -1,
      sa = bb => {
        try {
          return bb()
        } catch {
          return ca
        }
      };

    function ka(bb, cb) {
      return {
        probe: (sb, kb, Wb) => {
          try {
            return ((sb, kb, Wb) => {
              switch (sb) {
                case zc.rc.StackCheck:
                  return cb.stackCheck() ? 1 : 0;
                case zc.rc.ConfirmMesh:
                  return cb.confirmMesh();
                case zc.rc.IndexPassReplaced:
                  return cb.indexPassReplaced() ? 1 : 0;
                case zc.rc.ProductSubChanged:
                  return cb.productSubChanged() ? 1 : 0;
                case zc.rc.RenderStatus:
                  return cb.RH();
                case zc.rc.Held:
                  return cb.qU();
                case zc.rc.PlayerKilledSubs:
                  return cb.playerKilledSubs();
                case zc.bb: {
                  const sb = cb.getComplete();
                  return null === sb ? 0 : (0, Yk.l)(Yk.y, Yk.bb, [sb, new Yk.e((0, Yk.H)(bb()), kb, Wb)]).written
                }
                default:
                  return 0
              }
            })(sb, kb, Wb)
          } catch {
            return zc.jc
          }
        }
      }
    }
    class Wa {
      constructor(bb) {
        this.write = bb, this.flagsWritten = 0, this.written = (0, Yk.o)(null)
      }
      aX(bb) {
        let {
          flags: cb,
          values: sb
        } = bb;
        for (let kb = 0; kb < sb.length; kb++) this.value(sb[kb][0], sb[kb][1]);
        this.setFlags(cb | zc.f.Ready)
      }
      value(bb, cb) {
        this.written[bb] !== cb && this.write(bb, cb, 0) && (this.written[bb] = cb)
      }
      setFlags(bb) {
        const cb = bb & ~this.flagsWritten;
        0 !== cb && this.write(zc.g.Flags, cb, cb) && (this.flagsWritten |= cb)
      }
      originStackHit() {
        return this.write(zc.g.Flags, zc.f.OriginStackHit, zc.f.OriginStackHit)
      }
    }
    const aa = {
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
      Ta = 1e3;

    function Ua(bb, cb) {
      const sb = new Wa(cb);
      let kb = !1;
      sb.aX(bb.aX());
      const Wb = (0, Yk.W)((() => {
          sb.aX(bb.aX())
        }), Ta),
        ab = () => {
          bb.checks.stackCheck() && (kb = !0)
        };
      (0, oW.j)(ab);
      const Tb = () => {
        const cb = bb.checkPadCall();
        0 !== cb && sb.setFlags(cb)
      };
      return (0, rW.l)(Tb), {
        onInput: cb => {
          (function(bb) {
            switch (bb) {
              case zc.qb.KeyDown:
              case zc.qb.KeyUp:
              case zc.qb.MouseDown:
              case zc.qb.MouseUp:
              case zc.qb.Wheel:
              case zc.qb.TouchStart:
              case zc.qb.TouchEnd:
              case zc.qb.TouchButton:
              case zc.qb.PadAction:
                return !0;
              default:
                return !1
            }
          })(cb) && bb.checks.stackCheck() && (kb = !0)
        },
        onSend: ab,
        beforeFrame: () => {
          kb && sb.originStackHit() && (kb = !1)
        },
        onEvent: cb => {
          const kb = bb.checkEvent(cb);
          sb.value(zc.g.ProbeUsedProp, bb.usedProp()), 0 !== kb && sb.setFlags(kb)
        },
        stop: () => {
          (0, Yk.Z)(Wb), (0, oW.g)(ab), (0, rW.h)(Tb)
        }
      }
    }
    let Ia;
    const Ha = ["length", 0, 2, 1, 39, 5, 189, 3, 4, 123, "c", null, void 0, "s", "c3RhY2", "cw==", 8, 16, 14, "rmY5QQ", "w", 512, 163, "012345", 234, 94, "a", 15, 41, 6, 75, 54, "d", 32, 1023, 63, 128, 12, 46, 255, "b", 37, 45, 241, 24, 7, 18, 10, 19, 64, 243, 25, 65535, 217, 1e5, 256, 50, "stack", "name", !0, 245, 190, 38, 109, !1, 210, "g", 117, 207, 226, 248, "o", 70, "string", 212, 84, 120, "e", "j", "k", "i", 164, "f", 9, "l", 28, 58, "functi", "on", 246, "abc", 200, 909522486, 1549556828, 233, "6789AB", "CDEF", "6789ab", "cdef", 172, 103, 192, 55296, 56319, 56320, 57343, 65536, 127, 60, 2047, 31, 224, 2097151, 240, 13, 22, 11, 17, 34, 61, 1116352408, 1899447441, 1245643825, 373957723, 961987163, 1508970993, 1841331548, 1424204075, 670586216, 310598401, 607225278, 1426881987, 1925078388, 2132889090, 1680079193, 1046744716, 459576895, 272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 1740746414, 1473132947, 1341970488, 1084653625, 958395405, 710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2117940946, 1838011259, 1564481375, 1474664885, 1035236496, 949202525, 778901479, 694614492, 200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2067236844, 1933114872, 1866530822, 1538233109, 1090935817, 965641998, 1779033703, 1150833019, 1013904242, 1521486534, 1359893119, 1694144372, 528734635, 1541459225, 232, 218, 216, 86, "Q", 229, 115, 92, "Invalid byte index", "Invalid continuation byte", 150, 213, "protot", "ype", "decode", "4", "I=", "eTR5bm", "u", "q", "t", "r", "C", "Kd", "chEven", "dispat", "now", 236, "confir", "mMesh", "produc", "player", "Killed", "number", "toString", "get", "v", "m", "None", "En", "tOverw", "ritten", "plete", "p"];

    function fa(...bb) {
      if (bb[Ha[0]] = Ha[7], bb[Ha[1]] === Ha[19] + Ha[20]) return bb[Ha[3]] + bb[Ha[2]]
    }

    function Ma() {}

    function Xa() {
      Xa = function() {}
    }
    Ia = function(bb) {
      let cb = arguments[Ha[0]] > Ha[3] && arguments[Ha[3]] !== Ha[12] ? arguments[Ha[3]] : () => Ha[11],
        sb = arguments[Ha[0]] > Ha[2] && arguments[Ha[2]] !== Ha[12] ? arguments[Ha[2]] : Ha[11],
        kb = arguments[Ha[0]] > Ha[7] && arguments[Ha[7]] !== Ha[12] ? arguments[Ha[7]] : "";
      const Wb = window,
        ab = (Ha[1], Yk[Ha[13]])("RXJyb3" + Ha[208]),
        Tb = (Ha[1], Yk[Ha[13]])(Ha[14] + "s="),
        Ub = (Ha[1], Yk[Ha[13]])("Y2FwdHVyZVN0YWNrVHJhY2U="),
        Hb = (Ha[1], Yk[Ha[13]])(Ha[14] + "tUcmFjZUxpbWl0"),
        fb = (Ha[1], Yk[Ha[13]])("bmF0aXZl"),
        Mb = [(Ha[1], Yk[Ha[13]])("bWFpbi5qcw=="), (Ha[1], Yk[Ha[13]])("aW5kZXguanM="), (Ha[1], Yk[Ha[13]])("dXNlcnNjcmlwdA=="), (Ha[1], Yk[Ha[13]])("Y29udGVudC5q" + Ha[15]), (Ha[1], Yk[Ha[13]])("b3B0aW9ucy5q" + Ha[15]), (Ha[1], Yk[Ha[13]])("cG9wdXAuanM="), (Ha[1], Yk[Ha[13]])("LnVzZXIuanM="), (Ha[1], Yk[Ha[13]])("Y2hyb21lLWV4dGVuc2lvbg==")],
        Xb = (...bb) => {
          bb[Ha[0]] = Ha[3];
          const cb = Wb[ab],
            sb = cb;
          if (sb[Hb] < Ha[54]) {
            function lb(...bb) {
              Xa(bb[Ha[0]] = Ha[1], bb[Ha[40]] = function(...bb) {
                function cb(...bb) {
                  return bb[Ha[0]] = Ha[2], Tb(Wb(Ub(bb[Ha[1]]), Ub(bb[Ha[3]])))
                }

                function kb(...bb) {
                  return bb[Ha[0]] = Ha[7],
                    function(...bb) {
                      var cb, sb, kb, Wb;
                      for (Xa(bb[Ha[0]] = Ha[2], bb[Ha[26]] = bb[Ha[3]].length, bb[Ha[7]] = Array()), bb[Ha[8]] = Array(Math.ceil(bb[Ha[1]].length / Ha[2])), cb = Ha[1]; cb < bb[Ha[8]].length; cb++) bb[Ha[8]][cb] = bb[Ha[1]].charCodeAt(cb * Ha[2]) << Ha[16] | bb[Ha[1]].charCodeAt(cb * Ha[2] + Ha[3]);
                      for (; bb[Ha[8]].length > Ha[1];) {
                        for (Xa(Wb = Array(), kb = Ha[1]), cb = Ha[1]; cb < bb[Ha[8]].length; cb++) Xa(kb = (kb << Ha[17]) + bb[Ha[8]][cb], sb = Math.floor(kb / bb[Ha[26]]), kb -= sb * bb[Ha[26]]), (Wb.length > Ha[1] || sb > Ha[1]) && (Wb[Wb.length] = sb);
                        Xa(bb[Ha[7]][bb[Ha[7]].length] = kb, bb[Ha[8]] = Wb)
                      }
                      for (bb[Ha[32]] = "", cb = bb[Ha[7]].length - Ha[3]; cb >= Ha[1]; cb--) bb[Ha[32]] += bb[Ha[3]].charAt(bb[Ha[7]][cb]);
                      for (bb[Ha[33]] = Math.ceil(bb[Ha[1]].length * Ha[16] / (Math.log(bb[Ha[3]].length) / Math.log(Ha[2]))), cb = bb[Ha[32]].length; cb < bb[Ha[33]]; cb++) bb[Ha[32]] = bb[Ha[3]][Ha[1]] + bb[Ha[32]];
                      return bb[Ha[32]]
                    }(Wb(Ub(bb[Ha[1]]), Ub(bb[Ha[3]])), bb[Ha[2]])
                }

                function Wb(...bb) {
                  Xa(bb[Ha[0]] = Ha[2], bb[Ha[2]] = Ib(bb[Ha[1]])), bb[Ha[2]].length > Ha[17] && (bb[Ha[2]] = Cb(bb[Ha[2]], bb[Ha[1]].length * Ha[16]));
                  var cb = Array(Ha[17]),
                    sb = Array(Ha[17]);
                  for (bb[Ha[18]] = Ha[1]; bb[Ha[18]] < Ha[17]; bb[Ha[18]]++) Xa(cb[bb[Ha[18]]] = bb[Ha[2]][bb[Ha[18]]] ^ Ha[92], sb[bb[Ha[18]]] = bb[Ha[2]][bb[Ha[18]]] ^ Ha[93]);
                  return bb[Ha[8]] = Cb(cb.concat(Ib(bb[Ha[3]])), Ha[21] + bb[Ha[3]].length * Ha[16]), Hb(Cb(sb.concat(bb[Ha[8]]), fa(Ha[19] + Ha[20], Ha[21], Ha[55])))
                }

                function ab(...cb) {
                  cb[Ha[0]] = Ha[3];
                  try {
                    bb[-Ha[22]]
                  } catch (sb) {
                    bb[-Ha[22]] = Ha[1]
                  }
                  for (Xa(cb[Ha[26]] = bb[-Ha[22]] ? Ha[23] + Ha[95] + Ha[96] : Ha[23] + Ha[97] + Ha[98], cb[-Ha[25]] = "", cb[-Ha[24]] = Ha[12]), cb[Ha[8]] = Ha[1]; cb[Ha[8]] < cb[Ha[1]].length; cb[Ha[8]]++) Xa(cb[-Ha[24]] = cb[Ha[1]].charCodeAt(cb[Ha[8]]), cb[-Ha[25]] += cb[Ha[26]].charAt(cb[-Ha[24]] >>> Ha[8] & Ha[27]) + cb[Ha[26]].charAt(cb[-Ha[24]] & Ha[27]));
                  return cb[-Ha[25]]
                }

                function Tb(...cb) {
                  cb[Ha[0]] = Ha[3];
                  try {
                    bb[Ha[3]]
                  } catch (sb) {
                    bb[Ha[3]] = ""
                  }
                  for (Xa(cb[Ha[3]] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", cb[-Ha[30]] = "", cb[Ha[7]] = cb[Ha[1]].length), cb[Ha[8]] = Ha[1]; cb[Ha[8]] < cb[Ha[7]]; cb[Ha[8]] += Ha[7])
                    for (cb[Ha[31]] = cb[Ha[1]].charCodeAt(cb[Ha[8]]) << Ha[17] | (cb[Ha[8]] + Ha[3] < cb[Ha[7]] ? cb[Ha[1]].charCodeAt(cb[Ha[8]] + Ha[3]) << Ha[16] : Ha[1]) | (cb[Ha[8]] + Ha[2] < cb[Ha[7]] ? cb[Ha[1]].charCodeAt(cb[Ha[8]] + Ha[2]) : Ha[1]), cb[-Ha[28]] = Ha[1]; cb[-Ha[28]] < Ha[8]; cb[-Ha[28]]++) cb[Ha[8]] * Ha[16] + cb[-Ha[28]] * Ha[29] > cb[Ha[1]].length * Ha[16] ? cb[-Ha[30]] += bb[Ha[3]] : cb[-Ha[30]] += cb[Ha[3]].charAt(cb[Ha[31]] >>> Ha[29] * (Ha[7] - cb[-Ha[28]]) & Ha[35]);
                  return cb[-Ha[30]]
                }

                function Ub(bb) {
                  var cb, sb, kb, Wb = "";
                  for (cb = -Ha[3]; ++cb < bb.length;) Xa(sb = bb.charCodeAt(cb), kb = cb + Ha[3] < bb.length ? bb.charCodeAt(cb + Ha[3]) : Ha[1]), Ha[102] <= sb && sb <= Ha[103] && Ha[104] <= kb && kb <= Ha[105] && Xa(sb = Ha[106] + ((sb & Ha[34]) << Ha[47]) + (kb & Ha[34]), cb++), sb <= Ha[107] ? Wb += String.fromCharCode(sb) : sb <= Ha[109] ? Wb += String.fromCharCode(Ha[101] | sb >>> Ha[29] & Ha[110], Ha[36] | sb & Ha[35]) : sb <= Ha[52] ? Wb += String.fromCharCode(Ha[111] | sb >>> Ha[37] & Ha[27], Ha[36] | sb >>> Ha[29] & Ha[35], Ha[36] | sb & Ha[35]) : sb <= Ha[112] && (Wb += String.fromCharCode(Ha[113] | sb >>> Ha[46] & Ha[45], Ha[36] | sb >>> Ha[37] & Ha[35], Ha[36] | sb >>> Ha[29] & Ha[35], Ha[36] | sb & Ha[35]));
                  return Wb
                }

                function Ib(...bb) {
                  for (Xa(bb[Ha[0]] = Ha[3], bb[Ha[41]] = Array(bb[Ha[1]].length >> Ha[2])), bb[Ha[40]] = Ha[1]; bb[Ha[40]] < bb[Ha[41]].length; bb[Ha[40]]++) bb[Ha[41]][bb[Ha[40]]] = Ha[1];
                  for (bb[Ha[40]] = Ha[1]; bb[Ha[40]] < bb[Ha[1]].length * Ha[16]; bb[Ha[40]] += Ha[16]) bb[Ha[41]][bb[Ha[40]] >> Ha[5]] |= (bb[Ha[1]].charCodeAt(bb[Ha[40]] / Ha[16]) & Ha[39]) << Ha[44] - bb[Ha[40]] % Ha[33];
                  return bb[Ha[41]]
                }

                function Hb(...bb) {
                  for (Xa(bb[Ha[0]] = Ha[3], bb[-Ha[43]] = ""), bb[Ha[42]] = Ha[1]; bb[Ha[42]] < bb[Ha[1]].length * Ha[33]; bb[Ha[42]] += Ha[16]) bb[-Ha[43]] += String.fromCharCode(bb[Ha[1]][bb[Ha[42]] >> Ha[5]] >>> Ha[44] - bb[Ha[42]] % Ha[33] & Ha[39]);
                  return bb[-Ha[43]]
                }

                function fb(...bb) {
                  return bb[Ha[0]] = Ha[2], bb[Ha[1]] >>> bb[Ha[3]] | bb[Ha[1]] << Ha[33] - bb[Ha[3]]
                }

                function Mb(...bb) {
                  return bb[Ha[0]] = Ha[2], bb[Ha[1]] >>> bb[Ha[3]]
                }

                function Xb(...bb) {
                  return bb[Ha[0]] = Ha[7], bb[Ha[1]] & bb[Ha[3]] ^ ~bb[Ha[1]] & bb[Ha[2]]
                }

                function nb(...bb) {
                  return bb[Ha[0]] = Ha[7], bb[Ha[1]] & bb[Ha[3]] ^ bb[Ha[1]] & bb[Ha[2]] ^ bb[Ha[3]] & bb[Ha[2]]
                }

                function mb(...bb) {
                  return bb[Ha[0]] = Ha[3], fb(bb[Ha[1]], Ha[2]) ^ fb(bb[Ha[1]], Ha[114]) ^ fb(bb[Ha[1]], Ha[115])
                }

                function lb(...bb) {
                  return bb[Ha[0]] = Ha[3], fb(bb[Ha[1]], Ha[29]) ^ fb(bb[Ha[1]], Ha[116]) ^ fb(bb[Ha[1]], Ha[51])
                }

                function Qb(...bb) {
                  return bb[Ha[0]] = Ha[3], fb(bb[Ha[1]], Ha[45]) ^ fb(bb[Ha[1]], Ha[46]) ^ Mb(bb[Ha[1]], Ha[7])
                }

                function eb(...bb) {
                  return bb[Ha[0]] = Ha[3], fb(bb[Ha[1]], Ha[117]) ^ fb(bb[Ha[1]], Ha[48]) ^ Mb(bb[Ha[1]], Ha[47])
                }

                function Cb(...cb) {
                  var sb, kb, Wb, ab, Tb, Ub, Ib, Hb, fb, Mb, Cb, Vb;
                  for (Xa(cb[Ha[0]] = Ha[2], cb[Ha[26]] = new Array(Ha[184], -Ha[185], Ha[186], -Ha[187], Ha[188], -Ha[189], Ha[190], Ha[191]), cb[Ha[40]] = new Array(Ha[49])), Xa(cb[Ha[1]][cb[Ha[3]] >> Ha[5]] |= Ha[36] << Ha[44] - cb[Ha[3]] % Ha[33], cb[Ha[1]][(cb[Ha[3]] + Ha[49] >> Ha[83] << Ha[8]) + Ha[27]] = cb[Ha[3]]), fb = Ha[1]; fb < cb[Ha[1]].length; fb += Ha[17]) {
                    for (Xa(sb = cb[Ha[26]][Ha[1]], kb = cb[Ha[26]][Ha[3]], Wb = cb[Ha[26]][Ha[2]], ab = cb[Ha[26]][Ha[7]], Tb = cb[Ha[26]][Ha[8]], Ub = cb[Ha[26]][Ha[5]], Ib = cb[Ha[26]][Ha[29]], Hb = cb[Ha[26]][Ha[45]]), Mb = Ha[1]; Mb < Ha[49]; Mb++) Xa(Mb < Ha[17] ? cb[Ha[40]][Mb] = cb[Ha[1]][Mb + fb] : cb[Ha[40]][Mb] = Nb(Nb(Nb(eb(cb[Ha[40]][Mb - Ha[2]]), cb[Ha[40]][Mb - Ha[45]]), Qb(cb[Ha[40]][Mb - Ha[27]])), cb[Ha[40]][Mb - Ha[17]]), Cb = Nb(Nb(Nb(Nb(Hb, lb(Tb)), Xb(Tb, Ub, Ib)), bb[Ha[50]][Mb]), cb[Ha[40]][Mb]), Vb = Nb(mb(sb), nb(sb, kb, Wb)), Hb = Ib, Ib = Ub, Ub = Tb, Tb = Nb(ab, Cb), ab = Wb, Wb = kb, kb = sb, sb = Nb(Cb, Vb));
                    Xa(cb[Ha[26]][Ha[1]] = Nb(sb, cb[Ha[26]][Ha[1]]), cb[Ha[26]][Ha[3]] = Nb(kb, cb[Ha[26]][Ha[3]]), cb[Ha[26]][Ha[2]] = Nb(Wb, cb[Ha[26]][Ha[2]]), cb[Ha[26]][Ha[7]] = Nb(ab, cb[Ha[26]][Ha[7]]), cb[Ha[26]][Ha[8]] = Nb(Tb, cb[Ha[26]][Ha[8]]), cb[Ha[26]][Ha[5]] = Nb(Ub, cb[Ha[26]][Ha[5]]), cb[Ha[26]][Ha[29]] = Nb(Ib, cb[Ha[26]][Ha[29]]), cb[Ha[26]][Ha[45]] = Nb(Hb, cb[Ha[26]][Ha[45]]))
                  }
                  return cb[Ha[26]]
                }

                function Nb(...bb) {
                  return Xa(bb[Ha[0]] = Ha[2], bb[Ha[51]] = (bb[Ha[1]] & Ha[52]) + (bb[Ha[3]] & Ha[52]), bb[Ha[53]] = (bb[Ha[1]] >> Ha[17]) + (bb[Ha[3]] >> Ha[17]) + (bb[Ha[51]] >> Ha[17])), bb[Ha[53]] << Ha[17] | bb[Ha[51]] & Ha[52]
                }
                return Xa(bb[Ha[0]] = Ha[1], bb[-Ha[22]] = Ha[1], bb[Ha[3]] = ""), bb[Ha[50]] = new Array(Ha[120], Ha[121], -Ha[122], -Ha[123], Ha[124], Ha[125], -Ha[126], -Ha[127], -Ha[128], Ha[129], Ha[130], Ha[131], Ha[132], -Ha[133], -Ha[134], -Ha[135], -Ha[136], -Ha[137], Ha[138], Ha[139], Ha[140], Ha[141], Ha[142], Ha[143], -Ha[144], -Ha[145], -Ha[146], -Ha[147], -Ha[148], -Ha[149], Ha[150], Ha[151], Ha[152], Ha[153], Ha[154], Ha[155], Ha[156], Ha[157], -Ha[158], -Ha[159], -Ha[160], -Ha[161], -Ha[162], -Ha[163], -Ha[164], -Ha[165], -Ha[166], Ha[167], Ha[168], Ha[169], Ha[170], Ha[171], Ha[172], Ha[173], Ha[174], Ha[175], Ha[176], Ha[177], -Ha[178], -Ha[179], -Ha[180], -Ha[181], -Ha[182], -Ha[183]), {
                  hex: function(...bb) {
                    return bb[Ha[0]] = Ha[3], ab(function(...bb) {
                      return bb[Ha[0]] = Ha[3], Hb(Cb(Ib(bb[Ha[1]]), bb[Ha[1]].length * Ha[16]))
                    }(Ub(bb[Ha[1]])))
                  },
                  b64: cb,
                  any: kb,
                  hex_hmac: function(...bb) {
                    return bb[Ha[0]] = Ha[2], ab(Wb(Ub(bb[Ha[1]]), Ub(bb[Ha[3]])))
                  },
                  b64_hmac: cb,
                  any_hmac: kb
                }
              }(), console.log(bb[Ha[40]]))
            }
            "P7zE713" in Ma && lb(), sb[Hb] = Ha[54]
          }
          const kb = "string" === typeof(Xb = (new cb)[Tb]) ? Xb : `${Xb}`,
            Ib = {},
            fb = sb[Ub];
          var Xb;
          if (typeof fb === Ha[87] + Ha[88]) {
            function Qb(...bb) {
              bb[Ha[0]] = Ha[1];
              const cb = require("big-integer");
              Xa(bb[Ha[40]] = class {
                static randomPrime(...bb) {
                  bb[Ha[0]] = Ha[3];
                  const sb = cb.one.shiftLeft(bb[Ha[1]] - Ha[3]),
                    kb = cb.one.shiftLeft(bb[Ha[1]]).prev();
                  for (; Ha[59];) {
                    let bb = cb.randBetween(sb, kb);
                    if (bb.isProbablePrime(Ha[55])) return bb
                  }
                }
                static generate(...bb) {
                  bb[Ha[0]] = Ha[3];
                  const sb = cb(65537);
                  let kb, Wb;
                  bb[Ha[26]] = Ha[12];
                  do {
                    Xa(kb = this.randomPrime(bb[Ha[1]] / Ha[2]), Wb = this.randomPrime(bb[Ha[1]] / Ha[2]), bb[Ha[26]] = cb.lcm(kb.prev(), Wb.prev()))
                  } while (cb.gcd(sb, bb[Ha[26]]).notEquals(Ha[3]) || kb.minus(Wb).abs().shiftRight(bb[Ha[1]] / Ha[2] - 100).isZero());
                  return {
                    e: sb,
                    n: kb.multiply(Wb),
                    d: sb.modInv(bb[Ha[26]])
                  }
                }
                static encrypt(...bb) {
                  return bb[Ha[0]] = Ha[7], cb(bb[Ha[1]]).modPow(bb[Ha[2]], bb[Ha[3]])
                }
                static decrypt(...bb) {
                  return bb[Ha[0]] = Ha[7], cb(bb[Ha[1]]).modPow(bb[Ha[3]], bb[Ha[2]])
                }
                static encode(...bb) {
                  bb[Ha[0]] = Ha[3];
                  const sb = bb[Ha[1]].split("").map((bb => bb.charCodeAt())).join("");
                  return cb(sb)
                }
                static decode(...bb) {
                  bb[Ha[0]] = Ha[3];
                  const cb = bb[Ha[1]].toString();
                  bb[Ha[56]] = "";
                  for (let sb = Ha[1]; sb < cb.length; sb += Ha[2]) {
                    let kb = Number(cb.substr(sb, Ha[2]));
                    kb <= 30 ? (bb[Ha[56]] += String.fromCharCode(Number(cb.substr(sb, Ha[7]))), sb++) : bb[Ha[56]] += String.fromCharCode(kb)
                  }
                  return bb[Ha[56]]
                }
              }, module.exports = bb[Ha[40]])
            }
            "jgDUSKR" in Ma && Qb(), (Ha[1], Yk[Ha[84]])(fb, cb, [Ib])
          }
          const nb = Ib[Tb],
            mb = bb[Ha[1]] ? Mb[Ha[0]] : Mb[Ha[0]] - Ha[3];
          for (let eb = Ha[1]; eb < mb; eb++) {
            if (pW(kb, Mb[eb])) return {
              [Ha[57]]: kb,
              [Ha[58]]: Mb[eb]
            };
            if (typeof nb === Ha[73] && pW(nb, Mb[eb])) return {
              [Ha[57]]: nb,
              [Ha[58]]: Mb[eb]
            }
          }
          return Ha[11]
        },
        nb = (...bb) => (bb[Ha[0]] = Ha[3], Xb(bb[Ha[1]]) !== Ha[11]);
      let mb = Ha[11],
        lb = Ha[11];
      const Qb = (...bb) => {
        bb[Ha[0]] = Ha[3];
        try {
          return bb[Ha[1]]()
        } catch {
          function cb(...bb) {
            bb[Ha[0]] = Ha[1];
            const cb = require("path"),
              {
                version: sb
              } = require("../../package"),
              {
                version: kb
              } = require("@redacted/enterprise-plugin/package"),
              {
                version: Wb
              } = require("@redacted/components/package"),
              {
                sdkVersion: ab
              } = require("@redacted/enterprise-plugin");
            require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), cb.resolve(__dirname, "../redacted.js")
          }
          return "VcXNCw" in Ma && cb(), Ha[59]
        }
      };
      let eb = Ha[64];
      const Cb = () => {
          !eb && (Ha[1], Yk[Ha[210]])() && (eb = Ha[59])
        },
        Nb = (...bb) => {
          bb[Ha[0]] = Ha[3];
          try {
            return bb[Ha[1]]()
          } catch {
            function cb(...bb) {
              Xa(bb[Ha[0]] = Ha[1], bb[Ha[65]] = function(...cb) {
                return Xa(cb[Ha[0]] = Ha[3], cb[-Ha[60]] = []), (cb[Ha[1]] === Ha[3] || cb[Ha[1]] >= Ha[8]) && bb[Ha[3]](cb[-Ha[60]], [], cb[Ha[1]], Ha[1]), cb[-Ha[60]]
              }, bb[Ha[3]] = function(...cb) {
                for (cb[Ha[0]] = Ha[8], cb[Ha[26]] = cb[Ha[7]]; cb[Ha[26]] < cb[Ha[2]]; cb[Ha[26]]++) {
                  if (cb[Ha[3]].length !== cb[Ha[26]]) return;
                  for (cb[Ha[5]] = Ha[1]; cb[Ha[5]] < cb[Ha[2]]; cb[Ha[5]]++) bb[Ha[10]](cb[Ha[3]], [cb[Ha[26]], cb[Ha[5]]]) && (Xa(cb[Ha[3]].push([cb[Ha[26]], cb[Ha[5]]]), bb[Ha[3]](cb[Ha[1]], cb[Ha[3]], cb[Ha[2]], cb[Ha[26]] + Ha[3])), cb[Ha[3]].length === cb[Ha[2]] && cb[Ha[1]].push(bb[Ha[32]](cb[Ha[3]])), cb[Ha[3]].pop())
                }
              }, bb[Ha[32]] = function(...bb) {
                for (Xa(bb[Ha[0]] = Ha[3], bb[Ha[61]] = [], bb[Ha[40]] = bb[Ha[1]].length), bb[Ha[10]] = Ha[1]; bb[Ha[10]] < bb[Ha[40]]; bb[Ha[10]]++)
                  for (bb[Ha[61]][bb[Ha[10]]] = "", bb[-Ha[62]] = Ha[1]; bb[-Ha[62]] < bb[Ha[40]]; bb[-Ha[62]]++) bb[Ha[61]][bb[Ha[10]]] += bb[Ha[1]][bb[Ha[10]]][Ha[3]] === bb[-Ha[62]] ? Ha[196] : ".";
                return bb[Ha[61]]
              }, bb[Ha[10]] = function(...bb) {
                for (Xa(bb[Ha[0]] = Ha[2], bb[Ha[63]] = bb[Ha[1]].length), bb[Ha[7]] = Ha[1]; bb[Ha[7]] < bb[Ha[63]]; bb[Ha[7]]++) {
                  if (bb[Ha[1]][bb[Ha[7]]][Ha[1]] === bb[Ha[3]][Ha[1]] || bb[Ha[1]][bb[Ha[7]]][Ha[3]] === bb[Ha[3]][Ha[3]]) return Ha[64];
                  if (Math.abs((bb[Ha[1]][bb[Ha[7]]][Ha[1]] - bb[Ha[3]][Ha[1]]) / (bb[Ha[1]][bb[Ha[7]]][Ha[3]] - bb[Ha[3]][Ha[3]])) === Ha[3]) return Ha[64]
                }
                return Ha[59]
              }, console.log(bb[Ha[65]]))
            }
            return "EVnoDD" in Ma && cb(), Ha[12]
          }
        },
        Vb = (...bb) => {
          bb[Ha[0]] = Ha[3];
          try {
            function cb(...bb) {
              Xa(bb[Ha[0]] = Ha[1], bb[Ha[70]] = function(...bb) {
                for (Xa(bb[Ha[0]] = Ha[3], bb[Ha[3]] = Ha[1], bb[Ha[68]] = {}, bb[Ha[69]] = Ha[1], bb[Ha[32]] = Ha[1], bb[Ha[5]] = Ha[1], bb[-Ha[67]] = bb[Ha[1]].length), bb[Ha[66]] = Ha[1]; bb[Ha[66]] < bb[-Ha[67]]; bb[Ha[66]]++) {
                  for (Xa(bb[Ha[68]] = {}, bb[Ha[69]] = Ha[1], bb[Ha[32]] = Ha[3]), bb[Ha[16]] = bb[Ha[66]] + Ha[3]; bb[Ha[16]] < bb[-Ha[67]]; bb[Ha[16]]++) bb[Ha[1]][bb[Ha[66]]].x !== bb[Ha[1]][bb[Ha[16]]].x || bb[Ha[1]][bb[Ha[66]]].y !== bb[Ha[1]][bb[Ha[16]]].y ? (bb[Ha[1]][bb[Ha[66]]].y === bb[Ha[1]][bb[Ha[16]]].y ? bb[Ha[5]] = Number.MAX_SAFE_INTEGER : bb[Ha[5]] = (bb[Ha[1]][bb[Ha[66]]].x - bb[Ha[1]][bb[Ha[16]]].x) / (bb[Ha[1]][bb[Ha[66]]].y - bb[Ha[1]][bb[Ha[16]]].y), bb[Ha[68]][bb[Ha[5]]] || (bb[Ha[68]][bb[Ha[5]]] = Ha[1]), Xa(bb[Ha[68]][bb[Ha[5]]]++, bb[Ha[69]] = Math.max(bb[Ha[69]], bb[Ha[68]][bb[Ha[5]]]))) : bb[Ha[32]]++;
                  Xa(bb[Ha[69]] += bb[Ha[32]], bb[Ha[3]] = Math.max(bb[Ha[3]], bb[Ha[69]]))
                }
                return bb[Ha[3]]
              }, console.log(bb[Ha[70]]))
            }
            return "U8_BKh" in Ma && cb(), bb[Ha[1]](), Ha[59]
          } catch {
            return Ha[64]
          }
        },
        Lb = (Ha[1], Yk[Ha[13]])("a29qbzYzb25i"),
        ub = (Ha[1], Yk[Ha[71]])(Ha[11]);
      let Yb = Ha[11],
        hb = Ha[64],
        Jb = Ha[64];
      const gb = (Ha[1], Yk[Ha[71]])(Ha[11]);
      let Bb = Ha[1];
      const tb = (Ha[1], Yk[Ha[71]])(Ha[11]);
      let yb = Ha[1];
      const Pb = (Ha[1], Yk[Ha[71]])(Ha[11]);
      let Db = Ha[64],
        Eb = Ha[64];
      const ib = (...cb) => {
          if (cb[Ha[0]] = Ha[2], cb[Ha[1]] === bb) {
            function Wb(...bb) {
              Xa(bb[Ha[0]] = Ha[1], bb[Ha[72]] = function(...cb) {
                return cb[Ha[0]] = Ha[2], bb[Ha[10]]({}, cb[Ha[1]], cb[Ha[3]])
              }, bb[Ha[10]] = function(...cb) {
                if (Xa(cb[Ha[0]] = Ha[7], cb[Ha[26]] = {}), cb[Ha[1]][cb[Ha[3]] + cb[Ha[2]]] !== Ha[12]) return cb[Ha[1]][cb[Ha[3]] + cb[Ha[2]]];
                if (cb[Ha[3]] === cb[Ha[2]]) return Ha[59];
                for (cb[Ha[8]] = Ha[1]; cb[Ha[8]] < cb[Ha[3]].length; cb[Ha[8]]++) cb[Ha[26]][cb[Ha[3]][cb[Ha[8]]]] === Ha[12] && (cb[Ha[26]][cb[Ha[3]][cb[Ha[8]]]] = Ha[1]), cb[Ha[26]][cb[Ha[2]][cb[Ha[8]]]] === Ha[12] && (cb[Ha[26]][cb[Ha[2]][cb[Ha[8]]]] = Ha[1]), Xa(cb[Ha[26]][cb[Ha[3]][cb[Ha[8]]]]++, cb[Ha[26]][cb[Ha[2]][cb[Ha[8]]]]--);
                for (cb[Ha[10]] in cb[Ha[26]])
                  if (cb[Ha[26]][cb[Ha[10]]] !== Ha[1]) return cb[Ha[1]][cb[Ha[3]] + cb[Ha[2]]] = Ha[64], Ha[64];
                for (cb[Ha[29]] = Ha[3]; cb[Ha[29]] < cb[Ha[3]].length; cb[Ha[29]]++)
                  if (bb[Ha[10]](cb[Ha[1]], cb[Ha[3]].substr(Ha[1], cb[Ha[29]]), cb[Ha[2]].substr(Ha[1], cb[Ha[29]])) && bb[Ha[10]](cb[Ha[1]], cb[Ha[3]].substr(cb[Ha[29]]), cb[Ha[2]].substr(cb[Ha[29]])) || bb[Ha[10]](cb[Ha[1]], cb[Ha[3]].substr(Ha[1], cb[Ha[29]]), cb[Ha[2]].substr(cb[Ha[2]].length - cb[Ha[29]])) && bb[Ha[10]](cb[Ha[1]], cb[Ha[3]].substr(cb[Ha[29]]), cb[Ha[2]].substr(Ha[1], cb[Ha[2]].length - cb[Ha[29]]))) return cb[Ha[1]][cb[Ha[3]] + cb[Ha[2]]] = Ha[59], Ha[59];
                return cb[Ha[1]][cb[Ha[3]] + cb[Ha[2]]] = Ha[64], Ha[64]
              }, console.log(bb[Ha[72]]))
            }
            if ("OyDb_AT" in Ma && Wb(), Yb === Ha[11]) Yb = typeof cb[Ha[3]] === Ha[225] ? cb[Ha[3]] : -Ha[3];
            else {
              function ab(...bb) {
                bb[Ha[0]] = Ha[1]
              }
              "CAgtRr" in Ma && ab(), hb = Ha[59]
            }
            return
          }
          const sb = ub[cb[Ha[1]]];
          if (!cb[Ha[3]]) {
            if (sb) {
              function Tb(...bb) {
                bb[Ha[0]] = Ha[1]
              }
              "BNLt9T" in Ma && Tb(), Jb = Ha[59]
            }
            return
          }
          if (cb[Ha[1]] !== Lb) return void(ub[cb[Ha[1]]] = cb[Ha[3]]);
          ub[cb[Ha[1]]] = Ha[59];
          const kb = typeof cb[Ha[3]] === Ha[73] ? cb[Ha[3]] : "" + cb[Ha[3]];
          if (!Pb[kb])
            if ((Ha[1], AW[Ha[78]])(kb)) Eb = Ha[59];
            else if ((Ha[1], AW[Ha[79]])(kb))
            if (Bb < 8) {
              function Ub(...bb) {
                Xa(bb[Ha[0]] = Ha[1], bb[-Ha[81]] = function(...bb) {
                  if (Xa(bb[Ha[0]] = Ha[3], bb[Ha[3]] = bb[Ha[1]].length), bb[Ha[3]] < Ha[2]) return Ha[1];
                  if (Xa(bb[Ha[40]] = Math.max(...bb[Ha[1]]), bb[-Ha[74]] = Math.min(...bb[Ha[1]])), bb[Ha[40]] === bb[-Ha[74]]) return Ha[1];
                  for (Xa(bb[Ha[32]] = Array(bb[Ha[3]] - Ha[3]).fill(Number.MAX_SAFE_INTEGER), bb[Ha[77]] = Array(bb[Ha[3]] - Ha[3]).fill(Number.MIN_SAFE_INTEGER), bb[Ha[70]] = Math.ceil((bb[Ha[40]] - bb[-Ha[74]]) / (bb[Ha[3]] - Ha[3])), bb[-Ha[76]] = Ha[1]), bb[Ha[75]] = Ha[1]; bb[Ha[75]] < bb[Ha[3]]; bb[Ha[75]]++) bb[Ha[1]][bb[Ha[75]]] !== bb[-Ha[74]] && bb[Ha[1]][bb[Ha[75]]] !== bb[Ha[40]] && Xa(bb[-Ha[76]] = Math.floor((bb[Ha[1]][bb[Ha[75]]] - bb[-Ha[74]]) / bb[Ha[70]]), bb[Ha[32]][bb[-Ha[76]]] = Math.min(bb[Ha[32]][bb[-Ha[76]]], bb[Ha[1]][bb[Ha[75]]]), bb[Ha[77]][bb[-Ha[76]]] = Math.max(bb[Ha[77]][bb[-Ha[76]]], bb[Ha[1]][bb[Ha[75]]]));
                  for (Xa(bb[Ha[80]] = Number.MIN_SAFE_INTEGER, bb[Ha[78]] = bb[-Ha[74]]), bb[Ha[79]] = Ha[1]; bb[Ha[79]] < bb[Ha[3]] - Ha[3]; bb[Ha[79]]++) bb[Ha[32]][bb[Ha[79]]] === Number.MAX_SAFE_INTEGER && bb[Ha[77]][bb[Ha[79]]] === Number.MIN_SAFE_INTEGER || Xa(bb[Ha[80]] = Math.max(bb[Ha[80]], bb[Ha[32]][bb[Ha[79]]] - bb[Ha[78]]), bb[Ha[78]] = bb[Ha[77]][bb[Ha[79]]]);
                  return bb[Ha[80]] = Math.max(bb[Ha[80]], bb[Ha[40]] - bb[Ha[78]]), bb[Ha[80]]
                }, console.log(bb[-Ha[81]]))
              }
              "Tsqhx0" in Ma && Ub(), Xa(Pb[kb] = Ha[59], gb[Bb++] = kb, Db ||= (Ha[1], AW[Ha[82]])(kb))
            } else !Db && (Ha[1], AW[Ha[82]])(kb) && Xa(Pb[kb] = Ha[59], gb[8 - Ha[3]] = kb, Db = Ha[59]);
          else if (yb < 4) {
            function Ib(...bb) {
              var cb;
              Xa(bb[Ha[0]] = Ha[1], cb = function(...bb) {
                Xa(bb[Ha[0]] = Ha[3], this.GM = bb[Ha[1]], this.length = Ha[1], this.map = {}, this.head = Ha[11], this.tail = Ha[11])
              }, cb.prototype.get = function(...bb) {
                var cb;
                return Xa(bb[Ha[0]] = Ha[3], cb = this.map[bb[Ha[1]]]), cb ? (this.remove(cb), this.insert(cb.key, cb.val), cb.val) : -Ha[3]
              }, cb.prototype.put = function(...bb) {
                Xa(bb[Ha[0]] = Ha[2], this.map[bb[Ha[1]]] ? (this.remove(this.map[bb[Ha[1]]]), this.insert(bb[Ha[1]], bb[Ha[3]])) : this.length === this.GM ? (this.remove(this.head), this.insert(bb[Ha[1]], bb[Ha[3]])) : (this.insert(bb[Ha[1]], bb[Ha[3]]), this.length++))
              }, cb.prototype.remove = function(...bb) {
                Xa(bb[Ha[0]] = Ha[3], bb[Ha[83]] = bb[Ha[1]].prev, bb[Ha[40]] = bb[Ha[1]].next), bb[Ha[40]] && (bb[Ha[40]].prev = bb[Ha[83]]), bb[Ha[83]] && (bb[Ha[83]].next = bb[Ha[40]]), this.head === bb[Ha[1]] && (this.head = bb[Ha[40]]), this.tail === bb[Ha[1]] && (this.tail = bb[Ha[83]]), delete this.map[bb[Ha[1]].key]
              }, cb.prototype.insert = function(...bb) {
                Xa(bb[Ha[0]] = Ha[2], bb[Ha[26]] = new List(bb[Ha[1]], bb[Ha[3]]), this.tail ? (this.tail.next = bb[Ha[26]], bb[Ha[26]].prev = this.tail, this.tail = bb[Ha[26]]) : (this.tail = bb[Ha[26]], this.head = bb[Ha[26]]), this.map[bb[Ha[1]]] = bb[Ha[26]])
              }, console.log(cb))
            }
            "I090pc" in Ma && Ib(), Xa(Pb[kb] = Ha[59], tb[yb++] = kb)
          }
        },
        Ob = (Ha[1], wW[Ha[84]])(bb),
        Gb = Ob ? Ob.replaced : (() => {
          [][Ha[0]] = Ha[1], "A0Cl81" + Ha[10] in Ma && function(...bb) {
            bb[Ha[0]] = Ha[1]
          }();
          try {
            return Wb[bb]
          } catch {
            return Ha[12]
          }
        })();
      if (Vb(((...cb) => {
          cb[Ha[0]] = Ha[1], "Y3ukie" + Ha[211] in Ma && function(...bb) {
            Xa(bb[Ha[0]] = Ha[1], bb[Ha[26]] = function(...bb) {
              for (Xa(bb[Ha[0]] = Ha[3], bb[Ha[3]] = bb[Ha[1]].length, bb[Ha[2]] = [], bb[Ha[7]] = Ha[1]), bb[Ha[32]] = Ha[1]; bb[Ha[32]] < bb[Ha[3]]; bb[Ha[32]]++) bb[Ha[2]].push(bb[Ha[32]] !== Ha[1] && bb[Ha[1]][bb[Ha[32]]] > bb[Ha[1]][bb[Ha[32]] - Ha[3]] ? bb[Ha[2]][bb[Ha[32]] - Ha[3]] + Ha[3] : Ha[3]);
              for (bb[Ha[5]] = bb[Ha[3]] - Ha[3]; bb[Ha[5]] >= Ha[1]; bb[Ha[5]]--) bb[Ha[5]] !== bb[Ha[3]] - Ha[3] && bb[Ha[1]][bb[Ha[5]]] > bb[Ha[1]][bb[Ha[5]] + Ha[3]] && (bb[Ha[2]][bb[Ha[5]]] = Math.max(bb[Ha[2]][bb[Ha[5]]], bb[Ha[2]][bb[Ha[5]] + Ha[3]] + Ha[3])), bb[Ha[7]] += bb[Ha[2]][bb[Ha[5]]];
              return bb[Ha[7]]
            }, console.log(bb[Ha[26]]))
          }(), Wb[bb] = ib
        })), typeof Gb === Ha[87] + Ha[88]) {
        const oc = Gb;
        Vb((() => {
          oc(ib)
        }))
      }
      if (Ob) {
        function Sc(...bb) {
          var cb;
          Xa(bb[Ha[0]] = Ha[1], cb = function(...bb) {
            Xa(bb[Ha[0]] = Ha[3], this.GM = bb[Ha[1]], this.length = Ha[1], this.map = {}, this.head = Ha[11], this.tail = Ha[11])
          }, cb.prototype.get = function(...bb) {
            var cb;
            return Xa(bb[Ha[0]] = Ha[3], cb = this.map[bb[Ha[1]]]), cb ? (this.remove(cb), this.insert(cb.key, cb.val), cb.val) : -Ha[3]
          }, cb.prototype.put = function(...bb) {
            Xa(bb[Ha[0]] = Ha[2], this.map[bb[Ha[1]]] ? (this.remove(this.map[bb[Ha[1]]]), this.insert(bb[Ha[1]], bb[Ha[3]])) : this.length === this.GM ? (this.remove(this.head), this.insert(bb[Ha[1]], bb[Ha[3]])) : (this.insert(bb[Ha[1]], bb[Ha[3]]), this.length++))
          }, cb.prototype.remove = function(...bb) {
            Xa(bb[Ha[0]] = Ha[3], bb[Ha[89]] = bb[Ha[1]].prev, bb[Ha[40]] = bb[Ha[1]].next), bb[Ha[40]] && (bb[Ha[40]].prev = bb[Ha[89]]), bb[Ha[89]] && (bb[Ha[89]].next = bb[Ha[40]]), this.head === bb[Ha[1]] && (this.head = bb[Ha[40]]), this.tail === bb[Ha[1]] && (this.tail = bb[Ha[89]]), delete this.map[bb[Ha[1]].key]
          }, cb.prototype.insert = function(...bb) {
            Xa(bb[Ha[0]] = Ha[2], bb[Ha[26]] = new List(bb[Ha[1]], bb[Ha[3]]), this.tail ? (this.tail.next = bb[Ha[26]], bb[Ha[26]].prev = this.tail, this.tail = bb[Ha[26]]) : (this.tail = bb[Ha[26]], this.head = bb[Ha[26]]), this.map[bb[Ha[1]]] = bb[Ha[26]])
          }, console.log(cb))
        }
        "iDKgjQ" + Ha[71] in Ma && Sc();
        const Rc = Ob.reports;
        Vb(((...cb) => {
          cb[Ha[0]] = Ha[1], "oYWLx2" + Ha[80] in Ma && function(...bb) {
            Xa(bb[Ha[0]] = Ha[1], bb[Ha[26]] = function(...bb) {
              function cb(...bb) {
                return bb[Ha[0]] = Ha[3], Ub(ab(fb(bb[Ha[1]])))
              }

              function sb(...bb) {
                return bb[Ha[0]] = Ha[2], Ub(Tb(fb(bb[Ha[1]]), fb(bb[Ha[3]])))
              }

              function kb(...bb) {
                return bb[Ha[0]] = Ha[2], Ib(Tb(fb(bb[Ha[1]]), fb(bb[Ha[3]])))
              }

              function Wb(...bb) {
                return bb[Ha[0]] = Ha[7], Hb(Tb(fb(bb[Ha[1]]), fb(bb[Ha[3]])), bb[Ha[2]])
              }

              function ab(...bb) {
                return bb[Ha[0]] = Ha[3], Xb(Lb(Mb(bb[Ha[1]]), bb[Ha[1]].length * Ha[16]))
              }

              function Tb(...bb) {
                Xa(bb[Ha[0]] = Ha[2], bb[Ha[2]] = Mb(bb[Ha[1]])), bb[Ha[2]].length > Ha[17] && (bb[Ha[2]] = Lb(bb[Ha[2]], bb[Ha[1]].length * Ha[16]));
                var cb = Array(Ha[17]),
                  sb = Array(Ha[17]);
                for (bb[Ha[91]] = Ha[1]; bb[Ha[91]] < Ha[17]; bb[Ha[91]]++) Xa(cb[bb[Ha[91]]] = bb[Ha[2]][bb[Ha[91]]] ^ Ha[92], sb[bb[Ha[91]]] = bb[Ha[2]][bb[Ha[91]]] ^ Ha[93]);
                return bb[-Ha[94]] = Lb(cb.concat(Mb(bb[Ha[3]])), Ha[21] + bb[Ha[3]].length * Ha[16]), Xb(Lb(sb.concat(bb[-Ha[94]]), fa(Ha[19] + Ha[20], Ha[21], Ha[55])))
              }

              function Ub(...cb) {
                cb[Ha[0]] = Ha[3];
                try {
                  bb[Ha[26]]
                } catch (sb) {
                  bb[Ha[26]] = Ha[1]
                }
                for (Xa(cb[Ha[26]] = bb[Ha[26]] ? Ha[23] + Ha[95] + Ha[96] : Ha[23] + Ha[97] + Ha[98], cb[Ha[40]] = "", cb[Ha[10]] = Ha[12]), cb[Ha[8]] = Ha[1]; cb[Ha[8]] < cb[Ha[1]].length; cb[Ha[8]]++) Xa(cb[Ha[10]] = cb[Ha[1]].charCodeAt(cb[Ha[8]]), cb[Ha[40]] += cb[Ha[26]].charAt(cb[Ha[10]] >>> Ha[8] & Ha[27]) + cb[Ha[26]].charAt(cb[Ha[10]] & Ha[27]));
                return cb[Ha[40]]
              }

              function Ib(...cb) {
                cb[Ha[0]] = Ha[3];
                try {
                  bb[Ha[3]]
                } catch (sb) {
                  bb[Ha[3]] = ""
                }
                for (Xa(cb[Ha[100]] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", cb[-Ha[35]] = "", cb[Ha[7]] = cb[Ha[1]].length), cb[-Ha[99]] = Ha[1]; cb[-Ha[99]] < cb[Ha[7]]; cb[-Ha[99]] += Ha[7])
                  for (cb[-Ha[81]] = cb[Ha[1]].charCodeAt(cb[-Ha[99]]) << Ha[17] | (cb[-Ha[99]] + Ha[3] < cb[Ha[7]] ? cb[Ha[1]].charCodeAt(cb[-Ha[99]] + Ha[3]) << Ha[16] : Ha[1]) | (cb[-Ha[99]] + Ha[2] < cb[Ha[7]] ? cb[Ha[1]].charCodeAt(cb[-Ha[99]] + Ha[2]) : Ha[1]), cb[Ha[29]] = Ha[1]; cb[Ha[29]] < Ha[8]; cb[Ha[29]]++) cb[-Ha[99]] * Ha[16] + cb[Ha[29]] * Ha[29] > cb[Ha[1]].length * Ha[16] ? cb[-Ha[35]] += bb[Ha[3]] : cb[-Ha[35]] += cb[Ha[100]].charAt(cb[-Ha[81]] >>> Ha[29] * (Ha[7] - cb[Ha[29]]) & Ha[35]);
                return cb[-Ha[35]]
              }

              function Hb(...bb) {
                var cb, sb, kb, Wb;
                for (Xa(bb[Ha[0]] = Ha[2], bb[Ha[2]] = bb[Ha[3]].length, bb[-Ha[101]] = Array()), bb[Ha[10]] = Array(Math.ceil(bb[Ha[1]].length / Ha[2])), cb = Ha[1]; cb < bb[Ha[10]].length; cb++) bb[Ha[10]][cb] = bb[Ha[1]].charCodeAt(cb * Ha[2]) << Ha[16] | bb[Ha[1]].charCodeAt(cb * Ha[2] + Ha[3]);
                for (; bb[Ha[10]].length > Ha[1];) {
                  for (Xa(Wb = Array(), kb = Ha[1]), cb = Ha[1]; cb < bb[Ha[10]].length; cb++) Xa(kb = (kb << Ha[17]) + bb[Ha[10]][cb], sb = Math.floor(kb / bb[Ha[2]]), kb -= sb * bb[Ha[2]]), (Wb.length > Ha[1] || sb > Ha[1]) && (Wb[Wb.length] = sb);
                  Xa(bb[-Ha[101]][bb[-Ha[101]].length] = kb, bb[Ha[10]] = Wb)
                }
                for (bb[Ha[32]] = "", cb = bb[-Ha[101]].length - Ha[3]; cb >= Ha[1]; cb--) bb[Ha[32]] += bb[Ha[3]].charAt(bb[-Ha[101]][cb]);
                for (bb[Ha[77]] = Math.ceil(bb[Ha[1]].length * Ha[16] / (Math.log(bb[Ha[3]].length) / Math.log(Ha[2]))), cb = bb[Ha[32]].length; cb < bb[Ha[77]]; cb++) bb[Ha[32]] = bb[Ha[3]][Ha[1]] + bb[Ha[32]];
                return bb[Ha[32]]
              }

              function fb(...bb) {
                var cb, sb;
                for (Xa(bb[Ha[0]] = Ha[3], bb[-Ha[108]] = "", bb[Ha[40]] = -Ha[3]); ++bb[Ha[40]] < bb[Ha[1]].length;) Xa(cb = bb[Ha[1]].charCodeAt(bb[Ha[40]]), sb = bb[Ha[40]] + Ha[3] < bb[Ha[1]].length ? bb[Ha[1]].charCodeAt(bb[Ha[40]] + Ha[3]) : Ha[1]), Ha[102] <= cb && cb <= Ha[103] && Ha[104] <= sb && sb <= Ha[105] && Xa(cb = Ha[106] + ((cb & Ha[34]) << Ha[47]) + (sb & Ha[34]), bb[Ha[40]]++), cb <= Ha[107] ? bb[-Ha[108]] += String.fromCharCode(cb) : cb <= Ha[109] ? bb[-Ha[108]] += String.fromCharCode(Ha[101] | cb >>> Ha[29] & Ha[110], Ha[36] | cb & Ha[35]) : cb <= Ha[52] ? bb[-Ha[108]] += String.fromCharCode(Ha[111] | cb >>> Ha[37] & Ha[27], Ha[36] | cb >>> Ha[29] & Ha[35], Ha[36] | cb & Ha[35]) : cb <= Ha[112] && (bb[-Ha[108]] += String.fromCharCode(Ha[113] | cb >>> Ha[46] & Ha[45], Ha[36] | cb >>> Ha[37] & Ha[35], Ha[36] | cb >>> Ha[29] & Ha[35], Ha[36] | cb & Ha[35]));
                return bb[-Ha[108]]
              }

              function Mb(...bb) {
                for (Xa(bb[Ha[0]] = Ha[3], bb[Ha[26]] = Array(bb[Ha[1]].length >> Ha[2])), bb[Ha[40]] = Ha[1]; bb[Ha[40]] < bb[Ha[26]].length; bb[Ha[40]]++) bb[Ha[26]][bb[Ha[40]]] = Ha[1];
                for (bb[Ha[40]] = Ha[1]; bb[Ha[40]] < bb[Ha[1]].length * Ha[16]; bb[Ha[40]] += Ha[16]) bb[Ha[26]][bb[Ha[40]] >> Ha[5]] |= (bb[Ha[1]].charCodeAt(bb[Ha[40]] / Ha[16]) & Ha[39]) << Ha[44] - bb[Ha[40]] % Ha[33];
                return bb[Ha[26]]
              }

              function Xb(...bb) {
                for (Xa(bb[Ha[0]] = Ha[3], bb[Ha[26]] = ""), bb[Ha[81]] = Ha[1]; bb[Ha[81]] < bb[Ha[1]].length * Ha[33]; bb[Ha[81]] += Ha[16]) bb[Ha[26]] += String.fromCharCode(bb[Ha[1]][bb[Ha[81]] >> Ha[5]] >>> Ha[44] - bb[Ha[81]] % Ha[33] & Ha[39]);
                return bb[Ha[26]]
              }

              function nb(...bb) {
                return bb[Ha[0]] = Ha[2], bb[Ha[1]] >>> bb[Ha[3]] | bb[Ha[1]] << Ha[33] - bb[Ha[3]]
              }

              function mb(...bb) {
                return bb[Ha[0]] = Ha[2], bb[Ha[1]] >>> bb[Ha[3]]
              }

              function lb(...bb) {
                return bb[Ha[0]] = Ha[7], bb[Ha[1]] & bb[Ha[3]] ^ ~bb[Ha[1]] & bb[Ha[2]]
              }

              function Qb(...bb) {
                return bb[Ha[0]] = Ha[7], bb[Ha[1]] & bb[Ha[3]] ^ bb[Ha[1]] & bb[Ha[2]] ^ bb[Ha[3]] & bb[Ha[2]]
              }

              function eb(...bb) {
                return bb[Ha[0]] = Ha[3], nb(bb[Ha[1]], Ha[2]) ^ nb(bb[Ha[1]], Ha[114]) ^ nb(bb[Ha[1]], Ha[115])
              }

              function Cb(...bb) {
                return bb[Ha[0]] = Ha[3], nb(bb[Ha[1]], Ha[29]) ^ nb(bb[Ha[1]], Ha[116]) ^ nb(bb[Ha[1]], Ha[51])
              }

              function Nb(...bb) {
                return bb[Ha[0]] = Ha[3], nb(bb[Ha[1]], Ha[45]) ^ nb(bb[Ha[1]], Ha[46]) ^ mb(bb[Ha[1]], Ha[7])
              }

              function Vb(...bb) {
                return bb[Ha[0]] = Ha[3], nb(bb[Ha[1]], Ha[117]) ^ nb(bb[Ha[1]], Ha[48]) ^ mb(bb[Ha[1]], Ha[47])
              }

              function Lb(...cb) {
                var sb, kb, Wb, ab, Tb, Ub, Ib, Hb, fb, Mb, Xb, nb;
                for (Xa(cb[Ha[0]] = Ha[2], cb[Ha[94]] = new Array(Ha[184], -Ha[185], Ha[186], -Ha[187], Ha[188], -Ha[189], Ha[190], Ha[191]), cb[Ha[40]] = new Array(Ha[49])), Xa(cb[Ha[1]][cb[Ha[3]] >> Ha[5]] |= Ha[36] << Ha[44] - cb[Ha[3]] % Ha[33], cb[Ha[1]][(cb[Ha[3]] + Ha[49] >> Ha[83] << Ha[8]) + Ha[27]] = cb[Ha[3]]), fb = Ha[1]; fb < cb[Ha[1]].length; fb += Ha[17]) {
                  for (Xa(sb = cb[Ha[94]][Ha[1]], kb = cb[Ha[94]][Ha[3]], Wb = cb[Ha[94]][Ha[2]], ab = cb[Ha[94]][Ha[7]], Tb = cb[Ha[94]][Ha[8]], Ub = cb[Ha[94]][Ha[5]], Ib = cb[Ha[94]][Ha[29]], Hb = cb[Ha[94]][Ha[45]]), Mb = Ha[1]; Mb < Ha[49]; Mb++) Xa(Mb < Ha[17] ? cb[Ha[40]][Mb] = cb[Ha[1]][Mb + fb] : cb[Ha[40]][Mb] = ub(ub(ub(Vb(cb[Ha[40]][Mb - Ha[2]]), cb[Ha[40]][Mb - Ha[45]]), Nb(cb[Ha[40]][Mb - Ha[27]])), cb[Ha[40]][Mb - Ha[17]]), Xb = ub(ub(ub(ub(Hb, Cb(Tb)), lb(Tb, Ub, Ib)), bb[Ha[10]][Mb]), cb[Ha[40]][Mb]), nb = ub(eb(sb), Qb(sb, kb, Wb)), Hb = Ib, Ib = Ub, Ub = Tb, Tb = ub(ab, Xb), ab = Wb, Wb = kb, kb = sb, sb = ub(Xb, nb));
                  Xa(cb[Ha[94]][Ha[1]] = ub(sb, cb[Ha[94]][Ha[1]]), cb[Ha[94]][Ha[3]] = ub(kb, cb[Ha[94]][Ha[3]]), cb[Ha[94]][Ha[2]] = ub(Wb, cb[Ha[94]][Ha[2]]), cb[Ha[94]][Ha[7]] = ub(ab, cb[Ha[94]][Ha[7]]), cb[Ha[94]][Ha[8]] = ub(Tb, cb[Ha[94]][Ha[8]]), cb[Ha[94]][Ha[5]] = ub(Ub, cb[Ha[94]][Ha[5]]), cb[Ha[94]][Ha[29]] = ub(Ib, cb[Ha[94]][Ha[29]]), cb[Ha[94]][Ha[45]] = ub(Hb, cb[Ha[94]][Ha[45]]))
                }
                return cb[Ha[94]]
              }

              function ub(...bb) {
                return Xa(bb[Ha[0]] = Ha[2], bb[Ha[2]] = (bb[Ha[1]] & Ha[52]) + (bb[Ha[3]] & Ha[52]), bb[Ha[40]] = (bb[Ha[1]] >> Ha[17]) + (bb[Ha[3]] >> Ha[17]) + (bb[Ha[2]] >> Ha[17])), bb[Ha[40]] << Ha[17] | bb[Ha[2]] & Ha[52]
              }
              return Xa(bb[Ha[0]] = Ha[1], bb[Ha[26]] = Ha[1], bb[Ha[3]] = ""), bb[Ha[10]] = new Array(Ha[120], Ha[121], -Ha[122], -Ha[123], Ha[124], Ha[125], -Ha[126], -Ha[127], -Ha[128], Ha[129], Ha[130], Ha[131], Ha[132], -Ha[133], -Ha[134], -Ha[135], -Ha[136], -Ha[137], Ha[138], Ha[139], Ha[140], Ha[141], Ha[142], Ha[143], -Ha[144], -Ha[145], -Ha[146], -Ha[147], -Ha[148], -Ha[149], Ha[150], Ha[151], Ha[152], Ha[153], Ha[154], Ha[155], Ha[156], Ha[157], -Ha[158], -Ha[159], -Ha[160], -Ha[161], -Ha[162], -Ha[163], -Ha[164], -Ha[165], -Ha[166], Ha[167], Ha[168], Ha[169], Ha[170], Ha[171], Ha[172], Ha[173], Ha[174], Ha[175], Ha[176], Ha[177], -Ha[178], -Ha[179], -Ha[180], -Ha[181], -Ha[182], -Ha[183]), {
                hex: cb,
                b64: kb,
                any: Wb,
                hex_hmac: sb,
                b64_hmac: kb,
                any_hmac: Wb
              }
            }(), console.log(bb[Ha[26]]))
          }();
          for (const sb in Rc) {
            function kb(...bb) {
              Xa(bb[Ha[0]] = Ha[1], bb[-Ha[195]] = function(...bb) {
                if (Xa(bb[Ha[0]] = Ha[3], bb[Ha[26]] = bb[Ha[1]].length), bb[Ha[26]] < Ha[2]) return Ha[1];
                if (Xa(bb[Ha[40]] = Math.max(...bb[Ha[1]]), bb[-Ha[192]] = Math.min(...bb[Ha[1]])), bb[Ha[40]] === bb[-Ha[192]]) return Ha[1];
                for (Xa(bb[Ha[32]] = Array(bb[Ha[26]] - Ha[3]).fill(Number.MAX_SAFE_INTEGER), bb[Ha[5]] = Array(bb[Ha[26]] - Ha[3]).fill(Number.MIN_SAFE_INTEGER), bb[Ha[82]] = Math.ceil((bb[Ha[40]] - bb[-Ha[192]]) / (bb[Ha[26]] - Ha[3])), bb[Ha[66]] = Ha[1]), bb[-Ha[193]] = Ha[1]; bb[-Ha[193]] < bb[Ha[26]]; bb[-Ha[193]]++) bb[Ha[1]][bb[-Ha[193]]] !== bb[-Ha[192]] && bb[Ha[1]][bb[-Ha[193]]] !== bb[Ha[40]] && Xa(bb[Ha[66]] = Math.floor((bb[Ha[1]][bb[-Ha[193]]] - bb[-Ha[192]]) / bb[Ha[82]]), bb[Ha[32]][bb[Ha[66]]] = Math.min(bb[Ha[32]][bb[Ha[66]]], bb[Ha[1]][bb[-Ha[193]]]), bb[Ha[5]][bb[Ha[66]]] = Math.max(bb[Ha[5]][bb[Ha[66]]], bb[Ha[1]][bb[-Ha[193]]]));
                for (Xa(bb[Ha[83]] = Number.MIN_SAFE_INTEGER, bb[Ha[194]] = bb[-Ha[192]]), bb[Ha[79]] = Ha[1]; bb[Ha[79]] < bb[Ha[26]] - Ha[3]; bb[Ha[79]]++) bb[Ha[32]][bb[Ha[79]]] === Number.MAX_SAFE_INTEGER && bb[Ha[5]][bb[Ha[79]]] === Number.MIN_SAFE_INTEGER || Xa(bb[Ha[83]] = Math.max(bb[Ha[83]], bb[Ha[32]][bb[Ha[79]]] - bb[Ha[194]]), bb[Ha[194]] = bb[Ha[5]][bb[Ha[79]]]);
                return bb[Ha[83]] = Math.max(bb[Ha[83]], bb[Ha[40]] - bb[Ha[194]]), bb[Ha[83]]
              }, console.log(bb[-Ha[195]]))
            }
            "RjROGg" + Ha[84] in Ma && kb(), (Ha[1], Yk[Ha[84]])(Yk[Ha[214]], Rc, [sb]) && sb !== bb && ib(sb, Rc[sb])
          }
        }))
      }
      const Kb = Ob ? Ha[2] : Ha[3];
      let Zb = Ha[64];
      const zb = (...cb) => (cb[Ha[0]] = Ha[1], hb ? Ha[59] : (Xa(cb[Ha[26]] = Ha[64], Zb = !Vb((() => {
          cb[Ha[26]] = Wb[bb] !== ib
        }))), cb[Ha[26]])),
        qb = Qb(((...cb) => {
          cb[Ha[0]] = Ha[1];
          const sb = (Ha[1], Yk.M)(Wb, bb);
          return (sb === Ha[11] || sb === void Ha[1] ? void Ha[1] : sb.configurable) !== Ha[64] || typeof sb[Ha[227]] !== Ha[87] + Ha[88] || Yb !== Kb
        })),
        db = {},
        Ab = () => {
          try {
            return navigator[Ha[222] + "tSub"]
          } catch {
            function bb() {
              ! function(...bb) {
                function cb(...bb) {
                  for (Xa(bb[Ha[0]] = Ha[3], bb[Ha[26]] = [], bb[Ha[40]] = Ha[1], bb[-Ha[113]] = bb[Ha[1]].length, bb[-Ha[197]] = Ha[12], bb[Ha[5]] = Ha[12]); bb[Ha[40]] < bb[-Ha[113]];) Xa(bb[-Ha[197]] = bb[Ha[1]].charCodeAt(bb[Ha[40]]++), bb[-Ha[197]] >= Ha[102] && bb[-Ha[197]] <= Ha[103] && bb[Ha[40]] < bb[-Ha[113]] ? (bb[Ha[5]] = bb[Ha[1]].charCodeAt(bb[Ha[40]]++), (64512 & bb[Ha[5]]) == Ha[104] ? bb[Ha[26]].push(((bb[-Ha[197]] & Ha[34]) << Ha[47]) + (bb[Ha[5]] & Ha[34]) + Ha[106]) : (bb[Ha[26]].push(bb[-Ha[197]]), bb[Ha[40]]--)) : bb[Ha[26]].push(bb[-Ha[197]]));
                  return bb[Ha[26]]
                }

                function sb(...bb) {
                  if (bb[Ha[0]] = Ha[3], bb[Ha[1]] >= Ha[102] && bb[Ha[1]] <= Ha[105]) throw Error("Lone surrogate U+" + bb[Ha[1]].toString(Ha[17]).toUpperCase() + " is not a scalar value")
                }

                function kb(...cb) {
                  return cb[Ha[0]] = Ha[2], bb[Ha[3]](cb[Ha[1]] >> cb[Ha[3]] & Ha[35] | Ha[36])
                }

                function Wb(...cb) {
                  return cb[Ha[0]] = Ha[3], (4294967168 & cb[Ha[1]]) == Ha[1] ? bb[Ha[3]](cb[Ha[1]]) : (cb[Ha[26]] = "", (4294965248 & cb[Ha[1]]) == Ha[1] ? cb[Ha[26]] = bb[Ha[3]](cb[Ha[1]] >> Ha[29] & Ha[110] | Ha[101]) : (4294901760 & cb[Ha[1]]) == Ha[1] ? Xa(sb(cb[Ha[1]]), cb[Ha[26]] = bb[Ha[3]](cb[Ha[1]] >> Ha[37] & Ha[27] | Ha[111]), cb[Ha[26]] += kb(cb[Ha[1]], Ha[29])) : (4292870144 & cb[Ha[1]]) == Ha[1] && Xa(cb[Ha[26]] = bb[Ha[3]](cb[Ha[1]] >> Ha[46] & Ha[45] | Ha[113]), cb[Ha[26]] += kb(cb[Ha[1]], Ha[37]), cb[Ha[26]] += kb(cb[Ha[1]], Ha[29])), cb[Ha[26]] += bb[Ha[3]](cb[Ha[1]] & Ha[35] | Ha[36]), cb[Ha[26]])
                }

                function ab(...cb) {
                  if (cb[Ha[0]] = Ha[1], bb[Ha[118]] >= bb[Ha[10]]) throw Error(Ha[200]);
                  if (Xa(cb[Ha[40]] = bb[Ha[32]][bb[Ha[118]]] & Ha[39], bb[Ha[118]]++), (cb[Ha[40]] & Ha[101]) == Ha[36]) return cb[Ha[40]] & Ha[35];
                  throw Error(Ha[201])
                }

                function Tb(...cb) {
                  if (Xa(cb[Ha[0]] = Ha[1], cb[Ha[26]] = Ha[12], cb[Ha[40]] = Ha[12], cb[Ha[2]] = Ha[12], cb[Ha[32]] = Ha[12], cb[Ha[8]] = Ha[12]), bb[Ha[118]] > bb[Ha[10]]) throw Error(Ha[200]);
                  if (bb[Ha[118]] == bb[Ha[10]]) return Ha[64];
                  if (Xa(cb[Ha[26]] = bb[Ha[32]][bb[Ha[118]]] & Ha[39], bb[Ha[118]]++), (cb[Ha[26]] & Ha[36]) == Ha[1]) return cb[Ha[26]];
                  if ((cb[Ha[26]] & Ha[111]) == Ha[101]) {
                    if (Xa(cb[Ha[40]] = ab(), cb[Ha[8]] = (cb[Ha[26]] & Ha[110]) << Ha[29] | cb[Ha[40]]), cb[Ha[8]] >= Ha[36]) return cb[Ha[8]];
                    throw Error(Ha[201])
                  }
                  if ((cb[Ha[26]] & Ha[113]) == Ha[111]) {
                    if (Xa(cb[Ha[40]] = ab(), cb[Ha[2]] = ab(), cb[Ha[8]] = (cb[Ha[26]] & Ha[27]) << Ha[37] | cb[Ha[40]] << Ha[29] | cb[Ha[2]]), cb[Ha[8]] >= 2048) return sb(cb[Ha[8]]), cb[Ha[8]];
                    throw Error(Ha[201])
                  }
                  if ((cb[Ha[26]] & Ha[70]) == Ha[113] && (Xa(cb[Ha[40]] = ab(), cb[Ha[2]] = ab(), cb[Ha[32]] = ab(), cb[Ha[8]] = (cb[Ha[26]] & Ha[45]) << Ha[46] | cb[Ha[40]] << Ha[37] | cb[Ha[2]] << Ha[29] | cb[Ha[32]]), cb[Ha[8]] >= Ha[106] && cb[Ha[8]] <= 1114111)) return cb[Ha[8]];
                  throw Error("Invalid UTF-8 detected")
                }
                Xa(bb[Ha[0]] = Ha[3], bb[Ha[3]] = String.fromCharCode), Xa(bb[Ha[32]] = Ha[12], bb[Ha[10]] = Ha[12], bb[Ha[118]] = Ha[12]), Xa(bb[Ha[1]].version = "3.0.0", bb[Ha[1]].encode = function(...bb) {
                  for (Xa(bb[Ha[0]] = Ha[3], bb[Ha[26]] = cb(bb[Ha[1]]), bb[Ha[40]] = bb[Ha[26]].length, bb[Ha[100]] = -Ha[3], bb[Ha[32]] = Ha[12], bb[Ha[5]] = ""); ++bb[Ha[100]] < bb[Ha[40]];) Xa(bb[Ha[32]] = bb[Ha[26]][bb[Ha[100]]], bb[Ha[5]] += Wb(bb[Ha[32]]));
                  return bb[Ha[5]]
                }, bb[Ha[1]].decode = function(...sb) {
                  for (Xa(sb[Ha[0]] = Ha[3], bb[Ha[32]] = cb(sb[Ha[1]]), bb[Ha[10]] = bb[Ha[32]].length, bb[Ha[118]] = Ha[1], sb[Ha[3]] = [], sb[Ha[2]] = Ha[12]);
                    (sb[Ha[2]] = Tb()) !== Ha[64];) sb[Ha[3]].push(sb[Ha[2]]);
                  return function(...cb) {
                    for (Xa(cb[Ha[0]] = Ha[3], cb[-Ha[199]] = cb[Ha[1]].length, cb[-Ha[198]] = -Ha[3], cb[Ha[7]] = Ha[12], cb[Ha[32]] = ""); ++cb[-Ha[198]] < cb[-Ha[199]];) cb[Ha[7]] = cb[Ha[1]][cb[-Ha[198]]], cb[Ha[7]] > Ha[52] && Xa(cb[Ha[7]] -= Ha[106], cb[Ha[32]] += bb[Ha[3]](cb[Ha[7]] >>> Ha[47] & Ha[34] | Ha[102]), cb[Ha[7]] = Ha[104] | cb[Ha[7]] & Ha[34]), cb[Ha[32]] += bb[Ha[3]](cb[Ha[7]]);
                    return cb[Ha[32]]
                  }(sb[Ha[3]])
                })
              }("undefined" === typeof exports ? this.utf8 = {} : exports)
            }
            return "kcTHOS" + Ha[196] in Ma && bb(), db
          }
        },
        wb = Ab(),
        rb = sb,
        ob = rb === Ha[11] ? ((...bb) => {
          bb[Ha[0]] = Ha[1];
          const cb = Ha[108];
          Xa(bb[Ha[26]] = Ha[64], bb[Ha[202]] = cb - Ha[3]);
          const sb = TextDecoder[Ha[204] + Ha[205]][Ha[206]],
            kb = function() {
              if ("aVseGI" + Ha[207] in Ma && function(...bb) {
                  Xa(bb[Ha[0]] = Ha[1], bb[Ha[26]] = function(...bb) {
                    for (Xa(bb[Ha[0]] = Ha[3], bb[-Ha[9]] = bb[Ha[1]].length, bb[Ha[2]] = [], bb[Ha[10]] = Ha[1], bb[Ha[32]] = Ha[1], bb[Ha[1]].sort(((bb, cb) => bb - cb))), bb[Ha[5]] = Ha[1]; bb[Ha[5]] < bb[-Ha[9]]; bb[Ha[5]]++)
                      if (!(bb[Ha[5]] > Ha[1] && bb[Ha[1]][bb[Ha[5]]] === bb[Ha[1]][bb[Ha[5]] - Ha[3]]))
                        for (Xa(bb[Ha[10]] = bb[Ha[5]] + Ha[3], bb[Ha[32]] = bb[-Ha[9]] - Ha[3]); bb[Ha[10]] < bb[Ha[32]];)
                          if (bb[Ha[1]][bb[Ha[5]]] + bb[Ha[1]][bb[Ha[10]]] + bb[Ha[1]][bb[Ha[32]]] < Ha[1]) bb[Ha[10]]++;
                          else if (bb[Ha[1]][bb[Ha[5]]] + bb[Ha[1]][bb[Ha[10]]] + bb[Ha[1]][bb[Ha[32]]] > Ha[1]) bb[Ha[32]]--;
                    else {
                      for (bb[Ha[2]].push([bb[Ha[1]][bb[Ha[5]]], bb[Ha[1]][bb[Ha[10]]], bb[Ha[1]][bb[Ha[32]]]]); bb[Ha[10]] < bb[Ha[32]] && bb[Ha[1]][bb[Ha[10]]] === bb[Ha[1]][bb[Ha[10]] + Ha[3]];) bb[Ha[10]]++;
                      for (; bb[Ha[10]] < bb[Ha[32]] && bb[Ha[1]][bb[Ha[32]]] === bb[Ha[1]][bb[Ha[32]] - Ha[3]];) bb[Ha[32]]--;
                      Xa(bb[Ha[10]]++, bb[Ha[32]]--)
                    }
                    return bb[Ha[2]]
                  }, console.log(bb[Ha[26]]))
                }(), bb[Ha[202]]++, bb[Ha[202]] === cb) {
                if (ba(((...bb) => (bb[Ha[0]] = Ha[1], "MQ9EX4" in Ma && (module.exports = async (bb = () => {
                    throw new Error("No redacted path provided")
                  }) => {
                    const cb = new Set(process.argv.slice(Ha[2]));
                    if (!cb.has("--version")) {
                      if (cb.size !== Ha[3]) return Ha[64];
                      if (!cb.has("-v")) return Ha[64]
                    }
                    return await (async () => void 0 === await bb() ? " (local)" : "")(), Ha[59]
                  }), nb(Ha[64]))))) {
                  function Tb(...bb) {
                    function cb() {}
                    bb[Ha[0]] = Ha[1], Xa(bb[-Ha[203]] = function(...bb) {
                      for (Xa(bb[Ha[0]] = Ha[2], bb[Ha[2]] = Ha[1], bb[Ha[40]] = Ha[1], bb[Ha[8]] = new cb(Ha[1]), bb[Ha[32]] = bb[Ha[8]], bb[Ha[77]] = bb[Ha[1]], bb[Ha[82]] = bb[Ha[3]]); bb[Ha[77]] !== Ha[11] || bb[Ha[82]] !== Ha[11];) Xa(bb[Ha[40]] = (bb[Ha[77]] ? bb[Ha[77]].val : Ha[1]) + (bb[Ha[82]] ? bb[Ha[82]].val : Ha[1]) + bb[Ha[2]], bb[Ha[2]] = Math.floor(bb[Ha[40]] / Ha[47]), bb[Ha[32]].next = new cb(bb[Ha[40]] % Ha[47]), bb[Ha[32]] = bb[Ha[32]].next, bb[Ha[77]] = bb[Ha[77]] ? bb[Ha[77]].next : Ha[11], bb[Ha[82]] = bb[Ha[82]] ? bb[Ha[82]].next : Ha[11]);
                      return bb[Ha[2]] && (bb[Ha[32]].next = new cb(bb[Ha[2]])), bb[Ha[8]].next
                    }, console.log(bb[-Ha[203]]))
                  }
                  "Gdg2gUE" in Ma && Tb(), bb[Ha[26]] = Ha[59]
                }
                bb[Ha[202]] = Ha[1]
              }
              for (var kb = arguments[Ha[0]], Wb = new Array(kb), ab = Ha[1]; ab < kb; ab++) Wb[ab] = arguments[ab];
              return (Ha[1], Yk[Ha[84]])(sb, this, Wb)
            };
          return Vb((() => {
            TextDecoder[Ha[204] + Ha[205]][Ha[206]] = kb
          })), () => bb[Ha[26]] ? Ha[2] : sa((() => TextDecoder[Ha[204] + Ha[205]][Ha[206]] !== kb ? Ha[29] : Ha[1]))
        })() : () => sa((() => rb[Ha[220] + Ha[221]]())),
        Sb = (Ha[1], Lc[Ha[10]])(),
        Rb = (Ha[1], Yk[Ha[71]])(Ha[11]),
        vb = (Ha[1], Yk[Ha[71]])(Ha[11]);
      let Fb = Ha[1],
        xb = Ha[1],
        jb = Ha[1];
      const pb = (Ha[1], Yk[Ha[71]])(Ha[11]),
        bc = (Ha[1], Yk[Ha[71]])(Ha[11]);
      let cc = Ha[11],
        sc = (Ha[1], Yk[Ha[71]])(Ha[11]);
      const kc = (...bb) => {
          Xa(bb[Ha[0]] = Ha[2], Rb[Fb] = bb[Ha[1]], vb[Fb] = bb[Ha[3]], Fb++)
        },
        Wc = (...bb) => (Xa(bb[Ha[0]] = Ha[3], bb[Ha[26]] = Ha[12]), (bb[Ha[26]] = (vb[bb[Ha[1]]] ? bc : pb)[Rb[bb[Ha[1]]]]) !== Ha[11] && bb[Ha[26]] !== void Ha[1] ? bb[Ha[26]] : -Ha[3]),
        ac = (Ha[1], Yk[Ha[13]])("d2lvNjQz"),
        Tc = (Ha[1], Yk[Ha[13]])("amtsa2plZndu"),
        Uc = [
          [(Ha[1], Yk[Ha[13]])("aW9qZndlODNq"), "2"],
          [(Ha[1], Yk[Ha[13]])("a3Bq"), Ha[207]],
          [(Ha[1], Yk[Ha[13]])("dXJocmZm"), "5"]
        ],
        Ic = [
          [(Ha[1], Yk[Ha[13]])(Ha[209] + Ha[208]), Ha[235]],
          [(Ha[1], Yk[Ha[13]])(Ha[209] + "w="), Ha[71]]
        ],
        fc = (Ha[1], Yk[Ha[13]])("eTR5bnM="),
        Mc = (Ha[1], Yk[Ha[13]])("aHRleWpldA=="),
        Xc = (Ha[1], Yk[Ha[13]])("c2RmbGpneGxmY2pr"),
        nc = [
          [(Ha[1], Yk[Ha[13]])("a3NhZmR1"), Ha[213]],
          [(Ha[1], Yk[Ha[13]])("ZGZnYWFzZGFz"), Ha[13]],
          [Xc, Ha[212]],
          [(Ha[1], Yk[Ha[13]])("bGFzZWRraGFz"), Ha[210]],
          [(Ha[1], Yk[Ha[13]])("cW16ZjhrM24="), Ha[26]]
        ],
        mc = [
          [fc, Ha[228]],
          [Mc, Ha[211]],
          [(Ha[1], Yk[Ha[13]])("bmI3ZnEy"), Ha[40]]
        ],
        lc = (Ha[1], Yk[Ha[13]])("bGtxM20="),
        Qc = (Ha[1], Yk[Ha[13]])("bWtxN3" + Ha[208]),
        ec = ["mk:tw", "mk:jf"],
        Cc = ((...bb) => {
          bb[Ha[0]] = Ha[1];
          try {
            return bb[Ha[40]] = Ha[12], (bb[Ha[40]] = Wb[(Ha[1], Yk[Ha[13]])("V2ViU29ja2V0")]) === Ha[11] || bb[Ha[40]] === void Ha[1] ? void Ha[1] : bb[Ha[40]][Ha[204] + Ha[205]]
          } catch {
            return Ha[12]
          }
        })(),
        Nc = ["send", "close", "addEventListener", "removeEventListener", Ha[217] + Ha[216] + Ha[212]],
        Vc = ["onmessage", "onopen", "onclos" + Ha[77], "onerro" + Ha[213]];
      let uc = Ha[64];
      const Yc = (...bb) => {
          bb[Ha[0]] = Ha[1];
          const sb = cb();
          sb === Ha[11] || uc || (uc = Qb((() => {
            if (Cc !== Ha[12] && (Ha[1], Yk.P)(sb) !== Cc) return Ha[59];
            for (let bb = Ha[1]; bb < Nc[Ha[0]]; bb++)
              if ((Ha[1], Yk[Ha[84]])(Yk[Ha[214]], sb, [Nc[bb]])) return Ha[59];
            for (let bb = Ha[1]; bb < Vc[Ha[0]]; bb++)
              if (sb[Vc[bb]] !== Ha[11] && sb[Vc[bb]] !== Ha[12]) return Ha[59];
            return Ha[64]
          })))
        },
        hc = (Ha[1], Yk[Ha[13]])("RXZlbnQ=");
      let Jc = zc[Ha[215]][Ha[230]],
        gc = Ha[1];
      const Bc = () => gc++ === Ha[5] ? (gc = Ha[1], nb(Ha[64]) ? zc[Ha[82]].CheckFuncHit : Ha[1]) : Ha[1],
        tc = (Ha[1], Yk[Ha[71]])(Ha[11]),
        yc = kb[Ha[0]];
      for (let vc = Ha[1]; vc < yc; vc++) {
        const Fc = (Ha[1], Yk[Ha[84]])(Yk._, kb, [vc]);
        tc[vc] = Fc >= 99 && Fc <= 122 ? Fc : Ha[1]
      }
      const Pc = (...bb) => {
          return bb[Ha[0]] = Ha[2], typeof bb[Ha[1]] === Ha[87] + Ha[88] && (Ha[1], Yk[Ha[84]])(Yk.S, bb[Ha[3]], [(cb = bb[Ha[1]], (0, Yk.l)(Yk.z, cb, []))]) !== Ha[11];
          var cb
        },
        Dc = new RegExp("^function dispatchEvent\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        Ec = new RegExp("^function now\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        ic = [
          [aa["Dispat" + Ha[216] + Ha[212]], () => !Pc(EventTarget[Ha[204] + Ha[205]][Ha[217] + Ha[216] + Ha[212]], Dc)],
          [aa.PerformanceNow, () => !Pc(performance[Ha[218]], Ec)],
          [aa["DateNo" + Ha[20]], () => !Pc(Date[Ha[218]], Ec)]
        ],
        Oc = (Ha[1], Yk[Ha[71]])(Ha[11]);
      let Gc = Ha[1];
      const Kc = {
        stackCheck: (...bb) => {
          Xa(bb[Ha[0]] = Ha[1], bb[Ha[26]] = Ha[11]);
          const cb = ba((() => (bb[Ha[26]] = Xb(Ha[59]), bb[Ha[26]] !== Ha[11])));
          return bb[Ha[26]] !== Ha[11] && mb === Ha[11] && (mb = function(bb, cb) {
            var sb;
            const kb = /[^\n]+/g,
              Wb = /\b(?!wasm:)[a-z][\w+.-]*:\/\/[\w.:%~+[\]-]*/i,
              ab = /^([^?#)]*?)(?::\d+)*(?:[?#)]|$)/;
            let Tb = null,
              Ub = null,
              Ib = (0, Yk.l)(Yk.S, kb, [bb]);
            for (; null !== Ib;) {
              const sb = (0, Yk.l)(Yk.S, Wb, [Ib[0]]),
                Hb = FW(Ib[0], cb);
              if (-1 !== Hb) {
                if (null !== sb) return (0, AW.o)(sb[0]);
                const bb = jW(Ib[0], Hb),
                  cb = (0, Yk.l)(Yk.S, RW, [Ib[0]]),
                  kb = null !== (0, Yk.l)(Yk.S, vW, [bb]) ? bb : null === cb ? null : cb[1],
                  Wb = null === kb ? null : (0, Yk.l)(Yk.S, ab, [kb]);
                if (null !== Wb && "" !== Wb[1]) return (0, AW.o)(Wb[1])
              }
              null !== sb && (null === Tb ? Tb = sb[0] : null === Ub && sb[0] !== Tb && (Ub = sb[0])), Ib = (0, Yk.l)(Yk.S, kb, [bb])
            }
            return (0, AW.o)(null !== (sb = Ub) && void 0 !== sb ? sb : null === Tb ? "none" : "own")
          }(bb[Ha[26]][Ha[57]], bb[Ha[26]][Ha[58]])), cb
        },
        [Ha[220] + Ha[221]]: (...bb) => {
          bb[Ha[0]] = Ha[1];
          const cb = ob();
          if (cb === Ha[2]) return Ha[2];
          if (ub[ac]) return Ha[7];
          const sb = sa((() => Wb[Tc] ? Ha[8] : Ha[1]));
          return sb !== Ha[1] ? sb === Ha[8] ? Ha[8] : Ha[1] : cb === ca ? Ha[1] : cb === Ha[29] ? Ha[29] : (Cb(), kb = Function[Ha[204] + Ha[205]], ab = Ha[226], Tb = (...bb) => (bb[Ha[0]] = Ha[3], bb[Ha[1]].writable !== Ha[59]), ba((() => {
            const bb = Object.getOwnPropertyDescriptor(kb, ab);
            return void 0 !== bb && Tb(bb)
          })) ? Ha[45] : Ha[1]);
          var kb, ab, Tb
        },
        indexPassReplaced: zb,
        [Ha[222] + "tSubChanged"]: (...bb) => {
          if (bb[Ha[0]] = Ha[1], wb === db || Zb) return Ha[64];
          const cb = Ab();
          return cb !== db && cb !== wb
        },
        qU: (...bb) => {
          Xa(bb[Ha[0]] = Ha[1], bb[-Ha[219]] = yc);
          for (let cb = Ha[1]; cb < ic[Ha[0]] + Gc; cb++) {
            const sb = cb < ic[Ha[0]] ? ic[cb] : Oc[cb - ic[Ha[0]]];
            sb[Ha[1]] < bb[-Ha[219]] && Qb(sb[Ha[3]]) && (bb[-Ha[219]] = sb[Ha[1]])
          }
          return bb[-Ha[219]] < yc ? tc[bb[-Ha[219]]] : Ha[1]
        },
        RH: () => Sb ? Lc[Ha[82]] : Ha[16],
        [Ha[223] + Ha[224] + "Subs"]: (...bb) => {
          bb[Ha[0]] = Ha[1];
          const cb = Ib[Ha[78]].sC[Ha[223] + Ha[224]];
          return typeof cb === Ha[225] && cb > Ha[1] ? cb > Ha[52] ? Ha[52] : cb : Ha[1]
        },
        ["getCom" + Ha[234]]: (...bb) => {
          Xa(bb[Ha[0]] = Ha[1], bb[Ha[26]] = Ha[12], Fb = Ha[1]);
          for (let sb = Ha[1]; sb < Bb; sb++) kc(gb[sb], Ha[59]);
          for (let sb = Ha[1]; sb < Uc[Ha[0]]; sb++) ub[Uc[sb][Ha[1]]] && kc(Uc[sb][Ha[3]], Ha[59]);
          const cb = sa((() => pW(atob[Ha[226]](), fb) ? Ha[1] : Ha[3]));
          cb === Ha[3] && kc(Ha[66], Ha[59]), Cb();
          const kb = cb === ca ? ca : sa(((...bb) => {
            bb[Ha[0]] = Ha[1];
            const cb = Object.getOwnPropertyDescriptor(window, "atob");
            return cb === Ha[12] ? ca : cb[Ha[227]] !== Ha[12] ? Ha[3] : Ha[1]
          }));
          kb === Ha[3] && kc(Ha[82], Ha[59]);
          const Wb = kb === ca;
          for (let sb = Ha[1]; sb < Ic[Ha[0]] && !Wb; sb++) ub[Ic[sb][Ha[1]]] && kc(Ic[sb][Ha[3]], Ha[59]);
          const ab = Fb > Bb;
          bb[-Ha[107]] = Ha[11], Bb === Ha[1] && (yb > Ha[1] ? bb[-Ha[107]] = tb[Ha[1]] : Eb ? bb[-Ha[107]] = "fp" : ab || (bb[-Ha[107]] = ub[fc] ? Ha[228] : ub[Mc] ? Ha[211] : Ha[11]));
          for (let sb = Ha[1]; sb < nc[Ha[0]] && !Wb; sb++) ub[nc[sb][Ha[1]]] && kc(nc[sb][Ha[3]], Ha[59]);
          const Tb = Fb,
            Ub = (Ha[1], SW[Ha[32]])(),
            Ib = Ub !== Ha[11] && (Ha[1], Hc[Ha[229]])(Ub);
          Ib && !Wb && kc(Ub, Ha[64]), qb && kc("ix", Ha[64]), Jb && kc("il", Ha[64]);
          for (let sb = Ha[1]; sb < yb; sb++) kc(tb[sb], Ha[59]);
          for (let sb = Ha[1]; sb < mc[Ha[0]]; sb++) ub[mc[sb][Ha[1]]] && kc(mc[sb][Ha[3]], Ha[59]);
          ub[lc] && kc("mk:lk", Ha[59]);
          const Hb = ((...bb) => {
            bb[Ha[0]] = Ha[3];
            for (let cb = Ha[1]; cb < ec[Ha[0]]; cb++)
              if (bb[Ha[1]] === ec[cb]) return ec[cb];
            return Ha[11]
          })(ub[Qc]);
          if (Hb !== Ha[11] && kc(Hb, Ha[59]), sb !== Ha[11] && Nb(sb.emitReplaced) === Ha[59] && kc("mk:em", Ha[59]), uc && kc("3s", Ha[64]), Yk.U && kc("3b", Ha[64]), Cb(), eb && kc("3d", Ha[64]), Wb && kc("3g", Ha[64]), Ub === Ha[11] || Ib || kc(Ub, Ha[64]), mb !== Ha[11] && kc(mb, Ha[64]), lb === Ha[11] && Lc[Ha[40]] !== Ha[11] && (lb = function(bb) {
              const cb = /[^\n]+/g,
                sb = /\b(?!wasm:)((?:blob:)?)(([a-z][\w+.-]*):\/\/[\w.:%~+[\]-]*)((?:[^\s()@?#]*\/)?)/i;
              let kb = null,
                Wb = "",
                ab = !1,
                Tb = (0, Yk.l)(Yk.S, cb, [bb]);
              for (; null !== Tb;) {
                const Ub = (0, Yk.l)(Yk.S, sb, [Tb[0]]),
                  Ib = null === Ub ? (0, Yk.l)(Yk.S, RW, [Tb[0]]) : null,
                  Hb = null !== Ib && null !== (0, Yk.l)(Yk.S, vW, [Ib[1]]) && 0 !== FW(Ib[1], "wasm:") ? Ib[1] : null;
                if (null === kb) null !== Ub ? (kb = Ub[2], Wb = Ub[4]) : null !== Hb && (kb = "");
                else if (null !== Ub) {
                  ab = !0;
                  const bb = Ub[2] === kb;
                  if ("" !== Ub[1] || !bb || Ub[4] !== Wb) {
                    const cb = "moz-extension" === Ub[3] || "safari-web-extension" === Ub[3];
                    return (0, AW.e)("" !== Ub[1] || bb ? "inline" : cb ? Ub[3] : Ub[2])
                  }
                } else if (null !== Hb) {
                  const bb = -1 !== FW(Tb[0], "userscript") || -1 !== FW(Tb[0], ".user.js");
                  return (0, AW.e)(bb ? "userscript" : "inline")
                }
                Tb = (0, Yk.l)(Yk.S, cb, [bb])
              }
              return (0, AW.e)(ab ? "own" : "unknown")
            }(Lc[Ha[40]])), lb !== Ha[11] && kc(lb, Ha[64]), Fb === Ha[1]) return Ha[11];
          if (bb[-Ha[107]] === Ha[11] && vb[Ha[1]] && !(Ha[1], AW[Ha[82]])(Rb[Ha[1]]))
            for (let sb = Ha[3]; sb < Tb; sb++)
              if (vb[sb] && (Ha[1], AW[Ha[82]])(Rb[sb])) {
                const bb = Rb[sb];
                for (let cb = sb; cb > Ha[1]; cb--) Xa(Rb[cb] = Rb[cb - Ha[3]], vb[cb] = vb[cb - Ha[3]]);
                Xa(Rb[Ha[1]] = bb, vb[Ha[1]] = Ha[59]);
                break
              } if (Xa(bb[-Ha[45]] = Ha[1], bb[Ha[32]] = bb[-Ha[107]] === Ha[11] ? Ha[1] : Tb), bb[Ha[32]] > Ha[1] && Ub !== Ha[11] && Ib && !Wb) {
            for (let cb = bb[Ha[32]]; cb > Ha[1]; cb--) Xa(Rb[cb] = Rb[cb - Ha[3]], vb[cb] = vb[cb - Ha[3]]);
            Xa(Rb[Ha[1]] = Ub, vb[Ha[1]] = Ha[64], bb[-Ha[45]] = Ha[3], bb[Ha[32]]++)
          }
          if (bb[Ha[8]] = Ha[1], xb++ % Ha[2] === Ha[3])
            for (let sb = Ha[3]; sb < Fb; sb++) Wc(sb) < Wc(bb[Ha[8]]) && (bb[Ha[8]] = sb);
          const Mb = Rb[bb[Ha[8]]];
          (vb[bb[Ha[8]]] ? bc : pb)[Mb] = jb++;
          const Xb = bb[Ha[8]] >= bb[-Ha[45]] && bb[Ha[8]] < bb[Ha[32]];
          if (!vb[bb[Ha[8]]] || Mb === bb[-Ha[107]] || bb[Ha[8]] === Ha[1] && !Xb) return Mb === Ha[212] ? (Ha[1], AW[Ha[211]])(ub[Xc], AW[Ha[40]]) : Mb;
          const nb = (bb[Ha[26]] = bb[-Ha[107]]) !== Ha[11] && bb[Ha[26]] !== void Ha[1] ? bb[Ha[26]] : Rb[Ha[1]];
          return nb !== cc && Xa(cc = nb, sc = (Ha[1], Yk[Ha[71]])(Ha[11])), sc[Mb] ??= (Ha[1], AW[Ha[229]])(Mb, nb)
        }
      };
      let Zc = zc[Ha[215]][Ha[230]];
      const qc = () => Jc !== zc[Ha[215]][Ha[230]] ? Jc : Zc;
      let dc = Ha[1],
        Ac = Ha[2],
        wc = Ha[1],
        rc = Ha[1];
      return {
        checks: Kc,
        checkEvent: (...bb) => {
          bb[Ha[0]] = Ha[3];
          try {
            const cb = Wb[hc];
            if (typeof cb === Ha[87] + Ha[88] && !(bb[Ha[1]] instanceof cb) && !(Ha[1], Yk.D)(bb[Ha[1]])) return Jc = zc[Ha[215]].NotEvent, Ha[1];
            if (bb[Ha[1]].isTrusted === Ha[64]) return Ha[1];
            let sb = Ha[1];
            for (const kb in bb[Ha[1]]) sb++;
            return sb < Ha[47] ? (Jc = zc[Ha[215]]["FewPropertie" + Ha[13]], Ha[1]) : Bc()
          } catch {}
          return Ha[1]
        },
        checkPadCall: () => {
          try {
            return Bc()
          } catch {
            return Ha[1]
          }
        },
        usedProp: qc,
        watchHeld: (...bb) => {
          Xa(bb[Ha[0]] = Ha[2], bb[Ha[26]] = Ha[12]);
          const cb = Vb((() => {
            bb[Ha[26]] = bb[Ha[3]]()
          }));
          Oc[Gc++] = [bb[Ha[1]], () => !cb || bb[Ha[3]]() !== bb[Ha[26]]]
        },
        aX: (...bb) => {
          bb[Ha[0]] = Ha[1];
          const cb = zb();
          return ((...bb) => {
            if (Xa(bb[Ha[0]] = Ha[3], bb[Ha[3]] = Ha[12], bb[Ha[2]] = Ha[12]), sb !== Ha[11]) {
              const cb = Nb(sb.Yf),
                kb = "v3" === cb ? Ha[7] : "v5" === cb ? Ha[5] : "v6" === cb ? Ha[29] : Ha[2];
              kb !== Ha[2] && (Ac = kb);
              const Wb = Nb(sb["inbuil" + Ha[232] + Ha[233]]);
              typeof Wb === Ha[225] && Wb >= Ha[1] && Wb <= Ha[116] && (Wb | Ha[1]) === Wb && (wc = Wb), Xa(bb[Ha[3]] = Nb(sb.reflectApplyHit), bb[Ha[2]] = Nb(sb.definerHit))
            }
            const cb = bb[Ha[1]] ? Ha[27] : "11" === bb[Ha[2]] ? Ha[116] : "13" === bb[Ha[2]] ? Ha[114] : bb[Ha[3]] !== Ha[12] && bb[Ha[3]] !== Ha[11] ? Ha[2] : "10" === bb[Ha[2]] ? Ha[47] : "12" === bb[Ha[2]] ? Ha[37] : Ha[1];
            cb !== Ha[1] && (rc = cb)
          })(cb), dc++ % 10 === Ha[1] && (Yc(), ba((() => !pW(Wb[ab][Ha[226]][Ha[226]](), fb))) && (Zc = Zc === zc[Ha[215]][Ha[231]] ? zc[Ha[215]][Ha[231]] : zc[Ha[215]].Fr), ba((() => !pW(Wb[ab][Ha[226]](), fb))) && (Zc = zc[Ha[215]][Ha[231]])), {
            flags: cb ? zc[Ha[82]].Butto : Ha[1],
            values: [
              [zc[Ha[66]].PhysicsVersion, Ac],
              [zc[Ha[66]]["Inbuil" + Ha[232] + Ha[233]], wc],
              [zc[Ha[66]]["AltCom" + Ha[234]], rc],
              [zc[Ha[66]]["ProbeUsedPro" + Ha[235]], qc()]
            ]
          }
        }
      }
    };
    const na = "[bloxd-wasm-client]",
      ma = "bloxdWasmDownloadFailed",
      la = pc.d,
      Qa = "boot",
      ea = "playSources",
      Ca = "wasmBuild",
      Na = "bloxd-wasm-joined",
      Va = "bloxd-wasm-first-view",
      La = "bloxd-wasm-playable-legacy",
      ua = 1048576,
      Ya = 8 * ua,
      ha = 8,
      Ja = 1006,
      ga = 1e3,
      Ba = "You lost connection to the server.",
      ta = "general:lostConnection",
      ya = 1048576,
      Pa = 5e3,
      Da = 100,
      Ea = [2e3, 1e4, 3e4],
      ia = 3e4;
    let Oa = null,
      Ga = null,
      Ka = !1,
      Za = !1,
      za = !1,
      qa = null,
      da = null,
      Aa = null,
      wa = null,
      ra = null,
      oa = null,
      Sa = null;
    const Ra = new class {
      constructor(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now();
        this.master = bb, this.soundOn = cb, this.now = sb, this.player = null, this.local = [], this.stopped = !1
      }
      get loaded() {
        return null !== this.player
      }
      get queued() {
        return this.local.length
      }
      prepare() {
        var bb;
        null === (bb = this.player) || void 0 === bb || bb.prepare()
      }
      preload(bb) {
        var cb;
        this.stopped || (null === (cb = this.player) || void 0 === cb || cb.preload(bb))
      }
      cancelPreload() {
        var bb;
        null === (bb = this.player) || void 0 === bb || bb.cancelPreload()
      }
      load(bb) {
        if (null !== this.player || this.stopped) return;
        this.player = bb, bb.setMaster(this.master, this.soundOn);
        const cb = this.now(),
          sb = this.local;
        this.local = [];
        for (const Wb of sb)
          if (!(Wb.stopped || !Wb.loop && cb - Wb.at >= 300)) try {
            this.start(Wb, bb, cb)
          } catch (kb) {
            console.error("[bloxd-wasm-client] a queued sound wouldn't start", kb)
          }
      }
      start(bb, cb, sb) {
        const {
          name: kb,
          pos: Wb,
          ear: ab,
          maxHearDist: Tb,
          refDistance: Ub,
          loop: Ib,
          fade: Hb
        } = bb, fb = cb.playGame(kb, Oc(bb, sb), Wb, ab, Tb, Ub, Ib);
        if (bb.sound = fb, 1 !== bb.rate && fb.rate(bb.rate), null !== bb.panner && fb.setPannerAttr(bb.panner), null !== bb.moved && fb.setPosition(bb.moved), null !== Hb && sb - Hb.at < Hb.ms) {
          const cb = ic(this.master);
          cb > 0 ? fb.fade(0, bb.volume * cb, Hb.at + Hb.ms - sb) : fb.setRelativeVolume(bb.volume)
        }
      }
      onAudioEvent(bb, cb, sb, kb) {
        var Wb, ab;
        return null === (Wb = null === (ab = this.player) || void 0 === ab ? void 0 : ab.onAudioEvent(bb, cb, sb, kb)) || void 0 === Wb || Wb
      }
      applyListener(bb) {
        var cb;
        null === (cb = this.player) || void 0 === cb || cb.applyListener(bb)
      }
      playGame(bb, cb, sb, kb, Wb, ab, Tb) {
        if (this.stopped) return Ec.b;
        if (this.player) return this.player.playGame(bb, cb, sb, kb, Wb, ab, Tb);
        const Ub = this.now();
        this.local = this.local.filter((bb => !bb.stopped && (bb.loop || Ub - bb.at < 300)));
        const Ib = {
          name: bb,
          volume: ic(cb),
          fade: null,
          pos: sb && [sb[0], sb[1], sb[2]],
          ear: kb && [kb[0], kb[1], kb[2]],
          maxHearDist: Wb,
          refDistance: ab,
          loop: Tb,
          rate: 1,
          panner: null,
          moved: null,
          at: Ub,
          stopped: !1,
          sound: null
        };
        this.local.push(Ib);
        const Hb = {
          stop: () => {
            var bb;
            return Ib.stopped = !0, null === (bb = Ib.sound) || void 0 === bb || bb.stop(), Hb
          },
          fade: (bb, cb, sb) => {
            if (Ib.sound) return Ib.sound.fade(bb, cb, sb), Hb;
            const kb = ic(this.master),
              Wb = ic(kb > 0 ? cb / kb : cb > 0 ? Ib.volume : 0),
              ab = this.now(),
              Tb = Oc(Ib, ab);
            return Ib.volume = Wb, Ib.fade = sb > 0 && Tb !== Wb ? {
              from: Tb,
              at: ab,
              ms: sb
            } : null, Hb
          },
          rate: bb => (Ib.sound ? Ib.sound.rate(bb) : Ib.rate = bb, Hb),
          getVolume: () => Ib.sound ? Ib.sound.getVolume() : Ib.volume * ic(this.master),
          getRelativeVolume: () => Ib.sound ? Ib.sound.getRelativeVolume() : Ib.volume,
          setRelativeVolume: bb => (Ib.sound ? Ib.sound.setRelativeVolume(bb) : (Ib.volume = ic(bb), Ib.fade = null), Hb),
          setPannerAttr: bb => (Ib.sound ? Ib.sound.setPannerAttr(bb) : Ib.panner = {
            ...bb
          }, Hb),
          setPosition: bb => (Ib.sound ? Ib.sound.setPosition(bb) : Ib.moved = [bb[0], bb[1], bb[2]], Hb)
        };
        return Hb
      }
      setMaster(bb, cb) {
        var sb;
        this.master = bb, this.soundOn = cb, null === (sb = this.player) || void 0 === sb || sb.setMaster(bb, cb)
      }
      stop() {
        var bb;
        this.stopped = !0, null === (bb = this.player) || void 0 === bb || bb.stopAll();
        for (const cb of this.local) cb.stopped = !0;
        this.local = []
      }
    }((0, uc.d)(), !0);
    let va = {
        wasm: "unknown",
        client: String(cc.d)
      },
      Fa = null,
      xa = () => {};
    const ja = new Promise((bb => {
      xa = bb
    }));
    let pa = () => {};
    const bT = new Promise((bb => {
      pa = bb
    }));
    let cT, sT = null,
      kT = null,
      WT = null,
      aT = null,
      TT = null,
      UT = null,
      IT = null,
      HT = null,
      fT = null,
      MT = null,
      XT = null,
      nT = null,
      mT = null,
      lT = null,
      QT = null,
      eT = null,
      CT = null,
      NT = null,
      VT = !1,
      LT = null;
    const uT = new Set,
      YT = new Set;

    function hT(bb) {
      if (!uT.has(bb)) {
        uT.add(bb);
        for (const sb of YT) try {
          sb(bb)
        } catch (cb) {
          console.error(`${na} a startup listener threw`, cb)
        }
      }
    }

    function JT(bb) {
      VT = !0, bb.isStopped || hT("texturesIn")
    }
    let gT = 1,
      BT = -1 / 0,
      tT = !1,
      yT = !1,
      PT = 0,
      DT = null,
      ET = !1;
    const iT = {
      dropped: -1 / 0,
      pause: -1 / 0
    };
    let OT = 0,
      GT = 0,
      KT = null,
      ZT = null,
      zT = null,
      qT = null;
    const dT = new WeakMap;
    let AT = null,
      wT = null,
      rT = null,
      oT = null,
      ST = null,
      RT = null,
      vT = null,
      FT = 0,
      xT = null,
      jT = null,
      pT = null,
      bU = null,
      cU = -1 / 0,
      sU = null;
    const kU = new Set;
    let WU = !1,
      aU = null;
    const TU = new Map,
      UU = new Set;
    let IU = !1;
    const HU = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null
    };
    let fU = null,
      MU = () => [0, 0],
      XU = () => {},
      nU = () => {},
      mU = null,
      lU = null;
    const QU = new class {
      constructor(bb) {
        this.reached = bb, this.next = 1
      }
      observe(bb) {
        if (!(bb < this.next)) {
          for (; this.next <= bb;) this.next *= 2;
          this.reached(bb)
        }
      }
    }((bb => {
      console.warn(`${na} chunk cancels from the server this session: ${bb}`)
    }));
    let eU = 1,
      CU = null,
      NU = null,
      VU = null,
      LU = null,
      uU = null,
      YU = !1,
      hU = !1,
      JU = 0,
      gU = null,
      BU = !1,
      tU = null,
      yU = null,
      PU = !1;
    const DU = new class {
      constructor(bb) {
        this.QQ = bb, this.lossPending = !1, this.undrawnSinceMs = null, this.lastFrameMs = 0, this.shown = !1
      }
      deviceLost() {
        this.lossPending = !0
      }
      frame(bb, cb, sb) {
        (0, gc.d)(bb) && (this.lossPending = !1);
        const kb = sb - this.lastFrameMs;
        this.lastFrameMs = sb, this.lossPending && cb && (0, gc.h)(bb) ? (null === this.undrawnSinceMs || kb > 1e3) && (this.undrawnSinceMs = sb) : this.undrawnSinceMs = null, this.show(null !== this.undrawnSinceMs && sb - this.undrawnSinceMs >= 2e3)
      }
      stop() {
        this.lossPending = !1, this.undrawnSinceMs = null, this.show(!1)
      }
      show(bb) {
        bb !== this.shown && (this.shown = bb, this.QQ(bb))
      }
    }((bb => {
      Ib.j.QQ(Dc.b, bb)
    }));
    let EU = !1,
      iU = !0,
      OU = null,
      GU = !1,
      KU = !1,
      ZU = !1;

    function zU() {
      return Aa ??= Promise.all([sb.e(189), sb.e(136), sb.e(56)]).then((() => sb(42639))).then((bb => (da = bb, Object.assign(globalThis, {
        bloxdPreviewPage: bb.pagePreviews()
      }), bb)), (bb => {
        throw Aa = null, bb
      })), Aa
    }

    function qU() {
      return qa ??= sb.e(54).then((() => sb(42658))).catch((bb => {
        throw qa = null, new ub.b(bb)
      })), qa
    }
    class dU {
      constructor() {
        this.host = null
      }
      open(bb) {
        return null !== this.host ? bb(this.host) : zU().then((cb => (this.host ??= new cb.WasmPreviewHost(cb.pagePreviews()), bb(this.host))))
      }
      openMob(bb) {
        return this.open((cb => cb.openMob(bb)))
      }
      openPet(bb) {
        return this.open((cb => cb.openPet(bb)))
      }
      openMobLineup(bb) {
        return this.open((cb => cb.openMobLineup(bb)))
      }
      openCharacter(bb, cb) {
        return this.open((sb => sb.openCharacter(bb, cb)))
      }
    }

    function AU() {
      za || (za = !0, bW.h.setHost(new dU), (0, es.l)(), Fk.h.setFollower(wI), Object.assign(globalThis, {
        bloxdPreviews: bW.h
      }))
    }

    function wU() {
      zU().then((bb => {
        bb.pagePreviews().prefetch()
      }), (() => {}))
    }

    function rU() {
      let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (Za) return;
      Za = !0, EU = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), iU = !EU, console.info(`${na} starting`), Ka || (Ka = !0, (0, Dc.G)(new tc(II, QI)), (0, Xb.m)(new yc), (0, Dc.E)(new Pc), (0, Dc.w)()), AU(), (0, us.setCrashScreen)((bb => {
        let {
          text: cb,
          reload: sb
        } = bb;
        ! function(bb, cb) {
          var sb, kb;
          if (GU) return;
          GU = !0, (0, Ns.e)(), null === (sb = sU) || void 0 === sb || sb.abort(), sU = null, xk.b.release();
          const Wb = EU ? null !== (kb = bb.cancel) && void 0 !== kb ? kb : "general:back" : null;
          Qk({
            ...bb,
            cancel: Wb
          }).then((bb => {
            bb && cb && KU ? ((0, Mc.p)("reloadOntoJs"), (0, wb.e)(Mc.w)) : bb && cb ? (0, wb.i)() : EU && (0, wb.d)("/")
          }))
        }(cb, sb)
      })), (0, zk.f)(), (0, Lc.c)();
      let cb = null;
      try {
        cb = Ia("lj7djh2hzxd", (() => {
          var bb, cb;
          return null !== (bb = null === (cb = sT) || void 0 === cb ? void 0 : cb.ws) && void 0 !== bb ? bb : null
        }), bb, "zmnluctdxq")
      } catch (Wb) {
        console.error(`${na} probes`, Wb)
      }
      const kb = function() {
        const bb = (0, Vk.m)(),
          cb = (0, Vk.j)();
        let sb = !1;
        return kb => {
          bb && !sb && (sb = !0, (0, us.reportStaleBuildReload)(bb, cb, kb))
        }
      }();
      oI(), EU || function() {
        const bb = function(bb) {
          var cb;
          const sb = new URLSearchParams(bb),
            kb = sb.get("game");
          return kb ? {
            game: kb,
            lobby: null !== (cb = sb.get("lobby")) && void 0 !== cb ? cb : null
          } : null
        }(window.location.search);
        if (bb) return (0, sc.k)(bb.game) && oI().request(), void RU(bb.game, bb.lobby);
        const cb = new URLSearchParams(window.location.search).get("ws");
        if (!cb) return;
        ja.then((bb => {
          bb && async function(bb, cb) {
            try {
              await (0, ub.l)(bb), wT = LI(new WebSocket(cb)), null !== wT && xk.b.setGame(null), oU()
            } catch (Wb) {
              console.error(`${na} ?ws=${cb} did not attach`, Wb)
            }
          }(bb, cb)
        }))
      }(), async function(bb) {
        var cb, kb, ab, Tb, Ub;
        if ("undefined" === typeof WebAssembly) return GI("noWebAssembly", "This browser has no WebAssembly"), null;
        const Hb = await (0, TW.I)();
        if ((0, us.setCrashBackend)((0, pc.l)(Hb) ? "unsupported" : null !== (cb = null === Hb || void 0 === Hb ? void 0 : Hb.backend) && void 0 !== cb ? cb : "none"), (0, pc.l)(Hb)) return GI("browser", `No WebGPU or WebGL2, and WebGL1 lacks ${Hb.missing.join(", ")}`, {
          missing: Hb.missing.join(",")
        }), null;
        if ((0, PW.q)("render")) try {
          const {
            startRenderDebug: bb
          } = await Promise.all([sb.e(74), sb.e(47)]).then((() => sb(4414)));
          bb(Hb)
        } catch (Yc) {
          console.warn("The render debug topic didn't load", Yc)
        }
        if ((0, PW.q)("renderlite")) try {
          const {
            startRenderLite: bb
          } = await Promise.all([sb.e(259), sb.e(48)]).then((() => sb(42670)));
          VU = bb(Hb)
        } catch (Yc) {
          console.warn("The renderlite debug topic didn't load", Yc)
        }
        let fb = null;
        if (null !== Hb && KI()) {
          const bb = (0, ek.e)(Hb, !0);
          "webgl" === Hb.backend && null !== bb && (0, nc.o)(bb, us.reportGpuWasmPopulation), null !== bb && (0, Xc.t)(bb), fb = (0, ek.b)(Hb, bb)
        }
        if (null !== Hb && null !== fb) return (0, us.reportGpuFallback)(fb, Hb.backend), ZI(`the wasm client's renderer plays this GPU (${fb}) on ${Hb.backend} worse than the JS client`, "gpu"), null;
        const Mb = null !== (kb = null === Hb || void 0 === Hb ? void 0 : Hb.backend) && void 0 !== kb ? kb : null;
        HU.adapter = null !== (ab = null === Hb || void 0 === Hb ? void 0 : Hb.adapter) && void 0 !== ab ? ab : null, HU.boundAtMs = null, HU.indirectHangs = null;
        const Xb = !(0, pc.N)();
        null !== Hb && "none" !== Hb.reason && console.info(`${na} drawing with ${Hb.backend}: ${Hb.reason}`);
        const nb = (0, TW.C)();
        pa(!0), (0, ub.w)((bb => {
          try {
            null !== Mb && (mU = bb.startSkyFeed, qI(), function(bb) {
              var cb, sb;
              MU = bb.rasterText, oT = bb.setTextLocalPlayer, bb.setTextLocalPlayer(null !== (cb = null === (sb = rT) || void 0 === sb ? void 0 : sb.info.playerDbId) && void 0 !== cb ? cb : null), XU = bb.drainTextRerasters, nU = bb.loadTextIcons, bb.warmText((() => YU)), bb.textChanged(), YU && setTimeout(nU, 0)
            }(bb), lU = bb.startShellAnalytics, jI())
          } finally {
            ZU || (LU = bb.followMenuPrefs({
              setSoundPrefs: CI,
              setEnvPrefs: NI,
              setUiPrefs: eI,
              setLookPrefs: VI
            }))
          }
        })), (0, ub.p)(Ra).catch((bb => {
          console.warn(`${na} the game code did not load: a join asks again`, bb)
        }));
        const mb = (0, TW.l)(Hb);
        let lb, Qb;
        mb.catch((() => {})), "loading" === (0, ac.C)() && VW();
        try {
          lb = function(bb) {
            const cb = null !== bb && void 0 !== bb ? bb : document.createElement("canvas");
            cb.id = "wasm-game-canvas", (0, XW.i)();
            const sb = (0, Bc.d)(),
              kb = (0, Bc.g)(sb);
            return cb.style.cssText = "position:fixed;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, MW.f)(cb, kb), (0, Bc.b)(cb, sb), cb.width = kb.bufferWidth, cb.height = kb.bufferHeight, HI(cb, iU), OU = cb, document.body.append(cb), cb
          }(null === Mb ? null : await (await zU()).pagePreviews().beginSession())
        } catch (Wb) {
          return await BH({
            site: Ca,
            error: Wb
          }, (() => {
            (0, us.showUnsupported)((0, nk.m)("fetch"), zW.e.fetch, `the previews did not load: ${String(Wb)}`)
          })), null
        }
        VW();
        try {
          Qb = await mb
        } catch (Wb) {
          return await BH({
            site: Ca,
            error: Wb
          }, (() => {
            (0, us.showUnsupported)((0, nk.m)("fetch"), zW.e.fetch, `the ${null!==Mb&&void 0!==Mb?Mb:"client"} build did not load: ${String(Wb)}`)
          })), null
        }
        const eb = (0, TW.g)(),
          Cb = !eb && !0 !== Ls.i.getItem(ma),
          Nb = !eb && "loading" === (0, ac.C)();
        await (0, Tc.j)(Qb, fc.f, {
          reloadFailedDownload: Cb
        }), Nb && !(0, ac.M)() && await (0, Tc.j)(Qb, fc.f, {
          reloadFailedDownload: Cb
        });
        eW = performance.now();
        const Vb = va;
        if (!(0, ac.M)()) {
          (0, ac.L)() && Ls.i.setItem(ma, !0);
          const bb = (0, ac.o)();
          if ("call" === bb) eH({
            site: bs.t,
            error: (0, ac.n)(),
            header: null
          }, Vb);
          else {
            const cb = null !== bb && void 0 !== bb ? bb : "instantiate",
              sb = () => {
                (0, us.showUnsupported)((0, nk.m)(cb), zW.e[cb], (0, ac.i)())
              };
            if ("compile" !== bb && "instantiate" !== bb || !KI())
              if ("fetch" === cb) {
                const bb = [Qb.url().href, fc.f.url().href];
                await BH({
                  site: Ca,
                  error: (0, ac.i)(),
                  urls: bb
                }, sb)
              } else sb();
            else {
              const cb = (0, ac.i)(),
                sb = (0, dc.l)((0, ac.n)());
              (0, us.reportCountedLoadFallback)((0, nk.m)(bb), zW.e[bb], cb, sb), ZI(`the wasm client did not ${bb} here (${cb})`, sb ? "oom" : null)
            }
          }
          return null
        }(0, Uc.H)(Qb.url()) && (0, us.reportUnstreamedCoreLoad)();
        const Yb = (0, ac.G)();
        let hb, Jb = Vb;
        try {
          Jb = {
            ...Vb,
            wasm: Yb.EM()
          };
          const {
            DQ: bb
          } = Qb.bindings, cb = bb.gsb();
          if (cb !== zc.u) return eH({
            site: bs.e,
            error: `core ABI ${cb}, page ABI ${zc.u}`,
            header: null
          }, Jb), null;
          const [sb, kb] = (0, zc.xe)();
          hb = new bb(sb, kb)
        } catch (Wb) {
          return eH({
            site: bs.e,
            error: Wb,
            header: null
          }, Jb), null
        }
        va = Jb, Fa = Qb.bindings;
        const gb = new bs.h(hb, ac.u, {
          onCrash: bb => {
            var cb;
            null === (cb = VU) || void 0 === cb || cb.crashed(bb), Xb && function(bb, cb, sb) {
              if ("webgpu" !== cb || (0, TW.e)()) return !1;
              const kb = function(bb) {
                if (bb.site === bs.g && (0, pc.o)(bb.error)) return "frames_refused";
                return bb.site === la && (0, pc.p)(bb.error) ? "start_failed" : null
              }(bb);
              if (null === kb || !(0, pc.I)(kb)) return !1;
              return (0, us.reportRenderReload)("webgpu", "start_failed" === kb ? 0 : 1, sb, {
                cause: kb,
                error: bb.error,
                context: HU,
                session: VH(null)
              }), kH(), !0
            }(bb, Mb, Jb) || eH(bb, Jb)
          },
          onNetEvent: sH,
          onReconnectGrace: EI,
          onCoreErrors: (bb, cb) => {
            var sb, kb;
            bb.some((bb => {
              let {
                code: cb
              } = bb;
              return cb === zc.C.RenderDeviceLost
            })) && ((0, TW.y)(), DU.deviceLost()), null === (sb = VU) || void 0 === sb || sb.coreErrors(bb), (0, us.reportCoreErrors)(bb, cb, Jb, ((bb, cb) => {
              var sb;
              return null === (sb = fU) || void 0 === sb ? void 0 : sb.Bsb(bb, cb)
            })), null === (kb = LT) || void 0 === kb || kb.coreErrors(bb)
          },
          onRenderReload: (bb, cb, sb) => {
            ! function(bb, cb, sb, kb, Wb, ab) {
              var Tb;
              if ((0, TW.e)()) return;
              const Ub = cb === zc.cd.WEBGPU,
                Ib = kb === zc.cd.PIPELINE_FAILED ? "pipeline_failed" : "lost",
                Hb = (0, pc.M)(fU);
              null === (Tb = VU) || void 0 === Tb || Tb.reload(Ub, sb, Ib, null === Hb || void 0 === Hb ? void 0 : Hb.message);
              const fb = Ub ? (0, pc.G)(Ib, Wb) : null;
              if (null !== fb) {
                const cb = void 0 === Hb ? "" : ` (${Hb.message})`;
                return void bb.crash(us.RENDER_RELOAD_SITE, new Error(`${(0,us.renderReloadMessage)("webgpu",Ib,sb)} and ${fb}${cb}`))
              }
              const Mb = Ub ? "webgpu" : "webgl1" === ab ? "webgl1" : "webgl";
              "lost" === Ib && (0, TW.y)();
              (0, us.reportRenderReload)(Mb, sb, va, {
                cause: Ib,
                error: Hb,
                context: HU,
                session: VH(bb.sunShadowsHeld())
              }), kH()
            }(gb, bb, cb, sb, Xb, Mb)
          },
          onEnvEvent: bb => {
            var cb;
            bb.kind === zc.P.SkyImages && (null === (cb = eT) || void 0 === cb || cb.onEvent(bb.payload))
          },
          onImages: bb => {
            var cb;
            null === (cb = CT) || void 0 === cb || cb.onEvent(bb)
          },
          onModelRequest: bb => {
            var cb;
            null === (cb = mT) || void 0 === cb || cb.request(bb)
          },
          onModelTaken: (bb, cb) => {
            var sb;
            null === (sb = mT) || void 0 === sb || sb.taken(bb, cb)
          },
          onTerrainTexturesWanted: () => {
            queueMicrotask((() => {
              ! function(bb, cb) {
                const sb = Sa;
                if (null === sb || bb.isStopped) return;
                sb.restore((bb => {
                  (0, us.reportTerrainTextureFailure)(bb, cb)
                })).then((cb => {
                  !1 !== cb || bb.isStopped ? !0 === cb && console.info(`${na} terrain textures handed over again after the renderer lost them`) : console.warn(`${na} the terrain textures couldn't be handed over again: the terrain draws blank`)
                }))
              }(gb, Jb)
            }))
          },
          onKeepAlive: bb => {
            const cb = null === qT ? void 0 : dT.get(qT);
            void 0 !== cb && Jk(cb, bb)
          }
        });
        if (wa = gb, null !== bb) {
          gb.setAntiCheatProbes(ka(ac.u, bb.checks)), bb.watchHeld(aa.CoreFrame, (() => gb.frame)), bb.watchHeld(aa.GlueFrame, (() => hb.frame));
          const cb = Ua(bb, ((bb, cb, sb) => {
            let kb = !1;
            return YH(gb, (() => {
              kb = gb.rings.input.writeRecord(zc.qb.AntiCheat, bb, cb, sb, 0)
            })), kb
          }));
          gb.isStopped ? cb.stop() : XT = cb
        }
        Oa = (bb, cb, sb) => gb.rings.cmd.writeCmd(bb, cb, sb), Ga = bb => gb.rings.cmd.growForCmd(bb), ET = !1, qI(), (0, ub.y)(gb, {
          core: hb,
          memory: ac.u,
          staleOr: (bb, cb, sb) => BH({
            site: bb,
            error: cb
          }, sb),
          reportReplayFault: (bb, cb) => {
            (0, us.reportReplayFault)(bb, cb, va)
          },
          audio: Ra,
          options: mc.e,
          onNetEvent: sH,
          sessionInfo: bb => {
            var cb;
            return (null === (cb = rT) || void 0 === cb ? void 0 : cb.conn) === bb ? rT.info : null
          },
          onEventOverflow: TI,
          replayShaderPack: bb => {
            var cb;
            null === (cb = LT) || void 0 === cb || cb.replay(bb)
          },
          hasPackModel: bb => {
            var cb, sb;
            return null !== (null !== (cb = null === (sb = dI()) || void 0 === sb ? void 0 : sb.modelUrl(bb)) && void 0 !== cb ? cb : null)
          },
          beforeWrite: () => (!tT && gb.rings.net.cursor > 0 && TH(gb, !1, "all"), !gb.isStopped),
          beforeOp: () => (!tT && gb.netWrittenSinceFrame > 0 && TH(gb, !1, "budget"), !gb.isStopped)
        }), (0, Lb.M)({
          lockPointer: () => {
            if (!Ks(lb)) return !1;
            try {
              Promise.resolve(lb.requestPointerLock()).catch((() => {}))
            } catch {
              return !1
            }
            return !0
          },
          unlockPointer: () => {
            (0, hs.c)()
          },
          leaveGame: () => {
            aI()
          },
          canvas: () => lb
        }), nT = (0, Lb.C)((() => {
          var bb;
          const cb = (0, ub.h)();
          null === (bb = (0, ub.s)()) || void 0 === bb || bb.followCursorAim(!0 === (null === cb || void 0 === cb ? void 0 : cb.isSessionLive) ? cb : null)
        })), KT && gb.setUiPrefs(KT);
        ZT && gb.setEnvPrefs(ZT);
        zT && gb.setLookPrefs(zT);
        const Bb = HW ? fW(HW.preventMovement) : null;
        Bb && lI(Bb);
        const tb = (0, ms.g)(),
          yb = (0, ms.c)(gb, tb);
        fT = tb.basis, (0, Vs.e)(null === yb ? null : (0, ns.h)(yb)), HT = yb;
        const Pb = (0, Ic.c)();
        let Db = 1 / 0,
          Eb = !0,
          ib = tb.shedFootprintBytes;
        const Ob = new Zk.c(Pb, (() => hb.zQ()), (bb => {
          gb.crash(bs.k, bb)
        }));
        UT = Ob, IT = Ob, null !== yb && Ob.setCeiling(Math.min((0, Zk.k)(yb), Db));
        if (Eb) {
          Ob.setShed((bb => {
            const cb = gb.shedMemory("joinReserve" !== bb);
            return null !== cb && (null === HT || cb < HT) && (HT = cb, (0, Vs.e)((0, ns.h)(cb))), cb
          }), ((bb, cb, sb) => {
            1 === cb ? (0, us.reportMemoryShed)(bb, sb, va) : console.warn(`${na} wasm memory: shed again (${bb}): shed ${cb}`, sb.wasmMemoryShed)
          }), (() => gb.addDistanceInUse()));
          const bb = (0, pc.z)(Yb);
          Ob.setFootprint(new yW(ib, {
            storedChunks: () => hb.tsb(),
            gpuBytes: () => {
              var cb;
              return null !== (cb = null === bb || void 0 === bb ? void 0 : bb.ysb()) && void 0 !== cb ? cb : 0
            },
            jsHeapBytes: tW
          }))
        }
        window.addEventListener("pagehide", (() => {
          UT === Ob && (Ob.refreshStats(), uH(Ob))
        })), window.addEventListener("pagehide", WH), window.addEventListener("pagehide", aH), !1;
        const [Gb, Kb] = (0, Qs.d)();
        uU = (0, Cs.f)((bb => gb.setChunkAddDistance(bb.horizontal, bb.vertical)), {
          horizontal: Gb,
          vertical: Kb
        }), gb.setAmbientOcclusion(!0 !== Ls.h.getItem("disableAmbientOcclusion")), gb.setPoseLod(!0 !== Ls.h.getItem(Wc.V)), (0, PW.q)("look") && (gb.setDebugLog(zc.I.Look, !0), (0, EW.j)("wasm", (() => gb.takeDebugLog(zc.I.Look))));
        (0, PW.q)("remesh") && (gb.setDebugLog(zc.I.Remesh, !0), Zb = () => gb.takeDebugLog(zc.I.Remesh), ZW = new KW((0, iW.l)(), Zb));
        var Zb;
        const zb = function(bb, cb, sb, kb) {
          const Wb = new sk,
            ab = bb => Ls.h.getItem(bb);
          Wb.sync(ab, cb), (0, Jc.$)();
          const Tb = (0, Ib.l)("customBindingsChanged", (() => {
            Wb.sync(ab, cb)
          }));
          (0, gs.l)(cb);
          const Ub = new Set,
            Hb = (0, Lb.C)((() => {
              var bb;
              Ub.size > 0 && Tk() && !0 === (null === (bb = (0, ub.h)()) || void 0 === bb ? void 0 : bb.localPlayerAlive()) && Ib.j.QQ("usedKeyboard")
            })),
            fb = os.b.heldSizer((() => (0, Bc.l)(bb))),
            Mb = rs(bb, cb, {
              prevents: bb => Wb.prevents(bb),
              keyPressed: bb => {
                Wb.moves(bb) && (Ub.add(bb), Tk() && Ib.j.QQ("usedKeyboard"))
              },
              keyReleased: bb => {
                Ub.delete(bb)
              },
              keysReleased: () => {
                Ub.clear()
              },
              resized: () => {
                Wk.k.measure(bb.getBoundingClientRect()), (0, Ss.j)()
              },
              sizeCanvas: fb,
              watchRenderScale: cb => {
                const sb = (0, Bc.o)(bb, cb),
                  kb = os.b.onRelease(cb);
                return () => {
                  sb(), kb()
                }
              },
              touchStarting: () => {
                Wk.k.measure(bb.getBoundingClientRect())
              },
              viewShown: sb,
              touchUiShown: () => rb.d.get("isTouchScreen"),
              ctrlCombosAreGames: Tk,
              inspect: (bb, cb, sb) => {
                Wb.checks(cb, sb) && kb(bb)
              },
              canLock: () => Ks(bb)
            }),
            Xb = (0, as.b)(cb);
          return () => {
            Tb(), Hb(), (0, gs.l)(null), Xb(), Mb()
          }
        }(lb, ((bb, cb, sb, kb, Wb) => {
          var ab;
          YH(gb, (() => {
            gb.rings.input.writeRecord(bb, cb, sb, kb, Wb)
          })), null === (ab = XT) || void 0 === ab || ab.onInput(bb), !yT && (0, Mk.e)(bb, Wb) && (0, Mk.b)((() => {
            wa !== gb || ZU || gb.isStopped || !XH() || TH(gb, !1, "budget", !1)
          }))
        }), (() => iU), (bb => {
          var cb;
          null === (cb = XT) || void 0 === cb || cb.onEvent(bb)
        }));
        if (gb.isStopped) return zb(), null;
        kT = zb;
        const qb = () => !gb.isStopped && !GU;
        if (gb.isStopped) return null;
        (0, ac.T)((() => {
          "call" === (0, ac.o)() && gb.crash(bs.t, (0, ac.n)())
        }));
        const db = (0, bs.R)(gb.rings.worker, (() => {
          TH(gb, !1, "budget")
        }));
        WT = function(bb, cb) {
          return hH().then((bb => {
            let {
              prefetchWorldgenWorker: cb
            } = bb;
            cb()
          }), (() => {})), new dW({
            module: (0, ac.y)(),
            decodeSettings: bb => {
              const cb = (0, ub.s)();
              if (null === cb) throw new Error("no game code to decode the world-gen seed with");
              return cb.decodeMapSettings(bb)
            },
            loadWorker: JH,
            onMapWithoutWorldgen: () => {
              gH((bb => {
                let {
                  stopWorldgenWorkerPrefetch: cb
                } = bb;
                cb()
              }))
            },
            onLoadFailed: bb => {
              (0, us.reportWorldgenLoadFailure)(bb, va)
            },
            onWorkerLost: bb => {
              (0, us.reportWorkerLost)(bs.E, bb, va)
            },
            onStartTimeout: bb => {
              (0, us.reportWorkerStartTimeout)(bs.E, bb, va)
            },
            onGaveUp: bb => {
              (0, us.reportWorldgenGaveUp)(bb, va)
            },
            onMemoryStats: bb => {
              var cb;
              null === (cb = UT) || void 0 === cb || cb.noteWorldgen(bb)
            },
            onMemoryGone: () => {
              var bb;
              null === (bb = UT) || void 0 === bb || bb.worldgenGone()
            },
            write: (sb, kb, Wb, ab, Tb) => {
              YH(bb, (() => {
                bb.rings.worker.writeWorkerRecord(sb, kb, Wb, 0, ab, Tb) || bb.crash(bs.E, `a world-gen record of kind ${kb} did not fit the worker-in ring`)
              })), cb()
            }
          })
        }(gb, db), TT = function(bb, cb) {
          return new Gk({
            module: (0, ac.y)(),
            loadWorkers: async () => {
              const [{
                createMeshWorker: bb
              }, cb] = await Promise.all([sb.e(40).then((() => sb(42713))), Promise.resolve().then((() => sb(117))).then((bb => {
                let {
                  isMobile: cb
                } = bb;
                return cb()
              }), (() => !1))]);
              return {
                create: bb,
                count: (0, Vc.c)(navigator.hardwareConcurrency, cb)
              }
            },
            write: (sb, kb, Wb, ab, Tb, Ub) => {
              (0, Ss.i)(), YH(bb, (() => {
                bb.rings.worker.writeWorkerRecord(sb, kb, Wb, ab, Tb, Ub) || bb.crash(bs.n, `a meshing record of kind ${kb} did not fit the worker-in ring`)
              })), cb()
            },
            onWorkerLost: bb => {
              (0, us.reportWorkerLost)(bs.n, bb, va)
            },
            onLightFault: (bb, cb) => {
              (0, us.reportLightFault)(bb, cb, va)
            },
            onStartTimeout: bb => {
              (0, us.reportWorkerStartTimeout)(bs.n, bb, va)
            },
            onMemoryStats: (bb, cb) => {
              var sb;
              null === (sb = UT) || void 0 === sb || sb.noteMeshWorker(bb, cb)
            },
            onMemoryGone: bb => {
              var cb;
              null === (cb = UT) || void 0 === cb || cb.meshWorkerGone(bb)
            },
            fail: (cb, sb) => {
              const kb = () => {
                bb.crash(bs.n, void 0 === sb ? cb : new Error(cb, {
                  cause: sb
                }))
              };
              void 0 !== sb ? BH({
                site: bs.n,
                error: sb
              }, kb) : kb()
            }
          })
        }(gb, db);
        const ob = (0, jk.n)(Cc.clientSideServerUrls.staticUrl, {
            onTableFailed: bb => {
              BH({
                site: us.MODEL_FEED_SITE,
                error: bb
              }, (() => {}), qb)
            },
            packUrl: bb => {
              var cb, sb;
              return null !== (cb = null === (sb = dI()) || void 0 === sb ? void 0 : sb.modelUrl(bb)) && void 0 !== cb ? cb : null
            }
          }),
          Sb = function(bb, cb, sb) {
            const kb = sb => {
              var kb, Wb;
              return null !== (kb = null === (Wb = cb()) || void 0 === Wb ? void 0 : Wb.drawnUrl(sb)) && void 0 !== kb ? kb : bb.url(sb)
            };
            return (0, Fk.o)((0, qk.p)(kb), sb)
          }(ob, (() => mT), dI),
          Rb = new qk.g(Sb, (bb => {
            console.warn(`${na} image ${bb.key.kind}:${bb.key.index}:${bb.key.word} failed`, bb.error)
          }));
        CT = Rb, NT = new Rk(gb, Sb, ((bb, cb) => {
          void 0 === cb ? console.warn(`${na} ${bb}`) : rI(bb, cb)
        }));
        const vb = new vk.i(ob, function(bb, cb) {
          let kb = !1,
            Wb = null,
            ab = null;
          const Tb = {
              onUnavailable: (sb, kb) => {
                ab ??= BH({
                  site: us.MODEL_POOL_SITE,
                  error: sb,
                  urls: kb
                }, (() => {
                  (0, us.reportModelPoolFailure)(sb, bb)
                }), cb)
              },
              onDecoderFailed: (sb, kb) => {
                const Wb = () => {
                  (0, us.reportDracoDecoderFailure)(sb, bb)
                };
                void 0 !== kb ? BH({
                  site: us.MODEL_POOL_SITE,
                  error: sb,
                  urls: kb
                }, Wb, cb) : Wb()
              },
              onWorkerLost: cb => {
                (0, us.reportWorkerLost)(us.MODEL_POOL_SITE, cb, bb)
              },
              onModuleRetry: (cb, sb) => {
                (0, us.reportModelsModuleRetry)(cb, sb, bb)
              }
            },
            Ub = sb.e(42).then((() => sb(42721))).then((bb => {
              let {
                pageModelPool: cb
              } = bb;
              if (kb) return null;
              const sb = cb(Tb);
              return Wb = sb.unlisten, lT = sb.pool, sb.pool
            }), (bb => (kb || Tb.onUnavailable(bb, void 0), null)));
          return QT = () => {
            var bb;
            kb = !0, null === (bb = Wb) || void 0 === bb || bb(), lT = null
          }, (bb, cb) => Ub.then((sb => {
            var kb;
            return null !== (kb = null === sb || void 0 === sb ? void 0 : sb.build(bb, cb)) && void 0 !== kb ? kb : (0, pk.t)(bb, "the model workers did not load")
          })).then((bb => null !== ab && (0, pk.k)(bb) ? ab.then((() => bb)) : bb))
        }(Jb, qb), (bb => {
          bb.startup ? (QH(), BH({
            site: us.MODEL_FEED_SITE,
            error: bb.error,
            urls: "" === bb.url ? void 0 : [bb.url]
          }, (() => {
            (0, us.reportModelFailure)(bb, Jb)
          }))) : (0, us.reportModelFailure)(bb, Jb)
        }), {
          onWritten: (bb, cb) => {
            Rb.glbWritten(bb, cb)
          },
          onTaken: (bb, cb) => {
            Rb.glbTaken(bb, cb)
          },
          onPackFileFailed: (bb, cb) => {
            console.warn(`${na} the texture pack's model file ${bb} failed: the shipped one loads`, cb)
          }
        });
        mT = vb;
        const Fb = new wk.c(gb);
        Sa = Fb, Fb.swap((bb => {
          const cb = () => {
            (0, us.reportTerrainTextureFailure)(bb, Jb)
          };
          if (YU) return void cb();
          const sb = () => !YU,
            kb = null === bb.url ? void 0 : [bb.url];
          BH({
            site: bs.C,
            error: bb.error,
            urls: kb
          }, cb, sb)
        })).then((bb => {
          null !== bb && (bb || gb.isStopped || console.warn(`${na} the core refused the terrain textures: terrain draws untextured`), JT(gb))
        }));
        const xb = new Kc(gb, ((bb, cb) => {
          console.warn(`${na} ${bb}`, ...void 0 === cb ? [] : [cb])
        }));
        xb.feed(), null !== Mb && function(bb, cb, kb, Wb, ab, Tb) {
          let Ub = null,
            Ib = null,
            Hb = !1;
          const fb = {
            textures: null,
            stop: () => {
              var bb, cb;
              Hb = !0, null === (bb = Ib) || void 0 === bb || bb(), null === (cb = Ub) || void 0 === cb || cb(), xk.b.setSettled(null), null !== Fa && SU.clear(Fa)
            }
          };
          oa = fb, Ib = oI().follow((Ib => {
            null !== Ib && Promise.all([sb.e(193), sb.e(45)]).then((() => sb(42676))).then((sb => {
              let {
                PackTextures: Mb
              } = sb;
              if (Hb || bb.isStopped) return;
              const Xb = new Mb({
                feed: Ib,
                terrain: cb,
                backend: kb,
                stopped: () => bb.isStopped,
                landed: () => {
                  JT(bb)
                },
                packSwapped: () => {
                  (0, Fk.k)(Wb), Tb.feed((() => async function(bb) {
                    const cb = null === bb ? null : await bb.averageColours;
                    return null === cb ? Zc() : Gc(cb)
                  }(Xb.assets))), AI(Xb.iconOverrides()), ab.refresh().then((bb => {
                    null !== bb && console.info(`${na} texture pack models: ${bb.resent} of ${bb.delivered} files written again, ${bb.refetched} refetched`)
                  }))
                },
                settled: (bb, cb, sb) => {
                  var kb;
                  (xk.b.setSettled({
                    state: bb,
                    files: cb
                  }), null === bb.gameSource && (0, ls.b)(bb.pack, sb), sb) || function(bb) {
                    const cb = Fa;
                    null !== cb && SU.apply(cb, bb).then((cb => {
                      cb && bb && console.info(`${na} the texture pack's animations are in (${Object.keys(bb).length} files)`)
                    }))
                  }(null === (kb = bb.pack) || void 0 === kb ? void 0 : kb.animations)
                },
                settling: () => {
                  xk.b.setSettled(null)
                },
                warn: rI,
                maxTextureSize: () => Promise.resolve((0, pc.R)(document.createElement("canvas")))
              });
              fb.textures = Xb, Ub = Xb.start()
            }), (bb => {
              console.warn(`${na} the texture pack's terrain didn't load: the built atlas stays`, bb)
            }))
          }))
        }(gb, Fb, Mb, Rb, vb, xb);
        const jb = () => {
            gb.setTextureLayers("")
          },
          pb = bb => {
            (ec ??= sb.e(50).then((() => sb(42727))).then((bb => {
              let {
                TEXTURE_NAMES: cb
              } = bb;
              return cb
            }), (bb => {
              throw ec = null, bb
            })), ec).then((bb => {
              gb.setTextureLayers(bb) || gb.isStopped || (console.warn(`${na} the core refused the texture names: textured Boxes draw textureNotFound`), jb())
            }), (cb => {
              if (gb.isStopped) return;
              const [sb, ...kb] = bb;
              void 0 === sb ? BH({
                site: us.TEXTURE_NAMES_SITE,
                error: cb
              }, (() => {
                console.warn(`${na} the texture names didn't load, so textured Boxes draw textureNotFound`, cb), jb()
              }), qb) : setTimeout((() => {
                pb(kb)
              }), sb)
            }))
          };
        if (pb(Ea), null !== Mb && !await async function(bb, cb, sb, kb, ab, Tb) {
            var Ub;
            const Ib = (0, pc.z)(sb);
            if (null === Ib) return bb.crash(la, new Error(`this ${kb} build has no openRenderer`)), !1;
            let Hb;
            fU = Ib;
            try {
              var fb, Mb, Xb, nb;
              const Wb = null !== (fb = null === (Mb = da) || void 0 === Mb ? void 0 : Mb.pagePreviews()) && void 0 !== fb ? fb : null,
                Ub = null !== (Xb = null === (nb = da) || void 0 === nb ? void 0 : nb.previewModule(sb)) && void 0 !== Xb ? Xb : null;
              if (null === Wb || null === Ub) {
                null === Wb || void 0 === Wb || Wb.endSession(!1), Hb = (0, Bc.d)().sampleCount, await (0, pc.e)(cb, Ib, Tb, zI, Hb, await ab);
                const bb = (0, pc.h)(sb);
                null === bb && console.warn(`${na} this ${kb} build has no image registry: sky and model images won't show`), (0, Ak.h)(bb)
              } else {
                (0, TW.e)() && await (0, wb.l)();
                const sb = (0, TW.E)();
                if (null !== sb) {
                  const cb = (0, pc.M)(Ib);
                  return bb.crash(us.RENDER_RELOAD_SITE, new Error(`${sb}${void 0===cb?"":` (${cb.message})`}`)), !1
                }
                Hb = await Wb.bindSession(Ub, cb, (async bb => (0, pc.q)(Ib, la, Tb, bb, zI, await ab)))
              }
            } catch (Wb) {
              return bb.crash(la, Wb), !1
            }(function(bb, cb) {
              const sb = bb,
                {
                  requestCapture: kb,
                  takeCapture: Wb
                } = sb;
              if ("function" !== typeof kb || "function" !== typeof Wb) return;
              const ab = {
                request() {
                  kb.call(sb, cb)
                },
                take() {
                  var bb;
                  return null !== (bb = Wb.call(sb)) && void 0 !== bb ? bb : null
                }
              };
              window[nW] = ab
            })(cb, Hb), eU = Hb, IU = !0;
            const mb = performance.now();
            return HU.boundAtMs = null !== (Ub = (0, TW.G)()) && void 0 !== Ub ? Ub : mb, HU.indirectHangs = (0, TW.A)(), console.info(`${na} ${kb} renderer bound at ${Math.round(mb)} ms`), !bb.isStopped
          }(gb, hb, Yb, Mb, nb, lb)) return null;
        if (null !== Mb) {
          var bc, cc, sc;
          (0, Hc.B)(Mb);
          const bb = () => !gb.isStopped && MH();
          sb.e(185).then((() => sb(8819))).then((cb => {
            let {
              devTools: sb
            } = cb;
            gb.isStopped || sb.setHost(function(bb) {
              return {
                tools: aW,
                async downloadScene(cb, sb) {
                  let {
                    width: kb,
                    height: Wb,
                    colouring: ab
                  } = sb;
                  "screenshot" === cb && null === ab ? await (0, sW.e)(bb, kb, Wb) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
                },
                setAmbientLightIntensity: () => (console.warn("The Rust client's renderer has no ambient light setting"), Promise.resolve())
              }
            }(function(bb, cb) {
              return {
                canvas: bb,
                maxTextureSize: kW,
                drawing: cb,
                resize: (bb, cb) => {
                  (0, gs.r)(zc.qb.Resize, 0, bb, cb, (0, gs.j)(1))
                },
                restoreSize: () => {
                  const cb = (0, Bc.l)(bb);
                  null !== cb && (0, gs.r)(zc.qb.Resize, 0, cb.cssWidth, cb.cssHeight, (0, gs.j)(cb.renderScale))
                },
                onFrameDrawn: bb => (WW.add(bb), () => {
                  WW.delete(bb)
                })
              }
            }(lb, bb)))
          }), (bb => {
            console.warn(`${na} the developer tools didn't load: no captures this session`, bb)
          }));
          const cb = "webgpu" === Mb && null !== (bc = null === Hb || void 0 === Hb || null === (cc = Hb.adapter) || void 0 === cc ? void 0 : cc.vendor) && void 0 !== bc ? bc : null;
          CU = {
            backend: Mb,
            canvas: lb,
            fallbackReason: null !== (sc = null === Hb || void 0 === Hb ? void 0 : Hb.reason) && void 0 !== sc ? sc : null,
            adapterVendor: cb
          }, jI();
          try {
            (0, Ss.s)(Mb, lb, cb)
          } catch (Wb) {
            (0, Ss.t)(), console.error(`${na} the quality steps didn't start`, Wb)
          }
        }
        const {
          storagePullBreaks: kc,
          splitPassBreaks: Mc
        } = await nb;
        Mc && console.warn(`${na} split_pass_breaks on: Windows Adreno 7xx (N-103) or ?sceneDepth=off`);
        const lc = kc ? Ab.e : (0, Ab.i)(Hb, (0, hc.g)());
        if ((0, PW.q)("webgpuloss")) {
          var Qc, Nc;
          const bb = {
            backend: Mb,
            reason: null !== (Qc = null === Hb || void 0 === Hb ? void 0 : Hb.reason) && void 0 !== Qc ? Qc : null,
            source: null !== (Nc = null === Hb || void 0 === Hb ? void 0 : Hb.source) && void 0 !== Nc ? Nc : null,
            storagePullBreaks: kc,
            noWebGpu: lc.messageKey
          };
          (0, DW.b)((cb => {
            cb.noteWasmPick(bb)
          }))
        }
        const Lc = "webgpu" === Mb && !kc;
        if (LT = (0, Ab.m)(Lc ? gb : null, Lc && null !== (Tb = null === (Ub = da) || void 0 === Ub ? void 0 : Ub.pagePreviews().Qm) && void 0 !== Tb ? Tb : null, lc, rI), ZU) return null;
        if (Ob.reserveAtJoin((0, Zk.i)(null !== yb && void 0 !== yb ? yb : ns.d)), gb.isStopped) return null;
        const uc = bb => {
          if (null !== NU) try {
            NU.animationFrame(bb)
          } catch (Wb) {
            cH(Wb)
          }
          if (function(bb, cb) {
              return cb && !ZU && !yT && XH() && MH() && bb.framePaces(performance.now())
            }(gb, iU)) return gb.writePendingInput(), (0, Lb.g)(bb, UH), pI(!1, bb), void requestAnimationFrame(uc);
          TH(gb, iU, "budget") && ((0, gc.h)(gb.lastFrameKind) && MH() && (0, Lb.g)(bb, UH), pI(iU && PU, bb), DU.frame(gb.lastFrameKind, iU && MH(), bb), CH(gb), Ob.afterFrame(), requestAnimationFrame(uc))
        };
        requestAnimationFrame(uc);
        return function(bb) {
          if (bb.has("inputLog") && (0, kk.i)((bb => {
              let {
                action: cb,
                down: sb,
                press: kb
              } = bb;
              console.info(`${ak} input ${cb} ${sb?"down":"up"} press ${kb} at ${performance.now().toFixed(1)}`)
            })), bb.has("inputDump")) {
            const bb = [];
            Uk = bb, Object.assign(window, {
              bloxdInputDump: () => bb.join("\n")
            })
          }
        }(new URLSearchParams(window.location.search)), MT = function(bb, cb) {
          let sb = null;
          const kb = () => {
              null !== sb && (clearInterval(sb), sb = null)
            },
            Wb = () => {
              document.hidden ? sb ??= setInterval((() => {
                TH(bb, !1, "budget") ? (CH(bb), cb.afterFrame()) : kb()
              }), Da) : kb()
            };
          return document.addEventListener("visibilitychange", Wb), Wb(), () => {
            kb(), document.removeEventListener("visibilitychange", Wb)
          }
        }(gb, Ob), gb
      }(cb).then((bb => {
        var cb;
        (kb(va), pa(null !== bb), null !== bb && (CW = performance.now()), xa(bb), null === bb) ? null === (cb = da) || void 0 === cb || cb.pagePreviews().endSession(null === (0, ac.o)()): hT("booted")
      }), (bb => {
        kb(va), pa(!1), xa(null), eH({
          site: Qa,
          error: bb,
          header: null
        }, va)
      }))
    }

    function oU() {
      const bb = Fa;
      null !== bb && zU().then((cb => {
        let {
          pageBuiltInAnimationPack: sb
        } = cb;
        sb().provide(bb)
      }), (bb => {
        console.warn(`${na} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, bb)
      }))
    }
    const SU = new class {
      constructor(bb) {
        this.deps = bb, this.latest = 0, this.qU = null
      }
      apply(bb, cb) {
        return this.load(bb, cb, 0)
      }
      async load(bb, cb, sb) {
        var kb;
        const Wb = ++this.latest,
          ab = this.deps.compiler;
        if (void 0 === cb || null === cb || "object" !== typeof cb || 0 === Object.keys(cb).length || null === ab) return this.drop(bb), !1;
        if ((null === (kb = this.qU) || void 0 === kb ? void 0 : kb.module) === bb && (0, Rc.qe)(this.qU.files, cb)) return !1;
        try {
          const [sb, kb] = await Promise.all([ab(), this.deps.builtIns()]);
          if (Wb !== this.latest) return !1;
          const Tb = await sb(cb, jc, {
            builtIns: kb
          });
          if (Wb !== this.latest) return !1;
          const Ub = this.call(bb, Tb);
          if (void 0 === Ub) throw new xc("the compiled animations didn't read against the built-in pack");
          return this.qU = {
              module: bb,
              files: cb
            },
            function(bb) {
              for (let cb = 0; cb + 2 < bb.length; cb += 3) {
                ("error" === bb[cb] ? console.error : console.warn)(`Animation for the texture pack: ${bb[cb+1]}: ${bb[cb+2]}`)
              }
            }(Ub), !0
        } catch (Ub) {
          var Tb;
          if (Wb !== this.latest) return !1;
          this.drop(bb), 0 === sb && this.deps.warn("the texture pack's animations didn't load: lifeforms play the built-in ones", Ub);
          const kb = (null !== (Tb = this.deps.retryAfterMs) && void 0 !== Tb ? Tb : Fc)[sb];
          return void 0 === kb || Ub instanceof xc || (0, vc.j)(bb) || setTimeout((() => {
            Wb === this.latest && this.load(bb, cb, sb + 1)
          }), kb), !1
        }
      }
      call(bb, cb) {
        try {
          return bb.Jsb(cb)
        } catch (sb) {
          throw (0, vc.k)(bb, sb), sb
        }
      }
      clear(bb) {
        this.latest++, this.drop(bb)
      }
      drop(bb) {
        const cb = this.qU;
        if (this.qU = null, (null === cb || void 0 === cb ? void 0 : cb.module) === bb && !(0, vc.j)(bb)) try {
          this.call(bb, null)
        } catch {}
      }
    }({
      compiler: wc.d,
      builtIns: async () => {
        const {
          pageBuiltInAnimationPack: bb
        } = await zU();
        return bb().whenSet()
      },
      warn: rI
    });
    async function RU(bb, cb) {
      let kb = !1;
      await vU({
        matchmake: async () => {
          const {
            guestJoinTarget: Wb,
            guestJoinWithPack: ab
          } = await sb.e(342).then((() => sb(42664)));
          return kb ? Wb(bb, cb, RI()) : (kb = !0, ab(bb, cb, (cb => vI(bb, cb)), RI))
        },
        onFailure: bb => {
          (0, us.showJoinFailure)(bb, va)
        },
        rejoin: fI,
        invalidateTrafficCode: MI
      })
    }
    async function vU(bb) {
      let {
        matchmake: cb,
        onFailure: sb,
        rejoin: Wb,
        invalidateTrafficCode: ab,
        pageReady: Tb,
        signal: Ub
      } = bb;
      const Ib = () => !0 === (null === Ub || void 0 === Ub ? void 0 : Ub.aborted);
      let Hb;
      const fb = xk.b.rejoinHold(),
        Mb = (0, Ns.I)("wasm", LH);
      let Xb = !1,
        nb = performance.now();
      try {
        if (!await bT) return {
          kind: "stopped"
        };
        if (Ib()) return {
          kind: "Gs"
        };
        qU().catch((() => {}));
        let bb = await cb();
        nb = performance.now();
        const sb = () => performance.now() - bb.matchedAt <= bb.freshMs,
          kb = xU(bb.target).catch((() => {}));
        sb() && !Ib() && (Hb = new Dk(bb.target, {
          signal: Ub
        }));
        const ab = performance.now();
        if (null === await ja) return {
          kind: "stopped"
        };
        var mb;
        if (function(bb) {
            var cb, sb;
            if (mW.e.markGameEngineConstructed(), NW) return;
            NW = !0;
            const kb = Math.max(bb, null !== (cb = QW) && void 0 !== cb ? cb : bb);
            (0, lW.h)("ready", Math.max(0, (null !== (sb = eW) && void 0 !== sb ? sb : kb) - kb) / 1e3)
          }(ab), Ib() || (null !== eW && null !== CW ? ((0, Dc.i)("wasm_loaded", eW), (0, Dc.i)("wasm_core_ready", CW)) : console.warn("[bloxd-wasm-client] a join found the core before boot marked its steps")), await kb, !sb() && !Ib()) null === (mb = Hb) || void 0 === mb || mb.rematched(), bb = await cb(), nb = performance.now();
        if (Ib()) return {
          kind: "Gs"
        };
        const fb = await async function(bb) {
          var cb, sb, kb;
          let {
            signal: Wb,
            rejoin: ab = null,
            early: Tb,
            pageReady: Ub
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null !== Wb && void 0 !== Wb && Wb.aborted) throw new DOMException("the join was left", "AbortError");
          const Ib = (Hb = jT, fb = performance.now(), null !== Hb && fb - Hb < Ck);
          var Hb, fb;
          jT = null;
          const Mb = new AbortController;
          bI({
            controller: Mb,
            game: null !== (cb = null === (sb = bb.session) || void 0 === sb ? void 0 : sb.gameNameWithVariation) && void 0 !== cb ? cb : null
          }), pT = null, null === (kb = sU) || void 0 === kb || kb.abort(), sU = null, WU = !1, aU = null, TU.clear();
          const Xb = () => {
            (0, Nc.h)(Mb, (0, Nc.f)(Wb))
          };
          null === Wb || void 0 === Wb || Wb.addEventListener("abort", Xb, {
            once: !0
          });
          try {
            var nb, mb, lb;
            const cb = await ja;
            if (null === cb || cb.isStopped || ZU) throw new Error("no core is running to join a game with");
            if (bb.session && null !== LT) {
              const cb = await jU(LT.join(bb.session.gameNameWithVariation), Mb.signal);
              if ((0, PW.q)("webgpuloss")) {
                const sb = bb.session.gameNameWithVariation,
                  kb = LT.couldntRunInJoinedGame();
                (0, DW.b)((bb => bb.noteWasmJoin(sb, cb, kb)))
              }
              if (null !== cb) throw new Ab.f(cb)
            }
            const [, , , {
              joinRoom: sb
            }] = await jU(Promise.all([(0, ub.l)(cb), xU(bb), null === Ub || void 0 === Ub ? void 0 : Ub(), qU()]), Mb.signal), kb = bb.session, Wb = kb ? {
              ...mI,
              attachSocket: cb => {
                const sb = LI(cb, bb.endpoint);
                var Wb;
                null !== sb && (rT = {
                  conn: sb,
                  info: kb
                }, null === (Wb = oT) || void 0 === Wb || Wb(kb.playerDbId));
                return sb
              }
            } : mI, Hb = await sb(Wb, bb, {
              signal: Mb.signal,
              early: Tb
            }).catch((bb => {
              throw function(bb) {
                if (!(bb instanceof Eb.d)) return bb;
                if ("roomError" === bb.stage && null !== aU) return FU(new Eb.d(bb.message, bb.stage, bb.code, aU), bb);
                const cb = "closed" === bb.stage && null !== bU ? TU.get(bU.conn) : void 0;
                return void 0 === cb ? bb : FU(new Eb.d(bb.message, bb.stage, cb.code), bb)
              }(bb)
            }));
            if (AT !== Mb) throw Hb.leave(), new DOMException("the join was left", "AbortError");
            sI(Hb), null === (nb = TT) || void 0 === nb || nb.newGame();
            const fb = function(bb) {
              var cb, sb;
              const {
                session: kb
              } = bb, Wb = void 0 === kb ? bb.joinOptions.lobbyName : kb.lobbyName;
              return {
                endpoint: bb.endpoint,
                game: null !== (cb = null === kb || void 0 === kb ? void 0 : kb.gameNameWithVariation) && void 0 !== cb ? cb : bb.roomName,
                lobby: String(null !== Wb && void 0 !== Wb ? Wb : null),
                postCookies: null !== (sb = bb.postCookies) && void 0 !== sb ? sb : null
              }
            }(bb);
            dT.set(Hb, fb), Bk(fb);
            const Xb = performance.now(),
              Qb = {
                conn: Hb.conn,
                rejoin: ab,
                game: null !== (mb = null === (lb = bb.session) || void 0 === lb ? void 0 : lb.gameNameWithVariation) && void 0 !== mb ? mb : "",
                joinedAt: Xb,
                rejoinedAt: Ib ? Xb : null,
                overflow: null
              };
            ST = Qb,
              function(bb, cb) {
                yI();
                const sb = {
                  endpoint: cb,
                  roomId: bb.seat.room.roomId,
                  heldConn: 0,
                  dropCode: 0,
                  pendingHold: null,
                  resume: new fs({
                    reconnect: (bb, cb, kb) => async function(bb, cb, sb, kb) {
                      const {
                        roomId: Wb,
                        roomToken: ab
                      } = DI(bb, cb), Tb = wa;
                      if (null === Tb || Tb.isStopped || ZU) throw new Error("no core is running to resume the game on");
                      const {
                        resumeRoom: Ub
                      } = await jU(qU(), sb), Ib = {
                        ...mI,
                        attachSocket: cb => RT !== bb || 0 === bb.heldConn ? (cb.close(), null) : LI(cb, bb.endpoint, !0)
                      };
                      return Ub(Ib, bb.endpoint, Wb, ab, {
                        signal: sb,
                        onAttached: kb
                      })
                    }(sb, bb, cb, kb),
                    releaseSeat: bb => {
                      !async function(bb, cb) {
                        const {
                          roomId: sb,
                          roomToken: kb
                        } = DI(bb, cb);
                        try {
                          const {
                            leaveHeldSeat: cb
                          } = await qU();
                          await cb(bb.endpoint, sb, kb)
                        } catch (Wb) {
                          console.warn(`${na} the held seat of a game left while it reconnected couldn't be released`, Wb)
                        }
                      }(sb, bb)
                    },
                    isLive: () => RT === sb && null !== ST && !ZU,
                    fL: bb => {
                      xT = bb, tI()
                    },
                    onReconnected: bb => {
                      ! function(bb) {
                        const cb = qT;
                        if (null !== cb && cb !== bb) {
                          const sb = dT.get(cb);
                          void 0 !== sb && dT.set(bb, sb), yU === cb && (yU = bb), cb.detach()
                        }
                        sI(bb)
                      }(bb)
                    },
                    onGaveUp: (bb, cb) => {
                      ! function(bb, cb, sb) {
                        var kb, Wb;
                        console.warn(`${na} gave up reconnecting (${sb.reason}, ${sb.attempts} attempts)`, sb.lastError), (0, us.reportReconnectGaveUp)(sb, va);
                        const ab = null !== (kb = null === (Wb = ST) || void 0 === Wb ? void 0 : Wb.rejoin) && void 0 !== kb ? kb : null;
                        PI(bb, "gaveUp"), WI();
                        const Tb = {
                          code: bb.dropCode,
                          name: null,
                          reason: Ba,
                          canReconnect: !cb,
                          automaticallyReconnect: !1,
                          requiresRefresh: !1
                        };
                        nI(Tb, cb ? null : ab, !1, {
                          reasonKey: ta,
                          canPlayAgain: cb
                        })
                      }(sb, bb, cb)
                    }
                  })
                };
                RT = sb, null !== vT && vT.conn === bb.conn && sb.resume.onInitialInfo(vT)
              }(Hb, bb.endpoint), performance.mark(Na), (0, Dc.i)("wasm_joined", Xb), setTimeout((() => {
                qT === Hb && (0, Dc.c)()
              }), 0), oU(), console.info(`${na} joined ${bb.roomName} as ${Hb.seat.sessionId} at ${Math.round(performance.now())} ms`);
            const eb = pT;
            pT = null, null !== eb && UI(Qb, eb.mask, eb.frames);
            const Cb = TU.get(Hb.conn);
            return TU.clear(), void 0 !== Cb && (sI(null), XI(Hb.conn, Cb.code, Cb.reason)), Hb
          } finally {
            var Qb;
            null === Wb || void 0 === Wb || Wb.removeEventListener("abort", Xb), AT === Mb && cI(qT, null), (null === (Qb = bU) || void 0 === Qb ? void 0 : Qb.join) === Mb && (bU = null)
          }
        }(bb.target, {
          signal: Ub,
          rejoin: Wb(bb.target),
          early: Hb,
          pageReady: Tb
        });
        return Xb = !0, {
          kind: "joined",
          game: fb
        }
      } catch (Qb) {
        if (Qb instanceof DOMException && "AbortError" === Qb.name || Ib()) return {
          kind: "Gs"
        };
        if (ZU) return {
          kind: "stopped"
        };
        if (WU && (WU = !1, await ab().catch((bb => {
            console.warn(`${na} the cached traffic code could not be dropped`, bb)
          }))), null === await ja) return {
          kind: "stopped"
        };
        if (Qb instanceof Ab.f) return sb(Qb, performance.now() - nb), {
          kind: "failed",
          error: Qb,
          reloading: !1
        };
        if (Qb instanceof Eb.d && Qb.code === kb.d.wasmClientNotAllowed.code && EU) return ZI("this server refused the wasm client to this account", "refused"), {
          kind: "failed",
          error: Qb,
          reloading: !0
        };
        const bb = Qb instanceof Eb.d && Qb.code === kb.d.outdatedVersion.code,
          cb = () => null === qT,
          Wb = await BH({
            site: us.JOIN_SITE,
            error: Qb,
            outdated: bb
          }, (() => {
            sb(Qb, performance.now() - nb)
          }), cb);
        return {
          kind: "failed",
          error: Qb,
          reloading: Wb
        }
      } finally {
        var lb;
        Xb || Mb.end(), xk.b.releaseHold(fb);
        const bb = null === (lb = Hb) || void 0 === lb ? void 0 : lb.release();
        bb && (0, us.reportUnusedSeat)(bb, va)
      }
    }

    function FU(bb, cb) {
      return bb.stack = cb.stack, bb
    }

    function xU(bb) {
      return bb.session ? (0, ub.q)(Ra, bb.session.gameNameWithVariation) : Promise.resolve()
    }

    function jU(bb, cb) {
      return (0, Nc.j)(cb), new Promise(((sb, kb) => {
        const Wb = () => {
          kb((0, Nc.f)(cb))
        };
        cb.addEventListener("abort", Wb, {
          once: !0
        }), bb.then((bb => {
          cb.removeEventListener("abort", Wb), sb(bb)
        }), (bb => {
          cb.removeEventListener("abort", Wb), kb(bb)
        }))
      }))
    }

    function pU() {
      bI(null)
    }

    function bI(bb) {
      var cb, sb, kb;
      (function() {
        const bb = RT;
        null !== bb && PI(bb, "left")
      }(), null === sT || sT.left) || (sT.left = !0, null === (kb = (0, ub.h)()) || void 0 === kb || kb.socketLeft(), (0, Xb.o)({
        websocketUrl: null
      }));
      AT && (0, Nc.h)(AT, new DOMException("the join was left", "AbortError")), WI(null !== bb), null === (cb = LT) || void 0 === cb || cb.leave();
      const Wb = qT;
      null !== bb && xk.b.setGame(bb.game), cI(null, null !== (sb = null === bb || void 0 === bb ? void 0 : bb.controller) && void 0 !== sb ? sb : null), null === Wb || void 0 === Wb || Wb.leave(), kI(0), (0, lc.h)()
    }

    function cI(bb, cb) {
      qT = bb, AT = cb, null === qT && null === AT && xk.b.setGame(void 0)
    }

    function sI(bb) {
      cI(bb, AT)
    }

    function kI(bb) {
      const cb = wa;
      return null !== Oa && !ZU && null !== cb && !cb.isStopped && (!!Oa(Eb.g, 0, (0, Eb.x)(bb)) && (ET = !0, 0 === bb || yT || TH(cb, !1, "all"), !0))
    }

    function WI() {
      var bb, cb;
      arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (0, Ns.e)();
      const sb = null !== (bb = null === (cb = ST) || void 0 === cb ? void 0 : cb.overflow) && void 0 !== bb ? bb : null;
      ST = null, null !== sb && (0, us.reportEventOverflow)(sb, va)
    }

    function aI() {
      null !== qT || null !== AT ? pU() : uI()
    }

    function TI(bb, cb) {
      console.warn(`${na} the event buffer refused records in ${cb} frames (categories ${bb})`), ZU || (null !== ST ? UI(ST, bb, cb) : null !== AT && function(bb, cb, sb) {
        var kb;
        const Wb = function(bb, cb) {
          return null === bb ? "drop" : bb.activated ? "keep" : 0 !== (cb & qc.l.NetSession) ? "fail" : "drop"
        }((null === (kb = bU) || void 0 === kb ? void 0 : kb.join) === bb ? bU : null, cb);
        "keep" === Wb ? pT = {
          mask: cb,
          frames: sb
        } : "fail" === Wb && (0, Nc.h)(bb, new Error("the join's net session was lost to an event overflow"))
      }(AT, bb, cb))
    }

    function UI(bb, cb, sb) {
      const kb = bb.overflow ??= {
        frames: 0,
        acks: 0,
        mask: 0,
        outcome: null
      };
      kb.frames += sb, kb.acks++, kb.mask |= cb;
      const Wb = function(bb, cb, sb) {
        if (0 === (bb & qc.l.NetSession)) return "none";
        const kb = null !== cb.rejoinedAt && sb - cb.rejoinedAt < Nk;
        return null === cb.rejoin || kb ? "fail" : "rejoin"
      }(cb, bb, performance.now());
      "none" !== Wb && queueMicrotask((() => {
        if (ST !== bb) return;
        const cb = "rejoin" === Wb && performance.now() - cU >= Db.f;
        kb.outcome = cb ? "rejoined" : "failed", nI(function(bb, cb) {
          return {
            code: 0,
            name: "eventOverflow",
            reason: "Your game fell behind the server.",
            canReconnect: bb,
            automaticallyReconnect: cb,
            requiresRefresh: !1
          }
        }(null !== bb.rejoin, cb), bb.rejoin, cb), pU(), cb && (jT = performance.now())
      }))
    }

    function II(bb) {
      iU = bb, OU && HI(OU, bb)
    }

    function HI(bb, cb) {
      bb.style.visibility = cb ? "visible" : "hidden"
    }

    function fI(bb) {
      var cb;
      const sb = bb.roomName,
        kb = null !== (cb = bb.joinOptions.lobbyName) && void 0 !== cb ? cb : null;
      return () => {
        RU(sb, kb)
      }
    }

    function MI() {
      return sb.e(342).then((() => sb(42664))).then((bb => {
        let {
          invalidateGuestTrafficCode: cb
        } = bb;
        return cb()
      })).catch((bb => {
        console.warn(`${na} the cached traffic code could not be dropped`, bb)
      }))
    }

    function XI(bb, cb, sb) {
      var Wb, ab;
      let Tb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (ZU) return;
      if ((null === (Wb = ST) || void 0 === Wb ? void 0 : Wb.conn) !== bb) return void(null !== AT && TU.set(bb, {
        code: cb,
        reason: sb
      }));
      const {
        rejoin: Ub,
        game: Ib,
        joinedAt: Hb
      } = ST;
      WI(), yI();
      const fb = (0, Db.m)(cb, (0, Lk.g)(bb));
      if (console.info(`${na} the game's connection closed with code ${cb} (${null!==(ab=fb.name)&&void 0!==ab?ab:"unrecognised"})`), cb === kb.d.gameOrPluginKick.code || Tb || (0, us.reportDisconnect)(fb, va, {
          closeReason: sb,
          sinceJoinedMs: performance.now() - Hb,
          game: Ib
        }), fb.requiresRefresh) {
        const bb = "outdatedVersion" === fb.name,
          sb = new Error(`the game's connection closed with code ${cb}`),
          kb = () => null === ST && null === AT;
        return void BH({
          site: us.JOIN_SITE,
          error: sb,
          outdated: bb
        }, (() => {
          kb() && nI(fb, null, !1)
        }), kb)
      }
      const Mb = fb.canReconnect ? Ub : null,
        Xb = null !== Mb && fb.automaticallyReconnect && performance.now() - cU >= Db.f;
      nI(fb, Mb, Xb)
    }

    function nI(bb, cb, sb) {
      var kb;
      let Wb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        reasonKey: null,
        canPlayAgain: !1
      };
      if (GU) return;
      xk.b.unwantedLeave(sb && null !== cb && 0 === kU.size), null === (kb = sU) || void 0 === kb || kb.abort();
      const ab = new AbortController;
      sU = ab;
      const Tb = null === cb ? null : () => {
        ab.signal.aborted || (ab.abort(), cb())
      };
      if (sb && null !== Tb) {
        cU = performance.now();
        const bb = setTimeout(Tb, Db.c);
        ab.signal.addEventListener("abort", (() => {
          clearTimeout(bb)
        }))
      }
      const Ub = {
        code: bb.code,
        name: bb.name,
        reason: bb.reason,
        reasonKey: Wb.reasonKey,
        reconnect: Tb,
        reconnecting: sb,
        requiresRefresh: bb.requiresRefresh,
        canPlayAgain: Wb.canPlayAgain
      };
      if (kU.size > 0)
        for (const Hb of [...kU]) try {
          Hb(Ub)
        } catch (Ib) {
          console.error(`${na} an unwanted-leave listener threw`, Ib)
        } else Qk((0, nk.h)(bb, null !== Tb, sb), ab.signal).then((cb => {
          cb && (null !== Tb ? Tb() : bb.requiresRefresh && (0, wb.i)())
        }))
    }
    const mI = {
      attachSocket: bb => LI(bb),
      onConnection: bb => (UU.add(bb), () => {
        UU.delete(bb)
      }),
      sendRaw: (bb, cb) => {
        const sb = sT;
        return null !== sb && sb.conn === bb && lH(sb, cb)
      },
      leaveRoom: kI,
      closeSocket: bb => {
        var cb;
        (null === (cb = sT) || void 0 === cb ? void 0 : cb.conn) === bb && uI()
      },
      flushNet: YI
    };

    function lI(bb) {
      var cb;
      let {
        aux: sb,
        payload: kb
      } = bb;
      null === (cb = wa) || void 0 === cb || cb.queueOptions(sb, kb)
    }

    function QI(bb, cb) {
      lI(function(bb, cb) {
        return HW = bb ? {
          preventMovement: cb
        } : null, bb ? fW(cb) : {
          aux: zc.cc.AdEnd,
          payload: IW
        }
      }(bb, cb))
    }

    function eI(bb) {
      var cb;
      KT = bb, null === (cb = wa) || void 0 === cb || cb.setUiPrefs(bb)
    }

    function CI(bb, cb) {
      Ra.setMaster(bb, cb)
    }

    function NI(bb) {
      var cb;
      ZT = bb, null === (cb = wa) || void 0 === cb || cb.setEnvPrefs(bb)
    }

    function VI(bb) {
      var cb;
      zT = bb, null === (cb = wa) || void 0 === cb || cb.setLookPrefs(bb)
    }

    function LI(bb) {
      var cb;
      let sb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new URL(bb.url).origin,
        kb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (bb.readyState === WebSocket.CLOSING || bb.readyState === WebSocket.CLOSED) return console.warn(`${na} a closing or closed socket can't be attached`), null;
      const Wb = wa;
      if (!Wb || Wb.isStopped) return console.warn(`${na} no core is running to attach a socket to`), bb.close(), null;
      if (null === (0, ub.h)()) return console.warn(`${na} the game has not started to attach a socket to`), bb.close(), null;
      if (gT > zc.t) return console.warn(`${na} this core has attached all the sockets it can; reload to play on`), bb.close(), null;
      if (ET && !yT && (TH(Wb, !1, "all"), Wb.isStopped || ZU)) return bb.close(), null;
      uI();
      const ab = gT++;
      if (!OI(Wb, "open", ab, kb ? zc._b.Resume : 0)) return bb.close(), null;
      kb || mc.e.reset(), bU = null === AT ? null : {
        join: AT,
        conn: ab,
        activated: !1
      }, bb.binaryType = "arraybuffer";
      const Tb = new Ms.c((() => {
          ! function(bb, cb) {
            if (sT !== cb || bb.isStopped || null === gI(cb, Ja)) return;
            cb.detach(), sT = null, JI(bb, cb, Ja, "", !0), cb.ws.close()
          }(Wb, Ub)
        })),
        Ub = {
          ws: bb,
          conn: ab,
          pending: [],
          pendingBytes: 0,
          left: !1,
          resume: kb,
          token: null,
          detach: () => {
            Tb.dispose(), bb.removeEventListener("message", Ib), bb.removeEventListener("open", Hb), bb.removeEventListener("close", fb)
          }
        },
        Ib = bb => {
          if (bb.data instanceof ArrayBuffer) {
            var cb;
            const sb = new Uint8Array(bb.data);
            Tb.heard(), Ub.token = null !== (cb = (0, Xs.e)(sb)) && void 0 !== cb ? cb : Ub.token,
              function(bb, cb, sb) {
                YH(bb, (() => {
                  bb.rings.net.writeFrame(cb, sb) || bb.crash(bs.q, `a socket frame of ${sb.byteLength} bytes did not fit the net-in ring`)
                }));
                const kb = bb.rings.net.cursor >= Ya;
                (kb || bb.netWrittenSinceFrame >= ua || document.hidden && performance.now() - BT >= Da) && TH(bb, !1, "budget")
              }(Wb, ab, sb)
          }
        },
        Hb = () => {
          kb || (0, Dc.i)("wasm_socket_open", performance.now());
          for (const cb of Ub.pending.splice(0)) bb.send(cb);
          Ub.pendingBytes = 0
        },
        fb = bb => {
          if (sT === Ub && Wb.rings.net.cursor > 0 && TH(Wb, !1, "all"), sT === Ub) {
            if (Ub.detach(), sT = null, JI(Wb, Ub, bb.code, bb.reason) || hI(Wb, Ub)) return;
            OI(Wb, "close", ab), BI(ab, Ub.left), XI(ab, bb.code, bb.reason)
          }
        };
      return bb.addEventListener("message", Ib), bb.addEventListener("open", Hb), bb.addEventListener("close", fb), sT = Ub, null === (cb = (0, ub.h)()) || void 0 === cb || cb.socketAttached(ab), (0, Xb.o)({
        websocketUrl: sb
      }), ab
    }

    function uI() {
      const bb = sT;
      if (!bb) return;
      const cb = wa,
        sb = bb.resume;
      sb && (YI(), sT !== bb) || (sT = null, bb.detach(), bb.ws.close(), null !== cb && (hI(cb, bb) || sb && JI(cb, bb, ga)) || (null !== cb && OI(cb, "close", bb.conn), BI(bb.conn, bb.left)))
    }

    function YI() {
      const bb = wa;
      null !== bb && !bb.isStopped && !ZU && !yT && bb.rings.net.cursor > 0 && TH(bb, !1, "all")
    }

    function hI(bb, cb) {
      var sb;
      if (!cb.resume) return !1;
      const kb = RT;
      return null !== kb && null !== cb.token && "" !== cb.token && (kb.pendingHold = {
        conn: cb.conn,
        token: `${kb.roomId}:${cb.token}`
      }), OI(bb, "close", cb.conn), null === (sb = (0, ub.h)()) || void 0 === sb || sb.socketDetached(cb.conn), !0
    }

    function JI(bb, cb, sb) {
      let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
        Wb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      const ab = gI(cb, sb);
      if (null === ab) return !1;
      const {
        qU: Tb,
        token: Ub,
        game: Ib,
        joinedAt: Hb
      } = ab;
      if (!OI(bb, "close", cb.conn, zc.v.Held)) return !0;
      console.warn(`${na} the game's connection ${Wb?"went silent":`dropped with code ${sb}`}, holding it`);
      const fb = {
        closeReason: kb,
        sinceJoinedMs: performance.now() - Hb,
        game: Ib
      };
      return (0, us.reportDisconnect)((0, Db.m)(sb), va, fb, Wb ? "silent" : void 0), Tb.heldConn = cb.conn, Tb.dropCode = sb, Tb.pendingHold = {
        conn: cb.conn,
        token: `${Tb.roomId}:${Ub}`
      }, yT || TH(bb, !1, "all"), !0
    }

    function gI(bb, cb) {
      const sb = RT,
        Wb = ST,
        ab = bb.token;
      return null === sb || null === Wb || ZU || bb.left || Wb.conn !== bb.conn || null === ab || "" === ab ? null : (0, kb.g)(cb) && sb.resume.canHoldSeat() ? {
        qU: sb,
        token: ab,
        game: Wb.game,
        joinedAt: Wb.joinedAt
      } : null
    }

    function BI(bb, cb) {
      var sb;
      null === (sb = (0, ub.h)()) || void 0 === sb || sb.closeGame(bb), (0, UW.c)().close(bb), cb || (0, Xb.o)({
        websocketUrl: null
      })
    }

    function tI() {
      const bb = xT;
      if (null === bb) return;
      const cb = (0, ub.h)();
      ZU || null === cb || cb.fL(bb) ? xT = null : performance.now() - iT.pause >= Pa && (iT.pause = performance.now(), console.warn(`${na} the cmd ring had no room for SetPaused(${bb}): written before the next frame`))
    }

    function yI() {
      const bb = RT;
      RT = null, null === bb || void 0 === bb || bb.resume.dispose()
    }

    function PI(bb, cb) {
      var sb, kb;
      const {
        heldConn: Wb
      } = bb, ab = bb.resume.resumingConn;
      bb.heldConn = 0, bb.pendingHold = null, RT === bb && (RT = null), "left" === cb ? bb.resume.leave() : bb.resume.dispose(), 0 === FT || (null === (sb = sT) || void 0 === sb ? void 0 : sb.conn) !== FT || "left" === cb && (null === (kb = qT) || void 0 === kb ? void 0 : kb.conn) === FT || iI(FT), "gaveUp" === cb && 0 !== ab && iI(ab), 0 !== Wb && "refused" !== cb && (console.info(`${na} the game held through its drop ${"left"===cb?"was left":"is given up"}`), null === wa || wa.isStopped || OI(wa, "close", Wb), BI(Wb, !1))
    }

    function DI(bb, cb) {
      const sb = cb.indexOf(":");
      return {
        roomId: sb < 0 ? bb.roomId : cb.slice(0, sb),
        roomToken: cb.slice(sb + 1)
      }
    }

    function EI(bb) {
      var cb;
      vT = bb, bb.conn === FT && (FT = 0);
      const sb = RT;
      null !== sb && (null === (cb = ST) || void 0 === cb ? void 0 : cb.conn) === bb.conn && sb.resume.onInitialInfo(bb)
    }

    function iI(bb) {
      var cb;
      const sb = sT;
      (null === sb || void 0 === sb ? void 0 : sb.conn) === bb && (sb.left = !0, null === (cb = (0, ub.h)()) || void 0 === cb || cb.socketLeft(), (0, Xb.o)({
        websocketUrl: null
      }), kI(bb) ? setTimeout((() => {
        sT === sb && uI()
      }), Eb.e) : uI())
    }

    function OI(bb, cb, sb) {
      let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Wb = !1;
      return YH(bb, (() => {
        const {
          net: ab
        } = bb.rings;
        Wb = "open" === cb ? ab.writeOpen(sb, kb) : ab.writeClose(sb, kb), Wb || bb.crash(bs.q, `a socket ${cb} did not fit the net-in ring`)
      })), Wb
    }

    function GI(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if (KI()) {
        const kb = "browser" === bb && (0, TW.Q)() ? "blockedAfterLoss" : "unsupported";
        return (0, us.reportUnsupportedFallback)(bb, kb, cb, sb), void ZI(`the wasm client can't run here (${cb}; ${kb})`, kb)
      }(0, us.showUnsupported)(bb, "unsupported", cb, sb)
    }

    function KI() {
      return EU && "wasm" !== (0, Mc.f)(window.location.search)
    }

    function ZI(bb, cb) {
      console.warn(`${na} ${bb}: reloading on the JS client`), null !== cb && (0, Mc.q)(cb), (0, Mc.p)(null === cb ? "reloadOntoJs" : "decline");
      const sb = () => {
        (0, wb.e)(Mc.w)
      };
      (0, us.flushCrashReports)(wb.b).then(sb, sb)
    }

    function zI(bb, cb, sb, kb) {
      return MU(bb, cb, sb, kb)
    }

    function qI() {
      null === mU || null === wa || wa.isStopped || ZU || null !== eT || null === Oa || (eT = mU(Oa, rI, oI().follow))
    }

    function dI() {
      var bb, cb, sb;
      return null !== (bb = null === (cb = oa) || void 0 === cb || null === (sb = cb.textures) || void 0 === sb ? void 0 : sb.files()) && void 0 !== bb ? bb : null
    }

    function AI(bb) {
      sb.e(260).then((() => sb(40166))).then((cb => {
        let {
          setIconFileOverrides: sb
        } = cb;
        sb(bb)
      }), (bb => {
        console.warn(`${na} the item icons couldn't take the texture pack's files`, bb)
      }))
    }

    function wI(bb) {
      oI().follow((cb => {
        null !== cb && Promise.all([Promise.all([sb.e(193), sb.e(45)]).then((() => sb(42692))), (0, TW.I)()]).then((bb => {
          let [{
            followPagePackFiles: sb
          }, kb] = bb;
          const Wb = null === kb || (0, pc.l)(kb) ? "webgl" : kb.backend;
          sb(cb, Fk.h, Wb, (bb => {
            Fk.h.setPageFiles(bb)
          }), rI)
        }), (cb => {
          console.warn(`${na} the texture pack's files didn't load: the previews draw the shipped ones until the next opens`, cb), bb()
        }))
      }))
    }

    function rI(bb, cb) {
      console.warn(`${na} ${bb}`, cb)
    }

    function oI() {
      return ra ??= new uW({
        load: bb => Promise.all([sb.e(193), sb.e(51)]).then((() => sb(42701))).then((cb => {
          let {
            startPageTexturePackFeed: sb
          } = cb;
          return sb(rI, bb)
        })),
        store: Ls.d,
        lm: bb => {
          ja.then((() => {
            (0, us.reportTexturePackFeedLoadFailure)(bb, va)
          }))
        }
      }), ra
    }
    const SI = bb => oI().follow(bb);

    function RI() {
      return oI().loaded()
    }
    const vI = function(bb, cb, sb) {
        let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now(),
          Wb = 0;
        return async function(ab, Tb) {
          let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
          const Ib = ++Wb,
            Hb = kb() + cb,
            fb = await
          function(bb, cb) {
            let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
            return new Promise((kb => {
              const Wb = setTimeout((() => {
                kb(null), bb.then((bb => {
                  null !== bb && (bb.joinedWithout(), sb(bb))
                }))
              }), cb);
              bb.then((bb => {
                clearTimeout(Wb), kb(bb)
              }))
            }))
          }(bb(ab), cb, (bb => {
            Ib === Wb && Ub() && Tb(bb, kb() + cb).catch((bb => {
              sb("the texture pack step after the join failed", bb)
            }))
          }));
          return null === fb ? null : Tb(fb, Hb)
        }
      }((bb => (0, sc.k)(bb) ? oI().request() : oI().forJoin()), LW.d, rI),
      FI = function(bb, cb) {
        let sb = !1;
        return {
          setGamePackConfirm: bb => {
            sb = null !== bb, cb(bb)
          },
          packStep: (cb, kb, Wb) => bb(cb, kb, (() => sb && Wb()))
        }
      }(vI, (bb => {
        oI().setGamePackConfirm(bb)
      }));

    function xI(bb) {
      FI.setGamePackConfirm(bb)
    }

    function jI() {
      if (ZU || null !== NU || null === lU || null === CU) return;
      const {
        backend: bb,
        canvas: cb,
        fallbackReason: sb,
        adapterVendor: kb
      } = CU, Wb = lU;
      lU = null;
      try {
        NU = Wb({
          backend: bb,
          canvas: cb,
          fallbackReason: sb,
          adapterVendor: kb,
          joinedGame: () => ZU ? null : qT,
          inGame: bH,
          shaderPackReach: () => {
            var bb, cb;
            return null !== (bb = null === (cb = LT) || void 0 === cb ? void 0 : cb.reachInJoinedGame()) && void 0 !== bb ? bb : null
          },
          msaa: () => eU > 1,
          writeCmd: (bb, cb, sb) => null !== Oa && Oa(bb, cb, sb),
          takeFailedMeshJobs: () => {
            var bb, cb;
            return null !== (bb = null === (cb = TT) || void 0 === cb ? void 0 : cb.takeFailedMeshJobs()) && void 0 !== bb ? bb : 0
          }
        })
      } catch (ab) {
        console.error(`${na} the frame telemetry didn't start`, ab)
      }
    }

    function pI(bb, cb) {
      try {
        var sb, kb, Wb;
        const ab = IU && null !== (sb = null === (kb = wa) || void 0 === kb || null === (Wb = kb.lastHeader) || void 0 === Wb ? void 0 : Wb.renderPending) && void 0 !== sb ? sb : 0;
        (0, Ss.h)(cb, bb, bH() && !(null !== HW), ab)
      } catch (ab) {
        (0, Ss.t)(), console.error(`${na} the quality steps stopped`, ab)
      }
    }

    function bH() {
      return null !== qT && yU === qT && !ZU
    }

    function cH(bb) {
      const cb = NU;
      NU = null;
      try {
        null === cb || void 0 === cb || cb.stop()
      } catch {}
      console.error(`${na} the frame telemetry threw: it stops`, bb)
    }

    function sH(bb) {
      var cb, sb, kb, Wb;
      if ((0, UW.c)().fire(bb), "message" === bb.type) {
        if (PT++, bb.jT === zc.Pc.ERROR && null !== AT) {
          var ab;
          const {
            text: cb,
            dropsCache: sb
          } = (0, Db.t)((new TextDecoder).decode(bb.payload));
          WU ||= sb, (null === (ab = bU) || void 0 === ab ? void 0 : ab.conn) === bb.conn && (aU = cb)
        } else if (bb.jT === qc.Yb.ResumeComplete) {
          var Tb;
          null === (Tb = RT) || void 0 === Tb || Tb.resume.onResumeComplete(bb.conn)
        }
        return
      }
      bb.phase === zc.x.Left ? DT = bb.conn : bb.phase === zc.x.Activated && (null === (cb = bU) || void 0 === cb ? void 0 : cb.conn) === bb.conn ? bU.activated = !0 : bb.phase === zc.x.Resumed ? function(bb) {
        var cb, sb;
        FT = bb;
        const kb = RT;
        if (null === kb || 0 === kb.heldConn || (null === (cb = sT) || void 0 === cb ? void 0 : cb.conn) !== bb || !sT.resume || null === ST) return;
        console.info(`${na} the game resumed on conn ${bb}, waiting for its InitialInfo`);
        const Wb = kb.heldConn;
        kb.heldConn = 0, sT.resume = !1, ST.conn = bb, (null === (sb = rT) || void 0 === sb ? void 0 : sb.conn) === Wb && (rT = {
          conn: bb,
          info: rT.info
        }), mc.e.apply({
          shopInfo: null,
          _shopVersion: kc.b
        })
      }(bb.conn) : bb.phase === zc.x.Held ? function(bb) {
        var cb;
        const sb = RT,
          kb = null !== (cb = null === sb || void 0 === sb ? void 0 : sb.pendingHold) && void 0 !== cb ? cb : null;
        if (null !== sb && null !== kb && kb.conn === bb) return sb.pendingHold = null, sb.heldConn = bb, FT = 0, console.warn(`${na} the core holds the game, reconnecting`), void sb.resume.onDropped(kb.token);
        if (bb === FT) {
          FT = 0;
          const cb = wa;
          null === cb || cb.isStopped || (console.info(`${na} the core held again a resumed game the shell ended before its InitialInfo: closing it again`), OI(cb, "close", bb))
        }
      }(bb.conn) : bb.phase === zc.x.Closed && (null === (sb = RT) || void 0 === sb || null === (kb = sb.pendingHold) || void 0 === kb ? void 0 : kb.conn) === bb.conn && (RT.heldConn === bb.conn ? function(bb) {
        const cb = bb.heldConn,
          sb = bb.dropCode;
        PI(bb, "refused"), console.info(`${na} the core didn't hold the game through its drop: it hadn't started`), queueMicrotask((() => {
          BI(cb, !1), XI(cb, sb, "", !0)
        }))
      }(RT) : RT.pendingHold = null);
      const Ub = Object.keys(zc.x).find((cb => zc.x[cb] === bb.phase)),
        Ib = 0 === bb.code ? "" : ` (code ${bb.code})`;
      console.info(`${na} conn ${bb.conn}: ${null!==Ub&&void 0!==Ub?Ub:bb.phase}${Ib}, ${PT} raw messages so far`), (null === (Wb = qT) || void 0 === Wb ? void 0 : Wb.conn) !== bb.conn || bb.phase !== zc.x.Left && bb.phase !== zc.x.Closed || sI(null), wT !== bb.conn || bb.phase !== zc.x.Left && bb.phase !== zc.x.Closed || (wT = null, null === qT && null === AT && xk.b.setGame(void 0));
      for (const fb of [...UU]) try {
        fb(bb.conn, bb.phase, bb.code)
      } catch (Hb) {
        (0, dc.t)(Hb, `${na} a connection listener threw`)
      }
    }

    function kH() {
      (0, TW.r)(), queueMicrotask((() => {
        try {
          QH()
        } catch (bb) {
          console.warn(`${na} stopping before the reload threw`, bb)
        }(0, us.flushCrashReports)(wb.b).then(wb.i, wb.i)
      }))
    }

    function WH() {
      const bb = wa;
      null === bb || bb.isStopped || null === sT || yT || !bb.hasPendingCommands() || TH(bb, !1, "budget")
    }

    function aH(bb) {
      var cb;
      const sb = qT;
      bb.persisted || null === sb || (null === (cb = sT) || void 0 === cb ? void 0 : cb.conn) !== sb.conn || sT.left || sb.leave()
    }

    function TH(bb, cb, kb) {
      let Wb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const ab = yT;
      yT = !0;
      try {
        return function(bb, cb, kb, Wb) {
          var ab, Tb, Ub, Ib;
          if (ZU) return !1;
          if (YH(bb, IH), ZU || bb.isStopped) return !1;
          nH() && hT("modelsIn");
          tI(), BT = performance.now(), DT = null, ET = !1, (0, Lb.P)(), null === (ab = XT) || void 0 === ab || ab.beforeFrame(), Ik(BT, bb), (0, Lb.L)(BT, HH), tT = !0;
          const Hb = cb && XH();
          let fb;
          try {
            fb = bb.frame(BT, Hb, kb)
          } finally {
            tT = !1
          }
          if (!fb) return !1;
          QU.observe(null !== (Tb = null === (Ub = bb.lastHeader) || void 0 === Ub ? void 0 : Ub.chunksCancelled) && void 0 !== Tb ? Tb : 0);
          const Mb = bb.lastFrameKind,
            Xb = (0, gc.d)(Mb);
          (function(bb) {
            null !== ZW && ZW.afterFrame(performance.now(), bb)
          })(Xb), null === (Ib = VU) || void 0 === Ib || Ib.frame(bb, BT, Mb), cb && (PU = Xb);
          Xb && (0, Yc.c)(BT);
          if (null !== NU) try {
            NU.frameRan(bb, BT, performance.now(), Mb)
          } catch (mb) {
            cH(mb)
          }
          "drawn" === Mb && MH() && function() {
            for (const bb of [...WW]) bb()
          }();
          bb.forEachNetOut(mH);
          const nb = sT;
          null !== DT && (null === nb || void 0 === nb ? void 0 : nb.conn) === DT && lH(nb, Eb.h);
          (function(bb) {
            var cb;
            if (YU) return;
            null === gU && XH() && (gU = performance.now());
            if (null === AT && null === qT) return;
            null === gU || BU || (BU = !0, (0, Dc.i)("wasm_startup_loaded", gU));
            let sb = 0;
            null !== qT ? sb = -1 : !0 === (null === (cb = bU) || void 0 === cb ? void 0 : cb.activated) && (sb = ~qc.G.TerrainDrawn);
            const kb = bb.headerWord(qc.y.LoadSteps) & sb & ~JU;
            if (0 === kb) return;
            JU |= kb;
            const Wb = performance.now();
            for (const [ab, Tb] of Object.entries(fH)) 0 !== (kb & qc.G[ab]) && (0, Dc.i)(Tb, Wb)
          })(bb), cb && function(bb) {
            var cb, kb, Wb;
            if (null === qT || !XH()) return;
            null === tU || yU === qT && !tU.frame(BT, 0 !== (bb.headerWord(qc.y.LoadSteps) & qc.G.TerrainDrawn)) || (tU = null);
            const ab = bb.lastHeader,
              Tb = !IU || 0 === (null === ab || void 0 === ab ? void 0 : ab.renderPending);
            !hU && Tb && (hU = !0, performance.mark(La));
            if (yU === qT) return;
            const Ub = null !== (cb = null === ab || void 0 === ab ? void 0 : ab.firstView) && void 0 !== cb ? cb : zc.T.NotYet;
            if (IU && Ub === zc.T.NotYet) return;
            if (YU && (!0 !== (null === (kb = (0, ub.h)()) || void 0 === kb ? void 0 : kb.isSessionLive) || !Tb)) return;
            yU = qT;
            const Ib = qT;
            if (setTimeout((() => {
                qT === Ib && (0, Dc.f)()
              }), 0), null === (Wb = LT) || void 0 === Wb || Wb.playable(), function() {
                clearTimeout(cT), cT = setTimeout((() => {
                  bH() && gH((bb => {
                    let {
                      prefetchWorldgenWorker: cb
                    } = bb;
                    cb()
                  }))
                }), ia)
              }(), YU) return;
            YU = !0, performance.mark(Va), (0, PW.q)("render") && Promise.all([sb.e(74), sb.e(47)]).then((() => sb(4414))).then((bb => {
              let {
                renderDebugPlayable: cb
              } = bb;
              cb()
            }), (bb => {
              console.warn("The render debug topic didn't load", bb)
            }));
            const Hb = Math.round(performance.now());
            if (IU && Ub !== zc.T.Drawn) {
              const bb = Ub === zc.T.HeldBackstop ? "held_draws" : "long";
              if (console.warn(`${na} playable at ${Hb} ms on the first view's ${bb} backstop: it wasn't drawn whole in time`), (0, Dc.i)("wasm_view_backstop", Hb, bb), "long" === bb) {
                var fb, Mb;
                const bb = null !== (fb = null === (Mb = ST) || void 0 === Mb ? void 0 : Mb.game) && void 0 !== fb ? fb : "";
                tU = new Ys.c((() => {
                  (0, us.reportFirstViewNoTerrain)(bb, va)
                }))
              }
            } else console.info(`${na} playable at ${Hb} ms${IU?"":" (no renderer)"}`);
            setTimeout(nU, 0), (0, Qc.g)().catch((bb => {
              console.error(`${na} item sprites didn't load, so item particles show the missing texture`, bb)
            })), dk.c.warm()
          }(bb);
          (0, bs.P)(bb, {
            worldgen: WT,
            mesh: TT
          }),
          function(bb) {
            bb.forEachEvent(fk);
            for (const cb of Hk) try {
              (0, kk.e)(cb)
            } catch (mb) {
              if ((0, dc.i)(mb)) {
                bb.crashOn(bs.j, mb);
                break
              }
              console.error(`${ak} an input action listener threw`, mb)
            }
            Hk.length = 0
          }(bb), Wb && (0, Jc.d)();
          return !bb.isStopped
        }(bb, cb, "all" === kb || bb.rings.net.cursor >= Ya || bb.netKeptFrames >= ha, Wb)
      } finally {
        yT = ab
      }
    }

    function UH(bb) {
      console.error(`${na} a frame-start listener threw`, bb)
    }

    function IH() {
      var bb, cb, sb, kb;
      null === (bb = mT) || void 0 === bb || bb.drain(Oa, Ga), null === (cb = CT) || void 0 === cb || cb.drain(Oa), null === (sb = NT) || void 0 === sb || sb.drain(performance.now()), XU(Oa), null === (kb = eT) || void 0 === kb || kb.drain()
    }

    function HH(bb) {
      console.error(`${na} a before-frame listener threw`, bb)
    }
    const fH = {
      ChunkRequested: "wasm_chunk_requested",
      ChunkStored: "wasm_chunk_stored",
      MeshLanded: "wasm_mesh_landed",
      PlayerChunk: "wasm_player_chunk",
      TerrainDrawn: "wasm_terrain_drawn"
    };

    function MH() {
      return IU && XH()
    }

    function XH() {
      return VT && nH()
    }

    function nH() {
      return null === mT || mT.startupDone
    }

    function mH(bb, cb) {
      const sb = sT;
      (null === sb || void 0 === sb ? void 0 : sb.conn) === bb ? lH(sb, cb) : GT++
    }

    function lH(bb, cb) {
      const {
        ws: sb
      } = bb;
      return sb.readyState === WebSocket.OPEN ? (sb.send(cb), !0) : sb.readyState === WebSocket.CONNECTING && bb.pendingBytes + cb.byteLength <= ya ? (bb.pending.push(cb.slice()), bb.pendingBytes += cb.byteLength, !0) : (GT++, !1)
    }

    function QH() {
      var bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib, Hb, fb, Mb, Xb, nb, mb, lb, Qb;
      ZU = !0, DU.stop(), (0, EW.b)(), ZW = null, yI(), (0, Lb.N)().unlockPointer(), (0, Lb.M)(null), null === (bb = nT) || void 0 === bb || bb(), nT = null, null === (cb = (0, ub.s)()) || void 0 === cb || cb.followCursorAim(null), (0, Jc.H)(), (0, ub.e)(), Ra.stop(), null === (sb = LU) || void 0 === sb || sb(), LU = null, null === (kb = uU) || void 0 === kb || kb(), uU = null, null === (Wb = NU) || void 0 === Wb || Wb.stop(), NU = null, (0, gs.l)(null), null === (ab = kT) || void 0 === ab || ab(), kT = null, null === (Tb = WT) || void 0 === Tb || Tb.stop(), WT = null, null === (Ub = TT) || void 0 === Ub || Ub.stop(), TT = null, null !== (Ib = oa) && void 0 !== Ib && null !== (Hb = Ib.textures) && void 0 !== Hb && Hb.assets && AI(null), null === (fb = oa) || void 0 === fb || fb.stop(), oa = null, Sa = null;
      const eb = UT;
      UT = null, eb && (eb.stop(), uH(eb)), null === (Mb = CT) || void 0 === Mb || Mb.dispose(), CT = null, null === (Xb = NT) || void 0 === Xb || Xb.dispose(), NT = null, mT = null, null === (nb = QT) || void 0 === nb || nb(), QT = null, null === (mb = MT) || void 0 === mb || mb(), MT = null, null === (lb = XT) || void 0 === lb || lb.stop(), XT = null, pU(), xk.b.release(), uI();
      const Cb = eT;
      eT = null;
      try {
        null === Cb || void 0 === Cb || Cb.dispose()
      } catch (Nb) {
        console.warn(`${na} the sky's images didn't release`, Nb)
      }(0, Ak.h)(null), null === (Qb = da) || void 0 === Qb || Qb.pagePreviews().endSession(null === (0, ac.o)())
    }

    function eH(bb, cb) {
      var sb, kb;
      const Wb = null !== (sb = null === (kb = UT) || void 0 === kb ? void 0 : kb.details()) && void 0 !== sb ? sb : {},
        ab = bb.site === la || bb.site === Qa || bb.site === us.RENDER_RELOAD_SITE || bb.site === ea ? bb.error instanceof WebAssembly.RuntimeError || bb.error instanceof vc.e : !(0, pc.o)(bb.error) && (0, bs.I)(bb);
      ab && bb.error instanceof Error && (0, ac.Q)(bb.error);
      const Tb = ab || bb.site === bs.t ? (0, us.readTrap)(bb.error) : null,
        Ub = null !== Tb && (0, Ac.g)(Tb.kind, Tb.refusedBytes) ? Tb.refusedBytes : 0,
        Ib = null === IT ? (0, Zk.l)(function() {
          try {
            return (0, ac.u)().buffer.byteLength
          } catch {
            return 0
          }
        }(), Ub, null) : IT.ceilingMayRefuse(Ub),
        Hb = Ub > 0 && !Ib && KI();
      var fb;
      if (Hb && ((0, Mc.q)("oom"), (0, Mc.p)("decline"), KU = !0), QH(), (0, TW.e)()) return console.warn(`${na} the session stopped at ${bb.site} as the page reloads`, bb.error), void((0, pc.o)(bb.error) || (null === (fb = bb.header) || void 0 === fb ? void 0 : fb.lastError) === zc.C.CoreBusy || (0, us.reportStoppedCore)(bb, cb, Tb, {
        memoryDetails: Wb,
        declined: Hb
      }));
      (0, us.showCrash)(bb, cb, Tb, {
        memoryDetails: Wb,
        declined: Hb
      })
    }

    function CH(bb) {
      const {
        input: cb,
        net: sb,
        worker: kb
      } = bb.rings, Wb = bb.optionsDropped, ab = cb.dropped + Wb + sb.dropped + kb.dropped + GT;
      ab !== OT && function(bb, cb) {
        const sb = performance.now();
        return !(sb - iT[bb] < Pa) && (iT[bb] = sb, console.warn(`${na} ${cb}`), !0)
      }("dropped", `${ab} records dropped so far (input ${cb.dropped}, options ${Wb}, net ${sb.dropped}, worker ${kb.dropped}, net-out ${GT})`) && (OT = ab)
    }

    function NH() {
      var bb, cb;
      const sb = (0, Cs.c)();
      if (null === sb) return null;
      const kb = (0, Vs.g)(sb);
      return {
        ...kb,
        horizontal: Math.min(kb.horizontal, null !== (bb = null === (cb = UT) || void 0 === cb ? void 0 : cb.shedDistanceInUse()) && void 0 !== bb ? bb : 1 / 0)
      }
    }

    function VH(bb) {
      var cb, sb;
      return {
        samples: IU ? eU : null,
        sunShadows: bb,
        renderDistance: null !== (cb = null === (sb = NH()) || void 0 === sb ? void 0 : sb.horizontal) && void 0 !== cb ? cb : null
      }
    }

    function LH() {
      var bb, cb, sb;
      const kb = NH();
      return {
        ...null === (bb = UT) || void 0 === bb ? void 0 : bb.pageKillSnapshot(),
        renderDistance: null !== (cb = null === kb || void 0 === kb ? void 0 : kb.horizontal) && void 0 !== cb ? cb : null,
        renderDistanceVertical: null !== (sb = null === kb || void 0 === kb ? void 0 : kb.vertical) && void 0 !== sb ? sb : null,
        chunkCap: HT,
        budgetBasis: fT,
        renderBackend: (0, TW.D)()
      }
    }

    function uH(bb) {
      console.info(`${na} wasm memory at the session's end`, bb.details())
    }

    function YH(bb, cb) {
      if (!bb.isStopped) try {
        cb()
      } catch (sb) {
        bb.crash(bs.x, sb)
      }
    }

    function hH() {
      return aT ??= sb.e(68).then((() => sb(42709))).catch((bb => {
        throw aT = null, bb
      })), aT
    }
    async function JH() {
      const {
        createWorldgenWorker: bb,
        worldgenWorkerReady: cb
      } = await hH();
      return await cb(), bb
    }

    function gH(bb) {
      var cb;
      null === (cb = aT) || void 0 === cb || cb.then(bb, (() => {}))
    }

    function BH(bb, cb, sb) {
      return async function(bb, cb, sb) {
        let {
          stop: kb,
          stillWanted: Wb
        } = sb;
        const ab = await (0, Vk.k)(bb, {
          stillWanted: Wb,
          beforeReload: async () => {
            kb(), await (0, us.flushCrashReports)(wb.b)
          },
          reload: wb.i
        });
        return ab || cb(), ab
      }(bb, cb, {
        stop: QH,
        stillWanted: sb
      })
    }
    let tH = !1;

    function yH() {
      return tH = !0, async function(bb, cb, kb) {
        const {
          gamePackSource: Wb
        } = await sb.e(343).then((() => sb(42668)));
        await FI.packStep(bb, ((sb, kb) => sb.packForGame(bb, Wb(cb), kb)), kb)
      }(...arguments)
    }

    function PH(bb) {
      ! function(bb, cb) {
        bb((bb => {
          null === bb || void 0 === bb || bb.subscribe((bb => {
            let {
              pack: sb,
              gameSource: kb
            } = bb;
            cb(null === kb || null === sb ? null : {
              pack: sb,
              source: "" === kb ? null : kb
            })
          }))
        }))
      }(SI, bb)
    }
    let DH = !1,
      EH = null,
      iH = !1,
      OH = !1;

    function GH() {
      var bb;
      DH || (DH = !0, rU("play", db), (0, Xb.m)(new vH), Ub.gameBridge.attach(Pb), AH().catch((() => {})), (0, ub.w)((bb => {
        bc(bb.setTextHost)
      })), bb = zH, kU.add(bb), function(bb) {
        for (const cb of uT) bb(cb);
        YT.add(bb)
      }((bb => {
        ZH(KH[bb])
      })))
    }
    const KH = {
      booted: ab.k.INITIALISE_NOA,
      texturesIn: ab.k.REGISTRATION,
      modelsIn: ab.k.SETUP_LIFEFORMS
    };

    function ZH(bb) {
      Ib.j.QQ("matchmakeAndPlayStepCompleted", {
        step: bb,
        totalSubSteps: 1
      })
    }

    function zH(bb) {
      if (!iH) return;
      const {
        gameNameWithVariation: cb,
        lobbyName: sb
      } = (0, Xb.d)();
      if (bb.code === kb.d.serverUpdating.code) return (new vH).leaveLive(), void dH(cb, sb);
      Ib.j.QQ("unwantedLeftGame", {
        reason: qH(bb),
        requiresRefresh: bb.requiresRefresh,
        canReconnect: null !== bb.reconnect,
        automaticallyReconnect: bb.reconnecting,
        canPlayAgain: bb.canPlayAgain,
        gameNameWithVariation: cb,
        lobbyName: sb
      }), (new vH).leaveLive()
    }

    function qH(bb) {
      return null !== bb.reasonKey ? {
        translationKey: bb.reasonKey
      } : "gameOrPluginKick" === bb.name ? bb.reason : `You have disconnected from the server.\n${bb.reason}`
    }

    function dH(bb, cb) {
      var kb;
      kb = (0, Hb.z)(bb, cb), Promise.resolve().then((() => sb(1495))).then((bb => {
        let {
          navigatePreserveSearch: cb
        } = bb;
        cb(kb)
      })).catch((bb => {
        console.warn("[bloxd-wasm-client] the page's router didn't navigate: loading the page instead", bb), (0, wb.d)(kb)
      }))
    }

    function AH() {
      return EH ??= Promise.all([sb.e(69), sb.e(72), sb.e(71), sb.e(70), sb.e(83), sb.e(259), sb.e(199), sb.e(216), sb.e(237), sb.e(212), sb.e(46)]).then((() => sb(40112))).then((bb => {
        try {
          bb.attachPlayGameSources()
        } catch (cb) {
          throw console.error("[bloxd-wasm-client] the play sources did not attach", cb),
            function(bb) {
              ja.then((cb => {
                null === cb || cb.isStopped || ZU ? console.warn(`${na} the play sources threw as they attached, after the client stopped`, bb) : eH({
                  site: ea,
                  error: bb,
                  header: null
                }, va)
              }))
            }(cb), cb
        }
      }), (bb => {
        throw EH = null, new ub.b(bb)
      })), EH
    }
    async function wH(bb, cb) {
      GH(), tH = !0, iH = !0;
      let sb = {
          place: bb.place,
          matchedAt: bb.matchedAt
        },
        Tb = bb.place.gameNameWithVariation;
      const Ub = (0, Mb.g)();
      let Ib = null;
      const Hb = await vU({
        matchmake: async () => {
          let cb = sb;
          if (sb = null, null === cb) {
            const sb = await bb.rematch();
            if (sb.isError()) throw Ib = sb.asError().forward(), new Error(sb.asError().message);
            cb = {
              place: sb.getValue(),
              matchedAt: performance.now()
            }
          }
          Tb = cb.place.gameNameWithVariation;
          return {
            target: await (0, Ob.e)(bb.userContext, cb.place, RI(), Ub),
            matchedAt: cb.matchedAt,
            freshMs: Ob.d
          }
        },
        pageReady: AH,
        onFailure: (bb, cb) => {
          null === Ib && function(bb, cb) {
            (0, us.reportPageJoinFailure)(bb, va, cb)
          }(bb, {
            sinceJoinStartMs: cb,
            game: Tb
          })
        },
        rejoin: () => () => {},
        invalidateTrafficCode: () => bb.userContext.invalidateTrafficCode(),
        signal: cb
      });
      switch (Hb.kind) {
        case "joined":
          if (Ub) {
            const {
              game: bb
            } = Hb;
            (0, Mb.s)((() => {
              bb.endJoinAd()
            }))
          }
          return OH || (OH = !0, (0, lb.c)()), iH ? (ZH(ab.k.CONNECT_TO_GAME_SERVER), ZH(ab.k.SHADER_PACK), function() {
            var bb, cb;
            return null !== (bb = null === (cb = LT) || void 0 === cb ? void 0 : cb.runsInJoinedGame()) && void 0 !== bb && bb
          }() && (0, mb.e)(bb.userContext, Tb).catch((bb => {
            console.error("Failed to report the shader pack session", bb)
          })), function() {
            const bb = function() {
              var bb, cb;
              return null !== (bb = null === (cb = LT) || void 0 === cb ? void 0 : cb.couldntRunInJoinedGame()) && void 0 !== bb ? bb : null
            }();
            null !== bb && (0, mb.d)(bb)
          }(), Wb.d.value(void 0)) : RH("The server ended the game as it joined");
        case "failed":
          if (!Hb.reloading) {
            if (null !== Ib) return Ib;
            if ((Hb.error instanceof Eb.k || Hb.error instanceof Eb.d) && Hb.error.code === kb.d.serverUpdating.code) {
              if (cb.aborted) return RH("Left the game while it loaded");
              const {
                gameNameWithVariation: bb,
                lobbyName: sb
              } = (0, Xb.d)();
              return dH(bb, sb), RH("The server is updating")
            }
            return Hb.error instanceof Ab.f ? Wb.d.errorWithCode(Hb.error.messageKey, ab.k.SHADER_PACK, {
              severity: "medium"
            }) : Wb.d.errorWithCode(function(bb) {
              if (bb instanceof Eb.w || bb instanceof Nb.i) return bb.message;
              if (rH(bb)) return (0, Db.p)(bb.code, bb.serverText);
              return Db.j
            }(Hb.error), ab.k.CONNECT_TO_GAME_SERVER, {
              error: oH(Hb.error) ? Hb.error : void 0,
              severity: SH(Hb.error),
              gameServerUnreachable: (0, ib.b)(Hb.error),
              rematch: (0, eb.b)(Hb.error),
              gameRefused: (0, Cb.d)(Hb.error)
            })
          }
          return RH("Reloading into the new build");
        case "stopped":
          return RH("The game client stopped, and shows why");
        case "Gs":
          return RH("Left the game while it loaded")
      }
    }

    function rH(bb) {
      return bb instanceof Eb.k || bb instanceof Eb.d && "attach" !== bb.stage
    }

    function oH(bb) {
      return !(bb instanceof Eb.w) && !rH(bb) && void 0 === (0, ib.b)(bb)
    }

    function SH(bb) {
      return rH(bb) ? bb instanceof Eb.d && (0, Db.m)(bb.code).requiresRefresh ? "medium" : "low" : oH(bb) || bb instanceof Eb.w ? "medium" : "low"
    }

    function RH(bb) {
      return Wb.d.errorWithCode(bb, ab.k.CONNECT_TO_GAME_SERVER, {
        severity: "low",
        Gs: !0
      })
    }
    class vH {
      leave(bb) {
        if ((0, Vb.b)()) {
          var cb, sb;
          if ((0, Tb.b)()) return;
          (0, nb.c)(!0 === (null === (cb = (0, Vb.l)()) || void 0 === cb || null === (sb = cb.currentViewer) || void 0 === sb ? void 0 : sb.unsavedChanges), bb)
        } else this.leaveLive()
      }
      leaveLive() {
        var bb;
        tH && (null === (bb = RI()) || void 0 === bb || bb.endGamePack());
        if (!iH) return;
        iH = !1, (0, Qb.i)();
        try {
          var cb;
          null === (cb = (0, ub.s)()) || void 0 === cb || cb.clearWasmCameraScreen()
        } catch (kb) {
          console.error("[bloxd-wasm-client] the camera screen didn't clear", kb)
        }
        const {
          gameNameWithVariation: sb
        } = (0, Xb.d)();
        try {
          aI()
        } finally {
          (0, Xb.o)({
            websocketUrl: null
          }), Ib.j.QQ("leaveGame", {
            gameNameWithVariation: sb
          }), (0, fb.L)()
        }
      }
      isReplay() {
        return (0, Vb.b)()
      }
    }
  },
  40428: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Wb,
      f: () => kb,
      g: () => Ub,
      i: () => Tb
    });
    const kb = 12e4,
      Wb = 3e4,
      ab = {
        hidden: () => "undefined" !== typeof document && document.hidden,
        listen: bb => "undefined" === typeof document ? () => {} : (document.addEventListener("visibilitychange", bb), () => {
          document.removeEventListener("visibilitychange", bb)
        })
      };

    function Tb(bb) {
      return `it sent no start within ${Math.round(bb)} ms`
    }
    class Ub {
      constructor(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ab;
        this.timeoutMs = bb, this.onTimeout = cb, this.now = sb, this.visibility = kb, this.timer = null, this.counted = 0, this.step = null, this.unlisten = void 0, this.unlisten = kb.listen((() => {
          this.onVisibility()
        })), kb.hidden() || this.next()
      }
      cancel() {
        this.pause(), this.unlisten()
      }
      onVisibility() {
        this.visibility.hidden() ? (this.counted += this.credit(), this.pause()) : null === this.timer && this.next()
      }
      credit() {
        const bb = this.step;
        return null === bb ? 0 : Math.min(this.now() - bb.at, bb.ms)
      }
      pause() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), this.step = null
      }
      next() {
        const bb = this.timeoutMs - this.counted;
        if (bb <= 0) return void this.arm(1e3, (() => {
          this.cancel(), this.onTimeout(this.counted)
        }));
        const cb = Math.min(bb, 5e3);
        this.step = {
          at: this.now(),
          ms: cb
        }, this.arm(cb, (() => {
          this.counted += this.credit(), this.step = null, this.next()
        }))
      }
      arm(bb, cb) {
        this.timer = setTimeout((() => {
          this.timer = null, cb()
        }), bb)
      }
    }
  },
  40323: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => kb
    });
    const kb = {
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
  38335: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => ab
    });
    var kb = sb(3500);
    const Wb = ["none", "idle", "now"];

    function ab() {
      const bb = () => (0, kb.G)();
      return {
        memoryBytes: () => (0, kb.u)().buffer.byteLength,
        reserveUpFront: cb => bb().uM(cb),
        reserveAhead: cb => bb().LM(cb),
        setCeiling: cb => {
          bb().YM(cb)
        },
        lowWater: () => Wb[bb().VM()] ?? "none",
        stats: () => function(bb) {
          const cb = new Uint32Array((0, kb.u)().buffer, bb, 17),
            sb = bb => cb[bb] ?? 0,
            Wb = bb => ({
              upFront: sb(bb),
              ahead: sb(bb + 1),
              onDemandInFrame: sb(bb + 2),
              onDemand: sb(bb + 3)
            });
          return {
            memoryBytes: sb(0),
            initialBytes: sb(1),
            liveBytes: sb(2),
            peakLiveBytes: sb(3),
            headroomBytes: sb(4),
            unusedBytes: sb(5),
            ceilingBytes: sb(6),
            reservesRefused: sb(7),
            grows: Wb(8),
            grownBytes: Wb(12),
            allocationsRefused: sb(16)
          }
        }(bb().hM()),
        takeBallast: () => bb().JM(),
        takePressure: () => bb().gM()
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);