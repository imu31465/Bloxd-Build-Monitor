export const id = 30;
export const ids = [30];
export const modules = {
  35909: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      DUMP_GAP_MS: () => tz,
      DiagSink: () => dz,
      ITEM_GAP_MS: () => nz,
      ITEM_METADATA_BYTES: () => Mz,
      MAX_MESSAGE_BYTES: () => iz
    });
    const Ez = "bloxdDiagSinkDays",
      nz = 4e4,
      iz = 2048,
      lz = 262144,
      Mz = 1500,
      tz = 6e5,
      Hz = new TextEncoder;

    function Oz(zz) {
      return Hz.encode(zz).length
    }

    function pz(zz) {
      return Mz + Oz(zz)
    }
    class dz {
      constructor(zz, uz) {
        this.claim = zz, this.deps = uz, this.queue = [], this.pageLines = 0, this.pageBytes = 0, this.stopped = !1, this.dropped = !1, this.lastSentMs = Number.NEGATIVE_INFINITY, this.lastDumpMs = void 0, this.sentDumps = new Map, this.lastDumpMs = uz.now()
      }
      start() {
        setInterval((() => {
          this.sd()
        }), nz), window.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.flush()
        }), !0)
      }
      add(zz) {
        this.stopped || (this.pageLines + this.queue.length < 500 ? this.queue.push(function(zz) {
          return zz.replace(/\n/g, " | ").slice(0, 400)
        }(zz)) : this.dropped = !0)
      }
      sd() {
        this.deps.now() - this.lastDumpMs >= tz && (this.lastDumpMs = this.deps.now(), this.queueDumps()), this.flush()
      }
      flush() {
        if (this.stopped || 0 === this.queue.length || this.deps.now() - this.lastSentMs < nz - 1e3) return;
        const zz = this.readDay(),
          uz = [];
        let bz = 0,
          Ez = null;
        for (const nz of this.queue) {
          const tz = Oz(nz) + (uz.length > 0 ? 1 : 0);
          if (bz + tz > iz) break;
          const Hz = Mz + bz + tz;
          if (this.pageBytes + Hz > lz) {
            Ez = "page";
            break
          }
          if (!this.dayFits(zz, uz.length + 1, Hz)) {
            Ez = "day";
            break
          }
          uz.push(nz), bz += tz
        }
        null === Ez && this.dropped && uz.length === this.queue.length && (Ez = "page"), this.queue.splice(0, uz.length), uz.length > 0 && !this.sendCharged(zz, uz.join("\n"), uz.length, "lines") || null !== Ez && this.stopAt(Ez, zz)
      }
      queueDumps() {
        for (const [zz, uz] of this.deps.dumps()) {
          const bz = uz.split("\n").slice(0, 20),
            Ez = bz.join("\n");
          if (this.sentDumps.get(zz) !== Ez) {
            this.sentDumps.set(zz, Ez);
            for (const uz of bz) this.add(`[dump:${zz}] ${uz}`)
          }
        }
      }
      stopAt(zz, uz) {
        this.stopped = !0, this.queue.length = 0;
        const bz = "page" === zz ? "diag_cap: the page's cap (500 lines, 256 KB), so this page sends no more" : `diag_cap: the claim's daily cap (${this.claim.perClientLines} lines, ${this.dayBytes()/1e3} KB), so it sends no more today`;
        if ("day" === zz) {
          if (uz.capSent) return;
          uz.capSent = !0
        } else if (!this.dayFits(uz, 1, pz(bz))) return;
        this.sendCharged(uz, bz, 1, "cap")
      }
      dayBytes() {
        return 400 * this.claim.perClientLines
      }
      dayFits(zz, uz, bz) {
        return zz.lines + uz <= this.claim.perClientLines && zz.bytes + bz <= this.dayBytes()
      }
      readDays() {
        var zz;
        return null !== (zz = this.deps.storage.getItem(Ez)) && void 0 !== zz ? zz : {}
      }
      readDay() {
        const zz = new Date(this.deps.now()).toISOString().slice(0, 10),
          uz = this.readDays()[this.claim.claimId];
        return (null === uz || void 0 === uz ? void 0 : uz.day) === zz ? uz : {
          day: zz,
          lines: 0,
          bytes: 0,
          capSent: !1
        }
      }
      writeDay(zz) {
        const uz = Object.fromEntries(Object.entries(this.readDays()).filter((uz => {
          let [, bz] = uz;
          return bz.day === zz.day
        })));
        return uz[this.claim.claimId] = zz, this.deps.storage.setItem(Ez, uz)
      }
      sendCharged(zz, uz, bz, Ez) {
        const nz = pz(uz);
        return zz.lines += bz, zz.bytes += nz, this.writeDay(zz) ? (this.pageLines += bz, this.pageBytes += nz, this.lastSentMs = this.deps.now(), this.deps.send(uz, {
          diag_kind: Ez
        }), !0) : (console.warn("The diag sink can't keep its daily count, so it sends nothing"), this.stopped = !0, this.queue.length = 0, !1)
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);