export const id = 76;
export const ids = [76];
export const modules = {
  4807: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => IS
    });
    var tS = gS(24),
      bS = gS(31),
      XS = gS(1366),
      xS = gS(2953);
    const NS = 3e4,
      qS = 1e3;

    function uS() {
      return "visible" === document.visibilityState && "inGame" === tS.b.get("gameState") && (0, XS.v)()
    }

    function IS(SS, HS) {
      (0, xS.r)() || function(SS, HS, gS) {
        let tS = 0;
        const bS = setInterval((() => {
          HS() && (tS += qS, tS >= SS && (clearInterval(bS), gS()))
        }), qS)
      }(NS, uS, (() => {
        HS().then((() => {
          SS(`saved for the player after ${NS/1e3} s of play`), (0, xS.A)(), bS.k.cj("chat", {
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
  34082: (SS, HS, gS) => {
    function tS(SS, HS) {
      return 0 === SS.length ? 0 : SS[Math.min(SS.length - 1, Math.floor(HS * SS.length))]
    }

    function bS(SS) {
      return SS.toFixed(1)
    }
    gS.d(HS, {
      d: () => bS,
      h: () => tS
    })
  },
  37972: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => uS,
      e: () => IS,
      h: () => QS,
      j: () => PS,
      l: () => nS
    });
    var tS = gS(4807),
      bS = gS(34082),
      XS = gS(2953);
    const xS = 20,
      NS = ["totalMs", "slotMs", "workerMs", "applyMs", "ahead", "inFlight", "hf", "jobMs"];

    function qS(SS) {
      return [...SS].sort(((SS, HS) => SS - HS))
    }
    const uS = [];

    function IS(SS, HS, gS) {
      return `${SS},${HS},${gS}`
    }
    class fS {
      constructor() {
        this.pending = new Map, this.jobs = new Map, this.edits = [], this.nextEdit = 0, this.reported = 0, this.windowStart = performance.now(), this.frames = 0, this.lastFrameAt = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      edit(SS, HS) {
        var gS;
        const tS = null !== (gS = this.pending.get(SS)) && void 0 !== gS ? gS : [];
        tS.push({
          editAt: HS,
          meshJobId: 0
        }), this.pending.set(SS, tS)
      }
      frame(SS) {
        this.lastFrameAt > 0 && (this.maxFrameMs = Math.max(this.maxFrameMs, SS - this.lastFrameAt)), this.lastFrameAt = SS, this.frames++, SS - this.windowStart >= 1e3 && this.summarise(SS)
      }
      sent(SS, HS, gS, tS, bS, XS, xS) {
        this.jobs.set(HS, {
          sentAt: xS,
          receivedAt: 0,
          ahead: gS,
          inFlight: tS,
          hf: bS,
          jobMs: 0
        }), this.jobsSent++, this.maxAhead = Math.max(this.maxAhead, gS), this.maxCapacity = Math.max(this.maxCapacity, bS);
        for (const qS of null !== (NS = this.pending.get(SS)) && void 0 !== NS ? NS : []) {
          var NS;
          XS.includes(qS.meshJobId) || (qS.meshJobId = HS)
        }
      }
      received(SS, HS, gS) {
        const tS = this.jobs.get(SS);
        void 0 !== tS && (this.roundTrips.push(gS - tS.sentAt), tS.receivedAt = gS, tS.jobMs = HS)
      }
      failed(SS) {
        this.jobs.delete(SS)
      }
      reassign(SS, HS, gS) {
        this.jobs.delete(HS);
        for (const bS of null !== (tS = this.pending.get(SS)) && void 0 !== tS ? tS : []) {
          var tS;
          bS.meshJobId === HS && (bS.meshJobId = gS)
        }
      }
      applied(SS, HS, gS) {
        const tS = this.jobs.get(HS);
        this.jobs.delete(HS), void 0 !== tS && this.show(SS, tS, gS, (SS => SS.meshJobId === HS))
      }
      emptied(SS, HS) {
        const gS = {
          sentAt: HS,
          receivedAt: HS,
          ahead: 0,
          inFlight: 0,
          hf: 0,
          jobMs: 0
        };
        this.show(SS, gS, HS, (() => !0))
      }
      show(SS, HS, gS, tS) {
        const bS = this.pending.get(SS);
        if (!bS) return;
        const XS = bS.filter((bS => !tS(bS) || (this.record(SS, bS.editAt, HS, gS), !1)));
        XS.length > 0 ? this.pending.set(SS, XS) : this.pending.delete(SS)
      }
      tK(SS) {
        this.reported += SS, this === aS && this.reported >= xS && null !== KS && (KS(), KS = null)
      }
      record(SS, HS, gS, tS) {
        const bS = {
          totalMs: tS - HS,
          slotMs: gS.sentAt - HS,
          workerMs: gS.receivedAt - gS.sentAt,
          applyMs: tS - gS.receivedAt,
          ahead: gS.ahead,
          inFlight: gS.inFlight,
          hf: gS.hf,
          jobMs: gS.jobMs
        };
        if (this.edits[this.nextEdit] = bS, this.nextEdit = (this.nextEdit + 1) % 500, this.windowEdits.push(bS.totalMs), this.tK(1), bS.totalMs < 100 || ++this.outliers > 5) return;
        const xS = SS => Math.round(SS);
        (0, XS.i)("remesh", `slow edit (${SS}) shown in ${xS(bS.totalMs)} ms: slot ${xS(bS.slotMs)}, worker ${xS(bS.workerMs)} (${bS.ahead} ahead, ${bS.inFlight}/${bS.hf} in flight; job ${xS(bS.jobMs)}), apply ${xS(bS.applyMs)}`)
      }
      summarise(SS) {
        const HS = (SS - this.windowStart) / 1e3;
        for (const [gS, tS] of this.pending) {
          const HS = tS.filter((HS => SS - HS.editAt <= 1e4));
          this.gaveUp += tS.length - HS.length, this.tK(tS.length - HS.length), HS.length > 0 ? this.pending.set(gS, HS) : this.pending.delete(gS)
        }
        for (const [gS, tS] of this.jobs) SS - tS.sentAt > (tS.receivedAt > 0 ? 1e4 : 6e4) && this.jobs.delete(gS);
        if (this.jobsSent > 0 || this.roundTrips.length > 0 || this.windowEdits.length > 0 || this.gaveUp > 0) {
          const SS = qS(this.roundTrips),
            gS = qS(this.windowEdits),
            tS = Math.max(0, this.outliers - 5);
          (0, XS.i)("remesh", `${Math.round(this.frames/HS)} fps (longest ${Math.round(this.maxFrameMs)} ms) | ${this.jobsSent} jobs sent, up to ${this.maxAhead} ahead on a worker, capacity ${this.maxCapacity} | round trip p50 ${Math.round((0,bS.h)(SS,.5))} max ${Math.round((0,bS.h)(SS,1))} ms | ${gS.length} edits shown, p50 ${Math.round((0,bS.h)(gS,.5))} max ${Math.round((0,bS.h)(gS,1))} ms${tS>0?`, ${tS} more slow`:""}${this.gaveUp>0?`, ${this.gaveUp} never shown`:""}`)
        }
        this.windowStart = SS, this.frames = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      stats() {
        const SS = NS.map((SS => {
          const HS = qS(this.edits.map((HS => HS[SS])));
          return `${SS}: p50 ${Math.round((0,bS.h)(HS,.5))} p90 ${Math.round((0,bS.h)(HS,.9))} max ${Math.round((0,bS.h)(HS,1))}`
        }));
        return [`${this.edits.length} edits`, ...SS].join("\n")
      }
      dump() {
        const SS = this.edits.map((SS => NS.map((HS => Math.round(10 * SS[HS]) / 10)).join(",")));
        return [this.stats(), NS.join(","), ...SS].join("\n")
      }
    }
    class kS {
      constructor(SS, HS) {
        this.log = SS, this.qk = HS
      }
      edit(SS, HS, gS) {
        const [tS, bS, XS] = this.qk.gk.RtS(SS, HS, gS), xS = this.qk.gk.Pj.Qj(tS, bS, XS);
        xS && xS.Cj && this.log.edit(IS(tS, bS, XS), performance.now())
      }
      sent(SS, HS, gS, tS, bS) {
        this.log.sent(IS(SS.i, SS.j, SS.k), HS, gS, tS, bS, uS, performance.now())
      }
      received(SS) {
        this.log.received(SS.meshJobId, SS.jobMs, performance.now())
      }
      failed(SS) {
        this.log.failed(SS)
      }
      applied(SS, HS) {
        this.log.applied(IS(SS.i, SS.j, SS.k), HS, performance.now())
      }
    }
    let aS = null,
      KS = null,
      jS = !1,
      GS = null;

    function CS() {
      return new Promise((SS => {
        null !== aS && aS.reported >= xS ? SS() : KS = SS
      }))
    }

    function nS() {
      const SS = new fS;
      return aS = SS, (0, XS.h)("remesh", (() => SS.dump())), (0, XS.c)("remeshStats", (() => {
        console.log(SS.stats())
      })), jS || (jS = !0, (0, tS.e)((SS => {
        (0, XS.i)("remesh", SS)
      }), CS)), SS
    }

    function PS(SS) {
      const HS = nS();
      GS = new kS(HS, SS), SS.jD.meshProbe = GS, SS.on("beforeRender", (() => {
        HS.frame(performance.now())
      }))
    }

    function QS(SS, HS, gS) {
      var tS;
      null === (tS = GS) || void 0 === tS || tS.edit(SS, HS, gS)
    }
  },
  37723: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => tS
    });
    const tS = {
      noaReady: null,
      chunkRequested: null,
      beforeServerListeners: null,
      wasmNetReady: null
    }
  },
  37757: (SS, HS, gS) => {
    function tS(SS) {
      return "string" !== typeof SS || 2 !== SS.length && ":" !== SS[2] ? null : SS[0] + SS[1]
    }
    gS.d(HS, {
      A: () => jS,
      e: () => GS,
      h: () => wS,
      j: () => DS,
      k: () => hS,
      l: () => NS,
      m: () => xS,
      q: () => XS,
      u: () => qS,
      y: () => CS
    });
    const bS = ["op:ytInitialPlayerResponse.adPlacements", "op:ytInitialPlayerResponse.playerAds", "op:ytInitialPlayerResponse.adSlots", "op:playerResponse.adPlacements", "op:playerResponse.playerAds", "op:playerResponse.adSlots"];

    function XS(SS) {
      if (function(SS) {
          for (let HS = 0; HS < bS.length; HS++)
            if (SS === bS[HS]) return !0;
          return !1
        }(SS)) return !1;
      const HS = tS(SS);
      return "op" === HS || "ep" === HS || "wi" === HS || "pp" === HS || "fp:call" === SS || "fp:t" === SS
    }

    function xS(SS) {
      return "fp" === tS(SS) && !XS(SS)
    }

    function NS(SS) {
      if ("string" !== typeof SS) return !1;
      return "o" === SS[0] && "p" === SS[1] && (2 === SS.length || ":" === SS[2]) || "fp:call" === SS || "2" === SS || "t" === SS || "a" === SS
    }

    function qS(SS, HS) {
      return `~${function(SS){return SS.length<2?SS:":"===SS[1]?SS[0]:SS[0]+SS[1]}(HS)}~${SS}`
    }
    const uS = 200;

    function IS(SS) {
      let HS = SS.length - 1;
      for (let gS = 0; gS < 2; gS++) {
        const gS = HS;
        for (; HS >= 0 && SS[HS] >= "0" && SS[HS] <= "9";) HS--;
        if (HS < 0 || HS === gS || ":" !== SS[HS]) return -1;
        HS--
      }
      return HS + 1
    }

    function fS(SS) {
      return "unknown" === SS || IS(SS) >= 0
    }

    function kS(SS, HS) {
      return SS[HS] >= "\ud800" && SS[HS] <= "\udbff" && HS + 1 < SS.length && SS[HS + 1] >= "\udc00" && SS[HS + 1] <= "\udfff" ? 2 : 1
    }

    function aS(SS, HS, gS) {
      return 2 === gS ? 4 : SS[HS] <= "\x7f" ? 1 : SS[HS] <= "\u07ff" ? 2 : 3
    }

    function KS(SS, HS, gS) {
      let tS = 0;
      for (; tS < HS;) {
        const HS = kS(SS, tS),
          bS = aS(SS, tS, HS);
        if (bS > gS) break;
        gS -= bS, tS += HS
      }
      return tS
    }

    function jS(SS) {
      let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0;
      if ("string" !== typeof SS || SS.length > uS || !fS(SS)) return "t";
      let gS = 2;
      for (let NS = 0; NS < SS.length;) {
        const HS = kS(SS, NS);
        gS += aS(SS, NS, HS), NS += HS
      }
      if (gS <= HS) return `t ${SS}`;
      const tS = IS(SS),
        bS = HS - 2 - (SS.length - tS);
      if (bS < 0) return "t";
      const XS = KS(SS, tS, bS);
      let xS = "t ";
      for (let NS = 0; NS < XS; NS++) xS += SS[NS];
      for (let NS = tS; NS < SS.length; NS++) xS += SS[NS];
      return xS
    }
    const GS = 62;

    function CS(SS) {
      let HS = "so:";
      const gS = KS(SS, SS.length, GS - HS.length);
      for (let tS = 0; tS < gS; tS++) HS += SS[tS];
      return HS
    }
    const nS = "BABYLON ",
      PS = "DECODE ",
      QS = "BABYLON@ ";

    function DS(SS) {
      return CS(nS + SS)
    }

    function wS(SS, HS) {
      return CS(QS + SS + " " + HS)
    }

    function hS(SS) {
      return CS(PS + SS)
    }
  },
  38003: SS => {
    SS.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v+LFy8yvH//noGXl/ccuq8A/vQKd00yOdIAAAAASUVORK5CYII="
  },
  37991: SS => {
    SS.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAALUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMnBzczN8/PjxHLLPAORwCnfkvOdNAAAAAElFTkSuQmCC"
  },
  38011: SS => {
    SS.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  },
  37983: SS => {
    SS.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAANUlEQVQYGWM8CwQMeAATHjmw1JBQAHLp/wMHDvy/ePHi/4CAgP937tz5Ly6u+5/P3uw/KAgAgjwWhHm22JoAAAAASUVORK5CYII="
  },
  37997: SS => {
    SS.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);