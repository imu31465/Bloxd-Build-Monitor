(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var tt = __webpack_require__.u,
        et = __webpack_require__.e,
        Vt = {},
        Ot = {};
      __webpack_require__.u = function(et) {
        return tt(et) + (Vt.hasOwnProperty(et) ? "?" + Vt[et] : "")
      }, __webpack_require__.e = function(qt) {
        return et(qt).catch((function(et) {
          var Dt = Ot.hasOwnProperty(qt) ? Ot[qt] : 4;
          if (Dt < 1) {
            var mt = tt(qt);
            if (et.message = "Loading chunk " + qt + " failed after 4 retries.\n(" + mt + ")", et.request = mt, Vt[qt] = "cache-bust=" + Date.now(), setTimeout((function() {
                delete Ot[qt]
              }), 0), "CSS_CHUNK_LOAD_FAILED" === et.code) {
              var dt = __webpack_require__.miniCssF(qt);
              et.message = et.message.replace("Loading chunk", "Loading CSS chunk").replace(mt, dt), et.request = dt
            }
            throw et
          }
          return new Promise((function(tt) {
            var et = 4 - Dt + 1;
            setTimeout((function() {
              var et = "cache-bust=" + Date.now();
              Vt[qt] = et, Ot[qt] = Dt - 1, tt(__webpack_require__.e(qt))
            }), function(tt) {
              return 500 * Math.pow(2, tt)
            }(et))
          }))
        }))
      }
    }
  })();

  function tt(tt) {
    return tt instanceof Error ? tt.message : String(tt)
  }
  const et = ArrayBuffer,
    Vt = Uint8Array,
    Ot = Uint16Array,
    qt = Int16Array,
    Dt = Int32Array,
    mt = (tt, et, Ot) => {
      if (Vt.prototype.slice) return Vt.prototype.slice.call(tt, et, Ot);
      (null == et || et < 0) && (et = 0), (null == Ot || Ot > tt.length) && (Ot = tt.length);
      const qt = new Vt(Ot - et);
      return qt.set(tt.subarray(et, Ot)), qt
    },
    dt = (tt, et, Ot, qt) => {
      if (Vt.prototype.fill) return Vt.prototype.fill.call(tt, et, Ot, qt);
      for ((null == Ot || Ot < 0) && (Ot = 0), (null == qt || qt > tt.length) && (qt = tt.length); Ot < qt; ++Ot) tt[Ot] = et;
      return tt
    },
    jt = ["invalid zstd data", "window size too large (>2046MB)", "invalid block type", "FSE accuracy too high", "match distance too far back", "unexpected EOF"],
    Ht = (tt, et, Vt) => {
      const Ot = new Error(et || jt[tt]);
      if (Ot.code = tt, Error.captureStackTrace && Error.captureStackTrace(Ot, Ht), !Vt) throw Ot;
      return Ot
    },
    Xt = (tt, et, Vt) => {
      let Ot = 0,
        qt = 0;
      for (; Ot < Vt; ++Ot) qt |= tt[et++] << (Ot << 3);
      return qt
    },
    Qt = (tt, et) => {
      const Ot = tt[0] | tt[1] << 8 | tt[2] << 16;
      if (3126568 == Ot && 253 == tt[3]) {
        const Ot = tt[4],
          qt = Ot >> 5 & 1,
          mt = Ot >> 2 & 1,
          dt = 3 & Ot,
          jt = Ot >> 6;
        8 & Ot && Ht(0);
        let Qt = 6 - qt;
        const lt = 3 == dt ? 4 : dt,
          Et = Xt(tt, Qt, lt);
        Qt += lt;
        const ft = jt ? 1 << jt : qt,
          wt = Xt(tt, Qt, ft) + (1 == jt && 256);
        let yt = wt;
        if (!qt) {
          const et = 1 << 10 + (tt[5] >> 3);
          yt = et + (et >> 3) * (7 & tt[5])
        }
        yt > 2145386496 && Ht(1);
        const Nt = new Vt((1 == et ? wt || yt : et ? 0 : yt) + 12);
        return Nt[0] = 1, Nt[4] = 4, Nt[8] = 8, {
          b: Qt + ft,
          y: 0,
          l: 0,
          d: Et,
          w: et && 1 != et ? et : Nt.subarray(12),
          e: yt,
          o: new Dt(Nt.buffer, 0, 3),
          u: wt,
          c: mt,
          m: Math.min(131072, yt)
        }
      }
      if (25481893 == (Ot >> 4 | tt[3] << 20)) return 8 + (((qt = tt)[mt = 4] | qt[mt + 1] << 8 | qt[mt + 2] << 16 | qt[mt + 3] << 24) >>> 0);
      var qt, mt;
      Ht(0)
    },
    lt = tt => {
      let et = 0;
      for (; 1 << et <= tt; ++et);
      return et - 1
    },
    Et = (tt, Dt, mt) => {
      let dt = 4 + (Dt << 3);
      const jt = 5 + (15 & tt[Dt]);
      jt > mt && Ht(3);
      const Xt = 1 << jt;
      let Qt = Xt,
        Et = -1,
        ft = -1,
        wt = -1,
        yt = Xt;
      const Nt = new et(512 + (Xt << 2)),
        Mt = new qt(Nt, 0, 256),
        bt = new Ot(Nt, 0, 256),
        Jt = new Ot(Nt, 512, Xt),
        Ct = 512 + (Xt << 1),
        ut = new Vt(Nt, Ct, Xt),
        Kt = new Vt(Nt, Ct + Xt);
      for (; Et < 255 && Qt > 0;) {
        const et = lt(Qt + 1),
          Vt = dt >> 3,
          Ot = (1 << et + 1) - 1;
        let qt = (tt[Vt] | tt[Vt + 1] << 8 | tt[Vt + 2] << 16) >> (7 & dt) & Ot;
        const Dt = (1 << et) - 1,
          mt = Ot - Qt - 1,
          jt = qt & Dt;
        if (jt < mt ? (dt += et, qt = jt) : (dt += et + 1, qt > Dt && (qt -= mt)), Mt[++Et] = --qt, -1 == qt ? (Qt += qt, ut[--yt] = Et) : Qt -= qt, !qt)
          do {
            const et = dt >> 3;
            ft = (tt[et] | tt[et + 1] << 8) >> (7 & dt) & 3, dt += 2, Et += ft
          } while (3 == ft)
      }(Et > 255 || Qt) && Ht(0);
      let ht = 0;
      const vt = (Xt >> 1) + (Xt >> 3) + 3,
        Wt = Xt - 1;
      for (let et = 0; et <= Et; ++et) {
        const tt = Mt[et];
        if (tt < 1) bt[et] = -tt;
        else
          for (wt = 0; wt < tt; ++wt) {
            ut[ht] = et;
            do {
              ht = ht + vt & Wt
            } while (ht >= yt)
          }
      }
      for (ht && Ht(0), wt = 0; wt < Xt; ++wt) {
        const tt = bt[ut[wt]]++,
          et = Kt[wt] = jt - lt(tt);
        Jt[wt] = (tt << et) - Xt
      }
      return [dt + 7 >> 3, {
        b: jt,
        s: ut,
        n: Kt,
        t: Jt
      }]
    },
    ft = Et(new Vt([81, 16, 99, 140, 49, 198, 24, 99, 12, 33, 196, 24, 99, 102, 102, 134, 70, 146, 4]), 0, 6)[1],
    wt = Et(new Vt([33, 20, 196, 24, 99, 140, 33, 132, 16, 66, 8, 33, 132, 16, 66, 8, 33, 68, 68, 68, 68, 68, 68, 68, 68, 36, 9]), 0, 6)[1],
    yt = Et(new Vt([32, 132, 16, 66, 102, 70, 68, 68, 68, 68, 36, 73, 2]), 0, 5)[1],
    Nt = (tt, et) => {
      const Vt = tt.length,
        Ot = new Dt(Vt);
      for (let qt = 0; qt < Vt; ++qt) Ot[qt] = et, et += 1 << tt[qt];
      return Ot
    },
    Mt = new Vt(new Dt([0, 0, 0, 0, 16843009, 50528770, 134678020, 202050057, 269422093]).buffer, 0, 36),
    bt = Nt(Mt, 0),
    Jt = new Vt(new Dt([0, 0, 0, 0, 0, 0, 0, 0, 16843009, 50528770, 117769220, 185207048, 252579084, 16]).buffer, 0, 53),
    Ct = Nt(Jt, 3),
    ut = (tt, et, Vt) => {
      const Ot = tt.length,
        qt = et.length,
        Dt = tt[Ot - 1],
        mt = (1 << Vt.b) - 1,
        dt = -Vt.b;
      Dt || Ht(0);
      let jt = 0,
        Xt = Vt.b,
        Qt = (Ot << 3) - 8 + lt(Dt) - Xt,
        Et = -1;
      for (; Qt > dt && Et < qt;) {
        const Ot = Qt >> 3;
        jt = (jt << Xt | (tt[Ot] | tt[Ot + 1] << 8 | tt[Ot + 2] << 16) >> (7 & Qt)) & mt, et[++Et] = Vt.s[jt], Qt -= Xt = Vt.n[jt]
      }
      Qt == dt && Et + 1 == qt || Ht(0)
    },
    Kt = (tt, et, Vt) => {
      let Ot = 6;
      const qt = et.length + 3 >> 2,
        Dt = qt << 1,
        mt = qt + Dt;
      ut(tt.subarray(Ot, Ot += tt[0] | tt[1] << 8), et.subarray(0, qt), Vt), ut(tt.subarray(Ot, Ot += tt[2] | tt[3] << 8), et.subarray(qt, Dt), Vt), ut(tt.subarray(Ot, Ot += tt[4] | tt[5] << 8), et.subarray(Dt, mt), Vt), ut(tt.subarray(Ot), et.subarray(mt), Vt)
    },
    ht = (tt, et, qt) => {
      let Dt = et.b;
      const jt = tt[Dt],
        Xt = jt >> 1 & 3;
      et.l = 1 & jt;
      const Qt = jt >> 3 | tt[Dt + 1] << 5 | tt[Dt + 2] << 13,
        Nt = (Dt += 3) + Qt;
      if (1 == Xt) {
        if (Dt >= tt.length) return;
        return et.b = Dt + 1, qt ? (dt(qt, tt[Dt], et.y, et.y += Qt), qt) : dt(new Vt(Qt), tt[Dt])
      }
      if (!(Nt > tt.length)) {
        if (0 == Xt) return et.b = Nt, qt ? (qt.set(tt.subarray(Dt, Nt), et.y), et.y += Qt, qt) : mt(tt, Dt, Nt);
        if (2 == Xt) {
          const jt = tt[Dt],
            Xt = 3 & jt,
            Qt = jt >> 2 & 3;
          let ht = jt >> 4,
            vt = 0,
            Wt = 0;
          Xt < 2 ? 1 & Qt ? ht |= tt[++Dt] << 4 | (2 & Qt && tt[++Dt] << 12) : ht = jt >> 3 : (Wt = Qt, Qt < 2 ? (ht |= (63 & tt[++Dt]) << 4, vt = tt[Dt] >> 6 | tt[++Dt] << 2) : 2 == Qt ? (ht |= tt[++Dt] << 4 | (3 & tt[++Dt]) << 12, vt = tt[Dt] >> 2 | tt[++Dt] << 6) : (ht |= tt[++Dt] << 4 | (63 & tt[++Dt]) << 12, vt = tt[Dt] >> 6 | tt[++Dt] << 2 | tt[++Dt] << 10)), ++Dt;
          let St = qt ? qt.subarray(et.y, et.y + et.m) : new Vt(et.m),
            ct = St.length - ht;
          if (ct < 0 && Ht(0), 0 == Xt) St.set(tt.subarray(Dt, Dt += ht), ct);
          else if (1 == Xt) dt(St, tt[Dt++], ct);
          else {
            let qt = et.h;
            if (2 == Xt) {
              const mt = ((tt, et) => {
                let qt = 0,
                  Dt = -1;
                const mt = new Vt(292),
                  jt = tt[et],
                  Xt = mt.subarray(0, 256),
                  Qt = mt.subarray(256, 268),
                  ft = new Ot(mt.buffer, 268);
                if (jt < 128) {
                  const [Vt, Ot] = Et(tt, et + 1, 6), qt = Vt << 3, mt = tt[et += jt];
                  mt || Ht(0);
                  let dt = 0,
                    Qt = 0,
                    ft = Ot.b,
                    wt = ft,
                    yt = (++et << 3) - 8 + lt(mt);
                  for (; Dt > 254 && Ht(0), yt -= ft, !(yt < qt);) {
                    let et = yt >> 3;
                    if (dt += (tt[et] | tt[et + 1] << 8) >> (7 & yt) & (1 << ft) - 1, Xt[++Dt] = Ot.s[dt], yt -= wt, yt < qt) break;
                    et = yt >> 3, Qt += (tt[et] | tt[et + 1] << 8) >> (7 & yt) & (1 << wt) - 1, Xt[++Dt] = Ot.s[Qt], ft = Ot.n[dt], dt = Ot.t[dt], wt = Ot.n[Qt], Qt = Ot.t[Qt]
                  }++Dt > 255 && Ht(0)
                } else {
                  for (Dt = jt - 127; qt < Dt; qt += 2) {
                    const Vt = tt[++et];
                    Xt[qt] = Vt >> 4, Xt[qt + 1] = 15 & Vt
                  }++et
                }
                let wt = 0;
                for (qt = 0; qt < Dt; ++qt) {
                  const tt = Xt[qt];
                  tt > 11 && Ht(0), wt += tt && 1 << tt - 1
                }
                const yt = lt(wt) + 1,
                  Nt = 1 << yt,
                  Mt = Nt - wt;
                for (Mt & Mt - 1 && Ht(0), Xt[Dt++] = lt(Mt) + 1, qt = 0; qt < Dt; ++qt) {
                  const tt = Xt[qt];
                  ++Qt[Xt[qt] = tt && yt + 1 - tt]
                }
                const bt = new Vt(Nt << 1),
                  Jt = bt.subarray(0, Nt),
                  Ct = bt.subarray(Nt);
                for (ft[yt] = 0, qt = yt; qt > 0; --qt) {
                  const tt = ft[qt];
                  dt(Ct, qt, tt, ft[qt - 1] = tt + Qt[qt] * (1 << yt - qt))
                }
                for (ft[0] != Nt && Ht(0), qt = 0; qt < Dt; ++qt) {
                  const tt = Xt[qt];
                  if (tt) {
                    const et = ft[tt];
                    dt(Jt, qt, et, ft[tt] = et + (1 << yt - tt))
                  }
                }
                return [et, {
                  n: Ct,
                  b: yt,
                  s: Jt
                }]
              })(tt, Dt);
              vt += Dt - (Dt = mt[0]), et.h = qt = mt[1]
            } else qt || Ht(0);
            (Wt ? Kt : ut)(tt.subarray(Dt, Dt += vt), St.subarray(ct), qt)
          }
          let Rt = tt[Dt++];
          if (Rt) {
            255 == Rt ? Rt = 32512 + (tt[Dt++] | tt[Dt++] << 8) : Rt > 127 && (Rt = Rt - 128 << 8 | tt[Dt++]);
            const dt = tt[Dt++];
            3 & dt && Ht(0);
            const jt = [wt, yt, ft];
            for (let qt = 2; qt > -1; --qt) {
              const mt = dt >> 2 + (qt << 1) & 3;
              if (1 == mt) {
                const et = new Vt([0, 0, tt[Dt++]]);
                jt[qt] = {
                  s: et.subarray(2, 3),
                  n: et.subarray(0, 1),
                  t: new Ot(et.buffer, 0, 1),
                  b: 0
                }
              } else 2 == mt ? [Dt, jt[qt]] = Et(tt, Dt, 9 - (1 & qt)) : 3 == mt && (et.t || Ht(0), jt[qt] = et.t[qt])
            }
            const [Xt, Qt, ut] = et.t = jt, Kt = tt[Nt - 1];
            Kt || Ht(0);
            let ht = (Nt << 3) - 8 + lt(Kt) - ut.b,
              vt = ht >> 3,
              Wt = 0,
              It = (tt[vt] | tt[vt + 1] << 8) >> (7 & ht) & (1 << ut.b) - 1;
            vt = (ht -= Qt.b) >> 3;
            let Pt = (tt[vt] | tt[vt + 1] << 8) >> (7 & ht) & (1 << Qt.b) - 1;
            vt = (ht -= Xt.b) >> 3;
            let Zt = (tt[vt] | tt[vt + 1] << 8) >> (7 & ht) & (1 << Xt.b) - 1;
            for (++Rt; --Rt;) {
              const Vt = ut.s[It],
                Ot = ut.n[It],
                qt = Xt.s[Zt],
                Dt = Xt.n[Zt],
                mt = Qt.s[Pt],
                dt = Qt.n[Pt];
              vt = (ht -= mt) >> 3;
              const jt = 1 << mt;
              let lt = jt + ((tt[vt] | tt[vt + 1] << 8 | tt[vt + 2] << 16 | tt[vt + 3] << 24) >>> (7 & ht) & jt - 1);
              vt = (ht -= Jt[qt]) >> 3;
              let Et = Ct[qt] + ((tt[vt] | tt[vt + 1] << 8 | tt[vt + 2] << 16) >> (7 & ht) & (1 << Jt[qt]) - 1);
              vt = (ht -= Mt[Vt]) >> 3;
              const ft = bt[Vt] + ((tt[vt] | tt[vt + 1] << 8 | tt[vt + 2] << 16) >> (7 & ht) & (1 << Mt[Vt]) - 1);
              if ((ht < 0 || ct + ft > St.length || Wt + ft + Et > St.length) && Ht(0), vt = (ht -= Ot) >> 3, It = ut.t[It] + ((tt[vt] | tt[vt + 1] << 8) >> (7 & ht) & (1 << Ot) - 1), vt = (ht -= Dt) >> 3, Zt = Xt.t[Zt] + ((tt[vt] | tt[vt + 1] << 8) >> (7 & ht) & (1 << Dt) - 1), vt = (ht -= dt) >> 3, Pt = Qt.t[Pt] + ((tt[vt] | tt[vt + 1] << 8) >> (7 & ht) & (1 << dt) - 1), lt > 3) et.o[2] = et.o[1], et.o[1] = et.o[0], et.o[0] = lt -= 3;
              else {
                const tt = lt - (0 != ft);
                tt ? (lt = 3 == tt ? et.o[0] - 1 : et.o[tt], tt > 1 && (et.o[2] = et.o[1]), et.o[1] = et.o[0], et.o[0] = lt) : lt = et.o[0]
              }
              for (let tt = 0; tt < ft; ++tt) St[Wt + tt] = St[ct + tt];
              Wt += ft, ct += ft;
              let wt = Wt - lt;
              if (wt < 0) {
                let tt = -wt;
                const Vt = et.e + wt;
                Vt < 0 && Ht(4), tt > Et && (tt = Et);
                for (let Ot = 0; Ot < tt; ++Ot) St[Wt + Ot] = et.w[Vt + Ot];
                Wt += tt, Et -= tt, wt = 0
              }
              for (let tt = 0; tt < Et; ++tt) St[Wt + tt] = St[wt + tt];
              Wt += Et
            }
            if (Wt != ct)
              for (; ct < St.length;) St[Wt++] = St[ct++];
            else Wt = St.length;
            qt ? et.y += Wt : St = mt(St, 0, Wt)
          } else if (qt) {
            if (et.y += ht, ct)
              for (let tt = 0; tt < ht; ++tt) St[tt] = St[ct + tt]
          } else ct && (St = mt(St, ct));
          return et.b = Nt, St
        }
        Ht(2)
      }
    };
  class vt {
    output = null;
    decoded = 0;
    done = !1;
    st = null;
    parts = [];
    Pd = 0;
    needed = 18;
    size;
    constructor(tt) {
      this.size = tt
    }
    push(tt) {
      if (this.done) return;
      if (this.parts.push(tt), this.Pd += tt.length, this.Pd < this.needed) return;
      const et = ((tt, et) => {
        if (1 == tt.length) return tt[0];
        const Ot = new Vt(et);
        for (let Vt = 0, qt = 0; Vt < tt.length; ++Vt) {
          const et = tt[Vt];
          Ot.set(et, qt), qt += et.length
        }
        return Ot
      })(this.parts, this.Pd);
      let Ot = this.st;
      if (!Ot) {
        const tt = Qt(et, new Vt(0));
        "number" != typeof tt && tt.u === this.size || Ht(0, `not a zstd frame of ${this.size} bytes`), Ot = this.st = Qt(et, 1), Ot.e = 0, this.output = Ot.w
      }
      for (;;) {
        const tt = et.length - Ot.b;
        if (tt < 3) {
          this.needed = 3;
          break
        }
        const Vt = et[Ot.b],
          qt = Vt >> 1 & 3;
        3 == qt && Ht(2);
        const Dt = Vt >> 3 | et[Ot.b + 1] << 5 | et[Ot.b + 2] << 13;
        Dt > Ot.m && Ht(0), 0 == qt && Ot.y + Dt > Ot.u && Ht(0);
        const mt = 1 == qt ? 4 : 3 + Dt;
        if (tt < mt) {
          this.needed = mt;
          break
        }
        if (ht(et, Ot, Ot.w) || Ht(5), Ot.e = Ot.y, (Ot.y > Ot.u || Ot.l && Ot.y != Ot.u) && Ht(0), Ot.l) {
          this.done = !0;
          break
        }
      }
      this.decoded = Ot.y;
      const qt = et.subarray(Ot.b);
      this.parts = qt.length ? [qt] : [], this.Pd = qt.length, Ot.b = 0
    }
  }
  class Wt {
    post;
    href = "";
    xE = null;
    given = 0;
    stopped = !1;
    constructor(tt) {
      this.post = tt
    }
    take(et) {
      if (!this.stopped) try {
        this.answer(et)
      } catch (Vt) {
        this.stop(Vt instanceof RangeError ? `out of memory decoding ${this.href}: ${tt(Vt)}` : `${this.href} did not decode: ${tt(Vt)}`)
      }
    }
    answer(tt) {
      if (null === this.xE) {
        const [et, Vt] = tt;
        return this.href = et, void(this.xE = new vt(Vt))
      }
      if (null === tt) return void this.stop(`${this.href} ended before its module did`);
      const et = this.xE;
      et.push(tt);
      const {
        output: Vt,
        decoded: Ot
      } = et;
      if (null !== Vt && Ot > this.given) {
        const tt = Vt.slice(this.given, Ot).buffer;
        this.given = Ot, this.post(tt, [tt])
      }
      et.done && this.stop(!0)
    }
    stop(tt) {
      this.stopped = !0, this.post(tt)
    }
  }
  const St = globalThis.WorkerGlobalScope;
  if (void 0 !== St && globalThis instanceof St) {
    const tt = globalThis,
      et = new Wt((function(et) {
        let Vt = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        tt.postMessage(et, Vt)
      }));
    tt.addEventListener("message", (tt => {
      let {
        data: Vt
      } = tt;
      et.take(Vt)
    }))
  }
})();