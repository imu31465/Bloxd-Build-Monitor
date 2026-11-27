export const id = 617;
export const ids = [617];
export const modules = {
  44993: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      _ENVTextureLoader: () => te
    });
    var ye = He(41044),
      be = He(37917),
      Me = He(37938),
      Ke = He(41104),
      Ue = He(40924),
      Fe = He(41111),
      Je = (He(41199), He(44998)),
      oe = He(39467),
      Re = (He(45011), He(45032), He(41175));
    const ke = "image/png",
      qe = [134, 22, 135, 150, 246, 214, 150, 54];

    function fe(ee) {
      const ie = new DataView(ee.buffer, ee.byteOffset, ee.byteLength);
      let He = 0;
      for (let Ke = 0; Ke < qe.length; Ke++)
        if (ie.getUint8(He++) !== qe[Ke]) return oe.e.Error("Not a babylon environment map"), null;
      let ye, be = "";
      for (; ye = ie.getUint8(He++);) be += String.fromCharCode(ye);
      let Me = JSON.parse(be);
      return Me = Te(Me), Me.binaryDataPosition = He, Me.specular && (Me.specular.lodGenerationScale = Me.specular.lodGenerationScale || .8), Me
    }

    function Te(ee) {
      if (ee.version > 2) throw new Error(`Unsupported babylon environment map version "${ee.version}". Latest supported version is "2".`);
      return 2 === ee.version ? ee : ee = {
        ...ee,
        version: 2,
        imageType: ke
      }
    }

    function pe(ee, ie) {
      const He = (ie = Te(ie)).specular;
      let ye = Math.log2(ie.width);
      if (ye = Math.round(ye) + 1, He.mipmaps.length !== 6 * ye) throw new Error(`Unsupported specular mipmaps number "${He.mipmaps.length}"`);
      const be = new Array(ye);
      for (let Me = 0; Me < ye; Me++) {
        be[Me] = new Array(6);
        for (let ye = 0; ye < 6; ye++) {
          const Ke = He.mipmaps[6 * Me + ye];
          be[Me][ye] = new Uint8Array(ee.buffer, ee.byteOffset + ie.binaryDataPosition + Ke.position, Ke.length)
        }
      }
      return be
    }

    function Xe(ee, ie) {
      ie = Te(ie);
      const He = new Array(6),
        ye = ie.irradiance?.irradianceTexture;
      if (ye) {
        if (6 !== ye.faces.length) throw new Error(`Incorrect irradiance texture faces number "${ye.faces.length}"`);
        for (let be = 0; be < 6; be++) {
          const Me = ye.faces[be];
          He[be] = new Uint8Array(ee.buffer, ee.byteOffset + ie.binaryDataPosition + Me.position, Me.length)
        }
      }
      return He
    }

    function ze(ee, ie, He) {
      const ye = (He = Te(He)).specular;
      if (!ye) return Promise.resolve([]);
      ee._lodGenerationScale = ye.lodGenerationScale;
      const Me = [],
        Ke = pe(ie, He);
      Me.push(Ee(ee, Ke, He.imageType));
      const Ue = He.irradiance?.irradianceTexture;
      if (Ue) {
        const ye = Xe(ie, He);
        let Ke = null;
        He.irradiance?.irradianceTexture?.dominantDirection && (Ke = be.p.FromArray(He.irradiance.irradianceTexture.dominantDirection)), Me.push(ge(ee, ye, Ue.size, He.imageType, Ke))
      }
      return Promise.all(Me)
    }
    async function Be(ee, ie, He, ye, be, Me, Ke, Ue, Fe, Je, oe) {
      return await new Promise(((Re, ke) => {
        if (He) {
          const He = ie.createTexture(null, !0, !0, null, 1, null, (ee => {
            ke(ee)
          }), ee);
          ye?.onEffectCreatedObservable.addOnce((Ue => {
            Ue.executeWhenCompiled((() => {
              ye.externalTextureSamplerBinding = !0, ye.onApply = ye => {
                ye._bindTexture("textureSampler", He), ye.setFloat2("scale", 1, ie._features.needsInvertingBitmap && ee instanceof ImageBitmap ? -1 : 1)
              }, ie.scenes.length && (ie.scenes[0].postProcessManager.directRender([ye], Je, !0, Me, Ke), ie.restoreDefaultFramebuffer(), He.dispose(), URL.revokeObjectURL(be), Re())
            }))
          }))
        } else {
          if (ie._uploadImageToTexture(oe, ee, Me, Ke), Ue) {
            const He = Fe[Ke];
            He && ie._uploadImageToTexture(He._texture, ee, Me, 0)
          }
          Re()
        }
      }))
    }
    async function Ee(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ke;
      const ye = ee.Nf();
      ee.format = 5, ee.type = 0, ee.generateMipMaps = !0, ee._cachedAnisotropicFilteringLevel = null, ye.updateTextureSamplingMode(3, ee), await Oe(ee, ie, !0, He), ee.isReady = !0
    }
    async function ge(ee, ie, He) {
      let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ke,
        be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const Me = ee.Nf(),
        Ke = new Ue.b(Me, 5),
        Je = new Fe.c(Me, Ke);
      ee._irradianceTexture = Je, Je._dominantDirection = be, Ke.isCube = !0, Ke.format = 5, Ke.type = 0, Ke.generateMipMaps = !0, Ke._cachedAnisotropicFilteringLevel = null, Ke.generateMipMaps = !0, Ke.width = He, Ke.height = He, Me.updateTextureSamplingMode(3, Ke), await Oe(Ke, [ie], !1, ye), Me.generateMipMapsForCubemap(Ke), Ke.isReady = !0
    }
    async function Oe(ee, ie, be) {
      let Ke = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ke;
      if (!(0, ye.l)(ee.width)) throw new Error("Texture size must be a power of two");
      const oe = (0, Me.ILog2)(ee.width) + 1,
        qe = ee.Nf();
      let fe = !1,
        Te = !1,
        pe = null,
        Xe = null,
        ze = null;
      const Ee = qe.getCaps();
      Ee.textureLOD ? qe._features.supportRenderAndCopyToLodForFloatTextures ? Ee.textureHalfFloatRender && Ee.textureHalfFloatLinearFiltering ? (fe = !0, ee.type = 2) : Ee.textureFloatRender && Ee.textureFloatLinearFiltering && (fe = !0, ee.type = 1) : fe = !1 : (fe = !1, Te = be);
      let ge = 0;
      if (fe) qe.isWebGPU ? (ge = 1, await He.e(651).then((() => He(63934)))) : await He.e(633).then((() => He(63943))), pe = new Je.b("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, qe, !1, void 0, ee.type, void 0, null, !1, void 0, ge), ee._isRGBD = !1, ee.invertY = !1, Xe = qe.createRenderTargetCubeTexture(ee.width, {
        generateDepthBuffer: !1,
        generateMipMaps: !0,
        generateStencilBuffer: !1,
        samplingMode: 3,
        type: ee.type,
        format: 5
      });
      else if (ee._isRGBD = !0, ee.invertY = !0, Te) {
        const ie = 3;
        ze = {};
        const He = ee._lodGenerationScale,
          ye = ee._lodGenerationOffset;
        for (let be = 0; be < ie; be++) {
          const Me = (oe - 1) * He + ye,
            Ke = ye + (Me - ye) * (1 - be / (ie - 1)),
            Je = Math.round(Math.min(Math.max(Ke, 0), Me)),
            Re = new Ue.b(qe, 2);
          Re.isCube = !0, Re.invertY = !0, Re.generateMipMaps = !1, qe.updateTextureSamplingMode(2, Re);
          const ke = new Fe.c(null);
          switch (ke._isCube = !0, ke._texture = Re, ze[Je] = ke, be) {
            case 0:
              ee._lodTextureLow = ke;
              break;
            case 1:
              ee._lodTextureMid = ke;
              break;
            case 2:
              ee._lodTextureHigh = ke
          }
        }
      }
      const Oe = [];
      for (let He = 0; He < ie.length; He++)
        for (let ye = 0; ye < 6; ye++) {
          const be = ie[He][ye],
            Me = (0, Re.j)(be),
            Ue = new Blob([Me], {
              type: Ke
            }),
            Fe = URL.createObjectURL(Ue);
          let Je;
          if (qe._features.forceBitmapOverHTMLImageElement) Je = qe.createImageBitmap(Ue, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          }).then((async ie => await Be(ie, qe, fe, pe, Fe, ye, He, Te, ze, Xe, ee)));
          else {
            const ie = new Image;
            ie.src = Fe, Je = new Promise(((be, Me) => {
              ie.onload = () => {
                Be(ie, qe, fe, pe, Fe, ye, He, Te, ze, Xe, ee).then((() => be())).catch((ee => {
                  Me(ee)
                }))
              }, ie.onerror = ee => {
                Me(ee)
              }
            }))
          }
          Oe.push(Je)
        }
      if (await Promise.all(Oe), ie.length < oe) {
        let He;
        const ye = Math.pow(2, oe - 1 - ie.length),
          be = ye * ye * 4;
        switch (ee.type) {
          case 0:
            He = new Uint8Array(be);
            break;
          case 2:
            He = new Uint16Array(be);
            break;
          case 1:
            He = new Float32Array(be)
        }
        for (let Me = ie.length; Me < oe; Me++)
          for (let ie = 0; ie < 6; ie++) qe._uploadArrayBufferViewToTexture(Xe?.texture || ee, He, ie, Me)
      }
      if (Xe) {
        const ie = ee._irradianceTexture;
        ee._irradianceTexture = null, qe._releaseTexture(ee), Xe._swapAndDie(ee), ee._irradianceTexture = ie
      }
      pe && pe.dispose(), Te && (ee._lodTextureHigh && ee._lodTextureHigh._texture && (ee._lodTextureHigh._texture.isReady = !0), ee._lodTextureMid && ee._lodTextureMid._texture && (ee._lodTextureMid._texture.isReady = !0), ee._lodTextureLow && ee._lodTextureLow._texture && (ee._lodTextureLow._texture.isReady = !0))
    }

    function de(ee, ie) {
      const He = (ie = Te(ie)).irradiance;
      if (!He) return;
      const ye = new Ke.e;
      be.p.FromArrayToRef(He.x, 0, ye.x), be.p.FromArrayToRef(He.y, 0, ye.y), be.p.FromArrayToRef(He.z, 0, ye.z), be.p.FromArrayToRef(He.xx, 0, ye.xx), be.p.FromArrayToRef(He.yy, 0, ye.yy), be.p.FromArrayToRef(He.zz, 0, ye.zz), be.p.FromArrayToRef(He.yz, 0, ye.yz), be.p.FromArrayToRef(He.zx, 0, ye.zx), be.p.FromArrayToRef(He.xy, 0, ye.xy), ee._sphericalPolynomial = ye
    }
    var We = He(45036);
    class te {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(ee, ie, He, ye, be) {
        if (Array.isArray(ee)) return;
        const Me = fe(ee);
        if (Me) {
          ie.width = Me.width, ie.height = Me.width;
          try {
            (0, We.d)(), de(ie, Me), ze(ie, ee, Me).then((() => {
              ie.isReady = !0, ie.onLoadedObservable.notifyObservers(ie), ie.onLoadedObservable.clear(), ye && ye()
            }), (ee => {
              be?.("Can not upload environment levels", ee)
            }))
          } catch (Ke) {
            be?.("Can not upload environment file", Ke)
          }
        } else be && be("Can not parse the environment file", null)
      }
      loadData() {
        throw ".env not supported in 2d."
      }
    }
  },
  45036: (ee, ie, He) => {
    He.d(ie, {
      d: () => Ke
    });
    var ye = He(44963),
      be = He(41111);
    let Me = !1;

    function Ke() {
      Me || (Me = !0, be.c.prototype._sphericalPolynomialTargetSize = 0, be.c.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(be.c.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = ye.b.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((ee => {
              this._texture._sphericalPolynomial = ee, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(ee) {
          this._texture && (this._texture._sphericalPolynomial = ee)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
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
  45011: (ee, ie, He) => {
    He.d(ie, {
      e: () => Me
    });
    var ye = He(44998),
      be = He(45015);
    class Me {
      static ExpandRGBDTexture(ee) {
        const ie = ee._texture;
        if (!ie || !ee.isRGBD) return;
        const be = ie.Nf(),
          Me = be.getCaps(),
          Ke = ie.isReady;
        let Ue = !1;
        Me.textureHalfFloatRender && Me.textureHalfFloatLinearFiltering ? (Ue = !0, ie.type = 2) : Me.textureFloatRender && Me.textureFloatLinearFiltering && (Ue = !0, ie.type = 1), Ue && (ie.isReady = !1, ie._isRGBD = !1, ie.invertY = !1);
        const Fe = async () => {
          const Me = be.isWebGPU,
            Ke = Me ? 1 : 0;
          ie.isReady = !1, Me ? await He.e(651).then((() => He(63934))) : await He.e(633).then((() => He(63943)));
          const Ue = new ye.b("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, be, !1, void 0, ie.type, void 0, null, !1, void 0, Ke);
          Ue.externalTextureSamplerBinding = !0;
          const Fe = be.createRenderTargetTexture(ie.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: ie.samplingMode,
            type: ie.type,
            format: 5
          });
          Ue.onEffectCreatedObservable.addOnce((He => {
            He.executeWhenCompiled((() => {
              Ue.onApply = ee => {
                ee._bindTexture("textureSampler", ie), ee.setFloat2("scale", 1, 1)
              }, ee.Xx()?.postProcessManager.directRender([Ue], Fe, !0), be.restoreDefaultFramebuffer(), be._releaseTexture(ie), Ue && Ue.dispose(), Fe._swapAndDie(ie), ie.isReady = !0
            }))
          }))
        };
        Ue && (Ke ? Fe() : ee.onLoadObservable.addOnce(Fe))
      }
      static async EncodeTextureToRGBD(ee, ie) {
        let ye = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return ie.Nf().isWebGPU ? await He.e(652).then((() => He(63962))) : await He.e(634).then((() => He(63955))), await (0, be.d)("rgbdEncode", ee, ie, ye, 1, 5)
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);