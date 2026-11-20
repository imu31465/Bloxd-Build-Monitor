export const id = 249;
export const ids = [249];
export const modules = {
  39980: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => mq,
      f: () => xq
    });
    var Yq = gq(38653),
      lq = gq(39779),
      Oq = gq(39951),
      mq = {};
    class xq {
      constructor(qq) {
        this.attachedToElement = !1, this.attached = {}, this.camera = qq, this.checkInputs = () => {}
      }
      add(qq) {
        const Eq = qq.getSimpleName();
        this.attached[Eq] ? Yq.b.Warn("camera input of type " + Eq + " already exists on camera") : (this.attached[Eq] = qq, qq.camera = this.camera, qq.checkInputs && (this.checkInputs = this._addCheckInputs(qq.checkInputs.bind(qq))), this.attachedToElement && qq.attachControl(this.noPreventDefault))
      }
      remove(qq) {
        for (const Eq in this.attached) {
          const gq = this.attached[Eq];
          if (gq === qq) return gq.detachControl(), gq.camera = null, delete this.attached[Eq], void this.rebuildInputCheck()
        }
      }
      removeByType(qq) {
        for (const Eq in this.attached) {
          const gq = this.attached[Eq];
          gq.getClassName() === qq && (gq.detachControl(), gq.camera = null, delete this.attached[Eq], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(qq) {
        const Eq = this.checkInputs;
        return () => {
          Eq(), qq()
        }
      }
      attachInput(qq) {
        this.attachedToElement && qq.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          qq = !Oq.e.ForceAttachControlToAlwaysPreventDefault && qq, this.attachedToElement = !0, this.noPreventDefault = qq;
          for (const Eq in this.attached) this.attached[Eq].attachControl(qq)
        }
      }
      detachElement() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const Eq in this.attached) this.attached[Eq].detachControl(), qq && (this.attached[Eq].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const qq in this.attached) {
          const Eq = this.attached[qq];
          Eq.checkInputs && (this.checkInputs = this._addCheckInputs(Eq.checkInputs.bind(Eq)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(qq) {
        const Eq = {};
        for (const gq in this.attached) {
          const qq = this.attached[gq],
            Yq = lq.d.Serialize(qq);
          Eq[qq.getClassName()] = Yq
        }
        qq.inputsmgr = Eq
      }
      parse(qq) {
        const Eq = qq.inputsmgr;
        if (Eq) {
          this.clear();
          for (const qq in Eq) {
            const gq = mq[qq];
            if (gq) {
              const Yq = Eq[qq],
                Oq = lq.d.Parse((() => new gq), Yq, null);
              this.add(Oq)
            }
          }
        } else
          for (const gq in this.attached) {
            const Eq = mq[this.attached[gq].getClassName()];
            if (Eq) {
              const Yq = lq.d.Parse((() => new Eq), qq, null);
              this.remove(this.attached[gq]), this.add(Yq)
            }
          }
      }
    }
  },
  40878: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => oq
    });
    var Yq = gq(39757),
      lq = gq(39759),
      Oq = gq(39644),
      mq = gq(37139),
      xq = gq(39748),
      Aq = gq(40233),
      cq = gq(37171),
      uq = gq(37156),
      Bq = gq(39779),
      Wq = gq(39593),
      Nq = gq(38653),
      aq = gq(39799),
      Vq = gq(37872),
      dq = gq(39830);
    var jq = gq(39653);
    let Hq = !1;
    let oq = (() => {
        var qq;
        let Eq, gq, cq, oq, Pq, Qq, yq, tq, rq, vq = xq.d,
          hq = [],
          nq = [],
          bq = [],
          iq = [],
          Zq = [],
          fq = [],
          Mq = [],
          Tq = [],
          zq = [],
          Sq = [],
          pq = [],
          Gq = [],
          Lq = [],
          Jq = [],
          kq = [];
        return qq = class extends vq {
          set boundingBoxSize(qq) {
            if (this._boundingBoxSize && this._boundingBoxSize.equals(qq)) return;
            this._boundingBoxSize = qq;
            const Eq = this.ZJ();
            Eq && Eq.markAllMaterialsAsDirty(1)
          }
          get boundingBoxSize() {
            return this._boundingBoxSize
          }
          set rotationY(qq) {
            this._rotationY = qq, this.setReflectionTextureMatrix(mq.e.RotationY(this._rotationY))
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
          constructor(qq, Eq) {
            let gq, lq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              Oq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              xq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              cq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              Bq = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              oq = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 5,
              Pq = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              Qq = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              yq = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
              tq = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : .8,
              rq = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 0,
              vq = arguments.length > 13 ? arguments[13] : void 0,
              Rq = arguments.length > 14 ? arguments[14] : void 0;
            super(Eq), this._delayedOnLoad = (0, Yq.i)(this, hq), this.onLoadObservable = new uq.d, this.url = (0, Yq.i)(this, nq, void 0), this.boundingBoxPosition = ((0, Yq.i)(this, bq), (0, Yq.i)(this, iq, mq.q.Zero())), this._boundingBoxSize = (0, Yq.i)(this, Zq), this._rotationY = 0, this._files = (0, Yq.i)(this, fq, null), this._forcedExtension = ((0, Yq.i)(this, Mq), (0, Yq.i)(this, Tq, null)), this._extensions = ((0, Yq.i)(this, zq), (0, Yq.i)(this, Sq, null)), this._textureMatrix = ((0, Yq.i)(this, pq), (0, Yq.i)(this, Gq, void 0)), this._textureMatrixRefraction = ((0, Yq.i)(this, Lq), (0, Yq.i)(this, Jq, new mq.e)), this._format = (0, Yq.i)(this, kq), this._buffer = null, Hq || (Hq = !0, jq.b.prototype._partialLoadFile = function(qq, Eq, gq, Yq) {
              let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
              this._loadFile(qq, (qq => {
                gq[Eq] = qq, gq._internalCount++, 6 === gq._internalCount && Yq(gq)
              }), void 0, void 0, !0, ((qq, Eq) => {
                lq && qq && lq(qq.status + " " + qq.statusText, Eq)
              }))
            }, jq.b.prototype._cascadeLoadFiles = function(qq, Eq, gq) {
              let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
              const lq = [];
              lq._internalCount = 0;
              for (let Oq = 0; Oq < 6; Oq++) this._partialLoadFile(gq[Oq], Oq, lq, Eq, Yq)
            }, jq.b.prototype._cascadeLoadImgs = function(qq, Eq, gq, Yq) {
              let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                Oq = arguments.length > 5 ? arguments[5] : void 0;
              const mq = [];
              mq._internalCount = 0;
              for (let xq = 0; xq < 6; xq++) this._partialLoadImg(Yq[xq], xq, mq, qq, Eq, gq, lq, Oq)
            }, jq.b.prototype._partialLoadImg = function(qq, Eq, gq, Yq, lq, Oq) {
              let mq = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                xq = arguments.length > 7 ? arguments[7] : void 0;
              const Aq = (0, Vq.d)();
              (0, aq.x)(qq, (qq => {
                gq[Eq] = qq, gq._internalCount++, Yq && Yq.removePendingData(Aq), 6 === gq._internalCount && Oq && Oq(lq, gq)
              }), ((qq, Eq) => {
                Yq && Yq.removePendingData(Aq), mq && mq(qq, Eq)
              }), Yq ? Yq.offlineProvider : null, xq), Yq && Yq.addPendingData(Aq)
            }, jq.b.prototype.createCubeTextureBase = function(qq, Eq, gq, Yq) {
              let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                Oq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                mq = arguments.length > 6 ? arguments[6] : void 0,
                xq = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                Aq = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
                cq = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
                uq = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
                Bq = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
                aq = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
                Vq = arguments.length > 13 && void 0 !== arguments[13] ? arguments[13] : null,
                jq = arguments.length > 14 && void 0 !== arguments[14] && arguments[14],
                Hq = arguments.length > 15 && void 0 !== arguments[15] ? arguments[15] : null;
              const oq = Bq || new Wq.c(this, 7);
              oq.isCube = !0, oq.url = qq, oq.generateMipMaps = !Yq, oq._lodGenerationScale = cq, oq._lodGenerationOffset = uq, oq._useSRGBBuffer = !!jq && this._caps.supportSRGBBuffers && (this.version > 1 || this.isWebGPU || !!Yq), oq !== Bq && (oq.label = qq.substring(0, 60)), this._doNotHandleContextLost || (oq._extension = xq, oq._files = gq, oq._buffer = Hq);
              const Pq = qq;
              this._transformTextureUrl && !Bq && (qq = this._transformTextureUrl(qq));
              const Qq = xq ?? function(qq) {
                  const Eq = qq.split("?")[0],
                    gq = Eq.lastIndexOf(".");
                  return gq > -1 ? Eq.substring(gq).toLowerCase() : ""
                }(qq),
                yq = (0, dq.b)(Qq),
                tq = (qq, Eq) => {
                  oq.dispose(), Oq ? Oq(qq, Eq) : qq && Nq.b.Warn(qq)
                },
                rq = (Oq, Bq) => {
                  qq === Pq ? Oq && tq(Oq.status + " " + Oq.statusText, Bq) : (Nq.b.Warn(`Failed to load ${qq}, falling back to the ${Pq}`), this.createCubeTextureBase(Pq, Eq, gq, !!Yq, lq, tq, mq, xq, Aq, cq, uq, oq, aq, Vq, jq, Hq))
                };
              if (yq) yq.then((Yq => {
                const Oq = qq => {
                  aq && aq(oq, qq), Yq.loadCubeData(qq, oq, Aq, lq, ((qq, Eq) => {
                    tq(qq, Eq)
                  }))
                };
                Hq ? Oq(Hq) : gq && 6 === gq.length ? Yq.supportCascades ? this._cascadeLoadFiles(Eq, (qq => Oq(qq.map((qq => new Uint8Array(qq))))), gq, tq) : tq("Textures type does not support cascades.") : this._loadFile(qq, (qq => Oq(new Uint8Array(qq))), void 0, Eq ? Eq.offlineProvider || null : void 0, !0, rq)
              }));
              else {
                if (!gq || 0 === gq.length) throw new Error("Cannot load cubemap because files were not defined, or the correct loader was not found.");
                this._cascadeLoadImgs(Eq, oq, ((qq, Eq) => {
                  Vq && Vq(qq, Eq)
                }), gq, tq)
              }
              return this._internalTexturesCache.push(oq), oq
            }), this.name = qq, this.url = qq, this._noMipmap = Oq, this.hasAlpha = !1, this.isCube = !0, this._textureMatrix = mq.e.Identity(), this.coordinatesMode = Aq.d.CUBIC_MODE;
            let Uq = null;
            null === lq || Array.isArray(lq) ? (this._noMipmap = Oq, this._format = oq, this._createPolynomials = yq, gq = lq, this._loaderOptions = vq, this._useSRGBBuffer = Rq, this._lodScale = tq, this._lodOffset = rq) : (gq = lq.extensions ?? null, this._noMipmap = lq.noMipmap ?? !1, xq = lq.files ?? null, Uq = lq.buffer ?? null, this._format = lq.format ?? 5, Pq = lq.prefiltered ?? !1, Qq = lq.forcedExtension ?? null, this._createPolynomials = lq.createPolynomials ?? !1, this._lodScale = lq.lodScale ?? .8, this._lodOffset = lq.lodOffset ?? 0, this._loaderOptions = lq.loaderOptions, this._useSRGBBuffer = lq.useSRGBBuffer, this._sphericalPolynomialTargetSize = lq.sphericalPolynomialTargetSize ?? 0, cq = lq.onLoad ?? null, Bq = lq.onError ?? null), (qq || xq) && this.updateURL(qq, Qq, cq, Pq, Bq, gq, this.ZJ()?.useDelayedTextureLoading, xq, Uq)
          }
          getClassName() {
            return "CubeTexture"
          }
          updateURL(qq) {
            let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              Yq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              Oq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              mq = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
              xq = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              Aq = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
            this.name && !this.name.startsWith("data:") || (this.name = qq), this.url = qq, Eq && (this._forcedExtension = Eq);
            const cq = qq.lastIndexOf("."),
              uq = Eq || (cq > -1 ? qq.substring(cq).toLowerCase() : ""),
              Bq = 0 === uq.indexOf(".dds"),
              Wq = 0 === uq.indexOf(".env"),
              Nq = 0 === uq.indexOf(".basis");
            if (Wq ? (this.gammaSpace = !1, this._prefiltered = !1, this.anisotropicFilteringLevel = 1) : (this._prefiltered = Yq, Yq && (this.gammaSpace = !1, this.anisotropicFilteringLevel = 1)), xq) this._files = xq;
            else if (Nq || Wq || Bq || Oq || (Oq = ["_px.jpg", "_py.jpg", "_pz.jpg", "_nx.jpg", "_ny.jpg", "_nz.jpg"]), this._files = this._files || [], this._files.length = 0, Oq) {
              for (let Eq = 0; Eq < Oq.length; Eq++) this._files.push(qq + Oq[Eq]);
              this._extensions = Oq
            }
            this._buffer = Aq, mq ? (this.delayLoadState = 4, this._delayedOnLoad = gq, this._delayedOnError = lq) : this._loadTexture(gq, lq)
          }
          delayLoad(qq) {
            4 === this.delayLoadState && (qq && (this._forcedExtension = qq), this.delayLoadState = 1, this._loadTexture(this._delayedOnLoad, this._delayedOnError))
          }
          getReflectionTextureMatrix() {
            return this._textureMatrix
          }
          setReflectionTextureMatrix(qq) {
            if (qq.updateFlag === this._textureMatrix.updateFlag) return;
            if (qq.isIdentity() !== this._textureMatrix.isIdentity() && this.ZJ()?.markAllMaterialsAsDirty(1, (qq => -1 !== qq.getActiveTextures().indexOf(this))), this._textureMatrix = qq, !this.ZJ()?.useRightHandedSystem) return;
            const Eq = mq.o.Na[0],
              gq = mq.o.Quaternion[0],
              Yq = mq.o.Na[1];
            this._textureMatrix.decompose(Eq, gq, Yq), gq.z *= -1, gq.w *= -1, mq.e.ComposeToRef(Eq, gq, Yq, this._textureMatrixRefraction)
          }
          getRefractionTextureMatrix() {
            return this.ZJ()?.useRightHandedSystem ? this._textureMatrixRefraction : this._textureMatrix
          }
          _loadTexture() {
            let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            const gq = this.ZJ(),
              Yq = this._texture;
            this._texture = this._getFromCache(this.url, this._noMipmap, void 0, void 0, this._useSRGBBuffer, this.isCube);
            const lq = () => {
                this.onLoadObservable.notifyObservers(this), Yq && (Yq.dispose(), this.ZJ()?.markAllMaterialsAsDirty(1)), qq && qq()
              },
              mq = (qq, gq) => {
                this._loadingError = !0, this._errorObject = {
                  message: qq,
                  exception: gq
                }, Eq && Eq(qq, gq), Aq.d.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            this._texture ? this._texture.isReady ? Oq.c.SetImmediate((() => lq())) : this._texture.onLoadedObservable.add((() => lq())) : (this._prefiltered ? this._texture = this._getEngine().createPrefilteredCubeTexture(this.url, gq, this._lodScale, this._lodOffset, qq, mq, this._format, this._forcedExtension, this._createPolynomials, this._buffer) : this._texture = this._getEngine().createCubeTexture(this.url, gq, this._files, this._noMipmap, qq, mq, this._format, this._forcedExtension, !1, this._lodScale, this._lodOffset, null, this._loaderOptions, !!this._useSRGBBuffer, this._buffer), this._texture?.onLoadedObservable.add((() => this.onLoadObservable.notifyObservers(this))))
          }
          clone() {
            let Eq = 0;
            const gq = this.irradianceTexture,
              Yq = Bq.d.Clone((() => {
                const gq = new qq(this.url, this.ZJ() || this._getEngine(), this._extensions, this._noMipmap, this._files);
                return Eq = gq.uniqueId, gq
              }), this);
            return Yq.uniqueId = Eq, gq && !this.irradianceTexture && (this.irradianceTexture = gq), Yq
          }
        }, (() => {
          const Oq = "function" === typeof Symbol && Symbol.metadata ? Object.create(vq[Symbol.metadata] ?? null) : void 0;
          Eq = [(0, lq.M)()], gq = [(0, lq.I)()], cq = [(0, lq.I)()], oq = [(0, lq.M)("rotationY")], Pq = [(0, lq.M)("files")], Qq = [(0, lq.M)("forcedExtension")], yq = [(0, lq.M)("extensions")], tq = [(0, lq.y)("textureMatrix")], rq = [(0, lq.y)("textureMatrixRefraction")], (0, Yq.f)(qq, null, cq, {
            kind: "getter",
            name: "boundingBoxSize",
            static: !1,
            private: !1,
            access: {
              has: qq => "boundingBoxSize" in qq,
              get: qq => qq.boundingBoxSize
            },
            metadata: Oq
          }, null, hq), (0, Yq.f)(qq, null, oq, {
            kind: "setter",
            name: "rotationY",
            static: !1,
            private: !1,
            access: {
              has: qq => "rotationY" in qq,
              set: (qq, Eq) => {
                qq.rotationY = Eq
              }
            },
            metadata: Oq
          }, null, hq), (0, Yq.f)(null, null, Eq, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: qq => "url" in qq,
              get: qq => qq.url,
              set: (qq, Eq) => {
                qq.url = Eq
              }
            },
            metadata: Oq
          }, nq, bq), (0, Yq.f)(null, null, gq, {
            kind: "field",
            name: "boundingBoxPosition",
            static: !1,
            private: !1,
            access: {
              has: qq => "boundingBoxPosition" in qq,
              get: qq => qq.boundingBoxPosition,
              set: (qq, Eq) => {
                qq.boundingBoxPosition = Eq
              }
            },
            metadata: Oq
          }, iq, Zq), (0, Yq.f)(null, null, Pq, {
            kind: "field",
            name: "_files",
            static: !1,
            private: !1,
            access: {
              has: qq => "_files" in qq,
              get: qq => qq._files,
              set: (qq, Eq) => {
                qq._files = Eq
              }
            },
            metadata: Oq
          }, fq, Mq), (0, Yq.f)(null, null, Qq, {
            kind: "field",
            name: "_forcedExtension",
            static: !1,
            private: !1,
            access: {
              has: qq => "_forcedExtension" in qq,
              get: qq => qq._forcedExtension,
              set: (qq, Eq) => {
                qq._forcedExtension = Eq
              }
            },
            metadata: Oq
          }, Tq, zq), (0, Yq.f)(null, null, yq, {
            kind: "field",
            name: "_extensions",
            static: !1,
            private: !1,
            access: {
              has: qq => "_extensions" in qq,
              get: qq => qq._extensions,
              set: (qq, Eq) => {
                qq._extensions = Eq
              }
            },
            metadata: Oq
          }, Sq, pq), (0, Yq.f)(null, null, tq, {
            kind: "field",
            name: "_textureMatrix",
            static: !1,
            private: !1,
            access: {
              has: qq => "_textureMatrix" in qq,
              get: qq => qq._textureMatrix,
              set: (qq, Eq) => {
                qq._textureMatrix = Eq
              }
            },
            metadata: Oq
          }, Gq, Lq), (0, Yq.f)(null, null, rq, {
            kind: "field",
            name: "_textureMatrixRefraction",
            static: !1,
            private: !1,
            access: {
              has: qq => "_textureMatrixRefraction" in qq,
              get: qq => qq._textureMatrixRefraction,
              set: (qq, Eq) => {
                qq._textureMatrixRefraction = Eq
              }
            },
            metadata: Oq
          }, Jq, kq), Oq && Object.defineProperty(qq, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Oq
          })
        })(), qq
      })(),
      Pq = !1;

    function Qq(qq, Eq, gq) {
      let Yq = "";
      for (const lq of qq) Yq += lq;
      return new oq(Yq, Eq, null, gq, qq)
    }

    function yq(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        Yq = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const lq = Eq.useDelayedTextureLoading;
      Eq.useDelayedTextureLoading = !1;
      const Oq = new oq(qq, Eq, null, !1, null, null, null, void 0, !0, gq, Yq);
      return Eq.useDelayedTextureLoading = lq, Oq
    }

    function tq(qq, Eq, gq) {
      const Yq = Bq.d.Parse((() => {
        let Yq = !1;
        return qq.prefiltered && (Yq = qq.prefiltered), new oq(gq + (qq.url ?? qq.name), Eq, qq.extensions, !1, qq.files || null, null, null, void 0, Yq, qq.forcedExtension)
      }), qq, Eq);
      if (qq.boundingBoxPosition && (Yq.boundingBoxPosition = mq.q.FromArray(qq.boundingBoxPosition)), qq.boundingBoxSize && (Yq.boundingBoxSize = mq.q.FromArray(qq.boundingBoxSize)), qq.animations)
        for (let lq = 0; lq < qq.animations.length; lq++) {
          const Eq = qq.animations[lq],
            gq = (0, cq.e)("BABYLON.Animation");
          gq && Yq.animations.push(gq.Parse(Eq))
        }
      return Yq
    }
    Pq || (Pq = !0, oq.CreateFromImages = Qq, oq.CreateFromPrefilteredData = yq, oq.Parse = tq, Aq.d._CubeTextureParser = tq, (0, cq.g)("BABYLON.CubeTexture", oq))
  },
  40910: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => cq
    });
    var Yq = gq(38653),
      lq = gq(40233),
      Oq = gq(39696),
      mq = gq(39608),
      xq = gq(39593);
    let Aq = !1;
    class cq extends lq.d {
      constructor(qq, Eq, gq) {
        let Yq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          cq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          uq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5,
          Bq = arguments.length > 6 ? arguments[6] : void 0;
        const Wq = !gq || gq._isScene;
        super(null, Wq ? gq : gq?.PV, Wq ? !Yq : gq, Bq, cq, void 0, void 0, void 0, void 0, uq), Aq || (Aq = !0, mq.ThinEngine.prototype.createDynamicTexture = function(qq, Eq, gq, Yq) {
          const lq = new xq.c(this, 4);
          return lq.baseWidth = qq, lq.baseHeight = Eq, gq && (qq = this.needPOTTextures ? (0, Oq.g)(qq, this._caps.maxTextureSize) : qq, Eq = this.needPOTTextures ? (0, Oq.g)(Eq, this._caps.maxTextureSize) : Eq), lq.width = qq, lq.height = Eq, lq.isReady = !1, lq.generateMipMaps = gq, lq.samplingMode = Yq, this.updateTextureSamplingMode(Yq, lq), this._internalTexturesCache.push(lq), lq
        }, mq.ThinEngine.prototype.updateDynamicTexture = function(qq, Eq, gq) {
          let Yq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            lq = arguments.length > 4 ? arguments[4] : void 0,
            Oq = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
          if (!qq) return;
          const mq = this._gl,
            xq = mq.TEXTURE_2D,
            Aq = this._bindTextureDirectly(xq, qq, !0, Oq);
          this._unpackFlipY(void 0 === gq ? qq.invertY : gq), Yq && mq.pixelStorei(mq.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
          const cq = this._getWebGLTextureType(qq.type),
            uq = this._getInternalFormat(lq || qq.format),
            Bq = this._getRGBABufferInternalSizedFormat(qq.type, uq);
          mq.texImage2D(xq, 0, Bq, uq, cq, Eq), qq.generateMipMaps && mq.generateMipmap(xq), Aq || this._bindTextureDirectly(xq, null), Yq && mq.pixelStorei(mq.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), lq && (qq.format = lq), qq._dynamicTextureSource = Eq, qq._premulAlpha = Yq, qq.invertY = gq || !1, qq.isReady = !0
        }), this.name = qq, this.wrapU = lq.d.CLAMP_ADDRESSMODE, this.wrapV = lq.d.CLAMP_ADDRESSMODE, this._generateMipMaps = Yq;
        const Nq = this._getEngine();
        if (!Nq) return;
        if (Eq.getContext) this._canvas = Eq, this._ownCanvas = !1, this._texture = Nq.createDynamicTexture(this._canvas.width, this._canvas.height, Yq, cq);
        else {
          this._canvas = Nq.createCanvas(1, 1), this._ownCanvas = !0;
          const qq = Eq;
          qq.width || 0 === qq.width ? this._texture = Nq.createDynamicTexture(qq.width, qq.height, Yq, cq) : this._texture = Nq.createDynamicTexture(Eq, Eq, Yq, cq)
        }
        const aq = this.getSize();
        this._canvas.width !== aq.width && (this._canvas.width = aq.width), this._canvas.height !== aq.height && (this._canvas.height = aq.height), this._context = this._canvas.getContext("2d")
      }
      getClassName() {
        return "DynamicTexture"
      }
      get canRescale() {
        return !0
      }
      _recreate(qq) {
        this._canvas.width = qq.width, this._canvas.height = qq.height, this.releaseInternalTexture(), this._texture = this._getEngine().createDynamicTexture(qq.width, qq.height, this._generateMipMaps, this.samplingMode)
      }
      scale(qq) {
        const Eq = this.getSize();
        Eq.width *= qq, Eq.height *= qq, this._recreate(Eq)
      }
      scaleTo(qq, Eq) {
        const gq = this.getSize();
        gq.width = qq, gq.height = Eq, this._recreate(gq)
      }
      getContext() {
        return this._context
      }
      clear(qq) {
        const Eq = this.getSize();
        qq && (this._context.fillStyle = qq), this._context.clearRect(0, 0, Eq.width, Eq.height)
      }
      update(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._texture && this._getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === qq || qq, Eq, this._format || void 0, void 0, gq)
      }
      drawText(qq, Eq, gq, Yq, lq, Oq, mq) {
        let xq = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const Aq = this.getSize();
        if (Oq && (this._context.fillStyle = Oq, this._context.fillRect(0, 0, Aq.width, Aq.height)), this._context.font = Yq, null === Eq || void 0 === Eq) {
          const gq = this._context.measureText(qq);
          Eq = (Aq.width - gq.width) / 2
        }
        if (null === gq || void 0 === gq) {
          const qq = parseInt(Yq.replace(/\D/g, ""));
          gq = Aq.height / 2 + qq / 3.65
        }
        this._context.fillStyle = lq || "", this._context.fillText(qq, Eq, gq), xq && this.update(mq)
      }
      dispose() {
        super.dispose(), this._ownCanvas && this._canvas?.remove?.(), this._canvas = null, this._context = null
      }
      clone() {
        const qq = this.ZJ();
        if (!qq) return this;
        const Eq = this.getSize(),
          gq = new cq(this.name, Eq, qq, this._generateMipMaps);
        return gq.hasAlpha = this.hasAlpha, gq.level = this.level, gq.wrapU = this.wrapU, gq.wrapV = this.wrapV, gq
      }
      serialize() {
        const qq = this.ZJ();
        qq && !qq.isReady() && Yq.b.Warn("The scene must be ready before serializing the dynamic texture");
        const Eq = super.serialize();
        return cq._IsCanvasElement(this._canvas) && (Eq.base64String = this._canvas.toDataURL()), Eq.invertY = this._invertY, Eq.samplingMode = this.samplingMode, Eq
      }
      static _IsCanvasElement(qq) {
        return void 0 !== qq.toDataURL
      }
      _rebuild() {
        this.update()
      }
    }
  },
  40898: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => lq
    });
    var Yq = gq(40233);
    class lq extends Yq.d {
      get depth() {
        return this._depth
      }
      constructor(qq, Eq, gq, lq, Oq, mq) {
        let xq = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          Aq = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          cq = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Yq.d.TRILINEAR_SAMPLINGMODE,
          uq = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          Bq = arguments.length > 10 ? arguments[10] : void 0,
          Wq = arguments.length > 11 ? arguments[11] : void 0;
        super(null, mq, !xq, Aq), this.format = Oq, this._texture = mq.Ba().createRawTexture2DArray(qq, Eq, gq, lq, Oq, xq, Aq, cq, null, uq, Bq ?? 0, Wq), this._depth = lq, this.is2DArray = !0
      }
      update(qq) {
        this.updateMipLevel(qq, 0)
      }
      updateMipLevel(qq, Eq) {
        this._texture && this._getEngine().updateRawTexture2DArray(this._texture, qq, this._texture.format, this._texture.invertY, null, this._texture.type, Eq)
      }
      static CreateRGBATexture(qq, Eq, gq, Yq, Oq) {
        return new lq(qq, Eq, gq, Yq, 5, Oq, !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0)
      }
    }
  },
  40889: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Yq.c
    });
    var Yq = gq(40113);
    (0, Yq.d)()
  },
  39833: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Yq.i
    });
    var Yq = gq(39838);
    (0, Yq.e)()
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);