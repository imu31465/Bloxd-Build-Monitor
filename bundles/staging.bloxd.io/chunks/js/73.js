export const id = 73;
export const ids = [73];
export const modules = {
  4347: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => cU
    });
    var tU = gU(21),
      pU = gU(24),
      EU = gU(1287),
      PU = gU(2624);
    const TU = 3e4,
      qU = 1e3;

    function KU() {
      return "visible" === document.visibilityState && "inGame" === tU.b.get("gameState") && (0, EU.r)()
    }

    function cU(UU, RU) {
      (0, PU.n)() || function(UU, RU, gU) {
        let tU = 0;
        const pU = setInterval((() => {
          RU() && (tU += qU, tU >= UU && (clearInterval(pU), gU()))
        }), qU)
      }(TU, KU, (() => {
        RU().then((() => {
          UU(`saved for the player after ${TU/1e3} s of play`), (0, PU.t)(), pU.p.yh("chat", {
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
  8861: (UU, RU, gU) => {
    function tU(UU, RU) {
      return 0 === UU.length ? 0 : UU[Math.min(UU.length - 1, Math.floor(RU * UU.length))]
    }
    gU.d(RU, {
      d: () => tU
    })
  },
  37479: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => KU,
      f: () => cU,
      i: () => xU,
      l: () => fU,
      p: () => WU
    });
    var tU = gU(4347),
      pU = gU(8861),
      EU = gU(2624);
    const PU = 20,
      TU = ["totalMs", "slotMs", "workerMs", "applyMs", "ahead", "inFlight", "hG", "jobMs"];

    function qU(UU) {
      return [...UU].sort(((UU, RU) => UU - RU))
    }
    const KU = [];

    function cU(UU, RU, gU) {
      return `${UU},${RU},${gU}`
    }
    class GU {
      constructor() {
        this.pending = new Map, this.jobs = new Map, this.edits = [], this.nextEdit = 0, this.reported = 0, this.windowStart = performance.now(), this.frames = 0, this.lastFrameAt = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      edit(UU, RU) {
        var gU;
        const tU = null !== (gU = this.pending.get(UU)) && void 0 !== gU ? gU : [];
        tU.push({
          editAt: RU,
          meshJobId: 0
        }), this.pending.set(UU, tU)
      }
      frame(UU) {
        this.lastFrameAt > 0 && (this.maxFrameMs = Math.max(this.maxFrameMs, UU - this.lastFrameAt)), this.lastFrameAt = UU, this.frames++, UU - this.windowStart >= 1e3 && this.summarise(UU)
      }
      sent(UU, RU, gU, tU, pU, EU, PU) {
        this.jobs.set(RU, {
          sentAt: PU,
          receivedAt: 0,
          ahead: gU,
          inFlight: tU,
          hG: pU,
          jobMs: 0
        }), this.jobsSent++, this.maxAhead = Math.max(this.maxAhead, gU), this.maxCapacity = Math.max(this.maxCapacity, pU);
        for (const qU of null !== (TU = this.pending.get(UU)) && void 0 !== TU ? TU : []) {
          var TU;
          EU.includes(qU.meshJobId) || (qU.meshJobId = RU)
        }
      }
      received(UU, RU, gU) {
        const tU = this.jobs.get(UU);
        void 0 !== tU && (this.roundTrips.push(gU - tU.sentAt), tU.receivedAt = gU, tU.jobMs = RU)
      }
      failed(UU) {
        this.jobs.delete(UU)
      }
      reassign(UU, RU, gU) {
        this.jobs.delete(RU);
        for (const pU of null !== (tU = this.pending.get(UU)) && void 0 !== tU ? tU : []) {
          var tU;
          pU.meshJobId === RU && (pU.meshJobId = gU)
        }
      }
      applied(UU, RU, gU) {
        const tU = this.jobs.get(RU);
        this.jobs.delete(RU), void 0 !== tU && this.show(UU, tU, gU, (UU => UU.meshJobId === RU))
      }
      emptied(UU, RU) {
        const gU = {
          sentAt: RU,
          receivedAt: RU,
          ahead: 0,
          inFlight: 0,
          hG: 0,
          jobMs: 0
        };
        this.show(UU, gU, RU, (() => !0))
      }
      show(UU, RU, gU, tU) {
        const pU = this.pending.get(UU);
        if (!pU) return;
        const EU = pU.filter((pU => !tU(pU) || (this.record(UU, pU.editAt, RU, gU), !1)));
        EU.length > 0 ? this.pending.set(UU, EU) : this.pending.delete(UU)
      }
      ku(UU) {
        this.reported += UU, this === uU && this.reported >= PU && null !== CU && (CU(), CU = null)
      }
      record(UU, RU, gU, tU) {
        const pU = {
          totalMs: tU - RU,
          slotMs: gU.sentAt - RU,
          workerMs: gU.receivedAt - gU.sentAt,
          applyMs: tU - gU.receivedAt,
          ahead: gU.ahead,
          inFlight: gU.inFlight,
          hG: gU.hG,
          jobMs: gU.jobMs
        };
        if (this.edits[this.nextEdit] = pU, this.nextEdit = (this.nextEdit + 1) % 500, this.windowEdits.push(pU.totalMs), this.ku(1), pU.totalMs < 100 || ++this.outliers > 5) return;
        const PU = UU => Math.round(UU);
        (0, EU.h)("remesh", `slow edit (${UU}) shown in ${PU(pU.totalMs)} ms: slot ${PU(pU.slotMs)}, worker ${PU(pU.workerMs)} (${pU.ahead} ahead, ${pU.inFlight}/${pU.hG} in flight; job ${PU(pU.jobMs)}), apply ${PU(pU.applyMs)}`)
      }
      summarise(UU) {
        const RU = (UU - this.windowStart) / 1e3;
        for (const [gU, tU] of this.pending) {
          const RU = tU.filter((RU => UU - RU.editAt <= 1e4));
          this.gaveUp += tU.length - RU.length, this.ku(tU.length - RU.length), RU.length > 0 ? this.pending.set(gU, RU) : this.pending.delete(gU)
        }
        for (const [gU, tU] of this.jobs) UU - tU.sentAt > (tU.receivedAt > 0 ? 1e4 : 6e4) && this.jobs.delete(gU);
        if (this.jobsSent > 0 || this.roundTrips.length > 0 || this.windowEdits.length > 0 || this.gaveUp > 0) {
          const UU = qU(this.roundTrips),
            gU = qU(this.windowEdits),
            tU = Math.max(0, this.outliers - 5);
          (0, EU.h)("remesh", `${Math.round(this.frames/RU)} fps (longest ${Math.round(this.maxFrameMs)} ms) | ${this.jobsSent} jobs sent, up to ${this.maxAhead} ahead on a worker, capacity ${this.maxCapacity} | round trip p50 ${Math.round((0,pU.d)(UU,.5))} max ${Math.round((0,pU.d)(UU,1))} ms | ${gU.length} edits shown, p50 ${Math.round((0,pU.d)(gU,.5))} max ${Math.round((0,pU.d)(gU,1))} ms${tU>0?`, ${tU} more slow`:""}${this.gaveUp>0?`, ${this.gaveUp} never shown`:""}`)
        }
        this.windowStart = UU, this.frames = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      stats() {
        const UU = TU.map((UU => {
          const RU = qU(this.edits.map((RU => RU[UU])));
          return `${UU}: p50 ${Math.round((0,pU.d)(RU,.5))} p90 ${Math.round((0,pU.d)(RU,.9))} max ${Math.round((0,pU.d)(RU,1))}`
        }));
        return [`${this.edits.length} edits`, ...UU].join("\n")
      }
      dump() {
        const UU = this.edits.map((UU => TU.map((RU => Math.round(10 * UU[RU]) / 10)).join(",")));
        return [this.stats(), TU.join(","), ...UU].join("\n")
      }
    }
    class jU {
      constructor(UU, RU) {
        this.log = UU, this.LG = RU
      }
      edit(UU, RU, gU) {
        const [tU, pU, EU] = this.LG.FG.XtU(UU, RU, gU), PU = this.LG.FG.ph.Eh(tU, pU, EU);
        PU && PU.Rh && this.log.edit(cU(tU, pU, EU), performance.now())
      }
      sent(UU, RU, gU, tU, pU) {
        this.log.sent(cU(UU.i, UU.j, UU.k), RU, gU, tU, pU, KU, performance.now())
      }
      received(UU) {
        this.log.received(UU.meshJobId, UU.jobMs, performance.now())
      }
      failed(UU) {
        this.log.failed(UU)
      }
      applied(UU, RU) {
        this.log.applied(cU(UU.i, UU.j, UU.k), RU, performance.now())
      }
    }
    let uU = null,
      CU = null,
      hU = !1,
      QU = null;

    function eU() {
      return new Promise((UU => {
        null !== uU && uU.reported >= PU ? UU() : CU = UU
      }))
    }

    function WU() {
      const UU = new GU;
      return uU = UU, (0, EU.g)("remesh", (() => UU.dump())), (0, EU.b)("remeshStats", (() => {
        console.log(UU.stats())
      })), hU || (hU = !0, (0, tU.e)((UU => {
        (0, EU.h)("remesh", UU)
      }), eU)), UU
    }

    function fU(UU) {
      const RU = WU();
      QU = new jU(RU, UU), UU.JI.meshProbe = QU, UU.on("beforeRender", (() => {
        RU.frame(performance.now())
      }))
    }

    function xU(UU, RU, gU) {
      var tU;
      null === (tU = QU) || void 0 === tU || tU.edit(UU, RU, gU)
    }
  },
  37280: (UU, RU, gU) => {
    function tU(UU) {
      return "string" !== typeof UU || 2 !== UU.length && ":" !== UU[2] ? null : UU[0] + UU[1]
    }
    gU.d(RU, {
      b: () => QU,
      f: () => fU,
      g: () => TU,
      j: () => PU,
      m: () => EU,
      n: () => qU,
      r: () => eU,
      t: () => hU
    });
    const pU = ["op:ytInitialPlayerResponse.adPlacements", "op:ytInitialPlayerResponse.playerAds", "op:ytInitialPlayerResponse.adSlots", "op:playerResponse.adPlacements", "op:playerResponse.playerAds", "op:playerResponse.adSlots"];

    function EU(UU) {
      if (function(UU) {
          for (let RU = 0; RU < pU.length; RU++)
            if (UU === pU[RU]) return !0;
          return !1
        }(UU)) return !1;
      const RU = tU(UU);
      return "op" === RU || "ep" === RU || "wi" === RU || "pp" === RU || "fp:call" === UU || "fp:t" === UU
    }

    function PU(UU) {
      return "fp" === tU(UU) && !EU(UU)
    }

    function TU(UU) {
      if ("string" !== typeof UU) return !1;
      return "o" === UU[0] && "p" === UU[1] && (2 === UU.length || ":" === UU[2]) || "fp:call" === UU || "2" === UU || "t" === UU || "a" === UU
    }

    function qU(UU, RU) {
      return `~${function(UU){return UU.length<2?UU:":"===UU[1]?UU[0]:UU[0]+UU[1]}(RU)}~${UU}`
    }
    const KU = 200;

    function cU(UU) {
      let RU = UU.length - 1;
      for (let gU = 0; gU < 2; gU++) {
        const gU = RU;
        for (; RU >= 0 && UU[RU] >= "0" && UU[RU] <= "9";) RU--;
        if (RU < 0 || RU === gU || ":" !== UU[RU]) return -1;
        RU--
      }
      return RU + 1
    }

    function GU(UU) {
      return "unknown" === UU || cU(UU) >= 0
    }

    function jU(UU, RU) {
      return UU[RU] >= "\ud800" && UU[RU] <= "\udbff" && RU + 1 < UU.length && UU[RU + 1] >= "\udc00" && UU[RU + 1] <= "\udfff" ? 2 : 1
    }

    function uU(UU, RU, gU) {
      return 2 === gU ? 4 : UU[RU] <= "\x7f" ? 1 : UU[RU] <= "\u07ff" ? 2 : 3
    }

    function CU(UU, RU, gU) {
      let tU = 0;
      for (; tU < RU;) {
        const RU = jU(UU, tU),
          pU = uU(UU, tU, RU);
        if (pU > gU) break;
        gU -= pU, tU += RU
      }
      return tU
    }

    function hU(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0;
      if ("string" !== typeof UU || UU.length > KU || !GU(UU)) return "t";
      let gU = 2;
      for (let TU = 0; TU < UU.length;) {
        const RU = jU(UU, TU);
        gU += uU(UU, TU, RU), TU += RU
      }
      if (gU <= RU) return `t ${UU}`;
      const tU = cU(UU),
        pU = RU - 2 - (UU.length - tU);
      if (pU < 0) return "t";
      const EU = CU(UU, tU, pU);
      let PU = "t ";
      for (let TU = 0; TU < EU; TU++) PU += UU[TU];
      for (let TU = tU; TU < UU.length; TU++) PU += UU[TU];
      return PU
    }
    const QU = 62;

    function eU(UU) {
      let RU = "so:";
      const gU = CU(UU, UU.length, QU - RU.length);
      for (let tU = 0; tU < gU; tU++) RU += UU[tU];
      return RU
    }
    const WU = "BABYLON ";

    function fU(UU) {
      return eU(WU + UU)
    }
  },
  37515: UU => {
    UU.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v+LFy8yvH//noGXl/ccuq8A/vQKd00yOdIAAAAASUVORK5CYII="
  },
  37504: UU => {
    UU.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAALUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMnBzczN8/PjxHLLPAORwCnfkvOdNAAAAAElFTkSuQmCC"
  },
  37519: UU => {
    UU.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  },
  37496: UU => {
    UU.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAANUlEQVQYGWM8CwQMeAATHjmw1JBQAHLp/wMHDvy/ePHi/4CAgP937tz5Ly6u+5/P3uw/KAgAgjwWhHm22JoAAAAASUVORK5CYII="
  },
  37513: UU => {
    UU.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);