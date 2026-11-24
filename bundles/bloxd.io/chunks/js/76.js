export const id = 76;
export const ids = [76];
export const modules = {
  4626: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Rm
    });
    var hm = fm(23),
      Am = fm(31),
      am = fm(1286),
      xm = fm(2813);
    const wm = 3e4,
      Dm = 1e3;

    function im() {
      return "visible" === document.visibilityState && "inGame" === hm.c.get("gameState") && (0, am.r)()
    }

    function Rm(mm, Tm) {
      (0, xm.p)() || function(mm, Tm, fm) {
        let hm = 0;
        const Am = setInterval((() => {
          Tm() && (hm += Dm, hm >= mm && (clearInterval(Am), fm()))
        }), Dm)
      }(wm, im, (() => {
        Tm().then((() => {
          mm(`saved for the player after ${wm/1e3} s of play`), (0, xm.w)(), Am.j.gp("chat", {
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
  34146: (mm, Tm, fm) => {
    function hm(mm, Tm) {
      return 0 === mm.length ? 0 : mm[Math.min(mm.length - 1, Math.floor(Tm * mm.length))]
    }

    function Am(mm) {
      return mm.toFixed(1)
    }
    fm.d(Tm, {
      e: () => Am,
      g: () => hm
    })
  },
  38001: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => im,
      c: () => Rm,
      d: () => Km,
      f: () => Im,
      h: () => Vm
    });
    var hm = fm(4626),
      Am = fm(34146),
      am = fm(2813);
    const xm = 20,
      wm = ["totalMs", "slotMs", "workerMs", "applyMs", "ahead", "inFlight", "yp", "jobMs"];

    function Dm(mm) {
      return [...mm].sort(((mm, Tm) => mm - Tm))
    }
    const im = [];

    function Rm(mm, Tm, fm) {
      return `${mm},${Tm},${fm}`
    }
    class pm {
      constructor() {
        this.pending = new Map, this.jobs = new Map, this.edits = [], this.nextEdit = 0, this.reported = 0, this.windowStart = performance.now(), this.frames = 0, this.lastFrameAt = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      edit(mm, Tm) {
        var fm;
        const hm = null !== (fm = this.pending.get(mm)) && void 0 !== fm ? fm : [];
        hm.push({
          editAt: Tm,
          meshJobId: 0
        }), this.pending.set(mm, hm)
      }
      frame(mm) {
        this.lastFrameAt > 0 && (this.maxFrameMs = Math.max(this.maxFrameMs, mm - this.lastFrameAt)), this.lastFrameAt = mm, this.frames++, mm - this.windowStart >= 1e3 && this.summarise(mm)
      }
      sent(mm, Tm, fm, hm, Am, am, xm) {
        this.jobs.set(Tm, {
          sentAt: xm,
          receivedAt: 0,
          ahead: fm,
          inFlight: hm,
          yp: Am,
          jobMs: 0
        }), this.jobsSent++, this.maxAhead = Math.max(this.maxAhead, fm), this.maxCapacity = Math.max(this.maxCapacity, Am);
        for (const Dm of null !== (wm = this.pending.get(mm)) && void 0 !== wm ? wm : []) {
          var wm;
          am.includes(Dm.meshJobId) || (Dm.meshJobId = Tm)
        }
      }
      received(mm, Tm, fm) {
        const hm = this.jobs.get(mm);
        void 0 !== hm && (this.roundTrips.push(fm - hm.sentAt), hm.receivedAt = fm, hm.jobMs = Tm)
      }
      failed(mm) {
        this.jobs.delete(mm)
      }
      reassign(mm, Tm, fm) {
        this.jobs.delete(Tm);
        for (const Am of null !== (hm = this.pending.get(mm)) && void 0 !== hm ? hm : []) {
          var hm;
          Am.meshJobId === Tm && (Am.meshJobId = fm)
        }
      }
      applied(mm, Tm, fm) {
        const hm = this.jobs.get(Tm);
        this.jobs.delete(Tm), void 0 !== hm && this.show(mm, hm, fm, (mm => mm.meshJobId === Tm))
      }
      emptied(mm, Tm) {
        const fm = {
          sentAt: Tm,
          receivedAt: Tm,
          ahead: 0,
          inFlight: 0,
          yp: 0,
          jobMs: 0
        };
        this.show(mm, fm, Tm, (() => !0))
      }
      show(mm, Tm, fm, hm) {
        const Am = this.pending.get(mm);
        if (!Am) return;
        const am = Am.filter((Am => !hm(Am) || (this.record(mm, Am.editAt, Tm, fm), !1)));
        am.length > 0 ? this.pending.set(mm, am) : this.pending.delete(mm)
      }
      IO(mm) {
        this.reported += mm, this === om && this.reported >= xm && null !== Om && (Om(), Om = null)
      }
      record(mm, Tm, fm, hm) {
        const Am = {
          totalMs: hm - Tm,
          slotMs: fm.sentAt - Tm,
          workerMs: fm.receivedAt - fm.sentAt,
          applyMs: hm - fm.receivedAt,
          ahead: fm.ahead,
          inFlight: fm.inFlight,
          yp: fm.yp,
          jobMs: fm.jobMs
        };
        if (this.edits[this.nextEdit] = Am, this.nextEdit = (this.nextEdit + 1) % 500, this.windowEdits.push(Am.totalMs), this.IO(1), Am.totalMs < 100 || ++this.outliers > 5) return;
        const xm = mm => Math.round(mm);
        (0, am.g)("remesh", `slow edit (${mm}) shown in ${xm(Am.totalMs)} ms: slot ${xm(Am.slotMs)}, worker ${xm(Am.workerMs)} (${Am.ahead} ahead, ${Am.inFlight}/${Am.yp} in flight; job ${xm(Am.jobMs)}), apply ${xm(Am.applyMs)}`)
      }
      summarise(mm) {
        const Tm = (mm - this.windowStart) / 1e3;
        for (const [fm, hm] of this.pending) {
          const Tm = hm.filter((Tm => mm - Tm.editAt <= 1e4));
          this.gaveUp += hm.length - Tm.length, this.IO(hm.length - Tm.length), Tm.length > 0 ? this.pending.set(fm, Tm) : this.pending.delete(fm)
        }
        for (const [fm, hm] of this.jobs) mm - hm.sentAt > (hm.receivedAt > 0 ? 1e4 : 6e4) && this.jobs.delete(fm);
        if (this.jobsSent > 0 || this.roundTrips.length > 0 || this.windowEdits.length > 0 || this.gaveUp > 0) {
          const mm = Dm(this.roundTrips),
            fm = Dm(this.windowEdits),
            hm = Math.max(0, this.outliers - 5);
          (0, am.g)("remesh", `${Math.round(this.frames/Tm)} fps (longest ${Math.round(this.maxFrameMs)} ms) | ${this.jobsSent} jobs sent, up to ${this.maxAhead} ahead on a worker, capacity ${this.maxCapacity} | round trip p50 ${Math.round((0,Am.g)(mm,.5))} max ${Math.round((0,Am.g)(mm,1))} ms | ${fm.length} edits shown, p50 ${Math.round((0,Am.g)(fm,.5))} max ${Math.round((0,Am.g)(fm,1))} ms${hm>0?`, ${hm} more slow`:""}${this.gaveUp>0?`, ${this.gaveUp} never shown`:""}`)
        }
        this.windowStart = mm, this.frames = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      stats() {
        const mm = wm.map((mm => {
          const Tm = Dm(this.edits.map((Tm => Tm[mm])));
          return `${mm}: p50 ${Math.round((0,Am.g)(Tm,.5))} p90 ${Math.round((0,Am.g)(Tm,.9))} max ${Math.round((0,Am.g)(Tm,1))}`
        }));
        return [`${this.edits.length} edits`, ...mm].join("\n")
      }
      dump() {
        const mm = this.edits.map((mm => wm.map((Tm => Math.round(10 * mm[Tm]) / 10)).join(",")));
        return [this.stats(), wm.join(","), ...mm].join("\n")
      }
    }
    class Em {
      constructor(mm, Tm) {
        this.log = mm, this.IE = Tm
      }
      edit(mm, Tm, fm) {
        const [hm, Am, am] = this.IE.oE.fAm(mm, Tm, fm), xm = this.IE.oE.HY.yY(hm, Am, am);
        xm && xm.XY && this.log.edit(Rm(hm, Am, am), performance.now())
      }
      sent(mm, Tm, fm, hm, Am) {
        this.log.sent(Rm(mm.i, mm.j, mm.k), Tm, fm, hm, Am, im, performance.now())
      }
      received(mm) {
        this.log.received(mm.meshJobId, mm.jobMs, performance.now())
      }
      failed(mm) {
        this.log.failed(mm)
      }
      applied(mm, Tm) {
        this.log.applied(Rm(mm.i, mm.j, mm.k), Tm, performance.now())
      }
    }
    let om = null,
      Om = null,
      Ym = !1,
      qm = null;

    function jm() {
      return new Promise((mm => {
        null !== om && om.reported >= xm ? mm() : Om = mm
      }))
    }

    function Vm() {
      const mm = new pm;
      return om = mm, (0, am.f)("remesh", (() => mm.dump())), (0, am.b)("remeshStats", (() => {
        console.log(mm.stats())
      })), Ym || (Ym = !0, (0, hm.c)((mm => {
        (0, am.g)("remesh", mm)
      }), jm)), mm
    }

    function Im(mm) {
      const Tm = Vm();
      qm = new Em(Tm, mm), mm.MI.meshProbe = qm, mm.on("beforeRender", (() => {
        Tm.frame(performance.now())
      }))
    }

    function Km(mm, Tm, fm) {
      var hm;
      null === (hm = qm) || void 0 === hm || hm.edit(mm, Tm, fm)
    }
  },
  37754: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => hm
    });
    const hm = {
      noaReady: null,
      chunkRequested: null,
      beforeServerListeners: null,
      wasmNetReady: null
    }
  },
  37793: (mm, Tm, fm) => {
    function hm(mm) {
      return "string" !== typeof mm || 2 !== mm.length && ":" !== mm[2] ? null : mm[0] + mm[1]
    }
    fm.d(Tm, {
      d: () => qm,
      g: () => nm,
      k: () => Qm,
      l: () => Jm,
      p: () => wm,
      q: () => xm,
      s: () => am,
      u: () => Dm,
      v: () => jm,
      y: () => Ym
    });
    const Am = ["op:ytInitialPlayerResponse.adPlacements", "op:ytInitialPlayerResponse.playerAds", "op:ytInitialPlayerResponse.adSlots", "op:playerResponse.adPlacements", "op:playerResponse.playerAds", "op:playerResponse.adSlots"];

    function am(mm) {
      if (function(mm) {
          for (let Tm = 0; Tm < Am.length; Tm++)
            if (mm === Am[Tm]) return !0;
          return !1
        }(mm)) return !1;
      const Tm = hm(mm);
      return "op" === Tm || "ep" === Tm || "wi" === Tm || "pp" === Tm || "fp:call" === mm || "fp:t" === mm
    }

    function xm(mm) {
      return "fp" === hm(mm) && !am(mm)
    }

    function wm(mm) {
      if ("string" !== typeof mm) return !1;
      return "o" === mm[0] && "p" === mm[1] && (2 === mm.length || ":" === mm[2]) || "fp:call" === mm || "2" === mm || "t" === mm || "a" === mm
    }

    function Dm(mm, Tm) {
      return `~${function(mm){return mm.length<2?mm:":"===mm[1]?mm[0]:mm[0]+mm[1]}(Tm)}~${mm}`
    }
    const im = 200;

    function Rm(mm) {
      let Tm = mm.length - 1;
      for (let fm = 0; fm < 2; fm++) {
        const fm = Tm;
        for (; Tm >= 0 && mm[Tm] >= "0" && mm[Tm] <= "9";) Tm--;
        if (Tm < 0 || Tm === fm || ":" !== mm[Tm]) return -1;
        Tm--
      }
      return Tm + 1
    }

    function pm(mm) {
      return "unknown" === mm || Rm(mm) >= 0
    }

    function Em(mm, Tm) {
      return mm[Tm] >= "\ud800" && mm[Tm] <= "\udbff" && Tm + 1 < mm.length && mm[Tm + 1] >= "\udc00" && mm[Tm + 1] <= "\udfff" ? 2 : 1
    }

    function om(mm, Tm, fm) {
      return 2 === fm ? 4 : mm[Tm] <= "\x7f" ? 1 : mm[Tm] <= "\u07ff" ? 2 : 3
    }

    function Om(mm, Tm, fm) {
      let hm = 0;
      for (; hm < Tm;) {
        const Tm = Em(mm, hm),
          Am = om(mm, hm, Tm);
        if (Am > fm) break;
        fm -= Am, hm += Tm
      }
      return hm
    }

    function Ym(mm) {
      let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0;
      if ("string" !== typeof mm || mm.length > im || !pm(mm)) return "t";
      let fm = 2;
      for (let wm = 0; wm < mm.length;) {
        const Tm = Em(mm, wm);
        fm += om(mm, wm, Tm), wm += Tm
      }
      if (fm <= Tm) return `t ${mm}`;
      const hm = Rm(mm),
        Am = Tm - 2 - (mm.length - hm);
      if (Am < 0) return "t";
      const am = Om(mm, hm, Am);
      let xm = "t ";
      for (let wm = 0; wm < am; wm++) xm += mm[wm];
      for (let wm = hm; wm < mm.length; wm++) xm += mm[wm];
      return xm
    }
    const qm = 62;

    function jm(mm) {
      let Tm = "so:";
      const fm = Om(mm, mm.length, qm - Tm.length);
      for (let hm = 0; hm < fm; hm++) Tm += mm[hm];
      return Tm
    }
    const Vm = "BABYLON ",
      Im = "DECODE ",
      Km = "BABYLON@ ";

    function Qm(mm) {
      return jm(Vm + mm)
    }

    function nm(mm, Tm) {
      return jm(Km + mm + " " + Tm)
    }

    function Jm(mm) {
      return jm(Im + mm)
    }
  },
  38032: mm => {
    mm.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v+LFy8yvH//noGXl/ccuq8A/vQKd00yOdIAAAAASUVORK5CYII="
  },
  38020: mm => {
    mm.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAALUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMnBzczN8/PjxHLLPAORwCnfkvOdNAAAAAElFTkSuQmCC"
  },
  38038: mm => {
    mm.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  },
  38016: mm => {
    mm.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAANUlEQVQYGWM8CwQMeAATHjmw1JBQAHLp/wMHDvy/ePHi/4CAgP937tz5Ly6u+5/P3uw/KAgAgjwWhHm22JoAAAAASUVORK5CYII="
  },
  38025: mm => {
    mm.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);