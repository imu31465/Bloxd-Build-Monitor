export const id = 282;
export const ids = [282];
export const modules = {
  41354: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => aM,
      e: () => PM
    });
    var OM = iM(39711),
      SM = iM(41121),
      jM = iM(41323),
      aM = {};
    class PM {
      constructor(MM) {
        this.attachedToElement = !1, this.attached = {}, this.camera = MM, this.checkInputs = () => {}
      }
      add(MM) {
        const rM = MM.getSimpleName();
        this.attached[rM] ? OM.e.Warn("camera input of type " + rM + " already exists on camera") : (this.attached[rM] = MM, MM.camera = this.camera, MM.checkInputs && (this.checkInputs = this._addCheckInputs(MM.checkInputs.bind(MM))), this.attachedToElement && MM.attachControl(this.noPreventDefault))
      }
      remove(MM) {
        for (const rM in this.attached) {
          const iM = this.attached[rM];
          if (iM === MM) return iM.detachControl(), iM.camera = null, delete this.attached[rM], void this.rebuildInputCheck()
        }
      }
      removeByType(MM) {
        for (const rM in this.attached) {
          const iM = this.attached[rM];
          iM.getClassName() === MM && (iM.detachControl(), iM.camera = null, delete this.attached[rM], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(MM) {
        const rM = this.checkInputs;
        return () => {
          rM(), MM()
        }
      }
      attachInput(MM) {
        this.attachedToElement && MM.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          MM = !jM.b.ForceAttachControlToAlwaysPreventDefault && MM, this.attachedToElement = !0, this.noPreventDefault = MM;
          for (const rM in this.attached) this.attached[rM].attachControl(MM)
        }
      }
      detachElement() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const rM in this.attached) this.attached[rM].detachControl(), MM && (this.attached[rM].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const MM in this.attached) {
          const rM = this.attached[MM];
          rM.checkInputs && (this.checkInputs = this._addCheckInputs(rM.checkInputs.bind(rM)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(MM) {
        const rM = {};
        for (const iM in this.attached) {
          const MM = this.attached[iM],
            OM = SM.b.Serialize(MM);
          rM[MM.getClassName()] = OM
        }
        MM.inputsmgr = rM
      }
      parse(MM) {
        const rM = MM.inputsmgr;
        if (rM) {
          this.clear();
          for (const MM in rM) {
            const iM = aM[MM];
            if (iM) {
              const OM = rM[MM],
                jM = SM.b.Parse((() => new iM), OM, null);
              this.add(jM)
            }
          }
        } else
          for (const iM in this.attached) {
            const rM = aM[this.attached[iM].getClassName()];
            if (rM) {
              const OM = SM.b.Parse((() => new rM), MM, null);
              this.remove(this.attached[iM]), this.add(OM)
            }
          }
      }
    }
  },
  42241: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => EM
    });
    var OM = iM(41099),
      SM = iM(41105),
      jM = iM(41003),
      aM = iM(38040),
      PM = iM(41091),
      nM = iM(41560),
      QM = iM(38085),
      zM = iM(38068),
      LM = iM(41121),
      mM = iM(40939),
      HM = iM(39711),
      hM = iM(41145),
      JM = iM(38885),
      dM = iM(41186);
    var yM = iM(41005);
    let lM = !1;
    let EM = (() => {
        var MM;
        let rM, iM, QM, EM, UM, GM, CM, eM, bM, wM = PM.c,
          tM = [],
          gM = [],
          uM = [],
          RM = [],
          pM = [],
          WM = [],
          sM = [],
          DM = [],
          kM = [],
          ZM = [],
          oM = [],
          fM = [],
          YM = [],
          NM = [],
          AM = [];
        return MM = class extends wM {
          set boundingBoxSize(MM) {
            if (this._boundingBoxSize && this._boundingBoxSize.equals(MM)) return;
            this._boundingBoxSize = MM;
            const rM = this.Hk();
            rM && rM.markAllMaterialsAsDirty(1)
          }
          get boundingBoxSize() {
            return this._boundingBoxSize
          }
          set rotationY(MM) {
            this._rotationY = MM, this.setReflectionTextureMatrix(aM.d.RotationY(this._rotationY))
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
          constructor(MM, rM) {
            let iM, SM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              jM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              PM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              QM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              LM = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              EM = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 5,
              UM = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              GM = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              CM = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
              eM = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : .8,
              bM = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 0,
              wM = arguments.length > 13 ? arguments[13] : void 0,
              xM = arguments.length > 14 ? arguments[14] : void 0;
            super(rM), this._delayedOnLoad = (0, OM.m)(this, tM), this.onLoadObservable = new zM.d, this.url = (0, OM.m)(this, gM, void 0), this.boundingBoxPosition = ((0, OM.m)(this, uM), (0, OM.m)(this, RM, aM.q.Zero())), this._boundingBoxSize = (0, OM.m)(this, pM), this._rotationY = 0, this._files = (0, OM.m)(this, WM, null), this._forcedExtension = ((0, OM.m)(this, sM), (0, OM.m)(this, DM, null)), this._extensions = ((0, OM.m)(this, kM), (0, OM.m)(this, ZM, null)), this._textureMatrix = ((0, OM.m)(this, oM), (0, OM.m)(this, fM, void 0)), this._textureMatrixRefraction = ((0, OM.m)(this, YM), (0, OM.m)(this, NM, new aM.d)), this._format = (0, OM.m)(this, AM), this._buffer = null, lM || (lM = !0, yM.d.prototype._partialLoadFile = function(MM, rM, iM, OM) {
              let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
              this._loadFile(MM, (MM => {
                iM[rM] = MM, iM._internalCount++, 6 === iM._internalCount && OM(iM)
              }), void 0, void 0, !0, ((MM, rM) => {
                SM && MM && SM(MM.status + " " + MM.statusText, rM)
              }))
            }, yM.d.prototype._cascadeLoadFiles = function(MM, rM, iM) {
              let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
              const SM = [];
              SM._internalCount = 0;
              for (let jM = 0; jM < 6; jM++) this._partialLoadFile(iM[jM], jM, SM, rM, OM)
            }, yM.d.prototype._cascadeLoadImgs = function(MM, rM, iM, OM) {
              let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                jM = arguments.length > 5 ? arguments[5] : void 0;
              const aM = [];
              aM._internalCount = 0;
              for (let PM = 0; PM < 6; PM++) this._partialLoadImg(OM[PM], PM, aM, MM, rM, iM, SM, jM)
            }, yM.d.prototype._partialLoadImg = function(MM, rM, iM, OM, SM, jM) {
              let aM = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                PM = arguments.length > 7 ? arguments[7] : void 0;
              const nM = (0, JM.d)();
              (0, hM.p)(MM, (MM => {
                iM[rM] = MM, iM._internalCount++, OM && OM.removePendingData(nM), 6 === iM._internalCount && jM && jM(SM, iM)
              }), ((MM, rM) => {
                OM && OM.removePendingData(nM), aM && aM(MM, rM)
              }), OM ? OM.offlineProvider : null, PM), OM && OM.addPendingData(nM)
            }, yM.d.prototype.createCubeTextureBase = function(MM, rM, iM, OM) {
              let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                jM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                aM = arguments.length > 6 ? arguments[6] : void 0,
                PM = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                nM = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
                QM = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
                zM = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
                LM = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
                hM = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
                JM = arguments.length > 13 && void 0 !== arguments[13] ? arguments[13] : null,
                yM = arguments.length > 14 && void 0 !== arguments[14] && arguments[14],
                lM = arguments.length > 15 && void 0 !== arguments[15] ? arguments[15] : null;
              const EM = LM || new mM.c(this, 7);
              EM.isCube = !0, EM.url = MM, EM.generateMipMaps = !OM, EM._lodGenerationScale = QM, EM._lodGenerationOffset = zM, EM._useSRGBBuffer = !!yM && this._caps.supportSRGBBuffers && (this.version > 1 || this.isWebGPU || !!OM), EM !== LM && (EM.label = MM.substring(0, 60)), this._doNotHandleContextLost || (EM._extension = PM, EM._files = iM, EM._buffer = lM);
              const UM = MM;
              this._transformTextureUrl && !LM && (MM = this._transformTextureUrl(MM));
              const GM = PM ?? function(MM) {
                  const rM = MM.split("?")[0],
                    iM = rM.lastIndexOf(".");
                  return iM > -1 ? rM.substring(iM).toLowerCase() : ""
                }(MM),
                CM = (0, dM.e)(GM),
                eM = (MM, rM) => {
                  EM.dispose(), jM ? jM(MM, rM) : MM && HM.e.Warn(MM)
                },
                bM = (jM, LM) => {
                  MM === UM ? jM && eM(jM.status + " " + jM.statusText, LM) : (HM.e.Warn(`Failed to load ${MM}, falling back to the ${UM}`), this.createCubeTextureBase(UM, rM, iM, !!OM, SM, eM, aM, PM, nM, QM, zM, EM, hM, JM, yM, lM))
                };
              if (CM) CM.then((OM => {
                const jM = MM => {
                  hM && hM(EM, MM), OM.loadCubeData(MM, EM, nM, SM, ((MM, rM) => {
                    eM(MM, rM)
                  }))
                };
                lM ? jM(lM) : iM && 6 === iM.length ? OM.supportCascades ? this._cascadeLoadFiles(rM, (MM => jM(MM.map((MM => new Uint8Array(MM))))), iM, eM) : eM("Textures type does not support cascades.") : this._loadFile(MM, (MM => jM(new Uint8Array(MM))), void 0, rM ? rM.offlineProvider || null : void 0, !0, bM)
              }));
              else {
                if (!iM || 0 === iM.length) throw new Error("Cannot load cubemap because files were not defined, or the correct loader was not found.");
                this._cascadeLoadImgs(rM, EM, ((MM, rM) => {
                  JM && JM(MM, rM)
                }), iM, eM)
              }
              return this._internalTexturesCache.push(EM), EM
            }), this.name = MM, this.url = MM, this._noMipmap = jM, this.hasAlpha = !1, this.isCube = !0, this._textureMatrix = aM.d.Identity(), this.coordinatesMode = nM.h.CUBIC_MODE;
            let vM = null;
            null === SM || Array.isArray(SM) ? (this._noMipmap = jM, this._format = EM, this._createPolynomials = CM, iM = SM, this._loaderOptions = wM, this._useSRGBBuffer = xM, this._lodScale = eM, this._lodOffset = bM) : (iM = SM.extensions ?? null, this._noMipmap = SM.noMipmap ?? !1, PM = SM.files ?? null, vM = SM.buffer ?? null, this._format = SM.format ?? 5, UM = SM.prefiltered ?? !1, GM = SM.forcedExtension ?? null, this._createPolynomials = SM.createPolynomials ?? !1, this._lodScale = SM.lodScale ?? .8, this._lodOffset = SM.lodOffset ?? 0, this._loaderOptions = SM.loaderOptions, this._useSRGBBuffer = SM.useSRGBBuffer, this._sphericalPolynomialTargetSize = SM.sphericalPolynomialTargetSize ?? 0, QM = SM.onLoad ?? null, LM = SM.onError ?? null), (MM || PM) && this.updateURL(MM, GM, QM, UM, LM, iM, this.Hk()?.useDelayedTextureLoading, PM, vM)
          }
          getClassName() {
            return "CubeTexture"
          }
          updateURL(MM) {
            let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              OM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              jM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              aM = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
              PM = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              nM = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
            this.name && !this.name.startsWith("data:") || (this.name = MM), this.url = MM, rM && (this._forcedExtension = rM);
            const QM = MM.lastIndexOf("."),
              zM = rM || (QM > -1 ? MM.substring(QM).toLowerCase() : ""),
              LM = 0 === zM.indexOf(".dds"),
              mM = 0 === zM.indexOf(".env"),
              HM = 0 === zM.indexOf(".basis");
            if (mM ? (this.gammaSpace = !1, this._prefiltered = !1, this.anisotropicFilteringLevel = 1) : (this._prefiltered = OM, OM && (this.gammaSpace = !1, this.anisotropicFilteringLevel = 1)), PM) this._files = PM;
            else if (HM || mM || LM || jM || (jM = ["_px.jpg", "_py.jpg", "_pz.jpg", "_nx.jpg", "_ny.jpg", "_nz.jpg"]), this._files = this._files || [], this._files.length = 0, jM) {
              for (let rM = 0; rM < jM.length; rM++) this._files.push(MM + jM[rM]);
              this._extensions = jM
            }
            this._buffer = nM, aM ? (this.delayLoadState = 4, this._delayedOnLoad = iM, this._delayedOnError = SM) : this._loadTexture(iM, SM)
          }
          delayLoad(MM) {
            4 === this.delayLoadState && (MM && (this._forcedExtension = MM), this.delayLoadState = 1, this._loadTexture(this._delayedOnLoad, this._delayedOnError))
          }
          getReflectionTextureMatrix() {
            return this._textureMatrix
          }
          setReflectionTextureMatrix(MM) {
            if (MM.updateFlag === this._textureMatrix.updateFlag) return;
            if (MM.isIdentity() !== this._textureMatrix.isIdentity() && this.Hk()?.markAllMaterialsAsDirty(1, (MM => -1 !== MM.getActiveTextures().indexOf(this))), this._textureMatrix = MM, !this.Hk()?.useRightHandedSystem) return;
            const rM = aM.l.sh[0],
              iM = aM.l.Quaternion[0],
              OM = aM.l.sh[1];
            this._textureMatrix.decompose(rM, iM, OM), iM.z *= -1, iM.w *= -1, aM.d.ComposeToRef(rM, iM, OM, this._textureMatrixRefraction)
          }
          getRefractionTextureMatrix() {
            return this.Hk()?.useRightHandedSystem ? this._textureMatrixRefraction : this._textureMatrix
          }
          _loadTexture() {
            let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            const iM = this.Hk(),
              OM = this._texture;
            this._texture = this._getFromCache(this.url, this._noMipmap, void 0, void 0, this._useSRGBBuffer, this.isCube);
            const SM = () => {
                this.onLoadObservable.notifyObservers(this), OM && (OM.dispose(), this.Hk()?.markAllMaterialsAsDirty(1)), MM && MM()
              },
              aM = (MM, iM) => {
                this._loadingError = !0, this._errorObject = {
                  message: MM,
                  exception: iM
                }, rM && rM(MM, iM), nM.h.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            this._texture ? this._texture.isReady ? jM.c.SetImmediate((() => SM())) : this._texture.onLoadedObservable.add((() => SM())) : (this._prefiltered ? this._texture = this._getEngine().createPrefilteredCubeTexture(this.url, iM, this._lodScale, this._lodOffset, MM, aM, this._format, this._forcedExtension, this._createPolynomials, this._buffer) : this._texture = this._getEngine().createCubeTexture(this.url, iM, this._files, this._noMipmap, MM, aM, this._format, this._forcedExtension, !1, this._lodScale, this._lodOffset, null, this._loaderOptions, !!this._useSRGBBuffer, this._buffer), this._texture?.onLoadedObservable.add((() => this.onLoadObservable.notifyObservers(this))))
          }
          clone() {
            let rM = 0;
            const iM = this.irradianceTexture,
              OM = LM.b.Clone((() => {
                const iM = new MM(this.url, this.Hk() || this._getEngine(), this._extensions, this._noMipmap, this._files);
                return rM = iM.uniqueId, iM
              }), this);
            return OM.uniqueId = rM, iM && !this.irradianceTexture && (this.irradianceTexture = iM), OM
          }
        }, (() => {
          const jM = "function" === typeof Symbol && Symbol.metadata ? Object.create(wM[Symbol.metadata] ?? null) : void 0;
          rM = [(0, SM.L)()], iM = [(0, SM.J)()], QM = [(0, SM.J)()], EM = [(0, SM.L)("rotationY")], UM = [(0, SM.L)("files")], GM = [(0, SM.L)("forcedExtension")], CM = [(0, SM.L)("extensions")], eM = [(0, SM.u)("textureMatrix")], bM = [(0, SM.u)("textureMatrixRefraction")], (0, OM.i)(MM, null, QM, {
            kind: "getter",
            name: "boundingBoxSize",
            static: !1,
            private: !1,
            access: {
              has: MM => "boundingBoxSize" in MM,
              get: MM => MM.boundingBoxSize
            },
            metadata: jM
          }, null, tM), (0, OM.i)(MM, null, EM, {
            kind: "setter",
            name: "rotationY",
            static: !1,
            private: !1,
            access: {
              has: MM => "rotationY" in MM,
              set: (MM, rM) => {
                MM.rotationY = rM
              }
            },
            metadata: jM
          }, null, tM), (0, OM.i)(null, null, rM, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: MM => "url" in MM,
              get: MM => MM.url,
              set: (MM, rM) => {
                MM.url = rM
              }
            },
            metadata: jM
          }, gM, uM), (0, OM.i)(null, null, iM, {
            kind: "field",
            name: "boundingBoxPosition",
            static: !1,
            private: !1,
            access: {
              has: MM => "boundingBoxPosition" in MM,
              get: MM => MM.boundingBoxPosition,
              set: (MM, rM) => {
                MM.boundingBoxPosition = rM
              }
            },
            metadata: jM
          }, RM, pM), (0, OM.i)(null, null, UM, {
            kind: "field",
            name: "_files",
            static: !1,
            private: !1,
            access: {
              has: MM => "_files" in MM,
              get: MM => MM._files,
              set: (MM, rM) => {
                MM._files = rM
              }
            },
            metadata: jM
          }, WM, sM), (0, OM.i)(null, null, GM, {
            kind: "field",
            name: "_forcedExtension",
            static: !1,
            private: !1,
            access: {
              has: MM => "_forcedExtension" in MM,
              get: MM => MM._forcedExtension,
              set: (MM, rM) => {
                MM._forcedExtension = rM
              }
            },
            metadata: jM
          }, DM, kM), (0, OM.i)(null, null, CM, {
            kind: "field",
            name: "_extensions",
            static: !1,
            private: !1,
            access: {
              has: MM => "_extensions" in MM,
              get: MM => MM._extensions,
              set: (MM, rM) => {
                MM._extensions = rM
              }
            },
            metadata: jM
          }, ZM, oM), (0, OM.i)(null, null, eM, {
            kind: "field",
            name: "_textureMatrix",
            static: !1,
            private: !1,
            access: {
              has: MM => "_textureMatrix" in MM,
              get: MM => MM._textureMatrix,
              set: (MM, rM) => {
                MM._textureMatrix = rM
              }
            },
            metadata: jM
          }, fM, YM), (0, OM.i)(null, null, bM, {
            kind: "field",
            name: "_textureMatrixRefraction",
            static: !1,
            private: !1,
            access: {
              has: MM => "_textureMatrixRefraction" in MM,
              get: MM => MM._textureMatrixRefraction,
              set: (MM, rM) => {
                MM._textureMatrixRefraction = rM
              }
            },
            metadata: jM
          }, NM, AM), jM && Object.defineProperty(MM, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: jM
          })
        })(), MM
      })(),
      UM = !1;

    function GM(MM, rM, iM) {
      let OM = "";
      for (const SM of MM) OM += SM;
      return new EM(OM, rM, null, iM, MM)
    }

    function CM(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        OM = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const SM = rM.useDelayedTextureLoading;
      rM.useDelayedTextureLoading = !1;
      const jM = new EM(MM, rM, null, !1, null, null, null, void 0, !0, iM, OM);
      return rM.useDelayedTextureLoading = SM, jM
    }

    function eM(MM, rM, iM) {
      const OM = LM.b.Parse((() => {
        let OM = !1;
        return MM.prefiltered && (OM = MM.prefiltered), new EM(iM + (MM.url ?? MM.name), rM, MM.extensions, !1, MM.files || null, null, null, void 0, OM, MM.forcedExtension)
      }), MM, rM);
      if (MM.boundingBoxPosition && (OM.boundingBoxPosition = aM.q.FromArray(MM.boundingBoxPosition)), MM.boundingBoxSize && (OM.boundingBoxSize = aM.q.FromArray(MM.boundingBoxSize)), MM.animations)
        for (let SM = 0; SM < MM.animations.length; SM++) {
          const rM = MM.animations[SM],
            iM = (0, QM.b)("BABYLON.Animation");
          iM && OM.animations.push(iM.Parse(rM))
        }
      return OM
    }
    UM || (UM = !0, EM.CreateFromImages = GM, EM.CreateFromPrefilteredData = CM, EM.Parse = eM, nM.h._CubeTextureParser = eM, (0, QM.e)("BABYLON.CubeTexture", EM))
  },
  42283: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => QM
    });
    var OM = iM(39711),
      SM = iM(41560),
      jM = iM(41034),
      aM = iM(40949),
      PM = iM(40939);
    let nM = !1;
    class QM extends SM.h {
      constructor(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          QM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          zM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5,
          LM = arguments.length > 6 ? arguments[6] : void 0;
        const mM = !iM || iM._isScene;
        super(null, mM ? iM : iM?.YJ, mM ? !OM : iM, LM, QM, void 0, void 0, void 0, void 0, zM), nM || (nM = !0, aM.ThinEngine.prototype.createDynamicTexture = function(MM, rM, iM, OM) {
          const SM = new PM.c(this, 4);
          return SM.baseWidth = MM, SM.baseHeight = rM, iM && (MM = this.needPOTTextures ? (0, jM.e)(MM, this._caps.maxTextureSize) : MM, rM = this.needPOTTextures ? (0, jM.e)(rM, this._caps.maxTextureSize) : rM), SM.width = MM, SM.height = rM, SM.isReady = !1, SM.generateMipMaps = iM, SM.samplingMode = OM, this.updateTextureSamplingMode(OM, SM), this._internalTexturesCache.push(SM), SM
        }, aM.ThinEngine.prototype.updateDynamicTexture = function(MM, rM, iM) {
          let OM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            SM = arguments.length > 4 ? arguments[4] : void 0,
            jM = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
          if (!MM) return;
          const aM = this._gl,
            PM = aM.TEXTURE_2D,
            nM = this._bindTextureDirectly(PM, MM, !0, jM);
          this._unpackFlipY(void 0 === iM ? MM.invertY : iM), OM && aM.pixelStorei(aM.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
          const QM = this._getWebGLTextureType(MM.type),
            zM = this._getInternalFormat(SM || MM.format),
            LM = this._getRGBABufferInternalSizedFormat(MM.type, zM);
          aM.texImage2D(PM, 0, LM, zM, QM, rM), MM.generateMipMaps && aM.generateMipmap(PM), nM || this._bindTextureDirectly(PM, null), OM && aM.pixelStorei(aM.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), SM && (MM.format = SM), MM._dynamicTextureSource = rM, MM._premulAlpha = OM, MM.invertY = iM || !1, MM.isReady = !0
        }), this.name = MM, this.wrapU = SM.h.CLAMP_ADDRESSMODE, this.wrapV = SM.h.CLAMP_ADDRESSMODE, this._generateMipMaps = OM;
        const HM = this._getEngine();
        if (!HM) return;
        if (rM.getContext) this._canvas = rM, this._ownCanvas = !1, this._texture = HM.createDynamicTexture(this._canvas.width, this._canvas.height, OM, QM);
        else {
          this._canvas = HM.createCanvas(1, 1), this._ownCanvas = !0;
          const MM = rM;
          MM.width || 0 === MM.width ? this._texture = HM.createDynamicTexture(MM.width, MM.height, OM, QM) : this._texture = HM.createDynamicTexture(rM, rM, OM, QM)
        }
        const hM = this.getSize();
        this._canvas.width !== hM.width && (this._canvas.width = hM.width), this._canvas.height !== hM.height && (this._canvas.height = hM.height), this._context = this._canvas.getContext("2d")
      }
      getClassName() {
        return "DynamicTexture"
      }
      get canRescale() {
        return !0
      }
      _recreate(MM) {
        this._canvas.width = MM.width, this._canvas.height = MM.height, this.releaseInternalTexture(), this._texture = this._getEngine().createDynamicTexture(MM.width, MM.height, this._generateMipMaps, this.samplingMode)
      }
      scale(MM) {
        const rM = this.getSize();
        rM.width *= MM, rM.height *= MM, this._recreate(rM)
      }
      scaleTo(MM, rM) {
        const iM = this.getSize();
        iM.width = MM, iM.height = rM, this._recreate(iM)
      }
      getContext() {
        return this._context
      }
      clear(MM) {
        const rM = this.getSize();
        MM && (this._context.fillStyle = MM), this._context.clearRect(0, 0, rM.width, rM.height)
      }
      update(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._texture && this._getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === MM || MM, rM, this._format || void 0, void 0, iM)
      }
      drawText(MM, rM, iM, OM, SM, jM, aM) {
        let PM = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const nM = this.getSize();
        if (jM && (this._context.fillStyle = jM, this._context.fillRect(0, 0, nM.width, nM.height)), this._context.font = OM, null === rM || void 0 === rM) {
          const iM = this._context.measureText(MM);
          rM = (nM.width - iM.width) / 2
        }
        if (null === iM || void 0 === iM) {
          const MM = parseInt(OM.replace(/\D/g, ""));
          iM = nM.height / 2 + MM / 3.65
        }
        this._context.fillStyle = SM || "", this._context.fillText(MM, rM, iM), PM && this.update(aM)
      }
      dispose() {
        super.dispose(), this._ownCanvas && this._canvas?.remove?.(), this._canvas = null, this._context = null
      }
      clone() {
        const MM = this.Hk();
        if (!MM) return this;
        const rM = this.getSize(),
          iM = new QM(this.name, rM, MM, this._generateMipMaps);
        return iM.hasAlpha = this.hasAlpha, iM.level = this.level, iM.wrapU = this.wrapU, iM.wrapV = this.wrapV, iM
      }
      serialize() {
        const MM = this.Hk();
        MM && !MM.isReady() && OM.e.Warn("The scene must be ready before serializing the dynamic texture");
        const rM = super.serialize();
        return QM._IsCanvasElement(this._canvas) && (rM.base64String = this._canvas.toDataURL()), rM.invertY = this._invertY, rM.samplingMode = this.samplingMode, rM
      }
      static _IsCanvasElement(MM) {
        return void 0 !== MM.toDataURL
      }
      _rebuild() {
        this.update()
      }
    }
  },
  42260: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => SM
    });
    var OM = iM(41560);
    class SM extends OM.h {
      get depth() {
        return this._depth
      }
      constructor(MM, rM, iM, SM, jM, aM) {
        let PM = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          nM = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          QM = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : OM.h.TRILINEAR_SAMPLINGMODE,
          zM = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          LM = arguments.length > 10 ? arguments[10] : void 0,
          mM = arguments.length > 11 ? arguments[11] : void 0;
        super(null, aM, !PM, nM), this.format = jM, this._texture = aM.ph().createRawTexture2DArray(MM, rM, iM, SM, jM, PM, nM, QM, null, zM, LM ?? 0, mM), this._depth = SM, this.is2DArray = !0
      }
      update(MM) {
        this.updateMipLevel(MM, 0)
      }
      updateMipLevel(MM, rM) {
        this._texture && this._getEngine().updateRawTexture2DArray(this._texture, MM, this._texture.format, this._texture.invertY, null, this._texture.type, rM)
      }
      static CreateRGBATexture(MM, rM, iM, OM, jM) {
        return new SM(MM, rM, iM, OM, 5, jM, !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0)
      }
    }
  },
  42256: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => OM.b
    });
    var OM = iM(41463);
    (0, OM.f)()
  },
  41190: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => OM.d
    });
    var OM = iM(41196);
    (0, OM.b)()
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);