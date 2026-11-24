(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var pp = __webpack_require__.u,
        ip = __webpack_require__.e,
        cp = {},
        Op = {};
      __webpack_require__.u = function(ip) {
        return pp(ip) + (cp.hasOwnProperty(ip) ? "?" + cp[ip] : "")
      }, __webpack_require__.e = function(op) {
        return ip(op).catch((function(ip) {
          var Ip = Op.hasOwnProperty(op) ? Op[op] : 4;
          if (Ip < 1) {
            var Sp = pp(op);
            if (ip.message = "Loading chunk " + op + " failed after 4 retries.\n(" + Sp + ")", ip.request = Sp, cp[op] = "cache-bust=" + Date.now(), setTimeout((function() {
                delete Op[op]
              }), 0), "CSS_CHUNK_LOAD_FAILED" === ip.code) {
              var xp = __webpack_require__.miniCssF(op);
              ip.message = ip.message.replace("Loading chunk", "Loading CSS chunk").replace(Sp, xp), ip.request = xp
            }
            throw ip
          }
          return new Promise((function(pp) {
            var ip = 4 - Ip + 1;
            setTimeout((function() {
              var ip = "cache-bust=" + Date.now();
              cp[op] = ip, Op[op] = Ip - 1, pp(__webpack_require__.e(op))
            }), function(pp) {
              return 500 * Math.pow(2, pp)
            }(ip))
          }))
        }))
      }
    }
  })();

  function pp(pp) {
    return pp instanceof Error ? pp.message : String(pp)
  }
  const ip = ArrayBuffer,
    cp = Uint8Array,
    Op = Uint16Array,
    op = Int16Array,
    Ip = Int32Array,
    Sp = (pp, ip, Op) => {
      if (cp.prototype.slice) return cp.prototype.slice.call(pp, ip, Op);
      (null == ip || ip < 0) && (ip = 0), (null == Op || Op > pp.length) && (Op = pp.length);
      const op = new cp(Op - ip);
      return op.set(pp.subarray(ip, Op)), op
    },
    xp = (pp, ip, Op, op) => {
      if (cp.prototype.fill) return cp.prototype.fill.call(pp, ip, Op, op);
      for ((null == Op || Op < 0) && (Op = 0), (null == op || op > pp.length) && (op = pp.length); Op < op; ++Op) pp[Op] = ip;
      return pp
    },
    Lp = ["invalid zstd data", "window size too large (>2046MB)", "invalid block type", "FSE accuracy too high", "match distance too far back", "unexpected EOF"],
    Yp = (pp, ip, cp) => {
      const Op = new Error(ip || Lp[pp]);
      if (Op.code = pp, Error.captureStackTrace && Error.captureStackTrace(Op, Yp), !cp) throw Op;
      return Op
    },
    Dp = (pp, ip, cp) => {
      let Op = 0,
        op = 0;
      for (; Op < cp; ++Op) op |= pp[ip++] << (Op << 3);
      return op
    },
    Ap = (pp, ip) => {
      const Op = pp[0] | pp[1] << 8 | pp[2] << 16;
      if (3126568 == Op && 253 == pp[3]) {
        const Op = pp[4],
          op = Op >> 5 & 1,
          Sp = Op >> 2 & 1,
          xp = 3 & Op,
          Lp = Op >> 6;
        8 & Op && Yp(0);
        let Ap = 6 - op;
        const Pp = 3 == xp ? 4 : xp,
          Wp = Dp(pp, Ap, Pp);
        Ap += Pp;
        const yp = Lp ? 1 << Lp : op,
          Up = Dp(pp, Ap, yp) + (1 == Lp && 256);
        let wp = Up;
        if (!op) {
          const ip = 1 << 10 + (pp[5] >> 3);
          wp = ip + (ip >> 3) * (7 & pp[5])
        }
        wp > 2145386496 && Yp(1);
        const vp = new cp((1 == ip ? Up || wp : ip ? 0 : wp) + 12);
        return vp[0] = 1, vp[4] = 4, vp[8] = 8, {
          b: Ap + yp,
          y: 0,
          l: 0,
          d: Wp,
          w: ip && 1 != ip ? ip : vp.subarray(12),
          e: wp,
          o: new Ip(vp.buffer, 0, 3),
          u: Up,
          c: Sp,
          m: Math.min(131072, wp)
        }
      }
      if (25481893 == (Op >> 4 | pp[3] << 20)) return 8 + (((op = pp)[Sp = 4] | op[Sp + 1] << 8 | op[Sp + 2] << 16 | op[Sp + 3] << 24) >>> 0);
      var op, Sp;
      Yp(0)
    },
    Pp = pp => {
      let ip = 0;
      for (; 1 << ip <= pp; ++ip);
      return ip - 1
    },
    Wp = (pp, Ip, Sp) => {
      let xp = 4 + (Ip << 3);
      const Lp = 5 + (15 & pp[Ip]);
      Lp > Sp && Yp(3);
      const Dp = 1 << Lp;
      let Ap = Dp,
        Wp = -1,
        yp = -1,
        Up = -1,
        wp = Dp;
      const vp = new ip(512 + (Dp << 2)),
        tp = new op(vp, 0, 256),
        Hp = new Op(vp, 0, 256),
        dp = new Op(vp, 512, Dp),
        ep = 512 + (Dp << 1),
        jp = new cp(vp, ep, Dp),
        kp = new cp(vp, ep + Dp);
      for (; Wp < 255 && Ap > 0;) {
        const ip = Pp(Ap + 1),
          cp = xp >> 3,
          Op = (1 << ip + 1) - 1;
        let op = (pp[cp] | pp[cp + 1] << 8 | pp[cp + 2] << 16) >> (7 & xp) & Op;
        const Ip = (1 << ip) - 1,
          Sp = Op - Ap - 1,
          Lp = op & Ip;
        if (Lp < Sp ? (xp += ip, op = Lp) : (xp += ip + 1, op > Ip && (op -= Sp)), tp[++Wp] = --op, -1 == op ? (Ap += op, jp[--wp] = Wp) : Ap -= op, !op)
          do {
            const ip = xp >> 3;
            yp = (pp[ip] | pp[ip + 1] << 8) >> (7 & xp) & 3, xp += 2, Wp += yp
          } while (3 == yp)
      }(Wp > 255 || Ap) && Yp(0);
      let mp = 0;
      const Rp = (Dp >> 1) + (Dp >> 3) + 3,
        qp = Dp - 1;
      for (let ip = 0; ip <= Wp; ++ip) {
        const pp = tp[ip];
        if (pp < 1) Hp[ip] = -pp;
        else
          for (Up = 0; Up < pp; ++Up) {
            jp[mp] = ip;
            do {
              mp = mp + Rp & qp
            } while (mp >= wp)
          }
      }
      for (mp && Yp(0), Up = 0; Up < Dp; ++Up) {
        const pp = Hp[jp[Up]]++,
          ip = kp[Up] = Lp - Pp(pp);
        dp[Up] = (pp << ip) - Dp
      }
      return [xp + 7 >> 3, {
        b: Lp,
        s: jp,
        n: kp,
        t: dp
      }]
    },
    yp = Wp(new cp([81, 16, 99, 140, 49, 198, 24, 99, 12, 33, 196, 24, 99, 102, 102, 134, 70, 146, 4]), 0, 6)[1],
    Up = Wp(new cp([33, 20, 196, 24, 99, 140, 33, 132, 16, 66, 8, 33, 132, 16, 66, 8, 33, 68, 68, 68, 68, 68, 68, 68, 68, 36, 9]), 0, 6)[1],
    wp = Wp(new cp([32, 132, 16, 66, 102, 70, 68, 68, 68, 68, 36, 73, 2]), 0, 5)[1],
    vp = (pp, ip) => {
      const cp = pp.length,
        Op = new Ip(cp);
      for (let op = 0; op < cp; ++op) Op[op] = ip, ip += 1 << pp[op];
      return Op
    },
    tp = new cp(new Ip([0, 0, 0, 0, 16843009, 50528770, 134678020, 202050057, 269422093]).buffer, 0, 36),
    Hp = vp(tp, 0),
    dp = new cp(new Ip([0, 0, 0, 0, 0, 0, 0, 0, 16843009, 50528770, 117769220, 185207048, 252579084, 16]).buffer, 0, 53),
    ep = vp(dp, 3),
    jp = (pp, ip, cp) => {
      const Op = pp.length,
        op = ip.length,
        Ip = pp[Op - 1],
        Sp = (1 << cp.b) - 1,
        xp = -cp.b;
      Ip || Yp(0);
      let Lp = 0,
        Dp = cp.b,
        Ap = (Op << 3) - 8 + Pp(Ip) - Dp,
        Wp = -1;
      for (; Ap > xp && Wp < op;) {
        const Op = Ap >> 3;
        Lp = (Lp << Dp | (pp[Op] | pp[Op + 1] << 8 | pp[Op + 2] << 16) >> (7 & Ap)) & Sp, ip[++Wp] = cp.s[Lp], Ap -= Dp = cp.n[Lp]
      }
      Ap == xp && Wp + 1 == op || Yp(0)
    },
    kp = (pp, ip, cp) => {
      let Op = 6;
      const op = ip.length + 3 >> 2,
        Ip = op << 1,
        Sp = op + Ip;
      jp(pp.subarray(Op, Op += pp[0] | pp[1] << 8), ip.subarray(0, op), cp), jp(pp.subarray(Op, Op += pp[2] | pp[3] << 8), ip.subarray(op, Ip), cp), jp(pp.subarray(Op, Op += pp[4] | pp[5] << 8), ip.subarray(Ip, Sp), cp), jp(pp.subarray(Op), ip.subarray(Sp), cp)
    },
    mp = (pp, ip, op) => {
      let Ip = ip.b;
      const Lp = pp[Ip],
        Dp = Lp >> 1 & 3;
      ip.l = 1 & Lp;
      const Ap = Lp >> 3 | pp[Ip + 1] << 5 | pp[Ip + 2] << 13,
        vp = (Ip += 3) + Ap;
      if (1 == Dp) {
        if (Ip >= pp.length) return;
        return ip.b = Ip + 1, op ? (xp(op, pp[Ip], ip.y, ip.y += Ap), op) : xp(new cp(Ap), pp[Ip])
      }
      if (!(vp > pp.length)) {
        if (0 == Dp) return ip.b = vp, op ? (op.set(pp.subarray(Ip, vp), ip.y), ip.y += Ap, op) : Sp(pp, Ip, vp);
        if (2 == Dp) {
          const Lp = pp[Ip],
            Dp = 3 & Lp,
            Ap = Lp >> 2 & 3;
          let mp = Lp >> 4,
            Rp = 0,
            qp = 0;
          Dp < 2 ? 1 & Ap ? mp |= pp[++Ip] << 4 | (2 & Ap && pp[++Ip] << 12) : mp = Lp >> 3 : (qp = Ap, Ap < 2 ? (mp |= (63 & pp[++Ip]) << 4, Rp = pp[Ip] >> 6 | pp[++Ip] << 2) : 2 == Ap ? (mp |= pp[++Ip] << 4 | (3 & pp[++Ip]) << 12, Rp = pp[Ip] >> 2 | pp[++Ip] << 6) : (mp |= pp[++Ip] << 4 | (63 & pp[++Ip]) << 12, Rp = pp[Ip] >> 6 | pp[++Ip] << 2 | pp[++Ip] << 10)), ++Ip;
          let Mp = op ? op.subarray(ip.y, ip.y + ip.m) : new cp(ip.m),
            Cp = Mp.length - mp;
          if (Cp < 0 && Yp(0), 0 == Dp) Mp.set(pp.subarray(Ip, Ip += mp), Cp);
          else if (1 == Dp) xp(Mp, pp[Ip++], Cp);
          else {
            let op = ip.h;
            if (2 == Dp) {
              const Sp = ((pp, ip) => {
                let op = 0,
                  Ip = -1;
                const Sp = new cp(292),
                  Lp = pp[ip],
                  Dp = Sp.subarray(0, 256),
                  Ap = Sp.subarray(256, 268),
                  yp = new Op(Sp.buffer, 268);
                if (Lp < 128) {
                  const [cp, Op] = Wp(pp, ip + 1, 6), op = cp << 3, Sp = pp[ip += Lp];
                  Sp || Yp(0);
                  let xp = 0,
                    Ap = 0,
                    yp = Op.b,
                    Up = yp,
                    wp = (++ip << 3) - 8 + Pp(Sp);
                  for (; Ip > 254 && Yp(0), wp -= yp, !(wp < op);) {
                    let ip = wp >> 3;
                    if (xp += (pp[ip] | pp[ip + 1] << 8) >> (7 & wp) & (1 << yp) - 1, Dp[++Ip] = Op.s[xp], wp -= Up, wp < op) break;
                    ip = wp >> 3, Ap += (pp[ip] | pp[ip + 1] << 8) >> (7 & wp) & (1 << Up) - 1, Dp[++Ip] = Op.s[Ap], yp = Op.n[xp], xp = Op.t[xp], Up = Op.n[Ap], Ap = Op.t[Ap]
                  }++Ip > 255 && Yp(0)
                } else {
                  for (Ip = Lp - 127; op < Ip; op += 2) {
                    const cp = pp[++ip];
                    Dp[op] = cp >> 4, Dp[op + 1] = 15 & cp
                  }++ip
                }
                let Up = 0;
                for (op = 0; op < Ip; ++op) {
                  const pp = Dp[op];
                  pp > 11 && Yp(0), Up += pp && 1 << pp - 1
                }
                const wp = Pp(Up) + 1,
                  vp = 1 << wp,
                  tp = vp - Up;
                for (tp & tp - 1 && Yp(0), Dp[Ip++] = Pp(tp) + 1, op = 0; op < Ip; ++op) {
                  const pp = Dp[op];
                  ++Ap[Dp[op] = pp && wp + 1 - pp]
                }
                const Hp = new cp(vp << 1),
                  dp = Hp.subarray(0, vp),
                  ep = Hp.subarray(vp);
                for (yp[wp] = 0, op = wp; op > 0; --op) {
                  const pp = yp[op];
                  xp(ep, op, pp, yp[op - 1] = pp + Ap[op] * (1 << wp - op))
                }
                for (yp[0] != vp && Yp(0), op = 0; op < Ip; ++op) {
                  const pp = Dp[op];
                  if (pp) {
                    const ip = yp[pp];
                    xp(dp, op, ip, yp[pp] = ip + (1 << wp - pp))
                  }
                }
                return [ip, {
                  n: ep,
                  b: wp,
                  s: dp
                }]
              })(pp, Ip);
              Rp += Ip - (Ip = Sp[0]), ip.h = op = Sp[1]
            } else op || Yp(0);
            (qp ? kp : jp)(pp.subarray(Ip, Ip += Rp), Mp.subarray(Cp), op)
          }
          let Ep = pp[Ip++];
          if (Ep) {
            255 == Ep ? Ep = 32512 + (pp[Ip++] | pp[Ip++] << 8) : Ep > 127 && (Ep = Ep - 128 << 8 | pp[Ip++]);
            const xp = pp[Ip++];
            3 & xp && Yp(0);
            const Lp = [Up, wp, yp];
            for (let op = 2; op > -1; --op) {
              const Sp = xp >> 2 + (op << 1) & 3;
              if (1 == Sp) {
                const ip = new cp([0, 0, pp[Ip++]]);
                Lp[op] = {
                  s: ip.subarray(2, 3),
                  n: ip.subarray(0, 1),
                  t: new Op(ip.buffer, 0, 1),
                  b: 0
                }
              } else 2 == Sp ? [Ip, Lp[op]] = Wp(pp, Ip, 9 - (1 & op)) : 3 == Sp && (ip.t || Yp(0), Lp[op] = ip.t[op])
            }
            const [Dp, Ap, jp] = ip.t = Lp, kp = pp[vp - 1];
            kp || Yp(0);
            let mp = (vp << 3) - 8 + Pp(kp) - jp.b,
              Rp = mp >> 3,
              qp = 0,
              Xp = (pp[Rp] | pp[Rp + 1] << 8) >> (7 & mp) & (1 << jp.b) - 1;
            Rp = (mp -= Ap.b) >> 3;
            let lp = (pp[Rp] | pp[Rp + 1] << 8) >> (7 & mp) & (1 << Ap.b) - 1;
            Rp = (mp -= Dp.b) >> 3;
            let Qp = (pp[Rp] | pp[Rp + 1] << 8) >> (7 & mp) & (1 << Dp.b) - 1;
            for (++Ep; --Ep;) {
              const cp = jp.s[Xp],
                Op = jp.n[Xp],
                op = Dp.s[Qp],
                Ip = Dp.n[Qp],
                Sp = Ap.s[lp],
                xp = Ap.n[lp];
              Rp = (mp -= Sp) >> 3;
              const Lp = 1 << Sp;
              let Pp = Lp + ((pp[Rp] | pp[Rp + 1] << 8 | pp[Rp + 2] << 16 | pp[Rp + 3] << 24) >>> (7 & mp) & Lp - 1);
              Rp = (mp -= dp[op]) >> 3;
              let Wp = ep[op] + ((pp[Rp] | pp[Rp + 1] << 8 | pp[Rp + 2] << 16) >> (7 & mp) & (1 << dp[op]) - 1);
              Rp = (mp -= tp[cp]) >> 3;
              const yp = Hp[cp] + ((pp[Rp] | pp[Rp + 1] << 8 | pp[Rp + 2] << 16) >> (7 & mp) & (1 << tp[cp]) - 1);
              if ((mp < 0 || Cp + yp > Mp.length || qp + yp + Wp > Mp.length) && Yp(0), Rp = (mp -= Op) >> 3, Xp = jp.t[Xp] + ((pp[Rp] | pp[Rp + 1] << 8) >> (7 & mp) & (1 << Op) - 1), Rp = (mp -= Ip) >> 3, Qp = Dp.t[Qp] + ((pp[Rp] | pp[Rp + 1] << 8) >> (7 & mp) & (1 << Ip) - 1), Rp = (mp -= xp) >> 3, lp = Ap.t[lp] + ((pp[Rp] | pp[Rp + 1] << 8) >> (7 & mp) & (1 << xp) - 1), Pp > 3) ip.o[2] = ip.o[1], ip.o[1] = ip.o[0], ip.o[0] = Pp -= 3;
              else {
                const pp = Pp - (0 != yp);
                pp ? (Pp = 3 == pp ? ip.o[0] - 1 : ip.o[pp], pp > 1 && (ip.o[2] = ip.o[1]), ip.o[1] = ip.o[0], ip.o[0] = Pp) : Pp = ip.o[0]
              }
              for (let pp = 0; pp < yp; ++pp) Mp[qp + pp] = Mp[Cp + pp];
              qp += yp, Cp += yp;
              let Up = qp - Pp;
              if (Up < 0) {
                let pp = -Up;
                const cp = ip.e + Up;
                cp < 0 && Yp(4), pp > Wp && (pp = Wp);
                for (let Op = 0; Op < pp; ++Op) Mp[qp + Op] = ip.w[cp + Op];
                qp += pp, Wp -= pp, Up = 0
              }
              for (let pp = 0; pp < Wp; ++pp) Mp[qp + pp] = Mp[Up + pp];
              qp += Wp
            }
            if (qp != Cp)
              for (; Cp < Mp.length;) Mp[qp++] = Mp[Cp++];
            else qp = Mp.length;
            op ? ip.y += qp : Mp = Sp(Mp, 0, qp)
          } else if (op) {
            if (ip.y += mp, Cp)
              for (let pp = 0; pp < mp; ++pp) Mp[pp] = Mp[Cp + pp]
          } else Cp && (Mp = Sp(Mp, Cp));
          return ip.b = vp, Mp
        }
        Yp(2)
      }
    };
  class Rp {
    output = null;
    decoded = 0;
    done = !1;
    st = null;
    parts = [];
    sx = 0;
    needed = 18;
    size;
    constructor(pp) {
      this.size = pp
    }
    push(pp) {
      if (this.done) return;
      if (this.parts.push(pp), this.sx += pp.length, this.sx < this.needed) return;
      const ip = ((pp, ip) => {
        if (1 == pp.length) return pp[0];
        const Op = new cp(ip);
        for (let cp = 0, op = 0; cp < pp.length; ++cp) {
          const ip = pp[cp];
          Op.set(ip, op), op += ip.length
        }
        return Op
      })(this.parts, this.sx);
      let Op = this.st;
      if (!Op) {
        const pp = Ap(ip, new cp(0));
        "number" != typeof pp && pp.u === this.size || Yp(0, `not a zstd frame of ${this.size} bytes`), Op = this.st = Ap(ip, 1), Op.e = 0, this.output = Op.w
      }
      for (;;) {
        const pp = ip.length - Op.b;
        if (pp < 3) {
          this.needed = 3;
          break
        }
        const cp = ip[Op.b],
          op = cp >> 1 & 3;
        3 == op && Yp(2);
        const Ip = cp >> 3 | ip[Op.b + 1] << 5 | ip[Op.b + 2] << 13;
        Ip > Op.m && Yp(0), 0 == op && Op.y + Ip > Op.u && Yp(0);
        const Sp = 1 == op ? 4 : 3 + Ip;
        if (pp < Sp) {
          this.needed = Sp;
          break
        }
        if (mp(ip, Op, Op.w) || Yp(5), Op.e = Op.y, (Op.y > Op.u || Op.l && Op.y != Op.u) && Yp(0), Op.l) {
          this.done = !0;
          break
        }
      }
      this.decoded = Op.y;
      const op = ip.subarray(Op.b);
      this.parts = op.length ? [op] : [], this.sx = op.length, Op.b = 0
    }
  }
  class qp {
    post;
    href = "";
    Wy = null;
    given = 0;
    stopped = !1;
    constructor(pp) {
      this.post = pp
    }
    take(ip) {
      if (!this.stopped) try {
        this.answer(ip)
      } catch (cp) {
        this.stop(cp instanceof RangeError ? `out of memory decoding ${this.href}: ${pp(cp)}` : `${this.href} did not decode: ${pp(cp)}`)
      }
    }
    answer(pp) {
      if (null === this.Wy) {
        const [ip, cp] = pp;
        return this.href = ip, void(this.Wy = new Rp(cp))
      }
      if (null === pp) return void this.stop(`${this.href} ended before its module did`);
      const ip = this.Wy;
      ip.push(pp);
      const {
        output: cp,
        decoded: Op
      } = ip;
      if (null !== cp && Op > this.given) {
        const pp = cp.slice(this.given, Op).buffer;
        this.given = Op, this.post(pp, [pp])
      }
      ip.done && this.stop(!0)
    }
    stop(pp) {
      this.stopped = !0, this.post(pp)
    }
  }
  const Mp = globalThis.WorkerGlobalScope;
  if (void 0 !== Mp && globalThis instanceof Mp) {
    const pp = globalThis,
      ip = new qp((function(ip) {
        let cp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        pp.postMessage(ip, cp)
      }));
    pp.addEventListener("message", (pp => {
      let {
        data: cp
      } = pp;
      ip.take(cp)
    }))
  }
})();