export const id = 261;
export const ids = [261];
export const modules = {
  40499: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Xu,
      h: () => lu
    });
    var su = ju(39032),
      Uu = ju(40272),
      Zu = ju(40462),
      Xu = {};
    class lu {
      constructor(uu) {
        this.attachedToElement = !1, this.attached = {}, this.camera = uu, this.checkInputs = () => {}
      }
      add(uu) {
        const Eu = uu.getSimpleName();
        this.attached[Eu] ? su.b.Warn("camera input of type " + Eu + " already exists on camera") : (this.attached[Eu] = uu, uu.camera = this.camera, uu.checkInputs && (this.checkInputs = this._addCheckInputs(uu.checkInputs.bind(uu))), this.attachedToElement && uu.attachControl(this.noPreventDefault))
      }
      remove(uu) {
        for (const Eu in this.attached) {
          const ju = this.attached[Eu];
          if (ju === uu) return ju.detachControl(), ju.camera = null, delete this.attached[Eu], void this.rebuildInputCheck()
        }
      }
      removeByType(uu) {
        for (const Eu in this.attached) {
          const ju = this.attached[Eu];
          ju.getClassName() === uu && (ju.detachControl(), ju.camera = null, delete this.attached[Eu], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(uu) {
        const Eu = this.checkInputs;
        return () => {
          Eu(), uu()
        }
      }
      attachInput(uu) {
        this.attachedToElement && uu.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          uu = !Zu.e.ForceAttachControlToAlwaysPreventDefault && uu, this.attachedToElement = !0, this.noPreventDefault = uu;
          for (const Eu in this.attached) this.attached[Eu].attachControl(uu)
        }
      }
      detachElement() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const Eu in this.attached) this.attached[Eu].detachControl(), uu && (this.attached[Eu].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const uu in this.attached) {
          const Eu = this.attached[uu];
          Eu.checkInputs && (this.checkInputs = this._addCheckInputs(Eu.checkInputs.bind(Eu)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(uu) {
        const Eu = {};
        for (const ju in this.attached) {
          const uu = this.attached[ju],
            su = Uu.e.Serialize(uu);
          Eu[uu.getClassName()] = su
        }
        uu.inputsmgr = Eu
      }
      parse(uu) {
        const Eu = uu.inputsmgr;
        if (Eu) {
          this.clear();
          for (const uu in Eu) {
            const ju = Xu[uu];
            if (ju) {
              const su = Eu[uu],
                Zu = Uu.e.Parse((() => new ju), su, null);
              this.add(Zu)
            }
          }
        } else
          for (const ju in this.attached) {
            const Eu = Xu[this.attached[ju].getClassName()];
            if (Eu) {
              const su = Uu.e.Parse((() => new Eu), uu, null);
              this.remove(this.attached[ju]), this.add(su)
            }
          }
      }
    }
  },
  41353: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Mu
    });
    var su = ju(40255),
      Uu = ju(40258),
      Zu = ju(40164),
      Xu = ju(37494),
      lu = ju(40253),
      qu = ju(40739),
      fu = ju(37532),
      Cu = ju(37514),
      bu = ju(40272),
      cu = ju(40108),
      Nu = ju(39032),
      Ou = ju(40294),
      Yu = ju(38303),
      hu = ju(40339);
    var Du = ju(40168);
    let gu = !1;
    let Mu = (() => {
        var uu;
        let Eu, ju, fu, Mu, eu, Gu, pu, wu, Ju, du = lu.c,
          au = [],
          Pu = [],
          ou = [],
          ku = [],
          mu = [],
          vu = [],
          Ku = [],
          Vu = [],
          ru = [],
          Qu = [],
          iu = [],
          Wu = [],
          Su = [],
          Iu = [],
          Fu = [];
        return uu = class extends du {
          set boundingBoxSize(uu) {
            if (this._boundingBoxSize && this._boundingBoxSize.equals(uu)) return;
            this._boundingBoxSize = uu;
            const Eu = this.hV();
            Eu && Eu.markAllMaterialsAsDirty(1)
          }
          get boundingBoxSize() {
            return this._boundingBoxSize
          }
          set rotationY(uu) {
            this._rotationY = uu, this.setReflectionTextureMatrix(Xu.e.RotationY(this._rotationY))
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
          constructor(uu, Eu) {
            let ju, Uu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              Zu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              lu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              fu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              bu = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              Mu = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 5,
              eu = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              Gu = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              pu = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
              wu = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : .8,
              Ju = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 0,
              du = arguments.length > 13 ? arguments[13] : void 0,
              Bu = arguments.length > 14 ? arguments[14] : void 0;
            super(Eu), this._delayedOnLoad = (0, su.g)(this, au), this.onLoadObservable = new Cu.d, this.url = (0, su.g)(this, Pu, void 0), this.boundingBoxPosition = ((0, su.g)(this, ou), (0, su.g)(this, ku, Xu.t.Zero())), this._boundingBoxSize = (0, su.g)(this, mu), this._rotationY = 0, this._files = (0, su.g)(this, vu, null), this._forcedExtension = ((0, su.g)(this, Ku), (0, su.g)(this, Vu, null)), this._extensions = ((0, su.g)(this, ru), (0, su.g)(this, Qu, null)), this._textureMatrix = ((0, su.g)(this, iu), (0, su.g)(this, Wu, void 0)), this._textureMatrixRefraction = ((0, su.g)(this, Su), (0, su.g)(this, Iu, new Xu.e)), this._format = (0, su.g)(this, Fu), this._buffer = null, gu || (gu = !0, Du.d.prototype._partialLoadFile = function(uu, Eu, ju, su) {
              let Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
              this._loadFile(uu, (uu => {
                ju[Eu] = uu, ju._internalCount++, 6 === ju._internalCount && su(ju)
              }), void 0, void 0, !0, ((uu, Eu) => {
                Uu && uu && Uu(uu.status + " " + uu.statusText, Eu)
              }))
            }, Du.d.prototype._cascadeLoadFiles = function(uu, Eu, ju) {
              let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
              const Uu = [];
              Uu._internalCount = 0;
              for (let Zu = 0; Zu < 6; Zu++) this._partialLoadFile(ju[Zu], Zu, Uu, Eu, su)
            }, Du.d.prototype._cascadeLoadImgs = function(uu, Eu, ju, su) {
              let Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                Zu = arguments.length > 5 ? arguments[5] : void 0;
              const Xu = [];
              Xu._internalCount = 0;
              for (let lu = 0; lu < 6; lu++) this._partialLoadImg(su[lu], lu, Xu, uu, Eu, ju, Uu, Zu)
            }, Du.d.prototype._partialLoadImg = function(uu, Eu, ju, su, Uu, Zu) {
              let Xu = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                lu = arguments.length > 7 ? arguments[7] : void 0;
              const qu = (0, Yu.e)();
              (0, Ou.q)(uu, (uu => {
                ju[Eu] = uu, ju._internalCount++, su && su.removePendingData(qu), 6 === ju._internalCount && Zu && Zu(Uu, ju)
              }), ((uu, Eu) => {
                su && su.removePendingData(qu), Xu && Xu(uu, Eu)
              }), su ? su.offlineProvider : null, lu), su && su.addPendingData(qu)
            }, Du.d.prototype.createCubeTextureBase = function(uu, Eu, ju, su) {
              let Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                Zu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                Xu = arguments.length > 6 ? arguments[6] : void 0,
                lu = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                qu = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
                fu = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
                Cu = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
                bu = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
                Ou = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
                Yu = arguments.length > 13 && void 0 !== arguments[13] ? arguments[13] : null,
                Du = arguments.length > 14 && void 0 !== arguments[14] && arguments[14],
                gu = arguments.length > 15 && void 0 !== arguments[15] ? arguments[15] : null;
              const Mu = bu || new cu.c(this, 7);
              Mu.isCube = !0, Mu.url = uu, Mu.generateMipMaps = !su, Mu._lodGenerationScale = fu, Mu._lodGenerationOffset = Cu, Mu._useSRGBBuffer = !!Du && this._caps.supportSRGBBuffers && (this.version > 1 || this.isWebGPU || !!su), Mu !== bu && (Mu.label = uu.substring(0, 60)), this._doNotHandleContextLost || (Mu._extension = lu, Mu._files = ju, Mu._buffer = gu);
              const eu = uu;
              this._transformTextureUrl && !bu && (uu = this._transformTextureUrl(uu));
              const Gu = lu ?? function(uu) {
                  const Eu = uu.split("?")[0],
                    ju = Eu.lastIndexOf(".");
                  return ju > -1 ? Eu.substring(ju).toLowerCase() : ""
                }(uu),
                pu = (0, hu.d)(Gu),
                wu = (uu, Eu) => {
                  Mu.dispose(), Zu ? Zu(uu, Eu) : uu && Nu.b.Warn(uu)
                },
                Ju = (Zu, bu) => {
                  uu === eu ? Zu && wu(Zu.status + " " + Zu.statusText, bu) : (Nu.b.Warn(`Failed to load ${uu}, falling back to the ${eu}`), this.createCubeTextureBase(eu, Eu, ju, !!su, Uu, wu, Xu, lu, qu, fu, Cu, Mu, Ou, Yu, Du, gu))
                };
              if (pu) pu.then((su => {
                const Zu = uu => {
                  Ou && Ou(Mu, uu), su.loadCubeData(uu, Mu, qu, Uu, ((uu, Eu) => {
                    wu(uu, Eu)
                  }))
                };
                gu ? Zu(gu) : ju && 6 === ju.length ? su.supportCascades ? this._cascadeLoadFiles(Eu, (uu => Zu(uu.map((uu => new Uint8Array(uu))))), ju, wu) : wu("Textures type does not support cascades.") : this._loadFile(uu, (uu => Zu(new Uint8Array(uu))), void 0, Eu ? Eu.offlineProvider || null : void 0, !0, Ju)
              }));
              else {
                if (!ju || 0 === ju.length) throw new Error("Cannot load cubemap because files were not defined, or the correct loader was not found.");
                this._cascadeLoadImgs(Eu, Mu, ((uu, Eu) => {
                  Yu && Yu(uu, Eu)
                }), ju, wu)
              }
              return this._internalTexturesCache.push(Mu), Mu
            }), this.name = uu, this.url = uu, this._noMipmap = Zu, this.hasAlpha = !1, this.isCube = !0, this._textureMatrix = Xu.e.Identity(), this.coordinatesMode = qu.g.CUBIC_MODE;
            let Lu = null;
            null === Uu || Array.isArray(Uu) ? (this._noMipmap = Zu, this._format = Mu, this._createPolynomials = pu, ju = Uu, this._loaderOptions = du, this._useSRGBBuffer = Bu, this._lodScale = wu, this._lodOffset = Ju) : (ju = Uu.extensions ?? null, this._noMipmap = Uu.noMipmap ?? !1, lu = Uu.files ?? null, Lu = Uu.buffer ?? null, this._format = Uu.format ?? 5, eu = Uu.prefiltered ?? !1, Gu = Uu.forcedExtension ?? null, this._createPolynomials = Uu.createPolynomials ?? !1, this._lodScale = Uu.lodScale ?? .8, this._lodOffset = Uu.lodOffset ?? 0, this._loaderOptions = Uu.loaderOptions, this._useSRGBBuffer = Uu.useSRGBBuffer, this._sphericalPolynomialTargetSize = Uu.sphericalPolynomialTargetSize ?? 0, fu = Uu.onLoad ?? null, bu = Uu.onError ?? null), (uu || lu) && this.updateURL(uu, Gu, fu, eu, bu, ju, this.hV()?.useDelayedTextureLoading, lu, Lu)
          }
          getClassName() {
            return "CubeTexture"
          }
          updateURL(uu) {
            let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              su = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              Zu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              Xu = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
              lu = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              qu = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
            this.name && !this.name.startsWith("data:") || (this.name = uu), this.url = uu, Eu && (this._forcedExtension = Eu);
            const fu = uu.lastIndexOf("."),
              Cu = Eu || (fu > -1 ? uu.substring(fu).toLowerCase() : ""),
              bu = 0 === Cu.indexOf(".dds"),
              cu = 0 === Cu.indexOf(".env"),
              Nu = 0 === Cu.indexOf(".basis");
            if (cu ? (this.gammaSpace = !1, this._prefiltered = !1, this.anisotropicFilteringLevel = 1) : (this._prefiltered = su, su && (this.gammaSpace = !1, this.anisotropicFilteringLevel = 1)), lu) this._files = lu;
            else if (Nu || cu || bu || Zu || (Zu = ["_px.jpg", "_py.jpg", "_pz.jpg", "_nx.jpg", "_ny.jpg", "_nz.jpg"]), this._files = this._files || [], this._files.length = 0, Zu) {
              for (let Eu = 0; Eu < Zu.length; Eu++) this._files.push(uu + Zu[Eu]);
              this._extensions = Zu
            }
            this._buffer = qu, Xu ? (this.delayLoadState = 4, this._delayedOnLoad = ju, this._delayedOnError = Uu) : this._loadTexture(ju, Uu)
          }
          delayLoad(uu) {
            4 === this.delayLoadState && (uu && (this._forcedExtension = uu), this.delayLoadState = 1, this._loadTexture(this._delayedOnLoad, this._delayedOnError))
          }
          getReflectionTextureMatrix() {
            return this._textureMatrix
          }
          setReflectionTextureMatrix(uu) {
            if (uu.updateFlag === this._textureMatrix.updateFlag) return;
            if (uu.isIdentity() !== this._textureMatrix.isIdentity() && this.hV()?.markAllMaterialsAsDirty(1, (uu => -1 !== uu.getActiveTextures().indexOf(this))), this._textureMatrix = uu, !this.hV()?.useRightHandedSystem) return;
            const Eu = Xu.m.dO[0],
              ju = Xu.m.Quaternion[0],
              su = Xu.m.dO[1];
            this._textureMatrix.decompose(Eu, ju, su), ju.z *= -1, ju.w *= -1, Xu.e.ComposeToRef(Eu, ju, su, this._textureMatrixRefraction)
          }
          getRefractionTextureMatrix() {
            return this.hV()?.useRightHandedSystem ? this._textureMatrixRefraction : this._textureMatrix
          }
          _loadTexture() {
            let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            const ju = this.hV(),
              su = this._texture;
            this._texture = this._getFromCache(this.url, this._noMipmap, void 0, void 0, this._useSRGBBuffer, this.isCube);
            const Uu = () => {
                this.onLoadObservable.notifyObservers(this), su && (su.dispose(), this.hV()?.markAllMaterialsAsDirty(1)), uu && uu()
              },
              Xu = (uu, ju) => {
                this._loadingError = !0, this._errorObject = {
                  message: uu,
                  exception: ju
                }, Eu && Eu(uu, ju), qu.g.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            this._texture ? this._texture.isReady ? Zu.c.SetImmediate((() => Uu())) : this._texture.onLoadedObservable.add((() => Uu())) : (this._prefiltered ? this._texture = this._getEngine().createPrefilteredCubeTexture(this.url, ju, this._lodScale, this._lodOffset, uu, Xu, this._format, this._forcedExtension, this._createPolynomials, this._buffer) : this._texture = this._getEngine().createCubeTexture(this.url, ju, this._files, this._noMipmap, uu, Xu, this._format, this._forcedExtension, !1, this._lodScale, this._lodOffset, null, this._loaderOptions, !!this._useSRGBBuffer, this._buffer), this._texture?.onLoadedObservable.add((() => this.onLoadObservable.notifyObservers(this))))
          }
          clone() {
            let Eu = 0;
            const ju = this.irradianceTexture,
              su = bu.e.Clone((() => {
                const ju = new uu(this.url, this.hV() || this._getEngine(), this._extensions, this._noMipmap, this._files);
                return Eu = ju.uniqueId, ju
              }), this);
            return su.uniqueId = Eu, ju && !this.irradianceTexture && (this.irradianceTexture = ju), su
          }
        }, (() => {
          const Zu = "function" === typeof Symbol && Symbol.metadata ? Object.create(du[Symbol.metadata] ?? null) : void 0;
          Eu = [(0, Uu.E)()], ju = [(0, Uu.A)()], fu = [(0, Uu.A)()], Mu = [(0, Uu.E)("rotationY")], eu = [(0, Uu.E)("files")], Gu = [(0, Uu.E)("forcedExtension")], pu = [(0, Uu.E)("extensions")], wu = [(0, Uu.r)("textureMatrix")], Ju = [(0, Uu.r)("textureMatrixRefraction")], (0, su.e)(uu, null, fu, {
            kind: "getter",
            name: "boundingBoxSize",
            static: !1,
            private: !1,
            access: {
              has: uu => "boundingBoxSize" in uu,
              get: uu => uu.boundingBoxSize
            },
            metadata: Zu
          }, null, au), (0, su.e)(uu, null, Mu, {
            kind: "setter",
            name: "rotationY",
            static: !1,
            private: !1,
            access: {
              has: uu => "rotationY" in uu,
              set: (uu, Eu) => {
                uu.rotationY = Eu
              }
            },
            metadata: Zu
          }, null, au), (0, su.e)(null, null, Eu, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: uu => "url" in uu,
              get: uu => uu.url,
              set: (uu, Eu) => {
                uu.url = Eu
              }
            },
            metadata: Zu
          }, Pu, ou), (0, su.e)(null, null, ju, {
            kind: "field",
            name: "boundingBoxPosition",
            static: !1,
            private: !1,
            access: {
              has: uu => "boundingBoxPosition" in uu,
              get: uu => uu.boundingBoxPosition,
              set: (uu, Eu) => {
                uu.boundingBoxPosition = Eu
              }
            },
            metadata: Zu
          }, ku, mu), (0, su.e)(null, null, eu, {
            kind: "field",
            name: "_files",
            static: !1,
            private: !1,
            access: {
              has: uu => "_files" in uu,
              get: uu => uu._files,
              set: (uu, Eu) => {
                uu._files = Eu
              }
            },
            metadata: Zu
          }, vu, Ku), (0, su.e)(null, null, Gu, {
            kind: "field",
            name: "_forcedExtension",
            static: !1,
            private: !1,
            access: {
              has: uu => "_forcedExtension" in uu,
              get: uu => uu._forcedExtension,
              set: (uu, Eu) => {
                uu._forcedExtension = Eu
              }
            },
            metadata: Zu
          }, Vu, ru), (0, su.e)(null, null, pu, {
            kind: "field",
            name: "_extensions",
            static: !1,
            private: !1,
            access: {
              has: uu => "_extensions" in uu,
              get: uu => uu._extensions,
              set: (uu, Eu) => {
                uu._extensions = Eu
              }
            },
            metadata: Zu
          }, Qu, iu), (0, su.e)(null, null, wu, {
            kind: "field",
            name: "_textureMatrix",
            static: !1,
            private: !1,
            access: {
              has: uu => "_textureMatrix" in uu,
              get: uu => uu._textureMatrix,
              set: (uu, Eu) => {
                uu._textureMatrix = Eu
              }
            },
            metadata: Zu
          }, Wu, Su), (0, su.e)(null, null, Ju, {
            kind: "field",
            name: "_textureMatrixRefraction",
            static: !1,
            private: !1,
            access: {
              has: uu => "_textureMatrixRefraction" in uu,
              get: uu => uu._textureMatrixRefraction,
              set: (uu, Eu) => {
                uu._textureMatrixRefraction = Eu
              }
            },
            metadata: Zu
          }, Iu, Fu), Zu && Object.defineProperty(uu, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Zu
          })
        })(), uu
      })(),
      eu = !1;

    function Gu(uu, Eu, ju) {
      let su = "";
      for (const Uu of uu) su += Uu;
      return new Mu(su, Eu, null, ju, uu)
    }

    function pu(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        su = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const Uu = Eu.useDelayedTextureLoading;
      Eu.useDelayedTextureLoading = !1;
      const Zu = new Mu(uu, Eu, null, !1, null, null, null, void 0, !0, ju, su);
      return Eu.useDelayedTextureLoading = Uu, Zu
    }

    function wu(uu, Eu, ju) {
      const su = bu.e.Parse((() => {
        let su = !1;
        return uu.prefiltered && (su = uu.prefiltered), new Mu(ju + (uu.url ?? uu.name), Eu, uu.extensions, !1, uu.files || null, null, null, void 0, su, uu.forcedExtension)
      }), uu, Eu);
      if (uu.boundingBoxPosition && (su.boundingBoxPosition = Xu.t.FromArray(uu.boundingBoxPosition)), uu.boundingBoxSize && (su.boundingBoxSize = Xu.t.FromArray(uu.boundingBoxSize)), uu.animations)
        for (let Uu = 0; Uu < uu.animations.length; Uu++) {
          const Eu = uu.animations[Uu],
            ju = (0, fu.d)("BABYLON.Animation");
          ju && su.animations.push(ju.Parse(Eu))
        }
      return su
    }
    eu || (eu = !0, Mu.CreateFromImages = Gu, Mu.CreateFromPrefilteredData = pu, Mu.Parse = wu, qu.g._CubeTextureParser = wu, (0, fu.f)("BABYLON.CubeTexture", Mu))
  },
  41400: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => fu
    });
    var su = ju(39032),
      Uu = ju(40739),
      Zu = ju(40192),
      Xu = ju(40118),
      lu = ju(40108);
    let qu = !1;
    class fu extends Uu.g {
      constructor(uu, Eu, ju) {
        let su = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          fu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          Cu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5,
          bu = arguments.length > 6 ? arguments[6] : void 0;
        const cu = !ju || ju._isScene;
        super(null, cu ? ju : ju?.vY, cu ? !su : ju, bu, fu, void 0, void 0, void 0, void 0, Cu), qu || (qu = !0, Xu.ThinEngine.prototype.createDynamicTexture = function(uu, Eu, ju, su) {
          const Uu = new lu.c(this, 4);
          return Uu.baseWidth = uu, Uu.baseHeight = Eu, ju && (uu = this.needPOTTextures ? (0, Zu.g)(uu, this._caps.maxTextureSize) : uu, Eu = this.needPOTTextures ? (0, Zu.g)(Eu, this._caps.maxTextureSize) : Eu), Uu.width = uu, Uu.height = Eu, Uu.isReady = !1, Uu.generateMipMaps = ju, Uu.samplingMode = su, this.updateTextureSamplingMode(su, Uu), this._internalTexturesCache.push(Uu), Uu
        }, Xu.ThinEngine.prototype.updateDynamicTexture = function(uu, Eu, ju) {
          let su = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            Uu = arguments.length > 4 ? arguments[4] : void 0,
            Zu = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
          if (!uu) return;
          const Xu = this._gl,
            lu = Xu.TEXTURE_2D,
            qu = this._bindTextureDirectly(lu, uu, !0, Zu);
          this._unpackFlipY(void 0 === ju ? uu.invertY : ju), su && Xu.pixelStorei(Xu.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
          const fu = this._getWebGLTextureType(uu.type),
            Cu = this._getInternalFormat(Uu || uu.format),
            bu = this._getRGBABufferInternalSizedFormat(uu.type, Cu);
          Xu.texImage2D(lu, 0, bu, Cu, fu, Eu), uu.generateMipMaps && Xu.generateMipmap(lu), qu || this._bindTextureDirectly(lu, null), su && Xu.pixelStorei(Xu.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), Uu && (uu.format = Uu), uu._dynamicTextureSource = Eu, uu._premulAlpha = su, uu.invertY = ju || !1, uu.isReady = !0
        }), this.name = uu, this.wrapU = Uu.g.CLAMP_ADDRESSMODE, this.wrapV = Uu.g.CLAMP_ADDRESSMODE, this._generateMipMaps = su;
        const Nu = this._getEngine();
        if (!Nu) return;
        if (Eu.getContext) this._canvas = Eu, this._ownCanvas = !1, this._texture = Nu.createDynamicTexture(this._canvas.width, this._canvas.height, su, fu);
        else {
          this._canvas = Nu.createCanvas(1, 1), this._ownCanvas = !0;
          const uu = Eu;
          uu.width || 0 === uu.width ? this._texture = Nu.createDynamicTexture(uu.width, uu.height, su, fu) : this._texture = Nu.createDynamicTexture(Eu, Eu, su, fu)
        }
        const Ou = this.getSize();
        this._canvas.width !== Ou.width && (this._canvas.width = Ou.width), this._canvas.height !== Ou.height && (this._canvas.height = Ou.height), this._context = this._canvas.getContext("2d")
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
        const Eu = this.getSize();
        Eu.width *= uu, Eu.height *= uu, this._recreate(Eu)
      }
      scaleTo(uu, Eu) {
        const ju = this.getSize();
        ju.width = uu, ju.height = Eu, this._recreate(ju)
      }
      getContext() {
        return this._context
      }
      clear(uu) {
        const Eu = this.getSize();
        uu && (this._context.fillStyle = uu), this._context.clearRect(0, 0, Eu.width, Eu.height)
      }
      update(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._texture && this._getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === uu || uu, Eu, this._format || void 0, void 0, ju)
      }
      drawText(uu, Eu, ju, su, Uu, Zu, Xu) {
        let lu = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const qu = this.getSize();
        if (Zu && (this._context.fillStyle = Zu, this._context.fillRect(0, 0, qu.width, qu.height)), this._context.font = su, null === Eu || void 0 === Eu) {
          const ju = this._context.measureText(uu);
          Eu = (qu.width - ju.width) / 2
        }
        if (null === ju || void 0 === ju) {
          const uu = parseInt(su.replace(/\D/g, ""));
          ju = qu.height / 2 + uu / 3.65
        }
        this._context.fillStyle = Uu || "", this._context.fillText(uu, Eu, ju), lu && this.update(Xu)
      }
      dispose() {
        super.dispose(), this._ownCanvas && this._canvas?.remove?.(), this._canvas = null, this._context = null
      }
      clone() {
        const uu = this.hV();
        if (!uu) return this;
        const Eu = this.getSize(),
          ju = new fu(this.name, Eu, uu, this._generateMipMaps);
        return ju.hasAlpha = this.hasAlpha, ju.level = this.level, ju.wrapU = this.wrapU, ju.wrapV = this.wrapV, ju
      }
      serialize() {
        const uu = this.hV();
        uu && !uu.isReady() && su.b.Warn("The scene must be ready before serializing the dynamic texture");
        const Eu = super.serialize();
        return fu._IsCanvasElement(this._canvas) && (Eu.base64String = this._canvas.toDataURL()), Eu.invertY = this._invertY, Eu.samplingMode = this.samplingMode, Eu
      }
      static _IsCanvasElement(uu) {
        return void 0 !== uu.toDataURL
      }
      _rebuild() {
        this.update()
      }
    }
  },
  41366: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Uu
    });
    var su = ju(40739);
    class Uu extends su.g {
      get depth() {
        return this._depth
      }
      constructor(uu, Eu, ju, Uu, Zu, Xu) {
        let lu = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          qu = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          fu = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : su.g.TRILINEAR_SAMPLINGMODE,
          Cu = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          bu = arguments.length > 10 ? arguments[10] : void 0,
          cu = arguments.length > 11 ? arguments[11] : void 0;
        super(null, Xu, !lu, qu), this.format = Zu, this._texture = Xu.wO().createRawTexture2DArray(uu, Eu, ju, Uu, Zu, lu, qu, fu, null, Cu, bu ?? 0, cu), this._depth = Uu, this.is2DArray = !0
      }
      update(uu) {
        this.updateMipLevel(uu, 0)
      }
      updateMipLevel(uu, Eu) {
        this._texture && this._getEngine().updateRawTexture2DArray(this._texture, uu, this._texture.format, this._texture.invertY, null, this._texture.type, Eu)
      }
      static CreateRGBATexture(uu, Eu, ju, su, Zu) {
        return new Uu(uu, Eu, ju, su, 5, Zu, !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0)
      }
    }
  },
  41364: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => su.b
    });
    var su = ju(40622);
    (0, su.d)()
  },
  40346: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => su.f
    });
    var su = ju(40350);
    (0, su.d)()
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);