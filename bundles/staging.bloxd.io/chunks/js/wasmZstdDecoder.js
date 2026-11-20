(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var bb = __webpack_require__.u,
        ub = __webpack_require__.e,
        hb = {},
        Bb = {};
      __webpack_require__.u = function(ub) {
        return bb(ub) + (hb.hasOwnProperty(ub) ? "?" + hb[ub] : "")
      }, __webpack_require__.e = function(Ob) {
        return ub(Ob).catch((function(ub) {
          var Gb = Bb.hasOwnProperty(Ob) ? Bb[Ob] : 4;
          if (Gb < 1) {
            var Ub = bb(Ob);
            throw ub.message = "Loading chunk " + Ob + " failed after 4 retries.\n(" + Ub + ")", ub.request = Ub, hb[Ob] = "cache-bust=" + Date.now(), setTimeout((function() {
              delete Bb[Ob]
            }), 0), ub
          }
          return new Promise((function(bb) {
            var ub = 4 - Gb + 1;
            setTimeout((function() {
              var ub = "cache-bust=" + Date.now();
              hb[Ob] = ub, Bb[Ob] = Gb - 1, bb(__webpack_require__.e(Ob))
            }), function(bb) {
              return 500 * Math.pow(2, bb)
            }(ub))
          }))
        }))
      }
    }
  })();

  function bb(bb) {
    return bb instanceof Error ? bb.message : String(bb)
  }
  const ub = ArrayBuffer,
    hb = Uint8Array,
    Bb = Uint16Array,
    Ob = Int16Array,
    Gb = Int32Array,
    Ub = (bb, ub, Bb) => {
      if (hb.prototype.slice) return hb.prototype.slice.call(bb, ub, Bb);
      (null == ub || ub < 0) && (ub = 0), (null == Bb || Bb > bb.length) && (Bb = bb.length);
      const Ob = new hb(Bb - ub);
      return Ob.set(bb.subarray(ub, Bb)), Ob
    },
    Lb = (bb, ub, Bb, Ob) => {
      if (hb.prototype.fill) return hb.prototype.fill.call(bb, ub, Bb, Ob);
      for ((null == Bb || Bb < 0) && (Bb = 0), (null == Ob || Ob > bb.length) && (Ob = bb.length); Bb < Ob; ++Bb) bb[Bb] = ub;
      return bb
    },
    Yb = ["invalid zstd data", "window size too large (>2046MB)", "invalid block type", "FSE accuracy too high", "match distance too far back", "unexpected EOF"],
    Sb = (bb, ub, hb) => {
      const Bb = new Error(ub || Yb[bb]);
      if (Bb.code = bb, Error.captureStackTrace && Error.captureStackTrace(Bb, Sb), !hb) throw Bb;
      return Bb
    },
    ab = (bb, ub, hb) => {
      let Bb = 0,
        Ob = 0;
      for (; Bb < hb; ++Bb) Ob |= bb[ub++] << (Bb << 3);
      return Ob
    },
    Hb = (bb, ub) => {
      const Bb = bb[0] | bb[1] << 8 | bb[2] << 16;
      if (3126568 == Bb && 253 == bb[3]) {
        const Bb = bb[4],
          Ob = Bb >> 5 & 1,
          Ub = Bb >> 2 & 1,
          Lb = 3 & Bb,
          Yb = Bb >> 6;
        8 & Bb && Sb(0);
        let Hb = 6 - Ob;
        const wb = 3 == Lb ? 4 : Lb,
          Zb = ab(bb, Hb, wb);
        Hb += wb;
        const Xb = Yb ? 1 << Yb : Ob,
          pb = ab(bb, Hb, Xb) + (1 == Yb && 256);
        let ob = pb;
        if (!Ob) {
          const ub = 1 << 10 + (bb[5] >> 3);
          ob = ub + (ub >> 3) * (7 & bb[5])
        }
        ob > 2145386496 && Sb(1);
        const Ab = new hb((1 == ub ? pb || ob : ub ? 0 : ob) + 12);
        return Ab[0] = 1, Ab[4] = 4, Ab[8] = 8, {
          b: Hb + Xb,
          y: 0,
          l: 0,
          d: Zb,
          w: ub && 1 != ub ? ub : Ab.subarray(12),
          e: ob,
          o: new Gb(Ab.buffer, 0, 3),
          u: pb,
          c: Ub,
          m: Math.min(131072, ob)
        }
      }
      if (25481893 == (Bb >> 4 | bb[3] << 20)) return 8 + (((Ob = bb)[Ub = 4] | Ob[Ub + 1] << 8 | Ob[Ub + 2] << 16 | Ob[Ub + 3] << 24) >>> 0);
      var Ob, Ub;
      Sb(0)
    },
    wb = bb => {
      let ub = 0;
      for (; 1 << ub <= bb; ++ub);
      return ub - 1
    },
    Zb = (bb, Gb, Ub) => {
      let Lb = 4 + (Gb << 3);
      const Yb = 5 + (15 & bb[Gb]);
      Yb > Ub && Sb(3);
      const ab = 1 << Yb;
      let Hb = ab,
        Zb = -1,
        Xb = -1,
        pb = -1,
        ob = ab;
      const Ab = new ub(512 + (ab << 2)),
        lb = new Ob(Ab, 0, 256),
        Kb = new Bb(Ab, 0, 256),
        Wb = new Bb(Ab, 512, ab),
        Cb = 512 + (ab << 1),
        db = new hb(Ab, Cb, ab),
        rb = new hb(Ab, Cb + ab);
      for (; Zb < 255 && Hb > 0;) {
        const ub = wb(Hb + 1),
          hb = Lb >> 3,
          Bb = (1 << ub + 1) - 1;
        let Ob = (bb[hb] | bb[hb + 1] << 8 | bb[hb + 2] << 16) >> (7 & Lb) & Bb;
        const Gb = (1 << ub) - 1,
          Ub = Bb - Hb - 1,
          Yb = Ob & Gb;
        if (Yb < Ub ? (Lb += ub, Ob = Yb) : (Lb += ub + 1, Ob > Gb && (Ob -= Ub)), lb[++Zb] = --Ob, -1 == Ob ? (Hb += Ob, db[--ob] = Zb) : Hb -= Ob, !Ob)
          do {
            const ub = Lb >> 3;
            Xb = (bb[ub] | bb[ub + 1] << 8) >> (7 & Lb) & 3, Lb += 2, Zb += Xb
          } while (3 == Xb)
      }(Zb > 255 || Hb) && Sb(0);
      let jb = 0;
      const nb = (ab >> 1) + (ab >> 3) + 3,
        Db = ab - 1;
      for (let ub = 0; ub <= Zb; ++ub) {
        const bb = lb[ub];
        if (bb < 1) Kb[ub] = -bb;
        else
          for (pb = 0; pb < bb; ++pb) {
            db[jb] = ub;
            do {
              jb = jb + nb & Db
            } while (jb >= ob)
          }
      }
      for (jb && Sb(0), pb = 0; pb < ab; ++pb) {
        const bb = Kb[db[pb]]++,
          ub = rb[pb] = Yb - wb(bb);
        Wb[pb] = (bb << ub) - ab
      }
      return [Lb + 7 >> 3, {
        b: Yb,
        s: db,
        n: rb,
        t: Wb
      }]
    },
    Xb = Zb(new hb([81, 16, 99, 140, 49, 198, 24, 99, 12, 33, 196, 24, 99, 102, 102, 134, 70, 146, 4]), 0, 6)[1],
    pb = Zb(new hb([33, 20, 196, 24, 99, 140, 33, 132, 16, 66, 8, 33, 132, 16, 66, 8, 33, 68, 68, 68, 68, 68, 68, 68, 68, 36, 9]), 0, 6)[1],
    ob = Zb(new hb([32, 132, 16, 66, 102, 70, 68, 68, 68, 68, 36, 73, 2]), 0, 5)[1],
    Ab = (bb, ub) => {
      const hb = bb.length,
        Bb = new Gb(hb);
      for (let Ob = 0; Ob < hb; ++Ob) Bb[Ob] = ub, ub += 1 << bb[Ob];
      return Bb
    },
    lb = new hb(new Gb([0, 0, 0, 0, 16843009, 50528770, 134678020, 202050057, 269422093]).buffer, 0, 36),
    Kb = Ab(lb, 0),
    Wb = new hb(new Gb([0, 0, 0, 0, 0, 0, 0, 0, 16843009, 50528770, 117769220, 185207048, 252579084, 16]).buffer, 0, 53),
    Cb = Ab(Wb, 3),
    db = (bb, ub, hb) => {
      const Bb = bb.length,
        Ob = ub.length,
        Gb = bb[Bb - 1],
        Ub = (1 << hb.b) - 1,
        Lb = -hb.b;
      Gb || Sb(0);
      let Yb = 0,
        ab = hb.b,
        Hb = (Bb << 3) - 8 + wb(Gb) - ab,
        Zb = -1;
      for (; Hb > Lb && Zb < Ob;) {
        const Bb = Hb >> 3;
        Yb = (Yb << ab | (bb[Bb] | bb[Bb + 1] << 8 | bb[Bb + 2] << 16) >> (7 & Hb)) & Ub, ub[++Zb] = hb.s[Yb], Hb -= ab = hb.n[Yb]
      }
      Hb == Lb && Zb + 1 == Ob || Sb(0)
    },
    rb = (bb, ub, hb) => {
      let Bb = 6;
      const Ob = ub.length + 3 >> 2,
        Gb = Ob << 1,
        Ub = Ob + Gb;
      db(bb.subarray(Bb, Bb += bb[0] | bb[1] << 8), ub.subarray(0, Ob), hb), db(bb.subarray(Bb, Bb += bb[2] | bb[3] << 8), ub.subarray(Ob, Gb), hb), db(bb.subarray(Bb, Bb += bb[4] | bb[5] << 8), ub.subarray(Gb, Ub), hb), db(bb.subarray(Bb), ub.subarray(Ub), hb)
    },
    jb = (bb, ub, Ob) => {
      let Gb = ub.b;
      const Yb = bb[Gb],
        ab = Yb >> 1 & 3;
      ub.l = 1 & Yb;
      const Hb = Yb >> 3 | bb[Gb + 1] << 5 | bb[Gb + 2] << 13,
        Ab = (Gb += 3) + Hb;
      if (1 == ab) {
        if (Gb >= bb.length) return;
        return ub.b = Gb + 1, Ob ? (Lb(Ob, bb[Gb], ub.y, ub.y += Hb), Ob) : Lb(new hb(Hb), bb[Gb])
      }
      if (!(Ab > bb.length)) {
        if (0 == ab) return ub.b = Ab, Ob ? (Ob.set(bb.subarray(Gb, Ab), ub.y), ub.y += Hb, Ob) : Ub(bb, Gb, Ab);
        if (2 == ab) {
          const Yb = bb[Gb],
            ab = 3 & Yb,
            Hb = Yb >> 2 & 3;
          let jb = Yb >> 4,
            nb = 0,
            Db = 0;
          ab < 2 ? 1 & Hb ? jb |= bb[++Gb] << 4 | (2 & Hb && bb[++Gb] << 12) : jb = Yb >> 3 : (Db = Hb, Hb < 2 ? (jb |= (63 & bb[++Gb]) << 4, nb = bb[Gb] >> 6 | bb[++Gb] << 2) : 2 == Hb ? (jb |= bb[++Gb] << 4 | (3 & bb[++Gb]) << 12, nb = bb[Gb] >> 2 | bb[++Gb] << 6) : (jb |= bb[++Gb] << 4 | (63 & bb[++Gb]) << 12, nb = bb[Gb] >> 6 | bb[++Gb] << 2 | bb[++Gb] << 10)), ++Gb;
          let xb = Ob ? Ob.subarray(ub.y, ub.y + ub.m) : new hb(ub.m),
            zb = xb.length - jb;
          if (zb < 0 && Sb(0), 0 == ab) xb.set(bb.subarray(Gb, Gb += jb), zb);
          else if (1 == ab) Lb(xb, bb[Gb++], zb);
          else {
            let Ob = ub.h;
            if (2 == ab) {
              const Ub = ((bb, ub) => {
                let Ob = 0,
                  Gb = -1;
                const Ub = new hb(292),
                  Yb = bb[ub],
                  ab = Ub.subarray(0, 256),
                  Hb = Ub.subarray(256, 268),
                  Xb = new Bb(Ub.buffer, 268);
                if (Yb < 128) {
                  const [hb, Bb] = Zb(bb, ub + 1, 6), Ob = hb << 3, Ub = bb[ub += Yb];
                  Ub || Sb(0);
                  let Lb = 0,
                    Hb = 0,
                    Xb = Bb.b,
                    pb = Xb,
                    ob = (++ub << 3) - 8 + wb(Ub);
                  for (; Gb > 254 && Sb(0), ob -= Xb, !(ob < Ob);) {
                    let ub = ob >> 3;
                    if (Lb += (bb[ub] | bb[ub + 1] << 8) >> (7 & ob) & (1 << Xb) - 1, ab[++Gb] = Bb.s[Lb], ob -= pb, ob < Ob) break;
                    ub = ob >> 3, Hb += (bb[ub] | bb[ub + 1] << 8) >> (7 & ob) & (1 << pb) - 1, ab[++Gb] = Bb.s[Hb], Xb = Bb.n[Lb], Lb = Bb.t[Lb], pb = Bb.n[Hb], Hb = Bb.t[Hb]
                  }++Gb > 255 && Sb(0)
                } else {
                  for (Gb = Yb - 127; Ob < Gb; Ob += 2) {
                    const hb = bb[++ub];
                    ab[Ob] = hb >> 4, ab[Ob + 1] = 15 & hb
                  }++ub
                }
                let pb = 0;
                for (Ob = 0; Ob < Gb; ++Ob) {
                  const bb = ab[Ob];
                  bb > 11 && Sb(0), pb += bb && 1 << bb - 1
                }
                const ob = wb(pb) + 1,
                  Ab = 1 << ob,
                  lb = Ab - pb;
                for (lb & lb - 1 && Sb(0), ab[Gb++] = wb(lb) + 1, Ob = 0; Ob < Gb; ++Ob) {
                  const bb = ab[Ob];
                  ++Hb[ab[Ob] = bb && ob + 1 - bb]
                }
                const Kb = new hb(Ab << 1),
                  Wb = Kb.subarray(0, Ab),
                  Cb = Kb.subarray(Ab);
                for (Xb[ob] = 0, Ob = ob; Ob > 0; --Ob) {
                  const bb = Xb[Ob];
                  Lb(Cb, Ob, bb, Xb[Ob - 1] = bb + Hb[Ob] * (1 << ob - Ob))
                }
                for (Xb[0] != Ab && Sb(0), Ob = 0; Ob < Gb; ++Ob) {
                  const bb = ab[Ob];
                  if (bb) {
                    const ub = Xb[bb];
                    Lb(Wb, Ob, ub, Xb[bb] = ub + (1 << ob - bb))
                  }
                }
                return [ub, {
                  n: Cb,
                  b: ob,
                  s: Wb
                }]
              })(bb, Gb);
              nb += Gb - (Gb = Ub[0]), ub.h = Ob = Ub[1]
            } else Ob || Sb(0);
            (Db ? rb : db)(bb.subarray(Gb, Gb += nb), xb.subarray(zb), Ob)
          }
          let gb = bb[Gb++];
          if (gb) {
            255 == gb ? gb = 32512 + (bb[Gb++] | bb[Gb++] << 8) : gb > 127 && (gb = gb - 128 << 8 | bb[Gb++]);
            const Lb = bb[Gb++];
            3 & Lb && Sb(0);
            const Yb = [pb, ob, Xb];
            for (let Ob = 2; Ob > -1; --Ob) {
              const Ub = Lb >> 2 + (Ob << 1) & 3;
              if (1 == Ub) {
                const ub = new hb([0, 0, bb[Gb++]]);
                Yb[Ob] = {
                  s: ub.subarray(2, 3),
                  n: ub.subarray(0, 1),
                  t: new Bb(ub.buffer, 0, 1),
                  b: 0
                }
              } else 2 == Ub ? [Gb, Yb[Ob]] = Zb(bb, Gb, 9 - (1 & Ob)) : 3 == Ub && (ub.t || Sb(0), Yb[Ob] = ub.t[Ob])
            }
            const [ab, Hb, db] = ub.t = Yb, rb = bb[Ab - 1];
            rb || Sb(0);
            let jb = (Ab << 3) - 8 + wb(rb) - db.b,
              nb = jb >> 3,
              Db = 0,
              ib = (bb[nb] | bb[nb + 1] << 8) >> (7 & jb) & (1 << db.b) - 1;
            nb = (jb -= Hb.b) >> 3;
            let vb = (bb[nb] | bb[nb + 1] << 8) >> (7 & jb) & (1 << Hb.b) - 1;
            nb = (jb -= ab.b) >> 3;
            let tb = (bb[nb] | bb[nb + 1] << 8) >> (7 & jb) & (1 << ab.b) - 1;
            for (++gb; --gb;) {
              const hb = db.s[ib],
                Bb = db.n[ib],
                Ob = ab.s[tb],
                Gb = ab.n[tb],
                Ub = Hb.s[vb],
                Lb = Hb.n[vb];
              nb = (jb -= Ub) >> 3;
              const Yb = 1 << Ub;
              let wb = Yb + ((bb[nb] | bb[nb + 1] << 8 | bb[nb + 2] << 16 | bb[nb + 3] << 24) >>> (7 & jb) & Yb - 1);
              nb = (jb -= Wb[Ob]) >> 3;
              let Zb = Cb[Ob] + ((bb[nb] | bb[nb + 1] << 8 | bb[nb + 2] << 16) >> (7 & jb) & (1 << Wb[Ob]) - 1);
              nb = (jb -= lb[hb]) >> 3;
              const Xb = Kb[hb] + ((bb[nb] | bb[nb + 1] << 8 | bb[nb + 2] << 16) >> (7 & jb) & (1 << lb[hb]) - 1);
              if ((jb < 0 || zb + Xb > xb.length || Db + Xb + Zb > xb.length) && Sb(0), nb = (jb -= Bb) >> 3, ib = db.t[ib] + ((bb[nb] | bb[nb + 1] << 8) >> (7 & jb) & (1 << Bb) - 1), nb = (jb -= Gb) >> 3, tb = ab.t[tb] + ((bb[nb] | bb[nb + 1] << 8) >> (7 & jb) & (1 << Gb) - 1), nb = (jb -= Lb) >> 3, vb = Hb.t[vb] + ((bb[nb] | bb[nb + 1] << 8) >> (7 & jb) & (1 << Lb) - 1), wb > 3) ub.o[2] = ub.o[1], ub.o[1] = ub.o[0], ub.o[0] = wb -= 3;
              else {
                const bb = wb - (0 != Xb);
                bb ? (wb = 3 == bb ? ub.o[0] - 1 : ub.o[bb], bb > 1 && (ub.o[2] = ub.o[1]), ub.o[1] = ub.o[0], ub.o[0] = wb) : wb = ub.o[0]
              }
              for (let bb = 0; bb < Xb; ++bb) xb[Db + bb] = xb[zb + bb];
              Db += Xb, zb += Xb;
              let pb = Db - wb;
              if (pb < 0) {
                let bb = -pb;
                const hb = ub.e + pb;
                hb < 0 && Sb(4), bb > Zb && (bb = Zb);
                for (let Bb = 0; Bb < bb; ++Bb) xb[Db + Bb] = ub.w[hb + Bb];
                Db += bb, Zb -= bb, pb = 0
              }
              for (let bb = 0; bb < Zb; ++bb) xb[Db + bb] = xb[pb + bb];
              Db += Zb
            }
            if (Db != zb)
              for (; zb < xb.length;) xb[Db++] = xb[zb++];
            else Db = xb.length;
            Ob ? ub.y += Db : xb = Ub(xb, 0, Db)
          } else if (Ob) {
            if (ub.y += jb, zb)
              for (let bb = 0; bb < jb; ++bb) xb[bb] = xb[zb + bb]
          } else zb && (xb = Ub(xb, zb));
          return ub.b = Ab, xb
        }
        Sb(2)
      }
    };
  class nb {
    output = null;
    decoded = 0;
    done = !1;
    st = null;
    parts = [];
    MS = 0;
    needed = 18;
    size;
    constructor(bb) {
      this.size = bb
    }
    push(bb) {
      if (this.done) return;
      if (this.parts.push(bb), this.MS += bb.length, this.MS < this.needed) return;
      const ub = ((bb, ub) => {
        if (1 == bb.length) return bb[0];
        const Bb = new hb(ub);
        for (let hb = 0, Ob = 0; hb < bb.length; ++hb) {
          const ub = bb[hb];
          Bb.set(ub, Ob), Ob += ub.length
        }
        return Bb
      })(this.parts, this.MS);
      let Bb = this.st;
      if (!Bb) {
        const bb = Hb(ub, new hb(0));
        "number" != typeof bb && bb.u === this.size || Sb(0, `not a zstd frame of ${this.size} bytes`), Bb = this.st = Hb(ub, 1), Bb.e = 0, this.output = Bb.w
      }
      for (;;) {
        const bb = ub.length - Bb.b;
        if (bb < 3) {
          this.needed = 3;
          break
        }
        const hb = ub[Bb.b],
          Ob = hb >> 1 & 3;
        3 == Ob && Sb(2);
        const Gb = hb >> 3 | ub[Bb.b + 1] << 5 | ub[Bb.b + 2] << 13;
        Gb > Bb.m && Sb(0), 0 == Ob && Bb.y + Gb > Bb.u && Sb(0);
        const Ub = 1 == Ob ? 4 : 3 + Gb;
        if (bb < Ub) {
          this.needed = Ub;
          break
        }
        if (jb(ub, Bb, Bb.w) || Sb(5), Bb.e = Bb.y, (Bb.y > Bb.u || Bb.l && Bb.y != Bb.u) && Sb(0), Bb.l) {
          this.done = !0;
          break
        }
      }
      this.decoded = Bb.y;
      const Ob = ub.subarray(Bb.b);
      this.parts = Ob.length ? [Ob] : [], this.MS = Ob.length, Bb.b = 0
    }
  }
  class Db {
    post;
    href = "";
    eZ = null;
    given = 0;
    stopped = !1;
    constructor(bb) {
      this.post = bb
    }
    take(ub) {
      if (!this.stopped) try {
        this.answer(ub)
      } catch (hb) {
        this.stop(hb instanceof RangeError ? `out of memory decoding ${this.href}: ${bb(hb)}` : `${this.href} did not decode: ${bb(hb)}`)
      }
    }
    answer(bb) {
      if (null === this.eZ) {
        const [ub, hb] = bb;
        return this.href = ub, void(this.eZ = new nb(hb))
      }
      if (null === bb) return void this.stop(`${this.href} ended before its module did`);
      const ub = this.eZ;
      ub.push(bb);
      const {
        output: hb,
        decoded: Bb
      } = ub;
      if (null !== hb && Bb > this.given) {
        const bb = hb.slice(this.given, Bb).buffer;
        this.given = Bb, this.post(bb, [bb])
      }
      ub.done && this.stop(!0)
    }
    stop(bb) {
      this.stopped = !0, this.post(bb)
    }
  }
  const xb = globalThis.WorkerGlobalScope;
  if (void 0 !== xb && globalThis instanceof xb) {
    const bb = globalThis,
      ub = new Db((function(ub) {
        let hb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        bb.postMessage(ub, hb)
      }));
    bb.addEventListener("message", (bb => {
      let {
        data: hb
      } = bb;
      ub.take(hb)
    }))
  }
})();