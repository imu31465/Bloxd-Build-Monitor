export const id = 73;
export const ids = [73];
export const modules = {
  4368: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => vb
    });
    var Ab = Ub(19),
      Mb = Ub(22),
      Tb = Ub(1216),
      Eb = Ub(2621);
    const Yb = 3e4,
      Bb = 1e3;

    function eb() {
      return "visible" === document.visibilityState && "inGame" === Ab.c.get("gameState") && (0, Tb.i)()
    }

    function vb(bb, ab) {
      (0, Eb.u)() || function(bb, ab, Ub) {
        let Ab = 0;
        const Mb = setInterval((() => {
          ab() && (Ab += Bb, Ab >= bb && (clearInterval(Mb), Ub()))
        }), Bb)
      }(Yb, eb, (() => {
        ab().then((() => {
          bb(`saved for the player after ${Yb/1e3} s of play`), (0, Eb.C)(), Mb.m.IR("chat", {
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
  8779: (bb, ab, Ub) => {
    function Ab(bb, ab) {
      return 0 === bb.length ? 0 : bb[Math.min(bb.length - 1, Math.floor(ab * bb.length))]
    }
    Ub.d(ab, {
      d: () => Ab
    })
  },
  37290: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => eb,
      c: () => vb,
      f: () => zb,
      i: () => Db,
      k: () => Zb
    });
    var Ab = Ub(4368),
      Mb = Ub(8779),
      Tb = Ub(2621);
    const Eb = 20,
      Yb = ["totalMs", "slotMs", "workerMs", "applyMs", "ahead", "inFlight", "PL", "jobMs"];

    function Bb(bb) {
      return [...bb].sort(((bb, ab) => bb - ab))
    }
    const eb = [];

    function vb(bb, ab, Ub) {
      return `${bb},${ab},${Ub}`
    }
    class Lb {
      constructor() {
        this.pending = new Map, this.jobs = new Map, this.edits = [], this.nextEdit = 0, this.reported = 0, this.windowStart = performance.now(), this.frames = 0, this.lastFrameAt = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      edit(bb, ab) {
        var Ub;
        const Ab = null !== (Ub = this.pending.get(bb)) && void 0 !== Ub ? Ub : [];
        Ab.push({
          editAt: ab,
          meshJobId: 0
        }), this.pending.set(bb, Ab)
      }
      frame(bb) {
        this.lastFrameAt > 0 && (this.maxFrameMs = Math.max(this.maxFrameMs, bb - this.lastFrameAt)), this.lastFrameAt = bb, this.frames++, bb - this.windowStart >= 1e3 && this.summarise(bb)
      }
      sent(bb, ab, Ub, Ab, Mb, Tb, Eb) {
        this.jobs.set(ab, {
          sentAt: Eb,
          receivedAt: 0,
          ahead: Ub,
          inFlight: Ab,
          PL: Mb,
          jobMs: 0
        }), this.jobsSent++, this.maxAhead = Math.max(this.maxAhead, Ub), this.maxCapacity = Math.max(this.maxCapacity, Mb);
        for (const Bb of null !== (Yb = this.pending.get(bb)) && void 0 !== Yb ? Yb : []) {
          var Yb;
          Tb.includes(Bb.meshJobId) || (Bb.meshJobId = ab)
        }
      }
      received(bb, ab, Ub) {
        const Ab = this.jobs.get(bb);
        void 0 !== Ab && (this.roundTrips.push(Ub - Ab.sentAt), Ab.receivedAt = Ub, Ab.jobMs = ab)
      }
      failed(bb) {
        this.jobs.delete(bb)
      }
      reassign(bb, ab, Ub) {
        this.jobs.delete(ab);
        for (const Mb of null !== (Ab = this.pending.get(bb)) && void 0 !== Ab ? Ab : []) {
          var Ab;
          Mb.meshJobId === ab && (Mb.meshJobId = Ub)
        }
      }
      applied(bb, ab, Ub) {
        const Ab = this.jobs.get(ab);
        this.jobs.delete(ab), void 0 !== Ab && this.show(bb, Ab, Ub, (bb => bb.meshJobId === ab))
      }
      emptied(bb, ab) {
        const Ub = {
          sentAt: ab,
          receivedAt: ab,
          ahead: 0,
          inFlight: 0,
          PL: 0,
          jobMs: 0
        };
        this.show(bb, Ub, ab, (() => !0))
      }
      show(bb, ab, Ub, Ab) {
        const Mb = this.pending.get(bb);
        if (!Mb) return;
        const Tb = Mb.filter((Mb => !Ab(Mb) || (this.record(bb, Mb.editAt, ab, Ub), !1)));
        Tb.length > 0 ? this.pending.set(bb, Tb) : this.pending.delete(bb)
      }
      GX(bb) {
        this.reported += bb, this === Xb && this.reported >= Eb && null !== jb && (jb(), jb = null)
      }
      record(bb, ab, Ub, Ab) {
        const Mb = {
          totalMs: Ab - ab,
          slotMs: Ub.sentAt - ab,
          workerMs: Ub.receivedAt - Ub.sentAt,
          applyMs: Ab - Ub.receivedAt,
          ahead: Ub.ahead,
          inFlight: Ub.inFlight,
          PL: Ub.PL,
          jobMs: Ub.jobMs
        };
        if (this.edits[this.nextEdit] = Mb, this.nextEdit = (this.nextEdit + 1) % 500, this.windowEdits.push(Mb.totalMs), this.GX(1), Mb.totalMs < 100 || ++this.outliers > 5) return;
        const Eb = bb => Math.round(bb);
        (0, Tb.n)("remesh", `slow edit (${bb}) shown in ${Eb(Mb.totalMs)} ms: slot ${Eb(Mb.slotMs)}, worker ${Eb(Mb.workerMs)} (${Mb.ahead} ahead, ${Mb.inFlight}/${Mb.PL} in flight; job ${Eb(Mb.jobMs)}), apply ${Eb(Mb.applyMs)}`)
      }
      summarise(bb) {
        const ab = (bb - this.windowStart) / 1e3;
        for (const [Ub, Ab] of this.pending) {
          const ab = Ab.filter((ab => bb - ab.editAt <= 1e4));
          this.gaveUp += Ab.length - ab.length, this.GX(Ab.length - ab.length), ab.length > 0 ? this.pending.set(Ub, ab) : this.pending.delete(Ub)
        }
        for (const [Ub, Ab] of this.jobs) bb - Ab.sentAt > (Ab.receivedAt > 0 ? 1e4 : 6e4) && this.jobs.delete(Ub);
        if (this.jobsSent > 0 || this.roundTrips.length > 0 || this.windowEdits.length > 0 || this.gaveUp > 0) {
          const bb = Bb(this.roundTrips),
            Ub = Bb(this.windowEdits),
            Ab = Math.max(0, this.outliers - 5);
          (0, Tb.n)("remesh", `${Math.round(this.frames/ab)} fps (longest ${Math.round(this.maxFrameMs)} ms) | ${this.jobsSent} jobs sent, up to ${this.maxAhead} ahead on a worker, capacity ${this.maxCapacity} | round trip p50 ${Math.round((0,Mb.d)(bb,.5))} max ${Math.round((0,Mb.d)(bb,1))} ms | ${Ub.length} edits shown, p50 ${Math.round((0,Mb.d)(Ub,.5))} max ${Math.round((0,Mb.d)(Ub,1))} ms${Ab>0?`, ${Ab} more slow`:""}${this.gaveUp>0?`, ${this.gaveUp} never shown`:""}`)
        }
        this.windowStart = bb, this.frames = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      stats() {
        const bb = Yb.map((bb => {
          const ab = Bb(this.edits.map((ab => ab[bb])));
          return `${bb}: p50 ${Math.round((0,Mb.d)(ab,.5))} p90 ${Math.round((0,Mb.d)(ab,.9))} max ${Math.round((0,Mb.d)(ab,1))}`
        }));
        return [`${this.edits.length} edits`, ...bb].join("\n")
      }
      dump() {
        const bb = this.edits.map((bb => Yb.map((ab => Math.round(10 * bb[ab]) / 10)).join(",")));
        return [this.stats(), Yb.join(","), ...bb].join("\n")
      }
    }
    class Pb {
      constructor(bb, ab) {
        this.log = bb, this.VL = ab
      }
      edit(bb, ab, Ub) {
        const [Ab, Mb, Tb] = this.VL.lL.hAb(bb, ab, Ub), Eb = this.VL.lL.Jj.nj(Ab, Mb, Tb);
        Eb && Eb.Vj && this.log.edit(vb(Ab, Mb, Tb), performance.now())
      }
      sent(bb, ab, Ub, Ab, Mb) {
        this.log.sent(vb(bb.i, bb.j, bb.k), ab, Ub, Ab, Mb, eb, performance.now())
      }
      received(bb) {
        this.log.received(bb.meshJobId, bb.jobMs, performance.now())
      }
      failed(bb) {
        this.log.failed(bb)
      }
      applied(bb, ab) {
        this.log.applied(vb(bb.i, bb.j, bb.k), ab, performance.now())
      }
    }
    let Xb = null,
      jb = null,
      Rb = !1,
      kb = null;

    function yb() {
      return new Promise((bb => {
        null !== Xb && Xb.reported >= Eb ? bb() : jb = bb
      }))
    }

    function Zb() {
      const bb = new Lb;
      return Xb = bb, (0, Tb.j)("remesh", (() => bb.dump())), (0, Tb.e)("remeshStats", (() => {
        console.log(bb.stats())
      })), Rb || (Rb = !0, (0, Ab.b)((bb => {
        (0, Tb.n)("remesh", bb)
      }), yb)), bb
    }

    function Db(bb) {
      const ab = Zb();
      kb = new Pb(ab, bb), bb.zD.meshProbe = kb, bb.on("beforeRender", (() => {
        ab.frame(performance.now())
      }))
    }

    function zb(bb, ab, Ub) {
      var Ab;
      null === (Ab = kb) || void 0 === Ab || Ab.edit(bb, ab, Ub)
    }
  },
  37092: (bb, ab, Ub) => {
    function Ab(bb) {
      return "string" !== typeof bb || 2 !== bb.length && ":" !== bb[2] ? null : bb[0] + bb[1]
    }
    Ub.d(ab, {
      c: () => kb,
      e: () => Db,
      i: () => Yb,
      m: () => Eb,
      n: () => Tb,
      q: () => Bb,
      u: () => yb,
      x: () => Rb
    });
    const Mb = ["op:ytInitialPlayerResponse.adPlacements", "op:ytInitialPlayerResponse.playerAds", "op:ytInitialPlayerResponse.adSlots", "op:playerResponse.adPlacements", "op:playerResponse.playerAds", "op:playerResponse.adSlots"];

    function Tb(bb) {
      if (function(bb) {
          for (let ab = 0; ab < Mb.length; ab++)
            if (bb === Mb[ab]) return !0;
          return !1
        }(bb)) return !1;
      const ab = Ab(bb);
      return "op" === ab || "ep" === ab || "wi" === ab || "pp" === ab || "fp:call" === bb || "fp:t" === bb
    }

    function Eb(bb) {
      return "fp" === Ab(bb) && !Tb(bb)
    }

    function Yb(bb) {
      if ("string" !== typeof bb) return !1;
      return "o" === bb[0] && "p" === bb[1] && (2 === bb.length || ":" === bb[2]) || "fp:call" === bb || "2" === bb || "t" === bb || "a" === bb
    }

    function Bb(bb, ab) {
      return `~${function(bb){return bb.length<2?bb:":"===bb[1]?bb[0]:bb[0]+bb[1]}(ab)}~${bb}`
    }
    const eb = 200;

    function vb(bb) {
      let ab = bb.length - 1;
      for (let Ub = 0; Ub < 2; Ub++) {
        const Ub = ab;
        for (; ab >= 0 && bb[ab] >= "0" && bb[ab] <= "9";) ab--;
        if (ab < 0 || ab === Ub || ":" !== bb[ab]) return -1;
        ab--
      }
      return ab + 1
    }

    function Lb(bb) {
      return "unknown" === bb || vb(bb) >= 0
    }

    function Pb(bb, ab) {
      return bb[ab] >= "\ud800" && bb[ab] <= "\udbff" && ab + 1 < bb.length && bb[ab + 1] >= "\udc00" && bb[ab + 1] <= "\udfff" ? 2 : 1
    }

    function Xb(bb, ab, Ub) {
      return 2 === Ub ? 4 : bb[ab] <= "\x7f" ? 1 : bb[ab] <= "\u07ff" ? 2 : 3
    }

    function jb(bb, ab, Ub) {
      let Ab = 0;
      for (; Ab < ab;) {
        const ab = Pb(bb, Ab),
          Mb = Xb(bb, Ab, ab);
        if (Mb > Ub) break;
        Ub -= Mb, Ab += ab
      }
      return Ab
    }

    function Rb(bb) {
      let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0;
      if ("string" !== typeof bb || bb.length > eb || !Lb(bb)) return "t";
      let Ub = 2;
      for (let Yb = 0; Yb < bb.length;) {
        const ab = Pb(bb, Yb);
        Ub += Xb(bb, Yb, ab), Yb += ab
      }
      if (Ub <= ab) return `t ${bb}`;
      const Ab = vb(bb),
        Mb = ab - 2 - (bb.length - Ab);
      if (Mb < 0) return "t";
      const Tb = jb(bb, Ab, Mb);
      let Eb = "t ";
      for (let Yb = 0; Yb < Tb; Yb++) Eb += bb[Yb];
      for (let Yb = Ab; Yb < bb.length; Yb++) Eb += bb[Yb];
      return Eb
    }
    const kb = 62;

    function yb(bb) {
      let ab = "so:";
      const Ub = jb(bb, bb.length, kb - ab.length);
      for (let Ab = 0; Ab < Ub; Ab++) ab += bb[Ab];
      return ab
    }
    const Zb = "BABYLON ";

    function Db(bb) {
      return yb(Zb + bb)
    }
  },
  37323: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v+LFy8yvH//noGXl/ccuq8A/vQKd00yOdIAAAAASUVORK5CYII="
  },
  37314: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAALUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMnBzczN8/PjxHLLPAORwCnfkvOdNAAAAAElFTkSuQmCC"
  },
  37331: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  },
  37312: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAANUlEQVQYGWM8CwQMeAATHjmw1JBQAHLp/wMHDvy/ePHi/4CAgP937tz5Ly6u+5/P3uw/KAgAgjwWhHm22JoAAAAASUVORK5CYII="
  },
  37318: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);