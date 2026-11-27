export const id = 286;
export const ids = [286];
export const modules = {
  41350: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ke,
      f: () => Ue
    });
    var ye = He(39467),
      be = He(41141),
      Me = He(41320),
      Ke = {};
    class Ue {
      constructor(ee) {
        this.attachedToElement = !1, this.attached = {}, this.camera = ee, this.checkInputs = () => {}
      }
      add(ee) {
        const ie = ee.getSimpleName();
        this.attached[ie] ? ye.e.Warn("camera input of type " + ie + " already exists on camera") : (this.attached[ie] = ee, ee.camera = this.camera, ee.checkInputs && (this.checkInputs = this._addCheckInputs(ee.checkInputs.bind(ee))), this.attachedToElement && ee.attachControl(this.noPreventDefault))
      }
      remove(ee) {
        for (const ie in this.attached) {
          const He = this.attached[ie];
          if (He === ee) return He.detachControl(), He.camera = null, delete this.attached[ie], void this.rebuildInputCheck()
        }
      }
      removeByType(ee) {
        for (const ie in this.attached) {
          const He = this.attached[ie];
          He.getClassName() === ee && (He.detachControl(), He.camera = null, delete this.attached[ie], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(ee) {
        const ie = this.checkInputs;
        return () => {
          ie(), ee()
        }
      }
      attachInput(ee) {
        this.attachedToElement && ee.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          ee = !Me.d.ForceAttachControlToAlwaysPreventDefault && ee, this.attachedToElement = !0, this.noPreventDefault = ee;
          for (const ie in this.attached) this.attached[ie].attachControl(ee)
        }
      }
      detachElement() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const ie in this.attached) this.attached[ie].detachControl(), ee && (this.attached[ie].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const ee in this.attached) {
          const ie = this.attached[ee];
          ie.checkInputs && (this.checkInputs = this._addCheckInputs(ie.checkInputs.bind(ie)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(ee) {
        const ie = {};
        for (const He in this.attached) {
          const ee = this.attached[He],
            ye = be.c.Serialize(ee);
          ie[ee.getClassName()] = ye
        }
        ee.inputsmgr = ie
      }
      parse(ee) {
        const ie = ee.inputsmgr;
        if (ie) {
          this.clear();
          for (const ee in ie) {
            const He = Ke[ee];
            if (He) {
              const ye = ie[ee],
                Me = be.c.Parse((() => new He), ye, null);
              this.add(Me)
            }
          }
        } else
          for (const He in this.attached) {
            const ie = Ke[this.attached[He].getClassName()];
            if (ie) {
              const ye = be.c.Parse((() => new ie), ee, null);
              this.remove(this.attached[He]), this.add(ye)
            }
          }
      }
    }
  },
  42210: (ee, ie, He) => {
    He.d(ie, {
      c: () => Be
    });
    var ye = He(41113),
      be = He(41121),
      Me = He(40995),
      Ke = He(37917),
      Ue = He(41111),
      Fe = He(41593),
      Je = He(37949),
      oe = He(37931),
      Re = He(41141),
      ke = He(40924),
      qe = He(39467),
      fe = He(41159),
      Te = He(38745),
      pe = He(41191);
    var Xe = He(41e3);
    let ze = !1;
    let Be = (() => {
        var ee;
        let ie, He, Je, Be, Ee, ge, Oe, de, We, te = Ue.c,
          Ze = [],
          we = [],
          De = [],
          Pe = [],
          Ae = [],
          Ye = [],
          Ve = [],
          ae = [],
          ce = [],
          xe = [],
          Le = [],
          Ce = [],
          ve = [],
          ue = [],
          me = [];
        return ee = class extends te {
          set boundingBoxSize(ee) {
            if (this._boundingBoxSize && this._boundingBoxSize.equals(ee)) return;
            this._boundingBoxSize = ee;
            const ie = this.Xx();
            ie && ie.markAllMaterialsAsDirty(1)
          }
          get boundingBoxSize() {
            return this._boundingBoxSize
          }
          set rotationY(ee) {
            this._rotationY = ee, this.setReflectionTextureMatrix(Ke.b.RotationY(this._rotationY))
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
          constructor(ee, ie) {
            let He, be = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              Me = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Ue = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              Je = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              Re = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              Be = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 5,
              Ee = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              ge = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              Oe = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
              de = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : .8,
              We = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 0,
              te = arguments.length > 13 ? arguments[13] : void 0,
              le = arguments.length > 14 ? arguments[14] : void 0;
            super(ie), this._delayedOnLoad = (0, ye.l)(this, Ze), this.onLoadObservable = new oe.d, this.url = (0, ye.l)(this, we, void 0), this.boundingBoxPosition = ((0, ye.l)(this, De), (0, ye.l)(this, Pe, Ke.p.Zero())), this._boundingBoxSize = (0, ye.l)(this, Ae), this._rotationY = 0, this._files = (0, ye.l)(this, Ye, null), this._forcedExtension = ((0, ye.l)(this, Ve), (0, ye.l)(this, ae, null)), this._extensions = ((0, ye.l)(this, ce), (0, ye.l)(this, xe, null)), this._textureMatrix = ((0, ye.l)(this, Le), (0, ye.l)(this, Ce, void 0)), this._textureMatrixRefraction = ((0, ye.l)(this, ve), (0, ye.l)(this, ue, new Ke.b)), this._format = (0, ye.l)(this, me), this._buffer = null, ze || (ze = !0, Xe.e.prototype._partialLoadFile = function(ee, ie, He, ye) {
              let be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
              this._loadFile(ee, (ee => {
                He[ie] = ee, He._internalCount++, 6 === He._internalCount && ye(He)
              }), void 0, void 0, !0, ((ee, ie) => {
                be && ee && be(ee.status + " " + ee.statusText, ie)
              }))
            }, Xe.e.prototype._cascadeLoadFiles = function(ee, ie, He) {
              let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
              const be = [];
              be._internalCount = 0;
              for (let Me = 0; Me < 6; Me++) this._partialLoadFile(He[Me], Me, be, ie, ye)
            }, Xe.e.prototype._cascadeLoadImgs = function(ee, ie, He, ye) {
              let be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                Me = arguments.length > 5 ? arguments[5] : void 0;
              const Ke = [];
              Ke._internalCount = 0;
              for (let Ue = 0; Ue < 6; Ue++) this._partialLoadImg(ye[Ue], Ue, Ke, ee, ie, He, be, Me)
            }, Xe.e.prototype._partialLoadImg = function(ee, ie, He, ye, be, Me) {
              let Ke = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                Ue = arguments.length > 7 ? arguments[7] : void 0;
              const Fe = (0, Te.d)();
              (0, fe.r)(ee, (ee => {
                He[ie] = ee, He._internalCount++, ye && ye.removePendingData(Fe), 6 === He._internalCount && Me && Me(be, He)
              }), ((ee, ie) => {
                ye && ye.removePendingData(Fe), Ke && Ke(ee, ie)
              }), ye ? ye.offlineProvider : null, Ue), ye && ye.addPendingData(Fe)
            }, Xe.e.prototype.createCubeTextureBase = function(ee, ie, He, ye) {
              let be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                Me = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                Ke = arguments.length > 6 ? arguments[6] : void 0,
                Ue = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                Fe = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
                Je = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
                oe = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
                Re = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
                fe = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
                Te = arguments.length > 13 && void 0 !== arguments[13] ? arguments[13] : null,
                Xe = arguments.length > 14 && void 0 !== arguments[14] && arguments[14],
                ze = arguments.length > 15 && void 0 !== arguments[15] ? arguments[15] : null;
              const Be = Re || new ke.b(this, 7);
              Be.isCube = !0, Be.url = ee, Be.generateMipMaps = !ye, Be._lodGenerationScale = Je, Be._lodGenerationOffset = oe, Be._useSRGBBuffer = !!Xe && this._caps.supportSRGBBuffers && (this.version > 1 || this.isWebGPU || !!ye), Be !== Re && (Be.label = ee.substring(0, 60)), this._doNotHandleContextLost || (Be._extension = Ue, Be._files = He, Be._buffer = ze);
              const Ee = ee;
              this._transformTextureUrl && !Re && (ee = this._transformTextureUrl(ee));
              const ge = Ue ?? function(ee) {
                  const ie = ee.split("?")[0],
                    He = ie.lastIndexOf(".");
                  return He > -1 ? ie.substring(He).toLowerCase() : ""
                }(ee),
                Oe = (0, pe.c)(ge),
                de = (ee, ie) => {
                  Be.dispose(), Me ? Me(ee, ie) : ee && qe.e.Warn(ee)
                },
                We = (Me, Re) => {
                  ee === Ee ? Me && de(Me.status + " " + Me.statusText, Re) : (qe.e.Warn(`Failed to load ${ee}, falling back to the ${Ee}`), this.createCubeTextureBase(Ee, ie, He, !!ye, be, de, Ke, Ue, Fe, Je, oe, Be, fe, Te, Xe, ze))
                };
              if (Oe) Oe.then((ye => {
                const Me = ee => {
                  fe && fe(Be, ee), ye.loadCubeData(ee, Be, Fe, be, ((ee, ie) => {
                    de(ee, ie)
                  }))
                };
                ze ? Me(ze) : He && 6 === He.length ? ye.supportCascades ? this._cascadeLoadFiles(ie, (ee => Me(ee.map((ee => new Uint8Array(ee))))), He, de) : de("Textures type does not support cascades.") : this._loadFile(ee, (ee => Me(new Uint8Array(ee))), void 0, ie ? ie.offlineProvider || null : void 0, !0, We)
              }));
              else {
                if (!He || 0 === He.length) throw new Error("Cannot load cubemap because files were not defined, or the correct loader was not found.");
                this._cascadeLoadImgs(ie, Be, ((ee, ie) => {
                  Te && Te(ee, ie)
                }), He, de)
              }
              return this._internalTexturesCache.push(Be), Be
            }), this.name = ee, this.url = ee, this._noMipmap = Me, this.hasAlpha = !1, this.isCube = !0, this._textureMatrix = Ke.b.Identity(), this.coordinatesMode = Fe.e.CUBIC_MODE;
            let Se = null;
            null === be || Array.isArray(be) ? (this._noMipmap = Me, this._format = Be, this._createPolynomials = Oe, He = be, this._loaderOptions = te, this._useSRGBBuffer = le, this._lodScale = de, this._lodOffset = We) : (He = be.extensions ?? null, this._noMipmap = be.noMipmap ?? !1, Ue = be.files ?? null, Se = be.buffer ?? null, this._format = be.format ?? 5, Ee = be.prefiltered ?? !1, ge = be.forcedExtension ?? null, this._createPolynomials = be.createPolynomials ?? !1, this._lodScale = be.lodScale ?? .8, this._lodOffset = be.lodOffset ?? 0, this._loaderOptions = be.loaderOptions, this._useSRGBBuffer = be.useSRGBBuffer, this._sphericalPolynomialTargetSize = be.sphericalPolynomialTargetSize ?? 0, Je = be.onLoad ?? null, Re = be.onError ?? null), (ee || Ue) && this.updateURL(ee, ge, Je, Ee, Re, He, this.Xx()?.useDelayedTextureLoading, Ue, Se)
          }
          getClassName() {
            return "CubeTexture"
          }
          updateURL(ee) {
            let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              Me = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              Ke = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
              Ue = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              Fe = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
            this.name && !this.name.startsWith("data:") || (this.name = ee), this.url = ee, ie && (this._forcedExtension = ie);
            const Je = ee.lastIndexOf("."),
              oe = ie || (Je > -1 ? ee.substring(Je).toLowerCase() : ""),
              Re = 0 === oe.indexOf(".dds"),
              ke = 0 === oe.indexOf(".env"),
              qe = 0 === oe.indexOf(".basis");
            if (ke ? (this.gammaSpace = !1, this._prefiltered = !1, this.anisotropicFilteringLevel = 1) : (this._prefiltered = ye, ye && (this.gammaSpace = !1, this.anisotropicFilteringLevel = 1)), Ue) this._files = Ue;
            else if (qe || ke || Re || Me || (Me = ["_px.jpg", "_py.jpg", "_pz.jpg", "_nx.jpg", "_ny.jpg", "_nz.jpg"]), this._files = this._files || [], this._files.length = 0, Me) {
              for (let ie = 0; ie < Me.length; ie++) this._files.push(ee + Me[ie]);
              this._extensions = Me
            }
            this._buffer = Fe, Ke ? (this.delayLoadState = 4, this._delayedOnLoad = He, this._delayedOnError = be) : this._loadTexture(He, be)
          }
          delayLoad(ee) {
            4 === this.delayLoadState && (ee && (this._forcedExtension = ee), this.delayLoadState = 1, this._loadTexture(this._delayedOnLoad, this._delayedOnError))
          }
          getReflectionTextureMatrix() {
            return this._textureMatrix
          }
          setReflectionTextureMatrix(ee) {
            if (ee.updateFlag === this._textureMatrix.updateFlag) return;
            if (ee.isIdentity() !== this._textureMatrix.isIdentity() && this.Xx()?.markAllMaterialsAsDirty(1, (ee => -1 !== ee.getActiveTextures().indexOf(this))), this._textureMatrix = ee, !this.Xx()?.useRightHandedSystem) return;
            const ie = Ke.j.rf[0],
              He = Ke.j.Quaternion[0],
              ye = Ke.j.rf[1];
            this._textureMatrix.decompose(ie, He, ye), He.z *= -1, He.w *= -1, Ke.b.ComposeToRef(ie, He, ye, this._textureMatrixRefraction)
          }
          getRefractionTextureMatrix() {
            return this.Xx()?.useRightHandedSystem ? this._textureMatrixRefraction : this._textureMatrix
          }
          _loadTexture() {
            let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            const He = this.Xx(),
              ye = this._texture;
            this._texture = this._getFromCache(this.url, this._noMipmap, void 0, void 0, this._useSRGBBuffer, this.isCube);
            const be = () => {
                this.onLoadObservable.notifyObservers(this), ye && (ye.dispose(), this.Xx()?.markAllMaterialsAsDirty(1)), ee && ee()
              },
              Ke = (ee, He) => {
                this._loadingError = !0, this._errorObject = {
                  message: ee,
                  exception: He
                }, ie && ie(ee, He), Fe.e.OnTextureLoadErrorObservable.notifyObservers(this)
              };
            this._texture ? this._texture.isReady ? Me.c.SetImmediate((() => be())) : this._texture.onLoadedObservable.add((() => be())) : (this._prefiltered ? this._texture = this._getEngine().createPrefilteredCubeTexture(this.url, He, this._lodScale, this._lodOffset, ee, Ke, this._format, this._forcedExtension, this._createPolynomials, this._buffer) : this._texture = this._getEngine().createCubeTexture(this.url, He, this._files, this._noMipmap, ee, Ke, this._format, this._forcedExtension, !1, this._lodScale, this._lodOffset, null, this._loaderOptions, !!this._useSRGBBuffer, this._buffer), this._texture?.onLoadedObservable.add((() => this.onLoadObservable.notifyObservers(this))))
          }
          clone() {
            let ie = 0;
            const He = this.irradianceTexture,
              ye = Re.c.Clone((() => {
                const He = new ee(this.url, this.Xx() || this._getEngine(), this._extensions, this._noMipmap, this._files);
                return ie = He.uniqueId, He
              }), this);
            return ye.uniqueId = ie, He && !this.irradianceTexture && (this.irradianceTexture = He), ye
          }
        }, (() => {
          const Me = "function" === typeof Symbol && Symbol.metadata ? Object.create(te[Symbol.metadata] ?? null) : void 0;
          ie = [(0, be.R)()], He = [(0, be.P)()], Je = [(0, be.P)()], Be = [(0, be.R)("rotationY")], Ee = [(0, be.R)("files")], ge = [(0, be.R)("forcedExtension")], Oe = [(0, be.R)("extensions")], de = [(0, be.z)("textureMatrix")], We = [(0, be.z)("textureMatrixRefraction")], (0, ye.i)(ee, null, Je, {
            kind: "getter",
            name: "boundingBoxSize",
            static: !1,
            private: !1,
            access: {
              has: ee => "boundingBoxSize" in ee,
              get: ee => ee.boundingBoxSize
            },
            metadata: Me
          }, null, Ze), (0, ye.i)(ee, null, Be, {
            kind: "setter",
            name: "rotationY",
            static: !1,
            private: !1,
            access: {
              has: ee => "rotationY" in ee,
              set: (ee, ie) => {
                ee.rotationY = ie
              }
            },
            metadata: Me
          }, null, Ze), (0, ye.i)(null, null, ie, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: ee => "url" in ee,
              get: ee => ee.url,
              set: (ee, ie) => {
                ee.url = ie
              }
            },
            metadata: Me
          }, we, De), (0, ye.i)(null, null, He, {
            kind: "field",
            name: "boundingBoxPosition",
            static: !1,
            private: !1,
            access: {
              has: ee => "boundingBoxPosition" in ee,
              get: ee => ee.boundingBoxPosition,
              set: (ee, ie) => {
                ee.boundingBoxPosition = ie
              }
            },
            metadata: Me
          }, Pe, Ae), (0, ye.i)(null, null, Ee, {
            kind: "field",
            name: "_files",
            static: !1,
            private: !1,
            access: {
              has: ee => "_files" in ee,
              get: ee => ee._files,
              set: (ee, ie) => {
                ee._files = ie
              }
            },
            metadata: Me
          }, Ye, Ve), (0, ye.i)(null, null, ge, {
            kind: "field",
            name: "_forcedExtension",
            static: !1,
            private: !1,
            access: {
              has: ee => "_forcedExtension" in ee,
              get: ee => ee._forcedExtension,
              set: (ee, ie) => {
                ee._forcedExtension = ie
              }
            },
            metadata: Me
          }, ae, ce), (0, ye.i)(null, null, Oe, {
            kind: "field",
            name: "_extensions",
            static: !1,
            private: !1,
            access: {
              has: ee => "_extensions" in ee,
              get: ee => ee._extensions,
              set: (ee, ie) => {
                ee._extensions = ie
              }
            },
            metadata: Me
          }, xe, Le), (0, ye.i)(null, null, de, {
            kind: "field",
            name: "_textureMatrix",
            static: !1,
            private: !1,
            access: {
              has: ee => "_textureMatrix" in ee,
              get: ee => ee._textureMatrix,
              set: (ee, ie) => {
                ee._textureMatrix = ie
              }
            },
            metadata: Me
          }, Ce, ve), (0, ye.i)(null, null, We, {
            kind: "field",
            name: "_textureMatrixRefraction",
            static: !1,
            private: !1,
            access: {
              has: ee => "_textureMatrixRefraction" in ee,
              get: ee => ee._textureMatrixRefraction,
              set: (ee, ie) => {
                ee._textureMatrixRefraction = ie
              }
            },
            metadata: Me
          }, ue, me), Me && Object.defineProperty(ee, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Me
          })
        })(), ee
      })(),
      Ee = !1;

    function ge(ee, ie, He) {
      let ye = "";
      for (const be of ee) ye += be;
      return new Be(ye, ie, null, He, ee)
    }

    function Oe(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        ye = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const be = ie.useDelayedTextureLoading;
      ie.useDelayedTextureLoading = !1;
      const Me = new Be(ee, ie, null, !1, null, null, null, void 0, !0, He, ye);
      return ie.useDelayedTextureLoading = be, Me
    }

    function de(ee, ie, He) {
      const ye = Re.c.Parse((() => {
        let ye = !1;
        return ee.prefiltered && (ye = ee.prefiltered), new Be(He + (ee.url ?? ee.name), ie, ee.extensions, !1, ee.files || null, null, null, void 0, ye, ee.forcedExtension)
      }), ee, ie);
      if (ee.boundingBoxPosition && (ye.boundingBoxPosition = Ke.p.FromArray(ee.boundingBoxPosition)), ee.boundingBoxSize && (ye.boundingBoxSize = Ke.p.FromArray(ee.boundingBoxSize)), ee.animations)
        for (let be = 0; be < ee.animations.length; be++) {
          const ie = ee.animations[be],
            He = (0, Je.c)("BABYLON.Animation");
          He && ye.animations.push(He.Parse(ie))
        }
      return ye
    }
    Ee || (Ee = !0, Be.CreateFromImages = ge, Be.CreateFromPrefilteredData = Oe, Be.Parse = de, Fe.e._CubeTextureParser = de, (0, Je.e)("BABYLON.CubeTexture", Be))
  },
  42250: (ee, ie, He) => {
    He.d(ie, {
      d: () => Je
    });
    var ye = He(39467),
      be = He(41593),
      Me = He(41044),
      Ke = He(40936),
      Ue = He(40924);
    let Fe = !1;
    class Je extends be.e {
      constructor(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Je = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          oe = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5,
          Re = arguments.length > 6 ? arguments[6] : void 0;
        const ke = !He || He._isScene;
        super(null, ke ? He : He?.yp, ke ? !ye : He, Re, Je, void 0, void 0, void 0, void 0, oe), Fe || (Fe = !0, Ke.ThinEngine.prototype.createDynamicTexture = function(ee, ie, He, ye) {
          const be = new Ue.b(this, 4);
          return be.baseWidth = ee, be.baseHeight = ie, He && (ee = this.needPOTTextures ? (0, Me.h)(ee, this._caps.maxTextureSize) : ee, ie = this.needPOTTextures ? (0, Me.h)(ie, this._caps.maxTextureSize) : ie), be.width = ee, be.height = ie, be.isReady = !1, be.generateMipMaps = He, be.samplingMode = ye, this.updateTextureSamplingMode(ye, be), this._internalTexturesCache.push(be), be
        }, Ke.ThinEngine.prototype.updateDynamicTexture = function(ee, ie, He) {
          let ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            be = arguments.length > 4 ? arguments[4] : void 0,
            Me = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
          if (!ee) return;
          const Ke = this._gl,
            Ue = Ke.TEXTURE_2D,
            Fe = this._bindTextureDirectly(Ue, ee, !0, Me);
          this._unpackFlipY(void 0 === He ? ee.invertY : He), ye && Ke.pixelStorei(Ke.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
          const Je = this._getWebGLTextureType(ee.type),
            oe = this._getInternalFormat(be || ee.format),
            Re = this._getRGBABufferInternalSizedFormat(ee.type, oe);
          Ke.texImage2D(Ue, 0, Re, oe, Je, ie), ee.generateMipMaps && Ke.generateMipmap(Ue), Fe || this._bindTextureDirectly(Ue, null), ye && Ke.pixelStorei(Ke.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), be && (ee.format = be), ee._dynamicTextureSource = ie, ee._premulAlpha = ye, ee.invertY = He || !1, ee.isReady = !0
        }), this.name = ee, this.wrapU = be.e.CLAMP_ADDRESSMODE, this.wrapV = be.e.CLAMP_ADDRESSMODE, this._generateMipMaps = ye;
        const qe = this._getEngine();
        if (!qe) return;
        if (ie.getContext) this._canvas = ie, this._ownCanvas = !1, this._texture = qe.createDynamicTexture(this._canvas.width, this._canvas.height, ye, Je);
        else {
          this._canvas = qe.createCanvas(1, 1), this._ownCanvas = !0;
          const ee = ie;
          ee.width || 0 === ee.width ? this._texture = qe.createDynamicTexture(ee.width, ee.height, ye, Je) : this._texture = qe.createDynamicTexture(ie, ie, ye, Je)
        }
        const fe = this.getSize();
        this._canvas.width !== fe.width && (this._canvas.width = fe.width), this._canvas.height !== fe.height && (this._canvas.height = fe.height), this._context = this._canvas.getContext("2d")
      }
      getClassName() {
        return "DynamicTexture"
      }
      get canRescale() {
        return !0
      }
      _recreate(ee) {
        this._canvas.width = ee.width, this._canvas.height = ee.height, this.releaseInternalTexture(), this._texture = this._getEngine().createDynamicTexture(ee.width, ee.height, this._generateMipMaps, this.samplingMode)
      }
      scale(ee) {
        const ie = this.getSize();
        ie.width *= ee, ie.height *= ee, this._recreate(ie)
      }
      scaleTo(ee, ie) {
        const He = this.getSize();
        He.width = ee, He.height = ie, this._recreate(He)
      }
      getContext() {
        return this._context
      }
      clear(ee) {
        const ie = this.getSize();
        ee && (this._context.fillStyle = ee), this._context.clearRect(0, 0, ie.width, ie.height)
      }
      update(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._texture && this._getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === ee || ee, ie, this._format || void 0, void 0, He)
      }
      drawText(ee, ie, He, ye, be, Me, Ke) {
        let Ue = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const Fe = this.getSize();
        if (Me && (this._context.fillStyle = Me, this._context.fillRect(0, 0, Fe.width, Fe.height)), this._context.font = ye, null === ie || void 0 === ie) {
          const He = this._context.measureText(ee);
          ie = (Fe.width - He.width) / 2
        }
        if (null === He || void 0 === He) {
          const ee = parseInt(ye.replace(/\D/g, ""));
          He = Fe.height / 2 + ee / 3.65
        }
        this._context.fillStyle = be || "", this._context.fillText(ee, ie, He), Ue && this.update(Ke)
      }
      dispose() {
        super.dispose(), this._ownCanvas && this._canvas?.remove?.(), this._canvas = null, this._context = null
      }
      clone() {
        const ee = this.Xx();
        if (!ee) return this;
        const ie = this.getSize(),
          He = new Je(this.name, ie, ee, this._generateMipMaps);
        return He.hasAlpha = this.hasAlpha, He.level = this.level, He.wrapU = this.wrapU, He.wrapV = this.wrapV, He
      }
      serialize() {
        const ee = this.Xx();
        ee && !ee.isReady() && ye.e.Warn("The scene must be ready before serializing the dynamic texture");
        const ie = super.serialize();
        return Je._IsCanvasElement(this._canvas) && (ie.base64String = this._canvas.toDataURL()), ie.invertY = this._invertY, ie.samplingMode = this.samplingMode, ie
      }
      static _IsCanvasElement(ee) {
        return void 0 !== ee.toDataURL
      }
      _rebuild() {
        this.update()
      }
    }
  },
  42223: (ee, ie, He) => {
    He.d(ie, {
      c: () => be
    });
    var ye = He(41593);
    class be extends ye.e {
      get depth() {
        return this._depth
      }
      constructor(ee, ie, He, be, Me, Ke) {
        let Ue = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          Fe = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          Je = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : ye.e.TRILINEAR_SAMPLINGMODE,
          oe = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          Re = arguments.length > 10 ? arguments[10] : void 0,
          ke = arguments.length > 11 ? arguments[11] : void 0;
        super(null, Ke, !Ue, Fe), this.format = Me, this._texture = Ke.Nf().createRawTexture2DArray(ee, ie, He, be, Me, Ue, Fe, Je, null, oe, Re ?? 0, ke), this._depth = be, this.is2DArray = !0
      }
      update(ee) {
        this.updateMipLevel(ee, 0)
      }
      updateMipLevel(ee, ie) {
        this._texture && this._getEngine().updateRawTexture2DArray(this._texture, ee, this._texture.format, this._texture.invertY, null, this._texture.type, ie)
      }
      static CreateRGBATexture(ee, ie, He, ye, Me) {
        return new be(ee, ie, He, ye, 5, Me, !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0)
      }
    }
  },
  42219: (ee, ie, He) => {
    He.d(ie, {
      e: () => ye.b
    });
    var ye = He(41490);
    (0, ye.d)()
  },
  41195: (ee, ie, He) => {
    He.d(ie, {
      b: () => ye.f
    });
    var ye = He(41199);
    (0, ye.d)()
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);