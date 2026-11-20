export const id = 306;
export const ids = [306];
export const modules = {
  41623: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      ReadExrDataAsync: () => BE,
      _ExrTextureLoader: () => uE
    });
    var Yq = gq(38653),
      lq = gq(37158),
      Oq = gq(39819);
    const mq = 4,
      xq = 4,
      Aq = 1,
      cq = 2,
      uq = 8,
      Bq = 65536,
      Wq = Bq >> 3,
      Nq = 14,
      aq = 65537,
      Vq = 1 << Nq,
      dq = Vq - 1,
      jq = 59,
      Hq = 63,
      oq = 2 + Hq - jq;
    var Pq, Qq;

    function yq(qq, Eq) {
      const gq = new Uint8Array(qq);
      let Yq = 0;
      for (; 0 != gq[Eq.value + Yq];) Yq += 1;
      const lq = (new TextDecoder).decode(gq.slice(Eq.value, Eq.value + Yq));
      return Eq.value = Eq.value + Yq + 1, lq
    }

    function tq(qq, Eq) {
      const gq = qq.getInt32(Eq.value, !0);
      return Eq.value += mq, gq
    }

    function rq(qq, Eq) {
      const gq = qq.getUint32(Eq.value, !0);
      return Eq.value += mq, gq
    }

    function vq(qq, Eq) {
      const gq = qq.getUint8(Eq.value);
      return Eq.value += Aq, gq
    }

    function hq(qq, Eq) {
      const gq = qq.getUint16(Eq.value, !0);
      return Eq.value += cq, gq
    }

    function nq(qq, Eq) {
      const gq = qq[Eq.value];
      return Eq.value += Aq, gq
    }

    function bq(qq, Eq) {
      let gq;
      return gq = "getBigInt64" in DataView.prototype ? Number(qq.getBigInt64(Eq.value, !0)) : qq.getUint32(Eq.value + 4, !0) + Number(qq.getUint32(Eq.value, !0) << 32), Eq.value += uq, gq
    }

    function iq(qq, Eq) {
      const gq = qq.getFloat32(Eq.value, !0);
      return Eq.value += xq, gq
    }

    function Zq(qq, Eq) {
      return (0, Oq.e)(hq(qq, Eq))
    }

    function fq(qq, Eq) {
      return (0, Oq.j)((0, lq.Clamp)(iq(qq, Eq), -Oq.f, Oq.f))
    }

    function Mq(qq, Eq, gq, Yq) {
      switch (gq) {
        case "string":
        case "stringvector":
        case "iccProfile":
          return function(qq, Eq, gq) {
            const Yq = (new TextDecoder).decode(new Uint8Array(qq).slice(Eq.value, Eq.value + gq));
            return Eq.value = Eq.value + gq, Yq
          }(qq.buffer, Eq, Yq);
        case "chlist":
          return function(qq, Eq, gq) {
            const Yq = Eq.value,
              lq = [];
            for (; Eq.value < Yq + gq - 1;) {
              const gq = yq(qq.buffer, Eq),
                Yq = tq(qq, Eq),
                Oq = vq(qq, Eq);
              Eq.value += 3;
              const mq = tq(qq, Eq),
                xq = tq(qq, Eq);
              lq.push({
                name: gq,
                pixelType: Yq,
                pLinear: Oq,
                xSampling: mq,
                ySampling: xq
              })
            }
            return Eq.value += 1, lq
          }(qq, Eq, Yq);
        case "chromaticities":
          return function(qq, Eq) {
            return {
              redX: iq(qq, Eq),
              redY: iq(qq, Eq),
              greenX: iq(qq, Eq),
              greenY: iq(qq, Eq),
              blueX: iq(qq, Eq),
              blueY: iq(qq, Eq),
              whiteX: iq(qq, Eq),
              whiteY: iq(qq, Eq)
            }
          }(qq, Eq);
        case "compression":
          return function(qq, Eq) {
            return vq(qq, Eq)
          }(qq, Eq);
        case "box2i":
          return function(qq, Eq) {
            return {
              xMin: tq(qq, Eq),
              yMin: tq(qq, Eq),
              xMax: tq(qq, Eq),
              yMax: tq(qq, Eq)
            }
          }(qq, Eq);
        case "lineOrder":
          return function(qq, Eq) {
            const gq = vq(qq, Eq);
            return Qq[gq]
          }(qq, Eq);
        case "float":
          return iq(qq, Eq);
        case "v2f":
          return function(qq, Eq) {
            return [iq(qq, Eq), iq(qq, Eq)]
          }(qq, Eq);
        case "v3f":
          return function(qq, Eq) {
            return [iq(qq, Eq), iq(qq, Eq), iq(qq, Eq)]
          }(qq, Eq);
        case "int":
          return tq(qq, Eq);
        case "rational":
          return function(qq, Eq) {
            return [tq(qq, Eq), rq(qq, Eq)]
          }(qq, Eq);
        case "timecode":
          return function(qq, Eq) {
            return [rq(qq, Eq), rq(qq, Eq)]
          }(qq, Eq);
        case "preview":
          return Eq.value += Yq, "skipped";
        default:
          return void(Eq.value += Yq)
      }
    }

    function Tq(qq) {
      for (let Eq = 1; Eq < qq.length; Eq++) {
        const gq = qq[Eq - 1] + qq[Eq] - 128;
        qq[Eq] = gq
      }
    }

    function zq(qq, Eq) {
      let gq = 0,
        Yq = Math.floor((qq.length + 1) / 2),
        lq = 0;
      const Oq = qq.length - 1;
      for (; !(lq > Oq) && (Eq[lq++] = qq[gq++], !(lq > Oq));) Eq[lq++] = qq[Yq++]
    }! function(qq) {
      qq[qq.NO_COMPRESSION = 0] = "NO_COMPRESSION", qq[qq.RLE_COMPRESSION = 1] = "RLE_COMPRESSION", qq[qq.ZIPS_COMPRESSION = 2] = "ZIPS_COMPRESSION", qq[qq.ZIP_COMPRESSION = 3] = "ZIP_COMPRESSION", qq[qq.PIZ_COMPRESSION = 4] = "PIZ_COMPRESSION", qq[qq.PXR24_COMPRESSION = 5] = "PXR24_COMPRESSION"
    }(Pq || (Pq = {})),
    function(qq) {
      qq[qq.INCREASING_Y = 0] = "INCREASING_Y", qq[qq.DECREASING_Y = 1] = "DECREASING_Y"
    }(Qq || (Qq = {}));
    const Sq = 20000630;

    function pq(qq, Eq) {
      if (qq.getUint32(0, !0) != Sq) throw new Error("Incorrect OpenEXR format");
      const gq = qq.getUint8(4),
        lq = qq.getUint8(5),
        Oq = {
          singleTile: !!(2 & lq),
          longName: !!(4 & lq),
          deepFormat: !!(8 & lq),
          multiPart: !!(16 & lq)
        };
      Eq.value = 8;
      const mq = {};
      let xq = !0;
      for (; xq;) {
        const gq = yq(qq.buffer, Eq);
        if (gq) {
          const lq = yq(qq.buffer, Eq),
            Oq = Mq(qq, Eq, lq, rq(qq, Eq));
          void 0 === Oq ? Yq.b.Warn(`Unknown header attribute type ${lq}'.`) : mq[gq] = Oq
        } else xq = !1
      }
      if (0 != (-5 & lq)) throw new Error("Unsupported file format");
      return {
        version: gq,
        spec: Oq,
        ...mq
      }
    }
    const Gq = 32768,
      Lq = 65535;

    function Jq(qq, Eq, gq, Yq, lq) {
      for (; gq < qq;) Eq = Eq << 8 | nq(Yq, lq), gq += 8;
      return {
        l: Eq >> (gq -= qq) & (1 << qq) - 1,
        c: Eq,
        lc: gq
      }
    }

    function kq(qq, Eq, gq, Yq) {
      return {
        c: qq = qq << 8 | nq(gq, Yq),
        lc: Eq += 8
      }
    }

    function Rq(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq) {
      if (qq == Eq) {
        if (Yq < 8) {
          const qq = kq(gq, Yq, lq, Oq);
          gq = qq.c, Yq = qq.lc
        }
        let qq = gq >> (Yq -= 8);
        if (qq = new Uint8Array([qq])[0], xq.value + qq > Aq) return null;
        const Eq = mq[xq.value - 1];
        for (; qq-- > 0;) mq[xq.value++] = Eq
      } else {
        if (!(xq.value < Aq)) return null;
        mq[xq.value++] = qq
      }
      return {
        c: gq,
        lc: Yq
      }
    }
    const Uq = new Array(59);

    function Fq(qq, Eq, gq, Yq, lq, Oq) {
      const mq = Eq;
      let xq = 0,
        Aq = 0;
      for (; Yq <= lq; Yq++) {
        if (mq.value - Eq.value > gq) return;
        let cq = Jq(6, xq, Aq, qq, mq);
        const uq = cq.l;
        if (xq = cq.c, Aq = cq.lc, Oq[Yq] = uq, uq == Hq) {
          if (mq.value - Eq.value > gq) throw new Error("Error in HufUnpackEncTable");
          cq = Jq(8, xq, Aq, qq, mq);
          let uq = cq.l + oq;
          if (xq = cq.c, Aq = cq.lc, Yq + uq > lq + 1) throw new Error("Error in HufUnpackEncTable");
          for (; uq--;) Oq[Yq++] = 0;
          Yq--
        } else if (uq >= jq) {
          let qq = uq - jq + 2;
          if (Yq + qq > lq + 1) throw new Error("Error in HufUnpackEncTable");
          for (; qq--;) Oq[Yq++] = 0;
          Yq--
        }
      }! function(qq) {
        for (let gq = 0; gq <= 58; ++gq) Uq[gq] = 0;
        for (let gq = 0; gq < aq; ++gq) Uq[qq[gq]] += 1;
        let Eq = 0;
        for (let gq = 58; gq > 0; --gq) {
          const qq = Eq + Uq[gq] >> 1;
          Uq[gq] = Eq, Eq = qq
        }
        for (let gq = 0; gq < aq; ++gq) {
          const Eq = qq[gq];
          Eq > 0 && (qq[gq] = Eq | Uq[Eq]++ << 6)
        }
      }(Oq)
    }

    function sq(qq) {
      return 63 & qq
    }

    function Xq(qq) {
      return qq >> 6
    }

    function wq(qq, Eq, gq, Yq, lq, Oq) {
      const mq = gq.value,
        xq = rq(Eq, gq),
        Aq = rq(Eq, gq);
      gq.value += 4;
      const cq = rq(Eq, gq);
      if (gq.value += 4, xq < 0 || xq >= aq || Aq < 0 || Aq >= aq) throw new Error("Wrong HUF_ENCSIZE");
      const uq = new Array(aq),
        Bq = new Array(Vq);
      ! function(qq) {
        for (let Eq = 0; Eq < Vq; Eq++) qq[Eq] = {}, qq[Eq].len = 0, qq[Eq].lit = 0, qq[Eq].p = null
      }(Bq);
      if (Fq(qq, gq, Yq - (gq.value - mq), xq, Aq, uq), cq > 8 * (Yq - (gq.value - mq))) throw new Error("Wrong hufUncompress");
      ! function(qq, Eq, gq, Yq) {
        for (; Eq <= gq; Eq++) {
          const gq = Xq(qq[Eq]),
            lq = sq(qq[Eq]);
          if (gq >> lq) throw new Error("Invalid table entry");
          if (lq > Nq) {
            const qq = Yq[gq >> lq - Nq];
            if (qq.len) throw new Error("Invalid table entry");
            if (qq.lit++, qq.p) {
              const Eq = qq.p;
              qq.p = new Array(qq.lit);
              for (let gq = 0; gq < qq.lit - 1; ++gq) qq.p[gq] = Eq[gq]
            } else qq.p = new Array(1);
            qq.p[qq.lit - 1] = Eq
          } else if (lq) {
            let qq = 0;
            for (let Oq = 1 << Nq - lq; Oq > 0; Oq--) {
              const Oq = Yq[(gq << Nq - lq) + qq];
              if (Oq.len || Oq.p) throw new Error("Invalid table entry");
              Oq.len = lq, Oq.lit = Eq, qq++
            }
          }
        }
      }(uq, xq, Aq, Bq),
      function(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq) {
        let cq = 0,
          uq = 0;
        const Bq = mq,
          Wq = Math.trunc(Yq.value + (lq + 7) / 8);
        for (; Yq.value < Wq;) {
          let lq = kq(cq, uq, gq, Yq);
          for (cq = lq.c, uq = lq.lc; uq >= Nq;) {
            const mq = Eq[cq >> uq - Nq & dq];
            if (mq.len) {
              uq -= mq.len;
              const qq = Rq(mq.lit, Oq, cq, uq, gq, Yq, xq, Aq, Bq);
              qq && (cq = qq.c, uq = qq.lc)
            } else {
              if (!mq.p) throw new Error("hufDecode issues");
              let Eq;
              for (Eq = 0; Eq < mq.lit; Eq++) {
                const Nq = sq(qq[mq.p[Eq]]);
                for (; uq < Nq && Yq.value < Wq;) lq = kq(cq, uq, gq, Yq), cq = lq.c, uq = lq.lc;
                if (uq >= Nq && Xq(qq[mq.p[Eq]]) == (cq >> uq - Nq & (1 << Nq) - 1)) {
                  uq -= Nq;
                  const qq = Rq(mq.p[Eq], Oq, cq, uq, gq, Yq, xq, Aq, Bq);
                  qq && (cq = qq.c, uq = qq.lc);
                  break
                }
              }
              if (Eq == mq.lit) throw new Error("HufDecode issues")
            }
          }
        }
        const aq = 8 - lq & 7;
        for (cq >>= aq, uq -= aq; uq > 0;) {
          const qq = Eq[cq << Nq - uq & dq];
          if (!qq.len) throw new Error("HufDecode issues");
          {
            uq -= qq.len;
            const Eq = Rq(qq.lit, Oq, cq, uq, gq, Yq, xq, Aq, Bq);
            Eq && (cq = Eq.c, uq = Eq.lc)
          }
        }
      }(uq, Bq, qq, gq, cq, Aq, Oq, lq, {
        value: 0
      })
    }

    function Kq(qq) {
      return 65535 & qq
    }

    function Cq(qq) {
      const Eq = Kq(qq);
      return Eq > 32767 ? Eq - 65536 : Eq
    }

    function Iq(qq, Eq) {
      const gq = Cq(qq),
        Yq = Cq(Eq),
        lq = gq + (1 & Yq) + (Yq >> 1);
      return {
        a: lq,
        b: lq - Yq
      }
    }

    function eq(qq, Eq) {
      const gq = Kq(qq),
        Yq = Kq(Eq),
        lq = gq - (Yq >> 1) & Lq;
      return {
        a: Yq + lq - Gq & Lq,
        b: lq
      }
    }

    function Dq(qq, Eq, gq, Yq, lq, Oq, mq) {
      const xq = mq < 16384,
        Aq = gq > lq ? lq : gq;
      let cq, uq, Bq = 1;
      for (; Bq <= Aq;) Bq <<= 1;
      for (Bq >>= 1, cq = Bq, Bq >>= 1; Bq >= 1;) {
        uq = 0;
        const mq = uq + Oq * (lq - cq),
          Aq = Oq * Bq,
          Wq = Oq * cq,
          Nq = Yq * Bq,
          aq = Yq * cq;
        let Vq, dq, jq, Hq;
        for (; uq <= mq; uq += Wq) {
          let lq = uq;
          const Oq = uq + Yq * (gq - cq);
          for (; lq <= Oq; lq += aq) {
            const gq = lq + Nq,
              Yq = lq + Aq,
              Oq = Yq + Nq;
            if (xq) {
              let mq = Iq(qq[lq + Eq], qq[Yq + Eq]);
              Vq = mq.a, jq = mq.b, mq = Iq(qq[gq + Eq], qq[Oq + Eq]), dq = mq.a, Hq = mq.b, mq = Iq(Vq, dq), qq[lq + Eq] = mq.a, qq[gq + Eq] = mq.b, mq = Iq(jq, Hq), qq[Yq + Eq] = mq.a, qq[Oq + Eq] = mq.b
            } else {
              let mq = eq(qq[lq + Eq], qq[Yq + Eq]);
              Vq = mq.a, jq = mq.b, mq = eq(qq[gq + Eq], qq[Oq + Eq]), dq = mq.a, Hq = mq.b, mq = eq(Vq, dq), qq[lq + Eq] = mq.a, qq[gq + Eq] = mq.b, mq = eq(jq, Hq), qq[Yq + Eq] = mq.a, qq[Oq + Eq] = mq.b
            }
          }
          if (gq & Bq) {
            const gq = lq + Aq;
            let Yq;
            Yq = xq ? Iq(qq[lq + Eq], qq[gq + Eq]) : eq(qq[lq + Eq], qq[gq + Eq]), Vq = Yq.a, qq[gq + Eq] = Yq.b, qq[lq + Eq] = Vq
          }
        }
        if (lq & Bq) {
          let lq = uq;
          const Oq = uq + Yq * (gq - cq);
          for (; lq <= Oq; lq += aq) {
            const gq = lq + Nq;
            let Yq;
            Yq = xq ? Iq(qq[lq + Eq], qq[gq + Eq]) : eq(qq[lq + Eq], qq[gq + Eq]), Vq = Yq.a, qq[gq + Eq] = Yq.b, qq[lq + Eq] = Vq
          }
        }
        cq = Bq, Bq >>= 1
      }
      return uq
    }

    function qE(qq) {
      return new DataView(qq.array.buffer, qq.offset.value, qq.size)
    }

    function EE(qq) {
      const Eq = qq.viewer.buffer.slice(qq.offset.value, qq.offset.value + qq.size),
        gq = new Uint8Array(function(qq) {
          let Eq = qq.byteLength;
          const gq = [];
          let Yq = 0;
          const lq = new DataView(qq);
          for (; Eq > 0;) {
            const qq = lq.getInt8(Yq++);
            if (qq < 0) {
              const Oq = -qq;
              Eq -= Oq + 1;
              for (let qq = 0; qq < Oq; qq++) gq.push(lq.getUint8(Yq++))
            } else {
              const Oq = qq;
              Eq -= 2;
              const mq = lq.getUint8(Yq++);
              for (let qq = 0; qq < Oq + 1; qq++) gq.push(mq)
            }
          }
          return gq
        }(Eq)),
        Yq = new Uint8Array(gq.length);
      return Tq(gq), zq(gq, Yq), new DataView(Yq.buffer)
    }

    function gE(qq) {
      const Eq = qq.array.slice(qq.offset.value, qq.offset.value + qq.size),
        gq = fflate.unzlibSync(Eq),
        Yq = new Uint8Array(gq.length);
      return Tq(gq), zq(gq, Yq), new DataView(Yq.buffer)
    }

    function YE(qq) {
      const Eq = qq.array.slice(qq.offset.value, qq.offset.value + qq.size),
        gq = fflate.unzlibSync(Eq),
        Yq = qq.lines * qq.channels * qq.width,
        lq = 1 == qq.type ? new Uint16Array(Yq) : new Uint32Array(Yq);
      let Oq = 0,
        mq = 0;
      const xq = new Array(4);
      for (let Aq = 0; Aq < qq.lines; Aq++)
        for (let Eq = 0; Eq < qq.channels; Eq++) {
          let Eq = 0;
          switch (qq.type) {
            case 1:
              xq[0] = Oq, xq[1] = xq[0] + qq.width, Oq = xq[1] + qq.width;
              for (let Yq = 0; Yq < qq.width; ++Yq) {
                Eq += gq[xq[0]++] << 8 | gq[xq[1]++], lq[mq] = Eq, mq++
              }
              break;
            case 2:
              xq[0] = Oq, xq[1] = xq[0] + qq.width, xq[2] = xq[1] + qq.width, Oq = xq[2] + qq.width;
              for (let Yq = 0; Yq < qq.width; ++Yq) {
                Eq += gq[xq[0]++] << 24 | gq[xq[1]++] << 16 | gq[xq[2]++] << 8, lq[mq] = Eq, mq++
              }
          }
        }
      return new DataView(lq.buffer)
    }

    function lE(qq) {
      const Eq = qq.viewer,
        gq = {
          value: qq.offset.value
        },
        Yq = new Uint16Array(qq.width * qq.scanlineBlockSize * (qq.channels * qq.type)),
        lq = new Uint8Array(Wq);
      let Oq = 0;
      const mq = new Array(qq.channels);
      for (let cq = 0; cq < qq.channels; cq++) mq[cq] = {}, mq[cq].start = Oq, mq[cq].end = mq[cq].start, mq[cq].nx = qq.width, mq[cq].ny = qq.lines, mq[cq].size = qq.type, Oq += mq[cq].nx * mq[cq].ny * mq[cq].size;
      const xq = hq(Eq, gq),
        Aq = hq(Eq, gq);
      if (Aq >= Wq) throw new Error("Wrong PIZ_COMPRESSION BITMAP_SIZE");
      if (xq <= Aq)
        for (let cq = 0; cq < Aq - xq + 1; cq++) lq[cq + xq] = vq(Eq, gq);
      const uq = new Uint16Array(Bq),
        Nq = function(qq, Eq) {
          let gq = 0;
          for (let lq = 0; lq < Bq; ++lq)(0 == lq || qq[lq >> 3] & 1 << (7 & lq)) && (Eq[gq++] = lq);
          const Yq = gq - 1;
          for (; gq < Bq;) Eq[gq++] = 0;
          return Yq
        }(lq, uq),
        aq = rq(Eq, gq);
      wq(qq.array, Eq, gq, aq, Yq, Oq);
      for (let cq = 0; cq < qq.channels; ++cq) {
        const qq = mq[cq];
        for (let Eq = 0; Eq < mq[cq].size; ++Eq) Dq(Yq, qq.start + Eq, qq.nx, qq.size, qq.ny, qq.nx * qq.size, Nq)
      }! function(qq, Eq, gq) {
        for (let Yq = 0; Yq < gq; ++Yq) Eq[Yq] = qq[Eq[Yq]]
      }(uq, Yq, Oq);
      let Vq = 0;
      const dq = new Uint8Array(Yq.buffer.byteLength);
      for (let Bq = 0; Bq < qq.lines; Bq++)
        for (let Eq = 0; Eq < qq.channels; Eq++) {
          const qq = mq[Eq],
            gq = qq.nx * qq.size,
            lq = new Uint8Array(Yq.buffer, qq.end * cq, gq * cq);
          dq.set(lq, Vq), Vq += gq * cq, qq.end += gq
        }
      return new DataView(dq.buffer)
    }
    var OE, mE = gq(39845);
    ! function(qq) {
      qq[qq.Float = 0] = "Float", qq[qq.HalfFloat = 1] = "HalfFloat"
    }(OE || (OE = {}));
    class xE {}
    async function AE(qq, Eq, gq, Yq) {
      const lq = {
        size: 0,
        viewer: Eq,
        array: new Uint8Array(Eq.buffer),
        offset: gq,
        width: qq.dataWindow.xMax - qq.dataWindow.xMin + 1,
        height: qq.dataWindow.yMax - qq.dataWindow.yMin + 1,
        channels: qq.channels.length,
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
      switch (qq.compression) {
        case Pq.NO_COMPRESSION:
          lq.lines = 1, lq.uncompress = qE;
          break;
        case Pq.RLE_COMPRESSION:
          lq.lines = 1, lq.uncompress = EE;
          break;
        case Pq.ZIPS_COMPRESSION:
          lq.lines = 1, lq.uncompress = gE, await mE.f.LoadScriptAsync(xE.FFLATEUrl);
          break;
        case Pq.ZIP_COMPRESSION:
          lq.lines = 16, lq.uncompress = gE, await mE.f.LoadScriptAsync(xE.FFLATEUrl);
          break;
        case Pq.PIZ_COMPRESSION:
          lq.lines = 32, lq.uncompress = lE;
          break;
        case Pq.PXR24_COMPRESSION:
          lq.lines = 16, lq.uncompress = YE, await mE.f.LoadScriptAsync(xE.FFLATEUrl);
          break;
        default:
          throw new Error(Pq[qq.compression] + " is unsupported")
      }
      lq.scanlineBlockSize = lq.lines;
      const Oq = {};
      for (const xq of qq.channels) switch (xq.name) {
        case "R":
        case "G":
        case "B":
        case "A":
        case "Y":
          Oq[xq.name] = !0, lq.type = xq.pixelType
      }
      let mq = !1;
      if (Oq.R && Oq.G && Oq.B && Oq.A) lq.outputChannels = 4, lq.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (Oq.R && Oq.G && Oq.B) mq = !0, lq.outputChannels = 4, lq.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (Oq.R && Oq.G) lq.outputChannels = 2, lq.decodeChannels = {
        R: 0,
        G: 1
      };
      else if (Oq.R) lq.outputChannels = 1, lq.decodeChannels = {
        R: 0
      };
      else {
        if (!Oq.Y) throw new Error("EXRLoader.parse: file contains unsupported data channels.");
        lq.outputChannels = 1, lq.decodeChannels = {
          Y: 0
        }
      }
      if (1 === lq.type) switch (Yq) {
        case OE.Float:
          lq.getter = Zq, lq.inputSize = cq;
          break;
        case OE.HalfFloat:
          lq.getter = hq, lq.inputSize = cq
      } else {
        if (2 !== lq.type) throw new Error("Unsupported pixelType " + lq.type + " for " + qq.compression);
        switch (Yq) {
          case OE.Float:
            lq.getter = iq, lq.inputSize = xq;
            break;
          case OE.HalfFloat:
            lq.getter = fq, lq.inputSize = xq
        }
      }
      lq.blockCount = lq.height / lq.scanlineBlockSize;
      for (let xq = 0; xq < lq.blockCount; xq++) bq(Eq, gq);
      const Aq = lq.width * lq.height * lq.outputChannels;
      switch (Yq) {
        case OE.Float:
          lq.byteArray = new Float32Array(Aq), lq.textureType = 1, mq && lq.byteArray.fill(1, 0, Aq);
          break;
        case OE.HalfFloat:
          lq.byteArray = new Uint16Array(Aq), lq.textureType = 2, mq && lq.byteArray.fill(15360, 0, Aq);
          break;
        default:
          throw new Error("Unsupported type: " + Yq)
      }
      let uq = 0;
      for (const xq of qq.channels) void 0 !== lq.decodeChannels[xq.name] && (lq.channelLineOffsets[xq.name] = uq * lq.width), uq += 2 * xq.pixelType;
      return lq.bytesPerLine = lq.width * uq, lq.outLineWidth = lq.width * lq.outputChannels, "INCREASING_Y" === qq.lineOrder ? lq.scanOrder = qq => qq : lq.scanOrder = qq => lq.height - 1 - qq, 4 == lq.outputChannels ? (lq.format = 5, lq.linearSpace = !0) : (lq.format = 6, lq.linearSpace = !1), lq
    }

    function cE(qq, Eq, gq, Yq) {
      const lq = {
        value: 0
      };
      for (let Oq = 0; Oq < qq.height / qq.scanlineBlockSize; Oq++) {
        const mq = tq(gq, Yq) - Eq.dataWindow.yMin;
        qq.size = rq(gq, Yq), qq.lines = mq + qq.scanlineBlockSize > qq.height ? qq.height - mq : qq.scanlineBlockSize;
        const xq = qq.size < qq.lines * qq.bytesPerLine && qq.uncompress ? qq.uncompress(qq) : qE(qq);
        Yq.value += qq.size;
        for (let gq = 0; gq < qq.scanlineBlockSize; gq++) {
          const Yq = Oq * qq.scanlineBlockSize,
            mq = gq + qq.scanOrder(Yq);
          if (mq >= qq.height) continue;
          const Aq = gq * qq.bytesPerLine,
            cq = (qq.height - 1 - mq) * qq.outLineWidth;
          for (let gq = 0; gq < qq.channels; gq++) {
            const Yq = Eq.channels[gq].name,
              Oq = qq.channelLineOffsets[Yq],
              mq = qq.decodeChannels[Yq];
            if (void 0 !== mq) {
              lq.value = Aq + Oq;
              for (let Eq = 0; Eq < qq.width; Eq++) {
                const gq = cq + Eq * qq.outputChannels + mq;
                qq.byteArray && (qq.byteArray[gq] = qq.getter(xq, lq))
              }
            }
          }
        }
      }
    }
    xE.DefaultOutputType = OE.HalfFloat, xE.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class uE {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(qq, Eq, gq, Yq, lq) {
        throw ".exr not supported in Cube."
      }
      loadData(qq, Eq, gq) {
        const lq = new DataView(qq.buffer),
          Oq = {
            value: 0
          },
          mq = pq(lq, Oq);
        AE(mq, lq, Oq, xE.DefaultOutputType).then((qq => {
          cE(qq, mq, lq, Oq);
          const Yq = mq.dataWindow.xMax - mq.dataWindow.xMin + 1,
            xq = mq.dataWindow.yMax - mq.dataWindow.yMin + 1;
          gq(Yq, xq, Eq.generateMipMaps, !1, (() => {
            const gq = Eq.Ba();
            Eq.format = mq.format, Eq.type = qq.textureType, Eq.invertY = !1, Eq._gammaSpace = !mq.linearSpace, qq.byteArray && gq._uploadDataToTextureDirectly(Eq, qq.byteArray, 0, 0, void 0, !0)
          }))
        })).catch((qq => {
          Yq.b.Error("Failed to load EXR texture: ", qq)
        }))
      }
    }
    async function BE(qq) {
      const Eq = new DataView(qq),
        gq = {
          value: 0
        },
        lq = pq(Eq, gq);
      try {
        const qq = await AE(lq, Eq, gq, OE.Float);
        return cE(qq, lq, Eq, gq), qq.byteArray ? {
          width: lq.dataWindow.xMax - lq.dataWindow.xMin + 1,
          height: lq.dataWindow.yMax - lq.dataWindow.yMin + 1,
          data: new Float32Array(qq.byteArray)
        } : (Yq.b.Error("Failed to decode EXR data: No byte array available."), {
          width: 0,
          height: 0,
          data: null
        })
      } catch (Oq) {
        Yq.b.Error("Failed to load EXR data: ", Oq)
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
for (const qq in modules) Object.freeze(modules[qq]);