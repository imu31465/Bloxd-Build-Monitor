export const id = 30;
export const ids = [30];
export const modules = {
  36434: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      DUMP_GAP_MS: () => uS,
      DiagSink: () => aS,
      ITEM_GAP_MS: () => bS,
      ITEM_METADATA_BYTES: () => qS,
      MAX_LINE_CHARS: () => xS,
      MAX_MESSAGE_BYTES: () => XS
    });
    const tS = "bloxdDiagSinkDays",
      bS = 4e4,
      XS = 2048,
      xS = 400,
      NS = 262144,
      qS = 1500,
      uS = 6e5,
      IS = new TextEncoder;

    function fS(SS) {
      return IS.encode(SS).length
    }

    function kS(SS) {
      return qS + fS(SS)
    }
    class aS {
      constructor(SS, HS) {
        this.claim = SS, this.deps = HS, this.queue = [], this.pageLines = 0, this.pageBytes = 0, this.stopped = !1, this.dropped = !1, this.lastSentMs = Number.NEGATIVE_INFINITY, this.lastDumpMs = void 0, this.sentDumps = new Map, this.lastDumpMs = HS.now()
      }
      start() {
        setInterval((() => {
          this.mf()
        }), bS), window.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.flush()
        }), !0)
      }
      add(SS) {
        this.stopped || (this.pageLines + this.queue.length < 500 ? this.queue.push(function(SS) {
          const HS = SS.replace(/\n/g, " | ");
          if (HS.length <= xS) return HS;
          let gS = xS - 3;
          const tS = HS.charCodeAt(gS - 1);
          return tS >= 55296 && tS <= 56319 && gS--, `${HS.slice(0,gS)}...`
        }(SS)) : this.dropped = !0)
      }
      mf() {
        this.deps.now() - this.lastDumpMs >= uS && (this.lastDumpMs = this.deps.now(), this.queueDumps()), this.flush()
      }
      flush() {
        if (this.stopped || 0 === this.queue.length || this.deps.now() - this.lastSentMs < bS - 1e3) return;
        const SS = this.readDay(),
          HS = [];
        let gS = 0,
          tS = null;
        for (const bS of this.queue) {
          const xS = fS(bS) + (HS.length > 0 ? 1 : 0);
          if (gS + xS > XS) break;
          const uS = qS + gS + xS;
          if (this.pageBytes + uS > NS) {
            tS = "page";
            break
          }
          if (!this.dayFits(SS, HS.length + 1, uS)) {
            tS = "day";
            break
          }
          HS.push(bS), gS += xS
        }
        null === tS && this.dropped && HS.length === this.queue.length && (tS = "page"), this.queue.splice(0, HS.length), HS.length > 0 && !this.sendCharged(SS, HS.join("\n"), HS.length, "lines") || null !== tS && this.stopAt(tS, SS)
      }
      queueDumps() {
        for (const [SS, HS] of this.deps.dumps()) {
          const gS = HS.split("\n").slice(0, 20),
            tS = gS.join("\n");
          if (this.sentDumps.get(SS) !== tS) {
            this.sentDumps.set(SS, tS);
            for (const HS of gS) this.add(`[dump:${SS}] ${HS}`)
          }
        }
      }
      stopAt(SS, HS) {
        this.stopped = !0, this.queue.length = 0;
        const gS = "page" === SS ? "diag_cap: the page's cap (500 lines, 256 KB), so this page sends no more" : `diag_cap: the claim's daily cap (${this.claim.perClientLines} lines, ${this.dayBytes()/1e3} KB), so it sends no more today`;
        if ("day" === SS) {
          if (HS.capSent) return;
          HS.capSent = !0
        } else if (!this.dayFits(HS, 1, kS(gS))) return;
        this.sendCharged(HS, gS, 1, "cap")
      }
      dayBytes() {
        return 400 * this.claim.perClientLines
      }
      dayFits(SS, HS, gS) {
        return SS.lines + HS <= this.claim.perClientLines && SS.bytes + gS <= this.dayBytes()
      }
      readDays() {
        var SS;
        return null !== (SS = this.deps.storage.getItem(tS)) && void 0 !== SS ? SS : {}
      }
      readDay() {
        const SS = new Date(this.deps.now()).toISOString().slice(0, 10),
          HS = this.readDays()[this.claim.claimId];
        return (null === HS || void 0 === HS ? void 0 : HS.day) === SS ? HS : {
          day: SS,
          lines: 0,
          bytes: 0,
          capSent: !1
        }
      }
      writeDay(SS) {
        const HS = Object.fromEntries(Object.entries(this.readDays()).filter((HS => {
          let [, gS] = HS;
          return gS.day === SS.day
        })));
        return HS[this.claim.claimId] = SS, this.deps.storage.setItem(tS, HS)
      }
      sendCharged(SS, HS, gS, tS) {
        const bS = kS(HS);
        return SS.lines += gS, SS.bytes += bS, this.writeDay(SS) ? (this.pageLines += gS, this.pageBytes += bS, this.lastSentMs = this.deps.now(), this.deps.send(HS, {
          diag_kind: tS
        }), !0) : (console.warn("The diag sink can't keep its daily count, so it sends nothing"), this.stopped = !0, this.queue.length = 0, !1)
      }
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);