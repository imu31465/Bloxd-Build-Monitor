export const id = 237;
export const ids = [237];
export const modules = {
  38992: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => lB,
      g: () => JB
    });
    var VB = dB(37651),
      yB = dB(38772),
      pB = dB(38974),
      lB = {};
    class JB {
      constructor(BB) {
        this.attachedToElement = !1, this.attached = {}, this.camera = BB, this.checkInputs = () => {}
      }
      add(BB) {
        const TB = BB.getSimpleName();
        this.attached[TB] ? VB.b.Warn("camera input of type " + TB + " already exists on camera") : (this.attached[TB] = BB, BB.camera = this.camera, BB.checkInputs && (this.checkInputs = this._addCheckInputs(BB.checkInputs.bind(BB))), this.attachedToElement && BB.attachControl(this.noPreventDefault))
      }
      remove(BB) {
        for (const TB in this.attached) {
          const dB = this.attached[TB];
          if (dB === BB) return dB.detachControl(), dB.camera = null, delete this.attached[TB], void this.rebuildInputCheck()
        }
      }
      removeByType(BB) {
        for (const TB in this.attached) {
          const dB = this.attached[TB];
          dB.getClassName() === BB && (dB.detachControl(), dB.camera = null, delete this.attached[TB], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(BB) {
        const TB = this.checkInputs;
        return () => {
          TB(), BB()
        }
      }
      attachInput(BB) {
        this.attachedToElement && BB.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          BB = !pB.b.ForceAttachControlToAlwaysPreventDefault && BB, this.attachedToElement = !0, this.noPreventDefault = BB;
          for (const TB in this.attached) this.attached[TB].attachControl(BB)
        }
      }
      detachElement() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const TB in this.attached) this.attached[TB].detachControl(), BB && (this.attached[TB].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const BB in this.attached) {
          const TB = this.attached[BB];
          TB.checkInputs && (this.checkInputs = this._addCheckInputs(TB.checkInputs.bind(TB)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(BB) {
        const TB = {};
        for (const dB in this.attached) {
          const BB = this.attached[dB],
            VB = yB.c.Serialize(BB);
          TB[BB.getClassName()] = VB
        }
        BB.inputsmgr = TB
      }
      parse(BB) {
        const TB = BB.inputsmgr;
        if (TB) {
          this.clear();
          for (const BB in TB) {
            const dB = lB[BB];
            if (dB) {
              const VB = TB[BB],
                pB = yB.c.Parse((() => new dB), VB, null);
              this.add(pB)
            }
          }
        } else
          for (const dB in this.attached) {
            const TB = lB[this.attached[dB].getClassName()];
            if (TB) {
              const VB = yB.c.Parse((() => new TB), BB, null);
              this.remove(this.attached[dB]), this.add(VB)
            }
          }
      }
    }
  },
  39971: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => mB
    });
    var VB = dB(38745),
      yB = dB(38750),
      pB = dB(38645),
      lB = dB(36126),
      JB = dB(38741),
      YB = dB(39218),
      gB = dB(36166),
      oB = dB(36150),
      kB = dB(38772),
      LB = dB(38569),
      OB = dB(37651),
      DB = dB(38790),
      uB = dB(36822),
      HB = dB(38833);
    var EB = dB(38652);
    let vB = !1;
    let mB = (() => {
        var BB;
        let TB, dB, gB, mB, iB, NB, tB, fB, sB, MB = JB.b,
          zB = [],
          wB = [],
          UB = [],
          FB = [],
          KB = [],
          rB = [],
          IB = [],
          cB = [],
          SB = [],
          PB = [],
          QB = [],
          RB = [],
          aB = [],
          ZB = [],
          XB = [];
        return BB = class extends MB {
          set boundingBoxSize(BB) {
            if (this._boundingBoxSize && this._boundingBoxSize.equals(BB)) return;
            this._boundingBoxSize = BB;
            const TB = this.jU();
            TB && TB.markAllMaterialsAsDirty(1)
          }
          get boundingBoxSize() {
            return this._boundingBoxSize
          }
          set rotationY(BB) {
            this._rotationY = BB, this.setReflectionTextureMatrix(lB.b.RotationY(this._rotationY))
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
          constructor(BB, TB) {
            let dB, yB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              pB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              gB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              kB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              mB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 5,
              iB = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              NB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              tB = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
              fB = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : .8,
              sB = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 0,
              MB = arguments.length > 13 ? arguments[13] : void 0,
              WB = arguments.length > 14 ? arguments[14] : void 0;
            super(TB), this._delayedOnLoad = (0, VB.h)(this, zB), this.onLoadObservable = new oB.e, this.url = (0, VB.h)(this, wB, void 0), this.boundingBoxPosition = ((0, VB.h)(this, UB), (0, VB.h)(this, FB, lB.p.Zero())), this._boundingBoxSize = (0, VB.h)(this, KB), this._rotationY = 0, this._files = (0, VB.h)(this, rB, null), this._forcedExtension = ((0, VB.h)(this, IB), (0, VB.h)(this, cB, null)), this._extensions = ((0, VB.h)(this, SB), (0, VB.h)(this, PB, null)), this._textureMatrix = ((0, VB.h)(this, QB), (0, VB.h)(this, RB, void 0)), this._textureMatrixRefraction = ((0, VB.h)(this, aB), (0, VB.h)(this, ZB, new lB.b)), this._format = (0, VB.h)(this, XB), this._buffer = null, vB || (vB = !0, EB.c.prototype._partialLoadFile = function(BB, TB, dB, VB) {
              let yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
              this._loadFile(BB, (BB => {
                dB[TB] = BB, dB._internalCount++, 6 === dB._internalCount && VB(dB)
              }), void 0, void 0, !0, ((BB, TB) => {
                yB && BB && yB(BB.status + " " + BB.statusText, TB)
              }))
            }, EB.c.prototype._cascadeLoadFiles = function(BB, TB, dB) {
              let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
              const yB = [];
              yB._internalCount = 0;
              for (let pB = 0; pB < 6; pB++) this._partialLoadFile(dB[pB], pB, yB, TB, VB)
            }, EB.c.prototype._cascadeLoadImgs = function(BB, TB, dB, VB) {
              let yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                pB = arguments.length > 5 ? arguments[5] : void 0;
              const lB = [];
              lB._internalCount = 0;
              for (let JB = 0; JB < 6; JB++) this._partialLoadImg(VB[JB], JB, lB, BB, TB, dB, yB, pB)
            }, EB.c.prototype._partialLoadImg = function(BB, TB, dB, VB, yB, pB) {
              let lB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                JB = arguments.length > 7 ? arguments[7] : void 0;
              const YB = (0, uB.c)();
              (0, DB.s)(BB, (BB => {
                dB[TB] = BB, dB._internalCount++, VB && VB.removePendingData(YB), 6 === dB._internalCount && pB && pB(yB, dB)
              }), ((BB, TB) => {
                VB && VB.removePendingData(YB), lB && lB(BB, TB)
              }), VB ? VB.offlineProvider : null, JB), VB && VB.addPendingData(YB)
            }, EB.c.prototype.createCubeTextureBase = function(BB, TB, dB, VB) {
              let yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                pB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                lB = arguments.length > 6 ? arguments[6] : void 0,
                JB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                YB = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
                gB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
                oB = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
                kB = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
                DB = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
                uB = arguments.length > 13 && void 0 !== arguments[13] ? arguments[13] : null,
                EB = arguments.length > 14 && void 0 !== arguments[14] && arguments[14],
                vB = arguments.length > 15 && void 0 !== arguments[15] ? arguments[15] : null;
              const mB = kB || new LB.e(this, 7);
              mB.isCube = !0, mB.url = BB, mB.generateMipMaps = !VB, mB._lodGenerationScale = gB, mB._lodGenerationOffset = oB, mB._useSRGBBuffer = !!EB && this._caps.supportSRGBBuffers && (this.version > 1 || this.isWebGPU || !!VB), mB !== kB && (mB.label = BB.substring(0, 60)), this._doNotHandleContextLost || (mB._extension = JB, mB._files = dB, mB._buffer = vB);
              const iB = BB;
              this._transformTextureUrl && !kB && (BB = this._transformTextureUrl(BB));
              const NB = JB ?? function(BB) {
                  const TB = BB.split("?")[0],
                    dB = TB.lastIndexOf(".");
                  return dB > -1 ? TB.substring(dB).toLowerCase() : ""
                }(BB),
                tB = (0, HB.b)(NB),
                fB = (BB, TB) => {
                  mB.dispose(), pB ? pB(BB, TB) : BB && OB.b.Warn(BB)
                },
                sB = (pB, kB) => {
                  BB === iB ? pB && fB(pB.status + " " + pB.statusText, kB) : (OB.b.Warn(`Failed to load ${BB}, falling back to the ${iB}`), this.createCubeTextureBase(iB, TB, dB, !!VB, yB, fB, lB, JB, YB, gB, oB, mB, DB, uB, EB, vB))
                };
              if (tB) tB.then((VB => {
                const pB = BB => {
                  DB && DB(mB, BB), VB.loadCubeData(BB, mB, YB, yB, ((BB, TB) => {
                    fB(BB, TB)
                  }))
                };
                vB ? pB(vB) : dB && 6 === dB.length ? VB.supportCascades ? this._cascadeLoadFiles(TB, (BB => pB(BB.map((BB => new Uint8Array(BB))))), dB, fB) : fB("Textures type does not support cascades.") : this._loadFile(BB, (BB => pB(new Uint8Array(BB))), void 0, TB ? TB.offlineProvider || null : void 0, !0, sB)
              }));
              else {
                if (!dB || 0 === dB.length) throw new Error("Cannot load cubemap because files were not defined, or the correct loader was not found.");
                this._cascadeLoadImgs(TB, mB, ((BB, TB) => {
                  uB && uB(BB, TB)
                }), dB, fB)
              }
              return this._internalTexturesCache.push(mB), mB
            }), this.name = BB, this.url = BB, this._noMipmap = pB, this.hasAlpha = !1, this.isCube = !0, this._textureMatrix = lB.b.Identity(), this.coordinatesMode = YB.f.CUBIC_MODE;
            let hB = null;
            null === yB || Array.isArray(yB) ? (this._noMipmap = pB, this._format = mB, this._createPolynomials = tB, dB = yB, this._loaderOptions = MB, this._useSRGBBuffer = WB, this._lodScale = fB, this._lodOffset = sB) : (dB = yB.extensions ?? null, this._noMipmap = yB.noMipmap ?? !1, JB = yB.files ?? null, hB = yB.buffer ?? null, this._format = yB.format ?? 5, iB = yB.prefiltered ?? !1, NB = yB.forcedExtension ?? null, this._createPolynomials = yB.createPolynomials ?? !1, this._lodScale = yB.lodScale ?? .8, this._lodOffset = yB.lodOffset ?? 0, this._loaderOptions = yB.loaderOptions, this._useSRGBBuffer = yB.useSRGBBuffer, this._sphericalPolynomialTargetSize = yB.sphericalPolynomialTargetSize ?? 0, gB = yB.onLoad ?? null, kB = yB.onError ?? null), (BB || JB) && this.updateURL(BB, NB, gB, iB, kB, dB, this.jU()?.useDelayedTextureLoading, JB, hB)
          }
          getClassName() {
            return "CubeTexture"
          }
          updateURL(BB) {
            let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              VB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              pB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              lB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
              JB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              YB = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
            this.name && !this.name.startsWith("data:") || (this.name = BB), this.url = BB, TB && (this._forcedExtension = TB);
            const gB = BB.lastIndexOf("."),
              oB = TB || (gB > -1 ? BB.substring(gB).toLowerCase() : ""),
              kB = 0 === oB.indexOf(".dds"),
              LB = 0 === oB.indexOf(".env"),
              OB = 0 === oB.indexOf(".basis");
            if (LB ? (this.gammaSpace = !1, this._prefiltered = !1, this.anisotropicFilteringLevel = 1) : (this._prefiltered = VB, VB && (this.gammaSpace = !1, this.anisotropicFilteringLevel = 1)), JB) this._files = JB;
            else if (OB || LB || kB || pB || (pB = ["_px.jpg", "_py.jpg", "_pz.jpg", "_nx.jpg", "_ny.jpg", "_nz.jpg"]), this._files = this._files || [], this._files.length = 0, pB) {
              for (let TB = 0; TB < pB.length; TB++) this._files.push(BB + pB[TB]);
              this._extensions = pB
            }
            this._buffer = YB, lB ? (this.delayLoadState = 4, this._delayedOnLoad = dB, this._delayedOnError = yB) : this._loadTexture(dB, yB)
          }
          delayLoad(BB) {
            4 === this.delayLoadState && (BB && (this._forcedExtension = BB), this.delayLoadState = 1, this._loadTexture(this._delayedOnLoad, this._delayedOnError))
          }
          getReflectionTextureMatrix() {
            return this._textureMatrix
          }
          setReflectionTextureMatrix(BB) {
            if (BB.updateFlag === this._textureMatrix.updateFlag) return;
            if (BB.isIdentity() !== this._textureMatrix.isIdentity() && this.jU()?.markAllMaterialsAsDirty(1, (BB => -1 !== BB.getActiveTextures().indexOf(this))), this._textureMatrix = BB, !this.jU()?.useRightHandedSystem) return;
            const TB = lB.j.RD[0],
              dB = lB.j.Quaternion[0],
              VB = lB.j.RD[1];
            this._textureMatrix.decompose(TB, dB, VB), dB.z *= -1, dB.w *= -1, lB.b.ComposeToRef(TB, dB, VB, this._textureMatrixRefraction)
          }
          getRefractionTextureMatrix() {
            return this.jU()?.useRightHandedSystem ? this._textureMatrixRefraction : this._textureMatrix
          }
          _loadTexture() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            const dB = this.jU(),
              VB = this._texture;
            this._texture = this._getFromCache(this.url, this._noMipmap, void 0, void 0, this._useSRGBBuffer, this.isCube);
            const yB = () => {
                this.onLoadObservable.notifyObservers(this), VB && (VB.dispose(), this.jU()?.markAllMaterialsAsDirty(1)), BB && BB()
              },
              lB = (BB, dB) => {
                this._loadingError = !0, this._errorObject = {
                  message: BB,
                  exception: dB
                }, TB && TB(BB, dB), YB.f.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            this._texture ? this._texture.isReady ? pB.b.SetImmediate((() => yB())) : this._texture.onLoadedObservable.add((() => yB())) : (this._prefiltered ? this._texture = this._getEngine().createPrefilteredCubeTexture(this.url, dB, this._lodScale, this._lodOffset, BB, lB, this._format, this._forcedExtension, this._createPolynomials, this._buffer) : this._texture = this._getEngine().createCubeTexture(this.url, dB, this._files, this._noMipmap, BB, lB, this._format, this._forcedExtension, !1, this._lodScale, this._lodOffset, null, this._loaderOptions, !!this._useSRGBBuffer, this._buffer), this._texture?.onLoadedObservable.add((() => this.onLoadObservable.notifyObservers(this))))
          }
          clone() {
            let TB = 0;
            const dB = this.irradianceTexture,
              VB = kB.c.Clone((() => {
                const dB = new BB(this.url, this.jU() || this._getEngine(), this._extensions, this._noMipmap, this._files);
                return TB = dB.uniqueId, dB
              }), this);
            return VB.uniqueId = TB, dB && !this.irradianceTexture && (this.irradianceTexture = dB), VB
          }
        }, (() => {
          const pB = "function" === typeof Symbol && Symbol.metadata ? Object.create(MB[Symbol.metadata] ?? null) : void 0;
          TB = [(0, yB.W)()], dB = [(0, yB.T)()], gB = [(0, yB.T)()], mB = [(0, yB.W)("rotationY")], iB = [(0, yB.W)("files")], NB = [(0, yB.W)("forcedExtension")], tB = [(0, yB.W)("extensions")], fB = [(0, yB.C)("textureMatrix")], sB = [(0, yB.C)("textureMatrixRefraction")], (0, VB.g)(BB, null, gB, {
            kind: "getter",
            name: "boundingBoxSize",
            static: !1,
            private: !1,
            access: {
              has: BB => "boundingBoxSize" in BB,
              get: BB => BB.boundingBoxSize
            },
            metadata: pB
          }, null, zB), (0, VB.g)(BB, null, mB, {
            kind: "setter",
            name: "rotationY",
            static: !1,
            private: !1,
            access: {
              has: BB => "rotationY" in BB,
              set: (BB, TB) => {
                BB.rotationY = TB
              }
            },
            metadata: pB
          }, null, zB), (0, VB.g)(null, null, TB, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: BB => "url" in BB,
              get: BB => BB.url,
              set: (BB, TB) => {
                BB.url = TB
              }
            },
            metadata: pB
          }, wB, UB), (0, VB.g)(null, null, dB, {
            kind: "field",
            name: "boundingBoxPosition",
            static: !1,
            private: !1,
            access: {
              has: BB => "boundingBoxPosition" in BB,
              get: BB => BB.boundingBoxPosition,
              set: (BB, TB) => {
                BB.boundingBoxPosition = TB
              }
            },
            metadata: pB
          }, FB, KB), (0, VB.g)(null, null, iB, {
            kind: "field",
            name: "_files",
            static: !1,
            private: !1,
            access: {
              has: BB => "_files" in BB,
              get: BB => BB._files,
              set: (BB, TB) => {
                BB._files = TB
              }
            },
            metadata: pB
          }, rB, IB), (0, VB.g)(null, null, NB, {
            kind: "field",
            name: "_forcedExtension",
            static: !1,
            private: !1,
            access: {
              has: BB => "_forcedExtension" in BB,
              get: BB => BB._forcedExtension,
              set: (BB, TB) => {
                BB._forcedExtension = TB
              }
            },
            metadata: pB
          }, cB, SB), (0, VB.g)(null, null, tB, {
            kind: "field",
            name: "_extensions",
            static: !1,
            private: !1,
            access: {
              has: BB => "_extensions" in BB,
              get: BB => BB._extensions,
              set: (BB, TB) => {
                BB._extensions = TB
              }
            },
            metadata: pB
          }, PB, QB), (0, VB.g)(null, null, fB, {
            kind: "field",
            name: "_textureMatrix",
            static: !1,
            private: !1,
            access: {
              has: BB => "_textureMatrix" in BB,
              get: BB => BB._textureMatrix,
              set: (BB, TB) => {
                BB._textureMatrix = TB
              }
            },
            metadata: pB
          }, RB, aB), (0, VB.g)(null, null, sB, {
            kind: "field",
            name: "_textureMatrixRefraction",
            static: !1,
            private: !1,
            access: {
              has: BB => "_textureMatrixRefraction" in BB,
              get: BB => BB._textureMatrixRefraction,
              set: (BB, TB) => {
                BB._textureMatrixRefraction = TB
              }
            },
            metadata: pB
          }, ZB, XB), pB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: pB
          })
        })(), BB
      })(),
      iB = !1;

    function NB(BB, TB, dB) {
      let VB = "";
      for (const yB of BB) VB += yB;
      return new mB(VB, TB, null, dB, BB)
    }

    function tB(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        VB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const yB = TB.useDelayedTextureLoading;
      TB.useDelayedTextureLoading = !1;
      const pB = new mB(BB, TB, null, !1, null, null, null, void 0, !0, dB, VB);
      return TB.useDelayedTextureLoading = yB, pB
    }

    function fB(BB, TB, dB) {
      const VB = kB.c.Parse((() => {
        let VB = !1;
        return BB.prefiltered && (VB = BB.prefiltered), new mB(dB + (BB.url ?? BB.name), TB, BB.extensions, !1, BB.files || null, null, null, void 0, VB, BB.forcedExtension)
      }), BB, TB);
      if (BB.boundingBoxPosition && (VB.boundingBoxPosition = lB.p.FromArray(BB.boundingBoxPosition)), BB.boundingBoxSize && (VB.boundingBoxSize = lB.p.FromArray(BB.boundingBoxSize)), BB.animations)
        for (let yB = 0; yB < BB.animations.length; yB++) {
          const TB = BB.animations[yB],
            dB = (0, gB.e)("BABYLON.Animation");
          dB && VB.animations.push(dB.Parse(TB))
        }
      return VB
    }
    iB || (iB = !0, mB.CreateFromImages = NB, mB.CreateFromPrefilteredData = tB, mB.Parse = fB, YB.f._CubeTextureParser = fB, (0, gB.g)("BABYLON.CubeTexture", mB))
  },
  40018: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => gB
    });
    var VB = dB(37651),
      yB = dB(39218),
      pB = dB(38689),
      lB = dB(38584),
      JB = dB(38569);
    let YB = !1;
    class gB extends yB.f {
      constructor(BB, TB, dB) {
        let VB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          gB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          oB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5,
          kB = arguments.length > 6 ? arguments[6] : void 0;
        const LB = !dB || dB._isScene;
        super(null, LB ? dB : dB?.Gu, LB ? !VB : dB, kB, gB, void 0, void 0, void 0, void 0, oB), YB || (YB = !0, lB.ThinEngine.prototype.createDynamicTexture = function(BB, TB, dB, VB) {
          const yB = new JB.e(this, 4);
          return yB.baseWidth = BB, yB.baseHeight = TB, dB && (BB = this.needPOTTextures ? (0, pB.g)(BB, this._caps.maxTextureSize) : BB, TB = this.needPOTTextures ? (0, pB.g)(TB, this._caps.maxTextureSize) : TB), yB.width = BB, yB.height = TB, yB.isReady = !1, yB.generateMipMaps = dB, yB.samplingMode = VB, this.updateTextureSamplingMode(VB, yB), this._internalTexturesCache.push(yB), yB
        }, lB.ThinEngine.prototype.updateDynamicTexture = function(BB, TB, dB) {
          let VB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            yB = arguments.length > 4 ? arguments[4] : void 0,
            pB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
          if (!BB) return;
          const lB = this._gl,
            JB = lB.TEXTURE_2D,
            YB = this._bindTextureDirectly(JB, BB, !0, pB);
          this._unpackFlipY(void 0 === dB ? BB.invertY : dB), VB && lB.pixelStorei(lB.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
          const gB = this._getWebGLTextureType(BB.type),
            oB = this._getInternalFormat(yB || BB.format),
            kB = this._getRGBABufferInternalSizedFormat(BB.type, oB);
          lB.texImage2D(JB, 0, kB, oB, gB, TB), BB.generateMipMaps && lB.generateMipmap(JB), YB || this._bindTextureDirectly(JB, null), VB && lB.pixelStorei(lB.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), yB && (BB.format = yB), BB._dynamicTextureSource = TB, BB._premulAlpha = VB, BB.invertY = dB || !1, BB.isReady = !0
        }), this.name = BB, this.wrapU = yB.f.CLAMP_ADDRESSMODE, this.wrapV = yB.f.CLAMP_ADDRESSMODE, this._generateMipMaps = VB;
        const OB = this._getEngine();
        if (!OB) return;
        if (TB.getContext) this._canvas = TB, this._ownCanvas = !1, this._texture = OB.createDynamicTexture(this._canvas.width, this._canvas.height, VB, gB);
        else {
          this._canvas = OB.createCanvas(1, 1), this._ownCanvas = !0;
          const BB = TB;
          BB.width || 0 === BB.width ? this._texture = OB.createDynamicTexture(BB.width, BB.height, VB, gB) : this._texture = OB.createDynamicTexture(TB, TB, VB, gB)
        }
        const DB = this.getSize();
        this._canvas.width !== DB.width && (this._canvas.width = DB.width), this._canvas.height !== DB.height && (this._canvas.height = DB.height), this._context = this._canvas.getContext("2d")
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
        const TB = this.getSize();
        TB.width *= BB, TB.height *= BB, this._recreate(TB)
      }
      scaleTo(BB, TB) {
        const dB = this.getSize();
        dB.width = BB, dB.height = TB, this._recreate(dB)
      }
      getContext() {
        return this._context
      }
      clear(BB) {
        const TB = this.getSize();
        BB && (this._context.fillStyle = BB), this._context.clearRect(0, 0, TB.width, TB.height)
      }
      update(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._texture && this._getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === BB || BB, TB, this._format || void 0, void 0, dB)
      }
      drawText(BB, TB, dB, VB, yB, pB, lB) {
        let JB = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const YB = this.getSize();
        if (pB && (this._context.fillStyle = pB, this._context.fillRect(0, 0, YB.width, YB.height)), this._context.font = VB, null === TB || void 0 === TB) {
          const dB = this._context.measureText(BB);
          TB = (YB.width - dB.width) / 2
        }
        if (null === dB || void 0 === dB) {
          const BB = parseInt(VB.replace(/\D/g, ""));
          dB = YB.height / 2 + BB / 3.65
        }
        this._context.fillStyle = yB || "", this._context.fillText(BB, TB, dB), JB && this.update(lB)
      }
      dispose() {
        super.dispose(), this._ownCanvas && this._canvas?.remove?.(), this._canvas = null, this._context = null
      }
      clone() {
        const BB = this.jU();
        if (!BB) return this;
        const TB = this.getSize(),
          dB = new gB(this.name, TB, BB, this._generateMipMaps);
        return dB.hasAlpha = this.hasAlpha, dB.level = this.level, dB.wrapU = this.wrapU, dB.wrapV = this.wrapV, dB
      }
      serialize() {
        const BB = this.jU();
        BB && !BB.isReady() && VB.b.Warn("The scene must be ready before serializing the dynamic texture");
        const TB = super.serialize();
        return gB._IsCanvasElement(this._canvas) && (TB.base64String = this._canvas.toDataURL()), TB.invertY = this._invertY, TB.samplingMode = this.samplingMode, TB
      }
      static _IsCanvasElement(BB) {
        return void 0 !== BB.toDataURL
      }
      _rebuild() {
        this.update()
      }
    }
  },
  39986: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => yB
    });
    var VB = dB(39218);
    class yB extends VB.f {
      get depth() {
        return this._depth
      }
      constructor(BB, TB, dB, yB, pB, lB) {
        let JB = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          YB = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          gB = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : VB.f.TRILINEAR_SAMPLINGMODE,
          oB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          kB = arguments.length > 10 ? arguments[10] : void 0,
          LB = arguments.length > 11 ? arguments[11] : void 0;
        super(null, lB, !JB, YB), this.format = pB, this._texture = lB.PD().createRawTexture2DArray(BB, TB, dB, yB, pB, JB, YB, gB, null, oB, kB ?? 0, LB), this._depth = yB, this.is2DArray = !0
      }
      update(BB) {
        this.updateMipLevel(BB, 0)
      }
      updateMipLevel(BB, TB) {
        this._texture && this._getEngine().updateRawTexture2DArray(this._texture, BB, this._texture.format, this._texture.invertY, null, this._texture.type, TB)
      }
      static CreateRGBATexture(BB, TB, dB, VB, pB) {
        return new yB(BB, TB, dB, VB, 5, pB, !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0)
      }
    }
  },
  39980: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => VB.b
    });
    var VB = dB(39099);
    (0, VB.d)()
  },
  38840: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => VB.g
    });
    var VB = dB(38843);
    (0, VB.c)()
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);