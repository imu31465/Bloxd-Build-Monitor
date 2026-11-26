export const id = 286;
export const ids = [286];
export const modules = {
  41237: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => oB,
      e: () => jB
    });
    var YB = GB(39366),
      DB = GB(41022),
      QB = GB(41217),
      oB = {};
    class jB {
      constructor(BB) {
        this.attachedToElement = !1, this.attached = {}, this.camera = BB, this.checkInputs = () => {}
      }
      add(BB) {
        const OB = BB.getSimpleName();
        this.attached[OB] ? YB.b.Warn("camera input of type " + OB + " already exists on camera") : (this.attached[OB] = BB, BB.camera = this.camera, BB.checkInputs && (this.checkInputs = this._addCheckInputs(BB.checkInputs.bind(BB))), this.attachedToElement && BB.attachControl(this.noPreventDefault))
      }
      remove(BB) {
        for (const OB in this.attached) {
          const GB = this.attached[OB];
          if (GB === BB) return GB.detachControl(), GB.camera = null, delete this.attached[OB], void this.rebuildInputCheck()
        }
      }
      removeByType(BB) {
        for (const OB in this.attached) {
          const GB = this.attached[OB];
          GB.getClassName() === BB && (GB.detachControl(), GB.camera = null, delete this.attached[OB], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(BB) {
        const OB = this.checkInputs;
        return () => {
          OB(), BB()
        }
      }
      attachInput(BB) {
        this.attachedToElement && BB.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          BB = !QB.e.ForceAttachControlToAlwaysPreventDefault && BB, this.attachedToElement = !0, this.noPreventDefault = BB;
          for (const OB in this.attached) this.attached[OB].attachControl(BB)
        }
      }
      detachElement() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const OB in this.attached) this.attached[OB].detachControl(), BB && (this.attached[OB].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const BB in this.attached) {
          const OB = this.attached[BB];
          OB.checkInputs && (this.checkInputs = this._addCheckInputs(OB.checkInputs.bind(OB)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(BB) {
        const OB = {};
        for (const GB in this.attached) {
          const BB = this.attached[GB],
            YB = DB.d.Serialize(BB);
          OB[BB.getClassName()] = YB
        }
        BB.inputsmgr = OB
      }
      parse(BB) {
        const OB = BB.inputsmgr;
        if (OB) {
          this.clear();
          for (const BB in OB) {
            const GB = oB[BB];
            if (GB) {
              const YB = OB[BB],
                QB = DB.d.Parse((() => new GB), YB, null);
              this.add(QB)
            }
          }
        } else
          for (const GB in this.attached) {
            const OB = oB[this.attached[GB].getClassName()];
            if (OB) {
              const YB = DB.d.Parse((() => new OB), BB, null);
              this.remove(this.attached[GB]), this.add(YB)
            }
          }
      }
    }
  },
  42131: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => WB
    });
    var YB = GB(40998),
      DB = GB(41004),
      QB = GB(40899),
      oB = GB(37778),
      jB = GB(40992),
      yB = GB(41470),
      JB = GB(37823),
      MB = GB(37802),
      PB = GB(41022),
      zB = GB(40837),
      lB = GB(39366),
      pB = GB(41035),
      qB = GB(38589),
      ZB = GB(41081);
    var NB = GB(40905);
    let RB = !1;
    let WB = (() => {
        var BB;
        let OB, GB, JB, WB, AB, VB, SB, nB, UB, fB = jB.d,
          kB = [],
          dB = [],
          KB = [],
          uB = [],
          mB = [],
          IB = [],
          FB = [],
          iB = [],
          LB = [],
          gB = [],
          rB = [],
          XB = [],
          wB = [],
          EB = [],
          cB = [];
        return BB = class extends fB {
          set boundingBoxSize(BB) {
            if (this._boundingBoxSize && this._boundingBoxSize.equals(BB)) return;
            this._boundingBoxSize = BB;
            const OB = this.JF();
            OB && OB.markAllMaterialsAsDirty(1)
          }
          get boundingBoxSize() {
            return this._boundingBoxSize
          }
          set rotationY(BB) {
            this._rotationY = BB, this.setReflectionTextureMatrix(oB.d.RotationY(this._rotationY))
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
          constructor(BB, OB) {
            let GB, DB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              QB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              jB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              JB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              PB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              WB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 5,
              AB = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              VB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              SB = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
              nB = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : .8,
              UB = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 0,
              fB = arguments.length > 13 ? arguments[13] : void 0,
              hB = arguments.length > 14 ? arguments[14] : void 0;
            super(OB), this._delayedOnLoad = (0, YB.j)(this, kB), this.onLoadObservable = new MB.b, this.url = (0, YB.j)(this, dB, void 0), this.boundingBoxPosition = ((0, YB.j)(this, KB), (0, YB.j)(this, uB, oB.r.Zero())), this._boundingBoxSize = (0, YB.j)(this, mB), this._rotationY = 0, this._files = (0, YB.j)(this, IB, null), this._forcedExtension = ((0, YB.j)(this, FB), (0, YB.j)(this, iB, null)), this._extensions = ((0, YB.j)(this, LB), (0, YB.j)(this, gB, null)), this._textureMatrix = ((0, YB.j)(this, rB), (0, YB.j)(this, XB, void 0)), this._textureMatrixRefraction = ((0, YB.j)(this, wB), (0, YB.j)(this, EB, new oB.d)), this._format = (0, YB.j)(this, cB), this._buffer = null, RB || (RB = !0, NB.d.prototype._partialLoadFile = function(BB, OB, GB, YB) {
              let DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
              this._loadFile(BB, (BB => {
                GB[OB] = BB, GB._internalCount++, 6 === GB._internalCount && YB(GB)
              }), void 0, void 0, !0, ((BB, OB) => {
                DB && BB && DB(BB.status + " " + BB.statusText, OB)
              }))
            }, NB.d.prototype._cascadeLoadFiles = function(BB, OB, GB) {
              let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
              const DB = [];
              DB._internalCount = 0;
              for (let QB = 0; QB < 6; QB++) this._partialLoadFile(GB[QB], QB, DB, OB, YB)
            }, NB.d.prototype._cascadeLoadImgs = function(BB, OB, GB, YB) {
              let DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                QB = arguments.length > 5 ? arguments[5] : void 0;
              const oB = [];
              oB._internalCount = 0;
              for (let jB = 0; jB < 6; jB++) this._partialLoadImg(YB[jB], jB, oB, BB, OB, GB, DB, QB)
            }, NB.d.prototype._partialLoadImg = function(BB, OB, GB, YB, DB, QB) {
              let oB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                jB = arguments.length > 7 ? arguments[7] : void 0;
              const yB = (0, qB.e)();
              (0, pB.n)(BB, (BB => {
                GB[OB] = BB, GB._internalCount++, YB && YB.removePendingData(yB), 6 === GB._internalCount && QB && QB(DB, GB)
              }), ((BB, OB) => {
                YB && YB.removePendingData(yB), oB && oB(BB, OB)
              }), YB ? YB.offlineProvider : null, jB), YB && YB.addPendingData(yB)
            }, NB.d.prototype.createCubeTextureBase = function(BB, OB, GB, YB) {
              let DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                QB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                oB = arguments.length > 6 ? arguments[6] : void 0,
                jB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                yB = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
                JB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
                MB = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
                PB = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
                pB = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
                qB = arguments.length > 13 && void 0 !== arguments[13] ? arguments[13] : null,
                NB = arguments.length > 14 && void 0 !== arguments[14] && arguments[14],
                RB = arguments.length > 15 && void 0 !== arguments[15] ? arguments[15] : null;
              const WB = PB || new zB.b(this, 7);
              WB.isCube = !0, WB.url = BB, WB.generateMipMaps = !YB, WB._lodGenerationScale = JB, WB._lodGenerationOffset = MB, WB._useSRGBBuffer = !!NB && this._caps.supportSRGBBuffers && (this.version > 1 || this.isWebGPU || !!YB), WB !== PB && (WB.label = BB.substring(0, 60)), this._doNotHandleContextLost || (WB._extension = jB, WB._files = GB, WB._buffer = RB);
              const AB = BB;
              this._transformTextureUrl && !PB && (BB = this._transformTextureUrl(BB));
              const VB = jB ?? function(BB) {
                  const OB = BB.split("?")[0],
                    GB = OB.lastIndexOf(".");
                  return GB > -1 ? OB.substring(GB).toLowerCase() : ""
                }(BB),
                SB = (0, ZB.b)(VB),
                nB = (BB, OB) => {
                  WB.dispose(), QB ? QB(BB, OB) : BB && lB.b.Warn(BB)
                },
                UB = (QB, PB) => {
                  BB === AB ? QB && nB(QB.status + " " + QB.statusText, PB) : (lB.b.Warn(`Failed to load ${BB}, falling back to the ${AB}`), this.createCubeTextureBase(AB, OB, GB, !!YB, DB, nB, oB, jB, yB, JB, MB, WB, pB, qB, NB, RB))
                };
              if (SB) SB.then((YB => {
                const QB = BB => {
                  pB && pB(WB, BB), YB.loadCubeData(BB, WB, yB, DB, ((BB, OB) => {
                    nB(BB, OB)
                  }))
                };
                RB ? QB(RB) : GB && 6 === GB.length ? YB.supportCascades ? this._cascadeLoadFiles(OB, (BB => QB(BB.map((BB => new Uint8Array(BB))))), GB, nB) : nB("Textures type does not support cascades.") : this._loadFile(BB, (BB => QB(new Uint8Array(BB))), void 0, OB ? OB.offlineProvider || null : void 0, !0, UB)
              }));
              else {
                if (!GB || 0 === GB.length) throw new Error("Cannot load cubemap because files were not defined, or the correct loader was not found.");
                this._cascadeLoadImgs(OB, WB, ((BB, OB) => {
                  qB && qB(BB, OB)
                }), GB, nB)
              }
              return this._internalTexturesCache.push(WB), WB
            }), this.name = BB, this.url = BB, this._noMipmap = QB, this.hasAlpha = !1, this.isCube = !0, this._textureMatrix = oB.d.Identity(), this.coordinatesMode = yB.e.CUBIC_MODE;
            let aB = null;
            null === DB || Array.isArray(DB) ? (this._noMipmap = QB, this._format = WB, this._createPolynomials = SB, GB = DB, this._loaderOptions = fB, this._useSRGBBuffer = hB, this._lodScale = nB, this._lodOffset = UB) : (GB = DB.extensions ?? null, this._noMipmap = DB.noMipmap ?? !1, jB = DB.files ?? null, aB = DB.buffer ?? null, this._format = DB.format ?? 5, AB = DB.prefiltered ?? !1, VB = DB.forcedExtension ?? null, this._createPolynomials = DB.createPolynomials ?? !1, this._lodScale = DB.lodScale ?? .8, this._lodOffset = DB.lodOffset ?? 0, this._loaderOptions = DB.loaderOptions, this._useSRGBBuffer = DB.useSRGBBuffer, this._sphericalPolynomialTargetSize = DB.sphericalPolynomialTargetSize ?? 0, JB = DB.onLoad ?? null, PB = DB.onError ?? null), (BB || jB) && this.updateURL(BB, VB, JB, AB, PB, GB, this.JF()?.useDelayedTextureLoading, jB, aB)
          }
          getClassName() {
            return "CubeTexture"
          }
          updateURL(BB) {
            let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              QB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              oB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
              jB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              yB = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
            this.name && !this.name.startsWith("data:") || (this.name = BB), this.url = BB, OB && (this._forcedExtension = OB);
            const JB = BB.lastIndexOf("."),
              MB = OB || (JB > -1 ? BB.substring(JB).toLowerCase() : ""),
              PB = 0 === MB.indexOf(".dds"),
              zB = 0 === MB.indexOf(".env"),
              lB = 0 === MB.indexOf(".basis");
            if (zB ? (this.gammaSpace = !1, this._prefiltered = !1, this.anisotropicFilteringLevel = 1) : (this._prefiltered = YB, YB && (this.gammaSpace = !1, this.anisotropicFilteringLevel = 1)), jB) this._files = jB;
            else if (lB || zB || PB || QB || (QB = ["_px.jpg", "_py.jpg", "_pz.jpg", "_nx.jpg", "_ny.jpg", "_nz.jpg"]), this._files = this._files || [], this._files.length = 0, QB) {
              for (let OB = 0; OB < QB.length; OB++) this._files.push(BB + QB[OB]);
              this._extensions = QB
            }
            this._buffer = yB, oB ? (this.delayLoadState = 4, this._delayedOnLoad = GB, this._delayedOnError = DB) : this._loadTexture(GB, DB)
          }
          delayLoad(BB) {
            4 === this.delayLoadState && (BB && (this._forcedExtension = BB), this.delayLoadState = 1, this._loadTexture(this._delayedOnLoad, this._delayedOnError))
          }
          getReflectionTextureMatrix() {
            return this._textureMatrix
          }
          setReflectionTextureMatrix(BB) {
            if (BB.updateFlag === this._textureMatrix.updateFlag) return;
            if (BB.isIdentity() !== this._textureMatrix.isIdentity() && this.JF()?.markAllMaterialsAsDirty(1, (BB => -1 !== BB.getActiveTextures().indexOf(this))), this._textureMatrix = BB, !this.JF()?.useRightHandedSystem) return;
            const OB = oB.k.Xp[0],
              GB = oB.k.Quaternion[0],
              YB = oB.k.Xp[1];
            this._textureMatrix.decompose(OB, GB, YB), GB.z *= -1, GB.w *= -1, oB.d.ComposeToRef(OB, GB, YB, this._textureMatrixRefraction)
          }
          getRefractionTextureMatrix() {
            return this.JF()?.useRightHandedSystem ? this._textureMatrixRefraction : this._textureMatrix
          }
          _loadTexture() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            const GB = this.JF(),
              YB = this._texture;
            this._texture = this._getFromCache(this.url, this._noMipmap, void 0, void 0, this._useSRGBBuffer, this.isCube);
            const DB = () => {
                this.onLoadObservable.notifyObservers(this), YB && (YB.dispose(), this.JF()?.markAllMaterialsAsDirty(1)), BB && BB()
              },
              oB = (BB, GB) => {
                this._loadingError = !0, this._errorObject = {
                  message: BB,
                  exception: GB
                }, OB && OB(BB, GB), yB.e.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            this._texture ? this._texture.isReady ? QB.c.SetImmediate((() => DB())) : this._texture.onLoadedObservable.add((() => DB())) : (this._prefiltered ? this._texture = this._getEngine().createPrefilteredCubeTexture(this.url, GB, this._lodScale, this._lodOffset, BB, oB, this._format, this._forcedExtension, this._createPolynomials, this._buffer) : this._texture = this._getEngine().createCubeTexture(this.url, GB, this._files, this._noMipmap, BB, oB, this._format, this._forcedExtension, !1, this._lodScale, this._lodOffset, null, this._loaderOptions, !!this._useSRGBBuffer, this._buffer), this._texture?.onLoadedObservable.add((() => this.onLoadObservable.notifyObservers(this))))
          }
          clone() {
            let OB = 0;
            const GB = this.irradianceTexture,
              YB = PB.d.Clone((() => {
                const GB = new BB(this.url, this.JF() || this._getEngine(), this._extensions, this._noMipmap, this._files);
                return OB = GB.uniqueId, GB
              }), this);
            return YB.uniqueId = OB, GB && !this.irradianceTexture && (this.irradianceTexture = GB), YB
          }
        }, (() => {
          const QB = "function" === typeof Symbol && Symbol.metadata ? Object.create(fB[Symbol.metadata] ?? null) : void 0;
          OB = [(0, DB.L)()], GB = [(0, DB.H)()], JB = [(0, DB.H)()], WB = [(0, DB.L)("rotationY")], AB = [(0, DB.L)("files")], VB = [(0, DB.L)("forcedExtension")], SB = [(0, DB.L)("extensions")], nB = [(0, DB.t)("textureMatrix")], UB = [(0, DB.t)("textureMatrixRefraction")], (0, YB.h)(BB, null, JB, {
            kind: "getter",
            name: "boundingBoxSize",
            static: !1,
            private: !1,
            access: {
              has: BB => "boundingBoxSize" in BB,
              get: BB => BB.boundingBoxSize
            },
            metadata: QB
          }, null, kB), (0, YB.h)(BB, null, WB, {
            kind: "setter",
            name: "rotationY",
            static: !1,
            private: !1,
            access: {
              has: BB => "rotationY" in BB,
              set: (BB, OB) => {
                BB.rotationY = OB
              }
            },
            metadata: QB
          }, null, kB), (0, YB.h)(null, null, OB, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: BB => "url" in BB,
              get: BB => BB.url,
              set: (BB, OB) => {
                BB.url = OB
              }
            },
            metadata: QB
          }, dB, KB), (0, YB.h)(null, null, GB, {
            kind: "field",
            name: "boundingBoxPosition",
            static: !1,
            private: !1,
            access: {
              has: BB => "boundingBoxPosition" in BB,
              get: BB => BB.boundingBoxPosition,
              set: (BB, OB) => {
                BB.boundingBoxPosition = OB
              }
            },
            metadata: QB
          }, uB, mB), (0, YB.h)(null, null, AB, {
            kind: "field",
            name: "_files",
            static: !1,
            private: !1,
            access: {
              has: BB => "_files" in BB,
              get: BB => BB._files,
              set: (BB, OB) => {
                BB._files = OB
              }
            },
            metadata: QB
          }, IB, FB), (0, YB.h)(null, null, VB, {
            kind: "field",
            name: "_forcedExtension",
            static: !1,
            private: !1,
            access: {
              has: BB => "_forcedExtension" in BB,
              get: BB => BB._forcedExtension,
              set: (BB, OB) => {
                BB._forcedExtension = OB
              }
            },
            metadata: QB
          }, iB, LB), (0, YB.h)(null, null, SB, {
            kind: "field",
            name: "_extensions",
            static: !1,
            private: !1,
            access: {
              has: BB => "_extensions" in BB,
              get: BB => BB._extensions,
              set: (BB, OB) => {
                BB._extensions = OB
              }
            },
            metadata: QB
          }, gB, rB), (0, YB.h)(null, null, nB, {
            kind: "field",
            name: "_textureMatrix",
            static: !1,
            private: !1,
            access: {
              has: BB => "_textureMatrix" in BB,
              get: BB => BB._textureMatrix,
              set: (BB, OB) => {
                BB._textureMatrix = OB
              }
            },
            metadata: QB
          }, XB, wB), (0, YB.h)(null, null, UB, {
            kind: "field",
            name: "_textureMatrixRefraction",
            static: !1,
            private: !1,
            access: {
              has: BB => "_textureMatrixRefraction" in BB,
              get: BB => BB._textureMatrixRefraction,
              set: (BB, OB) => {
                BB._textureMatrixRefraction = OB
              }
            },
            metadata: QB
          }, EB, cB), QB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: QB
          })
        })(), BB
      })(),
      AB = !1;

    function VB(BB, OB, GB) {
      let YB = "";
      for (const DB of BB) YB += DB;
      return new WB(YB, OB, null, GB, BB)
    }

    function SB(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        YB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const DB = OB.useDelayedTextureLoading;
      OB.useDelayedTextureLoading = !1;
      const QB = new WB(BB, OB, null, !1, null, null, null, void 0, !0, GB, YB);
      return OB.useDelayedTextureLoading = DB, QB
    }

    function nB(BB, OB, GB) {
      const YB = PB.d.Parse((() => {
        let YB = !1;
        return BB.prefiltered && (YB = BB.prefiltered), new WB(GB + (BB.url ?? BB.name), OB, BB.extensions, !1, BB.files || null, null, null, void 0, YB, BB.forcedExtension)
      }), BB, OB);
      if (BB.boundingBoxPosition && (YB.boundingBoxPosition = oB.r.FromArray(BB.boundingBoxPosition)), BB.boundingBoxSize && (YB.boundingBoxSize = oB.r.FromArray(BB.boundingBoxSize)), BB.animations)
        for (let DB = 0; DB < BB.animations.length; DB++) {
          const OB = BB.animations[DB],
            GB = (0, JB.c)("BABYLON.Animation");
          GB && YB.animations.push(GB.Parse(OB))
        }
      return YB
    }
    AB || (AB = !0, WB.CreateFromImages = VB, WB.CreateFromPrefilteredData = SB, WB.Parse = nB, yB.e._CubeTextureParser = nB, (0, JB.f)("BABYLON.CubeTexture", WB))
  },
  42177: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => JB
    });
    var YB = GB(39366),
      DB = GB(41470),
      QB = GB(40932),
      oB = GB(40849),
      jB = GB(40837);
    let yB = !1;
    class JB extends DB.e {
      constructor(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          MB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5,
          PB = arguments.length > 6 ? arguments[6] : void 0;
        const zB = !GB || GB._isScene;
        super(null, zB ? GB : GB?.eq, zB ? !YB : GB, PB, JB, void 0, void 0, void 0, void 0, MB), yB || (yB = !0, oB.ThinEngine.prototype.createDynamicTexture = function(BB, OB, GB, YB) {
          const DB = new jB.b(this, 4);
          return DB.baseWidth = BB, DB.baseHeight = OB, GB && (BB = this.needPOTTextures ? (0, QB.f)(BB, this._caps.maxTextureSize) : BB, OB = this.needPOTTextures ? (0, QB.f)(OB, this._caps.maxTextureSize) : OB), DB.width = BB, DB.height = OB, DB.isReady = !1, DB.generateMipMaps = GB, DB.samplingMode = YB, this.updateTextureSamplingMode(YB, DB), this._internalTexturesCache.push(DB), DB
        }, oB.ThinEngine.prototype.updateDynamicTexture = function(BB, OB, GB) {
          let YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            DB = arguments.length > 4 ? arguments[4] : void 0,
            QB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
          if (!BB) return;
          const oB = this._gl,
            jB = oB.TEXTURE_2D,
            yB = this._bindTextureDirectly(jB, BB, !0, QB);
          this._unpackFlipY(void 0 === GB ? BB.invertY : GB), YB && oB.pixelStorei(oB.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
          const JB = this._getWebGLTextureType(BB.type),
            MB = this._getInternalFormat(DB || BB.format),
            PB = this._getRGBABufferInternalSizedFormat(BB.type, MB);
          oB.texImage2D(jB, 0, PB, MB, JB, OB), BB.generateMipMaps && oB.generateMipmap(jB), yB || this._bindTextureDirectly(jB, null), YB && oB.pixelStorei(oB.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), DB && (BB.format = DB), BB._dynamicTextureSource = OB, BB._premulAlpha = YB, BB.invertY = GB || !1, BB.isReady = !0
        }), this.name = BB, this.wrapU = DB.e.CLAMP_ADDRESSMODE, this.wrapV = DB.e.CLAMP_ADDRESSMODE, this._generateMipMaps = YB;
        const lB = this._getEngine();
        if (!lB) return;
        if (OB.getContext) this._canvas = OB, this._ownCanvas = !1, this._texture = lB.createDynamicTexture(this._canvas.width, this._canvas.height, YB, JB);
        else {
          this._canvas = lB.createCanvas(1, 1), this._ownCanvas = !0;
          const BB = OB;
          BB.width || 0 === BB.width ? this._texture = lB.createDynamicTexture(BB.width, BB.height, YB, JB) : this._texture = lB.createDynamicTexture(OB, OB, YB, JB)
        }
        const pB = this.getSize();
        this._canvas.width !== pB.width && (this._canvas.width = pB.width), this._canvas.height !== pB.height && (this._canvas.height = pB.height), this._context = this._canvas.getContext("2d")
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
        const OB = this.getSize();
        OB.width *= BB, OB.height *= BB, this._recreate(OB)
      }
      scaleTo(BB, OB) {
        const GB = this.getSize();
        GB.width = BB, GB.height = OB, this._recreate(GB)
      }
      getContext() {
        return this._context
      }
      clear(BB) {
        const OB = this.getSize();
        BB && (this._context.fillStyle = BB), this._context.clearRect(0, 0, OB.width, OB.height)
      }
      update(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._texture && this._getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === BB || BB, OB, this._format || void 0, void 0, GB)
      }
      drawText(BB, OB, GB, YB, DB, QB, oB) {
        let jB = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const yB = this.getSize();
        if (QB && (this._context.fillStyle = QB, this._context.fillRect(0, 0, yB.width, yB.height)), this._context.font = YB, null === OB || void 0 === OB) {
          const GB = this._context.measureText(BB);
          OB = (yB.width - GB.width) / 2
        }
        if (null === GB || void 0 === GB) {
          const BB = parseInt(YB.replace(/\D/g, ""));
          GB = yB.height / 2 + BB / 3.65
        }
        this._context.fillStyle = DB || "", this._context.fillText(BB, OB, GB), jB && this.update(oB)
      }
      dispose() {
        super.dispose(), this._ownCanvas && this._canvas?.remove?.(), this._canvas = null, this._context = null
      }
      clone() {
        const BB = this.JF();
        if (!BB) return this;
        const OB = this.getSize(),
          GB = new JB(this.name, OB, BB, this._generateMipMaps);
        return GB.hasAlpha = this.hasAlpha, GB.level = this.level, GB.wrapU = this.wrapU, GB.wrapV = this.wrapV, GB
      }
      serialize() {
        const BB = this.JF();
        BB && !BB.isReady() && YB.b.Warn("The scene must be ready before serializing the dynamic texture");
        const OB = super.serialize();
        return JB._IsCanvasElement(this._canvas) && (OB.base64String = this._canvas.toDataURL()), OB.invertY = this._invertY, OB.samplingMode = this.samplingMode, OB
      }
      static _IsCanvasElement(BB) {
        return void 0 !== BB.toDataURL
      }
      _rebuild() {
        this.update()
      }
    }
  },
  42148: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => DB
    });
    var YB = GB(41470);
    class DB extends YB.e {
      get depth() {
        return this._depth
      }
      constructor(BB, OB, GB, DB, QB, oB) {
        let jB = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          yB = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          JB = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : YB.e.TRILINEAR_SAMPLINGMODE,
          MB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          PB = arguments.length > 10 ? arguments[10] : void 0,
          zB = arguments.length > 11 ? arguments[11] : void 0;
        super(null, oB, !jB, yB), this.format = QB, this._texture = oB.Lp().createRawTexture2DArray(BB, OB, GB, DB, QB, jB, yB, JB, null, MB, PB ?? 0, zB), this._depth = DB, this.is2DArray = !0
      }
      update(BB) {
        this.updateMipLevel(BB, 0)
      }
      updateMipLevel(BB, OB) {
        this._texture && this._getEngine().updateRawTexture2DArray(this._texture, BB, this._texture.format, this._texture.invertY, null, this._texture.type, OB)
      }
      static CreateRGBATexture(BB, OB, GB, YB, QB) {
        return new DB(BB, OB, GB, YB, 5, QB, !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0)
      }
    }
  },
  42140: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => YB.c
    });
    var YB = GB(41361);
    (0, YB.g)()
  },
  41089: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => YB.e
    });
    var YB = GB(41091);
    (0, YB.b)()
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);