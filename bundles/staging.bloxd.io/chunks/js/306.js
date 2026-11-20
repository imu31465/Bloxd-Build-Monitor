export const id = 306;
export const ids = [306];
export const modules = {
  41184: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      ReadExrDataAsync: () => Tz,
      _ExrTextureLoader: () => lz
    });
    var hv = Pv(38209),
      Sv = Pv(36620),
      ev = Pv(39368);
    const gv = 4,
      pv = 4,
      dv = 1,
      Nv = 2,
      lv = 8,
      Tv = 65536,
      Wv = Tv >> 3,
      wv = 14,
      av = 65537,
      sv = 1 << wv,
      Cv = sv - 1,
      iv = 59,
      cv = 63,
      Gv = 2 + cv - iv;
    var mv, jv;

    function fv(vv, zv) {
      const Pv = new Uint8Array(vv);
      let hv = 0;
      for (; 0 != Pv[zv.value + hv];) hv += 1;
      const Sv = (new TextDecoder).decode(Pv.slice(zv.value, zv.value + hv));
      return zv.value = zv.value + hv + 1, Sv
    }

    function Fv(vv, zv) {
      const Pv = vv.getInt32(zv.value, !0);
      return zv.value += gv, Pv
    }

    function Yv(vv, zv) {
      const Pv = vv.getUint32(zv.value, !0);
      return zv.value += gv, Pv
    }

    function nv(vv, zv) {
      const Pv = vv.getUint8(zv.value);
      return zv.value += dv, Pv
    }

    function Ov(vv, zv) {
      const Pv = vv.getUint16(zv.value, !0);
      return zv.value += Nv, Pv
    }

    function Dv(vv, zv) {
      const Pv = vv[zv.value];
      return zv.value += dv, Pv
    }

    function Kv(vv, zv) {
      let Pv;
      return Pv = "getBigInt64" in DataView.prototype ? Number(vv.getBigInt64(zv.value, !0)) : vv.getUint32(zv.value + 4, !0) + Number(vv.getUint32(zv.value, !0) << 32), zv.value += lv, Pv
    }

    function Vv(vv, zv) {
      const Pv = vv.getFloat32(zv.value, !0);
      return zv.value += pv, Pv
    }

    function Uv(vv, zv) {
      return (0, ev.b)(Ov(vv, zv))
    }

    function Rv(vv, zv) {
      return (0, ev.i)((0, Sv.Clamp)(Vv(vv, zv), -ev.e, ev.e))
    }

    function xv(vv, zv, Pv, hv) {
      switch (Pv) {
        case "string":
        case "stringvector":
        case "iccProfile":
          return function(vv, zv, Pv) {
            const hv = (new TextDecoder).decode(new Uint8Array(vv).slice(zv.value, zv.value + Pv));
            return zv.value = zv.value + Pv, hv
          }(vv.buffer, zv, hv);
        case "chlist":
          return function(vv, zv, Pv) {
            const hv = zv.value,
              Sv = [];
            for (; zv.value < hv + Pv - 1;) {
              const Pv = fv(vv.buffer, zv),
                hv = Fv(vv, zv),
                ev = nv(vv, zv);
              zv.value += 3;
              const gv = Fv(vv, zv),
                pv = Fv(vv, zv);
              Sv.push({
                name: Pv,
                pixelType: hv,
                pLinear: ev,
                xSampling: gv,
                ySampling: pv
              })
            }
            return zv.value += 1, Sv
          }(vv, zv, hv);
        case "chromaticities":
          return function(vv, zv) {
            return {
              redX: Vv(vv, zv),
              redY: Vv(vv, zv),
              greenX: Vv(vv, zv),
              greenY: Vv(vv, zv),
              blueX: Vv(vv, zv),
              blueY: Vv(vv, zv),
              whiteX: Vv(vv, zv),
              whiteY: Vv(vv, zv)
            }
          }(vv, zv);
        case "compression":
          return function(vv, zv) {
            return nv(vv, zv)
          }(vv, zv);
        case "box2i":
          return function(vv, zv) {
            return {
              xMin: Fv(vv, zv),
              yMin: Fv(vv, zv),
              xMax: Fv(vv, zv),
              yMax: Fv(vv, zv)
            }
          }(vv, zv);
        case "lineOrder":
          return function(vv, zv) {
            const Pv = nv(vv, zv);
            return jv[Pv]
          }(vv, zv);
        case "float":
          return Vv(vv, zv);
        case "v2f":
          return function(vv, zv) {
            return [Vv(vv, zv), Vv(vv, zv)]
          }(vv, zv);
        case "v3f":
          return function(vv, zv) {
            return [Vv(vv, zv), Vv(vv, zv), Vv(vv, zv)]
          }(vv, zv);
        case "int":
          return Fv(vv, zv);
        case "rational":
          return function(vv, zv) {
            return [Fv(vv, zv), Yv(vv, zv)]
          }(vv, zv);
        case "timecode":
          return function(vv, zv) {
            return [Yv(vv, zv), Yv(vv, zv)]
          }(vv, zv);
        case "preview":
          return zv.value += hv, "skipped";
        default:
          return void(zv.value += hv)
      }
    }

    function tv(vv) {
      for (let zv = 1; zv < vv.length; zv++) {
        const Pv = vv[zv - 1] + vv[zv] - 128;
        vv[zv] = Pv
      }
    }

    function qv(vv, zv) {
      let Pv = 0,
        hv = Math.floor((vv.length + 1) / 2),
        Sv = 0;
      const ev = vv.length - 1;
      for (; !(Sv > ev) && (zv[Sv++] = vv[Pv++], !(Sv > ev));) zv[Sv++] = vv[hv++]
    }! function(vv) {
      vv[vv.NO_COMPRESSION = 0] = "NO_COMPRESSION", vv[vv.RLE_COMPRESSION = 1] = "RLE_COMPRESSION", vv[vv.ZIPS_COMPRESSION = 2] = "ZIPS_COMPRESSION", vv[vv.ZIP_COMPRESSION = 3] = "ZIP_COMPRESSION", vv[vv.PIZ_COMPRESSION = 4] = "PIZ_COMPRESSION", vv[vv.PXR24_COMPRESSION = 5] = "PXR24_COMPRESSION"
    }(mv || (mv = {})),
    function(vv) {
      vv[vv.INCREASING_Y = 0] = "INCREASING_Y", vv[vv.DECREASING_Y = 1] = "DECREASING_Y"
    }(jv || (jv = {}));
    const Iv = 20000630;

    function Qv(vv, zv) {
      if (vv.getUint32(0, !0) != Iv) throw new Error("Incorrect OpenEXR format");
      const Pv = vv.getUint8(4),
        Sv = vv.getUint8(5),
        ev = {
          singleTile: !!(2 & Sv),
          longName: !!(4 & Sv),
          deepFormat: !!(8 & Sv),
          multiPart: !!(16 & Sv)
        };
      zv.value = 8;
      const gv = {};
      let pv = !0;
      for (; pv;) {
        const Pv = fv(vv.buffer, zv);
        if (Pv) {
          const Sv = fv(vv.buffer, zv),
            ev = xv(vv, zv, Sv, Yv(vv, zv));
          void 0 === ev ? hv.d.Warn(`Unknown header attribute type ${Sv}'.`) : gv[Pv] = ev
        } else pv = !1
      }
      if (0 != (-5 & Sv)) throw new Error("Unsupported file format");
      return {
        version: Pv,
        spec: ev,
        ...gv
      }
    }
    const Zv = 32768,
      Av = 65535;

    function Lv(vv, zv, Pv, hv, Sv) {
      for (; Pv < vv;) zv = zv << 8 | Dv(hv, Sv), Pv += 8;
      return {
        l: zv >> (Pv -= vv) & (1 << vv) - 1,
        c: zv,
        lc: Pv
      }
    }

    function Hv(vv, zv, Pv, hv) {
      return {
        c: vv = vv << 8 | Dv(Pv, hv),
        lc: zv += 8
      }
    }

    function Mv(vv, zv, Pv, hv, Sv, ev, gv, pv, dv) {
      if (vv == zv) {
        if (hv < 8) {
          const vv = Hv(Pv, hv, Sv, ev);
          Pv = vv.c, hv = vv.lc
        }
        let vv = Pv >> (hv -= 8);
        if (vv = new Uint8Array([vv])[0], pv.value + vv > dv) return null;
        const zv = gv[pv.value - 1];
        for (; vv-- > 0;) gv[pv.value++] = zv
      } else {
        if (!(pv.value < dv)) return null;
        gv[pv.value++] = vv
      }
      return {
        c: Pv,
        lc: hv
      }
    }
    const yv = new Array(59);

    function Bv(vv, zv, Pv, hv, Sv, ev) {
      const gv = zv;
      let pv = 0,
        dv = 0;
      for (; hv <= Sv; hv++) {
        if (gv.value - zv.value > Pv) return;
        let Nv = Lv(6, pv, dv, vv, gv);
        const lv = Nv.l;
        if (pv = Nv.c, dv = Nv.lc, ev[hv] = lv, lv == cv) {
          if (gv.value - zv.value > Pv) throw new Error("Error in HufUnpackEncTable");
          Nv = Lv(8, pv, dv, vv, gv);
          let lv = Nv.l + Gv;
          if (pv = Nv.c, dv = Nv.lc, hv + lv > Sv + 1) throw new Error("Error in HufUnpackEncTable");
          for (; lv--;) ev[hv++] = 0;
          hv--
        } else if (lv >= iv) {
          let vv = lv - iv + 2;
          if (hv + vv > Sv + 1) throw new Error("Error in HufUnpackEncTable");
          for (; vv--;) ev[hv++] = 0;
          hv--
        }
      }! function(vv) {
        for (let Pv = 0; Pv <= 58; ++Pv) yv[Pv] = 0;
        for (let Pv = 0; Pv < av; ++Pv) yv[vv[Pv]] += 1;
        let zv = 0;
        for (let Pv = 58; Pv > 0; --Pv) {
          const vv = zv + yv[Pv] >> 1;
          yv[Pv] = zv, zv = vv
        }
        for (let Pv = 0; Pv < av; ++Pv) {
          const zv = vv[Pv];
          zv > 0 && (vv[Pv] = zv | yv[zv]++ << 6)
        }
      }(ev)
    }

    function Jv(vv) {
      return 63 & vv
    }

    function Ev(vv) {
      return vv >> 6
    }

    function ov(vv, zv, Pv, hv, Sv, ev) {
      const gv = Pv.value,
        pv = Yv(zv, Pv),
        dv = Yv(zv, Pv);
      Pv.value += 4;
      const Nv = Yv(zv, Pv);
      if (Pv.value += 4, pv < 0 || pv >= av || dv < 0 || dv >= av) throw new Error("Wrong HUF_ENCSIZE");
      const lv = new Array(av),
        Tv = new Array(sv);
      ! function(vv) {
        for (let zv = 0; zv < sv; zv++) vv[zv] = {}, vv[zv].len = 0, vv[zv].lit = 0, vv[zv].p = null
      }(Tv);
      if (Bv(vv, Pv, hv - (Pv.value - gv), pv, dv, lv), Nv > 8 * (hv - (Pv.value - gv))) throw new Error("Wrong hufUncompress");
      ! function(vv, zv, Pv, hv) {
        for (; zv <= Pv; zv++) {
          const Pv = Ev(vv[zv]),
            Sv = Jv(vv[zv]);
          if (Pv >> Sv) throw new Error("Invalid table entry");
          if (Sv > wv) {
            const vv = hv[Pv >> Sv - wv];
            if (vv.len) throw new Error("Invalid table entry");
            if (vv.lit++, vv.p) {
              const zv = vv.p;
              vv.p = new Array(vv.lit);
              for (let Pv = 0; Pv < vv.lit - 1; ++Pv) vv.p[Pv] = zv[Pv]
            } else vv.p = new Array(1);
            vv.p[vv.lit - 1] = zv
          } else if (Sv) {
            let vv = 0;
            for (let ev = 1 << wv - Sv; ev > 0; ev--) {
              const ev = hv[(Pv << wv - Sv) + vv];
              if (ev.len || ev.p) throw new Error("Invalid table entry");
              ev.len = Sv, ev.lit = zv, vv++
            }
          }
        }
      }(lv, pv, dv, Tv),
      function(vv, zv, Pv, hv, Sv, ev, gv, pv, dv) {
        let Nv = 0,
          lv = 0;
        const Tv = gv,
          Wv = Math.trunc(hv.value + (Sv + 7) / 8);
        for (; hv.value < Wv;) {
          let Sv = Hv(Nv, lv, Pv, hv);
          for (Nv = Sv.c, lv = Sv.lc; lv >= wv;) {
            const gv = zv[Nv >> lv - wv & Cv];
            if (gv.len) {
              lv -= gv.len;
              const vv = Mv(gv.lit, ev, Nv, lv, Pv, hv, pv, dv, Tv);
              vv && (Nv = vv.c, lv = vv.lc)
            } else {
              if (!gv.p) throw new Error("hufDecode issues");
              let zv;
              for (zv = 0; zv < gv.lit; zv++) {
                const wv = Jv(vv[gv.p[zv]]);
                for (; lv < wv && hv.value < Wv;) Sv = Hv(Nv, lv, Pv, hv), Nv = Sv.c, lv = Sv.lc;
                if (lv >= wv && Ev(vv[gv.p[zv]]) == (Nv >> lv - wv & (1 << wv) - 1)) {
                  lv -= wv;
                  const vv = Mv(gv.p[zv], ev, Nv, lv, Pv, hv, pv, dv, Tv);
                  vv && (Nv = vv.c, lv = vv.lc);
                  break
                }
              }
              if (zv == gv.lit) throw new Error("HufDecode issues")
            }
          }
        }
        const av = 8 - Sv & 7;
        for (Nv >>= av, lv -= av; lv > 0;) {
          const vv = zv[Nv << wv - lv & Cv];
          if (!vv.len) throw new Error("HufDecode issues");
          {
            lv -= vv.len;
            const zv = Mv(vv.lit, ev, Nv, lv, Pv, hv, pv, dv, Tv);
            zv && (Nv = zv.c, lv = zv.lc)
          }
        }
      }(lv, Tv, vv, Pv, Nv, dv, ev, Sv, {
        value: 0
      })
    }

    function bv(vv) {
      return 65535 & vv
    }

    function rv(vv) {
      const zv = bv(vv);
      return zv > 32767 ? zv - 65536 : zv
    }

    function kv(vv, zv) {
      const Pv = rv(vv),
        hv = rv(zv),
        Sv = Pv + (1 & hv) + (hv >> 1);
      return {
        a: Sv,
        b: Sv - hv
      }
    }

    function Xv(vv, zv) {
      const Pv = bv(vv),
        hv = bv(zv),
        Sv = Pv - (hv >> 1) & Av;
      return {
        a: hv + Sv - Zv & Av,
        b: Sv
      }
    }

    function uv(vv, zv, Pv, hv, Sv, ev, gv) {
      const pv = gv < 16384,
        dv = Pv > Sv ? Sv : Pv;
      let Nv, lv, Tv = 1;
      for (; Tv <= dv;) Tv <<= 1;
      for (Tv >>= 1, Nv = Tv, Tv >>= 1; Tv >= 1;) {
        lv = 0;
        const gv = lv + ev * (Sv - Nv),
          dv = ev * Tv,
          Wv = ev * Nv,
          wv = hv * Tv,
          av = hv * Nv;
        let sv, Cv, iv, cv;
        for (; lv <= gv; lv += Wv) {
          let Sv = lv;
          const ev = lv + hv * (Pv - Nv);
          for (; Sv <= ev; Sv += av) {
            const Pv = Sv + wv,
              hv = Sv + dv,
              ev = hv + wv;
            if (pv) {
              let gv = kv(vv[Sv + zv], vv[hv + zv]);
              sv = gv.a, iv = gv.b, gv = kv(vv[Pv + zv], vv[ev + zv]), Cv = gv.a, cv = gv.b, gv = kv(sv, Cv), vv[Sv + zv] = gv.a, vv[Pv + zv] = gv.b, gv = kv(iv, cv), vv[hv + zv] = gv.a, vv[ev + zv] = gv.b
            } else {
              let gv = Xv(vv[Sv + zv], vv[hv + zv]);
              sv = gv.a, iv = gv.b, gv = Xv(vv[Pv + zv], vv[ev + zv]), Cv = gv.a, cv = gv.b, gv = Xv(sv, Cv), vv[Sv + zv] = gv.a, vv[Pv + zv] = gv.b, gv = Xv(iv, cv), vv[hv + zv] = gv.a, vv[ev + zv] = gv.b
            }
          }
          if (Pv & Tv) {
            const Pv = Sv + dv;
            let hv;
            hv = pv ? kv(vv[Sv + zv], vv[Pv + zv]) : Xv(vv[Sv + zv], vv[Pv + zv]), sv = hv.a, vv[Pv + zv] = hv.b, vv[Sv + zv] = sv
          }
        }
        if (Sv & Tv) {
          let Sv = lv;
          const ev = lv + hv * (Pv - Nv);
          for (; Sv <= ev; Sv += av) {
            const Pv = Sv + wv;
            let hv;
            hv = pv ? kv(vv[Sv + zv], vv[Pv + zv]) : Xv(vv[Sv + zv], vv[Pv + zv]), sv = hv.a, vv[Pv + zv] = hv.b, vv[Sv + zv] = sv
          }
        }
        Nv = Tv, Tv >>= 1
      }
      return lv
    }

    function vz(vv) {
      return new DataView(vv.array.buffer, vv.offset.value, vv.size)
    }

    function zz(vv) {
      const zv = vv.viewer.buffer.slice(vv.offset.value, vv.offset.value + vv.size),
        Pv = new Uint8Array(function(vv) {
          let zv = vv.byteLength;
          const Pv = [];
          let hv = 0;
          const Sv = new DataView(vv);
          for (; zv > 0;) {
            const vv = Sv.getInt8(hv++);
            if (vv < 0) {
              const ev = -vv;
              zv -= ev + 1;
              for (let vv = 0; vv < ev; vv++) Pv.push(Sv.getUint8(hv++))
            } else {
              const ev = vv;
              zv -= 2;
              const gv = Sv.getUint8(hv++);
              for (let vv = 0; vv < ev + 1; vv++) Pv.push(gv)
            }
          }
          return Pv
        }(zv)),
        hv = new Uint8Array(Pv.length);
      return tv(Pv), qv(Pv, hv), new DataView(hv.buffer)
    }

    function Pz(vv) {
      const zv = vv.array.slice(vv.offset.value, vv.offset.value + vv.size),
        Pv = fflate.unzlibSync(zv),
        hv = new Uint8Array(Pv.length);
      return tv(Pv), qv(Pv, hv), new DataView(hv.buffer)
    }

    function hz(vv) {
      const zv = vv.array.slice(vv.offset.value, vv.offset.value + vv.size),
        Pv = fflate.unzlibSync(zv),
        hv = vv.lines * vv.channels * vv.width,
        Sv = 1 == vv.type ? new Uint16Array(hv) : new Uint32Array(hv);
      let ev = 0,
        gv = 0;
      const pv = new Array(4);
      for (let dv = 0; dv < vv.lines; dv++)
        for (let zv = 0; zv < vv.channels; zv++) {
          let zv = 0;
          switch (vv.type) {
            case 1:
              pv[0] = ev, pv[1] = pv[0] + vv.width, ev = pv[1] + vv.width;
              for (let hv = 0; hv < vv.width; ++hv) {
                zv += Pv[pv[0]++] << 8 | Pv[pv[1]++], Sv[gv] = zv, gv++
              }
              break;
            case 2:
              pv[0] = ev, pv[1] = pv[0] + vv.width, pv[2] = pv[1] + vv.width, ev = pv[2] + vv.width;
              for (let hv = 0; hv < vv.width; ++hv) {
                zv += Pv[pv[0]++] << 24 | Pv[pv[1]++] << 16 | Pv[pv[2]++] << 8, Sv[gv] = zv, gv++
              }
          }
        }
      return new DataView(Sv.buffer)
    }

    function Sz(vv) {
      const zv = vv.viewer,
        Pv = {
          value: vv.offset.value
        },
        hv = new Uint16Array(vv.width * vv.scanlineBlockSize * (vv.channels * vv.type)),
        Sv = new Uint8Array(Wv);
      let ev = 0;
      const gv = new Array(vv.channels);
      for (let Nv = 0; Nv < vv.channels; Nv++) gv[Nv] = {}, gv[Nv].start = ev, gv[Nv].end = gv[Nv].start, gv[Nv].nx = vv.width, gv[Nv].ny = vv.lines, gv[Nv].size = vv.type, ev += gv[Nv].nx * gv[Nv].ny * gv[Nv].size;
      const pv = Ov(zv, Pv),
        dv = Ov(zv, Pv);
      if (dv >= Wv) throw new Error("Wrong PIZ_COMPRESSION BITMAP_SIZE");
      if (pv <= dv)
        for (let Nv = 0; Nv < dv - pv + 1; Nv++) Sv[Nv + pv] = nv(zv, Pv);
      const lv = new Uint16Array(Tv),
        wv = function(vv, zv) {
          let Pv = 0;
          for (let Sv = 0; Sv < Tv; ++Sv)(0 == Sv || vv[Sv >> 3] & 1 << (7 & Sv)) && (zv[Pv++] = Sv);
          const hv = Pv - 1;
          for (; Pv < Tv;) zv[Pv++] = 0;
          return hv
        }(Sv, lv),
        av = Yv(zv, Pv);
      ov(vv.array, zv, Pv, av, hv, ev);
      for (let Nv = 0; Nv < vv.channels; ++Nv) {
        const vv = gv[Nv];
        for (let zv = 0; zv < gv[Nv].size; ++zv) uv(hv, vv.start + zv, vv.nx, vv.size, vv.ny, vv.nx * vv.size, wv)
      }! function(vv, zv, Pv) {
        for (let hv = 0; hv < Pv; ++hv) zv[hv] = vv[zv[hv]]
      }(lv, hv, ev);
      let sv = 0;
      const Cv = new Uint8Array(hv.buffer.byteLength);
      for (let Tv = 0; Tv < vv.lines; Tv++)
        for (let zv = 0; zv < vv.channels; zv++) {
          const vv = gv[zv],
            Pv = vv.nx * vv.size,
            Sv = new Uint8Array(hv.buffer, vv.end * Nv, Pv * Nv);
          Cv.set(Sv, sv), sv += Pv * Nv, vv.end += Pv
        }
      return new DataView(Cv.buffer)
    }
    var ez, gz = Pv(39399);
    ! function(vv) {
      vv[vv.Float = 0] = "Float", vv[vv.HalfFloat = 1] = "HalfFloat"
    }(ez || (ez = {}));
    class pz {}
    async function dz(vv, zv, Pv, hv) {
      const Sv = {
        size: 0,
        viewer: zv,
        array: new Uint8Array(zv.buffer),
        offset: Pv,
        width: vv.dataWindow.xMax - vv.dataWindow.xMin + 1,
        height: vv.dataWindow.yMax - vv.dataWindow.yMin + 1,
        channels: vv.channels.length,
        channelLineOffsets: {},
        scanOrder: () => 0,
        bytesPerLine: 0,
        outLineWidth: 0,
        lines: 0,
        scanlineBlockSize: 0,
        inputSize: null,
        type: 0,
        uncompress: null,
        getter: () => 0,
        format: 5,
        outputChannels: 0,
        decodeChannels: {},
        blockCount: null,
        byteArray: null,
        linearSpace: !1,
        textureType: 0
      };
      switch (vv.compression) {
        case mv.NO_COMPRESSION:
          Sv.lines = 1, Sv.uncompress = vz;
          break;
        case mv.RLE_COMPRESSION:
          Sv.lines = 1, Sv.uncompress = zz;
          break;
        case mv.ZIPS_COMPRESSION:
          Sv.lines = 1, Sv.uncompress = Pz, await gz.h.LoadScriptAsync(pz.FFLATEUrl);
          break;
        case mv.ZIP_COMPRESSION:
          Sv.lines = 16, Sv.uncompress = Pz, await gz.h.LoadScriptAsync(pz.FFLATEUrl);
          break;
        case mv.PIZ_COMPRESSION:
          Sv.lines = 32, Sv.uncompress = Sz;
          break;
        case mv.PXR24_COMPRESSION:
          Sv.lines = 16, Sv.uncompress = hz, await gz.h.LoadScriptAsync(pz.FFLATEUrl);
          break;
        default:
          throw new Error(mv[vv.compression] + " is unsupported")
      }
      Sv.scanlineBlockSize = Sv.lines;
      const ev = {};
      for (const pv of vv.channels) switch (pv.name) {
        case "R":
        case "G":
        case "B":
        case "A":
        case "Y":
          ev[pv.name] = !0, Sv.type = pv.pixelType
      }
      let gv = !1;
      if (ev.R && ev.G && ev.B && ev.A) Sv.outputChannels = 4, Sv.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (ev.R && ev.G && ev.B) gv = !0, Sv.outputChannels = 4, Sv.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (ev.R && ev.G) Sv.outputChannels = 2, Sv.decodeChannels = {
        R: 0,
        G: 1
      };
      else if (ev.R) Sv.outputChannels = 1, Sv.decodeChannels = {
        R: 0
      };
      else {
        if (!ev.Y) throw new Error("EXRLoader.parse: file contains unsupported data channels.");
        Sv.outputChannels = 1, Sv.decodeChannels = {
          Y: 0
        }
      }
      if (1 === Sv.type) switch (hv) {
        case ez.Float:
          Sv.getter = Uv, Sv.inputSize = Nv;
          break;
        case ez.HalfFloat:
          Sv.getter = Ov, Sv.inputSize = Nv
      } else {
        if (2 !== Sv.type) throw new Error("Unsupported pixelType " + Sv.type + " for " + vv.compression);
        switch (hv) {
          case ez.Float:
            Sv.getter = Vv, Sv.inputSize = pv;
            break;
          case ez.HalfFloat:
            Sv.getter = Rv, Sv.inputSize = pv
        }
      }
      Sv.blockCount = Sv.height / Sv.scanlineBlockSize;
      for (let pv = 0; pv < Sv.blockCount; pv++) Kv(zv, Pv);
      const dv = Sv.width * Sv.height * Sv.outputChannels;
      switch (hv) {
        case ez.Float:
          Sv.byteArray = new Float32Array(dv), Sv.textureType = 1, gv && Sv.byteArray.fill(1, 0, dv);
          break;
        case ez.HalfFloat:
          Sv.byteArray = new Uint16Array(dv), Sv.textureType = 2, gv && Sv.byteArray.fill(15360, 0, dv);
          break;
        default:
          throw new Error("Unsupported type: " + hv)
      }
      let lv = 0;
      for (const pv of vv.channels) void 0 !== Sv.decodeChannels[pv.name] && (Sv.channelLineOffsets[pv.name] = lv * Sv.width), lv += 2 * pv.pixelType;
      return Sv.bytesPerLine = Sv.width * lv, Sv.outLineWidth = Sv.width * Sv.outputChannels, "INCREASING_Y" === vv.lineOrder ? Sv.scanOrder = vv => vv : Sv.scanOrder = vv => Sv.height - 1 - vv, 4 == Sv.outputChannels ? (Sv.format = 5, Sv.linearSpace = !0) : (Sv.format = 6, Sv.linearSpace = !1), Sv
    }

    function Nz(vv, zv, Pv, hv) {
      const Sv = {
        value: 0
      };
      for (let ev = 0; ev < vv.height / vv.scanlineBlockSize; ev++) {
        const gv = Fv(Pv, hv) - zv.dataWindow.yMin;
        vv.size = Yv(Pv, hv), vv.lines = gv + vv.scanlineBlockSize > vv.height ? vv.height - gv : vv.scanlineBlockSize;
        const pv = vv.size < vv.lines * vv.bytesPerLine && vv.uncompress ? vv.uncompress(vv) : vz(vv);
        hv.value += vv.size;
        for (let Pv = 0; Pv < vv.scanlineBlockSize; Pv++) {
          const hv = ev * vv.scanlineBlockSize,
            gv = Pv + vv.scanOrder(hv);
          if (gv >= vv.height) continue;
          const dv = Pv * vv.bytesPerLine,
            Nv = (vv.height - 1 - gv) * vv.outLineWidth;
          for (let Pv = 0; Pv < vv.channels; Pv++) {
            const hv = zv.channels[Pv].name,
              ev = vv.channelLineOffsets[hv],
              gv = vv.decodeChannels[hv];
            if (void 0 !== gv) {
              Sv.value = dv + ev;
              for (let zv = 0; zv < vv.width; zv++) {
                const Pv = Nv + zv * vv.outputChannels + gv;
                vv.byteArray && (vv.byteArray[Pv] = vv.getter(pv, Sv))
              }
            }
          }
        }
      }
    }
    pz.DefaultOutputType = ez.HalfFloat, pz.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class lz {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(vv, zv, Pv, hv, Sv) {
        throw ".exr not supported in Cube."
      }
      loadData(vv, zv, Pv) {
        const Sv = new DataView(vv.buffer),
          ev = {
            value: 0
          },
          gv = Qv(Sv, ev);
        dz(gv, Sv, ev, pz.DefaultOutputType).then((vv => {
          Nz(vv, gv, Sv, ev);
          const hv = gv.dataWindow.xMax - gv.dataWindow.xMin + 1,
            pv = gv.dataWindow.yMax - gv.dataWindow.yMin + 1;
          Pv(hv, pv, zv.generateMipMaps, !1, (() => {
            const Pv = zv.ma();
            zv.format = gv.format, zv.type = vv.textureType, zv.invertY = !1, zv._gammaSpace = !gv.linearSpace, vv.byteArray && Pv._uploadDataToTextureDirectly(zv, vv.byteArray, 0, 0, void 0, !0)
          }))
        })).catch((vv => {
          hv.d.Error("Failed to load EXR texture: ", vv)
        }))
      }
    }
    async function Tz(vv) {
      const zv = new DataView(vv),
        Pv = {
          value: 0
        },
        Sv = Qv(zv, Pv);
      try {
        const vv = await dz(Sv, zv, Pv, ez.Float);
        return Nz(vv, Sv, zv, Pv), vv.byteArray ? {
          width: Sv.dataWindow.xMax - Sv.dataWindow.xMin + 1,
          height: Sv.dataWindow.yMax - Sv.dataWindow.yMin + 1,
          data: new Float32Array(vv.byteArray)
        } : (hv.d.Error("Failed to decode EXR data: No byte array available."), {
          width: 0,
          height: 0,
          data: null
        })
      } catch (ev) {
        hv.d.Error("Failed to load EXR data: ", ev)
      }
      return {
        width: 0,
        height: 0,
        data: null
      }
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);