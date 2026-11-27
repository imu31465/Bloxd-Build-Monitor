export const id = 36;
export const ids = [36];
export const modules = {
  37213: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      DUMP_GAP_MS: () => Je,
      DiagSink: () => qe,
      ITEM_GAP_MS: () => be,
      ITEM_METADATA_BYTES: () => Fe,
      MAX_LINE_CHARS: () => Ke,
      MAX_MESSAGE_BYTES: () => Me
    });
    const ye = "bloxdDiagSinkDays",
      be = 4e4,
      Me = 2048,
      Ke = 400,
      Ue = 262144,
      Fe = 1500,
      Je = 6e5,
      oe = new TextEncoder;

    function Re(ee) {
      return oe.encode(ee).length
    }

    function ke(ee) {
      return Fe + Re(ee)
    }
    class qe {
      constructor(ee, ie) {
        this.claim = ee, this.deps = ie, this.queue = [], this.pageLines = 0, this.pageBytes = 0, this.stopped = !1, this.dropped = !1, this.lastSentMs = Number.NEGATIVE_INFINITY, this.lastDumpMs = void 0, this.sentDumps = new Map, this.lastDumpMs = ie.now()
      }
      start() {
        setInterval((() => {
          this.YR()
        }), be), window.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && (this.deps.releaseHeld(), this.flush())
        }), !0)
      }
      add(ee) {
        this.stopped || (this.pageLines + this.queue.length < 500 ? this.queue.push(function(ee) {
          const ie = ee.replace(/\n/g, " | ");
          if (ie.length <= Ke) return ie;
          let He = Ke - 3;
          const ye = ie.charCodeAt(He - 1);
          return ye >= 55296 && ye <= 56319 && He--, `${ie.slice(0,He)}...`
        }(ee)) : this.dropped = !0)
      }
      YR() {
        this.deps.now() - this.lastDumpMs >= Je && (this.lastDumpMs = this.deps.now(), this.queueDumps()), this.flush()
      }
      flush() {
        if (this.stopped || 0 === this.queue.length || this.deps.now() - this.lastSentMs < be - 1e3) return;
        const ee = this.readDay(),
          ie = [];
        let He = 0,
          ye = null;
        for (const be of this.queue) {
          const Ke = Re(be) + (ie.length > 0 ? 1 : 0);
          if (He + Ke > Me) break;
          const Je = Fe + He + Ke;
          if (this.pageBytes + Je > Ue) {
            ye = "page";
            break
          }
          if (!this.dayFits(ee, ie.length + 1, Je)) {
            ye = "day";
            break
          }
          ie.push(be), He += Ke
        }
        null === ye && this.dropped && ie.length === this.queue.length && (ye = "page"), this.queue.splice(0, ie.length), ie.length > 0 && !this.sendCharged(ee, ie.join("\n"), ie.length, "lines") || null !== ye && this.stopAt(ye, ee)
      }
      queueDumps() {
        for (const [ee, ie] of this.deps.dumps()) {
          const He = ie.split("\n").slice(0, 20),
            ye = He.join("\n");
          if (this.sentDumps.get(ee) !== ye) {
            this.sentDumps.set(ee, ye);
            for (const ie of He) this.add(`[dump:${ee}] ${ie}`)
          }
        }
      }
      stopAt(ee, ie) {
        this.stopped = !0, this.queue.length = 0;
        const He = "page" === ee ? "diag_cap: the page's cap (500 lines, 256 KB), so this page sends no more" : `diag_cap: the claim's daily cap (${this.claim.perClientLines} lines, ${this.dayBytes()/1e3} KB), so it sends no more today`;
        if ("day" === ee) {
          if (ie.capSent) return;
          ie.capSent = !0
        } else if (!this.dayFits(ie, 1, ke(He))) return;
        this.sendCharged(ie, He, 1, "cap")
      }
      dayBytes() {
        return 400 * this.claim.perClientLines
      }
      dayFits(ee, ie, He) {
        return ee.lines + ie <= this.claim.perClientLines && ee.bytes + He <= this.dayBytes()
      }
      readDays() {
        var ee;
        return null !== (ee = this.deps.storage.getItem(ye)) && void 0 !== ee ? ee : {}
      }
      readDay() {
        const ee = new Date(this.deps.now()).toISOString().slice(0, 10),
          ie = this.readDays()[this.claim.claimId];
        return (null === ie || void 0 === ie ? void 0 : ie.day) === ee ? ie : {
          day: ee,
          lines: 0,
          bytes: 0,
          capSent: !1
        }
      }
      writeDay(ee) {
        const ie = Object.fromEntries(Object.entries(this.readDays()).filter((ie => {
          let [, He] = ie;
          return He.day === ee.day
        })));
        return ie[this.claim.claimId] = ee, this.deps.storage.setItem(ye, ie)
      }
      sendCharged(ee, ie, He, ye) {
        const be = ke(ie);
        return ee.lines += He, ee.bytes += be, this.writeDay(ee) ? (this.pageLines += He, this.pageBytes += be, this.lastSentMs = this.deps.now(), this.deps.send(ie, {
          diag_kind: ye
        }), !0) : (console.warn("The diag sink can't keep its daily count, so it sends nothing"), this.stopped = !0, this.queue.length = 0, !1)
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);