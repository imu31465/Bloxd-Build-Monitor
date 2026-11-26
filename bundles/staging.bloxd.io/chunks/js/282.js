export const id = 282;
export const ids = [282];
export const modules = {
  41506: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => yV,
      e: () => pV
    });
    var JV = xV(39870),
      YV = xV(41279),
      UV = xV(41478),
      yV = {};
    class pV {
      constructor(VV) {
        this.attachedToElement = !1, this.attached = {}, this.camera = VV, this.checkInputs = () => {}
      }
      add(VV) {
        const eV = VV.getSimpleName();
        this.attached[eV] ? JV.b.Warn("camera input of type " + eV + " already exists on camera") : (this.attached[eV] = VV, VV.camera = this.camera, VV.checkInputs && (this.checkInputs = this._addCheckInputs(VV.checkInputs.bind(VV))), this.attachedToElement && VV.attachControl(this.noPreventDefault))
      }
      remove(VV) {
        for (const eV in this.attached) {
          const xV = this.attached[eV];
          if (xV === VV) return xV.detachControl(), xV.camera = null, delete this.attached[eV], void this.rebuildInputCheck()
        }
      }
      removeByType(VV) {
        for (const eV in this.attached) {
          const xV = this.attached[eV];
          xV.getClassName() === VV && (xV.detachControl(), xV.camera = null, delete this.attached[eV], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(VV) {
        const eV = this.checkInputs;
        return () => {
          eV(), VV()
        }
      }
      attachInput(VV) {
        this.attachedToElement && VV.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          VV = !UV.c.ForceAttachControlToAlwaysPreventDefault && VV, this.attachedToElement = !0, this.noPreventDefault = VV;
          for (const eV in this.attached) this.attached[eV].attachControl(VV)
        }
      }
      detachElement() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const eV in this.attached) this.attached[eV].detachControl(), VV && (this.attached[eV].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const VV in this.attached) {
          const eV = this.attached[VV];
          eV.checkInputs && (this.checkInputs = this._addCheckInputs(eV.checkInputs.bind(eV)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(VV) {
        const eV = {};
        for (const xV in this.attached) {
          const VV = this.attached[xV],
            JV = YV.b.Serialize(VV);
          eV[VV.getClassName()] = JV
        }
        VV.inputsmgr = eV
      }
      parse(VV) {
        const eV = VV.inputsmgr;
        if (eV) {
          this.clear();
          for (const VV in eV) {
            const xV = yV[VV];
            if (xV) {
              const JV = eV[VV],
                UV = YV.b.Parse((() => new xV), JV, null);
              this.add(UV)
            }
          }
        } else
          for (const xV in this.attached) {
            const eV = yV[this.attached[xV].getClassName()];
            if (eV) {
              const JV = YV.b.Parse((() => new eV), VV, null);
              this.remove(this.attached[xV]), this.add(JV)
            }
          }
      }
    }
  },
  42463: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => qV
    });
    var JV = xV(41257),
      YV = xV(41263),
      UV = xV(41145),
      yV = xV(38269),
      pV = xV(41252),
      QV = xV(41738),
      nV = xV(38318),
      wV = xV(38296),
      ZV = xV(41279),
      vV = xV(41077),
      rV = xV(39870),
      kV = xV(41300),
      bV = xV(39058),
      EV = xV(41329);
    var BV = xV(41150);
    let jV = !1;
    let qV = (() => {
        var VV;
        let eV, xV, nV, qV, tV, FV, TV, PV, AV, NV = pV.c,
          XV = [],
          MV = [],
          zV = [],
          GV = [],
          WV = [],
          RV = [],
          gV = [],
          DV = [],
          iV = [],
          CV = [],
          aV = [],
          oV = [],
          cV = [],
          hV = [],
          lV = [];
        return VV = class extends NV {
          set boundingBoxSize(VV) {
            if (this._boundingBoxSize && this._boundingBoxSize.equals(VV)) return;
            this._boundingBoxSize = VV;
            const eV = this.dD();
            eV && eV.markAllMaterialsAsDirty(1)
          }
          get boundingBoxSize() {
            return this._boundingBoxSize
          }
          set rotationY(VV) {
            this._rotationY = VV, this.setReflectionTextureMatrix(yV.d.RotationY(this._rotationY))
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
          constructor(VV, eV) {
            let xV, YV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              UV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              pV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              nV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              ZV = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              qV = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 5,
              tV = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              FV = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              TV = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
              PV = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : .8,
              AV = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 0,
              NV = arguments.length > 13 ? arguments[13] : void 0,
              LV = arguments.length > 14 ? arguments[14] : void 0;
            super(eV), this._delayedOnLoad = (0, JV.l)(this, XV), this.onLoadObservable = new wV.c, this.url = (0, JV.l)(this, MV, void 0), this.boundingBoxPosition = ((0, JV.l)(this, zV), (0, JV.l)(this, GV, yV.o.Zero())), this._boundingBoxSize = (0, JV.l)(this, WV), this._rotationY = 0, this._files = (0, JV.l)(this, RV, null), this._forcedExtension = ((0, JV.l)(this, gV), (0, JV.l)(this, DV, null)), this._extensions = ((0, JV.l)(this, iV), (0, JV.l)(this, CV, null)), this._textureMatrix = ((0, JV.l)(this, aV), (0, JV.l)(this, oV, void 0)), this._textureMatrixRefraction = ((0, JV.l)(this, cV), (0, JV.l)(this, hV, new yV.d)), this._format = (0, JV.l)(this, lV), this._buffer = null, jV || (jV = !0, BV.d.prototype._partialLoadFile = function(VV, eV, xV, JV) {
              let YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
              this._loadFile(VV, (VV => {
                xV[eV] = VV, xV._internalCount++, 6 === xV._internalCount && JV(xV)
              }), void 0, void 0, !0, ((VV, eV) => {
                YV && VV && YV(VV.status + " " + VV.statusText, eV)
              }))
            }, BV.d.prototype._cascadeLoadFiles = function(VV, eV, xV) {
              let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
              const YV = [];
              YV._internalCount = 0;
              for (let UV = 0; UV < 6; UV++) this._partialLoadFile(xV[UV], UV, YV, eV, JV)
            }, BV.d.prototype._cascadeLoadImgs = function(VV, eV, xV, JV) {
              let YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                UV = arguments.length > 5 ? arguments[5] : void 0;
              const yV = [];
              yV._internalCount = 0;
              for (let pV = 0; pV < 6; pV++) this._partialLoadImg(JV[pV], pV, yV, VV, eV, xV, YV, UV)
            }, BV.d.prototype._partialLoadImg = function(VV, eV, xV, JV, YV, UV) {
              let yV = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                pV = arguments.length > 7 ? arguments[7] : void 0;
              const QV = (0, bV.d)();
              (0, kV.r)(VV, (VV => {
                xV[eV] = VV, xV._internalCount++, JV && JV.removePendingData(QV), 6 === xV._internalCount && UV && UV(YV, xV)
              }), ((VV, eV) => {
                JV && JV.removePendingData(QV), yV && yV(VV, eV)
              }), JV ? JV.offlineProvider : null, pV), JV && JV.addPendingData(QV)
            }, BV.d.prototype.createCubeTextureBase = function(VV, eV, xV, JV) {
              let YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                UV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                yV = arguments.length > 6 ? arguments[6] : void 0,
                pV = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                QV = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
                nV = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
                wV = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
                ZV = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
                kV = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
                bV = arguments.length > 13 && void 0 !== arguments[13] ? arguments[13] : null,
                BV = arguments.length > 14 && void 0 !== arguments[14] && arguments[14],
                jV = arguments.length > 15 && void 0 !== arguments[15] ? arguments[15] : null;
              const qV = ZV || new vV.e(this, 7);
              qV.isCube = !0, qV.url = VV, qV.generateMipMaps = !JV, qV._lodGenerationScale = nV, qV._lodGenerationOffset = wV, qV._useSRGBBuffer = !!BV && this._caps.supportSRGBBuffers && (this.version > 1 || this.isWebGPU || !!JV), qV !== ZV && (qV.label = VV.substring(0, 60)), this._doNotHandleContextLost || (qV._extension = pV, qV._files = xV, qV._buffer = jV);
              const tV = VV;
              this._transformTextureUrl && !ZV && (VV = this._transformTextureUrl(VV));
              const FV = pV ?? function(VV) {
                  const eV = VV.split("?")[0],
                    xV = eV.lastIndexOf(".");
                  return xV > -1 ? eV.substring(xV).toLowerCase() : ""
                }(VV),
                TV = (0, EV.e)(FV),
                PV = (VV, eV) => {
                  qV.dispose(), UV ? UV(VV, eV) : VV && rV.b.Warn(VV)
                },
                AV = (UV, ZV) => {
                  VV === tV ? UV && PV(UV.status + " " + UV.statusText, ZV) : (rV.b.Warn(`Failed to load ${VV}, falling back to the ${tV}`), this.createCubeTextureBase(tV, eV, xV, !!JV, YV, PV, yV, pV, QV, nV, wV, qV, kV, bV, BV, jV))
                };
              if (TV) TV.then((JV => {
                const UV = VV => {
                  kV && kV(qV, VV), JV.loadCubeData(VV, qV, QV, YV, ((VV, eV) => {
                    PV(VV, eV)
                  }))
                };
                jV ? UV(jV) : xV && 6 === xV.length ? JV.supportCascades ? this._cascadeLoadFiles(eV, (VV => UV(VV.map((VV => new Uint8Array(VV))))), xV, PV) : PV("Textures type does not support cascades.") : this._loadFile(VV, (VV => UV(new Uint8Array(VV))), void 0, eV ? eV.offlineProvider || null : void 0, !0, AV)
              }));
              else {
                if (!xV || 0 === xV.length) throw new Error("Cannot load cubemap because files were not defined, or the correct loader was not found.");
                this._cascadeLoadImgs(eV, qV, ((VV, eV) => {
                  bV && bV(VV, eV)
                }), xV, PV)
              }
              return this._internalTexturesCache.push(qV), qV
            }), this.name = VV, this.url = VV, this._noMipmap = UV, this.hasAlpha = !1, this.isCube = !0, this._textureMatrix = yV.d.Identity(), this.coordinatesMode = QV.f.CUBIC_MODE;
            let fV = null;
            null === YV || Array.isArray(YV) ? (this._noMipmap = UV, this._format = qV, this._createPolynomials = TV, xV = YV, this._loaderOptions = NV, this._useSRGBBuffer = LV, this._lodScale = PV, this._lodOffset = AV) : (xV = YV.extensions ?? null, this._noMipmap = YV.noMipmap ?? !1, pV = YV.files ?? null, fV = YV.buffer ?? null, this._format = YV.format ?? 5, tV = YV.prefiltered ?? !1, FV = YV.forcedExtension ?? null, this._createPolynomials = YV.createPolynomials ?? !1, this._lodScale = YV.lodScale ?? .8, this._lodOffset = YV.lodOffset ?? 0, this._loaderOptions = YV.loaderOptions, this._useSRGBBuffer = YV.useSRGBBuffer, this._sphericalPolynomialTargetSize = YV.sphericalPolynomialTargetSize ?? 0, nV = YV.onLoad ?? null, ZV = YV.onError ?? null), (VV || pV) && this.updateURL(VV, FV, nV, tV, ZV, xV, this.dD()?.useDelayedTextureLoading, pV, fV)
          }
          getClassName() {
            return "CubeTexture"
          }
          updateURL(VV) {
            let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              JV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              UV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              yV = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
              pV = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              QV = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
            this.name && !this.name.startsWith("data:") || (this.name = VV), this.url = VV, eV && (this._forcedExtension = eV);
            const nV = VV.lastIndexOf("."),
              wV = eV || (nV > -1 ? VV.substring(nV).toLowerCase() : ""),
              ZV = 0 === wV.indexOf(".dds"),
              vV = 0 === wV.indexOf(".env"),
              rV = 0 === wV.indexOf(".basis");
            if (vV ? (this.gammaSpace = !1, this._prefiltered = !1, this.anisotropicFilteringLevel = 1) : (this._prefiltered = JV, JV && (this.gammaSpace = !1, this.anisotropicFilteringLevel = 1)), pV) this._files = pV;
            else if (rV || vV || ZV || UV || (UV = ["_px.jpg", "_py.jpg", "_pz.jpg", "_nx.jpg", "_ny.jpg", "_nz.jpg"]), this._files = this._files || [], this._files.length = 0, UV) {
              for (let eV = 0; eV < UV.length; eV++) this._files.push(VV + UV[eV]);
              this._extensions = UV
            }
            this._buffer = QV, yV ? (this.delayLoadState = 4, this._delayedOnLoad = xV, this._delayedOnError = YV) : this._loadTexture(xV, YV)
          }
          delayLoad(VV) {
            4 === this.delayLoadState && (VV && (this._forcedExtension = VV), this.delayLoadState = 1, this._loadTexture(this._delayedOnLoad, this._delayedOnError))
          }
          getReflectionTextureMatrix() {
            return this._textureMatrix
          }
          setReflectionTextureMatrix(VV) {
            if (VV.updateFlag === this._textureMatrix.updateFlag) return;
            if (VV.isIdentity() !== this._textureMatrix.isIdentity() && this.dD()?.markAllMaterialsAsDirty(1, (VV => -1 !== VV.getActiveTextures().indexOf(this))), this._textureMatrix = VV, !this.dD()?.useRightHandedSystem) return;
            const eV = yV.l.Ik[0],
              xV = yV.l.Quaternion[0],
              JV = yV.l.Ik[1];
            this._textureMatrix.decompose(eV, xV, JV), xV.z *= -1, xV.w *= -1, yV.d.ComposeToRef(eV, xV, JV, this._textureMatrixRefraction)
          }
          getRefractionTextureMatrix() {
            return this.dD()?.useRightHandedSystem ? this._textureMatrixRefraction : this._textureMatrix
          }
          _loadTexture() {
            let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            const xV = this.dD(),
              JV = this._texture;
            this._texture = this._getFromCache(this.url, this._noMipmap, void 0, void 0, this._useSRGBBuffer, this.isCube);
            const YV = () => {
                this.onLoadObservable.notifyObservers(this), JV && (JV.dispose(), this.dD()?.markAllMaterialsAsDirty(1)), VV && VV()
              },
              yV = (VV, xV) => {
                this._loadingError = !0, this._errorObject = {
                  message: VV,
                  exception: xV
                }, eV && eV(VV, xV), QV.f.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            this._texture ? this._texture.isReady ? UV.b.SetImmediate((() => YV())) : this._texture.onLoadedObservable.add((() => YV())) : (this._prefiltered ? this._texture = this._getEngine().createPrefilteredCubeTexture(this.url, xV, this._lodScale, this._lodOffset, VV, yV, this._format, this._forcedExtension, this._createPolynomials, this._buffer) : this._texture = this._getEngine().createCubeTexture(this.url, xV, this._files, this._noMipmap, VV, yV, this._format, this._forcedExtension, !1, this._lodScale, this._lodOffset, null, this._loaderOptions, !!this._useSRGBBuffer, this._buffer), this._texture?.onLoadedObservable.add((() => this.onLoadObservable.notifyObservers(this))))
          }
          clone() {
            let eV = 0;
            const xV = this.irradianceTexture,
              JV = ZV.b.Clone((() => {
                const xV = new VV(this.url, this.dD() || this._getEngine(), this._extensions, this._noMipmap, this._files);
                return eV = xV.uniqueId, xV
              }), this);
            return JV.uniqueId = eV, xV && !this.irradianceTexture && (this.irradianceTexture = xV), JV
          }
        }, (() => {
          const UV = "function" === typeof Symbol && Symbol.metadata ? Object.create(NV[Symbol.metadata] ?? null) : void 0;
          eV = [(0, YV.J)()], xV = [(0, YV.I)()], nV = [(0, YV.I)()], qV = [(0, YV.J)("rotationY")], tV = [(0, YV.J)("files")], FV = [(0, YV.J)("forcedExtension")], TV = [(0, YV.J)("extensions")], PV = [(0, YV.y)("textureMatrix")], AV = [(0, YV.y)("textureMatrixRefraction")], (0, JV.i)(VV, null, nV, {
            kind: "getter",
            name: "boundingBoxSize",
            static: !1,
            private: !1,
            access: {
              has: VV => "boundingBoxSize" in VV,
              get: VV => VV.boundingBoxSize
            },
            metadata: UV
          }, null, XV), (0, JV.i)(VV, null, qV, {
            kind: "setter",
            name: "rotationY",
            static: !1,
            private: !1,
            access: {
              has: VV => "rotationY" in VV,
              set: (VV, eV) => {
                VV.rotationY = eV
              }
            },
            metadata: UV
          }, null, XV), (0, JV.i)(null, null, eV, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: VV => "url" in VV,
              get: VV => VV.url,
              set: (VV, eV) => {
                VV.url = eV
              }
            },
            metadata: UV
          }, MV, zV), (0, JV.i)(null, null, xV, {
            kind: "field",
            name: "boundingBoxPosition",
            static: !1,
            private: !1,
            access: {
              has: VV => "boundingBoxPosition" in VV,
              get: VV => VV.boundingBoxPosition,
              set: (VV, eV) => {
                VV.boundingBoxPosition = eV
              }
            },
            metadata: UV
          }, GV, WV), (0, JV.i)(null, null, tV, {
            kind: "field",
            name: "_files",
            static: !1,
            private: !1,
            access: {
              has: VV => "_files" in VV,
              get: VV => VV._files,
              set: (VV, eV) => {
                VV._files = eV
              }
            },
            metadata: UV
          }, RV, gV), (0, JV.i)(null, null, FV, {
            kind: "field",
            name: "_forcedExtension",
            static: !1,
            private: !1,
            access: {
              has: VV => "_forcedExtension" in VV,
              get: VV => VV._forcedExtension,
              set: (VV, eV) => {
                VV._forcedExtension = eV
              }
            },
            metadata: UV
          }, DV, iV), (0, JV.i)(null, null, TV, {
            kind: "field",
            name: "_extensions",
            static: !1,
            private: !1,
            access: {
              has: VV => "_extensions" in VV,
              get: VV => VV._extensions,
              set: (VV, eV) => {
                VV._extensions = eV
              }
            },
            metadata: UV
          }, CV, aV), (0, JV.i)(null, null, PV, {
            kind: "field",
            name: "_textureMatrix",
            static: !1,
            private: !1,
            access: {
              has: VV => "_textureMatrix" in VV,
              get: VV => VV._textureMatrix,
              set: (VV, eV) => {
                VV._textureMatrix = eV
              }
            },
            metadata: UV
          }, oV, cV), (0, JV.i)(null, null, AV, {
            kind: "field",
            name: "_textureMatrixRefraction",
            static: !1,
            private: !1,
            access: {
              has: VV => "_textureMatrixRefraction" in VV,
              get: VV => VV._textureMatrixRefraction,
              set: (VV, eV) => {
                VV._textureMatrixRefraction = eV
              }
            },
            metadata: UV
          }, hV, lV), UV && Object.defineProperty(VV, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: UV
          })
        })(), VV
      })(),
      tV = !1;

    function FV(VV, eV, xV) {
      let JV = "";
      for (const YV of VV) JV += YV;
      return new qV(JV, eV, null, xV, VV)
    }

    function TV(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        JV = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const YV = eV.useDelayedTextureLoading;
      eV.useDelayedTextureLoading = !1;
      const UV = new qV(VV, eV, null, !1, null, null, null, void 0, !0, xV, JV);
      return eV.useDelayedTextureLoading = YV, UV
    }

    function PV(VV, eV, xV) {
      const JV = ZV.b.Parse((() => {
        let JV = !1;
        return VV.prefiltered && (JV = VV.prefiltered), new qV(xV + (VV.url ?? VV.name), eV, VV.extensions, !1, VV.files || null, null, null, void 0, JV, VV.forcedExtension)
      }), VV, eV);
      if (VV.boundingBoxPosition && (JV.boundingBoxPosition = yV.o.FromArray(VV.boundingBoxPosition)), VV.boundingBoxSize && (JV.boundingBoxSize = yV.o.FromArray(VV.boundingBoxSize)), VV.animations)
        for (let YV = 0; YV < VV.animations.length; YV++) {
          const eV = VV.animations[YV],
            xV = (0, nV.c)("BABYLON.Animation");
          xV && JV.animations.push(xV.Parse(eV))
        }
      return JV
    }
    tV || (tV = !0, qV.CreateFromImages = FV, qV.CreateFromPrefilteredData = TV, qV.Parse = PV, QV.f._CubeTextureParser = PV, (0, nV.d)("BABYLON.CubeTexture", qV))
  },
  42509: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => nV
    });
    var JV = xV(39870),
      YV = xV(41738),
      UV = xV(41190),
      yV = xV(41095),
      pV = xV(41077);
    let QV = !1;
    class nV extends YV.f {
      constructor(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          nV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          wV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5,
          ZV = arguments.length > 6 ? arguments[6] : void 0;
        const vV = !xV || xV._isScene;
        super(null, vV ? xV : xV?.yE, vV ? !JV : xV, ZV, nV, void 0, void 0, void 0, void 0, wV), QV || (QV = !0, yV.ThinEngine.prototype.createDynamicTexture = function(VV, eV, xV, JV) {
          const YV = new pV.e(this, 4);
          return YV.baseWidth = VV, YV.baseHeight = eV, xV && (VV = this.needPOTTextures ? (0, UV.i)(VV, this._caps.maxTextureSize) : VV, eV = this.needPOTTextures ? (0, UV.i)(eV, this._caps.maxTextureSize) : eV), YV.width = VV, YV.height = eV, YV.isReady = !1, YV.generateMipMaps = xV, YV.samplingMode = JV, this.updateTextureSamplingMode(JV, YV), this._internalTexturesCache.push(YV), YV
        }, yV.ThinEngine.prototype.updateDynamicTexture = function(VV, eV, xV) {
          let JV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            YV = arguments.length > 4 ? arguments[4] : void 0,
            UV = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
          if (!VV) return;
          const yV = this._gl,
            pV = yV.TEXTURE_2D,
            QV = this._bindTextureDirectly(pV, VV, !0, UV);
          this._unpackFlipY(void 0 === xV ? VV.invertY : xV), JV && yV.pixelStorei(yV.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
          const nV = this._getWebGLTextureType(VV.type),
            wV = this._getInternalFormat(YV || VV.format),
            ZV = this._getRGBABufferInternalSizedFormat(VV.type, wV);
          yV.texImage2D(pV, 0, ZV, wV, nV, eV), VV.generateMipMaps && yV.generateMipmap(pV), QV || this._bindTextureDirectly(pV, null), JV && yV.pixelStorei(yV.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), YV && (VV.format = YV), VV._dynamicTextureSource = eV, VV._premulAlpha = JV, VV.invertY = xV || !1, VV.isReady = !0
        }), this.name = VV, this.wrapU = YV.f.CLAMP_ADDRESSMODE, this.wrapV = YV.f.CLAMP_ADDRESSMODE, this._generateMipMaps = JV;
        const rV = this._getEngine();
        if (!rV) return;
        if (eV.getContext) this._canvas = eV, this._ownCanvas = !1, this._texture = rV.createDynamicTexture(this._canvas.width, this._canvas.height, JV, nV);
        else {
          this._canvas = rV.createCanvas(1, 1), this._ownCanvas = !0;
          const VV = eV;
          VV.width || 0 === VV.width ? this._texture = rV.createDynamicTexture(VV.width, VV.height, JV, nV) : this._texture = rV.createDynamicTexture(eV, eV, JV, nV)
        }
        const kV = this.getSize();
        this._canvas.width !== kV.width && (this._canvas.width = kV.width), this._canvas.height !== kV.height && (this._canvas.height = kV.height), this._context = this._canvas.getContext("2d")
      }
      getClassName() {
        return "DynamicTexture"
      }
      get canRescale() {
        return !0
      }
      _recreate(VV) {
        this._canvas.width = VV.width, this._canvas.height = VV.height, this.releaseInternalTexture(), this._texture = this._getEngine().createDynamicTexture(VV.width, VV.height, this._generateMipMaps, this.samplingMode)
      }
      scale(VV) {
        const eV = this.getSize();
        eV.width *= VV, eV.height *= VV, this._recreate(eV)
      }
      scaleTo(VV, eV) {
        const xV = this.getSize();
        xV.width = VV, xV.height = eV, this._recreate(xV)
      }
      getContext() {
        return this._context
      }
      clear(VV) {
        const eV = this.getSize();
        VV && (this._context.fillStyle = VV), this._context.clearRect(0, 0, eV.width, eV.height)
      }
      update(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._texture && this._getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === VV || VV, eV, this._format || void 0, void 0, xV)
      }
      drawText(VV, eV, xV, JV, YV, UV, yV) {
        let pV = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const QV = this.getSize();
        if (UV && (this._context.fillStyle = UV, this._context.fillRect(0, 0, QV.width, QV.height)), this._context.font = JV, null === eV || void 0 === eV) {
          const xV = this._context.measureText(VV);
          eV = (QV.width - xV.width) / 2
        }
        if (null === xV || void 0 === xV) {
          const VV = parseInt(JV.replace(/\D/g, ""));
          xV = QV.height / 2 + VV / 3.65
        }
        this._context.fillStyle = YV || "", this._context.fillText(VV, eV, xV), pV && this.update(yV)
      }
      dispose() {
        super.dispose(), this._ownCanvas && this._canvas?.remove?.(), this._canvas = null, this._context = null
      }
      clone() {
        const VV = this.dD();
        if (!VV) return this;
        const eV = this.getSize(),
          xV = new nV(this.name, eV, VV, this._generateMipMaps);
        return xV.hasAlpha = this.hasAlpha, xV.level = this.level, xV.wrapU = this.wrapU, xV.wrapV = this.wrapV, xV
      }
      serialize() {
        const VV = this.dD();
        VV && !VV.isReady() && JV.b.Warn("The scene must be ready before serializing the dynamic texture");
        const eV = super.serialize();
        return nV._IsCanvasElement(this._canvas) && (eV.base64String = this._canvas.toDataURL()), eV.invertY = this._invertY, eV.samplingMode = this.samplingMode, eV
      }
      static _IsCanvasElement(VV) {
        return void 0 !== VV.toDataURL
      }
      _rebuild() {
        this.update()
      }
    }
  },
  42487: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => YV
    });
    var JV = xV(41738);
    class YV extends JV.f {
      get depth() {
        return this._depth
      }
      constructor(VV, eV, xV, YV, UV, yV) {
        let pV = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          QV = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          nV = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : JV.f.TRILINEAR_SAMPLINGMODE,
          wV = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          ZV = arguments.length > 10 ? arguments[10] : void 0,
          vV = arguments.length > 11 ? arguments[11] : void 0;
        super(null, yV, !pV, QV), this.format = UV, this._texture = yV.sk().createRawTexture2DArray(VV, eV, xV, YV, UV, pV, QV, nV, null, wV, ZV ?? 0, vV), this._depth = YV, this.is2DArray = !0
      }
      update(VV) {
        this.updateMipLevel(VV, 0)
      }
      updateMipLevel(VV, eV) {
        this._texture && this._getEngine().updateRawTexture2DArray(this._texture, VV, this._texture.format, this._texture.invertY, null, this._texture.type, eV)
      }
      static CreateRGBATexture(VV, eV, xV, JV, UV) {
        return new YV(VV, eV, xV, JV, 5, UV, !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0)
      }
    }
  },
  42479: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => JV.d
    });
    var JV = xV(41621);
    (0, JV.e)()
  },
  41331: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => JV.e
    });
    var JV = xV(41337);
    (0, JV.d)()
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);