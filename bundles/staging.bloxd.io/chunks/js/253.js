export const id = 253;
export const ids = [253];
export const modules = {
  39804: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => bk,
      i: () => rk
    });
    var Dk = ik(38272),
      fk = ik(39585),
      Sk = ik(39782),
      bk = {};
    class rk {
      constructor(kk) {
        this.attachedToElement = !1, this.attached = {}, this.camera = kk, this.checkInputs = () => {}
      }
      add(kk) {
        const ek = kk.getSimpleName();
        this.attached[ek] ? Dk.b.Warn("camera input of type " + ek + " already exists on camera") : (this.attached[ek] = kk, kk.camera = this.camera, kk.checkInputs && (this.checkInputs = this._addCheckInputs(kk.checkInputs.bind(kk))), this.attachedToElement && kk.attachControl(this.noPreventDefault))
      }
      remove(kk) {
        for (const ek in this.attached) {
          const ik = this.attached[ek];
          if (ik === kk) return ik.detachControl(), ik.camera = null, delete this.attached[ek], void this.rebuildInputCheck()
        }
      }
      removeByType(kk) {
        for (const ek in this.attached) {
          const ik = this.attached[ek];
          ik.getClassName() === kk && (ik.detachControl(), ik.camera = null, delete this.attached[ek], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(kk) {
        const ek = this.checkInputs;
        return () => {
          ek(), kk()
        }
      }
      attachInput(kk) {
        this.attachedToElement && kk.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          kk = !Sk.e.ForceAttachControlToAlwaysPreventDefault && kk, this.attachedToElement = !0, this.noPreventDefault = kk;
          for (const ek in this.attached) this.attached[ek].attachControl(kk)
        }
      }
      detachElement() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const ek in this.attached) this.attached[ek].detachControl(), kk && (this.attached[ek].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const kk in this.attached) {
          const ek = this.attached[kk];
          ek.checkInputs && (this.checkInputs = this._addCheckInputs(ek.checkInputs.bind(ek)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(kk) {
        const ek = {};
        for (const ik in this.attached) {
          const kk = this.attached[ik],
            Dk = fk.b.Serialize(kk);
          ek[kk.getClassName()] = Dk
        }
        kk.inputsmgr = ek
      }
      parse(kk) {
        const ek = kk.inputsmgr;
        if (ek) {
          this.clear();
          for (const kk in ek) {
            const ik = bk[kk];
            if (ik) {
              const Dk = ek[kk],
                Sk = fk.b.Parse((() => new ik), Dk, null);
              this.add(Sk)
            }
          }
        } else
          for (const ik in this.attached) {
            const ek = bk[this.attached[ik].getClassName()];
            if (ek) {
              const Dk = fk.b.Parse((() => new ek), kk, null);
              this.remove(this.attached[ik]), this.add(Dk)
            }
          }
      }
    }
  },
  40711: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => yk
    });
    var Dk = ik(39566),
      fk = ik(39570),
      Sk = ik(39458),
      bk = ik(36698),
      rk = ik(39564),
      Pk = ik(40053),
      mk = ik(36734),
      Mk = ik(36726),
      Kk = ik(39585),
      xk = ik(39391),
      nk = ik(38272),
      Uk = ik(39607),
      Hk = ik(37497),
      wk = ik(39646);
    var lk = ik(39467);
    let pk = !1;
    let yk = (() => {
        var kk;
        let ek, ik, mk, yk, Yk, Lk, Ck, Ak, jk, sk = rk.b,
          dk = [],
          Vk = [],
          Fk = [],
          uk = [],
          qk = [],
          Ik = [],
          zk = [],
          Qk = [],
          vk = [],
          Ek = [],
          hk = [],
          ak = [],
          Wk = [],
          tk = [],
          Xk = [];
        return kk = class extends sk {
          set boundingBoxSize(kk) {
            if (this._boundingBoxSize && this._boundingBoxSize.equals(kk)) return;
            this._boundingBoxSize = kk;
            const ek = this.XF();
            ek && ek.markAllMaterialsAsDirty(1)
          }
          get boundingBoxSize() {
            return this._boundingBoxSize
          }
          set rotationY(kk) {
            this._rotationY = kk, this.setReflectionTextureMatrix(bk.b.RotationY(this._rotationY))
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
          constructor(kk, ek) {
            let ik, fk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              Sk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              rk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              mk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              Kk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              yk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 5,
              Yk = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              Lk = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              Ck = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
              Ak = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : .8,
              jk = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 0,
              sk = arguments.length > 13 ? arguments[13] : void 0,
              Bk = arguments.length > 14 ? arguments[14] : void 0;
            super(ek), this._delayedOnLoad = (0, Dk.e)(this, dk), this.onLoadObservable = new Mk.c, this.url = (0, Dk.e)(this, Vk, void 0), this.boundingBoxPosition = ((0, Dk.e)(this, Fk), (0, Dk.e)(this, uk, bk.o.Zero())), this._boundingBoxSize = (0, Dk.e)(this, qk), this._rotationY = 0, this._files = (0, Dk.e)(this, Ik, null), this._forcedExtension = ((0, Dk.e)(this, zk), (0, Dk.e)(this, Qk, null)), this._extensions = ((0, Dk.e)(this, vk), (0, Dk.e)(this, Ek, null)), this._textureMatrix = ((0, Dk.e)(this, hk), (0, Dk.e)(this, ak, void 0)), this._textureMatrixRefraction = ((0, Dk.e)(this, Wk), (0, Dk.e)(this, tk, new bk.b)), this._format = (0, Dk.e)(this, Xk), this._buffer = null, pk || (pk = !0, lk.c.prototype._partialLoadFile = function(kk, ek, ik, Dk) {
              let fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
              this._loadFile(kk, (kk => {
                ik[ek] = kk, ik._internalCount++, 6 === ik._internalCount && Dk(ik)
              }), void 0, void 0, !0, ((kk, ek) => {
                fk && kk && fk(kk.status + " " + kk.statusText, ek)
              }))
            }, lk.c.prototype._cascadeLoadFiles = function(kk, ek, ik) {
              let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
              const fk = [];
              fk._internalCount = 0;
              for (let Sk = 0; Sk < 6; Sk++) this._partialLoadFile(ik[Sk], Sk, fk, ek, Dk)
            }, lk.c.prototype._cascadeLoadImgs = function(kk, ek, ik, Dk) {
              let fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                Sk = arguments.length > 5 ? arguments[5] : void 0;
              const bk = [];
              bk._internalCount = 0;
              for (let rk = 0; rk < 6; rk++) this._partialLoadImg(Dk[rk], rk, bk, kk, ek, ik, fk, Sk)
            }, lk.c.prototype._partialLoadImg = function(kk, ek, ik, Dk, fk, Sk) {
              let bk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                rk = arguments.length > 7 ? arguments[7] : void 0;
              const Pk = (0, Hk.b)();
              (0, Uk.o)(kk, (kk => {
                ik[ek] = kk, ik._internalCount++, Dk && Dk.removePendingData(Pk), 6 === ik._internalCount && Sk && Sk(fk, ik)
              }), ((kk, ek) => {
                Dk && Dk.removePendingData(Pk), bk && bk(kk, ek)
              }), Dk ? Dk.offlineProvider : null, rk), Dk && Dk.addPendingData(Pk)
            }, lk.c.prototype.createCubeTextureBase = function(kk, ek, ik, Dk) {
              let fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                Sk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                bk = arguments.length > 6 ? arguments[6] : void 0,
                rk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                Pk = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
                mk = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
                Mk = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
                Kk = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
                Uk = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
                Hk = arguments.length > 13 && void 0 !== arguments[13] ? arguments[13] : null,
                lk = arguments.length > 14 && void 0 !== arguments[14] && arguments[14],
                pk = arguments.length > 15 && void 0 !== arguments[15] ? arguments[15] : null;
              const yk = Kk || new xk.b(this, 7);
              yk.isCube = !0, yk.url = kk, yk.generateMipMaps = !Dk, yk._lodGenerationScale = mk, yk._lodGenerationOffset = Mk, yk._useSRGBBuffer = !!lk && this._caps.supportSRGBBuffers && (this.version > 1 || this.isWebGPU || !!Dk), yk !== Kk && (yk.label = kk.substring(0, 60)), this._doNotHandleContextLost || (yk._extension = rk, yk._files = ik, yk._buffer = pk);
              const Yk = kk;
              this._transformTextureUrl && !Kk && (kk = this._transformTextureUrl(kk));
              const Lk = rk ?? function(kk) {
                  const ek = kk.split("?")[0],
                    ik = ek.lastIndexOf(".");
                  return ik > -1 ? ek.substring(ik).toLowerCase() : ""
                }(kk),
                Ck = (0, wk.b)(Lk),
                Ak = (kk, ek) => {
                  yk.dispose(), Sk ? Sk(kk, ek) : kk && nk.b.Warn(kk)
                },
                jk = (Sk, Kk) => {
                  kk === Yk ? Sk && Ak(Sk.status + " " + Sk.statusText, Kk) : (nk.b.Warn(`Failed to load ${kk}, falling back to the ${Yk}`), this.createCubeTextureBase(Yk, ek, ik, !!Dk, fk, Ak, bk, rk, Pk, mk, Mk, yk, Uk, Hk, lk, pk))
                };
              if (Ck) Ck.then((Dk => {
                const Sk = kk => {
                  Uk && Uk(yk, kk), Dk.loadCubeData(kk, yk, Pk, fk, ((kk, ek) => {
                    Ak(kk, ek)
                  }))
                };
                pk ? Sk(pk) : ik && 6 === ik.length ? Dk.supportCascades ? this._cascadeLoadFiles(ek, (kk => Sk(kk.map((kk => new Uint8Array(kk))))), ik, Ak) : Ak("Textures type does not support cascades.") : this._loadFile(kk, (kk => Sk(new Uint8Array(kk))), void 0, ek ? ek.offlineProvider || null : void 0, !0, jk)
              }));
              else {
                if (!ik || 0 === ik.length) throw new Error("Cannot load cubemap because files were not defined, or the correct loader was not found.");
                this._cascadeLoadImgs(ek, yk, ((kk, ek) => {
                  Hk && Hk(kk, ek)
                }), ik, Ak)
              }
              return this._internalTexturesCache.push(yk), yk
            }), this.name = kk, this.url = kk, this._noMipmap = Sk, this.hasAlpha = !1, this.isCube = !0, this._textureMatrix = bk.b.Identity(), this.coordinatesMode = Pk.f.CUBIC_MODE;
            let ck = null;
            null === fk || Array.isArray(fk) ? (this._noMipmap = Sk, this._format = yk, this._createPolynomials = Ck, ik = fk, this._loaderOptions = sk, this._useSRGBBuffer = Bk, this._lodScale = Ak, this._lodOffset = jk) : (ik = fk.extensions ?? null, this._noMipmap = fk.noMipmap ?? !1, rk = fk.files ?? null, ck = fk.buffer ?? null, this._format = fk.format ?? 5, Yk = fk.prefiltered ?? !1, Lk = fk.forcedExtension ?? null, this._createPolynomials = fk.createPolynomials ?? !1, this._lodScale = fk.lodScale ?? .8, this._lodOffset = fk.lodOffset ?? 0, this._loaderOptions = fk.loaderOptions, this._useSRGBBuffer = fk.useSRGBBuffer, this._sphericalPolynomialTargetSize = fk.sphericalPolynomialTargetSize ?? 0, mk = fk.onLoad ?? null, Kk = fk.onError ?? null), (kk || rk) && this.updateURL(kk, Lk, mk, Yk, Kk, ik, this.XF()?.useDelayedTextureLoading, rk, ck)
          }
          getClassName() {
            return "CubeTexture"
          }
          updateURL(kk) {
            let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              Dk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              Sk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              bk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
              rk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              Pk = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
            this.name && !this.name.startsWith("data:") || (this.name = kk), this.url = kk, ek && (this._forcedExtension = ek);
            const mk = kk.lastIndexOf("."),
              Mk = ek || (mk > -1 ? kk.substring(mk).toLowerCase() : ""),
              Kk = 0 === Mk.indexOf(".dds"),
              xk = 0 === Mk.indexOf(".env"),
              nk = 0 === Mk.indexOf(".basis");
            if (xk ? (this.gammaSpace = !1, this._prefiltered = !1, this.anisotropicFilteringLevel = 1) : (this._prefiltered = Dk, Dk && (this.gammaSpace = !1, this.anisotropicFilteringLevel = 1)), rk) this._files = rk;
            else if (nk || xk || Kk || Sk || (Sk = ["_px.jpg", "_py.jpg", "_pz.jpg", "_nx.jpg", "_ny.jpg", "_nz.jpg"]), this._files = this._files || [], this._files.length = 0, Sk) {
              for (let ek = 0; ek < Sk.length; ek++) this._files.push(kk + Sk[ek]);
              this._extensions = Sk
            }
            this._buffer = Pk, bk ? (this.delayLoadState = 4, this._delayedOnLoad = ik, this._delayedOnError = fk) : this._loadTexture(ik, fk)
          }
          delayLoad(kk) {
            4 === this.delayLoadState && (kk && (this._forcedExtension = kk), this.delayLoadState = 1, this._loadTexture(this._delayedOnLoad, this._delayedOnError))
          }
          getReflectionTextureMatrix() {
            return this._textureMatrix
          }
          setReflectionTextureMatrix(kk) {
            if (kk.updateFlag === this._textureMatrix.updateFlag) return;
            if (kk.isIdentity() !== this._textureMatrix.isIdentity() && this.XF()?.markAllMaterialsAsDirty(1, (kk => -1 !== kk.getActiveTextures().indexOf(this))), this._textureMatrix = kk, !this.XF()?.useRightHandedSystem) return;
            const ek = bk.j.eH[0],
              ik = bk.j.Quaternion[0],
              Dk = bk.j.eH[1];
            this._textureMatrix.decompose(ek, ik, Dk), ik.z *= -1, ik.w *= -1, bk.b.ComposeToRef(ek, ik, Dk, this._textureMatrixRefraction)
          }
          getRefractionTextureMatrix() {
            return this.XF()?.useRightHandedSystem ? this._textureMatrixRefraction : this._textureMatrix
          }
          _loadTexture() {
            let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            const ik = this.XF(),
              Dk = this._texture;
            this._texture = this._getFromCache(this.url, this._noMipmap, void 0, void 0, this._useSRGBBuffer, this.isCube);
            const fk = () => {
                this.onLoadObservable.notifyObservers(this), Dk && (Dk.dispose(), this.XF()?.markAllMaterialsAsDirty(1)), kk && kk()
              },
              bk = (kk, ik) => {
                this._loadingError = !0, this._errorObject = {
                  message: kk,
                  exception: ik
                }, ek && ek(kk, ik), Pk.f.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            this._texture ? this._texture.isReady ? Sk.e.SetImmediate((() => fk())) : this._texture.onLoadedObservable.add((() => fk())) : (this._prefiltered ? this._texture = this._getEngine().createPrefilteredCubeTexture(this.url, ik, this._lodScale, this._lodOffset, kk, bk, this._format, this._forcedExtension, this._createPolynomials, this._buffer) : this._texture = this._getEngine().createCubeTexture(this.url, ik, this._files, this._noMipmap, kk, bk, this._format, this._forcedExtension, !1, this._lodScale, this._lodOffset, null, this._loaderOptions, !!this._useSRGBBuffer, this._buffer), this._texture?.onLoadedObservable.add((() => this.onLoadObservable.notifyObservers(this))))
          }
          clone() {
            let ek = 0;
            const ik = this.irradianceTexture,
              Dk = Kk.b.Clone((() => {
                const ik = new kk(this.url, this.XF() || this._getEngine(), this._extensions, this._noMipmap, this._files);
                return ek = ik.uniqueId, ik
              }), this);
            return Dk.uniqueId = ek, ik && !this.irradianceTexture && (this.irradianceTexture = ik), Dk
          }
        }, (() => {
          const Sk = "function" === typeof Symbol && Symbol.metadata ? Object.create(sk[Symbol.metadata] ?? null) : void 0;
          ek = [(0, fk.I)()], ik = [(0, fk.F)()], mk = [(0, fk.F)()], yk = [(0, fk.I)("rotationY")], Yk = [(0, fk.I)("files")], Lk = [(0, fk.I)("forcedExtension")], Ck = [(0, fk.I)("extensions")], Ak = [(0, fk.t)("textureMatrix")], jk = [(0, fk.t)("textureMatrixRefraction")], (0, Dk.d)(kk, null, mk, {
            kind: "getter",
            name: "boundingBoxSize",
            static: !1,
            private: !1,
            access: {
              has: kk => "boundingBoxSize" in kk,
              get: kk => kk.boundingBoxSize
            },
            metadata: Sk
          }, null, dk), (0, Dk.d)(kk, null, yk, {
            kind: "setter",
            name: "rotationY",
            static: !1,
            private: !1,
            access: {
              has: kk => "rotationY" in kk,
              set: (kk, ek) => {
                kk.rotationY = ek
              }
            },
            metadata: Sk
          }, null, dk), (0, Dk.d)(null, null, ek, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: kk => "url" in kk,
              get: kk => kk.url,
              set: (kk, ek) => {
                kk.url = ek
              }
            },
            metadata: Sk
          }, Vk, Fk), (0, Dk.d)(null, null, ik, {
            kind: "field",
            name: "boundingBoxPosition",
            static: !1,
            private: !1,
            access: {
              has: kk => "boundingBoxPosition" in kk,
              get: kk => kk.boundingBoxPosition,
              set: (kk, ek) => {
                kk.boundingBoxPosition = ek
              }
            },
            metadata: Sk
          }, uk, qk), (0, Dk.d)(null, null, Yk, {
            kind: "field",
            name: "_files",
            static: !1,
            private: !1,
            access: {
              has: kk => "_files" in kk,
              get: kk => kk._files,
              set: (kk, ek) => {
                kk._files = ek
              }
            },
            metadata: Sk
          }, Ik, zk), (0, Dk.d)(null, null, Lk, {
            kind: "field",
            name: "_forcedExtension",
            static: !1,
            private: !1,
            access: {
              has: kk => "_forcedExtension" in kk,
              get: kk => kk._forcedExtension,
              set: (kk, ek) => {
                kk._forcedExtension = ek
              }
            },
            metadata: Sk
          }, Qk, vk), (0, Dk.d)(null, null, Ck, {
            kind: "field",
            name: "_extensions",
            static: !1,
            private: !1,
            access: {
              has: kk => "_extensions" in kk,
              get: kk => kk._extensions,
              set: (kk, ek) => {
                kk._extensions = ek
              }
            },
            metadata: Sk
          }, Ek, hk), (0, Dk.d)(null, null, Ak, {
            kind: "field",
            name: "_textureMatrix",
            static: !1,
            private: !1,
            access: {
              has: kk => "_textureMatrix" in kk,
              get: kk => kk._textureMatrix,
              set: (kk, ek) => {
                kk._textureMatrix = ek
              }
            },
            metadata: Sk
          }, ak, Wk), (0, Dk.d)(null, null, jk, {
            kind: "field",
            name: "_textureMatrixRefraction",
            static: !1,
            private: !1,
            access: {
              has: kk => "_textureMatrixRefraction" in kk,
              get: kk => kk._textureMatrixRefraction,
              set: (kk, ek) => {
                kk._textureMatrixRefraction = ek
              }
            },
            metadata: Sk
          }, tk, Xk), Sk && Object.defineProperty(kk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Sk
          })
        })(), kk
      })(),
      Yk = !1;

    function Lk(kk, ek, ik) {
      let Dk = "";
      for (const fk of kk) Dk += fk;
      return new yk(Dk, ek, null, ik, kk)
    }

    function Ck(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        Dk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const fk = ek.useDelayedTextureLoading;
      ek.useDelayedTextureLoading = !1;
      const Sk = new yk(kk, ek, null, !1, null, null, null, void 0, !0, ik, Dk);
      return ek.useDelayedTextureLoading = fk, Sk
    }

    function Ak(kk, ek, ik) {
      const Dk = Kk.b.Parse((() => {
        let Dk = !1;
        return kk.prefiltered && (Dk = kk.prefiltered), new yk(ik + (kk.url ?? kk.name), ek, kk.extensions, !1, kk.files || null, null, null, void 0, Dk, kk.forcedExtension)
      }), kk, ek);
      if (kk.boundingBoxPosition && (Dk.boundingBoxPosition = bk.o.FromArray(kk.boundingBoxPosition)), kk.boundingBoxSize && (Dk.boundingBoxSize = bk.o.FromArray(kk.boundingBoxSize)), kk.animations)
        for (let fk = 0; fk < kk.animations.length; fk++) {
          const ek = kk.animations[fk],
            ik = (0, mk.d)("BABYLON.Animation");
          ik && Dk.animations.push(ik.Parse(ek))
        }
      return Dk
    }
    Yk || (Yk = !0, yk.CreateFromImages = Lk, yk.CreateFromPrefilteredData = Ck, yk.Parse = Ak, Pk.f._CubeTextureParser = Ak, (0, mk.h)("BABYLON.CubeTexture", yk))
  },
  40738: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => mk
    });
    var Dk = ik(38272),
      fk = ik(40053),
      Sk = ik(39501),
      bk = ik(39398),
      rk = ik(39391);
    let Pk = !1;
    class mk extends fk.f {
      constructor(kk, ek, ik) {
        let Dk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          mk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          Mk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5,
          Kk = arguments.length > 6 ? arguments[6] : void 0;
        const xk = !ik || ik._isScene;
        super(null, xk ? ik : ik?.bw, xk ? !Dk : ik, Kk, mk, void 0, void 0, void 0, void 0, Mk), Pk || (Pk = !0, bk.ThinEngine.prototype.createDynamicTexture = function(kk, ek, ik, Dk) {
          const fk = new rk.b(this, 4);
          return fk.baseWidth = kk, fk.baseHeight = ek, ik && (kk = this.needPOTTextures ? (0, Sk.g)(kk, this._caps.maxTextureSize) : kk, ek = this.needPOTTextures ? (0, Sk.g)(ek, this._caps.maxTextureSize) : ek), fk.width = kk, fk.height = ek, fk.isReady = !1, fk.generateMipMaps = ik, fk.samplingMode = Dk, this.updateTextureSamplingMode(Dk, fk), this._internalTexturesCache.push(fk), fk
        }, bk.ThinEngine.prototype.updateDynamicTexture = function(kk, ek, ik) {
          let Dk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            fk = arguments.length > 4 ? arguments[4] : void 0,
            Sk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
          if (!kk) return;
          const bk = this._gl,
            rk = bk.TEXTURE_2D,
            Pk = this._bindTextureDirectly(rk, kk, !0, Sk);
          this._unpackFlipY(void 0 === ik ? kk.invertY : ik), Dk && bk.pixelStorei(bk.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
          const mk = this._getWebGLTextureType(kk.type),
            Mk = this._getInternalFormat(fk || kk.format),
            Kk = this._getRGBABufferInternalSizedFormat(kk.type, Mk);
          bk.texImage2D(rk, 0, Kk, Mk, mk, ek), kk.generateMipMaps && bk.generateMipmap(rk), Pk || this._bindTextureDirectly(rk, null), Dk && bk.pixelStorei(bk.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), fk && (kk.format = fk), kk._dynamicTextureSource = ek, kk._premulAlpha = Dk, kk.invertY = ik || !1, kk.isReady = !0
        }), this.name = kk, this.wrapU = fk.f.CLAMP_ADDRESSMODE, this.wrapV = fk.f.CLAMP_ADDRESSMODE, this._generateMipMaps = Dk;
        const nk = this._getEngine();
        if (!nk) return;
        if (ek.getContext) this._canvas = ek, this._ownCanvas = !1, this._texture = nk.createDynamicTexture(this._canvas.width, this._canvas.height, Dk, mk);
        else {
          this._canvas = nk.createCanvas(1, 1), this._ownCanvas = !0;
          const kk = ek;
          kk.width || 0 === kk.width ? this._texture = nk.createDynamicTexture(kk.width, kk.height, Dk, mk) : this._texture = nk.createDynamicTexture(ek, ek, Dk, mk)
        }
        const Uk = this.getSize();
        this._canvas.width !== Uk.width && (this._canvas.width = Uk.width), this._canvas.height !== Uk.height && (this._canvas.height = Uk.height), this._context = this._canvas.getContext("2d")
      }
      getClassName() {
        return "DynamicTexture"
      }
      get canRescale() {
        return !0
      }
      _recreate(kk) {
        this._canvas.width = kk.width, this._canvas.height = kk.height, this.releaseInternalTexture(), this._texture = this._getEngine().createDynamicTexture(kk.width, kk.height, this._generateMipMaps, this.samplingMode)
      }
      scale(kk) {
        const ek = this.getSize();
        ek.width *= kk, ek.height *= kk, this._recreate(ek)
      }
      scaleTo(kk, ek) {
        const ik = this.getSize();
        ik.width = kk, ik.height = ek, this._recreate(ik)
      }
      getContext() {
        return this._context
      }
      clear(kk) {
        const ek = this.getSize();
        kk && (this._context.fillStyle = kk), this._context.clearRect(0, 0, ek.width, ek.height)
      }
      update(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._texture && this._getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === kk || kk, ek, this._format || void 0, void 0, ik)
      }
      drawText(kk, ek, ik, Dk, fk, Sk, bk) {
        let rk = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const Pk = this.getSize();
        if (Sk && (this._context.fillStyle = Sk, this._context.fillRect(0, 0, Pk.width, Pk.height)), this._context.font = Dk, null === ek || void 0 === ek) {
          const ik = this._context.measureText(kk);
          ek = (Pk.width - ik.width) / 2
        }
        if (null === ik || void 0 === ik) {
          const kk = parseInt(Dk.replace(/\D/g, ""));
          ik = Pk.height / 2 + kk / 3.65
        }
        this._context.fillStyle = fk || "", this._context.fillText(kk, ek, ik), rk && this.update(bk)
      }
      dispose() {
        super.dispose(), this._ownCanvas && this._canvas?.remove?.(), this._canvas = null, this._context = null
      }
      clone() {
        const kk = this.XF();
        if (!kk) return this;
        const ek = this.getSize(),
          ik = new mk(this.name, ek, kk, this._generateMipMaps);
        return ik.hasAlpha = this.hasAlpha, ik.level = this.level, ik.wrapU = this.wrapU, ik.wrapV = this.wrapV, ik
      }
      serialize() {
        const kk = this.XF();
        kk && !kk.isReady() && Dk.b.Warn("The scene must be ready before serializing the dynamic texture");
        const ek = super.serialize();
        return mk._IsCanvasElement(this._canvas) && (ek.base64String = this._canvas.toDataURL()), ek.invertY = this._invertY, ek.samplingMode = this.samplingMode, ek
      }
      static _IsCanvasElement(kk) {
        return void 0 !== kk.toDataURL
      }
      _rebuild() {
        this.update()
      }
    }
  },
  40727: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => fk
    });
    var Dk = ik(40053);
    class fk extends Dk.f {
      get depth() {
        return this._depth
      }
      constructor(kk, ek, ik, fk, Sk, bk) {
        let rk = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          Pk = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          mk = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Dk.f.TRILINEAR_SAMPLINGMODE,
          Mk = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          Kk = arguments.length > 10 ? arguments[10] : void 0,
          xk = arguments.length > 11 ? arguments[11] : void 0;
        super(null, bk, !rk, Pk), this.format = Sk, this._texture = bk.JU().createRawTexture2DArray(kk, ek, ik, fk, Sk, rk, Pk, mk, null, Mk, Kk ?? 0, xk), this._depth = fk, this.is2DArray = !0
      }
      update(kk) {
        this.updateMipLevel(kk, 0)
      }
      updateMipLevel(kk, ek) {
        this._texture && this._getEngine().updateRawTexture2DArray(this._texture, kk, this._texture.format, this._texture.invertY, null, this._texture.type, ek)
      }
      static CreateRGBATexture(kk, ek, ik, Dk, Sk) {
        return new fk(kk, ek, ik, Dk, 5, Sk, !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0)
      }
    }
  },
  40724: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Dk.e
    });
    var Dk = ik(39956);
    (0, Dk.i)()
  },
  39651: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Dk.f
    });
    var Dk = ik(39653);
    (0, Dk.b)()
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);