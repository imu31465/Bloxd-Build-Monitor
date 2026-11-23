export const id = 257;
export const ids = [257];
export const modules = {
  40069: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => nC,
      i: () => fC
    });
    var QC = ZC(38507),
      wC = ZC(39842),
      bC = ZC(40042),
      nC = {};
    class fC {
      constructor(CC) {
        this.attachedToElement = !1, this.attached = {}, this.camera = CC, this.checkInputs = () => {}
      }
      add(CC) {
        const zC = CC.getSimpleName();
        this.attached[zC] ? QC.c.Warn("camera input of type " + zC + " already exists on camera") : (this.attached[zC] = CC, CC.camera = this.camera, CC.checkInputs && (this.checkInputs = this._addCheckInputs(CC.checkInputs.bind(CC))), this.attachedToElement && CC.attachControl(this.noPreventDefault))
      }
      remove(CC) {
        for (const zC in this.attached) {
          const ZC = this.attached[zC];
          if (ZC === CC) return ZC.detachControl(), ZC.camera = null, delete this.attached[zC], void this.rebuildInputCheck()
        }
      }
      removeByType(CC) {
        for (const zC in this.attached) {
          const ZC = this.attached[zC];
          ZC.getClassName() === CC && (ZC.detachControl(), ZC.camera = null, delete this.attached[zC], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(CC) {
        const zC = this.checkInputs;
        return () => {
          zC(), CC()
        }
      }
      attachInput(CC) {
        this.attachedToElement && CC.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          CC = !bC.d.ForceAttachControlToAlwaysPreventDefault && CC, this.attachedToElement = !0, this.noPreventDefault = CC;
          for (const zC in this.attached) this.attached[zC].attachControl(CC)
        }
      }
      detachElement() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const zC in this.attached) this.attached[zC].detachControl(), CC && (this.attached[zC].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const CC in this.attached) {
          const zC = this.attached[CC];
          zC.checkInputs && (this.checkInputs = this._addCheckInputs(zC.checkInputs.bind(zC)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(CC) {
        const zC = {};
        for (const ZC in this.attached) {
          const CC = this.attached[ZC],
            QC = wC.d.Serialize(CC);
          zC[CC.getClassName()] = QC
        }
        CC.inputsmgr = zC
      }
      parse(CC) {
        const zC = CC.inputsmgr;
        if (zC) {
          this.clear();
          for (const CC in zC) {
            const ZC = nC[CC];
            if (ZC) {
              const QC = zC[CC],
                bC = wC.d.Parse((() => new ZC), QC, null);
              this.add(bC)
            }
          }
        } else
          for (const ZC in this.attached) {
            const zC = nC[this.attached[ZC].getClassName()];
            if (zC) {
              const QC = wC.d.Parse((() => new zC), CC, null);
              this.remove(this.attached[ZC]), this.add(QC)
            }
          }
      }
    }
  },
  40963: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => RC
    });
    var QC = ZC(39811),
      wC = ZC(39818),
      bC = ZC(39712),
      nC = ZC(36963),
      fC = ZC(39803),
      oC = ZC(40303),
      qC = ZC(37002),
      FC = ZC(36987),
      WC = ZC(39842),
      NC = ZC(39650),
      MC = ZC(38507),
      gC = ZC(39865),
      SC = ZC(37731),
      pC = ZC(39896);
    var PC = ZC(39721);
    let GC = !1;
    let RC = (() => {
        var CC;
        let zC, ZC, qC, RC, AC, xC, JC, IC, iC, vC = fC.b,
          eC = [],
          hC = [],
          KC = [],
          YC = [],
          dC = [],
          mC = [],
          HC = [],
          EC = [],
          lC = [],
          XC = [],
          cC = [],
          uC = [],
          rC = [],
          sC = [],
          TC = [];
        return CC = class extends vC {
          set boundingBoxSize(CC) {
            if (this._boundingBoxSize && this._boundingBoxSize.equals(CC)) return;
            this._boundingBoxSize = CC;
            const zC = this.Km();
            zC && zC.markAllMaterialsAsDirty(1)
          }
          get boundingBoxSize() {
            return this._boundingBoxSize
          }
          set rotationY(CC) {
            this._rotationY = CC, this.setReflectionTextureMatrix(nC.b.RotationY(this._rotationY))
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
          constructor(CC, zC) {
            let ZC, wC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              bC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              fC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              qC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              WC = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              RC = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 5,
              AC = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              xC = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              JC = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
              IC = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : .8,
              iC = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 0,
              vC = arguments.length > 13 ? arguments[13] : void 0,
              aC = arguments.length > 14 ? arguments[14] : void 0;
            super(zC), this._delayedOnLoad = (0, QC.n)(this, eC), this.onLoadObservable = new FC.d, this.url = (0, QC.n)(this, hC, void 0), this.boundingBoxPosition = ((0, QC.n)(this, KC), (0, QC.n)(this, YC, nC.r.Zero())), this._boundingBoxSize = (0, QC.n)(this, dC), this._rotationY = 0, this._files = (0, QC.n)(this, mC, null), this._forcedExtension = ((0, QC.n)(this, HC), (0, QC.n)(this, EC, null)), this._extensions = ((0, QC.n)(this, lC), (0, QC.n)(this, XC, null)), this._textureMatrix = ((0, QC.n)(this, cC), (0, QC.n)(this, uC, void 0)), this._textureMatrixRefraction = ((0, QC.n)(this, rC), (0, QC.n)(this, sC, new nC.b)), this._format = (0, QC.n)(this, TC), this._buffer = null, GC || (GC = !0, PC.b.prototype._partialLoadFile = function(CC, zC, ZC, QC) {
              let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
              this._loadFile(CC, (CC => {
                ZC[zC] = CC, ZC._internalCount++, 6 === ZC._internalCount && QC(ZC)
              }), void 0, void 0, !0, ((CC, zC) => {
                wC && CC && wC(CC.status + " " + CC.statusText, zC)
              }))
            }, PC.b.prototype._cascadeLoadFiles = function(CC, zC, ZC) {
              let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
              const wC = [];
              wC._internalCount = 0;
              for (let bC = 0; bC < 6; bC++) this._partialLoadFile(ZC[bC], bC, wC, zC, QC)
            }, PC.b.prototype._cascadeLoadImgs = function(CC, zC, ZC, QC) {
              let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                bC = arguments.length > 5 ? arguments[5] : void 0;
              const nC = [];
              nC._internalCount = 0;
              for (let fC = 0; fC < 6; fC++) this._partialLoadImg(QC[fC], fC, nC, CC, zC, ZC, wC, bC)
            }, PC.b.prototype._partialLoadImg = function(CC, zC, ZC, QC, wC, bC) {
              let nC = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                fC = arguments.length > 7 ? arguments[7] : void 0;
              const oC = (0, SC.b)();
              (0, gC.m)(CC, (CC => {
                ZC[zC] = CC, ZC._internalCount++, QC && QC.removePendingData(oC), 6 === ZC._internalCount && bC && bC(wC, ZC)
              }), ((CC, zC) => {
                QC && QC.removePendingData(oC), nC && nC(CC, zC)
              }), QC ? QC.offlineProvider : null, fC), QC && QC.addPendingData(oC)
            }, PC.b.prototype.createCubeTextureBase = function(CC, zC, ZC, QC) {
              let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                bC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                nC = arguments.length > 6 ? arguments[6] : void 0,
                fC = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                oC = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
                qC = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
                FC = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
                WC = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
                gC = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
                SC = arguments.length > 13 && void 0 !== arguments[13] ? arguments[13] : null,
                PC = arguments.length > 14 && void 0 !== arguments[14] && arguments[14],
                GC = arguments.length > 15 && void 0 !== arguments[15] ? arguments[15] : null;
              const RC = WC || new NC.c(this, 7);
              RC.isCube = !0, RC.url = CC, RC.generateMipMaps = !QC, RC._lodGenerationScale = qC, RC._lodGenerationOffset = FC, RC._useSRGBBuffer = !!PC && this._caps.supportSRGBBuffers && (this.version > 1 || this.isWebGPU || !!QC), RC !== WC && (RC.label = CC.substring(0, 60)), this._doNotHandleContextLost || (RC._extension = fC, RC._files = ZC, RC._buffer = GC);
              const AC = CC;
              this._transformTextureUrl && !WC && (CC = this._transformTextureUrl(CC));
              const xC = fC ?? function(CC) {
                  const zC = CC.split("?")[0],
                    ZC = zC.lastIndexOf(".");
                  return ZC > -1 ? zC.substring(ZC).toLowerCase() : ""
                }(CC),
                JC = (0, pC.e)(xC),
                IC = (CC, zC) => {
                  RC.dispose(), bC ? bC(CC, zC) : CC && MC.c.Warn(CC)
                },
                iC = (bC, WC) => {
                  CC === AC ? bC && IC(bC.status + " " + bC.statusText, WC) : (MC.c.Warn(`Failed to load ${CC}, falling back to the ${AC}`), this.createCubeTextureBase(AC, zC, ZC, !!QC, wC, IC, nC, fC, oC, qC, FC, RC, gC, SC, PC, GC))
                };
              if (JC) JC.then((QC => {
                const bC = CC => {
                  gC && gC(RC, CC), QC.loadCubeData(CC, RC, oC, wC, ((CC, zC) => {
                    IC(CC, zC)
                  }))
                };
                GC ? bC(GC) : ZC && 6 === ZC.length ? QC.supportCascades ? this._cascadeLoadFiles(zC, (CC => bC(CC.map((CC => new Uint8Array(CC))))), ZC, IC) : IC("Textures type does not support cascades.") : this._loadFile(CC, (CC => bC(new Uint8Array(CC))), void 0, zC ? zC.offlineProvider || null : void 0, !0, iC)
              }));
              else {
                if (!ZC || 0 === ZC.length) throw new Error("Cannot load cubemap because files were not defined, or the correct loader was not found.");
                this._cascadeLoadImgs(zC, RC, ((CC, zC) => {
                  SC && SC(CC, zC)
                }), ZC, IC)
              }
              return this._internalTexturesCache.push(RC), RC
            }), this.name = CC, this.url = CC, this._noMipmap = bC, this.hasAlpha = !1, this.isCube = !0, this._textureMatrix = nC.b.Identity(), this.coordinatesMode = oC.h.CUBIC_MODE;
            let tC = null;
            null === wC || Array.isArray(wC) ? (this._noMipmap = bC, this._format = RC, this._createPolynomials = JC, ZC = wC, this._loaderOptions = vC, this._useSRGBBuffer = aC, this._lodScale = IC, this._lodOffset = iC) : (ZC = wC.extensions ?? null, this._noMipmap = wC.noMipmap ?? !1, fC = wC.files ?? null, tC = wC.buffer ?? null, this._format = wC.format ?? 5, AC = wC.prefiltered ?? !1, xC = wC.forcedExtension ?? null, this._createPolynomials = wC.createPolynomials ?? !1, this._lodScale = wC.lodScale ?? .8, this._lodOffset = wC.lodOffset ?? 0, this._loaderOptions = wC.loaderOptions, this._useSRGBBuffer = wC.useSRGBBuffer, this._sphericalPolynomialTargetSize = wC.sphericalPolynomialTargetSize ?? 0, qC = wC.onLoad ?? null, WC = wC.onError ?? null), (CC || fC) && this.updateURL(CC, xC, qC, AC, WC, ZC, this.Km()?.useDelayedTextureLoading, fC, tC)
          }
          getClassName() {
            return "CubeTexture"
          }
          updateURL(CC) {
            let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              bC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              nC = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
              fC = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              oC = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
            this.name && !this.name.startsWith("data:") || (this.name = CC), this.url = CC, zC && (this._forcedExtension = zC);
            const qC = CC.lastIndexOf("."),
              FC = zC || (qC > -1 ? CC.substring(qC).toLowerCase() : ""),
              WC = 0 === FC.indexOf(".dds"),
              NC = 0 === FC.indexOf(".env"),
              MC = 0 === FC.indexOf(".basis");
            if (NC ? (this.gammaSpace = !1, this._prefiltered = !1, this.anisotropicFilteringLevel = 1) : (this._prefiltered = QC, QC && (this.gammaSpace = !1, this.anisotropicFilteringLevel = 1)), fC) this._files = fC;
            else if (MC || NC || WC || bC || (bC = ["_px.jpg", "_py.jpg", "_pz.jpg", "_nx.jpg", "_ny.jpg", "_nz.jpg"]), this._files = this._files || [], this._files.length = 0, bC) {
              for (let zC = 0; zC < bC.length; zC++) this._files.push(CC + bC[zC]);
              this._extensions = bC
            }
            this._buffer = oC, nC ? (this.delayLoadState = 4, this._delayedOnLoad = ZC, this._delayedOnError = wC) : this._loadTexture(ZC, wC)
          }
          delayLoad(CC) {
            4 === this.delayLoadState && (CC && (this._forcedExtension = CC), this.delayLoadState = 1, this._loadTexture(this._delayedOnLoad, this._delayedOnError))
          }
          getReflectionTextureMatrix() {
            return this._textureMatrix
          }
          setReflectionTextureMatrix(CC) {
            if (CC.updateFlag === this._textureMatrix.updateFlag) return;
            if (CC.isIdentity() !== this._textureMatrix.isIdentity() && this.Km()?.markAllMaterialsAsDirty(1, (CC => -1 !== CC.getActiveTextures().indexOf(this))), this._textureMatrix = CC, !this.Km()?.useRightHandedSystem) return;
            const zC = nC.j.Eg[0],
              ZC = nC.j.Quaternion[0],
              QC = nC.j.Eg[1];
            this._textureMatrix.decompose(zC, ZC, QC), ZC.z *= -1, ZC.w *= -1, nC.b.ComposeToRef(zC, ZC, QC, this._textureMatrixRefraction)
          }
          getRefractionTextureMatrix() {
            return this.Km()?.useRightHandedSystem ? this._textureMatrixRefraction : this._textureMatrix
          }
          _loadTexture() {
            let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            const ZC = this.Km(),
              QC = this._texture;
            this._texture = this._getFromCache(this.url, this._noMipmap, void 0, void 0, this._useSRGBBuffer, this.isCube);
            const wC = () => {
                this.onLoadObservable.notifyObservers(this), QC && (QC.dispose(), this.Km()?.markAllMaterialsAsDirty(1)), CC && CC()
              },
              nC = (CC, ZC) => {
                this._loadingError = !0, this._errorObject = {
                  message: CC,
                  exception: ZC
                }, zC && zC(CC, ZC), oC.h.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            this._texture ? this._texture.isReady ? bC.d.SetImmediate((() => wC())) : this._texture.onLoadedObservable.add((() => wC())) : (this._prefiltered ? this._texture = this._getEngine().createPrefilteredCubeTexture(this.url, ZC, this._lodScale, this._lodOffset, CC, nC, this._format, this._forcedExtension, this._createPolynomials, this._buffer) : this._texture = this._getEngine().createCubeTexture(this.url, ZC, this._files, this._noMipmap, CC, nC, this._format, this._forcedExtension, !1, this._lodScale, this._lodOffset, null, this._loaderOptions, !!this._useSRGBBuffer, this._buffer), this._texture?.onLoadedObservable.add((() => this.onLoadObservable.notifyObservers(this))))
          }
          clone() {
            let zC = 0;
            const ZC = this.irradianceTexture,
              QC = WC.d.Clone((() => {
                const ZC = new CC(this.url, this.Km() || this._getEngine(), this._extensions, this._noMipmap, this._files);
                return zC = ZC.uniqueId, ZC
              }), this);
            return QC.uniqueId = zC, ZC && !this.irradianceTexture && (this.irradianceTexture = ZC), QC
          }
        }, (() => {
          const bC = "function" === typeof Symbol && Symbol.metadata ? Object.create(vC[Symbol.metadata] ?? null) : void 0;
          zC = [(0, wC.M)()], ZC = [(0, wC.J)()], qC = [(0, wC.J)()], RC = [(0, wC.M)("rotationY")], AC = [(0, wC.M)("files")], xC = [(0, wC.M)("forcedExtension")], JC = [(0, wC.M)("extensions")], IC = [(0, wC.v)("textureMatrix")], iC = [(0, wC.v)("textureMatrixRefraction")], (0, QC.j)(CC, null, qC, {
            kind: "getter",
            name: "boundingBoxSize",
            static: !1,
            private: !1,
            access: {
              has: CC => "boundingBoxSize" in CC,
              get: CC => CC.boundingBoxSize
            },
            metadata: bC
          }, null, eC), (0, QC.j)(CC, null, RC, {
            kind: "setter",
            name: "rotationY",
            static: !1,
            private: !1,
            access: {
              has: CC => "rotationY" in CC,
              set: (CC, zC) => {
                CC.rotationY = zC
              }
            },
            metadata: bC
          }, null, eC), (0, QC.j)(null, null, zC, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: CC => "url" in CC,
              get: CC => CC.url,
              set: (CC, zC) => {
                CC.url = zC
              }
            },
            metadata: bC
          }, hC, KC), (0, QC.j)(null, null, ZC, {
            kind: "field",
            name: "boundingBoxPosition",
            static: !1,
            private: !1,
            access: {
              has: CC => "boundingBoxPosition" in CC,
              get: CC => CC.boundingBoxPosition,
              set: (CC, zC) => {
                CC.boundingBoxPosition = zC
              }
            },
            metadata: bC
          }, YC, dC), (0, QC.j)(null, null, AC, {
            kind: "field",
            name: "_files",
            static: !1,
            private: !1,
            access: {
              has: CC => "_files" in CC,
              get: CC => CC._files,
              set: (CC, zC) => {
                CC._files = zC
              }
            },
            metadata: bC
          }, mC, HC), (0, QC.j)(null, null, xC, {
            kind: "field",
            name: "_forcedExtension",
            static: !1,
            private: !1,
            access: {
              has: CC => "_forcedExtension" in CC,
              get: CC => CC._forcedExtension,
              set: (CC, zC) => {
                CC._forcedExtension = zC
              }
            },
            metadata: bC
          }, EC, lC), (0, QC.j)(null, null, JC, {
            kind: "field",
            name: "_extensions",
            static: !1,
            private: !1,
            access: {
              has: CC => "_extensions" in CC,
              get: CC => CC._extensions,
              set: (CC, zC) => {
                CC._extensions = zC
              }
            },
            metadata: bC
          }, XC, cC), (0, QC.j)(null, null, IC, {
            kind: "field",
            name: "_textureMatrix",
            static: !1,
            private: !1,
            access: {
              has: CC => "_textureMatrix" in CC,
              get: CC => CC._textureMatrix,
              set: (CC, zC) => {
                CC._textureMatrix = zC
              }
            },
            metadata: bC
          }, uC, rC), (0, QC.j)(null, null, iC, {
            kind: "field",
            name: "_textureMatrixRefraction",
            static: !1,
            private: !1,
            access: {
              has: CC => "_textureMatrixRefraction" in CC,
              get: CC => CC._textureMatrixRefraction,
              set: (CC, zC) => {
                CC._textureMatrixRefraction = zC
              }
            },
            metadata: bC
          }, sC, TC), bC && Object.defineProperty(CC, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: bC
          })
        })(), CC
      })(),
      AC = !1;

    function xC(CC, zC, ZC) {
      let QC = "";
      for (const wC of CC) QC += wC;
      return new RC(QC, zC, null, ZC, CC)
    }

    function JC(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        QC = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const wC = zC.useDelayedTextureLoading;
      zC.useDelayedTextureLoading = !1;
      const bC = new RC(CC, zC, null, !1, null, null, null, void 0, !0, ZC, QC);
      return zC.useDelayedTextureLoading = wC, bC
    }

    function IC(CC, zC, ZC) {
      const QC = WC.d.Parse((() => {
        let QC = !1;
        return CC.prefiltered && (QC = CC.prefiltered), new RC(ZC + (CC.url ?? CC.name), zC, CC.extensions, !1, CC.files || null, null, null, void 0, QC, CC.forcedExtension)
      }), CC, zC);
      if (CC.boundingBoxPosition && (QC.boundingBoxPosition = nC.r.FromArray(CC.boundingBoxPosition)), CC.boundingBoxSize && (QC.boundingBoxSize = nC.r.FromArray(CC.boundingBoxSize)), CC.animations)
        for (let wC = 0; wC < CC.animations.length; wC++) {
          const zC = CC.animations[wC],
            ZC = (0, qC.c)("BABYLON.Animation");
          ZC && QC.animations.push(ZC.Parse(zC))
        }
      return QC
    }
    AC || (AC = !0, RC.CreateFromImages = xC, RC.CreateFromPrefilteredData = JC, RC.Parse = IC, oC.h._CubeTextureParser = IC, (0, qC.d)("BABYLON.CubeTexture", RC))
  },
  40994: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => qC
    });
    var QC = ZC(38507),
      wC = ZC(40303),
      bC = ZC(39747),
      nC = ZC(39663),
      fC = ZC(39650);
    let oC = !1;
    class qC extends wC.h {
      constructor(CC, zC, ZC) {
        let QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          qC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          FC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5,
          WC = arguments.length > 6 ? arguments[6] : void 0;
        const NC = !ZC || ZC._isScene;
        super(null, NC ? ZC : ZC?.sS, NC ? !QC : ZC, WC, qC, void 0, void 0, void 0, void 0, FC), oC || (oC = !0, nC.ThinEngine.prototype.createDynamicTexture = function(CC, zC, ZC, QC) {
          const wC = new fC.c(this, 4);
          return wC.baseWidth = CC, wC.baseHeight = zC, ZC && (CC = this.needPOTTextures ? (0, bC.e)(CC, this._caps.maxTextureSize) : CC, zC = this.needPOTTextures ? (0, bC.e)(zC, this._caps.maxTextureSize) : zC), wC.width = CC, wC.height = zC, wC.isReady = !1, wC.generateMipMaps = ZC, wC.samplingMode = QC, this.updateTextureSamplingMode(QC, wC), this._internalTexturesCache.push(wC), wC
        }, nC.ThinEngine.prototype.updateDynamicTexture = function(CC, zC, ZC) {
          let QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            wC = arguments.length > 4 ? arguments[4] : void 0,
            bC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
          if (!CC) return;
          const nC = this._gl,
            fC = nC.TEXTURE_2D,
            oC = this._bindTextureDirectly(fC, CC, !0, bC);
          this._unpackFlipY(void 0 === ZC ? CC.invertY : ZC), QC && nC.pixelStorei(nC.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
          const qC = this._getWebGLTextureType(CC.type),
            FC = this._getInternalFormat(wC || CC.format),
            WC = this._getRGBABufferInternalSizedFormat(CC.type, FC);
          nC.texImage2D(fC, 0, WC, FC, qC, zC), CC.generateMipMaps && nC.generateMipmap(fC), oC || this._bindTextureDirectly(fC, null), QC && nC.pixelStorei(nC.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), wC && (CC.format = wC), CC._dynamicTextureSource = zC, CC._premulAlpha = QC, CC.invertY = ZC || !1, CC.isReady = !0
        }), this.name = CC, this.wrapU = wC.h.CLAMP_ADDRESSMODE, this.wrapV = wC.h.CLAMP_ADDRESSMODE, this._generateMipMaps = QC;
        const MC = this._getEngine();
        if (!MC) return;
        if (zC.getContext) this._canvas = zC, this._ownCanvas = !1, this._texture = MC.createDynamicTexture(this._canvas.width, this._canvas.height, QC, qC);
        else {
          this._canvas = MC.createCanvas(1, 1), this._ownCanvas = !0;
          const CC = zC;
          CC.width || 0 === CC.width ? this._texture = MC.createDynamicTexture(CC.width, CC.height, QC, qC) : this._texture = MC.createDynamicTexture(zC, zC, QC, qC)
        }
        const gC = this.getSize();
        this._canvas.width !== gC.width && (this._canvas.width = gC.width), this._canvas.height !== gC.height && (this._canvas.height = gC.height), this._context = this._canvas.getContext("2d")
      }
      getClassName() {
        return "DynamicTexture"
      }
      get canRescale() {
        return !0
      }
      _recreate(CC) {
        this._canvas.width = CC.width, this._canvas.height = CC.height, this.releaseInternalTexture(), this._texture = this._getEngine().createDynamicTexture(CC.width, CC.height, this._generateMipMaps, this.samplingMode)
      }
      scale(CC) {
        const zC = this.getSize();
        zC.width *= CC, zC.height *= CC, this._recreate(zC)
      }
      scaleTo(CC, zC) {
        const ZC = this.getSize();
        ZC.width = CC, ZC.height = zC, this._recreate(ZC)
      }
      getContext() {
        return this._context
      }
      clear(CC) {
        const zC = this.getSize();
        CC && (this._context.fillStyle = CC), this._context.clearRect(0, 0, zC.width, zC.height)
      }
      update(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._texture && this._getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === CC || CC, zC, this._format || void 0, void 0, ZC)
      }
      drawText(CC, zC, ZC, QC, wC, bC, nC) {
        let fC = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const oC = this.getSize();
        if (bC && (this._context.fillStyle = bC, this._context.fillRect(0, 0, oC.width, oC.height)), this._context.font = QC, null === zC || void 0 === zC) {
          const ZC = this._context.measureText(CC);
          zC = (oC.width - ZC.width) / 2
        }
        if (null === ZC || void 0 === ZC) {
          const CC = parseInt(QC.replace(/\D/g, ""));
          ZC = oC.height / 2 + CC / 3.65
        }
        this._context.fillStyle = wC || "", this._context.fillText(CC, zC, ZC), fC && this.update(nC)
      }
      dispose() {
        super.dispose(), this._ownCanvas && this._canvas?.remove?.(), this._canvas = null, this._context = null
      }
      clone() {
        const CC = this.Km();
        if (!CC) return this;
        const zC = this.getSize(),
          ZC = new qC(this.name, zC, CC, this._generateMipMaps);
        return ZC.hasAlpha = this.hasAlpha, ZC.level = this.level, ZC.wrapU = this.wrapU, ZC.wrapV = this.wrapV, ZC
      }
      serialize() {
        const CC = this.Km();
        CC && !CC.isReady() && QC.c.Warn("The scene must be ready before serializing the dynamic texture");
        const zC = super.serialize();
        return qC._IsCanvasElement(this._canvas) && (zC.base64String = this._canvas.toDataURL()), zC.invertY = this._invertY, zC.samplingMode = this.samplingMode, zC
      }
      static _IsCanvasElement(CC) {
        return void 0 !== CC.toDataURL
      }
      _rebuild() {
        this.update()
      }
    }
  },
  40977: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => wC
    });
    var QC = ZC(40303);
    class wC extends QC.h {
      get depth() {
        return this._depth
      }
      constructor(CC, zC, ZC, wC, bC, nC) {
        let fC = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          oC = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          qC = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : QC.h.TRILINEAR_SAMPLINGMODE,
          FC = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          WC = arguments.length > 10 ? arguments[10] : void 0,
          NC = arguments.length > 11 ? arguments[11] : void 0;
        super(null, nC, !fC, oC), this.format = bC, this._texture = nC.mg().createRawTexture2DArray(CC, zC, ZC, wC, bC, fC, oC, qC, null, FC, WC ?? 0, NC), this._depth = wC, this.is2DArray = !0
      }
      update(CC) {
        this.updateMipLevel(CC, 0)
      }
      updateMipLevel(CC, zC) {
        this._texture && this._getEngine().updateRawTexture2DArray(this._texture, CC, this._texture.format, this._texture.invertY, null, this._texture.type, zC)
      }
      static CreateRGBATexture(CC, zC, ZC, QC, bC) {
        return new wC(CC, zC, ZC, QC, 5, bC, !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0)
      }
    }
  },
  40970: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => QC.c
    });
    var QC = ZC(40188);
    (0, QC.d)()
  },
  39902: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => QC.g
    });
    var QC = ZC(39910);
    (0, QC.e)()
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);