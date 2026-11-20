export const id = 73;
export const ids = [73];
export const modules = {
  4418: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => fb
    });
    var kb = sb(19),
      Wb = sb(26),
      ab = sb(1287),
      Tb = sb(2680);
    const Ub = 3e4,
      Ib = 1e3;

    function Hb() {
      return "visible" === document.visibilityState && "inGame" === kb.d.get("gameState") && (0, ab.r)()
    }

    function fb(bb, cb) {
      (0, Tb.s)() || function(bb, cb, sb) {
        let kb = 0;
        const Wb = setInterval((() => {
          cb() && (kb += Ib, kb >= bb && (clearInterval(Wb), sb()))
        }), Ib)
      }(Ub, Hb, (() => {
        cb().then((() => {
          bb(`saved for the player after ${Ub/1e3} s of play`), (0, Tb.B)(), Wb.j.QQ("chat", {
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
  8805: (bb, cb, sb) => {
    function kb(bb, cb) {
      return 0 === bb.length ? 0 : bb[Math.min(bb.length - 1, Math.floor(cb * bb.length))]
    }
    sb.d(cb, {
      d: () => kb
    })
  },
  37532: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Hb,
      f: () => fb,
      g: () => Vb,
      h: () => Nb,
      l: () => Cb
    });
    var kb = sb(4418),
      Wb = sb(8805),
      ab = sb(2680);
    const Tb = 20,
      Ub = ["totalMs", "slotMs", "workerMs", "applyMs", "ahead", "inFlight", "GM", "jobMs"];

    function Ib(bb) {
      return [...bb].sort(((bb, cb) => bb - cb))
    }
    const Hb = [];

    function fb(bb, cb, sb) {
      return `${bb},${cb},${sb}`
    }
    class Mb {
      constructor() {
        this.pending = new Map, this.jobs = new Map, this.edits = [], this.nextEdit = 0, this.reported = 0, this.windowStart = performance.now(), this.frames = 0, this.lastFrameAt = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      edit(bb, cb) {
        var sb;
        const kb = null !== (sb = this.pending.get(bb)) && void 0 !== sb ? sb : [];
        kb.push({
          editAt: cb,
          meshJobId: 0
        }), this.pending.set(bb, kb)
      }
      frame(bb) {
        this.lastFrameAt > 0 && (this.maxFrameMs = Math.max(this.maxFrameMs, bb - this.lastFrameAt)), this.lastFrameAt = bb, this.frames++, bb - this.windowStart >= 1e3 && this.summarise(bb)
      }
      sent(bb, cb, sb, kb, Wb, ab, Tb) {
        this.jobs.set(cb, {
          sentAt: Tb,
          receivedAt: 0,
          ahead: sb,
          inFlight: kb,
          GM: Wb,
          jobMs: 0
        }), this.jobsSent++, this.maxAhead = Math.max(this.maxAhead, sb), this.maxCapacity = Math.max(this.maxCapacity, Wb);
        for (const Ib of null !== (Ub = this.pending.get(bb)) && void 0 !== Ub ? Ub : []) {
          var Ub;
          ab.includes(Ib.meshJobId) || (Ib.meshJobId = cb)
        }
      }
      received(bb, cb, sb) {
        const kb = this.jobs.get(bb);
        void 0 !== kb && (this.roundTrips.push(sb - kb.sentAt), kb.receivedAt = sb, kb.jobMs = cb)
      }
      failed(bb) {
        this.jobs.delete(bb)
      }
      reassign(bb, cb, sb) {
        this.jobs.delete(cb);
        for (const Wb of null !== (kb = this.pending.get(bb)) && void 0 !== kb ? kb : []) {
          var kb;
          Wb.meshJobId === cb && (Wb.meshJobId = sb)
        }
      }
      applied(bb, cb, sb) {
        const kb = this.jobs.get(cb);
        this.jobs.delete(cb), void 0 !== kb && this.show(bb, kb, sb, (bb => bb.meshJobId === cb))
      }
      emptied(bb, cb) {
        const sb = {
          sentAt: cb,
          receivedAt: cb,
          ahead: 0,
          inFlight: 0,
          GM: 0,
          jobMs: 0
        };
        this.show(bb, sb, cb, (() => !0))
      }
      show(bb, cb, sb, kb) {
        const Wb = this.pending.get(bb);
        if (!Wb) return;
        const ab = Wb.filter((Wb => !kb(Wb) || (this.record(bb, Wb.editAt, cb, sb), !1)));
        ab.length > 0 ? this.pending.set(bb, ab) : this.pending.delete(bb)
      }
      lm(bb) {
        this.reported += bb, this === nb && this.reported >= Tb && null !== mb && (mb(), mb = null)
      }
      record(bb, cb, sb, kb) {
        const Wb = {
          totalMs: kb - cb,
          slotMs: sb.sentAt - cb,
          workerMs: sb.receivedAt - sb.sentAt,
          applyMs: kb - sb.receivedAt,
          ahead: sb.ahead,
          inFlight: sb.inFlight,
          GM: sb.GM,
          jobMs: sb.jobMs
        };
        if (this.edits[this.nextEdit] = Wb, this.nextEdit = (this.nextEdit + 1) % 500, this.windowEdits.push(Wb.totalMs), this.lm(1), Wb.totalMs < 100 || ++this.outliers > 5) return;
        const Tb = bb => Math.round(bb);
        (0, ab.m)("remesh", `slow edit (${bb}) shown in ${Tb(Wb.totalMs)} ms: slot ${Tb(Wb.slotMs)}, worker ${Tb(Wb.workerMs)} (${Wb.ahead} ahead, ${Wb.inFlight}/${Wb.GM} in flight; job ${Tb(Wb.jobMs)}), apply ${Tb(Wb.applyMs)}`)
      }
      summarise(bb) {
        const cb = (bb - this.windowStart) / 1e3;
        for (const [sb, kb] of this.pending) {
          const cb = kb.filter((cb => bb - cb.editAt <= 1e4));
          this.gaveUp += kb.length - cb.length, this.lm(kb.length - cb.length), cb.length > 0 ? this.pending.set(sb, cb) : this.pending.delete(sb)
        }
        for (const [sb, kb] of this.jobs) bb - kb.sentAt > (kb.receivedAt > 0 ? 1e4 : 6e4) && this.jobs.delete(sb);
        if (this.jobsSent > 0 || this.roundTrips.length > 0 || this.windowEdits.length > 0 || this.gaveUp > 0) {
          const bb = Ib(this.roundTrips),
            sb = Ib(this.windowEdits),
            kb = Math.max(0, this.outliers - 5);
          (0, ab.m)("remesh", `${Math.round(this.frames/cb)} fps (longest ${Math.round(this.maxFrameMs)} ms) | ${this.jobsSent} jobs sent, up to ${this.maxAhead} ahead on a worker, capacity ${this.maxCapacity} | round trip p50 ${Math.round((0,Wb.d)(bb,.5))} max ${Math.round((0,Wb.d)(bb,1))} ms | ${sb.length} edits shown, p50 ${Math.round((0,Wb.d)(sb,.5))} max ${Math.round((0,Wb.d)(sb,1))} ms${kb>0?`, ${kb} more slow`:""}${this.gaveUp>0?`, ${this.gaveUp} never shown`:""}`)
        }
        this.windowStart = bb, this.frames = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      stats() {
        const bb = Ub.map((bb => {
          const cb = Ib(this.edits.map((cb => cb[bb])));
          return `${bb}: p50 ${Math.round((0,Wb.d)(cb,.5))} p90 ${Math.round((0,Wb.d)(cb,.9))} max ${Math.round((0,Wb.d)(cb,1))}`
        }));
        return [`${this.edits.length} edits`, ...bb].join("\n")
      }
      dump() {
        const bb = this.edits.map((bb => Ub.map((cb => Math.round(10 * bb[cb]) / 10)).join(",")));
        return [this.stats(), Ub.join(","), ...bb].join("\n")
      }
    }
    class Xb {
      constructor(bb, cb) {
        this.log = bb, this.eX = cb
      }
      edit(bb, cb, sb) {
        const [kb, Wb, ab] = this.eX.fX.Ekb(bb, cb, sb), Tb = this.eX.fX.Gl.Kl(kb, Wb, ab);
        Tb && Tb.il && this.log.edit(fb(kb, Wb, ab), performance.now())
      }
      sent(bb, cb, sb, kb, Wb) {
        this.log.sent(fb(bb.i, bb.j, bb.k), cb, sb, kb, Wb, Hb, performance.now())
      }
      received(bb) {
        this.log.received(bb.meshJobId, bb.jobMs, performance.now())
      }
      failed(bb) {
        this.log.failed(bb)
      }
      applied(bb, cb) {
        this.log.applied(fb(bb.i, bb.j, bb.k), cb, performance.now())
      }
    }
    let nb = null,
      mb = null,
      lb = !1,
      Qb = null;

    function eb() {
      return new Promise((bb => {
        null !== nb && nb.reported >= Tb ? bb() : mb = bb
      }))
    }

    function Cb() {
      const bb = new Mb;
      return nb = bb, (0, ab.k)("remesh", (() => bb.dump())), (0, ab.e)("remeshStats", (() => {
        console.log(bb.stats())
      })), lb || (lb = !0, (0, kb.d)((bb => {
        (0, ab.m)("remesh", bb)
      }), eb)), bb
    }

    function Nb(bb) {
      const cb = Cb();
      Qb = new Xb(cb, bb), bb.HV.meshProbe = Qb, bb.on("beforeRender", (() => {
        cb.frame(performance.now())
      }))
    }

    function Vb(bb, cb, sb) {
      var kb;
      null === (kb = Qb) || void 0 === kb || kb.edit(bb, cb, sb)
    }
  },
  37340: (bb, cb, sb) => {
    function kb(bb) {
      return "string" !== typeof bb || 2 !== bb.length && ":" !== bb[2] ? null : bb[0] + bb[1]
    }
    sb.d(cb, {
      b: () => Qb,
      e: () => Nb,
      f: () => Ub,
      j: () => Tb,
      k: () => ab,
      m: () => Ib,
      o: () => eb,
      q: () => lb
    });
    const Wb = ["op:ytInitialPlayerResponse.adPlacements", "op:ytInitialPlayerResponse.playerAds", "op:ytInitialPlayerResponse.adSlots", "op:playerResponse.adPlacements", "op:playerResponse.playerAds", "op:playerResponse.adSlots"];

    function ab(bb) {
      if (function(bb) {
          for (let cb = 0; cb < Wb.length; cb++)
            if (bb === Wb[cb]) return !0;
          return !1
        }(bb)) return !1;
      const cb = kb(bb);
      return "op" === cb || "ep" === cb || "wi" === cb || "pp" === cb || "fp:call" === bb || "fp:t" === bb
    }

    function Tb(bb) {
      return "fp" === kb(bb) && !ab(bb)
    }

    function Ub(bb) {
      if ("string" !== typeof bb) return !1;
      return "o" === bb[0] && "p" === bb[1] && (2 === bb.length || ":" === bb[2]) || "fp:call" === bb || "2" === bb || "t" === bb || "a" === bb
    }

    function Ib(bb, cb) {
      return `~${function(bb){return bb.length<2?bb:":"===bb[1]?bb[0]:bb[0]+bb[1]}(cb)}~${bb}`
    }
    const Hb = 200;

    function fb(bb) {
      let cb = bb.length - 1;
      for (let sb = 0; sb < 2; sb++) {
        const sb = cb;
        for (; cb >= 0 && bb[cb] >= "0" && bb[cb] <= "9";) cb--;
        if (cb < 0 || cb === sb || ":" !== bb[cb]) return -1;
        cb--
      }
      return cb + 1
    }

    function Mb(bb) {
      return "unknown" === bb || fb(bb) >= 0
    }

    function Xb(bb, cb) {
      return bb[cb] >= "\ud800" && bb[cb] <= "\udbff" && cb + 1 < bb.length && bb[cb + 1] >= "\udc00" && bb[cb + 1] <= "\udfff" ? 2 : 1
    }

    function nb(bb, cb, sb) {
      return 2 === sb ? 4 : bb[cb] <= "\x7f" ? 1 : bb[cb] <= "\u07ff" ? 2 : 3
    }

    function mb(bb, cb, sb) {
      let kb = 0;
      for (; kb < cb;) {
        const cb = Xb(bb, kb),
          Wb = nb(bb, kb, cb);
        if (Wb > sb) break;
        sb -= Wb, kb += cb
      }
      return kb
    }

    function lb(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0;
      if ("string" !== typeof bb || bb.length > Hb || !Mb(bb)) return "t";
      let sb = 2;
      for (let Ub = 0; Ub < bb.length;) {
        const cb = Xb(bb, Ub);
        sb += nb(bb, Ub, cb), Ub += cb
      }
      if (sb <= cb) return `t ${bb}`;
      const kb = fb(bb),
        Wb = cb - 2 - (bb.length - kb);
      if (Wb < 0) return "t";
      const ab = mb(bb, kb, Wb);
      let Tb = "t ";
      for (let Ub = 0; Ub < ab; Ub++) Tb += bb[Ub];
      for (let Ub = kb; Ub < bb.length; Ub++) Tb += bb[Ub];
      return Tb
    }
    const Qb = 62;

    function eb(bb) {
      let cb = "so:";
      const sb = mb(bb, bb.length, Qb - cb.length);
      for (let kb = 0; kb < sb; kb++) cb += bb[kb];
      return cb
    }
    const Cb = "BABYLON ";

    function Nb(bb) {
      return eb(Cb + bb)
    }
  },
  37566: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v+LFy8yvH//noGXl/ccuq8A/vQKd00yOdIAAAAASUVORK5CYII="
  },
  37549: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAALUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMnBzczN8/PjxHLLPAORwCnfkvOdNAAAAAElFTkSuQmCC"
  },
  37572: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  },
  37547: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAANUlEQVQYGWM8CwQMeAATHjmw1JBQAHLp/wMHDvy/ePHi/4CAgP937tz5Ly6u+5/P3uw/KAgAgjwWhHm22JoAAAAASUVORK5CYII="
  },
  37558: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);