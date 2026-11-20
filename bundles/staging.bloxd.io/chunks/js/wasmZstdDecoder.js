export const id = 64;
export const ids = [64];
export const modules = {
  40278: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      ZstdErrorCode: () => vb,
      ZstdFrameDecoder: () => Hb
    });
    const Ab = ArrayBuffer,
      Mb = Uint8Array,
      Tb = Uint16Array,
      Eb = Int16Array,
      Yb = Int32Array,
      Bb = (bb, ab, Ub) => {
        if (Mb.prototype.slice) return Mb.prototype.slice.call(bb, ab, Ub);
        (null == ab || ab < 0) && (ab = 0), (null == Ub || Ub > bb.length) && (Ub = bb.length);
        const Ab = new Mb(Ub - ab);
        return Ab.set(bb.subarray(ab, Ub)), Ab
      },
      eb = (bb, ab, Ub, Ab) => {
        if (Mb.prototype.fill) return Mb.prototype.fill.call(bb, ab, Ub, Ab);
        for ((null == Ub || Ub < 0) && (Ub = 0), (null == Ab || Ab > bb.length) && (Ab = bb.length); Ub < Ab; ++Ub) bb[Ub] = ab;
        return bb
      },
      vb = {
        InvalidData: 0,
        WindowSizeTooLarge: 1,
        InvalidBlockType: 2,
        FSEAccuracyTooHigh: 3,
        DistanceTooFarBack: 4,
        UnexpectedEOF: 5
      },
      Lb = ["invalid zstd data", "window size too large (>2046MB)", "invalid block type", "FSE accuracy too high", "match distance too far back", "unexpected EOF"],
      Pb = (bb, ab, Ub) => {
        const Ab = new Error(ab || Lb[bb]);
        if (Ab.code = bb, Error.captureStackTrace && Error.captureStackTrace(Ab, Pb), !Ub) throw Ab;
        return Ab
      },
      Xb = (bb, ab, Ub) => {
        let Ab = 0,
          Mb = 0;
        for (; Ab < Ub; ++Ab) Mb |= bb[ab++] << (Ab << 3);
        return Mb
      },
      jb = (bb, ab) => {
        const Ub = bb[0] | bb[1] << 8 | bb[2] << 16;
        if (3126568 == Ub && 253 == bb[3]) {
          const Ub = bb[4],
            Ab = Ub >> 5 & 1,
            Tb = Ub >> 2 & 1,
            Eb = 3 & Ub,
            Bb = Ub >> 6;
          8 & Ub && Pb(0);
          let eb = 6 - Ab;
          const vb = 3 == Eb ? 4 : Eb,
            Lb = Xb(bb, eb, vb);
          eb += vb;
          const jb = Bb ? 1 << Bb : Ab,
            Rb = Xb(bb, eb, jb) + (1 == Bb && 256);
          let kb = Rb;
          if (!Ab) {
            const ab = 1 << 10 + (bb[5] >> 3);
            kb = ab + (ab >> 3) * (7 & bb[5])
          }
          kb > 2145386496 && Pb(1);
          const yb = new Mb((1 == ab ? Rb || kb : ab ? 0 : kb) + 12);
          return yb[0] = 1, yb[4] = 4, yb[8] = 8, {
            b: eb + jb,
            y: 0,
            l: 0,
            d: Lb,
            w: ab && 1 != ab ? ab : yb.subarray(12),
            e: kb,
            o: new Yb(yb.buffer, 0, 3),
            u: Rb,
            c: Tb,
            m: Math.min(131072, kb)
          }
        }
        if (25481893 == (Ub >> 4 | bb[3] << 20)) return 8 + (((Ab = bb)[Tb = 4] | Ab[Tb + 1] << 8 | Ab[Tb + 2] << 16 | Ab[Tb + 3] << 24) >>> 0);
        var Ab, Tb;
        Pb(0)
      },
      Rb = bb => {
        let ab = 0;
        for (; 1 << ab <= bb; ++ab);
        return ab - 1
      },
      kb = (bb, ab, Ub) => {
        let Yb = 4 + (ab << 3);
        const Bb = 5 + (15 & bb[ab]);
        Bb > Ub && Pb(3);
        const eb = 1 << Bb;
        let vb = eb,
          Lb = -1,
          Xb = -1,
          jb = -1,
          kb = eb;
        const yb = new Ab(512 + (eb << 2)),
          Zb = new Eb(yb, 0, 256),
          Db = new Tb(yb, 0, 256),
          zb = new Tb(yb, 512, eb),
          xb = 512 + (eb << 1),
          ib = new Mb(yb, xb, eb),
          fb = new Mb(yb, xb + eb);
        for (; Lb < 255 && vb > 0;) {
          const ab = Rb(vb + 1),
            Ub = Yb >> 3,
            Ab = (1 << ab + 1) - 1;
          let Mb = (bb[Ub] | bb[Ub + 1] << 8 | bb[Ub + 2] << 16) >> (7 & Yb) & Ab;
          const Tb = (1 << ab) - 1,
            Eb = Ab - vb - 1,
            Bb = Mb & Tb;
          if (Bb < Eb ? (Yb += ab, Mb = Bb) : (Yb += ab + 1, Mb > Tb && (Mb -= Eb)), Zb[++Lb] = --Mb, -1 == Mb ? (vb += Mb, ib[--kb] = Lb) : vb -= Mb, !Mb)
            do {
              const ab = Yb >> 3;
              Xb = (bb[ab] | bb[ab + 1] << 8) >> (7 & Yb) & 3, Yb += 2, Lb += Xb
            } while (3 == Xb)
        }(Lb > 255 || vb) && Pb(0);
        let mb = 0;
        const pb = (eb >> 1) + (eb >> 3) + 3,
          Nb = eb - 1;
        for (let Ab = 0; Ab <= Lb; ++Ab) {
          const bb = Zb[Ab];
          if (bb < 1) Db[Ab] = -bb;
          else
            for (jb = 0; jb < bb; ++jb) {
              ib[mb] = Ab;
              do {
                mb = mb + pb & Nb
              } while (mb >= kb)
            }
        }
        for (mb && Pb(0), jb = 0; jb < eb; ++jb) {
          const bb = Db[ib[jb]]++,
            ab = fb[jb] = Bb - Rb(bb);
          zb[jb] = (bb << ab) - eb
        }
        return [Yb + 7 >> 3, {
          b: Bb,
          s: ib,
          n: fb,
          t: zb
        }]
      },
      yb = kb(new Mb([81, 16, 99, 140, 49, 198, 24, 99, 12, 33, 196, 24, 99, 102, 102, 134, 70, 146, 4]), 0, 6)[1],
      Zb = kb(new Mb([33, 20, 196, 24, 99, 140, 33, 132, 16, 66, 8, 33, 132, 16, 66, 8, 33, 68, 68, 68, 68, 68, 68, 68, 68, 36, 9]), 0, 6)[1],
      Db = kb(new Mb([32, 132, 16, 66, 102, 70, 68, 68, 68, 68, 36, 73, 2]), 0, 5)[1],
      zb = (bb, ab) => {
        const Ub = bb.length,
          Ab = new Yb(Ub);
        for (let Mb = 0; Mb < Ub; ++Mb) Ab[Mb] = ab, ab += 1 << bb[Mb];
        return Ab
      },
      xb = new Mb(new Yb([0, 0, 0, 0, 16843009, 50528770, 134678020, 202050057, 269422093]).buffer, 0, 36),
      ib = zb(xb, 0),
      fb = new Mb(new Yb([0, 0, 0, 0, 0, 0, 0, 0, 16843009, 50528770, 117769220, 185207048, 252579084, 16]).buffer, 0, 53),
      mb = zb(fb, 3),
      pb = (bb, ab, Ub) => {
        const Ab = bb.length,
          Mb = ab.length,
          Tb = bb[Ab - 1],
          Eb = (1 << Ub.b) - 1,
          Yb = -Ub.b;
        Tb || Pb(0);
        let Bb = 0,
          eb = Ub.b,
          vb = (Ab << 3) - 8 + Rb(Tb) - eb,
          Lb = -1;
        for (; vb > Yb && Lb < Mb;) {
          const Ab = vb >> 3;
          Bb = (Bb << eb | (bb[Ab] | bb[Ab + 1] << 8 | bb[Ab + 2] << 16) >> (7 & vb)) & Eb, ab[++Lb] = Ub.s[Bb], vb -= eb = Ub.n[Bb]
        }
        vb == Yb && Lb + 1 == Mb || Pb(0)
      },
      Nb = (bb, ab, Ub) => {
        let Ab = 6;
        const Mb = ab.length + 3 >> 2,
          Tb = Mb << 1,
          Eb = Mb + Tb;
        pb(bb.subarray(Ab, Ab += bb[0] | bb[1] << 8), ab.subarray(0, Mb), Ub), pb(bb.subarray(Ab, Ab += bb[2] | bb[3] << 8), ab.subarray(Mb, Tb), Ub), pb(bb.subarray(Ab, Ab += bb[4] | bb[5] << 8), ab.subarray(Tb, Eb), Ub), pb(bb.subarray(Ab), ab.subarray(Eb), Ub)
      },
      Wb = (bb, ab, Ub) => {
        let Ab = ab.b;
        const Eb = bb[Ab],
          Yb = Eb >> 1 & 3;
        ab.l = 1 & Eb;
        const vb = Eb >> 3 | bb[Ab + 1] << 5 | bb[Ab + 2] << 13,
          Lb = (Ab += 3) + vb;
        if (1 == Yb) {
          if (Ab >= bb.length) return;
          return ab.b = Ab + 1, Ub ? (eb(Ub, bb[Ab], ab.y, ab.y += vb), Ub) : eb(new Mb(vb), bb[Ab])
        }
        if (!(Lb > bb.length)) {
          if (0 == Yb) return ab.b = Lb, Ub ? (Ub.set(bb.subarray(Ab, Lb), ab.y), ab.y += vb, Ub) : Bb(bb, Ab, Lb);
          if (2 == Yb) {
            const Eb = bb[Ab],
              Yb = 3 & Eb,
              vb = Eb >> 2 & 3;
            let Xb = Eb >> 4,
              jb = 0,
              zb = 0;
            Yb < 2 ? 1 & vb ? Xb |= bb[++Ab] << 4 | (2 & vb && bb[++Ab] << 12) : Xb = Eb >> 3 : (zb = vb, vb < 2 ? (Xb |= (63 & bb[++Ab]) << 4, jb = bb[Ab] >> 6 | bb[++Ab] << 2) : 2 == vb ? (Xb |= bb[++Ab] << 4 | (3 & bb[++Ab]) << 12, jb = bb[Ab] >> 2 | bb[++Ab] << 6) : (Xb |= bb[++Ab] << 4 | (63 & bb[++Ab]) << 12, jb = bb[Ab] >> 6 | bb[++Ab] << 2 | bb[++Ab] << 10)), ++Ab;
            let Wb = Ub ? Ub.subarray(ab.y, ab.y + ab.m) : new Mb(ab.m),
              Hb = Wb.length - Xb;
            if (Hb < 0 && Pb(0), 0 == Yb) Wb.set(bb.subarray(Ab, Ab += Xb), Hb);
            else if (1 == Yb) eb(Wb, bb[Ab++], Hb);
            else {
              let Ub = ab.h;
              if (2 == Yb) {
                const Eb = ((bb, ab) => {
                  let Ub = 0,
                    Ab = -1;
                  const Eb = new Mb(292),
                    Yb = bb[ab],
                    Bb = Eb.subarray(0, 256),
                    vb = Eb.subarray(256, 268),
                    Lb = new Tb(Eb.buffer, 268);
                  if (Yb < 128) {
                    const [Ub, Mb] = kb(bb, ab + 1, 6), Tb = Ub << 3, Eb = bb[ab += Yb];
                    Eb || Pb(0);
                    let eb = 0,
                      vb = 0,
                      Lb = Mb.b,
                      Xb = Lb,
                      jb = (++ab << 3) - 8 + Rb(Eb);
                    for (; Ab > 254 && Pb(0), jb -= Lb, !(jb < Tb);) {
                      let ab = jb >> 3;
                      if (eb += (bb[ab] | bb[ab + 1] << 8) >> (7 & jb) & (1 << Lb) - 1, Bb[++Ab] = Mb.s[eb], jb -= Xb, jb < Tb) break;
                      ab = jb >> 3, vb += (bb[ab] | bb[ab + 1] << 8) >> (7 & jb) & (1 << Xb) - 1, Bb[++Ab] = Mb.s[vb], Lb = Mb.n[eb], eb = Mb.t[eb], Xb = Mb.n[vb], vb = Mb.t[vb]
                    }++Ab > 255 && Pb(0)
                  } else {
                    for (Ab = Yb - 127; Ub < Ab; Ub += 2) {
                      const Ab = bb[++ab];
                      Bb[Ub] = Ab >> 4, Bb[Ub + 1] = 15 & Ab
                    }++ab
                  }
                  let Xb = 0;
                  for (Ub = 0; Ub < Ab; ++Ub) {
                    const bb = Bb[Ub];
                    bb > 11 && Pb(0), Xb += bb && 1 << bb - 1
                  }
                  const jb = Rb(Xb) + 1,
                    yb = 1 << jb,
                    Zb = yb - Xb;
                  for (Zb & Zb - 1 && Pb(0), Bb[Ab++] = Rb(Zb) + 1, Ub = 0; Ub < Ab; ++Ub) {
                    const bb = Bb[Ub];
                    ++vb[Bb[Ub] = bb && jb + 1 - bb]
                  }
                  const Db = new Mb(yb << 1),
                    zb = Db.subarray(0, yb),
                    xb = Db.subarray(yb);
                  for (Lb[jb] = 0, Ub = jb; Ub > 0; --Ub) {
                    const bb = Lb[Ub];
                    eb(xb, Ub, bb, Lb[Ub - 1] = bb + vb[Ub] * (1 << jb - Ub))
                  }
                  for (Lb[0] != yb && Pb(0), Ub = 0; Ub < Ab; ++Ub) {
                    const bb = Bb[Ub];
                    if (bb) {
                      const ab = Lb[bb];
                      eb(zb, Ub, ab, Lb[bb] = ab + (1 << jb - bb))
                    }
                  }
                  return [ab, {
                    n: xb,
                    b: jb,
                    s: zb
                  }]
                })(bb, Ab);
                jb += Ab - (Ab = Eb[0]), ab.h = Ub = Eb[1]
              } else Ub || Pb(0);
              (zb ? Nb : pb)(bb.subarray(Ab, Ab += jb), Wb.subarray(Hb), Ub)
            }
            let Ib = bb[Ab++];
            if (Ib) {
              255 == Ib ? Ib = 32512 + (bb[Ab++] | bb[Ab++] << 8) : Ib > 127 && (Ib = Ib - 128 << 8 | bb[Ab++]);
              const Eb = bb[Ab++];
              3 & Eb && Pb(0);
              const Yb = [Zb, Db, yb];
              for (let Ub = 2; Ub > -1; --Ub) {
                const Bb = Eb >> 2 + (Ub << 1) & 3;
                if (1 == Bb) {
                  const ab = new Mb([0, 0, bb[Ab++]]);
                  Yb[Ub] = {
                    s: ab.subarray(2, 3),
                    n: ab.subarray(0, 1),
                    t: new Tb(ab.buffer, 0, 1),
                    b: 0
                  }
                } else 2 == Bb ? [Ab, Yb[Ub]] = kb(bb, Ab, 9 - (1 & Ub)) : 3 == Bb && (ab.t || Pb(0), Yb[Ub] = ab.t[Ub])
              }
              const [eb, vb, Xb] = ab.t = Yb, jb = bb[Lb - 1];
              jb || Pb(0);
              let zb = (Lb << 3) - 8 + Rb(jb) - Xb.b,
                pb = zb >> 3,
                Nb = 0,
                db = (bb[pb] | bb[pb + 1] << 8) >> (7 & zb) & (1 << Xb.b) - 1;
              pb = (zb -= vb.b) >> 3;
              let Fb = (bb[pb] | bb[pb + 1] << 8) >> (7 & zb) & (1 << vb.b) - 1;
              pb = (zb -= eb.b) >> 3;
              let hb = (bb[pb] | bb[pb + 1] << 8) >> (7 & zb) & (1 << eb.b) - 1;
              for (++Ib; --Ib;) {
                const Ub = Xb.s[db],
                  Ab = Xb.n[db],
                  Mb = eb.s[hb],
                  Tb = eb.n[hb],
                  Eb = vb.s[Fb],
                  Yb = vb.n[Fb];
                pb = (zb -= Eb) >> 3;
                const Bb = 1 << Eb;
                let Lb = Bb + ((bb[pb] | bb[pb + 1] << 8 | bb[pb + 2] << 16 | bb[pb + 3] << 24) >>> (7 & zb) & Bb - 1);
                pb = (zb -= fb[Mb]) >> 3;
                let jb = mb[Mb] + ((bb[pb] | bb[pb + 1] << 8 | bb[pb + 2] << 16) >> (7 & zb) & (1 << fb[Mb]) - 1);
                pb = (zb -= xb[Ub]) >> 3;
                const Rb = ib[Ub] + ((bb[pb] | bb[pb + 1] << 8 | bb[pb + 2] << 16) >> (7 & zb) & (1 << xb[Ub]) - 1);
                if ((zb < 0 || Hb + Rb > Wb.length || Nb + Rb + jb > Wb.length) && Pb(0), pb = (zb -= Ab) >> 3, db = Xb.t[db] + ((bb[pb] | bb[pb + 1] << 8) >> (7 & zb) & (1 << Ab) - 1), pb = (zb -= Tb) >> 3, hb = eb.t[hb] + ((bb[pb] | bb[pb + 1] << 8) >> (7 & zb) & (1 << Tb) - 1), pb = (zb -= Yb) >> 3, Fb = vb.t[Fb] + ((bb[pb] | bb[pb + 1] << 8) >> (7 & zb) & (1 << Yb) - 1), Lb > 3) ab.o[2] = ab.o[1], ab.o[1] = ab.o[0], ab.o[0] = Lb -= 3;
                else {
                  const bb = Lb - (0 != Rb);
                  bb ? (Lb = 3 == bb ? ab.o[0] - 1 : ab.o[bb], bb > 1 && (ab.o[2] = ab.o[1]), ab.o[1] = ab.o[0], ab.o[0] = Lb) : Lb = ab.o[0]
                }
                for (let bb = 0; bb < Rb; ++bb) Wb[Nb + bb] = Wb[Hb + bb];
                Nb += Rb, Hb += Rb;
                let kb = Nb - Lb;
                if (kb < 0) {
                  let bb = -kb;
                  const Ub = ab.e + kb;
                  Ub < 0 && Pb(4), bb > jb && (bb = jb);
                  for (let Ab = 0; Ab < bb; ++Ab) Wb[Nb + Ab] = ab.w[Ub + Ab];
                  Nb += bb, jb -= bb, kb = 0
                }
                for (let bb = 0; bb < jb; ++bb) Wb[Nb + bb] = Wb[kb + bb];
                Nb += jb
              }
              if (Nb != Hb)
                for (; Hb < Wb.length;) Wb[Nb++] = Wb[Hb++];
              else Nb = Wb.length;
              Ub ? ab.y += Nb : Wb = Bb(Wb, 0, Nb)
            } else if (Ub) {
              if (ab.y += Xb, Hb)
                for (let bb = 0; bb < Xb; ++bb) Wb[bb] = Wb[Hb + bb]
            } else Hb && (Wb = Bb(Wb, Hb));
            return ab.b = Lb, Wb
          }
          Pb(2)
        }
      };
    class Hb {
      output = null;
      decoded = 0;
      done = !1;
      st = null;
      parts = [];
      PY = 0;
      needed = 18;
      size;
      constructor(bb) {
        this.size = bb
      }
      push(bb) {
        if (this.done) return;
        if (this.parts.push(bb), this.PY += bb.length, this.PY < this.needed) return;
        const ab = ((bb, ab) => {
          if (1 == bb.length) return bb[0];
          const Ub = new Mb(ab);
          for (let Ab = 0, Mb = 0; Ab < bb.length; ++Ab) {
            const ab = bb[Ab];
            Ub.set(ab, Mb), Mb += ab.length
          }
          return Ub
        })(this.parts, this.PY);
        let Ub = this.st;
        if (!Ub) {
          const bb = jb(ab, new Mb(0));
          "number" != typeof bb && bb.u === this.size || Pb(0, `not a zstd frame of ${this.size} bytes`), Ub = this.st = jb(ab, 1), Ub.e = 0, this.output = Ub.w
        }
        for (;;) {
          const bb = ab.length - Ub.b;
          if (bb < 3) {
            this.needed = 3;
            break
          }
          const Ab = ab[Ub.b],
            Mb = Ab >> 1 & 3;
          3 == Mb && Pb(2);
          const Tb = Ab >> 3 | ab[Ub.b + 1] << 5 | ab[Ub.b + 2] << 13;
          Tb > Ub.m && Pb(0);
          const Eb = 1 == Mb ? 4 : 3 + Tb;
          if (bb < Eb) {
            this.needed = Eb;
            break
          }
          if (Wb(ab, Ub, Ub.w) || Pb(5), Ub.e = Ub.y, (Ub.y > Ub.u || Ub.l && Ub.y != Ub.u) && Pb(0), Ub.l) {
            this.done = !0;
            break
          }
        }
        this.decoded = Ub.y;
        const Ab = ab.subarray(Ub.b);
        this.parts = Ab.length ? [Ab] : [], this.PY = Ab.length, Ub.b = 0
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);