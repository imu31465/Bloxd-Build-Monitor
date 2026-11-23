export const id = 30;
export const ids = [30];
export const modules = {
  36424: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      DUMP_GAP_MS: () => qk,
      DiagSink: () => jk,
      ITEM_GAP_MS: () => Tk,
      ITEM_METADATA_BYTES: () => ak,
      MAX_LINE_CHARS: () => yk,
      MAX_MESSAGE_BYTES: () => ik
    });
    const Xk = "bloxdDiagSinkDays",
      Tk = 4e4,
      ik = 2048,
      yk = 400,
      lk = 262144,
      ak = 1500,
      qk = 6e5,
      Lk = new TextEncoder;

    function tk(kk) {
      return Lk.encode(kk).length
    }

    function Zk(kk) {
      return ak + tk(kk)
    }
    class jk {
      constructor(kk, Fk) {
        this.claim = kk, this.deps = Fk, this.queue = [], this.pageLines = 0, this.pageBytes = 0, this.stopped = !1, this.dropped = !1, this.lastSentMs = Number.NEGATIVE_INFINITY, this.lastDumpMs = void 0, this.sentDumps = new Map, this.lastDumpMs = Fk.now()
      }
      start() {
        setInterval((() => {
          this.Dt()
        }), Tk), window.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.flush()
        }), !0)
      }
      add(kk) {
        this.stopped || (this.pageLines + this.queue.length < 500 ? this.queue.push(function(kk) {
          const Fk = kk.replace(/\n/g, " | ");
          if (Fk.length <= yk) return Fk;
          let Ik = yk - 3;
          const Xk = Fk.charCodeAt(Ik - 1);
          return Xk >= 55296 && Xk <= 56319 && Ik--, `${Fk.slice(0,Ik)}...`
        }(kk)) : this.dropped = !0)
      }
      Dt() {
        this.deps.now() - this.lastDumpMs >= qk && (this.lastDumpMs = this.deps.now(), this.queueDumps()), this.flush()
      }
      flush() {
        if (this.stopped || 0 === this.queue.length || this.deps.now() - this.lastSentMs < Tk - 1e3) return;
        const kk = this.readDay(),
          Fk = [];
        let Ik = 0,
          Xk = null;
        for (const Tk of this.queue) {
          const yk = tk(Tk) + (Fk.length > 0 ? 1 : 0);
          if (Ik + yk > ik) break;
          const qk = ak + Ik + yk;
          if (this.pageBytes + qk > lk) {
            Xk = "page";
            break
          }
          if (!this.dayFits(kk, Fk.length + 1, qk)) {
            Xk = "day";
            break
          }
          Fk.push(Tk), Ik += yk
        }
        null === Xk && this.dropped && Fk.length === this.queue.length && (Xk = "page"), this.queue.splice(0, Fk.length), Fk.length > 0 && !this.sendCharged(kk, Fk.join("\n"), Fk.length, "lines") || null !== Xk && this.stopAt(Xk, kk)
      }
      queueDumps() {
        for (const [kk, Fk] of this.deps.dumps()) {
          const Ik = Fk.split("\n").slice(0, 20),
            Xk = Ik.join("\n");
          if (this.sentDumps.get(kk) !== Xk) {
            this.sentDumps.set(kk, Xk);
            for (const Fk of Ik) this.add(`[dump:${kk}] ${Fk}`)
          }
        }
      }
      stopAt(kk, Fk) {
        this.stopped = !0, this.queue.length = 0;
        const Ik = "page" === kk ? "diag_cap: the page's cap (500 lines, 256 KB), so this page sends no more" : `diag_cap: the claim's daily cap (${this.claim.perClientLines} lines, ${this.dayBytes()/1e3} KB), so it sends no more today`;
        if ("day" === kk) {
          if (Fk.capSent) return;
          Fk.capSent = !0
        } else if (!this.dayFits(Fk, 1, Zk(Ik))) return;
        this.sendCharged(Fk, Ik, 1, "cap")
      }
      dayBytes() {
        return 400 * this.claim.perClientLines
      }
      dayFits(kk, Fk, Ik) {
        return kk.lines + Fk <= this.claim.perClientLines && kk.bytes + Ik <= this.dayBytes()
      }
      readDays() {
        var kk;
        return null !== (kk = this.deps.storage.getItem(Xk)) && void 0 !== kk ? kk : {}
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
          let [, Ik] = Fk;
          return Ik.day === kk.day
        })));
        return Fk[this.claim.claimId] = kk, this.deps.storage.setItem(Xk, Fk)
      }
      sendCharged(kk, Fk, Ik, Xk) {
        const Tk = Zk(Fk);
        return kk.lines += Ik, kk.bytes += Tk, this.writeDay(kk) ? (this.pageLines += Ik, this.pageBytes += Tk, this.lastSentMs = this.deps.now(), this.deps.send(Fk, {
          diag_kind: Xk
        }), !0) : (console.warn("The diag sink can't keep its daily count, so it sends nothing"), this.stopped = !0, this.queue.length = 0, !1)
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);