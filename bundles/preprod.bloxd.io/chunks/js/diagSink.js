export const id = 30;
export const ids = [30];
export const modules = {
  36484: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      DUMP_GAP_MS: () => cq,
      DiagSink: () => Nq,
      ITEM_GAP_MS: () => lq,
      ITEM_METADATA_BYTES: () => Aq,
      MAX_LINE_CHARS: () => mq,
      MAX_MESSAGE_BYTES: () => Oq
    });
    const Yq = "bloxdDiagSinkDays",
      lq = 4e4,
      Oq = 2048,
      mq = 400,
      xq = 262144,
      Aq = 1500,
      cq = 6e5,
      uq = new TextEncoder;

    function Bq(qq) {
      return uq.encode(qq).length
    }

    function Wq(qq) {
      return Aq + Bq(qq)
    }
    class Nq {
      constructor(qq, Eq) {
        this.claim = qq, this.deps = Eq, this.queue = [], this.pageLines = 0, this.pageBytes = 0, this.stopped = !1, this.dropped = !1, this.lastSentMs = Number.NEGATIVE_INFINITY, this.lastDumpMs = void 0, this.sentDumps = new Map, this.lastDumpMs = Eq.now()
      }
      start() {
        setInterval((() => {
          this.SB()
        }), lq), window.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.flush()
        }), !0)
      }
      add(qq) {
        this.stopped || (this.pageLines + this.queue.length < 500 ? this.queue.push(function(qq) {
          const Eq = qq.replace(/\n/g, " | ");
          if (Eq.length <= mq) return Eq;
          let gq = mq - 3;
          const Yq = Eq.charCodeAt(gq - 1);
          return Yq >= 55296 && Yq <= 56319 && gq--, `${Eq.slice(0,gq)}...`
        }(qq)) : this.dropped = !0)
      }
      SB() {
        this.deps.now() - this.lastDumpMs >= cq && (this.lastDumpMs = this.deps.now(), this.queueDumps()), this.flush()
      }
      flush() {
        if (this.stopped || 0 === this.queue.length || this.deps.now() - this.lastSentMs < lq - 1e3) return;
        const qq = this.readDay(),
          Eq = [];
        let gq = 0,
          Yq = null;
        for (const lq of this.queue) {
          const mq = Bq(lq) + (Eq.length > 0 ? 1 : 0);
          if (gq + mq > Oq) break;
          const cq = Aq + gq + mq;
          if (this.pageBytes + cq > xq) {
            Yq = "page";
            break
          }
          if (!this.dayFits(qq, Eq.length + 1, cq)) {
            Yq = "day";
            break
          }
          Eq.push(lq), gq += mq
        }
        null === Yq && this.dropped && Eq.length === this.queue.length && (Yq = "page"), this.queue.splice(0, Eq.length), Eq.length > 0 && !this.sendCharged(qq, Eq.join("\n"), Eq.length, "lines") || null !== Yq && this.stopAt(Yq, qq)
      }
      queueDumps() {
        for (const [qq, Eq] of this.deps.dumps()) {
          const gq = Eq.split("\n").slice(0, 20),
            Yq = gq.join("\n");
          if (this.sentDumps.get(qq) !== Yq) {
            this.sentDumps.set(qq, Yq);
            for (const Eq of gq) this.add(`[dump:${qq}] ${Eq}`)
          }
        }
      }
      stopAt(qq, Eq) {
        this.stopped = !0, this.queue.length = 0;
        const gq = "page" === qq ? "diag_cap: the page's cap (500 lines, 256 KB), so this page sends no more" : `diag_cap: the claim's daily cap (${this.claim.perClientLines} lines, ${this.dayBytes()/1e3} KB), so it sends no more today`;
        if ("day" === qq) {
          if (Eq.capSent) return;
          Eq.capSent = !0
        } else if (!this.dayFits(Eq, 1, Wq(gq))) return;
        this.sendCharged(Eq, gq, 1, "cap")
      }
      dayBytes() {
        return 400 * this.claim.perClientLines
      }
      dayFits(qq, Eq, gq) {
        return qq.lines + Eq <= this.claim.perClientLines && qq.bytes + gq <= this.dayBytes()
      }
      readDays() {
        var qq;
        return null !== (qq = this.deps.storage.getItem(Yq)) && void 0 !== qq ? qq : {}
      }
      readDay() {
        const qq = new Date(this.deps.now()).toISOString().slice(0, 10),
          Eq = this.readDays()[this.claim.claimId];
        return (null === Eq || void 0 === Eq ? void 0 : Eq.day) === qq ? Eq : {
          day: qq,
          lines: 0,
          bytes: 0,
          capSent: !1
        }
      }
      writeDay(qq) {
        const Eq = Object.fromEntries(Object.entries(this.readDays()).filter((Eq => {
          let [, gq] = Eq;
          return gq.day === qq.day
        })));
        return Eq[this.claim.claimId] = qq, this.deps.storage.setItem(Yq, Eq)
      }
      sendCharged(qq, Eq, gq, Yq) {
        const lq = Wq(Eq);
        return qq.lines += gq, qq.bytes += lq, this.writeDay(qq) ? (this.pageLines += gq, this.pageBytes += lq, this.lastSentMs = this.deps.now(), this.deps.send(Eq, {
          diag_kind: Yq
        }), !0) : (console.warn("The diag sink can't keep its daily count, so it sends nothing"), this.stopped = !0, this.queue.length = 0, !1)
      }
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);