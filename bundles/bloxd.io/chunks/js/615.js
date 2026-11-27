export const id = 615;
export const ids = [615];
export const modules = {
  44963: (ee, ie, He) => {
    He.d(ie, {
      b: () => Je
    });
    var ye = He(37917),
      be = He(37938),
      Me = He(41104),
      Ke = He(37920),
      Ue = He(38022);
    class Fe {
      constructor(ee, ie, He, ye) {
        this.name = ee, this.worldAxisForNormal = ie, this.worldAxisForFileX = He, this.worldAxisForFileY = ye
      }
    }
    class Je {
      static _NearestPow2Floor(ee) {
        return ee <= 1 ? 1 : 1 << Math.floor(Math.log2(ee))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(ee) {
        if (!ee.isCube) return null;
        ee.Xx()?.Nf().flushFramebuffer();
        const ie = ee.getSize().width,
          He = ee._sphericalPolynomialTargetSize,
          ye = He > 0 ? this._NearestPow2Floor(He) : 0,
          be = !ee.noMipmap && !0 === ee._texture?.generateMipMaps,
          Me = ye > 0 && ye < ie && be,
          Ke = Me ? Math.max(0, Math.round(Math.log2(ie / ye))) : 0,
          Ue = Me ? Math.max(1, Math.floor(ie / Math.pow(2, Ke))) : ie,
          Fe = ee.readPixels(0, Ke, void 0, !1),
          Je = ee.readPixels(1, Ke, void 0, !1);
        let oe, Re;
        ee.isRenderTarget ? (oe = ee.readPixels(3, Ke, void 0, !1), Re = ee.readPixels(2, Ke, void 0, !1)) : (oe = ee.readPixels(2, Ke, void 0, !1), Re = ee.readPixels(3, Ke, void 0, !1));
        const ke = ee.readPixels(4, Ke, void 0, !1),
          qe = ee.readPixels(5, Ke, void 0, !1),
          fe = ee.gammaSpace,
          Te = ye > 0 && ye < ie && !Me;
        return new Promise((ee => {
          Promise.all([Je, Fe, oe, Re, ke, qe]).then((He => {
            let [be, Me, Ke, Fe, Je, oe] = He, Re = Ue;
            if (Te) {
              const ee = 4;
              be = this._DownsampleFace(be, ie, ye, ee), Me = this._DownsampleFace(Me, ie, ye, ee), Ke = this._DownsampleFace(Ke, ie, ye, ee), Fe = this._DownsampleFace(Fe, ie, ye, ee), Je = this._DownsampleFace(Je, ie, ye, ee), oe = this._DownsampleFace(oe, ie, ye, ee), Re = ye
            }
            const ke = {
              size: Re,
              right: Me,
              left: be,
              up: Ke,
              down: Fe,
              front: Je,
              back: oe,
              format: 5,
              type: be instanceof Float32Array ? 1 : 0,
              gammaSpace: fe
            };
            ee(this.ConvertCubeMapToSphericalPolynomial(ke))
          }))
        }))
      }
      static _AreaElement(ee, ie) {
        return Math.atan2(ee * ie, Math.sqrt(ee * ee + ie * ie + 1))
      }
      static _DownsampleFace(ee, ie, He, ye) {
        const be = ee instanceof Float32Array ? ee : Float32Array.from(ee),
          Me = He * He * ye,
          Ke = new Float32Array(Me),
          Ue = ie / He,
          Fe = 1 / (Ue * Ue);
        for (let oe = 0; oe < He; oe++) {
          const ee = Math.floor(oe * Ue),
            Me = Math.floor((oe + 1) * Ue);
          for (let Je = 0; Je < He; Je++) {
            const Re = Math.floor(Je * Ue),
              ke = Math.floor((Je + 1) * Ue),
              qe = (oe * He + Je) * ye;
            for (let He = 0; He < ye; He++) {
              let Ue = 0;
              for (let Ke = ee; Ke < Me; Ke++)
                for (let ee = Re; ee < ke; ee++) Ue += be[(Ke * ie + ee) * ye + He];
              Ke[qe + He] = Ue * Fe
            }
          }
        }
        if (ee instanceof Float32Array) return Ke;
        const Je = new(0, ee.constructor)(Me);
        for (let oe = 0; oe < Me; oe++) Je[oe] = Ke[oe] + .5 | 0;
        return Je
      }
      static ConvertCubeMapToSphericalPolynomial(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const He = ie > 0 ? this._NearestPow2Floor(ie) : 0;
        if (He > 0 && ee.size > He) {
          const ie = 5 === ee.format ? 4 : 3,
            ye = ["right", "left", "up", "down", "front", "back"],
            be = {};
          for (const Me of ye) be[Me] = this._DownsampleFace(ee[Me], ee.size, He, ie);
          ee = {
            ...ee,
            ...be,
            size: He
          }
        }
        const ye = new Me.c;
        let Fe = 0;
        const Je = 2 / ee.size,
          oe = Je,
          Re = .5 * Je,
          ke = Re - 1;
        for (let Me = 0; Me < 6; Me++) {
          const ie = this._FileFaces[Me],
            He = ee[ie.name];
          let qe = ke;
          const fe = 5 === ee.format ? 4 : 3;
          for (let Me = 0; Me < ee.size; Me++) {
            let Te = ke;
            for (let oe = 0; oe < ee.size; oe++) {
              const ke = ie.worldAxisForFileX.scale(Te).add(ie.worldAxisForFileY.scale(qe)).add(ie.worldAxisForNormal);
              ke.normalize();
              const pe = this._AreaElement(Te - Re, qe - Re) - this._AreaElement(Te - Re, qe + Re) - this._AreaElement(Te + Re, qe - Re) + this._AreaElement(Te + Re, qe + Re);
              let Xe = He[Me * ee.size * fe + oe * fe + 0],
                ze = He[Me * ee.size * fe + oe * fe + 1],
                Be = He[Me * ee.size * fe + oe * fe + 2];
              isNaN(Xe) && (Xe = 0), isNaN(ze) && (ze = 0), isNaN(Be) && (Be = 0), 0 === ee.type && (Xe /= 255, ze /= 255, Be /= 255), ee.gammaSpace && (Xe = Math.pow((0, be.Clamp)(Xe), Ke.h), ze = Math.pow((0, be.Clamp)(ze), Ke.h), Be = Math.pow((0, be.Clamp)(Be), Ke.h));
              const Ee = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const ee = Math.max(Xe, ze, Be);
                if (ee > Ee) {
                  const ie = Ee / ee;
                  Xe *= ie, ze *= ie, Be *= ie
                }
              } else Xe = (0, be.Clamp)(Xe, 0, Ee), ze = (0, be.Clamp)(ze, 0, Ee), Be = (0, be.Clamp)(Be, 0, Ee);
              const ge = new Ue.c(Xe, ze, Be);
              ye.addLight(ke, ge, pe), Fe += pe, Te += Je
            }
            qe += oe
          }
        }
        const qe = 6 * (4 * Math.PI) / 6 / Fe;
        return ye.scaleInPlace(qe), ye.convertIncidentRadianceToIrradiance(), ye.convertIrradianceToLambertianRadiance(), Me.e.FromHarmonics(ye)
      }
    }
    Je._FileFaces = [new Fe("right", new ye.p(1, 0, 0), new ye.p(0, 0, -1), new ye.p(0, -1, 0)), new Fe("left", new ye.p(-1, 0, 0), new ye.p(0, 0, 1), new ye.p(0, -1, 0)), new Fe("up", new ye.p(0, 1, 0), new ye.p(1, 0, 0), new ye.p(0, 0, 1)), new Fe("down", new ye.p(0, -1, 0), new ye.p(1, 0, 0), new ye.p(0, 0, -1)), new Fe("front", new ye.p(0, 0, 1), new ye.p(1, 0, 0), new ye.p(0, -1, 0)), new Fe("back", new ye.p(0, 0, -1), new ye.p(-1, 0, 0), new ye.p(0, -1, 0))], Je.MAX_HDRI_VALUE = 4096, Je.PRESERVE_CLAMPED_COLORS = !1
  },
  44954: (ee, ie, He) => {
    He.d(ie, {
      DDSTools: () => fe
    });
    var ye = He(37938),
      be = He(39467),
      Me = He(44963),
      Ke = He(41178);
    const Ue = 131072,
      Fe = 131072;

    function Je(ee) {
      return ee.charCodeAt(0) + (ee.charCodeAt(1) << 8) + (ee.charCodeAt(2) << 16) + (ee.charCodeAt(3) << 24)
    }
    const oe = Je("DXT1"),
      Re = Je("DXT3"),
      ke = Je("DXT5"),
      qe = Je("DX10");
    class fe {
      static GetDDSInfo(ee) {
        const ie = new Int32Array(ee.buffer, ee.byteOffset, 31),
          He = new Int32Array(ee.buffer, ee.byteOffset, 35);
        let ye = 1;
        ie[2] & Ue && (ye = Math.max(1, ie[7]));
        const be = ie[21],
          Me = be === qe ? He[32] : 0;
        let Ke = 0;
        switch (be) {
          case 113:
            Ke = 2;
            break;
          case 116:
            Ke = 1;
            break;
          case qe:
            if (10 === Me) {
              Ke = 2;
              break
            }
            if (2 === Me) {
              Ke = 1;
              break
            }
        }
        return {
          width: ie[4],
          height: ie[3],
          mipmapCount: ye,
          isFourCC: 4 === (4 & ie[20]),
          isRGB: 64 === (64 & ie[20]),
          isLuminance: (ie[20] & Fe) === Fe,
          isCube: 512 === (512 & ie[28]),
          isCompressed: be === oe || be === Re || be === ke,
          dxgiFormat: Me,
          textureType: Ke
        }
      }
      static _GetHalfFloatAsFloatRGBAArrayBuffer(ee, ie, He, ye, be, Me) {
        const Ue = new Float32Array(ye),
          Fe = new Uint16Array(be, He);
        let Je = 0;
        for (let oe = 0; oe < ie; oe++)
          for (let ie = 0; ie < ee; ie++) {
            const He = 4 * (ie + oe * ee);
            Ue[Je] = (0, Ke.d)(Fe[He]), Ue[Je + 1] = (0, Ke.d)(Fe[He + 1]), Ue[Je + 2] = (0, Ke.d)(Fe[He + 2]), fe.StoreLODInAlphaChannel ? Ue[Je + 3] = Me : Ue[Je + 3] = (0, Ke.d)(Fe[He + 3]), Je += 4
          }
        return Ue
      }
      static _GetHalfFloatRGBAArrayBuffer(ee, ie, He, ye, be, Me) {
        if (fe.StoreLODInAlphaChannel) {
          const Ue = new Uint16Array(ye),
            Fe = new Uint16Array(be, He);
          let Je = 0;
          for (let He = 0; He < ie; He++)
            for (let ie = 0; ie < ee; ie++) {
              const ye = 4 * (ie + He * ee);
              Ue[Je] = Fe[ye], Ue[Je + 1] = Fe[ye + 1], Ue[Je + 2] = Fe[ye + 2], Ue[Je + 3] = (0, Ke.j)(Me), Je += 4
            }
          return Ue
        }
        return new Uint16Array(be, He, ye)
      }
      static _GetFloatRGBAArrayBuffer(ee, ie, He, ye, be, Me) {
        if (fe.StoreLODInAlphaChannel) {
          const Ke = new Float32Array(ye),
            Ue = new Float32Array(be, He);
          let Fe = 0;
          for (let He = 0; He < ie; He++)
            for (let ie = 0; ie < ee; ie++) {
              const ye = 4 * (ie + He * ee);
              Ke[Fe] = Ue[ye], Ke[Fe + 1] = Ue[ye + 1], Ke[Fe + 2] = Ue[ye + 2], Ke[Fe + 3] = Me, Fe += 4
            }
          return Ke
        }
        return new Float32Array(be, He, ye)
      }
      static _GetFloatAsHalfFloatRGBAArrayBuffer(ee, ie, He, ye, be, Me) {
        const Ue = new Uint16Array(ye),
          Fe = new Float32Array(be, He);
        let Je = 0;
        for (let oe = 0; oe < ie; oe++)
          for (let ie = 0; ie < ee; ie++) Ue[Je] = (0, Ke.j)(Fe[Je]), Ue[Je + 1] = (0, Ke.j)(Fe[Je + 1]), Ue[Je + 2] = (0, Ke.j)(Fe[Je + 2]), fe.StoreLODInAlphaChannel ? Ue[Je + 3] = (0, Ke.j)(Me) : Ue[Je + 3] = (0, Ke.j)(Fe[Je + 3]), Je += 4;
        return Ue
      }
      static _GetFloatAsUIntRGBAArrayBuffer(ee, ie, He, be, Me, Ke) {
        const Ue = new Uint8Array(be),
          Fe = new Float32Array(Me, He);
        let Je = 0;
        for (let oe = 0; oe < ie; oe++)
          for (let ie = 0; ie < ee; ie++) {
            const He = 4 * (ie + oe * ee);
            Ue[Je] = 255 * (0, ye.Clamp)(Fe[He]), Ue[Je + 1] = 255 * (0, ye.Clamp)(Fe[He + 1]), Ue[Je + 2] = 255 * (0, ye.Clamp)(Fe[He + 2]), fe.StoreLODInAlphaChannel ? Ue[Je + 3] = Ke : Ue[Je + 3] = 255 * (0, ye.Clamp)(Fe[He + 3]), Je += 4
          }
        return Ue
      }
      static _GetHalfFloatAsUIntRGBAArrayBuffer(ee, ie, He, be, Me, Ue) {
        const Fe = new Uint8Array(be),
          Je = new Uint16Array(Me, He);
        let oe = 0;
        for (let Re = 0; Re < ie; Re++)
          for (let ie = 0; ie < ee; ie++) {
            const He = 4 * (ie + Re * ee);
            Fe[oe] = 255 * (0, ye.Clamp)((0, Ke.d)(Je[He])), Fe[oe + 1] = 255 * (0, ye.Clamp)((0, Ke.d)(Je[He + 1])), Fe[oe + 2] = 255 * (0, ye.Clamp)((0, Ke.d)(Je[He + 2])), fe.StoreLODInAlphaChannel ? Fe[oe + 3] = Ue : Fe[oe + 3] = 255 * (0, ye.Clamp)((0, Ke.d)(Je[He + 3])), oe += 4
          }
        return Fe
      }
      static _GetRGBAArrayBuffer(ee, ie, He, ye, be, Me, Ke, Ue, Fe) {
        const Je = new Uint8Array(ye),
          oe = new Uint8Array(be, He);
        let Re = 0;
        for (let ke = 0; ke < ie; ke++)
          for (let ie = 0; ie < ee; ie++) {
            const He = 4 * (ie + ke * ee);
            Je[Re] = oe[He + Me], Je[Re + 1] = oe[He + Ke], Je[Re + 2] = oe[He + Ue], Je[Re + 3] = oe[He + Fe], Re += 4
          }
        return Je
      }
      static _ExtractLongWordOrder(ee) {
        return 0 === ee || 255 === ee || -16777216 === ee ? 0 : 1 + fe._ExtractLongWordOrder(ee >> 8)
      }
      static _GetRGBArrayBuffer(ee, ie, He, ye, be, Me, Ke, Ue) {
        const Fe = new Uint8Array(ye),
          Je = new Uint8Array(be, He);
        let oe = 0;
        for (let Re = 0; Re < ie; Re++)
          for (let ie = 0; ie < ee; ie++) {
            const He = 3 * (ie + Re * ee);
            Fe[oe] = Je[He + Me], Fe[oe + 1] = Je[He + Ke], Fe[oe + 2] = Je[He + Ue], oe += 3
          }
        return Fe
      }
      static _GetLuminanceArrayBuffer(ee, ie, He, ye, be) {
        const Me = new Uint8Array(ye),
          Ke = new Uint8Array(be, He);
        let Ue = 0;
        for (let Fe = 0; Fe < ie; Fe++)
          for (let ie = 0; ie < ee; ie++) {
            const He = ie + Fe * ee;
            Me[Ue] = Ke[He], Ue++
          }
        return Me
      }
      static UploadDDSLevels(ee, ie, He, ye, Ke, Fe) {
        let Je = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : -1,
          Te = arguments.length > 7 ? arguments[7] : void 0,
          pe = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          Xe = null;
        ye.sphericalPolynomial && (Xe = []);
        const ze = !!ee.getCaps().s3tc;
        ie.generateMipMaps = Ke;
        const Be = new Int32Array(He.buffer, He.byteOffset, 31);
        let Ee, ge, Oe, de, We, te, Ze, we = 0,
          De = 0,
          Pe = 1;
        if (542327876 !== Be[0]) return void be.e.Error("Invalid magic number in DDS header");
        if (!ye.isFourCC && !ye.isRGB && !ye.isLuminance) return void be.e.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
        if (ye.isCompressed && !ze) return void be.e.Error("Compressed textures are not supported on this platform.");
        let Ae = Be[22];
        de = Be[1] + 4;
        let Ye = !1;
        if (ye.isFourCC) switch (Ee = Be[21], Ee) {
          case oe:
            Pe = 8, De = 33777;
            break;
          case Re:
            Pe = 16, De = 33778;
            break;
          case ke:
            Pe = 16, De = 33779;
            break;
          case 113:
            Ye = !0, Ae = 64;
            break;
          case 116:
            Ye = !0, Ae = 128;
            break;
          case qe: {
            de += 20;
            let ee = !1;
            switch (ye.dxgiFormat) {
              case 10:
                Ye = !0, Ae = 64, ee = !0;
                break;
              case 2:
                Ye = !0, Ae = 128, ee = !0;
                break;
              case 88:
                ye.isRGB = !0, ye.isFourCC = !1, Ae = 32, ee = !0
            }
            if (ee) break
          }
          default:
            return void be.e.Error(["Unsupported FourCC code:", (Ve = Ee, String.fromCharCode(255 & Ve, Ve >> 8 & 255, Ve >> 16 & 255, Ve >> 24 & 255))])
        }
        var Ve;
        const ae = fe._ExtractLongWordOrder(Be[23]),
          ce = fe._ExtractLongWordOrder(Be[24]),
          xe = fe._ExtractLongWordOrder(Be[25]),
          Le = fe._ExtractLongWordOrder(Be[26]);
        Ye && (De = ee._getRGBABufferInternalSizedFormat(ye.textureType)), te = 1, Be[2] & Ue && !1 !== Ke && (te = Math.max(1, Be[7]));
        const Ce = Te || 0,
          ve = ee.getCaps();
        for (let be = Ce; be < Fe; be++) {
          for (ge = Be[4], Oe = Be[3], Ze = 0; Ze < te; ++Ze) {
            if (-1 === Je || Je === Ze) {
              const Me = -1 === Je ? Ze : 0;
              if (!ye.isCompressed && ye.isFourCC) {
                ie.format = 5, we = ge * Oe * 4;
                let ye = null;
                if (ee._badOS || ee._badDesktopOS || !ve.textureHalfFloat && !ve.textureFloat) 128 === Ae ? (ye = fe._GetFloatAsUIntRGBAArrayBuffer(ge, Oe, He.byteOffset + de, we, He.buffer, Me), Xe && 0 == Me && Xe.push(fe._GetFloatRGBAArrayBuffer(ge, Oe, He.byteOffset + de, we, He.buffer, Me))) : 64 === Ae && (ye = fe._GetHalfFloatAsUIntRGBAArrayBuffer(ge, Oe, He.byteOffset + de, we, He.buffer, Me), Xe && 0 == Me && Xe.push(fe._GetHalfFloatAsFloatRGBAArrayBuffer(ge, Oe, He.byteOffset + de, we, He.buffer, Me))), ie.type = 0;
                else {
                  const ee = ve.textureFloat && (pe && ve.textureFloatLinearFiltering || !pe),
                    be = ve.textureHalfFloat && (pe && ve.textureHalfFloatLinearFiltering || !pe),
                    Ke = (128 === Ae || 64 === Ae && !be) && ee ? 1 : (64 === Ae || 128 === Ae && !ee) && be ? 2 : 0;
                  let Ue, Fe = null;
                  if (128 === Ae) switch (Ke) {
                    case 1:
                      Ue = fe._GetFloatRGBAArrayBuffer, Fe = null;
                      break;
                    case 2:
                      Ue = fe._GetFloatAsHalfFloatRGBAArrayBuffer, Fe = fe._GetFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      Ue = fe._GetFloatAsUIntRGBAArrayBuffer, Fe = fe._GetFloatRGBAArrayBuffer
                  } else switch (Ke) {
                    case 1:
                      Ue = fe._GetHalfFloatAsFloatRGBAArrayBuffer, Fe = null;
                      break;
                    case 2:
                      Ue = fe._GetHalfFloatRGBAArrayBuffer, Fe = fe._GetHalfFloatAsFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      Ue = fe._GetHalfFloatAsUIntRGBAArrayBuffer, Fe = fe._GetHalfFloatAsFloatRGBAArrayBuffer
                  }
                  ie.type = Ke, ye = Ue(ge, Oe, He.byteOffset + de, we, He.buffer, Me), Xe && 0 == Me && Xe.push(Fe ? Fe(ge, Oe, He.byteOffset + de, we, He.buffer, Me) : ye)
                }
                ye && ee._uploadDataToTextureDirectly(ie, ye, be, Me)
              } else if (ye.isRGB) ie.type = 0, 24 === Ae ? (ie.format = 4, we = ge * Oe * 3, We = fe._GetRGBArrayBuffer(ge, Oe, He.byteOffset + de, we, He.buffer, ae, ce, xe), ee._uploadDataToTextureDirectly(ie, We, be, Me)) : (ie.format = 5, we = ge * Oe * 4, We = fe._GetRGBAArrayBuffer(ge, Oe, He.byteOffset + de, we, He.buffer, ae, ce, xe, Le), ee._uploadDataToTextureDirectly(ie, We, be, Me));
              else if (ye.isLuminance) {
                const ye = ee._getUnpackAlignement(),
                  Ke = ge;
                we = Math.floor((ge + ye - 1) / ye) * ye * (Oe - 1) + Ke, We = fe._GetLuminanceArrayBuffer(ge, Oe, He.byteOffset + de, we, He.buffer), ie.format = 1, ie.type = 0, ee._uploadDataToTextureDirectly(ie, We, be, Me)
              } else we = Math.max(4, ge) / 4 * Math.max(4, Oe) / 4 * Pe, We = new Uint8Array(He.buffer, He.byteOffset + de, we), ie.type = 0, ee._uploadCompressedDataToTextureDirectly(ie, De, ge, Oe, We, be, Me)
            }
            de += Ae ? ge * Oe * (Ae / 8) : we, ge *= .5, Oe *= .5, ge = Math.max(1, ge), Oe = Math.max(1, Oe)
          }
          if (void 0 !== Te) break
        }
        Xe && Xe.length > 0 ? ye.sphericalPolynomial = Me.b.ConvertCubeMapToSphericalPolynomial({
          size: Be[4],
          right: Xe[0],
          left: Xe[1],
          up: Xe[2],
          down: Xe[3],
          front: Xe[4],
          back: Xe[5],
          format: 5,
          type: 1,
          gammaSpace: !1
        }) : ye.sphericalPolynomial = void 0
      }
    }
    fe.StoreLODInAlphaChannel = !1
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);