export const id = 251;
export const ids = [251];
export const modules = {
  37915: (dd, Od, md) => {
    md.d(Od, {
      d: () => Qd,
      h: () => Kd,
      l: () => vd,
      m: () => hd,
      o: () => pd
    });
    var Wd = md(708),
      Fd = md(1906),
      Rd = md(5571);
    class Xd {
      constructor(dd, Od) {
        this.width = dd, this.Mt = Od, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(dd * Od)
      }
      push(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const md = this.data,
          Wd = this.next * this.width;
        for (let Fd = 0; Fd < this.width; Fd++) md[Wd + Fd] = dd[Od + Fd];
        this.next = (this.next + 1) % this.Mt, this.size = Math.min(this.size + 1, this.Mt)
      }
      rows() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1 / 0;
        const md = [],
          Wd = (this.next - this.size + this.Mt) % this.Mt;
        for (let Fd = 0; Fd < this.size; Fd++) {
          const Rd = (Wd + Fd) % this.Mt * this.width;
          this.data[Rd + dd] >= Od && md.push(Array.from(this.data.subarray(Rd, Rd + this.width)))
        }
        return md
      }
      lines() {
        return this.rows().map((dd => dd.join(",")))
      }
    }
    const Kd = 10,
      hd = {
        idle: 0,
        kQ: 1,
        sV: 2,
        rV: 3,
        Ly: 4
      },
      vd = {
        none: 0,
        skipped: 1,
        paced: 2,
        drawn: 3
      },
      Qd = {
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
      td = 12e3,
      od = ["nowMs", "dtMs", "rawX", "rawY", "turnedX", "turnedY", "outcome", "velocityX", "velocityY", "limit"],
      Nd = ["timeStamp", "nowMs", "movementX", "movementY", "locked"],
      qd = ["nowMs", "dtMs", "heading", "pitch", "kind"],
      Hd = ["nowMs", "source", "headingBefore", "pitchBefore", "headingAfter", "pitchAfter"],
      yd = ["nowMs", "change", "count"];

    function bd(dd) {
      return "js" === dd ? Qd.jsClient : Qd.wasmClient
    }
    class Td {
      constructor() {
        this.steps = new Xd(Kd, td), this.events = new Xd(Nd.length, td), this.frames = new Xd(qd.length, td), this.cameraSets = new Xd(Rd.h, 256), this.changes = new Xd(yd.length, 256)
      }
    }
    const pd = new class {
      constructor() {
        this.rings = null, this.sample = new Float64Array(Nd.length), this.startedClient = null, this.startedAtMs = 0
      }
      get client() {
        return this.startedClient
      }
      start(dd, Od) {
        this.startedClient = dd, this.startedAtMs = performance.now(), null !== this.rings ? this.change(bd(dd)) : Od && this.allocate()
      }
      lockGained() {
        this.allocate(), this.change(Qd.lockGained)
      }
      allocate() {
        null === this.rings && (this.rings = new Td, null !== this.startedClient && this.changeAt(this.startedAtMs, bd(this.startedClient), 1))
      }
      step(dd, Od) {
        var md;
        dd[Od + 6] !== hd.Ly && (null === (md = this.rings) || void 0 === md || md.steps.push(dd, Od))
      }
      cameraSet(dd, Od) {
        var md;
        null === (md = this.rings) || void 0 === md || md.cameraSets.push(dd, Od)
      }
      mouseMove(dd, Od) {
        const md = this.rings;
        if (null === md) return;
        const Wd = this.sample;
        Wd[0] = dd.timeStamp, Wd[1] = performance.now(), Wd[2] = dd.movementX, Wd[3] = dd.movementY, Wd[4] = Od ? 1 : 0, md.events.push(Wd)
      }
      frame(dd, Od, md, Wd) {
        const Fd = this.rings;
        if (null === Fd || Wd === vd.none) return;
        const Rd = this.sample;
        Rd[0] = performance.now(), Rd[1] = dd, Rd[2] = Od, Rd[3] = md, Rd[4] = Wd, Fd.frames.push(Rd)
      }
      change(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.changeAt(performance.now(), dd, Od)
      }
      changeAt(dd, Od, md) {
        const Wd = this.rings;
        if (null === Wd) return;
        const Fd = this.sample;
        Fd[0] = dd, Fd[1] = Od, Fd[2] = md, Wd.changes.push(Fd)
      }
      dumpText() {
        var dd, Od;
        const md = this.rings;
        return [`look records (${this.startedClient}): ${od.join(",")}`, ...null !== (dd = null === md || void 0 === md ? void 0 : md.steps.lines()) && void 0 !== dd ? dd : [], `mousemove events: ${Nd.join(",")}`, ...null !== (Od = null === md || void 0 === md ? void 0 : md.events.lines()) && void 0 !== Od ? Od : []].join("\n")
      }
      toJson(dd, Od) {
        var md;
        const Fd = dd - 6e4,
          Rd = this.rings,
          Xd = function(dd, Od) {
            var md;
            let Wd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            const Rd = null !== (md = null === dd || void 0 === dd ? void 0 : dd.rows(Wd, Fd)) && void 0 !== md ? md : [];
            return {
              columns: Od,
              fromMs: 0 === Rd.length ? null : Rd[0][Wd],
              rows: Rd
            }
          };
        return {
          version: Wd.c,
          client: null !== (md = this.startedClient) && void 0 !== md ? md : "not started",
          savedAt: (new Date).toISOString(),
          savedAtMs: dd,
          keptMs: 6e4,
          page: window.location.href,
          userAgent: navigator.userAgent,
          devicePixelRatio: window.devicePixelRatio,
          screen: {
            width: window.screen.width,
            height: window.screen.height
          },
          tb: null !== document.pointerLockElement,
          visibility: document.visibilityState,
          ...Od,
          outcomes: hd,
          frameKinds: vd,
          changes: Qd,
          lookSteps: Xd(null === Rd || void 0 === Rd ? void 0 : Rd.steps, od),
          mouseMoves: Xd(null === Rd || void 0 === Rd ? void 0 : Rd.events, Nd, 1),
          frames: Xd(null === Rd || void 0 === Rd ? void 0 : Rd.frames, qd),
          cameraSets: Xd(null === Rd || void 0 === Rd ? void 0 : Rd.cameraSets, Hd),
          pageChanges: Xd(null === Rd || void 0 === Rd ? void 0 : Rd.changes, yd)
        }
      }
      save(dd) {
        const Od = JSON.stringify(this.toJson(performance.now(), dd));
        (0, Fd.e)(new Blob([Od], {
          type: "application/json"
        }), `bloxd-mouse-look-${(new Date).toISOString().replace(/[:.]/g,"-")}.json`)
      }
    }
  },
  37908: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      LOOK_DEBUG_HEADER: () => Qd,
      endLookDebugTake: () => bd,
      noteLookDroppedCopy: () => Td,
      saveLookCapture: () => pd,
      startLookDebug: () => yd
    });
    var Wd = md(5571),
      Fd = md(3903),
      Rd = md(2057);
    const Xd = new Map(Object.entries(Wd.n).map((dd => {
      let [Od, md] = dd;
      return [md, Od]
    })));

    function Kd(dd) {
      return (0, Rd.B)(dd).toFixed(1)
    }

    function hd(dd, Od) {
      return `camera set by ${Xd.get(dd[Od+1])}: heading ${`${Kd(dd[Od+2])} -> ${Kd(dd[Od+4])}`} deg, pitch ${`${Kd(dd[Od+3])} -> ${Kd(dd[Od+5])}`} deg, at ${dd[Od].toFixed(1)} ms`
    }
    var vd = md(37915);
    const Qd = 2;

    function td(dd) {
      return Number.isFinite(dd) ? String(Math.round(10 * dd) / 10) : String(dd)
    }

    function od(dd) {
      return Number.isFinite(dd) ? dd.toFixed(1) : String(dd)
    }
    class Nd {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.sV = 0, this.pastLimit = 0, this.lockSkips = 0, this.Ly = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.cameraSets = 0, this.cameraSetsLost = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
      moved() {
        return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.sV > 0 || this.dropped > 0 || this.cameraSets > 0
      }
      hasEvent() {
        return this.sV > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
      }
    }
    class qd {
      constructor() {
        var dd = this;
        this.topicOn = (0, Fd.o)("look"), this.remote = (0, Fd.q)(), this.tally = new Nd, this.takes = null, this.started = !1, this.record = function(Od) {
          let md = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          if (vd.o.step(Od, md), !dd.topicOn) return;
          const Wd = Od[md],
            Fd = Od[md + 1],
            Rd = Od[md + 2],
            Xd = Od[md + 3],
            Kd = Od[md + 4],
            hd = Od[md + 5],
            Qd = Od[md + 6],
            Nd = Od[md + 7],
            qd = Od[md + 8],
            Hd = Od[md + 9],
            yd = dd.tally;
          switch (yd.frames++, Qd) {
            case vd.m.idle:
              return void yd.idle++;
            case vd.m.Ly:
              return void yd.Ly++;
            case vd.m.rV:
              return yd.lockSkips++, void(0 === Rd && 0 === Xd || dd.outlier(`lock skip dropped raw (${td(Rd)}, ${td(Xd)}) at ${od(Wd)} ms`))
          }
          yd.looked++, Number.isFinite(Fd) && (yd.dtMin = Math.min(yd.dtMin, Fd), yd.dtMax = Math.max(yd.dtMax, Fd), yd.dtSum += Fd, Fd > 0 && (yd.peakRate = Math.max(yd.peakRate, Math.hypot(Kd, hd) / Fd))), yd.raw[0] += Rd, yd.raw[1] += Xd, yd.turned[0] += Kd, yd.turned[1] += hd;
          const bd = Math.abs(Rd) > Hd || Math.abs(Xd) > Hd,
            Td = `raw (${td(Rd)}, ${td(Xd)}) over ${od(Fd)} ms, limit ${td(Hd)}, filter v (${Nd.toFixed(3)}, ${qd.toFixed(3)}) px/ms, at ${od(Wd)} ms`;
          Qd === vd.m.sV ? (yd.sV++, dd.outlier(`spike put right: ${Td} -> turned (${td(Kd)}, ${td(hd)})`)) : bd ? (yd.pastLimit++, dd.outlier(`kept past limit: ${Td}`)) : Fd > 50 && (yd.longFrames++, dd.remote || dd.outlier(`long frame: ${Td}, turned in full`))
        }, this.onMouseMove = dd => {
          const Od = null !== document.pointerLockElement;
          if (vd.o.mouseMove(dd, Od), !this.topicOn) return;
          const md = this.tally,
            {
              movementX: Wd,
              movementY: Fd
            } = dd;
          md.events++;
          const Rd = Math.max(Math.abs(Wd), Math.abs(Fd));
          md.eventMax = Math.max(md.eventMax, Rd), Rd >= 200 && (md.bigEvents++, this.eventOutlier(`big mousemove (${Wd}, ${Fd}) at ${od(dd.timeStamp)} ms, lock ${Od?"jK":"free"}`))
        }, this.onLockChange = () => {
          const dd = document.pointerLockElement;
          dd ? vd.o.lockGained() : vd.o.change(vd.d.lockLost), this.topicOn && (0, Fd.k)("look", `pointer lock ${dd?`gained (${dd.tagName.toLowerCase()})`:"lost"} at ${od(performance.now())} ms`)
        }, this.onLockError = () => {
          vd.o.change(vd.d.lockError), this.topicOn && (0, Fd.k)("look", `pointer lock request failed at ${od(performance.now())} ms`)
        }, this.onVisibility = () => {
          vd.o.change("hidden" === document.visibilityState ? vd.d.hidden : vd.d.visible), this.topicOn && (0, Fd.k)("look", `page ${document.visibilityState} at ${od(performance.now())} ms`)
        }, this.onFocus = () => {
          vd.o.change(vd.d.focus)
        }, this.onBlur = () => {
          vd.o.change(vd.d.blur)
        }, this.flush = () => {
          if (this.takeRecords(), !this.topicOn) return;
          const dd = this.tally;
          if (this.tally = new Nd, !dd.moved() || this.remote && !dd.hasEvent()) return;
          const Od = dd.looked > 0 ? dd.dtSum / dd.looked : NaN,
            md = [`${dd.frames} frames (${dd.looked} looked, ${dd.idle} idle${"wasm"===vd.o.client?`, ${dd.Ly} carried`:""})`, `dt avg ${od(Od)} min ${od(dd.dtMin)} max ${od(dd.dtMax)}, ${dd.longFrames} long`, `${dd.events} mousemoves (max ${td(dd.eventMax)} px, ${dd.bigEvents} big)`, `raw (${td(dd.raw[0])}, ${td(dd.raw[1])}) turned (${td(dd.turned[0])}, ${td(dd.turned[1])})`, `peak ${dd.peakRate.toFixed(2)} px/ms`, `put right ${dd.sV}, past limit ${dd.pastLimit}, lock skips ${dd.lockSkips}`, "lock " + (document.pointerLockElement ? "jK" : "free")];
          dd.dropped > 0 && md.push(`${dd.dropped} doubled spike copies dropped`), dd.cameraSets > 0 && md.push(`${dd.cameraSets} camera sets`), dd.cameraSetsLost > 0 && md.push(`${dd.cameraSetsLost} camera set records lost`), dd.lost > 0 && md.push(`${dd.lost} records lost`), dd.suppressed > 0 && md.push(`${dd.suppressed} outlier lines not shown`), (0, Fd.k)("look", `1s: ${md.join("; ")}`)
        }
      }
      start(dd, Od) {
        if (vd.o.start(dd, null !== document.pointerLockElement), this.takes = Od, this.topicOn) {
          const {
            screen: Od
          } = window;
          (0, Fd.k)("look", `start: ${dd} client, dpr ${window.devicePixelRatio}, screen ${Od.width}x${Od.height}, pointer lock ${document.pointerLockElement?"jK":"free"}`)
        }
        this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), window.addEventListener("focus", this.onFocus), window.addEventListener("blur", this.onBlur), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), this.topicOn && !this.remote && (0, Fd.g)("look", (() => vd.o.dumpText())))
      }
      outlier(dd) {
        const Od = this.tally;
        Od.outliers >= 20 ? Od.suppressed++ : (Od.outliers++, (0, Fd.k)("look", dd))
      }
      eventOutlier(dd) {
        const Od = this.tally;
        Od.eventLines >= 10 ? Od.suppressed++ : (Od.eventLines++, (0, Fd.k)("look", dd))
      }
      takeRecords() {
        if (null === this.takes) return;
        const dd = this.takes.look();
        if (dd.length >= Qd) {
          this.counted(vd.d.stepsLost, dd[0]), this.counted(vd.d.droppedCopies, dd[1]);
          for (let Od = Qd; Od + vd.h <= dd.length; Od += vd.h) this.record(dd, Od)
        }
        const Od = this.takes.cameraSets();
        if (Od.length >= Wd.e) {
          this.counted(vd.d.cameraSetsLost, Od[0]);
          for (let dd = Wd.e; dd + Wd.h <= Od.length; dd += Wd.h) vd.o.cameraSet(Od, dd), this.topicOn && (this.tally.cameraSets++, this.outlier(hd(Od, dd)))
        }
      }
      droppedCopy() {
        this.counted(vd.d.droppedCopies, 1)
      }
      counted(dd, Od) {
        if (0 === Od) return;
        if (vd.o.change(dd, Od), !this.topicOn) return;
        const md = this.tally;
        dd === vd.d.droppedCopies ? md.dropped += Od : dd === vd.d.stepsLost ? md.lost += Od : md.cameraSetsLost += Od
      }
      endTake() {
        this.takeRecords(), this.takes = null
      }
    }
    let Hd = null;

    function yd(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return Hd ??= new qd, Hd.start(dd, Od), Hd.record
    }

    function bd() {
      var dd;
      null === (dd = Hd) || void 0 === dd || dd.endTake()
    }

    function Td() {
      var dd;
      null === (dd = Hd) || void 0 === dd || dd.droppedCopy()
    }
    async function pd(dd) {
      var Od;
      null === (Od = Hd) || void 0 === Od || Od.takeRecords();
      const {
        clientHintsRead: Wd,
        debugDeviceLines: Fd
      } = await md.e(35).then((() => md(35407)));
      await Wd, vd.o.save({
        ...dd,
        device: Fd()
      })
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);