export const id = 30;
export const ids = [30];
export const modules = {
  35858: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      DUMP_GAP_MS: () => gY,
      DiagSink: () => sY,
      ITEM_GAP_MS: () => AY,
      ITEM_METADATA_BYTES: () => OY,
      MAX_MESSAGE_BYTES: () => IY
    });
    const FY = "bloxdDiagSinkDays",
      AY = 4e4,
      IY = 2048,
      RY = 262144,
      OY = 1500,
      gY = 6e5,
      aY = new TextEncoder;

    function vY(YY) {
      return aY.encode(YY).length
    }

    function uY(YY) {
      return OY + vY(YY)
    }
    class sY {
      constructor(YY, rY) {
        this.claim = YY, this.deps = rY, this.queue = [], this.pageLines = 0, this.pageBytes = 0, this.stopped = !1, this.dropped = !1, this.lastSentMs = Number.NEGATIVE_INFINITY, this.lastDumpMs = void 0, this.sentDumps = new Map, this.lastDumpMs = rY.now()
      }
      start() {
        setInterval((() => {
          this.Zu()
        }), AY), window.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.flush()
        }), !0)
      }
      add(YY) {
        this.stopped || (this.pageLines + this.queue.length < 500 ? this.queue.push(function(YY) {
          return YY.replace(/\n/g, " | ").slice(0, 400)
        }(YY)) : this.dropped = !0)
      }
      Zu() {
        this.deps.now() - this.lastDumpMs >= gY && (this.lastDumpMs = this.deps.now(), this.queueDumps()), this.flush()
      }
      flush() {
        if (this.stopped || 0 === this.queue.length || this.deps.now() - this.lastSentMs < AY - 1e3) return;
        const YY = this.readDay(),
          rY = [];
        let DY = 0,
          FY = null;
        for (const AY of this.queue) {
          const gY = vY(AY) + (rY.length > 0 ? 1 : 0);
          if (DY + gY > IY) break;
          const aY = OY + DY + gY;
          if (this.pageBytes + aY > RY) {
            FY = "page";
            break
          }
          if (!this.dayFits(YY, rY.length + 1, aY)) {
            FY = "day";
            break
          }
          rY.push(AY), DY += gY
        }
        null === FY && this.dropped && rY.length === this.queue.length && (FY = "page"), this.queue.splice(0, rY.length), rY.length > 0 && !this.sendCharged(YY, rY.join("\n"), rY.length, "lines") || null !== FY && this.stopAt(FY, YY)
      }
      queueDumps() {
        for (const [YY, rY] of this.deps.dumps()) {
          const DY = rY.split("\n").slice(0, 20),
            FY = DY.join("\n");
          if (this.sentDumps.get(YY) !== FY) {
            this.sentDumps.set(YY, FY);
            for (const rY of DY) this.add(`[dump:${YY}] ${rY}`)
          }
        }
      }
      stopAt(YY, rY) {
        this.stopped = !0, this.queue.length = 0;
        const DY = "page" === YY ? "diag_cap: the page's cap (500 lines, 256 KB), so this page sends no more" : `diag_cap: the claim's daily cap (${this.claim.perClientLines} lines, ${this.dayBytes()/1e3} KB), so it sends no more today`;
        if ("day" === YY) {
          if (rY.capSent) return;
          rY.capSent = !0
        } else if (!this.dayFits(rY, 1, uY(DY))) return;
        this.sendCharged(rY, DY, 1, "cap")
      }
      dayBytes() {
        return 400 * this.claim.perClientLines
      }
      dayFits(YY, rY, DY) {
        return YY.lines + rY <= this.claim.perClientLines && YY.bytes + DY <= this.dayBytes()
      }
      readDays() {
        var YY;
        return null !== (YY = this.deps.storage.getItem(FY)) && void 0 !== YY ? YY : {}
      }
      readDay() {
        const YY = new Date(this.deps.now()).toISOString().slice(0, 10),
          rY = this.readDays()[this.claim.claimId];
        return (null === rY || void 0 === rY ? void 0 : rY.day) === YY ? rY : {
          day: YY,
          lines: 0,
          bytes: 0,
          capSent: !1
        }
      }
      writeDay(YY) {
        const rY = Object.fromEntries(Object.entries(this.readDays()).filter((rY => {
          let [, DY] = rY;
          return DY.day === YY.day
        })));
        return rY[this.claim.claimId] = YY, this.deps.storage.setItem(FY, rY)
      }
      sendCharged(YY, rY, DY, FY) {
        const AY = uY(rY);
        return YY.lines += DY, YY.bytes += AY, this.writeDay(YY) ? (this.pageLines += DY, this.pageBytes += AY, this.lastSentMs = this.deps.now(), this.deps.send(rY, {
          diag_kind: FY
        }), !0) : (console.warn("The diag sink can't keep its daily count, so it sends nothing"), this.stopped = !0, this.queue.length = 0, !1)
      }
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);