export const id = 30;
export const ids = [30];
export const modules = {
  36650: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      DUMP_GAP_MS: () => Yp,
      DiagSink: () => Wp,
      ITEM_GAP_MS: () => op,
      ITEM_METADATA_BYTES: () => Lp,
      MAX_LINE_CHARS: () => Sp,
      MAX_MESSAGE_BYTES: () => Ip
    });
    const Op = "bloxdDiagSinkDays",
      op = 4e4,
      Ip = 2048,
      Sp = 400,
      xp = 262144,
      Lp = 1500,
      Yp = 6e5,
      Dp = new TextEncoder;

    function Ap(pp) {
      return Dp.encode(pp).length
    }

    function Pp(pp) {
      return Lp + Ap(pp)
    }
    class Wp {
      constructor(pp, ip) {
        this.claim = pp, this.deps = ip, this.queue = [], this.pageLines = 0, this.pageBytes = 0, this.stopped = !1, this.dropped = !1, this.lastSentMs = Number.NEGATIVE_INFINITY, this.lastDumpMs = void 0, this.sentDumps = new Map, this.lastDumpMs = ip.now()
      }
      start() {
        setInterval((() => {
          this.LP()
        }), op), window.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && (this.deps.releaseHeld(), this.flush())
        }), !0)
      }
      add(pp) {
        this.stopped || (this.pageLines + this.queue.length < 500 ? this.queue.push(function(pp) {
          const ip = pp.replace(/\n/g, " | ");
          if (ip.length <= Sp) return ip;
          let cp = Sp - 3;
          const Op = ip.charCodeAt(cp - 1);
          return Op >= 55296 && Op <= 56319 && cp--, `${ip.slice(0,cp)}...`
        }(pp)) : this.dropped = !0)
      }
      LP() {
        this.deps.now() - this.lastDumpMs >= Yp && (this.lastDumpMs = this.deps.now(), this.queueDumps()), this.flush()
      }
      flush() {
        if (this.stopped || 0 === this.queue.length || this.deps.now() - this.lastSentMs < op - 1e3) return;
        const pp = this.readDay(),
          ip = [];
        let cp = 0,
          Op = null;
        for (const op of this.queue) {
          const Sp = Ap(op) + (ip.length > 0 ? 1 : 0);
          if (cp + Sp > Ip) break;
          const Yp = Lp + cp + Sp;
          if (this.pageBytes + Yp > xp) {
            Op = "page";
            break
          }
          if (!this.dayFits(pp, ip.length + 1, Yp)) {
            Op = "day";
            break
          }
          ip.push(op), cp += Sp
        }
        null === Op && this.dropped && ip.length === this.queue.length && (Op = "page"), this.queue.splice(0, ip.length), ip.length > 0 && !this.sendCharged(pp, ip.join("\n"), ip.length, "lines") || null !== Op && this.stopAt(Op, pp)
      }
      queueDumps() {
        for (const [pp, ip] of this.deps.dumps()) {
          const cp = ip.split("\n").slice(0, 20),
            Op = cp.join("\n");
          if (this.sentDumps.get(pp) !== Op) {
            this.sentDumps.set(pp, Op);
            for (const ip of cp) this.add(`[dump:${pp}] ${ip}`)
          }
        }
      }
      stopAt(pp, ip) {
        this.stopped = !0, this.queue.length = 0;
        const cp = "page" === pp ? "diag_cap: the page's cap (500 lines, 256 KB), so this page sends no more" : `diag_cap: the claim's daily cap (${this.claim.perClientLines} lines, ${this.dayBytes()/1e3} KB), so it sends no more today`;
        if ("day" === pp) {
          if (ip.capSent) return;
          ip.capSent = !0
        } else if (!this.dayFits(ip, 1, Pp(cp))) return;
        this.sendCharged(ip, cp, 1, "cap")
      }
      dayBytes() {
        return 400 * this.claim.perClientLines
      }
      dayFits(pp, ip, cp) {
        return pp.lines + ip <= this.claim.perClientLines && pp.bytes + cp <= this.dayBytes()
      }
      readDays() {
        var pp;
        return null !== (pp = this.deps.storage.getItem(Op)) && void 0 !== pp ? pp : {}
      }
      readDay() {
        const pp = new Date(this.deps.now()).toISOString().slice(0, 10),
          ip = this.readDays()[this.claim.claimId];
        return (null === ip || void 0 === ip ? void 0 : ip.day) === pp ? ip : {
          day: pp,
          lines: 0,
          bytes: 0,
          capSent: !1
        }
      }
      writeDay(pp) {
        const ip = Object.fromEntries(Object.entries(this.readDays()).filter((ip => {
          let [, cp] = ip;
          return cp.day === pp.day
        })));
        return ip[this.claim.claimId] = pp, this.deps.storage.setItem(Op, ip)
      }
      sendCharged(pp, ip, cp, Op) {
        const op = Pp(ip);
        return pp.lines += cp, pp.bytes += op, this.writeDay(pp) ? (this.pageLines += cp, this.pageBytes += op, this.lastSentMs = this.deps.now(), this.deps.send(ip, {
          diag_kind: Op
        }), !0) : (console.warn("The diag sink can't keep its daily count, so it sends nothing"), this.stopped = !0, this.queue.length = 0, !1)
      }
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);