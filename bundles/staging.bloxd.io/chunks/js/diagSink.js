export const id = 30;
export const ids = [30];
export const modules = {
  35956: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      DUMP_GAP_MS: () => mk,
      DiagSink: () => nk,
      ITEM_GAP_MS: () => fk,
      ITEM_METADATA_BYTES: () => Pk,
      MAX_LINE_CHARS: () => bk,
      MAX_MESSAGE_BYTES: () => Sk
    });
    const Dk = "bloxdDiagSinkDays",
      fk = 4e4,
      Sk = 2048,
      bk = 400,
      rk = 262144,
      Pk = 1500,
      mk = 6e5,
      Mk = new TextEncoder;

    function Kk(kk) {
      return Mk.encode(kk).length
    }

    function xk(kk) {
      return Pk + Kk(kk)
    }
    class nk {
      constructor(kk, ek) {
        this.claim = kk, this.deps = ek, this.queue = [], this.pageLines = 0, this.pageBytes = 0, this.stopped = !1, this.dropped = !1, this.lastSentMs = Number.NEGATIVE_INFINITY, this.lastDumpMs = void 0, this.sentDumps = new Map, this.lastDumpMs = ek.now()
      }
      start() {
        setInterval((() => {
          this.Px()
        }), fk), window.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.flush()
        }), !0)
      }
      add(kk) {
        this.stopped || (this.pageLines + this.queue.length < 500 ? this.queue.push(function(kk) {
          const ek = kk.replace(/\n/g, " | ");
          if (ek.length <= bk) return ek;
          let ik = bk - 3;
          const Dk = ek.charCodeAt(ik - 1);
          return Dk >= 55296 && Dk <= 56319 && ik--, `${ek.slice(0,ik)}...`
        }(kk)) : this.dropped = !0)
      }
      Px() {
        this.deps.now() - this.lastDumpMs >= mk && (this.lastDumpMs = this.deps.now(), this.queueDumps()), this.flush()
      }
      flush() {
        if (this.stopped || 0 === this.queue.length || this.deps.now() - this.lastSentMs < fk - 1e3) return;
        const kk = this.readDay(),
          ek = [];
        let ik = 0,
          Dk = null;
        for (const fk of this.queue) {
          const bk = Kk(fk) + (ek.length > 0 ? 1 : 0);
          if (ik + bk > Sk) break;
          const mk = Pk + ik + bk;
          if (this.pageBytes + mk > rk) {
            Dk = "page";
            break
          }
          if (!this.dayFits(kk, ek.length + 1, mk)) {
            Dk = "day";
            break
          }
          ek.push(fk), ik += bk
        }
        null === Dk && this.dropped && ek.length === this.queue.length && (Dk = "page"), this.queue.splice(0, ek.length), ek.length > 0 && !this.sendCharged(kk, ek.join("\n"), ek.length, "lines") || null !== Dk && this.stopAt(Dk, kk)
      }
      queueDumps() {
        for (const [kk, ek] of this.deps.dumps()) {
          const ik = ek.split("\n").slice(0, 20),
            Dk = ik.join("\n");
          if (this.sentDumps.get(kk) !== Dk) {
            this.sentDumps.set(kk, Dk);
            for (const ek of ik) this.add(`[dump:${kk}] ${ek}`)
          }
        }
      }
      stopAt(kk, ek) {
        this.stopped = !0, this.queue.length = 0;
        const ik = "page" === kk ? "diag_cap: the page's cap (500 lines, 256 KB), so this page sends no more" : `diag_cap: the claim's daily cap (${this.claim.perClientLines} lines, ${this.dayBytes()/1e3} KB), so it sends no more today`;
        if ("day" === kk) {
          if (ek.capSent) return;
          ek.capSent = !0
        } else if (!this.dayFits(ek, 1, xk(ik))) return;
        this.sendCharged(ek, ik, 1, "cap")
      }
      dayBytes() {
        return 400 * this.claim.perClientLines
      }
      dayFits(kk, ek, ik) {
        return kk.lines + ek <= this.claim.perClientLines && kk.bytes + ik <= this.dayBytes()
      }
      readDays() {
        var kk;
        return null !== (kk = this.deps.storage.getItem(Dk)) && void 0 !== kk ? kk : {}
      }
      readDay() {
        const kk = new Date(this.deps.now()).toISOString().slice(0, 10),
          ek = this.readDays()[this.claim.claimId];
        return (null === ek || void 0 === ek ? void 0 : ek.day) === kk ? ek : {
          day: kk,
          lines: 0,
          bytes: 0,
          capSent: !1
        }
      }
      writeDay(kk) {
        const ek = Object.fromEntries(Object.entries(this.readDays()).filter((ek => {
          let [, ik] = ek;
          return ik.day === kk.day
        })));
        return ek[this.claim.claimId] = kk, this.deps.storage.setItem(Dk, ek)
      }
      sendCharged(kk, ek, ik, Dk) {
        const fk = xk(ek);
        return kk.lines += ik, kk.bytes += fk, this.writeDay(kk) ? (this.pageLines += ik, this.pageBytes += fk, this.lastSentMs = this.deps.now(), this.deps.send(ek, {
          diag_kind: Dk
        }), !0) : (console.warn("The diag sink can't keep its daily count, so it sends nothing"), this.stopped = !0, this.queue.length = 0, !1)
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);