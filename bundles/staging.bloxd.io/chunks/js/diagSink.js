export const id = 30;
export const ids = [30];
export const modules = {
  35936: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      DUMP_GAP_MS: () => vz,
      DiagSink: () => Nz,
      ITEM_GAP_MS: () => Wz,
      ITEM_METADATA_BYTES: () => oz,
      MAX_MESSAGE_BYTES: () => Xz
    });
    const Fz = "bloxdDiagSinkDays",
      Wz = 4e4,
      Xz = 2048,
      Oz = 262144,
      oz = 1500,
      vz = 6e5,
      Uz = new TextEncoder;

    function Kz(zz) {
      return Uz.encode(zz).length
    }

    function uz(zz) {
      return oz + Kz(zz)
    }
    class Nz {
      constructor(zz, tz) {
        this.claim = zz, this.deps = tz, this.queue = [], this.pageLines = 0, this.pageBytes = 0, this.stopped = !1, this.dropped = !1, this.lastSentMs = Number.NEGATIVE_INFINITY, this.lastDumpMs = void 0, this.sentDumps = new Map, this.lastDumpMs = tz.now()
      }
      start() {
        setInterval((() => {
          this.wN()
        }), Wz), window.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.flush()
        }), !0)
      }
      add(zz) {
        this.stopped || (this.pageLines + this.queue.length < 500 ? this.queue.push(function(zz) {
          return zz.replace(/\n/g, " | ").slice(0, 400)
        }(zz)) : this.dropped = !0)
      }
      wN() {
        this.deps.now() - this.lastDumpMs >= vz && (this.lastDumpMs = this.deps.now(), this.queueDumps()), this.flush()
      }
      flush() {
        if (this.stopped || 0 === this.queue.length || this.deps.now() - this.lastSentMs < Wz - 1e3) return;
        const zz = this.readDay(),
          tz = [];
        let sz = 0,
          Fz = null;
        for (const Wz of this.queue) {
          const vz = Kz(Wz) + (tz.length > 0 ? 1 : 0);
          if (sz + vz > Xz) break;
          const Uz = oz + sz + vz;
          if (this.pageBytes + Uz > Oz) {
            Fz = "page";
            break
          }
          if (!this.dayFits(zz, tz.length + 1, Uz)) {
            Fz = "day";
            break
          }
          tz.push(Wz), sz += vz
        }
        null === Fz && this.dropped && tz.length === this.queue.length && (Fz = "page"), this.queue.splice(0, tz.length), tz.length > 0 && !this.sendCharged(zz, tz.join("\n"), tz.length, "lines") || null !== Fz && this.stopAt(Fz, zz)
      }
      queueDumps() {
        for (const [zz, tz] of this.deps.dumps()) {
          const sz = tz.split("\n").slice(0, 20),
            Fz = sz.join("\n");
          if (this.sentDumps.get(zz) !== Fz) {
            this.sentDumps.set(zz, Fz);
            for (const tz of sz) this.add(`[dump:${zz}] ${tz}`)
          }
        }
      }
      stopAt(zz, tz) {
        this.stopped = !0, this.queue.length = 0;
        const sz = "page" === zz ? "diag_cap: the page's cap (500 lines, 256 KB), so this page sends no more" : `diag_cap: the claim's daily cap (${this.claim.perClientLines} lines, ${this.dayBytes()/1e3} KB), so it sends no more today`;
        if ("day" === zz) {
          if (tz.capSent) return;
          tz.capSent = !0
        } else if (!this.dayFits(tz, 1, uz(sz))) return;
        this.sendCharged(tz, sz, 1, "cap")
      }
      dayBytes() {
        return 400 * this.claim.perClientLines
      }
      dayFits(zz, tz, sz) {
        return zz.lines + tz <= this.claim.perClientLines && zz.bytes + sz <= this.dayBytes()
      }
      readDays() {
        var zz;
        return null !== (zz = this.deps.storage.getItem(Fz)) && void 0 !== zz ? zz : {}
      }
      readDay() {
        const zz = new Date(this.deps.now()).toISOString().slice(0, 10),
          tz = this.readDays()[this.claim.claimId];
        return (null === tz || void 0 === tz ? void 0 : tz.day) === zz ? tz : {
          day: zz,
          lines: 0,
          bytes: 0,
          capSent: !1
        }
      }
      writeDay(zz) {
        const tz = Object.fromEntries(Object.entries(this.readDays()).filter((tz => {
          let [, sz] = tz;
          return sz.day === zz.day
        })));
        return tz[this.claim.claimId] = zz, this.deps.storage.setItem(Fz, tz)
      }
      sendCharged(zz, tz, sz, Fz) {
        const Wz = uz(tz);
        return zz.lines += sz, zz.bytes += Wz, this.writeDay(zz) ? (this.pageLines += sz, this.pageBytes += Wz, this.lastSentMs = this.deps.now(), this.deps.send(tz, {
          diag_kind: Fz
        }), !0) : (console.warn("The diag sink can't keep its daily count, so it sends nothing"), this.stopped = !0, this.queue.length = 0, !1)
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);