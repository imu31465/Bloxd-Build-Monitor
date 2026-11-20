export const id = 74;
export const ids = [74];
export const modules = {
  4516: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => uq
    });
    var Yq = gq(24),
      lq = gq(31),
      Oq = gq(1274),
      mq = gq(2733);
    const xq = 3e4,
      Aq = 1e3;

    function cq() {
      return "visible" === document.visibilityState && "inGame" === Yq.b.get("gameState") && (0, Oq.p)()
    }

    function uq(qq, Eq) {
      (0, mq.v)() || function(qq, Eq, gq) {
        let Yq = 0;
        const lq = setInterval((() => {
          Eq() && (Yq += Aq, Yq >= qq && (clearInterval(lq), gq()))
        }), Aq)
      }(xq, cq, (() => {
        Eq().then((() => {
          qq(`saved for the player after ${xq/1e3} s of play`), (0, mq.C)(), lq.i.TV("chat", {
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
  9145: (qq, Eq, gq) => {
    function Yq(qq, Eq) {
      return 0 === qq.length ? 0 : qq[Math.min(qq.length - 1, Math.floor(Eq * qq.length))]
    }

    function lq(qq) {
      return qq.toFixed(1)
    }
    gq.d(Eq, {
      b: () => lq,
      e: () => Yq
    })
  },
  37910: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => cq,
      f: () => uq,
      h: () => Pq,
      i: () => oq,
      m: () => Hq
    });
    var Yq = gq(4516),
      lq = gq(9145),
      Oq = gq(2733);
    const mq = 20,
      xq = ["totalMs", "slotMs", "workerMs", "applyMs", "ahead", "inFlight", "WB", "jobMs"];

    function Aq(qq) {
      return [...qq].sort(((qq, Eq) => qq - Eq))
    }
    const cq = [];

    function uq(qq, Eq, gq) {
      return `${qq},${Eq},${gq}`
    }
    class Bq {
      constructor() {
        this.pending = new Map, this.jobs = new Map, this.edits = [], this.nextEdit = 0, this.reported = 0, this.windowStart = performance.now(), this.frames = 0, this.lastFrameAt = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      edit(qq, Eq) {
        var gq;
        const Yq = null !== (gq = this.pending.get(qq)) && void 0 !== gq ? gq : [];
        Yq.push({
          editAt: Eq,
          meshJobId: 0
        }), this.pending.set(qq, Yq)
      }
      frame(qq) {
        this.lastFrameAt > 0 && (this.maxFrameMs = Math.max(this.maxFrameMs, qq - this.lastFrameAt)), this.lastFrameAt = qq, this.frames++, qq - this.windowStart >= 1e3 && this.summarise(qq)
      }
      sent(qq, Eq, gq, Yq, lq, Oq, mq) {
        this.jobs.set(Eq, {
          sentAt: mq,
          receivedAt: 0,
          ahead: gq,
          inFlight: Yq,
          WB: lq,
          jobMs: 0
        }), this.jobsSent++, this.maxAhead = Math.max(this.maxAhead, gq), this.maxCapacity = Math.max(this.maxCapacity, lq);
        for (const Aq of null !== (xq = this.pending.get(qq)) && void 0 !== xq ? xq : []) {
          var xq;
          Oq.includes(Aq.meshJobId) || (Aq.meshJobId = Eq)
        }
      }
      received(qq, Eq, gq) {
        const Yq = this.jobs.get(qq);
        void 0 !== Yq && (this.roundTrips.push(gq - Yq.sentAt), Yq.receivedAt = gq, Yq.jobMs = Eq)
      }
      failed(qq) {
        this.jobs.delete(qq)
      }
      reassign(qq, Eq, gq) {
        this.jobs.delete(Eq);
        for (const lq of null !== (Yq = this.pending.get(qq)) && void 0 !== Yq ? Yq : []) {
          var Yq;
          lq.meshJobId === Eq && (lq.meshJobId = gq)
        }
      }
      applied(qq, Eq, gq) {
        const Yq = this.jobs.get(Eq);
        this.jobs.delete(Eq), void 0 !== Yq && this.show(qq, Yq, gq, (qq => qq.meshJobId === Eq))
      }
      emptied(qq, Eq) {
        const gq = {
          sentAt: Eq,
          receivedAt: Eq,
          ahead: 0,
          inFlight: 0,
          WB: 0,
          jobMs: 0
        };
        this.show(qq, gq, Eq, (() => !0))
      }
      show(qq, Eq, gq, Yq) {
        const lq = this.pending.get(qq);
        if (!lq) return;
        const Oq = lq.filter((lq => !Yq(lq) || (this.record(qq, lq.editAt, Eq, gq), !1)));
        Oq.length > 0 ? this.pending.set(qq, Oq) : this.pending.delete(qq)
      }
      SN(qq) {
        this.reported += qq, this === Nq && this.reported >= mq && null !== aq && (aq(), aq = null)
      }
      record(qq, Eq, gq, Yq) {
        const lq = {
          totalMs: Yq - Eq,
          slotMs: gq.sentAt - Eq,
          workerMs: gq.receivedAt - gq.sentAt,
          applyMs: Yq - gq.receivedAt,
          ahead: gq.ahead,
          inFlight: gq.inFlight,
          WB: gq.WB,
          jobMs: gq.jobMs
        };
        if (this.edits[this.nextEdit] = lq, this.nextEdit = (this.nextEdit + 1) % 500, this.windowEdits.push(lq.totalMs), this.SN(1), lq.totalMs < 100 || ++this.outliers > 5) return;
        const mq = qq => Math.round(qq);
        (0, Oq.m)("remesh", `slow edit (${qq}) shown in ${mq(lq.totalMs)} ms: slot ${mq(lq.slotMs)}, worker ${mq(lq.workerMs)} (${lq.ahead} ahead, ${lq.inFlight}/${lq.WB} in flight; job ${mq(lq.jobMs)}), apply ${mq(lq.applyMs)}`)
      }
      summarise(qq) {
        const Eq = (qq - this.windowStart) / 1e3;
        for (const [gq, Yq] of this.pending) {
          const Eq = Yq.filter((Eq => qq - Eq.editAt <= 1e4));
          this.gaveUp += Yq.length - Eq.length, this.SN(Yq.length - Eq.length), Eq.length > 0 ? this.pending.set(gq, Eq) : this.pending.delete(gq)
        }
        for (const [gq, Yq] of this.jobs) qq - Yq.sentAt > (Yq.receivedAt > 0 ? 1e4 : 6e4) && this.jobs.delete(gq);
        if (this.jobsSent > 0 || this.roundTrips.length > 0 || this.windowEdits.length > 0 || this.gaveUp > 0) {
          const qq = Aq(this.roundTrips),
            gq = Aq(this.windowEdits),
            Yq = Math.max(0, this.outliers - 5);
          (0, Oq.m)("remesh", `${Math.round(this.frames/Eq)} fps (longest ${Math.round(this.maxFrameMs)} ms) | ${this.jobsSent} jobs sent, up to ${this.maxAhead} ahead on a worker, capacity ${this.maxCapacity} | round trip p50 ${Math.round((0,lq.e)(qq,.5))} max ${Math.round((0,lq.e)(qq,1))} ms | ${gq.length} edits shown, p50 ${Math.round((0,lq.e)(gq,.5))} max ${Math.round((0,lq.e)(gq,1))} ms${Yq>0?`, ${Yq} more slow`:""}${this.gaveUp>0?`, ${this.gaveUp} never shown`:""}`)
        }
        this.windowStart = qq, this.frames = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      stats() {
        const qq = xq.map((qq => {
          const Eq = Aq(this.edits.map((Eq => Eq[qq])));
          return `${qq}: p50 ${Math.round((0,lq.e)(Eq,.5))} p90 ${Math.round((0,lq.e)(Eq,.9))} max ${Math.round((0,lq.e)(Eq,1))}`
        }));
        return [`${this.edits.length} edits`, ...qq].join("\n")
      }
      dump() {
        const qq = this.edits.map((qq => xq.map((Eq => Math.round(10 * qq[Eq]) / 10)).join(",")));
        return [this.stats(), xq.join(","), ...qq].join("\n")
      }
    }
    class Wq {
      constructor(qq, Eq) {
        this.log = qq, this.wB = Eq
      }
      edit(qq, Eq, gq) {
        const [Yq, lq, Oq] = this.wB.kB.ylq(qq, Eq, gq), mq = this.wB.kB.qV.EV(Yq, lq, Oq);
        mq && mq.ea && this.log.edit(uq(Yq, lq, Oq), performance.now())
      }
      sent(qq, Eq, gq, Yq, lq) {
        this.log.sent(uq(qq.i, qq.j, qq.k), Eq, gq, Yq, lq, cq, performance.now())
      }
      received(qq) {
        this.log.received(qq.meshJobId, qq.jobMs, performance.now())
      }
      failed(qq) {
        this.log.failed(qq)
      }
      applied(qq, Eq) {
        this.log.applied(uq(qq.i, qq.j, qq.k), Eq, performance.now())
      }
    }
    let Nq = null,
      aq = null,
      Vq = !1,
      dq = null;

    function jq() {
      return new Promise((qq => {
        null !== Nq && Nq.reported >= mq ? qq() : aq = qq
      }))
    }

    function Hq() {
      const qq = new Bq;
      return Nq = qq, (0, Oq.j)("remesh", (() => qq.dump())), (0, Oq.c)("remeshStats", (() => {
        console.log(qq.stats())
      })), Vq || (Vq = !0, (0, Yq.d)((qq => {
        (0, Oq.m)("remesh", qq)
      }), jq)), qq
    }

    function oq(qq) {
      const Eq = Hq();
      dq = new Wq(Eq, qq), qq.Qv.meshProbe = dq, qq.on("beforeRender", (() => {
        Eq.frame(performance.now())
      }))
    }

    function Pq(qq, Eq, gq) {
      var Yq;
      null === (Yq = dq) || void 0 === Yq || Yq.edit(qq, Eq, gq)
    }
  },
  37742: (qq, Eq, gq) => {
    function Yq(qq) {
      return "string" !== typeof qq || 2 !== qq.length && ":" !== qq[2] ? null : qq[0] + qq[1]
    }
    gq.d(Eq, {
      b: () => dq,
      f: () => Pq,
      j: () => Qq,
      k: () => xq,
      l: () => mq,
      p: () => Oq,
      r: () => Aq,
      t: () => jq,
      x: () => Vq
    });
    const lq = ["op:ytInitialPlayerResponse.adPlacements", "op:ytInitialPlayerResponse.playerAds", "op:ytInitialPlayerResponse.adSlots", "op:playerResponse.adPlacements", "op:playerResponse.playerAds", "op:playerResponse.adSlots"];

    function Oq(qq) {
      if (function(qq) {
          for (let Eq = 0; Eq < lq.length; Eq++)
            if (qq === lq[Eq]) return !0;
          return !1
        }(qq)) return !1;
      const Eq = Yq(qq);
      return "op" === Eq || "ep" === Eq || "wi" === Eq || "pp" === Eq || "fp:call" === qq || "fp:t" === qq
    }

    function mq(qq) {
      return "fp" === Yq(qq) && !Oq(qq)
    }

    function xq(qq) {
      if ("string" !== typeof qq) return !1;
      return "o" === qq[0] && "p" === qq[1] && (2 === qq.length || ":" === qq[2]) || "fp:call" === qq || "2" === qq || "t" === qq || "a" === qq
    }

    function Aq(qq, Eq) {
      return `~${function(qq){return qq.length<2?qq:":"===qq[1]?qq[0]:qq[0]+qq[1]}(Eq)}~${qq}`
    }
    const cq = 200;

    function uq(qq) {
      let Eq = qq.length - 1;
      for (let gq = 0; gq < 2; gq++) {
        const gq = Eq;
        for (; Eq >= 0 && qq[Eq] >= "0" && qq[Eq] <= "9";) Eq--;
        if (Eq < 0 || Eq === gq || ":" !== qq[Eq]) return -1;
        Eq--
      }
      return Eq + 1
    }

    function Bq(qq) {
      return "unknown" === qq || uq(qq) >= 0
    }

    function Wq(qq, Eq) {
      return qq[Eq] >= "\ud800" && qq[Eq] <= "\udbff" && Eq + 1 < qq.length && qq[Eq + 1] >= "\udc00" && qq[Eq + 1] <= "\udfff" ? 2 : 1
    }

    function Nq(qq, Eq, gq) {
      return 2 === gq ? 4 : qq[Eq] <= "\x7f" ? 1 : qq[Eq] <= "\u07ff" ? 2 : 3
    }

    function aq(qq, Eq, gq) {
      let Yq = 0;
      for (; Yq < Eq;) {
        const Eq = Wq(qq, Yq),
          lq = Nq(qq, Yq, Eq);
        if (lq > gq) break;
        gq -= lq, Yq += Eq
      }
      return Yq
    }

    function Vq(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0;
      if ("string" !== typeof qq || qq.length > cq || !Bq(qq)) return "t";
      let gq = 2;
      for (let xq = 0; xq < qq.length;) {
        const Eq = Wq(qq, xq);
        gq += Nq(qq, xq, Eq), xq += Eq
      }
      if (gq <= Eq) return `t ${qq}`;
      const Yq = uq(qq),
        lq = Eq - 2 - (qq.length - Yq);
      if (lq < 0) return "t";
      const Oq = aq(qq, Yq, lq);
      let mq = "t ";
      for (let xq = 0; xq < Oq; xq++) mq += qq[xq];
      for (let xq = Yq; xq < qq.length; xq++) mq += qq[xq];
      return mq
    }
    const dq = 62;

    function jq(qq) {
      let Eq = "so:";
      const gq = aq(qq, qq.length, dq - Eq.length);
      for (let Yq = 0; Yq < gq; Yq++) Eq += qq[Yq];
      return Eq
    }
    const Hq = "BABYLON ",
      oq = "DECODE ";

    function Pq(qq) {
      return jq(Hq + qq)
    }

    function Qq(qq) {
      return jq(oq + qq)
    }
  },
  37942: qq => {
    qq.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v+LFy8yvH//noGXl/ccuq8A/vQKd00yOdIAAAAASUVORK5CYII="
  },
  37927: qq => {
    qq.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAALUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMnBzczN8/PjxHLLPAORwCnfkvOdNAAAAAElFTkSuQmCC"
  },
  37950: qq => {
    qq.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  },
  37925: qq => {
    qq.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAANUlEQVQYGWM8CwQMeAATHjmw1JBQAHLp/wMHDvy/ePHi/4CAgP937tz5Ly6u+5/P3uw/KAgAgjwWhHm22JoAAAAASUVORK5CYII="
  },
  37934: qq => {
    qq.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);