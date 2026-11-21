(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var dd = __webpack_require__.u,
        Jd = __webpack_require__.e,
        kd = {},
        pd = {};
      __webpack_require__.u = function(Jd) {
        return dd(Jd) + (kd.hasOwnProperty(Jd) ? "?" + kd[Jd] : "")
      }, __webpack_require__.e = function(Nd) {
        return Jd(Nd).catch((function(Jd) {
          var Wd = pd.hasOwnProperty(Nd) ? pd[Nd] : 4;
          if (Wd < 1) {
            var Pd = dd(Nd);
            throw Jd.message = "Loading chunk " + Nd + " failed after 4 retries.\n(" + Pd + ")", Jd.request = Pd, kd[Nd] = "cache-bust=" + Date.now(), setTimeout((function() {
              delete pd[Nd]
            }), 0), Jd
          }
          return new Promise((function(dd) {
            var Jd = 4 - Wd + 1;
            setTimeout((function() {
              var Jd = "cache-bust=" + Date.now();
              kd[Nd] = Jd, pd[Nd] = Wd - 1, dd(__webpack_require__.e(Nd))
            }), function(dd) {
              return 500 * Math.pow(2, dd)
            }(Jd))
          }))
        }))
      }
    }
  })();

  function dd(dd) {
    return dd instanceof Error ? dd.message : String(dd)
  }
  const Jd = ArrayBuffer,
    kd = Uint8Array,
    pd = Uint16Array,
    Nd = Int16Array,
    Wd = Int32Array,
    Pd = (dd, Jd, pd) => {
      if (kd.prototype.slice) return kd.prototype.slice.call(dd, Jd, pd);
      (null == Jd || Jd < 0) && (Jd = 0), (null == pd || pd > dd.length) && (pd = dd.length);
      const Nd = new kd(pd - Jd);
      return Nd.set(dd.subarray(Jd, pd)), Nd
    },
    Zd = (dd, Jd, pd, Nd) => {
      if (kd.prototype.fill) return kd.prototype.fill.call(dd, Jd, pd, Nd);
      for ((null == pd || pd < 0) && (pd = 0), (null == Nd || Nd > dd.length) && (Nd = dd.length); pd < Nd; ++pd) dd[pd] = Jd;
      return dd
    },
    gd = ["invalid zstd data", "window size too large (>2046MB)", "invalid block type", "FSE accuracy too high", "match distance too far back", "unexpected EOF"],
    Cd = (dd, Jd, kd) => {
      const pd = new Error(Jd || gd[dd]);
      if (pd.code = dd, Error.captureStackTrace && Error.captureStackTrace(pd, Cd), !kd) throw pd;
      return pd
    },
    Kd = (dd, Jd, kd) => {
      let pd = 0,
        Nd = 0;
      for (; pd < kd; ++pd) Nd |= dd[Jd++] << (pd << 3);
      return Nd
    },
    od = (dd, Jd) => {
      const pd = dd[0] | dd[1] << 8 | dd[2] << 16;
      if (3126568 == pd && 253 == dd[3]) {
        const pd = dd[4],
          Nd = pd >> 5 & 1,
          Pd = pd >> 2 & 1,
          Zd = 3 & pd,
          gd = pd >> 6;
        8 & pd && Cd(0);
        let od = 6 - Nd;
        const ld = 3 == Zd ? 4 : Zd,
          Qd = Kd(dd, od, ld);
        od += ld;
        const Ld = gd ? 1 << gd : Nd,
          Od = Kd(dd, od, Ld) + (1 == gd && 256);
        let ed = Od;
        if (!Nd) {
          const Jd = 1 << 10 + (dd[5] >> 3);
          ed = Jd + (Jd >> 3) * (7 & dd[5])
        }
        ed > 2145386496 && Cd(1);
        const Rd = new kd((1 == Jd ? Od || ed : Jd ? 0 : ed) + 12);
        return Rd[0] = 1, Rd[4] = 4, Rd[8] = 8, {
          b: od + Ld,
          y: 0,
          l: 0,
          d: Qd,
          w: Jd && 1 != Jd ? Jd : Rd.subarray(12),
          e: ed,
          o: new Wd(Rd.buffer, 0, 3),
          u: Od,
          c: Pd,
          m: Math.min(131072, ed)
        }
      }
      if (25481893 == (pd >> 4 | dd[3] << 20)) return 8 + (((Nd = dd)[Pd = 4] | Nd[Pd + 1] << 8 | Nd[Pd + 2] << 16 | Nd[Pd + 3] << 24) >>> 0);
      var Nd, Pd;
      Cd(0)
    },
    ld = dd => {
      let Jd = 0;
      for (; 1 << Jd <= dd; ++Jd);
      return Jd - 1
    },
    Qd = (dd, Wd, Pd) => {
      let Zd = 4 + (Wd << 3);
      const gd = 5 + (15 & dd[Wd]);
      gd > Pd && Cd(3);
      const Kd = 1 << gd;
      let od = Kd,
        Qd = -1,
        Ld = -1,
        Od = -1,
        ed = Kd;
      const Rd = new Jd(512 + (Kd << 2)),
        Id = new Nd(Rd, 0, 256),
        Gd = new pd(Rd, 0, 256),
        vd = new pd(Rd, 512, Kd),
        xd = 512 + (Kd << 1),
        qd = new kd(Rd, xd, Kd),
        Bd = new kd(Rd, xd + Kd);
      for (; Qd < 255 && od > 0;) {
        const Jd = ld(od + 1),
          kd = Zd >> 3,
          pd = (1 << Jd + 1) - 1;
        let Nd = (dd[kd] | dd[kd + 1] << 8 | dd[kd + 2] << 16) >> (7 & Zd) & pd;
        const Wd = (1 << Jd) - 1,
          Pd = pd - od - 1,
          gd = Nd & Wd;
        if (gd < Pd ? (Zd += Jd, Nd = gd) : (Zd += Jd + 1, Nd > Wd && (Nd -= Pd)), Id[++Qd] = --Nd, -1 == Nd ? (od += Nd, qd[--ed] = Qd) : od -= Nd, !Nd)
          do {
            const Jd = Zd >> 3;
            Ld = (dd[Jd] | dd[Jd + 1] << 8) >> (7 & Zd) & 3, Zd += 2, Qd += Ld
          } while (3 == Ld)
      }(Qd > 255 || od) && Cd(0);
      let sd = 0;
      const id = (Kd >> 1) + (Kd >> 3) + 3,
        ad = Kd - 1;
      for (let Jd = 0; Jd <= Qd; ++Jd) {
        const dd = Id[Jd];
        if (dd < 1) Gd[Jd] = -dd;
        else
          for (Od = 0; Od < dd; ++Od) {
            qd[sd] = Jd;
            do {
              sd = sd + id & ad
            } while (sd >= ed)
          }
      }
      for (sd && Cd(0), Od = 0; Od < Kd; ++Od) {
        const dd = Gd[qd[Od]]++,
          Jd = Bd[Od] = gd - ld(dd);
        vd[Od] = (dd << Jd) - Kd
      }
      return [Zd + 7 >> 3, {
        b: gd,
        s: qd,
        n: Bd,
        t: vd
      }]
    },
    Ld = Qd(new kd([81, 16, 99, 140, 49, 198, 24, 99, 12, 33, 196, 24, 99, 102, 102, 134, 70, 146, 4]), 0, 6)[1],
    Od = Qd(new kd([33, 20, 196, 24, 99, 140, 33, 132, 16, 66, 8, 33, 132, 16, 66, 8, 33, 68, 68, 68, 68, 68, 68, 68, 68, 36, 9]), 0, 6)[1],
    ed = Qd(new kd([32, 132, 16, 66, 102, 70, 68, 68, 68, 68, 36, 73, 2]), 0, 5)[1],
    Rd = (dd, Jd) => {
      const kd = dd.length,
        pd = new Wd(kd);
      for (let Nd = 0; Nd < kd; ++Nd) pd[Nd] = Jd, Jd += 1 << dd[Nd];
      return pd
    },
    Id = new kd(new Wd([0, 0, 0, 0, 16843009, 50528770, 134678020, 202050057, 269422093]).buffer, 0, 36),
    Gd = Rd(Id, 0),
    vd = new kd(new Wd([0, 0, 0, 0, 0, 0, 0, 0, 16843009, 50528770, 117769220, 185207048, 252579084, 16]).buffer, 0, 53),
    xd = Rd(vd, 3),
    qd = (dd, Jd, kd) => {
      const pd = dd.length,
        Nd = Jd.length,
        Wd = dd[pd - 1],
        Pd = (1 << kd.b) - 1,
        Zd = -kd.b;
      Wd || Cd(0);
      let gd = 0,
        Kd = kd.b,
        od = (pd << 3) - 8 + ld(Wd) - Kd,
        Qd = -1;
      for (; od > Zd && Qd < Nd;) {
        const pd = od >> 3;
        gd = (gd << Kd | (dd[pd] | dd[pd + 1] << 8 | dd[pd + 2] << 16) >> (7 & od)) & Pd, Jd[++Qd] = kd.s[gd], od -= Kd = kd.n[gd]
      }
      od == Zd && Qd + 1 == Nd || Cd(0)
    },
    Bd = (dd, Jd, kd) => {
      let pd = 6;
      const Nd = Jd.length + 3 >> 2,
        Wd = Nd << 1,
        Pd = Nd + Wd;
      qd(dd.subarray(pd, pd += dd[0] | dd[1] << 8), Jd.subarray(0, Nd), kd), qd(dd.subarray(pd, pd += dd[2] | dd[3] << 8), Jd.subarray(Nd, Wd), kd), qd(dd.subarray(pd, pd += dd[4] | dd[5] << 8), Jd.subarray(Wd, Pd), kd), qd(dd.subarray(pd), Jd.subarray(Pd), kd)
    },
    sd = (dd, Jd, Nd) => {
      let Wd = Jd.b;
      const gd = dd[Wd],
        Kd = gd >> 1 & 3;
      Jd.l = 1 & gd;
      const od = gd >> 3 | dd[Wd + 1] << 5 | dd[Wd + 2] << 13,
        Rd = (Wd += 3) + od;
      if (1 == Kd) {
        if (Wd >= dd.length) return;
        return Jd.b = Wd + 1, Nd ? (Zd(Nd, dd[Wd], Jd.y, Jd.y += od), Nd) : Zd(new kd(od), dd[Wd])
      }
      if (!(Rd > dd.length)) {
        if (0 == Kd) return Jd.b = Rd, Nd ? (Nd.set(dd.subarray(Wd, Rd), Jd.y), Jd.y += od, Nd) : Pd(dd, Wd, Rd);
        if (2 == Kd) {
          const gd = dd[Wd],
            Kd = 3 & gd,
            od = gd >> 2 & 3;
          let sd = gd >> 4,
            id = 0,
            ad = 0;
          Kd < 2 ? 1 & od ? sd |= dd[++Wd] << 4 | (2 & od && dd[++Wd] << 12) : sd = gd >> 3 : (ad = od, od < 2 ? (sd |= (63 & dd[++Wd]) << 4, id = dd[Wd] >> 6 | dd[++Wd] << 2) : 2 == od ? (sd |= dd[++Wd] << 4 | (3 & dd[++Wd]) << 12, id = dd[Wd] >> 2 | dd[++Wd] << 6) : (sd |= dd[++Wd] << 4 | (63 & dd[++Wd]) << 12, id = dd[Wd] >> 6 | dd[++Wd] << 2 | dd[++Wd] << 10)), ++Wd;
          let Md = Nd ? Nd.subarray(Jd.y, Jd.y + Jd.m) : new kd(Jd.m),
            Fd = Md.length - sd;
          if (Fd < 0 && Cd(0), 0 == Kd) Md.set(dd.subarray(Wd, Wd += sd), Fd);
          else if (1 == Kd) Zd(Md, dd[Wd++], Fd);
          else {
            let Nd = Jd.h;
            if (2 == Kd) {
              const Pd = ((dd, Jd) => {
                let Nd = 0,
                  Wd = -1;
                const Pd = new kd(292),
                  gd = dd[Jd],
                  Kd = Pd.subarray(0, 256),
                  od = Pd.subarray(256, 268),
                  Ld = new pd(Pd.buffer, 268);
                if (gd < 128) {
                  const [kd, pd] = Qd(dd, Jd + 1, 6), Nd = kd << 3, Pd = dd[Jd += gd];
                  Pd || Cd(0);
                  let Zd = 0,
                    od = 0,
                    Ld = pd.b,
                    Od = Ld,
                    ed = (++Jd << 3) - 8 + ld(Pd);
                  for (; Wd > 254 && Cd(0), ed -= Ld, !(ed < Nd);) {
                    let Jd = ed >> 3;
                    if (Zd += (dd[Jd] | dd[Jd + 1] << 8) >> (7 & ed) & (1 << Ld) - 1, Kd[++Wd] = pd.s[Zd], ed -= Od, ed < Nd) break;
                    Jd = ed >> 3, od += (dd[Jd] | dd[Jd + 1] << 8) >> (7 & ed) & (1 << Od) - 1, Kd[++Wd] = pd.s[od], Ld = pd.n[Zd], Zd = pd.t[Zd], Od = pd.n[od], od = pd.t[od]
                  }++Wd > 255 && Cd(0)
                } else {
                  for (Wd = gd - 127; Nd < Wd; Nd += 2) {
                    const kd = dd[++Jd];
                    Kd[Nd] = kd >> 4, Kd[Nd + 1] = 15 & kd
                  }++Jd
                }
                let Od = 0;
                for (Nd = 0; Nd < Wd; ++Nd) {
                  const dd = Kd[Nd];
                  dd > 11 && Cd(0), Od += dd && 1 << dd - 1
                }
                const ed = ld(Od) + 1,
                  Rd = 1 << ed,
                  Id = Rd - Od;
                for (Id & Id - 1 && Cd(0), Kd[Wd++] = ld(Id) + 1, Nd = 0; Nd < Wd; ++Nd) {
                  const dd = Kd[Nd];
                  ++od[Kd[Nd] = dd && ed + 1 - dd]
                }
                const Gd = new kd(Rd << 1),
                  vd = Gd.subarray(0, Rd),
                  xd = Gd.subarray(Rd);
                for (Ld[ed] = 0, Nd = ed; Nd > 0; --Nd) {
                  const dd = Ld[Nd];
                  Zd(xd, Nd, dd, Ld[Nd - 1] = dd + od[Nd] * (1 << ed - Nd))
                }
                for (Ld[0] != Rd && Cd(0), Nd = 0; Nd < Wd; ++Nd) {
                  const dd = Kd[Nd];
                  if (dd) {
                    const Jd = Ld[dd];
                    Zd(vd, Nd, Jd, Ld[dd] = Jd + (1 << ed - dd))
                  }
                }
                return [Jd, {
                  n: xd,
                  b: ed,
                  s: vd
                }]
              })(dd, Wd);
              id += Wd - (Wd = Pd[0]), Jd.h = Nd = Pd[1]
            } else Nd || Cd(0);
            (ad ? Bd : qd)(dd.subarray(Wd, Wd += id), Md.subarray(Fd), Nd)
          }
          let Yd = dd[Wd++];
          if (Yd) {
            255 == Yd ? Yd = 32512 + (dd[Wd++] | dd[Wd++] << 8) : Yd > 127 && (Yd = Yd - 128 << 8 | dd[Wd++]);
            const Zd = dd[Wd++];
            3 & Zd && Cd(0);
            const gd = [Od, ed, Ld];
            for (let Nd = 2; Nd > -1; --Nd) {
              const Pd = Zd >> 2 + (Nd << 1) & 3;
              if (1 == Pd) {
                const Jd = new kd([0, 0, dd[Wd++]]);
                gd[Nd] = {
                  s: Jd.subarray(2, 3),
                  n: Jd.subarray(0, 1),
                  t: new pd(Jd.buffer, 0, 1),
                  b: 0
                }
              } else 2 == Pd ? [Wd, gd[Nd]] = Qd(dd, Wd, 9 - (1 & Nd)) : 3 == Pd && (Jd.t || Cd(0), gd[Nd] = Jd.t[Nd])
            }
            const [Kd, od, qd] = Jd.t = gd, Bd = dd[Rd - 1];
            Bd || Cd(0);
            let sd = (Rd << 3) - 8 + ld(Bd) - qd.b,
              id = sd >> 3,
              ad = 0,
              md = (dd[id] | dd[id + 1] << 8) >> (7 & sd) & (1 << qd.b) - 1;
            id = (sd -= od.b) >> 3;
            let bd = (dd[id] | dd[id + 1] << 8) >> (7 & sd) & (1 << od.b) - 1;
            id = (sd -= Kd.b) >> 3;
            let Sd = (dd[id] | dd[id + 1] << 8) >> (7 & sd) & (1 << Kd.b) - 1;
            for (++Yd; --Yd;) {
              const kd = qd.s[md],
                pd = qd.n[md],
                Nd = Kd.s[Sd],
                Wd = Kd.n[Sd],
                Pd = od.s[bd],
                Zd = od.n[bd];
              id = (sd -= Pd) >> 3;
              const gd = 1 << Pd;
              let ld = gd + ((dd[id] | dd[id + 1] << 8 | dd[id + 2] << 16 | dd[id + 3] << 24) >>> (7 & sd) & gd - 1);
              id = (sd -= vd[Nd]) >> 3;
              let Qd = xd[Nd] + ((dd[id] | dd[id + 1] << 8 | dd[id + 2] << 16) >> (7 & sd) & (1 << vd[Nd]) - 1);
              id = (sd -= Id[kd]) >> 3;
              const Ld = Gd[kd] + ((dd[id] | dd[id + 1] << 8 | dd[id + 2] << 16) >> (7 & sd) & (1 << Id[kd]) - 1);
              if ((sd < 0 || Fd + Ld > Md.length || ad + Ld + Qd > Md.length) && Cd(0), id = (sd -= pd) >> 3, md = qd.t[md] + ((dd[id] | dd[id + 1] << 8) >> (7 & sd) & (1 << pd) - 1), id = (sd -= Wd) >> 3, Sd = Kd.t[Sd] + ((dd[id] | dd[id + 1] << 8) >> (7 & sd) & (1 << Wd) - 1), id = (sd -= Zd) >> 3, bd = od.t[bd] + ((dd[id] | dd[id + 1] << 8) >> (7 & sd) & (1 << Zd) - 1), ld > 3) Jd.o[2] = Jd.o[1], Jd.o[1] = Jd.o[0], Jd.o[0] = ld -= 3;
              else {
                const dd = ld - (0 != Ld);
                dd ? (ld = 3 == dd ? Jd.o[0] - 1 : Jd.o[dd], dd > 1 && (Jd.o[2] = Jd.o[1]), Jd.o[1] = Jd.o[0], Jd.o[0] = ld) : ld = Jd.o[0]
              }
              for (let dd = 0; dd < Ld; ++dd) Md[ad + dd] = Md[Fd + dd];
              ad += Ld, Fd += Ld;
              let Od = ad - ld;
              if (Od < 0) {
                let dd = -Od;
                const kd = Jd.e + Od;
                kd < 0 && Cd(4), dd > Qd && (dd = Qd);
                for (let pd = 0; pd < dd; ++pd) Md[ad + pd] = Jd.w[kd + pd];
                ad += dd, Qd -= dd, Od = 0
              }
              for (let dd = 0; dd < Qd; ++dd) Md[ad + dd] = Md[Od + dd];
              ad += Qd
            }
            if (ad != Fd)
              for (; Fd < Md.length;) Md[ad++] = Md[Fd++];
            else ad = Md.length;
            Nd ? Jd.y += ad : Md = Pd(Md, 0, ad)
          } else if (Nd) {
            if (Jd.y += sd, Fd)
              for (let dd = 0; dd < sd; ++dd) Md[dd] = Md[Fd + dd]
          } else Fd && (Md = Pd(Md, Fd));
          return Jd.b = Rd, Md
        }
        Cd(2)
      }
    };
  class id {
    output = null;
    decoded = 0;
    done = !1;
    st = null;
    parts = [];
    EC = 0;
    needed = 18;
    size;
    constructor(dd) {
      this.size = dd
    }
    push(dd) {
      if (this.done) return;
      if (this.parts.push(dd), this.EC += dd.length, this.EC < this.needed) return;
      const Jd = ((dd, Jd) => {
        if (1 == dd.length) return dd[0];
        const pd = new kd(Jd);
        for (let kd = 0, Nd = 0; kd < dd.length; ++kd) {
          const Jd = dd[kd];
          pd.set(Jd, Nd), Nd += Jd.length
        }
        return pd
      })(this.parts, this.EC);
      let pd = this.st;
      if (!pd) {
        const dd = od(Jd, new kd(0));
        "number" != typeof dd && dd.u === this.size || Cd(0, `not a zstd frame of ${this.size} bytes`), pd = this.st = od(Jd, 1), pd.e = 0, this.output = pd.w
      }
      for (;;) {
        const dd = Jd.length - pd.b;
        if (dd < 3) {
          this.needed = 3;
          break
        }
        const kd = Jd[pd.b],
          Nd = kd >> 1 & 3;
        3 == Nd && Cd(2);
        const Wd = kd >> 3 | Jd[pd.b + 1] << 5 | Jd[pd.b + 2] << 13;
        Wd > pd.m && Cd(0), 0 == Nd && pd.y + Wd > pd.u && Cd(0);
        const Pd = 1 == Nd ? 4 : 3 + Wd;
        if (dd < Pd) {
          this.needed = Pd;
          break
        }
        if (sd(Jd, pd, pd.w) || Cd(5), pd.e = pd.y, (pd.y > pd.u || pd.l && pd.y != pd.u) && Cd(0), pd.l) {
          this.done = !0;
          break
        }
      }
      this.decoded = pd.y;
      const Nd = Jd.subarray(pd.b);
      this.parts = Nd.length ? [Nd] : [], this.EC = Nd.length, pd.b = 0
    }
  }
  class ad {
    post;
    href = "";
    rQ = null;
    given = 0;
    stopped = !1;
    constructor(dd) {
      this.post = dd
    }
    take(Jd) {
      if (!this.stopped) try {
        this.answer(Jd)
      } catch (kd) {
        this.stop(kd instanceof RangeError ? `out of memory decoding ${this.href}: ${dd(kd)}` : `${this.href} did not decode: ${dd(kd)}`)
      }
    }
    answer(dd) {
      if (null === this.rQ) {
        const [Jd, kd] = dd;
        return this.href = Jd, void(this.rQ = new id(kd))
      }
      if (null === dd) return void this.stop(`${this.href} ended before its module did`);
      const Jd = this.rQ;
      Jd.push(dd);
      const {
        output: kd,
        decoded: pd
      } = Jd;
      if (null !== kd && pd > this.given) {
        const dd = kd.slice(this.given, pd).buffer;
        this.given = pd, this.post(dd, [dd])
      }
      Jd.done && this.stop(!0)
    }
    stop(dd) {
      this.stopped = !0, this.post(dd)
    }
  }
  const Md = globalThis.WorkerGlobalScope;
  if (void 0 !== Md && globalThis instanceof Md) {
    const dd = globalThis,
      Jd = new ad((function(Jd) {
        let kd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        dd.postMessage(Jd, kd)
      }));
    dd.addEventListener("message", (dd => {
      let {
        data: kd
      } = dd;
      Jd.take(kd)
    }))
  }
})();