export const id = 261;
export const ids = [261];
export const modules = {
  40330: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => IB,
      f: () => NB
    });
    var QB = zB(38783),
      nB = zB(40086),
      dB = zB(40301),
      IB = {};
    class NB {
      constructor(BB) {
        this.attachedToElement = !1, this.attached = {}, this.camera = BB, this.checkInputs = () => {}
      }
      add(BB) {
        const jB = BB.getSimpleName();
        this.attached[jB] ? QB.c.Warn("camera input of type " + jB + " already exists on camera") : (this.attached[jB] = BB, BB.camera = this.camera, BB.checkInputs && (this.checkInputs = this._addCheckInputs(BB.checkInputs.bind(BB))), this.attachedToElement && BB.attachControl(this.noPreventDefault))
      }
      remove(BB) {
        for (const jB in this.attached) {
          const zB = this.attached[jB];
          if (zB === BB) return zB.detachControl(), zB.camera = null, delete this.attached[jB], void this.rebuildInputCheck()
        }
      }
      removeByType(BB) {
        for (const jB in this.attached) {
          const zB = this.attached[jB];
          zB.getClassName() === BB && (zB.detachControl(), zB.camera = null, delete this.attached[jB], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(BB) {
        const jB = this.checkInputs;
        return () => {
          jB(), BB()
        }
      }
      attachInput(BB) {
        this.attachedToElement && BB.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          BB = !dB.b.ForceAttachControlToAlwaysPreventDefault && BB, this.attachedToElement = !0, this.noPreventDefault = BB;
          for (const jB in this.attached) this.attached[jB].attachControl(BB)
        }
      }
      detachElement() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const jB in this.attached) this.attached[jB].detachControl(), BB && (this.attached[jB].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const BB in this.attached) {
          const jB = this.attached[BB];
          jB.checkInputs && (this.checkInputs = this._addCheckInputs(jB.checkInputs.bind(jB)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(BB) {
        const jB = {};
        for (const zB in this.attached) {
          const BB = this.attached[zB],
            QB = nB.b.Serialize(BB);
          jB[BB.getClassName()] = QB
        }
        BB.inputsmgr = jB
      }
      parse(BB) {
        const jB = BB.inputsmgr;
        if (jB) {
          this.clear();
          for (const BB in jB) {
            const zB = IB[BB];
            if (zB) {
              const QB = jB[BB],
                dB = nB.b.Parse((() => new zB), QB, null);
              this.add(dB)
            }
          }
        } else
          for (const zB in this.attached) {
            const jB = IB[this.attached[zB].getClassName()];
            if (jB) {
              const QB = nB.b.Parse((() => new jB), BB, null);
              this.remove(this.attached[zB]), this.add(QB)
            }
          }
      }
    }
  },
  41220: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => LB
    });
    var QB = zB(40066),
      nB = zB(40068),
      dB = zB(39976),
      IB = zB(37171),
      NB = zB(40062),
      uB = zB(40580),
      UB = zB(37222),
      aB = zB(37202),
      pB = zB(40086),
      rB = zB(39913),
      sB = zB(38783),
      JB = zB(40108),
      mB = zB(37987),
      yB = zB(40145);
    var kB = zB(39980);
    let GB = !1;
    let LB = (() => {
        var BB;
        let jB, zB, UB, LB, gB, tB, SB, MB, EB, iB = NB.c,
          qB = [],
          fB = [],
          oB = [],
          HB = [],
          DB = [],
          FB = [],
          YB = [],
          VB = [],
          hB = [],
          XB = [],
          ZB = [],
          AB = [],
          TB = [],
          PB = [],
          WB = [];
        return BB = class extends iB {
          set boundingBoxSize(BB) {
            if (this._boundingBoxSize && this._boundingBoxSize.equals(BB)) return;
            this._boundingBoxSize = BB;
            const jB = this.aY();
            jB && jB.markAllMaterialsAsDirty(1)
          }
          get boundingBoxSize() {
            return this._boundingBoxSize
          }
          set rotationY(BB) {
            this._rotationY = BB, this.setReflectionTextureMatrix(IB.c.RotationY(this._rotationY))
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
          constructor(BB, jB) {
            let zB, nB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              dB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              NB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              UB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              pB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              LB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 5,
              gB = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              tB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              SB = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
              MB = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : .8,
              EB = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 0,
              iB = arguments.length > 13 ? arguments[13] : void 0,
              eB = arguments.length > 14 ? arguments[14] : void 0;
            super(jB), this._delayedOnLoad = (0, QB.g)(this, qB), this.onLoadObservable = new aB.c, this.url = (0, QB.g)(this, fB, void 0), this.boundingBoxPosition = ((0, QB.g)(this, oB), (0, QB.g)(this, HB, IB.m.Zero())), this._boundingBoxSize = (0, QB.g)(this, DB), this._rotationY = 0, this._files = (0, QB.g)(this, FB, null), this._forcedExtension = ((0, QB.g)(this, YB), (0, QB.g)(this, VB, null)), this._extensions = ((0, QB.g)(this, hB), (0, QB.g)(this, XB, null)), this._textureMatrix = ((0, QB.g)(this, ZB), (0, QB.g)(this, AB, void 0)), this._textureMatrixRefraction = ((0, QB.g)(this, TB), (0, QB.g)(this, PB, new IB.c)), this._format = (0, QB.g)(this, WB), this._buffer = null, GB || (GB = !0, kB.c.prototype._partialLoadFile = function(BB, jB, zB, QB) {
              let nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
              this._loadFile(BB, (BB => {
                zB[jB] = BB, zB._internalCount++, 6 === zB._internalCount && QB(zB)
              }), void 0, void 0, !0, ((BB, jB) => {
                nB && BB && nB(BB.status + " " + BB.statusText, jB)
              }))
            }, kB.c.prototype._cascadeLoadFiles = function(BB, jB, zB) {
              let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
              const nB = [];
              nB._internalCount = 0;
              for (let dB = 0; dB < 6; dB++) this._partialLoadFile(zB[dB], dB, nB, jB, QB)
            }, kB.c.prototype._cascadeLoadImgs = function(BB, jB, zB, QB) {
              let nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                dB = arguments.length > 5 ? arguments[5] : void 0;
              const IB = [];
              IB._internalCount = 0;
              for (let NB = 0; NB < 6; NB++) this._partialLoadImg(QB[NB], NB, IB, BB, jB, zB, nB, dB)
            }, kB.c.prototype._partialLoadImg = function(BB, jB, zB, QB, nB, dB) {
              let IB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                NB = arguments.length > 7 ? arguments[7] : void 0;
              const uB = (0, mB.d)();
              (0, JB.r)(BB, (BB => {
                zB[jB] = BB, zB._internalCount++, QB && QB.removePendingData(uB), 6 === zB._internalCount && dB && dB(nB, zB)
              }), ((BB, jB) => {
                QB && QB.removePendingData(uB), IB && IB(BB, jB)
              }), QB ? QB.offlineProvider : null, NB), QB && QB.addPendingData(uB)
            }, kB.c.prototype.createCubeTextureBase = function(BB, jB, zB, QB) {
              let nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                dB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                IB = arguments.length > 6 ? arguments[6] : void 0,
                NB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                uB = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
                UB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
                aB = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
                pB = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
                JB = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
                mB = arguments.length > 13 && void 0 !== arguments[13] ? arguments[13] : null,
                kB = arguments.length > 14 && void 0 !== arguments[14] && arguments[14],
                GB = arguments.length > 15 && void 0 !== arguments[15] ? arguments[15] : null;
              const LB = pB || new rB.d(this, 7);
              LB.isCube = !0, LB.url = BB, LB.generateMipMaps = !QB, LB._lodGenerationScale = UB, LB._lodGenerationOffset = aB, LB._useSRGBBuffer = !!kB && this._caps.supportSRGBBuffers && (this.version > 1 || this.isWebGPU || !!QB), LB !== pB && (LB.label = BB.substring(0, 60)), this._doNotHandleContextLost || (LB._extension = NB, LB._files = zB, LB._buffer = GB);
              const gB = BB;
              this._transformTextureUrl && !pB && (BB = this._transformTextureUrl(BB));
              const tB = NB ?? function(BB) {
                  const jB = BB.split("?")[0],
                    zB = jB.lastIndexOf(".");
                  return zB > -1 ? jB.substring(zB).toLowerCase() : ""
                }(BB),
                SB = (0, yB.d)(tB),
                MB = (BB, jB) => {
                  LB.dispose(), dB ? dB(BB, jB) : BB && sB.c.Warn(BB)
                },
                EB = (dB, pB) => {
                  BB === gB ? dB && MB(dB.status + " " + dB.statusText, pB) : (sB.c.Warn(`Failed to load ${BB}, falling back to the ${gB}`), this.createCubeTextureBase(gB, jB, zB, !!QB, nB, MB, IB, NB, uB, UB, aB, LB, JB, mB, kB, GB))
                };
              if (SB) SB.then((QB => {
                const dB = BB => {
                  JB && JB(LB, BB), QB.loadCubeData(BB, LB, uB, nB, ((BB, jB) => {
                    MB(BB, jB)
                  }))
                };
                GB ? dB(GB) : zB && 6 === zB.length ? QB.supportCascades ? this._cascadeLoadFiles(jB, (BB => dB(BB.map((BB => new Uint8Array(BB))))), zB, MB) : MB("Textures type does not support cascades.") : this._loadFile(BB, (BB => dB(new Uint8Array(BB))), void 0, jB ? jB.offlineProvider || null : void 0, !0, EB)
              }));
              else {
                if (!zB || 0 === zB.length) throw new Error("Cannot load cubemap because files were not defined, or the correct loader was not found.");
                this._cascadeLoadImgs(jB, LB, ((BB, jB) => {
                  mB && mB(BB, jB)
                }), zB, MB)
              }
              return this._internalTexturesCache.push(LB), LB
            }), this.name = BB, this.url = BB, this._noMipmap = dB, this.hasAlpha = !1, this.isCube = !0, this._textureMatrix = IB.c.Identity(), this.coordinatesMode = uB.i.CUBIC_MODE;
            let lB = null;
            null === nB || Array.isArray(nB) ? (this._noMipmap = dB, this._format = LB, this._createPolynomials = SB, zB = nB, this._loaderOptions = iB, this._useSRGBBuffer = eB, this._lodScale = MB, this._lodOffset = EB) : (zB = nB.extensions ?? null, this._noMipmap = nB.noMipmap ?? !1, NB = nB.files ?? null, lB = nB.buffer ?? null, this._format = nB.format ?? 5, gB = nB.prefiltered ?? !1, tB = nB.forcedExtension ?? null, this._createPolynomials = nB.createPolynomials ?? !1, this._lodScale = nB.lodScale ?? .8, this._lodOffset = nB.lodOffset ?? 0, this._loaderOptions = nB.loaderOptions, this._useSRGBBuffer = nB.useSRGBBuffer, this._sphericalPolynomialTargetSize = nB.sphericalPolynomialTargetSize ?? 0, UB = nB.onLoad ?? null, pB = nB.onError ?? null), (BB || NB) && this.updateURL(BB, tB, UB, gB, pB, zB, this.aY()?.useDelayedTextureLoading, NB, lB)
          }
          getClassName() {
            return "CubeTexture"
          }
          updateURL(BB) {
            let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              QB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              dB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              IB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
              NB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              uB = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
            this.name && !this.name.startsWith("data:") || (this.name = BB), this.url = BB, jB && (this._forcedExtension = jB);
            const UB = BB.lastIndexOf("."),
              aB = jB || (UB > -1 ? BB.substring(UB).toLowerCase() : ""),
              pB = 0 === aB.indexOf(".dds"),
              rB = 0 === aB.indexOf(".env"),
              sB = 0 === aB.indexOf(".basis");
            if (rB ? (this.gammaSpace = !1, this._prefiltered = !1, this.anisotropicFilteringLevel = 1) : (this._prefiltered = QB, QB && (this.gammaSpace = !1, this.anisotropicFilteringLevel = 1)), NB) this._files = NB;
            else if (sB || rB || pB || dB || (dB = ["_px.jpg", "_py.jpg", "_pz.jpg", "_nx.jpg", "_ny.jpg", "_nz.jpg"]), this._files = this._files || [], this._files.length = 0, dB) {
              for (let jB = 0; jB < dB.length; jB++) this._files.push(BB + dB[jB]);
              this._extensions = dB
            }
            this._buffer = uB, IB ? (this.delayLoadState = 4, this._delayedOnLoad = zB, this._delayedOnError = nB) : this._loadTexture(zB, nB)
          }
          delayLoad(BB) {
            4 === this.delayLoadState && (BB && (this._forcedExtension = BB), this.delayLoadState = 1, this._loadTexture(this._delayedOnLoad, this._delayedOnError))
          }
          getReflectionTextureMatrix() {
            return this._textureMatrix
          }
          setReflectionTextureMatrix(BB) {
            if (BB.updateFlag === this._textureMatrix.updateFlag) return;
            if (BB.isIdentity() !== this._textureMatrix.isIdentity() && this.aY()?.markAllMaterialsAsDirty(1, (BB => -1 !== BB.getActiveTextures().indexOf(this))), this._textureMatrix = BB, !this.aY()?.useRightHandedSystem) return;
            const jB = IB.h.KJ[0],
              zB = IB.h.Quaternion[0],
              QB = IB.h.KJ[1];
            this._textureMatrix.decompose(jB, zB, QB), zB.z *= -1, zB.w *= -1, IB.c.ComposeToRef(jB, zB, QB, this._textureMatrixRefraction)
          }
          getRefractionTextureMatrix() {
            return this.aY()?.useRightHandedSystem ? this._textureMatrixRefraction : this._textureMatrix
          }
          _loadTexture() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            const zB = this.aY(),
              QB = this._texture;
            this._texture = this._getFromCache(this.url, this._noMipmap, void 0, void 0, this._useSRGBBuffer, this.isCube);
            const nB = () => {
                this.onLoadObservable.notifyObservers(this), QB && (QB.dispose(), this.aY()?.markAllMaterialsAsDirty(1)), BB && BB()
              },
              IB = (BB, zB) => {
                this._loadingError = !0, this._errorObject = {
                  message: BB,
                  exception: zB
                }, jB && jB(BB, zB), uB.i.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            this._texture ? this._texture.isReady ? dB.b.SetImmediate((() => nB())) : this._texture.onLoadedObservable.add((() => nB())) : (this._prefiltered ? this._texture = this._getEngine().createPrefilteredCubeTexture(this.url, zB, this._lodScale, this._lodOffset, BB, IB, this._format, this._forcedExtension, this._createPolynomials, this._buffer) : this._texture = this._getEngine().createCubeTexture(this.url, zB, this._files, this._noMipmap, BB, IB, this._format, this._forcedExtension, !1, this._lodScale, this._lodOffset, null, this._loaderOptions, !!this._useSRGBBuffer, this._buffer), this._texture?.onLoadedObservable.add((() => this.onLoadObservable.notifyObservers(this))))
          }
          clone() {
            let jB = 0;
            const zB = this.irradianceTexture,
              QB = pB.b.Clone((() => {
                const zB = new BB(this.url, this.aY() || this._getEngine(), this._extensions, this._noMipmap, this._files);
                return jB = zB.uniqueId, zB
              }), this);
            return QB.uniqueId = jB, zB && !this.irradianceTexture && (this.irradianceTexture = zB), QB
          }
        }, (() => {
          const dB = "function" === typeof Symbol && Symbol.metadata ? Object.create(iB[Symbol.metadata] ?? null) : void 0;
          jB = [(0, nB.A)()], zB = [(0, nB.x)()], UB = [(0, nB.x)()], LB = [(0, nB.A)("rotationY")], gB = [(0, nB.A)("files")], tB = [(0, nB.A)("forcedExtension")], SB = [(0, nB.A)("extensions")], MB = [(0, nB.r)("textureMatrix")], EB = [(0, nB.r)("textureMatrixRefraction")], (0, QB.e)(BB, null, UB, {
            kind: "getter",
            name: "boundingBoxSize",
            static: !1,
            private: !1,
            access: {
              has: BB => "boundingBoxSize" in BB,
              get: BB => BB.boundingBoxSize
            },
            metadata: dB
          }, null, qB), (0, QB.e)(BB, null, LB, {
            kind: "setter",
            name: "rotationY",
            static: !1,
            private: !1,
            access: {
              has: BB => "rotationY" in BB,
              set: (BB, jB) => {
                BB.rotationY = jB
              }
            },
            metadata: dB
          }, null, qB), (0, QB.e)(null, null, jB, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: BB => "url" in BB,
              get: BB => BB.url,
              set: (BB, jB) => {
                BB.url = jB
              }
            },
            metadata: dB
          }, fB, oB), (0, QB.e)(null, null, zB, {
            kind: "field",
            name: "boundingBoxPosition",
            static: !1,
            private: !1,
            access: {
              has: BB => "boundingBoxPosition" in BB,
              get: BB => BB.boundingBoxPosition,
              set: (BB, jB) => {
                BB.boundingBoxPosition = jB
              }
            },
            metadata: dB
          }, HB, DB), (0, QB.e)(null, null, gB, {
            kind: "field",
            name: "_files",
            static: !1,
            private: !1,
            access: {
              has: BB => "_files" in BB,
              get: BB => BB._files,
              set: (BB, jB) => {
                BB._files = jB
              }
            },
            metadata: dB
          }, FB, YB), (0, QB.e)(null, null, tB, {
            kind: "field",
            name: "_forcedExtension",
            static: !1,
            private: !1,
            access: {
              has: BB => "_forcedExtension" in BB,
              get: BB => BB._forcedExtension,
              set: (BB, jB) => {
                BB._forcedExtension = jB
              }
            },
            metadata: dB
          }, VB, hB), (0, QB.e)(null, null, SB, {
            kind: "field",
            name: "_extensions",
            static: !1,
            private: !1,
            access: {
              has: BB => "_extensions" in BB,
              get: BB => BB._extensions,
              set: (BB, jB) => {
                BB._extensions = jB
              }
            },
            metadata: dB
          }, XB, ZB), (0, QB.e)(null, null, MB, {
            kind: "field",
            name: "_textureMatrix",
            static: !1,
            private: !1,
            access: {
              has: BB => "_textureMatrix" in BB,
              get: BB => BB._textureMatrix,
              set: (BB, jB) => {
                BB._textureMatrix = jB
              }
            },
            metadata: dB
          }, AB, TB), (0, QB.e)(null, null, EB, {
            kind: "field",
            name: "_textureMatrixRefraction",
            static: !1,
            private: !1,
            access: {
              has: BB => "_textureMatrixRefraction" in BB,
              get: BB => BB._textureMatrixRefraction,
              set: (BB, jB) => {
                BB._textureMatrixRefraction = jB
              }
            },
            metadata: dB
          }, PB, WB), dB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: dB
          })
        })(), BB
      })(),
      gB = !1;

    function tB(BB, jB, zB) {
      let QB = "";
      for (const nB of BB) QB += nB;
      return new LB(QB, jB, null, zB, BB)
    }

    function SB(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        QB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const nB = jB.useDelayedTextureLoading;
      jB.useDelayedTextureLoading = !1;
      const dB = new LB(BB, jB, null, !1, null, null, null, void 0, !0, zB, QB);
      return jB.useDelayedTextureLoading = nB, dB
    }

    function MB(BB, jB, zB) {
      const QB = pB.b.Parse((() => {
        let QB = !1;
        return BB.prefiltered && (QB = BB.prefiltered), new LB(zB + (BB.url ?? BB.name), jB, BB.extensions, !1, BB.files || null, null, null, void 0, QB, BB.forcedExtension)
      }), BB, jB);
      if (BB.boundingBoxPosition && (QB.boundingBoxPosition = IB.m.FromArray(BB.boundingBoxPosition)), BB.boundingBoxSize && (QB.boundingBoxSize = IB.m.FromArray(BB.boundingBoxSize)), BB.animations)
        for (let nB = 0; nB < BB.animations.length; nB++) {
          const jB = BB.animations[nB],
            zB = (0, UB.b)("BABYLON.Animation");
          zB && QB.animations.push(zB.Parse(jB))
        }
      return QB
    }
    gB || (gB = !0, LB.CreateFromImages = tB, LB.CreateFromPrefilteredData = SB, LB.Parse = MB, uB.i._CubeTextureParser = MB, (0, UB.d)("BABYLON.CubeTexture", LB))
  },
  41266: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => UB
    });
    var QB = zB(38783),
      nB = zB(40580),
      dB = zB(40015),
      IB = zB(39922),
      NB = zB(39913);
    let uB = !1;
    class UB extends nB.i {
      constructor(BB, jB, zB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          UB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          aB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5,
          pB = arguments.length > 6 ? arguments[6] : void 0;
        const rB = !zB || zB._isScene;
        super(null, rB ? zB : zB?.ny, rB ? !QB : zB, pB, UB, void 0, void 0, void 0, void 0, aB), uB || (uB = !0, IB.ThinEngine.prototype.createDynamicTexture = function(BB, jB, zB, QB) {
          const nB = new NB.d(this, 4);
          return nB.baseWidth = BB, nB.baseHeight = jB, zB && (BB = this.needPOTTextures ? (0, dB.c)(BB, this._caps.maxTextureSize) : BB, jB = this.needPOTTextures ? (0, dB.c)(jB, this._caps.maxTextureSize) : jB), nB.width = BB, nB.height = jB, nB.isReady = !1, nB.generateMipMaps = zB, nB.samplingMode = QB, this.updateTextureSamplingMode(QB, nB), this._internalTexturesCache.push(nB), nB
        }, IB.ThinEngine.prototype.updateDynamicTexture = function(BB, jB, zB) {
          let QB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            nB = arguments.length > 4 ? arguments[4] : void 0,
            dB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
          if (!BB) return;
          const IB = this._gl,
            NB = IB.TEXTURE_2D,
            uB = this._bindTextureDirectly(NB, BB, !0, dB);
          this._unpackFlipY(void 0 === zB ? BB.invertY : zB), QB && IB.pixelStorei(IB.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
          const UB = this._getWebGLTextureType(BB.type),
            aB = this._getInternalFormat(nB || BB.format),
            pB = this._getRGBABufferInternalSizedFormat(BB.type, aB);
          IB.texImage2D(NB, 0, pB, aB, UB, jB), BB.generateMipMaps && IB.generateMipmap(NB), uB || this._bindTextureDirectly(NB, null), QB && IB.pixelStorei(IB.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), nB && (BB.format = nB), BB._dynamicTextureSource = jB, BB._premulAlpha = QB, BB.invertY = zB || !1, BB.isReady = !0
        }), this.name = BB, this.wrapU = nB.i.CLAMP_ADDRESSMODE, this.wrapV = nB.i.CLAMP_ADDRESSMODE, this._generateMipMaps = QB;
        const sB = this._getEngine();
        if (!sB) return;
        if (jB.getContext) this._canvas = jB, this._ownCanvas = !1, this._texture = sB.createDynamicTexture(this._canvas.width, this._canvas.height, QB, UB);
        else {
          this._canvas = sB.createCanvas(1, 1), this._ownCanvas = !0;
          const BB = jB;
          BB.width || 0 === BB.width ? this._texture = sB.createDynamicTexture(BB.width, BB.height, QB, UB) : this._texture = sB.createDynamicTexture(jB, jB, QB, UB)
        }
        const JB = this.getSize();
        this._canvas.width !== JB.width && (this._canvas.width = JB.width), this._canvas.height !== JB.height && (this._canvas.height = JB.height), this._context = this._canvas.getContext("2d")
      }
      getClassName() {
        return "DynamicTexture"
      }
      get canRescale() {
        return !0
      }
      _recreate(BB) {
        this._canvas.width = BB.width, this._canvas.height = BB.height, this.releaseInternalTexture(), this._texture = this._getEngine().createDynamicTexture(BB.width, BB.height, this._generateMipMaps, this.samplingMode)
      }
      scale(BB) {
        const jB = this.getSize();
        jB.width *= BB, jB.height *= BB, this._recreate(jB)
      }
      scaleTo(BB, jB) {
        const zB = this.getSize();
        zB.width = BB, zB.height = jB, this._recreate(zB)
      }
      getContext() {
        return this._context
      }
      clear(BB) {
        const jB = this.getSize();
        BB && (this._context.fillStyle = BB), this._context.clearRect(0, 0, jB.width, jB.height)
      }
      update(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._texture && this._getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === BB || BB, jB, this._format || void 0, void 0, zB)
      }
      drawText(BB, jB, zB, QB, nB, dB, IB) {
        let NB = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const uB = this.getSize();
        if (dB && (this._context.fillStyle = dB, this._context.fillRect(0, 0, uB.width, uB.height)), this._context.font = QB, null === jB || void 0 === jB) {
          const zB = this._context.measureText(BB);
          jB = (uB.width - zB.width) / 2
        }
        if (null === zB || void 0 === zB) {
          const BB = parseInt(QB.replace(/\D/g, ""));
          zB = uB.height / 2 + BB / 3.65
        }
        this._context.fillStyle = nB || "", this._context.fillText(BB, jB, zB), NB && this.update(IB)
      }
      dispose() {
        super.dispose(), this._ownCanvas && this._canvas?.remove?.(), this._canvas = null, this._context = null
      }
      clone() {
        const BB = this.aY();
        if (!BB) return this;
        const jB = this.getSize(),
          zB = new UB(this.name, jB, BB, this._generateMipMaps);
        return zB.hasAlpha = this.hasAlpha, zB.level = this.level, zB.wrapU = this.wrapU, zB.wrapV = this.wrapV, zB
      }
      serialize() {
        const BB = this.aY();
        BB && !BB.isReady() && QB.c.Warn("The scene must be ready before serializing the dynamic texture");
        const jB = super.serialize();
        return UB._IsCanvasElement(this._canvas) && (jB.base64String = this._canvas.toDataURL()), jB.invertY = this._invertY, jB.samplingMode = this.samplingMode, jB
      }
      static _IsCanvasElement(BB) {
        return void 0 !== BB.toDataURL
      }
      _rebuild() {
        this.update()
      }
    }
  },
  41240: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => nB
    });
    var QB = zB(40580);
    class nB extends QB.i {
      get depth() {
        return this._depth
      }
      constructor(BB, jB, zB, nB, dB, IB) {
        let NB = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          uB = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          UB = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : QB.i.TRILINEAR_SAMPLINGMODE,
          aB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          pB = arguments.length > 10 ? arguments[10] : void 0,
          rB = arguments.length > 11 ? arguments[11] : void 0;
        super(null, IB, !NB, uB), this.format = dB, this._texture = IB.wJ().createRawTexture2DArray(BB, jB, zB, nB, dB, NB, uB, UB, null, aB, pB ?? 0, rB), this._depth = nB, this.is2DArray = !0
      }
      update(BB) {
        this.updateMipLevel(BB, 0)
      }
      updateMipLevel(BB, jB) {
        this._texture && this._getEngine().updateRawTexture2DArray(this._texture, BB, this._texture.format, this._texture.invertY, null, this._texture.type, jB)
      }
      static CreateRGBATexture(BB, jB, zB, QB, dB) {
        return new nB(BB, jB, zB, QB, 5, dB, !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0)
      }
    }
  },
  41231: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => QB.c
    });
    var QB = zB(40457);
    (0, QB.f)()
  },
  40154: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => QB.g
    });
    var QB = zB(40156);
    (0, QB.e)()
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);