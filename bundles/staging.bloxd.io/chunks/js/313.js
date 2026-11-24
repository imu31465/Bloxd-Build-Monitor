export const id = 313;
export const ids = [313];
export const modules = {
  42057: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      _ENVTextureLoader: () => vt
    });
    var Ot = Vt(40131),
      qt = Vt(37336),
      Dt = Vt(37372),
      mt = Vt(40194),
      dt = Vt(40037),
      jt = Vt(40202),
      Ht = (Vt(40296), Vt(42062)),
      Xt = Vt(38899),
      Qt = (Vt(42071), Vt(42085), Vt(40270));
    const lt = "image/png",
      Et = [134, 22, 135, 150, 246, 214, 150, 54];

    function ft(tt) {
      const et = new DataView(tt.buffer, tt.byteOffset, tt.byteLength);
      let Vt = 0;
      for (let mt = 0; mt < Et.length; mt++)
        if (et.getUint8(Vt++) !== Et[mt]) return Xt.d.Error("Not a babylon environment map"), null;
      let Ot, qt = "";
      for (; Ot = et.getUint8(Vt++);) qt += String.fromCharCode(Ot);
      let Dt = JSON.parse(qt);
      return Dt = wt(Dt), Dt.binaryDataPosition = Vt, Dt.specular && (Dt.specular.lodGenerationScale = Dt.specular.lodGenerationScale || .8), Dt
    }

    function wt(tt) {
      if (tt.version > 2) throw new Error(`Unsupported babylon environment map version "${tt.version}". Latest supported version is "2".`);
      return 2 === tt.version ? tt : tt = {
        ...tt,
        version: 2,
        imageType: lt
      }
    }

    function yt(tt, et) {
      const Vt = (et = wt(et)).specular;
      let Ot = Math.log2(et.width);
      if (Ot = Math.round(Ot) + 1, Vt.mipmaps.length !== 6 * Ot) throw new Error(`Unsupported specular mipmaps number "${Vt.mipmaps.length}"`);
      const qt = new Array(Ot);
      for (let Dt = 0; Dt < Ot; Dt++) {
        qt[Dt] = new Array(6);
        for (let Ot = 0; Ot < 6; Ot++) {
          const mt = Vt.mipmaps[6 * Dt + Ot];
          qt[Dt][Ot] = new Uint8Array(tt.buffer, tt.byteOffset + et.binaryDataPosition + mt.position, mt.length)
        }
      }
      return qt
    }

    function Nt(tt, et) {
      et = wt(et);
      const Vt = new Array(6),
        Ot = et.irradiance?.irradianceTexture;
      if (Ot) {
        if (6 !== Ot.faces.length) throw new Error(`Incorrect irradiance texture faces number "${Ot.faces.length}"`);
        for (let qt = 0; qt < 6; qt++) {
          const Dt = Ot.faces[qt];
          Vt[qt] = new Uint8Array(tt.buffer, tt.byteOffset + et.binaryDataPosition + Dt.position, Dt.length)
        }
      }
      return Vt
    }

    function Mt(tt, et, Vt) {
      const Ot = (Vt = wt(Vt)).specular;
      if (!Ot) return Promise.resolve([]);
      tt._lodGenerationScale = Ot.lodGenerationScale;
      const Dt = [],
        mt = yt(et, Vt);
      Dt.push(Jt(tt, mt, Vt.imageType));
      const dt = Vt.irradiance?.irradianceTexture;
      if (dt) {
        const Ot = Nt(et, Vt);
        let mt = null;
        Vt.irradiance?.irradianceTexture?.dominantDirection && (mt = qt.n.FromArray(Vt.irradiance.irradianceTexture.dominantDirection)), Dt.push(Ct(tt, Ot, dt.size, Vt.imageType, mt))
      }
      return Promise.all(Dt)
    }
    async function bt(tt, et, Vt, Ot, qt, Dt, mt, dt, jt, Ht, Xt) {
      return await new Promise(((Qt, lt) => {
        if (Vt) {
          const Vt = et.createTexture(null, !0, !0, null, 1, null, (tt => {
            lt(tt)
          }), tt);
          Ot?.onEffectCreatedObservable.addOnce((dt => {
            dt.executeWhenCompiled((() => {
              Ot.externalTextureSamplerBinding = !0, Ot.onApply = Ot => {
                Ot._bindTexture("textureSampler", Vt), Ot.setFloat2("scale", 1, et._features.needsInvertingBitmap && tt instanceof ImageBitmap ? -1 : 1)
              }, et.scenes.length && (et.scenes[0].postProcessManager.directRender([Ot], Ht, !0, Dt, mt), et.restoreDefaultFramebuffer(), Vt.dispose(), URL.revokeObjectURL(qt), Qt())
            }))
          }))
        } else {
          if (et._uploadImageToTexture(Xt, tt, Dt, mt), dt) {
            const Vt = jt[mt];
            Vt && et._uploadImageToTexture(Vt._texture, tt, Dt, 0)
          }
          Qt()
        }
      }))
    }
    async function Jt(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : lt;
      const Ot = tt.Jf();
      tt.format = 5, tt.type = 0, tt.generateMipMaps = !0, tt._cachedAnisotropicFilteringLevel = null, Ot.updateTextureSamplingMode(3, tt), await ut(tt, et, !0, Vt), tt.isReady = !0
    }
    async function Ct(tt, et, Vt) {
      let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : lt,
        qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const Dt = tt.Jf(),
        mt = new dt.d(Dt, 5),
        Ht = new jt.b(Dt, mt);
      tt._irradianceTexture = Ht, Ht._dominantDirection = qt, mt.isCube = !0, mt.format = 5, mt.type = 0, mt.generateMipMaps = !0, mt._cachedAnisotropicFilteringLevel = null, mt.generateMipMaps = !0, mt.width = Vt, mt.height = Vt, Dt.updateTextureSamplingMode(3, mt), await ut(mt, [et], !1, Ot), Dt.generateMipMapsForCubemap(mt), mt.isReady = !0
    }
    async function ut(tt, et, qt) {
      let mt = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : lt;
      if (!(0, Ot.h)(tt.width)) throw new Error("Texture size must be a power of two");
      const Xt = (0, Dt.ILog2)(tt.width) + 1,
        Et = tt.Jf();
      let ft = !1,
        wt = !1,
        yt = null,
        Nt = null,
        Mt = null;
      const Jt = Et.getCaps();
      Jt.textureLOD ? Et._features.supportRenderAndCopyToLodForFloatTextures ? Jt.textureHalfFloatRender && Jt.textureHalfFloatLinearFiltering ? (ft = !0, tt.type = 2) : Jt.textureFloatRender && Jt.textureFloatLinearFiltering && (ft = !0, tt.type = 1) : ft = !1 : (ft = !1, wt = qt);
      let Ct = 0;
      if (ft) Et.isWebGPU ? (Ct = 1, await Vt.e(347).then((() => Vt(61641)))) : await Vt.e(329).then((() => Vt(61650))), yt = new Ht.d("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, Et, !1, void 0, tt.type, void 0, null, !1, void 0, Ct), tt._isRGBD = !1, tt.invertY = !1, Nt = Et.createRenderTargetCubeTexture(tt.width, {
        generateDepthBuffer: !1,
        generateMipMaps: !0,
        generateStencilBuffer: !1,
        samplingMode: 3,
        type: tt.type,
        format: 5
      });
      else if (tt._isRGBD = !0, tt.invertY = !0, wt) {
        const et = 3;
        Mt = {};
        const Vt = tt._lodGenerationScale,
          Ot = tt._lodGenerationOffset;
        for (let qt = 0; qt < et; qt++) {
          const Dt = (Xt - 1) * Vt + Ot,
            mt = Ot + (Dt - Ot) * (1 - qt / (et - 1)),
            Ht = Math.round(Math.min(Math.max(mt, 0), Dt)),
            Qt = new dt.d(Et, 2);
          Qt.isCube = !0, Qt.invertY = !0, Qt.generateMipMaps = !1, Et.updateTextureSamplingMode(2, Qt);
          const lt = new jt.b(null);
          switch (lt._isCube = !0, lt._texture = Qt, Mt[Ht] = lt, qt) {
            case 0:
              tt._lodTextureLow = lt;
              break;
            case 1:
              tt._lodTextureMid = lt;
              break;
            case 2:
              tt._lodTextureHigh = lt
          }
        }
      }
      const ut = [];
      for (let Vt = 0; Vt < et.length; Vt++)
        for (let Ot = 0; Ot < 6; Ot++) {
          const qt = et[Vt][Ot],
            Dt = (0, Qt.o)(qt),
            dt = new Blob([Dt], {
              type: mt
            }),
            jt = URL.createObjectURL(dt);
          let Ht;
          if (Et._features.forceBitmapOverHTMLImageElement) Ht = Et.createImageBitmap(dt, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          }).then((async et => await bt(et, Et, ft, yt, jt, Ot, Vt, wt, Mt, Nt, tt)));
          else {
            const et = new Image;
            et.src = jt, Ht = new Promise(((qt, Dt) => {
              et.onload = () => {
                bt(et, Et, ft, yt, jt, Ot, Vt, wt, Mt, Nt, tt).then((() => qt())).catch((tt => {
                  Dt(tt)
                }))
              }, et.onerror = tt => {
                Dt(tt)
              }
            }))
          }
          ut.push(Ht)
        }
      if (await Promise.all(ut), et.length < Xt) {
        let Vt;
        const Ot = Math.pow(2, Xt - 1 - et.length),
          qt = Ot * Ot * 4;
        switch (tt.type) {
          case 0:
            Vt = new Uint8Array(qt);
            break;
          case 2:
            Vt = new Uint16Array(qt);
            break;
          case 1:
            Vt = new Float32Array(qt)
        }
        for (let Dt = et.length; Dt < Xt; Dt++)
          for (let et = 0; et < 6; et++) Et._uploadArrayBufferViewToTexture(Nt?.texture || tt, Vt, et, Dt)
      }
      if (Nt) {
        const et = tt._irradianceTexture;
        tt._irradianceTexture = null, Et._releaseTexture(tt), Nt._swapAndDie(tt), tt._irradianceTexture = et
      }
      yt && yt.dispose(), wt && (tt._lodTextureHigh && tt._lodTextureHigh._texture && (tt._lodTextureHigh._texture.isReady = !0), tt._lodTextureMid && tt._lodTextureMid._texture && (tt._lodTextureMid._texture.isReady = !0), tt._lodTextureLow && tt._lodTextureLow._texture && (tt._lodTextureLow._texture.isReady = !0))
    }

    function Kt(tt, et) {
      const Vt = (et = wt(et)).irradiance;
      if (!Vt) return;
      const Ot = new mt.g;
      qt.n.FromArrayToRef(Vt.x, 0, Ot.x), qt.n.FromArrayToRef(Vt.y, 0, Ot.y), qt.n.FromArrayToRef(Vt.z, 0, Ot.z), qt.n.FromArrayToRef(Vt.xx, 0, Ot.xx), qt.n.FromArrayToRef(Vt.yy, 0, Ot.yy), qt.n.FromArrayToRef(Vt.zz, 0, Ot.zz), qt.n.FromArrayToRef(Vt.yz, 0, Ot.yz), qt.n.FromArrayToRef(Vt.zx, 0, Ot.zx), qt.n.FromArrayToRef(Vt.xy, 0, Ot.xy), tt._sphericalPolynomial = Ot
    }
    var ht = Vt(42093);
    class vt {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(tt, et, Vt, Ot, qt) {
        if (Array.isArray(tt)) return;
        const Dt = ft(tt);
        if (Dt) {
          et.width = Dt.width, et.height = Dt.width;
          try {
            (0, ht.e)(), Kt(et, Dt), Mt(et, tt, Dt).then((() => {
              et.isReady = !0, et.onLoadedObservable.notifyObservers(et), et.onLoadedObservable.clear(), Ot && Ot()
            }), (tt => {
              qt?.("Can not upload environment levels", tt)
            }))
          } catch (mt) {
            qt?.("Can not upload environment file", mt)
          }
        } else qt && qt("Can not parse the environment file", null)
      }
      loadData() {
        throw ".env not supported in 2d."
      }
    }
  },
  42093: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => mt
    });
    var Ot = Vt(42031),
      qt = Vt(40202);
    let Dt = !1;

    function mt() {
      Dt || (Dt = !0, qt.b.prototype._sphericalPolynomialTargetSize = 0, qt.b.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(qt.b.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = Ot.e.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((tt => {
              this._texture._sphericalPolynomial = tt, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(tt) {
          this._texture && (this._texture._sphericalPolynomial = tt)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  42031: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Ht
    });
    var Ot = Vt(37336),
      qt = Vt(37372),
      Dt = Vt(40194),
      mt = Vt(37342),
      dt = Vt(37513);
    class jt {
      constructor(tt, et, Vt, Ot) {
        this.name = tt, this.worldAxisForNormal = et, this.worldAxisForFileX = Vt, this.worldAxisForFileY = Ot
      }
    }
    class Ht {
      static _NearestPow2Floor(tt) {
        return tt <= 1 ? 1 : 1 << Math.floor(Math.log2(tt))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(tt) {
        if (!tt.isCube) return null;
        tt.vI()?.Jf().flushFramebuffer();
        const et = tt.getSize().width,
          Vt = tt._sphericalPolynomialTargetSize,
          Ot = Vt > 0 ? this._NearestPow2Floor(Vt) : 0,
          qt = !tt.noMipmap && !0 === tt._texture?.generateMipMaps,
          Dt = Ot > 0 && Ot < et && qt,
          mt = Dt ? Math.max(0, Math.round(Math.log2(et / Ot))) : 0,
          dt = Dt ? Math.max(1, Math.floor(et / Math.pow(2, mt))) : et,
          jt = tt.readPixels(0, mt, void 0, !1),
          Ht = tt.readPixels(1, mt, void 0, !1);
        let Xt, Qt;
        tt.isRenderTarget ? (Xt = tt.readPixels(3, mt, void 0, !1), Qt = tt.readPixels(2, mt, void 0, !1)) : (Xt = tt.readPixels(2, mt, void 0, !1), Qt = tt.readPixels(3, mt, void 0, !1));
        const lt = tt.readPixels(4, mt, void 0, !1),
          Et = tt.readPixels(5, mt, void 0, !1),
          ft = tt.gammaSpace,
          wt = Ot > 0 && Ot < et && !Dt;
        return new Promise((tt => {
          Promise.all([Ht, jt, Xt, Qt, lt, Et]).then((Vt => {
            let [qt, Dt, mt, jt, Ht, Xt] = Vt, Qt = dt;
            if (wt) {
              const tt = 4;
              qt = this._DownsampleFace(qt, et, Ot, tt), Dt = this._DownsampleFace(Dt, et, Ot, tt), mt = this._DownsampleFace(mt, et, Ot, tt), jt = this._DownsampleFace(jt, et, Ot, tt), Ht = this._DownsampleFace(Ht, et, Ot, tt), Xt = this._DownsampleFace(Xt, et, Ot, tt), Qt = Ot
            }
            const lt = {
              size: Qt,
              right: Dt,
              left: qt,
              up: mt,
              down: jt,
              front: Ht,
              back: Xt,
              format: 5,
              type: qt instanceof Float32Array ? 1 : 0,
              gammaSpace: ft
            };
            tt(this.ConvertCubeMapToSphericalPolynomial(lt))
          }))
        }))
      }
      static _AreaElement(tt, et) {
        return Math.atan2(tt * et, Math.sqrt(tt * tt + et * et + 1))
      }
      static _DownsampleFace(tt, et, Vt, Ot) {
        const qt = tt instanceof Float32Array ? tt : Float32Array.from(tt),
          Dt = Vt * Vt * Ot,
          mt = new Float32Array(Dt),
          dt = et / Vt,
          jt = 1 / (dt * dt);
        for (let Xt = 0; Xt < Vt; Xt++) {
          const tt = Math.floor(Xt * dt),
            Dt = Math.floor((Xt + 1) * dt);
          for (let Ht = 0; Ht < Vt; Ht++) {
            const Qt = Math.floor(Ht * dt),
              lt = Math.floor((Ht + 1) * dt),
              Et = (Xt * Vt + Ht) * Ot;
            for (let Vt = 0; Vt < Ot; Vt++) {
              let dt = 0;
              for (let mt = tt; mt < Dt; mt++)
                for (let tt = Qt; tt < lt; tt++) dt += qt[(mt * et + tt) * Ot + Vt];
              mt[Et + Vt] = dt * jt
            }
          }
        }
        if (tt instanceof Float32Array) return mt;
        const Ht = new(0, tt.constructor)(Dt);
        for (let Xt = 0; Xt < Dt; Xt++) Ht[Xt] = mt[Xt] + .5 | 0;
        return Ht
      }
      static ConvertCubeMapToSphericalPolynomial(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Vt = et > 0 ? this._NearestPow2Floor(et) : 0;
        if (Vt > 0 && tt.size > Vt) {
          const et = 5 === tt.format ? 4 : 3,
            Ot = ["right", "left", "up", "down", "front", "back"],
            qt = {};
          for (const Dt of Ot) qt[Dt] = this._DownsampleFace(tt[Dt], tt.size, Vt, et);
          tt = {
            ...tt,
            ...qt,
            size: Vt
          }
        }
        const Ot = new Dt.e;
        let jt = 0;
        const Ht = 2 / tt.size,
          Xt = Ht,
          Qt = .5 * Ht,
          lt = Qt - 1;
        for (let Dt = 0; Dt < 6; Dt++) {
          const et = this._FileFaces[Dt],
            Vt = tt[et.name];
          let Et = lt;
          const ft = 5 === tt.format ? 4 : 3;
          for (let Dt = 0; Dt < tt.size; Dt++) {
            let wt = lt;
            for (let Xt = 0; Xt < tt.size; Xt++) {
              const lt = et.worldAxisForFileX.scale(wt).add(et.worldAxisForFileY.scale(Et)).add(et.worldAxisForNormal);
              lt.normalize();
              const yt = this._AreaElement(wt - Qt, Et - Qt) - this._AreaElement(wt - Qt, Et + Qt) - this._AreaElement(wt + Qt, Et - Qt) + this._AreaElement(wt + Qt, Et + Qt);
              let Nt = Vt[Dt * tt.size * ft + Xt * ft + 0],
                Mt = Vt[Dt * tt.size * ft + Xt * ft + 1],
                bt = Vt[Dt * tt.size * ft + Xt * ft + 2];
              isNaN(Nt) && (Nt = 0), isNaN(Mt) && (Mt = 0), isNaN(bt) && (bt = 0), 0 === tt.type && (Nt /= 255, Mt /= 255, bt /= 255), tt.gammaSpace && (Nt = Math.pow((0, qt.Clamp)(Nt), mt.i), Mt = Math.pow((0, qt.Clamp)(Mt), mt.i), bt = Math.pow((0, qt.Clamp)(bt), mt.i));
              const Jt = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const tt = Math.max(Nt, Mt, bt);
                if (tt > Jt) {
                  const et = Jt / tt;
                  Nt *= et, Mt *= et, bt *= et
                }
              } else Nt = (0, qt.Clamp)(Nt, 0, Jt), Mt = (0, qt.Clamp)(Mt, 0, Jt), bt = (0, qt.Clamp)(bt, 0, Jt);
              const Ct = new dt.b(Nt, Mt, bt);
              Ot.addLight(lt, Ct, yt), jt += yt, wt += Ht
            }
            Et += Xt
          }
        }
        const Et = 6 * (4 * Math.PI) / 6 / jt;
        return Ot.scaleInPlace(Et), Ot.convertIncidentRadianceToIrradiance(), Ot.convertIrradianceToLambertianRadiance(), Dt.g.FromHarmonics(Ot)
      }
    }
    Ht._FileFaces = [new jt("right", new Ot.n(1, 0, 0), new Ot.n(0, 0, -1), new Ot.n(0, -1, 0)), new jt("left", new Ot.n(-1, 0, 0), new Ot.n(0, 0, 1), new Ot.n(0, -1, 0)), new jt("up", new Ot.n(0, 1, 0), new Ot.n(1, 0, 0), new Ot.n(0, 0, 1)), new jt("down", new Ot.n(0, -1, 0), new Ot.n(1, 0, 0), new Ot.n(0, 0, -1)), new jt("front", new Ot.n(0, 0, 1), new Ot.n(1, 0, 0), new Ot.n(0, -1, 0)), new jt("back", new Ot.n(0, 0, -1), new Ot.n(-1, 0, 0), new Ot.n(0, -1, 0))], Ht.MAX_HDRI_VALUE = 4096, Ht.PRESERVE_CLAMPED_COLORS = !1
  },
  42071: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Dt
    });
    var Ot = Vt(42062),
      qt = Vt(42074);
    class Dt {
      static ExpandRGBDTexture(tt) {
        const et = tt._texture;
        if (!et || !tt.isRGBD) return;
        const qt = et.Jf(),
          Dt = qt.getCaps(),
          mt = et.isReady;
        let dt = !1;
        Dt.textureHalfFloatRender && Dt.textureHalfFloatLinearFiltering ? (dt = !0, et.type = 2) : Dt.textureFloatRender && Dt.textureFloatLinearFiltering && (dt = !0, et.type = 1), dt && (et.isReady = !1, et._isRGBD = !1, et.invertY = !1);
        const jt = async () => {
          const Dt = qt.isWebGPU,
            mt = Dt ? 1 : 0;
          et.isReady = !1, Dt ? await Vt.e(347).then((() => Vt(61641))) : await Vt.e(329).then((() => Vt(61650)));
          const dt = new Ot.d("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, qt, !1, void 0, et.type, void 0, null, !1, void 0, mt);
          dt.externalTextureSamplerBinding = !0;
          const jt = qt.createRenderTargetTexture(et.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: et.samplingMode,
            type: et.type,
            format: 5
          });
          dt.onEffectCreatedObservable.addOnce((Vt => {
            Vt.executeWhenCompiled((() => {
              dt.onApply = tt => {
                tt._bindTexture("textureSampler", et), tt.setFloat2("scale", 1, 1)
              }, tt.vI()?.postProcessManager.directRender([dt], jt, !0), qt.restoreDefaultFramebuffer(), qt._releaseTexture(et), dt && dt.dispose(), jt._swapAndDie(et), et.isReady = !0
            }))
          }))
        };
        dt && (mt ? jt() : tt.onLoadObservable.addOnce(jt))
      }
      static async EncodeTextureToRGBD(tt, et) {
        let Ot = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return et.Jf().isWebGPU ? await Vt.e(348).then((() => Vt(61661))) : await Vt.e(330).then((() => Vt(61654))), await (0, qt.e)("rgbdEncode", tt, et, Ot, 1, 5)
      }
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);