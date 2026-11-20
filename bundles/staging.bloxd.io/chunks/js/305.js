export const id = 305;
export const ids = [305];
export const modules = {
  41277: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      ReadExrDataAsync: () => JF,
      _ExrTextureLoader: () => VF
    });
    var Rk = Bk(38320),
      tk = Bk(36790),
      ak = Bk(39465);
    const Xk = 4,
      bk = 4,
      wk = 1,
      dk = 2,
      sk = 8,
      Vk = 65536,
      Jk = Vk >> 3,
      Ak = 14,
      ek = 65537,
      yk = 1 << Ak,
      fk = yk - 1,
      mk = 59,
      Wk = 63,
      vk = 2 + Wk - mk;
    var ik, Yk;

    function Lk(kk, Fk) {
      const Bk = new Uint8Array(kk);
      let Rk = 0;
      for (; 0 != Bk[Fk.value + Rk];) Rk += 1;
      const tk = (new TextDecoder).decode(Bk.slice(Fk.value, Fk.value + Rk));
      return Fk.value = Fk.value + Rk + 1, tk
    }

    function Ok(kk, Fk) {
      const Bk = kk.getInt32(Fk.value, !0);
      return Fk.value += Xk, Bk
    }

    function Ek(kk, Fk) {
      const Bk = kk.getUint32(Fk.value, !0);
      return Fk.value += Xk, Bk
    }

    function Sk(kk, Fk) {
      const Bk = kk.getUint8(Fk.value);
      return Fk.value += wk, Bk
    }

    function Nk(kk, Fk) {
      const Bk = kk.getUint16(Fk.value, !0);
      return Fk.value += dk, Bk
    }

    function Hk(kk, Fk) {
      const Bk = kk[Fk.value];
      return Fk.value += wk, Bk
    }

    function uk(kk, Fk) {
      let Bk;
      return Bk = "getBigInt64" in DataView.prototype ? Number(kk.getBigInt64(Fk.value, !0)) : kk.getUint32(Fk.value + 4, !0) + Number(kk.getUint32(Fk.value, !0) << 32), Fk.value += sk, Bk
    }

    function Mk(kk, Fk) {
      const Bk = kk.getFloat32(Fk.value, !0);
      return Fk.value += bk, Bk
    }

    function gk(kk, Fk) {
      return (0, ak.d)(Nk(kk, Fk))
    }

    function Uk(kk, Fk) {
      return (0, ak.h)((0, tk.Clamp)(Mk(kk, Fk), -ak.e, ak.e))
    }

    function ck(kk, Fk, Bk, Rk) {
      switch (Bk) {
        case "string":
        case "stringvector":
        case "iccProfile":
          return function(kk, Fk, Bk) {
            const Rk = (new TextDecoder).decode(new Uint8Array(kk).slice(Fk.value, Fk.value + Bk));
            return Fk.value = Fk.value + Bk, Rk
          }(kk.buffer, Fk, Rk);
        case "chlist":
          return function(kk, Fk, Bk) {
            const Rk = Fk.value,
              tk = [];
            for (; Fk.value < Rk + Bk - 1;) {
              const Bk = Lk(kk.buffer, Fk),
                Rk = Ok(kk, Fk),
                ak = Sk(kk, Fk);
              Fk.value += 3;
              const Xk = Ok(kk, Fk),
                bk = Ok(kk, Fk);
              tk.push({
                name: Bk,
                pixelType: Rk,
                pLinear: ak,
                xSampling: Xk,
                ySampling: bk
              })
            }
            return Fk.value += 1, tk
          }(kk, Fk, Rk);
        case "chromaticities":
          return function(kk, Fk) {
            return {
              redX: Mk(kk, Fk),
              redY: Mk(kk, Fk),
              greenX: Mk(kk, Fk),
              greenY: Mk(kk, Fk),
              blueX: Mk(kk, Fk),
              blueY: Mk(kk, Fk),
              whiteX: Mk(kk, Fk),
              whiteY: Mk(kk, Fk)
            }
          }(kk, Fk);
        case "compression":
          return function(kk, Fk) {
            return Sk(kk, Fk)
          }(kk, Fk);
        case "box2i":
          return function(kk, Fk) {
            return {
              xMin: Ok(kk, Fk),
              yMin: Ok(kk, Fk),
              xMax: Ok(kk, Fk),
              yMax: Ok(kk, Fk)
            }
          }(kk, Fk);
        case "lineOrder":
          return function(kk, Fk) {
            const Bk = Sk(kk, Fk);
            return Yk[Bk]
          }(kk, Fk);
        case "float":
          return Mk(kk, Fk);
        case "v2f":
          return function(kk, Fk) {
            return [Mk(kk, Fk), Mk(kk, Fk)]
          }(kk, Fk);
        case "v3f":
          return function(kk, Fk) {
            return [Mk(kk, Fk), Mk(kk, Fk), Mk(kk, Fk)]
          }(kk, Fk);
        case "int":
          return Ok(kk, Fk);
        case "rational":
          return function(kk, Fk) {
            return [Ok(kk, Fk), Ek(kk, Fk)]
          }(kk, Fk);
        case "timecode":
          return function(kk, Fk) {
            return [Ek(kk, Fk), Ek(kk, Fk)]
          }(kk, Fk);
        case "preview":
          return Fk.value += Rk, "skipped";
        default:
          return void(Fk.value += Rk)
      }
    }

    function Gk(kk) {
      for (let Fk = 1; Fk < kk.length; Fk++) {
        const Bk = kk[Fk - 1] + kk[Fk] - 128;
        kk[Fk] = Bk
      }
    }

    function Tk(kk, Fk) {
      let Bk = 0,
        Rk = Math.floor((kk.length + 1) / 2),
        tk = 0;
      const ak = kk.length - 1;
      for (; !(tk > ak) && (Fk[tk++] = kk[Bk++], !(tk > ak));) Fk[tk++] = kk[Rk++]
    }! function(kk) {
      kk[kk.NO_COMPRESSION = 0] = "NO_COMPRESSION", kk[kk.RLE_COMPRESSION = 1] = "RLE_COMPRESSION", kk[kk.ZIPS_COMPRESSION = 2] = "ZIPS_COMPRESSION", kk[kk.ZIP_COMPRESSION = 3] = "ZIP_COMPRESSION", kk[kk.PIZ_COMPRESSION = 4] = "PIZ_COMPRESSION", kk[kk.PXR24_COMPRESSION = 5] = "PXR24_COMPRESSION"
    }(ik || (ik = {})),
    function(kk) {
      kk[kk.INCREASING_Y = 0] = "INCREASING_Y", kk[kk.DECREASING_Y = 1] = "DECREASING_Y"
    }(Yk || (Yk = {}));
    const rk = 20000630;

    function Dk(kk, Fk) {
      if (kk.getUint32(0, !0) != rk) throw new Error("Incorrect OpenEXR format");
      const Bk = kk.getUint8(4),
        tk = kk.getUint8(5),
        ak = {
          singleTile: !!(2 & tk),
          longName: !!(4 & tk),
          deepFormat: !!(8 & tk),
          multiPart: !!(16 & tk)
        };
      Fk.value = 8;
      const Xk = {};
      let bk = !0;
      for (; bk;) {
        const Bk = Lk(kk.buffer, Fk);
        if (Bk) {
          const tk = Lk(kk.buffer, Fk),
            ak = ck(kk, Fk, tk, Ek(kk, Fk));
          void 0 === ak ? Rk.b.Warn(`Unknown header attribute type ${tk}'.`) : Xk[Bk] = ak
        } else bk = !1
      }
      if (0 != (-5 & tk)) throw new Error("Unsupported file format");
      return {
        version: Bk,
        spec: ak,
        ...Xk
      }
    }
    const zk = 32768,
      Pk = 65535;

    function hk(kk, Fk, Bk, Rk, tk) {
      for (; Bk < kk;) Fk = Fk << 8 | Hk(Rk, tk), Bk += 8;
      return {
        l: Fk >> (Bk -= kk) & (1 << kk) - 1,
        c: Fk,
        lc: Bk
      }
    }

    function qk(kk, Fk, Bk, Rk) {
      return {
        c: kk = kk << 8 | Hk(Bk, Rk),
        lc: Fk += 8
      }
    }

    function Ck(kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk) {
      if (kk == Fk) {
        if (Rk < 8) {
          const kk = qk(Bk, Rk, tk, ak);
          Bk = kk.c, Rk = kk.lc
        }
        let kk = Bk >> (Rk -= 8);
        if (kk = new Uint8Array([kk])[0], bk.value + kk > wk) return null;
        const Fk = Xk[bk.value - 1];
        for (; kk-- > 0;) Xk[bk.value++] = Fk
      } else {
        if (!(bk.value < wk)) return null;
        Xk[bk.value++] = kk
      }
      return {
        c: Bk,
        lc: Rk
      }
    }
    const Zk = new Array(59);

    function pk(kk, Fk, Bk, Rk, tk, ak) {
      const Xk = Fk;
      let bk = 0,
        wk = 0;
      for (; Rk <= tk; Rk++) {
        if (Xk.value - Fk.value > Bk) return;
        let dk = hk(6, bk, wk, kk, Xk);
        const sk = dk.l;
        if (bk = dk.c, wk = dk.lc, ak[Rk] = sk, sk == Wk) {
          if (Xk.value - Fk.value > Bk) throw new Error("Error in HufUnpackEncTable");
          dk = hk(8, bk, wk, kk, Xk);
          let sk = dk.l + vk;
          if (bk = dk.c, wk = dk.lc, Rk + sk > tk + 1) throw new Error("Error in HufUnpackEncTable");
          for (; sk--;) ak[Rk++] = 0;
          Rk--
        } else if (sk >= mk) {
          let kk = sk - mk + 2;
          if (Rk + kk > tk + 1) throw new Error("Error in HufUnpackEncTable");
          for (; kk--;) ak[Rk++] = 0;
          Rk--
        }
      }! function(kk) {
        for (let Bk = 0; Bk <= 58; ++Bk) Zk[Bk] = 0;
        for (let Bk = 0; Bk < ek; ++Bk) Zk[kk[Bk]] += 1;
        let Fk = 0;
        for (let Bk = 58; Bk > 0; --Bk) {
          const kk = Fk + Zk[Bk] >> 1;
          Zk[Bk] = Fk, Fk = kk
        }
        for (let Bk = 0; Bk < ek; ++Bk) {
          const Fk = kk[Bk];
          Fk > 0 && (kk[Bk] = Fk | Zk[Fk]++ << 6)
        }
      }(ak)
    }

    function Kk(kk) {
      return 63 & kk
    }

    function xk(kk) {
      return kk >> 6
    }

    function jk(kk, Fk, Bk, Rk, tk, ak) {
      const Xk = Bk.value,
        bk = Ek(Fk, Bk),
        wk = Ek(Fk, Bk);
      Bk.value += 4;
      const dk = Ek(Fk, Bk);
      if (Bk.value += 4, bk < 0 || bk >= ek || wk < 0 || wk >= ek) throw new Error("Wrong HUF_ENCSIZE");
      const sk = new Array(ek),
        Vk = new Array(yk);
      ! function(kk) {
        for (let Fk = 0; Fk < yk; Fk++) kk[Fk] = {}, kk[Fk].len = 0, kk[Fk].lit = 0, kk[Fk].p = null
      }(Vk);
      if (pk(kk, Bk, Rk - (Bk.value - Xk), bk, wk, sk), dk > 8 * (Rk - (Bk.value - Xk))) throw new Error("Wrong hufUncompress");
      ! function(kk, Fk, Bk, Rk) {
        for (; Fk <= Bk; Fk++) {
          const Bk = xk(kk[Fk]),
            tk = Kk(kk[Fk]);
          if (Bk >> tk) throw new Error("Invalid table entry");
          if (tk > Ak) {
            const kk = Rk[Bk >> tk - Ak];
            if (kk.len) throw new Error("Invalid table entry");
            if (kk.lit++, kk.p) {
              const Fk = kk.p;
              kk.p = new Array(kk.lit);
              for (let Bk = 0; Bk < kk.lit - 1; ++Bk) kk.p[Bk] = Fk[Bk]
            } else kk.p = new Array(1);
            kk.p[kk.lit - 1] = Fk
          } else if (tk) {
            let kk = 0;
            for (let ak = 1 << Ak - tk; ak > 0; ak--) {
              const ak = Rk[(Bk << Ak - tk) + kk];
              if (ak.len || ak.p) throw new Error("Invalid table entry");
              ak.len = tk, ak.lit = Fk, kk++
            }
          }
        }
      }(sk, bk, wk, Vk),
      function(kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk) {
        let dk = 0,
          sk = 0;
        const Vk = Xk,
          Jk = Math.trunc(Rk.value + (tk + 7) / 8);
        for (; Rk.value < Jk;) {
          let tk = qk(dk, sk, Bk, Rk);
          for (dk = tk.c, sk = tk.lc; sk >= Ak;) {
            const Xk = Fk[dk >> sk - Ak & fk];
            if (Xk.len) {
              sk -= Xk.len;
              const kk = Ck(Xk.lit, ak, dk, sk, Bk, Rk, bk, wk, Vk);
              kk && (dk = kk.c, sk = kk.lc)
            } else {
              if (!Xk.p) throw new Error("hufDecode issues");
              let Fk;
              for (Fk = 0; Fk < Xk.lit; Fk++) {
                const Ak = Kk(kk[Xk.p[Fk]]);
                for (; sk < Ak && Rk.value < Jk;) tk = qk(dk, sk, Bk, Rk), dk = tk.c, sk = tk.lc;
                if (sk >= Ak && xk(kk[Xk.p[Fk]]) == (dk >> sk - Ak & (1 << Ak) - 1)) {
                  sk -= Ak;
                  const kk = Ck(Xk.p[Fk], ak, dk, sk, Bk, Rk, bk, wk, Vk);
                  kk && (dk = kk.c, sk = kk.lc);
                  break
                }
              }
              if (Fk == Xk.lit) throw new Error("HufDecode issues")
            }
          }
        }
        const ek = 8 - tk & 7;
        for (dk >>= ek, sk -= ek; sk > 0;) {
          const kk = Fk[dk << Ak - sk & fk];
          if (!kk.len) throw new Error("HufDecode issues");
          {
            sk -= kk.len;
            const Fk = Ck(kk.lit, ak, dk, sk, Bk, Rk, bk, wk, Vk);
            Fk && (dk = Fk.c, sk = Fk.lc)
          }
        }
      }(sk, Vk, kk, Bk, dk, wk, ak, tk, {
        value: 0
      })
    }

    function lk(kk) {
      return 65535 & kk
    }

    function nk(kk) {
      const Fk = lk(kk);
      return Fk > 32767 ? Fk - 65536 : Fk
    }

    function Ik(kk, Fk) {
      const Bk = nk(kk),
        Rk = nk(Fk),
        tk = Bk + (1 & Rk) + (Rk >> 1);
      return {
        a: tk,
        b: tk - Rk
      }
    }

    function Qk(kk, Fk) {
      const Bk = lk(kk),
        Rk = lk(Fk),
        tk = Bk - (Rk >> 1) & Pk;
      return {
        a: Rk + tk - zk & Pk,
        b: tk
      }
    }

    function kF(kk, Fk, Bk, Rk, tk, ak, Xk) {
      const bk = Xk < 16384,
        wk = Bk > tk ? tk : Bk;
      let dk, sk, Vk = 1;
      for (; Vk <= wk;) Vk <<= 1;
      for (Vk >>= 1, dk = Vk, Vk >>= 1; Vk >= 1;) {
        sk = 0;
        const Xk = sk + ak * (tk - dk),
          wk = ak * Vk,
          Jk = ak * dk,
          Ak = Rk * Vk,
          ek = Rk * dk;
        let yk, fk, mk, Wk;
        for (; sk <= Xk; sk += Jk) {
          let tk = sk;
          const ak = sk + Rk * (Bk - dk);
          for (; tk <= ak; tk += ek) {
            const Bk = tk + Ak,
              Rk = tk + wk,
              ak = Rk + Ak;
            if (bk) {
              let Xk = Ik(kk[tk + Fk], kk[Rk + Fk]);
              yk = Xk.a, mk = Xk.b, Xk = Ik(kk[Bk + Fk], kk[ak + Fk]), fk = Xk.a, Wk = Xk.b, Xk = Ik(yk, fk), kk[tk + Fk] = Xk.a, kk[Bk + Fk] = Xk.b, Xk = Ik(mk, Wk), kk[Rk + Fk] = Xk.a, kk[ak + Fk] = Xk.b
            } else {
              let Xk = Qk(kk[tk + Fk], kk[Rk + Fk]);
              yk = Xk.a, mk = Xk.b, Xk = Qk(kk[Bk + Fk], kk[ak + Fk]), fk = Xk.a, Wk = Xk.b, Xk = Qk(yk, fk), kk[tk + Fk] = Xk.a, kk[Bk + Fk] = Xk.b, Xk = Qk(mk, Wk), kk[Rk + Fk] = Xk.a, kk[ak + Fk] = Xk.b
            }
          }
          if (Bk & Vk) {
            const Bk = tk + wk;
            let Rk;
            Rk = bk ? Ik(kk[tk + Fk], kk[Bk + Fk]) : Qk(kk[tk + Fk], kk[Bk + Fk]), yk = Rk.a, kk[Bk + Fk] = Rk.b, kk[tk + Fk] = yk
          }
        }
        if (tk & Vk) {
          let tk = sk;
          const ak = sk + Rk * (Bk - dk);
          for (; tk <= ak; tk += ek) {
            const Bk = tk + Ak;
            let Rk;
            Rk = bk ? Ik(kk[tk + Fk], kk[Bk + Fk]) : Qk(kk[tk + Fk], kk[Bk + Fk]), yk = Rk.a, kk[Bk + Fk] = Rk.b, kk[tk + Fk] = yk
          }
        }
        dk = Vk, Vk >>= 1
      }
      return sk
    }

    function FF(kk) {
      return new DataView(kk.array.buffer, kk.offset.value, kk.size)
    }

    function BF(kk) {
      const Fk = kk.viewer.buffer.slice(kk.offset.value, kk.offset.value + kk.size),
        Bk = new Uint8Array(function(kk) {
          let Fk = kk.byteLength;
          const Bk = [];
          let Rk = 0;
          const tk = new DataView(kk);
          for (; Fk > 0;) {
            const kk = tk.getInt8(Rk++);
            if (kk < 0) {
              const ak = -kk;
              Fk -= ak + 1;
              for (let kk = 0; kk < ak; kk++) Bk.push(tk.getUint8(Rk++))
            } else {
              const ak = kk;
              Fk -= 2;
              const Xk = tk.getUint8(Rk++);
              for (let kk = 0; kk < ak + 1; kk++) Bk.push(Xk)
            }
          }
          return Bk
        }(Fk)),
        Rk = new Uint8Array(Bk.length);
      return Gk(Bk), Tk(Bk, Rk), new DataView(Rk.buffer)
    }

    function RF(kk) {
      const Fk = kk.array.slice(kk.offset.value, kk.offset.value + kk.size),
        Bk = fflate.unzlibSync(Fk),
        Rk = new Uint8Array(Bk.length);
      return Gk(Bk), Tk(Bk, Rk), new DataView(Rk.buffer)
    }

    function tF(kk) {
      const Fk = kk.array.slice(kk.offset.value, kk.offset.value + kk.size),
        Bk = fflate.unzlibSync(Fk),
        Rk = kk.lines * kk.channels * kk.width,
        tk = 1 == kk.type ? new Uint16Array(Rk) : new Uint32Array(Rk);
      let ak = 0,
        Xk = 0;
      const bk = new Array(4);
      for (let wk = 0; wk < kk.lines; wk++)
        for (let Fk = 0; Fk < kk.channels; Fk++) {
          let Fk = 0;
          switch (kk.type) {
            case 1:
              bk[0] = ak, bk[1] = bk[0] + kk.width, ak = bk[1] + kk.width;
              for (let Rk = 0; Rk < kk.width; ++Rk) {
                Fk += Bk[bk[0]++] << 8 | Bk[bk[1]++], tk[Xk] = Fk, Xk++
              }
              break;
            case 2:
              bk[0] = ak, bk[1] = bk[0] + kk.width, bk[2] = bk[1] + kk.width, ak = bk[2] + kk.width;
              for (let Rk = 0; Rk < kk.width; ++Rk) {
                Fk += Bk[bk[0]++] << 24 | Bk[bk[1]++] << 16 | Bk[bk[2]++] << 8, tk[Xk] = Fk, Xk++
              }
          }
        }
      return new DataView(tk.buffer)
    }

    function aF(kk) {
      const Fk = kk.viewer,
        Bk = {
          value: kk.offset.value
        },
        Rk = new Uint16Array(kk.width * kk.scanlineBlockSize * (kk.channels * kk.type)),
        tk = new Uint8Array(Jk);
      let ak = 0;
      const Xk = new Array(kk.channels);
      for (let dk = 0; dk < kk.channels; dk++) Xk[dk] = {}, Xk[dk].start = ak, Xk[dk].end = Xk[dk].start, Xk[dk].nx = kk.width, Xk[dk].ny = kk.lines, Xk[dk].size = kk.type, ak += Xk[dk].nx * Xk[dk].ny * Xk[dk].size;
      const bk = Nk(Fk, Bk),
        wk = Nk(Fk, Bk);
      if (wk >= Jk) throw new Error("Wrong PIZ_COMPRESSION BITMAP_SIZE");
      if (bk <= wk)
        for (let dk = 0; dk < wk - bk + 1; dk++) tk[dk + bk] = Sk(Fk, Bk);
      const sk = new Uint16Array(Vk),
        Ak = function(kk, Fk) {
          let Bk = 0;
          for (let tk = 0; tk < Vk; ++tk)(0 == tk || kk[tk >> 3] & 1 << (7 & tk)) && (Fk[Bk++] = tk);
          const Rk = Bk - 1;
          for (; Bk < Vk;) Fk[Bk++] = 0;
          return Rk
        }(tk, sk),
        ek = Ek(Fk, Bk);
      jk(kk.array, Fk, Bk, ek, Rk, ak);
      for (let dk = 0; dk < kk.channels; ++dk) {
        const kk = Xk[dk];
        for (let Fk = 0; Fk < Xk[dk].size; ++Fk) kF(Rk, kk.start + Fk, kk.nx, kk.size, kk.ny, kk.nx * kk.size, Ak)
      }! function(kk, Fk, Bk) {
        for (let Rk = 0; Rk < Bk; ++Rk) Fk[Rk] = kk[Fk[Rk]]
      }(sk, Rk, ak);
      let yk = 0;
      const fk = new Uint8Array(Rk.buffer.byteLength);
      for (let Vk = 0; Vk < kk.lines; Vk++)
        for (let Fk = 0; Fk < kk.channels; Fk++) {
          const kk = Xk[Fk],
            Bk = kk.nx * kk.size,
            tk = new Uint8Array(Rk.buffer, kk.end * dk, Bk * dk);
          fk.set(tk, yk), yk += Bk * dk, kk.end += Bk
        }
      return new DataView(fk.buffer)
    }
    var XF, bF = Bk(39492);
    ! function(kk) {
      kk[kk.Float = 0] = "Float", kk[kk.HalfFloat = 1] = "HalfFloat"
    }(XF || (XF = {}));
    class wF {}
    async function dF(kk, Fk, Bk, Rk) {
      const tk = {
        size: 0,
        viewer: Fk,
        array: new Uint8Array(Fk.buffer),
        offset: Bk,
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
        case ik.NO_COMPRESSION:
          tk.lines = 1, tk.uncompress = FF;
          break;
        case ik.RLE_COMPRESSION:
          tk.lines = 1, tk.uncompress = BF;
          break;
        case ik.ZIPS_COMPRESSION:
          tk.lines = 1, tk.uncompress = RF, await bF.h.LoadScriptAsync(wF.FFLATEUrl);
          break;
        case ik.ZIP_COMPRESSION:
          tk.lines = 16, tk.uncompress = RF, await bF.h.LoadScriptAsync(wF.FFLATEUrl);
          break;
        case ik.PIZ_COMPRESSION:
          tk.lines = 32, tk.uncompress = aF;
          break;
        case ik.PXR24_COMPRESSION:
          tk.lines = 16, tk.uncompress = tF, await bF.h.LoadScriptAsync(wF.FFLATEUrl);
          break;
        default:
          throw new Error(ik[kk.compression] + " is unsupported")
      }
      tk.scanlineBlockSize = tk.lines;
      const ak = {};
      for (const bk of kk.channels) switch (bk.name) {
        case "R":
        case "G":
        case "B":
        case "A":
        case "Y":
          ak[bk.name] = !0, tk.type = bk.pixelType
      }
      let Xk = !1;
      if (ak.R && ak.G && ak.B && ak.A) tk.outputChannels = 4, tk.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (ak.R && ak.G && ak.B) Xk = !0, tk.outputChannels = 4, tk.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (ak.R && ak.G) tk.outputChannels = 2, tk.decodeChannels = {
        R: 0,
        G: 1
      };
      else if (ak.R) tk.outputChannels = 1, tk.decodeChannels = {
        R: 0
      };
      else {
        if (!ak.Y) throw new Error("EXRLoader.parse: file contains unsupported data channels.");
        tk.outputChannels = 1, tk.decodeChannels = {
          Y: 0
        }
      }
      if (1 === tk.type) switch (Rk) {
        case XF.Float:
          tk.getter = gk, tk.inputSize = dk;
          break;
        case XF.HalfFloat:
          tk.getter = Nk, tk.inputSize = dk
      } else {
        if (2 !== tk.type) throw new Error("Unsupported pixelType " + tk.type + " for " + kk.compression);
        switch (Rk) {
          case XF.Float:
            tk.getter = Mk, tk.inputSize = bk;
            break;
          case XF.HalfFloat:
            tk.getter = Uk, tk.inputSize = bk
        }
      }
      tk.blockCount = tk.height / tk.scanlineBlockSize;
      for (let bk = 0; bk < tk.blockCount; bk++) uk(Fk, Bk);
      const wk = tk.width * tk.height * tk.outputChannels;
      switch (Rk) {
        case XF.Float:
          tk.byteArray = new Float32Array(wk), tk.textureType = 1, Xk && tk.byteArray.fill(1, 0, wk);
          break;
        case XF.HalfFloat:
          tk.byteArray = new Uint16Array(wk), tk.textureType = 2, Xk && tk.byteArray.fill(15360, 0, wk);
          break;
        default:
          throw new Error("Unsupported type: " + Rk)
      }
      let sk = 0;
      for (const bk of kk.channels) void 0 !== tk.decodeChannels[bk.name] && (tk.channelLineOffsets[bk.name] = sk * tk.width), sk += 2 * bk.pixelType;
      return tk.bytesPerLine = tk.width * sk, tk.outLineWidth = tk.width * tk.outputChannels, "INCREASING_Y" === kk.lineOrder ? tk.scanOrder = kk => kk : tk.scanOrder = kk => tk.height - 1 - kk, 4 == tk.outputChannels ? (tk.format = 5, tk.linearSpace = !0) : (tk.format = 6, tk.linearSpace = !1), tk
    }

    function sF(kk, Fk, Bk, Rk) {
      const tk = {
        value: 0
      };
      for (let ak = 0; ak < kk.height / kk.scanlineBlockSize; ak++) {
        const Xk = Ok(Bk, Rk) - Fk.dataWindow.yMin;
        kk.size = Ek(Bk, Rk), kk.lines = Xk + kk.scanlineBlockSize > kk.height ? kk.height - Xk : kk.scanlineBlockSize;
        const bk = kk.size < kk.lines * kk.bytesPerLine && kk.uncompress ? kk.uncompress(kk) : FF(kk);
        Rk.value += kk.size;
        for (let Bk = 0; Bk < kk.scanlineBlockSize; Bk++) {
          const Rk = ak * kk.scanlineBlockSize,
            Xk = Bk + kk.scanOrder(Rk);
          if (Xk >= kk.height) continue;
          const wk = Bk * kk.bytesPerLine,
            dk = (kk.height - 1 - Xk) * kk.outLineWidth;
          for (let Bk = 0; Bk < kk.channels; Bk++) {
            const Rk = Fk.channels[Bk].name,
              ak = kk.channelLineOffsets[Rk],
              Xk = kk.decodeChannels[Rk];
            if (void 0 !== Xk) {
              tk.value = wk + ak;
              for (let Fk = 0; Fk < kk.width; Fk++) {
                const Bk = dk + Fk * kk.outputChannels + Xk;
                kk.byteArray && (kk.byteArray[Bk] = kk.getter(bk, tk))
              }
            }
          }
        }
      }
    }
    wF.DefaultOutputType = XF.HalfFloat, wF.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class VF {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(kk, Fk, Bk, Rk, tk) {
        throw ".exr not supported in Cube."
      }
      loadData(kk, Fk, Bk) {
        const tk = new DataView(kk.buffer),
          ak = {
            value: 0
          },
          Xk = Dk(tk, ak);
        dF(Xk, tk, ak, wF.DefaultOutputType).then((kk => {
          sF(kk, Xk, tk, ak);
          const Rk = Xk.dataWindow.xMax - Xk.dataWindow.xMin + 1,
            bk = Xk.dataWindow.yMax - Xk.dataWindow.yMin + 1;
          Bk(Rk, bk, Fk.generateMipMaps, !1, (() => {
            const Bk = Fk.ne();
            Fk.format = Xk.format, Fk.type = kk.textureType, Fk.invertY = !1, Fk._gammaSpace = !Xk.linearSpace, kk.byteArray && Bk._uploadDataToTextureDirectly(Fk, kk.byteArray, 0, 0, void 0, !0)
          }))
        })).catch((kk => {
          Rk.b.Error("Failed to load EXR texture: ", kk)
        }))
      }
    }
    async function JF(kk) {
      const Fk = new DataView(kk),
        Bk = {
          value: 0
        },
        tk = Dk(Fk, Bk);
      try {
        const kk = await dF(tk, Fk, Bk, XF.Float);
        return sF(kk, tk, Fk, Bk), kk.byteArray ? {
          width: tk.dataWindow.xMax - tk.dataWindow.xMin + 1,
          height: tk.dataWindow.yMax - tk.dataWindow.yMin + 1,
          data: new Float32Array(kk.byteArray)
        } : (Rk.b.Error("Failed to decode EXR data: No byte array available."), {
          width: 0,
          height: 0,
          data: null
        })
      } catch (ak) {
        Rk.b.Error("Failed to load EXR data: ", ak)
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