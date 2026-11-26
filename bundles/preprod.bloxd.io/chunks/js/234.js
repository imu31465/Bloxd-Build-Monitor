export const id = 234;
export const ids = [234];
export const modules = {
  37083: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => EU,
      i: () => FU,
      l: () => DU,
      o: () => oU,
      q: () => GU
    });
    var cU = zU(654),
      yU = zU(1817),
      QU = zU(5326);
    class AU {
      constructor(UU, XU) {
        this.width = UU, this.xY = XU, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(UU * XU)
      }
      push(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const zU = this.data,
          cU = this.next * this.width;
        for (let yU = 0; yU < this.width; yU++) zU[cU + yU] = UU[XU + yU];
        this.next = (this.next + 1) % this.xY, this.size = Math.min(this.size + 1, this.xY)
      }
      rows() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1 / 0;
        const zU = [],
          cU = (this.next - this.size + this.xY) % this.xY;
        for (let yU = 0; yU < this.size; yU++) {
          const QU = (cU + yU) % this.xY * this.width;
          this.data[QU + UU] >= XU && zU.push(Array.from(this.data.subarray(QU, QU + this.width)))
        }
        return zU
      }
      lines() {
        return this.rows().map((UU => UU.join(",")))
      }
    }
    const FU = 10,
      oU = {
        idle: 0,
        cY: 1,
        LO: 2,
        kS: 3,
        Yt: 4
      },
      DU = {
        none: 0,
        skipped: 1,
        paced: 2,
        drawn: 3
      },
      EU = {
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
      YU = 12e3,
      NU = ["nowMs", "dtMs", "rawX", "rawY", "turnedX", "turnedY", "outcome", "velocityX", "velocityY", "limit"],
      IU = ["timeStamp", "nowMs", "movementX", "movementY", "locked"],
      pU = ["nowMs", "dtMs", "heading", "pitch", "kind"],
      aU = ["nowMs", "source", "headingBefore", "pitchBefore", "headingAfter", "pitchAfter"],
      tU = ["nowMs", "change", "count"];

    function gU(UU) {
      return "js" === UU ? EU.jsClient : EU.wasmClient
    }
    class kU {
      constructor() {
        this.steps = new AU(FU, YU), this.events = new AU(IU.length, YU), this.frames = new AU(pU.length, YU), this.cameraSets = new AU(QU.d, 256), this.changes = new AU(tU.length, 256)
      }
    }
    const GU = new class {
      constructor() {
        this.rings = null, this.sample = new Float64Array(IU.length), this.startedClient = null, this.startedAtMs = 0
      }
      get client() {
        return this.startedClient
      }
      start(UU, XU) {
        this.startedClient = UU, this.startedAtMs = performance.now(), null !== this.rings ? this.change(gU(UU)) : XU && this.allocate()
      }
      lockGained() {
        this.allocate(), this.change(EU.lockGained)
      }
      allocate() {
        null === this.rings && (this.rings = new kU, null !== this.startedClient && this.changeAt(this.startedAtMs, gU(this.startedClient), 1))
      }
      step(UU, XU) {
        var zU;
        UU[XU + 6] !== oU.Yt && (null === (zU = this.rings) || void 0 === zU || zU.steps.push(UU, XU))
      }
      cameraSet(UU, XU) {
        var zU;
        null === (zU = this.rings) || void 0 === zU || zU.cameraSets.push(UU, XU)
      }
      mouseMove(UU, XU) {
        const zU = this.rings;
        if (null === zU) return;
        const cU = this.sample;
        cU[0] = UU.timeStamp, cU[1] = performance.now(), cU[2] = UU.movementX, cU[3] = UU.movementY, cU[4] = XU ? 1 : 0, zU.events.push(cU)
      }
      frame(UU, XU, zU, cU) {
        const yU = this.rings;
        if (null === yU || cU === DU.none) return;
        const QU = this.sample;
        QU[0] = performance.now(), QU[1] = UU, QU[2] = XU, QU[3] = zU, QU[4] = cU, yU.frames.push(QU)
      }
      change(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.changeAt(performance.now(), UU, XU)
      }
      changeAt(UU, XU, zU) {
        const cU = this.rings;
        if (null === cU) return;
        const yU = this.sample;
        yU[0] = UU, yU[1] = XU, yU[2] = zU, cU.changes.push(yU)
      }
      dumpText() {
        var UU, XU;
        const zU = this.rings;
        return [`look records (${this.startedClient}): ${NU.join(",")}`, ...null !== (UU = null === zU || void 0 === zU ? void 0 : zU.steps.lines()) && void 0 !== UU ? UU : [], `mousemove events: ${IU.join(",")}`, ...null !== (XU = null === zU || void 0 === zU ? void 0 : zU.events.lines()) && void 0 !== XU ? XU : []].join("\n")
      }
      toJson(UU, XU) {
        var zU;
        const yU = UU - 6e4,
          QU = this.rings,
          AU = function(UU, XU) {
            var zU;
            let cU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            const QU = null !== (zU = null === UU || void 0 === UU ? void 0 : UU.rows(cU, yU)) && void 0 !== zU ? zU : [];
            return {
              columns: XU,
              fromMs: 0 === QU.length ? null : QU[0][cU],
              rows: QU
            }
          };
        return {
          version: cU.d,
          client: null !== (zU = this.startedClient) && void 0 !== zU ? zU : "not started",
          savedAt: (new Date).toISOString(),
          savedAtMs: UU,
          keptMs: 6e4,
          page: window.location.href,
          userAgent: navigator.userAgent,
          devicePixelRatio: window.devicePixelRatio,
          screen: {
            width: window.screen.width,
            height: window.screen.height
          },
          Tt: null !== document.pointerLockElement,
          visibility: document.visibilityState,
          ...XU,
          outcomes: oU,
          frameKinds: DU,
          changes: EU,
          lookSteps: AU(null === QU || void 0 === QU ? void 0 : QU.steps, NU),
          mouseMoves: AU(null === QU || void 0 === QU ? void 0 : QU.events, IU, 1),
          frames: AU(null === QU || void 0 === QU ? void 0 : QU.frames, pU),
          cameraSets: AU(null === QU || void 0 === QU ? void 0 : QU.cameraSets, aU),
          pageChanges: AU(null === QU || void 0 === QU ? void 0 : QU.changes, tU)
        }
      }
      save(UU) {
        const XU = JSON.stringify(this.toJson(performance.now(), UU));
        (0, yU.c)(new Blob([XU], {
          type: "application/json"
        }), `bloxd-mouse-look-${(new Date).toISOString().replace(/[:.]/g,"-")}.json`)
      }
    }
  },
  37081: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      LOOK_DEBUG_HEADER: () => EU,
      endLookDebugTake: () => gU,
      noteLookDroppedCopy: () => kU,
      saveLookCapture: () => GU,
      startLookDebug: () => tU
    });
    var cU = zU(5326),
      yU = zU(3099),
      QU = zU(1974);
    const AU = new Map(Object.entries(cU.f).map((UU => {
      let [XU, zU] = UU;
      return [zU, XU]
    })));

    function FU(UU) {
      return (0, QU.D)(UU).toFixed(1)
    }

    function oU(UU, XU) {
      return `camera set by ${AU.get(UU[XU+1])}: heading ${`${FU(UU[XU+2])} -> ${FU(UU[XU+4])}`} deg, pitch ${`${FU(UU[XU+3])} -> ${FU(UU[XU+5])}`} deg, at ${UU[XU].toFixed(1)} ms`
    }
    var DU = zU(37083);
    const EU = 2;

    function YU(UU) {
      return Number.isFinite(UU) ? String(Math.round(10 * UU) / 10) : String(UU)
    }

    function NU(UU) {
      return Number.isFinite(UU) ? UU.toFixed(1) : String(UU)
    }
    class IU {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.LO = 0, this.pastLimit = 0, this.lockSkips = 0, this.Yt = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.cameraSets = 0, this.cameraSetsLost = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
      moved() {
        return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.LO > 0 || this.dropped > 0 || this.cameraSets > 0
      }
      hasEvent() {
        return this.LO > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
      }
    }
    class pU {
      constructor() {
        var UU = this;
        this.topicOn = (0, yU.q)("look"), this.remote = (0, yU.t)(), this.tally = new IU, this.takes = null, this.started = !1, this.record = function(XU) {
          let zU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          if (DU.q.step(XU, zU), !UU.topicOn) return;
          const cU = XU[zU],
            yU = XU[zU + 1],
            QU = XU[zU + 2],
            AU = XU[zU + 3],
            FU = XU[zU + 4],
            oU = XU[zU + 5],
            EU = XU[zU + 6],
            IU = XU[zU + 7],
            pU = XU[zU + 8],
            aU = XU[zU + 9],
            tU = UU.tally;
          switch (tU.frames++, EU) {
            case DU.o.idle:
              return void tU.idle++;
            case DU.o.Yt:
              return void tU.Yt++;
            case DU.o.kS:
              return tU.lockSkips++, void(0 === QU && 0 === AU || UU.outlier(`lock skip dropped raw (${YU(QU)}, ${YU(AU)}) at ${NU(cU)} ms`))
          }
          tU.looked++, Number.isFinite(yU) && (tU.dtMin = Math.min(tU.dtMin, yU), tU.dtMax = Math.max(tU.dtMax, yU), tU.dtSum += yU, yU > 0 && (tU.peakRate = Math.max(tU.peakRate, Math.hypot(FU, oU) / yU))), tU.raw[0] += QU, tU.raw[1] += AU, tU.turned[0] += FU, tU.turned[1] += oU;
          const gU = Math.abs(QU) > aU || Math.abs(AU) > aU,
            kU = `raw (${YU(QU)}, ${YU(AU)}) over ${NU(yU)} ms, limit ${YU(aU)}, filter v (${IU.toFixed(3)}, ${pU.toFixed(3)}) px/ms, at ${NU(cU)} ms`;
          EU === DU.o.LO ? (tU.LO++, UU.outlier(`spike put right: ${kU} -> turned (${YU(FU)}, ${YU(oU)})`)) : gU ? (tU.pastLimit++, UU.outlier(`kept past limit: ${kU}`)) : yU > 50 && (tU.longFrames++, UU.remote || UU.outlier(`long frame: ${kU}, turned in full`))
        }, this.onMouseMove = UU => {
          const XU = null !== document.pointerLockElement;
          if (DU.q.mouseMove(UU, XU), !this.topicOn) return;
          const zU = this.tally,
            {
              movementX: cU,
              movementY: yU
            } = UU;
          zU.events++;
          const QU = Math.max(Math.abs(cU), Math.abs(yU));
          zU.eventMax = Math.max(zU.eventMax, QU), QU >= 200 && (zU.bigEvents++, this.eventOutlier(`big mousemove (${cU}, ${yU}) at ${NU(UU.timeStamp)} ms, lock ${XU?"uD":"free"}`))
        }, this.onLockChange = () => {
          const UU = document.pointerLockElement;
          UU ? DU.q.lockGained() : DU.q.change(DU.e.lockLost), this.topicOn && (0, yU.l)("look", `pointer lock ${UU?`gained (${UU.tagName.toLowerCase()})`:"lost"} at ${NU(performance.now())} ms`)
        }, this.onLockError = () => {
          DU.q.change(DU.e.lockError), this.topicOn && (0, yU.l)("look", `pointer lock request failed at ${NU(performance.now())} ms`)
        }, this.onVisibility = () => {
          DU.q.change("hidden" === document.visibilityState ? DU.e.hidden : DU.e.visible), this.topicOn && (0, yU.l)("look", `page ${document.visibilityState} at ${NU(performance.now())} ms`)
        }, this.onFocus = () => {
          DU.q.change(DU.e.focus)
        }, this.onBlur = () => {
          DU.q.change(DU.e.blur)
        }, this.flush = () => {
          if (this.takeRecords(), !this.topicOn) return;
          const UU = this.tally;
          if (this.tally = new IU, !UU.moved() || this.remote && !UU.hasEvent()) return;
          const XU = UU.looked > 0 ? UU.dtSum / UU.looked : NaN,
            zU = [`${UU.frames} frames (${UU.looked} looked, ${UU.idle} idle${"wasm"===DU.q.client?`, ${UU.Yt} carried`:""})`, `dt avg ${NU(XU)} min ${NU(UU.dtMin)} max ${NU(UU.dtMax)}, ${UU.longFrames} long`, `${UU.events} mousemoves (max ${YU(UU.eventMax)} px, ${UU.bigEvents} big)`, `raw (${YU(UU.raw[0])}, ${YU(UU.raw[1])}) turned (${YU(UU.turned[0])}, ${YU(UU.turned[1])})`, `peak ${UU.peakRate.toFixed(2)} px/ms`, `put right ${UU.LO}, past limit ${UU.pastLimit}, lock skips ${UU.lockSkips}`, "lock " + (document.pointerLockElement ? "uD" : "free")];
          UU.dropped > 0 && zU.push(`${UU.dropped} doubled spike copies dropped`), UU.cameraSets > 0 && zU.push(`${UU.cameraSets} camera sets`), UU.cameraSetsLost > 0 && zU.push(`${UU.cameraSetsLost} camera set records lost`), UU.lost > 0 && zU.push(`${UU.lost} records lost`), UU.suppressed > 0 && zU.push(`${UU.suppressed} outlier lines not shown`), (0, yU.l)("look", `1s: ${zU.join("; ")}`)
        }
      }
      start(UU, XU) {
        if (DU.q.start(UU, null !== document.pointerLockElement), this.takes = XU, this.topicOn) {
          const {
            screen: XU
          } = window;
          (0, yU.l)("look", `start: ${UU} client, dpr ${window.devicePixelRatio}, screen ${XU.width}x${XU.height}, pointer lock ${document.pointerLockElement?"uD":"free"}`)
        }
        this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), window.addEventListener("focus", this.onFocus), window.addEventListener("blur", this.onBlur), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), this.topicOn && !this.remote && (0, yU.h)("look", (() => DU.q.dumpText())))
      }
      outlier(UU) {
        const XU = this.tally;
        XU.outliers >= 20 ? XU.suppressed++ : (XU.outliers++, (0, yU.l)("look", UU))
      }
      eventOutlier(UU) {
        const XU = this.tally;
        XU.eventLines >= 10 ? XU.suppressed++ : (XU.eventLines++, (0, yU.l)("look", UU))
      }
      takeRecords() {
        if (null === this.takes) return;
        const UU = this.takes.look();
        if (UU.length >= EU) {
          this.counted(DU.e.stepsLost, UU[0]), this.counted(DU.e.droppedCopies, UU[1]);
          for (let XU = EU; XU + DU.i <= UU.length; XU += DU.i) this.record(UU, XU)
        }
        const XU = this.takes.cameraSets();
        if (XU.length >= cU.b) {
          this.counted(DU.e.cameraSetsLost, XU[0]);
          for (let UU = cU.b; UU + cU.d <= XU.length; UU += cU.d) DU.q.cameraSet(XU, UU), this.topicOn && (this.tally.cameraSets++, this.outlier(oU(XU, UU)))
        }
      }
      droppedCopy() {
        this.counted(DU.e.droppedCopies, 1)
      }
      counted(UU, XU) {
        if (0 === XU) return;
        if (DU.q.change(UU, XU), !this.topicOn) return;
        const zU = this.tally;
        UU === DU.e.droppedCopies ? zU.dropped += XU : UU === DU.e.stepsLost ? zU.lost += XU : zU.cameraSetsLost += XU
      }
      endTake() {
        this.takeRecords(), this.takes = null
      }
    }
    let aU = null;

    function tU(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return aU ??= new pU, aU.start(UU, XU), aU.record
    }

    function gU() {
      var UU;
      null === (UU = aU) || void 0 === UU || UU.endTake()
    }

    function kU() {
      var UU;
      null === (UU = aU) || void 0 === UU || UU.droppedCopy()
    }
    async function GU(UU) {
      var XU;
      null === (XU = aU) || void 0 === XU || XU.takeRecords();
      const {
        clientHintsRead: cU,
        debugDeviceLines: yU
      } = await zU.e(34).then((() => zU(34738)));
      await cU, DU.q.save({
        ...UU,
        device: yU()
      })
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);