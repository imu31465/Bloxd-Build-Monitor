(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var vv = __webpack_require__.u,
        zv = __webpack_require__.e,
        Pv = {},
        hv = {};
      __webpack_require__.u = function(zv) {
        return vv(zv) + (Pv.hasOwnProperty(zv) ? "?" + Pv[zv] : "")
      }, __webpack_require__.e = function(Sv) {
        return zv(Sv).catch((function(zv) {
          var ev = hv.hasOwnProperty(Sv) ? hv[Sv] : 4;
          if (ev < 1) {
            var gv = vv(Sv);
            throw zv.message = "Loading chunk " + Sv + " failed after 4 retries.\n(" + gv + ")", zv.request = gv, Pv[Sv] = "cache-bust=" + Date.now(), setTimeout((function() {
              delete hv[Sv]
            }), 0), zv
          }
          return new Promise((function(vv) {
            var zv = 4 - ev + 1;
            setTimeout((function() {
              var zv = "cache-bust=" + Date.now();
              Pv[Sv] = zv, hv[Sv] = ev - 1, vv(__webpack_require__.e(Sv))
            }), function(vv) {
              return 500 * Math.pow(2, vv)
            }(zv))
          }))
        }))
      }
    }
  })();

  function vv(vv) {
    return vv instanceof Error ? vv.message : String(vv)
  }
  const zv = ArrayBuffer,
    Pv = Uint8Array,
    hv = Uint16Array,
    Sv = Int16Array,
    ev = Int32Array,
    gv = (vv, zv, hv) => {
      if (Pv.prototype.slice) return Pv.prototype.slice.call(vv, zv, hv);
      (null == zv || zv < 0) && (zv = 0), (null == hv || hv > vv.length) && (hv = vv.length);
      const Sv = new Pv(hv - zv);
      return Sv.set(vv.subarray(zv, hv)), Sv
    },
    pv = (vv, zv, hv, Sv) => {
      if (Pv.prototype.fill) return Pv.prototype.fill.call(vv, zv, hv, Sv);
      for ((null == hv || hv < 0) && (hv = 0), (null == Sv || Sv > vv.length) && (Sv = vv.length); hv < Sv; ++hv) vv[hv] = zv;
      return vv
    },
    dv = ["invalid zstd data", "window size too large (>2046MB)", "invalid block type", "FSE accuracy too high", "match distance too far back", "unexpected EOF"],
    Nv = (vv, zv, Pv) => {
      const hv = new Error(zv || dv[vv]);
      if (hv.code = vv, Error.captureStackTrace && Error.captureStackTrace(hv, Nv), !Pv) throw hv;
      return hv
    },
    lv = (vv, zv, Pv) => {
      let hv = 0,
        Sv = 0;
      for (; hv < Pv; ++hv) Sv |= vv[zv++] << (hv << 3);
      return Sv
    },
    Tv = (vv, zv) => {
      const hv = vv[0] | vv[1] << 8 | vv[2] << 16;
      if (3126568 == hv && 253 == vv[3]) {
        const hv = vv[4],
          Sv = hv >> 5 & 1,
          gv = hv >> 2 & 1,
          pv = 3 & hv,
          dv = hv >> 6;
        8 & hv && Nv(0);
        let Tv = 6 - Sv;
        const Wv = 3 == pv ? 4 : pv,
          wv = lv(vv, Tv, Wv);
        Tv += Wv;
        const av = dv ? 1 << dv : Sv,
          sv = lv(vv, Tv, av) + (1 == dv && 256);
        let Cv = sv;
        if (!Sv) {
          const zv = 1 << 10 + (vv[5] >> 3);
          Cv = zv + (zv >> 3) * (7 & vv[5])
        }
        Cv > 2145386496 && Nv(1);
        const iv = new Pv((1 == zv ? sv || Cv : zv ? 0 : Cv) + 12);
        return iv[0] = 1, iv[4] = 4, iv[8] = 8, {
          b: Tv + av,
          y: 0,
          l: 0,
          d: wv,
          w: zv && 1 != zv ? zv : iv.subarray(12),
          e: Cv,
          o: new ev(iv.buffer, 0, 3),
          u: sv,
          c: gv,
          m: Math.min(131072, Cv)
        }
      }
      if (25481893 == (hv >> 4 | vv[3] << 20)) return 8 + (((Sv = vv)[gv = 4] | Sv[gv + 1] << 8 | Sv[gv + 2] << 16 | Sv[gv + 3] << 24) >>> 0);
      var Sv, gv;
      Nv(0)
    },
    Wv = vv => {
      let zv = 0;
      for (; 1 << zv <= vv; ++zv);
      return zv - 1
    },
    wv = (vv, ev, gv) => {
      let pv = 4 + (ev << 3);
      const dv = 5 + (15 & vv[ev]);
      dv > gv && Nv(3);
      const lv = 1 << dv;
      let Tv = lv,
        wv = -1,
        av = -1,
        sv = -1,
        Cv = lv;
      const iv = new zv(512 + (lv << 2)),
        cv = new Sv(iv, 0, 256),
        Gv = new hv(iv, 0, 256),
        mv = new hv(iv, 512, lv),
        jv = 512 + (lv << 1),
        fv = new Pv(iv, jv, lv),
        Fv = new Pv(iv, jv + lv);
      for (; wv < 255 && Tv > 0;) {
        const zv = Wv(Tv + 1),
          Pv = pv >> 3,
          hv = (1 << zv + 1) - 1;
        let Sv = (vv[Pv] | vv[Pv + 1] << 8 | vv[Pv + 2] << 16) >> (7 & pv) & hv;
        const ev = (1 << zv) - 1,
          gv = hv - Tv - 1,
          dv = Sv & ev;
        if (dv < gv ? (pv += zv, Sv = dv) : (pv += zv + 1, Sv > ev && (Sv -= gv)), cv[++wv] = --Sv, -1 == Sv ? (Tv += Sv, fv[--Cv] = wv) : Tv -= Sv, !Sv)
          do {
            const zv = pv >> 3;
            av = (vv[zv] | vv[zv + 1] << 8) >> (7 & pv) & 3, pv += 2, wv += av
          } while (3 == av)
      }(wv > 255 || Tv) && Nv(0);
      let Yv = 0;
      const nv = (lv >> 1) + (lv >> 3) + 3,
        Ov = lv - 1;
      for (let zv = 0; zv <= wv; ++zv) {
        const vv = cv[zv];
        if (vv < 1) Gv[zv] = -vv;
        else
          for (sv = 0; sv < vv; ++sv) {
            fv[Yv] = zv;
            do {
              Yv = Yv + nv & Ov
            } while (Yv >= Cv)
          }
      }
      for (Yv && Nv(0), sv = 0; sv < lv; ++sv) {
        const vv = Gv[fv[sv]]++,
          zv = Fv[sv] = dv - Wv(vv);
        mv[sv] = (vv << zv) - lv
      }
      return [pv + 7 >> 3, {
        b: dv,
        s: fv,
        n: Fv,
        t: mv
      }]
    },
    av = wv(new Pv([81, 16, 99, 140, 49, 198, 24, 99, 12, 33, 196, 24, 99, 102, 102, 134, 70, 146, 4]), 0, 6)[1],
    sv = wv(new Pv([33, 20, 196, 24, 99, 140, 33, 132, 16, 66, 8, 33, 132, 16, 66, 8, 33, 68, 68, 68, 68, 68, 68, 68, 68, 36, 9]), 0, 6)[1],
    Cv = wv(new Pv([32, 132, 16, 66, 102, 70, 68, 68, 68, 68, 36, 73, 2]), 0, 5)[1],
    iv = (vv, zv) => {
      const Pv = vv.length,
        hv = new ev(Pv);
      for (let Sv = 0; Sv < Pv; ++Sv) hv[Sv] = zv, zv += 1 << vv[Sv];
      return hv
    },
    cv = new Pv(new ev([0, 0, 0, 0, 16843009, 50528770, 134678020, 202050057, 269422093]).buffer, 0, 36),
    Gv = iv(cv, 0),
    mv = new Pv(new ev([0, 0, 0, 0, 0, 0, 0, 0, 16843009, 50528770, 117769220, 185207048, 252579084, 16]).buffer, 0, 53),
    jv = iv(mv, 3),
    fv = (vv, zv, Pv) => {
      const hv = vv.length,
        Sv = zv.length,
        ev = vv[hv - 1],
        gv = (1 << Pv.b) - 1,
        pv = -Pv.b;
      ev || Nv(0);
      let dv = 0,
        lv = Pv.b,
        Tv = (hv << 3) - 8 + Wv(ev) - lv,
        wv = -1;
      for (; Tv > pv && wv < Sv;) {
        const hv = Tv >> 3;
        dv = (dv << lv | (vv[hv] | vv[hv + 1] << 8 | vv[hv + 2] << 16) >> (7 & Tv)) & gv, zv[++wv] = Pv.s[dv], Tv -= lv = Pv.n[dv]
      }
      Tv == pv && wv + 1 == Sv || Nv(0)
    },
    Fv = (vv, zv, Pv) => {
      let hv = 6;
      const Sv = zv.length + 3 >> 2,
        ev = Sv << 1,
        gv = Sv + ev;
      fv(vv.subarray(hv, hv += vv[0] | vv[1] << 8), zv.subarray(0, Sv), Pv), fv(vv.subarray(hv, hv += vv[2] | vv[3] << 8), zv.subarray(Sv, ev), Pv), fv(vv.subarray(hv, hv += vv[4] | vv[5] << 8), zv.subarray(ev, gv), Pv), fv(vv.subarray(hv), zv.subarray(gv), Pv)
    },
    Yv = (vv, zv, Sv) => {
      let ev = zv.b;
      const dv = vv[ev],
        lv = dv >> 1 & 3;
      zv.l = 1 & dv;
      const Tv = dv >> 3 | vv[ev + 1] << 5 | vv[ev + 2] << 13,
        iv = (ev += 3) + Tv;
      if (1 == lv) {
        if (ev >= vv.length) return;
        return zv.b = ev + 1, Sv ? (pv(Sv, vv[ev], zv.y, zv.y += Tv), Sv) : pv(new Pv(Tv), vv[ev])
      }
      if (!(iv > vv.length)) {
        if (0 == lv) return zv.b = iv, Sv ? (Sv.set(vv.subarray(ev, iv), zv.y), zv.y += Tv, Sv) : gv(vv, ev, iv);
        if (2 == lv) {
          const dv = vv[ev],
            lv = 3 & dv,
            Tv = dv >> 2 & 3;
          let Yv = dv >> 4,
            nv = 0,
            Ov = 0;
          lv < 2 ? 1 & Tv ? Yv |= vv[++ev] << 4 | (2 & Tv && vv[++ev] << 12) : Yv = dv >> 3 : (Ov = Tv, Tv < 2 ? (Yv |= (63 & vv[++ev]) << 4, nv = vv[ev] >> 6 | vv[++ev] << 2) : 2 == Tv ? (Yv |= vv[++ev] << 4 | (3 & vv[++ev]) << 12, nv = vv[ev] >> 2 | vv[++ev] << 6) : (Yv |= vv[++ev] << 4 | (63 & vv[++ev]) << 12, nv = vv[ev] >> 6 | vv[++ev] << 2 | vv[++ev] << 10)), ++ev;
          let Dv = Sv ? Sv.subarray(zv.y, zv.y + zv.m) : new Pv(zv.m),
            Kv = Dv.length - Yv;
          if (Kv < 0 && Nv(0), 0 == lv) Dv.set(vv.subarray(ev, ev += Yv), Kv);
          else if (1 == lv) pv(Dv, vv[ev++], Kv);
          else {
            let Sv = zv.h;
            if (2 == lv) {
              const gv = ((vv, zv) => {
                let Sv = 0,
                  ev = -1;
                const gv = new Pv(292),
                  dv = vv[zv],
                  lv = gv.subarray(0, 256),
                  Tv = gv.subarray(256, 268),
                  av = new hv(gv.buffer, 268);
                if (dv < 128) {
                  const [Pv, hv] = wv(vv, zv + 1, 6), Sv = Pv << 3, gv = vv[zv += dv];
                  gv || Nv(0);
                  let pv = 0,
                    Tv = 0,
                    av = hv.b,
                    sv = av,
                    Cv = (++zv << 3) - 8 + Wv(gv);
                  for (; ev > 254 && Nv(0), Cv -= av, !(Cv < Sv);) {
                    let zv = Cv >> 3;
                    if (pv += (vv[zv] | vv[zv + 1] << 8) >> (7 & Cv) & (1 << av) - 1, lv[++ev] = hv.s[pv], Cv -= sv, Cv < Sv) break;
                    zv = Cv >> 3, Tv += (vv[zv] | vv[zv + 1] << 8) >> (7 & Cv) & (1 << sv) - 1, lv[++ev] = hv.s[Tv], av = hv.n[pv], pv = hv.t[pv], sv = hv.n[Tv], Tv = hv.t[Tv]
                  }++ev > 255 && Nv(0)
                } else {
                  for (ev = dv - 127; Sv < ev; Sv += 2) {
                    const Pv = vv[++zv];
                    lv[Sv] = Pv >> 4, lv[Sv + 1] = 15 & Pv
                  }++zv
                }
                let sv = 0;
                for (Sv = 0; Sv < ev; ++Sv) {
                  const vv = lv[Sv];
                  vv > 11 && Nv(0), sv += vv && 1 << vv - 1
                }
                const Cv = Wv(sv) + 1,
                  iv = 1 << Cv,
                  cv = iv - sv;
                for (cv & cv - 1 && Nv(0), lv[ev++] = Wv(cv) + 1, Sv = 0; Sv < ev; ++Sv) {
                  const vv = lv[Sv];
                  ++Tv[lv[Sv] = vv && Cv + 1 - vv]
                }
                const Gv = new Pv(iv << 1),
                  mv = Gv.subarray(0, iv),
                  jv = Gv.subarray(iv);
                for (av[Cv] = 0, Sv = Cv; Sv > 0; --Sv) {
                  const vv = av[Sv];
                  pv(jv, Sv, vv, av[Sv - 1] = vv + Tv[Sv] * (1 << Cv - Sv))
                }
                for (av[0] != iv && Nv(0), Sv = 0; Sv < ev; ++Sv) {
                  const vv = lv[Sv];
                  if (vv) {
                    const zv = av[vv];
                    pv(mv, Sv, zv, av[vv] = zv + (1 << Cv - vv))
                  }
                }
                return [zv, {
                  n: jv,
                  b: Cv,
                  s: mv
                }]
              })(vv, ev);
              nv += ev - (ev = gv[0]), zv.h = Sv = gv[1]
            } else Sv || Nv(0);
            (Ov ? Fv : fv)(vv.subarray(ev, ev += nv), Dv.subarray(Kv), Sv)
          }
          let Vv = vv[ev++];
          if (Vv) {
            255 == Vv ? Vv = 32512 + (vv[ev++] | vv[ev++] << 8) : Vv > 127 && (Vv = Vv - 128 << 8 | vv[ev++]);
            const pv = vv[ev++];
            3 & pv && Nv(0);
            const dv = [sv, Cv, av];
            for (let Sv = 2; Sv > -1; --Sv) {
              const gv = pv >> 2 + (Sv << 1) & 3;
              if (1 == gv) {
                const zv = new Pv([0, 0, vv[ev++]]);
                dv[Sv] = {
                  s: zv.subarray(2, 3),
                  n: zv.subarray(0, 1),
                  t: new hv(zv.buffer, 0, 1),
                  b: 0
                }
              } else 2 == gv ? [ev, dv[Sv]] = wv(vv, ev, 9 - (1 & Sv)) : 3 == gv && (zv.t || Nv(0), dv[Sv] = zv.t[Sv])
            }
            const [lv, Tv, fv] = zv.t = dv, Fv = vv[iv - 1];
            Fv || Nv(0);
            let Yv = (iv << 3) - 8 + Wv(Fv) - fv.b,
              nv = Yv >> 3,
              Ov = 0,
              Uv = (vv[nv] | vv[nv + 1] << 8) >> (7 & Yv) & (1 << fv.b) - 1;
            nv = (Yv -= Tv.b) >> 3;
            let Rv = (vv[nv] | vv[nv + 1] << 8) >> (7 & Yv) & (1 << Tv.b) - 1;
            nv = (Yv -= lv.b) >> 3;
            let xv = (vv[nv] | vv[nv + 1] << 8) >> (7 & Yv) & (1 << lv.b) - 1;
            for (++Vv; --Vv;) {
              const Pv = fv.s[Uv],
                hv = fv.n[Uv],
                Sv = lv.s[xv],
                ev = lv.n[xv],
                gv = Tv.s[Rv],
                pv = Tv.n[Rv];
              nv = (Yv -= gv) >> 3;
              const dv = 1 << gv;
              let Wv = dv + ((vv[nv] | vv[nv + 1] << 8 | vv[nv + 2] << 16 | vv[nv + 3] << 24) >>> (7 & Yv) & dv - 1);
              nv = (Yv -= mv[Sv]) >> 3;
              let wv = jv[Sv] + ((vv[nv] | vv[nv + 1] << 8 | vv[nv + 2] << 16) >> (7 & Yv) & (1 << mv[Sv]) - 1);
              nv = (Yv -= cv[Pv]) >> 3;
              const av = Gv[Pv] + ((vv[nv] | vv[nv + 1] << 8 | vv[nv + 2] << 16) >> (7 & Yv) & (1 << cv[Pv]) - 1);
              if ((Yv < 0 || Kv + av > Dv.length || Ov + av + wv > Dv.length) && Nv(0), nv = (Yv -= hv) >> 3, Uv = fv.t[Uv] + ((vv[nv] | vv[nv + 1] << 8) >> (7 & Yv) & (1 << hv) - 1), nv = (Yv -= ev) >> 3, xv = lv.t[xv] + ((vv[nv] | vv[nv + 1] << 8) >> (7 & Yv) & (1 << ev) - 1), nv = (Yv -= pv) >> 3, Rv = Tv.t[Rv] + ((vv[nv] | vv[nv + 1] << 8) >> (7 & Yv) & (1 << pv) - 1), Wv > 3) zv.o[2] = zv.o[1], zv.o[1] = zv.o[0], zv.o[0] = Wv -= 3;
              else {
                const vv = Wv - (0 != av);
                vv ? (Wv = 3 == vv ? zv.o[0] - 1 : zv.o[vv], vv > 1 && (zv.o[2] = zv.o[1]), zv.o[1] = zv.o[0], zv.o[0] = Wv) : Wv = zv.o[0]
              }
              for (let vv = 0; vv < av; ++vv) Dv[Ov + vv] = Dv[Kv + vv];
              Ov += av, Kv += av;
              let sv = Ov - Wv;
              if (sv < 0) {
                let vv = -sv;
                const Pv = zv.e + sv;
                Pv < 0 && Nv(4), vv > wv && (vv = wv);
                for (let hv = 0; hv < vv; ++hv) Dv[Ov + hv] = zv.w[Pv + hv];
                Ov += vv, wv -= vv, sv = 0
              }
              for (let vv = 0; vv < wv; ++vv) Dv[Ov + vv] = Dv[sv + vv];
              Ov += wv
            }
            if (Ov != Kv)
              for (; Kv < Dv.length;) Dv[Ov++] = Dv[Kv++];
            else Ov = Dv.length;
            Sv ? zv.y += Ov : Dv = gv(Dv, 0, Ov)
          } else if (Sv) {
            if (zv.y += Yv, Kv)
              for (let vv = 0; vv < Yv; ++vv) Dv[vv] = Dv[Kv + vv]
          } else Kv && (Dv = gv(Dv, Kv));
          return zv.b = iv, Dv
        }
        Nv(2)
      }
    };
  class nv {
    output = null;
    decoded = 0;
    done = !1;
    st = null;
    parts = [];
    Vp = 0;
    needed = 18;
    size;
    constructor(vv) {
      this.size = vv
    }
    push(vv) {
      if (this.done) return;
      if (this.parts.push(vv), this.Vp += vv.length, this.Vp < this.needed) return;
      const zv = ((vv, zv) => {
        if (1 == vv.length) return vv[0];
        const hv = new Pv(zv);
        for (let Pv = 0, Sv = 0; Pv < vv.length; ++Pv) {
          const zv = vv[Pv];
          hv.set(zv, Sv), Sv += zv.length
        }
        return hv
      })(this.parts, this.Vp);
      let hv = this.st;
      if (!hv) {
        const vv = Tv(zv, new Pv(0));
        "number" != typeof vv && vv.u === this.size || Nv(0, `not a zstd frame of ${this.size} bytes`), hv = this.st = Tv(zv, 1), hv.e = 0, this.output = hv.w
      }
      for (;;) {
        const vv = zv.length - hv.b;
        if (vv < 3) {
          this.needed = 3;
          break
        }
        const Pv = zv[hv.b],
          Sv = Pv >> 1 & 3;
        3 == Sv && Nv(2);
        const ev = Pv >> 3 | zv[hv.b + 1] << 5 | zv[hv.b + 2] << 13;
        ev > hv.m && Nv(0), 0 == Sv && hv.y + ev > hv.u && Nv(0);
        const gv = 1 == Sv ? 4 : 3 + ev;
        if (vv < gv) {
          this.needed = gv;
          break
        }
        if (Yv(zv, hv, hv.w) || Nv(5), hv.e = hv.y, (hv.y > hv.u || hv.l && hv.y != hv.u) && Nv(0), hv.l) {
          this.done = !0;
          break
        }
      }
      this.decoded = hv.y;
      const Sv = zv.subarray(hv.b);
      this.parts = Sv.length ? [Sv] : [], this.Vp = Sv.length, hv.b = 0
    }
  }
  class Ov {
    post;
    href = "";
    ow = null;
    given = 0;
    stopped = !1;
    constructor(vv) {
      this.post = vv
    }
    take(zv) {
      if (!this.stopped) try {
        this.answer(zv)
      } catch (Pv) {
        this.stop(Pv instanceof RangeError ? `out of memory decoding ${this.href}: ${vv(Pv)}` : `${this.href} did not decode: ${vv(Pv)}`)
      }
    }
    answer(vv) {
      if (null === this.ow) {
        const [zv, Pv] = vv;
        return this.href = zv, void(this.ow = new nv(Pv))
      }
      if (null === vv) return void this.stop(`${this.href} ended before its module did`);
      const zv = this.ow;
      zv.push(vv);
      const {
        output: Pv,
        decoded: hv
      } = zv;
      if (null !== Pv && hv > this.given) {
        const vv = Pv.slice(this.given, hv).buffer;
        this.given = hv, this.post(vv, [vv])
      }
      zv.done && this.stop(!0)
    }
    stop(vv) {
      this.stopped = !0, this.post(vv)
    }
  }
  const Dv = globalThis.WorkerGlobalScope;
  if (void 0 !== Dv && globalThis instanceof Dv) {
    const vv = globalThis,
      zv = new Ov((function(zv) {
        let Pv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        vv.postMessage(zv, Pv)
      }));
    vv.addEventListener("message", (vv => {
      let {
        data: Pv
      } = vv;
      zv.take(Pv)
    }))
  }
})();