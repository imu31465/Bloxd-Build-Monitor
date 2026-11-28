(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var dd = __webpack_require__.u,
        Od = __webpack_require__.e,
        md = {},
        Wd = {};
      __webpack_require__.u = function(Od) {
        return dd(Od) + (md.hasOwnProperty(Od) ? "?" + md[Od] : "")
      }, __webpack_require__.e = function(Fd) {
        return Od(Fd).catch((function(Od) {
          var Rd = Wd.hasOwnProperty(Fd) ? Wd[Fd] : 4;
          if (Rd < 1) {
            var Xd = dd(Fd);
            if (Od.message = "Loading chunk " + Fd + " failed after 4 retries.\n(" + Xd + ")", Od.request = Xd, md[Fd] = "cache-bust=" + Date.now(), setTimeout((function() {
                delete Wd[Fd]
              }), 0), "CSS_CHUNK_LOAD_FAILED" === Od.code) {
              var Kd = __webpack_require__.miniCssF(Fd);
              Od.message = Od.message.replace("Loading chunk", "Loading CSS chunk").replace(Xd, Kd), Od.request = Kd
            }
            throw Od
          }
          return new Promise((function(dd) {
            var Od = 4 - Rd + 1;
            setTimeout((function() {
              var Od = "cache-bust=" + Date.now();
              md[Fd] = Od, Wd[Fd] = Rd - 1, dd(__webpack_require__.e(Fd))
            }), function(dd) {
              return 500 * Math.pow(2, dd)
            }(Od))
          }))
        }))
      }
    }
  })();

  function dd(dd) {
    return dd instanceof Error ? dd.message : String(dd)
  }
  const Od = ArrayBuffer,
    md = Uint8Array,
    Wd = Uint16Array,
    Fd = Int16Array,
    Rd = Int32Array,
    Xd = (dd, Od, Wd) => {
      if (md.prototype.slice) return md.prototype.slice.call(dd, Od, Wd);
      (null == Od || Od < 0) && (Od = 0), (null == Wd || Wd > dd.length) && (Wd = dd.length);
      const Fd = new md(Wd - Od);
      return Fd.set(dd.subarray(Od, Wd)), Fd
    },
    Kd = (dd, Od, Wd, Fd) => {
      if (md.prototype.fill) return md.prototype.fill.call(dd, Od, Wd, Fd);
      for ((null == Wd || Wd < 0) && (Wd = 0), (null == Fd || Fd > dd.length) && (Fd = dd.length); Wd < Fd; ++Wd) dd[Wd] = Od;
      return dd
    },
    hd = ["invalid zstd data", "window size too large (>2046MB)", "invalid block type", "FSE accuracy too high", "match distance too far back", "unexpected EOF"],
    vd = (dd, Od, md) => {
      const Wd = new Error(Od || hd[dd]);
      if (Wd.code = dd, Error.captureStackTrace && Error.captureStackTrace(Wd, vd), !md) throw Wd;
      return Wd
    },
    Qd = (dd, Od, md) => {
      let Wd = 0,
        Fd = 0;
      for (; Wd < md; ++Wd) Fd |= dd[Od++] << (Wd << 3);
      return Fd
    },
    td = (dd, Od) => {
      const Wd = dd[0] | dd[1] << 8 | dd[2] << 16;
      if (3126568 == Wd && 253 == dd[3]) {
        const Wd = dd[4],
          Fd = Wd >> 5 & 1,
          Xd = Wd >> 2 & 1,
          Kd = 3 & Wd,
          hd = Wd >> 6;
        8 & Wd && vd(0);
        let td = 6 - Fd;
        const od = 3 == Kd ? 4 : Kd,
          Nd = Qd(dd, td, od);
        td += od;
        const qd = hd ? 1 << hd : Fd,
          Hd = Qd(dd, td, qd) + (1 == hd && 256);
        let yd = Hd;
        if (!Fd) {
          const Od = 1 << 10 + (dd[5] >> 3);
          yd = Od + (Od >> 3) * (7 & dd[5])
        }
        yd > 2145386496 && vd(1);
        const bd = new md((1 == Od ? Hd || yd : Od ? 0 : yd) + 12);
        return bd[0] = 1, bd[4] = 4, bd[8] = 8, {
          b: td + qd,
          y: 0,
          l: 0,
          d: Nd,
          w: Od && 1 != Od ? Od : bd.subarray(12),
          e: yd,
          o: new Rd(bd.buffer, 0, 3),
          u: Hd,
          c: Xd,
          m: Math.min(131072, yd)
        }
      }
      if (25481893 == (Wd >> 4 | dd[3] << 20)) return 8 + (((Fd = dd)[Xd = 4] | Fd[Xd + 1] << 8 | Fd[Xd + 2] << 16 | Fd[Xd + 3] << 24) >>> 0);
      var Fd, Xd;
      vd(0)
    },
    od = dd => {
      let Od = 0;
      for (; 1 << Od <= dd; ++Od);
      return Od - 1
    },
    Nd = (dd, Rd, Xd) => {
      let Kd = 4 + (Rd << 3);
      const hd = 5 + (15 & dd[Rd]);
      hd > Xd && vd(3);
      const Qd = 1 << hd;
      let td = Qd,
        Nd = -1,
        qd = -1,
        Hd = -1,
        yd = Qd;
      const bd = new Od(512 + (Qd << 2)),
        Td = new Fd(bd, 0, 256),
        pd = new Wd(bd, 0, 256),
        Yd = new Wd(bd, 512, Qd),
        gd = 512 + (Qd << 1),
        wd = new md(bd, gd, Qd),
        Ed = new md(bd, gd + Qd);
      for (; Nd < 255 && td > 0;) {
        const Od = od(td + 1),
          md = Kd >> 3,
          Wd = (1 << Od + 1) - 1;
        let Fd = (dd[md] | dd[md + 1] << 8 | dd[md + 2] << 16) >> (7 & Kd) & Wd;
        const Rd = (1 << Od) - 1,
          Xd = Wd - td - 1,
          hd = Fd & Rd;
        if (hd < Xd ? (Kd += Od, Fd = hd) : (Kd += Od + 1, Fd > Rd && (Fd -= Xd)), Td[++Nd] = --Fd, -1 == Fd ? (td += Fd, wd[--yd] = Nd) : td -= Fd, !Fd)
          do {
            const Od = Kd >> 3;
            qd = (dd[Od] | dd[Od + 1] << 8) >> (7 & Kd) & 3, Kd += 2, Nd += qd
          } while (3 == qd)
      }(Nd > 255 || td) && vd(0);
      let Jd = 0;
      const Ud = (Qd >> 1) + (Qd >> 3) + 3,
        xd = Qd - 1;
      for (let Od = 0; Od <= Nd; ++Od) {
        const dd = Td[Od];
        if (dd < 1) pd[Od] = -dd;
        else
          for (Hd = 0; Hd < dd; ++Hd) {
            wd[Jd] = Od;
            do {
              Jd = Jd + Ud & xd
            } while (Jd >= yd)
          }
      }
      for (Jd && vd(0), Hd = 0; Hd < Qd; ++Hd) {
        const dd = pd[wd[Hd]]++,
          Od = Ed[Hd] = hd - od(dd);
        Yd[Hd] = (dd << Od) - Qd
      }
      return [Kd + 7 >> 3, {
        b: hd,
        s: wd,
        n: Ed,
        t: Yd
      }]
    },
    qd = Nd(new md([81, 16, 99, 140, 49, 198, 24, 99, 12, 33, 196, 24, 99, 102, 102, 134, 70, 146, 4]), 0, 6)[1],
    Hd = Nd(new md([33, 20, 196, 24, 99, 140, 33, 132, 16, 66, 8, 33, 132, 16, 66, 8, 33, 68, 68, 68, 68, 68, 68, 68, 68, 36, 9]), 0, 6)[1],
    yd = Nd(new md([32, 132, 16, 66, 102, 70, 68, 68, 68, 68, 36, 73, 2]), 0, 5)[1],
    bd = (dd, Od) => {
      const md = dd.length,
        Wd = new Rd(md);
      for (let Fd = 0; Fd < md; ++Fd) Wd[Fd] = Od, Od += 1 << dd[Fd];
      return Wd
    },
    Td = new md(new Rd([0, 0, 0, 0, 16843009, 50528770, 134678020, 202050057, 269422093]).buffer, 0, 36),
    pd = bd(Td, 0),
    Yd = new md(new Rd([0, 0, 0, 0, 0, 0, 0, 0, 16843009, 50528770, 117769220, 185207048, 252579084, 16]).buffer, 0, 53),
    gd = bd(Yd, 3),
    wd = (dd, Od, md) => {
      const Wd = dd.length,
        Fd = Od.length,
        Rd = dd[Wd - 1],
        Xd = (1 << md.b) - 1,
        Kd = -md.b;
      Rd || vd(0);
      let hd = 0,
        Qd = md.b,
        td = (Wd << 3) - 8 + od(Rd) - Qd,
        Nd = -1;
      for (; td > Kd && Nd < Fd;) {
        const Wd = td >> 3;
        hd = (hd << Qd | (dd[Wd] | dd[Wd + 1] << 8 | dd[Wd + 2] << 16) >> (7 & td)) & Xd, Od[++Nd] = md.s[hd], td -= Qd = md.n[hd]
      }
      td == Kd && Nd + 1 == Fd || vd(0)
    },
    Ed = (dd, Od, md) => {
      let Wd = 6;
      const Fd = Od.length + 3 >> 2,
        Rd = Fd << 1,
        Xd = Fd + Rd;
      wd(dd.subarray(Wd, Wd += dd[0] | dd[1] << 8), Od.subarray(0, Fd), md), wd(dd.subarray(Wd, Wd += dd[2] | dd[3] << 8), Od.subarray(Fd, Rd), md), wd(dd.subarray(Wd, Wd += dd[4] | dd[5] << 8), Od.subarray(Rd, Xd), md), wd(dd.subarray(Wd), Od.subarray(Xd), md)
    },
    Jd = (dd, Od, Fd) => {
      let Rd = Od.b;
      const hd = dd[Rd],
        Qd = hd >> 1 & 3;
      Od.l = 1 & hd;
      const td = hd >> 3 | dd[Rd + 1] << 5 | dd[Rd + 2] << 13,
        bd = (Rd += 3) + td;
      if (1 == Qd) {
        if (Rd >= dd.length) return;
        return Od.b = Rd + 1, Fd ? (Kd(Fd, dd[Rd], Od.y, Od.y += td), Fd) : Kd(new md(td), dd[Rd])
      }
      if (!(bd > dd.length)) {
        if (0 == Qd) return Od.b = bd, Fd ? (Fd.set(dd.subarray(Rd, bd), Od.y), Od.y += td, Fd) : Xd(dd, Rd, bd);
        if (2 == Qd) {
          const hd = dd[Rd],
            Qd = 3 & hd,
            td = hd >> 2 & 3;
          let Jd = hd >> 4,
            Ud = 0,
            xd = 0;
          Qd < 2 ? 1 & td ? Jd |= dd[++Rd] << 4 | (2 & td && dd[++Rd] << 12) : Jd = hd >> 3 : (xd = td, td < 2 ? (Jd |= (63 & dd[++Rd]) << 4, Ud = dd[Rd] >> 6 | dd[++Rd] << 2) : 2 == td ? (Jd |= dd[++Rd] << 4 | (3 & dd[++Rd]) << 12, Ud = dd[Rd] >> 2 | dd[++Rd] << 6) : (Jd |= dd[++Rd] << 4 | (63 & dd[++Rd]) << 12, Ud = dd[Rd] >> 6 | dd[++Rd] << 2 | dd[++Rd] << 10)), ++Rd;
          let Bd = Fd ? Fd.subarray(Od.y, Od.y + Od.m) : new md(Od.m),
            Sd = Bd.length - Jd;
          if (Sd < 0 && vd(0), 0 == Qd) Bd.set(dd.subarray(Rd, Rd += Jd), Sd);
          else if (1 == Qd) Kd(Bd, dd[Rd++], Sd);
          else {
            let Fd = Od.h;
            if (2 == Qd) {
              const Xd = ((dd, Od) => {
                let Fd = 0,
                  Rd = -1;
                const Xd = new md(292),
                  hd = dd[Od],
                  Qd = Xd.subarray(0, 256),
                  td = Xd.subarray(256, 268),
                  qd = new Wd(Xd.buffer, 268);
                if (hd < 128) {
                  const [md, Wd] = Nd(dd, Od + 1, 6), Fd = md << 3, Xd = dd[Od += hd];
                  Xd || vd(0);
                  let Kd = 0,
                    td = 0,
                    qd = Wd.b,
                    Hd = qd,
                    yd = (++Od << 3) - 8 + od(Xd);
                  for (; Rd > 254 && vd(0), yd -= qd, !(yd < Fd);) {
                    let Od = yd >> 3;
                    if (Kd += (dd[Od] | dd[Od + 1] << 8) >> (7 & yd) & (1 << qd) - 1, Qd[++Rd] = Wd.s[Kd], yd -= Hd, yd < Fd) break;
                    Od = yd >> 3, td += (dd[Od] | dd[Od + 1] << 8) >> (7 & yd) & (1 << Hd) - 1, Qd[++Rd] = Wd.s[td], qd = Wd.n[Kd], Kd = Wd.t[Kd], Hd = Wd.n[td], td = Wd.t[td]
                  }++Rd > 255 && vd(0)
                } else {
                  for (Rd = hd - 127; Fd < Rd; Fd += 2) {
                    const md = dd[++Od];
                    Qd[Fd] = md >> 4, Qd[Fd + 1] = 15 & md
                  }++Od
                }
                let Hd = 0;
                for (Fd = 0; Fd < Rd; ++Fd) {
                  const dd = Qd[Fd];
                  dd > 11 && vd(0), Hd += dd && 1 << dd - 1
                }
                const yd = od(Hd) + 1,
                  bd = 1 << yd,
                  Td = bd - Hd;
                for (Td & Td - 1 && vd(0), Qd[Rd++] = od(Td) + 1, Fd = 0; Fd < Rd; ++Fd) {
                  const dd = Qd[Fd];
                  ++td[Qd[Fd] = dd && yd + 1 - dd]
                }
                const pd = new md(bd << 1),
                  Yd = pd.subarray(0, bd),
                  gd = pd.subarray(bd);
                for (qd[yd] = 0, Fd = yd; Fd > 0; --Fd) {
                  const dd = qd[Fd];
                  Kd(gd, Fd, dd, qd[Fd - 1] = dd + td[Fd] * (1 << yd - Fd))
                }
                for (qd[0] != bd && vd(0), Fd = 0; Fd < Rd; ++Fd) {
                  const dd = Qd[Fd];
                  if (dd) {
                    const Od = qd[dd];
                    Kd(Yd, Fd, Od, qd[dd] = Od + (1 << yd - dd))
                  }
                }
                return [Od, {
                  n: gd,
                  b: yd,
                  s: Yd
                }]
              })(dd, Rd);
              Ud += Rd - (Rd = Xd[0]), Od.h = Fd = Xd[1]
            } else Fd || vd(0);
            (xd ? Ed : wd)(dd.subarray(Rd, Rd += Ud), Bd.subarray(Sd), Fd)
          }
          let sd = dd[Rd++];
          if (sd) {
            255 == sd ? sd = 32512 + (dd[Rd++] | dd[Rd++] << 8) : sd > 127 && (sd = sd - 128 << 8 | dd[Rd++]);
            const Kd = dd[Rd++];
            3 & Kd && vd(0);
            const hd = [Hd, yd, qd];
            for (let Fd = 2; Fd > -1; --Fd) {
              const Xd = Kd >> 2 + (Fd << 1) & 3;
              if (1 == Xd) {
                const Od = new md([0, 0, dd[Rd++]]);
                hd[Fd] = {
                  s: Od.subarray(2, 3),
                  n: Od.subarray(0, 1),
                  t: new Wd(Od.buffer, 0, 1),
                  b: 0
                }
              } else 2 == Xd ? [Rd, hd[Fd]] = Nd(dd, Rd, 9 - (1 & Fd)) : 3 == Xd && (Od.t || vd(0), hd[Fd] = Od.t[Fd])
            }
            const [Qd, td, wd] = Od.t = hd, Ed = dd[bd - 1];
            Ed || vd(0);
            let Jd = (bd << 3) - 8 + od(Ed) - wd.b,
              Ud = Jd >> 3,
              xd = 0,
              ud = (dd[Ud] | dd[Ud + 1] << 8) >> (7 & Jd) & (1 << wd.b) - 1;
            Ud = (Jd -= td.b) >> 3;
            let Vd = (dd[Ud] | dd[Ud + 1] << 8) >> (7 & Jd) & (1 << td.b) - 1;
            Ud = (Jd -= Qd.b) >> 3;
            let id = (dd[Ud] | dd[Ud + 1] << 8) >> (7 & Jd) & (1 << Qd.b) - 1;
            for (++sd; --sd;) {
              const md = wd.s[ud],
                Wd = wd.n[ud],
                Fd = Qd.s[id],
                Rd = Qd.n[id],
                Xd = td.s[Vd],
                Kd = td.n[Vd];
              Ud = (Jd -= Xd) >> 3;
              const hd = 1 << Xd;
              let od = hd + ((dd[Ud] | dd[Ud + 1] << 8 | dd[Ud + 2] << 16 | dd[Ud + 3] << 24) >>> (7 & Jd) & hd - 1);
              Ud = (Jd -= Yd[Fd]) >> 3;
              let Nd = gd[Fd] + ((dd[Ud] | dd[Ud + 1] << 8 | dd[Ud + 2] << 16) >> (7 & Jd) & (1 << Yd[Fd]) - 1);
              Ud = (Jd -= Td[md]) >> 3;
              const qd = pd[md] + ((dd[Ud] | dd[Ud + 1] << 8 | dd[Ud + 2] << 16) >> (7 & Jd) & (1 << Td[md]) - 1);
              if ((Jd < 0 || Sd + qd > Bd.length || xd + qd + Nd > Bd.length) && vd(0), Ud = (Jd -= Wd) >> 3, ud = wd.t[ud] + ((dd[Ud] | dd[Ud + 1] << 8) >> (7 & Jd) & (1 << Wd) - 1), Ud = (Jd -= Rd) >> 3, id = Qd.t[id] + ((dd[Ud] | dd[Ud + 1] << 8) >> (7 & Jd) & (1 << Rd) - 1), Ud = (Jd -= Kd) >> 3, Vd = td.t[Vd] + ((dd[Ud] | dd[Ud + 1] << 8) >> (7 & Jd) & (1 << Kd) - 1), od > 3) Od.o[2] = Od.o[1], Od.o[1] = Od.o[0], Od.o[0] = od -= 3;
              else {
                const dd = od - (0 != qd);
                dd ? (od = 3 == dd ? Od.o[0] - 1 : Od.o[dd], dd > 1 && (Od.o[2] = Od.o[1]), Od.o[1] = Od.o[0], Od.o[0] = od) : od = Od.o[0]
              }
              for (let dd = 0; dd < qd; ++dd) Bd[xd + dd] = Bd[Sd + dd];
              xd += qd, Sd += qd;
              let Hd = xd - od;
              if (Hd < 0) {
                let dd = -Hd;
                const md = Od.e + Hd;
                md < 0 && vd(4), dd > Nd && (dd = Nd);
                for (let Wd = 0; Wd < dd; ++Wd) Bd[xd + Wd] = Od.w[md + Wd];
                xd += dd, Nd -= dd, Hd = 0
              }
              for (let dd = 0; dd < Nd; ++dd) Bd[xd + dd] = Bd[Hd + dd];
              xd += Nd
            }
            if (xd != Sd)
              for (; Sd < Bd.length;) Bd[xd++] = Bd[Sd++];
            else xd = Bd.length;
            Fd ? Od.y += xd : Bd = Xd(Bd, 0, xd)
          } else if (Fd) {
            if (Od.y += Jd, Sd)
              for (let dd = 0; dd < Jd; ++dd) Bd[dd] = Bd[Sd + dd]
          } else Sd && (Bd = Xd(Bd, Sd));
          return Od.b = bd, Bd
        }
        vd(2)
      }
    };
  class Ud {
    output = null;
    decoded = 0;
    done = !1;
    st = null;
    parts = [];
    jK = 0;
    needed = 18;
    size;
    constructor(dd) {
      this.size = dd
    }
    push(dd) {
      if (this.done) return;
      if (this.parts.push(dd), this.jK += dd.length, this.jK < this.needed) return;
      const Od = ((dd, Od) => {
        if (1 == dd.length) return dd[0];
        const Wd = new md(Od);
        for (let md = 0, Fd = 0; md < dd.length; ++md) {
          const Od = dd[md];
          Wd.set(Od, Fd), Fd += Od.length
        }
        return Wd
      })(this.parts, this.jK);
      let Wd = this.st;
      if (!Wd) {
        const dd = td(Od, new md(0));
        "number" != typeof dd && dd.u === this.size || vd(0, `not a zstd frame of ${this.size} bytes`), Wd = this.st = td(Od, 1), Wd.e = 0, this.output = Wd.w
      }
      for (;;) {
        const dd = Od.length - Wd.b;
        if (dd < 3) {
          this.needed = 3;
          break
        }
        const md = Od[Wd.b],
          Fd = md >> 1 & 3;
        3 == Fd && vd(2);
        const Rd = md >> 3 | Od[Wd.b + 1] << 5 | Od[Wd.b + 2] << 13;
        Rd > Wd.m && vd(0), 0 == Fd && Wd.y + Rd > Wd.u && vd(0);
        const Xd = 1 == Fd ? 4 : 3 + Rd;
        if (dd < Xd) {
          this.needed = Xd;
          break
        }
        if (Jd(Od, Wd, Wd.w) || vd(5), Wd.e = Wd.y, (Wd.y > Wd.u || Wd.l && Wd.y != Wd.u) && vd(0), Wd.l) {
          this.done = !0;
          break
        }
      }
      this.decoded = Wd.y;
      const Fd = Od.subarray(Wd.b);
      this.parts = Fd.length ? [Fd] : [], this.jK = Fd.length, Wd.b = 0
    }
  }
  class xd {
    post;
    href = "";
    Ft = null;
    given = 0;
    stopped = !1;
    constructor(dd) {
      this.post = dd
    }
    take(Od) {
      if (!this.stopped) try {
        this.answer(Od)
      } catch (md) {
        this.stop(md instanceof RangeError ? `out of memory decoding ${this.href}: ${dd(md)}` : `${this.href} did not decode: ${dd(md)}`)
      }
    }
    answer(dd) {
      if (null === this.Ft) {
        const [Od, md] = dd;
        return this.href = Od, void(this.Ft = new Ud(md))
      }
      if (null === dd) return void this.stop(`${this.href} ended before its module did`);
      const Od = this.Ft;
      Od.push(dd);
      const {
        output: md,
        decoded: Wd
      } = Od;
      if (null !== md && Wd > this.given) {
        const dd = md.slice(this.given, Wd).buffer;
        this.given = Wd, this.post(dd, [dd])
      }
      Od.done && this.stop(!0)
    }
    stop(dd) {
      this.stopped = !0, this.post(dd)
    }
  }
  const Bd = globalThis.WorkerGlobalScope;
  if (void 0 !== Bd && globalThis instanceof Bd) {
    const dd = globalThis,
      Od = new xd((function(Od) {
        let md = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        dd.postMessage(Od, md)
      }));
    dd.addEventListener("message", (dd => {
      let {
        data: md
      } = dd;
      Od.take(md)
    }))
  }
})();