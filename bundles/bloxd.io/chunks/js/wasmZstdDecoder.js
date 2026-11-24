(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var mm = __webpack_require__.u,
        Tm = __webpack_require__.e,
        fm = {},
        hm = {};
      __webpack_require__.u = function(Tm) {
        return mm(Tm) + (fm.hasOwnProperty(Tm) ? "?" + fm[Tm] : "")
      }, __webpack_require__.e = function(Am) {
        return Tm(Am).catch((function(Tm) {
          var am = hm.hasOwnProperty(Am) ? hm[Am] : 4;
          if (am < 1) {
            var xm = mm(Am);
            throw Tm.message = "Loading chunk " + Am + " failed after 4 retries.\n(" + xm + ")", Tm.request = xm, fm[Am] = "cache-bust=" + Date.now(), setTimeout((function() {
              delete hm[Am]
            }), 0), Tm
          }
          return new Promise((function(mm) {
            var Tm = 4 - am + 1;
            setTimeout((function() {
              var Tm = "cache-bust=" + Date.now();
              fm[Am] = Tm, hm[Am] = am - 1, mm(__webpack_require__.e(Am))
            }), function(mm) {
              return 500 * Math.pow(2, mm)
            }(Tm))
          }))
        }))
      }
    }
  })();

  function mm(mm) {
    return mm instanceof Error ? mm.message : String(mm)
  }
  const Tm = ArrayBuffer,
    fm = Uint8Array,
    hm = Uint16Array,
    Am = Int16Array,
    am = Int32Array,
    xm = (mm, Tm, hm) => {
      if (fm.prototype.slice) return fm.prototype.slice.call(mm, Tm, hm);
      (null == Tm || Tm < 0) && (Tm = 0), (null == hm || hm > mm.length) && (hm = mm.length);
      const Am = new fm(hm - Tm);
      return Am.set(mm.subarray(Tm, hm)), Am
    },
    wm = (mm, Tm, hm, Am) => {
      if (fm.prototype.fill) return fm.prototype.fill.call(mm, Tm, hm, Am);
      for ((null == hm || hm < 0) && (hm = 0), (null == Am || Am > mm.length) && (Am = mm.length); hm < Am; ++hm) mm[hm] = Tm;
      return mm
    },
    Dm = ["invalid zstd data", "window size too large (>2046MB)", "invalid block type", "FSE accuracy too high", "match distance too far back", "unexpected EOF"],
    im = (mm, Tm, fm) => {
      const hm = new Error(Tm || Dm[mm]);
      if (hm.code = mm, Error.captureStackTrace && Error.captureStackTrace(hm, im), !fm) throw hm;
      return hm
    },
    Rm = (mm, Tm, fm) => {
      let hm = 0,
        Am = 0;
      for (; hm < fm; ++hm) Am |= mm[Tm++] << (hm << 3);
      return Am
    },
    pm = (mm, Tm) => {
      const hm = mm[0] | mm[1] << 8 | mm[2] << 16;
      if (3126568 == hm && 253 == mm[3]) {
        const hm = mm[4],
          Am = hm >> 5 & 1,
          xm = hm >> 2 & 1,
          wm = 3 & hm,
          Dm = hm >> 6;
        8 & hm && im(0);
        let pm = 6 - Am;
        const Em = 3 == wm ? 4 : wm,
          om = Rm(mm, pm, Em);
        pm += Em;
        const Om = Dm ? 1 << Dm : Am,
          Ym = Rm(mm, pm, Om) + (1 == Dm && 256);
        let qm = Ym;
        if (!Am) {
          const Tm = 1 << 10 + (mm[5] >> 3);
          qm = Tm + (Tm >> 3) * (7 & mm[5])
        }
        qm > 2145386496 && im(1);
        const jm = new fm((1 == Tm ? Ym || qm : Tm ? 0 : qm) + 12);
        return jm[0] = 1, jm[4] = 4, jm[8] = 8, {
          b: pm + Om,
          y: 0,
          l: 0,
          d: om,
          w: Tm && 1 != Tm ? Tm : jm.subarray(12),
          e: qm,
          o: new am(jm.buffer, 0, 3),
          u: Ym,
          c: xm,
          m: Math.min(131072, qm)
        }
      }
      if (25481893 == (hm >> 4 | mm[3] << 20)) return 8 + (((Am = mm)[xm = 4] | Am[xm + 1] << 8 | Am[xm + 2] << 16 | Am[xm + 3] << 24) >>> 0);
      var Am, xm;
      im(0)
    },
    Em = mm => {
      let Tm = 0;
      for (; 1 << Tm <= mm; ++Tm);
      return Tm - 1
    },
    om = (mm, am, xm) => {
      let wm = 4 + (am << 3);
      const Dm = 5 + (15 & mm[am]);
      Dm > xm && im(3);
      const Rm = 1 << Dm;
      let pm = Rm,
        om = -1,
        Om = -1,
        Ym = -1,
        qm = Rm;
      const jm = new Tm(512 + (Rm << 2)),
        Vm = new Am(jm, 0, 256),
        Im = new hm(jm, 0, 256),
        Km = new hm(jm, 512, Rm),
        Qm = 512 + (Rm << 1),
        nm = new fm(jm, Qm, Rm),
        Jm = new fm(jm, Qm + Rm);
      for (; om < 255 && pm > 0;) {
        const Tm = Em(pm + 1),
          fm = wm >> 3,
          hm = (1 << Tm + 1) - 1;
        let Am = (mm[fm] | mm[fm + 1] << 8 | mm[fm + 2] << 16) >> (7 & wm) & hm;
        const am = (1 << Tm) - 1,
          xm = hm - pm - 1,
          Dm = Am & am;
        if (Dm < xm ? (wm += Tm, Am = Dm) : (wm += Tm + 1, Am > am && (Am -= xm)), Vm[++om] = --Am, -1 == Am ? (pm += Am, nm[--qm] = om) : pm -= Am, !Am)
          do {
            const Tm = wm >> 3;
            Om = (mm[Tm] | mm[Tm + 1] << 8) >> (7 & wm) & 3, wm += 2, om += Om
          } while (3 == Om)
      }(om > 255 || pm) && im(0);
      let cm = 0;
      const zm = (Rm >> 1) + (Rm >> 3) + 3,
        Zm = Rm - 1;
      for (let Tm = 0; Tm <= om; ++Tm) {
        const mm = Vm[Tm];
        if (mm < 1) Im[Tm] = -mm;
        else
          for (Ym = 0; Ym < mm; ++Ym) {
            nm[cm] = Tm;
            do {
              cm = cm + zm & Zm
            } while (cm >= qm)
          }
      }
      for (cm && im(0), Ym = 0; Ym < Rm; ++Ym) {
        const mm = Im[nm[Ym]]++,
          Tm = Jm[Ym] = Dm - Em(mm);
        Km[Ym] = (mm << Tm) - Rm
      }
      return [wm + 7 >> 3, {
        b: Dm,
        s: nm,
        n: Jm,
        t: Km
      }]
    },
    Om = om(new fm([81, 16, 99, 140, 49, 198, 24, 99, 12, 33, 196, 24, 99, 102, 102, 134, 70, 146, 4]), 0, 6)[1],
    Ym = om(new fm([33, 20, 196, 24, 99, 140, 33, 132, 16, 66, 8, 33, 132, 16, 66, 8, 33, 68, 68, 68, 68, 68, 68, 68, 68, 36, 9]), 0, 6)[1],
    qm = om(new fm([32, 132, 16, 66, 102, 70, 68, 68, 68, 68, 36, 73, 2]), 0, 5)[1],
    jm = (mm, Tm) => {
      const fm = mm.length,
        hm = new am(fm);
      for (let Am = 0; Am < fm; ++Am) hm[Am] = Tm, Tm += 1 << mm[Am];
      return hm
    },
    Vm = new fm(new am([0, 0, 0, 0, 16843009, 50528770, 134678020, 202050057, 269422093]).buffer, 0, 36),
    Im = jm(Vm, 0),
    Km = new fm(new am([0, 0, 0, 0, 0, 0, 0, 0, 16843009, 50528770, 117769220, 185207048, 252579084, 16]).buffer, 0, 53),
    Qm = jm(Km, 3),
    nm = (mm, Tm, fm) => {
      const hm = mm.length,
        Am = Tm.length,
        am = mm[hm - 1],
        xm = (1 << fm.b) - 1,
        wm = -fm.b;
      am || im(0);
      let Dm = 0,
        Rm = fm.b,
        pm = (hm << 3) - 8 + Em(am) - Rm,
        om = -1;
      for (; pm > wm && om < Am;) {
        const hm = pm >> 3;
        Dm = (Dm << Rm | (mm[hm] | mm[hm + 1] << 8 | mm[hm + 2] << 16) >> (7 & pm)) & xm, Tm[++om] = fm.s[Dm], pm -= Rm = fm.n[Dm]
      }
      pm == wm && om + 1 == Am || im(0)
    },
    Jm = (mm, Tm, fm) => {
      let hm = 6;
      const Am = Tm.length + 3 >> 2,
        am = Am << 1,
        xm = Am + am;
      nm(mm.subarray(hm, hm += mm[0] | mm[1] << 8), Tm.subarray(0, Am), fm), nm(mm.subarray(hm, hm += mm[2] | mm[3] << 8), Tm.subarray(Am, am), fm), nm(mm.subarray(hm, hm += mm[4] | mm[5] << 8), Tm.subarray(am, xm), fm), nm(mm.subarray(hm), Tm.subarray(xm), fm)
    },
    cm = (mm, Tm, Am) => {
      let am = Tm.b;
      const Dm = mm[am],
        Rm = Dm >> 1 & 3;
      Tm.l = 1 & Dm;
      const pm = Dm >> 3 | mm[am + 1] << 5 | mm[am + 2] << 13,
        jm = (am += 3) + pm;
      if (1 == Rm) {
        if (am >= mm.length) return;
        return Tm.b = am + 1, Am ? (wm(Am, mm[am], Tm.y, Tm.y += pm), Am) : wm(new fm(pm), mm[am])
      }
      if (!(jm > mm.length)) {
        if (0 == Rm) return Tm.b = jm, Am ? (Am.set(mm.subarray(am, jm), Tm.y), Tm.y += pm, Am) : xm(mm, am, jm);
        if (2 == Rm) {
          const Dm = mm[am],
            Rm = 3 & Dm,
            pm = Dm >> 2 & 3;
          let cm = Dm >> 4,
            zm = 0,
            Zm = 0;
          Rm < 2 ? 1 & pm ? cm |= mm[++am] << 4 | (2 & pm && mm[++am] << 12) : cm = Dm >> 3 : (Zm = pm, pm < 2 ? (cm |= (63 & mm[++am]) << 4, zm = mm[am] >> 6 | mm[++am] << 2) : 2 == pm ? (cm |= mm[++am] << 4 | (3 & mm[++am]) << 12, zm = mm[am] >> 2 | mm[++am] << 6) : (cm |= mm[++am] << 4 | (63 & mm[++am]) << 12, zm = mm[am] >> 6 | mm[++am] << 2 | mm[++am] << 10)), ++am;
          let km = Am ? Am.subarray(Tm.y, Tm.y + Tm.m) : new fm(Tm.m),
            bm = km.length - cm;
          if (bm < 0 && im(0), 0 == Rm) km.set(mm.subarray(am, am += cm), bm);
          else if (1 == Rm) wm(km, mm[am++], bm);
          else {
            let Am = Tm.h;
            if (2 == Rm) {
              const xm = ((mm, Tm) => {
                let Am = 0,
                  am = -1;
                const xm = new fm(292),
                  Dm = mm[Tm],
                  Rm = xm.subarray(0, 256),
                  pm = xm.subarray(256, 268),
                  Om = new hm(xm.buffer, 268);
                if (Dm < 128) {
                  const [fm, hm] = om(mm, Tm + 1, 6), Am = fm << 3, xm = mm[Tm += Dm];
                  xm || im(0);
                  let wm = 0,
                    pm = 0,
                    Om = hm.b,
                    Ym = Om,
                    qm = (++Tm << 3) - 8 + Em(xm);
                  for (; am > 254 && im(0), qm -= Om, !(qm < Am);) {
                    let Tm = qm >> 3;
                    if (wm += (mm[Tm] | mm[Tm + 1] << 8) >> (7 & qm) & (1 << Om) - 1, Rm[++am] = hm.s[wm], qm -= Ym, qm < Am) break;
                    Tm = qm >> 3, pm += (mm[Tm] | mm[Tm + 1] << 8) >> (7 & qm) & (1 << Ym) - 1, Rm[++am] = hm.s[pm], Om = hm.n[wm], wm = hm.t[wm], Ym = hm.n[pm], pm = hm.t[pm]
                  }++am > 255 && im(0)
                } else {
                  for (am = Dm - 127; Am < am; Am += 2) {
                    const fm = mm[++Tm];
                    Rm[Am] = fm >> 4, Rm[Am + 1] = 15 & fm
                  }++Tm
                }
                let Ym = 0;
                for (Am = 0; Am < am; ++Am) {
                  const mm = Rm[Am];
                  mm > 11 && im(0), Ym += mm && 1 << mm - 1
                }
                const qm = Em(Ym) + 1,
                  jm = 1 << qm,
                  Vm = jm - Ym;
                for (Vm & Vm - 1 && im(0), Rm[am++] = Em(Vm) + 1, Am = 0; Am < am; ++Am) {
                  const mm = Rm[Am];
                  ++pm[Rm[Am] = mm && qm + 1 - mm]
                }
                const Im = new fm(jm << 1),
                  Km = Im.subarray(0, jm),
                  Qm = Im.subarray(jm);
                for (Om[qm] = 0, Am = qm; Am > 0; --Am) {
                  const mm = Om[Am];
                  wm(Qm, Am, mm, Om[Am - 1] = mm + pm[Am] * (1 << qm - Am))
                }
                for (Om[0] != jm && im(0), Am = 0; Am < am; ++Am) {
                  const mm = Rm[Am];
                  if (mm) {
                    const Tm = Om[mm];
                    wm(Km, Am, Tm, Om[mm] = Tm + (1 << qm - mm))
                  }
                }
                return [Tm, {
                  n: Qm,
                  b: qm,
                  s: Km
                }]
              })(mm, am);
              zm += am - (am = xm[0]), Tm.h = Am = xm[1]
            } else Am || im(0);
            (Zm ? Jm : nm)(mm.subarray(am, am += zm), km.subarray(bm), Am)
          }
          let Sm = mm[am++];
          if (Sm) {
            255 == Sm ? Sm = 32512 + (mm[am++] | mm[am++] << 8) : Sm > 127 && (Sm = Sm - 128 << 8 | mm[am++]);
            const wm = mm[am++];
            3 & wm && im(0);
            const Dm = [Ym, qm, Om];
            for (let Am = 2; Am > -1; --Am) {
              const xm = wm >> 2 + (Am << 1) & 3;
              if (1 == xm) {
                const Tm = new fm([0, 0, mm[am++]]);
                Dm[Am] = {
                  s: Tm.subarray(2, 3),
                  n: Tm.subarray(0, 1),
                  t: new hm(Tm.buffer, 0, 1),
                  b: 0
                }
              } else 2 == xm ? [am, Dm[Am]] = om(mm, am, 9 - (1 & Am)) : 3 == xm && (Tm.t || im(0), Dm[Am] = Tm.t[Am])
            }
            const [Rm, pm, nm] = Tm.t = Dm, Jm = mm[jm - 1];
            Jm || im(0);
            let cm = (jm << 3) - 8 + Em(Jm) - nm.b,
              zm = cm >> 3,
              Zm = 0,
              em = (mm[zm] | mm[zm + 1] << 8) >> (7 & cm) & (1 << nm.b) - 1;
            zm = (cm -= pm.b) >> 3;
            let Nm = (mm[zm] | mm[zm + 1] << 8) >> (7 & cm) & (1 << pm.b) - 1;
            zm = (cm -= Rm.b) >> 3;
            let Gm = (mm[zm] | mm[zm + 1] << 8) >> (7 & cm) & (1 << Rm.b) - 1;
            for (++Sm; --Sm;) {
              const fm = nm.s[em],
                hm = nm.n[em],
                Am = Rm.s[Gm],
                am = Rm.n[Gm],
                xm = pm.s[Nm],
                wm = pm.n[Nm];
              zm = (cm -= xm) >> 3;
              const Dm = 1 << xm;
              let Em = Dm + ((mm[zm] | mm[zm + 1] << 8 | mm[zm + 2] << 16 | mm[zm + 3] << 24) >>> (7 & cm) & Dm - 1);
              zm = (cm -= Km[Am]) >> 3;
              let om = Qm[Am] + ((mm[zm] | mm[zm + 1] << 8 | mm[zm + 2] << 16) >> (7 & cm) & (1 << Km[Am]) - 1);
              zm = (cm -= Vm[fm]) >> 3;
              const Om = Im[fm] + ((mm[zm] | mm[zm + 1] << 8 | mm[zm + 2] << 16) >> (7 & cm) & (1 << Vm[fm]) - 1);
              if ((cm < 0 || bm + Om > km.length || Zm + Om + om > km.length) && im(0), zm = (cm -= hm) >> 3, em = nm.t[em] + ((mm[zm] | mm[zm + 1] << 8) >> (7 & cm) & (1 << hm) - 1), zm = (cm -= am) >> 3, Gm = Rm.t[Gm] + ((mm[zm] | mm[zm + 1] << 8) >> (7 & cm) & (1 << am) - 1), zm = (cm -= wm) >> 3, Nm = pm.t[Nm] + ((mm[zm] | mm[zm + 1] << 8) >> (7 & cm) & (1 << wm) - 1), Em > 3) Tm.o[2] = Tm.o[1], Tm.o[1] = Tm.o[0], Tm.o[0] = Em -= 3;
              else {
                const mm = Em - (0 != Om);
                mm ? (Em = 3 == mm ? Tm.o[0] - 1 : Tm.o[mm], mm > 1 && (Tm.o[2] = Tm.o[1]), Tm.o[1] = Tm.o[0], Tm.o[0] = Em) : Em = Tm.o[0]
              }
              for (let mm = 0; mm < Om; ++mm) km[Zm + mm] = km[bm + mm];
              Zm += Om, bm += Om;
              let Ym = Zm - Em;
              if (Ym < 0) {
                let mm = -Ym;
                const fm = Tm.e + Ym;
                fm < 0 && im(4), mm > om && (mm = om);
                for (let hm = 0; hm < mm; ++hm) km[Zm + hm] = Tm.w[fm + hm];
                Zm += mm, om -= mm, Ym = 0
              }
              for (let mm = 0; mm < om; ++mm) km[Zm + mm] = km[Ym + mm];
              Zm += om
            }
            if (Zm != bm)
              for (; bm < km.length;) km[Zm++] = km[bm++];
            else Zm = km.length;
            Am ? Tm.y += Zm : km = xm(km, 0, Zm)
          } else if (Am) {
            if (Tm.y += cm, bm)
              for (let mm = 0; mm < cm; ++mm) km[mm] = km[bm + mm]
          } else bm && (km = xm(km, bm));
          return Tm.b = jm, km
        }
        im(2)
      }
    };
  class zm {
    output = null;
    decoded = 0;
    done = !1;
    st = null;
    parts = [];
    ni = 0;
    needed = 18;
    size;
    constructor(mm) {
      this.size = mm
    }
    push(mm) {
      if (this.done) return;
      if (this.parts.push(mm), this.ni += mm.length, this.ni < this.needed) return;
      const Tm = ((mm, Tm) => {
        if (1 == mm.length) return mm[0];
        const hm = new fm(Tm);
        for (let fm = 0, Am = 0; fm < mm.length; ++fm) {
          const Tm = mm[fm];
          hm.set(Tm, Am), Am += Tm.length
        }
        return hm
      })(this.parts, this.ni);
      let hm = this.st;
      if (!hm) {
        const mm = pm(Tm, new fm(0));
        "number" != typeof mm && mm.u === this.size || im(0, `not a zstd frame of ${this.size} bytes`), hm = this.st = pm(Tm, 1), hm.e = 0, this.output = hm.w
      }
      for (;;) {
        const mm = Tm.length - hm.b;
        if (mm < 3) {
          this.needed = 3;
          break
        }
        const fm = Tm[hm.b],
          Am = fm >> 1 & 3;
        3 == Am && im(2);
        const am = fm >> 3 | Tm[hm.b + 1] << 5 | Tm[hm.b + 2] << 13;
        am > hm.m && im(0), 0 == Am && hm.y + am > hm.u && im(0);
        const xm = 1 == Am ? 4 : 3 + am;
        if (mm < xm) {
          this.needed = xm;
          break
        }
        if (cm(Tm, hm, hm.w) || im(5), hm.e = hm.y, (hm.y > hm.u || hm.l && hm.y != hm.u) && im(0), hm.l) {
          this.done = !0;
          break
        }
      }
      this.decoded = hm.y;
      const Am = Tm.subarray(hm.b);
      this.parts = Am.length ? [Am] : [], this.ni = Am.length, hm.b = 0
    }
  }
  class Zm {
    post;
    href = "";
    JO = null;
    given = 0;
    stopped = !1;
    constructor(mm) {
      this.post = mm
    }
    take(Tm) {
      if (!this.stopped) try {
        this.answer(Tm)
      } catch (fm) {
        this.stop(fm instanceof RangeError ? `out of memory decoding ${this.href}: ${mm(fm)}` : `${this.href} did not decode: ${mm(fm)}`)
      }
    }
    answer(mm) {
      if (null === this.JO) {
        const [Tm, fm] = mm;
        return this.href = Tm, void(this.JO = new zm(fm))
      }
      if (null === mm) return void this.stop(`${this.href} ended before its module did`);
      const Tm = this.JO;
      Tm.push(mm);
      const {
        output: fm,
        decoded: hm
      } = Tm;
      if (null !== fm && hm > this.given) {
        const mm = fm.slice(this.given, hm).buffer;
        this.given = hm, this.post(mm, [mm])
      }
      Tm.done && this.stop(!0)
    }
    stop(mm) {
      this.stopped = !0, this.post(mm)
    }
  }
  const km = globalThis.WorkerGlobalScope;
  if (void 0 !== km && globalThis instanceof km) {
    const mm = globalThis,
      Tm = new Zm((function(Tm) {
        let fm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        mm.postMessage(Tm, fm)
      }));
    mm.addEventListener("message", (mm => {
      let {
        data: fm
      } = mm;
      Tm.take(fm)
    }))
  }
})();