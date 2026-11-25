export const id = 261;
export const ids = [261];
export const modules = {
  40291: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => GB,
      f: () => vB
    });
    var TB = ZB(38718),
      JB = ZB(40085),
      oB = ZB(40269),
      GB = {};
    class vB {
      constructor(BB) {
        this.attachedToElement = !1, this.attached = {}, this.camera = BB, this.checkInputs = () => {}
      }
      add(BB) {
        const IB = BB.getSimpleName();
        this.attached[IB] ? TB.d.Warn("camera input of type " + IB + " already exists on camera") : (this.attached[IB] = BB, BB.camera = this.camera, BB.checkInputs && (this.checkInputs = this._addCheckInputs(BB.checkInputs.bind(BB))), this.attachedToElement && BB.attachControl(this.noPreventDefault))
      }
      remove(BB) {
        for (const IB in this.attached) {
          const ZB = this.attached[IB];
          if (ZB === BB) return ZB.detachControl(), ZB.camera = null, delete this.attached[IB], void this.rebuildInputCheck()
        }
      }
      removeByType(BB) {
        for (const IB in this.attached) {
          const ZB = this.attached[IB];
          ZB.getClassName() === BB && (ZB.detachControl(), ZB.camera = null, delete this.attached[IB], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(BB) {
        const IB = this.checkInputs;
        return () => {
          IB(), BB()
        }
      }
      attachInput(BB) {
        this.attachedToElement && BB.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          BB = !oB.c.ForceAttachControlToAlwaysPreventDefault && BB, this.attachedToElement = !0, this.noPreventDefault = BB;
          for (const IB in this.attached) this.attached[IB].attachControl(BB)
        }
      }
      detachElement() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const IB in this.attached) this.attached[IB].detachControl(), BB && (this.attached[IB].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const BB in this.attached) {
          const IB = this.attached[BB];
          IB.checkInputs && (this.checkInputs = this._addCheckInputs(IB.checkInputs.bind(IB)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(BB) {
        const IB = {};
        for (const ZB in this.attached) {
          const BB = this.attached[ZB],
            TB = JB.b.Serialize(BB);
          IB[BB.getClassName()] = TB
        }
        BB.inputsmgr = IB
      }
      parse(BB) {
        const IB = BB.inputsmgr;
        if (IB) {
          this.clear();
          for (const BB in IB) {
            const ZB = GB[BB];
            if (ZB) {
              const TB = IB[BB],
                oB = JB.b.Parse((() => new ZB), TB, null);
              this.add(oB)
            }
          }
        } else
          for (const ZB in this.attached) {
            const IB = GB[this.attached[ZB].getClassName()];
            if (IB) {
              const TB = JB.b.Parse((() => new IB), BB, null);
              this.remove(this.attached[ZB]), this.add(TB)
            }
          }
      }
    }
  },
  41162: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => WB
    });
    var TB = ZB(40061),
      JB = ZB(40065),
      oB = ZB(39943),
      GB = ZB(37120),
      vB = ZB(40052),
      kB = ZB(40521),
      cB = ZB(37170),
      nB = ZB(37153),
      hB = ZB(40085),
      zB = ZB(39885),
      FB = ZB(38718),
      NB = ZB(40110),
      gB = ZB(37964),
      qB = ZB(40141);
    var yB = ZB(39951);
    let UB = !1;
    let WB = (() => {
        var BB;
        let IB, ZB, cB, WB, dB, CB, QB, sB, wB, OB = vB.e,
          YB = [],
          iB = [],
          pB = [],
          aB = [],
          HB = [],
          MB = [],
          jB = [],
          PB = [],
          RB = [],
          rB = [],
          mB = [],
          XB = [],
          LB = [],
          eB = [],
          uB = [];
        return BB = class extends OB {
          set boundingBoxSize(BB) {
            if (this._boundingBoxSize && this._boundingBoxSize.equals(BB)) return;
            this._boundingBoxSize = BB;
            const IB = this.JR();
            IB && IB.markAllMaterialsAsDirty(1)
          }
          get boundingBoxSize() {
            return this._boundingBoxSize
          }
          set rotationY(BB) {
            this._rotationY = BB, this.setReflectionTextureMatrix(GB.b.RotationY(this._rotationY))
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
          constructor(BB, IB) {
            let ZB, JB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              oB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              vB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              cB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              hB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              WB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 5,
              dB = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              CB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              QB = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
              sB = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : .8,
              wB = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 0,
              OB = arguments.length > 13 ? arguments[13] : void 0,
              fB = arguments.length > 14 ? arguments[14] : void 0;
            super(IB), this._delayedOnLoad = (0, TB.l)(this, YB), this.onLoadObservable = new nB.b, this.url = (0, TB.l)(this, iB, void 0), this.boundingBoxPosition = ((0, TB.l)(this, pB), (0, TB.l)(this, aB, GB.s.Zero())), this._boundingBoxSize = (0, TB.l)(this, HB), this._rotationY = 0, this._files = (0, TB.l)(this, MB, null), this._forcedExtension = ((0, TB.l)(this, jB), (0, TB.l)(this, PB, null)), this._extensions = ((0, TB.l)(this, RB), (0, TB.l)(this, rB, null)), this._textureMatrix = ((0, TB.l)(this, mB), (0, TB.l)(this, XB, void 0)), this._textureMatrixRefraction = ((0, TB.l)(this, LB), (0, TB.l)(this, eB, new GB.b)), this._format = (0, TB.l)(this, uB), this._buffer = null, UB || (UB = !0, yB.c.prototype._partialLoadFile = function(BB, IB, ZB, TB) {
              let JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
              this._loadFile(BB, (BB => {
                ZB[IB] = BB, ZB._internalCount++, 6 === ZB._internalCount && TB(ZB)
              }), void 0, void 0, !0, ((BB, IB) => {
                JB && BB && JB(BB.status + " " + BB.statusText, IB)
              }))
            }, yB.c.prototype._cascadeLoadFiles = function(BB, IB, ZB) {
              let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
              const JB = [];
              JB._internalCount = 0;
              for (let oB = 0; oB < 6; oB++) this._partialLoadFile(ZB[oB], oB, JB, IB, TB)
            }, yB.c.prototype._cascadeLoadImgs = function(BB, IB, ZB, TB) {
              let JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                oB = arguments.length > 5 ? arguments[5] : void 0;
              const GB = [];
              GB._internalCount = 0;
              for (let vB = 0; vB < 6; vB++) this._partialLoadImg(TB[vB], vB, GB, BB, IB, ZB, JB, oB)
            }, yB.c.prototype._partialLoadImg = function(BB, IB, ZB, TB, JB, oB) {
              let GB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                vB = arguments.length > 7 ? arguments[7] : void 0;
              const kB = (0, gB.d)();
              (0, NB.l)(BB, (BB => {
                ZB[IB] = BB, ZB._internalCount++, TB && TB.removePendingData(kB), 6 === ZB._internalCount && oB && oB(JB, ZB)
              }), ((BB, IB) => {
                TB && TB.removePendingData(kB), GB && GB(BB, IB)
              }), TB ? TB.offlineProvider : null, vB), TB && TB.addPendingData(kB)
            }, yB.c.prototype.createCubeTextureBase = function(BB, IB, ZB, TB) {
              let JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                oB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                GB = arguments.length > 6 ? arguments[6] : void 0,
                vB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                kB = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
                cB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
                nB = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
                hB = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
                NB = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
                gB = arguments.length > 13 && void 0 !== arguments[13] ? arguments[13] : null,
                yB = arguments.length > 14 && void 0 !== arguments[14] && arguments[14],
                UB = arguments.length > 15 && void 0 !== arguments[15] ? arguments[15] : null;
              const WB = hB || new zB.b(this, 7);
              WB.isCube = !0, WB.url = BB, WB.generateMipMaps = !TB, WB._lodGenerationScale = cB, WB._lodGenerationOffset = nB, WB._useSRGBBuffer = !!yB && this._caps.supportSRGBBuffers && (this.version > 1 || this.isWebGPU || !!TB), WB !== hB && (WB.label = BB.substring(0, 60)), this._doNotHandleContextLost || (WB._extension = vB, WB._files = ZB, WB._buffer = UB);
              const dB = BB;
              this._transformTextureUrl && !hB && (BB = this._transformTextureUrl(BB));
              const CB = vB ?? function(BB) {
                  const IB = BB.split("?")[0],
                    ZB = IB.lastIndexOf(".");
                  return ZB > -1 ? IB.substring(ZB).toLowerCase() : ""
                }(BB),
                QB = (0, qB.b)(CB),
                sB = (BB, IB) => {
                  WB.dispose(), oB ? oB(BB, IB) : BB && FB.d.Warn(BB)
                },
                wB = (oB, hB) => {
                  BB === dB ? oB && sB(oB.status + " " + oB.statusText, hB) : (FB.d.Warn(`Failed to load ${BB}, falling back to the ${dB}`), this.createCubeTextureBase(dB, IB, ZB, !!TB, JB, sB, GB, vB, kB, cB, nB, WB, NB, gB, yB, UB))
                };
              if (QB) QB.then((TB => {
                const oB = BB => {
                  NB && NB(WB, BB), TB.loadCubeData(BB, WB, kB, JB, ((BB, IB) => {
                    sB(BB, IB)
                  }))
                };
                UB ? oB(UB) : ZB && 6 === ZB.length ? TB.supportCascades ? this._cascadeLoadFiles(IB, (BB => oB(BB.map((BB => new Uint8Array(BB))))), ZB, sB) : sB("Textures type does not support cascades.") : this._loadFile(BB, (BB => oB(new Uint8Array(BB))), void 0, IB ? IB.offlineProvider || null : void 0, !0, wB)
              }));
              else {
                if (!ZB || 0 === ZB.length) throw new Error("Cannot load cubemap because files were not defined, or the correct loader was not found.");
                this._cascadeLoadImgs(IB, WB, ((BB, IB) => {
                  gB && gB(BB, IB)
                }), ZB, sB)
              }
              return this._internalTexturesCache.push(WB), WB
            }), this.name = BB, this.url = BB, this._noMipmap = oB, this.hasAlpha = !1, this.isCube = !0, this._textureMatrix = GB.b.Identity(), this.coordinatesMode = kB.e.CUBIC_MODE;
            let lB = null;
            null === JB || Array.isArray(JB) ? (this._noMipmap = oB, this._format = WB, this._createPolynomials = QB, ZB = JB, this._loaderOptions = OB, this._useSRGBBuffer = fB, this._lodScale = sB, this._lodOffset = wB) : (ZB = JB.extensions ?? null, this._noMipmap = JB.noMipmap ?? !1, vB = JB.files ?? null, lB = JB.buffer ?? null, this._format = JB.format ?? 5, dB = JB.prefiltered ?? !1, CB = JB.forcedExtension ?? null, this._createPolynomials = JB.createPolynomials ?? !1, this._lodScale = JB.lodScale ?? .8, this._lodOffset = JB.lodOffset ?? 0, this._loaderOptions = JB.loaderOptions, this._useSRGBBuffer = JB.useSRGBBuffer, this._sphericalPolynomialTargetSize = JB.sphericalPolynomialTargetSize ?? 0, cB = JB.onLoad ?? null, hB = JB.onError ?? null), (BB || vB) && this.updateURL(BB, CB, cB, dB, hB, ZB, this.JR()?.useDelayedTextureLoading, vB, lB)
          }
          getClassName() {
            return "CubeTexture"
          }
          updateURL(BB) {
            let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              TB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              oB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              GB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
              vB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              kB = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
            this.name && !this.name.startsWith("data:") || (this.name = BB), this.url = BB, IB && (this._forcedExtension = IB);
            const cB = BB.lastIndexOf("."),
              nB = IB || (cB > -1 ? BB.substring(cB).toLowerCase() : ""),
              hB = 0 === nB.indexOf(".dds"),
              zB = 0 === nB.indexOf(".env"),
              FB = 0 === nB.indexOf(".basis");
            if (zB ? (this.gammaSpace = !1, this._prefiltered = !1, this.anisotropicFilteringLevel = 1) : (this._prefiltered = TB, TB && (this.gammaSpace = !1, this.anisotropicFilteringLevel = 1)), vB) this._files = vB;
            else if (FB || zB || hB || oB || (oB = ["_px.jpg", "_py.jpg", "_pz.jpg", "_nx.jpg", "_ny.jpg", "_nz.jpg"]), this._files = this._files || [], this._files.length = 0, oB) {
              for (let IB = 0; IB < oB.length; IB++) this._files.push(BB + oB[IB]);
              this._extensions = oB
            }
            this._buffer = kB, GB ? (this.delayLoadState = 4, this._delayedOnLoad = ZB, this._delayedOnError = JB) : this._loadTexture(ZB, JB)
          }
          delayLoad(BB) {
            4 === this.delayLoadState && (BB && (this._forcedExtension = BB), this.delayLoadState = 1, this._loadTexture(this._delayedOnLoad, this._delayedOnError))
          }
          getReflectionTextureMatrix() {
            return this._textureMatrix
          }
          setReflectionTextureMatrix(BB) {
            if (BB.updateFlag === this._textureMatrix.updateFlag) return;
            if (BB.isIdentity() !== this._textureMatrix.isIdentity() && this.JR()?.markAllMaterialsAsDirty(1, (BB => -1 !== BB.getActiveTextures().indexOf(this))), this._textureMatrix = BB, !this.JR()?.useRightHandedSystem) return;
            const IB = GB.m.rN[0],
              ZB = GB.m.Quaternion[0],
              TB = GB.m.rN[1];
            this._textureMatrix.decompose(IB, ZB, TB), ZB.z *= -1, ZB.w *= -1, GB.b.ComposeToRef(IB, ZB, TB, this._textureMatrixRefraction)
          }
          getRefractionTextureMatrix() {
            return this.JR()?.useRightHandedSystem ? this._textureMatrixRefraction : this._textureMatrix
          }
          _loadTexture() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            const ZB = this.JR(),
              TB = this._texture;
            this._texture = this._getFromCache(this.url, this._noMipmap, void 0, void 0, this._useSRGBBuffer, this.isCube);
            const JB = () => {
                this.onLoadObservable.notifyObservers(this), TB && (TB.dispose(), this.JR()?.markAllMaterialsAsDirty(1)), BB && BB()
              },
              GB = (BB, ZB) => {
                this._loadingError = !0, this._errorObject = {
                  message: BB,
                  exception: ZB
                }, IB && IB(BB, ZB), kB.e.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            this._texture ? this._texture.isReady ? oB.b.SetImmediate((() => JB())) : this._texture.onLoadedObservable.add((() => JB())) : (this._prefiltered ? this._texture = this._getEngine().createPrefilteredCubeTexture(this.url, ZB, this._lodScale, this._lodOffset, BB, GB, this._format, this._forcedExtension, this._createPolynomials, this._buffer) : this._texture = this._getEngine().createCubeTexture(this.url, ZB, this._files, this._noMipmap, BB, GB, this._format, this._forcedExtension, !1, this._lodScale, this._lodOffset, null, this._loaderOptions, !!this._useSRGBBuffer, this._buffer), this._texture?.onLoadedObservable.add((() => this.onLoadObservable.notifyObservers(this))))
          }
          clone() {
            let IB = 0;
            const ZB = this.irradianceTexture,
              TB = hB.b.Clone((() => {
                const ZB = new BB(this.url, this.JR() || this._getEngine(), this._extensions, this._noMipmap, this._files);
                return IB = ZB.uniqueId, ZB
              }), this);
            return TB.uniqueId = IB, ZB && !this.irradianceTexture && (this.irradianceTexture = ZB), TB
          }
        }, (() => {
          const oB = "function" === typeof Symbol && Symbol.metadata ? Object.create(OB[Symbol.metadata] ?? null) : void 0;
          IB = [(0, JB.C)()], ZB = [(0, JB.A)()], cB = [(0, JB.A)()], WB = [(0, JB.C)("rotationY")], dB = [(0, JB.C)("files")], CB = [(0, JB.C)("forcedExtension")], QB = [(0, JB.C)("extensions")], sB = [(0, JB.p)("textureMatrix")], wB = [(0, JB.p)("textureMatrixRefraction")], (0, TB.j)(BB, null, cB, {
            kind: "getter",
            name: "boundingBoxSize",
            static: !1,
            private: !1,
            access: {
              has: BB => "boundingBoxSize" in BB,
              get: BB => BB.boundingBoxSize
            },
            metadata: oB
          }, null, YB), (0, TB.j)(BB, null, WB, {
            kind: "setter",
            name: "rotationY",
            static: !1,
            private: !1,
            access: {
              has: BB => "rotationY" in BB,
              set: (BB, IB) => {
                BB.rotationY = IB
              }
            },
            metadata: oB
          }, null, YB), (0, TB.j)(null, null, IB, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: BB => "url" in BB,
              get: BB => BB.url,
              set: (BB, IB) => {
                BB.url = IB
              }
            },
            metadata: oB
          }, iB, pB), (0, TB.j)(null, null, ZB, {
            kind: "field",
            name: "boundingBoxPosition",
            static: !1,
            private: !1,
            access: {
              has: BB => "boundingBoxPosition" in BB,
              get: BB => BB.boundingBoxPosition,
              set: (BB, IB) => {
                BB.boundingBoxPosition = IB
              }
            },
            metadata: oB
          }, aB, HB), (0, TB.j)(null, null, dB, {
            kind: "field",
            name: "_files",
            static: !1,
            private: !1,
            access: {
              has: BB => "_files" in BB,
              get: BB => BB._files,
              set: (BB, IB) => {
                BB._files = IB
              }
            },
            metadata: oB
          }, MB, jB), (0, TB.j)(null, null, CB, {
            kind: "field",
            name: "_forcedExtension",
            static: !1,
            private: !1,
            access: {
              has: BB => "_forcedExtension" in BB,
              get: BB => BB._forcedExtension,
              set: (BB, IB) => {
                BB._forcedExtension = IB
              }
            },
            metadata: oB
          }, PB, RB), (0, TB.j)(null, null, QB, {
            kind: "field",
            name: "_extensions",
            static: !1,
            private: !1,
            access: {
              has: BB => "_extensions" in BB,
              get: BB => BB._extensions,
              set: (BB, IB) => {
                BB._extensions = IB
              }
            },
            metadata: oB
          }, rB, mB), (0, TB.j)(null, null, sB, {
            kind: "field",
            name: "_textureMatrix",
            static: !1,
            private: !1,
            access: {
              has: BB => "_textureMatrix" in BB,
              get: BB => BB._textureMatrix,
              set: (BB, IB) => {
                BB._textureMatrix = IB
              }
            },
            metadata: oB
          }, XB, LB), (0, TB.j)(null, null, wB, {
            kind: "field",
            name: "_textureMatrixRefraction",
            static: !1,
            private: !1,
            access: {
              has: BB => "_textureMatrixRefraction" in BB,
              get: BB => BB._textureMatrixRefraction,
              set: (BB, IB) => {
                BB._textureMatrixRefraction = IB
              }
            },
            metadata: oB
          }, eB, uB), oB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: oB
          })
        })(), BB
      })(),
      dB = !1;

    function CB(BB, IB, ZB) {
      let TB = "";
      for (const JB of BB) TB += JB;
      return new WB(TB, IB, null, ZB, BB)
    }

    function QB(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        TB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const JB = IB.useDelayedTextureLoading;
      IB.useDelayedTextureLoading = !1;
      const oB = new WB(BB, IB, null, !1, null, null, null, void 0, !0, ZB, TB);
      return IB.useDelayedTextureLoading = JB, oB
    }

    function sB(BB, IB, ZB) {
      const TB = hB.b.Parse((() => {
        let TB = !1;
        return BB.prefiltered && (TB = BB.prefiltered), new WB(ZB + (BB.url ?? BB.name), IB, BB.extensions, !1, BB.files || null, null, null, void 0, TB, BB.forcedExtension)
      }), BB, IB);
      if (BB.boundingBoxPosition && (TB.boundingBoxPosition = GB.s.FromArray(BB.boundingBoxPosition)), BB.boundingBoxSize && (TB.boundingBoxSize = GB.s.FromArray(BB.boundingBoxSize)), BB.animations)
        for (let JB = 0; JB < BB.animations.length; JB++) {
          const IB = BB.animations[JB],
            ZB = (0, cB.e)("BABYLON.Animation");
          ZB && TB.animations.push(ZB.Parse(IB))
        }
      return TB
    }
    dB || (dB = !0, WB.CreateFromImages = CB, WB.CreateFromPrefilteredData = QB, WB.Parse = sB, kB.e._CubeTextureParser = sB, (0, cB.i)("BABYLON.CubeTexture", WB))
  },
  41203: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => cB
    });
    var TB = ZB(38718),
      JB = ZB(40521),
      oB = ZB(39993),
      GB = ZB(39895),
      vB = ZB(39885);
    let kB = !1;
    class cB extends JB.e {
      constructor(BB, IB, ZB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          cB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          nB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5,
          hB = arguments.length > 6 ? arguments[6] : void 0;
        const zB = !ZB || ZB._isScene;
        super(null, zB ? ZB : ZB?.lg, zB ? !TB : ZB, hB, cB, void 0, void 0, void 0, void 0, nB), kB || (kB = !0, GB.ThinEngine.prototype.createDynamicTexture = function(BB, IB, ZB, TB) {
          const JB = new vB.b(this, 4);
          return JB.baseWidth = BB, JB.baseHeight = IB, ZB && (BB = this.needPOTTextures ? (0, oB.f)(BB, this._caps.maxTextureSize) : BB, IB = this.needPOTTextures ? (0, oB.f)(IB, this._caps.maxTextureSize) : IB), JB.width = BB, JB.height = IB, JB.isReady = !1, JB.generateMipMaps = ZB, JB.samplingMode = TB, this.updateTextureSamplingMode(TB, JB), this._internalTexturesCache.push(JB), JB
        }, GB.ThinEngine.prototype.updateDynamicTexture = function(BB, IB, ZB) {
          let TB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            JB = arguments.length > 4 ? arguments[4] : void 0,
            oB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
          if (!BB) return;
          const GB = this._gl,
            vB = GB.TEXTURE_2D,
            kB = this._bindTextureDirectly(vB, BB, !0, oB);
          this._unpackFlipY(void 0 === ZB ? BB.invertY : ZB), TB && GB.pixelStorei(GB.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
          const cB = this._getWebGLTextureType(BB.type),
            nB = this._getInternalFormat(JB || BB.format),
            hB = this._getRGBABufferInternalSizedFormat(BB.type, nB);
          GB.texImage2D(vB, 0, hB, nB, cB, IB), BB.generateMipMaps && GB.generateMipmap(vB), kB || this._bindTextureDirectly(vB, null), TB && GB.pixelStorei(GB.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), JB && (BB.format = JB), BB._dynamicTextureSource = IB, BB._premulAlpha = TB, BB.invertY = ZB || !1, BB.isReady = !0
        }), this.name = BB, this.wrapU = JB.e.CLAMP_ADDRESSMODE, this.wrapV = JB.e.CLAMP_ADDRESSMODE, this._generateMipMaps = TB;
        const FB = this._getEngine();
        if (!FB) return;
        if (IB.getContext) this._canvas = IB, this._ownCanvas = !1, this._texture = FB.createDynamicTexture(this._canvas.width, this._canvas.height, TB, cB);
        else {
          this._canvas = FB.createCanvas(1, 1), this._ownCanvas = !0;
          const BB = IB;
          BB.width || 0 === BB.width ? this._texture = FB.createDynamicTexture(BB.width, BB.height, TB, cB) : this._texture = FB.createDynamicTexture(IB, IB, TB, cB)
        }
        const NB = this.getSize();
        this._canvas.width !== NB.width && (this._canvas.width = NB.width), this._canvas.height !== NB.height && (this._canvas.height = NB.height), this._context = this._canvas.getContext("2d")
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
        const IB = this.getSize();
        IB.width *= BB, IB.height *= BB, this._recreate(IB)
      }
      scaleTo(BB, IB) {
        const ZB = this.getSize();
        ZB.width = BB, ZB.height = IB, this._recreate(ZB)
      }
      getContext() {
        return this._context
      }
      clear(BB) {
        const IB = this.getSize();
        BB && (this._context.fillStyle = BB), this._context.clearRect(0, 0, IB.width, IB.height)
      }
      update(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._texture && this._getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === BB || BB, IB, this._format || void 0, void 0, ZB)
      }
      drawText(BB, IB, ZB, TB, JB, oB, GB) {
        let vB = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const kB = this.getSize();
        if (oB && (this._context.fillStyle = oB, this._context.fillRect(0, 0, kB.width, kB.height)), this._context.font = TB, null === IB || void 0 === IB) {
          const ZB = this._context.measureText(BB);
          IB = (kB.width - ZB.width) / 2
        }
        if (null === ZB || void 0 === ZB) {
          const BB = parseInt(TB.replace(/\D/g, ""));
          ZB = kB.height / 2 + BB / 3.65
        }
        this._context.fillStyle = JB || "", this._context.fillText(BB, IB, ZB), vB && this.update(GB)
      }
      dispose() {
        super.dispose(), this._ownCanvas && this._canvas?.remove?.(), this._canvas = null, this._context = null
      }
      clone() {
        const BB = this.JR();
        if (!BB) return this;
        const IB = this.getSize(),
          ZB = new cB(this.name, IB, BB, this._generateMipMaps);
        return ZB.hasAlpha = this.hasAlpha, ZB.level = this.level, ZB.wrapU = this.wrapU, ZB.wrapV = this.wrapV, ZB
      }
      serialize() {
        const BB = this.JR();
        BB && !BB.isReady() && TB.d.Warn("The scene must be ready before serializing the dynamic texture");
        const IB = super.serialize();
        return cB._IsCanvasElement(this._canvas) && (IB.base64String = this._canvas.toDataURL()), IB.invertY = this._invertY, IB.samplingMode = this.samplingMode, IB
      }
      static _IsCanvasElement(BB) {
        return void 0 !== BB.toDataURL
      }
      _rebuild() {
        this.update()
      }
    }
  },
  41179: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => JB
    });
    var TB = ZB(40521);
    class JB extends TB.e {
      get depth() {
        return this._depth
      }
      constructor(BB, IB, ZB, JB, oB, GB) {
        let vB = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          kB = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          cB = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : TB.e.TRILINEAR_SAMPLINGMODE,
          nB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          hB = arguments.length > 10 ? arguments[10] : void 0,
          zB = arguments.length > 11 ? arguments[11] : void 0;
        super(null, GB, !vB, kB), this.format = oB, this._texture = GB.PN().createRawTexture2DArray(BB, IB, ZB, JB, oB, vB, kB, cB, null, nB, hB ?? 0, zB), this._depth = JB, this.is2DArray = !0
      }
      update(BB) {
        this.updateMipLevel(BB, 0)
      }
      updateMipLevel(BB, IB) {
        this._texture && this._getEngine().updateRawTexture2DArray(this._texture, BB, this._texture.format, this._texture.invertY, null, this._texture.type, IB)
      }
      static CreateRGBATexture(BB, IB, ZB, TB, oB) {
        return new JB(BB, IB, ZB, TB, 5, oB, !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0)
      }
    }
  },
  41176: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => TB.e
    });
    var TB = ZB(40408);
    (0, TB.h)()
  },
  40143: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => TB.e
    });
    var TB = ZB(40148);
    (0, TB.b)()
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);