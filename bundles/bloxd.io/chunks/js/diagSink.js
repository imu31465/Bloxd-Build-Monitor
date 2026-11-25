export const id = 30;
export const ids = [30];
export const modules = {
  36811: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      DUMP_GAP_MS: () => fu,
      DiagSink: () => Nu,
      ITEM_GAP_MS: () => Uu,
      ITEM_METADATA_BYTES: () => qu,
      MAX_LINE_CHARS: () => Xu,
      MAX_MESSAGE_BYTES: () => Zu
    });
    const su = "bloxdDiagSinkDays",
      Uu = 4e4,
      Zu = 2048,
      Xu = 400,
      lu = 262144,
      qu = 1500,
      fu = 6e5,
      Cu = new TextEncoder;

    function bu(uu) {
      return Cu.encode(uu).length
    }

    function cu(uu) {
      return qu + bu(uu)
    }
    class Nu {
      constructor(uu, Eu) {
        this.claim = uu, this.deps = Eu, this.queue = [], this.pageLines = 0, this.pageBytes = 0, this.stopped = !1, this.dropped = !1, this.lastSentMs = Number.NEGATIVE_INFINITY, this.lastDumpMs = void 0, this.sentDumps = new Map, this.lastDumpMs = Eu.now()
      }
      start() {
        setInterval((() => {
          this.Tb()
        }), Uu), window.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && (this.deps.releaseHeld(), this.flush())
        }), !0)
      }
      add(uu) {
        this.stopped || (this.pageLines + this.queue.length < 500 ? this.queue.push(function(uu) {
          const Eu = uu.replace(/\n/g, " | ");
          if (Eu.length <= Xu) return Eu;
          let ju = Xu - 3;
          const su = Eu.charCodeAt(ju - 1);
          return su >= 55296 && su <= 56319 && ju--, `${Eu.slice(0,ju)}...`
        }(uu)) : this.dropped = !0)
      }
      Tb() {
        this.deps.now() - this.lastDumpMs >= fu && (this.lastDumpMs = this.deps.now(), this.queueDumps()), this.flush()
      }
      flush() {
        if (this.stopped || 0 === this.queue.length || this.deps.now() - this.lastSentMs < Uu - 1e3) return;
        const uu = this.readDay(),
          Eu = [];
        let ju = 0,
          su = null;
        for (const Uu of this.queue) {
          const Xu = bu(Uu) + (Eu.length > 0 ? 1 : 0);
          if (ju + Xu > Zu) break;
          const fu = qu + ju + Xu;
          if (this.pageBytes + fu > lu) {
            su = "page";
            break
          }
          if (!this.dayFits(uu, Eu.length + 1, fu)) {
            su = "day";
            break
          }
          Eu.push(Uu), ju += Xu
        }
        null === su && this.dropped && Eu.length === this.queue.length && (su = "page"), this.queue.splice(0, Eu.length), Eu.length > 0 && !this.sendCharged(uu, Eu.join("\n"), Eu.length, "lines") || null !== su && this.stopAt(su, uu)
      }
      queueDumps() {
        for (const [uu, Eu] of this.deps.dumps()) {
          const ju = Eu.split("\n").slice(0, 20),
            su = ju.join("\n");
          if (this.sentDumps.get(uu) !== su) {
            this.sentDumps.set(uu, su);
            for (const Eu of ju) this.add(`[dump:${uu}] ${Eu}`)
          }
        }
      }
      stopAt(uu, Eu) {
        this.stopped = !0, this.queue.length = 0;
        const ju = "page" === uu ? "diag_cap: the page's cap (500 lines, 256 KB), so this page sends no more" : `diag_cap: the claim's daily cap (${this.claim.perClientLines} lines, ${this.dayBytes()/1e3} KB), so it sends no more today`;
        if ("day" === uu) {
          if (Eu.capSent) return;
          Eu.capSent = !0
        } else if (!this.dayFits(Eu, 1, cu(ju))) return;
        this.sendCharged(Eu, ju, 1, "cap")
      }
      dayBytes() {
        return 400 * this.claim.perClientLines
      }
      dayFits(uu, Eu, ju) {
        return uu.lines + Eu <= this.claim.perClientLines && uu.bytes + ju <= this.dayBytes()
      }
      readDays() {
        var uu;
        return null !== (uu = this.deps.storage.getItem(su)) && void 0 !== uu ? uu : {}
      }
      readDay() {
        const uu = new Date(this.deps.now()).toISOString().slice(0, 10),
          Eu = this.readDays()[this.claim.claimId];
        return (null === Eu || void 0 === Eu ? void 0 : Eu.day) === uu ? Eu : {
          day: uu,
          lines: 0,
          bytes: 0,
          capSent: !1
        }
      }
      writeDay(uu) {
        const Eu = Object.fromEntries(Object.entries(this.readDays()).filter((Eu => {
          let [, ju] = Eu;
          return ju.day === uu.day
        })));
        return Eu[this.claim.claimId] = uu, this.deps.storage.setItem(su, Eu)
      }
      sendCharged(uu, Eu, ju, su) {
        const Uu = cu(Eu);
        return uu.lines += ju, uu.bytes += Uu, this.writeDay(uu) ? (this.pageLines += ju, this.pageBytes += Uu, this.lastSentMs = this.deps.now(), this.deps.send(Eu, {
          diag_kind: su
        }), !0) : (console.warn("The diag sink can't keep its daily count, so it sends nothing"), this.stopped = !0, this.queue.length = 0, !1)
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);