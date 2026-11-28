(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var bb = __webpack_require__.u,
        wb = __webpack_require__.e,
        Mb = {},
        eb = {};
      __webpack_require__.u = function(wb) {
        return bb(wb) + (Mb.hasOwnProperty(wb) ? "?" + Mb[wb] : "")
      }, __webpack_require__.e = function(Hb) {
        return wb(Hb).catch((function(wb) {
          var pb = eb.hasOwnProperty(Hb) ? eb[Hb] : 4;
          if (pb < 1) {
            var Vb = bb(Hb);
            if (wb.message = "Loading chunk " + Hb + " failed after 4 retries.\n(" + Vb + ")", wb.request = Vb, Mb[Hb] = "cache-bust=" + Date.now(), setTimeout((function() {
                delete eb[Hb]
              }), 0), "CSS_CHUNK_LOAD_FAILED" === wb.code) {
              var gb = __webpack_require__.miniCssF(Hb);
              wb.message = wb.message.replace("Loading chunk", "Loading CSS chunk").replace(Vb, gb), wb.request = gb
            }
            throw wb
          }
          return new Promise((function(bb) {
            var wb = 4 - pb + 1;
            setTimeout((function() {
              var wb = "cache-bust=" + Date.now();
              Mb[Hb] = wb, eb[Hb] = pb - 1, bb(__webpack_require__.e(Hb))
            }), function(bb) {
              return 500 * Math.pow(2, bb)
            }(wb))
          }))
        }))
      }
    }
  })();

  function bb(bb) {
    return bb instanceof Error ? bb.message : String(bb)
  }
  const wb = ArrayBuffer,
    Mb = Uint8Array,
    eb = Uint16Array,
    Hb = Int16Array,
    pb = Int32Array,
    Vb = (bb, wb, eb) => {
      if (Mb.prototype.slice) return Mb.prototype.slice.call(bb, wb, eb);
      (null == wb || wb < 0) && (wb = 0), (null == eb || eb > bb.length) && (eb = bb.length);
      const Hb = new Mb(eb - wb);
      return Hb.set(bb.subarray(wb, eb)), Hb
    },
    gb = (bb, wb, eb, Hb) => {
      if (Mb.prototype.fill) return Mb.prototype.fill.call(bb, wb, eb, Hb);
      for ((null == eb || eb < 0) && (eb = 0), (null == Hb || Hb > bb.length) && (Hb = bb.length); eb < Hb; ++eb) bb[eb] = wb;
      return bb
    },
    lb = ["invalid zstd data", "window size too large (>2046MB)", "invalid block type", "FSE accuracy too high", "match distance too far back", "unexpected EOF"],
    Lb = (bb, wb, Mb) => {
      const eb = new Error(wb || lb[bb]);
      if (eb.code = bb, Error.captureStackTrace && Error.captureStackTrace(eb, Lb), !Mb) throw eb;
      return eb
    },
    Ib = (bb, wb, Mb) => {
      let eb = 0,
        Hb = 0;
      for (; eb < Mb; ++eb) Hb |= bb[wb++] << (eb << 3);
      return Hb
    },
    Ob = (bb, wb) => {
      const eb = bb[0] | bb[1] << 8 | bb[2] << 16;
      if (3126568 == eb && 253 == bb[3]) {
        const eb = bb[4],
          Hb = eb >> 5 & 1,
          Vb = eb >> 2 & 1,
          gb = 3 & eb,
          lb = eb >> 6;
        8 & eb && Lb(0);
        let Ob = 6 - Hb;
        const Ub = 3 == gb ? 4 : gb,
          tb = Ib(bb, Ob, Ub);
        Ob += Ub;
        const Cb = lb ? 1 << lb : Hb,
          Eb = Ib(bb, Ob, Cb) + (1 == lb && 256);
        let Fb = Eb;
        if (!Hb) {
          const wb = 1 << 10 + (bb[5] >> 3);
          Fb = wb + (wb >> 3) * (7 & bb[5])
        }
        Fb > 2145386496 && Lb(1);
        const Bb = new Mb((1 == wb ? Eb || Fb : wb ? 0 : Fb) + 12);
        return Bb[0] = 1, Bb[4] = 4, Bb[8] = 8, {
          b: Ob + Cb,
          y: 0,
          l: 0,
          d: tb,
          w: wb && 1 != wb ? wb : Bb.subarray(12),
          e: Fb,
          o: new pb(Bb.buffer, 0, 3),
          u: Eb,
          c: Vb,
          m: Math.min(131072, Fb)
        }
      }
      if (25481893 == (eb >> 4 | bb[3] << 20)) return 8 + (((Hb = bb)[Vb = 4] | Hb[Vb + 1] << 8 | Hb[Vb + 2] << 16 | Hb[Vb + 3] << 24) >>> 0);
      var Hb, Vb;
      Lb(0)
    },
    Ub = bb => {
      let wb = 0;
      for (; 1 << wb <= bb; ++wb);
      return wb - 1
    },
    tb = (bb, pb, Vb) => {
      let gb = 4 + (pb << 3);
      const lb = 5 + (15 & bb[pb]);
      lb > Vb && Lb(3);
      const Ib = 1 << lb;
      let Ob = Ib,
        tb = -1,
        Cb = -1,
        Eb = -1,
        Fb = Ib;
      const Bb = new wb(512 + (Ib << 2)),
        sb = new Hb(Bb, 0, 256),
        mb = new eb(Bb, 0, 256),
        hb = new eb(Bb, 512, Ib),
        zb = 512 + (Ib << 1),
        Xb = new Mb(Bb, zb, Ib),
        xb = new Mb(Bb, zb + Ib);
      for (; tb < 255 && Ob > 0;) {
        const wb = Ub(Ob + 1),
          Mb = gb >> 3,
          eb = (1 << wb + 1) - 1;
        let Hb = (bb[Mb] | bb[Mb + 1] << 8 | bb[Mb + 2] << 16) >> (7 & gb) & eb;
        const pb = (1 << wb) - 1,
          Vb = eb - Ob - 1,
          lb = Hb & pb;
        if (lb < Vb ? (gb += wb, Hb = lb) : (gb += wb + 1, Hb > pb && (Hb -= Vb)), sb[++tb] = --Hb, -1 == Hb ? (Ob += Hb, Xb[--Fb] = tb) : Ob -= Hb, !Hb)
          do {
            const wb = gb >> 3;
            Cb = (bb[wb] | bb[wb + 1] << 8) >> (7 & gb) & 3, gb += 2, tb += Cb
          } while (3 == Cb)
      }(tb > 255 || Ob) && Lb(0);
      let jb = 0;
      const Kb = (Ib >> 1) + (Ib >> 3) + 3,
        rb = Ib - 1;
      for (let wb = 0; wb <= tb; ++wb) {
        const bb = sb[wb];
        if (bb < 1) mb[wb] = -bb;
        else
          for (Eb = 0; Eb < bb; ++Eb) {
            Xb[jb] = wb;
            do {
              jb = jb + Kb & rb
            } while (jb >= Fb)
          }
      }
      for (jb && Lb(0), Eb = 0; Eb < Ib; ++Eb) {
        const bb = mb[Xb[Eb]]++,
          wb = xb[Eb] = lb - Ub(bb);
        hb[Eb] = (bb << wb) - Ib
      }
      return [gb + 7 >> 3, {
        b: lb,
        s: Xb,
        n: xb,
        t: hb
      }]
    },
    Cb = tb(new Mb([81, 16, 99, 140, 49, 198, 24, 99, 12, 33, 196, 24, 99, 102, 102, 134, 70, 146, 4]), 0, 6)[1],
    Eb = tb(new Mb([33, 20, 196, 24, 99, 140, 33, 132, 16, 66, 8, 33, 132, 16, 66, 8, 33, 68, 68, 68, 68, 68, 68, 68, 68, 36, 9]), 0, 6)[1],
    Fb = tb(new Mb([32, 132, 16, 66, 102, 70, 68, 68, 68, 68, 36, 73, 2]), 0, 5)[1],
    Bb = (bb, wb) => {
      const Mb = bb.length,
        eb = new pb(Mb);
      for (let Hb = 0; Hb < Mb; ++Hb) eb[Hb] = wb, wb += 1 << bb[Hb];
      return eb
    },
    sb = new Mb(new pb([0, 0, 0, 0, 16843009, 50528770, 134678020, 202050057, 269422093]).buffer, 0, 36),
    mb = Bb(sb, 0),
    hb = new Mb(new pb([0, 0, 0, 0, 0, 0, 0, 0, 16843009, 50528770, 117769220, 185207048, 252579084, 16]).buffer, 0, 53),
    zb = Bb(hb, 3),
    Xb = (bb, wb, Mb) => {
      const eb = bb.length,
        Hb = wb.length,
        pb = bb[eb - 1],
        Vb = (1 << Mb.b) - 1,
        gb = -Mb.b;
      pb || Lb(0);
      let lb = 0,
        Ib = Mb.b,
        Ob = (eb << 3) - 8 + Ub(pb) - Ib,
        tb = -1;
      for (; Ob > gb && tb < Hb;) {
        const eb = Ob >> 3;
        lb = (lb << Ib | (bb[eb] | bb[eb + 1] << 8 | bb[eb + 2] << 16) >> (7 & Ob)) & Vb, wb[++tb] = Mb.s[lb], Ob -= Ib = Mb.n[lb]
      }
      Ob == gb && tb + 1 == Hb || Lb(0)
    },
    xb = (bb, wb, Mb) => {
      let eb = 6;
      const Hb = wb.length + 3 >> 2,
        pb = Hb << 1,
        Vb = Hb + pb;
      Xb(bb.subarray(eb, eb += bb[0] | bb[1] << 8), wb.subarray(0, Hb), Mb), Xb(bb.subarray(eb, eb += bb[2] | bb[3] << 8), wb.subarray(Hb, pb), Mb), Xb(bb.subarray(eb, eb += bb[4] | bb[5] << 8), wb.subarray(pb, Vb), Mb), Xb(bb.subarray(eb), wb.subarray(Vb), Mb)
    },
    jb = (bb, wb, Hb) => {
      let pb = wb.b;
      const lb = bb[pb],
        Ib = lb >> 1 & 3;
      wb.l = 1 & lb;
      const Ob = lb >> 3 | bb[pb + 1] << 5 | bb[pb + 2] << 13,
        Bb = (pb += 3) + Ob;
      if (1 == Ib) {
        if (pb >= bb.length) return;
        return wb.b = pb + 1, Hb ? (gb(Hb, bb[pb], wb.y, wb.y += Ob), Hb) : gb(new Mb(Ob), bb[pb])
      }
      if (!(Bb > bb.length)) {
        if (0 == Ib) return wb.b = Bb, Hb ? (Hb.set(bb.subarray(pb, Bb), wb.y), wb.y += Ob, Hb) : Vb(bb, pb, Bb);
        if (2 == Ib) {
          const lb = bb[pb],
            Ib = 3 & lb,
            Ob = lb >> 2 & 3;
          let jb = lb >> 4,
            Kb = 0,
            rb = 0;
          Ib < 2 ? 1 & Ob ? jb |= bb[++pb] << 4 | (2 & Ob && bb[++pb] << 12) : jb = lb >> 3 : (rb = Ob, Ob < 2 ? (jb |= (63 & bb[++pb]) << 4, Kb = bb[pb] >> 6 | bb[++pb] << 2) : 2 == Ob ? (jb |= bb[++pb] << 4 | (3 & bb[++pb]) << 12, Kb = bb[pb] >> 2 | bb[++pb] << 6) : (jb |= bb[++pb] << 4 | (63 & bb[++pb]) << 12, Kb = bb[pb] >> 6 | bb[++pb] << 2 | bb[++pb] << 10)), ++pb;
          let Rb = Hb ? Hb.subarray(wb.y, wb.y + wb.m) : new Mb(wb.m),
            Db = Rb.length - jb;
          if (Db < 0 && Lb(0), 0 == Ib) Rb.set(bb.subarray(pb, pb += jb), Db);
          else if (1 == Ib) gb(Rb, bb[pb++], Db);
          else {
            let Hb = wb.h;
            if (2 == Ib) {
              const Vb = ((bb, wb) => {
                let Hb = 0,
                  pb = -1;
                const Vb = new Mb(292),
                  lb = bb[wb],
                  Ib = Vb.subarray(0, 256),
                  Ob = Vb.subarray(256, 268),
                  Cb = new eb(Vb.buffer, 268);
                if (lb < 128) {
                  const [Mb, eb] = tb(bb, wb + 1, 6), Hb = Mb << 3, Vb = bb[wb += lb];
                  Vb || Lb(0);
                  let gb = 0,
                    Ob = 0,
                    Cb = eb.b,
                    Eb = Cb,
                    Fb = (++wb << 3) - 8 + Ub(Vb);
                  for (; pb > 254 && Lb(0), Fb -= Cb, !(Fb < Hb);) {
                    let wb = Fb >> 3;
                    if (gb += (bb[wb] | bb[wb + 1] << 8) >> (7 & Fb) & (1 << Cb) - 1, Ib[++pb] = eb.s[gb], Fb -= Eb, Fb < Hb) break;
                    wb = Fb >> 3, Ob += (bb[wb] | bb[wb + 1] << 8) >> (7 & Fb) & (1 << Eb) - 1, Ib[++pb] = eb.s[Ob], Cb = eb.n[gb], gb = eb.t[gb], Eb = eb.n[Ob], Ob = eb.t[Ob]
                  }++pb > 255 && Lb(0)
                } else {
                  for (pb = lb - 127; Hb < pb; Hb += 2) {
                    const Mb = bb[++wb];
                    Ib[Hb] = Mb >> 4, Ib[Hb + 1] = 15 & Mb
                  }++wb
                }
                let Eb = 0;
                for (Hb = 0; Hb < pb; ++Hb) {
                  const bb = Ib[Hb];
                  bb > 11 && Lb(0), Eb += bb && 1 << bb - 1
                }
                const Fb = Ub(Eb) + 1,
                  Bb = 1 << Fb,
                  sb = Bb - Eb;
                for (sb & sb - 1 && Lb(0), Ib[pb++] = Ub(sb) + 1, Hb = 0; Hb < pb; ++Hb) {
                  const bb = Ib[Hb];
                  ++Ob[Ib[Hb] = bb && Fb + 1 - bb]
                }
                const mb = new Mb(Bb << 1),
                  hb = mb.subarray(0, Bb),
                  zb = mb.subarray(Bb);
                for (Cb[Fb] = 0, Hb = Fb; Hb > 0; --Hb) {
                  const bb = Cb[Hb];
                  gb(zb, Hb, bb, Cb[Hb - 1] = bb + Ob[Hb] * (1 << Fb - Hb))
                }
                for (Cb[0] != Bb && Lb(0), Hb = 0; Hb < pb; ++Hb) {
                  const bb = Ib[Hb];
                  if (bb) {
                    const wb = Cb[bb];
                    gb(hb, Hb, wb, Cb[bb] = wb + (1 << Fb - bb))
                  }
                }
                return [wb, {
                  n: zb,
                  b: Fb,
                  s: hb
                }]
              })(bb, pb);
              Kb += pb - (pb = Vb[0]), wb.h = Hb = Vb[1]
            } else Hb || Lb(0);
            (rb ? xb : Xb)(bb.subarray(pb, pb += Kb), Rb.subarray(Db), Hb)
          }
          let cb = bb[pb++];
          if (cb) {
            255 == cb ? cb = 32512 + (bb[pb++] | bb[pb++] << 8) : cb > 127 && (cb = cb - 128 << 8 | bb[pb++]);
            const gb = bb[pb++];
            3 & gb && Lb(0);
            const lb = [Eb, Fb, Cb];
            for (let Hb = 2; Hb > -1; --Hb) {
              const Vb = gb >> 2 + (Hb << 1) & 3;
              if (1 == Vb) {
                const wb = new Mb([0, 0, bb[pb++]]);
                lb[Hb] = {
                  s: wb.subarray(2, 3),
                  n: wb.subarray(0, 1),
                  t: new eb(wb.buffer, 0, 1),
                  b: 0
                }
              } else 2 == Vb ? [pb, lb[Hb]] = tb(bb, pb, 9 - (1 & Hb)) : 3 == Vb && (wb.t || Lb(0), lb[Hb] = wb.t[Hb])
            }
            const [Ib, Ob, Xb] = wb.t = lb, xb = bb[Bb - 1];
            xb || Lb(0);
            let jb = (Bb << 3) - 8 + Ub(xb) - Xb.b,
              Kb = jb >> 3,
              rb = 0,
              Yb = (bb[Kb] | bb[Kb + 1] << 8) >> (7 & jb) & (1 << Xb.b) - 1;
            Kb = (jb -= Ob.b) >> 3;
            let Zb = (bb[Kb] | bb[Kb + 1] << 8) >> (7 & jb) & (1 << Ob.b) - 1;
            Kb = (jb -= Ib.b) >> 3;
            let fb = (bb[Kb] | bb[Kb + 1] << 8) >> (7 & jb) & (1 << Ib.b) - 1;
            for (++cb; --cb;) {
              const Mb = Xb.s[Yb],
                eb = Xb.n[Yb],
                Hb = Ib.s[fb],
                pb = Ib.n[fb],
                Vb = Ob.s[Zb],
                gb = Ob.n[Zb];
              Kb = (jb -= Vb) >> 3;
              const lb = 1 << Vb;
              let Ub = lb + ((bb[Kb] | bb[Kb + 1] << 8 | bb[Kb + 2] << 16 | bb[Kb + 3] << 24) >>> (7 & jb) & lb - 1);
              Kb = (jb -= hb[Hb]) >> 3;
              let tb = zb[Hb] + ((bb[Kb] | bb[Kb + 1] << 8 | bb[Kb + 2] << 16) >> (7 & jb) & (1 << hb[Hb]) - 1);
              Kb = (jb -= sb[Mb]) >> 3;
              const Cb = mb[Mb] + ((bb[Kb] | bb[Kb + 1] << 8 | bb[Kb + 2] << 16) >> (7 & jb) & (1 << sb[Mb]) - 1);
              if ((jb < 0 || Db + Cb > Rb.length || rb + Cb + tb > Rb.length) && Lb(0), Kb = (jb -= eb) >> 3, Yb = Xb.t[Yb] + ((bb[Kb] | bb[Kb + 1] << 8) >> (7 & jb) & (1 << eb) - 1), Kb = (jb -= pb) >> 3, fb = Ib.t[fb] + ((bb[Kb] | bb[Kb + 1] << 8) >> (7 & jb) & (1 << pb) - 1), Kb = (jb -= gb) >> 3, Zb = Ob.t[Zb] + ((bb[Kb] | bb[Kb + 1] << 8) >> (7 & jb) & (1 << gb) - 1), Ub > 3) wb.o[2] = wb.o[1], wb.o[1] = wb.o[0], wb.o[0] = Ub -= 3;
              else {
                const bb = Ub - (0 != Cb);
                bb ? (Ub = 3 == bb ? wb.o[0] - 1 : wb.o[bb], bb > 1 && (wb.o[2] = wb.o[1]), wb.o[1] = wb.o[0], wb.o[0] = Ub) : Ub = wb.o[0]
              }
              for (let bb = 0; bb < Cb; ++bb) Rb[rb + bb] = Rb[Db + bb];
              rb += Cb, Db += Cb;
              let Eb = rb - Ub;
              if (Eb < 0) {
                let bb = -Eb;
                const Mb = wb.e + Eb;
                Mb < 0 && Lb(4), bb > tb && (bb = tb);
                for (let eb = 0; eb < bb; ++eb) Rb[rb + eb] = wb.w[Mb + eb];
                rb += bb, tb -= bb, Eb = 0
              }
              for (let bb = 0; bb < tb; ++bb) Rb[rb + bb] = Rb[Eb + bb];
              rb += tb
            }
            if (rb != Db)
              for (; Db < Rb.length;) Rb[rb++] = Rb[Db++];
            else rb = Rb.length;
            Hb ? wb.y += rb : Rb = Vb(Rb, 0, rb)
          } else if (Hb) {
            if (wb.y += jb, Db)
              for (let bb = 0; bb < jb; ++bb) Rb[bb] = Rb[Db + bb]
          } else Db && (Rb = Vb(Rb, Db));
          return wb.b = Bb, Rb
        }
        Lb(2)
      }
    };
  class Kb {
    output = null;
    decoded = 0;
    done = !1;
    st = null;
    parts = [];
    dg = 0;
    needed = 18;
    size;
    constructor(bb) {
      this.size = bb
    }
    push(bb) {
      if (this.done) return;
      if (this.parts.push(bb), this.dg += bb.length, this.dg < this.needed) return;
      const wb = ((bb, wb) => {
        if (1 == bb.length) return bb[0];
        const eb = new Mb(wb);
        for (let Mb = 0, Hb = 0; Mb < bb.length; ++Mb) {
          const wb = bb[Mb];
          eb.set(wb, Hb), Hb += wb.length
        }
        return eb
      })(this.parts, this.dg);
      let eb = this.st;
      if (!eb) {
        const bb = Ob(wb, new Mb(0));
        "number" != typeof bb && bb.u === this.size || Lb(0, `not a zstd frame of ${this.size} bytes`), eb = this.st = Ob(wb, 1), eb.e = 0, this.output = eb.w
      }
      for (;;) {
        const bb = wb.length - eb.b;
        if (bb < 3) {
          this.needed = 3;
          break
        }
        const Mb = wb[eb.b],
          Hb = Mb >> 1 & 3;
        3 == Hb && Lb(2);
        const pb = Mb >> 3 | wb[eb.b + 1] << 5 | wb[eb.b + 2] << 13;
        pb > eb.m && Lb(0), 0 == Hb && eb.y + pb > eb.u && Lb(0);
        const Vb = 1 == Hb ? 4 : 3 + pb;
        if (bb < Vb) {
          this.needed = Vb;
          break
        }
        if (jb(wb, eb, eb.w) || Lb(5), eb.e = eb.y, (eb.y > eb.u || eb.l && eb.y != eb.u) && Lb(0), eb.l) {
          this.done = !0;
          break
        }
      }
      this.decoded = eb.y;
      const Hb = wb.subarray(eb.b);
      this.parts = Hb.length ? [Hb] : [], this.dg = Hb.length, eb.b = 0
    }
  }
  class rb {
    post;
    href = "";
    wO = null;
    given = 0;
    stopped = !1;
    constructor(bb) {
      this.post = bb
    }
    take(wb) {
      if (!this.stopped) try {
        this.answer(wb)
      } catch (Mb) {
        this.stop(Mb instanceof RangeError ? `out of memory decoding ${this.href}: ${bb(Mb)}` : `${this.href} did not decode: ${bb(Mb)}`)
      }
    }
    answer(bb) {
      if (null === this.wO) {
        const [wb, Mb] = bb;
        return this.href = wb, void(this.wO = new Kb(Mb))
      }
      if (null === bb) return void this.stop(`${this.href} ended before its module did`);
      const wb = this.wO;
      wb.push(bb);
      const {
        output: Mb,
        decoded: eb
      } = wb;
      if (null !== Mb && eb > this.given) {
        const bb = Mb.slice(this.given, eb).buffer;
        this.given = eb, this.post(bb, [bb])
      }
      wb.done && this.stop(!0)
    }
    stop(bb) {
      this.stopped = !0, this.post(bb)
    }
  }
  const Rb = globalThis.WorkerGlobalScope;
  if (void 0 !== Rb && globalThis instanceof Rb) {
    const bb = globalThis,
      wb = new rb((function(wb) {
        let Mb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        bb.postMessage(wb, Mb)
      }));
    bb.addEventListener("message", (bb => {
      let {
        data: Mb
      } = bb;
      wb.take(Mb)
    }))
  }
})();