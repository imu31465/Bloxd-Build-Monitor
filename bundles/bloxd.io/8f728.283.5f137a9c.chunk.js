export const id = 283;
export const ids = [283];
export const modules = {
  39731: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      _ENVTextureLoader: () => Lc
    });
    var Vc = nc(37992),
      Ic = nc(35756),
      rB = nc(35785),
      uc = nc(38029),
      sc = nc(37895),
      Mc = nc(38033),
      Pc = (nc(38141), nc(39733)),
      qB = nc(37191),
      Oc = (nc(39741), nc(39770), nc(38116));
    const Tc = "image/png",
      fc = [134, 22, 135, 150, 246, 214, 150, 54];

    function mB(cB) {
      const Bc = new DataView(cB.buffer, cB.byteOffset, cB.byteLength);
      let nc = 0;
      for (let uc = 0; uc < fc.length; uc++)
        if (Bc.getUint8(nc++) !== fc[uc]) return qB.c.Error("Not a babylon environment map"), null;
      let Vc, Ic = "";
      for (; Vc = Bc.getUint8(nc++);) Ic += String.fromCharCode(Vc);
      let rB = JSON.parse(Ic);
      return rB = ec(rB), rB.binaryDataPosition = nc, rB.specular && (rB.specular.lodGenerationScale = rB.specular.lodGenerationScale || .8), rB
    }

    function ec(cB) {
      if (cB.version > 2) throw new Error(`Unsupported babylon environment map version "${cB.version}". Latest supported version is "2".`);
      return 2 === cB.version ? cB : cB = {
        ...cB,
        version: 2,
        imageType: Tc
      }
    }

    function tB(cB, Bc) {
      const nc = (Bc = ec(Bc)).specular;
      let Vc = Math.log2(Bc.width);
      if (Vc = Math.round(Vc) + 1, nc.mipmaps.length !== 6 * Vc) throw new Error(`Unsupported specular mipmaps number "${nc.mipmaps.length}"`);
      const Ic = new Array(Vc);
      for (let rB = 0; rB < Vc; rB++) {
        Ic[rB] = new Array(6);
        for (let Vc = 0; Vc < 6; Vc++) {
          const uc = nc.mipmaps[6 * rB + Vc];
          Ic[rB][Vc] = new Uint8Array(cB.buffer, cB.byteOffset + Bc.binaryDataPosition + uc.position, uc.length)
        }
      }
      return Ic
    }

    function Sc(cB, Bc) {
      Bc = ec(Bc);
      const nc = new Array(6),
        Vc = Bc.irradiance?.irradianceTexture;
      if (Vc) {
        if (6 !== Vc.faces.length) throw new Error(`Incorrect irradiance texture faces number "${Vc.faces.length}"`);
        for (let Ic = 0; Ic < 6; Ic++) {
          const rB = Vc.faces[Ic];
          nc[Ic] = new Uint8Array(cB.buffer, cB.byteOffset + Bc.binaryDataPosition + rB.position, rB.length)
        }
      }
      return nc
    }

    function yB(cB, Bc, nc) {
      const Vc = (nc = ec(nc)).specular;
      if (!Vc) return Promise.resolve([]);
      cB._lodGenerationScale = Vc.lodGenerationScale;
      const rB = [],
        uc = tB(Bc, nc);
      rB.push(pc(cB, uc, nc.imageType));
      const sc = nc.irradiance?.irradianceTexture;
      if (sc) {
        const Vc = Sc(Bc, nc);
        let uc = null;
        nc.irradiance?.irradianceTexture?.dominantDirection && (uc = Ic.p.FromArray(nc.irradiance.irradianceTexture.dominantDirection)), rB.push(hc(cB, Vc, sc.size, nc.imageType, uc))
      }
      return Promise.all(rB)
    }
    async function zB(cB, Bc, nc, Vc, Ic, rB, uc, sc, Mc, Pc, qB) {
      return await new Promise(((Oc, Tc) => {
        if (nc) {
          const nc = Bc.createTexture(null, !0, !0, null, 1, null, (cB => {
            Tc(cB)
          }), cB);
          Vc?.onEffectCreatedObservable.addOnce((sc => {
            sc.executeWhenCompiled((() => {
              Vc.externalTextureSamplerBinding = !0, Vc.onApply = Vc => {
                Vc._bindTexture("textureSampler", nc), Vc.setFloat2("scale", 1, Bc._features.needsInvertingBitmap && cB instanceof ImageBitmap ? -1 : 1)
              }, Bc.scenes.length && (Bc.scenes[0].postProcessManager.directRender([Vc], Pc, !0, rB, uc), Bc.restoreDefaultFramebuffer(), nc.dispose(), URL.revokeObjectURL(Ic), Oc())
            }))
          }))
        } else {
          if (Bc._uploadImageToTexture(qB, cB, rB, uc), sc) {
            const nc = Mc[uc];
            nc && Bc._uploadImageToTexture(nc._texture, cB, rB, 0)
          }
          Oc()
        }
      }))
    }
    async function pc(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Tc;
      const Vc = cB.RV();
      cB.format = 5, cB.type = 0, cB.generateMipMaps = !0, cB._cachedAnisotropicFilteringLevel = null, Vc.updateTextureSamplingMode(3, cB), await aB(cB, Bc, !0, nc), cB.isReady = !0
    }
    async function hc(cB, Bc, nc) {
      let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Tc,
        Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const rB = cB.RV(),
        uc = new sc.e(rB, 5),
        Pc = new Mc.b(rB, uc);
      cB._irradianceTexture = Pc, Pc._dominantDirection = Ic, uc.isCube = !0, uc.format = 5, uc.type = 0, uc.generateMipMaps = !0, uc._cachedAnisotropicFilteringLevel = null, uc.generateMipMaps = !0, uc.width = nc, uc.height = nc, rB.updateTextureSamplingMode(3, uc), await aB(uc, [Bc], !1, Vc), rB.generateMipMapsForCubemap(uc), uc.isReady = !0
    }
    async function aB(cB, Bc, Ic) {
      let uc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Tc;
      if (!(0, Vc.g)(cB.width)) throw new Error("Texture size must be a power of two");
      const qB = (0, rB.ILog2)(cB.width) + 1,
        fc = cB.RV();
      let mB = !1,
        ec = !1,
        tB = null,
        Sc = null,
        yB = null;
      const pc = fc.getCaps();
      pc.textureLOD ? fc._features.supportRenderAndCopyToLodForFloatTextures ? pc.textureHalfFloatRender && pc.textureHalfFloatLinearFiltering ? (mB = !0, cB.type = 2) : pc.textureFloatRender && pc.textureFloatLinearFiltering && (mB = !0, cB.type = 1) : mB = !1 : (mB = !1, ec = Ic);
      let hc = 0;
      if (mB) fc.isWebGPU ? (hc = 1, await nc.e(317).then((() => nc(59297)))) : await nc.e(299).then((() => nc(59306))), tB = new Pc.b("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, fc, !1, void 0, cB.type, void 0, null, !1, void 0, hc), cB._isRGBD = !1, cB.invertY = !1, Sc = fc.createRenderTargetCubeTexture(cB.width, {
        generateDepthBuffer: !1,
        generateMipMaps: !0,
        generateStencilBuffer: !1,
        samplingMode: 3,
        type: cB.type,
        format: 5
      });
      else if (cB._isRGBD = !0, cB.invertY = !0, ec) {
        const Bc = 3;
        yB = {};
        const nc = cB._lodGenerationScale,
          Vc = cB._lodGenerationOffset;
        for (let Ic = 0; Ic < Bc; Ic++) {
          const rB = (qB - 1) * nc + Vc,
            uc = Vc + (rB - Vc) * (1 - Ic / (Bc - 1)),
            Pc = Math.round(Math.min(Math.max(uc, 0), rB)),
            Oc = new sc.e(fc, 2);
          Oc.isCube = !0, Oc.invertY = !0, Oc.generateMipMaps = !1, fc.updateTextureSamplingMode(2, Oc);
          const Tc = new Mc.b(null);
          switch (Tc._isCube = !0, Tc._texture = Oc, yB[Pc] = Tc, Ic) {
            case 0:
              cB._lodTextureLow = Tc;
              break;
            case 1:
              cB._lodTextureMid = Tc;
              break;
            case 2:
              cB._lodTextureHigh = Tc
          }
        }
      }
      const aB = [];
      for (let nc = 0; nc < Bc.length; nc++)
        for (let Vc = 0; Vc < 6; Vc++) {
          const Ic = Bc[nc][Vc],
            rB = (0, Oc.k)(Ic),
            sc = new Blob([rB], {
              type: uc
            }),
            Mc = URL.createObjectURL(sc);
          let Pc;
          if (fc._features.forceBitmapOverHTMLImageElement) Pc = fc.createImageBitmap(sc, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          }).then((async Bc => await zB(Bc, fc, mB, tB, Mc, Vc, nc, ec, yB, Sc, cB)));
          else {
            const Bc = new Image;
            Bc.src = Mc, Pc = new Promise(((Ic, rB) => {
              Bc.onload = () => {
                zB(Bc, fc, mB, tB, Mc, Vc, nc, ec, yB, Sc, cB).then((() => Ic())).catch((cB => {
                  rB(cB)
                }))
              }, Bc.onerror = cB => {
                rB(cB)
              }
            }))
          }
          aB.push(Pc)
        }
      if (await Promise.all(aB), Bc.length < qB) {
        let nc;
        const Vc = Math.pow(2, qB - 1 - Bc.length),
          Ic = Vc * Vc * 4;
        switch (cB.type) {
          case 0:
            nc = new Uint8Array(Ic);
            break;
          case 2:
            nc = new Uint16Array(Ic);
            break;
          case 1:
            nc = new Float32Array(Ic)
        }
        for (let rB = Bc.length; rB < qB; rB++)
          for (let Bc = 0; Bc < 6; Bc++) fc._uploadArrayBufferViewToTexture(Sc?.texture || cB, nc, Bc, rB)
      }
      if (Sc) {
        const Bc = cB._irradianceTexture;
        cB._irradianceTexture = null, fc._releaseTexture(cB), Sc._swapAndDie(cB), cB._irradianceTexture = Bc
      }
      tB && tB.dispose(), ec && (cB._lodTextureHigh && cB._lodTextureHigh._texture && (cB._lodTextureHigh._texture.isReady = !0), cB._lodTextureMid && cB._lodTextureMid._texture && (cB._lodTextureMid._texture.isReady = !0), cB._lodTextureLow && cB._lodTextureLow._texture && (cB._lodTextureLow._texture.isReady = !0))
    }

    function lc(cB, Bc) {
      const nc = (Bc = ec(Bc)).irradiance;
      if (!nc) return;
      const Vc = new uc.g;
      Ic.p.FromArrayToRef(nc.x, 0, Vc.x), Ic.p.FromArrayToRef(nc.y, 0, Vc.y), Ic.p.FromArrayToRef(nc.z, 0, Vc.z), Ic.p.FromArrayToRef(nc.xx, 0, Vc.xx), Ic.p.FromArrayToRef(nc.yy, 0, Vc.yy), Ic.p.FromArrayToRef(nc.zz, 0, Vc.zz), Ic.p.FromArrayToRef(nc.yz, 0, Vc.yz), Ic.p.FromArrayToRef(nc.zx, 0, Vc.zx), Ic.p.FromArrayToRef(nc.xy, 0, Vc.xy), cB._sphericalPolynomial = Vc
    }
    var Yc = nc(39778);
    class Lc {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(cB, Bc, nc, Vc, Ic) {
        if (Array.isArray(cB)) return;
        const rB = mB(cB);
        if (rB) {
          Bc.width = rB.width, Bc.height = rB.width;
          try {
            (0, Yc.e)(), lc(Bc, rB), yB(Bc, cB, rB).then((() => {
              Bc.isReady = !0, Bc.onLoadedObservable.notifyObservers(Bc), Bc.onLoadedObservable.clear(), Vc && Vc()
            }), (cB => {
              Ic?.("Can not upload environment levels", cB)
            }))
          } catch (uc) {
            Ic?.("Can not upload environment file", uc)
          }
        } else Ic && Ic("Can not parse the environment file", null)
      }
      loadData() {
        throw ".env not supported in 2d."
      }
    }
  },
  39778: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => uc
    });
    var Vc = nc(39709),
      Ic = nc(38033);
    let rB = !1;

    function uc() {
      rB || (rB = !0, Ic.b.prototype._sphericalPolynomialTargetSize = 0, Ic.b.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(Ic.b.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = Vc.c.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((cB => {
              this._texture._sphericalPolynomial = cB, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(cB) {
          this._texture && (this._texture._sphericalPolynomial = cB)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  39709: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Pc
    });
    var Vc = nc(35756),
      Ic = nc(35785),
      rB = nc(38029),
      uc = nc(35759),
      sc = nc(35815);
    class Mc {
      constructor(cB, Bc, nc, Vc) {
        this.name = cB, this.worldAxisForNormal = Bc, this.worldAxisForFileX = nc, this.worldAxisForFileY = Vc
      }
    }
    class Pc {
      static _NearestPow2Floor(cB) {
        return cB <= 1 ? 1 : 1 << Math.floor(Math.log2(cB))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(cB) {
        if (!cB.isCube) return null;
        cB.knc()?.RV().flushFramebuffer();
        const Bc = cB.getSize().width,
          nc = cB._sphericalPolynomialTargetSize,
          Vc = nc > 0 ? this._NearestPow2Floor(nc) : 0,
          Ic = !cB.noMipmap && !0 === cB._texture?.generateMipMaps,
          rB = Vc > 0 && Vc < Bc && Ic,
          uc = rB ? Math.max(0, Math.round(Math.log2(Bc / Vc))) : 0,
          sc = rB ? Math.max(1, Math.floor(Bc / Math.pow(2, uc))) : Bc,
          Mc = cB.readPixels(0, uc, void 0, !1),
          Pc = cB.readPixels(1, uc, void 0, !1);
        let qB, Oc;
        cB.isRenderTarget ? (qB = cB.readPixels(3, uc, void 0, !1), Oc = cB.readPixels(2, uc, void 0, !1)) : (qB = cB.readPixels(2, uc, void 0, !1), Oc = cB.readPixels(3, uc, void 0, !1));
        const Tc = cB.readPixels(4, uc, void 0, !1),
          fc = cB.readPixels(5, uc, void 0, !1),
          mB = cB.gammaSpace,
          ec = Vc > 0 && Vc < Bc && !rB;
        return new Promise((cB => {
          Promise.all([Pc, Mc, qB, Oc, Tc, fc]).then((nc => {
            let [Ic, rB, uc, Mc, Pc, qB] = nc, Oc = sc;
            if (ec) {
              const cB = 4;
              Ic = this._DownsampleFace(Ic, Bc, Vc, cB), rB = this._DownsampleFace(rB, Bc, Vc, cB), uc = this._DownsampleFace(uc, Bc, Vc, cB), Mc = this._DownsampleFace(Mc, Bc, Vc, cB), Pc = this._DownsampleFace(Pc, Bc, Vc, cB), qB = this._DownsampleFace(qB, Bc, Vc, cB), Oc = Vc
            }
            const Tc = {
              size: Oc,
              right: rB,
              left: Ic,
              up: uc,
              down: Mc,
              front: Pc,
              back: qB,
              format: 5,
              type: Ic instanceof Float32Array ? 1 : 0,
              gammaSpace: mB
            };
            cB(this.ConvertCubeMapToSphericalPolynomial(Tc))
          }))
        }))
      }
      static _AreaElement(cB, Bc) {
        return Math.atan2(cB * Bc, Math.sqrt(cB * cB + Bc * Bc + 1))
      }
      static _DownsampleFace(cB, Bc, nc, Vc) {
        const Ic = cB instanceof Float32Array ? cB : Float32Array.from(cB),
          rB = nc * nc * Vc,
          uc = new Float32Array(rB),
          sc = Bc / nc,
          Mc = 1 / (sc * sc);
        for (let qB = 0; qB < nc; qB++) {
          const cB = Math.floor(qB * sc),
            rB = Math.floor((qB + 1) * sc);
          for (let Pc = 0; Pc < nc; Pc++) {
            const Oc = Math.floor(Pc * sc),
              Tc = Math.floor((Pc + 1) * sc),
              fc = (qB * nc + Pc) * Vc;
            for (let nc = 0; nc < Vc; nc++) {
              let sc = 0;
              for (let uc = cB; uc < rB; uc++)
                for (let cB = Oc; cB < Tc; cB++) sc += Ic[(uc * Bc + cB) * Vc + nc];
              uc[fc + nc] = sc * Mc
            }
          }
        }
        if (cB instanceof Float32Array) return uc;
        const Pc = new(0, cB.constructor)(rB);
        for (let qB = 0; qB < rB; qB++) Pc[qB] = uc[qB] + .5 | 0;
        return Pc
      }
      static ConvertCubeMapToSphericalPolynomial(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const nc = Bc > 0 ? this._NearestPow2Floor(Bc) : 0;
        if (nc > 0 && cB.size > nc) {
          const Bc = 5 === cB.format ? 4 : 3,
            Vc = ["right", "left", "up", "down", "front", "back"],
            Ic = {};
          for (const rB of Vc) Ic[rB] = this._DownsampleFace(cB[rB], cB.size, nc, Bc);
          cB = {
            ...cB,
            ...Ic,
            size: nc
          }
        }
        const Vc = new rB.c;
        let Mc = 0;
        const Pc = 2 / cB.size,
          qB = Pc,
          Oc = .5 * Pc,
          Tc = Oc - 1;
        for (let rB = 0; rB < 6; rB++) {
          const Bc = this._FileFaces[rB],
            nc = cB[Bc.name];
          let fc = Tc;
          const mB = 5 === cB.format ? 4 : 3;
          for (let rB = 0; rB < cB.size; rB++) {
            let ec = Tc;
            for (let qB = 0; qB < cB.size; qB++) {
              const Tc = Bc.worldAxisForFileX.scale(ec).add(Bc.worldAxisForFileY.scale(fc)).add(Bc.worldAxisForNormal);
              Tc.normalize();
              const tB = this._AreaElement(ec - Oc, fc - Oc) - this._AreaElement(ec - Oc, fc + Oc) - this._AreaElement(ec + Oc, fc - Oc) + this._AreaElement(ec + Oc, fc + Oc);
              let Sc = nc[rB * cB.size * mB + qB * mB + 0],
                yB = nc[rB * cB.size * mB + qB * mB + 1],
                zB = nc[rB * cB.size * mB + qB * mB + 2];
              isNaN(Sc) && (Sc = 0), isNaN(yB) && (yB = 0), isNaN(zB) && (zB = 0), 0 === cB.type && (Sc /= 255, yB /= 255, zB /= 255), cB.gammaSpace && (Sc = Math.pow((0, Ic.Clamp)(Sc), uc.k), yB = Math.pow((0, Ic.Clamp)(yB), uc.k), zB = Math.pow((0, Ic.Clamp)(zB), uc.k));
              const pc = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const cB = Math.max(Sc, yB, zB);
                if (cB > pc) {
                  const Bc = pc / cB;
                  Sc *= Bc, yB *= Bc, zB *= Bc
                }
              } else Sc = (0, Ic.Clamp)(Sc, 0, pc), yB = (0, Ic.Clamp)(yB, 0, pc), zB = (0, Ic.Clamp)(zB, 0, pc);
              const hc = new sc.e(Sc, yB, zB);
              Vc.addLight(Tc, hc, tB), Mc += tB, ec += Pc
            }
            fc += qB
          }
        }
        const fc = 6 * (4 * Math.PI) / 6 / Mc;
        return Vc.scaleInPlace(fc), Vc.convertIncidentRadianceToIrradiance(), Vc.convertIrradianceToLambertianRadiance(), rB.g.FromHarmonics(Vc)
      }
    }
    Pc._FileFaces = [new Mc("right", new Vc.p(1, 0, 0), new Vc.p(0, 0, -1), new Vc.p(0, -1, 0)), new Mc("left", new Vc.p(-1, 0, 0), new Vc.p(0, 0, 1), new Vc.p(0, -1, 0)), new Mc("up", new Vc.p(0, 1, 0), new Vc.p(1, 0, 0), new Vc.p(0, 0, 1)), new Mc("down", new Vc.p(0, -1, 0), new Vc.p(1, 0, 0), new Vc.p(0, 0, -1)), new Mc("front", new Vc.p(0, 0, 1), new Vc.p(1, 0, 0), new Vc.p(0, -1, 0)), new Mc("back", new Vc.p(0, 0, -1), new Vc.p(-1, 0, 0), new Vc.p(0, -1, 0))], Pc.MAX_HDRI_VALUE = 4096, Pc.PRESERVE_CLAMPED_COLORS = !1
  },
  39741: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => rB
    });
    var Vc = nc(39733),
      Ic = nc(39745);
    class rB {
      static ExpandRGBDTexture(cB) {
        const Bc = cB._texture;
        if (!Bc || !cB.isRGBD) return;
        const Ic = Bc.RV(),
          rB = Ic.getCaps(),
          uc = Bc.isReady;
        let sc = !1;
        rB.textureHalfFloatRender && rB.textureHalfFloatLinearFiltering ? (sc = !0, Bc.type = 2) : rB.textureFloatRender && rB.textureFloatLinearFiltering && (sc = !0, Bc.type = 1), sc && (Bc.isReady = !1, Bc._isRGBD = !1, Bc.invertY = !1);
        const Mc = async () => {
          const rB = Ic.isWebGPU,
            uc = rB ? 1 : 0;
          Bc.isReady = !1, rB ? await nc.e(317).then((() => nc(59297))) : await nc.e(299).then((() => nc(59306)));
          const sc = new Vc.b("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, Ic, !1, void 0, Bc.type, void 0, null, !1, void 0, uc);
          sc.externalTextureSamplerBinding = !0;
          const Mc = Ic.createRenderTargetTexture(Bc.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: Bc.samplingMode,
            type: Bc.type,
            format: 5
          });
          sc.onEffectCreatedObservable.addOnce((nc => {
            nc.executeWhenCompiled((() => {
              sc.onApply = cB => {
                cB._bindTexture("textureSampler", Bc), cB.setFloat2("scale", 1, 1)
              }, cB.knc()?.postProcessManager.directRender([sc], Mc, !0), Ic.restoreDefaultFramebuffer(), Ic._releaseTexture(Bc), sc && sc.dispose(), Mc._swapAndDie(Bc), Bc.isReady = !0
            }))
          }))
        };
        sc && (uc ? Mc() : cB.onLoadObservable.addOnce(Mc))
      }
      static async EncodeTextureToRGBD(cB, Bc) {
        let Vc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return Bc.RV().isWebGPU ? await nc.e(318).then((() => nc(59324))) : await nc.e(300).then((() => nc(59316))), await (0, Ic.d)("rgbdEncode", cB, Bc, Vc, 1, 5)
      }
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);