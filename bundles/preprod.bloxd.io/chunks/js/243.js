export const id = 243;
export const ids = [243];
export const modules = {
  37058: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => MB,
      c: () => jB,
      g: () => JB,
      h: () => yB,
      k: () => WB
    });
    var YB = GB(645),
      DB = GB(1834),
      QB = GB(5287);
    class oB {
      constructor(BB, OB) {
        this.width = BB, this.CP = OB, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(BB * OB)
      }
      push(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const GB = this.data,
          YB = this.next * this.width;
        for (let DB = 0; DB < this.width; DB++) GB[YB + DB] = BB[OB + DB];
        this.next = (this.next + 1) % this.CP, this.size = Math.min(this.size + 1, this.CP)
      }
      rows() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1 / 0;
        const GB = [],
          YB = (this.next - this.size + this.CP) % this.CP;
        for (let DB = 0; DB < this.size; DB++) {
          const QB = (YB + DB) % this.CP * this.width;
          this.data[QB + BB] >= OB && GB.push(Array.from(this.data.subarray(QB, QB + this.width)))
        }
        return GB
      }
      lines() {
        return this.rows().map((BB => BB.join(",")))
      }
    }
    const jB = 10,
      yB = {
        idle: 0,
        GP: 1,
        vI: 2,
        YF: 3,
        pZ: 4
      },
      JB = {
        none: 0,
        skipped: 1,
        paced: 2,
        drawn: 3
      },
      MB = {
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
      PB = 12e3,
      zB = ["nowMs", "dtMs", "rawX", "rawY", "turnedX", "turnedY", "outcome", "velocityX", "velocityY", "limit"],
      lB = ["timeStamp", "nowMs", "movementX", "movementY", "locked"],
      pB = ["nowMs", "dtMs", "heading", "pitch", "kind"],
      qB = ["nowMs", "source", "headingBefore", "pitchBefore", "headingAfter", "pitchAfter"],
      ZB = ["nowMs", "change", "count"];

    function NB(BB) {
      return "js" === BB ? MB.jsClient : MB.wasmClient
    }
    class RB {
      constructor() {
        this.steps = new oB(jB, PB), this.events = new oB(lB.length, PB), this.frames = new oB(pB.length, PB), this.cameraSets = new oB(QB.h, 256), this.changes = new oB(ZB.length, 256)
      }
    }
    const WB = new class {
      constructor() {
        this.rings = null, this.sample = new Float64Array(lB.length), this.startedClient = null, this.startedAtMs = 0
      }
      get client() {
        return this.startedClient
      }
      start(BB, OB) {
        this.startedClient = BB, this.startedAtMs = performance.now(), null !== this.rings ? this.change(NB(BB)) : OB && this.allocate()
      }
      lockGained() {
        this.allocate(), this.change(MB.lockGained)
      }
      allocate() {
        null === this.rings && (this.rings = new RB, null !== this.startedClient && this.changeAt(this.startedAtMs, NB(this.startedClient), 1))
      }
      step(BB, OB) {
        var GB;
        BB[OB + 6] !== yB.pZ && (null === (GB = this.rings) || void 0 === GB || GB.steps.push(BB, OB))
      }
      cameraSet(BB, OB) {
        var GB;
        null === (GB = this.rings) || void 0 === GB || GB.cameraSets.push(BB, OB)
      }
      mouseMove(BB, OB) {
        const GB = this.rings;
        if (null === GB) return;
        const YB = this.sample;
        YB[0] = BB.timeStamp, YB[1] = performance.now(), YB[2] = BB.movementX, YB[3] = BB.movementY, YB[4] = OB ? 1 : 0, GB.events.push(YB)
      }
      frame(BB, OB, GB, YB) {
        const DB = this.rings;
        if (null === DB || YB === JB.none) return;
        const QB = this.sample;
        QB[0] = performance.now(), QB[1] = BB, QB[2] = OB, QB[3] = GB, QB[4] = YB, DB.frames.push(QB)
      }
      change(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.changeAt(performance.now(), BB, OB)
      }
      changeAt(BB, OB, GB) {
        const YB = this.rings;
        if (null === YB) return;
        const DB = this.sample;
        DB[0] = BB, DB[1] = OB, DB[2] = GB, YB.changes.push(DB)
      }
      dumpText() {
        var BB, OB;
        const GB = this.rings;
        return [`look records (${this.startedClient}): ${zB.join(",")}`, ...null !== (BB = null === GB || void 0 === GB ? void 0 : GB.steps.lines()) && void 0 !== BB ? BB : [], `mousemove events: ${lB.join(",")}`, ...null !== (OB = null === GB || void 0 === GB ? void 0 : GB.events.lines()) && void 0 !== OB ? OB : []].join("\n")
      }
      toJson(BB, OB) {
        var GB;
        const DB = BB - 6e4,
          QB = this.rings,
          oB = function(BB, OB) {
            var GB;
            let YB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            const QB = null !== (GB = null === BB || void 0 === BB ? void 0 : BB.rows(YB, DB)) && void 0 !== GB ? GB : [];
            return {
              columns: OB,
              fromMs: 0 === QB.length ? null : QB[0][YB],
              rows: QB
            }
          };
        return {
          version: YB.b,
          client: null !== (GB = this.startedClient) && void 0 !== GB ? GB : "not started",
          savedAt: (new Date).toISOString(),
          savedAtMs: BB,
          keptMs: 6e4,
          page: window.location.href,
          userAgent: navigator.userAgent,
          devicePixelRatio: window.devicePixelRatio,
          screen: {
            width: window.screen.width,
            height: window.screen.height
          },
          bZ: null !== document.pointerLockElement,
          visibility: document.visibilityState,
          ...OB,
          outcomes: yB,
          frameKinds: JB,
          changes: MB,
          lookSteps: oB(null === QB || void 0 === QB ? void 0 : QB.steps, zB),
          mouseMoves: oB(null === QB || void 0 === QB ? void 0 : QB.events, lB, 1),
          frames: oB(null === QB || void 0 === QB ? void 0 : QB.frames, pB),
          cameraSets: oB(null === QB || void 0 === QB ? void 0 : QB.cameraSets, qB),
          pageChanges: oB(null === QB || void 0 === QB ? void 0 : QB.changes, ZB)
        }
      }
      save(BB) {
        const OB = JSON.stringify(this.toJson(performance.now(), BB));
        (0, DB.c)(new Blob([OB], {
          type: "application/json"
        }), `bloxd-mouse-look-${(new Date).toISOString().replace(/[:.]/g,"-")}.json`)
      }
    }
  },
  37054: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      LOOK_DEBUG_HEADER: () => MB,
      endLookDebugTake: () => NB,
      noteLookDroppedCopy: () => RB,
      saveLookCapture: () => WB,
      startLookDebug: () => ZB
    });
    var YB = GB(5287),
      DB = GB(3136),
      QB = GB(1998);
    const oB = new Map(Object.entries(YB.m).map((BB => {
      let [OB, GB] = BB;
      return [GB, OB]
    })));

    function jB(BB) {
      return (0, QB.B)(BB).toFixed(1)
    }

    function yB(BB, OB) {
      return `camera set by ${oB.get(BB[OB+1])}: heading ${`${jB(BB[OB+2])} -> ${jB(BB[OB+4])}`} deg, pitch ${`${jB(BB[OB+3])} -> ${jB(BB[OB+5])}`} deg, at ${BB[OB].toFixed(1)} ms`
    }
    var JB = GB(37058);
    const MB = 2;

    function PB(BB) {
      return Number.isFinite(BB) ? String(Math.round(10 * BB) / 10) : String(BB)
    }

    function zB(BB) {
      return Number.isFinite(BB) ? BB.toFixed(1) : String(BB)
    }
    class lB {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.vI = 0, this.pastLimit = 0, this.lockSkips = 0, this.pZ = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.cameraSets = 0, this.cameraSetsLost = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
      moved() {
        return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.vI > 0 || this.dropped > 0 || this.cameraSets > 0
      }
      hasEvent() {
        return this.vI > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
      }
    }
    class pB {
      constructor() {
        var BB = this;
        this.topicOn = (0, DB.s)("look"), this.remote = (0, DB.u)(), this.tally = new lB, this.takes = null, this.started = !1, this.record = function(OB) {
          let GB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          if (JB.k.step(OB, GB), !BB.topicOn) return;
          const YB = OB[GB],
            DB = OB[GB + 1],
            QB = OB[GB + 2],
            oB = OB[GB + 3],
            jB = OB[GB + 4],
            yB = OB[GB + 5],
            MB = OB[GB + 6],
            lB = OB[GB + 7],
            pB = OB[GB + 8],
            qB = OB[GB + 9],
            ZB = BB.tally;
          switch (ZB.frames++, MB) {
            case JB.h.idle:
              return void ZB.idle++;
            case JB.h.pZ:
              return void ZB.pZ++;
            case JB.h.YF:
              return ZB.lockSkips++, void(0 === QB && 0 === oB || BB.outlier(`lock skip dropped raw (${PB(QB)}, ${PB(oB)}) at ${zB(YB)} ms`))
          }
          ZB.looked++, Number.isFinite(DB) && (ZB.dtMin = Math.min(ZB.dtMin, DB), ZB.dtMax = Math.max(ZB.dtMax, DB), ZB.dtSum += DB, DB > 0 && (ZB.peakRate = Math.max(ZB.peakRate, Math.hypot(jB, yB) / DB))), ZB.raw[0] += QB, ZB.raw[1] += oB, ZB.turned[0] += jB, ZB.turned[1] += yB;
          const NB = Math.abs(QB) > qB || Math.abs(oB) > qB,
            RB = `raw (${PB(QB)}, ${PB(oB)}) over ${zB(DB)} ms, limit ${PB(qB)}, filter v (${lB.toFixed(3)}, ${pB.toFixed(3)}) px/ms, at ${zB(YB)} ms`;
          MB === JB.h.vI ? (ZB.vI++, BB.outlier(`spike put right: ${RB} -> turned (${PB(jB)}, ${PB(yB)})`)) : NB ? (ZB.pastLimit++, BB.outlier(`kept past limit: ${RB}`)) : DB > 50 && (ZB.longFrames++, BB.remote || BB.outlier(`long frame: ${RB}, turned in full`))
        }, this.onMouseMove = BB => {
          const OB = null !== document.pointerLockElement;
          if (JB.k.mouseMove(BB, OB), !this.topicOn) return;
          const GB = this.tally,
            {
              movementX: YB,
              movementY: DB
            } = BB;
          GB.events++;
          const QB = Math.max(Math.abs(YB), Math.abs(DB));
          GB.eventMax = Math.max(GB.eventMax, QB), QB >= 200 && (GB.bigEvents++, this.eventOutlier(`big mousemove (${YB}, ${DB}) at ${zB(BB.timeStamp)} ms, lock ${OB?"sJ":"free"}`))
        }, this.onLockChange = () => {
          const BB = document.pointerLockElement;
          BB ? JB.k.lockGained() : JB.k.change(JB.b.lockLost), this.topicOn && (0, DB.m)("look", `pointer lock ${BB?`gained (${BB.tagName.toLowerCase()})`:"lost"} at ${zB(performance.now())} ms`)
        }, this.onLockError = () => {
          JB.k.change(JB.b.lockError), this.topicOn && (0, DB.m)("look", `pointer lock request failed at ${zB(performance.now())} ms`)
        }, this.onVisibility = () => {
          JB.k.change("hidden" === document.visibilityState ? JB.b.hidden : JB.b.visible), this.topicOn && (0, DB.m)("look", `page ${document.visibilityState} at ${zB(performance.now())} ms`)
        }, this.onFocus = () => {
          JB.k.change(JB.b.focus)
        }, this.onBlur = () => {
          JB.k.change(JB.b.blur)
        }, this.flush = () => {
          if (this.takeRecords(), !this.topicOn) return;
          const BB = this.tally;
          if (this.tally = new lB, !BB.moved() || this.remote && !BB.hasEvent()) return;
          const OB = BB.looked > 0 ? BB.dtSum / BB.looked : NaN,
            GB = [`${BB.frames} frames (${BB.looked} looked, ${BB.idle} idle${"wasm"===JB.k.client?`, ${BB.pZ} carried`:""})`, `dt avg ${zB(OB)} min ${zB(BB.dtMin)} max ${zB(BB.dtMax)}, ${BB.longFrames} long`, `${BB.events} mousemoves (max ${PB(BB.eventMax)} px, ${BB.bigEvents} big)`, `raw (${PB(BB.raw[0])}, ${PB(BB.raw[1])}) turned (${PB(BB.turned[0])}, ${PB(BB.turned[1])})`, `peak ${BB.peakRate.toFixed(2)} px/ms`, `put right ${BB.vI}, past limit ${BB.pastLimit}, lock skips ${BB.lockSkips}`, "lock " + (document.pointerLockElement ? "sJ" : "free")];
          BB.dropped > 0 && GB.push(`${BB.dropped} doubled spike copies dropped`), BB.cameraSets > 0 && GB.push(`${BB.cameraSets} camera sets`), BB.cameraSetsLost > 0 && GB.push(`${BB.cameraSetsLost} camera set records lost`), BB.lost > 0 && GB.push(`${BB.lost} records lost`), BB.suppressed > 0 && GB.push(`${BB.suppressed} outlier lines not shown`), (0, DB.m)("look", `1s: ${GB.join("; ")}`)
        }
      }
      start(BB, OB) {
        if (JB.k.start(BB, null !== document.pointerLockElement), this.takes = OB, this.topicOn) {
          const {
            screen: OB
          } = window;
          (0, DB.m)("look", `start: ${BB} client, dpr ${window.devicePixelRatio}, screen ${OB.width}x${OB.height}, pointer lock ${document.pointerLockElement?"sJ":"free"}`)
        }
        this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), window.addEventListener("focus", this.onFocus), window.addEventListener("blur", this.onBlur), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), this.topicOn && !this.remote && (0, DB.l)("look", (() => JB.k.dumpText())))
      }
      outlier(BB) {
        const OB = this.tally;
        OB.outliers >= 20 ? OB.suppressed++ : (OB.outliers++, (0, DB.m)("look", BB))
      }
      eventOutlier(BB) {
        const OB = this.tally;
        OB.eventLines >= 10 ? OB.suppressed++ : (OB.eventLines++, (0, DB.m)("look", BB))
      }
      takeRecords() {
        if (null === this.takes) return;
        const BB = this.takes.look();
        if (BB.length >= MB) {
          this.counted(JB.b.stepsLost, BB[0]), this.counted(JB.b.droppedCopies, BB[1]);
          for (let OB = MB; OB + JB.c <= BB.length; OB += JB.c) this.record(BB, OB)
        }
        const OB = this.takes.cameraSets();
        if (OB.length >= YB.e) {
          this.counted(JB.b.cameraSetsLost, OB[0]);
          for (let BB = YB.e; BB + YB.h <= OB.length; BB += YB.h) JB.k.cameraSet(OB, BB), this.topicOn && (this.tally.cameraSets++, this.outlier(yB(OB, BB)))
        }
      }
      droppedCopy() {
        this.counted(JB.b.droppedCopies, 1)
      }
      counted(BB, OB) {
        if (0 === OB) return;
        if (JB.k.change(BB, OB), !this.topicOn) return;
        const GB = this.tally;
        BB === JB.b.droppedCopies ? GB.dropped += OB : BB === JB.b.stepsLost ? GB.lost += OB : GB.cameraSetsLost += OB
      }
      endTake() {
        this.takeRecords(), this.takes = null
      }
    }
    let qB = null;

    function ZB(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return qB ??= new pB, qB.start(BB, OB), qB.record
    }

    function NB() {
      var BB;
      null === (BB = qB) || void 0 === BB || BB.endTake()
    }

    function RB() {
      var BB;
      null === (BB = qB) || void 0 === BB || BB.droppedCopy()
    }
    async function WB(BB) {
      var OB;
      null === (OB = qB) || void 0 === OB || OB.takeRecords();
      const {
        clientHintsRead: YB,
        debugDeviceLines: DB
      } = await GB.e(34).then((() => GB(34658)));
      await YB, JB.k.save({
        ...BB,
        device: DB()
      })
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);