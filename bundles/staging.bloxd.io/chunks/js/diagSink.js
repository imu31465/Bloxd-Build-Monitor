export const id = 36;
export const ids = [36];
export const modules = {
  37319: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      DUMP_GAP_MS: () => CH,
      DiagSink: () => YH,
      ITEM_GAP_MS: () => rH,
      ITEM_METADATA_BYTES: () => zH,
      MAX_LINE_CHARS: () => hH,
      MAX_MESSAGE_BYTES: () => SH
    });
    const AH = "bloxdDiagSinkDays",
      rH = 4e4,
      SH = 2048,
      hH = 400,
      tH = 262144,
      zH = 1500,
      CH = 6e5,
      EH = new TextEncoder;

    function XH(HH) {
      return EH.encode(HH).length
    }

    function GH(HH) {
      return zH + XH(HH)
    }
    class YH {
      constructor(HH, BH) {
        this.claim = HH, this.deps = BH, this.queue = [], this.pageLines = 0, this.pageBytes = 0, this.stopped = !1, this.dropped = !1, this.lastSentMs = Number.NEGATIVE_INFINITY, this.lastDumpMs = void 0, this.sentDumps = new Map, this.lastDumpMs = BH.now()
      }
      start() {
        setInterval((() => {
          this.IX()
        }), rH), window.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && (this.deps.releaseHeld(), this.flush())
        }), !0)
      }
      add(HH) {
        this.stopped || (this.pageLines + this.queue.length < 500 ? this.queue.push(function(HH) {
          const BH = HH.replace(/\n/g, " | ");
          if (BH.length <= hH) return BH;
          let LH = hH - 3;
          const AH = BH.charCodeAt(LH - 1);
          return AH >= 55296 && AH <= 56319 && LH--, `${BH.slice(0,LH)}...`
        }(HH)) : this.dropped = !0)
      }
      IX() {
        this.deps.now() - this.lastDumpMs >= CH && (this.lastDumpMs = this.deps.now(), this.queueDumps()), this.flush()
      }
      flush() {
        if (this.stopped || 0 === this.queue.length || this.deps.now() - this.lastSentMs < rH - 1e3) return;
        const HH = this.readDay(),
          BH = [];
        let LH = 0,
          AH = null;
        for (const rH of this.queue) {
          const hH = XH(rH) + (BH.length > 0 ? 1 : 0);
          if (LH + hH > SH) break;
          const CH = zH + LH + hH;
          if (this.pageBytes + CH > tH) {
            AH = "page";
            break
          }
          if (!this.dayFits(HH, BH.length + 1, CH)) {
            AH = "day";
            break
          }
          BH.push(rH), LH += hH
        }
        null === AH && this.dropped && BH.length === this.queue.length && (AH = "page"), this.queue.splice(0, BH.length), BH.length > 0 && !this.sendCharged(HH, BH.join("\n"), BH.length, "lines") || null !== AH && this.stopAt(AH, HH)
      }
      queueDumps() {
        for (const [HH, BH] of this.deps.dumps()) {
          const LH = BH.split("\n").slice(0, 20),
            AH = LH.join("\n");
          if (this.sentDumps.get(HH) !== AH) {
            this.sentDumps.set(HH, AH);
            for (const BH of LH) this.add(`[dump:${HH}] ${BH}`)
          }
        }
      }
      stopAt(HH, BH) {
        this.stopped = !0, this.queue.length = 0;
        const LH = "page" === HH ? "diag_cap: the page's cap (500 lines, 256 KB), so this page sends no more" : `diag_cap: the claim's daily cap (${this.claim.perClientLines} lines, ${this.dayBytes()/1e3} KB), so it sends no more today`;
        if ("day" === HH) {
          if (BH.capSent) return;
          BH.capSent = !0
        } else if (!this.dayFits(BH, 1, GH(LH))) return;
        this.sendCharged(BH, LH, 1, "cap")
      }
      dayBytes() {
        return 400 * this.claim.perClientLines
      }
      dayFits(HH, BH, LH) {
        return HH.lines + BH <= this.claim.perClientLines && HH.bytes + LH <= this.dayBytes()
      }
      readDays() {
        var HH;
        return null !== (HH = this.deps.storage.getItem(AH)) && void 0 !== HH ? HH : {}
      }
      readDay() {
        const HH = new Date(this.deps.now()).toISOString().slice(0, 10),
          BH = this.readDays()[this.claim.claimId];
        return (null === BH || void 0 === BH ? void 0 : BH.day) === HH ? BH : {
          day: HH,
          lines: 0,
          bytes: 0,
          capSent: !1
        }
      }
      writeDay(HH) {
        const BH = Object.fromEntries(Object.entries(this.readDays()).filter((BH => {
          let [, LH] = BH;
          return LH.day === HH.day
        })));
        return BH[this.claim.claimId] = HH, this.deps.storage.setItem(AH, BH)
      }
      sendCharged(HH, BH, LH, AH) {
        const rH = GH(BH);
        return HH.lines += LH, HH.bytes += rH, this.writeDay(HH) ? (this.pageLines += LH, this.pageBytes += rH, this.lastSentMs = this.deps.now(), this.deps.send(BH, {
          diag_kind: AH
        }), !0) : (console.warn("The diag sink can't keep its daily count, so it sends nothing"), this.stopped = !0, this.queue.length = 0, !1)
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);