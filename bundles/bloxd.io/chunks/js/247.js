export const id = 247;
export const ids = [247];
export const modules = {
  39380: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => fD,
      g: () => bD
    });
    var ID = cD(38048),
      pD = cD(39174),
      iD = cD(39351),
      fD = {};
    class bD {
      constructor(DD) {
        this.attachedToElement = !1, this.attached = {}, this.camera = DD, this.checkInputs = () => {}
      }
      add(DD) {
        const CD = DD.getSimpleName();
        this.attached[CD] ? ID.e.Warn("camera input of type " + CD + " already exists on camera") : (this.attached[CD] = DD, DD.camera = this.camera, DD.checkInputs && (this.checkInputs = this._addCheckInputs(DD.checkInputs.bind(DD))), this.attachedToElement && DD.attachControl(this.noPreventDefault))
      }
      remove(DD) {
        for (const CD in this.attached) {
          const cD = this.attached[CD];
          if (cD === DD) return cD.detachControl(), cD.camera = null, delete this.attached[CD], void this.rebuildInputCheck()
        }
      }
      removeByType(DD) {
        for (const CD in this.attached) {
          const cD = this.attached[CD];
          cD.getClassName() === DD && (cD.detachControl(), cD.camera = null, delete this.attached[CD], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(DD) {
        const CD = this.checkInputs;
        return () => {
          CD(), DD()
        }
      }
      attachInput(DD) {
        this.attachedToElement && DD.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          DD = !iD.c.ForceAttachControlToAlwaysPreventDefault && DD, this.attachedToElement = !0, this.noPreventDefault = DD;
          for (const CD in this.attached) this.attached[CD].attachControl(DD)
        }
      }
      detachElement() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const CD in this.attached) this.attached[CD].detachControl(), DD && (this.attached[CD].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const DD in this.attached) {
          const CD = this.attached[DD];
          CD.checkInputs && (this.checkInputs = this._addCheckInputs(CD.checkInputs.bind(CD)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(DD) {
        const CD = {};
        for (const cD in this.attached) {
          const DD = this.attached[cD],
            ID = pD.d.Serialize(DD);
          CD[DD.getClassName()] = ID
        }
        DD.inputsmgr = CD
      }
      parse(DD) {
        const CD = DD.inputsmgr;
        if (CD) {
          this.clear();
          for (const DD in CD) {
            const cD = fD[DD];
            if (cD) {
              const ID = CD[DD],
                iD = pD.d.Parse((() => new cD), ID, null);
              this.add(iD)
            }
          }
        } else
          for (const cD in this.attached) {
            const CD = fD[this.attached[cD].getClassName()];
            if (CD) {
              const ID = pD.d.Parse((() => new CD), DD, null);
              this.remove(this.attached[cD]), this.add(ID)
            }
          }
      }
    }
  },
  40196: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => gD
    });
    var ID = cD(39154),
      pD = cD(39156),
      iD = cD(39039),
      fD = cD(36446),
      bD = cD(39148),
      QD = cD(39595),
      wD = cD(36488),
      SD = cD(36473),
      BD = cD(39174),
      yD = cD(38979),
      MD = cD(38048),
      tD = cD(39193),
      ZD = cD(37290),
      oD = cD(39223);
    var vD = cD(39046);
    let ND = !1;
    let gD = (() => {
        var DD;
        let CD, cD, wD, gD, XD, mD, nD, OD, PD, HD = bD.d,
          UD = [],
          xD = [],
          qD = [],
          JD = [],
          KD = [],
          aD = [],
          VD = [],
          zD = [],
          jD = [],
          lD = [],
          LD = [],
          TD = [],
          GD = [],
          RD = [],
          kD = [];
        return DD = class extends HD {
          set boundingBoxSize(DD) {
            if (this._boundingBoxSize && this._boundingBoxSize.equals(DD)) return;
            this._boundingBoxSize = DD;
            const CD = this.hq();
            CD && CD.markAllMaterialsAsDirty(1)
          }
          get boundingBoxSize() {
            return this._boundingBoxSize
          }
          set rotationY(DD) {
            this._rotationY = DD, this.setReflectionTextureMatrix(fD.d.RotationY(this._rotationY))
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
          constructor(DD, CD) {
            let cD, pD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              iD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              bD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              wD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              BD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              gD = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 5,
              XD = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              mD = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              nD = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
              OD = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : .8,
              PD = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 0,
              HD = arguments.length > 13 ? arguments[13] : void 0,
              dD = arguments.length > 14 ? arguments[14] : void 0;
            super(CD), this._delayedOnLoad = (0, ID.m)(this, UD), this.onLoadObservable = new SD.c, this.url = (0, ID.m)(this, xD, void 0), this.boundingBoxPosition = ((0, ID.m)(this, qD), (0, ID.m)(this, JD, fD.p.Zero())), this._boundingBoxSize = (0, ID.m)(this, KD), this._rotationY = 0, this._files = (0, ID.m)(this, aD, null), this._forcedExtension = ((0, ID.m)(this, VD), (0, ID.m)(this, zD, null)), this._extensions = ((0, ID.m)(this, jD), (0, ID.m)(this, lD, null)), this._textureMatrix = ((0, ID.m)(this, LD), (0, ID.m)(this, TD, void 0)), this._textureMatrixRefraction = ((0, ID.m)(this, GD), (0, ID.m)(this, RD, new fD.d)), this._format = (0, ID.m)(this, kD), this._buffer = null, ND || (ND = !0, vD.e.prototype._partialLoadFile = function(DD, CD, cD, ID) {
              let pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
              this._loadFile(DD, (DD => {
                cD[CD] = DD, cD._internalCount++, 6 === cD._internalCount && ID(cD)
              }), void 0, void 0, !0, ((DD, CD) => {
                pD && DD && pD(DD.status + " " + DD.statusText, CD)
              }))
            }, vD.e.prototype._cascadeLoadFiles = function(DD, CD, cD) {
              let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
              const pD = [];
              pD._internalCount = 0;
              for (let iD = 0; iD < 6; iD++) this._partialLoadFile(cD[iD], iD, pD, CD, ID)
            }, vD.e.prototype._cascadeLoadImgs = function(DD, CD, cD, ID) {
              let pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                iD = arguments.length > 5 ? arguments[5] : void 0;
              const fD = [];
              fD._internalCount = 0;
              for (let bD = 0; bD < 6; bD++) this._partialLoadImg(ID[bD], bD, fD, DD, CD, cD, pD, iD)
            }, vD.e.prototype._partialLoadImg = function(DD, CD, cD, ID, pD, iD) {
              let fD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                bD = arguments.length > 7 ? arguments[7] : void 0;
              const QD = (0, ZD.d)();
              (0, tD.q)(DD, (DD => {
                cD[CD] = DD, cD._internalCount++, ID && ID.removePendingData(QD), 6 === cD._internalCount && iD && iD(pD, cD)
              }), ((DD, CD) => {
                ID && ID.removePendingData(QD), fD && fD(DD, CD)
              }), ID ? ID.offlineProvider : null, bD), ID && ID.addPendingData(QD)
            }, vD.e.prototype.createCubeTextureBase = function(DD, CD, cD, ID) {
              let pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                iD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                fD = arguments.length > 6 ? arguments[6] : void 0,
                bD = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                QD = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
                wD = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
                SD = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
                BD = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
                tD = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
                ZD = arguments.length > 13 && void 0 !== arguments[13] ? arguments[13] : null,
                vD = arguments.length > 14 && void 0 !== arguments[14] && arguments[14],
                ND = arguments.length > 15 && void 0 !== arguments[15] ? arguments[15] : null;
              const gD = BD || new yD.c(this, 7);
              gD.isCube = !0, gD.url = DD, gD.generateMipMaps = !ID, gD._lodGenerationScale = wD, gD._lodGenerationOffset = SD, gD._useSRGBBuffer = !!vD && this._caps.supportSRGBBuffers && (this.version > 1 || this.isWebGPU || !!ID), gD !== BD && (gD.label = DD.substring(0, 60)), this._doNotHandleContextLost || (gD._extension = bD, gD._files = cD, gD._buffer = ND);
              const XD = DD;
              this._transformTextureUrl && !BD && (DD = this._transformTextureUrl(DD));
              const mD = bD ?? function(DD) {
                  const CD = DD.split("?")[0],
                    cD = CD.lastIndexOf(".");
                  return cD > -1 ? CD.substring(cD).toLowerCase() : ""
                }(DD),
                nD = (0, oD.d)(mD),
                OD = (DD, CD) => {
                  gD.dispose(), iD ? iD(DD, CD) : DD && MD.e.Warn(DD)
                },
                PD = (iD, BD) => {
                  DD === XD ? iD && OD(iD.status + " " + iD.statusText, BD) : (MD.e.Warn(`Failed to load ${DD}, falling back to the ${XD}`), this.createCubeTextureBase(XD, CD, cD, !!ID, pD, OD, fD, bD, QD, wD, SD, gD, tD, ZD, vD, ND))
                };
              if (nD) nD.then((ID => {
                const iD = DD => {
                  tD && tD(gD, DD), ID.loadCubeData(DD, gD, QD, pD, ((DD, CD) => {
                    OD(DD, CD)
                  }))
                };
                ND ? iD(ND) : cD && 6 === cD.length ? ID.supportCascades ? this._cascadeLoadFiles(CD, (DD => iD(DD.map((DD => new Uint8Array(DD))))), cD, OD) : OD("Textures type does not support cascades.") : this._loadFile(DD, (DD => iD(new Uint8Array(DD))), void 0, CD ? CD.offlineProvider || null : void 0, !0, PD)
              }));
              else {
                if (!cD || 0 === cD.length) throw new Error("Cannot load cubemap because files were not defined, or the correct loader was not found.");
                this._cascadeLoadImgs(CD, gD, ((DD, CD) => {
                  ZD && ZD(DD, CD)
                }), cD, OD)
              }
              return this._internalTexturesCache.push(gD), gD
            }), this.name = DD, this.url = DD, this._noMipmap = iD, this.hasAlpha = !1, this.isCube = !0, this._textureMatrix = fD.d.Identity(), this.coordinatesMode = QD.c.CUBIC_MODE;
            let YD = null;
            null === pD || Array.isArray(pD) ? (this._noMipmap = iD, this._format = gD, this._createPolynomials = nD, cD = pD, this._loaderOptions = HD, this._useSRGBBuffer = dD, this._lodScale = OD, this._lodOffset = PD) : (cD = pD.extensions ?? null, this._noMipmap = pD.noMipmap ?? !1, bD = pD.files ?? null, YD = pD.buffer ?? null, this._format = pD.format ?? 5, XD = pD.prefiltered ?? !1, mD = pD.forcedExtension ?? null, this._createPolynomials = pD.createPolynomials ?? !1, this._lodScale = pD.lodScale ?? .8, this._lodOffset = pD.lodOffset ?? 0, this._loaderOptions = pD.loaderOptions, this._useSRGBBuffer = pD.useSRGBBuffer, this._sphericalPolynomialTargetSize = pD.sphericalPolynomialTargetSize ?? 0, wD = pD.onLoad ?? null, BD = pD.onError ?? null), (DD || bD) && this.updateURL(DD, mD, wD, XD, BD, cD, this.hq()?.useDelayedTextureLoading, bD, YD)
          }
          getClassName() {
            return "CubeTexture"
          }
          updateURL(DD) {
            let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              ID = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              iD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              fD = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
              bD = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              QD = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
            this.name && !this.name.startsWith("data:") || (this.name = DD), this.url = DD, CD && (this._forcedExtension = CD);
            const wD = DD.lastIndexOf("."),
              SD = CD || (wD > -1 ? DD.substring(wD).toLowerCase() : ""),
              BD = 0 === SD.indexOf(".dds"),
              yD = 0 === SD.indexOf(".env"),
              MD = 0 === SD.indexOf(".basis");
            if (yD ? (this.gammaSpace = !1, this._prefiltered = !1, this.anisotropicFilteringLevel = 1) : (this._prefiltered = ID, ID && (this.gammaSpace = !1, this.anisotropicFilteringLevel = 1)), bD) this._files = bD;
            else if (MD || yD || BD || iD || (iD = ["_px.jpg", "_py.jpg", "_pz.jpg", "_nx.jpg", "_ny.jpg", "_nz.jpg"]), this._files = this._files || [], this._files.length = 0, iD) {
              for (let CD = 0; CD < iD.length; CD++) this._files.push(DD + iD[CD]);
              this._extensions = iD
            }
            this._buffer = QD, fD ? (this.delayLoadState = 4, this._delayedOnLoad = cD, this._delayedOnError = pD) : this._loadTexture(cD, pD)
          }
          delayLoad(DD) {
            4 === this.delayLoadState && (DD && (this._forcedExtension = DD), this.delayLoadState = 1, this._loadTexture(this._delayedOnLoad, this._delayedOnError))
          }
          getReflectionTextureMatrix() {
            return this._textureMatrix
          }
          setReflectionTextureMatrix(DD) {
            if (DD.updateFlag === this._textureMatrix.updateFlag) return;
            if (DD.isIdentity() !== this._textureMatrix.isIdentity() && this.hq()?.markAllMaterialsAsDirty(1, (DD => -1 !== DD.getActiveTextures().indexOf(this))), this._textureMatrix = DD, !this.hq()?.useRightHandedSystem) return;
            const CD = fD.l.cZ[0],
              cD = fD.l.Quaternion[0],
              ID = fD.l.cZ[1];
            this._textureMatrix.decompose(CD, cD, ID), cD.z *= -1, cD.w *= -1, fD.d.ComposeToRef(CD, cD, ID, this._textureMatrixRefraction)
          }
          getRefractionTextureMatrix() {
            return this.hq()?.useRightHandedSystem ? this._textureMatrixRefraction : this._textureMatrix
          }
          _loadTexture() {
            let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            const cD = this.hq(),
              ID = this._texture;
            this._texture = this._getFromCache(this.url, this._noMipmap, void 0, void 0, this._useSRGBBuffer, this.isCube);
            const pD = () => {
                this.onLoadObservable.notifyObservers(this), ID && (ID.dispose(), this.hq()?.markAllMaterialsAsDirty(1)), DD && DD()
              },
              fD = (DD, cD) => {
                this._loadingError = !0, this._errorObject = {
                  message: DD,
                  exception: cD
                }, CD && CD(DD, cD), QD.c.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            this._texture ? this._texture.isReady ? iD.d.SetImmediate((() => pD())) : this._texture.onLoadedObservable.add((() => pD())) : (this._prefiltered ? this._texture = this._getEngine().createPrefilteredCubeTexture(this.url, cD, this._lodScale, this._lodOffset, DD, fD, this._format, this._forcedExtension, this._createPolynomials, this._buffer) : this._texture = this._getEngine().createCubeTexture(this.url, cD, this._files, this._noMipmap, DD, fD, this._format, this._forcedExtension, !1, this._lodScale, this._lodOffset, null, this._loaderOptions, !!this._useSRGBBuffer, this._buffer), this._texture?.onLoadedObservable.add((() => this.onLoadObservable.notifyObservers(this))))
          }
          clone() {
            let CD = 0;
            const cD = this.irradianceTexture,
              ID = BD.d.Clone((() => {
                const cD = new DD(this.url, this.hq() || this._getEngine(), this._extensions, this._noMipmap, this._files);
                return CD = cD.uniqueId, cD
              }), this);
            return ID.uniqueId = CD, cD && !this.irradianceTexture && (this.irradianceTexture = cD), ID
          }
        }, (() => {
          const iD = "function" === typeof Symbol && Symbol.metadata ? Object.create(HD[Symbol.metadata] ?? null) : void 0;
          CD = [(0, pD.G)()], cD = [(0, pD.C)()], wD = [(0, pD.C)()], gD = [(0, pD.G)("rotationY")], XD = [(0, pD.G)("files")], mD = [(0, pD.G)("forcedExtension")], nD = [(0, pD.G)("extensions")], OD = [(0, pD.p)("textureMatrix")], PD = [(0, pD.p)("textureMatrixRefraction")], (0, ID.k)(DD, null, wD, {
            kind: "getter",
            name: "boundingBoxSize",
            static: !1,
            private: !1,
            access: {
              has: DD => "boundingBoxSize" in DD,
              get: DD => DD.boundingBoxSize
            },
            metadata: iD
          }, null, UD), (0, ID.k)(DD, null, gD, {
            kind: "setter",
            name: "rotationY",
            static: !1,
            private: !1,
            access: {
              has: DD => "rotationY" in DD,
              set: (DD, CD) => {
                DD.rotationY = CD
              }
            },
            metadata: iD
          }, null, UD), (0, ID.k)(null, null, CD, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: DD => "url" in DD,
              get: DD => DD.url,
              set: (DD, CD) => {
                DD.url = CD
              }
            },
            metadata: iD
          }, xD, qD), (0, ID.k)(null, null, cD, {
            kind: "field",
            name: "boundingBoxPosition",
            static: !1,
            private: !1,
            access: {
              has: DD => "boundingBoxPosition" in DD,
              get: DD => DD.boundingBoxPosition,
              set: (DD, CD) => {
                DD.boundingBoxPosition = CD
              }
            },
            metadata: iD
          }, JD, KD), (0, ID.k)(null, null, XD, {
            kind: "field",
            name: "_files",
            static: !1,
            private: !1,
            access: {
              has: DD => "_files" in DD,
              get: DD => DD._files,
              set: (DD, CD) => {
                DD._files = CD
              }
            },
            metadata: iD
          }, aD, VD), (0, ID.k)(null, null, mD, {
            kind: "field",
            name: "_forcedExtension",
            static: !1,
            private: !1,
            access: {
              has: DD => "_forcedExtension" in DD,
              get: DD => DD._forcedExtension,
              set: (DD, CD) => {
                DD._forcedExtension = CD
              }
            },
            metadata: iD
          }, zD, jD), (0, ID.k)(null, null, nD, {
            kind: "field",
            name: "_extensions",
            static: !1,
            private: !1,
            access: {
              has: DD => "_extensions" in DD,
              get: DD => DD._extensions,
              set: (DD, CD) => {
                DD._extensions = CD
              }
            },
            metadata: iD
          }, lD, LD), (0, ID.k)(null, null, OD, {
            kind: "field",
            name: "_textureMatrix",
            static: !1,
            private: !1,
            access: {
              has: DD => "_textureMatrix" in DD,
              get: DD => DD._textureMatrix,
              set: (DD, CD) => {
                DD._textureMatrix = CD
              }
            },
            metadata: iD
          }, TD, GD), (0, ID.k)(null, null, PD, {
            kind: "field",
            name: "_textureMatrixRefraction",
            static: !1,
            private: !1,
            access: {
              has: DD => "_textureMatrixRefraction" in DD,
              get: DD => DD._textureMatrixRefraction,
              set: (DD, CD) => {
                DD._textureMatrixRefraction = CD
              }
            },
            metadata: iD
          }, RD, kD), iD && Object.defineProperty(DD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: iD
          })
        })(), DD
      })(),
      XD = !1;

    function mD(DD, CD, cD) {
      let ID = "";
      for (const pD of DD) ID += pD;
      return new gD(ID, CD, null, cD, DD)
    }

    function nD(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        ID = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const pD = CD.useDelayedTextureLoading;
      CD.useDelayedTextureLoading = !1;
      const iD = new gD(DD, CD, null, !1, null, null, null, void 0, !0, cD, ID);
      return CD.useDelayedTextureLoading = pD, iD
    }

    function OD(DD, CD, cD) {
      const ID = BD.d.Parse((() => {
        let ID = !1;
        return DD.prefiltered && (ID = DD.prefiltered), new gD(cD + (DD.url ?? DD.name), CD, DD.extensions, !1, DD.files || null, null, null, void 0, ID, DD.forcedExtension)
      }), DD, CD);
      if (DD.boundingBoxPosition && (ID.boundingBoxPosition = fD.p.FromArray(DD.boundingBoxPosition)), DD.boundingBoxSize && (ID.boundingBoxSize = fD.p.FromArray(DD.boundingBoxSize)), DD.animations)
        for (let pD = 0; pD < DD.animations.length; pD++) {
          const CD = DD.animations[pD],
            cD = (0, wD.b)("BABYLON.Animation");
          cD && ID.animations.push(cD.Parse(CD))
        }
      return ID
    }
    XD || (XD = !0, gD.CreateFromImages = mD, gD.CreateFromPrefilteredData = nD, gD.Parse = OD, QD.c._CubeTextureParser = OD, (0, wD.d)("BABYLON.CubeTexture", gD))
  },
  40226: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => wD
    });
    var ID = cD(38048),
      pD = cD(39595),
      iD = cD(39084),
      fD = cD(38991),
      bD = cD(38979);
    let QD = !1;
    class wD extends pD.c {
      constructor(DD, CD, cD) {
        let ID = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          wD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          SD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5,
          BD = arguments.length > 6 ? arguments[6] : void 0;
        const yD = !cD || cD._isScene;
        super(null, yD ? cD : cD?.wo, yD ? !ID : cD, BD, wD, void 0, void 0, void 0, void 0, SD), QD || (QD = !0, fD.ThinEngine.prototype.createDynamicTexture = function(DD, CD, cD, ID) {
          const pD = new bD.c(this, 4);
          return pD.baseWidth = DD, pD.baseHeight = CD, cD && (DD = this.needPOTTextures ? (0, iD.e)(DD, this._caps.maxTextureSize) : DD, CD = this.needPOTTextures ? (0, iD.e)(CD, this._caps.maxTextureSize) : CD), pD.width = DD, pD.height = CD, pD.isReady = !1, pD.generateMipMaps = cD, pD.samplingMode = ID, this.updateTextureSamplingMode(ID, pD), this._internalTexturesCache.push(pD), pD
        }, fD.ThinEngine.prototype.updateDynamicTexture = function(DD, CD, cD) {
          let ID = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            pD = arguments.length > 4 ? arguments[4] : void 0,
            iD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
          if (!DD) return;
          const fD = this._gl,
            bD = fD.TEXTURE_2D,
            QD = this._bindTextureDirectly(bD, DD, !0, iD);
          this._unpackFlipY(void 0 === cD ? DD.invertY : cD), ID && fD.pixelStorei(fD.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
          const wD = this._getWebGLTextureType(DD.type),
            SD = this._getInternalFormat(pD || DD.format),
            BD = this._getRGBABufferInternalSizedFormat(DD.type, SD);
          fD.texImage2D(bD, 0, BD, SD, wD, CD), DD.generateMipMaps && fD.generateMipmap(bD), QD || this._bindTextureDirectly(bD, null), ID && fD.pixelStorei(fD.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), pD && (DD.format = pD), DD._dynamicTextureSource = CD, DD._premulAlpha = ID, DD.invertY = cD || !1, DD.isReady = !0
        }), this.name = DD, this.wrapU = pD.c.CLAMP_ADDRESSMODE, this.wrapV = pD.c.CLAMP_ADDRESSMODE, this._generateMipMaps = ID;
        const MD = this._getEngine();
        if (!MD) return;
        if (CD.getContext) this._canvas = CD, this._ownCanvas = !1, this._texture = MD.createDynamicTexture(this._canvas.width, this._canvas.height, ID, wD);
        else {
          this._canvas = MD.createCanvas(1, 1), this._ownCanvas = !0;
          const DD = CD;
          DD.width || 0 === DD.width ? this._texture = MD.createDynamicTexture(DD.width, DD.height, ID, wD) : this._texture = MD.createDynamicTexture(CD, CD, ID, wD)
        }
        const tD = this.getSize();
        this._canvas.width !== tD.width && (this._canvas.width = tD.width), this._canvas.height !== tD.height && (this._canvas.height = tD.height), this._context = this._canvas.getContext("2d")
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
        const CD = this.getSize();
        CD.width *= DD, CD.height *= DD, this._recreate(CD)
      }
      scaleTo(DD, CD) {
        const cD = this.getSize();
        cD.width = DD, cD.height = CD, this._recreate(cD)
      }
      getContext() {
        return this._context
      }
      clear(DD) {
        const CD = this.getSize();
        DD && (this._context.fillStyle = DD), this._context.clearRect(0, 0, CD.width, CD.height)
      }
      update(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._texture && this._getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === DD || DD, CD, this._format || void 0, void 0, cD)
      }
      drawText(DD, CD, cD, ID, pD, iD, fD) {
        let bD = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const QD = this.getSize();
        if (iD && (this._context.fillStyle = iD, this._context.fillRect(0, 0, QD.width, QD.height)), this._context.font = ID, null === CD || void 0 === CD) {
          const cD = this._context.measureText(DD);
          CD = (QD.width - cD.width) / 2
        }
        if (null === cD || void 0 === cD) {
          const DD = parseInt(ID.replace(/\D/g, ""));
          cD = QD.height / 2 + DD / 3.65
        }
        this._context.fillStyle = pD || "", this._context.fillText(DD, CD, cD), bD && this.update(fD)
      }
      dispose() {
        super.dispose(), this._ownCanvas && this._canvas?.remove?.(), this._canvas = null, this._context = null
      }
      clone() {
        const DD = this.hq();
        if (!DD) return this;
        const CD = this.getSize(),
          cD = new wD(this.name, CD, DD, this._generateMipMaps);
        return cD.hasAlpha = this.hasAlpha, cD.level = this.level, cD.wrapU = this.wrapU, cD.wrapV = this.wrapV, cD
      }
      serialize() {
        const DD = this.hq();
        DD && !DD.isReady() && ID.e.Warn("The scene must be ready before serializing the dynamic texture");
        const CD = super.serialize();
        return wD._IsCanvasElement(this._canvas) && (CD.base64String = this._canvas.toDataURL()), CD.invertY = this._invertY, CD.samplingMode = this.samplingMode, CD
      }
      static _IsCanvasElement(DD) {
        return void 0 !== DD.toDataURL
      }
      _rebuild() {
        this.update()
      }
    }
  },
  40203: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => pD
    });
    var ID = cD(39595);
    class pD extends ID.c {
      get depth() {
        return this._depth
      }
      constructor(DD, CD, cD, pD, iD, fD) {
        let bD = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          QD = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          wD = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : ID.c.TRILINEAR_SAMPLINGMODE,
          SD = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          BD = arguments.length > 10 ? arguments[10] : void 0,
          yD = arguments.length > 11 ? arguments[11] : void 0;
        super(null, fD, !bD, QD), this.format = iD, this._texture = fD.DZ().createRawTexture2DArray(DD, CD, cD, pD, iD, bD, QD, wD, null, SD, BD ?? 0, yD), this._depth = pD, this.is2DArray = !0
      }
      update(DD) {
        this.updateMipLevel(DD, 0)
      }
      updateMipLevel(DD, CD) {
        this._texture && this._getEngine().updateRawTexture2DArray(this._texture, DD, this._texture.format, this._texture.invertY, null, this._texture.type, CD)
      }
      static CreateRGBATexture(DD, CD, cD, ID, iD) {
        return new pD(DD, CD, cD, ID, 5, iD, !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0)
      }
    }
  },
  40201: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => ID.e
    });
    var ID = cD(39489);
    (0, ID.g)()
  },
  39231: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => ID.e
    });
    var ID = cD(39239);
    (0, ID.d)()
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);