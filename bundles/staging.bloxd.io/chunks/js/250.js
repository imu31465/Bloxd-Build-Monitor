export const id = 250;
export const ids = [250];
export const modules = {
  37433: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => VR,
      g: () => qR,
      i: () => fR,
      l: () => iR,
      o: () => WR
    });
    var yR = GR(688),
      tR = GR(1963),
      uR = GR(5685);
    class ZR {
      constructor(RR, JR) {
        this.width = RR, this.hK = JR, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(RR * JR)
      }
      push(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const GR = this.data,
          yR = this.next * this.width;
        for (let tR = 0; tR < this.width; tR++) GR[yR + tR] = RR[JR + tR];
        this.next = (this.next + 1) % this.hK, this.size = Math.min(this.size + 1, this.hK)
      }
      rows() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1 / 0;
        const GR = [],
          yR = (this.next - this.size + this.hK) % this.hK;
        for (let tR = 0; tR < this.size; tR++) {
          const uR = (yR + tR) % this.hK * this.width;
          this.data[uR + RR] >= JR && GR.push(Array.from(this.data.subarray(uR, uR + this.width)))
        }
        return GR
      }
      lines() {
        return this.rows().map((RR => RR.join(",")))
      }
    }
    const qR = 10,
      iR = {
        idle: 0,
        tK: 1,
        xH: 2,
        IH: 3,
        lL: 4
      },
      fR = {
        none: 0,
        skipped: 1,
        paced: 2,
        drawn: 3
      },
      VR = {
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
      KR = 12e3,
      wR = ["nowMs", "dtMs", "rawX", "rawY", "turnedX", "turnedY", "outcome", "velocityX", "velocityY", "limit"],
      rR = ["timeStamp", "nowMs", "movementX", "movementY", "locked"],
      eR = ["nowMs", "dtMs", "heading", "pitch", "kind"],
      aR = ["nowMs", "source", "headingBefore", "pitchBefore", "headingAfter", "pitchAfter"],
      LR = ["nowMs", "change", "count"];

    function nR(RR) {
      return "js" === RR ? VR.jsClient : VR.wasmClient
    }
    class UR {
      constructor() {
        this.steps = new ZR(qR, KR), this.events = new ZR(rR.length, KR), this.frames = new ZR(eR.length, KR), this.cameraSets = new ZR(uR.e, 256), this.changes = new ZR(LR.length, 256)
      }
    }
    const WR = new class {
      constructor() {
        this.rings = null, this.sample = new Float64Array(rR.length), this.startedClient = null, this.startedAtMs = 0
      }
      get client() {
        return this.startedClient
      }
      start(RR, JR) {
        this.startedClient = RR, this.startedAtMs = performance.now(), null !== this.rings ? this.change(nR(RR)) : JR && this.allocate()
      }
      lockGained() {
        this.allocate(), this.change(VR.lockGained)
      }
      allocate() {
        null === this.rings && (this.rings = new UR, null !== this.startedClient && this.changeAt(this.startedAtMs, nR(this.startedClient), 1))
      }
      step(RR, JR) {
        var GR;
        RR[JR + 6] !== iR.lL && (null === (GR = this.rings) || void 0 === GR || GR.steps.push(RR, JR))
      }
      cameraSet(RR, JR) {
        var GR;
        null === (GR = this.rings) || void 0 === GR || GR.cameraSets.push(RR, JR)
      }
      mouseMove(RR, JR) {
        const GR = this.rings;
        if (null === GR) return;
        const yR = this.sample;
        yR[0] = RR.timeStamp, yR[1] = performance.now(), yR[2] = RR.movementX, yR[3] = RR.movementY, yR[4] = JR ? 1 : 0, GR.events.push(yR)
      }
      frame(RR, JR, GR, yR) {
        const tR = this.rings;
        if (null === tR || yR === fR.none) return;
        const uR = this.sample;
        uR[0] = performance.now(), uR[1] = RR, uR[2] = JR, uR[3] = GR, uR[4] = yR, tR.frames.push(uR)
      }
      change(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.changeAt(performance.now(), RR, JR)
      }
      changeAt(RR, JR, GR) {
        const yR = this.rings;
        if (null === yR) return;
        const tR = this.sample;
        tR[0] = RR, tR[1] = JR, tR[2] = GR, yR.changes.push(tR)
      }
      dumpText() {
        var RR, JR;
        const GR = this.rings;
        return [`look records (${this.startedClient}): ${wR.join(",")}`, ...null !== (RR = null === GR || void 0 === GR ? void 0 : GR.steps.lines()) && void 0 !== RR ? RR : [], `mousemove events: ${rR.join(",")}`, ...null !== (JR = null === GR || void 0 === GR ? void 0 : GR.events.lines()) && void 0 !== JR ? JR : []].join("\n")
      }
      toJson(RR, JR) {
        var GR;
        const tR = RR - 6e4,
          uR = this.rings,
          ZR = function(RR, JR) {
            var GR;
            let yR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            const uR = null !== (GR = null === RR || void 0 === RR ? void 0 : RR.rows(yR, tR)) && void 0 !== GR ? GR : [];
            return {
              columns: JR,
              fromMs: 0 === uR.length ? null : uR[0][yR],
              rows: uR
            }
          };
        return {
          version: yR.d,
          client: null !== (GR = this.startedClient) && void 0 !== GR ? GR : "not started",
          savedAt: (new Date).toISOString(),
          savedAtMs: RR,
          keptMs: 6e4,
          page: window.location.href,
          userAgent: navigator.userAgent,
          devicePixelRatio: window.devicePixelRatio,
          screen: {
            width: window.screen.width,
            height: window.screen.height
          },
          un: null !== document.pointerLockElement,
          visibility: document.visibilityState,
          ...JR,
          outcomes: iR,
          frameKinds: fR,
          changes: VR,
          lookSteps: ZR(null === uR || void 0 === uR ? void 0 : uR.steps, wR),
          mouseMoves: ZR(null === uR || void 0 === uR ? void 0 : uR.events, rR, 1),
          frames: ZR(null === uR || void 0 === uR ? void 0 : uR.frames, eR),
          cameraSets: ZR(null === uR || void 0 === uR ? void 0 : uR.cameraSets, aR),
          pageChanges: ZR(null === uR || void 0 === uR ? void 0 : uR.changes, LR)
        }
      }
      save(RR) {
        const JR = JSON.stringify(this.toJson(performance.now(), RR));
        (0, tR.e)(new Blob([JR], {
          type: "application/json"
        }), `bloxd-mouse-look-${(new Date).toISOString().replace(/[:.]/g,"-")}.json`)
      }
    }
  },
  37431: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      LOOK_DEBUG_HEADER: () => VR,
      endLookDebugTake: () => nR,
      noteLookDroppedCopy: () => UR,
      saveLookCapture: () => WR,
      startLookDebug: () => LR
    });
    var yR = GR(5685),
      tR = GR(3960),
      uR = GR(2102);
    const ZR = new Map(Object.entries(yR.m).map((RR => {
      let [JR, GR] = RR;
      return [GR, JR]
    })));

    function qR(RR) {
      return (0, uR.y)(RR).toFixed(1)
    }

    function iR(RR, JR) {
      return `camera set by ${ZR.get(RR[JR+1])}: heading ${`${qR(RR[JR+2])} -> ${qR(RR[JR+4])}`} deg, pitch ${`${qR(RR[JR+3])} -> ${qR(RR[JR+5])}`} deg, at ${RR[JR].toFixed(1)} ms`
    }
    var fR = GR(37433);
    const VR = 2;

    function KR(RR) {
      return Number.isFinite(RR) ? String(Math.round(10 * RR) / 10) : String(RR)
    }

    function wR(RR) {
      return Number.isFinite(RR) ? RR.toFixed(1) : String(RR)
    }
    class rR {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.xH = 0, this.pastLimit = 0, this.lockSkips = 0, this.lL = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.cameraSets = 0, this.cameraSetsLost = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
      moved() {
        return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.xH > 0 || this.dropped > 0 || this.cameraSets > 0
      }
      hasEvent() {
        return this.xH > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
      }
    }
    class eR {
      constructor() {
        var RR = this;
        this.topicOn = (0, tR.n)("look"), this.remote = (0, tR.p)(), this.tally = new rR, this.takes = null, this.started = !1, this.record = function(JR) {
          let GR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          if (fR.o.step(JR, GR), !RR.topicOn) return;
          const yR = JR[GR],
            tR = JR[GR + 1],
            uR = JR[GR + 2],
            ZR = JR[GR + 3],
            qR = JR[GR + 4],
            iR = JR[GR + 5],
            VR = JR[GR + 6],
            rR = JR[GR + 7],
            eR = JR[GR + 8],
            aR = JR[GR + 9],
            LR = RR.tally;
          switch (LR.frames++, VR) {
            case fR.l.idle:
              return void LR.idle++;
            case fR.l.lL:
              return void LR.lL++;
            case fR.l.IH:
              return LR.lockSkips++, void(0 === uR && 0 === ZR || RR.outlier(`lock skip dropped raw (${KR(uR)}, ${KR(ZR)}) at ${wR(yR)} ms`))
          }
          LR.looked++, Number.isFinite(tR) && (LR.dtMin = Math.min(LR.dtMin, tR), LR.dtMax = Math.max(LR.dtMax, tR), LR.dtSum += tR, tR > 0 && (LR.peakRate = Math.max(LR.peakRate, Math.hypot(qR, iR) / tR))), LR.raw[0] += uR, LR.raw[1] += ZR, LR.turned[0] += qR, LR.turned[1] += iR;
          const nR = Math.abs(uR) > aR || Math.abs(ZR) > aR,
            UR = `raw (${KR(uR)}, ${KR(ZR)}) over ${wR(tR)} ms, limit ${KR(aR)}, filter v (${rR.toFixed(3)}, ${eR.toFixed(3)}) px/ms, at ${wR(yR)} ms`;
          VR === fR.l.xH ? (LR.xH++, RR.outlier(`spike put right: ${UR} -> turned (${KR(qR)}, ${KR(iR)})`)) : nR ? (LR.pastLimit++, RR.outlier(`kept past limit: ${UR}`)) : tR > 50 && (LR.longFrames++, RR.remote || RR.outlier(`long frame: ${UR}, turned in full`))
        }, this.onMouseMove = RR => {
          const JR = null !== document.pointerLockElement;
          if (fR.o.mouseMove(RR, JR), !this.topicOn) return;
          const GR = this.tally,
            {
              movementX: yR,
              movementY: tR
            } = RR;
          GR.events++;
          const uR = Math.max(Math.abs(yR), Math.abs(tR));
          GR.eventMax = Math.max(GR.eventMax, uR), uR >= 200 && (GR.bigEvents++, this.eventOutlier(`big mousemove (${yR}, ${tR}) at ${wR(RR.timeStamp)} ms, lock ${JR?"Qq":"free"}`))
        }, this.onLockChange = () => {
          const RR = document.pointerLockElement;
          RR ? fR.o.lockGained() : fR.o.change(fR.e.lockLost), this.topicOn && (0, tR.k)("look", `pointer lock ${RR?`gained (${RR.tagName.toLowerCase()})`:"lost"} at ${wR(performance.now())} ms`)
        }, this.onLockError = () => {
          fR.o.change(fR.e.lockError), this.topicOn && (0, tR.k)("look", `pointer lock request failed at ${wR(performance.now())} ms`)
        }, this.onVisibility = () => {
          fR.o.change("hidden" === document.visibilityState ? fR.e.hidden : fR.e.visible), this.topicOn && (0, tR.k)("look", `page ${document.visibilityState} at ${wR(performance.now())} ms`)
        }, this.onFocus = () => {
          fR.o.change(fR.e.focus)
        }, this.onBlur = () => {
          fR.o.change(fR.e.blur)
        }, this.flush = () => {
          if (this.takeRecords(), !this.topicOn) return;
          const RR = this.tally;
          if (this.tally = new rR, !RR.moved() || this.remote && !RR.hasEvent()) return;
          const JR = RR.looked > 0 ? RR.dtSum / RR.looked : NaN,
            GR = [`${RR.frames} frames (${RR.looked} looked, ${RR.idle} idle${"wasm"===fR.o.client?`, ${RR.lL} carried`:""})`, `dt avg ${wR(JR)} min ${wR(RR.dtMin)} max ${wR(RR.dtMax)}, ${RR.longFrames} long`, `${RR.events} mousemoves (max ${KR(RR.eventMax)} px, ${RR.bigEvents} big)`, `raw (${KR(RR.raw[0])}, ${KR(RR.raw[1])}) turned (${KR(RR.turned[0])}, ${KR(RR.turned[1])})`, `peak ${RR.peakRate.toFixed(2)} px/ms`, `put right ${RR.xH}, past limit ${RR.pastLimit}, lock skips ${RR.lockSkips}`, "lock " + (document.pointerLockElement ? "Qq" : "free")];
          RR.dropped > 0 && GR.push(`${RR.dropped} doubled spike copies dropped`), RR.cameraSets > 0 && GR.push(`${RR.cameraSets} camera sets`), RR.cameraSetsLost > 0 && GR.push(`${RR.cameraSetsLost} camera set records lost`), RR.lost > 0 && GR.push(`${RR.lost} records lost`), RR.suppressed > 0 && GR.push(`${RR.suppressed} outlier lines not shown`), (0, tR.k)("look", `1s: ${GR.join("; ")}`)
        }
      }
      start(RR, JR) {
        if (fR.o.start(RR, null !== document.pointerLockElement), this.takes = JR, this.topicOn) {
          const {
            screen: JR
          } = window;
          (0, tR.k)("look", `start: ${RR} client, dpr ${window.devicePixelRatio}, screen ${JR.width}x${JR.height}, pointer lock ${document.pointerLockElement?"Qq":"free"}`)
        }
        this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), window.addEventListener("focus", this.onFocus), window.addEventListener("blur", this.onBlur), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), this.topicOn && !this.remote && (0, tR.i)("look", (() => fR.o.dumpText())))
      }
      outlier(RR) {
        const JR = this.tally;
        JR.outliers >= 20 ? JR.suppressed++ : (JR.outliers++, (0, tR.k)("look", RR))
      }
      eventOutlier(RR) {
        const JR = this.tally;
        JR.eventLines >= 10 ? JR.suppressed++ : (JR.eventLines++, (0, tR.k)("look", RR))
      }
      takeRecords() {
        if (null === this.takes) return;
        const RR = this.takes.look();
        if (RR.length >= VR) {
          this.counted(fR.e.stepsLost, RR[0]), this.counted(fR.e.droppedCopies, RR[1]);
          for (let JR = VR; JR + fR.g <= RR.length; JR += fR.g) this.record(RR, JR)
        }
        const JR = this.takes.cameraSets();
        if (JR.length >= yR.b) {
          this.counted(fR.e.cameraSetsLost, JR[0]);
          for (let RR = yR.b; RR + yR.e <= JR.length; RR += yR.e) fR.o.cameraSet(JR, RR), this.topicOn && (this.tally.cameraSets++, this.outlier(iR(JR, RR)))
        }
      }
      droppedCopy() {
        this.counted(fR.e.droppedCopies, 1)
      }
      counted(RR, JR) {
        if (0 === JR) return;
        if (fR.o.change(RR, JR), !this.topicOn) return;
        const GR = this.tally;
        RR === fR.e.droppedCopies ? GR.dropped += JR : RR === fR.e.stepsLost ? GR.lost += JR : GR.cameraSetsLost += JR
      }
      endTake() {
        this.takeRecords(), this.takes = null
      }
    }
    let aR = null;

    function LR(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return aR ??= new eR, aR.start(RR, JR), aR.record
    }

    function nR() {
      var RR;
      null === (RR = aR) || void 0 === RR || RR.endTake()
    }

    function UR() {
      var RR;
      null === (RR = aR) || void 0 === RR || RR.droppedCopy()
    }
    async function WR(RR) {
      var JR;
      null === (JR = aR) || void 0 === JR || JR.takeRecords();
      const {
        clientHintsRead: yR,
        debugDeviceLines: tR
      } = await GR.e(35).then((() => GR(35016)));
      await yR, fR.o.save({
        ...RR,
        device: tR()
      })
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);