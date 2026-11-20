export const id = 30;
export const ids = [30];
export const modules = {
  36085: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      DUMP_GAP_MS: () => Ib,
      DiagSink: () => Xb,
      ITEM_GAP_MS: () => Wb,
      ITEM_METADATA_BYTES: () => Ub,
      MAX_MESSAGE_BYTES: () => ab
    });
    const kb = "bloxdDiagSinkDays",
      Wb = 4e4,
      ab = 2048,
      Tb = 262144,
      Ub = 1500,
      Ib = 6e5,
      Hb = new TextEncoder;

    function fb(bb) {
      return Hb.encode(bb).length
    }

    function Mb(bb) {
      return Ub + fb(bb)
    }
    class Xb {
      constructor(bb, cb) {
        this.claim = bb, this.deps = cb, this.queue = [], this.pageLines = 0, this.pageBytes = 0, this.stopped = !1, this.dropped = !1, this.lastSentMs = Number.NEGATIVE_INFINITY, this.lastDumpMs = void 0, this.sentDumps = new Map, this.lastDumpMs = cb.now()
      }
      start() {
        setInterval((() => {
          this.aX()
        }), Wb), window.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.flush()
        }), !0)
      }
      add(bb) {
        this.stopped || (this.pageLines + this.queue.length < 500 ? this.queue.push(function(bb) {
          return bb.replace(/\n/g, " | ").slice(0, 400)
        }(bb)) : this.dropped = !0)
      }
      aX() {
        this.deps.now() - this.lastDumpMs >= Ib && (this.lastDumpMs = this.deps.now(), this.queueDumps()), this.flush()
      }
      flush() {
        if (this.stopped || 0 === this.queue.length || this.deps.now() - this.lastSentMs < Wb - 1e3) return;
        const bb = this.readDay(),
          cb = [];
        let sb = 0,
          kb = null;
        for (const Wb of this.queue) {
          const Ib = fb(Wb) + (cb.length > 0 ? 1 : 0);
          if (sb + Ib > ab) break;
          const Hb = Ub + sb + Ib;
          if (this.pageBytes + Hb > Tb) {
            kb = "page";
            break
          }
          if (!this.dayFits(bb, cb.length + 1, Hb)) {
            kb = "day";
            break
          }
          cb.push(Wb), sb += Ib
        }
        null === kb && this.dropped && cb.length === this.queue.length && (kb = "page"), this.queue.splice(0, cb.length), cb.length > 0 && !this.sendCharged(bb, cb.join("\n"), cb.length, "lines") || null !== kb && this.stopAt(kb, bb)
      }
      queueDumps() {
        for (const [bb, cb] of this.deps.dumps()) {
          const sb = cb.split("\n").slice(0, 20),
            kb = sb.join("\n");
          if (this.sentDumps.get(bb) !== kb) {
            this.sentDumps.set(bb, kb);
            for (const cb of sb) this.add(`[dump:${bb}] ${cb}`)
          }
        }
      }
      stopAt(bb, cb) {
        this.stopped = !0, this.queue.length = 0;
        const sb = "page" === bb ? "diag_cap: the page's cap (500 lines, 256 KB), so this page sends no more" : `diag_cap: the claim's daily cap (${this.claim.perClientLines} lines, ${this.dayBytes()/1e3} KB), so it sends no more today`;
        if ("day" === bb) {
          if (cb.capSent) return;
          cb.capSent = !0
        } else if (!this.dayFits(cb, 1, Mb(sb))) return;
        this.sendCharged(cb, sb, 1, "cap")
      }
      dayBytes() {
        return 400 * this.claim.perClientLines
      }
      dayFits(bb, cb, sb) {
        return bb.lines + cb <= this.claim.perClientLines && bb.bytes + sb <= this.dayBytes()
      }
      readDays() {
        var bb;
        return null !== (bb = this.deps.storage.getItem(kb)) && void 0 !== bb ? bb : {}
      }
      readDay() {
        const bb = new Date(this.deps.now()).toISOString().slice(0, 10),
          cb = this.readDays()[this.claim.claimId];
        return (null === cb || void 0 === cb ? void 0 : cb.day) === bb ? cb : {
          day: bb,
          lines: 0,
          bytes: 0,
          capSent: !1
        }
      }
      writeDay(bb) {
        const cb = Object.fromEntries(Object.entries(this.readDays()).filter((cb => {
          let [, sb] = cb;
          return sb.day === bb.day
        })));
        return cb[this.claim.claimId] = bb, this.deps.storage.setItem(kb, cb)
      }
      sendCharged(bb, cb, sb, kb) {
        const Wb = Mb(cb);
        return bb.lines += sb, bb.bytes += Wb, this.writeDay(bb) ? (this.pageLines += sb, this.pageBytes += Wb, this.lastSentMs = this.deps.now(), this.deps.send(cb, {
          diag_kind: kb
        }), !0) : (console.warn("The diag sink can't keep its daily count, so it sends nothing"), this.stopped = !0, this.queue.length = 0, !1)
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);