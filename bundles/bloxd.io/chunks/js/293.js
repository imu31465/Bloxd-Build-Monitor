export const id = 293;
export const ids = [293];
export const modules = {
  41916: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Vb,
      d: () => gb
    });
    var eb = Mb(39971),
      Hb = Mb(41697),
      pb = Mb(41879),
      Vb = {};
    class gb {
      constructor(bb) {
        this.attachedToElement = !1, this.attached = {}, this.camera = bb, this.checkInputs = () => {}
      }
      add(bb) {
        const wb = bb.getSimpleName();
        this.attached[wb] ? eb.b.Warn("camera input of type " + wb + " already exists on camera") : (this.attached[wb] = bb, bb.camera = this.camera, bb.checkInputs && (this.checkInputs = this._addCheckInputs(bb.checkInputs.bind(bb))), this.attachedToElement && bb.attachControl(this.noPreventDefault))
      }
      remove(bb) {
        for (const wb in this.attached) {
          const Mb = this.attached[wb];
          if (Mb === bb) return Mb.detachControl(), Mb.camera = null, delete this.attached[wb], void this.rebuildInputCheck()
        }
      }
      removeByType(bb) {
        for (const wb in this.attached) {
          const Mb = this.attached[wb];
          Mb.getClassName() === bb && (Mb.detachControl(), Mb.camera = null, delete this.attached[wb], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(bb) {
        const wb = this.checkInputs;
        return () => {
          wb(), bb()
        }
      }
      attachInput(bb) {
        this.attachedToElement && bb.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          bb = !pb.c.ForceAttachControlToAlwaysPreventDefault && bb, this.attachedToElement = !0, this.noPreventDefault = bb;
          for (const wb in this.attached) this.attached[wb].attachControl(bb)
        }
      }
      detachElement() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const wb in this.attached) this.attached[wb].detachControl(), bb && (this.attached[wb].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const bb in this.attached) {
          const wb = this.attached[bb];
          wb.checkInputs && (this.checkInputs = this._addCheckInputs(wb.checkInputs.bind(wb)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(bb) {
        const wb = {};
        for (const Mb in this.attached) {
          const bb = this.attached[Mb],
            eb = Hb.d.Serialize(bb);
          wb[bb.getClassName()] = eb
        }
        bb.inputsmgr = wb
      }
      parse(bb) {
        const wb = bb.inputsmgr;
        if (wb) {
          this.clear();
          for (const bb in wb) {
            const Mb = Vb[bb];
            if (Mb) {
              const eb = wb[bb],
                pb = Hb.d.Parse((() => new Mb), eb, null);
              this.add(pb)
            }
          }
        } else
          for (const Mb in this.attached) {
            const wb = Vb[this.attached[Mb].getClassName()];
            if (wb) {
              const eb = Hb.d.Parse((() => new wb), bb, null);
              this.remove(this.attached[Mb]), this.add(eb)
            }
          }
      }
    }
  },
  42805: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => mb
    });
    var eb = Mb(41675),
      Hb = Mb(41679),
      pb = Mb(41565),
      Vb = Mb(38285),
      gb = Mb(41671),
      lb = Mb(42152),
      Lb = Mb(38333),
      Ib = Mb(38318),
      Ob = Mb(41697),
      Ub = Mb(41506),
      tb = Mb(39971),
      Cb = Mb(41722),
      Eb = Mb(39148),
      Fb = Mb(41755);
    var Bb = Mb(41572);
    let sb = !1;
    let mb = (() => {
        var bb;
        let wb, Mb, Lb, mb, hb, zb, Xb, xb, jb, Kb = gb.b,
          rb = [],
          Rb = [],
          Db = [],
          cb = [],
          Yb = [],
          Zb = [],
          fb = [],
          Ab = [],
          Wb = [],
          Jb = [],
          Sb = [],
          Nb = [],
          vb = [],
          Qb = [],
          Gb = [];
        return bb = class extends Kb {
          set boundingBoxSize(bb) {
            if (this._boundingBoxSize && this._boundingBoxSize.equals(bb)) return;
            this._boundingBoxSize = bb;
            const wb = this.RJ();
            wb && wb.markAllMaterialsAsDirty(1)
          }
          get boundingBoxSize() {
            return this._boundingBoxSize
          }
          set rotationY(bb) {
            this._rotationY = bb, this.setReflectionTextureMatrix(Vb.b.RotationY(this._rotationY))
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
          constructor(bb, wb) {
            let Mb, Hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              pb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              gb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              Lb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              Ob = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              mb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 5,
              hb = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              zb = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              Xb = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
              xb = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : .8,
              jb = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 0,
              Kb = arguments.length > 13 ? arguments[13] : void 0,
              qb = arguments.length > 14 ? arguments[14] : void 0;
            super(wb), this._delayedOnLoad = (0, eb.m)(this, rb), this.onLoadObservable = new Ib.b, this.url = (0, eb.m)(this, Rb, void 0), this.boundingBoxPosition = ((0, eb.m)(this, Db), (0, eb.m)(this, cb, Vb.o.Zero())), this._boundingBoxSize = (0, eb.m)(this, Yb), this._rotationY = 0, this._files = (0, eb.m)(this, Zb, null), this._forcedExtension = ((0, eb.m)(this, fb), (0, eb.m)(this, Ab, null)), this._extensions = ((0, eb.m)(this, Wb), (0, eb.m)(this, Jb, null)), this._textureMatrix = ((0, eb.m)(this, Sb), (0, eb.m)(this, Nb, void 0)), this._textureMatrixRefraction = ((0, eb.m)(this, vb), (0, eb.m)(this, Qb, new Vb.b)), this._format = (0, eb.m)(this, Gb), this._buffer = null, sb || (sb = !0, Bb.d.prototype._partialLoadFile = function(bb, wb, Mb, eb) {
              let Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
              this._loadFile(bb, (bb => {
                Mb[wb] = bb, Mb._internalCount++, 6 === Mb._internalCount && eb(Mb)
              }), void 0, void 0, !0, ((bb, wb) => {
                Hb && bb && Hb(bb.status + " " + bb.statusText, wb)
              }))
            }, Bb.d.prototype._cascadeLoadFiles = function(bb, wb, Mb) {
              let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
              const Hb = [];
              Hb._internalCount = 0;
              for (let pb = 0; pb < 6; pb++) this._partialLoadFile(Mb[pb], pb, Hb, wb, eb)
            }, Bb.d.prototype._cascadeLoadImgs = function(bb, wb, Mb, eb) {
              let Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                pb = arguments.length > 5 ? arguments[5] : void 0;
              const Vb = [];
              Vb._internalCount = 0;
              for (let gb = 0; gb < 6; gb++) this._partialLoadImg(eb[gb], gb, Vb, bb, wb, Mb, Hb, pb)
            }, Bb.d.prototype._partialLoadImg = function(bb, wb, Mb, eb, Hb, pb) {
              let Vb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                gb = arguments.length > 7 ? arguments[7] : void 0;
              const lb = (0, Eb.c)();
              (0, Cb.o)(bb, (bb => {
                Mb[wb] = bb, Mb._internalCount++, eb && eb.removePendingData(lb), 6 === Mb._internalCount && pb && pb(Hb, Mb)
              }), ((bb, wb) => {
                eb && eb.removePendingData(lb), Vb && Vb(bb, wb)
              }), eb ? eb.offlineProvider : null, gb), eb && eb.addPendingData(lb)
            }, Bb.d.prototype.createCubeTextureBase = function(bb, wb, Mb, eb) {
              let Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                pb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                Vb = arguments.length > 6 ? arguments[6] : void 0,
                gb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                lb = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
                Lb = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
                Ib = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
                Ob = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
                Cb = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
                Eb = arguments.length > 13 && void 0 !== arguments[13] ? arguments[13] : null,
                Bb = arguments.length > 14 && void 0 !== arguments[14] && arguments[14],
                sb = arguments.length > 15 && void 0 !== arguments[15] ? arguments[15] : null;
              const mb = Ob || new Ub.e(this, 7);
              mb.isCube = !0, mb.url = bb, mb.generateMipMaps = !eb, mb._lodGenerationScale = Lb, mb._lodGenerationOffset = Ib, mb._useSRGBBuffer = !!Bb && this._caps.supportSRGBBuffers && (this.version > 1 || this.isWebGPU || !!eb), mb !== Ob && (mb.label = bb.substring(0, 60)), this._doNotHandleContextLost || (mb._extension = gb, mb._files = Mb, mb._buffer = sb);
              const hb = bb;
              this._transformTextureUrl && !Ob && (bb = this._transformTextureUrl(bb));
              const zb = gb ?? function(bb) {
                  const wb = bb.split("?")[0],
                    Mb = wb.lastIndexOf(".");
                  return Mb > -1 ? wb.substring(Mb).toLowerCase() : ""
                }(bb),
                Xb = (0, Fb.c)(zb),
                xb = (bb, wb) => {
                  mb.dispose(), pb ? pb(bb, wb) : bb && tb.b.Warn(bb)
                },
                jb = (pb, Ob) => {
                  bb === hb ? pb && xb(pb.status + " " + pb.statusText, Ob) : (tb.b.Warn(`Failed to load ${bb}, falling back to the ${hb}`), this.createCubeTextureBase(hb, wb, Mb, !!eb, Hb, xb, Vb, gb, lb, Lb, Ib, mb, Cb, Eb, Bb, sb))
                };
              if (Xb) Xb.then((eb => {
                const pb = bb => {
                  Cb && Cb(mb, bb), eb.loadCubeData(bb, mb, lb, Hb, ((bb, wb) => {
                    xb(bb, wb)
                  }))
                };
                sb ? pb(sb) : Mb && 6 === Mb.length ? eb.supportCascades ? this._cascadeLoadFiles(wb, (bb => pb(bb.map((bb => new Uint8Array(bb))))), Mb, xb) : xb("Textures type does not support cascades.") : this._loadFile(bb, (bb => pb(new Uint8Array(bb))), void 0, wb ? wb.offlineProvider || null : void 0, !0, jb)
              }));
              else {
                if (!Mb || 0 === Mb.length) throw new Error("Cannot load cubemap because files were not defined, or the correct loader was not found.");
                this._cascadeLoadImgs(wb, mb, ((bb, wb) => {
                  Eb && Eb(bb, wb)
                }), Mb, xb)
              }
              return this._internalTexturesCache.push(mb), mb
            }), this.name = bb, this.url = bb, this._noMipmap = pb, this.hasAlpha = !1, this.isCube = !0, this._textureMatrix = Vb.b.Identity(), this.coordinatesMode = lb.f.CUBIC_MODE;
            let ab = null;
            null === Hb || Array.isArray(Hb) ? (this._noMipmap = pb, this._format = mb, this._createPolynomials = Xb, Mb = Hb, this._loaderOptions = Kb, this._useSRGBBuffer = qb, this._lodScale = xb, this._lodOffset = jb) : (Mb = Hb.extensions ?? null, this._noMipmap = Hb.noMipmap ?? !1, gb = Hb.files ?? null, ab = Hb.buffer ?? null, this._format = Hb.format ?? 5, hb = Hb.prefiltered ?? !1, zb = Hb.forcedExtension ?? null, this._createPolynomials = Hb.createPolynomials ?? !1, this._lodScale = Hb.lodScale ?? .8, this._lodOffset = Hb.lodOffset ?? 0, this._loaderOptions = Hb.loaderOptions, this._useSRGBBuffer = Hb.useSRGBBuffer, this._sphericalPolynomialTargetSize = Hb.sphericalPolynomialTargetSize ?? 0, Lb = Hb.onLoad ?? null, Ob = Hb.onError ?? null), (bb || gb) && this.updateURL(bb, zb, Lb, hb, Ob, Mb, this.RJ()?.useDelayedTextureLoading, gb, ab)
          }
          getClassName() {
            return "CubeTexture"
          }
          updateURL(bb) {
            let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              eb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              pb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              Vb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
              gb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              lb = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
            this.name && !this.name.startsWith("data:") || (this.name = bb), this.url = bb, wb && (this._forcedExtension = wb);
            const Lb = bb.lastIndexOf("."),
              Ib = wb || (Lb > -1 ? bb.substring(Lb).toLowerCase() : ""),
              Ob = 0 === Ib.indexOf(".dds"),
              Ub = 0 === Ib.indexOf(".env"),
              tb = 0 === Ib.indexOf(".basis");
            if (Ub ? (this.gammaSpace = !1, this._prefiltered = !1, this.anisotropicFilteringLevel = 1) : (this._prefiltered = eb, eb && (this.gammaSpace = !1, this.anisotropicFilteringLevel = 1)), gb) this._files = gb;
            else if (tb || Ub || Ob || pb || (pb = ["_px.jpg", "_py.jpg", "_pz.jpg", "_nx.jpg", "_ny.jpg", "_nz.jpg"]), this._files = this._files || [], this._files.length = 0, pb) {
              for (let wb = 0; wb < pb.length; wb++) this._files.push(bb + pb[wb]);
              this._extensions = pb
            }
            this._buffer = lb, Vb ? (this.delayLoadState = 4, this._delayedOnLoad = Mb, this._delayedOnError = Hb) : this._loadTexture(Mb, Hb)
          }
          delayLoad(bb) {
            4 === this.delayLoadState && (bb && (this._forcedExtension = bb), this.delayLoadState = 1, this._loadTexture(this._delayedOnLoad, this._delayedOnError))
          }
          getReflectionTextureMatrix() {
            return this._textureMatrix
          }
          setReflectionTextureMatrix(bb) {
            if (bb.updateFlag === this._textureMatrix.updateFlag) return;
            if (bb.isIdentity() !== this._textureMatrix.isIdentity() && this.RJ()?.markAllMaterialsAsDirty(1, (bb => -1 !== bb.getActiveTextures().indexOf(this))), this._textureMatrix = bb, !this.RJ()?.useRightHandedSystem) return;
            const wb = Vb.j.YC[0],
              Mb = Vb.j.Quaternion[0],
              eb = Vb.j.YC[1];
            this._textureMatrix.decompose(wb, Mb, eb), Mb.z *= -1, Mb.w *= -1, Vb.b.ComposeToRef(wb, Mb, eb, this._textureMatrixRefraction)
          }
          getRefractionTextureMatrix() {
            return this.RJ()?.useRightHandedSystem ? this._textureMatrixRefraction : this._textureMatrix
          }
          _loadTexture() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            const Mb = this.RJ(),
              eb = this._texture;
            this._texture = this._getFromCache(this.url, this._noMipmap, void 0, void 0, this._useSRGBBuffer, this.isCube);
            const Hb = () => {
                this.onLoadObservable.notifyObservers(this), eb && (eb.dispose(), this.RJ()?.markAllMaterialsAsDirty(1)), bb && bb()
              },
              Vb = (bb, Mb) => {
                this._loadingError = !0, this._errorObject = {
                  message: bb,
                  exception: Mb
                }, wb && wb(bb, Mb), lb.f.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            this._texture ? this._texture.isReady ? pb.d.SetImmediate((() => Hb())) : this._texture.onLoadedObservable.add((() => Hb())) : (this._prefiltered ? this._texture = this._getEngine().createPrefilteredCubeTexture(this.url, Mb, this._lodScale, this._lodOffset, bb, Vb, this._format, this._forcedExtension, this._createPolynomials, this._buffer) : this._texture = this._getEngine().createCubeTexture(this.url, Mb, this._files, this._noMipmap, bb, Vb, this._format, this._forcedExtension, !1, this._lodScale, this._lodOffset, null, this._loaderOptions, !!this._useSRGBBuffer, this._buffer), this._texture?.onLoadedObservable.add((() => this.onLoadObservable.notifyObservers(this))))
          }
          clone() {
            let wb = 0;
            const Mb = this.irradianceTexture,
              eb = Ob.d.Clone((() => {
                const Mb = new bb(this.url, this.RJ() || this._getEngine(), this._extensions, this._noMipmap, this._files);
                return wb = Mb.uniqueId, Mb
              }), this);
            return eb.uniqueId = wb, Mb && !this.irradianceTexture && (this.irradianceTexture = Mb), eb
          }
        }, (() => {
          const pb = "function" === typeof Symbol && Symbol.metadata ? Object.create(Kb[Symbol.metadata] ?? null) : void 0;
          wb = [(0, Hb.E)()], Mb = [(0, Hb.B)()], Lb = [(0, Hb.B)()], mb = [(0, Hb.E)("rotationY")], hb = [(0, Hb.E)("files")], zb = [(0, Hb.E)("forcedExtension")], Xb = [(0, Hb.E)("extensions")], xb = [(0, Hb.q)("textureMatrix")], jb = [(0, Hb.q)("textureMatrixRefraction")], (0, eb.i)(bb, null, Lb, {
            kind: "getter",
            name: "boundingBoxSize",
            static: !1,
            private: !1,
            access: {
              has: bb => "boundingBoxSize" in bb,
              get: bb => bb.boundingBoxSize
            },
            metadata: pb
          }, null, rb), (0, eb.i)(bb, null, mb, {
            kind: "setter",
            name: "rotationY",
            static: !1,
            private: !1,
            access: {
              has: bb => "rotationY" in bb,
              set: (bb, wb) => {
                bb.rotationY = wb
              }
            },
            metadata: pb
          }, null, rb), (0, eb.i)(null, null, wb, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: bb => "url" in bb,
              get: bb => bb.url,
              set: (bb, wb) => {
                bb.url = wb
              }
            },
            metadata: pb
          }, Rb, Db), (0, eb.i)(null, null, Mb, {
            kind: "field",
            name: "boundingBoxPosition",
            static: !1,
            private: !1,
            access: {
              has: bb => "boundingBoxPosition" in bb,
              get: bb => bb.boundingBoxPosition,
              set: (bb, wb) => {
                bb.boundingBoxPosition = wb
              }
            },
            metadata: pb
          }, cb, Yb), (0, eb.i)(null, null, hb, {
            kind: "field",
            name: "_files",
            static: !1,
            private: !1,
            access: {
              has: bb => "_files" in bb,
              get: bb => bb._files,
              set: (bb, wb) => {
                bb._files = wb
              }
            },
            metadata: pb
          }, Zb, fb), (0, eb.i)(null, null, zb, {
            kind: "field",
            name: "_forcedExtension",
            static: !1,
            private: !1,
            access: {
              has: bb => "_forcedExtension" in bb,
              get: bb => bb._forcedExtension,
              set: (bb, wb) => {
                bb._forcedExtension = wb
              }
            },
            metadata: pb
          }, Ab, Wb), (0, eb.i)(null, null, Xb, {
            kind: "field",
            name: "_extensions",
            static: !1,
            private: !1,
            access: {
              has: bb => "_extensions" in bb,
              get: bb => bb._extensions,
              set: (bb, wb) => {
                bb._extensions = wb
              }
            },
            metadata: pb
          }, Jb, Sb), (0, eb.i)(null, null, xb, {
            kind: "field",
            name: "_textureMatrix",
            static: !1,
            private: !1,
            access: {
              has: bb => "_textureMatrix" in bb,
              get: bb => bb._textureMatrix,
              set: (bb, wb) => {
                bb._textureMatrix = wb
              }
            },
            metadata: pb
          }, Nb, vb), (0, eb.i)(null, null, jb, {
            kind: "field",
            name: "_textureMatrixRefraction",
            static: !1,
            private: !1,
            access: {
              has: bb => "_textureMatrixRefraction" in bb,
              get: bb => bb._textureMatrixRefraction,
              set: (bb, wb) => {
                bb._textureMatrixRefraction = wb
              }
            },
            metadata: pb
          }, Qb, Gb), pb && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: pb
          })
        })(), bb
      })(),
      hb = !1;

    function zb(bb, wb, Mb) {
      let eb = "";
      for (const Hb of bb) eb += Hb;
      return new mb(eb, wb, null, Mb, bb)
    }

    function Xb(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        eb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const Hb = wb.useDelayedTextureLoading;
      wb.useDelayedTextureLoading = !1;
      const pb = new mb(bb, wb, null, !1, null, null, null, void 0, !0, Mb, eb);
      return wb.useDelayedTextureLoading = Hb, pb
    }

    function xb(bb, wb, Mb) {
      const eb = Ob.d.Parse((() => {
        let eb = !1;
        return bb.prefiltered && (eb = bb.prefiltered), new mb(Mb + (bb.url ?? bb.name), wb, bb.extensions, !1, bb.files || null, null, null, void 0, eb, bb.forcedExtension)
      }), bb, wb);
      if (bb.boundingBoxPosition && (eb.boundingBoxPosition = Vb.o.FromArray(bb.boundingBoxPosition)), bb.boundingBoxSize && (eb.boundingBoxSize = Vb.o.FromArray(bb.boundingBoxSize)), bb.animations)
        for (let Hb = 0; Hb < bb.animations.length; Hb++) {
          const wb = bb.animations[Hb],
            Mb = (0, Lb.c)("BABYLON.Animation");
          Mb && eb.animations.push(Mb.Parse(wb))
        }
      return eb
    }
    hb || (hb = !0, mb.CreateFromImages = zb, mb.CreateFromPrefilteredData = Xb, mb.Parse = xb, lb.f._CubeTextureParser = xb, (0, Lb.e)("BABYLON.CubeTexture", mb))
  },
  42847: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Lb
    });
    var eb = Mb(39971),
      Hb = Mb(42152),
      pb = Mb(41611),
      Vb = Mb(41511),
      gb = Mb(41506);
    let lb = !1;
    class Lb extends Hb.f {
      constructor(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Lb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          Ib = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5,
          Ob = arguments.length > 6 ? arguments[6] : void 0;
        const Ub = !Mb || Mb._isScene;
        super(null, Ub ? Mb : Mb?.JE, Ub ? !eb : Mb, Ob, Lb, void 0, void 0, void 0, void 0, Ib), lb || (lb = !0, Vb.ThinEngine.prototype.createDynamicTexture = function(bb, wb, Mb, eb) {
          const Hb = new gb.e(this, 4);
          return Hb.baseWidth = bb, Hb.baseHeight = wb, Mb && (bb = this.needPOTTextures ? (0, pb.e)(bb, this._caps.maxTextureSize) : bb, wb = this.needPOTTextures ? (0, pb.e)(wb, this._caps.maxTextureSize) : wb), Hb.width = bb, Hb.height = wb, Hb.isReady = !1, Hb.generateMipMaps = Mb, Hb.samplingMode = eb, this.updateTextureSamplingMode(eb, Hb), this._internalTexturesCache.push(Hb), Hb
        }, Vb.ThinEngine.prototype.updateDynamicTexture = function(bb, wb, Mb) {
          let eb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            Hb = arguments.length > 4 ? arguments[4] : void 0,
            pb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
          if (!bb) return;
          const Vb = this._gl,
            gb = Vb.TEXTURE_2D,
            lb = this._bindTextureDirectly(gb, bb, !0, pb);
          this._unpackFlipY(void 0 === Mb ? bb.invertY : Mb), eb && Vb.pixelStorei(Vb.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
          const Lb = this._getWebGLTextureType(bb.type),
            Ib = this._getInternalFormat(Hb || bb.format),
            Ob = this._getRGBABufferInternalSizedFormat(bb.type, Ib);
          Vb.texImage2D(gb, 0, Ob, Ib, Lb, wb), bb.generateMipMaps && Vb.generateMipmap(gb), lb || this._bindTextureDirectly(gb, null), eb && Vb.pixelStorei(Vb.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), Hb && (bb.format = Hb), bb._dynamicTextureSource = wb, bb._premulAlpha = eb, bb.invertY = Mb || !1, bb.isReady = !0
        }), this.name = bb, this.wrapU = Hb.f.CLAMP_ADDRESSMODE, this.wrapV = Hb.f.CLAMP_ADDRESSMODE, this._generateMipMaps = eb;
        const tb = this._getEngine();
        if (!tb) return;
        if (wb.getContext) this._canvas = wb, this._ownCanvas = !1, this._texture = tb.createDynamicTexture(this._canvas.width, this._canvas.height, eb, Lb);
        else {
          this._canvas = tb.createCanvas(1, 1), this._ownCanvas = !0;
          const bb = wb;
          bb.width || 0 === bb.width ? this._texture = tb.createDynamicTexture(bb.width, bb.height, eb, Lb) : this._texture = tb.createDynamicTexture(wb, wb, eb, Lb)
        }
        const Cb = this.getSize();
        this._canvas.width !== Cb.width && (this._canvas.width = Cb.width), this._canvas.height !== Cb.height && (this._canvas.height = Cb.height), this._context = this._canvas.getContext("2d")
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
        const wb = this.getSize();
        wb.width *= bb, wb.height *= bb, this._recreate(wb)
      }
      scaleTo(bb, wb) {
        const Mb = this.getSize();
        Mb.width = bb, Mb.height = wb, this._recreate(Mb)
      }
      getContext() {
        return this._context
      }
      clear(bb) {
        const wb = this.getSize();
        bb && (this._context.fillStyle = bb), this._context.clearRect(0, 0, wb.width, wb.height)
      }
      update(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._texture && this._getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === bb || bb, wb, this._format || void 0, void 0, Mb)
      }
      drawText(bb, wb, Mb, eb, Hb, pb, Vb) {
        let gb = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const lb = this.getSize();
        if (pb && (this._context.fillStyle = pb, this._context.fillRect(0, 0, lb.width, lb.height)), this._context.font = eb, null === wb || void 0 === wb) {
          const Mb = this._context.measureText(bb);
          wb = (lb.width - Mb.width) / 2
        }
        if (null === Mb || void 0 === Mb) {
          const bb = parseInt(eb.replace(/\D/g, ""));
          Mb = lb.height / 2 + bb / 3.65
        }
        this._context.fillStyle = Hb || "", this._context.fillText(bb, wb, Mb), gb && this.update(Vb)
      }
      dispose() {
        super.dispose(), this._ownCanvas && this._canvas?.remove?.(), this._canvas = null, this._context = null
      }
      clone() {
        const bb = this.RJ();
        if (!bb) return this;
        const wb = this.getSize(),
          Mb = new Lb(this.name, wb, bb, this._generateMipMaps);
        return Mb.hasAlpha = this.hasAlpha, Mb.level = this.level, Mb.wrapU = this.wrapU, Mb.wrapV = this.wrapV, Mb
      }
      serialize() {
        const bb = this.RJ();
        bb && !bb.isReady() && eb.b.Warn("The scene must be ready before serializing the dynamic texture");
        const wb = super.serialize();
        return Lb._IsCanvasElement(this._canvas) && (wb.base64String = this._canvas.toDataURL()), wb.invertY = this._invertY, wb.samplingMode = this.samplingMode, wb
      }
      static _IsCanvasElement(bb) {
        return void 0 !== bb.toDataURL
      }
      _rebuild() {
        this.update()
      }
    }
  },
  42822: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Hb
    });
    var eb = Mb(42152);
    class Hb extends eb.f {
      get depth() {
        return this._depth
      }
      constructor(bb, wb, Mb, Hb, pb, Vb) {
        let gb = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          lb = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          Lb = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : eb.f.TRILINEAR_SAMPLINGMODE,
          Ib = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          Ob = arguments.length > 10 ? arguments[10] : void 0,
          Ub = arguments.length > 11 ? arguments[11] : void 0;
        super(null, Vb, !gb, lb), this.format = pb, this._texture = Vb.DC().createRawTexture2DArray(bb, wb, Mb, Hb, pb, gb, lb, Lb, null, Ib, Ob ?? 0, Ub), this._depth = Hb, this.is2DArray = !0
      }
      update(bb) {
        this.updateMipLevel(bb, 0)
      }
      updateMipLevel(bb, wb) {
        this._texture && this._getEngine().updateRawTexture2DArray(this._texture, bb, this._texture.format, this._texture.invertY, null, this._texture.type, wb)
      }
      static CreateRGBATexture(bb, wb, Mb, eb, pb) {
        return new Hb(bb, wb, Mb, eb, 5, pb, !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0)
      }
    }
  },
  42814: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => eb.d
    });
    var eb = Mb(42044);
    (0, eb.h)()
  },
  41759: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => eb.g
    });
    var eb = Mb(41764);
    (0, eb.d)()
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);