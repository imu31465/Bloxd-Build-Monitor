export const id = 160;
export const ids = [160];
export const modules = {
  39233: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => MT,
      f: () => gT
    });
    var WT = mT(31);
    let zT = !1;

    function MT() {
      return zT
    }

    function gT(TT) {
      zT !== TT && (zT = TT, WT.j.EZ("replayViewer|videoExportChanged"))
    }
  },
  36451: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => jT,
      e: () => nT,
      f: () => kT,
      h: () => HT,
      k: () => qT
    });
    var WT = mT(662),
      zT = mT(1876),
      MT = mT(4904);
    class gT {
      constructor(TT, UT) {
        this.width = TT, this.fl = UT, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(TT * UT)
      }
      push(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const mT = this.data,
          WT = this.next * this.width;
        for (let zT = 0; zT < this.width; zT++) mT[WT + zT] = TT[UT + zT];
        this.next = (this.next + 1) % this.fl, this.size = Math.min(this.size + 1, this.fl)
      }
      rows() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1 / 0;
        const mT = [],
          WT = (this.next - this.size + this.fl) % this.fl;
        for (let zT = 0; zT < this.size; zT++) {
          const MT = (WT + zT) % this.fl * this.width;
          this.data[MT + TT] >= UT && mT.push(Array.from(this.data.subarray(MT, MT + this.width)))
        }
        return mT
      }
      lines() {
        return this.rows().map((TT => TT.join(",")))
      }
    }
    const nT = 10,
      HT = {
        idle: 0,
        Jp: 1,
        ZF: 2,
        vF: 3,
        Uc: 4
      },
      kT = {
        none: 0,
        skipped: 1,
        paced: 2,
        drawn: 3
      },
      jT = {
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
      lT = 12e3,
      LT = ["nowMs", "dtMs", "rawX", "rawY", "turnedX", "turnedY", "outcome", "velocityX", "velocityY", "limit"],
      pT = ["timeStamp", "nowMs", "movementX", "movementY", "locked"],
      BT = ["nowMs", "dtMs", "heading", "pitch", "kind"],
      ZT = ["nowMs", "source", "headingBefore", "pitchBefore", "headingAfter", "pitchAfter"],
      cT = ["nowMs", "change", "count"];

    function vT(TT) {
      return "js" === TT ? jT.jsClient : jT.wasmClient
    }
    class fT {
      constructor() {
        this.steps = new gT(nT, lT), this.events = new gT(pT.length, lT), this.frames = new gT(BT.length, lT), this.cameraSets = new gT(MT.f, 256), this.changes = new gT(cT.length, 256)
      }
    }
    const qT = new class {
      constructor() {
        this.rings = null, this.sample = new Float64Array(pT.length), this.startedClient = null, this.startedAtMs = 0
      }
      get client() {
        return this.startedClient
      }
      start(TT, UT) {
        this.startedClient = TT, this.startedAtMs = performance.now(), null !== this.rings ? this.change(vT(TT)) : UT && this.allocate()
      }
      lockGained() {
        this.allocate(), this.change(jT.lockGained)
      }
      allocate() {
        null === this.rings && (this.rings = new fT, null !== this.startedClient && this.changeAt(this.startedAtMs, vT(this.startedClient), 1))
      }
      step(TT, UT) {
        var mT;
        TT[UT + 6] !== HT.Uc && (null === (mT = this.rings) || void 0 === mT || mT.steps.push(TT, UT))
      }
      cameraSet(TT, UT) {
        var mT;
        null === (mT = this.rings) || void 0 === mT || mT.cameraSets.push(TT, UT)
      }
      mouseMove(TT, UT) {
        const mT = this.rings;
        if (null === mT) return;
        const WT = this.sample;
        WT[0] = TT.timeStamp, WT[1] = performance.now(), WT[2] = TT.movementX, WT[3] = TT.movementY, WT[4] = UT ? 1 : 0, mT.events.push(WT)
      }
      frame(TT, UT, mT, WT) {
        const zT = this.rings;
        if (null === zT || WT === kT.none) return;
        const MT = this.sample;
        MT[0] = performance.now(), MT[1] = TT, MT[2] = UT, MT[3] = mT, MT[4] = WT, zT.frames.push(MT)
      }
      change(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.changeAt(performance.now(), TT, UT)
      }
      changeAt(TT, UT, mT) {
        const WT = this.rings;
        if (null === WT) return;
        const zT = this.sample;
        zT[0] = TT, zT[1] = UT, zT[2] = mT, WT.changes.push(zT)
      }
      dumpText() {
        var TT, UT;
        const mT = this.rings;
        return [`look records (${this.startedClient}): ${LT.join(",")}`, ...null !== (TT = null === mT || void 0 === mT ? void 0 : mT.steps.lines()) && void 0 !== TT ? TT : [], `mousemove events: ${pT.join(",")}`, ...null !== (UT = null === mT || void 0 === mT ? void 0 : mT.events.lines()) && void 0 !== UT ? UT : []].join("\n")
      }
      toJson(TT, UT) {
        var mT;
        const zT = TT - 6e4,
          MT = this.rings,
          gT = function(TT, UT) {
            var mT;
            let WT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            const MT = null !== (mT = null === TT || void 0 === TT ? void 0 : TT.rows(WT, zT)) && void 0 !== mT ? mT : [];
            return {
              columns: UT,
              fromMs: 0 === MT.length ? null : MT[0][WT],
              rows: MT
            }
          };
        return {
          version: WT.d,
          client: null !== (mT = this.startedClient) && void 0 !== mT ? mT : "not started",
          savedAt: (new Date).toISOString(),
          savedAtMs: TT,
          keptMs: 6e4,
          page: window.location.href,
          userAgent: navigator.userAgent,
          devicePixelRatio: window.devicePixelRatio,
          screen: {
            width: window.screen.width,
            height: window.screen.height
          },
          yc: null !== document.pointerLockElement,
          visibility: document.visibilityState,
          ...UT,
          outcomes: HT,
          frameKinds: kT,
          changes: jT,
          lookSteps: gT(null === MT || void 0 === MT ? void 0 : MT.steps, LT),
          mouseMoves: gT(null === MT || void 0 === MT ? void 0 : MT.events, pT, 1),
          frames: gT(null === MT || void 0 === MT ? void 0 : MT.frames, BT),
          cameraSets: gT(null === MT || void 0 === MT ? void 0 : MT.cameraSets, ZT),
          pageChanges: gT(null === MT || void 0 === MT ? void 0 : MT.changes, cT)
        }
      }
      save(TT) {
        const UT = JSON.stringify(this.toJson(performance.now(), TT));
        (0, zT.c)(new Blob([UT], {
          type: "application/json"
        }), `bloxd-mouse-look-${(new Date).toISOString().replace(/[:.]/g,"-")}.json`)
      }
    }
  },
  36447: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      LOOK_DEBUG_HEADER: () => jT,
      endLookDebugTake: () => vT,
      noteLookDroppedCopy: () => fT,
      saveLookCapture: () => qT,
      startLookDebug: () => cT
    });
    var WT = mT(4904),
      zT = mT(2929),
      MT = mT(2014);
    const gT = new Map(Object.entries(WT.j).map((TT => {
      let [UT, mT] = TT;
      return [mT, UT]
    })));

    function nT(TT) {
      return (0, MT.D)(TT).toFixed(1)
    }

    function HT(TT, UT) {
      return `camera set by ${gT.get(TT[UT+1])}: heading ${`${nT(TT[UT+2])} -> ${nT(TT[UT+4])}`} deg, pitch ${`${nT(TT[UT+3])} -> ${nT(TT[UT+5])}`} deg, at ${TT[UT].toFixed(1)} ms`
    }
    var kT = mT(36451);
    const jT = 2;

    function lT(TT) {
      return Number.isFinite(TT) ? String(Math.round(10 * TT) / 10) : String(TT)
    }

    function LT(TT) {
      return Number.isFinite(TT) ? TT.toFixed(1) : String(TT)
    }
    class pT {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.ZF = 0, this.pastLimit = 0, this.lockSkips = 0, this.Uc = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.cameraSets = 0, this.cameraSetsLost = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
      moved() {
        return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.ZF > 0 || this.dropped > 0 || this.cameraSets > 0
      }
      hasEvent() {
        return this.ZF > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
      }
    }
    class BT {
      constructor() {
        var TT = this;
        this.topicOn = (0, zT.r)("look"), this.remote = (0, zT.v)(), this.tally = new pT, this.takes = null, this.started = !1, this.record = function(UT) {
          let mT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          if (kT.k.step(UT, mT), !TT.topicOn) return;
          const WT = UT[mT],
            zT = UT[mT + 1],
            MT = UT[mT + 2],
            gT = UT[mT + 3],
            nT = UT[mT + 4],
            HT = UT[mT + 5],
            jT = UT[mT + 6],
            pT = UT[mT + 7],
            BT = UT[mT + 8],
            ZT = UT[mT + 9],
            cT = TT.tally;
          switch (cT.frames++, jT) {
            case kT.h.idle:
              return void cT.idle++;
            case kT.h.Uc:
              return void cT.Uc++;
            case kT.h.vF:
              return cT.lockSkips++, void(0 === MT && 0 === gT || TT.outlier(`lock skip dropped raw (${lT(MT)}, ${lT(gT)}) at ${LT(WT)} ms`))
          }
          cT.looked++, Number.isFinite(zT) && (cT.dtMin = Math.min(cT.dtMin, zT), cT.dtMax = Math.max(cT.dtMax, zT), cT.dtSum += zT, zT > 0 && (cT.peakRate = Math.max(cT.peakRate, Math.hypot(nT, HT) / zT))), cT.raw[0] += MT, cT.raw[1] += gT, cT.turned[0] += nT, cT.turned[1] += HT;
          const vT = Math.abs(MT) > ZT || Math.abs(gT) > ZT,
            fT = `raw (${lT(MT)}, ${lT(gT)}) over ${LT(zT)} ms, limit ${lT(ZT)}, filter v (${pT.toFixed(3)}, ${BT.toFixed(3)}) px/ms, at ${LT(WT)} ms`;
          jT === kT.h.ZF ? (cT.ZF++, TT.outlier(`spike put right: ${fT} -> turned (${lT(nT)}, ${lT(HT)})`)) : vT ? (cT.pastLimit++, TT.outlier(`kept past limit: ${fT}`)) : zT > 50 && (cT.longFrames++, TT.remote || TT.outlier(`long frame: ${fT}, turned in full`))
        }, this.onMouseMove = TT => {
          const UT = null !== document.pointerLockElement;
          if (kT.k.mouseMove(TT, UT), !this.topicOn) return;
          const mT = this.tally,
            {
              movementX: WT,
              movementY: zT
            } = TT;
          mT.events++;
          const MT = Math.max(Math.abs(WT), Math.abs(zT));
          mT.eventMax = Math.max(mT.eventMax, MT), MT >= 200 && (mT.bigEvents++, this.eventOutlier(`big mousemove (${WT}, ${zT}) at ${LT(TT.timeStamp)} ms, lock ${UT?"fn":"free"}`))
        }, this.onLockChange = () => {
          const TT = document.pointerLockElement;
          TT ? kT.k.lockGained() : kT.k.change(kT.b.lockLost), this.topicOn && (0, zT.m)("look", `pointer lock ${TT?`gained (${TT.tagName.toLowerCase()})`:"lost"} at ${LT(performance.now())} ms`)
        }, this.onLockError = () => {
          kT.k.change(kT.b.lockError), this.topicOn && (0, zT.m)("look", `pointer lock request failed at ${LT(performance.now())} ms`)
        }, this.onVisibility = () => {
          kT.k.change("hidden" === document.visibilityState ? kT.b.hidden : kT.b.visible), this.topicOn && (0, zT.m)("look", `page ${document.visibilityState} at ${LT(performance.now())} ms`)
        }, this.onFocus = () => {
          kT.k.change(kT.b.focus)
        }, this.onBlur = () => {
          kT.k.change(kT.b.blur)
        }, this.flush = () => {
          if (this.takeRecords(), !this.topicOn) return;
          const TT = this.tally;
          if (this.tally = new pT, !TT.moved() || this.remote && !TT.hasEvent()) return;
          const UT = TT.looked > 0 ? TT.dtSum / TT.looked : NaN,
            mT = [`${TT.frames} frames (${TT.looked} looked, ${TT.idle} idle${"wasm"===kT.k.client?`, ${TT.Uc} carried`:""})`, `dt avg ${LT(UT)} min ${LT(TT.dtMin)} max ${LT(TT.dtMax)}, ${TT.longFrames} long`, `${TT.events} mousemoves (max ${lT(TT.eventMax)} px, ${TT.bigEvents} big)`, `raw (${lT(TT.raw[0])}, ${lT(TT.raw[1])}) turned (${lT(TT.turned[0])}, ${lT(TT.turned[1])})`, `peak ${TT.peakRate.toFixed(2)} px/ms`, `put right ${TT.ZF}, past limit ${TT.pastLimit}, lock skips ${TT.lockSkips}`, "lock " + (document.pointerLockElement ? "fn" : "free")];
          TT.dropped > 0 && mT.push(`${TT.dropped} doubled spike copies dropped`), TT.cameraSets > 0 && mT.push(`${TT.cameraSets} camera sets`), TT.cameraSetsLost > 0 && mT.push(`${TT.cameraSetsLost} camera set records lost`), TT.lost > 0 && mT.push(`${TT.lost} records lost`), TT.suppressed > 0 && mT.push(`${TT.suppressed} outlier lines not shown`), (0, zT.m)("look", `1s: ${mT.join("; ")}`)
        }
      }
      start(TT, UT) {
        if (kT.k.start(TT, null !== document.pointerLockElement), this.takes = UT, this.topicOn) {
          const {
            screen: UT
          } = window;
          (0, zT.m)("look", `start: ${TT} client, dpr ${window.devicePixelRatio}, screen ${UT.width}x${UT.height}, pointer lock ${document.pointerLockElement?"fn":"free"}`)
        }
        this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), window.addEventListener("focus", this.onFocus), window.addEventListener("blur", this.onBlur), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), this.topicOn && !this.remote && (0, zT.j)("look", (() => kT.k.dumpText())))
      }
      outlier(TT) {
        const UT = this.tally;
        UT.outliers >= 20 ? UT.suppressed++ : (UT.outliers++, (0, zT.m)("look", TT))
      }
      eventOutlier(TT) {
        const UT = this.tally;
        UT.eventLines >= 10 ? UT.suppressed++ : (UT.eventLines++, (0, zT.m)("look", TT))
      }
      takeRecords() {
        if (null === this.takes) return;
        const TT = this.takes.look();
        if (TT.length >= jT) {
          this.counted(kT.b.stepsLost, TT[0]), this.counted(kT.b.droppedCopies, TT[1]);
          for (let UT = jT; UT + kT.e <= TT.length; UT += kT.e) this.record(TT, UT)
        }
        const UT = this.takes.cameraSets();
        if (UT.length >= WT.d) {
          this.counted(kT.b.cameraSetsLost, UT[0]);
          for (let TT = WT.d; TT + WT.f <= UT.length; TT += WT.f) kT.k.cameraSet(UT, TT), this.topicOn && (this.tally.cameraSets++, this.outlier(HT(UT, TT)))
        }
      }
      droppedCopy() {
        this.counted(kT.b.droppedCopies, 1)
      }
      counted(TT, UT) {
        if (0 === UT) return;
        if (kT.k.change(TT, UT), !this.topicOn) return;
        const mT = this.tally;
        TT === kT.b.droppedCopies ? mT.dropped += UT : TT === kT.b.stepsLost ? mT.lost += UT : mT.cameraSetsLost += UT
      }
      endTake() {
        this.takeRecords(), this.takes = null
      }
    }
    let ZT = null;

    function cT(TT) {
      let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return ZT ??= new BT, ZT.start(TT, UT), ZT.record
    }

    function vT() {
      var TT;
      null === (TT = ZT) || void 0 === TT || TT.endTake()
    }

    function fT() {
      var TT;
      null === (TT = ZT) || void 0 === TT || TT.droppedCopy()
    }
    async function qT(TT) {
      var UT;
      null === (UT = ZT) || void 0 === UT || UT.takeRecords();
      const {
        clientHintsRead: WT,
        debugDeviceLines: zT
      } = await mT.e(29).then((() => mT(34135)));
      await WT, kT.k.save({
        ...TT,
        device: zT()
      })
    }
  },
  39180: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => nT
    });
    var WT = mT(31),
      zT = mT(1388),
      MT = mT(3116);
    const gT = "Reconnecting";
    class nT {
      constructor(TT) {
        this.hooks = TT, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = TT => {
          TT.persisted || this.leave()
        }, this.controller = new MT.d((UT => TT.reconnect(UT)), {
          isSessionLive: () => !this.ended && TT.isLive(),
          onPhaseChanged: TT => {
            this.onPhaseChanged(TT)
          },
          onReconnected: UT => {
            TT.onReconnected(UT)
          },
          onGaveUp: UT => {
            !this.ended && TT.isLive() && TT.onGaveUp(this.sessionBased, UT)
          }
        })
      }
      onInitialInfo(TT, UT) {
        this.graceMs = TT, this.sessionBased = UT
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(TT) {
        this.ended || this.controller.onConnectionLost(TT, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const TT = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          UT = this.controller.heldToken;
        this.end(), TT && "" !== UT && this.hooks.releaseSeat(UT)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(TT) {
        const UT = (0, MT.s)(TT);
        UT !== this.stopped && (this.stopped = UT, this.hooks.freeze(UT));
        const mT = "frozen" === TT || "resuming" === TT && this.frozen;
        mT && !this.frozen ? (0, zT.s)(gT, {
          overridesPause: !0
        }) : !mT && this.frozen && (0, zT.o)(gT), this.frozen = mT, this.setListening("connected" !== TT), WT.j.EZ(MT.o, mT ? "frozen" : TT)
      }
      setListening(TT) {
        TT !== this.listening && (this.listening = TT, TT ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  39189: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => WT
    });
    class WT {
      constructor(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = TT, this.now = UT, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const TT = this.now(),
            UT = TT - this.lastCheckAt <= 2e3;
          this.lastCheckAt = TT;
          const mT = "visible" === document.visibilityState;
          !mT || UT && this.wasVisible || (this.resumedAt = TT), this.wasVisible = mT, mT && TT - this.lastHeardAt > 12e3 && TT - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = UT(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  39204: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => kT,
      e: () => jT
    });
    var WT = mT(1839),
      zT = mT(208),
      MT = mT(1802),
      gT = mT(1912),
      nT = mT(1302),
      HT = mT(1231);
    async function kT(TT, UT) {
      return function(TT) {
        return "object" === typeof TT && null !== TT && TT.code === zT.e.VpnIp.code
      }(UT) && function(TT) {
        return MT.e.supports("appCheck") && TT.isLoggedIn() && !TT.hasTriedAppAttestation()
      }(TT) && await async function(TT) {
        try {
          const {
            token: UT
          } = await (0, gT.b)(), {
            "3PSIDMCPP": mT
          } = await (0, HT.postJsonWithMetricsCookiesAndJsonResponse)(`${nT.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: UT
          }, {
            retries: 0
          }, TT.getMetricsCookies());
          return TT.setAppAttestedAuthJwt(mT), !0
        } catch (UT) {
          return UT instanceof WT.e && "failed" === UT.code ? (console.warn("The app couldn't get an App Check token:", UT), TT.markAppAttestationTried()) : console.error("Failed to attest the app:", UT), !1
        }
      }(TT)
    }
    async function jT(TT, UT) {
      try {
        return await UT()
      } catch (mT) {
        if (!await kT(TT, mT)) throw mT
      }
      return UT()
    }
  },
  39198: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => LT,
      g: () => jT
    });
    var WT = mT(208),
      zT = mT(1944),
      MT = mT(1308),
      gT = mT(9025);
    const nT = [250, 500, 1e3, 2e3, 1250],
      HT = 406;

    function kT(TT) {
      if ("object" !== typeof TT || null === TT) return !1;
      const {
        code: UT,
        message: mT
      } = TT, zT = WT.e.duplicateLobbyNameError;
      return (UT === zT.code || UT === HT) && (mT === zT.text || mT === zT.text + WT.l)
    }
    async function jT(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zT.d;
      for (let zT = 0;; zT++) {
        let gT;
        (0, MT.m)(UT);
        try {
          return await TT()
        } catch (WT) {
          if (gT = nT[zT], void 0 === gT || !kT(WT)) throw WT
        }
        await mT(gT, UT)
      }
    }
    const lT = new Set([WT.e.duplicateLobbyNameError.code, WT.e.lobbyCantBeCreated.code, WT.e.roomDisposedEarlyError.code, WT.e.roomDisposedLateError.code, WT.e.serverRoomLimitReached.code]);

    function LT(TT) {
      if (kT(TT)) return !0;
      const UT = (0, gT.e)(TT);
      return "number" === typeof UT && lT.has(UT)
    }
  },
  39207: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => HT
    });
    var WT = mT(9025),
      zT = mT(36565),
      MT = mT(39216);
    const gT = {
        seat: "seat_timeout",
        socket_unopened: "socket_timeout_unopened",
        socket: "socket_timeout"
      },
      nT = {
        seat: "seat_lost",
        socket_unopened: "socket_unopened",
        socket: "socket_closed"
      };

    function HT(TT, UT) {
      if (TT instanceof zT.d) return {
        at: gT[UT],
        code: 0
      };
      const mT = (0, WT.e)(TT),
        HT = "number" === typeof mT ? mT : 0;
      return null !== (0, MT.o)(HT).name ? {
        at: "refused",
        code: HT
      } : {
        at: nT[UT],
        code: HT
      }
    }
  },
  9025: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => MT,
      e: () => gT,
      i: () => nT,
      k: () => kT,
      o: () => HT
    });
    var WT = mT(208),
      zT = mT(4719);

    function MT(TT) {
      return gT(TT) === WT.e.gameOrPluginOnPlayerAuthRejected.code
    }

    function gT(TT) {
      return "object" === typeof TT && null !== TT ? TT.code : void 0
    }

    function nT(TT) {
      var UT;
      return null !== (UT = Object.keys(zT.c).find((UT => zT.c[UT] === TT))) && void 0 !== UT ? UT : null
    }

    function HT(TT) {
      return "notWhitelisted" === TT ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const kT = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  36539: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => LT,
      f: () => jT,
      i: () => pT,
      m: () => lT
    });
    var WT = mT(366),
      zT = mT(691),
      MT = mT(703),
      gT = mT(44);
    const nT = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      HT = "playSessionGameNameWithVariation",
      kT = "wasMatchmakePlayer";

    function jT() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gT.m;
      (0, MT.h)(TT, nT)
    }

    function lT() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gT.m).setItem(kT, !0)
    }

    function LT() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gT.m;
      return (0, MT.b)(TT, nT)
    }

    function pT(TT) {
      let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : gT.m;
      const mT = (0, MT.b)(UT, nT),
        jT = function(TT) {
          const UT = TT.getItem(HT);
          return "string" !== typeof UT ? null : UT
        }(UT),
        lT = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gT.m).getItem(kT)
        }(UT);
      let LT;
      return LT = null !== mT && null !== jT && (0, MT.d)(UT, nT) && function(TT, UT, mT) {
          const zT = (0, WT.dc)(TT),
            MT = (0, WT.dc)(UT),
            gT = (0, WT._b)(TT),
            nT = (0, WT._b)(UT);
          return !(zT !== MT || !mT) || zT === MT && gT === nT
        }(jT, TT, lT) ? mT : (0, zT.b)(), (0, MT.l)(UT, nT, LT), UT.setItem(HT, TT),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gT.m).removeItem(kT)
        }(UT), LT
    }
  },
  36534: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => bT,
      f: () => OT
    });
    var WT = mT(1089),
      zT = mT(218),
      MT = mT(363),
      gT = mT(662),
      nT = mT(366),
      HT = mT(1091),
      kT = mT(681),
      jT = mT(712),
      lT = mT(4629),
      LT = mT(102),
      pT = mT(133),
      BT = mT(1863),
      ZT = mT(115),
      cT = mT(36539),
      vT = mT(44),
      fT = mT(696),
      qT = mT(671),
      iT = mT(36546);

    function bT() {
      var TT, UT;
      return [...null !== (TT = navigator.languages) && void 0 !== TT ? TT : [null !== (UT = navigator.language) && void 0 !== UT ? UT : "none"], "en-Gb"]
    }

    function OT(TT, UT, mT, OT, eT) {
      const YT = (0, WT.k)(UT) ? (0, WT.q)(UT) : null,
        JT = TT.isLoggedIn() && void 0 !== (0, zT.b)(MT.n, pT.siteUsed) ? (0, qT.f)() : null,
        xT = {
          cookies: (0, BT.getAllCookiesForGameNameWithVariation)(UT),
          isMobile: (0, LT.isMobile)(),
          isUsingCustomGameTexturePack: null !== YT && eT(YT),
          generalCookies: {
            joinDiscord: !!vT.l.getItem("DiscordPressed"),
            newGo: lT.e,
            ...TT.getMetricsCookies(),
            trafficCode: OT,
            compliance: LT.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, LT.getBrowserName)(),
            version: (0, LT.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, LT.getPlatformType)(),
            deviceType: (0, ZT.b)()
          },
          isLoggedIn: TT.isLoggedIn(),
          lobbyName: mT,
          languages: bT(),
          version: gT.d,
          siteUsed: pT.siteUsed,
          subsiteUsed: pT.subsiteUsed,
          playSessionId: (0, cT.i)(UT),
          visitSessionId: (0, fT.d)(),
          clientReason: kT.r.reason,
          budgetBasis: (0, iT.g)(),
          ...null !== jT.o && {
            diagClaim: jT.o.claimId
          },
          ...null !== JT && {
            webGpuLoss: JT
          }
        };
      return null !== YT && (0, nT.Yc)(YT) ? (xT.lobbyName = (0, WT.g)(YT, (0, WT.m)(UT), mT), {
        roomName: `classic_${HT.f}`,
        joinOptions: xT
      }) : {
        roomName: UT,
        joinOptions: xT
      }
    }
  },
  39228: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => pT,
      c: () => LT
    });
    const WT = "ue:",
      zT = ["keydown", "keyup", "mousedown", "mouseup", "pointerdown", "pointerup", "touchstart", "touchend"],
      MT = "[A-Za-z0-9]{1,24}",
      gT = 15,
      nT = new RegExp(`^${MT}$`);
    new RegExp(`^${WT}(${[...zT,"other"].join("|")}):(?:n|k(${MT})|b(0|[1-9][0-9]?)):([01])([01])$`);

    function HT(TT, UT, mT, MT, HT) {
      const kT = "string" === typeof TT && zT.includes(TT) ? TT : "other";
      let jT = "n";
      return "string" === typeof UT ? jT = nT.test(UT) ? `k${UT}` : "n" : "number" === typeof mT && Number.isInteger(mT) && mT >= 0 && mT <= gT && (jT = `b${mT}`), `${WT}${kT}:${jT}:${MT?1:0}${HT?1:0}`
    }
    var kT = mT(1783),
      jT = mT(1870);
    let lT = null;

    function LT(TT) {
      const UT = TT instanceof Element && TT !== document.body && TT !== document.documentElement && !(0, kT.q)(TT) && !TT.closest("#root");
      return {
        editable: (0, jT.e)(TT),
        outsideView: UT
      }
    }

    function pT(TT) {
      return lT ??= function(TT) {
        try {
          const {
            editable: UT,
            outsideView: mT
          } = LT(TT.target), WT = TT;
          return HT(TT.type, WT.code, WT.button, UT, mT)
        } catch {
          return HT(null, null, null, !1, !1)
        }
      }(TT), lT
    }
  },
  39216: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => zT,
      g: () => MT,
      k: () => nT,
      o: () => jT,
      p: () => HT,
      s: () => gT
    });
    var WT = mT(208);
    const zT = 3e3,
      MT = 15e3;

    function gT(TT) {
      const UT = TT.endsWith(WT.l);
      return {
        text: (UT ? TT.slice(0, -WT.l.length) : TT) || null,
        dropsCache: UT
      }
    }
    const nT = "Either your internet isn't working or this is a bug.";

    function HT(TT, UT) {
      const mT = jT(TT);
      return null !== mT.name && "" === WT.e[mT.name].text && null !== UT ? UT : mT.reason
    }
    const kT = "You were removed from the game.";

    function jT(TT) {
      var UT;
      let mT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const zT = null !== (UT = Object.keys(WT.e).find((UT => WT.e[UT].code === TT))) && void 0 !== UT ? UT : null;
      if (null === zT) return {
        code: TT,
        name: zT,
        reason: null !== mT && void 0 !== mT ? mT : `${nT}\nCode: ${TT}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: MT,
        canReconnect: gT = !1
      } = WT.e[zT], HT = TT === WT.e.outdatedVersion.code || TT === WT.e.loadRecaptchaError.code;
      return {
        code: TT,
        name: zT,
        reason: "" !== MT ? MT : null !== mT && void 0 !== mT ? mT : TT === WT.e.gameOrPluginKick.code ? kT : `Code: ${TT}`,
        canReconnect: gT,
        automaticallyReconnect: TT === WT.e.customGameUpdated.code || TT === WT.e.duplicateLobbyNameError.code,
        requiresRefresh: HT
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);