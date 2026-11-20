export const id = 30;
export const ids = [30];
export const modules = {
  35867: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      DUMP_GAP_MS: () => Bb,
      DiagSink: () => Pb,
      ITEM_GAP_MS: () => Mb,
      ITEM_METADATA_BYTES: () => Yb,
      MAX_MESSAGE_BYTES: () => Tb
    });
    const Ab = "bloxdDiagSinkDays",
      Mb = 4e4,
      Tb = 2048,
      Eb = 262144,
      Yb = 1500,
      Bb = 6e5,
      eb = new TextEncoder;

    function vb(bb) {
      return eb.encode(bb).length
    }

    function Lb(bb) {
      return Yb + vb(bb)
    }
    class Pb {
      constructor(bb, ab) {
        this.claim = bb, this.deps = ab, this.queue = [], this.pageLines = 0, this.pageBytes = 0, this.stopped = !1, this.dropped = !1, this.lastSentMs = Number.NEGATIVE_INFINITY, this.lastDumpMs = void 0, this.sentDumps = new Map, this.lastDumpMs = ab.now()
      }
      start() {
        setInterval((() => {
          this.qL()
        }), Mb), window.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.flush()
        }), !0)
      }
      add(bb) {
        this.stopped || (this.pageLines + this.queue.length < 500 ? this.queue.push(function(bb) {
          return bb.replace(/\n/g, " | ").slice(0, 400)
        }(bb)) : this.dropped = !0)
      }
      qL() {
        this.deps.now() - this.lastDumpMs >= Bb && (this.lastDumpMs = this.deps.now(), this.queueDumps()), this.flush()
      }
      flush() {
        if (this.stopped || 0 === this.queue.length || this.deps.now() - this.lastSentMs < Mb - 1e3) return;
        const bb = this.readDay(),
          ab = [];
        let Ub = 0,
          Ab = null;
        for (const Mb of this.queue) {
          const Bb = vb(Mb) + (ab.length > 0 ? 1 : 0);
          if (Ub + Bb > Tb) break;
          const eb = Yb + Ub + Bb;
          if (this.pageBytes + eb > Eb) {
            Ab = "page";
            break
          }
          if (!this.dayFits(bb, ab.length + 1, eb)) {
            Ab = "day";
            break
          }
          ab.push(Mb), Ub += Bb
        }
        null === Ab && this.dropped && ab.length === this.queue.length && (Ab = "page"), this.queue.splice(0, ab.length), ab.length > 0 && !this.sendCharged(bb, ab.join("\n"), ab.length, "lines") || null !== Ab && this.stopAt(Ab, bb)
      }
      queueDumps() {
        for (const [bb, ab] of this.deps.dumps()) {
          const Ub = ab.split("\n").slice(0, 20),
            Ab = Ub.join("\n");
          if (this.sentDumps.get(bb) !== Ab) {
            this.sentDumps.set(bb, Ab);
            for (const ab of Ub) this.add(`[dump:${bb}] ${ab}`)
          }
        }
      }
      stopAt(bb, ab) {
        this.stopped = !0, this.queue.length = 0;
        const Ub = "page" === bb ? "diag_cap: the page's cap (500 lines, 256 KB), so this page sends no more" : `diag_cap: the claim's daily cap (${this.claim.perClientLines} lines, ${this.dayBytes()/1e3} KB), so it sends no more today`;
        if ("day" === bb) {
          if (ab.capSent) return;
          ab.capSent = !0
        } else if (!this.dayFits(ab, 1, Lb(Ub))) return;
        this.sendCharged(ab, Ub, 1, "cap")
      }
      dayBytes() {
        return 400 * this.claim.perClientLines
      }
      dayFits(bb, ab, Ub) {
        return bb.lines + ab <= this.claim.perClientLines && bb.bytes + Ub <= this.dayBytes()
      }
      readDays() {
        var bb;
        return null !== (bb = this.deps.storage.getItem(Ab)) && void 0 !== bb ? bb : {}
      }
      readDay() {
        const bb = new Date(this.deps.now()).toISOString().slice(0, 10),
          ab = this.readDays()[this.claim.claimId];
        return (null === ab || void 0 === ab ? void 0 : ab.day) === bb ? ab : {
          day: bb,
          lines: 0,
          bytes: 0,
          capSent: !1
        }
      }
      writeDay(bb) {
        const ab = Object.fromEntries(Object.entries(this.readDays()).filter((ab => {
          let [, Ub] = ab;
          return Ub.day === bb.day
        })));
        return ab[this.claim.claimId] = bb, this.deps.storage.setItem(Ab, ab)
      }
      sendCharged(bb, ab, Ub, Ab) {
        const Mb = Lb(ab);
        return bb.lines += Ub, bb.bytes += Mb, this.writeDay(bb) ? (this.pageLines += Ub, this.pageBytes += Mb, this.lastSentMs = this.deps.now(), this.deps.send(ab, {
          diag_kind: Ab
        }), !0) : (console.warn("The diag sink can't keep its daily count, so it sends nothing"), this.stopped = !0, this.queue.length = 0, !1)
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);