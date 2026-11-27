export const id = 243;
export const ids = [243];
export const modules = {
  37163: (ee, ie, He) => {
    He.d(ie, {
      c: () => oe,
      f: () => Ue,
      i: () => Je,
      m: () => Fe,
      p: () => Be
    });
    var ye = He(618),
      be = He(1790),
      Me = He(5279);
    class Ke {
      constructor(ee, ie) {
        this.width = ee, this.bk = ie, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(ee * ie)
      }
      push(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const He = this.data,
          ye = this.next * this.width;
        for (let be = 0; be < this.width; be++) He[ye + be] = ee[ie + be];
        this.next = (this.next + 1) % this.bk, this.size = Math.min(this.size + 1, this.bk)
      }
      rows() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1 / 0;
        const He = [],
          ye = (this.next - this.size + this.bk) % this.bk;
        for (let be = 0; be < this.size; be++) {
          const Me = (ye + be) % this.bk * this.width;
          this.data[Me + ee] >= ie && He.push(Array.from(this.data.subarray(Me, Me + this.width)))
        }
        return He
      }
      lines() {
        return this.rows().map((ee => ee.join(",")))
      }
    }
    const Ue = 10,
      Fe = {
        idle: 0,
        KR: 1,
        hV: 2,
        rV: 3,
        dp: 4
      },
      Je = {
        none: 0,
        skipped: 1,
        paced: 2,
        drawn: 3
      },
      oe = {
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
      Re = 12e3,
      ke = ["nowMs", "dtMs", "rawX", "rawY", "turnedX", "turnedY", "outcome", "velocityX", "velocityY", "limit"],
      qe = ["timeStamp", "nowMs", "movementX", "movementY", "locked"],
      fe = ["nowMs", "dtMs", "heading", "pitch", "kind"],
      Te = ["nowMs", "source", "headingBefore", "pitchBefore", "headingAfter", "pitchAfter"],
      pe = ["nowMs", "change", "count"];

    function Xe(ee) {
      return "js" === ee ? oe.jsClient : oe.wasmClient
    }
    class ze {
      constructor() {
        this.steps = new Ke(Ue, Re), this.events = new Ke(qe.length, Re), this.frames = new Ke(fe.length, Re), this.cameraSets = new Ke(Me.f, 256), this.changes = new Ke(pe.length, 256)
      }
    }
    const Be = new class {
      constructor() {
        this.rings = null, this.sample = new Float64Array(qe.length), this.startedClient = null, this.startedAtMs = 0
      }
      get client() {
        return this.startedClient
      }
      start(ee, ie) {
        this.startedClient = ee, this.startedAtMs = performance.now(), null !== this.rings ? this.change(Xe(ee)) : ie && this.allocate()
      }
      lockGained() {
        this.allocate(), this.change(oe.lockGained)
      }
      allocate() {
        null === this.rings && (this.rings = new ze, null !== this.startedClient && this.changeAt(this.startedAtMs, Xe(this.startedClient), 1))
      }
      step(ee, ie) {
        var He;
        ee[ie + 6] !== Fe.dp && (null === (He = this.rings) || void 0 === He || He.steps.push(ee, ie))
      }
      cameraSet(ee, ie) {
        var He;
        null === (He = this.rings) || void 0 === He || He.cameraSets.push(ee, ie)
      }
      mouseMove(ee, ie) {
        const He = this.rings;
        if (null === He) return;
        const ye = this.sample;
        ye[0] = ee.timeStamp, ye[1] = performance.now(), ye[2] = ee.movementX, ye[3] = ee.movementY, ye[4] = ie ? 1 : 0, He.events.push(ye)
      }
      frame(ee, ie, He, ye) {
        const be = this.rings;
        if (null === be || ye === Je.none) return;
        const Me = this.sample;
        Me[0] = performance.now(), Me[1] = ee, Me[2] = ie, Me[3] = He, Me[4] = ye, be.frames.push(Me)
      }
      change(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.changeAt(performance.now(), ee, ie)
      }
      changeAt(ee, ie, He) {
        const ye = this.rings;
        if (null === ye) return;
        const be = this.sample;
        be[0] = ee, be[1] = ie, be[2] = He, ye.changes.push(be)
      }
      dumpText() {
        var ee, ie;
        const He = this.rings;
        return [`look records (${this.startedClient}): ${ke.join(",")}`, ...null !== (ee = null === He || void 0 === He ? void 0 : He.steps.lines()) && void 0 !== ee ? ee : [], `mousemove events: ${qe.join(",")}`, ...null !== (ie = null === He || void 0 === He ? void 0 : He.events.lines()) && void 0 !== ie ? ie : []].join("\n")
      }
      toJson(ee, ie) {
        var He;
        const be = ee - 6e4,
          Me = this.rings,
          Ke = function(ee, ie) {
            var He;
            let ye = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            const Me = null !== (He = null === ee || void 0 === ee ? void 0 : ee.rows(ye, be)) && void 0 !== He ? He : [];
            return {
              columns: ie,
              fromMs: 0 === Me.length ? null : Me[0][ye],
              rows: Me
            }
          };
        return {
          version: ye.b,
          client: null !== (He = this.startedClient) && void 0 !== He ? He : "not started",
          savedAt: (new Date).toISOString(),
          savedAtMs: ee,
          keptMs: 6e4,
          page: window.location.href,
          userAgent: navigator.userAgent,
          devicePixelRatio: window.devicePixelRatio,
          screen: {
            width: window.screen.width,
            height: window.screen.height
          },
          HX: null !== document.pointerLockElement,
          visibility: document.visibilityState,
          ...ie,
          outcomes: Fe,
          frameKinds: Je,
          changes: oe,
          lookSteps: Ke(null === Me || void 0 === Me ? void 0 : Me.steps, ke),
          mouseMoves: Ke(null === Me || void 0 === Me ? void 0 : Me.events, qe, 1),
          frames: Ke(null === Me || void 0 === Me ? void 0 : Me.frames, fe),
          cameraSets: Ke(null === Me || void 0 === Me ? void 0 : Me.cameraSets, Te),
          pageChanges: Ke(null === Me || void 0 === Me ? void 0 : Me.changes, pe)
        }
      }
      save(ee) {
        const ie = JSON.stringify(this.toJson(performance.now(), ee));
        (0, be.e)(new Blob([ie], {
          type: "application/json"
        }), `bloxd-mouse-look-${(new Date).toISOString().replace(/[:.]/g,"-")}.json`)
      }
    }
  },
  37161: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      LOOK_DEBUG_HEADER: () => oe,
      endLookDebugTake: () => Xe,
      noteLookDroppedCopy: () => ze,
      saveLookCapture: () => Be,
      startLookDebug: () => pe
    });
    var ye = He(5279),
      be = He(3037),
      Me = He(1952);
    const Ke = new Map(Object.entries(ye.l).map((ee => {
      let [ie, He] = ee;
      return [He, ie]
    })));

    function Ue(ee) {
      return (0, Me.B)(ee).toFixed(1)
    }

    function Fe(ee, ie) {
      return `camera set by ${Ke.get(ee[ie+1])}: heading ${`${Ue(ee[ie+2])} -> ${Ue(ee[ie+4])}`} deg, pitch ${`${Ue(ee[ie+3])} -> ${Ue(ee[ie+5])}`} deg, at ${ee[ie].toFixed(1)} ms`
    }
    var Je = He(37163);
    const oe = 2;

    function Re(ee) {
      return Number.isFinite(ee) ? String(Math.round(10 * ee) / 10) : String(ee)
    }

    function ke(ee) {
      return Number.isFinite(ee) ? ee.toFixed(1) : String(ee)
    }
    class qe {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.hV = 0, this.pastLimit = 0, this.lockSkips = 0, this.dp = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.cameraSets = 0, this.cameraSetsLost = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
      moved() {
        return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.hV > 0 || this.dropped > 0 || this.cameraSets > 0
      }
      hasEvent() {
        return this.hV > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
      }
    }
    class fe {
      constructor() {
        var ee = this;
        this.topicOn = (0, be.q)("look"), this.remote = (0, be.r)(), this.tally = new qe, this.takes = null, this.started = !1, this.record = function(ie) {
          let He = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          if (Je.p.step(ie, He), !ee.topicOn) return;
          const ye = ie[He],
            be = ie[He + 1],
            Me = ie[He + 2],
            Ke = ie[He + 3],
            Ue = ie[He + 4],
            Fe = ie[He + 5],
            oe = ie[He + 6],
            qe = ie[He + 7],
            fe = ie[He + 8],
            Te = ie[He + 9],
            pe = ee.tally;
          switch (pe.frames++, oe) {
            case Je.m.idle:
              return void pe.idle++;
            case Je.m.dp:
              return void pe.dp++;
            case Je.m.rV:
              return pe.lockSkips++, void(0 === Me && 0 === Ke || ee.outlier(`lock skip dropped raw (${Re(Me)}, ${Re(Ke)}) at ${ke(ye)} ms`))
          }
          pe.looked++, Number.isFinite(be) && (pe.dtMin = Math.min(pe.dtMin, be), pe.dtMax = Math.max(pe.dtMax, be), pe.dtSum += be, be > 0 && (pe.peakRate = Math.max(pe.peakRate, Math.hypot(Ue, Fe) / be))), pe.raw[0] += Me, pe.raw[1] += Ke, pe.turned[0] += Ue, pe.turned[1] += Fe;
          const Xe = Math.abs(Me) > Te || Math.abs(Ke) > Te,
            ze = `raw (${Re(Me)}, ${Re(Ke)}) over ${ke(be)} ms, limit ${Re(Te)}, filter v (${qe.toFixed(3)}, ${fe.toFixed(3)}) px/ms, at ${ke(ye)} ms`;
          oe === Je.m.hV ? (pe.hV++, ee.outlier(`spike put right: ${ze} -> turned (${Re(Ue)}, ${Re(Fe)})`)) : Xe ? (pe.pastLimit++, ee.outlier(`kept past limit: ${ze}`)) : be > 50 && (pe.longFrames++, ee.remote || ee.outlier(`long frame: ${ze}, turned in full`))
        }, this.onMouseMove = ee => {
          const ie = null !== document.pointerLockElement;
          if (Je.p.mouseMove(ee, ie), !this.topicOn) return;
          const He = this.tally,
            {
              movementX: ye,
              movementY: be
            } = ee;
          He.events++;
          const Me = Math.max(Math.abs(ye), Math.abs(be));
          He.eventMax = Math.max(He.eventMax, Me), Me >= 200 && (He.bigEvents++, this.eventOutlier(`big mousemove (${ye}, ${be}) at ${ke(ee.timeStamp)} ms, lock ${ie?"lJ":"free"}`))
        }, this.onLockChange = () => {
          const ee = document.pointerLockElement;
          ee ? Je.p.lockGained() : Je.p.change(Je.c.lockLost), this.topicOn && (0, be.m)("look", `pointer lock ${ee?`gained (${ee.tagName.toLowerCase()})`:"lost"} at ${ke(performance.now())} ms`)
        }, this.onLockError = () => {
          Je.p.change(Je.c.lockError), this.topicOn && (0, be.m)("look", `pointer lock request failed at ${ke(performance.now())} ms`)
        }, this.onVisibility = () => {
          Je.p.change("hidden" === document.visibilityState ? Je.c.hidden : Je.c.visible), this.topicOn && (0, be.m)("look", `page ${document.visibilityState} at ${ke(performance.now())} ms`)
        }, this.onFocus = () => {
          Je.p.change(Je.c.focus)
        }, this.onBlur = () => {
          Je.p.change(Je.c.blur)
        }, this.flush = () => {
          if (this.takeRecords(), !this.topicOn) return;
          const ee = this.tally;
          if (this.tally = new qe, !ee.moved() || this.remote && !ee.hasEvent()) return;
          const ie = ee.looked > 0 ? ee.dtSum / ee.looked : NaN,
            He = [`${ee.frames} frames (${ee.looked} looked, ${ee.idle} idle${"wasm"===Je.p.client?`, ${ee.dp} carried`:""})`, `dt avg ${ke(ie)} min ${ke(ee.dtMin)} max ${ke(ee.dtMax)}, ${ee.longFrames} long`, `${ee.events} mousemoves (max ${Re(ee.eventMax)} px, ${ee.bigEvents} big)`, `raw (${Re(ee.raw[0])}, ${Re(ee.raw[1])}) turned (${Re(ee.turned[0])}, ${Re(ee.turned[1])})`, `peak ${ee.peakRate.toFixed(2)} px/ms`, `put right ${ee.hV}, past limit ${ee.pastLimit}, lock skips ${ee.lockSkips}`, "lock " + (document.pointerLockElement ? "lJ" : "free")];
          ee.dropped > 0 && He.push(`${ee.dropped} doubled spike copies dropped`), ee.cameraSets > 0 && He.push(`${ee.cameraSets} camera sets`), ee.cameraSetsLost > 0 && He.push(`${ee.cameraSetsLost} camera set records lost`), ee.lost > 0 && He.push(`${ee.lost} records lost`), ee.suppressed > 0 && He.push(`${ee.suppressed} outlier lines not shown`), (0, be.m)("look", `1s: ${He.join("; ")}`)
        }
      }
      start(ee, ie) {
        if (Je.p.start(ee, null !== document.pointerLockElement), this.takes = ie, this.topicOn) {
          const {
            screen: ie
          } = window;
          (0, be.m)("look", `start: ${ee} client, dpr ${window.devicePixelRatio}, screen ${ie.width}x${ie.height}, pointer lock ${document.pointerLockElement?"lJ":"free"}`)
        }
        this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), window.addEventListener("focus", this.onFocus), window.addEventListener("blur", this.onBlur), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), this.topicOn && !this.remote && (0, be.i)("look", (() => Je.p.dumpText())))
      }
      outlier(ee) {
        const ie = this.tally;
        ie.outliers >= 20 ? ie.suppressed++ : (ie.outliers++, (0, be.m)("look", ee))
      }
      eventOutlier(ee) {
        const ie = this.tally;
        ie.eventLines >= 10 ? ie.suppressed++ : (ie.eventLines++, (0, be.m)("look", ee))
      }
      takeRecords() {
        if (null === this.takes) return;
        const ee = this.takes.look();
        if (ee.length >= oe) {
          this.counted(Je.c.stepsLost, ee[0]), this.counted(Je.c.droppedCopies, ee[1]);
          for (let ie = oe; ie + Je.f <= ee.length; ie += Je.f) this.record(ee, ie)
        }
        const ie = this.takes.cameraSets();
        if (ie.length >= ye.d) {
          this.counted(Je.c.cameraSetsLost, ie[0]);
          for (let ee = ye.d; ee + ye.f <= ie.length; ee += ye.f) Je.p.cameraSet(ie, ee), this.topicOn && (this.tally.cameraSets++, this.outlier(Fe(ie, ee)))
        }
      }
      droppedCopy() {
        this.counted(Je.c.droppedCopies, 1)
      }
      counted(ee, ie) {
        if (0 === ie) return;
        if (Je.p.change(ee, ie), !this.topicOn) return;
        const He = this.tally;
        ee === Je.c.droppedCopies ? He.dropped += ie : ee === Je.c.stepsLost ? He.lost += ie : He.cameraSetsLost += ie
      }
      endTake() {
        this.takeRecords(), this.takes = null
      }
    }
    let Te = null;

    function pe(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return Te ??= new fe, Te.start(ee, ie), Te.record
    }

    function Xe() {
      var ee;
      null === (ee = Te) || void 0 === ee || ee.endTake()
    }

    function ze() {
      var ee;
      null === (ee = Te) || void 0 === ee || ee.droppedCopy()
    }
    async function Be(ee) {
      var ie;
      null === (ie = Te) || void 0 === ie || ie.takeRecords();
      const {
        clientHintsRead: ye,
        debugDeviceLines: be
      } = await He.e(34).then((() => He(34738)));
      await ye, Je.p.save({
        ...ee,
        device: be()
      })
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);