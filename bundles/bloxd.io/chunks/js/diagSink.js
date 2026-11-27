export const id = 37;
export const ids = [37];
export const modules = {
  37588: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      DUMP_GAP_MS: () => fR,
      DiagSink: () => rR,
      ITEM_GAP_MS: () => tR,
      ITEM_METADATA_BYTES: () => iR,
      MAX_LINE_CHARS: () => ZR,
      MAX_MESSAGE_BYTES: () => uR
    });
    const yR = "bloxdDiagSinkDays",
      tR = 4e4,
      uR = 2048,
      ZR = 400,
      qR = 262144,
      iR = 1500,
      fR = 6e5,
      VR = new TextEncoder;

    function KR(RR) {
      return VR.encode(RR).length
    }

    function wR(RR) {
      return iR + KR(RR)
    }
    class rR {
      constructor(RR, JR) {
        this.claim = RR, this.deps = JR, this.queue = [], this.pageLines = 0, this.pageBytes = 0, this.stopped = !1, this.dropped = !1, this.lastSentMs = Number.NEGATIVE_INFINITY, this.lastDumpMs = void 0, this.sentDumps = new Map, this.lastDumpMs = JR.now()
      }
      start() {
        setInterval((() => {
          this.gK()
        }), tR), window.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && (this.deps.releaseHeld(), this.flush())
        }), !0)
      }
      add(RR) {
        this.stopped || (this.pageLines + this.queue.length < 500 ? this.queue.push(function(RR) {
          const JR = RR.replace(/\n/g, " | ");
          if (JR.length <= ZR) return JR;
          let GR = ZR - 3;
          const yR = JR.charCodeAt(GR - 1);
          return yR >= 55296 && yR <= 56319 && GR--, `${JR.slice(0,GR)}...`
        }(RR)) : this.dropped = !0)
      }
      gK() {
        this.deps.now() - this.lastDumpMs >= fR && (this.lastDumpMs = this.deps.now(), this.queueDumps()), this.flush()
      }
      flush() {
        if (this.stopped || 0 === this.queue.length || this.deps.now() - this.lastSentMs < tR - 1e3) return;
        const RR = this.readDay(),
          JR = [];
        let GR = 0,
          yR = null;
        for (const tR of this.queue) {
          const ZR = KR(tR) + (JR.length > 0 ? 1 : 0);
          if (GR + ZR > uR) break;
          const fR = iR + GR + ZR;
          if (this.pageBytes + fR > qR) {
            yR = "page";
            break
          }
          if (!this.dayFits(RR, JR.length + 1, fR)) {
            yR = "day";
            break
          }
          JR.push(tR), GR += ZR
        }
        null === yR && this.dropped && JR.length === this.queue.length && (yR = "page"), this.queue.splice(0, JR.length), JR.length > 0 && !this.sendCharged(RR, JR.join("\n"), JR.length, "lines") || null !== yR && this.stopAt(yR, RR)
      }
      queueDumps() {
        for (const [RR, JR] of this.deps.dumps()) {
          const GR = JR.split("\n").slice(0, 20),
            yR = GR.join("\n");
          if (this.sentDumps.get(RR) !== yR) {
            this.sentDumps.set(RR, yR);
            for (const JR of GR) this.add(`[dump:${RR}] ${JR}`)
          }
        }
      }
      stopAt(RR, JR) {
        this.stopped = !0, this.queue.length = 0;
        const GR = "page" === RR ? "diag_cap: the page's cap (500 lines, 256 KB), so this page sends no more" : `diag_cap: the claim's daily cap (${this.claim.perClientLines} lines, ${this.dayBytes()/1e3} KB), so it sends no more today`;
        if ("day" === RR) {
          if (JR.capSent) return;
          JR.capSent = !0
        } else if (!this.dayFits(JR, 1, wR(GR))) return;
        this.sendCharged(JR, GR, 1, "cap")
      }
      dayBytes() {
        return 400 * this.claim.perClientLines
      }
      dayFits(RR, JR, GR) {
        return RR.lines + JR <= this.claim.perClientLines && RR.bytes + GR <= this.dayBytes()
      }
      readDays() {
        var RR;
        return null !== (RR = this.deps.storage.getItem(yR)) && void 0 !== RR ? RR : {}
      }
      readDay() {
        const RR = new Date(this.deps.now()).toISOString().slice(0, 10),
          JR = this.readDays()[this.claim.claimId];
        return (null === JR || void 0 === JR ? void 0 : JR.day) === RR ? JR : {
          day: RR,
          lines: 0,
          bytes: 0,
          capSent: !1
        }
      }
      writeDay(RR) {
        const JR = Object.fromEntries(Object.entries(this.readDays()).filter((JR => {
          let [, GR] = JR;
          return GR.day === RR.day
        })));
        return JR[this.claim.claimId] = RR, this.deps.storage.setItem(yR, JR)
      }
      sendCharged(RR, JR, GR, yR) {
        const tR = wR(JR);
        return RR.lines += GR, RR.bytes += tR, this.writeDay(RR) ? (this.pageLines += GR, this.pageBytes += tR, this.lastSentMs = this.deps.now(), this.deps.send(JR, {
          diag_kind: yR
        }), !0) : (console.warn("The diag sink can't keep its daily count, so it sends nothing"), this.stopped = !0, this.queue.length = 0, !1)
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);