export const id = 320;
export const ids = [320];
export const modules = {
  42134: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      ReadExrDataAsync: () => Wi,
      _ExrTextureLoader: () => Pi
    });
    var Op = cp(38905),
      op = cp(37356),
      Ip = cp(40276);
    const Sp = 4,
      xp = 4,
      Lp = 1,
      Yp = 2,
      Dp = 8,
      Ap = 65536,
      Pp = Ap >> 3,
      Wp = 14,
      yp = 65537,
      Up = 1 << Wp,
      wp = Up - 1,
      vp = 59,
      tp = 63,
      Hp = 2 + tp - vp;
    var dp, ep;

    function jp(pp, ip) {
      const cp = new Uint8Array(pp);
      let Op = 0;
      for (; 0 != cp[ip.value + Op];) Op += 1;
      const op = (new TextDecoder).decode(cp.slice(ip.value, ip.value + Op));
      return ip.value = ip.value + Op + 1, op
    }

    function kp(pp, ip) {
      const cp = pp.getInt32(ip.value, !0);
      return ip.value += Sp, cp
    }

    function mp(pp, ip) {
      const cp = pp.getUint32(ip.value, !0);
      return ip.value += Sp, cp
    }

    function Rp(pp, ip) {
      const cp = pp.getUint8(ip.value);
      return ip.value += Lp, cp
    }

    function qp(pp, ip) {
      const cp = pp.getUint16(ip.value, !0);
      return ip.value += Yp, cp
    }

    function Mp(pp, ip) {
      const cp = pp[ip.value];
      return ip.value += Lp, cp
    }

    function Cp(pp, ip) {
      let cp;
      return cp = "getBigInt64" in DataView.prototype ? Number(pp.getBigInt64(ip.value, !0)) : pp.getUint32(ip.value + 4, !0) + Number(pp.getUint32(ip.value, !0) << 32), ip.value += Dp, cp
    }

    function Ep(pp, ip) {
      const cp = pp.getFloat32(ip.value, !0);
      return ip.value += xp, cp
    }

    function Xp(pp, ip) {
      return (0, Ip.c)(qp(pp, ip))
    }

    function lp(pp, ip) {
      return (0, Ip.h)((0, op.Clamp)(Ep(pp, ip), -Ip.f, Ip.f))
    }

    function Qp(pp, ip, cp, Op) {
      switch (cp) {
        case "string":
        case "stringvector":
        case "iccProfile":
          return function(pp, ip, cp) {
            const Op = (new TextDecoder).decode(new Uint8Array(pp).slice(ip.value, ip.value + cp));
            return ip.value = ip.value + cp, Op
          }(pp.buffer, ip, Op);
        case "chlist":
          return function(pp, ip, cp) {
            const Op = ip.value,
              op = [];
            for (; ip.value < Op + cp - 1;) {
              const cp = jp(pp.buffer, ip),
                Op = kp(pp, ip),
                Ip = Rp(pp, ip);
              ip.value += 3;
              const Sp = kp(pp, ip),
                xp = kp(pp, ip);
              op.push({
                name: cp,
                pixelType: Op,
                pLinear: Ip,
                xSampling: Sp,
                ySampling: xp
              })
            }
            return ip.value += 1, op
          }(pp, ip, Op);
        case "chromaticities":
          return function(pp, ip) {
            return {
              redX: Ep(pp, ip),
              redY: Ep(pp, ip),
              greenX: Ep(pp, ip),
              greenY: Ep(pp, ip),
              blueX: Ep(pp, ip),
              blueY: Ep(pp, ip),
              whiteX: Ep(pp, ip),
              whiteY: Ep(pp, ip)
            }
          }(pp, ip);
        case "compression":
          return function(pp, ip) {
            return Rp(pp, ip)
          }(pp, ip);
        case "box2i":
          return function(pp, ip) {
            return {
              xMin: kp(pp, ip),
              yMin: kp(pp, ip),
              xMax: kp(pp, ip),
              yMax: kp(pp, ip)
            }
          }(pp, ip);
        case "lineOrder":
          return function(pp, ip) {
            const cp = Rp(pp, ip);
            return ep[cp]
          }(pp, ip);
        case "float":
          return Ep(pp, ip);
        case "v2f":
          return function(pp, ip) {
            return [Ep(pp, ip), Ep(pp, ip)]
          }(pp, ip);
        case "v3f":
          return function(pp, ip) {
            return [Ep(pp, ip), Ep(pp, ip), Ep(pp, ip)]
          }(pp, ip);
        case "int":
          return kp(pp, ip);
        case "rational":
          return function(pp, ip) {
            return [kp(pp, ip), mp(pp, ip)]
          }(pp, ip);
        case "timecode":
          return function(pp, ip) {
            return [mp(pp, ip), mp(pp, ip)]
          }(pp, ip);
        case "preview":
          return ip.value += Op, "skipped";
        default:
          return void(ip.value += Op)
      }
    }

    function Jp(pp) {
      for (let ip = 1; ip < pp.length; ip++) {
        const cp = pp[ip - 1] + pp[ip] - 128;
        pp[ip] = cp
      }
    }

    function Bp(pp, ip) {
      let cp = 0,
        Op = Math.floor((pp.length + 1) / 2),
        op = 0;
      const Ip = pp.length - 1;
      for (; !(op > Ip) && (ip[op++] = pp[cp++], !(op > Ip));) ip[op++] = pp[Op++]
    }! function(pp) {
      pp[pp.NO_COMPRESSION = 0] = "NO_COMPRESSION", pp[pp.RLE_COMPRESSION = 1] = "RLE_COMPRESSION", pp[pp.ZIPS_COMPRESSION = 2] = "ZIPS_COMPRESSION", pp[pp.ZIP_COMPRESSION = 3] = "ZIP_COMPRESSION", pp[pp.PIZ_COMPRESSION = 4] = "PIZ_COMPRESSION", pp[pp.PXR24_COMPRESSION = 5] = "PXR24_COMPRESSION"
    }(dp || (dp = {})),
    function(pp) {
      pp[pp.INCREASING_Y = 0] = "INCREASING_Y", pp[pp.DECREASING_Y = 1] = "DECREASING_Y"
    }(ep || (ep = {}));
    const Np = 20000630;

    function Tp(pp, ip) {
      if (pp.getUint32(0, !0) != Np) throw new Error("Incorrect OpenEXR format");
      const cp = pp.getUint8(4),
        op = pp.getUint8(5),
        Ip = {
          singleTile: !!(2 & op),
          longName: !!(4 & op),
          deepFormat: !!(8 & op),
          multiPart: !!(16 & op)
        };
      ip.value = 8;
      const Sp = {};
      let xp = !0;
      for (; xp;) {
        const cp = jp(pp.buffer, ip);
        if (cp) {
          const op = jp(pp.buffer, ip),
            Ip = Qp(pp, ip, op, mp(pp, ip));
          void 0 === Ip ? Op.e.Warn(`Unknown header attribute type ${op}'.`) : Sp[cp] = Ip
        } else xp = !1
      }
      if (0 != (-5 & op)) throw new Error("Unsupported file format");
      return {
        version: cp,
        spec: Ip,
        ...Sp
      }
    }
    const fp = 32768,
      bp = 65535;

    function hp(pp, ip, cp, Op, op) {
      for (; cp < pp;) ip = ip << 8 | Mp(Op, op), cp += 8;
      return {
        l: ip >> (cp -= pp) & (1 << pp) - 1,
        c: ip,
        lc: cp
      }
    }

    function ap(pp, ip, cp, Op) {
      return {
        c: pp = pp << 8 | Mp(cp, Op),
        lc: ip += 8
      }
    }

    function np(pp, ip, cp, Op, op, Ip, Sp, xp, Lp) {
      if (pp == ip) {
        if (Op < 8) {
          const pp = ap(cp, Op, op, Ip);
          cp = pp.c, Op = pp.lc
        }
        let pp = cp >> (Op -= 8);
        if (pp = new Uint8Array([pp])[0], xp.value + pp > Lp) return null;
        const ip = Sp[xp.value - 1];
        for (; pp-- > 0;) Sp[xp.value++] = ip
      } else {
        if (!(xp.value < Lp)) return null;
        Sp[xp.value++] = pp
      }
      return {
        c: cp,
        lc: Op
      }
    }
    const Fp = new Array(59);

    function gp(pp, ip, cp, Op, op, Ip) {
      const Sp = ip;
      let xp = 0,
        Lp = 0;
      for (; Op <= op; Op++) {
        if (Sp.value - ip.value > cp) return;
        let Yp = hp(6, xp, Lp, pp, Sp);
        const Dp = Yp.l;
        if (xp = Yp.c, Lp = Yp.lc, Ip[Op] = Dp, Dp == tp) {
          if (Sp.value - ip.value > cp) throw new Error("Error in HufUnpackEncTable");
          Yp = hp(8, xp, Lp, pp, Sp);
          let Dp = Yp.l + Hp;
          if (xp = Yp.c, Lp = Yp.lc, Op + Dp > op + 1) throw new Error("Error in HufUnpackEncTable");
          for (; Dp--;) Ip[Op++] = 0;
          Op--
        } else if (Dp >= vp) {
          let pp = Dp - vp + 2;
          if (Op + pp > op + 1) throw new Error("Error in HufUnpackEncTable");
          for (; pp--;) Ip[Op++] = 0;
          Op--
        }
      }! function(pp) {
        for (let cp = 0; cp <= 58; ++cp) Fp[cp] = 0;
        for (let cp = 0; cp < yp; ++cp) Fp[pp[cp]] += 1;
        let ip = 0;
        for (let cp = 58; cp > 0; --cp) {
          const pp = ip + Fp[cp] >> 1;
          Fp[cp] = ip, ip = pp
        }
        for (let cp = 0; cp < yp; ++cp) {
          const ip = pp[cp];
          ip > 0 && (pp[cp] = ip | Fp[ip]++ << 6)
        }
      }(Ip)
    }

    function Gp(pp) {
      return 63 & pp
    }

    function rp(pp) {
      return pp >> 6
    }

    function Zp(pp, ip, cp, Op, op, Ip) {
      const Sp = cp.value,
        xp = mp(ip, cp),
        Lp = mp(ip, cp);
      cp.value += 4;
      const Yp = mp(ip, cp);
      if (cp.value += 4, xp < 0 || xp >= yp || Lp < 0 || Lp >= yp) throw new Error("Wrong HUF_ENCSIZE");
      const Dp = new Array(yp),
        Ap = new Array(Up);
      ! function(pp) {
        for (let ip = 0; ip < Up; ip++) pp[ip] = {}, pp[ip].len = 0, pp[ip].lit = 0, pp[ip].p = null
      }(Ap);
      if (gp(pp, cp, Op - (cp.value - Sp), xp, Lp, Dp), Yp > 8 * (Op - (cp.value - Sp))) throw new Error("Wrong hufUncompress");
      ! function(pp, ip, cp, Op) {
        for (; ip <= cp; ip++) {
          const cp = rp(pp[ip]),
            op = Gp(pp[ip]);
          if (cp >> op) throw new Error("Invalid table entry");
          if (op > Wp) {
            const pp = Op[cp >> op - Wp];
            if (pp.len) throw new Error("Invalid table entry");
            if (pp.lit++, pp.p) {
              const ip = pp.p;
              pp.p = new Array(pp.lit);
              for (let cp = 0; cp < pp.lit - 1; ++cp) pp.p[cp] = ip[cp]
            } else pp.p = new Array(1);
            pp.p[pp.lit - 1] = ip
          } else if (op) {
            let pp = 0;
            for (let Ip = 1 << Wp - op; Ip > 0; Ip--) {
              const Ip = Op[(cp << Wp - op) + pp];
              if (Ip.len || Ip.p) throw new Error("Invalid table entry");
              Ip.len = op, Ip.lit = ip, pp++
            }
          }
        }
      }(Dp, xp, Lp, Ap),
      function(pp, ip, cp, Op, op, Ip, Sp, xp, Lp) {
        let Yp = 0,
          Dp = 0;
        const Ap = Sp,
          Pp = Math.trunc(Op.value + (op + 7) / 8);
        for (; Op.value < Pp;) {
          let op = ap(Yp, Dp, cp, Op);
          for (Yp = op.c, Dp = op.lc; Dp >= Wp;) {
            const Sp = ip[Yp >> Dp - Wp & wp];
            if (Sp.len) {
              Dp -= Sp.len;
              const pp = np(Sp.lit, Ip, Yp, Dp, cp, Op, xp, Lp, Ap);
              pp && (Yp = pp.c, Dp = pp.lc)
            } else {
              if (!Sp.p) throw new Error("hufDecode issues");
              let ip;
              for (ip = 0; ip < Sp.lit; ip++) {
                const Wp = Gp(pp[Sp.p[ip]]);
                for (; Dp < Wp && Op.value < Pp;) op = ap(Yp, Dp, cp, Op), Yp = op.c, Dp = op.lc;
                if (Dp >= Wp && rp(pp[Sp.p[ip]]) == (Yp >> Dp - Wp & (1 << Wp) - 1)) {
                  Dp -= Wp;
                  const pp = np(Sp.p[ip], Ip, Yp, Dp, cp, Op, xp, Lp, Ap);
                  pp && (Yp = pp.c, Dp = pp.lc);
                  break
                }
              }
              if (ip == Sp.lit) throw new Error("HufDecode issues")
            }
          }
        }
        const yp = 8 - op & 7;
        for (Yp >>= yp, Dp -= yp; Dp > 0;) {
          const pp = ip[Yp << Wp - Dp & wp];
          if (!pp.len) throw new Error("HufDecode issues");
          {
            Dp -= pp.len;
            const ip = np(pp.lit, Ip, Yp, Dp, cp, Op, xp, Lp, Ap);
            ip && (Yp = ip.c, Dp = ip.lc)
          }
        }
      }(Dp, Ap, pp, cp, Yp, Lp, Ip, op, {
        value: 0
      })
    }

    function zp(pp) {
      return 65535 & pp
    }

    function sp(pp) {
      const ip = zp(pp);
      return ip > 32767 ? ip - 65536 : ip
    }

    function Kp(pp, ip) {
      const cp = sp(pp),
        Op = sp(ip),
        op = cp + (1 & Op) + (Op >> 1);
      return {
        a: op,
        b: op - Op
      }
    }

    function Vp(pp, ip) {
      const cp = zp(pp),
        Op = zp(ip),
        op = cp - (Op >> 1) & bp;
      return {
        a: Op + op - fp & bp,
        b: op
      }
    }

    function ii(pp, ip, cp, Op, op, Ip, Sp) {
      const xp = Sp < 16384,
        Lp = cp > op ? op : cp;
      let Yp, Dp, Ap = 1;
      for (; Ap <= Lp;) Ap <<= 1;
      for (Ap >>= 1, Yp = Ap, Ap >>= 1; Ap >= 1;) {
        Dp = 0;
        const Sp = Dp + Ip * (op - Yp),
          Lp = Ip * Ap,
          Pp = Ip * Yp,
          Wp = Op * Ap,
          yp = Op * Yp;
        let Up, wp, vp, tp;
        for (; Dp <= Sp; Dp += Pp) {
          let op = Dp;
          const Ip = Dp + Op * (cp - Yp);
          for (; op <= Ip; op += yp) {
            const cp = op + Wp,
              Op = op + Lp,
              Ip = Op + Wp;
            if (xp) {
              let Sp = Kp(pp[op + ip], pp[Op + ip]);
              Up = Sp.a, vp = Sp.b, Sp = Kp(pp[cp + ip], pp[Ip + ip]), wp = Sp.a, tp = Sp.b, Sp = Kp(Up, wp), pp[op + ip] = Sp.a, pp[cp + ip] = Sp.b, Sp = Kp(vp, tp), pp[Op + ip] = Sp.a, pp[Ip + ip] = Sp.b
            } else {
              let Sp = Vp(pp[op + ip], pp[Op + ip]);
              Up = Sp.a, vp = Sp.b, Sp = Vp(pp[cp + ip], pp[Ip + ip]), wp = Sp.a, tp = Sp.b, Sp = Vp(Up, wp), pp[op + ip] = Sp.a, pp[cp + ip] = Sp.b, Sp = Vp(vp, tp), pp[Op + ip] = Sp.a, pp[Ip + ip] = Sp.b
            }
          }
          if (cp & Ap) {
            const cp = op + Lp;
            let Op;
            Op = xp ? Kp(pp[op + ip], pp[cp + ip]) : Vp(pp[op + ip], pp[cp + ip]), Up = Op.a, pp[cp + ip] = Op.b, pp[op + ip] = Up
          }
        }
        if (op & Ap) {
          let op = Dp;
          const Ip = Dp + Op * (cp - Yp);
          for (; op <= Ip; op += yp) {
            const cp = op + Wp;
            let Op;
            Op = xp ? Kp(pp[op + ip], pp[cp + ip]) : Vp(pp[op + ip], pp[cp + ip]), Up = Op.a, pp[cp + ip] = Op.b, pp[op + ip] = Up
          }
        }
        Yp = Ap, Ap >>= 1
      }
      return Dp
    }

    function ci(pp) {
      return new DataView(pp.array.buffer, pp.offset.value, pp.size)
    }

    function Oi(pp) {
      const ip = pp.viewer.buffer.slice(pp.offset.value, pp.offset.value + pp.size),
        cp = new Uint8Array(function(pp) {
          let ip = pp.byteLength;
          const cp = [];
          let Op = 0;
          const op = new DataView(pp);
          for (; ip > 0;) {
            const pp = op.getInt8(Op++);
            if (pp < 0) {
              const Ip = -pp;
              ip -= Ip + 1;
              for (let pp = 0; pp < Ip; pp++) cp.push(op.getUint8(Op++))
            } else {
              const Ip = pp;
              ip -= 2;
              const Sp = op.getUint8(Op++);
              for (let pp = 0; pp < Ip + 1; pp++) cp.push(Sp)
            }
          }
          return cp
        }(ip)),
        Op = new Uint8Array(cp.length);
      return Jp(cp), Bp(cp, Op), new DataView(Op.buffer)
    }

    function oi(pp) {
      const ip = pp.array.slice(pp.offset.value, pp.offset.value + pp.size),
        cp = fflate.unzlibSync(ip),
        Op = new Uint8Array(cp.length);
      return Jp(cp), Bp(cp, Op), new DataView(Op.buffer)
    }

    function Ii(pp) {
      const ip = pp.array.slice(pp.offset.value, pp.offset.value + pp.size),
        cp = fflate.unzlibSync(ip),
        Op = pp.lines * pp.channels * pp.width,
        op = 1 == pp.type ? new Uint16Array(Op) : new Uint32Array(Op);
      let Ip = 0,
        Sp = 0;
      const xp = new Array(4);
      for (let Lp = 0; Lp < pp.lines; Lp++)
        for (let ip = 0; ip < pp.channels; ip++) {
          let ip = 0;
          switch (pp.type) {
            case 1:
              xp[0] = Ip, xp[1] = xp[0] + pp.width, Ip = xp[1] + pp.width;
              for (let Op = 0; Op < pp.width; ++Op) {
                ip += cp[xp[0]++] << 8 | cp[xp[1]++], op[Sp] = ip, Sp++
              }
              break;
            case 2:
              xp[0] = Ip, xp[1] = xp[0] + pp.width, xp[2] = xp[1] + pp.width, Ip = xp[2] + pp.width;
              for (let Op = 0; Op < pp.width; ++Op) {
                ip += cp[xp[0]++] << 24 | cp[xp[1]++] << 16 | cp[xp[2]++] << 8, op[Sp] = ip, Sp++
              }
          }
        }
      return new DataView(op.buffer)
    }

    function Si(pp) {
      const ip = pp.viewer,
        cp = {
          value: pp.offset.value
        },
        Op = new Uint16Array(pp.width * pp.scanlineBlockSize * (pp.channels * pp.type)),
        op = new Uint8Array(Pp);
      let Ip = 0;
      const Sp = new Array(pp.channels);
      for (let Yp = 0; Yp < pp.channels; Yp++) Sp[Yp] = {}, Sp[Yp].start = Ip, Sp[Yp].end = Sp[Yp].start, Sp[Yp].nx = pp.width, Sp[Yp].ny = pp.lines, Sp[Yp].size = pp.type, Ip += Sp[Yp].nx * Sp[Yp].ny * Sp[Yp].size;
      const xp = qp(ip, cp),
        Lp = qp(ip, cp);
      if (Lp >= Pp) throw new Error("Wrong PIZ_COMPRESSION BITMAP_SIZE");
      if (xp <= Lp)
        for (let Yp = 0; Yp < Lp - xp + 1; Yp++) op[Yp + xp] = Rp(ip, cp);
      const Dp = new Uint16Array(Ap),
        Wp = function(pp, ip) {
          let cp = 0;
          for (let op = 0; op < Ap; ++op)(0 == op || pp[op >> 3] & 1 << (7 & op)) && (ip[cp++] = op);
          const Op = cp - 1;
          for (; cp < Ap;) ip[cp++] = 0;
          return Op
        }(op, Dp),
        yp = mp(ip, cp);
      Zp(pp.array, ip, cp, yp, Op, Ip);
      for (let Yp = 0; Yp < pp.channels; ++Yp) {
        const pp = Sp[Yp];
        for (let ip = 0; ip < Sp[Yp].size; ++ip) ii(Op, pp.start + ip, pp.nx, pp.size, pp.ny, pp.nx * pp.size, Wp)
      }! function(pp, ip, cp) {
        for (let Op = 0; Op < cp; ++Op) ip[Op] = pp[ip[Op]]
      }(Dp, Op, Ip);
      let Up = 0;
      const wp = new Uint8Array(Op.buffer.byteLength);
      for (let Ap = 0; Ap < pp.lines; Ap++)
        for (let ip = 0; ip < pp.channels; ip++) {
          const pp = Sp[ip],
            cp = pp.nx * pp.size,
            op = new Uint8Array(Op.buffer, pp.end * Yp, cp * Yp);
          wp.set(op, Up), Up += cp * Yp, pp.end += cp
        }
      return new DataView(wp.buffer)
    }
    var xi, Li = cp(40304);
    ! function(pp) {
      pp[pp.Float = 0] = "Float", pp[pp.HalfFloat = 1] = "HalfFloat"
    }(xi || (xi = {}));
    class Yi {}
    async function Di(pp, ip, cp, Op) {
      const op = {
        size: 0,
        viewer: ip,
        array: new Uint8Array(ip.buffer),
        offset: cp,
        width: pp.dataWindow.xMax - pp.dataWindow.xMin + 1,
        height: pp.dataWindow.yMax - pp.dataWindow.yMin + 1,
        channels: pp.channels.length,
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
      switch (pp.compression) {
        case dp.NO_COMPRESSION:
          op.lines = 1, op.uncompress = ci;
          break;
        case dp.RLE_COMPRESSION:
          op.lines = 1, op.uncompress = Oi;
          break;
        case dp.ZIPS_COMPRESSION:
          op.lines = 1, op.uncompress = oi, await Li.i.LoadScriptAsync(Yi.FFLATEUrl);
          break;
        case dp.ZIP_COMPRESSION:
          op.lines = 16, op.uncompress = oi, await Li.i.LoadScriptAsync(Yi.FFLATEUrl);
          break;
        case dp.PIZ_COMPRESSION:
          op.lines = 32, op.uncompress = Si;
          break;
        case dp.PXR24_COMPRESSION:
          op.lines = 16, op.uncompress = Ii, await Li.i.LoadScriptAsync(Yi.FFLATEUrl);
          break;
        default:
          throw new Error(dp[pp.compression] + " is unsupported")
      }
      op.scanlineBlockSize = op.lines;
      const Ip = {};
      for (const xp of pp.channels) switch (xp.name) {
        case "R":
        case "G":
        case "B":
        case "A":
        case "Y":
          Ip[xp.name] = !0, op.type = xp.pixelType
      }
      let Sp = !1;
      if (Ip.R && Ip.G && Ip.B && Ip.A) op.outputChannels = 4, op.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (Ip.R && Ip.G && Ip.B) Sp = !0, op.outputChannels = 4, op.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (Ip.R && Ip.G) op.outputChannels = 2, op.decodeChannels = {
        R: 0,
        G: 1
      };
      else if (Ip.R) op.outputChannels = 1, op.decodeChannels = {
        R: 0
      };
      else {
        if (!Ip.Y) throw new Error("EXRLoader.parse: file contains unsupported data channels.");
        op.outputChannels = 1, op.decodeChannels = {
          Y: 0
        }
      }
      if (1 === op.type) switch (Op) {
        case xi.Float:
          op.getter = Xp, op.inputSize = Yp;
          break;
        case xi.HalfFloat:
          op.getter = qp, op.inputSize = Yp
      } else {
        if (2 !== op.type) throw new Error("Unsupported pixelType " + op.type + " for " + pp.compression);
        switch (Op) {
          case xi.Float:
            op.getter = Ep, op.inputSize = xp;
            break;
          case xi.HalfFloat:
            op.getter = lp, op.inputSize = xp
        }
      }
      op.blockCount = op.height / op.scanlineBlockSize;
      for (let xp = 0; xp < op.blockCount; xp++) Cp(ip, cp);
      const Lp = op.width * op.height * op.outputChannels;
      switch (Op) {
        case xi.Float:
          op.byteArray = new Float32Array(Lp), op.textureType = 1, Sp && op.byteArray.fill(1, 0, Lp);
          break;
        case xi.HalfFloat:
          op.byteArray = new Uint16Array(Lp), op.textureType = 2, Sp && op.byteArray.fill(15360, 0, Lp);
          break;
        default:
          throw new Error("Unsupported type: " + Op)
      }
      let Dp = 0;
      for (const xp of pp.channels) void 0 !== op.decodeChannels[xp.name] && (op.channelLineOffsets[xp.name] = Dp * op.width), Dp += 2 * xp.pixelType;
      return op.bytesPerLine = op.width * Dp, op.outLineWidth = op.width * op.outputChannels, "INCREASING_Y" === pp.lineOrder ? op.scanOrder = pp => pp : op.scanOrder = pp => op.height - 1 - pp, 4 == op.outputChannels ? (op.format = 5, op.linearSpace = !0) : (op.format = 6, op.linearSpace = !1), op
    }

    function Ai(pp, ip, cp, Op) {
      const op = {
        value: 0
      };
      for (let Ip = 0; Ip < pp.height / pp.scanlineBlockSize; Ip++) {
        const Sp = kp(cp, Op) - ip.dataWindow.yMin;
        pp.size = mp(cp, Op), pp.lines = Sp + pp.scanlineBlockSize > pp.height ? pp.height - Sp : pp.scanlineBlockSize;
        const xp = pp.size < pp.lines * pp.bytesPerLine && pp.uncompress ? pp.uncompress(pp) : ci(pp);
        Op.value += pp.size;
        for (let cp = 0; cp < pp.scanlineBlockSize; cp++) {
          const Op = Ip * pp.scanlineBlockSize,
            Sp = cp + pp.scanOrder(Op);
          if (Sp >= pp.height) continue;
          const Lp = cp * pp.bytesPerLine,
            Yp = (pp.height - 1 - Sp) * pp.outLineWidth;
          for (let cp = 0; cp < pp.channels; cp++) {
            const Op = ip.channels[cp].name,
              Ip = pp.channelLineOffsets[Op],
              Sp = pp.decodeChannels[Op];
            if (void 0 !== Sp) {
              op.value = Lp + Ip;
              for (let ip = 0; ip < pp.width; ip++) {
                const cp = Yp + ip * pp.outputChannels + Sp;
                pp.byteArray && (pp.byteArray[cp] = pp.getter(xp, op))
              }
            }
          }
        }
      }
    }
    Yi.DefaultOutputType = xi.HalfFloat, Yi.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class Pi {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(pp, ip, cp, Op, op) {
        throw ".exr not supported in Cube."
      }
      loadData(pp, ip, cp) {
        const op = new DataView(pp.buffer),
          Ip = {
            value: 0
          },
          Sp = Tp(op, Ip);
        Di(Sp, op, Ip, Yi.DefaultOutputType).then((pp => {
          Ai(pp, Sp, op, Ip);
          const Op = Sp.dataWindow.xMax - Sp.dataWindow.xMin + 1,
            xp = Sp.dataWindow.yMax - Sp.dataWindow.yMin + 1;
          cp(Op, xp, ip.generateMipMaps, !1, (() => {
            const cp = ip.gy();
            ip.format = Sp.format, ip.type = pp.textureType, ip.invertY = !1, ip._gammaSpace = !Sp.linearSpace, pp.byteArray && cp._uploadDataToTextureDirectly(ip, pp.byteArray, 0, 0, void 0, !0)
          }))
        })).catch((pp => {
          Op.e.Error("Failed to load EXR texture: ", pp)
        }))
      }
    }
    async function Wi(pp) {
      const ip = new DataView(pp),
        cp = {
          value: 0
        },
        op = Tp(ip, cp);
      try {
        const pp = await Di(op, ip, cp, xi.Float);
        return Ai(pp, op, ip, cp), pp.byteArray ? {
          width: op.dataWindow.xMax - op.dataWindow.xMin + 1,
          height: op.dataWindow.yMax - op.dataWindow.yMin + 1,
          data: new Float32Array(pp.byteArray)
        } : (Op.e.Error("Failed to decode EXR data: No byte array available."), {
          width: 0,
          height: 0,
          data: null
        })
      } catch (Ip) {
        Op.e.Error("Failed to load EXR data: ", Ip)
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
for (const pp in modules) Object.freeze(modules[pp]);