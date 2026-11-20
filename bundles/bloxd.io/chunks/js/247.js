export const id = 247;
export const ids = [247];
export const modules = {
  39402: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Oz,
      g: () => oz
    });
    var Fz = sz(38097),
      Wz = sz(39181),
      Xz = sz(39370),
      Oz = {};
    class oz {
      constructor(zz) {
        this.attachedToElement = !1, this.attached = {}, this.camera = zz, this.checkInputs = () => {}
      }
      add(zz) {
        const tz = zz.getSimpleName();
        this.attached[tz] ? Fz.e.Warn("camera input of type " + tz + " already exists on camera") : (this.attached[tz] = zz, zz.camera = this.camera, zz.checkInputs && (this.checkInputs = this._addCheckInputs(zz.checkInputs.bind(zz))), this.attachedToElement && zz.attachControl(this.noPreventDefault))
      }
      remove(zz) {
        for (const tz in this.attached) {
          const sz = this.attached[tz];
          if (sz === zz) return sz.detachControl(), sz.camera = null, delete this.attached[tz], void this.rebuildInputCheck()
        }
      }
      removeByType(zz) {
        for (const tz in this.attached) {
          const sz = this.attached[tz];
          sz.getClassName() === zz && (sz.detachControl(), sz.camera = null, delete this.attached[tz], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(zz) {
        const tz = this.checkInputs;
        return () => {
          tz(), zz()
        }
      }
      attachInput(zz) {
        this.attachedToElement && zz.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          zz = !Xz.b.ForceAttachControlToAlwaysPreventDefault && zz, this.attachedToElement = !0, this.noPreventDefault = zz;
          for (const tz in this.attached) this.attached[tz].attachControl(zz)
        }
      }
      detachElement() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const tz in this.attached) this.attached[tz].detachControl(), zz && (this.attached[tz].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const zz in this.attached) {
          const tz = this.attached[zz];
          tz.checkInputs && (this.checkInputs = this._addCheckInputs(tz.checkInputs.bind(tz)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(zz) {
        const tz = {};
        for (const sz in this.attached) {
          const zz = this.attached[sz],
            Fz = Wz.e.Serialize(zz);
          tz[zz.getClassName()] = Fz
        }
        zz.inputsmgr = tz
      }
      parse(zz) {
        const tz = zz.inputsmgr;
        if (tz) {
          this.clear();
          for (const zz in tz) {
            const sz = Oz[zz];
            if (sz) {
              const Fz = tz[zz],
                Xz = Wz.e.Parse((() => new sz), Fz, null);
              this.add(Xz)
            }
          }
        } else
          for (const sz in this.attached) {
            const tz = Oz[this.attached[sz].getClassName()];
            if (tz) {
              const Fz = Wz.e.Parse((() => new tz), zz, null);
              this.remove(this.attached[sz]), this.add(Fz)
            }
          }
      }
    }
  },
  40216: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Pz
    });
    var Fz = sz(39167),
      Wz = sz(39170),
      Xz = sz(39074),
      Oz = sz(36475),
      oz = sz(39163),
      vz = sz(39617),
      Uz = sz(36518),
      Kz = sz(36505),
      uz = sz(39181),
      Nz = sz(39021),
      bz = sz(38097),
      wz = sz(39205),
      Dz = sz(37333),
      gz = sz(39245);
    var Hz = sz(39077);
    let Bz = !1;
    let Pz = (() => {
        var zz;
        let tz, sz, Uz, Pz, rz, Yz, xz, mz, Jz, Iz = oz.b,
          Cz = [],
          ez = [],
          Zz = [],
          Gz = [],
          Tz = [],
          cz = [],
          jz = [],
          Az = [],
          yz = [],
          Mz = [],
          dz = [],
          hz = [],
          Qz = [],
          kz = [],
          iz = [];
        return zz = class extends Iz {
          set boundingBoxSize(zz) {
            if (this._boundingBoxSize && this._boundingBoxSize.equals(zz)) return;
            this._boundingBoxSize = zz;
            const tz = this.aJ();
            tz && tz.markAllMaterialsAsDirty(1)
          }
          get boundingBoxSize() {
            return this._boundingBoxSize
          }
          set rotationY(zz) {
            this._rotationY = zz, this.setReflectionTextureMatrix(Oz.e.RotationY(this._rotationY))
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
          constructor(zz, tz) {
            let sz, Wz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              Xz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              oz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              Uz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              uz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              Pz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 5,
              rz = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              Yz = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              xz = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
              mz = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : .8,
              Jz = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 0,
              Iz = arguments.length > 13 ? arguments[13] : void 0,
              Lz = arguments.length > 14 ? arguments[14] : void 0;
            super(tz), this._delayedOnLoad = (0, Fz.k)(this, Cz), this.onLoadObservable = new Kz.c, this.url = (0, Fz.k)(this, ez, void 0), this.boundingBoxPosition = ((0, Fz.k)(this, Zz), (0, Fz.k)(this, Gz, Oz.p.Zero())), this._boundingBoxSize = (0, Fz.k)(this, Tz), this._rotationY = 0, this._files = (0, Fz.k)(this, cz, null), this._forcedExtension = ((0, Fz.k)(this, jz), (0, Fz.k)(this, Az, null)), this._extensions = ((0, Fz.k)(this, yz), (0, Fz.k)(this, Mz, null)), this._textureMatrix = ((0, Fz.k)(this, dz), (0, Fz.k)(this, hz, void 0)), this._textureMatrixRefraction = ((0, Fz.k)(this, Qz), (0, Fz.k)(this, kz, new Oz.e)), this._format = (0, Fz.k)(this, iz), this._buffer = null, Bz || (Bz = !0, Hz.b.prototype._partialLoadFile = function(zz, tz, sz, Fz) {
              let Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
              this._loadFile(zz, (zz => {
                sz[tz] = zz, sz._internalCount++, 6 === sz._internalCount && Fz(sz)
              }), void 0, void 0, !0, ((zz, tz) => {
                Wz && zz && Wz(zz.status + " " + zz.statusText, tz)
              }))
            }, Hz.b.prototype._cascadeLoadFiles = function(zz, tz, sz) {
              let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
              const Wz = [];
              Wz._internalCount = 0;
              for (let Xz = 0; Xz < 6; Xz++) this._partialLoadFile(sz[Xz], Xz, Wz, tz, Fz)
            }, Hz.b.prototype._cascadeLoadImgs = function(zz, tz, sz, Fz) {
              let Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                Xz = arguments.length > 5 ? arguments[5] : void 0;
              const Oz = [];
              Oz._internalCount = 0;
              for (let oz = 0; oz < 6; oz++) this._partialLoadImg(Fz[oz], oz, Oz, zz, tz, sz, Wz, Xz)
            }, Hz.b.prototype._partialLoadImg = function(zz, tz, sz, Fz, Wz, Xz) {
              let Oz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                oz = arguments.length > 7 ? arguments[7] : void 0;
              const vz = (0, Dz.d)();
              (0, wz.p)(zz, (zz => {
                sz[tz] = zz, sz._internalCount++, Fz && Fz.removePendingData(vz), 6 === sz._internalCount && Xz && Xz(Wz, sz)
              }), ((zz, tz) => {
                Fz && Fz.removePendingData(vz), Oz && Oz(zz, tz)
              }), Fz ? Fz.offlineProvider : null, oz), Fz && Fz.addPendingData(vz)
            }, Hz.b.prototype.createCubeTextureBase = function(zz, tz, sz, Fz) {
              let Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                Xz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                Oz = arguments.length > 6 ? arguments[6] : void 0,
                oz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                vz = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
                Uz = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
                Kz = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
                uz = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
                wz = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
                Dz = arguments.length > 13 && void 0 !== arguments[13] ? arguments[13] : null,
                Hz = arguments.length > 14 && void 0 !== arguments[14] && arguments[14],
                Bz = arguments.length > 15 && void 0 !== arguments[15] ? arguments[15] : null;
              const Pz = uz || new Nz.d(this, 7);
              Pz.isCube = !0, Pz.url = zz, Pz.generateMipMaps = !Fz, Pz._lodGenerationScale = Uz, Pz._lodGenerationOffset = Kz, Pz._useSRGBBuffer = !!Hz && this._caps.supportSRGBBuffers && (this.version > 1 || this.isWebGPU || !!Fz), Pz !== uz && (Pz.label = zz.substring(0, 60)), this._doNotHandleContextLost || (Pz._extension = oz, Pz._files = sz, Pz._buffer = Bz);
              const rz = zz;
              this._transformTextureUrl && !uz && (zz = this._transformTextureUrl(zz));
              const Yz = oz ?? function(zz) {
                  const tz = zz.split("?")[0],
                    sz = tz.lastIndexOf(".");
                  return sz > -1 ? tz.substring(sz).toLowerCase() : ""
                }(zz),
                xz = (0, gz.e)(Yz),
                mz = (zz, tz) => {
                  Pz.dispose(), Xz ? Xz(zz, tz) : zz && bz.e.Warn(zz)
                },
                Jz = (Xz, uz) => {
                  zz === rz ? Xz && mz(Xz.status + " " + Xz.statusText, uz) : (bz.e.Warn(`Failed to load ${zz}, falling back to the ${rz}`), this.createCubeTextureBase(rz, tz, sz, !!Fz, Wz, mz, Oz, oz, vz, Uz, Kz, Pz, wz, Dz, Hz, Bz))
                };
              if (xz) xz.then((Fz => {
                const Xz = zz => {
                  wz && wz(Pz, zz), Fz.loadCubeData(zz, Pz, vz, Wz, ((zz, tz) => {
                    mz(zz, tz)
                  }))
                };
                Bz ? Xz(Bz) : sz && 6 === sz.length ? Fz.supportCascades ? this._cascadeLoadFiles(tz, (zz => Xz(zz.map((zz => new Uint8Array(zz))))), sz, mz) : mz("Textures type does not support cascades.") : this._loadFile(zz, (zz => Xz(new Uint8Array(zz))), void 0, tz ? tz.offlineProvider || null : void 0, !0, Jz)
              }));
              else {
                if (!sz || 0 === sz.length) throw new Error("Cannot load cubemap because files were not defined, or the correct loader was not found.");
                this._cascadeLoadImgs(tz, Pz, ((zz, tz) => {
                  Dz && Dz(zz, tz)
                }), sz, mz)
              }
              return this._internalTexturesCache.push(Pz), Pz
            }), this.name = zz, this.url = zz, this._noMipmap = Xz, this.hasAlpha = !1, this.isCube = !0, this._textureMatrix = Oz.e.Identity(), this.coordinatesMode = vz.g.CUBIC_MODE;
            let lz = null;
            null === Wz || Array.isArray(Wz) ? (this._noMipmap = Xz, this._format = Pz, this._createPolynomials = xz, sz = Wz, this._loaderOptions = Iz, this._useSRGBBuffer = Lz, this._lodScale = mz, this._lodOffset = Jz) : (sz = Wz.extensions ?? null, this._noMipmap = Wz.noMipmap ?? !1, oz = Wz.files ?? null, lz = Wz.buffer ?? null, this._format = Wz.format ?? 5, rz = Wz.prefiltered ?? !1, Yz = Wz.forcedExtension ?? null, this._createPolynomials = Wz.createPolynomials ?? !1, this._lodScale = Wz.lodScale ?? .8, this._lodOffset = Wz.lodOffset ?? 0, this._loaderOptions = Wz.loaderOptions, this._useSRGBBuffer = Wz.useSRGBBuffer, this._sphericalPolynomialTargetSize = Wz.sphericalPolynomialTargetSize ?? 0, Uz = Wz.onLoad ?? null, uz = Wz.onError ?? null), (zz || oz) && this.updateURL(zz, Yz, Uz, rz, uz, sz, this.aJ()?.useDelayedTextureLoading, oz, lz)
          }
          getClassName() {
            return "CubeTexture"
          }
          updateURL(zz) {
            let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              Fz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              Xz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              Oz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
              oz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              vz = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
            this.name && !this.name.startsWith("data:") || (this.name = zz), this.url = zz, tz && (this._forcedExtension = tz);
            const Uz = zz.lastIndexOf("."),
              Kz = tz || (Uz > -1 ? zz.substring(Uz).toLowerCase() : ""),
              uz = 0 === Kz.indexOf(".dds"),
              Nz = 0 === Kz.indexOf(".env"),
              bz = 0 === Kz.indexOf(".basis");
            if (Nz ? (this.gammaSpace = !1, this._prefiltered = !1, this.anisotropicFilteringLevel = 1) : (this._prefiltered = Fz, Fz && (this.gammaSpace = !1, this.anisotropicFilteringLevel = 1)), oz) this._files = oz;
            else if (bz || Nz || uz || Xz || (Xz = ["_px.jpg", "_py.jpg", "_pz.jpg", "_nx.jpg", "_ny.jpg", "_nz.jpg"]), this._files = this._files || [], this._files.length = 0, Xz) {
              for (let tz = 0; tz < Xz.length; tz++) this._files.push(zz + Xz[tz]);
              this._extensions = Xz
            }
            this._buffer = vz, Oz ? (this.delayLoadState = 4, this._delayedOnLoad = sz, this._delayedOnError = Wz) : this._loadTexture(sz, Wz)
          }
          delayLoad(zz) {
            4 === this.delayLoadState && (zz && (this._forcedExtension = zz), this.delayLoadState = 1, this._loadTexture(this._delayedOnLoad, this._delayedOnError))
          }
          getReflectionTextureMatrix() {
            return this._textureMatrix
          }
          setReflectionTextureMatrix(zz) {
            if (zz.updateFlag === this._textureMatrix.updateFlag) return;
            if (zz.isIdentity() !== this._textureMatrix.isIdentity() && this.aJ()?.markAllMaterialsAsDirty(1, (zz => -1 !== zz.getActiveTextures().indexOf(this))), this._textureMatrix = zz, !this.aJ()?.useRightHandedSystem) return;
            const tz = Oz.m.XD[0],
              sz = Oz.m.Quaternion[0],
              Fz = Oz.m.XD[1];
            this._textureMatrix.decompose(tz, sz, Fz), sz.z *= -1, sz.w *= -1, Oz.e.ComposeToRef(tz, sz, Fz, this._textureMatrixRefraction)
          }
          getRefractionTextureMatrix() {
            return this.aJ()?.useRightHandedSystem ? this._textureMatrixRefraction : this._textureMatrix
          }
          _loadTexture() {
            let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            const sz = this.aJ(),
              Fz = this._texture;
            this._texture = this._getFromCache(this.url, this._noMipmap, void 0, void 0, this._useSRGBBuffer, this.isCube);
            const Wz = () => {
                this.onLoadObservable.notifyObservers(this), Fz && (Fz.dispose(), this.aJ()?.markAllMaterialsAsDirty(1)), zz && zz()
              },
              Oz = (zz, sz) => {
                this._loadingError = !0, this._errorObject = {
                  message: zz,
                  exception: sz
                }, tz && tz(zz, sz), vz.g.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            this._texture ? this._texture.isReady ? Xz.b.SetImmediate((() => Wz())) : this._texture.onLoadedObservable.add((() => Wz())) : (this._prefiltered ? this._texture = this._getEngine().createPrefilteredCubeTexture(this.url, sz, this._lodScale, this._lodOffset, zz, Oz, this._format, this._forcedExtension, this._createPolynomials, this._buffer) : this._texture = this._getEngine().createCubeTexture(this.url, sz, this._files, this._noMipmap, zz, Oz, this._format, this._forcedExtension, !1, this._lodScale, this._lodOffset, null, this._loaderOptions, !!this._useSRGBBuffer, this._buffer), this._texture?.onLoadedObservable.add((() => this.onLoadObservable.notifyObservers(this))))
          }
          clone() {
            let tz = 0;
            const sz = this.irradianceTexture,
              Fz = uz.e.Clone((() => {
                const sz = new zz(this.url, this.aJ() || this._getEngine(), this._extensions, this._noMipmap, this._files);
                return tz = sz.uniqueId, sz
              }), this);
            return Fz.uniqueId = tz, sz && !this.irradianceTexture && (this.irradianceTexture = sz), Fz
          }
        }, (() => {
          const Xz = "function" === typeof Symbol && Symbol.metadata ? Object.create(Iz[Symbol.metadata] ?? null) : void 0;
          tz = [(0, Wz.J)()], sz = [(0, Wz.H)()], Uz = [(0, Wz.H)()], Pz = [(0, Wz.J)("rotationY")], rz = [(0, Wz.J)("files")], Yz = [(0, Wz.J)("forcedExtension")], xz = [(0, Wz.J)("extensions")], mz = [(0, Wz.w)("textureMatrix")], Jz = [(0, Wz.w)("textureMatrixRefraction")], (0, Fz.h)(zz, null, Uz, {
            kind: "getter",
            name: "boundingBoxSize",
            static: !1,
            private: !1,
            access: {
              has: zz => "boundingBoxSize" in zz,
              get: zz => zz.boundingBoxSize
            },
            metadata: Xz
          }, null, Cz), (0, Fz.h)(zz, null, Pz, {
            kind: "setter",
            name: "rotationY",
            static: !1,
            private: !1,
            access: {
              has: zz => "rotationY" in zz,
              set: (zz, tz) => {
                zz.rotationY = tz
              }
            },
            metadata: Xz
          }, null, Cz), (0, Fz.h)(null, null, tz, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: zz => "url" in zz,
              get: zz => zz.url,
              set: (zz, tz) => {
                zz.url = tz
              }
            },
            metadata: Xz
          }, ez, Zz), (0, Fz.h)(null, null, sz, {
            kind: "field",
            name: "boundingBoxPosition",
            static: !1,
            private: !1,
            access: {
              has: zz => "boundingBoxPosition" in zz,
              get: zz => zz.boundingBoxPosition,
              set: (zz, tz) => {
                zz.boundingBoxPosition = tz
              }
            },
            metadata: Xz
          }, Gz, Tz), (0, Fz.h)(null, null, rz, {
            kind: "field",
            name: "_files",
            static: !1,
            private: !1,
            access: {
              has: zz => "_files" in zz,
              get: zz => zz._files,
              set: (zz, tz) => {
                zz._files = tz
              }
            },
            metadata: Xz
          }, cz, jz), (0, Fz.h)(null, null, Yz, {
            kind: "field",
            name: "_forcedExtension",
            static: !1,
            private: !1,
            access: {
              has: zz => "_forcedExtension" in zz,
              get: zz => zz._forcedExtension,
              set: (zz, tz) => {
                zz._forcedExtension = tz
              }
            },
            metadata: Xz
          }, Az, yz), (0, Fz.h)(null, null, xz, {
            kind: "field",
            name: "_extensions",
            static: !1,
            private: !1,
            access: {
              has: zz => "_extensions" in zz,
              get: zz => zz._extensions,
              set: (zz, tz) => {
                zz._extensions = tz
              }
            },
            metadata: Xz
          }, Mz, dz), (0, Fz.h)(null, null, mz, {
            kind: "field",
            name: "_textureMatrix",
            static: !1,
            private: !1,
            access: {
              has: zz => "_textureMatrix" in zz,
              get: zz => zz._textureMatrix,
              set: (zz, tz) => {
                zz._textureMatrix = tz
              }
            },
            metadata: Xz
          }, hz, Qz), (0, Fz.h)(null, null, Jz, {
            kind: "field",
            name: "_textureMatrixRefraction",
            static: !1,
            private: !1,
            access: {
              has: zz => "_textureMatrixRefraction" in zz,
              get: zz => zz._textureMatrixRefraction,
              set: (zz, tz) => {
                zz._textureMatrixRefraction = tz
              }
            },
            metadata: Xz
          }, kz, iz), Xz && Object.defineProperty(zz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Xz
          })
        })(), zz
      })(),
      rz = !1;

    function Yz(zz, tz, sz) {
      let Fz = "";
      for (const Wz of zz) Fz += Wz;
      return new Pz(Fz, tz, null, sz, zz)
    }

    function xz(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        Fz = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const Wz = tz.useDelayedTextureLoading;
      tz.useDelayedTextureLoading = !1;
      const Xz = new Pz(zz, tz, null, !1, null, null, null, void 0, !0, sz, Fz);
      return tz.useDelayedTextureLoading = Wz, Xz
    }

    function mz(zz, tz, sz) {
      const Fz = uz.e.Parse((() => {
        let Fz = !1;
        return zz.prefiltered && (Fz = zz.prefiltered), new Pz(sz + (zz.url ?? zz.name), tz, zz.extensions, !1, zz.files || null, null, null, void 0, Fz, zz.forcedExtension)
      }), zz, tz);
      if (zz.boundingBoxPosition && (Fz.boundingBoxPosition = Oz.p.FromArray(zz.boundingBoxPosition)), zz.boundingBoxSize && (Fz.boundingBoxSize = Oz.p.FromArray(zz.boundingBoxSize)), zz.animations)
        for (let Wz = 0; Wz < zz.animations.length; Wz++) {
          const tz = zz.animations[Wz],
            sz = (0, Uz.e)("BABYLON.Animation");
          sz && Fz.animations.push(sz.Parse(tz))
        }
      return Fz
    }
    rz || (rz = !0, Pz.CreateFromImages = Yz, Pz.CreateFromPrefilteredData = xz, Pz.Parse = mz, vz.g._CubeTextureParser = mz, (0, Uz.g)("BABYLON.CubeTexture", Pz))
  },
  40253: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Uz
    });
    var Fz = sz(38097),
      Wz = sz(39617),
      Xz = sz(39111),
      Oz = sz(39031),
      oz = sz(39021);
    let vz = !1;
    class Uz extends Wz.g {
      constructor(zz, tz, sz) {
        let Fz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Uz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          Kz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5,
          uz = arguments.length > 6 ? arguments[6] : void 0;
        const Nz = !sz || sz._isScene;
        super(null, Nz ? sz : sz?.Kg, Nz ? !Fz : sz, uz, Uz, void 0, void 0, void 0, void 0, Kz), vz || (vz = !0, Oz.ThinEngine.prototype.createDynamicTexture = function(zz, tz, sz, Fz) {
          const Wz = new oz.d(this, 4);
          return Wz.baseWidth = zz, Wz.baseHeight = tz, sz && (zz = this.needPOTTextures ? (0, Xz.e)(zz, this._caps.maxTextureSize) : zz, tz = this.needPOTTextures ? (0, Xz.e)(tz, this._caps.maxTextureSize) : tz), Wz.width = zz, Wz.height = tz, Wz.isReady = !1, Wz.generateMipMaps = sz, Wz.samplingMode = Fz, this.updateTextureSamplingMode(Fz, Wz), this._internalTexturesCache.push(Wz), Wz
        }, Oz.ThinEngine.prototype.updateDynamicTexture = function(zz, tz, sz) {
          let Fz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            Wz = arguments.length > 4 ? arguments[4] : void 0,
            Xz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
          if (!zz) return;
          const Oz = this._gl,
            oz = Oz.TEXTURE_2D,
            vz = this._bindTextureDirectly(oz, zz, !0, Xz);
          this._unpackFlipY(void 0 === sz ? zz.invertY : sz), Fz && Oz.pixelStorei(Oz.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
          const Uz = this._getWebGLTextureType(zz.type),
            Kz = this._getInternalFormat(Wz || zz.format),
            uz = this._getRGBABufferInternalSizedFormat(zz.type, Kz);
          Oz.texImage2D(oz, 0, uz, Kz, Uz, tz), zz.generateMipMaps && Oz.generateMipmap(oz), vz || this._bindTextureDirectly(oz, null), Fz && Oz.pixelStorei(Oz.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), Wz && (zz.format = Wz), zz._dynamicTextureSource = tz, zz._premulAlpha = Fz, zz.invertY = sz || !1, zz.isReady = !0
        }), this.name = zz, this.wrapU = Wz.g.CLAMP_ADDRESSMODE, this.wrapV = Wz.g.CLAMP_ADDRESSMODE, this._generateMipMaps = Fz;
        const bz = this._getEngine();
        if (!bz) return;
        if (tz.getContext) this._canvas = tz, this._ownCanvas = !1, this._texture = bz.createDynamicTexture(this._canvas.width, this._canvas.height, Fz, Uz);
        else {
          this._canvas = bz.createCanvas(1, 1), this._ownCanvas = !0;
          const zz = tz;
          zz.width || 0 === zz.width ? this._texture = bz.createDynamicTexture(zz.width, zz.height, Fz, Uz) : this._texture = bz.createDynamicTexture(tz, tz, Fz, Uz)
        }
        const wz = this.getSize();
        this._canvas.width !== wz.width && (this._canvas.width = wz.width), this._canvas.height !== wz.height && (this._canvas.height = wz.height), this._context = this._canvas.getContext("2d")
      }
      getClassName() {
        return "DynamicTexture"
      }
      get canRescale() {
        return !0
      }
      _recreate(zz) {
        this._canvas.width = zz.width, this._canvas.height = zz.height, this.releaseInternalTexture(), this._texture = this._getEngine().createDynamicTexture(zz.width, zz.height, this._generateMipMaps, this.samplingMode)
      }
      scale(zz) {
        const tz = this.getSize();
        tz.width *= zz, tz.height *= zz, this._recreate(tz)
      }
      scaleTo(zz, tz) {
        const sz = this.getSize();
        sz.width = zz, sz.height = tz, this._recreate(sz)
      }
      getContext() {
        return this._context
      }
      clear(zz) {
        const tz = this.getSize();
        zz && (this._context.fillStyle = zz), this._context.clearRect(0, 0, tz.width, tz.height)
      }
      update(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._texture && this._getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === zz || zz, tz, this._format || void 0, void 0, sz)
      }
      drawText(zz, tz, sz, Fz, Wz, Xz, Oz) {
        let oz = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const vz = this.getSize();
        if (Xz && (this._context.fillStyle = Xz, this._context.fillRect(0, 0, vz.width, vz.height)), this._context.font = Fz, null === tz || void 0 === tz) {
          const sz = this._context.measureText(zz);
          tz = (vz.width - sz.width) / 2
        }
        if (null === sz || void 0 === sz) {
          const zz = parseInt(Fz.replace(/\D/g, ""));
          sz = vz.height / 2 + zz / 3.65
        }
        this._context.fillStyle = Wz || "", this._context.fillText(zz, tz, sz), oz && this.update(Oz)
      }
      dispose() {
        super.dispose(), this._ownCanvas && this._canvas?.remove?.(), this._canvas = null, this._context = null
      }
      clone() {
        const zz = this.aJ();
        if (!zz) return this;
        const tz = this.getSize(),
          sz = new Uz(this.name, tz, zz, this._generateMipMaps);
        return sz.hasAlpha = this.hasAlpha, sz.level = this.level, sz.wrapU = this.wrapU, sz.wrapV = this.wrapV, sz
      }
      serialize() {
        const zz = this.aJ();
        zz && !zz.isReady() && Fz.e.Warn("The scene must be ready before serializing the dynamic texture");
        const tz = super.serialize();
        return Uz._IsCanvasElement(this._canvas) && (tz.base64String = this._canvas.toDataURL()), tz.invertY = this._invertY, tz.samplingMode = this.samplingMode, tz
      }
      static _IsCanvasElement(zz) {
        return void 0 !== zz.toDataURL
      }
      _rebuild() {
        this.update()
      }
    }
  },
  40234: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Wz
    });
    var Fz = sz(39617);
    class Wz extends Fz.g {
      get depth() {
        return this._depth
      }
      constructor(zz, tz, sz, Wz, Xz, Oz) {
        let oz = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          vz = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          Uz = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Fz.g.TRILINEAR_SAMPLINGMODE,
          Kz = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          uz = arguments.length > 10 ? arguments[10] : void 0,
          Nz = arguments.length > 11 ? arguments[11] : void 0;
        super(null, Oz, !oz, vz), this.format = Xz, this._texture = Oz.FD().createRawTexture2DArray(zz, tz, sz, Wz, Xz, oz, vz, Uz, null, Kz, uz ?? 0, Nz), this._depth = Wz, this.is2DArray = !0
      }
      update(zz) {
        this.updateMipLevel(zz, 0)
      }
      updateMipLevel(zz, tz) {
        this._texture && this._getEngine().updateRawTexture2DArray(this._texture, zz, this._texture.format, this._texture.invertY, null, this._texture.type, tz)
      }
      static CreateRGBATexture(zz, tz, sz, Fz, Xz) {
        return new Wz(zz, tz, sz, Fz, 5, Xz, !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0)
      }
    }
  },
  40225: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Fz.d
    });
    var Fz = sz(39515);
    (0, Fz.g)()
  },
  39252: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Fz.i
    });
    var Fz = sz(39256);
    (0, Fz.e)()
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);