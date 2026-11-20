export const id = 30;
export const ids = [30];
export const modules = {
  35969: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      DUMP_GAP_MS: () => Nv,
      DiagSink: () => wv,
      ITEM_GAP_MS: () => Sv,
      ITEM_METADATA_BYTES: () => dv,
      MAX_LINE_CHARS: () => gv,
      MAX_MESSAGE_BYTES: () => ev
    });
    const hv = "bloxdDiagSinkDays",
      Sv = 4e4,
      ev = 2048,
      gv = 400,
      pv = 262144,
      dv = 1500,
      Nv = 6e5,
      lv = new TextEncoder;

    function Tv(vv) {
      return lv.encode(vv).length
    }

    function Wv(vv) {
      return dv + Tv(vv)
    }
    class wv {
      constructor(vv, zv) {
        this.claim = vv, this.deps = zv, this.queue = [], this.pageLines = 0, this.pageBytes = 0, this.stopped = !1, this.dropped = !1, this.lastSentMs = Number.NEGATIVE_INFINITY, this.lastDumpMs = void 0, this.sentDumps = new Map, this.lastDumpMs = zv.now()
      }
      start() {
        setInterval((() => {
          this.MT()
        }), Sv), window.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.flush()
        }), !0)
      }
      add(vv) {
        this.stopped || (this.pageLines + this.queue.length < 500 ? this.queue.push(function(vv) {
          const zv = vv.replace(/\n/g, " | ");
          if (zv.length <= gv) return zv;
          let Pv = gv - 3;
          const hv = zv.charCodeAt(Pv - 1);
          return hv >= 55296 && hv <= 56319 && Pv--, `${zv.slice(0,Pv)}...`
        }(vv)) : this.dropped = !0)
      }
      MT() {
        this.deps.now() - this.lastDumpMs >= Nv && (this.lastDumpMs = this.deps.now(), this.queueDumps()), this.flush()
      }
      flush() {
        if (this.stopped || 0 === this.queue.length || this.deps.now() - this.lastSentMs < Sv - 1e3) return;
        const vv = this.readDay(),
          zv = [];
        let Pv = 0,
          hv = null;
        for (const Sv of this.queue) {
          const gv = Tv(Sv) + (zv.length > 0 ? 1 : 0);
          if (Pv + gv > ev) break;
          const Nv = dv + Pv + gv;
          if (this.pageBytes + Nv > pv) {
            hv = "page";
            break
          }
          if (!this.dayFits(vv, zv.length + 1, Nv)) {
            hv = "day";
            break
          }
          zv.push(Sv), Pv += gv
        }
        null === hv && this.dropped && zv.length === this.queue.length && (hv = "page"), this.queue.splice(0, zv.length), zv.length > 0 && !this.sendCharged(vv, zv.join("\n"), zv.length, "lines") || null !== hv && this.stopAt(hv, vv)
      }
      queueDumps() {
        for (const [vv, zv] of this.deps.dumps()) {
          const Pv = zv.split("\n").slice(0, 20),
            hv = Pv.join("\n");
          if (this.sentDumps.get(vv) !== hv) {
            this.sentDumps.set(vv, hv);
            for (const zv of Pv) this.add(`[dump:${vv}] ${zv}`)
          }
        }
      }
      stopAt(vv, zv) {
        this.stopped = !0, this.queue.length = 0;
        const Pv = "page" === vv ? "diag_cap: the page's cap (500 lines, 256 KB), so this page sends no more" : `diag_cap: the claim's daily cap (${this.claim.perClientLines} lines, ${this.dayBytes()/1e3} KB), so it sends no more today`;
        if ("day" === vv) {
          if (zv.capSent) return;
          zv.capSent = !0
        } else if (!this.dayFits(zv, 1, Wv(Pv))) return;
        this.sendCharged(zv, Pv, 1, "cap")
      }
      dayBytes() {
        return 400 * this.claim.perClientLines
      }
      dayFits(vv, zv, Pv) {
        return vv.lines + zv <= this.claim.perClientLines && vv.bytes + Pv <= this.dayBytes()
      }
      readDays() {
        var vv;
        return null !== (vv = this.deps.storage.getItem(hv)) && void 0 !== vv ? vv : {}
      }
      readDay() {
        const vv = new Date(this.deps.now()).toISOString().slice(0, 10),
          zv = this.readDays()[this.claim.claimId];
        return (null === zv || void 0 === zv ? void 0 : zv.day) === vv ? zv : {
          day: vv,
          lines: 0,
          bytes: 0,
          capSent: !1
        }
      }
      writeDay(vv) {
        const zv = Object.fromEntries(Object.entries(this.readDays()).filter((zv => {
          let [, Pv] = zv;
          return Pv.day === vv.day
        })));
        return zv[this.claim.claimId] = vv, this.deps.storage.setItem(hv, zv)
      }
      sendCharged(vv, zv, Pv, hv) {
        const Sv = Wv(zv);
        return vv.lines += Pv, vv.bytes += Sv, this.writeDay(vv) ? (this.pageLines += Pv, this.pageBytes += Sv, this.lastSentMs = this.deps.now(), this.deps.send(zv, {
          diag_kind: hv
        }), !0) : (console.warn("The diag sink can't keep its daily count, so it sends nothing"), this.stopped = !0, this.queue.length = 0, !1)
      }
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);