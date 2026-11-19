export const id = 73;
export const ids = [73];
export const modules = {
  4492: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => SD
    });
    var ID = cD(16),
      pD = cD(20),
      iD = cD(1284),
      fD = cD(2727);
    const bD = 3e4,
      QD = 1e3;

    function wD() {
      return "visible" === document.visibilityState && "inGame" === ID.d.get("gameState") && (0, iD.r)()
    }

    function SD(DD, CD) {
      (0, fD.q)() || function(DD, CD, cD) {
        let ID = 0;
        const pD = setInterval((() => {
          CD() && (ID += QD, ID >= DD && (clearInterval(pD), cD()))
        }), QD)
      }(bD, wD, (() => {
        CD().then((() => {
          DD(`saved for the player after ${bD/1e3} s of play`), (0, fD.w)(), pD.i.Uo("chat", {
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
  8906: (DD, CD, cD) => {
    function ID(DD, CD) {
      return 0 === DD.length ? 0 : DD[Math.min(DD.length - 1, Math.floor(CD * DD.length))]
    }
    cD.d(CD, {
      b: () => ID
    })
  },
  37329: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => wD,
      d: () => SD,
      e: () => XD,
      h: () => gD,
      i: () => ND
    });
    var ID = cD(4492),
      pD = cD(8906),
      iD = cD(2727);
    const fD = 20,
      bD = ["totalMs", "slotMs", "workerMs", "applyMs", "ahead", "inFlight", "LB", "jobMs"];

    function QD(DD) {
      return [...DD].sort(((DD, CD) => DD - CD))
    }
    const wD = [];

    function SD(DD, CD, cD) {
      return `${DD},${CD},${cD}`
    }
    class BD {
      constructor() {
        this.pending = new Map, this.jobs = new Map, this.edits = [], this.nextEdit = 0, this.reported = 0, this.windowStart = performance.now(), this.frames = 0, this.lastFrameAt = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      edit(DD, CD) {
        var cD;
        const ID = null !== (cD = this.pending.get(DD)) && void 0 !== cD ? cD : [];
        ID.push({
          editAt: CD,
          meshJobId: 0
        }), this.pending.set(DD, ID)
      }
      frame(DD) {
        this.lastFrameAt > 0 && (this.maxFrameMs = Math.max(this.maxFrameMs, DD - this.lastFrameAt)), this.lastFrameAt = DD, this.frames++, DD - this.windowStart >= 1e3 && this.summarise(DD)
      }
      sent(DD, CD, cD, ID, pD, iD, fD) {
        this.jobs.set(CD, {
          sentAt: fD,
          receivedAt: 0,
          ahead: cD,
          inFlight: ID,
          LB: pD,
          jobMs: 0
        }), this.jobsSent++, this.maxAhead = Math.max(this.maxAhead, cD), this.maxCapacity = Math.max(this.maxCapacity, pD);
        for (const QD of null !== (bD = this.pending.get(DD)) && void 0 !== bD ? bD : []) {
          var bD;
          iD.includes(QD.meshJobId) || (QD.meshJobId = CD)
        }
      }
      received(DD, CD, cD) {
        const ID = this.jobs.get(DD);
        void 0 !== ID && (this.roundTrips.push(cD - ID.sentAt), ID.receivedAt = cD, ID.jobMs = CD)
      }
      failed(DD) {
        this.jobs.delete(DD)
      }
      reassign(DD, CD, cD) {
        this.jobs.delete(CD);
        for (const pD of null !== (ID = this.pending.get(DD)) && void 0 !== ID ? ID : []) {
          var ID;
          pD.meshJobId === CD && (pD.meshJobId = cD)
        }
      }
      applied(DD, CD, cD) {
        const ID = this.jobs.get(CD);
        this.jobs.delete(CD), void 0 !== ID && this.show(DD, ID, cD, (DD => DD.meshJobId === CD))
      }
      emptied(DD, CD) {
        const cD = {
          sentAt: CD,
          receivedAt: CD,
          ahead: 0,
          inFlight: 0,
          LB: 0,
          jobMs: 0
        };
        this.show(DD, cD, CD, (() => !0))
      }
      show(DD, CD, cD, ID) {
        const pD = this.pending.get(DD);
        if (!pD) return;
        const iD = pD.filter((pD => !ID(pD) || (this.record(DD, pD.editAt, CD, cD), !1)));
        iD.length > 0 ? this.pending.set(DD, iD) : this.pending.delete(DD)
      }
      Nt(DD) {
        this.reported += DD, this === MD && this.reported >= fD && null !== tD && (tD(), tD = null)
      }
      record(DD, CD, cD, ID) {
        const pD = {
          totalMs: ID - CD,
          slotMs: cD.sentAt - CD,
          workerMs: cD.receivedAt - cD.sentAt,
          applyMs: ID - cD.receivedAt,
          ahead: cD.ahead,
          inFlight: cD.inFlight,
          LB: cD.LB,
          jobMs: cD.jobMs
        };
        if (this.edits[this.nextEdit] = pD, this.nextEdit = (this.nextEdit + 1) % 500, this.windowEdits.push(pD.totalMs), this.Nt(1), pD.totalMs < 100 || ++this.outliers > 5) return;
        const fD = DD => Math.round(DD);
        (0, iD.j)("remesh", `slow edit (${DD}) shown in ${fD(pD.totalMs)} ms: slot ${fD(pD.slotMs)}, worker ${fD(pD.workerMs)} (${pD.ahead} ahead, ${pD.inFlight}/${pD.LB} in flight; job ${fD(pD.jobMs)}), apply ${fD(pD.applyMs)}`)
      }
      summarise(DD) {
        const CD = (DD - this.windowStart) / 1e3;
        for (const [cD, ID] of this.pending) {
          const CD = ID.filter((CD => DD - CD.editAt <= 1e4));
          this.gaveUp += ID.length - CD.length, this.Nt(ID.length - CD.length), CD.length > 0 ? this.pending.set(cD, CD) : this.pending.delete(cD)
        }
        for (const [cD, ID] of this.jobs) DD - ID.sentAt > (ID.receivedAt > 0 ? 1e4 : 6e4) && this.jobs.delete(cD);
        if (this.jobsSent > 0 || this.roundTrips.length > 0 || this.windowEdits.length > 0 || this.gaveUp > 0) {
          const DD = QD(this.roundTrips),
            cD = QD(this.windowEdits),
            ID = Math.max(0, this.outliers - 5);
          (0, iD.j)("remesh", `${Math.round(this.frames/CD)} fps (longest ${Math.round(this.maxFrameMs)} ms) | ${this.jobsSent} jobs sent, up to ${this.maxAhead} ahead on a worker, capacity ${this.maxCapacity} | round trip p50 ${Math.round((0,pD.b)(DD,.5))} max ${Math.round((0,pD.b)(DD,1))} ms | ${cD.length} edits shown, p50 ${Math.round((0,pD.b)(cD,.5))} max ${Math.round((0,pD.b)(cD,1))} ms${ID>0?`, ${ID} more slow`:""}${this.gaveUp>0?`, ${this.gaveUp} never shown`:""}`)
        }
        this.windowStart = DD, this.frames = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      stats() {
        const DD = bD.map((DD => {
          const CD = QD(this.edits.map((CD => CD[DD])));
          return `${DD}: p50 ${Math.round((0,pD.b)(CD,.5))} p90 ${Math.round((0,pD.b)(CD,.9))} max ${Math.round((0,pD.b)(CD,1))}`
        }));
        return [`${this.edits.length} edits`, ...DD].join("\n")
      }
      dump() {
        const DD = this.edits.map((DD => bD.map((CD => Math.round(10 * DD[CD]) / 10)).join(",")));
        return [this.stats(), bD.join(","), ...DD].join("\n")
      }
    }
    class yD {
      constructor(DD, CD) {
        this.log = DD, this.ny = CD
      }
      edit(DD, CD, cD) {
        const [ID, pD, iD] = this.ny.Zy.xID(DD, CD, cD), fD = this.ny.Zy.GZ.RZ(ID, pD, iD);
        fD && fD.LZ && this.log.edit(SD(ID, pD, iD), performance.now())
      }
      sent(DD, CD, cD, ID, pD) {
        this.log.sent(SD(DD.i, DD.j, DD.k), CD, cD, ID, pD, wD, performance.now())
      }
      received(DD) {
        this.log.received(DD.meshJobId, DD.jobMs, performance.now())
      }
      failed(DD) {
        this.log.failed(DD)
      }
      applied(DD, CD) {
        this.log.applied(SD(DD.i, DD.j, DD.k), CD, performance.now())
      }
    }
    let MD = null,
      tD = null,
      ZD = !1,
      oD = null;

    function vD() {
      return new Promise((DD => {
        null !== MD && MD.reported >= fD ? DD() : tD = DD
      }))
    }

    function ND() {
      const DD = new BD;
      return MD = DD, (0, iD.h)("remesh", (() => DD.dump())), (0, iD.b)("remeshStats", (() => {
        console.log(DD.stats())
      })), ZD || (ZD = !0, (0, ID.d)((DD => {
        (0, iD.j)("remesh", DD)
      }), vD)), DD
    }

    function gD(DD) {
      const CD = ND();
      oD = new yD(CD, DD), DD.RP.meshProbe = oD, DD.on("beforeRender", (() => {
        CD.frame(performance.now())
      }))
    }

    function XD(DD, CD, cD) {
      var ID;
      null === (ID = oD) || void 0 === ID || ID.edit(DD, CD, cD)
    }
  },
  37134: (DD, CD, cD) => {
    function ID(DD) {
      return "string" !== typeof DD || 2 !== DD.length && ":" !== DD[2] ? null : DD[0] + DD[1]
    }
    cD.d(CD, {
      e: () => oD,
      f: () => gD,
      j: () => bD,
      m: () => fD,
      o: () => iD,
      r: () => QD,
      s: () => vD,
      v: () => ZD
    });
    const pD = ["op:ytInitialPlayerResponse.adPlacements", "op:ytInitialPlayerResponse.playerAds", "op:ytInitialPlayerResponse.adSlots", "op:playerResponse.adPlacements", "op:playerResponse.playerAds", "op:playerResponse.adSlots"];

    function iD(DD) {
      if (function(DD) {
          for (let CD = 0; CD < pD.length; CD++)
            if (DD === pD[CD]) return !0;
          return !1
        }(DD)) return !1;
      const CD = ID(DD);
      return "op" === CD || "ep" === CD || "wi" === CD || "pp" === CD || "fp:call" === DD || "fp:t" === DD
    }

    function fD(DD) {
      return "fp" === ID(DD) && !iD(DD)
    }

    function bD(DD) {
      if ("string" !== typeof DD) return !1;
      return "o" === DD[0] && "p" === DD[1] && (2 === DD.length || ":" === DD[2]) || "fp:call" === DD || "2" === DD || "t" === DD || "a" === DD
    }

    function QD(DD, CD) {
      return `~${function(DD){return DD.length<2?DD:":"===DD[1]?DD[0]:DD[0]+DD[1]}(CD)}~${DD}`
    }
    const wD = 200;

    function SD(DD) {
      let CD = DD.length - 1;
      for (let cD = 0; cD < 2; cD++) {
        const cD = CD;
        for (; CD >= 0 && DD[CD] >= "0" && DD[CD] <= "9";) CD--;
        if (CD < 0 || CD === cD || ":" !== DD[CD]) return -1;
        CD--
      }
      return CD + 1
    }

    function BD(DD) {
      return "unknown" === DD || SD(DD) >= 0
    }

    function yD(DD, CD) {
      return DD[CD] >= "\ud800" && DD[CD] <= "\udbff" && CD + 1 < DD.length && DD[CD + 1] >= "\udc00" && DD[CD + 1] <= "\udfff" ? 2 : 1
    }

    function MD(DD, CD, cD) {
      return 2 === cD ? 4 : DD[CD] <= "\x7f" ? 1 : DD[CD] <= "\u07ff" ? 2 : 3
    }

    function tD(DD, CD, cD) {
      let ID = 0;
      for (; ID < CD;) {
        const CD = yD(DD, ID),
          pD = MD(DD, ID, CD);
        if (pD > cD) break;
        cD -= pD, ID += CD
      }
      return ID
    }

    function ZD(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0;
      if ("string" !== typeof DD || DD.length > wD || !BD(DD)) return "t";
      let cD = 2;
      for (let bD = 0; bD < DD.length;) {
        const CD = yD(DD, bD);
        cD += MD(DD, bD, CD), bD += CD
      }
      if (cD <= CD) return `t ${DD}`;
      const ID = SD(DD),
        pD = CD - 2 - (DD.length - ID);
      if (pD < 0) return "t";
      const iD = tD(DD, ID, pD);
      let fD = "t ";
      for (let bD = 0; bD < iD; bD++) fD += DD[bD];
      for (let bD = ID; bD < DD.length; bD++) fD += DD[bD];
      return fD
    }
    const oD = 62;

    function vD(DD) {
      let CD = "so:";
      const cD = tD(DD, DD.length, oD - CD.length);
      for (let ID = 0; ID < cD; ID++) CD += DD[ID];
      return CD
    }
    const ND = "BABYLON ";

    function gD(DD) {
      return vD(ND + DD)
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);