export const id = 73;
export const ids = [73];
export const modules = {
  4186: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => ST
    });
    var iT = IT(12),
      zT = IT(16),
      kT = IT(1253),
      WT = IT(2541);
    const XT = 3e4,
      BT = 1e3;

    function FT() {
      return "visible" === document.visibilityState && "inGame" === iT.c.get("gameState") && (0, kT.q)()
    }

    function ST(TT, oT) {
      (0, WT.s)() || function(TT, oT, IT) {
        let iT = 0;
        const zT = setInterval((() => {
          oT() && (iT += BT, iT >= TT && (clearInterval(zT), IT()))
        }), BT)
      }(XT, FT, (() => {
        oT().then((() => {
          TT(`saved for the player after ${XT/1e3} s of play`), (0, WT.B)(), zT.h.XM("chat", {
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
  8636: (TT, oT, IT) => {
    function iT(TT, oT) {
      return 0 === TT.length ? 0 : TT[Math.min(TT.length - 1, Math.floor(oT * TT.length))]
    }
    IT.d(oT, {
      b: () => iT
    })
  },
  36890: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => FT,
      h: () => ST,
      j: () => hT,
      k: () => gT,
      m: () => AT
    });
    var iT = IT(4186),
      zT = IT(8636),
      kT = IT(2541);
    const WT = 20,
      XT = ["totalMs", "slotMs", "workerMs", "applyMs", "ahead", "inFlight", "fD", "jobMs"];

    function BT(TT) {
      return [...TT].sort(((TT, oT) => TT - oT))
    }
    const FT = [];

    function ST(TT, oT, IT) {
      return `${TT},${oT},${IT}`
    }
    class DT {
      constructor() {
        this.pending = new Map, this.jobs = new Map, this.edits = [], this.nextEdit = 0, this.reported = 0, this.windowStart = performance.now(), this.frames = 0, this.lastFrameAt = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      edit(TT, oT) {
        var IT;
        const iT = null !== (IT = this.pending.get(TT)) && void 0 !== IT ? IT : [];
        iT.push({
          editAt: oT,
          meshJobId: 0
        }), this.pending.set(TT, iT)
      }
      frame(TT) {
        this.lastFrameAt > 0 && (this.maxFrameMs = Math.max(this.maxFrameMs, TT - this.lastFrameAt)), this.lastFrameAt = TT, this.frames++, TT - this.windowStart >= 1e3 && this.summarise(TT)
      }
      sent(TT, oT, IT, iT, zT, kT, WT) {
        this.jobs.set(oT, {
          sentAt: WT,
          receivedAt: 0,
          ahead: IT,
          inFlight: iT,
          fD: zT,
          jobMs: 0
        }), this.jobsSent++, this.maxAhead = Math.max(this.maxAhead, IT), this.maxCapacity = Math.max(this.maxCapacity, zT);
        for (const BT of null !== (XT = this.pending.get(TT)) && void 0 !== XT ? XT : []) {
          var XT;
          kT.includes(BT.meshJobId) || (BT.meshJobId = oT)
        }
      }
      received(TT, oT, IT) {
        const iT = this.jobs.get(TT);
        void 0 !== iT && (this.roundTrips.push(IT - iT.sentAt), iT.receivedAt = IT, iT.jobMs = oT)
      }
      failed(TT) {
        this.jobs.delete(TT)
      }
      reassign(TT, oT, IT) {
        this.jobs.delete(oT);
        for (const zT of null !== (iT = this.pending.get(TT)) && void 0 !== iT ? iT : []) {
          var iT;
          zT.meshJobId === oT && (zT.meshJobId = IT)
        }
      }
      applied(TT, oT, IT) {
        const iT = this.jobs.get(oT);
        this.jobs.delete(oT), void 0 !== iT && this.show(TT, iT, IT, (TT => TT.meshJobId === oT))
      }
      emptied(TT, oT) {
        const IT = {
          sentAt: oT,
          receivedAt: oT,
          ahead: 0,
          inFlight: 0,
          fD: 0,
          jobMs: 0
        };
        this.show(TT, IT, oT, (() => !0))
      }
      show(TT, oT, IT, iT) {
        const zT = this.pending.get(TT);
        if (!zT) return;
        const kT = zT.filter((zT => !iT(zT) || (this.record(TT, zT.editAt, oT, IT), !1)));
        kT.length > 0 ? this.pending.set(TT, kT) : this.pending.delete(TT)
      }
      Bc(TT) {
        this.reported += TT, this === xT && this.reported >= WT && null !== cT && (cT(), cT = null)
      }
      record(TT, oT, IT, iT) {
        const zT = {
          totalMs: iT - oT,
          slotMs: IT.sentAt - oT,
          workerMs: IT.receivedAt - IT.sentAt,
          applyMs: iT - IT.receivedAt,
          ahead: IT.ahead,
          inFlight: IT.inFlight,
          fD: IT.fD,
          jobMs: IT.jobMs
        };
        if (this.edits[this.nextEdit] = zT, this.nextEdit = (this.nextEdit + 1) % 500, this.windowEdits.push(zT.totalMs), this.Bc(1), zT.totalMs < 100 || ++this.outliers > 5) return;
        const WT = TT => Math.round(TT);
        (0, kT.l)("remesh", `slow edit (${TT}) shown in ${WT(zT.totalMs)} ms: slot ${WT(zT.slotMs)}, worker ${WT(zT.workerMs)} (${zT.ahead} ahead, ${zT.inFlight}/${zT.fD} in flight; job ${WT(zT.jobMs)}), apply ${WT(zT.applyMs)}`)
      }
      summarise(TT) {
        const oT = (TT - this.windowStart) / 1e3;
        for (const [IT, iT] of this.pending) {
          const oT = iT.filter((oT => TT - oT.editAt <= 1e4));
          this.gaveUp += iT.length - oT.length, this.Bc(iT.length - oT.length), oT.length > 0 ? this.pending.set(IT, oT) : this.pending.delete(IT)
        }
        for (const [IT, iT] of this.jobs) TT - iT.sentAt > (iT.receivedAt > 0 ? 1e4 : 6e4) && this.jobs.delete(IT);
        if (this.jobsSent > 0 || this.roundTrips.length > 0 || this.windowEdits.length > 0 || this.gaveUp > 0) {
          const TT = BT(this.roundTrips),
            IT = BT(this.windowEdits),
            iT = Math.max(0, this.outliers - 5);
          (0, kT.l)("remesh", `${Math.round(this.frames/oT)} fps (longest ${Math.round(this.maxFrameMs)} ms) | ${this.jobsSent} jobs sent, up to ${this.maxAhead} ahead on a worker, capacity ${this.maxCapacity} | round trip p50 ${Math.round((0,zT.b)(TT,.5))} max ${Math.round((0,zT.b)(TT,1))} ms | ${IT.length} edits shown, p50 ${Math.round((0,zT.b)(IT,.5))} max ${Math.round((0,zT.b)(IT,1))} ms${iT>0?`, ${iT} more slow`:""}${this.gaveUp>0?`, ${this.gaveUp} never shown`:""}`)
        }
        this.windowStart = TT, this.frames = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      stats() {
        const TT = XT.map((TT => {
          const oT = BT(this.edits.map((oT => oT[TT])));
          return `${TT}: p50 ${Math.round((0,zT.b)(oT,.5))} p90 ${Math.round((0,zT.b)(oT,.9))} max ${Math.round((0,zT.b)(oT,1))}`
        }));
        return [`${this.edits.length} edits`, ...TT].join("\n")
      }
      dump() {
        const TT = this.edits.map((TT => XT.map((oT => Math.round(10 * TT[oT]) / 10)).join(",")));
        return [this.stats(), XT.join(","), ...TT].join("\n")
      }
    }
    class LT {
      constructor(TT, oT) {
        this.log = TT, this.FL = oT
      }
      edit(TT, oT, IT) {
        const [iT, zT, kT] = this.FL.iL.qiT(TT, oT, IT), WT = this.FL.iL.vK.EK(iT, zT, kT);
        WT && WT.RK && this.log.edit(ST(iT, zT, kT), performance.now())
      }
      sent(TT, oT, IT, iT, zT) {
        this.log.sent(ST(TT.i, TT.j, TT.k), oT, IT, iT, zT, FT, performance.now())
      }
      received(TT) {
        this.log.received(TT.meshJobId, TT.jobMs, performance.now())
      }
      failed(TT) {
        this.log.failed(TT)
      }
      applied(TT, oT) {
        this.log.applied(ST(TT.i, TT.j, TT.k), oT, performance.now())
      }
    }
    let xT = null,
      cT = null,
      KT = !1,
      MT = null;

    function rT() {
      return new Promise((TT => {
        null !== xT && xT.reported >= WT ? TT() : cT = TT
      }))
    }

    function AT() {
      const TT = new DT;
      return xT = TT, (0, kT.j)("remesh", (() => TT.dump())), (0, kT.e)("remeshStats", (() => {
        console.log(TT.stats())
      })), KT || (KT = !0, (0, iT.c)((TT => {
        (0, kT.l)("remesh", TT)
      }), rT)), TT
    }

    function gT(TT) {
      const oT = AT();
      MT = new LT(oT, TT), TT.jR.meshProbe = MT, TT.on("beforeRender", (() => {
        oT.frame(performance.now())
      }))
    }

    function hT(TT, oT, IT) {
      var iT;
      null === (iT = MT) || void 0 === iT || iT.edit(TT, oT, IT)
    }
  },
  36687: (TT, oT, IT) => {
    function iT(TT) {
      return "string" !== typeof TT || 2 !== TT.length && ":" !== TT[2] ? null : TT[0] + TT[1]
    }
    IT.d(oT, {
      e: () => MT,
      h: () => gT,
      l: () => XT,
      o: () => WT,
      q: () => kT,
      s: () => BT,
      u: () => rT,
      x: () => KT
    });
    const zT = ["op:ytInitialPlayerResponse.adPlacements", "op:ytInitialPlayerResponse.playerAds", "op:ytInitialPlayerResponse.adSlots", "op:playerResponse.adPlacements", "op:playerResponse.playerAds", "op:playerResponse.adSlots"];

    function kT(TT) {
      if (function(TT) {
          for (let oT = 0; oT < zT.length; oT++)
            if (TT === zT[oT]) return !0;
          return !1
        }(TT)) return !1;
      const oT = iT(TT);
      return "op" === oT || "ep" === oT || "wi" === oT || "pp" === oT || "fp:call" === TT || "fp:t" === TT
    }

    function WT(TT) {
      return "fp" === iT(TT) && !kT(TT)
    }

    function XT(TT) {
      if ("string" !== typeof TT) return !1;
      return "o" === TT[0] && "p" === TT[1] && (2 === TT.length || ":" === TT[2]) || "fp:call" === TT || "2" === TT || "t" === TT || "a" === TT
    }

    function BT(TT, oT) {
      return `~${function(TT){return TT.length<2?TT:":"===TT[1]?TT[0]:TT[0]+TT[1]}(oT)}~${TT}`
    }
    const FT = 200;

    function ST(TT) {
      let oT = TT.length - 1;
      for (let IT = 0; IT < 2; IT++) {
        const IT = oT;
        for (; oT >= 0 && TT[oT] >= "0" && TT[oT] <= "9";) oT--;
        if (oT < 0 || oT === IT || ":" !== TT[oT]) return -1;
        oT--
      }
      return oT + 1
    }

    function DT(TT) {
      return "unknown" === TT || ST(TT) >= 0
    }

    function LT(TT, oT) {
      return TT[oT] >= "\ud800" && TT[oT] <= "\udbff" && oT + 1 < TT.length && TT[oT + 1] >= "\udc00" && TT[oT + 1] <= "\udfff" ? 2 : 1
    }

    function xT(TT, oT, IT) {
      return 2 === IT ? 4 : TT[oT] <= "\x7f" ? 1 : TT[oT] <= "\u07ff" ? 2 : 3
    }

    function cT(TT, oT, IT) {
      let iT = 0;
      for (; iT < oT;) {
        const oT = LT(TT, iT),
          zT = xT(TT, iT, oT);
        if (zT > IT) break;
        IT -= zT, iT += oT
      }
      return iT
    }

    function KT(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0;
      if ("string" !== typeof TT || TT.length > FT || !DT(TT)) return "t";
      let IT = 2;
      for (let XT = 0; XT < TT.length;) {
        const oT = LT(TT, XT);
        IT += xT(TT, XT, oT), XT += oT
      }
      if (IT <= oT) return `t ${TT}`;
      const iT = ST(TT),
        zT = oT - 2 - (TT.length - iT);
      if (zT < 0) return "t";
      const kT = cT(TT, iT, zT);
      let WT = "t ";
      for (let XT = 0; XT < kT; XT++) WT += TT[XT];
      for (let XT = iT; XT < TT.length; XT++) WT += TT[XT];
      return WT
    }
    const MT = 62;

    function rT(TT) {
      let oT = "so:";
      const IT = cT(TT, TT.length, MT - oT.length);
      for (let iT = 0; iT < IT; iT++) oT += TT[iT];
      return oT
    }
    const AT = "BABYLON ";

    function gT(TT) {
      return rT(AT + TT)
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);