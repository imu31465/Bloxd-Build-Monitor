export const id = 246;
export const ids = [246];
export const modules = {
  39367: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => RY,
      e: () => OY
    });
    var FY = DY(38040),
      AY = DY(39144),
      IY = DY(39342),
      RY = {};
    class OY {
      constructor(YY) {
        this.attachedToElement = !1, this.attached = {}, this.camera = YY, this.checkInputs = () => {}
      }
      add(YY) {
        const rY = YY.getSimpleName();
        this.attached[rY] ? FY.d.Warn("camera input of type " + rY + " already exists on camera") : (this.attached[rY] = YY, YY.camera = this.camera, YY.checkInputs && (this.checkInputs = this._addCheckInputs(YY.checkInputs.bind(YY))), this.attachedToElement && YY.attachControl(this.noPreventDefault))
      }
      remove(YY) {
        for (const rY in this.attached) {
          const DY = this.attached[rY];
          if (DY === YY) return DY.detachControl(), DY.camera = null, delete this.attached[rY], void this.rebuildInputCheck()
        }
      }
      removeByType(YY) {
        for (const rY in this.attached) {
          const DY = this.attached[rY];
          DY.getClassName() === YY && (DY.detachControl(), DY.camera = null, delete this.attached[rY], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(YY) {
        const rY = this.checkInputs;
        return () => {
          rY(), YY()
        }
      }
      attachInput(YY) {
        this.attachedToElement && YY.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          YY = !IY.e.ForceAttachControlToAlwaysPreventDefault && YY, this.attachedToElement = !0, this.noPreventDefault = YY;
          for (const rY in this.attached) this.attached[rY].attachControl(YY)
        }
      }
      detachElement() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const rY in this.attached) this.attached[rY].detachControl(), YY && (this.attached[rY].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const YY in this.attached) {
          const rY = this.attached[YY];
          rY.checkInputs && (this.checkInputs = this._addCheckInputs(rY.checkInputs.bind(rY)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(YY) {
        const rY = {};
        for (const DY in this.attached) {
          const YY = this.attached[DY],
            FY = AY.b.Serialize(YY);
          rY[YY.getClassName()] = FY
        }
        YY.inputsmgr = rY
      }
      parse(YY) {
        const rY = YY.inputsmgr;
        if (rY) {
          this.clear();
          for (const YY in rY) {
            const DY = RY[YY];
            if (DY) {
              const FY = rY[YY],
                IY = AY.b.Parse((() => new DY), FY, null);
              this.add(IY)
            }
          }
        } else
          for (const DY in this.attached) {
            const rY = RY[this.attached[DY].getClassName()];
            if (rY) {
              const FY = AY.b.Parse((() => new rY), YY, null);
              this.remove(this.attached[DY]), this.add(FY)
            }
          }
      }
    }
  },
  40329: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => mY
    });
    var FY = DY(39127),
      AY = DY(39131),
      IY = DY(39037),
      RY = DY(36524),
      OY = DY(39123),
      gY = DY(39596),
      aY = DY(36569),
      vY = DY(36552),
      uY = DY(39144),
      sY = DY(38975),
      iY = DY(38040),
      yY = DY(39160),
      QY = DY(37242),
      oY = DY(39200);
    var WY = DY(39041);
    let EY = !1;
    let mY = (() => {
        var YY;
        let rY, DY, aY, mY, VY, SY, lY, TY, eY, NY = OY.e,
          BY = [],
          cY = [],
          KY = [],
          HY = [],
          zY = [],
          ZY = [],
          CY = [],
          fY = [],
          jY = [],
          hY = [],
          dY = [],
          JY = [],
          MY = [],
          wY = [],
          bY = [];
        return YY = class extends NY {
          set boundingBoxSize(YY) {
            if (this._boundingBoxSize && this._boundingBoxSize.equals(YY)) return;
            this._boundingBoxSize = YY;
            const rY = this.hT();
            rY && rY.markAllMaterialsAsDirty(1)
          }
          get boundingBoxSize() {
            return this._boundingBoxSize
          }
          set rotationY(YY) {
            this._rotationY = YY, this.setReflectionTextureMatrix(RY.e.RotationY(this._rotationY))
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
          constructor(YY, rY) {
            let DY, AY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              IY = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              OY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              aY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              uY = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              mY = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 5,
              VY = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              SY = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              lY = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
              TY = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : .8,
              eY = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 0,
              NY = arguments.length > 13 ? arguments[13] : void 0,
              XY = arguments.length > 14 ? arguments[14] : void 0;
            super(rY), this._delayedOnLoad = (0, FY.j)(this, BY), this.onLoadObservable = new vY.e, this.url = (0, FY.j)(this, cY, void 0), this.boundingBoxPosition = ((0, FY.j)(this, KY), (0, FY.j)(this, HY, RY.r.Zero())), this._boundingBoxSize = (0, FY.j)(this, zY), this._rotationY = 0, this._files = (0, FY.j)(this, ZY, null), this._forcedExtension = ((0, FY.j)(this, CY), (0, FY.j)(this, fY, null)), this._extensions = ((0, FY.j)(this, jY), (0, FY.j)(this, hY, null)), this._textureMatrix = ((0, FY.j)(this, dY), (0, FY.j)(this, JY, void 0)), this._textureMatrixRefraction = ((0, FY.j)(this, MY), (0, FY.j)(this, wY, new RY.e)), this._format = (0, FY.j)(this, bY), this._buffer = null, EY || (EY = !0, WY.d.prototype._partialLoadFile = function(YY, rY, DY, FY) {
              let AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
              this._loadFile(YY, (YY => {
                DY[rY] = YY, DY._internalCount++, 6 === DY._internalCount && FY(DY)
              }), void 0, void 0, !0, ((YY, rY) => {
                AY && YY && AY(YY.status + " " + YY.statusText, rY)
              }))
            }, WY.d.prototype._cascadeLoadFiles = function(YY, rY, DY) {
              let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
              const AY = [];
              AY._internalCount = 0;
              for (let IY = 0; IY < 6; IY++) this._partialLoadFile(DY[IY], IY, AY, rY, FY)
            }, WY.d.prototype._cascadeLoadImgs = function(YY, rY, DY, FY) {
              let AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                IY = arguments.length > 5 ? arguments[5] : void 0;
              const RY = [];
              RY._internalCount = 0;
              for (let OY = 0; OY < 6; OY++) this._partialLoadImg(FY[OY], OY, RY, YY, rY, DY, AY, IY)
            }, WY.d.prototype._partialLoadImg = function(YY, rY, DY, FY, AY, IY) {
              let RY = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                OY = arguments.length > 7 ? arguments[7] : void 0;
              const gY = (0, QY.c)();
              (0, yY.m)(YY, (YY => {
                DY[rY] = YY, DY._internalCount++, FY && FY.removePendingData(gY), 6 === DY._internalCount && IY && IY(AY, DY)
              }), ((YY, rY) => {
                FY && FY.removePendingData(gY), RY && RY(YY, rY)
              }), FY ? FY.offlineProvider : null, OY), FY && FY.addPendingData(gY)
            }, WY.d.prototype.createCubeTextureBase = function(YY, rY, DY, FY) {
              let AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                IY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                RY = arguments.length > 6 ? arguments[6] : void 0,
                OY = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                gY = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
                aY = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
                vY = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
                uY = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
                yY = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
                QY = arguments.length > 13 && void 0 !== arguments[13] ? arguments[13] : null,
                WY = arguments.length > 14 && void 0 !== arguments[14] && arguments[14],
                EY = arguments.length > 15 && void 0 !== arguments[15] ? arguments[15] : null;
              const mY = uY || new sY.c(this, 7);
              mY.isCube = !0, mY.url = YY, mY.generateMipMaps = !FY, mY._lodGenerationScale = aY, mY._lodGenerationOffset = vY, mY._useSRGBBuffer = !!WY && this._caps.supportSRGBBuffers && (this.version > 1 || this.isWebGPU || !!FY), mY !== uY && (mY.label = YY.substring(0, 60)), this._doNotHandleContextLost || (mY._extension = OY, mY._files = DY, mY._buffer = EY);
              const VY = YY;
              this._transformTextureUrl && !uY && (YY = this._transformTextureUrl(YY));
              const SY = OY ?? function(YY) {
                  const rY = YY.split("?")[0],
                    DY = rY.lastIndexOf(".");
                  return DY > -1 ? rY.substring(DY).toLowerCase() : ""
                }(YY),
                lY = (0, oY.b)(SY),
                TY = (YY, rY) => {
                  mY.dispose(), IY ? IY(YY, rY) : YY && iY.d.Warn(YY)
                },
                eY = (IY, uY) => {
                  YY === VY ? IY && TY(IY.status + " " + IY.statusText, uY) : (iY.d.Warn(`Failed to load ${YY}, falling back to the ${VY}`), this.createCubeTextureBase(VY, rY, DY, !!FY, AY, TY, RY, OY, gY, aY, vY, mY, yY, QY, WY, EY))
                };
              if (lY) lY.then((FY => {
                const IY = YY => {
                  yY && yY(mY, YY), FY.loadCubeData(YY, mY, gY, AY, ((YY, rY) => {
                    TY(YY, rY)
                  }))
                };
                EY ? IY(EY) : DY && 6 === DY.length ? FY.supportCascades ? this._cascadeLoadFiles(rY, (YY => IY(YY.map((YY => new Uint8Array(YY))))), DY, TY) : TY("Textures type does not support cascades.") : this._loadFile(YY, (YY => IY(new Uint8Array(YY))), void 0, rY ? rY.offlineProvider || null : void 0, !0, eY)
              }));
              else {
                if (!DY || 0 === DY.length) throw new Error("Cannot load cubemap because files were not defined, or the correct loader was not found.");
                this._cascadeLoadImgs(rY, mY, ((YY, rY) => {
                  QY && QY(YY, rY)
                }), DY, TY)
              }
              return this._internalTexturesCache.push(mY), mY
            }), this.name = YY, this.url = YY, this._noMipmap = IY, this.hasAlpha = !1, this.isCube = !0, this._textureMatrix = RY.e.Identity(), this.coordinatesMode = gY.i.CUBIC_MODE;
            let qY = null;
            null === AY || Array.isArray(AY) ? (this._noMipmap = IY, this._format = mY, this._createPolynomials = lY, DY = AY, this._loaderOptions = NY, this._useSRGBBuffer = XY, this._lodScale = TY, this._lodOffset = eY) : (DY = AY.extensions ?? null, this._noMipmap = AY.noMipmap ?? !1, OY = AY.files ?? null, qY = AY.buffer ?? null, this._format = AY.format ?? 5, VY = AY.prefiltered ?? !1, SY = AY.forcedExtension ?? null, this._createPolynomials = AY.createPolynomials ?? !1, this._lodScale = AY.lodScale ?? .8, this._lodOffset = AY.lodOffset ?? 0, this._loaderOptions = AY.loaderOptions, this._useSRGBBuffer = AY.useSRGBBuffer, this._sphericalPolynomialTargetSize = AY.sphericalPolynomialTargetSize ?? 0, aY = AY.onLoad ?? null, uY = AY.onError ?? null), (YY || OY) && this.updateURL(YY, SY, aY, VY, uY, DY, this.hT()?.useDelayedTextureLoading, OY, qY)
          }
          getClassName() {
            return "CubeTexture"
          }
          updateURL(YY) {
            let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              FY = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              IY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              RY = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
              OY = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              gY = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
            this.name && !this.name.startsWith("data:") || (this.name = YY), this.url = YY, rY && (this._forcedExtension = rY);
            const aY = YY.lastIndexOf("."),
              vY = rY || (aY > -1 ? YY.substring(aY).toLowerCase() : ""),
              uY = 0 === vY.indexOf(".dds"),
              sY = 0 === vY.indexOf(".env"),
              iY = 0 === vY.indexOf(".basis");
            if (sY ? (this.gammaSpace = !1, this._prefiltered = !1, this.anisotropicFilteringLevel = 1) : (this._prefiltered = FY, FY && (this.gammaSpace = !1, this.anisotropicFilteringLevel = 1)), OY) this._files = OY;
            else if (iY || sY || uY || IY || (IY = ["_px.jpg", "_py.jpg", "_pz.jpg", "_nx.jpg", "_ny.jpg", "_nz.jpg"]), this._files = this._files || [], this._files.length = 0, IY) {
              for (let rY = 0; rY < IY.length; rY++) this._files.push(YY + IY[rY]);
              this._extensions = IY
            }
            this._buffer = gY, RY ? (this.delayLoadState = 4, this._delayedOnLoad = DY, this._delayedOnError = AY) : this._loadTexture(DY, AY)
          }
          delayLoad(YY) {
            4 === this.delayLoadState && (YY && (this._forcedExtension = YY), this.delayLoadState = 1, this._loadTexture(this._delayedOnLoad, this._delayedOnError))
          }
          getReflectionTextureMatrix() {
            return this._textureMatrix
          }
          setReflectionTextureMatrix(YY) {
            if (YY.updateFlag === this._textureMatrix.updateFlag) return;
            if (YY.isIdentity() !== this._textureMatrix.isIdentity() && this.hT()?.markAllMaterialsAsDirty(1, (YY => -1 !== YY.getActiveTextures().indexOf(this))), this._textureMatrix = YY, !this.hT()?.useRightHandedSystem) return;
            const rY = RY.n.xy[0],
              DY = RY.n.Quaternion[0],
              FY = RY.n.xy[1];
            this._textureMatrix.decompose(rY, DY, FY), DY.z *= -1, DY.w *= -1, RY.e.ComposeToRef(rY, DY, FY, this._textureMatrixRefraction)
          }
          getRefractionTextureMatrix() {
            return this.hT()?.useRightHandedSystem ? this._textureMatrixRefraction : this._textureMatrix
          }
          _loadTexture() {
            let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            const DY = this.hT(),
              FY = this._texture;
            this._texture = this._getFromCache(this.url, this._noMipmap, void 0, void 0, this._useSRGBBuffer, this.isCube);
            const AY = () => {
                this.onLoadObservable.notifyObservers(this), FY && (FY.dispose(), this.hT()?.markAllMaterialsAsDirty(1)), YY && YY()
              },
              RY = (YY, DY) => {
                this._loadingError = !0, this._errorObject = {
                  message: YY,
                  exception: DY
                }, rY && rY(YY, DY), gY.i.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            this._texture ? this._texture.isReady ? IY.d.SetImmediate((() => AY())) : this._texture.onLoadedObservable.add((() => AY())) : (this._prefiltered ? this._texture = this._getEngine().createPrefilteredCubeTexture(this.url, DY, this._lodScale, this._lodOffset, YY, RY, this._format, this._forcedExtension, this._createPolynomials, this._buffer) : this._texture = this._getEngine().createCubeTexture(this.url, DY, this._files, this._noMipmap, YY, RY, this._format, this._forcedExtension, !1, this._lodScale, this._lodOffset, null, this._loaderOptions, !!this._useSRGBBuffer, this._buffer), this._texture?.onLoadedObservable.add((() => this.onLoadObservable.notifyObservers(this))))
          }
          clone() {
            let rY = 0;
            const DY = this.irradianceTexture,
              FY = uY.b.Clone((() => {
                const DY = new YY(this.url, this.hT() || this._getEngine(), this._extensions, this._noMipmap, this._files);
                return rY = DY.uniqueId, DY
              }), this);
            return FY.uniqueId = rY, DY && !this.irradianceTexture && (this.irradianceTexture = DY), FY
          }
        }, (() => {
          const IY = "function" === typeof Symbol && Symbol.metadata ? Object.create(NY[Symbol.metadata] ?? null) : void 0;
          rY = [(0, AY.M)()], DY = [(0, AY.J)()], aY = [(0, AY.J)()], mY = [(0, AY.M)("rotationY")], VY = [(0, AY.M)("files")], SY = [(0, AY.M)("forcedExtension")], lY = [(0, AY.M)("extensions")], TY = [(0, AY.z)("textureMatrix")], eY = [(0, AY.z)("textureMatrixRefraction")], (0, FY.i)(YY, null, aY, {
            kind: "getter",
            name: "boundingBoxSize",
            static: !1,
            private: !1,
            access: {
              has: YY => "boundingBoxSize" in YY,
              get: YY => YY.boundingBoxSize
            },
            metadata: IY
          }, null, BY), (0, FY.i)(YY, null, mY, {
            kind: "setter",
            name: "rotationY",
            static: !1,
            private: !1,
            access: {
              has: YY => "rotationY" in YY,
              set: (YY, rY) => {
                YY.rotationY = rY
              }
            },
            metadata: IY
          }, null, BY), (0, FY.i)(null, null, rY, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: YY => "url" in YY,
              get: YY => YY.url,
              set: (YY, rY) => {
                YY.url = rY
              }
            },
            metadata: IY
          }, cY, KY), (0, FY.i)(null, null, DY, {
            kind: "field",
            name: "boundingBoxPosition",
            static: !1,
            private: !1,
            access: {
              has: YY => "boundingBoxPosition" in YY,
              get: YY => YY.boundingBoxPosition,
              set: (YY, rY) => {
                YY.boundingBoxPosition = rY
              }
            },
            metadata: IY
          }, HY, zY), (0, FY.i)(null, null, VY, {
            kind: "field",
            name: "_files",
            static: !1,
            private: !1,
            access: {
              has: YY => "_files" in YY,
              get: YY => YY._files,
              set: (YY, rY) => {
                YY._files = rY
              }
            },
            metadata: IY
          }, ZY, CY), (0, FY.i)(null, null, SY, {
            kind: "field",
            name: "_forcedExtension",
            static: !1,
            private: !1,
            access: {
              has: YY => "_forcedExtension" in YY,
              get: YY => YY._forcedExtension,
              set: (YY, rY) => {
                YY._forcedExtension = rY
              }
            },
            metadata: IY
          }, fY, jY), (0, FY.i)(null, null, lY, {
            kind: "field",
            name: "_extensions",
            static: !1,
            private: !1,
            access: {
              has: YY => "_extensions" in YY,
              get: YY => YY._extensions,
              set: (YY, rY) => {
                YY._extensions = rY
              }
            },
            metadata: IY
          }, hY, dY), (0, FY.i)(null, null, TY, {
            kind: "field",
            name: "_textureMatrix",
            static: !1,
            private: !1,
            access: {
              has: YY => "_textureMatrix" in YY,
              get: YY => YY._textureMatrix,
              set: (YY, rY) => {
                YY._textureMatrix = rY
              }
            },
            metadata: IY
          }, JY, MY), (0, FY.i)(null, null, eY, {
            kind: "field",
            name: "_textureMatrixRefraction",
            static: !1,
            private: !1,
            access: {
              has: YY => "_textureMatrixRefraction" in YY,
              get: YY => YY._textureMatrixRefraction,
              set: (YY, rY) => {
                YY._textureMatrixRefraction = rY
              }
            },
            metadata: IY
          }, wY, bY), IY && Object.defineProperty(YY, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: IY
          })
        })(), YY
      })(),
      VY = !1;

    function SY(YY, rY, DY) {
      let FY = "";
      for (const AY of YY) FY += AY;
      return new mY(FY, rY, null, DY, YY)
    }

    function lY(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        FY = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const AY = rY.useDelayedTextureLoading;
      rY.useDelayedTextureLoading = !1;
      const IY = new mY(YY, rY, null, !1, null, null, null, void 0, !0, DY, FY);
      return rY.useDelayedTextureLoading = AY, IY
    }

    function TY(YY, rY, DY) {
      const FY = uY.b.Parse((() => {
        let FY = !1;
        return YY.prefiltered && (FY = YY.prefiltered), new mY(DY + (YY.url ?? YY.name), rY, YY.extensions, !1, YY.files || null, null, null, void 0, FY, YY.forcedExtension)
      }), YY, rY);
      if (YY.boundingBoxPosition && (FY.boundingBoxPosition = RY.r.FromArray(YY.boundingBoxPosition)), YY.boundingBoxSize && (FY.boundingBoxSize = RY.r.FromArray(YY.boundingBoxSize)), YY.animations)
        for (let AY = 0; AY < YY.animations.length; AY++) {
          const rY = YY.animations[AY],
            DY = (0, aY.e)("BABYLON.Animation");
          DY && FY.animations.push(DY.Parse(rY))
        }
      return FY
    }
    VY || (VY = !0, mY.CreateFromImages = SY, mY.CreateFromPrefilteredData = lY, mY.Parse = TY, gY.i._CubeTextureParser = TY, (0, aY.i)("BABYLON.CubeTexture", mY))
  },
  40372: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => aY
    });
    var FY = DY(38040),
      AY = DY(39596),
      IY = DY(39065),
      RY = DY(38982),
      OY = DY(38975);
    let gY = !1;
    class aY extends AY.i {
      constructor(YY, rY, DY) {
        let FY = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          aY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          vY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5,
          uY = arguments.length > 6 ? arguments[6] : void 0;
        const sY = !DY || DY._isScene;
        super(null, sY ? DY : DY?.LQ, sY ? !FY : DY, uY, aY, void 0, void 0, void 0, void 0, vY), gY || (gY = !0, RY.ThinEngine.prototype.createDynamicTexture = function(YY, rY, DY, FY) {
          const AY = new OY.c(this, 4);
          return AY.baseWidth = YY, AY.baseHeight = rY, DY && (YY = this.needPOTTextures ? (0, IY.f)(YY, this._caps.maxTextureSize) : YY, rY = this.needPOTTextures ? (0, IY.f)(rY, this._caps.maxTextureSize) : rY), AY.width = YY, AY.height = rY, AY.isReady = !1, AY.generateMipMaps = DY, AY.samplingMode = FY, this.updateTextureSamplingMode(FY, AY), this._internalTexturesCache.push(AY), AY
        }, RY.ThinEngine.prototype.updateDynamicTexture = function(YY, rY, DY) {
          let FY = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            AY = arguments.length > 4 ? arguments[4] : void 0,
            IY = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
          if (!YY) return;
          const RY = this._gl,
            OY = RY.TEXTURE_2D,
            gY = this._bindTextureDirectly(OY, YY, !0, IY);
          this._unpackFlipY(void 0 === DY ? YY.invertY : DY), FY && RY.pixelStorei(RY.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
          const aY = this._getWebGLTextureType(YY.type),
            vY = this._getInternalFormat(AY || YY.format),
            uY = this._getRGBABufferInternalSizedFormat(YY.type, vY);
          RY.texImage2D(OY, 0, uY, vY, aY, rY), YY.generateMipMaps && RY.generateMipmap(OY), gY || this._bindTextureDirectly(OY, null), FY && RY.pixelStorei(RY.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), AY && (YY.format = AY), YY._dynamicTextureSource = rY, YY._premulAlpha = FY, YY.invertY = DY || !1, YY.isReady = !0
        }), this.name = YY, this.wrapU = AY.i.CLAMP_ADDRESSMODE, this.wrapV = AY.i.CLAMP_ADDRESSMODE, this._generateMipMaps = FY;
        const iY = this._getEngine();
        if (!iY) return;
        if (rY.getContext) this._canvas = rY, this._ownCanvas = !1, this._texture = iY.createDynamicTexture(this._canvas.width, this._canvas.height, FY, aY);
        else {
          this._canvas = iY.createCanvas(1, 1), this._ownCanvas = !0;
          const YY = rY;
          YY.width || 0 === YY.width ? this._texture = iY.createDynamicTexture(YY.width, YY.height, FY, aY) : this._texture = iY.createDynamicTexture(rY, rY, FY, aY)
        }
        const yY = this.getSize();
        this._canvas.width !== yY.width && (this._canvas.width = yY.width), this._canvas.height !== yY.height && (this._canvas.height = yY.height), this._context = this._canvas.getContext("2d")
      }
      getClassName() {
        return "DynamicTexture"
      }
      get canRescale() {
        return !0
      }
      _recreate(YY) {
        this._canvas.width = YY.width, this._canvas.height = YY.height, this.releaseInternalTexture(), this._texture = this._getEngine().createDynamicTexture(YY.width, YY.height, this._generateMipMaps, this.samplingMode)
      }
      scale(YY) {
        const rY = this.getSize();
        rY.width *= YY, rY.height *= YY, this._recreate(rY)
      }
      scaleTo(YY, rY) {
        const DY = this.getSize();
        DY.width = YY, DY.height = rY, this._recreate(DY)
      }
      getContext() {
        return this._context
      }
      clear(YY) {
        const rY = this.getSize();
        YY && (this._context.fillStyle = YY), this._context.clearRect(0, 0, rY.width, rY.height)
      }
      update(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._texture && this._getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === YY || YY, rY, this._format || void 0, void 0, DY)
      }
      drawText(YY, rY, DY, FY, AY, IY, RY) {
        let OY = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const gY = this.getSize();
        if (IY && (this._context.fillStyle = IY, this._context.fillRect(0, 0, gY.width, gY.height)), this._context.font = FY, null === rY || void 0 === rY) {
          const DY = this._context.measureText(YY);
          rY = (gY.width - DY.width) / 2
        }
        if (null === DY || void 0 === DY) {
          const YY = parseInt(FY.replace(/\D/g, ""));
          DY = gY.height / 2 + YY / 3.65
        }
        this._context.fillStyle = AY || "", this._context.fillText(YY, rY, DY), OY && this.update(RY)
      }
      dispose() {
        super.dispose(), this._ownCanvas && this._canvas?.remove?.(), this._canvas = null, this._context = null
      }
      clone() {
        const YY = this.hT();
        if (!YY) return this;
        const rY = this.getSize(),
          DY = new aY(this.name, rY, YY, this._generateMipMaps);
        return DY.hasAlpha = this.hasAlpha, DY.level = this.level, DY.wrapU = this.wrapU, DY.wrapV = this.wrapV, DY
      }
      serialize() {
        const YY = this.hT();
        YY && !YY.isReady() && FY.d.Warn("The scene must be ready before serializing the dynamic texture");
        const rY = super.serialize();
        return aY._IsCanvasElement(this._canvas) && (rY.base64String = this._canvas.toDataURL()), rY.invertY = this._invertY, rY.samplingMode = this.samplingMode, rY
      }
      static _IsCanvasElement(YY) {
        return void 0 !== YY.toDataURL
      }
      _rebuild() {
        this.update()
      }
    }
  },
  40352: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => AY
    });
    var FY = DY(39596);
    class AY extends FY.i {
      get depth() {
        return this._depth
      }
      constructor(YY, rY, DY, AY, IY, RY) {
        let OY = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          gY = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          aY = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : FY.i.TRILINEAR_SAMPLINGMODE,
          vY = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          uY = arguments.length > 10 ? arguments[10] : void 0,
          sY = arguments.length > 11 ? arguments[11] : void 0;
        super(null, RY, !OY, gY), this.format = IY, this._texture = RY.ky().createRawTexture2DArray(YY, rY, DY, AY, IY, OY, gY, aY, null, vY, uY ?? 0, sY), this._depth = AY, this.is2DArray = !0
      }
      update(YY) {
        this.updateMipLevel(YY, 0)
      }
      updateMipLevel(YY, rY) {
        this._texture && this._getEngine().updateRawTexture2DArray(this._texture, YY, this._texture.format, this._texture.invertY, null, this._texture.type, rY)
      }
      static CreateRGBATexture(YY, rY, DY, FY, IY) {
        return new AY(YY, rY, DY, FY, 5, IY, !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0)
      }
    }
  },
  40347: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => FY.c
    });
    var FY = DY(39479);
    (0, FY.d)()
  },
  39209: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => FY.g
    });
    var FY = DY(39217);
    (0, FY.e)()
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);