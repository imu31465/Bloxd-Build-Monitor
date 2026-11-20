export const id = 30;
export const ids = [30];
export const modules = {
  36283: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      DUMP_GAP_MS: () => Nu,
      DiagSink: () => Bu,
      ITEM_GAP_MS: () => Ku,
      ITEM_METADATA_BYTES: () => Ju,
      MAX_MESSAGE_BYTES: () => Qu
    });
    const Eu = "bloxdDiagSinkDays",
      Ku = 4e4,
      Qu = 2048,
      mu = 262144,
      Ju = 1500,
      Nu = 6e5,
      Xu = new TextEncoder;

    function Vu(uu) {
      return Xu.encode(uu).length
    }

    function ru(uu) {
      return Ju + Vu(uu)
    }
    class Bu {
      constructor(uu, Ru) {
        this.claim = uu, this.deps = Ru, this.queue = [], this.pageLines = 0, this.pageBytes = 0, this.stopped = !1, this.dropped = !1, this.lastSentMs = Number.NEGATIVE_INFINITY, this.lastDumpMs = void 0, this.sentDumps = new Map, this.lastDumpMs = Ru.now()
      }
      start() {
        setInterval((() => {
          this.sr()
        }), Ku), window.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.flush()
        }), !0)
      }
      add(uu) {
        this.stopped || (this.pageLines + this.queue.length < 500 ? this.queue.push(function(uu) {
          return uu.replace(/\n/g, " | ").slice(0, 400)
        }(uu)) : this.dropped = !0)
      }
      sr() {
        this.deps.now() - this.lastDumpMs >= Nu && (this.lastDumpMs = this.deps.now(), this.queueDumps()), this.flush()
      }
      flush() {
        if (this.stopped || 0 === this.queue.length || this.deps.now() - this.lastSentMs < Ku - 1e3) return;
        const uu = this.readDay(),
          Ru = [];
        let yu = 0,
          Eu = null;
        for (const Ku of this.queue) {
          const Nu = Vu(Ku) + (Ru.length > 0 ? 1 : 0);
          if (yu + Nu > Qu) break;
          const Xu = Ju + yu + Nu;
          if (this.pageBytes + Xu > mu) {
            Eu = "page";
            break
          }
          if (!this.dayFits(uu, Ru.length + 1, Xu)) {
            Eu = "day";
            break
          }
          Ru.push(Ku), yu += Nu
        }
        null === Eu && this.dropped && Ru.length === this.queue.length && (Eu = "page"), this.queue.splice(0, Ru.length), Ru.length > 0 && !this.sendCharged(uu, Ru.join("\n"), Ru.length, "lines") || null !== Eu && this.stopAt(Eu, uu)
      }
      queueDumps() {
        for (const [uu, Ru] of this.deps.dumps()) {
          const yu = Ru.split("\n").slice(0, 20),
            Eu = yu.join("\n");
          if (this.sentDumps.get(uu) !== Eu) {
            this.sentDumps.set(uu, Eu);
            for (const Ru of yu) this.add(`[dump:${uu}] ${Ru}`)
          }
        }
      }
      stopAt(uu, Ru) {
        this.stopped = !0, this.queue.length = 0;
        const yu = "page" === uu ? "diag_cap: the page's cap (500 lines, 256 KB), so this page sends no more" : `diag_cap: the claim's daily cap (${this.claim.perClientLines} lines, ${this.dayBytes()/1e3} KB), so it sends no more today`;
        if ("day" === uu) {
          if (Ru.capSent) return;
          Ru.capSent = !0
        } else if (!this.dayFits(Ru, 1, ru(yu))) return;
        this.sendCharged(Ru, yu, 1, "cap")
      }
      dayBytes() {
        return 400 * this.claim.perClientLines
      }
      dayFits(uu, Ru, yu) {
        return uu.lines + Ru <= this.claim.perClientLines && uu.bytes + yu <= this.dayBytes()
      }
      readDays() {
        var uu;
        return null !== (uu = this.deps.storage.getItem(Eu)) && void 0 !== uu ? uu : {}
      }
      readDay() {
        const uu = new Date(this.deps.now()).toISOString().slice(0, 10),
          Ru = this.readDays()[this.claim.claimId];
        return (null === Ru || void 0 === Ru ? void 0 : Ru.day) === uu ? Ru : {
          day: uu,
          lines: 0,
          bytes: 0,
          capSent: !1
        }
      }
      writeDay(uu) {
        const Ru = Object.fromEntries(Object.entries(this.readDays()).filter((Ru => {
          let [, yu] = Ru;
          return yu.day === uu.day
        })));
        return Ru[this.claim.claimId] = uu, this.deps.storage.setItem(Eu, Ru)
      }
      sendCharged(uu, Ru, yu, Eu) {
        const Ku = ru(Ru);
        return uu.lines += yu, uu.bytes += Ku, this.writeDay(uu) ? (this.pageLines += yu, this.pageBytes += Ku, this.lastSentMs = this.deps.now(), this.deps.send(Ru, {
          diag_kind: Eu
        }), !0) : (console.warn("The diag sink can't keep its daily count, so it sends nothing"), this.stopped = !0, this.queue.length = 0, !1)
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);