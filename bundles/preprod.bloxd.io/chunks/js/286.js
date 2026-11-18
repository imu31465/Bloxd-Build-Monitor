export const id = 286;
export const ids = [286];
export const modules = {
  40265: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      _ENVTextureLoader: () => Oy
    });
    var Uy = Wy(38405),
      hy = Wy(35861),
      fy = Wy(35902),
      Zy = Wy(38453),
      cb = Wy(38287),
      Py = Wy(38457),
      oy = (Wy(38569), Wy(40273)),
      By = Wy(37350),
      Ky = (Wy(40289), Wy(40309), Wy(38540));
    const ey = "image/png",
      qb = [134, 22, 135, 150, 246, 214, 150, 54];

    function sy(yb) {
      const bb = new DataView(yb.buffer, yb.byteOffset, yb.byteLength);
      let Wy = 0;
      for (let Zy = 0; Zy < qb.length; Zy++)
        if (bb.getUint8(Wy++) !== qb[Zy]) return By.b.Error("Not a babylon environment map"), null;
      let Uy, hy = "";
      for (; Uy = bb.getUint8(Wy++);) hy += String.fromCharCode(Uy);
      let fy = JSON.parse(hy);
      return fy = Sy(fy), fy.binaryDataPosition = Wy, fy.specular && (fy.specular.lodGenerationScale = fy.specular.lodGenerationScale || .8), fy
    }

    function Sy(yb) {
      if (yb.version > 2) throw new Error(`Unsupported babylon environment map version "${yb.version}". Latest supported version is "2".`);
      return 2 === yb.version ? yb : yb = {
        ...yb,
        version: 2,
        imageType: ey
      }
    }

    function Ey(yb, bb) {
      const Wy = (bb = Sy(bb)).specular;
      let Uy = Math.log2(bb.width);
      if (Uy = Math.round(Uy) + 1, Wy.mipmaps.length !== 6 * Uy) throw new Error(`Unsupported specular mipmaps number "${Wy.mipmaps.length}"`);
      const hy = new Array(Uy);
      for (let fy = 0; fy < Uy; fy++) {
        hy[fy] = new Array(6);
        for (let Uy = 0; Uy < 6; Uy++) {
          const Zy = Wy.mipmaps[6 * fy + Uy];
          hy[fy][Uy] = new Uint8Array(yb.buffer, yb.byteOffset + bb.binaryDataPosition + Zy.position, Zy.length)
        }
      }
      return hy
    }

    function ly(yb, bb) {
      bb = Sy(bb);
      const Wy = new Array(6),
        Uy = bb.irradiance?.irradianceTexture;
      if (Uy) {
        if (6 !== Uy.faces.length) throw new Error(`Incorrect irradiance texture faces number "${Uy.faces.length}"`);
        for (let hy = 0; hy < 6; hy++) {
          const fy = Uy.faces[hy];
          Wy[hy] = new Uint8Array(yb.buffer, yb.byteOffset + bb.binaryDataPosition + fy.position, fy.length)
        }
      }
      return Wy
    }

    function mb(yb, bb, Wy) {
      const Uy = (Wy = Sy(Wy)).specular;
      if (!Uy) return Promise.resolve([]);
      yb._lodGenerationScale = Uy.lodGenerationScale;
      const fy = [],
        Zy = Ey(bb, Wy);
      fy.push(Ty(yb, Zy, Wy.imageType));
      const cb = Wy.irradiance?.irradianceTexture;
      if (cb) {
        const Uy = ly(bb, Wy);
        let Zy = null;
        Wy.irradiance?.irradianceTexture?.dominantDirection && (Zy = hy.n.FromArray(Wy.irradiance.irradianceTexture.dominantDirection)), fy.push(Vy(yb, Uy, cb.size, Wy.imageType, Zy))
      }
      return Promise.all(fy)
    }
    async function Cy(yb, bb, Wy, Uy, hy, fy, Zy, cb, Py, oy, By) {
      return await new Promise(((Ky, ey) => {
        if (Wy) {
          const Wy = bb.createTexture(null, !0, !0, null, 1, null, (yb => {
            ey(yb)
          }), yb);
          Uy?.onEffectCreatedObservable.addOnce((cb => {
            cb.executeWhenCompiled((() => {
              Uy.externalTextureSamplerBinding = !0, Uy.onApply = Uy => {
                Uy._bindTexture("textureSampler", Wy), Uy.setFloat2("scale", 1, bb._features.needsInvertingBitmap && yb instanceof ImageBitmap ? -1 : 1)
              }, bb.scenes.length && (bb.scenes[0].postProcessManager.directRender([Uy], oy, !0, fy, Zy), bb.restoreDefaultFramebuffer(), Wy.dispose(), URL.revokeObjectURL(hy), Ky())
            }))
          }))
        } else {
          if (bb._uploadImageToTexture(By, yb, fy, Zy), cb) {
            const Wy = Py[Zy];
            Wy && bb._uploadImageToTexture(Wy._texture, yb, fy, 0)
          }
          Ky()
        }
      }))
    }
    async function Ty(yb, bb) {
      let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ey;
      const Uy = yb.xh();
      yb.format = 5, yb.type = 0, yb.generateMipMaps = !0, yb._cachedAnisotropicFilteringLevel = null, Uy.updateTextureSamplingMode(3, yb), await Jy(yb, bb, !0, Wy), yb.isReady = !0
    }
    async function Vy(yb, bb, Wy) {
      let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ey,
        hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const fy = yb.xh(),
        Zy = new cb.d(fy, 5),
        oy = new Py.d(fy, Zy);
      yb._irradianceTexture = oy, oy._dominantDirection = hy, Zy.isCube = !0, Zy.format = 5, Zy.type = 0, Zy.generateMipMaps = !0, Zy._cachedAnisotropicFilteringLevel = null, Zy.generateMipMaps = !0, Zy.width = Wy, Zy.height = Wy, fy.updateTextureSamplingMode(3, Zy), await Jy(Zy, [bb], !1, Uy), fy.generateMipMapsForCubemap(Zy), Zy.isReady = !0
    }
    async function Jy(yb, bb, hy) {
      let Zy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ey;
      if (!(0, Uy.g)(yb.width)) throw new Error("Texture size must be a power of two");
      const By = (0, fy.ILog2)(yb.width) + 1,
        qb = yb.xh();
      let sy = !1,
        Sy = !1,
        Ey = null,
        ly = null,
        mb = null;
      const Ty = qb.getCaps();
      Ty.textureLOD ? qb._features.supportRenderAndCopyToLodForFloatTextures ? Ty.textureHalfFloatRender && Ty.textureHalfFloatLinearFiltering ? (sy = !0, yb.type = 2) : Ty.textureFloatRender && Ty.textureFloatLinearFiltering && (sy = !0, yb.type = 1) : sy = !1 : (sy = !1, Sy = hy);
      let Vy = 0;
      if (sy) qb.isWebGPU ? (Vy = 1, await Wy.e(320).then((() => Wy(59935)))) : await Wy.e(302).then((() => Wy(59943))), Ey = new oy.c("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, qb, !1, void 0, yb.type, void 0, null, !1, void 0, Vy), yb._isRGBD = !1, yb.invertY = !1, ly = qb.createRenderTargetCubeTexture(yb.width, {
        generateDepthBuffer: !1,
        generateMipMaps: !0,
        generateStencilBuffer: !1,
        samplingMode: 3,
        type: yb.type,
        format: 5
      });
      else if (yb._isRGBD = !0, yb.invertY = !0, Sy) {
        const bb = 3;
        mb = {};
        const Wy = yb._lodGenerationScale,
          Uy = yb._lodGenerationOffset;
        for (let hy = 0; hy < bb; hy++) {
          const fy = (By - 1) * Wy + Uy,
            Zy = Uy + (fy - Uy) * (1 - hy / (bb - 1)),
            oy = Math.round(Math.min(Math.max(Zy, 0), fy)),
            Ky = new cb.d(qb, 2);
          Ky.isCube = !0, Ky.invertY = !0, Ky.generateMipMaps = !1, qb.updateTextureSamplingMode(2, Ky);
          const ey = new Py.d(null);
          switch (ey._isCube = !0, ey._texture = Ky, mb[oy] = ey, hy) {
            case 0:
              yb._lodTextureLow = ey;
              break;
            case 1:
              yb._lodTextureMid = ey;
              break;
            case 2:
              yb._lodTextureHigh = ey
          }
        }
      }
      const Jy = [];
      for (let Wy = 0; Wy < bb.length; Wy++)
        for (let Uy = 0; Uy < 6; Uy++) {
          const hy = bb[Wy][Uy],
            fy = (0, Ky.l)(hy),
            cb = new Blob([fy], {
              type: Zy
            }),
            Py = URL.createObjectURL(cb);
          let oy;
          if (qb._features.forceBitmapOverHTMLImageElement) oy = qb.createImageBitmap(cb, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          }).then((async bb => await Cy(bb, qb, sy, Ey, Py, Uy, Wy, Sy, mb, ly, yb)));
          else {
            const bb = new Image;
            bb.src = Py, oy = new Promise(((hy, fy) => {
              bb.onload = () => {
                Cy(bb, qb, sy, Ey, Py, Uy, Wy, Sy, mb, ly, yb).then((() => hy())).catch((yb => {
                  fy(yb)
                }))
              }, bb.onerror = yb => {
                fy(yb)
              }
            }))
          }
          Jy.push(oy)
        }
      if (await Promise.all(Jy), bb.length < By) {
        let Wy;
        const Uy = Math.pow(2, By - 1 - bb.length),
          hy = Uy * Uy * 4;
        switch (yb.type) {
          case 0:
            Wy = new Uint8Array(hy);
            break;
          case 2:
            Wy = new Uint16Array(hy);
            break;
          case 1:
            Wy = new Float32Array(hy)
        }
        for (let fy = bb.length; fy < By; fy++)
          for (let bb = 0; bb < 6; bb++) qb._uploadArrayBufferViewToTexture(ly?.texture || yb, Wy, bb, fy)
      }
      if (ly) {
        const bb = yb._irradianceTexture;
        yb._irradianceTexture = null, qb._releaseTexture(yb), ly._swapAndDie(yb), yb._irradianceTexture = bb
      }
      Ey && Ey.dispose(), Sy && (yb._lodTextureHigh && yb._lodTextureHigh._texture && (yb._lodTextureHigh._texture.isReady = !0), yb._lodTextureMid && yb._lodTextureMid._texture && (yb._lodTextureMid._texture.isReady = !0), yb._lodTextureLow && yb._lodTextureLow._texture && (yb._lodTextureLow._texture.isReady = !0))
    }

    function gb(yb, bb) {
      const Wy = (bb = Sy(bb)).irradiance;
      if (!Wy) return;
      const Uy = new Zy.f;
      hy.n.FromArrayToRef(Wy.x, 0, Uy.x), hy.n.FromArrayToRef(Wy.y, 0, Uy.y), hy.n.FromArrayToRef(Wy.z, 0, Uy.z), hy.n.FromArrayToRef(Wy.xx, 0, Uy.xx), hy.n.FromArrayToRef(Wy.yy, 0, Uy.yy), hy.n.FromArrayToRef(Wy.zz, 0, Uy.zz), hy.n.FromArrayToRef(Wy.yz, 0, Uy.yz), hy.n.FromArrayToRef(Wy.zx, 0, Uy.zx), hy.n.FromArrayToRef(Wy.xy, 0, Uy.xy), yb._sphericalPolynomial = Uy
    }
    var Gy = Wy(40315);
    class Oy {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(yb, bb, Wy, Uy, hy) {
        if (Array.isArray(yb)) return;
        const fy = sy(yb);
        if (fy) {
          bb.width = fy.width, bb.height = fy.width;
          try {
            (0, Gy.c)(), gb(bb, fy), mb(bb, yb, fy).then((() => {
              bb.isReady = !0, bb.onLoadedObservable.notifyObservers(bb), bb.onLoadedObservable.clear(), Uy && Uy()
            }), (yb => {
              hy?.("Can not upload environment levels", yb)
            }))
          } catch (Zy) {
            hy?.("Can not upload environment file", Zy)
          }
        } else hy && hy("Can not parse the environment file", null)
      }
      loadData() {
        throw ".env not supported in 2d."
      }
    }
  },
  40315: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Zy
    });
    var Uy = Wy(40243),
      hy = Wy(38457);
    let fy = !1;

    function Zy() {
      fy || (fy = !0, hy.d.prototype._sphericalPolynomialTargetSize = 0, hy.d.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(hy.d.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = Uy.b.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((yb => {
              this._texture._sphericalPolynomial = yb, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(yb) {
          this._texture && (this._texture._sphericalPolynomial = yb)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
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
  40289: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => fy
    });
    var Uy = Wy(40273),
      hy = Wy(40293);
    class fy {
      static ExpandRGBDTexture(yb) {
        const bb = yb._texture;
        if (!bb || !yb.isRGBD) return;
        const hy = bb.xh(),
          fy = hy.getCaps(),
          Zy = bb.isReady;
        let cb = !1;
        fy.textureHalfFloatRender && fy.textureHalfFloatLinearFiltering ? (cb = !0, bb.type = 2) : fy.textureFloatRender && fy.textureFloatLinearFiltering && (cb = !0, bb.type = 1), cb && (bb.isReady = !1, bb._isRGBD = !1, bb.invertY = !1);
        const Py = async () => {
          const fy = hy.isWebGPU,
            Zy = fy ? 1 : 0;
          bb.isReady = !1, fy ? await Wy.e(320).then((() => Wy(59935))) : await Wy.e(302).then((() => Wy(59943)));
          const cb = new Uy.c("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, hy, !1, void 0, bb.type, void 0, null, !1, void 0, Zy);
          cb.externalTextureSamplerBinding = !0;
          const Py = hy.createRenderTargetTexture(bb.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: bb.samplingMode,
            type: bb.type,
            format: 5
          });
          cb.onEffectCreatedObservable.addOnce((Wy => {
            Wy.executeWhenCompiled((() => {
              cb.onApply = yb => {
                yb._bindTexture("textureSampler", bb), yb.setFloat2("scale", 1, 1)
              }, yb.kWy()?.postProcessManager.directRender([cb], Py, !0), hy.restoreDefaultFramebuffer(), hy._releaseTexture(bb), cb && cb.dispose(), Py._swapAndDie(bb), bb.isReady = !0
            }))
          }))
        };
        cb && (Zy ? Py() : yb.onLoadObservable.addOnce(Py))
      }
      static async EncodeTextureToRGBD(yb, bb) {
        let Uy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return bb.xh().isWebGPU ? await Wy.e(321).then((() => Wy(59961))) : await Wy.e(303).then((() => Wy(59958))), await (0, hy.d)("rgbdEncode", yb, bb, Uy, 1, 5)
      }
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);