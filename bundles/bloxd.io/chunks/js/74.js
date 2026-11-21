export const id = 74;
export const ids = [74];
export const modules = {
  4557: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Kd
    });
    var pd = kd(22),
      Nd = kd(29),
      Wd = kd(1307),
      Pd = kd(2704);
    const Zd = 3e4,
      gd = 1e3;

    function Cd() {
      return "visible" === document.visibilityState && "inGame" === pd.d.get("gameState") && (0, Wd.s)()
    }

    function Kd(dd, Jd) {
      (0, Pd.o)() || function(dd, Jd, kd) {
        let pd = 0;
        const Nd = setInterval((() => {
          Jd() && (pd += gd, pd >= dd && (clearInterval(Nd), kd()))
        }), gd)
      }(Zd, Cd, (() => {
        Jd().then((() => {
          dd(`saved for the player after ${Zd/1e3} s of play`), (0, Pd.u)(), Nd.j.nO("chat", {
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
  9098: (dd, Jd, kd) => {
    function pd(dd, Jd) {
      return 0 === dd.length ? 0 : dd[Math.min(dd.length - 1, Math.floor(Jd * dd.length))]
    }

    function Nd(dd) {
      return dd.toFixed(1)
    }
    kd.d(Jd, {
      c: () => Nd,
      e: () => pd
    })
  },
  38138: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Cd,
      d: () => Kd,
      e: () => vd,
      f: () => Gd,
      i: () => Id
    });
    var pd = kd(4557),
      Nd = kd(9098),
      Wd = kd(2704);
    const Pd = 20,
      Zd = ["totalMs", "slotMs", "workerMs", "applyMs", "ahead", "inFlight", "oo", "jobMs"];

    function gd(dd) {
      return [...dd].sort(((dd, Jd) => dd - Jd))
    }
    const Cd = [];

    function Kd(dd, Jd, kd) {
      return `${dd},${Jd},${kd}`
    }
    class od {
      constructor() {
        this.pending = new Map, this.jobs = new Map, this.edits = [], this.nextEdit = 0, this.reported = 0, this.windowStart = performance.now(), this.frames = 0, this.lastFrameAt = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      edit(dd, Jd) {
        var kd;
        const pd = null !== (kd = this.pending.get(dd)) && void 0 !== kd ? kd : [];
        pd.push({
          editAt: Jd,
          meshJobId: 0
        }), this.pending.set(dd, pd)
      }
      frame(dd) {
        this.lastFrameAt > 0 && (this.maxFrameMs = Math.max(this.maxFrameMs, dd - this.lastFrameAt)), this.lastFrameAt = dd, this.frames++, dd - this.windowStart >= 1e3 && this.summarise(dd)
      }
      sent(dd, Jd, kd, pd, Nd, Wd, Pd) {
        this.jobs.set(Jd, {
          sentAt: Pd,
          receivedAt: 0,
          ahead: kd,
          inFlight: pd,
          oo: Nd,
          jobMs: 0
        }), this.jobsSent++, this.maxAhead = Math.max(this.maxAhead, kd), this.maxCapacity = Math.max(this.maxCapacity, Nd);
        for (const gd of null !== (Zd = this.pending.get(dd)) && void 0 !== Zd ? Zd : []) {
          var Zd;
          Wd.includes(gd.meshJobId) || (gd.meshJobId = Jd)
        }
      }
      received(dd, Jd, kd) {
        const pd = this.jobs.get(dd);
        void 0 !== pd && (this.roundTrips.push(kd - pd.sentAt), pd.receivedAt = kd, pd.jobMs = Jd)
      }
      failed(dd) {
        this.jobs.delete(dd)
      }
      reassign(dd, Jd, kd) {
        this.jobs.delete(Jd);
        for (const Nd of null !== (pd = this.pending.get(dd)) && void 0 !== pd ? pd : []) {
          var pd;
          Nd.meshJobId === Jd && (Nd.meshJobId = kd)
        }
      }
      applied(dd, Jd, kd) {
        const pd = this.jobs.get(Jd);
        this.jobs.delete(Jd), void 0 !== pd && this.show(dd, pd, kd, (dd => dd.meshJobId === Jd))
      }
      emptied(dd, Jd) {
        const kd = {
          sentAt: Jd,
          receivedAt: Jd,
          ahead: 0,
          inFlight: 0,
          oo: 0,
          jobMs: 0
        };
        this.show(dd, kd, Jd, (() => !0))
      }
      show(dd, Jd, kd, pd) {
        const Nd = this.pending.get(dd);
        if (!Nd) return;
        const Wd = Nd.filter((Nd => !pd(Nd) || (this.record(dd, Nd.editAt, Jd, kd), !1)));
        Wd.length > 0 ? this.pending.set(dd, Wd) : this.pending.delete(dd)
      }
      TQ(dd) {
        this.reported += dd, this === Qd && this.reported >= Pd && null !== Ld && (Ld(), Ld = null)
      }
      record(dd, Jd, kd, pd) {
        const Nd = {
          totalMs: pd - Jd,
          slotMs: kd.sentAt - Jd,
          workerMs: kd.receivedAt - kd.sentAt,
          applyMs: pd - kd.receivedAt,
          ahead: kd.ahead,
          inFlight: kd.inFlight,
          oo: kd.oo,
          jobMs: kd.jobMs
        };
        if (this.edits[this.nextEdit] = Nd, this.nextEdit = (this.nextEdit + 1) % 500, this.windowEdits.push(Nd.totalMs), this.TQ(1), Nd.totalMs < 100 || ++this.outliers > 5) return;
        const Pd = dd => Math.round(dd);
        (0, Wd.h)("remesh", `slow edit (${dd}) shown in ${Pd(Nd.totalMs)} ms: slot ${Pd(Nd.slotMs)}, worker ${Pd(Nd.workerMs)} (${Nd.ahead} ahead, ${Nd.inFlight}/${Nd.oo} in flight; job ${Pd(Nd.jobMs)}), apply ${Pd(Nd.applyMs)}`)
      }
      summarise(dd) {
        const Jd = (dd - this.windowStart) / 1e3;
        for (const [kd, pd] of this.pending) {
          const Jd = pd.filter((Jd => dd - Jd.editAt <= 1e4));
          this.gaveUp += pd.length - Jd.length, this.TQ(pd.length - Jd.length), Jd.length > 0 ? this.pending.set(kd, Jd) : this.pending.delete(kd)
        }
        for (const [kd, pd] of this.jobs) dd - pd.sentAt > (pd.receivedAt > 0 ? 1e4 : 6e4) && this.jobs.delete(kd);
        if (this.jobsSent > 0 || this.roundTrips.length > 0 || this.windowEdits.length > 0 || this.gaveUp > 0) {
          const dd = gd(this.roundTrips),
            kd = gd(this.windowEdits),
            pd = Math.max(0, this.outliers - 5);
          (0, Wd.h)("remesh", `${Math.round(this.frames/Jd)} fps (longest ${Math.round(this.maxFrameMs)} ms) | ${this.jobsSent} jobs sent, up to ${this.maxAhead} ahead on a worker, capacity ${this.maxCapacity} | round trip p50 ${Math.round((0,Nd.e)(dd,.5))} max ${Math.round((0,Nd.e)(dd,1))} ms | ${kd.length} edits shown, p50 ${Math.round((0,Nd.e)(kd,.5))} max ${Math.round((0,Nd.e)(kd,1))} ms${pd>0?`, ${pd} more slow`:""}${this.gaveUp>0?`, ${this.gaveUp} never shown`:""}`)
        }
        this.windowStart = dd, this.frames = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      stats() {
        const dd = Zd.map((dd => {
          const Jd = gd(this.edits.map((Jd => Jd[dd])));
          return `${dd}: p50 ${Math.round((0,Nd.e)(Jd,.5))} p90 ${Math.round((0,Nd.e)(Jd,.9))} max ${Math.round((0,Nd.e)(Jd,1))}`
        }));
        return [`${this.edits.length} edits`, ...dd].join("\n")
      }
      dump() {
        const dd = this.edits.map((dd => Zd.map((Jd => Math.round(10 * dd[Jd]) / 10)).join(",")));
        return [this.stats(), Zd.join(","), ...dd].join("\n")
      }
    }
    class ld {
      constructor(dd, Jd) {
        this.log = dd, this.Jl = Jd
      }
      edit(dd, Jd, kd) {
        const [pd, Nd, Wd] = this.Jl.Vo.GNd(dd, Jd, kd), Pd = this.Jl.Vo.pO.NO(pd, Nd, Wd);
        Pd && Pd.JO && this.log.edit(Kd(pd, Nd, Wd), performance.now())
      }
      sent(dd, Jd, kd, pd, Nd) {
        this.log.sent(Kd(dd.i, dd.j, dd.k), Jd, kd, pd, Nd, Cd, performance.now())
      }
      received(dd) {
        this.log.received(dd.meshJobId, dd.jobMs, performance.now())
      }
      failed(dd) {
        this.log.failed(dd)
      }
      applied(dd, Jd) {
        this.log.applied(Kd(dd.i, dd.j, dd.k), Jd, performance.now())
      }
    }
    let Qd = null,
      Ld = null,
      Od = !1,
      ed = null;

    function Rd() {
      return new Promise((dd => {
        null !== Qd && Qd.reported >= Pd ? dd() : Ld = dd
      }))
    }

    function Id() {
      const dd = new od;
      return Qd = dd, (0, Wd.g)("remesh", (() => dd.dump())), (0, Wd.b)("remeshStats", (() => {
        console.log(dd.stats())
      })), Od || (Od = !0, (0, pd.b)((dd => {
        (0, Wd.h)("remesh", dd)
      }), Rd)), dd
    }

    function Gd(dd) {
      const Jd = Id();
      ed = new ld(Jd, dd), dd.mG.meshProbe = ed, dd.on("beforeRender", (() => {
        Jd.frame(performance.now())
      }))
    }

    function vd(dd, Jd, kd) {
      var pd;
      null === (pd = ed) || void 0 === pd || pd.edit(dd, Jd, kd)
    }
  },
  37938: (dd, Jd, kd) => {
    function pd(dd) {
      return "string" !== typeof dd || 2 !== dd.length && ":" !== dd[2] ? null : dd[0] + dd[1]
    }
    kd.d(Jd, {
      e: () => ed,
      i: () => vd,
      j: () => xd,
      k: () => Zd,
      n: () => Pd,
      r: () => Wd,
      v: () => gd,
      x: () => Rd,
      z: () => Od
    });
    const Nd = ["op:ytInitialPlayerResponse.adPlacements", "op:ytInitialPlayerResponse.playerAds", "op:ytInitialPlayerResponse.adSlots", "op:playerResponse.adPlacements", "op:playerResponse.playerAds", "op:playerResponse.adSlots"];

    function Wd(dd) {
      if (function(dd) {
          for (let Jd = 0; Jd < Nd.length; Jd++)
            if (dd === Nd[Jd]) return !0;
          return !1
        }(dd)) return !1;
      const Jd = pd(dd);
      return "op" === Jd || "ep" === Jd || "wi" === Jd || "pp" === Jd || "fp:call" === dd || "fp:t" === dd
    }

    function Pd(dd) {
      return "fp" === pd(dd) && !Wd(dd)
    }

    function Zd(dd) {
      if ("string" !== typeof dd) return !1;
      return "o" === dd[0] && "p" === dd[1] && (2 === dd.length || ":" === dd[2]) || "fp:call" === dd || "2" === dd || "t" === dd || "a" === dd
    }

    function gd(dd, Jd) {
      return `~${function(dd){return dd.length<2?dd:":"===dd[1]?dd[0]:dd[0]+dd[1]}(Jd)}~${dd}`
    }
    const Cd = 200;

    function Kd(dd) {
      let Jd = dd.length - 1;
      for (let kd = 0; kd < 2; kd++) {
        const kd = Jd;
        for (; Jd >= 0 && dd[Jd] >= "0" && dd[Jd] <= "9";) Jd--;
        if (Jd < 0 || Jd === kd || ":" !== dd[Jd]) return -1;
        Jd--
      }
      return Jd + 1
    }

    function od(dd) {
      return "unknown" === dd || Kd(dd) >= 0
    }

    function ld(dd, Jd) {
      return dd[Jd] >= "\ud800" && dd[Jd] <= "\udbff" && Jd + 1 < dd.length && dd[Jd + 1] >= "\udc00" && dd[Jd + 1] <= "\udfff" ? 2 : 1
    }

    function Qd(dd, Jd, kd) {
      return 2 === kd ? 4 : dd[Jd] <= "\x7f" ? 1 : dd[Jd] <= "\u07ff" ? 2 : 3
    }

    function Ld(dd, Jd, kd) {
      let pd = 0;
      for (; pd < Jd;) {
        const Jd = ld(dd, pd),
          Nd = Qd(dd, pd, Jd);
        if (Nd > kd) break;
        kd -= Nd, pd += Jd
      }
      return pd
    }

    function Od(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0;
      if ("string" !== typeof dd || dd.length > Cd || !od(dd)) return "t";
      let kd = 2;
      for (let Zd = 0; Zd < dd.length;) {
        const Jd = ld(dd, Zd);
        kd += Qd(dd, Zd, Jd), Zd += Jd
      }
      if (kd <= Jd) return `t ${dd}`;
      const pd = Kd(dd),
        Nd = Jd - 2 - (dd.length - pd);
      if (Nd < 0) return "t";
      const Wd = Ld(dd, pd, Nd);
      let Pd = "t ";
      for (let Zd = 0; Zd < Wd; Zd++) Pd += dd[Zd];
      for (let Zd = pd; Zd < dd.length; Zd++) Pd += dd[Zd];
      return Pd
    }
    const ed = 62;

    function Rd(dd) {
      let Jd = "so:";
      const kd = Ld(dd, dd.length, ed - Jd.length);
      for (let pd = 0; pd < kd; pd++) Jd += dd[pd];
      return Jd
    }
    const Id = "BABYLON ",
      Gd = "DECODE ";

    function vd(dd) {
      return Rd(Id + dd)
    }

    function xd(dd) {
      return Rd(Gd + dd)
    }
  },
  38163: dd => {
    dd.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v+LFy8yvH//noGXl/ccuq8A/vQKd00yOdIAAAAASUVORK5CYII="
  },
  38154: dd => {
    dd.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAALUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMnBzczN8/PjxHLLPAORwCnfkvOdNAAAAAElFTkSuQmCC"
  },
  38167: dd => {
    dd.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  },
  38151: dd => {
    dd.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAANUlEQVQYGWM8CwQMeAATHjmw1JBQAHLp/wMHDvy/ePHi/4CAgP937tz5Ly6u+5/P3uw/KAgAgjwWhHm22JoAAAAASUVORK5CYII="
  },
  38160: dd => {
    dd.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);