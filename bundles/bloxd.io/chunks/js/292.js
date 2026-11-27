export const id = 292;
export const ids = [292];
export const modules = {
  41764: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => ZR,
      i: () => qR
    });
    var yR = GR(39914),
      tR = GR(41542),
      uR = GR(41732),
      ZR = {};
    class qR {
      constructor(RR) {
        this.attachedToElement = !1, this.attached = {}, this.camera = RR, this.checkInputs = () => {}
      }
      add(RR) {
        const JR = RR.getSimpleName();
        this.attached[JR] ? yR.c.Warn("camera input of type " + JR + " already exists on camera") : (this.attached[JR] = RR, RR.camera = this.camera, RR.checkInputs && (this.checkInputs = this._addCheckInputs(RR.checkInputs.bind(RR))), this.attachedToElement && RR.attachControl(this.noPreventDefault))
      }
      remove(RR) {
        for (const JR in this.attached) {
          const GR = this.attached[JR];
          if (GR === RR) return GR.detachControl(), GR.camera = null, delete this.attached[JR], void this.rebuildInputCheck()
        }
      }
      removeByType(RR) {
        for (const JR in this.attached) {
          const GR = this.attached[JR];
          GR.getClassName() === RR && (GR.detachControl(), GR.camera = null, delete this.attached[JR], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(RR) {
        const JR = this.checkInputs;
        return () => {
          JR(), RR()
        }
      }
      attachInput(RR) {
        this.attachedToElement && RR.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          RR = !uR.b.ForceAttachControlToAlwaysPreventDefault && RR, this.attachedToElement = !0, this.noPreventDefault = RR;
          for (const JR in this.attached) this.attached[JR].attachControl(RR)
        }
      }
      detachElement() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const JR in this.attached) this.attached[JR].detachControl(), RR && (this.attached[JR].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const RR in this.attached) {
          const JR = this.attached[RR];
          JR.checkInputs && (this.checkInputs = this._addCheckInputs(JR.checkInputs.bind(JR)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(RR) {
        const JR = {};
        for (const GR in this.attached) {
          const RR = this.attached[GR],
            yR = tR.c.Serialize(RR);
          JR[RR.getClassName()] = yR
        }
        RR.inputsmgr = JR
      }
      parse(RR) {
        const JR = RR.inputsmgr;
        if (JR) {
          this.clear();
          for (const RR in JR) {
            const GR = ZR[RR];
            if (GR) {
              const yR = JR[RR],
                uR = tR.c.Parse((() => new GR), yR, null);
              this.add(uR)
            }
          }
        } else
          for (const GR in this.attached) {
            const JR = ZR[this.attached[GR].getClassName()];
            if (JR) {
              const yR = tR.c.Parse((() => new JR), RR, null);
              this.remove(this.attached[GR]), this.add(yR)
            }
          }
      }
    }
  },
  42677: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => WR
    });
    var yR = GR(41520),
      tR = GR(41524),
      uR = GR(41415),
      ZR = GR(38204),
      qR = GR(41514),
      iR = GR(42011),
      fR = GR(38253),
      VR = GR(38233),
      KR = GR(41542),
      wR = GR(41364),
      rR = GR(39914),
      eR = GR(41564),
      aR = GR(39062),
      LR = GR(41607);
    var nR = GR(41418);
    let UR = !1;
    let WR = (() => {
        var RR;
        let JR, GR, fR, WR, AR, CR, XR, MR, BR, lR = qR.c,
          pR = [],
          gR = [],
          bR = [],
          vR = [],
          OR = [],
          xR = [],
          NR = [],
          DR = [],
          HR = [],
          oR = [],
          cR = [],
          PR = [],
          IR = [],
          mR = [],
          zR = [];
        return RR = class extends lR {
          set boundingBoxSize(RR) {
            if (this._boundingBoxSize && this._boundingBoxSize.equals(RR)) return;
            this._boundingBoxSize = RR;
            const JR = this.jH();
            JR && JR.markAllMaterialsAsDirty(1)
          }
          get boundingBoxSize() {
            return this._boundingBoxSize
          }
          set rotationY(RR) {
            this._rotationY = RR, this.setReflectionTextureMatrix(ZR.e.RotationY(this._rotationY))
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
          constructor(RR, JR) {
            let GR, tR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              uR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              qR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              fR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              KR = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              WR = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 5,
              AR = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              CR = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              XR = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
              MR = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : .8,
              BR = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 0,
              lR = arguments.length > 13 ? arguments[13] : void 0,
              SR = arguments.length > 14 ? arguments[14] : void 0;
            super(JR), this._delayedOnLoad = (0, yR.m)(this, pR), this.onLoadObservable = new VR.b, this.url = (0, yR.m)(this, gR, void 0), this.boundingBoxPosition = ((0, yR.m)(this, bR), (0, yR.m)(this, vR, ZR.r.Zero())), this._boundingBoxSize = (0, yR.m)(this, OR), this._rotationY = 0, this._files = (0, yR.m)(this, xR, null), this._forcedExtension = ((0, yR.m)(this, NR), (0, yR.m)(this, DR, null)), this._extensions = ((0, yR.m)(this, HR), (0, yR.m)(this, oR, null)), this._textureMatrix = ((0, yR.m)(this, cR), (0, yR.m)(this, PR, void 0)), this._textureMatrixRefraction = ((0, yR.m)(this, IR), (0, yR.m)(this, mR, new ZR.e)), this._format = (0, yR.m)(this, zR), this._buffer = null, UR || (UR = !0, nR.c.prototype._partialLoadFile = function(RR, JR, GR, yR) {
              let tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
              this._loadFile(RR, (RR => {
                GR[JR] = RR, GR._internalCount++, 6 === GR._internalCount && yR(GR)
              }), void 0, void 0, !0, ((RR, JR) => {
                tR && RR && tR(RR.status + " " + RR.statusText, JR)
              }))
            }, nR.c.prototype._cascadeLoadFiles = function(RR, JR, GR) {
              let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
              const tR = [];
              tR._internalCount = 0;
              for (let uR = 0; uR < 6; uR++) this._partialLoadFile(GR[uR], uR, tR, JR, yR)
            }, nR.c.prototype._cascadeLoadImgs = function(RR, JR, GR, yR) {
              let tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                uR = arguments.length > 5 ? arguments[5] : void 0;
              const ZR = [];
              ZR._internalCount = 0;
              for (let qR = 0; qR < 6; qR++) this._partialLoadImg(yR[qR], qR, ZR, RR, JR, GR, tR, uR)
            }, nR.c.prototype._partialLoadImg = function(RR, JR, GR, yR, tR, uR) {
              let ZR = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                qR = arguments.length > 7 ? arguments[7] : void 0;
              const iR = (0, aR.c)();
              (0, eR.q)(RR, (RR => {
                GR[JR] = RR, GR._internalCount++, yR && yR.removePendingData(iR), 6 === GR._internalCount && uR && uR(tR, GR)
              }), ((RR, JR) => {
                yR && yR.removePendingData(iR), ZR && ZR(RR, JR)
              }), yR ? yR.offlineProvider : null, qR), yR && yR.addPendingData(iR)
            }, nR.c.prototype.createCubeTextureBase = function(RR, JR, GR, yR) {
              let tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                uR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                ZR = arguments.length > 6 ? arguments[6] : void 0,
                qR = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                iR = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
                fR = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
                VR = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
                KR = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
                eR = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
                aR = arguments.length > 13 && void 0 !== arguments[13] ? arguments[13] : null,
                nR = arguments.length > 14 && void 0 !== arguments[14] && arguments[14],
                UR = arguments.length > 15 && void 0 !== arguments[15] ? arguments[15] : null;
              const WR = KR || new wR.b(this, 7);
              WR.isCube = !0, WR.url = RR, WR.generateMipMaps = !yR, WR._lodGenerationScale = fR, WR._lodGenerationOffset = VR, WR._useSRGBBuffer = !!nR && this._caps.supportSRGBBuffers && (this.version > 1 || this.isWebGPU || !!yR), WR !== KR && (WR.label = RR.substring(0, 60)), this._doNotHandleContextLost || (WR._extension = qR, WR._files = GR, WR._buffer = UR);
              const AR = RR;
              this._transformTextureUrl && !KR && (RR = this._transformTextureUrl(RR));
              const CR = qR ?? function(RR) {
                  const JR = RR.split("?")[0],
                    GR = JR.lastIndexOf(".");
                  return GR > -1 ? JR.substring(GR).toLowerCase() : ""
                }(RR),
                XR = (0, LR.e)(CR),
                MR = (RR, JR) => {
                  WR.dispose(), uR ? uR(RR, JR) : RR && rR.c.Warn(RR)
                },
                BR = (uR, KR) => {
                  RR === AR ? uR && MR(uR.status + " " + uR.statusText, KR) : (rR.c.Warn(`Failed to load ${RR}, falling back to the ${AR}`), this.createCubeTextureBase(AR, JR, GR, !!yR, tR, MR, ZR, qR, iR, fR, VR, WR, eR, aR, nR, UR))
                };
              if (XR) XR.then((yR => {
                const uR = RR => {
                  eR && eR(WR, RR), yR.loadCubeData(RR, WR, iR, tR, ((RR, JR) => {
                    MR(RR, JR)
                  }))
                };
                UR ? uR(UR) : GR && 6 === GR.length ? yR.supportCascades ? this._cascadeLoadFiles(JR, (RR => uR(RR.map((RR => new Uint8Array(RR))))), GR, MR) : MR("Textures type does not support cascades.") : this._loadFile(RR, (RR => uR(new Uint8Array(RR))), void 0, JR ? JR.offlineProvider || null : void 0, !0, BR)
              }));
              else {
                if (!GR || 0 === GR.length) throw new Error("Cannot load cubemap because files were not defined, or the correct loader was not found.");
                this._cascadeLoadImgs(JR, WR, ((RR, JR) => {
                  aR && aR(RR, JR)
                }), GR, MR)
              }
              return this._internalTexturesCache.push(WR), WR
            }), this.name = RR, this.url = RR, this._noMipmap = uR, this.hasAlpha = !1, this.isCube = !0, this._textureMatrix = ZR.e.Identity(), this.coordinatesMode = iR.f.CUBIC_MODE;
            let jR = null;
            null === tR || Array.isArray(tR) ? (this._noMipmap = uR, this._format = WR, this._createPolynomials = XR, GR = tR, this._loaderOptions = lR, this._useSRGBBuffer = SR, this._lodScale = MR, this._lodOffset = BR) : (GR = tR.extensions ?? null, this._noMipmap = tR.noMipmap ?? !1, qR = tR.files ?? null, jR = tR.buffer ?? null, this._format = tR.format ?? 5, AR = tR.prefiltered ?? !1, CR = tR.forcedExtension ?? null, this._createPolynomials = tR.createPolynomials ?? !1, this._lodScale = tR.lodScale ?? .8, this._lodOffset = tR.lodOffset ?? 0, this._loaderOptions = tR.loaderOptions, this._useSRGBBuffer = tR.useSRGBBuffer, this._sphericalPolynomialTargetSize = tR.sphericalPolynomialTargetSize ?? 0, fR = tR.onLoad ?? null, KR = tR.onError ?? null), (RR || qR) && this.updateURL(RR, CR, fR, AR, KR, GR, this.jH()?.useDelayedTextureLoading, qR, jR)
          }
          getClassName() {
            return "CubeTexture"
          }
          updateURL(RR) {
            let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              yR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              uR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              ZR = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
              qR = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              iR = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
            this.name && !this.name.startsWith("data:") || (this.name = RR), this.url = RR, JR && (this._forcedExtension = JR);
            const fR = RR.lastIndexOf("."),
              VR = JR || (fR > -1 ? RR.substring(fR).toLowerCase() : ""),
              KR = 0 === VR.indexOf(".dds"),
              wR = 0 === VR.indexOf(".env"),
              rR = 0 === VR.indexOf(".basis");
            if (wR ? (this.gammaSpace = !1, this._prefiltered = !1, this.anisotropicFilteringLevel = 1) : (this._prefiltered = yR, yR && (this.gammaSpace = !1, this.anisotropicFilteringLevel = 1)), qR) this._files = qR;
            else if (rR || wR || KR || uR || (uR = ["_px.jpg", "_py.jpg", "_pz.jpg", "_nx.jpg", "_ny.jpg", "_nz.jpg"]), this._files = this._files || [], this._files.length = 0, uR) {
              for (let JR = 0; JR < uR.length; JR++) this._files.push(RR + uR[JR]);
              this._extensions = uR
            }
            this._buffer = iR, ZR ? (this.delayLoadState = 4, this._delayedOnLoad = GR, this._delayedOnError = tR) : this._loadTexture(GR, tR)
          }
          delayLoad(RR) {
            4 === this.delayLoadState && (RR && (this._forcedExtension = RR), this.delayLoadState = 1, this._loadTexture(this._delayedOnLoad, this._delayedOnError))
          }
          getReflectionTextureMatrix() {
            return this._textureMatrix
          }
          setReflectionTextureMatrix(RR) {
            if (RR.updateFlag === this._textureMatrix.updateFlag) return;
            if (RR.isIdentity() !== this._textureMatrix.isIdentity() && this.jH()?.markAllMaterialsAsDirty(1, (RR => -1 !== RR.getActiveTextures().indexOf(this))), this._textureMatrix = RR, !this.jH()?.useRightHandedSystem) return;
            const JR = ZR.l.Fe[0],
              GR = ZR.l.Quaternion[0],
              yR = ZR.l.Fe[1];
            this._textureMatrix.decompose(JR, GR, yR), GR.z *= -1, GR.w *= -1, ZR.e.ComposeToRef(JR, GR, yR, this._textureMatrixRefraction)
          }
          getRefractionTextureMatrix() {
            return this.jH()?.useRightHandedSystem ? this._textureMatrixRefraction : this._textureMatrix
          }
          _loadTexture() {
            let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            const GR = this.jH(),
              yR = this._texture;
            this._texture = this._getFromCache(this.url, this._noMipmap, void 0, void 0, this._useSRGBBuffer, this.isCube);
            const tR = () => {
                this.onLoadObservable.notifyObservers(this), yR && (yR.dispose(), this.jH()?.markAllMaterialsAsDirty(1)), RR && RR()
              },
              ZR = (RR, GR) => {
                this._loadingError = !0, this._errorObject = {
                  message: RR,
                  exception: GR
                }, JR && JR(RR, GR), iR.f.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            this._texture ? this._texture.isReady ? uR.e.SetImmediate((() => tR())) : this._texture.onLoadedObservable.add((() => tR())) : (this._prefiltered ? this._texture = this._getEngine().createPrefilteredCubeTexture(this.url, GR, this._lodScale, this._lodOffset, RR, ZR, this._format, this._forcedExtension, this._createPolynomials, this._buffer) : this._texture = this._getEngine().createCubeTexture(this.url, GR, this._files, this._noMipmap, RR, ZR, this._format, this._forcedExtension, !1, this._lodScale, this._lodOffset, null, this._loaderOptions, !!this._useSRGBBuffer, this._buffer), this._texture?.onLoadedObservable.add((() => this.onLoadObservable.notifyObservers(this))))
          }
          clone() {
            let JR = 0;
            const GR = this.irradianceTexture,
              yR = KR.c.Clone((() => {
                const GR = new RR(this.url, this.jH() || this._getEngine(), this._extensions, this._noMipmap, this._files);
                return JR = GR.uniqueId, GR
              }), this);
            return yR.uniqueId = JR, GR && !this.irradianceTexture && (this.irradianceTexture = GR), yR
          }
        }, (() => {
          const uR = "function" === typeof Symbol && Symbol.metadata ? Object.create(lR[Symbol.metadata] ?? null) : void 0;
          JR = [(0, tR.H)()], GR = [(0, tR.G)()], fR = [(0, tR.G)()], WR = [(0, tR.H)("rotationY")], AR = [(0, tR.H)("files")], CR = [(0, tR.H)("forcedExtension")], XR = [(0, tR.H)("extensions")], MR = [(0, tR.u)("textureMatrix")], BR = [(0, tR.u)("textureMatrixRefraction")], (0, yR.l)(RR, null, fR, {
            kind: "getter",
            name: "boundingBoxSize",
            static: !1,
            private: !1,
            access: {
              has: RR => "boundingBoxSize" in RR,
              get: RR => RR.boundingBoxSize
            },
            metadata: uR
          }, null, pR), (0, yR.l)(RR, null, WR, {
            kind: "setter",
            name: "rotationY",
            static: !1,
            private: !1,
            access: {
              has: RR => "rotationY" in RR,
              set: (RR, JR) => {
                RR.rotationY = JR
              }
            },
            metadata: uR
          }, null, pR), (0, yR.l)(null, null, JR, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: RR => "url" in RR,
              get: RR => RR.url,
              set: (RR, JR) => {
                RR.url = JR
              }
            },
            metadata: uR
          }, gR, bR), (0, yR.l)(null, null, GR, {
            kind: "field",
            name: "boundingBoxPosition",
            static: !1,
            private: !1,
            access: {
              has: RR => "boundingBoxPosition" in RR,
              get: RR => RR.boundingBoxPosition,
              set: (RR, JR) => {
                RR.boundingBoxPosition = JR
              }
            },
            metadata: uR
          }, vR, OR), (0, yR.l)(null, null, AR, {
            kind: "field",
            name: "_files",
            static: !1,
            private: !1,
            access: {
              has: RR => "_files" in RR,
              get: RR => RR._files,
              set: (RR, JR) => {
                RR._files = JR
              }
            },
            metadata: uR
          }, xR, NR), (0, yR.l)(null, null, CR, {
            kind: "field",
            name: "_forcedExtension",
            static: !1,
            private: !1,
            access: {
              has: RR => "_forcedExtension" in RR,
              get: RR => RR._forcedExtension,
              set: (RR, JR) => {
                RR._forcedExtension = JR
              }
            },
            metadata: uR
          }, DR, HR), (0, yR.l)(null, null, XR, {
            kind: "field",
            name: "_extensions",
            static: !1,
            private: !1,
            access: {
              has: RR => "_extensions" in RR,
              get: RR => RR._extensions,
              set: (RR, JR) => {
                RR._extensions = JR
              }
            },
            metadata: uR
          }, oR, cR), (0, yR.l)(null, null, MR, {
            kind: "field",
            name: "_textureMatrix",
            static: !1,
            private: !1,
            access: {
              has: RR => "_textureMatrix" in RR,
              get: RR => RR._textureMatrix,
              set: (RR, JR) => {
                RR._textureMatrix = JR
              }
            },
            metadata: uR
          }, PR, IR), (0, yR.l)(null, null, BR, {
            kind: "field",
            name: "_textureMatrixRefraction",
            static: !1,
            private: !1,
            access: {
              has: RR => "_textureMatrixRefraction" in RR,
              get: RR => RR._textureMatrixRefraction,
              set: (RR, JR) => {
                RR._textureMatrixRefraction = JR
              }
            },
            metadata: uR
          }, mR, zR), uR && Object.defineProperty(RR, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: uR
          })
        })(), RR
      })(),
      AR = !1;

    function CR(RR, JR, GR) {
      let yR = "";
      for (const tR of RR) yR += tR;
      return new WR(yR, JR, null, GR, RR)
    }

    function XR(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        yR = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const tR = JR.useDelayedTextureLoading;
      JR.useDelayedTextureLoading = !1;
      const uR = new WR(RR, JR, null, !1, null, null, null, void 0, !0, GR, yR);
      return JR.useDelayedTextureLoading = tR, uR
    }

    function MR(RR, JR, GR) {
      const yR = KR.c.Parse((() => {
        let yR = !1;
        return RR.prefiltered && (yR = RR.prefiltered), new WR(GR + (RR.url ?? RR.name), JR, RR.extensions, !1, RR.files || null, null, null, void 0, yR, RR.forcedExtension)
      }), RR, JR);
      if (RR.boundingBoxPosition && (yR.boundingBoxPosition = ZR.r.FromArray(RR.boundingBoxPosition)), RR.boundingBoxSize && (yR.boundingBoxSize = ZR.r.FromArray(RR.boundingBoxSize)), RR.animations)
        for (let tR = 0; tR < RR.animations.length; tR++) {
          const JR = RR.animations[tR],
            GR = (0, fR.e)("BABYLON.Animation");
          GR && yR.animations.push(GR.Parse(JR))
        }
      return yR
    }
    AR || (AR = !0, WR.CreateFromImages = CR, WR.CreateFromPrefilteredData = XR, WR.Parse = MR, iR.f._CubeTextureParser = MR, (0, fR.f)("BABYLON.CubeTexture", WR))
  },
  42722: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => fR
    });
    var yR = GR(39914),
      tR = GR(42011),
      uR = GR(41449),
      ZR = GR(41375),
      qR = GR(41364);
    let iR = !1;
    class fR extends tR.f {
      constructor(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          fR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          VR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5,
          KR = arguments.length > 6 ? arguments[6] : void 0;
        const wR = !GR || GR._isScene;
        super(null, wR ? GR : GR?.tL, wR ? !yR : GR, KR, fR, void 0, void 0, void 0, void 0, VR), iR || (iR = !0, ZR.ThinEngine.prototype.createDynamicTexture = function(RR, JR, GR, yR) {
          const tR = new qR.b(this, 4);
          return tR.baseWidth = RR, tR.baseHeight = JR, GR && (RR = this.needPOTTextures ? (0, uR.e)(RR, this._caps.maxTextureSize) : RR, JR = this.needPOTTextures ? (0, uR.e)(JR, this._caps.maxTextureSize) : JR), tR.width = RR, tR.height = JR, tR.isReady = !1, tR.generateMipMaps = GR, tR.samplingMode = yR, this.updateTextureSamplingMode(yR, tR), this._internalTexturesCache.push(tR), tR
        }, ZR.ThinEngine.prototype.updateDynamicTexture = function(RR, JR, GR) {
          let yR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            tR = arguments.length > 4 ? arguments[4] : void 0,
            uR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
          if (!RR) return;
          const ZR = this._gl,
            qR = ZR.TEXTURE_2D,
            iR = this._bindTextureDirectly(qR, RR, !0, uR);
          this._unpackFlipY(void 0 === GR ? RR.invertY : GR), yR && ZR.pixelStorei(ZR.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
          const fR = this._getWebGLTextureType(RR.type),
            VR = this._getInternalFormat(tR || RR.format),
            KR = this._getRGBABufferInternalSizedFormat(RR.type, VR);
          ZR.texImage2D(qR, 0, KR, VR, fR, JR), RR.generateMipMaps && ZR.generateMipmap(qR), iR || this._bindTextureDirectly(qR, null), yR && ZR.pixelStorei(ZR.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), tR && (RR.format = tR), RR._dynamicTextureSource = JR, RR._premulAlpha = yR, RR.invertY = GR || !1, RR.isReady = !0
        }), this.name = RR, this.wrapU = tR.f.CLAMP_ADDRESSMODE, this.wrapV = tR.f.CLAMP_ADDRESSMODE, this._generateMipMaps = yR;
        const rR = this._getEngine();
        if (!rR) return;
        if (JR.getContext) this._canvas = JR, this._ownCanvas = !1, this._texture = rR.createDynamicTexture(this._canvas.width, this._canvas.height, yR, fR);
        else {
          this._canvas = rR.createCanvas(1, 1), this._ownCanvas = !0;
          const RR = JR;
          RR.width || 0 === RR.width ? this._texture = rR.createDynamicTexture(RR.width, RR.height, yR, fR) : this._texture = rR.createDynamicTexture(JR, JR, yR, fR)
        }
        const eR = this.getSize();
        this._canvas.width !== eR.width && (this._canvas.width = eR.width), this._canvas.height !== eR.height && (this._canvas.height = eR.height), this._context = this._canvas.getContext("2d")
      }
      getClassName() {
        return "DynamicTexture"
      }
      get canRescale() {
        return !0
      }
      _recreate(RR) {
        this._canvas.width = RR.width, this._canvas.height = RR.height, this.releaseInternalTexture(), this._texture = this._getEngine().createDynamicTexture(RR.width, RR.height, this._generateMipMaps, this.samplingMode)
      }
      scale(RR) {
        const JR = this.getSize();
        JR.width *= RR, JR.height *= RR, this._recreate(JR)
      }
      scaleTo(RR, JR) {
        const GR = this.getSize();
        GR.width = RR, GR.height = JR, this._recreate(GR)
      }
      getContext() {
        return this._context
      }
      clear(RR) {
        const JR = this.getSize();
        RR && (this._context.fillStyle = RR), this._context.clearRect(0, 0, JR.width, JR.height)
      }
      update(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._texture && this._getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === RR || RR, JR, this._format || void 0, void 0, GR)
      }
      drawText(RR, JR, GR, yR, tR, uR, ZR) {
        let qR = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const iR = this.getSize();
        if (uR && (this._context.fillStyle = uR, this._context.fillRect(0, 0, iR.width, iR.height)), this._context.font = yR, null === JR || void 0 === JR) {
          const GR = this._context.measureText(RR);
          JR = (iR.width - GR.width) / 2
        }
        if (null === GR || void 0 === GR) {
          const RR = parseInt(yR.replace(/\D/g, ""));
          GR = iR.height / 2 + RR / 3.65
        }
        this._context.fillStyle = tR || "", this._context.fillText(RR, JR, GR), qR && this.update(ZR)
      }
      dispose() {
        super.dispose(), this._ownCanvas && this._canvas?.remove?.(), this._canvas = null, this._context = null
      }
      clone() {
        const RR = this.jH();
        if (!RR) return this;
        const JR = this.getSize(),
          GR = new fR(this.name, JR, RR, this._generateMipMaps);
        return GR.hasAlpha = this.hasAlpha, GR.level = this.level, GR.wrapU = this.wrapU, GR.wrapV = this.wrapV, GR
      }
      serialize() {
        const RR = this.jH();
        RR && !RR.isReady() && yR.c.Warn("The scene must be ready before serializing the dynamic texture");
        const JR = super.serialize();
        return fR._IsCanvasElement(this._canvas) && (JR.base64String = this._canvas.toDataURL()), JR.invertY = this._invertY, JR.samplingMode = this.samplingMode, JR
      }
      static _IsCanvasElement(RR) {
        return void 0 !== RR.toDataURL
      }
      _rebuild() {
        this.update()
      }
    }
  },
  42697: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => tR
    });
    var yR = GR(42011);
    class tR extends yR.f {
      get depth() {
        return this._depth
      }
      constructor(RR, JR, GR, tR, uR, ZR) {
        let qR = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          iR = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          fR = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : yR.f.TRILINEAR_SAMPLINGMODE,
          VR = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          KR = arguments.length > 10 ? arguments[10] : void 0,
          wR = arguments.length > 11 ? arguments[11] : void 0;
        super(null, ZR, !qR, iR), this.format = uR, this._texture = ZR.ke().createRawTexture2DArray(RR, JR, GR, tR, uR, qR, iR, fR, null, VR, KR ?? 0, wR), this._depth = tR, this.is2DArray = !0
      }
      update(RR) {
        this.updateMipLevel(RR, 0)
      }
      updateMipLevel(RR, JR) {
        this._texture && this._getEngine().updateRawTexture2DArray(this._texture, RR, this._texture.format, this._texture.invertY, null, this._texture.type, JR)
      }
      static CreateRGBATexture(RR, JR, GR, yR, uR) {
        return new tR(RR, JR, GR, yR, 5, uR, !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0)
      }
    }
  },
  42693: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => yR.b
    });
    var yR = GR(41890);
    (0, yR.e)()
  },
  41610: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => yR.g
    });
    var yR = GR(41612);
    (0, yR.c)()
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);