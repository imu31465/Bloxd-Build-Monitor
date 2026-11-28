export const id = 37;
export const ids = [37];
export const modules = {
  38047: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      DUMP_GAP_MS: () => vd,
      DiagSink: () => Nd,
      ITEM_GAP_MS: () => Fd,
      ITEM_METADATA_BYTES: () => hd,
      MAX_LINE_CHARS: () => Xd,
      MAX_MESSAGE_BYTES: () => Rd
    });
    const Wd = "bloxdDiagSinkDays",
      Fd = 4e4,
      Rd = 2048,
      Xd = 400,
      Kd = 262144,
      hd = 1500,
      vd = 6e5,
      Qd = new TextEncoder;

    function td(dd) {
      return Qd.encode(dd).length
    }

    function od(dd) {
      return hd + td(dd)
    }
    class Nd {
      constructor(dd, Od) {
        this.claim = dd, this.deps = Od, this.queue = [], this.pageLines = 0, this.pageBytes = 0, this.stopped = !1, this.dropped = !1, this.lastSentMs = Number.NEGATIVE_INFINITY, this.lastDumpMs = void 0, this.sentDumps = new Map, this.lastDumpMs = Od.now()
      }
      start() {
        setInterval((() => {
          this.Et()
        }), Fd), window.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && (this.deps.releaseHeld(), this.flush())
        }), !0)
      }
      add(dd) {
        this.stopped || (this.pageLines + this.queue.length < 500 ? this.queue.push(function(dd) {
          const Od = dd.replace(/\n/g, " | ");
          if (Od.length <= Xd) return Od;
          let md = Xd - 3;
          const Wd = Od.charCodeAt(md - 1);
          return Wd >= 55296 && Wd <= 56319 && md--, `${Od.slice(0,md)}...`
        }(dd)) : this.dropped = !0)
      }
      Et() {
        this.deps.now() - this.lastDumpMs >= vd && (this.lastDumpMs = this.deps.now(), this.queueDumps()), this.flush()
      }
      flush() {
        if (this.stopped || 0 === this.queue.length || this.deps.now() - this.lastSentMs < Fd - 1e3) return;
        const dd = this.readDay(),
          Od = [];
        let md = 0,
          Wd = null;
        for (const Fd of this.queue) {
          const Xd = td(Fd) + (Od.length > 0 ? 1 : 0);
          if (md + Xd > Rd) break;
          const vd = hd + md + Xd;
          if (this.pageBytes + vd > Kd) {
            Wd = "page";
            break
          }
          if (!this.dayFits(dd, Od.length + 1, vd)) {
            Wd = "day";
            break
          }
          Od.push(Fd), md += Xd
        }
        null === Wd && this.dropped && Od.length === this.queue.length && (Wd = "page"), this.queue.splice(0, Od.length), Od.length > 0 && !this.sendCharged(dd, Od.join("\n"), Od.length, "lines") || null !== Wd && this.stopAt(Wd, dd)
      }
      queueDumps() {
        for (const [dd, Od] of this.deps.dumps()) {
          const md = Od.split("\n").slice(0, 20),
            Wd = md.join("\n");
          if (this.sentDumps.get(dd) !== Wd) {
            this.sentDumps.set(dd, Wd);
            for (const Od of md) this.add(`[dump:${dd}] ${Od}`)
          }
        }
      }
      stopAt(dd, Od) {
        this.stopped = !0, this.queue.length = 0;
        const md = "page" === dd ? "diag_cap: the page's cap (500 lines, 256 KB), so this page sends no more" : `diag_cap: the claim's daily cap (${this.claim.perClientLines} lines, ${this.dayBytes()/1e3} KB), so it sends no more today`;
        if ("day" === dd) {
          if (Od.capSent) return;
          Od.capSent = !0
        } else if (!this.dayFits(Od, 1, od(md))) return;
        this.sendCharged(Od, md, 1, "cap")
      }
      dayBytes() {
        return 400 * this.claim.perClientLines
      }
      dayFits(dd, Od, md) {
        return dd.lines + Od <= this.claim.perClientLines && dd.bytes + md <= this.dayBytes()
      }
      readDays() {
        var dd;
        return null !== (dd = this.deps.storage.getItem(Wd)) && void 0 !== dd ? dd : {}
      }
      readDay() {
        const dd = new Date(this.deps.now()).toISOString().slice(0, 10),
          Od = this.readDays()[this.claim.claimId];
        return (null === Od || void 0 === Od ? void 0 : Od.day) === dd ? Od : {
          day: dd,
          lines: 0,
          bytes: 0,
          capSent: !1
        }
      }
      writeDay(dd) {
        const Od = Object.fromEntries(Object.entries(this.readDays()).filter((Od => {
          let [, md] = Od;
          return md.day === dd.day
        })));
        return Od[this.claim.claimId] = dd, this.deps.storage.setItem(Wd, Od)
      }
      sendCharged(dd, Od, md, Wd) {
        const Fd = od(Od);
        return dd.lines += md, dd.bytes += Fd, this.writeDay(dd) ? (this.pageLines += md, this.pageBytes += Fd, this.lastSentMs = this.deps.now(), this.deps.send(Od, {
          diag_kind: Wd
        }), !0) : (console.warn("The diag sink can't keep its daily count, so it sends nothing"), this.stopped = !0, this.queue.length = 0, !1)
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);