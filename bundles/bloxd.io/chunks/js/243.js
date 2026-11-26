export const id = 243;
export const ids = [243];
export const modules = {
  37250: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => EH,
      c: () => tH,
      d: () => CH,
      e: () => zH,
      f: () => vH
    });
    var AH = LH(625),
      rH = LH(1807),
      SH = LH(5268);
    class hH {
      constructor(HH, BH) {
        this.width = HH, this.aX = BH, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(HH * BH)
      }
      push(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const LH = this.data,
          AH = this.next * this.width;
        for (let rH = 0; rH < this.width; rH++) LH[AH + rH] = HH[BH + rH];
        this.next = (this.next + 1) % this.aX, this.size = Math.min(this.size + 1, this.aX)
      }
      rows() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1 / 0;
        const LH = [],
          AH = (this.next - this.size + this.aX) % this.aX;
        for (let rH = 0; rH < this.size; rH++) {
          const SH = (AH + rH) % this.aX * this.width;
          this.data[SH + HH] >= BH && LH.push(Array.from(this.data.subarray(SH, SH + this.width)))
        }
        return LH
      }
      lines() {
        return this.rows().map((HH => HH.join(",")))
      }
    }
    const tH = 10,
      zH = {
        idle: 0,
        hX: 1,
        qN: 2,
        ZN: 3,
        XW: 4
      },
      CH = {
        none: 0,
        skipped: 1,
        paced: 2,
        drawn: 3
      },
      EH = {
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
      XH = 12e3,
      GH = ["nowMs", "dtMs", "rawX", "rawY", "turnedX", "turnedY", "outcome", "velocityX", "velocityY", "limit"],
      YH = ["timeStamp", "nowMs", "movementX", "movementY", "locked"],
      uH = ["nowMs", "dtMs", "heading", "pitch", "kind"],
      QH = ["nowMs", "source", "headingBefore", "pitchBefore", "headingAfter", "pitchAfter"],
      WH = ["nowMs", "change", "count"];

    function MH(HH) {
      return "js" === HH ? EH.jsClient : EH.wasmClient
    }
    class xH {
      constructor() {
        this.steps = new hH(tH, XH), this.events = new hH(YH.length, XH), this.frames = new hH(uH.length, XH), this.cameraSets = new hH(SH.d, 256), this.changes = new hH(WH.length, 256)
      }
    }
    const vH = new class {
      constructor() {
        this.rings = null, this.sample = new Float64Array(YH.length), this.startedClient = null, this.startedAtMs = 0
      }
      get client() {
        return this.startedClient
      }
      start(HH, BH) {
        this.startedClient = HH, this.startedAtMs = performance.now(), null !== this.rings ? this.change(MH(HH)) : BH && this.allocate()
      }
      lockGained() {
        this.allocate(), this.change(EH.lockGained)
      }
      allocate() {
        null === this.rings && (this.rings = new xH, null !== this.startedClient && this.changeAt(this.startedAtMs, MH(this.startedClient), 1))
      }
      step(HH, BH) {
        var LH;
        HH[BH + 6] !== zH.XW && (null === (LH = this.rings) || void 0 === LH || LH.steps.push(HH, BH))
      }
      cameraSet(HH, BH) {
        var LH;
        null === (LH = this.rings) || void 0 === LH || LH.cameraSets.push(HH, BH)
      }
      mouseMove(HH, BH) {
        const LH = this.rings;
        if (null === LH) return;
        const AH = this.sample;
        AH[0] = HH.timeStamp, AH[1] = performance.now(), AH[2] = HH.movementX, AH[3] = HH.movementY, AH[4] = BH ? 1 : 0, LH.events.push(AH)
      }
      frame(HH, BH, LH, AH) {
        const rH = this.rings;
        if (null === rH || AH === CH.none) return;
        const SH = this.sample;
        SH[0] = performance.now(), SH[1] = HH, SH[2] = BH, SH[3] = LH, SH[4] = AH, rH.frames.push(SH)
      }
      change(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.changeAt(performance.now(), HH, BH)
      }
      changeAt(HH, BH, LH) {
        const AH = this.rings;
        if (null === AH) return;
        const rH = this.sample;
        rH[0] = HH, rH[1] = BH, rH[2] = LH, AH.changes.push(rH)
      }
      dumpText() {
        var HH, BH;
        const LH = this.rings;
        return [`look records (${this.startedClient}): ${GH.join(",")}`, ...null !== (HH = null === LH || void 0 === LH ? void 0 : LH.steps.lines()) && void 0 !== HH ? HH : [], `mousemove events: ${YH.join(",")}`, ...null !== (BH = null === LH || void 0 === LH ? void 0 : LH.events.lines()) && void 0 !== BH ? BH : []].join("\n")
      }
      toJson(HH, BH) {
        var LH;
        const rH = HH - 6e4,
          SH = this.rings,
          hH = function(HH, BH) {
            var LH;
            let AH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            const SH = null !== (LH = null === HH || void 0 === HH ? void 0 : HH.rows(AH, rH)) && void 0 !== LH ? LH : [];
            return {
              columns: BH,
              fromMs: 0 === SH.length ? null : SH[0][AH],
              rows: SH
            }
          };
        return {
          version: AH.d,
          client: null !== (LH = this.startedClient) && void 0 !== LH ? LH : "not started",
          savedAt: (new Date).toISOString(),
          savedAtMs: HH,
          keptMs: 6e4,
          page: window.location.href,
          userAgent: navigator.userAgent,
          devicePixelRatio: window.devicePixelRatio,
          screen: {
            width: window.screen.width,
            height: window.screen.height
          },
          ZW: null !== document.pointerLockElement,
          visibility: document.visibilityState,
          ...BH,
          outcomes: zH,
          frameKinds: CH,
          changes: EH,
          lookSteps: hH(null === SH || void 0 === SH ? void 0 : SH.steps, GH),
          mouseMoves: hH(null === SH || void 0 === SH ? void 0 : SH.events, YH, 1),
          frames: hH(null === SH || void 0 === SH ? void 0 : SH.frames, uH),
          cameraSets: hH(null === SH || void 0 === SH ? void 0 : SH.cameraSets, QH),
          pageChanges: hH(null === SH || void 0 === SH ? void 0 : SH.changes, WH)
        }
      }
      save(HH) {
        const BH = JSON.stringify(this.toJson(performance.now(), HH));
        (0, rH.e)(new Blob([BH], {
          type: "application/json"
        }), `bloxd-mouse-look-${(new Date).toISOString().replace(/[:.]/g,"-")}.json`)
      }
    }
  },
  37245: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      LOOK_DEBUG_HEADER: () => EH,
      endLookDebugTake: () => MH,
      noteLookDroppedCopy: () => xH,
      saveLookCapture: () => vH,
      startLookDebug: () => WH
    });
    var AH = LH(5268),
      rH = LH(3105),
      SH = LH(1962);
    const hH = new Map(Object.entries(AH.l).map((HH => {
      let [BH, LH] = HH;
      return [LH, BH]
    })));

    function tH(HH) {
      return (0, SH.t)(HH).toFixed(1)
    }

    function zH(HH, BH) {
      return `camera set by ${hH.get(HH[BH+1])}: heading ${`${tH(HH[BH+2])} -> ${tH(HH[BH+4])}`} deg, pitch ${`${tH(HH[BH+3])} -> ${tH(HH[BH+5])}`} deg, at ${HH[BH].toFixed(1)} ms`
    }
    var CH = LH(37250);
    const EH = 2;

    function XH(HH) {
      return Number.isFinite(HH) ? String(Math.round(10 * HH) / 10) : String(HH)
    }

    function GH(HH) {
      return Number.isFinite(HH) ? HH.toFixed(1) : String(HH)
    }
    class YH {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.qN = 0, this.pastLimit = 0, this.lockSkips = 0, this.XW = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.cameraSets = 0, this.cameraSetsLost = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
      moved() {
        return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.qN > 0 || this.dropped > 0 || this.cameraSets > 0
      }
      hasEvent() {
        return this.qN > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
      }
    }
    class uH {
      constructor() {
        var HH = this;
        this.topicOn = (0, rH.o)("look"), this.remote = (0, rH.s)(), this.tally = new YH, this.takes = null, this.started = !1, this.record = function(BH) {
          let LH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          if (CH.f.step(BH, LH), !HH.topicOn) return;
          const AH = BH[LH],
            rH = BH[LH + 1],
            SH = BH[LH + 2],
            hH = BH[LH + 3],
            tH = BH[LH + 4],
            zH = BH[LH + 5],
            EH = BH[LH + 6],
            YH = BH[LH + 7],
            uH = BH[LH + 8],
            QH = BH[LH + 9],
            WH = HH.tally;
          switch (WH.frames++, EH) {
            case CH.e.idle:
              return void WH.idle++;
            case CH.e.XW:
              return void WH.XW++;
            case CH.e.ZN:
              return WH.lockSkips++, void(0 === SH && 0 === hH || HH.outlier(`lock skip dropped raw (${XH(SH)}, ${XH(hH)}) at ${GH(AH)} ms`))
          }
          WH.looked++, Number.isFinite(rH) && (WH.dtMin = Math.min(WH.dtMin, rH), WH.dtMax = Math.max(WH.dtMax, rH), WH.dtSum += rH, rH > 0 && (WH.peakRate = Math.max(WH.peakRate, Math.hypot(tH, zH) / rH))), WH.raw[0] += SH, WH.raw[1] += hH, WH.turned[0] += tH, WH.turned[1] += zH;
          const MH = Math.abs(SH) > QH || Math.abs(hH) > QH,
            xH = `raw (${XH(SH)}, ${XH(hH)}) over ${GH(rH)} ms, limit ${XH(QH)}, filter v (${YH.toFixed(3)}, ${uH.toFixed(3)}) px/ms, at ${GH(AH)} ms`;
          EH === CH.e.qN ? (WH.qN++, HH.outlier(`spike put right: ${xH} -> turned (${XH(tH)}, ${XH(zH)})`)) : MH ? (WH.pastLimit++, HH.outlier(`kept past limit: ${xH}`)) : rH > 50 && (WH.longFrames++, HH.remote || HH.outlier(`long frame: ${xH}, turned in full`))
        }, this.onMouseMove = HH => {
          const BH = null !== document.pointerLockElement;
          if (CH.f.mouseMove(HH, BH), !this.topicOn) return;
          const LH = this.tally,
            {
              movementX: AH,
              movementY: rH
            } = HH;
          LH.events++;
          const SH = Math.max(Math.abs(AH), Math.abs(rH));
          LH.eventMax = Math.max(LH.eventMax, SH), SH >= 200 && (LH.bigEvents++, this.eventOutlier(`big mousemove (${AH}, ${rH}) at ${GH(HH.timeStamp)} ms, lock ${BH?"LX":"free"}`))
        }, this.onLockChange = () => {
          const HH = document.pointerLockElement;
          HH ? CH.f.lockGained() : CH.f.change(CH.b.lockLost), this.topicOn && (0, rH.j)("look", `pointer lock ${HH?`gained (${HH.tagName.toLowerCase()})`:"lost"} at ${GH(performance.now())} ms`)
        }, this.onLockError = () => {
          CH.f.change(CH.b.lockError), this.topicOn && (0, rH.j)("look", `pointer lock request failed at ${GH(performance.now())} ms`)
        }, this.onVisibility = () => {
          CH.f.change("hidden" === document.visibilityState ? CH.b.hidden : CH.b.visible), this.topicOn && (0, rH.j)("look", `page ${document.visibilityState} at ${GH(performance.now())} ms`)
        }, this.onFocus = () => {
          CH.f.change(CH.b.focus)
        }, this.onBlur = () => {
          CH.f.change(CH.b.blur)
        }, this.flush = () => {
          if (this.takeRecords(), !this.topicOn) return;
          const HH = this.tally;
          if (this.tally = new YH, !HH.moved() || this.remote && !HH.hasEvent()) return;
          const BH = HH.looked > 0 ? HH.dtSum / HH.looked : NaN,
            LH = [`${HH.frames} frames (${HH.looked} looked, ${HH.idle} idle${"wasm"===CH.f.client?`, ${HH.XW} carried`:""})`, `dt avg ${GH(BH)} min ${GH(HH.dtMin)} max ${GH(HH.dtMax)}, ${HH.longFrames} long`, `${HH.events} mousemoves (max ${XH(HH.eventMax)} px, ${HH.bigEvents} big)`, `raw (${XH(HH.raw[0])}, ${XH(HH.raw[1])}) turned (${XH(HH.turned[0])}, ${XH(HH.turned[1])})`, `peak ${HH.peakRate.toFixed(2)} px/ms`, `put right ${HH.qN}, past limit ${HH.pastLimit}, lock skips ${HH.lockSkips}`, "lock " + (document.pointerLockElement ? "LX" : "free")];
          HH.dropped > 0 && LH.push(`${HH.dropped} doubled spike copies dropped`), HH.cameraSets > 0 && LH.push(`${HH.cameraSets} camera sets`), HH.cameraSetsLost > 0 && LH.push(`${HH.cameraSetsLost} camera set records lost`), HH.lost > 0 && LH.push(`${HH.lost} records lost`), HH.suppressed > 0 && LH.push(`${HH.suppressed} outlier lines not shown`), (0, rH.j)("look", `1s: ${LH.join("; ")}`)
        }
      }
      start(HH, BH) {
        if (CH.f.start(HH, null !== document.pointerLockElement), this.takes = BH, this.topicOn) {
          const {
            screen: BH
          } = window;
          (0, rH.j)("look", `start: ${HH} client, dpr ${window.devicePixelRatio}, screen ${BH.width}x${BH.height}, pointer lock ${document.pointerLockElement?"LX":"free"}`)
        }
        this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), window.addEventListener("focus", this.onFocus), window.addEventListener("blur", this.onBlur), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), this.topicOn && !this.remote && (0, rH.i)("look", (() => CH.f.dumpText())))
      }
      outlier(HH) {
        const BH = this.tally;
        BH.outliers >= 20 ? BH.suppressed++ : (BH.outliers++, (0, rH.j)("look", HH))
      }
      eventOutlier(HH) {
        const BH = this.tally;
        BH.eventLines >= 10 ? BH.suppressed++ : (BH.eventLines++, (0, rH.j)("look", HH))
      }
      takeRecords() {
        if (null === this.takes) return;
        const HH = this.takes.look();
        if (HH.length >= EH) {
          this.counted(CH.b.stepsLost, HH[0]), this.counted(CH.b.droppedCopies, HH[1]);
          for (let BH = EH; BH + CH.c <= HH.length; BH += CH.c) this.record(HH, BH)
        }
        const BH = this.takes.cameraSets();
        if (BH.length >= AH.c) {
          this.counted(CH.b.cameraSetsLost, BH[0]);
          for (let HH = AH.c; HH + AH.d <= BH.length; HH += AH.d) CH.f.cameraSet(BH, HH), this.topicOn && (this.tally.cameraSets++, this.outlier(zH(BH, HH)))
        }
      }
      droppedCopy() {
        this.counted(CH.b.droppedCopies, 1)
      }
      counted(HH, BH) {
        if (0 === BH) return;
        if (CH.f.change(HH, BH), !this.topicOn) return;
        const LH = this.tally;
        HH === CH.b.droppedCopies ? LH.dropped += BH : HH === CH.b.stepsLost ? LH.lost += BH : LH.cameraSetsLost += BH
      }
      endTake() {
        this.takeRecords(), this.takes = null
      }
    }
    let QH = null;

    function WH(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return QH ??= new uH, QH.start(HH, BH), QH.record
    }

    function MH() {
      var HH;
      null === (HH = QH) || void 0 === HH || HH.endTake()
    }

    function xH() {
      var HH;
      null === (HH = QH) || void 0 === HH || HH.droppedCopy()
    }
    async function vH(HH) {
      var BH;
      null === (BH = QH) || void 0 === BH || BH.takeRecords();
      const {
        clientHintsRead: AH,
        debugDeviceLines: rH
      } = await LH.e(34).then((() => LH(34844)));
      await AH, CH.f.save({
        ...HH,
        device: rH()
      })
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);