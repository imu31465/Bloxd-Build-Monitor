export const id = 257;
export const ids = [257];
export const modules = {
  40179: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => rD,
      h: () => LD
    });
    var pD = wD(38662),
      sD = wD(39939),
      KD = wD(40148),
      rD = {};
    class LD {
      constructor(DD) {
        this.attachedToElement = !1, this.attached = {}, this.camera = DD, this.checkInputs = () => {}
      }
      add(DD) {
        const zD = DD.getSimpleName();
        this.attached[zD] ? pD.d.Warn("camera input of type " + zD + " already exists on camera") : (this.attached[zD] = DD, DD.camera = this.camera, DD.checkInputs && (this.checkInputs = this._addCheckInputs(DD.checkInputs.bind(DD))), this.attachedToElement && DD.attachControl(this.noPreventDefault))
      }
      remove(DD) {
        for (const zD in this.attached) {
          const wD = this.attached[zD];
          if (wD === DD) return wD.detachControl(), wD.camera = null, delete this.attached[zD], void this.rebuildInputCheck()
        }
      }
      removeByType(DD) {
        for (const zD in this.attached) {
          const wD = this.attached[zD];
          wD.getClassName() === DD && (wD.detachControl(), wD.camera = null, delete this.attached[zD], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(DD) {
        const zD = this.checkInputs;
        return () => {
          zD(), DD()
        }
      }
      attachInput(DD) {
        this.attachedToElement && DD.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          DD = !KD.c.ForceAttachControlToAlwaysPreventDefault && DD, this.attachedToElement = !0, this.noPreventDefault = DD;
          for (const zD in this.attached) this.attached[zD].attachControl(DD)
        }
      }
      detachElement() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const zD in this.attached) this.attached[zD].detachControl(), DD && (this.attached[zD].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const DD in this.attached) {
          const zD = this.attached[DD];
          zD.checkInputs && (this.checkInputs = this._addCheckInputs(zD.checkInputs.bind(zD)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(DD) {
        const zD = {};
        for (const wD in this.attached) {
          const DD = this.attached[wD],
            pD = sD.d.Serialize(DD);
          zD[DD.getClassName()] = pD
        }
        DD.inputsmgr = zD
      }
      parse(DD) {
        const zD = DD.inputsmgr;
        if (zD) {
          this.clear();
          for (const DD in zD) {
            const wD = rD[DD];
            if (wD) {
              const pD = zD[DD],
                KD = sD.d.Parse((() => new wD), pD, null);
              this.add(KD)
            }
          }
        } else
          for (const wD in this.attached) {
            const zD = rD[this.attached[wD].getClassName()];
            if (zD) {
              const pD = sD.d.Parse((() => new zD), DD, null);
              this.remove(this.attached[wD]), this.add(pD)
            }
          }
      }
    }
  },
  41044: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => MD
    });
    var pD = wD(39921),
      sD = wD(39927),
      KD = wD(39820),
      rD = wD(37079),
      LD = wD(39918),
      cD = wD(40400),
      gD = wD(37134),
      RD = wD(37119),
      AD = wD(39939),
      UD = wD(39761),
      fD = wD(38662),
      ID = wD(39960),
      BD = wD(37891),
      GD = wD(40006);
    var hD = wD(39826);
    let nD = !1;
    let MD = (() => {
        var DD;
        let zD, wD, gD, MD, OD, JD, ED, QD, XD, VD = LD.d,
          PD = [],
          CD = [],
          xD = [],
          TD = [],
          bD = [],
          jD = [],
          dD = [],
          SD = [],
          iD = [],
          lD = [],
          WD = [],
          ND = [],
          ZD = [],
          yD = [],
          kD = [];
        return DD = class extends VD {
          set boundingBoxSize(DD) {
            if (this._boundingBoxSize && this._boundingBoxSize.equals(DD)) return;
            this._boundingBoxSize = DD;
            const zD = this.Ul();
            zD && zD.markAllMaterialsAsDirty(1)
          }
          get boundingBoxSize() {
            return this._boundingBoxSize
          }
          set rotationY(DD) {
            this._rotationY = DD, this.setReflectionTextureMatrix(rD.e.RotationY(this._rotationY))
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
          constructor(DD, zD) {
            let wD, sD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              KD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              LD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              gD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              AD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              MD = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 5,
              OD = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              JD = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              ED = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
              QD = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : .8,
              XD = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 0,
              VD = arguments.length > 13 ? arguments[13] : void 0,
              mD = arguments.length > 14 ? arguments[14] : void 0;
            super(zD), this._delayedOnLoad = (0, pD.m)(this, PD), this.onLoadObservable = new RD.b, this.url = (0, pD.m)(this, CD, void 0), this.boundingBoxPosition = ((0, pD.m)(this, xD), (0, pD.m)(this, TD, rD.s.Zero())), this._boundingBoxSize = (0, pD.m)(this, bD), this._rotationY = 0, this._files = (0, pD.m)(this, jD, null), this._forcedExtension = ((0, pD.m)(this, dD), (0, pD.m)(this, SD, null)), this._extensions = ((0, pD.m)(this, iD), (0, pD.m)(this, lD, null)), this._textureMatrix = ((0, pD.m)(this, WD), (0, pD.m)(this, ND, void 0)), this._textureMatrixRefraction = ((0, pD.m)(this, ZD), (0, pD.m)(this, yD, new rD.e)), this._format = (0, pD.m)(this, kD), this._buffer = null, nD || (nD = !0, hD.c.prototype._partialLoadFile = function(DD, zD, wD, pD) {
              let sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
              this._loadFile(DD, (DD => {
                wD[zD] = DD, wD._internalCount++, 6 === wD._internalCount && pD(wD)
              }), void 0, void 0, !0, ((DD, zD) => {
                sD && DD && sD(DD.status + " " + DD.statusText, zD)
              }))
            }, hD.c.prototype._cascadeLoadFiles = function(DD, zD, wD) {
              let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
              const sD = [];
              sD._internalCount = 0;
              for (let KD = 0; KD < 6; KD++) this._partialLoadFile(wD[KD], KD, sD, zD, pD)
            }, hD.c.prototype._cascadeLoadImgs = function(DD, zD, wD, pD) {
              let sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                KD = arguments.length > 5 ? arguments[5] : void 0;
              const rD = [];
              rD._internalCount = 0;
              for (let LD = 0; LD < 6; LD++) this._partialLoadImg(pD[LD], LD, rD, DD, zD, wD, sD, KD)
            }, hD.c.prototype._partialLoadImg = function(DD, zD, wD, pD, sD, KD) {
              let rD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                LD = arguments.length > 7 ? arguments[7] : void 0;
              const cD = (0, BD.c)();
              (0, ID.r)(DD, (DD => {
                wD[zD] = DD, wD._internalCount++, pD && pD.removePendingData(cD), 6 === wD._internalCount && KD && KD(sD, wD)
              }), ((DD, zD) => {
                pD && pD.removePendingData(cD), rD && rD(DD, zD)
              }), pD ? pD.offlineProvider : null, LD), pD && pD.addPendingData(cD)
            }, hD.c.prototype.createCubeTextureBase = function(DD, zD, wD, pD) {
              let sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                KD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                rD = arguments.length > 6 ? arguments[6] : void 0,
                LD = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                cD = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
                gD = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
                RD = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
                AD = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
                ID = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
                BD = arguments.length > 13 && void 0 !== arguments[13] ? arguments[13] : null,
                hD = arguments.length > 14 && void 0 !== arguments[14] && arguments[14],
                nD = arguments.length > 15 && void 0 !== arguments[15] ? arguments[15] : null;
              const MD = AD || new UD.e(this, 7);
              MD.isCube = !0, MD.url = DD, MD.generateMipMaps = !pD, MD._lodGenerationScale = gD, MD._lodGenerationOffset = RD, MD._useSRGBBuffer = !!hD && this._caps.supportSRGBBuffers && (this.version > 1 || this.isWebGPU || !!pD), MD !== AD && (MD.label = DD.substring(0, 60)), this._doNotHandleContextLost || (MD._extension = LD, MD._files = wD, MD._buffer = nD);
              const OD = DD;
              this._transformTextureUrl && !AD && (DD = this._transformTextureUrl(DD));
              const JD = LD ?? function(DD) {
                  const zD = DD.split("?")[0],
                    wD = zD.lastIndexOf(".");
                  return wD > -1 ? zD.substring(wD).toLowerCase() : ""
                }(DD),
                ED = (0, GD.b)(JD),
                QD = (DD, zD) => {
                  MD.dispose(), KD ? KD(DD, zD) : DD && fD.d.Warn(DD)
                },
                XD = (KD, AD) => {
                  DD === OD ? KD && QD(KD.status + " " + KD.statusText, AD) : (fD.d.Warn(`Failed to load ${DD}, falling back to the ${OD}`), this.createCubeTextureBase(OD, zD, wD, !!pD, sD, QD, rD, LD, cD, gD, RD, MD, ID, BD, hD, nD))
                };
              if (ED) ED.then((pD => {
                const KD = DD => {
                  ID && ID(MD, DD), pD.loadCubeData(DD, MD, cD, sD, ((DD, zD) => {
                    QD(DD, zD)
                  }))
                };
                nD ? KD(nD) : wD && 6 === wD.length ? pD.supportCascades ? this._cascadeLoadFiles(zD, (DD => KD(DD.map((DD => new Uint8Array(DD))))), wD, QD) : QD("Textures type does not support cascades.") : this._loadFile(DD, (DD => KD(new Uint8Array(DD))), void 0, zD ? zD.offlineProvider || null : void 0, !0, XD)
              }));
              else {
                if (!wD || 0 === wD.length) throw new Error("Cannot load cubemap because files were not defined, or the correct loader was not found.");
                this._cascadeLoadImgs(zD, MD, ((DD, zD) => {
                  BD && BD(DD, zD)
                }), wD, QD)
              }
              return this._internalTexturesCache.push(MD), MD
            }), this.name = DD, this.url = DD, this._noMipmap = KD, this.hasAlpha = !1, this.isCube = !0, this._textureMatrix = rD.e.Identity(), this.coordinatesMode = cD.d.CUBIC_MODE;
            let eD = null;
            null === sD || Array.isArray(sD) ? (this._noMipmap = KD, this._format = MD, this._createPolynomials = ED, wD = sD, this._loaderOptions = VD, this._useSRGBBuffer = mD, this._lodScale = QD, this._lodOffset = XD) : (wD = sD.extensions ?? null, this._noMipmap = sD.noMipmap ?? !1, LD = sD.files ?? null, eD = sD.buffer ?? null, this._format = sD.format ?? 5, OD = sD.prefiltered ?? !1, JD = sD.forcedExtension ?? null, this._createPolynomials = sD.createPolynomials ?? !1, this._lodScale = sD.lodScale ?? .8, this._lodOffset = sD.lodOffset ?? 0, this._loaderOptions = sD.loaderOptions, this._useSRGBBuffer = sD.useSRGBBuffer, this._sphericalPolynomialTargetSize = sD.sphericalPolynomialTargetSize ?? 0, gD = sD.onLoad ?? null, AD = sD.onError ?? null), (DD || LD) && this.updateURL(DD, JD, gD, OD, AD, wD, this.Ul()?.useDelayedTextureLoading, LD, eD)
          }
          getClassName() {
            return "CubeTexture"
          }
          updateURL(DD) {
            let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              pD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              KD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              rD = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
              LD = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              cD = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
            this.name && !this.name.startsWith("data:") || (this.name = DD), this.url = DD, zD && (this._forcedExtension = zD);
            const gD = DD.lastIndexOf("."),
              RD = zD || (gD > -1 ? DD.substring(gD).toLowerCase() : ""),
              AD = 0 === RD.indexOf(".dds"),
              UD = 0 === RD.indexOf(".env"),
              fD = 0 === RD.indexOf(".basis");
            if (UD ? (this.gammaSpace = !1, this._prefiltered = !1, this.anisotropicFilteringLevel = 1) : (this._prefiltered = pD, pD && (this.gammaSpace = !1, this.anisotropicFilteringLevel = 1)), LD) this._files = LD;
            else if (fD || UD || AD || KD || (KD = ["_px.jpg", "_py.jpg", "_pz.jpg", "_nx.jpg", "_ny.jpg", "_nz.jpg"]), this._files = this._files || [], this._files.length = 0, KD) {
              for (let zD = 0; zD < KD.length; zD++) this._files.push(DD + KD[zD]);
              this._extensions = KD
            }
            this._buffer = cD, rD ? (this.delayLoadState = 4, this._delayedOnLoad = wD, this._delayedOnError = sD) : this._loadTexture(wD, sD)
          }
          delayLoad(DD) {
            4 === this.delayLoadState && (DD && (this._forcedExtension = DD), this.delayLoadState = 1, this._loadTexture(this._delayedOnLoad, this._delayedOnError))
          }
          getReflectionTextureMatrix() {
            return this._textureMatrix
          }
          setReflectionTextureMatrix(DD) {
            if (DD.updateFlag === this._textureMatrix.updateFlag) return;
            if (DD.isIdentity() !== this._textureMatrix.isIdentity() && this.Ul()?.markAllMaterialsAsDirty(1, (DD => -1 !== DD.getActiveTextures().indexOf(this))), this._textureMatrix = DD, !this.Ul()?.useRightHandedSystem) return;
            const zD = rD.n.WI[0],
              wD = rD.n.Quaternion[0],
              pD = rD.n.WI[1];
            this._textureMatrix.decompose(zD, wD, pD), wD.z *= -1, wD.w *= -1, rD.e.ComposeToRef(zD, wD, pD, this._textureMatrixRefraction)
          }
          getRefractionTextureMatrix() {
            return this.Ul()?.useRightHandedSystem ? this._textureMatrixRefraction : this._textureMatrix
          }
          _loadTexture() {
            let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            const wD = this.Ul(),
              pD = this._texture;
            this._texture = this._getFromCache(this.url, this._noMipmap, void 0, void 0, this._useSRGBBuffer, this.isCube);
            const sD = () => {
                this.onLoadObservable.notifyObservers(this), pD && (pD.dispose(), this.Ul()?.markAllMaterialsAsDirty(1)), DD && DD()
              },
              rD = (DD, wD) => {
                this._loadingError = !0, this._errorObject = {
                  message: DD,
                  exception: wD
                }, zD && zD(DD, wD), cD.d.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            this._texture ? this._texture.isReady ? KD.d.SetImmediate((() => sD())) : this._texture.onLoadedObservable.add((() => sD())) : (this._prefiltered ? this._texture = this._getEngine().createPrefilteredCubeTexture(this.url, wD, this._lodScale, this._lodOffset, DD, rD, this._format, this._forcedExtension, this._createPolynomials, this._buffer) : this._texture = this._getEngine().createCubeTexture(this.url, wD, this._files, this._noMipmap, DD, rD, this._format, this._forcedExtension, !1, this._lodScale, this._lodOffset, null, this._loaderOptions, !!this._useSRGBBuffer, this._buffer), this._texture?.onLoadedObservable.add((() => this.onLoadObservable.notifyObservers(this))))
          }
          clone() {
            let zD = 0;
            const wD = this.irradianceTexture,
              pD = AD.d.Clone((() => {
                const wD = new DD(this.url, this.Ul() || this._getEngine(), this._extensions, this._noMipmap, this._files);
                return zD = wD.uniqueId, wD
              }), this);
            return pD.uniqueId = zD, wD && !this.irradianceTexture && (this.irradianceTexture = wD), pD
          }
        }, (() => {
          const KD = "function" === typeof Symbol && Symbol.metadata ? Object.create(VD[Symbol.metadata] ?? null) : void 0;
          zD = [(0, sD.C)()], wD = [(0, sD.B)()], gD = [(0, sD.B)()], MD = [(0, sD.C)("rotationY")], OD = [(0, sD.C)("files")], JD = [(0, sD.C)("forcedExtension")], ED = [(0, sD.C)("extensions")], QD = [(0, sD.o)("textureMatrix")], XD = [(0, sD.o)("textureMatrixRefraction")], (0, pD.i)(DD, null, gD, {
            kind: "getter",
            name: "boundingBoxSize",
            static: !1,
            private: !1,
            access: {
              has: DD => "boundingBoxSize" in DD,
              get: DD => DD.boundingBoxSize
            },
            metadata: KD
          }, null, PD), (0, pD.i)(DD, null, MD, {
            kind: "setter",
            name: "rotationY",
            static: !1,
            private: !1,
            access: {
              has: DD => "rotationY" in DD,
              set: (DD, zD) => {
                DD.rotationY = zD
              }
            },
            metadata: KD
          }, null, PD), (0, pD.i)(null, null, zD, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: DD => "url" in DD,
              get: DD => DD.url,
              set: (DD, zD) => {
                DD.url = zD
              }
            },
            metadata: KD
          }, CD, xD), (0, pD.i)(null, null, wD, {
            kind: "field",
            name: "boundingBoxPosition",
            static: !1,
            private: !1,
            access: {
              has: DD => "boundingBoxPosition" in DD,
              get: DD => DD.boundingBoxPosition,
              set: (DD, zD) => {
                DD.boundingBoxPosition = zD
              }
            },
            metadata: KD
          }, TD, bD), (0, pD.i)(null, null, OD, {
            kind: "field",
            name: "_files",
            static: !1,
            private: !1,
            access: {
              has: DD => "_files" in DD,
              get: DD => DD._files,
              set: (DD, zD) => {
                DD._files = zD
              }
            },
            metadata: KD
          }, jD, dD), (0, pD.i)(null, null, JD, {
            kind: "field",
            name: "_forcedExtension",
            static: !1,
            private: !1,
            access: {
              has: DD => "_forcedExtension" in DD,
              get: DD => DD._forcedExtension,
              set: (DD, zD) => {
                DD._forcedExtension = zD
              }
            },
            metadata: KD
          }, SD, iD), (0, pD.i)(null, null, ED, {
            kind: "field",
            name: "_extensions",
            static: !1,
            private: !1,
            access: {
              has: DD => "_extensions" in DD,
              get: DD => DD._extensions,
              set: (DD, zD) => {
                DD._extensions = zD
              }
            },
            metadata: KD
          }, lD, WD), (0, pD.i)(null, null, QD, {
            kind: "field",
            name: "_textureMatrix",
            static: !1,
            private: !1,
            access: {
              has: DD => "_textureMatrix" in DD,
              get: DD => DD._textureMatrix,
              set: (DD, zD) => {
                DD._textureMatrix = zD
              }
            },
            metadata: KD
          }, ND, ZD), (0, pD.i)(null, null, XD, {
            kind: "field",
            name: "_textureMatrixRefraction",
            static: !1,
            private: !1,
            access: {
              has: DD => "_textureMatrixRefraction" in DD,
              get: DD => DD._textureMatrixRefraction,
              set: (DD, zD) => {
                DD._textureMatrixRefraction = zD
              }
            },
            metadata: KD
          }, yD, kD), KD && Object.defineProperty(DD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: KD
          })
        })(), DD
      })(),
      OD = !1;

    function JD(DD, zD, wD) {
      let pD = "";
      for (const sD of DD) pD += sD;
      return new MD(pD, zD, null, wD, DD)
    }

    function ED(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        pD = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const sD = zD.useDelayedTextureLoading;
      zD.useDelayedTextureLoading = !1;
      const KD = new MD(DD, zD, null, !1, null, null, null, void 0, !0, wD, pD);
      return zD.useDelayedTextureLoading = sD, KD
    }

    function QD(DD, zD, wD) {
      const pD = AD.d.Parse((() => {
        let pD = !1;
        return DD.prefiltered && (pD = DD.prefiltered), new MD(wD + (DD.url ?? DD.name), zD, DD.extensions, !1, DD.files || null, null, null, void 0, pD, DD.forcedExtension)
      }), DD, zD);
      if (DD.boundingBoxPosition && (pD.boundingBoxPosition = rD.s.FromArray(DD.boundingBoxPosition)), DD.boundingBoxSize && (pD.boundingBoxSize = rD.s.FromArray(DD.boundingBoxSize)), DD.animations)
        for (let sD = 0; sD < DD.animations.length; sD++) {
          const zD = DD.animations[sD],
            wD = (0, gD.e)("BABYLON.Animation");
          wD && pD.animations.push(wD.Parse(zD))
        }
      return pD
    }
    OD || (OD = !0, MD.CreateFromImages = JD, MD.CreateFromPrefilteredData = ED, MD.Parse = QD, cD.d._CubeTextureParser = QD, (0, gD.i)("BABYLON.CubeTexture", MD))
  },
  41084: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => gD
    });
    var pD = wD(38662),
      sD = wD(40400),
      KD = wD(39852),
      rD = wD(39766),
      LD = wD(39761);
    let cD = !1;
    class gD extends sD.d {
      constructor(DD, zD, wD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          gD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          RD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5,
          AD = arguments.length > 6 ? arguments[6] : void 0;
        const UD = !wD || wD._isScene;
        super(null, UD ? wD : wD?.oB, UD ? !pD : wD, AD, gD, void 0, void 0, void 0, void 0, RD), cD || (cD = !0, rD.ThinEngine.prototype.createDynamicTexture = function(DD, zD, wD, pD) {
          const sD = new LD.e(this, 4);
          return sD.baseWidth = DD, sD.baseHeight = zD, wD && (DD = this.needPOTTextures ? (0, KD.f)(DD, this._caps.maxTextureSize) : DD, zD = this.needPOTTextures ? (0, KD.f)(zD, this._caps.maxTextureSize) : zD), sD.width = DD, sD.height = zD, sD.isReady = !1, sD.generateMipMaps = wD, sD.samplingMode = pD, this.updateTextureSamplingMode(pD, sD), this._internalTexturesCache.push(sD), sD
        }, rD.ThinEngine.prototype.updateDynamicTexture = function(DD, zD, wD) {
          let pD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            sD = arguments.length > 4 ? arguments[4] : void 0,
            KD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
          if (!DD) return;
          const rD = this._gl,
            LD = rD.TEXTURE_2D,
            cD = this._bindTextureDirectly(LD, DD, !0, KD);
          this._unpackFlipY(void 0 === wD ? DD.invertY : wD), pD && rD.pixelStorei(rD.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
          const gD = this._getWebGLTextureType(DD.type),
            RD = this._getInternalFormat(sD || DD.format),
            AD = this._getRGBABufferInternalSizedFormat(DD.type, RD);
          rD.texImage2D(LD, 0, AD, RD, gD, zD), DD.generateMipMaps && rD.generateMipmap(LD), cD || this._bindTextureDirectly(LD, null), pD && rD.pixelStorei(rD.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), sD && (DD.format = sD), DD._dynamicTextureSource = zD, DD._premulAlpha = pD, DD.invertY = wD || !1, DD.isReady = !0
        }), this.name = DD, this.wrapU = sD.d.CLAMP_ADDRESSMODE, this.wrapV = sD.d.CLAMP_ADDRESSMODE, this._generateMipMaps = pD;
        const fD = this._getEngine();
        if (!fD) return;
        if (zD.getContext) this._canvas = zD, this._ownCanvas = !1, this._texture = fD.createDynamicTexture(this._canvas.width, this._canvas.height, pD, gD);
        else {
          this._canvas = fD.createCanvas(1, 1), this._ownCanvas = !0;
          const DD = zD;
          DD.width || 0 === DD.width ? this._texture = fD.createDynamicTexture(DD.width, DD.height, pD, gD) : this._texture = fD.createDynamicTexture(zD, zD, pD, gD)
        }
        const ID = this.getSize();
        this._canvas.width !== ID.width && (this._canvas.width = ID.width), this._canvas.height !== ID.height && (this._canvas.height = ID.height), this._context = this._canvas.getContext("2d")
      }
      getClassName() {
        return "DynamicTexture"
      }
      get canRescale() {
        return !0
      }
      _recreate(DD) {
        this._canvas.width = DD.width, this._canvas.height = DD.height, this.releaseInternalTexture(), this._texture = this._getEngine().createDynamicTexture(DD.width, DD.height, this._generateMipMaps, this.samplingMode)
      }
      scale(DD) {
        const zD = this.getSize();
        zD.width *= DD, zD.height *= DD, this._recreate(zD)
      }
      scaleTo(DD, zD) {
        const wD = this.getSize();
        wD.width = DD, wD.height = zD, this._recreate(wD)
      }
      getContext() {
        return this._context
      }
      clear(DD) {
        const zD = this.getSize();
        DD && (this._context.fillStyle = DD), this._context.clearRect(0, 0, zD.width, zD.height)
      }
      update(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._texture && this._getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === DD || DD, zD, this._format || void 0, void 0, wD)
      }
      drawText(DD, zD, wD, pD, sD, KD, rD) {
        let LD = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const cD = this.getSize();
        if (KD && (this._context.fillStyle = KD, this._context.fillRect(0, 0, cD.width, cD.height)), this._context.font = pD, null === zD || void 0 === zD) {
          const wD = this._context.measureText(DD);
          zD = (cD.width - wD.width) / 2
        }
        if (null === wD || void 0 === wD) {
          const DD = parseInt(pD.replace(/\D/g, ""));
          wD = cD.height / 2 + DD / 3.65
        }
        this._context.fillStyle = sD || "", this._context.fillText(DD, zD, wD), LD && this.update(rD)
      }
      dispose() {
        super.dispose(), this._ownCanvas && this._canvas?.remove?.(), this._canvas = null, this._context = null
      }
      clone() {
        const DD = this.Ul();
        if (!DD) return this;
        const zD = this.getSize(),
          wD = new gD(this.name, zD, DD, this._generateMipMaps);
        return wD.hasAlpha = this.hasAlpha, wD.level = this.level, wD.wrapU = this.wrapU, wD.wrapV = this.wrapV, wD
      }
      serialize() {
        const DD = this.Ul();
        DD && !DD.isReady() && pD.d.Warn("The scene must be ready before serializing the dynamic texture");
        const zD = super.serialize();
        return gD._IsCanvasElement(this._canvas) && (zD.base64String = this._canvas.toDataURL()), zD.invertY = this._invertY, zD.samplingMode = this.samplingMode, zD
      }
      static _IsCanvasElement(DD) {
        return void 0 !== DD.toDataURL
      }
      _rebuild() {
        this.update()
      }
    }
  },
  41064: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => sD
    });
    var pD = wD(40400);
    class sD extends pD.d {
      get depth() {
        return this._depth
      }
      constructor(DD, zD, wD, sD, KD, rD) {
        let LD = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          cD = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          gD = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : pD.d.TRILINEAR_SAMPLINGMODE,
          RD = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          AD = arguments.length > 10 ? arguments[10] : void 0,
          UD = arguments.length > 11 ? arguments[11] : void 0;
        super(null, rD, !LD, cD), this.format = KD, this._texture = rD.iI().createRawTexture2DArray(DD, zD, wD, sD, KD, LD, cD, gD, null, RD, AD ?? 0, UD), this._depth = sD, this.is2DArray = !0
      }
      update(DD) {
        this.updateMipLevel(DD, 0)
      }
      updateMipLevel(DD, zD) {
        this._texture && this._getEngine().updateRawTexture2DArray(this._texture, DD, this._texture.format, this._texture.invertY, null, this._texture.type, zD)
      }
      static CreateRGBATexture(DD, zD, wD, pD, KD) {
        return new sD(DD, zD, wD, pD, 5, KD, !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0)
      }
    }
  },
  41055: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => pD.c
    });
    var pD = wD(40291);
    (0, pD.g)()
  },
  40015: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => pD.e
    });
    var pD = wD(40022);
    (0, pD.c)()
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);