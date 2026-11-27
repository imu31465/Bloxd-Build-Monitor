export const id = 37;
export const ids = [37];
export const modules = {
  37967: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      DUMP_GAP_MS: () => Er,
      DiagSink: () => Nr,
      ITEM_GAP_MS: () => Wr,
      ITEM_METADATA_BYTES: () => fr,
      MAX_LINE_CHARS: () => jr,
      MAX_MESSAGE_BYTES: () => ar
    });
    const Zr = "bloxdDiagSinkDays",
      Wr = 4e4,
      ar = 2048,
      jr = 400,
      Ir = 262144,
      fr = 1500,
      Er = 6e5,
      pr = new TextEncoder;

    function xr(rr) {
      return pr.encode(rr).length
    }

    function mr(rr) {
      return fr + xr(rr)
    }
    class Nr {
      constructor(rr, Sr) {
        this.claim = rr, this.deps = Sr, this.queue = [], this.pageLines = 0, this.pageBytes = 0, this.stopped = !1, this.dropped = !1, this.lastSentMs = Number.NEGATIVE_INFINITY, this.lastDumpMs = void 0, this.sentDumps = new Map, this.lastDumpMs = Sr.now()
      }
      start() {
        setInterval((() => {
          this.lx()
        }), Wr), window.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && (this.deps.releaseHeld(), this.flush())
        }), !0)
      }
      add(rr) {
        this.stopped || (this.pageLines + this.queue.length < 500 ? this.queue.push(function(rr) {
          const Sr = rr.replace(/\n/g, " | ");
          if (Sr.length <= jr) return Sr;
          let Qr = jr - 3;
          const Zr = Sr.charCodeAt(Qr - 1);
          return Zr >= 55296 && Zr <= 56319 && Qr--, `${Sr.slice(0,Qr)}...`
        }(rr)) : this.dropped = !0)
      }
      lx() {
        this.deps.now() - this.lastDumpMs >= Er && (this.lastDumpMs = this.deps.now(), this.queueDumps()), this.flush()
      }
      flush() {
        if (this.stopped || 0 === this.queue.length || this.deps.now() - this.lastSentMs < Wr - 1e3) return;
        const rr = this.readDay(),
          Sr = [];
        let Qr = 0,
          Zr = null;
        for (const Wr of this.queue) {
          const jr = xr(Wr) + (Sr.length > 0 ? 1 : 0);
          if (Qr + jr > ar) break;
          const Er = fr + Qr + jr;
          if (this.pageBytes + Er > Ir) {
            Zr = "page";
            break
          }
          if (!this.dayFits(rr, Sr.length + 1, Er)) {
            Zr = "day";
            break
          }
          Sr.push(Wr), Qr += jr
        }
        null === Zr && this.dropped && Sr.length === this.queue.length && (Zr = "page"), this.queue.splice(0, Sr.length), Sr.length > 0 && !this.sendCharged(rr, Sr.join("\n"), Sr.length, "lines") || null !== Zr && this.stopAt(Zr, rr)
      }
      queueDumps() {
        for (const [rr, Sr] of this.deps.dumps()) {
          const Qr = Sr.split("\n").slice(0, 20),
            Zr = Qr.join("\n");
          if (this.sentDumps.get(rr) !== Zr) {
            this.sentDumps.set(rr, Zr);
            for (const Sr of Qr) this.add(`[dump:${rr}] ${Sr}`)
          }
        }
      }
      stopAt(rr, Sr) {
        this.stopped = !0, this.queue.length = 0;
        const Qr = "page" === rr ? "diag_cap: the page's cap (500 lines, 256 KB), so this page sends no more" : `diag_cap: the claim's daily cap (${this.claim.perClientLines} lines, ${this.dayBytes()/1e3} KB), so it sends no more today`;
        if ("day" === rr) {
          if (Sr.capSent) return;
          Sr.capSent = !0
        } else if (!this.dayFits(Sr, 1, mr(Qr))) return;
        this.sendCharged(Sr, Qr, 1, "cap")
      }
      dayBytes() {
        return 400 * this.claim.perClientLines
      }
      dayFits(rr, Sr, Qr) {
        return rr.lines + Sr <= this.claim.perClientLines && rr.bytes + Qr <= this.dayBytes()
      }
      readDays() {
        var rr;
        return null !== (rr = this.deps.storage.getItem(Zr)) && void 0 !== rr ? rr : {}
      }
      readDay() {
        const rr = new Date(this.deps.now()).toISOString().slice(0, 10),
          Sr = this.readDays()[this.claim.claimId];
        return (null === Sr || void 0 === Sr ? void 0 : Sr.day) === rr ? Sr : {
          day: rr,
          lines: 0,
          bytes: 0,
          capSent: !1
        }
      }
      writeDay(rr) {
        const Sr = Object.fromEntries(Object.entries(this.readDays()).filter((Sr => {
          let [, Qr] = Sr;
          return Qr.day === rr.day
        })));
        return Sr[this.claim.claimId] = rr, this.deps.storage.setItem(Zr, Sr)
      }
      sendCharged(rr, Sr, Qr, Zr) {
        const Wr = mr(Sr);
        return rr.lines += Qr, rr.bytes += Wr, this.writeDay(rr) ? (this.pageLines += Qr, this.pageBytes += Wr, this.lastSentMs = this.deps.now(), this.deps.send(Sr, {
          diag_kind: Zr
        }), !0) : (console.warn("The diag sink can't keep its daily count, so it sends nothing"), this.stopped = !0, this.queue.length = 0, !1)
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);