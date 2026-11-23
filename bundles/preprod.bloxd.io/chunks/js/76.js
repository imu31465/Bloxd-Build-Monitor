export const id = 76;
export const ids = [76];
export const modules = {
  4630: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => FC
    });
    var QC = ZC(20),
      wC = ZC(28),
      bC = ZC(1240),
      nC = ZC(2800);
    const fC = 3e4,
      oC = 1e3;

    function qC() {
      return "visible" === document.visibilityState && "inGame" === QC.b.get("gameState") && (0, bC.x)()
    }

    function FC(CC, zC) {
      (0, nC.l)() || function(CC, zC, ZC) {
        let QC = 0;
        const wC = setInterval((() => {
          zC() && (QC += oC, QC >= CC && (clearInterval(wC), ZC()))
        }), oC)
      }(fC, qC, (() => {
        zC().then((() => {
          CC(`saved for the player after ${fC/1e3} s of play`), (0, nC.t)(), wC.o.bp("chat", {
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
  34014: (CC, zC, ZC) => {
    function QC(CC, zC) {
      return 0 === CC.length ? 0 : CC[Math.min(CC.length - 1, Math.floor(zC * CC.length))]
    }

    function wC(CC) {
      return CC.toFixed(1)
    }
    ZC.d(zC, {
      b: () => wC,
      e: () => QC
    })
  },
  37778: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => qC,
      d: () => FC,
      f: () => AC,
      i: () => RC,
      l: () => GC
    });
    var QC = ZC(4630),
      wC = ZC(34014),
      bC = ZC(2800);
    const nC = 20,
      fC = ["totalMs", "slotMs", "workerMs", "applyMs", "ahead", "inFlight", "HW", "jobMs"];

    function oC(CC) {
      return [...CC].sort(((CC, zC) => CC - zC))
    }
    const qC = [];

    function FC(CC, zC, ZC) {
      return `${CC},${zC},${ZC}`
    }
    class WC {
      constructor() {
        this.pending = new Map, this.jobs = new Map, this.edits = [], this.nextEdit = 0, this.reported = 0, this.windowStart = performance.now(), this.frames = 0, this.lastFrameAt = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      edit(CC, zC) {
        var ZC;
        const QC = null !== (ZC = this.pending.get(CC)) && void 0 !== ZC ? ZC : [];
        QC.push({
          editAt: zC,
          meshJobId: 0
        }), this.pending.set(CC, QC)
      }
      frame(CC) {
        this.lastFrameAt > 0 && (this.maxFrameMs = Math.max(this.maxFrameMs, CC - this.lastFrameAt)), this.lastFrameAt = CC, this.frames++, CC - this.windowStart >= 1e3 && this.summarise(CC)
      }
      sent(CC, zC, ZC, QC, wC, bC, nC) {
        this.jobs.set(zC, {
          sentAt: nC,
          receivedAt: 0,
          ahead: ZC,
          inFlight: QC,
          HW: wC,
          jobMs: 0
        }), this.jobsSent++, this.maxAhead = Math.max(this.maxAhead, ZC), this.maxCapacity = Math.max(this.maxCapacity, wC);
        for (const oC of null !== (fC = this.pending.get(CC)) && void 0 !== fC ? fC : []) {
          var fC;
          bC.includes(oC.meshJobId) || (oC.meshJobId = zC)
        }
      }
      received(CC, zC, ZC) {
        const QC = this.jobs.get(CC);
        void 0 !== QC && (this.roundTrips.push(ZC - QC.sentAt), QC.receivedAt = ZC, QC.jobMs = zC)
      }
      failed(CC) {
        this.jobs.delete(CC)
      }
      reassign(CC, zC, ZC) {
        this.jobs.delete(zC);
        for (const wC of null !== (QC = this.pending.get(CC)) && void 0 !== QC ? QC : []) {
          var QC;
          wC.meshJobId === zC && (wC.meshJobId = ZC)
        }
      }
      applied(CC, zC, ZC) {
        const QC = this.jobs.get(zC);
        this.jobs.delete(zC), void 0 !== QC && this.show(CC, QC, ZC, (CC => CC.meshJobId === zC))
      }
      emptied(CC, zC) {
        const ZC = {
          sentAt: zC,
          receivedAt: zC,
          ahead: 0,
          inFlight: 0,
          HW: 0,
          jobMs: 0
        };
        this.show(CC, ZC, zC, (() => !0))
      }
      show(CC, zC, ZC, QC) {
        const wC = this.pending.get(CC);
        if (!wC) return;
        const bC = wC.filter((wC => !QC(wC) || (this.record(CC, wC.editAt, zC, ZC), !1)));
        bC.length > 0 ? this.pending.set(CC, bC) : this.pending.delete(CC)
      }
      Cg(CC) {
        this.reported += CC, this === MC && this.reported >= nC && null !== gC && (gC(), gC = null)
      }
      record(CC, zC, ZC, QC) {
        const wC = {
          totalMs: QC - zC,
          slotMs: ZC.sentAt - zC,
          workerMs: ZC.receivedAt - ZC.sentAt,
          applyMs: QC - ZC.receivedAt,
          ahead: ZC.ahead,
          inFlight: ZC.inFlight,
          HW: ZC.HW,
          jobMs: ZC.jobMs
        };
        if (this.edits[this.nextEdit] = wC, this.nextEdit = (this.nextEdit + 1) % 500, this.windowEdits.push(wC.totalMs), this.Cg(1), wC.totalMs < 100 || ++this.outliers > 5) return;
        const nC = CC => Math.round(CC);
        (0, bC.i)("remesh", `slow edit (${CC}) shown in ${nC(wC.totalMs)} ms: slot ${nC(wC.slotMs)}, worker ${nC(wC.workerMs)} (${wC.ahead} ahead, ${wC.inFlight}/${wC.HW} in flight; job ${nC(wC.jobMs)}), apply ${nC(wC.applyMs)}`)
      }
      summarise(CC) {
        const zC = (CC - this.windowStart) / 1e3;
        for (const [ZC, QC] of this.pending) {
          const zC = QC.filter((zC => CC - zC.editAt <= 1e4));
          this.gaveUp += QC.length - zC.length, this.Cg(QC.length - zC.length), zC.length > 0 ? this.pending.set(ZC, zC) : this.pending.delete(ZC)
        }
        for (const [ZC, QC] of this.jobs) CC - QC.sentAt > (QC.receivedAt > 0 ? 1e4 : 6e4) && this.jobs.delete(ZC);
        if (this.jobsSent > 0 || this.roundTrips.length > 0 || this.windowEdits.length > 0 || this.gaveUp > 0) {
          const CC = oC(this.roundTrips),
            ZC = oC(this.windowEdits),
            QC = Math.max(0, this.outliers - 5);
          (0, bC.i)("remesh", `${Math.round(this.frames/zC)} fps (longest ${Math.round(this.maxFrameMs)} ms) | ${this.jobsSent} jobs sent, up to ${this.maxAhead} ahead on a worker, capacity ${this.maxCapacity} | round trip p50 ${Math.round((0,wC.e)(CC,.5))} max ${Math.round((0,wC.e)(CC,1))} ms | ${ZC.length} edits shown, p50 ${Math.round((0,wC.e)(ZC,.5))} max ${Math.round((0,wC.e)(ZC,1))} ms${QC>0?`, ${QC} more slow`:""}${this.gaveUp>0?`, ${this.gaveUp} never shown`:""}`)
        }
        this.windowStart = CC, this.frames = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      stats() {
        const CC = fC.map((CC => {
          const zC = oC(this.edits.map((zC => zC[CC])));
          return `${CC}: p50 ${Math.round((0,wC.e)(zC,.5))} p90 ${Math.round((0,wC.e)(zC,.9))} max ${Math.round((0,wC.e)(zC,1))}`
        }));
        return [`${this.edits.length} edits`, ...CC].join("\n")
      }
      dump() {
        const CC = this.edits.map((CC => fC.map((zC => Math.round(10 * CC[zC]) / 10)).join(",")));
        return [this.stats(), fC.join(","), ...CC].join("\n")
      }
    }
    class NC {
      constructor(CC, zC) {
        this.log = CC, this.MN = zC
      }
      edit(CC, zC, ZC) {
        const [QC, wC, bC] = this.MN.fN.kQC(CC, zC, ZC), nC = this.MN.fN.PS.GS(QC, wC, bC);
        nC && nC.SS && this.log.edit(FC(QC, wC, bC), performance.now())
      }
      sent(CC, zC, ZC, QC, wC) {
        this.log.sent(FC(CC.i, CC.j, CC.k), zC, ZC, QC, wC, qC, performance.now())
      }
      received(CC) {
        this.log.received(CC.meshJobId, CC.jobMs, performance.now())
      }
      failed(CC) {
        this.log.failed(CC)
      }
      applied(CC, zC) {
        this.log.applied(FC(CC.i, CC.j, CC.k), zC, performance.now())
      }
    }
    let MC = null,
      gC = null,
      SC = !1,
      pC = null;

    function PC() {
      return new Promise((CC => {
        null !== MC && MC.reported >= nC ? CC() : gC = CC
      }))
    }

    function GC() {
      const CC = new WC;
      return MC = CC, (0, bC.e)("remesh", (() => CC.dump())), (0, bC.b)("remeshStats", (() => {
        console.log(CC.stats())
      })), SC || (SC = !0, (0, QC.d)((CC => {
        (0, bC.i)("remesh", CC)
      }), PC)), CC
    }

    function RC(CC) {
      const zC = GC();
      pC = new NC(zC, CC), CC.JA.meshProbe = pC, CC.on("beforeRender", (() => {
        zC.frame(performance.now())
      }))
    }

    function AC(CC, zC, ZC) {
      var QC;
      null === (QC = pC) || void 0 === QC || QC.edit(CC, zC, ZC)
    }
  },
  37525: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => QC
    });
    const QC = {
      noaReady: null,
      chunkRequested: null,
      beforeServerListeners: null,
      wasmNetReady: null
    }
  },
  37568: (CC, zC, ZC) => {
    function QC(CC) {
      return "string" !== typeof CC || 2 !== CC.length && ":" !== CC[2] ? null : CC[0] + CC[1]
    }
    ZC.d(zC, {
      A: () => oC,
      C: () => PC,
      F: () => SC,
      d: () => pC,
      f: () => JC,
      j: () => xC,
      n: () => IC,
      r: () => fC,
      u: () => nC,
      y: () => bC
    });
    const wC = ["op:ytInitialPlayerResponse.adPlacements", "op:ytInitialPlayerResponse.playerAds", "op:ytInitialPlayerResponse.adSlots", "op:playerResponse.adPlacements", "op:playerResponse.playerAds", "op:playerResponse.adSlots"];

    function bC(CC) {
      if (function(CC) {
          for (let zC = 0; zC < wC.length; zC++)
            if (CC === wC[zC]) return !0;
          return !1
        }(CC)) return !1;
      const zC = QC(CC);
      return "op" === zC || "ep" === zC || "wi" === zC || "pp" === zC || "fp:call" === CC || "fp:t" === CC
    }

    function nC(CC) {
      return "fp" === QC(CC) && !bC(CC)
    }

    function fC(CC) {
      if ("string" !== typeof CC) return !1;
      return "o" === CC[0] && "p" === CC[1] && (2 === CC.length || ":" === CC[2]) || "fp:call" === CC || "2" === CC || "t" === CC || "a" === CC
    }

    function oC(CC, zC) {
      return `~${function(CC){return CC.length<2?CC:":"===CC[1]?CC[0]:CC[0]+CC[1]}(zC)}~${CC}`
    }
    const qC = 200;

    function FC(CC) {
      let zC = CC.length - 1;
      for (let ZC = 0; ZC < 2; ZC++) {
        const ZC = zC;
        for (; zC >= 0 && CC[zC] >= "0" && CC[zC] <= "9";) zC--;
        if (zC < 0 || zC === ZC || ":" !== CC[zC]) return -1;
        zC--
      }
      return zC + 1
    }

    function WC(CC) {
      return "unknown" === CC || FC(CC) >= 0
    }

    function NC(CC, zC) {
      return CC[zC] >= "\ud800" && CC[zC] <= "\udbff" && zC + 1 < CC.length && CC[zC + 1] >= "\udc00" && CC[zC + 1] <= "\udfff" ? 2 : 1
    }

    function MC(CC, zC, ZC) {
      return 2 === ZC ? 4 : CC[zC] <= "\x7f" ? 1 : CC[zC] <= "\u07ff" ? 2 : 3
    }

    function gC(CC, zC, ZC) {
      let QC = 0;
      for (; QC < zC;) {
        const zC = NC(CC, QC),
          wC = MC(CC, QC, zC);
        if (wC > ZC) break;
        ZC -= wC, QC += zC
      }
      return QC
    }

    function SC(CC) {
      let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0;
      if ("string" !== typeof CC || CC.length > qC || !WC(CC)) return "t";
      let ZC = 2;
      for (let fC = 0; fC < CC.length;) {
        const zC = NC(CC, fC);
        ZC += MC(CC, fC, zC), fC += zC
      }
      if (ZC <= zC) return `t ${CC}`;
      const QC = FC(CC),
        wC = zC - 2 - (CC.length - QC);
      if (wC < 0) return "t";
      const bC = gC(CC, QC, wC);
      let nC = "t ";
      for (let fC = 0; fC < bC; fC++) nC += CC[fC];
      for (let fC = QC; fC < CC.length; fC++) nC += CC[fC];
      return nC
    }
    const pC = 62;

    function PC(CC) {
      let zC = "so:";
      const ZC = gC(CC, CC.length, pC - zC.length);
      for (let QC = 0; QC < ZC; QC++) zC += CC[QC];
      return zC
    }
    const GC = "BABYLON ",
      RC = "DECODE ",
      AC = "BABYLON@ ";

    function xC(CC) {
      return PC(GC + CC)
    }

    function JC(CC, zC) {
      return PC(AC + CC + " " + zC)
    }

    function IC(CC) {
      return PC(RC + CC)
    }
  },
  37814: CC => {
    CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v+LFy8yvH//noGXl/ccuq8A/vQKd00yOdIAAAAASUVORK5CYII="
  },
  37802: CC => {
    CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAALUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMnBzczN8/PjxHLLPAORwCnfkvOdNAAAAAElFTkSuQmCC"
  },
  37816: CC => {
    CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  },
  37793: CC => {
    CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAANUlEQVQYGWM8CwQMeAATHjmw1JBQAHLp/wMHDvy/ePHi/4CAgP937tz5Ly6u+5/P3uw/KAgAgjwWhHm22JoAAAAASUVORK5CYII="
  },
  37808: CC => {
    CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);