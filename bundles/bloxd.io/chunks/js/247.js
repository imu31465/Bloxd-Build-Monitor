export const id = 247;
export const ids = [247];
export const modules = {
  39656: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Xk,
      h: () => bk
    });
    var Rk = Bk(38320),
      tk = Bk(39414),
      ak = Bk(39623),
      Xk = {};
    class bk {
      constructor(kk) {
        this.attachedToElement = !1, this.attached = {}, this.camera = kk, this.checkInputs = () => {}
      }
      add(kk) {
        const Fk = kk.getSimpleName();
        this.attached[Fk] ? Rk.b.Warn("camera input of type " + Fk + " already exists on camera") : (this.attached[Fk] = kk, kk.camera = this.camera, kk.checkInputs && (this.checkInputs = this._addCheckInputs(kk.checkInputs.bind(kk))), this.attachedToElement && kk.attachControl(this.noPreventDefault))
      }
      remove(kk) {
        for (const Fk in this.attached) {
          const Bk = this.attached[Fk];
          if (Bk === kk) return Bk.detachControl(), Bk.camera = null, delete this.attached[Fk], void this.rebuildInputCheck()
        }
      }
      removeByType(kk) {
        for (const Fk in this.attached) {
          const Bk = this.attached[Fk];
          Bk.getClassName() === kk && (Bk.detachControl(), Bk.camera = null, delete this.attached[Fk], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(kk) {
        const Fk = this.checkInputs;
        return () => {
          Fk(), kk()
        }
      }
      attachInput(kk) {
        this.attachedToElement && kk.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          kk = !ak.c.ForceAttachControlToAlwaysPreventDefault && kk, this.attachedToElement = !0, this.noPreventDefault = kk;
          for (const Fk in this.attached) this.attached[Fk].attachControl(kk)
        }
      }
      detachElement() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const Fk in this.attached) this.attached[Fk].detachControl(), kk && (this.attached[Fk].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const kk in this.attached) {
          const Fk = this.attached[kk];
          Fk.checkInputs && (this.checkInputs = this._addCheckInputs(Fk.checkInputs.bind(Fk)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(kk) {
        const Fk = {};
        for (const Bk in this.attached) {
          const kk = this.attached[Bk],
            Rk = tk.c.Serialize(kk);
          Fk[kk.getClassName()] = Rk
        }
        kk.inputsmgr = Fk
      }
      parse(kk) {
        const Fk = kk.inputsmgr;
        if (Fk) {
          this.clear();
          for (const kk in Fk) {
            const Bk = Xk[kk];
            if (Bk) {
              const Rk = Fk[kk],
                ak = tk.c.Parse((() => new Bk), Rk, null);
              this.add(ak)
            }
          }
        } else
          for (const Bk in this.attached) {
            const Fk = Xk[this.attached[Bk].getClassName()];
            if (Fk) {
              const Rk = tk.c.Parse((() => new Fk), kk, null);
              this.remove(this.attached[Bk]), this.add(Rk)
            }
          }
      }
    }
  },
  40563: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => vk
    });
    var Rk = Bk(39397),
      tk = Bk(39404),
      ak = Bk(39302),
      Xk = Bk(36758),
      bk = Bk(39392),
      wk = Bk(39895),
      dk = Bk(36798),
      sk = Bk(36781),
      Vk = Bk(39414),
      Jk = Bk(39248),
      Ak = Bk(38320),
      ek = Bk(39436),
      yk = Bk(37578),
      fk = Bk(39477);
    var mk = Bk(39305);
    let Wk = !1;
    let vk = (() => {
        var kk;
        let Fk, Bk, dk, vk, ik, Yk, Lk, Ok, Ek, Sk = bk.e,
          Nk = [],
          Hk = [],
          uk = [],
          Mk = [],
          gk = [],
          Uk = [],
          ck = [],
          Gk = [],
          Tk = [],
          rk = [],
          Dk = [],
          zk = [],
          Pk = [],
          hk = [],
          qk = [];
        return kk = class extends Sk {
          set boundingBoxSize(kk) {
            if (this._boundingBoxSize && this._boundingBoxSize.equals(kk)) return;
            this._boundingBoxSize = kk;
            const Fk = this.XN();
            Fk && Fk.markAllMaterialsAsDirty(1)
          }
          get boundingBoxSize() {
            return this._boundingBoxSize
          }
          set rotationY(kk) {
            this._rotationY = kk, this.setReflectionTextureMatrix(Xk.c.RotationY(this._rotationY))
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
          constructor(kk, Fk) {
            let Bk, tk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              ak = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              bk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              dk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              Vk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              vk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 5,
              ik = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              Yk = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              Lk = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
              Ok = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : .8,
              Ek = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 0,
              Sk = arguments.length > 13 ? arguments[13] : void 0,
              Ck = arguments.length > 14 ? arguments[14] : void 0;
            super(Fk), this._delayedOnLoad = (0, Rk.l)(this, Nk), this.onLoadObservable = new sk.e, this.url = (0, Rk.l)(this, Hk, void 0), this.boundingBoxPosition = ((0, Rk.l)(this, uk), (0, Rk.l)(this, Mk, Xk.s.Zero())), this._boundingBoxSize = (0, Rk.l)(this, gk), this._rotationY = 0, this._files = (0, Rk.l)(this, Uk, null), this._forcedExtension = ((0, Rk.l)(this, ck), (0, Rk.l)(this, Gk, null)), this._extensions = ((0, Rk.l)(this, Tk), (0, Rk.l)(this, rk, null)), this._textureMatrix = ((0, Rk.l)(this, Dk), (0, Rk.l)(this, zk, void 0)), this._textureMatrixRefraction = ((0, Rk.l)(this, Pk), (0, Rk.l)(this, hk, new Xk.c)), this._format = (0, Rk.l)(this, qk), this._buffer = null, Wk || (Wk = !0, mk.c.prototype._partialLoadFile = function(kk, Fk, Bk, Rk) {
              let tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
              this._loadFile(kk, (kk => {
                Bk[Fk] = kk, Bk._internalCount++, 6 === Bk._internalCount && Rk(Bk)
              }), void 0, void 0, !0, ((kk, Fk) => {
                tk && kk && tk(kk.status + " " + kk.statusText, Fk)
              }))
            }, mk.c.prototype._cascadeLoadFiles = function(kk, Fk, Bk) {
              let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
              const tk = [];
              tk._internalCount = 0;
              for (let ak = 0; ak < 6; ak++) this._partialLoadFile(Bk[ak], ak, tk, Fk, Rk)
            }, mk.c.prototype._cascadeLoadImgs = function(kk, Fk, Bk, Rk) {
              let tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                ak = arguments.length > 5 ? arguments[5] : void 0;
              const Xk = [];
              Xk._internalCount = 0;
              for (let bk = 0; bk < 6; bk++) this._partialLoadImg(Rk[bk], bk, Xk, kk, Fk, Bk, tk, ak)
            }, mk.c.prototype._partialLoadImg = function(kk, Fk, Bk, Rk, tk, ak) {
              let Xk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                bk = arguments.length > 7 ? arguments[7] : void 0;
              const wk = (0, yk.e)();
              (0, ek.j)(kk, (kk => {
                Bk[Fk] = kk, Bk._internalCount++, Rk && Rk.removePendingData(wk), 6 === Bk._internalCount && ak && ak(tk, Bk)
              }), ((kk, Fk) => {
                Rk && Rk.removePendingData(wk), Xk && Xk(kk, Fk)
              }), Rk ? Rk.offlineProvider : null, bk), Rk && Rk.addPendingData(wk)
            }, mk.c.prototype.createCubeTextureBase = function(kk, Fk, Bk, Rk) {
              let tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                ak = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                Xk = arguments.length > 6 ? arguments[6] : void 0,
                bk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                wk = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
                dk = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
                sk = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
                Vk = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
                ek = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
                yk = arguments.length > 13 && void 0 !== arguments[13] ? arguments[13] : null,
                mk = arguments.length > 14 && void 0 !== arguments[14] && arguments[14],
                Wk = arguments.length > 15 && void 0 !== arguments[15] ? arguments[15] : null;
              const vk = Vk || new Jk.c(this, 7);
              vk.isCube = !0, vk.url = kk, vk.generateMipMaps = !Rk, vk._lodGenerationScale = dk, vk._lodGenerationOffset = sk, vk._useSRGBBuffer = !!mk && this._caps.supportSRGBBuffers && (this.version > 1 || this.isWebGPU || !!Rk), vk !== Vk && (vk.label = kk.substring(0, 60)), this._doNotHandleContextLost || (vk._extension = bk, vk._files = Bk, vk._buffer = Wk);
              const ik = kk;
              this._transformTextureUrl && !Vk && (kk = this._transformTextureUrl(kk));
              const Yk = bk ?? function(kk) {
                  const Fk = kk.split("?")[0],
                    Bk = Fk.lastIndexOf(".");
                  return Bk > -1 ? Fk.substring(Bk).toLowerCase() : ""
                }(kk),
                Lk = (0, fk.d)(Yk),
                Ok = (kk, Fk) => {
                  vk.dispose(), ak ? ak(kk, Fk) : kk && Ak.b.Warn(kk)
                },
                Ek = (ak, Vk) => {
                  kk === ik ? ak && Ok(ak.status + " " + ak.statusText, Vk) : (Ak.b.Warn(`Failed to load ${kk}, falling back to the ${ik}`), this.createCubeTextureBase(ik, Fk, Bk, !!Rk, tk, Ok, Xk, bk, wk, dk, sk, vk, ek, yk, mk, Wk))
                };
              if (Lk) Lk.then((Rk => {
                const ak = kk => {
                  ek && ek(vk, kk), Rk.loadCubeData(kk, vk, wk, tk, ((kk, Fk) => {
                    Ok(kk, Fk)
                  }))
                };
                Wk ? ak(Wk) : Bk && 6 === Bk.length ? Rk.supportCascades ? this._cascadeLoadFiles(Fk, (kk => ak(kk.map((kk => new Uint8Array(kk))))), Bk, Ok) : Ok("Textures type does not support cascades.") : this._loadFile(kk, (kk => ak(new Uint8Array(kk))), void 0, Fk ? Fk.offlineProvider || null : void 0, !0, Ek)
              }));
              else {
                if (!Bk || 0 === Bk.length) throw new Error("Cannot load cubemap because files were not defined, or the correct loader was not found.");
                this._cascadeLoadImgs(Fk, vk, ((kk, Fk) => {
                  yk && yk(kk, Fk)
                }), Bk, Ok)
              }
              return this._internalTexturesCache.push(vk), vk
            }), this.name = kk, this.url = kk, this._noMipmap = ak, this.hasAlpha = !1, this.isCube = !0, this._textureMatrix = Xk.c.Identity(), this.coordinatesMode = wk.f.CUBIC_MODE;
            let Zk = null;
            null === tk || Array.isArray(tk) ? (this._noMipmap = ak, this._format = vk, this._createPolynomials = Lk, Bk = tk, this._loaderOptions = Sk, this._useSRGBBuffer = Ck, this._lodScale = Ok, this._lodOffset = Ek) : (Bk = tk.extensions ?? null, this._noMipmap = tk.noMipmap ?? !1, bk = tk.files ?? null, Zk = tk.buffer ?? null, this._format = tk.format ?? 5, ik = tk.prefiltered ?? !1, Yk = tk.forcedExtension ?? null, this._createPolynomials = tk.createPolynomials ?? !1, this._lodScale = tk.lodScale ?? .8, this._lodOffset = tk.lodOffset ?? 0, this._loaderOptions = tk.loaderOptions, this._useSRGBBuffer = tk.useSRGBBuffer, this._sphericalPolynomialTargetSize = tk.sphericalPolynomialTargetSize ?? 0, dk = tk.onLoad ?? null, Vk = tk.onError ?? null), (kk || bk) && this.updateURL(kk, Yk, dk, ik, Vk, Bk, this.XN()?.useDelayedTextureLoading, bk, Zk)
          }
          getClassName() {
            return "CubeTexture"
          }
          updateURL(kk) {
            let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              Rk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              ak = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              Xk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
              bk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              wk = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
            this.name && !this.name.startsWith("data:") || (this.name = kk), this.url = kk, Fk && (this._forcedExtension = Fk);
            const dk = kk.lastIndexOf("."),
              sk = Fk || (dk > -1 ? kk.substring(dk).toLowerCase() : ""),
              Vk = 0 === sk.indexOf(".dds"),
              Jk = 0 === sk.indexOf(".env"),
              Ak = 0 === sk.indexOf(".basis");
            if (Jk ? (this.gammaSpace = !1, this._prefiltered = !1, this.anisotropicFilteringLevel = 1) : (this._prefiltered = Rk, Rk && (this.gammaSpace = !1, this.anisotropicFilteringLevel = 1)), bk) this._files = bk;
            else if (Ak || Jk || Vk || ak || (ak = ["_px.jpg", "_py.jpg", "_pz.jpg", "_nx.jpg", "_ny.jpg", "_nz.jpg"]), this._files = this._files || [], this._files.length = 0, ak) {
              for (let Fk = 0; Fk < ak.length; Fk++) this._files.push(kk + ak[Fk]);
              this._extensions = ak
            }
            this._buffer = wk, Xk ? (this.delayLoadState = 4, this._delayedOnLoad = Bk, this._delayedOnError = tk) : this._loadTexture(Bk, tk)
          }
          delayLoad(kk) {
            4 === this.delayLoadState && (kk && (this._forcedExtension = kk), this.delayLoadState = 1, this._loadTexture(this._delayedOnLoad, this._delayedOnError))
          }
          getReflectionTextureMatrix() {
            return this._textureMatrix
          }
          setReflectionTextureMatrix(kk) {
            if (kk.updateFlag === this._textureMatrix.updateFlag) return;
            if (kk.isIdentity() !== this._textureMatrix.isIdentity() && this.XN()?.markAllMaterialsAsDirty(1, (kk => -1 !== kk.getActiveTextures().indexOf(this))), this._textureMatrix = kk, !this.XN()?.useRightHandedSystem) return;
            const Fk = Xk.l.Qe[0],
              Bk = Xk.l.Quaternion[0],
              Rk = Xk.l.Qe[1];
            this._textureMatrix.decompose(Fk, Bk, Rk), Bk.z *= -1, Bk.w *= -1, Xk.c.ComposeToRef(Fk, Bk, Rk, this._textureMatrixRefraction)
          }
          getRefractionTextureMatrix() {
            return this.XN()?.useRightHandedSystem ? this._textureMatrixRefraction : this._textureMatrix
          }
          _loadTexture() {
            let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            const Bk = this.XN(),
              Rk = this._texture;
            this._texture = this._getFromCache(this.url, this._noMipmap, void 0, void 0, this._useSRGBBuffer, this.isCube);
            const tk = () => {
                this.onLoadObservable.notifyObservers(this), Rk && (Rk.dispose(), this.XN()?.markAllMaterialsAsDirty(1)), kk && kk()
              },
              Xk = (kk, Bk) => {
                this._loadingError = !0, this._errorObject = {
                  message: kk,
                  exception: Bk
                }, Fk && Fk(kk, Bk), wk.f.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            this._texture ? this._texture.isReady ? ak.e.SetImmediate((() => tk())) : this._texture.onLoadedObservable.add((() => tk())) : (this._prefiltered ? this._texture = this._getEngine().createPrefilteredCubeTexture(this.url, Bk, this._lodScale, this._lodOffset, kk, Xk, this._format, this._forcedExtension, this._createPolynomials, this._buffer) : this._texture = this._getEngine().createCubeTexture(this.url, Bk, this._files, this._noMipmap, kk, Xk, this._format, this._forcedExtension, !1, this._lodScale, this._lodOffset, null, this._loaderOptions, !!this._useSRGBBuffer, this._buffer), this._texture?.onLoadedObservable.add((() => this.onLoadObservable.notifyObservers(this))))
          }
          clone() {
            let Fk = 0;
            const Bk = this.irradianceTexture,
              Rk = Vk.c.Clone((() => {
                const Bk = new kk(this.url, this.XN() || this._getEngine(), this._extensions, this._noMipmap, this._files);
                return Fk = Bk.uniqueId, Bk
              }), this);
            return Rk.uniqueId = Fk, Bk && !this.irradianceTexture && (this.irradianceTexture = Bk), Rk
          }
        }, (() => {
          const ak = "function" === typeof Symbol && Symbol.metadata ? Object.create(Sk[Symbol.metadata] ?? null) : void 0;
          Fk = [(0, tk.M)()], Bk = [(0, tk.K)()], dk = [(0, tk.K)()], vk = [(0, tk.M)("rotationY")], ik = [(0, tk.M)("files")], Yk = [(0, tk.M)("forcedExtension")], Lk = [(0, tk.M)("extensions")], Ok = [(0, tk.u)("textureMatrix")], Ek = [(0, tk.u)("textureMatrixRefraction")], (0, Rk.j)(kk, null, dk, {
            kind: "getter",
            name: "boundingBoxSize",
            static: !1,
            private: !1,
            access: {
              has: kk => "boundingBoxSize" in kk,
              get: kk => kk.boundingBoxSize
            },
            metadata: ak
          }, null, Nk), (0, Rk.j)(kk, null, vk, {
            kind: "setter",
            name: "rotationY",
            static: !1,
            private: !1,
            access: {
              has: kk => "rotationY" in kk,
              set: (kk, Fk) => {
                kk.rotationY = Fk
              }
            },
            metadata: ak
          }, null, Nk), (0, Rk.j)(null, null, Fk, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: kk => "url" in kk,
              get: kk => kk.url,
              set: (kk, Fk) => {
                kk.url = Fk
              }
            },
            metadata: ak
          }, Hk, uk), (0, Rk.j)(null, null, Bk, {
            kind: "field",
            name: "boundingBoxPosition",
            static: !1,
            private: !1,
            access: {
              has: kk => "boundingBoxPosition" in kk,
              get: kk => kk.boundingBoxPosition,
              set: (kk, Fk) => {
                kk.boundingBoxPosition = Fk
              }
            },
            metadata: ak
          }, Mk, gk), (0, Rk.j)(null, null, ik, {
            kind: "field",
            name: "_files",
            static: !1,
            private: !1,
            access: {
              has: kk => "_files" in kk,
              get: kk => kk._files,
              set: (kk, Fk) => {
                kk._files = Fk
              }
            },
            metadata: ak
          }, Uk, ck), (0, Rk.j)(null, null, Yk, {
            kind: "field",
            name: "_forcedExtension",
            static: !1,
            private: !1,
            access: {
              has: kk => "_forcedExtension" in kk,
              get: kk => kk._forcedExtension,
              set: (kk, Fk) => {
                kk._forcedExtension = Fk
              }
            },
            metadata: ak
          }, Gk, Tk), (0, Rk.j)(null, null, Lk, {
            kind: "field",
            name: "_extensions",
            static: !1,
            private: !1,
            access: {
              has: kk => "_extensions" in kk,
              get: kk => kk._extensions,
              set: (kk, Fk) => {
                kk._extensions = Fk
              }
            },
            metadata: ak
          }, rk, Dk), (0, Rk.j)(null, null, Ok, {
            kind: "field",
            name: "_textureMatrix",
            static: !1,
            private: !1,
            access: {
              has: kk => "_textureMatrix" in kk,
              get: kk => kk._textureMatrix,
              set: (kk, Fk) => {
                kk._textureMatrix = Fk
              }
            },
            metadata: ak
          }, zk, Pk), (0, Rk.j)(null, null, Ek, {
            kind: "field",
            name: "_textureMatrixRefraction",
            static: !1,
            private: !1,
            access: {
              has: kk => "_textureMatrixRefraction" in kk,
              get: kk => kk._textureMatrixRefraction,
              set: (kk, Fk) => {
                kk._textureMatrixRefraction = Fk
              }
            },
            metadata: ak
          }, hk, qk), ak && Object.defineProperty(kk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ak
          })
        })(), kk
      })(),
      ik = !1;

    function Yk(kk, Fk, Bk) {
      let Rk = "";
      for (const tk of kk) Rk += tk;
      return new vk(Rk, Fk, null, Bk, kk)
    }

    function Lk(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        Rk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const tk = Fk.useDelayedTextureLoading;
      Fk.useDelayedTextureLoading = !1;
      const ak = new vk(kk, Fk, null, !1, null, null, null, void 0, !0, Bk, Rk);
      return Fk.useDelayedTextureLoading = tk, ak
    }

    function Ok(kk, Fk, Bk) {
      const Rk = Vk.c.Parse((() => {
        let Rk = !1;
        return kk.prefiltered && (Rk = kk.prefiltered), new vk(Bk + (kk.url ?? kk.name), Fk, kk.extensions, !1, kk.files || null, null, null, void 0, Rk, kk.forcedExtension)
      }), kk, Fk);
      if (kk.boundingBoxPosition && (Rk.boundingBoxPosition = Xk.s.FromArray(kk.boundingBoxPosition)), kk.boundingBoxSize && (Rk.boundingBoxSize = Xk.s.FromArray(kk.boundingBoxSize)), kk.animations)
        for (let tk = 0; tk < kk.animations.length; tk++) {
          const Fk = kk.animations[tk],
            Bk = (0, dk.c)("BABYLON.Animation");
          Bk && Rk.animations.push(Bk.Parse(Fk))
        }
      return Rk
    }
    ik || (ik = !0, vk.CreateFromImages = Yk, vk.CreateFromPrefilteredData = Lk, vk.Parse = Ok, wk.f._CubeTextureParser = Ok, (0, dk.d)("BABYLON.CubeTexture", vk))
  },
  40603: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => dk
    });
    var Rk = Bk(38320),
      tk = Bk(39895),
      ak = Bk(39329),
      Xk = Bk(39258),
      bk = Bk(39248);
    let wk = !1;
    class dk extends tk.f {
      constructor(kk, Fk, Bk) {
        let Rk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          dk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          sk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5,
          Vk = arguments.length > 6 ? arguments[6] : void 0;
        const Jk = !Bk || Bk._isScene;
        super(null, Jk ? Bk : Bk?.ef, Jk ? !Rk : Bk, Vk, dk, void 0, void 0, void 0, void 0, sk), wk || (wk = !0, Xk.ThinEngine.prototype.createDynamicTexture = function(kk, Fk, Bk, Rk) {
          const tk = new bk.c(this, 4);
          return tk.baseWidth = kk, tk.baseHeight = Fk, Bk && (kk = this.needPOTTextures ? (0, ak.g)(kk, this._caps.maxTextureSize) : kk, Fk = this.needPOTTextures ? (0, ak.g)(Fk, this._caps.maxTextureSize) : Fk), tk.width = kk, tk.height = Fk, tk.isReady = !1, tk.generateMipMaps = Bk, tk.samplingMode = Rk, this.updateTextureSamplingMode(Rk, tk), this._internalTexturesCache.push(tk), tk
        }, Xk.ThinEngine.prototype.updateDynamicTexture = function(kk, Fk, Bk) {
          let Rk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            tk = arguments.length > 4 ? arguments[4] : void 0,
            ak = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
          if (!kk) return;
          const Xk = this._gl,
            bk = Xk.TEXTURE_2D,
            wk = this._bindTextureDirectly(bk, kk, !0, ak);
          this._unpackFlipY(void 0 === Bk ? kk.invertY : Bk), Rk && Xk.pixelStorei(Xk.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
          const dk = this._getWebGLTextureType(kk.type),
            sk = this._getInternalFormat(tk || kk.format),
            Vk = this._getRGBABufferInternalSizedFormat(kk.type, sk);
          Xk.texImage2D(bk, 0, Vk, sk, dk, Fk), kk.generateMipMaps && Xk.generateMipmap(bk), wk || this._bindTextureDirectly(bk, null), Rk && Xk.pixelStorei(Xk.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), tk && (kk.format = tk), kk._dynamicTextureSource = Fk, kk._premulAlpha = Rk, kk.invertY = Bk || !1, kk.isReady = !0
        }), this.name = kk, this.wrapU = tk.f.CLAMP_ADDRESSMODE, this.wrapV = tk.f.CLAMP_ADDRESSMODE, this._generateMipMaps = Rk;
        const Ak = this._getEngine();
        if (!Ak) return;
        if (Fk.getContext) this._canvas = Fk, this._ownCanvas = !1, this._texture = Ak.createDynamicTexture(this._canvas.width, this._canvas.height, Rk, dk);
        else {
          this._canvas = Ak.createCanvas(1, 1), this._ownCanvas = !0;
          const kk = Fk;
          kk.width || 0 === kk.width ? this._texture = Ak.createDynamicTexture(kk.width, kk.height, Rk, dk) : this._texture = Ak.createDynamicTexture(Fk, Fk, Rk, dk)
        }
        const ek = this.getSize();
        this._canvas.width !== ek.width && (this._canvas.width = ek.width), this._canvas.height !== ek.height && (this._canvas.height = ek.height), this._context = this._canvas.getContext("2d")
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
        const Fk = this.getSize();
        Fk.width *= kk, Fk.height *= kk, this._recreate(Fk)
      }
      scaleTo(kk, Fk) {
        const Bk = this.getSize();
        Bk.width = kk, Bk.height = Fk, this._recreate(Bk)
      }
      getContext() {
        return this._context
      }
      clear(kk) {
        const Fk = this.getSize();
        kk && (this._context.fillStyle = kk), this._context.clearRect(0, 0, Fk.width, Fk.height)
      }
      update(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._texture && this._getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === kk || kk, Fk, this._format || void 0, void 0, Bk)
      }
      drawText(kk, Fk, Bk, Rk, tk, ak, Xk) {
        let bk = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const wk = this.getSize();
        if (ak && (this._context.fillStyle = ak, this._context.fillRect(0, 0, wk.width, wk.height)), this._context.font = Rk, null === Fk || void 0 === Fk) {
          const Bk = this._context.measureText(kk);
          Fk = (wk.width - Bk.width) / 2
        }
        if (null === Bk || void 0 === Bk) {
          const kk = parseInt(Rk.replace(/\D/g, ""));
          Bk = wk.height / 2 + kk / 3.65
        }
        this._context.fillStyle = tk || "", this._context.fillText(kk, Fk, Bk), bk && this.update(Xk)
      }
      dispose() {
        super.dispose(), this._ownCanvas && this._canvas?.remove?.(), this._canvas = null, this._context = null
      }
      clone() {
        const kk = this.XN();
        if (!kk) return this;
        const Fk = this.getSize(),
          Bk = new dk(this.name, Fk, kk, this._generateMipMaps);
        return Bk.hasAlpha = this.hasAlpha, Bk.level = this.level, Bk.wrapU = this.wrapU, Bk.wrapV = this.wrapV, Bk
      }
      serialize() {
        const kk = this.XN();
        kk && !kk.isReady() && Rk.b.Warn("The scene must be ready before serializing the dynamic texture");
        const Fk = super.serialize();
        return dk._IsCanvasElement(this._canvas) && (Fk.base64String = this._canvas.toDataURL()), Fk.invertY = this._invertY, Fk.samplingMode = this.samplingMode, Fk
      }
      static _IsCanvasElement(kk) {
        return void 0 !== kk.toDataURL
      }
      _rebuild() {
        this.update()
      }
    }
  },
  40576: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => tk
    });
    var Rk = Bk(39895);
    class tk extends Rk.f {
      get depth() {
        return this._depth
      }
      constructor(kk, Fk, Bk, tk, ak, Xk) {
        let bk = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          wk = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          dk = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Rk.f.TRILINEAR_SAMPLINGMODE,
          sk = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          Vk = arguments.length > 10 ? arguments[10] : void 0,
          Jk = arguments.length > 11 ? arguments[11] : void 0;
        super(null, Xk, !bk, wk), this.format = ak, this._texture = Xk.ne().createRawTexture2DArray(kk, Fk, Bk, tk, ak, bk, wk, dk, null, sk, Vk ?? 0, Jk), this._depth = tk, this.is2DArray = !0
      }
      update(kk) {
        this.updateMipLevel(kk, 0)
      }
      updateMipLevel(kk, Fk) {
        this._texture && this._getEngine().updateRawTexture2DArray(this._texture, kk, this._texture.format, this._texture.invertY, null, this._texture.type, Fk)
      }
      static CreateRGBATexture(kk, Fk, Bk, Rk, ak) {
        return new tk(kk, Fk, Bk, Rk, 5, ak, !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0)
      }
    }
  },
  40573: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Rk.e
    });
    var Rk = Bk(39771);
    (0, Rk.g)()
  },
  39486: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Rk.c
    });
    var Rk = Bk(39489);
    (0, Rk.b)()
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);