export const id = 247;
export const ids = [247];
export const modules = {
  39804: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => mu,
      h: () => Ju
    });
    var Eu = yu(38448),
      Ku = yu(39582),
      Qu = yu(39774),
      mu = {};
    class Ju {
      constructor(uu) {
        this.attachedToElement = !1, this.attached = {}, this.camera = uu, this.checkInputs = () => {}
      }
      add(uu) {
        const Ru = uu.getSimpleName();
        this.attached[Ru] ? Eu.e.Warn("camera input of type " + Ru + " already exists on camera") : (this.attached[Ru] = uu, uu.camera = this.camera, uu.checkInputs && (this.checkInputs = this._addCheckInputs(uu.checkInputs.bind(uu))), this.attachedToElement && uu.attachControl(this.noPreventDefault))
      }
      remove(uu) {
        for (const Ru in this.attached) {
          const yu = this.attached[Ru];
          if (yu === uu) return yu.detachControl(), yu.camera = null, delete this.attached[Ru], void this.rebuildInputCheck()
        }
      }
      removeByType(uu) {
        for (const Ru in this.attached) {
          const yu = this.attached[Ru];
          yu.getClassName() === uu && (yu.detachControl(), yu.camera = null, delete this.attached[Ru], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(uu) {
        const Ru = this.checkInputs;
        return () => {
          Ru(), uu()
        }
      }
      attachInput(uu) {
        this.attachedToElement && uu.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          uu = !Qu.c.ForceAttachControlToAlwaysPreventDefault && uu, this.attachedToElement = !0, this.noPreventDefault = uu;
          for (const Ru in this.attached) this.attached[Ru].attachControl(uu)
        }
      }
      detachElement() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const Ru in this.attached) this.attached[Ru].detachControl(), uu && (this.attached[Ru].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const uu in this.attached) {
          const Ru = this.attached[uu];
          Ru.checkInputs && (this.checkInputs = this._addCheckInputs(Ru.checkInputs.bind(Ru)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(uu) {
        const Ru = {};
        for (const yu in this.attached) {
          const uu = this.attached[yu],
            Eu = Ku.c.Serialize(uu);
          Ru[uu.getClassName()] = Eu
        }
        uu.inputsmgr = Ru
      }
      parse(uu) {
        const Ru = uu.inputsmgr;
        if (Ru) {
          this.clear();
          for (const uu in Ru) {
            const yu = mu[uu];
            if (yu) {
              const Eu = Ru[uu],
                Qu = Ku.c.Parse((() => new yu), Eu, null);
              this.add(Qu)
            }
          }
        } else
          for (const yu in this.attached) {
            const Ru = mu[this.attached[yu].getClassName()];
            if (Ru) {
              const Eu = Ku.c.Parse((() => new Ru), uu, null);
              this.remove(this.attached[yu]), this.add(Eu)
            }
          }
      }
    }
  },
  40707: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Hu
    });
    var Eu = yu(39560),
      Ku = yu(39566),
      Qu = yu(39447),
      mu = yu(36830),
      Ju = yu(39555),
      Nu = yu(40054),
      Xu = yu(36871),
      Vu = yu(36858),
      ru = yu(39582),
      Bu = yu(39385),
      xu = yu(38448),
      Su = yu(39606),
      pu = yu(37665),
      Tu = yu(39639);
    var Wu = yu(39455);
    let ju = !1;
    let Hu = (() => {
        var uu;
        let Ru, yu, Xu, Hu, du, bu, Cu, ku, eu, Au = Ju.e,
          Du = [],
          Mu = [],
          Iu = [],
          Gu = [],
          Uu = [],
          nu = [],
          su = [],
          tu = [],
          lu = [],
          gu = [],
          cu = [],
          Lu = [],
          zu = [],
          Fu = [],
          wu = [];
        return uu = class extends Au {
          set boundingBoxSize(uu) {
            if (this._boundingBoxSize && this._boundingBoxSize.equals(uu)) return;
            this._boundingBoxSize = uu;
            const Ru = this.lD();
            Ru && Ru.markAllMaterialsAsDirty(1)
          }
          get boundingBoxSize() {
            return this._boundingBoxSize
          }
          set rotationY(uu) {
            this._rotationY = uu, this.setReflectionTextureMatrix(mu.d.RotationY(this._rotationY))
          }
          get rotationY() {
            return this._rotationY
          }
          get noMipmap() {
            return this._noMipmap
          }
          get forcedExtension() {
            return this._forcedExtension
          }
          constructor(uu, Ru) {
            let yu, Ku = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              Qu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Ju = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              Xu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              ru = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              Hu = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 5,
              du = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              bu = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              Cu = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
              ku = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : .8,
              eu = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 0,
              Au = arguments.length > 13 ? arguments[13] : void 0,
              Zu = arguments.length > 14 ? arguments[14] : void 0;
            super(Ru), this._delayedOnLoad = (0, Eu.l)(this, Du), this.onLoadObservable = new Vu.b, this.url = (0, Eu.l)(this, Mu, void 0), this.boundingBoxPosition = ((0, Eu.l)(this, Iu), (0, Eu.l)(this, Gu, mu.p.Zero())), this._boundingBoxSize = (0, Eu.l)(this, Uu), this._rotationY = 0, this._files = (0, Eu.l)(this, nu, null), this._forcedExtension = ((0, Eu.l)(this, su), (0, Eu.l)(this, tu, null)), this._extensions = ((0, Eu.l)(this, lu), (0, Eu.l)(this, gu, null)), this._textureMatrix = ((0, Eu.l)(this, cu), (0, Eu.l)(this, Lu, void 0)), this._textureMatrixRefraction = ((0, Eu.l)(this, zu), (0, Eu.l)(this, Fu, new mu.d)), this._format = (0, Eu.l)(this, wu), this._buffer = null, ju || (ju = !0, Wu.d.prototype._partialLoadFile = function(uu, Ru, yu, Eu) {
              let Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
              this._loadFile(uu, (uu => {
                yu[Ru] = uu, yu._internalCount++, 6 === yu._internalCount && Eu(yu)
              }), void 0, void 0, !0, ((uu, Ru) => {
                Ku && uu && Ku(uu.status + " " + uu.statusText, Ru)
              }))
            }, Wu.d.prototype._cascadeLoadFiles = function(uu, Ru, yu) {
              let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
              const Ku = [];
              Ku._internalCount = 0;
              for (let Qu = 0; Qu < 6; Qu++) this._partialLoadFile(yu[Qu], Qu, Ku, Ru, Eu)
            }, Wu.d.prototype._cascadeLoadImgs = function(uu, Ru, yu, Eu) {
              let Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                Qu = arguments.length > 5 ? arguments[5] : void 0;
              const mu = [];
              mu._internalCount = 0;
              for (let Ju = 0; Ju < 6; Ju++) this._partialLoadImg(Eu[Ju], Ju, mu, uu, Ru, yu, Ku, Qu)
            }, Wu.d.prototype._partialLoadImg = function(uu, Ru, yu, Eu, Ku, Qu) {
              let mu = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                Ju = arguments.length > 7 ? arguments[7] : void 0;
              const Nu = (0, pu.b)();
              (0, Su.r)(uu, (uu => {
                yu[Ru] = uu, yu._internalCount++, Eu && Eu.removePendingData(Nu), 6 === yu._internalCount && Qu && Qu(Ku, yu)
              }), ((uu, Ru) => {
                Eu && Eu.removePendingData(Nu), mu && mu(uu, Ru)
              }), Eu ? Eu.offlineProvider : null, Ju), Eu && Eu.addPendingData(Nu)
            }, Wu.d.prototype.createCubeTextureBase = function(uu, Ru, yu, Eu) {
              let Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                Qu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                mu = arguments.length > 6 ? arguments[6] : void 0,
                Ju = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                Nu = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
                Xu = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
                Vu = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
                ru = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
                Su = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
                pu = arguments.length > 13 && void 0 !== arguments[13] ? arguments[13] : null,
                Wu = arguments.length > 14 && void 0 !== arguments[14] && arguments[14],
                ju = arguments.length > 15 && void 0 !== arguments[15] ? arguments[15] : null;
              const Hu = ru || new Bu.c(this, 7);
              Hu.isCube = !0, Hu.url = uu, Hu.generateMipMaps = !Eu, Hu._lodGenerationScale = Xu, Hu._lodGenerationOffset = Vu, Hu._useSRGBBuffer = !!Wu && this._caps.supportSRGBBuffers && (this.version > 1 || this.isWebGPU || !!Eu), Hu !== ru && (Hu.label = uu.substring(0, 60)), this._doNotHandleContextLost || (Hu._extension = Ju, Hu._files = yu, Hu._buffer = ju);
              const du = uu;
              this._transformTextureUrl && !ru && (uu = this._transformTextureUrl(uu));
              const bu = Ju ?? function(uu) {
                  const Ru = uu.split("?")[0],
                    yu = Ru.lastIndexOf(".");
                  return yu > -1 ? Ru.substring(yu).toLowerCase() : ""
                }(uu),
                Cu = (0, Tu.e)(bu),
                ku = (uu, Ru) => {
                  Hu.dispose(), Qu ? Qu(uu, Ru) : uu && xu.e.Warn(uu)
                },
                eu = (Qu, ru) => {
                  uu === du ? Qu && ku(Qu.status + " " + Qu.statusText, ru) : (xu.e.Warn(`Failed to load ${uu}, falling back to the ${du}`), this.createCubeTextureBase(du, Ru, yu, !!Eu, Ku, ku, mu, Ju, Nu, Xu, Vu, Hu, Su, pu, Wu, ju))
                };
              if (Cu) Cu.then((Eu => {
                const Qu = uu => {
                  Su && Su(Hu, uu), Eu.loadCubeData(uu, Hu, Nu, Ku, ((uu, Ru) => {
                    ku(uu, Ru)
                  }))
                };
                ju ? Qu(ju) : yu && 6 === yu.length ? Eu.supportCascades ? this._cascadeLoadFiles(Ru, (uu => Qu(uu.map((uu => new Uint8Array(uu))))), yu, ku) : ku("Textures type does not support cascades.") : this._loadFile(uu, (uu => Qu(new Uint8Array(uu))), void 0, Ru ? Ru.offlineProvider || null : void 0, !0, eu)
              }));
              else {
                if (!yu || 0 === yu.length) throw new Error("Cannot load cubemap because files were not defined, or the correct loader was not found.");
                this._cascadeLoadImgs(Ru, Hu, ((uu, Ru) => {
                  pu && pu(uu, Ru)
                }), yu, ku)
              }
              return this._internalTexturesCache.push(Hu), Hu
            }), this.name = uu, this.url = uu, this._noMipmap = Qu, this.hasAlpha = !1, this.isCube = !0, this._textureMatrix = mu.d.Identity(), this.coordinatesMode = Nu.h.CUBIC_MODE;
            let hu = null;
            null === Ku || Array.isArray(Ku) ? (this._noMipmap = Qu, this._format = Hu, this._createPolynomials = Cu, yu = Ku, this._loaderOptions = Au, this._useSRGBBuffer = Zu, this._lodScale = ku, this._lodOffset = eu) : (yu = Ku.extensions ?? null, this._noMipmap = Ku.noMipmap ?? !1, Ju = Ku.files ?? null, hu = Ku.buffer ?? null, this._format = Ku.format ?? 5, du = Ku.prefiltered ?? !1, bu = Ku.forcedExtension ?? null, this._createPolynomials = Ku.createPolynomials ?? !1, this._lodScale = Ku.lodScale ?? .8, this._lodOffset = Ku.lodOffset ?? 0, this._loaderOptions = Ku.loaderOptions, this._useSRGBBuffer = Ku.useSRGBBuffer, this._sphericalPolynomialTargetSize = Ku.sphericalPolynomialTargetSize ?? 0, Xu = Ku.onLoad ?? null, ru = Ku.onError ?? null), (uu || Ju) && this.updateURL(uu, bu, Xu, du, ru, yu, this.lD()?.useDelayedTextureLoading, Ju, hu)
          }
          getClassName() {
            return "CubeTexture"
          }
          updateURL(uu) {
            let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              Eu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              Qu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              mu = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
              Ju = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              Nu = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
            this.name && !this.name.startsWith("data:") || (this.name = uu), this.url = uu, Ru && (this._forcedExtension = Ru);
            const Xu = uu.lastIndexOf("."),
              Vu = Ru || (Xu > -1 ? uu.substring(Xu).toLowerCase() : ""),
              ru = 0 === Vu.indexOf(".dds"),
              Bu = 0 === Vu.indexOf(".env"),
              xu = 0 === Vu.indexOf(".basis");
            if (Bu ? (this.gammaSpace = !1, this._prefiltered = !1, this.anisotropicFilteringLevel = 1) : (this._prefiltered = Eu, Eu && (this.gammaSpace = !1, this.anisotropicFilteringLevel = 1)), Ju) this._files = Ju;
            else if (xu || Bu || ru || Qu || (Qu = ["_px.jpg", "_py.jpg", "_pz.jpg", "_nx.jpg", "_ny.jpg", "_nz.jpg"]), this._files = this._files || [], this._files.length = 0, Qu) {
              for (let Ru = 0; Ru < Qu.length; Ru++) this._files.push(uu + Qu[Ru]);
              this._extensions = Qu
            }
            this._buffer = Nu, mu ? (this.delayLoadState = 4, this._delayedOnLoad = yu, this._delayedOnError = Ku) : this._loadTexture(yu, Ku)
          }
          delayLoad(uu) {
            4 === this.delayLoadState && (uu && (this._forcedExtension = uu), this.delayLoadState = 1, this._loadTexture(this._delayedOnLoad, this._delayedOnError))
          }
          getReflectionTextureMatrix() {
            return this._textureMatrix
          }
          setReflectionTextureMatrix(uu) {
            if (uu.updateFlag === this._textureMatrix.updateFlag) return;
            if (uu.isIdentity() !== this._textureMatrix.isIdentity() && this.lD()?.markAllMaterialsAsDirty(1, (uu => -1 !== uu.getActiveTextures().indexOf(this))), this._textureMatrix = uu, !this.lD()?.useRightHandedSystem) return;
            const Ru = mu.m.MS[0],
              yu = mu.m.Quaternion[0],
              Eu = mu.m.MS[1];
            this._textureMatrix.decompose(Ru, yu, Eu), yu.z *= -1, yu.w *= -1, mu.d.ComposeToRef(Ru, yu, Eu, this._textureMatrixRefraction)
          }
          getRefractionTextureMatrix() {
            return this.lD()?.useRightHandedSystem ? this._textureMatrixRefraction : this._textureMatrix
          }
          _loadTexture() {
            let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            const yu = this.lD(),
              Eu = this._texture;
            this._texture = this._getFromCache(this.url, this._noMipmap, void 0, void 0, this._useSRGBBuffer, this.isCube);
            const Ku = () => {
                this.onLoadObservable.notifyObservers(this), Eu && (Eu.dispose(), this.lD()?.markAllMaterialsAsDirty(1)), uu && uu()
              },
              mu = (uu, yu) => {
                this._loadingError = !0, this._errorObject = {
                  message: uu,
                  exception: yu
                }, Ru && Ru(uu, yu), Nu.h.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            this._texture ? this._texture.isReady ? Qu.e.SetImmediate((() => Ku())) : this._texture.onLoadedObservable.add((() => Ku())) : (this._prefiltered ? this._texture = this._getEngine().createPrefilteredCubeTexture(this.url, yu, this._lodScale, this._lodOffset, uu, mu, this._format, this._forcedExtension, this._createPolynomials, this._buffer) : this._texture = this._getEngine().createCubeTexture(this.url, yu, this._files, this._noMipmap, uu, mu, this._format, this._forcedExtension, !1, this._lodScale, this._lodOffset, null, this._loaderOptions, !!this._useSRGBBuffer, this._buffer), this._texture?.onLoadedObservable.add((() => this.onLoadObservable.notifyObservers(this))))
          }
          clone() {
            let Ru = 0;
            const yu = this.irradianceTexture,
              Eu = ru.c.Clone((() => {
                const yu = new uu(this.url, this.lD() || this._getEngine(), this._extensions, this._noMipmap, this._files);
                return Ru = yu.uniqueId, yu
              }), this);
            return Eu.uniqueId = Ru, yu && !this.irradianceTexture && (this.irradianceTexture = yu), Eu
          }
        }, (() => {
          const Qu = "function" === typeof Symbol && Symbol.metadata ? Object.create(Au[Symbol.metadata] ?? null) : void 0;
          Ru = [(0, Ku.K)()], yu = [(0, Ku.G)()], Xu = [(0, Ku.G)()], Hu = [(0, Ku.K)("rotationY")], du = [(0, Ku.K)("files")], bu = [(0, Ku.K)("forcedExtension")], Cu = [(0, Ku.K)("extensions")], ku = [(0, Ku.w)("textureMatrix")], eu = [(0, Ku.w)("textureMatrixRefraction")], (0, Eu.h)(uu, null, Xu, {
            kind: "getter",
            name: "boundingBoxSize",
            static: !1,
            private: !1,
            access: {
              has: uu => "boundingBoxSize" in uu,
              get: uu => uu.boundingBoxSize
            },
            metadata: Qu
          }, null, Du), (0, Eu.h)(uu, null, Hu, {
            kind: "setter",
            name: "rotationY",
            static: !1,
            private: !1,
            access: {
              has: uu => "rotationY" in uu,
              set: (uu, Ru) => {
                uu.rotationY = Ru
              }
            },
            metadata: Qu
          }, null, Du), (0, Eu.h)(null, null, Ru, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: uu => "url" in uu,
              get: uu => uu.url,
              set: (uu, Ru) => {
                uu.url = Ru
              }
            },
            metadata: Qu
          }, Mu, Iu), (0, Eu.h)(null, null, yu, {
            kind: "field",
            name: "boundingBoxPosition",
            static: !1,
            private: !1,
            access: {
              has: uu => "boundingBoxPosition" in uu,
              get: uu => uu.boundingBoxPosition,
              set: (uu, Ru) => {
                uu.boundingBoxPosition = Ru
              }
            },
            metadata: Qu
          }, Gu, Uu), (0, Eu.h)(null, null, du, {
            kind: "field",
            name: "_files",
            static: !1,
            private: !1,
            access: {
              has: uu => "_files" in uu,
              get: uu => uu._files,
              set: (uu, Ru) => {
                uu._files = Ru
              }
            },
            metadata: Qu
          }, nu, su), (0, Eu.h)(null, null, bu, {
            kind: "field",
            name: "_forcedExtension",
            static: !1,
            private: !1,
            access: {
              has: uu => "_forcedExtension" in uu,
              get: uu => uu._forcedExtension,
              set: (uu, Ru) => {
                uu._forcedExtension = Ru
              }
            },
            metadata: Qu
          }, tu, lu), (0, Eu.h)(null, null, Cu, {
            kind: "field",
            name: "_extensions",
            static: !1,
            private: !1,
            access: {
              has: uu => "_extensions" in uu,
              get: uu => uu._extensions,
              set: (uu, Ru) => {
                uu._extensions = Ru
              }
            },
            metadata: Qu
          }, gu, cu), (0, Eu.h)(null, null, ku, {
            kind: "field",
            name: "_textureMatrix",
            static: !1,
            private: !1,
            access: {
              has: uu => "_textureMatrix" in uu,
              get: uu => uu._textureMatrix,
              set: (uu, Ru) => {
                uu._textureMatrix = Ru
              }
            },
            metadata: Qu
          }, Lu, zu), (0, Eu.h)(null, null, eu, {
            kind: "field",
            name: "_textureMatrixRefraction",
            static: !1,
            private: !1,
            access: {
              has: uu => "_textureMatrixRefraction" in uu,
              get: uu => uu._textureMatrixRefraction,
              set: (uu, Ru) => {
                uu._textureMatrixRefraction = Ru
              }
            },
            metadata: Qu
          }, Fu, wu), Qu && Object.defineProperty(uu, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Qu
          })
        })(), uu
      })(),
      du = !1;

    function bu(uu, Ru, yu) {
      let Eu = "";
      for (const Ku of uu) Eu += Ku;
      return new Hu(Eu, Ru, null, yu, uu)
    }

    function Cu(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        Eu = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const Ku = Ru.useDelayedTextureLoading;
      Ru.useDelayedTextureLoading = !1;
      const Qu = new Hu(uu, Ru, null, !1, null, null, null, void 0, !0, yu, Eu);
      return Ru.useDelayedTextureLoading = Ku, Qu
    }

    function ku(uu, Ru, yu) {
      const Eu = ru.c.Parse((() => {
        let Eu = !1;
        return uu.prefiltered && (Eu = uu.prefiltered), new Hu(yu + (uu.url ?? uu.name), Ru, uu.extensions, !1, uu.files || null, null, null, void 0, Eu, uu.forcedExtension)
      }), uu, Ru);
      if (uu.boundingBoxPosition && (Eu.boundingBoxPosition = mu.p.FromArray(uu.boundingBoxPosition)), uu.boundingBoxSize && (Eu.boundingBoxSize = mu.p.FromArray(uu.boundingBoxSize)), uu.animations)
        for (let Ku = 0; Ku < uu.animations.length; Ku++) {
          const Ru = uu.animations[Ku],
            yu = (0, Xu.b)("BABYLON.Animation");
          yu && Eu.animations.push(yu.Parse(Ru))
        }
      return Eu
    }
    du || (du = !0, Hu.CreateFromImages = bu, Hu.CreateFromPrefilteredData = Cu, Hu.Parse = ku, Nu.h._CubeTextureParser = ku, (0, Xu.c)("BABYLON.CubeTexture", Hu))
  },
  40750: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Xu
    });
    var Eu = yu(38448),
      Ku = yu(40054),
      Qu = yu(39496),
      mu = yu(39396),
      Ju = yu(39385);
    let Nu = !1;
    class Xu extends Ku.h {
      constructor(uu, Ru, yu) {
        let Eu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Xu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          Vu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5,
          ru = arguments.length > 6 ? arguments[6] : void 0;
        const Bu = !yu || yu._isScene;
        super(null, Bu ? yu : yu?.cp, Bu ? !Eu : yu, ru, Xu, void 0, void 0, void 0, void 0, Vu), Nu || (Nu = !0, mu.ThinEngine.prototype.createDynamicTexture = function(uu, Ru, yu, Eu) {
          const Ku = new Ju.c(this, 4);
          return Ku.baseWidth = uu, Ku.baseHeight = Ru, yu && (uu = this.needPOTTextures ? (0, Qu.e)(uu, this._caps.maxTextureSize) : uu, Ru = this.needPOTTextures ? (0, Qu.e)(Ru, this._caps.maxTextureSize) : Ru), Ku.width = uu, Ku.height = Ru, Ku.isReady = !1, Ku.generateMipMaps = yu, Ku.samplingMode = Eu, this.updateTextureSamplingMode(Eu, Ku), this._internalTexturesCache.push(Ku), Ku
        }, mu.ThinEngine.prototype.updateDynamicTexture = function(uu, Ru, yu) {
          let Eu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            Ku = arguments.length > 4 ? arguments[4] : void 0,
            Qu = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
          if (!uu) return;
          const mu = this._gl,
            Ju = mu.TEXTURE_2D,
            Nu = this._bindTextureDirectly(Ju, uu, !0, Qu);
          this._unpackFlipY(void 0 === yu ? uu.invertY : yu), Eu && mu.pixelStorei(mu.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
          const Xu = this._getWebGLTextureType(uu.type),
            Vu = this._getInternalFormat(Ku || uu.format),
            ru = this._getRGBABufferInternalSizedFormat(uu.type, Vu);
          mu.texImage2D(Ju, 0, ru, Vu, Xu, Ru), uu.generateMipMaps && mu.generateMipmap(Ju), Nu || this._bindTextureDirectly(Ju, null), Eu && mu.pixelStorei(mu.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), Ku && (uu.format = Ku), uu._dynamicTextureSource = Ru, uu._premulAlpha = Eu, uu.invertY = yu || !1, uu.isReady = !0
        }), this.name = uu, this.wrapU = Ku.h.CLAMP_ADDRESSMODE, this.wrapV = Ku.h.CLAMP_ADDRESSMODE, this._generateMipMaps = Eu;
        const xu = this._getEngine();
        if (!xu) return;
        if (Ru.getContext) this._canvas = Ru, this._ownCanvas = !1, this._texture = xu.createDynamicTexture(this._canvas.width, this._canvas.height, Eu, Xu);
        else {
          this._canvas = xu.createCanvas(1, 1), this._ownCanvas = !0;
          const uu = Ru;
          uu.width || 0 === uu.width ? this._texture = xu.createDynamicTexture(uu.width, uu.height, Eu, Xu) : this._texture = xu.createDynamicTexture(Ru, Ru, Eu, Xu)
        }
        const Su = this.getSize();
        this._canvas.width !== Su.width && (this._canvas.width = Su.width), this._canvas.height !== Su.height && (this._canvas.height = Su.height), this._context = this._canvas.getContext("2d")
      }
      getClassName() {
        return "DynamicTexture"
      }
      get canRescale() {
        return !0
      }
      _recreate(uu) {
        this._canvas.width = uu.width, this._canvas.height = uu.height, this.releaseInternalTexture(), this._texture = this._getEngine().createDynamicTexture(uu.width, uu.height, this._generateMipMaps, this.samplingMode)
      }
      scale(uu) {
        const Ru = this.getSize();
        Ru.width *= uu, Ru.height *= uu, this._recreate(Ru)
      }
      scaleTo(uu, Ru) {
        const yu = this.getSize();
        yu.width = uu, yu.height = Ru, this._recreate(yu)
      }
      getContext() {
        return this._context
      }
      clear(uu) {
        const Ru = this.getSize();
        uu && (this._context.fillStyle = uu), this._context.clearRect(0, 0, Ru.width, Ru.height)
      }
      update(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._texture && this._getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === uu || uu, Ru, this._format || void 0, void 0, yu)
      }
      drawText(uu, Ru, yu, Eu, Ku, Qu, mu) {
        let Ju = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const Nu = this.getSize();
        if (Qu && (this._context.fillStyle = Qu, this._context.fillRect(0, 0, Nu.width, Nu.height)), this._context.font = Eu, null === Ru || void 0 === Ru) {
          const yu = this._context.measureText(uu);
          Ru = (Nu.width - yu.width) / 2
        }
        if (null === yu || void 0 === yu) {
          const uu = parseInt(Eu.replace(/\D/g, ""));
          yu = Nu.height / 2 + uu / 3.65
        }
        this._context.fillStyle = Ku || "", this._context.fillText(uu, Ru, yu), Ju && this.update(mu)
      }
      dispose() {
        super.dispose(), this._ownCanvas && this._canvas?.remove?.(), this._canvas = null, this._context = null
      }
      clone() {
        const uu = this.lD();
        if (!uu) return this;
        const Ru = this.getSize(),
          yu = new Xu(this.name, Ru, uu, this._generateMipMaps);
        return yu.hasAlpha = this.hasAlpha, yu.level = this.level, yu.wrapU = this.wrapU, yu.wrapV = this.wrapV, yu
      }
      serialize() {
        const uu = this.lD();
        uu && !uu.isReady() && Eu.e.Warn("The scene must be ready before serializing the dynamic texture");
        const Ru = super.serialize();
        return Xu._IsCanvasElement(this._canvas) && (Ru.base64String = this._canvas.toDataURL()), Ru.invertY = this._invertY, Ru.samplingMode = this.samplingMode, Ru
      }
      static _IsCanvasElement(uu) {
        return void 0 !== uu.toDataURL
      }
      _rebuild() {
        this.update()
      }
    }
  },
  40723: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Ku
    });
    var Eu = yu(40054);
    class Ku extends Eu.h {
      get depth() {
        return this._depth
      }
      constructor(uu, Ru, yu, Ku, Qu, mu) {
        let Ju = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          Nu = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          Xu = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Eu.h.TRILINEAR_SAMPLINGMODE,
          Vu = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          ru = arguments.length > 10 ? arguments[10] : void 0,
          Bu = arguments.length > 11 ? arguments[11] : void 0;
        super(null, mu, !Ju, Nu), this.format = Qu, this._texture = mu.eS().createRawTexture2DArray(uu, Ru, yu, Ku, Qu, Ju, Nu, Xu, null, Vu, ru ?? 0, Bu), this._depth = Ku, this.is2DArray = !0
      }
      update(uu) {
        this.updateMipLevel(uu, 0)
      }
      updateMipLevel(uu, Ru) {
        this._texture && this._getEngine().updateRawTexture2DArray(this._texture, uu, this._texture.format, this._texture.invertY, null, this._texture.type, Ru)
      }
      static CreateRGBATexture(uu, Ru, yu, Eu, Qu) {
        return new Ku(uu, Ru, yu, Eu, 5, Qu, !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0)
      }
    }
  },
  40718: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Eu.d
    });
    var Eu = yu(39939);
    (0, Eu.f)()
  },
  39643: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Eu.i
    });
    var Eu = yu(39647);
    (0, Eu.e)()
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);