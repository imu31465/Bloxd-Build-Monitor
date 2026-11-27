(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var rr = __webpack_require__.u,
        Sr = __webpack_require__.e,
        Qr = {},
        Zr = {};
      __webpack_require__.u = function(Sr) {
        return rr(Sr) + (Qr.hasOwnProperty(Sr) ? "?" + Qr[Sr] : "")
      }, __webpack_require__.e = function(Wr) {
        return Sr(Wr).catch((function(Sr) {
          var ar = Zr.hasOwnProperty(Wr) ? Zr[Wr] : 4;
          if (ar < 1) {
            var jr = rr(Wr);
            if (Sr.message = "Loading chunk " + Wr + " failed after 4 retries.\n(" + jr + ")", Sr.request = jr, Qr[Wr] = "cache-bust=" + Date.now(), setTimeout((function() {
                delete Zr[Wr]
              }), 0), "CSS_CHUNK_LOAD_FAILED" === Sr.code) {
              var Ir = __webpack_require__.miniCssF(Wr);
              Sr.message = Sr.message.replace("Loading chunk", "Loading CSS chunk").replace(jr, Ir), Sr.request = Ir
            }
            throw Sr
          }
          return new Promise((function(rr) {
            var Sr = 4 - ar + 1;
            setTimeout((function() {
              var Sr = "cache-bust=" + Date.now();
              Qr[Wr] = Sr, Zr[Wr] = ar - 1, rr(__webpack_require__.e(Wr))
            }), function(rr) {
              return 500 * Math.pow(2, rr)
            }(Sr))
          }))
        }))
      }
    }
  })();

  function rr(rr) {
    return rr instanceof Error ? rr.message : String(rr)
  }
  const Sr = ArrayBuffer,
    Qr = Uint8Array,
    Zr = Uint16Array,
    Wr = Int16Array,
    ar = Int32Array,
    jr = (rr, Sr, Zr) => {
      if (Qr.prototype.slice) return Qr.prototype.slice.call(rr, Sr, Zr);
      (null == Sr || Sr < 0) && (Sr = 0), (null == Zr || Zr > rr.length) && (Zr = rr.length);
      const Wr = new Qr(Zr - Sr);
      return Wr.set(rr.subarray(Sr, Zr)), Wr
    },
    Ir = (rr, Sr, Zr, Wr) => {
      if (Qr.prototype.fill) return Qr.prototype.fill.call(rr, Sr, Zr, Wr);
      for ((null == Zr || Zr < 0) && (Zr = 0), (null == Wr || Wr > rr.length) && (Wr = rr.length); Zr < Wr; ++Zr) rr[Zr] = Sr;
      return rr
    },
    fr = ["invalid zstd data", "window size too large (>2046MB)", "invalid block type", "FSE accuracy too high", "match distance too far back", "unexpected EOF"],
    Er = (rr, Sr, Qr) => {
      const Zr = new Error(Sr || fr[rr]);
      if (Zr.code = rr, Error.captureStackTrace && Error.captureStackTrace(Zr, Er), !Qr) throw Zr;
      return Zr
    },
    pr = (rr, Sr, Qr) => {
      let Zr = 0,
        Wr = 0;
      for (; Zr < Qr; ++Zr) Wr |= rr[Sr++] << (Zr << 3);
      return Wr
    },
    xr = (rr, Sr) => {
      const Zr = rr[0] | rr[1] << 8 | rr[2] << 16;
      if (3126568 == Zr && 253 == rr[3]) {
        const Zr = rr[4],
          Wr = Zr >> 5 & 1,
          jr = Zr >> 2 & 1,
          Ir = 3 & Zr,
          fr = Zr >> 6;
        8 & Zr && Er(0);
        let xr = 6 - Wr;
        const mr = 3 == Ir ? 4 : Ir,
          Nr = pr(rr, xr, mr);
        xr += mr;
        const Ur = fr ? 1 << fr : Wr,
          tr = pr(rr, xr, Ur) + (1 == fr && 256);
        let hr = tr;
        if (!Wr) {
          const Sr = 1 << 10 + (rr[5] >> 3);
          hr = Sr + (Sr >> 3) * (7 & rr[5])
        }
        hr > 2145386496 && Er(1);
        const zr = new Qr((1 == Sr ? tr || hr : Sr ? 0 : hr) + 12);
        return zr[0] = 1, zr[4] = 4, zr[8] = 8, {
          b: xr + Ur,
          y: 0,
          l: 0,
          d: Nr,
          w: Sr && 1 != Sr ? Sr : zr.subarray(12),
          e: hr,
          o: new ar(zr.buffer, 0, 3),
          u: tr,
          c: jr,
          m: Math.min(131072, hr)
        }
      }
      if (25481893 == (Zr >> 4 | rr[3] << 20)) return 8 + (((Wr = rr)[jr = 4] | Wr[jr + 1] << 8 | Wr[jr + 2] << 16 | Wr[jr + 3] << 24) >>> 0);
      var Wr, jr;
      Er(0)
    },
    mr = rr => {
      let Sr = 0;
      for (; 1 << Sr <= rr; ++Sr);
      return Sr - 1
    },
    Nr = (rr, ar, jr) => {
      let Ir = 4 + (ar << 3);
      const fr = 5 + (15 & rr[ar]);
      fr > jr && Er(3);
      const pr = 1 << fr;
      let xr = pr,
        Nr = -1,
        Ur = -1,
        tr = -1,
        hr = pr;
      const zr = new Sr(512 + (pr << 2)),
        Yr = new Wr(zr, 0, 256),
        nr = new Zr(zr, 0, 256),
        er = new Zr(zr, 512, pr),
        Kr = 512 + (pr << 1),
        yr = new Qr(zr, Kr, pr),
        Br = new Qr(zr, Kr + pr);
      for (; Nr < 255 && xr > 0;) {
        const Sr = mr(xr + 1),
          Qr = Ir >> 3,
          Zr = (1 << Sr + 1) - 1;
        let Wr = (rr[Qr] | rr[Qr + 1] << 8 | rr[Qr + 2] << 16) >> (7 & Ir) & Zr;
        const ar = (1 << Sr) - 1,
          jr = Zr - xr - 1,
          fr = Wr & ar;
        if (fr < jr ? (Ir += Sr, Wr = fr) : (Ir += Sr + 1, Wr > ar && (Wr -= jr)), Yr[++Nr] = --Wr, -1 == Wr ? (xr += Wr, yr[--hr] = Nr) : xr -= Wr, !Wr)
          do {
            const Sr = Ir >> 3;
            Ur = (rr[Sr] | rr[Sr + 1] << 8) >> (7 & Ir) & 3, Ir += 2, Nr += Ur
          } while (3 == Ur)
      }(Nr > 255 || xr) && Er(0);
      let Tr = 0;
      const vr = (pr >> 1) + (pr >> 3) + 3,
        Or = pr - 1;
      for (let Sr = 0; Sr <= Nr; ++Sr) {
        const rr = Yr[Sr];
        if (rr < 1) nr[Sr] = -rr;
        else
          for (tr = 0; tr < rr; ++tr) {
            yr[Tr] = Sr;
            do {
              Tr = Tr + vr & Or
            } while (Tr >= hr)
          }
      }
      for (Tr && Er(0), tr = 0; tr < pr; ++tr) {
        const rr = nr[yr[tr]]++,
          Sr = Br[tr] = fr - mr(rr);
        er[tr] = (rr << Sr) - pr
      }
      return [Ir + 7 >> 3, {
        b: fr,
        s: yr,
        n: Br,
        t: er
      }]
    },
    Ur = Nr(new Qr([81, 16, 99, 140, 49, 198, 24, 99, 12, 33, 196, 24, 99, 102, 102, 134, 70, 146, 4]), 0, 6)[1],
    tr = Nr(new Qr([33, 20, 196, 24, 99, 140, 33, 132, 16, 66, 8, 33, 132, 16, 66, 8, 33, 68, 68, 68, 68, 68, 68, 68, 68, 36, 9]), 0, 6)[1],
    hr = Nr(new Qr([32, 132, 16, 66, 102, 70, 68, 68, 68, 68, 36, 73, 2]), 0, 5)[1],
    zr = (rr, Sr) => {
      const Qr = rr.length,
        Zr = new ar(Qr);
      for (let Wr = 0; Wr < Qr; ++Wr) Zr[Wr] = Sr, Sr += 1 << rr[Wr];
      return Zr
    },
    Yr = new Qr(new ar([0, 0, 0, 0, 16843009, 50528770, 134678020, 202050057, 269422093]).buffer, 0, 36),
    nr = zr(Yr, 0),
    er = new Qr(new ar([0, 0, 0, 0, 0, 0, 0, 0, 16843009, 50528770, 117769220, 185207048, 252579084, 16]).buffer, 0, 53),
    Kr = zr(er, 3),
    yr = (rr, Sr, Qr) => {
      const Zr = rr.length,
        Wr = Sr.length,
        ar = rr[Zr - 1],
        jr = (1 << Qr.b) - 1,
        Ir = -Qr.b;
      ar || Er(0);
      let fr = 0,
        pr = Qr.b,
        xr = (Zr << 3) - 8 + mr(ar) - pr,
        Nr = -1;
      for (; xr > Ir && Nr < Wr;) {
        const Zr = xr >> 3;
        fr = (fr << pr | (rr[Zr] | rr[Zr + 1] << 8 | rr[Zr + 2] << 16) >> (7 & xr)) & jr, Sr[++Nr] = Qr.s[fr], xr -= pr = Qr.n[fr]
      }
      xr == Ir && Nr + 1 == Wr || Er(0)
    },
    Br = (rr, Sr, Qr) => {
      let Zr = 6;
      const Wr = Sr.length + 3 >> 2,
        ar = Wr << 1,
        jr = Wr + ar;
      yr(rr.subarray(Zr, Zr += rr[0] | rr[1] << 8), Sr.subarray(0, Wr), Qr), yr(rr.subarray(Zr, Zr += rr[2] | rr[3] << 8), Sr.subarray(Wr, ar), Qr), yr(rr.subarray(Zr, Zr += rr[4] | rr[5] << 8), Sr.subarray(ar, jr), Qr), yr(rr.subarray(Zr), Sr.subarray(jr), Qr)
    },
    Tr = (rr, Sr, Wr) => {
      let ar = Sr.b;
      const fr = rr[ar],
        pr = fr >> 1 & 3;
      Sr.l = 1 & fr;
      const xr = fr >> 3 | rr[ar + 1] << 5 | rr[ar + 2] << 13,
        zr = (ar += 3) + xr;
      if (1 == pr) {
        if (ar >= rr.length) return;
        return Sr.b = ar + 1, Wr ? (Ir(Wr, rr[ar], Sr.y, Sr.y += xr), Wr) : Ir(new Qr(xr), rr[ar])
      }
      if (!(zr > rr.length)) {
        if (0 == pr) return Sr.b = zr, Wr ? (Wr.set(rr.subarray(ar, zr), Sr.y), Sr.y += xr, Wr) : jr(rr, ar, zr);
        if (2 == pr) {
          const fr = rr[ar],
            pr = 3 & fr,
            xr = fr >> 2 & 3;
          let Tr = fr >> 4,
            vr = 0,
            Or = 0;
          pr < 2 ? 1 & xr ? Tr |= rr[++ar] << 4 | (2 & xr && rr[++ar] << 12) : Tr = fr >> 3 : (Or = xr, xr < 2 ? (Tr |= (63 & rr[++ar]) << 4, vr = rr[ar] >> 6 | rr[++ar] << 2) : 2 == xr ? (Tr |= rr[++ar] << 4 | (3 & rr[++ar]) << 12, vr = rr[ar] >> 2 | rr[++ar] << 6) : (Tr |= rr[++ar] << 4 | (63 & rr[++ar]) << 12, vr = rr[ar] >> 6 | rr[++ar] << 2 | rr[++ar] << 10)), ++ar;
          let Lr = Wr ? Wr.subarray(Sr.y, Sr.y + Sr.m) : new Qr(Sr.m),
            lr = Lr.length - Tr;
          if (lr < 0 && Er(0), 0 == pr) Lr.set(rr.subarray(ar, ar += Tr), lr);
          else if (1 == pr) Ir(Lr, rr[ar++], lr);
          else {
            let Wr = Sr.h;
            if (2 == pr) {
              const jr = ((rr, Sr) => {
                let Wr = 0,
                  ar = -1;
                const jr = new Qr(292),
                  fr = rr[Sr],
                  pr = jr.subarray(0, 256),
                  xr = jr.subarray(256, 268),
                  Ur = new Zr(jr.buffer, 268);
                if (fr < 128) {
                  const [Qr, Zr] = Nr(rr, Sr + 1, 6), Wr = Qr << 3, jr = rr[Sr += fr];
                  jr || Er(0);
                  let Ir = 0,
                    xr = 0,
                    Ur = Zr.b,
                    tr = Ur,
                    hr = (++Sr << 3) - 8 + mr(jr);
                  for (; ar > 254 && Er(0), hr -= Ur, !(hr < Wr);) {
                    let Sr = hr >> 3;
                    if (Ir += (rr[Sr] | rr[Sr + 1] << 8) >> (7 & hr) & (1 << Ur) - 1, pr[++ar] = Zr.s[Ir], hr -= tr, hr < Wr) break;
                    Sr = hr >> 3, xr += (rr[Sr] | rr[Sr + 1] << 8) >> (7 & hr) & (1 << tr) - 1, pr[++ar] = Zr.s[xr], Ur = Zr.n[Ir], Ir = Zr.t[Ir], tr = Zr.n[xr], xr = Zr.t[xr]
                  }++ar > 255 && Er(0)
                } else {
                  for (ar = fr - 127; Wr < ar; Wr += 2) {
                    const Qr = rr[++Sr];
                    pr[Wr] = Qr >> 4, pr[Wr + 1] = 15 & Qr
                  }++Sr
                }
                let tr = 0;
                for (Wr = 0; Wr < ar; ++Wr) {
                  const rr = pr[Wr];
                  rr > 11 && Er(0), tr += rr && 1 << rr - 1
                }
                const hr = mr(tr) + 1,
                  zr = 1 << hr,
                  Yr = zr - tr;
                for (Yr & Yr - 1 && Er(0), pr[ar++] = mr(Yr) + 1, Wr = 0; Wr < ar; ++Wr) {
                  const rr = pr[Wr];
                  ++xr[pr[Wr] = rr && hr + 1 - rr]
                }
                const nr = new Qr(zr << 1),
                  er = nr.subarray(0, zr),
                  Kr = nr.subarray(zr);
                for (Ur[hr] = 0, Wr = hr; Wr > 0; --Wr) {
                  const rr = Ur[Wr];
                  Ir(Kr, Wr, rr, Ur[Wr - 1] = rr + xr[Wr] * (1 << hr - Wr))
                }
                for (Ur[0] != zr && Er(0), Wr = 0; Wr < ar; ++Wr) {
                  const rr = pr[Wr];
                  if (rr) {
                    const Sr = Ur[rr];
                    Ir(er, Wr, Sr, Ur[rr] = Sr + (1 << hr - rr))
                  }
                }
                return [Sr, {
                  n: Kr,
                  b: hr,
                  s: er
                }]
              })(rr, ar);
              vr += ar - (ar = jr[0]), Sr.h = Wr = jr[1]
            } else Wr || Er(0);
            (Or ? Br : yr)(rr.subarray(ar, ar += vr), Lr.subarray(lr), Wr)
          }
          let Xr = rr[ar++];
          if (Xr) {
            255 == Xr ? Xr = 32512 + (rr[ar++] | rr[ar++] << 8) : Xr > 127 && (Xr = Xr - 128 << 8 | rr[ar++]);
            const Ir = rr[ar++];
            3 & Ir && Er(0);
            const fr = [tr, hr, Ur];
            for (let Wr = 2; Wr > -1; --Wr) {
              const jr = Ir >> 2 + (Wr << 1) & 3;
              if (1 == jr) {
                const Sr = new Qr([0, 0, rr[ar++]]);
                fr[Wr] = {
                  s: Sr.subarray(2, 3),
                  n: Sr.subarray(0, 1),
                  t: new Zr(Sr.buffer, 0, 1),
                  b: 0
                }
              } else 2 == jr ? [ar, fr[Wr]] = Nr(rr, ar, 9 - (1 & Wr)) : 3 == jr && (Sr.t || Er(0), fr[Wr] = Sr.t[Wr])
            }
            const [pr, xr, yr] = Sr.t = fr, Br = rr[zr - 1];
            Br || Er(0);
            let Tr = (zr << 3) - 8 + mr(Br) - yr.b,
              vr = Tr >> 3,
              Or = 0,
              Pr = (rr[vr] | rr[vr + 1] << 8) >> (7 & Tr) & (1 << yr.b) - 1;
            vr = (Tr -= xr.b) >> 3;
            let Hr = (rr[vr] | rr[vr + 1] << 8) >> (7 & Tr) & (1 << xr.b) - 1;
            vr = (Tr -= pr.b) >> 3;
            let qr = (rr[vr] | rr[vr + 1] << 8) >> (7 & Tr) & (1 << pr.b) - 1;
            for (++Xr; --Xr;) {
              const Qr = yr.s[Pr],
                Zr = yr.n[Pr],
                Wr = pr.s[qr],
                ar = pr.n[qr],
                jr = xr.s[Hr],
                Ir = xr.n[Hr];
              vr = (Tr -= jr) >> 3;
              const fr = 1 << jr;
              let mr = fr + ((rr[vr] | rr[vr + 1] << 8 | rr[vr + 2] << 16 | rr[vr + 3] << 24) >>> (7 & Tr) & fr - 1);
              vr = (Tr -= er[Wr]) >> 3;
              let Nr = Kr[Wr] + ((rr[vr] | rr[vr + 1] << 8 | rr[vr + 2] << 16) >> (7 & Tr) & (1 << er[Wr]) - 1);
              vr = (Tr -= Yr[Qr]) >> 3;
              const Ur = nr[Qr] + ((rr[vr] | rr[vr + 1] << 8 | rr[vr + 2] << 16) >> (7 & Tr) & (1 << Yr[Qr]) - 1);
              if ((Tr < 0 || lr + Ur > Lr.length || Or + Ur + Nr > Lr.length) && Er(0), vr = (Tr -= Zr) >> 3, Pr = yr.t[Pr] + ((rr[vr] | rr[vr + 1] << 8) >> (7 & Tr) & (1 << Zr) - 1), vr = (Tr -= ar) >> 3, qr = pr.t[qr] + ((rr[vr] | rr[vr + 1] << 8) >> (7 & Tr) & (1 << ar) - 1), vr = (Tr -= Ir) >> 3, Hr = xr.t[Hr] + ((rr[vr] | rr[vr + 1] << 8) >> (7 & Tr) & (1 << Ir) - 1), mr > 3) Sr.o[2] = Sr.o[1], Sr.o[1] = Sr.o[0], Sr.o[0] = mr -= 3;
              else {
                const rr = mr - (0 != Ur);
                rr ? (mr = 3 == rr ? Sr.o[0] - 1 : Sr.o[rr], rr > 1 && (Sr.o[2] = Sr.o[1]), Sr.o[1] = Sr.o[0], Sr.o[0] = mr) : mr = Sr.o[0]
              }
              for (let rr = 0; rr < Ur; ++rr) Lr[Or + rr] = Lr[lr + rr];
              Or += Ur, lr += Ur;
              let tr = Or - mr;
              if (tr < 0) {
                let rr = -tr;
                const Qr = Sr.e + tr;
                Qr < 0 && Er(4), rr > Nr && (rr = Nr);
                for (let Zr = 0; Zr < rr; ++Zr) Lr[Or + Zr] = Sr.w[Qr + Zr];
                Or += rr, Nr -= rr, tr = 0
              }
              for (let rr = 0; rr < Nr; ++rr) Lr[Or + rr] = Lr[tr + rr];
              Or += Nr
            }
            if (Or != lr)
              for (; lr < Lr.length;) Lr[Or++] = Lr[lr++];
            else Or = Lr.length;
            Wr ? Sr.y += Or : Lr = jr(Lr, 0, Or)
          } else if (Wr) {
            if (Sr.y += Tr, lr)
              for (let rr = 0; rr < Tr; ++rr) Lr[rr] = Lr[lr + rr]
          } else lr && (Lr = jr(Lr, lr));
          return Sr.b = zr, Lr
        }
        Er(2)
      }
    };
  class vr {
    output = null;
    decoded = 0;
    done = !1;
    st = null;
    parts = [];
    wI = 0;
    needed = 18;
    size;
    constructor(rr) {
      this.size = rr
    }
    push(rr) {
      if (this.done) return;
      if (this.parts.push(rr), this.wI += rr.length, this.wI < this.needed) return;
      const Sr = ((rr, Sr) => {
        if (1 == rr.length) return rr[0];
        const Zr = new Qr(Sr);
        for (let Qr = 0, Wr = 0; Qr < rr.length; ++Qr) {
          const Sr = rr[Qr];
          Zr.set(Sr, Wr), Wr += Sr.length
        }
        return Zr
      })(this.parts, this.wI);
      let Zr = this.st;
      if (!Zr) {
        const rr = xr(Sr, new Qr(0));
        "number" != typeof rr && rr.u === this.size || Er(0, `not a zstd frame of ${this.size} bytes`), Zr = this.st = xr(Sr, 1), Zr.e = 0, this.output = Zr.w
      }
      for (;;) {
        const rr = Sr.length - Zr.b;
        if (rr < 3) {
          this.needed = 3;
          break
        }
        const Qr = Sr[Zr.b],
          Wr = Qr >> 1 & 3;
        3 == Wr && Er(2);
        const ar = Qr >> 3 | Sr[Zr.b + 1] << 5 | Sr[Zr.b + 2] << 13;
        ar > Zr.m && Er(0), 0 == Wr && Zr.y + ar > Zr.u && Er(0);
        const jr = 1 == Wr ? 4 : 3 + ar;
        if (rr < jr) {
          this.needed = jr;
          break
        }
        if (Tr(Sr, Zr, Zr.w) || Er(5), Zr.e = Zr.y, (Zr.y > Zr.u || Zr.l && Zr.y != Zr.u) && Er(0), Zr.l) {
          this.done = !0;
          break
        }
      }
      this.decoded = Zr.y;
      const Wr = Sr.subarray(Zr.b);
      this.parts = Wr.length ? [Wr] : [], this.wI = Wr.length, Zr.b = 0
    }
  }
  class Or {
    post;
    href = "";
    Ix = null;
    given = 0;
    stopped = !1;
    constructor(rr) {
      this.post = rr
    }
    take(Sr) {
      if (!this.stopped) try {
        this.answer(Sr)
      } catch (Qr) {
        this.stop(Qr instanceof RangeError ? `out of memory decoding ${this.href}: ${rr(Qr)}` : `${this.href} did not decode: ${rr(Qr)}`)
      }
    }
    answer(rr) {
      if (null === this.Ix) {
        const [Sr, Qr] = rr;
        return this.href = Sr, void(this.Ix = new vr(Qr))
      }
      if (null === rr) return void this.stop(`${this.href} ended before its module did`);
      const Sr = this.Ix;
      Sr.push(rr);
      const {
        output: Qr,
        decoded: Zr
      } = Sr;
      if (null !== Qr && Zr > this.given) {
        const rr = Qr.slice(this.given, Zr).buffer;
        this.given = Zr, this.post(rr, [rr])
      }
      Sr.done && this.stop(!0)
    }
    stop(rr) {
      this.stopped = !0, this.post(rr)
    }
  }
  const Lr = globalThis.WorkerGlobalScope;
  if (void 0 !== Lr && globalThis instanceof Lr) {
    const rr = globalThis,
      Sr = new Or((function(Sr) {
        let Qr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        rr.postMessage(Sr, Qr)
      }));
    rr.addEventListener("message", (rr => {
      let {
        data: Qr
      } = rr;
      Sr.take(Qr)
    }))
  }
})();