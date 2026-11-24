export const id = 315;
export const ids = [315];
export const modules = {
  41859: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      ReadExrDataAsync: () => ZF,
      _ExrTextureLoader: () => tF
    });
    var Xk = Ik(38674),
      Tk = Ik(37189),
      ik = Ik(40064);
    const yk = 4,
      lk = 4,
      ak = 1,
      qk = 2,
      Lk = 8,
      tk = 65536,
      Zk = tk >> 3,
      jk = 14,
      ek = 65537,
      wk = 1 << jk,
      Hk = wk - 1,
      Jk = 59,
      xk = 63,
      Pk = 2 + xk - Jk;
    var Kk, Qk;

    function sk(kk, Fk) {
      const Ik = new Uint8Array(kk);
      let Xk = 0;
      for (; 0 != Ik[Fk.value + Xk];) Xk += 1;
      const Tk = (new TextDecoder).decode(Ik.slice(Fk.value, Fk.value + Xk));
      return Fk.value = Fk.value + Xk + 1, Tk
    }

    function Vk(kk, Fk) {
      const Ik = kk.getInt32(Fk.value, !0);
      return Fk.value += yk, Ik
    }

    function zk(kk, Fk) {
      const Ik = kk.getUint32(Fk.value, !0);
      return Fk.value += yk, Ik
    }

    function Sk(kk, Fk) {
      const Ik = kk.getUint8(Fk.value);
      return Fk.value += ak, Ik
    }

    function vk(kk, Fk) {
      const Ik = kk.getUint16(Fk.value, !0);
      return Fk.value += qk, Ik
    }

    function Ek(kk, Fk) {
      const Ik = kk[Fk.value];
      return Fk.value += ak, Ik
    }

    function Ok(kk, Fk) {
      let Ik;
      return Ik = "getBigInt64" in DataView.prototype ? Number(kk.getBigInt64(Fk.value, !0)) : kk.getUint32(Fk.value + 4, !0) + Number(kk.getUint32(Fk.value, !0) << 32), Fk.value += Lk, Ik
    }

    function nk(kk, Fk) {
      const Ik = kk.getFloat32(Fk.value, !0);
      return Fk.value += lk, Ik
    }

    function Gk(kk, Fk) {
      return (0, ik.c)(vk(kk, Fk))
    }

    function pk(kk, Fk) {
      return (0, ik.i)((0, Tk.Clamp)(nk(kk, Fk), -ik.f, ik.f))
    }

    function uk(kk, Fk, Ik, Xk) {
      switch (Ik) {
        case "string":
        case "stringvector":
        case "iccProfile":
          return function(kk, Fk, Ik) {
            const Xk = (new TextDecoder).decode(new Uint8Array(kk).slice(Fk.value, Fk.value + Ik));
            return Fk.value = Fk.value + Ik, Xk
          }(kk.buffer, Fk, Xk);
        case "chlist":
          return function(kk, Fk, Ik) {
            const Xk = Fk.value,
              Tk = [];
            for (; Fk.value < Xk + Ik - 1;) {
              const Ik = sk(kk.buffer, Fk),
                Xk = Vk(kk, Fk),
                ik = Sk(kk, Fk);
              Fk.value += 3;
              const yk = Vk(kk, Fk),
                lk = Vk(kk, Fk);
              Tk.push({
                name: Ik,
                pixelType: Xk,
                pLinear: ik,
                xSampling: yk,
                ySampling: lk
              })
            }
            return Fk.value += 1, Tk
          }(kk, Fk, Xk);
        case "chromaticities":
          return function(kk, Fk) {
            return {
              redX: nk(kk, Fk),
              redY: nk(kk, Fk),
              greenX: nk(kk, Fk),
              greenY: nk(kk, Fk),
              blueX: nk(kk, Fk),
              blueY: nk(kk, Fk),
              whiteX: nk(kk, Fk),
              whiteY: nk(kk, Fk)
            }
          }(kk, Fk);
        case "compression":
          return function(kk, Fk) {
            return Sk(kk, Fk)
          }(kk, Fk);
        case "box2i":
          return function(kk, Fk) {
            return {
              xMin: Vk(kk, Fk),
              yMin: Vk(kk, Fk),
              xMax: Vk(kk, Fk),
              yMax: Vk(kk, Fk)
            }
          }(kk, Fk);
        case "lineOrder":
          return function(kk, Fk) {
            const Ik = Sk(kk, Fk);
            return Qk[Ik]
          }(kk, Fk);
        case "float":
          return nk(kk, Fk);
        case "v2f":
          return function(kk, Fk) {
            return [nk(kk, Fk), nk(kk, Fk)]
          }(kk, Fk);
        case "v3f":
          return function(kk, Fk) {
            return [nk(kk, Fk), nk(kk, Fk), nk(kk, Fk)]
          }(kk, Fk);
        case "int":
          return Vk(kk, Fk);
        case "rational":
          return function(kk, Fk) {
            return [Vk(kk, Fk), zk(kk, Fk)]
          }(kk, Fk);
        case "timecode":
          return function(kk, Fk) {
            return [zk(kk, Fk), zk(kk, Fk)]
          }(kk, Fk);
        case "preview":
          return Fk.value += Xk, "skipped";
        default:
          return void(Fk.value += Xk)
      }
    }

    function bk(kk) {
      for (let Fk = 1; Fk < kk.length; Fk++) {
        const Ik = kk[Fk - 1] + kk[Fk] - 128;
        kk[Fk] = Ik
      }
    }

    function Rk(kk, Fk) {
      let Ik = 0,
        Xk = Math.floor((kk.length + 1) / 2),
        Tk = 0;
      const ik = kk.length - 1;
      for (; !(Tk > ik) && (Fk[Tk++] = kk[Ik++], !(Tk > ik));) Fk[Tk++] = kk[Xk++]
    }! function(kk) {
      kk[kk.NO_COMPRESSION = 0] = "NO_COMPRESSION", kk[kk.RLE_COMPRESSION = 1] = "RLE_COMPRESSION", kk[kk.ZIPS_COMPRESSION = 2] = "ZIPS_COMPRESSION", kk[kk.ZIP_COMPRESSION = 3] = "ZIP_COMPRESSION", kk[kk.PIZ_COMPRESSION = 4] = "PIZ_COMPRESSION", kk[kk.PXR24_COMPRESSION = 5] = "PXR24_COMPRESSION"
    }(Kk || (Kk = {})),
    function(kk) {
      kk[kk.INCREASING_Y = 0] = "INCREASING_Y", kk[kk.DECREASING_Y = 1] = "DECREASING_Y"
    }(Qk || (Qk = {}));
    const Uk = 20000630;

    function Ck(kk, Fk) {
      if (kk.getUint32(0, !0) != Uk) throw new Error("Incorrect OpenEXR format");
      const Ik = kk.getUint8(4),
        Tk = kk.getUint8(5),
        ik = {
          singleTile: !!(2 & Tk),
          longName: !!(4 & Tk),
          deepFormat: !!(8 & Tk),
          multiPart: !!(16 & Tk)
        };
      Fk.value = 8;
      const yk = {};
      let lk = !0;
      for (; lk;) {
        const Ik = sk(kk.buffer, Fk);
        if (Ik) {
          const Tk = sk(kk.buffer, Fk),
            ik = uk(kk, Fk, Tk, zk(kk, Fk));
          void 0 === ik ? Xk.e.Warn(`Unknown header attribute type ${Tk}'.`) : yk[Ik] = ik
        } else lk = !1
      }
      if (0 != (-5 & Tk)) throw new Error("Unsupported file format");
      return {
        version: Ik,
        spec: ik,
        ...yk
      }
    }
    const Nk = 32768,
      ck = 65535;

    function Wk(kk, Fk, Ik, Xk, Tk) {
      for (; Ik < kk;) Fk = Fk << 8 | Ek(Xk, Tk), Ik += 8;
      return {
        l: Fk >> (Ik -= kk) & (1 << kk) - 1,
        c: Fk,
        lc: Ik
      }
    }

    function fk(kk, Fk, Ik, Xk) {
      return {
        c: kk = kk << 8 | Ek(Ik, Xk),
        lc: Fk += 8
      }
    }

    function Bk(kk, Fk, Ik, Xk, Tk, ik, yk, lk, ak) {
      if (kk == Fk) {
        if (Xk < 8) {
          const kk = fk(Ik, Xk, Tk, ik);
          Ik = kk.c, Xk = kk.lc
        }
        let kk = Ik >> (Xk -= 8);
        if (kk = new Uint8Array([kk])[0], lk.value + kk > ak) return null;
        const Fk = yk[lk.value - 1];
        for (; kk-- > 0;) yk[lk.value++] = Fk
      } else {
        if (!(lk.value < ak)) return null;
        yk[lk.value++] = kk
      }
      return {
        c: Ik,
        lc: Xk
      }
    }
    const dk = new Array(59);

    function Yk(kk, Fk, Ik, Xk, Tk, ik) {
      const yk = Fk;
      let lk = 0,
        ak = 0;
      for (; Xk <= Tk; Xk++) {
        if (yk.value - Fk.value > Ik) return;
        let qk = Wk(6, lk, ak, kk, yk);
        const Lk = qk.l;
        if (lk = qk.c, ak = qk.lc, ik[Xk] = Lk, Lk == xk) {
          if (yk.value - Fk.value > Ik) throw new Error("Error in HufUnpackEncTable");
          qk = Wk(8, lk, ak, kk, yk);
          let Lk = qk.l + Pk;
          if (lk = qk.c, ak = qk.lc, Xk + Lk > Tk + 1) throw new Error("Error in HufUnpackEncTable");
          for (; Lk--;) ik[Xk++] = 0;
          Xk--
        } else if (Lk >= Jk) {
          let kk = Lk - Jk + 2;
          if (Xk + kk > Tk + 1) throw new Error("Error in HufUnpackEncTable");
          for (; kk--;) ik[Xk++] = 0;
          Xk--
        }
      }! function(kk) {
        for (let Ik = 0; Ik <= 58; ++Ik) dk[Ik] = 0;
        for (let Ik = 0; Ik < ek; ++Ik) dk[kk[Ik]] += 1;
        let Fk = 0;
        for (let Ik = 58; Ik > 0; --Ik) {
          const kk = Fk + dk[Ik] >> 1;
          dk[Ik] = Fk, Fk = kk
        }
        for (let Ik = 0; Ik < ek; ++Ik) {
          const Fk = kk[Ik];
          Fk > 0 && (kk[Ik] = Fk | dk[Fk]++ << 6)
        }
      }(ik)
    }

    function Ak(kk) {
      return 63 & kk
    }

    function gk(kk) {
      return kk >> 6
    }

    function mk(kk, Fk, Ik, Xk, Tk, ik) {
      const yk = Ik.value,
        lk = zk(Fk, Ik),
        ak = zk(Fk, Ik);
      Ik.value += 4;
      const qk = zk(Fk, Ik);
      if (Ik.value += 4, lk < 0 || lk >= ek || ak < 0 || ak >= ek) throw new Error("Wrong HUF_ENCSIZE");
      const Lk = new Array(ek),
        tk = new Array(wk);
      ! function(kk) {
        for (let Fk = 0; Fk < wk; Fk++) kk[Fk] = {}, kk[Fk].len = 0, kk[Fk].lit = 0, kk[Fk].p = null
      }(tk);
      if (Yk(kk, Ik, Xk - (Ik.value - yk), lk, ak, Lk), qk > 8 * (Xk - (Ik.value - yk))) throw new Error("Wrong hufUncompress");
      ! function(kk, Fk, Ik, Xk) {
        for (; Fk <= Ik; Fk++) {
          const Ik = gk(kk[Fk]),
            Tk = Ak(kk[Fk]);
          if (Ik >> Tk) throw new Error("Invalid table entry");
          if (Tk > jk) {
            const kk = Xk[Ik >> Tk - jk];
            if (kk.len) throw new Error("Invalid table entry");
            if (kk.lit++, kk.p) {
              const Fk = kk.p;
              kk.p = new Array(kk.lit);
              for (let Ik = 0; Ik < kk.lit - 1; ++Ik) kk.p[Ik] = Fk[Ik]
            } else kk.p = new Array(1);
            kk.p[kk.lit - 1] = Fk
          } else if (Tk) {
            let kk = 0;
            for (let ik = 1 << jk - Tk; ik > 0; ik--) {
              const ik = Xk[(Ik << jk - Tk) + kk];
              if (ik.len || ik.p) throw new Error("Invalid table entry");
              ik.len = Tk, ik.lit = Fk, kk++
            }
          }
        }
      }(Lk, lk, ak, tk),
      function(kk, Fk, Ik, Xk, Tk, ik, yk, lk, ak) {
        let qk = 0,
          Lk = 0;
        const tk = yk,
          Zk = Math.trunc(Xk.value + (Tk + 7) / 8);
        for (; Xk.value < Zk;) {
          let Tk = fk(qk, Lk, Ik, Xk);
          for (qk = Tk.c, Lk = Tk.lc; Lk >= jk;) {
            const yk = Fk[qk >> Lk - jk & Hk];
            if (yk.len) {
              Lk -= yk.len;
              const kk = Bk(yk.lit, ik, qk, Lk, Ik, Xk, lk, ak, tk);
              kk && (qk = kk.c, Lk = kk.lc)
            } else {
              if (!yk.p) throw new Error("hufDecode issues");
              let Fk;
              for (Fk = 0; Fk < yk.lit; Fk++) {
                const jk = Ak(kk[yk.p[Fk]]);
                for (; Lk < jk && Xk.value < Zk;) Tk = fk(qk, Lk, Ik, Xk), qk = Tk.c, Lk = Tk.lc;
                if (Lk >= jk && gk(kk[yk.p[Fk]]) == (qk >> Lk - jk & (1 << jk) - 1)) {
                  Lk -= jk;
                  const kk = Bk(yk.p[Fk], ik, qk, Lk, Ik, Xk, lk, ak, tk);
                  kk && (qk = kk.c, Lk = kk.lc);
                  break
                }
              }
              if (Fk == yk.lit) throw new Error("HufDecode issues")
            }
          }
        }
        const ek = 8 - Tk & 7;
        for (qk >>= ek, Lk -= ek; Lk > 0;) {
          const kk = Fk[qk << jk - Lk & Hk];
          if (!kk.len) throw new Error("HufDecode issues");
          {
            Lk -= kk.len;
            const Fk = Bk(kk.lit, ik, qk, Lk, Ik, Xk, lk, ak, tk);
            Fk && (qk = Fk.c, Lk = Fk.lc)
          }
        }
      }(Lk, tk, kk, Ik, qk, ak, ik, Tk, {
        value: 0
      })
    }

    function hk(kk) {
      return 65535 & kk
    }

    function rk(kk) {
      const Fk = hk(kk);
      return Fk > 32767 ? Fk - 65536 : Fk
    }

    function Dk(kk, Fk) {
      const Ik = rk(kk),
        Xk = rk(Fk),
        Tk = Ik + (1 & Xk) + (Xk >> 1);
      return {
        a: Tk,
        b: Tk - Xk
      }
    }

    function Mk(kk, Fk) {
      const Ik = hk(kk),
        Xk = hk(Fk),
        Tk = Ik - (Xk >> 1) & ck;
      return {
        a: Xk + Tk - Nk & ck,
        b: Tk
      }
    }

    function kF(kk, Fk, Ik, Xk, Tk, ik, yk) {
      const lk = yk < 16384,
        ak = Ik > Tk ? Tk : Ik;
      let qk, Lk, tk = 1;
      for (; tk <= ak;) tk <<= 1;
      for (tk >>= 1, qk = tk, tk >>= 1; tk >= 1;) {
        Lk = 0;
        const yk = Lk + ik * (Tk - qk),
          ak = ik * tk,
          Zk = ik * qk,
          jk = Xk * tk,
          ek = Xk * qk;
        let wk, Hk, Jk, xk;
        for (; Lk <= yk; Lk += Zk) {
          let Tk = Lk;
          const ik = Lk + Xk * (Ik - qk);
          for (; Tk <= ik; Tk += ek) {
            const Ik = Tk + jk,
              Xk = Tk + ak,
              ik = Xk + jk;
            if (lk) {
              let yk = Dk(kk[Tk + Fk], kk[Xk + Fk]);
              wk = yk.a, Jk = yk.b, yk = Dk(kk[Ik + Fk], kk[ik + Fk]), Hk = yk.a, xk = yk.b, yk = Dk(wk, Hk), kk[Tk + Fk] = yk.a, kk[Ik + Fk] = yk.b, yk = Dk(Jk, xk), kk[Xk + Fk] = yk.a, kk[ik + Fk] = yk.b
            } else {
              let yk = Mk(kk[Tk + Fk], kk[Xk + Fk]);
              wk = yk.a, Jk = yk.b, yk = Mk(kk[Ik + Fk], kk[ik + Fk]), Hk = yk.a, xk = yk.b, yk = Mk(wk, Hk), kk[Tk + Fk] = yk.a, kk[Ik + Fk] = yk.b, yk = Mk(Jk, xk), kk[Xk + Fk] = yk.a, kk[ik + Fk] = yk.b
            }
          }
          if (Ik & tk) {
            const Ik = Tk + ak;
            let Xk;
            Xk = lk ? Dk(kk[Tk + Fk], kk[Ik + Fk]) : Mk(kk[Tk + Fk], kk[Ik + Fk]), wk = Xk.a, kk[Ik + Fk] = Xk.b, kk[Tk + Fk] = wk
          }
        }
        if (Tk & tk) {
          let Tk = Lk;
          const ik = Lk + Xk * (Ik - qk);
          for (; Tk <= ik; Tk += ek) {
            const Ik = Tk + jk;
            let Xk;
            Xk = lk ? Dk(kk[Tk + Fk], kk[Ik + Fk]) : Mk(kk[Tk + Fk], kk[Ik + Fk]), wk = Xk.a, kk[Ik + Fk] = Xk.b, kk[Tk + Fk] = wk
          }
        }
        qk = tk, tk >>= 1
      }
      return Lk
    }

    function FF(kk) {
      return new DataView(kk.array.buffer, kk.offset.value, kk.size)
    }

    function IF(kk) {
      const Fk = kk.viewer.buffer.slice(kk.offset.value, kk.offset.value + kk.size),
        Ik = new Uint8Array(function(kk) {
          let Fk = kk.byteLength;
          const Ik = [];
          let Xk = 0;
          const Tk = new DataView(kk);
          for (; Fk > 0;) {
            const kk = Tk.getInt8(Xk++);
            if (kk < 0) {
              const ik = -kk;
              Fk -= ik + 1;
              for (let kk = 0; kk < ik; kk++) Ik.push(Tk.getUint8(Xk++))
            } else {
              const ik = kk;
              Fk -= 2;
              const yk = Tk.getUint8(Xk++);
              for (let kk = 0; kk < ik + 1; kk++) Ik.push(yk)
            }
          }
          return Ik
        }(Fk)),
        Xk = new Uint8Array(Ik.length);
      return bk(Ik), Rk(Ik, Xk), new DataView(Xk.buffer)
    }

    function XF(kk) {
      const Fk = kk.array.slice(kk.offset.value, kk.offset.value + kk.size),
        Ik = fflate.unzlibSync(Fk),
        Xk = new Uint8Array(Ik.length);
      return bk(Ik), Rk(Ik, Xk), new DataView(Xk.buffer)
    }

    function TF(kk) {
      const Fk = kk.array.slice(kk.offset.value, kk.offset.value + kk.size),
        Ik = fflate.unzlibSync(Fk),
        Xk = kk.lines * kk.channels * kk.width,
        Tk = 1 == kk.type ? new Uint16Array(Xk) : new Uint32Array(Xk);
      let ik = 0,
        yk = 0;
      const lk = new Array(4);
      for (let ak = 0; ak < kk.lines; ak++)
        for (let Fk = 0; Fk < kk.channels; Fk++) {
          let Fk = 0;
          switch (kk.type) {
            case 1:
              lk[0] = ik, lk[1] = lk[0] + kk.width, ik = lk[1] + kk.width;
              for (let Xk = 0; Xk < kk.width; ++Xk) {
                Fk += Ik[lk[0]++] << 8 | Ik[lk[1]++], Tk[yk] = Fk, yk++
              }
              break;
            case 2:
              lk[0] = ik, lk[1] = lk[0] + kk.width, lk[2] = lk[1] + kk.width, ik = lk[2] + kk.width;
              for (let Xk = 0; Xk < kk.width; ++Xk) {
                Fk += Ik[lk[0]++] << 24 | Ik[lk[1]++] << 16 | Ik[lk[2]++] << 8, Tk[yk] = Fk, yk++
              }
          }
        }
      return new DataView(Tk.buffer)
    }

    function iF(kk) {
      const Fk = kk.viewer,
        Ik = {
          value: kk.offset.value
        },
        Xk = new Uint16Array(kk.width * kk.scanlineBlockSize * (kk.channels * kk.type)),
        Tk = new Uint8Array(Zk);
      let ik = 0;
      const yk = new Array(kk.channels);
      for (let qk = 0; qk < kk.channels; qk++) yk[qk] = {}, yk[qk].start = ik, yk[qk].end = yk[qk].start, yk[qk].nx = kk.width, yk[qk].ny = kk.lines, yk[qk].size = kk.type, ik += yk[qk].nx * yk[qk].ny * yk[qk].size;
      const lk = vk(Fk, Ik),
        ak = vk(Fk, Ik);
      if (ak >= Zk) throw new Error("Wrong PIZ_COMPRESSION BITMAP_SIZE");
      if (lk <= ak)
        for (let qk = 0; qk < ak - lk + 1; qk++) Tk[qk + lk] = Sk(Fk, Ik);
      const Lk = new Uint16Array(tk),
        jk = function(kk, Fk) {
          let Ik = 0;
          for (let Tk = 0; Tk < tk; ++Tk)(0 == Tk || kk[Tk >> 3] & 1 << (7 & Tk)) && (Fk[Ik++] = Tk);
          const Xk = Ik - 1;
          for (; Ik < tk;) Fk[Ik++] = 0;
          return Xk
        }(Tk, Lk),
        ek = zk(Fk, Ik);
      mk(kk.array, Fk, Ik, ek, Xk, ik);
      for (let qk = 0; qk < kk.channels; ++qk) {
        const kk = yk[qk];
        for (let Fk = 0; Fk < yk[qk].size; ++Fk) kF(Xk, kk.start + Fk, kk.nx, kk.size, kk.ny, kk.nx * kk.size, jk)
      }! function(kk, Fk, Ik) {
        for (let Xk = 0; Xk < Ik; ++Xk) Fk[Xk] = kk[Fk[Xk]]
      }(Lk, Xk, ik);
      let wk = 0;
      const Hk = new Uint8Array(Xk.buffer.byteLength);
      for (let tk = 0; tk < kk.lines; tk++)
        for (let Fk = 0; Fk < kk.channels; Fk++) {
          const kk = yk[Fk],
            Ik = kk.nx * kk.size,
            Tk = new Uint8Array(Xk.buffer, kk.end * qk, Ik * qk);
          Hk.set(Tk, wk), wk += Ik * qk, kk.end += Ik
        }
      return new DataView(Hk.buffer)
    }
    var yF, lF = Ik(40097);
    ! function(kk) {
      kk[kk.Float = 0] = "Float", kk[kk.HalfFloat = 1] = "HalfFloat"
    }(yF || (yF = {}));
    class aF {}
    async function qF(kk, Fk, Ik, Xk) {
      const Tk = {
        size: 0,
        viewer: Fk,
        array: new Uint8Array(Fk.buffer),
        offset: Ik,
        width: kk.dataWindow.xMax - kk.dataWindow.xMin + 1,
        height: kk.dataWindow.yMax - kk.dataWindow.yMin + 1,
        channels: kk.channels.length,
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
      switch (kk.compression) {
        case Kk.NO_COMPRESSION:
          Tk.lines = 1, Tk.uncompress = FF;
          break;
        case Kk.RLE_COMPRESSION:
          Tk.lines = 1, Tk.uncompress = IF;
          break;
        case Kk.ZIPS_COMPRESSION:
          Tk.lines = 1, Tk.uncompress = XF, await lF.h.LoadScriptAsync(aF.FFLATEUrl);
          break;
        case Kk.ZIP_COMPRESSION:
          Tk.lines = 16, Tk.uncompress = XF, await lF.h.LoadScriptAsync(aF.FFLATEUrl);
          break;
        case Kk.PIZ_COMPRESSION:
          Tk.lines = 32, Tk.uncompress = iF;
          break;
        case Kk.PXR24_COMPRESSION:
          Tk.lines = 16, Tk.uncompress = TF, await lF.h.LoadScriptAsync(aF.FFLATEUrl);
          break;
        default:
          throw new Error(Kk[kk.compression] + " is unsupported")
      }
      Tk.scanlineBlockSize = Tk.lines;
      const ik = {};
      for (const lk of kk.channels) switch (lk.name) {
        case "R":
        case "G":
        case "B":
        case "A":
        case "Y":
          ik[lk.name] = !0, Tk.type = lk.pixelType
      }
      let yk = !1;
      if (ik.R && ik.G && ik.B && ik.A) Tk.outputChannels = 4, Tk.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (ik.R && ik.G && ik.B) yk = !0, Tk.outputChannels = 4, Tk.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (ik.R && ik.G) Tk.outputChannels = 2, Tk.decodeChannels = {
        R: 0,
        G: 1
      };
      else if (ik.R) Tk.outputChannels = 1, Tk.decodeChannels = {
        R: 0
      };
      else {
        if (!ik.Y) throw new Error("EXRLoader.parse: file contains unsupported data channels.");
        Tk.outputChannels = 1, Tk.decodeChannels = {
          Y: 0
        }
      }
      if (1 === Tk.type) switch (Xk) {
        case yF.Float:
          Tk.getter = Gk, Tk.inputSize = qk;
          break;
        case yF.HalfFloat:
          Tk.getter = vk, Tk.inputSize = qk
      } else {
        if (2 !== Tk.type) throw new Error("Unsupported pixelType " + Tk.type + " for " + kk.compression);
        switch (Xk) {
          case yF.Float:
            Tk.getter = nk, Tk.inputSize = lk;
            break;
          case yF.HalfFloat:
            Tk.getter = pk, Tk.inputSize = lk
        }
      }
      Tk.blockCount = Tk.height / Tk.scanlineBlockSize;
      for (let lk = 0; lk < Tk.blockCount; lk++) Ok(Fk, Ik);
      const ak = Tk.width * Tk.height * Tk.outputChannels;
      switch (Xk) {
        case yF.Float:
          Tk.byteArray = new Float32Array(ak), Tk.textureType = 1, yk && Tk.byteArray.fill(1, 0, ak);
          break;
        case yF.HalfFloat:
          Tk.byteArray = new Uint16Array(ak), Tk.textureType = 2, yk && Tk.byteArray.fill(15360, 0, ak);
          break;
        default:
          throw new Error("Unsupported type: " + Xk)
      }
      let Lk = 0;
      for (const lk of kk.channels) void 0 !== Tk.decodeChannels[lk.name] && (Tk.channelLineOffsets[lk.name] = Lk * Tk.width), Lk += 2 * lk.pixelType;
      return Tk.bytesPerLine = Tk.width * Lk, Tk.outLineWidth = Tk.width * Tk.outputChannels, "INCREASING_Y" === kk.lineOrder ? Tk.scanOrder = kk => kk : Tk.scanOrder = kk => Tk.height - 1 - kk, 4 == Tk.outputChannels ? (Tk.format = 5, Tk.linearSpace = !0) : (Tk.format = 6, Tk.linearSpace = !1), Tk
    }

    function LF(kk, Fk, Ik, Xk) {
      const Tk = {
        value: 0
      };
      for (let ik = 0; ik < kk.height / kk.scanlineBlockSize; ik++) {
        const yk = Vk(Ik, Xk) - Fk.dataWindow.yMin;
        kk.size = zk(Ik, Xk), kk.lines = yk + kk.scanlineBlockSize > kk.height ? kk.height - yk : kk.scanlineBlockSize;
        const lk = kk.size < kk.lines * kk.bytesPerLine && kk.uncompress ? kk.uncompress(kk) : FF(kk);
        Xk.value += kk.size;
        for (let Ik = 0; Ik < kk.scanlineBlockSize; Ik++) {
          const Xk = ik * kk.scanlineBlockSize,
            yk = Ik + kk.scanOrder(Xk);
          if (yk >= kk.height) continue;
          const ak = Ik * kk.bytesPerLine,
            qk = (kk.height - 1 - yk) * kk.outLineWidth;
          for (let Ik = 0; Ik < kk.channels; Ik++) {
            const Xk = Fk.channels[Ik].name,
              ik = kk.channelLineOffsets[Xk],
              yk = kk.decodeChannels[Xk];
            if (void 0 !== yk) {
              Tk.value = ak + ik;
              for (let Fk = 0; Fk < kk.width; Fk++) {
                const Ik = qk + Fk * kk.outputChannels + yk;
                kk.byteArray && (kk.byteArray[Ik] = kk.getter(lk, Tk))
              }
            }
          }
        }
      }
    }
    aF.DefaultOutputType = yF.HalfFloat, aF.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class tF {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(kk, Fk, Ik, Xk, Tk) {
        throw ".exr not supported in Cube."
      }
      loadData(kk, Fk, Ik) {
        const Tk = new DataView(kk.buffer),
          ik = {
            value: 0
          },
          yk = Ck(Tk, ik);
        qF(yk, Tk, ik, aF.DefaultOutputType).then((kk => {
          LF(kk, yk, Tk, ik);
          const Xk = yk.dataWindow.xMax - yk.dataWindow.xMin + 1,
            lk = yk.dataWindow.yMax - yk.dataWindow.yMin + 1;
          Ik(Xk, lk, Fk.generateMipMaps, !1, (() => {
            const Ik = Fk.Oe();
            Fk.format = yk.format, Fk.type = kk.textureType, Fk.invertY = !1, Fk._gammaSpace = !yk.linearSpace, kk.byteArray && Ik._uploadDataToTextureDirectly(Fk, kk.byteArray, 0, 0, void 0, !0)
          }))
        })).catch((kk => {
          Xk.e.Error("Failed to load EXR texture: ", kk)
        }))
      }
    }
    async function ZF(kk) {
      const Fk = new DataView(kk),
        Ik = {
          value: 0
        },
        Tk = Ck(Fk, Ik);
      try {
        const kk = await qF(Tk, Fk, Ik, yF.Float);
        return LF(kk, Tk, Fk, Ik), kk.byteArray ? {
          width: Tk.dataWindow.xMax - Tk.dataWindow.xMin + 1,
          height: Tk.dataWindow.yMax - Tk.dataWindow.yMin + 1,
          data: new Float32Array(kk.byteArray)
        } : (Xk.e.Error("Failed to decode EXR data: No byte array available."), {
          width: 0,
          height: 0,
          data: null
        })
      } catch (ik) {
        Xk.e.Error("Failed to load EXR data: ", ik)
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
for (const kk in modules) Object.freeze(modules[kk]);