export const id = 290;
export const ids = [290];
export const modules = {
  39797: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      ReadExrDataAsync: () => OB,
      _ExrTextureLoader: () => qn
    });
    var Vc = nc(37191),
      Ic = nc(35785),
      rB = nc(38118);
    const uc = 4,
      sc = 4,
      Mc = 1,
      Pc = 2,
      qB = 8,
      Oc = 65536,
      Tc = Oc >> 3,
      fc = 14,
      mB = 65537,
      ec = 1 << fc,
      tB = ec - 1,
      Sc = 59,
      yB = 63,
      zB = 2 + yB - Sc;
    var pc, hc;

    function aB(cB, Bc) {
      const nc = new Uint8Array(cB);
      let Vc = 0;
      for (; 0 != nc[Bc.value + Vc];) Vc += 1;
      const Ic = (new TextDecoder).decode(nc.slice(Bc.value, Bc.value + Vc));
      return Bc.value = Bc.value + Vc + 1, Ic
    }

    function lc(cB, Bc) {
      const nc = cB.getInt32(Bc.value, !0);
      return Bc.value += uc, nc
    }

    function Yc(cB, Bc) {
      const nc = cB.getUint32(Bc.value, !0);
      return Bc.value += uc, nc
    }

    function Lc(cB, Bc) {
      const nc = cB.getUint8(Bc.value);
      return Bc.value += Mc, nc
    }

    function gB(cB, Bc) {
      const nc = cB.getUint16(Bc.value, !0);
      return Bc.value += Pc, nc
    }

    function Uc(cB, Bc) {
      const nc = cB[Bc.value];
      return Bc.value += Mc, nc
    }

    function bB(cB, Bc) {
      let nc;
      return nc = "getBigInt64" in DataView.prototype ? Number(cB.getBigInt64(Bc.value, !0)) : cB.getUint32(Bc.value + 4, !0) + Number(cB.getUint32(Bc.value, !0) << 32), Bc.value += qB, nc
    }

    function Zc(cB, Bc) {
      const nc = cB.getFloat32(Bc.value, !0);
      return Bc.value += sc, nc
    }

    function Qc(cB, Bc) {
      return (0, rB.c)(gB(cB, Bc))
    }

    function Cc(cB, Bc) {
      return (0, rB.g)((0, Ic.Clamp)(Zc(cB, Bc), -rB.e, rB.e))
    }

    function vB(cB, Bc, nc, Vc) {
      switch (nc) {
        case "string":
        case "stringvector":
        case "iccProfile":
          return function(cB, Bc, nc) {
            const Vc = (new TextDecoder).decode(new Uint8Array(cB).slice(Bc.value, Bc.value + nc));
            return Bc.value = Bc.value + nc, Vc
          }(cB.buffer, Bc, Vc);
        case "chlist":
          return function(cB, Bc, nc) {
            const Vc = Bc.value,
              Ic = [];
            for (; Bc.value < Vc + nc - 1;) {
              const nc = aB(cB.buffer, Bc),
                Vc = lc(cB, Bc),
                rB = Lc(cB, Bc);
              Bc.value += 3;
              const uc = lc(cB, Bc),
                sc = lc(cB, Bc);
              Ic.push({
                name: nc,
                pixelType: Vc,
                pLinear: rB,
                xSampling: uc,
                ySampling: sc
              })
            }
            return Bc.value += 1, Ic
          }(cB, Bc, Vc);
        case "chromaticities":
          return function(cB, Bc) {
            return {
              redX: Zc(cB, Bc),
              redY: Zc(cB, Bc),
              greenX: Zc(cB, Bc),
              greenY: Zc(cB, Bc),
              blueX: Zc(cB, Bc),
              blueY: Zc(cB, Bc),
              whiteX: Zc(cB, Bc),
              whiteY: Zc(cB, Bc)
            }
          }(cB, Bc);
        case "compression":
          return function(cB, Bc) {
            return Lc(cB, Bc)
          }(cB, Bc);
        case "box2i":
          return function(cB, Bc) {
            return {
              xMin: lc(cB, Bc),
              yMin: lc(cB, Bc),
              xMax: lc(cB, Bc),
              yMax: lc(cB, Bc)
            }
          }(cB, Bc);
        case "lineOrder":
          return function(cB, Bc) {
            const nc = Lc(cB, Bc);
            return hc[nc]
          }(cB, Bc);
        case "float":
          return Zc(cB, Bc);
        case "v2f":
          return function(cB, Bc) {
            return [Zc(cB, Bc), Zc(cB, Bc)]
          }(cB, Bc);
        case "v3f":
          return function(cB, Bc) {
            return [Zc(cB, Bc), Zc(cB, Bc), Zc(cB, Bc)]
          }(cB, Bc);
        case "int":
          return lc(cB, Bc);
        case "rational":
          return function(cB, Bc) {
            return [lc(cB, Bc), Yc(cB, Bc)]
          }(cB, Bc);
        case "timecode":
          return function(cB, Bc) {
            return [Yc(cB, Bc), Yc(cB, Bc)]
          }(cB, Bc);
        case "preview":
          return Bc.value += Vc, "skipped";
        default:
          return void(Bc.value += Vc)
      }
    }

    function Dc(cB) {
      for (let Bc = 1; Bc < cB.length; Bc++) {
        const nc = cB[Bc - 1] + cB[Bc] - 128;
        cB[Bc] = nc
      }
    }

    function Nc(cB, Bc) {
      let nc = 0,
        Vc = Math.floor((cB.length + 1) / 2),
        Ic = 0;
      const rB = cB.length - 1;
      for (; !(Ic > rB) && (Bc[Ic++] = cB[nc++], !(Ic > rB));) Bc[Ic++] = cB[Vc++]
    }! function(cB) {
      cB[cB.NO_COMPRESSION = 0] = "NO_COMPRESSION", cB[cB.RLE_COMPRESSION = 1] = "RLE_COMPRESSION", cB[cB.ZIPS_COMPRESSION = 2] = "ZIPS_COMPRESSION", cB[cB.ZIP_COMPRESSION = 3] = "ZIP_COMPRESSION", cB[cB.PIZ_COMPRESSION = 4] = "PIZ_COMPRESSION", cB[cB.PXR24_COMPRESSION = 5] = "PXR24_COMPRESSION"
    }(pc || (pc = {})),
    function(cB) {
      cB[cB.INCREASING_Y = 0] = "INCREASING_Y", cB[cB.DECREASING_Y = 1] = "DECREASING_Y"
    }(hc || (hc = {}));
    const Ec = 20000630;

    function oc(cB, Bc) {
      if (cB.getUint32(0, !0) != Ec) throw new Error("Incorrect OpenEXR format");
      const nc = cB.getUint8(4),
        Ic = cB.getUint8(5),
        rB = {
          singleTile: !!(2 & Ic),
          longName: !!(4 & Ic),
          deepFormat: !!(8 & Ic),
          multiPart: !!(16 & Ic)
        };
      Bc.value = 8;
      const uc = {};
      let sc = !0;
      for (; sc;) {
        const nc = aB(cB.buffer, Bc);
        if (nc) {
          const Ic = aB(cB.buffer, Bc),
            rB = vB(cB, Bc, Ic, Yc(cB, Bc));
          void 0 === rB ? Vc.c.Warn(`Unknown header attribute type ${Ic}'.`) : uc[nc] = rB
        } else sc = !1
      }
      if (0 != (-5 & Ic)) throw new Error("Unsupported file format");
      return {
        version: nc,
        spec: rB,
        ...uc
      }
    }
    const Wc = 32768,
      wc = 65535;

    function kB(cB, Bc, nc, Vc, Ic) {
      for (; nc < cB;) Bc = Bc << 8 | Uc(Vc, Ic), nc += 8;
      return {
        l: Bc >> (nc -= cB) & (1 << cB) - 1,
        c: Bc,
        lc: nc
      }
    }

    function Xc(cB, Bc, nc, Vc) {
      return {
        c: cB = cB << 8 | Uc(nc, Vc),
        lc: Bc += 8
      }
    }

    function Hc(cB, Bc, nc, Vc, Ic, rB, uc, sc, Mc) {
      if (cB == Bc) {
        if (Vc < 8) {
          const cB = Xc(nc, Vc, Ic, rB);
          nc = cB.c, Vc = cB.lc
        }
        let cB = nc >> (Vc -= 8);
        if (cB = new Uint8Array([cB])[0], sc.value + cB > Mc) return null;
        const Bc = uc[sc.value - 1];
        for (; cB-- > 0;) uc[sc.value++] = Bc
      } else {
        if (!(sc.value < Mc)) return null;
        uc[sc.value++] = cB
      }
      return {
        c: nc,
        lc: Vc
      }
    }
    const Fc = new Array(59);

    function Jc(cB, Bc, nc, Vc, Ic, rB) {
      const uc = Bc;
      let sc = 0,
        Mc = 0;
      for (; Vc <= Ic; Vc++) {
        if (uc.value - Bc.value > nc) return;
        let Pc = kB(6, sc, Mc, cB, uc);
        const qB = Pc.l;
        if (sc = Pc.c, Mc = Pc.lc, rB[Vc] = qB, qB == yB) {
          if (uc.value - Bc.value > nc) throw new Error("Error in HufUnpackEncTable");
          Pc = kB(8, sc, Mc, cB, uc);
          let qB = Pc.l + zB;
          if (sc = Pc.c, Mc = Pc.lc, Vc + qB > Ic + 1) throw new Error("Error in HufUnpackEncTable");
          for (; qB--;) rB[Vc++] = 0;
          Vc--
        } else if (qB >= Sc) {
          let cB = qB - Sc + 2;
          if (Vc + cB > Ic + 1) throw new Error("Error in HufUnpackEncTable");
          for (; cB--;) rB[Vc++] = 0;
          Vc--
        }
      }! function(cB) {
        for (let nc = 0; nc <= 58; ++nc) Fc[nc] = 0;
        for (let nc = 0; nc < mB; ++nc) Fc[cB[nc]] += 1;
        let Bc = 0;
        for (let nc = 58; nc > 0; --nc) {
          const cB = Bc + Fc[nc] >> 1;
          Fc[nc] = Bc, Bc = cB
        }
        for (let nc = 0; nc < mB; ++nc) {
          const Bc = cB[nc];
          Bc > 0 && (cB[nc] = Bc | Fc[Bc]++ << 6)
        }
      }(rB)
    }

    function jB(cB) {
      return 63 & cB
    }

    function Rc(cB) {
      return cB >> 6
    }

    function iB(cB, Bc, nc, Vc, Ic, rB) {
      const uc = nc.value,
        sc = Yc(Bc, nc),
        Mc = Yc(Bc, nc);
      nc.value += 4;
      const Pc = Yc(Bc, nc);
      if (nc.value += 4, sc < 0 || sc >= mB || Mc < 0 || Mc >= mB) throw new Error("Wrong HUF_ENCSIZE");
      const qB = new Array(mB),
        Oc = new Array(ec);
      ! function(cB) {
        for (let Bc = 0; Bc < ec; Bc++) cB[Bc] = {}, cB[Bc].len = 0, cB[Bc].lit = 0, cB[Bc].p = null
      }(Oc);
      if (Jc(cB, nc, Vc - (nc.value - uc), sc, Mc, qB), Pc > 8 * (Vc - (nc.value - uc))) throw new Error("Wrong hufUncompress");
      ! function(cB, Bc, nc, Vc) {
        for (; Bc <= nc; Bc++) {
          const nc = Rc(cB[Bc]),
            Ic = jB(cB[Bc]);
          if (nc >> Ic) throw new Error("Invalid table entry");
          if (Ic > fc) {
            const cB = Vc[nc >> Ic - fc];
            if (cB.len) throw new Error("Invalid table entry");
            if (cB.lit++, cB.p) {
              const Bc = cB.p;
              cB.p = new Array(cB.lit);
              for (let nc = 0; nc < cB.lit - 1; ++nc) cB.p[nc] = Bc[nc]
            } else cB.p = new Array(1);
            cB.p[cB.lit - 1] = Bc
          } else if (Ic) {
            let cB = 0;
            for (let rB = 1 << fc - Ic; rB > 0; rB--) {
              const rB = Vc[(nc << fc - Ic) + cB];
              if (rB.len || rB.p) throw new Error("Invalid table entry");
              rB.len = Ic, rB.lit = Bc, cB++
            }
          }
        }
      }(qB, sc, Mc, Oc),
      function(cB, Bc, nc, Vc, Ic, rB, uc, sc, Mc) {
        let Pc = 0,
          qB = 0;
        const Oc = uc,
          Tc = Math.trunc(Vc.value + (Ic + 7) / 8);
        for (; Vc.value < Tc;) {
          let Ic = Xc(Pc, qB, nc, Vc);
          for (Pc = Ic.c, qB = Ic.lc; qB >= fc;) {
            const uc = Bc[Pc >> qB - fc & tB];
            if (uc.len) {
              qB -= uc.len;
              const cB = Hc(uc.lit, rB, Pc, qB, nc, Vc, sc, Mc, Oc);
              cB && (Pc = cB.c, qB = cB.lc)
            } else {
              if (!uc.p) throw new Error("hufDecode issues");
              let Bc;
              for (Bc = 0; Bc < uc.lit; Bc++) {
                const fc = jB(cB[uc.p[Bc]]);
                for (; qB < fc && Vc.value < Tc;) Ic = Xc(Pc, qB, nc, Vc), Pc = Ic.c, qB = Ic.lc;
                if (qB >= fc && Rc(cB[uc.p[Bc]]) == (Pc >> qB - fc & (1 << fc) - 1)) {
                  qB -= fc;
                  const cB = Hc(uc.p[Bc], rB, Pc, qB, nc, Vc, sc, Mc, Oc);
                  cB && (Pc = cB.c, qB = cB.lc);
                  break
                }
              }
              if (Bc == uc.lit) throw new Error("HufDecode issues")
            }
          }
        }
        const mB = 8 - Ic & 7;
        for (Pc >>= mB, qB -= mB; qB > 0;) {
          const cB = Bc[Pc << fc - qB & tB];
          if (!cB.len) throw new Error("HufDecode issues");
          {
            qB -= cB.len;
            const Bc = Hc(cB.lit, rB, Pc, qB, nc, Vc, sc, Mc, Oc);
            Bc && (Pc = Bc.c, qB = Bc.lc)
          }
        }
      }(qB, Oc, cB, nc, Pc, Mc, rB, Ic, {
        value: 0
      })
    }

    function Kc(cB) {
      return 65535 & cB
    }

    function xB(cB) {
      const Bc = Kc(cB);
      return Bc > 32767 ? Bc - 65536 : Bc
    }

    function dc(cB, Bc) {
      const nc = xB(cB),
        Vc = xB(Bc),
        Ic = nc + (1 & Vc) + (Vc >> 1);
      return {
        a: Ic,
        b: Ic - Vc
      }
    }

    function Ac(cB, Bc) {
      const nc = Kc(cB),
        Vc = Kc(Bc),
        Ic = nc - (Vc >> 1) & wc;
      return {
        a: Vc + Ic - Wc & wc,
        b: Ic
      }
    }

    function Gc(cB, Bc, nc, Vc, Ic, rB, uc) {
      const sc = uc < 16384,
        Mc = nc > Ic ? Ic : nc;
      let Pc, qB, Oc = 1;
      for (; Oc <= Mc;) Oc <<= 1;
      for (Oc >>= 1, Pc = Oc, Oc >>= 1; Oc >= 1;) {
        qB = 0;
        const uc = qB + rB * (Ic - Pc),
          Mc = rB * Oc,
          Tc = rB * Pc,
          fc = Vc * Oc,
          mB = Vc * Pc;
        let ec, tB, Sc, yB;
        for (; qB <= uc; qB += Tc) {
          let Ic = qB;
          const rB = qB + Vc * (nc - Pc);
          for (; Ic <= rB; Ic += mB) {
            const nc = Ic + fc,
              Vc = Ic + Mc,
              rB = Vc + fc;
            if (sc) {
              let uc = dc(cB[Ic + Bc], cB[Vc + Bc]);
              ec = uc.a, Sc = uc.b, uc = dc(cB[nc + Bc], cB[rB + Bc]), tB = uc.a, yB = uc.b, uc = dc(ec, tB), cB[Ic + Bc] = uc.a, cB[nc + Bc] = uc.b, uc = dc(Sc, yB), cB[Vc + Bc] = uc.a, cB[rB + Bc] = uc.b
            } else {
              let uc = Ac(cB[Ic + Bc], cB[Vc + Bc]);
              ec = uc.a, Sc = uc.b, uc = Ac(cB[nc + Bc], cB[rB + Bc]), tB = uc.a, yB = uc.b, uc = Ac(ec, tB), cB[Ic + Bc] = uc.a, cB[nc + Bc] = uc.b, uc = Ac(Sc, yB), cB[Vc + Bc] = uc.a, cB[rB + Bc] = uc.b
            }
          }
          if (nc & Oc) {
            const nc = Ic + Mc;
            let Vc;
            Vc = sc ? dc(cB[Ic + Bc], cB[nc + Bc]) : Ac(cB[Ic + Bc], cB[nc + Bc]), ec = Vc.a, cB[nc + Bc] = Vc.b, cB[Ic + Bc] = ec
          }
        }
        if (Ic & Oc) {
          let Ic = qB;
          const rB = qB + Vc * (nc - Pc);
          for (; Ic <= rB; Ic += mB) {
            const nc = Ic + fc;
            let Vc;
            Vc = sc ? dc(cB[Ic + Bc], cB[nc + Bc]) : Ac(cB[Ic + Bc], cB[nc + Bc]), ec = Vc.a, cB[nc + Bc] = Vc.b, cB[Ic + Bc] = ec
          }
        }
        Pc = Oc, Oc >>= 1
      }
      return qB
    }

    function cn(cB) {
      return new DataView(cB.array.buffer, cB.offset.value, cB.size)
    }

    function BB(cB) {
      const Bc = cB.viewer.buffer.slice(cB.offset.value, cB.offset.value + cB.size),
        nc = new Uint8Array(function(cB) {
          let Bc = cB.byteLength;
          const nc = [];
          let Vc = 0;
          const Ic = new DataView(cB);
          for (; Bc > 0;) {
            const cB = Ic.getInt8(Vc++);
            if (cB < 0) {
              const rB = -cB;
              Bc -= rB + 1;
              for (let cB = 0; cB < rB; cB++) nc.push(Ic.getUint8(Vc++))
            } else {
              const rB = cB;
              Bc -= 2;
              const uc = Ic.getUint8(Vc++);
              for (let cB = 0; cB < rB + 1; cB++) nc.push(uc)
            }
          }
          return nc
        }(Bc)),
        Vc = new Uint8Array(nc.length);
      return Dc(nc), Nc(nc, Vc), new DataView(Vc.buffer)
    }

    function nB(cB) {
      const Bc = cB.array.slice(cB.offset.value, cB.offset.value + cB.size),
        nc = fflate.unzlibSync(Bc),
        Vc = new Uint8Array(nc.length);
      return Dc(nc), Nc(nc, Vc), new DataView(Vc.buffer)
    }

    function VB(cB) {
      const Bc = cB.array.slice(cB.offset.value, cB.offset.value + cB.size),
        nc = fflate.unzlibSync(Bc),
        Vc = cB.lines * cB.channels * cB.width,
        Ic = 1 == cB.type ? new Uint16Array(Vc) : new Uint32Array(Vc);
      let rB = 0,
        uc = 0;
      const sc = new Array(4);
      for (let Mc = 0; Mc < cB.lines; Mc++)
        for (let Bc = 0; Bc < cB.channels; Bc++) {
          let Bc = 0;
          switch (cB.type) {
            case 1:
              sc[0] = rB, sc[1] = sc[0] + cB.width, rB = sc[1] + cB.width;
              for (let Vc = 0; Vc < cB.width; ++Vc) {
                Bc += nc[sc[0]++] << 8 | nc[sc[1]++], Ic[uc] = Bc, uc++
              }
              break;
            case 2:
              sc[0] = rB, sc[1] = sc[0] + cB.width, sc[2] = sc[1] + cB.width, rB = sc[2] + cB.width;
              for (let Vc = 0; Vc < cB.width; ++Vc) {
                Bc += nc[sc[0]++] << 24 | nc[sc[1]++] << 16 | nc[sc[2]++] << 8, Ic[uc] = Bc, uc++
              }
          }
        }
      return new DataView(Ic.buffer)
    }

    function IB(cB) {
      const Bc = cB.viewer,
        nc = {
          value: cB.offset.value
        },
        Vc = new Uint16Array(cB.width * cB.scanlineBlockSize * (cB.channels * cB.type)),
        Ic = new Uint8Array(Tc);
      let rB = 0;
      const uc = new Array(cB.channels);
      for (let Pc = 0; Pc < cB.channels; Pc++) uc[Pc] = {}, uc[Pc].start = rB, uc[Pc].end = uc[Pc].start, uc[Pc].nx = cB.width, uc[Pc].ny = cB.lines, uc[Pc].size = cB.type, rB += uc[Pc].nx * uc[Pc].ny * uc[Pc].size;
      const sc = gB(Bc, nc),
        Mc = gB(Bc, nc);
      if (Mc >= Tc) throw new Error("Wrong PIZ_COMPRESSION BITMAP_SIZE");
      if (sc <= Mc)
        for (let Pc = 0; Pc < Mc - sc + 1; Pc++) Ic[Pc + sc] = Lc(Bc, nc);
      const qB = new Uint16Array(Oc),
        fc = function(cB, Bc) {
          let nc = 0;
          for (let Ic = 0; Ic < Oc; ++Ic)(0 == Ic || cB[Ic >> 3] & 1 << (7 & Ic)) && (Bc[nc++] = Ic);
          const Vc = nc - 1;
          for (; nc < Oc;) Bc[nc++] = 0;
          return Vc
        }(Ic, qB),
        mB = Yc(Bc, nc);
      iB(cB.array, Bc, nc, mB, Vc, rB);
      for (let Pc = 0; Pc < cB.channels; ++Pc) {
        const cB = uc[Pc];
        for (let Bc = 0; Bc < uc[Pc].size; ++Bc) Gc(Vc, cB.start + Bc, cB.nx, cB.size, cB.ny, cB.nx * cB.size, fc)
      }! function(cB, Bc, nc) {
        for (let Vc = 0; Vc < nc; ++Vc) Bc[Vc] = cB[Bc[Vc]]
      }(qB, Vc, rB);
      let ec = 0;
      const tB = new Uint8Array(Vc.buffer.byteLength);
      for (let Oc = 0; Oc < cB.lines; Oc++)
        for (let Bc = 0; Bc < cB.channels; Bc++) {
          const cB = uc[Bc],
            nc = cB.nx * cB.size,
            Ic = new Uint8Array(Vc.buffer, cB.end * Pc, nc * Pc);
          tB.set(Ic, ec), ec += nc * Pc, cB.end += nc
        }
      return new DataView(tB.buffer)
    }
    var rn, uB = nc(38146);
    ! function(cB) {
      cB[cB.Float = 0] = "Float", cB[cB.HalfFloat = 1] = "HalfFloat"
    }(rn || (rn = {}));
    class sB {}
    async function MB(cB, Bc, nc, Vc) {
      const Ic = {
        size: 0,
        viewer: Bc,
        array: new Uint8Array(Bc.buffer),
        offset: nc,
        width: cB.dataWindow.xMax - cB.dataWindow.xMin + 1,
        height: cB.dataWindow.yMax - cB.dataWindow.yMin + 1,
        channels: cB.channels.length,
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
      switch (cB.compression) {
        case pc.NO_COMPRESSION:
          Ic.lines = 1, Ic.uncompress = cn;
          break;
        case pc.RLE_COMPRESSION:
          Ic.lines = 1, Ic.uncompress = BB;
          break;
        case pc.ZIPS_COMPRESSION:
          Ic.lines = 1, Ic.uncompress = nB, await uB.g.LoadScriptAsync(sB.FFLATEUrl);
          break;
        case pc.ZIP_COMPRESSION:
          Ic.lines = 16, Ic.uncompress = nB, await uB.g.LoadScriptAsync(sB.FFLATEUrl);
          break;
        case pc.PIZ_COMPRESSION:
          Ic.lines = 32, Ic.uncompress = IB;
          break;
        case pc.PXR24_COMPRESSION:
          Ic.lines = 16, Ic.uncompress = VB, await uB.g.LoadScriptAsync(sB.FFLATEUrl);
          break;
        default:
          throw new Error(pc[cB.compression] + " is unsupported")
      }
      Ic.scanlineBlockSize = Ic.lines;
      const rB = {};
      for (const sc of cB.channels) switch (sc.name) {
        case "R":
        case "G":
        case "B":
        case "A":
        case "Y":
          rB[sc.name] = !0, Ic.type = sc.pixelType
      }
      let uc = !1;
      if (rB.R && rB.G && rB.B && rB.A) Ic.outputChannels = 4, Ic.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (rB.R && rB.G && rB.B) uc = !0, Ic.outputChannels = 4, Ic.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (rB.R && rB.G) Ic.outputChannels = 2, Ic.decodeChannels = {
        R: 0,
        G: 1
      };
      else if (rB.R) Ic.outputChannels = 1, Ic.decodeChannels = {
        R: 0
      };
      else {
        if (!rB.Y) throw new Error("EXRLoader.parse: file contains unsupported data channels.");
        Ic.outputChannels = 1, Ic.decodeChannels = {
          Y: 0
        }
      }
      if (1 === Ic.type) switch (Vc) {
        case rn.Float:
          Ic.getter = Qc, Ic.inputSize = Pc;
          break;
        case rn.HalfFloat:
          Ic.getter = gB, Ic.inputSize = Pc
      } else {
        if (2 !== Ic.type) throw new Error("Unsupported pixelType " + Ic.type + " for " + cB.compression);
        switch (Vc) {
          case rn.Float:
            Ic.getter = Zc, Ic.inputSize = sc;
            break;
          case rn.HalfFloat:
            Ic.getter = Cc, Ic.inputSize = sc
        }
      }
      Ic.blockCount = Ic.height / Ic.scanlineBlockSize;
      for (let sc = 0; sc < Ic.blockCount; sc++) bB(Bc, nc);
      const Mc = Ic.width * Ic.height * Ic.outputChannels;
      switch (Vc) {
        case rn.Float:
          Ic.byteArray = new Float32Array(Mc), Ic.textureType = 1, uc && Ic.byteArray.fill(1, 0, Mc);
          break;
        case rn.HalfFloat:
          Ic.byteArray = new Uint16Array(Mc), Ic.textureType = 2, uc && Ic.byteArray.fill(15360, 0, Mc);
          break;
        default:
          throw new Error("Unsupported type: " + Vc)
      }
      let qB = 0;
      for (const sc of cB.channels) void 0 !== Ic.decodeChannels[sc.name] && (Ic.channelLineOffsets[sc.name] = qB * Ic.width), qB += 2 * sc.pixelType;
      return Ic.bytesPerLine = Ic.width * qB, Ic.outLineWidth = Ic.width * Ic.outputChannels, "INCREASING_Y" === cB.lineOrder ? Ic.scanOrder = cB => cB : Ic.scanOrder = cB => Ic.height - 1 - cB, 4 == Ic.outputChannels ? (Ic.format = 5, Ic.linearSpace = !0) : (Ic.format = 6, Ic.linearSpace = !1), Ic
    }

    function PB(cB, Bc, nc, Vc) {
      const Ic = {
        value: 0
      };
      for (let rB = 0; rB < cB.height / cB.scanlineBlockSize; rB++) {
        const uc = lc(nc, Vc) - Bc.dataWindow.yMin;
        cB.size = Yc(nc, Vc), cB.lines = uc + cB.scanlineBlockSize > cB.height ? cB.height - uc : cB.scanlineBlockSize;
        const sc = cB.size < cB.lines * cB.bytesPerLine && cB.uncompress ? cB.uncompress(cB) : cn(cB);
        Vc.value += cB.size;
        for (let nc = 0; nc < cB.scanlineBlockSize; nc++) {
          const Vc = rB * cB.scanlineBlockSize,
            uc = nc + cB.scanOrder(Vc);
          if (uc >= cB.height) continue;
          const Mc = nc * cB.bytesPerLine,
            Pc = (cB.height - 1 - uc) * cB.outLineWidth;
          for (let nc = 0; nc < cB.channels; nc++) {
            const Vc = Bc.channels[nc].name,
              rB = cB.channelLineOffsets[Vc],
              uc = cB.decodeChannels[Vc];
            if (void 0 !== uc) {
              Ic.value = Mc + rB;
              for (let Bc = 0; Bc < cB.width; Bc++) {
                const nc = Pc + Bc * cB.outputChannels + uc;
                cB.byteArray && (cB.byteArray[nc] = cB.getter(sc, Ic))
              }
            }
          }
        }
      }
    }
    sB.DefaultOutputType = rn.HalfFloat, sB.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class qn {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(cB, Bc, nc, Vc, Ic) {
        throw ".exr not supported in Cube."
      }
      loadData(cB, Bc, nc) {
        const Ic = new DataView(cB.buffer),
          rB = {
            value: 0
          },
          uc = oc(Ic, rB);
        MB(uc, Ic, rB, sB.DefaultOutputType).then((cB => {
          PB(cB, uc, Ic, rB);
          const Vc = uc.dataWindow.xMax - uc.dataWindow.xMin + 1,
            sc = uc.dataWindow.yMax - uc.dataWindow.yMin + 1;
          nc(Vc, sc, Bc.generateMipMaps, !1, (() => {
            const nc = Bc.RV();
            Bc.format = uc.format, Bc.type = cB.textureType, Bc.invertY = !1, Bc._gammaSpace = !uc.linearSpace, cB.byteArray && nc._uploadDataToTextureDirectly(Bc, cB.byteArray, 0, 0, void 0, !0)
          }))
        })).catch((cB => {
          Vc.c.Error("Failed to load EXR texture: ", cB)
        }))
      }
    }
    async function OB(cB) {
      const Bc = new DataView(cB),
        nc = {
          value: 0
        },
        Ic = oc(Bc, nc);
      try {
        const cB = await MB(Ic, Bc, nc, rn.Float);
        return PB(cB, Ic, Bc, nc), cB.byteArray ? {
          width: Ic.dataWindow.xMax - Ic.dataWindow.xMin + 1,
          height: Ic.dataWindow.yMax - Ic.dataWindow.yMin + 1,
          data: new Float32Array(cB.byteArray)
        } : (Vc.c.Error("Failed to decode EXR data: No byte array available."), {
          width: 0,
          height: 0,
          data: null
        })
      } catch (rB) {
        Vc.c.Error("Failed to load EXR data: ", rB)
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
for (const cB in modules) Object.freeze(modules[cB]);