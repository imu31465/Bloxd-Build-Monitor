export const id = 311;
export const ids = [311];
export const modules = {
  42025: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Yp
    });
    var Op = cp(37320),
      op = cp(37356),
      Ip = cp(40190),
      Sp = cp(37324),
      xp = cp(37487);
    class Lp {
      constructor(pp, ip, cp, Op) {
        this.name = pp, this.worldAxisForNormal = ip, this.worldAxisForFileX = cp, this.worldAxisForFileY = Op
      }
    }
    class Yp {
      static _NearestPow2Floor(pp) {
        return pp <= 1 ? 1 : 1 << Math.floor(Math.log2(pp))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(pp) {
        if (!pp.isCube) return null;
        pp.Gl()?.gy().flushFramebuffer();
        const ip = pp.getSize().width,
          cp = pp._sphericalPolynomialTargetSize,
          Op = cp > 0 ? this._NearestPow2Floor(cp) : 0,
          op = !pp.noMipmap && !0 === pp._texture?.generateMipMaps,
          Ip = Op > 0 && Op < ip && op,
          Sp = Ip ? Math.max(0, Math.round(Math.log2(ip / Op))) : 0,
          xp = Ip ? Math.max(1, Math.floor(ip / Math.pow(2, Sp))) : ip,
          Lp = pp.readPixels(0, Sp, void 0, !1),
          Yp = pp.readPixels(1, Sp, void 0, !1);
        let Dp, Ap;
        pp.isRenderTarget ? (Dp = pp.readPixels(3, Sp, void 0, !1), Ap = pp.readPixels(2, Sp, void 0, !1)) : (Dp = pp.readPixels(2, Sp, void 0, !1), Ap = pp.readPixels(3, Sp, void 0, !1));
        const Pp = pp.readPixels(4, Sp, void 0, !1),
          Wp = pp.readPixels(5, Sp, void 0, !1),
          yp = pp.gammaSpace,
          Up = Op > 0 && Op < ip && !Ip;
        return new Promise((pp => {
          Promise.all([Yp, Lp, Dp, Ap, Pp, Wp]).then((cp => {
            let [op, Ip, Sp, Lp, Yp, Dp] = cp, Ap = xp;
            if (Up) {
              const pp = 4;
              op = this._DownsampleFace(op, ip, Op, pp), Ip = this._DownsampleFace(Ip, ip, Op, pp), Sp = this._DownsampleFace(Sp, ip, Op, pp), Lp = this._DownsampleFace(Lp, ip, Op, pp), Yp = this._DownsampleFace(Yp, ip, Op, pp), Dp = this._DownsampleFace(Dp, ip, Op, pp), Ap = Op
            }
            const Pp = {
              size: Ap,
              right: Ip,
              left: op,
              up: Sp,
              down: Lp,
              front: Yp,
              back: Dp,
              format: 5,
              type: op instanceof Float32Array ? 1 : 0,
              gammaSpace: yp
            };
            pp(this.ConvertCubeMapToSphericalPolynomial(Pp))
          }))
        }))
      }
      static _AreaElement(pp, ip) {
        return Math.atan2(pp * ip, Math.sqrt(pp * pp + ip * ip + 1))
      }
      static _DownsampleFace(pp, ip, cp, Op) {
        const op = pp instanceof Float32Array ? pp : Float32Array.from(pp),
          Ip = cp * cp * Op,
          Sp = new Float32Array(Ip),
          xp = ip / cp,
          Lp = 1 / (xp * xp);
        for (let Dp = 0; Dp < cp; Dp++) {
          const pp = Math.floor(Dp * xp),
            Ip = Math.floor((Dp + 1) * xp);
          for (let Yp = 0; Yp < cp; Yp++) {
            const Ap = Math.floor(Yp * xp),
              Pp = Math.floor((Yp + 1) * xp),
              Wp = (Dp * cp + Yp) * Op;
            for (let cp = 0; cp < Op; cp++) {
              let xp = 0;
              for (let Sp = pp; Sp < Ip; Sp++)
                for (let pp = Ap; pp < Pp; pp++) xp += op[(Sp * ip + pp) * Op + cp];
              Sp[Wp + cp] = xp * Lp
            }
          }
        }
        if (pp instanceof Float32Array) return Sp;
        const Yp = new(0, pp.constructor)(Ip);
        for (let Dp = 0; Dp < Ip; Dp++) Yp[Dp] = Sp[Dp] + .5 | 0;
        return Yp
      }
      static ConvertCubeMapToSphericalPolynomial(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const cp = ip > 0 ? this._NearestPow2Floor(ip) : 0;
        if (cp > 0 && pp.size > cp) {
          const ip = 5 === pp.format ? 4 : 3,
            Op = ["right", "left", "up", "down", "front", "back"],
            op = {};
          for (const Ip of Op) op[Ip] = this._DownsampleFace(pp[Ip], pp.size, cp, ip);
          pp = {
            ...pp,
            ...op,
            size: cp
          }
        }
        const Op = new Ip.c;
        let Lp = 0;
        const Yp = 2 / pp.size,
          Dp = Yp,
          Ap = .5 * Yp,
          Pp = Ap - 1;
        for (let Ip = 0; Ip < 6; Ip++) {
          const ip = this._FileFaces[Ip],
            cp = pp[ip.name];
          let Wp = Pp;
          const yp = 5 === pp.format ? 4 : 3;
          for (let Ip = 0; Ip < pp.size; Ip++) {
            let Up = Pp;
            for (let Dp = 0; Dp < pp.size; Dp++) {
              const Pp = ip.worldAxisForFileX.scale(Up).add(ip.worldAxisForFileY.scale(Wp)).add(ip.worldAxisForNormal);
              Pp.normalize();
              const wp = this._AreaElement(Up - Ap, Wp - Ap) - this._AreaElement(Up - Ap, Wp + Ap) - this._AreaElement(Up + Ap, Wp - Ap) + this._AreaElement(Up + Ap, Wp + Ap);
              let vp = cp[Ip * pp.size * yp + Dp * yp + 0],
                tp = cp[Ip * pp.size * yp + Dp * yp + 1],
                Hp = cp[Ip * pp.size * yp + Dp * yp + 2];
              isNaN(vp) && (vp = 0), isNaN(tp) && (tp = 0), isNaN(Hp) && (Hp = 0), 0 === pp.type && (vp /= 255, tp /= 255, Hp /= 255), pp.gammaSpace && (vp = Math.pow((0, op.Clamp)(vp), Sp.g), tp = Math.pow((0, op.Clamp)(tp), Sp.g), Hp = Math.pow((0, op.Clamp)(Hp), Sp.g));
              const dp = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const pp = Math.max(vp, tp, Hp);
                if (pp > dp) {
                  const ip = dp / pp;
                  vp *= ip, tp *= ip, Hp *= ip
                }
              } else vp = (0, op.Clamp)(vp, 0, dp), tp = (0, op.Clamp)(tp, 0, dp), Hp = (0, op.Clamp)(Hp, 0, dp);
              const ep = new xp.d(vp, tp, Hp);
              Op.addLight(Pp, ep, wp), Lp += wp, Up += Yp
            }
            Wp += Dp
          }
        }
        const Wp = 6 * (4 * Math.PI) / 6 / Lp;
        return Op.scaleInPlace(Wp), Op.convertIncidentRadianceToIrradiance(), Op.convertIrradianceToLambertianRadiance(), Ip.e.FromHarmonics(Op)
      }
    }
    Yp._FileFaces = [new Lp("right", new Op.o(1, 0, 0), new Op.o(0, 0, -1), new Op.o(0, -1, 0)), new Lp("left", new Op.o(-1, 0, 0), new Op.o(0, 0, 1), new Op.o(0, -1, 0)), new Lp("up", new Op.o(0, 1, 0), new Op.o(1, 0, 0), new Op.o(0, 0, 1)), new Lp("down", new Op.o(0, -1, 0), new Op.o(1, 0, 0), new Op.o(0, 0, -1)), new Lp("front", new Op.o(0, 0, 1), new Op.o(1, 0, 0), new Op.o(0, -1, 0)), new Lp("back", new Op.o(0, 0, -1), new Op.o(-1, 0, 0), new Op.o(0, -1, 0))], Yp.MAX_HDRI_VALUE = 4096, Yp.PRESERVE_CLAMPED_COLORS = !1
  },
  42016: (pp, ip, cp) => {
    cp.d(ip, {
      DDSTools: () => yp
    });
    var Op = cp(37356),
      op = cp(38905),
      Ip = cp(42025),
      Sp = cp(40276);
    const xp = 131072,
      Lp = 131072;

    function Yp(pp) {
      return pp.charCodeAt(0) + (pp.charCodeAt(1) << 8) + (pp.charCodeAt(2) << 16) + (pp.charCodeAt(3) << 24)
    }
    const Dp = Yp("DXT1"),
      Ap = Yp("DXT3"),
      Pp = Yp("DXT5"),
      Wp = Yp("DX10");
    class yp {
      static GetDDSInfo(pp) {
        const ip = new Int32Array(pp.buffer, pp.byteOffset, 31),
          cp = new Int32Array(pp.buffer, pp.byteOffset, 35);
        let Op = 1;
        ip[2] & xp && (Op = Math.max(1, ip[7]));
        const op = ip[21],
          Ip = op === Wp ? cp[32] : 0;
        let Sp = 0;
        switch (op) {
          case 113:
            Sp = 2;
            break;
          case 116:
            Sp = 1;
            break;
          case Wp:
            if (10 === Ip) {
              Sp = 2;
              break
            }
            if (2 === Ip) {
              Sp = 1;
              break
            }
        }
        return {
          width: ip[4],
          height: ip[3],
          mipmapCount: Op,
          isFourCC: 4 === (4 & ip[20]),
          isRGB: 64 === (64 & ip[20]),
          isLuminance: (ip[20] & Lp) === Lp,
          isCube: 512 === (512 & ip[28]),
          isCompressed: op === Dp || op === Ap || op === Pp,
          dxgiFormat: Ip,
          textureType: Sp
        }
      }
      static _GetHalfFloatAsFloatRGBAArrayBuffer(pp, ip, cp, Op, op, Ip) {
        const xp = new Float32Array(Op),
          Lp = new Uint16Array(op, cp);
        let Yp = 0;
        for (let Dp = 0; Dp < ip; Dp++)
          for (let ip = 0; ip < pp; ip++) {
            const cp = 4 * (ip + Dp * pp);
            xp[Yp] = (0, Sp.c)(Lp[cp]), xp[Yp + 1] = (0, Sp.c)(Lp[cp + 1]), xp[Yp + 2] = (0, Sp.c)(Lp[cp + 2]), yp.StoreLODInAlphaChannel ? xp[Yp + 3] = Ip : xp[Yp + 3] = (0, Sp.c)(Lp[cp + 3]), Yp += 4
          }
        return xp
      }
      static _GetHalfFloatRGBAArrayBuffer(pp, ip, cp, Op, op, Ip) {
        if (yp.StoreLODInAlphaChannel) {
          const xp = new Uint16Array(Op),
            Lp = new Uint16Array(op, cp);
          let Yp = 0;
          for (let cp = 0; cp < ip; cp++)
            for (let ip = 0; ip < pp; ip++) {
              const Op = 4 * (ip + cp * pp);
              xp[Yp] = Lp[Op], xp[Yp + 1] = Lp[Op + 1], xp[Yp + 2] = Lp[Op + 2], xp[Yp + 3] = (0, Sp.h)(Ip), Yp += 4
            }
          return xp
        }
        return new Uint16Array(op, cp, Op)
      }
      static _GetFloatRGBAArrayBuffer(pp, ip, cp, Op, op, Ip) {
        if (yp.StoreLODInAlphaChannel) {
          const Sp = new Float32Array(Op),
            xp = new Float32Array(op, cp);
          let Lp = 0;
          for (let cp = 0; cp < ip; cp++)
            for (let ip = 0; ip < pp; ip++) {
              const Op = 4 * (ip + cp * pp);
              Sp[Lp] = xp[Op], Sp[Lp + 1] = xp[Op + 1], Sp[Lp + 2] = xp[Op + 2], Sp[Lp + 3] = Ip, Lp += 4
            }
          return Sp
        }
        return new Float32Array(op, cp, Op)
      }
      static _GetFloatAsHalfFloatRGBAArrayBuffer(pp, ip, cp, Op, op, Ip) {
        const xp = new Uint16Array(Op),
          Lp = new Float32Array(op, cp);
        let Yp = 0;
        for (let Dp = 0; Dp < ip; Dp++)
          for (let ip = 0; ip < pp; ip++) xp[Yp] = (0, Sp.h)(Lp[Yp]), xp[Yp + 1] = (0, Sp.h)(Lp[Yp + 1]), xp[Yp + 2] = (0, Sp.h)(Lp[Yp + 2]), yp.StoreLODInAlphaChannel ? xp[Yp + 3] = (0, Sp.h)(Ip) : xp[Yp + 3] = (0, Sp.h)(Lp[Yp + 3]), Yp += 4;
        return xp
      }
      static _GetFloatAsUIntRGBAArrayBuffer(pp, ip, cp, op, Ip, Sp) {
        const xp = new Uint8Array(op),
          Lp = new Float32Array(Ip, cp);
        let Yp = 0;
        for (let Dp = 0; Dp < ip; Dp++)
          for (let ip = 0; ip < pp; ip++) {
            const cp = 4 * (ip + Dp * pp);
            xp[Yp] = 255 * (0, Op.Clamp)(Lp[cp]), xp[Yp + 1] = 255 * (0, Op.Clamp)(Lp[cp + 1]), xp[Yp + 2] = 255 * (0, Op.Clamp)(Lp[cp + 2]), yp.StoreLODInAlphaChannel ? xp[Yp + 3] = Sp : xp[Yp + 3] = 255 * (0, Op.Clamp)(Lp[cp + 3]), Yp += 4
          }
        return xp
      }
      static _GetHalfFloatAsUIntRGBAArrayBuffer(pp, ip, cp, op, Ip, xp) {
        const Lp = new Uint8Array(op),
          Yp = new Uint16Array(Ip, cp);
        let Dp = 0;
        for (let Ap = 0; Ap < ip; Ap++)
          for (let ip = 0; ip < pp; ip++) {
            const cp = 4 * (ip + Ap * pp);
            Lp[Dp] = 255 * (0, Op.Clamp)((0, Sp.c)(Yp[cp])), Lp[Dp + 1] = 255 * (0, Op.Clamp)((0, Sp.c)(Yp[cp + 1])), Lp[Dp + 2] = 255 * (0, Op.Clamp)((0, Sp.c)(Yp[cp + 2])), yp.StoreLODInAlphaChannel ? Lp[Dp + 3] = xp : Lp[Dp + 3] = 255 * (0, Op.Clamp)((0, Sp.c)(Yp[cp + 3])), Dp += 4
          }
        return Lp
      }
      static _GetRGBAArrayBuffer(pp, ip, cp, Op, op, Ip, Sp, xp, Lp) {
        const Yp = new Uint8Array(Op),
          Dp = new Uint8Array(op, cp);
        let Ap = 0;
        for (let Pp = 0; Pp < ip; Pp++)
          for (let ip = 0; ip < pp; ip++) {
            const cp = 4 * (ip + Pp * pp);
            Yp[Ap] = Dp[cp + Ip], Yp[Ap + 1] = Dp[cp + Sp], Yp[Ap + 2] = Dp[cp + xp], Yp[Ap + 3] = Dp[cp + Lp], Ap += 4
          }
        return Yp
      }
      static _ExtractLongWordOrder(pp) {
        return 0 === pp || 255 === pp || -16777216 === pp ? 0 : 1 + yp._ExtractLongWordOrder(pp >> 8)
      }
      static _GetRGBArrayBuffer(pp, ip, cp, Op, op, Ip, Sp, xp) {
        const Lp = new Uint8Array(Op),
          Yp = new Uint8Array(op, cp);
        let Dp = 0;
        for (let Ap = 0; Ap < ip; Ap++)
          for (let ip = 0; ip < pp; ip++) {
            const cp = 3 * (ip + Ap * pp);
            Lp[Dp] = Yp[cp + Ip], Lp[Dp + 1] = Yp[cp + Sp], Lp[Dp + 2] = Yp[cp + xp], Dp += 3
          }
        return Lp
      }
      static _GetLuminanceArrayBuffer(pp, ip, cp, Op, op) {
        const Ip = new Uint8Array(Op),
          Sp = new Uint8Array(op, cp);
        let xp = 0;
        for (let Lp = 0; Lp < ip; Lp++)
          for (let ip = 0; ip < pp; ip++) {
            const cp = ip + Lp * pp;
            Ip[xp] = Sp[cp], xp++
          }
        return Ip
      }
      static UploadDDSLevels(pp, ip, cp, Op, Sp, Lp) {
        let Yp = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : -1,
          Up = arguments.length > 7 ? arguments[7] : void 0,
          wp = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          vp = null;
        Op.sphericalPolynomial && (vp = []);
        const tp = !!pp.getCaps().s3tc;
        ip.generateMipMaps = Sp;
        const Hp = new Int32Array(cp.buffer, cp.byteOffset, 31);
        let dp, ep, jp, kp, mp, Rp, qp, Mp = 0,
          Cp = 0,
          Ep = 1;
        if (542327876 !== Hp[0]) return void op.e.Error("Invalid magic number in DDS header");
        if (!Op.isFourCC && !Op.isRGB && !Op.isLuminance) return void op.e.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
        if (Op.isCompressed && !tp) return void op.e.Error("Compressed textures are not supported on this platform.");
        let Xp = Hp[22];
        kp = Hp[1] + 4;
        let lp = !1;
        if (Op.isFourCC) switch (dp = Hp[21], dp) {
          case Dp:
            Ep = 8, Cp = 33777;
            break;
          case Ap:
            Ep = 16, Cp = 33778;
            break;
          case Pp:
            Ep = 16, Cp = 33779;
            break;
          case 113:
            lp = !0, Xp = 64;
            break;
          case 116:
            lp = !0, Xp = 128;
            break;
          case Wp: {
            kp += 20;
            let pp = !1;
            switch (Op.dxgiFormat) {
              case 10:
                lp = !0, Xp = 64, pp = !0;
                break;
              case 2:
                lp = !0, Xp = 128, pp = !0;
                break;
              case 88:
                Op.isRGB = !0, Op.isFourCC = !1, Xp = 32, pp = !0
            }
            if (pp) break
          }
          default:
            return void op.e.Error(["Unsupported FourCC code:", (Qp = dp, String.fromCharCode(255 & Qp, Qp >> 8 & 255, Qp >> 16 & 255, Qp >> 24 & 255))])
        }
        var Qp;
        const Jp = yp._ExtractLongWordOrder(Hp[23]),
          Bp = yp._ExtractLongWordOrder(Hp[24]),
          Np = yp._ExtractLongWordOrder(Hp[25]),
          Tp = yp._ExtractLongWordOrder(Hp[26]);
        lp && (Cp = pp._getRGBABufferInternalSizedFormat(Op.textureType)), Rp = 1, Hp[2] & xp && !1 !== Sp && (Rp = Math.max(1, Hp[7]));
        const fp = Up || 0,
          bp = pp.getCaps();
        for (let op = fp; op < Lp; op++) {
          for (ep = Hp[4], jp = Hp[3], qp = 0; qp < Rp; ++qp) {
            if (-1 === Yp || Yp === qp) {
              const Ip = -1 === Yp ? qp : 0;
              if (!Op.isCompressed && Op.isFourCC) {
                ip.format = 5, Mp = ep * jp * 4;
                let Op = null;
                if (pp._badOS || pp._badDesktopOS || !bp.textureHalfFloat && !bp.textureFloat) 128 === Xp ? (Op = yp._GetFloatAsUIntRGBAArrayBuffer(ep, jp, cp.byteOffset + kp, Mp, cp.buffer, Ip), vp && 0 == Ip && vp.push(yp._GetFloatRGBAArrayBuffer(ep, jp, cp.byteOffset + kp, Mp, cp.buffer, Ip))) : 64 === Xp && (Op = yp._GetHalfFloatAsUIntRGBAArrayBuffer(ep, jp, cp.byteOffset + kp, Mp, cp.buffer, Ip), vp && 0 == Ip && vp.push(yp._GetHalfFloatAsFloatRGBAArrayBuffer(ep, jp, cp.byteOffset + kp, Mp, cp.buffer, Ip))), ip.type = 0;
                else {
                  const pp = bp.textureFloat && (wp && bp.textureFloatLinearFiltering || !wp),
                    op = bp.textureHalfFloat && (wp && bp.textureHalfFloatLinearFiltering || !wp),
                    Sp = (128 === Xp || 64 === Xp && !op) && pp ? 1 : (64 === Xp || 128 === Xp && !pp) && op ? 2 : 0;
                  let xp, Lp = null;
                  if (128 === Xp) switch (Sp) {
                    case 1:
                      xp = yp._GetFloatRGBAArrayBuffer, Lp = null;
                      break;
                    case 2:
                      xp = yp._GetFloatAsHalfFloatRGBAArrayBuffer, Lp = yp._GetFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      xp = yp._GetFloatAsUIntRGBAArrayBuffer, Lp = yp._GetFloatRGBAArrayBuffer
                  } else switch (Sp) {
                    case 1:
                      xp = yp._GetHalfFloatAsFloatRGBAArrayBuffer, Lp = null;
                      break;
                    case 2:
                      xp = yp._GetHalfFloatRGBAArrayBuffer, Lp = yp._GetHalfFloatAsFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      xp = yp._GetHalfFloatAsUIntRGBAArrayBuffer, Lp = yp._GetHalfFloatAsFloatRGBAArrayBuffer
                  }
                  ip.type = Sp, Op = xp(ep, jp, cp.byteOffset + kp, Mp, cp.buffer, Ip), vp && 0 == Ip && vp.push(Lp ? Lp(ep, jp, cp.byteOffset + kp, Mp, cp.buffer, Ip) : Op)
                }
                Op && pp._uploadDataToTextureDirectly(ip, Op, op, Ip)
              } else if (Op.isRGB) ip.type = 0, 24 === Xp ? (ip.format = 4, Mp = ep * jp * 3, mp = yp._GetRGBArrayBuffer(ep, jp, cp.byteOffset + kp, Mp, cp.buffer, Jp, Bp, Np), pp._uploadDataToTextureDirectly(ip, mp, op, Ip)) : (ip.format = 5, Mp = ep * jp * 4, mp = yp._GetRGBAArrayBuffer(ep, jp, cp.byteOffset + kp, Mp, cp.buffer, Jp, Bp, Np, Tp), pp._uploadDataToTextureDirectly(ip, mp, op, Ip));
              else if (Op.isLuminance) {
                const Op = pp._getUnpackAlignement(),
                  Sp = ep;
                Mp = Math.floor((ep + Op - 1) / Op) * Op * (jp - 1) + Sp, mp = yp._GetLuminanceArrayBuffer(ep, jp, cp.byteOffset + kp, Mp, cp.buffer), ip.format = 1, ip.type = 0, pp._uploadDataToTextureDirectly(ip, mp, op, Ip)
              } else Mp = Math.max(4, ep) / 4 * Math.max(4, jp) / 4 * Ep, mp = new Uint8Array(cp.buffer, cp.byteOffset + kp, Mp), ip.type = 0, pp._uploadCompressedDataToTextureDirectly(ip, Cp, ep, jp, mp, op, Ip)
            }
            kp += Xp ? ep * jp * (Xp / 8) : Mp, ep *= .5, jp *= .5, ep = Math.max(1, ep), jp = Math.max(1, jp)
          }
          if (void 0 !== Up) break
        }
        vp && vp.length > 0 ? Op.sphericalPolynomial = Ip.d.ConvertCubeMapToSphericalPolynomial({
          size: Hp[4],
          right: vp[0],
          left: vp[1],
          up: vp[2],
          down: vp[3],
          front: vp[4],
          back: vp[5],
          format: 5,
          type: 1,
          gammaSpace: !1
        }) : Op.sphericalPolynomial = void 0
      }
    }
    yp.StoreLODInAlphaChannel = !1
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);