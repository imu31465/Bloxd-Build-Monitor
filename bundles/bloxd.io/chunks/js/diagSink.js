export const id = 30;
export const ids = [30];
export const modules = {
  36159: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      DUMP_GAP_MS: () => wk,
      DiagSink: () => Jk,
      ITEM_GAP_MS: () => tk,
      ITEM_METADATA_BYTES: () => bk,
      MAX_MESSAGE_BYTES: () => ak
    });
    const Rk = "bloxdDiagSinkDays",
      tk = 4e4,
      ak = 2048,
      Xk = 262144,
      bk = 1500,
      wk = 6e5,
      dk = new TextEncoder;

    function sk(kk) {
      return dk.encode(kk).length
    }

    function Vk(kk) {
      return bk + sk(kk)
    }
    class Jk {
      constructor(kk, Fk) {
        this.claim = kk, this.deps = Fk, this.queue = [], this.pageLines = 0, this.pageBytes = 0, this.stopped = !1, this.dropped = !1, this.lastSentMs = Number.NEGATIVE_INFINITY, this.lastDumpMs = void 0, this.sentDumps = new Map, this.lastDumpMs = Fk.now()
      }
      start() {
        setInterval((() => {
          this.yJ()
        }), tk), window.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.flush()
        }), !0)
      }
      add(kk) {
        this.stopped || (this.pageLines + this.queue.length < 500 ? this.queue.push(function(kk) {
          return kk.replace(/\n/g, " | ").slice(0, 400)
        }(kk)) : this.dropped = !0)
      }
      yJ() {
        this.deps.now() - this.lastDumpMs >= wk && (this.lastDumpMs = this.deps.now(), this.queueDumps()), this.flush()
      }
      flush() {
        if (this.stopped || 0 === this.queue.length || this.deps.now() - this.lastSentMs < tk - 1e3) return;
        const kk = this.readDay(),
          Fk = [];
        let Bk = 0,
          Rk = null;
        for (const tk of this.queue) {
          const wk = sk(tk) + (Fk.length > 0 ? 1 : 0);
          if (Bk + wk > ak) break;
          const dk = bk + Bk + wk;
          if (this.pageBytes + dk > Xk) {
            Rk = "page";
            break
          }
          if (!this.dayFits(kk, Fk.length + 1, dk)) {
            Rk = "day";
            break
          }
          Fk.push(tk), Bk += wk
        }
        null === Rk && this.dropped && Fk.length === this.queue.length && (Rk = "page"), this.queue.splice(0, Fk.length), Fk.length > 0 && !this.sendCharged(kk, Fk.join("\n"), Fk.length, "lines") || null !== Rk && this.stopAt(Rk, kk)
      }
      queueDumps() {
        for (const [kk, Fk] of this.deps.dumps()) {
          const Bk = Fk.split("\n").slice(0, 20),
            Rk = Bk.join("\n");
          if (this.sentDumps.get(kk) !== Rk) {
            this.sentDumps.set(kk, Rk);
            for (const Fk of Bk) this.add(`[dump:${kk}] ${Fk}`)
          }
        }
      }
      stopAt(kk, Fk) {
        this.stopped = !0, this.queue.length = 0;
        const Bk = "page" === kk ? "diag_cap: the page's cap (500 lines, 256 KB), so this page sends no more" : `diag_cap: the claim's daily cap (${this.claim.perClientLines} lines, ${this.dayBytes()/1e3} KB), so it sends no more today`;
        if ("day" === kk) {
          if (Fk.capSent) return;
          Fk.capSent = !0
        } else if (!this.dayFits(Fk, 1, Vk(Bk))) return;
        this.sendCharged(Fk, Bk, 1, "cap")
      }
      dayBytes() {
        return 400 * this.claim.perClientLines
      }
      dayFits(kk, Fk, Bk) {
        return kk.lines + Fk <= this.claim.perClientLines && kk.bytes + Bk <= this.dayBytes()
      }
      readDays() {
        var kk;
        return null !== (kk = this.deps.storage.getItem(Rk)) && void 0 !== kk ? kk : {}
      }
      readDay() {
        const kk = new Date(this.deps.now()).toISOString().slice(0, 10),
          Fk = this.readDays()[this.claim.claimId];
        return (null === Fk || void 0 === Fk ? void 0 : Fk.day) === kk ? Fk : {
          day: kk,
          lines: 0,
          bytes: 0,
          capSent: !1
        }
      }
      writeDay(kk) {
        const Fk = Object.fromEntries(Object.entries(this.readDays()).filter((Fk => {
          let [, Bk] = Fk;
          return Bk.day === kk.day
        })));
        return Fk[this.claim.claimId] = kk, this.deps.storage.setItem(Rk, Fk)
      }
      sendCharged(kk, Fk, Bk, Rk) {
        const tk = Vk(Fk);
        return kk.lines += Bk, kk.bytes += tk, this.writeDay(kk) ? (this.pageLines += Bk, this.pageBytes += tk, this.lastSentMs = this.deps.now(), this.deps.send(Fk, {
          diag_kind: Rk
        }), !0) : (console.warn("The diag sink can't keep its daily count, so it sends nothing"), this.stopped = !0, this.queue.length = 0, !1)
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);