export const id = 64;
export const ids = [64];
export const modules = {
  40600: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      ZstdErrorCode: () => fb,
      ZstdFrameDecoder: () => tb
    });
    const kb = ArrayBuffer,
      Wb = Uint8Array,
      ab = Uint16Array,
      Tb = Int16Array,
      Ub = Int32Array,
      Ib = (bb, cb, sb) => {
        if (Wb.prototype.slice) return Wb.prototype.slice.call(bb, cb, sb);
        (null == cb || cb < 0) && (cb = 0), (null == sb || sb > bb.length) && (sb = bb.length);
        const kb = new Wb(sb - cb);
        return kb.set(bb.subarray(cb, sb)), kb
      },
      Hb = (bb, cb, sb, kb) => {
        if (Wb.prototype.fill) return Wb.prototype.fill.call(bb, cb, sb, kb);
        for ((null == sb || sb < 0) && (sb = 0), (null == kb || kb > bb.length) && (kb = bb.length); sb < kb; ++sb) bb[sb] = cb;
        return bb
      },
      fb = {
        InvalidData: 0,
        WindowSizeTooLarge: 1,
        InvalidBlockType: 2,
        FSEAccuracyTooHigh: 3,
        DistanceTooFarBack: 4,
        UnexpectedEOF: 5
      },
      Mb = ["invalid zstd data", "window size too large (>2046MB)", "invalid block type", "FSE accuracy too high", "match distance too far back", "unexpected EOF"],
      Xb = (bb, cb, sb) => {
        const kb = new Error(cb || Mb[bb]);
        if (kb.code = bb, Error.captureStackTrace && Error.captureStackTrace(kb, Xb), !sb) throw kb;
        return kb
      },
      nb = (bb, cb, sb) => {
        let kb = 0,
          Wb = 0;
        for (; kb < sb; ++kb) Wb |= bb[cb++] << (kb << 3);
        return Wb
      },
      mb = (bb, cb) => {
        const sb = bb[0] | bb[1] << 8 | bb[2] << 16;
        if (3126568 == sb && 253 == bb[3]) {
          const sb = bb[4],
            kb = sb >> 5 & 1,
            ab = sb >> 2 & 1,
            Tb = 3 & sb,
            Ib = sb >> 6;
          8 & sb && Xb(0);
          let Hb = 6 - kb;
          const fb = 3 == Tb ? 4 : Tb,
            Mb = nb(bb, Hb, fb);
          Hb += fb;
          const mb = Ib ? 1 << Ib : kb,
            lb = nb(bb, Hb, mb) + (1 == Ib && 256);
          let Qb = lb;
          if (!kb) {
            const cb = 1 << 10 + (bb[5] >> 3);
            Qb = cb + (cb >> 3) * (7 & bb[5])
          }
          Qb > 2145386496 && Xb(1);
          const eb = new Wb((1 == cb ? lb || Qb : cb ? 0 : Qb) + 12);
          return eb[0] = 1, eb[4] = 4, eb[8] = 8, {
            b: Hb + mb,
            y: 0,
            l: 0,
            d: Mb,
            w: cb && 1 != cb ? cb : eb.subarray(12),
            e: Qb,
            o: new Ub(eb.buffer, 0, 3),
            u: lb,
            c: ab,
            m: Math.min(131072, Qb)
          }
        }
        if (25481893 == (sb >> 4 | bb[3] << 20)) return 8 + (((kb = bb)[ab = 4] | kb[ab + 1] << 8 | kb[ab + 2] << 16 | kb[ab + 3] << 24) >>> 0);
        var kb, ab;
        Xb(0)
      },
      lb = bb => {
        let cb = 0;
        for (; 1 << cb <= bb; ++cb);
        return cb - 1
      },
      Qb = (bb, cb, sb) => {
        let Ub = 4 + (cb << 3);
        const Ib = 5 + (15 & bb[cb]);
        Ib > sb && Xb(3);
        const Hb = 1 << Ib;
        let fb = Hb,
          Mb = -1,
          nb = -1,
          mb = -1,
          Qb = Hb;
        const eb = new kb(512 + (Hb << 2)),
          Cb = new Tb(eb, 0, 256),
          Nb = new ab(eb, 0, 256),
          Vb = new ab(eb, 512, Hb),
          Lb = 512 + (Hb << 1),
          ub = new Wb(eb, Lb, Hb),
          Yb = new Wb(eb, Lb + Hb);
        for (; Mb < 255 && fb > 0;) {
          const cb = lb(fb + 1),
            sb = Ub >> 3,
            kb = (1 << cb + 1) - 1;
          let Wb = (bb[sb] | bb[sb + 1] << 8 | bb[sb + 2] << 16) >> (7 & Ub) & kb;
          const ab = (1 << cb) - 1,
            Tb = kb - fb - 1,
            Ib = Wb & ab;
          if (Ib < Tb ? (Ub += cb, Wb = Ib) : (Ub += cb + 1, Wb > ab && (Wb -= Tb)), Cb[++Mb] = --Wb, -1 == Wb ? (fb += Wb, ub[--Qb] = Mb) : fb -= Wb, !Wb)
            do {
              const cb = Ub >> 3;
              nb = (bb[cb] | bb[cb + 1] << 8) >> (7 & Ub) & 3, Ub += 2, Mb += nb
            } while (3 == nb)
        }(Mb > 255 || fb) && Xb(0);
        let hb = 0;
        const Jb = (Hb >> 1) + (Hb >> 3) + 3,
          gb = Hb - 1;
        for (let kb = 0; kb <= Mb; ++kb) {
          const bb = Cb[kb];
          if (bb < 1) Nb[kb] = -bb;
          else
            for (mb = 0; mb < bb; ++mb) {
              ub[hb] = kb;
              do {
                hb = hb + Jb & gb
              } while (hb >= Qb)
            }
        }
        for (hb && Xb(0), mb = 0; mb < Hb; ++mb) {
          const bb = Nb[ub[mb]]++,
            cb = Yb[mb] = Ib - lb(bb);
          Vb[mb] = (bb << cb) - Hb
        }
        return [Ub + 7 >> 3, {
          b: Ib,
          s: ub,
          n: Yb,
          t: Vb
        }]
      },
      eb = Qb(new Wb([81, 16, 99, 140, 49, 198, 24, 99, 12, 33, 196, 24, 99, 102, 102, 134, 70, 146, 4]), 0, 6)[1],
      Cb = Qb(new Wb([33, 20, 196, 24, 99, 140, 33, 132, 16, 66, 8, 33, 132, 16, 66, 8, 33, 68, 68, 68, 68, 68, 68, 68, 68, 36, 9]), 0, 6)[1],
      Nb = Qb(new Wb([32, 132, 16, 66, 102, 70, 68, 68, 68, 68, 36, 73, 2]), 0, 5)[1],
      Vb = (bb, cb) => {
        const sb = bb.length,
          kb = new Ub(sb);
        for (let Wb = 0; Wb < sb; ++Wb) kb[Wb] = cb, cb += 1 << bb[Wb];
        return kb
      },
      Lb = new Wb(new Ub([0, 0, 0, 0, 16843009, 50528770, 134678020, 202050057, 269422093]).buffer, 0, 36),
      ub = Vb(Lb, 0),
      Yb = new Wb(new Ub([0, 0, 0, 0, 0, 0, 0, 0, 16843009, 50528770, 117769220, 185207048, 252579084, 16]).buffer, 0, 53),
      hb = Vb(Yb, 3),
      Jb = (bb, cb, sb) => {
        const kb = bb.length,
          Wb = cb.length,
          ab = bb[kb - 1],
          Tb = (1 << sb.b) - 1,
          Ub = -sb.b;
        ab || Xb(0);
        let Ib = 0,
          Hb = sb.b,
          fb = (kb << 3) - 8 + lb(ab) - Hb,
          Mb = -1;
        for (; fb > Ub && Mb < Wb;) {
          const kb = fb >> 3;
          Ib = (Ib << Hb | (bb[kb] | bb[kb + 1] << 8 | bb[kb + 2] << 16) >> (7 & fb)) & Tb, cb[++Mb] = sb.s[Ib], fb -= Hb = sb.n[Ib]
        }
        fb == Ub && Mb + 1 == Wb || Xb(0)
      },
      gb = (bb, cb, sb) => {
        let kb = 6;
        const Wb = cb.length + 3 >> 2,
          ab = Wb << 1,
          Tb = Wb + ab;
        Jb(bb.subarray(kb, kb += bb[0] | bb[1] << 8), cb.subarray(0, Wb), sb), Jb(bb.subarray(kb, kb += bb[2] | bb[3] << 8), cb.subarray(Wb, ab), sb), Jb(bb.subarray(kb, kb += bb[4] | bb[5] << 8), cb.subarray(ab, Tb), sb), Jb(bb.subarray(kb), cb.subarray(Tb), sb)
      },
      Bb = (bb, cb, sb) => {
        let kb = cb.b;
        const Tb = bb[kb],
          Ub = Tb >> 1 & 3;
        cb.l = 1 & Tb;
        const fb = Tb >> 3 | bb[kb + 1] << 5 | bb[kb + 2] << 13,
          Mb = (kb += 3) + fb;
        if (1 == Ub) {
          if (kb >= bb.length) return;
          return cb.b = kb + 1, sb ? (Hb(sb, bb[kb], cb.y, cb.y += fb), sb) : Hb(new Wb(fb), bb[kb])
        }
        if (!(Mb > bb.length)) {
          if (0 == Ub) return cb.b = Mb, sb ? (sb.set(bb.subarray(kb, Mb), cb.y), cb.y += fb, sb) : Ib(bb, kb, Mb);
          if (2 == Ub) {
            const Tb = bb[kb],
              Ub = 3 & Tb,
              fb = Tb >> 2 & 3;
            let nb = Tb >> 4,
              mb = 0,
              Vb = 0;
            Ub < 2 ? 1 & fb ? nb |= bb[++kb] << 4 | (2 & fb && bb[++kb] << 12) : nb = Tb >> 3 : (Vb = fb, fb < 2 ? (nb |= (63 & bb[++kb]) << 4, mb = bb[kb] >> 6 | bb[++kb] << 2) : 2 == fb ? (nb |= bb[++kb] << 4 | (3 & bb[++kb]) << 12, mb = bb[kb] >> 2 | bb[++kb] << 6) : (nb |= bb[++kb] << 4 | (63 & bb[++kb]) << 12, mb = bb[kb] >> 6 | bb[++kb] << 2 | bb[++kb] << 10)), ++kb;
            let Bb = sb ? sb.subarray(cb.y, cb.y + cb.m) : new Wb(cb.m),
              tb = Bb.length - nb;
            if (tb < 0 && Xb(0), 0 == Ub) Bb.set(bb.subarray(kb, kb += nb), tb);
            else if (1 == Ub) Hb(Bb, bb[kb++], tb);
            else {
              let sb = cb.h;
              if (2 == Ub) {
                const Tb = ((bb, cb) => {
                  let sb = 0,
                    kb = -1;
                  const Tb = new Wb(292),
                    Ub = bb[cb],
                    Ib = Tb.subarray(0, 256),
                    fb = Tb.subarray(256, 268),
                    Mb = new ab(Tb.buffer, 268);
                  if (Ub < 128) {
                    const [sb, Wb] = Qb(bb, cb + 1, 6), ab = sb << 3, Tb = bb[cb += Ub];
                    Tb || Xb(0);
                    let Hb = 0,
                      fb = 0,
                      Mb = Wb.b,
                      nb = Mb,
                      mb = (++cb << 3) - 8 + lb(Tb);
                    for (; kb > 254 && Xb(0), mb -= Mb, !(mb < ab);) {
                      let cb = mb >> 3;
                      if (Hb += (bb[cb] | bb[cb + 1] << 8) >> (7 & mb) & (1 << Mb) - 1, Ib[++kb] = Wb.s[Hb], mb -= nb, mb < ab) break;
                      cb = mb >> 3, fb += (bb[cb] | bb[cb + 1] << 8) >> (7 & mb) & (1 << nb) - 1, Ib[++kb] = Wb.s[fb], Mb = Wb.n[Hb], Hb = Wb.t[Hb], nb = Wb.n[fb], fb = Wb.t[fb]
                    }++kb > 255 && Xb(0)
                  } else {
                    for (kb = Ub - 127; sb < kb; sb += 2) {
                      const kb = bb[++cb];
                      Ib[sb] = kb >> 4, Ib[sb + 1] = 15 & kb
                    }++cb
                  }
                  let nb = 0;
                  for (sb = 0; sb < kb; ++sb) {
                    const bb = Ib[sb];
                    bb > 11 && Xb(0), nb += bb && 1 << bb - 1
                  }
                  const mb = lb(nb) + 1,
                    eb = 1 << mb,
                    Cb = eb - nb;
                  for (Cb & Cb - 1 && Xb(0), Ib[kb++] = lb(Cb) + 1, sb = 0; sb < kb; ++sb) {
                    const bb = Ib[sb];
                    ++fb[Ib[sb] = bb && mb + 1 - bb]
                  }
                  const Nb = new Wb(eb << 1),
                    Vb = Nb.subarray(0, eb),
                    Lb = Nb.subarray(eb);
                  for (Mb[mb] = 0, sb = mb; sb > 0; --sb) {
                    const bb = Mb[sb];
                    Hb(Lb, sb, bb, Mb[sb - 1] = bb + fb[sb] * (1 << mb - sb))
                  }
                  for (Mb[0] != eb && Xb(0), sb = 0; sb < kb; ++sb) {
                    const bb = Ib[sb];
                    if (bb) {
                      const cb = Mb[bb];
                      Hb(Vb, sb, cb, Mb[bb] = cb + (1 << mb - bb))
                    }
                  }
                  return [cb, {
                    n: Lb,
                    b: mb,
                    s: Vb
                  }]
                })(bb, kb);
                mb += kb - (kb = Tb[0]), cb.h = sb = Tb[1]
              } else sb || Xb(0);
              (Vb ? gb : Jb)(bb.subarray(kb, kb += mb), Bb.subarray(tb), sb)
            }
            let yb = bb[kb++];
            if (yb) {
              255 == yb ? yb = 32512 + (bb[kb++] | bb[kb++] << 8) : yb > 127 && (yb = yb - 128 << 8 | bb[kb++]);
              const Tb = bb[kb++];
              3 & Tb && Xb(0);
              const Ub = [Cb, Nb, eb];
              for (let sb = 2; sb > -1; --sb) {
                const Ib = Tb >> 2 + (sb << 1) & 3;
                if (1 == Ib) {
                  const cb = new Wb([0, 0, bb[kb++]]);
                  Ub[sb] = {
                    s: cb.subarray(2, 3),
                    n: cb.subarray(0, 1),
                    t: new ab(cb.buffer, 0, 1),
                    b: 0
                  }
                } else 2 == Ib ? [kb, Ub[sb]] = Qb(bb, kb, 9 - (1 & sb)) : 3 == Ib && (cb.t || Xb(0), Ub[sb] = cb.t[sb])
              }
              const [Hb, fb, nb] = cb.t = Ub, mb = bb[Mb - 1];
              mb || Xb(0);
              let Vb = (Mb << 3) - 8 + lb(mb) - nb.b,
                Jb = Vb >> 3,
                gb = 0,
                Pb = (bb[Jb] | bb[Jb + 1] << 8) >> (7 & Vb) & (1 << nb.b) - 1;
              Jb = (Vb -= fb.b) >> 3;
              let Db = (bb[Jb] | bb[Jb + 1] << 8) >> (7 & Vb) & (1 << fb.b) - 1;
              Jb = (Vb -= Hb.b) >> 3;
              let Eb = (bb[Jb] | bb[Jb + 1] << 8) >> (7 & Vb) & (1 << Hb.b) - 1;
              for (++yb; --yb;) {
                const sb = nb.s[Pb],
                  kb = nb.n[Pb],
                  Wb = Hb.s[Eb],
                  ab = Hb.n[Eb],
                  Tb = fb.s[Db],
                  Ub = fb.n[Db];
                Jb = (Vb -= Tb) >> 3;
                const Ib = 1 << Tb;
                let Mb = Ib + ((bb[Jb] | bb[Jb + 1] << 8 | bb[Jb + 2] << 16 | bb[Jb + 3] << 24) >>> (7 & Vb) & Ib - 1);
                Jb = (Vb -= Yb[Wb]) >> 3;
                let mb = hb[Wb] + ((bb[Jb] | bb[Jb + 1] << 8 | bb[Jb + 2] << 16) >> (7 & Vb) & (1 << Yb[Wb]) - 1);
                Jb = (Vb -= Lb[sb]) >> 3;
                const lb = ub[sb] + ((bb[Jb] | bb[Jb + 1] << 8 | bb[Jb + 2] << 16) >> (7 & Vb) & (1 << Lb[sb]) - 1);
                if ((Vb < 0 || tb + lb > Bb.length || gb + lb + mb > Bb.length) && Xb(0), Jb = (Vb -= kb) >> 3, Pb = nb.t[Pb] + ((bb[Jb] | bb[Jb + 1] << 8) >> (7 & Vb) & (1 << kb) - 1), Jb = (Vb -= ab) >> 3, Eb = Hb.t[Eb] + ((bb[Jb] | bb[Jb + 1] << 8) >> (7 & Vb) & (1 << ab) - 1), Jb = (Vb -= Ub) >> 3, Db = fb.t[Db] + ((bb[Jb] | bb[Jb + 1] << 8) >> (7 & Vb) & (1 << Ub) - 1), Mb > 3) cb.o[2] = cb.o[1], cb.o[1] = cb.o[0], cb.o[0] = Mb -= 3;
                else {
                  const bb = Mb - (0 != lb);
                  bb ? (Mb = 3 == bb ? cb.o[0] - 1 : cb.o[bb], bb > 1 && (cb.o[2] = cb.o[1]), cb.o[1] = cb.o[0], cb.o[0] = Mb) : Mb = cb.o[0]
                }
                for (let bb = 0; bb < lb; ++bb) Bb[gb + bb] = Bb[tb + bb];
                gb += lb, tb += lb;
                let Qb = gb - Mb;
                if (Qb < 0) {
                  let bb = -Qb;
                  const sb = cb.e + Qb;
                  sb < 0 && Xb(4), bb > mb && (bb = mb);
                  for (let kb = 0; kb < bb; ++kb) Bb[gb + kb] = cb.w[sb + kb];
                  gb += bb, mb -= bb, Qb = 0
                }
                for (let bb = 0; bb < mb; ++bb) Bb[gb + bb] = Bb[Qb + bb];
                gb += mb
              }
              if (gb != tb)
                for (; tb < Bb.length;) Bb[gb++] = Bb[tb++];
              else gb = Bb.length;
              sb ? cb.y += gb : Bb = Ib(Bb, 0, gb)
            } else if (sb) {
              if (cb.y += nb, tb)
                for (let bb = 0; bb < nb; ++bb) Bb[bb] = Bb[tb + bb]
            } else tb && (Bb = Ib(Bb, tb));
            return cb.b = Mb, Bb
          }
          Xb(2)
        }
      };
    class tb {
      output = null;
      decoded = 0;
      done = !1;
      st = null;
      parts = [];
      qU = 0;
      needed = 18;
      size;
      constructor(bb) {
        this.size = bb
      }
      push(bb) {
        if (this.done) return;
        if (this.parts.push(bb), this.qU += bb.length, this.qU < this.needed) return;
        const cb = ((bb, cb) => {
          if (1 == bb.length) return bb[0];
          const sb = new Wb(cb);
          for (let kb = 0, Wb = 0; kb < bb.length; ++kb) {
            const cb = bb[kb];
            sb.set(cb, Wb), Wb += cb.length
          }
          return sb
        })(this.parts, this.qU);
        let sb = this.st;
        if (!sb) {
          const bb = mb(cb, new Wb(0));
          "number" != typeof bb && bb.u === this.size || Xb(0, `not a zstd frame of ${this.size} bytes`), sb = this.st = mb(cb, 1), sb.e = 0, this.output = sb.w
        }
        for (;;) {
          const bb = cb.length - sb.b;
          if (bb < 3) {
            this.needed = 3;
            break
          }
          const kb = cb[sb.b],
            Wb = kb >> 1 & 3;
          3 == Wb && Xb(2);
          const ab = kb >> 3 | cb[sb.b + 1] << 5 | cb[sb.b + 2] << 13;
          ab > sb.m && Xb(0);
          const Tb = 1 == Wb ? 4 : 3 + ab;
          if (bb < Tb) {
            this.needed = Tb;
            break
          }
          if (Bb(cb, sb, sb.w) || Xb(5), sb.e = sb.y, (sb.y > sb.u || sb.l && sb.y != sb.u) && Xb(0), sb.l) {
            this.done = !0;
            break
          }
        }
        this.decoded = sb.y;
        const kb = cb.subarray(sb.b);
        this.parts = kb.length ? [kb] : [], this.qU = kb.length, sb.b = 0
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);