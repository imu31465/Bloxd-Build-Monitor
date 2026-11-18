export const id = 284;
export const ids = [284];
export const modules = {
  40243: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => oy
    });
    var Uy = Wy(35861),
      hy = Wy(35902),
      fy = Wy(38453),
      Zy = Wy(35864),
      cb = Wy(35919);
    class Py {
      constructor(yb, bb, Wy, Uy) {
        this.name = yb, this.worldAxisForNormal = bb, this.worldAxisForFileX = Wy, this.worldAxisForFileY = Uy
      }
    }
    class oy {
      static _NearestPow2Floor(yb) {
        return yb <= 1 ? 1 : 1 << Math.floor(Math.log2(yb))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(yb) {
        if (!yb.isCube) return null;
        yb.kWy()?.xh().flushFramebuffer();
        const bb = yb.getSize().width,
          Wy = yb._sphericalPolynomialTargetSize,
          Uy = Wy > 0 ? this._NearestPow2Floor(Wy) : 0,
          hy = !yb.noMipmap && !0 === yb._texture?.generateMipMaps,
          fy = Uy > 0 && Uy < bb && hy,
          Zy = fy ? Math.max(0, Math.round(Math.log2(bb / Uy))) : 0,
          cb = fy ? Math.max(1, Math.floor(bb / Math.pow(2, Zy))) : bb,
          Py = yb.readPixels(0, Zy, void 0, !1),
          oy = yb.readPixels(1, Zy, void 0, !1);
        let By, Ky;
        yb.isRenderTarget ? (By = yb.readPixels(3, Zy, void 0, !1), Ky = yb.readPixels(2, Zy, void 0, !1)) : (By = yb.readPixels(2, Zy, void 0, !1), Ky = yb.readPixels(3, Zy, void 0, !1));
        const ey = yb.readPixels(4, Zy, void 0, !1),
          qb = yb.readPixels(5, Zy, void 0, !1),
          sy = yb.gammaSpace,
          Sy = Uy > 0 && Uy < bb && !fy;
        return new Promise((yb => {
          Promise.all([oy, Py, By, Ky, ey, qb]).then((Wy => {
            let [hy, fy, Zy, Py, oy, By] = Wy, Ky = cb;
            if (Sy) {
              const yb = 4;
              hy = this._DownsampleFace(hy, bb, Uy, yb), fy = this._DownsampleFace(fy, bb, Uy, yb), Zy = this._DownsampleFace(Zy, bb, Uy, yb), Py = this._DownsampleFace(Py, bb, Uy, yb), oy = this._DownsampleFace(oy, bb, Uy, yb), By = this._DownsampleFace(By, bb, Uy, yb), Ky = Uy
            }
            const ey = {
              size: Ky,
              right: fy,
              left: hy,
              up: Zy,
              down: Py,
              front: oy,
              back: By,
              format: 5,
              type: hy instanceof Float32Array ? 1 : 0,
              gammaSpace: sy
            };
            yb(this.ConvertCubeMapToSphericalPolynomial(ey))
          }))
        }))
      }
      static _AreaElement(yb, bb) {
        return Math.atan2(yb * bb, Math.sqrt(yb * yb + bb * bb + 1))
      }
      static _DownsampleFace(yb, bb, Wy, Uy) {
        const hy = yb instanceof Float32Array ? yb : Float32Array.from(yb),
          fy = Wy * Wy * Uy,
          Zy = new Float32Array(fy),
          cb = bb / Wy,
          Py = 1 / (cb * cb);
        for (let By = 0; By < Wy; By++) {
          const yb = Math.floor(By * cb),
            fy = Math.floor((By + 1) * cb);
          for (let oy = 0; oy < Wy; oy++) {
            const Ky = Math.floor(oy * cb),
              ey = Math.floor((oy + 1) * cb),
              qb = (By * Wy + oy) * Uy;
            for (let Wy = 0; Wy < Uy; Wy++) {
              let cb = 0;
              for (let Zy = yb; Zy < fy; Zy++)
                for (let yb = Ky; yb < ey; yb++) cb += hy[(Zy * bb + yb) * Uy + Wy];
              Zy[qb + Wy] = cb * Py
            }
          }
        }
        if (yb instanceof Float32Array) return Zy;
        const oy = new(0, yb.constructor)(fy);
        for (let By = 0; By < fy; By++) oy[By] = Zy[By] + .5 | 0;
        return oy
      }
      static ConvertCubeMapToSphericalPolynomial(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Wy = bb > 0 ? this._NearestPow2Floor(bb) : 0;
        if (Wy > 0 && yb.size > Wy) {
          const bb = 5 === yb.format ? 4 : 3,
            Uy = ["right", "left", "up", "down", "front", "back"],
            hy = {};
          for (const fy of Uy) hy[fy] = this._DownsampleFace(yb[fy], yb.size, Wy, bb);
          yb = {
            ...yb,
            ...hy,
            size: Wy
          }
        }
        const Uy = new fy.e;
        let Py = 0;
        const oy = 2 / yb.size,
          By = oy,
          Ky = .5 * oy,
          ey = Ky - 1;
        for (let fy = 0; fy < 6; fy++) {
          const bb = this._FileFaces[fy],
            Wy = yb[bb.name];
          let qb = ey;
          const sy = 5 === yb.format ? 4 : 3;
          for (let fy = 0; fy < yb.size; fy++) {
            let Sy = ey;
            for (let By = 0; By < yb.size; By++) {
              const ey = bb.worldAxisForFileX.scale(Sy).add(bb.worldAxisForFileY.scale(qb)).add(bb.worldAxisForNormal);
              ey.normalize();
              const Ey = this._AreaElement(Sy - Ky, qb - Ky) - this._AreaElement(Sy - Ky, qb + Ky) - this._AreaElement(Sy + Ky, qb - Ky) + this._AreaElement(Sy + Ky, qb + Ky);
              let ly = Wy[fy * yb.size * sy + By * sy + 0],
                mb = Wy[fy * yb.size * sy + By * sy + 1],
                Cy = Wy[fy * yb.size * sy + By * sy + 2];
              isNaN(ly) && (ly = 0), isNaN(mb) && (mb = 0), isNaN(Cy) && (Cy = 0), 0 === yb.type && (ly /= 255, mb /= 255, Cy /= 255), yb.gammaSpace && (ly = Math.pow((0, hy.Clamp)(ly), Zy.j), mb = Math.pow((0, hy.Clamp)(mb), Zy.j), Cy = Math.pow((0, hy.Clamp)(Cy), Zy.j));
              const Ty = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const yb = Math.max(ly, mb, Cy);
                if (yb > Ty) {
                  const bb = Ty / yb;
                  ly *= bb, mb *= bb, Cy *= bb
                }
              } else ly = (0, hy.Clamp)(ly, 0, Ty), mb = (0, hy.Clamp)(mb, 0, Ty), Cy = (0, hy.Clamp)(Cy, 0, Ty);
              const Vy = new cb.d(ly, mb, Cy);
              Uy.addLight(ey, Vy, Ey), Py += Ey, Sy += oy
            }
            qb += By
          }
        }
        const qb = 6 * (4 * Math.PI) / 6 / Py;
        return Uy.scaleInPlace(qb), Uy.convertIncidentRadianceToIrradiance(), Uy.convertIrradianceToLambertianRadiance(), fy.f.FromHarmonics(Uy)
      }
    }
    oy._FileFaces = [new Py("right", new Uy.n(1, 0, 0), new Uy.n(0, 0, -1), new Uy.n(0, -1, 0)), new Py("left", new Uy.n(-1, 0, 0), new Uy.n(0, 0, 1), new Uy.n(0, -1, 0)), new Py("up", new Uy.n(0, 1, 0), new Uy.n(1, 0, 0), new Uy.n(0, 0, 1)), new Py("down", new Uy.n(0, -1, 0), new Uy.n(1, 0, 0), new Uy.n(0, 0, -1)), new Py("front", new Uy.n(0, 0, 1), new Uy.n(1, 0, 0), new Uy.n(0, -1, 0)), new Py("back", new Uy.n(0, 0, -1), new Uy.n(-1, 0, 0), new Uy.n(0, -1, 0))], oy.MAX_HDRI_VALUE = 4096, oy.PRESERVE_CLAMPED_COLORS = !1
  },
  40236: (yb, bb, Wy) => {
    Wy.d(bb, {
      DDSTools: () => sy
    });
    var Uy = Wy(35902),
      hy = Wy(37350),
      fy = Wy(40243),
      Zy = Wy(38547);
    const cb = 131072,
      Py = 131072;

    function oy(yb) {
      return yb.charCodeAt(0) + (yb.charCodeAt(1) << 8) + (yb.charCodeAt(2) << 16) + (yb.charCodeAt(3) << 24)
    }
    const By = oy("DXT1"),
      Ky = oy("DXT3"),
      ey = oy("DXT5"),
      qb = oy("DX10");
    class sy {
      static GetDDSInfo(yb) {
        const bb = new Int32Array(yb.buffer, yb.byteOffset, 31),
          Wy = new Int32Array(yb.buffer, yb.byteOffset, 35);
        let Uy = 1;
        bb[2] & cb && (Uy = Math.max(1, bb[7]));
        const hy = bb[21],
          fy = hy === qb ? Wy[32] : 0;
        let Zy = 0;
        switch (hy) {
          case 113:
            Zy = 2;
            break;
          case 116:
            Zy = 1;
            break;
          case qb:
            if (10 === fy) {
              Zy = 2;
              break
            }
            if (2 === fy) {
              Zy = 1;
              break
            }
        }
        return {
          width: bb[4],
          height: bb[3],
          mipmapCount: Uy,
          isFourCC: 4 === (4 & bb[20]),
          isRGB: 64 === (64 & bb[20]),
          isLuminance: (bb[20] & Py) === Py,
          isCube: 512 === (512 & bb[28]),
          isCompressed: hy === By || hy === Ky || hy === ey,
          dxgiFormat: fy,
          textureType: Zy
        }
      }
      static _GetHalfFloatAsFloatRGBAArrayBuffer(yb, bb, Wy, Uy, hy, fy) {
        const cb = new Float32Array(Uy),
          Py = new Uint16Array(hy, Wy);
        let oy = 0;
        for (let By = 0; By < bb; By++)
          for (let bb = 0; bb < yb; bb++) {
            const Wy = 4 * (bb + By * yb);
            cb[oy] = (0, Zy.d)(Py[Wy]), cb[oy + 1] = (0, Zy.d)(Py[Wy + 1]), cb[oy + 2] = (0, Zy.d)(Py[Wy + 2]), sy.StoreLODInAlphaChannel ? cb[oy + 3] = fy : cb[oy + 3] = (0, Zy.d)(Py[Wy + 3]), oy += 4
          }
        return cb
      }
      static _GetHalfFloatRGBAArrayBuffer(yb, bb, Wy, Uy, hy, fy) {
        if (sy.StoreLODInAlphaChannel) {
          const cb = new Uint16Array(Uy),
            Py = new Uint16Array(hy, Wy);
          let oy = 0;
          for (let Wy = 0; Wy < bb; Wy++)
            for (let bb = 0; bb < yb; bb++) {
              const Uy = 4 * (bb + Wy * yb);
              cb[oy] = Py[Uy], cb[oy + 1] = Py[Uy + 1], cb[oy + 2] = Py[Uy + 2], cb[oy + 3] = (0, Zy.k)(fy), oy += 4
            }
          return cb
        }
        return new Uint16Array(hy, Wy, Uy)
      }
      static _GetFloatRGBAArrayBuffer(yb, bb, Wy, Uy, hy, fy) {
        if (sy.StoreLODInAlphaChannel) {
          const Zy = new Float32Array(Uy),
            cb = new Float32Array(hy, Wy);
          let Py = 0;
          for (let Wy = 0; Wy < bb; Wy++)
            for (let bb = 0; bb < yb; bb++) {
              const Uy = 4 * (bb + Wy * yb);
              Zy[Py] = cb[Uy], Zy[Py + 1] = cb[Uy + 1], Zy[Py + 2] = cb[Uy + 2], Zy[Py + 3] = fy, Py += 4
            }
          return Zy
        }
        return new Float32Array(hy, Wy, Uy)
      }
      static _GetFloatAsHalfFloatRGBAArrayBuffer(yb, bb, Wy, Uy, hy, fy) {
        const cb = new Uint16Array(Uy),
          Py = new Float32Array(hy, Wy);
        let oy = 0;
        for (let By = 0; By < bb; By++)
          for (let bb = 0; bb < yb; bb++) cb[oy] = (0, Zy.k)(Py[oy]), cb[oy + 1] = (0, Zy.k)(Py[oy + 1]), cb[oy + 2] = (0, Zy.k)(Py[oy + 2]), sy.StoreLODInAlphaChannel ? cb[oy + 3] = (0, Zy.k)(fy) : cb[oy + 3] = (0, Zy.k)(Py[oy + 3]), oy += 4;
        return cb
      }
      static _GetFloatAsUIntRGBAArrayBuffer(yb, bb, Wy, hy, fy, Zy) {
        const cb = new Uint8Array(hy),
          Py = new Float32Array(fy, Wy);
        let oy = 0;
        for (let By = 0; By < bb; By++)
          for (let bb = 0; bb < yb; bb++) {
            const Wy = 4 * (bb + By * yb);
            cb[oy] = 255 * (0, Uy.Clamp)(Py[Wy]), cb[oy + 1] = 255 * (0, Uy.Clamp)(Py[Wy + 1]), cb[oy + 2] = 255 * (0, Uy.Clamp)(Py[Wy + 2]), sy.StoreLODInAlphaChannel ? cb[oy + 3] = Zy : cb[oy + 3] = 255 * (0, Uy.Clamp)(Py[Wy + 3]), oy += 4
          }
        return cb
      }
      static _GetHalfFloatAsUIntRGBAArrayBuffer(yb, bb, Wy, hy, fy, cb) {
        const Py = new Uint8Array(hy),
          oy = new Uint16Array(fy, Wy);
        let By = 0;
        for (let Ky = 0; Ky < bb; Ky++)
          for (let bb = 0; bb < yb; bb++) {
            const Wy = 4 * (bb + Ky * yb);
            Py[By] = 255 * (0, Uy.Clamp)((0, Zy.d)(oy[Wy])), Py[By + 1] = 255 * (0, Uy.Clamp)((0, Zy.d)(oy[Wy + 1])), Py[By + 2] = 255 * (0, Uy.Clamp)((0, Zy.d)(oy[Wy + 2])), sy.StoreLODInAlphaChannel ? Py[By + 3] = cb : Py[By + 3] = 255 * (0, Uy.Clamp)((0, Zy.d)(oy[Wy + 3])), By += 4
          }
        return Py
      }
      static _GetRGBAArrayBuffer(yb, bb, Wy, Uy, hy, fy, Zy, cb, Py) {
        const oy = new Uint8Array(Uy),
          By = new Uint8Array(hy, Wy);
        let Ky = 0;
        for (let ey = 0; ey < bb; ey++)
          for (let bb = 0; bb < yb; bb++) {
            const Wy = 4 * (bb + ey * yb);
            oy[Ky] = By[Wy + fy], oy[Ky + 1] = By[Wy + Zy], oy[Ky + 2] = By[Wy + cb], oy[Ky + 3] = By[Wy + Py], Ky += 4
          }
        return oy
      }
      static _ExtractLongWordOrder(yb) {
        return 0 === yb || 255 === yb || -16777216 === yb ? 0 : 1 + sy._ExtractLongWordOrder(yb >> 8)
      }
      static _GetRGBArrayBuffer(yb, bb, Wy, Uy, hy, fy, Zy, cb) {
        const Py = new Uint8Array(Uy),
          oy = new Uint8Array(hy, Wy);
        let By = 0;
        for (let Ky = 0; Ky < bb; Ky++)
          for (let bb = 0; bb < yb; bb++) {
            const Wy = 3 * (bb + Ky * yb);
            Py[By] = oy[Wy + fy], Py[By + 1] = oy[Wy + Zy], Py[By + 2] = oy[Wy + cb], By += 3
          }
        return Py
      }
      static _GetLuminanceArrayBuffer(yb, bb, Wy, Uy, hy) {
        const fy = new Uint8Array(Uy),
          Zy = new Uint8Array(hy, Wy);
        let cb = 0;
        for (let Py = 0; Py < bb; Py++)
          for (let bb = 0; bb < yb; bb++) {
            const Wy = bb + Py * yb;
            fy[cb] = Zy[Wy], cb++
          }
        return fy
      }
      static UploadDDSLevels(yb, bb, Wy, Uy, Zy, Py) {
        let oy = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : -1,
          Sy = arguments.length > 7 ? arguments[7] : void 0,
          Ey = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          ly = null;
        Uy.sphericalPolynomial && (ly = []);
        const mb = !!yb.getCaps().s3tc;
        bb.generateMipMaps = Zy;
        const Cy = new Int32Array(Wy.buffer, Wy.byteOffset, 31);
        let Ty, Vy, Jy, gb, Gy, Oy, Ry, vb = 0,
          ib = 0,
          My = 1;
        if (542327876 !== Cy[0]) return void hy.b.Error("Invalid magic number in DDS header");
        if (!Uy.isFourCC && !Uy.isRGB && !Uy.isLuminance) return void hy.b.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
        if (Uy.isCompressed && !mb) return void hy.b.Error("Compressed textures are not supported on this platform.");
        let Yy = Cy[22];
        gb = Cy[1] + 4;
        let Xy = !1;
        if (Uy.isFourCC) switch (Ty = Cy[21], Ty) {
          case By:
            My = 8, ib = 33777;
            break;
          case Ky:
            My = 16, ib = 33778;
            break;
          case ey:
            My = 16, ib = 33779;
            break;
          case 113:
            Xy = !0, Yy = 64;
            break;
          case 116:
            Xy = !0, Yy = 128;
            break;
          case qb: {
            gb += 20;
            let yb = !1;
            switch (Uy.dxgiFormat) {
              case 10:
                Xy = !0, Yy = 64, yb = !0;
                break;
              case 2:
                Xy = !0, Yy = 128, yb = !0;
                break;
              case 88:
                Uy.isRGB = !0, Uy.isFourCC = !1, Yy = 32, yb = !0
            }
            if (yb) break
          }
          default:
            return void hy.b.Error(["Unsupported FourCC code:", (ny = Ty, String.fromCharCode(255 & ny, ny >> 8 & 255, ny >> 16 & 255, ny >> 24 & 255))])
        }
        var ny;
        const uy = sy._ExtractLongWordOrder(Cy[23]),
          rb = sy._ExtractLongWordOrder(Cy[24]),
          Hy = sy._ExtractLongWordOrder(Cy[25]),
          ab = sy._ExtractLongWordOrder(Cy[26]);
        Xy && (ib = yb._getRGBABufferInternalSizedFormat(Uy.textureType)), Oy = 1, Cy[2] & cb && !1 !== Zy && (Oy = Math.max(1, Cy[7]));
        const Fy = Sy || 0,
          py = yb.getCaps();
        for (let hy = Fy; hy < Py; hy++) {
          for (Vy = Cy[4], Jy = Cy[3], Ry = 0; Ry < Oy; ++Ry) {
            if (-1 === oy || oy === Ry) {
              const fy = -1 === oy ? Ry : 0;
              if (!Uy.isCompressed && Uy.isFourCC) {
                bb.format = 5, vb = Vy * Jy * 4;
                let Uy = null;
                if (yb._badOS || yb._badDesktopOS || !py.textureHalfFloat && !py.textureFloat) 128 === Yy ? (Uy = sy._GetFloatAsUIntRGBAArrayBuffer(Vy, Jy, Wy.byteOffset + gb, vb, Wy.buffer, fy), ly && 0 == fy && ly.push(sy._GetFloatRGBAArrayBuffer(Vy, Jy, Wy.byteOffset + gb, vb, Wy.buffer, fy))) : 64 === Yy && (Uy = sy._GetHalfFloatAsUIntRGBAArrayBuffer(Vy, Jy, Wy.byteOffset + gb, vb, Wy.buffer, fy), ly && 0 == fy && ly.push(sy._GetHalfFloatAsFloatRGBAArrayBuffer(Vy, Jy, Wy.byteOffset + gb, vb, Wy.buffer, fy))), bb.type = 0;
                else {
                  const yb = py.textureFloat && (Ey && py.textureFloatLinearFiltering || !Ey),
                    hy = py.textureHalfFloat && (Ey && py.textureHalfFloatLinearFiltering || !Ey),
                    Zy = (128 === Yy || 64 === Yy && !hy) && yb ? 1 : (64 === Yy || 128 === Yy && !yb) && hy ? 2 : 0;
                  let cb, Py = null;
                  if (128 === Yy) switch (Zy) {
                    case 1:
                      cb = sy._GetFloatRGBAArrayBuffer, Py = null;
                      break;
                    case 2:
                      cb = sy._GetFloatAsHalfFloatRGBAArrayBuffer, Py = sy._GetFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      cb = sy._GetFloatAsUIntRGBAArrayBuffer, Py = sy._GetFloatRGBAArrayBuffer
                  } else switch (Zy) {
                    case 1:
                      cb = sy._GetHalfFloatAsFloatRGBAArrayBuffer, Py = null;
                      break;
                    case 2:
                      cb = sy._GetHalfFloatRGBAArrayBuffer, Py = sy._GetHalfFloatAsFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      cb = sy._GetHalfFloatAsUIntRGBAArrayBuffer, Py = sy._GetHalfFloatAsFloatRGBAArrayBuffer
                  }
                  bb.type = Zy, Uy = cb(Vy, Jy, Wy.byteOffset + gb, vb, Wy.buffer, fy), ly && 0 == fy && ly.push(Py ? Py(Vy, Jy, Wy.byteOffset + gb, vb, Wy.buffer, fy) : Uy)
                }
                Uy && yb._uploadDataToTextureDirectly(bb, Uy, hy, fy)
              } else if (Uy.isRGB) bb.type = 0, 24 === Yy ? (bb.format = 4, vb = Vy * Jy * 3, Gy = sy._GetRGBArrayBuffer(Vy, Jy, Wy.byteOffset + gb, vb, Wy.buffer, uy, rb, Hy), yb._uploadDataToTextureDirectly(bb, Gy, hy, fy)) : (bb.format = 5, vb = Vy * Jy * 4, Gy = sy._GetRGBAArrayBuffer(Vy, Jy, Wy.byteOffset + gb, vb, Wy.buffer, uy, rb, Hy, ab), yb._uploadDataToTextureDirectly(bb, Gy, hy, fy));
              else if (Uy.isLuminance) {
                const Uy = yb._getUnpackAlignement(),
                  Zy = Vy;
                vb = Math.floor((Vy + Uy - 1) / Uy) * Uy * (Jy - 1) + Zy, Gy = sy._GetLuminanceArrayBuffer(Vy, Jy, Wy.byteOffset + gb, vb, Wy.buffer), bb.format = 1, bb.type = 0, yb._uploadDataToTextureDirectly(bb, Gy, hy, fy)
              } else vb = Math.max(4, Vy) / 4 * Math.max(4, Jy) / 4 * My, Gy = new Uint8Array(Wy.buffer, Wy.byteOffset + gb, vb), bb.type = 0, yb._uploadCompressedDataToTextureDirectly(bb, ib, Vy, Jy, Gy, hy, fy)
            }
            gb += Yy ? Vy * Jy * (Yy / 8) : vb, Vy *= .5, Jy *= .5, Vy = Math.max(1, Vy), Jy = Math.max(1, Jy)
          }
          if (void 0 !== Sy) break
        }
        ly && ly.length > 0 ? Uy.sphericalPolynomial = fy.b.ConvertCubeMapToSphericalPolynomial({
          size: Cy[4],
          right: ly[0],
          left: ly[1],
          up: ly[2],
          down: ly[3],
          front: ly[4],
          back: ly[5],
          format: 5,
          type: 1,
          gammaSpace: !1
        }) : Uy.sphericalPolynomial = void 0
      }
    }
    sy.StoreLODInAlphaChannel = !1
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);