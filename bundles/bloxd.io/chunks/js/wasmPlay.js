export const id = 60;
export const ids = [60];
export const modules = {
  39171: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => tU,
      f: () => pU
    });
    const tU = "The world isn't loaded, so no blocks can be seen.",
      pU = "The world isn't loaded, so nothing in it can be seen."
  },
  38654: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => hU,
      i: () => QU,
      m: () => CU
    });
    var tU = gU(2624);
    const pU = 0,
      EU = 2,
      PU = 3,
      TU = 4;
    class qU {
      constructor(UU, RU) {
        this.width = UU, this.hG = RU, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(UU * RU)
      }
      push(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const gU = this.data.subarray(this.next * this.width, (this.next + 1) * this.width);
        for (let tU = 0; tU < this.width; tU++) gU[tU] = UU[RU + tU];
        return this.next = (this.next + 1) % this.hG, this.size = Math.min(this.size + 1, this.hG), gU
      }
      lines() {
        const UU = [],
          RU = (this.next - this.size + this.hG) % this.hG;
        for (let gU = 0; gU < this.size; gU++) {
          const tU = (RU + gU) % this.hG * this.width;
          UU.push(Array.from(this.data.subarray(tU, tU + this.width)).join(","))
        }
        return UU
      }
    }

    function KU(UU) {
      return Number.isFinite(UU) ? String(Math.round(10 * UU) / 10) : String(UU)
    }

    function cU(UU) {
      return Number.isFinite(UU) ? UU.toFixed(1) : String(UU)
    }
    class GU {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.YH = 0, this.pastLimit = 0, this.lockSkips = 0, this.ih = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
    }
    class jU {
      constructor() {
        var UU = this;
        this.tally = new GU, this.records = new qU(10, 3600), this.events = new qU(4, 12e3), this.event = new Float64Array(4), this.take = null, this.client = "js", this.started = !1, this.record = function(RU) {
          let gU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const [tU, qU, GU, jU, uU, CU, hU, QU, eU, WU] = UU.records.push(RU, gU), fU = UU.tally;
          switch (fU.frames++, hU) {
            case pU:
              return void fU.idle++;
            case TU:
              return void fU.ih++;
            case PU:
              return fU.lockSkips++, void(0 === GU && 0 === jU || UU.outlier(`lock skip dropped raw (${KU(GU)}, ${KU(jU)}) at ${cU(tU)} ms`))
          }
          fU.looked++, Number.isFinite(qU) && (fU.dtMin = Math.min(fU.dtMin, qU), fU.dtMax = Math.max(fU.dtMax, qU), fU.dtSum += qU, qU > 0 && (fU.peakRate = Math.max(fU.peakRate, Math.hypot(uU, CU) / qU))), fU.raw[0] += GU, fU.raw[1] += jU, fU.turned[0] += uU, fU.turned[1] += CU;
          const xU = Math.abs(GU) > WU || Math.abs(jU) > WU,
            mU = `raw (${KU(GU)}, ${KU(jU)}) over ${cU(qU)} ms, limit ${KU(WU)}, filter v (${QU.toFixed(3)}, ${eU.toFixed(3)}) px/ms, at ${cU(tU)} ms`;
          hU === EU ? (fU.YH++, UU.outlier(`spike put right: ${mU} -> turned (${KU(uU)}, ${KU(CU)})`)) : xU ? (fU.pastLimit++, UU.outlier(`kept past limit: ${mU}`)) : qU > 50 && (fU.longFrames++, UU.outlier(`long frame: ${mU}, turned in full`))
        }, this.onMouseMove = UU => {
          const RU = this.tally,
            {
              movementX: gU,
              movementY: tU
            } = UU;
          RU.events++;
          const pU = Math.max(Math.abs(gU), Math.abs(tU));
          RU.eventMax = Math.max(RU.eventMax, pU);
          const EU = null !== document.pointerLockElement,
            PU = this.event;
          PU[0] = UU.timeStamp, PU[1] = gU, PU[2] = tU, PU[3] = EU ? 1 : 0, this.events.push(PU), pU >= 200 && (RU.bigEvents++, this.eventOutlier(`big mousemove (${gU}, ${tU}) at ${cU(UU.timeStamp)} ms, lock ${EU?"WT":"free"}`))
        }, this.onLockChange = () => {
          const UU = document.pointerLockElement;
          (0, tU.h)("look", `pointer lock ${UU?`gained (${UU.tagName.toLowerCase()})`:"lost"} at ${cU(performance.now())} ms`)
        }, this.onLockError = () => {
          (0, tU.h)("look", `pointer lock request failed at ${cU(performance.now())} ms`)
        }, this.onVisibility = () => {
          (0, tU.h)("look", `page ${document.visibilityState} at ${cU(performance.now())} ms`)
        }, this.flush = () => {
          this.takeRecords();
          const UU = this.tally;
          if (this.tally = new GU, 0 === UU.events && 0 === UU.raw[0] && 0 === UU.raw[1] && 0 === UU.lockSkips && 0 === UU.YH && 0 === UU.dropped) return;
          const RU = UU.looked > 0 ? UU.dtSum / UU.looked : NaN,
            gU = [`${UU.frames} frames (${UU.looked} looked, ${UU.idle} idle${"wasm"===this.client?`, ${UU.ih} carried`:""})`, `dt avg ${cU(RU)} min ${cU(UU.dtMin)} max ${cU(UU.dtMax)}, ${UU.longFrames} long`, `${UU.events} mousemoves (max ${KU(UU.eventMax)} px, ${UU.bigEvents} big)`, `raw (${KU(UU.raw[0])}, ${KU(UU.raw[1])}) turned (${KU(UU.turned[0])}, ${KU(UU.turned[1])})`, `peak ${UU.peakRate.toFixed(2)} px/ms`, `put right ${UU.YH}, past limit ${UU.pastLimit}, lock skips ${UU.lockSkips}`, "lock " + (document.pointerLockElement ? "WT" : "free")];
          UU.dropped > 0 && gU.push(`${UU.dropped} doubled spike copies dropped`), UU.lost > 0 && gU.push(`${UU.lost} records lost`), UU.suppressed > 0 && gU.push(`${UU.suppressed} outlier lines not shown`), (0, tU.h)("look", `1s: ${gU.join("; ")}`)
        }, this.dump = () => [`look records (${this.client}): nowMs,dtMs,rawX,rawY,turnedX,turnedY,outcome,vX,vY,limit`, ...this.records.lines(), "mousemove events: timeStamp,movementX,movementY,locked", ...this.events.lines()].join("\n")
      }
      start(UU, RU) {
        this.client = UU, this.take = RU;
        const {
          screen: gU
        } = window;
        (0, tU.h)("look", `start: ${UU} client, dpr ${window.devicePixelRatio}, screen ${gU.width}x${gU.height}, pointer lock ${document.pointerLockElement?"WT":"free"}`), this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), (0, tU.g)("look", this.dump))
      }
      outlier(UU) {
        const RU = this.tally;
        RU.outliers >= 20 ? RU.suppressed++ : (RU.outliers++, (0, tU.h)("look", UU))
      }
      eventOutlier(UU) {
        const RU = this.tally;
        RU.eventLines >= 10 ? RU.suppressed++ : (RU.eventLines++, (0, tU.h)("look", UU))
      }
      takeRecords() {
        var UU;
        const RU = null === (UU = this.take) || void 0 === UU ? void 0 : UU.call(this);
        if (RU && RU.length >= 2) {
          this.tally.lost += RU[0], this.tally.dropped += RU[1];
          for (let UU = 2; UU + 10 <= RU.length; UU += 10) this.record(RU, UU)
        }
      }
      droppedCopy() {
        this.tally.dropped++
      }
      endTake() {
        this.takeRecords(), this.take = null
      }
    }
    let uU = null;

    function CU(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return uU ??= new jU, uU.start(UU, RU), uU.record
    }

    function hU() {
      var UU;
      null === (UU = uU) || void 0 === UU || UU.endTake()
    }

    function QU() {
      var UU;
      null === (UU = uU) || void 0 === UU || UU.droppedCopy()
    }
  },
  8887: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => tU
    });
    const tU = new Set(["chunkBorders"])
  },
  9030: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => PU,
      h: () => pU,
      i: () => cU
    });
    var tU = gU(1517);

    function pU(UU) {
      var RU;
      return {
        ...PU.store,
        yaw: PU.store.yaw + (null !== (RU = tU.d[UU].previewYaw) && void 0 !== RU ? RU : 0)
      }
    }
    const EU = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      PU = {
        player: EU,
        store: {
          ...EU,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function TU(UU, RU) {
      UU instanceof Promise ? UU.then(RU).catch((UU => {
        console.error("Couldn't open the preview", UU)
      })) : RU(UU)
    }
    class qU {
      constructor(UU) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, TU(UU, (UU => {
          this.closed ? UU.close() : (this.opened = UU, null !== this.size && UU.resize(this.size.width, this.size.height), null !== this.view && UU.show(this.view))
        }))
      }
      show(UU) {
        var RU;
        this.view = UU, null === (RU = this.opened) || void 0 === RU || RU.show(UU)
      }
      resize(UU, RU) {
        var gU;
        this.size = {
          width: UU,
          height: RU
        }, null === (gU = this.opened) || void 0 === gU || gU.resize(UU, RU)
      }
      close() {
        var UU;
        this.closed = !0, null === (UU = this.opened) || void 0 === UU || UU.close(), this.opened = null
      }
    }
    class KU {
      constructor(UU) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(UU).then((UU => UU.ready)), TU(UU, (UU => {
          this.closed ? UU.close() : (this.opened = UU, null !== this.size && UU.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var UU, RU;
        return null !== (UU = null === (RU = this.opened) || void 0 === RU ? void 0 : RU.isReady()) && void 0 !== UU && UU
      }
      setCosmetic(UU, RU) {
        var gU;
        null === (gU = this.opened) || void 0 === gU || gU.setCosmetic(UU, RU)
      }
      playEmote(UU) {
        var RU;
        null === (RU = this.opened) || void 0 === RU || RU.playEmote(UU)
      }
      setOrbit(UU) {
        var RU;
        null === (RU = this.opened) || void 0 === RU || RU.setOrbit(UU)
      }
      resetCamera() {
        var UU;
        null === (UU = this.opened) || void 0 === UU || UU.resetCamera()
      }
      async untilDrawn(UU) {
        var RU;
        await this.ready, await (null === (RU = this.opened) || void 0 === RU ? void 0 : RU.untilDrawn(UU))
      }
      resize(UU, RU) {
        var gU;
        this.size = {
          width: UU,
          height: RU
        }, null === (gU = this.opened) || void 0 === gU || gU.resize(UU, RU)
      }
      close() {
        var UU;
        this.closed = !0, null === (UU = this.opened) || void 0 === UU || UU.close(), this.opened = null
      }
    }
    const cU = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(UU) {
        this.host = UU
      }
      setDefaultHost(UU) {
        this.makeDefault = UU
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(UU) {
        return new qU(this.current().openMob(UU))
      }
      openPet(UU) {
        return new qU(this.current().openPet(UU))
      }
      openMobLineup(UU) {
        return new qU(this.current().openMobLineup(UU))
      }
      openCharacter(UU, RU) {
        return new KU(this.current().openCharacter(UU, RU))
      }
    }
  },
  38787: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => GU,
      e: () => jU
    });
    var tU = gU(165),
      pU = gU(185),
      EU = gU(1451),
      PU = gU(2927),
      TU = gU(1461),
      qU = gU(36033),
      KU = gU(623),
      cU = gU(38747);

    function GU(UU) {
      (0, PU.e)("matchmake_failed", UU, tU.l[tU.l.SHADER_PACK])
    }
    async function jU(UU, RU) {
      var gU;
      const tU = null === (gU = await cU.shaderPackPage.preload()) || void 0 === gU ? void 0 : gU.listing,
        PU = (0, qU.b)();
      tU && null !== PU && await TU.c.reportShaderPackSession(UU, {
        packId: tU.packId,
        sourceHash: tU.sourceHash,
        game: (0, EU.g)(RU, pU.w, "other"),
        playSessionId: PU,
        visitSessionId: (0, KU.c)()
      })
    }
  },
  38598: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => TU
    });
    var tU = gU(24),
      pU = gU(1287),
      EU = gU(3165);
    const PU = "Reconnecting";
    class TU {
      constructor(UU) {
        this.hooks = UU, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = UU => {
          UU.persisted || this.leave()
        }, this.controller = new EU.d((RU => UU.reconnect(RU)), {
          isSessionLive: () => !this.ended && UU.isLive(),
          onPhaseChanged: UU => {
            this.onPhaseChanged(UU)
          },
          onReconnected: RU => {
            UU.onReconnected(RU)
          },
          onGaveUp: RU => {
            !this.ended && UU.isLive() && UU.onGaveUp(this.sessionBased, RU)
          }
        })
      }
      onInitialInfo(UU, RU) {
        this.graceMs = UU, this.sessionBased = RU
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(UU) {
        this.ended || this.controller.onConnectionLost(UU, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const UU = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          RU = this.controller.heldToken;
        this.end(), UU && "" !== RU && this.hooks.releaseSeat(RU)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(UU) {
        const RU = "frozen" === UU || "resuming" === UU;
        RU !== this.stopped && (this.stopped = RU, this.hooks.freeze(RU));
        const gU = "frozen" === UU || "resuming" === UU && this.frozen;
        gU && !this.frozen ? (0, pU.o)(PU) : !gU && this.frozen && (0, pU.k)(PU), this.frozen = gU, this.setListening("connected" !== UU), tU.p.yh(EU.q, gU ? "frozen" : UU)
      }
      setListening(UU) {
        UU !== this.listening && (this.listening = UU, UU ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  38603: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => tU
    });
    class tU {
      constructor(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = UU, this.now = RU, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const UU = this.now(),
            RU = UU - this.lastCheckAt <= 2e3;
          this.lastCheckAt = UU;
          const gU = "visible" === document.visibilityState;
          !gU || RU && this.wasVisible || (this.resumedAt = UU), this.wasVisible = gU, gU && UU - this.lastHeardAt > 12e3 && UU - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = RU(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  8919: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => EU
    });
    var tU = gU(1064);

    function pU() {
      var UU, RU;
      return null !== (UU = null === (RU = screen.orientation) || void 0 === RU ? void 0 : RU.type) && void 0 !== UU ? UU : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const EU = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && pU() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = pU(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, tU.Kh)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const UU of this.resizers) UU()
          }
        }), 1e3)
      }
      heldSizer(UU) {
        let RU = !1;
        return () => {
          if (RU && this.isHeld()) return null;
          const gU = UU();
          return RU ||= null !== gU, gU
        }
      }
      onRelease(UU) {
        return this.resizers.add(UU), () => {
          this.resizers.delete(UU)
        }
      }
    }
  },
  38771: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => pU
    });
    let tU = !1;
    async function pU(UU, RU) {
      if (!tU) {
        tU = !0;
        try {
          const [{
            reloadBloxd: tU
          }, {
            NotificationProvider: pU
          }] = await Promise.all([Promise.resolve().then((() => gU(1637))), Promise.resolve().then((() => gU(1333)))]);
          if (!UU || !0 === await pU.showPromptPopup({
              title: "Unsaved changes",
              subtitle: "Exit and lose your unsaved changes?",
              confirmText: "Exit",
              destructive: !0,
              cancelText: "Cancel",
              unlockPointerKey: "replayExitUnsavedChanges"
            }).getResult()) return void tU(RU)
        } catch (pU) {
          console.error("Leaving the replay failed", pU)
        }
        tU = !1
      }
    }
  },
  38618: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => KU,
      e: () => cU
    });
    var tU = gU(1627),
      pU = gU(189),
      EU = gU(1614),
      PU = gU(1672),
      TU = gU(1196),
      qU = gU(1120);
    async function KU(UU, RU) {
      return function(UU) {
        return "object" === typeof UU && null !== UU && UU.code === pU.d.VpnIp.code
      }(RU) && function(UU) {
        return EU.b.supports("appCheck") && UU.isLoggedIn() && !UU.hasTriedAppAttestation()
      }(UU) && await async function(UU) {
        try {
          const {
            token: RU
          } = await (0, PU.d)(), {
            "3PSIDMCPP": gU
          } = await (0, qU.postJsonWithMetricsCookiesAndJsonResponse)(`${TU.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: RU
          }, {
            retries: 0
          }, UU.getMetricsCookies());
          return UU.setAppAttestedAuthJwt(gU), !0
        } catch (RU) {
          return RU instanceof tU.e && "failed" === RU.code ? (console.warn("The app couldn't get an App Check token:", RU), UU.markAppAttestationTried()) : console.error("Failed to attest the app:", RU), !1
        }
      }(UU)
    }
    async function cU(UU, RU) {
      try {
        return await RU()
      } catch (gU) {
        if (!await KU(UU, gU)) throw gU
      }
      return RU()
    }
  },
  40437: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => qU
    });
    var tU = gU(1648);
    const pU = 33177600,
      EU = 3e4;
    let PU = !1;

    function TU(UU, RU, gU) {
      if (!UU.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (PU) return Promise.reject(new Error("A screenshot is already being taken"));
      PU = !0;
      const tU = function(UU, RU, gU) {
        const tU = Math.max(1, UU),
          EU = Math.max(1, RU),
          PU = Math.min(1, gU / Math.max(tU, EU), Math.sqrt(pU / (tU * EU)));
        return {
          width: Math.max(1, Math.floor(tU * PU)),
          height: Math.max(1, Math.floor(EU * PU))
        }
      }(RU, gU, UU.maxTextureSize);
      return UU.resize(tU.width, tU.height), new Promise(((RU, gU) => {
        let tU, pU = 2,
          TU = null;
        const qU = () => {
          var RU;
          PU = !1, null === (RU = TU) || void 0 === RU || RU(), clearTimeout(tU), UU.restoreSize()
        };
        tU = setTimeout((() => {
          qU(), gU(new Error("No frame was drawn to capture"))
        }), EU), TU = UU.onFrameDrawn((() => {
          if (pU--, pU > 0) return;
          const {
            canvas: tU
          } = UU, EU = {
            width: tU.width,
            height: tU.height
          };
          try {
            tU.toBlob((UU => {
              UU ? RU({
                blob: UU,
                ...EU
              }) : gU(new Error("The canvas gave no image"))
            }), "image/png")
          } catch (PU) {
            gU(PU)
          } finally {
            qU()
          }
        }))
      }))
    }
    async function qU(UU, RU, gU) {
      try {
        const pU = await TU(UU, RU, gU);
        (0, tU.d)(pU.blob, `bloxd-screenshot-${pU.width}x${pU.height}-${Date.now()}.png`)
      } catch (pU) {
        console.error("Error taking screenshot:", pU)
      }
    }
  },
  38611: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => jU,
      h: () => cU
    });
    var tU = gU(189),
      pU = gU(1698),
      EU = gU(1704),
      PU = gU(8522);
    const TU = [250, 500, 1e3, 2e3, 1250],
      qU = 406;

    function KU(UU) {
      if ("object" !== typeof UU || null === UU) return !1;
      const {
        code: RU,
        message: gU
      } = UU, pU = tU.d.duplicateLobbyNameError;
      return (RU === pU.code || RU === qU) && (gU === pU.text || gU === pU.text + tU.k)
    }
    async function cU(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pU.b;
      for (let pU = 0;; pU++) {
        let PU;
        (0, EU.m)(RU);
        try {
          return await UU()
        } catch (tU) {
          if (PU = TU[pU], void 0 === PU || !KU(tU)) throw tU
        }
        await gU(PU, RU)
      }
    }
    const GU = new Set([tU.d.duplicateLobbyNameError.code, tU.d.lobbyCantBeCreated.code, tU.d.roomDisposedEarlyError.code, tU.d.roomDisposedLateError.code, tU.d.serverRoomLimitReached.code]);

    function jU(UU) {
      if (KU(UU)) return !0;
      const RU = (0, PU.d)(UU);
      return "number" === typeof RU && GU.has(RU)
    }
  },
  8522: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => EU,
      d: () => PU,
      g: () => TU,
      k: () => KU,
      l: () => qU
    });
    var tU = gU(189),
      pU = gU(4293);

    function EU(UU) {
      return PU(UU) === tU.d.gameOrPluginOnPlayerAuthRejected.code
    }

    function PU(UU) {
      return "object" === typeof UU && null !== UU ? UU.code : void 0
    }

    function TU(UU) {
      var RU;
      return null !== (RU = Object.keys(pU.b).find((RU => pU.b[RU] === UU))) && void 0 !== RU ? RU : null
    }

    function qU(UU) {
      return "notWhitelisted" === UU ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const KU = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  38703: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => PU
    });
    var tU = gU(299),
      pU = gU(135),
      EU = gU(34);

    function PU() {
      EU.k.setItem(tU.Eb, EU.k.getItem(tU.Eb) + 1), (0, pU.l)() && EU.k.setItem(tU.Ab, EU.k.getItem(tU.Ab) + 1)
    }
  },
  36027: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => WU,
      d: () => fU
    });
    var tU = gU(994),
      pU = gU(587),
      EU = gU(311),
      PU = gU(1002),
      TU = gU(603),
      qU = gU(641),
      KU = gU(4187),
      cU = gU(96),
      GU = gU(135),
      jU = gU(1637),
      uU = gU(115),
      CU = gU(36033),
      hU = gU(34),
      QU = gU(623),
      eU = gU(36042);

    function WU() {
      var UU, RU;
      return [...null !== (UU = navigator.languages) && void 0 !== UU ? UU : [null !== (RU = navigator.language) && void 0 !== RU ? RU : "none"], "en-Gb"]
    }

    function fU(UU, RU, gU, fU, xU) {
      const mU = (0, tU.m)(RU) ? (0, tU.q)(RU) : null,
        IU = {
          cookies: (0, jU.getAllCookiesForGameNameWithVariation)(RU),
          isMobile: (0, cU.isMobile)(),
          isUsingCustomGameTexturePack: null !== mU && xU(mU),
          generalCookies: {
            joinDiscord: !!hU.k.getItem("DiscordPressed"),
            newGo: KU.c,
            ...UU.getMetricsCookies(),
            trafficCode: fU,
            compliance: cU.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, cU.getBrowserName)(),
            version: (0, cU.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, cU.getPlatformType)(),
            deviceType: (0, uU.b)()
          },
          isLoggedIn: UU.isLoggedIn(),
          lobbyName: gU,
          languages: WU(),
          version: pU.d,
          siteUsed: GU.t,
          subsiteUsed: GU.A,
          playSessionId: (0, CU.f)(RU),
          visitSessionId: (0, QU.c)(),
          clientReason: TU.n.reason,
          budgetBasis: (0, eU.g)(),
          ...null !== qU.q && {
            diagClaim: qU.q.claimId
          }
        };
      return null !== mU && (0, EU.Fc)(mU) ? (IU.lobbyName = (0, tU.k)(mU, (0, tU.p)(RU), gU), {
        roomName: `classic_${PU.f}`,
        joinOptions: IU
      }) : {
        roomName: RU,
        joinOptions: IU
      }
    }
  },
  40047: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => TU
    });
    var tU = gU(39171);

    function pU(UU) {
      return {
        current: () => UU,
        watch: () => () => {}
      }
    }

    function EU() {}
    const PU = Object.freeze([0, 0, 0]),
      TU = {
        states: {
          health: pU({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: pU({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: pU({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: pU({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: pU({}),
          creativeVisibility: pU({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: pU(null),
          heldItemAim: pU({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: pU(!1),
          gliderBoostFuel: pU(0),
          flight: pU({
            canFly: !1,
            flying: !1
          }),
          crafting: pU({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: pU({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: pU({}),
          fullInventory: pU(!1),
          crosshairTarget: pU({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: pU(!0),
          freeCamera: pU({
            allowed: !1,
            movesFly: !1
          }),
          replay: pU(null),
          replayEdits: pU(null),
          replayRecorder: pU({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: pU(!1)
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
          selectHotbarSlot: EU,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: EU,
          setInventoryOpen: EU,
          changeIronChestPasskey: EU,
          dragReplayCamera: EU,
          applyTemporaryThirdPerson: EU,
          holdEmoteWheel: EU,
          recordFlyingMiddleText: EU,
          focusCrafting: EU,
          craftRecipe: () => ({
            Pc: 0,
            dc: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: EU,
          setShopOpen: EU,
          buyShopItem: EU,
          sendChatMessage: EU,
          ignorePlayer: EU,
          reportPlayer: EU,
          reportWorldCodeChat: EU,
          requestDiscordReportKey: EU,
          reportLobbyOrGame: EU,
          playEmote: EU,
          updateMyCosmetic: EU,
          writeOnBoard: EU,
          writeBook: EU,
          writeNameTag: EU,
          setCustomLobbyBlock: EU,
          openIronChest: EU,
          sendCodeCollab: EU,
          clickCodeBlock: EU,
          bindCustomButtonKeys: EU,
          pressCustomButton: EU,
          moveReplayFreecam: EU,
          holdReplayFreecamVertical: EU,
          respawn: EU,
          wakeUp: EU,
          requestLeaderboard: EU,
          completeTask: EU,
          setServerCookie: EU,
          answerUiRequest: EU,
          chooseRewardedAd: EU,
          setCameraZoom: EU,
          setFreeCameraMovesFly: EU,
          setBlockHighlight: EU,
          setCrosshairInteractPrompt: EU,
          setLookSensitivity: EU,
          replayAction: EU,
          setReplayPlaying: EU,
          seekReplay: EU,
          setReplayCameraMode: EU,
          syncReplayCameraMode: EU,
          setReplayCameraKeyframe: EU,
          moveReplayCameraKeyframe: EU,
          deleteReplayCameraKeyframes: EU,
          setReplayPlaybackMark: EU,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: EU,
          exportReplayVideo: EU,
          toggleRecording: EU,
          saveClip: EU,
          setRecorderPrefs: EU,
          setReplayViewerOpen: EU
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => tU.b,
          worldCodeAiGameState: () => tU.f
        },
        lookups: {
          localPos: () => PU,
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
  36042: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => IU,
      g: () => mU,
      h: () => xU
    });
    var tU = gU(189),
      pU = gU(96),
      EU = gU(2636),
      PU = gU(4062),
      TU = gU(607),
      qU = gU(36050);
    const KU = 1048576,
      cU = 1024 * KU,
      GU = 400 * KU,
      jU = 147456,
      uU = .5,
      CU = 1.5 * cU,
      hU = 768 * KU;

    function QU(UU) {
      return GU + UU * jU
    }

    function eU(UU, RU, gU) {
      var pU, PU;
      let {
        footprintBytes: TU,
        basis: KU,
        namesLimit: eU
      } = function(UU) {
        const {
          os: RU,
          deviceMemory: gU
        } = UU;
        if ("ios" === RU) switch ((0, EU.f)(UU)) {
          case "ipad_m":
            return {
              footprintBytes: QU(qU.e), basis: "ipad-m", namesLimit: !1
            };
          case "ipad":
            return {
              footprintBytes: hU, basis: "ipad", namesLimit: !0
            };
          case "iphone_6gb":
            return {
              footprintBytes: CU, basis: "iphone-6gb", namesLimit: !0
            };
          case "iphone":
            return {
              footprintBytes: hU, basis: "iphone", namesLimit: !0
            }
        }
        return "number" === typeof gU && Number.isFinite(gU) && gU > 0 ? {
          footprintBytes: gU * cU * uU,
          basis: `memory-${gU}`,
          namesLimit: !0
        } : "android" === RU ? {
          footprintBytes: hU,
          basis: "android",
          namesLimit: !0
        } : {
          footprintBytes: QU(qU.j),
          basis: "unreported",
          namesLimit: !1
        }
      }(UU);
      if (gU) {
        const UU = Math.min(TU, QU(qU.e));
        TU = GU + Math.max(0, UU - GU) / 2, KU += "+killed", eU = !0
      }
      null !== RU && QU(RU) < TU && (TU = QU(RU), KU += "+learned", eU = !0);
      const WU = function(UU) {
          const RU = Math.floor((UU - GU) / jU);
          return Math.min(qU.e, Math.max(qU.h, RU))
        }(TU),
        fU = (0, qU.p)(WU);
      return {
        footprintBytes: TU,
        shedFootprintBytes: eU ? Math.max(TU, QU(WU)) : null,
        chunkCap: WU,
        maxHorizDistance: null !== (pU = null === fU || void 0 === fU ? void 0 : fU.horizontal) && void 0 !== pU ? pU : tU.e.maxChunkHorizAddDistance,
        maxVertDistance: null !== (PU = null === fU || void 0 === fU ? void 0 : fU.vertical) && void 0 !== PU ? PU : tU.e.maxChunkVertAddDistance,
        basis: KU
      }
    }
    let WU = null;

    function fU() {
      return eU({
        os: (0, pU.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, EU.g)()
      }, (0, PU.f)(), (0, TU.D)("wasm").length > 0)
    }

    function xU() {
      return WU ??= fU(), WU
    }

    function mU() {
      var UU;
      return (null !== (UU = WU) && void 0 !== UU ? UU : fU()).basis
    }

    function IU(UU, RU) {
      return UU.setChunkCap(RU.chunkCap)
    }
  },
  40428: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => PU,
      d: () => EU
    });
    var tU = gU(2850),
      pU = gU(994);

    function EU(UU, RU) {
      return null !== UU.gameSource && (0, tU.p)(RU, UU.gameSource)
    }

    function PU(UU, RU) {
      if (null === UU.gameSource || "" === UU.gameSource || null === RU) return !0;
      const gU = (0, pU.m)(RU) ? (0, pU.q)(RU) : null;
      return null !== gU && EU(UU, gU)
    }
  },
  40411: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => TU
    });
    var tU = gU(567),
      pU = gU(40415),
      EU = gU(40369);
    async function PU(UU) {
      const RU = await (0, pU.f)({
        Helmet: gU(37496),
        Chestplate: gU(37504),
        Gauntlets: gU(37519),
        Leggings: gU(37513),
        Boots: gU(37515)
      } [tU.e[UU]]);
      try {
        return (0, EU.p)(RU)
      } finally {
        RU.close()
      }
    }
    const TU = new class {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PU,
          RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pU.i;
        this.decode = UU, this.register = RU, this.decoded = new Map
      }
      warm() {
        for (let UU = 0; UU < tU.e.length; UU++) this.part(UU).catch((RU => {
          console.warn(`The grayscale armour ${tU.e[UU]} image didn't decode ahead of use`, RU)
        }))
      }
      async load(UU, RU) {
        const {
          width: gU,
          height: EU,
          pixels: PU
        } = await this.part(UU), TU = new ImageData(function(UU, RU) {
          const gU = new Uint8ClampedArray(UU.length);
          for (let tU = 0; tU < UU.length; tU += 4) gU[tU] = Math.round(UU[tU] * RU[0] / 255), gU[tU + 1] = Math.round(UU[tU + 1] * RU[1] / 255), gU[tU + 2] = Math.round(UU[tU + 2] * RU[2] / 255), gU[tU + 3] = UU[tU + 3];
          return gU
        }(PU, function(UU) {
          return [UU >>> 16 & 255, UU >>> 8 & 255, 255 & UU]
        }(RU)), gU, EU);
        let qU;
        try {
          qU = await createImageBitmap(TU, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          })
        } catch (KU) {
          throw new pU.b("decode", `grayscale armour ${tU.e[UU]}`, {
            cause: KU
          })
        }
        return {
          id: this.register(qU),
          width: gU,
          height: EU
        }
      }
      part(UU) {
        const RU = this.decoded.get(UU);
        if (void 0 !== RU) return RU;
        const gU = this.decode(UU).catch((RU => {
          throw this.decoded.delete(UU), RU instanceof pU.b ? RU : new pU.b("decode", `grayscale armour ${tU.e[UU]}`, {
            cause: RU
          })
        }));
        return this.decoded.set(UU, gU), gU
      }
    }
  },
  40402: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => PU,
      f: () => QU,
      i: () => cU,
      j: () => GU,
      n: () => hU
    });
    var tU = gU(40352),
      pU = gU(40411),
      EU = gU(40415);
    const PU = 396,
      TU = 1,
      qU = 2,
      KU = 3,
      cU = {
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
      GU = {
        File: 0,
        Item: 1
      },
      jU = 0,
      uU = 1,
      CU = 2;

    function hU(UU) {
      const RU = (0, tU.l)();
      RU.catch((() => {}));
      let pU = null;
      return {
        glbUrl: UU,
        lifeformAtlasUrl: async UU => (await RU).lifeformAtlasUrl(UU),
        armourAtlasUrl: async () => (await gU.e(201).then((() => gU(33915)))).armourAtlasUrl,
        capeUrl: async UU => (await RU).capeUrl(UU),
        attachmentImageUrl: async UU => (await RU).attachmentImageUrl(UU),
        blockImageUrl: async UU => (await RU).blockImageUrl(UU),
        groupAtlasUrl: async UU => (await RU).groupAtlasUrl(UU),
        particleTextureUrl: async UU => (await RU).particleTextureUrl(UU),
        particleItemUrl: async UU => (pU ??= gU.e(38).then((() => gU(50991))).catch((UU => {
          throw pU = null, UU
        })), (await pU).particleItemUrl(UU))
      }
    }
    class QU {
      constructor(UU, RU) {
        var gU, PU, TU, qU;
        let KU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.sources = UU, this.onFailure = RU, this.loading = new Map, this.glbImages = new Map, this.glbWrittenImages = new Map, this.glbTakenCount = new Map, this.answered = new Map, this.ready = [], this.load = void 0, this.release = void 0, this.fetchFile = void 0, this.greyscaleArmour = void 0, this.pC = !1, this.load = null !== (gU = KU.load) && void 0 !== gU ? gU : (UU, RU) => (0, EU.g)(UU, KU.fetchImage, RU), this.release = null !== (PU = KU.release) && void 0 !== PU ? PU : EU.l, this.fetchFile = null !== (TU = KU.fetchFile) && void 0 !== TU ? TU : UU => (0, tU.h)(UU), this.greyscaleArmour = null !== (qU = KU.greyscaleArmour) && void 0 !== qU ? qU : pU.c
      }
      get waiting() {
        return this.ready.length
      }
      get inFlight() {
        return this.loading.size
      }
      glbWritten(UU, RU) {
        this.glbWrittenImages.set(UU, JU(RU))
      }
      glbTaken(UU, RU) {
        const gU = this.glbWrittenImages.get(UU);
        this.glbWrittenImages.delete(UU), RU && this.setGlbImages(UU, void 0 !== gU && gU.length > 0 ? gU : void 0)
      }
      setGlbImages(UU, RU) {
        var gU;
        this.glbTakenCount.set(UU, (null !== (gU = this.glbTakenCount.get(UU)) && void 0 !== gU ? gU : 0) + 1), void 0 === RU ? this.glbImages.delete(UU) : this.glbImages.set(UU, RU);
        const tU = [];
        for (const {
            key: pU
          }
          of this.loading.values()) pU.kind === cU.Glb && pU.word === UU && tU.push(pU);
        for (let pU = this.ready.length - 1; pU >= 0; pU--) {
          const {
            key: RU,
            id: gU
          } = this.ready[pU];
          RU.kind === cU.Glb && RU.word === UU && (this.ready.splice(pU, 1), null !== gU && (this.answered.delete(gU), this.release(gU)), tU.push(RU))
        }
        this.loadAgain(tU)
      }
      onEvent(UU) {
        if (this.pC) return;
        const RU = new DataView(UU.buffer, UU.byteOffset, UU.byteLength);
        for (let gU = 0; gU + 8 <= UU.byteLength; gU += 8) {
          const UU = RU.getUint8(gU),
            tU = RU.getUint32(gU + 4, !0);
          if (UU === KU) {
            this.answered.delete(tU), this.release(tU);
            continue
          }
          const pU = {
            kind: RU.getUint8(gU + 1),
            index: RU.getUint8(gU + 2),
            word: tU
          };
          UU === TU ? this.want(pU) : UU === qU && this.loading.delete(eU(pU))
        }
      }
      reload(UU, RU) {
        const gU = gU => UU.includes(gU.kind) && (void 0 === RU || RU(gU)),
          tU = new Map;
        for (const pU of this.answered.values()) gU(pU) && tU.set(eU(pU), pU);
        for (const [pU, {
            key: EU
          }] of this.loading) gU(EU) && tU.set(pU, EU);
        this.loadAgain(tU.values())
      }
      loadAgain(UU) {
        for (const RU of UU) this.loading.delete(eU(RU)), this.want(RU)
      }
      drain(UU) {
        if (null !== UU)
          for (; this.ready.length > 0;) {
            if (!UU(PU, 0, this.ready[0].record)) return;
            this.ready.shift()
          }
      }
      dispose() {
        this.pC = !0, this.loading.clear(), this.ready.length = 0;
        for (const UU of this.answered.keys()) this.release(UU);
        this.answered.clear()
      }
      want(UU) {
        const RU = eU(UU);
        if (this.loading.has(RU)) return;
        const gU = {
          key: UU
        };
        this.loading.set(RU, gU), this.loadKey(UU).then((tU => {
          this.pC || this.loading.get(RU) !== gU ? this.release(tU.id) : (this.loading.delete(RU), this.answered.set(tU.id, UU), this.ready.push({
            record: fU(UU, jU, tU),
            key: UU,
            id: tU.id
          }))
        }), (tU => {
          if (this.pC || this.loading.get(RU) !== gU) return;
          this.loading.delete(RU), this.onFailure({
            key: UU,
            error: tU
          });
          const pU = tU instanceof EU.b && "decode" === tU.stage ? uU : CU;
          this.ready.push({
            record: fU(UU, pU, null),
            key: UU,
            id: null
          })
        }))
      }
      async loadKey(UU) {
        switch (UU.kind) {
          case cU.Glb:
            return this.load(await this.glbImage(UU), "none");
          case cU.LifeformAtlas:
            return this.load(WU(await this.sources.lifeformAtlasUrl(UU.word), UU), "none");
          case cU.ArmourAtlas:
            return this.load(WU(await this.sources.armourAtlasUrl(), UU), "none");
          case cU.Cape:
            return this.load(WU(await this.sources.capeUrl(UU.word), UU), "none");
          case cU.AttachmentImage:
            return this.load(WU(await this.sources.attachmentImageUrl(UU.word), UU), "none");
          case cU.GroupAtlas:
            return this.load(WU(await this.sources.groupAtlasUrl(UU.word), UU), "none");
          case cU.BlockImage:
            return this.load(WU(await this.sources.blockImageUrl(UU.word), UU), "none");
          case cU.Particle: {
            const RU = await (UU.index === GU.Item ? this.sources.particleItemUrl(UU.word) : this.sources.particleTextureUrl(UU.word));
            return this.load(WU(RU, UU), "flipY")
          }
          case cU.GreyscaleArmour:
            return this.greyscaleArmour.load(UU.index, UU.word);
          default:
            throw new EU.b("fetch", `image kind ${UU.kind}`, {
              cause: null
            })
        }
      }
      async glbImage(UU) {
        var RU;
        let gU = this.glbImages.get(UU.word);
        if (void 0 === gU) {
          const RU = this.glbTakenCount.get(UU.word),
            tU = WU(await this.sources.glbUrl(UU.word), UU);
          try {
            gU = JU(await this.fetchFile(tU))
          } catch (pU) {
            throw new EU.b("fetch", tU, {
              cause: pU
            })
          }
          this.glbTakenCount.get(UU.word) === RU && this.glbImages.set(UU.word, gU)
        }
        const tU = null === (RU = gU) || void 0 === RU ? void 0 : RU[UU.index];
        if (!tU) throw new EU.b("decode", `image ${UU.index} of file ${2147483647&UU.word}`, {
          cause: null
        });
        return tU
      }
    }

    function eU(UU) {
      let {
        kind: RU,
        index: gU,
        word: tU
      } = UU;
      return `${RU}:${gU}:${tU}`
    }

    function WU(UU, RU) {
      if (null === UU) throw new EU.b("fetch", `no URL for image ${eU(RU)}`, {
        cause: null
      });
      return UU
    }

    function fU(UU, RU, gU) {
      var tU, pU, EU;
      const PU = new Uint8Array(16),
        TU = new DataView(PU.buffer);
      return TU.setUint8(0, UU.kind), TU.setUint8(1, UU.index), TU.setUint8(2, RU), TU.setUint32(4, UU.word, !0), TU.setUint32(8, null !== (tU = null === gU || void 0 === gU ? void 0 : gU.id) && void 0 !== tU ? tU : 0, !0), TU.setUint16(12, Math.min(null !== (pU = null === gU || void 0 === gU ? void 0 : gU.width) && void 0 !== pU ? pU : 0, 65535), !0), TU.setUint16(14, Math.min(null !== (EU = null === gU || void 0 === gU ? void 0 : gU.height) && void 0 !== EU ? EU : 0, 65535), !0), PU
    }
    const xU = 1179937895,
      mU = 1313821514,
      IU = 5130562;

    function JU(UU) {
      var RU;
      const gU = new DataView(UU.buffer, UU.byteOffset, UU.byteLength);
      if (UU.byteLength < 20 || gU.getUint32(0, !0) !== xU || gU.getUint32(16, !0) !== mU) return [];
      let tU, pU = 20 + gU.getUint32(12, !0);
      try {
        tU = JSON.parse((new TextDecoder).decode(UU.subarray(20, pU)))
      } catch {
        return []
      }
      for (; pU + 8 <= UU.byteLength && gU.getUint32(pU + 4, !0) !== IU;) pU += 8 + gU.getUint32(pU, !0);
      const EU = null !== (RU = tU.images) && void 0 !== RU ? RU : [];
      if (0 === EU.length || pU + 8 > UU.byteLength) return EU.map((() => null));
      const PU = UU.subarray(pU + 8, Math.min(UU.byteLength, pU + 8 + gU.getUint32(pU, !0)));
      return EU.map((UU => {
        var RU, gU, pU;
        const EU = void 0 === UU.bufferView || null === (RU = tU.bufferViews) || void 0 === RU ? void 0 : RU[UU.bufferView];
        if (!EU || 0 !== (null !== (gU = EU.buffer) && void 0 !== gU ? gU : 0) || void 0 === EU.byteLength) return null;
        const TU = null !== (pU = EU.byteOffset) && void 0 !== pU ? pU : 0,
          qU = TU + EU.byteLength;
        return qU <= PU.byteLength ? PU.slice(TU, qU) : null
      }))
    }
  },
  40049: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => PU,
      f: () => EU,
      j: () => pU
    });
    let tU = null;

    function pU(UU) {
      tU = UU
    }

    function EU(UU) {
      tU === UU && (tU = null)
    }

    function PU() {
      var UU;
      null === (UU = tU) || void 0 === UU || UU()
    }
  },
  36182: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => cU,
      h: () => jU,
      i: () => eU,
      m: () => KU
    });
    var tU = gU(21),
      pU = gU(2233),
      EU = gU(2241),
      PU = gU(2246),
      TU = gU(2292),
      qU = gU(24);

    function KU(UU, RU) {
      return (!(0, PU.e)() || 0 === UU && 0 === RU) && (0, EU.z)(pU.h.Joystick, 0, UU, RU, 0)
    }
    const cU = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function GU(UU) {
      return UU.classList.contains("TouchKeyHit") && uU() ? null : UU.firstElementChild
    }

    function jU(UU) {
      return UU.classList.contains("TouchKeyHit") && !UU.classList.contains("CanvasZone") ? {
        whole: !uU(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: CU(GU(UU))
      }
    }

    function uU() {
      return document.documentElement.classList.contains(TU.h)
    }

    function CU(UU) {
      return !(UU instanceof HTMLElement) || UU.offsetWidth <= 0 || UU.offsetHeight <= 0 ? null : {
        width: UU.offsetWidth,
        height: UU.offsetHeight
      }
    }

    function hU(UU, RU) {
      const gU = UU => Math.min(65535, Math.round(4 * UU));
      return (gU(UU) | gU(RU) << 16) >>> 0
    }

    function QU(UU) {
      return {
        x: UU.left + UU.width / 2,
        y: UU.top + UU.height / 2,
        radius: Math.min(UU.width, UU.height) / 2
      }
    }
    const eU = new class {
      constructor(UU) {
        this.write = UU, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        RU ? this.elements.set(UU, {
          element: RU,
          hidden: gU
        }) : this.elements.delete(UU), this.measureOne(UU)
      }
      measure() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = UU.left, this.canvasTop = UU.top;
        for (const RU of this.elements.keys()) this.measureOne(RU)
      }
      hitZone(UU, RU) {
        let gU = null,
          tU = 1;
        for (const pU of this.elements.keys()) {
          const EU = this.shown(pU);
          if (!EU) continue;
          const {
            rect: PU,
            element: TU
          } = EU, qU = QU(PU), KU = Math.max(0, PU.width / 2 - qU.radius), cU = Math.max(0, PU.height / 2 - qU.radius), jU = Math.max(0, Math.abs(UU - qU.x) - KU), uU = Math.max(0, Math.abs(RU - qU.y) - cU), hU = TU.firstElementChild;
          let eU = Math.hypot(jU, uU) / qU.radius;
          const WU = CU(GU(TU));
          WU && (eU = Math.min(eU, Math.max(2 * Math.abs(UU - qU.x) / WU.width, 2 * Math.abs(RU - qU.y) / WU.height))), eU < tU && (gU = {
            code: pU,
            element: TU,
            key: hU,
            ...qU
          }, tU = eU)
        }
        return gU
      }
      measureOne(UU) {
        const RU = this.shown(UU);
        if (!RU) return void this.write(pU.h.TouchZone, UU, 0, 0, 0);
        const {
          rect: gU,
          element: tU
        } = RU, EU = QU(gU);
        this.write(pU.h.TouchZone, UU, EU.x - this.canvasLeft, EU.y - this.canvasTop, hU(gU.width, gU.height));
        const PU = CU(GU(tU));
        this.write(pU.h.TouchZone, 256 | UU, 0, 0, PU ? hU(PU.width, PU.height) : 0)
      }
      shown(UU) {
        const RU = this.elements.get(UU),
          gU = tU.b.get("worldPanelHud");
        if (!RU || RU.hidden || "none" === gU) return null;
        const pU = RU.element.getBoundingClientRect();
        return pU.width <= 0 || pU.height <= 0 ? null : {
          rect: pU,
          element: RU.element
        }
      }
    }(EU.z);
    (0, qU.t)(TU.f, (() => {
      eU.measure()
    }))
  },
  40273: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => qU,
      h: () => KU
    });
    var tU = gU(40282),
      pU = gU(38618),
      EU = gU(36027),
      PU = gU(40201),
      TU = gU(40253);
    const qU = tU.d.timeForPlayerToConnect - 1e4;
    async function KU(UU, RU, gU, tU) {
      let qU;
      try {
        qU = await UU.getTrafficCode()
      } catch (CU) {
        throw console.error("[bloxd-wasm-client] could not get a traffic code", CU), new TU.w(CU)
      }
      const {
        gameNameWithVariation: KU,
        lobbyName: cU
      } = RU, GU = () => {
        const RU = (0, EU.d)(UU, KU, cU, qU, (UU => {
          var RU;
          return null !== (RU = null === gU || void 0 === gU ? void 0 : gU.isUsingCustomGameTexturePack(UU)) && void 0 !== RU && RU
        }));
        RU.joinOptions.wasmClient = !0;
        const pU = (0, PU.H)();
        return null !== pU && (RU.joinOptions.renderBackend = pU), RU.joinOptions.joinAdHold = tU, RU
      }, {
        roomName: jU,
        joinOptions: uU
      } = GU();
      return {
        endpoint: RU.endpoint,
        roomName: jU,
        joinOptions: uU,
        session: {
          gameNameWithVariation: KU,
          lobbyName: cU,
          playerDbId: UU.whamm
        },
        optionsAfterRefusal: async RU => await (0, pU.c)(UU, RU) ? GU().joinOptions : null
      }
    }
  },
  4711: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => TU,
      h: () => PU
    });
    var tU = gU(2850),
      pU = gU(4717);
    let EU = null;

    function PU(UU, RU) {
      EU = {
        pack: UU.metaData.id === tU.d ? null : UU,
        prompt: RU
      }
    }

    function TU(UU, RU) {
      const gU = EU;
      null !== gU && (0, pU.b)(gU.pack, UU) && (EU = null, RU && gU.prompt())
    }
  },
  40421: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => cU,
      d: () => EU,
      e: () => GU,
      i: () => PU
    });
    var tU = gU(40402),
      pU = gU(40352);
    const EU = new class {
      constructor() {
        this.page = null, this.session = void 0, this.follower = null, this.isWanted = !1, this.listeners = new Set, this.pageListeners = new Set, this.wantedListeners = new Set
      }
      get current() {
        return void 0 === this.session ? this.page : this.session
      }
      setPageFiles(UU) {
        this.change((() => {
          this.page = UU
        }))
      }
      setSessionFiles(UU) {
        const RU = void 0 !== this.session && void 0 === UU;
        if (this.change((() => {
            this.session = UU
          })), RU)
          for (const gU of [...this.pageListeners]) gU()
      }
      showsPage() {
        return void 0 === this.session
      }
      onPageShown(UU) {
        return this.pageListeners.add(UU), () => {
          this.pageListeners.delete(UU)
        }
      }
      setFollower(UU) {
        this.follower = UU, this.startFollower()
      }
      wanted() {
        this.isWanted = !0;
        for (const UU of [...this.wantedListeners]) UU();
        this.startFollower()
      }
      onWanted(UU) {
        return this.wantedListeners.add(UU), () => {
          this.wantedListeners.delete(UU)
        }
      }
      onChange(UU) {
        return this.listeners.add(UU), () => {
          this.listeners.delete(UU)
        }
      }
      startFollower() {
        const UU = this.follower;
        this.isWanted && null !== UU && (this.follower = null, UU((() => {
          this.follower = UU
        })))
      }
      change(UU) {
        const RU = this.current;
        if (UU(), this.current !== RU)
          for (const gU of this.listeners) gU()
      }
    };

    function PU(UU, RU) {
      return {
        ...UU,
        armourAtlasUrl: () => {
          var gU, tU;
          return null !== (gU = null === (tU = RU()) || void 0 === tU ? void 0 : tU.armourAtlasUrl()) && void 0 !== gU ? gU : UU.armourAtlasUrl()
        },
        lifeformAtlasUrl: gU => qU(RU(), (UU => UU.LIFEFORM_ATLAS_PATHS[gU]), (() => UU.lifeformAtlasUrl(gU))),
        groupAtlasUrl: gU => qU(RU(), (UU => UU.GROUP_ATLAS_PATHS[gU]), (() => UU.groupAtlasUrl(gU))),
        particleItemUrl: tU => KU(RU(), (async () => {
          const UU = await gU.e(38).then((() => gU(50991))).catch((() => null));
          return (null === UU || void 0 === UU ? void 0 : UU.particleItemSprite(tU)) || null
        }), (() => UU.particleItemUrl(tU))),
        blockImageUrl: gU => KU(RU(), (async () => {
          var UU, RU;
          return null !== (UU = null === (RU = await TU()) || void 0 === RU ? void 0 : RU.blockImageName(gU)) && void 0 !== UU ? UU : null
        }), (() => UU.blockImageUrl(gU)))
      }
    }

    function TU() {
      return (0, pU.l)().catch((() => null))
    }

    function qU(UU, RU, gU) {
      return KU(UU, (async () => {
        var UU;
        const gU = await TU(),
          tU = null === gU ? null : RU(gU),
          pU = null !== (UU = null === tU || void 0 === tU ? void 0 : tU.slice(tU.lastIndexOf("/") + 1)) && void 0 !== UU ? UU : null;
        return "Player_Atlas" === pU ? null : pU
      }), gU)
    }
    async function KU(UU, RU, gU) {
      if (null !== UU) {
        const gU = await RU(),
          tU = null === gU ? null : UU.textureUrl(gU);
        if (null !== tU) return tU
      }
      return gU()
    }
    const cU = 0;

    function GU(UU) {
      const RU = [tU.i.ArmourAtlas, tU.i.LifeformAtlas, tU.i.GroupAtlas, tU.i.BlockImage, tU.i.Particle];
      UU.reload(RU, (UU => {
        switch (UU.kind) {
          case tU.i.Particle:
            return UU.index === tU.j.Item;
          case tU.i.LifeformAtlas:
            return UU.word !== cU;
          default:
            return !0
        }
      }))
    }
  },
  40285: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => tU,
      c: () => TU,
      g: () => PU,
      j: () => pU,
      k: () => EU
    });
    const tU = 1e3;

    function pU() {
      qU((() => {
        window.location.reload()
      }))
    }

    function EU() {
      return new Promise((() => {}))
    }

    function PU(UU) {
      qU((() => {
        window.location.replace(UU(window.location.href))
      }))
    }

    function TU(UU) {
      Promise.resolve().then((() => gU(109))).then((RU => {
        let {
          currentUrl: gU
        } = RU;
        PU((() => gU.mergeSearchParamsInto(UU)))
      }), (() => {
        PU((() => UU))
      }))
    }

    function qU(UU) {
      null !== window.onbeforeunload ? Promise.resolve().then((() => gU(1637))).then((RU => {
        let {
          prepareForUnloadWithoutConfirmation: gU
        } = RU;
        try {
          gU()
        } catch (tU) {
          console.warn("[bloxd-wasm-client] prepareForUnloadWithoutConfirmation threw: leaving plainly", tU), window.onbeforeunload = null
        }
        UU()
      }), (() => {
        window.onbeforeunload = null, UU()
      })) : UU()
    }
  },
  4717: (UU, RU, gU) => {
    function tU(UU, RU) {
      return pU(UU, RU)
    }

    function pU(UU, RU) {
      if (UU === RU) return !0;
      if ("object" !== typeof UU || "object" !== typeof RU || null === UU || null === RU || Array.isArray(UU) !== Array.isArray(RU)) return !1;
      const gU = UU,
        tU = RU,
        EU = Object.keys(gU);
      return EU.length === Object.keys(tU).length && EU.every((UU => Object.prototype.hasOwnProperty.call(tU, UU) && pU(gU[UU], tU[UU])))
    }
    gU.d(RU, {
      b: () => tU
    })
  },
  40316: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => JU,
      g: () => mU,
      h: () => QU,
      l: () => hU
    });
    var tU = gU(1698),
      pU = gU(1704),
      EU = gU(38611),
      PU = gU(38621),
      TU = gU(1675),
      qU = gU(40244),
      KU = gU(40253);
    const cU = {
        "X-Requested-With": "XMLHtttpRequest"
      },
      GU = 3,
      jU = [500, 1500];

    function uU(UU) {
      const RU = new URL(UU);
      return {
        secure: "https:" === RU.protocol || "wss:" === RU.protocol,
        host: RU.host,
        pathname: RU.pathname.replace(/\/+$/, ""),
        search: RU.searchParams.toString()
      }
    }

    function CU(UU, RU, gU) {
      const {
        secure: tU,
        host: pU,
        pathname: EU,
        search: PU
      } = uU(UU);
      return `${tU?"https":"http"}://${pU}${EU}/matchmake/${RU}/${encodeURIComponent(gU)}${PU?`?${PU}`:""}`
    }

    function hU(UU, RU) {
      var gU;
      const tU = null !== (gU = RU.protocol) && void 0 !== gU ? gU : "ws";
      if ("ws" !== tU) throw new Error(`seat reservation asks for the ${tU} transport`);
      const {
        secure: pU,
        host: EU,
        pathname: PU,
        search: TU
      } = uU(UU), qU = new URLSearchParams(TU);
      qU.append("sessionId", RU.sessionId), RU.reconnectionToken && qU.append("reconnectionToken", RU.reconnectionToken);
      return `${pU?"wss":"ws"}://${RU.room.publicAddress||`${EU}${PU}`}/${RU.room.processId}/${RU.room.roomId}?${qU.toString()}`
    }
    async function QU(UU, RU, gU) {
      var qU;
      let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const uU = null !== (qU = cU.sleep) && void 0 !== qU ? qU : tU.b,
        hU = new pU.d(cU.signal),
        QU = new TU.d(PU.d, (() => {
          (0, pU.j)(hU.controller, new PU.e)
        })),
        {
          signal: xU
        } = hU;
      try {
        return await (0, EU.h)((() => async function(UU, RU, gU, tU) {
          var EU;
          const {
            signal: PU,
            sleep: TU
          } = tU, qU = CU(UU, "joinOrCreate", RU), cU = JSON.stringify(gU);
          let uU = null;
          for (let CU = 0; CU < GU; CU++) {
            var hU;
            if (CU > 0) await TU(null !== (hU = jU[CU - 1]) && void 0 !== hU ? hU : 1500, PU);
            let UU;
            (0, pU.m)(PU);
            try {
              UU = await WU(qU, cU, tU)
            } catch (QU) {
              (0, pU.m)(PU), uU = eU(QU);
              continue
            }
            const {
              response: RU,
              answer: gU,
              refusal: EU,
              lost: GU
            } = UU;
            if (null === GU) {
              if (null !== EU) throw fU(EU, gU);
              if (RU.ok && null !== gU && wU(gU)) return gU;
              uU = new KU.t(`seat request answered HTTP ${RU.status}${null===gU?" without JSON":" without a seat"}`, !1)
            } else uU = eU(GU.error)
          }
          throw null !== (EU = uU) && void 0 !== EU ? EU : new KU.t("seat request made no attempt", !1)
        }(UU, RU, gU, {
          ...cU,
          signal: xU,
          sleep: uU
        })), xU, uU)
      } finally {
        QU.stop(), hU.unfollow()
      }
    }

    function eU(UU) {
      return new KU.t(UU instanceof Error ? UU.message : String(UU), !0, UU)
    }
    async function WU(UU, RU, gU) {
      var tU;
      const {
        signal: EU
      } = gU, PU = null !== (tU = gU.fetch) && void 0 !== tU ? tU : fetch, TU = await PU(UU, {
        method: "POST",
        headers: {
          ...cU,
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: RU,
        credentials: "include",
        signal: EU
      }), {
        answer: qU,
        lost: KU
      } = await async function(UU) {
        try {
          const RU = await UU.json();
          return {
            answer: "object" === typeof RU && null !== RU ? RU : null,
            lost: null
          }
        } catch (RU) {
          return {
            answer: null,
            lost: RU instanceof SyntaxError ? null : {
              error: RU
            }
          }
        }
      }(TU), GU = null !== qU && "string" === typeof qU.error ? qU.error : null;
      var jU;
      null !== GU && (null === (jU = gU.onRefusal) || void 0 === jU || jU.call(gU));
      return (0, pU.m)(EU), {
        response: TU,
        answer: qU,
        refusal: GU,
        lost: KU
      }
    }

    function fU(UU, RU) {
      return new KU.j(UU, "number" === typeof(null === RU || void 0 === RU ? void 0 : RU.code) ? RU.code : 0, (0, qU.n)(UU).text)
    }
    class xU extends Error {
      constructor(UU, RU) {
        super(UU), this.code = RU, this.name = "SeatHttpError"
      }
    }
    async function mU(UU, RU, gU) {
      let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        response: pU,
        answer: EU,
        refusal: PU,
        lost: TU
      } = await WU(CU(UU, "reconnect", RU), JSON.stringify({
        reconnectionToken: gU
      }), tU);
      if (null !== TU) throw TU.error;
      if (!pU.ok) {
        const UU = null !== EU && "number" === typeof EU.code && 0 !== EU.code ? EU.code : pU.status;
        throw new xU(`the seat's reconnect was refused: ${null!==PU&&void 0!==PU?PU:`HTTP ${pU.status}`}`, UU)
      }
      if (null !== PU) throw fU(PU, EU);
      if (null === EU || !wU(EU)) throw new Error("the seat's reconnect answered " + (null === EU ? "without JSON" : "without a seat"));
      return {
        ...EU,
        reconnectionToken: gU
      }
    }
    const IU = 10;

    function JU(UU) {
      if (UU.byteLength < 2 || UU[0] !== IU) return null;
      const RU = 2 + UU[1];
      return RU > UU.byteLength ? null : (new TextDecoder).decode(UU.subarray(2, RU))
    }

    function wU(UU) {
      const RU = UU.room;
      return "string" === typeof UU.sessionId && "object" === typeof RU && null !== RU && "string" === typeof RU.roomId && "string" === typeof RU.processId && "string" === typeof RU.name
    }
  },
  39974: (UU, RU, gU) => {
    gU.d(RU, {
      $: () => WU,
      A: () => nU,
      D: () => JU,
      H: () => aU,
      K: () => xU,
      O: () => mU,
      Q: () => QU,
      T: () => bU,
      W: () => BU,
      Z: () => CU,
      _: () => rU,
      db: () => eU,
      e: () => pU,
      fb: () => fU,
      g: () => VU,
      gb: () => IU,
      h: () => YU,
      k: () => uU,
      o: () => hU,
      r: () => ZU,
      t: () => wU,
      x: () => oU
    });
    var tU = gU(2683);
    const pU = {
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

    function EU(UU, RU) {
      return !ArrayBuffer.isView(UU) || UU instanceof DataView ? Array.isArray(UU) ? UU.map((UU => RU(UU))) : UU : Array.from(UU, (UU => RU(UU)))
    }

    function PU(UU) {
      if ("string" !== typeof UU) return UU;
      for (let RU = 0; RU < UU.length; RU++) {
        const gU = UU.charCodeAt(RU);
        if (gU >= 55296 && gU <= 57343) return qU.decode(TU.encode(UU))
      }
      return UU
    }
    const TU = new TextEncoder,
      qU = new TextDecoder;

    function KU(UU) {
      return UU
    }
    let cU;

    function GU(UU) {
      return null === UU || "object" !== typeof UU ? UU : [PU(UU.gP), PU(UU.tP)]
    }

    function jU(UU) {
      return null === UU || "object" !== typeof UU ? UU : [EU(UU.iE, KU), EU(UU.CK, KU)]
    }

    function uU(UU) {
      return null === (RU = UU) || "object" !== typeof RU ? RU : [PU(RU.aP), PU(RU.YP)];
      var RU
    }

    function CU(UU) {
      return null === (RU = UU) || "object" !== typeof RU ? RU : [RU.id, RU.GP];
      var RU
    }

    function hU(UU) {
      return null === (RU = UU) || "object" !== typeof RU ? RU : [RU.uR, PU(RU.CR), RU.hR, PU(RU.WR), RU.IR, RU.JR, RU.bP, PU(RU.oP), PU(RU.ZP)];
      var RU
    }

    function QU(UU) {
      return null === (RU = UU) || "object" !== typeof RU ? RU : [EU(RU.Rc, KU), RU.gc];
      var RU
    }

    function eU(UU) {
      return null === (RU = UU) || "object" !== typeof RU ? RU : [EU(RU.CT, (UU => PU(UU))), PU(RU.hT), RU.QT];
      var RU
    }

    function WU(UU) {
      return null === (RU = UU) || "object" !== typeof RU ? RU : [EU(RU.jP, KU), PU(RU.uP), RU.CP];
      var RU
    }

    function fU(UU) {
      return null === (RU = UU) || "object" !== typeof RU ? RU : [PU(RU.Xg), PU(RU.vg)];
      var RU
    }

    function xU(UU) {
      return null === (RU = UU) || "object" !== typeof RU ? RU : [PU(RU.qT)];
      var RU
    }

    function mU(UU) {
      return PU(UU)
    }

    function IU(UU) {
      return null === (RU = UU) || "object" !== typeof RU ? RU : [PU(RU.Vc), PU(RU.Xc), PU(RU.gP), PU(RU.tP)];
      var RU
    }

    function JU(UU) {
      return GU(UU)
    }

    function wU(UU) {
      return GU(UU)
    }

    function nU(UU) {
      return null === (RU = UU) || "object" !== typeof RU ? RU : [PU(RU.BP)];
      var RU
    }

    function bU(UU) {
      return UU
    }

    function oU(UU) {
      return null === (RU = UU) || "object" !== typeof RU ? RU : [PU(RU.PP), PU(RU.TP)];
      var RU
    }

    function ZU(UU) {
      return PU(UU)
    }

    function aU(UU) {
      return jU(UU)
    }

    function YU(UU) {
      return jU(UU)
    }

    function BU(UU) {
      return null === (RU = UU) || "object" !== typeof RU ? RU : [PU(RU.jT)];
      var RU
    }

    function VU(UU) {
      return (cU ??= (0, tU.e)().map((UU => UU.name)), cU).map((RU => {
        return "string" === typeof(gU = UU[RU]) ? PU(gU) : EU(gU, KU);
        var gU
      }))
    }

    function rU(UU) {
      return null === (RU = UU) || "object" !== typeof RU ? RU : [RU.xT, RU.mT, RU.IT];
      var RU
    }
  },
  40425: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => EU
    });
    var tU = gU(40428),
      pU = gU(40421);
    const EU = new class {
      constructor(UU) {
        this.pack = UU, this.game = void 0, this.settle = null, this.hold = null, this.endedWhileHeld = !1, this.gameListeners = new Set, UU.onWanted((() => {
          this.release()
        }))
      }
      setGame(UU) {
        if (void 0 === UU && null !== this.hold) return void(this.endedWhileHeld = !0);
        this.hold = null, this.endedWhileHeld = !1;
        const RU = this.inGame();
        if (this.game = UU, this.update(), this.inGame() !== RU)
          for (const gU of this.gameListeners) gU()
      }
      inGame() {
        return void 0 !== this.game
      }
      onGameChange(UU) {
        return this.gameListeners.add(UU), () => {
          this.gameListeners.delete(UU)
        }
      }
      unwantedLeave(UU) {
        UU && void 0 !== this.game ? this.hold = {
          game: this.game
        } : this.release()
      }
      rejoinHold() {
        return this.hold
      }
      releaseHold(UU) {
        null !== UU && UU === this.hold && this.release()
      }
      release() {
        if (null === this.hold) return;
        const UU = this.endedWhileHeld;
        this.hold = null, this.endedWhileHeld = !1, UU && this.setGame(void 0)
      }
      setSettled(UU) {
        this.settle = UU, this.update()
      }
      update() {
        void 0 === this.game ? this.pack.setSessionFiles(void 0) : null !== this.settle && (0, tU.b)(this.settle.state, this.game) && this.pack.setSessionFiles(this.settle.files)
      }
    }(pU.d)
  },
  40241: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      followPageUiPack: () => ZK,
      packForGame: () => oK,
      playWasmGame: () => yK,
      prefetchWasmPreviews: () => yT,
      setGamePackConfirm: () => Dq,
      startWasmPlay: () => rK,
      startWasmPreviews: () => sT
    });
    var tU = gU(189),
      pU = gU(1240),
      EU = gU(165),
      PU = gU(38631),
      TU = gU(1800),
      qU = gU(24),
      KU = gU(4336),
      cU = gU(1305),
      GU = gU(1629),
      jU = gU(1316),
      uU = gU(38771),
      CU = gU(38787),
      hU = gU(38703),
      QU = gU(36033),
      eU = gU(38611),
      WU = gU(8522),
      fU = gU(38621),
      xU = gU(40067),
      mU = gU(4443),
      IU = gU(39971),
      JU = gU(40047),
      wU = gU(39974);
    const nU = {
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

    function bU(UU) {
      const RU = {
        ...JU.b[UU]
      };
      for (const gU of Object.keys(nU[UU])) delete RU[gU];
      return RU
    }

    function oU() {
      var UU, RU;
      return null === (UU = null === (RU = (0, IU.i)()) || void 0 === RU ? void 0 : RU.localPlayerAlive()) || void 0 === UU || UU
    }

    function ZU() {
      var UU, RU;
      return null !== (UU = null === (RU = (0, IU.i)()) || void 0 === RU ? void 0 : RU.localDeaths()) && void 0 !== UU ? UU : null
    }
    const aU = {
        current: oU,
        watch: UU => {
          let RU = oU(),
            gU = ZU();
          return (0, mU.x)((() => {
            const tU = oU(),
              pU = ZU(),
              EU = null !== pU && null !== gU && pU !== gU;
            gU = pU, EU ? (RU || UU(!0), UU(!1), tU && UU(!0), RU = tU) : tU !== RU && (RU = tU, UU(tU))
          }))
        }
      },
      YU = {
        states: {
          ...bU("states"),
          localPlayerAlive: aU
        },
        events: {
          ...bU("events"),
          localPlayerAliveSet: {
            watch: aU.watch
          }
        },
        commands: {
          ...bU("commands"),
          respawn: () => {
            var UU;
            null === (UU = (0, IU.i)()) || void 0 === UU || UU.respawn()
          },
          playEmote: UU => {
            var RU;
            null === (RU = (0, IU.i)()) || void 0 === RU || RU.send(wU.e.PlayEmote, (0, wU.K)({
              qT: UU
            }))
          },
          applyTemporaryThirdPerson: UU => {
            var RU;
            let {
              durationMs: gU
            } = UU;
            null === (RU = (0, IU.i)()) || void 0 === RU || RU.thirdPersonFor(gU)
          },
          bindCustomButtonKeys: UU => {
            var RU;
            null === (RU = (0, IU.i)()) || void 0 === RU || RU.bindCustomButtonKeys(UU)
          },
          pressCustomButton: UU => {
            var RU;
            let {
              id: gU,
              down: tU
            } = UU;
            null === (RU = (0, IU.i)()) || void 0 === RU || RU.pressCustomButton(gU, tU)
          },
          setLookSensitivity: () => {},
          wakeUp: UU => {
            const RU = (0, wU.W)({
                jT: UU
              }),
              gU = () => {
                const UU = (0, IU.i)();
                return !(null !== UU && void 0 !== UU && UU.isSessionLive) || UU.send(wU.e.StopSleeping, RU)
              };
            if (!gU()) {
              const UU = (0, mU.x)((() => {
                gU() && UU()
              }))
            }
          },
          setCameraZoom: UU => {
            var RU;
            null === (RU = (0, IU.i)()) || void 0 === RU || RU.setCameraZoom(UU)
          }
        },
        queries: bU("queries"),
        lookups: {
          ...bU("lookups"),
          cameraZoom: () => {
            var UU, RU;
            return null !== (UU = null === (RU = (0, IU.i)()) || void 0 === RU ? void 0 : RU.cameraZoom()) && void 0 !== UU ? UU : 0
          }
        }
      };
    var BU = gU(40244),
      VU = gU(40253),
      rU = gU(40262),
      XU = gU(40273),
      vU = gU(1257),
      dU = gU(109),
      HU = gU(4187),
      SU = gU(3394),
      sU = gU(1165);
    const yU = {
      Uc: () => (0, vU.d)(),
      inbuiltOverwritten: () => HU.e,
      reflectApplyHit: () => sU.b,
      definerHit: () => dU.currentUrl.c,
      emitReplaced: () => (0, qU.e)(),
      confirmMesh: () => (0, SU.e)()
    };
    var kU = gU(40265),
      FU = gU(40285);
    var iU = gU(21),
      AU = gU(1802),
      zU = gU(1844),
      MU = gU(1570),
      DU = gU(1875),
      LU = gU(1181),
      NU = gU(1249),
      lU = gU(40218);

    function OU() {
      return NU.g.get().getCurrentLanguageCode()
    }

    function UR(UU) {
      const RU = () => {
        UU({
          translate: (UU, RU) => (0, LU.v)(OU(), UU, RU),
          keyBindingText: UU => {
            const RU = (0, zU.q)(UU, iU.b.get("isTouchScreen"));
            return null !== RU ? (0, LU.x)(OU(), RU.translationKey, RU.params) : (0, zU.m)((0, zU.n)(UU))
          },
          isFriend: DU.g,
          hiddenNames: AU.b.shown,
          loadsFontRest: (0, lU.e)(OU())
        })
      };
      let gU = !1;
      const tU = () => {
          const UU = OU();
          (0, LU.j)(UU).then((() => {
            gU || UU !== OU() || RU()
          }))
        },
        pU = () => MU.b.getSocialState().friends.map((UU => UU.name.toLowerCase())).sort().join(" ");
      let EU = pU();
      RU(), tU();
      const PU = [(0, NU.k)((() => {
        RU(), tU()
      })), (0, qU.t)("customBindingsChanged", RU), (0, qU.t)("appManagerUpdated|isTouchScreen", RU), (0, DU.c)((() => {
        const UU = pU();
        UU !== EU && (EU = UU, RU())
      })), AU.b.subscribe(RU)];
      return () => {
        gU = !0;
        for (const UU of PU) UU()
      }
    }
    var RR = gU(587),
      gR = gU(994),
      tR = gU(1823),
      pR = gU(299),
      ER = gU(3372),
      PR = gU(35912),
      TR = gU(3377),
      qR = gU(38287),
      KR = gU(4352),
      cR = gU(40150),
      GR = gU(603),
      jR = gU(657),
      uR = gU(663),
      CR = gU(1821),
      hR = gU(3396),
      QR = gU(2966);
    let eR = null;
    var WR = gU(1196),
      fR = gU(1704),
      xR = gU(4091),
      mR = gU(3149),
      IR = gU(54),
      JR = gU(291),
      wR = gU(274),
      nR = gU(40096),
      bR = gU(4446);
    var oR = gU(40291);
    class ZR {
      constructor(UU, RU) {
        this.showView = UU, this.holdForAd = RU
      }
      pointerUnlockRequestsChanged() {
        (0, nR.A)()
      }
      pointerLockDebugEntries() {
        return [{
          label: "Locked to the canvas",
          value: String((0, nR.q)())
        }]
      }
      setGameViewShown(UU) {
        this.showView(UU)
      }
      setGameView(UU) {
        (0, oR.j)(UU)
      }
      videoAdHold(UU, RU) {
        this.holdForAd(UU, RU)
      }
    }
    class aR {
      leave(UU) {
        ! function(UU) {
          if (null !== (0, jU.d)().websocketUrl) try {
            (0, mU.J)().leaveGame(UU)
          } finally {
            (0, jU.m)({
              websocketUrl: null
            })
          }
        }(UU)
      }
      isReplay() {
        return !1
      }
    }
    class YR {
      watchFrameStarts(UU) {
        return (0, mU.s)(UU)
      }
      watchFrames(UU) {
        return (0, mU.o)(UU)
      }
      watchTicks(UU) {
        return (0, mU.x)(UU)
      }
    }
    var BR = gU(1293),
      VR = gU(40293);

    function rR(UU) {
      return UU >= 0 ? Math.min(1, UU) : 0
    }

    function XR(UU, RU) {
      const {
        fade: gU
      } = UU;
      return null === gU || RU - gU.at >= gU.ms ? UU.volume : gU.from + (UU.volume - gU.from) * Math.max(0, (RU - gU.at) / gU.ms)
    }

    function vR(UU) {
      const RU = Object.entries(UU),
        gU = new Uint32Array(RU.length);
      let tU = 0;
      for (const [PU, [, TU]] of RU.entries()) gU[PU] = TU.length, tU += TU.length;
      const pU = new Float64Array(3 * tU);
      let EU = 0;
      for (const [, PU] of RU)
        for (const UU of PU) pU.set(UU, EU), EU += 3;
      return {
        blocks: RU.map((UU => {
          let [RU] = UU;
          return RU
        })).join("\0"),
        counts: gU,
        values: pU
      }
    }
    class dR {
      constructor(UU, RU) {
        this.core = UU, this.warn = RU, this.latest = 0
      }
      async feed() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : HR;
        const RU = ++this.latest;
        let gU;
        try {
          gU = await UU()
        } catch (tU) {
          return void(this.core.isStopped || RU !== this.latest || this.warn("the block colours didn't load, so block particles draw grey", tU))
        }
        RU === this.latest && (this.core.setBlockColours(gU) || this.core.isStopped || this.warn("the core refused the block colours: block particles draw grey"))
      }
    }
    async function HR() {
      return vR((await gU.e(201).then((() => gU(33915)))).averageColors)
    }
    var SR = gU(4449),
      sR = gU(4456),
      yR = gU(40022),
      kR = gU(35886),
      FR = gU(40203),
      iR = gU(572),
      AR = gU(36564),
      zR = gU(567),
      MR = gU(311),
      DR = gU(40177);
    const LR = [3e4, 12e4, 3e5];
    class NR extends Error {}
    const lR = {
      mobTypes: iR.j,
      vehicleTypes: AR.e,
      mobAiStates: iR.h,
      playerPoses: zR.r
    };
    var OR = gU(40166),
      Ug = gU(40295),
      Rg = gU(40308),
      gg = gU(40312),
      tg = gU(3165),
      pg = gU(38598),
      Eg = gU(4477),
      Pg = gU(2233);
    const Tg = Pg.z.KeysDisabled | Pg.z.LookFrozen | Pg.z.ClicksSuppressed,
      qg = tg.h;
    var Kg = (0, gg.d)("resumingConn");
    class cg {
      constructor(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.shell = UU, this.now = RU, this.session = void 0, this.attempt = null, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, Object.defineProperty(this, Kg, {
          writable: !0,
          value: 0
        }), this.drops = 0, this.session = new pg.e({
          reconnect: UU => this.reconnect(UU),
          isLive: () => UU.isLive(),
          onReconnected: RU => {
            this.landed = RU, UU.onReconnected(RU), this.landIfResumed()
          },
          onGaveUp: (RU, gU) => {
            this.abortAttempt(), UU.onGaveUp(RU, gU)
          },
          freeze: RU => {
            UU.HJ(RU), (0, Eg.f)(Tg, RU ? Tg : 0, "reconnectFreeze")
          },
          releaseSeat: UU => {
            this.releaseSeat(UU)
          }
        })
      }
      isResuming() {
        return this.session.isResuming()
      }
      get resumingConn() {
        return (0, Rg.b)(this, Kg)[Kg]
      }
      canHoldSeat() {
        return this.session.canHoldSeat()
      }
      onInitialInfo(UU) {
        let {
          conn: RU,
          graceMs: gU,
          sessionBased: tU,
          replayOffer: pU
        } = UU;
        this.session.onInitialInfo(gU, tU), this.isResuming() && (this.initialInfoConn = RU, this.initialInfoOffer = pU, this.landIfResumed())
      }
      onResumeComplete(UU) {
        0 !== UU && (UU === (0, Rg.b)(this, Kg)[Kg] ? ((0, Rg.b)(this, Kg)[Kg] = 0, this.session.onResumed()) : this.isResuming() && (this.completedEarlyConn = UU))
      }
      onDropped(UU) {
        this.drops++, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, (0, Rg.b)(this, Kg)[Kg] = 0, this.session.onConnectionLost(UU)
      }
      leave() {
        this.session.leave(), this.dispose()
      }
      dispose() {
        this.abortAttempt(), this.landed = null, this.completedEarlyConn = 0, (0, Rg.b)(this, Kg)[Kg] = 0, this.session.end()
      }
      reconnect(UU) {
        const RU = this.attempt;
        if (null !== RU && this.awaitingJoinRoom(RU)) return RU.result;
        this.abortAttempt();
        const gU = new AbortController,
          tU = this.drops,
          pU = {
            attachedAt: null
          },
          EU = this.shell.reconnect(UU, gU.signal, (() => {
            pU.attachedAt = this.now()
          })).then((UU => {
            if (this.clearAttempt(PU), this.drops !== tU) throw new Error("the resumed room dropped before its attempt settled");
            return UU
          }), (UU => {
            throw this.clearAttempt(PU), UU
          })),
          PU = {
            abort: gU,
            socket: pU,
            result: EU
          };
        return this.attempt = PU, EU
      }
      clearAttempt(UU) {
        this.attempt === UU && (this.attempt = null)
      }
      abortAttempt() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new DOMException("the reconnect attempt was given up", "AbortError");
        const RU = this.attempt;
        this.attempt = null, null === RU || void 0 === RU || RU.abort.abort(UU)
      }
      awaitingJoinRoom(UU) {
        const RU = UU.socket.attachedAt;
        return null !== RU && this.now() - RU < qg
      }
      releaseSeat(UU) {
        const RU = this.attempt,
          gU = null !== RU && this.awaitingJoinRoom(RU);
        this.abortAttempt(new VU.p), gU || this.shell.releaseSeat(UU)
      }
      landIfResumed() {
        const UU = this.landed;
        if (null !== UU && UU.conn === this.initialInfoConn) {
          const RU = this.initialInfoOffer && this.completedEarlyConn !== UU.conn;
          if (this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, this.abortAttempt(), !RU) return void this.session.onResumed();
          (0, Rg.b)(this, Kg)[Kg] = UU.conn, this.session.onResuming()
        }
      }
    }
    var Gg = gU(38603),
      jg = gU(40316),
      ug = gU(36050),
      Cg = gU(36042),
      hg = gU(4711),
      Qg = gU(4075),
      eg = gU(2959),
      Wg = gU(40110),
      fg = gU(607),
      xg = gU(4169),
      mg = gU(34),
      Ig = gU(40319),
      Jg = gU(40365),
      wg = gU(4105),
      ng = gU(2241),
      bg = gU(1567),
      og = gU(1591),
      Zg = gU(1287),
      ag = gU(115),
      Yg = gU(2594),
      Bg = gU(2246),
      Vg = gU(4469);
    const rg = new Set([SR.vb.KeyDown, SR.vb.MouseMove, SR.vb.MouseDown, SR.vb.Wheel, SR.vb.TouchStart, SR.vb.TouchMove]);

    function Xg(UU) {
      return (UU.shiftKey ? SR.Lb.Shift : 0) | (UU.ctrlKey ? SR.Lb.Ctrl : 0) | (UU.altKey ? SR.Lb.Alt : 0) | (UU.metaKey ? SR.Lb.Meta : 0) | ("repeat" in UU && UU.repeat ? SR.Lb.Repeat : 0) | (UU.isTrusted ? 0 : SR.Lb.Untrusted)
    }

    function vg(UU) {
      return "touchOnly" !== (0, ag.b)() && "function" === typeof UU.requestPointerLock
    }

    function dg(UU) {
      return 0 === UU.button ? UU.altKey ? Vg.n["Alt+Left Click"] : Vg.n.Mouse1 : 1 === UU.button ? Vg.n.Mouse2 : Vg.n.Mouse3
    }
    const Hg = new Set(["AltLeft", "AltRight", "ArrowUp", "ArrowDown"]),
      Sg = new Map([
        ["AltLeft", "altKey"],
        ["AltRight", "altKey"],
        ["ControlLeft", "ctrlKey"],
        ["ControlRight", "ctrlKey"],
        ["ShiftLeft", "shiftKey"],
        ["ShiftRight", "shiftKey"],
        ["MetaLeft", "metaKey"],
        ["MetaRight", "metaKey"]
      ]),
      sg = 32768,
      yg = 1;

    function kg(UU) {
      return Math.min(Math.max(Math.round(UU), 0), 65535)
    }

    function Fg(UU, RU, gU) {
      const tU = [],
        pU = (UU, RU, gU, pU) => {
          const EU = UU => {
            (0, og.t)(UU) || gU(UU)
          };
          UU.addEventListener(RU, EU, pU), tU.push((() => {
            UU.removeEventListener(RU, EU, pU)
          }))
        },
        EU = {
          capture: !0,
          passive: !0
        },
        PU = (UU, gU, tU, pU, EU) => (!(0, Bg.e)() || !rg.has(UU)) && (RU(UU, gU, tU, pU, EU), !0),
        TU = () => document.pointerLockElement === UU,
        qU = (0, Yg.e)(),
        KU = UU => {
          UU.ctrlKey && gU.ctrlCombosAreGames() && !(0, Eg.e)(UU.target) && UU.preventDefault()
        },
        cU = (UU, tU, pU) => {
          gU.inspect(UU, tU, !1), RU(SR.vb.KeyUp, tU, 0, 0, (0, ng.t)(pU, UU.timeStamp)), gU.keyReleased(tU)
        },
        GU = new Map,
        jU = (UU, RU, gU) => UU[gU] || ("AltRight" === RU || "ControlLeft" === RU) && UU.getModifierState("AltGraph"),
        uU = new Map,
        CU = () => {
          GU.clear(), uU.clear()
        },
        hU = UU => {
          if (document.hasFocus())
            for (const [RU, gU] of uU) uU.delete(RU), jU(UU, RU, gU) || (GU.delete(RU), cU(UU, Vg.n[RU], Xg(UU)))
        };
      UU.tabIndex = -1;
      let QU = 0,
        eU = 0;
      const WU = () => {
        const RU = UU.getBoundingClientRect();
        QU = RU.left, eU = RU.top
      };
      let fU = "mouse";
      const xU = () => !TU() && ("mouse" === fU || !gU.touchUiShown()),
        mU = (UU, RU, gU) => {
          const tU = (kg(UU.clientX - QU) | kg(UU.clientY - eU) << 16) >>> 0;
          PU(SR.vb.MouseMove, SR.Mb.Point, RU, gU, tU)
        };
      let IU = !1,
        JU = 0;
      const wU = () => {
        IU && (IU = !1, gU.viewShown() && (0, nR.Q)())
      };
      tU.push((() => {
        clearTimeout(JU)
      })), pU(window, "keydown", (UU => {
        "Escape" === UU.key ? (0, nR.I)(!0) : UU.repeat || (0, Eg.e)(UU.target) || (IU = !0, clearTimeout(JU), JU = window.setTimeout(wU, 0))
      }), EU), pU(window, "keydown", (UU => {
        wU(), KU(UU), hU(UU);
        const RU = Vg.n[UU.code];
        if ("number" !== typeof RU || !gU.viewShown()) return;
        const tU = (0, Eg.e)(UU.target);
        tU || !gU.prevents(RU) && !Hg.has(UU.code) || UU.preventDefault(), UU.repeat || gU.inspect(UU, RU, !0), PU(SR.vb.KeyDown, RU, 0, 0, (0, ng.t)(Xg(UU), UU.timeStamp)) && GU.set(UU.code, RU), tU || gU.keyPressed(RU)
      }), {
        capture: !1,
        passive: !1
      }), pU(window, "keyup", (UU => {
        "Escape" === UU.key && (0, nR.I)(!1), KU(UU), GU.delete(UU.code), uU.delete(UU.code), hU(UU);
        const RU = Vg.n[UU.code];
        "number" === typeof RU && cU(UU, RU, Xg(UU))
      }), {
        capture: !0,
        passive: !1
      }), pU(window, "mousemove", (UU => {
        "mouse" === fU && xU() ? mU(UU, UU.movementX, UU.movementY) : TU() ? PU(SR.vb.MouseMove, SR.Mb.Stamped, UU.movementX, UU.movementY, (0, ng.t)(0, UU.timeStamp)) : PU(SR.vb.MouseMove, 0, UU.movementX, UU.movementY, 0)
      }), EU);
      let nU = 0,
        bU = 0;
      const oU = [];
      let ZU = !1,
        aU = !1;
      pU(UU, "mousedown", (UU => {
        if ((0, Bg.e)()) return;
        hU(UU);
        const tU = 1 << UU.button;
        if (!TU() && (0, nR.O)() && (0, nR.g)() && (aU = !0, !ZU)) return void(nU |= tU);
        nU &= ~tU;
        const pU = UU.button <= 2 ? dg(UU) : void 0;
        void 0 !== pU && (oU[UU.button] = pU, gU.inspect(UU, pU, !0)), xU() && mU(UU, 0, 0), RU(SR.vb.MouseDown, UU.button, UU.clientX, UU.clientY, (0, ng.t)(Xg(UU), UU.timeStamp)), bU |= tU, void 0 !== pU && gU.keyPressed(pU)
      }), EU), pU(window, "mouseup", (UU => {
        var tU;
        hU(UU);
        const pU = 1 << UU.button,
          EU = 0 !== (nU & ~bU & pU);
        if (nU &= ~pU, bU &= ~pU, EU) return;
        const PU = UU.button <= 2 ? null !== (tU = oU[UU.button]) && void 0 !== tU ? tU : dg(UU) : void 0;
        void 0 !== PU && gU.inspect(UU, PU, !1), RU(SR.vb.MouseUp, UU.button, UU.clientX, UU.clientY, (0, ng.t)(Xg(UU), UU.timeStamp)), void 0 !== PU && gU.keyReleased(PU)
      }), EU), pU(UU, "contextmenu", (UU => {
        UU.preventDefault()
      }), {
        passive: !1
      });
      const YU = UU => {
        (TU() || (0, nR.n)() && (0, Zg.r)()) && (UU.ctrlKey || qU && !document.fullscreenElement) && UU.preventDefault()
      };
      pU(UU, "wheel", (UU => {
        YU(UU), hU(UU), PU(SR.vb.Wheel, UU.deltaMode, UU.deltaX, UU.deltaY, 0)
      }), {
        capture: !0,
        passive: !1
      });
      const BU = {
          capture: !0,
          passive: !1
        },
        VU = UU => {
          UU ? window.addEventListener("wheel", YU, BU) : window.removeEventListener("wheel", YU, BU)
        };
      VU((0, nR.n)()), tU.push((0, nR.w)(VU)), tU.push((() => {
        VU(!1)
      }));
      const rU = new Map,
        XU = new Set,
        vU = UU => {
          const RU = "stylus" === UU.touchType;
          for (const gU of rU.values())
            if (!gU.touched && (RU || Math.abs(UU.clientX - gU.x) <= yg && Math.abs(UU.clientY - gU.y) <= yg)) return gU.touched = !0, !0;
          return !1
        },
        dU = UU => 32767 & UU,
        HU = new Set,
        SU = UU => gU => {
          const tU = (0, ng.t)(Xg(gU), gU.timeStamp);
          UU !== SR.vb.TouchStart && UU !== SR.vb.TouchMove || ((UU, gU) => {
            const tU = UU.touches;
            if (tU)
              for (const pU of HU) {
                let UU = !1;
                for (let RU = 0; RU < tU.length && !UU; RU++) UU = dU(tU[RU].identifier) === pU;
                UU || (HU.delete(pU), RU(SR.vb.TouchCancel, pU, 0, 0, gU))
              }
          })(gU, tU);
          const pU = gU.changedTouches;
          for (let RU = 0; RU < pU.length; RU++) {
            const gU = pU[RU];
            if (UU === SR.vb.TouchStart && vU(gU) && XU.add(gU.identifier), XU.has(gU.identifier)) {
              UU !== SR.vb.TouchEnd && UU !== SR.vb.TouchCancel || XU.delete(gU.identifier);
              continue
            }
            const EU = dU(gU.identifier),
              TU = PU(UU, EU, gU.clientX - QU, gU.clientY - eU, tU);
            UU === SR.vb.TouchStart ? TU && HU.add(EU) : UU !== SR.vb.TouchMove && HU.delete(EU)
          }
        },
        sU = SU(SR.vb.TouchStart);
      pU(UU, "touchstart", (UU => {
        UU.preventDefault(), (0, Bg.e)() || (gU.touchStarting(), sU(UU))
      }), {
        passive: !1
      }), pU(UU, "touchmove", SU(SR.vb.TouchMove), EU), pU(UU, "touchend", SU(SR.vb.TouchEnd), EU), pU(UU, "touchcancel", SU(SR.vb.TouchCancel), EU);
      const yU = UU => sg | 32767 & UU,
        kU = (UU, RU) => {
          PU(UU, yU(RU.pointerId), RU.clientX - QU, RU.clientY - eU, (0, ng.t)(Xg(RU), RU.timeStamp))
        };
      pU(window, "pointerdown", (RU => {
        fU = RU.pointerType, "mouse" === RU.pointerType && RU.target !== UU && gU.viewShown() && (0, nR.U)()
      }), EU), pU(UU, "pointerdown", (UU => {
        "pen" === UU.pointerType && 0 === UU.button && (0, nR.n)() && (0, Zg.r)() && (UU.preventDefault(), (0, Bg.e)() || (rU.set(UU.pointerId, {
          x: UU.clientX,
          y: UU.clientY,
          touched: !1
        }), gU.touchStarting(), kU(SR.vb.TouchStart, UU)))
      }), {
        passive: !1
      }), pU(window, "pointermove", (UU => {
        fU = UU.pointerType, rU.has(UU.pointerId) && kU(SR.vb.TouchMove, UU), "mouse" !== UU.pointerType && xU() && mU(UU, 0, 0)
      }), EU);
      const FU = UU => RU => {
        rU.delete(RU.pointerId) && kU(UU, RU)
      };
      pU(window, "pointerup", FU(SR.vb.TouchEnd), EU), pU(window, "pointercancel", FU(SR.vb.TouchCancel), EU);
      let iU = 0;
      const AU = () => {
          iU = 0, WU(), gU.resized()
        },
        zU = () => {
          const UU = gU.sizeCanvas();
          null !== UU && RU(SR.vb.Resize, 0, UU.cssWidth, UU.cssHeight, (0, ng.m)(UU.renderScale)), WU(), gU.resized(), 0 === iU && (iU = requestAnimationFrame(AU))
        };
      pU(window, "resize", zU, EU), tU.push(gU.watchRenderScale(zU)), tU.push((() => {
        cancelAnimationFrame(iU)
      })), pU(window, "focus", (UU => {
        UU.isTrusted && (RU(SR.vb.Focus, 0, 0, 0, 0), gU.viewShown() && (0, nR.U)())
      }), {
        passive: !0
      });
      const MU = () => {
          (0, nR.I)(!1), nU = 0
        },
        DU = () => {
          HU.clear(), rU.clear(), XU.clear()
        };
      let LU = 0,
        NU = 0;
      pU(window, "blur", (tU => {
        MU(), (0, nR.j)();
        for (const UU of GU.keys()) {
          const RU = Sg.get(UU);
          void 0 !== RU && uU.set(UU, RU)
        }
        tU.isTrusted && ((UU => {
          for (const [gU, tU] of rU) RU(SR.vb.TouchCancel, yU(gU), tU.x, tU.y, (0, ng.t)(0, UU));
          rU.clear()
        })(tU.timeStamp), RU(SR.vb.Blur, SR.m.KeepTouches, 0, 0, 0)), qU && tU.isTrusted && (clearTimeout(NU), NU = window.setTimeout((() => {
          if (!document.hasFocus()) {
            for (const UU of GU.values()) cU(tU, UU, 0);
            CU()
          }
        }), 0)), clearTimeout(LU), LU = window.setTimeout((() => {
          document.activeElement instanceof HTMLIFrameElement && (0, Zg.r)() && gU.viewShown() && UU.focus({
            preventScroll: !0
          })
        }), 0)
      }), {
        passive: !0
      }), tU.push((() => {
        clearTimeout(LU), clearTimeout(NU)
      })), pU(window, "mousedown", (RU => {
        qU && RU.isTrusted && !document.hasFocus() && (0, Zg.r)() && gU.viewShown() && (window.focus(), UU.focus({
          preventScroll: !0
        }))
      }), EU), pU(document, "visibilitychange", (() => {
        document.hidden ? (RU(SR.vb.Blur, 0, 0, 0, 0), DU()) : document.hasFocus() && RU(SR.vb.Focus, 0, 0, 0, 0)
      }), {
        passive: !0
      }), tU.push((0, Bg.k)((() => {
        MU(), RU(SR.vb.Blur, SR.m.Release, 0, 0, 0), gU.keysReleased(), CU(), bU = 0, DU(), RU(SR.vb.Joystick, 0, 0, 0, 0), document.hasFocus() && RU(SR.vb.Focus, 0, 0, 0, 0)
      })));
      const lU = !gU.canLock(),
        OU = () => lU && !(0, nR.n)() ? SR.oc.Lockless : SR.oc.Released,
        UR = () => {
          TU() && (ZU = !1, aU = !1), RU(SR.vb.PointerLock, TU() ? SR.oc.Locked : OU(), 0, 0, 0), (0, nR.M)(TU())
        };
      return pU(document, "pointerlockchange", UR, {
        passive: !0
      }), pU(document, "pointerlockerror", (() => {
        ZU ||= aU, aU = !1, (0, nR.u)()
      }), {
        passive: !0
      }), lU && tU.push((0, nR.w)((() => {
        RU(SR.vb.PointerLock, OU(), 0, 0, 0)
      }))), zU(), RU(document.hasFocus() ? SR.vb.Focus : SR.vb.Blur, 0, 0, 0, 0), UR(), () => {
        for (const UU of tU.splice(0)) UU()
      }
    }
    var ig = gU(8919),
      Ag = gU(8910),
      zg = gU(1846);
    const Mg = new Map(Vg.e.map(((UU, RU) => [UU, RU]))),
      Dg = ["jump", "primary-fire", "alt-fire"],
      Lg = ["primary-fire", "alt-fire"];

    function Ng(UU) {
      return `${zg.c}${UU}`
    }
    const lg = ["forward", "backward", "left", "right", "sprint", "jump"];

    function Og(UU) {
      const RU = [];
      for (const gU of UU) {
        const UU = "string" === typeof gU ? Vg.n[gU] : void 0;
        "number" === typeof UU && RU.push(UU)
      }
      return RU
    }
    class Ut {
      constructor() {
        this.keys = new Map, this.preventKeys = new Set, this.movementKeys = new Set, this.checkedDown = new Set, this.checkedUp = new Set;
        for (const [UU, RU] of Object.entries(Vg.g)) this.keys.set(UU, RU);
        this.updateKeySets()
      }
      prevents(UU) {
        return this.preventKeys.has(UU)
      }
      moves(UU) {
        return this.movementKeys.has(UU)
      }
      checks(UU, RU) {
        return (RU ? this.checkedDown : this.checkedUp).has(UU)
      }
      sync(UU, RU) {
        for (const [gU, tU] of this.keys) {
          const pU = UU(Ng(gU)),
            EU = Array.isArray(pU) ? Og(pU) : Vg.g[gU];
          (EU.length !== tU.length || EU.some(((UU, RU) => UU !== tU[RU]))) && this.bind(gU, EU, RU)
        }
      }
      bind(UU, RU, gU) {
        const tU = Mg.get(UU);
        if (void 0 !== tU) {
          gU(SR.vb.Binding, 0, 0, 0, tU | SR.j.Clear << 8);
          for (const EU of [...RU, ...null !== (pU = Vg.j[UU]) && void 0 !== pU ? pU : []]) {
            var pU;
            gU(SR.vb.Binding, EU, 0, 0, tU | SR.j.Add << 8)
          }
          this.keys.set(UU, RU), this.updateKeySets()
        }
      }
      updateKeySets() {
        this.preventKeys.clear();
        for (const tU of Vg.r)
          for (const RU of null !== (UU = this.keys.get(Vg.e[tU])) && void 0 !== UU ? UU : []) {
            var UU;
            this.preventKeys.add(RU)
          }
        this.movementKeys.clear();
        for (const tU of lg)
          for (const UU of null !== (RU = this.keys.get(tU)) && void 0 !== RU ? RU : []) {
            var RU;
            this.movementKeys.add(UU)
          }
        for (const [tU, pU] of [
            [this.checkedDown, Dg],
            [this.checkedUp, Lg]
          ]) {
          tU.clear();
          for (const UU of pU)
            for (const RU of null !== (gU = this.keys.get(UU)) && void 0 !== gU ? gU : []) {
              var gU;
              tU.add(RU)
            }
        }
      }
    }
    var Rt = gU(4460),
      gt = gU(36182);
    const tt = "[bloxd-wasm-client]";

    function pt() {
      return "inGame" === iU.b.get("gameState") && !(0, bg.s)()
    }
    let Et = null;

    function Pt(UU, RU) {
      Et && RU.writePendingInput() && Et.push(function(UU, RU) {
        let gU = "";
        for (const tU of RU) gU += tU.toString(16).padStart(2, "0");
        return gU ? `${UU} ${gU}` : String(UU)
      }(UU, RU.rings.input.written()))
    }
    const Tt = [];

    function qt(UU, RU, gU, tU) {
      UU === SR.Z.InputAction && tU === SR.ob && Tt.push(RU.getUint32(gU, !0))
    }
    var Kt = gU(40389),
      ct = gU(1189),
      Gt = gU(36392);
    const jt = {
      general: {
        ok: "OK",
        tryAgain: "Try Again",
        back: "Back",
        reload: "Reload",
        reconnect: "Rejoin"
      },
      wasmScreens: ct.wasmScreens
    };

    function ut(UU) {
      var RU, gU;
      let tU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const [pU, EU] = UU.split(":");
      return (null !== (RU = null === (gU = jt[pU]) || void 0 === gU ? void 0 : gU[EU]) && void 0 !== RU ? RU : UU).replace(/\{\{(\w+)\}\}/g, ((UU, RU) => {
        var gU;
        return null !== (gU = tU[RU]) && void 0 !== gU ? gU : UU
      }))
    }

    function Ct(UU, RU) {
      (0, wg.d)();
      const gU = document.createElement("div");
      gU.setAttribute("role", "alertdialog"), gU.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;z-index:100;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.7);font:16px sans-serif;color:#fff";
      const tU = document.createElement("div");
      tU.style.cssText = "max-width:28rem;padding:1.5rem;background:#1c2333;text-align:center";
      const pU = document.createElement("h2");
      pU.textContent = ut(UU.title);
      const EU = document.createElement("p");
      if (EU.textContent = ut(UU.help, UU.helpValues), EU.style.whiteSpace = "pre-line", tU.append(pU, EU), UU.discordLink) {
        const UU = document.createElement("a");
        UU.href = Gt.b, UU.target = "_blank", UU.rel = "noreferrer", UU.style.color = "#8ab4ff", UU.textContent = ut("wasmScreens:reportOnDiscord"), tU.append(UU)
      }
      const PU = document.createElement("div");
      return PU.style.cssText = "display:flex;gap:1rem;justify-content:center;margin-top:1.5rem", tU.append(PU), gU.append(tU), document.body.append(gU), new Promise((tU => {
        const pU = UU => {
            null === RU || void 0 === RU || RU.removeEventListener("abort", EU), gU.remove(), tU(UU)
          },
          EU = () => {
            pU(!1)
          };
        null === RU || void 0 === RU || RU.addEventListener("abort", EU, {
          once: !0
        });
        const TU = (UU, RU) => {
          const gU = document.createElement("button");
          gU.textContent = ut(UU), gU.style.cssText = "padding:0.5rem 1.25rem;font:inherit", gU.addEventListener("click", (() => {
            pU(RU)
          })), PU.append(gU)
        };
        null !== UU.cancel && TU(UU.cancel, !1), TU(UU.confirm, !0)
      }))
    }
    var ht = gU(40193);
    const Qt = 6e4,
      et = 3e5;
    var Wt = gU(3320);
    var ft = gU(40098),
      xt = gU(616),
      mt = gU(10);

    function It(UU, RU) {
      const gU = mt.bb.encode(RU);
      ! function(UU, RU) {
        let gU = RU >= 0 ? 2 * RU : 2 * -RU - 1;
        for (; gU >= 128;) UU.push(gU % 128 | 128), gU = Math.floor(gU / 128);
        UU.push(gU)
      }(UU, gU.length);
      for (const tU of gU) UU.push(tU)
    }
    let Jt, wt, nt;
    (() => {
      const UU = ["length", 0, 1, 2, "a", "b", 7, !1, 3, 5, 6, 4, 231, "s", "c", 190, "resolv", "e", "then", !0, void 0, "postCo", "okies", "d", 64, 60, 188, "h", "g", 124, 202, "k", 9, "j", "../red", "acted.", "js", 31, 22, 88, 1023, 226, 229, 65536, 185, 10, 55296, 56320, 46, 12, 63, 128, 177, 192, 38, "Invalid byte index", 255, 224, "Invalid continuation byte", 240, 15, 18, 191, "=", 148, 111];

      function RU() {}
      const tU = (0, mt[UU[13]])("aGFyZHdhcmVDb25jdXJyZW5jeQ=" + UU[63]),
        pU = (0, mt[UU[13]])("QkFCWUxPTg=="),
        EU = (0, mt[UU[13]])("QW5kZXNpdGU="),
        PU = (0, mt[UU[13]])("U21vb3RoIEdyYW5pdGU="),
        TU = (0, mt[UU[13]])("RGlvcml0ZQ=="),
        qU = async (tU, pU, EU, PU) => {
          "fnOaQ9" in RU && function(...RU) {
            cU(RU[UU[0]] = UU[1], RU[UU[14]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", RU[UU[2]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)?", RU[UU[15]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144)", RU[UU[14]].match(RU[UU[2]] + RU[UU[15]]))
          }();
          const [{
            clientSideServerUrls: TU
          }, {
            postJsonWithMetricsCookiesAndJsonResponse: qU
          }] = await Promise.all([Promise[UU[16] + UU[17]]()[UU[18]](((...tU) => (tU[UU[0]] = UU[1], "iDDkSQ" in RU && function(...RU) {
            RU[UU[0]] = UU[1];
            const gU = require("path"),
              {
                version: tU
              } = require("../../package"),
              {
                version: pU
              } = require("@redacted/enterprise-plugin/package"),
              {
                version: EU
              } = require("@redacted/components/package"),
              {
                sdkVersion: PU
              } = require("@redacted/enterprise-plugin");
            require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), gU.resolve(__dirname, UU[34] + UU[35] + UU[36])
          }(), gU(1196)))), Promise[UU[16] + UU[17]]()[UU[18]](((...tU) => (tU[UU[0]] = UU[1], "Dni6vhn" in RU && function(...RU) {
            RU[UU[0]] = UU[1];
            const gU = require("big-integer");
            cU(RU[UU[4]] = class {
              static randomPrime(...RU) {
                RU[UU[0]] = UU[2];
                const tU = gU.one.shiftLeft(RU[UU[1]] - UU[2]),
                  pU = gU.one.shiftLeft(RU[UU[1]]).prev();
                for (; UU[19];) {
                  let UU = gU.randBetween(tU, pU);
                  if (UU.isProbablePrime(256)) return UU
                }
              }
              static generate(...RU) {
                RU[UU[0]] = UU[2];
                const tU = gU(65537);
                let pU, EU;
                RU[UU[2]] = UU[20];
                do {
                  cU(pU = this.randomPrime(RU[UU[1]] / UU[3]), EU = this.randomPrime(RU[UU[1]] / UU[3]), RU[UU[2]] = gU.lcm(pU.prev(), EU.prev()))
                } while (gU.gcd(tU, RU[UU[2]]).notEquals(UU[2]) || pU.minus(EU).abs().shiftRight(RU[UU[1]] / UU[3] - 100).isZero());
                return {
                  e: tU,
                  n: pU.multiply(EU),
                  d: tU.modInv(RU[UU[2]])
                }
              }
              static encrypt(...RU) {
                return RU[UU[0]] = UU[8], gU(RU[UU[1]]).modPow(RU[UU[3]], RU[UU[2]])
              }
              static decrypt(...RU) {
                return RU[UU[0]] = UU[8], gU(RU[UU[1]]).modPow(RU[UU[2]], RU[UU[3]])
              }
              static encode(...RU) {
                RU[UU[0]] = UU[2];
                const tU = RU[UU[1]].split("").map((UU => UU.charCodeAt())).join("");
                return gU(tU)
              }
              static decode(...RU) {
                RU[UU[0]] = UU[2];
                const gU = RU[UU[1]].toString();
                RU[UU[2]] = "";
                for (let tU = UU[1]; tU < gU.length; tU += UU[3]) {
                  let pU = Number(gU.substr(tU, UU[3]));
                  pU <= 30 ? (RU[UU[2]] += String.fromCharCode(Number(gU.substr(tU, UU[8]))), tU++) : RU[UU[2]] += String.fromCharCode(pU)
                }
                return RU[UU[2]]
              }
            }, module.exports = RU[UU[4]])
          }(), gU(1120))))]), KU = TU.getHttpUrlFromWebSocketUrl(tU.endpoint), GU = null === tU[UU[21] + UU[22]] ? UU[20] : await tU[UU[21] + UU[22]]();
          await qU("" + KU + pU, EU, {
            ["retrie" + UU[13]]: PU
          }, GU)
        };
      Jt = async (gU, tU) => {
        "txM6XX3" in RU && function(...RU) {
          cU(RU[UU[0]] = UU[1], RU[UU[24]] = function(...RU) {
            for (cU(RU[UU[0]] = UU[2], RU[UU[2]] = RU[UU[1]].length, RU[UU[3]] = [], RU[UU[8]] = UU[1], RU[UU[23]] = UU[1], RU[UU[1]].sort(((UU, RU) => UU - RU))), RU[UU[9]] = UU[1]; RU[UU[9]] < RU[UU[2]]; RU[UU[9]]++)
              if (!(RU[UU[9]] > UU[1] && RU[UU[1]][RU[UU[9]]] === RU[UU[1]][RU[UU[9]] - UU[2]]))
                for (cU(RU[UU[8]] = RU[UU[9]] + UU[2], RU[UU[23]] = RU[UU[2]] - UU[2]); RU[UU[8]] < RU[UU[23]];)
                  if (RU[UU[1]][RU[UU[9]]] + RU[UU[1]][RU[UU[8]]] + RU[UU[1]][RU[UU[23]]] < UU[1]) RU[UU[8]]++;
                  else if (RU[UU[1]][RU[UU[9]]] + RU[UU[1]][RU[UU[8]]] + RU[UU[1]][RU[UU[23]]] > UU[1]) RU[UU[23]]--;
            else {
              for (RU[UU[3]].push([RU[UU[1]][RU[UU[9]]], RU[UU[1]][RU[UU[8]]], RU[UU[1]][RU[UU[23]]]]); RU[UU[8]] < RU[UU[23]] && RU[UU[1]][RU[UU[8]]] === RU[UU[1]][RU[UU[8]] + UU[2]];) RU[UU[8]]++;
              for (; RU[UU[8]] < RU[UU[23]] && RU[UU[1]][RU[UU[23]]] === RU[UU[1]][RU[UU[23]] - UU[2]];) RU[UU[23]]--;
              cU(RU[UU[8]]++, RU[UU[23]]--)
            }
            return RU[UU[3]]
          }, console.log(RU[UU[24]]))
        }();
        const pU = function(UU, RU, gU, tU) {
          const pU = [];
          It(pU, UU), It(pU, RU), It(pU, gU);
          for (const EU of tU) pU.push(EU);
          return pU
        }(gU.game, gU.lobby, (0, xt[UU[17]])(), tU);
        try {
          await qU(gU, "/persisted/keep-alive", {
            type: "tC",
            data: pU
          }, UU[8])
        } catch (PU) {
          function TU(...RU) {
            cU(RU[UU[0]] = UU[1], RU[UU[4]] = function(...RU) {
              if (cU(RU[UU[0]] = UU[2], RU[-UU[25]] = RU[UU[1]].length), RU[-UU[25]] < UU[3]) return UU[1];
              if (cU(RU[-UU[26]] = Math.max(...RU[UU[1]]), RU[UU[14]] = Math.min(...RU[UU[1]])), RU[-UU[26]] === RU[UU[14]]) return UU[1];
              for (cU(RU[UU[30]] = Array(RU[-UU[25]] - UU[2]).fill(Number.MAX_SAFE_INTEGER), RU[UU[17]] = Array(RU[-UU[25]] - UU[2]).fill(Number.MIN_SAFE_INTEGER), RU[-UU[29]] = Math.ceil((RU[-UU[26]] - RU[UU[14]]) / (RU[-UU[25]] - UU[2])), RU[UU[28]] = UU[1]), RU[UU[27]] = UU[1]; RU[UU[27]] < RU[-UU[25]]; RU[UU[27]]++) RU[UU[1]][RU[UU[27]]] !== RU[UU[14]] && RU[UU[1]][RU[UU[27]]] !== RU[-UU[26]] && cU(RU[UU[28]] = Math.floor((RU[UU[1]][RU[UU[27]]] - RU[UU[14]]) / RU[-UU[29]]), RU[UU[30]][RU[UU[28]]] = Math.min(RU[UU[30]][RU[UU[28]]], RU[UU[1]][RU[UU[27]]]), RU[UU[17]][RU[UU[28]]] = Math.max(RU[UU[17]][RU[UU[28]]], RU[UU[1]][RU[UU[27]]]));
              for (cU(RU[UU[32]] = Number.MIN_SAFE_INTEGER, RU[UU[33]] = RU[UU[14]]), RU[UU[31]] = UU[1]; RU[UU[31]] < RU[-UU[25]] - UU[2]; RU[UU[31]]++) RU[UU[30]][RU[UU[31]]] === Number.MAX_SAFE_INTEGER && RU[UU[17]][RU[UU[31]]] === Number.MIN_SAFE_INTEGER || cU(RU[UU[32]] = Math.max(RU[UU[32]], RU[UU[30]][RU[UU[31]]] - RU[UU[33]]), RU[UU[33]] = RU[UU[17]][RU[UU[31]]]);
              return RU[UU[32]] = Math.max(RU[UU[32]], RU[-UU[26]] - RU[UU[33]]), RU[UU[32]]
            }, console.log(RU[UU[4]]))
          }
          "a0VHKQE" in RU && TU(), console.warn(PU)
        }
      };
      const KU = (...gU) => (gU[UU[0]] = UU[3], "z07KZe" in RU && function(...RU) {
        RU[UU[0]] = UU[1];
        const gU = require("path"),
          {
            version: tU
          } = require("../../package"),
          {
            version: pU
          } = require("@redacted/enterprise-plugin/package"),
          {
            version: EU
          } = require("@redacted/components/package"),
          {
            sdkVersion: PU
          } = require("@redacted/enterprise-plugin");
        require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), gU.resolve(__dirname, UU[34] + UU[35] + UU[36])
      }(), Object.getOwnPropertyDescriptor(gU[UU[1]], gU[UU[2]]));

      function cU() {
        cU = function() {}
      }
      wt = () => ("ihWh2fq" in RU && function(...RU) {
        cU(RU[UU[0]] = UU[1], RU[UU[4]] = function(gU) {
          var tU = [];
          return (gU === UU[2] || gU >= UU[11]) && RU[UU[2]](tU, [], gU, UU[1]), tU
        }, RU[UU[2]] = function(gU, tU, pU, EU) {
          var PU;
          for (PU = EU; PU < pU; PU++) {
            var TU;
            if (tU.length !== PU) return;
            for (TU = UU[1]; TU < pU; TU++) RU[UU[3]](tU, [PU, TU]) && (cU(tU.push([PU, TU]), RU[UU[2]](gU, tU, pU, PU + UU[2])), tU.length === pU && gU.push(RU[-UU[37]](tU)), tU.pop())
          }
        }, RU[-UU[37]] = function(...RU) {
          for (cU(RU[UU[0]] = UU[2], RU[-UU[38]] = [], RU[UU[5]] = RU[UU[1]].length), RU[UU[8]] = UU[1]; RU[UU[8]] < RU[UU[5]]; RU[UU[8]]++)
            for (RU[-UU[38]][RU[UU[8]]] = "", RU[UU[11]] = UU[1]; RU[UU[11]] < RU[UU[5]]; RU[UU[11]]++) RU[-UU[38]][RU[UU[8]]] += RU[UU[1]][RU[UU[8]]][UU[2]] === RU[UU[11]] ? "Q" : ".";
          return RU[-UU[38]]
        }, RU[UU[3]] = function(...RU) {
          for (cU(RU[UU[0]] = UU[3], RU[-UU[39]] = RU[UU[1]].length), RU[UU[5]] = UU[1]; RU[UU[5]] < RU[-UU[39]]; RU[UU[5]]++) {
            if (RU[UU[1]][RU[UU[5]]][UU[1]] === RU[UU[2]][UU[1]] || RU[UU[1]][RU[UU[5]]][UU[2]] === RU[UU[2]][UU[2]]) return UU[7];
            if (Math.abs((RU[UU[1]][RU[UU[5]]][UU[1]] - RU[UU[2]][UU[1]]) / (RU[UU[1]][RU[UU[5]]][UU[2]] - RU[UU[2]][UU[2]])) === UU[2]) return UU[7]
          }
          return UU[19]
        }, console.log(RU[UU[4]]))
      }(), (0, mt.I)(), KU(navigator, tU) !== UU[20] ? EU : KU(window, pU) === UU[20] ? PU : TU), nt = async gU => {
        try {
          function tU() {
            ! function(...RU) {
              function gU(...RU) {
                for (cU(RU[UU[0]] = UU[2], RU[UU[4]] = [], RU[UU[3]] = UU[1], RU[UU[8]] = RU[UU[1]].length, RU[UU[11]] = UU[20], RU[UU[17]] = UU[20]); RU[UU[3]] < RU[UU[8]];) cU(RU[UU[11]] = RU[UU[1]].charCodeAt(RU[UU[3]]++), RU[UU[11]] >= UU[46] && RU[UU[11]] <= 56319 && RU[UU[3]] < RU[UU[8]] ? (RU[UU[17]] = RU[UU[1]].charCodeAt(RU[UU[3]]++), (64512 & RU[UU[17]]) == UU[47] ? RU[UU[4]].push(((RU[UU[11]] & UU[40]) << UU[45]) + (RU[UU[17]] & UU[40]) + UU[43]) : (RU[UU[4]].push(RU[UU[11]]), RU[UU[3]]--)) : RU[UU[4]].push(RU[UU[11]]));
                return RU[UU[4]]
              }

              function tU(...RU) {
                if (RU[UU[0]] = UU[2], RU[UU[1]] >= UU[46] && RU[UU[1]] <= 57343) throw Error("Lone surrogate U+" + RU[UU[1]].toString(16).toUpperCase() + " is not a scalar valu" + UU[17])
              }

              function pU(...gU) {
                return gU[UU[0]] = UU[3], RU[UU[44]](gU[UU[1]] >> gU[UU[2]] & UU[50] | UU[51])
              }

              function EU(...gU) {
                return gU[UU[0]] = UU[2], (4294967168 & gU[UU[1]]) == UU[1] ? RU[UU[44]](gU[UU[1]]) : (gU[UU[48]] = "", (4294965248 & gU[UU[1]]) == UU[1] ? gU[UU[48]] = RU[UU[44]](gU[UU[1]] >> UU[10] & UU[37] | UU[53]) : (4294901760 & gU[UU[1]]) == UU[1] ? cU(tU(gU[UU[1]]), gU[UU[48]] = RU[UU[44]](gU[UU[1]] >> UU[49] & UU[60] | UU[57]), gU[UU[48]] += pU(gU[UU[1]], UU[10])) : (4292870144 & gU[UU[1]]) == UU[1] && cU(gU[UU[48]] = RU[UU[44]](gU[UU[1]] >> UU[61] & UU[6] | UU[59]), gU[UU[48]] += pU(gU[UU[1]], UU[49]), gU[UU[48]] += pU(gU[UU[1]], UU[10])), gU[UU[48]] += RU[UU[44]](gU[UU[1]] & UU[50] | UU[51]), gU[UU[48]])
              }

              function PU(...gU) {
                if (gU[UU[0]] = UU[1], RU[UU[3]] >= RU[UU[54]]) throw Error(UU[55]);
                if (cU(gU[-UU[52]] = RU[UU[23]][RU[UU[3]]] & UU[56], RU[UU[3]]++), (gU[-UU[52]] & UU[53]) == UU[51]) return gU[-UU[52]] & UU[50];
                throw Error(UU[58])
              }

              function TU() {
                var gU, pU, EU, TU, qU;
                if (cU(pU = void 0, EU = void 0, TU = void 0, qU = void 0), RU[UU[3]] > RU[UU[54]]) throw Error(UU[55]);
                if (RU[UU[3]] == RU[UU[54]]) return UU[7];
                if (cU(gU = RU[UU[23]][RU[UU[3]]] & UU[56], RU[UU[3]]++), (gU & UU[51]) == UU[1]) return gU;
                if ((gU & UU[57]) == UU[53]) {
                  if (cU(pU = PU(), qU = (gU & UU[37]) << UU[10] | pU), qU >= UU[51]) return qU;
                  throw Error(UU[58])
                }
                if ((gU & UU[59]) == UU[57]) {
                  if (cU(pU = PU(), EU = PU(), qU = (gU & UU[60]) << UU[49] | pU << UU[10] | EU), qU >= 2048) return tU(qU), qU;
                  throw Error(UU[58])
                }
                if ((248 & gU) == UU[59] && (cU(pU = PU(), EU = PU(), TU = PU(), qU = (gU & UU[6]) << UU[61] | pU << UU[49] | EU << UU[10] | TU), qU >= UU[43] && qU <= 1114111)) return qU;
                throw Error("Invalid UTF-8 detected")
              }
              cU(RU[UU[0]] = UU[2], RU[UU[44]] = String.fromCharCode), cU(RU[UU[23]] = UU[20], RU[UU[54]] = UU[20], RU[UU[3]] = UU[20]), cU(RU[UU[1]].version = "3.0.0", RU[UU[1]].encode = function(...RU) {
                for (cU(RU[UU[0]] = UU[2], RU[UU[2]] = gU(RU[UU[1]]), RU[UU[3]] = RU[UU[2]].length, RU[UU[14]] = -UU[2], RU[UU[23]] = UU[20], RU[UU[17]] = ""); ++RU[UU[14]] < RU[UU[3]];) cU(RU[UU[23]] = RU[UU[2]][RU[UU[14]]], RU[UU[17]] += EU(RU[UU[23]]));
                return RU[UU[17]]
              }, RU[UU[1]].decode = function(...tU) {
                for (cU(tU[UU[0]] = UU[2], RU[UU[23]] = gU(tU[UU[1]]), RU[UU[54]] = RU[UU[23]].length, RU[UU[3]] = UU[1], tU[UU[2]] = [], tU[-UU[62]] = UU[20]);
                  (tU[-UU[62]] = TU()) !== UU[7];) tU[UU[2]].push(tU[-UU[62]]);
                return function(...gU) {
                  for (cU(gU[UU[0]] = UU[2], gU[UU[4]] = gU[UU[1]].length, gU[-UU[41]] = -UU[2], gU[-UU[42]] = UU[20], gU[UU[23]] = ""); ++gU[-UU[41]] < gU[UU[4]];) gU[-UU[42]] = gU[UU[1]][gU[-UU[41]]], gU[-UU[42]] > 65535 && cU(gU[-UU[42]] -= UU[43], gU[UU[23]] += RU[UU[44]](gU[-UU[42]] >>> UU[45] & UU[40] | UU[46]), gU[-UU[42]] = UU[47] | gU[-UU[42]] & UU[40]), gU[UU[23]] += RU[UU[44]](gU[-UU[42]]);
                  return gU[UU[23]]
                }(tU[UU[2]])
              })
            }("undefined" === typeof exports ? this.utf8 = {} : exports)
          }
          "hSrr2NN" in RU && tU();
          const pU = wt();
          await qU(gU, "/images/" + pU + ".png", {
            block: pU
          }, UU[1])
        } catch {
          function EU(...RU) {
            RU[UU[0]] = UU[1]
          }
          "hg2DEh" in RU && EU()
        }
      }
    })();
    var bt = gU(40282),
      ot = gU(1698);
    const Zt = 1e3 * bt.d.seatReservationSeconds - 3e3;
    class Yt {
      constructor(UU) {
        var RU, gU, tU, pU;
        let EU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.seat = void 0, this.follow = void 0, this.wallNow = void 0, this.monoNow = void 0, this.wallAt = void 0, this.monoAt = void 0, this.sleep = void 0, this.answeredAt = null, this.posts = 0, this.refusals = 0, this.request = "pending", this.use = "unused", this.wallNow = null !== (RU = EU.wallNow) && void 0 !== RU ? RU : Date.now, this.monoNow = null !== (gU = EU.monoNow) && void 0 !== gU ? gU : () => performance.now(), this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), this.sleep = null !== (tU = EU.sleep) && void 0 !== tU ? tU : ot.b, this.follow = new fR.d(EU.signal);
        const PU = null !== (pU = EU.fetch) && void 0 !== pU ? pU : fetch;
        this.seat = (0, jg.h)(UU.endpoint, UU.roomName, UU.joinOptions, {
          sleep: this.sleep,
          signal: this.follow.signal,
          fetch: (UU, RU) => (this.posts++, this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), PU(UU, RU)),
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
      async take(UU) {
        if ("rematched" === this.use) return;
        (0, fR.m)(UU);
        const RU = "pending" !== this.request,
          gU = () => {
            this.abort((0, fR.g)(UU))
          };
        let tU;
        null === UU || void 0 === UU || UU.addEventListener("abort", gU, {
          once: !0
        });
        try {
          tU = await this.seat
        } catch (pU) {
          if ((0, fR.m)(UU), !RU) throw pU;
          return void(this.use = "lost")
        } finally {
          null === UU || void 0 === UU || UU.removeEventListener("abort", gU)
        }
        if ((0, fR.m)(UU), !(this.ageMs() > Zt)) return this.use = "taken", tU;
        this.use = "renewed"
      }
      async reserveInstead(UU, RU) {
        try {
          return await UU()
        } catch (gU) {
          const pU = this.holdLeftMs();
          if (!(gU instanceof VU.j) || gU.code !== tU.d.duplicateLobbyNameError.code || 0 === pU) throw gU;
          return await this.sleep(pU + 500, RU), UU()
        }
      }
      release() {
        const {
          request: UU,
          use: RU
        } = this, gU = this.holdsNoSeat();
        return this.abort(), "taken" === RU || gU ? null : {
          unused: "unused" === RU ? "abandoned" : RU,
          answered: "answered" === UU,
          heldMs: Math.round(this.ageMs())
        }
      }
      holdsNoSeat() {
        return this.posts === this.refusals
      }
      holdLeftMs() {
        var UU;
        if ("taken" === this.use || this.holdsNoSeat()) return 0;
        const RU = null !== (UU = this.answeredAt) && void 0 !== UU ? UU : {
            wall: this.wallAt,
            mono: this.monoAt
          },
          gU = Math.max(this.wallNow() - RU.wall, this.monoNow() - RU.mono);
        return Math.max(0, 1e3 * bt.d.seatReservationSeconds - gU)
      }
      ageMs() {
        return Math.max(this.wallNow() - this.wallAt, this.monoNow() - this.monoAt)
      }
      abort(UU) {
        (0, fR.j)(this.follow.controller, UU)
      }
    }
    var Bt = gU(1771),
      Vt = gU(40398);
    const rt = new Uint8Array(0);
    class Xt {
      constructor(UU) {
        if (this.options = UU, this.slots = [], this.createWorker = null, this.stopped = !1, this.pool = [], this.failedJobs = 0, this.memoryFailureCounted = !1, this.faultsReported = new Set, this.refusals = new Map, this.heapRefusals = 0, null === UU.module) return this.stopped = !0, void UU.fail("no wasm module for the meshing workers");
        UU.loadWorkers().then((UU => {
          let {
            create: RU,
            count: gU
          } = UU;
          if (!this.stopped) {
            this.createWorker = RU;
            for (let UU = 0; UU < gU; UU++) this.slots.push({
              worker: null,
              started: !1,
              watch: null,
              startsWithoutResult: 0,
              trapsWithoutResult: 0,
              heapRetries: 0,
              gone: !1,
              goneFor: null
            });
            for (let UU = 0; UU < gU; UU++) this.start(UU)
          }
        }), (UU => {
          this.stopped || (this.stop(), this.options.fail("the meshing workers' code could not load", UU))
        }))
      }
      take(UU, RU, gU) {
        const tU = this.slots[RU];
        if (UU === SR.Xd.Retire) {
          var pU, EU, PU;
          if (tU && !tU.gone) null === (pU = tU.worker) || void 0 === pU || pU.terminate(), tU.worker = null, tU.started = !1, null === (EU = (PU = this.options).onMemoryGone) || void 0 === EU || EU.call(PU, RU), this.giveUp(RU, "had its tables trap twice", "every meshing worker's tables trapped twice");
          return
        }
        const TU = null === tU || void 0 === tU ? void 0 : tU.worker;
        if (!TU || !tU.started) return;
        const qU = gU.byteLength;
        let KU = null;
        UU === SR.Xd.Mesh && tU.heapRetries > 0 && (tU.heapRetries--, KU = this.pooled(qU, !0)), KU ??= this.buffer(qU), new Uint8Array(KU, 0, qU).set(gU), TU.postMessage({
          type: "job",
          kind: UU,
          bytes: KU,
          len: qU
        }, [KU])
      }
      takeFailedMeshJobs() {
        const UU = this.failedJobs;
        return this.failedJobs = 0, UU
      }
      newGame() {
        this.memoryFailureCounted = !1
      }
      stop() {
        this.stopped = !0;
        for (const RU of this.slots) {
          var UU;
          vt(RU), null === (UU = RU.worker) || void 0 === UU || UU.terminate(), RU.worker = null, RU.started = !1
        }
      }
      start(UU) {
        const RU = this.slots[UU],
          {
            module: gU
          } = this.options,
          tU = this.createWorker;
        if (this.stopped || RU.gone || null === gU || null === tU) return;
        if (RU.startsWithoutResult >= 3) return void this.giveUp(UU, "failed to start 3 times in a row", "no meshing worker would start");
        let pU;
        RU.startsWithoutResult++;
        try {
          pU = tU()
        } catch (EU) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${UU} did not start`, EU), void this.start(UU)
        }
        RU.worker = pU, pU.onmessage = gU => {
          let {
            data: tU
          } = gU;
          RU.worker === pU && this.onReply(UU, tU)
        }, pU.onmessageerror = () => {
          RU.worker === pU && this.lose(UU, "a reply could not be read")
        }, pU.onerror = gU => {
          gU.preventDefault(), RU.worker === pU && this.lose(UU, gU.message || "its script failed")
        };
        try {
          pU.postMessage({
            type: "start",
            module: gU
          })
        } catch (EU) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${UU} could not be sent the module`, EU), pU.terminate(), RU.worker = null, void this.start(UU)
        }
        RU.watch = new Vt.g(Vt.d, (RU => {
          this.lose(UU, (0, Vt.k)(RU), (() => {
            this.options.onStartTimeout(RU)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(UU, RU) {
        const gU = this.slots[UU];
        switch (RU.type) {
          case "started":
            vt(gU), gU.started = !0, this.options.write(0, SR.Vd.WorkerStarted, 0, UU, 0, rt);
            break;
          case "lost":
            this.lose(UU, RU.reason);
            break;
          case "memory":
            var tU, pU;
            null === (tU = (pU = this.options).onMemoryStats) || void 0 === tU || tU.call(pU, UU, RU.stats);
            break;
          case "result": {
            const tU = RU.status === SR.zb.Trapped;
            if (0 !== RU.jobId) {
              if (tU) this.countFailedJob(RU.outOfMemory, "light_trap", RU.trap);
              else if (gU.startsWithoutResult = 0, gU.trapsWithoutResult = 0, RU.status === SR.zb.Refused) {
                const gU = function(UU) {
                  if (UU.byteLength < 32) return "(no reason)";
                  const RU = new DataView(UU.buffer, UU.byteOffset, UU.byteLength),
                    gU = Math.min(RU.getUint32(28, !0), UU.byteLength - 28 - 4);
                  return (new TextDecoder).decode(UU.subarray(32, 32 + gU)).slice(0, 200)
                }(new Uint8Array(RU.bytes, 0, RU.len));
                this.countFailedJob(kR.d.test(gU), "light_refused_input", gU), this.logRefusal(UU, gU)
              }
              RU.status === SR.zb.HeapRefused && (gU.heapRetries = Math.min(gU.heapRetries + 1, 4), this.logHeapRefusal(UU))
            }
            if (this.options.write(RU.jobId, SR.Vd.JobResult, RU.status, UU, RU.workerUs, new Uint8Array(RU.bytes, 0, RU.len)), this.recycle(RU.bytes), RU.spare && this.recycle(RU.spare), !tU) break;
            if (gU.startsWithoutResult = 0, 0 === RU.jobId) {
              this.lose(UU, `the tables trapped its wasm: ${RU.trap}`);
              break
            }
            gU.trapsWithoutResult++;
            const pU = gU.trapsWithoutResult > 6;
            gU.gone ||= pU, this.lose(UU, `a job trapped its wasm: ${RU.trap}`), pU && this.giveUp(UU, `trapped ${gU.trapsWithoutResult} jobs in a row`, "every meshing worker kept trapping");
            break
          }
        }
      }
      countFailedJob(UU, RU, gU) {
        if (UU) {
          if (this.memoryFailureCounted) return;
          this.memoryFailureCounted = !0
        } else this.faultsReported.has(RU) || (this.faultsReported.add(RU), this.options.onLightFault(RU, gU));
        this.failedJobs++
      }
      logRefusal(UU, RU) {
        var gU;
        !this.refusals.has(RU) && this.refusals.size >= 16 && (RU = "(other reasons)");
        const tU = (null !== (gU = this.refusals.get(RU)) && void 0 !== gU ? gU : 0) + 1;
        this.refusals.set(RU, tU), (0, Bt.C)(tU) && console.warn(`[bloxd-wasm-client] meshing worker ${UU} refused a chunk (${tU} so far for this reason): ${RU}`)
      }
      logHeapRefusal(UU) {
        this.heapRefusals++, (0, Bt.C)(this.heapRefusals) && console.warn(`[bloxd-wasm-client] meshing worker ${UU} was refused memory for a chunk's mesh (${this.heapRefusals} so far)`)
      }
      giveUp(UU, RU, gU) {
        const tU = this.slots[UU];
        if (tU.gone = !0, tU.goneFor = {
            why: RU,
            failure: gU
          }, console.warn(`[bloxd-wasm-client] meshing worker ${UU} ${RU}: giving up on it`), this.slots.every((UU => UU.gone))) {
          this.stop();
          const UU = new Set(this.slots.map((UU => {
              var RU;
              return null === (RU = UU.goneFor) || void 0 === RU ? void 0 : RU.failure
            }))),
            RU = this.slots.map(((UU, RU) => {
              var gU, tU;
              return `worker ${RU} ${null!==(gU=null===(tU=UU.goneFor)||void 0===tU?void 0:tU.why)&&void 0!==gU?gU:"went"}`
            }));
          this.options.fail(1 === UU.size ? gU : `no meshing worker is left (${RU.join(", ")})`)
        }
      }
      lose(UU, RU, gU) {
        var tU, pU, EU;
        const PU = this.slots[UU];
        console.warn(`[bloxd-wasm-client] meshing worker ${UU} was lost: ${RU}`), vt(PU), null === (tU = PU.worker) || void 0 === tU || tU.terminate(), PU.worker = null, PU.heapRetries = 0, null === (pU = (EU = this.options).onMemoryGone) || void 0 === pU || pU.call(EU, UU), this.stopped || (gU ? gU() : this.options.onWorkerLost(RU), PU.started && (PU.started = !1, this.options.write(0, SR.Vd.WorkerLost, 0, UU, 0, rt)), this.start(UU))
      }
      buffer(UU) {
        var RU;
        return null !== (RU = this.pooled(UU)) && void 0 !== RU ? RU : new ArrayBuffer(Math.max(16384, UU))
      }
      pooled(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gU = -1;
        for (let pU = 0; pU < this.pool.length; pU++) {
          const tU = this.pool[pU].byteLength;
          tU >= UU && (gU < 0 || (RU ? tU > this.pool[gU].byteLength : tU < this.pool[gU].byteLength)) && (gU = pU)
        }
        if (gU < 0) return null;
        const tU = this.pool[gU];
        return this.pool[gU] = this.pool[this.pool.length - 1], this.pool.pop(), tU
      }
      recycle(UU) {
        this.pool.length < 4 * this.slots.length && UU.byteLength > 0 && UU.byteLength <= 1048576 && this.pool.push(UU)
      }
    }

    function vt(UU) {
      var RU;
      null === (RU = UU.watch) || void 0 === RU || RU.cancel(), UU.watch = null
    }
    var dt = gU(40340),
      Ht = gU(40328),
      St = gU(40402),
      st = gU(40411),
      yt = (gU(40186), gU(40415)),
      kt = gU(40369);

    function Ft(UU) {
      const RU = new Uint8Array(UU.length >> 2);
      for (let gU = 0; gU < RU.length; gU++) RU[gU] = UU[4 * gU + 3];
      return RU
    }
    async function it(UU) {
      const RU = await (0, yt.f)(UU);
      try {
        const {
          width: UU,
          height: gU,
          pixels: tU
        } = (0, kt.p)(RU);
        return {
          width: UU,
          height: gU,
          alpha: Ft(tU)
        }
      } finally {
        RU.close()
      }
    }
    class At {
      constructor(UU, RU, gU) {
        let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : it;
        this.session = UU, this.sources = RU, this.warn = gU, this.load = tU, this.nextPoll = 0, this.pC = !1, this.warned = new Set
      }
      drain(UU) {
        if (UU < this.nextPoll) return;
        this.nextPoll = UU + 250;
        const RU = this.session.sunShadowWantedTextures();
        if (RU)
          for (let gU = 0; gU + 1 < RU.length; gU += 2) this.hand(RU[gU], RU[gU + 1]);
        for (const gU of this.session.takeSunShadowWarnings()) this.warn(gU)
      }
      dispose() {
        this.pC = !0
      }
      async hand(UU, RU) {
        var gU, tU, pU, EU, PU;
        let TU, qU = null;
        try {
          if (qU = await this.sources.blockImageUrl(UU), null === qU) throw new Error(`block image ${UU} has no URL`);
          TU = await this.load(qU)
        } catch (cU) {
          var KU;
          const RU = null !== (KU = qU) && void 0 !== KU ? KU : `block image ${UU}`;
          this.warned.has(RU) || (this.warned.add(RU), this.warn(`sun shadow plane texture ${RU} didn't load: its blocks cast no shadow`, cU))
        }
        this.pC || this.session.setSunShadowTexture(UU, RU, null !== (gU = null === (tU = TU) || void 0 === tU ? void 0 : tU.width) && void 0 !== gU ? gU : 0, null !== (pU = null === (EU = TU) || void 0 === EU ? void 0 : EU.height) && void 0 !== pU ? pU : 0, null === (PU = TU) || void 0 === PU ? void 0 : PU.alpha)
      }
    }
    var zt = gU(40345),
      Mt = gU(40421),
      Dt = gU(40425),
      Lt = gU(40352),
      Nt = gU(40358),
      lt = gU(9030),
      Ot = gU(8887),
      Up = gU(40437);
    const Rp = 8192,
      gp = new Set;
    const tp = new Set([...Ot.b, "sceneDownload"]);
    var pp = gU(40201),
      Ep = gU(40071);
    const Pp = new Uint8Array(0);
    let Tp = null;

    function qp(UU) {
      return {
        aux: SR.ac.AdStart | (UU ? SR.ac.PreventMovement : 0),
        payload: Pp
      }
    }
    var Kp = gU(2581),
      cp = gU(2590);
    const Gp = "__bloxdSceneCapture";
    var jp = gU(1683),
      Cp = gU(2659);
    let hp = null,
      Qp = null,
      ep = null,
      Wp = !1;

    function fp() {
      hp ??= performance.now()
    }
    var xp = gU(40441);
    class mp {
      constructor(UU) {
        var RU, gU;
        this.host = UU, this.requested = null, this.landed = null, this.confirm = null, this.channel = void 0, this.oneShotStored = !0, this.startRead = void 0, this.landRequest = () => {}, this.landing = new Promise((UU => {
          this.landRequest = UU
        })), this.follow = UU => {
          let RU = UU;
          return Promise.race([this.startRead, this.landing]).then((async () => {
            const UU = null === this.requested && null !== RU;
            var gU;
            UU && (null === (gU = RU) || void 0 === gU || gU(null));
            const tU = await this.landing;
            var pU;
            null === tU && UU || (null === (pU = RU) || void 0 === pU || pU(tU))
          })), () => {
            RU = null
          }
        }, this.startRead = (gU = UU.store, gU.keys().then((UU => ({
          own: UU.includes(eg.c),
          oneShot: UU.includes(eg.e)
        })), (() => ({
          own: !0,
          oneShot: !0
        })))).then((UU => {
          let {
            own: RU,
            oneShot: gU
          } = UU;
          this.oneShotStored = gU, (RU || gU) && this.request()
        })), this.channel = (null !== (RU = UU.openChannel) && void 0 !== RU ? RU : eg.v)(), null !== this.channel && (this.channel.onmessage = () => {
          this.request()
        })
      }
      request() {
        var UU;
        if (null !== this.requested) return this.requested;
        null === (UU = this.channel) || void 0 === UU || UU.close(), this.channel = null;
        const RU = this.oneShotStored;
        return this.requested = function(UU, RU, gU) {
          return new Promise((RU => {
            RU(UU())
          })).catch((UU => (null !== RU && (0, eg.o)(RU), gU(UU), null)))
        }((() => this.host.load(RU).then((UU => (UU.setGamePackConfirm(this.confirm), this.landed = UU, UU)))), RU ? this.host.store : null, this.host.ku), this.landRequest(this.requested), this.requested
      }
      loaded() {
        return this.landed
      }
      forJoin() {
        return null !== this.requested ? this.requested : Promise.race([this.startRead, this.landing]).then((() => {
          var UU;
          return null !== (UU = this.requested) && void 0 !== UU ? UU : null
        }))
      }
      setGamePackConfirm(UU) {
        var RU;
        this.confirm = UU, null === (RU = this.landed) || void 0 === RU || RU.setGamePackConfirm(UU)
      }
    }
    var Ip = gU(36058);
    const Jp = 216 * Ip.e,
      wp = 92 * Ip.d,
      np = 64 * Ip.e,
      bp = 16 * Ip.e;

    function op() {
      var UU, RU;
      return null !== (UU = null === (RU = performance.memory) || void 0 === RU ? void 0 : RU.DW) && void 0 !== UU ? UU : null
    }
    class Zp {
      constructor(UU, RU) {
        this.budgetBytes = UU, this.reads = RU, this.estimate = null, this.shedAt = null
      }
      read(UU) {
        var RU;
        const gU = this.reads.storedChunks(),
          tU = this.reads.gpuBytes(),
          pU = Math.max(null !== (RU = this.reads.jsHeapBytes()) && void 0 !== RU ? RU : 0, np),
          EU = Jp + UU + pU + tU + gU * wp;
        this.estimate = {
          wasmBytes: UU,
          jsHeapBytes: pU,
          gpuBytes: tU,
          storedChunks: gU,
          totalBytes: EU
        }
      }
      last() {
        return this.estimate
      }
      takeShed() {
        const {
          estimate: UU,
          budgetBytes: RU,
          shedAt: gU
        } = this;
        return !(null === UU || null === RU || UU.totalBytes < RU || null !== gU && UU.totalBytes < gU + bp) && (this.shedAt = UU.totalBytes, !0)
      }
      describe() {
        const {
          estimate: UU,
          budgetBytes: RU
        } = this;
        return null === UU ? null : `estimate ${(0,Ip.h)(UU.totalBytes)} MiB of budget ${null===RU?"none":(0,Ip.h)(RU)}: wasm ${(0,Ip.h)(UU.wasmBytes)} js ${(0,Ip.h)(UU.jsHeapBytes)} gpu ${(0,Ip.h)(UU.gpuBytes)} chunks ${UU.storedChunks}`
      }
      snapshot() {
        const {
          estimate: UU,
          budgetBytes: RU
        } = this;
        return {
          ...null === UU ? {} : {
            footprintMiB: Number((0, Ip.h)(UU.totalBytes)),
            gpuMiB: Number((0, Ip.h)(UU.gpuBytes)),
            storedChunks: UU.storedChunks
          },
          footprintBudgetMiB: null === RU ? -1 : Number((0, Ip.h)(RU))
        }
      }
    }
    var ap = gU(2624),
      Yp = gU(4183),
      Bp = gU(38654),
      Vp = gU(37479);
    const rp = sR.N + 1,
      Xp = 4096 * rp;
    class vp {
      constructor(UU, RU) {
        this.log = UU, this.take = RU, this.WT = [], this.unshown = new Map, this.latest = new Map
      }
      afterFrame(UU, RU) {
        const gU = this.take();
        gU.length >= sR.M && gU[0] > 0 && (0, ap.h)("remesh", `${gU[0]} core records lost to a full log`);
        const tU = this.WT;
        for (let pU = sR.M; pU + sR.N <= gU.length; pU += sR.N) {
          for (let UU = pU; UU < pU + sR.N; UU++) tU.push(gU[UU]);
          tU.push(UU)
        }
        if (RU || !(tU.length < Xp)) {
          for (let RU = 0; RU < tU.length; RU += rp) this.feed(RU, UU);
          tU.length = 0, RU && this.log.frame(UU)
        }
      }
      feed(UU, RU) {
        var gU;
        const tU = this.WT,
          pU = (0, Vp.f)(tU[UU + 1], tU[UU + 2], tU[UU + 3]),
          EU = tU[UU + 4],
          PU = tU[UU + sR.N];
        switch (tU[UU]) {
          case sR.wb.Edit:
            this.log.edit(pU, PU);
            break;
          case sR.wb.Sent:
            this.latest.set(pU, EU), this.log.sent(pU, EU, tU[UU + 5], tU[UU + 6], tU[UU + 7], null !== (gU = this.unshown.get(pU)) && void 0 !== gU ? gU : Vp.c, PU);
            break;
          case sR.wb.Done: {
            this.log.received(EU, tU[UU + 5] / 1e3, PU);
            const RU = this.unshown.get(pU);
            void 0 === RU ? this.unshown.set(pU, [EU]) : RU.push(EU);
            break
          }
          case sR.wb.Failed: {
            const UU = this.latest.get(pU);
            void 0 !== UU && UU !== EU ? this.log.reassign(pU, EU, UU) : this.log.failed(EU), this.ended(pU, EU);
            break
          }
          case sR.wb.Shown:
            this.log.applied(pU, EU, RU), this.ended(pU, EU);
            break;
          case sR.wb.Replaced:
            this.log.reassign(pU, EU, tU[UU + 5]), this.ended(pU, EU);
            break;
          case sR.wb.Emptied:
            this.log.emptied(pU, RU);
            break;
          default:
            console.warn(`[debug:remesh] unknown core record kind ${tU[UU]}`)
        }
      }
      ended(UU, RU) {
        this.latest.get(UU) === RU && this.latest.delete(UU);
        const gU = this.unshown.get(UU);
        if (void 0 === gU) return;
        const tU = gU.indexOf(RU);
        tU >= 0 && gU.splice(tU, 1), 0 === gU.length && this.unshown.delete(UU)
      }
    }
    let dp = null;
    var Hp = gU(2942);
    const Sp = new Uint8Array(0);
    class sp {
      constructor(UU) {
        this.options = UU, this.worker = null, this.watch = null, this.createWorker = null, this.loading = !1, this.WT = [], this.startsWithoutResult = 0, this.lastLoss = "", this.seed = null, this.gone = !1, this.pool = [], null !== UU.module ? UU.write(0, SR.Vd.WorldgenStarted, 0, 0, Sp) : this.giveUp()
      }
      take(UU, RU) {
        if (!(this.gone || null === this.worker && null === this.WT))
          if (UU === SR.Xd.WorldgenSeed) {
            const UU = 0 === RU.byteLength ? null : this.options.decodeSettings(RU);
            null === UU || function(UU, RU) {
              if ((null === UU || void 0 === UU ? void 0 : UU.byteLength) !== RU.byteLength) return !1;
              for (let gU = 0; gU < UU.byteLength; gU++)
                if (UU[gU] !== RU[gU]) return !1;
              return !0
            }(this.seed, RU) || (this.seed = RU.slice(), this.startsWithoutResult = null === this.worker ? 0 : 1), this.dropHeld(), this.post({
              type: "seed",
              settings: UU
            }, []), null !== UU ? this.load() : this.loading || this.options.onMapWithoutWorldgen()
          } else if (UU === SR.Xd.Generate) {
          var gU;
          const UU = new DataView(RU.buffer, RU.byteOffset, SR.Pd),
            tU = null !== (gU = this.pool.pop()) && void 0 !== gU ? gU : new ArrayBuffer(8192);
          this.post({
            type: "generate",
            ticket: UU.getUint32(0, !0),
            x: UU.getInt32(4, !0),
            y: UU.getInt32(8, !0),
            z: UU.getInt32(12, !0),
            bytes: tU
          }, [tU])
        }
      }
      stop() {
        var UU;
        this.gone = !0, this.dropHeld(), this.endWatch(), null === (UU = this.worker) || void 0 === UU || UU.terminate(), this.worker = null
      }
      post(UU, RU) {
        var gU;
        null !== this.WT ? this.WT.push({
          message: UU,
          transfer: RU
        }) : null === (gU = this.worker) || void 0 === gU || gU.postMessage(UU, RU)
      }
      load() {
        this.loading || (this.loading = !0, this.options.loadWorker().then((UU => {
          this.createWorker = UU, this.start()
        }), (UU => {
          this.gone || (this.giveUp(), this.options.onLoadFailed(UU))
        })))
      }
      start() {
        const {
          module: UU
        } = this.options, RU = this.createWorker;
        if (this.gone || null === UU || null === RU) return;
        if (this.startsWithoutResult >= 3) return this.giveUp(), void this.options.onGaveUp(this.lastLoss);
        let gU;
        this.startsWithoutResult++;
        try {
          gU = RU()
        } catch (pU) {
          return console.warn("[bloxd-wasm-client] the world-gen worker did not start", pU), this.lastLoss = `it did not start (${String(pU)})`, void this.start()
        }
        this.worker = gU, gU.onmessage = UU => {
          let {
            data: RU
          } = UU;
          this.worker === gU && this.onReply(gU, RU)
        }, gU.onerror = UU => {
          UU.preventDefault(), this.worker === gU && this.lose(UU.message || "its script failed")
        };
        try {
          gU.postMessage({
            type: "start",
            module: UU,
            jC: tU.e.jC
          })
        } catch (pU) {
          return console.warn("[bloxd-wasm-client] the world-gen worker could not be sent the module", pU), this.lastLoss = `it could not be sent the module (${String(pU)})`, gU.terminate(), this.worker = null, void this.start()
        }
        this.watch = new Vt.g(Vt.e, (UU => {
          this.lose((0, Vt.k)(UU), (() => {
            this.options.onStartTimeout(UU)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(UU, RU) {
        switch (RU.type) {
          case "started": {
            this.endWatch();
            const RU = this.WT;
            if (null === RU) {
              this.options.write(0, SR.Vd.WorldgenStarted, 0, 0, Sp);
              break
            }
            this.WT = null;
            for (const {
                message: gU,
                transfer: tU
              }
              of RU) UU.postMessage(gU, tU);
            break
          }
          case "lost":
            this.lose(RU.reason);
            break;
          case "memory":
            var gU, tU;
            null === (gU = (tU = this.options).onMemoryStats) || void 0 === gU || gU.call(tU, RU.stats);
            break;
          case "result":
            RU.status !== SR.zb.Trapped && (this.startsWithoutResult = 0), this.options.write(RU.ticket, SR.Vd.WorldgenResult, RU.status, RU.workerUs, new Uint8Array(RU.bytes, 0, RU.len)), this.recycle(RU.bytes), RU.spare && this.recycle(RU.spare)
        }
      }
      lose(UU, RU) {
        var gU, tU, pU;
        console.warn(`[bloxd-wasm-client] the world-gen worker was lost: ${UU}`), this.lastLoss = UU, this.endWatch(), null === (gU = this.worker) || void 0 === gU || gU.terminate(), this.worker = null, null === (tU = (pU = this.options).onMemoryGone) || void 0 === tU || tU.call(pU), this.gone || (RU ? RU() : this.options.onWorkerLost(UU), this.dropHeld(), this.WT = null, this.options.write(0, SR.Vd.WorldgenLost, SR._d.Lost, 0, Sp), this.start())
      }
      giveUp() {
        this.gone = !0, this.dropHeld(), this.options.write(0, SR.Vd.WorldgenLost, SR._d.Gone, 0, Sp)
      }
      endWatch() {
        var UU;
        null === (UU = this.watch) || void 0 === UU || UU.cancel(), this.watch = null
      }
      dropHeld() {
        if (null !== this.WT) {
          for (const {
              message: UU
            }
            of this.WT) "generate" === UU.type && this.recycle(UU.bytes);
          this.WT.length = 0
        }
      }
      recycle(UU) {
        this.pool.length < 16 && UU.byteLength > 0 && UU.byteLength <= 16384 && this.pool.push(UU)
      }
    }
    var yp = gU(37280),
      kp = gU(3392),
      Fp = gU(40049),
      ip = gU(40444),
      Ap = gU(40300);
    const zp = /[(@\s]([^\s(@]+)$/,
      Mp = /:\d/;

    function Dp(UU, RU) {
      for (let gU = 0; gU + RU.length <= UU.length; gU++) {
        let tU = 0;
        for (; tU < RU.length && UU[gU + tU] === RU[tU];) tU++;
        if (tU === RU.length) return gU
      }
      return -1
    }

    function Lp(UU) {
      return "(" === UU || ")" === UU || "@" === UU || "," === UU || " " === UU || "\t" === UU
    }

    function Np(UU, RU) {
      let gU = RU;
      for (; gU > 0 && !Lp(UU[gU - 1]);) gU--;
      let tU = RU;
      for (; tU < UU.length && !Lp(UU[tU]);) tU++;
      let pU = "";
      for (let EU = gU; EU < tU; EU++) pU += UU[EU];
      return pU
    }
    const lp = (UU, RU) => UU.includes(RU),
      Op = UU => {
        try {
          return UU()
        } catch {
          return !1
        }
      },
      UE = -1,
      RE = UU => {
        try {
          return UU()
        } catch {
          return UE
        }
      };

    function gE(UU, RU) {
      return {
        probe: (gU, tU, pU) => {
          try {
            return ((gU, tU, pU) => {
              switch (gU) {
                case SR.qc.StackCheck:
                  return RU.stackCheck() ? 1 : 0;
                case SR.qc.ConfirmMesh:
                  return RU.confirmMesh();
                case SR.qc.IndexPassReplaced:
                  return RU.indexPassReplaced() ? 1 : 0;
                case SR.qc.ProductSubChanged:
                  return RU.productSubChanged() ? 1 : 0;
                case SR.qc.RenderStatus:
                  return RU.bK();
                case SR.qc.Held:
                  return RU.WT();
                case SR.qc.PlayerKilledSubs:
                  return RU.playerKilledSubs();
                case SR.fb: {
                  const gU = RU.getComplete();
                  return null === gU ? 0 : (0, mt.m)(mt.y, mt.bb, [gU, new mt.d((0, mt.G)(UU()), tU, pU)]).written
                }
                default:
                  return 0
              }
            })(gU, tU, pU)
          } catch {
            return SR.gc
          }
        }
      }
    }
    class tE {
      constructor(UU) {
        this.write = UU, this.flagsWritten = 0, this.written = (0, mt.o)(null)
      }
      HG(UU) {
        let {
          flags: RU,
          values: gU
        } = UU;
        for (let tU = 0; tU < gU.length; tU++) this.value(gU[tU][0], gU[tU][1]);
        this.setFlags(RU | SR.c.Ready)
      }
      value(UU, RU) {
        this.written[UU] !== RU && this.write(UU, RU, 0) && (this.written[UU] = RU)
      }
      setFlags(UU) {
        const RU = UU & ~this.flagsWritten;
        0 !== RU && this.write(SR.f.Flags, RU, RU) && (this.flagsWritten |= RU)
      }
      originStackHit() {
        return this.write(SR.f.Flags, SR.c.OriginStackHit, SR.c.OriginStackHit)
      }
    }
    const pE = {
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
      EE = 1e3;

    function PE(UU, RU) {
      const gU = new tE(RU);
      let tU = !1;
      gU.HG(UU.HG());
      const pU = (0, mt.V)((() => {
          gU.HG(UU.HG())
        }), EE),
        EU = () => {
          UU.checks.stackCheck() && (tU = !0)
        };
      (0, ip.j)(EU);
      const PU = () => {
        const RU = UU.checkPadCall();
        0 !== RU && gU.setFlags(RU)
      };
      return (0, Fp.j)(PU), {
        onInput: RU => {
          (function(UU) {
            switch (UU) {
              case SR.vb.KeyDown:
              case SR.vb.KeyUp:
              case SR.vb.MouseDown:
              case SR.vb.MouseUp:
              case SR.vb.Wheel:
              case SR.vb.TouchStart:
              case SR.vb.TouchEnd:
              case SR.vb.TouchButton:
              case SR.vb.PadAction:
                return !0;
              default:
                return !1
            }
          })(RU) && UU.checks.stackCheck() && (tU = !0)
        },
        onSend: EU,
        beforeFrame: () => {
          tU && gU.originStackHit() && (tU = !1)
        },
        onEvent: RU => {
          const tU = UU.checkEvent(RU);
          gU.value(SR.f.ProbeUsedProp, UU.usedProp()), 0 !== tU && gU.setFlags(tU)
        },
        stop: () => {
          (0, mt.Y)(pU), (0, ip.g)(EU), (0, Fp.f)(PU)
        }
      }
    }
    let TE;
    const qE = [1, "length", 2, void 0, null, 3, 0, "s", "cw==", 1e5, "stack", "name", 228, "b", "a", 125, !1, "d", !0, 85, 174, 42, 74, 91, 75, 7, "f", 93, 4, "h", 120, "c", "e", 143, 76, 10, 84, "o", 241, 104, 82, 200, 83, 5, 107, 150, "string", 230, "m", 171, 1023, 65536, 55296, 56320, 100, 6, 12, 63, 128, 135, 192, 69, "Invalid byte index", 255, 224, 31, "Invalid continuation byte", 240, 21, 15, 90, 18, 70, 172, "g", 92, 229, 51, 111, 185, 142, "functi", "on", 27, ")", 141, "K", 58, 79, "protot", "ype", "decode", 89, "I=", "p", "eTR5bm", "u", "v", "t", "r", "M", "E", "Bd", "chEven", "dispat", "now", 8, 49, "confir", "mMesh", "produc", "player", "Killed", "number", 65535, "toString", "get", 124, "q", 183, 39, "n", "None", 11, "En", "tOverw", "ritten", "plete"];

    function KE() {}

    function cE() {
      cE = function() {}
    }
    TE = function(UU) {
      let RU = arguments[qE[1]] > qE[0] && arguments[qE[0]] !== qE[3] ? arguments[qE[0]] : () => qE[4],
        gU = arguments[qE[1]] > qE[2] && arguments[qE[2]] !== qE[3] ? arguments[qE[2]] : qE[4],
        tU = arguments[qE[1]] > qE[5] && arguments[qE[5]] !== qE[3] ? arguments[qE[5]] : "";
      const pU = window,
        EU = (qE[6], mt[qE[7]])("RXJyb3" + qE[93]),
        PU = (qE[6], mt[qE[7]])("c3RhY2s="),
        TU = (qE[6], mt[qE[7]])("Y2FwdHVyZVN0YWNrVHJhY2U="),
        KU = (qE[6], mt[qE[7]])("c3RhY2tUcmFjZUxpbWl0"),
        cU = (qE[6], mt[qE[7]])("bmF0aXZl"),
        GU = [(qE[6], mt[qE[7]])("bWFpbi5qcw=="), (qE[6], mt[qE[7]])("aW5kZXguanM="), (qE[6], mt[qE[7]])("dXNlcnNjcmlwdA=="), (qE[6], mt[qE[7]])("Y29udGVudC5q" + qE[8]), (qE[6], mt[qE[7]])("b3B0aW9ucy5q" + qE[8]), (qE[6], mt[qE[7]])("cG9wdXAuanM="), (qE[6], mt[qE[7]])("LnVzZXIuanM="), (qE[6], mt[qE[7]])("Y2hyb21lLWV4dGVuc2lvbg==")],
        jU = (...UU) => {
          UU[qE[1]] = qE[0];
          const RU = pU[EU],
            gU = RU;
          gU[KU] < qE[9] && (gU[KU] = qE[9]);
          const tU = "string" === typeof(jU = (new RU)[PU]) ? jU : `${jU}`,
            qU = {},
            cU = gU[TU];
          var jU;
          typeof cU === qE[81] + qE[82] && (qE[6], mt[qE[48]])(cU, RU, [qU]);
          const uU = qU[PU],
            CU = UU[qE[6]] ? GU[qE[1]] : GU[qE[1]] - qE[0];
          for (let pU = qE[6]; pU < CU; pU++) {
            if (lp(tU, GU[pU])) return {
              [qE[10]]: tU,
              [qE[11]]: GU[pU]
            };
            if (typeof uU === qE[46] && lp(uU, GU[pU])) return {
              [qE[10]]: uU,
              [qE[11]]: GU[pU]
            }
          }
          return qE[4]
        },
        uU = (...UU) => (UU[qE[1]] = qE[0], jU(UU[qE[6]]) !== qE[4]);
      let CU = qE[4],
        hU = qE[4];
      const QU = (...UU) => {
        UU[qE[1]] = qE[0], "zzqZ3Ck" in KE && function(...UU) {
          cE(UU[qE[1]] = qE[6], UU[qE[19]] = function(...RU) {
            return RU[qE[1]] = qE[2], UU[qE[12]]({}, RU[qE[6]], RU[qE[0]])
          }, UU[qE[12]] = function(...RU) {
            if (cE(RU[qE[1]] = qE[5], RU[qE[14]] = {}), RU[qE[6]][RU[qE[0]] + RU[qE[2]]] !== qE[3]) return RU[qE[6]][RU[qE[0]] + RU[qE[2]]];
            if (RU[qE[0]] === RU[qE[2]]) return qE[18];
            for (RU[qE[13]] = qE[6]; RU[qE[13]] < RU[qE[0]].length; RU[qE[13]]++) RU[qE[14]][RU[qE[0]][RU[qE[13]]]] === qE[3] && (RU[qE[14]][RU[qE[0]][RU[qE[13]]]] = qE[6]), RU[qE[14]][RU[qE[2]][RU[qE[13]]]] === qE[3] && (RU[qE[14]][RU[qE[2]][RU[qE[13]]]] = qE[6]), cE(RU[qE[14]][RU[qE[0]][RU[qE[13]]]]++, RU[qE[14]][RU[qE[2]][RU[qE[13]]]]--);
            for (RU[-qE[15]] in RU[qE[14]])
              if (RU[qE[14]][RU[-qE[15]]] !== qE[6]) return RU[qE[6]][RU[qE[0]] + RU[qE[2]]] = qE[16], qE[16];
            for (RU[qE[17]] = qE[0]; RU[qE[17]] < RU[qE[0]].length; RU[qE[17]]++)
              if (UU[qE[12]](RU[qE[6]], RU[qE[0]].substr(qE[6], RU[qE[17]]), RU[qE[2]].substr(qE[6], RU[qE[17]])) && UU[qE[12]](RU[qE[6]], RU[qE[0]].substr(RU[qE[17]]), RU[qE[2]].substr(RU[qE[17]])) || UU[qE[12]](RU[qE[6]], RU[qE[0]].substr(qE[6], RU[qE[17]]), RU[qE[2]].substr(RU[qE[2]].length - RU[qE[17]])) && UU[qE[12]](RU[qE[6]], RU[qE[0]].substr(RU[qE[17]]), RU[qE[2]].substr(qE[6], RU[qE[2]].length - RU[qE[17]]))) return RU[qE[6]][RU[qE[0]] + RU[qE[2]]] = qE[18], qE[18];
            return RU[qE[6]][RU[qE[0]] + RU[qE[2]]] = qE[16], qE[16]
          }, console.log(UU[qE[19]]))
        }();
        try {
          return UU[qE[6]]()
        } catch {
          return qE[18]
        }
      };
      let eU = qE[16];
      const WU = () => {
          !eU && (qE[6], mt[qE[96]])() && (eU = qE[18])
        },
        fU = (...UU) => {
          UU[qE[1]] = qE[0], "hxH8hO" + qE[100] in KE && function(...UU) {
            cE(UU[qE[1]] = qE[6], UU[qE[24]] = function(...UU) {
              for (cE(UU[qE[1]] = qE[0], UU[qE[0]] = qE[6], UU[qE[13]] = {}, UU[qE[5]] = qE[6], UU[qE[17]] = qE[6], UU[-qE[23]] = qE[6], UU[-qE[21]] = UU[qE[6]].length), UU[-qE[20]] = qE[6]; UU[-qE[20]] < UU[-qE[21]]; UU[-qE[20]]++) {
                for (cE(UU[qE[13]] = {}, UU[qE[5]] = qE[6], UU[qE[17]] = qE[0]), UU[qE[22]] = UU[-qE[20]] + qE[0]; UU[qE[22]] < UU[-qE[21]]; UU[qE[22]]++) UU[qE[6]][UU[-qE[20]]].x !== UU[qE[6]][UU[qE[22]]].x || UU[qE[6]][UU[-qE[20]]].y !== UU[qE[6]][UU[qE[22]]].y ? (UU[qE[6]][UU[-qE[20]]].y === UU[qE[6]][UU[qE[22]]].y ? UU[-qE[23]] = Number.MAX_SAFE_INTEGER : UU[-qE[23]] = (UU[qE[6]][UU[-qE[20]]].x - UU[qE[6]][UU[qE[22]]].x) / (UU[qE[6]][UU[-qE[20]]].y - UU[qE[6]][UU[qE[22]]].y), UU[qE[13]][UU[-qE[23]]] || (UU[qE[13]][UU[-qE[23]]] = qE[6]), cE(UU[qE[13]][UU[-qE[23]]]++, UU[qE[5]] = Math.max(UU[qE[5]], UU[qE[13]][UU[-qE[23]]]))) : UU[qE[17]]++;
                cE(UU[qE[5]] += UU[qE[17]], UU[qE[0]] = Math.max(UU[qE[0]], UU[qE[5]]))
              }
              return UU[qE[0]]
            }, console.log(UU[qE[24]]))
          }();
          try {
            return UU[qE[6]]()
          } catch {
            function RU(...UU) {
              cE(UU[qE[1]] = qE[6], UU[qE[13]] = function(...UU) {
                for (cE(UU[qE[1]] = qE[0], UU[qE[14]] = qE[6], UU[qE[2]] = {}, UU[qE[27]] = qE[6], UU[qE[28]] = qE[6], UU[-qE[30]] = qE[6], UU[qE[26]] = UU[qE[6]].length), UU[qE[25]] = qE[6]; UU[qE[25]] < UU[qE[26]]; UU[qE[25]]++) {
                  for (cE(UU[qE[2]] = {}, UU[qE[27]] = qE[6], UU[qE[28]] = qE[0]), UU[qE[29]] = UU[qE[25]] + qE[0]; UU[qE[29]] < UU[qE[26]]; UU[qE[29]]++) UU[qE[6]][UU[qE[25]]].x !== UU[qE[6]][UU[qE[29]]].x || UU[qE[6]][UU[qE[25]]].y !== UU[qE[6]][UU[qE[29]]].y ? (UU[qE[6]][UU[qE[25]]].y === UU[qE[6]][UU[qE[29]]].y ? UU[-qE[30]] = Number.MAX_SAFE_INTEGER : UU[-qE[30]] = (UU[qE[6]][UU[qE[25]]].x - UU[qE[6]][UU[qE[29]]].x) / (UU[qE[6]][UU[qE[25]]].y - UU[qE[6]][UU[qE[29]]].y), UU[qE[2]][UU[-qE[30]]] || (UU[qE[2]][UU[-qE[30]]] = qE[6]), cE(UU[qE[2]][UU[-qE[30]]]++, UU[qE[27]] = Math.max(UU[qE[27]], UU[qE[2]][UU[-qE[30]]]))) : UU[qE[28]]++;
                  cE(UU[qE[27]] += UU[qE[28]], UU[qE[14]] = Math.max(UU[qE[14]], UU[qE[27]]))
                }
                return UU[qE[14]]
              }, console.log(UU[qE[13]]))
            }
            return "h4rI1g" + qE[97] in KE && RU(), qE[3]
          }
        },
        xU = (...UU) => {
          UU[qE[1]] = qE[0];
          try {
            return UU[qE[6]](), qE[18]
          } catch {
            function RU(...UU) {
              function RU() {}
              UU[qE[1]] = qE[6], cE(UU[qE[36]] = function(...UU) {
                for (cE(UU[qE[1]] = qE[2], UU[qE[2]] = qE[6], UU[-qE[33]] = qE[6], UU[qE[31]] = new RU(qE[6]), UU[-qE[34]] = UU[qE[31]], UU[qE[32]] = UU[qE[6]], UU[qE[25]] = UU[qE[0]]); UU[qE[32]] !== qE[4] || UU[qE[25]] !== qE[4];) cE(UU[-qE[33]] = (UU[qE[32]] ? UU[qE[32]].val : qE[6]) + (UU[qE[25]] ? UU[qE[25]].val : qE[6]) + UU[qE[2]], UU[qE[2]] = Math.floor(UU[-qE[33]] / qE[35]), UU[-qE[34]].next = new RU(UU[-qE[33]] % qE[35]), UU[-qE[34]] = UU[-qE[34]].next, UU[qE[32]] = UU[qE[32]] ? UU[qE[32]].next : qE[4], UU[qE[25]] = UU[qE[25]] ? UU[qE[25]].next : qE[4]);
                return UU[qE[2]] && (UU[-qE[34]].next = new RU(UU[qE[2]])), UU[qE[31]].next
              }, console.log(UU[qE[36]]))
            }
            return "p4ptw5C" in KE && RU(), qE[16]
          }
        },
        mU = (qE[6], mt[qE[7]])("a29qbzYzb25i"),
        IU = (qE[6], mt[qE[37]])(qE[4]);
      let JU = qE[4],
        wU = qE[16],
        nU = qE[16];
      const bU = (qE[6], mt[qE[37]])(qE[4]);
      let oU = qE[6];
      const ZU = (qE[6], mt[qE[37]])(qE[4]);
      let aU = qE[6];
      const YU = (qE[6], mt[qE[37]])(qE[4]);
      let BU = qE[16],
        VU = qE[16];
      const rU = (...RU) => {
          if (RU[qE[1]] = qE[2], "U8sdH4" + qE[74] in KE && function(...UU) {
              var RU;
              cE(UU[qE[1]] = qE[6], RU = function(...UU) {
                cE(UU[qE[1]] = qE[0], this.hG = UU[qE[6]], this.length = qE[6], this.map = {}, this.head = qE[4], this.tail = qE[4])
              }, RU.prototype.get = function(...UU) {
                var RU;
                return cE(UU[qE[1]] = qE[0], RU = this.map[UU[qE[6]]]), RU ? (this.remove(RU), this.insert(RU.key, RU.val), RU.val) : -qE[0]
              }, RU.prototype.put = function(UU, RU) {
                this.map[UU] ? (this.remove(this.map[UU]), this.insert(UU, RU)) : this.length === this.hG ? (this.remove(this.head), this.insert(UU, RU)) : (this.insert(UU, RU), this.length++)
              }, RU.prototype.remove = function(...UU) {
                cE(UU[qE[1]] = qE[0], UU[-qE[38]] = UU[qE[6]].prev, UU[qE[13]] = UU[qE[6]].next), UU[qE[13]] && (UU[qE[13]].prev = UU[-qE[38]]), UU[-qE[38]] && (UU[-qE[38]].next = UU[qE[13]]), this.head === UU[qE[6]] && (this.head = UU[qE[13]]), this.tail === UU[qE[6]] && (this.tail = UU[-qE[38]]), delete this.map[UU[qE[6]].key]
              }, RU.prototype.insert = function(...UU) {
                cE(UU[qE[1]] = qE[2], UU[qE[2]] = new List(UU[qE[6]], UU[qE[0]]), this.tail ? (this.tail.next = UU[qE[2]], UU[qE[2]].prev = this.tail, this.tail = UU[qE[2]]) : (this.tail = UU[qE[2]], this.head = UU[qE[2]]), this.map[UU[qE[6]]] = UU[qE[2]])
              }, console.log(RU))
            }(), RU[qE[6]] === UU) {
            if (JU === qE[4]) {
              function pU(...UU) {
                UU[qE[1]] = qE[6]
              }
              "JR9nar" in KE && pU(), JU = typeof RU[qE[0]] === qE[113] ? RU[qE[0]] : -qE[0]
            } else {
              function EU(...UU) {
                cE(UU[qE[1]] = qE[6], UU[qE[14]] = function(...RU) {
                  return RU[qE[1]] = qE[2], UU[qE[39]]({}, RU[qE[6]], RU[qE[0]])
                }, UU[qE[39]] = function(...RU) {
                  if (cE(RU[qE[1]] = qE[5], RU[-qE[41]] = {}), RU[qE[6]][RU[qE[0]] + RU[qE[2]]] !== qE[3]) return RU[qE[6]][RU[qE[0]] + RU[qE[2]]];
                  if (RU[qE[0]] === RU[qE[2]]) return qE[18];
                  for (RU[qE[40]] = qE[6]; RU[qE[40]] < RU[qE[0]].length; RU[qE[40]]++) RU[-qE[41]][RU[qE[0]][RU[qE[40]]]] === qE[3] && (RU[-qE[41]][RU[qE[0]][RU[qE[40]]]] = qE[6]), RU[-qE[41]][RU[qE[2]][RU[qE[40]]]] === qE[3] && (RU[-qE[41]][RU[qE[2]][RU[qE[40]]]] = qE[6]), cE(RU[-qE[41]][RU[qE[0]][RU[qE[40]]]]++, RU[-qE[41]][RU[qE[2]][RU[qE[40]]]]--);
                  for (RU[qE[42]] in RU[-qE[41]])
                    if (RU[-qE[41]][RU[qE[42]]] !== qE[6]) return RU[qE[6]][RU[qE[0]] + RU[qE[2]]] = qE[16], qE[16];
                  for (RU[qE[17]] = qE[0]; RU[qE[17]] < RU[qE[0]].length; RU[qE[17]]++)
                    if (UU[qE[39]](RU[qE[6]], RU[qE[0]].substr(qE[6], RU[qE[17]]), RU[qE[2]].substr(qE[6], RU[qE[17]])) && UU[qE[39]](RU[qE[6]], RU[qE[0]].substr(RU[qE[17]]), RU[qE[2]].substr(RU[qE[17]])) || UU[qE[39]](RU[qE[6]], RU[qE[0]].substr(qE[6], RU[qE[17]]), RU[qE[2]].substr(RU[qE[2]].length - RU[qE[17]])) && UU[qE[39]](RU[qE[6]], RU[qE[0]].substr(RU[qE[17]]), RU[qE[2]].substr(qE[6], RU[qE[2]].length - RU[qE[17]]))) return RU[qE[6]][RU[qE[0]] + RU[qE[2]]] = qE[18], qE[18];
                  return RU[qE[6]][RU[qE[0]] + RU[qE[2]]] = qE[16], qE[16]
                }, console.log(UU[qE[14]]))
              }
              "SSEJXT" in KE && EU(), wU = qE[18]
            }
            return
          }
          const gU = IU[RU[qE[6]]];
          if (!RU[qE[0]]) {
            if (gU) {
              function PU() {
                console.log((function(...UU) {
                  for (cE(UU[qE[1]] = qE[0], UU[qE[0]] = UU[qE[6]].length, UU[-qE[34]] = [], UU[-qE[44]] = qE[6], UU[qE[28]] = qE[6], UU[qE[6]].sort(((UU, RU) => UU - RU))), UU[qE[43]] = qE[6]; UU[qE[43]] < UU[qE[0]]; UU[qE[43]]++)
                    if (!(UU[qE[43]] > qE[6] && UU[qE[6]][UU[qE[43]]] === UU[qE[6]][UU[qE[43]] - qE[0]]))
                      for (cE(UU[-qE[44]] = UU[qE[43]] + qE[0], UU[qE[28]] = UU[qE[0]] - qE[0]); UU[-qE[44]] < UU[qE[28]];)
                        if (UU[qE[6]][UU[qE[43]]] + UU[qE[6]][UU[-qE[44]]] + UU[qE[6]][UU[qE[28]]] < qE[6]) UU[-qE[44]]++;
                        else if (UU[qE[6]][UU[qE[43]]] + UU[qE[6]][UU[-qE[44]]] + UU[qE[6]][UU[qE[28]]] > qE[6]) UU[qE[28]]--;
                  else {
                    for (UU[-qE[34]].push([UU[qE[6]][UU[qE[43]]], UU[qE[6]][UU[-qE[44]]], UU[qE[6]][UU[qE[28]]]]); UU[-qE[44]] < UU[qE[28]] && UU[qE[6]][UU[-qE[44]]] === UU[qE[6]][UU[-qE[44]] + qE[0]];) UU[-qE[44]]++;
                    for (; UU[-qE[44]] < UU[qE[28]] && UU[qE[6]][UU[qE[28]]] === UU[qE[6]][UU[qE[28]] - qE[0]];) UU[qE[28]]--;
                    cE(UU[-qE[44]]++, UU[qE[28]]--)
                  }
                  return UU[-qE[34]]
                }))
              }
              "jbTEG9" + qE[13] in KE && PU(), nU = qE[18]
            }
            return
          }
          if (RU[qE[6]] !== mU) {
            function TU(...UU) {
              cE(UU[qE[1]] = qE[6], UU[qE[14]] = function(...UU) {
                for (cE(UU[qE[1]] = qE[0], UU[qE[0]] = UU[qE[6]].length, UU[qE[13]] = [], UU[qE[31]] = qE[6]), UU[qE[17]] = qE[6]; UU[qE[17]] < UU[qE[0]]; UU[qE[17]]++) UU[qE[13]].push(UU[qE[17]] !== qE[6] && UU[qE[6]][UU[qE[17]]] > UU[qE[6]][UU[qE[17]] - qE[0]] ? UU[qE[13]][UU[qE[17]] - qE[0]] + qE[0] : qE[0]);
                for (UU[qE[45]] = UU[qE[0]] - qE[0]; UU[qE[45]] >= qE[6]; UU[qE[45]]--) UU[qE[45]] !== UU[qE[0]] - qE[0] && UU[qE[6]][UU[qE[45]]] > UU[qE[6]][UU[qE[45]] + qE[0]] && (UU[qE[13]][UU[qE[45]]] = Math.max(UU[qE[13]][UU[qE[45]]], UU[qE[13]][UU[qE[45]] + qE[0]] + qE[0])), UU[qE[31]] += UU[qE[13]][UU[qE[45]]];
                return UU[qE[31]]
              }, console.log(UU[qE[14]]))
            }
            return "l61_hy" + qE[86] in KE && TU(), void(IU[RU[qE[6]]] = RU[qE[0]])
          }
          IU[RU[qE[6]]] = qE[18];
          const tU = typeof RU[qE[0]] === qE[46] ? RU[qE[0]] : "" + RU[qE[0]];
          if (!YU[tU]) {
            if ((qE[6], yp.j)(tU)) {
              function qU(...UU) {
                UU[qE[1]] = qE[6]
              }
              return "eU6SwE" + qE[37] in KE && qU(), void(VU = qE[18])
            }
            if ((qE[6], yp[qE[48]])(tU)) {
              function KU() {
                ! function(...UU) {
                  function RU(...UU) {
                    for (cE(UU[qE[1]] = qE[0], UU[qE[14]] = [], UU[qE[49]] = qE[6], UU[qE[31]] = UU[qE[6]].length, UU[qE[17]] = qE[3], UU[qE[43]] = qE[3]); UU[qE[49]] < UU[qE[31]];) cE(UU[qE[17]] = UU[qE[6]].charCodeAt(UU[qE[49]]++), UU[qE[17]] >= qE[52] && UU[qE[17]] <= 56319 && UU[qE[49]] < UU[qE[31]] ? (UU[qE[43]] = UU[qE[6]].charCodeAt(UU[qE[49]]++), (64512 & UU[qE[43]]) == qE[53] ? UU[qE[14]].push(((UU[qE[17]] & qE[50]) << qE[35]) + (UU[qE[43]] & qE[50]) + qE[51]) : (UU[qE[14]].push(UU[qE[17]]), UU[qE[49]]--)) : UU[qE[14]].push(UU[qE[17]]));
                    return UU[qE[14]]
                  }

                  function gU(...UU) {
                    if (UU[qE[1]] = qE[0], UU[qE[6]] >= qE[52] && UU[qE[6]] <= 57343) throw Error("Lone surrogate U+" + UU[qE[6]].toString(16).toUpperCase() + " is not a scalar value")
                  }

                  function tU(...RU) {
                    return RU[qE[1]] = qE[2], UU[qE[0]](RU[qE[6]] >> RU[qE[0]] & qE[57] | qE[58])
                  }

                  function pU(...RU) {
                    return RU[qE[1]] = qE[0], (4294967168 & RU[qE[6]]) == qE[6] ? UU[qE[0]](RU[qE[6]]) : (RU[qE[54]] = "", (4294965248 & RU[qE[6]]) == qE[6] ? RU[qE[54]] = UU[qE[0]](RU[qE[6]] >> qE[55] & qE[65] | qE[60]) : (4294901760 & RU[qE[6]]) == qE[6] ? cE(gU(RU[qE[6]]), RU[qE[54]] = UU[qE[0]](RU[qE[6]] >> qE[56] & qE[69] | qE[64]), RU[qE[54]] += tU(RU[qE[6]], qE[55])) : (4292870144 & RU[qE[6]]) == qE[6] && cE(RU[qE[54]] = UU[qE[0]](RU[qE[6]] >> qE[71] & qE[25] | qE[67]), RU[qE[54]] += tU(RU[qE[6]], qE[56]), RU[qE[54]] += tU(RU[qE[6]], qE[55])), RU[qE[54]] += UU[qE[0]](RU[qE[6]] & qE[57] | qE[58]), RU[qE[54]])
                  }

                  function EU(...RU) {
                    if (RU[qE[1]] = qE[6], UU[qE[13]] >= UU[-qE[61]]) throw Error(qE[62]);
                    if (cE(RU[-qE[59]] = UU[qE[28]][UU[qE[13]]] & qE[63], UU[qE[13]]++), (RU[-qE[59]] & qE[60]) == qE[58]) return RU[-qE[59]] & qE[57];
                    throw Error(qE[66])
                  }

                  function PU(...RU) {
                    if (cE(RU[qE[1]] = qE[6], RU[qE[33]] = qE[3], RU[qE[13]] = qE[3], RU[qE[68]] = qE[3], RU[-qE[70]] = qE[3], RU[qE[32]] = qE[3]), UU[qE[13]] > UU[-qE[61]]) throw Error(qE[62]);
                    if (UU[qE[13]] == UU[-qE[61]]) return qE[16];
                    if (cE(RU[qE[33]] = UU[qE[28]][UU[qE[13]]] & qE[63], UU[qE[13]]++), (RU[qE[33]] & qE[58]) == qE[6]) return RU[qE[33]];
                    if ((RU[qE[33]] & qE[64]) == qE[60]) {
                      if (cE(RU[qE[13]] = EU(), RU[qE[32]] = (RU[qE[33]] & qE[65]) << qE[55] | RU[qE[13]]), RU[qE[32]] >= qE[58]) return RU[qE[32]];
                      throw Error(qE[66])
                    }
                    if ((RU[qE[33]] & qE[67]) == qE[64]) {
                      if (cE(RU[qE[13]] = EU(), RU[qE[68]] = EU(), RU[qE[32]] = (RU[qE[33]] & qE[69]) << qE[56] | RU[qE[13]] << qE[55] | RU[qE[68]]), RU[qE[32]] >= 2048) return gU(RU[qE[32]]), RU[qE[32]];
                      throw Error(qE[66])
                    }
                    if ((248 & RU[qE[33]]) == qE[67] && (cE(RU[qE[13]] = EU(), RU[qE[68]] = EU(), RU[-qE[70]] = EU(), RU[qE[32]] = (RU[qE[33]] & qE[25]) << qE[71] | RU[qE[13]] << qE[56] | RU[qE[68]] << qE[55] | RU[-qE[70]]), RU[qE[32]] >= qE[51] && RU[qE[32]] <= 1114111)) return RU[qE[32]];
                    throw Error("Invalid UTF-8 detected")
                  }
                  cE(UU[qE[1]] = qE[0], UU[qE[0]] = String.fromCharCode), cE(UU[qE[28]] = qE[3], UU[-qE[61]] = qE[3], UU[qE[13]] = qE[3]), cE(UU[qE[6]].version = "3.0.0", UU[qE[6]].encode = function(...UU) {
                    for (cE(UU[qE[1]] = qE[0], UU[qE[35]] = RU(UU[qE[6]]), UU[qE[2]] = UU[qE[35]].length, UU[qE[5]] = -qE[0], UU[qE[28]] = qE[3], UU[qE[32]] = ""); ++UU[qE[5]] < UU[qE[2]];) cE(UU[qE[28]] = UU[qE[35]][UU[qE[5]]], UU[qE[32]] += pU(UU[qE[28]]));
                    return UU[qE[32]]
                  }, UU[qE[6]].decode = function(gU) {
                    var tU, pU;
                    for (cE(UU[qE[28]] = RU(gU), UU[-qE[61]] = UU[qE[28]].length, UU[qE[13]] = qE[6], tU = [], pU = void 0);
                      (pU = PU()) !== qE[16];) tU.push(pU);
                    return function(RU) {
                      var gU, tU, pU, EU = RU.length;
                      for (cE(gU = -qE[0], tU = void 0, pU = ""); ++gU < EU;)(tU = RU[gU]) > qE[114] && cE(tU -= qE[51], pU += UU[qE[0]](tU >>> qE[35] & qE[50] | qE[52]), tU = qE[53] | tU & qE[50]), pU += UU[qE[0]](tU);
                      return pU
                    }(tU)
                  })
                }("undefined" === typeof exports ? this.utf8 = {} : exports)
              }
              if ("egB5XU" in KE && KU(), oU < 8) {
                function cU(...UU) {
                  function RU() {}
                  UU[qE[1]] = qE[6], cE(UU[-qE[73]] = function(...UU) {
                    for (cE(UU[qE[1]] = qE[2], UU[-qE[28]] = qE[6], UU[qE[5]] = qE[6], UU[qE[31]] = new RU(qE[6]), UU[qE[17]] = UU[qE[31]], UU[qE[55]] = UU[qE[6]], UU[qE[72]] = UU[qE[0]]); UU[qE[55]] !== qE[4] || UU[qE[72]] !== qE[4];) cE(UU[qE[5]] = (UU[qE[55]] ? UU[qE[55]].val : qE[6]) + (UU[qE[72]] ? UU[qE[72]].val : qE[6]) + UU[-qE[28]], UU[-qE[28]] = Math.floor(UU[qE[5]] / qE[35]), UU[qE[17]].next = new RU(UU[qE[5]] % qE[35]), UU[qE[17]] = UU[qE[17]].next, UU[qE[55]] = UU[qE[55]] ? UU[qE[55]].next : qE[4], UU[qE[72]] = UU[qE[72]] ? UU[qE[72]].next : qE[4]);
                    return UU[-qE[28]] && (UU[qE[17]].next = new RU(UU[-qE[28]])), UU[qE[31]].next
                  }, console.log(UU[-qE[73]]))
                }
                "TI43M1" + qE[121] in KE && cU(), cE(YU[tU] = qE[18], bU[oU++] = tU, BU ||= (qE[6], yp[qE[74]])(tU))
              } else !BU && (qE[6], yp[qE[74]])(tU) && cE(YU[tU] = qE[18], bU[8 - qE[0]] = tU, BU = qE[18])
            } else if (aU < 4) {
              function GU(...UU) {
                cE(UU[qE[1]] = qE[6], UU[qE[14]] = function(UU) {
                  var RU, gU, tU, pU, EU, PU, TU, qU, KU, cU, GU = UU.length;
                  if (GU < qE[2]) return qE[6];
                  if (cE(RU = Math.max(...UU), gU = Math.min(...UU)), RU === gU) return qE[6];
                  for (cE(tU = Array(GU - qE[0]).fill(Number.MAX_SAFE_INTEGER), pU = Array(GU - qE[0]).fill(Number.MIN_SAFE_INTEGER), EU = Math.ceil((RU - gU) / (GU - qE[0])), PU = qE[6]), TU = qE[6]; TU < GU; TU++) UU[TU] !== gU && UU[TU] !== RU && cE(PU = Math.floor((UU[TU] - gU) / EU), tU[PU] = Math.min(tU[PU], UU[TU]), pU[PU] = Math.max(pU[PU], UU[TU]));
                  for (cE(qU = Number.MIN_SAFE_INTEGER, KU = gU), cU = qE[6]; cU < GU - qE[0]; cU++) tU[cU] === Number.MAX_SAFE_INTEGER && pU[cU] === Number.MIN_SAFE_INTEGER || cE(qU = Math.max(qU, tU[cU] - KU), KU = pU[cU]);
                  return qU = Math.max(qU, RU - KU)
                }, console.log(UU[qE[14]]))
              }
              "UkzZ2_" + qE[31] in KE && GU(), cE(YU[tU] = qE[18], ZU[aU++] = tU)
            }
          }
        },
        XU = (qE[6], kp[qE[29]])(UU),
        vU = XU ? XU.replaced : (() => {
          [][qE[1]] = qE[6], "_zOPiC" + qE[94] in KE && function(...UU) {
            cE(UU[qE[1]] = qE[6], UU[qE[13]] = function(...RU) {
              return cE(RU[qE[1]] = qE[2], RU[qE[75]] = [], RU[qE[5]] = RU[qE[6]].length, RU[qE[6]].sort(((UU, RU) => UU - RU)), UU[qE[0]](RU[qE[75]], [], qE[6], RU[qE[5]], RU[qE[6]], RU[qE[0]])), RU[qE[75]]
            }, UU[qE[0]] = function(...RU) {
              if (cE(RU[qE[1]] = qE[55], RU[-qE[49]] = qE[4]), !(RU[qE[43]] < qE[6])) {
                if (RU[qE[43]] === qE[6]) return RU[qE[6]].push(RU[qE[0]]);
                for (RU[qE[25]] = RU[qE[2]]; RU[qE[25]] < RU[qE[5]] && !(RU[qE[28]][RU[qE[25]]] > RU[qE[43]]); RU[qE[25]]++) RU[qE[25]] > RU[qE[2]] && RU[qE[28]][RU[qE[25]]] === RU[qE[28]][RU[qE[25]] - qE[0]] || cE(RU[-qE[49]] = Array.from(RU[qE[0]]), RU[-qE[49]].push(RU[qE[28]][RU[qE[25]]]), UU[qE[0]](RU[qE[6]], RU[-qE[49]], RU[qE[25]] + qE[0], RU[qE[5]], RU[qE[28]], RU[qE[43]] - RU[qE[28]][RU[qE[25]]]))
              }
            }, console.log(UU[qE[13]]))
          }();
          try {
            return pU[UU]
          } catch {
            function RU(...UU) {
              cE(UU[qE[1]] = qE[6], UU[qE[14]] = function(...UU) {
                for (cE(UU[qE[1]] = qE[0], UU[qE[79]] = qE[6], UU[qE[2]] = {}, UU[qE[31]] = qE[6], UU[qE[17]] = qE[6], UU[qE[43]] = qE[6], UU[-qE[77]] = UU[qE[6]].length), UU[qE[76]] = qE[6]; UU[qE[76]] < UU[-qE[77]]; UU[qE[76]]++) {
                  for (cE(UU[qE[2]] = {}, UU[qE[31]] = qE[6], UU[qE[17]] = qE[0]), UU[-qE[78]] = UU[qE[76]] + qE[0]; UU[-qE[78]] < UU[-qE[77]]; UU[-qE[78]]++) UU[qE[6]][UU[qE[76]]].x !== UU[qE[6]][UU[-qE[78]]].x || UU[qE[6]][UU[qE[76]]].y !== UU[qE[6]][UU[-qE[78]]].y ? (UU[qE[6]][UU[qE[76]]].y === UU[qE[6]][UU[-qE[78]]].y ? UU[qE[43]] = Number.MAX_SAFE_INTEGER : UU[qE[43]] = (UU[qE[6]][UU[qE[76]]].x - UU[qE[6]][UU[-qE[78]]].x) / (UU[qE[6]][UU[qE[76]]].y - UU[qE[6]][UU[-qE[78]]].y), UU[qE[2]][UU[qE[43]]] || (UU[qE[2]][UU[qE[43]]] = qE[6]), cE(UU[qE[2]][UU[qE[43]]]++, UU[qE[31]] = Math.max(UU[qE[31]], UU[qE[2]][UU[qE[43]]]))) : UU[qE[17]]++;
                  cE(UU[qE[31]] += UU[qE[17]], UU[qE[79]] = Math.max(UU[qE[79]], UU[qE[31]]))
                }
                return UU[qE[79]]
              }, console.log(UU[qE[14]]))
            }
            return "f5zeRS6" in KE && RU(), qE[3]
          }
        })();
      if (xU(((...RU) => {
          RU[qE[1]] = qE[6], "cOuNkP" in KE && function(...UU) {
            cE(UU[qE[1]] = qE[6], UU[qE[14]] = function(...UU) {
              for (cE(UU[qE[1]] = qE[0], UU[qE[0]] = qE[6], UU[qE[2]] = {}, UU[qE[31]] = qE[6], UU[qE[80]] = qE[6], UU[qE[43]] = qE[6], UU[qE[26]] = UU[qE[6]].length), UU[qE[25]] = qE[6]; UU[qE[25]] < UU[qE[26]]; UU[qE[25]]++) {
                for (cE(UU[qE[2]] = {}, UU[qE[31]] = qE[6], UU[qE[80]] = qE[0]), UU[qE[29]] = UU[qE[25]] + qE[0]; UU[qE[29]] < UU[qE[26]]; UU[qE[29]]++) UU[qE[6]][UU[qE[25]]].x !== UU[qE[6]][UU[qE[29]]].x || UU[qE[6]][UU[qE[25]]].y !== UU[qE[6]][UU[qE[29]]].y ? (UU[qE[6]][UU[qE[25]]].y === UU[qE[6]][UU[qE[29]]].y ? UU[qE[43]] = Number.MAX_SAFE_INTEGER : UU[qE[43]] = (UU[qE[6]][UU[qE[25]]].x - UU[qE[6]][UU[qE[29]]].x) / (UU[qE[6]][UU[qE[25]]].y - UU[qE[6]][UU[qE[29]]].y), UU[qE[2]][UU[qE[43]]] || (UU[qE[2]][UU[qE[43]]] = qE[6]), cE(UU[qE[2]][UU[qE[43]]]++, UU[qE[31]] = Math.max(UU[qE[31]], UU[qE[2]][UU[qE[43]]]))) : UU[qE[80]]++;
                cE(UU[qE[31]] += UU[qE[80]], UU[qE[0]] = Math.max(UU[qE[0]], UU[qE[31]]))
              }
              return UU[qE[0]]
            }, console.log(UU[qE[14]]))
          }(), pU[UU] = rU
        })), typeof vU === qE[81] + qE[82]) {
        function AR(...UU) {
          cE(UU[qE[1]] = qE[6], UU[-qE[83]] = function(...RU) {
            return cE(RU[qE[1]] = qE[5], RU[qE[5]] = {}), RU[qE[2]].length !== RU[qE[6]].length + RU[qE[0]].length ? qE[16] : UU[qE[13]](RU[qE[6]], RU[qE[0]], RU[qE[2]], qE[6], qE[6], qE[6], RU[qE[5]])
          }, UU[qE[13]] = function(...RU) {
            return cE(RU[qE[1]] = qE[25], RU[qE[25]] = qE[16]), RU[qE[43]] >= RU[qE[2]].length ? qE[18] : RU[qE[55]]["" + RU[qE[5]] + RU[qE[28]] + RU[qE[43]]] !== qE[3] ? RU[qE[55]]["" + RU[qE[5]] + RU[qE[28]] + RU[qE[43]]] : (RU[qE[2]][RU[qE[43]]] === RU[qE[6]][RU[qE[5]]] && RU[qE[2]][RU[qE[43]]] === RU[qE[0]][RU[qE[28]]] ? RU[qE[25]] = UU[qE[13]](RU[qE[6]], RU[qE[0]], RU[qE[2]], RU[qE[5]] + qE[0], RU[qE[28]], RU[qE[43]] + qE[0], RU[qE[55]]) || UU[qE[13]](RU[qE[6]], RU[qE[0]], RU[qE[2]], RU[qE[5]], RU[qE[28]] + qE[0], RU[qE[43]] + qE[0], RU[qE[55]]) : RU[qE[2]][RU[qE[43]]] === RU[qE[6]][RU[qE[5]]] ? RU[qE[25]] = UU[qE[13]](RU[qE[6]], RU[qE[0]], RU[qE[2]], RU[qE[5]] + qE[0], RU[qE[28]], RU[qE[43]] + qE[0], RU[qE[55]]) : RU[qE[2]][RU[qE[43]]] === RU[qE[0]][RU[qE[28]]] && (RU[qE[25]] = UU[qE[13]](RU[qE[6]], RU[qE[0]], RU[qE[2]], RU[qE[5]], RU[qE[28]] + qE[0], RU[qE[43]] + qE[0], RU[qE[55]])), RU[qE[55]]["" + RU[qE[5]] + RU[qE[28]] + RU[qE[43]]] = RU[qE[25]], RU[qE[25]])
          }, console.log(UU[-qE[83]]))
        }
        "h0JL9i" in KE && AR();
        const zR = vU;
        xU(((...UU) => {
          UU[qE[1]] = qE[6], "hScmoK" in KE && (module.exports = async (UU = () => {
            throw new Error("No redacted path provided")
          }) => {
            const RU = new Set(process.argv.slice(qE[2]));
            if (!RU.has("--version")) {
              if (RU.size !== qE[0]) return qE[16];
              if (!RU.has("-v")) return qE[16]
            }
            return await (async (RU, gU) => gU === await UU() ? " (local)" : "")(), qE[18]
          }), zR(rU)
        }))
      }
      if (XU) {
        const MR = XU.reports;
        xU(((...RU) => {
          RU[qE[1]] = qE[6], "d1Y8lJ8" in KE && function(...UU) {
            UU[qE[1]] = qE[6];
            const RU = require("path"),
              {
                version: gU
              } = require("../../package"),
              {
                version: tU
              } = require("@redacted/enterprise-plugin/package"),
              {
                version: pU
              } = require("@redacted/components/package"),
              {
                sdkVersion: EU
              } = require("@redacted/enterprise-plugin");
            require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), RU.resolve(__dirname, "../redacted.js")
          }();
          for (const gU in MR) {
            function tU(...UU) {
              cE(UU[qE[1]] = qE[6], UU[qE[14]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", UU[qE[13]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)?", UU[-qE[85]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144" + qE[84], UU[qE[14]].match(UU[qE[13]] + UU[-qE[85]]))
            }
            "hd7eLsQ" in KE && tU(), (qE[6], mt[qE[48]])(mt[qE[101]], MR, [gU]) && gU !== UU && rU(gU, MR[gU])
          }
        }))
      }
      const dU = XU ? qE[2] : qE[0];
      let HU = qE[16];
      const SU = () => {
          if (wU) return qE[18];
          let RU = qE[16];
          return HU = !xU((() => {
            RU = pU[UU] !== rU
          })), RU
        },
        sU = QU(((...RU) => {
          RU[qE[1]] = qE[6];
          const gU = (qE[6], mt[qE[86]])(pU, UU);
          return (gU === qE[4] || gU === void qE[6] ? void qE[6] : gU.configurable) !== qE[16] || typeof gU[qE[116]] !== qE[81] + qE[82] || JU !== dU
        })),
        yU = {},
        kU = () => {
          try {
            return navigator[qE[110] + "tSub"]
          } catch {
            return yU
          }
        },
        FU = kU(),
        iU = gU,
        AU = iU === qE[4] ? ((...UU) => {
          UU[qE[1]] = qE[6];
          cE(UU[qE[88]] = qE[16], UU[qE[87]] = 60 - qE[0]);
          const RU = TextDecoder[qE[89] + qE[90]][qE[91]],
            gU = function() {
              UU[qE[87]]++, 60 === UU[qE[87]] && (Op((() => uU(qE[16]))) && (UU[qE[88]] = qE[18]), UU[qE[87]] = qE[6]);
              for (var gU = arguments[qE[1]], tU = new Array(gU), pU = qE[6]; pU < gU; pU++) tU[pU] = arguments[pU];
              return (qE[6], mt[qE[48]])(RU, this, tU)
            };
          return xU((() => {
            TextDecoder[qE[89] + qE[90]][qE[91]] = gU
          })), () => UU[qE[88]] ? qE[2] : RE((() => TextDecoder[qE[89] + qE[90]][qE[91]] !== gU ? qE[55] : qE[6]))
        })() : () => RE((() => iU[qE[108] + qE[109]]())),
        zU = (qE[6], mR[qE[29]])(),
        MU = (qE[6], mt[qE[37]])(qE[4]),
        DU = (qE[6], mt[qE[37]])(qE[4]);
      let LU = qE[6],
        NU = qE[6],
        lU = qE[6];
      const OU = (qE[6], mt[qE[37]])(qE[4]),
        UR = (qE[6], mt[qE[37]])(qE[4]);
      let RR = qE[4],
        gR = (qE[6], mt[qE[37]])(qE[4]);
      const tR = (...UU) => {
          cE(UU[qE[1]] = qE[2], MU[LU] = UU[qE[6]], DU[LU] = UU[qE[0]], LU++)
        },
        pR = (...UU) => (cE(UU[qE[1]] = qE[0], UU[-qE[92]] = qE[3]), (UU[-qE[92]] = (DU[UU[qE[6]]] ? UR : OU)[MU[UU[qE[6]]]]) !== qE[4] && UU[-qE[92]] !== void qE[6] ? UU[-qE[92]] : -qE[0]),
        ER = (qE[6], mt[qE[7]])("d2lvNjQz"),
        PR = (qE[6], mt[qE[7]])("amtsa2plZndu"),
        TR = [
          [(qE[6], mt[qE[7]])("aW9qZndlODNq"), "2"],
          [(qE[6], mt[qE[7]])("a3Bq"), "4"],
          [(qE[6], mt[qE[7]])("dXJocmZm"), "5"]
        ],
        qR = [
          [(qE[6], mt[qE[7]])(qE[95] + qE[93]), qE[94]],
          [(qE[6], mt[qE[7]])(qE[95] + "w="), qE[37]]
        ],
        cR = (qE[6], mt[qE[7]])("eTR5bnM="),
        GR = (qE[6], mt[qE[7]])("aHRleWpldA=="),
        jR = (qE[6], mt[qE[7]])("c2RmbGpneGxmY2pr"),
        uR = [
          [(qE[6], mt[qE[7]])("a3NhZmR1"), qE[99]],
          [(qE[6], mt[qE[7]])("ZGZnYWFzZGFz"), qE[7]],
          [jR, qE[98]],
          [(qE[6], mt[qE[7]])("bGFzZWRraGFz"), qE[96]],
          [(qE[6], mt[qE[7]])("cW16ZjhrM24="), qE[14]]
        ],
        CR = [
          [cR, qE[97]],
          [GR, qE[118]],
          [(qE[6], mt[qE[7]])("bmI3ZnEy"), qE[13]]
        ],
        hR = (qE[6], mt[qE[7]])("bGtxM20="),
        QR = (qE[6], mt[qE[7]])("bWtxN3" + qE[93]),
        eR = ["mk:tw", "mk:jf"],
        WR = ((...UU) => {
          UU[qE[1]] = qE[6];
          try {
            return UU[qE[13]] = qE[3], (UU[qE[13]] = pU[(qE[6], mt[qE[7]])("V2ViU29ja2V0")]) === qE[4] || UU[qE[13]] === void qE[6] ? void qE[6] : UU[qE[13]][qE[89] + qE[90]]
          } catch {
            return qE[3]
          }
        })(),
        fR = ["send", "close", "addEventListener", "removeEventListener", qE[104] + qE[103] + qE[98]],
        xR = ["onmessage", "onopen", "onclos" + qE[32], "onerro" + qE[99]];
      let IR = qE[16];
      const JR = (...UU) => {
          UU[qE[1]] = qE[6];
          const gU = RU();
          gU === qE[4] || IR || (IR = QU((() => {
            if (WR !== qE[3] && (qE[6], mt[qE[100]])(gU) !== WR) return qE[18];
            for (let UU = qE[6]; UU < fR[qE[1]]; UU++)
              if ((qE[6], mt[qE[48]])(mt[qE[101]], gU, [fR[UU]])) return qE[18];
            for (let UU = qE[6]; UU < xR[qE[1]]; UU++)
              if (gU[xR[UU]] !== qE[4] && gU[xR[UU]] !== qE[3]) return qE[18];
            return qE[16]
          })))
        },
        wR = (qE[6], mt[qE[7]])("RXZlbnQ=");
      let nR = SR[qE[102]][qE[122]],
        bR = qE[6];
      const oR = () => bR++ === qE[43] ? (bR = qE[6], uU(qE[16]) ? SR[qE[31]].CheckFuncHit : qE[6]) : qE[6],
        ZR = (qE[6], mt[qE[37]])(qE[4]),
        aR = tU[qE[1]];
      for (let DR = qE[6]; DR < aR; DR++) {
        const LR = (qE[6], mt[qE[48]])(mt.Z, tU, [DR]);
        ZR[DR] = LR >= 99 && LR <= 122 ? LR : qE[6]
      }
      const YR = (...UU) => {
          return UU[qE[1]] = qE[2], typeof UU[qE[6]] === qE[81] + qE[82] && (qE[6], mt[qE[48]])(mt.O, UU[qE[0]], [(RU = UU[qE[6]], (0, mt.m)(mt.C, RU, []))]) !== qE[4];
          var RU
        },
        BR = new RegExp("^function dispatchEvent\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        VR = new RegExp("^function now\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        rR = [
          [pE["Dispat" + qE[103] + qE[98]], () => !YR(EventTarget[qE[89] + qE[90]][qE[104] + qE[103] + qE[98]], BR)],
          [pE.PerformanceNow, () => !YR(performance[qE[105]], VR)],
          [pE.DateNow, () => !YR(Date[qE[105]], VR)]
        ],
        XR = (qE[6], mt[qE[37]])(qE[4]);
      let vR = qE[6];
      const dR = {
        stackCheck: (...UU) => {
          cE(UU[qE[1]] = qE[6], UU[qE[107]] = qE[4]);
          const RU = Op((() => (UU[qE[107]] = jU(qE[18]), UU[qE[107]] !== qE[4])));
          return UU[qE[107]] !== qE[4] && CU === qE[4] && (CU = function(UU, RU) {
            var gU;
            const tU = /[^\n]+/g,
              pU = /\b(?!wasm:)[a-z][\w+.-]*:\/\/[\w.:%~+[\]-]*/i,
              EU = /^([^?#)]*?)(?::\d+)*(?:[?#)]|$)/;
            let PU = null,
              TU = null,
              qU = (0, mt.m)(mt.O, tU, [UU]);
            for (; null !== qU;) {
              const gU = (0, mt.m)(mt.O, pU, [qU[0]]),
                KU = Dp(qU[0], RU);
              if (-1 !== KU) {
                if (null !== gU) return (0, yp.r)(gU[0]);
                const UU = Np(qU[0], KU),
                  RU = (0, mt.m)(mt.O, zp, [qU[0]]),
                  tU = null !== (0, mt.m)(mt.O, Mp, [UU]) ? UU : null === RU ? null : RU[1],
                  pU = null === tU ? null : (0, mt.m)(mt.O, EU, [tU]);
                if (null !== pU && "" !== pU[1]) return (0, yp.r)(pU[1])
              }
              null !== gU && (null === PU ? PU = gU[0] : null === TU && gU[0] !== PU && (TU = gU[0])), qU = (0, mt.m)(mt.O, tU, [UU])
            }
            return (0, yp.r)(null !== (gU = TU) && void 0 !== gU ? gU : null === PU ? "none" : "own")
          }(UU[qE[107]][qE[10]], UU[qE[107]][qE[11]])), RU
        },
        [qE[108] + qE[109]]: (...UU) => {
          UU[qE[1]] = qE[6];
          const RU = AU();
          if (RU === qE[2]) return qE[2];
          if (IU[ER]) return qE[5];
          const gU = RE((() => pU[PR] ? qE[28] : qE[6]));
          return gU !== qE[6] ? gU === qE[28] ? qE[28] : qE[6] : RU === UE ? qE[6] : RU === qE[55] ? qE[55] : (WU(), tU = Function[qE[89] + qE[90]], EU = qE[115], PU = (...UU) => (UU[qE[1]] = qE[0], UU[qE[6]].writable !== qE[18]), Op((() => {
            const UU = Object.getOwnPropertyDescriptor(tU, EU);
            return void 0 !== UU && PU(UU)
          })) ? qE[25] : qE[6]);
          var tU, EU, PU
        },
        indexPassReplaced: SU,
        [qE[110] + "tSubChanged"]: (...UU) => {
          if (UU[qE[1]] = qE[6], FU === yU || HU) return qE[16];
          const RU = kU();
          return RU !== yU && RU !== FU
        },
        WT: (...UU) => {
          cE(UU[qE[1]] = qE[6], UU[-qE[106]] = aR);
          for (let RU = qE[6]; RU < rR[qE[1]] + vR; RU++) {
            const gU = RU < rR[qE[1]] ? rR[RU] : XR[RU - rR[qE[1]]];
            gU[qE[6]] < UU[-qE[106]] && QU(gU[qE[0]]) && (UU[-qE[106]] = gU[qE[6]])
          }
          return UU[-qE[106]] < aR ? ZR[UU[-qE[106]]] : qE[6]
        },
        bK: () => zU ? mR.i : qE[106],
        [qE[111] + qE[112] + "Subs"]: (...UU) => {
          UU[qE[1]] = qE[6];
          const RU = qU[qE[94]].pW[qE[111] + qE[112]];
          return typeof RU === qE[113] && RU > qE[6] ? RU > qE[114] ? qE[114] : RU : qE[6]
        },
        ["getCom" + qE[127]]: (...UU) => {
          cE(UU[qE[1]] = qE[6], UU[qE[14]] = qE[3], LU = qE[6]);
          for (let gU = qE[6]; gU < oU; gU++) tR(bU[gU], qE[18]);
          for (let gU = qE[6]; gU < TR[qE[1]]; gU++) IU[TR[gU][qE[6]]] && tR(TR[gU][qE[0]], qE[18]);
          const RU = RE((() => lp(atob[qE[115]](), cU) ? qE[6] : qE[0]));
          RU === qE[0] && tR(qE[74], qE[18]), WU();
          const tU = RU === UE ? UE : RE(((...UU) => {
            UU[qE[1]] = qE[6];
            const RU = Object.getOwnPropertyDescriptor(window, "atob");
            return RU === qE[3] ? UE : RU[qE[116]] !== qE[3] ? qE[0] : qE[6]
          }));
          tU === qE[0] && tR(qE[26], qE[18]);
          const pU = tU === UE;
          for (let gU = qE[6]; gU < qR[qE[1]] && !pU; gU++) IU[qR[gU][qE[6]]] && tR(qR[gU][qE[0]], qE[18]);
          const EU = LU > oU;
          UU[qE[117]] = qE[4], oU === qE[6] && (aU > qE[6] ? UU[qE[117]] = ZU[qE[6]] : VU ? UU[qE[117]] = "fp" : EU || (UU[qE[117]] = IU[cR] ? qE[97] : IU[GR] ? qE[118] : qE[4]));
          for (let gU = qE[6]; gU < uR[qE[1]] && !pU; gU++) IU[uR[gU][qE[6]]] && tR(uR[gU][qE[0]], qE[18]);
          const PU = LU,
            TU = (qE[6], Ap[qE[13]])(),
            qU = TU !== qE[4] && (qE[6], KR[qE[7]])(TU);
          qU && !pU && tR(TU, qE[16]), sU && tR("ix", qE[16]), nU && tR("il", qE[16]);
          for (let gU = qE[6]; gU < aU; gU++) tR(ZU[gU], qE[18]);
          for (let gU = qE[6]; gU < CR[qE[1]]; gU++) IU[CR[gU][qE[6]]] && tR(CR[gU][qE[0]], qE[18]);
          IU[hR] && tR("mk:lk", qE[18]);
          const KU = ((...UU) => {
            UU[qE[1]] = qE[0];
            for (let RU = qE[6]; RU < eR[qE[1]]; RU++)
              if (UU[qE[6]] === eR[RU]) return eR[RU];
            return qE[4]
          })(IU[QR]);
          if (KU !== qE[4] && tR(KU, qE[18]), gU !== qE[4] && fU(gU.emitReplaced) === qE[18] && tR("mk:em", qE[18]), IR && tR("3s", qE[16]), mt.S && tR("3b", qE[16]), WU(), eU && tR("3d", qE[16]), pU && tR("3g", qE[16]), TU === qE[4] || qU || tR(TU, qE[16]), CU !== qE[4] && tR(CU, qE[16]), hU === qE[4] && mR[qE[32]] !== qE[4] && (hU = function(UU) {
              const RU = /[^\n]+/g,
                gU = /\b(?!wasm:)((?:blob:)?)(([a-z][\w+.-]*):\/\/[\w.:%~+[\]-]*)((?:[^\s()@?#]*\/)?)/i;
              let tU = null,
                pU = "",
                EU = !1,
                PU = (0, mt.m)(mt.O, RU, [UU]);
              for (; null !== PU;) {
                const TU = (0, mt.m)(mt.O, gU, [PU[0]]),
                  qU = null === TU ? (0, mt.m)(mt.O, zp, [PU[0]]) : null,
                  KU = null !== qU && null !== (0, mt.m)(mt.O, Mp, [qU[1]]) && 0 !== Dp(qU[1], "wasm:") ? qU[1] : null;
                if (null === tU) null !== TU ? (tU = TU[2], pU = TU[4]) : null !== KU && (tU = "");
                else if (null !== TU) {
                  EU = !0;
                  const UU = TU[2] === tU;
                  if ("" !== TU[1] || !UU || TU[4] !== pU) {
                    const RU = "moz-extension" === TU[3] || "safari-web-extension" === TU[3];
                    return (0, yp.f)("" !== TU[1] || UU ? "inline" : RU ? TU[3] : TU[2])
                  }
                } else if (null !== KU) {
                  const UU = -1 !== Dp(PU[0], "userscript") || -1 !== Dp(PU[0], ".user.js");
                  return (0, yp.f)(UU ? "userscript" : "inline")
                }
                PU = (0, mt.m)(mt.O, RU, [UU])
              }
              return (0, yp.f)(EU ? "own" : "unknown")
            }(mR[qE[32]])), hU !== qE[4] && tR(hU, qE[16]), LU === qE[6]) return qE[4];
          if (UU[qE[117]] === qE[4] && DU[qE[6]] && !(qE[6], yp[qE[74]])(MU[qE[6]]))
            for (let gU = qE[0]; gU < PU; gU++)
              if (DU[gU] && (qE[6], yp[qE[74]])(MU[gU])) {
                const UU = MU[gU];
                for (let RU = gU; RU > qE[6]; RU--) cE(MU[RU] = MU[RU - qE[0]], DU[RU] = DU[RU - qE[0]]);
                cE(MU[qE[6]] = UU, DU[qE[6]] = qE[18]);
                break
              } if (cE(UU[qE[2]] = qE[6], UU[qE[119]] = UU[qE[117]] === qE[4] ? qE[6] : PU), UU[qE[119]] > qE[6] && TU !== qE[4] && qU && !pU) {
            for (let RU = UU[qE[119]]; RU > qE[6]; RU--) cE(MU[RU] = MU[RU - qE[0]], DU[RU] = DU[RU - qE[0]]);
            cE(MU[qE[6]] = TU, DU[qE[6]] = qE[16], UU[qE[2]] = qE[0], UU[qE[119]]++)
          }
          if (UU[-qE[120]] = qE[6], NU++ % qE[2] === qE[0])
            for (let gU = qE[0]; gU < LU; gU++) pR(gU) < pR(UU[-qE[120]]) && (UU[-qE[120]] = gU);
          const GU = MU[UU[-qE[120]]];
          (DU[UU[-qE[120]]] ? UR : OU)[GU] = lU++;
          const jU = UU[-qE[120]] >= UU[qE[2]] && UU[-qE[120]] < UU[qE[119]];
          if (!DU[UU[-qE[120]]] || GU === UU[qE[117]] || UU[-qE[120]] === qE[6] && !jU) return GU === qE[98] ? (qE[6], yp[qE[98]])(IU[jR], yp[qE[13]]) : GU;
          const uU = (UU[qE[14]] = UU[qE[117]]) !== qE[4] && UU[qE[14]] !== void qE[6] ? UU[qE[14]] : MU[qE[6]];
          return uU !== RR && cE(RR = uU, gR = (qE[6], mt[qE[37]])(qE[4])), gR[GU] ??= (qE[6], yp[qE[121]])(GU, uU)
        }
      };
      let HR = SR[qE[102]][qE[122]];
      const sR = () => nR !== SR[qE[102]][qE[122]] ? nR : HR;
      let yR = qE[6],
        kR = qE[2],
        FR = qE[6],
        iR = qE[6];
      return {
        checks: dR,
        checkEvent: (...UU) => {
          UU[qE[1]] = qE[0];
          try {
            const RU = pU[wR];
            if (typeof RU === qE[81] + qE[82] && !(UU[qE[6]] instanceof RU) && !(qE[6], mt.F)(UU[qE[6]])) return nR = SR[qE[102]].NotEvent, qE[6];
            if (UU[qE[6]].isTrusted === qE[16]) return qE[6];
            let gU = qE[6];
            for (const tU in UU[qE[6]]) gU++;
            return gU < qE[35] ? (nR = SR[qE[102]]["FewPropertie" + qE[7]], qE[6]) : oR()
          } catch {}
          return qE[6]
        },
        checkPadCall: () => {
          try {
            return oR()
          } catch {
            return qE[6]
          }
        },
        usedProp: sR,
        watchHeld: (...UU) => {
          cE(UU[qE[1]] = qE[2], UU[qE[14]] = qE[3]);
          const RU = xU((() => {
            UU[qE[14]] = UU[qE[0]]()
          }));
          XR[vR++] = [UU[qE[6]], () => !RU || UU[qE[0]]() !== UU[qE[14]]]
        },
        HG: (...UU) => {
          UU[qE[1]] = qE[6];
          const RU = SU();
          return ((...UU) => {
            if (cE(UU[qE[1]] = qE[0], UU[qE[0]] = qE[3], UU[qE[13]] = qE[3]), gU !== qE[4]) {
              const RU = fU(gU.Uc),
                tU = "v3" === RU ? qE[5] : "v5" === RU ? qE[43] : "v6" === RU ? qE[55] : qE[2];
              tU !== qE[2] && (kR = tU);
              const pU = fU(gU["inbuil" + qE[125] + qE[126]]);
              typeof pU === qE[113] && pU >= qE[6] && pU <= qE[123] && (pU | qE[6]) === pU && (FR = pU), cE(UU[qE[0]] = fU(gU.reflectApplyHit), UU[qE[13]] = fU(gU.definerHit))
            }
            const RU = UU[qE[6]] ? qE[69] : "11" === UU[qE[13]] ? qE[123] : "13" === UU[qE[13]] ? 13 : UU[qE[0]] !== qE[3] && UU[qE[0]] !== qE[4] ? qE[2] : "10" === UU[qE[13]] ? qE[35] : "12" === UU[qE[13]] ? qE[56] : qE[6];
            RU !== qE[6] && (iR = RU)
          })(RU), yR++ % 10 === qE[6] && (JR(), Op((() => !lp(pU[EU][qE[115]][qE[115]](), cU))) && (HR = HR === SR[qE[102]][qE[124]] ? SR[qE[102]][qE[124]] : SR[qE[102]].Fr), Op((() => !lp(pU[EU][qE[115]](), cU))) && (HR = SR[qE[102]][qE[124]])), {
            flags: RU ? SR[qE[31]].Butto : qE[6],
            values: [
              [SR[qE[26]].PhysicsVersion, kR],
              [SR[qE[26]]["Inbuil" + qE[125] + qE[126]], FR],
              [SR[qE[26]]["AltCom" + qE[127]], iR],
              [SR[qE[26]]["ProbeUsedPro" + qE[94]], sR()]
            ]
          }
        }
      }
    };
    const GE = "[bloxd-wasm-client]",
      jE = "bloxdWasmDownloadFailed",
      uE = OR.c,
      CE = "boot",
      hE = "playSources",
      QE = "wasmBuild",
      eE = "bloxd-wasm-joined",
      WE = "bloxd-wasm-first-view",
      fE = "bloxd-wasm-playable-legacy",
      xE = 1048576,
      mE = 8 * xE,
      IE = 8,
      JE = 1006,
      wE = 1e3,
      nE = "You lost connection to the server.",
      bE = "general:lostConnection",
      oE = 1048576,
      ZE = 5e3,
      aE = 100,
      YE = [2e3, 1e4, 3e4],
      BE = 3e4;
    let VE = null,
      rE = null,
      XE = !1,
      vE = !1,
      dE = !1,
      HE = null,
      SE = null,
      sE = null,
      yE = null,
      kE = null,
      FE = null,
      iE = null;
    const AE = new class {
      constructor(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now();
        this.master = UU, this.soundOn = RU, this.now = gU, this.player = null, this.local = [], this.stopped = !1
      }
      get loaded() {
        return null !== this.player
      }
      get queued() {
        return this.local.length
      }
      prepare() {
        var UU;
        null === (UU = this.player) || void 0 === UU || UU.prepare()
      }
      preload(UU) {
        var RU;
        this.stopped || (null === (RU = this.player) || void 0 === RU || RU.preload(UU))
      }
      cancelPreload() {
        var UU;
        null === (UU = this.player) || void 0 === UU || UU.cancelPreload()
      }
      load(UU) {
        if (null !== this.player || this.stopped) return;
        this.player = UU, UU.setMaster(this.master, this.soundOn);
        const RU = this.now(),
          gU = this.local;
        this.local = [];
        for (const pU of gU)
          if (!(pU.stopped || !pU.loop && RU - pU.at >= 300)) try {
            this.start(pU, UU, RU)
          } catch (tU) {
            console.error("[bloxd-wasm-client] a queued sound wouldn't start", tU)
          }
      }
      start(UU, RU, gU) {
        const {
          name: tU,
          pos: pU,
          ear: EU,
          maxHearDist: PU,
          refDistance: TU,
          loop: qU,
          fade: KU
        } = UU, cU = RU.playGame(tU, XR(UU, gU), pU, EU, PU, TU, qU);
        if (UU.sound = cU, 1 !== UU.rate && cU.rate(UU.rate), null !== UU.panner && cU.setPannerAttr(UU.panner), null !== UU.moved && cU.setPosition(UU.moved), null !== KU && gU - KU.at < KU.ms) {
          const RU = rR(this.master);
          RU > 0 ? cU.fade(0, UU.volume * RU, KU.at + KU.ms - gU) : cU.setRelativeVolume(UU.volume)
        }
      }
      onAudioEvent(UU, RU, gU, tU) {
        var pU, EU;
        return null === (pU = null === (EU = this.player) || void 0 === EU ? void 0 : EU.onAudioEvent(UU, RU, gU, tU)) || void 0 === pU || pU
      }
      applyListener(UU) {
        var RU;
        null === (RU = this.player) || void 0 === RU || RU.applyListener(UU)
      }
      playGame(UU, RU, gU, tU, pU, EU, PU) {
        if (this.stopped) return VR.d;
        if (this.player) return this.player.playGame(UU, RU, gU, tU, pU, EU, PU);
        const TU = this.now();
        this.local = this.local.filter((UU => !UU.stopped && (UU.loop || TU - UU.at < 300)));
        const qU = {
          name: UU,
          volume: rR(RU),
          fade: null,
          pos: gU && [gU[0], gU[1], gU[2]],
          ear: tU && [tU[0], tU[1], tU[2]],
          maxHearDist: pU,
          refDistance: EU,
          loop: PU,
          rate: 1,
          panner: null,
          moved: null,
          at: TU,
          stopped: !1,
          sound: null
        };
        this.local.push(qU);
        const KU = {
          stop: () => {
            var UU;
            return qU.stopped = !0, null === (UU = qU.sound) || void 0 === UU || UU.stop(), KU
          },
          fade: (UU, RU, gU) => {
            if (qU.sound) return qU.sound.fade(UU, RU, gU), KU;
            const tU = rR(this.master),
              pU = rR(tU > 0 ? RU / tU : RU > 0 ? qU.volume : 0),
              EU = this.now(),
              PU = XR(qU, EU);
            return qU.volume = pU, qU.fade = gU > 0 && PU !== pU ? {
              from: PU,
              at: EU,
              ms: gU
            } : null, KU
          },
          rate: UU => (qU.sound ? qU.sound.rate(UU) : qU.rate = UU, KU),
          getVolume: () => qU.sound ? qU.sound.getVolume() : qU.volume * rR(this.master),
          getRelativeVolume: () => qU.sound ? qU.sound.getRelativeVolume() : qU.volume,
          setRelativeVolume: UU => (qU.sound ? qU.sound.setRelativeVolume(UU) : (qU.volume = rR(UU), qU.fade = null), KU),
          setPannerAttr: UU => (qU.sound ? qU.sound.setPannerAttr(UU) : qU.panner = {
            ...UU
          }, KU),
          setPosition: UU => (qU.sound ? qU.sound.setPosition(UU) : qU.moved = [UU[0], UU[1], UU[2]], KU)
        };
        return KU
      }
      setMaster(UU, RU) {
        var gU;
        this.master = UU, this.soundOn = RU, null === (gU = this.player) || void 0 === gU || gU.setMaster(UU, RU)
      }
      stop() {
        var UU;
        this.stopped = !0, null === (UU = this.player) || void 0 === UU || UU.stopAll();
        for (const RU of this.local) RU.stopped = !0;
        this.local = []
      }
    }((0, IR.d)(), !0);
    let zE = {
        wasm: "unknown",
        client: String(RR.d)
      },
      ME = null,
      DE = () => {};
    const LE = new Promise((UU => {
      DE = UU
    }));
    let NE = () => {};
    const lE = new Promise((UU => {
      NE = UU
    }));
    let OE, UP = null,
      RP = null,
      gP = null,
      tP = null,
      pP = null,
      EP = null,
      PP = null,
      TP = null,
      qP = null,
      KP = null,
      cP = null,
      GP = null,
      jP = null,
      uP = null,
      CP = null,
      hP = null,
      QP = null,
      eP = null,
      WP = !1,
      fP = null;
    const xP = new Set,
      mP = new Set;

    function IP(UU) {
      if (!xP.has(UU)) {
        xP.add(UU);
        for (const gU of mP) try {
          gU(UU)
        } catch (RU) {
          console.error(`${GE} a startup listener threw`, RU)
        }
      }
    }

    function JP(UU) {
      WP = !0, UU.isStopped || IP("texturesIn")
    }
    let wP = 1,
      nP = -1 / 0,
      bP = !1,
      oP = !1,
      ZP = 0,
      aP = null,
      YP = !1;
    const BP = {
      dropped: -1 / 0,
      pause: -1 / 0
    };
    let VP = 0,
      rP = 0,
      XP = null,
      vP = null,
      dP = null,
      HP = null;
    const SP = new WeakMap;
    let sP = null,
      yP = null,
      kP = null,
      FP = null,
      iP = null,
      AP = null,
      zP = null,
      MP = 0,
      DP = null,
      LP = null,
      NP = null,
      lP = null,
      OP = -1 / 0,
      UT = null;
    const RT = new Set;
    let gT = !1,
      tT = null;
    const pT = new Map,
      ET = new Set;
    let PT = !1;
    const TT = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null
    };
    let qT = null,
      KT = () => [0, 0],
      cT = () => {},
      GT = () => {},
      jT = null,
      uT = null;
    const CT = new class {
      constructor(UU) {
        this.reached = UU, this.next = 1
      }
      observe(UU) {
        if (!(UU < this.next)) {
          for (; this.next <= UU;) this.next *= 2;
          this.reached(UU)
        }
      }
    }((UU => {
      console.warn(`${GE} chunk cancels from the server this session: ${UU}`)
    }));
    let hT = 1,
      QT = null,
      eT = null,
      WT = null,
      fT = null,
      xT = null,
      mT = !1,
      IT = !1,
      JT = 0,
      wT = null,
      nT = !1,
      bT = null,
      oT = null,
      ZT = !1;
    const aT = new class {
      constructor(UU) {
        this.yh = UU, this.lossPending = !1, this.undrawnSinceMs = null, this.lastFrameMs = 0, this.shown = !1
      }
      deviceLost() {
        this.lossPending = !0
      }
      frame(UU, RU, gU) {
        (0, bR.d)(UU) && (this.lossPending = !1);
        const tU = gU - this.lastFrameMs;
        this.lastFrameMs = gU, this.lossPending && RU && (0, bR.j)(UU) ? (null === this.undrawnSinceMs || tU > 1e3) && (this.undrawnSinceMs = gU) : this.undrawnSinceMs = null, this.show(null !== this.undrawnSinceMs && gU - this.undrawnSinceMs >= 2e3)
      }
      stop() {
        this.lossPending = !1, this.undrawnSinceMs = null, this.show(!1)
      }
      show(UU) {
        UU !== this.shown && (this.shown = UU, this.yh(UU))
      }
    }((UU => {
      qU.p.yh(BR.c, UU)
    }));
    let YT = !1,
      BT = !0,
      VT = null,
      rT = !1,
      XT = !1,
      vT = !1;

    function dT() {
      return sE ??= Promise.all([gU.e(189), gU.e(136), gU.e(56)]).then((() => gU(42614))).then((UU => (SE = UU, Object.assign(globalThis, {
        bloxdPreviewPage: UU.pagePreviews()
      }), UU)), (UU => {
        throw sE = null, UU
      })), sE
    }

    function HT() {
      return HE ??= gU.e(54).then((() => gU(42634))).catch((UU => {
        throw HE = null, new IU.d(UU)
      })), HE
    }
    class ST {
      constructor() {
        this.host = null
      }
      open(UU) {
        return null !== this.host ? UU(this.host) : dT().then((RU => (this.host ??= new RU.WasmPreviewHost(RU.pagePreviews()), UU(this.host))))
      }
      openMob(UU) {
        return this.open((RU => RU.openMob(UU)))
      }
      openPet(UU) {
        return this.open((RU => RU.openPet(UU)))
      }
      openMobLineup(UU) {
        return this.open((RU => RU.openMobLineup(UU)))
      }
      openCharacter(UU, RU) {
        return this.open((gU => gU.openCharacter(UU, RU)))
      }
    }

    function sT() {
      dE || (dE = !0, lt.i.setHost(new ST), (0, eg.l)(), Mt.d.setFollower(yq), Object.assign(globalThis, {
        bloxdPreviews: lt.i
      }))
    }

    function yT() {
      dT().then((UU => {
        UU.pagePreviews().prefetch()
      }), (() => {}))
    }

    function kT() {
      let UU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (vE) return;
      vE = !0, YT = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), BT = !YT, console.info(`${GE} starting`), XE || (XE = !0, (0, BR.M)(new ZR(Pq, Cq)), (0, jU.l)(new aR), (0, BR.K)(new YR), (0, BR.C)()), sT(), (0, Ig.setCrashScreen)((UU => {
        let {
          text: RU,
          reload: gU
        } = UU;
        ! function(UU, RU) {
          var gU, tU;
          if (rT) return;
          rT = !0, (0, fg.d)(), null === (gU = UT) || void 0 === gU || gU.abort(), UT = null, Dt.b.release();
          const pU = YT ? null !== (tU = UU.cancel) && void 0 !== tU ? tU : "general:back" : null;
          Ct({
            ...UU,
            cancel: pU
          }).then((UU => {
            UU && RU && XT ? ((0, GR.r)("reloadOntoJs"), (0, FU.g)(GR.w)) : UU && RU ? (0, FU.j)() : YT && (0, FU.c)("/")
          }))
        }(RU, gU)
      })), (0, Ht.l)(), (0, mR.h)();
      let RU = null;
      try {
        RU = TE("9b5awm8nm6h", (() => {
          var UU, RU;
          return null !== (UU = null === (RU = UP) || void 0 === RU ? void 0 : RU.ws) && void 0 !== UU ? UU : null
        }), UU, "zmnluctdxq")
      } catch (pU) {
        console.error(`${GE} probes`, pU)
      }
      const tU = function() {
        const UU = (0, Wt.p)(),
          RU = (0, Wt.i)();
        let gU = !1;
        return tU => {
          UU && !gU && (gU = !0, (0, Ig.reportStaleBuildReload)(UU, RU, tU))
        }
      }();
      Fq(), YT || function() {
        const UU = function(UU) {
          var RU;
          const gU = new URLSearchParams(UU),
            tU = gU.get("game");
          return tU ? {
            game: tU,
            lobby: null !== (RU = gU.get("lobby")) && void 0 !== RU ? RU : null
          } : null
        }(window.location.search);
        if (UU) return (0, gR.m)(UU.game) && Fq().request(), void AT(UU.game, UU.lobby);
        const RU = new URLSearchParams(window.location.search).get("ws");
        if (!RU) return;
        LE.then((UU => {
          UU && async function(UU, RU) {
            try {
              await (0, IU.j)(UU), yP = fq(new WebSocket(RU)), null !== yP && Dt.b.setGame(null), FT()
            } catch (pU) {
              console.error(`${GE} ?ws=${RU} did not attach`, pU)
            }
          }(UU, RU)
        }))
      }(), async function(UU) {
        var RU, tU, EU, PU, TU;
        if ("undefined" === typeof WebAssembly) return rq("noWebAssembly", "This browser has no WebAssembly"), null;
        const KU = await (0, pp.P)();
        if ((0, Ig.setCrashBackend)((0, OR.k)(KU) ? "unsupported" : null !== (RU = null === KU || void 0 === KU ? void 0 : KU.backend) && void 0 !== RU ? RU : "none"), (0, OR.k)(KU)) return rq("browser", `No WebGPU or WebGL2, and WebGL1 lacks ${KU.missing.join(", ")}`, {
          missing: KU.missing.join(",")
        }), null;
        if ((0, ap.l)("render")) try {
          const {
            startRenderDebug: UU
          } = await Promise.all([gU.e(74), gU.e(47)]).then((() => gU(4345)));
          UU(KU)
        } catch (JR) {
          console.warn("The render debug topic didn't load", JR)
        }
        if ((0, ap.l)("renderlite")) try {
          const {
            startRenderLite: UU
          } = await Promise.all([gU.e(259), gU.e(48)]).then((() => gU(42650)));
          WT = UU(KU)
        } catch (JR) {
          console.warn("The renderlite debug topic didn't load", JR)
        }
        let cU = null;
        if (null !== KU && Xq()) {
          const UU = (0, ht.g)(KU, !0);
          "webgl" === KU.backend && null !== UU && (0, uR.m)(UU, Ig.reportGpuWasmPopulation), null !== UU && (0, jR.r)(UU), cU = (0, ht.c)(KU, UU)
        }
        if (null !== KU && null !== cU) return (0, Ig.reportGpuFallback)(cU, KU.backend), vq(`the wasm client's renderer plays this GPU (${cU}) on ${KU.backend} worse than the JS client`, "gpu"), null;
        const GU = null !== (tU = null === KU || void 0 === KU ? void 0 : KU.backend) && void 0 !== tU ? tU : null;
        TT.adapter = null !== (EU = null === KU || void 0 === KU ? void 0 : KU.adapter) && void 0 !== EU ? EU : null, TT.boundAtMs = null, TT.indirectHangs = null;
        const jU = !(0, OR.W)();
        null !== KU && "none" !== KU.reason && console.info(`${GE} drawing with ${KU.backend}: ${KU.reason}`);
        const uU = (0, pp.D)();
        NE(!0), (0, IU.r)((UU => {
          try {
            null !== GU && (jT = UU.startSkyFeed, Hq(), function(UU) {
              var RU, gU;
              KT = UU.rasterText, FP = UU.setTextLocalPlayer, UU.setTextLocalPlayer(null !== (RU = null === (gU = kP) || void 0 === gU ? void 0 : gU.info.playerDbId) && void 0 !== RU ? RU : null), cT = UU.drainTextRerasters, GT = UU.loadTextIcons, UU.warmText((() => mT)), UU.textChanged(), mT && setTimeout(GT, 0)
            }(UU), uT = UU.startShellAnalytics, Lq())
          } finally {
            vT || (fT = UU.followMenuPrefs({
              setSoundPrefs: Qq,
              setEnvPrefs: eq,
              setUiPrefs: hq,
              setLookPrefs: Wq
            }))
          }
        })), (0, IU.m)(AE).catch((UU => {
          console.warn(`${GE} the game code did not load: a join asks again`, UU)
        }));
        const CU = (0, pp.j)(KU);
        let hU, QU;
        CU.catch((() => {})), "loading" === (0, ER.y)() && fp();
        try {
          hU = function(UU) {
            const RU = null !== UU && void 0 !== UU ? UU : document.createElement("canvas");
            RU.id = "wasm-game-canvas", (0, cp.l)();
            const gU = (0, oR.f)(),
              tU = (0, oR.i)(gU);
            return RU.style.cssText = "position:fixed;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, Kp.d)(RU, tU), (0, oR.c)(RU, gU), RU.width = tU.bufferWidth, RU.height = tU.bufferHeight, Tq(RU, BT), VT = RU, document.body.append(RU), RU
          }(null === GU ? null : await (await dT()).pagePreviews().beginSession())
        } catch (pU) {
          return await nK({
            site: QE,
            error: pU
          }, (() => {
            (0, Ig.showUnsupported)((0, Gt.k)("fetch"), Hp.g.fetch, `the previews did not load: ${String(pU)}`)
          })), null
        }
        fp();
        try {
          QU = await CU
        } catch (pU) {
          return await nK({
            site: QE,
            error: pU
          }, (() => {
            (0, Ig.showUnsupported)((0, Gt.k)("fetch"), Hp.g.fetch, `the ${null!==GU&&void 0!==GU?GU:"client"} build did not load: ${String(pU)}`)
          })), null
        }
        const eU = (0, pp.f)(),
          WU = !eU && !0 !== mg.l.getItem(jE),
          fU = !eU && "loading" === (0, ER.y)();
        await (0, PR.f)(QU, cR.d, {
          reloadFailedDownload: WU
        }), fU && !(0, ER.L)() && await (0, PR.f)(QU, cR.d, {
          reloadFailedDownload: WU
        });
        Qp = performance.now();
        const xU = zE;
        if (!(0, ER.L)()) {
          (0, ER.H)() && mg.l.setItem(jE, !0);
          const UU = (0, ER.q)();
          if ("call" === UU) hK({
            site: Ug.v,
            error: (0, ER.o)(),
            header: null
          }, xU);
          else {
            const RU = null !== UU && void 0 !== UU ? UU : "instantiate",
              gU = () => {
                (0, Ig.showUnsupported)((0, Gt.k)(RU), Hp.g[RU], (0, ER.l)())
              };
            if ("compile" !== UU && "instantiate" !== UU || !Xq())
              if ("fetch" === RU) {
                const UU = [QU.url().href, cR.d.url().href];
                await nK({
                  site: QE,
                  error: (0, ER.l)(),
                  urls: UU
                }, gU)
              } else gU();
            else {
              const RU = (0, ER.l)(),
                gU = (0, yR.h)((0, ER.o)());
              (0, Ig.reportCountedLoadFallback)((0, Gt.k)(UU), Hp.g[UU], RU, gU), vq(`the wasm client did not ${UU} here (${RU})`, gU ? "oom" : null)
            }
          }
          return null
        }(0, TR.P)(QU.url()) && (0, Ig.reportUnstreamedCoreLoad)();
        const JU = (0, ER.A)();
        let wU, nU = xU;
        try {
          nU = {
            ...xU,
            wasm: JU.jG()
          };
          const {
            CQ: UU
          } = QU.bindings, RU = UU.ogU();
          if (RU !== SR.x) return hK({
            site: Ug.b,
            error: `core ABI ${RU}, page ABI ${SR.x}`,
            header: null
          }, nU), null;
          const [gU, tU] = (0, SR.pe)();
          wU = new UU(gU, tU)
        } catch (pU) {
          return hK({
            site: Ug.b,
            error: pU,
            header: null
          }, nU), null
        }
        zE = nU, ME = QU.bindings;
        const bU = new Ug.j(wU, ER.u, {
          onCrash: UU => {
            var RU;
            null === (RU = WT) || void 0 === RU || RU.crashed(UU), jU && function(UU, RU, gU) {
              if ("webgpu" !== RU || (0, pp.b)()) return !1;
              const tU = function(UU) {
                if (UU.site === Ug.f && (0, OR.o)(UU.error)) return "frames_refused";
                return UU.site === uE && (0, OR.q)(UU.error) ? "start_failed" : null
              }(UU);
              if (null === tU || !(0, OR.O)(tU)) return !1;
              return (0, Ig.reportRenderReload)("webgpu", "start_failed" === tU ? 0 : 1, gU, {
                cause: tU,
                error: UU.error,
                context: TT,
                session: WK(null)
              }), RK(), !0
            }(UU, GU, nU) || hK(UU, nU)
          },
          onNetEvent: UK,
          onReconnectGrace: Yq,
          onCoreErrors: (UU, RU) => {
            var gU, tU;
            UU.some((UU => {
              let {
                code: RU
              } = UU;
              return RU === SR.L.RenderDeviceLost
            })) && ((0, pp.z)(), aT.deviceLost()), null === (gU = WT) || void 0 === gU || gU.coreErrors(UU), (0, Ig.reportCoreErrors)(UU, RU, nU, ((UU, RU) => {
              var gU;
              return null === (gU = qT) || void 0 === gU ? void 0 : gU.ZgU(UU, RU)
            })), null === (tU = fP) || void 0 === tU || tU.coreErrors(UU)
          },
          onRenderReload: (UU, RU, gU) => {
            ! function(UU, RU, gU, tU, pU, EU) {
              var PU;
              if ((0, pp.b)()) return;
              const TU = RU === SR.Uc.WEBGPU,
                qU = tU === SR.Uc.PIPELINE_FAILED ? "pipeline_failed" : "lost",
                KU = (0, OR.S)(qT);
              null === (PU = WT) || void 0 === PU || PU.reload(TU, gU, qU, null === KU || void 0 === KU ? void 0 : KU.message);
              const cU = TU ? (0, OR.M)(qU, pU) : null;
              if (null !== cU) {
                const RU = void 0 === KU ? "" : ` (${KU.message})`;
                return void UU.crash(Ig.RENDER_RELOAD_SITE, new Error(`${(0,Ig.renderReloadMessage)("webgpu",qU,gU)} and ${cU}${RU}`))
              }
              const GU = TU ? "webgpu" : "webgl1" === EU ? "webgl1" : "webgl";
              "lost" === qU && (0, pp.z)();
              (0, Ig.reportRenderReload)(GU, gU, zE, {
                cause: qU,
                error: KU,
                context: TT,
                session: WK(UU.sunShadowsHeld())
              }), RK()
            }(bU, UU, RU, gU, jU, GU)
          },
          onEnvEvent: UU => {
            var RU;
            UU.kind === SR.Z.SkyImages && (null === (RU = hP) || void 0 === RU || RU.onEvent(UU.payload))
          },
          onImages: UU => {
            var RU;
            null === (RU = QP) || void 0 === RU || RU.onEvent(UU)
          },
          onModelRequest: UU => {
            var RU;
            null === (RU = jP) || void 0 === RU || RU.request(UU)
          },
          onModelTaken: (UU, RU) => {
            var gU;
            null === (gU = jP) || void 0 === gU || gU.taken(UU, RU)
          },
          onTerrainTexturesWanted: () => {
            queueMicrotask((() => {
              ! function(UU, RU) {
                const gU = iE;
                if (null === gU || UU.isStopped) return;
                gU.restore((UU => {
                  (0, Ig.reportTerrainTextureFailure)(UU, RU)
                })).then((RU => {
                  !1 !== RU || UU.isStopped ? !0 === RU && console.info(`${GE} terrain textures handed over again after the renderer lost them`) : console.warn(`${GE} the terrain textures couldn't be handed over again: the terrain draws blank`)
                }))
              }(bU, nU)
            }))
          },
          onKeepAlive: UU => {
            const RU = null === HP ? void 0 : SP.get(HP);
            void 0 !== RU && Jt(RU, UU)
          }
        });
        if (yE = bU, null !== UU) {
          bU.setAntiCheatProbes(gE(ER.u, UU.checks)), UU.watchHeld(pE.CoreFrame, (() => bU.frame)), UU.watchHeld(pE.GlueFrame, (() => wU.frame));
          const RU = PE(UU, ((UU, RU, gU) => {
            let tU = !1;
            return mK(bU, (() => {
              tU = bU.rings.input.writeRecord(SR.vb.AntiCheat, UU, RU, gU, 0)
            })), tU
          }));
          bU.isStopped ? RU.stop() : cP = RU
        }
        VE = (UU, RU, gU) => bU.rings.cmd.writeCmd(UU, RU, gU), rE = UU => bU.rings.cmd.growForCmd(UU), YP = !1, Hq(), (0, IU.s)(bU, {
          core: wU,
          memory: ER.u,
          staleOr: (UU, RU, gU) => nK({
            site: UU,
            error: RU
          }, gU),
          reportReplayFault: (UU, RU) => {
            (0, Ig.reportReplayFault)(UU, RU, zE)
          },
          audio: AE,
          options: CR.b,
          onNetEvent: UK,
          sessionInfo: UU => {
            var RU;
            return (null === (RU = kP) || void 0 === RU ? void 0 : RU.conn) === UU ? kP.info : null
          },
          onEventOverflow: pq,
          replayShaderPack: UU => {
            var RU;
            null === (RU = fP) || void 0 === RU || RU.replay(UU)
          },
          hasPackModel: UU => {
            var RU, gU;
            return null !== (null !== (RU = null === (gU = Sq()) || void 0 === gU ? void 0 : gU.modelUrl(UU)) && void 0 !== RU ? RU : null)
          },
          beforeWrite: () => (!bP && bU.rings.net.cursor > 0 && pK(bU, !1, "all"), !bU.isStopped),
          beforeOp: () => (!bP && bU.netWrittenSinceFrame > 0 && pK(bU, !1, "budget"), !bU.isStopped)
        }), (0, mU.G)({
          lockPointer: () => {
            if (!vg(hU)) return !1;
            try {
              Promise.resolve(hU.requestPointerLock()).catch((() => {}))
            } catch {
              return !1
            }
            return !0
          },
          unlockPointer: () => {
            (0, wg.d)()
          },
          leaveGame: () => {
            tq()
          },
          canvas: () => hU
        }), GP = (0, mU.x)((() => {
          var UU;
          const RU = (0, IU.i)();
          null === (UU = (0, IU.q)()) || void 0 === UU || UU.followCursorAim(!0 === (null === RU || void 0 === RU ? void 0 : RU.isSessionLive) ? RU : null)
        })), XP && bU.setUiPrefs(XP);
        vP && bU.setEnvPrefs(vP);
        dP && bU.setLookPrefs(dP);
        const oU = Tp ? qp(Tp.preventMovement) : null;
        oU && uq(oU);
        const ZU = (0, Cg.h)(),
          aU = (0, Cg.c)(bU, ZU);
        qP = ZU.basis, (0, xg.d)(null === aU ? null : (0, ug.p)(aU)), TP = aU;
        const YU = (0, qR.b)();
        let BU = 1 / 0,
          VU = !0,
          rU = ZU.shedFootprintBytes;
        const XU = new dt.e(YU, (() => wU.mQ()), (UU => {
          bU.crash(Ug.o, UU)
        }));
        EP = XU, PP = XU, null !== aU && XU.setCeiling(Math.min((0, dt.r)(aU), BU));
        if (VU) {
          XU.setShed((UU => {
            const RU = bU.shedMemory("joinReserve" !== UU);
            return null !== RU && (null === TP || RU < TP) && (TP = RU, (0, xg.d)((0, ug.p)(RU))), RU
          }), ((UU, RU, gU) => {
            1 === RU ? (0, Ig.reportMemoryShed)(UU, gU, zE) : console.warn(`${GE} wasm memory: shed again (${UU}): shed ${RU}`, gU.wasmMemoryShed)
          }), (() => bU.addDistanceInUse()));
          const UU = (0, OR.E)(JU);
          XU.setFootprint(new Zp(rU, {
            storedChunks: () => wU.agU(),
            gpuBytes: () => {
              var RU;
              return null !== (RU = null === UU || void 0 === UU ? void 0 : UU.YgU()) && void 0 !== RU ? RU : 0
            },
            jsHeapBytes: op
          }))
        }
        window.addEventListener("pagehide", (() => {
          EP === XU && (XU.refreshStats(), xK(XU))
        })), window.addEventListener("pagehide", gK), window.addEventListener("pagehide", tK), !1;
        const [vU, dU] = (0, Qg.e)();
        xT = (0, Wg.d)((UU => bU.setChunkAddDistance(UU.horizontal, UU.vertical)), {
          horizontal: vU,
          vertical: dU
        }), bU.setAmbientOcclusion(!0 !== mg.k.getItem("disableAmbientOcclusion")), bU.setPoseLod(!0 !== mg.k.getItem(pR.V)), (0, ap.l)("look") && (bU.setDebugLog(SR.R.Look, !0), (0, Bp.m)("wasm", (() => bU.takeDebugLog(SR.R.Look))));
        (0, ap.l)("remesh") && (bU.setDebugLog(SR.R.Remesh, !0), HU = () => bU.takeDebugLog(SR.R.Remesh), dp = new vp((0, Vp.p)(), HU));
        var HU;
        const SU = function(UU, RU, gU, tU) {
          const pU = new Ut,
            EU = UU => mg.k.getItem(UU);
          pU.sync(EU, RU), (0, nR.W)();
          const PU = (0, qU.t)("customBindingsChanged", (() => {
            pU.sync(EU, RU)
          }));
          (0, ng.s)(RU);
          const TU = new Set,
            KU = (0, mU.x)((() => {
              var UU;
              TU.size > 0 && pt() && !0 === (null === (UU = (0, IU.i)()) || void 0 === UU ? void 0 : UU.localPlayerAlive()) && qU.p.yh("usedKeyboard")
            })),
            cU = ig.c.heldSizer((() => (0, oR.m)(UU))),
            GU = Fg(UU, RU, {
              prevents: UU => pU.prevents(UU),
              keyPressed: UU => {
                pU.moves(UU) && (TU.add(UU), pt() && qU.p.yh("usedKeyboard"))
              },
              keyReleased: UU => {
                TU.delete(UU)
              },
              keysReleased: () => {
                TU.clear()
              },
              resized: () => {
                gt.i.measure(UU.getBoundingClientRect()), (0, Ag.j)()
              },
              sizeCanvas: cU,
              watchRenderScale: RU => {
                const gU = (0, oR.n)(UU, RU),
                  tU = ig.c.onRelease(RU);
                return () => {
                  gU(), tU()
                }
              },
              touchStarting: () => {
                gt.i.measure(UU.getBoundingClientRect())
              },
              viewShown: gU,
              touchUiShown: () => iU.b.get("isTouchScreen"),
              ctrlCombosAreGames: pt,
              inspect: (UU, RU, gU) => {
                pU.checks(RU, gU) && tU(UU)
              },
              canLock: () => vg(UU)
            }),
            jU = (0, Eg.c)(RU);
          return () => {
            PU(), KU(), (0, ng.s)(null), jU(), GU()
          }
        }(hU, ((UU, RU, gU, tU, pU) => {
          var EU;
          mK(bU, (() => {
            bU.rings.input.writeRecord(UU, RU, gU, tU, pU)
          })), null === (EU = cP) || void 0 === EU || EU.onInput(UU), !oP && (0, Kt.f)(UU, pU) && (0, Kt.b)((() => {
            yE !== bU || vT || bU.isStopped || !cK() || pK(bU, !1, "budget", !1)
          }))
        }), (() => BT), (UU => {
          var RU;
          null === (RU = cP) || void 0 === RU || RU.onEvent(UU)
        }));
        if (bU.isStopped) return SU(), null;
        RP = SU;
        const sU = () => !bU.isStopped && !rT;
        if (bU.isStopped) return null;
        (0, ER.O)((() => {
          "call" === (0, ER.q)() && bU.crash(Ug.v, (0, ER.o)())
        }));
        const yU = (0, Ug.N)(bU.rings.worker, (() => {
          pK(bU, !1, "budget")
        }));
        gP = function(UU, RU) {
          return IK().then((UU => {
            let {
              prefetchWorldgenWorker: RU
            } = UU;
            RU()
          }), (() => {})), new sp({
            module: (0, ER.x)(),
            decodeSettings: UU => {
              const RU = (0, IU.q)();
              if (null === RU) throw new Error("no game code to decode the world-gen seed with");
              return RU.decodeMapSettings(UU)
            },
            loadWorker: JK,
            onMapWithoutWorldgen: () => {
              wK((UU => {
                let {
                  stopWorldgenWorkerPrefetch: RU
                } = UU;
                RU()
              }))
            },
            onLoadFailed: UU => {
              (0, Ig.reportWorldgenLoadFailure)(UU, zE)
            },
            onWorkerLost: UU => {
              (0, Ig.reportWorkerLost)(Ug.F, UU, zE)
            },
            onStartTimeout: UU => {
              (0, Ig.reportWorkerStartTimeout)(Ug.F, UU, zE)
            },
            onGaveUp: UU => {
              (0, Ig.reportWorldgenGaveUp)(UU, zE)
            },
            onMemoryStats: UU => {
              var RU;
              null === (RU = EP) || void 0 === RU || RU.noteWorldgen(UU)
            },
            onMemoryGone: () => {
              var UU;
              null === (UU = EP) || void 0 === UU || UU.worldgenGone()
            },
            write: (gU, tU, pU, EU, PU) => {
              mK(UU, (() => {
                UU.rings.worker.writeWorkerRecord(gU, tU, pU, 0, EU, PU) || UU.crash(Ug.F, `a world-gen record of kind ${tU} did not fit the worker-in ring`)
              })), RU()
            }
          })
        }(bU, yU), pP = function(UU, RU) {
          return new Xt({
            module: (0, ER.x)(),
            loadWorkers: async () => {
              const [{
                createMeshWorker: UU
              }, RU] = await Promise.all([gU.e(40).then((() => gU(42678))), Promise.resolve().then((() => gU(96))).then((UU => {
                let {
                  isMobile: RU
                } = UU;
                return RU()
              }), (() => !1))]);
              return {
                create: UU,
                count: (0, xR.b)(navigator.hardwareConcurrency, RU)
              }
            },
            write: (gU, tU, pU, EU, PU, TU) => {
              (0, Ag.g)(), mK(UU, (() => {
                UU.rings.worker.writeWorkerRecord(gU, tU, pU, EU, PU, TU) || UU.crash(Ug.r, `a meshing record of kind ${tU} did not fit the worker-in ring`)
              })), RU()
            },
            onWorkerLost: UU => {
              (0, Ig.reportWorkerLost)(Ug.r, UU, zE)
            },
            onLightFault: (UU, RU) => {
              (0, Ig.reportLightFault)(UU, RU, zE)
            },
            onStartTimeout: UU => {
              (0, Ig.reportWorkerStartTimeout)(Ug.r, UU, zE)
            },
            onMemoryStats: (UU, RU) => {
              var gU;
              null === (gU = EP) || void 0 === gU || gU.noteMeshWorker(UU, RU)
            },
            onMemoryGone: UU => {
              var RU;
              null === (RU = EP) || void 0 === RU || RU.meshWorkerGone(UU)
            },
            fail: (RU, gU) => {
              const tU = () => {
                UU.crash(Ug.r, void 0 === gU ? RU : new Error(RU, {
                  cause: gU
                }))
              };
              void 0 !== gU ? nK({
                site: Ug.r,
                error: gU
              }, tU) : tU()
            }
          })
        }(bU, yU);
        const AU = (0, Lt.o)(WR.clientSideServerUrls.staticUrl, {
            onTableFailed: UU => {
              nK({
                site: Ig.MODEL_FEED_SITE,
                error: UU
              }, (() => {}), sU)
            },
            packUrl: UU => {
              var RU, gU;
              return null !== (RU = null === (gU = Sq()) || void 0 === gU ? void 0 : gU.modelUrl(UU)) && void 0 !== RU ? RU : null
            }
          }),
          zU = function(UU, RU, gU) {
            const tU = gU => {
              var tU, pU;
              return null !== (tU = null === (pU = RU()) || void 0 === pU ? void 0 : pU.drawnUrl(gU)) && void 0 !== tU ? tU : UU.url(gU)
            };
            return (0, Mt.i)((0, St.n)(tU), gU)
          }(AU, (() => jP), Sq),
          MU = new St.f(zU, (UU => {
            console.warn(`${GE} image ${UU.key.kind}:${UU.key.index}:${UU.key.word} failed`, UU.error)
          }));
        QP = MU, eP = new At(bU, zU, ((UU, RU) => {
          void 0 === RU ? console.warn(`${GE} ${UU}`) : kq(UU, RU)
        }));
        const DU = new zt.h(AU, function(UU, RU) {
          let tU = !1,
            pU = null,
            EU = null;
          const PU = {
              onUnavailable: (gU, tU) => {
                EU ??= nK({
                  site: Ig.MODEL_POOL_SITE,
                  error: gU,
                  urls: tU
                }, (() => {
                  (0, Ig.reportModelPoolFailure)(gU, UU)
                }), RU)
              },
              onDecoderFailed: (gU, tU) => {
                const pU = () => {
                  (0, Ig.reportDracoDecoderFailure)(gU, UU)
                };
                void 0 !== tU ? nK({
                  site: Ig.MODEL_POOL_SITE,
                  error: gU,
                  urls: tU
                }, pU, RU) : pU()
              },
              onWorkerLost: RU => {
                (0, Ig.reportWorkerLost)(Ig.MODEL_POOL_SITE, RU, UU)
              },
              onModuleRetry: (RU, gU) => {
                (0, Ig.reportModelsModuleRetry)(RU, gU, UU)
              }
            },
            TU = gU.e(42).then((() => gU(42680))).then((UU => {
              let {
                pageModelPool: RU
              } = UU;
              if (tU) return null;
              const gU = RU(PU);
              return pU = gU.unlisten, uP = gU.pool, gU.pool
            }), (UU => (tU || PU.onUnavailable(UU, void 0), null)));
          return CP = () => {
            var UU;
            tU = !0, null === (UU = pU) || void 0 === UU || UU(), uP = null
          }, (UU, RU) => TU.then((gU => {
            var tU;
            return null !== (tU = null === gU || void 0 === gU ? void 0 : gU.build(UU, RU)) && void 0 !== tU ? tU : (0, Nt.t)(UU, "the model workers did not load")
          })).then((UU => null !== EU && (0, Nt.k)(UU) ? EU.then((() => UU)) : UU))
        }(nU, sU), (UU => {
          UU.startup ? (CK(), nK({
            site: Ig.MODEL_FEED_SITE,
            error: UU.error,
            urls: "" === UU.url ? void 0 : [UU.url]
          }, (() => {
            (0, Ig.reportModelFailure)(UU, nU)
          }))) : (0, Ig.reportModelFailure)(UU, nU)
        }), {
          onWritten: (UU, RU) => {
            MU.glbWritten(UU, RU)
          },
          onTaken: (UU, RU) => {
            MU.glbTaken(UU, RU)
          },
          onPackFileFailed: (UU, RU) => {
            console.warn(`${GE} the texture pack's model file ${UU} failed: the shipped one loads`, RU)
          }
        });
        jP = DU;
        const LU = new kt.f(bU);
        iE = LU, LU.swap((UU => {
          const RU = () => {
            (0, Ig.reportTerrainTextureFailure)(UU, nU)
          };
          if (mT) return void RU();
          const gU = () => !mT,
            tU = null === UU.url ? void 0 : [UU.url];
          nK({
            site: Ug.C,
            error: UU.error,
            urls: tU
          }, RU, gU)
        })).then((UU => {
          null !== UU && (UU || bU.isStopped || console.warn(`${GE} the core refused the terrain textures: terrain draws untextured`), JP(bU))
        }));
        const NU = new dR(bU, ((UU, RU) => {
          console.warn(`${GE} ${UU}`, ...void 0 === RU ? [] : [RU])
        }));
        NU.feed(), null !== GU && function(UU, RU, tU, pU, EU, PU) {
          let TU = null,
            qU = null,
            KU = !1;
          const cU = {
            textures: null,
            stop: () => {
              var UU, RU;
              KU = !0, null === (UU = qU) || void 0 === UU || UU(), null === (RU = TU) || void 0 === RU || RU(), Dt.b.setSettled(null), null !== ME && iT.clear(ME)
            }
          };
          FE = cU, qU = Fq().follow((qU => {
            null !== qU && Promise.all([gU.e(193), gU.e(45)]).then((() => gU(42653))).then((gU => {
              let {
                PackTextures: GU
              } = gU;
              if (KU || UU.isStopped) return;
              const jU = new GU({
                feed: qU,
                terrain: RU,
                backend: tU,
                stopped: () => UU.isStopped,
                landed: () => {
                  JP(UU)
                },
                packSwapped: () => {
                  (0, Mt.e)(pU), PU.feed((() => async function(UU) {
                    const RU = null === UU ? null : await UU.averageColours;
                    return null === RU ? HR() : vR(RU)
                  }(jU.assets))), sq(jU.iconOverrides()), EU.refresh().then((UU => {
                    null !== UU && console.info(`${GE} texture pack models: ${UU.resent} of ${UU.delivered} files written again, ${UU.refetched} refetched`)
                  }))
                },
                settled: (UU, RU, gU) => {
                  var tU;
                  (Dt.b.setSettled({
                    state: UU,
                    files: RU
                  }), null === UU.gameSource && (0, hg.d)(UU.pack, gU), gU) || function(UU) {
                    const RU = ME;
                    null !== RU && iT.apply(RU, UU).then((RU => {
                      RU && UU && console.info(`${GE} the texture pack's animations are in (${Object.keys(UU).length} files)`)
                    }))
                  }(null === (tU = UU.pack) || void 0 === tU ? void 0 : tU.animations)
                },
                settling: () => {
                  Dt.b.setSettled(null)
                },
                warn: kq,
                maxTextureSize: () => Promise.resolve((0, OR.X)(document.createElement("canvas")))
              });
              cU.textures = jU, TU = jU.start()
            }), (UU => {
              console.warn(`${GE} the texture pack's terrain didn't load: the built atlas stays`, UU)
            }))
          }))
        }(bU, LU, GU, MU, DU, NU);
        const lU = () => {
            bU.setTextureLayers("")
          },
          OU = UU => {
            (eR ??= gU.e(50).then((() => gU(42686))).then((UU => {
              let {
                TEXTURE_NAMES: RU
              } = UU;
              return RU
            }), (UU => {
              throw eR = null, UU
            })), eR).then((UU => {
              bU.setTextureLayers(UU) || bU.isStopped || (console.warn(`${GE} the core refused the texture names: textured Boxes draw textureNotFound`), lU())
            }), (RU => {
              if (bU.isStopped) return;
              const [gU, ...tU] = UU;
              void 0 === gU ? nK({
                site: Ig.TEXTURE_NAMES_SITE,
                error: RU
              }, (() => {
                console.warn(`${GE} the texture names didn't load, so textured Boxes draw textureNotFound`, RU), lU()
              }), sU) : setTimeout((() => {
                OU(tU)
              }), gU)
            }))
          };
        if (OU(YE), null !== GU && !await async function(UU, RU, gU, tU, EU, PU) {
            var TU;
            const qU = (0, OR.E)(gU);
            if (null === qU) return UU.crash(uE, new Error(`this ${tU} build has no openRenderer`)), !1;
            let KU;
            qT = qU;
            try {
              var cU, GU, jU, uU;
              const pU = null !== (cU = null === (GU = SE) || void 0 === GU ? void 0 : GU.pagePreviews()) && void 0 !== cU ? cU : null,
                TU = null !== (jU = null === (uU = SE) || void 0 === uU ? void 0 : uU.previewModule(gU)) && void 0 !== jU ? jU : null;
              if (null === pU || null === TU) {
                null === pU || void 0 === pU || pU.endSession(!1), KU = (0, oR.f)().sampleCount, await (0, OR.e)(RU, qU, PU, dq, KU, await EU);
                const UU = (0, OR.h)(gU);
                null === UU && console.warn(`${GE} this ${tU} build has no image registry: sky and model images won't show`), (0, yt.c)(UU)
              } else {
                (0, pp.b)() && await (0, FU.k)();
                const gU = (0, pp.I)();
                if (null !== gU) {
                  const RU = (0, OR.S)(qU);
                  return UU.crash(Ig.RENDER_RELOAD_SITE, new Error(`${gU}${void 0===RU?"":` (${RU.message})`}`)), !1
                }
                KU = await pU.bindSession(TU, RU, (async UU => (0, OR.t)(qU, uE, PU, UU, dq, await EU)))
              }
            } catch (pU) {
              return UU.crash(uE, pU), !1
            }(function(UU, RU) {
              const gU = UU,
                {
                  requestCapture: tU,
                  takeCapture: pU
                } = gU;
              if ("function" !== typeof tU || "function" !== typeof pU) return;
              const EU = {
                request() {
                  tU.call(gU, RU)
                },
                take() {
                  var UU;
                  return null !== (UU = pU.call(gU)) && void 0 !== UU ? UU : null
                }
              };
              window[Gp] = EU
            })(RU, KU), hT = KU, PT = !0;
            const CU = performance.now();
            return TT.boundAtMs = null !== (TU = (0, pp.L)()) && void 0 !== TU ? TU : CU, TT.indirectHangs = (0, pp.A)(), console.info(`${GE} ${tU} renderer bound at ${Math.round(CU)} ms`), !UU.isStopped
          }(bU, wU, JU, GU, uU, hU)) return null;
        if (null !== GU) {
          var UR, RR, gR;
          (0, KR.M)(GU);
          const UU = () => !bU.isStopped && KK();
          gU.e(185).then((() => gU(8880))).then((RU => {
            let {
              devTools: gU
            } = RU;
            bU.isStopped || gU.setHost(function(UU) {
              return {
                tools: tp,
                async downloadScene(RU, gU) {
                  let {
                    width: tU,
                    height: pU,
                    colouring: EU
                  } = gU;
                  "screenshot" === RU && null === EU ? await (0, Up.e)(UU, tU, pU) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
                },
                setAmbientLightIntensity: () => (console.warn("The Rust client's renderer has no ambient light setting"), Promise.resolve())
              }
            }(function(UU, RU) {
              return {
                canvas: UU,
                maxTextureSize: Rp,
                drawing: RU,
                resize: (UU, RU) => {
                  (0, ng.z)(SR.vb.Resize, 0, UU, RU, (0, ng.m)(1))
                },
                restoreSize: () => {
                  const RU = (0, oR.m)(UU);
                  null !== RU && (0, ng.z)(SR.vb.Resize, 0, RU.cssWidth, RU.cssHeight, (0, ng.m)(RU.renderScale))
                },
                onFrameDrawn: UU => (gp.add(UU), () => {
                  gp.delete(UU)
                })
              }
            }(hU, UU)))
          }), (UU => {
            console.warn(`${GE} the developer tools didn't load: no captures this session`, UU)
          }));
          const RU = "webgpu" === GU && null !== (UR = null === KU || void 0 === KU || null === (RR = KU.adapter) || void 0 === RR ? void 0 : RR.vendor) && void 0 !== UR ? UR : null;
          QT = {
            backend: GU,
            canvas: hU,
            fallbackReason: null !== (gR = null === KU || void 0 === KU ? void 0 : KU.reason) && void 0 !== gR ? gR : null,
            adapterVendor: RU
          }, Lq();
          try {
            (0, Ag.r)(GU, hU, RU)
          } catch (pU) {
            (0, Ag.s)(), console.error(`${GE} the quality steps didn't start`, pU)
          }
        }
        const {
          storagePullBreaks: tR,
          splitPassBreaks: GR
        } = await uU;
        GR && console.warn(`${GE} split_pass_breaks on: Windows Adreno 7xx (N-103) or ?sceneDepth=off`);
        const hR = tR ? kU.b : (0, kU.d)(KU, (0, wR.c)());
        if ((0, ap.l)("webgpuloss")) {
          var QR, fR;
          const UU = {
            backend: GU,
            reason: null !== (QR = null === KU || void 0 === KU ? void 0 : KU.reason) && void 0 !== QR ? QR : null,
            source: null !== (fR = null === KU || void 0 === KU ? void 0 : KU.source) && void 0 !== fR ? fR : null,
            storagePullBreaks: tR,
            noWebGpu: hR.messageKey
          };
          (0, Yp.b)((RU => {
            RU.noteWasmPick(UU)
          }))
        }
        const mR = "webgpu" === GU && !tR;
        if (fP = (0, kU.g)(mR ? bU : null, mR && null !== (PU = null === (TU = SE) || void 0 === TU ? void 0 : TU.pagePreviews().Fu) && void 0 !== PU ? PU : null, hR, kq), vT) return null;
        if (XU.reserveAtJoin((0, dt.n)(null !== aU && void 0 !== aU ? aU : ug.h)), bU.isStopped) return null;
        const IR = UU => {
          if (null !== eT) try {
            eT.animationFrame(UU)
          } catch (pU) {
            Oq(pU)
          }
          if (function(UU, RU) {
              return RU && !vT && !oP && cK() && KK() && UU.framePaces(performance.now())
            }(bU, BT)) return bU.writePendingInput(), (0, mU.e)(UU, EK), Nq(!1, UU), void requestAnimationFrame(IR);
          pK(bU, BT, "budget") && ((0, bR.j)(bU.lastFrameKind) && KK() && (0, mU.e)(UU, EK), Nq(BT && ZT, UU), aT.frame(bU.lastFrameKind, BT && KK(), UU), QK(bU), XU.afterFrame(), requestAnimationFrame(IR))
        };
        requestAnimationFrame(IR);
        return function(UU) {
          if (UU.has("inputLog") && (0, Rt.i)((UU => {
              let {
                action: RU,
                down: gU,
                press: tU
              } = UU;
              console.info(`${tt} input ${RU} ${gU?"down":"up"} press ${tU} at ${performance.now().toFixed(1)}`)
            })), UU.has("inputDump")) {
            const UU = [];
            Et = UU, Object.assign(window, {
              bloxdInputDump: () => UU.join("\n")
            })
          }
        }(new URLSearchParams(window.location.search)), KP = function(UU, RU) {
          let gU = null;
          const tU = () => {
              null !== gU && (clearInterval(gU), gU = null)
            },
            pU = () => {
              document.hidden ? gU ??= setInterval((() => {
                pK(UU, !1, "budget") ? (QK(UU), RU.afterFrame()) : tU()
              }), aE) : tU()
            };
          return document.addEventListener("visibilitychange", pU), pU(), () => {
            tU(), document.removeEventListener("visibilitychange", pU)
          }
        }(bU, XU), bU
      }(RU).then((UU => {
        var RU;
        (tU(zE), NE(null !== UU), null !== UU && (ep = performance.now()), DE(UU), null === UU) ? null === (RU = SE) || void 0 === RU || RU.pagePreviews().endSession(null === (0, ER.q)()): IP("booted")
      }), (UU => {
        tU(zE), NE(!1), DE(null), hK({
          site: CE,
          error: UU,
          header: null
        }, zE)
      }))
    }

    function FT() {
      const UU = ME;
      null !== UU && dT().then((RU => {
        let {
          pageBuiltInAnimationPack: gU
        } = RU;
        gU().provide(UU)
      }), (UU => {
        console.warn(`${GE} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, UU)
      }))
    }
    const iT = new class {
      constructor(UU) {
        this.deps = UU, this.latest = 0, this.WT = null
      }
      apply(UU, RU) {
        return this.load(UU, RU, 0)
      }
      async load(UU, RU, gU) {
        var tU;
        const pU = ++this.latest,
          EU = this.deps.compiler;
        if (void 0 === RU || null === RU || "object" !== typeof RU || 0 === Object.keys(RU).length || null === EU) return this.drop(UU), !1;
        if ((null === (tU = this.WT) || void 0 === tU ? void 0 : tU.module) === UU && (0, MR.re)(this.WT.files, RU)) return !1;
        try {
          const [gU, tU] = await Promise.all([EU(), this.deps.builtIns()]);
          if (pU !== this.latest) return !1;
          const PU = await gU(RU, lR, {
            builtIns: tU
          });
          if (pU !== this.latest) return !1;
          const TU = this.call(UU, PU);
          if (void 0 === TU) throw new NR("the compiled animations didn't read against the built-in pack");
          return this.WT = {
              module: UU,
              files: RU
            },
            function(UU) {
              for (let RU = 0; RU + 2 < UU.length; RU += 3) {
                ("error" === UU[RU] ? console.error : console.warn)(`Animation for the texture pack: ${UU[RU+1]}: ${UU[RU+2]}`)
              }
            }(TU), !0
        } catch (TU) {
          var PU;
          if (pU !== this.latest) return !1;
          this.drop(UU), 0 === gU && this.deps.warn("the texture pack's animations didn't load: lifeforms play the built-in ones", TU);
          const tU = (null !== (PU = this.deps.retryAfterMs) && void 0 !== PU ? PU : LR)[gU];
          return void 0 === tU || TU instanceof NR || (0, DR.j)(UU) || setTimeout((() => {
            pU === this.latest && this.load(UU, RU, gU + 1)
          }), tU), !1
        }
      }
      call(UU, RU) {
        try {
          return UU.bgU(RU)
        } catch (gU) {
          throw (0, DR.k)(UU, gU), gU
        }
      }
      clear(UU) {
        this.latest++, this.drop(UU)
      }
      drop(UU) {
        const RU = this.WT;
        if (this.WT = null, (null === RU || void 0 === RU ? void 0 : RU.module) === UU && !(0, DR.j)(UU)) try {
          this.call(UU, null)
        } catch {}
      }
    }({
      compiler: FR.d,
      builtIns: async () => {
        const {
          pageBuiltInAnimationPack: UU
        } = await dT();
        return UU().whenSet()
      },
      warn: kq
    });
    async function AT(UU, RU) {
      let tU = !1;
      await zT({
        matchmake: async () => {
          const {
            guestJoinTarget: pU,
            guestJoinWithPack: EU
          } = await gU.e(342).then((() => gU(42637)));
          return tU ? pU(UU, RU, Aq()) : (tU = !0, EU(UU, RU, (RU => zq(UU, RU)), Aq))
        },
        onFailure: UU => {
          (0, Ig.showJoinFailure)(UU, zE)
        },
        rejoin: qq,
        invalidateTrafficCode: Kq
      })
    }
    async function zT(UU) {
      let {
        matchmake: RU,
        onFailure: gU,
        rejoin: pU,
        invalidateTrafficCode: EU,
        pageReady: PU,
        signal: TU
      } = UU;
      const qU = () => !0 === (null === TU || void 0 === TU ? void 0 : TU.aborted);
      let KU;
      const cU = Dt.b.rejoinHold(),
        GU = (0, fg.N)("wasm", fK);
      let jU = !1,
        uU = performance.now();
      try {
        if (!await lE) return {
          kind: "stopped"
        };
        if (qU()) return {
          kind: "cg"
        };
        HT().catch((() => {}));
        let UU = await RU();
        uU = performance.now();
        const gU = () => performance.now() - UU.matchedAt <= UU.freshMs,
          tU = DT(UU.target).catch((() => {}));
        gU() && !qU() && (KU = new Yt(UU.target, {
          signal: TU
        }));
        const EU = performance.now();
        if (null === await LE) return {
          kind: "stopped"
        };
        var CU;
        if (function(UU) {
            var RU, gU;
            if (jp.e.markGameEngineConstructed(), Wp) return;
            Wp = !0;
            const tU = Math.max(UU, null !== (RU = hp) && void 0 !== RU ? RU : UU);
            (0, Cp.i)("ready", Math.max(0, (null !== (gU = Qp) && void 0 !== gU ? gU : tU) - tU) / 1e3)
          }(EU), qU() || (null !== Qp && null !== ep ? ((0, BR.m)("wasm_loaded", Qp), (0, BR.m)("wasm_core_ready", ep)) : console.warn("[bloxd-wasm-client] a join found the core before boot marked its steps")), await tU, !gU() && !qU()) null === (CU = KU) || void 0 === CU || CU.rematched(), UU = await RU(), uU = performance.now();
        if (qU()) return {
          kind: "cg"
        };
        const cU = await async function(UU) {
          var RU, gU, tU;
          let {
            signal: pU,
            rejoin: EU = null,
            early: PU,
            pageReady: TU
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null !== pU && void 0 !== pU && pU.aborted) throw new DOMException("the join was left", "AbortError");
          const qU = (KU = LP, cU = performance.now(), null !== KU && cU - KU < Qt);
          var KU, cU;
          LP = null;
          const GU = new AbortController;
          lT({
            controller: GU,
            game: null !== (RU = null === (gU = UU.session) || void 0 === gU ? void 0 : gU.gameNameWithVariation) && void 0 !== RU ? RU : null
          }), NP = null, null === (tU = UT) || void 0 === tU || tU.abort(), UT = null, gT = !1, tT = null, pT.clear();
          const jU = () => {
            (0, fR.j)(GU, (0, fR.g)(pU))
          };
          null === pU || void 0 === pU || pU.addEventListener("abort", jU, {
            once: !0
          });
          try {
            var uU, CU, hU;
            const RU = await LE;
            if (null === RU || RU.isStopped || vT) throw new Error("no core is running to join a game with");
            if (UU.session && null !== fP) {
              const RU = await LT(fP.join(UU.session.gameNameWithVariation), GU.signal);
              if ((0, ap.l)("webgpuloss")) {
                const gU = UU.session.gameNameWithVariation,
                  tU = fP.couldntRunInJoinedGame();
                (0, Yp.b)((UU => UU.noteWasmJoin(gU, RU, tU)))
              }
              if (null !== RU) throw new kU.c(RU)
            }
            const [, , , {
              joinRoom: gU
            }] = await LT(Promise.all([(0, IU.j)(RU), DT(UU), null === TU || void 0 === TU ? void 0 : TU(), HT()]), GU.signal), tU = UU.session, pU = tU ? {
              ...jq,
              attachSocket: RU => {
                const gU = fq(RU, UU.endpoint);
                var pU;
                null !== gU && (kP = {
                  conn: gU,
                  info: tU
                }, null === (pU = FP) || void 0 === pU || pU(tU.playerDbId));
                return gU
              }
            } : jq, KU = await gU(pU, UU, {
              signal: GU.signal,
              early: PU
            }).catch((UU => {
              throw function(UU) {
                if (!(UU instanceof VU.b)) return UU;
                if ("roomError" === UU.stage && null !== tT) return MT(new VU.b(UU.message, UU.stage, UU.code, tT), UU);
                const RU = "closed" === UU.stage && null !== lP ? pT.get(lP.conn) : void 0;
                return void 0 === RU ? UU : MT(new VU.b(UU.message, UU.stage, RU.code), UU)
              }(UU)
            }));
            if (sP !== GU) throw KU.leave(), new DOMException("the join was left", "AbortError");
            Uq(KU), null === (uU = pP) || void 0 === uU || uU.newGame();
            const cU = function(UU) {
              var RU, gU;
              const {
                session: tU
              } = UU, pU = void 0 === tU ? UU.joinOptions.lobbyName : tU.lobbyName;
              return {
                endpoint: UU.endpoint,
                game: null !== (RU = null === tU || void 0 === tU ? void 0 : tU.gameNameWithVariation) && void 0 !== RU ? RU : UU.roomName,
                lobby: String(null !== pU && void 0 !== pU ? pU : null),
                postCookies: null !== (gU = UU.postCookies) && void 0 !== gU ? gU : null
              }
            }(UU);
            SP.set(KU, cU), nt(cU);
            const jU = performance.now(),
              QU = {
                conn: KU.conn,
                rejoin: EU,
                game: null !== (CU = null === (hU = UU.session) || void 0 === hU ? void 0 : hU.gameNameWithVariation) && void 0 !== CU ? CU : "",
                joinedAt: jU,
                rejoinedAt: qU ? jU : null,
                overflow: null
              };
            iP = QU,
              function(UU, RU) {
                oq();
                const gU = {
                  endpoint: RU,
                  roomId: UU.seat.room.roomId,
                  heldConn: 0,
                  dropCode: 0,
                  pendingHold: null,
                  resume: new cg({
                    reconnect: (UU, RU, tU) => async function(UU, RU, gU, tU) {
                      const {
                        roomId: pU,
                        roomToken: EU
                      } = aq(UU, RU), PU = yE;
                      if (null === PU || PU.isStopped || vT) throw new Error("no core is running to resume the game on");
                      const {
                        resumeRoom: TU
                      } = await LT(HT(), gU), qU = {
                        ...jq,
                        attachSocket: RU => AP !== UU || 0 === UU.heldConn ? (RU.close(), null) : fq(RU, UU.endpoint, !0)
                      };
                      return TU(qU, UU.endpoint, pU, EU, {
                        signal: gU,
                        onAttached: tU
                      })
                    }(gU, UU, RU, tU),
                    releaseSeat: UU => {
                      !async function(UU, RU) {
                        const {
                          roomId: gU,
                          roomToken: tU
                        } = aq(UU, RU);
                        try {
                          const {
                            leaveHeldSeat: RU
                          } = await HT();
                          await RU(UU.endpoint, gU, tU)
                        } catch (pU) {
                          console.warn(`${GE} the held seat of a game left while it reconnected couldn't be released`, pU)
                        }
                      }(gU, UU)
                    },
                    isLive: () => AP === gU && null !== iP && !vT,
                    HJ: UU => {
                      DP = UU, bq()
                    },
                    onReconnected: UU => {
                      ! function(UU) {
                        const RU = HP;
                        if (null !== RU && RU !== UU) {
                          const gU = SP.get(RU);
                          void 0 !== gU && SP.set(UU, gU), oT === RU && (oT = UU), RU.detach()
                        }
                        Uq(UU)
                      }(UU)
                    },
                    onGaveUp: (UU, RU) => {
                      ! function(UU, RU, gU) {
                        var tU, pU;
                        console.warn(`${GE} gave up reconnecting (${gU.reason}, ${gU.attempts} attempts)`, gU.lastError), (0, Ig.reportReconnectGaveUp)(gU, zE);
                        const EU = null !== (tU = null === (pU = iP) || void 0 === pU ? void 0 : pU.rejoin) && void 0 !== tU ? tU : null;
                        Zq(UU, "gaveUp"), gq();
                        const PU = {
                          code: UU.dropCode,
                          name: null,
                          reason: nE,
                          canReconnect: !RU,
                          automaticallyReconnect: !1,
                          requiresRefresh: !1
                        };
                        Gq(PU, RU ? null : EU, !1, {
                          reasonKey: bE,
                          canPlayAgain: RU
                        })
                      }(gU, UU, RU)
                    }
                  })
                };
                AP = gU, null !== zP && zP.conn === UU.conn && gU.resume.onInitialInfo(zP)
              }(KU, UU.endpoint), performance.mark(eE), (0, BR.m)("wasm_joined", jU), setTimeout((() => {
                HP === KU && (0, BR.e)()
              }), 0), FT(), console.info(`${GE} joined ${UU.roomName} as ${KU.seat.sessionId} at ${Math.round(performance.now())} ms`);
            const eU = NP;
            NP = null, null !== eU && Eq(QU, eU.mask, eU.frames);
            const WU = pT.get(KU.conn);
            return pT.clear(), void 0 !== WU && (Uq(null), cq(KU.conn, WU.code, WU.reason)), KU
          } finally {
            var QU;
            null === pU || void 0 === pU || pU.removeEventListener("abort", jU), sP === GU && OT(HP, null), (null === (QU = lP) || void 0 === QU ? void 0 : QU.join) === GU && (lP = null)
          }
        }(UU.target, {
          signal: TU,
          rejoin: pU(UU.target),
          early: KU,
          pageReady: PU
        });
        return jU = !0, {
          kind: "joined",
          game: cU
        }
      } catch (QU) {
        if (QU instanceof DOMException && "AbortError" === QU.name || qU()) return {
          kind: "cg"
        };
        if (vT) return {
          kind: "stopped"
        };
        if (gT && (gT = !1, await EU().catch((UU => {
            console.warn(`${GE} the cached traffic code could not be dropped`, UU)
          }))), null === await LE) return {
          kind: "stopped"
        };
        if (QU instanceof kU.c) return gU(QU, performance.now() - uU), {
          kind: "failed",
          error: QU,
          reloading: !1
        };
        if (QU instanceof VU.b && QU.code === tU.d.wasmClientNotAllowed.code && YT) return vq("this server refused the wasm client to this account", "refused"), {
          kind: "failed",
          error: QU,
          reloading: !0
        };
        const UU = QU instanceof VU.b && QU.code === tU.d.outdatedVersion.code,
          RU = () => null === HP,
          pU = await nK({
            site: Ig.JOIN_SITE,
            error: QU,
            outdated: UU
          }, (() => {
            gU(QU, performance.now() - uU)
          }), RU);
        return {
          kind: "failed",
          error: QU,
          reloading: pU
        }
      } finally {
        var hU;
        jU || GU.end(), Dt.b.releaseHold(cU);
        const UU = null === (hU = KU) || void 0 === hU ? void 0 : hU.release();
        UU && (0, Ig.reportUnusedSeat)(UU, zE)
      }
    }

    function MT(UU, RU) {
      return UU.stack = RU.stack, UU
    }

    function DT(UU) {
      return UU.session ? (0, IU.p)(AE, UU.session.gameNameWithVariation) : Promise.resolve()
    }

    function LT(UU, RU) {
      return (0, fR.m)(RU), new Promise(((gU, tU) => {
        const pU = () => {
          tU((0, fR.g)(RU))
        };
        RU.addEventListener("abort", pU, {
          once: !0
        }), UU.then((UU => {
          RU.removeEventListener("abort", pU), gU(UU)
        }), (UU => {
          RU.removeEventListener("abort", pU), tU(UU)
        }))
      }))
    }

    function NT() {
      lT(null)
    }

    function lT(UU) {
      var RU, gU, tU;
      (function() {
        const UU = AP;
        null !== UU && Zq(UU, "left")
      }(), null === UP || UP.left) || (UP.left = !0, null === (tU = (0, IU.i)()) || void 0 === tU || tU.socketLeft(), (0, jU.m)({
        websocketUrl: null
      }));
      sP && (0, fR.j)(sP, new DOMException("the join was left", "AbortError")), gq(null !== UU), null === (RU = fP) || void 0 === RU || RU.leave();
      const pU = HP;
      null !== UU && Dt.b.setGame(UU.game), OT(null, null !== (gU = null === UU || void 0 === UU ? void 0 : UU.controller) && void 0 !== gU ? gU : null), null === pU || void 0 === pU || pU.leave(), Rq(0), (0, hR.c)()
    }

    function OT(UU, RU) {
      HP = UU, sP = RU, null === HP && null === sP && Dt.b.setGame(void 0)
    }

    function Uq(UU) {
      OT(UU, sP)
    }

    function Rq(UU) {
      const RU = yE;
      return null !== VE && !vT && null !== RU && !RU.isStopped && (!!VE(VU.e, 0, (0, VU.y)(UU)) && (YP = !0, 0 === UU || oP || pK(RU, !1, "all"), !0))
    }

    function gq() {
      var UU, RU;
      arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (0, fg.d)();
      const gU = null !== (UU = null === (RU = iP) || void 0 === RU ? void 0 : RU.overflow) && void 0 !== UU ? UU : null;
      iP = null, null !== gU && (0, Ig.reportEventOverflow)(gU, zE)
    }

    function tq() {
      null !== HP || null !== sP ? NT() : xq()
    }

    function pq(UU, RU) {
      console.warn(`${GE} the event buffer refused records in ${RU} frames (categories ${UU})`), vT || (null !== iP ? Eq(iP, UU, RU) : null !== sP && function(UU, RU, gU) {
        var tU;
        const pU = function(UU, RU) {
          return null === UU ? "drop" : UU.activated ? "keep" : 0 !== (RU & sR.p.NetSession) ? "fail" : "drop"
        }((null === (tU = lP) || void 0 === tU ? void 0 : tU.join) === UU ? lP : null, RU);
        "keep" === pU ? NP = {
          mask: RU,
          frames: gU
        } : "fail" === pU && (0, fR.j)(UU, new Error("the join's net session was lost to an event overflow"))
      }(sP, UU, RU))
    }

    function Eq(UU, RU, gU) {
      const tU = UU.overflow ??= {
        frames: 0,
        acks: 0,
        mask: 0,
        outcome: null
      };
      tU.frames += gU, tU.acks++, tU.mask |= RU;
      const pU = function(UU, RU, gU) {
        if (0 === (UU & sR.p.NetSession)) return "none";
        const tU = null !== RU.rejoinedAt && gU - RU.rejoinedAt < et;
        return null === RU.rejoin || tU ? "fail" : "rejoin"
      }(RU, UU, performance.now());
      "none" !== pU && queueMicrotask((() => {
        if (iP !== UU) return;
        const RU = "rejoin" === pU && performance.now() - OP >= BU.d;
        tU.outcome = RU ? "rejoined" : "failed", Gq(function(UU, RU) {
          return {
            code: 0,
            name: "eventOverflow",
            reason: "Your game fell behind the server.",
            canReconnect: UU,
            automaticallyReconnect: RU,
            requiresRefresh: !1
          }
        }(null !== UU.rejoin, RU), UU.rejoin, RU), NT(), RU && (LP = performance.now())
      }))
    }

    function Pq(UU) {
      BT = UU, VT && Tq(VT, UU)
    }

    function Tq(UU, RU) {
      UU.style.visibility = RU ? "visible" : "hidden"
    }

    function qq(UU) {
      var RU;
      const gU = UU.roomName,
        tU = null !== (RU = UU.joinOptions.lobbyName) && void 0 !== RU ? RU : null;
      return () => {
        AT(gU, tU)
      }
    }

    function Kq() {
      return gU.e(342).then((() => gU(42637))).then((UU => {
        let {
          invalidateGuestTrafficCode: RU
        } = UU;
        return RU()
      })).catch((UU => {
        console.warn(`${GE} the cached traffic code could not be dropped`, UU)
      }))
    }

    function cq(UU, RU, gU) {
      var pU, EU;
      let PU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (vT) return;
      if ((null === (pU = iP) || void 0 === pU ? void 0 : pU.conn) !== UU) return void(null !== sP && pT.set(UU, {
        code: RU,
        reason: gU
      }));
      const {
        rejoin: TU,
        game: qU,
        joinedAt: KU
      } = iP;
      gq(), oq();
      const cU = (0, BU.i)(RU, (0, ft.e)(UU));
      if (console.info(`${GE} the game's connection closed with code ${RU} (${null!==(EU=cU.name)&&void 0!==EU?EU:"unrecognised"})`), RU === tU.d.gameOrPluginKick.code || PU || (0, Ig.reportDisconnect)(cU, zE, {
          closeReason: gU,
          sinceJoinedMs: performance.now() - KU,
          game: qU
        }), cU.requiresRefresh) {
        const UU = "outdatedVersion" === cU.name,
          gU = new Error(`the game's connection closed with code ${RU}`),
          tU = () => null === iP && null === sP;
        return void nK({
          site: Ig.JOIN_SITE,
          error: gU,
          outdated: UU
        }, (() => {
          tU() && Gq(cU, null, !1)
        }), tU)
      }
      const GU = cU.canReconnect ? TU : null,
        jU = null !== GU && cU.automaticallyReconnect && performance.now() - OP >= BU.d;
      Gq(cU, GU, jU)
    }

    function Gq(UU, RU, gU) {
      var tU;
      let pU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        reasonKey: null,
        canPlayAgain: !1
      };
      if (rT) return;
      Dt.b.unwantedLeave(gU && null !== RU && 0 === RT.size), null === (tU = UT) || void 0 === tU || tU.abort();
      const EU = new AbortController;
      UT = EU;
      const PU = null === RU ? null : () => {
        EU.signal.aborted || (EU.abort(), RU())
      };
      if (gU && null !== PU) {
        OP = performance.now();
        const UU = setTimeout(PU, BU.b);
        EU.signal.addEventListener("abort", (() => {
          clearTimeout(UU)
        }))
      }
      const TU = {
        code: UU.code,
        name: UU.name,
        reason: UU.reason,
        reasonKey: pU.reasonKey,
        reconnect: PU,
        reconnecting: gU,
        requiresRefresh: UU.requiresRefresh,
        canPlayAgain: pU.canPlayAgain
      };
      if (RT.size > 0)
        for (const KU of [...RT]) try {
          KU(TU)
        } catch (qU) {
          console.error(`${GE} an unwanted-leave listener threw`, qU)
        } else Ct((0, Gt.f)(UU, null !== PU, gU), EU.signal).then((RU => {
          RU && (null !== PU ? PU() : UU.requiresRefresh && (0, FU.j)())
        }))
    }
    const jq = {
      attachSocket: UU => fq(UU),
      onConnection: UU => (ET.add(UU), () => {
        ET.delete(UU)
      }),
      sendRaw: (UU, RU) => {
        const gU = UP;
        return null !== gU && gU.conn === UU && uK(gU, RU)
      },
      leaveRoom: Rq,
      closeSocket: UU => {
        var RU;
        (null === (RU = UP) || void 0 === RU ? void 0 : RU.conn) === UU && xq()
      },
      flushNet: mq
    };

    function uq(UU) {
      var RU;
      let {
        aux: gU,
        payload: tU
      } = UU;
      null === (RU = yE) || void 0 === RU || RU.queueOptions(gU, tU)
    }

    function Cq(UU, RU) {
      uq(function(UU, RU) {
        return Tp = UU ? {
          preventMovement: RU
        } : null, UU ? qp(RU) : {
          aux: SR.ac.AdEnd,
          payload: Pp
        }
      }(UU, RU))
    }

    function hq(UU) {
      var RU;
      XP = UU, null === (RU = yE) || void 0 === RU || RU.setUiPrefs(UU)
    }

    function Qq(UU, RU) {
      AE.setMaster(UU, RU)
    }

    function eq(UU) {
      var RU;
      vP = UU, null === (RU = yE) || void 0 === RU || RU.setEnvPrefs(UU)
    }

    function Wq(UU) {
      var RU;
      dP = UU, null === (RU = yE) || void 0 === RU || RU.setLookPrefs(UU)
    }

    function fq(UU) {
      var RU;
      let gU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new URL(UU.url).origin,
        tU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (UU.readyState === WebSocket.CLOSING || UU.readyState === WebSocket.CLOSED) return console.warn(`${GE} a closing or closed socket can't be attached`), null;
      const pU = yE;
      if (!pU || pU.isStopped) return console.warn(`${GE} no core is running to attach a socket to`), UU.close(), null;
      if (null === (0, IU.i)()) return console.warn(`${GE} the game has not started to attach a socket to`), UU.close(), null;
      if (wP > SR.w) return console.warn(`${GE} this core has attached all the sockets it can; reload to play on`), UU.close(), null;
      if (YP && !oP && (pK(pU, !1, "all"), pU.isStopped || vT)) return UU.close(), null;
      xq();
      const EU = wP++;
      if (!Vq(pU, "open", EU, tU ? SR.Zb.Resume : 0)) return UU.close(), null;
      tU || CR.b.reset(), lP = null === sP ? null : {
        join: sP,
        conn: EU,
        activated: !1
      }, UU.binaryType = "arraybuffer";
      const PU = new Gg.e((() => {
          ! function(UU, RU) {
            if (UP !== RU || UU.isStopped || null === wq(RU, JE)) return;
            RU.detach(), UP = null, Jq(UU, RU, JE, "", !0), RU.ws.close()
          }(pU, TU)
        })),
        TU = {
          ws: UU,
          conn: EU,
          pending: [],
          pendingBytes: 0,
          left: !1,
          resume: tU,
          token: null,
          detach: () => {
            PU.dispose(), UU.removeEventListener("message", qU), UU.removeEventListener("open", KU), UU.removeEventListener("close", cU)
          }
        },
        qU = UU => {
          if (UU.data instanceof ArrayBuffer) {
            var RU;
            const gU = new Uint8Array(UU.data);
            PU.heard(), TU.token = null !== (RU = (0, jg.c)(gU)) && void 0 !== RU ? RU : TU.token,
              function(UU, RU, gU) {
                mK(UU, (() => {
                  UU.rings.net.writeFrame(RU, gU) || UU.crash(Ug.s, `a socket frame of ${gU.byteLength} bytes did not fit the net-in ring`)
                }));
                const tU = UU.rings.net.cursor >= mE;
                (tU || UU.netWrittenSinceFrame >= xE || document.hidden && performance.now() - nP >= aE) && pK(UU, !1, "budget")
              }(pU, EU, gU)
          }
        },
        KU = () => {
          tU || (0, BR.m)("wasm_socket_open", performance.now());
          for (const RU of TU.pending.splice(0)) UU.send(RU);
          TU.pendingBytes = 0
        },
        cU = UU => {
          if (UP === TU && pU.rings.net.cursor > 0 && pK(pU, !1, "all"), UP === TU) {
            if (TU.detach(), UP = null, Jq(pU, TU, UU.code, UU.reason) || Iq(pU, TU)) return;
            Vq(pU, "close", EU), nq(EU, TU.left), cq(EU, UU.code, UU.reason)
          }
        };
      return UU.addEventListener("message", qU), UU.addEventListener("open", KU), UU.addEventListener("close", cU), UP = TU, null === (RU = (0, IU.i)()) || void 0 === RU || RU.socketAttached(EU), (0, jU.m)({
        websocketUrl: gU
      }), EU
    }

    function xq() {
      const UU = UP;
      if (!UU) return;
      const RU = yE,
        gU = UU.resume;
      gU && (mq(), UP !== UU) || (UP = null, UU.detach(), UU.ws.close(), null !== RU && (Iq(RU, UU) || gU && Jq(RU, UU, wE)) || (null !== RU && Vq(RU, "close", UU.conn), nq(UU.conn, UU.left)))
    }

    function mq() {
      const UU = yE;
      null !== UU && !UU.isStopped && !vT && !oP && UU.rings.net.cursor > 0 && pK(UU, !1, "all")
    }

    function Iq(UU, RU) {
      var gU;
      if (!RU.resume) return !1;
      const tU = AP;
      return null !== tU && null !== RU.token && "" !== RU.token && (tU.pendingHold = {
        conn: RU.conn,
        token: `${tU.roomId}:${RU.token}`
      }), Vq(UU, "close", RU.conn), null === (gU = (0, IU.i)()) || void 0 === gU || gU.socketDetached(RU.conn), !0
    }

    function Jq(UU, RU, gU) {
      let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
        pU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      const EU = wq(RU, gU);
      if (null === EU) return !1;
      const {
        WT: PU,
        token: TU,
        game: qU,
        joinedAt: KU
      } = EU;
      if (!Vq(UU, "close", RU.conn, SR.B.Held)) return !0;
      console.warn(`${GE} the game's connection ${pU?"went silent":`dropped with code ${gU}`}, holding it`);
      const cU = {
        closeReason: tU,
        sinceJoinedMs: performance.now() - KU,
        game: qU
      };
      return (0, Ig.reportDisconnect)((0, BU.i)(gU), zE, cU, pU ? "silent" : void 0), PU.heldConn = RU.conn, PU.dropCode = gU, PU.pendingHold = {
        conn: RU.conn,
        token: `${PU.roomId}:${TU}`
      }, oP || pK(UU, !1, "all"), !0
    }

    function wq(UU, RU) {
      const gU = AP,
        pU = iP,
        EU = UU.token;
      return null === gU || null === pU || vT || UU.left || pU.conn !== UU.conn || null === EU || "" === EU ? null : (0, tU.g)(RU) && gU.resume.canHoldSeat() ? {
        WT: gU,
        token: EU,
        game: pU.game,
        joinedAt: pU.joinedAt
      } : null
    }

    function nq(UU, RU) {
      var gU;
      null === (gU = (0, IU.i)()) || void 0 === gU || gU.closeGame(UU), (0, Ep.d)().close(UU), RU || (0, jU.m)({
        websocketUrl: null
      })
    }

    function bq() {
      const UU = DP;
      if (null === UU) return;
      const RU = (0, IU.i)();
      vT || null === RU || RU.HJ(UU) ? DP = null : performance.now() - BP.pause >= ZE && (BP.pause = performance.now(), console.warn(`${GE} the cmd ring had no room for SetPaused(${UU}): written before the next frame`))
    }

    function oq() {
      const UU = AP;
      AP = null, null === UU || void 0 === UU || UU.resume.dispose()
    }

    function Zq(UU, RU) {
      var gU, tU;
      const {
        heldConn: pU
      } = UU, EU = UU.resume.resumingConn;
      UU.heldConn = 0, UU.pendingHold = null, AP === UU && (AP = null), "left" === RU ? UU.resume.leave() : UU.resume.dispose(), 0 === MP || (null === (gU = UP) || void 0 === gU ? void 0 : gU.conn) !== MP || "left" === RU && (null === (tU = HP) || void 0 === tU ? void 0 : tU.conn) === MP || Bq(MP), "gaveUp" === RU && 0 !== EU && Bq(EU), 0 !== pU && "refused" !== RU && (console.info(`${GE} the game held through its drop ${"left"===RU?"was left":"is given up"}`), null === yE || yE.isStopped || Vq(yE, "close", pU), nq(pU, !1))
    }

    function aq(UU, RU) {
      const gU = RU.indexOf(":");
      return {
        roomId: gU < 0 ? UU.roomId : RU.slice(0, gU),
        roomToken: RU.slice(gU + 1)
      }
    }

    function Yq(UU) {
      var RU;
      zP = UU, UU.conn === MP && (MP = 0);
      const gU = AP;
      null !== gU && (null === (RU = iP) || void 0 === RU ? void 0 : RU.conn) === UU.conn && gU.resume.onInitialInfo(UU)
    }

    function Bq(UU) {
      var RU;
      const gU = UP;
      (null === gU || void 0 === gU ? void 0 : gU.conn) === UU && (gU.left = !0, null === (RU = (0, IU.i)()) || void 0 === RU || RU.socketLeft(), (0, jU.m)({
        websocketUrl: null
      }), Rq(UU) ? setTimeout((() => {
        UP === gU && xq()
      }), VU.d) : xq())
    }

    function Vq(UU, RU, gU) {
      let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        pU = !1;
      return mK(UU, (() => {
        const {
          net: EU
        } = UU.rings;
        pU = "open" === RU ? EU.writeOpen(gU, tU) : EU.writeClose(gU, tU), pU || UU.crash(Ug.s, `a socket ${RU} did not fit the net-in ring`)
      })), pU
    }

    function rq(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if (Xq()) {
        const tU = "browser" === UU && (0, pp.V)() ? "blockedAfterLoss" : "unsupported";
        return (0, Ig.reportUnsupportedFallback)(UU, tU, RU, gU), void vq(`the wasm client can't run here (${RU}; ${tU})`, tU)
      }(0, Ig.showUnsupported)(UU, "unsupported", RU, gU)
    }

    function Xq() {
      return YT && "wasm" !== (0, GR.h)(window.location.search)
    }

    function vq(UU, RU) {
      console.warn(`${GE} ${UU}: reloading on the JS client`), null !== RU && (0, GR.s)(RU), (0, GR.r)(null === RU ? "reloadOntoJs" : "decline");
      const gU = () => {
        (0, FU.g)(GR.w)
      };
      (0, Ig.flushCrashReports)(FU.b).then(gU, gU)
    }

    function dq(UU, RU, gU, tU) {
      return KT(UU, RU, gU, tU)
    }

    function Hq() {
      null === jT || null === yE || yE.isStopped || vT || null !== hP || null === VE || (hP = jT(VE, kq, Fq().follow))
    }

    function Sq() {
      var UU, RU, gU;
      return null !== (UU = null === (RU = FE) || void 0 === RU || null === (gU = RU.textures) || void 0 === gU ? void 0 : gU.files()) && void 0 !== UU ? UU : null
    }

    function sq(UU) {
      gU.e(260).then((() => gU(40121))).then((RU => {
        let {
          setIconFileOverrides: gU
        } = RU;
        gU(UU)
      }), (UU => {
        console.warn(`${GE} the item icons couldn't take the texture pack's files`, UU)
      }))
    }

    function yq(UU) {
      Fq().follow((RU => {
        null !== RU && Promise.all([Promise.all([gU.e(193), gU.e(45)]).then((() => gU(42663))), (0, pp.P)()]).then((UU => {
          let [{
            followPagePackFiles: gU
          }, tU] = UU;
          const pU = null === tU || (0, OR.k)(tU) ? "webgl" : tU.backend;
          gU(RU, Mt.d, pU, (UU => {
            Mt.d.setPageFiles(UU)
          }), kq)
        }), (RU => {
          console.warn(`${GE} the texture pack's files didn't load: the previews draw the shipped ones until the next opens`, RU), UU()
        }))
      }))
    }

    function kq(UU, RU) {
      console.warn(`${GE} ${UU}`, RU)
    }

    function Fq() {
      return kE ??= new mp({
        load: UU => Promise.all([gU.e(193), gU.e(51)]).then((() => gU(42668))).then((RU => {
          let {
            startPageTexturePackFeed: gU
          } = RU;
          return gU(kq, UU)
        })),
        store: mg.g,
        ku: UU => {
          LE.then((() => {
            (0, Ig.reportTexturePackFeedLoadFailure)(UU, zE)
          }))
        }
      }), kE
    }
    const iq = UU => Fq().follow(UU);

    function Aq() {
      return Fq().loaded()
    }
    const zq = function(UU, RU, gU) {
        let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now(),
          pU = 0;
        return async function(EU, PU) {
          let TU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
          const qU = ++pU,
            KU = tU() + RU,
            cU = await
          function(UU, RU) {
            let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
            return new Promise((tU => {
              const pU = setTimeout((() => {
                tU(null), UU.then((UU => {
                  null !== UU && (UU.joinedWithout(), gU(UU))
                }))
              }), RU);
              UU.then((UU => {
                clearTimeout(pU), tU(UU)
              }))
            }))
          }(UU(EU), RU, (UU => {
            qU === pU && TU() && PU(UU, tU() + RU).catch((UU => {
              gU("the texture pack step after the join failed", UU)
            }))
          }));
          return null === cU ? null : PU(cU, KU)
        }
      }((UU => (0, gR.m)(UU) ? Fq().request() : Fq().forJoin()), xp.d, kq),
      Mq = function(UU, RU) {
        let gU = !1;
        return {
          setGamePackConfirm: UU => {
            gU = null !== UU, RU(UU)
          },
          packStep: (RU, tU, pU) => UU(RU, tU, (() => gU && pU()))
        }
      }(zq, (UU => {
        Fq().setGamePackConfirm(UU)
      }));

    function Dq(UU) {
      Mq.setGamePackConfirm(UU)
    }

    function Lq() {
      if (vT || null !== eT || null === uT || null === QT) return;
      const {
        backend: UU,
        canvas: RU,
        fallbackReason: gU,
        adapterVendor: tU
      } = QT, pU = uT;
      uT = null;
      try {
        eT = pU({
          backend: UU,
          canvas: RU,
          fallbackReason: gU,
          adapterVendor: tU,
          joinedGame: () => vT ? null : HP,
          inGame: lq,
          shaderPackReach: () => {
            var UU, RU;
            return null !== (UU = null === (RU = fP) || void 0 === RU ? void 0 : RU.reachInJoinedGame()) && void 0 !== UU ? UU : null
          },
          msaa: () => hT > 1,
          writeCmd: (UU, RU, gU) => null !== VE && VE(UU, RU, gU),
          takeFailedMeshJobs: () => {
            var UU, RU;
            return null !== (UU = null === (RU = pP) || void 0 === RU ? void 0 : RU.takeFailedMeshJobs()) && void 0 !== UU ? UU : 0
          }
        })
      } catch (EU) {
        console.error(`${GE} the frame telemetry didn't start`, EU)
      }
    }

    function Nq(UU, RU) {
      try {
        var gU, tU, pU;
        const EU = PT && null !== (gU = null === (tU = yE) || void 0 === tU || null === (pU = tU.lastHeader) || void 0 === pU ? void 0 : pU.renderPending) && void 0 !== gU ? gU : 0;
        (0, Ag.f)(RU, UU, lq() && !(null !== Tp), EU)
      } catch (EU) {
        (0, Ag.s)(), console.error(`${GE} the quality steps stopped`, EU)
      }
    }

    function lq() {
      return null !== HP && oT === HP && !vT
    }

    function Oq(UU) {
      const RU = eT;
      eT = null;
      try {
        null === RU || void 0 === RU || RU.stop()
      } catch {}
      console.error(`${GE} the frame telemetry threw: it stops`, UU)
    }

    function UK(UU) {
      var RU, gU, tU, pU;
      if ((0, Ep.d)().fire(UU), "message" === UU.type) {
        if (ZP++, UU.aP === SR.Nc.ERROR && null !== sP) {
          var EU;
          const {
            text: RU,
            dropsCache: gU
          } = (0, BU.n)((new TextDecoder).decode(UU.payload));
          gT ||= gU, (null === (EU = lP) || void 0 === EU ? void 0 : EU.conn) === UU.conn && (tT = RU)
        } else if (UU.aP === sR.dc.ResumeComplete) {
          var PU;
          null === (PU = AP) || void 0 === PU || PU.resume.onResumeComplete(UU.conn)
        }
        return
      }
      UU.phase === SR.F.Left ? aP = UU.conn : UU.phase === SR.F.Activated && (null === (RU = lP) || void 0 === RU ? void 0 : RU.conn) === UU.conn ? lP.activated = !0 : UU.phase === SR.F.Resumed ? function(UU) {
        var RU, gU;
        MP = UU;
        const tU = AP;
        if (null === tU || 0 === tU.heldConn || (null === (RU = UP) || void 0 === RU ? void 0 : RU.conn) !== UU || !UP.resume || null === iP) return;
        console.info(`${GE} the game resumed on conn ${UU}, waiting for its InitialInfo`);
        const pU = tU.heldConn;
        tU.heldConn = 0, UP.resume = !1, iP.conn = UU, (null === (gU = kP) || void 0 === gU ? void 0 : gU.conn) === pU && (kP = {
          conn: UU,
          info: kP.info
        }), CR.b.apply({
          shopInfo: null,
          _shopVersion: tR.e
        })
      }(UU.conn) : UU.phase === SR.F.Held ? function(UU) {
        var RU;
        const gU = AP,
          tU = null !== (RU = null === gU || void 0 === gU ? void 0 : gU.pendingHold) && void 0 !== RU ? RU : null;
        if (null !== gU && null !== tU && tU.conn === UU) return gU.pendingHold = null, gU.heldConn = UU, MP = 0, console.warn(`${GE} the core holds the game, reconnecting`), void gU.resume.onDropped(tU.token);
        if (UU === MP) {
          MP = 0;
          const RU = yE;
          null === RU || RU.isStopped || (console.info(`${GE} the core held again a resumed game the shell ended before its InitialInfo: closing it again`), Vq(RU, "close", UU))
        }
      }(UU.conn) : UU.phase === SR.F.Closed && (null === (gU = AP) || void 0 === gU || null === (tU = gU.pendingHold) || void 0 === tU ? void 0 : tU.conn) === UU.conn && (AP.heldConn === UU.conn ? function(UU) {
        const RU = UU.heldConn,
          gU = UU.dropCode;
        Zq(UU, "refused"), console.info(`${GE} the core didn't hold the game through its drop: it hadn't started`), queueMicrotask((() => {
          nq(RU, !1), cq(RU, gU, "", !0)
        }))
      }(AP) : AP.pendingHold = null);
      const TU = Object.keys(SR.F).find((RU => SR.F[RU] === UU.phase)),
        qU = 0 === UU.code ? "" : ` (code ${UU.code})`;
      console.info(`${GE} conn ${UU.conn}: ${null!==TU&&void 0!==TU?TU:UU.phase}${qU}, ${ZP} raw messages so far`), (null === (pU = HP) || void 0 === pU ? void 0 : pU.conn) !== UU.conn || UU.phase !== SR.F.Left && UU.phase !== SR.F.Closed || Uq(null), yP !== UU.conn || UU.phase !== SR.F.Left && UU.phase !== SR.F.Closed || (yP = null, null === HP && null === sP && Dt.b.setGame(void 0));
      for (const cU of [...ET]) try {
        cU(UU.conn, UU.phase, UU.code)
      } catch (KU) {
        (0, yR.o)(KU, `${GE} a connection listener threw`)
      }
    }

    function RK() {
      (0, pp.o)(), queueMicrotask((() => {
        try {
          CK()
        } catch (UU) {
          console.warn(`${GE} stopping before the reload threw`, UU)
        }(0, Ig.flushCrashReports)(FU.b).then(FU.j, FU.j)
      }))
    }

    function gK() {
      const UU = yE;
      null === UU || UU.isStopped || null === UP || oP || !UU.hasPendingCommands() || pK(UU, !1, "budget")
    }

    function tK(UU) {
      var RU;
      const gU = HP;
      UU.persisted || null === gU || (null === (RU = UP) || void 0 === RU ? void 0 : RU.conn) !== gU.conn || UP.left || gU.leave()
    }

    function pK(UU, RU, tU) {
      let pU = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const EU = oP;
      oP = !0;
      try {
        return function(UU, RU, tU, pU) {
          var EU, PU, TU, qU;
          if (vT) return !1;
          if (mK(UU, PK), vT || UU.isStopped) return !1;
          GK() && IP("modelsIn");
          bq(), nP = performance.now(), aP = null, YP = !1, (0, mU.L)(), null === (EU = cP) || void 0 === EU || EU.beforeFrame(), Pt(nP, UU), (0, mU.F)(nP, TK), bP = !0;
          const KU = RU && cK();
          let cU;
          try {
            cU = UU.frame(nP, KU, tU)
          } finally {
            bP = !1
          }
          if (!cU) return !1;
          CT.observe(null !== (PU = null === (TU = UU.lastHeader) || void 0 === TU ? void 0 : TU.chunksCancelled) && void 0 !== PU ? PU : 0);
          const GU = UU.lastFrameKind,
            jU = (0, bR.d)(GU);
          (function(UU) {
            null !== dp && dp.afterFrame(performance.now(), UU)
          })(jU), null === (qU = WT) || void 0 === qU || qU.frame(UU, nP, GU), RU && (ZT = jU);
          jU && (0, JR.e)(nP);
          if (null !== eT) try {
            eT.frameRan(UU, nP, performance.now(), GU)
          } catch (CU) {
            Oq(CU)
          }
          "drawn" === GU && KK() && function() {
            for (const UU of [...gp]) UU()
          }();
          UU.forEachNetOut(jK);
          const uU = UP;
          null !== aP && (null === uU || void 0 === uU ? void 0 : uU.conn) === aP && uK(uU, VU.f);
          (function(UU) {
            var RU;
            if (mT) return;
            null === wT && cK() && (wT = performance.now());
            if (null === sP && null === HP) return;
            null === wT || nT || (nT = !0, (0, BR.m)("wasm_startup_loaded", wT));
            let gU = 0;
            null !== HP ? gU = -1 : !0 === (null === (RU = lP) || void 0 === RU ? void 0 : RU.activated) && (gU = ~sR.G.TerrainDrawn);
            const tU = UU.headerWord(sR.A.LoadSteps) & gU & ~JT;
            if (0 === tU) return;
            JT |= tU;
            const pU = performance.now();
            for (const [EU, PU] of Object.entries(qK)) 0 !== (tU & sR.G[EU]) && (0, BR.m)(PU, pU)
          })(UU), RU && function(UU) {
            var RU, tU, pU;
            if (null === HP || !cK()) return;
            null === bT || oT === HP && !bT.frame(nP, 0 !== (UU.headerWord(sR.A.LoadSteps) & sR.G.TerrainDrawn)) || (bT = null);
            const EU = UU.lastHeader,
              PU = !PT || 0 === (null === EU || void 0 === EU ? void 0 : EU.renderPending);
            !IT && PU && (IT = !0, performance.mark(fE));
            if (oT === HP) return;
            const TU = null !== (RU = null === EU || void 0 === EU ? void 0 : EU.firstView) && void 0 !== RU ? RU : SR._.NotYet;
            if (PT && TU === SR._.NotYet) return;
            if (mT && (!0 !== (null === (tU = (0, IU.i)()) || void 0 === tU ? void 0 : tU.isSessionLive) || !PU)) return;
            oT = HP;
            const qU = HP;
            if (setTimeout((() => {
                HP === qU && (0, BR.i)()
              }), 0), null === (pU = fP) || void 0 === pU || pU.playable(), function() {
                clearTimeout(OE), OE = setTimeout((() => {
                  lq() && wK((UU => {
                    let {
                      prefetchWorldgenWorker: RU
                    } = UU;
                    RU()
                  }))
                }), BE)
              }(), mT) return;
            mT = !0, performance.mark(WE), (0, ap.l)("render") && Promise.all([gU.e(74), gU.e(47)]).then((() => gU(4345))).then((UU => {
              let {
                renderDebugPlayable: RU
              } = UU;
              RU()
            }), (UU => {
              console.warn("The render debug topic didn't load", UU)
            }));
            const KU = Math.round(performance.now());
            if (PT && TU !== SR._.Drawn) {
              const UU = TU === SR._.HeldBackstop ? "held_draws" : "long";
              if (console.warn(`${GE} playable at ${KU} ms on the first view's ${UU} backstop: it wasn't drawn whole in time`), (0, BR.m)("wasm_view_backstop", KU, UU), "long" === UU) {
                var cU, GU;
                const UU = null !== (cU = null === (GU = iP) || void 0 === GU ? void 0 : GU.game) && void 0 !== cU ? cU : "";
                bT = new Jg.e((() => {
                  (0, Ig.reportFirstViewNoTerrain)(UU, zE)
                }))
              }
            } else console.info(`${GE} playable at ${KU} ms${PT?"":" (no renderer)"}`);
            setTimeout(GT, 0), (0, QR.f)().catch((UU => {
              console.error(`${GE} item sprites didn't load, so item particles show the missing texture`, UU)
            })), st.c.warm()
          }(UU);
          (0, Ug.M)(UU, {
            worldgen: gP,
            mesh: pP
          }),
          function(UU) {
            UU.forEachEvent(qt);
            for (const RU of Tt) try {
              (0, Rt.c)(RU)
            } catch (CU) {
              if ((0, yR.g)(CU)) {
                UU.crashOn(Ug.l, CU);
                break
              }
              console.error(`${tt} an input action listener threw`, CU)
            }
            Tt.length = 0
          }(UU), pU && (0, nR.c)();
          return !UU.isStopped
        }(UU, RU, "all" === tU || UU.rings.net.cursor >= mE || UU.netKeptFrames >= IE, pU)
      } finally {
        oP = EU
      }
    }

    function EK(UU) {
      console.error(`${GE} a frame-start listener threw`, UU)
    }

    function PK() {
      var UU, RU, gU, tU;
      null === (UU = jP) || void 0 === UU || UU.drain(VE, rE), null === (RU = QP) || void 0 === RU || RU.drain(VE), null === (gU = eP) || void 0 === gU || gU.drain(performance.now()), cT(VE), null === (tU = hP) || void 0 === tU || tU.drain()
    }

    function TK(UU) {
      console.error(`${GE} a before-frame listener threw`, UU)
    }
    const qK = {
      ChunkRequested: "wasm_chunk_requested",
      ChunkStored: "wasm_chunk_stored",
      MeshLanded: "wasm_mesh_landed",
      PlayerChunk: "wasm_player_chunk",
      TerrainDrawn: "wasm_terrain_drawn"
    };

    function KK() {
      return PT && cK()
    }

    function cK() {
      return WP && GK()
    }

    function GK() {
      return null === jP || jP.startupDone
    }

    function jK(UU, RU) {
      const gU = UP;
      (null === gU || void 0 === gU ? void 0 : gU.conn) === UU ? uK(gU, RU) : rP++
    }

    function uK(UU, RU) {
      const {
        ws: gU
      } = UU;
      return gU.readyState === WebSocket.OPEN ? (gU.send(RU), !0) : gU.readyState === WebSocket.CONNECTING && UU.pendingBytes + RU.byteLength <= oE ? (UU.pending.push(RU.slice()), UU.pendingBytes += RU.byteLength, !0) : (rP++, !1)
    }

    function CK() {
      var UU, RU, gU, tU, pU, EU, PU, TU, qU, KU, cU, GU, jU, uU, CU, hU, QU;
      vT = !0, aT.stop(), (0, Bp.e)(), dp = null, oq(), (0, mU.J)().unlockPointer(), (0, mU.G)(null), null === (UU = GP) || void 0 === UU || UU(), GP = null, null === (RU = (0, IU.q)()) || void 0 === RU || RU.followCursorAim(null), (0, nR.E)(), (0, IU.e)(), AE.stop(), null === (gU = fT) || void 0 === gU || gU(), fT = null, null === (tU = xT) || void 0 === tU || tU(), xT = null, null === (pU = eT) || void 0 === pU || pU.stop(), eT = null, (0, ng.s)(null), null === (EU = RP) || void 0 === EU || EU(), RP = null, null === (PU = gP) || void 0 === PU || PU.stop(), gP = null, null === (TU = pP) || void 0 === TU || TU.stop(), pP = null, null !== (qU = FE) && void 0 !== qU && null !== (KU = qU.textures) && void 0 !== KU && KU.assets && sq(null), null === (cU = FE) || void 0 === cU || cU.stop(), FE = null, iE = null;
      const eU = EP;
      EP = null, eU && (eU.stop(), xK(eU)), null === (GU = QP) || void 0 === GU || GU.dispose(), QP = null, null === (jU = eP) || void 0 === jU || jU.dispose(), eP = null, jP = null, null === (uU = CP) || void 0 === uU || uU(), CP = null, null === (CU = KP) || void 0 === CU || CU(), KP = null, null === (hU = cP) || void 0 === hU || hU.stop(), cP = null, NT(), Dt.b.release(), xq();
      const WU = hP;
      hP = null;
      try {
        null === WU || void 0 === WU || WU.dispose()
      } catch (fU) {
        console.warn(`${GE} the sky's images didn't release`, fU)
      }(0, yt.c)(null), null === (QU = SE) || void 0 === QU || QU.pagePreviews().endSession(null === (0, ER.q)())
    }

    function hK(UU, RU) {
      var gU, tU;
      const pU = null !== (gU = null === (tU = EP) || void 0 === tU ? void 0 : tU.details()) && void 0 !== gU ? gU : {},
        EU = UU.site === uE || UU.site === CE || UU.site === Ig.RENDER_RELOAD_SITE || UU.site === hE ? UU.error instanceof WebAssembly.RuntimeError || UU.error instanceof DR.d : !(0, OR.o)(UU.error) && (0, Ug.I)(UU);
      EU && UU.error instanceof Error && (0, ER.M)(UU.error);
      const PU = EU || UU.site === Ug.v ? (0, Ig.readTrap)(UU.error) : null,
        TU = null !== PU && (0, kR.h)(PU.kind, PU.refusedBytes) ? PU.refusedBytes : 0,
        qU = null === PP ? (0, dt.u)(function() {
          try {
            return (0, ER.u)().buffer.byteLength
          } catch {
            return 0
          }
        }(), TU, null) : PP.ceilingMayRefuse(TU),
        KU = TU > 0 && !qU && Xq();
      var cU;
      if (KU && ((0, GR.s)("oom"), (0, GR.r)("decline"), XT = !0), CK(), (0, pp.b)()) return console.warn(`${GE} the session stopped at ${UU.site} as the page reloads`, UU.error), void((0, OR.o)(UU.error) || (null === (cU = UU.header) || void 0 === cU ? void 0 : cU.lastError) === SR.L.CoreBusy || (0, Ig.reportStoppedCore)(UU, RU, PU, {
        memoryDetails: pU,
        declined: KU
      }));
      (0, Ig.showCrash)(UU, RU, PU, {
        memoryDetails: pU,
        declined: KU
      })
    }

    function QK(UU) {
      const {
        input: RU,
        net: gU,
        worker: tU
      } = UU.rings, pU = UU.optionsDropped, EU = RU.dropped + pU + gU.dropped + tU.dropped + rP;
      EU !== VP && function(UU, RU) {
        const gU = performance.now();
        return !(gU - BP[UU] < ZE) && (BP[UU] = gU, console.warn(`${GE} ${RU}`), !0)
      }("dropped", `${EU} records dropped so far (input ${RU.dropped}, options ${pU}, net ${gU.dropped}, worker ${tU.dropped}, net-out ${rP})`) && (VP = EU)
    }

    function eK() {
      var UU, RU;
      const gU = (0, Wg.b)();
      if (null === gU) return null;
      const tU = (0, xg.f)(gU);
      return {
        ...tU,
        horizontal: Math.min(tU.horizontal, null !== (UU = null === (RU = EP) || void 0 === RU ? void 0 : RU.shedDistanceInUse()) && void 0 !== UU ? UU : 1 / 0)
      }
    }

    function WK(UU) {
      var RU, gU;
      return {
        samples: PT ? hT : null,
        sunShadows: UU,
        renderDistance: null !== (RU = null === (gU = eK()) || void 0 === gU ? void 0 : gU.horizontal) && void 0 !== RU ? RU : null
      }
    }

    function fK() {
      var UU, RU, gU;
      const tU = eK();
      return {
        ...null === (UU = EP) || void 0 === UU ? void 0 : UU.pageKillSnapshot(),
        renderDistance: null !== (RU = null === tU || void 0 === tU ? void 0 : tU.horizontal) && void 0 !== RU ? RU : null,
        renderDistanceVertical: null !== (gU = null === tU || void 0 === tU ? void 0 : tU.vertical) && void 0 !== gU ? gU : null,
        chunkCap: TP,
        budgetBasis: qP,
        renderBackend: (0, pp.H)()
      }
    }

    function xK(UU) {
      console.info(`${GE} wasm memory at the session's end`, UU.details())
    }

    function mK(UU, RU) {
      if (!UU.isStopped) try {
        RU()
      } catch (gU) {
        UU.crash(Ug.w, gU)
      }
    }

    function IK() {
      return tP ??= gU.e(68).then((() => gU(42671))).catch((UU => {
        throw tP = null, UU
      })), tP
    }
    async function JK() {
      const {
        createWorldgenWorker: UU,
        worldgenWorkerReady: RU
      } = await IK();
      return await RU(), UU
    }

    function wK(UU) {
      var RU;
      null === (RU = tP) || void 0 === RU || RU.then(UU, (() => {}))
    }

    function nK(UU, RU, gU) {
      return async function(UU, RU, gU) {
        let {
          stop: tU,
          stillWanted: pU
        } = gU;
        const EU = await (0, Wt.l)(UU, {
          stillWanted: pU,
          beforeReload: async () => {
            tU(), await (0, Ig.flushCrashReports)(FU.b)
          },
          reload: FU.j
        });
        return EU || RU(), EU
      }(UU, RU, {
        stop: CK,
        stillWanted: gU
      })
    }
    let bK = !1;

    function oK() {
      return bK = !0, async function(UU, RU, tU) {
        const {
          gamePackSource: pU
        } = await gU.e(343).then((() => gU(42641)));
        await Mq.packStep(UU, ((gU, tU) => gU.packForGame(UU, pU(RU), tU)), tU)
      }(...arguments)
    }

    function ZK(UU) {
      ! function(UU, RU) {
        UU((UU => {
          null === UU || void 0 === UU || UU.subscribe((UU => {
            let {
              pack: gU,
              gameSource: tU
            } = UU;
            RU(null === tU || null === gU ? null : {
              pack: gU,
              source: "" === tU ? null : tU
            })
          }))
        }))
      }(iq, UU)
    }
    let aK = !1,
      YK = null,
      BK = !1,
      VK = !1;

    function rK() {
      var UU;
      aK || (aK = !0, kT("play", yU), (0, jU.l)(new zK), TU.gameBridge.attach(YU), sK().catch((() => {})), (0, IU.r)((UU => {
        UR(UU.setTextHost)
      })), UU = dK, RT.add(UU), function(UU) {
        for (const RU of xP) UU(RU);
        mP.add(UU)
      }((UU => {
        vK(XK[UU])
      })))
    }
    const XK = {
      booted: EU.l.INITIALISE_NOA,
      texturesIn: EU.l.REGISTRATION,
      modelsIn: EU.l.SETUP_LIFEFORMS
    };

    function vK(UU) {
      qU.p.yh("matchmakeAndPlayStepCompleted", {
        step: UU,
        totalSubSteps: 1
      })
    }

    function dK(UU) {
      if (!BK) return;
      const {
        gameNameWithVariation: RU,
        lobbyName: gU
      } = (0, jU.d)();
      if (UU.code === tU.d.serverUpdating.code) return (new zK).leaveLive(), void SK(RU, gU);
      qU.p.yh("unwantedLeftGame", {
        reason: HK(UU),
        requiresRefresh: UU.requiresRefresh,
        canReconnect: null !== UU.reconnect,
        automaticallyReconnect: UU.reconnecting,
        canPlayAgain: UU.canPlayAgain,
        gameNameWithVariation: RU,
        lobbyName: gU
      }), (new zK).leaveLive()
    }

    function HK(UU) {
      return null !== UU.reasonKey ? {
        translationKey: UU.reasonKey
      } : "gameOrPluginKick" === UU.name ? UU.reason : `You have disconnected from the server.\n${UU.reason}`
    }

    function SK(UU, RU) {
      var tU;
      tU = (0, KU.z)(UU, RU), Promise.resolve().then((() => gU(1475))).then((UU => {
        let {
          navigatePreserveSearch: RU
        } = UU;
        RU(tU)
      })).catch((UU => {
        console.warn("[bloxd-wasm-client] the page's router didn't navigate: loading the page instead", UU), (0, FU.c)(tU)
      }))
    }

    function sK() {
      return YK ??= Promise.all([gU.e(69), gU.e(72), gU.e(71), gU.e(70), gU.e(83), gU.e(259), gU.e(199), gU.e(216), gU.e(237), gU.e(212), gU.e(46)]).then((() => gU(40061))).then((UU => {
        try {
          UU.attachPlayGameSources()
        } catch (RU) {
          throw console.error("[bloxd-wasm-client] the play sources did not attach", RU),
            function(UU) {
              LE.then((RU => {
                null === RU || RU.isStopped || vT ? console.warn(`${GE} the play sources threw as they attached, after the client stopped`, UU) : hK({
                  site: hE,
                  error: UU,
                  header: null
                }, zE)
              }))
            }(RU), RU
        }
      }), (UU => {
        throw YK = null, new IU.d(UU)
      })), YK
    }
    async function yK(UU, RU) {
      rK(), bK = !0, BK = !0;
      let gU = {
          place: UU.place,
          matchedAt: UU.matchedAt
        },
        PU = UU.place.gameNameWithVariation;
      const TU = (0, GU.f)();
      let qU = null;
      const KU = await zT({
        matchmake: async () => {
          let RU = gU;
          if (gU = null, null === RU) {
            const gU = await UU.rematch();
            if (gU.isError()) throw qU = gU.asError().forward(), new Error(gU.asError().message);
            RU = {
              place: gU.getValue(),
              matchedAt: performance.now()
            }
          }
          PU = RU.place.gameNameWithVariation;
          return {
            target: await (0, XU.h)(UU.userContext, RU.place, Aq(), TU),
            matchedAt: RU.matchedAt,
            freshMs: XU.e
          }
        },
        pageReady: sK,
        onFailure: (UU, RU) => {
          null === qU && function(UU, RU) {
            (0, Ig.reportPageJoinFailure)(UU, zE, RU)
          }(UU, {
            sinceJoinStartMs: RU,
            game: PU
          })
        },
        rejoin: () => () => {},
        invalidateTrafficCode: () => UU.userContext.invalidateTrafficCode(),
        signal: RU
      });
      switch (KU.kind) {
        case "joined":
          if (TU) {
            const {
              game: UU
            } = KU;
            (0, GU.p)((() => {
              UU.endJoinAd()
            }))
          }
          return VK || (VK = !0, (0, hU.e)()), BK ? (vK(EU.l.CONNECT_TO_GAME_SERVER), vK(EU.l.SHADER_PACK), function() {
            var UU, RU;
            return null !== (UU = null === (RU = fP) || void 0 === RU ? void 0 : RU.runsInJoinedGame()) && void 0 !== UU && UU
          }() && (0, CU.e)(UU.userContext, PU).catch((UU => {
            console.error("Failed to report the shader pack session", UU)
          })), function() {
            const UU = function() {
              var UU, RU;
              return null !== (UU = null === (RU = fP) || void 0 === RU ? void 0 : RU.couldntRunInJoinedGame()) && void 0 !== UU ? UU : null
            }();
            null !== UU && (0, CU.d)(UU)
          }(), pU.c.value(void 0)) : AK("The server ended the game as it joined");
        case "failed":
          if (!KU.reloading) {
            if (null !== qU) return qU;
            if ((KU.error instanceof VU.j || KU.error instanceof VU.b) && KU.error.code === tU.d.serverUpdating.code) {
              if (RU.aborted) return AK("Left the game while it loaded");
              const {
                gameNameWithVariation: UU,
                lobbyName: gU
              } = (0, jU.d)();
              return SK(UU, gU), AK("The server is updating")
            }
            return KU.error instanceof kU.c ? pU.c.errorWithCode(KU.error.messageKey, EU.l.SHADER_PACK, {
              severity: "medium"
            }) : pU.c.errorWithCode(function(UU) {
              if (UU instanceof VU.w || UU instanceof fU.e) return UU.message;
              if (kK(UU)) return (0, BU.j)(UU.code, UU.serverText);
              return BU.g
            }(KU.error), EU.l.CONNECT_TO_GAME_SERVER, {
              error: FK(KU.error) ? KU.error : void 0,
              severity: iK(KU.error),
              gameServerUnreachable: (0, rU.b)(KU.error),
              rematch: (0, eU.e)(KU.error),
              gameRefused: (0, WU.b)(KU.error)
            })
          }
          return AK("Reloading into the new build");
        case "stopped":
          return AK("The game client stopped, and shows why");
        case "cg":
          return AK("Left the game while it loaded")
      }
    }

    function kK(UU) {
      return UU instanceof VU.j || UU instanceof VU.b && "attach" !== UU.stage
    }

    function FK(UU) {
      return !(UU instanceof VU.w) && !kK(UU) && void 0 === (0, rU.b)(UU)
    }

    function iK(UU) {
      return kK(UU) ? UU instanceof VU.b && (0, BU.i)(UU.code).requiresRefresh ? "medium" : "low" : FK(UU) || UU instanceof VU.w ? "medium" : "low"
    }

    function AK(UU) {
      return pU.c.errorWithCode(UU, EU.l.CONNECT_TO_GAME_SERVER, {
        severity: "low",
        cg: !0
      })
    }
    class zK {
      leave(UU) {
        if ((0, xU.d)()) {
          var RU, gU;
          if ((0, PU.b)()) return;
          (0, uU.e)(!0 === (null === (RU = (0, xU.i)()) || void 0 === RU || null === (gU = RU.currentViewer) || void 0 === gU ? void 0 : gU.unsavedChanges), UU)
        } else this.leaveLive()
      }
      leaveLive() {
        var UU;
        bK && (null === (UU = Aq()) || void 0 === UU || UU.endGamePack());
        if (!BK) return;
        BK = !1, (0, QU.d)();
        try {
          var RU;
          null === (RU = (0, IU.q)()) || void 0 === RU || RU.clearWasmCameraScreen()
        } catch (tU) {
          console.error("[bloxd-wasm-client] the camera screen didn't clear", tU)
        }
        const {
          gameNameWithVariation: gU
        } = (0, jU.d)();
        try {
          tq()
        } finally {
          (0, jU.m)({
            websocketUrl: null
          }), qU.p.yh("leaveGame", {
            gameNameWithVariation: gU
          }), (0, cU.S)()
        }
      }
      isReplay() {
        return (0, xU.d)()
      }
    }
  },
  40398: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => pU,
      e: () => tU,
      g: () => TU,
      k: () => PU
    });
    const tU = 12e4,
      pU = 3e4,
      EU = {
        hidden: () => "undefined" !== typeof document && document.hidden,
        listen: UU => "undefined" === typeof document ? () => {} : (document.addEventListener("visibilitychange", UU), () => {
          document.removeEventListener("visibilitychange", UU)
        })
      };

    function PU(UU) {
      return `it sent no start within ${Math.round(UU)} ms`
    }
    class TU {
      constructor(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : EU;
        this.timeoutMs = UU, this.onTimeout = RU, this.now = gU, this.visibility = tU, this.timer = null, this.counted = 0, this.step = null, this.unlisten = void 0, this.unlisten = tU.listen((() => {
          this.onVisibility()
        })), tU.hidden() || this.next()
      }
      cancel() {
        this.pause(), this.unlisten()
      }
      onVisibility() {
        this.visibility.hidden() ? (this.counted += this.credit(), this.pause()) : null === this.timer && this.next()
      }
      credit() {
        const UU = this.step;
        return null === UU ? 0 : Math.min(this.now() - UU.at, UU.ms)
      }
      pause() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), this.step = null
      }
      next() {
        const UU = this.timeoutMs - this.counted;
        if (UU <= 0) return void this.arm(1e3, (() => {
          this.cancel(), this.onTimeout(this.counted)
        }));
        const RU = Math.min(UU, 5e3);
        this.step = {
          at: this.now(),
          ms: RU
        }, this.arm(RU, (() => {
          this.counted += this.credit(), this.step = null, this.next()
        }))
      }
      arm(UU, RU) {
        this.timer = setTimeout((() => {
          this.timer = null, RU()
        }), UU)
      }
    }
  },
  40282: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => tU
    });
    const tU = {
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
  38287: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => EU
    });
    var tU = gU(3372);
    const pU = ["none", "idle", "now"];

    function EU() {
      const UU = () => (0, tU.A)();
      return {
        memoryBytes: () => (0, tU.u)().buffer.byteLength,
        reserveUpFront: RU => UU().gG(RU),
        reserveAhead: RU => UU().UG(RU),
        setCeiling: RU => {
          UU().tG(RU)
        },
        lowWater: () => pU[UU().Oc()] ?? "none",
        stats: () => function(UU) {
          const RU = new Uint32Array((0, tU.u)().buffer, UU, 17),
            gU = UU => RU[UU] ?? 0,
            pU = UU => ({
              upFront: gU(UU),
              ahead: gU(UU + 1),
              onDemandInFrame: gU(UU + 2),
              onDemand: gU(UU + 3)
            });
          return {
            memoryBytes: gU(0),
            initialBytes: gU(1),
            liveBytes: gU(2),
            peakLiveBytes: gU(3),
            headroomBytes: gU(4),
            unusedBytes: gU(5),
            ceilingBytes: gU(6),
            reservesRefused: gU(7),
            grows: pU(8),
            grownBytes: pU(12),
            allocationsRefused: gU(16)
          }
        }(UU().pG()),
        takeBallast: () => UU().EG(),
        takePressure: () => UU().PG()
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);