export const id = 247;
export const ids = [247];
export const modules = {
  39402: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => lz,
      i: () => Mz
    });
    var Ez = bz(38060),
      nz = bz(39182),
      iz = bz(39376),
      lz = {};
    class Mz {
      constructor(zz) {
        this.attachedToElement = !1, this.attached = {}, this.camera = zz, this.checkInputs = () => {}
      }
      add(zz) {
        const uz = zz.getSimpleName();
        this.attached[uz] ? Ez.e.Warn("camera input of type " + uz + " already exists on camera") : (this.attached[uz] = zz, zz.camera = this.camera, zz.checkInputs && (this.checkInputs = this._addCheckInputs(zz.checkInputs.bind(zz))), this.attachedToElement && zz.attachControl(this.noPreventDefault))
      }
      remove(zz) {
        for (const uz in this.attached) {
          const bz = this.attached[uz];
          if (bz === zz) return bz.detachControl(), bz.camera = null, delete this.attached[uz], void this.rebuildInputCheck()
        }
      }
      removeByType(zz) {
        for (const uz in this.attached) {
          const bz = this.attached[uz];
          bz.getClassName() === zz && (bz.detachControl(), bz.camera = null, delete this.attached[uz], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(zz) {
        const uz = this.checkInputs;
        return () => {
          uz(), zz()
        }
      }
      attachInput(zz) {
        this.attachedToElement && zz.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          zz = !iz.d.ForceAttachControlToAlwaysPreventDefault && zz, this.attachedToElement = !0, this.noPreventDefault = zz;
          for (const uz in this.attached) this.attached[uz].attachControl(zz)
        }
      }
      detachElement() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const uz in this.attached) this.attached[uz].detachControl(), zz && (this.attached[uz].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const zz in this.attached) {
          const uz = this.attached[zz];
          uz.checkInputs && (this.checkInputs = this._addCheckInputs(uz.checkInputs.bind(uz)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(zz) {
        const uz = {};
        for (const bz in this.attached) {
          const zz = this.attached[bz],
            Ez = nz.e.Serialize(zz);
          uz[zz.getClassName()] = Ez
        }
        zz.inputsmgr = uz
      }
      parse(zz) {
        const uz = zz.inputsmgr;
        if (uz) {
          this.clear();
          for (const zz in uz) {
            const bz = lz[zz];
            if (bz) {
              const Ez = uz[zz],
                iz = nz.e.Parse((() => new bz), Ez, null);
              this.add(iz)
            }
          }
        } else
          for (const bz in this.attached) {
            const uz = lz[this.attached[bz].getClassName()];
            if (uz) {
              const Ez = nz.e.Parse((() => new uz), zz, null);
              this.remove(this.attached[bz]), this.add(Ez)
            }
          }
      }
    }
  },
  40334: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => fz
    });
    var Ez = bz(39170),
      nz = bz(39172),
      iz = bz(39071),
      lz = bz(36519),
      Mz = bz(39167),
      tz = bz(39636),
      Hz = bz(36564),
      Oz = bz(36547),
      pz = bz(39182),
      dz = bz(39011),
      Fz = bz(38060),
      Zz = bz(39202),
      Rz = bz(37335),
      Kz = bz(39241);
    var wz = bz(39079);
    let Xz = !1;
    let fz = (() => {
        var zz;
        let uz, bz, Hz, fz, sz, rz, oz, Nz, vz, xz = Mz.b,
          Jz = [],
          Az = [],
          Tz = [],
          Lz = [],
          Pz = [],
          Gz = [],
          az = [],
          Vz = [],
          mz = [],
          qz = [],
          hz = [],
          Uz = [],
          cz = [],
          gz = [],
          Sz = [];
        return zz = class extends xz {
          set boundingBoxSize(zz) {
            if (this._boundingBoxSize && this._boundingBoxSize.equals(zz)) return;
            this._boundingBoxSize = zz;
            const uz = this.XT();
            uz && uz.markAllMaterialsAsDirty(1)
          }
          get boundingBoxSize() {
            return this._boundingBoxSize
          }
          set rotationY(zz) {
            this._rotationY = zz, this.setReflectionTextureMatrix(lz.d.RotationY(this._rotationY))
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
          constructor(zz, uz) {
            let bz, nz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              iz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Mz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              Hz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              pz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              fz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 5,
              sz = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              rz = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              oz = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
              Nz = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : .8,
              vz = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 0,
              xz = arguments.length > 13 ? arguments[13] : void 0,
              yz = arguments.length > 14 ? arguments[14] : void 0;
            super(uz), this._delayedOnLoad = (0, Ez.j)(this, Jz), this.onLoadObservable = new Oz.b, this.url = (0, Ez.j)(this, Az, void 0), this.boundingBoxPosition = ((0, Ez.j)(this, Tz), (0, Ez.j)(this, Lz, lz.n.Zero())), this._boundingBoxSize = (0, Ez.j)(this, Pz), this._rotationY = 0, this._files = (0, Ez.j)(this, Gz, null), this._forcedExtension = ((0, Ez.j)(this, az), (0, Ez.j)(this, Vz, null)), this._extensions = ((0, Ez.j)(this, mz), (0, Ez.j)(this, qz, null)), this._textureMatrix = ((0, Ez.j)(this, hz), (0, Ez.j)(this, Uz, void 0)), this._textureMatrixRefraction = ((0, Ez.j)(this, cz), (0, Ez.j)(this, gz, new lz.d)), this._format = (0, Ez.j)(this, Sz), this._buffer = null, Xz || (Xz = !0, wz.b.prototype._partialLoadFile = function(zz, uz, bz, Ez) {
              let nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
              this._loadFile(zz, (zz => {
                bz[uz] = zz, bz._internalCount++, 6 === bz._internalCount && Ez(bz)
              }), void 0, void 0, !0, ((zz, uz) => {
                nz && zz && nz(zz.status + " " + zz.statusText, uz)
              }))
            }, wz.b.prototype._cascadeLoadFiles = function(zz, uz, bz) {
              let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
              const nz = [];
              nz._internalCount = 0;
              for (let iz = 0; iz < 6; iz++) this._partialLoadFile(bz[iz], iz, nz, uz, Ez)
            }, wz.b.prototype._cascadeLoadImgs = function(zz, uz, bz, Ez) {
              let nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                iz = arguments.length > 5 ? arguments[5] : void 0;
              const lz = [];
              lz._internalCount = 0;
              for (let Mz = 0; Mz < 6; Mz++) this._partialLoadImg(Ez[Mz], Mz, lz, zz, uz, bz, nz, iz)
            }, wz.b.prototype._partialLoadImg = function(zz, uz, bz, Ez, nz, iz) {
              let lz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                Mz = arguments.length > 7 ? arguments[7] : void 0;
              const tz = (0, Rz.c)();
              (0, Zz.t)(zz, (zz => {
                bz[uz] = zz, bz._internalCount++, Ez && Ez.removePendingData(tz), 6 === bz._internalCount && iz && iz(nz, bz)
              }), ((zz, uz) => {
                Ez && Ez.removePendingData(tz), lz && lz(zz, uz)
              }), Ez ? Ez.offlineProvider : null, Mz), Ez && Ez.addPendingData(tz)
            }, wz.b.prototype.createCubeTextureBase = function(zz, uz, bz, Ez) {
              let nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                iz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                lz = arguments.length > 6 ? arguments[6] : void 0,
                Mz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                tz = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
                Hz = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
                Oz = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
                pz = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
                Zz = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
                Rz = arguments.length > 13 && void 0 !== arguments[13] ? arguments[13] : null,
                wz = arguments.length > 14 && void 0 !== arguments[14] && arguments[14],
                Xz = arguments.length > 15 && void 0 !== arguments[15] ? arguments[15] : null;
              const fz = pz || new dz.c(this, 7);
              fz.isCube = !0, fz.url = zz, fz.generateMipMaps = !Ez, fz._lodGenerationScale = Hz, fz._lodGenerationOffset = Oz, fz._useSRGBBuffer = !!wz && this._caps.supportSRGBBuffers && (this.version > 1 || this.isWebGPU || !!Ez), fz !== pz && (fz.label = zz.substring(0, 60)), this._doNotHandleContextLost || (fz._extension = Mz, fz._files = bz, fz._buffer = Xz);
              const sz = zz;
              this._transformTextureUrl && !pz && (zz = this._transformTextureUrl(zz));
              const rz = Mz ?? function(zz) {
                  const uz = zz.split("?")[0],
                    bz = uz.lastIndexOf(".");
                  return bz > -1 ? uz.substring(bz).toLowerCase() : ""
                }(zz),
                oz = (0, Kz.c)(rz),
                Nz = (zz, uz) => {
                  fz.dispose(), iz ? iz(zz, uz) : zz && Fz.e.Warn(zz)
                },
                vz = (iz, pz) => {
                  zz === sz ? iz && Nz(iz.status + " " + iz.statusText, pz) : (Fz.e.Warn(`Failed to load ${zz}, falling back to the ${sz}`), this.createCubeTextureBase(sz, uz, bz, !!Ez, nz, Nz, lz, Mz, tz, Hz, Oz, fz, Zz, Rz, wz, Xz))
                };
              if (oz) oz.then((Ez => {
                const iz = zz => {
                  Zz && Zz(fz, zz), Ez.loadCubeData(zz, fz, tz, nz, ((zz, uz) => {
                    Nz(zz, uz)
                  }))
                };
                Xz ? iz(Xz) : bz && 6 === bz.length ? Ez.supportCascades ? this._cascadeLoadFiles(uz, (zz => iz(zz.map((zz => new Uint8Array(zz))))), bz, Nz) : Nz("Textures type does not support cascades.") : this._loadFile(zz, (zz => iz(new Uint8Array(zz))), void 0, uz ? uz.offlineProvider || null : void 0, !0, vz)
              }));
              else {
                if (!bz || 0 === bz.length) throw new Error("Cannot load cubemap because files were not defined, or the correct loader was not found.");
                this._cascadeLoadImgs(uz, fz, ((zz, uz) => {
                  Rz && Rz(zz, uz)
                }), bz, Nz)
              }
              return this._internalTexturesCache.push(fz), fz
            }), this.name = zz, this.url = zz, this._noMipmap = iz, this.hasAlpha = !1, this.isCube = !0, this._textureMatrix = lz.d.Identity(), this.coordinatesMode = tz.e.CUBIC_MODE;
            let Dz = null;
            null === nz || Array.isArray(nz) ? (this._noMipmap = iz, this._format = fz, this._createPolynomials = oz, bz = nz, this._loaderOptions = xz, this._useSRGBBuffer = yz, this._lodScale = Nz, this._lodOffset = vz) : (bz = nz.extensions ?? null, this._noMipmap = nz.noMipmap ?? !1, Mz = nz.files ?? null, Dz = nz.buffer ?? null, this._format = nz.format ?? 5, sz = nz.prefiltered ?? !1, rz = nz.forcedExtension ?? null, this._createPolynomials = nz.createPolynomials ?? !1, this._lodScale = nz.lodScale ?? .8, this._lodOffset = nz.lodOffset ?? 0, this._loaderOptions = nz.loaderOptions, this._useSRGBBuffer = nz.useSRGBBuffer, this._sphericalPolynomialTargetSize = nz.sphericalPolynomialTargetSize ?? 0, Hz = nz.onLoad ?? null, pz = nz.onError ?? null), (zz || Mz) && this.updateURL(zz, rz, Hz, sz, pz, bz, this.XT()?.useDelayedTextureLoading, Mz, Dz)
          }
          getClassName() {
            return "CubeTexture"
          }
          updateURL(zz) {
            let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              Ez = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              iz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              lz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
              Mz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              tz = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
            this.name && !this.name.startsWith("data:") || (this.name = zz), this.url = zz, uz && (this._forcedExtension = uz);
            const Hz = zz.lastIndexOf("."),
              Oz = uz || (Hz > -1 ? zz.substring(Hz).toLowerCase() : ""),
              pz = 0 === Oz.indexOf(".dds"),
              dz = 0 === Oz.indexOf(".env"),
              Fz = 0 === Oz.indexOf(".basis");
            if (dz ? (this.gammaSpace = !1, this._prefiltered = !1, this.anisotropicFilteringLevel = 1) : (this._prefiltered = Ez, Ez && (this.gammaSpace = !1, this.anisotropicFilteringLevel = 1)), Mz) this._files = Mz;
            else if (Fz || dz || pz || iz || (iz = ["_px.jpg", "_py.jpg", "_pz.jpg", "_nx.jpg", "_ny.jpg", "_nz.jpg"]), this._files = this._files || [], this._files.length = 0, iz) {
              for (let uz = 0; uz < iz.length; uz++) this._files.push(zz + iz[uz]);
              this._extensions = iz
            }
            this._buffer = tz, lz ? (this.delayLoadState = 4, this._delayedOnLoad = bz, this._delayedOnError = nz) : this._loadTexture(bz, nz)
          }
          delayLoad(zz) {
            4 === this.delayLoadState && (zz && (this._forcedExtension = zz), this.delayLoadState = 1, this._loadTexture(this._delayedOnLoad, this._delayedOnError))
          }
          getReflectionTextureMatrix() {
            return this._textureMatrix
          }
          setReflectionTextureMatrix(zz) {
            if (zz.updateFlag === this._textureMatrix.updateFlag) return;
            if (zz.isIdentity() !== this._textureMatrix.isIdentity() && this.XT()?.markAllMaterialsAsDirty(1, (zz => -1 !== zz.getActiveTextures().indexOf(this))), this._textureMatrix = zz, !this.XT()?.useRightHandedSystem) return;
            const uz = lz.l.ER[0],
              bz = lz.l.Quaternion[0],
              Ez = lz.l.ER[1];
            this._textureMatrix.decompose(uz, bz, Ez), bz.z *= -1, bz.w *= -1, lz.d.ComposeToRef(uz, bz, Ez, this._textureMatrixRefraction)
          }
          getRefractionTextureMatrix() {
            return this.XT()?.useRightHandedSystem ? this._textureMatrixRefraction : this._textureMatrix
          }
          _loadTexture() {
            let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            const bz = this.XT(),
              Ez = this._texture;
            this._texture = this._getFromCache(this.url, this._noMipmap, void 0, void 0, this._useSRGBBuffer, this.isCube);
            const nz = () => {
                this.onLoadObservable.notifyObservers(this), Ez && (Ez.dispose(), this.XT()?.markAllMaterialsAsDirty(1)), zz && zz()
              },
              lz = (zz, bz) => {
                this._loadingError = !0, this._errorObject = {
                  message: zz,
                  exception: bz
                }, uz && uz(zz, bz), tz.e.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            this._texture ? this._texture.isReady ? iz.c.SetImmediate((() => nz())) : this._texture.onLoadedObservable.add((() => nz())) : (this._prefiltered ? this._texture = this._getEngine().createPrefilteredCubeTexture(this.url, bz, this._lodScale, this._lodOffset, zz, lz, this._format, this._forcedExtension, this._createPolynomials, this._buffer) : this._texture = this._getEngine().createCubeTexture(this.url, bz, this._files, this._noMipmap, zz, lz, this._format, this._forcedExtension, !1, this._lodScale, this._lodOffset, null, this._loaderOptions, !!this._useSRGBBuffer, this._buffer), this._texture?.onLoadedObservable.add((() => this.onLoadObservable.notifyObservers(this))))
          }
          clone() {
            let uz = 0;
            const bz = this.irradianceTexture,
              Ez = pz.e.Clone((() => {
                const bz = new zz(this.url, this.XT() || this._getEngine(), this._extensions, this._noMipmap, this._files);
                return uz = bz.uniqueId, bz
              }), this);
            return Ez.uniqueId = uz, bz && !this.irradianceTexture && (this.irradianceTexture = bz), Ez
          }
        }, (() => {
          const iz = "function" === typeof Symbol && Symbol.metadata ? Object.create(xz[Symbol.metadata] ?? null) : void 0;
          uz = [(0, nz.G)()], bz = [(0, nz.D)()], Hz = [(0, nz.D)()], fz = [(0, nz.G)("rotationY")], sz = [(0, nz.G)("files")], rz = [(0, nz.G)("forcedExtension")], oz = [(0, nz.G)("extensions")], Nz = [(0, nz.w)("textureMatrix")], vz = [(0, nz.w)("textureMatrixRefraction")], (0, Ez.h)(zz, null, Hz, {
            kind: "getter",
            name: "boundingBoxSize",
            static: !1,
            private: !1,
            access: {
              has: zz => "boundingBoxSize" in zz,
              get: zz => zz.boundingBoxSize
            },
            metadata: iz
          }, null, Jz), (0, Ez.h)(zz, null, fz, {
            kind: "setter",
            name: "rotationY",
            static: !1,
            private: !1,
            access: {
              has: zz => "rotationY" in zz,
              set: (zz, uz) => {
                zz.rotationY = uz
              }
            },
            metadata: iz
          }, null, Jz), (0, Ez.h)(null, null, uz, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: zz => "url" in zz,
              get: zz => zz.url,
              set: (zz, uz) => {
                zz.url = uz
              }
            },
            metadata: iz
          }, Az, Tz), (0, Ez.h)(null, null, bz, {
            kind: "field",
            name: "boundingBoxPosition",
            static: !1,
            private: !1,
            access: {
              has: zz => "boundingBoxPosition" in zz,
              get: zz => zz.boundingBoxPosition,
              set: (zz, uz) => {
                zz.boundingBoxPosition = uz
              }
            },
            metadata: iz
          }, Lz, Pz), (0, Ez.h)(null, null, sz, {
            kind: "field",
            name: "_files",
            static: !1,
            private: !1,
            access: {
              has: zz => "_files" in zz,
              get: zz => zz._files,
              set: (zz, uz) => {
                zz._files = uz
              }
            },
            metadata: iz
          }, Gz, az), (0, Ez.h)(null, null, rz, {
            kind: "field",
            name: "_forcedExtension",
            static: !1,
            private: !1,
            access: {
              has: zz => "_forcedExtension" in zz,
              get: zz => zz._forcedExtension,
              set: (zz, uz) => {
                zz._forcedExtension = uz
              }
            },
            metadata: iz
          }, Vz, mz), (0, Ez.h)(null, null, oz, {
            kind: "field",
            name: "_extensions",
            static: !1,
            private: !1,
            access: {
              has: zz => "_extensions" in zz,
              get: zz => zz._extensions,
              set: (zz, uz) => {
                zz._extensions = uz
              }
            },
            metadata: iz
          }, qz, hz), (0, Ez.h)(null, null, Nz, {
            kind: "field",
            name: "_textureMatrix",
            static: !1,
            private: !1,
            access: {
              has: zz => "_textureMatrix" in zz,
              get: zz => zz._textureMatrix,
              set: (zz, uz) => {
                zz._textureMatrix = uz
              }
            },
            metadata: iz
          }, Uz, cz), (0, Ez.h)(null, null, vz, {
            kind: "field",
            name: "_textureMatrixRefraction",
            static: !1,
            private: !1,
            access: {
              has: zz => "_textureMatrixRefraction" in zz,
              get: zz => zz._textureMatrixRefraction,
              set: (zz, uz) => {
                zz._textureMatrixRefraction = uz
              }
            },
            metadata: iz
          }, gz, Sz), iz && Object.defineProperty(zz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: iz
          })
        })(), zz
      })(),
      sz = !1;

    function rz(zz, uz, bz) {
      let Ez = "";
      for (const nz of zz) Ez += nz;
      return new fz(Ez, uz, null, bz, zz)
    }

    function oz(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        Ez = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const nz = uz.useDelayedTextureLoading;
      uz.useDelayedTextureLoading = !1;
      const iz = new fz(zz, uz, null, !1, null, null, null, void 0, !0, bz, Ez);
      return uz.useDelayedTextureLoading = nz, iz
    }

    function Nz(zz, uz, bz) {
      const Ez = pz.e.Parse((() => {
        let Ez = !1;
        return zz.prefiltered && (Ez = zz.prefiltered), new fz(bz + (zz.url ?? zz.name), uz, zz.extensions, !1, zz.files || null, null, null, void 0, Ez, zz.forcedExtension)
      }), zz, uz);
      if (zz.boundingBoxPosition && (Ez.boundingBoxPosition = lz.n.FromArray(zz.boundingBoxPosition)), zz.boundingBoxSize && (Ez.boundingBoxSize = lz.n.FromArray(zz.boundingBoxSize)), zz.animations)
        for (let nz = 0; nz < zz.animations.length; nz++) {
          const uz = zz.animations[nz],
            bz = (0, Hz.b)("BABYLON.Animation");
          bz && Ez.animations.push(bz.Parse(uz))
        }
      return Ez
    }
    sz || (sz = !0, fz.CreateFromImages = rz, fz.CreateFromPrefilteredData = oz, fz.Parse = Nz, tz.e._CubeTextureParser = Nz, (0, Hz.c)("BABYLON.CubeTexture", fz))
  },
  40379: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Hz
    });
    var Ez = bz(38060),
      nz = bz(39636),
      iz = bz(39118),
      lz = bz(39022),
      Mz = bz(39011);
    let tz = !1;
    class Hz extends nz.e {
      constructor(zz, uz, bz) {
        let Ez = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Hz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          Oz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5,
          pz = arguments.length > 6 ? arguments[6] : void 0;
        const dz = !bz || bz._isScene;
        super(null, dz ? bz : bz?.tK, dz ? !Ez : bz, pz, Hz, void 0, void 0, void 0, void 0, Oz), tz || (tz = !0, lz.ThinEngine.prototype.createDynamicTexture = function(zz, uz, bz, Ez) {
          const nz = new Mz.c(this, 4);
          return nz.baseWidth = zz, nz.baseHeight = uz, bz && (zz = this.needPOTTextures ? (0, iz.e)(zz, this._caps.maxTextureSize) : zz, uz = this.needPOTTextures ? (0, iz.e)(uz, this._caps.maxTextureSize) : uz), nz.width = zz, nz.height = uz, nz.isReady = !1, nz.generateMipMaps = bz, nz.samplingMode = Ez, this.updateTextureSamplingMode(Ez, nz), this._internalTexturesCache.push(nz), nz
        }, lz.ThinEngine.prototype.updateDynamicTexture = function(zz, uz, bz) {
          let Ez = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            nz = arguments.length > 4 ? arguments[4] : void 0,
            iz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
          if (!zz) return;
          const lz = this._gl,
            Mz = lz.TEXTURE_2D,
            tz = this._bindTextureDirectly(Mz, zz, !0, iz);
          this._unpackFlipY(void 0 === bz ? zz.invertY : bz), Ez && lz.pixelStorei(lz.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
          const Hz = this._getWebGLTextureType(zz.type),
            Oz = this._getInternalFormat(nz || zz.format),
            pz = this._getRGBABufferInternalSizedFormat(zz.type, Oz);
          lz.texImage2D(Mz, 0, pz, Oz, Hz, uz), zz.generateMipMaps && lz.generateMipmap(Mz), tz || this._bindTextureDirectly(Mz, null), Ez && lz.pixelStorei(lz.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), nz && (zz.format = nz), zz._dynamicTextureSource = uz, zz._premulAlpha = Ez, zz.invertY = bz || !1, zz.isReady = !0
        }), this.name = zz, this.wrapU = nz.e.CLAMP_ADDRESSMODE, this.wrapV = nz.e.CLAMP_ADDRESSMODE, this._generateMipMaps = Ez;
        const Fz = this._getEngine();
        if (!Fz) return;
        if (uz.getContext) this._canvas = uz, this._ownCanvas = !1, this._texture = Fz.createDynamicTexture(this._canvas.width, this._canvas.height, Ez, Hz);
        else {
          this._canvas = Fz.createCanvas(1, 1), this._ownCanvas = !0;
          const zz = uz;
          zz.width || 0 === zz.width ? this._texture = Fz.createDynamicTexture(zz.width, zz.height, Ez, Hz) : this._texture = Fz.createDynamicTexture(uz, uz, Ez, Hz)
        }
        const Zz = this.getSize();
        this._canvas.width !== Zz.width && (this._canvas.width = Zz.width), this._canvas.height !== Zz.height && (this._canvas.height = Zz.height), this._context = this._canvas.getContext("2d")
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
        const uz = this.getSize();
        uz.width *= zz, uz.height *= zz, this._recreate(uz)
      }
      scaleTo(zz, uz) {
        const bz = this.getSize();
        bz.width = zz, bz.height = uz, this._recreate(bz)
      }
      getContext() {
        return this._context
      }
      clear(zz) {
        const uz = this.getSize();
        zz && (this._context.fillStyle = zz), this._context.clearRect(0, 0, uz.width, uz.height)
      }
      update(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._texture && this._getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === zz || zz, uz, this._format || void 0, void 0, bz)
      }
      drawText(zz, uz, bz, Ez, nz, iz, lz) {
        let Mz = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const tz = this.getSize();
        if (iz && (this._context.fillStyle = iz, this._context.fillRect(0, 0, tz.width, tz.height)), this._context.font = Ez, null === uz || void 0 === uz) {
          const bz = this._context.measureText(zz);
          uz = (tz.width - bz.width) / 2
        }
        if (null === bz || void 0 === bz) {
          const zz = parseInt(Ez.replace(/\D/g, ""));
          bz = tz.height / 2 + zz / 3.65
        }
        this._context.fillStyle = nz || "", this._context.fillText(zz, uz, bz), Mz && this.update(lz)
      }
      dispose() {
        super.dispose(), this._ownCanvas && this._canvas?.remove?.(), this._canvas = null, this._context = null
      }
      clone() {
        const zz = this.XT();
        if (!zz) return this;
        const uz = this.getSize(),
          bz = new Hz(this.name, uz, zz, this._generateMipMaps);
        return bz.hasAlpha = this.hasAlpha, bz.level = this.level, bz.wrapU = this.wrapU, bz.wrapV = this.wrapV, bz
      }
      serialize() {
        const zz = this.XT();
        zz && !zz.isReady() && Ez.e.Warn("The scene must be ready before serializing the dynamic texture");
        const uz = super.serialize();
        return Hz._IsCanvasElement(this._canvas) && (uz.base64String = this._canvas.toDataURL()), uz.invertY = this._invertY, uz.samplingMode = this.samplingMode, uz
      }
      static _IsCanvasElement(zz) {
        return void 0 !== zz.toDataURL
      }
      _rebuild() {
        this.update()
      }
    }
  },
  40354: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => nz
    });
    var Ez = bz(39636);
    class nz extends Ez.e {
      get depth() {
        return this._depth
      }
      constructor(zz, uz, bz, nz, iz, lz) {
        let Mz = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          tz = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          Hz = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Ez.e.TRILINEAR_SAMPLINGMODE,
          Oz = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          pz = arguments.length > 10 ? arguments[10] : void 0,
          dz = arguments.length > 11 ? arguments[11] : void 0;
        super(null, lz, !Mz, tz), this.format = iz, this._texture = lz.uR().createRawTexture2DArray(zz, uz, bz, nz, iz, Mz, tz, Hz, null, Oz, pz ?? 0, dz), this._depth = nz, this.is2DArray = !0
      }
      update(zz) {
        this.updateMipLevel(zz, 0)
      }
      updateMipLevel(zz, uz) {
        this._texture && this._getEngine().updateRawTexture2DArray(this._texture, zz, this._texture.format, this._texture.invertY, null, this._texture.type, uz)
      }
      static CreateRGBATexture(zz, uz, bz, Ez, iz) {
        return new nz(zz, uz, bz, Ez, 5, iz, !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0)
      }
    }
  },
  40350: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Ez.e
    });
    var Ez = bz(39537);
    (0, Ez.h)()
  },
  39250: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Ez.e
    });
    var Ez = bz(39253);
    (0, Ez.b)()
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);