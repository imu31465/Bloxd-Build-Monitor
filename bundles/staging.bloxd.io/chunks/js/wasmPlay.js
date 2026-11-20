export const id = 61;
export const ids = [61];
export const modules = {
  39088: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => hv,
      g: () => Sv
    });
    const hv = "The world isn't loaded, so no blocks can be seen.",
      Sv = "The world isn't loaded, so nothing in it can be seen."
  },
  4448: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => lv
    });
    var hv = Pv(22),
      Sv = Pv(26),
      ev = Pv(1272),
      gv = Pv(2682);
    const pv = 3e4,
      dv = 1e3;

    function Nv() {
      return "visible" === document.visibilityState && "inGame" === hv.c.get("gameState") && (0, ev.u)()
    }

    function lv(vv, zv) {
      (0, gv.s)() || function(vv, zv, Pv) {
        let hv = 0;
        const Sv = setInterval((() => {
          zv() && (hv += dv, hv >= vv && (clearInterval(Sv), Pv()))
        }), dv)
      }(pv, Nv, (() => {
        zv().then((() => {
          vv(`saved for the player after ${pv/1e3} s of play`), (0, gv.x)(), Sv.j.zC("chat", {
            content: [{
              str: "Saved a debug file to your downloads: please send it to us with a screenshot of the game.",
              style: {
                color: "#ffd84a"
              }
            }]
          })
        }))
      }))
    }
  },
  8867: (vv, zv, Pv) => {
    function hv(vv, zv) {
      return 0 === vv.length ? 0 : vv[Math.min(vv.length - 1, Math.floor(zv * vv.length))]
    }
    Pv.d(zv, {
      b: () => hv
    })
  },
  38626: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => sv,
      e: () => Cv,
      i: () => av
    });
    var hv = Pv(2682);
    const Sv = 0,
      ev = 2,
      gv = 3,
      pv = 4;
    class dv {
      constructor(vv, zv) {
        this.width = vv, this.GT = zv, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(vv * zv)
      }
      push(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Pv = this.data.subarray(this.next * this.width, (this.next + 1) * this.width);
        for (let hv = 0; hv < this.width; hv++) Pv[hv] = vv[zv + hv];
        return this.next = (this.next + 1) % this.GT, this.size = Math.min(this.size + 1, this.GT), Pv
      }
      lines() {
        const vv = [],
          zv = (this.next - this.size + this.GT) % this.GT;
        for (let Pv = 0; Pv < this.size; Pv++) {
          const hv = (zv + Pv) % this.GT * this.width;
          vv.push(Array.from(this.data.subarray(hv, hv + this.width)).join(","))
        }
        return vv
      }
    }

    function Nv(vv) {
      return Number.isFinite(vv) ? String(Math.round(10 * vv) / 10) : String(vv)
    }

    function lv(vv) {
      return Number.isFinite(vv) ? vv.toFixed(1) : String(vv)
    }
    class Tv {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.Jq = 0, this.pastLimit = 0, this.lockSkips = 0, this.dC = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
    }
    class Wv {
      constructor() {
        var vv = this;
        this.tally = new Tv, this.records = new dv(10, 3600), this.events = new dv(4, 12e3), this.event = new Float64Array(4), this.take = null, this.client = "js", this.started = !1, this.record = function(zv) {
          let Pv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const [hv, dv, Tv, Wv, wv, av, sv, Cv, iv, cv] = vv.records.push(zv, Pv), Gv = vv.tally;
          switch (Gv.frames++, sv) {
            case Sv:
              return void Gv.idle++;
            case pv:
              return void Gv.dC++;
            case gv:
              return Gv.lockSkips++, void(0 === Tv && 0 === Wv || vv.outlier(`lock skip dropped raw (${Nv(Tv)}, ${Nv(Wv)}) at ${lv(hv)} ms`))
          }
          Gv.looked++, Number.isFinite(dv) && (Gv.dtMin = Math.min(Gv.dtMin, dv), Gv.dtMax = Math.max(Gv.dtMax, dv), Gv.dtSum += dv, dv > 0 && (Gv.peakRate = Math.max(Gv.peakRate, Math.hypot(wv, av) / dv))), Gv.raw[0] += Tv, Gv.raw[1] += Wv, Gv.turned[0] += wv, Gv.turned[1] += av;
          const mv = Math.abs(Tv) > cv || Math.abs(Wv) > cv,
            jv = `raw (${Nv(Tv)}, ${Nv(Wv)}) over ${lv(dv)} ms, limit ${Nv(cv)}, filter v (${Cv.toFixed(3)}, ${iv.toFixed(3)}) px/ms, at ${lv(hv)} ms`;
          sv === ev ? (Gv.Jq++, vv.outlier(`spike put right: ${jv} -> turned (${Nv(wv)}, ${Nv(av)})`)) : mv ? (Gv.pastLimit++, vv.outlier(`kept past limit: ${jv}`)) : dv > 50 && (Gv.longFrames++, vv.outlier(`long frame: ${jv}, turned in full`))
        }, this.onMouseMove = vv => {
          const zv = this.tally,
            {
              movementX: Pv,
              movementY: hv
            } = vv;
          zv.events++;
          const Sv = Math.max(Math.abs(Pv), Math.abs(hv));
          zv.eventMax = Math.max(zv.eventMax, Sv);
          const ev = null !== document.pointerLockElement,
            gv = this.event;
          gv[0] = vv.timeStamp, gv[1] = Pv, gv[2] = hv, gv[3] = ev ? 1 : 0, this.events.push(gv), Sv >= 200 && (zv.bigEvents++, this.eventOutlier(`big mousemove (${Pv}, ${hv}) at ${lv(vv.timeStamp)} ms, lock ${ev?"Vp":"free"}`))
        }, this.onLockChange = () => {
          const vv = document.pointerLockElement;
          (0, hv.i)("look", `pointer lock ${vv?`gained (${vv.tagName.toLowerCase()})`:"lost"} at ${lv(performance.now())} ms`)
        }, this.onLockError = () => {
          (0, hv.i)("look", `pointer lock request failed at ${lv(performance.now())} ms`)
        }, this.onVisibility = () => {
          (0, hv.i)("look", `page ${document.visibilityState} at ${lv(performance.now())} ms`)
        }, this.flush = () => {
          this.takeRecords();
          const vv = this.tally;
          if (this.tally = new Tv, 0 === vv.events && 0 === vv.raw[0] && 0 === vv.raw[1] && 0 === vv.lockSkips && 0 === vv.Jq && 0 === vv.dropped) return;
          const zv = vv.looked > 0 ? vv.dtSum / vv.looked : NaN,
            Pv = [`${vv.frames} frames (${vv.looked} looked, ${vv.idle} idle${"wasm"===this.client?`, ${vv.dC} carried`:""})`, `dt avg ${lv(zv)} min ${lv(vv.dtMin)} max ${lv(vv.dtMax)}, ${vv.longFrames} long`, `${vv.events} mousemoves (max ${Nv(vv.eventMax)} px, ${vv.bigEvents} big)`, `raw (${Nv(vv.raw[0])}, ${Nv(vv.raw[1])}) turned (${Nv(vv.turned[0])}, ${Nv(vv.turned[1])})`, `peak ${vv.peakRate.toFixed(2)} px/ms`, `put right ${vv.Jq}, past limit ${vv.pastLimit}, lock skips ${vv.lockSkips}`, "lock " + (document.pointerLockElement ? "Vp" : "free")];
          vv.dropped > 0 && Pv.push(`${vv.dropped} doubled spike copies dropped`), vv.lost > 0 && Pv.push(`${vv.lost} records lost`), vv.suppressed > 0 && Pv.push(`${vv.suppressed} outlier lines not shown`), (0, hv.i)("look", `1s: ${Pv.join("; ")}`)
        }, this.dump = () => [`look records (${this.client}): nowMs,dtMs,rawX,rawY,turnedX,turnedY,outcome,vX,vY,limit`, ...this.records.lines(), "mousemove events: timeStamp,movementX,movementY,locked", ...this.events.lines()].join("\n")
      }
      start(vv, zv) {
        this.client = vv, this.take = zv;
        const {
          screen: Pv
        } = window;
        (0, hv.i)("look", `start: ${vv} client, dpr ${window.devicePixelRatio}, screen ${Pv.width}x${Pv.height}, pointer lock ${document.pointerLockElement?"Vp":"free"}`), this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), (0, hv.f)("look", this.dump))
      }
      outlier(vv) {
        const zv = this.tally;
        zv.outliers >= 20 ? zv.suppressed++ : (zv.outliers++, (0, hv.i)("look", vv))
      }
      eventOutlier(vv) {
        const zv = this.tally;
        zv.eventLines >= 10 ? zv.suppressed++ : (zv.eventLines++, (0, hv.i)("look", vv))
      }
      takeRecords() {
        var vv;
        const zv = null === (vv = this.take) || void 0 === vv ? void 0 : vv.call(this);
        if (zv && zv.length >= 2) {
          this.tally.lost += zv[0], this.tally.dropped += zv[1];
          for (let vv = 2; vv + 10 <= zv.length; vv += 10) this.record(zv, vv)
        }
      }
      droppedCopy() {
        this.tally.dropped++
      }
      endTake() {
        this.takeRecords(), this.take = null
      }
    }
    let wv = null;

    function av(vv) {
      let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return wv ??= new Wv, wv.start(vv, zv), wv.record
    }

    function sv() {
      var vv;
      null === (vv = wv) || void 0 === vv || vv.endTake()
    }

    function Cv() {
      var vv;
      null === (vv = wv) || void 0 === vv || vv.droppedCopy()
    }
  },
  37465: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Nv,
      e: () => lv,
      h: () => mv,
      i: () => Gv,
      l: () => cv
    });
    var hv = Pv(4448),
      Sv = Pv(8867),
      ev = Pv(2682);
    const gv = 20,
      pv = ["totalMs", "slotMs", "workerMs", "applyMs", "ahead", "inFlight", "GT", "jobMs"];

    function dv(vv) {
      return [...vv].sort(((vv, zv) => vv - zv))
    }
    const Nv = [];

    function lv(vv, zv, Pv) {
      return `${vv},${zv},${Pv}`
    }
    class Tv {
      constructor() {
        this.pending = new Map, this.jobs = new Map, this.edits = [], this.nextEdit = 0, this.reported = 0, this.windowStart = performance.now(), this.frames = 0, this.lastFrameAt = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      edit(vv, zv) {
        var Pv;
        const hv = null !== (Pv = this.pending.get(vv)) && void 0 !== Pv ? Pv : [];
        hv.push({
          editAt: zv,
          meshJobId: 0
        }), this.pending.set(vv, hv)
      }
      frame(vv) {
        this.lastFrameAt > 0 && (this.maxFrameMs = Math.max(this.maxFrameMs, vv - this.lastFrameAt)), this.lastFrameAt = vv, this.frames++, vv - this.windowStart >= 1e3 && this.summarise(vv)
      }
      sent(vv, zv, Pv, hv, Sv, ev, gv) {
        this.jobs.set(zv, {
          sentAt: gv,
          receivedAt: 0,
          ahead: Pv,
          inFlight: hv,
          GT: Sv,
          jobMs: 0
        }), this.jobsSent++, this.maxAhead = Math.max(this.maxAhead, Pv), this.maxCapacity = Math.max(this.maxCapacity, Sv);
        for (const dv of null !== (pv = this.pending.get(vv)) && void 0 !== pv ? pv : []) {
          var pv;
          ev.includes(dv.meshJobId) || (dv.meshJobId = zv)
        }
      }
      received(vv, zv, Pv) {
        const hv = this.jobs.get(vv);
        void 0 !== hv && (this.roundTrips.push(Pv - hv.sentAt), hv.receivedAt = Pv, hv.jobMs = zv)
      }
      failed(vv) {
        this.jobs.delete(vv)
      }
      reassign(vv, zv, Pv) {
        this.jobs.delete(zv);
        for (const Sv of null !== (hv = this.pending.get(vv)) && void 0 !== hv ? hv : []) {
          var hv;
          Sv.meshJobId === zv && (Sv.meshJobId = Pv)
        }
      }
      applied(vv, zv, Pv) {
        const hv = this.jobs.get(zv);
        this.jobs.delete(zv), void 0 !== hv && this.show(vv, hv, Pv, (vv => vv.meshJobId === zv))
      }
      emptied(vv, zv) {
        const Pv = {
          sentAt: zv,
          receivedAt: zv,
          ahead: 0,
          inFlight: 0,
          GT: 0,
          jobMs: 0
        };
        this.show(vv, Pv, zv, (() => !0))
      }
      show(vv, zv, Pv, hv) {
        const Sv = this.pending.get(vv);
        if (!Sv) return;
        const ev = Sv.filter((Sv => !hv(Sv) || (this.record(vv, Sv.editAt, zv, Pv), !1)));
        ev.length > 0 ? this.pending.set(vv, ev) : this.pending.delete(vv)
      }
      yw(vv) {
        this.reported += vv, this === wv && this.reported >= gv && null !== av && (av(), av = null)
      }
      record(vv, zv, Pv, hv) {
        const Sv = {
          totalMs: hv - zv,
          slotMs: Pv.sentAt - zv,
          workerMs: Pv.receivedAt - Pv.sentAt,
          applyMs: hv - Pv.receivedAt,
          ahead: Pv.ahead,
          inFlight: Pv.inFlight,
          GT: Pv.GT,
          jobMs: Pv.jobMs
        };
        if (this.edits[this.nextEdit] = Sv, this.nextEdit = (this.nextEdit + 1) % 500, this.windowEdits.push(Sv.totalMs), this.yw(1), Sv.totalMs < 100 || ++this.outliers > 5) return;
        const gv = vv => Math.round(vv);
        (0, ev.i)("remesh", `slow edit (${vv}) shown in ${gv(Sv.totalMs)} ms: slot ${gv(Sv.slotMs)}, worker ${gv(Sv.workerMs)} (${Sv.ahead} ahead, ${Sv.inFlight}/${Sv.GT} in flight; job ${gv(Sv.jobMs)}), apply ${gv(Sv.applyMs)}`)
      }
      summarise(vv) {
        const zv = (vv - this.windowStart) / 1e3;
        for (const [Pv, hv] of this.pending) {
          const zv = hv.filter((zv => vv - zv.editAt <= 1e4));
          this.gaveUp += hv.length - zv.length, this.yw(hv.length - zv.length), zv.length > 0 ? this.pending.set(Pv, zv) : this.pending.delete(Pv)
        }
        for (const [Pv, hv] of this.jobs) vv - hv.sentAt > (hv.receivedAt > 0 ? 1e4 : 6e4) && this.jobs.delete(Pv);
        if (this.jobsSent > 0 || this.roundTrips.length > 0 || this.windowEdits.length > 0 || this.gaveUp > 0) {
          const vv = dv(this.roundTrips),
            Pv = dv(this.windowEdits),
            hv = Math.max(0, this.outliers - 5);
          (0, ev.i)("remesh", `${Math.round(this.frames/zv)} fps (longest ${Math.round(this.maxFrameMs)} ms) | ${this.jobsSent} jobs sent, up to ${this.maxAhead} ahead on a worker, capacity ${this.maxCapacity} | round trip p50 ${Math.round((0,Sv.b)(vv,.5))} max ${Math.round((0,Sv.b)(vv,1))} ms | ${Pv.length} edits shown, p50 ${Math.round((0,Sv.b)(Pv,.5))} max ${Math.round((0,Sv.b)(Pv,1))} ms${hv>0?`, ${hv} more slow`:""}${this.gaveUp>0?`, ${this.gaveUp} never shown`:""}`)
        }
        this.windowStart = vv, this.frames = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      stats() {
        const vv = pv.map((vv => {
          const zv = dv(this.edits.map((zv => zv[vv])));
          return `${vv}: p50 ${Math.round((0,Sv.b)(zv,.5))} p90 ${Math.round((0,Sv.b)(zv,.9))} max ${Math.round((0,Sv.b)(zv,1))}`
        }));
        return [`${this.edits.length} edits`, ...vv].join("\n")
      }
      dump() {
        const vv = this.edits.map((vv => pv.map((zv => Math.round(10 * vv[zv]) / 10)).join(",")));
        return [this.stats(), pv.join(","), ...vv].join("\n")
      }
    }
    class Wv {
      constructor(vv, zv) {
        this.log = vv, this.vW = zv
      }
      edit(vv, zv, Pv) {
        const [hv, Sv, ev] = this.vW.oT.ozv(vv, zv, Pv), gv = this.vW.oT.Ns.ls(hv, Sv, ev);
        gv && gv.gs && this.log.edit(lv(hv, Sv, ev), performance.now())
      }
      sent(vv, zv, Pv, hv, Sv) {
        this.log.sent(lv(vv.i, vv.j, vv.k), zv, Pv, hv, Sv, Nv, performance.now())
      }
      received(vv) {
        this.log.received(vv.meshJobId, vv.jobMs, performance.now())
      }
      failed(vv) {
        this.log.failed(vv)
      }
      applied(vv, zv) {
        this.log.applied(lv(vv.i, vv.j, vv.k), zv, performance.now())
      }
    }
    let wv = null,
      av = null,
      sv = !1,
      Cv = null;

    function iv() {
      return new Promise((vv => {
        null !== wv && wv.reported >= gv ? vv() : av = vv
      }))
    }

    function cv() {
      const vv = new Tv;
      return wv = vv, (0, ev.f)("remesh", (() => vv.dump())), (0, ev.b)("remeshStats", (() => {
        console.log(vv.stats())
      })), sv || (sv = !0, (0, hv.d)((vv => {
        (0, ev.i)("remesh", vv)
      }), iv)), vv
    }

    function Gv(vv) {
      const zv = cv();
      Cv = new Wv(zv, vv), vv.SF.meshProbe = Cv, vv.on("beforeRender", (() => {
        zv.frame(performance.now())
      }))
    }

    function mv(vv, zv, Pv) {
      var hv;
      null === (hv = Cv) || void 0 === hv || hv.edit(vv, zv, Pv)
    }
  },
  8888: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => hv
    });
    const hv = new Set(["chunkBorders"])
  },
  9049: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => gv,
      g: () => Sv,
      k: () => lv
    });
    var hv = Pv(1548);

    function Sv(vv) {
      var zv;
      return {
        ...gv.store,
        yaw: gv.store.yaw + (null !== (zv = hv.b[vv].previewYaw) && void 0 !== zv ? zv : 0)
      }
    }
    const ev = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      gv = {
        player: ev,
        store: {
          ...ev,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function pv(vv, zv) {
      vv instanceof Promise ? vv.then(zv).catch((vv => {
        console.error("Couldn't open the preview", vv)
      })) : zv(vv)
    }
    class dv {
      constructor(vv) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, pv(vv, (vv => {
          this.closed ? vv.close() : (this.opened = vv, null !== this.size && vv.resize(this.size.width, this.size.height), null !== this.view && vv.show(this.view))
        }))
      }
      show(vv) {
        var zv;
        this.view = vv, null === (zv = this.opened) || void 0 === zv || zv.show(vv)
      }
      resize(vv, zv) {
        var Pv;
        this.size = {
          width: vv,
          height: zv
        }, null === (Pv = this.opened) || void 0 === Pv || Pv.resize(vv, zv)
      }
      close() {
        var vv;
        this.closed = !0, null === (vv = this.opened) || void 0 === vv || vv.close(), this.opened = null
      }
    }
    class Nv {
      constructor(vv) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(vv).then((vv => vv.ready)), pv(vv, (vv => {
          this.closed ? vv.close() : (this.opened = vv, null !== this.size && vv.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var vv, zv;
        return null !== (vv = null === (zv = this.opened) || void 0 === zv ? void 0 : zv.isReady()) && void 0 !== vv && vv
      }
      setCosmetic(vv, zv) {
        var Pv;
        null === (Pv = this.opened) || void 0 === Pv || Pv.setCosmetic(vv, zv)
      }
      playEmote(vv) {
        var zv;
        null === (zv = this.opened) || void 0 === zv || zv.playEmote(vv)
      }
      setOrbit(vv) {
        var zv;
        null === (zv = this.opened) || void 0 === zv || zv.setOrbit(vv)
      }
      resetCamera() {
        var vv;
        null === (vv = this.opened) || void 0 === vv || vv.resetCamera()
      }
      async untilDrawn(vv) {
        var zv;
        await this.ready, await (null === (zv = this.opened) || void 0 === zv ? void 0 : zv.untilDrawn(vv))
      }
      resize(vv, zv) {
        var Pv;
        this.size = {
          width: vv,
          height: zv
        }, null === (Pv = this.opened) || void 0 === Pv || Pv.resize(vv, zv)
      }
      close() {
        var vv;
        this.closed = !0, null === (vv = this.opened) || void 0 === vv || vv.close(), this.opened = null
      }
    }
    const lv = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(vv) {
        this.host = vv
      }
      setDefaultHost(vv) {
        this.makeDefault = vv
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(vv) {
        return new dv(this.current().openMob(vv))
      }
      openPet(vv) {
        return new dv(this.current().openPet(vv))
      }
      openMobLineup(vv) {
        return new dv(this.current().openMobLineup(vv))
      }
      openCharacter(vv, zv) {
        return new Nv(this.current().openCharacter(vv, zv))
      }
    }
  },
  38747: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Tv,
      c: () => Wv
    });
    var hv = Pv(144),
      Sv = Pv(172),
      ev = Pv(1473),
      gv = Pv(2715),
      pv = Pv(1482),
      dv = Pv(36010),
      Nv = Pv(650),
      lv = Pv(38715);

    function Tv(vv) {
      (0, gv.e)("matchmake_failed", vv, hv.o[hv.o.SHADER_PACK])
    }
    async function Wv(vv, zv) {
      var Pv;
      const hv = null === (Pv = await lv.shaderPackPage.preload()) || void 0 === Pv ? void 0 : Pv.listing,
        gv = (0, dv.c)();
      hv && null !== gv && await pv.e.reportShaderPackSession(vv, {
        packId: hv.packId,
        sourceHash: hv.sourceHash,
        game: (0, ev.e)(zv, Sv.x, "other"),
        playSessionId: gv,
        visitSessionId: (0, Nv.d)()
      })
    }
  },
  38573: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => pv
    });
    var hv = Pv(26),
      Sv = Pv(1272),
      ev = Pv(3218);
    const gv = "Reconnecting";
    class pv {
      constructor(vv) {
        this.hooks = vv, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = vv => {
          vv.persisted || this.leave()
        }, this.controller = new ev.b((zv => vv.reconnect(zv)), {
          isSessionLive: () => !this.ended && vv.isLive(),
          onPhaseChanged: vv => {
            this.onPhaseChanged(vv)
          },
          onReconnected: zv => {
            vv.onReconnected(zv)
          },
          onGaveUp: zv => {
            !this.ended && vv.isLive() && vv.onGaveUp(this.sessionBased, zv)
          }
        })
      }
      onInitialInfo(vv, zv) {
        this.graceMs = vv, this.sessionBased = zv
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(vv) {
        this.ended || this.controller.onConnectionLost(vv, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const vv = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          zv = this.controller.heldToken;
        this.end(), vv && "" !== zv && this.hooks.releaseSeat(zv)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(vv) {
        const zv = "frozen" === vv || "resuming" === vv;
        zv !== this.stopped && (this.stopped = zv, this.hooks.freeze(zv));
        const Pv = "frozen" === vv || "resuming" === vv && this.frozen;
        Pv && !this.frozen ? (0, Sv.r)(gv) : !Pv && this.frozen && (0, Sv.q)(gv), this.frozen = Pv, this.setListening("connected" !== vv), hv.j.zC(ev.p, Pv ? "frozen" : vv)
      }
      setListening(vv) {
        vv !== this.listening && (this.listening = vv, vv ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  38579: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => hv
    });
    class hv {
      constructor(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = vv, this.now = zv, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const vv = this.now(),
            zv = vv - this.lastCheckAt <= 2e3;
          this.lastCheckAt = vv;
          const Pv = "visible" === document.visibilityState;
          !Pv || zv && this.wasVisible || (this.resumedAt = vv), this.wasVisible = Pv, Pv && vv - this.lastHeardAt > 12e3 && vv - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = zv(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  8924: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => ev
    });
    var hv = Pv(1056);

    function Sv() {
      var vv, zv;
      return null !== (vv = null === (zv = screen.orientation) || void 0 === zv ? void 0 : zv.type) && void 0 !== vv ? vv : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const ev = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && Sv() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = Sv(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, hv.ws)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const vv of this.resizers) vv()
          }
        }), 1e3)
      }
      heldSizer(vv) {
        let zv = !1;
        return () => {
          if (zv && this.isHeld()) return null;
          const Pv = vv();
          return zv ||= null !== Pv, Pv
        }
      }
      onRelease(vv) {
        return this.resizers.add(vv), () => {
          this.resizers.delete(vv)
        }
      }
    }
  },
  38733: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Sv
    });
    let hv = !1;
    async function Sv(vv, zv) {
      if (!hv) {
        hv = !0;
        try {
          const [{
            reloadBloxd: hv
          }, {
            NotificationProvider: Sv
          }] = await Promise.all([Promise.resolve().then((() => Pv(1692))), Promise.resolve().then((() => Pv(1336)))]);
          if (!vv || !0 === await Sv.showPromptPopup({
              title: "Unsaved changes",
              subtitle: "Exit and lose your unsaved changes?",
              confirmText: "Exit",
              destructive: !0,
              cancelText: "Cancel",
              unlockPointerKey: "replayExitUnsavedChanges"
            }).getResult()) return void hv(zv)
        } catch (Sv) {
          console.error("Leaving the replay failed", Sv)
        }
        hv = !1
      }
    }
  },
  38596: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Nv,
      h: () => lv
    });
    var hv = Pv(1676),
      Sv = Pv(185),
      ev = Pv(1657),
      gv = Pv(1741),
      pv = Pv(1184),
      dv = Pv(1114);
    async function Nv(vv, zv) {
      return function(vv) {
        return "object" === typeof vv && null !== vv && vv.code === Sv.b.VpnIp.code
      }(zv) && function(vv) {
        return ev.d.supports("appCheck") && vv.isLoggedIn() && !vv.hasTriedAppAttestation()
      }(vv) && await async function(vv) {
        try {
          const {
            token: zv
          } = await (0, gv.e)(), {
            "3PSIDMCPP": Pv
          } = await (0, dv.postJsonWithMetricsCookiesAndJsonResponse)(`${pv.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: zv
          }, {
            retries: 0
          }, vv.getMetricsCookies());
          return vv.setAppAttestedAuthJwt(Pv), !0
        } catch (zv) {
          return zv instanceof hv.b && "failed" === zv.code ? (console.warn("The app couldn't get an App Check token:", zv), vv.markAppAttestationTried()) : console.error("Failed to attest the app:", zv), !1
        }
      }(vv)
    }
    async function lv(vv, zv) {
      try {
        return await zv()
      } catch (Pv) {
        if (!await Nv(vv, Pv)) throw Pv
      }
      return zv()
    }
  },
  40339: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => dv
    });
    var hv = Pv(1711);
    const Sv = 33177600,
      ev = 3e4;
    let gv = !1;

    function pv(vv, zv, Pv) {
      if (!vv.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (gv) return Promise.reject(new Error("A screenshot is already being taken"));
      gv = !0;
      const hv = function(vv, zv, Pv) {
        const hv = Math.max(1, vv),
          ev = Math.max(1, zv),
          gv = Math.min(1, Pv / Math.max(hv, ev), Math.sqrt(Sv / (hv * ev)));
        return {
          width: Math.max(1, Math.floor(hv * gv)),
          height: Math.max(1, Math.floor(ev * gv))
        }
      }(zv, Pv, vv.maxTextureSize);
      return vv.resize(hv.width, hv.height), new Promise(((zv, Pv) => {
        let hv, Sv = 2,
          pv = null;
        const dv = () => {
          var zv;
          gv = !1, null === (zv = pv) || void 0 === zv || zv(), clearTimeout(hv), vv.restoreSize()
        };
        hv = setTimeout((() => {
          dv(), Pv(new Error("No frame was drawn to capture"))
        }), ev), pv = vv.onFrameDrawn((() => {
          if (Sv--, Sv > 0) return;
          const {
            canvas: hv
          } = vv, ev = {
            width: hv.width,
            height: hv.height
          };
          try {
            hv.toBlob((vv => {
              vv ? zv({
                blob: vv,
                ...ev
              }) : Pv(new Error("The canvas gave no image"))
            }), "image/png")
          } catch (gv) {
            Pv(gv)
          } finally {
            dv()
          }
        }))
      }))
    }
    async function dv(vv, zv, Pv) {
      try {
        const Sv = await pv(vv, zv, Pv);
        (0, hv.d)(Sv.blob, `bloxd-screenshot-${Sv.width}x${Sv.height}-${Date.now()}.png`)
      } catch (Sv) {
        console.error("Error taking screenshot:", Sv)
      }
    }
  },
  39095: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Nv
    });
    var hv = Pv(1657),
      Sv = Pv(73),
      ev = Pv(108),
      gv = Pv(35983),
      pv = Pv(644),
      dv = Pv(1684);

    function Nv(vv) {
      var zv, Pv, dv, Nv;
      const Tv = (0, gv.c)();
      return {
        game: vv,
        os: (0, Sv.getOperatingSystem)(),
        decodedAudioMiB: null === Tv ? null : (0, pv.M)(Tv.bytes),
        songsDecoded: null !== (zv = null === Tv || void 0 === Tv ? void 0 : Tv.songsDecoded) && void 0 !== zv ? zv : null,
        sheetsDecoded: null !== (Pv = null === Tv || void 0 === Tv ? void 0 : Tv.sheetsDecoded) && void 0 !== Pv ? Pv : null,
        siteUsed: ev.o,
        appVersion: (null === (dv = hv.d.appHello) || void 0 === dv ? void 0 : dv.appVersion) || null,
        appBuild: (null === (Nv = hv.d.appHello) || void 0 === Nv ? void 0 : Nv.build) || null,
        msSinceVideoAd: lv()
      }
    }

    function lv() {
      if ((0, dv.g)()) return 0;
      const vv = (0, dv.e)();
      return null === vv ? null : Math.round(performance.now() - vv.endedAt)
    }(0, dv.o)(pv.J)
  },
  35983: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => ev,
      e: () => Sv
    });
    let hv = null;

    function Sv(vv) {
      hv = vv
    }

    function ev() {
      return null === hv ? null : hv()
    }
  },
  38587: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => Wv,
      f: () => lv
    });
    var hv = Pv(185),
      Sv = Pv(1773),
      ev = Pv(1779),
      gv = Pv(8572);
    const pv = [250, 500, 1e3, 2e3, 1250],
      dv = 406;

    function Nv(vv) {
      if ("object" !== typeof vv || null === vv) return !1;
      const {
        code: zv,
        message: Pv
      } = vv, Sv = hv.b.duplicateLobbyNameError;
      return (zv === Sv.code || zv === dv) && (Pv === Sv.text || Pv === Sv.text + hv.l)
    }
    async function lv(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Sv.b;
      for (let Sv = 0;; Sv++) {
        let gv;
        (0, ev.p)(zv);
        try {
          return await vv()
        } catch (hv) {
          if (gv = pv[Sv], void 0 === gv || !Nv(hv)) throw hv
        }
        await Pv(gv, zv)
      }
    }
    const Tv = new Set([hv.b.duplicateLobbyNameError.code, hv.b.lobbyCantBeCreated.code, hv.b.roomDisposedEarlyError.code, hv.b.roomDisposedLateError.code, hv.b.serverRoomLimitReached.code]);

    function Wv(vv) {
      if (Nv(vv)) return !0;
      const zv = (0, gv.g)(vv);
      return "number" === typeof zv && Tv.has(zv)
    }
  },
  8572: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => ev,
      g: () => gv,
      h: () => pv,
      k: () => Nv,
      n: () => dv
    });
    var hv = Pv(185),
      Sv = Pv(4386);

    function ev(vv) {
      return gv(vv) === hv.b.gameOrPluginOnPlayerAuthRejected.code
    }

    function gv(vv) {
      return "object" === typeof vv && null !== vv ? vv.code : void 0
    }

    function pv(vv) {
      var zv;
      return null !== (zv = Object.keys(Sv.d).find((zv => Sv.d[zv] === vv))) && void 0 !== zv ? zv : null
    }

    function dv(vv) {
      return "notWhitelisted" === vv ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const Nv = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  38675: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => gv
    });
    var hv = Pv(302),
      Sv = Pv(108),
      ev = Pv(39);

    function gv() {
      ev.h.setItem(hv.xb, ev.h.getItem(hv.xb) + 1), (0, Sv.i)() && ev.h.setItem(hv.vb, ev.h.getItem(hv.vb) + 1)
    }
  },
  36003: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => cv,
      i: () => Gv
    });
    var hv = Pv(1002),
      Sv = Pv(628),
      ev = Pv(312),
      gv = Pv(1006),
      pv = Pv(635),
      dv = Pv(668),
      Nv = Pv(4279),
      lv = Pv(73),
      Tv = Pv(108),
      Wv = Pv(1692),
      wv = Pv(86),
      av = Pv(36010),
      sv = Pv(39),
      Cv = Pv(650),
      iv = Pv(36016);

    function cv() {
      var vv, zv;
      return [...null !== (vv = navigator.languages) && void 0 !== vv ? vv : [null !== (zv = navigator.language) && void 0 !== zv ? zv : "none"], "en-gb"]
    }

    function Gv(vv, zv, Pv, Gv, mv) {
      const jv = (0, hv.l)(zv) ? (0, hv.q)(zv) : null,
        fv = {
          cookies: (0, Wv.getAllCookiesForGameNameWithVariation)(zv),
          isMobile: (0, lv.isMobile)(),
          isUsingCustomGameTexturePack: null !== jv && mv(jv),
          generalCookies: {
            joinDiscord: !!sv.h.getItem("DiscordPressed"),
            newGo: Nv.c,
            ...vv.getMetricsCookies(),
            trafficCode: Gv,
            compliance: lv.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, lv.getBrowserName)(),
            version: (0, lv.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, lv.getPlatformType)(),
            deviceType: (0, wv.b)()
          },
          isLoggedIn: vv.isLoggedIn(),
          lobbyName: Pv,
          languages: cv(),
          version: Sv.c,
          siteUsed: Tv.o,
          subsiteUsed: Tv.v,
          playSessionId: (0, av.k)(zv),
          visitSessionId: (0, Cv.d)(),
          clientReason: pv.m.reason,
          budgetBasis: (0, iv.e)(),
          ...null !== dv.s && {
            diagClaim: dv.s.claimId
          }
        };
      return null !== jv && (0, ev.uc)(jv) ? (fv.lobbyName = (0, hv.k)(jv, (0, hv.m)(zv), Pv), {
        roomName: `classic_${gv.f}`,
        joinOptions: fv
      }) : {
        roomName: zv,
        joinOptions: fv
      }
    }
  },
  39973: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => pv
    });
    var hv = Pv(39088);

    function Sv(vv) {
      return {
        current: () => vv,
        watch: () => () => {}
      }
    }

    function ev() {}
    const gv = Object.freeze([0, 0, 0]),
      pv = {
        states: {
          health: Sv({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: Sv({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: Sv({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: Sv({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: Sv({}),
          creativeVisibility: Sv({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: Sv(null),
          heldItemAim: Sv({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: Sv(!1),
          gliderBoostFuel: Sv(0),
          flight: Sv({
            canFly: !1,
            flying: !1
          }),
          crafting: Sv({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: Sv({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: Sv({}),
          fullInventory: Sv(!1),
          crosshairTarget: Sv({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: Sv(!0),
          freeCamera: Sv({
            allowed: !1,
            movesFly: !1
          }),
          replay: Sv(null),
          replayEdits: Sv(null),
          replayRecorder: Sv({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: Sv(!1)
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
          selectHotbarSlot: ev,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: ev,
          setInventoryOpen: ev,
          changeIronChestPasskey: ev,
          dragReplayCamera: ev,
          applyTemporaryThirdPerson: ev,
          holdEmoteWheel: ev,
          recordFlyingMiddleText: ev,
          focusCrafting: ev,
          craftRecipe: () => ({
            Cp: 0,
            Vl: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: ev,
          setShopOpen: ev,
          buyShopItem: ev,
          lobbyManage: ev,
          sendChatMessage: ev,
          ignorePlayer: ev,
          reportPlayer: ev,
          reportWorldCodeChat: ev,
          requestDiscordReportKey: ev,
          reportLobbyOrGame: ev,
          playEmote: ev,
          updateMyCosmetic: ev,
          writeOnBoard: ev,
          writeBook: ev,
          writeNameTag: ev,
          setCustomLobbyBlock: ev,
          openIronChest: ev,
          sendCodeCollab: ev,
          clickCodeBlock: ev,
          bindCustomButtonKeys: ev,
          pressCustomButton: ev,
          moveReplayFreecam: ev,
          holdReplayFreecamVertical: ev,
          respawn: ev,
          wakeUp: ev,
          requestLeaderboard: ev,
          completeTask: ev,
          setServerCookie: ev,
          answerUiRequest: ev,
          chooseRewardedAd: ev,
          setCameraZoom: ev,
          setFreeCameraMovesFly: ev,
          setBlockHighlight: ev,
          setCrosshairInteractPrompt: ev,
          setLookSensitivity: ev,
          replayAction: ev,
          setReplayPlaying: ev,
          seekReplay: ev,
          setReplayCameraMode: ev,
          syncReplayCameraMode: ev,
          setReplayCameraKeyframe: ev,
          moveReplayCameraKeyframe: ev,
          deleteReplayCameraKeyframes: ev,
          setReplayPlaybackMark: ev,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: ev,
          exportReplayVideo: ev,
          toggleRecording: ev,
          saveClip: ev,
          setRecorderPrefs: ev,
          setReplayViewerOpen: ev
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => hv.e,
          worldCodeAiGameState: () => hv.g
        },
        lookups: {
          localPos: () => gv,
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
  36016: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => fv,
      e: () => jv,
      h: () => mv
    });
    var hv = Pv(185),
      Sv = Pv(73),
      ev = Pv(2693),
      gv = Pv(4156),
      pv = Pv(644),
      dv = Pv(36024);
    const Nv = 1048576,
      lv = 1024 * Nv,
      Tv = 400 * Nv,
      Wv = 147456,
      wv = .5,
      av = 1.5 * lv,
      sv = 768 * Nv;

    function Cv(vv) {
      return Tv + vv * Wv
    }

    function iv(vv, zv, Pv) {
      var Sv, gv;
      let {
        footprintBytes: pv,
        basis: Nv,
        namesLimit: iv
      } = function(vv) {
        const {
          os: zv,
          deviceMemory: Pv
        } = vv;
        if ("ios" === zv) switch ((0, ev.e)(vv)) {
          case "ipad_m":
            return {
              footprintBytes: Cv(dv.e), basis: "ipad-m", namesLimit: !1
            };
          case "ipad":
            return {
              footprintBytes: sv, basis: "ipad", namesLimit: !0
            };
          case "iphone_6gb":
            return {
              footprintBytes: av, basis: "iphone-6gb", namesLimit: !0
            };
          case "iphone":
            return {
              footprintBytes: sv, basis: "iphone", namesLimit: !0
            }
        }
        return "number" === typeof Pv && Number.isFinite(Pv) && Pv > 0 ? {
          footprintBytes: Pv * lv * wv,
          basis: `memory-${Pv}`,
          namesLimit: !0
        } : "android" === zv ? {
          footprintBytes: sv,
          basis: "android",
          namesLimit: !0
        } : {
          footprintBytes: Cv(dv.k),
          basis: "unreported",
          namesLimit: !1
        }
      }(vv);
      if (Pv) {
        const vv = Math.min(pv, Cv(dv.e));
        pv = Tv + Math.max(0, vv - Tv) / 2, Nv += "+killed", iv = !0
      }
      null !== zv && Cv(zv) < pv && (pv = Cv(zv), Nv += "+learned", iv = !0);
      const cv = function(vv) {
          const zv = Math.floor((vv - Tv) / Wv);
          return Math.min(dv.e, Math.max(dv.i, zv))
        }(pv),
        Gv = (0, dv.o)(cv);
      return {
        footprintBytes: pv,
        shedFootprintBytes: iv ? Math.max(pv, Cv(cv)) : null,
        chunkCap: cv,
        maxHorizDistance: null !== (Sv = null === Gv || void 0 === Gv ? void 0 : Gv.horizontal) && void 0 !== Sv ? Sv : hv.f.maxChunkHorizAddDistance,
        maxVertDistance: null !== (gv = null === Gv || void 0 === Gv ? void 0 : Gv.vertical) && void 0 !== gv ? gv : hv.f.maxChunkVertAddDistance,
        basis: Nv
      }
    }
    let cv = null;

    function Gv() {
      return iv({
        os: (0, Sv.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, ev.f)()
      }, (0, gv.g)(), (0, pv.G)("wasm").length > 0)
    }

    function mv() {
      return cv ??= Gv(), cv
    }

    function jv() {
      var vv;
      return (null !== (vv = cv) && void 0 !== vv ? vv : Gv()).basis
    }

    function fv(vv, zv) {
      return vv.setChunkCap(zv.chunkCap)
    }
  },
  40337: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => gv,
      e: () => ev
    });
    var hv = Pv(2944),
      Sv = Pv(1002);

    function ev(vv, zv) {
      return null !== vv.gameSource && (0, hv.h)(zv, vv.gameSource)
    }

    function gv(vv, zv) {
      if (null === vv.gameSource || "" === vv.gameSource || null === zv) return !0;
      const Pv = (0, Sv.l)(zv) ? (0, Sv.q)(zv) : null;
      return null !== Pv && ev(vv, Pv)
    }
  },
  40315: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => pv
    });
    var hv = Pv(609),
      Sv = Pv(40324),
      ev = Pv(40282);
    async function gv(vv) {
      const zv = await (0, Sv.j)({
        Helmet: Pv(37482),
        Chestplate: Pv(37487),
        Gauntlets: Pv(37511),
        Leggings: Pv(37496),
        Boots: Pv(37503)
      } [hv.c[vv]]);
      try {
        return (0, ev.r)(zv)
      } finally {
        zv.close()
      }
    }
    const pv = new class {
      constructor() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gv,
          zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Sv.m;
        this.decode = vv, this.register = zv, this.decoded = new Map
      }
      warm() {
        for (let vv = 0; vv < hv.c.length; vv++) this.part(vv).catch((zv => {
          console.warn(`The grayscale armour ${hv.c[vv]} image didn't decode ahead of use`, zv)
        }))
      }
      async load(vv, zv) {
        const {
          width: Pv,
          height: ev,
          pixels: gv
        } = await this.part(vv), pv = new ImageData(function(vv, zv) {
          const Pv = new Uint8ClampedArray(vv.length);
          for (let hv = 0; hv < vv.length; hv += 4) Pv[hv] = Math.round(vv[hv] * zv[0] / 255), Pv[hv + 1] = Math.round(vv[hv + 1] * zv[1] / 255), Pv[hv + 2] = Math.round(vv[hv + 2] * zv[2] / 255), Pv[hv + 3] = vv[hv + 3];
          return Pv
        }(gv, function(vv) {
          return [vv >>> 16 & 255, vv >>> 8 & 255, 255 & vv]
        }(zv)), Pv, ev);
        let dv;
        try {
          dv = await createImageBitmap(pv, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          })
        } catch (Nv) {
          throw new Sv.d("decode", `grayscale armour ${hv.c[vv]}`, {
            cause: Nv
          })
        }
        return {
          id: this.register(dv),
          width: Pv,
          height: ev
        }
      }
      part(vv) {
        const zv = this.decoded.get(vv);
        if (void 0 !== zv) return zv;
        const Pv = this.decode(vv).catch((zv => {
          throw this.decoded.delete(vv), zv instanceof Sv.d ? zv : new Sv.d("decode", `grayscale armour ${hv.c[vv]}`, {
            cause: zv
          })
        }));
        return this.decoded.set(vv, Pv), Pv
      }
    }
  },
  40309: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => gv,
      f: () => Cv,
      i: () => lv,
      k: () => Tv,
      o: () => sv
    });
    var hv = Pv(40256),
      Sv = Pv(40315),
      ev = Pv(40324);
    const gv = 396,
      pv = 1,
      dv = 2,
      Nv = 3,
      lv = {
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
      Tv = {
        File: 0,
        Item: 1
      },
      Wv = 0,
      wv = 1,
      av = 2;

    function sv(vv) {
      const zv = (0, hv.m)();
      zv.catch((() => {}));
      let Sv = null;
      return {
        glbUrl: vv,
        lifeformAtlasUrl: async vv => (await zv).lifeformAtlasUrl(vv),
        armourAtlasUrl: async () => (await Pv.e(201).then((() => Pv(33871)))).armourAtlasUrl,
        capeUrl: async vv => (await zv).capeUrl(vv),
        attachmentImageUrl: async vv => (await zv).attachmentImageUrl(vv),
        blockImageUrl: async vv => (await zv).blockImageUrl(vv),
        groupAtlasUrl: async vv => (await zv).groupAtlasUrl(vv),
        particleTextureUrl: async vv => (await zv).particleTextureUrl(vv),
        particleItemUrl: async vv => (Sv ??= Pv.e(38).then((() => Pv(51149))).catch((vv => {
          throw Sv = null, vv
        })), (await Sv).particleItemUrl(vv))
      }
    }
    class Cv {
      constructor(vv, zv) {
        var Pv, gv, pv, dv;
        let Nv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.sources = vv, this.onFailure = zv, this.loading = new Map, this.glbImages = new Map, this.glbWrittenImages = new Map, this.glbTakenCount = new Map, this.answered = new Map, this.ready = [], this.load = void 0, this.release = void 0, this.fetchFile = void 0, this.greyscaleArmour = void 0, this.ea = !1, this.load = null !== (Pv = Nv.load) && void 0 !== Pv ? Pv : (vv, zv) => (0, ev.k)(vv, Nv.fetchImage, zv), this.release = null !== (gv = Nv.release) && void 0 !== gv ? gv : ev.o, this.fetchFile = null !== (pv = Nv.fetchFile) && void 0 !== pv ? pv : vv => (0, hv.g)(vv), this.greyscaleArmour = null !== (dv = Nv.greyscaleArmour) && void 0 !== dv ? dv : Sv.e
      }
      get waiting() {
        return this.ready.length
      }
      get inFlight() {
        return this.loading.size
      }
      glbWritten(vv, zv) {
        this.glbWrittenImages.set(vv, Fv(zv))
      }
      glbTaken(vv, zv) {
        const Pv = this.glbWrittenImages.get(vv);
        this.glbWrittenImages.delete(vv), zv && this.setGlbImages(vv, void 0 !== Pv && Pv.length > 0 ? Pv : void 0)
      }
      setGlbImages(vv, zv) {
        var Pv;
        this.glbTakenCount.set(vv, (null !== (Pv = this.glbTakenCount.get(vv)) && void 0 !== Pv ? Pv : 0) + 1), void 0 === zv ? this.glbImages.delete(vv) : this.glbImages.set(vv, zv);
        const hv = [];
        for (const {
            key: Sv
          }
          of this.loading.values()) Sv.kind === lv.Glb && Sv.word === vv && hv.push(Sv);
        for (let Sv = this.ready.length - 1; Sv >= 0; Sv--) {
          const {
            key: zv,
            id: Pv
          } = this.ready[Sv];
          zv.kind === lv.Glb && zv.word === vv && (this.ready.splice(Sv, 1), null !== Pv && (this.answered.delete(Pv), this.release(Pv)), hv.push(zv))
        }
        this.loadAgain(hv)
      }
      onEvent(vv) {
        if (this.ea) return;
        const zv = new DataView(vv.buffer, vv.byteOffset, vv.byteLength);
        for (let Pv = 0; Pv + 8 <= vv.byteLength; Pv += 8) {
          const vv = zv.getUint8(Pv),
            hv = zv.getUint32(Pv + 4, !0);
          if (vv === Nv) {
            this.answered.delete(hv), this.release(hv);
            continue
          }
          const Sv = {
            kind: zv.getUint8(Pv + 1),
            index: zv.getUint8(Pv + 2),
            word: hv
          };
          vv === pv ? this.want(Sv) : vv === dv && this.loading.delete(iv(Sv))
        }
      }
      reload(vv, zv) {
        const Pv = Pv => vv.includes(Pv.kind) && (void 0 === zv || zv(Pv)),
          hv = new Map;
        for (const Sv of this.answered.values()) Pv(Sv) && hv.set(iv(Sv), Sv);
        for (const [Sv, {
            key: ev
          }] of this.loading) Pv(ev) && hv.set(Sv, ev);
        this.loadAgain(hv.values())
      }
      loadAgain(vv) {
        for (const zv of vv) this.loading.delete(iv(zv)), this.want(zv)
      }
      drain(vv) {
        if (null !== vv)
          for (; this.ready.length > 0;) {
            if (!vv(gv, 0, this.ready[0].record)) return;
            this.ready.shift()
          }
      }
      dispose() {
        this.ea = !0, this.loading.clear(), this.ready.length = 0;
        for (const vv of this.answered.keys()) this.release(vv);
        this.answered.clear()
      }
      want(vv) {
        const zv = iv(vv);
        if (this.loading.has(zv)) return;
        const Pv = {
          key: vv
        };
        this.loading.set(zv, Pv), this.loadKey(vv).then((hv => {
          this.ea || this.loading.get(zv) !== Pv ? this.release(hv.id) : (this.loading.delete(zv), this.answered.set(hv.id, vv), this.ready.push({
            record: Gv(vv, Wv, hv),
            key: vv,
            id: hv.id
          }))
        }), (hv => {
          if (this.ea || this.loading.get(zv) !== Pv) return;
          this.loading.delete(zv), this.onFailure({
            key: vv,
            error: hv
          });
          const Sv = hv instanceof ev.d && "decode" === hv.stage ? wv : av;
          this.ready.push({
            record: Gv(vv, Sv, null),
            key: vv,
            id: null
          })
        }))
      }
      async loadKey(vv) {
        switch (vv.kind) {
          case lv.Glb:
            return this.load(await this.glbImage(vv), "none");
          case lv.LifeformAtlas:
            return this.load(cv(await this.sources.lifeformAtlasUrl(vv.word), vv), "none");
          case lv.ArmourAtlas:
            return this.load(cv(await this.sources.armourAtlasUrl(), vv), "none");
          case lv.Cape:
            return this.load(cv(await this.sources.capeUrl(vv.word), vv), "none");
          case lv.AttachmentImage:
            return this.load(cv(await this.sources.attachmentImageUrl(vv.word), vv), "none");
          case lv.GroupAtlas:
            return this.load(cv(await this.sources.groupAtlasUrl(vv.word), vv), "none");
          case lv.BlockImage:
            return this.load(cv(await this.sources.blockImageUrl(vv.word), vv), "none");
          case lv.Particle: {
            const zv = await (vv.index === Tv.Item ? this.sources.particleItemUrl(vv.word) : this.sources.particleTextureUrl(vv.word));
            return this.load(cv(zv, vv), "flipY")
          }
          case lv.GreyscaleArmour:
            return this.greyscaleArmour.load(vv.index, vv.word);
          default:
            throw new ev.d("fetch", `image kind ${vv.kind}`, {
              cause: null
            })
        }
      }
      async glbImage(vv) {
        var zv;
        let Pv = this.glbImages.get(vv.word);
        if (void 0 === Pv) {
          const zv = this.glbTakenCount.get(vv.word),
            hv = cv(await this.sources.glbUrl(vv.word), vv);
          try {
            Pv = Fv(await this.fetchFile(hv))
          } catch (Sv) {
            throw new ev.d("fetch", hv, {
              cause: Sv
            })
          }
          this.glbTakenCount.get(vv.word) === zv && this.glbImages.set(vv.word, Pv)
        }
        const hv = null === (zv = Pv) || void 0 === zv ? void 0 : zv[vv.index];
        if (!hv) throw new ev.d("decode", `image ${vv.index} of file ${2147483647&vv.word}`, {
          cause: null
        });
        return hv
      }
    }

    function iv(vv) {
      let {
        kind: zv,
        index: Pv,
        word: hv
      } = vv;
      return `${zv}:${Pv}:${hv}`
    }

    function cv(vv, zv) {
      if (null === vv) throw new ev.d("fetch", `no URL for image ${iv(zv)}`, {
        cause: null
      });
      return vv
    }

    function Gv(vv, zv, Pv) {
      var hv, Sv, ev;
      const gv = new Uint8Array(16),
        pv = new DataView(gv.buffer);
      return pv.setUint8(0, vv.kind), pv.setUint8(1, vv.index), pv.setUint8(2, zv), pv.setUint32(4, vv.word, !0), pv.setUint32(8, null !== (hv = null === Pv || void 0 === Pv ? void 0 : Pv.id) && void 0 !== hv ? hv : 0, !0), pv.setUint16(12, Math.min(null !== (Sv = null === Pv || void 0 === Pv ? void 0 : Pv.width) && void 0 !== Sv ? Sv : 0, 65535), !0), pv.setUint16(14, Math.min(null !== (ev = null === Pv || void 0 === Pv ? void 0 : Pv.height) && void 0 !== ev ? ev : 0, 65535), !0), gv
    }
    const mv = 1179937895,
      jv = 1313821514,
      fv = 5130562;

    function Fv(vv) {
      var zv;
      const Pv = new DataView(vv.buffer, vv.byteOffset, vv.byteLength);
      if (vv.byteLength < 20 || Pv.getUint32(0, !0) !== mv || Pv.getUint32(16, !0) !== jv) return [];
      let hv, Sv = 20 + Pv.getUint32(12, !0);
      try {
        hv = JSON.parse((new TextDecoder).decode(vv.subarray(20, Sv)))
      } catch {
        return []
      }
      for (; Sv + 8 <= vv.byteLength && Pv.getUint32(Sv + 4, !0) !== fv;) Sv += 8 + Pv.getUint32(Sv, !0);
      const ev = null !== (zv = hv.images) && void 0 !== zv ? zv : [];
      if (0 === ev.length || Sv + 8 > vv.byteLength) return ev.map((() => null));
      const gv = vv.subarray(Sv + 8, Math.min(vv.byteLength, Sv + 8 + Pv.getUint32(Sv, !0)));
      return ev.map((vv => {
        var zv, Pv, Sv;
        const ev = void 0 === vv.bufferView || null === (zv = hv.bufferViews) || void 0 === zv ? void 0 : zv[vv.bufferView];
        if (!ev || 0 !== (null !== (Pv = ev.buffer) && void 0 !== Pv ? Pv : 0) || void 0 === ev.byteLength) return null;
        const pv = null !== (Sv = ev.byteOffset) && void 0 !== Sv ? Sv : 0,
          dv = pv + ev.byteLength;
        return dv <= gv.byteLength ? gv.slice(pv, dv) : null
      }))
    }
  },
  39975: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => gv,
      f: () => ev,
      j: () => Sv
    });
    let hv = null;

    function Sv(vv) {
      hv = vv
    }

    function ev(vv) {
      hv === vv && (hv = null)
    }

    function gv() {
      var vv;
      null === (vv = hv) || void 0 === vv || vv()
    }
  },
  36126: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => lv,
      e: () => Wv,
      g: () => iv,
      k: () => Nv
    });
    var hv = Pv(22),
      Sv = Pv(2304),
      ev = Pv(2306),
      gv = Pv(2312),
      pv = Pv(2366),
      dv = Pv(26);

    function Nv(vv, zv) {
      return (!(0, gv.e)() || 0 === vv && 0 === zv) && (0, ev.x)(Sv.f.Joystick, 0, vv, zv, 0)
    }
    const lv = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function Tv(vv) {
      return vv.classList.contains("TouchKeyHit") && wv() ? null : vv.firstElementChild
    }

    function Wv(vv) {
      return vv.classList.contains("TouchKeyHit") && !vv.classList.contains("CanvasZone") ? {
        whole: !wv(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: av(Tv(vv))
      }
    }

    function wv() {
      return document.documentElement.classList.contains(pv.o)
    }

    function av(vv) {
      return !(vv instanceof HTMLElement) || vv.offsetWidth <= 0 || vv.offsetHeight <= 0 ? null : {
        width: vv.offsetWidth,
        height: vv.offsetHeight
      }
    }

    function sv(vv, zv) {
      const Pv = vv => Math.min(65535, Math.round(4 * vv));
      return (Pv(vv) | Pv(zv) << 16) >>> 0
    }

    function Cv(vv) {
      return {
        x: vv.left + vv.width / 2,
        y: vv.top + vv.height / 2,
        radius: Math.min(vv.width, vv.height) / 2
      }
    }
    const iv = new class {
      constructor(vv) {
        this.write = vv, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        zv ? this.elements.set(vv, {
          element: zv,
          hidden: Pv
        }) : this.elements.delete(vv), this.measureOne(vv)
      }
      measure() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = vv.left, this.canvasTop = vv.top;
        for (const zv of this.elements.keys()) this.measureOne(zv)
      }
      hitZone(vv, zv) {
        let Pv = null,
          hv = 1;
        for (const Sv of this.elements.keys()) {
          const ev = this.shown(Sv);
          if (!ev) continue;
          const {
            rect: gv,
            element: pv
          } = ev, dv = Cv(gv), Nv = Math.max(0, gv.width / 2 - dv.radius), lv = Math.max(0, gv.height / 2 - dv.radius), Wv = Math.max(0, Math.abs(vv - dv.x) - Nv), wv = Math.max(0, Math.abs(zv - dv.y) - lv), sv = pv.firstElementChild;
          let iv = Math.hypot(Wv, wv) / dv.radius;
          const cv = av(Tv(pv));
          cv && (iv = Math.min(iv, Math.max(2 * Math.abs(vv - dv.x) / cv.width, 2 * Math.abs(zv - dv.y) / cv.height))), iv < hv && (Pv = {
            code: Sv,
            element: pv,
            key: sv,
            ...dv
          }, hv = iv)
        }
        return Pv
      }
      measureOne(vv) {
        const zv = this.shown(vv);
        if (!zv) return void this.write(Sv.f.TouchZone, vv, 0, 0, 0);
        const {
          rect: Pv,
          element: hv
        } = zv, ev = Cv(Pv);
        this.write(Sv.f.TouchZone, vv, ev.x - this.canvasLeft, ev.y - this.canvasTop, sv(Pv.width, Pv.height));
        const gv = av(Tv(hv));
        this.write(Sv.f.TouchZone, 256 | vv, 0, 0, gv ? sv(gv.width, gv.height) : 0)
      }
      shown(vv) {
        const zv = this.elements.get(vv),
          Pv = hv.c.get("worldPanelHud");
        if (!zv || zv.hidden || "none" === Pv) return null;
        const Sv = zv.element.getBoundingClientRect();
        return Sv.width <= 0 || Sv.height <= 0 ? null : {
          rect: Sv,
          element: zv.element
        }
      }
    }(ev.x);
    (0, dv.l)(pv.h, (() => {
      iv.measure()
    }))
  },
  40183: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => dv,
      c: () => Nv
    });
    var hv = Pv(40185),
      Sv = Pv(38596),
      ev = Pv(36003),
      gv = Pv(40112),
      pv = Pv(40161);
    const dv = hv.c.timeForPlayerToConnect - 1e4;
    async function Nv(vv, zv, Pv, hv) {
      let dv;
      try {
        dv = await vv.getTrafficCode()
      } catch (av) {
        throw console.error("[bloxd-wasm-client] could not get a traffic code", av), new pv.u(av)
      }
      const {
        gameNameWithVariation: Nv,
        lobbyName: lv
      } = zv, Tv = () => {
        const zv = (0, ev.i)(vv, Nv, lv, dv, (vv => {
          var zv;
          return null !== (zv = null === Pv || void 0 === Pv ? void 0 : Pv.isUsingCustomGameTexturePack(vv)) && void 0 !== zv && zv
        }));
        zv.joinOptions.wasmClient = !0;
        const Sv = (0, gv.A)();
        return null !== Sv && (zv.joinOptions.renderBackend = Sv), zv.joinOptions.joinAdHold = hv, zv
      }, {
        roomName: Wv,
        joinOptions: wv
      } = Tv();
      return {
        endpoint: zv.endpoint,
        roomName: Wv,
        joinOptions: wv,
        session: {
          gameNameWithVariation: Nv,
          lobbyName: lv,
          playerDbId: vv.whamm
        },
        optionsAfterRefusal: async zv => await (0, Sv.e)(vv, zv) ? Tv().joinOptions : null
      }
    }
  },
  4786: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => pv,
      h: () => gv
    });
    var hv = Pv(2944),
      Sv = Pv(4788);
    let ev = null;

    function gv(vv, zv) {
      ev = {
        pack: vv.metaData.id === hv.b ? null : vv,
        prompt: zv
      }
    }

    function pv(vv, zv) {
      const Pv = ev;
      null !== Pv && (0, Sv.e)(Pv.pack, vv) && (ev = null, zv && Pv.prompt())
    }
  },
  40332: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => lv,
      g: () => ev,
      k: () => Tv,
      n: () => gv
    });
    var hv = Pv(40309),
      Sv = Pv(40256);
    const ev = new class {
      constructor() {
        this.page = null, this.session = void 0, this.follower = null, this.isWanted = !1, this.listeners = new Set, this.pageListeners = new Set, this.wantedListeners = new Set
      }
      get current() {
        return void 0 === this.session ? this.page : this.session
      }
      setPageFiles(vv) {
        this.change((() => {
          this.page = vv
        }))
      }
      setSessionFiles(vv) {
        const zv = void 0 !== this.session && void 0 === vv;
        if (this.change((() => {
            this.session = vv
          })), zv)
          for (const Pv of [...this.pageListeners]) Pv()
      }
      showsPage() {
        return void 0 === this.session
      }
      onPageShown(vv) {
        return this.pageListeners.add(vv), () => {
          this.pageListeners.delete(vv)
        }
      }
      setFollower(vv) {
        this.follower = vv, this.startFollower()
      }
      wanted() {
        this.isWanted = !0;
        for (const vv of [...this.wantedListeners]) vv();
        this.startFollower()
      }
      onWanted(vv) {
        return this.wantedListeners.add(vv), () => {
          this.wantedListeners.delete(vv)
        }
      }
      onChange(vv) {
        return this.listeners.add(vv), () => {
          this.listeners.delete(vv)
        }
      }
      startFollower() {
        const vv = this.follower;
        this.isWanted && null !== vv && (this.follower = null, vv((() => {
          this.follower = vv
        })))
      }
      change(vv) {
        const zv = this.current;
        if (vv(), this.current !== zv)
          for (const Pv of this.listeners) Pv()
      }
    };

    function gv(vv, zv) {
      return {
        ...vv,
        armourAtlasUrl: () => {
          var Pv, hv;
          return null !== (Pv = null === (hv = zv()) || void 0 === hv ? void 0 : hv.armourAtlasUrl()) && void 0 !== Pv ? Pv : vv.armourAtlasUrl()
        },
        lifeformAtlasUrl: Pv => dv(zv(), (vv => vv.LIFEFORM_ATLAS_PATHS[Pv]), (() => vv.lifeformAtlasUrl(Pv))),
        groupAtlasUrl: Pv => dv(zv(), (vv => vv.GROUP_ATLAS_PATHS[Pv]), (() => vv.groupAtlasUrl(Pv))),
        particleItemUrl: hv => Nv(zv(), (async () => {
          const vv = await Pv.e(38).then((() => Pv(51149))).catch((() => null));
          return (null === vv || void 0 === vv ? void 0 : vv.particleItemSprite(hv)) || null
        }), (() => vv.particleItemUrl(hv))),
        blockImageUrl: Pv => Nv(zv(), (async () => {
          var vv, zv;
          return null !== (vv = null === (zv = await pv()) || void 0 === zv ? void 0 : zv.blockImageName(Pv)) && void 0 !== vv ? vv : null
        }), (() => vv.blockImageUrl(Pv)))
      }
    }

    function pv() {
      return (0, Sv.m)().catch((() => null))
    }

    function dv(vv, zv, Pv) {
      return Nv(vv, (async () => {
        var vv;
        const Pv = await pv(),
          hv = null === Pv ? null : zv(Pv),
          Sv = null !== (vv = null === hv || void 0 === hv ? void 0 : hv.slice(hv.lastIndexOf("/") + 1)) && void 0 !== vv ? vv : null;
        return "Player_Atlas" === Sv ? null : Sv
      }), Pv)
    }
    async function Nv(vv, zv, Pv) {
      if (null !== vv) {
        const Pv = await zv(),
          hv = null === Pv ? null : vv.textureUrl(Pv);
        if (null !== hv) return hv
      }
      return Pv()
    }
    const lv = 0;

    function Tv(vv) {
      const zv = [hv.i.ArmourAtlas, hv.i.LifeformAtlas, hv.i.GroupAtlas, hv.i.BlockImage, hv.i.Particle];
      vv.reload(zv, (vv => {
        switch (vv.kind) {
          case hv.i.Particle:
            return vv.index === hv.k.Item;
          case hv.i.LifeformAtlas:
            return vv.word !== lv;
          default:
            return !0
        }
      }))
    }
  },
  40192: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => hv,
      f: () => pv,
      h: () => gv,
      j: () => Sv,
      l: () => ev
    });
    const hv = 1e3;

    function Sv() {
      dv((() => {
        window.location.reload()
      }))
    }

    function ev() {
      return new Promise((() => {}))
    }

    function gv(vv) {
      dv((() => {
        window.location.replace(vv(window.location.href))
      }))
    }

    function pv(vv) {
      Promise.resolve().then((() => Pv(81))).then((zv => {
        let {
          currentUrl: Pv
        } = zv;
        gv((() => Pv.mergeSearchParamsInto(vv)))
      }), (() => {
        gv((() => vv))
      }))
    }

    function dv(vv) {
      null !== window.onbeforeunload ? Promise.resolve().then((() => Pv(1692))).then((zv => {
        let {
          prepareForUnloadWithoutConfirmation: Pv
        } = zv;
        try {
          Pv()
        } catch (hv) {
          console.warn("[bloxd-wasm-client] prepareForUnloadWithoutConfirmation threw: leaving plainly", hv), window.onbeforeunload = null
        }
        vv()
      }), (() => {
        window.onbeforeunload = null, vv()
      })) : vv()
    }
  },
  4788: (vv, zv, Pv) => {
    function hv(vv, zv) {
      return Sv(vv, zv)
    }

    function Sv(vv, zv) {
      if (vv === zv) return !0;
      if ("object" !== typeof vv || "object" !== typeof zv || null === vv || null === zv || Array.isArray(vv) !== Array.isArray(zv)) return !1;
      const Pv = vv,
        hv = zv,
        ev = Object.keys(Pv);
      return ev.length === Object.keys(hv).length && ev.every((vv => Object.prototype.hasOwnProperty.call(hv, vv) && Sv(Pv[vv], hv[vv])))
    }
    Pv.d(zv, {
      e: () => hv
    })
  },
  40226: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Fv,
      d: () => jv,
      h: () => Cv,
      i: () => sv
    });
    var hv = Pv(1773),
      Sv = Pv(1779),
      ev = Pv(38587),
      gv = Pv(38604),
      pv = Pv(1748),
      dv = Pv(40156),
      Nv = Pv(40161);
    const lv = {
        "X-Requested-With": "XMLHtttpRequest"
      },
      Tv = 3,
      Wv = [500, 1500];

    function wv(vv) {
      const zv = new URL(vv);
      return {
        secure: "https:" === zv.protocol || "wss:" === zv.protocol,
        host: zv.host,
        pathname: zv.pathname.replace(/\/+$/, ""),
        search: zv.searchParams.toString()
      }
    }

    function av(vv, zv, Pv) {
      const {
        secure: hv,
        host: Sv,
        pathname: ev,
        search: gv
      } = wv(vv);
      return `${hv?"https":"http"}://${Sv}${ev}/matchmake/${zv}/${encodeURIComponent(Pv)}${gv?`?${gv}`:""}`
    }

    function sv(vv, zv) {
      var Pv;
      const hv = null !== (Pv = zv.protocol) && void 0 !== Pv ? Pv : "ws";
      if ("ws" !== hv) throw new Error(`seat reservation asks for the ${hv} transport`);
      const {
        secure: Sv,
        host: ev,
        pathname: gv,
        search: pv
      } = wv(vv), dv = new URLSearchParams(pv);
      dv.append("sessionId", zv.sessionId), zv.reconnectionToken && dv.append("reconnectionToken", zv.reconnectionToken);
      return `${Sv?"wss":"ws"}://${zv.room.publicAddress||`${ev}${gv}`}/${zv.room.processId}/${zv.room.roomId}?${dv.toString()}`
    }
    async function Cv(vv, zv, Pv) {
      var dv;
      let lv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const wv = null !== (dv = lv.sleep) && void 0 !== dv ? dv : hv.b,
        sv = new Sv.d(lv.signal),
        Cv = new pv.e(gv.d, (() => {
          (0, Sv.k)(sv.controller, new gv.g)
        })),
        {
          signal: mv
        } = sv;
      try {
        return await (0, ev.f)((() => async function(vv, zv, Pv, hv) {
          var ev;
          const {
            signal: gv,
            sleep: pv
          } = hv, dv = av(vv, "joinOrCreate", zv), lv = JSON.stringify(Pv);
          let wv = null;
          for (let av = 0; av < Tv; av++) {
            var sv;
            if (av > 0) await pv(null !== (sv = Wv[av - 1]) && void 0 !== sv ? sv : 1500, gv);
            let vv;
            (0, Sv.p)(gv);
            try {
              vv = await cv(dv, lv, hv)
            } catch (Cv) {
              (0, Sv.p)(gv), wv = iv(Cv);
              continue
            }
            const {
              response: zv,
              answer: Pv,
              refusal: ev,
              lost: Tv
            } = vv;
            if (null === Tv) {
              if (null !== ev) throw Gv(ev, Pv);
              if (zv.ok && null !== Pv && Yv(Pv)) return Pv;
              wv = new Nv.q(`seat request answered HTTP ${zv.status}${null===Pv?" without JSON":" without a seat"}`, !1)
            } else wv = iv(Tv.error)
          }
          throw null !== (ev = wv) && void 0 !== ev ? ev : new Nv.q("seat request made no attempt", !1)
        }(vv, zv, Pv, {
          ...lv,
          signal: mv,
          sleep: wv
        })), mv, wv)
      } finally {
        Cv.stop(), sv.unfollow()
      }
    }

    function iv(vv) {
      return new Nv.q(vv instanceof Error ? vv.message : String(vv), !0, vv)
    }
    async function cv(vv, zv, Pv) {
      var hv;
      const {
        signal: ev
      } = Pv, gv = null !== (hv = Pv.fetch) && void 0 !== hv ? hv : fetch, pv = await gv(vv, {
        method: "POST",
        headers: {
          ...lv,
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: zv,
        credentials: "include",
        signal: ev
      }), {
        answer: dv,
        lost: Nv
      } = await async function(vv) {
        try {
          const zv = await vv.json();
          return {
            answer: "object" === typeof zv && null !== zv ? zv : null,
            lost: null
          }
        } catch (zv) {
          return {
            answer: null,
            lost: zv instanceof SyntaxError ? null : {
              error: zv
            }
          }
        }
      }(pv), Tv = null !== dv && "string" === typeof dv.error ? dv.error : null;
      var Wv;
      null !== Tv && (null === (Wv = Pv.onRefusal) || void 0 === Wv || Wv.call(Pv));
      return (0, Sv.p)(ev), {
        response: pv,
        answer: dv,
        refusal: Tv,
        lost: Nv
      }
    }

    function Gv(vv, zv) {
      return new Nv.k(vv, "number" === typeof(null === zv || void 0 === zv ? void 0 : zv.code) ? zv.code : 0, (0, dv.l)(vv).text)
    }
    class mv extends Error {
      constructor(vv, zv) {
        super(vv), this.code = zv, this.name = "SeatHttpError"
      }
    }
    async function jv(vv, zv, Pv) {
      let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        response: Sv,
        answer: ev,
        refusal: gv,
        lost: pv
      } = await cv(av(vv, "reconnect", zv), JSON.stringify({
        reconnectionToken: Pv
      }), hv);
      if (null !== pv) throw pv.error;
      if (!Sv.ok) {
        const vv = null !== ev && "number" === typeof ev.code && 0 !== ev.code ? ev.code : Sv.status;
        throw new mv(`the seat's reconnect was refused: ${null!==gv&&void 0!==gv?gv:`HTTP ${Sv.status}`}`, vv)
      }
      if (null !== gv) throw Gv(gv, ev);
      if (null === ev || !Yv(ev)) throw new Error("the seat's reconnect answered " + (null === ev ? "without JSON" : "without a seat"));
      return {
        ...ev,
        reconnectionToken: Pv
      }
    }
    const fv = 10;

    function Fv(vv) {
      if (vv.byteLength < 2 || vv[0] !== fv) return null;
      const zv = 2 + vv[1];
      return zv > vv.byteLength ? null : (new TextDecoder).decode(vv.subarray(2, zv))
    }

    function Yv(vv) {
      const zv = vv.room;
      return "string" === typeof vv.sessionId && "object" === typeof zv && null !== zv && "string" === typeof zv.roomId && "string" === typeof zv.processId && "string" === typeof zv.name
    }
  },
  39907: (vv, zv, Pv) => {
    Pv.d(zv, {
      B: () => mv,
      E: () => jv,
      G: () => Cv,
      H: () => Ov,
      I: () => Rv,
      J: () => av,
      K: () => tv,
      L: () => cv,
      P: () => iv,
      T: () => Gv,
      V: () => fv,
      d: () => Sv,
      e: () => xv,
      g: () => Uv,
      i: () => wv,
      k: () => sv,
      m: () => Kv,
      o: () => Yv,
      q: () => Dv,
      r: () => nv,
      u: () => Fv,
      x: () => Vv
    });
    var hv = Pv(2762);
    const Sv = {
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
      UpdateNameTag: 53,
      LobbyManage: 96
    };

    function ev(vv, zv) {
      return !ArrayBuffer.isView(vv) || vv instanceof DataView ? Array.isArray(vv) ? vv.map((vv => zv(vv))) : vv : Array.from(vv, (vv => zv(vv)))
    }

    function gv(vv) {
      if ("string" !== typeof vv) return vv;
      for (let zv = 0; zv < vv.length; zv++) {
        const Pv = vv.charCodeAt(zv);
        if (Pv >= 55296 && Pv <= 57343) return dv.decode(pv.encode(vv))
      }
      return vv
    }
    const pv = new TextEncoder,
      dv = new TextDecoder;

    function Nv(vv) {
      return vv
    }
    let lv;

    function Tv(vv) {
      return null === vv || "object" !== typeof vv ? vv : [gv(vv.ug), gv(vv.vp)]
    }

    function Wv(vv) {
      return null === vv || "object" !== typeof vv ? vv : [ev(vv.PS, Nv), ev(vv.Yg, Nv)]
    }

    function wv(vv) {
      return null === (zv = vv) || "object" !== typeof zv ? zv : [gv(zv.al), gv(zv.sl)];
      var zv
    }

    function av(vv) {
      return null === (zv = vv) || "object" !== typeof zv ? zv : [zv.id, zv.Nl];
      var zv
    }

    function sv(vv) {
      return null === (zv = vv) || "object" !== typeof zv ? zv : [zv.ah, gv(zv.sh), zv.Ch, gv(zv.mh), zv.Yh, zv.nh, zv.Bg, gv(zv.Jg), gv(zv.Eg)];
      var zv
    }

    function Cv(vv) {
      return null === (zv = vv) || "object" !== typeof zv ? zv : [ev(zv.MN, Nv), zv.yN];
      var zv
    }

    function iv(vv) {
      return null === (zv = vv) || "object" !== typeof zv ? zv : [ev(zv.Sl, (vv => gv(vv))), gv(zv.el), zv.gl];
      var zv
    }

    function cv(vv) {
      return null === (zv = vv) || "object" !== typeof zv ? zv : [ev(zv.BN, Nv), gv(zv.JN), zv.EN];
      var zv
    }

    function Gv(vv) {
      return null === (zv = vv) || "object" !== typeof zv ? zv : [gv(zv.GP), gv(zv.mP)];
      var zv
    }

    function mv(vv) {
      return null === (zv = vv) || "object" !== typeof zv ? zv : [gv(zv.Fp)];
      var zv
    }

    function jv(vv) {
      return gv(vv)
    }

    function fv(vv) {
      return null === (zv = vv) || "object" !== typeof zv ? zv : [gv(zv.kg), gv(zv.Xg), gv(zv.ug), gv(zv.vp)];
      var zv
    }

    function Fv(vv) {
      return Tv(vv)
    }

    function Yv(vv) {
      return Tv(vv)
    }

    function nv(vv) {
      return null === (zv = vv) || "object" !== typeof zv ? zv : [gv(zv.Zl)];
      var zv
    }

    function Ov(vv) {
      return vv
    }

    function Dv(vv) {
      return null === (zv = vv) || "object" !== typeof zv ? zv : [gv(zv.Pl), gv(zv.hl)];
      var zv
    }

    function Kv(vv) {
      return gv(vv)
    }

    function Vv(vv) {
      return Wv(vv)
    }

    function Uv(vv) {
      return Wv(vv)
    }

    function Rv(vv) {
      return null === (zv = vv) || "object" !== typeof zv ? zv : [gv(zv.pl)];
      var zv
    }

    function xv(vv) {
      return (lv ??= (0, hv.d)().map((vv => vv.name)), lv).map((zv => {
        return "string" === typeof(Pv = vv[zv]) ? gv(Pv) : ev(Pv, Nv);
        var Pv
      }))
    }

    function tv(vv) {
      return null === (zv = vv) || "object" !== typeof zv ? zv : [zv.Al, zv.Ll, zv.Hl];
      var zv
    }
  },
  40334: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => ev
    });
    var hv = Pv(40337),
      Sv = Pv(40332);
    const ev = new class {
      constructor(vv) {
        this.pack = vv, this.game = void 0, this.settle = null, this.hold = null, this.endedWhileHeld = !1, this.gameListeners = new Set, vv.onWanted((() => {
          this.release()
        }))
      }
      setGame(vv) {
        if (void 0 === vv && null !== this.hold) return void(this.endedWhileHeld = !0);
        this.hold = null, this.endedWhileHeld = !1;
        const zv = this.inGame();
        if (this.game = vv, this.update(), this.inGame() !== zv)
          for (const Pv of this.gameListeners) Pv()
      }
      inGame() {
        return void 0 !== this.game
      }
      onGameChange(vv) {
        return this.gameListeners.add(vv), () => {
          this.gameListeners.delete(vv)
        }
      }
      unwantedLeave(vv) {
        vv && void 0 !== this.game ? this.hold = {
          game: this.game
        } : this.release()
      }
      rejoinHold() {
        return this.hold
      }
      releaseHold(vv) {
        null !== vv && vv === this.hold && this.release()
      }
      release() {
        if (null === this.hold) return;
        const vv = this.endedWhileHeld;
        this.hold = null, this.endedWhileHeld = !1, vv && this.setGame(void 0)
      }
      setSettled(vv) {
        this.settle = vv, this.update()
      }
      update() {
        void 0 === this.game ? this.pack.setSessionFiles(void 0) : null !== this.settle && (0, hv.b)(this.settle.state, this.game) && this.pack.setSessionFiles(this.settle.files)
      }
    }(Sv.g)
  },
  40153: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      followPageUiPack: () => IN,
      packForGame: () => qN,
      playWasmGame: () => bN,
      prefetchWasmPreviews: () => Ep,
      setGamePackConfirm: () => zN,
      startWasmPlay: () => HN,
      startWasmPreviews: () => Jp
    });
    var hv = Pv(185),
      Sv = Pv(1230),
      ev = Pv(144),
      gv = Pv(38613),
      pv = Pv(1876),
      dv = Pv(26),
      Nv = Pv(4444),
      lv = Pv(1295),
      Tv = Pv(1684),
      Wv = Pv(1306),
      wv = Pv(38733),
      av = Pv(1285),
      sv = Pv(38747),
      Cv = Pv(38675),
      iv = Pv(36010),
      cv = Pv(38587),
      Gv = Pv(8572),
      mv = Pv(38604),
      jv = Pv(39993),
      fv = Pv(4529),
      Fv = Pv(39898),
      Yv = Pv(39973),
      nv = Pv(39907);
    const Ov = {
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
        setBlockHighlight: !0,
        lobbyManage: !0
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

    function Dv(vv) {
      const zv = {
        ...Yv.c[vv]
      };
      for (const Pv of Object.keys(Ov[vv])) delete zv[Pv];
      return zv
    }

    function Kv() {
      var vv, zv;
      return null === (vv = null === (zv = (0, Fv.h)()) || void 0 === zv ? void 0 : zv.localPlayerAlive()) || void 0 === vv || vv
    }

    function Vv() {
      var vv, zv;
      return null !== (vv = null === (zv = (0, Fv.h)()) || void 0 === zv ? void 0 : zv.localDeaths()) && void 0 !== vv ? vv : null
    }
    const Uv = {
        current: Kv,
        watch: vv => {
          let zv = Kv(),
            Pv = Vv();
          return (0, fv.q)((() => {
            const hv = Kv(),
              Sv = Vv(),
              ev = null !== Sv && null !== Pv && Sv !== Pv;
            Pv = Sv, ev ? (zv || vv(!0), vv(!1), hv && vv(!0), zv = hv) : hv !== zv && (zv = hv, vv(hv))
          }))
        }
      },
      Rv = {
        states: {
          ...Dv("states"),
          localPlayerAlive: Uv
        },
        events: {
          ...Dv("events"),
          localPlayerAliveSet: {
            watch: Uv.watch
          }
        },
        commands: {
          ...Dv("commands"),
          respawn: () => {
            var vv;
            null === (vv = (0, Fv.h)()) || void 0 === vv || vv.respawn()
          },
          playEmote: vv => {
            var zv;
            null === (zv = (0, Fv.h)()) || void 0 === zv || zv.send(nv.d.PlayEmote, (0, nv.B)({
              Fp: vv
            }))
          },
          applyTemporaryThirdPerson: vv => {
            var zv;
            let {
              durationMs: Pv
            } = vv;
            null === (zv = (0, Fv.h)()) || void 0 === zv || zv.thirdPersonFor(Pv)
          },
          bindCustomButtonKeys: vv => {
            var zv;
            null === (zv = (0, Fv.h)()) || void 0 === zv || zv.bindCustomButtonKeys(vv)
          },
          pressCustomButton: vv => {
            var zv;
            let {
              id: Pv,
              down: hv
            } = vv;
            null === (zv = (0, Fv.h)()) || void 0 === zv || zv.pressCustomButton(Pv, hv)
          },
          setLookSensitivity: () => {},
          wakeUp: vv => {
            const zv = (0, nv.I)({
                pl: vv
              }),
              Pv = () => {
                const vv = (0, Fv.h)();
                return !(null !== vv && void 0 !== vv && vv.isSessionLive) || vv.send(nv.d.StopSleeping, zv)
              };
            if (!Pv()) {
              const vv = (0, fv.q)((() => {
                Pv() && vv()
              }))
            }
          },
          setCameraZoom: vv => {
            var zv;
            null === (zv = (0, Fv.h)()) || void 0 === zv || zv.setCameraZoom(vv)
          }
        },
        queries: Dv("queries"),
        lookups: {
          ...Dv("lookups"),
          cameraZoom: () => {
            var vv, zv;
            return null !== (vv = null === (zv = (0, Fv.h)()) || void 0 === zv ? void 0 : zv.cameraZoom()) && void 0 !== vv ? vv : 0
          }
        }
      };
    var xv = Pv(40156),
      tv = Pv(40161),
      qv = Pv(40166),
      Iv = Pv(40183),
      Qv = Pv(1236),
      Zv = Pv(81),
      Av = Pv(4279),
      Lv = Pv(3511),
      Hv = Pv(1156);
    const Mv = {
      HN: () => (0, Qv.b)(),
      inbuiltOverwritten: () => Av.f,
      reflectApplyHit: () => Hv.b,
      definerHit: () => Zv.currentUrl.c,
      emitReplaced: () => (0, dv.b)(),
      confirmMesh: () => (0, Lv.c)(),
      confirmMeshHitStack: () => (0, Lv.d)()
    };
    var yv = Pv(40171),
      Bv = Pv(40192);
    var Jv = Pv(22),
      Ev = Pv(1884),
      ov = Pv(1934),
      bv = Pv(1612),
      rv = Pv(1978),
      kv = Pv(1175),
      Xv = Pv(1234),
      uv = Pv(40134);

    function vz() {
      return Xv.f.get().getCurrentLanguageCode()
    }

    function zz(vv) {
      const zv = () => {
        vv({
          translate: (vv, zv) => (0, kv.n)(vz(), vv, zv),
          keyBindingText: vv => {
            const zv = (0, ov.x)(vv, Jv.c.get("isTouchScreen"));
            return null !== zv ? (0, kv.r)(vz(), zv.translationKey, zv.params) : (0, ov.p)((0, ov.t)(vv))
          },
          isFriend: rv.e,
          hiddenNames: Ev.b.shown,
          loadsFontRest: (0, uv.d)(vz())
        })
      };
      let Pv = !1;
      const hv = () => {
          const vv = vz();
          (0, kv.f)(vv).then((() => {
            Pv || vv !== vz() || zv()
          }))
        },
        Sv = () => bv.d.getSocialState().friends.map((vv => vv.name.toLowerCase())).sort().join(" ");
      let ev = Sv();
      zv(), hv();
      const gv = [(0, Xv.g)((() => {
        zv(), hv()
      })), (0, dv.l)("customBindingsChanged", zv), (0, dv.l)("appManagerUpdated|isTouchScreen", zv), (0, rv.b)((() => {
        const vv = Sv();
        vv !== ev && (ev = vv, zv())
      })), Ev.b.subscribe(zv)];
      return () => {
        Pv = !0;
        for (const vv of gv) vv()
      }
    }
    var Pz = Pv(628),
      hz = Pv(1002),
      Sz = Pv(1908),
      ez = Pv(302),
      gz = Pv(3466),
      pz = Pv(35885),
      dz = Pv(3473),
      Nz = Pv(38263),
      lz = Pv(4451),
      Tz = Pv(40065),
      Wz = Pv(668),
      wz = Pv(635),
      az = Pv(680),
      sz = Pv(686),
      Cz = Pv(1903),
      iz = Pv(3515),
      cz = Pv(3033);
    let Gz = null;
    var mz = Pv(1184),
      jz = Pv(1779),
      fz = Pv(4182),
      Fz = Pv(3192),
      Yz = Pv(49),
      nz = Pv(295),
      Oz = Pv(278),
      Dz = Pv(40019),
      Kz = Pv(4531);
    var Vz = Pv(40194);
    class Uz {
      constructor(vv, zv) {
        this.showView = vv, this.holdForAd = zv
      }
      pointerUnlockRequestsChanged() {
        (0, Dz.y)()
      }
      pointerLockDebugEntries() {
        return [{
          label: "Locked to the canvas",
          value: String((0, Dz.n)())
        }]
      }
      setGameViewShown(vv) {
        this.showView(vv)
      }
      setGameView(vv) {
        (0, Vz.k)(vv)
      }
      videoAdHold(vv, zv) {
        this.holdForAd(vv, zv)
      }
    }
    class Rz {
      leave(vv) {
        ! function(vv) {
          if (null !== (0, Wv.c)().websocketUrl) try {
            (0, fv.B)().leaveGame(vv)
          } finally {
            (0, Wv.o)({
              websocketUrl: null
            })
          }
        }(vv)
      }
      isReplay() {
        return !1
      }
    }
    class xz {
      watchFrameStarts(vv) {
        return (0, fv.m)(vv)
      }
      watchFrames(vv) {
        return (0, fv.k)(vv)
      }
      watchTicks(vv) {
        return (0, fv.q)(vv)
      }
    }
    var tz = Pv(40201);

    function qz(vv) {
      return vv >= 0 ? Math.min(1, vv) : 0
    }

    function Iz(vv, zv) {
      const {
        fade: Pv
      } = vv;
      return null === Pv || zv - Pv.at >= Pv.ms ? vv.volume : Pv.from + (vv.volume - Pv.from) * Math.max(0, (zv - Pv.at) / Pv.ms)
    }

    function Qz(vv) {
      const zv = Object.entries(vv),
        Pv = new Uint32Array(zv.length);
      let hv = 0;
      for (const [gv, [, pv]] of zv.entries()) Pv[gv] = pv.length, hv += pv.length;
      const Sv = new Float64Array(3 * hv);
      let ev = 0;
      for (const [, gv] of zv)
        for (const vv of gv) Sv.set(vv, ev), ev += 3;
      return {
        blocks: zv.map((vv => {
          let [zv] = vv;
          return zv
        })).join("\0"),
        counts: Pv,
        values: Sv
      }
    }
    class Zz {
      constructor(vv, zv) {
        this.core = vv, this.warn = zv, this.latest = 0
      }
      async feed() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Az;
        const zv = ++this.latest;
        let Pv;
        try {
          Pv = await vv()
        } catch (hv) {
          return void(this.core.isStopped || zv !== this.latest || this.warn("the block colours didn't load, so block particles draw grey", hv))
        }
        zv === this.latest && (this.core.setBlockColours(Pv) || this.core.isStopped || this.warn("the core refused the block colours: block particles draw grey"))
      }
    }
    async function Az() {
      return Qz((await Pv.e(201).then((() => Pv(33871)))).averageColors)
    }
    var Lz = Pv(4535),
      Hz = Pv(4542),
      Mz = Pv(39956),
      yz = Pv(35847),
      Bz = Pv(40114),
      Jz = Pv(618),
      Ez = Pv(36554),
      oz = Pv(609),
      bz = Pv(312),
      rz = Pv(40087);
    const kz = [3e4, 12e4, 3e5];
    class Xz extends Error {}
    const uz = {
      mobTypes: Jz.q,
      vehicleTypes: Ez.e,
      mobAiStates: Jz.o,
      playerPoses: oz.p
    };
    var vP = Pv(40078),
      zP = Pv(40209),
      PP = Pv(40217),
      hP = Pv(40221),
      SP = Pv(3218),
      eP = Pv(38573),
      gP = Pv(4561),
      pP = Pv(2304);
    const dP = pP.u.KeysDisabled | pP.u.LookFrozen | pP.u.ClicksSuppressed,
      NP = SP.f;
    var lP = (0, hP.b)("resumingConn");
    class TP {
      constructor(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.shell = vv, this.now = zv, this.session = void 0, this.attempt = null, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, Object.defineProperty(this, lP, {
          writable: !0,
          value: 0
        }), this.drops = 0, this.session = new eP.c({
          reconnect: vv => this.reconnect(vv),
          isLive: () => vv.isLive(),
          onReconnected: zv => {
            this.landed = zv, vv.onReconnected(zv), this.landIfResumed()
          },
          onGaveUp: (zv, Pv) => {
            this.abortAttempt(), vv.onGaveUp(zv, Pv)
          },
          freeze: zv => {
            vv.ZY(zv), (0, gP.g)(dP, zv ? dP : 0, "reconnectFreeze")
          },
          releaseSeat: vv => {
            this.releaseSeat(vv)
          }
        })
      }
      isResuming() {
        return this.session.isResuming()
      }
      get resumingConn() {
        return (0, PP.e)(this, lP)[lP]
      }
      canHoldSeat() {
        return this.session.canHoldSeat()
      }
      onInitialInfo(vv) {
        let {
          conn: zv,
          graceMs: Pv,
          sessionBased: hv,
          replayOffer: Sv
        } = vv;
        this.session.onInitialInfo(Pv, hv), this.isResuming() && (this.initialInfoConn = zv, this.initialInfoOffer = Sv, this.landIfResumed())
      }
      onResumeComplete(vv) {
        0 !== vv && (vv === (0, PP.e)(this, lP)[lP] ? ((0, PP.e)(this, lP)[lP] = 0, this.session.onResumed()) : this.isResuming() && (this.completedEarlyConn = vv))
      }
      onDropped(vv) {
        this.drops++, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, (0, PP.e)(this, lP)[lP] = 0, this.session.onConnectionLost(vv)
      }
      leave() {
        this.session.leave(), this.dispose()
      }
      dispose() {
        this.abortAttempt(), this.landed = null, this.completedEarlyConn = 0, (0, PP.e)(this, lP)[lP] = 0, this.session.end()
      }
      reconnect(vv) {
        const zv = this.attempt;
        if (null !== zv && this.awaitingJoinRoom(zv)) return zv.result;
        this.abortAttempt();
        const Pv = new AbortController,
          hv = this.drops,
          Sv = {
            attachedAt: null
          },
          ev = this.shell.reconnect(vv, Pv.signal, (() => {
            Sv.attachedAt = this.now()
          })).then((vv => {
            if (this.clearAttempt(gv), this.drops !== hv) throw new Error("the resumed room dropped before its attempt settled");
            return vv
          }), (vv => {
            throw this.clearAttempt(gv), vv
          })),
          gv = {
            abort: Pv,
            socket: Sv,
            result: ev
          };
        return this.attempt = gv, ev
      }
      clearAttempt(vv) {
        this.attempt === vv && (this.attempt = null)
      }
      abortAttempt() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new DOMException("the reconnect attempt was given up", "AbortError");
        const zv = this.attempt;
        this.attempt = null, null === zv || void 0 === zv || zv.abort.abort(vv)
      }
      awaitingJoinRoom(vv) {
        const zv = vv.socket.attachedAt;
        return null !== zv && this.now() - zv < NP
      }
      releaseSeat(vv) {
        const zv = this.attempt,
          Pv = null !== zv && this.awaitingJoinRoom(zv);
        this.abortAttempt(new tv.p), Pv || this.shell.releaseSeat(vv)
      }
      landIfResumed() {
        const vv = this.landed;
        if (null !== vv && vv.conn === this.initialInfoConn) {
          const zv = this.initialInfoOffer && this.completedEarlyConn !== vv.conn;
          if (this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, this.abortAttempt(), !zv) return void this.session.onResumed();
          (0, PP.e)(this, lP)[lP] = vv.conn, this.session.onResuming()
        }
      }
    }
    var WP = Pv(38579),
      wP = Pv(40226),
      aP = Pv(36024),
      sP = Pv(36016),
      CP = Pv(4786),
      iP = Pv(4174),
      cP = Pv(3026),
      GP = Pv(40029),
      mP = Pv(644),
      jP = Pv(39095),
      fP = Pv(4255),
      FP = Pv(39),
      YP = Pv(40235),
      nP = Pv(40273),
      OP = Pv(4198),
      DP = Pv(2306),
      KP = Pv(1610),
      VP = Pv(1630),
      UP = Pv(1272),
      RP = Pv(86),
      xP = Pv(2642),
      tP = Pv(2312),
      qP = Pv(4555);
    const IP = new Set([Lz.Bb.KeyDown, Lz.Bb.MouseMove, Lz.Bb.MouseDown, Lz.Bb.Wheel, Lz.Bb.TouchStart, Lz.Bb.TouchMove]);

    function QP(vv) {
      return (vv.shiftKey ? Lz.Pb.Shift : 0) | (vv.ctrlKey ? Lz.Pb.Ctrl : 0) | (vv.altKey ? Lz.Pb.Alt : 0) | (vv.metaKey ? Lz.Pb.Meta : 0) | ("repeat" in vv && vv.repeat ? Lz.Pb.Repeat : 0) | (vv.isTrusted ? 0 : Lz.Pb.Untrusted)
    }

    function ZP(vv) {
      return "touchOnly" !== (0, RP.b)() && "function" === typeof vv.requestPointerLock
    }

    function AP(vv) {
      return 0 === vv.button ? vv.altKey ? qP.i["Alt+Left Click"] : qP.i.Mouse1 : 1 === vv.button ? qP.i.Mouse2 : qP.i.Mouse3
    }
    const LP = new Set(["AltLeft", "AltRight", "ArrowUp", "ArrowDown"]),
      HP = new Map([
        ["AltLeft", "altKey"],
        ["AltRight", "altKey"],
        ["ControlLeft", "ctrlKey"],
        ["ControlRight", "ctrlKey"],
        ["ShiftLeft", "shiftKey"],
        ["ShiftRight", "shiftKey"],
        ["MetaLeft", "metaKey"],
        ["MetaRight", "metaKey"]
      ]),
      MP = 32768,
      yP = 1;

    function BP(vv) {
      return Math.min(Math.max(Math.round(vv), 0), 65535)
    }

    function JP(vv, zv, Pv) {
      const hv = [],
        Sv = (vv, zv, Pv, Sv) => {
          const ev = vv => {
            (0, VP.s)(vv) || Pv(vv)
          };
          vv.addEventListener(zv, ev, Sv), hv.push((() => {
            vv.removeEventListener(zv, ev, Sv)
          }))
        },
        ev = {
          capture: !0,
          passive: !0
        },
        gv = (vv, Pv, hv, Sv, ev) => (!(0, tP.e)() || !IP.has(vv)) && (zv(vv, Pv, hv, Sv, ev), !0),
        pv = () => document.pointerLockElement === vv,
        dv = (0, xP.b)(),
        Nv = vv => {
          vv.ctrlKey && Pv.ctrlCombosAreGames() && !(0, gP.e)(vv.target) && vv.preventDefault()
        },
        lv = (vv, hv, Sv) => {
          Pv.inspect(vv, hv, !1), zv(Lz.Bb.KeyUp, hv, 0, 0, (0, DP.s)(Sv, vv.timeStamp)), Pv.keyReleased(hv)
        },
        Tv = new Map,
        Wv = (vv, zv, Pv) => vv[Pv] || ("AltRight" === zv || "ControlLeft" === zv) && vv.getModifierState("AltGraph"),
        wv = new Map,
        av = () => {
          Tv.clear(), wv.clear()
        },
        sv = vv => {
          if (document.hasFocus())
            for (const [zv, Pv] of wv) wv.delete(zv), Wv(vv, zv, Pv) || (Tv.delete(zv), lv(vv, qP.i[zv], QP(vv)))
        };
      vv.tabIndex = -1;
      let Cv = 0,
        iv = 0;
      const cv = () => {
        const zv = vv.getBoundingClientRect();
        Cv = zv.left, iv = zv.top
      };
      let Gv = "mouse";
      const mv = () => !pv() && ("mouse" === Gv || !Pv.touchUiShown()),
        jv = (vv, zv, Pv) => {
          const hv = (BP(vv.clientX - Cv) | BP(vv.clientY - iv) << 16) >>> 0;
          gv(Lz.Bb.MouseMove, Lz.Sb.Point, zv, Pv, hv)
        };
      let fv = !1,
        Fv = 0;
      const Yv = () => {
        fv && (fv = !1, Pv.viewShown() && (0, Dz.K)())
      };
      hv.push((() => {
        clearTimeout(Fv)
      })), Sv(window, "keydown", (vv => {
        "Escape" === vv.key ? (0, Dz.E)(!0) : vv.repeat || (0, gP.e)(vv.target) || (fv = !0, clearTimeout(Fv), Fv = window.setTimeout(Yv, 0))
      }), ev), Sv(window, "keydown", (vv => {
        Yv(), Nv(vv), sv(vv);
        const zv = qP.i[vv.code];
        if ("number" !== typeof zv || !Pv.viewShown()) return;
        const hv = (0, gP.e)(vv.target);
        hv || !Pv.prevents(zv) && !LP.has(vv.code) || vv.preventDefault(), vv.repeat || Pv.inspect(vv, zv, !0), gv(Lz.Bb.KeyDown, zv, 0, 0, (0, DP.s)(QP(vv), vv.timeStamp)) && Tv.set(vv.code, zv), hv || Pv.keyPressed(zv)
      }), {
        capture: !1,
        passive: !1
      }), Sv(window, "keyup", (vv => {
        "Escape" === vv.key && (0, Dz.E)(!1), Nv(vv), Tv.delete(vv.code), wv.delete(vv.code), sv(vv);
        const zv = qP.i[vv.code];
        "number" === typeof zv && lv(vv, zv, QP(vv))
      }), {
        capture: !0,
        passive: !1
      }), Sv(window, "mousemove", (vv => {
        "mouse" === Gv && mv() ? jv(vv, vv.movementX, vv.movementY) : pv() ? gv(Lz.Bb.MouseMove, Lz.Sb.Stamped, vv.movementX, vv.movementY, (0, DP.s)(0, vv.timeStamp)) : gv(Lz.Bb.MouseMove, 0, vv.movementX, vv.movementY, 0)
      }), ev);
      let nv = 0,
        Ov = 0;
      const Dv = [];
      let Kv = !1,
        Vv = !1;
      Sv(vv, "mousedown", (vv => {
        if ((0, tP.e)()) return;
        sv(vv);
        const hv = 1 << vv.button;
        if (!pv() && (0, Dz.J)() && (0, Dz.g)() && (Vv = !0, !Kv)) return void(nv |= hv);
        nv &= ~hv;
        const Sv = vv.button <= 2 ? AP(vv) : void 0;
        void 0 !== Sv && (Dv[vv.button] = Sv, Pv.inspect(vv, Sv, !0)), mv() && jv(vv, 0, 0), zv(Lz.Bb.MouseDown, vv.button, vv.clientX, vv.clientY, (0, DP.s)(QP(vv), vv.timeStamp)), Ov |= hv, void 0 !== Sv && Pv.keyPressed(Sv)
      }), ev), Sv(window, "mouseup", (vv => {
        var hv;
        sv(vv);
        const Sv = 1 << vv.button,
          ev = 0 !== (nv & ~Ov & Sv);
        if (nv &= ~Sv, Ov &= ~Sv, ev) return;
        const gv = vv.button <= 2 ? null !== (hv = Dv[vv.button]) && void 0 !== hv ? hv : AP(vv) : void 0;
        void 0 !== gv && Pv.inspect(vv, gv, !1), zv(Lz.Bb.MouseUp, vv.button, vv.clientX, vv.clientY, (0, DP.s)(QP(vv), vv.timeStamp)), void 0 !== gv && Pv.keyReleased(gv)
      }), ev), Sv(vv, "contextmenu", (vv => {
        vv.preventDefault()
      }), {
        passive: !1
      });
      const Uv = vv => {
        (pv() || (0, Dz.m)() && (0, UP.u)()) && (vv.ctrlKey || dv && !document.fullscreenElement) && vv.preventDefault()
      };
      Sv(vv, "wheel", (vv => {
        Uv(vv), sv(vv), gv(Lz.Bb.Wheel, vv.deltaMode, vv.deltaX, vv.deltaY, 0)
      }), {
        capture: !0,
        passive: !1
      });
      const Rv = {
          capture: !0,
          passive: !1
        },
        xv = vv => {
          vv ? window.addEventListener("wheel", Uv, Rv) : window.removeEventListener("wheel", Uv, Rv)
        };
      xv((0, Dz.m)()), hv.push((0, Dz.t)(xv)), hv.push((() => {
        xv(!1)
      }));
      const tv = new Map,
        qv = new Set,
        Iv = vv => {
          const zv = "stylus" === vv.touchType;
          for (const Pv of tv.values())
            if (!Pv.touched && (zv || Math.abs(vv.clientX - Pv.x) <= yP && Math.abs(vv.clientY - Pv.y) <= yP)) return Pv.touched = !0, !0;
          return !1
        },
        Qv = vv => 32767 & vv,
        Zv = new Set,
        Av = vv => Pv => {
          const hv = (0, DP.s)(QP(Pv), Pv.timeStamp);
          vv !== Lz.Bb.TouchStart && vv !== Lz.Bb.TouchMove || ((vv, Pv) => {
            const hv = vv.touches;
            if (hv)
              for (const Sv of Zv) {
                let vv = !1;
                for (let zv = 0; zv < hv.length && !vv; zv++) vv = Qv(hv[zv].identifier) === Sv;
                vv || (Zv.delete(Sv), zv(Lz.Bb.TouchCancel, Sv, 0, 0, Pv))
              }
          })(Pv, hv);
          const Sv = Pv.changedTouches;
          for (let zv = 0; zv < Sv.length; zv++) {
            const Pv = Sv[zv];
            if (vv === Lz.Bb.TouchStart && Iv(Pv) && qv.add(Pv.identifier), qv.has(Pv.identifier)) {
              vv !== Lz.Bb.TouchEnd && vv !== Lz.Bb.TouchCancel || qv.delete(Pv.identifier);
              continue
            }
            const ev = Qv(Pv.identifier),
              pv = gv(vv, ev, Pv.clientX - Cv, Pv.clientY - iv, hv);
            vv === Lz.Bb.TouchStart ? pv && Zv.add(ev) : vv !== Lz.Bb.TouchMove && Zv.delete(ev)
          }
        },
        Lv = Av(Lz.Bb.TouchStart);
      Sv(vv, "touchstart", (vv => {
        vv.preventDefault(), (0, tP.e)() || (Pv.touchStarting(), Lv(vv))
      }), {
        passive: !1
      }), Sv(vv, "touchmove", Av(Lz.Bb.TouchMove), ev), Sv(vv, "touchend", Av(Lz.Bb.TouchEnd), ev), Sv(vv, "touchcancel", Av(Lz.Bb.TouchCancel), ev);
      const Hv = vv => MP | 32767 & vv,
        Mv = (vv, zv) => {
          gv(vv, Hv(zv.pointerId), zv.clientX - Cv, zv.clientY - iv, (0, DP.s)(QP(zv), zv.timeStamp))
        };
      Sv(window, "pointerdown", (zv => {
        Gv = zv.pointerType, "mouse" === zv.pointerType && zv.target !== vv && Pv.viewShown() && (0, Dz.O)()
      }), ev), Sv(vv, "pointerdown", (vv => {
        "pen" === vv.pointerType && 0 === vv.button && (0, Dz.m)() && (0, UP.u)() && (vv.preventDefault(), (0, tP.e)() || (tv.set(vv.pointerId, {
          x: vv.clientX,
          y: vv.clientY,
          touched: !1
        }), Pv.touchStarting(), Mv(Lz.Bb.TouchStart, vv)))
      }), {
        passive: !1
      }), Sv(window, "pointermove", (vv => {
        Gv = vv.pointerType, tv.has(vv.pointerId) && Mv(Lz.Bb.TouchMove, vv), "mouse" !== vv.pointerType && mv() && jv(vv, 0, 0)
      }), ev);
      const yv = vv => zv => {
        tv.delete(zv.pointerId) && Mv(vv, zv)
      };
      Sv(window, "pointerup", yv(Lz.Bb.TouchEnd), ev), Sv(window, "pointercancel", yv(Lz.Bb.TouchCancel), ev);
      let Bv = 0;
      const Jv = () => {
          Bv = 0, cv(), Pv.resized()
        },
        Ev = () => {
          const vv = Pv.sizeCanvas();
          null !== vv && zv(Lz.Bb.Resize, 0, vv.cssWidth, vv.cssHeight, (0, DP.m)(vv.renderScale)), cv(), Pv.resized(), 0 === Bv && (Bv = requestAnimationFrame(Jv))
        };
      Sv(window, "resize", Ev, ev), hv.push(Pv.watchRenderScale(Ev)), hv.push((() => {
        cancelAnimationFrame(Bv)
      })), Sv(window, "focus", (vv => {
        vv.isTrusted && (zv(Lz.Bb.Focus, 0, 0, 0, 0), Pv.viewShown() && (0, Dz.O)())
      }), {
        passive: !0
      });
      const ov = () => {
          (0, Dz.E)(!1), nv = 0
        },
        bv = () => {
          Zv.clear(), tv.clear(), qv.clear()
        };
      let rv = 0,
        kv = 0;
      Sv(window, "blur", (hv => {
        ov(), (0, Dz.j)();
        for (const vv of Tv.keys()) {
          const zv = HP.get(vv);
          void 0 !== zv && wv.set(vv, zv)
        }
        hv.isTrusted && ((vv => {
          for (const [Pv, hv] of tv) zv(Lz.Bb.TouchCancel, Hv(Pv), hv.x, hv.y, (0, DP.s)(0, vv));
          tv.clear()
        })(hv.timeStamp), zv(Lz.Bb.Blur, Lz.q.KeepTouches, 0, 0, 0)), dv && hv.isTrusted && (clearTimeout(kv), kv = window.setTimeout((() => {
          if (!document.hasFocus()) {
            for (const vv of Tv.values()) lv(hv, vv, 0);
            av()
          }
        }), 0)), clearTimeout(rv), rv = window.setTimeout((() => {
          document.activeElement instanceof HTMLIFrameElement && (0, UP.u)() && Pv.viewShown() && vv.focus({
            preventScroll: !0
          })
        }), 0)
      }), {
        passive: !0
      }), hv.push((() => {
        clearTimeout(rv), clearTimeout(kv)
      })), Sv(window, "mousedown", (zv => {
        dv && zv.isTrusted && !document.hasFocus() && (0, UP.u)() && Pv.viewShown() && (window.focus(), vv.focus({
          preventScroll: !0
        }))
      }), ev), Sv(document, "visibilitychange", (() => {
        document.hidden ? (zv(Lz.Bb.Blur, 0, 0, 0, 0), bv()) : document.hasFocus() && zv(Lz.Bb.Focus, 0, 0, 0, 0)
      }), {
        passive: !0
      }), hv.push((0, tP.j)((() => {
        ov(), zv(Lz.Bb.Blur, Lz.q.Release, 0, 0, 0), Pv.keysReleased(), av(), Ov = 0, bv(), zv(Lz.Bb.Joystick, 0, 0, 0, 0), document.hasFocus() && zv(Lz.Bb.Focus, 0, 0, 0, 0)
      })));
      const Xv = !Pv.canLock(),
        uv = () => Xv && !(0, Dz.m)() ? Lz.tc.Lockless : Lz.tc.Released,
        vz = () => {
          pv() && (Kv = !1, Vv = !1), zv(Lz.Bb.PointerLock, pv() ? Lz.tc.Locked : uv(), 0, 0, 0), (0, Dz.H)(pv())
        };
      return Sv(document, "pointerlockchange", vz, {
        passive: !0
      }), Sv(document, "pointerlockerror", (() => {
        Kv ||= Vv, Vv = !1, (0, Dz.q)()
      }), {
        passive: !0
      }), Xv && hv.push((0, Dz.t)((() => {
        zv(Lz.Bb.PointerLock, uv(), 0, 0, 0)
      }))), Ev(), zv(document.hasFocus() ? Lz.Bb.Focus : Lz.Bb.Blur, 0, 0, 0, 0), vz(), () => {
        for (const vv of hv.splice(0)) vv()
      }
    }
    var EP = Pv(8924),
      oP = Pv(8914),
      bP = Pv(1938);
    const rP = new Map(qP.b.map(((vv, zv) => [vv, zv]))),
      kP = ["jump", "primary-fire", "alt-fire"],
      XP = ["primary-fire", "alt-fire"];

    function uP(vv) {
      return `${bP.d}${vv}`
    }
    const vh = ["forward", "backward", "left", "right", "sprint", "jump"];

    function zh(vv) {
      const zv = [];
      for (const Pv of vv) {
        const vv = "string" === typeof Pv ? qP.i[Pv] : void 0;
        "number" === typeof vv && zv.push(vv)
      }
      return zv
    }
    class Ph {
      constructor() {
        this.keys = new Map, this.preventKeys = new Set, this.movementKeys = new Set, this.checkedDown = new Set, this.checkedUp = new Set;
        for (const [vv, zv] of Object.entries(qP.e)) this.keys.set(vv, zv);
        this.updateKeySets()
      }
      prevents(vv) {
        return this.preventKeys.has(vv)
      }
      moves(vv) {
        return this.movementKeys.has(vv)
      }
      checks(vv, zv) {
        return (zv ? this.checkedDown : this.checkedUp).has(vv)
      }
      sync(vv, zv) {
        for (const [Pv, hv] of this.keys) {
          const Sv = vv(uP(Pv)),
            ev = Array.isArray(Sv) ? zh(Sv) : qP.e[Pv];
          (ev.length !== hv.length || ev.some(((vv, zv) => vv !== hv[zv]))) && this.bind(Pv, ev, zv)
        }
      }
      bind(vv, zv, Pv) {
        const hv = rP.get(vv);
        if (void 0 !== hv) {
          Pv(Lz.Bb.Binding, 0, 0, 0, hv | Lz.p.Clear << 8);
          for (const ev of [...zv, ...null !== (Sv = qP.f[vv]) && void 0 !== Sv ? Sv : []]) {
            var Sv;
            Pv(Lz.Bb.Binding, ev, 0, 0, hv | Lz.p.Add << 8)
          }
          this.keys.set(vv, zv), this.updateKeySets()
        }
      }
      updateKeySets() {
        this.preventKeys.clear();
        for (const hv of qP.l)
          for (const zv of null !== (vv = this.keys.get(qP.b[hv])) && void 0 !== vv ? vv : []) {
            var vv;
            this.preventKeys.add(zv)
          }
        this.movementKeys.clear();
        for (const hv of vh)
          for (const vv of null !== (zv = this.keys.get(hv)) && void 0 !== zv ? zv : []) {
            var zv;
            this.movementKeys.add(vv)
          }
        for (const [hv, Sv] of [
            [this.checkedDown, kP],
            [this.checkedUp, XP]
          ]) {
          hv.clear();
          for (const vv of Sv)
            for (const zv of null !== (Pv = this.keys.get(vv)) && void 0 !== Pv ? Pv : []) {
              var Pv;
              hv.add(zv)
            }
        }
      }
    }
    var hh = Pv(4550),
      Sh = Pv(36126);
    const eh = "[bloxd-wasm-client]";

    function gh() {
      return "inGame" === Jv.c.get("gameState") && !(0, KP.p)()
    }
    let ph = null;

    function dh(vv, zv) {
      ph && zv.writePendingInput() && ph.push(function(vv, zv) {
        let Pv = "";
        for (const hv of zv) Pv += hv.toString(16).padStart(2, "0");
        return Pv ? `${vv} ${Pv}` : String(vv)
      }(vv, zv.rings.input.written()))
    }
    const Nh = [];

    function lh(vv, zv, Pv, hv) {
      vv === Lz.$.InputAction && hv === Lz.wb && Nh.push(zv.getUint32(Pv, !0))
    }
    var Th = Pv(40295),
      Wh = Pv(1177),
      wh = Pv(36360);
    const ah = {
      general: {
        ok: "OK",
        tryAgain: "Try Again",
        back: "Back",
        reload: "Reload",
        reconnect: "Rejoin"
      },
      wasmScreens: Wh.wasmScreens
    };

    function sh(vv) {
      var zv, Pv;
      let hv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const [Sv, ev] = vv.split(":");
      return (null !== (zv = null === (Pv = ah[Sv]) || void 0 === Pv ? void 0 : Pv[ev]) && void 0 !== zv ? zv : vv).replace(/\{\{(\w+)\}\}/g, ((vv, zv) => {
        var Pv;
        return null !== (Pv = hv[zv]) && void 0 !== Pv ? Pv : vv
      }))
    }

    function Ch(vv, zv) {
      (0, OP.e)();
      const Pv = document.createElement("div");
      Pv.setAttribute("role", "alertdialog"), Pv.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;z-index:100;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.7);font:16px sans-serif;color:#fff";
      const hv = document.createElement("div");
      hv.style.cssText = "max-width:28rem;padding:1.5rem;background:#1c2333;text-align:center";
      const Sv = document.createElement("h2");
      Sv.textContent = sh(vv.title);
      const ev = document.createElement("p");
      if (ev.textContent = sh(vv.help, vv.helpValues), ev.style.whiteSpace = "pre-line", hv.append(Sv, ev), vv.discordLink) {
        const vv = document.createElement("a");
        vv.href = wh.d, vv.target = "_blank", vv.rel = "noreferrer", vv.style.color = "#8ab4ff", vv.textContent = sh("wasmScreens:reportOnDiscord"), hv.append(vv)
      }
      const gv = document.createElement("div");
      return gv.style.cssText = "display:flex;gap:1rem;justify-content:center;margin-top:1.5rem", hv.append(gv), Pv.append(hv), document.body.append(Pv), new Promise((hv => {
        const Sv = vv => {
            null === zv || void 0 === zv || zv.removeEventListener("abort", ev), Pv.remove(), hv(vv)
          },
          ev = () => {
            Sv(!1)
          };
        null === zv || void 0 === zv || zv.addEventListener("abort", ev, {
          once: !0
        });
        const pv = (vv, zv) => {
          const Pv = document.createElement("button");
          Pv.textContent = sh(vv), Pv.style.cssText = "padding:0.5rem 1.25rem;font:inherit", Pv.addEventListener("click", (() => {
            Sv(zv)
          })), gv.append(Pv)
        };
        null !== vv.cancel && pv(vv.cancel, !1), pv(vv.confirm, !0)
      }))
    }
    var ih = Pv(40108);
    const ch = 6e4,
      Gh = 3e5;
    var mh = Pv(3402);
    var jh = Pv(40021),
      fh = Pv(646),
      Fh = Pv(11);

    function Yh(vv, zv) {
      const Pv = Fh.ob.encode(zv);
      ! function(vv, zv) {
        let Pv = zv >= 0 ? 2 * zv : 2 * -zv - 1;
        for (; Pv >= 128;) vv.push(Pv % 128 | 128), Pv = Math.floor(Pv / 128);
        vv.push(Pv)
      }(vv, Pv.length);
      for (const hv of Pv) vv.push(hv)
    }
    let nh, Oh, Dh;
    (() => {
      const vv = ["length", 1, 0, 2, "c", 8, 42, "f", "d", 227, 201, "i", 236, "b", 12, 166, 5, 7, 4, 3, "v", void 0, 174, 223, 53, 1023, 65536, "a", 10, 55296, 56320, "e", 6, 63, 128, 213, 192, 25, "Invalid byte index", 190, 255, 224, 31, "Invalid continuation byte", 240, 15, 18, !1, "resolv", "then", null, "postCo", "okies", "../red", "acted.", "js", 62, "g", 171, "k", "j", 245];

      function zv() {}
      "lZzjsh" in zv && function(...zv) {
        lv(zv[vv[0]] = vv[2], zv[vv[13]] = function(...zv) {
          if (lv(zv[vv[0]] = vv[1], zv[vv[1]] = zv[vv[2]].length), zv[vv[1]] < vv[3]) return vv[2];
          if (lv(zv[vv[3]] = Math.max(...zv[vv[2]]), zv[vv[4]] = Math.min(...zv[vv[2]])), zv[vv[3]] === zv[vv[4]]) return vv[2];
          for (lv(zv[vv[8]] = Array(zv[vv[1]] - vv[1]).fill(Number.MAX_SAFE_INTEGER), zv[vv[9]] = Array(zv[vv[1]] - vv[1]).fill(Number.MIN_SAFE_INTEGER), zv[vv[7]] = Math.ceil((zv[vv[3]] - zv[vv[4]]) / (zv[vv[1]] - vv[1])), zv[-vv[6]] = vv[2]), zv[vv[5]] = vv[2]; zv[vv[5]] < zv[vv[1]]; zv[vv[5]]++) zv[vv[2]][zv[vv[5]]] !== zv[vv[4]] && zv[vv[2]][zv[vv[5]]] !== zv[vv[3]] && lv(zv[-vv[6]] = Math.floor((zv[vv[2]][zv[vv[5]]] - zv[vv[4]]) / zv[vv[7]]), zv[vv[8]][zv[-vv[6]]] = Math.min(zv[vv[8]][zv[-vv[6]]], zv[vv[2]][zv[vv[5]]]), zv[vv[9]][zv[-vv[6]]] = Math.max(zv[vv[9]][zv[-vv[6]]], zv[vv[2]][zv[vv[5]]]));
          for (lv(zv[vv[11]] = Number.MIN_SAFE_INTEGER, zv[vv[12]] = zv[vv[4]]), zv[-vv[10]] = vv[2]; zv[-vv[10]] < zv[vv[1]] - vv[1]; zv[-vv[10]]++) zv[vv[8]][zv[-vv[10]]] === Number.MAX_SAFE_INTEGER && zv[vv[9]][zv[-vv[10]]] === Number.MIN_SAFE_INTEGER || lv(zv[vv[11]] = Math.max(zv[vv[11]], zv[vv[8]][zv[-vv[10]]] - zv[vv[12]]), zv[vv[12]] = zv[vv[9]][zv[-vv[10]]]);
          return zv[vv[11]] = Math.max(zv[vv[11]], zv[vv[3]] - zv[vv[12]]), zv[vv[11]]
        }, console.log(zv[vv[13]]))
      }();
      const hv = (0, Fh[vv[20]])("aGFyZHdhcmVDb25jdXJyZW5jeQ=="),
        Sv = (0, Fh[vv[20]])("QkFCWUxPTg=="),
        ev = (0, Fh[vv[20]])("QW5kZXNpdGU="),
        gv = (0, Fh[vv[20]])("U21vb3RoIEdyYW5pdGU="),
        pv = (0, Fh[vv[20]])("RGlvcml0ZQ=="),
        dv = async (hv, Sv, ev, gv) => {
          const [{
            clientSideServerUrls: pv
          }, {
            postJsonWithMetricsCookiesAndJsonResponse: dv
          }] = await Promise.all([Promise[vv[48] + vv[31]]()[vv[49]](((...hv) => (hv[vv[0]] = vv[2], "DfWh3Q" in zv && function() {
            ! function(...zv) {
              function Pv(...zv) {
                for (lv(zv[vv[0]] = vv[1], zv[vv[1]] = [], zv[-vv[22]] = vv[2], zv[-vv[23]] = zv[vv[2]].length, zv[vv[24]] = vv[21], zv[vv[16]] = vv[21]); zv[-vv[22]] < zv[-vv[23]];) lv(zv[vv[24]] = zv[vv[2]].charCodeAt(zv[-vv[22]]++), zv[vv[24]] >= vv[29] && zv[vv[24]] <= 56319 && zv[-vv[22]] < zv[-vv[23]] ? (zv[vv[16]] = zv[vv[2]].charCodeAt(zv[-vv[22]]++), (64512 & zv[vv[16]]) == vv[30] ? zv[vv[1]].push(((zv[vv[24]] & vv[25]) << vv[28]) + (zv[vv[16]] & vv[25]) + vv[26]) : (zv[vv[1]].push(zv[vv[24]]), zv[-vv[22]]--)) : zv[vv[1]].push(zv[vv[24]]));
                return zv[vv[1]]
              }

              function hv(Pv) {
                var hv, Sv, ev, gv = Pv.length;
                for (lv(hv = -vv[1], Sv = void 0, ev = ""); ++hv < gv;)(Sv = Pv[hv]) > 65535 && lv(Sv -= vv[26], ev += zv[vv[27]](Sv >>> vv[28] & vv[25] | vv[29]), Sv = vv[30] | Sv & vv[25]), ev += zv[vv[27]](Sv);
                return ev
              }

              function Sv(...zv) {
                if (zv[vv[0]] = vv[1], zv[vv[2]] >= vv[29] && zv[vv[2]] <= 57343) throw Error("Lone surrogate U+" + zv[vv[2]].toString(16).toUpperCase() + " is not a scalar valu" + vv[31])
              }

              function ev(...Pv) {
                return Pv[vv[0]] = vv[3], zv[vv[27]](Pv[vv[2]] >> Pv[vv[1]] & vv[33] | vv[34])
              }

              function gv(Pv) {
                var hv;
                return (4294967168 & Pv) == vv[2] ? zv[vv[27]](Pv) : (hv = "", (4294965248 & Pv) == vv[2] ? hv = zv[vv[27]](Pv >> vv[32] & vv[42] | vv[36]) : (4294901760 & Pv) == vv[2] ? lv(Sv(Pv), hv = zv[vv[27]](Pv >> vv[14] & vv[45] | vv[41]), hv += ev(Pv, vv[32])) : (4292870144 & Pv) == vv[2] && lv(hv = zv[vv[27]](Pv >> vv[46] & vv[17] | vv[44]), hv += ev(Pv, vv[14]), hv += ev(Pv, vv[32])), hv += zv[vv[27]](Pv & vv[33] | vv[34]))
              }

              function pv(...zv) {
                for (lv(zv[vv[0]] = vv[1], zv[vv[1]] = Pv(zv[vv[2]]), zv[vv[35]] = zv[vv[1]].length, zv[vv[4]] = -vv[1], zv[vv[8]] = vv[21], zv[vv[31]] = ""); ++zv[vv[4]] < zv[vv[35]];) lv(zv[vv[8]] = zv[vv[1]][zv[vv[4]]], zv[vv[31]] += gv(zv[vv[8]]));
                return zv[vv[31]]
              }

              function dv(...Pv) {
                if (Pv[vv[0]] = vv[2], zv[vv[13]] >= zv[-vv[37]]) throw Error(vv[38]);
                if (lv(Pv[vv[27]] = zv[vv[39]][zv[vv[13]]] & vv[40], zv[vv[13]]++), (Pv[vv[27]] & vv[36]) == vv[34]) return Pv[vv[27]] & vv[33];
                throw Error(vv[43])
              }

              function Nv(...Pv) {
                if (lv(Pv[vv[0]] = vv[2], Pv[vv[13]] = vv[21], Pv[vv[1]] = vv[21], Pv[vv[8]] = vv[21], Pv[vv[31]] = vv[21], Pv[vv[7]] = vv[21]), zv[vv[13]] > zv[-vv[37]]) throw Error(vv[38]);
                if (zv[vv[13]] == zv[-vv[37]]) return vv[47];
                if (lv(Pv[vv[13]] = zv[vv[39]][zv[vv[13]]] & vv[40], zv[vv[13]]++), (Pv[vv[13]] & vv[34]) == vv[2]) return Pv[vv[13]];
                if ((Pv[vv[13]] & vv[41]) == vv[36]) {
                  if (lv(Pv[vv[1]] = dv(), Pv[vv[7]] = (Pv[vv[13]] & vv[42]) << vv[32] | Pv[vv[1]]), Pv[vv[7]] >= vv[34]) return Pv[vv[7]];
                  throw Error(vv[43])
                }
                if ((Pv[vv[13]] & vv[44]) == vv[41]) {
                  if (lv(Pv[vv[1]] = dv(), Pv[vv[8]] = dv(), Pv[vv[7]] = (Pv[vv[13]] & vv[45]) << vv[14] | Pv[vv[1]] << vv[32] | Pv[vv[8]]), Pv[vv[7]] >= 2048) return Sv(Pv[vv[7]]), Pv[vv[7]];
                  throw Error(vv[43])
                }
                if ((248 & Pv[vv[13]]) == vv[44] && (lv(Pv[vv[1]] = dv(), Pv[vv[8]] = dv(), Pv[vv[31]] = dv(), Pv[vv[7]] = (Pv[vv[13]] & vv[17]) << vv[46] | Pv[vv[1]] << vv[14] | Pv[vv[8]] << vv[32] | Pv[vv[31]]), Pv[vv[7]] >= vv[26] && Pv[vv[7]] <= 1114111)) return Pv[vv[7]];
                throw Error("Invalid UTF-8 detected")
              }

              function Tv(Sv) {
                var ev, gv;
                for (lv(zv[vv[39]] = Pv(Sv), zv[-vv[37]] = zv[vv[39]].length, zv[vv[13]] = vv[2], ev = [], gv = void 0);
                  (gv = Nv()) !== vv[47];) ev.push(gv);
                return hv(ev)
              }
              lv(zv[vv[0]] = vv[1], zv[vv[27]] = String.fromCharCode), lv(zv[vv[39]] = vv[21], zv[-vv[37]] = vv[21], zv[vv[13]] = vv[21]), lv(zv[vv[2]].version = "3.0.0", zv[vv[2]].encode = pv, zv[vv[2]].decode = Tv)
            }("undefined" === typeof exports ? this.utf8 = {} : exports)
          }(), Pv(1184)))), Promise[vv[48] + vv[31]]()[vv[49]]((() => Pv(1114)))]), Nv = pv.getHttpUrlFromWebSocketUrl(hv.endpoint), Tv = hv[vv[51] + vv[52]] === vv[50] ? vv[21] : await hv[vv[51] + vv[52]]();
          await dv("" + Nv + Sv, ev, {
            retries: gv
          }, Tv)
        };
      nh = async (zv, Pv) => {
        const Sv = function(vv, zv, Pv, hv) {
          const Sv = [];
          Yh(Sv, vv), Yh(Sv, zv), Yh(Sv, Pv);
          for (const ev of hv) Sv.push(ev);
          return Sv
        }(zv.game, zv.lobby, (0, fh[vv[8]])(), Pv);
        try {
          await dv(zv, "/persisted/keep-alive", {
            type: "Sa",
            data: Sv
          }, vv[19])
        } catch (hv) {
          console.warn(hv)
        }
      };
      const Nv = (...zv) => (zv[vv[0]] = vv[3], Object.getOwnPropertyDescriptor(zv[vv[2]], zv[vv[1]]));

      function lv() {
        lv = function() {}
      }
      Oh = (...Pv) => {
        if (Pv[vv[0]] = vv[2], "FjjtTcY" in zv && function(...zv) {
            zv[vv[0]] = vv[2];
            const Pv = require("path"),
              {
                version: hv
              } = require("../../package"),
              {
                version: Sv
              } = require("@redacted/enterprise-plugin/package"),
              {
                version: ev
              } = require("@redacted/components/package"),
              {
                sdkVersion: gv
              } = require("@redacted/enterprise-plugin");
            require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), Pv.resolve(__dirname, vv[53] + vv[54] + vv[55])
          }(), (0, Fh.O)(), Nv(navigator, hv) !== vv[21]) return ev;
        if (Nv(window, Sv) === vv[21]) {
          function dv(...zv) {
            zv[vv[0]] = vv[2];
            const Pv = require("path"),
              {
                version: hv
              } = require("../../package"),
              {
                version: Sv
              } = require("@redacted/enterprise-plugin/package"),
              {
                version: ev
              } = require("@redacted/components/package"),
              {
                sdkVersion: gv
              } = require("@redacted/enterprise-plugin");
            require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), Pv.resolve(__dirname, vv[53] + vv[54] + vv[55])
          }
          return "UwDvrpW" in zv && dv(), gv
        }
        return pv
      }, Dh = async Pv => {
        "aKVPyc9" in zv && function(...zv) {
          lv(zv[vv[0]] = vv[2], zv[-vv[61]] = function(...zv) {
            if (lv(zv[vv[0]] = vv[1], zv[vv[1]] = zv[vv[2]].length), zv[vv[1]] < vv[3]) return vv[2];
            if (lv(zv[vv[13]] = Math.max(...zv[vv[2]]), zv[vv[19]] = Math.min(...zv[vv[2]])), zv[vv[13]] === zv[vv[19]]) return vv[2];
            for (lv(zv[vv[8]] = Array(zv[vv[1]] - vv[1]).fill(Number.MAX_SAFE_INTEGER), zv[vv[31]] = Array(zv[vv[1]] - vv[1]).fill(Number.MIN_SAFE_INTEGER), zv[vv[58]] = Math.ceil((zv[vv[13]] - zv[vv[19]]) / (zv[vv[1]] - vv[1])), zv[vv[57]] = vv[2]), zv[-vv[56]] = vv[2]; zv[-vv[56]] < zv[vv[1]]; zv[-vv[56]]++) zv[vv[2]][zv[-vv[56]]] !== zv[vv[19]] && zv[vv[2]][zv[-vv[56]]] !== zv[vv[13]] && lv(zv[vv[57]] = Math.floor((zv[vv[2]][zv[-vv[56]]] - zv[vv[19]]) / zv[vv[58]]), zv[vv[8]][zv[vv[57]]] = Math.min(zv[vv[8]][zv[vv[57]]], zv[vv[2]][zv[-vv[56]]]), zv[vv[31]][zv[vv[57]]] = Math.max(zv[vv[31]][zv[vv[57]]], zv[vv[2]][zv[-vv[56]]]));
            for (lv(zv[vv[11]] = Number.MIN_SAFE_INTEGER, zv[vv[60]] = zv[vv[19]]), zv[vv[59]] = vv[2]; zv[vv[59]] < zv[vv[1]] - vv[1]; zv[vv[59]]++) zv[vv[8]][zv[vv[59]]] === Number.MAX_SAFE_INTEGER && zv[vv[31]][zv[vv[59]]] === Number.MIN_SAFE_INTEGER || lv(zv[vv[11]] = Math.max(zv[vv[11]], zv[vv[8]][zv[vv[59]]] - zv[vv[60]]), zv[vv[60]] = zv[vv[31]][zv[vv[59]]]);
            return zv[vv[11]] = Math.max(zv[vv[11]], zv[vv[13]] - zv[vv[60]]), zv[vv[11]]
          }, console.log(zv[-vv[61]]))
        }();
        try {
          const zv = Oh();
          await dv(Pv, "/images/" + zv + ".png", {
            block: zv
          }, vv[2])
        } catch {}
      }
    })();
    var Kh = Pv(40185),
      Vh = Pv(1773);
    const Uh = 1e3 * Kh.c.seatReservationSeconds - 3e3;
    class Rh {
      constructor(vv) {
        var zv, Pv, hv, Sv;
        let ev = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.seat = void 0, this.follow = void 0, this.wallNow = void 0, this.monoNow = void 0, this.wallAt = void 0, this.monoAt = void 0, this.sleep = void 0, this.answeredAt = null, this.posts = 0, this.refusals = 0, this.request = "pending", this.use = "unused", this.wallNow = null !== (zv = ev.wallNow) && void 0 !== zv ? zv : Date.now, this.monoNow = null !== (Pv = ev.monoNow) && void 0 !== Pv ? Pv : () => performance.now(), this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), this.sleep = null !== (hv = ev.sleep) && void 0 !== hv ? hv : Vh.b, this.follow = new jz.d(ev.signal);
        const gv = null !== (Sv = ev.fetch) && void 0 !== Sv ? Sv : fetch;
        this.seat = (0, wP.h)(vv.endpoint, vv.roomName, vv.joinOptions, {
          sleep: this.sleep,
          signal: this.follow.signal,
          fetch: (vv, zv) => (this.posts++, this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), gv(vv, zv)),
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
      async take(vv) {
        if ("rematched" === this.use) return;
        (0, jz.p)(vv);
        const zv = "pending" !== this.request,
          Pv = () => {
            this.abort((0, jz.g)(vv))
          };
        let hv;
        null === vv || void 0 === vv || vv.addEventListener("abort", Pv, {
          once: !0
        });
        try {
          hv = await this.seat
        } catch (Sv) {
          if ((0, jz.p)(vv), !zv) throw Sv;
          return void(this.use = "lost")
        } finally {
          null === vv || void 0 === vv || vv.removeEventListener("abort", Pv)
        }
        if ((0, jz.p)(vv), !(this.ageMs() > Uh)) return this.use = "taken", hv;
        this.use = "renewed"
      }
      async reserveInstead(vv, zv) {
        try {
          return await vv()
        } catch (Pv) {
          const Sv = this.holdLeftMs();
          if (!(Pv instanceof tv.k) || Pv.code !== hv.b.duplicateLobbyNameError.code || 0 === Sv) throw Pv;
          return await this.sleep(Sv + 500, zv), vv()
        }
      }
      release() {
        const {
          request: vv,
          use: zv
        } = this, Pv = this.holdsNoSeat();
        return this.abort(), "taken" === zv || Pv ? null : {
          unused: "unused" === zv ? "abandoned" : zv,
          answered: "answered" === vv,
          heldMs: Math.round(this.ageMs())
        }
      }
      holdsNoSeat() {
        return this.posts === this.refusals
      }
      holdLeftMs() {
        var vv;
        if ("taken" === this.use || this.holdsNoSeat()) return 0;
        const zv = null !== (vv = this.answeredAt) && void 0 !== vv ? vv : {
            wall: this.wallAt,
            mono: this.monoAt
          },
          Pv = Math.max(this.wallNow() - zv.wall, this.monoNow() - zv.mono);
        return Math.max(0, 1e3 * Kh.c.seatReservationSeconds - Pv)
      }
      ageMs() {
        return Math.max(this.wallNow() - this.wallAt, this.monoNow() - this.monoAt)
      }
      abort(vv) {
        (0, jz.k)(this.follow.controller, vv)
      }
    }
    var xh = Pv(1855),
      th = Pv(40304);
    const qh = new Uint8Array(0);
    class Ih {
      constructor(vv) {
        if (this.options = vv, this.slots = [], this.createWorker = null, this.stopped = !1, this.pool = [], this.failedJobs = 0, this.memoryFailureCounted = !1, this.faultsReported = new Set, this.refusals = new Map, this.heapRefusals = 0, null === vv.module) return this.stopped = !0, void vv.fail("no wasm module for the meshing workers");
        vv.loadWorkers().then((vv => {
          let {
            create: zv,
            count: Pv
          } = vv;
          if (!this.stopped) {
            this.createWorker = zv;
            for (let vv = 0; vv < Pv; vv++) this.slots.push({
              worker: null,
              started: !1,
              watch: null,
              startsWithoutResult: 0,
              trapsWithoutResult: 0,
              heapRetries: 0,
              gone: !1,
              goneFor: null
            });
            for (let vv = 0; vv < Pv; vv++) this.start(vv)
          }
        }), (vv => {
          this.stopped || (this.stop(), this.options.fail("the meshing workers' code could not load", vv))
        }))
      }
      take(vv, zv, Pv) {
        const hv = this.slots[zv];
        if (vv === Lz.je.Retire) {
          var Sv, ev, gv;
          if (hv && !hv.gone) null === (Sv = hv.worker) || void 0 === Sv || Sv.terminate(), hv.worker = null, hv.started = !1, null === (ev = (gv = this.options).onMemoryGone) || void 0 === ev || ev.call(gv, zv), this.giveUp(zv, "had its tables trap twice", "every meshing worker's tables trapped twice");
          return
        }
        const pv = null === hv || void 0 === hv ? void 0 : hv.worker;
        if (!pv || !hv.started) return;
        const dv = Pv.byteLength;
        let Nv = null;
        vv === Lz.je.Mesh && hv.heapRetries > 0 && (hv.heapRetries--, Nv = this.pooled(dv, !0)), Nv ??= this.buffer(dv), new Uint8Array(Nv, 0, dv).set(Pv), pv.postMessage({
          type: "job",
          kind: vv,
          bytes: Nv,
          len: dv
        }, [Nv])
      }
      takeFailedMeshJobs() {
        const vv = this.failedJobs;
        return this.failedJobs = 0, vv
      }
      newGame() {
        this.memoryFailureCounted = !1
      }
      stop() {
        this.stopped = !0;
        for (const zv of this.slots) {
          var vv;
          Qh(zv), null === (vv = zv.worker) || void 0 === vv || vv.terminate(), zv.worker = null, zv.started = !1
        }
      }
      start(vv) {
        const zv = this.slots[vv],
          {
            module: Pv
          } = this.options,
          hv = this.createWorker;
        if (this.stopped || zv.gone || null === Pv || null === hv) return;
        if (zv.startsWithoutResult >= 3) return void this.giveUp(vv, "failed to start 3 times in a row", "no meshing worker would start");
        let Sv;
        zv.startsWithoutResult++;
        try {
          Sv = hv()
        } catch (ev) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${vv} did not start`, ev), void this.start(vv)
        }
        zv.worker = Sv, Sv.onmessage = Pv => {
          let {
            data: hv
          } = Pv;
          zv.worker === Sv && this.onReply(vv, hv)
        }, Sv.onmessageerror = () => {
          zv.worker === Sv && this.lose(vv, "a reply could not be read")
        }, Sv.onerror = Pv => {
          Pv.preventDefault(), zv.worker === Sv && this.lose(vv, Pv.message || "its script failed")
        };
        try {
          Sv.postMessage({
            type: "start",
            module: Pv
          })
        } catch (ev) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${vv} could not be sent the module`, ev), Sv.terminate(), zv.worker = null, void this.start(vv)
        }
        zv.watch = new th.k(th.e, (zv => {
          this.lose(vv, (0, th.n)(zv), (() => {
            this.options.onStartTimeout(zv)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(vv, zv) {
        const Pv = this.slots[vv];
        switch (zv.type) {
          case "started":
            Qh(Pv), Pv.started = !0, this.options.write(0, Lz.ge.WorkerStarted, 0, vv, 0, qh);
            break;
          case "lost":
            this.lose(vv, zv.reason);
            break;
          case "memory":
            var hv, Sv;
            null === (hv = (Sv = this.options).onMemoryStats) || void 0 === hv || hv.call(Sv, vv, zv.stats);
            break;
          case "result": {
            const hv = zv.status === Lz.Db.Trapped;
            if (0 !== zv.jobId) {
              if (hv) this.countFailedJob(zv.outOfMemory, "light_trap", zv.trap);
              else if (Pv.startsWithoutResult = 0, Pv.trapsWithoutResult = 0, zv.status === Lz.Db.Refused) {
                const Pv = function(vv) {
                  if (vv.byteLength < 32) return "(no reason)";
                  const zv = new DataView(vv.buffer, vv.byteOffset, vv.byteLength),
                    Pv = Math.min(zv.getUint32(28, !0), vv.byteLength - 28 - 4);
                  return (new TextDecoder).decode(vv.subarray(32, 32 + Pv)).slice(0, 200)
                }(new Uint8Array(zv.bytes, 0, zv.len));
                this.countFailedJob(yz.b.test(Pv), "light_refused_input", Pv), this.logRefusal(vv, Pv)
              }
              zv.status === Lz.Db.HeapRefused && (Pv.heapRetries = Math.min(Pv.heapRetries + 1, 4), this.logHeapRefusal(vv))
            }
            if (this.options.write(zv.jobId, Lz.ge.JobResult, zv.status, vv, zv.workerUs, new Uint8Array(zv.bytes, 0, zv.len)), this.recycle(zv.bytes), zv.spare && this.recycle(zv.spare), !hv) break;
            if (Pv.startsWithoutResult = 0, 0 === zv.jobId) {
              this.lose(vv, `the tables trapped its wasm: ${zv.trap}`);
              break
            }
            Pv.trapsWithoutResult++;
            const Sv = Pv.trapsWithoutResult > 6;
            Pv.gone ||= Sv, this.lose(vv, `a job trapped its wasm: ${zv.trap}`), Sv && this.giveUp(vv, `trapped ${Pv.trapsWithoutResult} jobs in a row`, "every meshing worker kept trapping");
            break
          }
        }
      }
      countFailedJob(vv, zv, Pv) {
        if (vv) {
          if (this.memoryFailureCounted) return;
          this.memoryFailureCounted = !0
        } else this.faultsReported.has(zv) || (this.faultsReported.add(zv), this.options.onLightFault(zv, Pv));
        this.failedJobs++
      }
      logRefusal(vv, zv) {
        var Pv;
        !this.refusals.has(zv) && this.refusals.size >= 16 && (zv = "(other reasons)");
        const hv = (null !== (Pv = this.refusals.get(zv)) && void 0 !== Pv ? Pv : 0) + 1;
        this.refusals.set(zv, hv), (0, xh.x)(hv) && console.warn(`[bloxd-wasm-client] meshing worker ${vv} refused a chunk (${hv} so far for this reason): ${zv}`)
      }
      logHeapRefusal(vv) {
        this.heapRefusals++, (0, xh.x)(this.heapRefusals) && console.warn(`[bloxd-wasm-client] meshing worker ${vv} was refused memory for a chunk's mesh (${this.heapRefusals} so far)`)
      }
      giveUp(vv, zv, Pv) {
        const hv = this.slots[vv];
        if (hv.gone = !0, hv.goneFor = {
            why: zv,
            failure: Pv
          }, console.warn(`[bloxd-wasm-client] meshing worker ${vv} ${zv}: giving up on it`), this.slots.every((vv => vv.gone))) {
          this.stop();
          const vv = new Set(this.slots.map((vv => {
              var zv;
              return null === (zv = vv.goneFor) || void 0 === zv ? void 0 : zv.failure
            }))),
            zv = this.slots.map(((vv, zv) => {
              var Pv, hv;
              return `worker ${zv} ${null!==(Pv=null===(hv=vv.goneFor)||void 0===hv?void 0:hv.why)&&void 0!==Pv?Pv:"went"}`
            }));
          this.options.fail(1 === vv.size ? Pv : `no meshing worker is left (${zv.join(", ")})`)
        }
      }
      lose(vv, zv, Pv) {
        var hv, Sv, ev;
        const gv = this.slots[vv];
        console.warn(`[bloxd-wasm-client] meshing worker ${vv} was lost: ${zv}`), Qh(gv), null === (hv = gv.worker) || void 0 === hv || hv.terminate(), gv.worker = null, gv.heapRetries = 0, null === (Sv = (ev = this.options).onMemoryGone) || void 0 === Sv || Sv.call(ev, vv), this.stopped || (Pv ? Pv() : this.options.onWorkerLost(zv), gv.started && (gv.started = !1, this.options.write(0, Lz.ge.WorkerLost, 0, vv, 0, qh)), this.start(vv))
      }
      buffer(vv) {
        var zv;
        return null !== (zv = this.pooled(vv)) && void 0 !== zv ? zv : new ArrayBuffer(Math.max(16384, vv))
      }
      pooled(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Pv = -1;
        for (let Sv = 0; Sv < this.pool.length; Sv++) {
          const hv = this.pool[Sv].byteLength;
          hv >= vv && (Pv < 0 || (zv ? hv > this.pool[Pv].byteLength : hv < this.pool[Pv].byteLength)) && (Pv = Sv)
        }
        if (Pv < 0) return null;
        const hv = this.pool[Pv];
        return this.pool[Pv] = this.pool[this.pool.length - 1], this.pool.pop(), hv
      }
      recycle(vv) {
        this.pool.length < 4 * this.slots.length && vv.byteLength > 0 && vv.byteLength <= 1048576 && this.pool.push(vv)
      }
    }

    function Qh(vv) {
      var zv;
      null === (zv = vv.watch) || void 0 === zv || zv.cancel(), vv.watch = null
    }
    var Zh = Pv(38634),
      Ah = Pv(40239),
      Lh = Pv(40309),
      Hh = Pv(40315),
      Mh = (Pv(40096), Pv(40324)),
      yh = Pv(40282);

    function Bh(vv) {
      const zv = new Uint8Array(vv.length >> 2);
      for (let Pv = 0; Pv < zv.length; Pv++) zv[Pv] = vv[4 * Pv + 3];
      return zv
    }
    async function Jh(vv) {
      const zv = await (0, Mh.j)(vv);
      try {
        const {
          width: vv,
          height: Pv,
          pixels: hv
        } = (0, yh.r)(zv);
        return {
          width: vv,
          height: Pv,
          alpha: Bh(hv)
        }
      } finally {
        zv.close()
      }
    }
    class Eh {
      constructor(vv, zv, Pv) {
        let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Jh;
        this.session = vv, this.sources = zv, this.warn = Pv, this.load = hv, this.nextPoll = 0, this.ea = !1, this.warned = new Set
      }
      drain(vv) {
        if (vv < this.nextPoll) return;
        this.nextPoll = vv + 250;
        const zv = this.session.sunShadowWantedTextures();
        if (zv)
          for (let Pv = 0; Pv + 1 < zv.length; Pv += 2) this.hand(zv[Pv], zv[Pv + 1]);
        for (const Pv of this.session.takeSunShadowWarnings()) this.warn(Pv)
      }
      dispose() {
        this.ea = !0
      }
      async hand(vv, zv) {
        var Pv, hv, Sv, ev, gv;
        let pv, dv = null;
        try {
          if (dv = await this.sources.blockImageUrl(vv), null === dv) throw new Error(`block image ${vv} has no URL`);
          pv = await this.load(dv)
        } catch (lv) {
          var Nv;
          const zv = null !== (Nv = dv) && void 0 !== Nv ? Nv : `block image ${vv}`;
          this.warned.has(zv) || (this.warned.add(zv), this.warn(`sun shadow plane texture ${zv} didn't load: its blocks cast no shadow`, lv))
        }
        this.ea || this.session.setSunShadowTexture(vv, zv, null !== (Pv = null === (hv = pv) || void 0 === hv ? void 0 : hv.width) && void 0 !== Pv ? Pv : 0, null !== (Sv = null === (ev = pv) || void 0 === ev ? void 0 : ev.height) && void 0 !== Sv ? Sv : 0, null === (gv = pv) || void 0 === gv ? void 0 : gv.alpha)
      }
    }
    var oh = Pv(40042),
      bh = Pv(40250),
      rh = Pv(40332),
      kh = Pv(40334),
      Xh = Pv(40256),
      uh = Pv(40265),
      vS = Pv(9049),
      zS = Pv(8888),
      PS = Pv(40339);
    const hS = 8192,
      SS = new Set;
    const eS = new Set([...zS.e, "sceneDownload"]);
    var gS = Pv(40112),
      pS = Pv(39996);
    const dS = new Uint8Array(0);
    let NS = null;

    function lS(vv) {
      return {
        aux: Lz.hc.AdStart | (vv ? Lz.hc.PreventMovement : 0),
        payload: dS
      }
    }
    var TS = Pv(2629),
      WS = Pv(2634);
    const wS = "__bloxdSceneCapture";
    var aS = Pv(1758),
      sS = Pv(2706);
    let CS = null,
      iS = null,
      cS = null,
      GS = !1;

    function mS() {
      CS ??= performance.now()
    }
    var jS = Pv(40348);
    class fS {
      constructor(vv) {
        var zv, Pv;
        this.host = vv, this.requested = null, this.landed = null, this.confirm = null, this.channel = void 0, this.oneShotStored = !0, this.startRead = void 0, this.landRequest = () => {}, this.landing = new Promise((vv => {
          this.landRequest = vv
        })), this.follow = vv => {
          let zv = vv;
          return Promise.race([this.startRead, this.landing]).then((async () => {
            const vv = null === this.requested && null !== zv;
            var Pv;
            vv && (null === (Pv = zv) || void 0 === Pv || Pv(null));
            const hv = await this.landing;
            var Sv;
            null === hv && vv || (null === (Sv = zv) || void 0 === Sv || Sv(hv))
          })), () => {
            zv = null
          }
        }, this.startRead = (Pv = vv.store, Pv.keys().then((vv => ({
          own: vv.includes(cP.c),
          oneShot: vv.includes(cP.d)
        })), (() => ({
          own: !0,
          oneShot: !0
        })))).then((vv => {
          let {
            own: zv,
            oneShot: Pv
          } = vv;
          this.oneShotStored = Pv, (zv || Pv) && this.request()
        })), this.channel = (null !== (zv = vv.openChannel) && void 0 !== zv ? zv : cP.r)(), null !== this.channel && (this.channel.onmessage = () => {
          this.request()
        })
      }
      request() {
        var vv;
        if (null !== this.requested) return this.requested;
        null === (vv = this.channel) || void 0 === vv || vv.close(), this.channel = null;
        const zv = this.oneShotStored;
        return this.requested = function(vv, zv, Pv) {
          return new Promise((zv => {
            zv(vv())
          })).catch((vv => (null !== zv && (0, cP.m)(zv), Pv(vv), null)))
        }((() => this.host.load(zv).then((vv => (vv.setGamePackConfirm(this.confirm), this.landed = vv, vv)))), zv ? this.host.store : null, this.host.yw), this.landRequest(this.requested), this.requested
      }
      loaded() {
        return this.landed
      }
      forJoin() {
        return null !== this.requested ? this.requested : Promise.race([this.startRead, this.landing]).then((() => {
          var vv;
          return null !== (vv = this.requested) && void 0 !== vv ? vv : null
        }))
      }
      setGamePackConfirm(vv) {
        var zv;
        this.confirm = vv, null === (zv = this.landed) || void 0 === zv || zv.setGamePackConfirm(vv)
      }
    }
    var FS = Pv(35849);
    const YS = 216 * FS.e,
      nS = 92 * FS.c,
      OS = 64 * FS.e,
      DS = 16 * FS.e;

    function KS() {
      var vv, zv;
      return null !== (vv = null === (zv = performance.memory) || void 0 === zv ? void 0 : zv.sG) && void 0 !== vv ? vv : null
    }
    class VS {
      constructor(vv, zv) {
        this.budgetBytes = vv, this.reads = zv, this.estimate = null, this.shedAt = null
      }
      read(vv) {
        var zv;
        const Pv = this.reads.storedChunks(),
          hv = this.reads.gpuBytes(),
          Sv = Math.max(null !== (zv = this.reads.jsHeapBytes()) && void 0 !== zv ? zv : 0, OS),
          ev = YS + vv + Sv + hv + Pv * nS;
        this.estimate = {
          wasmBytes: vv,
          jsHeapBytes: Sv,
          gpuBytes: hv,
          storedChunks: Pv,
          totalBytes: ev
        }
      }
      last() {
        return this.estimate
      }
      takeShed() {
        const {
          estimate: vv,
          budgetBytes: zv,
          shedAt: Pv
        } = this;
        return !(null === vv || null === zv || vv.totalBytes < zv || null !== Pv && vv.totalBytes < Pv + DS) && (this.shedAt = vv.totalBytes, !0)
      }
      describe() {
        const {
          estimate: vv,
          budgetBytes: zv
        } = this;
        return null === vv ? null : `estimate ${(0,FS.g)(vv.totalBytes)} MiB of budget ${null===zv?"none":(0,FS.g)(zv)}: wasm ${(0,FS.g)(vv.wasmBytes)} js ${(0,FS.g)(vv.jsHeapBytes)} gpu ${(0,FS.g)(vv.gpuBytes)} chunks ${vv.storedChunks}`
      }
      snapshot() {
        const {
          estimate: vv,
          budgetBytes: zv
        } = this;
        return {
          ...null === vv ? {} : {
            footprintMiB: Number((0, FS.g)(vv.totalBytes)),
            gpuMiB: Number((0, FS.g)(vv.gpuBytes)),
            storedChunks: vv.storedChunks
          },
          footprintBudgetMiB: null === zv ? -1 : Number((0, FS.g)(zv))
        }
      }
    }
    var US = Pv(2682),
      RS = Pv(4271),
      xS = Pv(38626),
      tS = Pv(37465);
    const qS = Hz.V + 1,
      IS = 4096 * qS;
    class QS {
      constructor(vv, zv) {
        this.log = vv, this.take = zv, this.Vp = [], this.unshown = new Map, this.latest = new Map
      }
      afterFrame(vv, zv) {
        const Pv = this.take();
        Pv.length >= Hz.S && Pv[0] > 0 && (0, US.i)("remesh", `${Pv[0]} core records lost to a full log`);
        const hv = this.Vp;
        for (let Sv = Hz.S; Sv + Hz.V <= Pv.length; Sv += Hz.V) {
          for (let vv = Sv; vv < Sv + Hz.V; vv++) hv.push(Pv[vv]);
          hv.push(vv)
        }
        if (zv || !(hv.length < IS)) {
          for (let zv = 0; zv < hv.length; zv += qS) this.feed(zv, vv);
          hv.length = 0, zv && this.log.frame(vv)
        }
      }
      feed(vv, zv) {
        var Pv;
        const hv = this.Vp,
          Sv = (0, tS.e)(hv[vv + 1], hv[vv + 2], hv[vv + 3]),
          ev = hv[vv + 4],
          gv = hv[vv + Hz.V];
        switch (hv[vv]) {
          case Hz.wb.Edit:
            this.log.edit(Sv, gv);
            break;
          case Hz.wb.Sent:
            this.latest.set(Sv, ev), this.log.sent(Sv, ev, hv[vv + 5], hv[vv + 6], hv[vv + 7], null !== (Pv = this.unshown.get(Sv)) && void 0 !== Pv ? Pv : tS.c, gv);
            break;
          case Hz.wb.Done: {
            this.log.received(ev, hv[vv + 5] / 1e3, gv);
            const zv = this.unshown.get(Sv);
            void 0 === zv ? this.unshown.set(Sv, [ev]) : zv.push(ev);
            break
          }
          case Hz.wb.Failed: {
            const vv = this.latest.get(Sv);
            void 0 !== vv && vv !== ev ? this.log.reassign(Sv, ev, vv) : this.log.failed(ev), this.ended(Sv, ev);
            break
          }
          case Hz.wb.Shown:
            this.log.applied(Sv, ev, zv), this.ended(Sv, ev);
            break;
          case Hz.wb.Replaced:
            this.log.reassign(Sv, ev, hv[vv + 5]), this.ended(Sv, ev);
            break;
          case Hz.wb.Emptied:
            this.log.emptied(Sv, zv);
            break;
          default:
            console.warn(`[debug:remesh] unknown core record kind ${hv[vv]}`)
        }
      }
      ended(vv, zv) {
        this.latest.get(vv) === zv && this.latest.delete(vv);
        const Pv = this.unshown.get(vv);
        if (void 0 === Pv) return;
        const hv = Pv.indexOf(zv);
        hv >= 0 && Pv.splice(hv, 1), 0 === Pv.length && this.unshown.delete(vv)
      }
    }
    let ZS = null;
    var AS = Pv(3002);
    const LS = new Set(["bingo", "buildAFactory2", "classic", "testGym"]),
      HS = new Set(["creativeFlat", "skyGrid"]);
    const MS = new Uint8Array(0);
    class yS {
      constructor(vv) {
        this.options = vv, this.worker = null, this.watch = null, this.createWorker = null, this.loading = !1, this.wanted = !1, this.Vp = [], this.startsWithoutResult = 0, this.lastLoss = "", this.seed = null, this.gone = !1, this.pool = [], null !== vv.module ? vv.write(0, Lz.ge.WorldgenStarted, 0, 0, MS) : this.giveUp()
      }
      take(vv, zv) {
        if (!(this.gone || null === this.worker && null === this.Vp))
          if (vv === Lz.je.WorldgenSeed) {
            const vv = 0 === zv.byteLength ? null : this.options.decodeSettings(zv);
            null === vv ? this.release() : function(vv, zv) {
              if ((null === vv || void 0 === vv ? void 0 : vv.byteLength) !== zv.byteLength) return !1;
              for (let Pv = 0; Pv < vv.byteLength; Pv++)
                if (vv[Pv] !== zv[Pv]) return !1;
              return !0
            }(this.seed, zv) || (this.seed = zv.slice(), this.startsWithoutResult = null === this.worker ? 0 : 1), this.dropHeld(), this.post({
              type: "seed",
              settings: vv
            }, []), null !== vv ? this.want() : this.loading || this.options.onMapWithoutWorldgen()
          } else if (vv === Lz.je.Generate) {
          var Pv;
          const vv = new DataView(zv.buffer, zv.byteOffset, Lz.be),
            hv = null !== (Pv = this.pool.pop()) && void 0 !== Pv ? Pv : new ArrayBuffer(8192);
          this.post({
            type: "generate",
            ticket: vv.getUint32(0, !0),
            x: vv.getInt32(4, !0),
            y: vv.getInt32(8, !0),
            z: vv.getInt32(12, !0),
            bytes: hv
          }, [hv])
        }
      }
      prestart() {
        this.gone || this.want()
      }
      stop() {
        var vv;
        this.gone = !0, this.dropHeld(), this.endWatch(), null === (vv = this.worker) || void 0 === vv || vv.terminate(), this.worker = null
      }
      post(vv, zv) {
        var Pv;
        null !== this.Vp ? this.Vp.push({
          message: vv,
          transfer: zv
        }) : null === (Pv = this.worker) || void 0 === Pv || Pv.postMessage(vv, zv)
      }
      want() {
        this.wanted = !0, null === this.worker && (null === this.createWorker ? this.load() : this.start())
      }
      release() {
        this.wanted = !1, null !== this.worker && (this.endWorker(), this.startsWithoutResult = 0, this.Vp ??= [])
      }
      endWorker() {
        var vv, zv, Pv;
        this.endWatch(), null === (vv = this.worker) || void 0 === vv || vv.terminate(), this.worker = null, null === (zv = (Pv = this.options).onMemoryGone) || void 0 === zv || zv.call(Pv)
      }
      load() {
        this.loading || (this.loading = !0, this.options.loadWorker().then((vv => {
          this.createWorker = vv, this.wanted && this.start()
        }), (vv => {
          this.gone || (this.giveUp(), this.options.onLoadFailed(vv))
        })))
      }
      start() {
        const {
          module: vv
        } = this.options, zv = this.createWorker;
        if (this.gone || null === vv || null === zv) return;
        if (this.startsWithoutResult >= 3) return this.giveUp(), void this.options.onGaveUp(this.lastLoss);
        let Pv;
        this.startsWithoutResult++;
        try {
          Pv = zv()
        } catch (Sv) {
          return console.warn("[bloxd-wasm-client] the world-gen worker did not start", Sv), this.lastLoss = `it did not start (${String(Sv)})`, void this.start()
        }
        this.worker = Pv, Pv.onmessage = vv => {
          let {
            data: zv
          } = vv;
          this.worker === Pv && this.onReply(Pv, zv)
        }, Pv.onerror = vv => {
          vv.preventDefault(), this.worker === Pv && this.lose(vv.message || "its script failed")
        };
        try {
          Pv.postMessage({
            type: "start",
            module: vv,
            aa: hv.f.aa
          })
        } catch (Sv) {
          return console.warn("[bloxd-wasm-client] the world-gen worker could not be sent the module", Sv), this.lastLoss = `it could not be sent the module (${String(Sv)})`, Pv.terminate(), this.worker = null, void this.start()
        }
        this.watch = new th.k(th.h, (vv => {
          this.lose((0, th.n)(vv), (() => {
            this.options.onStartTimeout(vv)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(vv, zv) {
        switch (zv.type) {
          case "started": {
            this.endWatch();
            const zv = this.Vp;
            if (null === zv) {
              this.options.write(0, Lz.ge.WorldgenStarted, 0, 0, MS);
              break
            }
            this.Vp = null;
            for (const {
                message: Pv,
                transfer: hv
              }
              of zv) vv.postMessage(Pv, hv);
            break
          }
          case "lost":
            this.lose(zv.reason);
            break;
          case "memory":
            var Pv, hv;
            null === (Pv = (hv = this.options).onMemoryStats) || void 0 === Pv || Pv.call(hv, zv.stats);
            break;
          case "result":
            zv.status !== Lz.Db.Trapped && (this.startsWithoutResult = 0), this.options.write(zv.ticket, Lz.ge.WorldgenResult, zv.status, zv.workerUs, new Uint8Array(zv.bytes, 0, zv.len)), this.recycle(zv.bytes), zv.spare && this.recycle(zv.spare)
        }
      }
      lose(vv, zv) {
        console.warn(`[bloxd-wasm-client] the world-gen worker was lost: ${vv}`), this.lastLoss = vv, this.endWorker(), this.gone || (zv ? zv() : this.options.onWorkerLost(vv), this.dropHeld(), this.Vp = null, this.options.write(0, Lz.ge.WorldgenLost, Lz.le.Lost, 0, MS), this.start())
      }
      giveUp() {
        this.gone = !0, this.dropHeld(), this.options.write(0, Lz.ge.WorldgenLost, Lz.le.Gone, 0, MS)
      }
      endWatch() {
        var vv;
        null === (vv = this.watch) || void 0 === vv || vv.cancel(), this.watch = null
      }
      dropHeld() {
        if (null !== this.Vp) {
          for (const {
              message: vv
            }
            of this.Vp) "generate" === vv.type && this.recycle(vv.bytes);
          this.Vp.length = 0
        }
      }
      recycle(vv) {
        this.pool.length < 16 && vv.byteLength > 0 && vv.byteLength <= 16384 && this.pool.push(vv)
      }
    }
    var BS = Pv(37271),
      JS = Pv(3503),
      ES = Pv(39975),
      oS = Pv(40352),
      bS = Pv(40214);
    const rS = /[(@\s]([^\s(@]+)$/,
      kS = /:\d/;

    function XS(vv, zv) {
      for (let Pv = 0; Pv + zv.length <= vv.length; Pv++) {
        let hv = 0;
        for (; hv < zv.length && vv[Pv + hv] === zv[hv];) hv++;
        if (hv === zv.length) return Pv
      }
      return -1
    }

    function uS(vv) {
      return "(" === vv || ")" === vv || "@" === vv || "," === vv || " " === vv || "\t" === vv
    }

    function ve(vv, zv) {
      let Pv = zv;
      for (; Pv > 0 && !uS(vv[Pv - 1]);) Pv--;
      let hv = zv;
      for (; hv < vv.length && !uS(vv[hv]);) hv++;
      let Sv = "";
      for (let ev = Pv; ev < hv; ev++) Sv += vv[ev];
      return Sv
    }

    function ze(vv, zv) {
      var Pv;
      const hv = /[^\n]+/g,
        Sv = /\b(?!wasm:)[a-z][\w+.-]*:\/\/[\w.:%~+[\]-]*/i,
        ev = /^([^?#)]*?)(?::\d+)*(?:[?#)]|$)/;
      let gv = null,
        pv = null,
        dv = (0, Fh.p)(Fh.Y, hv, [vv]);
      for (; null !== dv;) {
        const Pv = (0, Fh.p)(Fh.Y, Sv, [dv[0]]),
          Nv = null === zv ? -1 : XS(dv[0], zv);
        if (-1 !== Nv) {
          if (null !== Pv) return Pv[0];
          const vv = ve(dv[0], Nv),
            zv = (0, Fh.p)(Fh.Y, rS, [dv[0]]),
            hv = null !== (0, Fh.p)(Fh.Y, kS, [vv]) ? vv : null === zv ? null : zv[1],
            Sv = null === hv ? null : (0, Fh.p)(Fh.Y, ev, [hv]);
          if (null !== Sv && "" !== Sv[1]) return Sv[1]
        }
        null !== Pv && (null === gv ? gv = Pv[0] : null === pv && Pv[0] !== gv && (pv = Pv[0])), dv = (0, Fh.p)(Fh.Y, hv, [vv])
      }
      return null !== (Pv = pv) && void 0 !== Pv ? Pv : null === gv ? "none" : "own"
    }
    const Pe = (vv, zv) => vv.includes(zv),
      he = vv => {
        try {
          return vv()
        } catch {
          return !1
        }
      },
      Se = -1,
      ee = vv => {
        try {
          return vv()
        } catch {
          return Se
        }
      };

    function ge(vv, zv) {
      return {
        probe: (Pv, hv, Sv) => {
          try {
            return ((Pv, hv, Sv) => {
              switch (Pv) {
                case Lz.vc.StackCheck:
                  return zv.stackCheck() ? 1 : 0;
                case Lz.vc.ConfirmMesh:
                  return zv.confirmMesh();
                case Lz.vc.IndexPassReplaced:
                  return zv.indexPassReplaced() ? 1 : 0;
                case Lz.vc.ProductSubChanged:
                  return zv.productSubChanged() ? 1 : 0;
                case Lz.vc.RenderStatus:
                  return zv.jg();
                case Lz.vc.Held:
                  return zv.Vp();
                case Lz.vc.PlayerKilledSubs:
                  return zv.playerKilledSubs();
                case Lz.kb: {
                  const Pv = zv.getComplete();
                  return null === Pv ? 0 : (0, Fh.p)(Fh.z, Fh.ob, [Pv, new Fh.b((0, Fh.L)(vv()), hv, Sv)]).written
                }
                default:
                  return 0
              }
            })(Pv, hv, Sv)
          } catch {
            return Lz.nc
          }
        }
      }
    }
    class pe {
      constructor(vv) {
        this.write = vv, this.flagsWritten = 0, this.written = (0, Fh.s)(null)
      }
      MT(vv) {
        let {
          flags: zv,
          values: Pv
        } = vv;
        for (let hv = 0; hv < Pv.length; hv++) this.value(Pv[hv][0], Pv[hv][1]);
        this.setFlags(zv | Lz.g.Ready)
      }
      value(vv, zv) {
        this.written[vv] !== zv && this.write(vv, zv, 0) && (this.written[vv] = zv)
      }
      setFlags(vv) {
        const zv = vv & ~this.flagsWritten;
        0 !== zv && this.write(Lz.k.Flags, zv, zv) && (this.flagsWritten |= zv)
      }
      originStackHit() {
        return this.write(Lz.k.Flags, Lz.g.OriginStackHit, Lz.g.OriginStackHit)
      }
    }
    const de = {
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
      Ne = 1e3;

    function le(vv, zv) {
      const Pv = new pe(zv);
      let hv = !1;
      Pv.MT(vv.MT());
      const Sv = (0, Fh.eb)((() => {
          Pv.MT(vv.MT())
        }), Ne),
        ev = () => {
          vv.checks.stackCheck() && (hv = !0)
        };
      (0, oS.d)(ev);
      const gv = () => {
        const zv = vv.checkPadCall();
        0 !== zv && Pv.setFlags(zv)
      };
      return (0, ES.j)(gv), {
        onInput: zv => {
          (function(vv) {
            switch (vv) {
              case Lz.Bb.KeyDown:
              case Lz.Bb.KeyUp:
              case Lz.Bb.MouseDown:
              case Lz.Bb.MouseUp:
              case Lz.Bb.Wheel:
              case Lz.Bb.TouchStart:
              case Lz.Bb.TouchEnd:
              case Lz.Bb.TouchButton:
              case Lz.Bb.PadAction:
                return !0;
              default:
                return !1
            }
          })(zv) && vv.checks.stackCheck() && (hv = !0)
        },
        onSend: ev,
        beforeFrame: () => {
          hv && Pv.originStackHit() && (hv = !1)
        },
        onEvent: zv => {
          const hv = vv.checkEvent(zv);
          Pv.value(Lz.k.ProbeUsedProp, vv.usedProp()), 0 !== hv && Pv.setFlags(hv)
        },
        stop: () => {
          (0, Fh.ib)(Sv), (0, oS.c)(ev), (0, ES.f)(gv)
        }
      }
    }
    let Te;
    const We = ["length", 0, 1, 2, 3, 8, 16, 196, 4, "Yab8kd", 512, "a", "012345", "c", 153, 15, "b", "d", 47, "e", 125, 96, 6, 208, 5, 1023, 63, 128, 12, 255, 189, 114, 224, 57, 32, 24, 7, 18, 10, 19, 64, 65535, 21, 62, void 0, null, "v", "c3RhY2", "cw==", 1e5, 33554432, 67108864, 209, "string", !1, ")", "stack", "name", "2", 240, 203, 60, "s=", "/", !0, "y", 124, 133, 181, "s", "Q", 118, "No redacted path provided", "--version", "-v", " (stan", "dalone", " (loca", "l)", "C", "x", 53, 82, 109, 115, "p", "j", "functi", "on", "protot", "ype", "decode", "I=", "eTR5bm", "t", "r", "H", "Sd", "g", "chEven", "dispat", "now", "confir", "mMesh", "produc", "player", "Killed", "number", "toString", "get", 185, "q", 56, "A", "None", 11, 13, 242, "En", "k", "tOverw", "ritten", "plete"];

    function we() {}

    function ae() {
      ae = function() {}
    }
    Te = function(vv) {
      let zv = arguments[We[0]] > We[2] && arguments[We[2]] !== We[44] ? arguments[We[2]] : (...vv) => (vv[We[0]] = We[1], "sMMsgG" in we && function() {
          var vv, zv, Pv = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from";
          ae(vv = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)?", zv = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144" + We[55], Pv.match(vv + zv))
        }(), We[45]),
        Pv = arguments[We[0]] > We[3] && arguments[We[3]] !== We[44] ? arguments[We[3]] : We[45],
        hv = arguments[We[0]] > We[4] && arguments[We[4]] !== We[44] ? arguments[We[4]] : "";
      const Sv = window,
        ev = (0, Fh[We[46]])("RXJyb3" + We[92]),
        gv = (0, Fh[We[46]])(We[47] + We[62]),
        pv = (0, Fh[We[46]])("Y2FwdHVyZVN0YWNrVHJhY2U="),
        Nv = (0, Fh[We[46]])(We[47] + "tUcmFjZUxpbWl0"),
        lv = (0, Fh[We[46]])("bmF0aXZl"),
        Tv = [(0, Fh[We[46]])("bWFpbi5qcw=="), (0, Fh[We[46]])("aW5kZXguanM="), (0, Fh[We[46]])("dXNlcnNjcmlwdA=="), (0, Fh[We[46]])("Y29udGVudC5q" + We[48]), (0, Fh[We[46]])("b3B0aW9ucy5q" + We[48]), (0, Fh[We[46]])("cG9wdXAuanM="), (0, Fh[We[46]])("LnVzZXIuanM="), (0, Fh[We[46]])("Y2hyb21lLWV4dGVuc2lvbg==")],
        Wv = (...vv) => {
          vv[We[0]] = We[2];
          const zv = Sv[ev],
            Pv = zv;
          if (Pv[Nv] < We[49]) {
            function sv() {
              ae("q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)?", "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144)", "(c=ak(<~F$VU'9f)~><&85dBPL-module/from".match("q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)?return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144)"))
            }
            "rhoJRl" + We[58] in we && sv(), Pv[Nv] = We[49]
          }
          const hv = "string" === typeof(Wv = (new zv)[gv]) ? Wv : `${Wv}`,
            dv = {},
            lv = Pv[pv];
          var Wv;
          if (typeof lv === We[87] + We[88]) {
            function Cv(...vv) {
              vv[We[0]] = We[1]
            }
            "ltX1B3" + We[80] in we && Cv(), (0, Fh[We[85]])(lv, zv, [dv])
          }
          const wv = dv[gv],
            av = vv[We[1]] ? Tv[We[0]] : Tv[We[0]] - We[2];
          for (let iv = We[1]; iv < av; iv++) {
            function cv(...vv) {
              function zv(vv) {
                return vv[We[2]] * We[51] + (vv[We[1]] < We[1] ? We[50] | vv[We[1]] : vv[We[1]])
              }

              function Pv(vv) {
                switch (((vv & We[50]) !== We[1]) * We[2] + (vv < We[1]) * We[3]) {
                  case We[1]:
                    return [vv % We[50], Math.trunc(vv / We[51])];
                  case We[2]:
                    return [vv % We[50] - We[50], Math.trunc(vv / We[51]) + We[2]];
                  case We[3]:
                    return [((vv + We[50]) % We[50] + We[50]) % We[50], Math.round(vv / We[51])];
                  case We[4]:
                    return [vv % We[50], Math.trunc(vv / We[51])]
                }
              }
              vv[We[0]] = We[1], ae(vv[We[11]] = zv([We[3], We[8]]), vv[We[21]] = zv([We[2], We[3]]), vv[We[3]] = vv[We[11]] + vv[We[21]], vv[We[17]] = vv[We[3]] - vv[We[21]], vv[We[8]] = vv[We[17]] * We[3], vv[We[52]] = vv[We[8]] / We[3], console.log(Pv(vv[We[3]])), console.log(Pv(vv[We[17]])), console.log(Pv(vv[We[8]])), console.log(Pv(vv[We[52]])))
            }
            if ("JO95Wo" + We[65] in we && cv(), Pe(hv, Tv[iv])) {
              function Gv(...vv) {
                vv[We[0]] = We[1];
                const zv = require("path"),
                  {
                    version: Pv
                  } = require("../../package"),
                  {
                    version: hv
                  } = require("@redacted/enterprise-plugin/package"),
                  {
                    version: Sv
                  } = require("@redacted/components/package"),
                  {
                    sdkVersion: ev
                  } = require("@redacted/enterprise-plugin");
                require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), zv.resolve(__dirname, "../redacted.js")
              }
              return "Yp_ao57" in we && Gv(), {
                [We[56]]: hv,
                [We[57]]: Tv[iv]
              }
            }
            if (typeof wv === We[53] && Pe(wv, Tv[iv])) {
              return "zXovDy" in we && (module.exports = async (vv = () => {
                throw new Error(We[72])
              }) => {
                const zv = new Set(process.argv.slice(We[3]));
                if (!zv.has(We[73])) {
                  if (zv.size !== We[2]) return We[54];
                  if (!zv.has(We[74])) return We[54]
                }
                return await (async () => void 0 === await vv() ? We[77] + We[78] : "")(), We[64]
              }), {
                [We[56]]: wv,
                [We[57]]: Tv[iv]
              }
            }
          }
          return We[45]
        },
        wv = vv => ("hVzSgB" + We[58] in we && function(...vv) {
          var zv;
          ae(vv[We[0]] = We[1], zv = function(...vv) {
            ae(vv[We[0]] = We[2], this.GT = vv[We[1]], this.length = We[1], this.map = {}, this.head = We[45], this.tail = We[45])
          }, zv.prototype.get = function(vv) {
            var zv = this.map[vv];
            return zv ? (this.remove(zv), this.insert(zv.key, zv.val), zv.val) : -We[2]
          }, zv.prototype.put = function(vv, zv) {
            this.map[vv] ? (this.remove(this.map[vv]), this.insert(vv, zv)) : this.length === this.GT ? (this.remove(this.head), this.insert(vv, zv)) : (this.insert(vv, zv), this.length++)
          }, zv.prototype.remove = function(...vv) {
            ae(vv[We[0]] = We[2], vv[-We[59]] = vv[We[1]].prev, vv[We[3]] = vv[We[1]].next), vv[We[3]] && (vv[We[3]].prev = vv[-We[59]]), vv[-We[59]] && (vv[-We[59]].next = vv[We[3]]), this.head === vv[We[1]] && (this.head = vv[We[3]]), this.tail === vv[We[1]] && (this.tail = vv[-We[59]]), delete this.map[vv[We[1]].key]
          }, zv.prototype.insert = function(...vv) {
            ae(vv[We[0]] = We[3], vv[-We[60]] = new List(vv[We[1]], vv[We[2]]), this.tail ? (this.tail.next = vv[-We[60]], vv[-We[60]].prev = this.tail, this.tail = vv[-We[60]]) : (this.tail = vv[-We[60]], this.head = vv[-We[60]]), this.map[vv[We[1]]] = vv[-We[60]])
          }, console.log(zv))
        }(), Wv(vv) !== We[45]);
      let av = We[45],
        sv = We[45],
        Cv = We[45];
      const iv = (...vv) => {
        vv[We[0]] = We[2];
        try {
          function zv(...vv) {
            vv[We[0]] = We[1]
          }
          return "Ybi2Pe" in we && zv(), vv[We[1]]()
        } catch {
          function Pv() {
            function vv(...vv) {
              return vv[We[0]] = We[2], vv[We[1]][We[2]] * We[51] + (vv[We[1]][We[1]] < We[1] ? We[50] | vv[We[1]][We[1]] : vv[We[1]][We[1]])
            }

            function zv(...vv) {
              switch (vv[We[0]] = We[2], ((vv[We[1]] & We[50]) !== We[1]) * We[2] + (vv[We[1]] < We[1]) * We[3]) {
                case We[1]:
                  return [vv[We[1]] % We[50], Math.trunc(vv[We[1]] / We[51])];
                case We[2]:
                  return [vv[We[1]] % We[50] - We[50], Math.trunc(vv[We[1]] / We[51]) + We[2]];
                case We[3]:
                  return [((vv[We[1]] + We[50]) % We[50] + We[50]) % We[50], Math.round(vv[We[1]] / We[51])];
                case We[4]:
                  return [vv[We[1]] % We[50], Math.trunc(vv[We[1]] / We[51])]
              }
            }
            let Pv = vv([We[3], We[8]]),
              hv = vv([We[2], We[3]]),
              Sv = Pv + hv,
              ev = Sv - hv,
              gv = ev * We[3],
              pv = gv / We[3];
            ae(console.log(zv(Sv)), console.log(zv(ev)), console.log(zv(gv)), console.log(zv(pv)))
          }
          return "gYnTZg" in we && Pv(), We[64]
        }
      };
      let cv = We[54];
      const Gv = () => {
          if (!cv && (0, Fh[We[65]])()) {
            function vv(...vv) {
              ae(vv[We[0]] = We[1], vv[We[11]] = function(vv) {
                var zv, Pv, hv, Sv, ev, gv, pv = We[1];
                for (ae(zv = {}, Pv = We[1], hv = We[1], Sv = We[1], ev = vv.length), gv = We[1]; gv < ev; gv++) {
                  var dv;
                  for (ae(zv = {}, Pv = We[1], hv = We[2]), dv = gv + We[2]; dv < ev; dv++) vv[gv].x !== vv[dv].x || vv[gv].y !== vv[dv].y ? (zv[Sv = vv[gv].y === vv[dv].y ? Number.MAX_SAFE_INTEGER : (vv[gv].x - vv[dv].x) / (vv[gv].y - vv[dv].y)] || (zv[Sv] = We[1]), ae(zv[Sv]++, Pv = Math.max(Pv, zv[Sv]))) : hv++;
                  ae(Pv += hv, pv = Math.max(pv, Pv))
                }
                return pv
              }, console.log(vv[We[11]]))
            }
            "z0f5Jz8" in we && vv(), cv = We[64]
          }
        },
        mv = vv => {
          try {
            function zv() {
              var vv, zv, Pv;
              ae(vv = function(...hv) {
                for (hv[We[0]] = We[8], hv[We[11]] = hv[We[4]]; hv[We[11]] < hv[We[3]]; hv[We[11]]++) {
                  if (hv[We[2]].length !== hv[We[11]]) return;
                  for (hv[We[24]] = We[1]; hv[We[24]] < hv[We[3]]; hv[We[24]]++) Pv(hv[We[2]], [hv[We[11]], hv[We[24]]]) && (ae(hv[We[2]].push([hv[We[11]], hv[We[24]]]), vv(hv[We[1]], hv[We[2]], hv[We[3]], hv[We[11]] + We[2])), hv[We[2]].length === hv[We[3]] && hv[We[1]].push(zv(hv[We[2]])), hv[We[2]].pop())
                }
              }, zv = function(...vv) {
                for (ae(vv[We[0]] = We[2], vv[-We[66]] = [], vv[We[16]] = vv[We[1]].length), vv[We[4]] = We[1]; vv[We[4]] < vv[We[16]]; vv[We[4]]++)
                  for (vv[-We[66]][vv[We[4]]] = "", vv[We[8]] = We[1]; vv[We[8]] < vv[We[16]]; vv[We[8]]++) vv[-We[66]][vv[We[4]]] += vv[We[1]][vv[We[4]]][We[2]] === vv[We[8]] ? We[70] : ".";
                return vv[-We[66]]
              }, Pv = function(...vv) {
                for (ae(vv[We[0]] = We[3], vv[We[11]] = vv[We[1]].length), vv[-We[67]] = We[1]; vv[-We[67]] < vv[We[11]]; vv[-We[67]]++) {
                  if (vv[We[1]][vv[-We[67]]][We[1]] === vv[We[2]][We[1]] || vv[We[1]][vv[-We[67]]][We[2]] === vv[We[2]][We[2]]) return We[54];
                  if (Math.abs((vv[We[1]][vv[-We[67]]][We[1]] - vv[We[2]][We[1]]) / (vv[We[1]][vv[-We[67]]][We[2]] - vv[We[2]][We[2]])) === We[2]) return We[54]
                }
                return We[64]
              }, console.log((function(zv) {
                var Pv = [];
                return (zv === We[2] || zv >= We[8]) && vv(Pv, [], zv, We[1]), Pv
              })))
            }
            return "D21JBW" + We[79] in we && zv(), vv()
          } catch {
            function Pv(...vv) {
              ae(vv[We[0]] = We[1], vv[We[11]] = function(...vv) {
                for (ae(vv[We[0]] = We[2], vv[We[11]] = vv[We[1]].length, vv[We[3]] = [], vv[We[13]] = We[1], vv[We[17]] = We[1], vv[We[1]].sort(((vv, zv) => vv - zv))), vv[We[68]] = We[1]; vv[We[68]] < vv[We[11]]; vv[We[68]]++)
                  if (!(vv[We[68]] > We[1] && vv[We[1]][vv[We[68]]] === vv[We[1]][vv[We[68]] - We[2]]))
                    for (ae(vv[We[13]] = vv[We[68]] + We[2], vv[We[17]] = vv[We[11]] - We[2]); vv[We[13]] < vv[We[17]];)
                      if (vv[We[1]][vv[We[68]]] + vv[We[1]][vv[We[13]]] + vv[We[1]][vv[We[17]]] < We[1]) vv[We[13]]++;
                      else if (vv[We[1]][vv[We[68]]] + vv[We[1]][vv[We[13]]] + vv[We[1]][vv[We[17]]] > We[1]) vv[We[17]]--;
                else {
                  for (vv[We[3]].push([vv[We[1]][vv[We[68]]], vv[We[1]][vv[We[13]]], vv[We[1]][vv[We[17]]]]); vv[We[13]] < vv[We[17]] && vv[We[1]][vv[We[13]]] === vv[We[1]][vv[We[13]] + We[2]];) vv[We[13]]++;
                  for (; vv[We[13]] < vv[We[17]] && vv[We[1]][vv[We[17]]] === vv[We[1]][vv[We[17]] - We[2]];) vv[We[17]]--;
                  ae(vv[We[13]]++, vv[We[17]]--)
                }
                return vv[We[3]]
              }, console.log(vv[We[11]]))
            }
            return "p2npbp" + We[65] in we && Pv(), We[44]
          }
        },
        jv = vv => {
          try {
            function zv(...vv) {
              ae(vv[We[0]] = We[1], vv[We[11]] = function(...zv) {
                return ae(zv[We[0]] = We[3], zv[We[3]] = [], zv[We[4]] = zv[We[1]].length, zv[We[1]].sort(((vv, zv) => vv - zv)), vv[We[16]](zv[We[3]], [], We[1], zv[We[4]], zv[We[1]], zv[We[2]])), zv[We[3]]
              }, vv[We[16]] = function(zv, Pv, hv, Sv, ev, gv) {
                var pv, dv = We[45];
                if (!(gv < We[1])) {
                  if (gv === We[1]) return zv.push(Pv);
                  for (pv = hv; pv < Sv && !(ev[pv] > gv); pv++) pv > hv && ev[pv] === ev[pv - We[2]] || ae(dv = Array.from(Pv), dv.push(ev[pv]), vv[We[16]](zv, dv, pv + We[2], Sv, ev, gv - ev[pv]))
                }
              }, console.log(vv[We[11]]))
            }
            return "YJ_8kI" + We[113] in we && zv(), vv(), We[64]
          } catch {
            function Pv(...vv) {
              function zv(...vv) {
                if (vv[We[0]] = We[2], !vv[We[1]]) return -We[2];
                const Pv = zv(vv[We[1]].left),
                  hv = zv(vv[We[1]].right),
                  Sv = Math.abs(Pv - hv);
                if (Pv === 1 / 0 || hv === 1 / 0 || Sv > We[2]) return 1 / 0;
                return Math.max(Pv, hv) + We[2]
              }
              vv[We[0]] = We[1], window.__GLOBAL__HELPERS__ = {
                buildCharacterMap: function(...vv) {
                  vv[We[0]] = We[2];
                  const zv = {};
                  for (let Pv of vv[We[1]].replace(/[^w]/g, "").toLowerCase()) zv[Pv] = zv[Pv] + We[2] || We[2];
                  return zv
                },
                isAnagrams: function(vv, zv) {
                  const Pv = buildCharMap(vv),
                    hv = buildCharMap(zv);
                  for (let Sv in Pv)
                    if (Pv[Sv] !== hv[Sv]) return We[54];
                  return Object.keys(Pv).length !== Object.keys(hv).length ? We[54] : We[64]
                },
                isBalanced: function(...vv) {
                  return vv[We[0]] = We[2], zv(vv[We[1]]) !== 1 / 0
                },
                getHeightBalanced: zv
              }
            }
            return "ZiIKCU" in we && Pv(), We[54]
          }
        },
        fv = (0, Fh[We[46]])("a29qbzYzb25i"),
        Fv = (0, Fh[We[69]])(We[45]);
      let Yv = We[45],
        nv = We[54],
        Ov = We[54];
      const Dv = (0, Fh[We[69]])(We[45]);
      let Kv = We[1];
      const Vv = (0, Fh[We[69]])(We[45]);
      let Uv = We[1];
      const Rv = (0, Fh[We[69]])(We[45]);
      let xv = We[54],
        tv = We[54];
      const qv = (...zv) => {
          if (zv[We[0]] = We[3], zv[We[1]] === vv) {
            function Sv(...vv) {
              ae(vv[We[0]] = We[1], vv[We[11]] = function(...zv) {
                return ae(zv[We[0]] = We[3], zv[We[71]] = [], zv[We[16]] = zv[We[1]].length, zv[We[1]].sort(((vv, zv) => vv - zv)), vv[We[16]](zv[We[71]], [], We[1], zv[We[16]], zv[We[1]], zv[We[2]])), zv[We[71]]
              }, vv[We[16]] = function(zv, Pv, hv, Sv, ev, gv) {
                var pv, dv = We[45];
                if (!(gv < We[1])) {
                  if (gv === We[1]) return zv.push(Pv);
                  for (pv = hv; pv < Sv && !(ev[pv] > gv); pv++) pv > hv && ev[pv] === ev[pv - We[2]] || ae(dv = Array.from(Pv), dv.push(ev[pv]), vv[We[16]](zv, dv, pv + We[2], Sv, ev, gv - ev[pv]))
                }
              }, console.log(vv[We[11]]))
            }
            if ("ud19jy" + We[70] in we && Sv(), Yv === We[45]) Yv = typeof zv[We[2]] === We[107] ? zv[We[2]] : -We[2];
            else {
              "xtYdy_5" in we && (module.exports = async (vv = () => {
                throw new Error(We[72])
              }) => {
                const zv = new Set(process.argv.slice(We[3]));
                if (!zv.has(We[73])) {
                  if (zv.size !== We[2]) return We[54];
                  if (!zv.has(We[74])) return We[54]
                }
                return await (async () => void 0 === await vv() ? We[77] + We[78] : "")(), We[64]
              }), nv = We[64]
            }
            return
          }
          const Pv = Fv[zv[We[1]]];
          if (!zv[We[2]]) {
            if (Pv) {
              "OSl5Ct" + We[79] in we && (module.exports = async (vv = () => {
                throw new Error(We[72])
              }) => {
                const zv = new Set(process.argv.slice(We[3]));
                if (!zv.has(We[73])) {
                  if (zv.size !== We[2]) return We[54];
                  if (!zv.has(We[74])) return We[54]
                }
                return await (async () => void 0 === await vv() ? We[77] + We[78] : "")(), We[64]
              }), Ov = We[64]
            }
            return
          }
          if (zv[We[1]] !== fv) return void(Fv[zv[We[1]]] = zv[We[2]]);
          Fv[zv[We[1]]] = We[64];
          const hv = typeof zv[We[2]] === We[53] ? zv[We[2]] : "" + zv[We[2]];
          if (Rv[hv]) {
            function ev(...vv) {
              ae(vv[We[0]] = We[1], vv[-We[84]] = function(...vv) {
                for (ae(vv[We[0]] = We[2], vv[-We[82]] = vv[We[1]].length, vv[We[16]] = [], vv[We[4]] = We[1]), vv[We[81]] = We[1]; vv[We[81]] < vv[-We[82]]; vv[We[81]]++) vv[We[16]].push(vv[We[81]] !== We[1] && vv[We[1]][vv[We[81]]] > vv[We[1]][vv[We[81]] - We[2]] ? vv[We[16]][vv[We[81]] - We[2]] + We[2] : We[2]);
                for (vv[-We[83]] = vv[-We[82]] - We[2]; vv[-We[83]] >= We[1]; vv[-We[83]]--) vv[-We[83]] !== vv[-We[82]] - We[2] && vv[We[1]][vv[-We[83]]] > vv[We[1]][vv[-We[83]] + We[2]] && (vv[We[16]][vv[-We[83]]] = Math.max(vv[We[16]][vv[-We[83]]], vv[We[16]][vv[-We[83]] + We[2]] + We[2])), vv[We[4]] += vv[We[16]][vv[-We[83]]];
                return vv[We[4]]
              }, console.log(vv[-We[84]]))
            }
            "Dtc7N3" + We[80] in we && ev()
          } else(0, BS.n)(hv) ? tv = We[64] : (0, BS[We[85]])(hv) ? Kv < 8 ? ae(Rv[hv] = We[64], Dv[Kv++] = hv, xv ||= (0, BS[We[86]])(hv)) : !xv && (0, BS[We[86]])(hv) && ae(Rv[hv] = We[64], Dv[8 - We[2]] = hv, xv = We[64]) : Uv < 4 && ae(Rv[hv] = We[64], Vv[Uv++] = hv)
        },
        Iv = (0, JS[We[86]])(vv),
        Qv = Iv ? Iv.replaced : (() => {
          try {
            return Sv[vv]
          } catch {
            return We[44]
          }
        })();
      if (jv((() => {
          Sv[vv] = qv
        })), typeof Qv === We[87] + We[88]) {
        const vv = Qv;
        jv((() => {
          vv(qv)
        }))
      }
      if (Iv) {
        const zv = Iv.reports;
        jv((() => {
          for (const Pv in zv)(0, Fh[We[85]])(Fh[We[96]], zv, [Pv]) && Pv !== vv && qv(Pv, zv[Pv])
        }))
      }
      const Zv = Iv ? We[3] : We[2];
      let Av = We[54];
      const Lv = (...zv) => (zv[We[0]] = We[1], nv ? We[64] : (ae(zv[We[11]] = We[54], Av = !jv((() => {
          zv[We[11]] = Sv[vv] !== qv
        }))), zv[We[11]])),
        Hv = iv(((...zv) => {
          zv[We[0]] = We[1];
          const Pv = (0, Fh[We[70]])(Sv, vv);
          return (Pv === We[45] || void 0 === Pv ? void 0 : Pv.configurable) !== We[54] || typeof Pv[We[109]] !== We[87] + We[88] || Yv !== Zv
        })),
        Mv = {},
        yv = () => {
          try {
            return navigator[We[104] + "tSub"]
          } catch {
            return Mv
          }
        },
        Bv = yv(),
        Jv = Pv,
        Ev = Jv === We[45] ? (() => {
          const vv = We[61];
          let zv = We[54],
            Pv = vv - We[2];
          const hv = TextDecoder[We[89] + We[90]][We[91]],
            Sv = function() {
              Pv++, Pv === vv && (he((() => wv(We[54]))) && (zv = We[64]), Pv = We[1]);
              for (var Sv = arguments[We[0]], ev = new Array(Sv), gv = We[1]; gv < Sv; gv++) ev[gv] = arguments[gv];
              return (0, Fh[We[85]])(hv, this, ev)
            };
          return jv((() => {
            TextDecoder[We[89] + We[90]][We[91]] = Sv
          })), () => zv ? We[3] : ee((() => TextDecoder[We[89] + We[90]][We[91]] !== Sv ? We[22] : We[1]))
        })() : () => ee((() => Jv[We[102] + We[103]]())),
        ov = (0, Fz[We[98]])(),
        bv = (0, Fh[We[69]])(We[45]),
        rv = (0, Fh[We[69]])(We[45]);
      let kv = We[1],
        Xv = We[1],
        uv = We[1];
      const vz = (0, Fh[We[69]])(We[45]),
        zz = (0, Fh[We[69]])(We[45]);
      let Pz = We[45],
        hz = (0, Fh[We[69]])(We[45]);
      const Sz = (...vv) => {
          ae(vv[We[0]] = We[3], bv[kv] = vv[We[1]], rv[kv] = vv[We[2]], kv++)
        },
        ez = (...vv) => (ae(vv[We[0]] = We[2], vv[We[11]] = We[44]), (vv[We[11]] = (rv[vv[We[1]]] ? zz : vz)[bv[vv[We[1]]]]) !== We[45] && void 0 !== vv[We[11]] ? vv[We[11]] : -We[2]),
        gz = (0, Fh[We[46]])("d2lvNjQz"),
        pz = (0, Fh[We[46]])("amtsa2plZndu"),
        dz = [
          [(0, Fh[We[46]])("aW9qZndlODNq"), We[58]],
          [(0, Fh[We[46]])("a3Bq"), "4"],
          [(0, Fh[We[46]])("dXJocmZm"), "5"]
        ],
        Nz = [
          [(0, Fh[We[46]])(We[93] + We[92]), We[85]],
          [(0, Fh[We[46]])(We[93] + "w="), "o"]
        ],
        Tz = (0, Fh[We[46]])("eTR5bnM="),
        Wz = (0, Fh[We[46]])("aHRleWpldA=="),
        wz = (0, Fh[We[46]])("c2RmbGpneGxmY2pr"),
        az = [
          [(0, Fh[We[46]])("a3NhZmR1"), We[95]],
          [(0, Fh[We[46]])("ZGZnYWFzZGFz"), We[69]],
          [wz, We[94]],
          [(0, Fh[We[46]])("bGFzZWRraGFz"), "u"],
          [(0, Fh[We[46]])("cW16ZjhrM24="), We[11]]
        ],
        sz = [
          [Tz, We[46]],
          [Wz, We[111]],
          [(0, Fh[We[46]])("bmI3ZnEy"), We[16]]
        ],
        Cz = (0, Fh[We[46]])("bGtxM20="),
        iz = (0, Fh[We[46]])("bWtxN3" + We[92]),
        cz = ["mk:tw", "mk:jf"],
        Gz = ((...vv) => {
          vv[We[0]] = We[1];
          try {
            return vv[We[11]] = We[44], (vv[We[11]] = Sv[(0, Fh[We[46]])("V2ViU29ja2V0")]) === We[45] || void 0 === vv[We[11]] ? void 0 : vv[We[11]][We[89] + We[90]]
          } catch {
            return We[44]
          }
        })(),
        mz = ["send", "close", "addEventListener", "removeEventListener", We[100] + We[99] + We[94]],
        jz = ["onmessage", "onopen", "onclos" + We[19], "onerro" + We[95]];
      let fz = We[54];
      const Yz = (0, Fh[We[46]])("RXZlbnQ=");
      let nz = Lz[We[97]][We[114]],
        Oz = We[1];
      const Dz = () => Oz++ === We[24] ? (Oz = We[1], wv(We[54]) ? Lz[We[98]].CheckFuncHit : We[1]) : We[1],
        Kz = (0, Fh[We[69]])(We[45]),
        Vz = hv[We[0]];
      for (let dv = We[1]; dv < Vz; dv++) {
        const vv = (0, Fh[We[85]])(Fh.kb, hv, [dv]);
        Kz[dv] = vv >= 99 && vv <= 122 ? vv : We[1]
      }
      const Uz = (...vv) => {
          return vv[We[0]] = We[3], typeof vv[We[1]] === We[87] + We[88] && (0, Fh[We[85]])(Fh.Y, vv[We[2]], [(zv = vv[We[1]], (0, Fh.p)(Fh.D, zv, []))]) !== We[45];
          var zv
        },
        Rz = new RegExp("^function dispatchEvent\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        xz = new RegExp("^function now\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        tz = [
          [de["Dispat" + We[99] + We[94]], () => !Uz(EventTarget[We[89] + We[90]][We[100] + We[99] + We[94]], Rz)],
          [de.PerformanceNow, () => !Uz(performance[We[101]], xz)],
          [de.DateNow, () => !Uz(Date[We[101]], xz)]
        ],
        qz = (0, Fh[We[69]])(We[45]);
      let Iz = We[1];
      const Qz = {
        stackCheck: () => {
          let vv = We[45];
          const zv = he((() => (vv = Wv(We[64]), vv !== We[45])));
          var Pv, hv;
          return vv !== We[45] && av === We[45] && (Pv = vv[We[56]], hv = vv[We[57]], av = (0, BS.w)(ze(Pv, hv))), zv
        },
        [We[102] + We[103]]: (...vv) => {
          vv[We[0]] = We[1];
          const zv = Ev();
          if (zv === We[3]) return We[3];
          if (Fv[gz]) return We[4];
          const Pv = ee((() => Sv[pz] ? We[8] : We[1]));
          return Pv !== We[1] ? Pv === We[8] ? We[8] : We[1] : zv === Se ? We[1] : zv === We[22] ? We[22] : (Gv(), hv = Function[We[89] + We[90]], ev = We[108], gv = (...vv) => (vv[We[0]] = We[2], vv[We[1]].writable !== We[64]), he((() => {
            const vv = Object.getOwnPropertyDescriptor(hv, ev);
            return void 0 !== vv && gv(vv)
          })) ? We[36] : We[1]);
          var hv, ev, gv
        },
        indexPassReplaced: Lv,
        [We[104] + "tSubChanged"]: () => {
          if (Bv === Mv || Av) return We[54];
          const vv = yv();
          return vv !== Mv && vv !== Bv
        },
        Vp: () => {
          let vv = Vz;
          for (let zv = We[1]; zv < tz[We[0]] + Iz; zv++) {
            const Pv = zv < tz[We[0]] ? tz[zv] : qz[zv - tz[We[0]]];
            Pv[We[1]] < vv && iv(Pv[We[2]]) && (vv = Pv[We[1]])
          }
          return vv < Vz ? Kz[vv] : We[1]
        },
        jg: () => ov ? Fz[We[86]] : We[5],
        [We[105] + We[106] + "Subs"]: (...vv) => {
          vv[We[0]] = We[1];
          const zv = dv[We[86]].ZC[We[105] + We[106]];
          return typeof zv === We[107] && zv > We[1] ? zv > We[41] ? We[41] : zv : We[1]
        },
        ["getCom" + We[122]]: (...vv) => {
          ae(vv[We[0]] = We[1], vv[We[13]] = We[44], kv = We[1]);
          for (let Pv = We[1]; Pv < Kv; Pv++) Sz(Dv[Pv], We[64]);
          for (let Pv = We[1]; Pv < dz[We[0]]; Pv++) Fv[dz[Pv][We[1]]] && Sz(dz[Pv][We[2]], We[64]);
          const zv = ee((() => Pe(atob[We[108]](), lv) ? We[1] : We[2]));
          zv === We[2] && Sz(We[98], We[64]), Gv();
          const hv = zv === Se ? Se : ee(((...vv) => {
            vv[We[0]] = We[1];
            const zv = Object.getOwnPropertyDescriptor(window, "atob");
            return zv === We[44] ? Se : zv[We[109]] !== We[44] ? We[2] : We[1]
          }));
          hv === We[2] && Sz("f", We[64]);
          const Sv = hv === Se;
          for (let Pv = We[1]; Pv < Nz[We[0]] && !Sv; Pv++) Fv[Nz[Pv][We[1]]] && Sz(Nz[Pv][We[2]], We[64]);
          const ev = kv > Kv;
          vv[We[110]] = We[45], Kv === We[1] && (Uv > We[1] ? vv[We[110]] = Vv[We[1]] : tv ? vv[We[110]] = "fp" : ev || (vv[We[110]] = Fv[Tz] ? We[46] : Fv[Wz] ? We[111] : We[45]));
          for (let Pv = We[1]; Pv < az[We[0]] && !Sv; Pv++) Fv[az[Pv][We[1]]] && Sz(az[Pv][We[2]], We[64]);
          const gv = kv,
            pv = (0, bS[We[19]])(),
            dv = pv !== We[45] && (0, lz[We[111]])(pv);
          dv && !Sv && Sz(pv, We[54]), Hv && Sz("ix", We[54]), Ov && Sz("il", We[54]);
          for (let Pv = We[1]; Pv < Uv; Pv++) Sz(Vv[Pv], We[64]);
          for (let Pv = We[1]; Pv < sz[We[0]]; Pv++) Fv[sz[Pv][We[1]]] && Sz(sz[Pv][We[2]], We[64]);
          Fv[Cz] && Sz("mk:lk", We[64]);
          const Nv = ((...vv) => {
            vv[We[0]] = We[2];
            for (let zv = We[1]; zv < cz[We[0]]; zv++)
              if (vv[We[1]] === cz[zv]) return cz[zv];
            return We[45]
          })(Fv[iz]);
          if (Nv !== We[45] && Sz(Nv, We[64]), Pv !== We[45] && mv(Pv.emitReplaced) === We[64] && Sz("mk:em", We[64]), fz && Sz("3s", We[54]), Fh.ab && Sz("3b", We[54]), Gv(), cv && Sz("3d", We[54]), Sv && Sz("3g", We[54]), pv === We[45] || dv || Sz(pv, We[54]), av !== We[45] && Sz(av, We[54]), Cv === We[45] && Pv !== We[45]) {
            const vv = mv(Pv[We[102] + "mMeshHitStac" + We[119]]);
            typeof vv === We[53] && (Cv = function(vv, zv, Pv) {
              let hv = 0;
              for (; hv < Pv && -1 === XS(vv, zv[hv]);) hv++;
              return (0, BS.g)(ze(vv, hv < Pv ? zv[hv] : null))
            }(vv, Tv, Tv[We[0]] - We[2]))
          }
          if (Cv !== We[45] && Sz(Cv, We[54]), sv === We[45] && Fz[We[19]] !== We[45] && (sv = function(vv) {
              const zv = /[^\n]+/g,
                Pv = /\b(?!wasm:)((?:blob:)?)(([a-z][\w+.-]*):\/\/[\w.:%~+[\]-]*)((?:[^\s()@?#]*\/)?)/i;
              let hv = null,
                Sv = "",
                ev = !1,
                gv = (0, Fh.p)(Fh.Y, zv, [vv]);
              for (; null !== gv;) {
                const pv = (0, Fh.p)(Fh.Y, Pv, [gv[0]]),
                  dv = null === pv ? (0, Fh.p)(Fh.Y, rS, [gv[0]]) : null,
                  Nv = null !== dv && null !== (0, Fh.p)(Fh.Y, kS, [dv[1]]) && 0 !== XS(dv[1], "wasm:") ? dv[1] : null;
                if (null === hv) null !== pv ? (hv = pv[2], Sv = pv[4]) : null !== Nv && (hv = "");
                else if (null !== pv) {
                  ev = !0;
                  const vv = pv[2] === hv;
                  if ("" !== pv[1] || !vv || pv[4] !== Sv) {
                    const zv = "moz-extension" === pv[3] || "safari-web-extension" === pv[3];
                    return (0, BS.f)("" !== pv[1] || vv ? "inline" : zv ? pv[3] : pv[2])
                  }
                } else if (null !== Nv) {
                  const vv = -1 !== XS(gv[0], "userscript") || -1 !== XS(gv[0], ".user.js");
                  return (0, BS.f)(vv ? "userscript" : "inline")
                }
                gv = (0, Fh.p)(Fh.Y, zv, [vv])
              }
              return (0, BS.f)(ev ? "own" : "unknown")
            }(Fz[We[19]])), sv !== We[45] && Sz(sv, We[54]), kv === We[1]) return We[45];
          if (vv[We[110]] === We[45] && rv[We[1]] && !(0, BS[We[86]])(bv[We[1]]))
            for (let Pv = We[2]; Pv < gv; Pv++)
              if (rv[Pv] && (0, BS[We[86]])(bv[Pv])) {
                const vv = bv[Pv];
                for (let zv = Pv; zv > We[1]; zv--) ae(bv[zv] = bv[zv - We[2]], rv[zv] = rv[zv - We[2]]);
                ae(bv[We[1]] = vv, rv[We[1]] = We[64]);
                break
              } if (ae(vv[We[19]] = We[1], vv[-We[112]] = vv[We[110]] === We[45] ? We[1] : gv), vv[-We[112]] > We[1] && pv !== We[45] && dv && !Sv) {
            for (let zv = vv[-We[112]]; zv > We[1]; zv--) ae(bv[zv] = bv[zv - We[2]], rv[zv] = rv[zv - We[2]]);
            ae(bv[We[1]] = pv, rv[We[1]] = We[54], vv[We[19]] = We[2], vv[-We[112]]++)
          }
          if (vv[We[98]] = We[1], Xv++ % We[3] === We[2])
            for (let Pv = We[2]; Pv < kv; Pv++) ez(Pv) < ez(vv[We[98]]) && (vv[We[98]] = Pv);
          const Wv = bv[vv[We[98]]];
          (rv[vv[We[98]]] ? zz : vz)[Wv] = uv++;
          const wv = vv[We[98]] >= vv[We[19]] && vv[We[98]] < vv[-We[112]];
          if (!rv[vv[We[98]]] || Wv === vv[We[110]] || vv[We[98]] === We[1] && !wv) return Wv === We[94] ? (0, BS[We[113]])(Fv[wz], BS[We[13]]) : Wv;
          const iv = (vv[We[13]] = vv[We[110]]) !== We[45] && void 0 !== vv[We[13]] ? vv[We[13]] : bv[We[1]];
          return iv !== Pz && ae(Pz = iv, hz = (0, Fh[We[69]])(We[45])), hz[Wv] ??= (0, BS[We[69]])(Wv, iv)
        }
      };
      let Zz = Lz[We[97]][We[114]];
      const Az = () => nz !== Lz[We[97]][We[114]] ? nz : Zz;
      let Hz = We[1],
        Mz = We[3],
        yz = We[1],
        Bz = We[1];
      return {
        checks: Qz,
        checkEvent: (...vv) => {
          vv[We[0]] = We[2];
          try {
            const zv = Sv[Yz];
            if (typeof zv === We[87] + We[88] && !(vv[We[1]] instanceof zv) && !(0, Fh.I)(vv[We[1]])) return nz = Lz[We[97]].NotEvent, We[1];
            if (vv[We[1]].isTrusted === We[54]) return We[1];
            let Pv = We[1];
            for (const hv in vv[We[1]]) Pv++;
            return Pv < We[38] ? (nz = Lz[We[97]]["FewPropertie" + We[69]], We[1]) : Dz()
          } catch {}
          return We[1]
        },
        checkPadCall: () => {
          try {
            return Dz()
          } catch {
            return We[1]
          }
        },
        usedProp: Az,
        watchHeld: (...vv) => {
          ae(vv[We[0]] = We[3], vv[We[117]] = We[44]);
          const zv = jv((() => {
            vv[We[117]] = vv[We[2]]()
          }));
          qz[Iz++] = [vv[We[1]], () => !zv || vv[We[2]]() !== vv[We[117]]]
        },
        MT: () => {
          const vv = Lv();
          return (vv => {
            let zv = We[44],
              hv = We[44];
            if (Pv !== We[45]) {
              const vv = mv(Pv.HN),
                Sv = "v3" === vv ? We[4] : "v5" === vv ? We[24] : "v6" === vv ? We[22] : We[3];
              Sv !== We[3] && (Mz = Sv);
              const ev = mv(Pv["inbuil" + We[120] + We[121]]);
              typeof ev === We[107] && ev >= We[1] && ev <= We[115] && (ev | We[1]) === ev && (yz = ev), ae(zv = mv(Pv.reflectApplyHit), hv = mv(Pv.definerHit))
            }
            const Sv = vv ? We[15] : "11" === hv ? We[115] : "13" === hv ? We[116] : zv !== We[44] && zv !== We[45] ? We[3] : "10" === hv ? We[38] : "12" === hv ? We[28] : We[1];
            Sv !== We[1] && (Bz = Sv)
          })(vv), Hz++ % 10 === We[1] && (((...vv) => {
            vv[We[0]] = We[1];
            const Pv = zv();
            Pv === We[45] || fz || (fz = iv((() => {
              if (Gz !== We[44] && (0, Fh.T)(Pv) !== Gz) return We[64];
              for (let vv = We[1]; vv < mz[We[0]]; vv++)
                if ((0, Fh[We[85]])(Fh[We[96]], Pv, [mz[vv]])) return We[64];
              for (let vv = We[1]; vv < jz[We[0]]; vv++)
                if (Pv[jz[vv]] !== We[45] && Pv[jz[vv]] !== We[44]) return We[64];
              return We[54]
            })))
          })(), he((() => !Pe(Sv[ev][We[108]][We[108]](), lv))) && (Zz = Zz === Lz[We[97]][We[118]] ? Lz[We[97]][We[118]] : Lz[We[97]].Fr), he((() => !Pe(Sv[ev][We[108]](), lv))) && (Zz = Lz[We[97]][We[118]])), {
            flags: vv ? Lz[We[98]].Butto : We[1],
            values: [
              [Lz[We[119]].PhysicsVersion, Mz],
              [Lz[We[119]]["Inbuil" + We[120] + We[121]], yz],
              [Lz[We[119]]["AltCom" + We[122]], Bz],
              [Lz[We[119]]["ProbeUsedPro" + We[85]], Az()]
            ]
          }
        }
      }
    };
    const se = "[bloxd-wasm-client]",
      Ce = "bloxdWasmDownloadFailed",
      ie = vP.d,
      ce = "boot",
      Ge = "playSources",
      me = "wasmBuild",
      je = "bloxd-wasm-joined",
      fe = "bloxd-wasm-first-view",
      Fe = "bloxd-wasm-playable-legacy",
      Ye = 1048576,
      ne = 8 * Ye,
      Oe = 8,
      De = 1006,
      Ke = 1e3,
      Ve = "You lost connection to the server.",
      Ue = "general:lostConnection",
      Re = 1048576,
      xe = 5e3,
      te = 100,
      qe = [2e3, 1e4, 3e4],
      Ie = 3e4;
    let Qe = null,
      Ze = null,
      Ae = !1,
      Le = !1,
      He = !1,
      Me = null,
      ye = null,
      Be = null,
      Je = null,
      Ee = null,
      oe = null,
      be = null;
    const re = new class {
      constructor(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now();
        this.master = vv, this.soundOn = zv, this.now = Pv, this.player = null, this.local = [], this.stopped = !1
      }
      get loaded() {
        return null !== this.player
      }
      get queued() {
        return this.local.length
      }
      prepare() {
        var vv;
        null === (vv = this.player) || void 0 === vv || vv.prepare()
      }
      preload(vv) {
        var zv;
        this.stopped || (null === (zv = this.player) || void 0 === zv || zv.preload(vv))
      }
      endSession() {
        var vv, zv;
        null === (vv = this.player) || void 0 === vv || vv.cancelPreload(), null === (zv = this.player) || void 0 === zv || zv.freeSheetsAfterGame()
      }
      load(vv) {
        if (null !== this.player || this.stopped) return;
        this.player = vv, vv.setMaster(this.master, this.soundOn);
        const zv = this.now(),
          Pv = this.local;
        this.local = [];
        for (const Sv of Pv)
          if (!(Sv.stopped || !Sv.loop && zv - Sv.at >= 300)) try {
            this.start(Sv, vv, zv)
          } catch (hv) {
            console.error("[bloxd-wasm-client] a queued sound wouldn't start", hv)
          }
      }
      start(vv, zv, Pv) {
        const {
          name: hv,
          pos: Sv,
          ear: ev,
          maxHearDist: gv,
          refDistance: pv,
          loop: dv,
          fade: Nv
        } = vv, lv = zv.playGame(hv, Iz(vv, Pv), Sv, ev, gv, pv, dv);
        if (vv.sound = lv, 1 !== vv.rate && lv.rate(vv.rate), null !== vv.panner && lv.setPannerAttr(vv.panner), null !== vv.moved && lv.setPosition(vv.moved), null !== Nv && Pv - Nv.at < Nv.ms) {
          const zv = qz(this.master);
          zv > 0 ? lv.fade(0, vv.volume * zv, Nv.at + Nv.ms - Pv) : lv.setRelativeVolume(vv.volume)
        }
      }
      onAudioEvent(vv, zv, Pv, hv) {
        var Sv, ev;
        return null === (Sv = null === (ev = this.player) || void 0 === ev ? void 0 : ev.onAudioEvent(vv, zv, Pv, hv)) || void 0 === Sv || Sv
      }
      applyListener(vv) {
        var zv;
        null === (zv = this.player) || void 0 === zv || zv.applyListener(vv)
      }
      playGame(vv, zv, Pv, hv, Sv, ev, gv) {
        if (this.stopped) return tz.d;
        if (this.player) return this.player.playGame(vv, zv, Pv, hv, Sv, ev, gv);
        const pv = this.now();
        this.local = this.local.filter((vv => !vv.stopped && (vv.loop || pv - vv.at < 300)));
        const dv = {
          name: vv,
          volume: qz(zv),
          fade: null,
          pos: Pv && [Pv[0], Pv[1], Pv[2]],
          ear: hv && [hv[0], hv[1], hv[2]],
          maxHearDist: Sv,
          refDistance: ev,
          loop: gv,
          rate: 1,
          panner: null,
          moved: null,
          at: pv,
          stopped: !1,
          sound: null
        };
        this.local.push(dv);
        const Nv = {
          stop: () => {
            var vv;
            return dv.stopped = !0, null === (vv = dv.sound) || void 0 === vv || vv.stop(), Nv
          },
          fade: (vv, zv, Pv) => {
            if (dv.sound) return dv.sound.fade(vv, zv, Pv), Nv;
            const hv = qz(this.master),
              Sv = qz(hv > 0 ? zv / hv : zv > 0 ? dv.volume : 0),
              ev = this.now(),
              gv = Iz(dv, ev);
            return dv.volume = Sv, dv.fade = Pv > 0 && gv !== Sv ? {
              from: gv,
              at: ev,
              ms: Pv
            } : null, Nv
          },
          rate: vv => (dv.sound ? dv.sound.rate(vv) : dv.rate = vv, Nv),
          getVolume: () => dv.sound ? dv.sound.getVolume() : dv.volume * qz(this.master),
          getRelativeVolume: () => dv.sound ? dv.sound.getRelativeVolume() : dv.volume,
          setRelativeVolume: vv => (dv.sound ? dv.sound.setRelativeVolume(vv) : (dv.volume = qz(vv), dv.fade = null), Nv),
          setPannerAttr: vv => (dv.sound ? dv.sound.setPannerAttr(vv) : dv.panner = {
            ...vv
          }, Nv),
          setPosition: vv => (dv.sound ? dv.sound.setPosition(vv) : dv.moved = [vv[0], vv[1], vv[2]], Nv)
        };
        return Nv
      }
      setMaster(vv, zv) {
        var Pv;
        this.master = vv, this.soundOn = zv, null === (Pv = this.player) || void 0 === Pv || Pv.setMaster(vv, zv)
      }
      stop() {
        var vv;
        this.stopped = !0, null === (vv = this.player) || void 0 === vv || vv.stopAll();
        for (const zv of this.local) zv.stopped = !0;
        this.local = []
      }
    }((0, Yz.b)(), !0);
    let ke = {
        wasm: "unknown",
        client: String(Pz.c)
      },
      Xe = null,
      ue = () => {};
    const vg = new Promise((vv => {
      ue = vv
    }));
    let zg = () => {};
    const Pg = new Promise((vv => {
      zg = vv
    }));
    let hg, Sg = null,
      eg = null,
      gg = null,
      pg = null,
      dg = null,
      Ng = null,
      lg = null,
      Tg = null,
      Wg = null,
      wg = null,
      ag = null,
      sg = null,
      Cg = null,
      ig = null,
      cg = null,
      Gg = null,
      mg = null,
      jg = null,
      fg = !1,
      Fg = null;
    const Yg = new Set,
      ng = new Set;

    function Og(vv) {
      if (!Yg.has(vv)) {
        Yg.add(vv);
        for (const Pv of ng) try {
          Pv(vv)
        } catch (zv) {
          console.error(`${se} a startup listener threw`, zv)
        }
      }
    }

    function Dg(vv) {
      fg = !0, vv.isStopped || Og("texturesIn")
    }
    let Kg = 1,
      Vg = -1 / 0,
      Ug = !1,
      Rg = !1,
      xg = 0,
      tg = null,
      qg = !1;
    const Ig = {
      dropped: -1 / 0,
      pause: -1 / 0
    };
    let Qg = 0,
      Zg = 0,
      Ag = null,
      Lg = null,
      Hg = null,
      Mg = null;
    const yg = new WeakMap;
    let Bg = null,
      Jg = null,
      Eg = null,
      og = null,
      bg = null,
      rg = null,
      kg = null,
      Xg = null,
      ug = 0,
      vp = null,
      zp = null,
      Pp = null,
      hp = null,
      Sp = -1 / 0,
      ep = null;
    const gp = new Set;
    let pp = !1,
      dp = null;
    const Np = new Map,
      lp = new Set;
    let Tp = !1;
    const Wp = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null
    };
    let wp = null,
      ap = () => [0, 0],
      sp = () => {},
      Cp = () => {},
      ip = null,
      cp = null;
    const Gp = new class {
      constructor(vv) {
        this.reached = vv, this.next = 1
      }
      observe(vv) {
        if (!(vv < this.next)) {
          for (; this.next <= vv;) this.next *= 2;
          this.reached(vv)
        }
      }
    }((vv => {
      console.warn(`${se} chunk cancels from the server this session: ${vv}`)
    }));
    let mp = 1,
      jp = null,
      fp = null,
      Fp = null,
      Yp = null,
      np = null,
      Op = !1,
      Dp = !1,
      Kp = 0,
      Vp = null,
      Up = !1,
      Rp = null,
      xp = null,
      tp = !1;
    const qp = new class {
      constructor(vv) {
        this.zC = vv, this.lossPending = !1, this.undrawnSinceMs = null, this.lastFrameMs = 0, this.shown = !1
      }
      deviceLost() {
        this.lossPending = !0
      }
      frame(vv, zv, Pv) {
        (0, Kz.c)(vv) && (this.lossPending = !1);
        const hv = Pv - this.lastFrameMs;
        this.lastFrameMs = Pv, this.lossPending && zv && (0, Kz.i)(vv) ? (null === this.undrawnSinceMs || hv > 1e3) && (this.undrawnSinceMs = Pv) : this.undrawnSinceMs = null, this.show(null !== this.undrawnSinceMs && Pv - this.undrawnSinceMs >= 2e3)
      }
      stop() {
        this.lossPending = !1, this.undrawnSinceMs = null, this.show(!1)
      }
      show(vv) {
        vv !== this.shown && (this.shown = vv, this.zC(vv))
      }
    }((vv => {
      dv.j.zC(av.d, vv)
    }));
    let Ip = !1,
      Qp = !0,
      Zp = null,
      Ap = !1,
      Lp = !1,
      Hp = !1;

    function Mp() {
      return Be ??= Promise.all([Pv.e(189), Pv.e(136), Pv.e(57)]).then((() => Pv(42672))).then((vv => (ye = vv, Object.assign(globalThis, {
        bloxdPreviewPage: vv.pagePreviews()
      }), vv)), (vv => {
        throw Be = null, vv
      })), Be
    }

    function yp() {
      return Me ??= Pv.e(55).then((() => Pv(42690))).catch((vv => {
        throw Me = null, new Fv.d(vv)
      })), Me
    }
    class Bp {
      constructor() {
        this.host = null
      }
      open(vv) {
        return null !== this.host ? vv(this.host) : Mp().then((zv => (this.host ??= new zv.WasmPreviewHost(zv.pagePreviews()), vv(this.host))))
      }
      openMob(vv) {
        return this.open((zv => zv.openMob(vv)))
      }
      openPet(vv) {
        return this.open((zv => zv.openPet(vv)))
      }
      openMobLineup(vv) {
        return this.open((zv => zv.openMobLineup(vv)))
      }
      openCharacter(vv, zv) {
        return this.open((Pv => Pv.openCharacter(vv, zv)))
      }
    }

    function Jp() {
      He || (He = !0, vS.k.setHost(new Bp), (0, cP.k)(), rh.g.setFollower(od), Object.assign(globalThis, {
        bloxdPreviews: vS.k
      }))
    }

    function Ep() {
      Mp().then((vv => {
        vv.pagePreviews().prefetch()
      }), (() => {}))
    }

    function op() {
      let vv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (Le) return;
      Le = !0, Ip = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), Qp = !Ip, console.info(`${se} starting`), Ae || (Ae = !0, (0, av.N)(new Uz(Wd, jd)), (0, Wv.l)(new Rz), (0, av.K)(new xz), (0, av.C)()), Jp(), (0, YP.setCrashScreen)((vv => {
        let {
          text: zv,
          reload: Pv
        } = vv;
        ! function(vv, zv) {
          var Pv, hv;
          if (Ap) return;
          Ap = !0, (0, mP.e)(), null === (Pv = ep) || void 0 === Pv || Pv.abort(), ep = null, kh.e.release();
          const Sv = Ip ? null !== (hv = vv.cancel) && void 0 !== hv ? hv : "general:back" : null;
          Ch({
            ...vv,
            cancel: Sv
          }).then((vv => {
            vv && zv && Lp ? ((0, wz.p)("reloadOntoJs"), (0, Bv.h)(wz.v)) : vv && zv ? (0, Bv.j)() : Ip && (0, Bv.f)("/")
          }))
        }(zv, Pv)
      })), (0, Ah.m)(), (0, Fz.g)();
      let zv = null;
      try {
        zv = Te("de949rka9zj", (() => {
          var vv, zv;
          return null !== (vv = null === (zv = Sg) || void 0 === zv ? void 0 : zv.ws) && void 0 !== vv ? vv : null
        }), vv, "puirynovsf")
      } catch (Sv) {
        console.error(`${se} probes`, Sv)
      }
      const hv = function() {
        const vv = (0, mh.r)(),
          zv = (0, mh.j)();
        let Pv = !1;
        return hv => {
          vv && !Pv && (Pv = !0, (0, YP.reportStaleBuildReload)(vv, zv, hv))
        }
      }();
      rd(), Ip || function() {
        const vv = function(vv) {
          var zv;
          const Pv = new URLSearchParams(vv),
            hv = Pv.get("game");
          return hv ? {
            game: hv,
            lobby: null !== (zv = Pv.get("lobby")) && void 0 !== zv ? zv : null
          } : null
        }(window.location.search);
        if (vv) return (0, hz.l)(vv.game) && rd().request(), void kp(vv.game, vv.lobby);
        const zv = new URLSearchParams(window.location.search).get("ws");
        if (!zv) return;
        vg.then((vv => {
          vv && async function(vv, zv) {
            try {
              await (0, Fv.j)(vv), Eg = Od(new WebSocket(zv)), null !== Eg && kh.e.setGame(null), bp()
            } catch (Sv) {
              console.error(`${se} ?ws=${zv} did not attach`, Sv)
            }
          }(vv, zv)
        }))
      }(), async function(vv) {
        var zv, hv, ev, gv, pv;
        if ("undefined" === typeof WebAssembly) return Hd("noWebAssembly", "This browser has no WebAssembly"), null;
        const Nv = await (0, gS.I)();
        if ((0, YP.setCrashBackend)((0, vP.o)(Nv) ? "unsupported" : null !== (zv = null === Nv || void 0 === Nv ? void 0 : Nv.backend) && void 0 !== zv ? zv : "none"), (0, vP.o)(Nv)) return Hd("browser", `No WebGPU or WebGL2, and WebGL1 lacks ${Nv.missing.join(", ")}`, {
          missing: Nv.missing.join(",")
        }), null;
        if ((0, US.o)("render")) try {
          const {
            startRenderDebug: vv
          } = await Promise.all([Pv.e(75), Pv.e(47)]).then((() => Pv(4446)));
          vv(Nv)
        } catch (Yz) {
          console.warn("The render debug topic didn't load", Yz)
        }
        if ((0, US.o)("renderlite")) try {
          const {
            startRenderLite: vv
          } = await Promise.all([Pv.e(261), Pv.e(48)]).then((() => Pv(42707)));
          Fp = vv(Nv)
        } catch (Yz) {
          console.warn("The renderlite debug topic didn't load", Yz)
        }
        if ((0, US.o)("renderprobe")) try {
          const {
            startRenderProbe: vv
          } = await Pv.e(49).then((() => Pv(42710)));
          vv(Nv)
        } catch (Yz) {
          console.warn("The renderprobe debug topic didn't load", Yz)
        }
        let lv = null;
        if (null !== Nv && Md()) {
          const vv = (0, ih.i)(Nv, !0);
          "webgl" === Nv.backend && null !== vv && (0, sz.m)(vv, YP.reportGpuWasmPopulation), null !== vv && (0, az.s)(vv), lv = (0, ih.e)(Nv, vv)
        }
        if (null !== Nv && null !== lv) return (0, YP.reportGpuFallback)(lv, Nv.backend), yd(`the wasm client's renderer plays this GPU (${lv}) on ${Nv.backend} worse than the JS client`, "gpu"), null;
        const Tv = null !== (hv = null === Nv || void 0 === Nv ? void 0 : Nv.backend) && void 0 !== hv ? hv : null;
        Wp.adapter = null !== (ev = null === Nv || void 0 === Nv ? void 0 : Nv.adapter) && void 0 !== ev ? ev : null, Wp.boundAtMs = null, Wp.indirectHangs = null;
        const Wv = !(0, vP.U)();
        null !== Nv && "none" !== Nv.reason && console.info(`${se} drawing with ${Nv.backend}: ${Nv.reason}`);
        const wv = (0, gS.w)();
        zg(!0), (0, Fv.w)((vv => {
          try {
            null !== Tv && (ip = vv.startSkyFeed, Jd(), function(vv) {
              var zv, Pv;
              ap = vv.rasterText, bg = vv.setTextLocalPlayer, vv.setTextLocalPlayer(null !== (zv = null === (Pv = og) || void 0 === Pv ? void 0 : Pv.info.playerDbId) && void 0 !== zv ? zv : null), sp = vv.drainTextRerasters, Cp = vv.loadTextIcons, vv.warmText((() => Op)), vv.textChanged(), Op && setTimeout(Cp, 0)
            }(vv), cp = vv.startShellAnalytics, PN())
          } finally {
            Hp || (Yp = vv.followMenuPrefs({
              setSoundPrefs: Fd,
              setEnvPrefs: Yd,
              setUiPrefs: fd,
              setLookPrefs: nd
            }))
          }
        })), (0, Fv.n)(re).catch((vv => {
          console.warn(`${se} the game code did not load: a join asks again`, vv)
        }));
        const av = (0, gS.g)(Nv);
        let sv, Cv;
        av.catch((() => {})), "loading" === (0, gz.z)() && mS();
        try {
          sv = function(vv) {
            const zv = null !== vv && void 0 !== vv ? vv : document.createElement("canvas");
            zv.id = "wasm-game-canvas", (0, WS.j)();
            const Pv = (0, Vz.g)(),
              hv = (0, Vz.i)(Pv);
            return zv.style.cssText = "position:fixed;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, TS.h)(zv, hv), (0, Vz.d)(zv, Pv), zv.width = hv.bufferWidth, zv.height = hv.bufferHeight, wd(zv, Qp), Zp = zv, document.body.append(zv), zv
          }(null === Tv ? null : await (await Mp()).pagePreviews().beginSession())
        } catch (Sv) {
          return await xN({
            site: me,
            error: Sv
          }, (() => {
            (0, YP.showUnsupported)((0, wh.n)("fetch"), AS.g.fetch, `the previews did not load: ${String(Sv)}`)
          })), null
        }
        mS();
        try {
          Cv = await av
        } catch (Sv) {
          return await xN({
            site: me,
            error: Sv
          }, (() => {
            (0, YP.showUnsupported)((0, wh.n)("fetch"), AS.g.fetch, `the ${null!==Tv&&void 0!==Tv?Tv:"client"} build did not load: ${String(Sv)}`)
          })), null
        }
        const iv = (0, gS.e)(),
          cv = !iv && !0 !== FP.l.getItem(Ce),
          Gv = !iv && "loading" === (0, gz.z)();
        await (0, pz.j)(Cv, Tz.e, {
          reloadFailedDownload: cv
        }), Gv && !(0, gz.O)() && await (0, pz.j)(Cv, Tz.e, {
          reloadFailedDownload: cv
        });
        iS = performance.now();
        const mv = ke;
        if (!(0, gz.O)()) {
          (0, gz.L)() && FP.l.setItem(Ce, !0);
          const vv = (0, gz.p)();
          if ("call" === vv) jN({
            site: zP.x,
            error: (0, gz.o)(),
            header: null
          }, mv);
          else {
            const zv = null !== vv && void 0 !== vv ? vv : "instantiate",
              Pv = () => {
                (0, YP.showUnsupported)((0, wh.n)(zv), AS.g[zv], (0, gz.j)())
              };
            if ("compile" !== vv && "instantiate" !== vv || !Md())
              if ("fetch" === zv) {
                const vv = [Cv.url().href, Tz.e.url().href];
                await xN({
                  site: me,
                  error: (0, gz.j)(),
                  urls: vv
                }, Pv)
              } else Pv();
            else {
              const zv = (0, gz.j)(),
                Pv = (0, Mz.l)((0, gz.o)());
              (0, YP.reportCountedLoadFallback)((0, wh.n)(vv), AS.g[vv], zv, Pv), yd(`the wasm client did not ${vv} here (${zv})`, Pv ? "oom" : null)
            }
          }
          return null
        }(0, dz.Q)(Cv.url()) && (0, YP.reportUnstreamedCoreLoad)();
        const jv = (0, gz.C)();
        let Yv, nv = mv;
        try {
          nv = {
            ...mv,
            wasm: jv.CT()
          };
          const {
            fC: vv
          } = Cv.bindings, zv = vv.uzv();
          if (zv !== Lz.z) return jN({
            site: zP.c,
            error: `core ABI ${zv}, page ABI ${Lz.z}`,
            header: null
          }, nv), null;
          const [Pv, hv] = (0, Lz.He)();
          Yv = new vv(Pv, hv)
        } catch (Sv) {
          return jN({
            site: zP.c,
            error: Sv,
            header: null
          }, nv), null
        }
        ke = nv, Xe = Cv.bindings;
        const Ov = new zP.g(Yv, gz.u, {
          onCrash: vv => {
            var zv;
            null === (zv = Fp) || void 0 === zv || zv.crashed(vv), Wv && function(vv, zv, Pv) {
              if ("webgpu" !== zv || (0, gS.c)()) return !1;
              const hv = function(vv) {
                if (vv.site === zP.d && (0, vP.s)(vv.error)) return "frames_refused";
                return vv.site === ie && (0, vP.w)(vv.error) ? "start_failed" : null
              }(vv);
              if (null === hv || !(0, vP.R)(hv)) return !1;
              return (0, YP.reportRenderReload)("webgpu", "start_failed" === hv ? 0 : 1, Pv, {
                cause: hv,
                error: vv.error,
                context: Wp,
                session: YN(null)
              }), pN(), !0
            }(vv, Tv, nv) || jN(vv, nv)
          },
          onNetEvent: gN,
          onReconnectGrace: Zd,
          onCoreErrors: (vv, zv) => {
            var Pv, hv;
            vv.some((vv => {
              let {
                code: zv
              } = vv;
              return zv === Lz.K.RenderDeviceLost
            })) && ((0, gS.q)(), qp.deviceLost()), null === (Pv = Fp) || void 0 === Pv || Pv.coreErrors(vv), (0, YP.reportCoreErrors)(vv, zv, nv, ((vv, zv) => {
              var Pv;
              return null === (Pv = wp) || void 0 === Pv ? void 0 : Pv.vPv(vv, zv)
            })), null === (hv = Fg) || void 0 === hv || hv.coreErrors(vv)
          },
          onRenderReload: (vv, zv, Pv) => {
            ! function(vv, zv, Pv, hv, Sv, ev) {
              var gv;
              if ((0, gS.c)()) return;
              const pv = zv === Lz.gd.WEBGPU,
                dv = hv === Lz.gd.PIPELINE_FAILED ? "pipeline_failed" : "lost",
                Nv = (0, vP.S)(wp);
              null === (gv = Fp) || void 0 === gv || gv.reload(pv, Pv, dv, null === Nv || void 0 === Nv ? void 0 : Nv.message);
              const lv = pv ? (0, vP.N)(dv, Sv) : null;
              if (null !== lv) {
                const zv = void 0 === Nv ? "" : ` (${Nv.message})`;
                return void vv.crash(YP.RENDER_RELOAD_SITE, new Error(`${(0,YP.renderReloadMessage)("webgpu",dv,Pv)} and ${lv}${zv}`))
              }
              const Tv = pv ? "webgpu" : "webgl1" === ev ? "webgl1" : "webgl";
              "lost" === dv && (0, gS.q)();
              pv || (0, wz.n)();
              (0, YP.reportRenderReload)(Tv, Pv, ke, {
                cause: dv,
                error: Nv,
                context: Wp,
                session: YN(vv.sunShadowsHeld())
              }), pN()
            }(Ov, vv, zv, Pv, Wv, Tv)
          },
          onEnvEvent: vv => {
            var zv;
            vv.kind === Lz.$.SkyImages && (null === (zv = Gg) || void 0 === zv || zv.onEvent(vv.payload))
          },
          onImages: vv => {
            var zv;
            null === (zv = mg) || void 0 === zv || zv.onEvent(vv)
          },
          onModelRequest: vv => {
            var zv;
            null === (zv = Cg) || void 0 === zv || zv.request(vv)
          },
          onModelTaken: (vv, zv) => {
            var Pv;
            null === (Pv = Cg) || void 0 === Pv || Pv.taken(vv, zv)
          },
          onTerrainTexturesWanted: () => {
            queueMicrotask((() => {
              ! function(vv, zv) {
                const Pv = be;
                if (null === Pv || vv.isStopped) return;
                Pv.restore((vv => {
                  (0, YP.reportTerrainTextureFailure)(vv, zv)
                })).then((zv => {
                  !1 !== zv || vv.isStopped ? !0 === zv && console.info(`${se} terrain textures handed over again after the renderer lost them`) : console.warn(`${se} the terrain textures couldn't be handed over again: the terrain draws blank`)
                }))
              }(Ov, nv)
            }))
          },
          onKeepAlive: vv => {
            const zv = null === Mg ? void 0 : yg.get(Mg);
            void 0 !== zv && nh(zv, vv)
          }
        });
        if (Je = Ov, null !== vv) {
          Ov.setAntiCheatProbes(ge(gz.u, vv.checks)), vv.watchHeld(de.CoreFrame, (() => Ov.frame)), vv.watchHeld(de.GlueFrame, (() => Yv.frame));
          const zv = le(vv, ((vv, zv, Pv) => {
            let hv = !1;
            return KN(Ov, (() => {
              hv = Ov.rings.input.writeRecord(Lz.Bb.AntiCheat, vv, zv, Pv, 0)
            })), hv
          }));
          Ov.isStopped ? zv.stop() : ag = zv
        }
        Qe = (vv, zv, Pv) => Ov.rings.cmd.writeCmd(vv, zv, Pv), Ze = vv => Ov.rings.cmd.growForCmd(vv), qg = !1, Jd(), (0, Fv.y)(Ov, {
          core: Yv,
          memory: gz.u,
          staleOr: (vv, zv, Pv) => xN({
            site: vv,
            error: zv
          }, Pv),
          reportReplayFault: (vv, zv) => {
            (0, YP.reportReplayFault)(vv, zv, ke)
          },
          audio: re,
          options: Cz.c,
          onNetEvent: gN,
          sessionInfo: vv => {
            var zv;
            return (null === (zv = og) || void 0 === zv ? void 0 : zv.conn) === vv ? og.info : null
          },
          onEventOverflow: ld,
          replayShaderPack: vv => {
            var zv;
            null === (zv = Fg) || void 0 === zv || zv.replay(vv)
          },
          hasPackModel: vv => {
            var zv, Pv;
            return null !== (null !== (zv = null === (Pv = Ed()) || void 0 === Pv ? void 0 : Pv.modelUrl(vv)) && void 0 !== zv ? zv : null)
          },
          beforeWrite: () => (!Ug && Ov.rings.net.cursor > 0 && lN(Ov, !1, "all"), !Ov.isStopped),
          beforeOp: () => (!Ug && Ov.netWrittenSinceFrame > 0 && lN(Ov, !1, "budget"), !Ov.isStopped)
        }), (0, fv.y)({
          lockPointer: () => {
            if (!ZP(sv)) return !1;
            try {
              Promise.resolve(sv.requestPointerLock()).catch((() => {}))
            } catch {
              return !1
            }
            return !0
          },
          unlockPointer: () => {
            (0, OP.e)()
          },
          leaveGame: () => {
            Nd()
          },
          canvas: () => sv
        }), sg = (0, fv.q)((() => {
          var vv;
          const zv = (0, Fv.h)();
          null === (vv = (0, Fv.s)()) || void 0 === vv || vv.followCursorAim(!0 === (null === zv || void 0 === zv ? void 0 : zv.isSessionLive) ? zv : null)
        })), Ag && Ov.setUiPrefs(Ag);
        Lg && Ov.setEnvPrefs(Lg);
        Hg && Ov.setLookPrefs(Hg);
        const Dv = NS ? lS(NS.preventMovement) : null;
        Dv && md(Dv);
        const Kv = (0, sP.h)(),
          Vv = (0, sP.c)(Ov, Kv);
        Wg = Kv.basis, (0, fP.k)(null === Vv ? null : (0, aP.o)(Vv)), Tg = Vv;
        const Uv = (0, Nz.b)();
        let Rv = 1 / 0,
          xv = !0,
          tv = Kv.shedFootprintBytes;
        const qv = new Zh.c(Uv, (() => Yv.VC()), (vv => {
          Ov.crash(zP.o, vv)
        }));
        Ng = qv, lg = qv, null !== Vv && qv.setCeiling(Math.min((0, Zh.o)(Vv), Rv));
        if (xv) {
          qv.setShed((vv => {
            const zv = Ov.shedMemory("joinReserve" !== vv);
            return null !== zv && (null === Tg || zv < Tg) && (Tg = zv, (0, fP.k)((0, aP.o)(zv))), zv
          }), ((vv, zv, Pv) => {
            1 === zv ? (0, YP.reportMemoryShed)(vv, Pv, ke) : console.warn(`${se} wasm memory: shed again (${vv}): shed ${zv}`, Pv.wasmMemoryShed)
          }), (() => Ov.addDistanceInUse()));
          const vv = (0, vP.G)(jv);
          qv.setFootprint(new VS(tv, {
            storedChunks: () => Yv.zPv(),
            gpuBytes: () => {
              var zv;
              return null !== (zv = null === vv || void 0 === vv ? void 0 : vv.PPv()) && void 0 !== zv ? zv : 0
            },
            jsHeapBytes: KS
          }))
        }
        window.addEventListener("pagehide", (() => {
          Ng === qv && (qv.refreshStats(), DN(qv))
        })), window.addEventListener("pagehide", dN), window.addEventListener("pagehide", NN), !1;
        const [Iv, Qv] = (0, iP.d)();
        np = (0, GP.f)((vv => Ov.setChunkAddDistance(vv.horizontal, vv.vertical)), {
          horizontal: Iv,
          vertical: Qv
        }), Ov.setAmbientOcclusion(!0 !== FP.h.getItem("disableAmbientOcclusion")), Ov.setPoseLod(!0 !== FP.h.getItem(ez.G)), (0, US.o)("look") && (Ov.setDebugLog(Lz.P.Look, !0), (0, xS.i)("wasm", (() => Ov.takeDebugLog(Lz.P.Look))));
        (0, US.o)("remesh") && (Ov.setDebugLog(Lz.P.Remesh, !0), Zv = () => Ov.takeDebugLog(Lz.P.Remesh), ZS = new QS((0, tS.l)(), Zv));
        var Zv;
        const Av = function(vv, zv, Pv, hv) {
          const Sv = new Ph,
            ev = vv => FP.h.getItem(vv);
          Sv.sync(ev, zv), (0, Dz.R)();
          const gv = (0, dv.l)("customBindingsChanged", (() => {
            Sv.sync(ev, zv)
          }));
          (0, DP.q)(zv);
          const pv = new Set,
            Nv = (0, fv.q)((() => {
              var vv;
              pv.size > 0 && gh() && !0 === (null === (vv = (0, Fv.h)()) || void 0 === vv ? void 0 : vv.localPlayerAlive()) && dv.j.zC("usedKeyboard")
            })),
            lv = EP.b.heldSizer((() => (0, Vz.n)(vv))),
            Tv = JP(vv, zv, {
              prevents: vv => Sv.prevents(vv),
              keyPressed: vv => {
                Sv.moves(vv) && (pv.add(vv), gh() && dv.j.zC("usedKeyboard"))
              },
              keyReleased: vv => {
                pv.delete(vv)
              },
              keysReleased: () => {
                pv.clear()
              },
              resized: () => {
                Sh.g.measure(vv.getBoundingClientRect()), (0, oP.p)()
              },
              sizeCanvas: lv,
              watchRenderScale: zv => {
                const Pv = (0, Vz.o)(vv, zv),
                  hv = EP.b.onRelease(zv);
                return () => {
                  Pv(), hv()
                }
              },
              touchStarting: () => {
                Sh.g.measure(vv.getBoundingClientRect())
              },
              viewShown: Pv,
              touchUiShown: () => Jv.c.get("isTouchScreen"),
              ctrlCombosAreGames: gh,
              inspect: (vv, zv, Pv) => {
                Sv.checks(zv, Pv) && hv(vv)
              },
              canLock: () => ZP(vv)
            }),
            Wv = (0, gP.d)(zv);
          return () => {
            gv(), Nv(), (0, DP.q)(null), Wv(), Tv()
          }
        }(sv, ((vv, zv, Pv, hv, Sv) => {
          var ev;
          KN(Ov, (() => {
            Ov.rings.input.writeRecord(vv, zv, Pv, hv, Sv)
          })), null === (ev = ag) || void 0 === ev || ev.onInput(vv), !Rg && (0, Th.d)(vv, Sv) && (0, Th.b)((() => {
            Je !== Ov || Hp || Ov.isStopped || !CN() || lN(Ov, !1, "budget", !1)
          }))
        }), (() => Qp), (vv => {
          var zv;
          null === (zv = ag) || void 0 === zv || zv.onEvent(vv)
        }));
        if (Ov.isStopped) return Av(), null;
        eg = Av;
        const Lv = () => !Ov.isStopped && !Ap;
        if (Ov.isStopped) return null;
        (0, gz.Q)((() => {
          "call" === (0, gz.p)() && Ov.crash(zP.x, (0, gz.o)())
        }));
        const Hv = (0, zP.S)(Ov.rings.worker, (() => {
          lN(Ov, !1, "budget")
        }));
        gg = function(vv, zv) {
          return VN().then((vv => {
            let {
              prefetchWorldgenWorker: zv
            } = vv;
            zv()
          }), (() => {})), new yS({
            module: (0, gz.v)(),
            decodeSettings: vv => {
              const zv = (0, Fv.s)();
              if (null === zv) throw new Error("no game code to decode the world-gen seed with");
              return zv.decodeMapSettings(vv)
            },
            loadWorker: UN,
            onMapWithoutWorldgen: () => {
              RN((vv => {
                let {
                  stopWorldgenWorkerPrefetch: zv
                } = vv;
                zv()
              }))
            },
            onLoadFailed: vv => {
              (0, YP.reportWorldgenLoadFailure)(vv, ke)
            },
            onWorkerLost: vv => {
              (0, YP.reportWorkerLost)(zP.L, vv, ke)
            },
            onStartTimeout: vv => {
              (0, YP.reportWorkerStartTimeout)(zP.L, vv, ke)
            },
            onGaveUp: vv => {
              (0, YP.reportWorldgenGaveUp)(vv, ke)
            },
            onMemoryStats: vv => {
              var zv;
              null === (zv = Ng) || void 0 === zv || zv.noteWorldgen(vv)
            },
            onMemoryGone: () => {
              var vv;
              null === (vv = Ng) || void 0 === vv || vv.worldgenGone()
            },
            write: (Pv, hv, Sv, ev, gv) => {
              KN(vv, (() => {
                vv.rings.worker.writeWorkerRecord(Pv, hv, Sv, 0, ev, gv) || vv.crash(zP.L, `a world-gen record of kind ${hv} did not fit the worker-in ring`)
              })), zv()
            }
          })
        }(Ov, Hv), dg = function(vv, zv) {
          return new Ih({
            module: (0, gz.v)(),
            loadWorkers: async () => {
              const [{
                createMeshWorker: vv
              }, zv] = await Promise.all([Pv.e(40).then((() => Pv(42746))), Promise.resolve().then((() => Pv(73))).then((vv => {
                let {
                  isMobile: zv
                } = vv;
                return zv()
              }), (() => !1))]);
              return {
                create: vv,
                count: (0, fz.e)(navigator.hardwareConcurrency, zv)
              }
            },
            write: (Pv, hv, Sv, ev, gv, pv) => {
              (0, oP.o)(), KN(vv, (() => {
                vv.rings.worker.writeWorkerRecord(Pv, hv, Sv, ev, gv, pv) || vv.crash(zP.r, `a meshing record of kind ${hv} did not fit the worker-in ring`)
              })), zv()
            },
            onWorkerLost: vv => {
              (0, YP.reportWorkerLost)(zP.r, vv, ke)
            },
            onLightFault: (vv, zv) => {
              (0, YP.reportLightFault)(vv, zv, ke)
            },
            onStartTimeout: vv => {
              (0, YP.reportWorkerStartTimeout)(zP.r, vv, ke)
            },
            onMemoryStats: (vv, zv) => {
              var Pv;
              null === (Pv = Ng) || void 0 === Pv || Pv.noteMeshWorker(vv, zv)
            },
            onMemoryGone: vv => {
              var zv;
              null === (zv = Ng) || void 0 === zv || zv.meshWorkerGone(vv)
            },
            fail: (zv, Pv) => {
              const hv = () => {
                vv.crash(zP.r, void 0 === Pv ? zv : new Error(zv, {
                  cause: Pv
                }))
              };
              void 0 !== Pv ? xN({
                site: zP.r,
                error: Pv
              }, hv) : hv()
            }
          })
        }(Ov, Hv);
        const Mv = (0, Xh.n)(mz.clientSideServerUrls.staticUrl, {
            onTableFailed: vv => {
              xN({
                site: YP.MODEL_FEED_SITE,
                error: vv
              }, (() => {}), Lv)
            },
            packUrl: vv => {
              var zv, Pv;
              return null !== (zv = null === (Pv = Ed()) || void 0 === Pv ? void 0 : Pv.modelUrl(vv)) && void 0 !== zv ? zv : null
            }
          }),
          Ev = function(vv, zv, Pv) {
            const hv = Pv => {
              var hv, Sv;
              return null !== (hv = null === (Sv = zv()) || void 0 === Sv ? void 0 : Sv.drawnUrl(Pv)) && void 0 !== hv ? hv : vv.url(Pv)
            };
            return (0, rh.n)((0, Lh.o)(hv), Pv)
          }(Mv, (() => Cg), Ed),
          ov = new Lh.f(Ev, (vv => {
            console.warn(`${se} image ${vv.key.kind}:${vv.key.index}:${vv.key.word} failed`, vv.error)
          }));
        mg = ov, jg = new Eh(Ov, Ev, ((vv, zv) => {
          void 0 === zv ? console.warn(`${se} ${vv}`) : bd(vv, zv)
        }));
        const bv = new bh.i(Mv, function(vv, zv) {
          let hv = !1,
            Sv = null,
            ev = null;
          const gv = {
              onUnavailable: (Pv, hv) => {
                ev ??= xN({
                  site: YP.MODEL_POOL_SITE,
                  error: Pv,
                  urls: hv
                }, (() => {
                  (0, YP.reportModelPoolFailure)(Pv, vv)
                }), zv)
              },
              onDecoderFailed: (Pv, hv) => {
                const Sv = () => {
                  (0, YP.reportDracoDecoderFailure)(Pv, vv)
                };
                void 0 !== hv ? xN({
                  site: YP.MODEL_POOL_SITE,
                  error: Pv,
                  urls: hv
                }, Sv, zv) : Sv()
              },
              onWorkerLost: zv => {
                (0, YP.reportWorkerLost)(YP.MODEL_POOL_SITE, zv, vv)
              },
              onModuleRetry: (zv, Pv) => {
                (0, YP.reportModelsModuleRetry)(zv, Pv, vv)
              }
            },
            pv = Pv.e(42).then((() => Pv(42755))).then((vv => {
              let {
                pageModelPool: zv
              } = vv;
              if (hv) return null;
              const Pv = zv(gv);
              return Sv = Pv.unlisten, ig = Pv.pool, Pv.pool
            }), (vv => (hv || gv.onUnavailable(vv, void 0), null)));
          return cg = () => {
            var vv;
            hv = !0, null === (vv = Sv) || void 0 === vv || vv(), ig = null
          }, (vv, zv) => pv.then((Pv => {
            var hv;
            return null !== (hv = null === Pv || void 0 === Pv ? void 0 : Pv.build(vv, zv)) && void 0 !== hv ? hv : (0, uh.r)(vv, "the model workers did not load")
          })).then((vv => null !== ev && (0, uh.k)(vv) ? ev.then((() => vv)) : vv))
        }(nv, Lv), (vv => {
          vv.startup ? (mN(), xN({
            site: YP.MODEL_FEED_SITE,
            error: vv.error,
            urls: "" === vv.url ? void 0 : [vv.url]
          }, (() => {
            (0, YP.reportModelFailure)(vv, nv)
          }))) : (0, YP.reportModelFailure)(vv, nv)
        }), {
          onWritten: (vv, zv) => {
            ov.glbWritten(vv, zv)
          },
          onTaken: (vv, zv) => {
            ov.glbTaken(vv, zv)
          },
          onPackFileFailed: (vv, zv) => {
            console.warn(`${se} the texture pack's model file ${vv} failed: the shipped one loads`, zv)
          }
        });
        Cg = bv;
        const rv = new yh.e(Ov);
        be = rv, rv.swap((vv => {
          const zv = () => {
            (0, YP.reportTerrainTextureFailure)(vv, nv)
          };
          if (Op) return void zv();
          const Pv = () => !Op,
            hv = null === vv.url ? void 0 : [vv.url];
          xN({
            site: zP.H,
            error: vv.error,
            urls: hv
          }, zv, Pv)
        })).then((vv => {
          null !== vv && (vv || Ov.isStopped || console.warn(`${se} the core refused the terrain textures: terrain draws untextured`), Dg(Ov))
        }));
        const kv = new Zz(Ov, ((vv, zv) => {
          console.warn(`${se} ${vv}`, ...void 0 === zv ? [] : [zv])
        }));
        kv.feed(), null !== Tv && function(vv, zv, hv, Sv, ev, gv) {
          let pv = null,
            dv = null,
            Nv = !1;
          const lv = {
            textures: null,
            stop: () => {
              var vv, zv;
              Nv = !0, null === (vv = dv) || void 0 === vv || vv(), null === (zv = pv) || void 0 === zv || zv(), kh.e.setSettled(null), null !== Xe && rp.clear(Xe)
            }
          };
          oe = lv, dv = rd().follow((dv => {
            null !== dv && Promise.all([Pv.e(193), Pv.e(45)]).then((() => Pv(42713))).then((Pv => {
              let {
                PackTextures: Tv
              } = Pv;
              if (Nv || vv.isStopped) return;
              const Wv = new Tv({
                feed: dv,
                terrain: zv,
                backend: hv,
                stopped: () => vv.isStopped,
                landed: () => {
                  Dg(vv)
                },
                packSwapped: () => {
                  (0, rh.k)(Sv), gv.feed((() => async function(vv) {
                    const zv = null === vv ? null : await vv.averageColours;
                    return null === zv ? Az() : Qz(zv)
                  }(Wv.assets))), (0, oh.g)(Wv.files()), ev.refresh().then((vv => {
                    null !== vv && console.info(`${se} texture pack models: ${vv.resent} of ${vv.delivered} files written again, ${vv.refetched} refetched`)
                  }))
                },
                settled: (vv, zv, Pv) => {
                  var hv;
                  (kh.e.setSettled({
                    state: vv,
                    files: zv
                  }), null === vv.gameSource && (0, CP.e)(vv.pack, Pv), Pv) || function(vv) {
                    const zv = Xe;
                    null !== zv && rp.apply(zv, vv).then((zv => {
                      zv && vv && console.info(`${se} the texture pack's animations are in (${Object.keys(vv).length} files)`)
                    }))
                  }(null === (hv = vv.pack) || void 0 === hv ? void 0 : hv.animations)
                },
                settling: () => {
                  kh.e.setSettled(null)
                },
                warn: bd,
                maxTextureSize: () => Promise.resolve((0, vP.Y)(document.createElement("canvas")))
              });
              lv.textures = Wv, pv = Wv.start()
            }), (vv => {
              console.warn(`${se} the texture pack's terrain didn't load: the built atlas stays`, vv)
            }))
          }))
        }(Ov, rv, Tv, ov, bv, kv);
        const Xv = () => {
            Ov.setTextureLayers("")
          },
          uv = vv => {
            (Gz ??= Pv.e(51).then((() => Pv(42762))).then((vv => {
              let {
                TEXTURE_NAMES: zv
              } = vv;
              return zv
            }), (vv => {
              throw Gz = null, vv
            })), Gz).then((vv => {
              Ov.setTextureLayers(vv) || Ov.isStopped || (console.warn(`${se} the core refused the texture names: textured Boxes draw textureNotFound`), Xv())
            }), (zv => {
              if (Ov.isStopped) return;
              const [Pv, ...hv] = vv;
              void 0 === Pv ? xN({
                site: YP.TEXTURE_NAMES_SITE,
                error: zv
              }, (() => {
                console.warn(`${se} the texture names didn't load, so textured Boxes draw textureNotFound`, zv), Xv()
              }), Lv) : setTimeout((() => {
                uv(hv)
              }), Pv)
            }))
          };
        if (uv(qe), null !== Tv && !await async function(vv, zv, Pv, hv, ev, gv) {
            var pv;
            const dv = (0, vP.G)(Pv);
            if (null === dv) return vv.crash(ie, new Error(`this ${hv} build has no openRenderer`)), !1;
            let Nv;
            wp = dv;
            try {
              var lv, Tv, Wv, wv;
              const Sv = null !== (lv = null === (Tv = ye) || void 0 === Tv ? void 0 : Tv.pagePreviews()) && void 0 !== lv ? lv : null,
                pv = null !== (Wv = null === (wv = ye) || void 0 === wv ? void 0 : wv.previewModule(Pv)) && void 0 !== Wv ? Wv : null;
              if (null === Sv || null === pv) {
                null === Sv || void 0 === Sv || Sv.endSession(!1), Nv = (0, Vz.g)().sampleCount, await (0, vP.h)(zv, dv, gv, Bd, Nv, await ev);
                const vv = (0, vP.n)(Pv);
                null === vv && console.warn(`${se} this ${hv} build has no image registry: sky and model images won't show`), (0, Mh.g)(vv)
              } else {
                (0, gS.c)() && await (0, Bv.l)();
                const Pv = (0, gS.E)();
                if (null !== Pv) {
                  const zv = (0, vP.S)(dv);
                  return vv.crash(YP.RENDER_RELOAD_SITE, new Error(`${Pv}${void 0===zv?"":` (${zv.message})`}`)), !1
                }
                Nv = await Sv.bindSession(pv, zv, (async vv => (0, vP.A)(dv, ie, gv, vv, Bd, await ev)))
              }
            } catch (Sv) {
              return vv.crash(ie, Sv), !1
            }(function(vv, zv) {
              const Pv = vv,
                {
                  requestCapture: hv,
                  takeCapture: Sv
                } = Pv;
              if ("function" !== typeof hv || "function" !== typeof Sv) return;
              const ev = {
                request() {
                  hv.call(Pv, zv)
                },
                take() {
                  var vv;
                  return null !== (vv = Sv.call(Pv)) && void 0 !== vv ? vv : null
                }
              };
              window[wS] = ev
            })(zv, Nv), mp = Nv, Tp = !0;
            const av = performance.now();
            return Wp.boundAtMs = null !== (pv = (0, gS.H)()) && void 0 !== pv ? pv : av, Wp.indirectHangs = (0, gS.u)(), console.info(`${se} ${hv} renderer bound at ${Math.round(av)} ms`), !vv.isStopped
          }(Ov, Yv, jv, Tv, wv, sv)) return null;
        if (null !== Tv) {
          var vz, zz, Pz;
          (0, lz.H)(Tv);
          const vv = () => !Ov.isStopped && sN();
          Pv.e(185).then((() => Pv(8882))).then((zv => {
            let {
              devTools: Pv
            } = zv;
            Ov.isStopped || Pv.setHost(function(vv) {
              return {
                tools: eS,
                async downloadScene(zv, Pv) {
                  let {
                    width: hv,
                    height: Sv,
                    colouring: ev
                  } = Pv;
                  "screenshot" === zv && null === ev ? await (0, PS.c)(vv, hv, Sv) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
                },
                setAmbientLightIntensity: () => (console.warn("The Rust client's renderer has no ambient light setting"), Promise.resolve())
              }
            }(function(vv, zv) {
              return {
                canvas: vv,
                maxTextureSize: hS,
                drawing: zv,
                resize: (vv, zv) => {
                  (0, DP.x)(Lz.Bb.Resize, 0, vv, zv, (0, DP.m)(1))
                },
                restoreSize: () => {
                  const zv = (0, Vz.n)(vv);
                  null !== zv && (0, DP.x)(Lz.Bb.Resize, 0, zv.cssWidth, zv.cssHeight, (0, DP.m)(zv.renderScale))
                },
                onFrameDrawn: vv => (SS.add(vv), () => {
                  SS.delete(vv)
                })
              }
            }(sv, vv)))
          }), (vv => {
            console.warn(`${se} the developer tools didn't load: no captures this session`, vv)
          }));
          const zv = "webgpu" === Tv && null !== (vz = null === Nv || void 0 === Nv || null === (zz = Nv.adapter) || void 0 === zz ? void 0 : zz.vendor) && void 0 !== vz ? vz : null;
          jp = {
            backend: Tv,
            canvas: sv,
            fallbackReason: null !== (Pz = null === Nv || void 0 === Nv ? void 0 : Nv.reason) && void 0 !== Pz ? Pz : null,
            adapterVendor: zv
          }, PN();
          try {
            (0, oP.y)(Tv, sv, zv)
          } catch (Sv) {
            (0, oP.A)(), console.error(`${se} the quality steps didn't start`, Sv)
          }
        }
        const {
          storagePullBreaks: hz,
          splitPassBreaks: Sz
        } = await wv;
        Sz && console.warn(`${se} split_pass_breaks on: Windows Adreno 7xx (N-103) or ?sceneDepth=off`);
        const Wz = hz ? yv.b : (0, yv.g)(Nv, (0, Oz.g)());
        if ((0, US.o)("webgpuloss")) {
          var iz, cz;
          const vv = {
            backend: Tv,
            reason: null !== (iz = null === Nv || void 0 === Nv ? void 0 : Nv.reason) && void 0 !== iz ? iz : null,
            source: null !== (cz = null === Nv || void 0 === Nv ? void 0 : Nv.source) && void 0 !== cz ? cz : null,
            storagePullBreaks: hz,
            noWebGpu: Wz.messageKey
          };
          (0, RS.c)((zv => {
            zv.noteWasmPick(vv)
          }))
        }
        const jz = "webgpu" === Tv && !hz;
        if (Fg = (0, yv.i)(jz ? Ov : null, jz && null !== (gv = null === (pv = ye) || void 0 === pv ? void 0 : pv.pagePreviews().Bw) && void 0 !== gv ? gv : null, Wz, bd), Hp) return null;
        if (qv.reserveAtJoin((0, Zh.l)(null !== Vv && void 0 !== Vv ? Vv : aP.i)), Ov.isStopped) return null;
        const Fz = vv => {
          if (null !== fp) try {
            fp.animationFrame(vv)
          } catch (Sv) {
            eN(Sv)
          }
          if (function(vv, zv) {
              return zv && !Hp && !Rg && CN() && sN() && vv.framePaces(performance.now())
            }(Ov, Qp)) return Ov.writePendingInput(), (0, fv.d)(vv, TN), hN(!1, vv), void requestAnimationFrame(Fz);
          lN(Ov, Qp, "budget") && ((0, Kz.i)(Ov.lastFrameKind) && sN() && (0, fv.d)(vv, TN), hN(Qp && tp, vv), qp.frame(Ov.lastFrameKind, Qp && sN(), vv), fN(Ov), qv.afterFrame(), requestAnimationFrame(Fz))
        };
        requestAnimationFrame(Fz);
        return function(vv) {
          if (vv.has("inputLog") && (0, hh.h)((vv => {
              let {
                action: zv,
                down: Pv,
                press: hv
              } = vv;
              console.info(`${eh} input ${zv} ${Pv?"down":"up"} press ${hv} at ${performance.now().toFixed(1)}`)
            })), vv.has("inputDump")) {
            const vv = [];
            ph = vv, Object.assign(window, {
              bloxdInputDump: () => vv.join("\n")
            })
          }
        }(new URLSearchParams(window.location.search)), wg = function(vv, zv) {
          let Pv = null;
          const hv = () => {
              null !== Pv && (clearInterval(Pv), Pv = null)
            },
            Sv = () => {
              document.hidden ? Pv ??= setInterval((() => {
                lN(vv, !1, "budget") ? (fN(vv), zv.afterFrame()) : hv()
              }), te) : hv()
            };
          return document.addEventListener("visibilitychange", Sv), Sv(), () => {
            hv(), document.removeEventListener("visibilitychange", Sv)
          }
        }(Ov, qv), Ov
      }(zv).then((vv => {
        var zv;
        (hv(ke), zg(null !== vv), null !== vv && (cS = performance.now()), ue(vv), null === vv) ? null === (zv = ye) || void 0 === zv || zv.pagePreviews().endSession(null === (0, gz.p)()): Og("booted")
      }), (vv => {
        hv(ke), zg(!1), ue(null), jN({
          site: ce,
          error: vv,
          header: null
        }, ke)
      }))
    }

    function bp() {
      const vv = Xe;
      null !== vv && Mp().then((zv => {
        let {
          pageBuiltInAnimationPack: Pv
        } = zv;
        Pv().provide(vv)
      }), (vv => {
        console.warn(`${se} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, vv)
      }))
    }
    const rp = new class {
      constructor(vv) {
        this.deps = vv, this.latest = 0, this.Vp = null
      }
      apply(vv, zv) {
        return this.load(vv, zv, 0)
      }
      async load(vv, zv, Pv) {
        var hv;
        const Sv = ++this.latest,
          ev = this.deps.compiler;
        if (void 0 === zv || null === zv || "object" !== typeof zv || 0 === Object.keys(zv).length || null === ev) return this.drop(vv), !1;
        if ((null === (hv = this.Vp) || void 0 === hv ? void 0 : hv.module) === vv && (0, bz.Ud)(this.Vp.files, zv)) return !1;
        try {
          const [Pv, hv] = await Promise.all([ev(), this.deps.builtIns()]);
          if (Sv !== this.latest) return !1;
          const gv = await Pv(zv, uz, {
            builtIns: hv
          });
          if (Sv !== this.latest) return !1;
          const pv = this.call(vv, gv);
          if (void 0 === pv) throw new Xz("the compiled animations didn't read against the built-in pack");
          return this.Vp = {
              module: vv,
              files: zv
            },
            function(vv) {
              for (let zv = 0; zv + 2 < vv.length; zv += 3) {
                ("error" === vv[zv] ? console.error : console.warn)(`Animation for the texture pack: ${vv[zv+1]}: ${vv[zv+2]}`)
              }
            }(pv), !0
        } catch (pv) {
          var gv;
          if (Sv !== this.latest) return !1;
          this.drop(vv), 0 === Pv && this.deps.warn("the texture pack's animations didn't load: lifeforms play the built-in ones", pv);
          const hv = (null !== (gv = this.deps.retryAfterMs) && void 0 !== gv ? gv : kz)[Pv];
          return void 0 === hv || pv instanceof Xz || (0, rz.j)(vv) || setTimeout((() => {
            Sv === this.latest && this.load(vv, zv, Pv + 1)
          }), hv), !1
        }
      }
      call(vv, zv) {
        try {
          return vv.Xzv(zv)
        } catch (Pv) {
          throw (0, rz.k)(vv, Pv), Pv
        }
      }
      clear(vv) {
        this.latest++, this.drop(vv)
      }
      drop(vv) {
        const zv = this.Vp;
        if (this.Vp = null, (null === zv || void 0 === zv ? void 0 : zv.module) === vv && !(0, rz.j)(vv)) try {
          this.call(vv, null)
        } catch {}
      }
    }({
      compiler: Bz.c,
      builtIns: async () => {
        const {
          pageBuiltInAnimationPack: vv
        } = await Mp();
        return vv().whenSet()
      },
      warn: bd
    });
    async function kp(vv, zv) {
      let hv = !1;
      await Xp({
        matchmake: async () => {
          const {
            guestJoinTarget: Sv,
            guestJoinWithPack: ev
          } = await Pv.e(343).then((() => Pv(42699)));
          return hv ? Sv(vv, zv, Xd()) : (hv = !0, ev(vv, zv, (zv => ud(vv, zv)), Xd))
        },
        onFailure: vv => {
          (0, YP.showJoinFailure)(vv, ke)
        },
        rejoin: ad,
        invalidateTrafficCode: sd
      })
    }
    async function Xp(vv) {
      let {
        matchmake: zv,
        onFailure: Pv,
        rejoin: Sv,
        invalidateTrafficCode: ev,
        pageReady: gv,
        signal: pv
      } = vv;
      const dv = () => !0 === (null === pv || void 0 === pv ? void 0 : pv.aborted);
      let Nv;
      const lv = kh.e.rejoinHold();
      Jg = null;
      const Tv = (0, mP.Q)("wasm", ON);
      let Wv = !1,
        wv = performance.now();
      try {
        if (!await Pg) return {
          kind: "stopped"
        };
        if (dv()) return {
          kind: "ev"
        };
        yp().catch((() => {}));
        let vv = await zv();
        var sv, Cv;
        if (wv = performance.now(), !dv()) nN(null !== (sv = null === (Cv = vv.target.session) || void 0 === Cv ? void 0 : Cv.gameNameWithVariation) && void 0 !== sv ? sv : null);
        const Pv = () => performance.now() - vv.matchedAt <= vv.freshMs,
          hv = zd(vv.target).catch((() => {}));
        Pv() && !dv() && (Nv = new Rh(vv.target, {
          signal: pv
        }));
        const ev = performance.now();
        if (null === await vg) return {
          kind: "stopped"
        };
        var iv, cv;
        if (function(vv) {
            var zv, Pv;
            if (aS.e.markGameEngineConstructed(), GS) return;
            GS = !0;
            const hv = Math.max(vv, null !== (zv = CS) && void 0 !== zv ? zv : vv);
            (0, sS.j)("ready", Math.max(0, (null !== (Pv = iS) && void 0 !== Pv ? Pv : hv) - hv) / 1e3)
          }(ev), !dv())
          if (null !== iS && null !== cS ? ((0, av.q)("wasm_loaded", iS), (0, av.q)("wasm_core_ready", cS)) : console.warn("[bloxd-wasm-client] a join found the core before boot marked its steps"), vv.target.session && function(vv) {
              const zv = (0, bz.Pb)(vv);
              return "classic" !== zv ? LS.has(zv) : !(0, hz.l)(vv) && !HS.has((0, bz.Kb)(vv))
            }(vv.target.session.gameNameWithVariation)) null === (iv = gg) || void 0 === iv || iv.prestart();
        if (await hv, !Pv() && !dv()) null === (cv = Nv) || void 0 === cv || cv.rematched(), vv = await zv(), wv = performance.now();
        if (dv()) return {
          kind: "ev"
        };
        const lv = await async function(vv) {
          var zv, Pv, hv;
          let {
            signal: Sv,
            rejoin: ev = null,
            early: gv,
            pageReady: pv
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null !== Sv && void 0 !== Sv && Sv.aborted) throw new DOMException("the join was left", "AbortError");
          const dv = (Nv = zp, lv = performance.now(), null !== Nv && lv - Nv < ch);
          var Nv, lv;
          zp = null;
          const Tv = new AbortController,
            Wv = null !== (zv = null === (Pv = vv.session) || void 0 === Pv ? void 0 : Pv.gameNameWithVariation) && void 0 !== zv ? zv : null;
          nN(Wv), Sd({
            controller: Tv,
            game: Wv
          }), Pp = null, null === (hv = ep) || void 0 === hv || hv.abort(), ep = null, pp = !1, dp = null, Np.clear();
          const wv = () => {
            (0, jz.k)(Tv, (0, jz.g)(Sv))
          };
          null === Sv || void 0 === Sv || Sv.addEventListener("abort", wv, {
            once: !0
          });
          try {
            var sv, Cv, iv;
            const zv = await vg;
            if (null === zv || zv.isStopped || Hp) throw new Error("no core is running to join a game with");
            if (vv.session && null !== Fg) {
              const zv = await Pd(Fg.join(vv.session.gameNameWithVariation), Tv.signal);
              if ((0, US.o)("webgpuloss")) {
                const Pv = vv.session.gameNameWithVariation,
                  hv = Fg.couldntRunInJoinedGame();
                (0, RS.c)((vv => vv.noteWasmJoin(Pv, zv, hv)))
              }
              if (null !== zv) throw new yv.d(zv)
            }
            const [, , , {
              joinRoom: Pv
            }] = await Pd(Promise.all([(0, Fv.j)(zv), zd(vv), null === pv || void 0 === pv ? void 0 : pv(), yp()]), Tv.signal), hv = vv.session, Sv = hv ? {
              ...Gd,
              attachSocket: zv => {
                const Pv = Od(zv, vv.endpoint);
                var Sv;
                null !== Pv && (og = {
                  conn: Pv,
                  info: hv
                }, null === (Sv = bg) || void 0 === Sv || Sv(hv.playerDbId));
                return Pv
              }
            } : Gd, Nv = await Pv(Sv, vv, {
              signal: Tv.signal,
              early: gv
            }).catch((vv => {
              throw function(vv) {
                if (!(vv instanceof tv.e)) return vv;
                if ("roomError" === vv.stage && null !== dp) return vd(new tv.e(vv.message, vv.stage, vv.code, dp), vv);
                const zv = "closed" === vv.stage && null !== hp ? Np.get(hp.conn) : void 0;
                return void 0 === zv ? vv : vd(new tv.e(vv.message, vv.stage, zv.code), vv)
              }(vv)
            }));
            if (Bg !== Tv) throw Nv.leave(), new DOMException("the join was left", "AbortError");
            gd(Nv), null === (sv = dg) || void 0 === sv || sv.newGame();
            const lv = function(vv) {
              var zv, Pv;
              const {
                session: hv
              } = vv, Sv = void 0 === hv ? vv.joinOptions.lobbyName : hv.lobbyName;
              return {
                endpoint: vv.endpoint,
                game: null !== (zv = null === hv || void 0 === hv ? void 0 : hv.gameNameWithVariation) && void 0 !== zv ? zv : vv.roomName,
                lobby: String(null !== Sv && void 0 !== Sv ? Sv : null),
                postCookies: null !== (Pv = vv.postCookies) && void 0 !== Pv ? Pv : null
              }
            }(vv);
            yg.set(Nv, lv), Dh(lv);
            const Wv = performance.now(),
              wv = {
                conn: Nv.conn,
                rejoin: ev,
                game: null !== (Cv = null === (iv = vv.session) || void 0 === iv ? void 0 : iv.gameNameWithVariation) && void 0 !== Cv ? Cv : "",
                joinedAt: Wv,
                rejoinedAt: dv ? Wv : null,
                overflow: null
              };
            rg = wv,
              function(vv, zv) {
                qd();
                const Pv = {
                  endpoint: zv,
                  roomId: vv.seat.room.roomId,
                  heldConn: 0,
                  dropCode: 0,
                  pendingHold: null,
                  resume: new TP({
                    reconnect: (vv, zv, hv) => async function(vv, zv, Pv, hv) {
                      const {
                        roomId: Sv,
                        roomToken: ev
                      } = Qd(vv, zv), gv = Je;
                      if (null === gv || gv.isStopped || Hp) throw new Error("no core is running to resume the game on");
                      const {
                        resumeRoom: pv
                      } = await Pd(yp(), Pv), dv = {
                        ...Gd,
                        attachSocket: zv => kg !== vv || 0 === vv.heldConn ? (zv.close(), null) : Od(zv, vv.endpoint, !0)
                      };
                      return pv(dv, vv.endpoint, Sv, ev, {
                        signal: Pv,
                        onAttached: hv
                      })
                    }(Pv, vv, zv, hv),
                    releaseSeat: vv => {
                      !async function(vv, zv) {
                        const {
                          roomId: Pv,
                          roomToken: hv
                        } = Qd(vv, zv);
                        try {
                          const {
                            leaveHeldSeat: zv
                          } = await yp();
                          await zv(vv.endpoint, Pv, hv)
                        } catch (Sv) {
                          console.warn(`${se} the held seat of a game left while it reconnected couldn't be released`, Sv)
                        }
                      }(Pv, vv)
                    },
                    isLive: () => kg === Pv && null !== rg && !Hp,
                    ZY: vv => {
                      vp = vv, td()
                    },
                    onReconnected: vv => {
                      ! function(vv) {
                        const zv = Mg;
                        if (null !== zv && zv !== vv) {
                          const Pv = yg.get(zv);
                          void 0 !== Pv && yg.set(vv, Pv), xp === zv && (xp = vv), zv.detach()
                        }
                        gd(vv)
                      }(vv)
                    },
                    onGaveUp: (vv, zv) => {
                      ! function(vv, zv, Pv) {
                        var hv, Sv;
                        console.warn(`${se} gave up reconnecting (${Pv.reason}, ${Pv.attempts} attempts)`, Pv.lastError), (0, YP.reportReconnectGaveUp)(Pv, ke);
                        const ev = null !== (hv = null === (Sv = rg) || void 0 === Sv ? void 0 : Sv.rejoin) && void 0 !== hv ? hv : null;
                        Id(vv, "gaveUp"), dd();
                        const gv = {
                          code: vv.dropCode,
                          name: null,
                          reason: Ve,
                          canReconnect: !zv,
                          automaticallyReconnect: !1,
                          requiresRefresh: !1
                        };
                        cd(gv, zv ? null : ev, !1, {
                          reasonKey: Ue,
                          canPlayAgain: zv
                        })
                      }(Pv, vv, zv)
                    }
                  })
                };
                kg = Pv, null !== Xg && Xg.conn === vv.conn && Pv.resume.onInitialInfo(Xg)
              }(Nv, vv.endpoint), performance.mark(je), (0, av.q)("wasm_joined", Wv), setTimeout((() => {
                Mg === Nv && (0, av.e)()
              }), 0), bp(), console.info(`${se} joined ${vv.roomName} as ${Nv.seat.sessionId} at ${Math.round(performance.now())} ms`);
            const cv = Pp;
            Pp = null, null !== cv && Td(wv, cv.mask, cv.frames);
            const Gv = Np.get(Nv.conn);
            return Np.clear(), void 0 !== Gv && (gd(null), Cd(Nv.conn, Gv.code, Gv.reason)), Nv
          } finally {
            var cv;
            null === Sv || void 0 === Sv || Sv.removeEventListener("abort", wv), Bg === Tv && ed(Mg, null), (null === (cv = hp) || void 0 === cv ? void 0 : cv.join) === Tv && (hp = null)
          }
        }(vv.target, {
          signal: pv,
          rejoin: Sv(vv.target),
          early: Nv,
          pageReady: gv
        });
        return Wv = !0, {
          kind: "joined",
          game: lv
        }
      } catch (mv) {
        if (mv instanceof DOMException && "AbortError" === mv.name || dv()) return {
          kind: "ev"
        };
        if (Hp) return {
          kind: "stopped"
        };
        if (pp && (pp = !1, await ev().catch((vv => {
            console.warn(`${se} the cached traffic code could not be dropped`, vv)
          }))), null === await vg) return {
          kind: "stopped"
        };
        if (mv instanceof yv.d) return Pv(mv, performance.now() - wv), {
          kind: "failed",
          error: mv,
          reloading: !1
        };
        if (mv instanceof tv.e && mv.code === hv.b.wasmClientNotAllowed.code && Ip) return yd("this server refused the wasm client to this account", "refused"), {
          kind: "failed",
          error: mv,
          reloading: !0
        };
        const vv = mv instanceof tv.e && mv.code === hv.b.outdatedVersion.code,
          zv = () => null === Mg,
          Sv = await xN({
            site: YP.JOIN_SITE,
            error: mv,
            outdated: vv
          }, (() => {
            Pv(mv, performance.now() - wv)
          }), zv);
        return {
          kind: "failed",
          error: mv,
          reloading: Sv
        }
      } finally {
        var Gv;
        Wv || Tv.end(), kh.e.releaseHold(lv);
        const vv = null === (Gv = Nv) || void 0 === Gv ? void 0 : Gv.release();
        vv && (0, YP.reportUnusedSeat)(vv, ke)
      }
    }

    function vd(vv, zv) {
      return vv.stack = zv.stack, vv
    }

    function zd(vv) {
      return vv.session ? (0, Fv.q)(re, vv.session.gameNameWithVariation) : Promise.resolve()
    }

    function Pd(vv, zv) {
      return (0, jz.p)(zv), new Promise(((Pv, hv) => {
        const Sv = () => {
          hv((0, jz.g)(zv))
        };
        zv.addEventListener("abort", Sv, {
          once: !0
        }), vv.then((vv => {
          zv.removeEventListener("abort", Sv), Pv(vv)
        }), (vv => {
          zv.removeEventListener("abort", Sv), hv(vv)
        }))
      }))
    }

    function hd() {
      Sd(null)
    }

    function Sd(vv) {
      var zv, Pv, hv;
      (function() {
        const vv = kg;
        null !== vv && Id(vv, "left")
      }(), null === Sg || Sg.left) || (Sg.left = !0, null === (hv = (0, Fv.h)()) || void 0 === hv || hv.socketLeft(), (0, Wv.o)({
        websocketUrl: null
      }));
      Bg && (0, jz.k)(Bg, new DOMException("the join was left", "AbortError")), dd(null !== vv), null === (zv = Fg) || void 0 === zv || zv.leave();
      const Sv = Mg;
      null !== vv && kh.e.setGame(vv.game), ed(null, null !== (Pv = null === vv || void 0 === vv ? void 0 : vv.controller) && void 0 !== Pv ? Pv : null), null === Sv || void 0 === Sv || Sv.leave(), pd(0), (0, iz.e)()
    }

    function ed(vv, zv) {
      Mg = vv, Bg = zv, null === Mg && null === Bg && kh.e.setGame(void 0)
    }

    function gd(vv) {
      ed(vv, Bg)
    }

    function pd(vv) {
      const zv = Je;
      return null !== Qe && !Hp && null !== zv && !zv.isStopped && (!!Qe(tv.g, 0, (0, tv.x)(vv)) && (qg = !0, 0 === vv || Rg || lN(zv, !1, "all"), !0))
    }

    function dd() {
      var vv, zv;
      arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (0, mP.e)();
      const Pv = null !== (vv = null === (zv = rg) || void 0 === zv ? void 0 : zv.overflow) && void 0 !== vv ? vv : null;
      rg = null, null !== Pv && (0, YP.reportEventOverflow)(Pv, ke)
    }

    function Nd() {
      null !== Mg || null !== Bg ? hd() : Dd()
    }

    function ld(vv, zv) {
      console.warn(`${se} the event buffer refused records in ${zv} frames (categories ${vv})`), Hp || (null !== rg ? Td(rg, vv, zv) : null !== Bg && function(vv, zv, Pv) {
        var hv;
        const Sv = function(vv, zv) {
          return null === vv ? "drop" : vv.activated ? "keep" : 0 !== (zv & Hz.m.NetSession) ? "fail" : "drop"
        }((null === (hv = hp) || void 0 === hv ? void 0 : hv.join) === vv ? hp : null, zv);
        "keep" === Sv ? Pp = {
          mask: zv,
          frames: Pv
        } : "fail" === Sv && (0, jz.k)(vv, new Error("the join's net session was lost to an event overflow"))
      }(Bg, vv, zv))
    }

    function Td(vv, zv, Pv) {
      const hv = vv.overflow ??= {
        frames: 0,
        acks: 0,
        mask: 0,
        outcome: null
      };
      hv.frames += Pv, hv.acks++, hv.mask |= zv;
      const Sv = function(vv, zv, Pv) {
        if (0 === (vv & Hz.m.NetSession)) return "none";
        const hv = null !== zv.rejoinedAt && Pv - zv.rejoinedAt < Gh;
        return null === zv.rejoin || hv ? "fail" : "rejoin"
      }(zv, vv, performance.now());
      "none" !== Sv && queueMicrotask((() => {
        if (rg !== vv) return;
        const zv = "rejoin" === Sv && performance.now() - Sp >= xv.e;
        hv.outcome = zv ? "rejoined" : "failed", cd(function(vv, zv) {
          return {
            code: 0,
            name: "eventOverflow",
            reason: "Your game fell behind the server.",
            canReconnect: vv,
            automaticallyReconnect: zv,
            requiresRefresh: !1
          }
        }(null !== vv.rejoin, zv), vv.rejoin, zv), hd(), zv && (zp = performance.now())
      }))
    }

    function Wd(vv) {
      Qp = vv, Zp && wd(Zp, vv)
    }

    function wd(vv, zv) {
      vv.style.visibility = zv ? "visible" : "hidden"
    }

    function ad(vv) {
      var zv;
      const Pv = vv.roomName,
        hv = null !== (zv = vv.joinOptions.lobbyName) && void 0 !== zv ? zv : null;
      return () => {
        kp(Pv, hv)
      }
    }

    function sd() {
      return Pv.e(343).then((() => Pv(42699))).then((vv => {
        let {
          invalidateGuestTrafficCode: zv
        } = vv;
        return zv()
      })).catch((vv => {
        console.warn(`${se} the cached traffic code could not be dropped`, vv)
      }))
    }

    function Cd(vv, zv, Pv) {
      var Sv, ev;
      let gv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (Hp) return;
      if ((null === (Sv = rg) || void 0 === Sv ? void 0 : Sv.conn) !== vv) return void(null !== Bg && Np.set(vv, {
        code: zv,
        reason: Pv
      }));
      const {
        rejoin: pv,
        game: dv,
        joinedAt: Nv
      } = rg;
      dd(), qd();
      const lv = (0, xv.h)(zv, (0, jh.f)(vv));
      if (console.info(`${se} the game's connection closed with code ${zv} (${null!==(ev=lv.name)&&void 0!==ev?ev:"unrecognised"})`), zv === hv.b.gameOrPluginKick.code || gv || (0, YP.reportDisconnect)(lv, ke, {
          closeReason: Pv,
          sinceJoinedMs: performance.now() - Nv,
          game: dv
        }), lv.requiresRefresh) {
        const vv = "outdatedVersion" === lv.name,
          Pv = new Error(`the game's connection closed with code ${zv}`),
          hv = () => null === rg && null === Bg;
        return void xN({
          site: YP.JOIN_SITE,
          error: Pv,
          outdated: vv
        }, (() => {
          hv() && cd(lv, null, !1)
        }), hv)
      }
      const Tv = lv.canReconnect ? pv : null,
        Wv = null !== Tv && lv.automaticallyReconnect && performance.now() - Sp >= xv.e;
      cd(lv, Tv, Wv)
    }

    function cd(vv, zv, Pv) {
      var hv;
      let Sv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        reasonKey: null,
        canPlayAgain: !1
      };
      if (Ap) return;
      kh.e.unwantedLeave(Pv && null !== zv && 0 === gp.size), null === (hv = ep) || void 0 === hv || hv.abort();
      const ev = new AbortController;
      ep = ev;
      const gv = null === zv ? null : () => {
        ev.signal.aborted || (ev.abort(), zv())
      };
      if (Pv && null !== gv) {
        Sp = performance.now();
        const vv = setTimeout(gv, xv.b);
        ev.signal.addEventListener("abort", (() => {
          clearTimeout(vv)
        }))
      }
      const pv = {
        code: vv.code,
        name: vv.name,
        reason: vv.reason,
        reasonKey: Sv.reasonKey,
        reconnect: gv,
        reconnecting: Pv,
        requiresRefresh: vv.requiresRefresh,
        canPlayAgain: Sv.canPlayAgain
      };
      if (gp.size > 0)
        for (const Nv of [...gp]) try {
          Nv(pv)
        } catch (dv) {
          console.error(`${se} an unwanted-leave listener threw`, dv)
        } else Ch((0, wh.j)(vv, null !== gv, Pv), ev.signal).then((zv => {
          zv && (null !== gv ? gv() : vv.requiresRefresh && (0, Bv.j)())
        }))
    }
    const Gd = {
      attachSocket: vv => Od(vv),
      onConnection: vv => (lp.add(vv), () => {
        lp.delete(vv)
      }),
      sendRaw: (vv, zv) => {
        const Pv = Sg;
        return null !== Pv && Pv.conn === vv && GN(Pv, zv)
      },
      leaveRoom: pd,
      closeSocket: vv => {
        var zv;
        (null === (zv = Sg) || void 0 === zv ? void 0 : zv.conn) === vv && Dd()
      },
      flushNet: Kd
    };

    function md(vv) {
      var zv;
      let {
        aux: Pv,
        payload: hv
      } = vv;
      null === (zv = Je) || void 0 === zv || zv.queueOptions(Pv, hv)
    }

    function jd(vv, zv) {
      md(function(vv, zv) {
        return NS = vv ? {
          preventMovement: zv
        } : null, vv ? lS(zv) : {
          aux: Lz.hc.AdEnd,
          payload: dS
        }
      }(vv, zv))
    }

    function fd(vv) {
      var zv;
      Ag = vv, null === (zv = Je) || void 0 === zv || zv.setUiPrefs(vv)
    }

    function Fd(vv, zv) {
      re.setMaster(vv, zv)
    }

    function Yd(vv) {
      var zv;
      Lg = vv, null === (zv = Je) || void 0 === zv || zv.setEnvPrefs(vv)
    }

    function nd(vv) {
      var zv;
      Hg = vv, null === (zv = Je) || void 0 === zv || zv.setLookPrefs(vv)
    }

    function Od(vv) {
      var zv;
      let Pv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new URL(vv.url).origin,
        hv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (vv.readyState === WebSocket.CLOSING || vv.readyState === WebSocket.CLOSED) return console.warn(`${se} a closing or closed socket can't be attached`), null;
      const Sv = Je;
      if (!Sv || Sv.isStopped) return console.warn(`${se} no core is running to attach a socket to`), vv.close(), null;
      if (null === (0, Fv.h)()) return console.warn(`${se} the game has not started to attach a socket to`), vv.close(), null;
      if (Kg > Lz.y) return console.warn(`${se} this core has attached all the sockets it can; reload to play on`), vv.close(), null;
      if (qg && !Rg && (lN(Sv, !1, "all"), Sv.isStopped || Hp)) return vv.close(), null;
      Dd();
      const ev = Kg++;
      if (!Ld(Sv, "open", ev, hv ? Lz.fc.Resume : 0)) return vv.close(), null;
      hv || Cz.c.reset(), hp = null === Bg ? null : {
        join: Bg,
        conn: ev,
        activated: !1
      }, vv.binaryType = "arraybuffer";
      const gv = new WP.e((() => {
          ! function(vv, zv) {
            if (Sg !== zv || vv.isStopped || null === Rd(zv, De)) return;
            zv.detach(), Sg = null, Ud(vv, zv, De, "", !0), zv.ws.close()
          }(Sv, pv)
        })),
        pv = {
          ws: vv,
          conn: ev,
          pending: [],
          pendingBytes: 0,
          left: !1,
          resume: hv,
          token: null,
          detach: () => {
            gv.dispose(), vv.removeEventListener("message", dv), vv.removeEventListener("open", Nv), vv.removeEventListener("close", lv)
          }
        },
        dv = vv => {
          if (vv.data instanceof ArrayBuffer) {
            var zv;
            const Pv = new Uint8Array(vv.data);
            gv.heard(), pv.token = null !== (zv = (0, wP.b)(Pv)) && void 0 !== zv ? zv : pv.token,
              function(vv, zv, Pv) {
                KN(vv, (() => {
                  vv.rings.net.writeFrame(zv, Pv) || vv.crash(zP.t, `a socket frame of ${Pv.byteLength} bytes did not fit the net-in ring`)
                }));
                const hv = vv.rings.net.cursor >= ne;
                (hv || vv.netWrittenSinceFrame >= Ye || document.hidden && performance.now() - Vg >= te) && lN(vv, !1, "budget")
              }(Sv, ev, Pv)
          }
        },
        Nv = () => {
          hv || (0, av.q)("wasm_socket_open", performance.now());
          for (const zv of pv.pending.splice(0)) vv.send(zv);
          pv.pendingBytes = 0
        },
        lv = vv => {
          if (Sg === pv && Sv.rings.net.cursor > 0 && lN(Sv, !1, "all"), Sg === pv) {
            if (pv.detach(), Sg = null, Ud(Sv, pv, vv.code, vv.reason) || Vd(Sv, pv)) return;
            Ld(Sv, "close", ev), xd(ev, pv.left), Cd(ev, vv.code, vv.reason)
          }
        };
      return vv.addEventListener("message", dv), vv.addEventListener("open", Nv), vv.addEventListener("close", lv), Sg = pv, null === (zv = (0, Fv.h)()) || void 0 === zv || zv.socketAttached(ev), (0, Wv.o)({
        websocketUrl: Pv
      }), ev
    }

    function Dd() {
      const vv = Sg;
      if (!vv) return;
      const zv = Je,
        Pv = vv.resume;
      Pv && (Kd(), Sg !== vv) || (Sg = null, vv.detach(), vv.ws.close(), null !== zv && (Vd(zv, vv) || Pv && Ud(zv, vv, Ke)) || (null !== zv && Ld(zv, "close", vv.conn), xd(vv.conn, vv.left)))
    }

    function Kd() {
      const vv = Je;
      null !== vv && !vv.isStopped && !Hp && !Rg && vv.rings.net.cursor > 0 && lN(vv, !1, "all")
    }

    function Vd(vv, zv) {
      var Pv;
      if (!zv.resume) return !1;
      const hv = kg;
      return null !== hv && null !== zv.token && "" !== zv.token && (hv.pendingHold = {
        conn: zv.conn,
        token: `${hv.roomId}:${zv.token}`
      }), Ld(vv, "close", zv.conn), null === (Pv = (0, Fv.h)()) || void 0 === Pv || Pv.socketDetached(zv.conn), !0
    }

    function Ud(vv, zv, Pv) {
      let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
        Sv = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      const ev = Rd(zv, Pv);
      if (null === ev) return !1;
      const {
        Vp: gv,
        token: pv,
        game: dv,
        joinedAt: Nv
      } = ev;
      if (!Ld(vv, "close", zv.conn, Lz.D.Held)) return !0;
      console.warn(`${se} the game's connection ${Sv?"went silent":`dropped with code ${Pv}`}, holding it`);
      const lv = {
        closeReason: hv,
        sinceJoinedMs: performance.now() - Nv,
        game: dv
      };
      return (0, YP.reportDisconnect)((0, xv.h)(Pv), ke, lv, Sv ? "silent" : void 0), gv.heldConn = zv.conn, gv.dropCode = Pv, gv.pendingHold = {
        conn: zv.conn,
        token: `${gv.roomId}:${pv}`
      }, Rg || lN(vv, !1, "all"), !0
    }

    function Rd(vv, zv) {
      const Pv = kg,
        Sv = rg,
        ev = vv.token;
      return null === Pv || null === Sv || Hp || vv.left || Sv.conn !== vv.conn || null === ev || "" === ev ? null : (0, hv.j)(zv) && Pv.resume.canHoldSeat() ? {
        Vp: Pv,
        token: ev,
        game: Sv.game,
        joinedAt: Sv.joinedAt
      } : null
    }

    function xd(vv, zv) {
      var Pv;
      null === (Pv = (0, Fv.h)()) || void 0 === Pv || Pv.closeGame(vv), (0, pS.e)().close(vv), zv || (0, Wv.o)({
        websocketUrl: null
      })
    }

    function td() {
      const vv = vp;
      if (null === vv) return;
      const zv = (0, Fv.h)();
      Hp || null === zv || zv.ZY(vv) ? vp = null : performance.now() - Ig.pause >= xe && (Ig.pause = performance.now(), console.warn(`${se} the cmd ring had no room for SetPaused(${vv}): written before the next frame`))
    }

    function qd() {
      const vv = kg;
      kg = null, null === vv || void 0 === vv || vv.resume.dispose()
    }

    function Id(vv, zv) {
      var Pv, hv;
      const {
        heldConn: Sv
      } = vv, ev = vv.resume.resumingConn;
      vv.heldConn = 0, vv.pendingHold = null, kg === vv && (kg = null), "left" === zv ? vv.resume.leave() : vv.resume.dispose(), 0 === ug || (null === (Pv = Sg) || void 0 === Pv ? void 0 : Pv.conn) !== ug || "left" === zv && (null === (hv = Mg) || void 0 === hv ? void 0 : hv.conn) === ug || Ad(ug), "gaveUp" === zv && 0 !== ev && Ad(ev), 0 !== Sv && "refused" !== zv && (console.info(`${se} the game held through its drop ${"left"===zv?"was left":"is given up"}`), null === Je || Je.isStopped || Ld(Je, "close", Sv), xd(Sv, !1))
    }

    function Qd(vv, zv) {
      const Pv = zv.indexOf(":");
      return {
        roomId: Pv < 0 ? vv.roomId : zv.slice(0, Pv),
        roomToken: zv.slice(Pv + 1)
      }
    }

    function Zd(vv) {
      var zv;
      Xg = vv, vv.conn === ug && (ug = 0);
      const Pv = kg;
      null !== Pv && (null === (zv = rg) || void 0 === zv ? void 0 : zv.conn) === vv.conn && Pv.resume.onInitialInfo(vv)
    }

    function Ad(vv) {
      var zv;
      const Pv = Sg;
      (null === Pv || void 0 === Pv ? void 0 : Pv.conn) === vv && (Pv.left = !0, null === (zv = (0, Fv.h)()) || void 0 === zv || zv.socketLeft(), (0, Wv.o)({
        websocketUrl: null
      }), pd(vv) ? setTimeout((() => {
        Sg === Pv && Dd()
      }), tv.f) : Dd())
    }

    function Ld(vv, zv, Pv) {
      let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Sv = !1;
      return KN(vv, (() => {
        const {
          net: ev
        } = vv.rings;
        Sv = "open" === zv ? ev.writeOpen(Pv, hv) : ev.writeClose(Pv, hv), Sv || vv.crash(zP.t, `a socket ${zv} did not fit the net-in ring`)
      })), Sv
    }

    function Hd(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if (Md()) {
        const hv = "browser" === vv && (0, gS.O)() ? "blockedAfterLoss" : "unsupported";
        return (0, YP.reportUnsupportedFallback)(vv, hv, zv, Pv), void yd(`the wasm client can't run here (${zv}; ${hv})`, hv)
      }(0, YP.showUnsupported)(vv, "unsupported", zv, Pv)
    }

    function Md() {
      return Ip && "wasm" !== (0, wz.f)(window.location.search)
    }

    function yd(vv, zv) {
      console.warn(`${se} ${vv}: reloading on the JS client`), null !== zv && (0, wz.q)(zv), (0, wz.p)(null === zv ? "reloadOntoJs" : "decline");
      const Pv = () => {
        (0, Bv.h)(wz.v)
      };
      (0, YP.flushCrashReports)(Bv.e).then(Pv, Pv)
    }

    function Bd(vv, zv, Pv, hv) {
      return ap(vv, zv, Pv, hv)
    }

    function Jd() {
      null === ip || null === Je || Je.isStopped || Hp || null !== Gg || null === Qe || (Gg = ip(Qe, bd, rd().follow))
    }

    function Ed() {
      var vv, zv, Pv;
      return null !== (vv = null === (zv = oe) || void 0 === zv || null === (Pv = zv.textures) || void 0 === Pv ? void 0 : Pv.files()) && void 0 !== vv ? vv : null
    }

    function od(vv) {
      rd().follow((zv => {
        null !== zv && Promise.all([Promise.all([Pv.e(193), Pv.e(45)]).then((() => Pv(42725))), (0, gS.I)()]).then((vv => {
          let [{
            followPagePackFiles: Pv
          }, hv] = vv;
          const Sv = null === hv || (0, vP.o)(hv) ? "webgl" : hv.backend;
          Pv(zv, rh.g, Sv, (vv => {
            rh.g.setPageFiles(vv)
          }), bd)
        }), (zv => {
          console.warn(`${se} the texture pack's files didn't load: the previews draw the shipped ones until the next opens`, zv), vv()
        }))
      }))
    }

    function bd(vv, zv) {
      console.warn(`${se} ${vv}`, zv)
    }

    function rd() {
      return Ee ??= new fS({
        load: vv => Promise.all([Pv.e(193), Pv.e(52)]).then((() => Pv(42734))).then((zv => {
          let {
            startPageTexturePackFeed: Pv
          } = zv;
          return Pv(bd, vv)
        })),
        store: FP.f,
        yw: vv => {
          vg.then((() => {
            (0, YP.reportTexturePackFeedLoadFailure)(vv, ke)
          }))
        }
      }), Ee
    }
    const kd = vv => rd().follow(vv);

    function Xd() {
      return rd().loaded()
    }
    const ud = function(vv, zv, Pv) {
        let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now(),
          Sv = 0;
        return async function(ev, gv) {
          let pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
          const dv = ++Sv,
            Nv = hv() + zv,
            lv = await
          function(vv, zv) {
            let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
            return new Promise((hv => {
              const Sv = setTimeout((() => {
                hv(null), vv.then((vv => {
                  null !== vv && (vv.joinedWithout(), Pv(vv))
                }))
              }), zv);
              vv.then((vv => {
                clearTimeout(Sv), hv(vv)
              }))
            }))
          }(vv(ev), zv, (vv => {
            dv === Sv && pv() && gv(vv, hv() + zv).catch((vv => {
              Pv("the texture pack step after the join failed", vv)
            }))
          }));
          return null === lv ? null : gv(lv, Nv)
        }
      }((vv => (0, hz.l)(vv) ? rd().request() : rd().forJoin()), jS.b, bd),
      vN = function(vv, zv) {
        let Pv = !1;
        return {
          setGamePackConfirm: vv => {
            Pv = null !== vv, zv(vv)
          },
          packStep: (zv, hv, Sv) => vv(zv, hv, (() => Pv && Sv()))
        }
      }(ud, (vv => {
        rd().setGamePackConfirm(vv)
      }));

    function zN(vv) {
      vN.setGamePackConfirm(vv)
    }

    function PN() {
      if (Hp || null !== fp || null === cp || null === jp) return;
      const {
        backend: vv,
        canvas: zv,
        fallbackReason: Pv,
        adapterVendor: hv
      } = jp, Sv = cp;
      cp = null;
      try {
        fp = Sv({
          backend: vv,
          canvas: zv,
          fallbackReason: Pv,
          adapterVendor: hv,
          joinedGame: () => Hp ? null : Mg,
          inGame: SN,
          shaderPackReach: () => {
            var vv, zv;
            return null !== (vv = null === (zv = Fg) || void 0 === zv ? void 0 : zv.reachInJoinedGame()) && void 0 !== vv ? vv : null
          },
          msaa: () => mp > 1,
          writeCmd: (vv, zv, Pv) => null !== Qe && Qe(vv, zv, Pv),
          takeFailedMeshJobs: () => {
            var vv, zv;
            return null !== (vv = null === (zv = dg) || void 0 === zv ? void 0 : zv.takeFailedMeshJobs()) && void 0 !== vv ? vv : 0
          }
        })
      } catch (ev) {
        console.error(`${se} the frame telemetry didn't start`, ev)
      }
    }

    function hN(vv, zv) {
      try {
        var Pv, hv, Sv;
        const ev = Tp && null !== (Pv = null === (hv = Je) || void 0 === hv || null === (Sv = hv.lastHeader) || void 0 === Sv ? void 0 : Sv.renderPending) && void 0 !== Pv ? Pv : 0;
        (0, oP.k)(zv, vv, SN() && !(null !== NS), ev)
      } catch (ev) {
        (0, oP.A)(), console.error(`${se} the quality steps stopped`, ev)
      }
    }

    function SN() {
      return null !== Mg && xp === Mg && !Hp
    }

    function eN(vv) {
      const zv = fp;
      fp = null;
      try {
        null === zv || void 0 === zv || zv.stop()
      } catch {}
      console.error(`${se} the frame telemetry threw: it stops`, vv)
    }

    function gN(vv) {
      var zv, Pv, hv, Sv;
      if ((0, pS.e)().fire(vv), "message" === vv.type) {
        if (xg++, vv.al === Lz.Wc.ERROR && null !== Bg) {
          var ev;
          const {
            text: zv,
            dropsCache: Pv
          } = (0, xv.l)((new TextDecoder).decode(vv.payload));
          pp ||= Pv, (null === (ev = hp) || void 0 === ev ? void 0 : ev.conn) === vv.conn && (dp = zv)
        } else if (vv.al === Hz.Xb.ResumeComplete) {
          var gv;
          null === (gv = kg) || void 0 === gv || gv.resume.onResumeComplete(vv.conn)
        }
        return
      }
      vv.phase === Lz.F.Left ? tg = vv.conn : vv.phase === Lz.F.Activated && (null === (zv = hp) || void 0 === zv ? void 0 : zv.conn) === vv.conn ? hp.activated = !0 : vv.phase === Lz.F.Resumed ? function(vv) {
        var zv, Pv;
        ug = vv;
        const hv = kg;
        if (null === hv || 0 === hv.heldConn || (null === (zv = Sg) || void 0 === zv ? void 0 : zv.conn) !== vv || !Sg.resume || null === rg) return;
        console.info(`${se} the game resumed on conn ${vv}, waiting for its InitialInfo`);
        const Sv = hv.heldConn;
        hv.heldConn = 0, Sg.resume = !1, rg.conn = vv, (null === (Pv = og) || void 0 === Pv ? void 0 : Pv.conn) === Sv && (og = {
          conn: vv,
          info: og.info
        }), Cz.c.apply({
          shopInfo: null,
          _shopVersion: Sz.d
        })
      }(vv.conn) : vv.phase === Lz.F.Held ? function(vv) {
        var zv;
        const Pv = kg,
          hv = null !== (zv = null === Pv || void 0 === Pv ? void 0 : Pv.pendingHold) && void 0 !== zv ? zv : null;
        if (null !== Pv && null !== hv && hv.conn === vv) return Pv.pendingHold = null, Pv.heldConn = vv, ug = 0, console.warn(`${se} the core holds the game, reconnecting`), void Pv.resume.onDropped(hv.token);
        if (vv === ug) {
          ug = 0;
          const zv = Je;
          null === zv || zv.isStopped || (console.info(`${se} the core held again a resumed game the shell ended before its InitialInfo: closing it again`), Ld(zv, "close", vv))
        }
      }(vv.conn) : vv.phase === Lz.F.Closed && (null === (Pv = kg) || void 0 === Pv || null === (hv = Pv.pendingHold) || void 0 === hv ? void 0 : hv.conn) === vv.conn && (kg.heldConn === vv.conn ? function(vv) {
        const zv = vv.heldConn,
          Pv = vv.dropCode;
        Id(vv, "refused"), console.info(`${se} the core didn't hold the game through its drop: it hadn't started`), queueMicrotask((() => {
          xd(zv, !1), Cd(zv, Pv, "", !0)
        }))
      }(kg) : kg.pendingHold = null);
      const pv = Object.keys(Lz.F).find((zv => Lz.F[zv] === vv.phase)),
        dv = 0 === vv.code ? "" : ` (code ${vv.code})`;
      console.info(`${se} conn ${vv.conn}: ${null!==pv&&void 0!==pv?pv:vv.phase}${dv}, ${xg} raw messages so far`), (null === (Sv = Mg) || void 0 === Sv ? void 0 : Sv.conn) !== vv.conn || vv.phase !== Lz.F.Left && vv.phase !== Lz.F.Closed || gd(null), Eg !== vv.conn || vv.phase !== Lz.F.Left && vv.phase !== Lz.F.Closed || (Eg = null, null === Mg && null === Bg && kh.e.setGame(void 0));
      for (const lv of [...lp]) try {
        lv(vv.conn, vv.phase, vv.code)
      } catch (Nv) {
        (0, Mz.q)(Nv, `${se} a connection listener threw`)
      }
    }

    function pN() {
      (0, gS.j)(), queueMicrotask((() => {
        try {
          mN()
        } catch (vv) {
          console.warn(`${se} stopping before the reload threw`, vv)
        }(0, YP.flushCrashReports)(Bv.e).then(Bv.j, Bv.j)
      }))
    }

    function dN() {
      const vv = Je;
      null === vv || vv.isStopped || null === Sg || Rg || !vv.hasPendingCommands() || lN(vv, !1, "budget")
    }

    function NN(vv) {
      var zv;
      const Pv = Mg;
      vv.persisted || null === Pv || (null === (zv = Sg) || void 0 === zv ? void 0 : zv.conn) !== Pv.conn || Sg.left || Pv.leave()
    }

    function lN(vv, zv, hv) {
      let Sv = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const ev = Rg;
      Rg = !0;
      try {
        return function(vv, zv, hv, Sv) {
          var ev, gv, pv, dv;
          if (Hp) return !1;
          if (KN(vv, WN), Hp || vv.isStopped) return !1;
          iN() && Og("modelsIn");
          td(), Vg = performance.now(), tg = null, qg = !1, (0, fv.C)(), null === (ev = ag) || void 0 === ev || ev.beforeFrame(), dh(Vg, vv), (0, fv.x)(Vg, wN), Ug = !0;
          const Nv = zv && CN();
          let lv;
          try {
            lv = vv.frame(Vg, Nv, hv)
          } finally {
            Ug = !1
          }
          if (!lv) return !1;
          Gp.observe(null !== (gv = null === (pv = vv.lastHeader) || void 0 === pv ? void 0 : pv.chunksCancelled) && void 0 !== gv ? gv : 0);
          const Tv = vv.lastFrameKind,
            Wv = (0, Kz.c)(Tv);
          (function(vv) {
            null !== ZS && ZS.afterFrame(performance.now(), vv)
          })(Wv), null === (dv = Fp) || void 0 === dv || dv.frame(vv, Vg, Tv), zv && (tp = Wv);
          Wv && (0, nz.b)(Vg);
          if (null !== fp) try {
            fp.frameRan(vv, Vg, performance.now(), Tv)
          } catch (sv) {
            eN(sv)
          }
          "drawn" === Tv && sN() && function() {
            for (const vv of [...SS]) vv()
          }();
          vv.forEachNetOut(cN);
          const wv = Sg;
          null !== tg && (null === wv || void 0 === wv ? void 0 : wv.conn) === tg && GN(wv, tv.h);
          (function(vv) {
            var zv;
            if (Op) return;
            null === Vp && CN() && (Vp = performance.now());
            if (null === Bg && null === Mg) return;
            null === Vp || Up || (Up = !0, (0, av.q)("wasm_startup_loaded", Vp));
            let Pv = 0;
            null !== Mg ? Pv = -1 : !0 === (null === (zv = hp) || void 0 === zv ? void 0 : zv.activated) && (Pv = ~Hz.I.TerrainDrawn);
            const hv = vv.headerWord(Hz.A.LoadSteps) & Pv & ~Kp;
            if (0 === hv) return;
            Kp |= hv;
            const Sv = performance.now();
            for (const [ev, gv] of Object.entries(aN)) 0 !== (hv & Hz.I[ev]) && (0, av.q)(gv, Sv)
          })(vv), zv && function(vv) {
            var zv, hv, Sv;
            if (null === Mg || !CN()) return;
            null === Rp || xp === Mg && !Rp.frame(Vg, 0 !== (vv.headerWord(Hz.A.LoadSteps) & Hz.I.TerrainDrawn)) || (Rp = null);
            const ev = vv.lastHeader,
              gv = !Tp || 0 === (null === ev || void 0 === ev ? void 0 : ev.renderPending);
            !Dp && gv && (Dp = !0, performance.mark(Fe));
            if (xp === Mg) return;
            const pv = null !== (zv = null === ev || void 0 === ev ? void 0 : ev.firstView) && void 0 !== zv ? zv : Lz.db.NotYet;
            if (Tp && pv === Lz.db.NotYet) return;
            if (Op && (!0 !== (null === (hv = (0, Fv.h)()) || void 0 === hv ? void 0 : hv.isSessionLive) || !gv)) return;
            xp = Mg;
            const dv = Mg;
            if (setTimeout((() => {
                Mg === dv && (0, av.i)()
              }), 0), null === (Sv = Fg) || void 0 === Sv || Sv.playable(), function() {
                clearTimeout(hg), hg = setTimeout((() => {
                  SN() && RN((vv => {
                    let {
                      prefetchWorldgenWorker: zv
                    } = vv;
                    zv()
                  }))
                }), Ie)
              }(), Op) return;
            Op = !0, performance.mark(fe), (0, US.o)("render") && Promise.all([Pv.e(75), Pv.e(47)]).then((() => Pv(4446))).then((vv => {
              let {
                renderDebugPlayable: zv
              } = vv;
              zv()
            }), (vv => {
              console.warn("The render debug topic didn't load", vv)
            }));
            const Nv = Math.round(performance.now());
            if (Tp && pv !== Lz.db.Drawn) {
              const zv = pv === Lz.db.HeldBackstop ? "held_draws" : "long";
              if (console.warn(`${se} playable at ${Nv} ms on the first view's ${zv} backstop: it wasn't drawn whole in time`), (0, av.q)("wasm_view_backstop", Nv, zv), "long" === zv) {
                var lv, Tv;
                const zv = null !== (lv = null === (Tv = rg) || void 0 === Tv ? void 0 : Tv.game) && void 0 !== lv ? lv : "";
                Rp = new nP.b((() => {
                  const Pv = (0, Fv.h)(),
                    hv = (0, Fv.s)(),
                    Sv = null === Pv || null === hv ? null : hv.readDrawCensus(Pv.api);
                  (0, YP.reportFirstViewNoTerrain)(zv, (0, nP.f)(vv.headerWord(Hz.A.LoadSteps), Sv), Sv, ke), (0, Wz.z)("noTerrain")
                }))
              }
            } else console.info(`${se} playable at ${Nv} ms${Tp?"":" (no renderer)"}`);
            setTimeout(Cp, 0), (0, cz.i)().catch((vv => {
              console.error(`${se} item sprites didn't load, so item particles show the missing texture`, vv)
            })), Hh.e.warm()
          }(vv);
          (0, zP.Q)(vv, {
            worldgen: gg,
            mesh: dg
          }),
          function(vv) {
            vv.forEachEvent(lh);
            for (const zv of Nh) try {
              (0, hh.c)(zv)
            } catch (sv) {
              if ((0, Mz.h)(sv)) {
                vv.crashOn(zP.k, sv);
                break
              }
              console.error(`${eh} an input action listener threw`, sv)
            }
            Nh.length = 0
          }(vv), Sv && (0, Dz.d)();
          return !vv.isStopped
        }(vv, zv, "all" === hv || vv.rings.net.cursor >= ne || vv.netKeptFrames >= Oe, Sv)
      } finally {
        Rg = ev
      }
    }

    function TN(vv) {
      console.error(`${se} a frame-start listener threw`, vv)
    }

    function WN() {
      var vv, zv, Pv, hv;
      null === (vv = Cg) || void 0 === vv || vv.drain(Qe, Ze), null === (zv = mg) || void 0 === zv || zv.drain(Qe), null === (Pv = jg) || void 0 === Pv || Pv.drain(performance.now()), sp(Qe), null === (hv = Gg) || void 0 === hv || hv.drain()
    }

    function wN(vv) {
      console.error(`${se} a before-frame listener threw`, vv)
    }
    const aN = {
      ChunkRequested: "wasm_chunk_requested",
      ChunkStored: "wasm_chunk_stored",
      MeshLanded: "wasm_mesh_landed",
      PlayerChunk: "wasm_player_chunk",
      TerrainDrawn: "wasm_terrain_drawn"
    };

    function sN() {
      return Tp && CN()
    }

    function CN() {
      return fg && iN()
    }

    function iN() {
      return null === Cg || Cg.startupDone
    }

    function cN(vv, zv) {
      const Pv = Sg;
      (null === Pv || void 0 === Pv ? void 0 : Pv.conn) === vv ? GN(Pv, zv) : Zg++
    }

    function GN(vv, zv) {
      const {
        ws: Pv
      } = vv;
      return Pv.readyState === WebSocket.OPEN ? (Pv.send(zv), !0) : Pv.readyState === WebSocket.CONNECTING && vv.pendingBytes + zv.byteLength <= Re ? (vv.pending.push(zv.slice()), vv.pendingBytes += zv.byteLength, !0) : (Zg++, !1)
    }

    function mN() {
      var vv, zv, Pv, hv, Sv, ev, gv, pv, dv, Nv, lv, Tv, Wv, wv, av, sv, Cv;
      Hp = !0, qp.stop(), (0, xS.b)(), ZS = null, qd(), (0, fv.B)().unlockPointer(), (0, fv.y)(null), null === (vv = sg) || void 0 === vv || vv(), sg = null, null === (zv = (0, Fv.s)()) || void 0 === zv || zv.followCursorAim(null), (0, Dz.A)(), (0, Fv.f)(), re.stop(), null === (Pv = Yp) || void 0 === Pv || Pv(), Yp = null, null === (hv = np) || void 0 === hv || hv(), np = null, null === (Sv = fp) || void 0 === Sv || Sv.stop(), fp = null, (0, DP.q)(null), null === (ev = eg) || void 0 === ev || ev(), eg = null, null === (gv = gg) || void 0 === gv || gv.stop(), gg = null, null === (pv = dg) || void 0 === pv || pv.stop(), dg = null, null !== (dv = oe) && void 0 !== dv && null !== (Nv = dv.textures) && void 0 !== Nv && Nv.assets && (0, oh.g)(null), null === (lv = oe) || void 0 === lv || lv.stop(), oe = null, be = null;
      const iv = Ng;
      Ng = null, iv && (iv.stop(), DN(iv)), null === (Tv = mg) || void 0 === Tv || Tv.dispose(), mg = null, null === (Wv = jg) || void 0 === Wv || Wv.dispose(), jg = null, Cg = null, null === (wv = cg) || void 0 === wv || wv(), cg = null, null === (av = wg) || void 0 === av || av(), wg = null, null === (sv = ag) || void 0 === sv || sv.stop(), ag = null, hd(), kh.e.release(), Dd();
      const cv = Gg;
      Gg = null;
      try {
        null === cv || void 0 === cv || cv.dispose()
      } catch (Gv) {
        console.warn(`${se} the sky's images didn't release`, Gv)
      }(0, Mh.g)(null), null === (Cv = ye) || void 0 === Cv || Cv.pagePreviews().endSession(null === (0, gz.p)())
    }

    function jN(vv, zv) {
      var Pv, hv;
      const Sv = null !== (Pv = null === (hv = Ng) || void 0 === hv ? void 0 : hv.details()) && void 0 !== Pv ? Pv : {},
        ev = vv.site === ie || vv.site === ce || vv.site === YP.RENDER_RELOAD_SITE || vv.site === Ge ? vv.error instanceof WebAssembly.RuntimeError || vv.error instanceof rz.d : !(0, vP.s)(vv.error) && (0, zP.M)(vv);
      ev && vv.error instanceof Error && (0, gz.P)(vv.error);
      const gv = ev || vv.site === zP.x ? (0, YP.readTrap)(vv.error) : null,
        pv = null !== gv && (0, yz.d)(gv.kind, gv.refusedBytes) ? gv.refusedBytes : 0,
        dv = null === lg ? (0, Zh.s)(function() {
          try {
            return (0, gz.u)().buffer.byteLength
          } catch {
            return 0
          }
        }(), pv, null) : lg.ceilingMayRefuse(pv),
        Nv = pv > 0 && !dv && Md();
      var lv;
      if (Nv && ((0, wz.q)("oom"), (0, wz.p)("decline"), Lp = !0), mN(), (0, gS.c)()) return console.warn(`${se} the session stopped at ${vv.site} as the page reloads`, vv.error), void((0, vP.s)(vv.error) || (null === (lv = vv.header) || void 0 === lv ? void 0 : lv.lastError) === Lz.K.CoreBusy || (0, YP.reportStoppedCore)(vv, zv, gv, {
        memoryDetails: Sv,
        declined: Nv
      }));
      (0, YP.showCrash)(vv, zv, gv, {
        memoryDetails: Sv,
        declined: Nv
      })
    }

    function fN(vv) {
      const {
        input: zv,
        net: Pv,
        worker: hv
      } = vv.rings, Sv = vv.optionsDropped, ev = zv.dropped + Sv + Pv.dropped + hv.dropped + Zg;
      ev !== Qg && function(vv, zv) {
        const Pv = performance.now();
        return !(Pv - Ig[vv] < xe) && (Ig[vv] = Pv, console.warn(`${se} ${zv}`), !0)
      }("dropped", `${ev} records dropped so far (input ${zv.dropped}, options ${Sv}, net ${Pv.dropped}, worker ${hv.dropped}, net-out ${Zg})`) && (Qg = ev)
    }

    function FN() {
      var vv, zv;
      const Pv = (0, GP.e)();
      if (null === Pv) return null;
      const hv = (0, fP.p)(Pv);
      return {
        ...hv,
        horizontal: Math.min(hv.horizontal, null !== (vv = null === (zv = Ng) || void 0 === zv ? void 0 : zv.shedDistanceInUse()) && void 0 !== vv ? vv : 1 / 0)
      }
    }

    function YN(vv) {
      var zv, Pv;
      return {
        samples: Tp ? mp : null,
        sunShadows: vv,
        renderDistance: null !== (zv = null === (Pv = FN()) || void 0 === Pv ? void 0 : Pv.horizontal) && void 0 !== zv ? zv : null
      }
    }

    function nN(vv) {
      Jg = vv, (0, mP.J)()
    }

    function ON() {
      var vv, zv, Pv;
      const hv = FN();
      return {
        ...null === (vv = Ng) || void 0 === vv ? void 0 : vv.pageKillSnapshot(),
        renderDistance: null !== (zv = null === hv || void 0 === hv ? void 0 : hv.horizontal) && void 0 !== zv ? zv : null,
        renderDistanceVertical: null !== (Pv = null === hv || void 0 === hv ? void 0 : hv.vertical) && void 0 !== Pv ? Pv : null,
        chunkCap: Tg,
        budgetBasis: Wg,
        renderBackend: (0, gS.A)(),
        ...(0, jP.e)(Jg)
      }
    }

    function DN(vv) {
      console.info(`${se} wasm memory at the session's end`, vv.details())
    }

    function KN(vv, zv) {
      if (!vv.isStopped) try {
        zv()
      } catch (Pv) {
        vv.crash(zP.B, Pv)
      }
    }

    function VN() {
      return pg ??= Pv.e(69).then((() => Pv(42740))).catch((vv => {
        throw pg = null, vv
      })), pg
    }
    async function UN() {
      const {
        createWorldgenWorker: vv,
        worldgenWorkerReady: zv
      } = await VN();
      return await zv(), vv
    }

    function RN(vv) {
      var zv;
      null === (zv = pg) || void 0 === zv || zv.then(vv, (() => {}))
    }

    function xN(vv, zv, Pv) {
      return async function(vv, zv, Pv) {
        let {
          stop: hv,
          stillWanted: Sv
        } = Pv;
        const ev = await (0, mh.n)(vv, {
          stillWanted: Sv,
          beforeReload: async () => {
            hv(), await (0, YP.flushCrashReports)(Bv.e)
          },
          reload: Bv.j
        });
        return ev || zv(), ev
      }(vv, zv, {
        stop: mN,
        stillWanted: Pv
      })
    }
    let tN = !1;

    function qN() {
      return tN = !0, async function(vv, zv, hv) {
        const {
          gamePackSource: Sv
        } = await Pv.e(344).then((() => Pv(42704)));
        await vN.packStep(vv, ((Pv, hv) => Pv.packForGame(vv, Sv(zv), hv)), hv)
      }(...arguments)
    }

    function IN(vv) {
      ! function(vv, zv) {
        vv((vv => {
          null === vv || void 0 === vv || vv.subscribe((vv => {
            let {
              pack: Pv,
              gameSource: hv
            } = vv;
            zv(null === hv || null === Pv ? null : {
              pack: Pv,
              source: "" === hv ? null : hv
            })
          }))
        }))
      }(kd, vv)
    }
    let QN = !1,
      ZN = null,
      AN = !1,
      LN = !1;

    function HN() {
      var vv;
      QN || (QN = !0, op("play", Mv), (0, Wv.l)(new vl), pv.gameBridge.attach(Rv), oN().catch((() => {})), (0, Fv.w)((vv => {
        zz(vv.setTextHost)
      })), vv = BN, gp.add(vv), function(vv) {
        for (const zv of Yg) vv(zv);
        ng.add(vv)
      }((vv => {
        yN(MN[vv])
      })))
    }
    const MN = {
      booted: ev.o.INITIALISE_NOA,
      texturesIn: ev.o.REGISTRATION,
      modelsIn: ev.o.SETUP_LIFEFORMS
    };

    function yN(vv) {
      dv.j.zC("matchmakeAndPlayStepCompleted", {
        step: vv,
        totalSubSteps: 1
      })
    }

    function BN(vv) {
      if (!AN) return;
      const {
        gameNameWithVariation: zv,
        lobbyName: Pv
      } = (0, Wv.c)();
      if (vv.code === hv.b.serverUpdating.code) return (new vl).leaveLive(), void EN(zv, Pv);
      dv.j.zC("unwantedLeftGame", {
        reason: JN(vv),
        requiresRefresh: vv.requiresRefresh,
        canReconnect: null !== vv.reconnect,
        automaticallyReconnect: vv.reconnecting,
        canPlayAgain: vv.canPlayAgain,
        gameNameWithVariation: zv,
        lobbyName: Pv
      }), (new vl).leaveLive()
    }

    function JN(vv) {
      return null !== vv.reasonKey ? {
        translationKey: vv.reasonKey
      } : "gameOrPluginKick" === vv.name ? vv.reason : `You have disconnected from the server.\n${vv.reason}`
    }

    function EN(vv, zv) {
      var hv;
      hv = (0, Nv.A)(vv, zv), Promise.resolve().then((() => Pv(1492))).then((vv => {
        let {
          navigatePreserveSearch: zv
        } = vv;
        zv(hv)
      })).catch((vv => {
        console.warn("[bloxd-wasm-client] the page's router didn't navigate: loading the page instead", vv), (0, Bv.f)(hv)
      }))
    }

    function oN() {
      return ZN ??= Promise.all([Pv.e(70), Pv.e(73), Pv.e(72), Pv.e(71), Pv.e(84), Pv.e(261), Pv.e(199), Pv.e(217), Pv.e(239), Pv.e(212), Pv.e(46)]).then((() => Pv(39984))).then((vv => {
        try {
          vv.attachPlayGameSources()
        } catch (zv) {
          throw console.error("[bloxd-wasm-client] the play sources did not attach", zv),
            function(vv) {
              vg.then((zv => {
                null === zv || zv.isStopped || Hp ? console.warn(`${se} the play sources threw as they attached, after the client stopped`, vv) : jN({
                  site: Ge,
                  error: vv,
                  header: null
                }, ke)
              }))
            }(zv), zv
        }
      }), (vv => {
        throw ZN = null, new Fv.d(vv)
      })), ZN
    }
    async function bN(vv, zv) {
      HN(), tN = !0, AN = !0;
      let Pv = {
          place: vv.place,
          matchedAt: vv.matchedAt
        },
        gv = vv.place.gameNameWithVariation;
      const pv = (0, Tv.g)();
      let dv = null;
      const Nv = await Xp({
        matchmake: async () => {
          let zv = Pv;
          if (Pv = null, null === zv) {
            const Pv = await vv.rematch();
            if (Pv.isError()) throw dv = Pv.asError().forward(), new Error(Pv.asError().message);
            zv = {
              place: Pv.getValue(),
              matchedAt: performance.now()
            }
          }
          gv = zv.place.gameNameWithVariation;
          return {
            target: await (0, Iv.c)(vv.userContext, zv.place, Xd(), pv),
            matchedAt: zv.matchedAt,
            freshMs: Iv.b
          }
        },
        pageReady: oN,
        onFailure: (vv, zv) => {
          null === dv && function(vv, zv) {
            (0, YP.reportPageJoinFailure)(vv, ke, zv)
          }(vv, {
            sinceJoinStartMs: zv,
            game: gv
          })
        },
        rejoin: () => () => {},
        invalidateTrafficCode: () => vv.userContext.invalidateTrafficCode(),
        signal: zv
      });
      switch (Nv.kind) {
        case "joined":
          if (pv) {
            const {
              game: vv
            } = Nv;
            (0, Tv.q)((() => {
              vv.endJoinAd() && (0, av.m)()
            }))
          }
          return LN || (LN = !0, (0, Cv.c)()), AN ? (yN(ev.o.CONNECT_TO_GAME_SERVER), yN(ev.o.SHADER_PACK), function() {
            var vv, zv;
            return null !== (vv = null === (zv = Fg) || void 0 === zv ? void 0 : zv.runsInJoinedGame()) && void 0 !== vv && vv
          }() && (0, sv.c)(vv.userContext, gv).catch((vv => {
            console.error("Failed to report the shader pack session", vv)
          })), function() {
            const vv = function() {
              var vv, zv;
              return null !== (vv = null === (zv = Fg) || void 0 === zv ? void 0 : zv.couldntRunInJoinedGame()) && void 0 !== vv ? vv : null
            }();
            null !== vv && (0, sv.b)(vv)
          }(), Sv.e.value(void 0)) : uN("The server ended the game as it joined");
        case "failed":
          if (!Nv.reloading) {
            if (null !== dv) return dv;
            if ((Nv.error instanceof tv.k || Nv.error instanceof tv.e) && Nv.error.code === hv.b.serverUpdating.code) {
              if (zv.aborted) return uN("Left the game while it loaded");
              const {
                gameNameWithVariation: vv,
                lobbyName: Pv
              } = (0, Wv.c)();
              return EN(vv, Pv), uN("The server is updating")
            }
            return Nv.error instanceof yv.d ? Sv.e.errorWithCode(Nv.error.messageKey, ev.o.SHADER_PACK, {
              severity: "medium"
            }) : Sv.e.errorWithCode(function(vv) {
              if (vv instanceof tv.u || vv instanceof mv.g) return vv.message;
              if (rN(vv)) return (0, xv.k)(vv.code, vv.serverText);
              return xv.g
            }(Nv.error), ev.o.CONNECT_TO_GAME_SERVER, {
              error: kN(Nv.error) ? Nv.error : void 0,
              severity: XN(Nv.error),
              gameServerUnreachable: (0, qv.c)(Nv.error),
              rematch: (0, cv.d)(Nv.error),
              gameRefused: (0, Gv.d)(Nv.error)
            })
          }
          return uN("Reloading into the new build");
        case "stopped":
          return uN("The game client stopped, and shows why");
        case "ev":
          return uN("Left the game while it loaded")
      }
    }

    function rN(vv) {
      return vv instanceof tv.k || vv instanceof tv.e && "attach" !== vv.stage
    }

    function kN(vv) {
      return !(vv instanceof tv.u) && !rN(vv) && void 0 === (0, qv.c)(vv)
    }

    function XN(vv) {
      return rN(vv) ? vv instanceof tv.e && (0, xv.h)(vv.code).requiresRefresh ? "medium" : "low" : kN(vv) || vv instanceof tv.u ? "medium" : "low"
    }

    function uN(vv) {
      return Sv.e.errorWithCode(vv, ev.o.CONNECT_TO_GAME_SERVER, {
        severity: "low",
        ev: !0
      })
    }
    class vl {
      leave(vv) {
        if ((0, jv.e)()) {
          var zv, Pv;
          if ((0, gv.c)()) return;
          (0, wv.c)(!0 === (null === (zv = (0, jv.o)()) || void 0 === zv || null === (Pv = zv.currentViewer) || void 0 === Pv ? void 0 : Pv.unsavedChanges), vv)
        } else this.leaveLive()
      }
      leaveLive() {
        var vv;
        tN && (null === (vv = Xd()) || void 0 === vv || vv.endGamePack());
        if (!AN) return;
        AN = !1, (0, iv.g)();
        try {
          var zv;
          null === (zv = (0, Fv.s)()) || void 0 === zv || zv.clearWasmCameraScreen()
        } catch (hv) {
          console.error("[bloxd-wasm-client] the camera screen didn't clear", hv)
        }
        const {
          gameNameWithVariation: Pv
        } = (0, Wv.c)();
        try {
          Nd()
        } finally {
          (0, Wv.o)({
            websocketUrl: null
          }), dv.j.zC("leaveGame", {
            gameNameWithVariation: Pv
          }), (0, lv.O)()
        }
      }
      isReplay() {
        return (0, jv.e)()
      }
    }
  },
  40304: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Sv,
      h: () => hv,
      k: () => pv,
      n: () => gv
    });
    const hv = 12e4,
      Sv = 3e4,
      ev = {
        hidden: () => "undefined" !== typeof document && document.hidden,
        listen: vv => "undefined" === typeof document ? () => {} : (document.addEventListener("visibilitychange", vv), () => {
          document.removeEventListener("visibilitychange", vv)
        })
      };

    function gv(vv) {
      return `it sent no start within ${Math.round(vv)} ms`
    }
    class pv {
      constructor(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ev;
        this.timeoutMs = vv, this.onTimeout = zv, this.now = Pv, this.visibility = hv, this.timer = null, this.counted = 0, this.step = null, this.unlisten = void 0, this.unlisten = hv.listen((() => {
          this.onVisibility()
        })), hv.hidden() || this.next()
      }
      cancel() {
        this.pause(), this.unlisten()
      }
      onVisibility() {
        this.visibility.hidden() ? (this.counted += this.credit(), this.pause()) : null === this.timer && this.next()
      }
      credit() {
        const vv = this.step;
        return null === vv ? 0 : Math.min(this.now() - vv.at, vv.ms)
      }
      pause() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), this.step = null
      }
      next() {
        const vv = this.timeoutMs - this.counted;
        if (vv <= 0) return void this.arm(1e3, (() => {
          this.cancel(), this.onTimeout(this.counted)
        }));
        const zv = Math.min(vv, 5e3);
        this.step = {
          at: this.now(),
          ms: zv
        }, this.arm(zv, (() => {
          this.counted += this.credit(), this.step = null, this.next()
        }))
      }
      arm(vv, zv) {
        this.timer = setTimeout((() => {
          this.timer = null, zv()
        }), vv)
      }
    }
  },
  37271: (vv, zv, Pv) => {
    function hv(vv) {
      return "string" !== typeof vv || 2 !== vv.length && ":" !== vv[2] ? null : vv[0] + vv[1]
    }
    Pv.d(zv, {
      A: () => sv,
      c: () => Cv,
      f: () => mv,
      g: () => jv,
      j: () => pv,
      n: () => gv,
      p: () => ev,
      s: () => dv,
      w: () => iv
    });
    const Sv = ["op:ytInitialPlayerResponse.adPlacements", "op:ytInitialPlayerResponse.playerAds", "op:ytInitialPlayerResponse.adSlots", "op:playerResponse.adPlacements", "op:playerResponse.playerAds", "op:playerResponse.adSlots"];

    function ev(vv) {
      if (function(vv) {
          for (let zv = 0; zv < Sv.length; zv++)
            if (vv === Sv[zv]) return !0;
          return !1
        }(vv)) return !1;
      const zv = hv(vv);
      return "op" === zv || "ep" === zv || "wi" === zv || "pp" === zv || "fp:call" === vv || "fp:t" === vv
    }

    function gv(vv) {
      return "fp" === hv(vv) && !ev(vv)
    }

    function pv(vv) {
      if ("string" !== typeof vv) return !1;
      return "o" === vv[0] && "p" === vv[1] && (2 === vv.length || ":" === vv[2]) || "fp:call" === vv || "2" === vv || "t" === vv || "a" === vv
    }

    function dv(vv, zv) {
      return `~${function(vv){return vv.length<2?vv:":"===vv[1]?vv[0]:vv[0]+vv[1]}(zv)}~${vv}`
    }
    const Nv = 200;

    function lv(vv) {
      let zv = vv.length - 1;
      for (let Pv = 0; Pv < 2; Pv++) {
        const Pv = zv;
        for (; zv >= 0 && vv[zv] >= "0" && vv[zv] <= "9";) zv--;
        if (zv < 0 || zv === Pv || ":" !== vv[zv]) return -1;
        zv--
      }
      return zv + 1
    }

    function Tv(vv) {
      return "unknown" === vv || lv(vv) >= 0
    }

    function Wv(vv, zv) {
      return vv[zv] >= "\ud800" && vv[zv] <= "\udbff" && zv + 1 < vv.length && vv[zv + 1] >= "\udc00" && vv[zv + 1] <= "\udfff" ? 2 : 1
    }

    function wv(vv, zv, Pv) {
      return 2 === Pv ? 4 : vv[zv] <= "\x7f" ? 1 : vv[zv] <= "\u07ff" ? 2 : 3
    }

    function av(vv, zv, Pv) {
      let hv = 0;
      for (; hv < zv;) {
        const zv = Wv(vv, hv),
          Sv = wv(vv, hv, zv);
        if (Sv > Pv) break;
        Pv -= Sv, hv += zv
      }
      return hv
    }

    function sv(vv) {
      let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0;
      if ("string" !== typeof vv || vv.length > Nv || !Tv(vv)) return "t";
      let Pv = 2;
      for (let pv = 0; pv < vv.length;) {
        const zv = Wv(vv, pv);
        Pv += wv(vv, pv, zv), pv += zv
      }
      if (Pv <= zv) return `t ${vv}`;
      const hv = lv(vv),
        Sv = zv - 2 - (vv.length - hv);
      if (Sv < 0) return "t";
      const ev = av(vv, hv, Sv);
      let gv = "t ";
      for (let pv = 0; pv < ev; pv++) gv += vv[pv];
      for (let pv = hv; pv < vv.length; pv++) gv += vv[pv];
      return gv
    }
    const Cv = 62;

    function iv(vv) {
      let zv = "so:";
      const Pv = av(vv, vv.length, Cv - zv.length);
      for (let hv = 0; hv < Pv; hv++) zv += vv[hv];
      return zv
    }
    const cv = "BABYLON ",
      Gv = "DECODE ";

    function mv(vv) {
      return iv(cv + vv)
    }

    function jv(vv) {
      return iv(Gv + vv)
    }
  },
  40185: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => hv
    });
    const hv = {
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
  37503: vv => {
    vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v+LFy8yvH//noGXl/ccuq8A/vQKd00yOdIAAAAASUVORK5CYII="
  },
  37487: vv => {
    vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAALUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMnBzczN8/PjxHLLPAORwCnfkvOdNAAAAAElFTkSuQmCC"
  },
  37511: vv => {
    vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  },
  37482: vv => {
    vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAANUlEQVQYGWM8CwQMeAATHjmw1JBQAHLp/wMHDvy/ePHi/4CAgP937tz5Ly6u+5/P3uw/KAgAgjwWhHm22JoAAAAASUVORK5CYII="
  },
  37496: vv => {
    vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  },
  38263: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => ev
    });
    var hv = Pv(3466);
    const Sv = ["none", "idle", "now"];

    function ev() {
      const vv = () => (0, hv.C)();
      return {
        memoryBytes: () => (0, hv.u)().buffer.byteLength,
        reserveUpFront: zv => vv().gT(zv),
        reserveAhead: zv => vv().eT(zv),
        setCeiling: zv => {
          vv().pT(zv)
        },
        lowWater: () => Sv[vv().ST()] ?? "none",
        stats: () => function(vv) {
          const zv = new Uint32Array((0, hv.u)().buffer, vv, 17),
            Pv = vv => zv[vv] ?? 0,
            Sv = vv => ({
              upFront: Pv(vv),
              ahead: Pv(vv + 1),
              onDemandInFrame: Pv(vv + 2),
              onDemand: Pv(vv + 3)
            });
          return {
            memoryBytes: Pv(0),
            initialBytes: Pv(1),
            liveBytes: Pv(2),
            peakLiveBytes: Pv(3),
            headroomBytes: Pv(4),
            unusedBytes: Pv(5),
            ceilingBytes: Pv(6),
            reservesRefused: Pv(7),
            grows: Sv(8),
            grownBytes: Sv(12),
            allocationsRefused: Pv(16)
          }
        }(vv().dT()),
        takeBallast: () => vv().NT(),
        takePressure: () => vv().lT()
      }
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);