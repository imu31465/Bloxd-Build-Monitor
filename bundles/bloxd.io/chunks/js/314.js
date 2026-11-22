export const id = 314;
export const ids = [314];
export const modules = {
  41444: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      ReadExrDataAsync: () => xe,
      _ExrTextureLoader: () => Ke
    });
    var Dk = ik(38272),
      fk = ik(36729),
      Sk = ik(39628);
    const bk = 4,
      rk = 4,
      Pk = 1,
      mk = 2,
      Mk = 8,
      Kk = 65536,
      xk = Kk >> 3,
      nk = 14,
      Uk = 65537,
      Hk = 1 << nk,
      wk = Hk - 1,
      lk = 59,
      pk = 63,
      yk = 2 + pk - lk;
    var Yk, Lk;

    function Ck(kk, ek) {
      const ik = new Uint8Array(kk);
      let Dk = 0;
      for (; 0 != ik[ek.value + Dk];) Dk += 1;
      const fk = (new TextDecoder).decode(ik.slice(ek.value, ek.value + Dk));
      return ek.value = ek.value + Dk + 1, fk
    }

    function Ak(kk, ek) {
      const ik = kk.getInt32(ek.value, !0);
      return ek.value += bk, ik
    }

    function jk(kk, ek) {
      const ik = kk.getUint32(ek.value, !0);
      return ek.value += bk, ik
    }

    function sk(kk, ek) {
      const ik = kk.getUint8(ek.value);
      return ek.value += Pk, ik
    }

    function dk(kk, ek) {
      const ik = kk.getUint16(ek.value, !0);
      return ek.value += mk, ik
    }

    function Vk(kk, ek) {
      const ik = kk[ek.value];
      return ek.value += Pk, ik
    }

    function Fk(kk, ek) {
      let ik;
      return ik = "getBigInt64" in DataView.prototype ? Number(kk.getBigInt64(ek.value, !0)) : kk.getUint32(ek.value + 4, !0) + Number(kk.getUint32(ek.value, !0) << 32), ek.value += Mk, ik
    }

    function uk(kk, ek) {
      const ik = kk.getFloat32(ek.value, !0);
      return ek.value += rk, ik
    }

    function qk(kk, ek) {
      return (0, Sk.e)(dk(kk, ek))
    }

    function Ik(kk, ek) {
      return (0, Sk.i)((0, fk.Clamp)(uk(kk, ek), -Sk.h, Sk.h))
    }

    function zk(kk, ek, ik, Dk) {
      switch (ik) {
        case "string":
        case "stringvector":
        case "iccProfile":
          return function(kk, ek, ik) {
            const Dk = (new TextDecoder).decode(new Uint8Array(kk).slice(ek.value, ek.value + ik));
            return ek.value = ek.value + ik, Dk
          }(kk.buffer, ek, Dk);
        case "chlist":
          return function(kk, ek, ik) {
            const Dk = ek.value,
              fk = [];
            for (; ek.value < Dk + ik - 1;) {
              const ik = Ck(kk.buffer, ek),
                Dk = Ak(kk, ek),
                Sk = sk(kk, ek);
              ek.value += 3;
              const bk = Ak(kk, ek),
                rk = Ak(kk, ek);
              fk.push({
                name: ik,
                pixelType: Dk,
                pLinear: Sk,
                xSampling: bk,
                ySampling: rk
              })
            }
            return ek.value += 1, fk
          }(kk, ek, Dk);
        case "chromaticities":
          return function(kk, ek) {
            return {
              redX: uk(kk, ek),
              redY: uk(kk, ek),
              greenX: uk(kk, ek),
              greenY: uk(kk, ek),
              blueX: uk(kk, ek),
              blueY: uk(kk, ek),
              whiteX: uk(kk, ek),
              whiteY: uk(kk, ek)
            }
          }(kk, ek);
        case "compression":
          return function(kk, ek) {
            return sk(kk, ek)
          }(kk, ek);
        case "box2i":
          return function(kk, ek) {
            return {
              xMin: Ak(kk, ek),
              yMin: Ak(kk, ek),
              xMax: Ak(kk, ek),
              yMax: Ak(kk, ek)
            }
          }(kk, ek);
        case "lineOrder":
          return function(kk, ek) {
            const ik = sk(kk, ek);
            return Lk[ik]
          }(kk, ek);
        case "float":
          return uk(kk, ek);
        case "v2f":
          return function(kk, ek) {
            return [uk(kk, ek), uk(kk, ek)]
          }(kk, ek);
        case "v3f":
          return function(kk, ek) {
            return [uk(kk, ek), uk(kk, ek), uk(kk, ek)]
          }(kk, ek);
        case "int":
          return Ak(kk, ek);
        case "rational":
          return function(kk, ek) {
            return [Ak(kk, ek), jk(kk, ek)]
          }(kk, ek);
        case "timecode":
          return function(kk, ek) {
            return [jk(kk, ek), jk(kk, ek)]
          }(kk, ek);
        case "preview":
          return ek.value += Dk, "skipped";
        default:
          return void(ek.value += Dk)
      }
    }

    function Qk(kk) {
      for (let ek = 1; ek < kk.length; ek++) {
        const ik = kk[ek - 1] + kk[ek] - 128;
        kk[ek] = ik
      }
    }

    function vk(kk, ek) {
      let ik = 0,
        Dk = Math.floor((kk.length + 1) / 2),
        fk = 0;
      const Sk = kk.length - 1;
      for (; !(fk > Sk) && (ek[fk++] = kk[ik++], !(fk > Sk));) ek[fk++] = kk[Dk++]
    }! function(kk) {
      kk[kk.NO_COMPRESSION = 0] = "NO_COMPRESSION", kk[kk.RLE_COMPRESSION = 1] = "RLE_COMPRESSION", kk[kk.ZIPS_COMPRESSION = 2] = "ZIPS_COMPRESSION", kk[kk.ZIP_COMPRESSION = 3] = "ZIP_COMPRESSION", kk[kk.PIZ_COMPRESSION = 4] = "PIZ_COMPRESSION", kk[kk.PXR24_COMPRESSION = 5] = "PXR24_COMPRESSION"
    }(Yk || (Yk = {})),
    function(kk) {
      kk[kk.INCREASING_Y = 0] = "INCREASING_Y", kk[kk.DECREASING_Y = 1] = "DECREASING_Y"
    }(Lk || (Lk = {}));
    const Ek = 20000630;

    function hk(kk, ek) {
      if (kk.getUint32(0, !0) != Ek) throw new Error("Incorrect OpenEXR format");
      const ik = kk.getUint8(4),
        fk = kk.getUint8(5),
        Sk = {
          singleTile: !!(2 & fk),
          longName: !!(4 & fk),
          deepFormat: !!(8 & fk),
          multiPart: !!(16 & fk)
        };
      ek.value = 8;
      const bk = {};
      let rk = !0;
      for (; rk;) {
        const ik = Ck(kk.buffer, ek);
        if (ik) {
          const fk = Ck(kk.buffer, ek),
            Sk = zk(kk, ek, fk, jk(kk, ek));
          void 0 === Sk ? Dk.b.Warn(`Unknown header attribute type ${fk}'.`) : bk[ik] = Sk
        } else rk = !1
      }
      if (0 != (-5 & fk)) throw new Error("Unsupported file format");
      return {
        version: ik,
        spec: Sk,
        ...bk
      }
    }
    const ak = 32768,
      Wk = 65535;

    function tk(kk, ek, ik, Dk, fk) {
      for (; ik < kk;) ek = ek << 8 | Vk(Dk, fk), ik += 8;
      return {
        l: ek >> (ik -= kk) & (1 << kk) - 1,
        c: ek,
        lc: ik
      }
    }

    function Xk(kk, ek, ik, Dk) {
      return {
        c: kk = kk << 8 | Vk(ik, Dk),
        lc: ek += 8
      }
    }

    function Bk(kk, ek, ik, Dk, fk, Sk, bk, rk, Pk) {
      if (kk == ek) {
        if (Dk < 8) {
          const kk = Xk(ik, Dk, fk, Sk);
          ik = kk.c, Dk = kk.lc
        }
        let kk = ik >> (Dk -= 8);
        if (kk = new Uint8Array([kk])[0], rk.value + kk > Pk) return null;
        const ek = bk[rk.value - 1];
        for (; kk-- > 0;) bk[rk.value++] = ek
      } else {
        if (!(rk.value < Pk)) return null;
        bk[rk.value++] = kk
      }
      return {
        c: ik,
        lc: Dk
      }
    }
    const ck = new Array(59);

    function Tk(kk, ek, ik, Dk, fk, Sk) {
      const bk = ek;
      let rk = 0,
        Pk = 0;
      for (; Dk <= fk; Dk++) {
        if (bk.value - ek.value > ik) return;
        let mk = tk(6, rk, Pk, kk, bk);
        const Mk = mk.l;
        if (rk = mk.c, Pk = mk.lc, Sk[Dk] = Mk, Mk == pk) {
          if (bk.value - ek.value > ik) throw new Error("Error in HufUnpackEncTable");
          mk = tk(8, rk, Pk, kk, bk);
          let Mk = mk.l + yk;
          if (rk = mk.c, Pk = mk.lc, Dk + Mk > fk + 1) throw new Error("Error in HufUnpackEncTable");
          for (; Mk--;) Sk[Dk++] = 0;
          Dk--
        } else if (Mk >= lk) {
          let kk = Mk - lk + 2;
          if (Dk + kk > fk + 1) throw new Error("Error in HufUnpackEncTable");
          for (; kk--;) Sk[Dk++] = 0;
          Dk--
        }
      }! function(kk) {
        for (let ik = 0; ik <= 58; ++ik) ck[ik] = 0;
        for (let ik = 0; ik < Uk; ++ik) ck[kk[ik]] += 1;
        let ek = 0;
        for (let ik = 58; ik > 0; --ik) {
          const kk = ek + ck[ik] >> 1;
          ck[ik] = ek, ek = kk
        }
        for (let ik = 0; ik < Uk; ++ik) {
          const ek = kk[ik];
          ek > 0 && (kk[ik] = ek | ck[ek]++ << 6)
        }
      }(Sk)
    }

    function Zk(kk) {
      return 63 & kk
    }

    function Ok(kk) {
      return kk >> 6
    }

    function gk(kk, ek, ik, Dk, fk, Sk) {
      const bk = ik.value,
        rk = jk(ek, ik),
        Pk = jk(ek, ik);
      ik.value += 4;
      const mk = jk(ek, ik);
      if (ik.value += 4, rk < 0 || rk >= Uk || Pk < 0 || Pk >= Uk) throw new Error("Wrong HUF_ENCSIZE");
      const Mk = new Array(Uk),
        Kk = new Array(Hk);
      ! function(kk) {
        for (let ek = 0; ek < Hk; ek++) kk[ek] = {}, kk[ek].len = 0, kk[ek].lit = 0, kk[ek].p = null
      }(Kk);
      if (Tk(kk, ik, Dk - (ik.value - bk), rk, Pk, Mk), mk > 8 * (Dk - (ik.value - bk))) throw new Error("Wrong hufUncompress");
      ! function(kk, ek, ik, Dk) {
        for (; ek <= ik; ek++) {
          const ik = Ok(kk[ek]),
            fk = Zk(kk[ek]);
          if (ik >> fk) throw new Error("Invalid table entry");
          if (fk > nk) {
            const kk = Dk[ik >> fk - nk];
            if (kk.len) throw new Error("Invalid table entry");
            if (kk.lit++, kk.p) {
              const ek = kk.p;
              kk.p = new Array(kk.lit);
              for (let ik = 0; ik < kk.lit - 1; ++ik) kk.p[ik] = ek[ik]
            } else kk.p = new Array(1);
            kk.p[kk.lit - 1] = ek
          } else if (fk) {
            let kk = 0;
            for (let Sk = 1 << nk - fk; Sk > 0; Sk--) {
              const Sk = Dk[(ik << nk - fk) + kk];
              if (Sk.len || Sk.p) throw new Error("Invalid table entry");
              Sk.len = fk, Sk.lit = ek, kk++
            }
          }
        }
      }(Mk, rk, Pk, Kk),
      function(kk, ek, ik, Dk, fk, Sk, bk, rk, Pk) {
        let mk = 0,
          Mk = 0;
        const Kk = bk,
          xk = Math.trunc(Dk.value + (fk + 7) / 8);
        for (; Dk.value < xk;) {
          let fk = Xk(mk, Mk, ik, Dk);
          for (mk = fk.c, Mk = fk.lc; Mk >= nk;) {
            const bk = ek[mk >> Mk - nk & wk];
            if (bk.len) {
              Mk -= bk.len;
              const kk = Bk(bk.lit, Sk, mk, Mk, ik, Dk, rk, Pk, Kk);
              kk && (mk = kk.c, Mk = kk.lc)
            } else {
              if (!bk.p) throw new Error("hufDecode issues");
              let ek;
              for (ek = 0; ek < bk.lit; ek++) {
                const nk = Zk(kk[bk.p[ek]]);
                for (; Mk < nk && Dk.value < xk;) fk = Xk(mk, Mk, ik, Dk), mk = fk.c, Mk = fk.lc;
                if (Mk >= nk && Ok(kk[bk.p[ek]]) == (mk >> Mk - nk & (1 << nk) - 1)) {
                  Mk -= nk;
                  const kk = Bk(bk.p[ek], Sk, mk, Mk, ik, Dk, rk, Pk, Kk);
                  kk && (mk = kk.c, Mk = kk.lc);
                  break
                }
              }
              if (ek == bk.lit) throw new Error("HufDecode issues")
            }
          }
        }
        const Uk = 8 - fk & 7;
        for (mk >>= Uk, Mk -= Uk; Mk > 0;) {
          const kk = ek[mk << nk - Mk & wk];
          if (!kk.len) throw new Error("HufDecode issues");
          {
            Mk -= kk.len;
            const ek = Bk(kk.lit, Sk, mk, Mk, ik, Dk, rk, Pk, Kk);
            ek && (mk = ek.c, Mk = ek.lc)
          }
        }
      }(Mk, Kk, kk, ik, mk, Pk, Sk, fk, {
        value: 0
      })
    }

    function Gk(kk) {
      return 65535 & kk
    }

    function Nk(kk) {
      const ek = Gk(kk);
      return ek > 32767 ? ek - 65536 : ek
    }

    function Rk(kk, ek) {
      const ik = Nk(kk),
        Dk = Nk(ek),
        fk = ik + (1 & Dk) + (Dk >> 1);
      return {
        a: fk,
        b: fk - Dk
      }
    }

    function Jk(kk, ek) {
      const ik = Gk(kk),
        Dk = Gk(ek),
        fk = ik - (Dk >> 1) & Wk;
      return {
        a: Dk + fk - ak & Wk,
        b: fk
      }
    }

    function ke(kk, ek, ik, Dk, fk, Sk, bk) {
      const rk = bk < 16384,
        Pk = ik > fk ? fk : ik;
      let mk, Mk, Kk = 1;
      for (; Kk <= Pk;) Kk <<= 1;
      for (Kk >>= 1, mk = Kk, Kk >>= 1; Kk >= 1;) {
        Mk = 0;
        const bk = Mk + Sk * (fk - mk),
          Pk = Sk * Kk,
          xk = Sk * mk,
          nk = Dk * Kk,
          Uk = Dk * mk;
        let Hk, wk, lk, pk;
        for (; Mk <= bk; Mk += xk) {
          let fk = Mk;
          const Sk = Mk + Dk * (ik - mk);
          for (; fk <= Sk; fk += Uk) {
            const ik = fk + nk,
              Dk = fk + Pk,
              Sk = Dk + nk;
            if (rk) {
              let bk = Rk(kk[fk + ek], kk[Dk + ek]);
              Hk = bk.a, lk = bk.b, bk = Rk(kk[ik + ek], kk[Sk + ek]), wk = bk.a, pk = bk.b, bk = Rk(Hk, wk), kk[fk + ek] = bk.a, kk[ik + ek] = bk.b, bk = Rk(lk, pk), kk[Dk + ek] = bk.a, kk[Sk + ek] = bk.b
            } else {
              let bk = Jk(kk[fk + ek], kk[Dk + ek]);
              Hk = bk.a, lk = bk.b, bk = Jk(kk[ik + ek], kk[Sk + ek]), wk = bk.a, pk = bk.b, bk = Jk(Hk, wk), kk[fk + ek] = bk.a, kk[ik + ek] = bk.b, bk = Jk(lk, pk), kk[Dk + ek] = bk.a, kk[Sk + ek] = bk.b
            }
          }
          if (ik & Kk) {
            const ik = fk + Pk;
            let Dk;
            Dk = rk ? Rk(kk[fk + ek], kk[ik + ek]) : Jk(kk[fk + ek], kk[ik + ek]), Hk = Dk.a, kk[ik + ek] = Dk.b, kk[fk + ek] = Hk
          }
        }
        if (fk & Kk) {
          let fk = Mk;
          const Sk = Mk + Dk * (ik - mk);
          for (; fk <= Sk; fk += Uk) {
            const ik = fk + nk;
            let Dk;
            Dk = rk ? Rk(kk[fk + ek], kk[ik + ek]) : Jk(kk[fk + ek], kk[ik + ek]), Hk = Dk.a, kk[ik + ek] = Dk.b, kk[fk + ek] = Hk
          }
        }
        mk = Kk, Kk >>= 1
      }
      return Mk
    }

    function ee(kk) {
      return new DataView(kk.array.buffer, kk.offset.value, kk.size)
    }

    function ie(kk) {
      const ek = kk.viewer.buffer.slice(kk.offset.value, kk.offset.value + kk.size),
        ik = new Uint8Array(function(kk) {
          let ek = kk.byteLength;
          const ik = [];
          let Dk = 0;
          const fk = new DataView(kk);
          for (; ek > 0;) {
            const kk = fk.getInt8(Dk++);
            if (kk < 0) {
              const Sk = -kk;
              ek -= Sk + 1;
              for (let kk = 0; kk < Sk; kk++) ik.push(fk.getUint8(Dk++))
            } else {
              const Sk = kk;
              ek -= 2;
              const bk = fk.getUint8(Dk++);
              for (let kk = 0; kk < Sk + 1; kk++) ik.push(bk)
            }
          }
          return ik
        }(ek)),
        Dk = new Uint8Array(ik.length);
      return Qk(ik), vk(ik, Dk), new DataView(Dk.buffer)
    }

    function De(kk) {
      const ek = kk.array.slice(kk.offset.value, kk.offset.value + kk.size),
        ik = fflate.unzlibSync(ek),
        Dk = new Uint8Array(ik.length);
      return Qk(ik), vk(ik, Dk), new DataView(Dk.buffer)
    }

    function fe(kk) {
      const ek = kk.array.slice(kk.offset.value, kk.offset.value + kk.size),
        ik = fflate.unzlibSync(ek),
        Dk = kk.lines * kk.channels * kk.width,
        fk = 1 == kk.type ? new Uint16Array(Dk) : new Uint32Array(Dk);
      let Sk = 0,
        bk = 0;
      const rk = new Array(4);
      for (let Pk = 0; Pk < kk.lines; Pk++)
        for (let ek = 0; ek < kk.channels; ek++) {
          let ek = 0;
          switch (kk.type) {
            case 1:
              rk[0] = Sk, rk[1] = rk[0] + kk.width, Sk = rk[1] + kk.width;
              for (let Dk = 0; Dk < kk.width; ++Dk) {
                ek += ik[rk[0]++] << 8 | ik[rk[1]++], fk[bk] = ek, bk++
              }
              break;
            case 2:
              rk[0] = Sk, rk[1] = rk[0] + kk.width, rk[2] = rk[1] + kk.width, Sk = rk[2] + kk.width;
              for (let Dk = 0; Dk < kk.width; ++Dk) {
                ek += ik[rk[0]++] << 24 | ik[rk[1]++] << 16 | ik[rk[2]++] << 8, fk[bk] = ek, bk++
              }
          }
        }
      return new DataView(fk.buffer)
    }

    function Se(kk) {
      const ek = kk.viewer,
        ik = {
          value: kk.offset.value
        },
        Dk = new Uint16Array(kk.width * kk.scanlineBlockSize * (kk.channels * kk.type)),
        fk = new Uint8Array(xk);
      let Sk = 0;
      const bk = new Array(kk.channels);
      for (let mk = 0; mk < kk.channels; mk++) bk[mk] = {}, bk[mk].start = Sk, bk[mk].end = bk[mk].start, bk[mk].nx = kk.width, bk[mk].ny = kk.lines, bk[mk].size = kk.type, Sk += bk[mk].nx * bk[mk].ny * bk[mk].size;
      const rk = dk(ek, ik),
        Pk = dk(ek, ik);
      if (Pk >= xk) throw new Error("Wrong PIZ_COMPRESSION BITMAP_SIZE");
      if (rk <= Pk)
        for (let mk = 0; mk < Pk - rk + 1; mk++) fk[mk + rk] = sk(ek, ik);
      const Mk = new Uint16Array(Kk),
        nk = function(kk, ek) {
          let ik = 0;
          for (let fk = 0; fk < Kk; ++fk)(0 == fk || kk[fk >> 3] & 1 << (7 & fk)) && (ek[ik++] = fk);
          const Dk = ik - 1;
          for (; ik < Kk;) ek[ik++] = 0;
          return Dk
        }(fk, Mk),
        Uk = jk(ek, ik);
      gk(kk.array, ek, ik, Uk, Dk, Sk);
      for (let mk = 0; mk < kk.channels; ++mk) {
        const kk = bk[mk];
        for (let ek = 0; ek < bk[mk].size; ++ek) ke(Dk, kk.start + ek, kk.nx, kk.size, kk.ny, kk.nx * kk.size, nk)
      }! function(kk, ek, ik) {
        for (let Dk = 0; Dk < ik; ++Dk) ek[Dk] = kk[ek[Dk]]
      }(Mk, Dk, Sk);
      let Hk = 0;
      const wk = new Uint8Array(Dk.buffer.byteLength);
      for (let Kk = 0; Kk < kk.lines; Kk++)
        for (let ek = 0; ek < kk.channels; ek++) {
          const kk = bk[ek],
            ik = kk.nx * kk.size,
            fk = new Uint8Array(Dk.buffer, kk.end * mk, ik * mk);
          wk.set(fk, Hk), Hk += ik * mk, kk.end += ik
        }
      return new DataView(wk.buffer)
    }
    var be, re = ik(39662);
    ! function(kk) {
      kk[kk.Float = 0] = "Float", kk[kk.HalfFloat = 1] = "HalfFloat"
    }(be || (be = {}));
    class Pe {}
    async function me(kk, ek, ik, Dk) {
      const fk = {
        size: 0,
        viewer: ek,
        array: new Uint8Array(ek.buffer),
        offset: ik,
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
        case Yk.NO_COMPRESSION:
          fk.lines = 1, fk.uncompress = ee;
          break;
        case Yk.RLE_COMPRESSION:
          fk.lines = 1, fk.uncompress = ie;
          break;
        case Yk.ZIPS_COMPRESSION:
          fk.lines = 1, fk.uncompress = De, await re.i.LoadScriptAsync(Pe.FFLATEUrl);
          break;
        case Yk.ZIP_COMPRESSION:
          fk.lines = 16, fk.uncompress = De, await re.i.LoadScriptAsync(Pe.FFLATEUrl);
          break;
        case Yk.PIZ_COMPRESSION:
          fk.lines = 32, fk.uncompress = Se;
          break;
        case Yk.PXR24_COMPRESSION:
          fk.lines = 16, fk.uncompress = fe, await re.i.LoadScriptAsync(Pe.FFLATEUrl);
          break;
        default:
          throw new Error(Yk[kk.compression] + " is unsupported")
      }
      fk.scanlineBlockSize = fk.lines;
      const Sk = {};
      for (const rk of kk.channels) switch (rk.name) {
        case "R":
        case "G":
        case "B":
        case "A":
        case "Y":
          Sk[rk.name] = !0, fk.type = rk.pixelType
      }
      let bk = !1;
      if (Sk.R && Sk.G && Sk.B && Sk.A) fk.outputChannels = 4, fk.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (Sk.R && Sk.G && Sk.B) bk = !0, fk.outputChannels = 4, fk.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (Sk.R && Sk.G) fk.outputChannels = 2, fk.decodeChannels = {
        R: 0,
        G: 1
      };
      else if (Sk.R) fk.outputChannels = 1, fk.decodeChannels = {
        R: 0
      };
      else {
        if (!Sk.Y) throw new Error("EXRLoader.parse: file contains unsupported data channels.");
        fk.outputChannels = 1, fk.decodeChannels = {
          Y: 0
        }
      }
      if (1 === fk.type) switch (Dk) {
        case be.Float:
          fk.getter = qk, fk.inputSize = mk;
          break;
        case be.HalfFloat:
          fk.getter = dk, fk.inputSize = mk
      } else {
        if (2 !== fk.type) throw new Error("Unsupported pixelType " + fk.type + " for " + kk.compression);
        switch (Dk) {
          case be.Float:
            fk.getter = uk, fk.inputSize = rk;
            break;
          case be.HalfFloat:
            fk.getter = Ik, fk.inputSize = rk
        }
      }
      fk.blockCount = fk.height / fk.scanlineBlockSize;
      for (let rk = 0; rk < fk.blockCount; rk++) Fk(ek, ik);
      const Pk = fk.width * fk.height * fk.outputChannels;
      switch (Dk) {
        case be.Float:
          fk.byteArray = new Float32Array(Pk), fk.textureType = 1, bk && fk.byteArray.fill(1, 0, Pk);
          break;
        case be.HalfFloat:
          fk.byteArray = new Uint16Array(Pk), fk.textureType = 2, bk && fk.byteArray.fill(15360, 0, Pk);
          break;
        default:
          throw new Error("Unsupported type: " + Dk)
      }
      let Mk = 0;
      for (const rk of kk.channels) void 0 !== fk.decodeChannels[rk.name] && (fk.channelLineOffsets[rk.name] = Mk * fk.width), Mk += 2 * rk.pixelType;
      return fk.bytesPerLine = fk.width * Mk, fk.outLineWidth = fk.width * fk.outputChannels, "INCREASING_Y" === kk.lineOrder ? fk.scanOrder = kk => kk : fk.scanOrder = kk => fk.height - 1 - kk, 4 == fk.outputChannels ? (fk.format = 5, fk.linearSpace = !0) : (fk.format = 6, fk.linearSpace = !1), fk
    }

    function Me(kk, ek, ik, Dk) {
      const fk = {
        value: 0
      };
      for (let Sk = 0; Sk < kk.height / kk.scanlineBlockSize; Sk++) {
        const bk = Ak(ik, Dk) - ek.dataWindow.yMin;
        kk.size = jk(ik, Dk), kk.lines = bk + kk.scanlineBlockSize > kk.height ? kk.height - bk : kk.scanlineBlockSize;
        const rk = kk.size < kk.lines * kk.bytesPerLine && kk.uncompress ? kk.uncompress(kk) : ee(kk);
        Dk.value += kk.size;
        for (let ik = 0; ik < kk.scanlineBlockSize; ik++) {
          const Dk = Sk * kk.scanlineBlockSize,
            bk = ik + kk.scanOrder(Dk);
          if (bk >= kk.height) continue;
          const Pk = ik * kk.bytesPerLine,
            mk = (kk.height - 1 - bk) * kk.outLineWidth;
          for (let ik = 0; ik < kk.channels; ik++) {
            const Dk = ek.channels[ik].name,
              Sk = kk.channelLineOffsets[Dk],
              bk = kk.decodeChannels[Dk];
            if (void 0 !== bk) {
              fk.value = Pk + Sk;
              for (let ek = 0; ek < kk.width; ek++) {
                const ik = mk + ek * kk.outputChannels + bk;
                kk.byteArray && (kk.byteArray[ik] = kk.getter(rk, fk))
              }
            }
          }
        }
      }
    }
    Pe.DefaultOutputType = be.HalfFloat, Pe.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class Ke {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(kk, ek, ik, Dk, fk) {
        throw ".exr not supported in Cube."
      }
      loadData(kk, ek, ik) {
        const fk = new DataView(kk.buffer),
          Sk = {
            value: 0
          },
          bk = hk(fk, Sk);
        me(bk, fk, Sk, Pe.DefaultOutputType).then((kk => {
          Me(kk, bk, fk, Sk);
          const Dk = bk.dataWindow.xMax - bk.dataWindow.xMin + 1,
            rk = bk.dataWindow.yMax - bk.dataWindow.yMin + 1;
          ik(Dk, rk, ek.generateMipMaps, !1, (() => {
            const ik = ek.JU();
            ek.format = bk.format, ek.type = kk.textureType, ek.invertY = !1, ek._gammaSpace = !bk.linearSpace, kk.byteArray && ik._uploadDataToTextureDirectly(ek, kk.byteArray, 0, 0, void 0, !0)
          }))
        })).catch((kk => {
          Dk.b.Error("Failed to load EXR texture: ", kk)
        }))
      }
    }
    async function xe(kk) {
      const ek = new DataView(kk),
        ik = {
          value: 0
        },
        fk = hk(ek, ik);
      try {
        const kk = await me(fk, ek, ik, be.Float);
        return Me(kk, fk, ek, ik), kk.byteArray ? {
          width: fk.dataWindow.xMax - fk.dataWindow.xMin + 1,
          height: fk.dataWindow.yMax - fk.dataWindow.yMin + 1,
          data: new Float32Array(kk.byteArray)
        } : (Dk.b.Error("Failed to decode EXR data: No byte array available."), {
          width: 0,
          height: 0,
          data: null
        })
      } catch (Sk) {
        Dk.b.Error("Failed to load EXR data: ", Sk)
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