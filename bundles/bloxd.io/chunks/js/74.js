export const id = 74;
export const ids = [74];
export const modules = {
  4459: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => ab
    });
    var Bb = hb(13),
      Ob = hb(16),
      Gb = hb(1184),
      Ub = hb(2633);
    const Lb = 3e4,
      Yb = 1e3;

    function Sb() {
      return "visible" === document.visibilityState && "inGame" === Bb.d.get("gameState") && (0, Gb.m)()
    }

    function ab(bb, ub) {
      (0, Ub.s)() || function(bb, ub, hb) {
        let Bb = 0;
        const Ob = setInterval((() => {
          ub() && (Bb += Yb, Bb >= bb && (clearInterval(Ob), hb()))
        }), Yb)
      }(Lb, Sb, (() => {
        ub().then((() => {
          bb(`saved for the player after ${Lb/1e3} s of play`), (0, Ub.B)(), Ob.i.vp("chat", {
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
  8951: (bb, ub, hb) => {
    function Bb(bb, ub) {
      return 0 === bb.length ? 0 : bb[Math.min(bb.length - 1, Math.floor(ub * bb.length))]
    }

    function Ob(bb) {
      return bb.toFixed(1)
    }
    hb.d(ub, {
      c: () => Ob,
      g: () => Bb
    })
  },
  37539: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Sb,
      d: () => ab,
      g: () => Wb,
      j: () => Kb,
      k: () => lb
    });
    var Bb = hb(4459),
      Ob = hb(8951),
      Gb = hb(2633);
    const Ub = 20,
      Lb = ["totalMs", "slotMs", "workerMs", "applyMs", "ahead", "inFlight", "LH", "jobMs"];

    function Yb(bb) {
      return [...bb].sort(((bb, ub) => bb - ub))
    }
    const Sb = [];

    function ab(bb, ub, hb) {
      return `${bb},${ub},${hb}`
    }
    class Hb {
      constructor() {
        this.pending = new Map, this.jobs = new Map, this.edits = [], this.nextEdit = 0, this.reported = 0, this.windowStart = performance.now(), this.frames = 0, this.lastFrameAt = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      edit(bb, ub) {
        var hb;
        const Bb = null !== (hb = this.pending.get(bb)) && void 0 !== hb ? hb : [];
        Bb.push({
          editAt: ub,
          meshJobId: 0
        }), this.pending.set(bb, Bb)
      }
      frame(bb) {
        this.lastFrameAt > 0 && (this.maxFrameMs = Math.max(this.maxFrameMs, bb - this.lastFrameAt)), this.lastFrameAt = bb, this.frames++, bb - this.windowStart >= 1e3 && this.summarise(bb)
      }
      sent(bb, ub, hb, Bb, Ob, Gb, Ub) {
        this.jobs.set(ub, {
          sentAt: Ub,
          receivedAt: 0,
          ahead: hb,
          inFlight: Bb,
          LH: Ob,
          jobMs: 0
        }), this.jobsSent++, this.maxAhead = Math.max(this.maxAhead, hb), this.maxCapacity = Math.max(this.maxCapacity, Ob);
        for (const Yb of null !== (Lb = this.pending.get(bb)) && void 0 !== Lb ? Lb : []) {
          var Lb;
          Gb.includes(Yb.meshJobId) || (Yb.meshJobId = ub)
        }
      }
      received(bb, ub, hb) {
        const Bb = this.jobs.get(bb);
        void 0 !== Bb && (this.roundTrips.push(hb - Bb.sentAt), Bb.receivedAt = hb, Bb.jobMs = ub)
      }
      failed(bb) {
        this.jobs.delete(bb)
      }
      reassign(bb, ub, hb) {
        this.jobs.delete(ub);
        for (const Ob of null !== (Bb = this.pending.get(bb)) && void 0 !== Bb ? Bb : []) {
          var Bb;
          Ob.meshJobId === ub && (Ob.meshJobId = hb)
        }
      }
      applied(bb, ub, hb) {
        const Bb = this.jobs.get(ub);
        this.jobs.delete(ub), void 0 !== Bb && this.show(bb, Bb, hb, (bb => bb.meshJobId === ub))
      }
      emptied(bb, ub) {
        const hb = {
          sentAt: ub,
          receivedAt: ub,
          ahead: 0,
          inFlight: 0,
          LH: 0,
          jobMs: 0
        };
        this.show(bb, hb, ub, (() => !0))
      }
      show(bb, ub, hb, Bb) {
        const Ob = this.pending.get(bb);
        if (!Ob) return;
        const Gb = Ob.filter((Ob => !Bb(Ob) || (this.record(bb, Ob.editAt, ub, hb), !1)));
        Gb.length > 0 ? this.pending.set(bb, Gb) : this.pending.delete(bb)
      }
      iZ(bb) {
        this.reported += bb, this === Zb && this.reported >= Ub && null !== Xb && (Xb(), Xb = null)
      }
      record(bb, ub, hb, Bb) {
        const Ob = {
          totalMs: Bb - ub,
          slotMs: hb.sentAt - ub,
          workerMs: hb.receivedAt - hb.sentAt,
          applyMs: Bb - hb.receivedAt,
          ahead: hb.ahead,
          inFlight: hb.inFlight,
          LH: hb.LH,
          jobMs: hb.jobMs
        };
        if (this.edits[this.nextEdit] = Ob, this.nextEdit = (this.nextEdit + 1) % 500, this.windowEdits.push(Ob.totalMs), this.iZ(1), Ob.totalMs < 100 || ++this.outliers > 5) return;
        const Ub = bb => Math.round(bb);
        (0, Gb.l)("remesh", `slow edit (${bb}) shown in ${Ub(Ob.totalMs)} ms: slot ${Ub(Ob.slotMs)}, worker ${Ub(Ob.workerMs)} (${Ob.ahead} ahead, ${Ob.inFlight}/${Ob.LH} in flight; job ${Ub(Ob.jobMs)}), apply ${Ub(Ob.applyMs)}`)
      }
      summarise(bb) {
        const ub = (bb - this.windowStart) / 1e3;
        for (const [hb, Bb] of this.pending) {
          const ub = Bb.filter((ub => bb - ub.editAt <= 1e4));
          this.gaveUp += Bb.length - ub.length, this.iZ(Bb.length - ub.length), ub.length > 0 ? this.pending.set(hb, ub) : this.pending.delete(hb)
        }
        for (const [hb, Bb] of this.jobs) bb - Bb.sentAt > (Bb.receivedAt > 0 ? 1e4 : 6e4) && this.jobs.delete(hb);
        if (this.jobsSent > 0 || this.roundTrips.length > 0 || this.windowEdits.length > 0 || this.gaveUp > 0) {
          const bb = Yb(this.roundTrips),
            hb = Yb(this.windowEdits),
            Bb = Math.max(0, this.outliers - 5);
          (0, Gb.l)("remesh", `${Math.round(this.frames/ub)} fps (longest ${Math.round(this.maxFrameMs)} ms) | ${this.jobsSent} jobs sent, up to ${this.maxAhead} ahead on a worker, capacity ${this.maxCapacity} | round trip p50 ${Math.round((0,Ob.g)(bb,.5))} max ${Math.round((0,Ob.g)(bb,1))} ms | ${hb.length} edits shown, p50 ${Math.round((0,Ob.g)(hb,.5))} max ${Math.round((0,Ob.g)(hb,1))} ms${Bb>0?`, ${Bb} more slow`:""}${this.gaveUp>0?`, ${this.gaveUp} never shown`:""}`)
        }
        this.windowStart = bb, this.frames = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      stats() {
        const bb = Lb.map((bb => {
          const ub = Yb(this.edits.map((ub => ub[bb])));
          return `${bb}: p50 ${Math.round((0,Ob.g)(ub,.5))} p90 ${Math.round((0,Ob.g)(ub,.9))} max ${Math.round((0,Ob.g)(ub,1))}`
        }));
        return [`${this.edits.length} edits`, ...bb].join("\n")
      }
      dump() {
        const bb = this.edits.map((bb => Lb.map((ub => Math.round(10 * bb[ub]) / 10)).join(",")));
        return [this.stats(), Lb.join(","), ...bb].join("\n")
      }
    }
    class wb {
      constructor(bb, ub) {
        this.log = bb, this.PH = ub
      }
      edit(bb, ub, hb) {
        const [Bb, Ob, Gb] = this.PH.eH.SOb(bb, ub, hb), Ub = this.PH.eH.FX.fX(Bb, Ob, Gb);
        Ub && Ub.yX && this.log.edit(ab(Bb, Ob, Gb), performance.now())
      }
      sent(bb, ub, hb, Bb, Ob) {
        this.log.sent(ab(bb.i, bb.j, bb.k), ub, hb, Bb, Ob, Sb, performance.now())
      }
      received(bb) {
        this.log.received(bb.meshJobId, bb.jobMs, performance.now())
      }
      failed(bb) {
        this.log.failed(bb)
      }
      applied(bb, ub) {
        this.log.applied(ab(bb.i, bb.j, bb.k), ub, performance.now())
      }
    }
    let Zb = null,
      Xb = null,
      pb = !1,
      ob = null;

    function Ab() {
      return new Promise((bb => {
        null !== Zb && Zb.reported >= Ub ? bb() : Xb = bb
      }))
    }

    function lb() {
      const bb = new Hb;
      return Zb = bb, (0, Gb.i)("remesh", (() => bb.dump())), (0, Gb.b)("remeshStats", (() => {
        console.log(bb.stats())
      })), pb || (pb = !0, (0, Bb.d)((bb => {
        (0, Gb.l)("remesh", bb)
      }), Ab)), bb
    }

    function Kb(bb) {
      const ub = lb();
      ob = new wb(ub, bb), bb.zW.meshProbe = ob, bb.on("beforeRender", (() => {
        ub.frame(performance.now())
      }))
    }

    function Wb(bb, ub, hb) {
      var Bb;
      null === (Bb = ob) || void 0 === Bb || Bb.edit(bb, ub, hb)
    }
  },
  37371: (bb, ub, hb) => {
    function Bb(bb) {
      return "string" !== typeof bb || 2 !== bb.length && ":" !== bb[2] ? null : bb[0] + bb[1]
    }
    hb.d(ub, {
      b: () => ob,
      d: () => Wb,
      h: () => Cb,
      j: () => Lb,
      k: () => Ub,
      l: () => Gb,
      n: () => Yb,
      p: () => Ab,
      t: () => pb
    });
    const Ob = ["op:ytInitialPlayerResponse.adPlacements", "op:ytInitialPlayerResponse.playerAds", "op:ytInitialPlayerResponse.adSlots", "op:playerResponse.adPlacements", "op:playerResponse.playerAds", "op:playerResponse.adSlots"];

    function Gb(bb) {
      if (function(bb) {
          for (let ub = 0; ub < Ob.length; ub++)
            if (bb === Ob[ub]) return !0;
          return !1
        }(bb)) return !1;
      const ub = Bb(bb);
      return "op" === ub || "ep" === ub || "wi" === ub || "pp" === ub || "fp:call" === bb || "fp:t" === bb
    }

    function Ub(bb) {
      return "fp" === Bb(bb) && !Gb(bb)
    }

    function Lb(bb) {
      if ("string" !== typeof bb) return !1;
      return "o" === bb[0] && "p" === bb[1] && (2 === bb.length || ":" === bb[2]) || "fp:call" === bb || "2" === bb || "t" === bb || "a" === bb
    }

    function Yb(bb, ub) {
      return `~${function(bb){return bb.length<2?bb:":"===bb[1]?bb[0]:bb[0]+bb[1]}(ub)}~${bb}`
    }
    const Sb = 200;

    function ab(bb) {
      let ub = bb.length - 1;
      for (let hb = 0; hb < 2; hb++) {
        const hb = ub;
        for (; ub >= 0 && bb[ub] >= "0" && bb[ub] <= "9";) ub--;
        if (ub < 0 || ub === hb || ":" !== bb[ub]) return -1;
        ub--
      }
      return ub + 1
    }

    function Hb(bb) {
      return "unknown" === bb || ab(bb) >= 0
    }

    function wb(bb, ub) {
      return bb[ub] >= "\ud800" && bb[ub] <= "\udbff" && ub + 1 < bb.length && bb[ub + 1] >= "\udc00" && bb[ub + 1] <= "\udfff" ? 2 : 1
    }

    function Zb(bb, ub, hb) {
      return 2 === hb ? 4 : bb[ub] <= "\x7f" ? 1 : bb[ub] <= "\u07ff" ? 2 : 3
    }

    function Xb(bb, ub, hb) {
      let Bb = 0;
      for (; Bb < ub;) {
        const ub = wb(bb, Bb),
          Ob = Zb(bb, Bb, ub);
        if (Ob > hb) break;
        hb -= Ob, Bb += ub
      }
      return Bb
    }

    function pb(bb) {
      let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0;
      if ("string" !== typeof bb || bb.length > Sb || !Hb(bb)) return "t";
      let hb = 2;
      for (let Lb = 0; Lb < bb.length;) {
        const ub = wb(bb, Lb);
        hb += Zb(bb, Lb, ub), Lb += ub
      }
      if (hb <= ub) return `t ${bb}`;
      const Bb = ab(bb),
        Ob = ub - 2 - (bb.length - Bb);
      if (Ob < 0) return "t";
      const Gb = Xb(bb, Bb, Ob);
      let Ub = "t ";
      for (let Lb = 0; Lb < Gb; Lb++) Ub += bb[Lb];
      for (let Lb = Bb; Lb < bb.length; Lb++) Ub += bb[Lb];
      return Ub
    }
    const ob = 62;

    function Ab(bb) {
      let ub = "so:";
      const hb = Xb(bb, bb.length, ob - ub.length);
      for (let Bb = 0; Bb < hb; Bb++) ub += bb[Bb];
      return ub
    }
    const lb = "BABYLON ",
      Kb = "DECODE ";

    function Wb(bb) {
      return Ab(lb + bb)
    }

    function Cb(bb) {
      return Ab(Kb + bb)
    }
  },
  37571: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v+LFy8yvH//noGXl/ccuq8A/vQKd00yOdIAAAAASUVORK5CYII="
  },
  37557: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAALUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMnBzczN8/PjxHLLPAORwCnfkvOdNAAAAAElFTkSuQmCC"
  },
  37578: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  },
  37553: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAANUlEQVQYGWM8CwQMeAATHjmw1JBQAHLp/wMHDvy/ePHi/4CAgP937tz5Ly6u+5/P3uw/KAgAgjwWhHm22JoAAAAASUVORK5CYII="
  },
  37563: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);