export const id = 74;
export const ids = [74];
export const modules = {
  4536: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => uQ
    });
    var LQ = wQ(17),
      qQ = wQ(22),
      oQ = wQ(1302),
      DQ = wQ(2753);
    const kQ = 3e4,
      vQ = 1e3;

    function mQ() {
      return "visible" === document.visibilityState && "inGame" === LQ.c.get("gameState") && (0, oQ.p)()
    }

    function uQ(QQ, FQ) {
      (0, DQ.p)() || function(QQ, FQ, wQ) {
        let LQ = 0;
        const qQ = setInterval((() => {
          FQ() && (LQ += vQ, LQ >= QQ && (clearInterval(qQ), wQ()))
        }), vQ)
      }(kQ, mQ, (() => {
        FQ().then((() => {
          QQ(`saved for the player after ${kQ/1e3} s of play`), (0, DQ.y)(), qQ.l.GA("chat", {
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
  8968: (QQ, FQ, wQ) => {
    function LQ(QQ, FQ) {
      return 0 === QQ.length ? 0 : QQ[Math.min(QQ.length - 1, Math.floor(FQ * QQ.length))]
    }

    function qQ(QQ) {
      return QQ.toFixed(1)
    }
    wQ.d(FQ, {
      c: () => qQ,
      g: () => LQ
    })
  },
  37486: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => mQ,
      f: () => uQ,
      j: () => pQ,
      m: () => GQ,
      o: () => MQ
    });
    var LQ = wQ(4536),
      qQ = wQ(8968),
      oQ = wQ(2753);
    const DQ = 20,
      kQ = ["totalMs", "slotMs", "workerMs", "applyMs", "ahead", "inFlight", "MH", "jobMs"];

    function vQ(QQ) {
      return [...QQ].sort(((QQ, FQ) => QQ - FQ))
    }
    const mQ = [];

    function uQ(QQ, FQ, wQ) {
      return `${QQ},${FQ},${wQ}`
    }
    class HQ {
      constructor() {
        this.pending = new Map, this.jobs = new Map, this.edits = [], this.nextEdit = 0, this.reported = 0, this.windowStart = performance.now(), this.frames = 0, this.lastFrameAt = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      edit(QQ, FQ) {
        var wQ;
        const LQ = null !== (wQ = this.pending.get(QQ)) && void 0 !== wQ ? wQ : [];
        LQ.push({
          editAt: FQ,
          meshJobId: 0
        }), this.pending.set(QQ, LQ)
      }
      frame(QQ) {
        this.lastFrameAt > 0 && (this.maxFrameMs = Math.max(this.maxFrameMs, QQ - this.lastFrameAt)), this.lastFrameAt = QQ, this.frames++, QQ - this.windowStart >= 1e3 && this.summarise(QQ)
      }
      sent(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
        this.jobs.set(FQ, {
          sentAt: DQ,
          receivedAt: 0,
          ahead: wQ,
          inFlight: LQ,
          MH: qQ,
          jobMs: 0
        }), this.jobsSent++, this.maxAhead = Math.max(this.maxAhead, wQ), this.maxCapacity = Math.max(this.maxCapacity, qQ);
        for (const vQ of null !== (kQ = this.pending.get(QQ)) && void 0 !== kQ ? kQ : []) {
          var kQ;
          oQ.includes(vQ.meshJobId) || (vQ.meshJobId = FQ)
        }
      }
      received(QQ, FQ, wQ) {
        const LQ = this.jobs.get(QQ);
        void 0 !== LQ && (this.roundTrips.push(wQ - LQ.sentAt), LQ.receivedAt = wQ, LQ.jobMs = FQ)
      }
      failed(QQ) {
        this.jobs.delete(QQ)
      }
      reassign(QQ, FQ, wQ) {
        this.jobs.delete(FQ);
        for (const qQ of null !== (LQ = this.pending.get(QQ)) && void 0 !== LQ ? LQ : []) {
          var LQ;
          qQ.meshJobId === FQ && (qQ.meshJobId = wQ)
        }
      }
      applied(QQ, FQ, wQ) {
        const LQ = this.jobs.get(FQ);
        this.jobs.delete(FQ), void 0 !== LQ && this.show(QQ, LQ, wQ, (QQ => QQ.meshJobId === FQ))
      }
      emptied(QQ, FQ) {
        const wQ = {
          sentAt: FQ,
          receivedAt: FQ,
          ahead: 0,
          inFlight: 0,
          MH: 0,
          jobMs: 0
        };
        this.show(QQ, wQ, FQ, (() => !0))
      }
      show(QQ, FQ, wQ, LQ) {
        const qQ = this.pending.get(QQ);
        if (!qQ) return;
        const oQ = qQ.filter((qQ => !LQ(qQ) || (this.record(QQ, qQ.editAt, FQ, wQ), !1)));
        oQ.length > 0 ? this.pending.set(QQ, oQ) : this.pending.delete(QQ)
      }
      hY(QQ) {
        this.reported += QQ, this === YQ && this.reported >= DQ && null !== xQ && (xQ(), xQ = null)
      }
      record(QQ, FQ, wQ, LQ) {
        const qQ = {
          totalMs: LQ - FQ,
          slotMs: wQ.sentAt - FQ,
          workerMs: wQ.receivedAt - wQ.sentAt,
          applyMs: LQ - wQ.receivedAt,
          ahead: wQ.ahead,
          inFlight: wQ.inFlight,
          MH: wQ.MH,
          jobMs: wQ.jobMs
        };
        if (this.edits[this.nextEdit] = qQ, this.nextEdit = (this.nextEdit + 1) % 500, this.windowEdits.push(qQ.totalMs), this.hY(1), qQ.totalMs < 100 || ++this.outliers > 5) return;
        const DQ = QQ => Math.round(QQ);
        (0, oQ.m)("remesh", `slow edit (${QQ}) shown in ${DQ(qQ.totalMs)} ms: slot ${DQ(qQ.slotMs)}, worker ${DQ(qQ.workerMs)} (${qQ.ahead} ahead, ${qQ.inFlight}/${qQ.MH} in flight; job ${DQ(qQ.jobMs)}), apply ${DQ(qQ.applyMs)}`)
      }
      summarise(QQ) {
        const FQ = (QQ - this.windowStart) / 1e3;
        for (const [wQ, LQ] of this.pending) {
          const FQ = LQ.filter((FQ => QQ - FQ.editAt <= 1e4));
          this.gaveUp += LQ.length - FQ.length, this.hY(LQ.length - FQ.length), FQ.length > 0 ? this.pending.set(wQ, FQ) : this.pending.delete(wQ)
        }
        for (const [wQ, LQ] of this.jobs) QQ - LQ.sentAt > (LQ.receivedAt > 0 ? 1e4 : 6e4) && this.jobs.delete(wQ);
        if (this.jobsSent > 0 || this.roundTrips.length > 0 || this.windowEdits.length > 0 || this.gaveUp > 0) {
          const QQ = vQ(this.roundTrips),
            wQ = vQ(this.windowEdits),
            LQ = Math.max(0, this.outliers - 5);
          (0, oQ.m)("remesh", `${Math.round(this.frames/FQ)} fps (longest ${Math.round(this.maxFrameMs)} ms) | ${this.jobsSent} jobs sent, up to ${this.maxAhead} ahead on a worker, capacity ${this.maxCapacity} | round trip p50 ${Math.round((0,qQ.g)(QQ,.5))} max ${Math.round((0,qQ.g)(QQ,1))} ms | ${wQ.length} edits shown, p50 ${Math.round((0,qQ.g)(wQ,.5))} max ${Math.round((0,qQ.g)(wQ,1))} ms${LQ>0?`, ${LQ} more slow`:""}${this.gaveUp>0?`, ${this.gaveUp} never shown`:""}`)
        }
        this.windowStart = QQ, this.frames = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      stats() {
        const QQ = kQ.map((QQ => {
          const FQ = vQ(this.edits.map((FQ => FQ[QQ])));
          return `${QQ}: p50 ${Math.round((0,qQ.g)(FQ,.5))} p90 ${Math.round((0,qQ.g)(FQ,.9))} max ${Math.round((0,qQ.g)(FQ,1))}`
        }));
        return [`${this.edits.length} edits`, ...QQ].join("\n")
      }
      dump() {
        const QQ = this.edits.map((QQ => kQ.map((FQ => Math.round(10 * QQ[FQ]) / 10)).join(",")));
        return [this.stats(), kQ.join(","), ...QQ].join("\n")
      }
    }
    class bQ {
      constructor(QQ, FQ) {
        this.log = QQ, this.dH = FQ
      }
      edit(QQ, FQ, wQ) {
        const [LQ, qQ, oQ] = this.dH.nH.iqQ(QQ, FQ, wQ), DQ = this.dH.nH.AA.tA(LQ, qQ, oQ);
        DQ && DQ.YA && this.log.edit(uQ(LQ, qQ, oQ), performance.now())
      }
      sent(QQ, FQ, wQ, LQ, qQ) {
        this.log.sent(uQ(QQ.i, QQ.j, QQ.k), FQ, wQ, LQ, qQ, mQ, performance.now())
      }
      received(QQ) {
        this.log.received(QQ.meshJobId, QQ.jobMs, performance.now())
      }
      failed(QQ) {
        this.log.failed(QQ)
      }
      applied(QQ, FQ) {
        this.log.applied(uQ(QQ.i, QQ.j, QQ.k), FQ, performance.now())
      }
    }
    let YQ = null,
      xQ = null,
      AQ = !1,
      tQ = null;

    function eQ() {
      return new Promise((QQ => {
        null !== YQ && YQ.reported >= DQ ? QQ() : xQ = QQ
      }))
    }

    function MQ() {
      const QQ = new HQ;
      return YQ = QQ, (0, oQ.i)("remesh", (() => QQ.dump())), (0, oQ.e)("remeshStats", (() => {
        console.log(QQ.stats())
      })), AQ || (AQ = !0, (0, LQ.c)((QQ => {
        (0, oQ.m)("remesh", QQ)
      }), eQ)), QQ
    }

    function GQ(QQ) {
      const FQ = MQ();
      tQ = new bQ(FQ, QQ), QQ.RC.meshProbe = tQ, QQ.on("beforeRender", (() => {
        FQ.frame(performance.now())
      }))
    }

    function pQ(QQ, FQ, wQ) {
      var LQ;
      null === (LQ = tQ) || void 0 === LQ || LQ.edit(QQ, FQ, wQ)
    }
  },
  37296: (QQ, FQ, wQ) => {
    function LQ(QQ) {
      return "string" !== typeof QQ || 2 !== QQ.length && ":" !== QQ[2] ? null : QQ[0] + QQ[1]
    }
    wQ.d(FQ, {
      d: () => tQ,
      g: () => pQ,
      i: () => cQ,
      l: () => kQ,
      o: () => DQ,
      r: () => oQ,
      s: () => vQ,
      t: () => eQ,
      v: () => AQ
    });
    const qQ = ["op:ytInitialPlayerResponse.adPlacements", "op:ytInitialPlayerResponse.playerAds", "op:ytInitialPlayerResponse.adSlots", "op:playerResponse.adPlacements", "op:playerResponse.playerAds", "op:playerResponse.adSlots"];

    function oQ(QQ) {
      if (function(QQ) {
          for (let FQ = 0; FQ < qQ.length; FQ++)
            if (QQ === qQ[FQ]) return !0;
          return !1
        }(QQ)) return !1;
      const FQ = LQ(QQ);
      return "op" === FQ || "ep" === FQ || "wi" === FQ || "pp" === FQ || "fp:call" === QQ || "fp:t" === QQ
    }

    function DQ(QQ) {
      return "fp" === LQ(QQ) && !oQ(QQ)
    }

    function kQ(QQ) {
      if ("string" !== typeof QQ) return !1;
      return "o" === QQ[0] && "p" === QQ[1] && (2 === QQ.length || ":" === QQ[2]) || "fp:call" === QQ || "2" === QQ || "t" === QQ || "a" === QQ
    }

    function vQ(QQ, FQ) {
      return `~${function(QQ){return QQ.length<2?QQ:":"===QQ[1]?QQ[0]:QQ[0]+QQ[1]}(FQ)}~${QQ}`
    }
    const mQ = 200;

    function uQ(QQ) {
      let FQ = QQ.length - 1;
      for (let wQ = 0; wQ < 2; wQ++) {
        const wQ = FQ;
        for (; FQ >= 0 && QQ[FQ] >= "0" && QQ[FQ] <= "9";) FQ--;
        if (FQ < 0 || FQ === wQ || ":" !== QQ[FQ]) return -1;
        FQ--
      }
      return FQ + 1
    }

    function HQ(QQ) {
      return "unknown" === QQ || uQ(QQ) >= 0
    }

    function bQ(QQ, FQ) {
      return QQ[FQ] >= "\ud800" && QQ[FQ] <= "\udbff" && FQ + 1 < QQ.length && QQ[FQ + 1] >= "\udc00" && QQ[FQ + 1] <= "\udfff" ? 2 : 1
    }

    function YQ(QQ, FQ, wQ) {
      return 2 === wQ ? 4 : QQ[FQ] <= "\x7f" ? 1 : QQ[FQ] <= "\u07ff" ? 2 : 3
    }

    function xQ(QQ, FQ, wQ) {
      let LQ = 0;
      for (; LQ < FQ;) {
        const FQ = bQ(QQ, LQ),
          qQ = YQ(QQ, LQ, FQ);
        if (qQ > wQ) break;
        wQ -= qQ, LQ += FQ
      }
      return LQ
    }

    function AQ(QQ) {
      let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0;
      if ("string" !== typeof QQ || QQ.length > mQ || !HQ(QQ)) return "t";
      let wQ = 2;
      for (let kQ = 0; kQ < QQ.length;) {
        const FQ = bQ(QQ, kQ);
        wQ += YQ(QQ, kQ, FQ), kQ += FQ
      }
      if (wQ <= FQ) return `t ${QQ}`;
      const LQ = uQ(QQ),
        qQ = FQ - 2 - (QQ.length - LQ);
      if (qQ < 0) return "t";
      const oQ = xQ(QQ, LQ, qQ);
      let DQ = "t ";
      for (let kQ = 0; kQ < oQ; kQ++) DQ += QQ[kQ];
      for (let kQ = LQ; kQ < QQ.length; kQ++) DQ += QQ[kQ];
      return DQ
    }
    const tQ = 62;

    function eQ(QQ) {
      let FQ = "so:";
      const wQ = xQ(QQ, QQ.length, tQ - FQ.length);
      for (let LQ = 0; LQ < wQ; LQ++) FQ += QQ[LQ];
      return FQ
    }
    const MQ = "BABYLON ",
      GQ = "DECODE ";

    function pQ(QQ) {
      return eQ(MQ + QQ)
    }

    function cQ(QQ) {
      return eQ(GQ + QQ)
    }
  },
  37520: QQ => {
    QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v+LFy8yvH//noGXl/ccuq8A/vQKd00yOdIAAAAASUVORK5CYII="
  },
  37510: QQ => {
    QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAALUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMnBzczN8/PjxHLLPAORwCnfkvOdNAAAAAElFTkSuQmCC"
  },
  37527: QQ => {
    QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  },
  37502: QQ => {
    QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAANUlEQVQYGWM8CwQMeAATHjmw1JBQAHLp/wMHDvy/ePHi/4CAgP937tz5Ly6u+5/P3uw/KAgAgjwWhHm22JoAAAAASUVORK5CYII="
  },
  37514: QQ => {
    QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);