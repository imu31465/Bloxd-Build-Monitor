export const id = 160;
export const ids = [160];
export const modules = {
  39487: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => LG,
      g: () => yG
    });
    var wG = ZG(19);
    let SG = !1;

    function LG() {
      return SG
    }

    function yG(GG) {
      SG !== GG && (SG = GG, wG.l.xh("replayViewer|videoExportChanged"))
    }
  },
  36707: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => VG,
      g: () => kG,
      k: () => YG,
      l: () => UG,
      m: () => zG
    });
    var wG = ZG(612),
      SG = ZG(1721),
      LG = ZG(4818);
    class yG {
      constructor(GG, bG) {
        this.width = GG, this.rp = bG, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(GG * bG)
      }
      push(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ZG = this.data,
          wG = this.next * this.width;
        for (let SG = 0; SG < this.width; SG++) ZG[wG + SG] = GG[bG + SG];
        this.next = (this.next + 1) % this.rp, this.size = Math.min(this.size + 1, this.rp)
      }
      rows() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1 / 0;
        const ZG = [],
          wG = (this.next - this.size + this.rp) % this.rp;
        for (let SG = 0; SG < this.size; SG++) {
          const LG = (wG + SG) % this.rp * this.width;
          this.data[LG + GG] >= bG && ZG.push(Array.from(this.data.subarray(LG, LG + this.width)))
        }
        return ZG
      }
      lines() {
        return this.rows().map((GG => GG.join(",")))
      }
    }
    const kG = 10,
      UG = {
        idle: 0,
        vQ: 1,
        vF: 2,
        lF: 3,
        Ld: 4
      },
      YG = {
        none: 0,
        skipped: 1,
        paced: 2,
        drawn: 3
      },
      VG = {
        lockGained: 1,
        lockLost: 2,
        lockError: 3,
        visible: 4,
        hidden: 5,
        focus: 6,
        blur: 7,
        jsClient: 8,
        wasmClient: 9,
        droppedCopies: 10,
        stepsLost: 11,
        cameraSetsLost: 12
      },
      pG = 12e3,
      fG = ["nowMs", "dtMs", "rawX", "rawY", "turnedX", "turnedY", "outcome", "velocityX", "velocityY", "limit"],
      QG = ["timeStamp", "nowMs", "movementX", "movementY", "locked"],
      KG = ["nowMs", "dtMs", "heading", "pitch", "kind"],
      hG = ["nowMs", "source", "headingBefore", "pitchBefore", "headingAfter", "pitchAfter"],
      dG = ["nowMs", "change", "count"];

    function JG(GG) {
      return "js" === GG ? VG.jsClient : VG.wasmClient
    }
    class rG {
      constructor() {
        this.steps = new yG(kG, pG), this.events = new yG(QG.length, pG), this.frames = new yG(KG.length, pG), this.cameraSets = new yG(LG.h, 256), this.changes = new yG(dG.length, 256)
      }
    }
    const zG = new class {
      constructor() {
        this.rings = null, this.sample = new Float64Array(QG.length), this.startedClient = null, this.startedAtMs = 0
      }
      get client() {
        return this.startedClient
      }
      start(GG, bG) {
        this.startedClient = GG, this.startedAtMs = performance.now(), null !== this.rings ? this.change(JG(GG)) : bG && this.allocate()
      }
      lockGained() {
        this.allocate(), this.change(VG.lockGained)
      }
      allocate() {
        null === this.rings && (this.rings = new rG, null !== this.startedClient && this.changeAt(this.startedAtMs, JG(this.startedClient), 1))
      }
      step(GG, bG) {
        var ZG;
        GG[bG + 6] !== UG.Ld && (null === (ZG = this.rings) || void 0 === ZG || ZG.steps.push(GG, bG))
      }
      cameraSet(GG, bG) {
        var ZG;
        null === (ZG = this.rings) || void 0 === ZG || ZG.cameraSets.push(GG, bG)
      }
      mouseMove(GG, bG) {
        const ZG = this.rings;
        if (null === ZG) return;
        const wG = this.sample;
        wG[0] = GG.timeStamp, wG[1] = performance.now(), wG[2] = GG.movementX, wG[3] = GG.movementY, wG[4] = bG ? 1 : 0, ZG.events.push(wG)
      }
      frame(GG, bG, ZG, wG) {
        const SG = this.rings;
        if (null === SG || wG === YG.none) return;
        const LG = this.sample;
        LG[0] = performance.now(), LG[1] = GG, LG[2] = bG, LG[3] = ZG, LG[4] = wG, SG.frames.push(LG)
      }
      change(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.changeAt(performance.now(), GG, bG)
      }
      changeAt(GG, bG, ZG) {
        const wG = this.rings;
        if (null === wG) return;
        const SG = this.sample;
        SG[0] = GG, SG[1] = bG, SG[2] = ZG, wG.changes.push(SG)
      }
      dumpText() {
        var GG, bG;
        const ZG = this.rings;
        return [`look records (${this.startedClient}): ${fG.join(",")}`, ...null !== (GG = null === ZG || void 0 === ZG ? void 0 : ZG.steps.lines()) && void 0 !== GG ? GG : [], `mousemove events: ${QG.join(",")}`, ...null !== (bG = null === ZG || void 0 === ZG ? void 0 : ZG.events.lines()) && void 0 !== bG ? bG : []].join("\n")
      }
      toJson(GG, bG) {
        var ZG;
        const SG = GG - 6e4,
          LG = this.rings,
          yG = function(GG, bG) {
            var ZG;
            let wG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            const LG = null !== (ZG = null === GG || void 0 === GG ? void 0 : GG.rows(wG, SG)) && void 0 !== ZG ? ZG : [];
            return {
              columns: bG,
              fromMs: 0 === LG.length ? null : LG[0][wG],
              rows: LG
            }
          };
        return {
          version: wG.e,
          client: null !== (ZG = this.startedClient) && void 0 !== ZG ? ZG : "not started",
          savedAt: (new Date).toISOString(),
          savedAtMs: GG,
          keptMs: 6e4,
          page: window.location.href,
          userAgent: navigator.userAgent,
          devicePixelRatio: window.devicePixelRatio,
          screen: {
            width: window.screen.width,
            height: window.screen.height
          },
          gd: null !== document.pointerLockElement,
          visibility: document.visibilityState,
          ...bG,
          outcomes: UG,
          frameKinds: YG,
          changes: VG,
          lookSteps: yG(null === LG || void 0 === LG ? void 0 : LG.steps, fG),
          mouseMoves: yG(null === LG || void 0 === LG ? void 0 : LG.events, QG, 1),
          frames: yG(null === LG || void 0 === LG ? void 0 : LG.frames, KG),
          cameraSets: yG(null === LG || void 0 === LG ? void 0 : LG.cameraSets, hG),
          pageChanges: yG(null === LG || void 0 === LG ? void 0 : LG.changes, dG)
        }
      }
      save(GG) {
        const bG = JSON.stringify(this.toJson(performance.now(), GG));
        (0, SG.b)(new Blob([bG], {
          type: "application/json"
        }), `bloxd-mouse-look-${(new Date).toISOString().replace(/[:.]/g,"-")}.json`)
      }
    }
  },
  36701: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      LOOK_DEBUG_HEADER: () => VG,
      endLookDebugTake: () => JG,
      noteLookDroppedCopy: () => rG,
      saveLookCapture: () => zG,
      startLookDebug: () => dG
    });
    var wG = ZG(4818),
      SG = ZG(2801),
      LG = ZG(1873);
    const yG = new Map(Object.entries(wG.k).map((GG => {
      let [bG, ZG] = GG;
      return [ZG, bG]
    })));

    function kG(GG) {
      return (0, LG.C)(GG).toFixed(1)
    }

    function UG(GG, bG) {
      return `camera set by ${yG.get(GG[bG+1])}: heading ${`${kG(GG[bG+2])} -> ${kG(GG[bG+4])}`} deg, pitch ${`${kG(GG[bG+3])} -> ${kG(GG[bG+5])}`} deg, at ${GG[bG].toFixed(1)} ms`
    }
    var YG = ZG(36707);
    const VG = 2;

    function pG(GG) {
      return Number.isFinite(GG) ? String(Math.round(10 * GG) / 10) : String(GG)
    }

    function fG(GG) {
      return Number.isFinite(GG) ? GG.toFixed(1) : String(GG)
    }
    class QG {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.vF = 0, this.pastLimit = 0, this.lockSkips = 0, this.Ld = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.cameraSets = 0, this.cameraSetsLost = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
      moved() {
        return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.vF > 0 || this.dropped > 0 || this.cameraSets > 0
      }
      hasEvent() {
        return this.vF > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
      }
    }
    class KG {
      constructor() {
        var GG = this;
        this.topicOn = (0, SG.m)("look"), this.remote = (0, SG.n)(), this.tally = new QG, this.takes = null, this.started = !1, this.record = function(bG) {
          let ZG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          if (YG.m.step(bG, ZG), !GG.topicOn) return;
          const wG = bG[ZG],
            SG = bG[ZG + 1],
            LG = bG[ZG + 2],
            yG = bG[ZG + 3],
            kG = bG[ZG + 4],
            UG = bG[ZG + 5],
            VG = bG[ZG + 6],
            QG = bG[ZG + 7],
            KG = bG[ZG + 8],
            hG = bG[ZG + 9],
            dG = GG.tally;
          switch (dG.frames++, VG) {
            case YG.l.idle:
              return void dG.idle++;
            case YG.l.Ld:
              return void dG.Ld++;
            case YG.l.lF:
              return dG.lockSkips++, void(0 === LG && 0 === yG || GG.outlier(`lock skip dropped raw (${pG(LG)}, ${pG(yG)}) at ${fG(wG)} ms`))
          }
          dG.looked++, Number.isFinite(SG) && (dG.dtMin = Math.min(dG.dtMin, SG), dG.dtMax = Math.max(dG.dtMax, SG), dG.dtSum += SG, SG > 0 && (dG.peakRate = Math.max(dG.peakRate, Math.hypot(kG, UG) / SG))), dG.raw[0] += LG, dG.raw[1] += yG, dG.turned[0] += kG, dG.turned[1] += UG;
          const JG = Math.abs(LG) > hG || Math.abs(yG) > hG,
            rG = `raw (${pG(LG)}, ${pG(yG)}) over ${fG(SG)} ms, limit ${pG(hG)}, filter v (${QG.toFixed(3)}, ${KG.toFixed(3)}) px/ms, at ${fG(wG)} ms`;
          VG === YG.l.vF ? (dG.vF++, GG.outlier(`spike put right: ${rG} -> turned (${pG(kG)}, ${pG(UG)})`)) : JG ? (dG.pastLimit++, GG.outlier(`kept past limit: ${rG}`)) : SG > 50 && (dG.longFrames++, GG.remote || GG.outlier(`long frame: ${rG}, turned in full`))
        }, this.onMouseMove = GG => {
          const bG = null !== document.pointerLockElement;
          if (YG.m.mouseMove(GG, bG), !this.topicOn) return;
          const ZG = this.tally,
            {
              movementX: wG,
              movementY: SG
            } = GG;
          ZG.events++;
          const LG = Math.max(Math.abs(wG), Math.abs(SG));
          ZG.eventMax = Math.max(ZG.eventMax, LG), LG >= 200 && (ZG.bigEvents++, this.eventOutlier(`big mousemove (${wG}, ${SG}) at ${fG(GG.timeStamp)} ms, lock ${bG?"Ik":"free"}`))
        }, this.onLockChange = () => {
          const GG = document.pointerLockElement;
          GG ? YG.m.lockGained() : YG.m.change(YG.c.lockLost), this.topicOn && (0, SG.j)("look", `pointer lock ${GG?`gained (${GG.tagName.toLowerCase()})`:"lost"} at ${fG(performance.now())} ms`)
        }, this.onLockError = () => {
          YG.m.change(YG.c.lockError), this.topicOn && (0, SG.j)("look", `pointer lock request failed at ${fG(performance.now())} ms`)
        }, this.onVisibility = () => {
          YG.m.change("hidden" === document.visibilityState ? YG.c.hidden : YG.c.visible), this.topicOn && (0, SG.j)("look", `page ${document.visibilityState} at ${fG(performance.now())} ms`)
        }, this.onFocus = () => {
          YG.m.change(YG.c.focus)
        }, this.onBlur = () => {
          YG.m.change(YG.c.blur)
        }, this.flush = () => {
          if (this.takeRecords(), !this.topicOn) return;
          const GG = this.tally;
          if (this.tally = new QG, !GG.moved() || this.remote && !GG.hasEvent()) return;
          const bG = GG.looked > 0 ? GG.dtSum / GG.looked : NaN,
            ZG = [`${GG.frames} frames (${GG.looked} looked, ${GG.idle} idle${"wasm"===YG.m.client?`, ${GG.Ld} carried`:""})`, `dt avg ${fG(bG)} min ${fG(GG.dtMin)} max ${fG(GG.dtMax)}, ${GG.longFrames} long`, `${GG.events} mousemoves (max ${pG(GG.eventMax)} px, ${GG.bigEvents} big)`, `raw (${pG(GG.raw[0])}, ${pG(GG.raw[1])}) turned (${pG(GG.turned[0])}, ${pG(GG.turned[1])})`, `peak ${GG.peakRate.toFixed(2)} px/ms`, `put right ${GG.vF}, past limit ${GG.pastLimit}, lock skips ${GG.lockSkips}`, "lock " + (document.pointerLockElement ? "Ik" : "free")];
          GG.dropped > 0 && ZG.push(`${GG.dropped} doubled spike copies dropped`), GG.cameraSets > 0 && ZG.push(`${GG.cameraSets} camera sets`), GG.cameraSetsLost > 0 && ZG.push(`${GG.cameraSetsLost} camera set records lost`), GG.lost > 0 && ZG.push(`${GG.lost} records lost`), GG.suppressed > 0 && ZG.push(`${GG.suppressed} outlier lines not shown`), (0, SG.j)("look", `1s: ${ZG.join("; ")}`)
        }
      }
      start(GG, bG) {
        if (YG.m.start(GG, null !== document.pointerLockElement), this.takes = bG, this.topicOn) {
          const {
            screen: bG
          } = window;
          (0, SG.j)("look", `start: ${GG} client, dpr ${window.devicePixelRatio}, screen ${bG.width}x${bG.height}, pointer lock ${document.pointerLockElement?"Ik":"free"}`)
        }
        this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), window.addEventListener("focus", this.onFocus), window.addEventListener("blur", this.onBlur), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), this.topicOn && !this.remote && (0, SG.i)("look", (() => YG.m.dumpText())))
      }
      outlier(GG) {
        const bG = this.tally;
        bG.outliers >= 20 ? bG.suppressed++ : (bG.outliers++, (0, SG.j)("look", GG))
      }
      eventOutlier(GG) {
        const bG = this.tally;
        bG.eventLines >= 10 ? bG.suppressed++ : (bG.eventLines++, (0, SG.j)("look", GG))
      }
      takeRecords() {
        if (null === this.takes) return;
        const GG = this.takes.look();
        if (GG.length >= VG) {
          this.counted(YG.c.stepsLost, GG[0]), this.counted(YG.c.droppedCopies, GG[1]);
          for (let bG = VG; bG + YG.g <= GG.length; bG += YG.g) this.record(GG, bG)
        }
        const bG = this.takes.cameraSets();
        if (bG.length >= wG.e) {
          this.counted(YG.c.cameraSetsLost, bG[0]);
          for (let GG = wG.e; GG + wG.h <= bG.length; GG += wG.h) YG.m.cameraSet(bG, GG), this.topicOn && (this.tally.cameraSets++, this.outlier(UG(bG, GG)))
        }
      }
      droppedCopy() {
        this.counted(YG.c.droppedCopies, 1)
      }
      counted(GG, bG) {
        if (0 === bG) return;
        if (YG.m.change(GG, bG), !this.topicOn) return;
        const ZG = this.tally;
        GG === YG.c.droppedCopies ? ZG.dropped += bG : GG === YG.c.stepsLost ? ZG.lost += bG : ZG.cameraSetsLost += bG
      }
      endTake() {
        this.takeRecords(), this.takes = null
      }
    }
    let hG = null;

    function dG(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return hG ??= new KG, hG.start(GG, bG), hG.record
    }

    function JG() {
      var GG;
      null === (GG = hG) || void 0 === GG || GG.endTake()
    }

    function rG() {
      var GG;
      null === (GG = hG) || void 0 === GG || GG.droppedCopy()
    }
    async function zG(GG) {
      var bG;
      null === (bG = hG) || void 0 === bG || bG.takeRecords();
      const {
        clientHintsRead: wG,
        debugDeviceLines: SG
      } = await ZG.e(29).then((() => ZG(34354)));
      await wG, YG.m.save({
        ...GG,
        device: SG()
      })
    }
  },
  39444: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => kG
    });
    var wG = ZG(19),
      SG = ZG(1251),
      LG = ZG(2968);
    const yG = "Reconnecting";
    class kG {
      constructor(GG) {
        this.hooks = GG, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = GG => {
          GG.persisted || this.leave()
        }, this.controller = new LG.e((bG => GG.reconnect(bG)), {
          isSessionLive: () => !this.ended && GG.isLive(),
          onPhaseChanged: GG => {
            this.onPhaseChanged(GG)
          },
          onReconnected: bG => {
            GG.onReconnected(bG)
          },
          onGaveUp: bG => {
            !this.ended && GG.isLive() && GG.onGaveUp(this.sessionBased, bG)
          }
        })
      }
      onInitialInfo(GG, bG) {
        this.graceMs = GG, this.sessionBased = bG
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(GG) {
        this.ended || this.controller.onConnectionLost(GG, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const GG = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          bG = this.controller.heldToken;
        this.end(), GG && "" !== bG && this.hooks.releaseSeat(bG)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(GG) {
        const bG = (0, LG.r)(GG);
        bG !== this.stopped && (this.stopped = bG, this.hooks.freeze(bG));
        const ZG = "frozen" === GG || "resuming" === GG && this.frozen;
        ZG && !this.frozen ? (0, SG.z)(yG, {
          overridesPause: !0
        }) : !ZG && this.frozen && (0, SG.w)(yG), this.frozen = ZG, this.setListening("connected" !== GG), wG.l.xh(LG.o, ZG ? "frozen" : GG)
      }
      setListening(GG) {
        GG !== this.listening && (this.listening = GG, GG ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  39453: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => wG
    });
    class wG {
      constructor(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = GG, this.now = bG, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const GG = this.now(),
            bG = GG - this.lastCheckAt <= 2e3;
          this.lastCheckAt = GG;
          const ZG = "visible" === document.visibilityState;
          !ZG || bG && this.wasVisible || (this.resumedAt = GG), this.wasVisible = ZG, ZG && GG - this.lastHeardAt > 12e3 && GG - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = bG(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  39461: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => YG,
      d: () => VG
    });
    var wG = ZG(1673),
      SG = ZG(188),
      LG = ZG(1634),
      yG = ZG(1758),
      kG = ZG(1163),
      UG = ZG(1096);
    async function YG(GG, bG) {
      return function(GG) {
        return "object" === typeof GG && null !== GG && GG.code === SG.b.VpnIp.code
      }(bG) && function(GG) {
        return LG.c.supports("appCheck") && GG.isLoggedIn() && !GG.hasTriedAppAttestation()
      }(GG) && await async function(GG) {
        try {
          const {
            token: bG
          } = await (0, yG.c)(), {
            "3PSIDMCPP": ZG
          } = await (0, UG.postJsonWithMetricsCookiesAndJsonResponse)(`${kG.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: bG
          }, {
            retries: 0
          }, GG.getMetricsCookies());
          return GG.setAppAttestedAuthJwt(ZG), !0
        } catch (bG) {
          return bG instanceof wG.b && "failed" === bG.code ? (console.warn("The app couldn't get an App Check token:", bG), GG.markAppAttestationTried()) : console.error("Failed to attest the app:", bG), !1
        }
      }(GG)
    }
    async function VG(GG, bG) {
      try {
        return await bG()
      } catch (ZG) {
        if (!await YG(GG, ZG)) throw ZG
      }
      return bG()
    }
  },
  39456: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => fG,
      g: () => VG
    });
    var wG = ZG(188),
      SG = ZG(1786),
      LG = ZG(1169),
      yG = ZG(8957);
    const kG = [250, 500, 1e3, 2e3, 1250],
      UG = 406;

    function YG(GG) {
      if ("object" !== typeof GG || null === GG) return !1;
      const {
        code: bG,
        message: ZG
      } = GG, SG = wG.b.duplicateLobbyNameError;
      return (bG === SG.code || bG === UG) && (ZG === SG.text || ZG === SG.text + wG.j)
    }
    async function VG(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : SG.e;
      for (let SG = 0;; SG++) {
        let yG;
        (0, LG.p)(bG);
        try {
          return await GG()
        } catch (wG) {
          if (yG = kG[SG], void 0 === yG || !YG(wG)) throw wG
        }
        await ZG(yG, bG)
      }
    }
    const pG = new Set([wG.b.duplicateLobbyNameError.code, wG.b.lobbyCantBeCreated.code, wG.b.roomDisposedEarlyError.code, wG.b.roomDisposedLateError.code, wG.b.serverRoomLimitReached.code]);

    function fG(GG) {
      if (YG(GG)) return !0;
      const bG = (0, yG.h)(GG);
      return "number" === typeof bG && pG.has(bG)
    }
  },
  39470: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => UG
    });
    var wG = ZG(8957),
      SG = ZG(36826),
      LG = ZG(39478);
    const yG = {
        seat: "seat_timeout",
        socket_unopened: "socket_timeout_unopened",
        socket: "socket_timeout"
      },
      kG = {
        seat: "seat_lost",
        socket_unopened: "socket_unopened",
        socket: "socket_closed"
      };

    function UG(GG, bG) {
      if (GG instanceof SG.g) return {
        at: yG[bG],
        code: 0
      };
      const ZG = (0, wG.h)(GG),
        UG = "number" === typeof ZG ? ZG : 0;
      return null !== (0, LG.k)(UG).name ? {
        at: "refused",
        code: UG
      } : {
        at: kG[bG],
        code: UG
      }
    }
  },
  8957: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => LG,
      h: () => yG,
      j: () => kG,
      n: () => YG,
      q: () => UG
    });
    var wG = ZG(188),
      SG = ZG(4655);

    function LG(GG) {
      return yG(GG) === wG.b.gameOrPluginOnPlayerAuthRejected.code
    }

    function yG(GG) {
      return "object" === typeof GG && null !== GG ? GG.code : void 0
    }

    function kG(GG) {
      var bG;
      return null !== (bG = Object.keys(SG.b).find((bG => SG.b[bG] === GG))) && void 0 !== bG ? bG : null
    }

    function UG(GG) {
      return "notWhitelisted" === GG ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const YG = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  36808: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => fG,
      f: () => VG,
      g: () => QG,
      h: () => pG
    });
    var wG = ZG(352),
      SG = ZG(641),
      LG = ZG(655),
      yG = ZG(29);
    const kG = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      UG = "playSessionGameNameWithVariation",
      YG = "wasMatchmakePlayer";

    function VG() {
      let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yG.l;
      (0, LG.j)(GG, kG)
    }

    function pG() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yG.l).setItem(YG, !0)
    }

    function fG() {
      let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yG.l;
      return (0, LG.e)(GG, kG)
    }

    function QG(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yG.l;
      const ZG = (0, LG.e)(bG, kG),
        VG = function(GG) {
          const bG = GG.getItem(UG);
          return "string" !== typeof bG ? null : bG
        }(bG),
        pG = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yG.l).getItem(YG)
        }(bG);
      let fG;
      return fG = null !== ZG && null !== VG && (0, LG.f)(bG, kG) && function(GG, bG, ZG) {
          const SG = (0, wG.Yb)(GG),
            LG = (0, wG.Yb)(bG),
            yG = (0, wG.Vb)(GG),
            kG = (0, wG.Vb)(bG);
          return !(SG !== LG || !ZG) || SG === LG && yG === kG
        }(VG, GG, pG) ? ZG : (0, SG.d)(), (0, LG.n)(bG, kG, fG), bG.setItem(UG, GG),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yG.l).removeItem(YG)
        }(bG), fG
    }
  },
  36801: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => oG,
      g: () => XG
    });
    var wG = ZG(982),
      SG = ZG(200),
      LG = ZG(346),
      yG = ZG(612),
      kG = ZG(352),
      UG = ZG(984),
      YG = ZG(631),
      VG = ZG(666),
      pG = ZG(4537),
      fG = ZG(80),
      QG = ZG(116),
      KG = ZG(1702),
      hG = ZG(95),
      dG = ZG(36808),
      JG = ZG(29),
      rG = ZG(647),
      zG = ZG(617),
      EG = ZG(36810);

    function oG() {
      var GG, bG;
      return [...null !== (GG = navigator.languages) && void 0 !== GG ? GG : [null !== (bG = navigator.language) && void 0 !== bG ? bG : "none"], "en-Gb"]
    }

    function XG(GG, bG, ZG, XG, uG) {
      const iG = (0, wG.h)(bG) ? (0, wG.j)(bG) : null,
        CG = GG.isLoggedIn() && void 0 !== (0, SG.c)(LG.l, QG.siteUsed) ? (0, zG.e)() : null,
        WG = {
          cookies: (0, KG.getAllCookiesForGameNameWithVariation)(bG),
          isMobile: (0, fG.isMobile)(),
          isUsingCustomGameTexturePack: null !== iG && uG(iG),
          generalCookies: {
            joinDiscord: !!JG.h.getItem("DiscordPressed"),
            newGo: pG.c,
            ...GG.getMetricsCookies(),
            trafficCode: XG,
            compliance: fG.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, fG.getBrowserName)(),
            version: (0, fG.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, fG.getPlatformType)(),
            deviceType: (0, hG.d)()
          },
          isLoggedIn: GG.isLoggedIn(),
          lobbyName: ZG,
          languages: oG(),
          version: yG.e,
          siteUsed: QG.siteUsed,
          subsiteUsed: QG.subsiteUsed,
          playSessionId: (0, dG.g)(bG),
          visitSessionId: (0, rG.f)(),
          clientReason: YG.s.reason,
          budgetBasis: (0, EG.j)(),
          ...null !== VG.o && {
            diagClaim: VG.o.claimId
          },
          ...null !== CG && {
            webGpuLoss: CG
          }
        };
      return null !== iG && (0, kG.Oc)(iG) ? (WG.lobbyName = (0, wG.g)(iG, (0, wG.i)(bG), ZG), {
        roomName: `classic_${UG.e}`,
        joinOptions: WG
      }) : {
        roomName: bG,
        joinOptions: WG
      }
    }
  },
  39484: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => QG,
      h: () => fG
    });
    const wG = "ue:",
      SG = ["keydown", "keyup", "mousedown", "mouseup", "pointerdown", "pointerup", "touchstart", "touchend"],
      LG = "[A-Za-z0-9]{1,24}",
      yG = 15,
      kG = new RegExp(`^${LG}$`);
    new RegExp(`^${wG}(${[...SG,"other"].join("|")}):(?:n|k(${LG})|b(0|[1-9][0-9]?)):([01])([01])$`);

    function UG(GG, bG, ZG, LG, UG) {
      const YG = "string" === typeof GG && SG.includes(GG) ? GG : "other";
      let VG = "n";
      return "string" === typeof bG ? VG = kG.test(bG) ? `k${bG}` : "n" : "number" === typeof ZG && Number.isInteger(ZG) && ZG >= 0 && ZG <= yG && (VG = `b${ZG}`), `${wG}${YG}:${VG}:${LG?1:0}${UG?1:0}`
    }
    var YG = ZG(1606),
      VG = ZG(1709);
    let pG = null;

    function fG(GG) {
      const bG = GG instanceof Element && GG !== document.body && GG !== document.documentElement && !(0, YG.q)(GG) && !GG.closest("#root");
      return {
        editable: (0, VG.d)(GG),
        outsideView: bG
      }
    }

    function QG(GG) {
      return pG ??= function(GG) {
        try {
          const {
            editable: bG,
            outsideView: ZG
          } = fG(GG.target), wG = GG;
          return UG(GG.type, wG.code, wG.button, bG, ZG)
        } catch {
          return UG(null, null, null, !1, !1)
        }
      }(GG), pG
    }
  },
  39478: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => SG,
      g: () => LG,
      i: () => kG,
      k: () => VG,
      o: () => UG,
      s: () => yG
    });
    var wG = ZG(188);
    const SG = 3e3,
      LG = 15e3;

    function yG(GG) {
      const bG = GG.endsWith(wG.j);
      return {
        text: (bG ? GG.slice(0, -wG.j.length) : GG) || null,
        dropsCache: bG
      }
    }
    const kG = "Either your internet isn't working or this is a bug.";

    function UG(GG, bG) {
      const ZG = VG(GG);
      return null !== ZG.name && "" === wG.b[ZG.name].text && null !== bG ? bG : ZG.reason
    }
    const YG = "You were removed from the game.";

    function VG(GG) {
      var bG;
      let ZG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const SG = null !== (bG = Object.keys(wG.b).find((bG => wG.b[bG].code === GG))) && void 0 !== bG ? bG : null;
      if (null === SG) return {
        code: GG,
        name: SG,
        reason: null !== ZG && void 0 !== ZG ? ZG : `${kG}\nCode: ${GG}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: LG,
        canReconnect: yG = !1
      } = wG.b[SG], UG = GG === wG.b.outdatedVersion.code || GG === wG.b.loadRecaptchaError.code;
      return {
        code: GG,
        name: SG,
        reason: "" !== LG ? LG : null !== ZG && void 0 !== ZG ? ZG : GG === wG.b.gameOrPluginKick.code ? YG : `Code: ${GG}`,
        canReconnect: yG,
        automaticallyReconnect: GG === wG.b.customGameUpdated.code || GG === wG.b.duplicateLobbyNameError.code,
        requiresRefresh: UG
      }
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);