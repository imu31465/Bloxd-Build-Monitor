export const id = 73;
export const ids = [73];
export const modules = {
  4267: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => vY
    });
    var FY = DY(19),
      AY = DY(25),
      IY = DY(1287),
      RY = DY(2565);
    const OY = 3e4,
      gY = 1e3;

    function aY() {
      return "visible" === document.visibilityState && "inGame" === FY.b.get("gameState") && (0, IY.l)()
    }

    function vY(YY, rY) {
      (0, RY.s)() || function(YY, rY, DY) {
        let FY = 0;
        const AY = setInterval((() => {
          rY() && (FY += gY, FY >= YY && (clearInterval(AY), DY()))
        }), gY)
      }(OY, aY, (() => {
        rY().then((() => {
          YY(`saved for the player after ${OY/1e3} s of play`), (0, RY.C)(), AY.g.vo("chat", {
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
  8629: (YY, rY, DY) => {
    function FY(YY, rY) {
      return 0 === YY.length ? 0 : YY[Math.min(YY.length - 1, Math.floor(rY * YY.length))]
    }
    DY.d(rY, {
      d: () => FY
    })
  },
  37279: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => aY,
      e: () => vY,
      i: () => VY,
      l: () => mY,
      o: () => EY
    });
    var FY = DY(4267),
      AY = DY(8629),
      IY = DY(2565);
    const RY = 20,
      OY = ["totalMs", "slotMs", "workerMs", "applyMs", "ahead", "inFlight", "gu", "jobMs"];

    function gY(YY) {
      return [...YY].sort(((YY, rY) => YY - rY))
    }
    const aY = [];

    function vY(YY, rY, DY) {
      return `${YY},${rY},${DY}`
    }
    class uY {
      constructor() {
        this.pending = new Map, this.jobs = new Map, this.edits = [], this.nextEdit = 0, this.reported = 0, this.windowStart = performance.now(), this.frames = 0, this.lastFrameAt = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      edit(YY, rY) {
        var DY;
        const FY = null !== (DY = this.pending.get(YY)) && void 0 !== DY ? DY : [];
        FY.push({
          editAt: rY,
          meshJobId: 0
        }), this.pending.set(YY, FY)
      }
      frame(YY) {
        this.lastFrameAt > 0 && (this.maxFrameMs = Math.max(this.maxFrameMs, YY - this.lastFrameAt)), this.lastFrameAt = YY, this.frames++, YY - this.windowStart >= 1e3 && this.summarise(YY)
      }
      sent(YY, rY, DY, FY, AY, IY, RY) {
        this.jobs.set(rY, {
          sentAt: RY,
          receivedAt: 0,
          ahead: DY,
          inFlight: FY,
          gu: AY,
          jobMs: 0
        }), this.jobsSent++, this.maxAhead = Math.max(this.maxAhead, DY), this.maxCapacity = Math.max(this.maxCapacity, AY);
        for (const gY of null !== (OY = this.pending.get(YY)) && void 0 !== OY ? OY : []) {
          var OY;
          IY.includes(gY.meshJobId) || (gY.meshJobId = rY)
        }
      }
      received(YY, rY, DY) {
        const FY = this.jobs.get(YY);
        void 0 !== FY && (this.roundTrips.push(DY - FY.sentAt), FY.receivedAt = DY, FY.jobMs = rY)
      }
      failed(YY) {
        this.jobs.delete(YY)
      }
      reassign(YY, rY, DY) {
        this.jobs.delete(rY);
        for (const AY of null !== (FY = this.pending.get(YY)) && void 0 !== FY ? FY : []) {
          var FY;
          AY.meshJobId === rY && (AY.meshJobId = DY)
        }
      }
      applied(YY, rY, DY) {
        const FY = this.jobs.get(rY);
        this.jobs.delete(rY), void 0 !== FY && this.show(YY, FY, DY, (YY => YY.meshJobId === rY))
      }
      emptied(YY, rY) {
        const DY = {
          sentAt: rY,
          receivedAt: rY,
          ahead: 0,
          inFlight: 0,
          gu: 0,
          jobMs: 0
        };
        this.show(YY, DY, rY, (() => !0))
      }
      show(YY, rY, DY, FY) {
        const AY = this.pending.get(YY);
        if (!AY) return;
        const IY = AY.filter((AY => !FY(AY) || (this.record(YY, AY.editAt, rY, DY), !1)));
        IY.length > 0 ? this.pending.set(YY, IY) : this.pending.delete(YY)
      }
      gy(YY) {
        this.reported += YY, this === iY && this.reported >= RY && null !== yY && (yY(), yY = null)
      }
      record(YY, rY, DY, FY) {
        const AY = {
          totalMs: FY - rY,
          slotMs: DY.sentAt - rY,
          workerMs: DY.receivedAt - DY.sentAt,
          applyMs: FY - DY.receivedAt,
          ahead: DY.ahead,
          inFlight: DY.inFlight,
          gu: DY.gu,
          jobMs: DY.jobMs
        };
        if (this.edits[this.nextEdit] = AY, this.nextEdit = (this.nextEdit + 1) % 500, this.windowEdits.push(AY.totalMs), this.gy(1), AY.totalMs < 100 || ++this.outliers > 5) return;
        const RY = YY => Math.round(YY);
        (0, IY.n)("remesh", `slow edit (${YY}) shown in ${RY(AY.totalMs)} ms: slot ${RY(AY.slotMs)}, worker ${RY(AY.workerMs)} (${AY.ahead} ahead, ${AY.inFlight}/${AY.gu} in flight; job ${RY(AY.jobMs)}), apply ${RY(AY.applyMs)}`)
      }
      summarise(YY) {
        const rY = (YY - this.windowStart) / 1e3;
        for (const [DY, FY] of this.pending) {
          const rY = FY.filter((rY => YY - rY.editAt <= 1e4));
          this.gaveUp += FY.length - rY.length, this.gy(FY.length - rY.length), rY.length > 0 ? this.pending.set(DY, rY) : this.pending.delete(DY)
        }
        for (const [DY, FY] of this.jobs) YY - FY.sentAt > (FY.receivedAt > 0 ? 1e4 : 6e4) && this.jobs.delete(DY);
        if (this.jobsSent > 0 || this.roundTrips.length > 0 || this.windowEdits.length > 0 || this.gaveUp > 0) {
          const YY = gY(this.roundTrips),
            DY = gY(this.windowEdits),
            FY = Math.max(0, this.outliers - 5);
          (0, IY.n)("remesh", `${Math.round(this.frames/rY)} fps (longest ${Math.round(this.maxFrameMs)} ms) | ${this.jobsSent} jobs sent, up to ${this.maxAhead} ahead on a worker, capacity ${this.maxCapacity} | round trip p50 ${Math.round((0,AY.d)(YY,.5))} max ${Math.round((0,AY.d)(YY,1))} ms | ${DY.length} edits shown, p50 ${Math.round((0,AY.d)(DY,.5))} max ${Math.round((0,AY.d)(DY,1))} ms${FY>0?`, ${FY} more slow`:""}${this.gaveUp>0?`, ${this.gaveUp} never shown`:""}`)
        }
        this.windowStart = YY, this.frames = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      stats() {
        const YY = OY.map((YY => {
          const rY = gY(this.edits.map((rY => rY[YY])));
          return `${YY}: p50 ${Math.round((0,AY.d)(rY,.5))} p90 ${Math.round((0,AY.d)(rY,.9))} max ${Math.round((0,AY.d)(rY,1))}`
        }));
        return [`${this.edits.length} edits`, ...YY].join("\n")
      }
      dump() {
        const YY = this.edits.map((YY => OY.map((rY => Math.round(10 * YY[rY]) / 10)).join(",")));
        return [this.stats(), OY.join(","), ...YY].join("\n")
      }
    }
    class sY {
      constructor(YY, rY) {
        this.log = YY, this.Gu = rY
      }
      edit(YY, rY, DY) {
        const [FY, AY, IY] = this.Gu.Mu.sFY(YY, rY, DY), RY = this.Gu.Mu.HQ.zQ(FY, AY, IY);
        RY && RY.cQ && this.log.edit(vY(FY, AY, IY), performance.now())
      }
      sent(YY, rY, DY, FY, AY) {
        this.log.sent(vY(YY.i, YY.j, YY.k), rY, DY, FY, AY, aY, performance.now())
      }
      received(YY) {
        this.log.received(YY.meshJobId, YY.jobMs, performance.now())
      }
      failed(YY) {
        this.log.failed(YY)
      }
      applied(YY, rY) {
        this.log.applied(vY(YY.i, YY.j, YY.k), rY, performance.now())
      }
    }
    let iY = null,
      yY = null,
      QY = !1,
      oY = null;

    function WY() {
      return new Promise((YY => {
        null !== iY && iY.reported >= RY ? YY() : yY = YY
      }))
    }

    function EY() {
      const YY = new uY;
      return iY = YY, (0, IY.k)("remesh", (() => YY.dump())), (0, IY.e)("remeshStats", (() => {
        console.log(YY.stats())
      })), QY || (QY = !0, (0, FY.b)((YY => {
        (0, IY.n)("remesh", YY)
      }), WY)), YY
    }

    function mY(YY) {
      const rY = EY();
      oY = new sY(rY, YY), YY.Zm.meshProbe = oY, YY.on("beforeRender", (() => {
        rY.frame(performance.now())
      }))
    }

    function VY(YY, rY, DY) {
      var FY;
      null === (FY = oY) || void 0 === FY || FY.edit(YY, rY, DY)
    }
  },
  37081: (YY, rY, DY) => {
    function FY(YY) {
      return "string" !== typeof YY || 2 !== YY.length && ":" !== YY[2] ? null : YY[0] + YY[1]
    }
    DY.d(rY, {
      c: () => oY,
      f: () => mY,
      i: () => OY,
      m: () => RY,
      p: () => IY,
      t: () => gY,
      w: () => WY,
      y: () => QY
    });
    const AY = ["op:ytInitialPlayerResponse.adPlacements", "op:ytInitialPlayerResponse.playerAds", "op:ytInitialPlayerResponse.adSlots", "op:playerResponse.adPlacements", "op:playerResponse.playerAds", "op:playerResponse.adSlots"];

    function IY(YY) {
      if (function(YY) {
          for (let rY = 0; rY < AY.length; rY++)
            if (YY === AY[rY]) return !0;
          return !1
        }(YY)) return !1;
      const rY = FY(YY);
      return "op" === rY || "ep" === rY || "wi" === rY || "pp" === rY || "fp:call" === YY || "fp:t" === YY
    }

    function RY(YY) {
      return "fp" === FY(YY) && !IY(YY)
    }

    function OY(YY) {
      if ("string" !== typeof YY) return !1;
      return "o" === YY[0] && "p" === YY[1] && (2 === YY.length || ":" === YY[2]) || "fp:call" === YY || "2" === YY || "t" === YY || "a" === YY
    }

    function gY(YY, rY) {
      return `~${function(YY){return YY.length<2?YY:":"===YY[1]?YY[0]:YY[0]+YY[1]}(rY)}~${YY}`
    }
    const aY = 200;

    function vY(YY) {
      let rY = YY.length - 1;
      for (let DY = 0; DY < 2; DY++) {
        const DY = rY;
        for (; rY >= 0 && YY[rY] >= "0" && YY[rY] <= "9";) rY--;
        if (rY < 0 || rY === DY || ":" !== YY[rY]) return -1;
        rY--
      }
      return rY + 1
    }

    function uY(YY) {
      return "unknown" === YY || vY(YY) >= 0
    }

    function sY(YY, rY) {
      return YY[rY] >= "\ud800" && YY[rY] <= "\udbff" && rY + 1 < YY.length && YY[rY + 1] >= "\udc00" && YY[rY + 1] <= "\udfff" ? 2 : 1
    }

    function iY(YY, rY, DY) {
      return 2 === DY ? 4 : YY[rY] <= "\x7f" ? 1 : YY[rY] <= "\u07ff" ? 2 : 3
    }

    function yY(YY, rY, DY) {
      let FY = 0;
      for (; FY < rY;) {
        const rY = sY(YY, FY),
          AY = iY(YY, FY, rY);
        if (AY > DY) break;
        DY -= AY, FY += rY
      }
      return FY
    }

    function QY(YY) {
      let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0;
      if ("string" !== typeof YY || YY.length > aY || !uY(YY)) return "t";
      let DY = 2;
      for (let OY = 0; OY < YY.length;) {
        const rY = sY(YY, OY);
        DY += iY(YY, OY, rY), OY += rY
      }
      if (DY <= rY) return `t ${YY}`;
      const FY = vY(YY),
        AY = rY - 2 - (YY.length - FY);
      if (AY < 0) return "t";
      const IY = yY(YY, FY, AY);
      let RY = "t ";
      for (let OY = 0; OY < IY; OY++) RY += YY[OY];
      for (let OY = FY; OY < YY.length; OY++) RY += YY[OY];
      return RY
    }
    const oY = 62;

    function WY(YY) {
      let rY = "so:";
      const DY = yY(YY, YY.length, oY - rY.length);
      for (let FY = 0; FY < DY; FY++) rY += YY[FY];
      return rY
    }
    const EY = "BABYLON ";

    function mY(YY) {
      return WY(EY + YY)
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);