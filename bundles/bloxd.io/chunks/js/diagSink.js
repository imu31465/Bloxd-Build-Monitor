export const id = 37;
export const ids = [37];
export const modules = {
  37726: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      DUMP_GAP_MS: () => Lb,
      DiagSink: () => tb,
      ITEM_GAP_MS: () => Hb,
      ITEM_METADATA_BYTES: () => lb,
      MAX_LINE_CHARS: () => Vb,
      MAX_MESSAGE_BYTES: () => pb
    });
    const eb = "bloxdDiagSinkDays",
      Hb = 4e4,
      pb = 2048,
      Vb = 400,
      gb = 262144,
      lb = 1500,
      Lb = 6e5,
      Ib = new TextEncoder;

    function Ob(bb) {
      return Ib.encode(bb).length
    }

    function Ub(bb) {
      return lb + Ob(bb)
    }
    class tb {
      constructor(bb, wb) {
        this.claim = bb, this.deps = wb, this.queue = [], this.pageLines = 0, this.pageBytes = 0, this.stopped = !1, this.dropped = !1, this.lastSentMs = Number.NEGATIVE_INFINITY, this.lastDumpMs = void 0, this.sentDumps = new Map, this.lastDumpMs = wb.now()
      }
      start() {
        setInterval((() => {
          this.sO()
        }), Hb), window.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && (this.deps.releaseHeld(), this.flush())
        }), !0)
      }
      add(bb) {
        this.stopped || (this.pageLines + this.queue.length < 500 ? this.queue.push(function(bb) {
          const wb = bb.replace(/\n/g, " | ");
          if (wb.length <= Vb) return wb;
          let Mb = Vb - 3;
          const eb = wb.charCodeAt(Mb - 1);
          return eb >= 55296 && eb <= 56319 && Mb--, `${wb.slice(0,Mb)}...`
        }(bb)) : this.dropped = !0)
      }
      sO() {
        this.deps.now() - this.lastDumpMs >= Lb && (this.lastDumpMs = this.deps.now(), this.queueDumps()), this.flush()
      }
      flush() {
        if (this.stopped || 0 === this.queue.length || this.deps.now() - this.lastSentMs < Hb - 1e3) return;
        const bb = this.readDay(),
          wb = [];
        let Mb = 0,
          eb = null;
        for (const Hb of this.queue) {
          const Vb = Ob(Hb) + (wb.length > 0 ? 1 : 0);
          if (Mb + Vb > pb) break;
          const Lb = lb + Mb + Vb;
          if (this.pageBytes + Lb > gb) {
            eb = "page";
            break
          }
          if (!this.dayFits(bb, wb.length + 1, Lb)) {
            eb = "day";
            break
          }
          wb.push(Hb), Mb += Vb
        }
        null === eb && this.dropped && wb.length === this.queue.length && (eb = "page"), this.queue.splice(0, wb.length), wb.length > 0 && !this.sendCharged(bb, wb.join("\n"), wb.length, "lines") || null !== eb && this.stopAt(eb, bb)
      }
      queueDumps() {
        for (const [bb, wb] of this.deps.dumps()) {
          const Mb = wb.split("\n").slice(0, 20),
            eb = Mb.join("\n");
          if (this.sentDumps.get(bb) !== eb) {
            this.sentDumps.set(bb, eb);
            for (const wb of Mb) this.add(`[dump:${bb}] ${wb}`)
          }
        }
      }
      stopAt(bb, wb) {
        this.stopped = !0, this.queue.length = 0;
        const Mb = "page" === bb ? "diag_cap: the page's cap (500 lines, 256 KB), so this page sends no more" : `diag_cap: the claim's daily cap (${this.claim.perClientLines} lines, ${this.dayBytes()/1e3} KB), so it sends no more today`;
        if ("day" === bb) {
          if (wb.capSent) return;
          wb.capSent = !0
        } else if (!this.dayFits(wb, 1, Ub(Mb))) return;
        this.sendCharged(wb, Mb, 1, "cap")
      }
      dayBytes() {
        return 400 * this.claim.perClientLines
      }
      dayFits(bb, wb, Mb) {
        return bb.lines + wb <= this.claim.perClientLines && bb.bytes + Mb <= this.dayBytes()
      }
      readDays() {
        var bb;
        return null !== (bb = this.deps.storage.getItem(eb)) && void 0 !== bb ? bb : {}
      }
      readDay() {
        const bb = new Date(this.deps.now()).toISOString().slice(0, 10),
          wb = this.readDays()[this.claim.claimId];
        return (null === wb || void 0 === wb ? void 0 : wb.day) === bb ? wb : {
          day: bb,
          lines: 0,
          bytes: 0,
          capSent: !1
        }
      }
      writeDay(bb) {
        const wb = Object.fromEntries(Object.entries(this.readDays()).filter((wb => {
          let [, Mb] = wb;
          return Mb.day === bb.day
        })));
        return wb[this.claim.claimId] = bb, this.deps.storage.setItem(eb, wb)
      }
      sendCharged(bb, wb, Mb, eb) {
        const Hb = Ub(wb);
        return bb.lines += Mb, bb.bytes += Hb, this.writeDay(bb) ? (this.pageLines += Mb, this.pageBytes += Hb, this.lastSentMs = this.deps.now(), this.deps.send(wb, {
          diag_kind: eb
        }), !0) : (console.warn("The diag sink can't keep its daily count, so it sends nothing"), this.stopped = !0, this.queue.length = 0, !1)
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);