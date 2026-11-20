export const id = 247;
export const ids = [247];
export const modules = {
  39344: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Eb,
      f: () => Yb
    });
    var Ab = Ub(37989),
      Mb = Ub(39124),
      Tb = Ub(39310),
      Eb = {};
    class Yb {
      constructor(bb) {
        this.attachedToElement = !1, this.attached = {}, this.camera = bb, this.checkInputs = () => {}
      }
      add(bb) {
        const ab = bb.getSimpleName();
        this.attached[ab] ? Ab.e.Warn("camera input of type " + ab + " already exists on camera") : (this.attached[ab] = bb, bb.camera = this.camera, bb.checkInputs && (this.checkInputs = this._addCheckInputs(bb.checkInputs.bind(bb))), this.attachedToElement && bb.attachControl(this.noPreventDefault))
      }
      remove(bb) {
        for (const ab in this.attached) {
          const Ub = this.attached[ab];
          if (Ub === bb) return Ub.detachControl(), Ub.camera = null, delete this.attached[ab], void this.rebuildInputCheck()
        }
      }
      removeByType(bb) {
        for (const ab in this.attached) {
          const Ub = this.attached[ab];
          Ub.getClassName() === bb && (Ub.detachControl(), Ub.camera = null, delete this.attached[ab], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(bb) {
        const ab = this.checkInputs;
        return () => {
          ab(), bb()
        }
      }
      attachInput(bb) {
        this.attachedToElement && bb.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          bb = !Tb.b.ForceAttachControlToAlwaysPreventDefault && bb, this.attachedToElement = !0, this.noPreventDefault = bb;
          for (const ab in this.attached) this.attached[ab].attachControl(bb)
        }
      }
      detachElement() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const ab in this.attached) this.attached[ab].detachControl(), bb && (this.attached[ab].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const bb in this.attached) {
          const ab = this.attached[bb];
          ab.checkInputs && (this.checkInputs = this._addCheckInputs(ab.checkInputs.bind(ab)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(bb) {
        const ab = {};
        for (const Ub in this.attached) {
          const bb = this.attached[Ub],
            Ab = Mb.b.Serialize(bb);
          ab[bb.getClassName()] = Ab
        }
        bb.inputsmgr = ab
      }
      parse(bb) {
        const ab = bb.inputsmgr;
        if (ab) {
          this.clear();
          for (const bb in ab) {
            const Ub = Eb[bb];
            if (Ub) {
              const Ab = ab[bb],
                Tb = Mb.b.Parse((() => new Ub), Ab, null);
              this.add(Tb)
            }
          }
        } else
          for (const Ub in this.attached) {
            const ab = Eb[this.attached[Ub].getClassName()];
            if (ab) {
              const Ab = Mb.b.Parse((() => new ab), bb, null);
              this.remove(this.attached[Ub]), this.add(Ab)
            }
          }
      }
    }
  },
  40223: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Db
    });
    var Ab = Ub(39104),
      Mb = Ub(39110),
      Tb = Ub(38993),
      Eb = Ub(36401),
      Yb = Ub(39099),
      Bb = Ub(39605),
      eb = Ub(36447),
      vb = Ub(36431),
      Lb = Ub(39124),
      Pb = Ub(38915),
      Xb = Ub(37989),
      jb = Ub(39146),
      Rb = Ub(37251),
      kb = Ub(39181);
    var yb = Ub(39002);
    let Zb = !1;
    let Db = (() => {
        var bb;
        let ab, Ub, eb, Db, zb, xb, ib, fb, mb, pb = Yb.b,
          Nb = [],
          Wb = [],
          Hb = [],
          Ib = [],
          db = [],
          Fb = [],
          hb = [],
          Gb = [],
          Qb = [],
          qb = [],
          ub = [],
          rb = [],
          Kb = [],
          ob = [],
          lb = [];
        return bb = class extends pb {
          set boundingBoxSize(bb) {
            if (this._boundingBoxSize && this._boundingBoxSize.equals(bb)) return;
            this._boundingBoxSize = bb;
            const ab = this.oN();
            ab && ab.markAllMaterialsAsDirty(1)
          }
          get boundingBoxSize() {
            return this._boundingBoxSize
          }
          set rotationY(bb) {
            this._rotationY = bb, this.setReflectionTextureMatrix(Eb.b.RotationY(this._rotationY))
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
          constructor(bb, ab) {
            let Ub, Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              Tb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Yb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              eb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              Lb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              Db = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 5,
              zb = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              xb = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              ib = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
              fb = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : .8,
              mb = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 0,
              pb = arguments.length > 13 ? arguments[13] : void 0,
              tb = arguments.length > 14 ? arguments[14] : void 0;
            super(ab), this._delayedOnLoad = (0, Ab.k)(this, Nb), this.onLoadObservable = new vb.b, this.url = (0, Ab.k)(this, Wb, void 0), this.boundingBoxPosition = ((0, Ab.k)(this, Hb), (0, Ab.k)(this, Ib, Eb.m.Zero())), this._boundingBoxSize = (0, Ab.k)(this, db), this._rotationY = 0, this._files = (0, Ab.k)(this, Fb, null), this._forcedExtension = ((0, Ab.k)(this, hb), (0, Ab.k)(this, Gb, null)), this._extensions = ((0, Ab.k)(this, Qb), (0, Ab.k)(this, qb, null)), this._textureMatrix = ((0, Ab.k)(this, ub), (0, Ab.k)(this, rb, void 0)), this._textureMatrixRefraction = ((0, Ab.k)(this, Kb), (0, Ab.k)(this, ob, new Eb.b)), this._format = (0, Ab.k)(this, lb), this._buffer = null, Zb || (Zb = !0, yb.d.prototype._partialLoadFile = function(bb, ab, Ub, Ab) {
              let Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
              this._loadFile(bb, (bb => {
                Ub[ab] = bb, Ub._internalCount++, 6 === Ub._internalCount && Ab(Ub)
              }), void 0, void 0, !0, ((bb, ab) => {
                Mb && bb && Mb(bb.status + " " + bb.statusText, ab)
              }))
            }, yb.d.prototype._cascadeLoadFiles = function(bb, ab, Ub) {
              let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
              const Mb = [];
              Mb._internalCount = 0;
              for (let Tb = 0; Tb < 6; Tb++) this._partialLoadFile(Ub[Tb], Tb, Mb, ab, Ab)
            }, yb.d.prototype._cascadeLoadImgs = function(bb, ab, Ub, Ab) {
              let Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                Tb = arguments.length > 5 ? arguments[5] : void 0;
              const Eb = [];
              Eb._internalCount = 0;
              for (let Yb = 0; Yb < 6; Yb++) this._partialLoadImg(Ab[Yb], Yb, Eb, bb, ab, Ub, Mb, Tb)
            }, yb.d.prototype._partialLoadImg = function(bb, ab, Ub, Ab, Mb, Tb) {
              let Eb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                Yb = arguments.length > 7 ? arguments[7] : void 0;
              const Bb = (0, Rb.b)();
              (0, jb.m)(bb, (bb => {
                Ub[ab] = bb, Ub._internalCount++, Ab && Ab.removePendingData(Bb), 6 === Ub._internalCount && Tb && Tb(Mb, Ub)
              }), ((bb, ab) => {
                Ab && Ab.removePendingData(Bb), Eb && Eb(bb, ab)
              }), Ab ? Ab.offlineProvider : null, Yb), Ab && Ab.addPendingData(Bb)
            }, yb.d.prototype.createCubeTextureBase = function(bb, ab, Ub, Ab) {
              let Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                Tb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                Eb = arguments.length > 6 ? arguments[6] : void 0,
                Yb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                Bb = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
                eb = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
                vb = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
                Lb = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
                jb = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
                Rb = arguments.length > 13 && void 0 !== arguments[13] ? arguments[13] : null,
                yb = arguments.length > 14 && void 0 !== arguments[14] && arguments[14],
                Zb = arguments.length > 15 && void 0 !== arguments[15] ? arguments[15] : null;
              const Db = Lb || new Pb.b(this, 7);
              Db.isCube = !0, Db.url = bb, Db.generateMipMaps = !Ab, Db._lodGenerationScale = eb, Db._lodGenerationOffset = vb, Db._useSRGBBuffer = !!yb && this._caps.supportSRGBBuffers && (this.version > 1 || this.isWebGPU || !!Ab), Db !== Lb && (Db.label = bb.substring(0, 60)), this._doNotHandleContextLost || (Db._extension = Yb, Db._files = Ub, Db._buffer = Zb);
              const zb = bb;
              this._transformTextureUrl && !Lb && (bb = this._transformTextureUrl(bb));
              const xb = Yb ?? function(bb) {
                  const ab = bb.split("?")[0],
                    Ub = ab.lastIndexOf(".");
                  return Ub > -1 ? ab.substring(Ub).toLowerCase() : ""
                }(bb),
                ib = (0, kb.e)(xb),
                fb = (bb, ab) => {
                  Db.dispose(), Tb ? Tb(bb, ab) : bb && Xb.e.Warn(bb)
                },
                mb = (Tb, Lb) => {
                  bb === zb ? Tb && fb(Tb.status + " " + Tb.statusText, Lb) : (Xb.e.Warn(`Failed to load ${bb}, falling back to the ${zb}`), this.createCubeTextureBase(zb, ab, Ub, !!Ab, Mb, fb, Eb, Yb, Bb, eb, vb, Db, jb, Rb, yb, Zb))
                };
              if (ib) ib.then((Ab => {
                const Tb = bb => {
                  jb && jb(Db, bb), Ab.loadCubeData(bb, Db, Bb, Mb, ((bb, ab) => {
                    fb(bb, ab)
                  }))
                };
                Zb ? Tb(Zb) : Ub && 6 === Ub.length ? Ab.supportCascades ? this._cascadeLoadFiles(ab, (bb => Tb(bb.map((bb => new Uint8Array(bb))))), Ub, fb) : fb("Textures type does not support cascades.") : this._loadFile(bb, (bb => Tb(new Uint8Array(bb))), void 0, ab ? ab.offlineProvider || null : void 0, !0, mb)
              }));
              else {
                if (!Ub || 0 === Ub.length) throw new Error("Cannot load cubemap because files were not defined, or the correct loader was not found.");
                this._cascadeLoadImgs(ab, Db, ((bb, ab) => {
                  Rb && Rb(bb, ab)
                }), Ub, fb)
              }
              return this._internalTexturesCache.push(Db), Db
            }), this.name = bb, this.url = bb, this._noMipmap = Tb, this.hasAlpha = !1, this.isCube = !0, this._textureMatrix = Eb.b.Identity(), this.coordinatesMode = Bb.e.CUBIC_MODE;
            let wb = null;
            null === Mb || Array.isArray(Mb) ? (this._noMipmap = Tb, this._format = Db, this._createPolynomials = ib, Ub = Mb, this._loaderOptions = pb, this._useSRGBBuffer = tb, this._lodScale = fb, this._lodOffset = mb) : (Ub = Mb.extensions ?? null, this._noMipmap = Mb.noMipmap ?? !1, Yb = Mb.files ?? null, wb = Mb.buffer ?? null, this._format = Mb.format ?? 5, zb = Mb.prefiltered ?? !1, xb = Mb.forcedExtension ?? null, this._createPolynomials = Mb.createPolynomials ?? !1, this._lodScale = Mb.lodScale ?? .8, this._lodOffset = Mb.lodOffset ?? 0, this._loaderOptions = Mb.loaderOptions, this._useSRGBBuffer = Mb.useSRGBBuffer, this._sphericalPolynomialTargetSize = Mb.sphericalPolynomialTargetSize ?? 0, eb = Mb.onLoad ?? null, Lb = Mb.onError ?? null), (bb || Yb) && this.updateURL(bb, xb, eb, zb, Lb, Ub, this.oN()?.useDelayedTextureLoading, Yb, wb)
          }
          getClassName() {
            return "CubeTexture"
          }
          updateURL(bb) {
            let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              Ab = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              Tb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              Eb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
              Yb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              Bb = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
            this.name && !this.name.startsWith("data:") || (this.name = bb), this.url = bb, ab && (this._forcedExtension = ab);
            const eb = bb.lastIndexOf("."),
              vb = ab || (eb > -1 ? bb.substring(eb).toLowerCase() : ""),
              Lb = 0 === vb.indexOf(".dds"),
              Pb = 0 === vb.indexOf(".env"),
              Xb = 0 === vb.indexOf(".basis");
            if (Pb ? (this.gammaSpace = !1, this._prefiltered = !1, this.anisotropicFilteringLevel = 1) : (this._prefiltered = Ab, Ab && (this.gammaSpace = !1, this.anisotropicFilteringLevel = 1)), Yb) this._files = Yb;
            else if (Xb || Pb || Lb || Tb || (Tb = ["_px.jpg", "_py.jpg", "_pz.jpg", "_nx.jpg", "_ny.jpg", "_nz.jpg"]), this._files = this._files || [], this._files.length = 0, Tb) {
              for (let ab = 0; ab < Tb.length; ab++) this._files.push(bb + Tb[ab]);
              this._extensions = Tb
            }
            this._buffer = Bb, Eb ? (this.delayLoadState = 4, this._delayedOnLoad = Ub, this._delayedOnError = Mb) : this._loadTexture(Ub, Mb)
          }
          delayLoad(bb) {
            4 === this.delayLoadState && (bb && (this._forcedExtension = bb), this.delayLoadState = 1, this._loadTexture(this._delayedOnLoad, this._delayedOnError))
          }
          getReflectionTextureMatrix() {
            return this._textureMatrix
          }
          setReflectionTextureMatrix(bb) {
            if (bb.updateFlag === this._textureMatrix.updateFlag) return;
            if (bb.isIdentity() !== this._textureMatrix.isIdentity() && this.oN()?.markAllMaterialsAsDirty(1, (bb => -1 !== bb.getActiveTextures().indexOf(this))), this._textureMatrix = bb, !this.oN()?.useRightHandedSystem) return;
            const ab = Eb.j.Pj[0],
              Ub = Eb.j.Quaternion[0],
              Ab = Eb.j.Pj[1];
            this._textureMatrix.decompose(ab, Ub, Ab), Ub.z *= -1, Ub.w *= -1, Eb.b.ComposeToRef(ab, Ub, Ab, this._textureMatrixRefraction)
          }
          getRefractionTextureMatrix() {
            return this.oN()?.useRightHandedSystem ? this._textureMatrixRefraction : this._textureMatrix
          }
          _loadTexture() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            const Ub = this.oN(),
              Ab = this._texture;
            this._texture = this._getFromCache(this.url, this._noMipmap, void 0, void 0, this._useSRGBBuffer, this.isCube);
            const Mb = () => {
                this.onLoadObservable.notifyObservers(this), Ab && (Ab.dispose(), this.oN()?.markAllMaterialsAsDirty(1)), bb && bb()
              },
              Eb = (bb, Ub) => {
                this._loadingError = !0, this._errorObject = {
                  message: bb,
                  exception: Ub
                }, ab && ab(bb, Ub), Bb.e.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            this._texture ? this._texture.isReady ? Tb.c.SetImmediate((() => Mb())) : this._texture.onLoadedObservable.add((() => Mb())) : (this._prefiltered ? this._texture = this._getEngine().createPrefilteredCubeTexture(this.url, Ub, this._lodScale, this._lodOffset, bb, Eb, this._format, this._forcedExtension, this._createPolynomials, this._buffer) : this._texture = this._getEngine().createCubeTexture(this.url, Ub, this._files, this._noMipmap, bb, Eb, this._format, this._forcedExtension, !1, this._lodScale, this._lodOffset, null, this._loaderOptions, !!this._useSRGBBuffer, this._buffer), this._texture?.onLoadedObservable.add((() => this.onLoadObservable.notifyObservers(this))))
          }
          clone() {
            let ab = 0;
            const Ub = this.irradianceTexture,
              Ab = Lb.b.Clone((() => {
                const Ub = new bb(this.url, this.oN() || this._getEngine(), this._extensions, this._noMipmap, this._files);
                return ab = Ub.uniqueId, Ub
              }), this);
            return Ab.uniqueId = ab, Ub && !this.irradianceTexture && (this.irradianceTexture = Ub), Ab
          }
        }, (() => {
          const Tb = "function" === typeof Symbol && Symbol.metadata ? Object.create(pb[Symbol.metadata] ?? null) : void 0;
          ab = [(0, Mb.K)()], Ub = [(0, Mb.I)()], eb = [(0, Mb.I)()], Db = [(0, Mb.K)("rotationY")], zb = [(0, Mb.K)("files")], xb = [(0, Mb.K)("forcedExtension")], ib = [(0, Mb.K)("extensions")], fb = [(0, Mb.t)("textureMatrix")], mb = [(0, Mb.t)("textureMatrixRefraction")], (0, Ab.h)(bb, null, eb, {
            kind: "getter",
            name: "boundingBoxSize",
            static: !1,
            private: !1,
            access: {
              has: bb => "boundingBoxSize" in bb,
              get: bb => bb.boundingBoxSize
            },
            metadata: Tb
          }, null, Nb), (0, Ab.h)(bb, null, Db, {
            kind: "setter",
            name: "rotationY",
            static: !1,
            private: !1,
            access: {
              has: bb => "rotationY" in bb,
              set: (bb, ab) => {
                bb.rotationY = ab
              }
            },
            metadata: Tb
          }, null, Nb), (0, Ab.h)(null, null, ab, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: bb => "url" in bb,
              get: bb => bb.url,
              set: (bb, ab) => {
                bb.url = ab
              }
            },
            metadata: Tb
          }, Wb, Hb), (0, Ab.h)(null, null, Ub, {
            kind: "field",
            name: "boundingBoxPosition",
            static: !1,
            private: !1,
            access: {
              has: bb => "boundingBoxPosition" in bb,
              get: bb => bb.boundingBoxPosition,
              set: (bb, ab) => {
                bb.boundingBoxPosition = ab
              }
            },
            metadata: Tb
          }, Ib, db), (0, Ab.h)(null, null, zb, {
            kind: "field",
            name: "_files",
            static: !1,
            private: !1,
            access: {
              has: bb => "_files" in bb,
              get: bb => bb._files,
              set: (bb, ab) => {
                bb._files = ab
              }
            },
            metadata: Tb
          }, Fb, hb), (0, Ab.h)(null, null, xb, {
            kind: "field",
            name: "_forcedExtension",
            static: !1,
            private: !1,
            access: {
              has: bb => "_forcedExtension" in bb,
              get: bb => bb._forcedExtension,
              set: (bb, ab) => {
                bb._forcedExtension = ab
              }
            },
            metadata: Tb
          }, Gb, Qb), (0, Ab.h)(null, null, ib, {
            kind: "field",
            name: "_extensions",
            static: !1,
            private: !1,
            access: {
              has: bb => "_extensions" in bb,
              get: bb => bb._extensions,
              set: (bb, ab) => {
                bb._extensions = ab
              }
            },
            metadata: Tb
          }, qb, ub), (0, Ab.h)(null, null, fb, {
            kind: "field",
            name: "_textureMatrix",
            static: !1,
            private: !1,
            access: {
              has: bb => "_textureMatrix" in bb,
              get: bb => bb._textureMatrix,
              set: (bb, ab) => {
                bb._textureMatrix = ab
              }
            },
            metadata: Tb
          }, rb, Kb), (0, Ab.h)(null, null, mb, {
            kind: "field",
            name: "_textureMatrixRefraction",
            static: !1,
            private: !1,
            access: {
              has: bb => "_textureMatrixRefraction" in bb,
              get: bb => bb._textureMatrixRefraction,
              set: (bb, ab) => {
                bb._textureMatrixRefraction = ab
              }
            },
            metadata: Tb
          }, ob, lb), Tb && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Tb
          })
        })(), bb
      })(),
      zb = !1;

    function xb(bb, ab, Ub) {
      let Ab = "";
      for (const Mb of bb) Ab += Mb;
      return new Db(Ab, ab, null, Ub, bb)
    }

    function ib(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        Ab = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const Mb = ab.useDelayedTextureLoading;
      ab.useDelayedTextureLoading = !1;
      const Tb = new Db(bb, ab, null, !1, null, null, null, void 0, !0, Ub, Ab);
      return ab.useDelayedTextureLoading = Mb, Tb
    }

    function fb(bb, ab, Ub) {
      const Ab = Lb.b.Parse((() => {
        let Ab = !1;
        return bb.prefiltered && (Ab = bb.prefiltered), new Db(Ub + (bb.url ?? bb.name), ab, bb.extensions, !1, bb.files || null, null, null, void 0, Ab, bb.forcedExtension)
      }), bb, ab);
      if (bb.boundingBoxPosition && (Ab.boundingBoxPosition = Eb.m.FromArray(bb.boundingBoxPosition)), bb.boundingBoxSize && (Ab.boundingBoxSize = Eb.m.FromArray(bb.boundingBoxSize)), bb.animations)
        for (let Mb = 0; Mb < bb.animations.length; Mb++) {
          const ab = bb.animations[Mb],
            Ub = (0, eb.b)("BABYLON.Animation");
          Ub && Ab.animations.push(Ub.Parse(ab))
        }
      return Ab
    }
    zb || (zb = !0, Db.CreateFromImages = xb, Db.CreateFromPrefilteredData = ib, Db.Parse = fb, Bb.e._CubeTextureParser = fb, (0, eb.f)("BABYLON.CubeTexture", Db))
  },
  40267: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => eb
    });
    var Ab = Ub(37989),
      Mb = Ub(39605),
      Tb = Ub(39033),
      Eb = Ub(38933),
      Yb = Ub(38915);
    let Bb = !1;
    class eb extends Mb.e {
      constructor(bb, ab, Ub) {
        let Ab = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          eb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          vb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5,
          Lb = arguments.length > 6 ? arguments[6] : void 0;
        const Pb = !Ub || Ub._isScene;
        super(null, Pb ? Ub : Ub?.ZR, Pb ? !Ab : Ub, Lb, eb, void 0, void 0, void 0, void 0, vb), Bb || (Bb = !0, Eb.ThinEngine.prototype.createDynamicTexture = function(bb, ab, Ub, Ab) {
          const Mb = new Yb.b(this, 4);
          return Mb.baseWidth = bb, Mb.baseHeight = ab, Ub && (bb = this.needPOTTextures ? (0, Tb.e)(bb, this._caps.maxTextureSize) : bb, ab = this.needPOTTextures ? (0, Tb.e)(ab, this._caps.maxTextureSize) : ab), Mb.width = bb, Mb.height = ab, Mb.isReady = !1, Mb.generateMipMaps = Ub, Mb.samplingMode = Ab, this.updateTextureSamplingMode(Ab, Mb), this._internalTexturesCache.push(Mb), Mb
        }, Eb.ThinEngine.prototype.updateDynamicTexture = function(bb, ab, Ub) {
          let Ab = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            Mb = arguments.length > 4 ? arguments[4] : void 0,
            Tb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
          if (!bb) return;
          const Eb = this._gl,
            Yb = Eb.TEXTURE_2D,
            Bb = this._bindTextureDirectly(Yb, bb, !0, Tb);
          this._unpackFlipY(void 0 === Ub ? bb.invertY : Ub), Ab && Eb.pixelStorei(Eb.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
          const eb = this._getWebGLTextureType(bb.type),
            vb = this._getInternalFormat(Mb || bb.format),
            Lb = this._getRGBABufferInternalSizedFormat(bb.type, vb);
          Eb.texImage2D(Yb, 0, Lb, vb, eb, ab), bb.generateMipMaps && Eb.generateMipmap(Yb), Bb || this._bindTextureDirectly(Yb, null), Ab && Eb.pixelStorei(Eb.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), Mb && (bb.format = Mb), bb._dynamicTextureSource = ab, bb._premulAlpha = Ab, bb.invertY = Ub || !1, bb.isReady = !0
        }), this.name = bb, this.wrapU = Mb.e.CLAMP_ADDRESSMODE, this.wrapV = Mb.e.CLAMP_ADDRESSMODE, this._generateMipMaps = Ab;
        const Xb = this._getEngine();
        if (!Xb) return;
        if (ab.getContext) this._canvas = ab, this._ownCanvas = !1, this._texture = Xb.createDynamicTexture(this._canvas.width, this._canvas.height, Ab, eb);
        else {
          this._canvas = Xb.createCanvas(1, 1), this._ownCanvas = !0;
          const bb = ab;
          bb.width || 0 === bb.width ? this._texture = Xb.createDynamicTexture(bb.width, bb.height, Ab, eb) : this._texture = Xb.createDynamicTexture(ab, ab, Ab, eb)
        }
        const jb = this.getSize();
        this._canvas.width !== jb.width && (this._canvas.width = jb.width), this._canvas.height !== jb.height && (this._canvas.height = jb.height), this._context = this._canvas.getContext("2d")
      }
      getClassName() {
        return "DynamicTexture"
      }
      get canRescale() {
        return !0
      }
      _recreate(bb) {
        this._canvas.width = bb.width, this._canvas.height = bb.height, this.releaseInternalTexture(), this._texture = this._getEngine().createDynamicTexture(bb.width, bb.height, this._generateMipMaps, this.samplingMode)
      }
      scale(bb) {
        const ab = this.getSize();
        ab.width *= bb, ab.height *= bb, this._recreate(ab)
      }
      scaleTo(bb, ab) {
        const Ub = this.getSize();
        Ub.width = bb, Ub.height = ab, this._recreate(Ub)
      }
      getContext() {
        return this._context
      }
      clear(bb) {
        const ab = this.getSize();
        bb && (this._context.fillStyle = bb), this._context.clearRect(0, 0, ab.width, ab.height)
      }
      update(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._texture && this._getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === bb || bb, ab, this._format || void 0, void 0, Ub)
      }
      drawText(bb, ab, Ub, Ab, Mb, Tb, Eb) {
        let Yb = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const Bb = this.getSize();
        if (Tb && (this._context.fillStyle = Tb, this._context.fillRect(0, 0, Bb.width, Bb.height)), this._context.font = Ab, null === ab || void 0 === ab) {
          const Ub = this._context.measureText(bb);
          ab = (Bb.width - Ub.width) / 2
        }
        if (null === Ub || void 0 === Ub) {
          const bb = parseInt(Ab.replace(/\D/g, ""));
          Ub = Bb.height / 2 + bb / 3.65
        }
        this._context.fillStyle = Mb || "", this._context.fillText(bb, ab, Ub), Yb && this.update(Eb)
      }
      dispose() {
        super.dispose(), this._ownCanvas && this._canvas?.remove?.(), this._canvas = null, this._context = null
      }
      clone() {
        const bb = this.oN();
        if (!bb) return this;
        const ab = this.getSize(),
          Ub = new eb(this.name, ab, bb, this._generateMipMaps);
        return Ub.hasAlpha = this.hasAlpha, Ub.level = this.level, Ub.wrapU = this.wrapU, Ub.wrapV = this.wrapV, Ub
      }
      serialize() {
        const bb = this.oN();
        bb && !bb.isReady() && Ab.e.Warn("The scene must be ready before serializing the dynamic texture");
        const ab = super.serialize();
        return eb._IsCanvasElement(this._canvas) && (ab.base64String = this._canvas.toDataURL()), ab.invertY = this._invertY, ab.samplingMode = this.samplingMode, ab
      }
      static _IsCanvasElement(bb) {
        return void 0 !== bb.toDataURL
      }
      _rebuild() {
        this.update()
      }
    }
  },
  40240: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Mb
    });
    var Ab = Ub(39605);
    class Mb extends Ab.e {
      get depth() {
        return this._depth
      }
      constructor(bb, ab, Ub, Mb, Tb, Eb) {
        let Yb = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          Bb = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          eb = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Ab.e.TRILINEAR_SAMPLINGMODE,
          vb = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          Lb = arguments.length > 10 ? arguments[10] : void 0,
          Pb = arguments.length > 11 ? arguments[11] : void 0;
        super(null, Eb, !Yb, Bb), this.format = Tb, this._texture = Eb.vj().createRawTexture2DArray(bb, ab, Ub, Mb, Tb, Yb, Bb, eb, null, vb, Lb ?? 0, Pb), this._depth = Mb, this.is2DArray = !0
      }
      update(bb) {
        this.updateMipLevel(bb, 0)
      }
      updateMipLevel(bb, ab) {
        this._texture && this._getEngine().updateRawTexture2DArray(this._texture, bb, this._texture.format, this._texture.invertY, null, this._texture.type, ab)
      }
      static CreateRGBATexture(bb, ab, Ub, Ab, Tb) {
        return new Mb(bb, ab, Ub, Ab, 5, Tb, !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0)
      }
    }
  },
  40238: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Ab.d
    });
    var Ab = Ub(39473);
    (0, Ab.g)()
  },
  39185: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Ab.e
    });
    var Ab = Ub(39188);
    (0, Ab.d)()
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);