export const id = 76;
export const ids = [76];
export const modules = {
  4718: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => RD
    });
    var pD = wD(20),
      sD = wD(25),
      KD = wD(1299),
      rD = wD(2811);
    const LD = 3e4,
      cD = 1e3;

    function gD() {
      return "visible" === document.visibilityState && "inGame" === pD.e.get("gameState") && (0, KD.s)()
    }

    function RD(DD, zD) {
      (0, rD.v)() || function(DD, zD, wD) {
        let pD = 0;
        const sD = setInterval((() => {
          zD() && (pD += cD, pD >= DD && (clearInterval(sD), wD()))
        }), cD)
      }(LD, gD, (() => {
        zD().then((() => {
          DD(`saved for the player after ${LD/1e3} s of play`), (0, rD.D)(), sD.l.KG("chat", {
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
  34070: (DD, zD, wD) => {
    function pD(DD, zD) {
      return 0 === DD.length ? 0 : DD[Math.min(DD.length - 1, Math.floor(zD * DD.length))]
    }

    function sD(DD) {
      return DD.toFixed(1)
    }
    wD.d(zD, {
      d: () => sD,
      h: () => pD
    })
  },
  37927: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => gD,
      f: () => RD,
      h: () => OD,
      j: () => MD,
      n: () => nD
    });
    var pD = wD(4718),
      sD = wD(34070),
      KD = wD(2811);
    const rD = 20,
      LD = ["totalMs", "slotMs", "workerMs", "applyMs", "ahead", "inFlight", "bA", "jobMs"];

    function cD(DD) {
      return [...DD].sort(((DD, zD) => DD - zD))
    }
    const gD = [];

    function RD(DD, zD, wD) {
      return `${DD},${zD},${wD}`
    }
    class AD {
      constructor() {
        this.pending = new Map, this.jobs = new Map, this.edits = [], this.nextEdit = 0, this.reported = 0, this.windowStart = performance.now(), this.frames = 0, this.lastFrameAt = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      edit(DD, zD) {
        var wD;
        const pD = null !== (wD = this.pending.get(DD)) && void 0 !== wD ? wD : [];
        pD.push({
          editAt: zD,
          meshJobId: 0
        }), this.pending.set(DD, pD)
      }
      frame(DD) {
        this.lastFrameAt > 0 && (this.maxFrameMs = Math.max(this.maxFrameMs, DD - this.lastFrameAt)), this.lastFrameAt = DD, this.frames++, DD - this.windowStart >= 1e3 && this.summarise(DD)
      }
      sent(DD, zD, wD, pD, sD, KD, rD) {
        this.jobs.set(zD, {
          sentAt: rD,
          receivedAt: 0,
          ahead: wD,
          inFlight: pD,
          bA: sD,
          jobMs: 0
        }), this.jobsSent++, this.maxAhead = Math.max(this.maxAhead, wD), this.maxCapacity = Math.max(this.maxCapacity, sD);
        for (const cD of null !== (LD = this.pending.get(DD)) && void 0 !== LD ? LD : []) {
          var LD;
          KD.includes(cD.meshJobId) || (cD.meshJobId = zD)
        }
      }
      received(DD, zD, wD) {
        const pD = this.jobs.get(DD);
        void 0 !== pD && (this.roundTrips.push(wD - pD.sentAt), pD.receivedAt = wD, pD.jobMs = zD)
      }
      failed(DD) {
        this.jobs.delete(DD)
      }
      reassign(DD, zD, wD) {
        this.jobs.delete(zD);
        for (const sD of null !== (pD = this.pending.get(DD)) && void 0 !== pD ? pD : []) {
          var pD;
          sD.meshJobId === zD && (sD.meshJobId = wD)
        }
      }
      applied(DD, zD, wD) {
        const pD = this.jobs.get(zD);
        this.jobs.delete(zD), void 0 !== pD && this.show(DD, pD, wD, (DD => DD.meshJobId === zD))
      }
      emptied(DD, zD) {
        const wD = {
          sentAt: zD,
          receivedAt: zD,
          ahead: 0,
          inFlight: 0,
          bA: 0,
          jobMs: 0
        };
        this.show(DD, wD, zD, (() => !0))
      }
      show(DD, zD, wD, pD) {
        const sD = this.pending.get(DD);
        if (!sD) return;
        const KD = sD.filter((sD => !pD(sD) || (this.record(DD, sD.editAt, zD, wD), !1)));
        KD.length > 0 ? this.pending.set(DD, KD) : this.pending.delete(DD)
      }
      sI(DD) {
        this.reported += DD, this === fD && this.reported >= rD && null !== ID && (ID(), ID = null)
      }
      record(DD, zD, wD, pD) {
        const sD = {
          totalMs: pD - zD,
          slotMs: wD.sentAt - zD,
          workerMs: wD.receivedAt - wD.sentAt,
          applyMs: pD - wD.receivedAt,
          ahead: wD.ahead,
          inFlight: wD.inFlight,
          bA: wD.bA,
          jobMs: wD.jobMs
        };
        if (this.edits[this.nextEdit] = sD, this.nextEdit = (this.nextEdit + 1) % 500, this.windowEdits.push(sD.totalMs), this.sI(1), sD.totalMs < 100 || ++this.outliers > 5) return;
        const rD = DD => Math.round(DD);
        (0, KD.l)("remesh", `slow edit (${DD}) shown in ${rD(sD.totalMs)} ms: slot ${rD(sD.slotMs)}, worker ${rD(sD.workerMs)} (${sD.ahead} ahead, ${sD.inFlight}/${sD.bA} in flight; job ${rD(sD.jobMs)}), apply ${rD(sD.applyMs)}`)
      }
      summarise(DD) {
        const zD = (DD - this.windowStart) / 1e3;
        for (const [wD, pD] of this.pending) {
          const zD = pD.filter((zD => DD - zD.editAt <= 1e4));
          this.gaveUp += pD.length - zD.length, this.sI(pD.length - zD.length), zD.length > 0 ? this.pending.set(wD, zD) : this.pending.delete(wD)
        }
        for (const [wD, pD] of this.jobs) DD - pD.sentAt > (pD.receivedAt > 0 ? 1e4 : 6e4) && this.jobs.delete(wD);
        if (this.jobsSent > 0 || this.roundTrips.length > 0 || this.windowEdits.length > 0 || this.gaveUp > 0) {
          const DD = cD(this.roundTrips),
            wD = cD(this.windowEdits),
            pD = Math.max(0, this.outliers - 5);
          (0, KD.l)("remesh", `${Math.round(this.frames/zD)} fps (longest ${Math.round(this.maxFrameMs)} ms) | ${this.jobsSent} jobs sent, up to ${this.maxAhead} ahead on a worker, capacity ${this.maxCapacity} | round trip p50 ${Math.round((0,sD.h)(DD,.5))} max ${Math.round((0,sD.h)(DD,1))} ms | ${wD.length} edits shown, p50 ${Math.round((0,sD.h)(wD,.5))} max ${Math.round((0,sD.h)(wD,1))} ms${pD>0?`, ${pD} more slow`:""}${this.gaveUp>0?`, ${this.gaveUp} never shown`:""}`)
        }
        this.windowStart = DD, this.frames = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      stats() {
        const DD = LD.map((DD => {
          const zD = cD(this.edits.map((zD => zD[DD])));
          return `${DD}: p50 ${Math.round((0,sD.h)(zD,.5))} p90 ${Math.round((0,sD.h)(zD,.9))} max ${Math.round((0,sD.h)(zD,1))}`
        }));
        return [`${this.edits.length} edits`, ...DD].join("\n")
      }
      dump() {
        const DD = this.edits.map((DD => LD.map((zD => Math.round(10 * DD[zD]) / 10)).join(",")));
        return [this.stats(), LD.join(","), ...DD].join("\n")
      }
    }
    class UD {
      constructor(DD, zD) {
        this.log = DD, this.AU = zD
      }
      edit(DD, zD, wD) {
        const [pD, sD, KD] = this.AU.KU.OsD(DD, zD, wD), rD = this.AU.KU.EB.QB(pD, sD, KD);
        rD && rD.OB && this.log.edit(RD(pD, sD, KD), performance.now())
      }
      sent(DD, zD, wD, pD, sD) {
        this.log.sent(RD(DD.i, DD.j, DD.k), zD, wD, pD, sD, gD, performance.now())
      }
      received(DD) {
        this.log.received(DD.meshJobId, DD.jobMs, performance.now())
      }
      failed(DD) {
        this.log.failed(DD)
      }
      applied(DD, zD) {
        this.log.applied(RD(DD.i, DD.j, DD.k), zD, performance.now())
      }
    }
    let fD = null,
      ID = null,
      BD = !1,
      GD = null;

    function hD() {
      return new Promise((DD => {
        null !== fD && fD.reported >= rD ? DD() : ID = DD
      }))
    }

    function nD() {
      const DD = new AD;
      return fD = DD, (0, KD.i)("remesh", (() => DD.dump())), (0, KD.c)("remeshStats", (() => {
        console.log(DD.stats())
      })), BD || (BD = !0, (0, pD.d)((DD => {
        (0, KD.l)("remesh", DD)
      }), hD)), DD
    }

    function MD(DD) {
      const zD = nD();
      GD = new UD(zD, DD), DD.qJ.meshProbe = GD, DD.on("beforeRender", (() => {
        zD.frame(performance.now())
      }))
    }

    function OD(DD, zD, wD) {
      var pD;
      null === (pD = GD) || void 0 === pD || pD.edit(DD, zD, wD)
    }
  },
  37678: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => pD
    });
    const pD = {
      noaReady: null,
      chunkRequested: null,
      beforeServerListeners: null,
      wasmNetReady: null
    }
  },
  37724: (DD, zD, wD) => {
    function pD(DD) {
      return "string" !== typeof DD || 2 !== DD.length && ":" !== DD[2] ? null : DD[0] + DD[1]
    }
    wD.d(zD, {
      b: () => GD,
      c: () => ED,
      e: () => JD,
      f: () => QD,
      h: () => LD,
      k: () => rD,
      l: () => KD,
      m: () => cD,
      q: () => hD,
      u: () => BD
    });
    const sD = ["op:ytInitialPlayerResponse.adPlacements", "op:ytInitialPlayerResponse.playerAds", "op:ytInitialPlayerResponse.adSlots", "op:playerResponse.adPlacements", "op:playerResponse.playerAds", "op:playerResponse.adSlots"];

    function KD(DD) {
      if (function(DD) {
          for (let zD = 0; zD < sD.length; zD++)
            if (DD === sD[zD]) return !0;
          return !1
        }(DD)) return !1;
      const zD = pD(DD);
      return "op" === zD || "ep" === zD || "wi" === zD || "pp" === zD || "fp:call" === DD || "fp:t" === DD
    }

    function rD(DD) {
      return "fp" === pD(DD) && !KD(DD)
    }

    function LD(DD) {
      if ("string" !== typeof DD) return !1;
      return "o" === DD[0] && "p" === DD[1] && (2 === DD.length || ":" === DD[2]) || "fp:call" === DD || "2" === DD || "t" === DD || "a" === DD
    }

    function cD(DD, zD) {
      return `~${function(DD){return DD.length<2?DD:":"===DD[1]?DD[0]:DD[0]+DD[1]}(zD)}~${DD}`
    }
    const gD = 200;

    function RD(DD) {
      let zD = DD.length - 1;
      for (let wD = 0; wD < 2; wD++) {
        const wD = zD;
        for (; zD >= 0 && DD[zD] >= "0" && DD[zD] <= "9";) zD--;
        if (zD < 0 || zD === wD || ":" !== DD[zD]) return -1;
        zD--
      }
      return zD + 1
    }

    function AD(DD) {
      return "unknown" === DD || RD(DD) >= 0
    }

    function UD(DD, zD) {
      return DD[zD] >= "\ud800" && DD[zD] <= "\udbff" && zD + 1 < DD.length && DD[zD + 1] >= "\udc00" && DD[zD + 1] <= "\udfff" ? 2 : 1
    }

    function fD(DD, zD, wD) {
      return 2 === wD ? 4 : DD[zD] <= "\x7f" ? 1 : DD[zD] <= "\u07ff" ? 2 : 3
    }

    function ID(DD, zD, wD) {
      let pD = 0;
      for (; pD < zD;) {
        const zD = UD(DD, pD),
          sD = fD(DD, pD, zD);
        if (sD > wD) break;
        wD -= sD, pD += zD
      }
      return pD
    }

    function BD(DD) {
      let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0;
      if ("string" !== typeof DD || DD.length > gD || !AD(DD)) return "t";
      let wD = 2;
      for (let LD = 0; LD < DD.length;) {
        const zD = UD(DD, LD);
        wD += fD(DD, LD, zD), LD += zD
      }
      if (wD <= zD) return `t ${DD}`;
      const pD = RD(DD),
        sD = zD - 2 - (DD.length - pD);
      if (sD < 0) return "t";
      const KD = ID(DD, pD, sD);
      let rD = "t ";
      for (let LD = 0; LD < KD; LD++) rD += DD[LD];
      for (let LD = pD; LD < DD.length; LD++) rD += DD[LD];
      return rD
    }
    const GD = 62;

    function hD(DD) {
      let zD = "so:";
      const wD = ID(DD, DD.length, GD - zD.length);
      for (let pD = 0; pD < wD; pD++) zD += DD[pD];
      return zD
    }
    const nD = "BABYLON ",
      MD = "DECODE ",
      OD = "BABYLON@ ";

    function JD(DD) {
      return hD(nD + DD)
    }

    function ED(DD, zD) {
      return hD(OD + DD + " " + zD)
    }

    function QD(DD) {
      return hD(MD + DD)
    }
  },
  37960: DD => {
    DD.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v+LFy8yvH//noGXl/ccuq8A/vQKd00yOdIAAAAASUVORK5CYII="
  },
  37947: DD => {
    DD.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAALUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMnBzczN8/PjxHLLPAORwCnfkvOdNAAAAAElFTkSuQmCC"
  },
  37966: DD => {
    DD.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  },
  37943: DD => {
    DD.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAANUlEQVQYGWM8CwQMeAATHjmw1JBQAHLp/wMHDvy/ePHi/4CAgP937tz5Ly6u+5/P3uw/KAgAgjwWhHm22JoAAAAASUVORK5CYII="
  },
  37955: DD => {
    DD.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);