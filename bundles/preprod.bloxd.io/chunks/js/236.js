export const id = 236;
export const ids = [236];
export const modules = {
  38729: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Zy,
      i: () => cb
    });
    var Uy = Wy(37350),
      hy = Wy(38485),
      fy = Wy(38694),
      Zy = {};
    class cb {
      constructor(yb) {
        this.attachedToElement = !1, this.attached = {}, this.camera = yb, this.checkInputs = () => {}
      }
      add(yb) {
        const bb = yb.getSimpleName();
        this.attached[bb] ? Uy.b.Warn("camera input of type " + bb + " already exists on camera") : (this.attached[bb] = yb, yb.camera = this.camera, yb.checkInputs && (this.checkInputs = this._addCheckInputs(yb.checkInputs.bind(yb))), this.attachedToElement && yb.attachControl(this.noPreventDefault))
      }
      remove(yb) {
        for (const bb in this.attached) {
          const Wy = this.attached[bb];
          if (Wy === yb) return Wy.detachControl(), Wy.camera = null, delete this.attached[bb], void this.rebuildInputCheck()
        }
      }
      removeByType(yb) {
        for (const bb in this.attached) {
          const Wy = this.attached[bb];
          Wy.getClassName() === yb && (Wy.detachControl(), Wy.camera = null, delete this.attached[bb], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(yb) {
        const bb = this.checkInputs;
        return () => {
          bb(), yb()
        }
      }
      attachInput(yb) {
        this.attachedToElement && yb.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          yb = !fy.b.ForceAttachControlToAlwaysPreventDefault && yb, this.attachedToElement = !0, this.noPreventDefault = yb;
          for (const bb in this.attached) this.attached[bb].attachControl(yb)
        }
      }
      detachElement() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const bb in this.attached) this.attached[bb].detachControl(), yb && (this.attached[bb].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const yb in this.attached) {
          const bb = this.attached[yb];
          bb.checkInputs && (this.checkInputs = this._addCheckInputs(bb.checkInputs.bind(bb)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(yb) {
        const bb = {};
        for (const Wy in this.attached) {
          const yb = this.attached[Wy],
            Uy = hy.c.Serialize(yb);
          bb[yb.getClassName()] = Uy
        }
        yb.inputsmgr = bb
      }
      parse(yb) {
        const bb = yb.inputsmgr;
        if (bb) {
          this.clear();
          for (const yb in bb) {
            const Wy = Zy[yb];
            if (Wy) {
              const Uy = bb[yb],
                fy = hy.c.Parse((() => new Wy), Uy, null);
              this.add(fy)
            }
          }
        } else
          for (const Wy in this.attached) {
            const bb = Zy[this.attached[Wy].getClassName()];
            if (bb) {
              const Uy = hy.c.Parse((() => new bb), yb, null);
              this.remove(this.attached[Wy]), this.add(Uy)
            }
          }
      }
    }
  },
  39702: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Cy
    });
    var Uy = Wy(38464),
      hy = Wy(38466),
      fy = Wy(38354),
      Zy = Wy(35861),
      cb = Wy(38457),
      Py = Wy(38989),
      oy = Wy(35909),
      By = Wy(35893),
      Ky = Wy(38485),
      ey = Wy(38287),
      qb = Wy(37350),
      sy = Wy(38511),
      Sy = Wy(36559),
      Ey = Wy(38558);
    var ly = Wy(38362);
    let mb = !1;
    let Cy = (() => {
        var yb;
        let bb, Wy, oy, Cy, Ty, Vy, Jy, gb, Gy, Oy = cb.d,
          Ry = [],
          vb = [],
          ib = [],
          My = [],
          Yy = [],
          Xy = [],
          ny = [],
          uy = [],
          rb = [],
          Hy = [],
          ab = [],
          Fy = [],
          py = [],
          Ly = [],
          Qy = [];
        return yb = class extends Oy {
          set boundingBoxSize(yb) {
            if (this._boundingBoxSize && this._boundingBoxSize.equals(yb)) return;
            this._boundingBoxSize = yb;
            const bb = this.kWy();
            bb && bb.markAllMaterialsAsDirty(1)
          }
          get boundingBoxSize() {
            return this._boundingBoxSize
          }
          set rotationY(yb) {
            this._rotationY = yb, this.setReflectionTextureMatrix(Zy.c.RotationY(this._rotationY))
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
          constructor(yb, bb) {
            let Wy, hy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              fy = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              cb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              oy = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              Ky = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              Cy = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 5,
              Ty = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              Vy = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              Jy = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
              gb = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : .8,
              Gy = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 0,
              Oy = arguments.length > 13 ? arguments[13] : void 0,
              jb = arguments.length > 14 ? arguments[14] : void 0;
            super(bb), this._delayedOnLoad = (0, Uy.l)(this, Ry), this.onLoadObservable = new By.c, this.url = (0, Uy.l)(this, vb, void 0), this.boundingBoxPosition = ((0, Uy.l)(this, ib), (0, Uy.l)(this, My, Zy.n.Zero())), this._boundingBoxSize = (0, Uy.l)(this, Yy), this._rotationY = 0, this._files = (0, Uy.l)(this, Xy, null), this._forcedExtension = ((0, Uy.l)(this, ny), (0, Uy.l)(this, uy, null)), this._extensions = ((0, Uy.l)(this, rb), (0, Uy.l)(this, Hy, null)), this._textureMatrix = ((0, Uy.l)(this, ab), (0, Uy.l)(this, Fy, void 0)), this._textureMatrixRefraction = ((0, Uy.l)(this, py), (0, Uy.l)(this, Ly, new Zy.c)), this._format = (0, Uy.l)(this, Qy), this._buffer = null, mb || (mb = !0, ly.d.prototype._partialLoadFile = function(yb, bb, Wy, Uy) {
              let hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
              this._loadFile(yb, (yb => {
                Wy[bb] = yb, Wy._internalCount++, 6 === Wy._internalCount && Uy(Wy)
              }), void 0, void 0, !0, ((yb, bb) => {
                hy && yb && hy(yb.status + " " + yb.statusText, bb)
              }))
            }, ly.d.prototype._cascadeLoadFiles = function(yb, bb, Wy) {
              let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
              const hy = [];
              hy._internalCount = 0;
              for (let fy = 0; fy < 6; fy++) this._partialLoadFile(Wy[fy], fy, hy, bb, Uy)
            }, ly.d.prototype._cascadeLoadImgs = function(yb, bb, Wy, Uy) {
              let hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                fy = arguments.length > 5 ? arguments[5] : void 0;
              const Zy = [];
              Zy._internalCount = 0;
              for (let cb = 0; cb < 6; cb++) this._partialLoadImg(Uy[cb], cb, Zy, yb, bb, Wy, hy, fy)
            }, ly.d.prototype._partialLoadImg = function(yb, bb, Wy, Uy, hy, fy) {
              let Zy = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                cb = arguments.length > 7 ? arguments[7] : void 0;
              const Py = (0, Sy.e)();
              (0, sy.x)(yb, (yb => {
                Wy[bb] = yb, Wy._internalCount++, Uy && Uy.removePendingData(Py), 6 === Wy._internalCount && fy && fy(hy, Wy)
              }), ((yb, bb) => {
                Uy && Uy.removePendingData(Py), Zy && Zy(yb, bb)
              }), Uy ? Uy.offlineProvider : null, cb), Uy && Uy.addPendingData(Py)
            }, ly.d.prototype.createCubeTextureBase = function(yb, bb, Wy, Uy) {
              let hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                fy = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                Zy = arguments.length > 6 ? arguments[6] : void 0,
                cb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                Py = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
                oy = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
                By = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
                Ky = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
                sy = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
                Sy = arguments.length > 13 && void 0 !== arguments[13] ? arguments[13] : null,
                ly = arguments.length > 14 && void 0 !== arguments[14] && arguments[14],
                mb = arguments.length > 15 && void 0 !== arguments[15] ? arguments[15] : null;
              const Cy = Ky || new ey.d(this, 7);
              Cy.isCube = !0, Cy.url = yb, Cy.generateMipMaps = !Uy, Cy._lodGenerationScale = oy, Cy._lodGenerationOffset = By, Cy._useSRGBBuffer = !!ly && this._caps.supportSRGBBuffers && (this.version > 1 || this.isWebGPU || !!Uy), Cy !== Ky && (Cy.label = yb.substring(0, 60)), this._doNotHandleContextLost || (Cy._extension = cb, Cy._files = Wy, Cy._buffer = mb);
              const Ty = yb;
              this._transformTextureUrl && !Ky && (yb = this._transformTextureUrl(yb));
              const Vy = cb ?? function(yb) {
                  const bb = yb.split("?")[0],
                    Wy = bb.lastIndexOf(".");
                  return Wy > -1 ? bb.substring(Wy).toLowerCase() : ""
                }(yb),
                Jy = (0, Ey.c)(Vy),
                gb = (yb, bb) => {
                  Cy.dispose(), fy ? fy(yb, bb) : yb && qb.b.Warn(yb)
                },
                Gy = (fy, Ky) => {
                  yb === Ty ? fy && gb(fy.status + " " + fy.statusText, Ky) : (qb.b.Warn(`Failed to load ${yb}, falling back to the ${Ty}`), this.createCubeTextureBase(Ty, bb, Wy, !!Uy, hy, gb, Zy, cb, Py, oy, By, Cy, sy, Sy, ly, mb))
                };
              if (Jy) Jy.then((Uy => {
                const fy = yb => {
                  sy && sy(Cy, yb), Uy.loadCubeData(yb, Cy, Py, hy, ((yb, bb) => {
                    gb(yb, bb)
                  }))
                };
                mb ? fy(mb) : Wy && 6 === Wy.length ? Uy.supportCascades ? this._cascadeLoadFiles(bb, (yb => fy(yb.map((yb => new Uint8Array(yb))))), Wy, gb) : gb("Textures type does not support cascades.") : this._loadFile(yb, (yb => fy(new Uint8Array(yb))), void 0, bb ? bb.offlineProvider || null : void 0, !0, Gy)
              }));
              else {
                if (!Wy || 0 === Wy.length) throw new Error("Cannot load cubemap because files were not defined, or the correct loader was not found.");
                this._cascadeLoadImgs(bb, Cy, ((yb, bb) => {
                  Sy && Sy(yb, bb)
                }), Wy, gb)
              }
              return this._internalTexturesCache.push(Cy), Cy
            }), this.name = yb, this.url = yb, this._noMipmap = fy, this.hasAlpha = !1, this.isCube = !0, this._textureMatrix = Zy.c.Identity(), this.coordinatesMode = Py.f.CUBIC_MODE;
            let Dy = null;
            null === hy || Array.isArray(hy) ? (this._noMipmap = fy, this._format = Cy, this._createPolynomials = Jy, Wy = hy, this._loaderOptions = Oy, this._useSRGBBuffer = jb, this._lodScale = gb, this._lodOffset = Gy) : (Wy = hy.extensions ?? null, this._noMipmap = hy.noMipmap ?? !1, cb = hy.files ?? null, Dy = hy.buffer ?? null, this._format = hy.format ?? 5, Ty = hy.prefiltered ?? !1, Vy = hy.forcedExtension ?? null, this._createPolynomials = hy.createPolynomials ?? !1, this._lodScale = hy.lodScale ?? .8, this._lodOffset = hy.lodOffset ?? 0, this._loaderOptions = hy.loaderOptions, this._useSRGBBuffer = hy.useSRGBBuffer, this._sphericalPolynomialTargetSize = hy.sphericalPolynomialTargetSize ?? 0, oy = hy.onLoad ?? null, Ky = hy.onError ?? null), (yb || cb) && this.updateURL(yb, Vy, oy, Ty, Ky, Wy, this.kWy()?.useDelayedTextureLoading, cb, Dy)
          }
          getClassName() {
            return "CubeTexture"
          }
          updateURL(yb) {
            let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              Uy = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              fy = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              Zy = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
              cb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              Py = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
            this.name && !this.name.startsWith("data:") || (this.name = yb), this.url = yb, bb && (this._forcedExtension = bb);
            const oy = yb.lastIndexOf("."),
              By = bb || (oy > -1 ? yb.substring(oy).toLowerCase() : ""),
              Ky = 0 === By.indexOf(".dds"),
              ey = 0 === By.indexOf(".env"),
              qb = 0 === By.indexOf(".basis");
            if (ey ? (this.gammaSpace = !1, this._prefiltered = !1, this.anisotropicFilteringLevel = 1) : (this._prefiltered = Uy, Uy && (this.gammaSpace = !1, this.anisotropicFilteringLevel = 1)), cb) this._files = cb;
            else if (qb || ey || Ky || fy || (fy = ["_px.jpg", "_py.jpg", "_pz.jpg", "_nx.jpg", "_ny.jpg", "_nz.jpg"]), this._files = this._files || [], this._files.length = 0, fy) {
              for (let bb = 0; bb < fy.length; bb++) this._files.push(yb + fy[bb]);
              this._extensions = fy
            }
            this._buffer = Py, Zy ? (this.delayLoadState = 4, this._delayedOnLoad = Wy, this._delayedOnError = hy) : this._loadTexture(Wy, hy)
          }
          delayLoad(yb) {
            4 === this.delayLoadState && (yb && (this._forcedExtension = yb), this.delayLoadState = 1, this._loadTexture(this._delayedOnLoad, this._delayedOnError))
          }
          getReflectionTextureMatrix() {
            return this._textureMatrix
          }
          setReflectionTextureMatrix(yb) {
            if (yb.updateFlag === this._textureMatrix.updateFlag) return;
            if (yb.isIdentity() !== this._textureMatrix.isIdentity() && this.kWy()?.markAllMaterialsAsDirty(1, (yb => -1 !== yb.getActiveTextures().indexOf(this))), this._textureMatrix = yb, !this.kWy()?.useRightHandedSystem) return;
            const bb = Zy.j.dU[0],
              Wy = Zy.j.Quaternion[0],
              Uy = Zy.j.dU[1];
            this._textureMatrix.decompose(bb, Wy, Uy), Wy.z *= -1, Wy.w *= -1, Zy.c.ComposeToRef(bb, Wy, Uy, this._textureMatrixRefraction)
          }
          getRefractionTextureMatrix() {
            return this.kWy()?.useRightHandedSystem ? this._textureMatrixRefraction : this._textureMatrix
          }
          _loadTexture() {
            let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            const Wy = this.kWy(),
              Uy = this._texture;
            this._texture = this._getFromCache(this.url, this._noMipmap, void 0, void 0, this._useSRGBBuffer, this.isCube);
            const hy = () => {
                this.onLoadObservable.notifyObservers(this), Uy && (Uy.dispose(), this.kWy()?.markAllMaterialsAsDirty(1)), yb && yb()
              },
              Zy = (yb, Wy) => {
                this._loadingError = !0, this._errorObject = {
                  message: yb,
                  exception: Wy
                }, bb && bb(yb, Wy), Py.f.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            this._texture ? this._texture.isReady ? fy.b.SetImmediate((() => hy())) : this._texture.onLoadedObservable.add((() => hy())) : (this._prefiltered ? this._texture = this._getEngine().createPrefilteredCubeTexture(this.url, Wy, this._lodScale, this._lodOffset, yb, Zy, this._format, this._forcedExtension, this._createPolynomials, this._buffer) : this._texture = this._getEngine().createCubeTexture(this.url, Wy, this._files, this._noMipmap, yb, Zy, this._format, this._forcedExtension, !1, this._lodScale, this._lodOffset, null, this._loaderOptions, !!this._useSRGBBuffer, this._buffer), this._texture?.onLoadedObservable.add((() => this.onLoadObservable.notifyObservers(this))))
          }
          clone() {
            let bb = 0;
            const Wy = this.irradianceTexture,
              Uy = Ky.c.Clone((() => {
                const Wy = new yb(this.url, this.kWy() || this._getEngine(), this._extensions, this._noMipmap, this._files);
                return bb = Wy.uniqueId, Wy
              }), this);
            return Uy.uniqueId = bb, Wy && !this.irradianceTexture && (this.irradianceTexture = Wy), Uy
          }
        }, (() => {
          const fy = "function" === typeof Symbol && Symbol.metadata ? Object.create(Oy[Symbol.metadata] ?? null) : void 0;
          bb = [(0, hy.T)()], Wy = [(0, hy.P)()], oy = [(0, hy.P)()], Cy = [(0, hy.T)("rotationY")], Ty = [(0, hy.T)("files")], Vy = [(0, hy.T)("forcedExtension")], Jy = [(0, hy.T)("extensions")], gb = [(0, hy.B)("textureMatrix")], Gy = [(0, hy.B)("textureMatrixRefraction")], (0, Uy.j)(yb, null, oy, {
            kind: "getter",
            name: "boundingBoxSize",
            static: !1,
            private: !1,
            access: {
              has: yb => "boundingBoxSize" in yb,
              get: yb => yb.boundingBoxSize
            },
            metadata: fy
          }, null, Ry), (0, Uy.j)(yb, null, Cy, {
            kind: "setter",
            name: "rotationY",
            static: !1,
            private: !1,
            access: {
              has: yb => "rotationY" in yb,
              set: (yb, bb) => {
                yb.rotationY = bb
              }
            },
            metadata: fy
          }, null, Ry), (0, Uy.j)(null, null, bb, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: yb => "url" in yb,
              get: yb => yb.url,
              set: (yb, bb) => {
                yb.url = bb
              }
            },
            metadata: fy
          }, vb, ib), (0, Uy.j)(null, null, Wy, {
            kind: "field",
            name: "boundingBoxPosition",
            static: !1,
            private: !1,
            access: {
              has: yb => "boundingBoxPosition" in yb,
              get: yb => yb.boundingBoxPosition,
              set: (yb, bb) => {
                yb.boundingBoxPosition = bb
              }
            },
            metadata: fy
          }, My, Yy), (0, Uy.j)(null, null, Ty, {
            kind: "field",
            name: "_files",
            static: !1,
            private: !1,
            access: {
              has: yb => "_files" in yb,
              get: yb => yb._files,
              set: (yb, bb) => {
                yb._files = bb
              }
            },
            metadata: fy
          }, Xy, ny), (0, Uy.j)(null, null, Vy, {
            kind: "field",
            name: "_forcedExtension",
            static: !1,
            private: !1,
            access: {
              has: yb => "_forcedExtension" in yb,
              get: yb => yb._forcedExtension,
              set: (yb, bb) => {
                yb._forcedExtension = bb
              }
            },
            metadata: fy
          }, uy, rb), (0, Uy.j)(null, null, Jy, {
            kind: "field",
            name: "_extensions",
            static: !1,
            private: !1,
            access: {
              has: yb => "_extensions" in yb,
              get: yb => yb._extensions,
              set: (yb, bb) => {
                yb._extensions = bb
              }
            },
            metadata: fy
          }, Hy, ab), (0, Uy.j)(null, null, gb, {
            kind: "field",
            name: "_textureMatrix",
            static: !1,
            private: !1,
            access: {
              has: yb => "_textureMatrix" in yb,
              get: yb => yb._textureMatrix,
              set: (yb, bb) => {
                yb._textureMatrix = bb
              }
            },
            metadata: fy
          }, Fy, py), (0, Uy.j)(null, null, Gy, {
            kind: "field",
            name: "_textureMatrixRefraction",
            static: !1,
            private: !1,
            access: {
              has: yb => "_textureMatrixRefraction" in yb,
              get: yb => yb._textureMatrixRefraction,
              set: (yb, bb) => {
                yb._textureMatrixRefraction = bb
              }
            },
            metadata: fy
          }, Ly, Qy), fy && Object.defineProperty(yb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: fy
          })
        })(), yb
      })(),
      Ty = !1;

    function Vy(yb, bb, Wy) {
      let Uy = "";
      for (const hy of yb) Uy += hy;
      return new Cy(Uy, bb, null, Wy, yb)
    }

    function Jy(yb, bb) {
      let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        Uy = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const hy = bb.useDelayedTextureLoading;
      bb.useDelayedTextureLoading = !1;
      const fy = new Cy(yb, bb, null, !1, null, null, null, void 0, !0, Wy, Uy);
      return bb.useDelayedTextureLoading = hy, fy
    }

    function gb(yb, bb, Wy) {
      const Uy = Ky.c.Parse((() => {
        let Uy = !1;
        return yb.prefiltered && (Uy = yb.prefiltered), new Cy(Wy + (yb.url ?? yb.name), bb, yb.extensions, !1, yb.files || null, null, null, void 0, Uy, yb.forcedExtension)
      }), yb, bb);
      if (yb.boundingBoxPosition && (Uy.boundingBoxPosition = Zy.n.FromArray(yb.boundingBoxPosition)), yb.boundingBoxSize && (Uy.boundingBoxSize = Zy.n.FromArray(yb.boundingBoxSize)), yb.animations)
        for (let hy = 0; hy < yb.animations.length; hy++) {
          const bb = yb.animations[hy],
            Wy = (0, oy.b)("BABYLON.Animation");
          Wy && Uy.animations.push(Wy.Parse(bb))
        }
      return Uy
    }
    Ty || (Ty = !0, Cy.CreateFromImages = Vy, Cy.CreateFromPrefilteredData = Jy, Cy.Parse = gb, Py.f._CubeTextureParser = gb, (0, oy.e)("BABYLON.CubeTexture", Cy))
  },
  39734: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => oy
    });
    var Uy = Wy(37350),
      hy = Wy(38989),
      fy = Wy(38405),
      Zy = Wy(38305),
      cb = Wy(38287);
    let Py = !1;
    class oy extends hy.f {
      constructor(yb, bb, Wy) {
        let Uy = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          oy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          By = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5,
          Ky = arguments.length > 6 ? arguments[6] : void 0;
        const ey = !Wy || Wy._isScene;
        super(null, ey ? Wy : Wy?.Pf, ey ? !Uy : Wy, Ky, oy, void 0, void 0, void 0, void 0, By), Py || (Py = !0, Zy.ThinEngine.prototype.createDynamicTexture = function(yb, bb, Wy, Uy) {
          const hy = new cb.d(this, 4);
          return hy.baseWidth = yb, hy.baseHeight = bb, Wy && (yb = this.needPOTTextures ? (0, fy.d)(yb, this._caps.maxTextureSize) : yb, bb = this.needPOTTextures ? (0, fy.d)(bb, this._caps.maxTextureSize) : bb), hy.width = yb, hy.height = bb, hy.isReady = !1, hy.generateMipMaps = Wy, hy.samplingMode = Uy, this.updateTextureSamplingMode(Uy, hy), this._internalTexturesCache.push(hy), hy
        }, Zy.ThinEngine.prototype.updateDynamicTexture = function(yb, bb, Wy) {
          let Uy = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            hy = arguments.length > 4 ? arguments[4] : void 0,
            fy = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
          if (!yb) return;
          const Zy = this._gl,
            cb = Zy.TEXTURE_2D,
            Py = this._bindTextureDirectly(cb, yb, !0, fy);
          this._unpackFlipY(void 0 === Wy ? yb.invertY : Wy), Uy && Zy.pixelStorei(Zy.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
          const oy = this._getWebGLTextureType(yb.type),
            By = this._getInternalFormat(hy || yb.format),
            Ky = this._getRGBABufferInternalSizedFormat(yb.type, By);
          Zy.texImage2D(cb, 0, Ky, By, oy, bb), yb.generateMipMaps && Zy.generateMipmap(cb), Py || this._bindTextureDirectly(cb, null), Uy && Zy.pixelStorei(Zy.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), hy && (yb.format = hy), yb._dynamicTextureSource = bb, yb._premulAlpha = Uy, yb.invertY = Wy || !1, yb.isReady = !0
        }), this.name = yb, this.wrapU = hy.f.CLAMP_ADDRESSMODE, this.wrapV = hy.f.CLAMP_ADDRESSMODE, this._generateMipMaps = Uy;
        const qb = this._getEngine();
        if (!qb) return;
        if (bb.getContext) this._canvas = bb, this._ownCanvas = !1, this._texture = qb.createDynamicTexture(this._canvas.width, this._canvas.height, Uy, oy);
        else {
          this._canvas = qb.createCanvas(1, 1), this._ownCanvas = !0;
          const yb = bb;
          yb.width || 0 === yb.width ? this._texture = qb.createDynamicTexture(yb.width, yb.height, Uy, oy) : this._texture = qb.createDynamicTexture(bb, bb, Uy, oy)
        }
        const sy = this.getSize();
        this._canvas.width !== sy.width && (this._canvas.width = sy.width), this._canvas.height !== sy.height && (this._canvas.height = sy.height), this._context = this._canvas.getContext("2d")
      }
      getClassName() {
        return "DynamicTexture"
      }
      get canRescale() {
        return !0
      }
      _recreate(yb) {
        this._canvas.width = yb.width, this._canvas.height = yb.height, this.releaseInternalTexture(), this._texture = this._getEngine().createDynamicTexture(yb.width, yb.height, this._generateMipMaps, this.samplingMode)
      }
      scale(yb) {
        const bb = this.getSize();
        bb.width *= yb, bb.height *= yb, this._recreate(bb)
      }
      scaleTo(yb, bb) {
        const Wy = this.getSize();
        Wy.width = yb, Wy.height = bb, this._recreate(Wy)
      }
      getContext() {
        return this._context
      }
      clear(yb) {
        const bb = this.getSize();
        yb && (this._context.fillStyle = yb), this._context.clearRect(0, 0, bb.width, bb.height)
      }
      update(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._texture && this._getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === yb || yb, bb, this._format || void 0, void 0, Wy)
      }
      drawText(yb, bb, Wy, Uy, hy, fy, Zy) {
        let cb = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const Py = this.getSize();
        if (fy && (this._context.fillStyle = fy, this._context.fillRect(0, 0, Py.width, Py.height)), this._context.font = Uy, null === bb || void 0 === bb) {
          const Wy = this._context.measureText(yb);
          bb = (Py.width - Wy.width) / 2
        }
        if (null === Wy || void 0 === Wy) {
          const yb = parseInt(Uy.replace(/\D/g, ""));
          Wy = Py.height / 2 + yb / 3.65
        }
        this._context.fillStyle = hy || "", this._context.fillText(yb, bb, Wy), cb && this.update(Zy)
      }
      dispose() {
        super.dispose(), this._ownCanvas && this._canvas?.remove?.(), this._canvas = null, this._context = null
      }
      clone() {
        const yb = this.kWy();
        if (!yb) return this;
        const bb = this.getSize(),
          Wy = new oy(this.name, bb, yb, this._generateMipMaps);
        return Wy.hasAlpha = this.hasAlpha, Wy.level = this.level, Wy.wrapU = this.wrapU, Wy.wrapV = this.wrapV, Wy
      }
      serialize() {
        const yb = this.kWy();
        yb && !yb.isReady() && Uy.b.Warn("The scene must be ready before serializing the dynamic texture");
        const bb = super.serialize();
        return oy._IsCanvasElement(this._canvas) && (bb.base64String = this._canvas.toDataURL()), bb.invertY = this._invertY, bb.samplingMode = this.samplingMode, bb
      }
      static _IsCanvasElement(yb) {
        return void 0 !== yb.toDataURL
      }
      _rebuild() {
        this.update()
      }
    }
  },
  39714: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => hy
    });
    var Uy = Wy(38989);
    class hy extends Uy.f {
      get depth() {
        return this._depth
      }
      constructor(yb, bb, Wy, hy, fy, Zy) {
        let cb = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          Py = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          oy = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Uy.f.TRILINEAR_SAMPLINGMODE,
          By = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          Ky = arguments.length > 10 ? arguments[10] : void 0,
          ey = arguments.length > 11 ? arguments[11] : void 0;
        super(null, Zy, !cb, Py), this.format = fy, this._texture = Zy.xh().createRawTexture2DArray(yb, bb, Wy, hy, fy, cb, Py, oy, null, By, Ky ?? 0, ey), this._depth = hy, this.is2DArray = !0
      }
      update(yb) {
        this.updateMipLevel(yb, 0)
      }
      updateMipLevel(yb, bb) {
        this._texture && this._getEngine().updateRawTexture2DArray(this._texture, yb, this._texture.format, this._texture.invertY, null, this._texture.type, bb)
      }
      static CreateRGBATexture(yb, bb, Wy, Uy, fy) {
        return new hy(yb, bb, Wy, Uy, 5, fy, !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0)
      }
    }
  },
  39711: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Uy.c
    });
    var Uy = Wy(38862);
    (0, Uy.d)()
  },
  38564: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Uy.g
    });
    var Uy = Wy(38569);
    (0, Uy.c)()
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);