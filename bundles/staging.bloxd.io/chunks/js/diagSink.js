export const id = 30;
export const ids = [30];
export const modules = {
  36035: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      DUMP_GAP_MS: () => Sb,
      DiagSink: () => Zb,
      ITEM_GAP_MS: () => Ob,
      ITEM_METADATA_BYTES: () => Yb,
      MAX_LINE_CHARS: () => Ub,
      MAX_MESSAGE_BYTES: () => Gb
    });
    const Bb = "bloxdDiagSinkDays",
      Ob = 4e4,
      Gb = 2048,
      Ub = 400,
      Lb = 262144,
      Yb = 1500,
      Sb = 6e5,
      ab = new TextEncoder;

    function Hb(bb) {
      return ab.encode(bb).length
    }

    function wb(bb) {
      return Yb + Hb(bb)
    }
    class Zb {
      constructor(bb, ub) {
        this.claim = bb, this.deps = ub, this.queue = [], this.pageLines = 0, this.pageBytes = 0, this.stopped = !1, this.dropped = !1, this.lastSentMs = Number.NEGATIVE_INFINITY, this.lastDumpMs = void 0, this.sentDumps = new Map, this.lastDumpMs = ub.now()
      }
      start() {
        setInterval((() => {
          this.gH()
        }), Ob), window.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.flush()
        }), !0)
      }
      add(bb) {
        this.stopped || (this.pageLines + this.queue.length < 500 ? this.queue.push(function(bb) {
          const ub = bb.replace(/\n/g, " | ");
          if (ub.length <= Ub) return ub;
          let hb = Ub - 3;
          const Bb = ub.charCodeAt(hb - 1);
          return Bb >= 55296 && Bb <= 56319 && hb--, `${ub.slice(0,hb)}...`
        }(bb)) : this.dropped = !0)
      }
      gH() {
        this.deps.now() - this.lastDumpMs >= Sb && (this.lastDumpMs = this.deps.now(), this.queueDumps()), this.flush()
      }
      flush() {
        if (this.stopped || 0 === this.queue.length || this.deps.now() - this.lastSentMs < Ob - 1e3) return;
        const bb = this.readDay(),
          ub = [];
        let hb = 0,
          Bb = null;
        for (const Ob of this.queue) {
          const Ub = Hb(Ob) + (ub.length > 0 ? 1 : 0);
          if (hb + Ub > Gb) break;
          const Sb = Yb + hb + Ub;
          if (this.pageBytes + Sb > Lb) {
            Bb = "page";
            break
          }
          if (!this.dayFits(bb, ub.length + 1, Sb)) {
            Bb = "day";
            break
          }
          ub.push(Ob), hb += Ub
        }
        null === Bb && this.dropped && ub.length === this.queue.length && (Bb = "page"), this.queue.splice(0, ub.length), ub.length > 0 && !this.sendCharged(bb, ub.join("\n"), ub.length, "lines") || null !== Bb && this.stopAt(Bb, bb)
      }
      queueDumps() {
        for (const [bb, ub] of this.deps.dumps()) {
          const hb = ub.split("\n").slice(0, 20),
            Bb = hb.join("\n");
          if (this.sentDumps.get(bb) !== Bb) {
            this.sentDumps.set(bb, Bb);
            for (const ub of hb) this.add(`[dump:${bb}] ${ub}`)
          }
        }
      }
      stopAt(bb, ub) {
        this.stopped = !0, this.queue.length = 0;
        const hb = "page" === bb ? "diag_cap: the page's cap (500 lines, 256 KB), so this page sends no more" : `diag_cap: the claim's daily cap (${this.claim.perClientLines} lines, ${this.dayBytes()/1e3} KB), so it sends no more today`;
        if ("day" === bb) {
          if (ub.capSent) return;
          ub.capSent = !0
        } else if (!this.dayFits(ub, 1, wb(hb))) return;
        this.sendCharged(ub, hb, 1, "cap")
      }
      dayBytes() {
        return 400 * this.claim.perClientLines
      }
      dayFits(bb, ub, hb) {
        return bb.lines + ub <= this.claim.perClientLines && bb.bytes + hb <= this.dayBytes()
      }
      readDays() {
        var bb;
        return null !== (bb = this.deps.storage.getItem(Bb)) && void 0 !== bb ? bb : {}
      }
      readDay() {
        const bb = new Date(this.deps.now()).toISOString().slice(0, 10),
          ub = this.readDays()[this.claim.claimId];
        return (null === ub || void 0 === ub ? void 0 : ub.day) === bb ? ub : {
          day: bb,
          lines: 0,
          bytes: 0,
          capSent: !1
        }
      }
      writeDay(bb) {
        const ub = Object.fromEntries(Object.entries(this.readDays()).filter((ub => {
          let [, hb] = ub;
          return hb.day === bb.day
        })));
        return ub[this.claim.claimId] = bb, this.deps.storage.setItem(Bb, ub)
      }
      sendCharged(bb, ub, hb, Bb) {
        const Ob = wb(ub);
        return bb.lines += hb, bb.bytes += Ob, this.writeDay(bb) ? (this.pageLines += hb, this.pageBytes += Ob, this.lastSentMs = this.deps.now(), this.deps.send(ub, {
          diag_kind: Bb
        }), !0) : (console.warn("The diag sink can't keep its daily count, so it sends nothing"), this.stopped = !0, this.queue.length = 0, !1)
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);