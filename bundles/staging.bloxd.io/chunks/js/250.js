export const id = 250;
export const ids = [250];
export const modules = {
  37527: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => tW,
      g: () => LW,
      j: () => wW,
      n: () => cW,
      p: () => sW
    });
    var mW = OW(649),
      EW = OW(1876),
      NW = OW(5551);
    class PW {
      constructor(WW, iW) {
        this.width = WW, this.aZ = iW, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(WW * iW)
      }
      push(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const OW = this.data,
          mW = this.next * this.width;
        for (let EW = 0; EW < this.width; EW++) OW[mW + EW] = WW[iW + EW];
        this.next = (this.next + 1) % this.aZ, this.size = Math.min(this.size + 1, this.aZ)
      }
      rows() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1 / 0;
        const OW = [],
          mW = (this.next - this.size + this.aZ) % this.aZ;
        for (let EW = 0; EW < this.size; EW++) {
          const NW = (mW + EW) % this.aZ * this.width;
          this.data[NW + WW] >= iW && OW.push(Array.from(this.data.subarray(NW, NW + this.width)))
        }
        return OW
      }
      lines() {
        return this.rows().map((WW => WW.join(",")))
      }
    }
    const LW = 10,
      cW = {
        idle: 0,
        EZ: 1,
        mD: 2,
        ZD: 3,
        Yj: 4
      },
      wW = {
        none: 0,
        skipped: 1,
        paced: 2,
        drawn: 3
      },
      tW = {
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
      ZW = 12e3,
      xW = ["nowMs", "dtMs", "rawX", "rawY", "turnedX", "turnedY", "outcome", "velocityX", "velocityY", "limit"],
      lW = ["timeStamp", "nowMs", "movementX", "movementY", "locked"],
      AW = ["nowMs", "dtMs", "heading", "pitch", "kind"],
      bW = ["nowMs", "source", "headingBefore", "pitchBefore", "headingAfter", "pitchAfter"],
      jW = ["nowMs", "change", "count"];

    function UW(WW) {
      return "js" === WW ? tW.jsClient : tW.wasmClient
    }
    class kW {
      constructor() {
        this.steps = new PW(LW, ZW), this.events = new PW(lW.length, ZW), this.frames = new PW(AW.length, ZW), this.cameraSets = new PW(NW.e, 256), this.changes = new PW(jW.length, 256)
      }
    }
    const sW = new class {
      constructor() {
        this.rings = null, this.sample = new Float64Array(lW.length), this.startedClient = null, this.startedAtMs = 0
      }
      get client() {
        return this.startedClient
      }
      start(WW, iW) {
        this.startedClient = WW, this.startedAtMs = performance.now(), null !== this.rings ? this.change(UW(WW)) : iW && this.allocate()
      }
      lockGained() {
        this.allocate(), this.change(tW.lockGained)
      }
      allocate() {
        null === this.rings && (this.rings = new kW, null !== this.startedClient && this.changeAt(this.startedAtMs, UW(this.startedClient), 1))
      }
      step(WW, iW) {
        var OW;
        WW[iW + 6] !== cW.Yj && (null === (OW = this.rings) || void 0 === OW || OW.steps.push(WW, iW))
      }
      cameraSet(WW, iW) {
        var OW;
        null === (OW = this.rings) || void 0 === OW || OW.cameraSets.push(WW, iW)
      }
      mouseMove(WW, iW) {
        const OW = this.rings;
        if (null === OW) return;
        const mW = this.sample;
        mW[0] = WW.timeStamp, mW[1] = performance.now(), mW[2] = WW.movementX, mW[3] = WW.movementY, mW[4] = iW ? 1 : 0, OW.events.push(mW)
      }
      frame(WW, iW, OW, mW) {
        const EW = this.rings;
        if (null === EW || mW === wW.none) return;
        const NW = this.sample;
        NW[0] = performance.now(), NW[1] = WW, NW[2] = iW, NW[3] = OW, NW[4] = mW, EW.frames.push(NW)
      }
      change(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.changeAt(performance.now(), WW, iW)
      }
      changeAt(WW, iW, OW) {
        const mW = this.rings;
        if (null === mW) return;
        const EW = this.sample;
        EW[0] = WW, EW[1] = iW, EW[2] = OW, mW.changes.push(EW)
      }
      dumpText() {
        var WW, iW;
        const OW = this.rings;
        return [`look records (${this.startedClient}): ${xW.join(",")}`, ...null !== (WW = null === OW || void 0 === OW ? void 0 : OW.steps.lines()) && void 0 !== WW ? WW : [], `mousemove events: ${lW.join(",")}`, ...null !== (iW = null === OW || void 0 === OW ? void 0 : OW.events.lines()) && void 0 !== iW ? iW : []].join("\n")
      }
      toJson(WW, iW) {
        var OW;
        const EW = WW - 6e4,
          NW = this.rings,
          PW = function(WW, iW) {
            var OW;
            let mW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            const NW = null !== (OW = null === WW || void 0 === WW ? void 0 : WW.rows(mW, EW)) && void 0 !== OW ? OW : [];
            return {
              columns: iW,
              fromMs: 0 === NW.length ? null : NW[0][mW],
              rows: NW
            }
          };
        return {
          version: mW.d,
          client: null !== (OW = this.startedClient) && void 0 !== OW ? OW : "not started",
          savedAt: (new Date).toISOString(),
          savedAtMs: WW,
          keptMs: 6e4,
          page: window.location.href,
          userAgent: navigator.userAgent,
          devicePixelRatio: window.devicePixelRatio,
          screen: {
            width: window.screen.width,
            height: window.screen.height
          },
          PU: null !== document.pointerLockElement,
          visibility: document.visibilityState,
          ...iW,
          outcomes: cW,
          frameKinds: wW,
          changes: tW,
          lookSteps: PW(null === NW || void 0 === NW ? void 0 : NW.steps, xW),
          mouseMoves: PW(null === NW || void 0 === NW ? void 0 : NW.events, lW, 1),
          frames: PW(null === NW || void 0 === NW ? void 0 : NW.frames, AW),
          cameraSets: PW(null === NW || void 0 === NW ? void 0 : NW.cameraSets, bW),
          pageChanges: PW(null === NW || void 0 === NW ? void 0 : NW.changes, jW)
        }
      }
      save(WW) {
        const iW = JSON.stringify(this.toJson(performance.now(), WW));
        (0, EW.e)(new Blob([iW], {
          type: "application/json"
        }), `bloxd-mouse-look-${(new Date).toISOString().replace(/[:.]/g,"-")}.json`)
      }
    }
  },
  37518: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      LOOK_DEBUG_HEADER: () => tW,
      endLookDebugTake: () => UW,
      noteLookDroppedCopy: () => kW,
      saveLookCapture: () => sW,
      startLookDebug: () => jW
    });
    var mW = OW(5551),
      EW = OW(3866),
      NW = OW(2012);
    const PW = new Map(Object.entries(mW.k).map((WW => {
      let [iW, OW] = WW;
      return [OW, iW]
    })));

    function LW(WW) {
      return (0, NW.x)(WW).toFixed(1)
    }

    function cW(WW, iW) {
      return `camera set by ${PW.get(WW[iW+1])}: heading ${`${LW(WW[iW+2])} -> ${LW(WW[iW+4])}`} deg, pitch ${`${LW(WW[iW+3])} -> ${LW(WW[iW+5])}`} deg, at ${WW[iW].toFixed(1)} ms`
    }
    var wW = OW(37527);
    const tW = 2;

    function ZW(WW) {
      return Number.isFinite(WW) ? String(Math.round(10 * WW) / 10) : String(WW)
    }

    function xW(WW) {
      return Number.isFinite(WW) ? WW.toFixed(1) : String(WW)
    }
    class lW {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.mD = 0, this.pastLimit = 0, this.lockSkips = 0, this.Yj = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.cameraSets = 0, this.cameraSetsLost = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
      moved() {
        return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.mD > 0 || this.dropped > 0 || this.cameraSets > 0
      }
      hasEvent() {
        return this.mD > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
      }
    }
    class AW {
      constructor() {
        var WW = this;
        this.topicOn = (0, EW.t)("look"), this.remote = (0, EW.x)(), this.tally = new lW, this.takes = null, this.started = !1, this.record = function(iW) {
          let OW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          if (wW.p.step(iW, OW), !WW.topicOn) return;
          const mW = iW[OW],
            EW = iW[OW + 1],
            NW = iW[OW + 2],
            PW = iW[OW + 3],
            LW = iW[OW + 4],
            cW = iW[OW + 5],
            tW = iW[OW + 6],
            lW = iW[OW + 7],
            AW = iW[OW + 8],
            bW = iW[OW + 9],
            jW = WW.tally;
          switch (jW.frames++, tW) {
            case wW.n.idle:
              return void jW.idle++;
            case wW.n.Yj:
              return void jW.Yj++;
            case wW.n.ZD:
              return jW.lockSkips++, void(0 === NW && 0 === PW || WW.outlier(`lock skip dropped raw (${ZW(NW)}, ${ZW(PW)}) at ${xW(mW)} ms`))
          }
          jW.looked++, Number.isFinite(EW) && (jW.dtMin = Math.min(jW.dtMin, EW), jW.dtMax = Math.max(jW.dtMax, EW), jW.dtSum += EW, EW > 0 && (jW.peakRate = Math.max(jW.peakRate, Math.hypot(LW, cW) / EW))), jW.raw[0] += NW, jW.raw[1] += PW, jW.turned[0] += LW, jW.turned[1] += cW;
          const UW = Math.abs(NW) > bW || Math.abs(PW) > bW,
            kW = `raw (${ZW(NW)}, ${ZW(PW)}) over ${xW(EW)} ms, limit ${ZW(bW)}, filter v (${lW.toFixed(3)}, ${AW.toFixed(3)}) px/ms, at ${xW(mW)} ms`;
          tW === wW.n.mD ? (jW.mD++, WW.outlier(`spike put right: ${kW} -> turned (${ZW(LW)}, ${ZW(cW)})`)) : UW ? (jW.pastLimit++, WW.outlier(`kept past limit: ${kW}`)) : EW > 50 && (jW.longFrames++, WW.remote || WW.outlier(`long frame: ${kW}, turned in full`))
        }, this.onMouseMove = WW => {
          const iW = null !== document.pointerLockElement;
          if (wW.p.mouseMove(WW, iW), !this.topicOn) return;
          const OW = this.tally,
            {
              movementX: mW,
              movementY: EW
            } = WW;
          OW.events++;
          const NW = Math.max(Math.abs(mW), Math.abs(EW));
          OW.eventMax = Math.max(OW.eventMax, NW), NW >= 200 && (OW.bigEvents++, this.eventOutlier(`big mousemove (${mW}, ${EW}) at ${xW(WW.timeStamp)} ms, lock ${iW?"BL":"free"}`))
        }, this.onLockChange = () => {
          const WW = document.pointerLockElement;
          WW ? wW.p.lockGained() : wW.p.change(wW.c.lockLost), this.topicOn && (0, EW.m)("look", `pointer lock ${WW?`gained (${WW.tagName.toLowerCase()})`:"lost"} at ${xW(performance.now())} ms`)
        }, this.onLockError = () => {
          wW.p.change(wW.c.lockError), this.topicOn && (0, EW.m)("look", `pointer lock request failed at ${xW(performance.now())} ms`)
        }, this.onVisibility = () => {
          wW.p.change("hidden" === document.visibilityState ? wW.c.hidden : wW.c.visible), this.topicOn && (0, EW.m)("look", `page ${document.visibilityState} at ${xW(performance.now())} ms`)
        }, this.onFocus = () => {
          wW.p.change(wW.c.focus)
        }, this.onBlur = () => {
          wW.p.change(wW.c.blur)
        }, this.flush = () => {
          if (this.takeRecords(), !this.topicOn) return;
          const WW = this.tally;
          if (this.tally = new lW, !WW.moved() || this.remote && !WW.hasEvent()) return;
          const iW = WW.looked > 0 ? WW.dtSum / WW.looked : NaN,
            OW = [`${WW.frames} frames (${WW.looked} looked, ${WW.idle} idle${"wasm"===wW.p.client?`, ${WW.Yj} carried`:""})`, `dt avg ${xW(iW)} min ${xW(WW.dtMin)} max ${xW(WW.dtMax)}, ${WW.longFrames} long`, `${WW.events} mousemoves (max ${ZW(WW.eventMax)} px, ${WW.bigEvents} big)`, `raw (${ZW(WW.raw[0])}, ${ZW(WW.raw[1])}) turned (${ZW(WW.turned[0])}, ${ZW(WW.turned[1])})`, `peak ${WW.peakRate.toFixed(2)} px/ms`, `put right ${WW.mD}, past limit ${WW.pastLimit}, lock skips ${WW.lockSkips}`, "lock " + (document.pointerLockElement ? "BL" : "free")];
          WW.dropped > 0 && OW.push(`${WW.dropped} doubled spike copies dropped`), WW.cameraSets > 0 && OW.push(`${WW.cameraSets} camera sets`), WW.cameraSetsLost > 0 && OW.push(`${WW.cameraSetsLost} camera set records lost`), WW.lost > 0 && OW.push(`${WW.lost} records lost`), WW.suppressed > 0 && OW.push(`${WW.suppressed} outlier lines not shown`), (0, EW.m)("look", `1s: ${OW.join("; ")}`)
        }
      }
      start(WW, iW) {
        if (wW.p.start(WW, null !== document.pointerLockElement), this.takes = iW, this.topicOn) {
          const {
            screen: iW
          } = window;
          (0, EW.m)("look", `start: ${WW} client, dpr ${window.devicePixelRatio}, screen ${iW.width}x${iW.height}, pointer lock ${document.pointerLockElement?"BL":"free"}`)
        }
        this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), window.addEventListener("focus", this.onFocus), window.addEventListener("blur", this.onBlur), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), this.topicOn && !this.remote && (0, EW.l)("look", (() => wW.p.dumpText())))
      }
      outlier(WW) {
        const iW = this.tally;
        iW.outliers >= 20 ? iW.suppressed++ : (iW.outliers++, (0, EW.m)("look", WW))
      }
      eventOutlier(WW) {
        const iW = this.tally;
        iW.eventLines >= 10 ? iW.suppressed++ : (iW.eventLines++, (0, EW.m)("look", WW))
      }
      takeRecords() {
        if (null === this.takes) return;
        const WW = this.takes.look();
        if (WW.length >= tW) {
          this.counted(wW.c.stepsLost, WW[0]), this.counted(wW.c.droppedCopies, WW[1]);
          for (let iW = tW; iW + wW.g <= WW.length; iW += wW.g) this.record(WW, iW)
        }
        const iW = this.takes.cameraSets();
        if (iW.length >= mW.c) {
          this.counted(wW.c.cameraSetsLost, iW[0]);
          for (let WW = mW.c; WW + mW.e <= iW.length; WW += mW.e) wW.p.cameraSet(iW, WW), this.topicOn && (this.tally.cameraSets++, this.outlier(cW(iW, WW)))
        }
      }
      droppedCopy() {
        this.counted(wW.c.droppedCopies, 1)
      }
      counted(WW, iW) {
        if (0 === iW) return;
        if (wW.p.change(WW, iW), !this.topicOn) return;
        const OW = this.tally;
        WW === wW.c.droppedCopies ? OW.dropped += iW : WW === wW.c.stepsLost ? OW.lost += iW : OW.cameraSetsLost += iW
      }
      endTake() {
        this.takeRecords(), this.takes = null
      }
    }
    let bW = null;

    function jW(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return bW ??= new AW, bW.start(WW, iW), bW.record
    }

    function UW() {
      var WW;
      null === (WW = bW) || void 0 === WW || WW.endTake()
    }

    function kW() {
      var WW;
      null === (WW = bW) || void 0 === WW || WW.droppedCopy()
    }
    async function sW(WW) {
      var iW;
      null === (iW = bW) || void 0 === iW || iW.takeRecords();
      const {
        clientHintsRead: mW,
        debugDeviceLines: EW
      } = await OW.e(35).then((() => OW(35106)));
      await mW, wW.p.save({
        ...WW,
        device: EW()
      })
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);