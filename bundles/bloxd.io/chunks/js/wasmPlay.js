export const id = 61;
export const ids = [61];
export const modules = {
  39237: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Bb,
      g: () => Ob
    });
    const Bb = "The world isn't loaded, so no blocks can be seen.",
      Ob = "The world isn't loaded, so nothing in it can be seen."
  },
  38722: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => pb,
      i: () => ob,
      m: () => Xb
    });
    var Bb = hb(2633);
    const Ob = 0,
      Gb = 2,
      Ub = 3,
      Lb = 4;
    class Yb {
      constructor(bb, ub) {
        this.width = bb, this.LH = ub, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(bb * ub)
      }
      push(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const hb = this.data.subarray(this.next * this.width, (this.next + 1) * this.width);
        for (let Bb = 0; Bb < this.width; Bb++) hb[Bb] = bb[ub + Bb];
        return this.next = (this.next + 1) % this.LH, this.size = Math.min(this.size + 1, this.LH), hb
      }
      lines() {
        const bb = [],
          ub = (this.next - this.size + this.LH) % this.LH;
        for (let hb = 0; hb < this.size; hb++) {
          const Bb = (ub + hb) % this.LH * this.width;
          bb.push(Array.from(this.data.subarray(Bb, Bb + this.width)).join(","))
        }
        return bb
      }
    }

    function Sb(bb) {
      return Number.isFinite(bb) ? String(Math.round(10 * bb) / 10) : String(bb)
    }

    function ab(bb) {
      return Number.isFinite(bb) ? bb.toFixed(1) : String(bb)
    }
    class Hb {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.qE = 0, this.pastLimit = 0, this.lockSkips = 0, this.mp = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
    }
    class wb {
      constructor() {
        var bb = this;
        this.tally = new Hb, this.records = new Yb(10, 3600), this.events = new Yb(4, 12e3), this.event = new Float64Array(4), this.take = null, this.client = "js", this.started = !1, this.record = function(ub) {
          let hb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const [Bb, Yb, Hb, wb, Zb, Xb, pb, ob, Ab, lb] = bb.records.push(ub, hb), Kb = bb.tally;
          switch (Kb.frames++, pb) {
            case Ob:
              return void Kb.idle++;
            case Lb:
              return void Kb.mp++;
            case Ub:
              return Kb.lockSkips++, void(0 === Hb && 0 === wb || bb.outlier(`lock skip dropped raw (${Sb(Hb)}, ${Sb(wb)}) at ${ab(Bb)} ms`))
          }
          Kb.looked++, Number.isFinite(Yb) && (Kb.dtMin = Math.min(Kb.dtMin, Yb), Kb.dtMax = Math.max(Kb.dtMax, Yb), Kb.dtSum += Yb, Yb > 0 && (Kb.peakRate = Math.max(Kb.peakRate, Math.hypot(Zb, Xb) / Yb))), Kb.raw[0] += Hb, Kb.raw[1] += wb, Kb.turned[0] += Zb, Kb.turned[1] += Xb;
          const Wb = Math.abs(Hb) > lb || Math.abs(wb) > lb,
            Cb = `raw (${Sb(Hb)}, ${Sb(wb)}) over ${ab(Yb)} ms, limit ${Sb(lb)}, filter v (${ob.toFixed(3)}, ${Ab.toFixed(3)}) px/ms, at ${ab(Bb)} ms`;
          pb === Gb ? (Kb.qE++, bb.outlier(`spike put right: ${Cb} -> turned (${Sb(Zb)}, ${Sb(Xb)})`)) : Wb ? (Kb.pastLimit++, bb.outlier(`kept past limit: ${Cb}`)) : Yb > 50 && (Kb.longFrames++, bb.outlier(`long frame: ${Cb}, turned in full`))
        }, this.onMouseMove = bb => {
          const ub = this.tally,
            {
              movementX: hb,
              movementY: Bb
            } = bb;
          ub.events++;
          const Ob = Math.max(Math.abs(hb), Math.abs(Bb));
          ub.eventMax = Math.max(ub.eventMax, Ob);
          const Gb = null !== document.pointerLockElement,
            Ub = this.event;
          Ub[0] = bb.timeStamp, Ub[1] = hb, Ub[2] = Bb, Ub[3] = Gb ? 1 : 0, this.events.push(Ub), Ob >= 200 && (ub.bigEvents++, this.eventOutlier(`big mousemove (${hb}, ${Bb}) at ${ab(bb.timeStamp)} ms, lock ${Gb?"MS":"free"}`))
        }, this.onLockChange = () => {
          const bb = document.pointerLockElement;
          (0, Bb.l)("look", `pointer lock ${bb?`gained (${bb.tagName.toLowerCase()})`:"lost"} at ${ab(performance.now())} ms`)
        }, this.onLockError = () => {
          (0, Bb.l)("look", `pointer lock request failed at ${ab(performance.now())} ms`)
        }, this.onVisibility = () => {
          (0, Bb.l)("look", `page ${document.visibilityState} at ${ab(performance.now())} ms`)
        }, this.flush = () => {
          this.takeRecords();
          const bb = this.tally;
          if (this.tally = new Hb, 0 === bb.events && 0 === bb.raw[0] && 0 === bb.raw[1] && 0 === bb.lockSkips && 0 === bb.qE && 0 === bb.dropped) return;
          const ub = bb.looked > 0 ? bb.dtSum / bb.looked : NaN,
            hb = [`${bb.frames} frames (${bb.looked} looked, ${bb.idle} idle${"wasm"===this.client?`, ${bb.mp} carried`:""})`, `dt avg ${ab(ub)} min ${ab(bb.dtMin)} max ${ab(bb.dtMax)}, ${bb.longFrames} long`, `${bb.events} mousemoves (max ${Sb(bb.eventMax)} px, ${bb.bigEvents} big)`, `raw (${Sb(bb.raw[0])}, ${Sb(bb.raw[1])}) turned (${Sb(bb.turned[0])}, ${Sb(bb.turned[1])})`, `peak ${bb.peakRate.toFixed(2)} px/ms`, `put right ${bb.qE}, past limit ${bb.pastLimit}, lock skips ${bb.lockSkips}`, "lock " + (document.pointerLockElement ? "MS" : "free")];
          bb.dropped > 0 && hb.push(`${bb.dropped} doubled spike copies dropped`), bb.lost > 0 && hb.push(`${bb.lost} records lost`), bb.suppressed > 0 && hb.push(`${bb.suppressed} outlier lines not shown`), (0, Bb.l)("look", `1s: ${hb.join("; ")}`)
        }, this.dump = () => [`look records (${this.client}): nowMs,dtMs,rawX,rawY,turnedX,turnedY,outcome,vX,vY,limit`, ...this.records.lines(), "mousemove events: timeStamp,movementX,movementY,locked", ...this.events.lines()].join("\n")
      }
      start(bb, ub) {
        this.client = bb, this.take = ub;
        const {
          screen: hb
        } = window;
        (0, Bb.l)("look", `start: ${bb} client, dpr ${window.devicePixelRatio}, screen ${hb.width}x${hb.height}, pointer lock ${document.pointerLockElement?"MS":"free"}`), this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), (0, Bb.i)("look", this.dump))
      }
      outlier(bb) {
        const ub = this.tally;
        ub.outliers >= 20 ? ub.suppressed++ : (ub.outliers++, (0, Bb.l)("look", bb))
      }
      eventOutlier(bb) {
        const ub = this.tally;
        ub.eventLines >= 10 ? ub.suppressed++ : (ub.eventLines++, (0, Bb.l)("look", bb))
      }
      takeRecords() {
        var bb;
        const ub = null === (bb = this.take) || void 0 === bb ? void 0 : bb.call(this);
        if (ub && ub.length >= 2) {
          this.tally.lost += ub[0], this.tally.dropped += ub[1];
          for (let bb = 2; bb + 10 <= ub.length; bb += 10) this.record(ub, bb)
        }
      }
      droppedCopy() {
        this.tally.dropped++
      }
      endTake() {
        this.takeRecords(), this.take = null
      }
    }
    let Zb = null;

    function Xb(bb) {
      let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return Zb ??= new wb, Zb.start(bb, ub), Zb.record
    }

    function pb() {
      var bb;
      null === (bb = Zb) || void 0 === bb || bb.endTake()
    }

    function ob() {
      var bb;
      null === (bb = Zb) || void 0 === bb || bb.droppedCopy()
    }
  },
  8975: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Bb
    });
    const Bb = new Set(["chunkBorders"])
  },
  9124: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ub,
      c: () => Ob,
      g: () => ab
    });
    var Bb = hb(1463);

    function Ob(bb) {
      var ub;
      return {
        ...Ub.store,
        yaw: Ub.store.yaw + (null !== (ub = Bb.e[bb].previewYaw) && void 0 !== ub ? ub : 0)
      }
    }
    const Gb = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      Ub = {
        player: Gb,
        store: {
          ...Gb,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function Lb(bb, ub) {
      bb instanceof Promise ? bb.then(ub).catch((bb => {
        console.error("Couldn't open the preview", bb)
      })) : ub(bb)
    }
    class Yb {
      constructor(bb) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, Lb(bb, (bb => {
          this.closed ? bb.close() : (this.opened = bb, null !== this.size && bb.resize(this.size.width, this.size.height), null !== this.view && bb.show(this.view))
        }))
      }
      show(bb) {
        var ub;
        this.view = bb, null === (ub = this.opened) || void 0 === ub || ub.show(bb)
      }
      resize(bb, ub) {
        var hb;
        this.size = {
          width: bb,
          height: ub
        }, null === (hb = this.opened) || void 0 === hb || hb.resize(bb, ub)
      }
      close() {
        var bb;
        this.closed = !0, null === (bb = this.opened) || void 0 === bb || bb.close(), this.opened = null
      }
    }
    class Sb {
      constructor(bb) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(bb).then((bb => bb.ready)), Lb(bb, (bb => {
          this.closed ? bb.close() : (this.opened = bb, null !== this.size && bb.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var bb, ub;
        return null !== (bb = null === (ub = this.opened) || void 0 === ub ? void 0 : ub.isReady()) && void 0 !== bb && bb
      }
      setCosmetic(bb, ub) {
        var hb;
        null === (hb = this.opened) || void 0 === hb || hb.setCosmetic(bb, ub)
      }
      playEmote(bb) {
        var ub;
        null === (ub = this.opened) || void 0 === ub || ub.playEmote(bb)
      }
      setOrbit(bb) {
        var ub;
        null === (ub = this.opened) || void 0 === ub || ub.setOrbit(bb)
      }
      resetCamera() {
        var bb;
        null === (bb = this.opened) || void 0 === bb || bb.resetCamera()
      }
      async untilDrawn(bb) {
        var ub;
        await this.ready, await (null === (ub = this.opened) || void 0 === ub ? void 0 : ub.untilDrawn(bb))
      }
      resize(bb, ub) {
        var hb;
        this.size = {
          width: bb,
          height: ub
        }, null === (hb = this.opened) || void 0 === hb || hb.resize(bb, ub)
      }
      close() {
        var bb;
        this.closed = !0, null === (bb = this.opened) || void 0 === bb || bb.close(), this.opened = null
      }
    }
    const ab = new class {
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
        return new Yb(this.current().openMob(bb))
      }
      openPet(bb) {
        return new Yb(this.current().openPet(bb))
      }
      openMobLineup(bb) {
        return new Yb(this.current().openMobLineup(bb))
      }
      openCharacter(bb, ub) {
        return new Sb(this.current().openCharacter(bb, ub))
      }
    }
  },
  38868: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Hb,
      g: () => wb
    });
    var Bb = hb(148),
      Ob = hb(174),
      Gb = hb(1387),
      Ub = hb(2736),
      Lb = hb(1398),
      Yb = hb(36083),
      Sb = hb(612),
      ab = hb(38833);

    function Hb(bb) {
      (0, Ub.i)("matchmake_failed", bb, Bb.k[Bb.k.SHADER_PACK])
    }
    async function wb(bb, ub) {
      var hb;
      const Bb = null === (hb = await ab.shaderPackPage.preload()) || void 0 === hb ? void 0 : hb.listing,
        Ub = (0, Yb.b)();
      Bb && null !== Ub && await Lb.e.reportShaderPackSession(bb, {
        packId: Bb.packId,
        sourceHash: Bb.sourceHash,
        game: (0, Gb.d)(ub, Ob.r, "other"),
        playSessionId: Ub,
        visitSessionId: (0, Sb.b)()
      })
    }
  },
  38672: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Lb
    });
    var Bb = hb(16),
      Ob = hb(1184),
      Gb = hb(3256);
    const Ub = "Reconnecting";
    class Lb {
      constructor(bb) {
        this.hooks = bb, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = bb => {
          bb.persisted || this.leave()
        }, this.controller = new Gb.d((ub => bb.reconnect(ub)), {
          isSessionLive: () => !this.ended && bb.isLive(),
          onPhaseChanged: bb => {
            this.onPhaseChanged(bb)
          },
          onReconnected: ub => {
            bb.onReconnected(ub)
          },
          onGaveUp: ub => {
            !this.ended && bb.isLive() && bb.onGaveUp(this.sessionBased, ub)
          }
        })
      }
      onInitialInfo(bb, ub) {
        this.graceMs = bb, this.sessionBased = ub
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
          ub = this.controller.heldToken;
        this.end(), bb && "" !== ub && this.hooks.releaseSeat(ub)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(bb) {
        const ub = "frozen" === bb || "resuming" === bb;
        ub !== this.stopped && (this.stopped = ub, this.hooks.freeze(ub));
        const hb = "frozen" === bb || "resuming" === bb && this.frozen;
        hb && !this.frozen ? (0, Ob.l)(Ub) : !hb && this.frozen && (0, Ob.j)(Ub), this.frozen = hb, this.setListening("connected" !== bb), Bb.i.vp(Gb.k, hb ? "frozen" : bb)
      }
      setListening(bb) {
        bb !== this.listening && (this.listening = bb, bb ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  38679: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Bb
    });
    class Bb {
      constructor(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = bb, this.now = ub, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const bb = this.now(),
            ub = bb - this.lastCheckAt <= 2e3;
          this.lastCheckAt = bb;
          const hb = "visible" === document.visibilityState;
          !hb || ub && this.wasVisible || (this.resumedAt = bb), this.wasVisible = hb, hb && bb - this.lastHeardAt > 12e3 && bb - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = ub(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  9016: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Gb
    });
    var Bb = hb(981);

    function Ob() {
      var bb, ub;
      return null !== (bb = null === (ub = screen.orientation) || void 0 === ub ? void 0 : ub.type) && void 0 !== bb ? bb : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const Gb = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && Ob() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = Ob(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, Bb.cX)(new Error("Game view size held for 60 s"))
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
        let ub = !1;
        return () => {
          if (ub && this.isHeld()) return null;
          const hb = bb();
          return ub ||= null !== hb, hb
        }
      }
      onRelease(bb) {
        return this.resizers.add(bb), () => {
          this.resizers.delete(bb)
        }
      }
    }
  },
  38856: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ob
    });
    let Bb = !1;
    async function Ob(bb, ub) {
      if (!Bb) {
        Bb = !0;
        try {
          const [{
            reloadBloxd: Bb
          }, {
            NotificationProvider: Ob
          }] = await Promise.all([Promise.resolve().then((() => hb(1622))), Promise.resolve().then((() => hb(1249)))]);
          if (!bb || !0 === await Ob.showPromptPopup({
              title: "Unsaved changes",
              subtitle: "Exit and lose your unsaved changes?",
              confirmText: "Exit",
              destructive: !0,
              cancelText: "Cancel",
              unlockPointerKey: "replayExitUnsavedChanges"
            }).getResult()) return void Bb(ub)
        } catch (Ob) {
          console.error("Leaving the replay failed", Ob)
        }
        Bb = !1
      }
    }
  },
  38692: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Sb,
      h: () => ab
    });
    var Bb = hb(1611),
      Ob = hb(191),
      Gb = hb(1593),
      Ub = hb(1667),
      Lb = hb(1103),
      Yb = hb(1038);
    async function Sb(bb, ub) {
      return function(bb) {
        return "object" === typeof bb && null !== bb && bb.code === Ob.d.VpnIp.code
      }(ub) && function(bb) {
        return Gb.e.supports("appCheck") && bb.isLoggedIn() && !bb.hasTriedAppAttestation()
      }(bb) && await async function(bb) {
        try {
          const {
            token: ub
          } = await (0, Ub.d)(), {
            "3PSIDMCPP": hb
          } = await (0, Yb.postJsonWithMetricsCookiesAndJsonResponse)(`${Lb.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: ub
          }, {
            retries: 0
          }, bb.getMetricsCookies());
          return bb.setAppAttestedAuthJwt(hb), !0
        } catch (ub) {
          return ub instanceof Bb.b && "failed" === ub.code ? (console.warn("The app couldn't get an App Check token:", ub), bb.markAppAttestationTried()) : console.error("Failed to attest the app:", ub), !1
        }
      }(bb)
    }
    async function ab(bb, ub) {
      try {
        return await ub()
      } catch (hb) {
        if (!await Sb(bb, hb)) throw hb
      }
      return ub()
    }
  },
  40474: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Yb
    });
    var Bb = hb(1636);
    const Ob = 33177600,
      Gb = 3e4;
    let Ub = !1;

    function Lb(bb, ub, hb) {
      if (!bb.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (Ub) return Promise.reject(new Error("A screenshot is already being taken"));
      Ub = !0;
      const Bb = function(bb, ub, hb) {
        const Bb = Math.max(1, bb),
          Gb = Math.max(1, ub),
          Ub = Math.min(1, hb / Math.max(Bb, Gb), Math.sqrt(Ob / (Bb * Gb)));
        return {
          width: Math.max(1, Math.floor(Bb * Ub)),
          height: Math.max(1, Math.floor(Gb * Ub))
        }
      }(ub, hb, bb.maxTextureSize);
      return bb.resize(Bb.width, Bb.height), new Promise(((ub, hb) => {
        let Bb, Ob = 2,
          Lb = null;
        const Yb = () => {
          var ub;
          Ub = !1, null === (ub = Lb) || void 0 === ub || ub(), clearTimeout(Bb), bb.restoreSize()
        };
        Bb = setTimeout((() => {
          Yb(), hb(new Error("No frame was drawn to capture"))
        }), Gb), Lb = bb.onFrameDrawn((() => {
          if (Ob--, Ob > 0) return;
          const {
            canvas: Bb
          } = bb, Gb = {
            width: Bb.width,
            height: Bb.height
          };
          try {
            Bb.toBlob((bb => {
              bb ? ub({
                blob: bb,
                ...Gb
              }) : hb(new Error("The canvas gave no image"))
            }), "image/png")
          } catch (Ub) {
            hb(Ub)
          } finally {
            Yb()
          }
        }))
      }))
    }
    async function Yb(bb, ub, hb) {
      try {
        const Ob = await Lb(bb, ub, hb);
        (0, Bb.e)(Ob.blob, `bloxd-screenshot-${Ob.width}x${Ob.height}-${Date.now()}.png`)
      } catch (Ob) {
        console.error("Error taking screenshot:", Ob)
      }
    }
  },
  39241: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Sb
    });
    var Bb = hb(1593),
      Ob = hb(86),
      Gb = hb(115),
      Ub = hb(36051),
      Lb = hb(604),
      Yb = hb(1613);

    function Sb(bb) {
      var ub, hb, Yb, Sb;
      const Hb = (0, Ub.b)();
      return {
        game: bb,
        os: (0, Ob.getOperatingSystem)(),
        decodedAudioMiB: null === Hb ? null : (0, Lb.I)(Hb.bytes),
        songsDecoded: null !== (ub = null === Hb || void 0 === Hb ? void 0 : Hb.songsDecoded) && void 0 !== ub ? ub : null,
        sheetsDecoded: null !== (hb = null === Hb || void 0 === Hb ? void 0 : Hb.sheetsDecoded) && void 0 !== hb ? hb : null,
        siteUsed: Gb.s,
        appVersion: (null === (Yb = Bb.e.appHello) || void 0 === Yb ? void 0 : Yb.appVersion) || null,
        appBuild: (null === (Sb = Bb.e.appHello) || void 0 === Sb ? void 0 : Sb.build) || null,
        msSinceVideoAd: ab()
      }
    }

    function ab() {
      if ((0, Yb.c)()) return 0;
      const bb = (0, Yb.b)();
      return null === bb ? null : Math.round(performance.now() - bb.endedAt)
    }(0, Yb.j)(Lb.H)
  },
  36051: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Gb,
      f: () => Ob
    });
    let Bb = null;

    function Ob(bb) {
      Bb = bb
    }

    function Gb() {
      return null === Bb ? null : Bb()
    }
  },
  38688: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => wb,
      f: () => ab
    });
    var Bb = hb(191),
      Ob = hb(1709),
      Gb = hb(1713),
      Ub = hb(8626);
    const Lb = [250, 500, 1e3, 2e3, 1250],
      Yb = 406;

    function Sb(bb) {
      if ("object" !== typeof bb || null === bb) return !1;
      const {
        code: ub,
        message: hb
      } = bb, Ob = Bb.d.duplicateLobbyNameError;
      return (ub === Ob.code || ub === Yb) && (hb === Ob.text || hb === Ob.text + Bb.i)
    }
    async function ab(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ob.b;
      for (let Ob = 0;; Ob++) {
        let Ub;
        (0, Gb.r)(ub);
        try {
          return await bb()
        } catch (Bb) {
          if (Ub = Lb[Ob], void 0 === Ub || !Sb(Bb)) throw Bb
        }
        await hb(Ub, ub)
      }
    }
    const Hb = new Set([Bb.d.duplicateLobbyNameError.code, Bb.d.lobbyCantBeCreated.code, Bb.d.roomDisposedEarlyError.code, Bb.d.roomDisposedLateError.code, Bb.d.serverRoomLimitReached.code]);

    function wb(bb) {
      if (Sb(bb)) return !0;
      const ub = (0, Ub.e)(bb);
      return "number" === typeof ub && Hb.has(ub)
    }
  },
  8626: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Gb,
      e: () => Ub,
      h: () => Lb,
      k: () => Sb,
      n: () => Yb
    });
    var Bb = hb(191),
      Ob = hb(4393);

    function Gb(bb) {
      return Ub(bb) === Bb.d.gameOrPluginOnPlayerAuthRejected.code
    }

    function Ub(bb) {
      return "object" === typeof bb && null !== bb ? bb.code : void 0
    }

    function Lb(bb) {
      var ub;
      return null !== (ub = Object.keys(Ob.c).find((ub => Ob.c[ub] === bb))) && void 0 !== ub ? ub : null
    }

    function Yb(bb) {
      return "notWhitelisted" === bb ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const Sb = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  38786: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ub
    });
    var Bb = hb(298),
      Ob = hb(115),
      Gb = hb(29);

    function Ub() {
      Gb.j.setItem(Bb.Qb, Gb.j.getItem(Bb.Qb) + 1), (0, Ob.j)() && Gb.j.setItem(Bb.Nb, Gb.j.getItem(Bb.Nb) + 1)
    }
  },
  36074: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => lb,
      d: () => Kb
    });
    var Bb = hb(934),
      Ob = hb(595),
      Gb = hb(314),
      Ub = hb(937),
      Lb = hb(599),
      Yb = hb(625),
      Sb = hb(4281),
      ab = hb(86),
      Hb = hb(115),
      wb = hb(1622),
      Zb = hb(101),
      Xb = hb(36083),
      pb = hb(29),
      ob = hb(612),
      Ab = hb(36091);

    function lb() {
      var bb, ub;
      return [...null !== (bb = navigator.languages) && void 0 !== bb ? bb : [null !== (ub = navigator.language) && void 0 !== ub ? ub : "none"], "EN-gb"]
    }

    function Kb(bb, ub, hb, Kb, Wb) {
      const Cb = (0, Bb.i)(ub) ? (0, Bb.p)(ub) : null,
        db = {
          cookies: (0, wb.getAllCookiesForGameNameWithVariation)(ub),
          isMobile: (0, ab.isMobile)(),
          isUsingCustomGameTexturePack: null !== Cb && Wb(Cb),
          generalCookies: {
            joinDiscord: !!pb.j.getItem("DiscordPressed"),
            newGo: Sb.e,
            ...bb.getMetricsCookies(),
            trafficCode: Kb,
            compliance: ab.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, ab.getBrowserName)(),
            version: (0, ab.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, ab.getPlatformType)(),
            deviceType: (0, Zb.b)()
          },
          isLoggedIn: bb.isLoggedIn(),
          lobbyName: hb,
          languages: lb(),
          version: Ob.b,
          siteUsed: Hb.s,
          subsiteUsed: Hb.A,
          playSessionId: (0, Xb.h)(ub),
          visitSessionId: (0, ob.b)(),
          clientReason: Lb.f.reason,
          budgetBasis: (0, Ab.g)(),
          ...null !== Yb.m && {
            diagClaim: Yb.m.claimId
          }
        };
      return null !== Cb && (0, Gb.Ic)(Cb) ? (db.lobbyName = (0, Bb.h)(Cb, (0, Bb.l)(ub), hb), {
        roomName: `classic_${Ub.c}`,
        joinOptions: db
      }) : {
        roomName: ub,
        joinOptions: db
      }
    }
  },
  40114: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Lb
    });
    var Bb = hb(39237);

    function Ob(bb) {
      return {
        current: () => bb,
        watch: () => () => {}
      }
    }

    function Gb() {}
    const Ub = Object.freeze([0, 0, 0]),
      Lb = {
        states: {
          health: Ob({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: Ob({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: Ob({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: Ob({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: Ob({}),
          creativeVisibility: Ob({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: Ob(null),
          heldItemAim: Ob({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: Ob(!1),
          gliderBoostFuel: Ob(0),
          flight: Ob({
            canFly: !1,
            flying: !1
          }),
          crafting: Ob({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: Ob({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: Ob({}),
          fullInventory: Ob(!1),
          crosshairTarget: Ob({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: Ob(!0),
          freeCamera: Ob({
            allowed: !1,
            movesFly: !1
          }),
          replay: Ob(null),
          replayEdits: Ob(null),
          replayRecorder: Ob({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: Ob(!1)
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
          selectHotbarSlot: Gb,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: Gb,
          setInventoryOpen: Gb,
          changeIronChestPasskey: Gb,
          dragReplayCamera: Gb,
          applyTemporaryThirdPerson: Gb,
          holdEmoteWheel: Gb,
          recordFlyingMiddleText: Gb,
          focusCrafting: Gb,
          craftRecipe: () => ({
            aS: 0,
            fY: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: Gb,
          setShopOpen: Gb,
          buyShopItem: Gb,
          lobbyManage: Gb,
          sendChatMessage: Gb,
          ignorePlayer: Gb,
          reportPlayer: Gb,
          reportWorldCodeChat: Gb,
          requestDiscordReportKey: Gb,
          reportLobbyOrGame: Gb,
          playEmote: Gb,
          updateMyCosmetic: Gb,
          writeOnBoard: Gb,
          writeBook: Gb,
          writeNameTag: Gb,
          setCustomLobbyBlock: Gb,
          openIronChest: Gb,
          sendCodeCollab: Gb,
          clickCodeBlock: Gb,
          bindCustomButtonKeys: Gb,
          pressCustomButton: Gb,
          moveReplayFreecam: Gb,
          holdReplayFreecamVertical: Gb,
          respawn: Gb,
          wakeUp: Gb,
          requestLeaderboard: Gb,
          completeTask: Gb,
          setServerCookie: Gb,
          answerUiRequest: Gb,
          chooseRewardedAd: Gb,
          setCameraZoom: Gb,
          setFreeCameraMovesFly: Gb,
          setBlockHighlight: Gb,
          setCrosshairInteractPrompt: Gb,
          setLookSensitivity: Gb,
          replayAction: Gb,
          setReplayPlaying: Gb,
          seekReplay: Gb,
          setReplayCameraMode: Gb,
          syncReplayCameraMode: Gb,
          setReplayCameraKeyframe: Gb,
          moveReplayCameraKeyframe: Gb,
          deleteReplayCameraKeyframes: Gb,
          setReplayPlaybackMark: Gb,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: Gb,
          exportReplayVideo: Gb,
          toggleRecording: Gb,
          saveClip: Gb,
          setRecorderPrefs: Gb,
          setReplayViewerOpen: Gb
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => Bb.d,
          worldCodeAiGameState: () => Bb.g
        },
        lookups: {
          localPos: () => Ub,
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
  36091: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => db,
      g: () => Cb,
      i: () => Wb
    });
    var Bb = hb(191),
      Ob = hb(86),
      Gb = hb(2710),
      Ub = hb(4156),
      Lb = hb(604),
      Yb = hb(36095);
    const Sb = 1048576,
      ab = 1024 * Sb,
      Hb = 400 * Sb,
      wb = 147456,
      Zb = .5,
      Xb = 1.5 * ab,
      pb = 768 * Sb;

    function ob(bb) {
      return Hb + bb * wb
    }

    function Ab(bb, ub, hb) {
      var Ob, Ub;
      let {
        footprintBytes: Lb,
        basis: Sb,
        namesLimit: Ab
      } = function(bb) {
        const {
          os: ub,
          deviceMemory: hb
        } = bb;
        if ("ios" === ub) switch ((0, Gb.f)(bb)) {
          case "ipad_m":
            return {
              footprintBytes: ob(Yb.e), basis: "ipad-m", namesLimit: !1
            };
          case "ipad":
            return {
              footprintBytes: pb, basis: "ipad", namesLimit: !0
            };
          case "iphone_6gb":
            return {
              footprintBytes: Xb, basis: "iphone-6gb", namesLimit: !0
            };
          case "iphone":
            return {
              footprintBytes: pb, basis: "iphone", namesLimit: !0
            }
        }
        return "number" === typeof hb && Number.isFinite(hb) && hb > 0 ? {
          footprintBytes: hb * ab * Zb,
          basis: `memory-${hb}`,
          namesLimit: !0
        } : "android" === ub ? {
          footprintBytes: pb,
          basis: "android",
          namesLimit: !0
        } : {
          footprintBytes: ob(Yb.k),
          basis: "unreported",
          namesLimit: !1
        }
      }(bb);
      if (hb) {
        const bb = Math.min(Lb, ob(Yb.e));
        Lb = Hb + Math.max(0, bb - Hb) / 2, Sb += "+killed", Ab = !0
      }
      null !== ub && ob(ub) < Lb && (Lb = ob(ub), Sb += "+learned", Ab = !0);
      const lb = function(bb) {
          const ub = Math.floor((bb - Hb) / wb);
          return Math.min(Yb.e, Math.max(Yb.g, ub))
        }(Lb),
        Kb = (0, Yb.m)(lb);
      return {
        footprintBytes: Lb,
        shedFootprintBytes: Ab ? Math.max(Lb, ob(lb)) : null,
        chunkCap: lb,
        maxHorizDistance: null !== (Ob = null === Kb || void 0 === Kb ? void 0 : Kb.horizontal) && void 0 !== Ob ? Ob : Bb.e.maxChunkHorizAddDistance,
        maxVertDistance: null !== (Ub = null === Kb || void 0 === Kb ? void 0 : Kb.vertical) && void 0 !== Ub ? Ub : Bb.e.maxChunkVertAddDistance,
        basis: Sb
      }
    }
    let lb = null;

    function Kb() {
      return Ab({
        os: (0, Ob.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, Gb.h)()
      }, (0, Ub.e)(), (0, Lb.E)("wasm").length > 0)
    }

    function Wb() {
      return lb ??= Kb(), lb
    }

    function Cb() {
      var bb;
      return (null !== (bb = lb) && void 0 !== bb ? bb : Kb()).basis
    }

    function db(bb, ub) {
      return bb.setChunkCap(ub.chunkCap)
    }
  },
  40470: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Ub,
      h: () => Gb
    });
    var Bb = hb(2951),
      Ob = hb(934);

    function Gb(bb, ub) {
      return null !== bb.gameSource && (0, Bb.k)(ub, bb.gameSource)
    }

    function Ub(bb, ub) {
      if (null === bb.gameSource || "" === bb.gameSource || null === ub) return !0;
      const hb = (0, Ob.i)(ub) ? (0, Ob.p)(ub) : null;
      return null !== hb && Gb(bb, hb)
    }
  },
  40444: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Lb
    });
    var Bb = hb(571),
      Ob = hb(40452),
      Gb = hb(40413);
    async function Ub(bb) {
      const ub = await (0, Ob.f)({
        Helmet: hb(37553),
        Chestplate: hb(37557),
        Gauntlets: hb(37578),
        Leggings: hb(37563),
        Boots: hb(37571)
      } [Bb.e[bb]]);
      try {
        return (0, Gb.n)(ub)
      } finally {
        ub.close()
      }
    }
    const Lb = new class {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ub,
          ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ob.l;
        this.decode = bb, this.register = ub, this.decoded = new Map
      }
      warm() {
        for (let bb = 0; bb < Bb.e.length; bb++) this.part(bb).catch((ub => {
          console.warn(`The grayscale armour ${Bb.e[bb]} image didn't decode ahead of use`, ub)
        }))
      }
      async load(bb, ub) {
        const {
          width: hb,
          height: Gb,
          pixels: Ub
        } = await this.part(bb), Lb = new ImageData(function(bb, ub) {
          const hb = new Uint8ClampedArray(bb.length);
          for (let Bb = 0; Bb < bb.length; Bb += 4) hb[Bb] = Math.round(bb[Bb] * ub[0] / 255), hb[Bb + 1] = Math.round(bb[Bb + 1] * ub[1] / 255), hb[Bb + 2] = Math.round(bb[Bb + 2] * ub[2] / 255), hb[Bb + 3] = bb[Bb + 3];
          return hb
        }(Ub, function(bb) {
          return [bb >>> 16 & 255, bb >>> 8 & 255, 255 & bb]
        }(ub)), hb, Gb);
        let Yb;
        try {
          Yb = await createImageBitmap(Lb, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          })
        } catch (Sb) {
          throw new Ob.c("decode", `grayscale armour ${Bb.e[bb]}`, {
            cause: Sb
          })
        }
        return {
          id: this.register(Yb),
          width: hb,
          height: Gb
        }
      }
      part(bb) {
        const ub = this.decoded.get(bb);
        if (void 0 !== ub) return ub;
        const hb = this.decode(bb).catch((ub => {
          throw this.decoded.delete(bb), ub instanceof Ob.c ? ub : new Ob.c("decode", `grayscale armour ${Bb.e[bb]}`, {
            cause: ub
          })
        }));
        return this.decoded.set(bb, hb), hb
      }
    }
  },
  40435: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ub,
      c: () => ob,
      e: () => ab,
      g: () => Hb,
      k: () => pb
    });
    var Bb = hb(40391),
      Ob = hb(40444),
      Gb = hb(40452);
    const Ub = 396,
      Lb = 1,
      Yb = 2,
      Sb = 3,
      ab = {
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
      Hb = {
        File: 0,
        Item: 1
      },
      wb = 0,
      Zb = 1,
      Xb = 2;

    function pb(bb) {
      const ub = (0, Bb.q)();
      ub.catch((() => {}));
      let Ob = null;
      return {
        glbUrl: bb,
        lifeformAtlasUrl: async bb => (await ub).lifeformAtlasUrl(bb),
        armourAtlasUrl: async () => (await hb.e(202).then((() => hb(33950)))).armourAtlasUrl,
        capeUrl: async bb => (await ub).capeUrl(bb),
        attachmentImageUrl: async bb => (await ub).attachmentImageUrl(bb),
        blockImageUrl: async bb => (await ub).blockImageUrl(bb),
        groupAtlasUrl: async bb => (await ub).groupAtlasUrl(bb),
        particleTextureUrl: async bb => (await ub).particleTextureUrl(bb),
        particleItemUrl: async bb => (Ob ??= hb.e(38).then((() => hb(51036))).catch((bb => {
          throw Ob = null, bb
        })), (await Ob).particleItemUrl(bb))
      }
    }
    class ob {
      constructor(bb, ub) {
        var hb, Ub, Lb, Yb;
        let Sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.sources = bb, this.onFailure = ub, this.loading = new Map, this.glbImages = new Map, this.glbWrittenImages = new Map, this.glbTakenCount = new Map, this.answered = new Map, this.ready = [], this.load = void 0, this.release = void 0, this.fetchFile = void 0, this.greyscaleArmour = void 0, this.FZ = !1, this.load = null !== (hb = Sb.load) && void 0 !== hb ? hb : (bb, ub) => (0, Gb.j)(bb, Sb.fetchImage, ub), this.release = null !== (Ub = Sb.release) && void 0 !== Ub ? Ub : Gb.m, this.fetchFile = null !== (Lb = Sb.fetchFile) && void 0 !== Lb ? Lb : bb => (0, Bb.j)(bb), this.greyscaleArmour = null !== (Yb = Sb.greyscaleArmour) && void 0 !== Yb ? Yb : Ob.e
      }
      get waiting() {
        return this.ready.length
      }
      get inFlight() {
        return this.loading.size
      }
      glbWritten(bb, ub) {
        this.glbWrittenImages.set(bb, rb(ub))
      }
      glbTaken(bb, ub) {
        const hb = this.glbWrittenImages.get(bb);
        this.glbWrittenImages.delete(bb), ub && this.setGlbImages(bb, void 0 !== hb && hb.length > 0 ? hb : void 0)
      }
      setGlbImages(bb, ub) {
        var hb;
        this.glbTakenCount.set(bb, (null !== (hb = this.glbTakenCount.get(bb)) && void 0 !== hb ? hb : 0) + 1), void 0 === ub ? this.glbImages.delete(bb) : this.glbImages.set(bb, ub);
        const Bb = [];
        for (const {
            key: Ob
          }
          of this.loading.values()) Ob.kind === ab.Glb && Ob.word === bb && Bb.push(Ob);
        for (let Ob = this.ready.length - 1; Ob >= 0; Ob--) {
          const {
            key: ub,
            id: hb
          } = this.ready[Ob];
          ub.kind === ab.Glb && ub.word === bb && (this.ready.splice(Ob, 1), null !== hb && (this.answered.delete(hb), this.release(hb)), Bb.push(ub))
        }
        this.loadAgain(Bb)
      }
      onEvent(bb) {
        if (this.FZ) return;
        const ub = new DataView(bb.buffer, bb.byteOffset, bb.byteLength);
        for (let hb = 0; hb + 8 <= bb.byteLength; hb += 8) {
          const bb = ub.getUint8(hb),
            Bb = ub.getUint32(hb + 4, !0);
          if (bb === Sb) {
            this.answered.delete(Bb), this.release(Bb);
            continue
          }
          const Ob = {
            kind: ub.getUint8(hb + 1),
            index: ub.getUint8(hb + 2),
            word: Bb
          };
          bb === Lb ? this.want(Ob) : bb === Yb && this.loading.delete(Ab(Ob))
        }
      }
      reload(bb, ub) {
        const hb = hb => bb.includes(hb.kind) && (void 0 === ub || ub(hb)),
          Bb = new Map;
        for (const Ob of this.answered.values()) hb(Ob) && Bb.set(Ab(Ob), Ob);
        for (const [Ob, {
            key: Gb
          }] of this.loading) hb(Gb) && Bb.set(Ob, Gb);
        this.loadAgain(Bb.values())
      }
      loadAgain(bb) {
        for (const ub of bb) this.loading.delete(Ab(ub)), this.want(ub)
      }
      drain(bb) {
        if (null !== bb)
          for (; this.ready.length > 0;) {
            if (!bb(Ub, 0, this.ready[0].record)) return;
            this.ready.shift()
          }
      }
      dispose() {
        this.FZ = !0, this.loading.clear(), this.ready.length = 0;
        for (const bb of this.answered.keys()) this.release(bb);
        this.answered.clear()
      }
      want(bb) {
        const ub = Ab(bb);
        if (this.loading.has(ub)) return;
        const hb = {
          key: bb
        };
        this.loading.set(ub, hb), this.loadKey(bb).then((Bb => {
          this.FZ || this.loading.get(ub) !== hb ? this.release(Bb.id) : (this.loading.delete(ub), this.answered.set(Bb.id, bb), this.ready.push({
            record: Kb(bb, wb, Bb),
            key: bb,
            id: Bb.id
          }))
        }), (Bb => {
          if (this.FZ || this.loading.get(ub) !== hb) return;
          this.loading.delete(ub), this.onFailure({
            key: bb,
            error: Bb
          });
          const Ob = Bb instanceof Gb.c && "decode" === Bb.stage ? Zb : Xb;
          this.ready.push({
            record: Kb(bb, Ob, null),
            key: bb,
            id: null
          })
        }))
      }
      async loadKey(bb) {
        switch (bb.kind) {
          case ab.Glb:
            return this.load(await this.glbImage(bb), "none");
          case ab.LifeformAtlas:
            return this.load(lb(await this.sources.lifeformAtlasUrl(bb.word), bb), "none");
          case ab.ArmourAtlas:
            return this.load(lb(await this.sources.armourAtlasUrl(), bb), "none");
          case ab.Cape:
            return this.load(lb(await this.sources.capeUrl(bb.word), bb), "none");
          case ab.AttachmentImage:
            return this.load(lb(await this.sources.attachmentImageUrl(bb.word), bb), "none");
          case ab.GroupAtlas:
            return this.load(lb(await this.sources.groupAtlasUrl(bb.word), bb), "none");
          case ab.BlockImage:
            return this.load(lb(await this.sources.blockImageUrl(bb.word), bb), "none");
          case ab.Particle: {
            const ub = await (bb.index === Hb.Item ? this.sources.particleItemUrl(bb.word) : this.sources.particleTextureUrl(bb.word));
            return this.load(lb(ub, bb), "flipY")
          }
          case ab.GreyscaleArmour:
            return this.greyscaleArmour.load(bb.index, bb.word);
          default:
            throw new Gb.c("fetch", `image kind ${bb.kind}`, {
              cause: null
            })
        }
      }
      async glbImage(bb) {
        var ub;
        let hb = this.glbImages.get(bb.word);
        if (void 0 === hb) {
          const ub = this.glbTakenCount.get(bb.word),
            Bb = lb(await this.sources.glbUrl(bb.word), bb);
          try {
            hb = rb(await this.fetchFile(Bb))
          } catch (Ob) {
            throw new Gb.c("fetch", Bb, {
              cause: Ob
            })
          }
          this.glbTakenCount.get(bb.word) === ub && this.glbImages.set(bb.word, hb)
        }
        const Bb = null === (ub = hb) || void 0 === ub ? void 0 : ub[bb.index];
        if (!Bb) throw new Gb.c("decode", `image ${bb.index} of file ${2147483647&bb.word}`, {
          cause: null
        });
        return Bb
      }
    }

    function Ab(bb) {
      let {
        kind: ub,
        index: hb,
        word: Bb
      } = bb;
      return `${ub}:${hb}:${Bb}`
    }

    function lb(bb, ub) {
      if (null === bb) throw new Gb.c("fetch", `no URL for image ${Ab(ub)}`, {
        cause: null
      });
      return bb
    }

    function Kb(bb, ub, hb) {
      var Bb, Ob, Gb;
      const Ub = new Uint8Array(16),
        Lb = new DataView(Ub.buffer);
      return Lb.setUint8(0, bb.kind), Lb.setUint8(1, bb.index), Lb.setUint8(2, ub), Lb.setUint32(4, bb.word, !0), Lb.setUint32(8, null !== (Bb = null === hb || void 0 === hb ? void 0 : hb.id) && void 0 !== Bb ? Bb : 0, !0), Lb.setUint16(12, Math.min(null !== (Ob = null === hb || void 0 === hb ? void 0 : hb.width) && void 0 !== Ob ? Ob : 0, 65535), !0), Lb.setUint16(14, Math.min(null !== (Gb = null === hb || void 0 === hb ? void 0 : hb.height) && void 0 !== Gb ? Gb : 0, 65535), !0), Ub
    }
    const Wb = 1179937895,
      Cb = 1313821514,
      db = 5130562;

    function rb(bb) {
      var ub;
      const hb = new DataView(bb.buffer, bb.byteOffset, bb.byteLength);
      if (bb.byteLength < 20 || hb.getUint32(0, !0) !== Wb || hb.getUint32(16, !0) !== Cb) return [];
      let Bb, Ob = 20 + hb.getUint32(12, !0);
      try {
        Bb = JSON.parse((new TextDecoder).decode(bb.subarray(20, Ob)))
      } catch {
        return []
      }
      for (; Ob + 8 <= bb.byteLength && hb.getUint32(Ob + 4, !0) !== db;) Ob += 8 + hb.getUint32(Ob, !0);
      const Gb = null !== (ub = Bb.images) && void 0 !== ub ? ub : [];
      if (0 === Gb.length || Ob + 8 > bb.byteLength) return Gb.map((() => null));
      const Ub = bb.subarray(Ob + 8, Math.min(bb.byteLength, Ob + 8 + hb.getUint32(Ob, !0)));
      return Gb.map((bb => {
        var ub, hb, Ob;
        const Gb = void 0 === bb.bufferView || null === (ub = Bb.bufferViews) || void 0 === ub ? void 0 : ub[bb.bufferView];
        if (!Gb || 0 !== (null !== (hb = Gb.buffer) && void 0 !== hb ? hb : 0) || void 0 === Gb.byteLength) return null;
        const Lb = null !== (Ob = Gb.byteOffset) && void 0 !== Ob ? Ob : 0,
          Yb = Lb + Gb.byteLength;
        return Yb <= Ub.byteLength ? Ub.slice(Lb, Yb) : null
      }))
    }
  },
  40116: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ub,
      d: () => Gb,
      h: () => Ob
    });
    let Bb = null;

    function Ob(bb) {
      Bb = bb
    }

    function Gb(bb) {
      Bb === bb && (Bb = null)
    }

    function Ub() {
      var bb;
      null === (bb = Bb) || void 0 === bb || bb()
    }
  },
  36201: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => ab,
      g: () => wb,
      h: () => Ab,
      i: () => Sb
    });
    var Bb = hb(13),
      Ob = hb(2273),
      Gb = hb(2276),
      Ub = hb(2280),
      Lb = hb(2358),
      Yb = hb(16);

    function Sb(bb, ub) {
      return (!(0, Ub.e)() || 0 === bb && 0 === ub) && (0, Gb.y)(Ob.i.Joystick, 0, bb, ub, 0)
    }
    const ab = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function Hb(bb) {
      return bb.classList.contains("TouchKeyHit") && Zb() ? null : bb.firstElementChild
    }

    function wb(bb) {
      return bb.classList.contains("TouchKeyHit") && !bb.classList.contains("CanvasZone") ? {
        whole: !Zb(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: Xb(Hb(bb))
      }
    }

    function Zb() {
      return document.documentElement.classList.contains(Lb.k)
    }

    function Xb(bb) {
      return !(bb instanceof HTMLElement) || bb.offsetWidth <= 0 || bb.offsetHeight <= 0 ? null : {
        width: bb.offsetWidth,
        height: bb.offsetHeight
      }
    }

    function pb(bb, ub) {
      const hb = bb => Math.min(65535, Math.round(4 * bb));
      return (hb(bb) | hb(ub) << 16) >>> 0
    }

    function ob(bb) {
      return {
        x: bb.left + bb.width / 2,
        y: bb.top + bb.height / 2,
        radius: Math.min(bb.width, bb.height) / 2
      }
    }
    const Ab = new class {
      constructor(bb) {
        this.write = bb, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        ub ? this.elements.set(bb, {
          element: ub,
          hidden: hb
        }) : this.elements.delete(bb), this.measureOne(bb)
      }
      measure() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = bb.left, this.canvasTop = bb.top;
        for (const ub of this.elements.keys()) this.measureOne(ub)
      }
      hitZone(bb, ub) {
        let hb = null,
          Bb = 1;
        for (const Ob of this.elements.keys()) {
          const Gb = this.shown(Ob);
          if (!Gb) continue;
          const {
            rect: Ub,
            element: Lb
          } = Gb, Yb = ob(Ub), Sb = Math.max(0, Ub.width / 2 - Yb.radius), ab = Math.max(0, Ub.height / 2 - Yb.radius), wb = Math.max(0, Math.abs(bb - Yb.x) - Sb), Zb = Math.max(0, Math.abs(ub - Yb.y) - ab), pb = Lb.firstElementChild;
          let Ab = Math.hypot(wb, Zb) / Yb.radius;
          const lb = Xb(Hb(Lb));
          lb && (Ab = Math.min(Ab, Math.max(2 * Math.abs(bb - Yb.x) / lb.width, 2 * Math.abs(ub - Yb.y) / lb.height))), Ab < Bb && (hb = {
            code: Ob,
            element: Lb,
            key: pb,
            ...Yb
          }, Bb = Ab)
        }
        return hb
      }
      measureOne(bb) {
        const ub = this.shown(bb);
        if (!ub) return void this.write(Ob.i.TouchZone, bb, 0, 0, 0);
        const {
          rect: hb,
          element: Bb
        } = ub, Gb = ob(hb);
        this.write(Ob.i.TouchZone, bb, Gb.x - this.canvasLeft, Gb.y - this.canvasTop, pb(hb.width, hb.height));
        const Ub = Xb(Hb(Bb));
        this.write(Ob.i.TouchZone, 256 | bb, 0, 0, Ub ? pb(Ub.width, Ub.height) : 0)
      }
      shown(bb) {
        const ub = this.elements.get(bb),
          hb = Bb.d.get("worldPanelHud");
        if (!ub || ub.hidden || "none" === hb) return null;
        const Ob = ub.element.getBoundingClientRect();
        return Ob.width <= 0 || Ob.height <= 0 ? null : {
          rect: Ob,
          element: ub.element
        }
      }
    }(Gb.y);
    (0, Yb.l)(Lb.e, (() => {
      Ab.measure()
    }))
  },
  40326: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Yb,
      c: () => Sb
    });
    var Bb = hb(40333),
      Ob = hb(38692),
      Gb = hb(36074),
      Ub = hb(40256),
      Lb = hb(40301);
    const Yb = Bb.b.timeForPlayerToConnect - 1e4;
    async function Sb(bb, ub, hb, Bb) {
      let Yb;
      try {
        Yb = await bb.getTrafficCode()
      } catch (Xb) {
        throw console.error("[bloxd-wasm-client] could not get a traffic code", Xb), new Lb.y(Xb)
      }
      const {
        gameNameWithVariation: Sb,
        lobbyName: ab
      } = ub, Hb = () => {
        const ub = (0, Gb.d)(bb, Sb, ab, Yb, (bb => {
          var ub;
          return null !== (ub = null === hb || void 0 === hb ? void 0 : hb.isUsingCustomGameTexturePack(bb)) && void 0 !== ub && ub
        }));
        ub.joinOptions.wasmClient = !0;
        const Ob = (0, Ub.E)();
        return null !== Ob && (ub.joinOptions.renderBackend = Ob), ub.joinOptions.joinAdHold = Bb, ub
      }, {
        roomName: wb,
        joinOptions: Zb
      } = Hb();
      return {
        endpoint: ub.endpoint,
        roomName: wb,
        joinOptions: Zb,
        session: {
          gameNameWithVariation: Sb,
          lobbyName: ab,
          playerDbId: bb.whamm
        },
        optionsAfterRefusal: async ub => await (0, Ob.d)(bb, ub) ? Hb().joinOptions : null
      }
    }
  },
  4815: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Lb,
      g: () => Ub
    });
    var Bb = hb(2951),
      Ob = hb(4819);
    let Gb = null;

    function Ub(bb, ub) {
      Gb = {
        pack: bb.metaData.id === Bb.c ? null : bb,
        prompt: ub
      }
    }

    function Lb(bb, ub) {
      const hb = Gb;
      null !== hb && (0, Ob.c)(hb.pack, bb) && (Gb = null, ub && hb.prompt())
    }
  },
  40461: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => ab,
      f: () => Gb,
      j: () => Hb,
      m: () => Ub
    });
    var Bb = hb(40435),
      Ob = hb(40391);
    const Gb = new class {
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
        const ub = void 0 !== this.session && void 0 === bb;
        if (this.change((() => {
            this.session = bb
          })), ub)
          for (const hb of [...this.pageListeners]) hb()
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
        const ub = this.current;
        if (bb(), this.current !== ub)
          for (const hb of this.listeners) hb()
      }
    };

    function Ub(bb, ub) {
      return {
        ...bb,
        armourAtlasUrl: () => {
          var hb, Bb;
          return null !== (hb = null === (Bb = ub()) || void 0 === Bb ? void 0 : Bb.armourAtlasUrl()) && void 0 !== hb ? hb : bb.armourAtlasUrl()
        },
        lifeformAtlasUrl: hb => Yb(ub(), (bb => bb.LIFEFORM_ATLAS_PATHS[hb]), (() => bb.lifeformAtlasUrl(hb))),
        groupAtlasUrl: hb => Yb(ub(), (bb => bb.GROUP_ATLAS_PATHS[hb]), (() => bb.groupAtlasUrl(hb))),
        particleItemUrl: Bb => Sb(ub(), (async () => {
          const bb = await hb.e(38).then((() => hb(51036))).catch((() => null));
          return (null === bb || void 0 === bb ? void 0 : bb.particleItemSprite(Bb)) || null
        }), (() => bb.particleItemUrl(Bb))),
        blockImageUrl: hb => Sb(ub(), (async () => {
          var bb, ub;
          return null !== (bb = null === (ub = await Lb()) || void 0 === ub ? void 0 : ub.blockImageName(hb)) && void 0 !== bb ? bb : null
        }), (() => bb.blockImageUrl(hb)))
      }
    }

    function Lb() {
      return (0, Ob.q)().catch((() => null))
    }

    function Yb(bb, ub, hb) {
      return Sb(bb, (async () => {
        var bb;
        const hb = await Lb(),
          Bb = null === hb ? null : ub(hb),
          Ob = null !== (bb = null === Bb || void 0 === Bb ? void 0 : Bb.slice(Bb.lastIndexOf("/") + 1)) && void 0 !== bb ? bb : null;
        return "Player_Atlas" === Ob ? null : Ob
      }), hb)
    }
    async function Sb(bb, ub, hb) {
      if (null !== bb) {
        const hb = await ub(),
          Bb = null === hb ? null : bb.textureUrl(hb);
        if (null !== Bb) return Bb
      }
      return hb()
    }
    const ab = 0;

    function Hb(bb) {
      const ub = [Bb.e.ArmourAtlas, Bb.e.LifeformAtlas, Bb.e.GroupAtlas, Bb.e.BlockImage, Bb.e.Particle];
      bb.reload(ub, (bb => {
        switch (bb.kind) {
          case Bb.e.Particle:
            return bb.index === Bb.g.Item;
          case Bb.e.LifeformAtlas:
            return bb.word !== ab;
          default:
            return !0
        }
      }))
    }
  },
  40335: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Bb,
      e: () => Lb,
      h: () => Ub,
      i: () => Ob,
      j: () => Gb
    });
    const Bb = 1e3;

    function Ob() {
      Yb((() => {
        window.location.reload()
      }))
    }

    function Gb() {
      return new Promise((() => {}))
    }

    function Ub(bb) {
      Yb((() => {
        window.location.replace(bb(window.location.href))
      }))
    }

    function Lb(bb) {
      Promise.resolve().then((() => hb(94))).then((ub => {
        let {
          currentUrl: hb
        } = ub;
        Ub((() => hb.mergeSearchParamsInto(bb)))
      }), (() => {
        Ub((() => bb))
      }))
    }

    function Yb(bb) {
      null !== window.onbeforeunload ? Promise.resolve().then((() => hb(1622))).then((ub => {
        let {
          prepareForUnloadWithoutConfirmation: hb
        } = ub;
        try {
          hb()
        } catch (Bb) {
          console.warn("[bloxd-wasm-client] prepareForUnloadWithoutConfirmation threw: leaving plainly", Bb), window.onbeforeunload = null
        }
        bb()
      }), (() => {
        window.onbeforeunload = null, bb()
      })) : bb()
    }
  },
  4819: (bb, ub, hb) => {
    function Bb(bb, ub) {
      return Ob(bb, ub)
    }

    function Ob(bb, ub) {
      if (bb === ub) return !0;
      if ("object" !== typeof bb || "object" !== typeof ub || null === bb || null === ub || Array.isArray(bb) !== Array.isArray(ub)) return !1;
      const hb = bb,
        Bb = ub,
        Gb = Object.keys(hb);
      return Gb.length === Object.keys(Bb).length && Gb.every((bb => Object.prototype.hasOwnProperty.call(Bb, bb) && Ob(hb[bb], Bb[bb])))
    }
    hb.d(ub, {
      c: () => Bb
    })
  },
  40366: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => rb,
      e: () => Cb,
      i: () => ob,
      k: () => pb
    });
    var Bb = hb(1709),
      Ob = hb(1713),
      Gb = hb(38688),
      Ub = hb(38699),
      Lb = hb(1672),
      Yb = hb(40293),
      Sb = hb(40301);
    const ab = {
        "X-Requested-With": "XMLHtttpRequest"
      },
      Hb = 3,
      wb = [500, 1500];

    function Zb(bb) {
      const ub = new URL(bb);
      return {
        secure: "https:" === ub.protocol || "wss:" === ub.protocol,
        host: ub.host,
        pathname: ub.pathname.replace(/\/+$/, ""),
        search: ub.searchParams.toString()
      }
    }

    function Xb(bb, ub, hb) {
      const {
        secure: Bb,
        host: Ob,
        pathname: Gb,
        search: Ub
      } = Zb(bb);
      return `${Bb?"https":"http"}://${Ob}${Gb}/matchmake/${ub}/${encodeURIComponent(hb)}${Ub?`?${Ub}`:""}`
    }

    function pb(bb, ub) {
      var hb;
      const Bb = null !== (hb = ub.protocol) && void 0 !== hb ? hb : "ws";
      if ("ws" !== Bb) throw new Error(`seat reservation asks for the ${Bb} transport`);
      const {
        secure: Ob,
        host: Gb,
        pathname: Ub,
        search: Lb
      } = Zb(bb), Yb = new URLSearchParams(Lb);
      Yb.append("sessionId", ub.sessionId), ub.reconnectionToken && Yb.append("reconnectionToken", ub.reconnectionToken);
      return `${Ob?"wss":"ws"}://${ub.room.publicAddress||`${Gb}${Ub}`}/${ub.room.processId}/${ub.room.roomId}?${Yb.toString()}`
    }
    async function ob(bb, ub, hb) {
      var Yb;
      let ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const Zb = null !== (Yb = ab.sleep) && void 0 !== Yb ? Yb : Bb.b,
        pb = new Ob.b(ab.signal),
        ob = new Lb.e(Ub.b, (() => {
          (0, Ob.j)(pb.controller, new Ub.c)
        })),
        {
          signal: Wb
        } = pb;
      try {
        return await (0, Gb.f)((() => async function(bb, ub, hb, Bb) {
          var Gb;
          const {
            signal: Ub,
            sleep: Lb
          } = Bb, Yb = Xb(bb, "joinOrCreate", ub), ab = JSON.stringify(hb);
          let Zb = null;
          for (let Xb = 0; Xb < Hb; Xb++) {
            var pb;
            if (Xb > 0) await Lb(null !== (pb = wb[Xb - 1]) && void 0 !== pb ? pb : 1500, Ub);
            let bb;
            (0, Ob.r)(Ub);
            try {
              bb = await lb(Yb, ab, Bb)
            } catch (ob) {
              (0, Ob.r)(Ub), Zb = Ab(ob);
              continue
            }
            const {
              response: ub,
              answer: hb,
              refusal: Gb,
              lost: Hb
            } = bb;
            if (null === Hb) {
              if (null !== Gb) throw Kb(Gb, hb);
              if (ub.ok && null !== hb && jb(hb)) return hb;
              Zb = new Sb.w(`seat request answered HTTP ${ub.status}${null===hb?" without JSON":" without a seat"}`, !1)
            } else Zb = Ab(Hb.error)
          }
          throw null !== (Gb = Zb) && void 0 !== Gb ? Gb : new Sb.w("seat request made no attempt", !1)
        }(bb, ub, hb, {
          ...ab,
          signal: Wb,
          sleep: Zb
        })), Wb, Zb)
      } finally {
        ob.stop(), pb.unfollow()
      }
    }

    function Ab(bb) {
      return new Sb.w(bb instanceof Error ? bb.message : String(bb), !0, bb)
    }
    async function lb(bb, ub, hb) {
      var Bb;
      const {
        signal: Gb
      } = hb, Ub = null !== (Bb = hb.fetch) && void 0 !== Bb ? Bb : fetch, Lb = await Ub(bb, {
        method: "POST",
        headers: {
          ...ab,
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: ub,
        credentials: "include",
        signal: Gb
      }), {
        answer: Yb,
        lost: Sb
      } = await async function(bb) {
        try {
          const ub = await bb.json();
          return {
            answer: "object" === typeof ub && null !== ub ? ub : null,
            lost: null
          }
        } catch (ub) {
          return {
            answer: null,
            lost: ub instanceof SyntaxError ? null : {
              error: ub
            }
          }
        }
      }(Lb), Hb = null !== Yb && "string" === typeof Yb.error ? Yb.error : null;
      var wb;
      null !== Hb && (null === (wb = hb.onRefusal) || void 0 === wb || wb.call(hb));
      return (0, Ob.r)(Gb), {
        response: Lb,
        answer: Yb,
        refusal: Hb,
        lost: Sb
      }
    }

    function Kb(bb, ub) {
      return new Sb.m(bb, "number" === typeof(null === ub || void 0 === ub ? void 0 : ub.code) ? ub.code : 0, (0, Yb.r)(bb).text)
    }
    class Wb extends Error {
      constructor(bb, ub) {
        super(bb), this.code = ub, this.name = "SeatHttpError"
      }
    }
    async function Cb(bb, ub, hb) {
      let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        response: Ob,
        answer: Gb,
        refusal: Ub,
        lost: Lb
      } = await lb(Xb(bb, "reconnect", ub), JSON.stringify({
        reconnectionToken: hb
      }), Bb);
      if (null !== Lb) throw Lb.error;
      if (!Ob.ok) {
        const bb = null !== Gb && "number" === typeof Gb.code && 0 !== Gb.code ? Gb.code : Ob.status;
        throw new Wb(`the seat's reconnect was refused: ${null!==Ub&&void 0!==Ub?Ub:`HTTP ${Ob.status}`}`, bb)
      }
      if (null !== Ub) throw Kb(Ub, Gb);
      if (null === Gb || !jb(Gb)) throw new Error("the seat's reconnect answered " + (null === Gb ? "without JSON" : "without a seat"));
      return {
        ...Gb,
        reconnectionToken: hb
      }
    }
    const db = 10;

    function rb(bb) {
      if (bb.byteLength < 2 || bb[0] !== db) return null;
      const ub = 2 + bb[1];
      return ub > bb.byteLength ? null : (new TextDecoder).decode(bb.subarray(2, ub))
    }

    function jb(bb) {
      const ub = bb.room;
      return "string" === typeof bb.sessionId && "object" === typeof ub && null !== ub && "string" === typeof ub.roomId && "string" === typeof ub.processId && "string" === typeof ub.name
    }
  },
  40052: (bb, ub, hb) => {
    hb.d(ub, {
      $: () => Ab,
      D: () => rb,
      F: () => gb,
      H: () => Wb,
      I: () => Cb,
      K: () => ob,
      L: () => Db,
      P: () => vb,
      S: () => Xb,
      W: () => Jb,
      Z: () => lb,
      db: () => Kb,
      e: () => Ob,
      f: () => tb,
      fb: () => db,
      i: () => ib,
      m: () => Zb,
      n: () => pb,
      r: () => zb,
      u: () => jb,
      v: () => xb,
      z: () => nb
    });
    var Bb = hb(2775);
    const Ob = {
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
      UpdateNameTag: 53,
      LobbyManage: 96
    };

    function Gb(bb, ub) {
      return !ArrayBuffer.isView(bb) || bb instanceof DataView ? Array.isArray(bb) ? bb.map((bb => ub(bb))) : bb : Array.from(bb, (bb => ub(bb)))
    }

    function Ub(bb) {
      if ("string" !== typeof bb) return bb;
      for (let ub = 0; ub < bb.length; ub++) {
        const hb = bb.charCodeAt(ub);
        if (hb >= 55296 && hb <= 57343) return Yb.decode(Lb.encode(bb))
      }
      return bb
    }
    const Lb = new TextEncoder,
      Yb = new TextDecoder;

    function Sb(bb) {
      return bb
    }
    let ab;

    function Hb(bb) {
      return null === bb || "object" !== typeof bb ? bb : [Ub(bb.uS), Ub(bb.hS)]
    }

    function wb(bb) {
      return null === bb || "object" !== typeof bb ? bb : [Gb(bb.Fb, Sb), Gb(bb.Ya, Sb)]
    }

    function Zb(bb) {
      return null === (ub = bb) || "object" !== typeof ub ? ub : [Ub(ub.XS), Ub(ub.pS)];
      var ub
    }

    function Xb(bb) {
      return null === (ub = bb) || "object" !== typeof ub ? ub : [ub.id, ub.ha];
      var ub
    }

    function pb(bb) {
      return null === (ub = bb) || "object" !== typeof ub ? ub : [ub.vu, Ub(ub.tu), ub.Ju, Ub(ub.Mu), ub.qu, ub.Eu, ub.WU, Ub(ub.CU), Ub(ub.dU)];
      var ub
    }

    function ob(bb) {
      return null === (ub = bb) || "object" !== typeof ub ? ub : [Gb(ub.RY, Sb), ub.bS];
      var ub
    }

    function Ab(bb) {
      return null === (ub = bb) || "object" !== typeof ub ? ub : [Gb(ub.KS, (bb => Ub(bb))), Ub(ub.WS), ub.CS];
      var ub
    }

    function lb(bb) {
      return null === (ub = bb) || "object" !== typeof ub ? ub : [Gb(ub.Ba, Sb), Ub(ub.Oa), ub.Ga];
      var ub
    }

    function Kb(bb) {
      return null === (ub = bb) || "object" !== typeof ub ? ub : [Ub(ub.tB), Ub(ub.JB)];
      var ub
    }

    function Wb(bb) {
      return null === (ub = bb) || "object" !== typeof ub ? ub : [Ub(ub.FS)];
      var ub
    }

    function Cb(bb) {
      return Ub(bb)
    }

    function db(bb) {
      return null === (ub = bb) || "object" !== typeof ub ? ub : [Ub(ub.gS), Ub(ub.iS), Ub(ub.uS), Ub(ub.hS)];
      var ub
    }

    function rb(bb) {
      return Hb(bb)
    }

    function jb(bb) {
      return Hb(bb)
    }

    function nb(bb) {
      return null === (ub = bb) || "object" !== typeof ub ? ub : [Ub(ub.lU)];
      var ub
    }

    function Db(bb) {
      return bb
    }

    function xb(bb) {
      return null === (ub = bb) || "object" !== typeof ub ? ub : [Ub(ub.yY), Ub(ub.VY)];
      var ub
    }

    function zb(bb) {
      return Ub(bb)
    }

    function gb(bb) {
      return wb(bb)
    }

    function ib(bb) {
      return wb(bb)
    }

    function vb(bb) {
      return null === (ub = bb) || "object" !== typeof ub ? ub : [Ub(ub.KU)];
      var ub
    }

    function tb(bb) {
      return (ab ??= (0, Bb.f)().map((bb => bb.name)), ab).map((ub => {
        return "string" === typeof(hb = bb[ub]) ? Ub(hb) : Gb(hb, Sb);
        var hb
      }))
    }

    function Jb(bb) {
      return null === (ub = bb) || "object" !== typeof ub ? ub : [ub.Xa, ub.oa, ub.Aa];
      var ub
    }
  },
  40465: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Gb
    });
    var Bb = hb(40470),
      Ob = hb(40461);
    const Gb = new class {
      constructor(bb) {
        this.pack = bb, this.game = void 0, this.settle = null, this.hold = null, this.endedWhileHeld = !1, this.gameListeners = new Set, bb.onWanted((() => {
          this.release()
        }))
      }
      setGame(bb) {
        if (void 0 === bb && null !== this.hold) return void(this.endedWhileHeld = !0);
        this.hold = null, this.endedWhileHeld = !1;
        const ub = this.inGame();
        if (this.game = bb, this.update(), this.inGame() !== ub)
          for (const hb of this.gameListeners) hb()
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
        void 0 === this.game ? this.pack.setSessionFiles(void 0) : null !== this.settle && (0, Bb.e)(this.settle.state, this.game) && this.pack.setSessionFiles(this.settle.files)
      }
    }(Ob.f)
  },
  40288: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      followPageUiPack: () => NS,
      packForGame: () => eS,
      playWasmGame: () => kS,
      prefetchWasmPreviews: () => fL,
      setGamePackConfirm: () => bS,
      startWasmPlay: () => PS,
      startWasmPreviews: () => FL
    });
    var Bb = hb(191),
      Ob = hb(1141),
      Gb = hb(148),
      Ub = hb(38710),
      Lb = hb(1811),
      Yb = hb(16),
      Sb = hb(4444),
      ab = hb(1206),
      Hb = hb(1613),
      wb = hb(1218),
      Zb = hb(38856),
      Xb = hb(1193),
      pb = hb(38868),
      ob = hb(38786),
      Ab = hb(36083),
      lb = hb(38688),
      Kb = hb(8626),
      Wb = hb(38699),
      Cb = hb(40133),
      db = hb(4545),
      rb = hb(40049),
      jb = hb(40114),
      nb = hb(40052);
    const Db = {
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
        setBlockHighlight: !0,
        lobbyManage: !0
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

    function xb(bb) {
      const ub = {
        ...jb.e[bb]
      };
      for (const hb of Object.keys(Db[bb])) delete ub[hb];
      return ub
    }

    function zb() {
      var bb, ub;
      return null === (bb = null === (ub = (0, rb.l)()) || void 0 === ub ? void 0 : ub.localPlayerAlive()) || void 0 === bb || bb
    }

    function gb() {
      var bb, ub;
      return null !== (bb = null === (ub = (0, rb.l)()) || void 0 === ub ? void 0 : ub.localDeaths()) && void 0 !== bb ? bb : null
    }
    const ib = {
        current: zb,
        watch: bb => {
          let ub = zb(),
            hb = gb();
          return (0, db.x)((() => {
            const Bb = zb(),
              Ob = gb(),
              Gb = null !== Ob && null !== hb && Ob !== hb;
            hb = Ob, Gb ? (ub || bb(!0), bb(!1), Bb && bb(!0), ub = Bb) : Bb !== ub && (ub = Bb, bb(Bb))
          }))
        }
      },
      vb = {
        states: {
          ...xb("states"),
          localPlayerAlive: ib
        },
        events: {
          ...xb("events"),
          localPlayerAliveSet: {
            watch: ib.watch
          }
        },
        commands: {
          ...xb("commands"),
          respawn: () => {
            var bb;
            null === (bb = (0, rb.l)()) || void 0 === bb || bb.respawn()
          },
          playEmote: bb => {
            var ub;
            null === (ub = (0, rb.l)()) || void 0 === ub || ub.send(nb.e.PlayEmote, (0, nb.H)({
              FS: bb
            }))
          },
          applyTemporaryThirdPerson: bb => {
            var ub;
            let {
              durationMs: hb
            } = bb;
            null === (ub = (0, rb.l)()) || void 0 === ub || ub.thirdPersonFor(hb)
          },
          bindCustomButtonKeys: bb => {
            var ub;
            null === (ub = (0, rb.l)()) || void 0 === ub || ub.bindCustomButtonKeys(bb)
          },
          pressCustomButton: bb => {
            var ub;
            let {
              id: hb,
              down: Bb
            } = bb;
            null === (ub = (0, rb.l)()) || void 0 === ub || ub.pressCustomButton(hb, Bb)
          },
          setLookSensitivity: () => {},
          wakeUp: bb => {
            const ub = (0, nb.P)({
                KU: bb
              }),
              hb = () => {
                const bb = (0, rb.l)();
                return !(null !== bb && void 0 !== bb && bb.isSessionLive) || bb.send(nb.e.StopSleeping, ub)
              };
            if (!hb()) {
              const bb = (0, db.x)((() => {
                hb() && bb()
              }))
            }
          },
          setCameraZoom: bb => {
            var ub;
            null === (ub = (0, rb.l)()) || void 0 === ub || ub.setCameraZoom(bb)
          }
        },
        queries: xb("queries"),
        lookups: {
          ...xb("lookups"),
          cameraZoom: () => {
            var bb, ub;
            return null !== (bb = null === (ub = (0, rb.l)()) || void 0 === ub ? void 0 : ub.cameraZoom()) && void 0 !== bb ? bb : 0
          }
        }
      };
    var tb = hb(40293),
      Jb = hb(40301),
      eb = hb(40305),
      Nb = hb(40326),
      sb = hb(1153),
      Mb = hb(94),
      mb = hb(4281),
      Ib = hb(3495),
      Pb = hb(1072);
    const qb = {
      sY: () => (0, sb.d)(),
      inbuiltOverwritten: () => mb.h,
      reflectApplyHit: () => Pb.b,
      definerHit: () => Mb.currentUrl.c,
      emitReplaced: () => (0, Yb.c)(),
      confirmMesh: () => (0, Ib.c)(),
      confirmMeshHitStack: () => (0, Ib.f)()
    };
    var Eb = hb(40310),
      yb = hb(40335);
    var Vb = hb(13),
      Fb = hb(1819),
      fb = hb(1874),
      kb = hb(1544),
      Tb = hb(1914),
      cb = hb(1095),
      Qb = hb(1144),
      Rb = hb(40278);

    function bu() {
      return Qb.h.get().getCurrentLanguageCode()
    }

    function uu(bb) {
      const ub = () => {
        bb({
          translate: (bb, ub) => (0, cb.A)(bu(), bb, ub),
          keyBindingText: bb => {
            const ub = (0, fb.p)(bb, Vb.d.get("isTouchScreen"));
            return null !== ub ? (0, cb.D)(bu(), ub.translationKey, ub.params) : (0, fb.l)((0, fb.n)(bb))
          },
          isFriend: Tb.c,
          hiddenNames: Fb.d.shown,
          loadsFontRest: (0, Rb.e)(bu())
        })
      };
      let hb = !1;
      const Bb = () => {
          const bb = bu();
          (0, cb.l)(bb).then((() => {
            hb || bb !== bu() || ub()
          }))
        },
        Ob = () => kb.b.getSocialState().friends.map((bb => bb.name.toLowerCase())).sort().join(" ");
      let Gb = Ob();
      ub(), Bb();
      const Ub = [(0, Qb.l)((() => {
        ub(), Bb()
      })), (0, Yb.l)("customBindingsChanged", ub), (0, Yb.l)("appManagerUpdated|isTouchScreen", ub), (0, Tb.b)((() => {
        const bb = Ob();
        bb !== Gb && (Gb = bb, ub())
      })), Fb.d.subscribe(ub)];
      return () => {
        hb = !0;
        for (const bb of Ub) bb()
      }
    }
    var hu = hb(595),
      Bu = hb(934),
      Ou = hb(1843),
      Gu = hb(298),
      Uu = hb(2683),
      Lu = hb(35948),
      Yu = hb(2688),
      Su = hb(38357),
      au = hb(4466),
      Hu = hb(40198),
      wu = hb(625),
      Zu = hb(599),
      Xu = hb(637),
      pu = hb(645),
      ou = hb(1836),
      Au = hb(3502),
      lu = hb(3055);
    let Ku = null;
    var Wu = hb(1103),
      Cu = hb(1713),
      du = hb(4188),
      ru = hb(3233),
      ju = hb(41),
      nu = hb(290),
      Du = hb(270),
      xu = hb(40154),
      zu = hb(4547);
    var gu = hb(40338);
    class iu {
      constructor(bb, ub) {
        this.showView = bb, this.holdForAd = ub
      }
      pointerUnlockRequestsChanged() {
        (0, xu.E)()
      }
      pointerLockDebugEntries() {
        return [{
          label: "Locked to the canvas",
          value: String((0, xu.v)())
        }]
      }
      setGameViewShown(bb) {
        this.showView(bb)
      }
      setGameView(bb) {
        (0, gu.i)(bb)
      }
      videoAdHold(bb, ub) {
        this.holdForAd(bb, ub)
      }
    }
    class vu {
      leave(bb) {
        ! function(bb) {
          if (null !== (0, wb.b)().websocketUrl) try {
            (0, db.K)().leaveGame(bb)
          } finally {
            (0, wb.l)({
              websocketUrl: null
            })
          }
        }(bb)
      }
      isReplay() {
        return !1
      }
    }
    class tu {
      watchFrameStarts(bb) {
        return (0, db.q)(bb)
      }
      watchFrames(bb) {
        return (0, db.p)(bb)
      }
      watchTicks(bb) {
        return (0, db.x)(bb)
      }
    }
    var Ju = hb(40347);

    function eu(bb) {
      return bb >= 0 ? Math.min(1, bb) : 0
    }

    function Nu(bb, ub) {
      const {
        fade: hb
      } = bb;
      return null === hb || ub - hb.at >= hb.ms ? bb.volume : hb.from + (bb.volume - hb.from) * Math.max(0, (ub - hb.at) / hb.ms)
    }

    function su(bb) {
      const ub = Object.entries(bb),
        hb = new Uint32Array(ub.length);
      let Bb = 0;
      for (const [Ub, [, Lb]] of ub.entries()) hb[Ub] = Lb.length, Bb += Lb.length;
      const Ob = new Float64Array(3 * Bb);
      let Gb = 0;
      for (const [, Ub] of ub)
        for (const bb of Ub) Ob.set(bb, Gb), Gb += 3;
      return {
        blocks: ub.map((bb => {
          let [ub] = bb;
          return ub
        })).join("\0"),
        counts: hb,
        values: Ob
      }
    }
    class Mu {
      constructor(bb, ub) {
        this.core = bb, this.warn = ub, this.latest = 0
      }
      async feed() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mu;
        const ub = ++this.latest;
        let hb;
        try {
          hb = await bb()
        } catch (Bb) {
          return void(this.core.isStopped || ub !== this.latest || this.warn("the block colours didn't load, so block particles draw grey", Bb))
        }
        ub === this.latest && (this.core.setBlockColours(hb) || this.core.isStopped || this.warn("the core refused the block colours: block particles draw grey"))
      }
    }
    async function mu() {
      return su((await hb.e(202).then((() => hb(33950)))).averageColors)
    }
    var Iu = hb(4555),
      Pu = hb(4564),
      qu = hb(40095),
      Eu = hb(35912),
      yu = hb(40264),
      Vu = hb(580),
      Fu = hb(36693),
      fu = hb(571),
      ku = hb(314),
      Tu = hb(40230);
    const cu = [3e4, 12e4, 3e5];
    class Qu extends Error {}
    const Ru = {
      mobTypes: Vu.k,
      vehicleTypes: Fu.d,
      mobAiStates: Vu.i,
      playerPoses: fu.n
    };
    var bh = hb(40212),
      uh = hb(40351),
      hh = hb(40358),
      Bh = hb(40362),
      Oh = hb(3256),
      Gh = hb(38672),
      Uh = hb(4584),
      Lh = hb(2273);
    const Yh = Lh.t.KeysDisabled | Lh.t.LookFrozen | Lh.t.ClicksSuppressed,
      Sh = Oh.h;
    var ah = (0, Bh.b)("resumingConn");
    class Hh {
      constructor(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.shell = bb, this.now = ub, this.session = void 0, this.attempt = null, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, Object.defineProperty(this, ah, {
          writable: !0,
          value: 0
        }), this.drops = 0, this.session = new Gh.e({
          reconnect: bb => this.reconnect(bb),
          isLive: () => bb.isLive(),
          onReconnected: ub => {
            this.landed = ub, bb.onReconnected(ub), this.landIfResumed()
          },
          onGaveUp: (ub, hb) => {
            this.abortAttempt(), bb.onGaveUp(ub, hb)
          },
          freeze: ub => {
            bb.OJ(ub), (0, Uh.j)(Yh, ub ? Yh : 0, "reconnectFreeze")
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
        return (0, hh.e)(this, ah)[ah]
      }
      canHoldSeat() {
        return this.session.canHoldSeat()
      }
      onInitialInfo(bb) {
        let {
          conn: ub,
          graceMs: hb,
          sessionBased: Bb,
          replayOffer: Ob
        } = bb;
        this.session.onInitialInfo(hb, Bb), this.isResuming() && (this.initialInfoConn = ub, this.initialInfoOffer = Ob, this.landIfResumed())
      }
      onResumeComplete(bb) {
        0 !== bb && (bb === (0, hh.e)(this, ah)[ah] ? ((0, hh.e)(this, ah)[ah] = 0, this.session.onResumed()) : this.isResuming() && (this.completedEarlyConn = bb))
      }
      onDropped(bb) {
        this.drops++, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, (0, hh.e)(this, ah)[ah] = 0, this.session.onConnectionLost(bb)
      }
      leave() {
        this.session.leave(), this.dispose()
      }
      dispose() {
        this.abortAttempt(), this.landed = null, this.completedEarlyConn = 0, (0, hh.e)(this, ah)[ah] = 0, this.session.end()
      }
      reconnect(bb) {
        const ub = this.attempt;
        if (null !== ub && this.awaitingJoinRoom(ub)) return ub.result;
        this.abortAttempt();
        const hb = new AbortController,
          Bb = this.drops,
          Ob = {
            attachedAt: null
          },
          Gb = this.shell.reconnect(bb, hb.signal, (() => {
            Ob.attachedAt = this.now()
          })).then((bb => {
            if (this.clearAttempt(Ub), this.drops !== Bb) throw new Error("the resumed room dropped before its attempt settled");
            return bb
          }), (bb => {
            throw this.clearAttempt(Ub), bb
          })),
          Ub = {
            abort: hb,
            socket: Ob,
            result: Gb
          };
        return this.attempt = Ub, Gb
      }
      clearAttempt(bb) {
        this.attempt === bb && (this.attempt = null)
      }
      abortAttempt() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new DOMException("the reconnect attempt was given up", "AbortError");
        const ub = this.attempt;
        this.attempt = null, null === ub || void 0 === ub || ub.abort.abort(bb)
      }
      awaitingJoinRoom(bb) {
        const ub = bb.socket.attachedAt;
        return null !== ub && this.now() - ub < Sh
      }
      releaseSeat(bb) {
        const ub = this.attempt,
          hb = null !== ub && this.awaitingJoinRoom(ub);
        this.abortAttempt(new Jb.s), hb || this.shell.releaseSeat(bb)
      }
      landIfResumed() {
        const bb = this.landed;
        if (null !== bb && bb.conn === this.initialInfoConn) {
          const ub = this.initialInfoOffer && this.completedEarlyConn !== bb.conn;
          if (this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, this.abortAttempt(), !ub) return void this.session.onResumed();
          (0, hh.e)(this, ah)[ah] = bb.conn, this.session.onResuming()
        }
      }
    }
    var wh = hb(38679),
      Zh = hb(40366),
      Xh = hb(36095),
      ph = hb(36091),
      oh = hb(4815),
      Ah = hb(4176),
      lh = hb(3048),
      Kh = hb(40167),
      Wh = hb(604),
      Ch = hb(39241),
      dh = hb(4260),
      rh = hb(29),
      jh = hb(40369),
      nh = hb(40407),
      Dh = hb(4206),
      xh = hb(2276),
      zh = hb(1537),
      gh = hb(1572),
      ih = hb(1184),
      vh = hb(101),
      th = hb(2606),
      Jh = hb(2280),
      eh = hb(4575);
    const Nh = new Set([Iu.mb.KeyDown, Iu.mb.MouseMove, Iu.mb.MouseDown, Iu.mb.Wheel, Iu.mb.TouchStart, Iu.mb.TouchMove]);

    function sh(bb) {
      return (bb.shiftKey ? Iu.Bb.Shift : 0) | (bb.ctrlKey ? Iu.Bb.Ctrl : 0) | (bb.altKey ? Iu.Bb.Alt : 0) | (bb.metaKey ? Iu.Bb.Meta : 0) | ("repeat" in bb && bb.repeat ? Iu.Bb.Repeat : 0) | (bb.isTrusted ? 0 : Iu.Bb.Untrusted)
    }

    function Mh(bb) {
      return "touchOnly" !== (0, vh.b)() && "function" === typeof bb.requestPointerLock
    }

    function mh(bb) {
      return 0 === bb.button ? bb.altKey ? eh.k["Alt+Left Click"] : eh.k.Mouse1 : 1 === bb.button ? eh.k.Mouse2 : eh.k.Mouse3
    }
    const Ih = new Set(["AltLeft", "AltRight", "ArrowUp", "ArrowDown"]),
      Ph = new Map([
        ["AltLeft", "altKey"],
        ["AltRight", "altKey"],
        ["ControlLeft", "ctrlKey"],
        ["ControlRight", "ctrlKey"],
        ["ShiftLeft", "shiftKey"],
        ["ShiftRight", "shiftKey"],
        ["MetaLeft", "metaKey"],
        ["MetaRight", "metaKey"]
      ]),
      qh = 32768,
      Eh = 1;

    function yh(bb) {
      return Math.min(Math.max(Math.round(bb), 0), 65535)
    }

    function Vh(bb, ub, hb) {
      const Bb = [],
        Ob = (bb, ub, hb, Ob) => {
          const Gb = bb => {
            (0, gh.t)(bb) || hb(bb)
          };
          bb.addEventListener(ub, Gb, Ob), Bb.push((() => {
            bb.removeEventListener(ub, Gb, Ob)
          }))
        },
        Gb = {
          capture: !0,
          passive: !0
        },
        Ub = (bb, hb, Bb, Ob, Gb) => (!(0, Jh.e)() || !Nh.has(bb)) && (ub(bb, hb, Bb, Ob, Gb), !0),
        Lb = () => document.pointerLockElement === bb,
        Yb = (0, th.d)(),
        Sb = bb => {
          bb.ctrlKey && hb.ctrlCombosAreGames() && !(0, Uh.f)(bb.target) && bb.preventDefault()
        },
        ab = (bb, Bb, Ob) => {
          hb.inspect(bb, Bb, !1), ub(Iu.mb.KeyUp, Bb, 0, 0, (0, xh.t)(Ob, bb.timeStamp)), hb.keyReleased(Bb)
        },
        Hb = new Map,
        wb = (bb, ub, hb) => bb[hb] || ("AltRight" === ub || "ControlLeft" === ub) && bb.getModifierState("AltGraph"),
        Zb = new Map,
        Xb = () => {
          Hb.clear(), Zb.clear()
        },
        pb = bb => {
          if (document.hasFocus())
            for (const [ub, hb] of Zb) Zb.delete(ub), wb(bb, ub, hb) || (Hb.delete(ub), ab(bb, eh.k[ub], sh(bb)))
        };
      bb.tabIndex = -1;
      let ob = 0,
        Ab = 0;
      const lb = () => {
        const ub = bb.getBoundingClientRect();
        ob = ub.left, Ab = ub.top
      };
      let Kb = "mouse";
      const Wb = () => !Lb() && ("mouse" === Kb || !hb.touchUiShown()),
        Cb = (bb, ub, hb) => {
          const Bb = (yh(bb.clientX - ob) | yh(bb.clientY - Ab) << 16) >>> 0;
          Ub(Iu.mb.MouseMove, Iu.Cb.Point, ub, hb, Bb)
        };
      let db = !1,
        rb = 0;
      const jb = () => {
        db && (db = !1, hb.viewShown() && (0, xu.U)())
      };
      Bb.push((() => {
        clearTimeout(rb)
      })), Ob(window, "keydown", (bb => {
        "Escape" === bb.key ? (0, xu.J)(!0) : bb.repeat || (0, Uh.f)(bb.target) || (db = !0, clearTimeout(rb), rb = window.setTimeout(jb, 0))
      }), Gb), Ob(window, "keydown", (bb => {
        jb(), Sb(bb), pb(bb);
        const ub = eh.k[bb.code];
        if ("number" !== typeof ub || !hb.viewShown()) return;
        const Bb = (0, Uh.f)(bb.target);
        Bb || !hb.prevents(ub) && !Ih.has(bb.code) || bb.preventDefault(), bb.repeat || hb.inspect(bb, ub, !0), Ub(Iu.mb.KeyDown, ub, 0, 0, (0, xh.t)(sh(bb), bb.timeStamp)) && Hb.set(bb.code, ub), Bb || hb.keyPressed(ub)
      }), {
        capture: !1,
        passive: !1
      }), Ob(window, "keyup", (bb => {
        "Escape" === bb.key && (0, xu.J)(!1), Sb(bb), Hb.delete(bb.code), Zb.delete(bb.code), pb(bb);
        const ub = eh.k[bb.code];
        "number" === typeof ub && ab(bb, ub, sh(bb))
      }), {
        capture: !0,
        passive: !1
      }), Ob(window, "mousemove", (bb => {
        "mouse" === Kb && Wb() ? Cb(bb, bb.movementX, bb.movementY) : Lb() ? Ub(Iu.mb.MouseMove, Iu.Cb.Stamped, bb.movementX, bb.movementY, (0, xh.t)(0, bb.timeStamp)) : Ub(Iu.mb.MouseMove, 0, bb.movementX, bb.movementY, 0)
      }), Gb);
      let nb = 0,
        Db = 0;
      const xb = [];
      let zb = !1,
        gb = !1;
      Ob(bb, "mousedown", (bb => {
        if ((0, Jh.e)()) return;
        pb(bb);
        const Bb = 1 << bb.button;
        if (!Lb() && (0, xu.S)() && (0, xu.h)() && (gb = !0, !zb)) return void(nb |= Bb);
        nb &= ~Bb;
        const Ob = bb.button <= 2 ? mh(bb) : void 0;
        void 0 !== Ob && (xb[bb.button] = Ob, hb.inspect(bb, Ob, !0)), Wb() && Cb(bb, 0, 0), ub(Iu.mb.MouseDown, bb.button, bb.clientX, bb.clientY, (0, xh.t)(sh(bb), bb.timeStamp)), Db |= Bb, void 0 !== Ob && hb.keyPressed(Ob)
      }), Gb), Ob(window, "mouseup", (bb => {
        var Bb;
        pb(bb);
        const Ob = 1 << bb.button,
          Gb = 0 !== (nb & ~Db & Ob);
        if (nb &= ~Ob, Db &= ~Ob, Gb) return;
        const Ub = bb.button <= 2 ? null !== (Bb = xb[bb.button]) && void 0 !== Bb ? Bb : mh(bb) : void 0;
        void 0 !== Ub && hb.inspect(bb, Ub, !1), ub(Iu.mb.MouseUp, bb.button, bb.clientX, bb.clientY, (0, xh.t)(sh(bb), bb.timeStamp)), void 0 !== Ub && hb.keyReleased(Ub)
      }), Gb), Ob(bb, "contextmenu", (bb => {
        bb.preventDefault()
      }), {
        passive: !1
      });
      const ib = bb => {
        (Lb() || (0, xu.t)() && (0, ih.m)()) && (bb.ctrlKey || Yb && !document.fullscreenElement) && bb.preventDefault()
      };
      Ob(bb, "wheel", (bb => {
        ib(bb), pb(bb), Ub(Iu.mb.Wheel, bb.deltaMode, bb.deltaX, bb.deltaY, 0)
      }), {
        capture: !0,
        passive: !1
      });
      const vb = {
          capture: !0,
          passive: !1
        },
        tb = bb => {
          bb ? window.addEventListener("wheel", ib, vb) : window.removeEventListener("wheel", ib, vb)
        };
      tb((0, xu.t)()), Bb.push((0, xu.A)(tb)), Bb.push((() => {
        tb(!1)
      }));
      const Jb = new Map,
        eb = new Set,
        Nb = bb => {
          const ub = "stylus" === bb.touchType;
          for (const hb of Jb.values())
            if (!hb.touched && (ub || Math.abs(bb.clientX - hb.x) <= Eh && Math.abs(bb.clientY - hb.y) <= Eh)) return hb.touched = !0, !0;
          return !1
        },
        sb = bb => 32767 & bb,
        Mb = new Set,
        mb = bb => hb => {
          const Bb = (0, xh.t)(sh(hb), hb.timeStamp);
          bb !== Iu.mb.TouchStart && bb !== Iu.mb.TouchMove || ((bb, hb) => {
            const Bb = bb.touches;
            if (Bb)
              for (const Ob of Mb) {
                let bb = !1;
                for (let ub = 0; ub < Bb.length && !bb; ub++) bb = sb(Bb[ub].identifier) === Ob;
                bb || (Mb.delete(Ob), ub(Iu.mb.TouchCancel, Ob, 0, 0, hb))
              }
          })(hb, Bb);
          const Ob = hb.changedTouches;
          for (let ub = 0; ub < Ob.length; ub++) {
            const hb = Ob[ub];
            if (bb === Iu.mb.TouchStart && Nb(hb) && eb.add(hb.identifier), eb.has(hb.identifier)) {
              bb !== Iu.mb.TouchEnd && bb !== Iu.mb.TouchCancel || eb.delete(hb.identifier);
              continue
            }
            const Gb = sb(hb.identifier),
              Lb = Ub(bb, Gb, hb.clientX - ob, hb.clientY - Ab, Bb);
            bb === Iu.mb.TouchStart ? Lb && Mb.add(Gb) : bb !== Iu.mb.TouchMove && Mb.delete(Gb)
          }
        },
        Ib = mb(Iu.mb.TouchStart);
      Ob(bb, "touchstart", (bb => {
        bb.preventDefault(), (0, Jh.e)() || (hb.touchStarting(), Ib(bb))
      }), {
        passive: !1
      }), Ob(bb, "touchmove", mb(Iu.mb.TouchMove), Gb), Ob(bb, "touchend", mb(Iu.mb.TouchEnd), Gb), Ob(bb, "touchcancel", mb(Iu.mb.TouchCancel), Gb);
      const Pb = bb => qh | 32767 & bb,
        qb = (bb, ub) => {
          Ub(bb, Pb(ub.pointerId), ub.clientX - ob, ub.clientY - Ab, (0, xh.t)(sh(ub), ub.timeStamp))
        };
      Ob(window, "pointerdown", (ub => {
        Kb = ub.pointerType, "mouse" === ub.pointerType && ub.target !== bb && hb.viewShown() && (0, xu.V)()
      }), Gb), Ob(bb, "pointerdown", (bb => {
        "pen" === bb.pointerType && 0 === bb.button && (0, xu.t)() && (0, ih.m)() && (bb.preventDefault(), (0, Jh.e)() || (Jb.set(bb.pointerId, {
          x: bb.clientX,
          y: bb.clientY,
          touched: !1
        }), hb.touchStarting(), qb(Iu.mb.TouchStart, bb)))
      }), {
        passive: !1
      }), Ob(window, "pointermove", (bb => {
        Kb = bb.pointerType, Jb.has(bb.pointerId) && qb(Iu.mb.TouchMove, bb), "mouse" !== bb.pointerType && Wb() && Cb(bb, 0, 0)
      }), Gb);
      const Eb = bb => ub => {
        Jb.delete(ub.pointerId) && qb(bb, ub)
      };
      Ob(window, "pointerup", Eb(Iu.mb.TouchEnd), Gb), Ob(window, "pointercancel", Eb(Iu.mb.TouchCancel), Gb);
      let yb = 0;
      const Vb = () => {
          yb = 0, lb(), hb.resized()
        },
        Fb = () => {
          const bb = hb.sizeCanvas();
          null !== bb && ub(Iu.mb.Resize, 0, bb.cssWidth, bb.cssHeight, (0, xh.m)(bb.renderScale)), lb(), hb.resized(), 0 === yb && (yb = requestAnimationFrame(Vb))
        };
      Ob(window, "resize", Fb, Gb), Bb.push(hb.watchRenderScale(Fb)), Bb.push((() => {
        cancelAnimationFrame(yb)
      })), Ob(window, "focus", (bb => {
        bb.isTrusted && (ub(Iu.mb.Focus, 0, 0, 0, 0), hb.viewShown() && (0, xu.V)())
      }), {
        passive: !0
      });
      const fb = () => {
          (0, xu.J)(!1), nb = 0
        },
        kb = () => {
          Mb.clear(), Jb.clear(), eb.clear()
        };
      let Tb = 0,
        cb = 0;
      Ob(window, "blur", (Bb => {
        fb(), (0, xu.p)();
        for (const bb of Hb.keys()) {
          const ub = Ph.get(bb);
          void 0 !== ub && Zb.set(bb, ub)
        }
        Bb.isTrusted && ((bb => {
          for (const [hb, Bb] of Jb) ub(Iu.mb.TouchCancel, Pb(hb), Bb.x, Bb.y, (0, xh.t)(0, bb));
          Jb.clear()
        })(Bb.timeStamp), ub(Iu.mb.Blur, Iu.o.KeepTouches, 0, 0, 0)), Yb && Bb.isTrusted && (clearTimeout(cb), cb = window.setTimeout((() => {
          if (!document.hasFocus()) {
            for (const bb of Hb.values()) ab(Bb, bb, 0);
            Xb()
          }
        }), 0)), clearTimeout(Tb), Tb = window.setTimeout((() => {
          document.activeElement instanceof HTMLIFrameElement && (0, ih.m)() && hb.viewShown() && bb.focus({
            preventScroll: !0
          })
        }), 0)
      }), {
        passive: !0
      }), Bb.push((() => {
        clearTimeout(Tb), clearTimeout(cb)
      })), Ob(window, "mousedown", (ub => {
        Yb && ub.isTrusted && !document.hasFocus() && (0, ih.m)() && hb.viewShown() && (window.focus(), bb.focus({
          preventScroll: !0
        }))
      }), Gb), Ob(document, "visibilitychange", (() => {
        document.hidden ? (ub(Iu.mb.Blur, 0, 0, 0, 0), kb()) : document.hasFocus() && ub(Iu.mb.Focus, 0, 0, 0, 0)
      }), {
        passive: !0
      }), Bb.push((0, Jh.k)((() => {
        fb(), ub(Iu.mb.Blur, Iu.o.Release, 0, 0, 0), hb.keysReleased(), Xb(), Db = 0, kb(), ub(Iu.mb.Joystick, 0, 0, 0, 0), document.hasFocus() && ub(Iu.mb.Focus, 0, 0, 0, 0)
      })));
      const Qb = !hb.canLock(),
        Rb = () => Qb && !(0, xu.t)() ? Iu.bc.Lockless : Iu.bc.Released,
        bu = () => {
          Lb() && (zb = !1, gb = !1), ub(Iu.mb.PointerLock, Lb() ? Iu.bc.Locked : Rb(), 0, 0, 0), (0, xu.Q)(Lb())
        };
      return Ob(document, "pointerlockchange", bu, {
        passive: !0
      }), Ob(document, "pointerlockerror", (() => {
        zb ||= gb, gb = !1, (0, xu.w)()
      }), {
        passive: !0
      }), Qb && Bb.push((0, xu.A)((() => {
        ub(Iu.mb.PointerLock, Rb(), 0, 0, 0)
      }))), Fb(), ub(document.hasFocus() ? Iu.mb.Focus : Iu.mb.Blur, 0, 0, 0, 0), bu(), () => {
        for (const bb of Bb.splice(0)) bb()
      }
    }
    var Fh = hb(9016),
      fh = hb(9e3),
      kh = hb(1879);
    const Th = new Map(eh.b.map(((bb, ub) => [bb, ub]))),
      ch = ["jump", "primary-fire", "alt-fire"],
      Qh = ["primary-fire", "alt-fire"];

    function Rh(bb) {
      return `${kh.d}${bb}`
    }
    const bB = ["forward", "backward", "left", "right", "sprint", "jump"];

    function uB(bb) {
      const ub = [];
      for (const hb of bb) {
        const bb = "string" === typeof hb ? eh.k[hb] : void 0;
        "number" === typeof bb && ub.push(bb)
      }
      return ub
    }
    class hB {
      constructor() {
        this.keys = new Map, this.preventKeys = new Set, this.movementKeys = new Set, this.checkedDown = new Set, this.checkedUp = new Set;
        for (const [bb, ub] of Object.entries(eh.c)) this.keys.set(bb, ub);
        this.updateKeySets()
      }
      prevents(bb) {
        return this.preventKeys.has(bb)
      }
      moves(bb) {
        return this.movementKeys.has(bb)
      }
      checks(bb, ub) {
        return (ub ? this.checkedDown : this.checkedUp).has(bb)
      }
      sync(bb, ub) {
        for (const [hb, Bb] of this.keys) {
          const Ob = bb(Rh(hb)),
            Gb = Array.isArray(Ob) ? uB(Ob) : eh.c[hb];
          (Gb.length !== Bb.length || Gb.some(((bb, ub) => bb !== Bb[ub]))) && this.bind(hb, Gb, ub)
        }
      }
      bind(bb, ub, hb) {
        const Bb = Th.get(bb);
        if (void 0 !== Bb) {
          hb(Iu.mb.Binding, 0, 0, 0, Bb | Iu.n.Clear << 8);
          for (const Gb of [...ub, ...null !== (Ob = eh.g[bb]) && void 0 !== Ob ? Ob : []]) {
            var Ob;
            hb(Iu.mb.Binding, Gb, 0, 0, Bb | Iu.n.Add << 8)
          }
          this.keys.set(bb, ub), this.updateKeySets()
        }
      }
      updateKeySets() {
        this.preventKeys.clear();
        for (const Bb of eh.n)
          for (const ub of null !== (bb = this.keys.get(eh.b[Bb])) && void 0 !== bb ? bb : []) {
            var bb;
            this.preventKeys.add(ub)
          }
        this.movementKeys.clear();
        for (const Bb of bB)
          for (const bb of null !== (ub = this.keys.get(Bb)) && void 0 !== ub ? ub : []) {
            var ub;
            this.movementKeys.add(bb)
          }
        for (const [Bb, Ob] of [
            [this.checkedDown, ch],
            [this.checkedUp, Qh]
          ]) {
          Bb.clear();
          for (const bb of Ob)
            for (const ub of null !== (hb = this.keys.get(bb)) && void 0 !== hb ? hb : []) {
              var hb;
              Bb.add(ub)
            }
        }
      }
    }
    var BB = hb(4570),
      OB = hb(36201);
    const GB = "[bloxd-wasm-client]";

    function UB() {
      return "inGame" === Vb.d.get("gameState") && !(0, zh.t)()
    }
    let LB = null;

    function YB(bb, ub) {
      LB && ub.writePendingInput() && LB.push(function(bb, ub) {
        let hb = "";
        for (const Bb of ub) hb += Bb.toString(16).padStart(2, "0");
        return hb ? `${bb} ${hb}` : String(bb)
      }(bb, ub.rings.input.written()))
    }
    const SB = [];

    function aB(bb, ub, hb, Bb) {
      bb === Iu.V.InputAction && Bb === Iu.jb && SB.push(ub.getUint32(hb, !0))
    }
    var HB = hb(40424),
      wB = hb(1097),
      ZB = hb(36489);
    const XB = {
      general: {
        ok: "OK",
        tryAgain: "Try Again",
        back: "Back",
        reload: "Reload",
        reconnect: "Rejoin"
      },
      wasmScreens: wB.wasmScreens
    };

    function pB(bb) {
      var ub, hb;
      let Bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const [Ob, Gb] = bb.split(":");
      return (null !== (ub = null === (hb = XB[Ob]) || void 0 === hb ? void 0 : hb[Gb]) && void 0 !== ub ? ub : bb).replace(/\{\{(\w+)\}\}/g, ((bb, ub) => {
        var hb;
        return null !== (hb = Bb[ub]) && void 0 !== hb ? hb : bb
      }))
    }

    function oB(bb, ub) {
      (0, Dh.c)();
      const hb = document.createElement("div");
      hb.setAttribute("role", "alertdialog"), hb.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;z-index:100;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.7);font:16px sans-serif;color:#fff";
      const Bb = document.createElement("div");
      Bb.style.cssText = "max-width:28rem;padding:1.5rem;background:#1c2333;text-align:center";
      const Ob = document.createElement("h2");
      Ob.textContent = pB(bb.title);
      const Gb = document.createElement("p");
      if (Gb.textContent = pB(bb.help, bb.helpValues), Gb.style.whiteSpace = "pre-line", Bb.append(Ob, Gb), bb.discordLink) {
        const bb = document.createElement("a");
        bb.href = ZB.e, bb.target = "_blank", bb.rel = "noreferrer", bb.style.color = "#8ab4ff", bb.textContent = pB("wasmScreens:reportOnDiscord"), Bb.append(bb)
      }
      const Ub = document.createElement("div");
      return Ub.style.cssText = "display:flex;gap:1rem;justify-content:center;margin-top:1.5rem", Bb.append(Ub), hb.append(Bb), document.body.append(hb), new Promise((Bb => {
        const Ob = bb => {
            null === ub || void 0 === ub || ub.removeEventListener("abort", Gb), hb.remove(), Bb(bb)
          },
          Gb = () => {
            Ob(!1)
          };
        null === ub || void 0 === ub || ub.addEventListener("abort", Gb, {
          once: !0
        });
        const Lb = (bb, ub) => {
          const hb = document.createElement("button");
          hb.textContent = pB(bb), hb.style.cssText = "padding:0.5rem 1.25rem;font:inherit", hb.addEventListener("click", (() => {
            Ob(ub)
          })), Ub.append(hb)
        };
        null !== bb.cancel && Lb(bb.cancel, !1), Lb(bb.confirm, !0)
      }))
    }
    var AB = hb(40250);
    const lB = 6e4,
      KB = 3e5;
    var WB = hb(3434);
    var CB = hb(40157),
      dB = hb(609),
      rB = hb(6);

    function jB(bb, ub) {
      const hb = rB.fb.encode(ub);
      ! function(bb, ub) {
        let hb = ub >= 0 ? 2 * ub : 2 * -ub - 1;
        for (; hb >= 128;) bb.push(hb % 128 | 128), hb = Math.floor(hb / 128);
        bb.push(hb)
      }(bb, hb.length);
      for (const Bb of hb) bb.push(Bb)
    }
    let nB, DB, xB;
    (() => {
      const bb = ["length", 0, 1, 2, 236, 165, "a", !1, 3, 5, 6, 4, 155, 75, 105, 113, "r", 246, 196, 127, "e", 249, void 0, 20, "c", 1023, 110, 65536, 10, 55296, 56320, 7, 12, 63, 128, 38, 28, "d", 60, 192, "Invalid byte index", 255, 224, 191, 31, "Invalid continuation byte", 240, 15, 65, 18, "b", "resolv", "then", null, "f", "postCo", "okies", !0, 242, 189, "=", 102, ";", 188];

      function ub() {}
      "Z5yDQyT" in ub && function(...ub) {
        ab(ub[bb[0]] = bb[1], ub[bb[6]] = function(...hb) {
          return ab(hb[bb[0]] = bb[8], hb[bb[4]] = {}), hb[bb[3]].length !== hb[bb[1]].length + hb[bb[2]].length ? bb[7] : ub[bb[5]](hb[bb[1]], hb[bb[2]], hb[bb[3]], bb[1], bb[1], bb[1], hb[bb[4]])
        }, ub[bb[5]] = function(...hb) {
          return ab(hb[bb[0]] = bb[31], hb[bb[6]] = bb[7]), hb[bb[9]] >= hb[bb[3]].length ? bb[57] : hb[bb[10]]["" + hb[bb[8]] + hb[bb[11]] + hb[bb[9]]] !== bb[22] ? hb[bb[10]]["" + hb[bb[8]] + hb[bb[11]] + hb[bb[9]]] : (hb[bb[3]][hb[bb[9]]] === hb[bb[1]][hb[bb[8]]] && hb[bb[3]][hb[bb[9]]] === hb[bb[2]][hb[bb[11]]] ? hb[bb[6]] = ub[bb[5]](hb[bb[1]], hb[bb[2]], hb[bb[3]], hb[bb[8]] + bb[2], hb[bb[11]], hb[bb[9]] + bb[2], hb[bb[10]]) || ub[bb[5]](hb[bb[1]], hb[bb[2]], hb[bb[3]], hb[bb[8]], hb[bb[11]] + bb[2], hb[bb[9]] + bb[2], hb[bb[10]]) : hb[bb[3]][hb[bb[9]]] === hb[bb[1]][hb[bb[8]]] ? hb[bb[6]] = ub[bb[5]](hb[bb[1]], hb[bb[2]], hb[bb[3]], hb[bb[8]] + bb[2], hb[bb[11]], hb[bb[9]] + bb[2], hb[bb[10]]) : hb[bb[3]][hb[bb[9]]] === hb[bb[2]][hb[bb[11]]] && (hb[bb[6]] = ub[bb[5]](hb[bb[1]], hb[bb[2]], hb[bb[3]], hb[bb[8]], hb[bb[11]] + bb[2], hb[bb[9]] + bb[2], hb[bb[10]])), hb[bb[10]]["" + hb[bb[8]] + hb[bb[11]] + hb[bb[9]]] = hb[bb[6]], hb[bb[6]])
        }, console.log(ub[bb[6]]))
      }();
      const Bb = (bb[1], rB[bb[16]])("aGFyZHdhcmVDb25jdXJyZW5jeQ=="),
        Ob = (bb[1], rB[bb[16]])("QkFCWUxPTg=="),
        Gb = (bb[1], rB[bb[16]])("QW5kZXNpdGU="),
        Ub = (bb[1], rB[bb[16]])("U21vb3RoIEdyYW5pdGU="),
        Lb = (bb[1], rB[bb[16]])("RGlvcml0ZQ=="),
        Yb = async (Bb, Ob, Gb, Ub) => {
          "bSXe3L" in ub && function(...ub) {
            ab(ub[bb[0]] = bb[1], ub[bb[21]] = function(...ub) {
              for (ab(ub[bb[0]] = bb[2], ub[bb[2]] = bb[1], ub[bb[3]] = {}, ub[bb[8]] = bb[1], ub[-bb[18]] = bb[1], ub[bb[20]] = bb[1], ub[bb[10]] = ub[bb[1]].length), ub[bb[17]] = bb[1]; ub[bb[17]] < ub[bb[10]]; ub[bb[17]]++) {
                for (ab(ub[bb[3]] = {}, ub[bb[8]] = bb[1], ub[-bb[18]] = bb[2]), ub[-bb[19]] = ub[bb[17]] + bb[2]; ub[-bb[19]] < ub[bb[10]]; ub[-bb[19]]++) ub[bb[1]][ub[bb[17]]].x !== ub[bb[1]][ub[-bb[19]]].x || ub[bb[1]][ub[bb[17]]].y !== ub[bb[1]][ub[-bb[19]]].y ? (ub[bb[1]][ub[bb[17]]].y === ub[bb[1]][ub[-bb[19]]].y ? ub[bb[20]] = Number.MAX_SAFE_INTEGER : ub[bb[20]] = (ub[bb[1]][ub[bb[17]]].x - ub[bb[1]][ub[-bb[19]]].x) / (ub[bb[1]][ub[bb[17]]].y - ub[bb[1]][ub[-bb[19]]].y), ub[bb[3]][ub[bb[20]]] || (ub[bb[3]][ub[bb[20]]] = bb[1]), ab(ub[bb[3]][ub[bb[20]]]++, ub[bb[8]] = Math.max(ub[bb[8]], ub[bb[3]][ub[bb[20]]]))) : ub[-bb[18]]++;
                ab(ub[bb[8]] += ub[-bb[18]], ub[bb[2]] = Math.max(ub[bb[2]], ub[bb[8]]))
              }
              return ub[bb[2]]
            }, console.log(ub[bb[21]]))
          }();
          const [{
            clientSideServerUrls: Lb
          }, {
            ["postJsonWithMetricsCookiesAndJsonRespons" + bb[20]]: Yb
          }] = await Promise.all([Promise[bb[51] + bb[20]]()[bb[52]](((...Bb) => (Bb[bb[0]] = bb[1], "yA962u" in ub && function() {
            ! function(...ub) {
              function hb(...ub) {
                for (ab(ub[bb[0]] = bb[2], ub[bb[2]] = [], ub[bb[23]] = bb[1], ub[bb[24]] = ub[bb[1]].length, ub[bb[4]] = bb[22], ub[bb[9]] = bb[22]); ub[bb[23]] < ub[bb[24]];) ab(ub[bb[4]] = ub[bb[1]].charCodeAt(ub[bb[23]]++), ub[bb[4]] >= bb[29] && ub[bb[4]] <= 56319 && ub[bb[23]] < ub[bb[24]] ? (ub[bb[9]] = ub[bb[1]].charCodeAt(ub[bb[23]]++), (64512 & ub[bb[9]]) == bb[30] ? ub[bb[2]].push(((ub[bb[4]] & bb[25]) << bb[28]) + (ub[bb[9]] & bb[25]) + bb[27]) : (ub[bb[2]].push(ub[bb[4]]), ub[bb[23]]--)) : ub[bb[2]].push(ub[bb[4]]));
                return ub[bb[2]]
              }

              function Bb(...hb) {
                for (ab(hb[bb[0]] = bb[2], hb[bb[6]] = hb[bb[1]].length, hb[bb[3]] = -bb[2], hb[bb[26]] = bb[22], hb[bb[11]] = ""); ++hb[bb[3]] < hb[bb[6]];) hb[bb[26]] = hb[bb[1]][hb[bb[3]]], hb[bb[26]] > 65535 && ab(hb[bb[26]] -= bb[27], hb[bb[11]] += ub[bb[2]](hb[bb[26]] >>> bb[28] & bb[25] | bb[29]), hb[bb[26]] = bb[30] | hb[bb[26]] & bb[25]), hb[bb[11]] += ub[bb[2]](hb[bb[26]]);
                return hb[bb[11]]
              }

              function Ob(...ub) {
                if (ub[bb[0]] = bb[2], ub[bb[1]] >= bb[29] && ub[bb[1]] <= 57343) throw Error("Lone surrogate U+" + ub[bb[1]].toString(16).toUpperCase() + " is not a scalar value")
              }

              function Gb(...hb) {
                return hb[bb[0]] = bb[3], ub[bb[2]](hb[bb[1]] >> hb[bb[2]] & bb[33] | bb[34])
              }

              function Ub(hb) {
                var Bb;
                return (4294967168 & hb) == bb[1] ? ub[bb[2]](hb) : (Bb = "", (4294965248 & hb) == bb[1] ? Bb = ub[bb[2]](hb >> bb[10] & bb[44] | bb[39]) : (4294901760 & hb) == bb[1] ? ab(Ob(hb), Bb = ub[bb[2]](hb >> bb[32] & bb[47] | bb[42]), Bb += Gb(hb, bb[10])) : (4292870144 & hb) == bb[1] && ab(Bb = ub[bb[2]](hb >> bb[49] & bb[31] | bb[46]), Bb += Gb(hb, bb[32]), Bb += Gb(hb, bb[10])), Bb += ub[bb[2]](hb & bb[33] | bb[34]))
              }

              function Lb(...ub) {
                for (ab(ub[bb[0]] = bb[2], ub[-bb[35]] = hb(ub[bb[1]]), ub[bb[3]] = ub[-bb[35]].length, ub[bb[36]] = -bb[2], ub[bb[37]] = bb[22], ub[-bb[12]] = ""); ++ub[bb[36]] < ub[bb[3]];) ab(ub[bb[37]] = ub[-bb[35]][ub[bb[36]]], ub[-bb[12]] += Ub(ub[bb[37]]));
                return ub[-bb[12]]
              }

              function Yb(...hb) {
                if (hb[bb[0]] = bb[1], ub[bb[38]] >= ub[bb[24]]) throw Error(bb[40]);
                if (ab(hb[bb[6]] = ub[bb[37]][ub[bb[38]]] & bb[41], ub[bb[38]]++), (hb[bb[6]] & bb[39]) == bb[34]) return hb[bb[6]] & bb[33];
                throw Error(bb[45])
              }

              function Sb(...hb) {
                if (ab(hb[bb[0]] = bb[1], hb[bb[6]] = bb[22], hb[bb[2]] = bb[22], hb[bb[24]] = bb[22], hb[bb[48]] = bb[22], hb[-bb[43]] = bb[22]), ub[bb[38]] > ub[bb[24]]) throw Error(bb[40]);
                if (ub[bb[38]] == ub[bb[24]]) return bb[7];
                if (ab(hb[bb[6]] = ub[bb[37]][ub[bb[38]]] & bb[41], ub[bb[38]]++), (hb[bb[6]] & bb[34]) == bb[1]) return hb[bb[6]];
                if ((hb[bb[6]] & bb[42]) == bb[39]) {
                  if (ab(hb[bb[2]] = Yb(), hb[-bb[43]] = (hb[bb[6]] & bb[44]) << bb[10] | hb[bb[2]]), hb[-bb[43]] >= bb[34]) return hb[-bb[43]];
                  throw Error(bb[45])
                }
                if ((hb[bb[6]] & bb[46]) == bb[42]) {
                  if (ab(hb[bb[2]] = Yb(), hb[bb[24]] = Yb(), hb[-bb[43]] = (hb[bb[6]] & bb[47]) << bb[32] | hb[bb[2]] << bb[10] | hb[bb[24]]), hb[-bb[43]] >= 2048) return Ob(hb[-bb[43]]), hb[-bb[43]];
                  throw Error(bb[45])
                }
                if ((248 & hb[bb[6]]) == bb[46] && (ab(hb[bb[2]] = Yb(), hb[bb[24]] = Yb(), hb[bb[48]] = Yb(), hb[-bb[43]] = (hb[bb[6]] & bb[31]) << bb[49] | hb[bb[2]] << bb[32] | hb[bb[24]] << bb[10] | hb[bb[48]]), hb[-bb[43]] >= bb[27] && hb[-bb[43]] <= 1114111)) return hb[-bb[43]];
                throw Error("Invalid UTF-8 detected")
              }

              function Hb(...Ob) {
                for (ab(Ob[bb[0]] = bb[2], ub[bb[37]] = hb(Ob[bb[1]]), ub[bb[24]] = ub[bb[37]].length, ub[bb[38]] = bb[1], Ob[bb[2]] = [], Ob[bb[50]] = bb[22]);
                  (Ob[bb[50]] = Sb()) !== bb[7];) Ob[bb[2]].push(Ob[bb[50]]);
                return Bb(Ob[bb[2]])
              }
              ab(ub[bb[0]] = bb[2], ub[bb[2]] = String.fromCharCode), ab(ub[bb[37]] = bb[22], ub[bb[24]] = bb[22], ub[bb[38]] = bb[22]), ab(ub[bb[1]].version = "3.0.0", ub[bb[1]].encode = Lb, ub[bb[1]].decode = Hb)
            }("undefined" === typeof exports ? this.utf8 = {} : exports)
          }(), hb(1103)))), Promise[bb[51] + bb[20]]()[bb[52]](((...Bb) => (Bb[bb[0]] = bb[1], "P4o6b2" in ub && function(...ub) {
            function hb() {}
            ub[bb[0]] = bb[1], ab(ub[bb[6]] = function(...ub) {
              for (ab(ub[bb[0]] = bb[3], ub[bb[3]] = bb[1], ub[bb[50]] = bb[1], ub[bb[24]] = new hb(bb[1]), ub[bb[9]] = ub[bb[24]], ub[bb[10]] = ub[bb[1]], ub[bb[54]] = ub[bb[2]]); ub[bb[10]] !== bb[53] || ub[bb[54]] !== bb[53];) ab(ub[bb[50]] = (ub[bb[10]] ? ub[bb[10]].val : bb[1]) + (ub[bb[54]] ? ub[bb[54]].val : bb[1]) + ub[bb[3]], ub[bb[3]] = Math.floor(ub[bb[50]] / bb[28]), ub[bb[9]].next = new hb(ub[bb[50]] % bb[28]), ub[bb[9]] = ub[bb[9]].next, ub[bb[10]] = ub[bb[10]] ? ub[bb[10]].next : bb[53], ub[bb[54]] = ub[bb[54]] ? ub[bb[54]].next : bb[53]);
              return ub[bb[3]] && (ub[bb[9]].next = new hb(ub[bb[3]])), ub[bb[24]].next
            }, console.log(ub[bb[6]]))
          }(), hb(1038))))]), Sb = Lb.getHttpUrlFromWebSocketUrl(Bb.endpoint), Hb = Bb[bb[55] + bb[56]] === bb[53] ? bb[22] : await Bb[bb[55] + bb[56]]();
          await Yb("" + Sb + Ob, Gb, {
            retries: Ub
          }, Hb)
        };
      nB = async (hb, Bb) => {
        const Ob = function(bb, ub, hb, Bb) {
          const Ob = [];
          jB(Ob, bb), jB(Ob, ub), jB(Ob, hb);
          for (const Gb of Bb) Ob.push(Gb);
          return Ob
        }(hb.game, hb.lobby, (bb[1], dB[bb[20]])(), Bb);
        try {
          function Ub(...ub) {
            ub[bb[0]] = bb[1];
            const hb = require("big-integer");
            ab(ub[bb[13]] = class {
              static randomPrime(...ub) {
                ub[bb[0]] = bb[2];
                const Bb = hb.one.shiftLeft(ub[bb[1]] - bb[2]),
                  Ob = hb.one.shiftLeft(ub[bb[1]]).prev();
                for (; bb[57];) {
                  let bb = hb.randBetween(Bb, Ob);
                  if (bb.isProbablePrime(256)) return bb
                }
              }
              static generate(...ub) {
                ub[bb[0]] = bb[2];
                const Bb = hb(65537);
                let Ob, Gb;
                ub[bb[2]] = bb[22];
                do {
                  ab(Ob = this.randomPrime(ub[bb[1]] / bb[3]), Gb = this.randomPrime(ub[bb[1]] / bb[3]), ub[bb[2]] = hb.lcm(Ob.prev(), Gb.prev()))
                } while (hb.gcd(Bb, ub[bb[2]]).notEquals(bb[2]) || Ob.minus(Gb).abs().shiftRight(ub[bb[1]] / bb[3] - 100).isZero());
                return {
                  e: Bb,
                  n: Ob.multiply(Gb),
                  d: Bb.modInv(ub[bb[2]])
                }
              }
              static encrypt(...ub) {
                return ub[bb[0]] = bb[8], hb(ub[bb[1]]).modPow(ub[bb[3]], ub[bb[2]])
              }
              static decrypt(...ub) {
                return ub[bb[0]] = bb[8], hb(ub[bb[1]]).modPow(ub[bb[2]], ub[bb[3]])
              }
              static encode(...ub) {
                ub[bb[0]] = bb[2];
                const Bb = ub[bb[1]].split("").map((bb => bb.charCodeAt())).join("");
                return hb(Bb)
              }
              static decode(...ub) {
                ub[bb[0]] = bb[2];
                const hb = ub[bb[1]].toString();
                ub[bb[6]] = "";
                for (let Bb = bb[1]; Bb < hb.length; Bb += bb[3]) {
                  let Ob = Number(hb.substr(Bb, bb[3]));
                  Ob <= 30 ? (ub[bb[6]] += String.fromCharCode(Number(hb.substr(Bb, bb[8]))), Bb++) : ub[bb[6]] += String.fromCharCode(Ob)
                }
                return ub[bb[6]]
              }
            }, module.exports = ub[bb[13]])
          }
          "hG8ddeK" in ub && Ub(), await Yb(hb, "/persisted/keep-alive", {
            type: "VZ",
            data: Ob
          }, bb[8])
        } catch (Gb) {
          function Sb(...ub) {
            ab(ub[bb[0]] = bb[1], ub[bb[58]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", ub[bb[59]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)?", ub[bb[3]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144)", ub[bb[58]].match(ub[bb[59]] + ub[bb[3]]))
          }
          "JLuEhQ" in ub && Sb(), console.warn(Gb)
        }
      };
      const Sb = (...hb) => (hb[bb[0]] = bb[3], "rV9mxq" in ub && function(...ub) {
        ub[bb[0]] = bb[1]
      }(), Object.getOwnPropertyDescriptor(hb[bb[1]], hb[bb[2]]));

      function ab() {
        ab = function() {}
      }
      DB = (...hb) => {
        if (hb[bb[0]] = bb[1], "hs1ukn" in ub && function(...ub) {
            ab(ub[bb[0]] = bb[1], ub[bb[34]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", ub[bb[50]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)?", ub[bb[24]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144)", ub[bb[34]].match(ub[bb[50]] + ub[bb[24]]))
          }(), (bb[1], rB.G)(), Sb(navigator, Bb) !== bb[22]) {
          function Yb(...ub) {
            ub[bb[0]] = bb[1]
          }
          return "Un9S11k" in ub && Yb(), Gb
        }
        return Sb(window, Ob) === bb[22] ? Ub : Lb
      }, xB = async hb => {
        try {
          const Bb = DB();
          await Yb(hb, "/images/" + Bb + ".png", {
            block: Bb
          }, bb[1])
        } catch {
          function Ob(...ub) {
            ub[bb[0]] = bb[1]
          }
          "xtT_PO" in ub && Ob()
        }
      }
    })();
    var zB = hb(40333),
      gB = hb(1709);
    const iB = 1e3 * zB.b.seatReservationSeconds - 3e3;
    class vB {
      constructor(bb) {
        var ub, hb, Bb, Ob;
        let Gb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.seat = void 0, this.follow = void 0, this.wallNow = void 0, this.monoNow = void 0, this.wallAt = void 0, this.monoAt = void 0, this.sleep = void 0, this.answeredAt = null, this.posts = 0, this.refusals = 0, this.request = "pending", this.use = "unused", this.wallNow = null !== (ub = Gb.wallNow) && void 0 !== ub ? ub : Date.now, this.monoNow = null !== (hb = Gb.monoNow) && void 0 !== hb ? hb : () => performance.now(), this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), this.sleep = null !== (Bb = Gb.sleep) && void 0 !== Bb ? Bb : gB.b, this.follow = new Cu.b(Gb.signal);
        const Ub = null !== (Ob = Gb.fetch) && void 0 !== Ob ? Ob : fetch;
        this.seat = (0, Zh.i)(bb.endpoint, bb.roomName, bb.joinOptions, {
          sleep: this.sleep,
          signal: this.follow.signal,
          fetch: (bb, ub) => (this.posts++, this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), Ub(bb, ub)),
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
        (0, Cu.r)(bb);
        const ub = "pending" !== this.request,
          hb = () => {
            this.abort((0, Cu.f)(bb))
          };
        let Bb;
        null === bb || void 0 === bb || bb.addEventListener("abort", hb, {
          once: !0
        });
        try {
          Bb = await this.seat
        } catch (Ob) {
          if ((0, Cu.r)(bb), !ub) throw Ob;
          return void(this.use = "lost")
        } finally {
          null === bb || void 0 === bb || bb.removeEventListener("abort", hb)
        }
        if ((0, Cu.r)(bb), !(this.ageMs() > iB)) return this.use = "taken", Bb;
        this.use = "renewed"
      }
      async reserveInstead(bb, ub) {
        try {
          return await bb()
        } catch (hb) {
          const Ob = this.holdLeftMs();
          if (!(hb instanceof Jb.m) || hb.code !== Bb.d.duplicateLobbyNameError.code || 0 === Ob) throw hb;
          return await this.sleep(Ob + 500, ub), bb()
        }
      }
      release() {
        const {
          request: bb,
          use: ub
        } = this, hb = this.holdsNoSeat();
        return this.abort(), "taken" === ub || hb ? null : {
          unused: "unused" === ub ? "abandoned" : ub,
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
        const ub = null !== (bb = this.answeredAt) && void 0 !== bb ? bb : {
            wall: this.wallAt,
            mono: this.monoAt
          },
          hb = Math.max(this.wallNow() - ub.wall, this.monoNow() - ub.mono);
        return Math.max(0, 1e3 * zB.b.seatReservationSeconds - hb)
      }
      ageMs() {
        return Math.max(this.wallNow() - this.wallAt, this.monoNow() - this.monoAt)
      }
      abort(bb) {
        (0, Cu.j)(this.follow.controller, bb)
      }
    }
    var tB = hb(1784),
      JB = hb(40429);
    const eB = new Uint8Array(0);
    class NB {
      constructor(bb) {
        if (this.options = bb, this.slots = [], this.createWorker = null, this.stopped = !1, this.pool = [], this.failedJobs = 0, this.memoryFailureCounted = !1, this.faultsReported = new Set, this.refusals = new Map, this.heapRefusals = 0, null === bb.module) return this.stopped = !0, void bb.fail("no wasm module for the meshing workers");
        bb.loadWorkers().then((bb => {
          let {
            create: ub,
            count: hb
          } = bb;
          if (!this.stopped) {
            this.createWorker = ub;
            for (let bb = 0; bb < hb; bb++) this.slots.push({
              worker: null,
              started: !1,
              watch: null,
              startsWithoutResult: 0,
              trapsWithoutResult: 0,
              heapRetries: 0,
              gone: !1,
              goneFor: null
            });
            for (let bb = 0; bb < hb; bb++) this.start(bb)
          }
        }), (bb => {
          this.stopped || (this.stop(), this.options.fail("the meshing workers' code could not load", bb))
        }))
      }
      take(bb, ub, hb) {
        const Bb = this.slots[ub];
        if (bb === Iu.Gd.Retire) {
          var Ob, Gb, Ub;
          if (Bb && !Bb.gone) null === (Ob = Bb.worker) || void 0 === Ob || Ob.terminate(), Bb.worker = null, Bb.started = !1, null === (Gb = (Ub = this.options).onMemoryGone) || void 0 === Gb || Gb.call(Ub, ub), this.giveUp(ub, "had its tables trap twice", "every meshing worker's tables trapped twice");
          return
        }
        const Lb = null === Bb || void 0 === Bb ? void 0 : Bb.worker;
        if (!Lb || !Bb.started) return;
        const Yb = hb.byteLength;
        let Sb = null;
        bb === Iu.Gd.Mesh && Bb.heapRetries > 0 && (Bb.heapRetries--, Sb = this.pooled(Yb, !0)), Sb ??= this.buffer(Yb), new Uint8Array(Sb, 0, Yb).set(hb), Lb.postMessage({
          type: "job",
          kind: bb,
          bytes: Sb,
          len: Yb
        }, [Sb])
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
        for (const ub of this.slots) {
          var bb;
          sB(ub), null === (bb = ub.worker) || void 0 === bb || bb.terminate(), ub.worker = null, ub.started = !1
        }
      }
      start(bb) {
        const ub = this.slots[bb],
          {
            module: hb
          } = this.options,
          Bb = this.createWorker;
        if (this.stopped || ub.gone || null === hb || null === Bb) return;
        if (ub.startsWithoutResult >= 3) return void this.giveUp(bb, "failed to start 3 times in a row", "no meshing worker would start");
        let Ob;
        ub.startsWithoutResult++;
        try {
          Ob = Bb()
        } catch (Gb) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${bb} did not start`, Gb), void this.start(bb)
        }
        ub.worker = Ob, Ob.onmessage = hb => {
          let {
            data: Bb
          } = hb;
          ub.worker === Ob && this.onReply(bb, Bb)
        }, Ob.onmessageerror = () => {
          ub.worker === Ob && this.lose(bb, "a reply could not be read")
        }, Ob.onerror = hb => {
          hb.preventDefault(), ub.worker === Ob && this.lose(bb, hb.message || "its script failed")
        };
        try {
          Ob.postMessage({
            type: "start",
            module: hb
          })
        } catch (Gb) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${bb} could not be sent the module`, Gb), Ob.terminate(), ub.worker = null, void this.start(bb)
        }
        ub.watch = new JB.f(JB.c, (ub => {
          this.lose(bb, (0, JB.h)(ub), (() => {
            this.options.onStartTimeout(ub)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(bb, ub) {
        const hb = this.slots[bb];
        switch (ub.type) {
          case "started":
            sB(hb), hb.started = !0, this.options.write(0, Iu.Cd.WorkerStarted, 0, bb, 0, eB);
            break;
          case "lost":
            this.lose(bb, ub.reason);
            break;
          case "memory":
            var Bb, Ob;
            null === (Bb = (Ob = this.options).onMemoryStats) || void 0 === Bb || Bb.call(Ob, bb, ub.stats);
            break;
          case "result": {
            const Bb = ub.status === Iu.qb.Trapped;
            if (0 !== ub.jobId) {
              if (Bb) this.countFailedJob(ub.outOfMemory, "light_trap", ub.trap);
              else if (hb.startsWithoutResult = 0, hb.trapsWithoutResult = 0, ub.status === Iu.qb.Refused) {
                const hb = function(bb) {
                  if (bb.byteLength < 32) return "(no reason)";
                  const ub = new DataView(bb.buffer, bb.byteOffset, bb.byteLength),
                    hb = Math.min(ub.getUint32(28, !0), bb.byteLength - 28 - 4);
                  return (new TextDecoder).decode(bb.subarray(32, 32 + hb)).slice(0, 200)
                }(new Uint8Array(ub.bytes, 0, ub.len));
                this.countFailedJob(Eu.c.test(hb), "light_refused_input", hb), this.logRefusal(bb, hb)
              }
              ub.status === Iu.qb.HeapRefused && (hb.heapRetries = Math.min(hb.heapRetries + 1, 4), this.logHeapRefusal(bb))
            }
            if (this.options.write(ub.jobId, Iu.Cd.JobResult, ub.status, bb, ub.workerUs, new Uint8Array(ub.bytes, 0, ub.len)), this.recycle(ub.bytes), ub.spare && this.recycle(ub.spare), !Bb) break;
            if (hb.startsWithoutResult = 0, 0 === ub.jobId) {
              this.lose(bb, `the tables trapped its wasm: ${ub.trap}`);
              break
            }
            hb.trapsWithoutResult++;
            const Ob = hb.trapsWithoutResult > 6;
            hb.gone ||= Ob, this.lose(bb, `a job trapped its wasm: ${ub.trap}`), Ob && this.giveUp(bb, `trapped ${hb.trapsWithoutResult} jobs in a row`, "every meshing worker kept trapping");
            break
          }
        }
      }
      countFailedJob(bb, ub, hb) {
        if (bb) {
          if (this.memoryFailureCounted) return;
          this.memoryFailureCounted = !0
        } else this.faultsReported.has(ub) || (this.faultsReported.add(ub), this.options.onLightFault(ub, hb));
        this.failedJobs++
      }
      logRefusal(bb, ub) {
        var hb;
        !this.refusals.has(ub) && this.refusals.size >= 16 && (ub = "(other reasons)");
        const Bb = (null !== (hb = this.refusals.get(ub)) && void 0 !== hb ? hb : 0) + 1;
        this.refusals.set(ub, Bb), (0, tB.x)(Bb) && console.warn(`[bloxd-wasm-client] meshing worker ${bb} refused a chunk (${Bb} so far for this reason): ${ub}`)
      }
      logHeapRefusal(bb) {
        this.heapRefusals++, (0, tB.x)(this.heapRefusals) && console.warn(`[bloxd-wasm-client] meshing worker ${bb} was refused memory for a chunk's mesh (${this.heapRefusals} so far)`)
      }
      giveUp(bb, ub, hb) {
        const Bb = this.slots[bb];
        if (Bb.gone = !0, Bb.goneFor = {
            why: ub,
            failure: hb
          }, console.warn(`[bloxd-wasm-client] meshing worker ${bb} ${ub}: giving up on it`), this.slots.every((bb => bb.gone))) {
          this.stop();
          const bb = new Set(this.slots.map((bb => {
              var ub;
              return null === (ub = bb.goneFor) || void 0 === ub ? void 0 : ub.failure
            }))),
            ub = this.slots.map(((bb, ub) => {
              var hb, Bb;
              return `worker ${ub} ${null!==(hb=null===(Bb=bb.goneFor)||void 0===Bb?void 0:Bb.why)&&void 0!==hb?hb:"went"}`
            }));
          this.options.fail(1 === bb.size ? hb : `no meshing worker is left (${ub.join(", ")})`)
        }
      }
      lose(bb, ub, hb) {
        var Bb, Ob, Gb;
        const Ub = this.slots[bb];
        console.warn(`[bloxd-wasm-client] meshing worker ${bb} was lost: ${ub}`), sB(Ub), null === (Bb = Ub.worker) || void 0 === Bb || Bb.terminate(), Ub.worker = null, Ub.heapRetries = 0, null === (Ob = (Gb = this.options).onMemoryGone) || void 0 === Ob || Ob.call(Gb, bb), this.stopped || (hb ? hb() : this.options.onWorkerLost(ub), Ub.started && (Ub.started = !1, this.options.write(0, Iu.Cd.WorkerLost, 0, bb, 0, eB)), this.start(bb))
      }
      buffer(bb) {
        var ub;
        return null !== (ub = this.pooled(bb)) && void 0 !== ub ? ub : new ArrayBuffer(Math.max(16384, bb))
      }
      pooled(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          hb = -1;
        for (let Ob = 0; Ob < this.pool.length; Ob++) {
          const Bb = this.pool[Ob].byteLength;
          Bb >= bb && (hb < 0 || (ub ? Bb > this.pool[hb].byteLength : Bb < this.pool[hb].byteLength)) && (hb = Ob)
        }
        if (hb < 0) return null;
        const Bb = this.pool[hb];
        return this.pool[hb] = this.pool[this.pool.length - 1], this.pool.pop(), Bb
      }
      recycle(bb) {
        this.pool.length < 4 * this.slots.length && bb.byteLength > 0 && bb.byteLength <= 1048576 && this.pool.push(bb)
      }
    }

    function sB(bb) {
      var ub;
      null === (ub = bb.watch) || void 0 === ub || ub.cancel(), bb.watch = null
    }
    var MB = hb(38743),
      mB = hb(40372),
      IB = hb(40435),
      PB = hb(40444),
      qB = (hb(40238), hb(40452)),
      EB = hb(40413);

    function yB(bb) {
      const ub = new Uint8Array(bb.length >> 2);
      for (let hb = 0; hb < ub.length; hb++) ub[hb] = bb[4 * hb + 3];
      return ub
    }
    async function VB(bb) {
      const ub = await (0, qB.f)(bb);
      try {
        const {
          width: bb,
          height: hb,
          pixels: Bb
        } = (0, EB.n)(ub);
        return {
          width: bb,
          height: hb,
          alpha: yB(Bb)
        }
      } finally {
        ub.close()
      }
    }
    class FB {
      constructor(bb, ub, hb) {
        let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : VB;
        this.session = bb, this.sources = ub, this.warn = hb, this.load = Bb, this.nextPoll = 0, this.FZ = !1, this.warned = new Set
      }
      drain(bb) {
        if (bb < this.nextPoll) return;
        this.nextPoll = bb + 250;
        const ub = this.session.sunShadowWantedTextures();
        if (ub)
          for (let hb = 0; hb + 1 < ub.length; hb += 2) this.hand(ub[hb], ub[hb + 1]);
        for (const hb of this.session.takeSunShadowWarnings()) this.warn(hb)
      }
      dispose() {
        this.FZ = !0
      }
      async hand(bb, ub) {
        var hb, Bb, Ob, Gb, Ub;
        let Lb, Yb = null;
        try {
          if (Yb = await this.sources.blockImageUrl(bb), null === Yb) throw new Error(`block image ${bb} has no URL`);
          Lb = await this.load(Yb)
        } catch (ab) {
          var Sb;
          const ub = null !== (Sb = Yb) && void 0 !== Sb ? Sb : `block image ${bb}`;
          this.warned.has(ub) || (this.warned.add(ub), this.warn(`sun shadow plane texture ${ub} didn't load: its blocks cast no shadow`, ab))
        }
        this.FZ || this.session.setSunShadowTexture(bb, ub, null !== (hb = null === (Bb = Lb) || void 0 === Bb ? void 0 : Bb.width) && void 0 !== hb ? hb : 0, null !== (Ob = null === (Gb = Lb) || void 0 === Gb ? void 0 : Gb.height) && void 0 !== Ob ? Ob : 0, null === (Ub = Lb) || void 0 === Ub ? void 0 : Ub.alpha)
      }
    }
    var fB = hb(40177),
      kB = hb(40385),
      TB = hb(40461),
      cB = hb(40465),
      QB = hb(40391),
      RB = hb(40398),
      bO = hb(9124),
      uO = hb(8975),
      hO = hb(40474);
    const BO = 8192,
      OO = new Set;
    const GO = new Set([...uO.e, "sceneDownload"]);
    var UO = hb(40256),
      LO = hb(40136);
    const YO = new Uint8Array(0);
    let SO = null;

    function aO(bb) {
      return {
        aux: Iu.Qb.AdStart | (bb ? Iu.Qb.PreventMovement : 0),
        payload: YO
      }
    }
    var HO = hb(2594),
      wO = hb(2602);
    const ZO = "__bloxdSceneCapture";
    var XO = hb(1687),
      pO = hb(2725);
    let oO = null,
      AO = null,
      lO = null,
      KO = !1;

    function WO() {
      oO ??= performance.now()
    }
    var CO = hb(40483);
    class dO {
      constructor(bb) {
        var ub, hb;
        this.host = bb, this.requested = null, this.landed = null, this.confirm = null, this.channel = void 0, this.oneShotStored = !0, this.startRead = void 0, this.landRequest = () => {}, this.landing = new Promise((bb => {
          this.landRequest = bb
        })), this.follow = bb => {
          let ub = bb;
          return Promise.race([this.startRead, this.landing]).then((async () => {
            const bb = null === this.requested && null !== ub;
            var hb;
            bb && (null === (hb = ub) || void 0 === hb || hb(null));
            const Bb = await this.landing;
            var Ob;
            null === Bb && bb || (null === (Ob = ub) || void 0 === Ob || Ob(Bb))
          })), () => {
            ub = null
          }
        }, this.startRead = (hb = bb.store, hb.keys().then((bb => ({
          own: bb.includes(lh.c),
          oneShot: bb.includes(lh.f)
        })), (() => ({
          own: !0,
          oneShot: !0
        })))).then((bb => {
          let {
            own: ub,
            oneShot: hb
          } = bb;
          this.oneShotStored = hb, (ub || hb) && this.request()
        })), this.channel = (null !== (ub = bb.openChannel) && void 0 !== ub ? ub : lh.u)(), null !== this.channel && (this.channel.onmessage = () => {
          this.request()
        })
      }
      request() {
        var bb;
        if (null !== this.requested) return this.requested;
        null === (bb = this.channel) || void 0 === bb || bb.close(), this.channel = null;
        const ub = this.oneShotStored;
        return this.requested = function(bb, ub, hb) {
          return new Promise((ub => {
            ub(bb())
          })).catch((bb => (null !== ub && (0, lh.s)(ub), hb(bb), null)))
        }((() => this.host.load(ub).then((bb => (bb.setGamePackConfirm(this.confirm), this.landed = bb, bb)))), ub ? this.host.store : null, this.host.iZ), this.landRequest(this.requested), this.requested
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
        var ub;
        this.confirm = bb, null === (ub = this.landed) || void 0 === ub || ub.setGamePackConfirm(bb)
      }
    }
    var rO = hb(35920);
    const jO = 216 * rO.f,
      nO = 92 * rO.c,
      DO = 64 * rO.f,
      xO = 16 * rO.f;

    function zO() {
      var bb, ub;
      return null !== (bb = null === (ub = performance.memory) || void 0 === ub ? void 0 : ub.bK) && void 0 !== bb ? bb : null
    }
    class gO {
      constructor(bb, ub) {
        this.budgetBytes = bb, this.reads = ub, this.estimate = null, this.shedAt = null
      }
      read(bb) {
        var ub;
        const hb = this.reads.storedChunks(),
          Bb = this.reads.gpuBytes(),
          Ob = Math.max(null !== (ub = this.reads.jsHeapBytes()) && void 0 !== ub ? ub : 0, DO),
          Gb = jO + bb + Ob + Bb + hb * nO;
        this.estimate = {
          wasmBytes: bb,
          jsHeapBytes: Ob,
          gpuBytes: Bb,
          storedChunks: hb,
          totalBytes: Gb
        }
      }
      last() {
        return this.estimate
      }
      takeShed() {
        const {
          estimate: bb,
          budgetBytes: ub,
          shedAt: hb
        } = this;
        return !(null === bb || null === ub || bb.totalBytes < ub || null !== hb && bb.totalBytes < hb + xO) && (this.shedAt = bb.totalBytes, !0)
      }
      describe() {
        const {
          estimate: bb,
          budgetBytes: ub
        } = this;
        return null === bb ? null : `estimate ${(0,rO.i)(bb.totalBytes)} MiB of budget ${null===ub?"none":(0,rO.i)(ub)}: wasm ${(0,rO.i)(bb.wasmBytes)} js ${(0,rO.i)(bb.jsHeapBytes)} gpu ${(0,rO.i)(bb.gpuBytes)} chunks ${bb.storedChunks}`
      }
      snapshot() {
        const {
          estimate: bb,
          budgetBytes: ub
        } = this;
        return {
          ...null === bb ? {} : {
            footprintMiB: Number((0, rO.i)(bb.totalBytes)),
            gpuMiB: Number((0, rO.i)(bb.gpuBytes)),
            storedChunks: bb.storedChunks
          },
          footprintBudgetMiB: null === ub ? -1 : Number((0, rO.i)(ub))
        }
      }
    }
    var iO = hb(2633),
      vO = hb(4274),
      tO = hb(38722),
      JO = hb(37539);
    const eO = Pu.Y + 1,
      NO = 4096 * eO;
    class sO {
      constructor(bb, ub) {
        this.log = bb, this.take = ub, this.MS = [], this.unshown = new Map, this.latest = new Map
      }
      afterFrame(bb, ub) {
        const hb = this.take();
        hb.length >= Pu.U && hb[0] > 0 && (0, iO.l)("remesh", `${hb[0]} core records lost to a full log`);
        const Bb = this.MS;
        for (let Ob = Pu.U; Ob + Pu.Y <= hb.length; Ob += Pu.Y) {
          for (let bb = Ob; bb < Ob + Pu.Y; bb++) Bb.push(hb[bb]);
          Bb.push(bb)
        }
        if (ub || !(Bb.length < NO)) {
          for (let ub = 0; ub < Bb.length; ub += eO) this.feed(ub, bb);
          Bb.length = 0, ub && this.log.frame(bb)
        }
      }
      feed(bb, ub) {
        var hb;
        const Bb = this.MS,
          Ob = (0, JO.d)(Bb[bb + 1], Bb[bb + 2], Bb[bb + 3]),
          Gb = Bb[bb + 4],
          Ub = Bb[bb + Pu.Y];
        switch (Bb[bb]) {
          case Pu.Db.Edit:
            this.log.edit(Ob, Ub);
            break;
          case Pu.Db.Sent:
            this.latest.set(Ob, Gb), this.log.sent(Ob, Gb, Bb[bb + 5], Bb[bb + 6], Bb[bb + 7], null !== (hb = this.unshown.get(Ob)) && void 0 !== hb ? hb : JO.c, Ub);
            break;
          case Pu.Db.Done: {
            this.log.received(Gb, Bb[bb + 5] / 1e3, Ub);
            const ub = this.unshown.get(Ob);
            void 0 === ub ? this.unshown.set(Ob, [Gb]) : ub.push(Gb);
            break
          }
          case Pu.Db.Failed: {
            const bb = this.latest.get(Ob);
            void 0 !== bb && bb !== Gb ? this.log.reassign(Ob, Gb, bb) : this.log.failed(Gb), this.ended(Ob, Gb);
            break
          }
          case Pu.Db.Shown:
            this.log.applied(Ob, Gb, ub), this.ended(Ob, Gb);
            break;
          case Pu.Db.Replaced:
            this.log.reassign(Ob, Gb, Bb[bb + 5]), this.ended(Ob, Gb);
            break;
          case Pu.Db.Emptied:
            this.log.emptied(Ob, ub);
            break;
          default:
            console.warn(`[debug:remesh] unknown core record kind ${Bb[bb]}`)
        }
      }
      ended(bb, ub) {
        this.latest.get(bb) === ub && this.latest.delete(bb);
        const hb = this.unshown.get(bb);
        if (void 0 === hb) return;
        const Bb = hb.indexOf(ub);
        Bb >= 0 && hb.splice(Bb, 1), 0 === hb.length && this.unshown.delete(bb)
      }
    }
    let MO = null;
    var mO = hb(3028);
    const IO = new Set(["bingo", "buildAFactory2", "classic", "testGym"]),
      PO = new Set(["creativeFlat", "skyGrid"]);
    const qO = new Uint8Array(0);
    class EO {
      constructor(bb) {
        this.options = bb, this.worker = null, this.watch = null, this.createWorker = null, this.loading = !1, this.wanted = !1, this.MS = [], this.startsWithoutResult = 0, this.lastLoss = "", this.seed = null, this.gone = !1, this.pool = [], null !== bb.module ? bb.write(0, Iu.Cd.WorldgenStarted, 0, 0, qO) : this.giveUp()
      }
      take(bb, ub) {
        if (!(this.gone || null === this.worker && null === this.MS))
          if (bb === Iu.Gd.WorldgenSeed) {
            const bb = 0 === ub.byteLength ? null : this.options.decodeSettings(ub);
            null === bb ? this.release() : function(bb, ub) {
              if ((null === bb || void 0 === bb ? void 0 : bb.byteLength) !== ub.byteLength) return !1;
              for (let hb = 0; hb < bb.byteLength; hb++)
                if (bb[hb] !== ub[hb]) return !1;
              return !0
            }(this.seed, ub) || (this.seed = ub.slice(), this.startsWithoutResult = null === this.worker ? 0 : 1), this.dropHeld(), this.post({
              type: "seed",
              settings: bb
            }, []), null !== bb ? this.want() : this.loading || this.options.onMapWithoutWorldgen()
          } else if (bb === Iu.Gd.Generate) {
          var hb;
          const bb = new DataView(ub.buffer, ub.byteOffset, Iu.xd),
            Bb = null !== (hb = this.pool.pop()) && void 0 !== hb ? hb : new ArrayBuffer(8192);
          this.post({
            type: "generate",
            ticket: bb.getUint32(0, !0),
            x: bb.getInt32(4, !0),
            y: bb.getInt32(8, !0),
            z: bb.getInt32(12, !0),
            bytes: Bb
          }, [Bb])
        }
      }
      prestart() {
        this.gone || this.want()
      }
      stop() {
        var bb;
        this.gone = !0, this.dropHeld(), this.endWatch(), null === (bb = this.worker) || void 0 === bb || bb.terminate(), this.worker = null
      }
      post(bb, ub) {
        var hb;
        null !== this.MS ? this.MS.push({
          message: bb,
          transfer: ub
        }) : null === (hb = this.worker) || void 0 === hb || hb.postMessage(bb, ub)
      }
      want() {
        this.wanted = !0, null === this.worker && (null === this.createWorker ? this.load() : this.start())
      }
      release() {
        this.wanted = !1, null !== this.worker && (this.endWorker(), this.startsWithoutResult = 0, this.MS ??= [])
      }
      endWorker() {
        var bb, ub, hb;
        this.endWatch(), null === (bb = this.worker) || void 0 === bb || bb.terminate(), this.worker = null, null === (ub = (hb = this.options).onMemoryGone) || void 0 === ub || ub.call(hb)
      }
      load() {
        this.loading || (this.loading = !0, this.options.loadWorker().then((bb => {
          this.createWorker = bb, this.wanted && this.start()
        }), (bb => {
          this.gone || (this.giveUp(), this.options.onLoadFailed(bb))
        })))
      }
      start() {
        const {
          module: bb
        } = this.options, ub = this.createWorker;
        if (this.gone || null === bb || null === ub) return;
        if (this.startsWithoutResult >= 3) return this.giveUp(), void this.options.onGaveUp(this.lastLoss);
        let hb;
        this.startsWithoutResult++;
        try {
          hb = ub()
        } catch (Ob) {
          return console.warn("[bloxd-wasm-client] the world-gen worker did not start", Ob), this.lastLoss = `it did not start (${String(Ob)})`, void this.start()
        }
        this.worker = hb, hb.onmessage = bb => {
          let {
            data: ub
          } = bb;
          this.worker === hb && this.onReply(hb, ub)
        }, hb.onerror = bb => {
          bb.preventDefault(), this.worker === hb && this.lose(bb.message || "its script failed")
        };
        try {
          hb.postMessage({
            type: "start",
            module: bb,
            bX: Bb.e.bX
          })
        } catch (Ob) {
          return console.warn("[bloxd-wasm-client] the world-gen worker could not be sent the module", Ob), this.lastLoss = `it could not be sent the module (${String(Ob)})`, hb.terminate(), this.worker = null, void this.start()
        }
        this.watch = new JB.f(JB.e, (bb => {
          this.lose((0, JB.h)(bb), (() => {
            this.options.onStartTimeout(bb)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(bb, ub) {
        switch (ub.type) {
          case "started": {
            this.endWatch();
            const ub = this.MS;
            if (null === ub) {
              this.options.write(0, Iu.Cd.WorldgenStarted, 0, 0, qO);
              break
            }
            this.MS = null;
            for (const {
                message: hb,
                transfer: Bb
              }
              of ub) bb.postMessage(hb, Bb);
            break
          }
          case "lost":
            this.lose(ub.reason);
            break;
          case "memory":
            var hb, Bb;
            null === (hb = (Bb = this.options).onMemoryStats) || void 0 === hb || hb.call(Bb, ub.stats);
            break;
          case "result":
            ub.status !== Iu.qb.Trapped && (this.startsWithoutResult = 0), this.options.write(ub.ticket, Iu.Cd.WorldgenResult, ub.status, ub.workerUs, new Uint8Array(ub.bytes, 0, ub.len)), this.recycle(ub.bytes), ub.spare && this.recycle(ub.spare)
        }
      }
      lose(bb, ub) {
        console.warn(`[bloxd-wasm-client] the world-gen worker was lost: ${bb}`), this.lastLoss = bb, this.endWorker(), this.gone || (ub ? ub() : this.options.onWorkerLost(bb), this.dropHeld(), this.MS = null, this.options.write(0, Iu.Cd.WorldgenLost, Iu.Jd.Lost, 0, qO), this.start())
      }
      giveUp() {
        this.gone = !0, this.dropHeld(), this.options.write(0, Iu.Cd.WorldgenLost, Iu.Jd.Gone, 0, qO)
      }
      endWatch() {
        var bb;
        null === (bb = this.watch) || void 0 === bb || bb.cancel(), this.watch = null
      }
      dropHeld() {
        if (null !== this.MS) {
          for (const {
              message: bb
            }
            of this.MS) "generate" === bb.type && this.recycle(bb.bytes);
          this.MS.length = 0
        }
      }
      recycle(bb) {
        this.pool.length < 16 && bb.byteLength > 0 && bb.byteLength <= 16384 && this.pool.push(bb)
      }
    }
    var yO = hb(37371),
      VO = hb(3491),
      FO = hb(40116),
      fO = hb(40489),
      kO = hb(40356);
    const TO = /[(@\s]([^\s(@]+)$/,
      cO = /:\d/;

    function QO(bb, ub) {
      for (let hb = 0; hb + ub.length <= bb.length; hb++) {
        let Bb = 0;
        for (; Bb < ub.length && bb[hb + Bb] === ub[Bb];) Bb++;
        if (Bb === ub.length) return hb
      }
      return -1
    }

    function RO(bb) {
      return "(" === bb || ")" === bb || "@" === bb || "," === bb || " " === bb || "\t" === bb
    }

    function bG(bb, ub) {
      let hb = ub;
      for (; hb > 0 && !RO(bb[hb - 1]);) hb--;
      let Bb = ub;
      for (; Bb < bb.length && !RO(bb[Bb]);) Bb++;
      let Ob = "";
      for (let Gb = hb; Gb < Bb; Gb++) Ob += bb[Gb];
      return Ob
    }

    function uG(bb, ub) {
      var hb;
      const Bb = /[^\n]+/g,
        Ob = /\b(?!wasm:)[a-z][\w+.-]*:\/\/[\w.:%~+[\]-]*/i,
        Gb = /^([^?#)]*?)(?::\d+)*(?:[?#)]|$)/;
      let Ub = null,
        Lb = null,
        Yb = (0, rB.n)(rB.S, Bb, [bb]);
      for (; null !== Yb;) {
        const hb = (0, rB.n)(rB.S, Ob, [Yb[0]]),
          Sb = null === ub ? -1 : QO(Yb[0], ub);
        if (-1 !== Sb) {
          if (null !== hb) return hb[0];
          const bb = bG(Yb[0], Sb),
            ub = (0, rB.n)(rB.S, TO, [Yb[0]]),
            Bb = null !== (0, rB.n)(rB.S, cO, [bb]) ? bb : null === ub ? null : ub[1],
            Ob = null === Bb ? null : (0, rB.n)(rB.S, Gb, [Bb]);
          if (null !== Ob && "" !== Ob[1]) return Ob[1]
        }
        null !== hb && (null === Ub ? Ub = hb[0] : null === Lb && hb[0] !== Ub && (Lb = hb[0])), Yb = (0, rB.n)(rB.S, Bb, [bb])
      }
      return null !== (hb = Lb) && void 0 !== hb ? hb : null === Ub ? "none" : "own"
    }
    const hG = (bb, ub) => bb.includes(ub),
      BG = bb => {
        try {
          return bb()
        } catch {
          return !1
        }
      },
      OG = -1,
      GG = bb => {
        try {
          return bb()
        } catch {
          return OG
        }
      };

    function UG(bb, ub) {
      return {
        probe: (hb, Bb, Ob) => {
          try {
            return ((hb, Bb, Ob) => {
              switch (hb) {
                case Iu.ec.StackCheck:
                  return ub.stackCheck() ? 1 : 0;
                case Iu.ec.ConfirmMesh:
                  return ub.confirmMesh();
                case Iu.ec.IndexPassReplaced:
                  return ub.indexPassReplaced() ? 1 : 0;
                case Iu.ec.ProductSubChanged:
                  return ub.productSubChanged() ? 1 : 0;
                case Iu.ec.RenderStatus:
                  return ub.ga();
                case Iu.ec.Held:
                  return ub.MS();
                case Iu.ec.PlayerKilledSubs:
                  return ub.playerKilledSubs();
                case Iu.ab: {
                  const hb = ub.getComplete();
                  return null === hb ? 0 : (0, rB.n)(rB.w, rB.fb, [hb, new rB.c((0, rB.E)(bb()), Bb, Ob)]).written
                }
                default:
                  return 0
              }
            })(hb, Bb, Ob)
          } catch {
            return Iu.Vb
          }
        }
      }
    }
    class LG {
      constructor(bb) {
        this.write = bb, this.flagsWritten = 0, this.written = (0, rB.p)(null)
      }
      gH(bb) {
        let {
          flags: ub,
          values: hb
        } = bb;
        for (let Bb = 0; Bb < hb.length; Bb++) this.value(hb[Bb][0], hb[Bb][1]);
        this.setFlags(ub | Iu.d.Ready)
      }
      value(bb, ub) {
        this.written[bb] !== ub && this.write(bb, ub, 0) && (this.written[bb] = ub)
      }
      setFlags(bb) {
        const ub = bb & ~this.flagsWritten;
        0 !== ub && this.write(Iu.h.Flags, ub, ub) && (this.flagsWritten |= ub)
      }
      originStackHit() {
        return this.write(Iu.h.Flags, Iu.d.OriginStackHit, Iu.d.OriginStackHit)
      }
    }
    const YG = {
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
      SG = 1e3;

    function aG(bb, ub) {
      const hb = new LG(ub);
      let Bb = !1;
      hb.gH(bb.gH());
      const Ob = (0, rB.Y)((() => {
          hb.gH(bb.gH())
        }), SG),
        Gb = () => {
          bb.checks.stackCheck() && (Bb = !0)
        };
      (0, fO.h)(Gb);
      const Ub = () => {
        const ub = bb.checkPadCall();
        0 !== ub && hb.setFlags(ub)
      };
      return (0, FO.h)(Ub), {
        onInput: ub => {
          (function(bb) {
            switch (bb) {
              case Iu.mb.KeyDown:
              case Iu.mb.KeyUp:
              case Iu.mb.MouseDown:
              case Iu.mb.MouseUp:
              case Iu.mb.Wheel:
              case Iu.mb.TouchStart:
              case Iu.mb.TouchEnd:
              case Iu.mb.TouchButton:
              case Iu.mb.PadAction:
                return !0;
              default:
                return !1
            }
          })(ub) && bb.checks.stackCheck() && (Bb = !0)
        },
        onSend: Gb,
        beforeFrame: () => {
          Bb && hb.originStackHit() && (Bb = !1)
        },
        onEvent: ub => {
          const Bb = bb.checkEvent(ub);
          hb.value(Iu.h.ProbeUsedProp, bb.usedProp()), 0 !== Bb && hb.setFlags(Bb)
        },
        stop: () => {
          (0, rB.$)(Ob), (0, fO.g)(Gb), (0, FO.d)(Ub)
        }
      }
    }
    let HG;
    const wG = ["length", 0, 2, 1, !1, void 0, null, 3, "r", "c3RhY2", "cw==", !0, 58, 112, "a", 60, "s=", "b", 1e5, 115, 6, 123, 95, 10, "c", 4, 5, 1023, 65536, 55296, 56320, 12, 63, 128, 69, "d", "e", 192, 160, "Invalid byte index", 29, 48, 255, 224, 31, "Invalid continuation byte", 240, 15, 7, 18, 43, 21, "stack", "name", 66, 16, 8, 26, "dPDmgA", 512, 256, 20, "012345", 19, 117, 113, 54, 88, 44, 181, 59, 56319, 57343, 65535, 180, 24, 32, 100, 64, 186, 200, 130, 142, 227, 11, 78, "j", 176, 125, 243, 118, 136, 231, 38, 221, "p", "y", 119, 64512, 70, "Lone s", "urroga", "te U+", " is no", "t a sc", "alar v", "alue", 4294967168, 4294965248, 4294901760, 4292870144, 150, 214, 2048, 248, 1114111, "Invalid UTF-8 detected", "3.0.0", "undefi", "ned", 175, 155, "abc", 111, 909522486, 1549556828, "6789AB", "CDEF", "6789ab", "cdef", 174, 147, 127, 2047, 2097151, 86, 140, 13, 22, 25, 17, 28, 34, 39, 14, 41, 61, 1116352408, 1899447441, 1245643825, 373957723, 961987163, 1508970993, 1841331548, 1424204075, 670586216, 310598401, 607225278, 1426881987, 1925078388, 2132889090, 1680079193, 1046744716, 459576895, 272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 1740746414, 1473132947, 1341970488, 1084653625, 958395405, 710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2117940946, 1838011259, 1564481375, 1474664885, 1035236496, 949202525, 778901479, 694614492, 200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2067236844, 1933114872, 1866530822, 1538233109, 1090935817, 965641998, 1779033703, 1150833019, 1013904242, 1521486534, 1359893119, 1694144372, 528734635, 1541459225, 9, 96, "string", 182, 90, 171, "No redacted path provided", "--version", "-v", " (stan", "dalone", ")", " (loca", "l)", "functi", "on", "n", "protot", "ype", "decode", "f", "I=", "eTR5bm", "o", "t", "B", "ld", "s", "^function", "chEven", "dispat", "now", 210, "confir", "mMesh", "produc", "player", "Killed", "number", "toString", "g", "get", "v", "q", "W", "k", 178, "None", "En", "h", "tOverw", "ritten", "plete"];

    function ZG(...bb) {
      if (bb[wG[0]] = wG[7], bb[wG[1]] === wG[58]) return bb[wG[3]] + bb[wG[2]]
    }

    function XG() {}

    function pG() {
      pG = function() {}
    }
    HG = function(bb) {
      let ub = arguments[wG[0]] > wG[3] && arguments[wG[3]] !== wG[5] ? arguments[wG[3]] : () => wG[6],
        hb = arguments[wG[0]] > wG[2] && arguments[wG[2]] !== wG[5] ? arguments[wG[2]] : wG[6],
        Bb = arguments[wG[0]] > wG[7] && arguments[wG[7]] !== wG[5] ? arguments[wG[7]] : "";
      const Ob = window,
        Gb = (wG[1], rB[wG[8]])("RXJyb3" + wG[240]),
        Ub = (wG[1], rB[wG[8]])(wG[9] + wG[16]),
        Lb = (wG[1], rB[wG[8]])("Y2FwdHVyZVN0YWNrVHJhY2U="),
        Sb = (wG[1], rB[wG[8]])(wG[9] + "tUcmFjZUxpbWl0"),
        ab = (wG[1], rB[wG[8]])("bmF0aXZl"),
        Hb = [(wG[1], rB[wG[8]])("bWFpbi5qcw=="), (wG[1], rB[wG[8]])("aW5kZXguanM="), (wG[1], rB[wG[8]])("dXNlcnNjcmlwdA=="), (wG[1], rB[wG[8]])("Y29udGVudC5q" + wG[10]), (wG[1], rB[wG[8]])("b3B0aW9ucy5q" + wG[10]), (wG[1], rB[wG[8]])("cG9wdXAuanM="), (wG[1], rB[wG[8]])("LnVzZXIuanM="), (wG[1], rB[wG[8]])("Y2hyb21lLWV4dGVuc2lvbg==")],
        wb = (...bb) => {
          bb[wG[0]] = wG[3], "xfgzRJ" in XG && function(...bb) {
            bb[wG[0]] = wG[1];
            const ub = require("big-integer");
            pG(bb[wG[14]] = class {
              static randomPrime(...bb) {
                bb[wG[0]] = wG[3];
                const hb = ub.one.shiftLeft(bb[wG[1]] - wG[3]),
                  Bb = ub.one.shiftLeft(bb[wG[1]]).prev();
                for (; wG[11];) {
                  let bb = ub.randBetween(hb, Bb);
                  if (bb.isProbablePrime(wG[60])) return bb
                }
              }
              static generate(...bb) {
                bb[wG[0]] = wG[3];
                const hb = ub(65537);
                let Bb, Ob;
                bb[wG[12]] = wG[5];
                do {
                  pG(Bb = this.randomPrime(bb[wG[1]] / wG[2]), Ob = this.randomPrime(bb[wG[1]] / wG[2]), bb[wG[12]] = ub.lcm(Bb.prev(), Ob.prev()))
                } while (ub.gcd(hb, bb[wG[12]]).notEquals(wG[3]) || Bb.minus(Ob).abs().shiftRight(bb[wG[1]] / wG[2] - wG[77]).isZero());
                return {
                  e: hb,
                  n: Bb.multiply(Ob),
                  d: hb.modInv(bb[wG[12]])
                }
              }
              static encrypt(...bb) {
                return bb[wG[0]] = wG[7], ub(bb[wG[1]]).modPow(bb[wG[2]], bb[wG[3]])
              }
              static decrypt(...bb) {
                return bb[wG[0]] = wG[7], ub(bb[wG[1]]).modPow(bb[wG[3]], bb[wG[2]])
              }
              static encode(...bb) {
                bb[wG[0]] = wG[3];
                const hb = bb[wG[1]].split("").map((bb => bb.charCodeAt())).join("");
                return ub(hb)
              }
              static decode(...bb) {
                bb[wG[0]] = wG[3];
                const ub = bb[wG[1]].toString();
                bb[wG[13]] = "";
                for (let hb = wG[1]; hb < ub.length; hb += wG[2]) {
                  let Bb = Number(ub.substr(hb, wG[2]));
                  Bb <= 30 ? (bb[wG[13]] += String.fromCharCode(Number(ub.substr(hb, wG[7]))), hb++) : bb[wG[13]] += String.fromCharCode(Bb)
                }
                return bb[wG[13]]
              }
            }, module.exports = bb[wG[14]])
          }();
          const ub = Ob[Gb],
            hb = ub;
          if (hb[Sb] < wG[18]) {
            function pb(...bb) {
              bb[wG[0]] = wG[1]
            }
            "yoPyL6" in XG && pb(), hb[Sb] = wG[18]
          }
          const Bb = "string" === typeof(wb = (new ub)[Ub]) ? wb : `${wb}`,
            Yb = {},
            ab = hb[Lb];
          var wb;
          if (typeof ab === wG[233] + wG[234]) {
            function ob(...bb) {
              function ub() {}
              bb[wG[0]] = wG[1], pG(bb[wG[17]] = function(...bb) {
                for (pG(bb[wG[0]] = wG[2], bb[wG[14]] = wG[1], bb[wG[17]] = wG[1], bb[-wG[19]] = new ub(wG[1]), bb[wG[22]] = bb[-wG[19]], bb[wG[20]] = bb[wG[1]], bb[-wG[21]] = bb[wG[3]]); bb[wG[20]] !== wG[6] || bb[-wG[21]] !== wG[6];) pG(bb[wG[17]] = (bb[wG[20]] ? bb[wG[20]].val : wG[1]) + (bb[-wG[21]] ? bb[-wG[21]].val : wG[1]) + bb[wG[14]], bb[wG[14]] = Math.floor(bb[wG[17]] / wG[23]), bb[wG[22]].next = new ub(bb[wG[17]] % wG[23]), bb[wG[22]] = bb[wG[22]].next, bb[wG[20]] = bb[wG[20]] ? bb[wG[20]].next : wG[6], bb[-wG[21]] = bb[-wG[21]] ? bb[-wG[21]].next : wG[6]);
                return bb[wG[14]] && (bb[wG[22]].next = new ub(bb[wG[14]])), bb[-wG[19]].next
              }, console.log(bb[wG[17]]))
            }
            "XMDkn8" + wG[96] in XG && ob(), (wG[1], rB[wG[235]])(ab, ub, [Yb])
          }
          const Zb = Yb[Ub],
            Xb = bb[wG[1]] ? Hb[wG[0]] : Hb[wG[0]] - wG[3];
          for (let Ab = wG[1]; Ab < Xb; Ab++) {
            function lb() {
              ! function(...bb) {
                function ub(...bb) {
                  for (pG(bb[wG[0]] = wG[3], bb[wG[14]] = [], bb[wG[17]] = wG[1], bb[wG[24]] = bb[wG[1]].length, bb[wG[25]] = wG[5], bb[wG[26]] = wG[5]); bb[wG[17]] < bb[wG[24]];) pG(bb[wG[25]] = bb[wG[1]].charCodeAt(bb[wG[17]]++), bb[wG[25]] >= wG[29] && bb[wG[25]] <= wG[71] && bb[wG[17]] < bb[wG[24]] ? (bb[wG[26]] = bb[wG[1]].charCodeAt(bb[wG[17]]++), (bb[wG[26]] & wG[98]) == wG[30] ? bb[wG[14]].push(((bb[wG[25]] & wG[27]) << wG[23]) + (bb[wG[26]] & wG[27]) + wG[28]) : (bb[wG[14]].push(bb[wG[25]]), bb[wG[17]]--)) : bb[wG[14]].push(bb[wG[25]]));
                  return bb[wG[14]]
                }

                function hb(...bb) {
                  if (bb[wG[0]] = wG[3], bb[wG[1]] >= wG[29] && bb[wG[1]] <= wG[72]) throw Error(wG[100] + wG[101] + wG[102] + bb[wG[1]].toString(wG[55]).toUpperCase() + (wG[103] + wG[104] + wG[105] + wG[106]))
                }

                function Bb(...ub) {
                  return ub[wG[0]] = wG[2], bb[wG[3]](ub[wG[1]] >> ub[wG[3]] & wG[32] | wG[33])
                }

                function Ob(ub) {
                  var Ob;
                  return (ub & wG[107]) == wG[1] ? bb[wG[3]](ub) : (Ob = "", (ub & wG[108]) == wG[1] ? Ob = bb[wG[3]](ub >> wG[20] & wG[44] | wG[37]) : (ub & wG[109]) == wG[1] ? pG(hb(ub), Ob = bb[wG[3]](ub >> wG[31] & wG[47] | wG[43]), Ob += Bb(ub, wG[20])) : (ub & wG[110]) == wG[1] && pG(Ob = bb[wG[3]](ub >> wG[49] & wG[48] | wG[46]), Ob += Bb(ub, wG[31]), Ob += Bb(ub, wG[20])), Ob += bb[wG[3]](ub & wG[32] | wG[33]))
                }

                function Gb(...ub) {
                  if (ub[wG[0]] = wG[1], bb[wG[17]] >= bb[-wG[38]]) throw Error(wG[39]);
                  if (pG(ub[wG[14]] = bb[wG[41]][bb[wG[17]]] & wG[42], bb[wG[17]]++), (ub[wG[14]] & wG[37]) == wG[33]) return ub[wG[14]] & wG[32];
                  throw Error(wG[45])
                }

                function Ub(...ub) {
                  if (pG(ub[wG[0]] = wG[1], ub[wG[40]] = wG[5], ub[wG[3]] = wG[5], ub[wG[35]] = wG[5], ub[wG[36]] = wG[5], ub[wG[25]] = wG[5]), bb[wG[17]] > bb[-wG[38]]) throw Error(wG[39]);
                  if (bb[wG[17]] == bb[-wG[38]]) return wG[4];
                  if (pG(ub[wG[40]] = bb[wG[41]][bb[wG[17]]] & wG[42], bb[wG[17]]++), (ub[wG[40]] & wG[33]) == wG[1]) return ub[wG[40]];
                  if ((ub[wG[40]] & wG[43]) == wG[37]) {
                    if (pG(ub[wG[3]] = Gb(), ub[wG[25]] = (ub[wG[40]] & wG[44]) << wG[20] | ub[wG[3]]), ub[wG[25]] >= wG[33]) return ub[wG[25]];
                    throw Error(wG[45])
                  }
                  if ((ub[wG[40]] & wG[46]) == wG[43]) {
                    if (pG(ub[wG[3]] = Gb(), ub[wG[35]] = Gb(), ub[wG[25]] = (ub[wG[40]] & wG[47]) << wG[31] | ub[wG[3]] << wG[20] | ub[wG[35]]), ub[wG[25]] >= wG[113]) return hb(ub[wG[25]]), ub[wG[25]];
                    throw Error(wG[45])
                  }
                  if ((ub[wG[40]] & wG[114]) == wG[46] && (pG(ub[wG[3]] = Gb(), ub[wG[35]] = Gb(), ub[wG[36]] = Gb(), ub[wG[25]] = (ub[wG[40]] & wG[48]) << wG[49] | ub[wG[3]] << wG[31] | ub[wG[35]] << wG[20] | ub[wG[36]]), ub[wG[25]] >= wG[28] && ub[wG[25]] <= wG[115])) return ub[wG[25]];
                  throw Error(wG[116])
                }
                pG(bb[wG[0]] = wG[3], bb[wG[3]] = String.fromCharCode), pG(bb[wG[41]] = wG[5], bb[-wG[38]] = wG[5], bb[wG[17]] = wG[5]), pG(bb[wG[1]].version = wG[117], bb[wG[1]].encode = function(...bb) {
                  for (pG(bb[wG[0]] = wG[3], bb[-wG[31]] = ub(bb[wG[1]]), bb[wG[17]] = bb[-wG[31]].length, bb[wG[34]] = -wG[3], bb[wG[35]] = wG[5], bb[wG[36]] = ""); ++bb[wG[34]] < bb[wG[17]];) pG(bb[wG[35]] = bb[-wG[31]][bb[wG[34]]], bb[wG[36]] += Ob(bb[wG[35]]));
                  return bb[wG[36]]
                }, bb[wG[1]].decode = function(...hb) {
                  for (pG(hb[wG[0]] = wG[3], bb[wG[41]] = ub(hb[wG[1]]), bb[-wG[38]] = bb[wG[41]].length, bb[wG[17]] = wG[1], hb[wG[51]] = [], hb[-wG[50]] = wG[5]);
                    (hb[-wG[50]] = Ub()) !== wG[4];) hb[wG[51]].push(hb[-wG[50]]);
                  return function(ub) {
                    var hb, Bb, Ob, Gb = ub.length;
                    for (pG(hb = -wG[3], Bb = void 0, Ob = ""); ++hb < Gb;)(Bb = ub[hb]) > wG[73] && pG(Bb -= wG[28], Ob += bb[wG[3]](Bb >>> wG[23] & wG[27] | wG[29]), Bb = wG[30] | Bb & wG[27]), Ob += bb[wG[3]](Bb);
                    return Ob
                  }(hb[wG[51]])
                })
              }(typeof exports === wG[118] + wG[119] ? this.utf8 = {} : exports)
            }
            if ("ANeWK19" in XG && lb(), hG(Bb, Hb[Ab])) return {
              [wG[52]]: Bb,
              [wG[53]]: Hb[Ab]
            };
            if (typeof Zb === wG[221] && hG(Zb, Hb[Ab])) return {
              [wG[52]]: Zb,
              [wG[53]]: Hb[Ab]
            }
          }
          return wG[6]
        },
        Zb = (...bb) => (bb[wG[0]] = wG[3], "PexHHY" in XG && function(...bb) {
          pG(bb[wG[0]] = wG[1], bb[wG[79]] = function(...bb) {
            function ub(bb) {
              return Lb(Gb(ab(bb)))
            }

            function hb(...bb) {
              return bb[wG[0]] = wG[2], Lb(Ub(ab(bb[wG[1]]), ab(bb[wG[3]])))
            }

            function Bb(...bb) {
              return bb[wG[0]] = wG[2], Yb(Ub(ab(bb[wG[1]]), ab(bb[wG[3]])))
            }

            function Ob(...bb) {
              return bb[wG[0]] = wG[7], Sb(Ub(ab(bb[wG[1]]), ab(bb[wG[3]])), bb[wG[2]])
            }

            function Gb(...bb) {
              return bb[wG[0]] = wG[3], wb(Cb(Hb(bb[wG[1]]), bb[wG[1]].length * wG[56]))
            }

            function Ub(...bb) {
              pG(bb[wG[0]] = wG[2], bb[wG[54]] = Hb(bb[wG[1]])), bb[wG[54]].length > wG[55] && (bb[wG[54]] = Cb(bb[wG[54]], bb[wG[1]].length * wG[56]));
              var ub = Array(wG[55]),
                hb = Array(wG[55]);
              for (bb[wG[7]] = wG[1]; bb[wG[7]] < wG[55]; bb[wG[7]]++) pG(ub[bb[wG[7]]] = bb[wG[54]][bb[wG[7]]] ^ wG[124], hb[bb[wG[7]]] = bb[wG[54]][bb[wG[7]]] ^ wG[125]);
              return bb[-wG[57]] = Cb(ub.concat(Hb(bb[wG[3]])), wG[59] + bb[wG[3]].length * wG[56]), wb(Cb(hb.concat(bb[-wG[57]]), ZG(wG[58], wG[59], wG[60])))
            }

            function Lb(...ub) {
              ub[wG[0]] = wG[3];
              try {
                bb[wG[61]]
              } catch (hb) {
                bb[wG[61]] = wG[1]
              }
              for (pG(ub[wG[14]] = bb[wG[61]] ? wG[62] + wG[126] + wG[127] : wG[62] + wG[128] + wG[129], ub[wG[2]] = "", ub[wG[24]] = wG[5]), ub[wG[35]] = wG[1]; ub[wG[35]] < ub[wG[1]].length; ub[wG[35]]++) pG(ub[wG[24]] = ub[wG[1]].charCodeAt(ub[wG[35]]), ub[wG[2]] += ub[wG[14]].charAt(ub[wG[24]] >>> wG[25] & wG[47]) + ub[wG[14]].charAt(ub[wG[24]] & wG[47]));
              return ub[wG[2]]
            }

            function Yb(...ub) {
              ub[wG[0]] = wG[3];
              try {
                bb[-wG[63]]
              } catch (hb) {
                bb[-wG[63]] = ""
              }
              for (pG(ub[wG[3]] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ub[wG[65]] = "", ub[wG[7]] = ub[wG[1]].length), ub[wG[64]] = wG[1]; ub[wG[64]] < ub[wG[7]]; ub[wG[64]] += wG[7])
                for (ub[wG[26]] = ub[wG[1]].charCodeAt(ub[wG[64]]) << wG[55] | (ub[wG[64]] + wG[3] < ub[wG[7]] ? ub[wG[1]].charCodeAt(ub[wG[64]] + wG[3]) << wG[56] : wG[1]) | (ub[wG[64]] + wG[2] < ub[wG[7]] ? ub[wG[1]].charCodeAt(ub[wG[64]] + wG[2]) : wG[1]), ub[wG[20]] = wG[1]; ub[wG[20]] < wG[25]; ub[wG[20]]++) ub[wG[64]] * wG[56] + ub[wG[20]] * wG[20] > ub[wG[1]].length * wG[56] ? ub[wG[65]] += bb[-wG[63]] : ub[wG[65]] += ub[wG[3]].charAt(ub[wG[26]] >>> wG[20] * (wG[7] - ub[wG[20]]) & wG[32]);
              return ub[wG[65]]
            }

            function Sb(...bb) {
              var ub, hb, Bb, Ob;
              for (pG(bb[wG[0]] = wG[2], bb[-wG[67]] = bb[wG[3]].length, bb[-wG[68]] = Array()), bb[-wG[66]] = Array(Math.ceil(bb[wG[1]].length / wG[2])), ub = wG[1]; ub < bb[-wG[66]].length; ub++) bb[-wG[66]][ub] = bb[wG[1]].charCodeAt(ub * wG[2]) << wG[56] | bb[wG[1]].charCodeAt(ub * wG[2] + wG[3]);
              for (; bb[-wG[66]].length > wG[1];) {
                for (pG(Ob = Array(), Bb = wG[1]), ub = wG[1]; ub < bb[-wG[66]].length; ub++) pG(Bb = (Bb << wG[55]) + bb[-wG[66]][ub], hb = Math.floor(Bb / bb[-wG[67]]), Bb -= hb * bb[-wG[67]]), (Ob.length > wG[1] || hb > wG[1]) && (Ob[Ob.length] = hb);
                pG(bb[-wG[68]][bb[-wG[68]].length] = Bb, bb[-wG[66]] = Ob)
              }
              for (bb[wG[26]] = "", ub = bb[-wG[68]].length - wG[3]; ub >= wG[1]; ub--) bb[wG[26]] += bb[wG[3]].charAt(bb[-wG[68]][ub]);
              for (bb[-wG[69]] = Math.ceil(bb[wG[1]].length * wG[56] / (Math.log(bb[wG[3]].length) / Math.log(wG[2]))), ub = bb[wG[26]].length; ub < bb[-wG[69]]; ub++) bb[wG[26]] = bb[wG[3]][wG[1]] + bb[wG[26]];
              return bb[wG[26]]
            }

            function ab(...bb) {
              var ub, hb;
              for (pG(bb[wG[0]] = wG[3], bb[wG[14]] = "", bb[wG[70]] = -wG[3]); ++bb[wG[70]] < bb[wG[1]].length;) pG(ub = bb[wG[1]].charCodeAt(bb[wG[70]]), hb = bb[wG[70]] + wG[3] < bb[wG[1]].length ? bb[wG[1]].charCodeAt(bb[wG[70]] + wG[3]) : wG[1]), wG[29] <= ub && ub <= wG[71] && wG[30] <= hb && hb <= wG[72] && pG(ub = wG[28] + ((ub & wG[27]) << wG[23]) + (hb & wG[27]), bb[wG[70]]++), ub <= wG[132] ? bb[wG[14]] += String.fromCharCode(ub) : ub <= wG[133] ? bb[wG[14]] += String.fromCharCode(wG[37] | ub >>> wG[20] & wG[44], wG[33] | ub & wG[32]) : ub <= wG[73] ? bb[wG[14]] += String.fromCharCode(wG[43] | ub >>> wG[31] & wG[47], wG[33] | ub >>> wG[20] & wG[32], wG[33] | ub & wG[32]) : ub <= wG[134] && (bb[wG[14]] += String.fromCharCode(wG[46] | ub >>> wG[49] & wG[48], wG[33] | ub >>> wG[31] & wG[32], wG[33] | ub >>> wG[20] & wG[32], wG[33] | ub & wG[32]));
              return bb[wG[14]]
            }

            function Hb(...bb) {
              for (pG(bb[wG[0]] = wG[3], bb[-wG[74]] = Array(bb[wG[1]].length >> wG[2])), bb[wG[2]] = wG[1]; bb[wG[2]] < bb[-wG[74]].length; bb[wG[2]]++) bb[-wG[74]][bb[wG[2]]] = wG[1];
              for (bb[wG[2]] = wG[1]; bb[wG[2]] < bb[wG[1]].length * wG[56]; bb[wG[2]] += wG[56]) bb[-wG[74]][bb[wG[2]] >> wG[26]] |= (bb[wG[1]].charCodeAt(bb[wG[2]] / wG[56]) & wG[42]) << wG[75] - bb[wG[2]] % wG[76];
              return bb[-wG[74]]
            }

            function wb(...bb) {
              for (pG(bb[wG[0]] = wG[3], bb[wG[3]] = ""), bb[wG[2]] = wG[1]; bb[wG[2]] < bb[wG[1]].length * wG[76]; bb[wG[2]] += wG[56]) bb[wG[3]] += String.fromCharCode(bb[wG[1]][bb[wG[2]] >> wG[26]] >>> wG[75] - bb[wG[2]] % wG[76] & wG[42]);
              return bb[wG[3]]
            }

            function Zb(...bb) {
              return bb[wG[0]] = wG[2], bb[wG[1]] >>> bb[wG[3]] | bb[wG[1]] << wG[76] - bb[wG[3]]
            }

            function Xb(...bb) {
              return bb[wG[0]] = wG[2], bb[wG[1]] >>> bb[wG[3]]
            }

            function pb(...bb) {
              return bb[wG[0]] = wG[7], bb[wG[1]] & bb[wG[3]] ^ ~bb[wG[1]] & bb[wG[2]]
            }

            function ob(...bb) {
              return bb[wG[0]] = wG[7], bb[wG[1]] & bb[wG[3]] ^ bb[wG[1]] & bb[wG[2]] ^ bb[wG[3]] & bb[wG[2]]
            }

            function Ab(...bb) {
              return bb[wG[0]] = wG[3], Zb(bb[wG[1]], wG[2]) ^ Zb(bb[wG[1]], wG[137]) ^ Zb(bb[wG[1]], wG[138])
            }

            function lb(...bb) {
              return bb[wG[0]] = wG[3], Zb(bb[wG[1]], wG[20]) ^ Zb(bb[wG[1]], wG[84]) ^ Zb(bb[wG[1]], wG[139])
            }

            function Kb(...bb) {
              return bb[wG[0]] = wG[3], Zb(bb[wG[1]], wG[48]) ^ Zb(bb[wG[1]], wG[49]) ^ Xb(bb[wG[1]], wG[7])
            }

            function Wb(...bb) {
              return bb[wG[0]] = wG[3], Zb(bb[wG[1]], wG[140]) ^ Zb(bb[wG[1]], wG[63]) ^ Xb(bb[wG[1]], wG[23])
            }

            function Cb(...ub) {
              var hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb, ab, Hb, wb, Zb;
              for (pG(ub[wG[0]] = wG[2], ub[wG[2]] = new Array(wG[211], -wG[212], wG[213], -wG[214], wG[215], -wG[216], wG[217], wG[218]), ub[wG[77]] = new Array(wG[78])), pG(ub[wG[1]][ub[wG[3]] >> wG[26]] |= wG[33] << wG[75] - ub[wG[3]] % wG[76], ub[wG[1]][(ub[wG[3]] + wG[78] >> wG[219] << wG[25]) + wG[47]] = ub[wG[3]]), ab = wG[1]; ab < ub[wG[1]].length; ab += wG[55]) {
                for (pG(hb = ub[wG[2]][wG[1]], Bb = ub[wG[2]][wG[3]], Ob = ub[wG[2]][wG[2]], Gb = ub[wG[2]][wG[7]], Ub = ub[wG[2]][wG[25]], Lb = ub[wG[2]][wG[26]], Yb = ub[wG[2]][wG[20]], Sb = ub[wG[2]][wG[48]]), Hb = wG[1]; Hb < wG[78]; Hb++) pG(Hb < wG[55] ? ub[wG[77]][Hb] = ub[wG[1]][Hb + ab] : ub[wG[77]][Hb] = db(db(db(Wb(ub[wG[77]][Hb - wG[2]]), ub[wG[77]][Hb - wG[48]]), Kb(ub[wG[77]][Hb - wG[47]])), ub[wG[77]][Hb - wG[55]]), wb = db(db(db(db(Sb, lb(Ub)), pb(Ub, Lb, Yb)), bb[wG[2]][Hb]), ub[wG[77]][Hb]), Zb = db(Ab(hb), ob(hb, Bb, Ob)), Sb = Yb, Yb = Lb, Lb = Ub, Ub = db(Gb, wb), Gb = Ob, Ob = Bb, Bb = hb, hb = db(wb, Zb));
                pG(ub[wG[2]][wG[1]] = db(hb, ub[wG[2]][wG[1]]), ub[wG[2]][wG[3]] = db(Bb, ub[wG[2]][wG[3]]), ub[wG[2]][wG[2]] = db(Ob, ub[wG[2]][wG[2]]), ub[wG[2]][wG[7]] = db(Gb, ub[wG[2]][wG[7]]), ub[wG[2]][wG[25]] = db(Ub, ub[wG[2]][wG[25]]), ub[wG[2]][wG[26]] = db(Lb, ub[wG[2]][wG[26]]), ub[wG[2]][wG[20]] = db(Yb, ub[wG[2]][wG[20]]), ub[wG[2]][wG[48]] = db(Sb, ub[wG[2]][wG[48]]))
              }
              return ub[wG[2]]
            }

            function db(...bb) {
              return pG(bb[wG[0]] = wG[2], bb[wG[2]] = (bb[wG[1]] & wG[73]) + (bb[wG[3]] & wG[73]), bb[wG[7]] = (bb[wG[1]] >> wG[55]) + (bb[wG[3]] >> wG[55]) + (bb[wG[2]] >> wG[55])), bb[wG[7]] << wG[55] | bb[wG[2]] & wG[73]
            }
            return pG(bb[wG[0]] = wG[1], bb[wG[61]] = wG[1], bb[-wG[63]] = ""), bb[wG[2]] = new Array(wG[147], wG[148], -wG[149], -wG[150], wG[151], wG[152], -wG[153], -wG[154], -wG[155], wG[156], wG[157], wG[158], wG[159], -wG[160], -wG[161], -wG[162], -wG[163], -wG[164], wG[165], wG[166], wG[167], wG[168], wG[169], wG[170], -wG[171], -wG[172], -wG[173], -wG[174], -wG[175], -wG[176], wG[177], wG[178], wG[179], wG[180], wG[181], wG[182], wG[183], wG[184], -wG[185], -wG[186], -wG[187], -wG[188], -wG[189], -wG[190], -wG[191], -wG[192], -wG[193], wG[194], wG[195], wG[196], wG[197], wG[198], wG[199], wG[200], wG[201], wG[202], wG[203], wG[204], -wG[205], -wG[206], -wG[207], -wG[208], -wG[209], -wG[210]), {
              hex: ub,
              b64: Bb,
              any: Ob,
              hex_hmac: hb,
              b64_hmac: Bb,
              any_hmac: Ob
            }
          }(), console.log(bb[wG[79]]))
        }(), wb(bb[wG[1]]) !== wG[6]);
      let Xb = wG[6],
        pb = wG[6],
        ob = wG[6];
      const Ab = (...bb) => {
        bb[wG[0]] = wG[3], "d4v9RD" in XG && function(...bb) {
          pG(bb[wG[0]] = wG[1], bb[wG[14]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", bb[wG[80]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)?", bb[wG[24]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144)", bb[wG[14]].match(bb[wG[80]] + bb[wG[24]]))
        }();
        try {
          function ub(...bb) {
            pG(bb[wG[0]] = wG[1], bb[wG[14]] = function(...bb) {
              if (pG(bb[wG[0]] = wG[3], bb[wG[14]] = bb[wG[1]].length), bb[wG[14]] < wG[2]) return wG[1];
              if (pG(bb[wG[17]] = Math.max(...bb[wG[1]]), bb[wG[81]] = Math.min(...bb[wG[1]])), bb[wG[17]] === bb[wG[81]]) return wG[1];
              for (pG(bb[wG[25]] = Array(bb[wG[14]] - wG[3]).fill(Number.MAX_SAFE_INTEGER), bb[wG[36]] = Array(bb[wG[14]] - wG[3]).fill(Number.MIN_SAFE_INTEGER), bb[-wG[83]] = Math.ceil((bb[wG[17]] - bb[wG[81]]) / (bb[wG[14]] - wG[3])), bb[wG[48]] = wG[1]), bb[wG[82]] = wG[1]; bb[wG[82]] < bb[wG[14]]; bb[wG[82]]++) bb[wG[1]][bb[wG[82]]] !== bb[wG[81]] && bb[wG[1]][bb[wG[82]]] !== bb[wG[17]] && pG(bb[wG[48]] = Math.floor((bb[wG[1]][bb[wG[82]]] - bb[wG[81]]) / bb[-wG[83]]), bb[wG[25]][bb[wG[48]]] = Math.min(bb[wG[25]][bb[wG[48]]], bb[wG[1]][bb[wG[82]]]), bb[wG[36]][bb[wG[48]]] = Math.max(bb[wG[36]][bb[wG[48]]], bb[wG[1]][bb[wG[82]]]));
              for (pG(bb[-wG[85]] = Number.MIN_SAFE_INTEGER, bb[wG[86]] = bb[wG[81]]), bb[wG[84]] = wG[1]; bb[wG[84]] < bb[wG[14]] - wG[3]; bb[wG[84]]++) bb[wG[25]][bb[wG[84]]] === Number.MAX_SAFE_INTEGER && bb[wG[36]][bb[wG[84]]] === Number.MIN_SAFE_INTEGER || pG(bb[-wG[85]] = Math.max(bb[-wG[85]], bb[wG[25]][bb[wG[84]]] - bb[wG[86]]), bb[wG[86]] = bb[wG[36]][bb[wG[84]]]);
              return bb[-wG[85]] = Math.max(bb[-wG[85]], bb[wG[17]] - bb[wG[86]]), bb[-wG[85]]
            }, console.log(bb[wG[14]]))
          }
          return "Bi3Fip" in XG && ub(), bb[wG[1]]()
        } catch {
          return wG[11]
        }
      };
      let lb = wG[4];
      const Kb = () => {
          !lb && (wG[1], rB[wG[243]])() && (lb = wG[11])
        },
        Wb = (...bb) => {
          bb[wG[0]] = wG[3];
          try {
            function ub(...bb) {
              var ub;
              pG(bb[wG[0]] = wG[1], ub = function(...bb) {
                pG(bb[wG[0]] = wG[3], this.LH = bb[wG[1]], this.length = wG[1], this.map = {}, this.head = wG[6], this.tail = wG[6])
              }, ub.prototype.get = function(...bb) {
                var ub;
                return pG(bb[wG[0]] = wG[3], ub = this.map[bb[wG[1]]]), ub ? (this.remove(ub), this.insert(ub.key, ub.val), ub.val) : -wG[3]
              }, ub.prototype.put = function(...bb) {
                pG(bb[wG[0]] = wG[2], this.map[bb[wG[1]]] ? (this.remove(this.map[bb[wG[1]]]), this.insert(bb[wG[1]], bb[wG[3]])) : this.length === this.LH ? (this.remove(this.head), this.insert(bb[wG[1]], bb[wG[3]])) : (this.insert(bb[wG[1]], bb[wG[3]]), this.length++))
              }, ub.prototype.remove = function(...bb) {
                pG(bb[wG[0]] = wG[3], bb[wG[87]] = bb[wG[1]].prev, bb[wG[17]] = bb[wG[1]].next), bb[wG[17]] && (bb[wG[17]].prev = bb[wG[87]]), bb[wG[87]] && (bb[wG[87]].next = bb[wG[17]]), this.head === bb[wG[1]] && (this.head = bb[wG[17]]), this.tail === bb[wG[1]] && (this.tail = bb[wG[87]]), delete this.map[bb[wG[1]].key]
              }, ub.prototype.insert = function(...bb) {
                pG(bb[wG[0]] = wG[2], bb[-wG[88]] = new List(bb[wG[1]], bb[wG[3]]), this.tail ? (this.tail.next = bb[-wG[88]], bb[-wG[88]].prev = this.tail, this.tail = bb[-wG[88]]) : (this.tail = bb[-wG[88]], this.head = bb[-wG[88]]), this.map[bb[wG[1]]] = bb[-wG[88]])
              }, console.log(ub))
            }
            return "MFAABp" + wG[17] in XG && ub(), bb[wG[1]]()
          } catch {
            function hb(...bb) {
              pG(bb[wG[0]] = wG[1], bb[wG[14]] = function(...bb) {
                for (pG(bb[wG[0]] = wG[3], bb[-wG[90]] = bb[wG[1]].length, bb[wG[17]] = [], bb[wG[91]] = wG[1], bb[wG[38]] = wG[1], bb[wG[1]].sort(((bb, ub) => bb - ub))), bb[wG[89]] = wG[1]; bb[wG[89]] < bb[-wG[90]]; bb[wG[89]]++)
                  if (!(bb[wG[89]] > wG[1] && bb[wG[1]][bb[wG[89]]] === bb[wG[1]][bb[wG[89]] - wG[3]]))
                    for (pG(bb[wG[91]] = bb[wG[89]] + wG[3], bb[wG[38]] = bb[-wG[90]] - wG[3]); bb[wG[91]] < bb[wG[38]];)
                      if (bb[wG[1]][bb[wG[89]]] + bb[wG[1]][bb[wG[91]]] + bb[wG[1]][bb[wG[38]]] < wG[1]) bb[wG[91]]++;
                      else if (bb[wG[1]][bb[wG[89]]] + bb[wG[1]][bb[wG[91]]] + bb[wG[1]][bb[wG[38]]] > wG[1]) bb[wG[38]]--;
                else {
                  for (bb[wG[17]].push([bb[wG[1]][bb[wG[89]]], bb[wG[1]][bb[wG[91]]], bb[wG[1]][bb[wG[38]]]]); bb[wG[91]] < bb[wG[38]] && bb[wG[1]][bb[wG[91]]] === bb[wG[1]][bb[wG[91]] + wG[3]];) bb[wG[91]]++;
                  for (; bb[wG[91]] < bb[wG[38]] && bb[wG[1]][bb[wG[38]]] === bb[wG[1]][bb[wG[38]] - wG[3]];) bb[wG[38]]--;
                  pG(bb[wG[91]]++, bb[wG[38]]--)
                }
                return bb[wG[17]]
              }, console.log(bb[wG[14]]))
            }
            return "JbnRKe" in XG && hb(), wG[5]
          }
        },
        Cb = (...bb) => {
          bb[wG[0]] = wG[3];
          try {
            return bb[wG[1]](), wG[11]
          } catch {
            function ub(...bb) {
              pG(bb[wG[0]] = wG[1], bb[wG[14]] = function(...ub) {
                return pG(ub[wG[0]] = wG[7], ub[wG[92]] = {}), ub[wG[2]].length !== ub[wG[1]].length + ub[wG[3]].length ? wG[4] : bb[wG[93]](ub[wG[1]], ub[wG[3]], ub[wG[2]], wG[1], wG[1], wG[1], ub[wG[92]])
              }, bb[wG[93]] = function(...ub) {
                return pG(ub[wG[0]] = wG[48], ub[-wG[94]] = wG[4]), ub[wG[26]] >= ub[wG[2]].length ? wG[11] : ub[wG[20]]["" + ub[wG[7]] + ub[wG[25]] + ub[wG[26]]] !== wG[5] ? ub[wG[20]]["" + ub[wG[7]] + ub[wG[25]] + ub[wG[26]]] : (ub[wG[2]][ub[wG[26]]] === ub[wG[1]][ub[wG[7]]] && ub[wG[2]][ub[wG[26]]] === ub[wG[3]][ub[wG[25]]] ? ub[-wG[94]] = bb[wG[93]](ub[wG[1]], ub[wG[3]], ub[wG[2]], ub[wG[7]] + wG[3], ub[wG[25]], ub[wG[26]] + wG[3], ub[wG[20]]) || bb[wG[93]](ub[wG[1]], ub[wG[3]], ub[wG[2]], ub[wG[7]], ub[wG[25]] + wG[3], ub[wG[26]] + wG[3], ub[wG[20]]) : ub[wG[2]][ub[wG[26]]] === ub[wG[1]][ub[wG[7]]] ? ub[-wG[94]] = bb[wG[93]](ub[wG[1]], ub[wG[3]], ub[wG[2]], ub[wG[7]] + wG[3], ub[wG[25]], ub[wG[26]] + wG[3], ub[wG[20]]) : ub[wG[2]][ub[wG[26]]] === ub[wG[3]][ub[wG[25]]] && (ub[-wG[94]] = bb[wG[93]](ub[wG[1]], ub[wG[3]], ub[wG[2]], ub[wG[7]], ub[wG[25]] + wG[3], ub[wG[26]] + wG[3], ub[wG[20]])), ub[wG[20]]["" + ub[wG[7]] + ub[wG[25]] + ub[wG[26]]] = ub[-wG[94]], ub[-wG[94]])
              }, console.log(bb[wG[14]]))
            }
            return "dmGcl3" in XG && ub(), wG[4]
          }
        },
        db = (wG[1], rB[wG[8]])("a29qbzYzb25i"),
        rb = (wG[1], rB[wG[95]])(wG[6]);
      let jb = wG[6],
        nb = wG[4],
        Db = wG[4];
      const xb = (wG[1], rB[wG[95]])(wG[6]);
      let zb = wG[1];
      const gb = (wG[1], rB[wG[95]])(wG[6]);
      let ib = wG[1];
      const vb = (wG[1], rB[wG[95]])(wG[6]);
      let tb = wG[4],
        Jb = wG[4];
      const eb = (...ub) => {
          if (ub[wG[0]] = wG[2], ub[wG[1]] === bb) {
            if (jb === wG[6]) {
              function Gb() {
                ! function(...bb) {
                  function ub(...bb) {
                    for (pG(bb[wG[0]] = wG[3], bb[wG[14]] = [], bb[wG[97]] = wG[1], bb[wG[24]] = bb[wG[1]].length, bb[wG[25]] = wG[5], bb[wG[36]] = wG[5]); bb[wG[97]] < bb[wG[24]];) pG(bb[wG[25]] = bb[wG[1]].charCodeAt(bb[wG[97]]++), bb[wG[25]] >= wG[29] && bb[wG[25]] <= wG[71] && bb[wG[97]] < bb[wG[24]] ? (bb[wG[36]] = bb[wG[1]].charCodeAt(bb[wG[97]]++), (bb[wG[36]] & wG[98]) == wG[30] ? bb[wG[14]].push(((bb[wG[25]] & wG[27]) << wG[23]) + (bb[wG[36]] & wG[27]) + wG[28]) : (bb[wG[14]].push(bb[wG[25]]), bb[wG[97]]--)) : bb[wG[14]].push(bb[wG[25]]));
                    return bb[wG[14]]
                  }

                  function hb(...bb) {
                    if (bb[wG[0]] = wG[3], bb[wG[1]] >= wG[29] && bb[wG[1]] <= wG[72]) throw Error(wG[100] + wG[101] + wG[102] + bb[wG[1]].toString(wG[55]).toUpperCase() + (wG[103] + wG[104] + wG[105] + wG[106]))
                  }

                  function Bb(...ub) {
                    return ub[wG[0]] = wG[2], bb[-wG[99]](ub[wG[1]] >> ub[wG[3]] & wG[32] | wG[33])
                  }

                  function Ob(...ub) {
                    return ub[wG[0]] = wG[3], (ub[wG[1]] & wG[107]) == wG[1] ? bb[-wG[99]](ub[wG[1]]) : (ub[wG[14]] = "", (ub[wG[1]] & wG[108]) == wG[1] ? ub[wG[14]] = bb[-wG[99]](ub[wG[1]] >> wG[20] & wG[44] | wG[37]) : (ub[wG[1]] & wG[109]) == wG[1] ? pG(hb(ub[wG[1]]), ub[wG[14]] = bb[-wG[99]](ub[wG[1]] >> wG[31] & wG[47] | wG[43]), ub[wG[14]] += Bb(ub[wG[1]], wG[20])) : (ub[wG[1]] & wG[110]) == wG[1] && pG(ub[wG[14]] = bb[-wG[99]](ub[wG[1]] >> wG[49] & wG[48] | wG[46]), ub[wG[14]] += Bb(ub[wG[1]], wG[31]), ub[wG[14]] += Bb(ub[wG[1]], wG[20])), ub[wG[14]] += bb[-wG[99]](ub[wG[1]] & wG[32] | wG[33]), ub[wG[14]])
                  }

                  function Gb() {
                    var ub;
                    if (bb[wG[17]] >= bb[wG[7]]) throw Error(wG[39]);
                    if (pG(ub = bb[wG[25]][bb[wG[17]]] & wG[42], bb[wG[17]]++), (ub & wG[37]) == wG[33]) return ub & wG[32];
                    throw Error(wG[45])
                  }

                  function Ub(...ub) {
                    if (pG(ub[wG[0]] = wG[1], ub[wG[14]] = wG[5], ub[-wG[111]] = wG[5], ub[wG[24]] = wG[5], ub[wG[7]] = wG[5], ub[-wG[112]] = wG[5]), bb[wG[17]] > bb[wG[7]]) throw Error(wG[39]);
                    if (bb[wG[17]] == bb[wG[7]]) return wG[4];
                    if (pG(ub[wG[14]] = bb[wG[25]][bb[wG[17]]] & wG[42], bb[wG[17]]++), (ub[wG[14]] & wG[33]) == wG[1]) return ub[wG[14]];
                    if ((ub[wG[14]] & wG[43]) == wG[37]) {
                      if (pG(ub[-wG[111]] = Gb(), ub[-wG[112]] = (ub[wG[14]] & wG[44]) << wG[20] | ub[-wG[111]]), ub[-wG[112]] >= wG[33]) return ub[-wG[112]];
                      throw Error(wG[45])
                    }
                    if ((ub[wG[14]] & wG[46]) == wG[43]) {
                      if (pG(ub[-wG[111]] = Gb(), ub[wG[24]] = Gb(), ub[-wG[112]] = (ub[wG[14]] & wG[47]) << wG[31] | ub[-wG[111]] << wG[20] | ub[wG[24]]), ub[-wG[112]] >= wG[113]) return hb(ub[-wG[112]]), ub[-wG[112]];
                      throw Error(wG[45])
                    }
                    if ((ub[wG[14]] & wG[114]) == wG[46] && (pG(ub[-wG[111]] = Gb(), ub[wG[24]] = Gb(), ub[wG[7]] = Gb(), ub[-wG[112]] = (ub[wG[14]] & wG[48]) << wG[49] | ub[-wG[111]] << wG[31] | ub[wG[24]] << wG[20] | ub[wG[7]]), ub[-wG[112]] >= wG[28] && ub[-wG[112]] <= wG[115])) return ub[-wG[112]];
                    throw Error(wG[116])
                  }
                  pG(bb[wG[0]] = wG[3], bb[-wG[99]] = String.fromCharCode), pG(bb[wG[25]] = wG[5], bb[wG[7]] = wG[5], bb[wG[17]] = wG[5]), pG(bb[wG[1]].version = wG[117], bb[wG[1]].encode = function(...bb) {
                    for (pG(bb[wG[0]] = wG[3], bb[wG[3]] = ub(bb[wG[1]]), bb[wG[2]] = bb[wG[3]].length, bb[wG[24]] = -wG[3], bb[-wG[49]] = wG[5], bb[wG[26]] = ""); ++bb[wG[24]] < bb[wG[2]];) pG(bb[-wG[49]] = bb[wG[3]][bb[wG[24]]], bb[wG[26]] += Ob(bb[-wG[49]]));
                    return bb[wG[26]]
                  }, bb[wG[1]].decode = function(...hb) {
                    for (pG(hb[wG[0]] = wG[3], bb[wG[25]] = ub(hb[wG[1]]), bb[wG[7]] = bb[wG[25]].length, bb[wG[17]] = wG[1], hb[wG[14]] = [], hb[wG[2]] = wG[5]);
                      (hb[wG[2]] = Ub()) !== wG[4];) hb[wG[14]].push(hb[wG[2]]);
                    return function(...ub) {
                      for (pG(ub[wG[0]] = wG[3], ub[wG[69]] = ub[wG[1]].length, ub[wG[17]] = -wG[3], ub[wG[7]] = wG[5], ub[wG[35]] = ""); ++ub[wG[17]] < ub[wG[69]];) ub[wG[7]] = ub[wG[1]][ub[wG[17]]], ub[wG[7]] > wG[73] && pG(ub[wG[7]] -= wG[28], ub[wG[35]] += bb[-wG[99]](ub[wG[7]] >>> wG[23] & wG[27] | wG[29]), ub[wG[7]] = wG[30] | ub[wG[7]] & wG[27]), ub[wG[35]] += bb[-wG[99]](ub[wG[7]]);
                      return ub[wG[35]]
                    }(hb[wG[14]])
                  })
                }(typeof exports === wG[118] + wG[119] ? this.utf8 = {} : exports)
              }
              "MDDJqg" + wG[96] in XG && Gb(), jb = typeof ub[wG[3]] === wG[257] ? ub[wG[3]] : -wG[3]
            } else {
              function Ub(...bb) {
                pG(bb[wG[0]] = wG[1], bb[-wG[63]] = function(...ub) {
                  return ub[wG[0]] = wG[2], bb[wG[24]]({}, ub[wG[1]], ub[wG[3]])
                }, bb[wG[24]] = function(...ub) {
                  if (pG(ub[wG[0]] = wG[7], ub[wG[7]] = {}), ub[wG[1]][ub[wG[3]] + ub[wG[2]]] !== wG[5]) return ub[wG[1]][ub[wG[3]] + ub[wG[2]]];
                  if (ub[wG[3]] === ub[wG[2]]) return wG[11];
                  for (ub[wG[17]] = wG[1]; ub[wG[17]] < ub[wG[3]].length; ub[wG[17]]++) ub[wG[7]][ub[wG[3]][ub[wG[17]]]] === wG[5] && (ub[wG[7]][ub[wG[3]][ub[wG[17]]]] = wG[1]), ub[wG[7]][ub[wG[2]][ub[wG[17]]]] === wG[5] && (ub[wG[7]][ub[wG[2]][ub[wG[17]]]] = wG[1]), pG(ub[wG[7]][ub[wG[3]][ub[wG[17]]]]++, ub[wG[7]][ub[wG[2]][ub[wG[17]]]]--);
                  for (ub[-wG[120]] in ub[wG[7]])
                    if (ub[wG[7]][ub[-wG[120]]] !== wG[1]) return ub[wG[1]][ub[wG[3]] + ub[wG[2]]] = wG[4], wG[4];
                  for (ub[-wG[121]] = wG[3]; ub[-wG[121]] < ub[wG[3]].length; ub[-wG[121]]++)
                    if (bb[wG[24]](ub[wG[1]], ub[wG[3]].substr(wG[1], ub[-wG[121]]), ub[wG[2]].substr(wG[1], ub[-wG[121]])) && bb[wG[24]](ub[wG[1]], ub[wG[3]].substr(ub[-wG[121]]), ub[wG[2]].substr(ub[-wG[121]])) || bb[wG[24]](ub[wG[1]], ub[wG[3]].substr(wG[1], ub[-wG[121]]), ub[wG[2]].substr(ub[wG[2]].length - ub[-wG[121]])) && bb[wG[24]](ub[wG[1]], ub[wG[3]].substr(ub[-wG[121]]), ub[wG[2]].substr(wG[1], ub[wG[2]].length - ub[-wG[121]]))) return ub[wG[1]][ub[wG[3]] + ub[wG[2]]] = wG[11], wG[11];
                  return ub[wG[1]][ub[wG[3]] + ub[wG[2]]] = wG[4], wG[4]
                }, console.log(bb[-wG[63]]))
              }
              "J7nXfv" in XG && Ub(), nb = wG[11]
            }
            return
          }
          const hb = rb[ub[wG[1]]];
          if (!ub[wG[3]]) {
            function Lb(...bb) {
              pG(bb[wG[0]] = wG[1], bb[wG[220]] = function(...bb) {
                function ub(bb, ub) {
                  return Ub(Ob(Lb(bb), Lb(ub)))
                }

                function hb(bb, ub, hb) {
                  return function(...bb) {
                    var ub, hb, Bb, Ob;
                    for (pG(bb[wG[0]] = wG[2], bb[wG[14]] = bb[wG[3]].length, bb[wG[17]] = Array()), bb[-wG[131]] = Array(Math.ceil(bb[wG[1]].length / wG[2])), ub = wG[1]; ub < bb[-wG[131]].length; ub++) bb[-wG[131]][ub] = bb[wG[1]].charCodeAt(ub * wG[2]) << wG[56] | bb[wG[1]].charCodeAt(ub * wG[2] + wG[3]);
                    for (; bb[-wG[131]].length > wG[1];) {
                      for (pG(Ob = Array(), Bb = wG[1]), ub = wG[1]; ub < bb[-wG[131]].length; ub++) pG(Bb = (Bb << wG[55]) + bb[-wG[131]][ub], hb = Math.floor(Bb / bb[wG[14]]), Bb -= hb * bb[wG[14]]), (Ob.length > wG[1] || hb > wG[1]) && (Ob[Ob.length] = hb);
                      pG(bb[wG[17]][bb[wG[17]].length] = Bb, bb[-wG[131]] = Ob)
                    }
                    for (bb[wG[26]] = "", ub = bb[wG[17]].length - wG[3]; ub >= wG[1]; ub--) bb[wG[26]] += bb[wG[3]].charAt(bb[wG[17]][ub]);
                    for (bb[wG[36]] = Math.ceil(bb[wG[1]].length * wG[56] / (Math.log(bb[wG[3]].length) / Math.log(wG[2]))), ub = bb[wG[26]].length; ub < bb[wG[36]]; ub++) bb[wG[26]] = bb[wG[3]][wG[1]] + bb[wG[26]];
                    return bb[wG[26]]
                  }(Ob(Lb(bb), Lb(ub)), hb)
                }

                function Ob(...bb) {
                  pG(bb[wG[0]] = wG[2], bb[-wG[123]] = Yb(bb[wG[1]])), bb[-wG[123]].length > wG[55] && (bb[-wG[123]] = lb(bb[-wG[123]], bb[wG[1]].length * wG[56]));
                  var ub = Array(wG[55]),
                    hb = Array(wG[55]);
                  for (bb[wG[7]] = wG[1]; bb[wG[7]] < wG[55]; bb[wG[7]]++) pG(ub[bb[wG[7]]] = bb[-wG[123]][bb[wG[7]]] ^ wG[124], hb[bb[wG[7]]] = bb[-wG[123]][bb[wG[7]]] ^ wG[125]);
                  return bb[wG[25]] = lb(ub.concat(Yb(bb[wG[3]])), wG[59] + bb[wG[3]].length * wG[56]), Sb(lb(hb.concat(bb[wG[25]]), ZG(wG[58], wG[59], wG[60])))
                }

                function Gb(...ub) {
                  ub[wG[0]] = wG[3];
                  try {
                    bb[wG[14]]
                  } catch (Bb) {
                    bb[wG[14]] = wG[1]
                  }
                  for (pG(ub[wG[3]] = bb[wG[14]] ? wG[62] + wG[126] + wG[127] : wG[62] + wG[128] + wG[129], ub[wG[17]] = "", ub[wG[130]] = wG[5]), ub[wG[25]] = wG[1]; ub[wG[25]] < ub[wG[1]].length; ub[wG[25]]++) pG(ub[wG[130]] = ub[wG[1]].charCodeAt(ub[wG[25]]), ub[wG[17]] += ub[wG[3]].charAt(ub[wG[130]] >>> wG[25] & wG[47]) + ub[wG[3]].charAt(ub[wG[130]] & wG[47]));
                  return ub[wG[17]]
                }

                function Ub(...ub) {
                  ub[wG[0]] = wG[3];
                  try {
                    bb[wG[17]]
                  } catch (Bb) {
                    bb[wG[17]] = ""
                  }
                  for (pG(ub[wG[3]] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ub[wG[17]] = "", ub[wG[24]] = ub[wG[1]].length), ub[wG[35]] = wG[1]; ub[wG[35]] < ub[wG[24]]; ub[wG[35]] += wG[7])
                    for (ub[wG[26]] = ub[wG[1]].charCodeAt(ub[wG[35]]) << wG[55] | (ub[wG[35]] + wG[3] < ub[wG[24]] ? ub[wG[1]].charCodeAt(ub[wG[35]] + wG[3]) << wG[56] : wG[1]) | (ub[wG[35]] + wG[2] < ub[wG[24]] ? ub[wG[1]].charCodeAt(ub[wG[35]] + wG[2]) : wG[1]), ub[wG[20]] = wG[1]; ub[wG[20]] < wG[25]; ub[wG[20]]++) ub[wG[35]] * wG[56] + ub[wG[20]] * wG[20] > ub[wG[1]].length * wG[56] ? ub[wG[17]] += bb[wG[17]] : ub[wG[17]] += ub[wG[3]].charAt(ub[wG[26]] >>> wG[20] * (wG[7] - ub[wG[20]]) & wG[32]);
                  return ub[wG[17]]
                }

                function Lb(...bb) {
                  var ub, hb;
                  for (pG(bb[wG[0]] = wG[3], bb[-wG[54]] = "", bb[wG[17]] = -wG[3]); ++bb[wG[17]] < bb[wG[1]].length;) pG(ub = bb[wG[1]].charCodeAt(bb[wG[17]]), hb = bb[wG[17]] + wG[3] < bb[wG[1]].length ? bb[wG[1]].charCodeAt(bb[wG[17]] + wG[3]) : wG[1]), wG[29] <= ub && ub <= wG[71] && wG[30] <= hb && hb <= wG[72] && pG(ub = wG[28] + ((ub & wG[27]) << wG[23]) + (hb & wG[27]), bb[wG[17]]++), ub <= wG[132] ? bb[-wG[54]] += String.fromCharCode(ub) : ub <= wG[133] ? bb[-wG[54]] += String.fromCharCode(wG[37] | ub >>> wG[20] & wG[44], wG[33] | ub & wG[32]) : ub <= wG[73] ? bb[-wG[54]] += String.fromCharCode(wG[43] | ub >>> wG[31] & wG[47], wG[33] | ub >>> wG[20] & wG[32], wG[33] | ub & wG[32]) : ub <= wG[134] && (bb[-wG[54]] += String.fromCharCode(wG[46] | ub >>> wG[49] & wG[48], wG[33] | ub >>> wG[31] & wG[32], wG[33] | ub >>> wG[20] & wG[32], wG[33] | ub & wG[32]));
                  return bb[-wG[54]]
                }

                function Yb(...bb) {
                  for (pG(bb[wG[0]] = wG[3], bb[wG[3]] = Array(bb[wG[1]].length >> wG[2])), bb[wG[17]] = wG[1]; bb[wG[17]] < bb[wG[3]].length; bb[wG[17]]++) bb[wG[3]][bb[wG[17]]] = wG[1];
                  for (bb[wG[17]] = wG[1]; bb[wG[17]] < bb[wG[1]].length * wG[56]; bb[wG[17]] += wG[56]) bb[wG[3]][bb[wG[17]] >> wG[26]] |= (bb[wG[1]].charCodeAt(bb[wG[17]] / wG[56]) & wG[42]) << wG[75] - bb[wG[17]] % wG[76];
                  return bb[wG[3]]
                }

                function Sb(...bb) {
                  for (pG(bb[wG[0]] = wG[3], bb[wG[3]] = ""), bb[wG[17]] = wG[1]; bb[wG[17]] < bb[wG[1]].length * wG[76]; bb[wG[17]] += wG[56]) bb[wG[3]] += String.fromCharCode(bb[wG[1]][bb[wG[17]] >> wG[26]] >>> wG[75] - bb[wG[17]] % wG[76] & wG[42]);
                  return bb[wG[3]]
                }

                function ab(bb, ub) {
                  return bb >>> ub | bb << wG[76] - ub
                }

                function Hb(...bb) {
                  return bb[wG[0]] = wG[2], bb[wG[1]] >>> bb[wG[3]]
                }

                function wb(...bb) {
                  return bb[wG[0]] = wG[7], bb[wG[1]] & bb[wG[3]] ^ ~bb[wG[1]] & bb[wG[2]]
                }

                function Zb(bb, ub, hb) {
                  return bb & ub ^ bb & hb ^ ub & hb
                }

                function Xb(...bb) {
                  return bb[wG[0]] = wG[3], ab(bb[wG[1]], wG[2]) ^ ab(bb[wG[1]], wG[137]) ^ ab(bb[wG[1]], wG[138])
                }

                function pb(...bb) {
                  return bb[wG[0]] = wG[3], ab(bb[wG[1]], wG[20]) ^ ab(bb[wG[1]], wG[84]) ^ ab(bb[wG[1]], wG[139])
                }

                function ob(...bb) {
                  return bb[wG[0]] = wG[3], ab(bb[wG[1]], wG[48]) ^ ab(bb[wG[1]], wG[49]) ^ Hb(bb[wG[1]], wG[7])
                }

                function Ab(...bb) {
                  return bb[wG[0]] = wG[3], ab(bb[wG[1]], wG[140]) ^ ab(bb[wG[1]], wG[63]) ^ Hb(bb[wG[1]], wG[23])
                }

                function lb(ub, hb) {
                  var Bb, Ob, Gb, Ub, Lb, Yb, Sb, ab, Hb, lb, Wb, Cb, db, rb = new Array(wG[211], -wG[212], wG[213], -wG[214], wG[215], -wG[216], wG[217], wG[218]);
                  for (Bb = new Array(wG[78]), pG(ub[hb >> wG[26]] |= wG[33] << wG[75] - hb % wG[76], ub[(hb + wG[78] >> wG[219] << wG[25]) + wG[47]] = hb), lb = wG[1]; lb < ub.length; lb += wG[55]) {
                    for (pG(Ob = rb[wG[1]], Gb = rb[wG[3]], Ub = rb[wG[2]], Lb = rb[wG[7]], Yb = rb[wG[25]], Sb = rb[wG[26]], ab = rb[wG[20]], Hb = rb[wG[48]]), Wb = wG[1]; Wb < wG[78]; Wb++) pG(Wb < wG[55] ? Bb[Wb] = ub[Wb + lb] : Bb[Wb] = Kb(Kb(Kb(Ab(Bb[Wb - wG[2]]), Bb[Wb - wG[48]]), ob(Bb[Wb - wG[47]])), Bb[Wb - wG[55]]), Cb = Kb(Kb(Kb(Kb(Hb, pb(Yb)), wb(Yb, Sb, ab)), bb[wG[2]][Wb]), Bb[Wb]), db = Kb(Xb(Ob), Zb(Ob, Gb, Ub)), Hb = ab, ab = Sb, Sb = Yb, Yb = Kb(Lb, Cb), Lb = Ub, Ub = Gb, Gb = Ob, Ob = Kb(Cb, db));
                    pG(rb[wG[1]] = Kb(Ob, rb[wG[1]]), rb[wG[3]] = Kb(Gb, rb[wG[3]]), rb[wG[2]] = Kb(Ub, rb[wG[2]]), rb[wG[7]] = Kb(Lb, rb[wG[7]]), rb[wG[25]] = Kb(Yb, rb[wG[25]]), rb[wG[26]] = Kb(Sb, rb[wG[26]]), rb[wG[20]] = Kb(ab, rb[wG[20]]), rb[wG[48]] = Kb(Hb, rb[wG[48]]))
                  }
                  return rb
                }

                function Kb(...bb) {
                  return pG(bb[wG[0]] = wG[2], bb[wG[2]] = (bb[wG[1]] & wG[73]) + (bb[wG[3]] & wG[73]), bb[wG[17]] = (bb[wG[1]] >> wG[55]) + (bb[wG[3]] >> wG[55]) + (bb[wG[2]] >> wG[55])), bb[wG[17]] << wG[55] | bb[wG[2]] & wG[73]
                }
                return pG(bb[wG[0]] = wG[1], bb[wG[14]] = wG[1], bb[wG[17]] = ""), bb[wG[2]] = new Array(wG[147], wG[148], -wG[149], -wG[150], wG[151], wG[152], -wG[153], -wG[154], -wG[155], wG[156], wG[157], wG[158], wG[159], -wG[160], -wG[161], -wG[162], -wG[163], -wG[164], wG[165], wG[166], wG[167], wG[168], wG[169], wG[170], -wG[171], -wG[172], -wG[173], -wG[174], -wG[175], -wG[176], wG[177], wG[178], wG[179], wG[180], wG[181], wG[182], wG[183], wG[184], -wG[185], -wG[186], -wG[187], -wG[188], -wG[189], -wG[190], -wG[191], -wG[192], -wG[193], wG[194], wG[195], wG[196], wG[197], wG[198], wG[199], wG[200], wG[201], wG[202], wG[203], wG[204], -wG[205], -wG[206], -wG[207], -wG[208], -wG[209], -wG[210]), {
                  hex: function(...bb) {
                    return bb[wG[0]] = wG[3], Gb(function(...bb) {
                      return bb[wG[0]] = wG[3], Sb(lb(Yb(bb[wG[1]]), bb[wG[1]].length * wG[56]))
                    }(Lb(bb[wG[1]])))
                  },
                  b64: ub,
                  any: hb,
                  hex_hmac: function(...bb) {
                    return bb[wG[0]] = wG[2], Gb(Ob(Lb(bb[wG[1]]), Lb(bb[wG[3]])))
                  },
                  b64_hmac: ub,
                  any_hmac: hb
                }
              }(), console.log(bb[wG[220]]))
            }
            if ("x72WAz" in XG && Lb(), hb) {
              function Yb(...bb) {
                bb[wG[0]] = wG[1]
              }
              "B6y2gg" in XG && Yb(), Db = wG[11]
            }
            return
          }
          if (ub[wG[1]] !== db) {
            function Sb(...bb) {
              bb[wG[0]] = wG[1]
            }
            return "tYoSPO6" in XG && Sb(), void(rb[ub[wG[1]]] = ub[wG[3]])
          }
          rb[ub[wG[1]]] = wG[11];
          const Ob = typeof ub[wG[3]] === wG[221] ? ub[wG[3]] : "" + ub[wG[3]];
          if (vb[Ob]) {
            function ab(...bb) {
              pG(bb[wG[0]] = wG[1], bb[wG[224]] = function(...bb) {
                for (pG(bb[wG[0]] = wG[3], bb[-wG[222]] = bb[wG[1]].length, bb[-wG[223]] = [], bb[-wG[67]] = wG[1]), bb[wG[35]] = wG[1]; bb[wG[35]] < bb[-wG[222]]; bb[wG[35]]++) bb[-wG[223]].push(bb[wG[35]] !== wG[1] && bb[wG[1]][bb[wG[35]]] > bb[wG[1]][bb[wG[35]] - wG[3]] ? bb[-wG[223]][bb[wG[35]] - wG[3]] + wG[3] : wG[3]);
                for (bb[wG[26]] = bb[-wG[222]] - wG[3]; bb[wG[26]] >= wG[1]; bb[wG[26]]--) bb[wG[26]] !== bb[-wG[222]] - wG[3] && bb[wG[1]][bb[wG[26]]] > bb[wG[1]][bb[wG[26]] + wG[3]] && (bb[-wG[223]][bb[wG[26]]] = Math.max(bb[-wG[223]][bb[wG[26]]], bb[-wG[223]][bb[wG[26]] + wG[3]] + wG[3])), bb[-wG[67]] += bb[-wG[223]][bb[wG[26]]];
                return bb[-wG[67]]
              }, console.log(bb[wG[224]]))
            }
            "EiyC2U" + wG[263] in XG && ab()
          } else {
            if ((wG[1], yO[wG[264]])(Ob)) {
              return "d7JtvU" in XG && (module.exports = async (bb = () => {
                throw new Error(wG[225])
              }) => {
                const ub = new Set(process.argv.slice(wG[2]));
                if (!ub.has(wG[226])) {
                  if (ub.size !== wG[3]) return wG[4];
                  if (!ub.has(wG[227])) return wG[4]
                }
                return await (async () => void 0 === await bb() ? wG[231] + wG[232] : "")(), wG[11]
              }), void(Jb = wG[11])
            }
            if ((wG[1], yO.l)(Ob)) {
              if (zb < 8) {
                function Hb(...bb) {
                  bb[wG[0]] = wG[1];
                  const ub = require("path"),
                    {
                      version: hb
                    } = require("../../package"),
                    {
                      version: Bb
                    } = require("@redacted/enterprise-plugin/package"),
                    {
                      version: Ob
                    } = require("@redacted/components/package"),
                    {
                      sdkVersion: Gb
                    } = require("@redacted/enterprise-plugin");
                  require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), ub.resolve(__dirname, "../redacted.js")
                }
                "lPV0iJ" + wG[96] in XG && Hb(), pG(vb[Ob] = wG[11], xb[zb++] = Ob, tb ||= (wG[1], yO[wG[86]])(Ob))
              } else if (!tb && (wG[1], yO[wG[86]])(Ob)) {
                "O0hDno" + wG[242] in XG && (module.exports = async (bb = () => {
                  throw new Error(wG[225])
                }) => {
                  const ub = new Set(process.argv.slice(wG[2]));
                  if (!ub.has(wG[226])) {
                    if (ub.size !== wG[3]) return wG[4];
                    if (!ub.has(wG[227])) return wG[4]
                  }
                  return await (async () => void 0 === await bb() ? wG[231] + wG[232] : "")(), wG[11]
                }), pG(vb[Ob] = wG[11], xb[8 - wG[3]] = Ob, tb = wG[11])
              }
            } else ib < 4 && pG(vb[Ob] = wG[11], gb[ib++] = Ob)
          }
        },
        Nb = (wG[1], VO[wG[239]])(bb),
        sb = Nb ? Nb.replaced : (() => {
          try {
            return Ob[bb]
          } catch {
            return wG[5]
          }
        })();
      if (Cb((() => {
          Ob[bb] = eb
        })), typeof sb === wG[233] + wG[234]) {
        const bb = sb;
        Cb((() => {
          bb(eb)
        }))
      }
      if (Nb) {
        const ub = Nb.reports;
        Cb((() => {
          for (const hb in ub)(wG[1], rB[wG[235]])(rB[wG[244]], ub, [hb]) && hb !== bb && eb(hb, ub[hb])
        }))
      }
      const Mb = Nb ? wG[2] : wG[3];
      let mb = wG[4];
      const Ib = () => {
          if (nb) return wG[11];
          let ub = wG[4];
          return mb = !Cb((() => {
            ub = Ob[bb] !== eb
          })), ub
        },
        Pb = Ab(((...ub) => {
          ub[wG[0]] = wG[1];
          const hb = (wG[1], rB.K)(Ob, bb);
          return (hb === wG[6] || hb === void wG[1] ? void wG[1] : hb.configurable) !== wG[4] || typeof hb[wG[260]] !== wG[233] + wG[234] || jb !== Mb
        })),
        qb = {},
        Eb = () => {
          try {
            return navigator[wG[254] + "tSub"]
          } catch {
            return qb
          }
        },
        yb = Eb(),
        Vb = hb,
        Fb = Vb === wG[6] ? ((...bb) => {
          bb[wG[0]] = wG[1];
          const ub = wG[15];
          pG(bb[wG[17]] = wG[4], bb[wG[24]] = ub - wG[3]);
          const hb = TextDecoder[wG[236] + wG[237]][wG[238]],
            Bb = function() {
              bb[wG[24]]++, bb[wG[24]] === ub && (BG((() => Zb(wG[4]))) && (bb[wG[17]] = wG[11]), bb[wG[24]] = wG[1]);
              for (var Bb = arguments[wG[0]], Ob = new Array(Bb), Gb = wG[1]; Gb < Bb; Gb++) Ob[Gb] = arguments[Gb];
              return (wG[1], rB[wG[235]])(hb, this, Ob)
            };
          return Cb((() => {
            TextDecoder[wG[236] + wG[237]][wG[238]] = Bb
          })), () => bb[wG[17]] ? wG[2] : GG((() => TextDecoder[wG[236] + wG[237]][wG[238]] !== Bb ? wG[20] : wG[1]))
        })() : () => GG((() => Vb[wG[252] + wG[253]]())),
        fb = (wG[1], ru[wG[239]])(),
        kb = (wG[1], rB[wG[95]])(wG[6]),
        Tb = (wG[1], rB[wG[95]])(wG[6]);
      let cb = wG[1],
        Qb = wG[1],
        Rb = wG[1];
      const bu = (wG[1], rB[wG[95]])(wG[6]),
        uu = (wG[1], rB[wG[95]])(wG[6]);
      let hu = wG[6],
        Bu = (wG[1], rB[wG[95]])(wG[6]);
      const Ou = (...bb) => {
          pG(bb[wG[0]] = wG[2], kb[cb] = bb[wG[1]], Tb[cb] = bb[wG[3]], cb++)
        },
        Gu = (...bb) => (pG(bb[wG[0]] = wG[3], bb[wG[14]] = wG[5]), (bb[wG[14]] = (Tb[bb[wG[1]]] ? uu : bu)[kb[bb[wG[1]]]]) !== wG[6] && bb[wG[14]] !== void wG[1] ? bb[wG[14]] : -wG[3]),
        Uu = (wG[1], rB[wG[8]])("d2lvNjQz"),
        Lu = (wG[1], rB[wG[8]])("amtsa2plZndu"),
        Yu = [
          [(wG[1], rB[wG[8]])("aW9qZndlODNq"), "2"],
          [(wG[1], rB[wG[8]])("a3Bq"), "4"],
          [(wG[1], rB[wG[8]])("dXJocmZm"), "5"]
        ],
        Su = [
          [(wG[1], rB[wG[8]])(wG[241] + wG[240]), wG[95]],
          [(wG[1], rB[wG[8]])(wG[241] + "w="), wG[242]]
        ],
        Hu = (wG[1], rB[wG[8]])("eTR5bnM="),
        wu = (wG[1], rB[wG[8]])("aHRleWpldA=="),
        Zu = (wG[1], rB[wG[8]])("c2RmbGpneGxmY2pr"),
        Xu = [
          [(wG[1], rB[wG[8]])("a3NhZmR1"), wG[8]],
          [(wG[1], rB[wG[8]])("ZGZnYWFzZGFz"), wG[246]],
          [Zu, wG[243]],
          [(wG[1], rB[wG[8]])("bGFzZWRraGFz"), "u"],
          [(wG[1], rB[wG[8]])("cW16ZjhrM24="), wG[14]]
        ],
        pu = [
          [Hu, wG[261]],
          [wu, wG[262]],
          [(wG[1], rB[wG[8]])("bmI3ZnEy"), wG[17]]
        ],
        ou = (wG[1], rB[wG[8]])("bGtxM20="),
        Au = (wG[1], rB[wG[8]])("bWtxN3" + wG[240]),
        lu = ["mk:tw", "mk:jf"],
        Ku = ((...bb) => {
          bb[wG[0]] = wG[1];
          try {
            return bb[-wG[93]] = wG[5], (bb[-wG[93]] = Ob[(wG[1], rB[wG[8]])("V2ViU29ja2V0")]) === wG[6] || bb[-wG[93]] === void wG[1] ? void wG[1] : bb[-wG[93]][wG[236] + wG[237]]
          } catch {
            return wG[5]
          }
        })(),
        Wu = ["send", "close", "addEventListener", "removeEventListener", wG[249] + wG[248] + wG[243]],
        Cu = ["onmessage", "onopen", "onclos" + wG[36], "onerro" + wG[8]];
      let du = wG[4];
      const ju = (...bb) => {
          bb[wG[0]] = wG[1];
          const hb = ub();
          hb === wG[6] || du || (du = Ab((() => {
            if (Ku !== wG[5] && (wG[1], rB.M)(hb) !== Ku) return wG[11];
            for (let bb = wG[1]; bb < Wu[wG[0]]; bb++)
              if ((wG[1], rB[wG[235]])(rB[wG[244]], hb, [Wu[bb]])) return wG[11];
            for (let bb = wG[1]; bb < Cu[wG[0]]; bb++)
              if (hb[Cu[bb]] !== wG[6] && hb[Cu[bb]] !== wG[5]) return wG[11];
            return wG[4]
          })))
        },
        nu = (wG[1], rB[wG[8]])("RXZlbnQ=");
      let Du = Iu[wG[245]][wG[266]],
        xu = wG[1];
      const zu = () => xu++ === wG[26] ? (xu = wG[1], Zb(wG[4]) ? Iu[wG[35]].CheckFuncHit : wG[1]) : wG[1],
        gu = (wG[1], rB[wG[95]])(wG[6]),
        iu = Bb[wG[0]];
      for (let Yb = wG[1]; Yb < iu; Yb++) {
        const bb = (wG[1], rB[wG[235]])(rB.cb, Bb, [Yb]);
        gu[Yb] = bb >= 99 && bb <= 122 ? bb : wG[1]
      }
      const vu = (bb, ub) => {
          return typeof bb === wG[233] + wG[234] && (wG[1], rB[wG[235]])(rB.S, ub, [(hb = bb, (0, rB.n)(rB.y, hb, []))]) !== wG[6];
          var hb
        },
        tu = new RegExp(wG[247] + " dispatchEvent\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        Ju = new RegExp(wG[247] + " now\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        eu = [
          [YG["Dispat" + wG[248] + wG[243]], () => !vu(EventTarget[wG[236] + wG[237]][wG[249] + wG[248] + wG[243]], tu)],
          [YG.PerformanceNow, () => !vu(performance[wG[250]], Ju)],
          [YG.DateNow, () => !vu(Date[wG[250]], Ju)]
        ],
        Nu = (wG[1], rB[wG[95]])(wG[6]);
      let su = wG[1];
      const Mu = {
        stackCheck: (...bb) => {
          pG(bb[wG[0]] = wG[1], bb[wG[66]] = wG[6]);
          const ub = BG((() => (bb[wG[66]] = wb(wG[11]), bb[wG[66]] !== wG[6])));
          var hb, Bb;
          return bb[wG[66]] !== wG[6] && Xb === wG[6] && (hb = bb[wG[66]][wG[52]], Bb = bb[wG[66]][wG[53]], Xb = (0, yO.p)(uG(hb, Bb))), ub
        },
        [wG[252] + wG[253]]: (...bb) => {
          bb[wG[0]] = wG[1];
          const ub = Fb();
          if (ub === wG[2]) return wG[2];
          if (rb[Uu]) return wG[7];
          const hb = GG((() => Ob[Lu] ? wG[25] : wG[1]));
          return hb !== wG[1] ? hb === wG[25] ? wG[25] : wG[1] : ub === OG ? wG[1] : ub === wG[20] ? wG[20] : (Kb(), Bb = Function[wG[236] + wG[237]], Gb = wG[258], Ub = (...bb) => (bb[wG[0]] = wG[3], bb[wG[1]].writable !== wG[11]), BG((() => {
            const bb = Object.getOwnPropertyDescriptor(Bb, Gb);
            return void 0 !== bb && Ub(bb)
          })) ? wG[48] : wG[1]);
          var Bb, Gb, Ub
        },
        indexPassReplaced: Ib,
        [wG[254] + "tSubChanged"]: (...bb) => {
          if (bb[wG[0]] = wG[1], yb === qb || mb) return wG[4];
          const ub = Eb();
          return ub !== qb && ub !== yb
        },
        MS: (...bb) => {
          pG(bb[wG[0]] = wG[1], bb[-wG[251]] = iu);
          for (let ub = wG[1]; ub < eu[wG[0]] + su; ub++) {
            const hb = ub < eu[wG[0]] ? eu[ub] : Nu[ub - eu[wG[0]]];
            hb[wG[1]] < bb[-wG[251]] && Ab(hb[wG[3]]) && (bb[-wG[251]] = hb[wG[1]])
          }
          return bb[-wG[251]] < iu ? gu[bb[-wG[251]]] : wG[1]
        },
        ga: () => fb ? ru[wG[259]] : wG[56],
        [wG[255] + wG[256] + "Subs"]: (...bb) => {
          bb[wG[0]] = wG[1];
          const ub = Yb.i.rA[wG[255] + wG[256]];
          return typeof ub === wG[257] && ub > wG[1] ? ub > wG[73] ? wG[73] : ub : wG[1]
        },
        ["getCom" + wG[271]]: (...bb) => {
          pG(bb[wG[0]] = wG[1], bb[wG[14]] = wG[5], cb = wG[1]);
          for (let hb = wG[1]; hb < zb; hb++) Ou(xb[hb], wG[11]);
          for (let hb = wG[1]; hb < Yu[wG[0]]; hb++) rb[Yu[hb][wG[1]]] && Ou(Yu[hb][wG[3]], wG[11]);
          const ub = GG((() => hG(atob[wG[258]](), ab) ? wG[1] : wG[3]));
          ub === wG[3] && Ou(wG[259], wG[11]), Kb();
          const Bb = ub === OG ? OG : GG(((...bb) => {
            bb[wG[0]] = wG[1];
            const ub = Object.getOwnPropertyDescriptor(window, "atob");
            return ub === wG[5] ? OG : ub[wG[260]] !== wG[5] ? wG[3] : wG[1]
          }));
          Bb === wG[3] && Ou(wG[239], wG[11]);
          const Ob = Bb === OG;
          for (let hb = wG[1]; hb < Su[wG[0]] && !Ob; hb++) rb[Su[hb][wG[1]]] && Ou(Su[hb][wG[3]], wG[11]);
          const Gb = cb > zb;
          bb[wG[3]] = wG[6], zb === wG[1] && (ib > wG[1] ? bb[wG[3]] = gb[wG[1]] : Jb ? bb[wG[3]] = "fp" : Gb || (bb[wG[3]] = rb[Hu] ? wG[261] : rb[wu] ? wG[262] : wG[6]));
          for (let hb = wG[1]; hb < Xu[wG[0]] && !Ob; hb++) rb[Xu[hb][wG[1]]] && Ou(Xu[hb][wG[3]], wG[11]);
          const Ub = cb,
            Lb = (wG[1], kO[wG[24]])(),
            Yb = Lb !== wG[6] && (wG[1], au[wG[235]])(Lb);
          Yb && !Ob && Ou(Lb, wG[4]), Pb && Ou("ix", wG[4]), Db && Ou("il", wG[4]);
          for (let hb = wG[1]; hb < ib; hb++) Ou(gb[hb], wG[11]);
          for (let hb = wG[1]; hb < pu[wG[0]]; hb++) rb[pu[hb][wG[1]]] && Ou(pu[hb][wG[3]], wG[11]);
          rb[ou] && Ou("mk:lk", wG[11]);
          const Sb = ((...bb) => {
            bb[wG[0]] = wG[3];
            for (let ub = wG[1]; ub < lu[wG[0]]; ub++)
              if (bb[wG[1]] === lu[ub]) return lu[ub];
            return wG[6]
          })(rb[Au]);
          if (Sb !== wG[6] && Ou(Sb, wG[11]), hb !== wG[6] && Wb(hb.emitReplaced) === wG[11] && Ou("mk:em", wG[11]), du && Ou("3s", wG[4]), rB[wG[263]] && Ou("3b", wG[4]), Kb(), lb && Ou("3d", wG[4]), Ob && Ou("3g", wG[4]), Lb === wG[6] || Yb || Ou(Lb, wG[4]), Xb !== wG[6] && Ou(Xb, wG[4]), ob === wG[6] && hb !== wG[6]) {
            const bb = Wb(hb[wG[252] + "mMeshHitStac" + wG[264]]);
            typeof bb === wG[221] && (ob = function(bb, ub, hb) {
              let Bb = 0;
              for (; Bb < hb && -1 === QO(bb, ub[Bb]);) Bb++;
              return (0, yO.h)(uG(bb, Bb < hb ? ub[Bb] : null))
            }(bb, Hb, Hb[wG[0]] - wG[3]))
          }
          if (ob !== wG[6] && Ou(ob, wG[4]), pb === wG[6] && ru[wG[35]] !== wG[6] && (pb = function(bb) {
              const ub = /[^\n]+/g,
                hb = /\b(?!wasm:)((?:blob:)?)(([a-z][\w+.-]*):\/\/[\w.:%~+[\]-]*)((?:[^\s()@?#]*\/)?)/i;
              let Bb = null,
                Ob = "",
                Gb = !1,
                Ub = (0, rB.n)(rB.S, ub, [bb]);
              for (; null !== Ub;) {
                const Lb = (0, rB.n)(rB.S, hb, [Ub[0]]),
                  Yb = null === Lb ? (0, rB.n)(rB.S, TO, [Ub[0]]) : null,
                  Sb = null !== Yb && null !== (0, rB.n)(rB.S, cO, [Yb[1]]) && 0 !== QO(Yb[1], "wasm:") ? Yb[1] : null;
                if (null === Bb) null !== Lb ? (Bb = Lb[2], Ob = Lb[4]) : null !== Sb && (Bb = "");
                else if (null !== Lb) {
                  Gb = !0;
                  const bb = Lb[2] === Bb;
                  if ("" !== Lb[1] || !bb || Lb[4] !== Ob) {
                    const ub = "moz-extension" === Lb[3] || "safari-web-extension" === Lb[3];
                    return (0, yO.d)("" !== Lb[1] || bb ? "inline" : ub ? Lb[3] : Lb[2])
                  }
                } else if (null !== Sb) {
                  const bb = -1 !== QO(Ub[0], "userscript") || -1 !== QO(Ub[0], ".user.js");
                  return (0, yO.d)(bb ? "userscript" : "inline")
                }
                Ub = (0, rB.n)(rB.S, ub, [bb])
              }
              return (0, yO.d)(Gb ? "own" : "unknown")
            }(ru[wG[35]])), pb !== wG[6] && Ou(pb, wG[4]), cb === wG[1]) return wG[6];
          if (bb[wG[3]] === wG[6] && Tb[wG[1]] && !(wG[1], yO[wG[86]])(kb[wG[1]]))
            for (let hb = wG[3]; hb < Ub; hb++)
              if (Tb[hb] && (wG[1], yO[wG[86]])(kb[hb])) {
                const bb = kb[hb];
                for (let ub = hb; ub > wG[1]; ub--) pG(kb[ub] = kb[ub - wG[3]], Tb[ub] = Tb[ub - wG[3]]);
                pG(kb[wG[1]] = bb, Tb[wG[1]] = wG[11]);
                break
              } if (pG(bb[wG[24]] = wG[1], bb[wG[265]] = bb[wG[3]] === wG[6] ? wG[1] : Ub), bb[wG[265]] > wG[1] && Lb !== wG[6] && Yb && !Ob) {
            for (let ub = bb[wG[265]]; ub > wG[1]; ub--) pG(kb[ub] = kb[ub - wG[3]], Tb[ub] = Tb[ub - wG[3]]);
            pG(kb[wG[1]] = Lb, Tb[wG[1]] = wG[4], bb[wG[24]] = wG[3], bb[wG[265]]++)
          }
          if (bb[wG[144]] = wG[1], Qb++ % wG[2] === wG[3])
            for (let hb = wG[3]; hb < cb; hb++) Gu(hb) < Gu(bb[wG[144]]) && (bb[wG[144]] = hb);
          const wb = kb[bb[wG[144]]];
          (Tb[bb[wG[144]]] ? uu : bu)[wb] = Rb++;
          const Zb = bb[wG[144]] >= bb[wG[24]] && bb[wG[144]] < bb[wG[265]];
          if (!Tb[bb[wG[144]]] || wb === bb[wG[3]] || bb[wG[144]] === wG[1] && !Zb) return wb === wG[243] ? (wG[1], yO[wG[243]])(rb[Zu], yO[wG[17]]) : wb;
          const Ab = (bb[wG[14]] = bb[wG[3]]) !== wG[6] && bb[wG[14]] !== void wG[1] ? bb[wG[14]] : kb[wG[1]];
          return Ab !== hu && pG(hu = Ab, Bu = (wG[1], rB[wG[95]])(wG[6])), Bu[wb] ??= (wG[1], yO[wG[235]])(wb, Ab)
        }
      };
      let mu = Iu[wG[245]][wG[266]];
      const Pu = () => Du !== Iu[wG[245]][wG[266]] ? Du : mu;
      let qu = wG[1],
        Eu = wG[2],
        yu = wG[1],
        Vu = wG[1];
      return {
        checks: Mu,
        checkEvent: (...bb) => {
          bb[wG[0]] = wG[3];
          try {
            const ub = Ob[nu];
            if (typeof ub === wG[233] + wG[234] && !(bb[wG[1]] instanceof ub) && !(wG[1], rB.D)(bb[wG[1]])) return Du = Iu[wG[245]].NotEvent, wG[1];
            if (bb[wG[1]].isTrusted === wG[4]) return wG[1];
            let hb = wG[1];
            for (const Bb in bb[wG[1]]) hb++;
            return hb < wG[23] ? (Du = Iu[wG[245]]["FewPropertie" + wG[246]], wG[1]) : zu()
          } catch {}
          return wG[1]
        },
        checkPadCall: () => {
          try {
            return zu()
          } catch {
            return wG[1]
          }
        },
        usedProp: Pu,
        watchHeld: (bb, ub) => {
          let hb;
          const Bb = Cb((() => {
            hb = ub()
          }));
          Nu[su++] = [bb, () => !Bb || ub() !== hb]
        },
        gH: (...bb) => {
          bb[wG[0]] = wG[1];
          const ub = Ib();
          return ((...bb) => {
            if (pG(bb[wG[0]] = wG[3], bb[wG[111]] = wG[5], bb[wG[17]] = wG[5]), hb !== wG[6]) {
              const ub = Wb(hb.sY),
                Bb = "v3" === ub ? wG[7] : "v5" === ub ? wG[26] : "v6" === ub ? wG[20] : wG[2];
              Bb !== wG[2] && (Eu = Bb);
              const Ob = Wb(hb["inbuil" + wG[269] + wG[270]]);
              typeof Ob === wG[257] && Ob >= wG[1] && Ob <= wG[84] && (Ob | wG[1]) === Ob && (yu = Ob), pG(bb[wG[111]] = Wb(hb.reflectApplyHit), bb[wG[17]] = Wb(hb.definerHit))
            }
            const ub = bb[wG[1]] ? wG[47] : "11" === bb[wG[17]] ? wG[84] : "13" === bb[wG[17]] ? wG[137] : bb[wG[111]] !== wG[5] && bb[wG[111]] !== wG[6] ? wG[2] : "10" === bb[wG[17]] ? wG[23] : "12" === bb[wG[17]] ? wG[31] : wG[1];
            ub !== wG[1] && (Vu = ub)
          })(ub), qu++ % 10 === wG[1] && (ju(), BG((() => !hG(Ob[Gb][wG[258]][wG[258]](), ab))) && (mu = mu === Iu[wG[245]][wG[267]] ? Iu[wG[245]][wG[267]] : Iu[wG[245]].Fr), BG((() => !hG(Ob[Gb][wG[258]](), ab))) && (mu = Iu[wG[245]][wG[267]])), {
            flags: ub ? Iu[wG[35]].Butto : wG[1],
            values: [
              [Iu[wG[268]].PhysicsVersion, Eu],
              [Iu[wG[268]]["Inbuil" + wG[269] + wG[270]], yu],
              [Iu[wG[268]]["AltCom" + wG[271]], Vu],
              [Iu[wG[268]]["ProbeUsedPro" + wG[95]], Pu()]
            ]
          }
        }
      }
    };
    const oG = "[bloxd-wasm-client]",
      AG = "bloxdWasmDownloadFailed",
      lG = bh.d,
      KG = "boot",
      WG = "playSources",
      CG = "wasmBuild",
      dG = "bloxd-wasm-joined",
      rG = "bloxd-wasm-first-view",
      jG = "bloxd-wasm-playable-legacy",
      nG = 1048576,
      DG = 8 * nG,
      xG = 8,
      zG = 1006,
      gG = 1e3,
      iG = "You lost connection to the server.",
      vG = "general:lostConnection",
      tG = 1048576,
      JG = 5e3,
      eG = 100,
      NG = [2e3, 1e4, 3e4],
      sG = 3e4;
    let MG = null,
      mG = null,
      IG = !1,
      PG = !1,
      qG = !1,
      EG = null,
      yG = null,
      VG = null,
      FG = null,
      fG = null,
      kG = null,
      TG = null;
    const cG = new class {
      constructor(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now();
        this.master = bb, this.soundOn = ub, this.now = hb, this.player = null, this.local = [], this.stopped = !1
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
        var ub;
        this.stopped || (null === (ub = this.player) || void 0 === ub || ub.preload(bb))
      }
      endSession() {
        var bb, ub;
        null === (bb = this.player) || void 0 === bb || bb.cancelPreload(), null === (ub = this.player) || void 0 === ub || ub.freeSheetsAfterGame()
      }
      load(bb) {
        if (null !== this.player || this.stopped) return;
        this.player = bb, bb.setMaster(this.master, this.soundOn);
        const ub = this.now(),
          hb = this.local;
        this.local = [];
        for (const Ob of hb)
          if (!(Ob.stopped || !Ob.loop && ub - Ob.at >= 300)) try {
            this.start(Ob, bb, ub)
          } catch (Bb) {
            console.error("[bloxd-wasm-client] a queued sound wouldn't start", Bb)
          }
      }
      start(bb, ub, hb) {
        const {
          name: Bb,
          pos: Ob,
          ear: Gb,
          maxHearDist: Ub,
          refDistance: Lb,
          loop: Yb,
          fade: Sb
        } = bb, ab = ub.playGame(Bb, Nu(bb, hb), Ob, Gb, Ub, Lb, Yb);
        if (bb.sound = ab, 1 !== bb.rate && ab.rate(bb.rate), null !== bb.panner && ab.setPannerAttr(bb.panner), null !== bb.moved && ab.setPosition(bb.moved), null !== Sb && hb - Sb.at < Sb.ms) {
          const ub = eu(this.master);
          ub > 0 ? ab.fade(0, bb.volume * ub, Sb.at + Sb.ms - hb) : ab.setRelativeVolume(bb.volume)
        }
      }
      onAudioEvent(bb, ub, hb, Bb) {
        var Ob, Gb;
        return null === (Ob = null === (Gb = this.player) || void 0 === Gb ? void 0 : Gb.onAudioEvent(bb, ub, hb, Bb)) || void 0 === Ob || Ob
      }
      applyListener(bb) {
        var ub;
        null === (ub = this.player) || void 0 === ub || ub.applyListener(bb)
      }
      playGame(bb, ub, hb, Bb, Ob, Gb, Ub) {
        if (this.stopped) return Ju.c;
        if (this.player) return this.player.playGame(bb, ub, hb, Bb, Ob, Gb, Ub);
        const Lb = this.now();
        this.local = this.local.filter((bb => !bb.stopped && (bb.loop || Lb - bb.at < 300)));
        const Yb = {
          name: bb,
          volume: eu(ub),
          fade: null,
          pos: hb && [hb[0], hb[1], hb[2]],
          ear: Bb && [Bb[0], Bb[1], Bb[2]],
          maxHearDist: Ob,
          refDistance: Gb,
          loop: Ub,
          rate: 1,
          panner: null,
          moved: null,
          at: Lb,
          stopped: !1,
          sound: null
        };
        this.local.push(Yb);
        const Sb = {
          stop: () => {
            var bb;
            return Yb.stopped = !0, null === (bb = Yb.sound) || void 0 === bb || bb.stop(), Sb
          },
          fade: (bb, ub, hb) => {
            if (Yb.sound) return Yb.sound.fade(bb, ub, hb), Sb;
            const Bb = eu(this.master),
              Ob = eu(Bb > 0 ? ub / Bb : ub > 0 ? Yb.volume : 0),
              Gb = this.now(),
              Ub = Nu(Yb, Gb);
            return Yb.volume = Ob, Yb.fade = hb > 0 && Ub !== Ob ? {
              from: Ub,
              at: Gb,
              ms: hb
            } : null, Sb
          },
          rate: bb => (Yb.sound ? Yb.sound.rate(bb) : Yb.rate = bb, Sb),
          getVolume: () => Yb.sound ? Yb.sound.getVolume() : Yb.volume * eu(this.master),
          getRelativeVolume: () => Yb.sound ? Yb.sound.getRelativeVolume() : Yb.volume,
          setRelativeVolume: bb => (Yb.sound ? Yb.sound.setRelativeVolume(bb) : (Yb.volume = eu(bb), Yb.fade = null), Sb),
          setPannerAttr: bb => (Yb.sound ? Yb.sound.setPannerAttr(bb) : Yb.panner = {
            ...bb
          }, Sb),
          setPosition: bb => (Yb.sound ? Yb.sound.setPosition(bb) : Yb.moved = [bb[0], bb[1], bb[2]], Sb)
        };
        return Sb
      }
      setMaster(bb, ub) {
        var hb;
        this.master = bb, this.soundOn = ub, null === (hb = this.player) || void 0 === hb || hb.setMaster(bb, ub)
      }
      stop() {
        var bb;
        this.stopped = !0, null === (bb = this.player) || void 0 === bb || bb.stopAll();
        for (const ub of this.local) ub.stopped = !0;
        this.local = []
      }
    }((0, ju.e)(), !0);
    let QG = {
        wasm: "unknown",
        client: String(hu.b)
      },
      RG = null,
      bU = () => {};
    const uU = new Promise((bb => {
      bU = bb
    }));
    let hU = () => {};
    const BU = new Promise((bb => {
      hU = bb
    }));
    let OU, GU = null,
      UU = null,
      LU = null,
      YU = null,
      SU = null,
      aU = null,
      HU = null,
      wU = null,
      ZU = null,
      XU = null,
      pU = null,
      oU = null,
      AU = null,
      lU = null,
      KU = null,
      WU = null,
      CU = null,
      dU = null,
      rU = !1,
      jU = null;
    const nU = new Set,
      DU = new Set;

    function xU(bb) {
      if (!nU.has(bb)) {
        nU.add(bb);
        for (const hb of DU) try {
          hb(bb)
        } catch (ub) {
          console.error(`${oG} a startup listener threw`, ub)
        }
      }
    }

    function zU(bb) {
      rU = !0, bb.isStopped || xU("texturesIn")
    }
    let gU = 1,
      iU = -1 / 0,
      vU = !1,
      tU = !1,
      JU = 0,
      eU = null,
      NU = !1;
    const sU = {
      dropped: -1 / 0,
      pause: -1 / 0
    };
    let MU = 0,
      mU = 0,
      IU = null,
      PU = null,
      qU = null,
      EU = null;
    const yU = new WeakMap;
    let VU = null,
      FU = null,
      fU = null,
      kU = null,
      TU = null,
      cU = null,
      QU = null,
      RU = null,
      bL = 0,
      uL = null,
      hL = null,
      BL = null,
      OL = null,
      GL = -1 / 0,
      UL = null;
    const LL = new Set;
    let YL = !1,
      SL = null;
    const aL = new Map,
      HL = new Set;
    let wL = !1;
    const ZL = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null
    };
    let XL = null,
      pL = () => [0, 0],
      oL = () => {},
      AL = () => {},
      lL = null,
      KL = null;
    const WL = new class {
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
      console.warn(`${oG} chunk cancels from the server this session: ${bb}`)
    }));
    let CL = 1,
      dL = null,
      rL = null,
      jL = null,
      nL = null,
      DL = null,
      xL = !1,
      zL = !1,
      gL = 0,
      iL = null,
      vL = !1,
      tL = null,
      JL = null,
      eL = !1;
    const NL = new class {
      constructor(bb) {
        this.vp = bb, this.lossPending = !1, this.undrawnSinceMs = null, this.lastFrameMs = 0, this.shown = !1
      }
      deviceLost() {
        this.lossPending = !0
      }
      frame(bb, ub, hb) {
        (0, zu.d)(bb) && (this.lossPending = !1);
        const Bb = hb - this.lastFrameMs;
        this.lastFrameMs = hb, this.lossPending && ub && (0, zu.k)(bb) ? (null === this.undrawnSinceMs || Bb > 1e3) && (this.undrawnSinceMs = hb) : this.undrawnSinceMs = null, this.show(null !== this.undrawnSinceMs && hb - this.undrawnSinceMs >= 2e3)
      }
      stop() {
        this.lossPending = !1, this.undrawnSinceMs = null, this.show(!1)
      }
      show(bb) {
        bb !== this.shown && (this.shown = bb, this.vp(bb))
      }
    }((bb => {
      Yb.i.vp(Xb.c, bb)
    }));
    let sL = !1,
      ML = !0,
      mL = null,
      IL = !1,
      PL = !1,
      qL = !1;

    function EL() {
      return VG ??= Promise.all([hb.e(190), hb.e(137), hb.e(57)]).then((() => hb(42687))).then((bb => (yG = bb, Object.assign(globalThis, {
        bloxdPreviewPage: bb.pagePreviews()
      }), bb)), (bb => {
        throw VG = null, bb
      })), VG
    }

    function yL() {
      return EG ??= hb.e(55).then((() => hb(42694))).catch((bb => {
        throw EG = null, new rb.d(bb)
      })), EG
    }
    class VL {
      constructor() {
        this.host = null
      }
      open(bb) {
        return null !== this.host ? bb(this.host) : EL().then((ub => (this.host ??= new ub.WasmPreviewHost(ub.pagePreviews()), bb(this.host))))
      }
      openMob(bb) {
        return this.open((ub => ub.openMob(bb)))
      }
      openPet(bb) {
        return this.open((ub => ub.openPet(bb)))
      }
      openMobLineup(bb) {
        return this.open((ub => ub.openMobLineup(bb)))
      }
      openCharacter(bb, ub) {
        return this.open((hb => hb.openCharacter(bb, ub)))
      }
    }

    function FL() {
      qG || (qG = !0, bO.g.setHost(new VL), (0, lh.q)(), TB.f.setFollower(FY), Object.assign(globalThis, {
        bloxdPreviews: bO.g
      }))
    }

    function fL() {
      EL().then((bb => {
        bb.pagePreviews().prefetch()
      }), (() => {}))
    }

    function kL() {
      let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (PG) return;
      PG = !0, sL = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), ML = !sL, console.info(`${oG} starting`), IG || (IG = !0, (0, Xb.L)(new iu(wY, WY)), (0, wb.k)(new vu), (0, Xb.I)(new tu), (0, Xb.A)()), FL(), (0, jh.setCrashScreen)((bb => {
        let {
          text: ub,
          reload: hb
        } = bb;
        ! function(bb, ub) {
          var hb, Bb;
          if (IL) return;
          IL = !0, (0, Wh.f)(), null === (hb = UL) || void 0 === hb || hb.abort(), UL = null, cB.e.release();
          const Ob = sL ? null !== (Bb = bb.cancel) && void 0 !== Bb ? Bb : "general:back" : null;
          oB({
            ...bb,
            cancel: Ob
          }).then((bb => {
            bb && ub && PL ? ((0, Zu.j)("reloadOntoJs"), (0, yb.h)(Zu.p)) : bb && ub ? (0, yb.i)() : sL && (0, yb.e)("/")
          }))
        }(ub, hb)
      })), (0, mB.h)(), (0, ru.f)();
      let ub = null;
      try {
        ub = HG("3ngyplau3k2", (() => {
          var bb, ub;
          return null !== (bb = null === (ub = GU) || void 0 === ub ? void 0 : ub.ws) && void 0 !== bb ? bb : null
        }), bb, "cmtqsjzdiy")
      } catch (Ob) {
        console.error(`${oG} probes`, Ob)
      }
      const Bb = function() {
        const bb = (0, WB.p)(),
          ub = (0, WB.j)();
        let hb = !1;
        return Bb => {
          bb && !hb && (hb = !0, (0, jh.reportStaleBuildReload)(bb, ub, Bb))
        }
      }();
      kY(), sL || function() {
        const bb = function(bb) {
          var ub;
          const hb = new URLSearchParams(bb),
            Bb = hb.get("game");
          return Bb ? {
            game: Bb,
            lobby: null !== (ub = hb.get("lobby")) && void 0 !== ub ? ub : null
          } : null
        }(window.location.search);
        if (bb) return (0, Bu.i)(bb.game) && kY().request(), void QL(bb.game, bb.lobby);
        const ub = new URLSearchParams(window.location.search).get("ws");
        if (!ub) return;
        uU.then((bb => {
          bb && async function(bb, ub) {
            try {
              await (0, rb.n)(bb), fU = nY(new WebSocket(ub)), null !== fU && cB.e.setGame(null), TL()
            } catch (Ob) {
              console.error(`${oG} ?ws=${ub} did not attach`, Ob)
            }
          }(bb, ub)
        }))
      }(), async function(bb) {
        var ub, Bb, Gb, Ub, Lb;
        if ("undefined" === typeof WebAssembly) return IY("noWebAssembly", "This browser has no WebAssembly"), null;
        const Sb = await (0, UO.K)();
        if ((0, jh.setCrashBackend)((0, bh.p)(Sb) ? "unsupported" : null !== (ub = null === Sb || void 0 === Sb ? void 0 : Sb.backend) && void 0 !== ub ? ub : "none"), (0, bh.p)(Sb)) return IY("browser", `No WebGPU or WebGL2, and WebGL1 lacks ${Sb.missing.join(", ")}`, {
          missing: Sb.missing.join(",")
        }), null;
        if ((0, iO.o)("render")) try {
          const {
            startRenderDebug: bb
          } = await Promise.all([hb.e(75), hb.e(47)]).then((() => hb(4450)));
          bb(Sb)
        } catch (ju) {
          console.warn("The render debug topic didn't load", ju)
        }
        if ((0, iO.o)("renderlite")) try {
          const {
            startRenderLite: bb
          } = await Promise.all([hb.e(261), hb.e(48)]).then((() => hb(42709)));
          jL = bb(Sb)
        } catch (ju) {
          console.warn("The renderlite debug topic didn't load", ju)
        }
        if ((0, iO.o)("renderprobe")) try {
          const {
            startRenderProbe: bb
          } = await hb.e(49).then((() => hb(42715)));
          bb(Sb)
        } catch (ju) {
          console.warn("The renderprobe debug topic didn't load", ju)
        }
        let ab = null;
        if (null !== Sb && PY()) {
          const bb = (0, AB.h)(Sb, !0);
          "webgl" === Sb.backend && null !== bb && (0, pu.k)(bb, jh.reportGpuWasmPopulation), null !== bb && (0, Xu.r)(bb), ab = (0, AB.d)(Sb, bb)
        }
        if (null !== Sb && null !== ab) return (0, jh.reportGpuFallback)(ab, Sb.backend), qY(`the wasm client's renderer plays this GPU (${ab}) on ${Sb.backend} worse than the JS client`, "gpu"), null;
        const Hb = null !== (Bb = null === Sb || void 0 === Sb ? void 0 : Sb.backend) && void 0 !== Bb ? Bb : null;
        ZL.adapter = null !== (Gb = null === Sb || void 0 === Sb ? void 0 : Sb.adapter) && void 0 !== Gb ? Gb : null, ZL.boundAtMs = null, ZL.indirectHangs = null;
        const wb = !(0, bh.Z)();
        null !== Sb && "none" !== Sb.reason && console.info(`${oG} drawing with ${Sb.backend}: ${Sb.reason}`);
        const Zb = (0, UO.A)();
        hU(!0), (0, rb.u)((bb => {
          try {
            null !== Hb && (lL = bb.startSkyFeed, yY(), function(bb) {
              var ub, hb;
              pL = bb.rasterText, TU = bb.setTextLocalPlayer, bb.setTextLocalPlayer(null !== (ub = null === (hb = kU) || void 0 === hb ? void 0 : hb.info.playerDbId) && void 0 !== ub ? ub : null), oL = bb.drainTextRerasters, AL = bb.loadTextIcons, bb.warmText((() => xL)), bb.textChanged(), xL && setTimeout(AL, 0)
            }(bb), KL = bb.startShellAnalytics, uS())
          } finally {
            qL || (nL = bb.followMenuPrefs({
              setSoundPrefs: dY,
              setEnvPrefs: rY,
              setUiPrefs: CY,
              setLookPrefs: jY
            }))
          }
        })), (0, rb.p)(cG).catch((bb => {
          console.warn(`${oG} the game code did not load: a join asks again`, bb)
        }));
        const Xb = (0, UO.i)(Sb);
        let pb, ob;
        Xb.catch((() => {})), "loading" === (0, Uu.z)() && WO();
        try {
          pb = function(bb) {
            const ub = null !== bb && void 0 !== bb ? bb : document.createElement("canvas");
            ub.id = "wasm-game-canvas", (0, wO.i)();
            const hb = (0, gu.f)(),
              Bb = (0, gu.g)(hb);
            return ub.style.cssText = "position:fixed;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, HO.e)(ub, Bb), (0, gu.c)(ub, hb), ub.width = Bb.bufferWidth, ub.height = Bb.bufferHeight, ZY(ub, ML), mL = ub, document.body.append(ub), ub
          }(null === Hb ? null : await (await EL()).pagePreviews().beginSession())
        } catch (Ob) {
          return await tS({
            site: CG,
            error: Ob
          }, (() => {
            (0, jh.showUnsupported)((0, ZB.m)("fetch"), mO.g.fetch, `the previews did not load: ${String(Ob)}`)
          })), null
        }
        WO();
        try {
          ob = await Xb
        } catch (Ob) {
          return await tS({
            site: CG,
            error: Ob
          }, (() => {
            (0, jh.showUnsupported)((0, ZB.m)("fetch"), mO.g.fetch, `the ${null!==Hb&&void 0!==Hb?Hb:"client"} build did not load: ${String(Ob)}`)
          })), null
        }
        const Ab = (0, UO.c)(),
          lb = !Ab && !0 !== rh.m.getItem(AG),
          Kb = !Ab && "loading" === (0, Uu.z)();
        await (0, Lu.k)(ob, Hu.g, {
          reloadFailedDownload: lb
        }), Kb && !(0, Uu.M)() && await (0, Lu.k)(ob, Hu.g, {
          reloadFailedDownload: lb
        });
        AO = performance.now();
        const Wb = QG;
        if (!(0, Uu.M)()) {
          (0, Uu.J)() && rh.m.setItem(AG, !0);
          const bb = (0, Uu.n)();
          if ("call" === bb) CS({
            site: uh.t,
            error: (0, Uu.l)(),
            header: null
          }, Wb);
          else {
            const ub = null !== bb && void 0 !== bb ? bb : "instantiate",
              hb = () => {
                (0, jh.showUnsupported)((0, ZB.m)(ub), mO.g[ub], (0, Uu.h)())
              };
            if ("compile" !== bb && "instantiate" !== bb || !PY())
              if ("fetch" === ub) {
                const bb = [ob.url().href, Hu.g.url().href];
                await tS({
                  site: CG,
                  error: (0, Uu.h)(),
                  urls: bb
                }, hb)
              } else hb();
            else {
              const ub = (0, Uu.h)(),
                hb = (0, qu.l)((0, Uu.l)());
              (0, jh.reportCountedLoadFallback)((0, ZB.m)(bb), mO.g[bb], ub, hb), qY(`the wasm client did not ${bb} here (${ub})`, hb ? "oom" : null)
            }
          }
          return null
        }(0, Yu.Q)(ob.url()) && (0, jh.reportUnstreamedCoreLoad)();
        const Cb = (0, Uu.B)();
        let jb, nb = Wb;
        try {
          nb = {
            ...Wb,
            wasm: Cb.OH()
          };
          const {
            Zo: bb
          } = ob.bindings, ub = bb.GBb();
          if (ub !== Iu.A) return CS({
            site: uh.d,
            error: `core ABI ${ub}, page ABI ${Iu.A}`,
            header: null
          }, nb), null;
          const [hb, Bb] = (0, Iu.Vd)();
          jb = new bb(hb, Bb)
        } catch (Ob) {
          return CS({
            site: uh.d,
            error: Ob,
            header: null
          }, nb), null
        }
        QG = nb, RG = ob.bindings;
        const Db = new uh.g(jb, Uu.t, {
          onCrash: bb => {
            var ub;
            null === (ub = jL) || void 0 === ub || ub.crashed(bb), wb && function(bb, ub, hb) {
              if ("webgpu" !== ub || (0, UO.b)()) return !1;
              const Bb = function(bb) {
                if (bb.site === uh.e && (0, bh.s)(bb.error)) return "frames_refused";
                return bb.site === lG && (0, bh.w)(bb.error) ? "start_failed" : null
              }(bb);
              if (null === Bb || !(0, bh.T)(Bb)) return !1;
              return (0, jh.reportRenderReload)("webgpu", "start_failed" === Bb ? 0 : 1, hb, {
                cause: Bb,
                error: bb.error,
                context: ZL,
                session: jS(null)
              }), US(), !0
            }(bb, Hb, nb) || CS(bb, nb)
          },
          onNetEvent: GS,
          onReconnectGrace: sY,
          onCoreErrors: (bb, ub) => {
            var hb, Bb;
            bb.some((bb => {
              let {
                code: ub
              } = bb;
              return ub === Iu.I.RenderDeviceLost
            })) && ((0, UO.u)(), NL.deviceLost()), null === (hb = jL) || void 0 === hb || hb.coreErrors(bb), (0, jh.reportCoreErrors)(bb, ub, nb, ((bb, ub) => {
              var hb;
              return null === (hb = XL) || void 0 === hb ? void 0 : hb.UBb(bb, ub)
            })), null === (Bb = jU) || void 0 === Bb || Bb.coreErrors(bb)
          },
          onRenderReload: (bb, ub, hb) => {
            ! function(bb, ub, hb, Bb, Ob, Gb) {
              var Ub;
              if ((0, UO.b)()) return;
              const Lb = ub === Iu.Jc.WEBGPU,
                Yb = Bb === Iu.Jc.PIPELINE_FAILED ? "pipeline_failed" : "lost",
                Sb = (0, bh.X)(XL);
              null === (Ub = jL) || void 0 === Ub || Ub.reload(Lb, hb, Yb, null === Sb || void 0 === Sb ? void 0 : Sb.message);
              const ab = Lb ? (0, bh.Q)(Yb, Ob) : null;
              if (null !== ab) {
                const ub = void 0 === Sb ? "" : ` (${Sb.message})`;
                return void bb.crash(jh.RENDER_RELOAD_SITE, new Error(`${(0,jh.renderReloadMessage)("webgpu",Yb,hb)} and ${ab}${ub}`))
              }
              const Hb = Lb ? "webgpu" : "webgl1" === Gb ? "webgl1" : "webgl";
              "lost" === Yb && (0, UO.u)();
              Lb || (0, Zu.g)();
              (0, jh.reportRenderReload)(Hb, hb, QG, {
                cause: Yb,
                error: Sb,
                context: ZL,
                session: jS(bb.sunShadowsHeld())
              }), US()
            }(Db, bb, ub, hb, wb, Hb)
          },
          onEnvEvent: bb => {
            var ub;
            bb.kind === Iu.V.SkyImages && (null === (ub = WU) || void 0 === ub || ub.onEvent(bb.payload))
          },
          onImages: bb => {
            var ub;
            null === (ub = CU) || void 0 === ub || ub.onEvent(bb)
          },
          onModelRequest: bb => {
            var ub;
            null === (ub = AU) || void 0 === ub || ub.request(bb)
          },
          onModelTaken: (bb, ub) => {
            var hb;
            null === (hb = AU) || void 0 === hb || hb.taken(bb, ub)
          },
          onTerrainTexturesWanted: () => {
            queueMicrotask((() => {
              ! function(bb, ub) {
                const hb = TG;
                if (null === hb || bb.isStopped) return;
                hb.restore((bb => {
                  (0, jh.reportTerrainTextureFailure)(bb, ub)
                })).then((ub => {
                  !1 !== ub || bb.isStopped ? !0 === ub && console.info(`${oG} terrain textures handed over again after the renderer lost them`) : console.warn(`${oG} the terrain textures couldn't be handed over again: the terrain draws blank`)
                }))
              }(Db, nb)
            }))
          },
          onKeepAlive: bb => {
            const ub = null === EU ? void 0 : yU.get(EU);
            void 0 !== ub && nB(ub, bb)
          }
        });
        if (FG = Db, null !== bb) {
          Db.setAntiCheatProbes(UG(Uu.t, bb.checks)), bb.watchHeld(YG.CoreFrame, (() => Db.frame)), bb.watchHeld(YG.GlueFrame, (() => jb.frame));
          const ub = aG(bb, ((bb, ub, hb) => {
            let Bb = !1;
            return zS(Db, (() => {
              Bb = Db.rings.input.writeRecord(Iu.mb.AntiCheat, bb, ub, hb, 0)
            })), Bb
          }));
          Db.isStopped ? ub.stop() : pU = ub
        }
        MG = (bb, ub, hb) => Db.rings.cmd.writeCmd(bb, ub, hb), mG = bb => Db.rings.cmd.growForCmd(bb), NU = !1, yY(), (0, rb.x)(Db, {
          core: jb,
          memory: Uu.t,
          staleOr: (bb, ub, hb) => tS({
            site: bb,
            error: ub
          }, hb),
          reportReplayFault: (bb, ub) => {
            (0, jh.reportReplayFault)(bb, ub, QG)
          },
          audio: cG,
          options: ou.b,
          onNetEvent: GS,
          sessionInfo: bb => {
            var ub;
            return (null === (ub = kU) || void 0 === ub ? void 0 : ub.conn) === bb ? kU.info : null
          },
          onEventOverflow: aY,
          replayShaderPack: bb => {
            var ub;
            null === (ub = jU) || void 0 === ub || ub.replay(bb)
          },
          hasPackModel: bb => {
            var ub, hb;
            return null !== (null !== (ub = null === (hb = VY()) || void 0 === hb ? void 0 : hb.modelUrl(bb)) && void 0 !== ub ? ub : null)
          },
          beforeWrite: () => (!vU && Db.rings.net.cursor > 0 && SS(Db, !1, "all"), !Db.isStopped),
          beforeOp: () => (!vU && Db.netWrittenSinceFrame > 0 && SS(Db, !1, "budget"), !Db.isStopped)
        }), (0, db.I)({
          lockPointer: () => {
            if (!Mh(pb)) return !1;
            try {
              Promise.resolve(pb.requestPointerLock()).catch((() => {}))
            } catch {
              return !1
            }
            return !0
          },
          unlockPointer: () => {
            (0, Dh.c)()
          },
          leaveGame: () => {
            SY()
          },
          canvas: () => pb
        }), oU = (0, db.x)((() => {
          var bb;
          const ub = (0, rb.l)();
          null === (bb = (0, rb.t)()) || void 0 === bb || bb.followCursorAim(!0 === (null === ub || void 0 === ub ? void 0 : ub.isSessionLive) ? ub : null)
        })), IU && Db.setUiPrefs(IU);
        PU && Db.setEnvPrefs(PU);
        qU && Db.setLookPrefs(qU);
        const xb = SO ? aO(SO.preventMovement) : null;
        xb && KY(xb);
        const zb = (0, ph.i)(),
          gb = (0, ph.e)(Db, zb);
        ZU = zb.basis, (0, dh.g)(null === gb ? null : (0, Xh.m)(gb)), wU = gb;
        const ib = (0, Su.b)();
        let vb = 1 / 0,
          tb = !0,
          Jb = zb.shedFootprintBytes;
        const eb = new MB.d(ib, (() => jb.ro()), (bb => {
          Db.crash(uh.m, bb)
        }));
        aU = eb, HU = eb, null !== gb && eb.setCeiling(Math.min((0, MB.p)(gb), vb));
        if (tb) {
          eb.setShed((bb => {
            const ub = Db.shedMemory("joinReserve" !== bb);
            return null !== ub && (null === wU || ub < wU) && (wU = ub, (0, dh.g)((0, Xh.m)(ub))), ub
          }), ((bb, ub, hb) => {
            1 === ub ? (0, jh.reportMemoryShed)(bb, hb, QG) : console.warn(`${oG} wasm memory: shed again (${bb}): shed ${ub}`, hb.wasmMemoryShed)
          }), (() => Db.addDistanceInUse()));
          const bb = (0, bh.J)(Cb);
          eb.setFootprint(new gO(Jb, {
            storedChunks: () => jb.LBb(),
            gpuBytes: () => {
              var ub;
              return null !== (ub = null === bb || void 0 === bb ? void 0 : bb.YBb()) && void 0 !== ub ? ub : 0
            },
            jsHeapBytes: zO
          }))
        }
        window.addEventListener("pagehide", (() => {
          aU === eb && (eb.refreshStats(), xS(eb))
        })), window.addEventListener("pagehide", LS), window.addEventListener("pagehide", YS), !1;
        const [Nb, sb] = (0, Ah.e)();
        DL = (0, Kh.i)((bb => Db.setChunkAddDistance(bb.horizontal, bb.vertical)), {
          horizontal: Nb,
          vertical: sb
        }), Db.setAmbientOcclusion(!0 !== rh.j.getItem("disableAmbientOcclusion")), Db.setPoseLod(!0 !== rh.j.getItem(Gu.U)), (0, iO.o)("look") && (Db.setDebugLog(Iu.N.Look, !0), (0, tO.m)("wasm", (() => Db.takeDebugLog(Iu.N.Look))));
        (0, iO.o)("remesh") && (Db.setDebugLog(Iu.N.Remesh, !0), Mb = () => Db.takeDebugLog(Iu.N.Remesh), MO = new sO((0, JO.k)(), Mb));
        var Mb;
        const mb = function(bb, ub, hb, Bb) {
          const Ob = new hB,
            Gb = bb => rh.j.getItem(bb);
          Ob.sync(Gb, ub), (0, xu.Y)();
          const Ub = (0, Yb.l)("customBindingsChanged", (() => {
            Ob.sync(Gb, ub)
          }));
          (0, xh.s)(ub);
          const Lb = new Set,
            Sb = (0, db.x)((() => {
              var bb;
              Lb.size > 0 && UB() && !0 === (null === (bb = (0, rb.l)()) || void 0 === bb ? void 0 : bb.localPlayerAlive()) && Yb.i.vp("usedKeyboard")
            })),
            ab = Fh.b.heldSizer((() => (0, gu.l)(bb))),
            Hb = Vh(bb, ub, {
              prevents: bb => Ob.prevents(bb),
              keyPressed: bb => {
                Ob.moves(bb) && (Lb.add(bb), UB() && Yb.i.vp("usedKeyboard"))
              },
              keyReleased: bb => {
                Lb.delete(bb)
              },
              keysReleased: () => {
                Lb.clear()
              },
              resized: () => {
                OB.h.measure(bb.getBoundingClientRect()), (0, fh.k)()
              },
              sizeCanvas: ab,
              watchRenderScale: ub => {
                const hb = (0, gu.n)(bb, ub),
                  Bb = Fh.b.onRelease(ub);
                return () => {
                  hb(), Bb()
                }
              },
              touchStarting: () => {
                OB.h.measure(bb.getBoundingClientRect())
              },
              viewShown: hb,
              touchUiShown: () => Vb.d.get("isTouchScreen"),
              ctrlCombosAreGames: UB,
              inspect: (bb, ub, hb) => {
                Ob.checks(ub, hb) && Bb(bb)
              },
              canLock: () => Mh(bb)
            }),
            wb = (0, Uh.d)(ub);
          return () => {
            Ub(), Sb(), (0, xh.s)(null), wb(), Hb()
          }
        }(pb, ((bb, ub, hb, Bb, Ob) => {
          var Gb;
          zS(Db, (() => {
            Db.rings.input.writeRecord(bb, ub, hb, Bb, Ob)
          })), null === (Gb = pU) || void 0 === Gb || Gb.onInput(bb), !tU && (0, HB.f)(bb, Ob) && (0, HB.c)((() => {
            FG !== Db || qL || Db.isStopped || !oS() || SS(Db, !1, "budget", !1)
          }))
        }), (() => ML), (bb => {
          var ub;
          null === (ub = pU) || void 0 === ub || ub.onEvent(bb)
        }));
        if (Db.isStopped) return mb(), null;
        UU = mb;
        const Ib = () => !Db.isStopped && !IL;
        if (Db.isStopped) return null;
        (0, Uu.O)((() => {
          "call" === (0, Uu.n)() && Db.crash(uh.t, (0, Uu.l)())
        }));
        const Pb = (0, uh.I)(Db.rings.worker, (() => {
          SS(Db, !1, "budget")
        }));
        LU = function(bb, ub) {
          return gS().then((bb => {
            let {
              prefetchWorldgenWorker: ub
            } = bb;
            ub()
          }), (() => {})), new EO({
            module: (0, Uu.w)(),
            decodeSettings: bb => {
              const ub = (0, rb.t)();
              if (null === ub) throw new Error("no game code to decode the world-gen seed with");
              return ub.decodeMapSettings(bb)
            },
            loadWorker: iS,
            onMapWithoutWorldgen: () => {
              vS((bb => {
                let {
                  stopWorldgenWorkerPrefetch: ub
                } = bb;
                ub()
              }))
            },
            onLoadFailed: bb => {
              (0, jh.reportWorldgenLoadFailure)(bb, QG)
            },
            onWorkerLost: bb => {
              (0, jh.reportWorkerLost)(uh.z, bb, QG)
            },
            onStartTimeout: bb => {
              (0, jh.reportWorkerStartTimeout)(uh.z, bb, QG)
            },
            onGaveUp: bb => {
              (0, jh.reportWorldgenGaveUp)(bb, QG)
            },
            onMemoryStats: bb => {
              var ub;
              null === (ub = aU) || void 0 === ub || ub.noteWorldgen(bb)
            },
            onMemoryGone: () => {
              var bb;
              null === (bb = aU) || void 0 === bb || bb.worldgenGone()
            },
            write: (hb, Bb, Ob, Gb, Ub) => {
              zS(bb, (() => {
                bb.rings.worker.writeWorkerRecord(hb, Bb, Ob, 0, Gb, Ub) || bb.crash(uh.z, `a world-gen record of kind ${Bb} did not fit the worker-in ring`)
              })), ub()
            }
          })
        }(Db, Pb), SU = function(bb, ub) {
          return new NB({
            module: (0, Uu.w)(),
            loadWorkers: async () => {
              const [{
                createMeshWorker: bb
              }, ub] = await Promise.all([hb.e(40).then((() => hb(42752))), Promise.resolve().then((() => hb(86))).then((bb => {
                let {
                  isMobile: ub
                } = bb;
                return ub()
              }), (() => !1))]);
              return {
                create: bb,
                count: (0, du.e)(navigator.hardwareConcurrency, ub)
              }
            },
            write: (hb, Bb, Ob, Gb, Ub, Lb) => {
              (0, fh.i)(), zS(bb, (() => {
                bb.rings.worker.writeWorkerRecord(hb, Bb, Ob, Gb, Ub, Lb) || bb.crash(uh.o, `a meshing record of kind ${Bb} did not fit the worker-in ring`)
              })), ub()
            },
            onWorkerLost: bb => {
              (0, jh.reportWorkerLost)(uh.o, bb, QG)
            },
            onLightFault: (bb, ub) => {
              (0, jh.reportLightFault)(bb, ub, QG)
            },
            onStartTimeout: bb => {
              (0, jh.reportWorkerStartTimeout)(uh.o, bb, QG)
            },
            onMemoryStats: (bb, ub) => {
              var hb;
              null === (hb = aU) || void 0 === hb || hb.noteMeshWorker(bb, ub)
            },
            onMemoryGone: bb => {
              var ub;
              null === (ub = aU) || void 0 === ub || ub.meshWorkerGone(bb)
            },
            fail: (ub, hb) => {
              const Bb = () => {
                bb.crash(uh.o, void 0 === hb ? ub : new Error(ub, {
                  cause: hb
                }))
              };
              void 0 !== hb ? tS({
                site: uh.o,
                error: hb
              }, Bb) : Bb()
            }
          })
        }(Db, Pb);
        const qb = (0, QB.u)(Wu.clientSideServerUrls.staticUrl, {
            onTableFailed: bb => {
              tS({
                site: jh.MODEL_FEED_SITE,
                error: bb
              }, (() => {}), Ib)
            },
            packUrl: bb => {
              var ub, hb;
              return null !== (ub = null === (hb = VY()) || void 0 === hb ? void 0 : hb.modelUrl(bb)) && void 0 !== ub ? ub : null
            }
          }),
          Fb = function(bb, ub, hb) {
            const Bb = hb => {
              var Bb, Ob;
              return null !== (Bb = null === (Ob = ub()) || void 0 === Ob ? void 0 : Ob.drawnUrl(hb)) && void 0 !== Bb ? Bb : bb.url(hb)
            };
            return (0, TB.m)((0, IB.k)(Bb), hb)
          }(qb, (() => AU), VY),
          fb = new IB.c(Fb, (bb => {
            console.warn(`${oG} image ${bb.key.kind}:${bb.key.index}:${bb.key.word} failed`, bb.error)
          }));
        CU = fb, dU = new FB(Db, Fb, ((bb, ub) => {
          void 0 === ub ? console.warn(`${oG} ${bb}`) : fY(bb, ub)
        }));
        const kb = new kB.e(qb, function(bb, ub) {
          let Bb = !1,
            Ob = null,
            Gb = null;
          const Ub = {
              onUnavailable: (hb, Bb) => {
                Gb ??= tS({
                  site: jh.MODEL_POOL_SITE,
                  error: hb,
                  urls: Bb
                }, (() => {
                  (0, jh.reportModelPoolFailure)(hb, bb)
                }), ub)
              },
              onDecoderFailed: (hb, Bb) => {
                const Ob = () => {
                  (0, jh.reportDracoDecoderFailure)(hb, bb)
                };
                void 0 !== Bb ? tS({
                  site: jh.MODEL_POOL_SITE,
                  error: hb,
                  urls: Bb
                }, Ob, ub) : Ob()
              },
              onWorkerLost: ub => {
                (0, jh.reportWorkerLost)(jh.MODEL_POOL_SITE, ub, bb)
              },
              onModuleRetry: (ub, hb) => {
                (0, jh.reportModelsModuleRetry)(ub, hb, bb)
              }
            },
            Lb = hb.e(42).then((() => hb(42760))).then((bb => {
              let {
                pageModelPool: ub
              } = bb;
              if (Bb) return null;
              const hb = ub(Ub);
              return Ob = hb.unlisten, lU = hb.pool, hb.pool
            }), (bb => (Bb || Ub.onUnavailable(bb, void 0), null)));
          return KU = () => {
            var bb;
            Bb = !0, null === (bb = Ob) || void 0 === bb || bb(), lU = null
          }, (bb, ub) => Lb.then((hb => {
            var Bb;
            return null !== (Bb = null === hb || void 0 === hb ? void 0 : hb.build(bb, ub)) && void 0 !== Bb ? Bb : (0, RB.r)(bb, "the model workers did not load")
          })).then((bb => null !== Gb && (0, RB.k)(bb) ? Gb.then((() => bb)) : bb))
        }(nb, Ib), (bb => {
          bb.startup ? (WS(), tS({
            site: jh.MODEL_FEED_SITE,
            error: bb.error,
            urls: "" === bb.url ? void 0 : [bb.url]
          }, (() => {
            (0, jh.reportModelFailure)(bb, nb)
          }))) : (0, jh.reportModelFailure)(bb, nb)
        }), {
          onWritten: (bb, ub) => {
            fb.glbWritten(bb, ub)
          },
          onTaken: (bb, ub) => {
            fb.glbTaken(bb, ub)
          },
          onPackFileFailed: (bb, ub) => {
            console.warn(`${oG} the texture pack's model file ${bb} failed: the shipped one loads`, ub)
          }
        });
        AU = kb;
        const Tb = new EB.h(Db);
        TG = Tb, Tb.swap((bb => {
          const ub = () => {
            (0, jh.reportTerrainTextureFailure)(bb, nb)
          };
          if (xL) return void ub();
          const hb = () => !xL,
            Bb = null === bb.url ? void 0 : [bb.url];
          tS({
            site: uh.y,
            error: bb.error,
            urls: Bb
          }, ub, hb)
        })).then((bb => {
          null !== bb && (bb || Db.isStopped || console.warn(`${oG} the core refused the terrain textures: terrain draws untextured`), zU(Db))
        }));
        const cb = new Mu(Db, ((bb, ub) => {
          console.warn(`${oG} ${bb}`, ...void 0 === ub ? [] : [ub])
        }));
        cb.feed(), null !== Hb && function(bb, ub, Bb, Ob, Gb, Ub) {
          let Lb = null,
            Yb = null,
            Sb = !1;
          const ab = {
            textures: null,
            stop: () => {
              var bb, ub;
              Sb = !0, null === (bb = Yb) || void 0 === bb || bb(), null === (ub = Lb) || void 0 === ub || ub(), cB.e.setSettled(null), null !== RG && cL.clear(RG)
            }
          };
          kG = ab, Yb = kY().follow((Yb => {
            null !== Yb && Promise.all([hb.e(194), hb.e(45)]).then((() => hb(42723))).then((hb => {
              let {
                PackTextures: Hb
              } = hb;
              if (Sb || bb.isStopped) return;
              const wb = new Hb({
                feed: Yb,
                terrain: ub,
                backend: Bb,
                stopped: () => bb.isStopped,
                landed: () => {
                  zU(bb)
                },
                packSwapped: () => {
                  (0, TB.j)(Ob), Ub.feed((() => async function(bb) {
                    const ub = null === bb ? null : await bb.averageColours;
                    return null === ub ? mu() : su(ub)
                  }(wb.assets))), (0, fB.l)(wb.files()), Gb.refresh().then((bb => {
                    null !== bb && console.info(`${oG} texture pack models: ${bb.resent} of ${bb.delivered} files written again, ${bb.refetched} refetched`)
                  }))
                },
                settled: (bb, ub, hb) => {
                  var Bb;
                  (cB.e.setSettled({
                    state: bb,
                    files: ub
                  }), null === bb.gameSource && (0, oh.e)(bb.pack, hb), hb) || function(bb) {
                    const ub = RG;
                    null !== ub && cL.apply(ub, bb).then((ub => {
                      ub && bb && console.info(`${oG} the texture pack's animations are in (${Object.keys(bb).length} files)`)
                    }))
                  }(null === (Bb = bb.pack) || void 0 === Bb ? void 0 : Bb.animations)
                },
                settling: () => {
                  cB.e.setSettled(null)
                },
                warn: fY,
                maxTextureSize: () => Promise.resolve((0, bh._)(document.createElement("canvas")))
              });
              ab.textures = wb, Lb = wb.start()
            }), (bb => {
              console.warn(`${oG} the texture pack's terrain didn't load: the built atlas stays`, bb)
            }))
          }))
        }(Db, Tb, Hb, fb, kb, cb);
        const Qb = () => {
            Db.setTextureLayers("")
          },
          Rb = bb => {
            (Ku ??= hb.e(51).then((() => hb(42764))).then((bb => {
              let {
                TEXTURE_NAMES: ub
              } = bb;
              return ub
            }), (bb => {
              throw Ku = null, bb
            })), Ku).then((bb => {
              Db.setTextureLayers(bb) || Db.isStopped || (console.warn(`${oG} the core refused the texture names: textured Boxes draw textureNotFound`), Qb())
            }), (ub => {
              if (Db.isStopped) return;
              const [hb, ...Bb] = bb;
              void 0 === hb ? tS({
                site: jh.TEXTURE_NAMES_SITE,
                error: ub
              }, (() => {
                console.warn(`${oG} the texture names didn't load, so textured Boxes draw textureNotFound`, ub), Qb()
              }), Ib) : setTimeout((() => {
                Rb(Bb)
              }), hb)
            }))
          };
        if (Rb(NG), null !== Hb && !await async function(bb, ub, hb, Bb, Gb, Ub) {
            var Lb;
            const Yb = (0, bh.J)(hb);
            if (null === Yb) return bb.crash(lG, new Error(`this ${Bb} build has no openRenderer`)), !1;
            let Sb;
            XL = Yb;
            try {
              var ab, Hb, wb, Zb;
              const Ob = null !== (ab = null === (Hb = yG) || void 0 === Hb ? void 0 : Hb.pagePreviews()) && void 0 !== ab ? ab : null,
                Lb = null !== (wb = null === (Zb = yG) || void 0 === Zb ? void 0 : Zb.previewModule(hb)) && void 0 !== wb ? wb : null;
              if (null === Ob || null === Lb) {
                null === Ob || void 0 === Ob || Ob.endSession(!1), Sb = (0, gu.f)().sampleCount, await (0, bh.f)(ub, Yb, Ub, EY, Sb, await Gb);
                const bb = (0, bh.l)(hb);
                null === bb && console.warn(`${oG} this ${Bb} build has no image registry: sky and model images won't show`), (0, qB.d)(bb)
              } else {
                (0, UO.b)() && await (0, yb.j)();
                const hb = (0, UO.H)();
                if (null !== hb) {
                  const ub = (0, bh.X)(Yb);
                  return bb.crash(jh.RENDER_RELOAD_SITE, new Error(`${hb}${void 0===ub?"":` (${ub.message})`}`)), !1
                }
                Sb = await Ob.bindSession(Lb, ub, (async bb => (0, bh.y)(Yb, lG, Ub, bb, EY, await Gb)))
              }
            } catch (Ob) {
              return bb.crash(lG, Ob), !1
            }(function(bb, ub) {
              const hb = bb,
                {
                  requestCapture: Bb,
                  takeCapture: Ob
                } = hb;
              if ("function" !== typeof Bb || "function" !== typeof Ob) return;
              const Gb = {
                request() {
                  Bb.call(hb, ub)
                },
                take() {
                  var bb;
                  return null !== (bb = Ob.call(hb)) && void 0 !== bb ? bb : null
                }
              };
              window[ZO] = Gb
            })(ub, Sb), CL = Sb, wL = !0;
            const Xb = performance.now();
            return ZL.boundAtMs = null !== (Lb = (0, UO.J)()) && void 0 !== Lb ? Lb : Xb, ZL.indirectHangs = (0, UO.y)(), console.info(`${oG} ${Bb} renderer bound at ${Math.round(Xb)} ms`), !bb.isStopped
          }(Db, jb, Cb, Hb, Zb, pb)) return null;
        if (null !== Hb) {
          var bu, uu, hu;
          (0, au.C)(Hb);
          const bb = () => !Db.isStopped && pS();
          hb.e(186).then((() => hb(8972))).then((ub => {
            let {
              devTools: hb
            } = ub;
            Db.isStopped || hb.setHost(function(bb) {
              return {
                tools: GO,
                async downloadScene(ub, hb) {
                  let {
                    width: Bb,
                    height: Ob,
                    colouring: Gb
                  } = hb;
                  "screenshot" === ub && null === Gb ? await (0, hO.b)(bb, Bb, Ob) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
                },
                setAmbientLightIntensity: () => (console.warn("The Rust client's renderer has no ambient light setting"), Promise.resolve())
              }
            }(function(bb, ub) {
              return {
                canvas: bb,
                maxTextureSize: BO,
                drawing: ub,
                resize: (bb, ub) => {
                  (0, xh.y)(Iu.mb.Resize, 0, bb, ub, (0, xh.m)(1))
                },
                restoreSize: () => {
                  const ub = (0, gu.l)(bb);
                  null !== ub && (0, xh.y)(Iu.mb.Resize, 0, ub.cssWidth, ub.cssHeight, (0, xh.m)(ub.renderScale))
                },
                onFrameDrawn: bb => (OO.add(bb), () => {
                  OO.delete(bb)
                })
              }
            }(pb, bb)))
          }), (bb => {
            console.warn(`${oG} the developer tools didn't load: no captures this session`, bb)
          }));
          const ub = "webgpu" === Hb && null !== (bu = null === Sb || void 0 === Sb || null === (uu = Sb.adapter) || void 0 === uu ? void 0 : uu.vendor) && void 0 !== bu ? bu : null;
          dL = {
            backend: Hb,
            canvas: pb,
            fallbackReason: null !== (hu = null === Sb || void 0 === Sb ? void 0 : Sb.reason) && void 0 !== hu ? hu : null,
            adapterVendor: ub
          }, uS();
          try {
            (0, fh.t)(Hb, pb, ub)
          } catch (Ob) {
            (0, fh.v)(), console.error(`${oG} the quality steps didn't start`, Ob)
          }
        }
        const {
          storagePullBreaks: Bu,
          splitPassBreaks: Ou
        } = await Zb;
        Ou && console.warn(`${oG} split_pass_breaks on: Windows Adreno 7xx (N-103) or ?sceneDepth=off`);
        const wu = Bu ? Eb.d : (0, Eb.k)(Sb, (0, Du.g)());
        if ((0, iO.o)("webgpuloss")) {
          var Au, lu;
          const bb = {
            backend: Hb,
            reason: null !== (Au = null === Sb || void 0 === Sb ? void 0 : Sb.reason) && void 0 !== Au ? Au : null,
            source: null !== (lu = null === Sb || void 0 === Sb ? void 0 : Sb.source) && void 0 !== lu ? lu : null,
            storagePullBreaks: Bu,
            noWebGpu: wu.messageKey
          };
          (0, vO.c)((ub => {
            ub.noteWasmPick(bb)
          }))
        }
        const Cu = "webgpu" === Hb && !Bu;
        if (jU = (0, Eb.n)(Cu ? Db : null, Cu && null !== (Ub = null === (Lb = yG) || void 0 === Lb ? void 0 : Lb.pagePreviews().vZ) && void 0 !== Ub ? Ub : null, wu, fY), qL) return null;
        if (eb.reserveAtJoin((0, MB.m)(null !== gb && void 0 !== gb ? gb : Xh.g)), Db.isStopped) return null;
        const ru = bb => {
          if (null !== rL) try {
            rL.animationFrame(bb)
          } catch (Ob) {
            OS(Ob)
          }
          if (function(bb, ub) {
              return ub && !qL && !tU && oS() && pS() && bb.framePaces(performance.now())
            }(Db, ML)) {
            if (Db.writePendingInput(), (0, db.g)(bb, aS), hS(!1, bb), null !== rL) try {
              rL.framePaced()
            } catch (Ob) {
              OS(Ob)
            }
            requestAnimationFrame(ru)
          } else SS(Db, ML, "budget") && ((0, zu.k)(Db.lastFrameKind) && pS() && (0, db.g)(bb, aS), hS(ML && eL, bb), NL.frame(Db.lastFrameKind, ML && pS(), bb), dS(Db), eb.afterFrame(), requestAnimationFrame(ru))
        };
        requestAnimationFrame(ru);
        return function(bb) {
          if (bb.has("inputLog") && (0, BB.e)((bb => {
              let {
                action: ub,
                down: hb,
                press: Bb
              } = bb;
              console.info(`${GB} input ${ub} ${hb?"down":"up"} press ${Bb} at ${performance.now().toFixed(1)}`)
            })), bb.has("inputDump")) {
            const bb = [];
            LB = bb, Object.assign(window, {
              bloxdInputDump: () => bb.join("\n")
            })
          }
        }(new URLSearchParams(window.location.search)), XU = function(bb, ub) {
          let hb = null;
          const Bb = () => {
              null !== hb && (clearInterval(hb), hb = null)
            },
            Ob = () => {
              document.hidden ? hb ??= setInterval((() => {
                SS(bb, !1, "budget") ? (dS(bb), ub.afterFrame()) : Bb()
              }), eG) : Bb()
            };
          return document.addEventListener("visibilitychange", Ob), Ob(), () => {
            Bb(), document.removeEventListener("visibilitychange", Ob)
          }
        }(Db, eb), Db
      }(ub).then((bb => {
        var ub;
        (Bb(QG), hU(null !== bb), null !== bb && (lO = performance.now()), bU(bb), null === bb) ? null === (ub = yG) || void 0 === ub || ub.pagePreviews().endSession(null === (0, Uu.n)()): xU("booted")
      }), (bb => {
        Bb(QG), hU(!1), bU(null), CS({
          site: KG,
          error: bb,
          header: null
        }, QG)
      }))
    }

    function TL() {
      const bb = RG;
      null !== bb && EL().then((ub => {
        let {
          pageBuiltInAnimationPack: hb
        } = ub;
        hb().provide(bb)
      }), (bb => {
        console.warn(`${oG} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, bb)
      }))
    }
    const cL = new class {
      constructor(bb) {
        this.deps = bb, this.latest = 0, this.MS = null
      }
      apply(bb, ub) {
        return this.load(bb, ub, 0)
      }
      async load(bb, ub, hb) {
        var Bb;
        const Ob = ++this.latest,
          Gb = this.deps.compiler;
        if (void 0 === ub || null === ub || "object" !== typeof ub || 0 === Object.keys(ub).length || null === Gb) return this.drop(bb), !1;
        if ((null === (Bb = this.MS) || void 0 === Bb ? void 0 : Bb.module) === bb && (0, ku.Xd)(this.MS.files, ub)) return !1;
        try {
          const [hb, Bb] = await Promise.all([Gb(), this.deps.builtIns()]);
          if (Ob !== this.latest) return !1;
          const Ub = await hb(ub, Ru, {
            builtIns: Bb
          });
          if (Ob !== this.latest) return !1;
          const Lb = this.call(bb, Ub);
          if (void 0 === Lb) throw new Qu("the compiled animations didn't read against the built-in pack");
          return this.MS = {
              module: bb,
              files: ub
            },
            function(bb) {
              for (let ub = 0; ub + 2 < bb.length; ub += 3) {
                ("error" === bb[ub] ? console.error : console.warn)(`Animation for the texture pack: ${bb[ub+1]}: ${bb[ub+2]}`)
              }
            }(Lb), !0
        } catch (Lb) {
          var Ub;
          if (Ob !== this.latest) return !1;
          this.drop(bb), 0 === hb && this.deps.warn("the texture pack's animations didn't load: lifeforms play the built-in ones", Lb);
          const Bb = (null !== (Ub = this.deps.retryAfterMs) && void 0 !== Ub ? Ub : cu)[hb];
          return void 0 === Bb || Lb instanceof Qu || (0, Tu.i)(bb) || setTimeout((() => {
            Ob === this.latest && this.load(bb, ub, hb + 1)
          }), Bb), !1
        }
      }
      call(bb, ub) {
        try {
          return bb.OBb(ub)
        } catch (hb) {
          throw (0, Tu.k)(bb, hb), hb
        }
      }
      clear(bb) {
        this.latest++, this.drop(bb)
      }
      drop(bb) {
        const ub = this.MS;
        if (this.MS = null, (null === ub || void 0 === ub ? void 0 : ub.module) === bb && !(0, Tu.i)(bb)) try {
          this.call(bb, null)
        } catch {}
      }
    }({
      compiler: yu.b,
      builtIns: async () => {
        const {
          pageBuiltInAnimationPack: bb
        } = await EL();
        return bb().whenSet()
      },
      warn: fY
    });
    async function QL(bb, ub) {
      let Bb = !1;
      await RL({
        matchmake: async () => {
          const {
            guestJoinTarget: Ob,
            guestJoinWithPack: Gb
          } = await hb.e(343).then((() => hb(42702)));
          return Bb ? Ob(bb, ub, cY()) : (Bb = !0, Gb(bb, ub, (ub => QY(bb, ub)), cY))
        },
        onFailure: bb => {
          (0, jh.showJoinFailure)(bb, QG)
        },
        rejoin: XY,
        invalidateTrafficCode: pY
      })
    }
    async function RL(bb) {
      let {
        matchmake: ub,
        onFailure: hb,
        rejoin: Ob,
        invalidateTrafficCode: Gb,
        pageReady: Ub,
        signal: Lb
      } = bb;
      const Yb = () => !0 === (null === Lb || void 0 === Lb ? void 0 : Lb.aborted);
      let Sb;
      const ab = cB.e.rejoinHold();
      FU = null;
      const Hb = (0, Wh.L)("wasm", DS);
      let wb = !1,
        Zb = performance.now();
      try {
        if (!await BU) return {
          kind: "stopped"
        };
        if (Yb()) return {
          kind: "Lu"
        };
        yL().catch((() => {}));
        let bb = await ub();
        var pb, ob;
        if (Zb = performance.now(), !Yb()) nS(null !== (pb = null === (ob = bb.target.session) || void 0 === ob ? void 0 : ob.gameNameWithVariation) && void 0 !== pb ? pb : null);
        const hb = () => performance.now() - bb.matchedAt <= bb.freshMs,
          Bb = uY(bb.target).catch((() => {}));
        hb() && !Yb() && (Sb = new vB(bb.target, {
          signal: Lb
        }));
        const Gb = performance.now();
        if (null === await uU) return {
          kind: "stopped"
        };
        var Ab, lb;
        if (function(bb) {
            var ub, hb;
            if (XO.b.markGameEngineConstructed(), KO) return;
            KO = !0;
            const Bb = Math.max(bb, null !== (ub = oO) && void 0 !== ub ? ub : bb);
            (0, pO.k)("ready", Math.max(0, (null !== (hb = AO) && void 0 !== hb ? hb : Bb) - Bb) / 1e3)
          }(Gb), !Yb())
          if (null !== AO && null !== lO ? ((0, Xb.o)("wasm_loaded", AO), (0, Xb.o)("wasm_core_ready", lO)) : console.warn("[bloxd-wasm-client] a join found the core before boot marked its steps"), bb.target.session && function(bb) {
              const ub = (0, ku.Xb)(bb);
              return "classic" !== ub ? IO.has(ub) : !(0, Bu.i)(bb) && !PO.has((0, ku.Tb)(bb))
            }(bb.target.session.gameNameWithVariation)) null === (Ab = LU) || void 0 === Ab || Ab.prestart();
        if (await Bb, !hb() && !Yb()) null === (lb = Sb) || void 0 === lb || lb.rematched(), bb = await ub(), Zb = performance.now();
        if (Yb()) return {
          kind: "Lu"
        };
        const ab = await async function(bb) {
          var ub, hb, Bb;
          let {
            signal: Ob,
            rejoin: Gb = null,
            early: Ub,
            pageReady: Lb
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null !== Ob && void 0 !== Ob && Ob.aborted) throw new DOMException("the join was left", "AbortError");
          const Yb = (Sb = hL, ab = performance.now(), null !== Sb && ab - Sb < lB);
          var Sb, ab;
          hL = null;
          const Hb = new AbortController,
            wb = null !== (ub = null === (hb = bb.session) || void 0 === hb ? void 0 : hb.gameNameWithVariation) && void 0 !== ub ? ub : null;
          nS(wb), OY({
            controller: Hb,
            game: wb
          }), BL = null, null === (Bb = UL) || void 0 === Bb || Bb.abort(), UL = null, YL = !1, SL = null, aL.clear();
          const Zb = () => {
            (0, Cu.j)(Hb, (0, Cu.f)(Ob))
          };
          null === Ob || void 0 === Ob || Ob.addEventListener("abort", Zb, {
            once: !0
          });
          try {
            var pb, ob, Ab;
            const ub = await uU;
            if (null === ub || ub.isStopped || qL) throw new Error("no core is running to join a game with");
            if (bb.session && null !== jU) {
              const ub = await hY(jU.join(bb.session.gameNameWithVariation), Hb.signal);
              if ((0, iO.o)("webgpuloss")) {
                const hb = bb.session.gameNameWithVariation,
                  Bb = jU.couldntRunInJoinedGame();
                (0, vO.c)((bb => bb.noteWasmJoin(hb, ub, Bb)))
              }
              if (null !== ub) throw new Eb.h(ub)
            }
            const [, , , {
              joinRoom: hb
            }] = await hY(Promise.all([(0, rb.n)(ub), uY(bb), null === Lb || void 0 === Lb ? void 0 : Lb(), yL()]), Hb.signal), Bb = bb.session, Ob = Bb ? {
              ...lY,
              attachSocket: ub => {
                const hb = nY(ub, bb.endpoint);
                var Ob;
                null !== hb && (kU = {
                  conn: hb,
                  info: Bb
                }, null === (Ob = TU) || void 0 === Ob || Ob(Bb.playerDbId));
                return hb
              }
            } : lY, Sb = await hb(Ob, bb, {
              signal: Hb.signal,
              early: Ub
            }).catch((bb => {
              throw function(bb) {
                if (!(bb instanceof Jb.e)) return bb;
                if ("roomError" === bb.stage && null !== SL) return bY(new Jb.e(bb.message, bb.stage, bb.code, SL), bb);
                const ub = "closed" === bb.stage && null !== OL ? aL.get(OL.conn) : void 0;
                return void 0 === ub ? bb : bY(new Jb.e(bb.message, bb.stage, ub.code), bb)
              }(bb)
            }));
            if (VU !== Hb) throw Sb.leave(), new DOMException("the join was left", "AbortError");
            UY(Sb), null === (pb = SU) || void 0 === pb || pb.newGame();
            const ab = function(bb) {
              var ub, hb;
              const {
                session: Bb
              } = bb, Ob = void 0 === Bb ? bb.joinOptions.lobbyName : Bb.lobbyName;
              return {
                endpoint: bb.endpoint,
                game: null !== (ub = null === Bb || void 0 === Bb ? void 0 : Bb.gameNameWithVariation) && void 0 !== ub ? ub : bb.roomName,
                lobby: String(null !== Ob && void 0 !== Ob ? Ob : null),
                postCookies: null !== (hb = bb.postCookies) && void 0 !== hb ? hb : null
              }
            }(bb);
            yU.set(Sb, ab), xB(ab);
            const wb = performance.now(),
              Zb = {
                conn: Sb.conn,
                rejoin: Gb,
                game: null !== (ob = null === (Ab = bb.session) || void 0 === Ab ? void 0 : Ab.gameNameWithVariation) && void 0 !== ob ? ob : "",
                joinedAt: wb,
                rejoinedAt: Yb ? wb : null,
                overflow: null
              };
            cU = Zb,
              function(bb, ub) {
                JY();
                const hb = {
                  endpoint: ub,
                  roomId: bb.seat.room.roomId,
                  heldConn: 0,
                  dropCode: 0,
                  pendingHold: null,
                  resume: new Hh({
                    reconnect: (bb, ub, Bb) => async function(bb, ub, hb, Bb) {
                      const {
                        roomId: Ob,
                        roomToken: Gb
                      } = NY(bb, ub), Ub = FG;
                      if (null === Ub || Ub.isStopped || qL) throw new Error("no core is running to resume the game on");
                      const {
                        resumeRoom: Lb
                      } = await hY(yL(), hb), Yb = {
                        ...lY,
                        attachSocket: ub => QU !== bb || 0 === bb.heldConn ? (ub.close(), null) : nY(ub, bb.endpoint, !0)
                      };
                      return Lb(Yb, bb.endpoint, Ob, Gb, {
                        signal: hb,
                        onAttached: Bb
                      })
                    }(hb, bb, ub, Bb),
                    releaseSeat: bb => {
                      !async function(bb, ub) {
                        const {
                          roomId: hb,
                          roomToken: Bb
                        } = NY(bb, ub);
                        try {
                          const {
                            leaveHeldSeat: ub
                          } = await yL();
                          await ub(bb.endpoint, hb, Bb)
                        } catch (Ob) {
                          console.warn(`${oG} the held seat of a game left while it reconnected couldn't be released`, Ob)
                        }
                      }(hb, bb)
                    },
                    isLive: () => QU === hb && null !== cU && !qL,
                    OJ: bb => {
                      uL = bb, tY()
                    },
                    onReconnected: bb => {
                      ! function(bb) {
                        const ub = EU;
                        if (null !== ub && ub !== bb) {
                          const hb = yU.get(ub);
                          void 0 !== hb && yU.set(bb, hb), JL === ub && (JL = bb), ub.detach()
                        }
                        UY(bb)
                      }(bb)
                    },
                    onGaveUp: (bb, ub) => {
                      ! function(bb, ub, hb) {
                        var Bb, Ob;
                        console.warn(`${oG} gave up reconnecting (${hb.reason}, ${hb.attempts} attempts)`, hb.lastError), (0, jh.reportReconnectGaveUp)(hb, QG);
                        const Gb = null !== (Bb = null === (Ob = cU) || void 0 === Ob ? void 0 : Ob.rejoin) && void 0 !== Bb ? Bb : null;
                        eY(bb, "gaveUp"), YY();
                        const Ub = {
                          code: bb.dropCode,
                          name: null,
                          reason: iG,
                          canReconnect: !ub,
                          automaticallyReconnect: !1,
                          requiresRefresh: !1
                        };
                        AY(Ub, ub ? null : Gb, !1, {
                          reasonKey: vG,
                          canPlayAgain: ub
                        })
                      }(hb, bb, ub)
                    }
                  })
                };
                QU = hb, null !== RU && RU.conn === bb.conn && hb.resume.onInitialInfo(RU)
              }(Sb, bb.endpoint), performance.mark(dG), (0, Xb.o)("wasm_joined", wb), setTimeout((() => {
                EU === Sb && (0, Xb.g)()
              }), 0), TL(), console.info(`${oG} joined ${bb.roomName} as ${Sb.seat.sessionId} at ${Math.round(performance.now())} ms`);
            const lb = BL;
            BL = null, null !== lb && HY(Zb, lb.mask, lb.frames);
            const Kb = aL.get(Sb.conn);
            return aL.clear(), void 0 !== Kb && (UY(null), oY(Sb.conn, Kb.code, Kb.reason)), Sb
          } finally {
            var lb;
            null === Ob || void 0 === Ob || Ob.removeEventListener("abort", Zb), VU === Hb && GY(EU, null), (null === (lb = OL) || void 0 === lb ? void 0 : lb.join) === Hb && (OL = null)
          }
        }(bb.target, {
          signal: Lb,
          rejoin: Ob(bb.target),
          early: Sb,
          pageReady: Ub
        });
        return wb = !0, {
          kind: "joined",
          game: ab
        }
      } catch (Wb) {
        if (Wb instanceof DOMException && "AbortError" === Wb.name || Yb()) return {
          kind: "Lu"
        };
        if (qL) return {
          kind: "stopped"
        };
        if (YL && (YL = !1, await Gb().catch((bb => {
            console.warn(`${oG} the cached traffic code could not be dropped`, bb)
          }))), null === await uU) return {
          kind: "stopped"
        };
        if (Wb instanceof Eb.h) return hb(Wb, performance.now() - Zb), {
          kind: "failed",
          error: Wb,
          reloading: !1
        };
        if (Wb instanceof Jb.e && Wb.code === Bb.d.wasmClientNotAllowed.code && sL) return qY("this server refused the wasm client to this account", "refused"), {
          kind: "failed",
          error: Wb,
          reloading: !0
        };
        const bb = Wb instanceof Jb.e && Wb.code === Bb.d.outdatedVersion.code,
          ub = () => null === EU,
          Ob = await tS({
            site: jh.JOIN_SITE,
            error: Wb,
            outdated: bb
          }, (() => {
            hb(Wb, performance.now() - Zb)
          }), ub);
        return {
          kind: "failed",
          error: Wb,
          reloading: Ob
        }
      } finally {
        var Kb;
        wb || Hb.end(), cB.e.releaseHold(ab);
        const bb = null === (Kb = Sb) || void 0 === Kb ? void 0 : Kb.release();
        bb && (0, jh.reportUnusedSeat)(bb, QG)
      }
    }

    function bY(bb, ub) {
      return bb.stack = ub.stack, bb
    }

    function uY(bb) {
      return bb.session ? (0, rb.s)(cG, bb.session.gameNameWithVariation) : Promise.resolve()
    }

    function hY(bb, ub) {
      return (0, Cu.r)(ub), new Promise(((hb, Bb) => {
        const Ob = () => {
          Bb((0, Cu.f)(ub))
        };
        ub.addEventListener("abort", Ob, {
          once: !0
        }), bb.then((bb => {
          ub.removeEventListener("abort", Ob), hb(bb)
        }), (bb => {
          ub.removeEventListener("abort", Ob), Bb(bb)
        }))
      }))
    }

    function BY() {
      OY(null)
    }

    function OY(bb) {
      var ub, hb, Bb;
      (function() {
        const bb = QU;
        null !== bb && eY(bb, "left")
      }(), null === GU || GU.left) || (GU.left = !0, null === (Bb = (0, rb.l)()) || void 0 === Bb || Bb.socketLeft(), (0, wb.l)({
        websocketUrl: null
      }));
      VU && (0, Cu.j)(VU, new DOMException("the join was left", "AbortError")), YY(null !== bb), null === (ub = jU) || void 0 === ub || ub.leave();
      const Ob = EU;
      null !== bb && cB.e.setGame(bb.game), GY(null, null !== (hb = null === bb || void 0 === bb ? void 0 : bb.controller) && void 0 !== hb ? hb : null), null === Ob || void 0 === Ob || Ob.leave(), LY(0), (0, Au.g)()
    }

    function GY(bb, ub) {
      EU = bb, VU = ub, null === EU && null === VU && cB.e.setGame(void 0)
    }

    function UY(bb) {
      GY(bb, VU)
    }

    function LY(bb) {
      const ub = FG;
      return null !== MG && !qL && null !== ub && !ub.isStopped && (!!MG(Jb.j, 0, (0, Jb.B)(bb)) && (NU = !0, 0 === bb || tU || SS(ub, !1, "all"), !0))
    }

    function YY() {
      var bb, ub;
      arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (0, Wh.f)();
      const hb = null !== (bb = null === (ub = cU) || void 0 === ub ? void 0 : ub.overflow) && void 0 !== bb ? bb : null;
      cU = null, null !== hb && (0, jh.reportEventOverflow)(hb, QG)
    }

    function SY() {
      null !== EU || null !== VU ? BY() : DY()
    }

    function aY(bb, ub) {
      console.warn(`${oG} the event buffer refused records in ${ub} frames (categories ${bb})`), qL || (null !== cU ? HY(cU, bb, ub) : null !== VU && function(bb, ub, hb) {
        var Bb;
        const Ob = function(bb, ub) {
          return null === bb ? "drop" : bb.activated ? "keep" : 0 !== (ub & Pu.p.NetSession) ? "fail" : "drop"
        }((null === (Bb = OL) || void 0 === Bb ? void 0 : Bb.join) === bb ? OL : null, ub);
        "keep" === Ob ? BL = {
          mask: ub,
          frames: hb
        } : "fail" === Ob && (0, Cu.j)(bb, new Error("the join's net session was lost to an event overflow"))
      }(VU, bb, ub))
    }

    function HY(bb, ub, hb) {
      const Bb = bb.overflow ??= {
        frames: 0,
        acks: 0,
        mask: 0,
        outcome: null
      };
      Bb.frames += hb, Bb.acks++, Bb.mask |= ub;
      const Ob = function(bb, ub, hb) {
        if (0 === (bb & Pu.p.NetSession)) return "none";
        const Bb = null !== ub.rejoinedAt && hb - ub.rejoinedAt < KB;
        return null === ub.rejoin || Bb ? "fail" : "rejoin"
      }(ub, bb, performance.now());
      "none" !== Ob && queueMicrotask((() => {
        if (cU !== bb) return;
        const ub = "rejoin" === Ob && performance.now() - GL >= tb.h;
        Bb.outcome = ub ? "rejoined" : "failed", AY(function(bb, ub) {
          return {
            code: 0,
            name: "eventOverflow",
            reason: "Your game fell behind the server.",
            canReconnect: bb,
            automaticallyReconnect: ub,
            requiresRefresh: !1
          }
        }(null !== bb.rejoin, ub), bb.rejoin, ub), BY(), ub && (hL = performance.now())
      }))
    }

    function wY(bb) {
      ML = bb, mL && ZY(mL, bb)
    }

    function ZY(bb, ub) {
      bb.style.visibility = ub ? "visible" : "hidden"
    }

    function XY(bb) {
      var ub;
      const hb = bb.roomName,
        Bb = null !== (ub = bb.joinOptions.lobbyName) && void 0 !== ub ? ub : null;
      return () => {
        QL(hb, Bb)
      }
    }

    function pY() {
      return hb.e(343).then((() => hb(42702))).then((bb => {
        let {
          invalidateGuestTrafficCode: ub
        } = bb;
        return ub()
      })).catch((bb => {
        console.warn(`${oG} the cached traffic code could not be dropped`, bb)
      }))
    }

    function oY(bb, ub, hb) {
      var Ob, Gb;
      let Ub = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (qL) return;
      if ((null === (Ob = cU) || void 0 === Ob ? void 0 : Ob.conn) !== bb) return void(null !== VU && aL.set(bb, {
        code: ub,
        reason: hb
      }));
      const {
        rejoin: Lb,
        game: Yb,
        joinedAt: Sb
      } = cU;
      YY(), JY();
      const ab = (0, tb.m)(ub, (0, CB.d)(bb));
      if (console.info(`${oG} the game's connection closed with code ${ub} (${null!==(Gb=ab.name)&&void 0!==Gb?Gb:"unrecognised"})`), ub === Bb.d.gameOrPluginKick.code || Ub || (0, jh.reportDisconnect)(ab, QG, {
          closeReason: hb,
          sinceJoinedMs: performance.now() - Sb,
          game: Yb
        }), ab.requiresRefresh) {
        const bb = "outdatedVersion" === ab.name,
          hb = new Error(`the game's connection closed with code ${ub}`),
          Bb = () => null === cU && null === VU;
        return void tS({
          site: jh.JOIN_SITE,
          error: hb,
          outdated: bb
        }, (() => {
          Bb() && AY(ab, null, !1)
        }), Bb)
      }
      const Hb = ab.canReconnect ? Lb : null,
        wb = null !== Hb && ab.automaticallyReconnect && performance.now() - GL >= tb.h;
      AY(ab, Hb, wb)
    }

    function AY(bb, ub, hb) {
      var Bb;
      let Ob = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        reasonKey: null,
        canPlayAgain: !1
      };
      if (IL) return;
      cB.e.unwantedLeave(hb && null !== ub && 0 === LL.size), null === (Bb = UL) || void 0 === Bb || Bb.abort();
      const Gb = new AbortController;
      UL = Gb;
      const Ub = null === ub ? null : () => {
        Gb.signal.aborted || (Gb.abort(), ub())
      };
      if (hb && null !== Ub) {
        GL = performance.now();
        const bb = setTimeout(Ub, tb.d);
        Gb.signal.addEventListener("abort", (() => {
          clearTimeout(bb)
        }))
      }
      const Lb = {
        code: bb.code,
        name: bb.name,
        reason: bb.reason,
        reasonKey: Ob.reasonKey,
        reconnect: Ub,
        reconnecting: hb,
        requiresRefresh: bb.requiresRefresh,
        canPlayAgain: Ob.canPlayAgain
      };
      if (LL.size > 0)
        for (const Sb of [...LL]) try {
          Sb(Lb)
        } catch (Yb) {
          console.error(`${oG} an unwanted-leave listener threw`, Yb)
        } else oB((0, ZB.i)(bb, null !== Ub, hb), Gb.signal).then((ub => {
          ub && (null !== Ub ? Ub() : bb.requiresRefresh && (0, yb.i)())
        }))
    }
    const lY = {
      attachSocket: bb => nY(bb),
      onConnection: bb => (HL.add(bb), () => {
        HL.delete(bb)
      }),
      sendRaw: (bb, ub) => {
        const hb = GU;
        return null !== hb && hb.conn === bb && KS(hb, ub)
      },
      leaveRoom: LY,
      closeSocket: bb => {
        var ub;
        (null === (ub = GU) || void 0 === ub ? void 0 : ub.conn) === bb && DY()
      },
      flushNet: xY
    };

    function KY(bb) {
      var ub;
      let {
        aux: hb,
        payload: Bb
      } = bb;
      null === (ub = FG) || void 0 === ub || ub.queueOptions(hb, Bb)
    }

    function WY(bb, ub) {
      KY(function(bb, ub) {
        return SO = bb ? {
          preventMovement: ub
        } : null, bb ? aO(ub) : {
          aux: Iu.Qb.AdEnd,
          payload: YO
        }
      }(bb, ub))
    }

    function CY(bb) {
      var ub;
      IU = bb, null === (ub = FG) || void 0 === ub || ub.setUiPrefs(bb)
    }

    function dY(bb, ub) {
      cG.setMaster(bb, ub)
    }

    function rY(bb) {
      var ub;
      PU = bb, null === (ub = FG) || void 0 === ub || ub.setEnvPrefs(bb)
    }

    function jY(bb) {
      var ub;
      qU = bb, null === (ub = FG) || void 0 === ub || ub.setLookPrefs(bb)
    }

    function nY(bb) {
      var ub;
      let hb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new URL(bb.url).origin,
        Bb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (bb.readyState === WebSocket.CLOSING || bb.readyState === WebSocket.CLOSED) return console.warn(`${oG} a closing or closed socket can't be attached`), null;
      const Ob = FG;
      if (!Ob || Ob.isStopped) return console.warn(`${oG} no core is running to attach a socket to`), bb.close(), null;
      if (null === (0, rb.l)()) return console.warn(`${oG} the game has not started to attach a socket to`), bb.close(), null;
      if (gU > Iu.w) return console.warn(`${oG} this core has attached all the sockets it can; reload to play on`), bb.close(), null;
      if (NU && !tU && (SS(Ob, !1, "all"), Ob.isStopped || qL)) return bb.close(), null;
      DY();
      const Gb = gU++;
      if (!mY(Ob, "open", Gb, Bb ? Iu.Pb.Resume : 0)) return bb.close(), null;
      Bb || ou.b.reset(), OL = null === VU ? null : {
        join: VU,
        conn: Gb,
        activated: !1
      }, bb.binaryType = "arraybuffer";
      const Ub = new wh.d((() => {
          ! function(bb, ub) {
            if (GU !== ub || bb.isStopped || null === iY(ub, zG)) return;
            ub.detach(), GU = null, gY(bb, ub, zG, "", !0), ub.ws.close()
          }(Ob, Lb)
        })),
        Lb = {
          ws: bb,
          conn: Gb,
          pending: [],
          pendingBytes: 0,
          left: !1,
          resume: Bb,
          token: null,
          detach: () => {
            Ub.dispose(), bb.removeEventListener("message", Yb), bb.removeEventListener("open", Sb), bb.removeEventListener("close", ab)
          }
        },
        Yb = bb => {
          if (bb.data instanceof ArrayBuffer) {
            var ub;
            const hb = new Uint8Array(bb.data);
            Ub.heard(), Lb.token = null !== (ub = (0, Zh.b)(hb)) && void 0 !== ub ? ub : Lb.token,
              function(bb, ub, hb) {
                zS(bb, (() => {
                  bb.rings.net.writeFrame(ub, hb) || bb.crash(uh.s, `a socket frame of ${hb.byteLength} bytes did not fit the net-in ring`)
                }));
                const Bb = bb.rings.net.cursor >= DG;
                (Bb || bb.netWrittenSinceFrame >= nG || document.hidden && performance.now() - iU >= eG) && SS(bb, !1, "budget")
              }(Ob, Gb, hb)
          }
        },
        Sb = () => {
          Bb || (0, Xb.o)("wasm_socket_open", performance.now());
          for (const ub of Lb.pending.splice(0)) bb.send(ub);
          Lb.pendingBytes = 0
        },
        ab = bb => {
          if (GU === Lb && Ob.rings.net.cursor > 0 && SS(Ob, !1, "all"), GU === Lb) {
            if (Lb.detach(), GU = null, gY(Ob, Lb, bb.code, bb.reason) || zY(Ob, Lb)) return;
            mY(Ob, "close", Gb), vY(Gb, Lb.left), oY(Gb, bb.code, bb.reason)
          }
        };
      return bb.addEventListener("message", Yb), bb.addEventListener("open", Sb), bb.addEventListener("close", ab), GU = Lb, null === (ub = (0, rb.l)()) || void 0 === ub || ub.socketAttached(Gb), (0, wb.l)({
        websocketUrl: hb
      }), Gb
    }

    function DY() {
      const bb = GU;
      if (!bb) return;
      const ub = FG,
        hb = bb.resume;
      hb && (xY(), GU !== bb) || (GU = null, bb.detach(), bb.ws.close(), null !== ub && (zY(ub, bb) || hb && gY(ub, bb, gG)) || (null !== ub && mY(ub, "close", bb.conn), vY(bb.conn, bb.left)))
    }

    function xY() {
      const bb = FG;
      null !== bb && !bb.isStopped && !qL && !tU && bb.rings.net.cursor > 0 && SS(bb, !1, "all")
    }

    function zY(bb, ub) {
      var hb;
      if (!ub.resume) return !1;
      const Bb = QU;
      return null !== Bb && null !== ub.token && "" !== ub.token && (Bb.pendingHold = {
        conn: ub.conn,
        token: `${Bb.roomId}:${ub.token}`
      }), mY(bb, "close", ub.conn), null === (hb = (0, rb.l)()) || void 0 === hb || hb.socketDetached(ub.conn), !0
    }

    function gY(bb, ub, hb) {
      let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
        Ob = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      const Gb = iY(ub, hb);
      if (null === Gb) return !1;
      const {
        MS: Ub,
        token: Lb,
        game: Yb,
        joinedAt: Sb
      } = Gb;
      if (!mY(bb, "close", ub.conn, Iu.D.Held)) return !0;
      console.warn(`${oG} the game's connection ${Ob?"went silent":`dropped with code ${hb}`}, holding it`);
      const ab = {
        closeReason: Bb,
        sinceJoinedMs: performance.now() - Sb,
        game: Yb
      };
      return (0, jh.reportDisconnect)((0, tb.m)(hb), QG, ab, Ob ? "silent" : void 0), Ub.heldConn = ub.conn, Ub.dropCode = hb, Ub.pendingHold = {
        conn: ub.conn,
        token: `${Ub.roomId}:${Lb}`
      }, tU || SS(bb, !1, "all"), !0
    }

    function iY(bb, ub) {
      const hb = QU,
        Ob = cU,
        Gb = bb.token;
      return null === hb || null === Ob || qL || bb.left || Ob.conn !== bb.conn || null === Gb || "" === Gb ? null : (0, Bb.h)(ub) && hb.resume.canHoldSeat() ? {
        MS: hb,
        token: Gb,
        game: Ob.game,
        joinedAt: Ob.joinedAt
      } : null
    }

    function vY(bb, ub) {
      var hb;
      null === (hb = (0, rb.l)()) || void 0 === hb || hb.closeGame(bb), (0, LO.e)().close(bb), ub || (0, wb.l)({
        websocketUrl: null
      })
    }

    function tY() {
      const bb = uL;
      if (null === bb) return;
      const ub = (0, rb.l)();
      qL || null === ub || ub.OJ(bb) ? uL = null : performance.now() - sU.pause >= JG && (sU.pause = performance.now(), console.warn(`${oG} the cmd ring had no room for SetPaused(${bb}): written before the next frame`))
    }

    function JY() {
      const bb = QU;
      QU = null, null === bb || void 0 === bb || bb.resume.dispose()
    }

    function eY(bb, ub) {
      var hb, Bb;
      const {
        heldConn: Ob
      } = bb, Gb = bb.resume.resumingConn;
      bb.heldConn = 0, bb.pendingHold = null, QU === bb && (QU = null), "left" === ub ? bb.resume.leave() : bb.resume.dispose(), 0 === bL || (null === (hb = GU) || void 0 === hb ? void 0 : hb.conn) !== bL || "left" === ub && (null === (Bb = EU) || void 0 === Bb ? void 0 : Bb.conn) === bL || MY(bL), "gaveUp" === ub && 0 !== Gb && MY(Gb), 0 !== Ob && "refused" !== ub && (console.info(`${oG} the game held through its drop ${"left"===ub?"was left":"is given up"}`), null === FG || FG.isStopped || mY(FG, "close", Ob), vY(Ob, !1))
    }

    function NY(bb, ub) {
      const hb = ub.indexOf(":");
      return {
        roomId: hb < 0 ? bb.roomId : ub.slice(0, hb),
        roomToken: ub.slice(hb + 1)
      }
    }

    function sY(bb) {
      var ub;
      RU = bb, bb.conn === bL && (bL = 0);
      const hb = QU;
      null !== hb && (null === (ub = cU) || void 0 === ub ? void 0 : ub.conn) === bb.conn && hb.resume.onInitialInfo(bb)
    }

    function MY(bb) {
      var ub;
      const hb = GU;
      (null === hb || void 0 === hb ? void 0 : hb.conn) === bb && (hb.left = !0, null === (ub = (0, rb.l)()) || void 0 === ub || ub.socketLeft(), (0, wb.l)({
        websocketUrl: null
      }), LY(bb) ? setTimeout((() => {
        GU === hb && DY()
      }), Jb.h) : DY())
    }

    function mY(bb, ub, hb) {
      let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Ob = !1;
      return zS(bb, (() => {
        const {
          net: Gb
        } = bb.rings;
        Ob = "open" === ub ? Gb.writeOpen(hb, Bb) : Gb.writeClose(hb, Bb), Ob || bb.crash(uh.s, `a socket ${ub} did not fit the net-in ring`)
      })), Ob
    }

    function IY(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if (PY()) {
        const Bb = "browser" === bb && (0, UO.P)() ? "blockedAfterLoss" : "unsupported";
        return (0, jh.reportUnsupportedFallback)(bb, Bb, ub, hb), void qY(`the wasm client can't run here (${ub}; ${Bb})`, Bb)
      }(0, jh.showUnsupported)(bb, "unsupported", ub, hb)
    }

    function PY() {
      return sL && "wasm" !== (0, Zu.d)(window.location.search)
    }

    function qY(bb, ub) {
      console.warn(`${oG} ${bb}: reloading on the JS client`), null !== ub && (0, Zu.n)(ub), (0, Zu.j)(null === ub ? "reloadOntoJs" : "decline");
      const hb = () => {
        (0, yb.h)(Zu.p)
      };
      (0, jh.flushCrashReports)(yb.d).then(hb, hb)
    }

    function EY(bb, ub, hb, Bb) {
      return pL(bb, ub, hb, Bb)
    }

    function yY() {
      null === lL || null === FG || FG.isStopped || qL || null !== WU || null === MG || (WU = lL(MG, fY, kY().follow))
    }

    function VY() {
      var bb, ub, hb;
      return null !== (bb = null === (ub = kG) || void 0 === ub || null === (hb = ub.textures) || void 0 === hb ? void 0 : hb.files()) && void 0 !== bb ? bb : null
    }

    function FY(bb) {
      kY().follow((ub => {
        null !== ub && Promise.all([Promise.all([hb.e(194), hb.e(45)]).then((() => hb(42743))), (0, UO.K)()]).then((bb => {
          let [{
            followPagePackFiles: hb
          }, Bb] = bb;
          const Ob = null === Bb || (0, bh.p)(Bb) ? "webgl" : Bb.backend;
          hb(ub, TB.f, Ob, (bb => {
            TB.f.setPageFiles(bb)
          }), fY)
        }), (ub => {
          console.warn(`${oG} the texture pack's files didn't load: the previews draw the shipped ones until the next opens`, ub), bb()
        }))
      }))
    }

    function fY(bb, ub) {
      console.warn(`${oG} ${bb}`, ub)
    }

    function kY() {
      return fG ??= new dO({
        load: bb => Promise.all([hb.e(194), hb.e(52)]).then((() => hb(42745))).then((ub => {
          let {
            startPageTexturePackFeed: hb
          } = ub;
          return hb(fY, bb)
        })),
        store: rh.f,
        iZ: bb => {
          uU.then((() => {
            (0, jh.reportTexturePackFeedLoadFailure)(bb, QG)
          }))
        }
      }), fG
    }
    const TY = bb => kY().follow(bb);

    function cY() {
      return kY().loaded()
    }
    const QY = function(bb, ub, hb) {
        let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now(),
          Ob = 0;
        return async function(Gb, Ub) {
          let Lb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
          const Yb = ++Ob,
            Sb = Bb() + ub,
            ab = await
          function(bb, ub) {
            let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
            return new Promise((Bb => {
              const Ob = setTimeout((() => {
                Bb(null), bb.then((bb => {
                  null !== bb && (bb.joinedWithout(), hb(bb))
                }))
              }), ub);
              bb.then((bb => {
                clearTimeout(Ob), Bb(bb)
              }))
            }))
          }(bb(Gb), ub, (bb => {
            Yb === Ob && Lb() && Ub(bb, Bb() + ub).catch((bb => {
              hb("the texture pack step after the join failed", bb)
            }))
          }));
          return null === ab ? null : Ub(ab, Sb)
        }
      }((bb => (0, Bu.i)(bb) ? kY().request() : kY().forJoin()), CO.d, fY),
      RY = function(bb, ub) {
        let hb = !1;
        return {
          setGamePackConfirm: bb => {
            hb = null !== bb, ub(bb)
          },
          packStep: (ub, Bb, Ob) => bb(ub, Bb, (() => hb && Ob()))
        }
      }(QY, (bb => {
        kY().setGamePackConfirm(bb)
      }));

    function bS(bb) {
      RY.setGamePackConfirm(bb)
    }

    function uS() {
      if (qL || null !== rL || null === KL || null === dL) return;
      const {
        backend: bb,
        canvas: ub,
        fallbackReason: hb,
        adapterVendor: Bb
      } = dL, Ob = KL;
      KL = null;
      try {
        rL = Ob({
          backend: bb,
          canvas: ub,
          fallbackReason: hb,
          adapterVendor: Bb,
          joinedGame: () => qL ? null : EU,
          inGame: BS,
          shaderPackReach: () => {
            var bb, ub;
            return null !== (bb = null === (ub = jU) || void 0 === ub ? void 0 : ub.reachInJoinedGame()) && void 0 !== bb ? bb : null
          },
          msaa: () => CL > 1,
          writeCmd: (bb, ub, hb) => null !== MG && MG(bb, ub, hb),
          takeFailedMeshJobs: () => {
            var bb, ub;
            return null !== (bb = null === (ub = SU) || void 0 === ub ? void 0 : ub.takeFailedMeshJobs()) && void 0 !== bb ? bb : 0
          },
          readLoadCounts: bb => {
            var ub, hb;
            return null !== (ub = null === (hb = FG) || void 0 === hb ? void 0 : hb.readLoadCounts(bb)) && void 0 !== ub && ub
          },
          mainStalled: (bb, ub) => {
            (0, jh.reportMainStall)(bb, ub, QG)
          }
        })
      } catch (Gb) {
        console.error(`${oG} the frame telemetry didn't start`, Gb)
      }
    }

    function hS(bb, ub) {
      try {
        var hb, Bb, Ob;
        const Gb = wL && null !== (hb = null === (Bb = FG) || void 0 === Bb || null === (Ob = Bb.lastHeader) || void 0 === Ob ? void 0 : Ob.renderPending) && void 0 !== hb ? hb : 0;
        (0, fh.g)(ub, bb, BS() && !(null !== SO), Gb)
      } catch (Gb) {
        (0, fh.v)(), console.error(`${oG} the quality steps stopped`, Gb)
      }
    }

    function BS() {
      return null !== EU && JL === EU && !qL
    }

    function OS(bb) {
      const ub = rL;
      rL = null;
      try {
        null === ub || void 0 === ub || ub.stop()
      } catch {}
      console.error(`${oG} the frame telemetry threw: it stops`, bb)
    }

    function GS(bb) {
      var ub, hb, Bb, Ob;
      if ((0, LO.e)().fire(bb), "message" === bb.type) {
        if (JU++, bb.XS === Iu.wc.ERROR && null !== VU) {
          var Gb;
          const {
            text: ub,
            dropsCache: hb
          } = (0, tb.r)((new TextDecoder).decode(bb.payload));
          YL ||= hb, (null === (Gb = OL) || void 0 === Gb ? void 0 : Gb.conn) === bb.conn && (SL = ub)
        } else if (bb.XS === Pu.fc.ResumeComplete) {
          var Ub;
          null === (Ub = QU) || void 0 === Ub || Ub.resume.onResumeComplete(bb.conn)
        }
        return
      }
      bb.phase === Iu.E.Left ? eU = bb.conn : bb.phase === Iu.E.Activated && (null === (ub = OL) || void 0 === ub ? void 0 : ub.conn) === bb.conn ? OL.activated = !0 : bb.phase === Iu.E.Resumed ? function(bb) {
        var ub, hb;
        bL = bb;
        const Bb = QU;
        if (null === Bb || 0 === Bb.heldConn || (null === (ub = GU) || void 0 === ub ? void 0 : ub.conn) !== bb || !GU.resume || null === cU) return;
        console.info(`${oG} the game resumed on conn ${bb}, waiting for its InitialInfo`);
        const Ob = Bb.heldConn;
        Bb.heldConn = 0, GU.resume = !1, cU.conn = bb, (null === (hb = kU) || void 0 === hb ? void 0 : hb.conn) === Ob && (kU = {
          conn: bb,
          info: kU.info
        }), ou.b.apply({
          shopInfo: null,
          _shopVersion: Ou.c
        })
      }(bb.conn) : bb.phase === Iu.E.Held ? function(bb) {
        var ub;
        const hb = QU,
          Bb = null !== (ub = null === hb || void 0 === hb ? void 0 : hb.pendingHold) && void 0 !== ub ? ub : null;
        if (null !== hb && null !== Bb && Bb.conn === bb) return hb.pendingHold = null, hb.heldConn = bb, bL = 0, console.warn(`${oG} the core holds the game, reconnecting`), void hb.resume.onDropped(Bb.token);
        if (bb === bL) {
          bL = 0;
          const ub = FG;
          null === ub || ub.isStopped || (console.info(`${oG} the core held again a resumed game the shell ended before its InitialInfo: closing it again`), mY(ub, "close", bb))
        }
      }(bb.conn) : bb.phase === Iu.E.Closed && (null === (hb = QU) || void 0 === hb || null === (Bb = hb.pendingHold) || void 0 === Bb ? void 0 : Bb.conn) === bb.conn && (QU.heldConn === bb.conn ? function(bb) {
        const ub = bb.heldConn,
          hb = bb.dropCode;
        eY(bb, "refused"), console.info(`${oG} the core didn't hold the game through its drop: it hadn't started`), queueMicrotask((() => {
          vY(ub, !1), oY(ub, hb, "", !0)
        }))
      }(QU) : QU.pendingHold = null);
      const Lb = Object.keys(Iu.E).find((ub => Iu.E[ub] === bb.phase)),
        Yb = 0 === bb.code ? "" : ` (code ${bb.code})`;
      console.info(`${oG} conn ${bb.conn}: ${null!==Lb&&void 0!==Lb?Lb:bb.phase}${Yb}, ${JU} raw messages so far`), (null === (Ob = EU) || void 0 === Ob ? void 0 : Ob.conn) !== bb.conn || bb.phase !== Iu.E.Left && bb.phase !== Iu.E.Closed || UY(null), fU !== bb.conn || bb.phase !== Iu.E.Left && bb.phase !== Iu.E.Closed || (fU = null, null === EU && null === VU && cB.e.setGame(void 0));
      for (const ab of [...HL]) try {
        ab(bb.conn, bb.phase, bb.code)
      } catch (Sb) {
        (0, qu.q)(Sb, `${oG} a connection listener threw`)
      }
    }

    function US() {
      (0, UO.l)(), queueMicrotask((() => {
        try {
          WS()
        } catch (bb) {
          console.warn(`${oG} stopping before the reload threw`, bb)
        }(0, jh.flushCrashReports)(yb.d).then(yb.i, yb.i)
      }))
    }

    function LS() {
      const bb = FG;
      null === bb || bb.isStopped || null === GU || tU || !bb.hasPendingCommands() || SS(bb, !1, "budget")
    }

    function YS(bb) {
      var ub;
      const hb = EU;
      bb.persisted || null === hb || (null === (ub = GU) || void 0 === ub ? void 0 : ub.conn) !== hb.conn || GU.left || hb.leave()
    }

    function SS(bb, ub, Bb) {
      let Ob = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const Gb = tU;
      tU = !0;
      try {
        return function(bb, ub, Bb, Ob) {
          var Gb, Ub, Lb, Yb;
          if (qL) return !1;
          if (zS(bb, HS), qL || bb.isStopped) return !1;
          AS() && xU("modelsIn");
          tY(), iU = performance.now(), eU = null, NU = !1, (0, db.N)(), null === (Gb = pU) || void 0 === Gb || Gb.beforeFrame(), YB(iU, bb), (0, db.F)(iU, wS), vU = !0;
          const Sb = ub && oS();
          let ab;
          try {
            ab = bb.frame(iU, Sb, Bb)
          } finally {
            vU = !1
          }
          if (!ab) return !1;
          WL.observe(null !== (Ub = null === (Lb = bb.lastHeader) || void 0 === Lb ? void 0 : Lb.chunksCancelled) && void 0 !== Ub ? Ub : 0);
          const Hb = bb.lastFrameKind,
            wb = (0, zu.d)(Hb);
          (function(bb) {
            null !== MO && MO.afterFrame(performance.now(), bb)
          })(wb), null === (Yb = jL) || void 0 === Yb || Yb.frame(bb, iU, Hb), ub && (eL = wb);
          wb && (0, nu.c)(iU);
          if (null !== rL) try {
            rL.frameRan(bb, iU, performance.now(), Hb)
          } catch (pb) {
            OS(pb)
          }
          "drawn" === Hb && pS() && function() {
            for (const bb of [...OO]) bb()
          }();
          bb.forEachNetOut(lS);
          const Zb = GU;
          null !== eU && (null === Zb || void 0 === Zb ? void 0 : Zb.conn) === eU && KS(Zb, Jb.l);
          (function(bb) {
            var ub;
            if (xL) return;
            null === iL && oS() && (iL = performance.now());
            if (null === VU && null === EU) return;
            null === iL || vL || (vL = !0, (0, Xb.o)("wasm_startup_loaded", iL));
            let hb = 0;
            null !== EU ? hb = -1 : !0 === (null === (ub = OL) || void 0 === ub ? void 0 : ub.activated) && (hb = ~Pu.N.TerrainDrawn);
            const Bb = bb.headerWord(Pu.B.LoadSteps) & hb & ~gL;
            if (0 === Bb) return;
            gL |= Bb;
            const Ob = performance.now();
            for (const [Gb, Ub] of Object.entries(XS)) 0 !== (Bb & Pu.N[Gb]) && (0, Xb.o)(Ub, Ob)
          })(bb), ub && function(bb) {
            var ub, Bb, Ob;
            if (null === EU || !oS()) return;
            null === tL || JL === EU && !tL.frame(iU, 0 !== (bb.headerWord(Pu.B.LoadSteps) & Pu.N.TerrainDrawn)) || (tL = null);
            const Gb = bb.lastHeader,
              Ub = !wL || 0 === (null === Gb || void 0 === Gb ? void 0 : Gb.renderPending);
            !zL && Ub && (zL = !0, performance.mark(jG));
            if (JL === EU) return;
            const Lb = null !== (ub = null === Gb || void 0 === Gb ? void 0 : Gb.firstView) && void 0 !== ub ? ub : Iu.W.NotYet;
            if (wL && Lb === Iu.W.NotYet) return;
            if (xL && (!0 !== (null === (Bb = (0, rb.l)()) || void 0 === Bb ? void 0 : Bb.isSessionLive) || !Ub)) return;
            JL = EU;
            const Yb = EU;
            if (setTimeout((() => {
                EU === Yb && (0, Xb.j)()
              }), 0), null === (Ob = jU) || void 0 === Ob || Ob.playable(), function() {
                clearTimeout(OU), OU = setTimeout((() => {
                  BS() && vS((bb => {
                    let {
                      prefetchWorldgenWorker: ub
                    } = bb;
                    ub()
                  }))
                }), sG)
              }(), xL) return;
            xL = !0, performance.mark(rG), (0, iO.o)("render") && Promise.all([hb.e(75), hb.e(47)]).then((() => hb(4450))).then((bb => {
              let {
                renderDebugPlayable: ub
              } = bb;
              ub()
            }), (bb => {
              console.warn("The render debug topic didn't load", bb)
            }));
            const Sb = Math.round(performance.now());
            if (wL && Lb !== Iu.W.Drawn) {
              const ub = Lb === Iu.W.HeldBackstop ? "held_draws" : "long",
                {
                  cause: hb
                } = ZS(bb);
              if (console.warn(`${oG} playable at ${Sb} ms on the first view's ${ub} backstop, ${hb}: it wasn't drawn whole in time`), (0, Xb.o)("wasm_view_backstop", Sb, `${ub}:${hb}`), "long" === ub) {
                var ab, Hb;
                const ub = null !== (ab = null === (Hb = cU) || void 0 === Hb ? void 0 : Hb.game) && void 0 !== ab ? ab : "";
                tL = new nh.b((() => {
                  const {
                    cause: hb,
                    census: Bb
                  } = ZS(bb);
                  (0, jh.reportFirstViewNoTerrain)(ub, hb, Bb, QG), (0, wu.p)("noTerrain")
                }))
              }
            } else console.info(`${oG} playable at ${Sb} ms${wL?"":" (no renderer)"}`);
            setTimeout(AL, 0), (0, lu.g)().catch((bb => {
              console.error(`${oG} item sprites didn't load, so item particles show the missing texture`, bb)
            })), PB.e.warm()
          }(bb);
          (0, uh.H)(bb, {
            worldgen: LU,
            mesh: SU
          }),
          function(bb) {
            bb.forEachEvent(aB);
            for (const ub of SB) try {
              (0, BB.b)(ub)
            } catch (pb) {
              if ((0, qu.h)(pb)) {
                bb.crashOn(uh.k, pb);
                break
              }
              console.error(`${GB} an input action listener threw`, pb)
            }
            SB.length = 0
          }(bb), Ob && (0, xu.e)();
          return !bb.isStopped
        }(bb, ub, "all" === Bb || bb.rings.net.cursor >= DG || bb.netKeptFrames >= xG, Ob)
      } finally {
        tU = Gb
      }
    }

    function aS(bb) {
      console.error(`${oG} a frame-start listener threw`, bb)
    }

    function HS() {
      var bb, ub, hb, Bb;
      null === (bb = AU) || void 0 === bb || bb.drain(MG, mG), null === (ub = CU) || void 0 === ub || ub.drain(MG), null === (hb = dU) || void 0 === hb || hb.drain(performance.now()), oL(MG), null === (Bb = WU) || void 0 === Bb || Bb.drain()
    }

    function wS(bb) {
      console.error(`${oG} a before-frame listener threw`, bb)
    }

    function ZS(bb) {
      const ub = (0, rb.l)(),
        hb = (0, rb.t)(),
        Bb = null === ub || null === hb ? null : hb.readDrawCensus(ub.api);
      return {
        cause: (0, nh.f)(bb.headerWord(Pu.B.LoadSteps), Bb),
        census: Bb
      }
    }
    const XS = {
      ChunkRequested: "wasm_chunk_requested",
      ChunkStored: "wasm_chunk_stored",
      MeshLanded: "wasm_mesh_landed",
      PlayerChunk: "wasm_player_chunk",
      TerrainDrawn: "wasm_terrain_drawn"
    };

    function pS() {
      return wL && oS()
    }

    function oS() {
      return rU && AS()
    }

    function AS() {
      return null === AU || AU.startupDone
    }

    function lS(bb, ub) {
      const hb = GU;
      (null === hb || void 0 === hb ? void 0 : hb.conn) === bb ? KS(hb, ub) : mU++
    }

    function KS(bb, ub) {
      const {
        ws: hb
      } = bb;
      return hb.readyState === WebSocket.OPEN ? (hb.send(ub), !0) : hb.readyState === WebSocket.CONNECTING && bb.pendingBytes + ub.byteLength <= tG ? (bb.pending.push(ub.slice()), bb.pendingBytes += ub.byteLength, !0) : (mU++, !1)
    }

    function WS() {
      var bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb, ab, Hb, wb, Zb, Xb, pb, ob;
      qL = !0, NL.stop(), (0, tO.e)(), MO = null, JY(), (0, db.K)().unlockPointer(), (0, db.I)(null), null === (bb = oU) || void 0 === bb || bb(), oU = null, null === (ub = (0, rb.t)()) || void 0 === ub || ub.followCursorAim(null), (0, xu.G)(), (0, rb.h)(), cG.stop(), null === (hb = nL) || void 0 === hb || hb(), nL = null, null === (Bb = DL) || void 0 === Bb || Bb(), DL = null, null === (Ob = rL) || void 0 === Ob || Ob.stop(), rL = null, (0, xh.s)(null), null === (Gb = UU) || void 0 === Gb || Gb(), UU = null, null === (Ub = LU) || void 0 === Ub || Ub.stop(), LU = null, null === (Lb = SU) || void 0 === Lb || Lb.stop(), SU = null, null !== (Yb = kG) && void 0 !== Yb && null !== (Sb = Yb.textures) && void 0 !== Sb && Sb.assets && (0, fB.l)(null), null === (ab = kG) || void 0 === ab || ab.stop(), kG = null, TG = null;
      const Ab = aU;
      aU = null, Ab && (Ab.stop(), xS(Ab)), null === (Hb = CU) || void 0 === Hb || Hb.dispose(), CU = null, null === (wb = dU) || void 0 === wb || wb.dispose(), dU = null, AU = null, null === (Zb = KU) || void 0 === Zb || Zb(), KU = null, null === (Xb = XU) || void 0 === Xb || Xb(), XU = null, null === (pb = pU) || void 0 === pb || pb.stop(), pU = null, BY(), cB.e.release(), DY();
      const lb = WU;
      WU = null;
      try {
        null === lb || void 0 === lb || lb.dispose()
      } catch (Kb) {
        console.warn(`${oG} the sky's images didn't release`, Kb)
      }(0, qB.d)(null), null === (ob = yG) || void 0 === ob || ob.pagePreviews().endSession(null === (0, Uu.n)())
    }

    function CS(bb, ub) {
      var hb, Bb;
      const Ob = null !== (hb = null === (Bb = aU) || void 0 === Bb ? void 0 : Bb.details()) && void 0 !== hb ? hb : {},
        Gb = bb.site === lG || bb.site === KG || bb.site === jh.RENDER_RELOAD_SITE || bb.site === WG ? bb.error instanceof WebAssembly.RuntimeError || bb.error instanceof Tu.c : !(0, bh.s)(bb.error) && (0, uh.A)(bb);
      Gb && bb.error instanceof Error && (0, Uu.N)(bb.error);
      const Ub = Gb || bb.site === uh.t ? (0, jh.readTrap)(bb.error) : null,
        Lb = null !== Ub && (0, Eu.d)(Ub.kind, Ub.refusedBytes) ? Ub.refusedBytes : 0,
        Yb = null === HU ? (0, MB.r)(function() {
          try {
            return (0, Uu.t)().buffer.byteLength
          } catch {
            return 0
          }
        }(), Lb, null) : HU.ceilingMayRefuse(Lb),
        Sb = Lb > 0 && !Yb && PY();
      var ab;
      if (Sb && ((0, Zu.n)("oom"), (0, Zu.j)("decline"), PL = !0), WS(), (0, UO.b)()) return console.warn(`${oG} the session stopped at ${bb.site} as the page reloads`, bb.error), void((0, bh.s)(bb.error) || (null === (ab = bb.header) || void 0 === ab ? void 0 : ab.lastError) === Iu.I.CoreBusy || (0, jh.reportStoppedCore)(bb, ub, Ub, {
        memoryDetails: Ob,
        declined: Sb
      }));
      (0, jh.showCrash)(bb, ub, Ub, {
        memoryDetails: Ob,
        declined: Sb
      })
    }

    function dS(bb) {
      const {
        input: ub,
        net: hb,
        worker: Bb
      } = bb.rings, Ob = bb.optionsDropped, Gb = ub.dropped + Ob + hb.dropped + Bb.dropped + mU;
      Gb !== MU && function(bb, ub) {
        const hb = performance.now();
        return !(hb - sU[bb] < JG) && (sU[bb] = hb, console.warn(`${oG} ${ub}`), !0)
      }("dropped", `${Gb} records dropped so far (input ${ub.dropped}, options ${Ob}, net ${hb.dropped}, worker ${Bb.dropped}, net-out ${mU})`) && (MU = Gb)
    }

    function rS() {
      var bb, ub;
      const hb = (0, Kh.e)();
      if (null === hb) return null;
      const Bb = (0, dh.m)(hb);
      return {
        ...Bb,
        horizontal: Math.min(Bb.horizontal, null !== (bb = null === (ub = aU) || void 0 === ub ? void 0 : ub.shedDistanceInUse()) && void 0 !== bb ? bb : 1 / 0)
      }
    }

    function jS(bb) {
      var ub, hb;
      return {
        samples: wL ? CL : null,
        sunShadows: bb,
        renderDistance: null !== (ub = null === (hb = rS()) || void 0 === hb ? void 0 : hb.horizontal) && void 0 !== ub ? ub : null
      }
    }

    function nS(bb) {
      FU = bb, (0, Wh.H)()
    }

    function DS() {
      var bb, ub, hb;
      const Bb = rS();
      return {
        ...null === (bb = aU) || void 0 === bb ? void 0 : bb.pageKillSnapshot(),
        renderDistance: null !== (ub = null === Bb || void 0 === Bb ? void 0 : Bb.horizontal) && void 0 !== ub ? ub : null,
        renderDistanceVertical: null !== (hb = null === Bb || void 0 === Bb ? void 0 : Bb.vertical) && void 0 !== hb ? hb : null,
        chunkCap: wU,
        budgetBasis: ZU,
        renderBackend: (0, UO.E)(),
        ...(0, Ch.c)(FU)
      }
    }

    function xS(bb) {
      console.info(`${oG} wasm memory at the session's end`, bb.details())
    }

    function zS(bb, ub) {
      if (!bb.isStopped) try {
        ub()
      } catch (hb) {
        bb.crash(uh.v, hb)
      }
    }

    function gS() {
      return YU ??= hb.e(69).then((() => hb(42750))).catch((bb => {
        throw YU = null, bb
      })), YU
    }
    async function iS() {
      const {
        createWorldgenWorker: bb,
        worldgenWorkerReady: ub
      } = await gS();
      return await ub(), bb
    }

    function vS(bb) {
      var ub;
      null === (ub = YU) || void 0 === ub || ub.then(bb, (() => {}))
    }

    function tS(bb, ub, hb) {
      return async function(bb, ub, hb) {
        let {
          stop: Bb,
          stillWanted: Ob
        } = hb;
        const Gb = await (0, WB.n)(bb, {
          stillWanted: Ob,
          beforeReload: async () => {
            Bb(), await (0, jh.flushCrashReports)(yb.d)
          },
          reload: yb.i
        });
        return Gb || ub(), Gb
      }(bb, ub, {
        stop: WS,
        stillWanted: hb
      })
    }
    let JS = !1;

    function eS() {
      return JS = !0, async function(bb, ub, Bb) {
        const {
          gamePackSource: Ob
        } = await hb.e(344).then((() => hb(42707)));
        await RY.packStep(bb, ((hb, Bb) => hb.packForGame(bb, Ob(ub), Bb)), Bb)
      }(...arguments)
    }

    function NS(bb) {
      ! function(bb, ub) {
        bb((bb => {
          null === bb || void 0 === bb || bb.subscribe((bb => {
            let {
              pack: hb,
              gameSource: Bb
            } = bb;
            ub(null === Bb || null === hb ? null : {
              pack: hb,
              source: "" === Bb ? null : Bb
            })
          }))
        }))
      }(TY, bb)
    }
    let sS = !1,
      MS = null,
      mS = !1,
      IS = !1;

    function PS() {
      var bb;
      sS || (sS = !0, kL("play", qb), (0, wb.k)(new ba), Lb.gameBridge.attach(vb), fS().catch((() => {})), (0, rb.u)((bb => {
        uu(bb.setTextHost)
      })), bb = yS, LL.add(bb), function(bb) {
        for (const ub of nU) bb(ub);
        DU.add(bb)
      }((bb => {
        ES(qS[bb])
      })))
    }
    const qS = {
      booted: Gb.k.INITIALISE_NOA,
      texturesIn: Gb.k.REGISTRATION,
      modelsIn: Gb.k.SETUP_LIFEFORMS
    };

    function ES(bb) {
      Yb.i.vp("matchmakeAndPlayStepCompleted", {
        step: bb,
        totalSubSteps: 1
      })
    }

    function yS(bb) {
      if (!mS) return;
      const {
        gameNameWithVariation: ub,
        lobbyName: hb
      } = (0, wb.b)();
      if (bb.code === Bb.d.serverUpdating.code) return (new ba).leaveLive(), void FS(ub, hb);
      Yb.i.vp("unwantedLeftGame", {
        reason: VS(bb),
        requiresRefresh: bb.requiresRefresh,
        canReconnect: null !== bb.reconnect,
        automaticallyReconnect: bb.reconnecting,
        canPlayAgain: bb.canPlayAgain,
        gameNameWithVariation: ub,
        lobbyName: hb
      }), (new ba).leaveLive()
    }

    function VS(bb) {
      return null !== bb.reasonKey ? {
        translationKey: bb.reasonKey
      } : "gameOrPluginKick" === bb.name ? bb.reason : `You have disconnected from the server.\n${bb.reason}`
    }

    function FS(bb, ub) {
      var Bb;
      Bb = (0, Sb.A)(bb, ub), Promise.resolve().then((() => hb(1415))).then((bb => {
        let {
          navigatePreserveSearch: ub
        } = bb;
        ub(Bb)
      })).catch((bb => {
        console.warn("[bloxd-wasm-client] the page's router didn't navigate: loading the page instead", bb), (0, yb.e)(Bb)
      }))
    }

    function fS() {
      return MS ??= Promise.all([hb.e(70), hb.e(73), hb.e(72), hb.e(71), hb.e(84), hb.e(261), hb.e(200), hb.e(218), hb.e(239), hb.e(213), hb.e(46)]).then((() => hb(40127))).then((bb => {
        try {
          bb.attachPlayGameSources()
        } catch (ub) {
          throw console.error("[bloxd-wasm-client] the play sources did not attach", ub),
            function(bb) {
              uU.then((ub => {
                null === ub || ub.isStopped || qL ? console.warn(`${oG} the play sources threw as they attached, after the client stopped`, bb) : CS({
                  site: WG,
                  error: bb,
                  header: null
                }, QG)
              }))
            }(ub), ub
        }
      }), (bb => {
        throw MS = null, new rb.d(bb)
      })), MS
    }
    async function kS(bb, ub) {
      PS(), JS = !0, mS = !0;
      let hb = {
          place: bb.place,
          matchedAt: bb.matchedAt
        },
        Ub = bb.place.gameNameWithVariation;
      const Lb = (0, Hb.c)();
      let Yb = null;
      const Sb = await RL({
        matchmake: async () => {
          let ub = hb;
          if (hb = null, null === ub) {
            const hb = await bb.rematch();
            if (hb.isError()) throw Yb = hb.asError().forward(), new Error(hb.asError().message);
            ub = {
              place: hb.getValue(),
              matchedAt: performance.now()
            }
          }
          Ub = ub.place.gameNameWithVariation;
          return {
            target: await (0, Nb.c)(bb.userContext, ub.place, cY(), Lb),
            matchedAt: ub.matchedAt,
            freshMs: Nb.b
          }
        },
        pageReady: fS,
        onFailure: (bb, ub) => {
          null === Yb && function(bb, ub) {
            (0, jh.reportPageJoinFailure)(bb, QG, ub)
          }(bb, {
            sinceJoinStartMs: ub,
            game: Ub
          })
        },
        rejoin: () => () => {},
        invalidateTrafficCode: () => bb.userContext.invalidateTrafficCode(),
        signal: ub
      });
      switch (Sb.kind) {
        case "joined":
          if (Lb) {
            const {
              game: bb
            } = Sb;
            (0, Hb.l)((() => {
              bb.endJoinAd() && (0, Xb.n)()
            }))
          }
          return IS || (IS = !0, (0, ob.b)()), mS ? (ES(Gb.k.CONNECT_TO_GAME_SERVER), ES(Gb.k.SHADER_PACK), function() {
            var bb, ub;
            return null !== (bb = null === (ub = jU) || void 0 === ub ? void 0 : ub.runsInJoinedGame()) && void 0 !== bb && bb
          }() && (0, pb.g)(bb.userContext, Ub).catch((bb => {
            console.error("Failed to report the shader pack session", bb)
          })), function() {
            const bb = function() {
              var bb, ub;
              return null !== (bb = null === (ub = jU) || void 0 === ub ? void 0 : ub.couldntRunInJoinedGame()) && void 0 !== bb ? bb : null
            }();
            null !== bb && (0, pb.c)(bb)
          }(), Ob.b.value(void 0)) : RS("The server ended the game as it joined");
        case "failed":
          if (!Sb.reloading) {
            if (null !== Yb) return Yb;
            if ((Sb.error instanceof Jb.m || Sb.error instanceof Jb.e) && Sb.error.code === Bb.d.serverUpdating.code) {
              if (ub.aborted) return RS("Left the game while it loaded");
              const {
                gameNameWithVariation: bb,
                lobbyName: hb
              } = (0, wb.b)();
              return FS(bb, hb), RS("The server is updating")
            }
            return Sb.error instanceof Eb.h ? Ob.b.errorWithCode(Sb.error.messageKey, Gb.k.SHADER_PACK, {
              severity: "medium"
            }) : Ob.b.errorWithCode(function(bb) {
              if (bb instanceof Jb.y || bb instanceof Wb.c) return bb.message;
              if (TS(bb)) return (0, tb.o)(bb.code, bb.serverText);
              return tb.k
            }(Sb.error), Gb.k.CONNECT_TO_GAME_SERVER, {
              error: cS(Sb.error) ? Sb.error : void 0,
              severity: QS(Sb.error),
              gameServerUnreachable: (0, eb.d)(Sb.error),
              rematch: (0, lb.b)(Sb.error),
              gameRefused: (0, Kb.d)(Sb.error)
            })
          }
          return RS("Reloading into the new build");
        case "stopped":
          return RS("The game client stopped, and shows why");
        case "Lu":
          return RS("Left the game while it loaded")
      }
    }

    function TS(bb) {
      return bb instanceof Jb.m || bb instanceof Jb.e && "attach" !== bb.stage
    }

    function cS(bb) {
      return !(bb instanceof Jb.y) && !TS(bb) && void 0 === (0, eb.d)(bb)
    }

    function QS(bb) {
      return TS(bb) ? bb instanceof Jb.e && (0, tb.m)(bb.code).requiresRefresh ? "medium" : "low" : cS(bb) || bb instanceof Jb.y ? "medium" : "low"
    }

    function RS(bb) {
      return Ob.b.errorWithCode(bb, Gb.k.CONNECT_TO_GAME_SERVER, {
        severity: "low",
        Lu: !0
      })
    }
    class ba {
      leave(bb) {
        if ((0, Cb.d)()) {
          var ub, hb;
          if ((0, Ub.b)()) return;
          (0, Zb.b)(!0 === (null === (ub = (0, Cb.m)()) || void 0 === ub || null === (hb = ub.currentViewer) || void 0 === hb ? void 0 : hb.unsavedChanges), bb)
        } else this.leaveLive()
      }
      leaveLive() {
        var bb;
        JS && (null === (bb = cY()) || void 0 === bb || bb.endGamePack());
        if (!mS) return;
        mS = !1, (0, Ab.d)();
        try {
          var ub;
          null === (ub = (0, rb.t)()) || void 0 === ub || ub.clearWasmCameraScreen()
        } catch (Bb) {
          console.error("[bloxd-wasm-client] the camera screen didn't clear", Bb)
        }
        const {
          gameNameWithVariation: hb
        } = (0, wb.b)();
        try {
          SY()
        } finally {
          (0, wb.l)({
            websocketUrl: null
          }), Yb.i.vp("leaveGame", {
            gameNameWithVariation: hb
          }), (0, ab.T)()
        }
      }
      isReplay() {
        return (0, Cb.d)()
      }
    }
  },
  40429: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Ob,
      e: () => Bb,
      f: () => Lb,
      h: () => Ub
    });
    const Bb = 12e4,
      Ob = 3e4,
      Gb = {
        hidden: () => "undefined" !== typeof document && document.hidden,
        listen: bb => "undefined" === typeof document ? () => {} : (document.addEventListener("visibilitychange", bb), () => {
          document.removeEventListener("visibilitychange", bb)
        })
      };

    function Ub(bb) {
      return `it sent no start within ${Math.round(bb)} ms`
    }
    class Lb {
      constructor(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Gb;
        this.timeoutMs = bb, this.onTimeout = ub, this.now = hb, this.visibility = Bb, this.timer = null, this.counted = 0, this.step = null, this.unlisten = void 0, this.unlisten = Bb.listen((() => {
          this.onVisibility()
        })), Bb.hidden() || this.next()
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
        const ub = Math.min(bb, 5e3);
        this.step = {
          at: this.now(),
          ms: ub
        }, this.arm(ub, (() => {
          this.counted += this.credit(), this.step = null, this.next()
        }))
      }
      arm(bb, ub) {
        this.timer = setTimeout((() => {
          this.timer = null, ub()
        }), bb)
      }
    }
  },
  40333: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Bb
    });
    const Bb = {
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
  38357: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Gb
    });
    var Bb = hb(2683);
    const Ob = ["none", "idle", "now"];

    function Gb() {
      const bb = () => (0, Bb.B)();
      return {
        memoryBytes: () => (0, Bb.t)().buffer.byteLength,
        reserveUpFront: ub => bb().fa(ub),
        reserveAhead: ub => bb().Fa(ub),
        setCeiling: ub => {
          bb().ka(ub)
        },
        lowWater: () => Ob[bb().Va()] ?? "none",
        stats: () => function(bb) {
          const ub = new Uint32Array((0, Bb.t)().buffer, bb, 17),
            hb = bb => ub[bb] ?? 0,
            Ob = bb => ({
              upFront: hb(bb),
              ahead: hb(bb + 1),
              onDemandInFrame: hb(bb + 2),
              onDemand: hb(bb + 3)
            });
          return {
            memoryBytes: hb(0),
            initialBytes: hb(1),
            liveBytes: hb(2),
            peakLiveBytes: hb(3),
            headroomBytes: hb(4),
            unusedBytes: hb(5),
            ceilingBytes: hb(6),
            reservesRefused: hb(7),
            grows: Ob(8),
            grownBytes: Ob(12),
            allocationsRefused: hb(16)
          }
        }(bb().Ta()),
        takeBallast: () => bb().ca(),
        takePressure: () => bb().Qa()
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);