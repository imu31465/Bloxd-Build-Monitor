export const id = 224;
export const ids = [224, 229];
export const modules = {
  40949: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => fD
    });
    var ID = cD(40859),
      pD = cD(39148);
    let iD = !1;

    function fD() {
      iD || (iD = !0, pD.d.prototype._sphericalPolynomialTargetSize = 0, pD.d.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(pD.d.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = ID.e.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((DD => {
              this._texture._sphericalPolynomial = DD, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(DD) {
          this._texture && (this._texture._sphericalPolynomial = DD)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  36613: (DD, CD, cD) => {
    cD.d(CD, {
      Color3: () => ID.d,
      c: () => ID.e
    });
    var ID = cD(36622);
    (0, ID.h)()
  },
  37159: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => pD
    });
    var ID = cD(37167);
    class pD {
      static GetPlanes(DD) {
        const CD = [];
        for (let cD = 0; cD < 6; cD++) CD.push(new ID.c(0, 0, 0, 0));
        return pD.GetPlanesToRef(DD, CD), CD
      }
      static GetNearPlaneToRef(DD, CD) {
        const cD = DD.m;
        CD.normal.x = cD[3] + cD[2], CD.normal.y = cD[7] + cD[6], CD.normal.z = cD[11] + cD[10], CD.d = cD[15] + cD[14], CD.normalize()
      }
      static GetFarPlaneToRef(DD, CD) {
        const cD = DD.m;
        CD.normal.x = cD[3] - cD[2], CD.normal.y = cD[7] - cD[6], CD.normal.z = cD[11] - cD[10], CD.d = cD[15] - cD[14], CD.normalize()
      }
      static GetLeftPlaneToRef(DD, CD) {
        const cD = DD.m;
        CD.normal.x = cD[3] + cD[0], CD.normal.y = cD[7] + cD[4], CD.normal.z = cD[11] + cD[8], CD.d = cD[15] + cD[12], CD.normalize()
      }
      static GetRightPlaneToRef(DD, CD) {
        const cD = DD.m;
        CD.normal.x = cD[3] - cD[0], CD.normal.y = cD[7] - cD[4], CD.normal.z = cD[11] - cD[8], CD.d = cD[15] - cD[12], CD.normalize()
      }
      static GetTopPlaneToRef(DD, CD) {
        const cD = DD.m;
        CD.normal.x = cD[3] - cD[1], CD.normal.y = cD[7] - cD[5], CD.normal.z = cD[11] - cD[9], CD.d = cD[15] - cD[13], CD.normalize()
      }
      static GetBottomPlaneToRef(DD, CD) {
        const cD = DD.m;
        CD.normal.x = cD[3] + cD[1], CD.normal.y = cD[7] + cD[5], CD.normal.z = cD[11] + cD[9], CD.d = cD[15] + cD[13], CD.normalize()
      }
      static GetPlanesToRef(DD, CD) {
        pD.GetNearPlaneToRef(DD, CD[0]), pD.GetFarPlaneToRef(DD, CD[1]), pD.GetLeftPlaneToRef(DD, CD[2]), pD.GetRightPlaneToRef(DD, CD[3]), pD.GetTopPlaneToRef(DD, CD[4]), pD.GetBottomPlaneToRef(DD, CD[5])
      }
      static IsPointInFrustum(DD, CD) {
        for (let cD = 0; cD < 6; cD++)
          if (CD[cD].dotCoordinate(DD) < 0) return !1;
        return !0
      }
    }
  },
  37167: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => pD
    });
    var ID = cD(36446);
    class pD {
      constructor(DD, CD, cD, pD) {
        this.normal = new ID.p(DD, CD, cD), this.d = pD
      }
      XcD() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new pD(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let DD = this.normal.getHashCode();
        return DD = 397 * DD ^ this.d, DD
      }
      normalize() {
        const DD = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let CD = 0;
        return 0 !== DD && (CD = 1 / DD), this.normal.x *= CD, this.normal.y *= CD, this.normal.z *= CD, this.d *= CD, this
      }
      transform(DD) {
        const CD = pD._TmpMatrix;
        DD.invertToRef(CD);
        const cD = CD.m,
          ID = this.normal.x,
          iD = this.normal.y,
          fD = this.normal.z,
          bD = this.d,
          QD = ID * cD[0] + iD * cD[1] + fD * cD[2] + bD * cD[3],
          wD = ID * cD[4] + iD * cD[5] + fD * cD[6] + bD * cD[7],
          SD = ID * cD[8] + iD * cD[9] + fD * cD[10] + bD * cD[11],
          BD = ID * cD[12] + iD * cD[13] + fD * cD[14] + bD * cD[15];
        return new pD(QD, wD, SD, BD)
      }
      dotCoordinate(DD) {
        return this.normal.x * DD.x + this.normal.y * DD.y + this.normal.z * DD.z + this.d
      }
      copyFromPoints(DD, CD, cD) {
        const ID = CD.x - DD.x,
          pD = CD.y - DD.y,
          iD = CD.z - DD.z,
          fD = cD.x - DD.x,
          bD = cD.y - DD.y,
          QD = cD.z - DD.z,
          wD = pD * QD - iD * bD,
          SD = iD * fD - ID * QD,
          BD = ID * bD - pD * fD,
          yD = Math.sqrt(wD * wD + SD * SD + BD * BD);
        let MD;
        return MD = 0 !== yD ? 1 / yD : 0, this.normal.x = wD * MD, this.normal.y = SD * MD, this.normal.z = BD * MD, this.d = -(this.normal.x * DD.x + this.normal.y * DD.y + this.normal.z * DD.z), this
      }
      isFrontFacingTo(DD, CD) {
        return ID.p.Dot(this.normal, DD) <= CD
      }
      signedDistanceTo(DD) {
        return ID.p.Dot(DD, this.normal) + this.d
      }
      static FromArray(DD) {
        return new pD(DD[0], DD[1], DD[2], DD[3])
      }
      static FromPoints(DD, CD, cD) {
        const ID = new pD(0, 0, 0, 0);
        return ID.copyFromPoints(DD, CD, cD), ID
      }
      static FromPositionAndNormal(DD, CD) {
        const cD = new pD(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(DD, CD, cD)
      }
      static FromPositionAndNormalToRef(DD, CD, cD) {
        return cD.normal.YCD(CD), cD.normal.normalize(), cD.d = -DD.dot(cD.normal), cD
      }
      static SignedDistanceToPlaneFromPositionAndNormal(DD, CD, cD) {
        const pD = -(CD.x * DD.x + CD.y * DD.y + CD.z * DD.z);
        return ID.p.Dot(cD, CD) + pD
      }
    }
    pD._TmpMatrix = ID.d.Identity()
  },
  36440: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      Matrix: () => ID.d,
      Quaternion: () => ID.h,
      RegisterMathVector: () => ID.k,
      TmpVectors: () => ID.l,
      Vector2: () => ID.n,
      cZ: () => ID.p,
      Vector4: () => ID.s
    });
    var ID = cD(36446);
    (0, ID.k)()
  },
  37479: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => ID
    });
    class ID {
      constructor(DD, CD, cD, ID) {
        this.x = DD, this.y = CD, this.width = cD, this.height = ID
      }
      toGlobal(DD, CD) {
        return new ID(this.x * DD, this.y * CD, this.width * DD, this.height * CD)
      }
      toGlobalToRef(DD, CD, cD) {
        return cD.x = this.x * DD, cD.y = this.y * CD, cD.width = this.width * DD, cD.height = this.height * CD, this
      }
      clone() {
        return new ID(this.x, this.y, this.width, this.height)
      }
    }
  },
  40859: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => wD
    });
    var ID = cD(36446),
      pD = cD(36479),
      iD = cD(39142),
      fD = cD(36449),
      bD = cD(36622);
    class QD {
      constructor(DD, CD, cD, ID) {
        this.name = DD, this.worldAxisForNormal = CD, this.worldAxisForFileX = cD, this.worldAxisForFileY = ID
      }
    }
    class wD {
      static _NearestPow2Floor(DD) {
        return DD <= 1 ? 1 : 1 << Math.floor(Math.log2(DD))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(DD) {
        if (!DD.isCube) return null;
        DD.hq()?.DZ().flushFramebuffer();
        const CD = DD.getSize().width,
          cD = DD._sphericalPolynomialTargetSize,
          ID = cD > 0 ? this._NearestPow2Floor(cD) : 0,
          pD = !DD.noMipmap && !0 === DD._texture?.generateMipMaps,
          iD = ID > 0 && ID < CD && pD,
          fD = iD ? Math.max(0, Math.round(Math.log2(CD / ID))) : 0,
          bD = iD ? Math.max(1, Math.floor(CD / Math.pow(2, fD))) : CD,
          QD = DD.readPixels(0, fD, void 0, !1),
          wD = DD.readPixels(1, fD, void 0, !1);
        let SD, BD;
        DD.isRenderTarget ? (SD = DD.readPixels(3, fD, void 0, !1), BD = DD.readPixels(2, fD, void 0, !1)) : (SD = DD.readPixels(2, fD, void 0, !1), BD = DD.readPixels(3, fD, void 0, !1));
        const yD = DD.readPixels(4, fD, void 0, !1),
          MD = DD.readPixels(5, fD, void 0, !1),
          tD = DD.gammaSpace,
          ZD = ID > 0 && ID < CD && !iD;
        return new Promise((DD => {
          Promise.all([wD, QD, SD, BD, yD, MD]).then((cD => {
            let [pD, iD, fD, QD, wD, SD] = cD, BD = bD;
            if (ZD) {
              const DD = 4;
              pD = this._DownsampleFace(pD, CD, ID, DD), iD = this._DownsampleFace(iD, CD, ID, DD), fD = this._DownsampleFace(fD, CD, ID, DD), QD = this._DownsampleFace(QD, CD, ID, DD), wD = this._DownsampleFace(wD, CD, ID, DD), SD = this._DownsampleFace(SD, CD, ID, DD), BD = ID
            }
            const yD = {
              size: BD,
              right: iD,
              left: pD,
              up: fD,
              down: QD,
              front: wD,
              back: SD,
              format: 5,
              type: pD instanceof Float32Array ? 1 : 0,
              gammaSpace: tD
            };
            DD(this.ConvertCubeMapToSphericalPolynomial(yD))
          }))
        }))
      }
      static _AreaElement(DD, CD) {
        return Math.atan2(DD * CD, Math.sqrt(DD * DD + CD * CD + 1))
      }
      static _DownsampleFace(DD, CD, cD, ID) {
        const pD = DD instanceof Float32Array ? DD : Float32Array.from(DD),
          iD = cD * cD * ID,
          fD = new Float32Array(iD),
          bD = CD / cD,
          QD = 1 / (bD * bD);
        for (let SD = 0; SD < cD; SD++) {
          const DD = Math.floor(SD * bD),
            iD = Math.floor((SD + 1) * bD);
          for (let wD = 0; wD < cD; wD++) {
            const BD = Math.floor(wD * bD),
              yD = Math.floor((wD + 1) * bD),
              MD = (SD * cD + wD) * ID;
            for (let cD = 0; cD < ID; cD++) {
              let bD = 0;
              for (let fD = DD; fD < iD; fD++)
                for (let DD = BD; DD < yD; DD++) bD += pD[(fD * CD + DD) * ID + cD];
              fD[MD + cD] = bD * QD
            }
          }
        }
        if (DD instanceof Float32Array) return fD;
        const wD = new(0, DD.constructor)(iD);
        for (let SD = 0; SD < iD; SD++) wD[SD] = fD[SD] + .5 | 0;
        return wD
      }
      static ConvertCubeMapToSphericalPolynomial(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const cD = CD > 0 ? this._NearestPow2Floor(CD) : 0;
        if (cD > 0 && DD.size > cD) {
          const CD = 5 === DD.format ? 4 : 3,
            ID = ["right", "left", "up", "down", "front", "back"],
            pD = {};
          for (const iD of ID) pD[iD] = this._DownsampleFace(DD[iD], DD.size, cD, CD);
          DD = {
            ...DD,
            ...pD,
            size: cD
          }
        }
        const ID = new iD.e;
        let QD = 0;
        const wD = 2 / DD.size,
          SD = wD,
          BD = .5 * wD,
          yD = BD - 1;
        for (let iD = 0; iD < 6; iD++) {
          const CD = this._FileFaces[iD],
            cD = DD[CD.name];
          let MD = yD;
          const tD = 5 === DD.format ? 4 : 3;
          for (let iD = 0; iD < DD.size; iD++) {
            let ZD = yD;
            for (let SD = 0; SD < DD.size; SD++) {
              const yD = CD.worldAxisForFileX.scale(ZD).add(CD.worldAxisForFileY.scale(MD)).add(CD.worldAxisForNormal);
              yD.normalize();
              const oD = this._AreaElement(ZD - BD, MD - BD) - this._AreaElement(ZD - BD, MD + BD) - this._AreaElement(ZD + BD, MD - BD) + this._AreaElement(ZD + BD, MD + BD);
              let vD = cD[iD * DD.size * tD + SD * tD + 0],
                ND = cD[iD * DD.size * tD + SD * tD + 1],
                gD = cD[iD * DD.size * tD + SD * tD + 2];
              isNaN(vD) && (vD = 0), isNaN(ND) && (ND = 0), isNaN(gD) && (gD = 0), 0 === DD.type && (vD /= 255, ND /= 255, gD /= 255), DD.gammaSpace && (vD = Math.pow((0, pD.Clamp)(vD), fD.h), ND = Math.pow((0, pD.Clamp)(ND), fD.h), gD = Math.pow((0, pD.Clamp)(gD), fD.h));
              const XD = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const DD = Math.max(vD, ND, gD);
                if (DD > XD) {
                  const CD = XD / DD;
                  vD *= CD, ND *= CD, gD *= CD
                }
              } else vD = (0, pD.Clamp)(vD, 0, XD), ND = (0, pD.Clamp)(ND, 0, XD), gD = (0, pD.Clamp)(gD, 0, XD);
              const mD = new bD.d(vD, ND, gD);
              ID.addLight(yD, mD, oD), QD += oD, ZD += wD
            }
            MD += SD
          }
        }
        const MD = 6 * (4 * Math.PI) / 6 / QD;
        return ID.scaleInPlace(MD), ID.convertIncidentRadianceToIrradiance(), ID.convertIrradianceToLambertianRadiance(), iD.f.FromHarmonics(ID)
      }
    }
    wD._FileFaces = [new QD("right", new ID.p(1, 0, 0), new ID.p(0, 0, -1), new ID.p(0, -1, 0)), new QD("left", new ID.p(-1, 0, 0), new ID.p(0, 0, 1), new ID.p(0, -1, 0)), new QD("up", new ID.p(0, 1, 0), new ID.p(1, 0, 0), new ID.p(0, 0, 1)), new QD("down", new ID.p(0, -1, 0), new ID.p(1, 0, 0), new ID.p(0, 0, -1)), new QD("front", new ID.p(0, 0, 1), new ID.p(1, 0, 0), new ID.p(0, -1, 0)), new QD("back", new ID.p(0, 0, -1), new ID.p(-1, 0, 0), new ID.p(0, -1, 0))], wD.MAX_HDRI_VALUE = 4096, wD.PRESERVE_CLAMPED_COLORS = !1
  },
  40606: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => ID.i,
      d: () => ID.q
    });
    var ID = cD(39193);
    (0, ID.t)()
  },
  37290: (DD, CD, cD) => {
    function ID() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (DD => {
        const CD = 16 * Math.random() | 0;
        return ("x" === DD ? CD : 3 & CD | 8).toString(16)
      }))
    }
    cD.d(CD, {
      d: () => ID
    })
  },
  40908: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => iD
    });
    var ID = cD(40895),
      pD = cD(40917);
    class iD {
      static ExpandRGBDTexture(DD) {
        const CD = DD._texture;
        if (!CD || !DD.isRGBD) return;
        const pD = CD.DZ(),
          iD = pD.getCaps(),
          fD = CD.isReady;
        let bD = !1;
        iD.textureHalfFloatRender && iD.textureHalfFloatLinearFiltering ? (bD = !0, CD.type = 2) : iD.textureFloatRender && iD.textureFloatLinearFiltering && (bD = !0, CD.type = 1), bD && (CD.isReady = !1, CD._isRGBD = !1, CD.invertY = !1);
        const QD = async () => {
          const iD = pD.isWebGPU,
            fD = iD ? 1 : 0;
          CD.isReady = !1, iD ? await cD.e(332).then((() => cD(60609))) : await cD.e(314).then((() => cD(60613)));
          const bD = new ID.d("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, pD, !1, void 0, CD.type, void 0, null, !1, void 0, fD);
          bD.externalTextureSamplerBinding = !0;
          const QD = pD.createRenderTargetTexture(CD.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: CD.samplingMode,
            type: CD.type,
            format: 5
          });
          bD.onEffectCreatedObservable.addOnce((cD => {
            cD.executeWhenCompiled((() => {
              bD.onApply = DD => {
                DD._bindTexture("textureSampler", CD), DD.setFloat2("scale", 1, 1)
              }, DD.hq()?.postProcessManager.directRender([bD], QD, !0), pD.restoreDefaultFramebuffer(), pD._releaseTexture(CD), bD && bD.dispose(), QD._swapAndDie(CD), CD.isReady = !0
            }))
          }))
        };
        bD && (fD ? QD() : DD.onLoadObservable.addOnce(QD))
      }
      static async EncodeTextureToRGBD(DD, CD) {
        let ID = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return CD.DZ().isWebGPU ? await cD.e(333).then((() => cD(60630))) : await cD.e(315).then((() => cD(60625))), await (0, pD.d)("rgbdEncode", DD, CD, ID, 1, 5)
      }
    }
  },
  60375: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      AsyncLoop: () => ID.d,
      RegisterTools: () => ID.e,
      Tools: () => ID.g,
      className: () => ID.h
    });
    var ID = cD(39245);
    (0, ID.e)()
  },
  40963: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => pD
    });
    class ID {
      constructor(DD) {
        this._pendingActions = new Array, this._workerInfos = DD.map((DD => ({
          workerPromise: Promise.resolve(DD),
          idle: !0
        })))
      }
      dispose() {
        for (const DD of this._workerInfos) DD.workerPromise.then((DD => {
          DD.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(DD) {
        this._executeOnIdleWorker(DD) || this._pendingActions.push(DD)
      }
      _executeOnIdleWorker(DD) {
        for (const CD of this._workerInfos)
          if (CD.idle) return this._execute(CD, DD), !0;
        return !1
      }
      _execute(DD, CD) {
        DD.idle = !1, DD.workerPromise.then((cD => {
          CD(cD, (() => {
            const CD = this._pendingActions.shift();
            CD ? this._execute(DD, CD) : DD.idle = !0
          }))
        }))
      }
    }
    class pD extends ID {
      constructor(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pD.DefaultOptions;
        super([]), this._maxWorkers = DD, this._createWorkerAsync = CD, this._options = cD
      }
      push(DD) {
        if (!this._executeOnIdleWorker(DD))
          if (this._workerInfos.length < this._maxWorkers) {
            const CD = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(CD), this._execute(CD, DD)
          } else this._pendingActions.push(DD)
      }
      _execute(DD, CD) {
        DD.timeoutId && (clearTimeout(DD.timeoutId), delete DD.timeoutId), super._execute(DD, ((cD, ID) => {
          CD(cD, (() => {
            ID(), DD.idle && (DD.timeoutId = setTimeout((() => {
              DD.workerPromise.then((DD => {
                DD.terminate()
              }));
              const CD = this._workerInfos.indexOf(DD); - 1 !== CD && this._workerInfos.splice(CD, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    pD.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  },
  60406: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      AbstractThreeMfSerializer: () => rb,
      BVHExporter: () => Kf,
      ContentTypeFileName: () => Nb,
      DefaultXmlSerializerFormatOptions: () => Ef,
      DefaultXmlSerializerNumberOptions: () => sf,
      EXT_lights_area: () => op,
      EXT_mesh_gpu_instancing: () => TI,
      EXT_texture_avif: () => wf,
      EXT_texture_webp: () => pf,
      GLTF2Export: () => jI,
      GLTFData: () => wD,
      GetXmlFieldMeta: () => Rf,
      GetXmlName: () => kf,
      IsQualifiedName: () => af,
      KHR_draco_mesh_compression: () => rI,
      KHR_interactivity: () => wp,
      KHR_lights_punctual: () => ip,
      KHR_materials_anisotropy: () => Xp,
      KHR_materials_clearcoat: () => Hp,
      KHR_materials_coat: () => ap,
      KHR_materials_diffuse_roughness: () => Ti,
      KHR_materials_diffuse_transmission: () => Tp,
      KHR_materials_dispersion: () => dp,
      KHR_materials_emissive_strength: () => Ep,
      KHR_materials_fuzz: () => yi,
      KHR_materials_ior: () => Ap,
      KHR_materials_iridescence: () => ci,
      KHR_materials_openpbr: () => di,
      KHR_materials_sheen: () => bi,
      KHR_materials_specular: () => oi,
      KHR_materials_transmission: () => Xi,
      KHR_materials_unlit: () => Hi,
      KHR_materials_volume: () => Ji,
      KHR_materials_volume_scatter: () => zi,
      KHR_texture_basisu: () => Fi,
      KHR_texture_transform: () => Ei,
      Known3mfRelationshipTypes: () => gb,
      KnownI3mfContentType: () => Mb,
      Matrix3d: () => Hb,
      MatrixFormatter: () => Ub,
      ModelFileName: () => ob,
      NumberFormatter: () => hf,
      OBJExport: () => fD,
      Object3dDirName: () => Zb,
      OpenXmlContentTypesNamespace: () => Bb,
      OpenXmlRelationshipsNamespace: () => yb,
      RegisterEXT_lights_area: () => Np,
      RegisterEXT_mesh_gpu_instancing: () => RI,
      RegisterEXT_texture_avif: () => Bf,
      RegisterEXT_texture_webp: () => bf,
      RegisterKHR_draco_mesh_compression: () => FI,
      RegisterKHR_interactivity: () => Bp,
      RegisterKHR_lights_punctual: () => bp,
      RegisterKHR_materials_anisotropy: () => np,
      RegisterKHR_materials_clearcoat: () => xp,
      RegisterKHR_materials_coat: () => zp,
      RegisterKHR_materials_diffuse_roughness: () => Ri,
      RegisterKHR_materials_diffuse_transmission: () => Rp,
      RegisterKHR_materials_dispersion: () => Wp,
      RegisterKHR_materials_emissive_strength: () => hp,
      RegisterKHR_materials_fuzz: () => ti,
      RegisterKHR_materials_ior: () => Di,
      RegisterKHR_materials_iridescence: () => ii,
      RegisterKHR_materials_openpbr: () => Wi,
      RegisterKHR_materials_sheen: () => wi,
      RegisterKHR_materials_specular: () => Ni,
      RegisterKHR_materials_transmission: () => ni,
      RegisterKHR_materials_unlit: () => xi,
      RegisterKHR_materials_volume: () => ai,
      RegisterKHR_materials_volume_scatter: () => li,
      RegisterKHR_texture_basisu: () => Cf,
      RegisterKHR_texture_transform: () => ui,
      RelationshipDirName: () => tb,
      RelationshipFileName: () => vb,
      ResolveFormatOptions: () => uf,
      ResolveNumberOptions: () => ef,
      STLExport: () => yf,
      ST_ObjectType: () => Sb,
      ST_Unit: () => wb,
      StringXmlWriter: () => ib,
      ThreeDimModelNamespace: () => bb,
      ThreeMf: () => Ab,
      ThreeMfBase: () => kb,
      ThreeMfBaseMaterials: () => Rb,
      ThreeMfBuild: () => db,
      ThreeMfComponent: () => Gb,
      ThreeMfComponents: () => Tb,
      ThreeMfComponentsBuilder: () => sb,
      ThreeMfContentType: () => mb,
      ThreeMfContentTypes: () => Xb,
      ThreeMfDocument: () => Pb,
      ThreeMfDocumentBuilder: () => hb,
      ThreeMfItem: () => Yb,
      ThreeMfMaterialBuilder: () => eb,
      ThreeMfMesh: () => Vb,
      ThreeMfMeshBuilder: () => Eb,
      ThreeMfMeta: () => qb,
      ThreeMfMetadataGroup: () => Jb,
      ThreeMfModel: () => xb,
      ThreeMfModelBuilder: () => ub,
      ThreeMfObject: () => ab,
      ThreeMfObjectBuilder: () => Wb,
      ThreeMfRelationship: () => Ob,
      ThreeMfRelationships: () => nb,
      ThreeMfResources: () => Kb,
      ThreeMfSerializer: () => CQ,
      ThreeMfSerializerGlobalConfiguration: () => Fb,
      ThreeMfTriangle: () => Lb,
      ThreeMfTriangles: () => lb,
      ThreeMfVertex: () => jb,
      ThreeMfVertices: () => zb,
      ToQualifiedString: () => Wf,
      TokenType: () => Ib,
      TriangleSetsNamespace: () => Qb,
      USDZExportAsync: () => qf,
      Utf8XmlWriterToBytes: () => fb,
      XmlAttr: () => Tf,
      XmlBuilder: () => pb,
      XmlElem: () => Gf,
      XmlIgnore: () => Lf,
      XmlName: () => lf,
      XmlNameToParts: () => Yf,
      XmlSerializer: () => Cb,
      _ConvertToGLTFPBRMetallicRoughness: () => Hc,
      _SolveMetallic: () => Pc,
      __IGLTFExporterExtension: () => bD
    });
    var ID = cD(36440),
      pD = cD(60375),
      iD = cD(39416);
    class fD {
      static OBJ(DD, CD, cD, fD) {
        const bD = [];
        let QD = 1,
          wD = 1;
        CD && (cD || (cD = "mat"), bD.push("mtllib " + cD + ".mtl"));
        for (let SD = 0; SD < DD.length; SD++) {
          const cD = DD[SD],
            BD = cD.name || `mesh${SD}}`;
          bD.push(`o ${BD}`);
          let yD = null;
          if (fD) {
            const DD = cD.computeWorldMatrix(!0);
            yD = new ID.Matrix, DD.invertToRef(yD), cD.bakeTransformIntoVertices(DD)
          }
          if (CD) {
            const DD = cD.material;
            DD && bD.push("usemtl " + DD.id)
          }
          const MD = cD.geometry;
          if (!MD) {
            pD.Tools.Warn("No geometry is present on the mesh");
            continue
          }
          const tD = MD.getVerticesData("position"),
            ZD = MD.getVerticesData("normal"),
            oD = MD.getVerticesData("uv"),
            vD = MD.ncD();
          let ND = 0,
            gD = 0;
          if (!tD || !vD) {
            pD.Tools.Warn("There are no position vertices or indices on the mesh!");
            continue
          }
          const XD = DD[0].hq().useRightHandedSystem ? 1 : -1;
          for (let DD = 0; DD < tD.length; DD += 3) bD.push("v " + tD[DD] * XD + " " + tD[DD + 1] + " " + tD[DD + 2]), ND++;
          if (null != ZD)
            for (let DD = 0; DD < ZD.length; DD += 3) bD.push("vn " + ZD[DD] * XD + " " + ZD[DD + 1] + " " + ZD[DD + 2]);
          if (null != oD)
            for (let DD = 0; DD < oD.length; DD += 2) bD.push("vt " + oD[DD] + " " + oD[DD + 1]), gD++;
          const mD = ["", "", ""],
            nD = (cD.material || cD.hq().defaultMaterial)._getEffectiveOrientation(cD),
            [OD, PD] = nD === iD.d.ClockWiseSideOrientation ? [2, 1] : [1, 2];
          for (let DD = 0; DD < vD.length; DD += 3) {
            const CD = [String(vD[DD] + QD), String(vD[DD + OD] + QD), String(vD[DD + PD] + QD)],
              cD = [String(vD[DD] + wD), String(vD[DD + OD] + wD), String(vD[DD + PD] + wD)],
              ID = CD,
              pD = null != oD ? cD : mD,
              iD = null != ZD ? CD : mD;
            bD.push("f " + ID[0] + "/" + pD[0] + "/" + iD[0] + " " + ID[1] + "/" + pD[1] + "/" + iD[1] + " " + ID[2] + "/" + pD[2] + "/" + iD[2])
          }
          fD && yD && cD.bakeTransformIntoVertices(yD), QD += ND, wD += gD
        }
        return bD.join("\n")
      }
      static MTL(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mat1";
        const cD = [],
          ID = DD.material;
        cD.push("newmtl " + CD), cD.push("  Ns " + ID.specularPower.toFixed(4)), cD.push("  Ni 1.5000"), cD.push("  d " + ID.alpha.toFixed(4)), cD.push("  Tr 0.0000"), cD.push("  Tf 1.0000 1.0000 1.0000"), cD.push("  illum 2"), cD.push("  Ka " + ID.ambientColor.r.toFixed(4) + " " + ID.ambientColor.g.toFixed(4) + " " + ID.ambientColor.b.toFixed(4)), cD.push("  Kd " + ID.diffuseColor.r.toFixed(4) + " " + ID.diffuseColor.g.toFixed(4) + " " + ID.diffuseColor.b.toFixed(4)), cD.push("  Ks " + ID.specularColor.r.toFixed(4) + " " + ID.specularColor.g.toFixed(4) + " " + ID.specularColor.b.toFixed(4)), cD.push("  Ke " + ID.emissiveColor.r.toFixed(4) + " " + ID.emissiveColor.g.toFixed(4) + " " + ID.emissiveColor.b.toFixed(4));
        ID.ambientTexture && cD.push("  map_Ka " + ID.ambientTexture.name), ID.diffuseTexture && cD.push("  map_Kd " + ID.diffuseTexture.name), ID.specularTexture && cD.push("  map_Ks " + ID.specularTexture.name), ID.bumpTexture && cD.push("  map_bump -imfchan z " + ID.bumpTexture.name), ID.opacityTexture && cD.push("  map_d " + ID.opacityTexture.name);
        return cD.join("\n")
      }
    }
    var bD = 0,
      QD = cD(40606);
    class wD {
      constructor() {
        this.files = {}
      }
      get glTFFiles() {
        return this.files
      }
      downloadFiles() {
        for (const DD in this.files) {
          const CD = this.files[DD],
            cD = new Blob([CD], {
              type: (0, QD.c)(DD)
            });
          pD.Tools.Download(cD, DD)
        }
      }
    }
    var SD = cD(40207),
      BD = cD(40178),
      yD = cD(40703),
      MD = cD(40180),
      tD = cD(38968),
      ZD = cD(36464),
      oD = cD(36613),
      vD = cD(36479);
    const ND = vD.HighestCommonFactor,
      gD = {
        ...vD,
        TwoPi: 2 * Math.PI,
        Sign: Math.sign,
        Log2: Math.log2,
        HCF: ND
      };
    var XD = cD(40917),
      mD = cD(40198),
      nD = cD(40654),
      OD = cD(40662),
      PD = cD(40941);
    (0, PD.RegisterDumpTools)();
    var HD = cD(39154),
      UD = cD(39156),
      xD = cD(38048),
      qD = cD(39257),
      JD = cD(39595),
      KD = cD(40908);
    let aD = 0;
    const VD = (DD, CD, cD, ID) => {
        if (!DD[cD]) {
          const pD = DD.useDelayedTextureLoading;
          DD.useDelayedTextureLoading = !1;
          const iD = DD._blockEntityCollection;
          DD._blockEntityCollection = !1;
          const fD = JD.c.CreateFromBase64String(CD, ID + aD++, DD, !0, !1, JD.c.BILINEAR_SAMPLINGMODE);
          DD._blockEntityCollection = iD;
          const bD = DD.DZ().getLoadedTexturesCache(),
            QD = bD.indexOf(fD.getInternalTexture()); - 1 !== QD && bD.splice(QD, 1), fD.isRGBD = !0, fD.wrapU = JD.c.CLAMP_ADDRESSMODE, fD.wrapV = JD.c.CLAMP_ADDRESSMODE, DD[cD] = fD, DD.useDelayedTextureLoading = pD, KD.e.ExpandRGBDTexture(fD);
          const wD = DD.DZ().onContextRestoredObservable.add((() => {
            fD.isRGBD = !0;
            const CD = DD.onBeforeRenderObservable.add((() => {
              fD.isReady() && (DD.onBeforeRenderObservable.remove(CD), KD.e.ExpandRGBDTexture(fD))
            }))
          }));
          DD.Aq.add((() => {
            DD.DZ().onContextRestoredObservable.remove(wD)
          }))
        }
        return DD[cD]
      },
      zD = DD => VD(DD, "data:image/png;base64,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", "environmentBRDFTexture", "EnvironmentBRDFTexture"),
      jD = DD => VD(DD, "data:image/png;base64,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", "environmentFuzzBRDFTexture", "EnvironmentFuzzBRDFTexture"),
      lD = DD => VD(DD, "data:image/png;base64,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", "openPBREnvironmentBRDFTexture", "OpenPBREnvironmentBRDFTexture");
    var LD = cD(39239),
      TD = cD(36446),
      GD = cD(39286),
      RD = cD(39412),
      kD = cD(39489);
    class dD extends RD.e {
      constructor() {
        super(...arguments), this.BRDF_V_HEIGHT_CORRELATED = !1, this.MS_BRDF_ENERGY_CONSERVATION = !1, this.SPHERICAL_HARMONICS = !1, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !1, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 0, this.CONDUCTOR_SPECULAR_MODEL = 0
      }
    }
    let YD = (() => {
      var DD, CD, cD, ID, pD, iD, fD, bD, QD, wD;
      let SD, BD, yD, MD, tD, ZD, oD, vD, ND, gD = kD.e,
        XD = [],
        mD = [],
        nD = [],
        OD = [],
        PD = [],
        xD = [],
        qD = [],
        JD = [],
        KD = [],
        aD = [],
        VD = [],
        zD = [],
        jD = [],
        lD = [],
        LD = [],
        TD = [],
        GD = [],
        RD = [];
      return DD = class extends gD {
        get useEnergyConservation() {
          return (0, HD.d)(this, CD, "f")
        }
        set useEnergyConservation(DD) {
          (0, HD.g)(this, CD, DD, "f")
        }
        get useSmithVisibilityHeightCorrelated() {
          return (0, HD.d)(this, cD, "f")
        }
        set useSmithVisibilityHeightCorrelated(DD) {
          (0, HD.g)(this, cD, DD, "f")
        }
        get useSphericalHarmonics() {
          return (0, HD.d)(this, ID, "f")
        }
        set useSphericalHarmonics(DD) {
          (0, HD.g)(this, ID, DD, "f")
        }
        get useSpecularGlossinessInputEnergyConservation() {
          return (0, HD.d)(this, pD, "f")
        }
        set useSpecularGlossinessInputEnergyConservation(DD) {
          (0, HD.g)(this, pD, DD, "f")
        }
        get mixIblRadianceWithIrradiance() {
          return (0, HD.d)(this, iD, "f")
        }
        set mixIblRadianceWithIrradiance(DD) {
          (0, HD.g)(this, iD, DD, "f")
        }
        get useLegacySpecularEnergyConservation() {
          return (0, HD.d)(this, fD, "f")
        }
        set useLegacySpecularEnergyConservation(DD) {
          (0, HD.g)(this, fD, DD, "f")
        }
        get baseDiffuseModel() {
          return (0, HD.d)(this, bD, "f")
        }
        set baseDiffuseModel(DD) {
          (0, HD.g)(this, bD, DD, "f")
        }
        get dielectricSpecularModel() {
          return (0, HD.d)(this, QD, "f")
        }
        set dielectricSpecularModel(DD) {
          (0, HD.g)(this, QD, DD, "f")
        }
        get conductorSpecularModel() {
          return (0, HD.d)(this, wD, "f")
        }
        set conductorSpecularModel(DD) {
          (0, HD.g)(this, wD, DD, "f")
        }
        _markAllSubMeshesAsMiscDirty() {
          this._internalMarkAllSubMeshesAsMiscDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(SD) {
          let BD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(SD, "PBRBRDF", 90, new dD, BD), this._useEnergyConservation = DD.DEFAULT_USE_ENERGY_CONSERVATION, CD.set(this, (0, HD.m)(this, XD, DD.DEFAULT_USE_ENERGY_CONSERVATION)), this._useSmithVisibilityHeightCorrelated = ((0, HD.m)(this, mD), DD.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED), cD.set(this, (0, HD.m)(this, nD, DD.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED)), this._useSphericalHarmonics = ((0, HD.m)(this, OD), DD.DEFAULT_USE_SPHERICAL_HARMONICS), ID.set(this, (0, HD.m)(this, PD, DD.DEFAULT_USE_SPHERICAL_HARMONICS)), this._useSpecularGlossinessInputEnergyConservation = ((0, HD.m)(this, xD), DD.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION), pD.set(this, (0, HD.m)(this, qD, DD.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION)), this._mixIblRadianceWithIrradiance = ((0, HD.m)(this, JD), DD.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE), iD.set(this, (0, HD.m)(this, KD, DD.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE)), this._useLegacySpecularEnergyConservation = ((0, HD.m)(this, aD), DD.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION), fD.set(this, (0, HD.m)(this, VD, DD.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION)), this._baseDiffuseModel = ((0, HD.m)(this, zD), DD.DEFAULT_DIFFUSE_MODEL), bD.set(this, (0, HD.m)(this, jD, DD.DEFAULT_DIFFUSE_MODEL)), this._dielectricSpecularModel = ((0, HD.m)(this, lD), DD.DEFAULT_DIELECTRIC_SPECULAR_MODEL), QD.set(this, (0, HD.m)(this, LD, DD.DEFAULT_DIELECTRIC_SPECULAR_MODEL)), this._conductorSpecularModel = ((0, HD.m)(this, TD), DD.DEFAULT_CONDUCTOR_SPECULAR_MODEL), wD.set(this, (0, HD.m)(this, GD, DD.DEFAULT_CONDUCTOR_SPECULAR_MODEL)), this._internalMarkAllSubMeshesAsMiscDirty = (0, HD.m)(this, RD), this._internalMarkAllSubMeshesAsMiscDirty = SD._dirtyCallbacks[16], this._enable(!0)
        }
        prepareDefines(DD) {
          DD.BRDF_V_HEIGHT_CORRELATED = this._useSmithVisibilityHeightCorrelated, DD.MS_BRDF_ENERGY_CONSERVATION = this._useEnergyConservation && this._useSmithVisibilityHeightCorrelated, DD.SPHERICAL_HARMONICS = this._useSphericalHarmonics, DD.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = this._useSpecularGlossinessInputEnergyConservation, DD.MIX_IBL_RADIANCE_WITH_IRRADIANCE = this._mixIblRadianceWithIrradiance && !this._material._disableLighting, DD.LEGACY_SPECULAR_ENERGY_CONSERVATION = this._useLegacySpecularEnergyConservation, DD.BASE_DIFFUSE_MODEL = this._baseDiffuseModel, DD.DIELECTRIC_SPECULAR_MODEL = this._dielectricSpecularModel, DD.CONDUCTOR_SPECULAR_MODEL = this._conductorSpecularModel
        }
        getClassName() {
          return "PBRBRDFConfiguration"
        }
      }, CD = new WeakMap, cD = new WeakMap, ID = new WeakMap, pD = new WeakMap, iD = new WeakMap, fD = new WeakMap, bD = new WeakMap, QD = new WeakMap, wD = new WeakMap, (() => {
        const CD = "function" === typeof Symbol && Symbol.metadata ? Object.create(gD[Symbol.metadata] ?? null) : void 0;
        SD = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsMiscDirty")], BD = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsMiscDirty")], yD = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsMiscDirty")], MD = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsMiscDirty")], tD = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsMiscDirty")], ZD = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsMiscDirty")], oD = [(0, UD.G)("baseDiffuseModel"), (0, UD.c)("_markAllSubMeshesAsMiscDirty")], vD = [(0, UD.G)("dielectricSpecularModel"), (0, UD.c)("_markAllSubMeshesAsMiscDirty")], ND = [(0, UD.G)("conductorSpecularModel"), (0, UD.c)("_markAllSubMeshesAsMiscDirty")], (0, HD.k)(DD, null, SD, {
          kind: "accessor",
          name: "useEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: DD => "useEnergyConservation" in DD,
            get: DD => DD.useEnergyConservation,
            set: (DD, CD) => {
              DD.useEnergyConservation = CD
            }
          },
          metadata: CD
        }, XD, mD), (0, HD.k)(DD, null, BD, {
          kind: "accessor",
          name: "useSmithVisibilityHeightCorrelated",
          static: !1,
          private: !1,
          access: {
            has: DD => "useSmithVisibilityHeightCorrelated" in DD,
            get: DD => DD.useSmithVisibilityHeightCorrelated,
            set: (DD, CD) => {
              DD.useSmithVisibilityHeightCorrelated = CD
            }
          },
          metadata: CD
        }, nD, OD), (0, HD.k)(DD, null, yD, {
          kind: "accessor",
          name: "useSphericalHarmonics",
          static: !1,
          private: !1,
          access: {
            has: DD => "useSphericalHarmonics" in DD,
            get: DD => DD.useSphericalHarmonics,
            set: (DD, CD) => {
              DD.useSphericalHarmonics = CD
            }
          },
          metadata: CD
        }, PD, xD), (0, HD.k)(DD, null, MD, {
          kind: "accessor",
          name: "useSpecularGlossinessInputEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: DD => "useSpecularGlossinessInputEnergyConservation" in DD,
            get: DD => DD.useSpecularGlossinessInputEnergyConservation,
            set: (DD, CD) => {
              DD.useSpecularGlossinessInputEnergyConservation = CD
            }
          },
          metadata: CD
        }, qD, JD), (0, HD.k)(DD, null, tD, {
          kind: "accessor",
          name: "mixIblRadianceWithIrradiance",
          static: !1,
          private: !1,
          access: {
            has: DD => "mixIblRadianceWithIrradiance" in DD,
            get: DD => DD.mixIblRadianceWithIrradiance,
            set: (DD, CD) => {
              DD.mixIblRadianceWithIrradiance = CD
            }
          },
          metadata: CD
        }, KD, aD), (0, HD.k)(DD, null, ZD, {
          kind: "accessor",
          name: "useLegacySpecularEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: DD => "useLegacySpecularEnergyConservation" in DD,
            get: DD => DD.useLegacySpecularEnergyConservation,
            set: (DD, CD) => {
              DD.useLegacySpecularEnergyConservation = CD
            }
          },
          metadata: CD
        }, VD, zD), (0, HD.k)(DD, null, oD, {
          kind: "accessor",
          name: "baseDiffuseModel",
          static: !1,
          private: !1,
          access: {
            has: DD => "baseDiffuseModel" in DD,
            get: DD => DD.baseDiffuseModel,
            set: (DD, CD) => {
              DD.baseDiffuseModel = CD
            }
          },
          metadata: CD
        }, jD, lD), (0, HD.k)(DD, null, vD, {
          kind: "accessor",
          name: "dielectricSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: DD => "dielectricSpecularModel" in DD,
            get: DD => DD.dielectricSpecularModel,
            set: (DD, CD) => {
              DD.dielectricSpecularModel = CD
            }
          },
          metadata: CD
        }, LD, TD), (0, HD.k)(DD, null, ND, {
          kind: "accessor",
          name: "conductorSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: DD => "conductorSpecularModel" in DD,
            get: DD => DD.conductorSpecularModel,
            set: (DD, CD) => {
              DD.conductorSpecularModel = CD
            }
          },
          metadata: CD
        }, GD, RD), CD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: CD
        })
      })(), DD.DEFAULT_USE_ENERGY_CONSERVATION = !0, DD.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED = !0, DD.DEFAULT_USE_SPHERICAL_HARMONICS = !0, DD.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION = !0, DD.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, DD.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION = !0, DD.DEFAULT_DIFFUSE_MODEL = 0, DD.DEFAULT_DIELECTRIC_SPECULAR_MODEL = 0, DD.DEFAULT_CONDUCTOR_SPECULAR_MODEL = 0, DD
    })();
    var WD = cD(39402),
      sD = cD(36622),
      ED = cD(39404),
      eD = cD(39259),
      uD = cD(39470),
      hD = cD(39466),
      rD = cD(39474),
      AD = cD(39458);
    class FD extends RD.e {
      constructor() {
        super(...arguments), this.CLEARCOAT = !1, this.CLEARCOAT_DEFAULTIOR = !1, this.CLEARCOAT_TEXTURE = !1, this.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this.CLEARCOAT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, this.CLEARCOAT_BUMP = !1, this.CLEARCOAT_BUMPDIRECTUV = 0, this.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, this.CLEARCOAT_REMAP_F0 = !1, this.CLEARCOAT_TINT = !1, this.CLEARCOAT_TINT_TEXTURE = !1, this.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TINT_GAMMATEXTURE = !1
      }
    }
    let DC = (() => {
      var DD, CD, cD, ID, pD, iD, fD, bD, QD, wD;
      let SD, BD, yD, MD, tD, ZD, oD, vD, ND, gD, XD, mD, nD, OD, PD = kD.e,
        xD = [],
        qD = [],
        JD = [],
        KD = [],
        aD = [],
        VD = [],
        zD = [],
        jD = [],
        lD = [],
        LD = [],
        TD = [],
        GD = [],
        RD = [],
        dD = [],
        YD = [],
        WD = [],
        ED = [],
        eD = [],
        uD = [],
        rD = [],
        DC = [],
        CC = [],
        cC = [],
        IC = [],
        pC = [],
        iC = [],
        fC = [],
        bC = [];
      return DD = class extends PD {
        get isEnabled() {
          return (0, HD.d)(this, CD, "f")
        }
        set isEnabled(DD) {
          (0, HD.g)(this, CD, DD, "f")
        }
        get indexOfRefraction() {
          return (0, HD.d)(this, cD, "f")
        }
        set indexOfRefraction(DD) {
          (0, HD.g)(this, cD, DD, "f")
        }
        get texture() {
          return (0, HD.d)(this, ID, "f")
        }
        set texture(DD) {
          (0, HD.g)(this, ID, DD, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, HD.d)(this, pD, "f")
        }
        set useRoughnessFromMainTexture(DD) {
          (0, HD.g)(this, pD, DD, "f")
        }
        get textureRoughness() {
          return (0, HD.d)(this, iD, "f")
        }
        set textureRoughness(DD) {
          (0, HD.g)(this, iD, DD, "f")
        }
        get remapF0OnInterfaceChange() {
          return (0, HD.d)(this, fD, "f")
        }
        set remapF0OnInterfaceChange(DD) {
          (0, HD.g)(this, fD, DD, "f")
        }
        get bumpTexture() {
          return (0, HD.d)(this, bD, "f")
        }
        set bumpTexture(DD) {
          (0, HD.g)(this, bD, DD, "f")
        }
        get isTintEnabled() {
          return (0, HD.d)(this, QD, "f")
        }
        set isTintEnabled(DD) {
          (0, HD.g)(this, QD, DD, "f")
        }
        get tintTexture() {
          return (0, HD.d)(this, wD, "f")
        }
        set tintTexture(DD) {
          (0, HD.g)(this, wD, DD, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(SD) {
          let BD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(SD, "PBRClearCoat", 100, new FD, BD), this._isEnabled = !1, CD.set(this, (0, HD.m)(this, xD, !1)), this.intensity = ((0, HD.m)(this, qD), (0, HD.m)(this, JD, 1)), this.roughness = ((0, HD.m)(this, KD), (0, HD.m)(this, aD, 0)), this._indexOfRefraction = ((0, HD.m)(this, VD), DD._DefaultIndexOfRefraction), cD.set(this, (0, HD.m)(this, zD, DD._DefaultIndexOfRefraction)), this._texture = ((0, HD.m)(this, jD), null), ID.set(this, (0, HD.m)(this, lD, null)), this._useRoughnessFromMainTexture = ((0, HD.m)(this, LD), !0), pD.set(this, (0, HD.m)(this, TD, !0)), this._textureRoughness = ((0, HD.m)(this, GD), null), iD.set(this, (0, HD.m)(this, RD, null)), this._remapF0OnInterfaceChange = ((0, HD.m)(this, dD), !0), fD.set(this, (0, HD.m)(this, YD, !0)), this._bumpTexture = ((0, HD.m)(this, WD), null), bD.set(this, (0, HD.m)(this, ED, null)), this._isTintEnabled = ((0, HD.m)(this, eD), !1), QD.set(this, (0, HD.m)(this, uD, !1)), this.tintColor = ((0, HD.m)(this, rD), (0, HD.m)(this, DC, sD.d.White())), this.tintColorAtDistance = ((0, HD.m)(this, CC), (0, HD.m)(this, cC, 1)), this.tintThickness = ((0, HD.m)(this, IC), (0, HD.m)(this, pC, 1)), this._tintTexture = ((0, HD.m)(this, iC), null), wD.set(this, (0, HD.m)(this, fC, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, HD.m)(this, bC), this._internalMarkAllSubMeshesAsTexturesDirty = SD._dirtyCallbacks[1]
        }
        isReadyForSubMesh(DD, CD, cD) {
          if (!this._isEnabled) return !0;
          const ID = this._material._disableBumpMap;
          if (DD._areTexturesDirty && CD.texturesEnabled) {
            if (this._texture && hD.e.ClearCoatTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && hD.e.ClearCoatTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1;
            if (cD.getCaps().standardDerivatives && this._bumpTexture && hD.e.ClearCoatBumpTextureEnabled && !ID && !this._bumpTexture.isReady()) return !1;
            if (this._isTintEnabled && this._tintTexture && hD.e.ClearCoatTintTextureEnabled && !this._tintTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(CD, cD) {
          this._isEnabled ? (CD.CLEARCOAT = !0, CD.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, CD.CLEARCOAT_REMAP_F0 = this._remapF0OnInterfaceChange, CD._areTexturesDirty && cD.texturesEnabled && (this._texture && hD.e.ClearCoatTextureEnabled ? (0, AD.db)(this._texture, CD, "CLEARCOAT_TEXTURE") : CD.CLEARCOAT_TEXTURE = !1, this._textureRoughness && hD.e.ClearCoatTextureEnabled ? (0, AD.db)(this._textureRoughness, CD, "CLEARCOAT_TEXTURE_ROUGHNESS") : CD.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this._bumpTexture && hD.e.ClearCoatBumpTextureEnabled ? (0, AD.db)(this._bumpTexture, CD, "CLEARCOAT_BUMP") : CD.CLEARCOAT_BUMP = !1, CD.CLEARCOAT_DEFAULTIOR = this._indexOfRefraction === DD._DefaultIndexOfRefraction, this._isTintEnabled ? (CD.CLEARCOAT_TINT = !0, this._tintTexture && hD.e.ClearCoatTintTextureEnabled ? ((0, AD.db)(this._tintTexture, CD, "CLEARCOAT_TINT_TEXTURE"), CD.CLEARCOAT_TINT_GAMMATEXTURE = this._tintTexture.gammaSpace) : CD.CLEARCOAT_TINT_TEXTURE = !1) : (CD.CLEARCOAT_TINT = !1, CD.CLEARCOAT_TINT_TEXTURE = !1))) : (CD.CLEARCOAT = !1, CD.CLEARCOAT_TEXTURE = !1, CD.CLEARCOAT_TEXTURE_ROUGHNESS = !1, CD.CLEARCOAT_BUMP = !1, CD.CLEARCOAT_TINT = !1, CD.CLEARCOAT_TINT_TEXTURE = !1, CD.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, CD.CLEARCOAT_DEFAULTIOR = !1, CD.CLEARCOAT_TEXTUREDIRECTUV = 0, CD.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, CD.CLEARCOAT_BUMPDIRECTUV = 0, CD.CLEARCOAT_REMAP_F0 = !1, CD.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, CD.CLEARCOAT_TINT_GAMMATEXTURE = !1)
        }
        bindForSubMesh(DD, CD, cD, ID) {
          if (!this._isEnabled) return;
          const pD = ID.materialDefines,
            iD = this._material.isFrozen,
            fD = this._material._disableBumpMap,
            bD = this._material._invertNormalMapX,
            QD = this._material._invertNormalMapY;
          if (!DD.useUbo || !iD || !DD.isSync) {
            (this._texture || this._textureRoughness) && hD.e.ClearCoatTextureEnabled && (DD.updateFloat4("vClearCoatInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, AD.C)(this._texture, DD, "clearCoat"), this._textureRoughness && !pD.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, AD.C)(this._textureRoughness, DD, "clearCoatRoughness")), this._bumpTexture && cD.getCaps().standardDerivatives && hD.e.ClearCoatTextureEnabled && !fD && (DD.updateFloat2("vClearCoatBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level), (0, AD.C)(this._bumpTexture, DD, "clearCoatBump"), CD._mirroredCameraPosition ? DD.updateFloat2("vClearCoatTangentSpaceParams", bD ? 1 : -1, QD ? 1 : -1) : DD.updateFloat2("vClearCoatTangentSpaceParams", bD ? -1 : 1, QD ? -1 : 1)), this._tintTexture && hD.e.ClearCoatTintTextureEnabled && (DD.updateFloat2("vClearCoatTintInfos", this._tintTexture.coordinatesIndex, this._tintTexture.level), (0, AD.C)(this._tintTexture, DD, "clearCoatTint")), DD.updateFloat2("vClearCoatParams", this.intensity, this.roughness);
            const ID = 1 - this._indexOfRefraction,
              iD = 1 + this._indexOfRefraction,
              wD = Math.pow(-ID / iD, 2),
              SD = 1 / this._indexOfRefraction;
            DD.updateFloat4("vClearCoatRefractionParams", wD, SD, ID, iD), this._isTintEnabled && (DD.updateFloat4("vClearCoatTintParams", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintThickness)), DD.updateFloat("clearCoatColorAtDistance", Math.max(1e-5, this.tintColorAtDistance)))
          }
          CD.texturesEnabled && (this._texture && hD.e.ClearCoatTextureEnabled && DD.setTexture("clearCoatSampler", this._texture), this._textureRoughness && !pD.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && hD.e.ClearCoatTextureEnabled && DD.setTexture("clearCoatRoughnessSampler", this._textureRoughness), this._bumpTexture && cD.getCaps().standardDerivatives && hD.e.ClearCoatBumpTextureEnabled && !fD && DD.setTexture("clearCoatBumpSampler", this._bumpTexture), this._isTintEnabled && this._tintTexture && hD.e.ClearCoatTintTextureEnabled && DD.setTexture("clearCoatTintSampler", this._tintTexture))
        }
        hasTexture(DD) {
          return this._texture === DD || (this._textureRoughness === DD || (this._bumpTexture === DD || this._tintTexture === DD))
        }
        getActiveTextures(DD) {
          this._texture && DD.push(this._texture), this._textureRoughness && DD.push(this._textureRoughness), this._bumpTexture && DD.push(this._bumpTexture), this._tintTexture && DD.push(this._tintTexture)
        }
        getAnimatables(DD) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && DD.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && DD.push(this._textureRoughness), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && DD.push(this._bumpTexture), this._tintTexture && this._tintTexture.animations && this._tintTexture.animations.length > 0 && DD.push(this._tintTexture)
        }
        dispose(DD) {
          DD && (this._texture?.dispose(), this._textureRoughness?.dispose(), this._bumpTexture?.dispose(), this._tintTexture?.dispose())
        }
        getClassName() {
          return "PBRClearCoatConfiguration"
        }
        addFallbacks(DD, CD, cD) {
          return DD.CLEARCOAT_BUMP && CD.addFallback(cD++, "CLEARCOAT_BUMP"), DD.CLEARCOAT_TINT && CD.addFallback(cD++, "CLEARCOAT_TINT"), DD.CLEARCOAT && CD.addFallback(cD++, "CLEARCOAT"), cD
        }
        getSamplers(DD) {
          DD.push("clearCoatSampler", "clearCoatRoughnessSampler", "clearCoatBumpSampler", "clearCoatTintSampler")
        }
        getUniforms() {
          return {
            ubo: [{
              name: "vClearCoatParams",
              size: 2,
              type: "vec2"
            }, {
              name: "vClearCoatRefractionParams",
              size: 4,
              type: "vec4"
            }, {
              name: "vClearCoatInfos",
              size: 4,
              type: "vec4"
            }, {
              name: "clearCoatMatrix",
              size: 16,
              type: "mat4"
            }, {
              name: "clearCoatRoughnessMatrix",
              size: 16,
              type: "mat4"
            }, {
              name: "vClearCoatBumpInfos",
              size: 2,
              type: "vec2"
            }, {
              name: "vClearCoatTangentSpaceParams",
              size: 2,
              type: "vec2"
            }, {
              name: "clearCoatBumpMatrix",
              size: 16,
              type: "mat4"
            }, {
              name: "vClearCoatTintParams",
              size: 4,
              type: "vec4"
            }, {
              name: "clearCoatColorAtDistance",
              size: 1,
              type: "float"
            }, {
              name: "vClearCoatTintInfos",
              size: 2,
              type: "vec2"
            }, {
              name: "clearCoatTintMatrix",
              size: 16,
              type: "mat4"
            }]
          }
        }
      }, CD = new WeakMap, cD = new WeakMap, ID = new WeakMap, pD = new WeakMap, iD = new WeakMap, fD = new WeakMap, bD = new WeakMap, QD = new WeakMap, wD = new WeakMap, (() => {
        const CD = "function" === typeof Symbol && Symbol.metadata ? Object.create(PD[Symbol.metadata] ?? null) : void 0;
        SD = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], BD = [(0, UD.G)()], yD = [(0, UD.G)()], MD = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], tD = [(0, UD.w)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], ZD = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], oD = [(0, UD.w)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], vD = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], ND = [(0, UD.w)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], gD = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], XD = [(0, UD.l)()], mD = [(0, UD.G)()], nD = [(0, UD.G)()], OD = [(0, UD.w)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], (0, HD.k)(DD, null, SD, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: DD => "isEnabled" in DD,
            get: DD => DD.isEnabled,
            set: (DD, CD) => {
              DD.isEnabled = CD
            }
          },
          metadata: CD
        }, xD, qD), (0, HD.k)(DD, null, MD, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: DD => "indexOfRefraction" in DD,
            get: DD => DD.indexOfRefraction,
            set: (DD, CD) => {
              DD.indexOfRefraction = CD
            }
          },
          metadata: CD
        }, zD, jD), (0, HD.k)(DD, null, tD, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: DD => "texture" in DD,
            get: DD => DD.texture,
            set: (DD, CD) => {
              DD.texture = CD
            }
          },
          metadata: CD
        }, lD, LD), (0, HD.k)(DD, null, ZD, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: DD => "useRoughnessFromMainTexture" in DD,
            get: DD => DD.useRoughnessFromMainTexture,
            set: (DD, CD) => {
              DD.useRoughnessFromMainTexture = CD
            }
          },
          metadata: CD
        }, TD, GD), (0, HD.k)(DD, null, oD, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: DD => "textureRoughness" in DD,
            get: DD => DD.textureRoughness,
            set: (DD, CD) => {
              DD.textureRoughness = CD
            }
          },
          metadata: CD
        }, RD, dD), (0, HD.k)(DD, null, vD, {
          kind: "accessor",
          name: "remapF0OnInterfaceChange",
          static: !1,
          private: !1,
          access: {
            has: DD => "remapF0OnInterfaceChange" in DD,
            get: DD => DD.remapF0OnInterfaceChange,
            set: (DD, CD) => {
              DD.remapF0OnInterfaceChange = CD
            }
          },
          metadata: CD
        }, YD, WD), (0, HD.k)(DD, null, ND, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: DD => "bumpTexture" in DD,
            get: DD => DD.bumpTexture,
            set: (DD, CD) => {
              DD.bumpTexture = CD
            }
          },
          metadata: CD
        }, ED, eD), (0, HD.k)(DD, null, gD, {
          kind: "accessor",
          name: "isTintEnabled",
          static: !1,
          private: !1,
          access: {
            has: DD => "isTintEnabled" in DD,
            get: DD => DD.isTintEnabled,
            set: (DD, CD) => {
              DD.isTintEnabled = CD
            }
          },
          metadata: CD
        }, uD, rD), (0, HD.k)(DD, null, OD, {
          kind: "accessor",
          name: "tintTexture",
          static: !1,
          private: !1,
          access: {
            has: DD => "tintTexture" in DD,
            get: DD => DD.tintTexture,
            set: (DD, CD) => {
              DD.tintTexture = CD
            }
          },
          metadata: CD
        }, fC, bC), (0, HD.k)(null, null, BD, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: DD => "intensity" in DD,
            get: DD => DD.intensity,
            set: (DD, CD) => {
              DD.intensity = CD
            }
          },
          metadata: CD
        }, JD, KD), (0, HD.k)(null, null, yD, {
          kind: "field",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: DD => "roughness" in DD,
            get: DD => DD.roughness,
            set: (DD, CD) => {
              DD.roughness = CD
            }
          },
          metadata: CD
        }, aD, VD), (0, HD.k)(null, null, XD, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: DD => "tintColor" in DD,
            get: DD => DD.tintColor,
            set: (DD, CD) => {
              DD.tintColor = CD
            }
          },
          metadata: CD
        }, DC, CC), (0, HD.k)(null, null, mD, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: DD => "tintColorAtDistance" in DD,
            get: DD => DD.tintColorAtDistance,
            set: (DD, CD) => {
              DD.tintColorAtDistance = CD
            }
          },
          metadata: CD
        }, cC, IC), (0, HD.k)(null, null, nD, {
          kind: "field",
          name: "tintThickness",
          static: !1,
          private: !1,
          access: {
            has: DD => "tintThickness" in DD,
            get: DD => DD.tintThickness,
            set: (DD, CD) => {
              DD.tintThickness = CD
            }
          },
          metadata: CD
        }, pC, iC), CD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: CD
        })
      })(), DD._DefaultIndexOfRefraction = 1.5, DD
    })();
    class CC extends RD.e {
      constructor() {
        super(...arguments), this.IRIDESCENCE = !1, this.IRIDESCENCE_TEXTURE = !1, this.IRIDESCENCE_TEXTUREDIRECTUV = 0, this.IRIDESCENCE_THICKNESS_TEXTURE = !1, this.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0
      }
    }
    let cC = (() => {
      var DD, CD, cD, ID;
      let pD, iD, fD, bD, QD, wD, SD, BD = kD.e,
        yD = [],
        MD = [],
        tD = [],
        ZD = [],
        oD = [],
        vD = [],
        ND = [],
        gD = [],
        XD = [],
        mD = [],
        nD = [],
        OD = [],
        PD = [],
        xD = [];
      return DD = class extends BD {
        get isEnabled() {
          return (0, HD.d)(this, CD, "f")
        }
        set isEnabled(DD) {
          (0, HD.g)(this, CD, DD, "f")
        }
        get texture() {
          return (0, HD.d)(this, cD, "f")
        }
        set texture(DD) {
          (0, HD.g)(this, cD, DD, "f")
        }
        get thicknessTexture() {
          return (0, HD.d)(this, ID, "f")
        }
        set thicknessTexture(DD) {
          (0, HD.g)(this, ID, DD, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(pD) {
          let iD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(pD, "PBRIridescence", 110, new CC, iD), this._isEnabled = !1, CD.set(this, (0, HD.m)(this, yD, !1)), this.intensity = ((0, HD.m)(this, MD), (0, HD.m)(this, tD, 1)), this.minimumThickness = ((0, HD.m)(this, ZD), (0, HD.m)(this, oD, DD._DefaultMinimumThickness)), this.maximumThickness = ((0, HD.m)(this, vD), (0, HD.m)(this, ND, DD._DefaultMaximumThickness)), this.indexOfRefraction = ((0, HD.m)(this, gD), (0, HD.m)(this, XD, DD._DefaultIndexOfRefraction)), this._texture = ((0, HD.m)(this, mD), null), cD.set(this, (0, HD.m)(this, nD, null)), this._thicknessTexture = ((0, HD.m)(this, OD), null), ID.set(this, (0, HD.m)(this, PD, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, HD.m)(this, xD), this._internalMarkAllSubMeshesAsTexturesDirty = pD._dirtyCallbacks[1]
        }
        isReadyForSubMesh(DD, CD) {
          if (!this._isEnabled) return !0;
          if (DD._areTexturesDirty && CD.texturesEnabled) {
            if (this._texture && hD.e.IridescenceTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._thicknessTexture && hD.e.IridescenceTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(DD, CD) {
          this._isEnabled ? (DD.IRIDESCENCE = !0, DD._areTexturesDirty && CD.texturesEnabled && (this._texture && hD.e.IridescenceTextureEnabled ? (0, AD.db)(this._texture, DD, "IRIDESCENCE_TEXTURE") : DD.IRIDESCENCE_TEXTURE = !1, this._thicknessTexture && hD.e.IridescenceTextureEnabled ? (0, AD.db)(this._thicknessTexture, DD, "IRIDESCENCE_THICKNESS_TEXTURE") : DD.IRIDESCENCE_THICKNESS_TEXTURE = !1)) : (DD.IRIDESCENCE = !1, DD.IRIDESCENCE_TEXTURE = !1, DD.IRIDESCENCE_THICKNESS_TEXTURE = !1, DD.IRIDESCENCE_TEXTUREDIRECTUV = 0, DD.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0)
        }
        bindForSubMesh(DD, CD) {
          if (!this._isEnabled) return;
          const cD = this._material.isFrozen;
          DD.useUbo && cD && DD.isSync || ((this._texture || this._thicknessTexture) && hD.e.IridescenceTextureEnabled && (DD.updateFloat4("vIridescenceInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._thicknessTexture?.coordinatesIndex ?? 0, this._thicknessTexture?.level ?? 0), this._texture && (0, AD.C)(this._texture, DD, "iridescence"), this._thicknessTexture && (0, AD.C)(this._thicknessTexture, DD, "iridescenceThickness")), DD.updateFloat4("vIridescenceParams", this.intensity, this.indexOfRefraction, this.minimumThickness, this.maximumThickness)), CD.texturesEnabled && (this._texture && hD.e.IridescenceTextureEnabled && DD.setTexture("iridescenceSampler", this._texture), this._thicknessTexture && hD.e.IridescenceTextureEnabled && DD.setTexture("iridescenceThicknessSampler", this._thicknessTexture))
        }
        hasTexture(DD) {
          return this._texture === DD || this._thicknessTexture === DD
        }
        getActiveTextures(DD) {
          this._texture && DD.push(this._texture), this._thicknessTexture && DD.push(this._thicknessTexture)
        }
        getAnimatables(DD) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && DD.push(this._texture), this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && DD.push(this._thicknessTexture)
        }
        dispose(DD) {
          DD && (this._texture?.dispose(), this._thicknessTexture?.dispose())
        }
        getClassName() {
          return "PBRIridescenceConfiguration"
        }
        addFallbacks(DD, CD, cD) {
          return DD.IRIDESCENCE && CD.addFallback(cD++, "IRIDESCENCE"), cD
        }
        getSamplers(DD) {
          DD.push("iridescenceSampler", "iridescenceThicknessSampler")
        }
        getUniforms() {
          return {
            ubo: [{
              name: "vIridescenceParams",
              size: 4,
              type: "vec4"
            }, {
              name: "vIridescenceInfos",
              size: 4,
              type: "vec4"
            }, {
              name: "iridescenceMatrix",
              size: 16,
              type: "mat4"
            }, {
              name: "iridescenceThicknessMatrix",
              size: 16,
              type: "mat4"
            }]
          }
        }
      }, CD = new WeakMap, cD = new WeakMap, ID = new WeakMap, (() => {
        const CD = "function" === typeof Symbol && Symbol.metadata ? Object.create(BD[Symbol.metadata] ?? null) : void 0;
        pD = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], iD = [(0, UD.G)()], fD = [(0, UD.G)()], bD = [(0, UD.G)()], QD = [(0, UD.G)()], wD = [(0, UD.w)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], SD = [(0, UD.w)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], (0, HD.k)(DD, null, pD, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: DD => "isEnabled" in DD,
            get: DD => DD.isEnabled,
            set: (DD, CD) => {
              DD.isEnabled = CD
            }
          },
          metadata: CD
        }, yD, MD), (0, HD.k)(DD, null, wD, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: DD => "texture" in DD,
            get: DD => DD.texture,
            set: (DD, CD) => {
              DD.texture = CD
            }
          },
          metadata: CD
        }, nD, OD), (0, HD.k)(DD, null, SD, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: DD => "thicknessTexture" in DD,
            get: DD => DD.thicknessTexture,
            set: (DD, CD) => {
              DD.thicknessTexture = CD
            }
          },
          metadata: CD
        }, PD, xD), (0, HD.k)(null, null, iD, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: DD => "intensity" in DD,
            get: DD => DD.intensity,
            set: (DD, CD) => {
              DD.intensity = CD
            }
          },
          metadata: CD
        }, tD, ZD), (0, HD.k)(null, null, fD, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: DD => "minimumThickness" in DD,
            get: DD => DD.minimumThickness,
            set: (DD, CD) => {
              DD.minimumThickness = CD
            }
          },
          metadata: CD
        }, oD, vD), (0, HD.k)(null, null, bD, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: DD => "maximumThickness" in DD,
            get: DD => DD.maximumThickness,
            set: (DD, CD) => {
              DD.maximumThickness = CD
            }
          },
          metadata: CD
        }, ND, gD), (0, HD.k)(null, null, QD, {
          kind: "field",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: DD => "indexOfRefraction" in DD,
            get: DD => DD.indexOfRefraction,
            set: (DD, CD) => {
              DD.indexOfRefraction = CD
            }
          },
          metadata: CD
        }, XD, mD), CD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: CD
        })
      })(), DD._DefaultMinimumThickness = 100, DD._DefaultMaximumThickness = 400, DD._DefaultIndexOfRefraction = 1.3, DD
    })();
    class IC extends RD.e {
      constructor() {
        super(...arguments), this.ANISOTROPIC = !1, this.ANISOTROPIC_TEXTURE = !1, this.ANISOTROPIC_TEXTUREDIRECTUV = 0, this.ANISOTROPIC_LEGACY = !1, this.MAINUV1 = !1
      }
    }
    let pC = (() => {
      var DD, CD, cD, ID;
      let pD, iD, fD, bD, QD, wD = kD.e,
        SD = [],
        BD = [],
        yD = [],
        MD = [],
        tD = [],
        ZD = [],
        oD = [],
        vD = [],
        ND = [],
        gD = [];
      return DD = class extends wD {
        get isEnabled() {
          return (0, HD.d)(this, CD, "f")
        }
        set isEnabled(DD) {
          (0, HD.g)(this, CD, DD, "f")
        }
        set angle(DD) {
          this.direction.x = Math.cos(DD), this.direction.y = Math.sin(DD)
        }
        get angle() {
          return Math.atan2(this.direction.y, this.direction.x)
        }
        get texture() {
          return (0, HD.d)(this, cD, "f")
        }
        set texture(DD) {
          (0, HD.g)(this, cD, DD, "f")
        }
        get legacy() {
          return (0, HD.d)(this, ID, "f")
        }
        set legacy(DD) {
          (0, HD.g)(this, ID, DD, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        _markAllSubMeshesAsMiscDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsMiscDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(DD) {
          let pD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(DD, "PBRAnisotropic", 110, new IC, pD), this._isEnabled = !1, CD.set(this, (0, HD.m)(this, SD, !1)), this.intensity = ((0, HD.m)(this, BD), (0, HD.m)(this, yD, 1)), this.direction = ((0, HD.m)(this, MD), (0, HD.m)(this, tD, new TD.n(1, 0))), this._texture = ((0, HD.m)(this, ZD), null), cD.set(this, (0, HD.m)(this, oD, null)), this._legacy = ((0, HD.m)(this, vD), !1), ID.set(this, (0, HD.m)(this, ND, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, HD.m)(this, gD), this._internalMarkAllSubMeshesAsTexturesDirty = DD._dirtyCallbacks[1], this._internalMarkAllSubMeshesAsMiscDirty = DD._dirtyCallbacks[16]
        }
        isReadyForSubMesh(DD, CD) {
          return !this._isEnabled || !(DD._areTexturesDirty && CD.texturesEnabled && this._texture && hD.e.AnisotropicTextureEnabled && !this._texture.isReadyOrNotBlocking())
        }
        prepareDefinesBeforeAttributes(DD, CD, cD) {
          this._isEnabled ? (DD.ANISOTROPIC = this._isEnabled, this._isEnabled && !cD.isVerticesDataPresent(GD.k.TangentKind) && (DD._needUVs = !0, DD.MAINUV1 = !0), DD._areTexturesDirty && CD.texturesEnabled && (this._texture && hD.e.AnisotropicTextureEnabled ? (0, AD.db)(this._texture, DD, "ANISOTROPIC_TEXTURE") : DD.ANISOTROPIC_TEXTURE = !1), DD._areMiscDirty && (DD.ANISOTROPIC_LEGACY = this._legacy)) : (DD.ANISOTROPIC = !1, DD.ANISOTROPIC_TEXTURE = !1, DD.ANISOTROPIC_TEXTUREDIRECTUV = 0, DD.ANISOTROPIC_LEGACY = !1)
        }
        bindForSubMesh(DD, CD) {
          if (!this._isEnabled) return;
          const cD = this._material.isFrozen;
          DD.useUbo && cD && DD.isSync || (this._texture && hD.e.AnisotropicTextureEnabled && (DD.updateFloat2("vAnisotropyInfos", this._texture.coordinatesIndex, this._texture.level), (0, AD.C)(this._texture, DD, "anisotropy")), DD.updateFloat3("vAnisotropy", this.direction.x, this.direction.y, this.intensity)), CD.texturesEnabled && this._texture && hD.e.AnisotropicTextureEnabled && DD.setTexture("anisotropySampler", this._texture)
        }
        hasTexture(DD) {
          return this._texture === DD
        }
        getActiveTextures(DD) {
          this._texture && DD.push(this._texture)
        }
        getAnimatables(DD) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && DD.push(this._texture)
        }
        dispose(DD) {
          DD && this._texture && this._texture.dispose()
        }
        getClassName() {
          return "PBRAnisotropicConfiguration"
        }
        addFallbacks(DD, CD, cD) {
          return DD.ANISOTROPIC && CD.addFallback(cD++, "ANISOTROPIC"), cD
        }
        getSamplers(DD) {
          DD.push("anisotropySampler")
        }
        getUniforms() {
          return {
            ubo: [{
              name: "vAnisotropy",
              size: 3,
              type: "vec3"
            }, {
              name: "vAnisotropyInfos",
              size: 2,
              type: "vec2"
            }, {
              name: "anisotropyMatrix",
              size: 16,
              type: "mat4"
            }]
          }
        }
        parse(DD, CD, cD) {
          super.parse(DD, CD, cD), void 0 === DD.legacy && (this.legacy = !0)
        }
      }, CD = new WeakMap, cD = new WeakMap, ID = new WeakMap, (() => {
        const CD = "function" === typeof Symbol && Symbol.metadata ? Object.create(wD[Symbol.metadata] ?? null) : void 0;
        pD = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], iD = [(0, UD.G)()], fD = [(0, UD.y)()], bD = [(0, UD.w)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], QD = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsMiscDirty")], (0, HD.k)(DD, null, pD, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: DD => "isEnabled" in DD,
            get: DD => DD.isEnabled,
            set: (DD, CD) => {
              DD.isEnabled = CD
            }
          },
          metadata: CD
        }, SD, BD), (0, HD.k)(DD, null, bD, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: DD => "texture" in DD,
            get: DD => DD.texture,
            set: (DD, CD) => {
              DD.texture = CD
            }
          },
          metadata: CD
        }, oD, vD), (0, HD.k)(DD, null, QD, {
          kind: "accessor",
          name: "legacy",
          static: !1,
          private: !1,
          access: {
            has: DD => "legacy" in DD,
            get: DD => DD.legacy,
            set: (DD, CD) => {
              DD.legacy = CD
            }
          },
          metadata: CD
        }, ND, gD), (0, HD.k)(null, null, iD, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: DD => "intensity" in DD,
            get: DD => DD.intensity,
            set: (DD, CD) => {
              DD.intensity = CD
            }
          },
          metadata: CD
        }, yD, MD), (0, HD.k)(null, null, fD, {
          kind: "field",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: DD => "direction" in DD,
            get: DD => DD.direction,
            set: (DD, CD) => {
              DD.direction = CD
            }
          },
          metadata: CD
        }, tD, ZD), CD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: CD
        })
      })(), DD
    })();
    class iC extends RD.e {
      constructor() {
        super(...arguments), this.SHEEN = !1, this.SHEEN_TEXTURE = !1, this.SHEEN_GAMMATEXTURE = !1, this.SHEEN_TEXTURE_ROUGHNESS = !1, this.SHEEN_TEXTUREDIRECTUV = 0, this.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0, this.SHEEN_LINKWITHALBEDO = !1, this.SHEEN_ROUGHNESS = !1, this.SHEEN_ALBEDOSCALING = !1, this.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1
      }
    }
    let fC = (() => {
      var DD, CD, cD, ID, pD, iD, fD, bD;
      let QD, wD, SD, BD, yD, MD, tD, ZD, oD, vD = kD.e,
        ND = [],
        gD = [],
        XD = [],
        mD = [],
        nD = [],
        OD = [],
        PD = [],
        xD = [],
        qD = [],
        JD = [],
        KD = [],
        aD = [],
        VD = [],
        zD = [],
        jD = [],
        lD = [],
        LD = [],
        TD = [];
      return DD = class extends vD {
        get isEnabled() {
          return (0, HD.d)(this, CD, "f")
        }
        set isEnabled(DD) {
          (0, HD.g)(this, CD, DD, "f")
        }
        get linkSheenWithAlbedo() {
          return (0, HD.d)(this, cD, "f")
        }
        set linkSheenWithAlbedo(DD) {
          (0, HD.g)(this, cD, DD, "f")
        }
        get texture() {
          return (0, HD.d)(this, ID, "f")
        }
        set texture(DD) {
          (0, HD.g)(this, ID, DD, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, HD.d)(this, pD, "f")
        }
        set useRoughnessFromMainTexture(DD) {
          (0, HD.g)(this, pD, DD, "f")
        }
        get roughness() {
          return (0, HD.d)(this, iD, "f")
        }
        set roughness(DD) {
          (0, HD.g)(this, iD, DD, "f")
        }
        get textureRoughness() {
          return (0, HD.d)(this, fD, "f")
        }
        set textureRoughness(DD) {
          (0, HD.g)(this, fD, DD, "f")
        }
        get albedoScaling() {
          return (0, HD.d)(this, bD, "f")
        }
        set albedoScaling(DD) {
          (0, HD.g)(this, bD, DD, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(DD) {
          let QD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(DD, "Sheen", 120, new iC, QD), this._isEnabled = !1, CD.set(this, (0, HD.m)(this, ND, !1)), this._linkSheenWithAlbedo = ((0, HD.m)(this, gD), !1), cD.set(this, (0, HD.m)(this, XD, !1)), this.intensity = ((0, HD.m)(this, mD), (0, HD.m)(this, nD, 1)), this.color = ((0, HD.m)(this, OD), (0, HD.m)(this, PD, sD.d.White())), this._texture = ((0, HD.m)(this, xD), null), ID.set(this, (0, HD.m)(this, qD, null)), this._useRoughnessFromMainTexture = ((0, HD.m)(this, JD), !0), pD.set(this, (0, HD.m)(this, KD, !0)), this._roughness = ((0, HD.m)(this, aD), null), iD.set(this, (0, HD.m)(this, VD, null)), this._textureRoughness = ((0, HD.m)(this, zD), null), fD.set(this, (0, HD.m)(this, jD, null)), this._albedoScaling = ((0, HD.m)(this, lD), !1), bD.set(this, (0, HD.m)(this, LD, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, HD.m)(this, TD), this._internalMarkAllSubMeshesAsTexturesDirty = DD._dirtyCallbacks[1]
        }
        isReadyForSubMesh(DD, CD) {
          if (!this._isEnabled) return !0;
          if (DD._areTexturesDirty && CD.texturesEnabled) {
            if (this._texture && hD.e.SheenTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && hD.e.SheenTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(DD, CD) {
          this._isEnabled ? (DD.SHEEN = !0, DD.SHEEN_LINKWITHALBEDO = this._linkSheenWithAlbedo, DD.SHEEN_ROUGHNESS = null !== this._roughness, DD.SHEEN_ALBEDOSCALING = this._albedoScaling, DD.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, DD._areTexturesDirty && CD.texturesEnabled && (this._texture && hD.e.SheenTextureEnabled ? ((0, AD.db)(this._texture, DD, "SHEEN_TEXTURE"), DD.SHEEN_GAMMATEXTURE = this._texture.gammaSpace) : DD.SHEEN_TEXTURE = !1, this._textureRoughness && hD.e.SheenTextureEnabled ? (0, AD.db)(this._textureRoughness, DD, "SHEEN_TEXTURE_ROUGHNESS") : DD.SHEEN_TEXTURE_ROUGHNESS = !1)) : (DD.SHEEN = !1, DD.SHEEN_TEXTURE = !1, DD.SHEEN_TEXTURE_ROUGHNESS = !1, DD.SHEEN_LINKWITHALBEDO = !1, DD.SHEEN_ROUGHNESS = !1, DD.SHEEN_ALBEDOSCALING = !1, DD.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, DD.SHEEN_GAMMATEXTURE = !1, DD.SHEEN_TEXTUREDIRECTUV = 0, DD.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0)
        }
        bindForSubMesh(DD, CD, cD, ID) {
          if (!this._isEnabled) return;
          const pD = ID.materialDefines,
            iD = this._material.isFrozen;
          DD.useUbo && iD && DD.isSync || ((this._texture || this._textureRoughness) && hD.e.SheenTextureEnabled && (DD.updateFloat4("vSheenInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, AD.C)(this._texture, DD, "sheen"), this._textureRoughness && !pD.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, AD.C)(this._textureRoughness, DD, "sheenRoughness")), DD.updateFloat4("vSheenColor", this.color.r, this.color.g, this.color.b, this.intensity), null !== this._roughness && DD.updateFloat("vSheenRoughness", this._roughness)), CD.texturesEnabled && (this._texture && hD.e.SheenTextureEnabled && DD.setTexture("sheenSampler", this._texture), this._textureRoughness && !pD.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && hD.e.SheenTextureEnabled && DD.setTexture("sheenRoughnessSampler", this._textureRoughness))
        }
        hasTexture(DD) {
          return this._texture === DD || this._textureRoughness === DD
        }
        getActiveTextures(DD) {
          this._texture && DD.push(this._texture), this._textureRoughness && DD.push(this._textureRoughness)
        }
        getAnimatables(DD) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && DD.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && DD.push(this._textureRoughness)
        }
        dispose(DD) {
          DD && (this._texture?.dispose(), this._textureRoughness?.dispose())
        }
        getClassName() {
          return "PBRSheenConfiguration"
        }
        addFallbacks(DD, CD, cD) {
          return DD.SHEEN && CD.addFallback(cD++, "SHEEN"), cD
        }
        getSamplers(DD) {
          DD.push("sheenSampler", "sheenRoughnessSampler")
        }
        getUniforms() {
          return {
            ubo: [{
              name: "vSheenColor",
              size: 4,
              type: "vec4"
            }, {
              name: "vSheenRoughness",
              size: 1,
              type: "float"
            }, {
              name: "vSheenInfos",
              size: 4,
              type: "vec4"
            }, {
              name: "sheenMatrix",
              size: 16,
              type: "mat4"
            }, {
              name: "sheenRoughnessMatrix",
              size: 16,
              type: "mat4"
            }]
          }
        }
      }, CD = new WeakMap, cD = new WeakMap, ID = new WeakMap, pD = new WeakMap, iD = new WeakMap, fD = new WeakMap, bD = new WeakMap, (() => {
        const CD = "function" === typeof Symbol && Symbol.metadata ? Object.create(vD[Symbol.metadata] ?? null) : void 0;
        QD = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], wD = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], SD = [(0, UD.G)()], BD = [(0, UD.l)()], yD = [(0, UD.w)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], MD = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], tD = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], ZD = [(0, UD.w)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], oD = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], (0, HD.k)(DD, null, QD, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: DD => "isEnabled" in DD,
            get: DD => DD.isEnabled,
            set: (DD, CD) => {
              DD.isEnabled = CD
            }
          },
          metadata: CD
        }, ND, gD), (0, HD.k)(DD, null, wD, {
          kind: "accessor",
          name: "linkSheenWithAlbedo",
          static: !1,
          private: !1,
          access: {
            has: DD => "linkSheenWithAlbedo" in DD,
            get: DD => DD.linkSheenWithAlbedo,
            set: (DD, CD) => {
              DD.linkSheenWithAlbedo = CD
            }
          },
          metadata: CD
        }, XD, mD), (0, HD.k)(DD, null, yD, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: DD => "texture" in DD,
            get: DD => DD.texture,
            set: (DD, CD) => {
              DD.texture = CD
            }
          },
          metadata: CD
        }, qD, JD), (0, HD.k)(DD, null, MD, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: DD => "useRoughnessFromMainTexture" in DD,
            get: DD => DD.useRoughnessFromMainTexture,
            set: (DD, CD) => {
              DD.useRoughnessFromMainTexture = CD
            }
          },
          metadata: CD
        }, KD, aD), (0, HD.k)(DD, null, tD, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: DD => "roughness" in DD,
            get: DD => DD.roughness,
            set: (DD, CD) => {
              DD.roughness = CD
            }
          },
          metadata: CD
        }, VD, zD), (0, HD.k)(DD, null, ZD, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: DD => "textureRoughness" in DD,
            get: DD => DD.textureRoughness,
            set: (DD, CD) => {
              DD.textureRoughness = CD
            }
          },
          metadata: CD
        }, jD, lD), (0, HD.k)(DD, null, oD, {
          kind: "accessor",
          name: "albedoScaling",
          static: !1,
          private: !1,
          access: {
            has: DD => "albedoScaling" in DD,
            get: DD => DD.albedoScaling,
            set: (DD, CD) => {
              DD.albedoScaling = CD
            }
          },
          metadata: CD
        }, LD, TD), (0, HD.k)(null, null, SD, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: DD => "intensity" in DD,
            get: DD => DD.intensity,
            set: (DD, CD) => {
              DD.intensity = CD
            }
          },
          metadata: CD
        }, nD, OD), (0, HD.k)(null, null, BD, {
          kind: "field",
          name: "color",
          static: !1,
          private: !1,
          access: {
            has: DD => "color" in DD,
            get: DD => DD.color,
            set: (DD, CD) => {
              DD.color = CD
            }
          },
          metadata: CD
        }, PD, xD), CD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: CD
        })
      })(), DD
    })();
    class bC extends RD.e {
      constructor() {
        super(...arguments), this.SUBSURFACE = !1, this.SS_REFRACTION = !1, this.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_TRANSLUCENCY = !1, this.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_SCATTERING = !1, this.SS_DISPERSION = !1, this.SS_THICKNESSANDMASK_TEXTURE = !1, this.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, this.SS_HAS_THICKNESS = !1, this.SS_REFRACTIONINTENSITY_TEXTURE = !1, this.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, this.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, this.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, this.SS_REFRACTIONMAP_3D = !1, this.SS_REFRACTIONMAP_OPPOSITEZ = !1, this.SS_LODINREFRACTIONALPHA = !1, this.SS_GAMMAREFRACTION = !1, this.SS_RGBDREFRACTION = !1, this.SS_LINEARSPECULARREFRACTION = !1, this.SS_LINKREFRACTIONTOTRANSPARENCY = !1, this.SS_ALBEDOFORREFRACTIONTINT = !1, this.SS_ALBEDOFORTRANSLUCENCYTINT = !1, this.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.SS_USE_THICKNESS_AS_DEPTH = !1, this.SS_USE_GLTF_TEXTURES = !1, this.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1, this.SS_TRANSLUCENCY_LEGACY = !1
      }
    }
    let QC = (() => {
      var DD, CD, cD, ID, pD, iD, fD, bD, QD, wD, SD, BD, yD, MD, tD, ZD, oD;
      let vD, ND, gD, XD, mD, nD, OD, PD, xD, qD, JD, KD, aD, VD, zD, jD, lD, LD, GD, RD, dD, YD, WD, ED, eD, uD, rD, FD, DC, CC, cC = kD.e,
        IC = [],
        pC = [],
        iC = [],
        fC = [],
        QC = [],
        wC = [],
        SC = [],
        BC = [],
        yC = [],
        MC = [],
        tC = [],
        ZC = [],
        oC = [],
        vC = [],
        NC = [],
        gC = [],
        XC = [],
        mC = [],
        nC = [],
        OC = [],
        PC = [],
        HC = [],
        UC = [],
        xC = [],
        qC = [],
        JC = [],
        KC = [],
        aC = [],
        VC = [],
        zC = [],
        jC = [],
        lC = [],
        LC = [],
        TC = [],
        GC = [],
        RC = [],
        kC = [],
        dC = [],
        YC = [],
        WC = [],
        sC = [],
        EC = [],
        eC = [],
        uC = [],
        hC = [],
        rC = [],
        AC = [],
        FC = [],
        Dc = [],
        Cc = [],
        cc = [],
        Ic = [],
        pc = [],
        ic = [],
        fc = [],
        bc = [],
        Qc = [],
        wc = [],
        Sc = [],
        Bc = [];
      return DD = class extends cC {
        get isRefractionEnabled() {
          return (0, HD.d)(this, CD, "f")
        }
        set isRefractionEnabled(DD) {
          (0, HD.g)(this, CD, DD, "f")
        }
        get isTranslucencyEnabled() {
          return (0, HD.d)(this, cD, "f")
        }
        set isTranslucencyEnabled(DD) {
          (0, HD.g)(this, cD, DD, "f")
        }
        get isDispersionEnabled() {
          return (0, HD.d)(this, ID, "f")
        }
        set isDispersionEnabled(DD) {
          (0, HD.g)(this, ID, DD, "f")
        }
        get isScatteringEnabled() {
          return (0, HD.d)(this, pD, "f")
        }
        set isScatteringEnabled(DD) {
          (0, HD.g)(this, pD, DD, "f")
        }
        get scatteringDiffusionProfile() {
          return this._scene.subSurfaceConfiguration ? this._scene.subSurfaceConfiguration.ssDiffusionProfileColors[this._scatteringDiffusionProfileIndex] : null
        }
        set scatteringDiffusionProfile(DD) {
          this._scene.enableSubSurfaceForPrePass() && DD && (this._scatteringDiffusionProfileIndex = this._scene.subSurfaceConfiguration.addDiffusionProfile(DD))
        }
        get useAlbedoToTintRefraction() {
          return (0, HD.d)(this, iD, "f")
        }
        set useAlbedoToTintRefraction(DD) {
          (0, HD.g)(this, iD, DD, "f")
        }
        get useAlbedoToTintTranslucency() {
          return (0, HD.d)(this, fD, "f")
        }
        set useAlbedoToTintTranslucency(DD) {
          (0, HD.g)(this, fD, DD, "f")
        }
        get thicknessTexture() {
          return (0, HD.d)(this, bD, "f")
        }
        set thicknessTexture(DD) {
          (0, HD.g)(this, bD, DD, "f")
        }
        get refractionTexture() {
          return (0, HD.d)(this, QD, "f")
        }
        set refractionTexture(DD) {
          (0, HD.g)(this, QD, DD, "f")
        }
        get indexOfRefraction() {
          return (0, HD.d)(this, wD, "f")
        }
        set indexOfRefraction(DD) {
          (0, HD.g)(this, wD, DD, "f")
        }
        get volumeIndexOfRefraction() {
          return this._volumeIndexOfRefraction >= 1 ? this._volumeIndexOfRefraction : this._indexOfRefraction
        }
        set volumeIndexOfRefraction(DD) {
          const CD = DD >= 1 ? DD : -1;
          this._volumeIndexOfRefraction !== CD && (this._volumeIndexOfRefraction = CD, this._markAllSubMeshesAsTexturesDirty())
        }
        get invertRefractionY() {
          return (0, HD.d)(this, SD, "f")
        }
        set invertRefractionY(DD) {
          (0, HD.g)(this, SD, DD, "f")
        }
        get linkRefractionWithTransparency() {
          return (0, HD.d)(this, BD, "f")
        }
        set linkRefractionWithTransparency(DD) {
          (0, HD.g)(this, BD, DD, "f")
        }
        get useMaskFromThicknessTexture() {
          return (0, HD.d)(this, yD, "f")
        }
        set useMaskFromThicknessTexture(DD) {
          (0, HD.g)(this, yD, DD, "f")
        }
        get refractionIntensityTexture() {
          return (0, HD.d)(this, MD, "f")
        }
        set refractionIntensityTexture(DD) {
          (0, HD.g)(this, MD, DD, "f")
        }
        get translucencyIntensityTexture() {
          return (0, HD.d)(this, tD, "f")
        }
        set translucencyIntensityTexture(DD) {
          (0, HD.g)(this, tD, DD, "f")
        }
        get translucencyColorTexture() {
          return (0, HD.d)(this, ZD, "f")
        }
        set translucencyColorTexture(DD) {
          (0, HD.g)(this, ZD, DD, "f")
        }
        get useGltfStyleTextures() {
          return (0, HD.d)(this, oD, "f")
        }
        set useGltfStyleTextures(DD) {
          (0, HD.g)(this, oD, DD, "f")
        }
        get legacyTransluceny() {
          return this.legacyTranslucency
        }
        set legacyTransluceny(DD) {
          this.legacyTranslucency = DD
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isRefractionEnabled || this._isTranslucencyEnabled || this._isScatteringEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        _markScenePrePassDirty() {
          this._enable(this._isRefractionEnabled || this._isTranslucencyEnabled || this._isScatteringEnabled), this._internalMarkAllSubMeshesAsTexturesDirty(), this._internalMarkScenePrePassDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(vD) {
          let ND = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(vD, "PBRSubSurface", 130, new bC, ND), this._isRefractionEnabled = !1, CD.set(this, (0, HD.m)(this, IC, !1)), this._isTranslucencyEnabled = ((0, HD.m)(this, pC), !1), cD.set(this, (0, HD.m)(this, iC, !1)), this._isDispersionEnabled = ((0, HD.m)(this, fC), !1), ID.set(this, (0, HD.m)(this, QC, !1)), this._isScatteringEnabled = ((0, HD.m)(this, wC), !1), pD.set(this, (0, HD.m)(this, SC, !1)), this._scatteringDiffusionProfileIndex = ((0, HD.m)(this, BC), (0, HD.m)(this, yC, 0)), this.refractionIntensity = ((0, HD.m)(this, MC), (0, HD.m)(this, tC, 1)), this.translucencyIntensity = ((0, HD.m)(this, ZC), (0, HD.m)(this, oC, 1)), this._useAlbedoToTintRefraction = ((0, HD.m)(this, vC), !1), iD.set(this, (0, HD.m)(this, NC, !1)), this._useAlbedoToTintTranslucency = ((0, HD.m)(this, gC), !1), fD.set(this, (0, HD.m)(this, XC, !1)), this._thicknessTexture = ((0, HD.m)(this, mC), null), bD.set(this, (0, HD.m)(this, nC, null)), this._refractionTexture = ((0, HD.m)(this, OC), null), QD.set(this, (0, HD.m)(this, PC, null)), this._indexOfRefraction = ((0, HD.m)(this, HC), 1.5), wD.set(this, (0, HD.m)(this, UC, 1.5)), this._volumeIndexOfRefraction = ((0, HD.m)(this, xC), (0, HD.m)(this, qC, -1)), this._invertRefractionY = ((0, HD.m)(this, JC), !1), SD.set(this, (0, HD.m)(this, KC, !1)), this._linkRefractionWithTransparency = ((0, HD.m)(this, aC), !1), BD.set(this, (0, HD.m)(this, VC, !1)), this.minimumThickness = ((0, HD.m)(this, zC), (0, HD.m)(this, jC, 0)), this.maximumThickness = ((0, HD.m)(this, lC), (0, HD.m)(this, LC, 1)), this.useThicknessAsDepth = ((0, HD.m)(this, TC), (0, HD.m)(this, GC, !1)), this.tintColor = ((0, HD.m)(this, RC), (0, HD.m)(this, kC, sD.d.White())), this.tintColorAtDistance = ((0, HD.m)(this, dC), (0, HD.m)(this, YC, 1)), this.dispersion = ((0, HD.m)(this, WC), (0, HD.m)(this, sC, 0)), this.diffusionDistance = ((0, HD.m)(this, EC), (0, HD.m)(this, eC, sD.d.White())), this._useMaskFromThicknessTexture = ((0, HD.m)(this, uC), !1), yD.set(this, (0, HD.m)(this, hC, !1)), this._refractionIntensityTexture = ((0, HD.m)(this, rC), null), MD.set(this, (0, HD.m)(this, AC, null)), this._translucencyIntensityTexture = ((0, HD.m)(this, FC), null), tD.set(this, (0, HD.m)(this, Dc, null)), this.translucencyColor = ((0, HD.m)(this, Cc), (0, HD.m)(this, cc, null)), this._translucencyColorTexture = ((0, HD.m)(this, Ic), null), ZD.set(this, (0, HD.m)(this, pc, null)), this._useGltfStyleTextures = ((0, HD.m)(this, ic), !0), oD.set(this, (0, HD.m)(this, fc, !0)), this.applyAlbedoAfterSubSurface = ((0, HD.m)(this, bc), (0, HD.m)(this, Qc, DD.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE)), this.legacyTranslucency = ((0, HD.m)(this, wc), (0, HD.m)(this, Sc, DD.DEFAULT_LEGACY_TRANSLUCENCY)), this._scene = (0, HD.m)(this, Bc), this._scene = vD.hq(), this.registerForExtraEvents = !0, this._internalMarkAllSubMeshesAsTexturesDirty = vD._dirtyCallbacks[1], this._internalMarkScenePrePassDirty = vD._dirtyCallbacks[32]
        }
        isReadyForSubMesh(DD, CD) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return !0;
          if (DD._areTexturesDirty && CD.texturesEnabled) {
            if (this._thicknessTexture && hD.e.ThicknessTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1;
            if (this._refractionIntensityTexture && hD.e.RefractionIntensityTextureEnabled && !this._refractionIntensityTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyColorTexture && hD.e.TranslucencyColorTextureEnabled && !this._translucencyColorTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyIntensityTexture && hD.e.TranslucencyIntensityTextureEnabled && !this._translucencyIntensityTexture.isReadyOrNotBlocking()) return !1;
            const DD = this._getRefractionTexture(CD);
            if (DD && hD.e.RefractionTextureEnabled && !DD.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(DD, CD) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return DD.SUBSURFACE = !1, DD.SS_DISPERSION = !1, DD.SS_TRANSLUCENCY = !1, DD.SS_SCATTERING = !1, DD.SS_REFRACTION = !1, DD.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, DD.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, DD.SS_THICKNESSANDMASK_TEXTURE = !1, DD.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, DD.SS_HAS_THICKNESS = !1, DD.SS_REFRACTIONINTENSITY_TEXTURE = !1, DD.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, DD.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, DD.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, DD.SS_REFRACTIONMAP_3D = !1, DD.SS_REFRACTIONMAP_OPPOSITEZ = !1, DD.SS_LODINREFRACTIONALPHA = !1, DD.SS_GAMMAREFRACTION = !1, DD.SS_RGBDREFRACTION = !1, DD.SS_LINEARSPECULARREFRACTION = !1, DD.SS_LINKREFRACTIONTOTRANSPARENCY = !1, DD.SS_ALBEDOFORREFRACTIONTINT = !1, DD.SS_ALBEDOFORTRANSLUCENCYTINT = !1, DD.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, DD.SS_USE_THICKNESS_AS_DEPTH = !1, DD.SS_USE_GLTF_TEXTURES = !1, DD.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, DD.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, DD.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, void(DD.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1);
          if (DD._areTexturesDirty) {
            if (DD.SUBSURFACE = !0, DD.SS_DISPERSION = this._isDispersionEnabled, DD.SS_TRANSLUCENCY = this._isTranslucencyEnabled, DD.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, DD.SS_TRANSLUCENCY_LEGACY = this.legacyTranslucency, DD.SS_SCATTERING = this._isScatteringEnabled, DD.SS_THICKNESSANDMASK_TEXTURE = !1, DD.SS_REFRACTIONINTENSITY_TEXTURE = !1, DD.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, DD.SS_HAS_THICKNESS = !1, DD.SS_USE_GLTF_TEXTURES = !1, DD.SS_REFRACTION = !1, DD.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, DD.SS_REFRACTIONMAP_3D = !1, DD.SS_GAMMAREFRACTION = !1, DD.SS_RGBDREFRACTION = !1, DD.SS_LINEARSPECULARREFRACTION = !1, DD.SS_REFRACTIONMAP_OPPOSITEZ = !1, DD.SS_LODINREFRACTIONALPHA = !1, DD.SS_LINKREFRACTIONTOTRANSPARENCY = !1, DD.SS_ALBEDOFORREFRACTIONTINT = !1, DD.SS_ALBEDOFORTRANSLUCENCYTINT = !1, DD.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, DD.SS_USE_THICKNESS_AS_DEPTH = !1, DD.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, DD.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = this.applyAlbedoAfterSubSurface, DD._areTexturesDirty && CD.texturesEnabled && (this._thicknessTexture && hD.e.ThicknessTextureEnabled && (0, AD.db)(this._thicknessTexture, DD, "SS_THICKNESSANDMASK_TEXTURE"), this._refractionIntensityTexture && hD.e.RefractionIntensityTextureEnabled && (0, AD.db)(this._refractionIntensityTexture, DD, "SS_REFRACTIONINTENSITY_TEXTURE"), this._translucencyIntensityTexture && hD.e.TranslucencyIntensityTextureEnabled && (0, AD.db)(this._translucencyIntensityTexture, DD, "SS_TRANSLUCENCYINTENSITY_TEXTURE"), this._translucencyColorTexture && hD.e.TranslucencyColorTextureEnabled && ((0, AD.db)(this._translucencyColorTexture, DD, "SS_TRANSLUCENCYCOLOR_TEXTURE"), DD.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = this._translucencyColorTexture.gammaSpace)), DD.SS_HAS_THICKNESS = this.maximumThickness - this.minimumThickness !== 0, DD.SS_USE_GLTF_TEXTURES = this._useGltfStyleTextures, DD.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._refractionIntensityTexture, DD.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._translucencyIntensityTexture, this._isRefractionEnabled && CD.texturesEnabled) {
              const cD = this._getRefractionTexture(CD);
              cD && hD.e.RefractionTextureEnabled && (DD.SS_REFRACTION = !0, DD.SS_REFRACTIONMAP_3D = cD.isCube, DD.SS_GAMMAREFRACTION = cD.gammaSpace, DD.SS_RGBDREFRACTION = cD.isRGBD, DD.SS_LINEARSPECULARREFRACTION = cD.linearSpecularLOD, DD.SS_REFRACTIONMAP_OPPOSITEZ = this._scene.useRightHandedSystem && cD.isCube ? !cD.invertZ : cD.invertZ, DD.SS_LODINREFRACTIONALPHA = cD.lodLevelInAlpha, DD.SS_LINKREFRACTIONTOTRANSPARENCY = this._linkRefractionWithTransparency, DD.SS_ALBEDOFORREFRACTIONTINT = this._useAlbedoToTintRefraction, DD.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = cD.isCube && cD.boundingBoxSize, DD.SS_USE_THICKNESS_AS_DEPTH = this.useThicknessAsDepth)
            }
            this._isTranslucencyEnabled && (DD.SS_ALBEDOFORTRANSLUCENCYTINT = this._useAlbedoToTintTranslucency)
          }
        }
        hardBindForSubMesh(DD, CD, cD, ID) {
          if (this._isRefractionEnabled || this._isTranslucencyEnabled || this._isScatteringEnabled)
            if (0 === this.maximumThickness && 0 === this.minimumThickness) DD.updateFloat2("vThicknessParam", 0, 0);
            else {
              ID.getRenderingMesh().getWorldMatrix().decompose(TD.l.cZ[0]);
              const CD = Math.max(Math.abs(TD.l.cZ[0].x), Math.abs(TD.l.cZ[0].y), Math.abs(TD.l.cZ[0].z));
              DD.updateFloat2("vThicknessParam", this.minimumThickness * CD, (this.maximumThickness - this.minimumThickness) * CD)
            }
        }
        bindForSubMesh(DD, CD, cD, ID) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return;
          const pD = ID.materialDefines,
            iD = this._material.isFrozen,
            fD = this._material.realTimeFiltering,
            bD = pD.LODBASEDMICROSFURACE,
            QD = this._getRefractionTexture(CD);
          if (!DD.useUbo || !iD || !DD.isSync) {
            if (this._thicknessTexture && hD.e.ThicknessTextureEnabled && (DD.updateFloat2("vThicknessInfos", this._thicknessTexture.coordinatesIndex, this._thicknessTexture.level), (0, AD.C)(this._thicknessTexture, DD, "thickness")), this._refractionIntensityTexture && hD.e.RefractionIntensityTextureEnabled && pD.SS_REFRACTIONINTENSITY_TEXTURE && (DD.updateFloat2("vRefractionIntensityInfos", this._refractionIntensityTexture.coordinatesIndex, this._refractionIntensityTexture.level), (0, AD.C)(this._refractionIntensityTexture, DD, "refractionIntensity")), this._translucencyColorTexture && hD.e.TranslucencyColorTextureEnabled && pD.SS_TRANSLUCENCYCOLOR_TEXTURE && (DD.updateFloat2("vTranslucencyColorInfos", this._translucencyColorTexture.coordinatesIndex, this._translucencyColorTexture.level), (0, AD.C)(this._translucencyColorTexture, DD, "translucencyColor")), this._translucencyIntensityTexture && hD.e.TranslucencyIntensityTextureEnabled && pD.SS_TRANSLUCENCYINTENSITY_TEXTURE && (DD.updateFloat2("vTranslucencyIntensityInfos", this._translucencyIntensityTexture.coordinatesIndex, this._translucencyIntensityTexture.level), (0, AD.C)(this._translucencyIntensityTexture, DD, "translucencyIntensity")), QD && hD.e.RefractionTextureEnabled) {
              DD.o5("refractionMatrix", QD.getRefractionTextureMatrix());
              let CD = 1;
              QD.isCube || QD.depth && (CD = QD.depth);
              const cD = QD.getSize().width,
                ID = this.volumeIndexOfRefraction;
              if (DD.updateFloat4("vRefractionInfos", QD.level, 1 / ID, CD, this._invertRefractionY ? -1 : 1), DD.updateFloat4("vRefractionMicrosurfaceInfos", cD, QD.lodGenerationScale, QD.lodGenerationOffset, 1 / this.indexOfRefraction), fD && DD.updateFloat2("vRefractionFilteringInfo", cD, Math.log2(cD)), QD.boundingBoxSize) {
                const CD = QD;
                DD.updateVector3("vRefractionPosition", CD.boundingBoxPosition), DD.updateVector3("vRefractionSize", CD.boundingBoxSize)
              }
            }
            this._isScatteringEnabled && DD.updateFloat("scatteringDiffusionProfile", this._scatteringDiffusionProfileIndex), DD.updateColor3("vDiffusionDistance", this.diffusionDistance), DD.updateFloat4("vTintColor", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintColorAtDistance)), DD.updateColor4("vTranslucencyColor", this.translucencyColor ?? this.tintColor, 0), DD.updateFloat3("vSubSurfaceIntensity", this.refractionIntensity, this.translucencyIntensity, 0), DD.updateFloat("dispersion", this.dispersion)
          }
          CD.texturesEnabled && (this._thicknessTexture && hD.e.ThicknessTextureEnabled && DD.setTexture("thicknessSampler", this._thicknessTexture), this._refractionIntensityTexture && hD.e.RefractionIntensityTextureEnabled && pD.SS_REFRACTIONINTENSITY_TEXTURE && DD.setTexture("refractionIntensitySampler", this._refractionIntensityTexture), this._translucencyIntensityTexture && hD.e.TranslucencyIntensityTextureEnabled && pD.SS_TRANSLUCENCYINTENSITY_TEXTURE && DD.setTexture("translucencyIntensitySampler", this._translucencyIntensityTexture), this._translucencyColorTexture && hD.e.TranslucencyColorTextureEnabled && pD.SS_TRANSLUCENCYCOLOR_TEXTURE && DD.setTexture("translucencyColorSampler", this._translucencyColorTexture), QD && hD.e.RefractionTextureEnabled && (bD ? DD.setTexture("refractionSampler", QD) : (DD.setTexture("refractionSampler", QD._lodTextureMid || QD), DD.setTexture("refractionSamplerLow", QD._lodTextureLow || QD), DD.setTexture("refractionSamplerHigh", QD._lodTextureHigh || QD))))
        }
        _getRefractionTexture(DD) {
          return this._refractionTexture ? this._refractionTexture : this._isRefractionEnabled ? DD.environmentTexture : null
        }
        get disableAlphaBlending() {
          return this._isRefractionEnabled && this._linkRefractionWithTransparency
        }
        fillRenderTargetTextures(DD) {
          hD.e.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && DD.push(this._refractionTexture)
        }
        hasTexture(DD) {
          return this._thicknessTexture === DD || (this._refractionTexture === DD || (this._refractionIntensityTexture === DD || (this._translucencyIntensityTexture === DD || this._translucencyColorTexture === DD)))
        }
        hasRenderTargetTextures() {
          return !!(hD.e.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget)
        }
        getActiveTextures(DD) {
          this._thicknessTexture && DD.push(this._thicknessTexture), this._refractionTexture && DD.push(this._refractionTexture), this._refractionIntensityTexture && DD.push(this._refractionIntensityTexture), this._translucencyColorTexture && DD.push(this._translucencyColorTexture), this._translucencyIntensityTexture && DD.push(this._translucencyIntensityTexture)
        }
        getAnimatables(DD) {
          this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && DD.push(this._thicknessTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && DD.push(this._refractionTexture), this._refractionIntensityTexture && this._refractionIntensityTexture.animations && this._refractionIntensityTexture.animations.length > 0 && DD.push(this._refractionIntensityTexture), this._translucencyColorTexture && this._translucencyColorTexture.animations && this._translucencyColorTexture.animations.length > 0 && DD.push(this._translucencyColorTexture), this._translucencyIntensityTexture && this._translucencyIntensityTexture.animations && this._translucencyIntensityTexture.animations.length > 0 && DD.push(this._translucencyIntensityTexture)
        }
        dispose(DD) {
          DD && (this._thicknessTexture && this._thicknessTexture.dispose(), this._refractionTexture && this._refractionTexture.dispose(), this._refractionIntensityTexture && this._refractionIntensityTexture.dispose(), this._translucencyColorTexture && this._translucencyColorTexture.dispose(), this._translucencyIntensityTexture && this._translucencyIntensityTexture.dispose())
        }
        getClassName() {
          return "PBRSubSurfaceConfiguration"
        }
        addFallbacks(DD, CD, cD) {
          return DD.SS_SCATTERING && CD.addFallback(cD++, "SS_SCATTERING"), DD.SS_TRANSLUCENCY && CD.addFallback(cD++, "SS_TRANSLUCENCY"), cD
        }
        getSamplers(DD) {
          DD.push("thicknessSampler", "refractionIntensitySampler", "translucencyIntensitySampler", "refractionSampler", "refractionSamplerLow", "refractionSamplerHigh", "translucencyColorSampler")
        }
        getUniforms() {
          return {
            ubo: [{
              name: "vRefractionMicrosurfaceInfos",
              size: 4,
              type: "vec4"
            }, {
              name: "vRefractionFilteringInfo",
              size: 2,
              type: "vec2"
            }, {
              name: "vTranslucencyIntensityInfos",
              size: 2,
              type: "vec2"
            }, {
              name: "vRefractionInfos",
              size: 4,
              type: "vec4"
            }, {
              name: "refractionMatrix",
              size: 16,
              type: "mat4"
            }, {
              name: "vThicknessInfos",
              size: 2,
              type: "vec2"
            }, {
              name: "vRefractionIntensityInfos",
              size: 2,
              type: "vec2"
            }, {
              name: "thicknessMatrix",
              size: 16,
              type: "mat4"
            }, {
              name: "refractionIntensityMatrix",
              size: 16,
              type: "mat4"
            }, {
              name: "translucencyIntensityMatrix",
              size: 16,
              type: "mat4"
            }, {
              name: "vThicknessParam",
              size: 2,
              type: "vec2"
            }, {
              name: "vDiffusionDistance",
              size: 3,
              type: "vec3"
            }, {
              name: "vTintColor",
              size: 4,
              type: "vec4"
            }, {
              name: "vSubSurfaceIntensity",
              size: 3,
              type: "vec3"
            }, {
              name: "vRefractionPosition",
              size: 3,
              type: "vec3"
            }, {
              name: "vRefractionSize",
              size: 3,
              type: "vec3"
            }, {
              name: "scatteringDiffusionProfile",
              size: 1,
              type: "float"
            }, {
              name: "dispersion",
              size: 1,
              type: "float"
            }, {
              name: "vTranslucencyColor",
              size: 4,
              type: "vec4"
            }, {
              name: "vTranslucencyColorInfos",
              size: 2,
              type: "vec2"
            }, {
              name: "translucencyColorMatrix",
              size: 16,
              type: "mat4"
            }]
          }
        }
      }, CD = new WeakMap, cD = new WeakMap, ID = new WeakMap, pD = new WeakMap, iD = new WeakMap, fD = new WeakMap, bD = new WeakMap, QD = new WeakMap, wD = new WeakMap, SD = new WeakMap, BD = new WeakMap, yD = new WeakMap, MD = new WeakMap, tD = new WeakMap, ZD = new WeakMap, oD = new WeakMap, (() => {
        const CD = "function" === typeof Symbol && Symbol.metadata ? Object.create(cC[Symbol.metadata] ?? null) : void 0;
        vD = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], ND = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], gD = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], XD = [(0, UD.G)(), (0, UD.c)("_markScenePrePassDirty")], mD = [(0, UD.G)()], nD = [(0, UD.G)()], OD = [(0, UD.G)()], PD = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], xD = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], qD = [(0, UD.w)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], JD = [(0, UD.w)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], KD = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], aD = [(0, UD.G)()], VD = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], zD = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], jD = [(0, UD.G)()], lD = [(0, UD.G)()], LD = [(0, UD.G)()], GD = [(0, UD.l)()], RD = [(0, UD.G)()], dD = [(0, UD.G)()], YD = [(0, UD.l)()], WD = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], ED = [(0, UD.w)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], eD = [(0, UD.w)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], uD = [(0, UD.l)()], rD = [(0, UD.w)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], FD = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], DC = [(0, UD.G)()], CC = [(0, UD.G)()], (0, HD.k)(DD, null, vD, {
          kind: "accessor",
          name: "isRefractionEnabled",
          static: !1,
          private: !1,
          access: {
            has: DD => "isRefractionEnabled" in DD,
            get: DD => DD.isRefractionEnabled,
            set: (DD, CD) => {
              DD.isRefractionEnabled = CD
            }
          },
          metadata: CD
        }, IC, pC), (0, HD.k)(DD, null, ND, {
          kind: "accessor",
          name: "isTranslucencyEnabled",
          static: !1,
          private: !1,
          access: {
            has: DD => "isTranslucencyEnabled" in DD,
            get: DD => DD.isTranslucencyEnabled,
            set: (DD, CD) => {
              DD.isTranslucencyEnabled = CD
            }
          },
          metadata: CD
        }, iC, fC), (0, HD.k)(DD, null, gD, {
          kind: "accessor",
          name: "isDispersionEnabled",
          static: !1,
          private: !1,
          access: {
            has: DD => "isDispersionEnabled" in DD,
            get: DD => DD.isDispersionEnabled,
            set: (DD, CD) => {
              DD.isDispersionEnabled = CD
            }
          },
          metadata: CD
        }, QC, wC), (0, HD.k)(DD, null, XD, {
          kind: "accessor",
          name: "isScatteringEnabled",
          static: !1,
          private: !1,
          access: {
            has: DD => "isScatteringEnabled" in DD,
            get: DD => DD.isScatteringEnabled,
            set: (DD, CD) => {
              DD.isScatteringEnabled = CD
            }
          },
          metadata: CD
        }, SC, BC), (0, HD.k)(DD, null, PD, {
          kind: "accessor",
          name: "useAlbedoToTintRefraction",
          static: !1,
          private: !1,
          access: {
            has: DD => "useAlbedoToTintRefraction" in DD,
            get: DD => DD.useAlbedoToTintRefraction,
            set: (DD, CD) => {
              DD.useAlbedoToTintRefraction = CD
            }
          },
          metadata: CD
        }, NC, gC), (0, HD.k)(DD, null, xD, {
          kind: "accessor",
          name: "useAlbedoToTintTranslucency",
          static: !1,
          private: !1,
          access: {
            has: DD => "useAlbedoToTintTranslucency" in DD,
            get: DD => DD.useAlbedoToTintTranslucency,
            set: (DD, CD) => {
              DD.useAlbedoToTintTranslucency = CD
            }
          },
          metadata: CD
        }, XC, mC), (0, HD.k)(DD, null, qD, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: DD => "thicknessTexture" in DD,
            get: DD => DD.thicknessTexture,
            set: (DD, CD) => {
              DD.thicknessTexture = CD
            }
          },
          metadata: CD
        }, nC, OC), (0, HD.k)(DD, null, JD, {
          kind: "accessor",
          name: "refractionTexture",
          static: !1,
          private: !1,
          access: {
            has: DD => "refractionTexture" in DD,
            get: DD => DD.refractionTexture,
            set: (DD, CD) => {
              DD.refractionTexture = CD
            }
          },
          metadata: CD
        }, PC, HC), (0, HD.k)(DD, null, KD, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: DD => "indexOfRefraction" in DD,
            get: DD => DD.indexOfRefraction,
            set: (DD, CD) => {
              DD.indexOfRefraction = CD
            }
          },
          metadata: CD
        }, UC, xC), (0, HD.k)(DD, null, VD, {
          kind: "accessor",
          name: "invertRefractionY",
          static: !1,
          private: !1,
          access: {
            has: DD => "invertRefractionY" in DD,
            get: DD => DD.invertRefractionY,
            set: (DD, CD) => {
              DD.invertRefractionY = CD
            }
          },
          metadata: CD
        }, KC, aC), (0, HD.k)(DD, null, zD, {
          kind: "accessor",
          name: "linkRefractionWithTransparency",
          static: !1,
          private: !1,
          access: {
            has: DD => "linkRefractionWithTransparency" in DD,
            get: DD => DD.linkRefractionWithTransparency,
            set: (DD, CD) => {
              DD.linkRefractionWithTransparency = CD
            }
          },
          metadata: CD
        }, VC, zC), (0, HD.k)(DD, null, WD, {
          kind: "accessor",
          name: "useMaskFromThicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: DD => "useMaskFromThicknessTexture" in DD,
            get: DD => DD.useMaskFromThicknessTexture,
            set: (DD, CD) => {
              DD.useMaskFromThicknessTexture = CD
            }
          },
          metadata: CD
        }, hC, rC), (0, HD.k)(DD, null, ED, {
          kind: "accessor",
          name: "refractionIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: DD => "refractionIntensityTexture" in DD,
            get: DD => DD.refractionIntensityTexture,
            set: (DD, CD) => {
              DD.refractionIntensityTexture = CD
            }
          },
          metadata: CD
        }, AC, FC), (0, HD.k)(DD, null, eD, {
          kind: "accessor",
          name: "translucencyIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: DD => "translucencyIntensityTexture" in DD,
            get: DD => DD.translucencyIntensityTexture,
            set: (DD, CD) => {
              DD.translucencyIntensityTexture = CD
            }
          },
          metadata: CD
        }, Dc, Cc), (0, HD.k)(DD, null, rD, {
          kind: "accessor",
          name: "translucencyColorTexture",
          static: !1,
          private: !1,
          access: {
            has: DD => "translucencyColorTexture" in DD,
            get: DD => DD.translucencyColorTexture,
            set: (DD, CD) => {
              DD.translucencyColorTexture = CD
            }
          },
          metadata: CD
        }, pc, ic), (0, HD.k)(DD, null, FD, {
          kind: "accessor",
          name: "useGltfStyleTextures",
          static: !1,
          private: !1,
          access: {
            has: DD => "useGltfStyleTextures" in DD,
            get: DD => DD.useGltfStyleTextures,
            set: (DD, CD) => {
              DD.useGltfStyleTextures = CD
            }
          },
          metadata: CD
        }, fc, bc), (0, HD.k)(null, null, mD, {
          kind: "field",
          name: "_scatteringDiffusionProfileIndex",
          static: !1,
          private: !1,
          access: {
            has: DD => "_scatteringDiffusionProfileIndex" in DD,
            get: DD => DD._scatteringDiffusionProfileIndex,
            set: (DD, CD) => {
              DD._scatteringDiffusionProfileIndex = CD
            }
          },
          metadata: CD
        }, yC, MC), (0, HD.k)(null, null, nD, {
          kind: "field",
          name: "refractionIntensity",
          static: !1,
          private: !1,
          access: {
            has: DD => "refractionIntensity" in DD,
            get: DD => DD.refractionIntensity,
            set: (DD, CD) => {
              DD.refractionIntensity = CD
            }
          },
          metadata: CD
        }, tC, ZC), (0, HD.k)(null, null, OD, {
          kind: "field",
          name: "translucencyIntensity",
          static: !1,
          private: !1,
          access: {
            has: DD => "translucencyIntensity" in DD,
            get: DD => DD.translucencyIntensity,
            set: (DD, CD) => {
              DD.translucencyIntensity = CD
            }
          },
          metadata: CD
        }, oC, vC), (0, HD.k)(null, null, aD, {
          kind: "field",
          name: "_volumeIndexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: DD => "_volumeIndexOfRefraction" in DD,
            get: DD => DD._volumeIndexOfRefraction,
            set: (DD, CD) => {
              DD._volumeIndexOfRefraction = CD
            }
          },
          metadata: CD
        }, qC, JC), (0, HD.k)(null, null, jD, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: DD => "minimumThickness" in DD,
            get: DD => DD.minimumThickness,
            set: (DD, CD) => {
              DD.minimumThickness = CD
            }
          },
          metadata: CD
        }, jC, lC), (0, HD.k)(null, null, lD, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: DD => "maximumThickness" in DD,
            get: DD => DD.maximumThickness,
            set: (DD, CD) => {
              DD.maximumThickness = CD
            }
          },
          metadata: CD
        }, LC, TC), (0, HD.k)(null, null, LD, {
          kind: "field",
          name: "useThicknessAsDepth",
          static: !1,
          private: !1,
          access: {
            has: DD => "useThicknessAsDepth" in DD,
            get: DD => DD.useThicknessAsDepth,
            set: (DD, CD) => {
              DD.useThicknessAsDepth = CD
            }
          },
          metadata: CD
        }, GC, RC), (0, HD.k)(null, null, GD, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: DD => "tintColor" in DD,
            get: DD => DD.tintColor,
            set: (DD, CD) => {
              DD.tintColor = CD
            }
          },
          metadata: CD
        }, kC, dC), (0, HD.k)(null, null, RD, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: DD => "tintColorAtDistance" in DD,
            get: DD => DD.tintColorAtDistance,
            set: (DD, CD) => {
              DD.tintColorAtDistance = CD
            }
          },
          metadata: CD
        }, YC, WC), (0, HD.k)(null, null, dD, {
          kind: "field",
          name: "dispersion",
          static: !1,
          private: !1,
          access: {
            has: DD => "dispersion" in DD,
            get: DD => DD.dispersion,
            set: (DD, CD) => {
              DD.dispersion = CD
            }
          },
          metadata: CD
        }, sC, EC), (0, HD.k)(null, null, YD, {
          kind: "field",
          name: "diffusionDistance",
          static: !1,
          private: !1,
          access: {
            has: DD => "diffusionDistance" in DD,
            get: DD => DD.diffusionDistance,
            set: (DD, CD) => {
              DD.diffusionDistance = CD
            }
          },
          metadata: CD
        }, eC, uC), (0, HD.k)(null, null, uD, {
          kind: "field",
          name: "translucencyColor",
          static: !1,
          private: !1,
          access: {
            has: DD => "translucencyColor" in DD,
            get: DD => DD.translucencyColor,
            set: (DD, CD) => {
              DD.translucencyColor = CD
            }
          },
          metadata: CD
        }, cc, Ic), (0, HD.k)(null, null, DC, {
          kind: "field",
          name: "applyAlbedoAfterSubSurface",
          static: !1,
          private: !1,
          access: {
            has: DD => "applyAlbedoAfterSubSurface" in DD,
            get: DD => DD.applyAlbedoAfterSubSurface,
            set: (DD, CD) => {
              DD.applyAlbedoAfterSubSurface = CD
            }
          },
          metadata: CD
        }, Qc, wc), (0, HD.k)(null, null, CC, {
          kind: "field",
          name: "legacyTranslucency",
          static: !1,
          private: !1,
          access: {
            has: DD => "legacyTranslucency" in DD,
            get: DD => DD.legacyTranslucency,
            set: (DD, CD) => {
              DD.legacyTranslucency = CD
            }
          },
          metadata: CD
        }, Sc, Bc), CD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: CD
        })
      })(), DD.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE = !1, DD.DEFAULT_LEGACY_TRANSLUCENCY = !1, DD
    })();
    var wC = cD(39483),
      SC = cD(39460),
      BC = cD(39496),
      yC = cD(39503),
      MC = cD(39508),
      tC = cD(39512),
      ZC = cD(39514),
      oC = cD(39523),
      vC = cD(39027);
    const NC = {
      effect: null,
      subMesh: null
    };
    class gC extends((0, ZC.e)((0, tC.c)(RD.e))) {}
    class XC extends((0, ED.f)(gC)) {
      constructor(DD) {
        super(DD), this.PBR = !0, this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.ALBEDO = !1, this.GAMMAALBEDO = !1, this.ALBEDODIRECTUV = 0, this.VERTEXCOLOR = !1, this.BASE_WEIGHT = !1, this.BASE_WEIGHTDIRECTUV = 0, this.BASE_DIFFUSE_ROUGHNESS = !1, this.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.AMBIENTINGRAYSCALE = !1, this.OPACITY = !1, this.VERTEXALPHA = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHAFROMALBEDO = !1, this.ALPHATESTVALUE = "0.5", this.SPECULAROVERALPHA = !1, this.RADIANCEOVERALPHA = !1, this.ALPHAFRESNEL = !1, this.LINEARALPHAFRESNEL = !1, this.PREMULTIPLYALPHA = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.GAMMAEMISSIVE = !1, this.REFLECTIVITY = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.MICROSURFACEFROMREFLECTIVITYMAP = !1, this.MICROSURFACEAUTOMATIC = !1, this.LODBASEDMICROSFURACE = !1, this.MICROSURFACEMAP = !1, this.MICROSURFACEMAPDIRECTUV = 0, this.METALLICWORKFLOW = !1, this.ROUGHNESSSTOREINMETALMAPALPHA = !1, this.ROUGHNESSSTOREINMETALMAPGREEN = !1, this.METALLNESSSTOREINMETALMAPBLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.METALLIC_REFLECTANCE = !1, this.METALLIC_REFLECTANCE_GAMMA = !1, this.METALLIC_REFLECTANCEDIRECTUV = 0, this.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = !1, this.REFLECTANCE = !1, this.REFLECTANCE_GAMMA = !1, this.REFLECTANCEDIRECTUV = 0, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.NORMAL = !1, this.TANGENT = !1, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.USELIGHTMAPASSHADOWMAP = !1, this.GAMMALIGHTMAP = !1, this.RGBDLIGHTMAP = !1, this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1, this.LINEARSPECULARREFLECTION = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.PBR = !0, this.NORMALXYSCALE = !0
      }
    }
    class mC extends((0, oC.d)(uD.b)) {}
    let nC = (() => {
      var DD, CD;
      let ID, pD = mC,
        fD = [],
        bD = [];
      return DD = class extends pD {
        get realTimeFiltering() {
          return this._realTimeFiltering
        }
        set realTimeFiltering(DD) {
          this._realTimeFiltering = DD, this.sDD(1)
        }
        get realTimeFilteringQuality() {
          return this._realTimeFilteringQuality
        }
        set realTimeFilteringQuality(DD) {
          this._realTimeFilteringQuality = DD, this.sDD(1)
        }
        get canRenderToMRT() {
          return !0
        }
        get debugMode() {
          return (0, HD.d)(this, CD, "f")
        }
        set debugMode(DD) {
          (0, HD.g)(this, CD, DD, "f")
        }
        constructor(cD, ID) {
          super(cD, ID, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || DD.ForceGLSL), this._directIntensity = 1, this._emissiveIntensity = 1, this._environmentIntensity = 1, this._specularIntensity = 1, this._lightingInfos = new TD.s(this._directIntensity, this._emissiveIntensity, this._environmentIntensity, this._specularIntensity), this._disableBumpMap = !1, this._albedoTexture = null, this._baseWeightTexture = null, this._baseDiffuseRoughnessTexture = null, this._ambientTexture = null, this._ambientTextureStrength = 1, this._ambientTextureImpactOnAnalyticalLights = DD.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, this._opacityTexture = null, this._reflectionTexture = null, this._emissiveTexture = null, this._reflectivityTexture = null, this._metallicTexture = null, this._metallic = null, this._roughness = null, this._metallicF0Factor = 1, this._metallicReflectanceColor = sD.d.White(), this._useOnlyMetallicFromMetallicReflectanceTexture = !1, this._metallicReflectanceTexture = null, this._reflectanceTexture = null, this._microSurfaceTexture = null, this._bumpTexture = null, this._lightmapTexture = null, this._ambientColor = new sD.d(0, 0, 0), this._albedoColor = new sD.d(1, 1, 1), this._baseWeight = 1, this._baseDiffuseRoughness = null, this._reflectivityColor = new sD.d(1, 1, 1), this._reflectionColor = new sD.d(1, 1, 1), this._emissiveColor = new sD.d(0, 0, 0), this._microSurface = .9, this._useLightmapAsShadowmap = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromAlbedoTexture = !1, this._useSpecularOverAlpha = !0, this._useMicroSurfaceFromReflectivityMapAlpha = !1, this._useRoughnessFromMetallicTextureAlpha = !0, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallnessFromMetallicTextureBlue = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useAmbientInGrayScale = !1, this._useAutoMicroSurfaceFromReflectivityMap = !1, this._lightFalloff = DD.LIGHTFALLOFF_PHYSICAL, this._useRadianceOverAlpha = !0, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new qD.f(16), this._globalAmbientColor = new sD.d(0, 0, 0), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, CD.set(this, (0, HD.m)(this, fD, 0)), this.debugLimit = ((0, HD.m)(this, bD), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this.brdf = new YD(this), this.clearCoat = new DC(this), this.iridescence = new cC(this), this.anisotropy = new pC(this), this.sheen = new fC(this), this.subSurface = new QC(this), this.detailMap = new wC.b(this), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), hD.e.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = zD(this.hq()), this.prePassConfiguration = new WD.c
        }
        get hasRenderTargetTextures() {
          return !!(hD.e.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures
        }
        get isPrePassCapable() {
          return !this.disableDepthWrite
        }
        getClassName() {
          return "PBRBaseMaterial"
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === DD.PBRMATERIAL_OPAQUE || this._transparencyMode === DD.PBRMATERIAL_ALPHATEST || this.subSurface?.disableAlphaBlending
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromAlbedoTexture())
        }
        needAlphaTesting() {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.subSurface?.disableAlphaBlending && (this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === DD.PBRMATERIAL_ALPHATEST))
        }
        _shouldUseAlphaFromAlbedoTexture() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha && this._useAlphaFromAlbedoTexture && this._transparencyMode !== DD.PBRMATERIAL_OPAQUE
        }
        _hasAlphaChannel() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha || null != this._opacityTexture
        }
        getAlphaTestTexture() {
          return this._albedoTexture
        }
        isReadyForSubMesh(DD, CD, cD) {
          this._uniformBufferLayoutBuilt || this.buildUniformLayout();
          const ID = CD._drawWrapper;
          if (ID.effect && this.isFrozen && ID._wasPreviouslyReady && ID._wasPreviouslyUsingInstances === cD) return !0;
          CD.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), CD.materialDefines = new XC(this._eventInfo.defineNames));
          const pD = CD.materialDefines;
          if (this._isReadyForSubMesh(CD)) return !0;
          const iD = this.hq(),
            fD = iD.DZ();
          if (pD._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, iD.texturesEnabled)) {
            if (this._albedoTexture && hD.e.DiffuseTextureEnabled && !this._albedoTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseWeightTexture && hD.e.BaseWeightTextureEnabled && !this._baseWeightTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseDiffuseRoughnessTexture && hD.e.BaseDiffuseRoughnessTextureEnabled && !this._baseDiffuseRoughnessTexture.isReadyOrNotBlocking()) return !1;
            if (this._ambientTexture && hD.e.AmbientTextureEnabled && !this._ambientTexture.isReadyOrNotBlocking()) return !1;
            if (this._opacityTexture && hD.e.OpacityTextureEnabled && !this._opacityTexture.isReadyOrNotBlocking()) return !1;
            const DD = this._getReflectionTexture();
            if (DD && hD.e.ReflectionTextureEnabled) {
              if (!DD.isReadyOrNotBlocking()) return !1;
              if (DD.irradianceTexture) {
                if (!DD.irradianceTexture.isReadyOrNotBlocking()) return !1
              } else if (!DD.sphericalPolynomial && DD.getInternalTexture()?._sphericalPolynomialPromise) return !1
            }
            if (this._lightmapTexture && hD.e.LightmapTextureEnabled && !this._lightmapTexture.isReadyOrNotBlocking()) return !1;
            if (this._emissiveTexture && hD.e.EmissiveTextureEnabled && !this._emissiveTexture.isReadyOrNotBlocking()) return !1;
            if (hD.e.SpecularTextureEnabled) {
              if (this._metallicTexture) {
                if (!this._metallicTexture.isReadyOrNotBlocking()) return !1
              } else if (this._reflectivityTexture && !this._reflectivityTexture.isReadyOrNotBlocking()) return !1;
              if (this._metallicReflectanceTexture && !this._metallicReflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._reflectanceTexture && !this._reflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._microSurfaceTexture && !this._microSurfaceTexture.isReadyOrNotBlocking()) return !1
            }
            if (fD.getCaps().standardDerivatives && this._bumpTexture && hD.e.BumpTextureEnabled && !this._disableBumpMap && !this._bumpTexture.isReady()) return !1;
            if (this._environmentBRDFTexture && hD.e.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1
          }
          if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = pD, this._eventInfo.subMesh = CD, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
          if (pD._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
          if (pD.AREALIGHTUSED || pD.CLUSTLIGHT_BATCH)
            for (let BD = 0; BD < DD.lightSources.length; BD++)
              if (!DD.lightSources[BD]._isReady()) return !1;
          if (fD.getCaps().standardDerivatives || DD.isVerticesDataPresent(GD.k.NormalKind) || (DD.createNormals(!0), xD.e.Warn("PBRMaterial: Normals have been created for the mesh: " + DD.name)), !(0, AD.c)(iD, DD, this._maxSimultaneousLights, this._disableLighting)) return !1;
          const bD = CD.effect,
            QD = pD._areLightsDisposed,
            wD = this._prepareEffect(DD, CD.getRenderingMesh(), pD, this.onCompiled, this.onError, cD, null);
          let SD = !1;
          if (wD)
            if (this._onEffectCreatedObservable && (NC.effect = wD, NC.subMesh = CD, this._onEffectCreatedObservable.notifyObservers(NC)), this.allowShaderHotSwapping && bD && !wD.isReady()) {
              if (pD.markAsUnprocessed(), SD = this.isFrozen, QD) return pD._areLightsDisposed = !0, !1
            } else iD.resetCachedMaterial(), CD.setEffect(wD, pD, this._materialContext);
          return !(!CD.effect || !CD.effect.isReady()) && (pD._renderId = iD.getRenderId(), ID._wasPreviouslyReady = !SD, ID._wasPreviouslyUsingInstances = !!cD, this._checkScenePerformancePriority(), !0)
        }
        isMetallicWorkflow() {
          return !(null == this._metallic && null == this._roughness && !this._metallicTexture)
        }
        _prepareEffect(CD, cD, ID) {
          let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            iD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            fD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
            bD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
          if (this._prepareDefines(CD, cD, ID, fD, bD), !ID.isDirty) return null;
          ID.markAsProcessed();
          const QD = this.hq().DZ(),
            wD = new rD.b;
          let SD = 0;
          ID.USESPHERICALINVERTEX && wD.addFallback(SD++, "USESPHERICALINVERTEX"), ID.FOG && wD.addFallback(SD, "FOG"), ID.SPECULARAA && wD.addFallback(SD, "SPECULARAA"), ID.POINTSIZE && wD.addFallback(SD, "POINTSIZE"), ID.LOGARITHMICDEPTH && wD.addFallback(SD, "LOGARITHMICDEPTH"), ID.PARALLAX && wD.addFallback(SD, "PARALLAX"), ID.PARALLAX_RHS && wD.addFallback(SD, "PARALLAX_RHS"), ID.PARALLAXOCCLUSION && wD.addFallback(SD++, "PARALLAXOCCLUSION"), ID.ENVIRONMENTBRDF && wD.addFallback(SD++, "ENVIRONMENTBRDF"), ID.TANGENT && wD.addFallback(SD++, "TANGENT"), ID.BUMP && wD.addFallback(SD++, "BUMP"), SD = (0, AD.D)(ID, wD, this._maxSimultaneousLights, SD), ID.SPECULARTERM && wD.addFallback(SD++, "SPECULARTERM"), ID.USESPHERICALFROMREFLECTIONMAP && wD.addFallback(SD++, "USESPHERICALFROMREFLECTIONMAP"), ID.USEIRRADIANCEMAP && wD.addFallback(SD++, "USEIRRADIANCEMAP"), ID.LIGHTMAP && wD.addFallback(SD++, "LIGHTMAP"), ID.NORMAL && wD.addFallback(SD++, "NORMAL"), ID.AMBIENT && wD.addFallback(SD++, "AMBIENT"), ID.EMISSIVE && wD.addFallback(SD++, "EMISSIVE"), ID.VERTEXCOLOR && wD.addFallback(SD++, "VERTEXCOLOR"), ID.MORPHTARGETS && wD.addFallback(SD++, "MORPHTARGETS"), ID.MULTIVIEW && wD.addFallback(0, "MULTIVIEW");
          const BD = [GD.k.PositionKind];
          ID.NORMAL && BD.push(GD.k.NormalKind), ID.TANGENT && BD.push(GD.k.TangentKind);
          for (let DD = 1; DD <= 6; ++DD) ID["UV" + DD] && BD.push(`uv${1===DD?"":DD}`);
          ID.VERTEXCOLOR && BD.push(GD.k.ColorKind), (0, AD.K)(BD, CD, ID, wD), (0, AD.L)(BD, ID), (0, AD.O)(BD, CD, ID), (0, AD.H)(BD, CD, ID);
          let yD = "pbr";
          const MD = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vAlbedoColor", "baseWeight", "baseDiffuseRoughness", "vReflectivityColor", "vMetallicReflectanceFactors", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vAlbedoInfos", "vBaseWeightInfos", "vBaseDiffuseRoughnessInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vReflectivityInfos", "vMetallicReflectanceInfos", "vReflectanceInfos", "vMicroSurfaceSamplerInfos", "vBumpInfos", "vLightmapInfos", "mBones", "albedoMatrix", "baseWeightMatrix", "baseDiffuseRoughnessMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "reflectivityMatrix", "normalMatrix", "microSurfaceSamplerMatrix", "bumpMatrix", "lightmapMatrix", "metallicReflectanceMatrix", "reflectanceMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
            tD = ["albedoSampler", "baseWeightSampler", "baseDiffuseRoughnessSampler", "reflectivitySampler", "ambientSampler", "emissiveSampler", "bumpSampler", "lightmapSampler", "opacitySampler", "microSurfaceSampler", "environmentBrdfSampler", "boneSampler", "metallicReflectanceSampler", "reflectanceSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
          (0, AD.pb)(MD, tD, !0);
          const ZD = ["Material", "Scene", "Mesh"],
            oD = {
              maxSimultaneousLights: this._maxSimultaneousLights,
              maxSimultaneousMorphTargets: ID.NUM_MORPH_INFLUENCERS
            };
          if (this._eventInfo.fallbacks = wD, this._eventInfo.fallbackRank = SD, this._eventInfo.defines = ID, this._eventInfo.uniforms = MD, this._eventInfo.attributes = BD, this._eventInfo.samplers = tD, this._eventInfo.uniformBuffersNames = ZD, this._eventInfo.customCode = void 0, this._eventInfo.mesh = CD, this._eventInfo.indexParameters = oD, this._callbackPluginEventGeneric(128, this._eventInfo), MC.d.AddUniformsAndSamplers(MD, tD), WD.c.AddUniforms(MD), WD.c.AddSamplers(tD), (0, SC.e)(MD), this._useVertexPulling) {
            const DD = cD?.geometry;
            DD && (this._vertexPullingMetadata = (0, BC.f)(DD), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((DD, CD) => {
              MD.push(`vp_${CD}_info`)
            })))
          } else this._vertexPullingMetadata = null;
          eD.c && (eD.c.PrepareUniforms(MD, ID), eD.c.PrepareSamplers(tD, ID)), (0, AD.qb)({
            uniformsNames: MD,
            uniformBuffersNames: ZD,
            samplers: tD,
            defines: ID,
            maxSimultaneousLights: this._maxSimultaneousLights,
            shaderLanguage: this._shaderLanguage
          });
          const vD = {};
          this.customShaderNameResolve && (yD = this.customShaderNameResolve(yD, MD, ZD, tD, ID, BD, vD));
          const ND = ID.toString(),
            gD = QD.createEffect(yD, {
              attributes: BD,
              uniformsNames: MD,
              uniformBuffersNames: ZD,
              samplers: tD,
              defines: ND,
              fallbacks: wD,
              onCompiled: pD,
              onError: iD,
              indexParameters: oD,
              processFinalCode: vD.processFinalCode,
              processCodeAfterIncludes: this._eventInfo.customCode,
              multiTarget: ID.PREPASS,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: DD._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, QD);
          return this._eventInfo.customCode = void 0, gD
        }
        _prepareDefines(CD, cD, ID) {
          let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            iD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
          const fD = cD.hasThinInstances,
            bD = this.hq(),
            QD = bD.DZ();
          (0, AD.cb)(bD, CD, ID, !0, this._maxSimultaneousLights, this._disableLighting), ID._needNormals = !0, (0, AD.hb)(bD, ID);
          const wD = this.needAlphaBlendingForMesh(CD) && this.hq().useOrderIndependentTransparency;
          if ((0, AD.nb)(bD, ID, this.canRenderToMRT && !wD), (0, AD.lb)(bD, ID, wD), MC.d.PrepareDefines(QD.currentRenderPassId, CD, ID), ID.METALLICWORKFLOW = this.isMetallicWorkflow(), ID._areTexturesDirty) {
            ID._needUVs = !1;
            for (let DD = 1; DD <= 6; ++DD) ID["MAINUV" + DD] = !1;
            if (bD.texturesEnabled) {
              ID.ALBEDODIRECTUV = 0, ID.BASE_WEIGHTDIRECTUV = 0, ID.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, ID.AMBIENTDIRECTUV = 0, ID.OPACITYDIRECTUV = 0, ID.EMISSIVEDIRECTUV = 0, ID.REFLECTIVITYDIRECTUV = 0, ID.MICROSURFACEMAPDIRECTUV = 0, ID.METALLIC_REFLECTANCEDIRECTUV = 0, ID.REFLECTANCEDIRECTUV = 0, ID.BUMPDIRECTUV = 0, ID.LIGHTMAPDIRECTUV = 0, QD.getCaps().textureLOD && (ID.LODBASEDMICROSFURACE = !0), this._albedoTexture && hD.e.DiffuseTextureEnabled ? ((0, AD.db)(this._albedoTexture, ID, "ALBEDO"), ID.GAMMAALBEDO = this._albedoTexture.gammaSpace) : ID.ALBEDO = !1, this._baseWeightTexture && hD.e.BaseWeightTextureEnabled ? (0, AD.db)(this._baseWeightTexture, ID, "BASE_WEIGHT") : ID.BASE_WEIGHT = !1, this._baseDiffuseRoughnessTexture && hD.e.BaseDiffuseRoughnessTextureEnabled ? (0, AD.db)(this._baseDiffuseRoughnessTexture, ID, "BASE_DIFFUSE_ROUGHNESS") : ID.BASE_DIFFUSE_ROUGHNESS = !1, this._ambientTexture && hD.e.AmbientTextureEnabled ? ((0, AD.db)(this._ambientTexture, ID, "AMBIENT"), ID.AMBIENTINGRAYSCALE = this._useAmbientInGrayScale) : ID.AMBIENT = !1, this._opacityTexture && hD.e.OpacityTextureEnabled ? ((0, AD.db)(this._opacityTexture, ID, "OPACITY"), ID.OPACITYRGB = this._opacityTexture.getAlphaFromRGB) : ID.OPACITY = !1;
              const DD = this._getReflectionTexture(),
                CD = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || QD.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
              (0, AD.$)(bD, DD, ID, this.realTimeFiltering, this.realTimeFilteringQuality, !CD), this._lightmapTexture && hD.e.LightmapTextureEnabled ? ((0, AD.db)(this._lightmapTexture, ID, "LIGHTMAP"), ID.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, ID.GAMMALIGHTMAP = this._lightmapTexture.gammaSpace, ID.RGBDLIGHTMAP = this._lightmapTexture.isRGBD) : ID.LIGHTMAP = !1, this._emissiveTexture && hD.e.EmissiveTextureEnabled ? ((0, AD.db)(this._emissiveTexture, ID, "EMISSIVE"), ID.GAMMAEMISSIVE = this._emissiveTexture.gammaSpace) : ID.EMISSIVE = !1, hD.e.SpecularTextureEnabled ? (this._metallicTexture ? ((0, AD.db)(this._metallicTexture, ID, "REFLECTIVITY"), ID.ROUGHNESSSTOREINMETALMAPALPHA = this._useRoughnessFromMetallicTextureAlpha, ID.ROUGHNESSSTOREINMETALMAPGREEN = !this._useRoughnessFromMetallicTextureAlpha && this._useRoughnessFromMetallicTextureGreen, ID.METALLNESSSTOREINMETALMAPBLUE = this._useMetallnessFromMetallicTextureBlue, ID.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed, ID.REFLECTIVITY_GAMMA = !1) : this._reflectivityTexture ? ((0, AD.db)(this._reflectivityTexture, ID, "REFLECTIVITY"), ID.MICROSURFACEFROMREFLECTIVITYMAP = this._useMicroSurfaceFromReflectivityMapAlpha, ID.MICROSURFACEAUTOMATIC = this._useAutoMicroSurfaceFromReflectivityMap, ID.REFLECTIVITY_GAMMA = this._reflectivityTexture.gammaSpace) : ID.REFLECTIVITY = !1, this._metallicReflectanceTexture || this._reflectanceTexture ? (ID.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = this._useOnlyMetallicFromMetallicReflectanceTexture, this._metallicReflectanceTexture ? ((0, AD.db)(this._metallicReflectanceTexture, ID, "METALLIC_REFLECTANCE"), ID.METALLIC_REFLECTANCE_GAMMA = this._metallicReflectanceTexture.gammaSpace) : ID.METALLIC_REFLECTANCE = !1, this._reflectanceTexture && (!this._metallicReflectanceTexture || this._metallicReflectanceTexture && this._useOnlyMetallicFromMetallicReflectanceTexture) ? ((0, AD.db)(this._reflectanceTexture, ID, "REFLECTANCE"), ID.REFLECTANCE_GAMMA = this._reflectanceTexture.gammaSpace) : ID.REFLECTANCE = !1) : (ID.METALLIC_REFLECTANCE = !1, ID.REFLECTANCE = !1), this._microSurfaceTexture ? (0, AD.db)(this._microSurfaceTexture, ID, "MICROSURFACEMAP") : ID.MICROSURFACEMAP = !1) : (ID.REFLECTIVITY = !1, ID.MICROSURFACEMAP = !1), QD.getCaps().standardDerivatives && this._bumpTexture && hD.e.BumpTextureEnabled && !this._disableBumpMap ? ((0, AD.db)(this._bumpTexture, ID, "BUMP"), this._useParallax && this._albedoTexture && hD.e.DiffuseTextureEnabled ? (ID.PARALLAX = !0, ID.PARALLAX_RHS = bD.useRightHandedSystem, ID.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : ID.PARALLAX = !1, ID.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (ID.BUMP = !1, ID.PARALLAX = !1, ID.PARALLAX_RHS = !1, ID.PARALLAXOCCLUSION = !1, ID.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && hD.e.ReflectionTextureEnabled ? (ID.ENVIRONMENTBRDF = !0, ID.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (ID.ENVIRONMENTBRDF = !1, ID.ENVIRONMENTBRDF_RGBD = !1), this._shouldUseAlphaFromAlbedoTexture() ? ID.ALPHAFROMALBEDO = !0 : ID.ALPHAFROMALBEDO = !1
            }
            ID.SPECULAROVERALPHA = this._useSpecularOverAlpha, this._lightFalloff === DD.LIGHTFALLOFF_STANDARD ? (ID.USEPHYSICALLIGHTFALLOFF = !1, ID.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === DD.LIGHTFALLOFF_GLTF ? (ID.USEPHYSICALLIGHTFALLOFF = !1, ID.USEGLTFLIGHTFALLOFF = !0) : (ID.USEPHYSICALLIGHTFALLOFF = !0, ID.USEGLTFLIGHTFALLOFF = !1), ID.RADIANCEOVERALPHA = this._useRadianceOverAlpha, !this.backFaceCulling && this._twoSidedLighting ? ID.TWOSIDEDLIGHTING = !0 : ID.TWOSIDEDLIGHTING = !1, ID.MIRRORED = !!bD._mirroredCameraPosition, ID.SPECULARAA = QD.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
          }(ID._areTexturesDirty || ID._areMiscDirty) && (ID.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, ID.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, ID.ALPHABLEND = this.needAlphaBlendingForMesh(CD), ID.ALPHAFRESNEL = this._useAlphaFresnel || this._useLinearAlphaFresnel, ID.LINEARALPHAFRESNEL = this._useLinearAlphaFresnel), ID._areTexturesDirty && (ID.TEXTURE_REPETITION_MODE = QD.version > 1 || QD.isWebGPU ? this.textureRepetitionMode : 0), ID._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(ID), ID.FORCENORMALFORWARD = this._forceNormalForward, ID.RADIANCEOCCLUSION = this._useRadianceOcclusion, ID.HORIZONOCCLUSION = this._useHorizonOcclusion, ID._areMiscDirty && ((0, AD.gb)(CD, bD, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(CD), ID, this._applyDecalMapAfterDetailMap, this._useVertexPulling, cD, this._isVertexOutputInvariant), ID.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !CD.isVerticesDataPresent(GD.k.NormalKind), ID.DEBUGMODE = this._debugMode), (0, AD.Z)(bD, QD, this, ID, !!pD, iD, fD), this._eventInfo.defines = ID, this._eventInfo.mesh = CD, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, AD.V)(CD, ID, !0, !0, !0, this._transparencyMode !== DD.PBRMATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
        }
        forceCompilation(DD, CD, cD) {
          const ID = {
            clipPlane: !1,
            useInstances: !1,
            ...cD
          };
          this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
          (() => {
            if (this._breakShaderLoadedCheck) return;
            const cD = new XC(this._eventInfo.defineNames),
              pD = this._prepareEffect(DD, DD, cD, void 0, void 0, ID.useInstances, ID.clipPlane);
            this._onEffectCreatedObservable && (NC.effect = pD, NC.subMesh = null, this._onEffectCreatedObservable.notifyObservers(NC)), pD.isReady() ? CD && CD(this) : pD.onCompileObservable.add((() => {
              CD && CD(this)
            }))
          })()
        }
        buildUniformLayout() {
          const DD = this._uniformBuffer;
          DD.addUniform("vAlbedoInfos", 2), DD.addUniform("vBaseWeightInfos", 2), DD.addUniform("vBaseDiffuseRoughnessInfos", 2), DD.addUniform("vAmbientInfos", 4), DD.addUniform("vOpacityInfos", 2), DD.addUniform("vEmissiveInfos", 2), DD.addUniform("vLightmapInfos", 2), DD.addUniform("vReflectivityInfos", 3), DD.addUniform("vMicroSurfaceSamplerInfos", 2), DD.addUniform("vBumpInfos", 3), DD.addUniform("albedoMatrix", 16), DD.addUniform("baseWeightMatrix", 16), DD.addUniform("baseDiffuseRoughnessMatrix", 16), DD.addUniform("ambientMatrix", 16), DD.addUniform("opacityMatrix", 16), DD.addUniform("emissiveMatrix", 16), DD.addUniform("lightmapMatrix", 16), DD.addUniform("reflectivityMatrix", 16), DD.addUniform("microSurfaceSamplerMatrix", 16), DD.addUniform("bumpMatrix", 16), DD.addUniform("vTangentSpaceParams", 2), DD.addUniform("vAlbedoColor", 4), DD.addUniform("baseWeight", 1), DD.addUniform("baseDiffuseRoughness", 1), DD.addUniform("vLightingIntensity", 4), DD.addUniform("pointSize", 1), DD.addUniform("vReflectivityColor", 4), DD.addUniform("vEmissiveColor", 3), DD.addUniform("vAmbientColor", 3), DD.addUniform("vDebugMode", 2), DD.addUniform("vMetallicReflectanceFactors", 4), DD.addUniform("vMetallicReflectanceInfos", 2), DD.addUniform("metallicReflectanceMatrix", 16), DD.addUniform("vReflectanceInfos", 2), DD.addUniform("reflectanceMatrix", 16), DD.addUniform("cameraInfo", 4), DD.addUniform("vTextureRepetitionHexTilingParams", 4), (0, AD.ob)(DD, !0, !0, !0, !0, !0), super.buildUniformLayout()
        }
        bindForSubMesh(DD, CD, cD) {
          const ID = this.hq(),
            pD = cD.materialDefines;
          if (!pD) return;
          const iD = cD.effect;
          if (!iD) return;
          this._activeEffect = iD, CD.getMeshUniformBuffer().bindToEffect(iD, "Mesh"), CD.transferToEffect(DD);
          const fD = ID.DZ();
          this._uniformBuffer.bindToEffect(iD, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, ID, CD, DD, this.isFrozen), MC.d.Bind(fD.currentRenderPassId, this._activeEffect, CD, DD, this);
          const bD = ID.activeCamera;
          bD ? this._uniformBuffer.updateFloat4("cameraInfo", bD.minZ, bD.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
          const QD = this.textureRepetitionHexTilingParams;
          this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", QD[0], QD[1], QD[2], QD[3]), this._eventInfo.subMesh = cD, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), pD.OBJECTSPACE_NORMALMAP && (DD.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
          const wD = this._mustRebind(ID, iD, cD, CD.visibility),
            SD = fD._features.needToAlwaysBindUniformBuffers;
          (0, AD.d)(CD, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, BC.c)(this._activeEffect, this._vertexPullingMetadata);
          let BD = null;
          const yD = this._uniformBuffer;
          if (wD) {
            if (this.bindViewProjection(iD), BD = this._getReflectionTexture(), !yD.useUbo || !this.isFrozen || !yD.isSync || cD._drawWrapper._forceRebindOnNextCall) {
              if (ID.texturesEnabled && (this._albedoTexture && hD.e.DiffuseTextureEnabled && (yD.updateFloat2("vAlbedoInfos", this._albedoTexture.coordinatesIndex, this._albedoTexture.level), (0, AD.C)(this._albedoTexture, yD, "albedo")), this._baseWeightTexture && hD.e.BaseWeightTextureEnabled && (yD.updateFloat2("vBaseWeightInfos", this._baseWeightTexture.coordinatesIndex, this._baseWeightTexture.level), (0, AD.C)(this._baseWeightTexture, yD, "baseWeight")), this._baseDiffuseRoughnessTexture && hD.e.BaseDiffuseRoughnessTextureEnabled && (yD.updateFloat2("vBaseDiffuseRoughnessInfos", this._baseDiffuseRoughnessTexture.coordinatesIndex, this._baseDiffuseRoughnessTexture.level), (0, AD.C)(this._baseDiffuseRoughnessTexture, yD, "baseDiffuseRoughness")), this._ambientTexture && hD.e.AmbientTextureEnabled && (yD.updateFloat4("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level, this._ambientTextureStrength, this._ambientTextureImpactOnAnalyticalLights), (0, AD.C)(this._ambientTexture, yD, "ambient")), this._opacityTexture && hD.e.OpacityTextureEnabled && (yD.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, AD.C)(this._opacityTexture, yD, "opacity")), this._emissiveTexture && hD.e.EmissiveTextureEnabled && (yD.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, AD.C)(this._emissiveTexture, yD, "emissive")), this._lightmapTexture && hD.e.LightmapTextureEnabled && (yD.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, AD.C)(this._lightmapTexture, yD, "lightmap")), hD.e.SpecularTextureEnabled && (this._metallicTexture ? (yD.updateFloat3("vReflectivityInfos", this._metallicTexture.coordinatesIndex, this._metallicTexture.level, this._ambientTextureStrength), (0, AD.C)(this._metallicTexture, yD, "reflectivity")) : this._reflectivityTexture && (yD.updateFloat3("vReflectivityInfos", this._reflectivityTexture.coordinatesIndex, this._reflectivityTexture.level, 1), (0, AD.C)(this._reflectivityTexture, yD, "reflectivity")), this._metallicReflectanceTexture && (yD.updateFloat2("vMetallicReflectanceInfos", this._metallicReflectanceTexture.coordinatesIndex, this._metallicReflectanceTexture.level), (0, AD.C)(this._metallicReflectanceTexture, yD, "metallicReflectance")), this._reflectanceTexture && pD.REFLECTANCE && (yD.updateFloat2("vReflectanceInfos", this._reflectanceTexture.coordinatesIndex, this._reflectanceTexture.level), (0, AD.C)(this._reflectanceTexture, yD, "reflectance")), this._microSurfaceTexture && (yD.updateFloat2("vMicroSurfaceSamplerInfos", this._microSurfaceTexture.coordinatesIndex, this._microSurfaceTexture.level), (0, AD.C)(this._microSurfaceTexture, yD, "microSurfaceSampler"))), this._bumpTexture && fD.getCaps().standardDerivatives && hD.e.BumpTextureEnabled && !this._disableBumpMap && (yD.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level, this._parallaxScaleBias), (0, AD.C)(this._bumpTexture, yD, "bump"), ID._mirroredCameraPosition ? yD.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : yD.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, AD.l)(ID, pD, yD, this._reflectionColor, BD, this.realTimeFiltering, !0, !0, !0, !0, !0)), this.pointsCloud && yD.updateFloat("pointSize", this.pointSize), pD.METALLICWORKFLOW) {
                sD.j.Color4[0].r = void 0 === this._metallic || null === this._metallic ? 1 : this._metallic, sD.j.Color4[0].g = void 0 === this._roughness || null === this._roughness ? 1 : this._roughness;
                const DD = this.subSurface?._indexOfRefraction ?? 1.5,
                  CD = 1;
                sD.j.Color4[0].b = DD;
                const cD = Math.pow((DD - CD) / (DD + CD), 2);
                sD.j.Color4[0].a = cD, yD.updateDirectColor4("vReflectivityColor", sD.j.Color4[0]), yD.updateColor4("vMetallicReflectanceFactors", this._metallicReflectanceColor, this._metallicF0Factor)
              } else yD.updateColor4("vReflectivityColor", this._reflectivityColor, this._microSurface);
              yD.updateColor3("vEmissiveColor", hD.e.EmissiveTextureEnabled ? this._emissiveColor : sD.d.BlackReadOnly), !pD.SS_REFRACTION && this.subSurface?._linkRefractionWithTransparency ? yD.updateColor4("vAlbedoColor", this._albedoColor, 1) : yD.updateColor4("vAlbedoColor", this._albedoColor, this.alpha), yD.updateFloat("baseWeight", this._baseWeight), yD.updateFloat("baseDiffuseRoughness", this._baseDiffuseRoughness || 0), this._lightingInfos.x = this._directIntensity, this._lightingInfos.y = this._emissiveIntensity, this._lightingInfos.z = this._environmentIntensity * ID.environmentIntensity, this._lightingInfos.w = this._specularIntensity, yD.updateVector4("vLightingIntensity", this._lightingInfos), ID.ambientColor.multiplyToRef(this._ambientColor, this._globalAmbientColor), yD.updateColor3("vAmbientColor", this._globalAmbientColor), yD.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
            }
            ID.texturesEnabled && (this._albedoTexture && hD.e.DiffuseTextureEnabled && yD.setTexture("albedoSampler", this._albedoTexture), this._baseWeightTexture && hD.e.BaseWeightTextureEnabled && yD.setTexture("baseWeightSampler", this._baseWeightTexture), this._baseDiffuseRoughnessTexture && hD.e.BaseDiffuseRoughnessTextureEnabled && yD.setTexture("baseDiffuseRoughnessSampler", this._baseDiffuseRoughnessTexture), this._ambientTexture && hD.e.AmbientTextureEnabled && yD.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && hD.e.OpacityTextureEnabled && yD.setTexture("opacitySampler", this._opacityTexture), (0, AD.n)(ID, pD, yD, BD, this.realTimeFiltering), pD.ENVIRONMENTBRDF && yD.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), this._emissiveTexture && hD.e.EmissiveTextureEnabled && yD.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && hD.e.LightmapTextureEnabled && yD.setTexture("lightmapSampler", this._lightmapTexture), hD.e.SpecularTextureEnabled && (this._metallicTexture ? yD.setTexture("reflectivitySampler", this._metallicTexture) : this._reflectivityTexture && yD.setTexture("reflectivitySampler", this._reflectivityTexture), this._metallicReflectanceTexture && yD.setTexture("metallicReflectanceSampler", this._metallicReflectanceTexture), this._reflectanceTexture && pD.REFLECTANCE && yD.setTexture("reflectanceSampler", this._reflectanceTexture), this._microSurfaceTexture && yD.setTexture("microSurfaceSampler", this._microSurfaceTexture)), this._bumpTexture && fD.getCaps().standardDerivatives && hD.e.BumpTextureEnabled && !this._disableBumpMap && yD.setTexture("bumpSampler", this._bumpTexture)), this.hq().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(CD) && this.hq().depthPeelingRenderer.bind(iD), this._eventInfo.subMesh = cD, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, SC.i)(this._activeEffect, this, ID), this.bindEyePosition(iD)
          } else SD && (this._needToBindSceneUbo = !0);
          !wD && this.isFrozen && !SD || !ID.lightsEnabled || this._disableLighting || (0, AD.r)(ID, CD, this._activeEffect, pD, this._maxSimultaneousLights), !wD && this.isFrozen || ((ID.fogEnabled && CD.applyFog && ID.fogMode !== LD.e.FOGMODE_NONE || BD || this.subSurface.refractionTexture || CD.receiveShadows || pD.PREPASS || pD.CLUSTLIGHT_BATCH) && this.bindView(iD), (0, AD.h)(ID, CD, this._activeEffect, !0), pD.NUM_MORPH_INFLUENCERS && (0, AD.y)(CD, this._activeEffect), pD.BAKED_VERTEX_ANIMATION_TEXTURE && CD.bakedVertexAnimationManager?.bind(iD, pD.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, AD.u)(pD, this._activeEffect, ID)), this._afterBind(CD, this._activeEffect, cD), yD.update()
        }
        getAnimatables() {
          const DD = super.getAnimatables();
          return this._albedoTexture && this._albedoTexture.animations && this._albedoTexture.animations.length > 0 && DD.push(this._albedoTexture), this._baseWeightTexture && this._baseWeightTexture.animations && this._baseWeightTexture.animations.length > 0 && DD.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && this._baseDiffuseRoughnessTexture.animations && this._baseDiffuseRoughnessTexture.animations.length > 0 && DD.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && DD.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && DD.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && DD.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && DD.push(this._emissiveTexture), this._metallicTexture && this._metallicTexture.animations && this._metallicTexture.animations.length > 0 ? DD.push(this._metallicTexture) : this._reflectivityTexture && this._reflectivityTexture.animations && this._reflectivityTexture.animations.length > 0 && DD.push(this._reflectivityTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && DD.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && DD.push(this._lightmapTexture), this._metallicReflectanceTexture && this._metallicReflectanceTexture.animations && this._metallicReflectanceTexture.animations.length > 0 && DD.push(this._metallicReflectanceTexture), this._reflectanceTexture && this._reflectanceTexture.animations && this._reflectanceTexture.animations.length > 0 && DD.push(this._reflectanceTexture), this._microSurfaceTexture && this._microSurfaceTexture.animations && this._microSurfaceTexture.animations.length > 0 && DD.push(this._microSurfaceTexture), DD
        }
        _getReflectionTexture() {
          return this._reflectionTexture ? this._reflectionTexture : this.hq().environmentTexture
        }
        getActiveTextures() {
          const DD = super.getActiveTextures();
          return this._albedoTexture && DD.push(this._albedoTexture), this._baseWeightTexture && DD.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && DD.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && DD.push(this._ambientTexture), this._opacityTexture && DD.push(this._opacityTexture), this._reflectionTexture && DD.push(this._reflectionTexture), this._emissiveTexture && DD.push(this._emissiveTexture), this._reflectivityTexture && DD.push(this._reflectivityTexture), this._metallicTexture && DD.push(this._metallicTexture), this._metallicReflectanceTexture && DD.push(this._metallicReflectanceTexture), this._reflectanceTexture && DD.push(this._reflectanceTexture), this._microSurfaceTexture && DD.push(this._microSurfaceTexture), this._bumpTexture && DD.push(this._bumpTexture), this._lightmapTexture && DD.push(this._lightmapTexture), DD
        }
        hasTexture(DD) {
          return !!super.hasTexture(DD) || (this._albedoTexture === DD || (this._baseWeightTexture === DD || (this._baseDiffuseRoughnessTexture === DD || (this._ambientTexture === DD || (this._opacityTexture === DD || (this._reflectionTexture === DD || (this._emissiveTexture === DD || (this._reflectivityTexture === DD || (this._metallicTexture === DD || (this._metallicReflectanceTexture === DD || (this._reflectanceTexture === DD || (this._microSurfaceTexture === DD || (this._bumpTexture === DD || this._lightmapTexture === DD)))))))))))))
        }
        setPrePassRenderer() {
          if (!this.subSurface?.isScatteringEnabled) return !1;
          const DD = this.hq().enableSubSurfaceForPrePass();
          return DD && (DD.enabled = !0), !0
        }
        dispose(DD, CD) {
          this._breakShaderLoadedCheck = !0, CD && (this._environmentBRDFTexture && this.hq().environmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._albedoTexture?.dispose(), this._baseWeightTexture?.dispose(), this._baseDiffuseRoughnessTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._metallicTexture?.dispose(), this._reflectivityTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._metallicReflectanceTexture?.dispose(), this._reflectanceTexture?.dispose(), this._microSurfaceTexture?.dispose()), this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(DD, CD)
        }
      }, CD = new WeakMap, (() => {
        const CD = "function" === typeof Symbol && Symbol.metadata ? Object.create(pD[Symbol.metadata] ?? null) : void 0;
        ID = [(0, UD.c)("_markAllSubMeshesAsMiscDirty")], (0, HD.k)(DD, null, ID, {
          kind: "accessor",
          name: "debugMode",
          static: !1,
          private: !1,
          access: {
            has: DD => "debugMode" in DD,
            get: DD => DD.debugMode,
            set: (DD, CD) => {
              DD.debugMode = CD
            }
          },
          metadata: CD
        }, fD, bD), CD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: CD
        })
      })(), DD.PBRMATERIAL_OPAQUE = iD.d.MATERIAL_OPAQUE, DD.PBRMATERIAL_ALPHATEST = iD.d.MATERIAL_ALPHATEST, DD.PBRMATERIAL_ALPHABLEND = iD.d.MATERIAL_ALPHABLEND, DD.PBRMATERIAL_ALPHATESTANDBLEND = iD.d.MATERIAL_ALPHATESTANDBLEND, DD.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = 0, DD.LIGHTFALLOFF_PHYSICAL = 0, DD.LIGHTFALLOFF_GLTF = 1, DD.LIGHTFALLOFF_STANDARD = 2, DD.ForceGLSL = !1, DD._ShaderLoader = new yC.e((() => [Promise.all([cD.e(307), cD.e(318)]).then((() => cD(60746))), Promise.all([cD.e(312), cD.e(308), cD.e(372), cD.e(321), cD.e(371)]).then((() => cD(60764)))]), (() => [Promise.all([cD.e(326), cD.e(328), cD.e(335)]).then((() => cD(60827))), Promise.all([cD.e(326), cD.e(329), cD.e(375), cD.e(339), cD.e(374)]).then((() => cD(60856)))])), DD
    })();
    Object.getOwnPropertyDescriptor(nC.prototype, "decalMap") || Object.defineProperty(nC.prototype, "decalMap", (0, vC.g)("PBRBaseMaterial", "decalMap")), (0, cD(40949).d)();
    var OC = cD(39174);
    var PC = cD(39245),
      HC = cD(40924),
      UC = cD(38979),
      xC = cD(38991),
      qC = cD(39097);
    let JC = !1;
    const KC = new sD.e,
      aC = new sD.e;
    class VC extends HC.b {
      get isSupported() {
        return this._engine?.getCaps().drawBuffersExtension ?? !1
      }
      get textures() {
        return this._textures
      }
      get count() {
        return this._count
      }
      get depthTexture() {
        return this._textures[this._textures.length - 1]
      }
      set wrapU(DD) {
        if (this._textures)
          for (let CD = 0; CD < this._textures.length; CD++) this._textures[CD].wrapU = DD
      }
      set wrapV(DD) {
        if (this._textures)
          for (let CD = 0; CD < this._textures.length; CD++) this._textures[CD].wrapV = DD
      }
      constructor(DD, CD, cD, ID, pD, iD) {
        const fD = !(!pD || !pD.generateMipMaps) && pD.generateMipMaps,
          bD = !(!pD || !pD.generateDepthTexture) && pD.generateDepthTexture,
          QD = pD && pD.depthTextureFormat ? pD.depthTextureFormat : 15,
          wD = !pD || void 0 === pD.doNotChangeAspectRatio || pD.doNotChangeAspectRatio,
          SD = !(!pD || !pD.drawOnlyOnFirstAttachmentByDefault) && pD.drawOnlyOnFirstAttachmentByDefault;
        if (super(DD, CD, ID, fD, wD, void 0, void 0, void 0, void 0, void 0, void 0, void 0, !0), JC || (JC = !0, xC.ThinEngine.prototype.restoreSingleAttachment = function() {
            const DD = this._gl;
            this.bindAttachments([DD.BACK])
          }, xC.ThinEngine.prototype.restoreSingleAttachmentForRenderTarget = function() {
            const DD = this._gl;
            this.bindAttachments([DD.COLOR_ATTACHMENT0])
          }, xC.ThinEngine.prototype.buildTextureLayout = function(DD) {
            let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const cD = this._gl,
              ID = [];
            if (CD) ID.push(cD.BACK);
            else
              for (let pD = 0; pD < DD.length; pD++) DD[pD] ? ID.push(cD["COLOR_ATTACHMENT" + pD]) : ID.push(cD.NONE);
            return ID
          }, xC.ThinEngine.prototype.bindAttachments = function(DD) {
            const CD = this._gl,
              cD = this._currentRenderTarget?.textures;
            if (this._integerMRTAttachmentsMask = 0, cD)
              for (let ID = 0; ID < DD.length; ID++) DD[ID] !== CD.NONE && cD[ID] && (0, qC.i)(cD[ID].format) && (this._integerMRTAttachmentsMask |= 1 << ID);
            CD.drawBuffers(DD)
          }, xC.ThinEngine.prototype.clearAttachments = function(DD, CD, cD, ID) {
            let pD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              iD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            const fD = this._currentRenderTarget?.textures;
            let bD = !1;
            if (cD && DD && fD)
              for (let QD = 0; QD < CD.length; QD++) {
                const DD = fD[QD];
                if (CD[QD] !== this._gl.NONE && DD && (0, qC.i)(DD.format)) {
                  if (this._webGLVersion < 2) throw new Error("ThinEngine.clearAttachments: integer MRT attachments require WebGL2");
                  bD = !0;
                  break
                }
              }
            if (!bD || !DD || !fD) return this.bindAttachments(CD), void this.clear(DD, cD, ID, pD, iD);
            this.bindAttachments(CD), this._applyColorWriteState();
            for (let QD = 0; QD < CD.length; QD++) {
              const cD = fD[QD];
              if (CD[QD] !== this._gl.NONE && cD) {
                let CD = DD;
                if ((0, qC.i)(cD.format)) {
                  const ID = (0, qC.k)(cD.type);
                  CD = ID ? KC : aC;
                  const pD = ID ? 255 : 1;
                  CD.r = Math.round(DD.r * pD), CD.g = Math.round(DD.g * pD), CD.b = Math.round(DD.b * pD), CD.a = Math.round(DD.a * pD)
                }
                this._clearColorAttachment(QD, CD, cD.format, cD.type)
              }
            }
            if (ID || pD) {
              const DD = this._integerMRTAttachmentsMask;
              this._integerMRTAttachmentsMask = 0;
              try {
                this.clear(null, !1, ID, pD, iD)
              } finally {
                this._integerMRTAttachmentsMask = DD
              }
            }
          }, xC.ThinEngine.prototype.unBindMultiColorAttachmentFramebuffer = function(DD) {
            let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              cD = arguments.length > 2 ? arguments[2] : void 0;
            this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, DD.disableAutomaticMSAAResolve || this.resolveMultiFramebuffer(DD), CD || this.generateMipMapsMultiFramebuffer(DD), cD && (DD._MSAAFramebuffer && this._bindUnboundFramebuffer(DD._framebuffer), cD()), this._bindUnboundFramebuffer(null)
          }, xC.ThinEngine.prototype.createMultipleRenderTarget = function(DD, CD) {
            let cD, ID = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              pD = !1,
              iD = !0,
              fD = !1,
              bD = !1,
              QD = 1,
              wD = 1,
              SD = [],
              BD = [],
              yD = [],
              MD = [],
              tD = [],
              ZD = [],
              oD = [],
              vD = [],
              ND = [],
              gD = !1;
            const XD = this._createHardwareRenderTargetWrapper(!0, !1, DD);
            void 0 !== CD && (pD = void 0 !== CD.generateMipMaps && CD.generateMipMaps, iD = void 0 === CD.generateDepthBuffer || CD.generateDepthBuffer, fD = void 0 !== CD.generateStencilBuffer && CD.generateStencilBuffer, bD = void 0 !== CD.generateDepthTexture && CD.generateDepthTexture, QD = CD.bfD ?? 1, wD = CD.samples ?? wD, SD = CD.types || SD, BD = CD.samplingModes || BD, yD = CD.useSRGBBuffers || yD, MD = CD.formats || MD, tD = CD.targetTypes || tD, ZD = CD.faceIndex || ZD, oD = CD.layerIndex || oD, vD = CD.layerCounts || vD, ND = CD.labels || ND, gD = CD.dontCreateTextures ?? !1, this.JZ > 1 && (13 === CD.depthTextureFormat || 17 === CD.depthTextureFormat || 16 === CD.depthTextureFormat || 14 === CD.depthTextureFormat || 18 === CD.depthTextureFormat) && (cD = CD.depthTextureFormat)), void 0 === cD && (cD = fD ? 13 : 14);
            const mD = this._gl,
              nD = this._currentFramebuffer,
              OD = mD.createFramebuffer();
            this._bindUnboundFramebuffer(OD);
            const PD = DD.width ?? DD,
              HD = DD.height ?? DD,
              UD = [],
              qD = [],
              JD = this.JZ > 1 && (13 === cD || 17 === cD || 18 === cD);
            XD.label = CD?.label ?? "MultiRenderTargetWrapper", XD._framebuffer = OD, XD._generateDepthBuffer = bD || iD, XD._generateStencilBuffer = bD ? JD : fD, XD._depthStencilBuffer = this._setupFramebufferDepthAttachments(XD._generateStencilBuffer, XD._generateDepthBuffer, PD, HD, 1, cD), XD._attachments = qD;
            for (let KD = 0; KD < QD; KD++) {
              let DD = BD[KD] || 3,
                CD = SD[KD] || 0,
                cD = yD[KD] || !1;
              const ID = MD[KD] || 5,
                iD = tD[KD] || 3553,
                fD = vD[KD] ?? 1;
              (1 !== CD || this._caps.textureFloatLinearFiltering) && (2 !== CD || this._caps.textureHalfFloatLinearFiltering) || (DD = 1);
              const bD = this._getSamplingParameters(DD, pD);
              1 !== CD || this._caps.textureFloat || (CD = 0, xD.e.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type")), cD = cD && this._caps.supportSRGBBuffers && (this.JZ > 1 || this.isWebGPU);
              const QD = this.JZ > 1,
                wD = mD[QD ? "COLOR_ATTACHMENT" + KD : "COLOR_ATTACHMENT" + KD + "_WEBGL"];
              if (qD.push(wD), -1 === iD || gD) continue;
              const ZD = new UC.c(this, 6);
              UD[KD] = ZD, mD.activeTexture(mD["TEXTURE" + KD]), mD.bindTexture(iD, ZD._hardwareTexture.underlyingResource), mD.texParameteri(iD, mD.TEXTURE_MAG_FILTER, bD.mag), mD.texParameteri(iD, mD.TEXTURE_MIN_FILTER, bD.min), mD.texParameteri(iD, mD.TEXTURE_WRAP_S, mD.CLAMP_TO_EDGE), mD.texParameteri(iD, mD.TEXTURE_WRAP_T, mD.CLAMP_TO_EDGE);
              const oD = this._getRGBABufferInternalSizedFormat(CD, ID, cD),
                nD = this._getInternalFormat(ID),
                OD = this._getWebGLTextureType(CD);
              if (!QD || 35866 !== iD && 32879 !== iD)
                if (34067 === iD) {
                  for (let DD = 0; DD < 6; DD++) mD.texImage2D(mD.TEXTURE_CUBE_MAP_POSITIVE_X + DD, 0, oD, PD, HD, 0, nD, OD, null);
                  ZD.isCube = !0
                } else mD.texImage2D(mD.TEXTURE_2D, 0, oD, PD, HD, 0, nD, OD, null);
              else 35866 === iD ? ZD.is2DArray = !0 : ZD.is3D = !0, ZD.baseDepth = ZD.depth = fD, mD.texImage3D(iD, 0, oD, PD, HD, fD, 0, nD, OD, null);
              pD && mD.generateMipmap(iD), this._bindTextureDirectly(iD, null), ZD.baseWidth = PD, ZD.baseHeight = HD, ZD.width = PD, ZD.height = HD, ZD.isReady = !0, ZD.samples = 1, ZD.generateMipMaps = pD, ZD.samplingMode = DD, ZD.type = CD, ZD._useSRGBBuffer = cD, ZD.format = ID, ZD.label = ND[KD] ?? XD.label + "-Texture" + KD, this._internalTexturesCache.push(ZD)
            }
            if (bD && this._caps.depthTextureExtension && !gD) {
              const DD = new UC.c(this, 14);
              let CD = 5,
                ID = mD.DEPTH_COMPONENT16,
                iD = mD.DEPTH_COMPONENT,
                fD = mD.UNSIGNED_SHORT,
                bD = mD.DEPTH_ATTACHMENT;
              this.JZ < 2 ? ID = mD.DEPTH_COMPONENT : 14 === cD ? (CD = 1, fD = mD.FLOAT, ID = mD.DEPTH_COMPONENT32F) : 18 === cD ? (CD = 0, fD = mD.FLOAT_32_UNSIGNED_INT_24_8_REV, ID = mD.DEPTH32F_STENCIL8, iD = mD.DEPTH_STENCIL, bD = mD.DEPTH_STENCIL_ATTACHMENT) : 16 === cD ? (CD = 0, fD = mD.UNSIGNED_INT, ID = mD.DEPTH_COMPONENT24, bD = mD.DEPTH_ATTACHMENT) : 13 !== cD && 17 !== cD || (CD = 12, fD = mD.UNSIGNED_INT_24_8, ID = mD.DEPTH24_STENCIL8, iD = mD.DEPTH_STENCIL, bD = mD.DEPTH_STENCIL_ATTACHMENT), this._bindTextureDirectly(mD.TEXTURE_2D, DD, !0), mD.texParameteri(mD.TEXTURE_2D, mD.TEXTURE_MAG_FILTER, mD.NEAREST), mD.texParameteri(mD.TEXTURE_2D, mD.TEXTURE_MIN_FILTER, mD.NEAREST), mD.texParameteri(mD.TEXTURE_2D, mD.TEXTURE_WRAP_S, mD.CLAMP_TO_EDGE), mD.texParameteri(mD.TEXTURE_2D, mD.TEXTURE_WRAP_T, mD.CLAMP_TO_EDGE), mD.texImage2D(mD.TEXTURE_2D, 0, ID, PD, HD, 0, iD, fD, null), mD.framebufferTexture2D(mD.FRAMEBUFFER, bD, mD.TEXTURE_2D, DD._hardwareTexture.underlyingResource, 0), this._bindTextureDirectly(mD.TEXTURE_2D, null), XD._depthStencilTexture = DD, XD._depthStencilTextureWithStencil = JD, DD.baseWidth = PD, DD.baseHeight = HD, DD.width = PD, DD.height = HD, DD.isReady = !0, DD.samples = 1, DD.generateMipMaps = pD, DD.samplingMode = 1, DD.format = cD, DD.type = CD, DD.label = XD.label + "-DepthStencil", UD[QD] = DD, this._internalTexturesCache.push(DD)
            }
            if (XD.setTextures(UD), ID && mD.drawBuffers(qD), this._bindUnboundFramebuffer(nD), XD.setLayerAndFaceIndices(oD, ZD), this.resetTextureCache(), gD) {
              if (wD > 1) {
                const DD = mD.createFramebuffer();
                if (!DD) throw new Error("Unable to create multi sampled framebuffer");
                XD._samples = wD, XD._MSAAFramebuffer = DD, QD > 0 && ID && (this._bindUnboundFramebuffer(DD), mD.drawBuffers(qD), this._bindUnboundFramebuffer(nD))
              }
            } else this.updateMultipleRenderTargetTextureSampleCount(XD, wD, ID);
            return XD
          }, xC.ThinEngine.prototype.updateMultipleRenderTargetTextureSampleCount = function(DD, CD) {
            let cD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (this.JZ < 2 || !DD) return 1;
            if (DD.samples === CD) return CD;
            const ID = this._gl;
            CD = Math.min(CD, this.getCaps().maxMSAASamples), DD._depthStencilBuffer && (ID.deleteRenderbuffer(DD._depthStencilBuffer), DD._depthStencilBuffer = null), DD._MSAAFramebuffer && (ID.deleteFramebuffer(DD._MSAAFramebuffer), DD._MSAAFramebuffer = null);
            const pD = DD._attachments.length;
            for (let fD = 0; fD < pD; fD++) {
              const CD = DD.textures[fD]._hardwareTexture;
              CD?.releaseMSAARenderBuffers()
            }
            if (CD > 1 && "function" === typeof ID.renderbufferStorageMultisample) {
              const iD = ID.createFramebuffer();
              if (!iD) throw new Error("Unable to create multi sampled framebuffer");
              DD._MSAAFramebuffer = iD, this._bindUnboundFramebuffer(iD);
              const fD = [];
              for (let cD = 0; cD < pD; cD++) {
                const pD = DD.textures[cD],
                  iD = pD._hardwareTexture,
                  bD = ID[this.JZ > 1 ? "COLOR_ATTACHMENT" + cD : "COLOR_ATTACHMENT" + cD + "_WEBGL"],
                  QD = this._createRenderBuffer(pD.width, pD.height, CD, -1, this._getRGBABufferInternalSizedFormat(pD.type, pD.format, pD._useSRGBBuffer), bD);
                if (!QD) throw new Error("Unable to create multi sampled framebuffer");
                iD.addMSAARenderBuffer(QD), pD.samples = CD, fD.push(bD)
              }
              cD && ID.drawBuffers(fD)
            } else this._bindUnboundFramebuffer(DD._framebuffer);
            const iD = DD._depthStencilTexture ? DD._depthStencilTexture.format : void 0;
            return DD._depthStencilBuffer = this._setupFramebufferDepthAttachments(DD._generateStencilBuffer, DD._generateDepthBuffer, DD.width, DD.height, CD, iD), this._bindUnboundFramebuffer(null), DD._samples = CD, CD
          }, xC.ThinEngine.prototype.generateMipMapsMultiFramebuffer = function(DD) {
            const CD = DD,
              cD = this._gl;
            if (CD.isMulti)
              for (let ID = 0; ID < CD._attachments.length; ID++) {
                const DD = CD.textures[ID];
                !DD?.generateMipMaps || DD?.isCube || DD?.is3D || (this._bindTextureDirectly(cD.TEXTURE_2D, DD, !0), cD.generateMipmap(cD.TEXTURE_2D), this._bindTextureDirectly(cD.TEXTURE_2D, null))
              }
          }, xC.ThinEngine.prototype.resolveMultiFramebuffer = function(DD) {
            const CD = DD,
              cD = this._gl;
            if (!CD._MSAAFramebuffer || !CD.isMulti) return;
            let ID = CD.resolveMSAAColors ? cD.COLOR_BUFFER_BIT : 0;
            ID |= CD._generateDepthBuffer && CD.resolveMSAADepth ? cD.DEPTH_BUFFER_BIT : 0, ID |= CD._generateStencilBuffer && CD.resolveMSAAStencil ? cD.STENCIL_BUFFER_BIT : 0;
            const pD = CD._attachments,
              iD = pD.length;
            cD.bindFramebuffer(cD.READ_FRAMEBUFFER, CD._MSAAFramebuffer), cD.bindFramebuffer(cD.DRAW_FRAMEBUFFER, CD._framebuffer);
            for (let fD = 0; fD < iD; fD++) {
              const DD = CD.textures[fD];
              for (let CD = 0; CD < iD; CD++) pD[CD] = cD.NONE;
              pD[fD] = cD[this.JZ > 1 ? "COLOR_ATTACHMENT" + fD : "COLOR_ATTACHMENT" + fD + "_WEBGL"], cD.readBuffer(pD[fD]), cD.drawBuffers(pD), cD.blitFramebuffer(0, 0, DD.width, DD.height, 0, 0, DD.width, DD.height, ID, cD.NEAREST)
            }
            for (let fD = 0; fD < iD; fD++) pD[fD] = cD[this.JZ > 1 ? "COLOR_ATTACHMENT" + fD : "COLOR_ATTACHMENT" + fD + "_WEBGL"];
            cD.drawBuffers(pD), cD.bindFramebuffer(this._gl.FRAMEBUFFER, CD._MSAAFramebuffer)
          }), !this.isSupported) return void this.dispose();
        this._textureNames = iD;
        const BD = [],
          yD = [],
          MD = [],
          tD = [],
          ZD = [],
          oD = [],
          vD = [],
          ND = [];
        this._initTypes(cD, BD, yD, MD, tD, ZD, oD, vD, ND, pD);
        const gD = !pD || void 0 === pD.generateDepthBuffer || pD.generateDepthBuffer,
          XD = !(!pD || void 0 === pD.generateStencilBuffer) && pD.generateStencilBuffer,
          mD = pD && pD.samples ? pD.samples : 1;
        this._multiRenderTargetOptions = {
          samplingModes: yD,
          generateMipMaps: fD,
          generateDepthBuffer: gD,
          generateStencilBuffer: XD,
          generateDepthTexture: bD,
          depthTextureFormat: QD,
          types: BD,
          bfD: cD,
          useSRGBBuffers: MD,
          samples: mD,
          formats: tD,
          targetTypes: ZD,
          faceIndex: oD,
          layerIndex: vD,
          layerCounts: ND,
          labels: iD,
          label: DD
        }, this._count = cD, this._drawOnlyOnFirstAttachmentByDefault = SD, cD > 0 && (this._createInternalTextures(), this._createTextures(iD))
      }
      _initTypes(DD, CD, cD, ID, pD, iD, fD, bD, QD, wD) {
        for (let SD = 0; SD < DD; SD++) wD && wD.types && void 0 !== wD.types[SD] ? CD.push(wD.types[SD]) : CD.push(wD && wD.defaultType ? wD.defaultType : 0), wD && wD.samplingModes && void 0 !== wD.samplingModes[SD] ? cD.push(wD.samplingModes[SD]) : cD.push(JD.c.BILINEAR_SAMPLINGMODE), wD && wD.useSRGBBuffers && void 0 !== wD.useSRGBBuffers[SD] ? ID.push(wD.useSRGBBuffers[SD]) : ID.push(!1), wD && wD.formats && void 0 !== wD.formats[SD] ? pD.push(wD.formats[SD]) : pD.push(5), wD && wD.targetTypes && void 0 !== wD.targetTypes[SD] ? iD.push(wD.targetTypes[SD]) : iD.push(3553), wD && wD.faceIndex && void 0 !== wD.faceIndex[SD] ? fD.push(wD.faceIndex[SD]) : fD.push(0), wD && wD.layerIndex && void 0 !== wD.layerIndex[SD] ? bD.push(wD.layerIndex[SD]) : bD.push(0), wD && wD.layerCounts && void 0 !== wD.layerCounts[SD] ? QD.push(wD.layerCounts[SD]) : QD.push(1)
      }
      _createInternaTextureIndexMapping() {
        const DD = {},
          CD = [];
        if (!this._renderTarget) return CD;
        const cD = this._renderTarget.textures;
        for (let ID = 0; ID < cD.length; ID++) {
          const pD = cD[ID];
          if (!pD) continue;
          const iD = DD[pD.uniqueId];
          void 0 !== iD ? CD[ID] = iD : DD[pD.uniqueId] = ID
        }
        return CD
      }
      _rebuild() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cD = arguments.length > 2 ? arguments[2] : void 0;
        if (this._count < 1 || DD) return;
        const ID = this._createInternaTextureIndexMapping();
        this.releaseInternalTextures(), this._createInternalTextures(), CD && (this._releaseTextures(), this._createTextures(cD));
        const pD = this._renderTarget.textures;
        for (let iD = 0; iD < pD.length; iD++) {
          const DD = this._textures[iD];
          void 0 !== ID[iD] && this._renderTarget.setTexture(pD[ID[iD]], iD), DD._texture = pD[iD], DD._texture && (DD._noMipmap = !DD._texture.useMipMaps, DD._useSRGBBuffer = DD._texture._useSRGBBuffer)
        }
        1 !== this.samples && this._renderTarget.setSamples(this.samples, !this._drawOnlyOnFirstAttachmentByDefault, !0)
      }
      _createInternalTextures() {
        this._renderTarget = this._getEngine().createMultipleRenderTarget(this._size, this._multiRenderTargetOptions, !this._drawOnlyOnFirstAttachmentByDefault), this._texture = this._renderTarget.texture
      }
      _releaseTextures() {
        if (this._textures)
          for (let DD = 0; DD < this._textures.length; DD++) this._textures[DD]._texture = null, this._textures[DD].dispose()
      }
      _createTextures(DD) {
        const CD = this._renderTarget.textures;
        this._textures = [];
        for (let cD = 0; cD < CD.length; cD++) {
          const ID = new JD.c(null, this.hq());
          DD?.[cD] && (ID.name = DD[cD]), ID._texture = CD[cD], ID._texture && (ID._noMipmap = !ID._texture.useMipMaps, ID._useSRGBBuffer = ID._texture._useSRGBBuffer), this._textures.push(ID)
        }
      }
      setInternalTexture(DD, CD) {
        let cD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this.renderTarget && (0 === CD && (this._texture = DD), this.renderTarget.setTexture(DD, CD, cD), this.textures[CD] || (this.textures[CD] = new JD.c(null, this.hq()), this.textures[CD].name = this._textureNames?.[CD] ?? this.textures[CD].name), this.textures[CD]._texture = DD, this.textures[CD]._noMipmap = !DD.useMipMaps, this.textures[CD]._useSRGBBuffer = DD._useSRGBBuffer, this._count = this.renderTarget.textures ? this.renderTarget.textures.length : 0, this._multiRenderTargetOptions.types && (this._multiRenderTargetOptions.types[CD] = DD.type), this._multiRenderTargetOptions.samplingModes && (this._multiRenderTargetOptions.samplingModes[CD] = DD.samplingMode), this._multiRenderTargetOptions.useSRGBBuffers && (this._multiRenderTargetOptions.useSRGBBuffers[CD] = DD._useSRGBBuffer), this._multiRenderTargetOptions.targetTypes && -1 !== this._multiRenderTargetOptions.targetTypes[CD])) {
          let cD;
          cD = DD.is2DArray ? 35866 : DD.isCube ? 34067 : DD.is3D ? 32879 : 3553, this._multiRenderTargetOptions.targetTypes[CD] = cD
        }
      }
      setLayerAndFaceIndex(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        this.textures[DD] && this.renderTarget && (this._multiRenderTargetOptions.layerIndex && (this._multiRenderTargetOptions.layerIndex[DD] = CD), this._multiRenderTargetOptions.faceIndex && (this._multiRenderTargetOptions.faceIndex[DD] = cD), this.renderTarget.setLayerAndFaceIndex(DD, CD, cD))
      }
      setLayerAndFaceIndices(DD, CD) {
        this.renderTarget && (this._multiRenderTargetOptions.layerIndex = DD, this._multiRenderTargetOptions.faceIndex = CD, this.renderTarget.setLayerAndFaceIndices(DD, CD))
      }
      get samples() {
        return this._samples
      }
      set samples(DD) {
        this._renderTarget ? this._samples = this._renderTarget.setSamples(DD) : this._samples = DD
      }
      resize(DD) {
        this._processSizeParameter(DD), this._rebuild(!1, void 0, this._textureNames)
      }
      updateCount(DD, CD, cD) {
        this._multiRenderTargetOptions.bfD = DD, this._count = DD;
        const ID = [],
          pD = [],
          iD = [],
          fD = [],
          bD = [],
          QD = [],
          wD = [],
          SD = [];
        this._textureNames = cD, this._initTypes(DD, ID, pD, iD, fD, bD, QD, wD, SD, CD), this._multiRenderTargetOptions.types = ID, this._multiRenderTargetOptions.samplingModes = pD, this._multiRenderTargetOptions.useSRGBBuffers = iD, this._multiRenderTargetOptions.formats = fD, this._multiRenderTargetOptions.targetTypes = bD, this._multiRenderTargetOptions.faceIndex = QD, this._multiRenderTargetOptions.layerIndex = wD, this._multiRenderTargetOptions.layerCounts = SD, this._multiRenderTargetOptions.labels = cD, this._rebuild(!1, !0, cD)
      }
      _unbindFrameBuffer(DD, CD) {
        this._renderTarget && DD.unBindMultiColorAttachmentFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(CD)
        }))
      }
      dispose() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._releaseTextures(), DD ? this._texture = null : this.releaseInternalTextures(), super.dispose()
      }
      releaseInternalTextures() {
        const DD = this._renderTarget?.textures;
        if (DD) {
          for (let CD = DD.length - 1; CD >= 0; CD--) this._textures[CD]._texture = null;
          this._renderTarget?.dispose(), this._renderTarget = null
        }
      }
    }
    var zC = cD(39315);
    class jC {
      constructor(DD) {
        this.name = zC.c.NAME_GEOMETRYBUFFERRENDERER, this.wo = DD
      }
      register() {
        this.wo._gatherRenderTargetsStage.registerStep(zC.c.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER, this, this._gatherRenderTargets)
      }
      rebuild() {}
      dispose() {}
      _gatherRenderTargets(DD) {
        this.wo._geometryBufferRenderer && DD.push(this.wo._geometryBufferRenderer.getGBuffer())
      }
    }
    let lC = !1;
    var LC;
    ! function(DD) {
      DD[DD.Small = 0] = "Small", DD[DD.Medium = 1] = "Medium", DD[DD.Large = 2] = "Large", DD[DD.ExtraLarge = 3] = "ExtraLarge"
    }(LC || (LC = {}));
    const TC = ["diffuseSampler", "bumpSampler", "reflectivitySampler", "albedoSampler", "morphTargets", "boneSampler", "transmissionWeightSampler", "subsurfaceWeightSampler", "iblShadowSampler"],
      GC = ["world", "mBones", "viewProjection", "diffuseMatrix", "alphaCutOff", "view", "previousWorld", "previousViewProjection", "mPreviousBones", "bumpMatrix", "reflectivityMatrix", "albedoMatrix", "reflectivityColor", "albedoColor", "reflectionMatrix", "vTransmissionWeight", "vSubsurfaceWeight", "vEyePosition", "vTransmissionScatterAnisotropy", "vSubsurfaceScatterAnisotropy", "shadowTextureSize", "metallic", "glossiness", "vTangentSpaceParams", "vBumpInfos", "morphTargetInfluences", "morphTargetCount", "morphTargetTextureInfo", "morphTargetTextureIndices", "boneTextureInfo", "objectId", "meshBlendTag"];
    class RC {
      get renderTransparentMeshes() {
        return this._renderTransparentMeshes
      }
      set renderTransparentMeshes(DD) {
        if (DD && this._enableMeshBlendTag && !this._scene.DZ().getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
        this._renderTransparentMeshes = DD
      }
      get normalsAreUnsigned() {
        return this._normalsAreUnsigned
      }
      _linkPrePassRenderer(DD) {
        if (this._enableObjectId || this._enableMeshBlendTag) throw new Error("GeometryBufferRenderer: object ID and mesh-blending tag textures are not supported when linked to the PrePassRenderer");
        this._linkedWithPrePass = !0, this._prePassRenderer = DD, this._multiRenderTarget && (this._multiRenderTarget.onClearObservable.clear(), this._multiRenderTarget.onClearObservable.add((() => {})))
      }
      _unlinkPrePassRenderer() {
        this._linkedWithPrePass = !1, this._createRenderTargets()
      }
      _resetLayout() {
        this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableReflectivity = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._attachmentsFromPrePass = []
      }
      _forceTextureType(DD, CD) {
        DD === RC.POSITION_TEXTURE_TYPE ? (this._positionIndex = CD, this._enablePosition = !0) : DD === RC.VELOCITY_TEXTURE_TYPE ? (this._velocityIndex = CD, this._enableVelocity = !0) : DD === RC.VELOCITY_LINEAR_TEXTURE_TYPE ? (this._velocityLinearIndex = CD, this._enableVelocityLinear = !0) : DD === RC.REFLECTIVITY_TEXTURE_TYPE ? (this._reflectivityIndex = CD, this._enableReflectivity = !0) : DD === RC.DEPTH_TEXTURE_TYPE ? (this._depthIndex = CD, this._enableDepth = !0) : DD === RC.NORMAL_TEXTURE_TYPE ? (this._normalIndex = CD, this._enableNormal = !0) : DD === RC.SCREENSPACE_DEPTH_TEXTURE_TYPE ? (this._screenspaceDepthIndex = CD, this._enableScreenspaceDepth = !0) : DD === RC.IRRADIANCE_TEXTURE_TYPE ? (this._irradianceIndex = CD, this._enableIrradiance = !0) : DD === RC.OBJECT_ID_TEXTURE_TYPE ? (this._objectIdIndex = CD, this._enableObjectId = !0) : DD === RC.MESH_BLEND_TAG_TEXTURE_TYPE && (this._meshBlendTagIndex = CD, this._enableMeshBlendTag = !0)
      }
      _setAttachments(DD) {
        this._attachmentsFromPrePass = DD
      }
      _linkInternalTexture(DD) {
        this._multiRenderTarget.setInternalTexture(DD, 0, !1)
      }
      get renderList() {
        return this._multiRenderTarget.renderList
      }
      set renderList(DD) {
        this._multiRenderTarget.renderList = DD
      }
      get isSupported() {
        return this._multiRenderTarget.isSupported
      }
      getTextureIndex(DD) {
        switch (DD) {
          case RC.POSITION_TEXTURE_TYPE:
            return this._positionIndex;
          case RC.VELOCITY_TEXTURE_TYPE:
            return this._velocityIndex;
          case RC.VELOCITY_LINEAR_TEXTURE_TYPE:
            return this._velocityLinearIndex;
          case RC.REFLECTIVITY_TEXTURE_TYPE:
            return this._reflectivityIndex;
          case RC.DEPTH_TEXTURE_TYPE:
            return this._depthIndex;
          case RC.NORMAL_TEXTURE_TYPE:
            return this._normalIndex;
          case RC.SCREENSPACE_DEPTH_TEXTURE_TYPE:
            return this._screenspaceDepthIndex;
          case RC.IRRADIANCE_TEXTURE_TYPE:
            return this._irradianceIndex;
          case RC.OBJECT_ID_TEXTURE_TYPE:
            return this._objectIdIndex;
          case RC.MESH_BLEND_TAG_TEXTURE_TYPE:
            return this._meshBlendTagIndex;
          default:
            return -1
        }
      }
      get enableDepth() {
        return this._enableDepth
      }
      set enableDepth(DD) {
        this._enableDepth = DD, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableNormal() {
        return this._enableNormal
      }
      set enableNormal(DD) {
        this._enableNormal = DD, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enablePosition() {
        return this._enablePosition
      }
      set enablePosition(DD) {
        this._enablePosition = DD, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableVelocity() {
        return this._enableVelocity
      }
      set enableVelocity(DD) {
        this._enableVelocity = DD, DD || (this._previousTransformationMatrices = {}), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets()), this._scene.needsPreviousWorldMatrices = DD
      }
      get enableVelocityLinear() {
        return this._enableVelocityLinear
      }
      set enableVelocityLinear(DD) {
        this._enableVelocityLinear = DD, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableReflectivity() {
        return this._enableReflectivity
      }
      set enableReflectivity(DD) {
        this._enableReflectivity = DD, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableScreenspaceDepth() {
        return this._enableScreenspaceDepth
      }
      set enableScreenspaceDepth(DD) {
        this._enableScreenspaceDepth = DD, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableIrradiance() {
        return this._enableIrradiance
      }
      set enableIrradiance(DD) {
        this._enableIrradiance = DD, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableObjectId() {
        return this._enableObjectId
      }
      set enableObjectId(DD) {
        if (DD && this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: object ID textures are not supported when linked to the PrePassRenderer");
        if (DD && 1 !== this.samples) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (DD && !this._enableObjectId && !this._linkedWithPrePass) {
          const DD = this._scene.DZ(),
            CD = Math.min(DD.getCaps().maxDrawBuffers ?? 1, 8),
            cD = this._assignRenderTargetIndices()[0] + 1;
          if (DD.getCaps().drawBuffersExtension && cD > CD) throw new Error(`GeometryBufferRenderer: ${cD} color attachments were requested, but this engine supports at most ${CD}`)
        }
        this._enableObjectId = DD, DD || (this._objectIdIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableMeshBlendingTag() {
        return this._enableMeshBlendTag
      }
      set enableMeshBlendingTag(DD) {
        if (this._enableMeshBlendTag !== DD) {
          if (DD) {
            const DD = this._scene.DZ();
            if (! function(DD) {
                return "NATIVE" !== DD.shaderPlatformName && (DD.isWebGPU || 2 === DD.JZ)
              }(DD)) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require WebGL2 or WebGPU");
            if (this.renderTransparentMeshes && !DD.isWebGPU && !DD.getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
            if (this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: mesh-blending tag textures are not supported when linked to the PrePassRenderer");
            if (1 !== this.samples) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
            if (!this._enableMeshBlendTag) {
              const CD = Math.min(DD.getCaps().maxDrawBuffers ?? 1, 8),
                cD = this._assignRenderTargetIndices()[0] + 1;
              if (DD.getCaps().drawBuffersExtension && cD > CD) throw new Error(`GeometryBufferRenderer: ${cD} color attachments were requested, but this engine supports at most ${CD}`)
            }
          }
          this._enableMeshBlendTag = DD, DD || (this._meshBlendTagIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
        }
      }
      get wo() {
        return this._scene
      }
      get ratio() {
        return "object" === typeof this._ratioOrDimensions ? 1 : this._ratioOrDimensions
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
          ID = arguments.length > 3 ? arguments[3] : void 0;
        var pD;
        this._previousTransformationMatrices = {}, this._previousBonesTransformationMatrices = {}, this.excludedSkinnedMeshesFromVelocity = [], this._renderTransparentMeshes = !0, this.generateNormalsInWorldSpace = !1, this._normalsAreUnsigned = !1, this._resizeObserver = null, this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableReflectivity = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._clearColor = new sD.e(0, 0, 0, 0), this._clearDepthColor = new sD.e(0, 0, 0, 1), this._positionIndex = -1, this._velocityIndex = -1, this._velocityLinearIndex = -1, this._reflectivityIndex = -1, this._depthIndex = -1, this._normalIndex = -1, this._screenspaceDepthIndex = -1, this._irradianceIndex = -1, this._objectIdIndex = -1, this._meshBlendTagIndex = -1, this._linkedWithPrePass = !1, this.generateIrradianceWithScatterMask = !1, this.useSpecificClearForDepthTexture = !1, this._shaderLanguage = 0, this._shadersLoaded = !1, this._scene = DD, this._ratioOrDimensions = CD, this._useUbo = DD.DZ().supportsUniformBuffers, this._depthFormat = cD, this._textureTypesAndFormats = ID || {}, this._initShaderSourceAsync(), pD = RC, lC || (lC = !0, Object.defineProperty(LD.e.prototype, "geometryBufferRenderer", {
          get: function() {
            return this._geometryBufferRenderer
          },
          set: function(DD) {
            DD && DD.isSupported && (this._geometryBufferRenderer = DD)
          },
          enumerable: !0,
          configurable: !0
        }), LD.e.prototype.enableGeometryBufferRenderer = function() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 15,
            cD = arguments.length > 2 ? arguments[2] : void 0;
          return this._geometryBufferRenderer || (this._geometryBufferRenderer = new pD(this, DD, CD, cD), this._geometryBufferRenderer.isSupported || (this._geometryBufferRenderer = null)), this._geometryBufferRenderer
        }, LD.e.prototype.disableGeometryBufferRenderer = function() {
          this._geometryBufferRenderer && (this._geometryBufferRenderer.dispose(), this._geometryBufferRenderer = null)
        }, pD._SceneComponentInitialization = DD => {
          let CD = DD._getComponent(zC.c.NAME_GEOMETRYBUFFERRENDERER);
          CD || (CD = new jC(DD), DD.fcD(CD))
        }), RC._SceneComponentInitialization(this._scene), this._createRenderTargets()
      }
      async _initShaderSourceAsync() {
        this._scene.DZ().isWebGPU && !RC.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([cD.e(327).then((() => cD(61038))), Promise.all([cD.e(326), cD.e(338)]).then((() => cD(61042)))])) : await Promise.all([cD.e(310).then((() => cD(61046))), cD.e(309).then((() => cD(61051)))]), this._shadersLoaded = !0
      }
      isReady(DD, CD) {
        if (!this._shadersLoaded) return !1;
        const cD = DD.iZ();
        if (cD && cD.disableDepthWrite) return !1;
        if (function(DD) {
            return DD._isGaussianSplatting || "GaussianSplattingMesh" === (CD = DD.getClassName()) || "GaussianSplattingStream" === CD;
            var CD
          }(DD.getMesh())) return !1;
        const ID = [],
          pD = [GD.k.PositionKind],
          iD = DD.getMesh();
        iD.isVerticesDataPresent(GD.k.NormalKind) && (ID.push("#define HAS_NORMAL_ATTRIBUTE"), pD.push(GD.k.NormalKind));
        let fD = !1,
          bD = !1;
        if (cD) {
          let DD = !1;
          if (cD.needAlphaTestingForMesh(iD) && cD.getAlphaTestTexture() && (ID.push("#define ALPHATEST"), ID.push(`#define ALPHATEST_UV${cD.getAlphaTestTexture().coordinatesIndex+1}`), DD = !0), (cD.bumpTexture || cD.normalTexture || cD.geometryNormalTexture) && hD.e.BumpTextureEnabled) {
            const CD = cD.bumpTexture || cD.normalTexture || cD.geometryNormalTexture;
            ID.push("#define BUMP"), ID.push(`#define BUMP_UV${CD.coordinatesIndex+1}`), DD = !0
          }
          if (this._enableReflectivity) {
            let CD = !1;
            if ("PBRMetallicRoughnessMaterial" === cD.getClassName()) cD.metallicRoughnessTexture && (ID.push("#define ORMTEXTURE"), ID.push(`#define REFLECTIVITY_UV${cD.metallicRoughnessTexture.coordinatesIndex+1}`), ID.push("#define METALLICWORKFLOW"), DD = !0, CD = !0), null != cD.metallic && (ID.push("#define METALLIC"), ID.push("#define METALLICWORKFLOW"), CD = !0), null != cD.roughness && (ID.push("#define ROUGHNESS"), ID.push("#define METALLICWORKFLOW"), CD = !0), CD && (cD.baseTexture && (ID.push("#define ALBEDOTEXTURE"), ID.push(`#define ALBEDO_UV${cD.baseTexture.coordinatesIndex+1}`), cD.baseTexture.gammaSpace && ID.push("#define GAMMAALBEDO"), DD = !0), cD.baseColor && ID.push("#define ALBEDOCOLOR"));
            else if ("PBRSpecularGlossinessMaterial" === cD.getClassName()) cD.specularGlossinessTexture ? (ID.push("#define SPECULARGLOSSINESSTEXTURE"), ID.push(`#define REFLECTIVITY_UV${cD.specularGlossinessTexture.coordinatesIndex+1}`), DD = !0, cD.specularGlossinessTexture.gammaSpace && ID.push("#define GAMMAREFLECTIVITYTEXTURE")) : cD.specularColor && ID.push("#define REFLECTIVITYCOLOR"), null != cD.glossiness && ID.push("#define GLOSSINESS");
            else if ("PBRMaterial" === cD.getClassName()) cD.metallicTexture && (ID.push("#define ORMTEXTURE"), ID.push(`#define REFLECTIVITY_UV${cD.metallicTexture.coordinatesIndex+1}`), ID.push("#define METALLICWORKFLOW"), DD = !0, CD = !0), null != cD.metallic && (ID.push("#define METALLIC"), ID.push("#define METALLICWORKFLOW"), CD = !0), null != cD.roughness && (ID.push("#define ROUGHNESS"), ID.push("#define METALLICWORKFLOW"), CD = !0), CD ? (cD.albedoTexture && (ID.push("#define ALBEDOTEXTURE"), ID.push(`#define ALBEDO_UV${cD.albedoTexture.coordinatesIndex+1}`), cD.albedoTexture.gammaSpace && ID.push("#define GAMMAALBEDO"), DD = !0), cD.albedoColor && ID.push("#define ALBEDOCOLOR")) : (cD.reflectivityTexture ? (ID.push("#define SPECULARGLOSSINESSTEXTURE"), ID.push(`#define REFLECTIVITY_UV${cD.reflectivityTexture.coordinatesIndex+1}`), cD.reflectivityTexture.gammaSpace && ID.push("#define GAMMAREFLECTIVITYTEXTURE"), DD = !0) : cD.reflectivityColor && ID.push("#define REFLECTIVITYCOLOR"), null != cD.microSurface && ID.push("#define GLOSSINESS"));
            else if ("StandardMaterial" === cD.getClassName()) cD.specularTexture && (ID.push("#define REFLECTIVITYTEXTURE"), ID.push(`#define REFLECTIVITY_UV${cD.specularTexture.coordinatesIndex+1}`), cD.specularTexture.gammaSpace && ID.push("#define GAMMAREFLECTIVITYTEXTURE"), DD = !0), cD.specularColor && ID.push("#define REFLECTIVITYCOLOR");
            else if ("OpenPBRMaterial" === cD.getClassName()) {
              const CD = cD;
              ID.push("#define METALLIC"), ID.push("#define ROUGHNESS"), CD._useRoughnessFromMetallicTextureGreen && CD.baseMetalnessTexture ? (ID.push("#define ORMTEXTURE"), ID.push(`#define REFLECTIVITY_UV${CD.baseMetalnessTexture.coordinatesIndex+1}`), DD = !0) : CD.baseMetalnessTexture ? (ID.push("#define METALLIC_TEXTURE"), ID.push(`#define METALLIC_UV${CD.baseMetalnessTexture.coordinatesIndex+1}`), DD = !0) : CD.specularRoughnessTexture && (ID.push("#define ROUGHNESS_TEXTURE"), ID.push(`#define ROUGHNESS_UV${CD.specularRoughnessTexture.coordinatesIndex+1}`), DD = !0), CD.baseColorTexture && (ID.push("#define ALBEDOTEXTURE"), ID.push(`#define ALBEDO_UV${CD.baseColorTexture.coordinatesIndex+1}`), CD.baseColorTexture.gammaSpace && ID.push("#define GAMMAALBEDO"), DD = !0), CD.baseColor && ID.push("#define ALBEDOCOLOR")
            }
          }
          if (this._enableIrradiance && this.generateIrradianceWithScatterMask && (ID.push("#define IRRADIANCE_SCATTER_MASK"), "OpenPBRMaterial" === cD.getClassName())) {
            const CD = cD;
            CD.subsurfaceWeight > 0 && CD.subsurfaceWeightTexture && (ID.push("#define SUBSURFACE_WEIGHT"), ID.push(`#define SUBSURFACEWEIGHT_UV${CD.subsurfaceWeightTexture.coordinatesIndex+1}`), DD = !0), CD.transmissionWeight > 0 && CD.transmissionWeightTexture && (ID.push("#define TRANSMISSION_WEIGHT"), ID.push(`#define TRANSMISSIONWEIGHT_UV${CD.transmissionWeightTexture.coordinatesIndex+1}`), DD = !0)
          }
          DD && (ID.push("#define NEED_UV"), iD.isVerticesDataPresent(GD.k.UVKind) && (pD.push(GD.k.UVKind), ID.push("#define UV1"), fD = !0), iD.isVerticesDataPresent(GD.k.UV2Kind) && (pD.push(GD.k.UV2Kind), ID.push("#define UV2"), bD = !0))
        }
        if (this._enableDepth && (ID.push("#define DEPTH"), ID.push("#define DEPTH_INDEX " + this._depthIndex)), this._enableNormal && (ID.push("#define NORMAL"), ID.push("#define NORMAL_INDEX " + this._normalIndex)), this._enablePosition && (ID.push("#define POSITION"), ID.push("#define POSITION_INDEX " + this._positionIndex)), this._enableVelocity && (ID.push("#define VELOCITY"), ID.push("#define VELOCITY_INDEX " + this._velocityIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(iD) && ID.push("#define BONES_VELOCITY_ENABLED")), this._enableVelocityLinear && (ID.push("#define VELOCITY_LINEAR"), ID.push("#define VELOCITY_LINEAR_INDEX " + this._velocityLinearIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(iD) && ID.push("#define BONES_VELOCITY_ENABLED")), this._enableReflectivity && (ID.push("#define REFLECTIVITY"), ID.push("#define REFLECTIVITY_INDEX " + this._reflectivityIndex)), this._enableScreenspaceDepth && -1 !== this._screenspaceDepthIndex && (ID.push("#define SCREENSPACE_DEPTH_INDEX " + this._screenspaceDepthIndex), ID.push("#define SCREENSPACE_DEPTH")), this._enableIrradiance && -1 !== this._irradianceIndex) {
          ID.push("#define IRRADIANCE_INDEX " + this._irradianceIndex), ID.push("#define IRRADIANCE");
          const DD = this._scene;
          if (DD.environmentTexture) {
            const CD = {};
            let pD = !1,
              iD = 0;
            "OpenPBRMaterial" !== cD.getClassName() && "StandardMaterial" !== cD.getClassName() && "PBRMetallicRoughnessMaterial" !== cD.getClassName() && "PBRSpecularGlossinessMaterial" !== cD.getClassName() && "PBRMaterial" !== cD.getClassName() || (pD = !!cD.realtimeFiltering, iD = cD.realtimeFilteringQuality || 0), (0, AD.$)(DD, DD.environmentTexture, CD, pD, iD, !0);
            for (const DD in CD) CD[DD] && ID.push("#define " + DD);
            CD.USEIRRADIANCEMAP || ID.push("#define SPHERICAL_HARMONICS");
            const fD = DD.postProcessRenderPipelineManager.supportedPipelines.find((DD => "IBLShadowsRenderPipeline" === DD.getClassName()));
            if (fD) {
              const DD = fD;
              DD._getAccumulatedTexture() && (ID.push("#define IBL_SHADOW_TEXTURE"), DD.coloredShadows && ID.push("#define COLORED_IBL_SHADOWS"))
            }
          }
        }
        this._enableObjectId && (ID.push("#define OBJECT_ID"), ID.push("#define OBJECT_ID_INDEX " + this._objectIdIndex)), this._enableMeshBlendTag && (ID.push("#define MESH_BLEND_TAG"), ID.push("#define MESH_BLEND_TAG_INDEX " + this._meshBlendTagIndex)), this.generateNormalsInWorldSpace && ID.push("#define NORMAL_WORLDSPACE"), this._normalsAreUnsigned && ID.push("#define ENCODE_NORMAL"), iD.useBones && iD.computeBonesUsingShaders && iD.skeleton ? (pD.push(GD.k.MatricesIndicesKind), pD.push(GD.k.MatricesWeightsKind), iD.numBoneInfluencers > 4 && (pD.push(GD.k.MatricesIndicesExtraKind), pD.push(GD.k.MatricesWeightsExtraKind)), ID.push("#define NUM_BONE_INFLUENCERS " + iD.numBoneInfluencers), ID.push("#define BONETEXTURE " + iD.skeleton.isUsingTextureForMatrices), ID.push("#define BonesPerMesh " + (iD.skeleton.bones.length + 1))) : (ID.push("#define NUM_BONE_INFLUENCERS 0"), ID.push("#define BONETEXTURE false"), ID.push("#define BonesPerMesh 0"));
        const QD = iD.morphTargetManager ? (0, AD.R)(iD.morphTargetManager, ID, pD, iD, !0, !0, !1, fD, bD, !1) : 0;
        CD && (ID.push("#define INSTANCES"), (0, AD.sb)(pD, this._enableVelocity || this._enableVelocityLinear), DD.getRenderingMesh().hasThinInstances && ID.push("#define THIN_INSTANCES")), this._linkedWithPrePass ? ID.push("#define SCENE_MRT_COUNT " + this._attachmentsFromPrePass.length) : ID.push("#define SCENE_MRT_COUNT " + this._multiRenderTarget.textures.length), (0, SC.o)(cD, this._scene, ID);
        const wD = this._scene.DZ(),
          SD = DD._getDrawWrapper(void 0, !0),
          BD = SD.defines,
          yD = ID.join("\n");
        return BD !== yD && SD.setEffect(wD.createEffect("geometry", {
          attributes: pD,
          uniformsNames: GC,
          samplers: TC,
          defines: yD,
          onCompiled: null,
          fallbacks: null,
          onError: null,
          uniformBuffersNames: ["Scene"],
          indexParameters: {
            buffersCount: this._multiRenderTarget.textures.length - 1,
            maxSimultaneousMorphTargets: QD
          },
          shaderLanguage: this.shaderLanguage
        }, wD), yD), SD.effect.isReady()
      }
      getGBuffer() {
        return this._multiRenderTarget
      }
      get samples() {
        return this._multiRenderTarget.samples
      }
      set samples(DD) {
        if (this._enableObjectId && 1 !== DD) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (this._enableMeshBlendTag && 1 !== DD) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
        this._multiRenderTarget.samples = DD
      }
      dispose() {
        if (this._resizeObserver) {
          this._scene.DZ().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null
        }
        this._multiRenderTarget?.renderTarget && this.wo.DZ()._currentRenderTarget === this._multiRenderTarget.renderTarget && this.wo.DZ().unBindFramebuffer(this._multiRenderTarget?.renderTarget), this.getGBuffer().dispose()
      }
      _assignRenderTargetIndices() {
        const DD = [],
          CD = [];
        let cD = 0;
        return this._enableDepth && (this._depthIndex = cD, cD++, DD.push("gBuffer_Depth"), CD.push(this._textureTypesAndFormats[RC.DEPTH_TEXTURE_TYPE])), this._enableNormal && (this._normalIndex = cD, cD++, DD.push("gBuffer_Normal"), CD.push(this._textureTypesAndFormats[RC.NORMAL_TEXTURE_TYPE])), this._enablePosition && (this._positionIndex = cD, cD++, DD.push("gBuffer_Position"), CD.push(this._textureTypesAndFormats[RC.POSITION_TEXTURE_TYPE])), this._enableVelocity && (this._velocityIndex = cD, cD++, DD.push("gBuffer_Velocity"), CD.push(this._textureTypesAndFormats[RC.VELOCITY_TEXTURE_TYPE])), this._enableVelocityLinear && (this._velocityLinearIndex = cD, cD++, DD.push("gBuffer_VelocityLinear"), CD.push(this._textureTypesAndFormats[RC.VELOCITY_LINEAR_TEXTURE_TYPE])), this._enableReflectivity && (this._reflectivityIndex = cD, cD++, DD.push("gBuffer_Reflectivity"), CD.push(this._textureTypesAndFormats[RC.REFLECTIVITY_TEXTURE_TYPE])), this._enableScreenspaceDepth && (this._screenspaceDepthIndex = cD, cD++, DD.push("gBuffer_ScreenspaceDepth"), CD.push(this._textureTypesAndFormats[RC.SCREENSPACE_DEPTH_TEXTURE_TYPE])), this._enableIrradiance && (this._irradianceIndex = cD, cD++, DD.push("gBuffer_Irradiance"), CD.push(this._textureTypesAndFormats[RC.IRRADIANCE_TEXTURE_TYPE])), this._enableObjectId && (this._objectIdIndex = cD, cD++, DD.push("gBuffer_ObjectId"), CD.push({
          textureType: 0,
          textureFormat: 5,
          samplingMode: 1
        })), this._enableMeshBlendTag && (this._meshBlendTagIndex = cD, cD++, DD.push("gBuffer_MeshBlendTag"), CD.push({
          textureType: 0,
          textureFormat: 8,
          samplingMode: 1
        })), [cD, DD, CD]
      }
      _createRenderTargets() {
        const DD = this._scene.DZ(),
          [CD, cD, ID] = this._assignRenderTargetIndices(),
          pD = Math.min(DD.getCaps().maxDrawBuffers ?? 1, 8);
        if (DD.getCaps().drawBuffersExtension && CD > pD) throw new Error(`GeometryBufferRenderer: ${CD} color attachments were requested, but this engine supports at most ${pD}`);
        let fD = 0;
        DD._caps.textureFloat && DD._caps.textureFloatLinearFiltering ? fD = 1 : DD._caps.textureHalfFloat && DD._caps.textureHalfFloatLinearFiltering && (fD = 2);
        const bD = this._getRenderTargetDimensions(),
          QD = [],
          wD = [],
          SD = [];
        for (const iD of ID) iD ? (QD.push(iD.textureType), wD.push(iD.textureFormat), SD.push(iD.samplingMode ?? 2)) : (QD.push(fD), wD.push(5), SD.push(2));
        if (this._normalsAreUnsigned = 11 === QD[RC.NORMAL_TEXTURE_TYPE] || 13 === QD[RC.NORMAL_TEXTURE_TYPE], this._multiRenderTarget = new VC("gBuffer", bD, CD, this._scene, {
            generateMipMaps: !1,
            generateDepthTexture: !0,
            types: QD,
            formats: wD,
            samplingModes: SD,
            depthTextureFormat: this._depthFormat
          }, cD.concat("gBuffer_DepthBuffer")), !this.isSupported) return;
        this._multiRenderTarget.wrapU = JD.c.CLAMP_ADDRESSMODE, this._multiRenderTarget.wrapV = JD.c.CLAMP_ADDRESSMODE, this._multiRenderTarget.refreshRate = 1, this._multiRenderTarget.renderParticles = !1, this._multiRenderTarget.renderList = null;
        const BD = [!0],
          yD = [!1],
          MD = [!0];
        for (let iD = 1; iD < CD; ++iD) BD.push(!0), MD.push(!1), yD.push(!0);
        const tD = DD.buildTextureLayout(BD),
          ZD = DD.buildTextureLayout(yD),
          oD = DD.buildTextureLayout(MD);
        this._multiRenderTarget.onClearObservable.add((DD => {
          const CD = this.useSpecificClearForDepthTexture ? ZD : tD;
          DD.clearAttachments(this._clearColor, CD, !0, !0, !0), this.useSpecificClearForDepthTexture && DD.clearAttachments(this._clearDepthColor, oD, !0, !1, !1), DD.bindAttachments(tD)
        })), this._resizeObserver = DD.onResizeObservable.add((() => {
          this._multiRenderTarget && this._multiRenderTarget.resize(this._getRenderTargetDimensions())
        }));
        const vD = DD => {
          const CD = DD.getRenderingMesh(),
            cD = DD.getEffectiveMesh(),
            ID = this._scene,
            pD = ID.DZ(),
            fD = DD.iZ();
          if (!fD) return;
          if (cD._internalAbstractMeshDataInfo._isActiveIntermediate = !1, (this._enableVelocity || this._enableVelocityLinear) && !this._previousTransformationMatrices[cD.uniqueId] && (this._previousTransformationMatrices[cD.uniqueId] = {
              Zy: TD.d.Identity(),
              viewProjection: ID.getTransformMatrix()
            }, CD.skeleton)) {
            const DD = CD.skeleton.getTransformMatrices(CD);
            this._previousBonesTransformationMatrices[CD.uniqueId] = this._copyBonesTransformationMatrices(DD, new Float32Array(DD.length))
          }
          const bD = CD._getInstancesRenderList(DD._id, !!DD.getReplacementMesh());
          if (bD.mustReturn) return;
          const QD = pD.getCaps().instancedArrays && (null !== bD.visibleInstances[DD._id] || CD.hasThinInstances),
            wD = cD.getWorldMatrix();
          if (this.isReady(DD, QD)) {
            const SD = DD._getDrawWrapper();
            if (!SD) return;
            const BD = SD.effect;
            let yD;
            pD.enableEffect(SD), QD || CD._bind(DD, BD, fD.fillMode), this._useUbo ? ((0, AD.z)(BD, this._scene.getSceneUniformBuffer()), this._scene.finalizeSceneUbo()) : (BD.setMatrix("viewProjection", ID.getTransformMatrix()), BD.setMatrix("view", ID.getViewMatrix()), this._scene.bindEyePosition(BD, "vEyePosition"));
            if (CD._instanceDataStorage.isFrozen || !fD.backFaceCulling && null === fD.sideOrientation) yD = CD._effectiveSideOrientation;
            else {
              const DD = cD._getWorldMatrixDeterminant();
              yD = fD._getEffectiveOrientation(CD), DD < 0 && (yD = yD === iD.d.ClockWiseSideOrientation ? iD.d.CounterClockWiseSideOrientation : iD.d.ClockWiseSideOrientation)
            }
            if (fD._preBind(SD, yD), fD.needAlphaTestingForMesh(cD)) {
              const DD = fD.getAlphaTestTexture();
              DD && (BD.setTexture("diffuseSampler", DD), BD.setMatrix("diffuseMatrix", DD.getTextureMatrix()), BD.setFloat("alphaCutOff", fD.alphaCutOff ?? .4))
            }
            if ((fD.bumpTexture || fD.normalTexture || fD.geometryNormalTexture) && ID.DZ().getCaps().standardDerivatives && hD.e.BumpTextureEnabled) {
              const DD = fD.bumpTexture || fD.normalTexture || fD.geometryNormalTexture;
              BD.setFloat3("vBumpInfos", DD.coordinatesIndex, 1 / DD.level, fD.parallaxScaleBias), BD.setMatrix("bumpMatrix", DD.getTextureMatrix()), BD.setTexture("bumpSampler", DD), BD.setFloat2("vTangentSpaceParams", fD.invertNormalMapX ? -1 : 1, fD.invertNormalMapY ? -1 : 1)
            }
            if (this._enableReflectivity)
              if ("PBRMetallicRoughnessMaterial" === fD.getClassName()) null !== fD.metallicRoughnessTexture && (BD.setTexture("reflectivitySampler", fD.metallicRoughnessTexture), BD.setMatrix("reflectivityMatrix", fD.metallicRoughnessTexture.getTextureMatrix())), null !== fD.metallic && BD.setFloat("metallic", fD.metallic), null !== fD.roughness && BD.setFloat("glossiness", 1 - fD.roughness), null !== fD.baseTexture && (BD.setTexture("albedoSampler", fD.baseTexture), BD.setMatrix("albedoMatrix", fD.baseTexture.getTextureMatrix())), null !== fD.baseColor && BD.setColor3("albedoColor", fD.baseColor);
              else if ("PBRSpecularGlossinessMaterial" === fD.getClassName()) null !== fD.specularGlossinessTexture ? (BD.setTexture("reflectivitySampler", fD.specularGlossinessTexture), BD.setMatrix("reflectivityMatrix", fD.specularGlossinessTexture.getTextureMatrix())) : null !== fD.specularColor && BD.setColor3("reflectivityColor", fD.specularColor), null !== fD.glossiness && BD.setFloat("glossiness", fD.glossiness);
            else if ("PBRMaterial" === fD.getClassName()) null !== fD.metallicTexture && (BD.setTexture("reflectivitySampler", fD.metallicTexture), BD.setMatrix("reflectivityMatrix", fD.metallicTexture.getTextureMatrix())), null !== fD.metallic && BD.setFloat("metallic", fD.metallic), null !== fD.roughness && BD.setFloat("glossiness", 1 - fD.roughness), null !== fD.roughness || null !== fD.metallic || null !== fD.metallicTexture ? (null !== fD.albedoTexture && (BD.setTexture("albedoSampler", fD.albedoTexture), BD.setMatrix("albedoMatrix", fD.albedoTexture.getTextureMatrix())), null !== fD.albedoColor && BD.setColor3("albedoColor", fD.albedoColor)) : (null !== fD.reflectivityTexture ? (BD.setTexture("reflectivitySampler", fD.reflectivityTexture), BD.setMatrix("reflectivityMatrix", fD.reflectivityTexture.getTextureMatrix())) : null !== fD.reflectivityColor && BD.setColor3("reflectivityColor", fD.reflectivityColor), null !== fD.microSurface && BD.setFloat("glossiness", fD.microSurface));
            else if ("StandardMaterial" === fD.getClassName()) null !== fD.specularTexture && (BD.setTexture("reflectivitySampler", fD.specularTexture), BD.setMatrix("reflectivityMatrix", fD.specularTexture.getTextureMatrix())), null !== fD.specularColor && BD.setColor3("reflectivityColor", fD.specularColor);
            else if ("OpenPBRMaterial" === fD.getClassName()) {
              const DD = fD;
              DD._useRoughnessFromMetallicTextureGreen && DD.baseMetalnessTexture ? (BD.setTexture("reflectivitySampler", DD.baseMetalnessTexture), BD.setMatrix("reflectivityMatrix", DD.baseMetalnessTexture.getTextureMatrix())) : DD.baseMetalnessTexture ? (BD.setTexture("metallicSampler", DD.baseMetalnessTexture), BD.setMatrix("metallicMatrix", DD.baseMetalnessTexture.getTextureMatrix())) : DD.specularRoughnessTexture && (BD.setTexture("roughnessSampler", DD.specularRoughnessTexture), BD.setMatrix("roughnessMatrix", DD.specularRoughnessTexture.getTextureMatrix())), BD.setFloat("metallic", DD.baseMetalness), BD.setFloat("glossiness", 1 - DD.specularRoughness), null !== DD.baseColorTexture && (BD.setTexture("albedoSampler", DD.baseColorTexture), BD.setMatrix("albedoMatrix", DD.baseColorTexture.getTextureMatrix())), null !== DD.baseColor && BD.setColor3("albedoColor", DD.baseColor)
            }
            if (this._enableIrradiance && ID.environmentTexture) {
              const DD = ID.environmentTexture,
                CD = ID.postProcessRenderPipelineManager.supportedPipelines.find((DD => "IBLShadowsRenderPipeline" === DD.getClassName()));
              if (CD) {
                const DD = CD._getAccumulatedTexture();
                DD && (BD.setTexture("iblShadowSampler", DD), BD.setFloat2("shadowTextureSize", DD.getSize().width, DD.getSize().height))
              }
              if (BD.setMatrix("reflectionMatrix", DD.getReflectionTextureMatrix()), BD.setFloat2("vReflectionInfos", DD.level * ID.iblIntensity, 0), BD.setTexture("reflectionSampler", DD), DD.irradianceTexture && (BD.setTexture("irradianceSampler", DD.irradianceTexture), DD.irradianceTexture._dominantDirection && BD.setVector3("vReflectionDominantDirection", DD.irradianceTexture._dominantDirection)), DD.sphericalPolynomial) {
                const CD = DD.sphericalPolynomial;
                if (CD.preScaledHarmonics) {
                  const DD = CD.preScaledHarmonics;
                  BD.setVector3("vSphericalL00", DD.l00), BD.setVector3("vSphericalL1_1", DD.l1_1), BD.setVector3("vSphericalL10", DD.l10), BD.setVector3("vSphericalL11", DD.l11), BD.setVector3("vSphericalL2_2", DD.l2_2), BD.setVector3("vSphericalL2_1", DD.l2_1), BD.setVector3("vSphericalL20", DD.l20), BD.setVector3("vSphericalL21", DD.l21), BD.setVector3("vSphericalL22", DD.l22)
                } else BD.setFloat3("vSphericalX", CD.x.x, CD.x.y, CD.x.z), BD.setFloat3("vSphericalY", CD.y.x, CD.y.y, CD.y.z), BD.setFloat3("vSphericalZ", CD.z.x, CD.z.y, CD.z.z), BD.setFloat3("vSphericalXX_ZZ", CD.xx.x - CD.zz.x, CD.xx.y - CD.zz.y, CD.xx.z - CD.zz.z), BD.setFloat3("vSphericalYY_ZZ", CD.yy.x - CD.zz.x, CD.yy.y - CD.zz.y, CD.yy.z - CD.zz.z), BD.setFloat3("vSphericalZZ", CD.zz.x, CD.zz.y, CD.zz.z), BD.setFloat3("vSphericalXY", CD.xy.x, CD.xy.y, CD.xy.z), BD.setFloat3("vSphericalYZ", CD.yz.x, CD.yz.y, CD.yz.z), BD.setFloat3("vSphericalZX", CD.zx.x, CD.zx.y, CD.zx.z)
              }
              if (this.generateIrradianceWithScatterMask && "OpenPBRMaterial" === fD.getClassName()) {
                const DD = fD;
                BD.setFloat("vSubsurfaceWeight", DD.subsurfaceWeight), DD.subsurfaceWeightTexture && (BD.setTexture("subsurfaceWeightSampler", DD.subsurfaceWeightTexture), BD.setMatrix("subsurfaceWeightMatrix", DD.subsurfaceWeightTexture.getTextureMatrix())), BD.setFloat("vTransmissionWeight", DD.transmissionWeight), DD.transmissionWeightTexture && (BD.setTexture("transmissionWeightSampler", DD.transmissionWeightTexture), BD.setMatrix("transmissionWeightMatrix", DD.transmissionWeightTexture.getTextureMatrix())), BD.setFloat("vTransmissionScatterAnisotropy", DD.transmissionScatterAnisotropy), BD.setFloat("vSubsurfaceScatterAnisotropy", DD.subsurfaceScatterAnisotropy)
              }
            }
            if ((0, SC.i)(BD, fD, this._scene), CD.useBones && CD.computeBonesUsingShaders && CD.skeleton) {
              const DD = CD.skeleton;
              if (DD.isUsingTextureForMatrices && BD.getUniformIndex("boneTextureInfo") > -1) {
                const cD = DD.getTransformMatrixTexture(CD);
                BD.setTexture("boneSampler", cD), BD.setFloat2("boneTextureInfo", DD._textureWidth, DD._textureHeight)
              } else BD.setMatrices("mBones", CD.skeleton.getTransformMatrices(CD));
              (this._enableVelocity || this._enableVelocityLinear) && BD.setMatrices("mPreviousBones", this._previousBonesTransformationMatrices[CD.uniqueId])
            }
            if ((0, AD.y)(CD, BD), CD.morphTargetManager && CD.morphTargetManager.isUsingTextureForTargets && CD.morphTargetManager._bind(BD), (this._enableVelocity || this._enableVelocityLinear) && (BD.setMatrix("previousWorld", this._previousTransformationMatrices[cD.uniqueId].Zy), BD.setMatrix("previousViewProjection", this._previousTransformationMatrices[cD.uniqueId].viewProjection)), this._enableObjectId) {
              let DD = CD.uniqueId;
              if (this.objectIdProvider) DD = (0, MC.i)(CD, this.objectIdProvider);
              else if (DD > 16777215) throw new Error(`Invalid geometry object ID ${DD} for mesh "${CD.name}". Object IDs must be integers between 0 and 0xFFFFFF.`);
              BD.setFloat("objectId", DD)
            }
            if (this._enableMeshBlendTag) {
              const DD = this.meshBlendTagProvider ? (0, MC.h)(CD, this.meshBlendTagProvider) : CD.meshBlendingTag;
              BD.setInt("meshBlendTag", DD)
            }
            QD && CD.hasThinInstances && BD.setMatrix("world", wD), CD._processRendering(cD, DD, BD, fD.fillMode, bD, QD, ((DD, CD) => {
              DD || BD.setMatrix("world", CD)
            }))
          }(this._enableVelocity || this._enableVelocityLinear) && (this._previousTransformationMatrices[cD.uniqueId].Zy = wD.clone(), this._previousTransformationMatrices[cD.uniqueId].viewProjection = this._scene.getTransformMatrix().clone(), CD.skeleton && this._copyBonesTransformationMatrices(CD.skeleton.getTransformMatrices(CD), this._previousBonesTransformationMatrices[cD.uniqueId]))
        };
        this._multiRenderTarget.customIsReadyFunction = (CD, cD, ID) => {
          if ((ID || 0 === cD) && CD.IH)
            for (let pD = 0; pD < CD.IH.length; ++pD) {
              const cD = CD.IH[pD],
                ID = cD.iZ(),
                iD = cD.getRenderingMesh();
              if (!ID) continue;
              const fD = iD._getInstancesRenderList(cD._id, !!cD.getReplacementMesh()),
                bD = DD.getCaps().instancedArrays && (null !== fD.visibleInstances[cD._id] || iD.hasThinInstances);
              if (!this.isReady(cD, bD)) return !1
            }
          return !0
        }, this._multiRenderTarget.customRenderFunction = (CD, cD, ID, pD) => {
          let iD;
          if (this._linkedWithPrePass) {
            if (!this._prePassRenderer.enabled) return;
            this._scene.DZ().bindAttachments(this._attachmentsFromPrePass)
          }
          if (pD.length) {
            for (DD.setColorWrite(!1), iD = 0; iD < pD.length; iD++) vD(pD.data[iD]);
            DD.setColorWrite(!0)
          }
          for (iD = 0; iD < CD.length; iD++) vD(CD.data[iD]);
          for (DD.setDepthWrite(!1), iD = 0; iD < cD.length; iD++) vD(cD.data[iD]);
          if (this.renderTransparentMeshes)
            for (iD = 0; iD < ID.length; iD++) vD(ID.data[iD]);
          DD.setDepthWrite(!0)
        }
      }
      _getRenderTargetDimensions() {
        if ("object" === typeof this._ratioOrDimensions) return {
          width: Math.max(1, Math.floor(this._ratioOrDimensions.width)),
          height: Math.max(1, Math.floor(this._ratioOrDimensions.height))
        };
        const DD = this._scene.DZ();
        return {
          width: Math.max(1, Math.floor(DD.getRenderWidth() * this._ratioOrDimensions)),
          height: Math.max(1, Math.floor(DD.getRenderHeight() * this._ratioOrDimensions))
        }
      }
      _copyBonesTransformationMatrices(DD, CD) {
        for (let cD = 0; cD < DD.length; cD++) CD[cD] = DD[cD];
        return CD
      }
    }
    RC.ForceGLSL = !1, RC.DEPTH_TEXTURE_TYPE = 0, RC.NORMAL_TEXTURE_TYPE = 1, RC.POSITION_TEXTURE_TYPE = 2, RC.VELOCITY_TEXTURE_TYPE = 3, RC.REFLECTIVITY_TEXTURE_TYPE = 4, RC.SCREENSPACE_DEPTH_TEXTURE_TYPE = 5, RC.VELOCITY_LINEAR_TEXTURE_TYPE = 6, RC.IRRADIANCE_TEXTURE_TYPE = 7, RC.OBJECT_ID_TEXTURE_TYPE = 8, RC.MESH_BLEND_TAG_TEXTURE_TYPE = 9, RC._SceneComponentInitialization = DD => {
      throw (0, vC.m)("GeometryBufferRendererSceneComponent")
    };
    var kC = cD(36488);
    const dC = {
      effect: null,
      subMesh: null
    };

    function YC(DD) {
      if ("number" === typeof DD) return 1;
      if (DD instanceof TD.n) return 2;
      if (DD instanceof TD.p || DD instanceof sD.d) return 3;
      if (DD instanceof TD.s || DD instanceof sD.e) return 4;
      throw new Error("Unsupported OpenPBR property type.")
    }
    class WC {
      populateVectorFromLinkedProperties(DD) {
        const CD = YC(DD);
        for (const cD in this.linkedProperties) {
          const DD = this.linkedProperties[cD],
            ID = DD.numComponents;
          if (CD < ID || DD.targetUniformComponentOffset > CD - ID) return void(1 == ID ? xD.e.Error(`Float property ${DD.name} has an offset that is too large.`) : xD.e.Error(`Vector${ID} property ${DD.name} won't fit in Vector${CD} or has an offset that is too large.`));
          "number" === typeof DD.value ? WC._tmpArray[DD.targetUniformComponentOffset] = DD.value : DD.value.toArray(WC._tmpArray, DD.targetUniformComponentOffset)
        }
        DD.QCD(WC._tmpArray)
      }
      constructor(DD, CD) {
        this.linkedProperties = {}, this.firstLinkedKey = "", this.name = DD, this.numComponents = CD
      }
    }
    WC._tmpArray = [0, 0, 0, 0];
    class sC {
      constructor(DD, CD, cD, ID) {
        let pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          iD = arguments.length > 5 ? arguments[5] : void 0;
        this.targetUniformComponentNum = 4, this.targetUniformComponentOffset = 0, this.name = DD, this.targetUniformName = cD, this.defaultValue = CD, this.value = CD, this.targetUniformComponentNum = ID, this.targetUniformComponentOffset = pD, this.requiredDefine = iD
      }
      get numComponents() {
        return "number" === typeof this.defaultValue ? 1 : YC(this.defaultValue)
      }
    }
    class EC {
      get samplerName() {
        return this.samplerPrefix + "Sampler"
      }
      get samplerInfoName() {
        return "v" + this.samplerPrefix.charAt(0).toUpperCase() + this.samplerPrefix.slice(1) + "Infos"
      }
      get samplerMatrixName() {
        return this.samplerPrefix + "Matrix"
      }
      constructor(DD, CD, cD) {
        this.value = null, this.samplerPrefix = "", this.textureDefine = "", this.name = DD, this.samplerPrefix = CD, this.textureDefine = cD
      }
    }
    class eC extends((0, ZC.e)((0, tC.c)(RD.e))) {}
    class uC extends(function(DD) {
      return class extends DD {
        constructor() {
          super(...arguments), this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1
        }
      }
    }(eC)) {}
    class hC extends((0, ED.f)(uC)) {
      constructor(DD) {
        super(DD), this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.LIGHTCOUNT = 0, this.VERTEXCOLOR = !1, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.VERTEXALPHA = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHA_FROM_BASE_COLOR_TEXTURE = !1, this.ALPHATESTVALUE = "0.5", this.PREMULTIPLYALPHA = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.LODBASEDMICROSFURACE = !0, this.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = !1, this.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.SPECULAR_WEIGHT_IN_ALPHA = !1, this.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = !1, this.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = !1, this.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.USE_GLTF_STYLE_ANISOTROPY = !1, this.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = !1, this.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = !1, this.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = !1, this.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = !1, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.FUZZENVIRONMENTBRDF = !1, this.NORMAL = !1, this.TANGENT = !1, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.ANISOTROPIC = !1, this.ANISOTROPIC_OPENPBR = !0, this.ANISOTROPIC_BASE = !1, this.ANISOTROPIC_COAT = !1, this.FUZZ_IBL_SAMPLES = 6, this.REFRACTION_HIGH_QUALITY_BLUR = !1, this.FUZZ = !1, this.THIN_FILM = !1, this.IRIDESCENCE = !1, this.DISPERSION = !1, this.SCATTERING = !1, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !1, this.SSS_SAMPLE_COUNT = 16, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !1, this.TRANSMISSION_SLAB = !1, this.TRANSMISSION_SLAB_VOLUME = !1, this.SUBSURFACE_SLAB = !1, this.GEOMETRY_THIN_WALLED = !1, this.REFRACTED_BACKGROUND = !1, this.REFRACTED_LIGHTS = !1, this.REFRACTED_ENVIRONMENT = !1, this.REFRACTED_ENVIRONMENT_OPPOSITEZ = !1, this.REFRACTED_ENVIRONMENT_LOCAL_CUBE = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.BRDF_V_HEIGHT_CORRELATED = !0, this.MS_BRDF_ENERGY_CONSERVATION = !0, this.SPHERICAL_HARMONICS = !0, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !0, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 1, this.CONDUCTOR_SPECULAR_MODEL = 1, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.NORMALXYSCALE = !0
      }
    }
    class rC extends((0, oC.d)(uD.b)) {}
    let AC = (() => {
        var DD, CD, ID, pD, fD, bD, QD, wD, SD, BD, yD, MD, tD, ZD, oD, vD, ND, gD, XD, mD, nD, OD, PD, KD, aD, VD, zD, LD, RD, kD, dD, YD, ED, uD, FD, DC, CC, cC, IC, pC, iC, fC, bC, QC, wC, tC, ZC, oC, vC, NC, gC, XC, mC, nC, HC, UC, xC, qC, JC, KC, aC, VC, zC, jC, lC, LC, TC, GC, kC, YC, eC, uC, AC, FC, Dc, Cc, cc, Ic, pc, ic, fc, bc, Qc, wc, Sc, Bc, yc, Mc, tc, Zc, oc, vc, Nc, gc, Xc, mc, nc, Oc, Pc, Hc, Uc, xc, qc;
        let Jc, Kc, ac, Vc, zc, jc, lc, Lc, Tc, Gc, Rc, kc, dc, Yc, Wc, sc, Ec, ec, uc, hc, rc, Ac, Fc, DI, CI, cI, II, pI, iI, fI, bI, QI, wI, SI, BI, yI, MI, tI, ZI, oI, vI, NI, gI, XI, mI, nI, OI, PI, HI, UI, xI, qI, JI, KI, aI, VI, zI, jI, lI, LI, TI, GI, RI, kI, dI, YI, WI, sI, EI, eI, uI, hI, rI, AI, FI, Dp, Cp, cp, Ip, pp, ip, fp, bp, Qp, wp, Sp, Bp, yp, Mp, tp, Zp, op, vp, Np, gp, Xp, mp, np, Op, Pp, Hp, Up, xp, qp, Jp, Kp = rC,
          ap = [],
          Vp = [],
          zp = [],
          jp = [],
          lp = [],
          Lp = [],
          Tp = [],
          Gp = [],
          Rp = [],
          kp = [],
          dp = [],
          Yp = [],
          Wp = [],
          sp = [],
          Ep = [],
          ep = [],
          hp = [],
          rp = [],
          Ap = [],
          Fp = [],
          Di = [],
          Ci = [],
          ci = [],
          Ii = [],
          ii = [],
          fi = [],
          bi = [],
          Qi = [],
          wi = [],
          Si = [],
          Bi = [],
          yi = [],
          Mi = [],
          ti = [],
          Zi = [],
          oi = [],
          vi = [],
          Ni = [],
          gi = [],
          Xi = [],
          mi = [],
          ni = [],
          Oi = [],
          Pi = [],
          Hi = [],
          Ui = [],
          xi = [],
          qi = [],
          Ji = [],
          Ki = [],
          ai = [],
          Vi = [],
          zi = [],
          ji = [],
          li = [],
          Li = [],
          Ti = [],
          Gi = [],
          Ri = [],
          ki = [],
          di = [],
          Yi = [],
          Wi = [],
          si = [],
          Ei = [],
          ei = [],
          ui = [],
          ri = [],
          Ai = [],
          Fi = [],
          Df = [],
          Cf = [],
          If = [],
          pf = [],
          ff = [],
          bf = [],
          Qf = [],
          wf = [],
          Sf = [],
          Bf = [],
          yf = [],
          Mf = [],
          tf = [],
          Zf = [],
          of = [],
          vf = [],
          Nf = [],
          gf = [],
          Xf = [],
          mf = [],
          nf = [],
          Of = [],
          Pf = [],
          Hf = [],
          Uf = [],
          xf = [],
          qf = [],
          Jf = [],
          Kf = [],
          af = [],
          Vf = [],
          zf = [],
          jf = [],
          lf = [],
          Lf = [],
          Tf = [],
          Gf = [],
          Rf = [],
          kf = [],
          df = [],
          Yf = [],
          Wf = [],
          sf = [],
          Ef = [],
          ef = [],
          uf = [],
          hf = [],
          rf = [],
          Af = [],
          Ff = [],
          Db = [],
          Cb = [],
          cb = [],
          Ib = [],
          pb = [],
          ib = [],
          fb = [],
          bb = [],
          Qb = [],
          wb = [],
          Sb = [],
          Bb = [],
          yb = [],
          Mb = [],
          tb = [],
          Zb = [],
          ob = [],
          vb = [],
          Nb = [],
          gb = [],
          Xb = [],
          mb = [],
          nb = [],
          Ob = [],
          Pb = [],
          Hb = [],
          Ub = [],
          xb = [],
          qb = [],
          Jb = [],
          Kb = [],
          ab = [],
          Vb = [],
          zb = [],
          jb = [],
          lb = [],
          Lb = [],
          Tb = [],
          Gb = [],
          Rb = [],
          kb = [],
          db = [],
          Yb = [],
          Wb = [],
          sb = [],
          Eb = [],
          eb = [],
          ub = [],
          hb = [],
          rb = [],
          Ab = [],
          Fb = [],
          DQ = [],
          CQ = [],
          cQ = [],
          IQ = [],
          pQ = [],
          iQ = [],
          fQ = [],
          bQ = [],
          QQ = [],
          wQ = [],
          SQ = [],
          BQ = [],
          yQ = [],
          MQ = [],
          tQ = [],
          ZQ = [],
          oQ = [],
          vQ = [],
          NQ = [],
          gQ = [],
          XQ = [],
          mQ = [],
          nQ = [],
          OQ = [],
          PQ = [],
          HQ = [],
          UQ = [],
          xQ = [],
          qQ = [],
          JQ = [],
          KQ = [],
          aQ = [],
          VQ = [];
        return DD = class extends Kp {
          get baseWeight() {
            return (0, HD.d)(this, CD, "f")
          }
          set baseWeight(DD) {
            (0, HD.g)(this, CD, DD, "f")
          }
          get baseWeightTexture() {
            return (0, HD.d)(this, ID, "f")
          }
          set baseWeightTexture(DD) {
            (0, HD.g)(this, ID, DD, "f")
          }
          get baseColor() {
            return (0, HD.d)(this, pD, "f")
          }
          set baseColor(DD) {
            (0, HD.g)(this, pD, DD, "f")
          }
          get baseColorTexture() {
            return (0, HD.d)(this, fD, "f")
          }
          set baseColorTexture(DD) {
            (0, HD.g)(this, fD, DD, "f")
          }
          get baseDiffuseRoughness() {
            return (0, HD.d)(this, bD, "f")
          }
          set baseDiffuseRoughness(DD) {
            (0, HD.g)(this, bD, DD, "f")
          }
          get baseDiffuseRoughnessTexture() {
            return (0, HD.d)(this, QD, "f")
          }
          set baseDiffuseRoughnessTexture(DD) {
            (0, HD.g)(this, QD, DD, "f")
          }
          get baseMetalness() {
            return (0, HD.d)(this, wD, "f")
          }
          set baseMetalness(DD) {
            (0, HD.g)(this, wD, DD, "f")
          }
          get baseMetalnessTexture() {
            return (0, HD.d)(this, SD, "f")
          }
          set baseMetalnessTexture(DD) {
            (0, HD.g)(this, SD, DD, "f")
          }
          get specularWeight() {
            return (0, HD.d)(this, BD, "f")
          }
          set specularWeight(DD) {
            (0, HD.g)(this, BD, DD, "f")
          }
          get specularWeightTexture() {
            return (0, HD.d)(this, yD, "f")
          }
          set specularWeightTexture(DD) {
            (0, HD.g)(this, yD, DD, "f")
          }
          get specularColor() {
            return (0, HD.d)(this, MD, "f")
          }
          set specularColor(DD) {
            (0, HD.g)(this, MD, DD, "f")
          }
          get specularColorTexture() {
            return (0, HD.d)(this, tD, "f")
          }
          set specularColorTexture(DD) {
            (0, HD.g)(this, tD, DD, "f")
          }
          get specularRoughness() {
            return (0, HD.d)(this, ZD, "f")
          }
          set specularRoughness(DD) {
            (0, HD.g)(this, ZD, DD, "f")
          }
          get specularRoughnessTexture() {
            return (0, HD.d)(this, oD, "f")
          }
          set specularRoughnessTexture(DD) {
            (0, HD.g)(this, oD, DD, "f")
          }
          get specularRoughnessAnisotropy() {
            return (0, HD.d)(this, vD, "f")
          }
          set specularRoughnessAnisotropy(DD) {
            (0, HD.g)(this, vD, DD, "f")
          }
          get specularRoughnessAnisotropyTexture() {
            return (0, HD.d)(this, ND, "f")
          }
          set specularRoughnessAnisotropyTexture(DD) {
            (0, HD.g)(this, ND, DD, "f")
          }
          get specularIor() {
            return (0, HD.d)(this, gD, "f")
          }
          set specularIor(DD) {
            (0, HD.g)(this, gD, DD, "f")
          }
          get transmissionWeight() {
            return (0, HD.d)(this, XD, "f")
          }
          set transmissionWeight(DD) {
            (0, HD.g)(this, XD, DD, "f")
          }
          get transmissionWeightTexture() {
            return (0, HD.d)(this, mD, "f")
          }
          set transmissionWeightTexture(DD) {
            (0, HD.g)(this, mD, DD, "f")
          }
          get transmissionColor() {
            return (0, HD.d)(this, nD, "f")
          }
          set transmissionColor(DD) {
            (0, HD.g)(this, nD, DD, "f")
          }
          get transmissionColorTexture() {
            return (0, HD.d)(this, OD, "f")
          }
          set transmissionColorTexture(DD) {
            (0, HD.g)(this, OD, DD, "f")
          }
          get transmissionDepth() {
            return (0, HD.d)(this, PD, "f")
          }
          set transmissionDepth(DD) {
            (0, HD.g)(this, PD, DD, "f")
          }
          get transmissionDepthTexture() {
            return (0, HD.d)(this, KD, "f")
          }
          set transmissionDepthTexture(DD) {
            (0, HD.g)(this, KD, DD, "f")
          }
          get transmissionScatter() {
            return (0, HD.d)(this, aD, "f")
          }
          set transmissionScatter(DD) {
            (0, HD.g)(this, aD, DD, "f")
          }
          get transmissionScatterTexture() {
            return (0, HD.d)(this, VD, "f")
          }
          set transmissionScatterTexture(DD) {
            (0, HD.g)(this, VD, DD, "f")
          }
          get transmissionScatterAnisotropy() {
            return (0, HD.d)(this, zD, "f")
          }
          set transmissionScatterAnisotropy(DD) {
            (0, HD.g)(this, zD, DD, "f")
          }
          get transmissionDispersionScale() {
            return (0, HD.d)(this, LD, "f")
          }
          set transmissionDispersionScale(DD) {
            (0, HD.g)(this, LD, DD, "f")
          }
          get transmissionDispersionScaleTexture() {
            return (0, HD.d)(this, RD, "f")
          }
          set transmissionDispersionScaleTexture(DD) {
            (0, HD.g)(this, RD, DD, "f")
          }
          get transmissionDispersionAbbeNumber() {
            return (0, HD.d)(this, kD, "f")
          }
          set transmissionDispersionAbbeNumber(DD) {
            (0, HD.g)(this, kD, DD, "f")
          }
          get subsurfaceWeight() {
            return (0, HD.d)(this, dD, "f")
          }
          set subsurfaceWeight(DD) {
            (0, HD.g)(this, dD, DD, "f")
          }
          get subsurfaceWeightTexture() {
            return (0, HD.d)(this, YD, "f")
          }
          set subsurfaceWeightTexture(DD) {
            (0, HD.g)(this, YD, DD, "f")
          }
          get subsurfaceColor() {
            return (0, HD.d)(this, ED, "f")
          }
          set subsurfaceColor(DD) {
            (0, HD.g)(this, ED, DD, "f")
          }
          get subsurfaceColorTexture() {
            return (0, HD.d)(this, uD, "f")
          }
          set subsurfaceColorTexture(DD) {
            (0, HD.g)(this, uD, DD, "f")
          }
          get subsurfaceRadius() {
            return (0, HD.d)(this, FD, "f")
          }
          set subsurfaceRadius(DD) {
            (0, HD.g)(this, FD, DD, "f")
          }
          get subsurfaceRadiusScale() {
            return (0, HD.d)(this, DC, "f")
          }
          set subsurfaceRadiusScale(DD) {
            (0, HD.g)(this, DC, DD, "f")
          }
          get subsurfaceRadiusScaleTexture() {
            return (0, HD.d)(this, CC, "f")
          }
          set subsurfaceRadiusScaleTexture(DD) {
            (0, HD.g)(this, CC, DD, "f")
          }
          get subsurfaceScatterAnisotropy() {
            return (0, HD.d)(this, cC, "f")
          }
          set subsurfaceScatterAnisotropy(DD) {
            (0, HD.g)(this, cC, DD, "f")
          }
          get coatWeight() {
            return (0, HD.d)(this, IC, "f")
          }
          set coatWeight(DD) {
            (0, HD.g)(this, IC, DD, "f")
          }
          get coatWeightTexture() {
            return (0, HD.d)(this, pC, "f")
          }
          set coatWeightTexture(DD) {
            (0, HD.g)(this, pC, DD, "f")
          }
          get coatColor() {
            return (0, HD.d)(this, iC, "f")
          }
          set coatColor(DD) {
            (0, HD.g)(this, iC, DD, "f")
          }
          get coatColorTexture() {
            return (0, HD.d)(this, fC, "f")
          }
          set coatColorTexture(DD) {
            (0, HD.g)(this, fC, DD, "f")
          }
          get coatRoughness() {
            return (0, HD.d)(this, bC, "f")
          }
          set coatRoughness(DD) {
            (0, HD.g)(this, bC, DD, "f")
          }
          get coatRoughnessTexture() {
            return (0, HD.d)(this, QC, "f")
          }
          set coatRoughnessTexture(DD) {
            (0, HD.g)(this, QC, DD, "f")
          }
          get coatRoughnessAnisotropy() {
            return (0, HD.d)(this, wC, "f")
          }
          set coatRoughnessAnisotropy(DD) {
            (0, HD.g)(this, wC, DD, "f")
          }
          get coatRoughnessAnisotropyTexture() {
            return (0, HD.d)(this, tC, "f")
          }
          set coatRoughnessAnisotropyTexture(DD) {
            (0, HD.g)(this, tC, DD, "f")
          }
          get coatIor() {
            return (0, HD.d)(this, ZC, "f")
          }
          set coatIor(DD) {
            (0, HD.g)(this, ZC, DD, "f")
          }
          get coatDarkening() {
            return (0, HD.d)(this, oC, "f")
          }
          set coatDarkening(DD) {
            (0, HD.g)(this, oC, DD, "f")
          }
          get coatDarkeningTexture() {
            return (0, HD.d)(this, vC, "f")
          }
          set coatDarkeningTexture(DD) {
            (0, HD.g)(this, vC, DD, "f")
          }
          get fuzzWeight() {
            return (0, HD.d)(this, NC, "f")
          }
          set fuzzWeight(DD) {
            (0, HD.g)(this, NC, DD, "f")
          }
          get fuzzWeightTexture() {
            return (0, HD.d)(this, gC, "f")
          }
          set fuzzWeightTexture(DD) {
            (0, HD.g)(this, gC, DD, "f")
          }
          get fuzzColor() {
            return (0, HD.d)(this, XC, "f")
          }
          set fuzzColor(DD) {
            (0, HD.g)(this, XC, DD, "f")
          }
          get fuzzColorTexture() {
            return (0, HD.d)(this, mC, "f")
          }
          set fuzzColorTexture(DD) {
            (0, HD.g)(this, mC, DD, "f")
          }
          get fuzzRoughness() {
            return (0, HD.d)(this, nC, "f")
          }
          set fuzzRoughness(DD) {
            (0, HD.g)(this, nC, DD, "f")
          }
          get fuzzRoughnessTexture() {
            return (0, HD.d)(this, HC, "f")
          }
          set fuzzRoughnessTexture(DD) {
            (0, HD.g)(this, HC, DD, "f")
          }
          get geometryThinWalled() {
            return (0, HD.d)(this, UC, "f")
          }
          set geometryThinWalled(DD) {
            (0, HD.g)(this, UC, DD, "f")
          }
          get geometryNormalTexture() {
            return (0, HD.d)(this, xC, "f")
          }
          set geometryNormalTexture(DD) {
            (0, HD.g)(this, xC, DD, "f")
          }
          get geometryTangent() {
            return (0, HD.d)(this, qC, "f")
          }
          set geometryTangent(DD) {
            (0, HD.g)(this, qC, DD, "f")
          }
          get geometryTangentAngle() {
            return Math.atan2(this.geometryTangent.y, this.geometryTangent.x)
          }
          set geometryTangentAngle(DD) {
            this.geometryTangent = new TD.n(Math.cos(DD), Math.sin(DD))
          }
          get geometryTangentTexture() {
            return (0, HD.d)(this, JC, "f")
          }
          set geometryTangentTexture(DD) {
            (0, HD.g)(this, JC, DD, "f")
          }
          get geometryCoatNormalTexture() {
            return (0, HD.d)(this, KC, "f")
          }
          set geometryCoatNormalTexture(DD) {
            (0, HD.g)(this, KC, DD, "f")
          }
          get geometryCoatTangent() {
            return (0, HD.d)(this, aC, "f")
          }
          set geometryCoatTangent(DD) {
            (0, HD.g)(this, aC, DD, "f")
          }
          get geometryCoatTangentAngle() {
            return Math.atan2(this.geometryCoatTangent.y, this.geometryCoatTangent.x)
          }
          set geometryCoatTangentAngle(DD) {
            this.geometryCoatTangent = new TD.n(Math.cos(DD), Math.sin(DD))
          }
          get geometryCoatTangentTexture() {
            return (0, HD.d)(this, VC, "f")
          }
          set geometryCoatTangentTexture(DD) {
            (0, HD.g)(this, VC, DD, "f")
          }
          get geometryOpacity() {
            return (0, HD.d)(this, zC, "f")
          }
          set geometryOpacity(DD) {
            (0, HD.g)(this, zC, DD, "f")
          }
          get geometryOpacityTexture() {
            return (0, HD.d)(this, jC, "f")
          }
          set geometryOpacityTexture(DD) {
            (0, HD.g)(this, jC, DD, "f")
          }
          get geometryThickness() {
            return (0, HD.d)(this, lC, "f")
          }
          set geometryThickness(DD) {
            (0, HD.g)(this, lC, DD, "f")
          }
          get geometryThicknessTexture() {
            return (0, HD.d)(this, LC, "f")
          }
          set geometryThicknessTexture(DD) {
            (0, HD.g)(this, LC, DD, "f")
          }
          get emissionLuminance() {
            return (0, HD.d)(this, TC, "f")
          }
          set emissionLuminance(DD) {
            (0, HD.g)(this, TC, DD, "f")
          }
          get emissionColor() {
            return (0, HD.d)(this, GC, "f")
          }
          set emissionColor(DD) {
            (0, HD.g)(this, GC, DD, "f")
          }
          get emissionColorTexture() {
            return (0, HD.d)(this, kC, "f")
          }
          set emissionColorTexture(DD) {
            (0, HD.g)(this, kC, DD, "f")
          }
          get thinFilmWeight() {
            return (0, HD.d)(this, YC, "f")
          }
          set thinFilmWeight(DD) {
            (0, HD.g)(this, YC, DD, "f")
          }
          get thinFilmWeightTexture() {
            return (0, HD.d)(this, eC, "f")
          }
          set thinFilmWeightTexture(DD) {
            (0, HD.g)(this, eC, DD, "f")
          }
          get thinFilmThickness() {
            return (0, HD.d)(this, uC, "f")
          }
          set thinFilmThickness(DD) {
            (0, HD.g)(this, uC, DD, "f")
          }
          get thinFilmThicknessMin() {
            return (0, HD.d)(this, AC, "f")
          }
          set thinFilmThicknessMin(DD) {
            (0, HD.g)(this, AC, DD, "f")
          }
          get thinFilmThicknessTexture() {
            return (0, HD.d)(this, FC, "f")
          }
          set thinFilmThicknessTexture(DD) {
            (0, HD.g)(this, FC, DD, "f")
          }
          get thinFilmIor() {
            return (0, HD.d)(this, Dc, "f")
          }
          set thinFilmIor(DD) {
            (0, HD.g)(this, Dc, DD, "f")
          }
          get ambientOcclusionTexture() {
            return (0, HD.d)(this, Cc, "f")
          }
          set ambientOcclusionTexture(DD) {
            (0, HD.g)(this, Cc, DD, "f")
          }
          get sssQuality() {
            return this._sssQuality
          }
          set sssQuality(DD) {
            this._sssQuality !== DD && (this._sssQuality = DD, this.sDD(1))
          }
          get sssIrradianceTexture() {
            return this._sssIrradianceTexture
          }
          set sssIrradianceTexture(DD) {
            this._sssIrradianceTexture !== DD && (this._sssIrradianceTexture = DD, this._markAllSubMeshesAsTexturesDirty())
          }
          get sssDepthTexture() {
            return this._sssDepthTexture
          }
          set sssDepthTexture(DD) {
            this._sssDepthTexture !== DD && (this._sssDepthTexture = DD, this._markAllSubMeshesAsTexturesDirty())
          }
          get directIntensity() {
            return (0, HD.d)(this, cc, "f")
          }
          set directIntensity(DD) {
            (0, HD.g)(this, cc, DD, "f")
          }
          get environmentIntensity() {
            return (0, HD.d)(this, Ic, "f")
          }
          set environmentIntensity(DD) {
            (0, HD.g)(this, Ic, DD, "f")
          }
          get useSpecularWeightFromTextureAlpha() {
            return (0, HD.d)(this, pc, "f")
          }
          set useSpecularWeightFromTextureAlpha(DD) {
            (0, HD.g)(this, pc, DD, "f")
          }
          get forceAlphaTest() {
            return (0, HD.d)(this, ic, "f")
          }
          set forceAlphaTest(DD) {
            (0, HD.g)(this, ic, DD, "f")
          }
          get alphaCutOff() {
            return (0, HD.d)(this, fc, "f")
          }
          set alphaCutOff(DD) {
            (0, HD.g)(this, fc, DD, "f")
          }
          get useAmbientOcclusionFromMetallicTextureRed() {
            return (0, HD.d)(this, bc, "f")
          }
          set useAmbientOcclusionFromMetallicTextureRed(DD) {
            (0, HD.g)(this, bc, DD, "f")
          }
          get useAmbientInGrayScale() {
            return (0, HD.d)(this, Qc, "f")
          }
          set useAmbientInGrayScale(DD) {
            (0, HD.g)(this, Qc, DD, "f")
          }
          get hasTransparency() {
            return this.subsurfaceWeight > 0 || this.transmissionWeight > 0
          }
          get hasScattering() {
            return this.transmissionWeight > 0 && this.transmissionDepth > 0 && !this.transmissionScatter.equals(sD.d.BlackReadOnly) || this.subsurfaceWeight > 0
          }
          get usePhysicalLightFalloff() {
            return this._lightFalloff === iD.d.LIGHTFALLOFF_PHYSICAL
          }
          set usePhysicalLightFalloff(DD) {
            DD !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = DD ? iD.d.LIGHTFALLOFF_PHYSICAL : iD.d.LIGHTFALLOFF_STANDARD)
          }
          get useGLTFLightFalloff() {
            return this._lightFalloff === iD.d.LIGHTFALLOFF_GLTF
          }
          set useGLTFLightFalloff(DD) {
            DD !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = DD ? iD.d.LIGHTFALLOFF_GLTF : iD.d.LIGHTFALLOFF_STANDARD)
          }
          get useObjectSpaceNormalMap() {
            return (0, HD.d)(this, wc, "f")
          }
          set useObjectSpaceNormalMap(DD) {
            (0, HD.g)(this, wc, DD, "f")
          }
          get useParallax() {
            return (0, HD.d)(this, Sc, "f")
          }
          set useParallax(DD) {
            (0, HD.g)(this, Sc, DD, "f")
          }
          get useParallaxOcclusion() {
            return (0, HD.d)(this, Bc, "f")
          }
          set useParallaxOcclusion(DD) {
            (0, HD.g)(this, Bc, DD, "f")
          }
          get parallaxScaleBias() {
            return (0, HD.d)(this, yc, "f")
          }
          set parallaxScaleBias(DD) {
            (0, HD.g)(this, yc, DD, "f")
          }
          get disableLighting() {
            return (0, HD.d)(this, Mc, "f")
          }
          set disableLighting(DD) {
            (0, HD.g)(this, Mc, DD, "f")
          }
          get forceIrradianceInFragment() {
            return (0, HD.d)(this, tc, "f")
          }
          set forceIrradianceInFragment(DD) {
            (0, HD.g)(this, tc, DD, "f")
          }
          get maxSimultaneousLights() {
            return (0, HD.d)(this, Zc, "f")
          }
          set maxSimultaneousLights(DD) {
            (0, HD.g)(this, Zc, DD, "f")
          }
          get invertNormalMapX() {
            return (0, HD.d)(this, oc, "f")
          }
          set invertNormalMapX(DD) {
            (0, HD.g)(this, oc, DD, "f")
          }
          get invertNormalMapY() {
            return (0, HD.d)(this, vc, "f")
          }
          set invertNormalMapY(DD) {
            (0, HD.g)(this, vc, DD, "f")
          }
          get twoSidedLighting() {
            return (0, HD.d)(this, Nc, "f")
          }
          set twoSidedLighting(DD) {
            (0, HD.g)(this, Nc, DD, "f")
          }
          get useAlphaFresnel() {
            return (0, HD.d)(this, gc, "f")
          }
          set useAlphaFresnel(DD) {
            (0, HD.g)(this, gc, DD, "f")
          }
          get useLinearAlphaFresnel() {
            return (0, HD.d)(this, Xc, "f")
          }
          set useLinearAlphaFresnel(DD) {
            (0, HD.g)(this, Xc, DD, "f")
          }
          get environmentBRDFTexture() {
            return (0, HD.d)(this, mc, "f")
          }
          set environmentBRDFTexture(DD) {
            (0, HD.g)(this, mc, DD, "f")
          }
          get forceNormalForward() {
            return (0, HD.d)(this, nc, "f")
          }
          set forceNormalForward(DD) {
            (0, HD.g)(this, nc, DD, "f")
          }
          get enableSpecularAntiAliasing() {
            return (0, HD.d)(this, Oc, "f")
          }
          set enableSpecularAntiAliasing(DD) {
            (0, HD.g)(this, Oc, DD, "f")
          }
          get useHorizonOcclusion() {
            return (0, HD.d)(this, Pc, "f")
          }
          set useHorizonOcclusion(DD) {
            (0, HD.g)(this, Pc, DD, "f")
          }
          get useRadianceOcclusion() {
            return (0, HD.d)(this, Hc, "f")
          }
          set useRadianceOcclusion(DD) {
            (0, HD.g)(this, Hc, DD, "f")
          }
          get unlit() {
            return (0, HD.d)(this, Uc, "f")
          }
          set unlit(DD) {
            (0, HD.g)(this, Uc, DD, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, HD.d)(this, xc, "f")
          }
          set applyDecalMapAfterDetailMap(DD) {
            (0, HD.g)(this, xc, DD, "f")
          }
          get backgroundRefractionTexture() {
            return this._backgroundRefractionTexture
          }
          set backgroundRefractionTexture(DD) {
            this._backgroundRefractionTexture = DD, this._markAllSubMeshesAsTexturesDirty()
          }
          get refractionHighQualityBlur() {
            return this._refractionHighQualityBlur
          }
          set refractionHighQualityBlur(DD) {
            this._refractionHighQualityBlur !== DD && (this._refractionHighQualityBlur = DD, this.sDD(1))
          }
          get realTimeFiltering() {
            return this._realTimeFiltering
          }
          set realTimeFiltering(DD) {
            this._realTimeFiltering = DD, this.sDD(1)
          }
          get realTimeFilteringQuality() {
            return this._realTimeFilteringQuality
          }
          set realTimeFilteringQuality(DD) {
            this._realTimeFilteringQuality = DD, this.sDD(1)
          }
          get fuzzSampleNumber() {
            return this._fuzzSampleNumber
          }
          set fuzzSampleNumber(DD) {
            this._fuzzSampleNumber = DD, this.sDD(1)
          }
          get canRenderToMRT() {
            return !0
          }
          get debugMode() {
            return (0, HD.d)(this, qc, "f")
          }
          set debugMode(DD) {
            (0, HD.g)(this, qc, DD, "f")
          }
          constructor(cD, UD) {
            super(cD, UD, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || DD.ForceGLSL), CD.set(this, ((0, HD.m)(this, ap), (0, HD.m)(this, Vp, void 0))), this._baseWeight = ((0, HD.m)(this, zp), new sC("base_weight", 1, "vBaseWeight", 1)), ID.set(this, (0, HD.m)(this, jp, void 0)), this._baseWeightTexture = ((0, HD.m)(this, lp), new EC("base_weight", "baseWeight", "BASE_WEIGHT")), pD.set(this, (0, HD.m)(this, Lp, void 0)), this._baseColor = ((0, HD.m)(this, Tp), new sC("base_color", sD.d.White(), "vBaseColor", 4)), fD.set(this, (0, HD.m)(this, Gp, void 0)), this._baseColorTexture = ((0, HD.m)(this, Rp), new EC("base_color", "baseColor", "BASE_COLOR")), bD.set(this, (0, HD.m)(this, kp, void 0)), this._baseDiffuseRoughness = ((0, HD.m)(this, dp), new sC("base_diffuse_roughness", 0, "vBaseDiffuseRoughness", 1)), QD.set(this, (0, HD.m)(this, Yp, void 0)), this._baseDiffuseRoughnessTexture = ((0, HD.m)(this, Wp), new EC("base_diffuse_roughness", "baseDiffuseRoughness", "BASE_DIFFUSE_ROUGHNESS")), wD.set(this, (0, HD.m)(this, sp, void 0)), this._baseMetalness = ((0, HD.m)(this, Ep), new sC("base_metalness", 0, "vReflectanceInfo", 4, 0)), SD.set(this, (0, HD.m)(this, ep, void 0)), this._baseMetalnessTexture = ((0, HD.m)(this, hp), new EC("base_metalness", "baseMetalness", "BASE_METALNESS")), BD.set(this, (0, HD.m)(this, rp, void 0)), this._specularWeight = ((0, HD.m)(this, Ap), new sC("specular_weight", 1, "vReflectanceInfo", 4, 3)), yD.set(this, (0, HD.m)(this, Fp, void 0)), this._specularWeightTexture = ((0, HD.m)(this, Di), new EC("specular_weight", "specularWeight", "SPECULAR_WEIGHT")), MD.set(this, (0, HD.m)(this, Ci, void 0)), this._specularColor = ((0, HD.m)(this, ci), new sC("specular_color", sD.d.White(), "vSpecularColor", 4)), tD.set(this, (0, HD.m)(this, Ii, void 0)), this._specularColorTexture = ((0, HD.m)(this, ii), new EC("specular_color", "specularColor", "SPECULAR_COLOR")), ZD.set(this, (0, HD.m)(this, fi, void 0)), this._specularRoughness = ((0, HD.m)(this, bi), new sC("specular_roughness", .3, "vReflectanceInfo", 4, 1)), oD.set(this, (0, HD.m)(this, Qi, void 0)), this._specularRoughnessTexture = ((0, HD.m)(this, wi), new EC("specular_roughness", "specularRoughness", "SPECULAR_ROUGHNESS")), vD.set(this, (0, HD.m)(this, Si, void 0)), this._specularRoughnessAnisotropy = ((0, HD.m)(this, Bi), new sC("specular_roughness_anisotropy", 0, "vSpecularAnisotropy", 3, 2)), ND.set(this, (0, HD.m)(this, yi, void 0)), this._specularRoughnessAnisotropyTexture = ((0, HD.m)(this, Mi), new EC("specular_roughness_anisotropy", "specularRoughnessAnisotropy", "SPECULAR_ROUGHNESS_ANISOTROPY")), gD.set(this, (0, HD.m)(this, ti, void 0)), this._specularIor = ((0, HD.m)(this, Zi), new sC("specular_ior", 1.5, "vReflectanceInfo", 4, 2)), XD.set(this, (0, HD.m)(this, oi, void 0)), this._transmissionWeight = ((0, HD.m)(this, vi), new sC("transmission_weight", 0, "vTransmissionWeight", 1)), mD.set(this, (0, HD.m)(this, Ni, void 0)), this._transmissionWeightTexture = ((0, HD.m)(this, gi), new EC("transmission_weight", "transmissionWeight", "TRANSMISSION_WEIGHT")), nD.set(this, (0, HD.m)(this, Xi, void 0)), this._transmissionColor = ((0, HD.m)(this, mi), new sC("transmission_color", sD.d.White(), "vTransmissionColor", 3, 0)), OD.set(this, (0, HD.m)(this, ni, void 0)), this._transmissionColorTexture = ((0, HD.m)(this, Oi), new EC("transmission_color", "transmissionColor", "TRANSMISSION_COLOR")), PD.set(this, (0, HD.m)(this, Pi, void 0)), this._transmissionDepth = ((0, HD.m)(this, Hi), new sC("transmission_depth", 0, "vTransmissionDepth", 1, 0)), KD.set(this, (0, HD.m)(this, Ui, void 0)), this._transmissionDepthTexture = ((0, HD.m)(this, xi), new EC("transmission_depth", "transmissionDepth", "TRANSMISSION_DEPTH")), aD.set(this, (0, HD.m)(this, qi, void 0)), this._transmissionScatter = ((0, HD.m)(this, Ji), new sC("transmission_scatter", sD.d.Black(), "vTransmissionScatter", 3, 0)), VD.set(this, (0, HD.m)(this, Ki, void 0)), this._transmissionScatterTexture = ((0, HD.m)(this, ai), new EC("transmission_scatter", "transmissionScatter", "TRANSMISSION_SCATTER")), zD.set(this, (0, HD.m)(this, Vi, void 0)), this._transmissionScatterAnisotropy = ((0, HD.m)(this, zi), new sC("transmission_scatter_anisotropy", 0, "vTransmissionScatterAnisotropy", 1, 0)), LD.set(this, (0, HD.m)(this, ji, void 0)), this._transmissionDispersionScale = ((0, HD.m)(this, li), new sC("transmission_dispersion_scale", 0, "vTransmissionDispersionScale", 1, 0)), RD.set(this, (0, HD.m)(this, Li, void 0)), this._transmissionDispersionScaleTexture = ((0, HD.m)(this, Ti), new EC("transmission_dispersion_scale", "transmissionDispersionScale", "TRANSMISSION_DISPERSION_SCALE")), kD.set(this, (0, HD.m)(this, Gi, void 0)), this._transmissionDispersionAbbeNumber = ((0, HD.m)(this, Ri), new sC("transmission_dispersion_abbe_number", 20, "vTransmissionDispersionAbbeNumber", 1, 0)), dD.set(this, (0, HD.m)(this, ki, void 0)), this._subsurfaceWeight = ((0, HD.m)(this, di), new sC("subsurface_weight", 0, "vSubsurfaceWeight", 1, 0, "SUBSURFACE_SLAB")), YD.set(this, (0, HD.m)(this, Yi, void 0)), this._subsurfaceWeightTexture = ((0, HD.m)(this, Wi), new EC("subsurface_weight", "subsurfaceWeight", "SUBSURFACE_WEIGHT")), ED.set(this, (0, HD.m)(this, si, void 0)), this._subsurfaceColor = ((0, HD.m)(this, Ei), new sC("subsurface_color", new sD.d(.8, .8, .8), "vSubsurfaceColor", 3, 0, "SUBSURFACE_SLAB")), uD.set(this, (0, HD.m)(this, ei, void 0)), this._subsurfaceColorTexture = ((0, HD.m)(this, ui), new EC("subsurface_color", "subsurfaceColor", "SUBSURFACE_COLOR")), FD.set(this, (0, HD.m)(this, ri, void 0)), this._subsurfaceRadius = ((0, HD.m)(this, Ai), new sC("subsurface_radius", .1, "vSubsurfaceRadius", 1, 0, "SUBSURFACE_SLAB")), DC.set(this, (0, HD.m)(this, Fi, void 0)), this._subsurfaceRadiusScale = ((0, HD.m)(this, Df), new sC("subsurface_radius_scale", new sD.d(1, .5, .25), "vSubsurfaceRadiusScale", 3, 0, "SUBSURFACE_SLAB")), CC.set(this, (0, HD.m)(this, Cf, void 0)), this._subsurfaceRadiusScaleTexture = ((0, HD.m)(this, If), new EC("subsurface_radius_scale", "subsurfaceRadiusScale", "SUBSURFACE_RADIUS_SCALE")), cC.set(this, (0, HD.m)(this, pf, void 0)), this._subsurfaceScatterAnisotropy = ((0, HD.m)(this, ff), new sC("subsurface_scatter_anisotropy", 0, "vSubsurfaceScatterAnisotropy", 1, 0, "SUBSURFACE_SLAB")), IC.set(this, (0, HD.m)(this, bf, void 0)), this._coatWeight = ((0, HD.m)(this, Qf), new sC("coat_weight", 0, "vCoatWeight", 1, 0)), pC.set(this, (0, HD.m)(this, wf, void 0)), this._coatWeightTexture = ((0, HD.m)(this, Sf), new EC("coat_weight", "coatWeight", "COAT_WEIGHT")), iC.set(this, (0, HD.m)(this, Bf, void 0)), this._coatColor = ((0, HD.m)(this, yf), new sC("coat_color", sD.d.White(), "vCoatColor", 3, 0)), fC.set(this, (0, HD.m)(this, Mf, void 0)), this._coatColorTexture = ((0, HD.m)(this, tf), new EC("coat_color", "coatColor", "COAT_COLOR")), bC.set(this, (0, HD.m)(this, Zf, void 0)), this._coatRoughness = ((0, HD.m)(this, of), new sC("coat_roughness", 0, "vCoatRoughness", 1, 0)), QC.set(this, (0, HD.m)(this, vf, void 0)), this._coatRoughnessTexture = ((0, HD.m)(this, Nf), new EC("coat_roughness", "coatRoughness", "COAT_ROUGHNESS")), wC.set(this, (0, HD.m)(this, gf, void 0)), this._coatRoughnessAnisotropy = ((0, HD.m)(this, Xf), new sC("coat_roughness_anisotropy", 0, "vCoatRoughnessAnisotropy", 1)), tC.set(this, (0, HD.m)(this, mf, void 0)), this._coatRoughnessAnisotropyTexture = ((0, HD.m)(this, nf), new EC("coat_roughness_anisotropy", "coatRoughnessAnisotropy", "COAT_ROUGHNESS_ANISOTROPY")), ZC.set(this, (0, HD.m)(this, Of, void 0)), this._coatIor = ((0, HD.m)(this, Pf), new sC("coat_ior", 1.5, "vCoatIor", 1, 0)), oC.set(this, (0, HD.m)(this, Hf, void 0)), this._coatDarkening = ((0, HD.m)(this, Uf), new sC("coat_darkening", 1, "vCoatDarkening", 1, 0)), vC.set(this, (0, HD.m)(this, xf, void 0)), this._coatDarkeningTexture = ((0, HD.m)(this, qf), new EC("coat_darkening", "coatDarkening", "COAT_DARKENING")), this.useCoatRoughnessFromWeightTexture = !1, NC.set(this, (0, HD.m)(this, Jf, void 0)), this._fuzzWeight = ((0, HD.m)(this, Kf), new sC("fuzz_weight", 0, "vFuzzWeight", 1, 0)), gC.set(this, (0, HD.m)(this, af, void 0)), this._fuzzWeightTexture = ((0, HD.m)(this, Vf), new EC("fuzz_weight", "fuzzWeight", "FUZZ_WEIGHT")), XC.set(this, (0, HD.m)(this, zf, void 0)), this._fuzzColor = ((0, HD.m)(this, jf), new sC("fuzz_color", sD.d.White(), "vFuzzColor", 3, 0)), mC.set(this, (0, HD.m)(this, lf, void 0)), this._fuzzColorTexture = ((0, HD.m)(this, Lf), new EC("fuzz_color", "fuzzColor", "FUZZ_COLOR")), nC.set(this, (0, HD.m)(this, Tf, void 0)), this._fuzzRoughness = ((0, HD.m)(this, Gf), new sC("fuzz_roughness", .5, "vFuzzRoughness", 1, 0)), HC.set(this, (0, HD.m)(this, Rf, void 0)), this._fuzzRoughnessTexture = ((0, HD.m)(this, kf), new EC("fuzz_roughness", "fuzzRoughness", "FUZZ_ROUGHNESS")), UC.set(this, (0, HD.m)(this, df, void 0)), this._geometryThinWalled = ((0, HD.m)(this, Yf), new sC("geometry_thin_walled", 0, "vGeometryThinWalled", 1, 0)), xC.set(this, (0, HD.m)(this, Wf, void 0)), this._geometryNormalTexture = ((0, HD.m)(this, sf), new EC("geometry_normal", "geometryNormal", "GEOMETRY_NORMAL")), qC.set(this, (0, HD.m)(this, Ef, void 0)), this._geometryTangent = ((0, HD.m)(this, ef), new sC("geometry_tangent", new TD.n(1, 0), "vSpecularAnisotropy", 3, 0)), JC.set(this, (0, HD.m)(this, uf, void 0)), this._geometryTangentTexture = ((0, HD.m)(this, hf), new EC("geometry_tangent", "geometryTangent", "GEOMETRY_TANGENT")), KC.set(this, (0, HD.m)(this, rf, void 0)), this._geometryCoatNormalTexture = ((0, HD.m)(this, Af), new EC("geometry_coat_normal", "geometryCoatNormal", "GEOMETRY_COAT_NORMAL")), aC.set(this, (0, HD.m)(this, Ff, void 0)), this._geometryCoatTangent = ((0, HD.m)(this, Db), new sC("geometry_coat_tangent", new TD.n(1, 0), "vGeometryCoatTangent", 2, 0)), VC.set(this, (0, HD.m)(this, Cb, void 0)), this._geometryCoatTangentTexture = ((0, HD.m)(this, cb), new EC("geometry_coat_tangent", "geometryCoatTangent", "GEOMETRY_COAT_TANGENT")), zC.set(this, (0, HD.m)(this, Ib, void 0)), this._geometryOpacity = ((0, HD.m)(this, pb), new sC("geometry_opacity", 1, "vBaseColor", 4, 3)), jC.set(this, (0, HD.m)(this, ib, void 0)), this._geometryOpacityTexture = ((0, HD.m)(this, fb), new EC("geometry_opacity", "geometryOpacity", "GEOMETRY_OPACITY")), lC.set(this, (0, HD.m)(this, bb, void 0)), this._geometryThickness = ((0, HD.m)(this, Qb), new sC("geometry_thickness", 0, "vGeometryThickness", 1, 0)), LC.set(this, (0, HD.m)(this, wb, void 0)), this._geometryThicknessTexture = ((0, HD.m)(this, Sb), new EC("geometry_thickness", "geometryThickness", "GEOMETRY_THICKNESS")), TC.set(this, (0, HD.m)(this, Bb, void 0)), this._emissionLuminance = ((0, HD.m)(this, yb), new sC("emission_luminance", 1, "vLightingIntensity", 4, 1)), GC.set(this, (0, HD.m)(this, Mb, void 0)), this._emissionColor = ((0, HD.m)(this, tb), new sC("emission_color", sD.d.Black(), "vEmissionColor", 3)), kC.set(this, (0, HD.m)(this, Zb, void 0)), this._emissionColorTexture = ((0, HD.m)(this, ob), new EC("emission_color", "emissionColor", "EMISSION_COLOR")), YC.set(this, (0, HD.m)(this, vb, void 0)), this._thinFilmWeight = ((0, HD.m)(this, Nb), new sC("thin_film_weight", 0, "vThinFilmWeight", 1, 0)), eC.set(this, (0, HD.m)(this, gb, void 0)), this._thinFilmWeightTexture = ((0, HD.m)(this, Xb), new EC("thin_film_weight", "thinFilmWeight", "THIN_FILM_WEIGHT")), uC.set(this, (0, HD.m)(this, mb, void 0)), this._thinFilmThickness = ((0, HD.m)(this, nb), new sC("thin_film_thickness", .5, "vThinFilmThickness", 2, 0)), AC.set(this, (0, HD.m)(this, Ob, void 0)), this._thinFilmThicknessMin = ((0, HD.m)(this, Pb), new sC("thin_film_thickness_min", 0, "vThinFilmThickness", 2, 1)), FC.set(this, (0, HD.m)(this, Hb, void 0)), this._thinFilmThicknessTexture = ((0, HD.m)(this, Ub), new EC("thin_film_thickness", "thinFilmThickness", "THIN_FILM_THICKNESS")), Dc.set(this, (0, HD.m)(this, xb, void 0)), this._thinFilmIor = ((0, HD.m)(this, qb), new sC("thin_film_ior", 1.4, "vThinFilmIor", 1, 0)), Cc.set(this, (0, HD.m)(this, Jb, void 0)), this._ambientOcclusionTexture = ((0, HD.m)(this, Kb), new EC("ambient_occlusion", "ambientOcclusion", "AMBIENT_OCCLUSION")), this._sssQuality = DD.SSS_QUALITY_MEDIUM, this._sssIrradianceTexture = null, this._sssDepthTexture = null, this._uniformsList = {}, this._uniformsArray = [], this._samplersList = {}, this._samplerDefines = {}, cc.set(this, (0, HD.m)(this, ab, 1)), Ic.set(this, ((0, HD.m)(this, Vb), (0, HD.m)(this, zb, 1))), pc.set(this, ((0, HD.m)(this, jb), (0, HD.m)(this, lb, !1))), ic.set(this, ((0, HD.m)(this, Lb), (0, HD.m)(this, Tb, !1))), fc.set(this, ((0, HD.m)(this, Gb), (0, HD.m)(this, Rb, .4))), bc.set(this, ((0, HD.m)(this, kb), (0, HD.m)(this, db, !1))), Qc.set(this, ((0, HD.m)(this, Yb), (0, HD.m)(this, Wb, !1))), wc.set(this, ((0, HD.m)(this, sb), (0, HD.m)(this, Eb, !1))), Sc.set(this, ((0, HD.m)(this, eb), (0, HD.m)(this, ub, !1))), Bc.set(this, ((0, HD.m)(this, hb), (0, HD.m)(this, rb, !1))), yc.set(this, ((0, HD.m)(this, Ab), (0, HD.m)(this, Fb, .05))), Mc.set(this, ((0, HD.m)(this, DQ), (0, HD.m)(this, CQ, !1))), tc.set(this, ((0, HD.m)(this, cQ), (0, HD.m)(this, IQ, !1))), Zc.set(this, ((0, HD.m)(this, pQ), (0, HD.m)(this, iQ, 4))), oc.set(this, ((0, HD.m)(this, fQ), (0, HD.m)(this, bQ, !1))), vc.set(this, ((0, HD.m)(this, QQ), (0, HD.m)(this, wQ, !1))), Nc.set(this, ((0, HD.m)(this, SQ), (0, HD.m)(this, BQ, !1))), gc.set(this, ((0, HD.m)(this, yQ), (0, HD.m)(this, MQ, !1))), Xc.set(this, ((0, HD.m)(this, tQ), (0, HD.m)(this, ZQ, !1))), mc.set(this, ((0, HD.m)(this, oQ), (0, HD.m)(this, vQ, null))), nc.set(this, ((0, HD.m)(this, NQ), (0, HD.m)(this, gQ, !1))), Oc.set(this, ((0, HD.m)(this, XQ), (0, HD.m)(this, mQ, !1))), Pc.set(this, ((0, HD.m)(this, nQ), (0, HD.m)(this, OQ, !0))), Hc.set(this, ((0, HD.m)(this, PQ), (0, HD.m)(this, HQ, !0))), Uc.set(this, ((0, HD.m)(this, UQ), (0, HD.m)(this, xQ, !1))), xc.set(this, ((0, HD.m)(this, qQ), (0, HD.m)(this, JQ, !1))), this._lightingInfos = ((0, HD.m)(this, KQ), new TD.s(this.directIntensity, 1, this.environmentIntensity, 1)), this._radianceTexture = null, this._useSpecularWeightFromAlpha = !1, this._useSpecularWeightFromSpecularColorTexture = !1, this._useSpecularRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessFromGreenChannel = !1, this._useGltfStyleAnisotropy = !1, this._useFuzzRoughnessFromTextureAlpha = !1, this._useSubsurfaceWeightFromTextureAlpha = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromBaseColorTexture = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallicFromMetallicTextureBlue = !1, this._useThinFilmThicknessFromTextureGreen = !1, this._useGeometryThicknessFromGreenChannel = !1, this._lightFalloff = iD.d.LIGHTFALLOFF_PHYSICAL, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._environmentFuzzBRDFTexture = null, this._backgroundRefractionTexture = null, this._refractionHighQualityBlur = !0, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._fuzzSampleNumber = 4, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new qD.f(16), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, qc.set(this, (0, HD.m)(this, aQ, 0)), this.debugLimit = ((0, HD.m)(this, VQ), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this._transparencyMode = iD.d.MATERIAL_OPAQUE, this.hq() && !this.hq()?.DZ().isWebGPU && this.hq().DZ().JZ < 2 && xD.e.Error("OpenPBRMaterial: WebGL 2.0 or above is required for this material."), DD._noiseTextures[this.hq().uniqueId] || (DD._noiseTextures[this.hq().uniqueId] = new JD.c(PC.g.GetAssetUrl("https://assets.babylonjs.com/core/blue_noise/blue_noise_rgb.png"), this.hq(), !1, !0, 1), this.hq().Aq.addOnce((() => {
              DD._noiseTextures[this.hq().uniqueId]?.dispose(), delete DD._noiseTextures[this.hq().uniqueId]
            }))), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), hD.e.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget && this._renderTargets.push(this._radianceTexture), hD.e.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget && this._renderTargets.push(this._backgroundRefractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = lD(this.hq()), this._environmentFuzzBRDFTexture = jD(this.hq()), this.prePassConfiguration = new WD.c, this._propertyList = {};
            for (const DD of Object.getOwnPropertyNames(this)) {
              const CD = this[DD];
              CD instanceof sC && (this._propertyList[DD] = CD)
            }
            Object.keys(this._propertyList).forEach((DD => {
              const CD = this._propertyList[DD];
              let cD = this._uniformsList[CD.targetUniformName];
              cD ? cD.numComponents !== CD.targetUniformComponentNum ? xD.e.Error(`Uniform ${CD.targetUniformName} already exists of size ${cD.numComponents}, but trying to set it to ${CD.targetUniformComponentNum}.`) : cD.requiredDefine !== CD.requiredDefine && (cD.requiredDefine = void 0) : (cD = new WC(CD.targetUniformName, CD.targetUniformComponentNum), cD.requiredDefine = CD.requiredDefine, this._uniformsList[CD.targetUniformName] = cD), "" === cD.firstLinkedKey && (cD.firstLinkedKey = CD.name), cD.linkedProperties[CD.name] = CD
            })), this._uniformsArray = Object.values(this._uniformsList), this._samplersList = {};
            for (const DD of Object.getOwnPropertyNames(this)) {
              const CD = this[DD];
              CD instanceof EC && (this._samplersList[DD] = CD)
            }
            for (const DD in this._samplersList) {
              const CD = this._samplersList[DD].textureDefine;
              this._samplerDefines[CD] = {
                type: "boolean",
                default: !1
              }, this._samplerDefines[CD + "DIRECTUV"] = {
                type: "number",
                default: 0
              }, this._samplerDefines[CD + "_GAMMA"] = {
                type: "boolean",
                default: !1
              }
            }
            this._baseWeight, this._baseWeightTexture, this._baseColor, this._baseColorTexture, this._baseDiffuseRoughness, this._baseDiffuseRoughnessTexture, this._baseMetalness, this._baseMetalnessTexture, this._specularWeight, this._specularWeightTexture, this._specularColor, this._specularColorTexture, this._specularRoughness, this._specularIor, this._specularRoughnessTexture, this._specularRoughnessAnisotropy, this._specularRoughnessAnisotropyTexture, this._transmissionWeight, this._transmissionWeightTexture, this._transmissionColor, this._transmissionColorTexture, this._transmissionDepth, this._transmissionDepthTexture, this._transmissionScatter, this._transmissionScatterTexture, this._transmissionScatterAnisotropy, this._transmissionDispersionScale, this._transmissionDispersionScaleTexture, this._transmissionDispersionAbbeNumber, this._subsurfaceWeight, this._subsurfaceWeightTexture, this._subsurfaceColor, this._subsurfaceColorTexture, this._subsurfaceRadius, this._subsurfaceRadiusScale, this._subsurfaceRadiusScaleTexture, this._subsurfaceScatterAnisotropy, this._coatWeight, this._coatWeightTexture, this._coatColor, this._coatColorTexture, this._coatRoughness, this._coatRoughnessTexture, this._coatRoughnessAnisotropy, this._coatRoughnessAnisotropyTexture, this._coatIor, this._coatDarkening, this._coatDarkeningTexture, this._fuzzWeight, this._fuzzWeightTexture, this._fuzzColor, this._fuzzColorTexture, this._fuzzRoughness, this._fuzzRoughnessTexture, this._geometryThinWalled, this._geometryNormalTexture, this._geometryTangent, this._geometryTangentTexture, this._geometryCoatNormalTexture, this._geometryCoatTangent, this._geometryCoatTangentTexture, this._geometryOpacity, this._geometryOpacityTexture, this._geometryThickness, this._geometryThicknessTexture, this._thinFilmWeight, this._thinFilmWeightTexture, this._thinFilmThickness, this._thinFilmThicknessMin, this._thinFilmThicknessTexture, this._thinFilmIor, this._emissionLuminance, this._emissionColor, this._emissionColorTexture, this._ambientOcclusionTexture
          }
          get hasRenderTargetTextures() {
            return !!(hD.e.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget) || (!!(hD.e.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
          }
          get isPrePassCapable() {
            return !this.disableDepthWrite
          }
          getClassName() {
            return "OpenPBRMaterial"
          }
          get transparencyMode() {
            return this._transparencyMode
          }
          set transparencyMode(DD) {
            this._transparencyMode !== DD && (this._transparencyMode = DD, this._markAllSubMeshesAsTexturesAndMiscDirty())
          }
          _shouldUseAlphaFromBaseColorTexture() {
            return this._hasAlphaChannel() && this._transparencyMode !== iD.d.MATERIAL_OPAQUE && !this.geometryOpacityTexture
          }
          _hasAlphaChannel() {
            return null != this.baseColorTexture && this.baseColorTexture.hasAlpha && this._useAlphaFromBaseColorTexture || null != this.geometryOpacityTexture
          }
          needAlphaBlending() {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture
          }
          needAlphaBlendingForMesh(DD) {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture || super.needAlphaBlendingForMesh(DD)
          }
          clone(CD) {
            let cD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              ID = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const pD = OC.d.Clone((() => new DD(CD, this.hq())), this, {
              cloneTexturesOnlyOnce: cD
            });
            return pD.id = CD, pD.name = CD, this.stencil.copyTo(pD.stencil), this._clonePlugins(pD, ID), pD
          }
          serialize() {
            const DD = super.serialize();
            return DD.customType = "BABYLON.OpenPBRMaterial", DD
          }
          static Parse(CD, cD, ID) {
            const pD = OC.d.Parse((() => new DD(CD.name, cD)), CD, cD, ID);
            return CD.stencil && pD.stencil.parse(CD.stencil, cD, ID), iD.d._ParsePlugins(CD, pD, cD, ID), pD
          }
          forceCompilation(DD, CD, cD) {
            const ID = {
              clipPlane: !1,
              useInstances: !1,
              ...cD
            };
            this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
            (() => {
              if (this._breakShaderLoadedCheck) return;
              const cD = new hC({
                  ...this._eventInfo.defineNames || {},
                  ...this._samplerDefines || {}
                }),
                pD = this._prepareEffect(DD, DD, cD, void 0, void 0, ID.useInstances, ID.clipPlane);
              this._onEffectCreatedObservable && (dC.effect = pD, dC.subMesh = null, this._onEffectCreatedObservable.notifyObservers(dC)), pD.isReady() ? CD && CD(this) : pD.onCompileObservable.add((() => {
                CD && CD(this)
              }))
            })()
          }
          isReadyForSubMesh(CD, cD, ID) {
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const pD = cD._drawWrapper;
            if (pD.effect && this.isFrozen && pD._wasPreviouslyReady && pD._wasPreviouslyUsingInstances === ID) return !0;
            cD.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), cD.materialDefines = new hC({
              ...this._eventInfo.defineNames || {},
              ...this._samplerDefines || {}
            }));
            const iD = cD.materialDefines;
            if (this._isReadyForSubMesh(cD)) return !0;
            const fD = this.hq(),
              bD = fD.DZ();
            if (iD._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, fD.texturesEnabled)) {
              for (const DD in this._samplersList) {
                const CD = this._samplersList[DD];
                if (CD.value && !CD.value.isReadyOrNotBlocking()) return !1
              }
              const CD = this._getRadianceTexture();
              if (CD && hD.e.ReflectionTextureEnabled) {
                if (!CD.isReadyOrNotBlocking()) return !1;
                if (CD.irradianceTexture) {
                  if (!CD.irradianceTexture.isReadyOrNotBlocking()) return !1
                } else if (!CD.sphericalPolynomial && CD.getInternalTexture()?._sphericalPolynomialPromise) return !1
              }
              if (this._environmentBRDFTexture && hD.e.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1;
              if (this._environmentFuzzBRDFTexture && hD.e.ReflectionTextureEnabled && !this._environmentFuzzBRDFTexture.isReady()) return !1;
              if (this._backgroundRefractionTexture && hD.e.RefractionTextureEnabled && !this._backgroundRefractionTexture.isReadyOrNotBlocking()) return !1;
              if (DD._noiseTextures[fD.uniqueId] && !DD._noiseTextures[fD.uniqueId].isReady()) return !1;
              if (this._sssIrradianceTexture && this._sssDepthTexture) {
                if (!this._sssIrradianceTexture.isReady()) return !1;
                if (!this._sssDepthTexture.isReady()) return !1
              }
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = iD, this._eventInfo.subMesh = cD, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (iD._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
            if (iD.AREALIGHTUSED)
              for (let DD = 0; DD < CD.lightSources.length; DD++)
                if (!CD.lightSources[DD]._isReady()) return !1;
            if (bD.getCaps().standardDerivatives || CD.isVerticesDataPresent(GD.k.NormalKind) || (CD.createNormals(!0), xD.e.Warn("OpenPBRMaterial: Normals have been created for the mesh: " + CD.name)), !(0, AD.c)(fD, CD, this._maxSimultaneousLights, this._disableLighting)) return !1;
            const QD = cD.effect,
              wD = iD._areLightsDisposed,
              SD = this._prepareEffect(CD, cD.getRenderingMesh(), iD, this.onCompiled, this.onError, ID, null);
            let BD = !1;
            if (SD)
              if (this._onEffectCreatedObservable && (dC.effect = SD, dC.subMesh = cD, this._onEffectCreatedObservable.notifyObservers(dC)), this.allowShaderHotSwapping && QD && !SD.isReady()) {
                if (iD.markAsUnprocessed(), BD = this.isFrozen, wD) return iD._areLightsDisposed = !0, !1
              } else fD.resetCachedMaterial(), cD.setEffect(SD, iD, this._materialContext);
            return !(!cD.effect || !cD.effect.isReady()) && (iD._renderId = fD.getRenderId(), pD._wasPreviouslyReady = !BD, pD._wasPreviouslyUsingInstances = !!ID, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const DD = this._uniformBuffer;
            DD.addUniform("vTangentSpaceParams", 2), DD.addUniform("vLightingIntensity", 4), DD.addUniform("pointSize", 1), DD.addUniform("vDebugMode", 2), DD.addUniform("renderTargetSize", 2), DD.addUniform("cameraInfo", 4), DD.addUniform("vTextureRepetitionHexTilingParams", 4), DD.addUniform("backgroundRefractionMatrix", 16), DD.addUniform("vBackgroundRefractionInfos", 3), (0, AD.ob)(DD, !0, !0, !0, !0, !0), Object.values(this._uniformsList).forEach((CD => {
              DD.addUniform(CD.name, CD.numComponents)
            })), Object.values(this._samplersList).forEach((CD => {
              DD.addUniform(CD.samplerInfoName, 2), DD.addUniform(CD.samplerMatrixName, 16)
            })), super.buildUniformLayout()
          }
          bindPropertiesForSubMesh(DD, CD, cD, ID) {
            if (0 === this.geometryThickness) DD.updateFloat("vGeometryThickness", 0);
            else {
              ID.getRenderingMesh().getWorldMatrix().decompose(TD.l.cZ[0]);
              const CD = Math.max(Math.abs(TD.l.cZ[0].x), Math.abs(TD.l.cZ[0].y), Math.abs(TD.l.cZ[0].z));
              DD.updateFloat("vGeometryThickness", this.geometryThickness * CD)
            }
          }
          bindForSubMesh(CD, cD, ID) {
            const pD = this.hq(),
              iD = ID.materialDefines;
            if (!iD) return;
            const fD = ID.effect;
            if (!fD) return;
            this._activeEffect = fD, cD.getMeshUniformBuffer().bindToEffect(fD, "Mesh"), cD.transferToEffect(CD);
            const bD = pD.DZ();
            this._uniformBuffer.bindToEffect(fD, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, pD, cD, CD, this.isFrozen), MC.d.Bind(bD.currentRenderPassId, this._activeEffect, cD, CD, this);
            const QD = pD.activeCamera;
            QD ? this._uniformBuffer.updateFloat4("cameraInfo", QD.minZ, QD.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const wD = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", wD[0], wD[1], wD[2], wD[3]), this._eventInfo.subMesh = ID, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), iD.OBJECTSPACE_NORMALMAP && (CD.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const SD = this._mustRebind(pD, fD, ID, cD.visibility),
              BD = bD._features.needToAlwaysBindUniformBuffers;
            (0, AD.d)(cD, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, BC.c)(this._activeEffect, this._vertexPullingMetadata);
            const yD = this._uniformBuffer;
            if (SD) {
              this.bindViewProjection(fD);
              const CD = this._getRadianceTexture();
              if (!yD.useUbo || !this.isFrozen || !yD.isSync || ID._drawWrapper._forceRebindOnNextCall) {
                if (pD.texturesEnabled) {
                  for (const DD in this._samplersList) {
                    const CD = this._samplersList[DD];
                    CD.value && (yD.updateFloat2(CD.samplerInfoName, CD.value.coordinatesIndex, CD.value.level), (0, AD.C)(CD.value, yD, CD.samplerPrefix))
                  }(this.geometryNormalTexture || this.geometryCoatNormalTexture) && (pD._mirroredCameraPosition ? yD.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : yD.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, AD.l)(pD, iD, yD, sD.d.White(), CD, this.realTimeFiltering, !0, !0, !0, !0, !0)
                }
                this.pointsCloud && yD.updateFloat("pointSize", this.pointSize);
                const DD = this._uniformsArray;
                for (let CD = 0, cD = DD.length; CD < cD; CD++) {
                  const cD = DD[CD];
                  (void 0 === cD.requiredDefine || iD[cD.requiredDefine]) && (4 === cD.numComponents ? (cD.populateVectorFromLinkedProperties(TD.l.Vector4[0]), yD.updateVector4(cD.name, TD.l.Vector4[0])) : 3 === cD.numComponents ? (cD.populateVectorFromLinkedProperties(TD.l.cZ[0]), yD.updateVector3(cD.name, TD.l.cZ[0])) : 2 === cD.numComponents ? (cD.populateVectorFromLinkedProperties(TD.l.Vector2[0]), yD.updateFloat2(cD.name, TD.l.Vector2[0].x, TD.l.Vector2[0].y)) : 1 === cD.numComponents && yD.updateFloat(cD.name, cD.linkedProperties[cD.firstLinkedKey].value))
                }
                this._lightingInfos.x = this.directIntensity, this._lightingInfos.y = this.emissionLuminance, this._lightingInfos.z = this.environmentIntensity * pD.environmentIntensity, this._lightingInfos.w = 1, yD.updateVector4("vLightingIntensity", this._lightingInfos), yD.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
              }
              if (pD.texturesEnabled) {
                for (const DD in this._samplersList) {
                  const CD = this._samplersList[DD];
                  CD.value && yD.setTexture(CD.samplerName, CD.value)
                }
                if ((0, AD.n)(pD, iD, yD, CD, this.realTimeFiltering), iD.ENVIRONMENTBRDF && yD.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), iD.FUZZENVIRONMENTBRDF && yD.setTexture("environmentFuzzBrdfSampler", this._environmentFuzzBRDFTexture), iD.REFRACTED_BACKGROUND && (yD.setTexture("backgroundRefractionSampler", this._backgroundRefractionTexture), yD.o5("backgroundRefractionMatrix", this._backgroundRefractionTexture.getReflectionTextureMatrix()), TD.l.cZ[1].set(Math.log2(this._backgroundRefractionTexture.getSize().width), 0, 0), yD.updateVector3("vBackgroundRefractionInfos", TD.l.cZ[1])), (iD.ANISOTROPIC || iD.FUZZ || iD.REFRACTED_BACKGROUND || iD.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && yD.setTexture("blueNoiseSampler", DD._noiseTextures[this.hq().uniqueId]), iD.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && this.sssIrradianceTexture && this.sssDepthTexture) {
                  const DD = this.sssIrradianceTexture.getSize().width,
                    CD = this.sssIrradianceTexture.getSize().height;
                  yD.setTexture("sceneIrradianceSampler", this.sssIrradianceTexture), yD.setTexture("sceneDepthSampler", this.sssDepthTexture), yD.updateFloat2("renderTargetSize", DD, CD)
                }
              }
              this.hq().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(cD) && this.hq().depthPeelingRenderer.bind(fD), this._eventInfo.subMesh = ID, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, SC.i)(this._activeEffect, this, pD), this.bindEyePosition(fD)
            } else BD && (this._needToBindSceneUbo = !0);
            this.bindPropertiesForSubMesh(this._uniformBuffer, pD, pD.DZ(), ID), !SD && this.isFrozen && !BD || !pD.lightsEnabled || this._disableLighting || (0, AD.r)(pD, cD, this._activeEffect, iD, this._maxSimultaneousLights), !SD && this.isFrozen || (this.bindView(fD), (0, AD.h)(pD, cD, this._activeEffect, !0), iD.NUM_MORPH_INFLUENCERS && (0, AD.y)(cD, this._activeEffect), iD.BAKED_VERTEX_ANIMATION_TEXTURE && cD.bakedVertexAnimationManager?.bind(fD, iD.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, AD.u)(iD, this._activeEffect, pD)), this._afterBind(cD, this._activeEffect, ID), yD.update()
          }
          getAnimatables() {
            const DD = super.getAnimatables();
            for (const CD in this._samplersList) {
              const cD = this._samplersList[CD];
              cD.value && cD.value.animations && cD.value.animations.length > 0 && DD.push(cD.value)
            }
            return this._radianceTexture && this._radianceTexture.animations && this._radianceTexture.animations.length > 0 && DD.push(this._radianceTexture), DD
          }
          getActiveTextures() {
            const DD = super.getActiveTextures();
            for (const CD in this._samplersList) {
              const cD = this._samplersList[CD];
              cD.value && DD.push(cD.value)
            }
            return this._radianceTexture && DD.push(this._radianceTexture), DD
          }
          hasTexture(DD) {
            if (super.hasTexture(DD)) return !0;
            for (const CD in this._samplersList) {
              if (this._samplersList[CD].value === DD) return !0
            }
            return this._radianceTexture === DD
          }
          setPrePassRenderer() {
            return !1
          }
          dispose(DD, CD) {
            if (this._breakShaderLoadedCheck = !0, CD) {
              this._environmentBRDFTexture && this.hq().openPBREnvironmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._environmentFuzzBRDFTexture && this.hq().environmentFuzzBRDFTexture !== this._environmentFuzzBRDFTexture && this._environmentFuzzBRDFTexture.dispose(), this._backgroundRefractionTexture = null;
              for (const DD in this._samplersList) {
                const CD = this._samplersList[DD];
                CD.value?.dispose()
              }
              this._radianceTexture?.dispose()
            }
            this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(DD, CD)
          }
          _getRadianceTexture() {
            return this._radianceTexture ? this._radianceTexture : this.hq().environmentTexture
          }
          _prepareEffect(CD, cD, ID) {
            let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              iD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              fD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              bD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
            if (this._prepareDefines(CD, cD, ID, fD, bD), !ID.isDirty) return null;
            ID.markAsProcessed();
            const QD = this.hq().DZ(),
              wD = new rD.b;
            let SD = 0;
            ID.USESPHERICALINVERTEX && wD.addFallback(SD++, "USESPHERICALINVERTEX"), ID.FOG && wD.addFallback(SD, "FOG"), ID.SPECULARAA && wD.addFallback(SD, "SPECULARAA"), ID.POINTSIZE && wD.addFallback(SD, "POINTSIZE"), ID.LOGARITHMICDEPTH && wD.addFallback(SD, "LOGARITHMICDEPTH"), ID.PARALLAX && wD.addFallback(SD, "PARALLAX"), ID.PARALLAX_RHS && wD.addFallback(SD, "PARALLAX_RHS"), ID.PARALLAXOCCLUSION && wD.addFallback(SD++, "PARALLAXOCCLUSION"), ID.ENVIRONMENTBRDF && wD.addFallback(SD++, "ENVIRONMENTBRDF"), ID.TANGENT && wD.addFallback(SD++, "TANGENT"), SD = (0, AD.D)(ID, wD, this._maxSimultaneousLights, SD), ID.SPECULARTERM && wD.addFallback(SD++, "SPECULARTERM"), ID.USESPHERICALFROMREFLECTIONMAP && wD.addFallback(SD++, "USESPHERICALFROMREFLECTIONMAP"), ID.USEIRRADIANCEMAP && wD.addFallback(SD++, "USEIRRADIANCEMAP"), ID.NORMAL && wD.addFallback(SD++, "NORMAL"), ID.VERTEXCOLOR && wD.addFallback(SD++, "VERTEXCOLOR"), ID.MORPHTARGETS && wD.addFallback(SD++, "MORPHTARGETS"), ID.MULTIVIEW && wD.addFallback(0, "MULTIVIEW");
            const BD = [GD.k.PositionKind];
            ID.NORMAL && BD.push(GD.k.NormalKind), ID.TANGENT && BD.push(GD.k.TangentKind);
            for (let DD = 1; DD <= 6; ++DD) ID["UV" + DD] && BD.push(`uv${1===DD?"":DD}`);
            ID.VERTEXCOLOR && BD.push(GD.k.ColorKind), (0, AD.K)(BD, CD, ID, wD), (0, AD.L)(BD, ID), (0, AD.O)(BD, CD, ID), (0, AD.H)(BD, CD, ID);
            let yD = "openpbr";
            const MD = ["world", "view", "viewProjection", "projection", "vEyePosition", "inverseProjection", "renderTargetSize", "vLightsType", "visibility", "vFogInfos", "vFogColor", "pointSize", "mBones", "normalMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams", "backgroundRefractionMatrix", "vBackgroundRefractionInfos"];
            for (const DD in this._uniformsList) MD.push(DD);
            const tD = ["environmentBrdfSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
            ID.FUZZENVIRONMENTBRDF && tD.push("environmentFuzzBrdfSampler"), ID.REFRACTED_BACKGROUND && tD.push("backgroundRefractionSampler"), (ID.ANISOTROPIC || ID.FUZZ || ID.REFRACTED_BACKGROUND || ID.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && tD.push("blueNoiseSampler"), ID.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && (tD.push("sceneIrradianceSampler"), tD.push("sceneDepthSampler"));
            for (const DD in this._samplersList) {
              const CD = this._samplersList[DD];
              tD.push(CD.samplerName), MD.push(CD.samplerInfoName), MD.push(CD.samplerMatrixName)
            }(0, AD.pb)(MD, tD, !0);
            const ZD = ["Material", "Scene", "Mesh"],
              oD = {
                maxSimultaneousLights: this._maxSimultaneousLights,
                maxSimultaneousMorphTargets: ID.NUM_MORPH_INFLUENCERS
              };
            if (this._eventInfo.fallbacks = wD, this._eventInfo.fallbackRank = SD, this._eventInfo.defines = ID, this._eventInfo.uniforms = MD, this._eventInfo.attributes = BD, this._eventInfo.samplers = tD, this._eventInfo.uniformBuffersNames = ZD, this._eventInfo.customCode = void 0, this._eventInfo.mesh = CD, this._eventInfo.indexParameters = oD, this._callbackPluginEventGeneric(128, this._eventInfo), MC.d.AddUniformsAndSamplers(MD, tD), WD.c.AddUniforms(MD), WD.c.AddSamplers(tD), (0, SC.e)(MD), this._useVertexPulling) {
              const DD = cD?.geometry;
              DD && (this._vertexPullingMetadata = (0, BC.f)(DD), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((DD, CD) => {
                MD.push(`vp_${CD}_info`)
              })))
            } else this._vertexPullingMetadata = null;
            eD.c && (eD.c.PrepareUniforms(MD, ID), eD.c.PrepareSamplers(tD, ID)), (0, AD.qb)({
              uniformsNames: MD,
              uniformBuffersNames: ZD,
              samplers: tD,
              defines: ID,
              maxSimultaneousLights: this._maxSimultaneousLights,
              shaderLanguage: this._shaderLanguage
            });
            const vD = {};
            this.customShaderNameResolve && (yD = this.customShaderNameResolve(yD, MD, ZD, tD, ID, BD, vD));
            const ND = ID.toString(),
              gD = QD.createEffect(yD, {
                attributes: BD,
                uniformsNames: MD,
                uniformBuffersNames: ZD,
                samplers: tD,
                defines: ND,
                fallbacks: wD,
                onCompiled: pD,
                onError: iD,
                indexParameters: oD,
                processFinalCode: vD.processFinalCode,
                processCodeAfterIncludes: this._eventInfo.customCode,
                multiTarget: ID.PREPASS,
                shaderLanguage: this._shaderLanguage,
                extraInitializationsAsync: DD._ShaderLoader.getLoadCallback(this._shaderLanguage)
              }, QD);
            return this._eventInfo.customCode = void 0, gD
          }
          _prepareDefines(CD, cD, ID) {
            let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              fD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const bD = cD.hasThinInstances,
              QD = this.hq(),
              wD = QD.DZ();
            (0, AD.cb)(QD, CD, ID, !0, this._maxSimultaneousLights, this._disableLighting), ID._needNormals = !0, (0, AD.hb)(QD, ID);
            const SD = this.needAlphaBlendingForMesh(CD) && this.hq().useOrderIndependentTransparency;
            if ((0, AD.nb)(QD, ID, this.canRenderToMRT && !SD), (0, AD.lb)(QD, ID, SD), MC.d.PrepareDefines(wD.currentRenderPassId, CD, ID), ID._areTexturesDirty) {
              ID._needUVs = !1;
              for (let DD = 1; DD <= 6; ++DD) ID["MAINUV" + DD] = !1;
              if (QD.texturesEnabled) {
                for (const cD in this._samplersList) {
                  const DD = this._samplersList[cD];
                  DD.value ? ((0, AD.db)(DD.value, ID, DD.textureDefine), ID[DD.textureDefine + "_GAMMA"] = DD.value.gammaSpace) : ID[DD.textureDefine] = !1
                }
                const DD = this._getRadianceTexture(),
                  CD = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || wD.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
                if ((0, AD.$)(QD, DD, ID, this.realTimeFiltering, this.realTimeFilteringQuality, !CD), this._baseMetalnessTexture && (ID.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed), ID.SPECULAR_WEIGHT_IN_ALPHA = this._useSpecularWeightFromAlpha, ID.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = this._useSpecularWeightFromSpecularColorTexture, ID.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useSpecularRoughnessAnisotropyFromTangentTexture, ID.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useCoatRoughnessAnisotropyFromTangentTexture, ID.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = this._useCoatRoughnessFromGreenChannel, ID.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = this._useRoughnessFromMetallicTextureGreen, ID.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = this._useFuzzRoughnessFromTextureAlpha, ID.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = this._useSubsurfaceWeightFromTextureAlpha, ID.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = this._useMetallicFromMetallicTextureBlue, ID.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = this._useThinFilmThicknessFromTextureGreen, ID.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = this._useGeometryThicknessFromGreenChannel, this.geometryNormalTexture ? (this._useParallax && this.baseColorTexture && hD.e.DiffuseTextureEnabled ? (ID.PARALLAX = !0, ID.PARALLAX_RHS = QD.useRightHandedSystem, ID.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : ID.PARALLAX = !1, ID.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (ID.PARALLAX = !1, ID.PARALLAX_RHS = !1, ID.PARALLAXOCCLUSION = !1, ID.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && hD.e.ReflectionTextureEnabled ? (ID.ENVIRONMENTBRDF = !0, ID.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (ID.ENVIRONMENTBRDF = !1, ID.ENVIRONMENTBRDF_RGBD = !1), this._environmentFuzzBRDFTexture ? ID.FUZZENVIRONMENTBRDF = !0 : ID.FUZZENVIRONMENTBRDF = !1, this.hasTransparency) {
                  ID.REFRACTED_BACKGROUND = !!this._backgroundRefractionTexture && hD.e.RefractionTextureEnabled, ID.REFRACTION_HIGH_QUALITY_BLUR = this._refractionHighQualityBlur, ID.REFRACTED_LIGHTS = !0;
                  const DD = this._getRadianceTexture();
                  DD ? (ID.REFRACTED_ENVIRONMENT = hD.e.RefractionTextureEnabled, ID.REFRACTED_ENVIRONMENT_OPPOSITEZ = this.hq().useRightHandedSystem ? !DD.invertZ : DD.invertZ, ID.REFRACTED_ENVIRONMENT_LOCAL_CUBE = DD.isCube && DD.boundingBoxSize) : ID.REFRACTED_ENVIRONMENT = !1
                } else ID.REFRACTED_BACKGROUND = !1, ID.REFRACTED_LIGHTS = !1, ID.REFRACTED_ENVIRONMENT = !1;
                this._shouldUseAlphaFromBaseColorTexture() ? ID.ALPHA_FROM_BASE_COLOR_TEXTURE = !0 : ID.ALPHA_FROM_BASE_COLOR_TEXTURE = !1
              }
              this._lightFalloff === iD.d.LIGHTFALLOFF_STANDARD ? (ID.USEPHYSICALLIGHTFALLOFF = !1, ID.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === iD.d.LIGHTFALLOFF_GLTF ? (ID.USEPHYSICALLIGHTFALLOFF = !1, ID.USEGLTFLIGHTFALLOFF = !0) : (ID.USEPHYSICALLIGHTFALLOFF = !0, ID.USEGLTFLIGHTFALLOFF = !1), !this.backFaceCulling && this._twoSidedLighting ? ID.TWOSIDEDLIGHTING = !0 : ID.TWOSIDEDLIGHTING = !1, ID.MIRRORED = !!QD._mirroredCameraPosition, ID.SPECULARAA = wD.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
            }(ID._areTexturesDirty || ID._areMiscDirty) && (ID.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, ID.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, ID.ALPHABLEND = this.needAlphaBlendingForMesh(CD)), ID._areTexturesDirty && (ID.TEXTURE_REPETITION_MODE = wD.version > 1 || wD.isWebGPU ? this.textureRepetitionMode : 0), ID._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(ID), ID.FORCENORMALFORWARD = this._forceNormalForward, ID.RADIANCEOCCLUSION = this._useRadianceOcclusion, ID.HORIZONOCCLUSION = this._useHorizonOcclusion, (this.specularRoughnessAnisotropy > 0 || this.coatRoughnessAnisotropy > 0) && DD._noiseTextures[QD.uniqueId] && hD.e.ReflectionTextureEnabled ? (ID.ANISOTROPIC = !0, CD.isVerticesDataPresent(GD.k.TangentKind) || (ID._needUVs = !0, ID.MAINUV1 = !0), this._useGltfStyleAnisotropy && (ID.USE_GLTF_STYLE_ANISOTROPY = !0), ID.ANISOTROPIC_BASE = this.specularRoughnessAnisotropy > 0, ID.ANISOTROPIC_COAT = this.coatRoughnessAnisotropy > 0) : (ID.ANISOTROPIC = !1, ID.USE_GLTF_STYLE_ANISOTROPY = !1, ID.ANISOTROPIC_BASE = !1, ID.ANISOTROPIC_COAT = !1), ID.THIN_FILM = this.thinFilmWeight > 0, ID.IRIDESCENCE = this.thinFilmWeight > 0, ID.DISPERSION = this.transmissionDispersionScale > 0, ID.SCATTERING = this.hasScattering;
            if (ID.SSS_SAMPLE_COUNT = [8, 16, 32][this._sssQuality] ?? 16, ID.TRANSMISSION_SLAB = this.transmissionWeight > 0, ID.TRANSMISSION_SLAB_VOLUME = this.transmissionWeight > 0 && this.transmissionDepth > 0, ID.SUBSURFACE_SLAB = this.subsurfaceWeight > 0, !ID.PREPASS && (ID.SUBSURFACE_SLAB || ID.TRANSMISSION_SLAB_VOLUME)) {
              let DD = !1;
              if (!this.sssIrradianceTexture && QD.geometryBufferRenderer) {
                const CD = QD.geometryBufferRenderer.getTextureIndex(RC.IRRADIANCE_TEXTURE_TYPE);
                this.sssIrradianceTexture = QD.geometryBufferRenderer.getGBuffer().textures[CD], DD = !0
              }
              if (!this.sssDepthTexture && QD.geometryBufferRenderer) {
                const CD = QD.geometryBufferRenderer.getTextureIndex(RC.SCREENSPACE_DEPTH_TEXTURE_TYPE);
                this.sssDepthTexture = QD.geometryBufferRenderer.getGBuffer().textures[CD], DD = !0
              }
              this.sssIrradianceTexture && this.sssDepthTexture && (ID.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !0, DD && (ID.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !0))
            }
            ID.FUZZ = this.fuzzWeight > 0 && hD.e.ReflectionTextureEnabled, ID.GEOMETRY_THIN_WALLED = 0 != this.geometryThinWalled, ID.FUZZ ? (CD.isVerticesDataPresent(GD.k.TangentKind) || (ID._needUVs = !0, ID.MAINUV1 = !0), this._environmentFuzzBRDFTexture = jD(this.hq()), ID.FUZZ_IBL_SAMPLES = this.fuzzSampleNumber) : (this._environmentFuzzBRDFTexture = null, ID.FUZZENVIRONMENTBRDF = !1, ID.FUZZ_IBL_SAMPLES = 0), ID._areMiscDirty && ((0, AD.gb)(CD, QD, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(CD), ID, this._applyDecalMapAfterDetailMap, this._useVertexPulling, cD, this._isVertexOutputInvariant), ID.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !CD.isVerticesDataPresent(GD.k.NormalKind), ID.DEBUGMODE = this._debugMode), (0, AD.Z)(QD, wD, this, ID, !!pD, fD, bD), this._eventInfo.defines = ID, this._eventInfo.mesh = CD, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, AD.V)(CD, ID, !0, !0, !0, this._transparencyMode !== iD.d.MATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
          }
        }, CD = new WeakMap, ID = new WeakMap, pD = new WeakMap, fD = new WeakMap, bD = new WeakMap, QD = new WeakMap, wD = new WeakMap, SD = new WeakMap, BD = new WeakMap, yD = new WeakMap, MD = new WeakMap, tD = new WeakMap, ZD = new WeakMap, oD = new WeakMap, vD = new WeakMap, ND = new WeakMap, gD = new WeakMap, XD = new WeakMap, mD = new WeakMap, nD = new WeakMap, OD = new WeakMap, PD = new WeakMap, KD = new WeakMap, aD = new WeakMap, VD = new WeakMap, zD = new WeakMap, LD = new WeakMap, RD = new WeakMap, kD = new WeakMap, dD = new WeakMap, YD = new WeakMap, ED = new WeakMap, uD = new WeakMap, FD = new WeakMap, DC = new WeakMap, CC = new WeakMap, cC = new WeakMap, IC = new WeakMap, pC = new WeakMap, iC = new WeakMap, fC = new WeakMap, bC = new WeakMap, QC = new WeakMap, wC = new WeakMap, tC = new WeakMap, ZC = new WeakMap, oC = new WeakMap, vC = new WeakMap, NC = new WeakMap, gC = new WeakMap, XC = new WeakMap, mC = new WeakMap, nC = new WeakMap, HC = new WeakMap, UC = new WeakMap, xC = new WeakMap, qC = new WeakMap, JC = new WeakMap, KC = new WeakMap, aC = new WeakMap, VC = new WeakMap, zC = new WeakMap, jC = new WeakMap, lC = new WeakMap, LC = new WeakMap, TC = new WeakMap, GC = new WeakMap, kC = new WeakMap, YC = new WeakMap, eC = new WeakMap, uC = new WeakMap, AC = new WeakMap, FC = new WeakMap, Dc = new WeakMap, Cc = new WeakMap, cc = new WeakMap, Ic = new WeakMap, pc = new WeakMap, ic = new WeakMap, fc = new WeakMap, bc = new WeakMap, Qc = new WeakMap, wc = new WeakMap, Sc = new WeakMap, Bc = new WeakMap, yc = new WeakMap, Mc = new WeakMap, tc = new WeakMap, Zc = new WeakMap, oc = new WeakMap, vc = new WeakMap, Nc = new WeakMap, gc = new WeakMap, Xc = new WeakMap, mc = new WeakMap, nc = new WeakMap, Oc = new WeakMap, Pc = new WeakMap, Hc = new WeakMap, Uc = new WeakMap, xc = new WeakMap, qc = new WeakMap, (() => {
          const CD = "function" === typeof Symbol && Symbol.metadata ? Object.create(Kp[Symbol.metadata] ?? null) : void 0;
          Jc = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], Kc = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], ac = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], Vc = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], zc = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], jc = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], lc = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], Lc = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], Tc = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], Gc = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], Rc = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], kc = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], dc = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], Yc = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], Wc = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], sc = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], Ec = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], ec = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], uc = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], hc = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], rc = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], Ac = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], Fc = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], DI = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], CI = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], cI = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], II = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], pI = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], iI = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], fI = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], bI = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], QI = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], wI = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], SI = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], BI = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], yI = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], MI = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], tI = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], ZI = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], oI = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], vI = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], NI = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], gI = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], XI = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], mI = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], nI = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], OI = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], PI = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], HI = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], UI = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], xI = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], qI = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], JI = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], KI = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], aI = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], VI = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], zI = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], jI = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], lI = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], LI = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], TI = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], GI = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], RI = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], kI = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], dI = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], YI = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], WI = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], sI = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], EI = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], eI = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], uI = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], hI = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], rI = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], AI = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], FI = [(0, UD.b)("_markAllSubMeshesAsTexturesDirty")], Dp = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], Cp = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], cp = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], Ip = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesAndMiscDirty")], pp = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesAndMiscDirty")], ip = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], fp = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], bp = [(0, UD.G)()], Qp = [(0, UD.G)()], wp = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], Sp = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], Bp = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], yp = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], Mp = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsLightsDirty")], tp = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], Zp = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsLightsDirty")], op = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], vp = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], Np = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], gp = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], Xp = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], mp = [(0, UD.c)("_markAllSubMeshesAsTexturesDirty")], np = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], Op = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], Pp = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], Hp = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], Up = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsMiscDirty")], xp = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsMiscDirty")], qp = [(0, UD.c)("_markAllSubMeshesAsMiscDirty")], Jp = [(0, UD.G)()], (0, HD.k)(DD, null, Jc, {
            kind: "accessor",
            name: "baseWeight",
            static: !1,
            private: !1,
            access: {
              has: DD => "baseWeight" in DD,
              get: DD => DD.baseWeight,
              set: (DD, CD) => {
                DD.baseWeight = CD
              }
            },
            metadata: CD
          }, Vp, zp), (0, HD.k)(DD, null, Kc, {
            kind: "accessor",
            name: "baseWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "baseWeightTexture" in DD,
              get: DD => DD.baseWeightTexture,
              set: (DD, CD) => {
                DD.baseWeightTexture = CD
              }
            },
            metadata: CD
          }, jp, lp), (0, HD.k)(DD, null, ac, {
            kind: "accessor",
            name: "baseColor",
            static: !1,
            private: !1,
            access: {
              has: DD => "baseColor" in DD,
              get: DD => DD.baseColor,
              set: (DD, CD) => {
                DD.baseColor = CD
              }
            },
            metadata: CD
          }, Lp, Tp), (0, HD.k)(DD, null, Vc, {
            kind: "accessor",
            name: "baseColorTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "baseColorTexture" in DD,
              get: DD => DD.baseColorTexture,
              set: (DD, CD) => {
                DD.baseColorTexture = CD
              }
            },
            metadata: CD
          }, Gp, Rp), (0, HD.k)(DD, null, zc, {
            kind: "accessor",
            name: "baseDiffuseRoughness",
            static: !1,
            private: !1,
            access: {
              has: DD => "baseDiffuseRoughness" in DD,
              get: DD => DD.baseDiffuseRoughness,
              set: (DD, CD) => {
                DD.baseDiffuseRoughness = CD
              }
            },
            metadata: CD
          }, kp, dp), (0, HD.k)(DD, null, jc, {
            kind: "accessor",
            name: "baseDiffuseRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "baseDiffuseRoughnessTexture" in DD,
              get: DD => DD.baseDiffuseRoughnessTexture,
              set: (DD, CD) => {
                DD.baseDiffuseRoughnessTexture = CD
              }
            },
            metadata: CD
          }, Yp, Wp), (0, HD.k)(DD, null, lc, {
            kind: "accessor",
            name: "baseMetalness",
            static: !1,
            private: !1,
            access: {
              has: DD => "baseMetalness" in DD,
              get: DD => DD.baseMetalness,
              set: (DD, CD) => {
                DD.baseMetalness = CD
              }
            },
            metadata: CD
          }, sp, Ep), (0, HD.k)(DD, null, Lc, {
            kind: "accessor",
            name: "baseMetalnessTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "baseMetalnessTexture" in DD,
              get: DD => DD.baseMetalnessTexture,
              set: (DD, CD) => {
                DD.baseMetalnessTexture = CD
              }
            },
            metadata: CD
          }, ep, hp), (0, HD.k)(DD, null, Tc, {
            kind: "accessor",
            name: "specularWeight",
            static: !1,
            private: !1,
            access: {
              has: DD => "specularWeight" in DD,
              get: DD => DD.specularWeight,
              set: (DD, CD) => {
                DD.specularWeight = CD
              }
            },
            metadata: CD
          }, rp, Ap), (0, HD.k)(DD, null, Gc, {
            kind: "accessor",
            name: "specularWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "specularWeightTexture" in DD,
              get: DD => DD.specularWeightTexture,
              set: (DD, CD) => {
                DD.specularWeightTexture = CD
              }
            },
            metadata: CD
          }, Fp, Di), (0, HD.k)(DD, null, Rc, {
            kind: "accessor",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: DD => "specularColor" in DD,
              get: DD => DD.specularColor,
              set: (DD, CD) => {
                DD.specularColor = CD
              }
            },
            metadata: CD
          }, Ci, ci), (0, HD.k)(DD, null, kc, {
            kind: "accessor",
            name: "specularColorTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "specularColorTexture" in DD,
              get: DD => DD.specularColorTexture,
              set: (DD, CD) => {
                DD.specularColorTexture = CD
              }
            },
            metadata: CD
          }, Ii, ii), (0, HD.k)(DD, null, dc, {
            kind: "accessor",
            name: "specularRoughness",
            static: !1,
            private: !1,
            access: {
              has: DD => "specularRoughness" in DD,
              get: DD => DD.specularRoughness,
              set: (DD, CD) => {
                DD.specularRoughness = CD
              }
            },
            metadata: CD
          }, fi, bi), (0, HD.k)(DD, null, Yc, {
            kind: "accessor",
            name: "specularRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "specularRoughnessTexture" in DD,
              get: DD => DD.specularRoughnessTexture,
              set: (DD, CD) => {
                DD.specularRoughnessTexture = CD
              }
            },
            metadata: CD
          }, Qi, wi), (0, HD.k)(DD, null, Wc, {
            kind: "accessor",
            name: "specularRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: DD => "specularRoughnessAnisotropy" in DD,
              get: DD => DD.specularRoughnessAnisotropy,
              set: (DD, CD) => {
                DD.specularRoughnessAnisotropy = CD
              }
            },
            metadata: CD
          }, Si, Bi), (0, HD.k)(DD, null, sc, {
            kind: "accessor",
            name: "specularRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "specularRoughnessAnisotropyTexture" in DD,
              get: DD => DD.specularRoughnessAnisotropyTexture,
              set: (DD, CD) => {
                DD.specularRoughnessAnisotropyTexture = CD
              }
            },
            metadata: CD
          }, yi, Mi), (0, HD.k)(DD, null, Ec, {
            kind: "accessor",
            name: "specularIor",
            static: !1,
            private: !1,
            access: {
              has: DD => "specularIor" in DD,
              get: DD => DD.specularIor,
              set: (DD, CD) => {
                DD.specularIor = CD
              }
            },
            metadata: CD
          }, ti, Zi), (0, HD.k)(DD, null, ec, {
            kind: "accessor",
            name: "transmissionWeight",
            static: !1,
            private: !1,
            access: {
              has: DD => "transmissionWeight" in DD,
              get: DD => DD.transmissionWeight,
              set: (DD, CD) => {
                DD.transmissionWeight = CD
              }
            },
            metadata: CD
          }, oi, vi), (0, HD.k)(DD, null, uc, {
            kind: "accessor",
            name: "transmissionWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "transmissionWeightTexture" in DD,
              get: DD => DD.transmissionWeightTexture,
              set: (DD, CD) => {
                DD.transmissionWeightTexture = CD
              }
            },
            metadata: CD
          }, Ni, gi), (0, HD.k)(DD, null, hc, {
            kind: "accessor",
            name: "transmissionColor",
            static: !1,
            private: !1,
            access: {
              has: DD => "transmissionColor" in DD,
              get: DD => DD.transmissionColor,
              set: (DD, CD) => {
                DD.transmissionColor = CD
              }
            },
            metadata: CD
          }, Xi, mi), (0, HD.k)(DD, null, rc, {
            kind: "accessor",
            name: "transmissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "transmissionColorTexture" in DD,
              get: DD => DD.transmissionColorTexture,
              set: (DD, CD) => {
                DD.transmissionColorTexture = CD
              }
            },
            metadata: CD
          }, ni, Oi), (0, HD.k)(DD, null, Ac, {
            kind: "accessor",
            name: "transmissionDepth",
            static: !1,
            private: !1,
            access: {
              has: DD => "transmissionDepth" in DD,
              get: DD => DD.transmissionDepth,
              set: (DD, CD) => {
                DD.transmissionDepth = CD
              }
            },
            metadata: CD
          }, Pi, Hi), (0, HD.k)(DD, null, Fc, {
            kind: "accessor",
            name: "transmissionDepthTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "transmissionDepthTexture" in DD,
              get: DD => DD.transmissionDepthTexture,
              set: (DD, CD) => {
                DD.transmissionDepthTexture = CD
              }
            },
            metadata: CD
          }, Ui, xi), (0, HD.k)(DD, null, DI, {
            kind: "accessor",
            name: "transmissionScatter",
            static: !1,
            private: !1,
            access: {
              has: DD => "transmissionScatter" in DD,
              get: DD => DD.transmissionScatter,
              set: (DD, CD) => {
                DD.transmissionScatter = CD
              }
            },
            metadata: CD
          }, qi, Ji), (0, HD.k)(DD, null, CI, {
            kind: "accessor",
            name: "transmissionScatterTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "transmissionScatterTexture" in DD,
              get: DD => DD.transmissionScatterTexture,
              set: (DD, CD) => {
                DD.transmissionScatterTexture = CD
              }
            },
            metadata: CD
          }, Ki, ai), (0, HD.k)(DD, null, cI, {
            kind: "accessor",
            name: "transmissionScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: DD => "transmissionScatterAnisotropy" in DD,
              get: DD => DD.transmissionScatterAnisotropy,
              set: (DD, CD) => {
                DD.transmissionScatterAnisotropy = CD
              }
            },
            metadata: CD
          }, Vi, zi), (0, HD.k)(DD, null, II, {
            kind: "accessor",
            name: "transmissionDispersionScale",
            static: !1,
            private: !1,
            access: {
              has: DD => "transmissionDispersionScale" in DD,
              get: DD => DD.transmissionDispersionScale,
              set: (DD, CD) => {
                DD.transmissionDispersionScale = CD
              }
            },
            metadata: CD
          }, ji, li), (0, HD.k)(DD, null, pI, {
            kind: "accessor",
            name: "transmissionDispersionScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "transmissionDispersionScaleTexture" in DD,
              get: DD => DD.transmissionDispersionScaleTexture,
              set: (DD, CD) => {
                DD.transmissionDispersionScaleTexture = CD
              }
            },
            metadata: CD
          }, Li, Ti), (0, HD.k)(DD, null, iI, {
            kind: "accessor",
            name: "transmissionDispersionAbbeNumber",
            static: !1,
            private: !1,
            access: {
              has: DD => "transmissionDispersionAbbeNumber" in DD,
              get: DD => DD.transmissionDispersionAbbeNumber,
              set: (DD, CD) => {
                DD.transmissionDispersionAbbeNumber = CD
              }
            },
            metadata: CD
          }, Gi, Ri), (0, HD.k)(DD, null, fI, {
            kind: "accessor",
            name: "subsurfaceWeight",
            static: !1,
            private: !1,
            access: {
              has: DD => "subsurfaceWeight" in DD,
              get: DD => DD.subsurfaceWeight,
              set: (DD, CD) => {
                DD.subsurfaceWeight = CD
              }
            },
            metadata: CD
          }, ki, di), (0, HD.k)(DD, null, bI, {
            kind: "accessor",
            name: "subsurfaceWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "subsurfaceWeightTexture" in DD,
              get: DD => DD.subsurfaceWeightTexture,
              set: (DD, CD) => {
                DD.subsurfaceWeightTexture = CD
              }
            },
            metadata: CD
          }, Yi, Wi), (0, HD.k)(DD, null, QI, {
            kind: "accessor",
            name: "subsurfaceColor",
            static: !1,
            private: !1,
            access: {
              has: DD => "subsurfaceColor" in DD,
              get: DD => DD.subsurfaceColor,
              set: (DD, CD) => {
                DD.subsurfaceColor = CD
              }
            },
            metadata: CD
          }, si, Ei), (0, HD.k)(DD, null, wI, {
            kind: "accessor",
            name: "subsurfaceColorTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "subsurfaceColorTexture" in DD,
              get: DD => DD.subsurfaceColorTexture,
              set: (DD, CD) => {
                DD.subsurfaceColorTexture = CD
              }
            },
            metadata: CD
          }, ei, ui), (0, HD.k)(DD, null, SI, {
            kind: "accessor",
            name: "subsurfaceRadius",
            static: !1,
            private: !1,
            access: {
              has: DD => "subsurfaceRadius" in DD,
              get: DD => DD.subsurfaceRadius,
              set: (DD, CD) => {
                DD.subsurfaceRadius = CD
              }
            },
            metadata: CD
          }, ri, Ai), (0, HD.k)(DD, null, BI, {
            kind: "accessor",
            name: "subsurfaceRadiusScale",
            static: !1,
            private: !1,
            access: {
              has: DD => "subsurfaceRadiusScale" in DD,
              get: DD => DD.subsurfaceRadiusScale,
              set: (DD, CD) => {
                DD.subsurfaceRadiusScale = CD
              }
            },
            metadata: CD
          }, Fi, Df), (0, HD.k)(DD, null, yI, {
            kind: "accessor",
            name: "subsurfaceRadiusScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "subsurfaceRadiusScaleTexture" in DD,
              get: DD => DD.subsurfaceRadiusScaleTexture,
              set: (DD, CD) => {
                DD.subsurfaceRadiusScaleTexture = CD
              }
            },
            metadata: CD
          }, Cf, If), (0, HD.k)(DD, null, MI, {
            kind: "accessor",
            name: "subsurfaceScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: DD => "subsurfaceScatterAnisotropy" in DD,
              get: DD => DD.subsurfaceScatterAnisotropy,
              set: (DD, CD) => {
                DD.subsurfaceScatterAnisotropy = CD
              }
            },
            metadata: CD
          }, pf, ff), (0, HD.k)(DD, null, tI, {
            kind: "accessor",
            name: "coatWeight",
            static: !1,
            private: !1,
            access: {
              has: DD => "coatWeight" in DD,
              get: DD => DD.coatWeight,
              set: (DD, CD) => {
                DD.coatWeight = CD
              }
            },
            metadata: CD
          }, bf, Qf), (0, HD.k)(DD, null, ZI, {
            kind: "accessor",
            name: "coatWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "coatWeightTexture" in DD,
              get: DD => DD.coatWeightTexture,
              set: (DD, CD) => {
                DD.coatWeightTexture = CD
              }
            },
            metadata: CD
          }, wf, Sf), (0, HD.k)(DD, null, oI, {
            kind: "accessor",
            name: "coatColor",
            static: !1,
            private: !1,
            access: {
              has: DD => "coatColor" in DD,
              get: DD => DD.coatColor,
              set: (DD, CD) => {
                DD.coatColor = CD
              }
            },
            metadata: CD
          }, Bf, yf), (0, HD.k)(DD, null, vI, {
            kind: "accessor",
            name: "coatColorTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "coatColorTexture" in DD,
              get: DD => DD.coatColorTexture,
              set: (DD, CD) => {
                DD.coatColorTexture = CD
              }
            },
            metadata: CD
          }, Mf, tf), (0, HD.k)(DD, null, NI, {
            kind: "accessor",
            name: "coatRoughness",
            static: !1,
            private: !1,
            access: {
              has: DD => "coatRoughness" in DD,
              get: DD => DD.coatRoughness,
              set: (DD, CD) => {
                DD.coatRoughness = CD
              }
            },
            metadata: CD
          }, Zf, of), (0, HD.k)(DD, null, gI, {
            kind: "accessor",
            name: "coatRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "coatRoughnessTexture" in DD,
              get: DD => DD.coatRoughnessTexture,
              set: (DD, CD) => {
                DD.coatRoughnessTexture = CD
              }
            },
            metadata: CD
          }, vf, Nf), (0, HD.k)(DD, null, XI, {
            kind: "accessor",
            name: "coatRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: DD => "coatRoughnessAnisotropy" in DD,
              get: DD => DD.coatRoughnessAnisotropy,
              set: (DD, CD) => {
                DD.coatRoughnessAnisotropy = CD
              }
            },
            metadata: CD
          }, gf, Xf), (0, HD.k)(DD, null, mI, {
            kind: "accessor",
            name: "coatRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "coatRoughnessAnisotropyTexture" in DD,
              get: DD => DD.coatRoughnessAnisotropyTexture,
              set: (DD, CD) => {
                DD.coatRoughnessAnisotropyTexture = CD
              }
            },
            metadata: CD
          }, mf, nf), (0, HD.k)(DD, null, nI, {
            kind: "accessor",
            name: "coatIor",
            static: !1,
            private: !1,
            access: {
              has: DD => "coatIor" in DD,
              get: DD => DD.coatIor,
              set: (DD, CD) => {
                DD.coatIor = CD
              }
            },
            metadata: CD
          }, Of, Pf), (0, HD.k)(DD, null, OI, {
            kind: "accessor",
            name: "coatDarkening",
            static: !1,
            private: !1,
            access: {
              has: DD => "coatDarkening" in DD,
              get: DD => DD.coatDarkening,
              set: (DD, CD) => {
                DD.coatDarkening = CD
              }
            },
            metadata: CD
          }, Hf, Uf), (0, HD.k)(DD, null, PI, {
            kind: "accessor",
            name: "coatDarkeningTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "coatDarkeningTexture" in DD,
              get: DD => DD.coatDarkeningTexture,
              set: (DD, CD) => {
                DD.coatDarkeningTexture = CD
              }
            },
            metadata: CD
          }, xf, qf), (0, HD.k)(DD, null, HI, {
            kind: "accessor",
            name: "fuzzWeight",
            static: !1,
            private: !1,
            access: {
              has: DD => "fuzzWeight" in DD,
              get: DD => DD.fuzzWeight,
              set: (DD, CD) => {
                DD.fuzzWeight = CD
              }
            },
            metadata: CD
          }, Jf, Kf), (0, HD.k)(DD, null, UI, {
            kind: "accessor",
            name: "fuzzWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "fuzzWeightTexture" in DD,
              get: DD => DD.fuzzWeightTexture,
              set: (DD, CD) => {
                DD.fuzzWeightTexture = CD
              }
            },
            metadata: CD
          }, af, Vf), (0, HD.k)(DD, null, xI, {
            kind: "accessor",
            name: "fuzzColor",
            static: !1,
            private: !1,
            access: {
              has: DD => "fuzzColor" in DD,
              get: DD => DD.fuzzColor,
              set: (DD, CD) => {
                DD.fuzzColor = CD
              }
            },
            metadata: CD
          }, zf, jf), (0, HD.k)(DD, null, qI, {
            kind: "accessor",
            name: "fuzzColorTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "fuzzColorTexture" in DD,
              get: DD => DD.fuzzColorTexture,
              set: (DD, CD) => {
                DD.fuzzColorTexture = CD
              }
            },
            metadata: CD
          }, lf, Lf), (0, HD.k)(DD, null, JI, {
            kind: "accessor",
            name: "fuzzRoughness",
            static: !1,
            private: !1,
            access: {
              has: DD => "fuzzRoughness" in DD,
              get: DD => DD.fuzzRoughness,
              set: (DD, CD) => {
                DD.fuzzRoughness = CD
              }
            },
            metadata: CD
          }, Tf, Gf), (0, HD.k)(DD, null, KI, {
            kind: "accessor",
            name: "fuzzRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "fuzzRoughnessTexture" in DD,
              get: DD => DD.fuzzRoughnessTexture,
              set: (DD, CD) => {
                DD.fuzzRoughnessTexture = CD
              }
            },
            metadata: CD
          }, Rf, kf), (0, HD.k)(DD, null, aI, {
            kind: "accessor",
            name: "geometryThinWalled",
            static: !1,
            private: !1,
            access: {
              has: DD => "geometryThinWalled" in DD,
              get: DD => DD.geometryThinWalled,
              set: (DD, CD) => {
                DD.geometryThinWalled = CD
              }
            },
            metadata: CD
          }, df, Yf), (0, HD.k)(DD, null, VI, {
            kind: "accessor",
            name: "geometryNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "geometryNormalTexture" in DD,
              get: DD => DD.geometryNormalTexture,
              set: (DD, CD) => {
                DD.geometryNormalTexture = CD
              }
            },
            metadata: CD
          }, Wf, sf), (0, HD.k)(DD, null, zI, {
            kind: "accessor",
            name: "geometryTangent",
            static: !1,
            private: !1,
            access: {
              has: DD => "geometryTangent" in DD,
              get: DD => DD.geometryTangent,
              set: (DD, CD) => {
                DD.geometryTangent = CD
              }
            },
            metadata: CD
          }, Ef, ef), (0, HD.k)(DD, null, jI, {
            kind: "accessor",
            name: "geometryTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "geometryTangentTexture" in DD,
              get: DD => DD.geometryTangentTexture,
              set: (DD, CD) => {
                DD.geometryTangentTexture = CD
              }
            },
            metadata: CD
          }, uf, hf), (0, HD.k)(DD, null, lI, {
            kind: "accessor",
            name: "geometryCoatNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "geometryCoatNormalTexture" in DD,
              get: DD => DD.geometryCoatNormalTexture,
              set: (DD, CD) => {
                DD.geometryCoatNormalTexture = CD
              }
            },
            metadata: CD
          }, rf, Af), (0, HD.k)(DD, null, LI, {
            kind: "accessor",
            name: "geometryCoatTangent",
            static: !1,
            private: !1,
            access: {
              has: DD => "geometryCoatTangent" in DD,
              get: DD => DD.geometryCoatTangent,
              set: (DD, CD) => {
                DD.geometryCoatTangent = CD
              }
            },
            metadata: CD
          }, Ff, Db), (0, HD.k)(DD, null, TI, {
            kind: "accessor",
            name: "geometryCoatTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "geometryCoatTangentTexture" in DD,
              get: DD => DD.geometryCoatTangentTexture,
              set: (DD, CD) => {
                DD.geometryCoatTangentTexture = CD
              }
            },
            metadata: CD
          }, Cb, cb), (0, HD.k)(DD, null, GI, {
            kind: "accessor",
            name: "geometryOpacity",
            static: !1,
            private: !1,
            access: {
              has: DD => "geometryOpacity" in DD,
              get: DD => DD.geometryOpacity,
              set: (DD, CD) => {
                DD.geometryOpacity = CD
              }
            },
            metadata: CD
          }, Ib, pb), (0, HD.k)(DD, null, RI, {
            kind: "accessor",
            name: "geometryOpacityTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "geometryOpacityTexture" in DD,
              get: DD => DD.geometryOpacityTexture,
              set: (DD, CD) => {
                DD.geometryOpacityTexture = CD
              }
            },
            metadata: CD
          }, ib, fb), (0, HD.k)(DD, null, kI, {
            kind: "accessor",
            name: "geometryThickness",
            static: !1,
            private: !1,
            access: {
              has: DD => "geometryThickness" in DD,
              get: DD => DD.geometryThickness,
              set: (DD, CD) => {
                DD.geometryThickness = CD
              }
            },
            metadata: CD
          }, bb, Qb), (0, HD.k)(DD, null, dI, {
            kind: "accessor",
            name: "geometryThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "geometryThicknessTexture" in DD,
              get: DD => DD.geometryThicknessTexture,
              set: (DD, CD) => {
                DD.geometryThicknessTexture = CD
              }
            },
            metadata: CD
          }, wb, Sb), (0, HD.k)(DD, null, YI, {
            kind: "accessor",
            name: "emissionLuminance",
            static: !1,
            private: !1,
            access: {
              has: DD => "emissionLuminance" in DD,
              get: DD => DD.emissionLuminance,
              set: (DD, CD) => {
                DD.emissionLuminance = CD
              }
            },
            metadata: CD
          }, Bb, yb), (0, HD.k)(DD, null, WI, {
            kind: "accessor",
            name: "emissionColor",
            static: !1,
            private: !1,
            access: {
              has: DD => "emissionColor" in DD,
              get: DD => DD.emissionColor,
              set: (DD, CD) => {
                DD.emissionColor = CD
              }
            },
            metadata: CD
          }, Mb, tb), (0, HD.k)(DD, null, sI, {
            kind: "accessor",
            name: "emissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "emissionColorTexture" in DD,
              get: DD => DD.emissionColorTexture,
              set: (DD, CD) => {
                DD.emissionColorTexture = CD
              }
            },
            metadata: CD
          }, Zb, ob), (0, HD.k)(DD, null, EI, {
            kind: "accessor",
            name: "thinFilmWeight",
            static: !1,
            private: !1,
            access: {
              has: DD => "thinFilmWeight" in DD,
              get: DD => DD.thinFilmWeight,
              set: (DD, CD) => {
                DD.thinFilmWeight = CD
              }
            },
            metadata: CD
          }, vb, Nb), (0, HD.k)(DD, null, eI, {
            kind: "accessor",
            name: "thinFilmWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "thinFilmWeightTexture" in DD,
              get: DD => DD.thinFilmWeightTexture,
              set: (DD, CD) => {
                DD.thinFilmWeightTexture = CD
              }
            },
            metadata: CD
          }, gb, Xb), (0, HD.k)(DD, null, uI, {
            kind: "accessor",
            name: "thinFilmThickness",
            static: !1,
            private: !1,
            access: {
              has: DD => "thinFilmThickness" in DD,
              get: DD => DD.thinFilmThickness,
              set: (DD, CD) => {
                DD.thinFilmThickness = CD
              }
            },
            metadata: CD
          }, mb, nb), (0, HD.k)(DD, null, hI, {
            kind: "accessor",
            name: "thinFilmThicknessMin",
            static: !1,
            private: !1,
            access: {
              has: DD => "thinFilmThicknessMin" in DD,
              get: DD => DD.thinFilmThicknessMin,
              set: (DD, CD) => {
                DD.thinFilmThicknessMin = CD
              }
            },
            metadata: CD
          }, Ob, Pb), (0, HD.k)(DD, null, rI, {
            kind: "accessor",
            name: "thinFilmThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "thinFilmThicknessTexture" in DD,
              get: DD => DD.thinFilmThicknessTexture,
              set: (DD, CD) => {
                DD.thinFilmThicknessTexture = CD
              }
            },
            metadata: CD
          }, Hb, Ub), (0, HD.k)(DD, null, AI, {
            kind: "accessor",
            name: "thinFilmIor",
            static: !1,
            private: !1,
            access: {
              has: DD => "thinFilmIor" in DD,
              get: DD => DD.thinFilmIor,
              set: (DD, CD) => {
                DD.thinFilmIor = CD
              }
            },
            metadata: CD
          }, xb, qb), (0, HD.k)(DD, null, FI, {
            kind: "accessor",
            name: "ambientOcclusionTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "ambientOcclusionTexture" in DD,
              get: DD => DD.ambientOcclusionTexture,
              set: (DD, CD) => {
                DD.ambientOcclusionTexture = CD
              }
            },
            metadata: CD
          }, Jb, Kb), (0, HD.k)(DD, null, Dp, {
            kind: "accessor",
            name: "directIntensity",
            static: !1,
            private: !1,
            access: {
              has: DD => "directIntensity" in DD,
              get: DD => DD.directIntensity,
              set: (DD, CD) => {
                DD.directIntensity = CD
              }
            },
            metadata: CD
          }, ab, Vb), (0, HD.k)(DD, null, Cp, {
            kind: "accessor",
            name: "environmentIntensity",
            static: !1,
            private: !1,
            access: {
              has: DD => "environmentIntensity" in DD,
              get: DD => DD.environmentIntensity,
              set: (DD, CD) => {
                DD.environmentIntensity = CD
              }
            },
            metadata: CD
          }, zb, jb), (0, HD.k)(DD, null, cp, {
            kind: "accessor",
            name: "useSpecularWeightFromTextureAlpha",
            static: !1,
            private: !1,
            access: {
              has: DD => "useSpecularWeightFromTextureAlpha" in DD,
              get: DD => DD.useSpecularWeightFromTextureAlpha,
              set: (DD, CD) => {
                DD.useSpecularWeightFromTextureAlpha = CD
              }
            },
            metadata: CD
          }, lb, Lb), (0, HD.k)(DD, null, Ip, {
            kind: "accessor",
            name: "forceAlphaTest",
            static: !1,
            private: !1,
            access: {
              has: DD => "forceAlphaTest" in DD,
              get: DD => DD.forceAlphaTest,
              set: (DD, CD) => {
                DD.forceAlphaTest = CD
              }
            },
            metadata: CD
          }, Tb, Gb), (0, HD.k)(DD, null, pp, {
            kind: "accessor",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: DD => "alphaCutOff" in DD,
              get: DD => DD.alphaCutOff,
              set: (DD, CD) => {
                DD.alphaCutOff = CD
              }
            },
            metadata: CD
          }, Rb, kb), (0, HD.k)(DD, null, ip, {
            kind: "accessor",
            name: "useAmbientOcclusionFromMetallicTextureRed",
            static: !1,
            private: !1,
            access: {
              has: DD => "useAmbientOcclusionFromMetallicTextureRed" in DD,
              get: DD => DD.useAmbientOcclusionFromMetallicTextureRed,
              set: (DD, CD) => {
                DD.useAmbientOcclusionFromMetallicTextureRed = CD
              }
            },
            metadata: CD
          }, db, Yb), (0, HD.k)(DD, null, fp, {
            kind: "accessor",
            name: "useAmbientInGrayScale",
            static: !1,
            private: !1,
            access: {
              has: DD => "useAmbientInGrayScale" in DD,
              get: DD => DD.useAmbientInGrayScale,
              set: (DD, CD) => {
                DD.useAmbientInGrayScale = CD
              }
            },
            metadata: CD
          }, Wb, sb), (0, HD.k)(DD, null, bp, {
            kind: "getter",
            name: "usePhysicalLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: DD => "usePhysicalLightFalloff" in DD,
              get: DD => DD.usePhysicalLightFalloff
            },
            metadata: CD
          }, null, ap), (0, HD.k)(DD, null, Qp, {
            kind: "getter",
            name: "useGLTFLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: DD => "useGLTFLightFalloff" in DD,
              get: DD => DD.useGLTFLightFalloff
            },
            metadata: CD
          }, null, ap), (0, HD.k)(DD, null, wp, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: DD => "useObjectSpaceNormalMap" in DD,
              get: DD => DD.useObjectSpaceNormalMap,
              set: (DD, CD) => {
                DD.useObjectSpaceNormalMap = CD
              }
            },
            metadata: CD
          }, Eb, eb), (0, HD.k)(DD, null, Sp, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: DD => "useParallax" in DD,
              get: DD => DD.useParallax,
              set: (DD, CD) => {
                DD.useParallax = CD
              }
            },
            metadata: CD
          }, ub, hb), (0, HD.k)(DD, null, Bp, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: DD => "useParallaxOcclusion" in DD,
              get: DD => DD.useParallaxOcclusion,
              set: (DD, CD) => {
                DD.useParallaxOcclusion = CD
              }
            },
            metadata: CD
          }, rb, Ab), (0, HD.k)(DD, null, yp, {
            kind: "accessor",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: DD => "parallaxScaleBias" in DD,
              get: DD => DD.parallaxScaleBias,
              set: (DD, CD) => {
                DD.parallaxScaleBias = CD
              }
            },
            metadata: CD
          }, Fb, DQ), (0, HD.k)(DD, null, Mp, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: DD => "disableLighting" in DD,
              get: DD => DD.disableLighting,
              set: (DD, CD) => {
                DD.disableLighting = CD
              }
            },
            metadata: CD
          }, CQ, cQ), (0, HD.k)(DD, null, tp, {
            kind: "accessor",
            name: "forceIrradianceInFragment",
            static: !1,
            private: !1,
            access: {
              has: DD => "forceIrradianceInFragment" in DD,
              get: DD => DD.forceIrradianceInFragment,
              set: (DD, CD) => {
                DD.forceIrradianceInFragment = CD
              }
            },
            metadata: CD
          }, IQ, pQ), (0, HD.k)(DD, null, Zp, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: DD => "maxSimultaneousLights" in DD,
              get: DD => DD.maxSimultaneousLights,
              set: (DD, CD) => {
                DD.maxSimultaneousLights = CD
              }
            },
            metadata: CD
          }, iQ, fQ), (0, HD.k)(DD, null, op, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: DD => "invertNormalMapX" in DD,
              get: DD => DD.invertNormalMapX,
              set: (DD, CD) => {
                DD.invertNormalMapX = CD
              }
            },
            metadata: CD
          }, bQ, QQ), (0, HD.k)(DD, null, vp, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: DD => "invertNormalMapY" in DD,
              get: DD => DD.invertNormalMapY,
              set: (DD, CD) => {
                DD.invertNormalMapY = CD
              }
            },
            metadata: CD
          }, wQ, SQ), (0, HD.k)(DD, null, Np, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: DD => "twoSidedLighting" in DD,
              get: DD => DD.twoSidedLighting,
              set: (DD, CD) => {
                DD.twoSidedLighting = CD
              }
            },
            metadata: CD
          }, BQ, yQ), (0, HD.k)(DD, null, gp, {
            kind: "accessor",
            name: "useAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: DD => "useAlphaFresnel" in DD,
              get: DD => DD.useAlphaFresnel,
              set: (DD, CD) => {
                DD.useAlphaFresnel = CD
              }
            },
            metadata: CD
          }, MQ, tQ), (0, HD.k)(DD, null, Xp, {
            kind: "accessor",
            name: "useLinearAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: DD => "useLinearAlphaFresnel" in DD,
              get: DD => DD.useLinearAlphaFresnel,
              set: (DD, CD) => {
                DD.useLinearAlphaFresnel = CD
              }
            },
            metadata: CD
          }, ZQ, oQ), (0, HD.k)(DD, null, mp, {
            kind: "accessor",
            name: "environmentBRDFTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "environmentBRDFTexture" in DD,
              get: DD => DD.environmentBRDFTexture,
              set: (DD, CD) => {
                DD.environmentBRDFTexture = CD
              }
            },
            metadata: CD
          }, vQ, NQ), (0, HD.k)(DD, null, np, {
            kind: "accessor",
            name: "forceNormalForward",
            static: !1,
            private: !1,
            access: {
              has: DD => "forceNormalForward" in DD,
              get: DD => DD.forceNormalForward,
              set: (DD, CD) => {
                DD.forceNormalForward = CD
              }
            },
            metadata: CD
          }, gQ, XQ), (0, HD.k)(DD, null, Op, {
            kind: "accessor",
            name: "enableSpecularAntiAliasing",
            static: !1,
            private: !1,
            access: {
              has: DD => "enableSpecularAntiAliasing" in DD,
              get: DD => DD.enableSpecularAntiAliasing,
              set: (DD, CD) => {
                DD.enableSpecularAntiAliasing = CD
              }
            },
            metadata: CD
          }, mQ, nQ), (0, HD.k)(DD, null, Pp, {
            kind: "accessor",
            name: "useHorizonOcclusion",
            static: !1,
            private: !1,
            access: {
              has: DD => "useHorizonOcclusion" in DD,
              get: DD => DD.useHorizonOcclusion,
              set: (DD, CD) => {
                DD.useHorizonOcclusion = CD
              }
            },
            metadata: CD
          }, OQ, PQ), (0, HD.k)(DD, null, Hp, {
            kind: "accessor",
            name: "useRadianceOcclusion",
            static: !1,
            private: !1,
            access: {
              has: DD => "useRadianceOcclusion" in DD,
              get: DD => DD.useRadianceOcclusion,
              set: (DD, CD) => {
                DD.useRadianceOcclusion = CD
              }
            },
            metadata: CD
          }, HQ, UQ), (0, HD.k)(DD, null, Up, {
            kind: "accessor",
            name: "unlit",
            static: !1,
            private: !1,
            access: {
              has: DD => "unlit" in DD,
              get: DD => DD.unlit,
              set: (DD, CD) => {
                DD.unlit = CD
              }
            },
            metadata: CD
          }, xQ, qQ), (0, HD.k)(DD, null, xp, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: DD => "applyDecalMapAfterDetailMap" in DD,
              get: DD => DD.applyDecalMapAfterDetailMap,
              set: (DD, CD) => {
                DD.applyDecalMapAfterDetailMap = CD
              }
            },
            metadata: CD
          }, JQ, KQ), (0, HD.k)(DD, null, qp, {
            kind: "accessor",
            name: "debugMode",
            static: !1,
            private: !1,
            access: {
              has: DD => "debugMode" in DD,
              get: DD => DD.debugMode,
              set: (DD, CD) => {
                DD.debugMode = CD
              }
            },
            metadata: CD
          }, aQ, VQ), (0, HD.k)(DD, null, Jp, {
            kind: "getter",
            name: "transparencyMode",
            static: !1,
            private: !1,
            access: {
              has: DD => "transparencyMode" in DD,
              get: DD => DD.transparencyMode
            },
            metadata: CD
          }, null, ap), CD && Object.defineProperty(DD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: CD
          })
        })(), DD.SSS_QUALITY_LOW = 0, DD.SSS_QUALITY_MEDIUM = 1, DD.SSS_QUALITY_HIGH = 2, DD._noiseTextures = {}, DD.ForceGLSL = !1, DD._ShaderLoader = new yC.e((() => [Promise.all([cD.e(307), cD.e(373)]).then((() => cD(60962))), Promise.all([cD.e(312), cD.e(308), cD.e(372), cD.e(377)]).then((() => cD(60975)))]), (() => [Promise.all([cD.e(326), cD.e(328), cD.e(376)]).then((() => cD(61006))), Promise.all([cD.e(326), cD.e(329), cD.e(375), cD.e(378)]).then((() => cD(61012)))])), DD
      })(),
      FC = !1;
    FC || (FC = !0, (0, eD.d)(), (0, kC.d)("BABYLON.OpenPBRMaterial", AC));
    var Dc = cD(36473);
    class Cc {
      constructor(DD) {
        this.name = zC.c.NAME_PROCEDURALTEXTURE, this.wo = DD
      }
      register() {
        this.wo._beforeClearStage.registerStep(zC.c.STEP_BEFORECLEAR_PROCEDURALTEXTURE, this, this._beforeClear)
      }
      rebuild() {}
      dispose() {}
      _beforeClear() {
        if (this.wo.proceduralTexturesEnabled) {
          PC.g.StartPerformanceCounter("Procedural textures", this.wo.proceduralTextures.length > 0);
          for (let DD = 0; DD < this.wo.proceduralTextures.length; DD++) {
            const CD = this.wo.proceduralTextures[DD];
            CD._shouldRender() && CD.render()
          }
          PC.g.EndPerformanceCounter("Procedural textures", this.wo.proceduralTextures.length > 0)
        }
      }
    }
    var cc = cD(39456);
    let Ic = (() => {
      var DD;
      let CD, ID, pD, fD, bD, QD = JD.c,
        wD = [],
        SD = [],
        BD = [],
        yD = [],
        MD = [],
        tD = [],
        oD = [],
        vD = [],
        ND = [];
      return DD = class extends QD {
        get shaderLanguage() {
          return this._shaderLanguage
        }
        constructor(DD, CD, cD, ID) {
          let pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            iD = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
            fD = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
            bD = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          super(null, ID, !iD), this.isEnabled = ((0, HD.m)(this, wD), (0, HD.m)(this, SD, !0)), this.autoClear = ((0, HD.m)(this, BD), (0, HD.m)(this, yD, !0)), this.onGenerated = (0, HD.m)(this, MD), this.onGeneratedObservable = new Dc.c, this.onBeforeGenerationObservable = new Dc.c, this.nodeMaterialSource = null, this.defines = "", this._generateMipMaps = (0, HD.m)(this, tD, void 0), this._drawWrapper = (0, HD.m)(this, oD), this._textures = {}, this._size = (0, HD.m)(this, vD, void 0), this._textureType = (0, HD.m)(this, ND), this._currentRefreshId = -1, this._frameId = -1, this._refreshRate = 1, this._vertexBuffers = {}, this._uniforms = new Array, this._samplers = new Array, this._floats = {}, this._ints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors4 = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._matrices = {}, this._fallbackTextureUsed = !1, this._cachedDefines = null, this._contentUpdateId = -1, this._rtWrapper = null, null === pD || pD instanceof JD.c ? (this._options = {}, this._fallbackTexture = pD) : (this._options = pD, this._fallbackTexture = pD.fallbackTexture ?? null), this._shaderLanguage = this._options.shaderLanguage ?? 0;
          let QD = (ID = this.hq() || ZD.b.LastCreatedScene)._getComponent(zC.c.NAME_PROCEDURALTEXTURE);
          QD || (QD = new Cc(ID), ID.fcD(QD)), this._options.skipSceneRegistration || ID.proceduralTextures.push(this), this._fullEngine = ID.DZ(), this.name = DD, this.isRenderTarget = !0, this._size = CD, this._textureType = bD, this._generateMipMaps = iD, this._drawWrapper = new cc.c(this._fullEngine), this.setFragment(cD);
          const gD = this._createRtWrapper(fD, CD, iD, bD);
          this._texture = gD.texture;
          const XD = [];
          XD.push(1, 1), XD.push(-1, 1), XD.push(-1, -1), XD.push(1, -1), this._vertexBuffers[GD.k.PositionKind] = new GD.k(this._fullEngine, XD, GD.k.PositionKind, !1, !1, 2), this._createIndexBuffer()
        }
        _createRtWrapper(DD, CD, cD, ID) {
          return DD ? (this._rtWrapper = this._fullEngine.createRenderTargetCubeTexture(CD, {
            generateMipMaps: cD,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: ID,
            ...this._options
          }), this.setFloat("face", 0)) : (this._rtWrapper = this._fullEngine.createRenderTargetTexture(CD, {
            generateMipMaps: cD,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: ID,
            ...this._options
          }), this._rtWrapper.is3D && (this.setFloat("layer", 0), this.setInt("layerNum", 0))), this._rtWrapper
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        _setEffect(DD) {
          this._drawWrapper.effect = DD
        }
        getContent() {
          return this._contentData && this._frameId === this._contentUpdateId || (this._contentData ? this._contentData.then((DD => {
            this._contentData = this.readPixels(0, 0, DD), this._contentUpdateId = this._frameId
          })) : (this._contentData = this.readPixels(0, 0), this._contentUpdateId = this._frameId)), this._contentData
        }
        _createIndexBuffer() {
          const DD = this._fullEngine,
            CD = [];
          CD.push(0), CD.push(1), CD.push(2), CD.push(0), CD.push(2), CD.push(3), this._indexBuffer = DD.createIndexBuffer(CD)
        }
        _rebuild() {
          const DD = this._vertexBuffers[GD.k.PositionKind];
          DD && DD._rebuild(), this._createIndexBuffer(), this.refreshRate === HC.b.REFRESHRATE_RENDER_ONCE && (this.refreshRate = HC.b.REFRESHRATE_RENDER_ONCE)
        }
        reset() {
          this._drawWrapper.effect?.dispose(), this._drawWrapper.effect = null, this._cachedDefines = null
        }
        _getDefines() {
          return this.defines
        }
        executeWhenReady(DD) {
          if (this.isReady()) return void DD(this);
          const CD = this.getEffect();
          CD && CD.executeWhenCompiled((() => {
            DD(this)
          }))
        }
        isReady() {
          const DD = this._fullEngine;
          if (this.nodeMaterialSource) return this._drawWrapper.effect?.isReady() ?? !1;
          if (!this._fragment) return !1;
          if (this._fallbackTextureUsed) return !0;
          if (!this._texture) return !1;
          const CD = this._getDefines();
          if (this._drawWrapper.effect && CD === this._cachedDefines && this._drawWrapper.effect.isReady()) return !0;
          const ID = {
            vertex: "procedural",
            fragmentElement: this._fragment.fragmentElement,
            fragmentSource: this._fragment.fragmentSource,
            fragment: "string" === typeof this._fragment ? this._fragment : void 0
          };
          return this._cachedDefines !== CD && (this._cachedDefines = CD, this._drawWrapper.effect = DD.createEffect(ID, [GD.k.PositionKind], this._uniforms, this._samplers, CD, void 0, void 0, (() => {
            this._rtWrapper?.dispose(), this._rtWrapper = this._texture = null, this._fallbackTexture && (this._texture = this._fallbackTexture._texture, this._texture && this._texture.incrementReferences()), this._fallbackTextureUsed = !0
          }), void 0, this._shaderLanguage, (async () => {
            this._options.extraInitializationsAsync ? 1 === this.shaderLanguage ? await Promise.all([cD.e(381).then((() => cD(61061))), this._options.extraInitializationsAsync()]) : await Promise.all([cD.e(382).then((() => cD(61067))), this._options.extraInitializationsAsync()]) : 1 === this.shaderLanguage ? await cD.e(381).then((() => cD(61061))) : await cD.e(382).then((() => cD(61067)))
          }))), this._drawWrapper.effect.isReady()
        }
        resetRefreshCounter() {
          this._currentRefreshId = -1
        }
        setFragment(DD) {
          this._fragment = DD
        }
        get refreshRate() {
          return this._refreshRate
        }
        set refreshRate(DD) {
          this._refreshRate = DD, this.resetRefreshCounter()
        }
        _shouldRender() {
          return this.isEnabled && this.isReady() && this._texture ? !this._fallbackTextureUsed && (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, this._frameId++, !0) : (this._currentRefreshId++, !1)) : (this._texture && (this._texture.isReady = !1), !1)
        }
        getRenderSize() {
          return this._size
        }
        resize(DD, CD) {
          if (this._fallbackTextureUsed || !this._rtWrapper || !this._texture) return;
          const cD = this._texture.isCube;
          this._rtWrapper.dispose();
          const ID = this._createRtWrapper(cD, DD, CD, this._textureType);
          this._texture = ID.texture, this._size = DD, this._generateMipMaps = CD
        }
        _checkUniform(DD) {
          -1 === this._uniforms.indexOf(DD) && this._uniforms.push(DD)
        }
        setTexture(DD, CD) {
          return -1 === this._samplers.indexOf(DD) && this._samplers.push(DD), this._textures[DD] = CD, this
        }
        setFloat(DD, CD) {
          return this._checkUniform(DD), this._floats[DD] = CD, this
        }
        setInt(DD, CD) {
          return this._checkUniform(DD), this._ints[DD] = CD, this
        }
        setFloats(DD, CD) {
          return this._checkUniform(DD), this._floatsArrays[DD] = CD, this
        }
        setColor3(DD, CD) {
          return this._checkUniform(DD), this._colors3[DD] = CD, this
        }
        setColor4(DD, CD) {
          return this._checkUniform(DD), this._colors4[DD] = CD, this
        }
        setVector2(DD, CD) {
          return this._checkUniform(DD), this._vectors2[DD] = CD, this
        }
        setVector3(DD, CD) {
          return this._checkUniform(DD), this._vectors3[DD] = CD, this
        }
        setVector4(DD, CD) {
          return this._checkUniform(DD), this._vectors4[DD] = CD, this
        }
        setMatrix(DD, CD) {
          return this._checkUniform(DD), this._matrices[DD] = CD, this
        }
        render(DD) {
          const CD = this.hq();
          if (!CD) return;
          const cD = this._fullEngine;
          if (cD.enableEffect(this._drawWrapper), this.onBeforeGenerationObservable.notifyObservers(this), cD.setState(!1), !this.nodeMaterialSource) {
            for (const DD in this._textures) this._drawWrapper.effect.setTexture(DD, this._textures[DD]);
            for (const DD in this._ints) this._drawWrapper.effect.setInt(DD, this._ints[DD]);
            for (const DD in this._floats) this._drawWrapper.effect.setFloat(DD, this._floats[DD]);
            for (const DD in this._floatsArrays) this._drawWrapper.effect.setArray(DD, this._floatsArrays[DD]);
            for (const DD in this._colors3) this._drawWrapper.effect.setColor3(DD, this._colors3[DD]);
            for (const DD in this._colors4) {
              const CD = this._colors4[DD];
              this._drawWrapper.effect.setFloat4(DD, CD.r, CD.g, CD.b, CD.a)
            }
            for (const DD in this._vectors2) this._drawWrapper.effect.setVector2(DD, this._vectors2[DD]);
            for (const DD in this._vectors3) this._drawWrapper.effect.setVector3(DD, this._vectors3[DD]);
            for (const DD in this._vectors4) this._drawWrapper.effect.setVector4(DD, this._vectors4[DD]);
            for (const DD in this._matrices) this._drawWrapper.effect.setMatrix(DD, this._matrices[DD])
          }
          if (!this._texture || !this._rtWrapper) return;
          cD._enableGPUDebugMarkers && cD._debugPushGroup?.(`procedural texture generation for ${this.name}`);
          const ID = cD.currentViewport;
          if (this.isCube)
            for (let pD = 0; pD < 6; pD++) cD.bindFramebuffer(this._rtWrapper, pD, void 0, void 0, !0), cD.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._drawWrapper.effect.setFloat("face", pD), this.autoClear && cD.clear(CD.clearColor, !0, !1, !1), cD.drawElementsType(iD.d.TriangleFillMode, 0, 6), cD.unBindFramebuffer(this._rtWrapper, !0);
          else {
            let DD = 1;
            this._rtWrapper.is3D ? DD = this._rtWrapper.depth : this._rtWrapper.is2DArray && (DD = this._rtWrapper.layers);
            for (let ID = 0; ID < DD; ID++) {
              if (cD.bindFramebuffer(this._rtWrapper, 0, void 0, void 0, !0, 0, ID), cD.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._rtWrapper.is3D || this._rtWrapper.is2DArray) {
                this._drawWrapper.effect?.setFloat("layer", 1 !== DD ? ID / (DD - 1) : 0), this._drawWrapper.effect?.setInt("layerNum", ID);
                for (const DD in this._textures) this._drawWrapper.effect.setTexture(DD, this._textures[DD])
              }
              this.autoClear && cD.clear(CD.clearColor, !0, !1, !1), cD.drawElementsType(iD.d.TriangleFillMode, 0, 6), cD.unBindFramebuffer(this._rtWrapper, !this._generateMipMaps)
            }
          }
          ID && cD.setViewport(ID), this.isCube && cD.generateMipMapsForCubemap(this._texture, !0), cD._enableGPUDebugMarkers && cD._debugPopGroup?.(), this.onGenerated && this.onGenerated(), this.onGeneratedObservable.notifyObservers(this)
        }
        clone() {
          const CD = this.getSize(),
            cD = new DD(this.name, CD.width, this._fragment, this.hq(), this._fallbackTexture, this._generateMipMaps);
          return cD.hasAlpha = this.hasAlpha, cD.level = this.level, cD.coordinatesMode = this.coordinatesMode, cD
        }
        dispose() {
          const DD = this.hq();
          if (!DD) return;
          const CD = DD.proceduralTextures.indexOf(this);
          CD >= 0 && DD.proceduralTextures.splice(CD, 1);
          const cD = this._vertexBuffers[GD.k.PositionKind];
          cD && (cD.dispose(), this._vertexBuffers[GD.k.PositionKind] = null), this._indexBuffer && this._fullEngine._releaseBuffer(this._indexBuffer) && (this._indexBuffer = null), this.onGeneratedObservable.clear(), this.onBeforeGenerationObservable.clear(), super.dispose()
        }
      }, (() => {
        const cD = "function" === typeof Symbol && Symbol.metadata ? Object.create(QD[Symbol.metadata] ?? null) : void 0;
        CD = [(0, UD.G)()], ID = [(0, UD.G)()], pD = [(0, UD.G)()], fD = [(0, UD.G)()], bD = [(0, UD.G)()], (0, HD.k)(DD, null, bD, {
          kind: "getter",
          name: "refreshRate",
          static: !1,
          private: !1,
          access: {
            has: DD => "refreshRate" in DD,
            get: DD => DD.refreshRate
          },
          metadata: cD
        }, null, wD), (0, HD.k)(null, null, CD, {
          kind: "field",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: DD => "isEnabled" in DD,
            get: DD => DD.isEnabled,
            set: (DD, CD) => {
              DD.isEnabled = CD
            }
          },
          metadata: cD
        }, SD, BD), (0, HD.k)(null, null, ID, {
          kind: "field",
          name: "autoClear",
          static: !1,
          private: !1,
          access: {
            has: DD => "autoClear" in DD,
            get: DD => DD.autoClear,
            set: (DD, CD) => {
              DD.autoClear = CD
            }
          },
          metadata: cD
        }, yD, MD), (0, HD.k)(null, null, pD, {
          kind: "field",
          name: "_generateMipMaps",
          static: !1,
          private: !1,
          access: {
            has: DD => "_generateMipMaps" in DD,
            get: DD => DD._generateMipMaps,
            set: (DD, CD) => {
              DD._generateMipMaps = CD
            }
          },
          metadata: cD
        }, tD, oD), (0, HD.k)(null, null, fD, {
          kind: "field",
          name: "_size",
          static: !1,
          private: !1,
          access: {
            has: DD => "_size" in DD,
            get: DD => DD._size,
            set: (DD, CD) => {
              DD._size = CD
            }
          },
          metadata: cD
        }, vD, ND), cD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: cD
        })
      })(), DD
    })();

    function pc(DD) {
      return "texture" in DD
    }

    function ic(DD) {
      return "value" in DD
    }
    async function fc(DD, CD, ID) {
      const pD = [CD.red, CD.green, CD.blue, CD.alpha],
        iD = [],
        fD = [];
      for (let cD = 0; cD < 4; cD++) {
        const DD = pD[cD];
        if (DD)
          if (pc(DD)) {
            if (DD.sourceChannel < 0 || DD.sourceChannel > 3) throw new Error("Source channel must be between 0 and 3 (R, G, B, A)");
            let CD = iD.indexOf(DD.texture); - 1 === CD && (CD = iD.length, iD.push(DD.texture)), fD[cD] = CD
          } else {
            if (!ic(DD)) throw new Error("Invalid channel input configuration");
            if (DD.value < 0 || DD.value > 1) throw new Error("Constant value must be between 0.0 and 1.0");
            fD[cD] = -1
          }
        else fD[cD] = -1
      }
      let bD = CD.outputSize;
      if (!bD && iD.length > 0) {
        let DD = 0;
        for (const CD of iD) {
          const cD = CD.getSize(),
            ID = Math.max(cD.width, cD.height);
          ID > DD && (DD = ID, bD = cD.width === cD.height ? DD : cD)
        }
      }
      bD = bD || 512;
      const QD = [],
        wD = new Set;
      for (let cD = 0; cD < 4; cD++) {
        const DD = pD[cD],
          CD = ["RED", "GREEN", "BLUE", "ALPHA"][cD];
        if (DD && pc(DD)) {
          QD.push(`${CD}_FROM_TEXTURE`);
          const DD = fD[cD];
          wD.add(DD)
        }
      }
      wD.forEach((DD => {
        QD.push(`USE_TEXTURE${DD}`)
      }));
      const SD = {
          type: 2,
          format: 5,
          samplingMode: 1,
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          shaderLanguage: ID.DZ().isWebGPU ? 1 : 0,
          extraInitializationsAsync: async () => {
            ID.DZ().isWebGPU ? await Promise.all([cD.e(379).then((() => cD(61054)))]) : await Promise.all([cD.e(380).then((() => cD(61057)))])
          },
          skipSceneRegistration: !0
        },
        BD = new Ic(DD, bD, "textureMerger", ID, SD);
      BD.refreshRate = -1, BD.defines = QD.length > 0 ? "#define " + QD.join("\n#define ") + "\n" : "";
      for (let cD = 0; cD < iD.length; cD++) yD = iD[cD], (MD = BD).uOffset = yD.uOffset, MD.vOffset = yD.vOffset, MD.uScale = yD.uScale, MD.vScale = yD.vScale, MD.uAng = yD.uAng, MD.vAng = yD.vAng, MD.wAng = yD.wAng, MD.uRotationCenter = yD.uRotationCenter, MD.vRotationCenter = yD.vRotationCenter, BD.setTexture(`inputTexture${cD}`, iD[cD]);
      var yD, MD;
      for (let cD = 0; cD < 4; cD++) {
        const DD = pD[cD],
          CD = ["red", "green", "blue", "alpha"][cD];
        if (DD && pc(DD)) {
          const ID = fD[cD];
          BD.setInt(`${CD}TextureIndex`, ID), BD.setInt(`${CD}SourceChannel`, DD.sourceChannel)
        } else {
          let ID;
          ID = DD && ic(DD) ? DD.value : 3 === cD ? 1 : 0, BD.setFloat(`${CD}ConstantValue`, ID)
        }
      }
      return await new Promise(((DD, CD) => {
        BD.executeWhenReady((() => {
          try {
            BD.render(), DD(BD)
          } catch (cD) {
            CD(cD instanceof Error ? cD : new Error(String(cD)))
          }
        }))
      }))
    }

    function bc(DD, CD) {
      return {
        texture: DD,
        sourceChannel: CD
      }
    }

    function Qc(DD) {
      return {
        value: DD
      }
    }

    function wc(DD, CD, cD, ID) {
      return {
        red: DD,
        green: CD,
        blue: cD,
        alpha: ID
      }
    }
    var Sc = cD(38977),
      Bc = cD(39076),
      yc = cD(36455),
      Mc = cD(39139),
      tc = cD(39062);
    class Zc {
      constructor() {
        this.renderWidth = 512, this.renderHeight = 256, this.textureSize = 512, this.deterministicLockstep = !1, this.lockstepMaxSteps = 4
      }
    }
    class oc extends Sc.c {
      isDeterministicLockStep() {
        return this._options.deterministicLockstep
      }
      getLockstepMaxSteps() {
        return this._options.lockstepMaxSteps
      }
      getHardwareScalingLevel() {
        return 1
      }
      get supportsUniformBuffers() {
        return !!this._options?.enableMultiview || this.JZ > 1 && !this.disableUniformBuffers
      }
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Zc;
        super(null), void 0 === DD.deterministicLockstep && (DD.deterministicLockstep = !1), void 0 !== DD.timeStep && (this._timeStep = DD.timeStep), void 0 === DD.lockstepMaxSteps && (DD.lockstepMaxSteps = 4), this._options = DD, yc.e.SetMatrixPrecision(!!DD.useHighPrecisionMatrix), this._caps = {
          maxTexturesImageUnits: 16,
          maxVertexTextureImageUnits: 16,
          maxCombinedTexturesImageUnits: 32,
          maxTextureSize: 512,
          maxCubemapTextureSize: 512,
          maxDrawBuffers: 0,
          maxRenderTextureSize: 512,
          maxVertexAttribs: 16,
          maxVaryingVectors: 16,
          maxFragmentUniformVectors: 16,
          maxVertexUniformVectors: 16,
          shaderFloatPrecision: 10,
          standardDerivatives: !1,
          astc: null,
          pvrtc: null,
          etc1: null,
          etc2: null,
          bptc: null,
          maxAnisotropy: 0,
          uintIndices: !1,
          fragmentDepthSupported: !1,
          highPrecisionShaderSupported: !0,
          colorBufferFloat: !1,
          blendFloat: !1,
          supportFloatTexturesResolve: !1,
          rg11b10ufColorRenderable: !1,
          textureFloat: !1,
          textureFloatLinearFiltering: !1,
          textureFloatRender: !1,
          textureHalfFloat: !1,
          textureHalfFloatLinearFiltering: !1,
          textureHalfFloatRender: !1,
          textureLOD: !1,
          texelFetch: !1,
          drawBuffersExtension: !1,
          depthTextureExtension: !1,
          vertexArrayObject: !1,
          instancedArrays: !1,
          supportOcclusionQuery: !1,
          canUseTimestampForTimerQuery: !1,
          maxMSAASamples: 1,
          blendMinMax: !1,
          canUseGLInstanceID: !1,
          canUseGLVertexID: !1,
          supportComputeShaders: !1,
          supportSRGBBuffers: !1,
          supportTransformFeedbacks: !1,
          textureMaxLevel: !1,
          texture2DArrayMaxLayerCount: 128,
          disableMorphTargetTexture: !1,
          textureNorm16: !1,
          blendParametersPerTarget: !1,
          dualSourceBlending: !1,
          supportReadWriteStorageTextures: !1
        }, DD.enableMultiview && (this._caps.multiview = {
          framebufferTextureMultiviewOVR: () => {}
        }), this._features = {
          forceBitmapOverHTMLImageElement: !1,
          supportRenderAndCopyToLodForFloatTextures: !1,
          supportDepthStencilTexture: !1,
          supportShadowSamplers: !1,
          uniformBufferHardCheckMatrix: !1,
          allowTexturePrefiltering: !1,
          trackUbosInFrame: !1,
          checkUbosContentBeforeUpload: !1,
          supportCSM: !1,
          basisNeedsPOT: !1,
          support3DTextures: !1,
          needTypeSuffixInShaderConstants: !1,
          supportMSAA: !1,
          supportSSAO2: !1,
          supportIBLShadows: !1,
          supportExtendedTextureFormats: !1,
          supportSwitchCaseInShader: !1,
          supportSyncTextureRead: !1,
          needsInvertingBitmap: !1,
          useUBOBindingCache: !1,
          needShaderCodeInlining: !1,
          needToAlwaysBindUniformBuffers: !1,
          supportRenderPasses: !0,
          supportSpriteInstancing: !1,
          forceVertexBufferStrideAndOffsetMultiple4Bytes: !1,
          _checkNonFloatVertexBuffersDontRecreatePipelineContext: !1
        }, DD.renderingCanvas && (this._renderingCanvas = DD.renderingCanvas), xD.e.Log(`Babylon.js v${Sc.c.Version} - Null engine`);
        const CD = "undefined" !== typeof self ? self : "undefined" !== typeof global ? global : window;
        "undefined" === typeof URL && (CD.URL = {
          createObjectURL: function() {},
          revokeObjectURL: function() {}
        }), "undefined" === typeof Blob && (CD.Blob = function() {})
      }
      createVertexBuffer(DD) {
        const CD = new Bc.e;
        return CD.references = 1, CD
      }
      createIndexBuffer(DD) {
        const CD = new Bc.e;
        return CD.references = 1, CD
      }
      clear(DD, CD, cD) {}
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._options.renderWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._options.renderHeight
      }
      setViewport(DD, CD, cD) {
        this._cachedViewport = DD
      }
      createUniformBuffer(DD) {
        const CD = new Bc.e;
        return CD.references = 1, CD.LB = DD instanceof Array ? DD.length * Float32Array.BYTES_PER_ELEMENT : DD.byteLength, CD
      }
      createDynamicUniformBuffer(DD) {
        return this.createUniformBuffer(DD)
      }
      updateUniformBuffer(DD, CD, cD, ID) {}
      bindUniformBufferBase(DD, CD, cD) {}
      bindUniformBlock(DD, CD, cD) {}
      createShaderProgram(DD, CD, cD, ID, pD) {
        return {
          __SPECTOR_rebuildProgram: null
        }
      }
      getUniforms(DD, CD) {
        return []
      }
      getAttributes(DD, CD) {
        return []
      }
      bindSamplers(DD) {
        this._currentEffect = null
      }
      enableEffect(DD) {
        DD = null !== DD && (0, tc.e)(DD) ? DD.effect : DD, this._currentEffect = DD, DD && (DD.onBind && DD.onBind(DD), DD._onBindObservable && DD._onBindObservable.notifyObservers(DD))
      }
      setStateCullFaceType(DD, CD) {}
      setState(DD) {}
      setIntArray(DD, CD) {
        return !0
      }
      setIntArray2(DD, CD) {
        return !0
      }
      setIntArray3(DD, CD) {
        return !0
      }
      setIntArray4(DD, CD) {
        return !0
      }
      setFloatArray(DD, CD) {
        return !0
      }
      setFloatArray2(DD, CD) {
        return !0
      }
      setFloatArray3(DD, CD) {
        return !0
      }
      setFloatArray4(DD, CD) {
        return !0
      }
      setArray(DD, CD) {
        return !0
      }
      setArray2(DD, CD) {
        return !0
      }
      setArray3(DD, CD) {
        return !0
      }
      setArray4(DD, CD) {
        return !0
      }
      setMatrices(DD, CD) {
        return !0
      }
      setMatrix3x3(DD, CD) {
        return !0
      }
      setMatrix2x2(DD, CD) {
        return !0
      }
      setFloat(DD, CD) {
        return !0
      }
      setFloat2(DD, CD, cD) {
        return !0
      }
      setFloat3(DD, CD, cD, ID) {
        return !0
      }
      setBool(DD, CD) {
        return !0
      }
      setFloat4(DD, CD, cD, ID, pD) {
        return !0
      }
      setAlphaMode(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._alphaMode[cD] !== DD && (this.alphaState.setAlphaBlend(0 !== DD, 0), CD || this.setDepthWrite(0 === DD), this._alphaMode[cD] = DD)
      }
      bindBuffers(DD, CD, cD) {}
      wipeCaches(DD) {
        this.preventCacheWipeBetweenFrames || (this.resetTextureCache(), this._currentEffect = null, DD && (this._currentProgram = null, this._stencilStateComposer.reset(), this.depthCullingState.reset(), this.alphaState.reset()), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null)
      }
      draw(DD, CD, cD, ID) {}
      drawElementsType(DD, CD, cD, ID) {}
      drawArraysType(DD, CD, cD, ID) {}
      _createTexture() {
        return {}
      }
      _releaseTexture(DD) {}
      createTexture(DD, CD, cD, ID) {
        let pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          iD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          fD = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          bD = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
        const QD = new UC.c(this, 1),
          wD = String(DD);
        return QD.url = wD, QD.generateMipMaps = !CD, QD.samplingMode = pD, QD.invertY = cD, QD.baseWidth = this._options.textureSize, QD.baseHeight = this._options.textureSize, QD.width = this._options.textureSize, QD.height = this._options.textureSize, bD && (QD.format = bD), fD && (QD._buffer = fD), QD.isReady = !0, iD && setTimeout((() => {
          iD(QD)
        })), this._internalTexturesCache.push(QD), QD
      }
      _createHardwareRenderTargetWrapper(DD, CD, cD) {
        const ID = new Mc.c(DD, CD, cD, this);
        return this._renderTargetWrapperCache.push(ID), ID
      }
      createRenderTargetTexture(DD, CD) {
        const cD = this._createHardwareRenderTargetWrapper(!1, !1, DD),
          ID = {};
        void 0 !== CD && "object" === typeof CD ? (ID.generateMipMaps = CD.generateMipMaps, ID.generateDepthBuffer = void 0 === CD.generateDepthBuffer || CD.generateDepthBuffer, ID.generateStencilBuffer = ID.generateDepthBuffer && CD.generateStencilBuffer, ID.type = void 0 === CD.type ? 0 : CD.type, ID.samplingMode = void 0 === CD.samplingMode ? 3 : CD.samplingMode) : (ID.generateMipMaps = CD, ID.generateDepthBuffer = !0, ID.generateStencilBuffer = !1, ID.type = 0, ID.samplingMode = 3);
        const pD = new UC.c(this, 5);
        cD.setTexture(pD);
        const iD = DD.width || DD,
          fD = DD.height || DD;
        return cD._generateDepthBuffer = ID.generateDepthBuffer, cD._generateStencilBuffer = !!ID.generateStencilBuffer, pD.baseWidth = iD, pD.baseHeight = fD, pD.width = iD, pD.height = fD, pD.isReady = !0, pD.samples = 1, pD.generateMipMaps = !!ID.generateMipMaps, pD.samplingMode = ID.samplingMode, pD.type = ID.type, this._internalTexturesCache.push(pD), cD
      }
      createMultiviewRenderTargetTexture(DD, CD) {
        if (!this.getCaps().multiview) throw new Error("Multiview is not supported");
        const cD = this._createHardwareRenderTargetWrapper(!1, !1, {
            width: DD,
            height: CD
          }),
          ID = new UC.c(this, 5, !0);
        return ID.baseWidth = DD, ID.baseHeight = CD, ID.width = DD, ID.height = CD, ID.isMultiview = !0, ID.isReady = !0, ID.format = 5, ID.samples = 1, cD.setTextures(ID), cD
      }
      bindMultiviewFramebuffer(DD) {
        this.bindFramebuffer(DD, void 0, void 0, void 0, !0)
      }
      createRenderTargetCubeTexture(DD, CD) {
        const cD = this._createHardwareRenderTargetWrapper(!1, !0, DD),
          ID = {
            generateMipMaps: !0,
            generateDepthBuffer: !0,
            generateStencilBuffer: !1,
            type: 0,
            samplingMode: 3,
            format: 5,
            ...CD
          };
        ID.generateStencilBuffer = ID.generateDepthBuffer && ID.generateStencilBuffer, (1 !== ID.type || this._caps.textureFloatLinearFiltering) && (2 !== ID.type || this._caps.textureHalfFloatLinearFiltering) || (ID.samplingMode = 1), cD._generateDepthBuffer = ID.generateDepthBuffer, cD._generateStencilBuffer = !!ID.generateStencilBuffer;
        const pD = new UC.c(this, 5);
        return pD.baseWidth = DD, pD.baseHeight = DD, pD.width = DD, pD.height = DD, pD.isReady = !0, pD.isCube = !0, pD.samples = 1, pD.generateMipMaps = !!ID.generateMipMaps, pD.samplingMode = ID.samplingMode, pD.type = ID.type, this._internalTexturesCache.push(pD), cD
      }
      updateTextureSamplingMode(DD, CD) {
        CD.samplingMode = DD
      }
      createRawTexture(DD, CD, cD, ID, pD, iD, fD) {
        let bD = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          QD = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          wD = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const SD = new UC.c(this, 3);
        return SD.baseWidth = CD, SD.baseHeight = cD, SD.width = CD, SD.height = cD, SD.format = ID, SD.generateMipMaps = pD, SD.samplingMode = fD, SD.invertY = iD, SD._compression = bD, SD.type = QD, SD._useSRGBBuffer = wD, this._doNotHandleContextLost || (SD._bufferView = DD), SD
      }
      updateRawTexture(DD, CD, cD, ID) {
        let pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          iD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          fD = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        DD && (DD._bufferView = CD, DD.format = cD, DD.invertY = ID, DD._compression = pD, DD.type = iD, DD._useSRGBBuffer = fD)
      }
      bindFramebuffer(DD, CD, cD, ID, pD) {
        this._currentRenderTarget && this.unBindFramebuffer(this._currentRenderTarget), this._currentRenderTarget = DD, this._currentFramebuffer = null, this._cachedViewport && !pD && this.setViewport(this._cachedViewport, cD, ID)
      }
      unBindFramebuffer(DD) {
        let CD = arguments.length > 2 ? arguments[2] : void 0;
        this._currentRenderTarget = null, CD && CD(), this._currentFramebuffer = null
      }
      createDynamicVertexBuffer(DD) {
        const CD = new Bc.e;
        return CD.references = 1, CD.LB = 1, CD
      }
      updateDynamicTexture(DD, CD, cD) {}
      areAllEffectsReady() {
        return !0
      }
      getError() {
        return 0
      }
      _getUnpackAlignement() {
        return 1
      }
      _unpackFlipY(DD) {}
      updateDynamicIndexBuffer(DD, CD) {}
      updateDynamicVertexBuffer(DD, CD, cD, ID) {}
      _bindTextureDirectly(DD, CD) {
        return this._boundTexturesCache[this._activeChannel] !== CD && (this._boundTexturesCache[this._activeChannel] = CD, !0)
      }
      _bindTexture(DD, CD) {
        DD < 0 || this._bindTextureDirectly(0, CD)
      }
      _deleteBuffer(DD) {}
      releaseEffects() {}
      displayLoadingUI() {}
      hideLoadingUI() {}
      set loadingUIText(DD) {}
      flushFramebuffer() {}
      _uploadCompressedDataToTextureDirectly(DD, CD, cD, ID, pD) {}
      _uploadDataToTextureDirectly(DD, CD) {}
      _uploadArrayBufferViewToTexture(DD, CD) {}
      _uploadImageToTexture(DD, CD) {}
    }
    cD(39186), cD(39220), cD(39181);
    async function vc(DD) {
      const CD = DD.getInternalTexture();
      if (!CD || 1 !== CD.source) return null;
      if (CD.invertY) {
        const CD = DD.hq()?.DZ();
        if (!(CD instanceof oc)) return null
      }
      const cD = CD._buffer;
      let ID, iD = DD.mimeType;
      try {
        cD ? ArrayBuffer.isView(cD) ? ID = cD.buffer.slice(cD.byteOffset, cD.byteOffset + cD.byteLength) : cD instanceof ArrayBuffer ? ID = cD : cD instanceof Blob ? (ID = await cD.arrayBuffer(), iD = cD.type || iD) : "string" === typeof cD ? (ID = await pD.Tools.LoadFileAsync(cD), iD = (0, QD.c)(cD) || iD) : "undefined" !== typeof HTMLImageElement && cD instanceof HTMLImageElement && (ID = await pD.Tools.LoadFileAsync(cD.src), iD = (0, QD.c)(cD.src) || iD) : (ID = await pD.Tools.LoadFileAsync(CD.url), iD = (0, QD.c)(CD.url) || iD)
      } catch {
        return null
      }
      if (ID && !iD && CD.url) {
        const DD = CD.url.match(/^data:([^;,]+)/);
        iD = DD ? DD[1] : (0, QD.c)(CD.url)
      }
      return ID && iD ? {
        data: ID,
        mimeType: iD
      } : null
    }
    const Nc = 1e-6,
      gc = new oD.Color3(.04, .04, .04),
      Xc = 1024,
      mc = oD.Color3.White(),
      nc = oD.Color3.BlackReadOnly;

    function Oc(DD) {
      switch (DD) {
        case "image/jpeg":
        case "image/png":
        case "image/webp":
        case "image/avif":
        case "image/ktx2":
          return !0;
        default:
          return !1
      }
    }

    function Pc(DD, CD, cD) {
      if (CD < gc.r) return 0;
      const ID = gc.r,
        pD = DD * cD / (1 - gc.r) + CD - 2 * gc.r,
        iD = pD * pD - 4 * ID * (gc.r - CD);
      return gD.Clamp((-pD + Math.sqrt(iD)) / (2 * ID), 0, 1)
    }

    function Hc(DD) {
      const CD = DD.diffuseColor.toLinearSpace(DD.hq().DZ().useExactSrgbConversions).scale(.5),
        cD = DD.alpha,
        ID = function(DD) {
          let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new TD.n(0, 1),
            cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new TD.n(0, .1),
            ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new TD.n(0, .1),
            pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new TD.n(1300, .1);
          return function(DD, CD, cD, ID, pD) {
            return (1 - DD) * (1 - DD) * (1 - DD) * CD + 3 * (1 - DD) * (1 - DD) * DD * cD + 3 * (1 - DD) * DD * DD * ID + DD * DD * DD * pD
          }(Math.pow(DD / pD.x, .333333), CD.y, cD.y, ID.y, pD.y)
        }(gD.Clamp(DD.specularPower, 0, Xc));
      return {
        baseColorFactor: [CD.r, CD.g, CD.b, cD],
        metallicFactor: 0,
        roughnessFactor: ID
      }
    }

    function Uc(DD, CD) {
      CD.needAlphaBlending() ? DD.alphaMode = "BLEND" : CD.needAlphaTesting() && (DD.alphaMode = "MASK", DD.alphaCutoff = CD.alphaCutOff)
    }

    function xc(DD, CD, cD) {
      const ID = new Uint8Array(DD * CD * 4);
      for (let pD = 0; pD < ID.length; pD += 4) ID[pD] = ID[pD + 1] = ID[pD + 2] = ID[pD + 3] = 255;
      return nD.e.CreateRGBATexture(ID, DD, CD, cD)
    }

    function qc(DD) {
      if (DD instanceof Uint8Array) {
        const CD = DD.length,
          cD = new Float32Array(DD.length);
        for (let ID = 0; ID < CD; ++ID) cD[ID] = DD[ID] / 255;
        return cD
      }
      if (DD instanceof Float32Array) return DD;
      throw new Error("Unsupported pixel format!")
    }
    class Jc {
      constructor(DD) {
        this._exporter = DD, this._textureMap = new Map, this._internalTextureToImage = {}
      }
      getTextureInfo(DD) {
        return DD ? this._textureMap.get(DD.uniqueId) ?? null : null
      }
      async exportStandardMaterialAsync(DD, CD) {
        const cD = Hc(DD),
          ID = {
            name: DD.name
          };
        if (null == DD.backFaceCulling || DD.backFaceCulling || (DD.twoSidedLighting || pD.Tools.Warn(DD.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), ID.doubleSided = !0), CD) {
          const CD = [],
            pD = DD.diffuseTexture;
          pD && CD.push(this.exportTextureAsync(pD).then((DD => {
            DD && (cD.baseColorTexture = DD)
          })));
          const iD = DD.bumpTexture;
          iD && CD.push(this.exportTextureAsync(iD).then((DD => {
            DD && (ID.normalTexture = DD, 1 !== iD.level && (ID.normalTexture.scale = iD.level))
          })));
          const fD = DD.emissiveTexture;
          fD && (ID.emissiveFactor = [1, 1, 1], CD.push(this.exportTextureAsync(fD).then((DD => {
            DD && (ID.emissiveTexture = DD)
          }))));
          const bD = DD.ambientTexture;
          bD && CD.push(this.exportTextureAsync(bD).then((DD => {
            if (DD) {
              const CD = {
                index: DD.index
              };
              ID.occlusionTexture = CD
            }
          }))), CD.length > 0 && (this._exporter._materialNeedsUVsSet.add(DD), await Promise.all(CD))
        }(DD.alpha < 1 || DD.opacityTexture) && (DD.alphaMode === OD.b.ALPHA_COMBINE ? ID.alphaMode = "BLEND" : pD.Tools.Warn(DD.name + ": glTF 2.0 does not support alpha mode: " + DD.alphaMode.toString())), DD.emissiveColor && !DD.emissiveColor.equalsWithEpsilon(nc, Nc) && (ID.emissiveFactor = DD.emissiveColor.XcD()), ID.pbrMetallicRoughness = cD, Uc(ID, DD), await this._finishMaterialAsync(ID, DD);
        const iD = this._exporter._materials;
        return iD.push(ID), iD.length - 1
      }
      async _finishMaterialAsync(DD, CD) {
        const cD = await this._exporter._extensionsPostExportMaterialAdditionalTexturesAsync("exportMaterial", DD, CD),
          ID = [];
        for (const pD of cD) ID.push(this.exportTextureAsync(pD));
        await Promise.all(ID), await this._exporter._extensionsPostExportMaterialAsync("exportMaterial", DD, CD)
      }
      _resizeTexturesToSameDimensions(DD, CD, cD) {
        const ID = DD ? DD.getSize() : {
            width: 0,
            height: 0
          },
          pD = CD ? CD.getSize() : {
            width: 0,
            height: 0
          };
        let iD, fD;
        return ID.width < pD.width ? (iD = DD && DD instanceof mD.e ? XD.k.CreateResizedCopy(DD, pD.width, pD.height, !0) : xc(pD.width, pD.height, cD), fD = CD) : ID.width > pD.width ? (fD = CD && CD instanceof mD.e ? XD.k.CreateResizedCopy(CD, ID.width, ID.height, !0) : xc(ID.width, ID.height, cD), iD = DD) : (iD = DD, fD = CD), {
          texture1: iD,
          texture2: fD
        }
      }
      async _convertSpecularGlossinessTexturesToMetallicRoughnessAsync(DD, CD, cD) {
        const ID = new Array;
        if (!DD && !CD) return await Promise.reject("diffuse and specular glossiness textures are not defined!");
        const pD = DD ? DD.hq() : CD ? CD.hq() : null;
        if (pD) {
          const iD = this._resizeTexturesToSameDimensions(DD, CD, pD),
            fD = iD.texture1?.getSize();
          let bD, QD;
          const wD = fD.width,
            SD = fD.height,
            BD = await iD.texture1.readPixels(),
            yD = await iD.texture2.readPixels();
          if (!BD) return await Promise.reject("Failed to retrieve pixels from diffuse texture!");
          if (bD = qc(BD), !yD) return await Promise.reject("Failed to retrieve pixels from specular glossiness texture!");
          QD = qc(yD);
          const MD = QD.byteLength,
            tD = new Uint8Array(MD),
            ZD = new Uint8Array(MD),
            vD = 4,
            ND = new oD.Color3(0, 0, 0);
          let gD = 0,
            XD = 0;
          for (let DD = 0; DD < SD; ++DD)
            for (let CD = 0; CD < wD; ++CD) {
              const ID = (wD * DD + CD) * vD,
                fD = {
                  diffuseColor: new oD.Color3(bD[ID], bD[ID + 1], bD[ID + 2]).toLinearSpace(pD.DZ().useExactSrgbConversions).multiply(cD.diffuseColor),
                  specularColor: new oD.Color3(QD[ID], QD[ID + 1], QD[ID + 2]).toLinearSpace(pD.DZ().useExactSrgbConversions).multiply(cD.specularColor),
                  glossiness: QD[ID + 3] * cD.glossiness
                },
                SD = this._convertSpecularGlossinessToMetallicRoughness(fD);
              ND.r = Math.max(ND.r, SD.baseColor.r), ND.g = Math.max(ND.g, SD.baseColor.g), ND.b = Math.max(ND.b, SD.baseColor.b), gD = Math.max(gD, SD.metallic), XD = Math.max(XD, SD.roughness), ZD[ID] = 255 * SD.baseColor.r, ZD[ID + 1] = 255 * SD.baseColor.g, ZD[ID + 2] = 255 * SD.baseColor.b, ZD[ID + 3] = iD.texture1.hasAlpha ? 255 * bD[ID + 3] : 255, tD[ID] = 0, tD[ID + 1] = 255 * SD.roughness, tD[ID + 2] = 255 * SD.metallic, tD[ID + 3] = 255
            }
          const mD = {
            baseColor: ND,
            metallic: gD,
            roughness: XD
          };
          let nD = !1,
            OD = !1;
          for (let DD = 0; DD < SD; ++DD)
            for (let CD = 0; CD < wD; ++CD) {
              const cD = (wD * DD + CD) * vD;
              ZD[cD] /= mD.baseColor.r > Nc ? mD.baseColor.r : 1, ZD[cD + 1] /= mD.baseColor.g > Nc ? mD.baseColor.g : 1, ZD[cD + 2] /= mD.baseColor.b > Nc ? mD.baseColor.b : 1;
              const ID = oD.Color3.FromInts(ZD[cD], ZD[cD + 1], ZD[cD + 2]).toGammaSpace(pD.DZ().useExactSrgbConversions);
              ZD[cD] = 255 * ID.r, ZD[cD + 1] = 255 * ID.g, ZD[cD + 2] = 255 * ID.b, ID.equalsWithEpsilon(mc, Nc) || (OD = !0), tD[cD + 1] /= mD.roughness > Nc ? mD.roughness : 1, tD[cD + 2] /= mD.metallic > Nc ? mD.metallic : 1;
              oD.Color3.FromInts(255, tD[cD + 1], tD[cD + 2]).equalsWithEpsilon(mc, Nc) || (nD = !0)
            }
          return nD && ID.push((0, PD.EncodeImageAsync)(tD, wD, SD).then((DD => {
            mD.metallicRoughnessTextureData = DD
          }))), OD && ID.push((0, PD.EncodeImageAsync)(ZD, wD, SD).then((DD => {
            mD.baseColorTextureData = DD
          }))), await Promise.all(ID).then((() => mD))
        }
        return await Promise.reject("_ConvertSpecularGlossinessTexturesToMetallicRoughness: Scene from textures is missing!")
      }
      _convertSpecularGlossinessToMetallicRoughness(DD) {
        const CD = this._getPerceivedBrightness(DD.diffuseColor),
          cD = this._getPerceivedBrightness(DD.specularColor),
          ID = 1 - this._getMaxComponent(DD.specularColor),
          pD = Pc(CD, cD, ID),
          iD = DD.diffuseColor.scale(ID / (1 - gc.r) / Math.max(1 - pD, Nc)),
          fD = DD.specularColor.subtract(gc.scale(1 - pD)).scale(1 / Math.max(pD, Nc));
        let bD = oD.Color3.Lerp(iD, fD, pD * pD);
        bD = bD.clampToRef(0, 1, bD);
        return {
          baseColor: bD,
          metallic: pD,
          roughness: 1 - DD.glossiness
        }
      }
      _getPerceivedBrightness(DD) {
        return Math.sqrt(.299 * DD.r * DD.r + .587 * DD.g * DD.g + .114 * DD.b * DD.b)
      }
      _getMaxComponent(DD) {
        return Math.max(DD.r, Math.max(DD.g, DD.b))
      }
      async _convertMetalRoughFactorsToMetallicRoughnessAsync(DD, CD, cD, ID, pD, iD, fD, bD, QD) {
        const wD = [],
          SD = {
            baseColor: DD,
            metallic: CD,
            roughness: cD
          };
        if (QD)
          if (fD instanceof AC) {
            if (fD.geometryOpacityTexture) {
              const DD = ID && ID.getInternalTexture() ? ID.getInternalTexture().uniqueId : 0,
                CD = fD.geometryOpacityTexture && fD.geometryOpacityTexture.getInternalTexture() ? fD.geometryOpacityTexture.getInternalTexture().uniqueId : 0,
                cD = Number(`${DD}${CD}`),
                pD = this._textureMap.get(cD);
              pD ? bD.baseColorTexture = pD : wD.push(fc("baseColorOpacityTexture", wc(ID ? bc(ID, 0) : Qc(1), ID ? bc(ID, 1) : Qc(1), ID ? bc(ID, 2) : Qc(1), bc(fD.geometryOpacityTexture, 0)), fD.hq()).then((async DD => {
                const CD = await this.exportTextureAsync(DD, cD);
                CD && (bD.baseColorTexture = CD)
              })))
            } else ID && wD.push(this.exportTextureAsync(ID).then((DD => {
              DD && (bD.baseColorTexture = DD)
            })));
            if (fD._useMetallicFromMetallicTextureBlue && pD) wD.push(this.exportTextureAsync(pD).then((DD => {
              DD && (bD.metallicRoughnessTexture = DD)
            })));
            else if (iD || pD) {
              const DD = pD && pD.getInternalTexture() ? pD.getInternalTexture().uniqueId : 0,
                CD = iD && iD.getInternalTexture() ? iD.getInternalTexture().uniqueId : 0,
                cD = Number(`${DD}${CD}`),
                ID = this._textureMap.get(cD);
              ID ? bD.metallicRoughnessTexture = ID : wD.push(fc("MetalRoughTexture", wc(fD.ambientOcclusionTexture ? bc(fD.ambientOcclusionTexture, 0) : Qc(1), iD ? bc(iD, 0) : Qc(1), pD ? bc(pD, 0) : Qc(1)), fD.hq()).then((async DD => {
                const CD = await this.exportTextureAsync(DD, cD);
                CD && (bD.metallicRoughnessTexture = CD)
              })))
            }
          } else ID && wD.push(this.exportTextureAsync(ID).then((DD => {
            DD && (bD.baseColorTexture = DD)
          }))), pD && wD.push(this.exportTextureAsync(pD).then((DD => {
            DD && (bD.metallicRoughnessTexture = DD)
          })));
        return wD.length > 0 && (this._exporter._materialNeedsUVsSet.add(fD), await Promise.all(wD)), SD
      }
      _getTextureSampler(DD) {
        const CD = {};
        if (!DD || !(DD instanceof mD.e)) return CD;
        const cD = this._getGLTFTextureWrapMode(DD.wrapU);
        10497 !== cD && (CD.wrapS = cD);
        const ID = this._getGLTFTextureWrapMode(DD.wrapV);
        switch (10497 !== ID && (CD.wrapT = ID), DD.samplingMode) {
          case mD.e.LINEAR_LINEAR:
            CD.magFilter = 9729, CD.minFilter = 9729;
            break;
          case mD.e.LINEAR_NEAREST:
            CD.magFilter = 9729, CD.minFilter = 9728;
            break;
          case mD.e.NEAREST_LINEAR:
            CD.magFilter = 9728, CD.minFilter = 9729;
            break;
          case mD.e.NEAREST_LINEAR_MIPLINEAR:
            CD.magFilter = 9728, CD.minFilter = 9987;
            break;
          case mD.e.NEAREST_NEAREST:
            CD.magFilter = 9728, CD.minFilter = 9728;
            break;
          case mD.e.NEAREST_LINEAR_MIPNEAREST:
            CD.magFilter = 9728, CD.minFilter = 9985;
            break;
          case mD.e.LINEAR_NEAREST_MIPNEAREST:
            CD.magFilter = 9729, CD.minFilter = 9984;
            break;
          case mD.e.LINEAR_NEAREST_MIPLINEAR:
            CD.magFilter = 9729, CD.minFilter = 9986;
            break;
          case mD.e.NEAREST_NEAREST_MIPLINEAR:
            CD.magFilter = 9728, CD.minFilter = 9986;
            break;
          case mD.e.LINEAR_LINEAR_MIPLINEAR:
            CD.magFilter = 9729, CD.minFilter = 9987;
            break;
          case mD.e.LINEAR_LINEAR_MIPNEAREST:
            CD.magFilter = 9729, CD.minFilter = 9985;
            break;
          case mD.e.NEAREST_NEAREST_MIPNEAREST:
            CD.magFilter = 9728, CD.minFilter = 9984
        }
        return CD
      }
      _getGLTFTextureWrapMode(DD) {
        switch (DD) {
          case mD.e.WRAP_ADDRESSMODE:
            return 10497;
          case mD.e.CLAMP_ADDRESSMODE:
            return 33071;
          case mD.e.MIRROR_ADDRESSMODE:
            return 33648;
          default:
            return pD.Tools.Error(`Unsupported Texture Wrap Mode ${DD}!`), 10497
        }
      }
      async _convertSpecGlossFactorsToMetallicRoughnessAsync(DD, CD, cD) {
        const ID = {
            diffuseColor: DD._albedoColor,
            specularColor: DD._reflectivityColor,
            glossiness: DD._microSurface
          },
          pD = DD._albedoTexture,
          iD = DD._reflectivityTexture,
          fD = DD._useMicroSurfaceFromReflectivityMapAlpha;
        if (iD && !fD) return await Promise.reject("_ConvertPBRMaterial: Glossiness values not included in the reflectivity texture are currently not supported");
        if ((pD || iD) && cD) {
          this._exporter._materialNeedsUVsSet.add(DD);
          const cD = this._exportTextureSampler(pD || iD),
            fD = await this._convertSpecularGlossinessTexturesToMetallicRoughnessAsync(pD, iD, ID),
            bD = this._exporter._textures;
          if (fD.baseColorTextureData) {
            const DD = await this._exportImageAsync(`baseColor${bD.length}`, fD.baseColorTextureData);
            CD.baseColorTexture = this._exportTextureInfo(DD, cD, pD?.coordinatesIndex)
          }
          if (fD.metallicRoughnessTextureData) {
            const DD = await this._exportImageAsync(`metallicRoughness${bD.length}`, fD.metallicRoughnessTextureData);
            CD.metallicRoughnessTexture = this._exportTextureInfo(DD, cD, iD?.coordinatesIndex)
          }
          return fD
        }
        return this._convertSpecularGlossinessToMetallicRoughness(ID)
      }
      async exportPBRMaterialAsync(DD, CD) {
        const cD = {},
          ID = {
            name: DD.name
          },
          pD = DD.isMetallicWorkflow();
        if (pD) {
          const CD = DD._albedoColor,
            ID = DD.alpha;
          CD && (cD.baseColorFactor = [CD.r, CD.g, CD.b, ID])
        }
        const iD = pD ? await this._convertMetalRoughFactorsToMetallicRoughnessAsync(DD._albedoColor, DD._metallic, DD._roughness, DD._albedoTexture, DD._metallicTexture, DD._metallicTexture, DD, cD, CD) : await this._convertSpecGlossFactorsToMetallicRoughnessAsync(DD, cD, CD);
        await this._setMetallicRoughnessPbrMaterialAsync(iD, DD, ID, cD, CD), await this._finishMaterialAsync(ID, DD);
        const fD = this._exporter._materials;
        return fD.push(ID), fD.length - 1
      }
      async _setMetallicRoughnessPbrMaterialAsync(DD, CD, cD, ID, iD) {
        if (Uc(cD, CD), DD.baseColor.equalsWithEpsilon(mc, Nc) && gD.WithinEpsilon(CD.alpha, 1, Nc) || (ID.baseColorFactor = [DD.baseColor.r, DD.baseColor.g, DD.baseColor.b, CD.alpha]), null != DD.metallic && 1 !== DD.metallic && (ID.metallicFactor = DD.metallic), null != DD.roughness && 1 !== DD.roughness && (ID.roughnessFactor = DD.roughness), null == CD.backFaceCulling || CD.backFaceCulling || (CD._twoSidedLighting || pD.Tools.Warn(CD.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), cD.doubleSided = !0), iD) {
          const DD = [],
            pD = CD instanceof nC ? CD._bumpTexture : CD.geometryNormalTexture;
          pD && DD.push(this.exportTextureAsync(pD).then((DD => {
            DD && (cD.normalTexture = DD, 1 !== pD.level && (cD.normalTexture.scale = pD.level))
          })));
          const iD = CD instanceof nC ? CD._ambientTexture : CD.ambientOcclusionTexture;
          iD && DD.push(new Promise((async DD => {
            if (CD instanceof AC && ID.metallicRoughnessTexture) {
              const CD = this._exportTextureSampler(iD),
                cD = this._exporter._textures[ID.metallicRoughnessTexture.index].source,
                pD = this._exportTextureInfo(cD, CD, iD.coordinatesIndex);
              return this._textureMap.set(iD.uniqueId, pD), this._exporter._extensionsPostExportTextures("exporter", pD, iD), DD(pD)
            }
            return DD(await this.exportTextureAsync(iD))
          })).then((async DD => {
            if (DD) {
              const ID = {
                index: DD.index,
                texCoord: DD.texCoord,
                extensions: DD.extensions
              };
              cD.occlusionTexture = ID, ID.strength = CD instanceof nC ? CD._ambientTextureStrength : CD.ambientOcclusionTexture.level
            }
          })));
          const fD = CD instanceof nC ? CD._emissiveTexture : CD.emissionColorTexture;
          fD && DD.push(this.exportTextureAsync(fD).then((DD => {
            DD && (cD.emissiveTexture = DD)
          }))), DD.length > 0 && (this._exporter._materialNeedsUVsSet.add(CD), await Promise.all(DD))
        }
        const fD = CD instanceof nC ? CD._emissiveColor : CD.emissionColor;
        fD.equalsWithEpsilon(nc, Nc) || (cD.emissiveFactor = fD.XcD()), cD.pbrMetallicRoughness = ID
      }
      async exportOpenPBRMaterialAsync(DD, CD) {
        const cD = {},
          ID = {
            name: DD.name
          },
          pD = DD.baseColor,
          iD = DD.geometryOpacity;
        pD && (cD.baseColorFactor = [pD.r, pD.g, pD.b, iD]);
        const fD = await this._convertMetalRoughFactorsToMetallicRoughnessAsync(DD.baseColor, DD.baseMetalness, DD.specularRoughness, DD.baseColorTexture, DD.baseMetalnessTexture, DD.specularRoughnessTexture, DD, cD, CD);
        await this._setMetallicRoughnessPbrMaterialAsync(fD, DD, ID, cD, CD), await this._finishMaterialAsync(ID, DD);
        const bD = this._exporter._materials;
        return bD.push(ID), bD.length - 1
      }
      async exportTextureAsync(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cD = this._textureMap.get(CD ?? DD.uniqueId);
        if (cD) return cD;
        const ID = this._exportTextureSampler(DD),
          pD = await this._exportTextureImageAsync(DD);
        return cD = this._exportTextureInfo(pD, ID, DD.coordinatesIndex), this._textureMap.set(CD ?? DD.uniqueId, cD), this._exporter._extensionsPostExportTextures("exporter", cD, DD), cD
      }
      async _exportTextureImageAsync(DD) {
        const CD = DD.mimeType ?? "none",
          cD = this._internalTextureToImage,
          ID = DD.getInternalTexture().uniqueId;
        cD[ID] = cD[ID] || {};
        let iD = cD[ID][CD];
        return void 0 === iD && (iD = (async () => {
          const cD = await vc(DD);
          if (cD && Oc(cD.mimeType) && ("none" === CD || cD.mimeType === CD)) return await this._exportImageAsync(DD.name, new Blob([cD.data], {
            type: cD.mimeType
          }));
          let ID = "image/png";
          "none" !== CD && (Oc(CD) ? ID = CD : (ID = "image/png", pD.Tools.Warn(`Unsupported media type: ${CD}. Exporting texture as PNG.`)));
          const iD = DD.getSize(),
            fD = await (0, XD.g)(DD),
            bD = await (0, PD.EncodeImageAsync)(fD, iD.width, iD.height, ID);
          return await this._exportImageAsync(DD.name, bD)
        })(), cD[ID][CD] = iD), await iD
      }
      async _exportImageAsync(DD, CD) {
        const cD = this._exporter._images;
        let ID;
        if (this._exporter._shouldUseGlb) {
          ID = {
            name: DD,
            mimeType: CD.type,
            bufferView: void 0
          };
          const cD = await CD.arrayBuffer(),
            pD = this._exporter._bufferManager.createBufferView(new Uint8Array(cD));
          this._exporter._bufferManager.setBufferView(ID, pD)
        } else {
          const iD = DD.replace(/\.\/|\/|\.\\|\\/g, "_"),
            fD = function(DD) {
              switch (DD) {
                case "image/jpeg":
                  return ".jpg";
                case "image/png":
                  return ".png";
                case "image/webp":
                  return ".webp";
                case "image/avif":
                  return ".avif";
                case "image/ktx2":
                  return ".ktx2"
              }
            }(CD.type);
          let bD = iD + fD;
          cD.some((DD => DD.uri === bD)) && (bD = `${iD}_${pD.Tools.RandomId()}${fD}`), ID = {
            name: DD,
            uri: bD
          }, this._exporter._imageData[bD] = CD
        }
        return cD.push(ID), cD.length - 1
      }
      _exportTextureInfo(DD, CD, cD) {
        const ID = this._exporter._textures;
        let pD = ID.findIndex((cD => cD.sampler == CD && cD.source === DD)); - 1 === pD && (pD = ID.length, ID.push({
          source: DD,
          sampler: CD
        }));
        const iD = {
          index: pD
        };
        return cD && (iD.texCoord = cD), iD
      }
      _exportTextureSampler(DD) {
        const CD = this._getTextureSampler(DD),
          cD = this._exporter._samplers,
          ID = cD.findIndex((DD => DD.minFilter === CD.minFilter && DD.magFilter === CD.magFilter && DD.wrapS === CD.wrapS && DD.wrapT === CD.wrapT));
        return -1 !== ID ? ID : (cD.push(CD), cD.length - 1)
      }
    }
    var Kc = cD(39213),
      ac = cD(39349);
    (0, ac.d)();
    var Vc = cD(36449);
    const zc = ID.Matrix.Compose(new ID.cZ(-1, 1, 1), ID.Quaternion.Identity(), ID.cZ.Zero());

    function jc(DD, CD) {
      if (!(DD instanceof BD.e)) return !1;
      if (CD) {
        if (!DD.getWorldMatrix().equalsWithEpsilon(ID.Matrix.IdentityReadOnly, Vc.c)) return !1
      } else {
        if (!DD.getWorldMatrix().multiplyToRef(zc, ID.TmpVectors.Matrix[0]).equalsWithEpsilon(ID.Matrix.IdentityReadOnly, Vc.c)) return !1
      }
      return !(DD instanceof yD.e && DD.geometry)
    }
    const lc = ID.cZ.ZeroReadOnly,
      Lc = ID.Quaternion.Identity(),
      Tc = ID.cZ.OneReadOnly,
      Gc = new ID.cZ(-1, 1, 1);

    function Rc(DD, CD) {
      const {
        byteOffset: cD,
        byteStride: ID,
        type: pD,
        normalized: iD
      } = DD, fD = DD.getSize(), bD = CD.reduce(((DD, CD) => CD.getTotalVertices() > DD ? CD.getTotalVertices() : DD), -Number.MAX_VALUE);
      return {
        byteOffset: cD,
        byteStride: ID,
        componentCount: fD,
        type: pD,
        count: bD * fD,
        normalized: iD,
        totalVertices: bD,
        kind: DD.getKind()
      }
    }

    function kc(DD) {
      switch (DD) {
        case "MAT2":
        case "VEC4":
          return 4;
        case "MAT3":
          return 9;
        case "MAT4":
          return 16;
        case "SCALAR":
          return 1;
        case "VEC2":
          return 2;
        case "VEC3":
          return 3
      }
    }

    function dc(DD) {
      switch (DD) {
        case SD.e.PositionKind:
        case SD.e.NormalKind:
        case SD.e.TangentKind:
        case SD.e.ColorKind:
        case SD.e.MatricesIndicesKind:
        case SD.e.MatricesIndicesExtraKind:
        case SD.e.MatricesWeightsKind:
        case SD.e.MatricesWeightsExtraKind:
        case SD.e.UVKind:
        case SD.e.UV2Kind:
        case SD.e.UV3Kind:
        case SD.e.UV4Kind:
        case SD.e.UV5Kind:
        case SD.e.UV6Kind:
          return !0
      }
      return !1
    }

    function Yc(DD) {
      const CD = Math.sqrt(DD.x * DD.x + DD.y * DD.y + DD.z * DD.z);
      CD > 0 && (DD.x /= CD, DD.y /= CD, DD.z /= CD)
    }

    function Wc(DD) {
      return DD.x *= -1, DD
    }

    function sc(DD) {
      if (DD.x * DD.x + DD.y * DD.y > .5) {
        const CD = Math.abs(DD.x),
          cD = Math.abs(DD.y);
        if (CD > cD) {
          const cD = Math.sign(DD.x);
          DD.x = CD, DD.y *= -cD, DD.z *= -cD, DD.w *= cD
        } else {
          const CD = Math.sign(DD.y);
          DD.x *= -CD, DD.y = cD, DD.z *= CD, DD.w *= -CD
        }
      } else {
        const CD = Math.abs(DD.z),
          cD = Math.abs(DD.w);
        if (CD > cD) {
          const cD = Math.sign(DD.z);
          DD.x *= -cD, DD.y *= cD, DD.z = CD, DD.w *= -cD
        } else {
          const CD = Math.sign(DD.w);
          DD.x *= CD, DD.y *= -CD, DD.z *= -CD, DD.w = cD
        }
      }
      return DD
    }

    function Ec(DD) {
      DD.K4(-DD.z, DD.w, DD.x, -DD.y)
    }

    function ec(DD, CD) {
      const cD = ID.cZ.FromArrayToRef(CD.translation || [0, 0, 0], 0, ID.TmpVectors.cZ[0]),
        pD = ID.Quaternion.FromArrayToRef(CD.rotation || [0, 0, 0, 1], 0, ID.TmpVectors.Quaternion[0]),
        iD = ID.Matrix.ComposeToRef(Tc, pD, cD, ID.TmpVectors.Matrix[0]),
        fD = ID.cZ.FromArrayToRef(DD.translation || [0, 0, 0], 0, ID.TmpVectors.cZ[2]),
        bD = ID.Quaternion.FromArrayToRef(DD.rotation || [0, 0, 0, 1], 0, ID.TmpVectors.Quaternion[1]),
        QD = ID.Matrix.ComposeToRef(Tc, bD, fD, ID.TmpVectors.Matrix[1]);
      iD.multiplyToRef(QD, QD), QD.decompose(void 0, pD, cD), cD.equalsWithEpsilon(lc, Vc.c) ? delete CD.translation : CD.translation = cD.XcD(), pD.equalsWithEpsilon(Lc, Vc.c) ? delete CD.rotation : CD.rotation = pD.XcD(), CD.scale && delete CD.scale
    }

    function uc(DD, CD) {
      if (!(CD instanceof BD.e)) return !1;
      if (!(1 === CD.getChildren().length && 0 === DD.getChildren().length && DD.parent === CD)) return !1;
      const cD = DD.hq(),
        ID = DD instanceof ac.e && !cD.useRightHandedSystem ? Gc : Tc;
      return !!CD.ci.equalsWithEpsilon(ID, Vc.c) || (xD.e.Warn(`Cannot collapse node ${DD.name} into parent node ${CD.name} with modified scaling.`), !1)
    }

    function hc(DD) {
      if (DD instanceof Array) {
        const CD = new Float32Array(DD);
        return new Uint8Array(CD.buffer, CD.byteOffset, CD.byteLength)
      }
      return ArrayBuffer.isView(DD) ? new Uint8Array(DD.buffer, DD.byteOffset, DD.byteLength) : new Uint8Array(DD)
    }

    function rc(DD, CD) {
      for (const [cD, ID] of Object.entries(DD)) {
        const pD = CD[cD];
        (Array.isArray(ID) && Array.isArray(pD) && Ac(ID, pD) || ID === pD) && delete DD[cD]
      }
      return DD
    }

    function Ac(DD, CD) {
      return DD.length === CD.length && DD.every(((DD, cD) => DD === CD[cD]))
    }
    const Fc = new Map([
      [Int8Array, (DD, CD, cD) => DD.setInt8(CD, cD)],
      [Uint8Array, (DD, CD, cD) => DD.setUint8(CD, cD)],
      [Uint8ClampedArray, (DD, CD, cD) => DD.setUint8(CD, cD)],
      [Int16Array, (DD, CD, cD) => DD.setInt16(CD, cD, !0)],
      [Uint16Array, (DD, CD, cD) => DD.setUint16(CD, cD, !0)],
      [Int32Array, (DD, CD, cD) => DD.setInt32(CD, cD, !0)],
      [Uint32Array, (DD, CD, cD) => DD.setUint32(CD, cD, !0)],
      [Float32Array, (DD, CD, cD) => DD.setFloat32(CD, cD, !0)],
      [Float64Array, (DD, CD, cD) => DD.setFloat64(CD, cD, !0)]
    ]);
    class DI {
      writeTypedArray(DD) {
        this._checkGrowBuffer(DD.byteLength);
        const CD = Fc.get(DD.constructor);
        for (let cD = 0; cD < DD.length; cD++) CD(this._dataView, this._byteOffset, DD[cD]), this._byteOffset += DD.BYTES_PER_ELEMENT
      }
      constructor(DD) {
        this._data = new Uint8Array(DD), this._dataView = new DataView(this._data.buffer), this._byteOffset = 0
      }
      get byteOffset() {
        return this._byteOffset
      }
      getOutputData() {
        return new Uint8Array(this._data.buffer, 0, this._byteOffset)
      }
      writeUInt8(DD) {
        this._checkGrowBuffer(1), this._dataView.setUint8(this._byteOffset, DD), this._byteOffset++
      }
      writeInt8(DD) {
        this._checkGrowBuffer(1), this._dataView.setInt8(this._byteOffset, DD), this._byteOffset++
      }
      writeInt16(DD) {
        this._checkGrowBuffer(2), this._dataView.setInt16(this._byteOffset, DD, !0), this._byteOffset += 2
      }
      writeUInt16(DD) {
        this._checkGrowBuffer(2), this._dataView.setUint16(this._byteOffset, DD, !0), this._byteOffset += 2
      }
      writeInt32(DD) {
        this._checkGrowBuffer(4), this._dataView.setInt32(this._byteOffset, DD, !0), this._byteOffset += 4
      }
      writeUInt32(DD) {
        this._checkGrowBuffer(4), this._dataView.setUint32(this._byteOffset, DD, !0), this._byteOffset += 4
      }
      writeFloat32(DD) {
        this._checkGrowBuffer(4), this._dataView.setFloat32(this._byteOffset, DD, !0), this._byteOffset += 4
      }
      writeFloat64(DD) {
        this._checkGrowBuffer(8), this._dataView.setFloat64(this._byteOffset, DD, !0), this._byteOffset += 8
      }
      _checkGrowBuffer(DD) {
        const CD = this.byteOffset + DD;
        if (CD > this._data.byteLength) {
          const DD = new Uint8Array(2 * CD);
          DD.set(this._data), this._data = DD, this._dataView = new DataView(this._data.buffer)
        }
      }
    }

    function CI(DD) {
      return DD % 4 === 0 ? 4 : DD % 2 === 0 ? 2 : 1
    }
    class cI {
      constructor() {
        this._bufferViewToData = new Map, this._bufferViewToProperties = new Map, this._accessorToBufferView = new Map
      }
      generateBinary(DD) {
        let CD = 0;
        this._bufferViewToData.forEach((DD => {
          CD += DD.byteLength
        }));
        const cD = new DI(CD),
          ID = Array.from(this._bufferViewToData.keys()).sort(((DD, CD) => CI(CD.byteLength) - CI(DD.byteLength)));
        for (const pD of ID) {
          pD.byteOffset = cD.byteOffset, DD.push(pD);
          const CD = DD.length - 1,
            ID = this.getPropertiesWithBufferView(pD);
          for (const DD of ID) DD.bufferView = CD;
          cD.writeTypedArray(this._bufferViewToData.get(pD)), this._bufferViewToData.delete(pD)
        }
        return cD.getOutputData()
      }
      createBufferView(DD, CD) {
        const cD = {
          buffer: 0,
          byteOffset: void 0,
          byteLength: DD.byteLength,
          byteStride: CD
        };
        return this._bufferViewToData.set(cD, DD), cD
      }
      createAccessor(DD, CD, cD, ID, pD, iD, fD) {
        this._verifyBufferView(DD);
        const bD = {
          bufferView: void 0,
          componentType: cD,
          count: ID,
          type: CD,
          min: iD?.min,
          max: iD?.max,
          normalized: fD,
          byteOffset: pD
        };
        return this.setBufferView(bD, DD), this._accessorToBufferView.set(bD, DD), bD
      }
      setBufferView(DD, CD) {
        this._verifyBufferView(CD);
        this.getPropertiesWithBufferView(CD).push(DD)
      }
      removeBufferView(DD) {
        const CD = this.getPropertiesWithBufferView(DD);
        for (const cD of CD) void 0 !== cD.bufferView && delete cD.bufferView;
        this._bufferViewToData.delete(DD), this._bufferViewToProperties.delete(DD), this._accessorToBufferView.forEach(((CD, cD) => {
          CD === DD && (void 0 !== cD.byteOffset && delete cD.byteOffset, this._accessorToBufferView.delete(cD))
        }))
      }
      getBufferView(DD) {
        const CD = this._accessorToBufferView.get(DD);
        return this._verifyBufferView(CD), CD
      }
      getPropertiesWithBufferView(DD) {
        return this._verifyBufferView(DD), this._bufferViewToProperties.set(DD, this._bufferViewToProperties.get(DD) ?? []), this._bufferViewToProperties.get(DD)
      }
      getData(DD) {
        return this._verifyBufferView(DD), this._bufferViewToData.get(DD)
      }
      _verifyBufferView(DD) {
        if (void 0 === DD || !this._bufferViewToData.has(DD)) throw new Error(`BufferView ${DD} not found in BufferManager.`)
      }
    }
    var II = cD(39351);
    (0, II.d)();
    var pI = cD(39572);
    (0, pI.g)();
    var iI = cD(39396),
      fI = cD(40171);
    (0, fI.f)();
    let bI = (() => {
      var DD;
      let CD, cD, ID = [],
        pD = [],
        iD = [],
        fD = [];
      return DD = class {
        get influence() {
          return this._influence
        }
        set influence(DD) {
          if (this._influence === DD) return;
          const CD = this._influence;
          this._influence = DD, this.onInfluenceChanged.hasObservers() && this.onInfluenceChanged.notifyObservers(0 === CD || 0 === DD)
        }
        get animationPropertiesOverride() {
          return !this._animationPropertiesOverride && this._scene ? this._scene.animationPropertiesOverride : this._animationPropertiesOverride
        }
        set animationPropertiesOverride(DD) {
          this._animationPropertiesOverride = DD
        }
        constructor(DD) {
          let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            bD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = DD, this.animations = [], this._positions = null, this._normals = null, this._tangents = null, this._uvs = null, this._uv2s = null, this._colors = null, this._uniqueId = 0, this.onInfluenceChanged = new Dc.c, this._onDataLayoutChanged = new Dc.c, this.id = (0, HD.m)(this, ID, void 0), this.morphTargetManager = ((0, HD.m)(this, pD), (0, HD.m)(this, iD, null)), this._animationPropertiesOverride = ((0, HD.m)(this, fD), null), this.id = DD, this.morphTargetManager = bD, this._scene = cD || ZD.b.LastCreatedScene, this.influence = CD, this._scene && (this._uniqueId = this._scene.getUniqueId())
        }
        get uniqueId() {
          return this._uniqueId
        }
        get hasPositions() {
          return !!this._positions
        }
        get hasNormals() {
          return !!this._normals
        }
        get hasTangents() {
          return !!this._tangents
        }
        get hasUVs() {
          return !!this._uvs
        }
        get hasUV2s() {
          return !!this._uv2s
        }
        get hasColors() {
          return !!this._colors
        }
        get vertexCount() {
          return this._positions ? this._positions.length / 3 : this._normals ? this._normals.length / 3 : this._tangents ? this._tangents.length / 3 : this._uvs ? this._uvs.length / 2 : this._uv2s ? this._uv2s.length / 2 : this._colors ? this._colors.length / 4 : 0
        }
        QfD(DD) {
          const CD = this.hasPositions;
          this._positions = DD, CD !== this.hasPositions && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getPositions() {
          return this._positions
        }
        setNormals(DD) {
          const CD = this.hasNormals;
          this._normals = DD, CD !== this.hasNormals && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getNormals() {
          return this._normals
        }
        setTangents(DD) {
          const CD = this.hasTangents;
          this._tangents = DD, CD !== this.hasTangents && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getTangents() {
          return this._tangents
        }
        setUVs(DD) {
          const CD = this.hasUVs;
          this._uvs = DD, CD !== this.hasUVs && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUVs() {
          return this._uvs
        }
        setUV2s(DD) {
          const CD = this.hasUV2s;
          this._uv2s = DD, CD !== this.hasUV2s && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUV2s() {
          return this._uv2s
        }
        setColors(DD) {
          const CD = this.hasColors;
          this._colors = DD, CD !== this.hasColors && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getColors() {
          return this._colors
        }
        clone() {
          const CD = OC.d.Clone((() => new DD(this.name, this.influence, this._scene, this.morphTargetManager)), this);
          return CD._positions = this._positions, CD._normals = this._normals, CD._tangents = this._tangents, CD._uvs = this._uvs, CD._uv2s = this._uv2s, CD._colors = this._colors, CD
        }
        serialize() {
          const DD = {};
          return DD.name = this.name, DD.influence = this.influence, null != this.id && (DD.id = this.id), DD.uniqueId = this.uniqueId, DD.positions = Array.prototype.slice.call(this.getPositions()), this.hasNormals && (DD.normals = Array.prototype.slice.call(this.getNormals())), this.hasTangents && (DD.tangents = Array.prototype.slice.call(this.getTangents())), this.hasUVs && (DD.uvs = Array.prototype.slice.call(this.getUVs())), this.hasUV2s && (DD.uv2s = Array.prototype.slice.call(this.getUV2s())), this.hasColors && (DD.colors = Array.prototype.slice.call(this.getColors())), OC.d.AppendSerializedAnimations(this, DD), DD
        }
        getClassName() {
          return "MorphTarget"
        }
        static Parse(CD, cD) {
          let ID = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          const pD = new DD(CD.name, CD.influence, cD, ID);
          if (pD.QfD(CD.positions), null != CD.id && (pD.id = CD.id), CD.normals && pD.setNormals(CD.normals), CD.tangents && pD.setTangents(CD.tangents), CD.uvs && pD.setUVs(CD.uvs), CD.uv2s && pD.setUV2s(CD.uv2s), CD.colors && pD.setColors(CD.colors), CD.animations) {
            for (let DD = 0; DD < CD.animations.length; DD++) {
              const cD = CD.animations[DD],
                ID = (0, kC.b)("BABYLON.Animation");
              ID && pD.animations.push(ID.Parse(cD))
            }
            CD.autoAnimate && cD && cD.beginAnimation(pD, CD.autoAnimateFrom, CD.autoAnimateTo, CD.autoAnimateLoop, CD.autoAnimateSpeed || 1)
          }
          return pD
        }
        static FromMesh(CD, cD, ID) {
          cD || (cD = CD.name);
          const pD = new DD(cD, ID, CD.hq(), CD.morphTargetManager);
          return pD.QfD(CD.getVerticesData(GD.k.PositionKind)), CD.isVerticesDataPresent(GD.k.NormalKind) && pD.setNormals(CD.getVerticesData(GD.k.NormalKind)), CD.isVerticesDataPresent(GD.k.TangentKind) && pD.setTangents(CD.getVerticesData(GD.k.TangentKind)), CD.isVerticesDataPresent(GD.k.UVKind) && pD.setUVs(CD.getVerticesData(GD.k.UVKind)), CD.isVerticesDataPresent(GD.k.UV2Kind) && pD.setUV2s(CD.getVerticesData(GD.k.UV2Kind)), CD.isVerticesDataPresent(GD.k.ColorKind) && pD.setColors(CD.getVerticesData(GD.k.ColorKind)), pD
        }
      }, (() => {
        const bD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        CD = [(0, UD.G)()], cD = [(0, UD.G)()], (0, HD.k)(null, null, CD, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: DD => "id" in DD,
            get: DD => DD.id,
            set: (DD, CD) => {
              DD.id = CD
            }
          },
          metadata: bD
        }, ID, pD), (0, HD.k)(null, null, cD, {
          kind: "field",
          name: "morphTargetManager",
          static: !1,
          private: !1,
          access: {
            has: DD => "morphTargetManager" in DD,
            get: DD => DD.morphTargetManager,
            set: (DD, CD) => {
              DD.morphTargetManager = CD
            }
          },
          metadata: bD
        }, iD, fD), bD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: bD
        })
      })(), DD
    })();
    var QI, wI = cD(40215),
      SI = cD(39392);
    ! function(DD) {
      DD[DD.INTANGENT = 0] = "INTANGENT", DD[DD.OUTTANGENT = 1] = "OUTTANGENT"
    }(QI || (QI = {}));
    class BI {
      static _IsTransformable(DD) {
        return DD && (DD instanceof BD.e || DD instanceof II.c || DD instanceof SI.b)
      }
      static _CreateNodeAnimation(DD, CD, cD, ID, iD) {
        if (this._IsTransformable(DD)) {
          const fD = [],
            bD = [],
            QD = CD.getKeys(),
            wD = BI._CalculateMinMaxKeyFrames(QD),
            SD = BI._DeduceInterpolation(QD, cD, ID),
            BD = SD.interpolationType,
            yD = SD.shouldBakeAnimation;
          if (yD ? BI._CreateBakedAnimation(DD, CD, cD, wD.min, wD.max, CD.framePerSecond, iD, fD, bD, wD, ID) : "LINEAR" === BD || "STEP" === BD ? BI._CreateLinearOrStepAnimation(DD, CD, cD, fD, bD, ID) : "CUBICSPLINE" === BD ? BI._CreateCubicSplineAnimation(DD, CD, cD, fD, bD, ID) : BI._CreateBakedAnimation(DD, CD, cD, wD.min, wD.max, CD.framePerSecond, iD, fD, bD, wD, ID), fD.length && bD.length) {
            return {
              inputs: fD,
              outputs: bD,
              samplerInterpolation: BD,
              inputsMin: yD ? wD.min : pD.Tools.FloatRound(wD.min / CD.framePerSecond),
              inputsMax: yD ? wD.max : pD.Tools.FloatRound(wD.max / CD.framePerSecond)
            }
          }
        }
        return null
      }
      static _DeduceAnimationInfo(DD) {
        let CD = null,
          cD = "VEC3",
          ID = !1;
        const iD = DD.targetProperty.split(".");
        switch (iD[0]) {
          case "ci":
            CD = "scale";
            break;
          case "position":
            CD = "translation";
            break;
          case "rotation":
            cD = "VEC4", CD = "rotation";
            break;
          case "rotationQuaternion":
            cD = "VEC4", ID = !0, CD = "rotation";
            break;
          case "influence":
            cD = "SCALAR", CD = "weights";
            break;
          default:
            pD.Tools.Error(`Unsupported animatable property ${iD[0]}`)
        }
        return CD ? {
          animationChannelTargetPath: CD,
          dataAccessorType: cD,
          useQuaternion: ID
        } : (pD.Tools.Error("animation channel target path and data accessor type could be deduced"), null)
      }
      static _CreateNodeAnimationFromNodeAnimations(DD, CD, cD, ID, pD, iD, fD, bD, QD, wD, SD) {
        let BD;
        if (BI._IsTransformable(DD) && DD.animations)
          for (const yD of DD.animations) {
            if (SD && !SD(yD)) continue;
            const pD = BI._DeduceAnimationInfo(yD);
            pD && (BD = {
              name: yD.name,
              samplers: [],
              channels: []
            }, BI._AddAnimation(`${yD.name}`, yD.hasRunningRuntimeAnimations ? CD : BD, DD, yD, pD.dataAccessorType, pD.animationChannelTargetPath, ID, iD, fD, bD, pD.useQuaternion, QD, wD), BD.samplers.length && BD.channels.length && cD.push(BD))
          }
      }
      static _CreateMorphTargetAnimationFromMorphTargetAnimations(DD, CD, cD, ID, pD, iD, fD, bD, QD, wD, SD) {
        let BD;
        if (DD instanceof wI.d) {
          const pD = DD.morphTargetManager;
          if (pD)
            for (let yD = 0; yD < pD.numTargets; ++yD) {
              const MD = pD.getTarget(yD);
              for (const tD of MD.animations) {
                if (SD && !SD(tD)) continue;
                const MD = new fI.d(`${tD.name}`, "influence", tD.framePerSecond, tD.dataType, tD.ni, tD.enableBlending),
                  ZD = [],
                  oD = tD.getKeys();
                for (let DD = 0; DD < oD.length; ++DD) {
                  const CD = oD[DD];
                  for (let DD = 0; DD < pD.numTargets; ++DD) DD == yD ? ZD.push(CD) : ZD.push({
                    frame: CD.frame,
                    value: 0
                  })
                }
                MD.setKeys(ZD, !0);
                const vD = BI._DeduceAnimationInfo(MD);
                vD && (BD = {
                  name: MD.name,
                  samplers: [],
                  channels: []
                }, BI._AddAnimation(tD.name, tD.hasRunningRuntimeAnimations ? CD : BD, DD, MD, vD.dataAccessorType, vD.animationChannelTargetPath, ID, iD, fD, bD, vD.useQuaternion, QD, wD, pD.numTargets), BD.samplers.length && BD.channels.length && cD.push(BD))
              }
            }
        }
      }
      static _CreateNodeAndMorphAnimationFromAnimationGroups(DD, CD, cD, ID, pD, iD, fD, bD, QD, wD) {
        let SD;
        if (DD.animationGroups) {
          const BD = DD.animationGroups;
          for (const yD of BD) {
            const BD = new Map,
              MD = new Map,
              tD = new Set,
              ZD = yD.to - yD.from;
            SD = {
              name: yD.name,
              channels: [],
              samplers: []
            };
            for (let CD = 0; CD < yD.targetedAnimations.length; ++CD) {
              const wD = yD.targetedAnimations[CD],
                ZD = wD.target,
                oD = wD.animation;
              if (QD && !QD(oD)) continue;
              const vD = bD.has(ZD);
              if (this._IsTransformable(ZD) || 1 === ZD.length && this._IsTransformable(ZD[0])) {
                const DD = BI._DeduceAnimationInfo(wD.animation);
                if (DD) {
                  const CD = this._IsTransformable(ZD) ? ZD : this._IsTransformable(ZD[0]) ? ZD[0] : null;
                  CD && BI._AddAnimation(`${oD.name}`, SD, CD, oD, DD.dataAccessorType, DD.animationChannelTargetPath, cD, ID, pD, iD, DD.useQuaternion, fD, vD)
                }
              } else if (ZD instanceof bI || 1 === ZD.length && ZD[0] instanceof bI) {
                if (BI._DeduceAnimationInfo(wD.animation)) {
                  const CD = ZD instanceof bI ? ZD : ZD[0];
                  if (CD) {
                    const cD = DD.morphTargetManagers.find((DD => {
                      for (let cD = 0; cD < DD.numTargets; ++cD)
                        if (DD.getTarget(cD) === CD) return !0;
                      return !1
                    }));
                    if (cD) {
                      const ID = DD.meshes.find((DD => DD.morphTargetManager === cD));
                      ID && (BD.has(ID) || BD.set(ID, new Map), BD.get(ID)?.set(CD, oD), tD.add(ID), MD.set(ID, oD))
                    }
                  }
                }
              }
            }
            tD.forEach((DD => {
              const CD = DD.morphTargetManager;
              let bD = null;
              const QD = [],
                wD = MD.get(DD).getKeys(),
                tD = wD.length;
              for (let cD = 0; cD < tD; ++cD)
                for (let ID = 0; ID < CD.numTargets; ++ID) {
                  const pD = CD.getTarget(ID),
                    iD = BD.get(DD);
                  if (iD) {
                    const CD = iD.get(pD);
                    CD ? (bD || (bD = new fI.d(`${yD.name}_${DD.name}_MorphWeightAnimation`, "influence", CD.framePerSecond, fI.d.ANIMATIONTYPE_FLOAT, CD.ni, CD.enableBlending)), QD.push(CD.getKeys()[cD])) : QD.push({
                      frame: yD.from + ZD / tD * cD,
                      value: pD.influence,
                      inTangent: wD[0].inTangent ? 0 : void 0,
                      outTangent: wD[0].outTangent ? 0 : void 0
                    })
                  }
                }
              bD.setKeys(QD, !0);
              const oD = BI._DeduceAnimationInfo(bD);
              oD && BI._AddAnimation(`${yD.name}_${DD.name}_MorphWeightAnimation`, SD, DD, bD, oD.dataAccessorType, oD.animationChannelTargetPath, cD, ID, pD, iD, oD.useQuaternion, fD, !1, CD?.numTargets)
            })), SD.channels.length && SD.samplers.length && (wD?.set(yD, CD.length), CD.push(SD))
          }
        }
      }
      static _AddAnimation(DD, CD, cD, pD, iD, fD, bD, QD, wD, SD, BD, yD, MD, tD) {
        const ZD = BI._CreateNodeAnimation(cD, pD, fD, BD, yD);
        let oD, vD, ND, gD, XD, mD;
        if (ZD) {
          if (tD) {
            let DD, CD = 0;
            const cD = [];
            for (; ZD.inputs.length > 0;) DD = ZD.inputs.shift(), CD % tD == 0 && cD.push(DD), CD++;
            ZD.inputs = cD
          }
          const DD = bD.get(cD),
            pD = new Float32Array(ZD.inputs);
          oD = QD.createBufferView(pD), vD = QD.createAccessor(oD, "SCALAR", 5126, ZD.inputs.length, void 0, {
            min: [ZD.inputsMin],
            max: [ZD.inputsMax]
          }), SD.push(vD), ND = SD.length - 1;
          const wD = new ID.Quaternion,
            BD = new ID.cZ,
            yD = new ID.cZ,
            nD = cD instanceof II.c,
            OD = kc(iD),
            PD = new Float32Array(ZD.outputs.length * OD);
          ZD.outputs.forEach((function(DD, CD) {
            let cD = DD;
            switch (fD) {
              case "translation":
                MD && (ID.cZ.FromArrayToRef(DD, 0, yD), Wc(yD), yD.toArray(cD));
                break;
              case "rotation":
                4 === DD.length ? ID.Quaternion.FromArrayToRef(DD, 0, wD) : (cD = new Array(4), ID.cZ.FromArrayToRef(DD, 0, BD), ID.Quaternion.FromEulerVectorToRef(BD, wD)), MD && (sc(wD), nD && Ec(wD)), wD.toArray(cD)
            }
            PD.set(cD, CD * OD)
          })), oD = QD.createBufferView(PD), vD = QD.createAccessor(oD, iD, 5126, ZD.outputs.length), SD.push(vD), gD = SD.length - 1, XD = {
            interpolation: ZD.samplerInterpolation,
            input: ND,
            output: gD
          }, CD.samplers.push(XD), mD = {
            sampler: CD.samplers.length - 1,
            target: {
              node: DD,
              path: fD
            }
          }, CD.channels.push(mD)
        }
      }
      static _CreateBakedAnimation(DD, CD, cD, iD, fD, bD, QD, wD, SD, BD, yD) {
        let MD;
        const tD = ID.Quaternion.Identity();
        let ZD, oD, vD, ND, gD, XD = null,
          mD = null;
        BD.min = pD.Tools.FloatRound(iD / bD);
        const nD = CD.getKeys();
        for (let ID = 0, OD = nD.length; ID < OD; ++ID) {
          if (oD = nD[ID], ID + 1 < OD)
            if (vD = nD[ID + 1], oD.value.equals && oD.value.equals(vD.value) || oD.value === vD.value) {
              if (0 !== ID) continue;
              gD = oD.frame
            } else gD = vD.frame;
          else {
            if (ND = nD[ID - 1], oD.value.equals && oD.value.equals(ND.value) || oD.value === ND.value) continue;
            gD = fD
          }
          if (gD)
            for (let ID = oD.frame; ID <= gD; ID += QD) {
              if (ZD = pD.Tools.FloatRound(ID / bD), ZD === XD) continue;
              XD = ZD, mD = ZD;
              const iD = {
                key: 0,
                repeatCount: 0,
                ni: CD.ni
              };
              MD = CD._interpolate(ID, iD), BI._SetInterpolatedValue(DD, MD, ZD, CD, cD, tD, wD, SD, yD)
            }
        }
        mD && (BD.max = mD)
      }
      static _ConvertFactorToVector3OrQuaternion(DD, CD, cD, iD, fD) {
        const bD = BI._GetBasePositionRotationOrScale(CD, iD, fD),
          QD = cD.targetProperty.split("."),
          wD = QD ? QD[1] : "",
          SD = fD ? ID.Quaternion.FromArray(bD).normalize() : ID.cZ.FromArray(bD);
        switch (wD) {
          case "x":
          case "y":
          case "z":
            SD[wD] = DD;
            break;
          case "w":
            SD.w = DD;
            break;
          default:
            pD.Tools.Error(`glTFAnimation: Unsupported component name "${wD}"!`)
        }
        return SD
      }
      static _SetInterpolatedValue(DD, CD, cD, pD, iD, fD, bD, QD, wD) {
        let SD;
        bD.push(cD), "weights" !== iD ? (pD.dataType === fI.d.ANIMATIONTYPE_FLOAT && (CD = this._ConvertFactorToVector3OrQuaternion(CD, DD, pD, iD, wD)), "rotation" === iD ? (wD ? fD = CD : (SD = CD, ID.Quaternion.RotationYawPitchRollToRef(SD.y, SD.x, SD.z, fD)), QD.push(fD.XcD())) : (SD = CD, QD.push(SD.XcD()))) : QD.push([CD])
      }
      static _CreateLinearOrStepAnimation(DD, CD, cD, ID, pD, iD) {
        for (const fD of CD.getKeys()) ID.push(fD.frame / CD.framePerSecond), BI._AddKeyframeValue(fD, CD, pD, cD, DD, iD)
      }
      static _CreateCubicSplineAnimation(DD, CD, cD, ID, pD, iD) {
        CD.getKeys().forEach((function(fD) {
          ID.push(fD.frame / CD.framePerSecond), BI._AddSplineTangent(QI.INTANGENT, pD, cD, "CUBICSPLINE", fD, iD), BI._AddKeyframeValue(fD, CD, pD, cD, DD, iD), BI._AddSplineTangent(QI.OUTTANGENT, pD, cD, "CUBICSPLINE", fD, iD)
        }))
      }
      static _GetBasePositionRotationOrScale(DD, CD, cD) {
        let pD;
        if ("rotation" === CD)
          if (cD) {
            pD = (DD.rotationQuaternion ?? ID.Quaternion.Identity()).XcD()
          } else {
            pD = (DD.rotation ?? ID.cZ.Zero()).XcD()
          }
        else if ("translation" === CD) {
          pD = (DD.position ?? ID.cZ.Zero()).XcD()
        } else {
          pD = (DD.ci ?? ID.cZ.One()).XcD()
        }
        return pD
      }
      static _AddKeyframeValue(DD, CD, cD, iD, fD, bD) {
        let QD;
        const wD = CD.dataType;
        if (wD === fI.d.ANIMATIONTYPE_VECTOR3) {
          let CD = DD.value.XcD();
          if ("rotation" === iD) {
            const DD = ID.cZ.FromArray(CD);
            CD = ID.Quaternion.RotationYawPitchRoll(DD.y, DD.x, DD.z).XcD()
          }
          cD.push(CD)
        } else if (wD === fI.d.ANIMATIONTYPE_FLOAT) {
          if ("weights" === iD) cD.push([DD.value]);
          else if (QD = this._ConvertFactorToVector3OrQuaternion(DD.value, fD, CD, iD, bD), QD) {
            if ("rotation" === iD) {
              const DD = bD ? QD : ID.Quaternion.RotationYawPitchRoll(QD.y, QD.x, QD.z).normalize();
              cD.push(DD.XcD())
            }
            cD.push(QD.XcD())
          }
        } else wD === fI.d.ANIMATIONTYPE_QUATERNION ? cD.push(DD.value.normalize().XcD()) : pD.Tools.Error("glTFAnimation: Unsupported key frame values for animation!")
      }
      static _DeduceInterpolation(DD, CD, cD) {
        let ID, pD, iD = !1;
        if ("rotation" === CD && !cD) return {
          interpolationType: "LINEAR",
          shouldBakeAnimation: !0
        };
        for (let fD = 0, bD = DD.length; fD < bD; ++fD)
          if (pD = DD[fD], pD.inTangent || pD.outTangent)
            if (ID) {
              if ("CUBICSPLINE" !== ID) {
                ID = "LINEAR", iD = !0;
                break
              }
            } else ID = "CUBICSPLINE";
        else if (ID) {
          if ("CUBICSPLINE" === ID || pD.interpolation && 1 === pD.interpolation && "STEP" !== ID) {
            ID = "LINEAR", iD = !0;
            break
          }
        } else ID = pD.interpolation && 1 === pD.interpolation ? "STEP" : "LINEAR";
        return ID || (ID = "LINEAR"), {
          interpolationType: ID,
          shouldBakeAnimation: iD
        }
      }
      static _AddSplineTangent(DD, CD, cD, pD, iD, fD) {
        let bD;
        const QD = DD === QI.INTANGENT ? iD.inTangent : iD.outTangent;
        if ("CUBICSPLINE" === pD) {
          if ("rotation" === cD)
            if (QD)
              if (fD) bD = QD.XcD();
              else {
                const DD = QD;
                bD = ID.Quaternion.RotationYawPitchRoll(DD.y, DD.x, DD.z).XcD()
              }
          else bD = [0, 0, 0, 0];
          else bD = "weights" === cD ? QD ? [QD] : [0] : QD ? QD.XcD() : [0, 0, 0];
          CD.push(bD)
        }
      }
      static _CalculateMinMaxKeyFrames(DD) {
        let CD = 1 / 0,
          cD = -1 / 0;
        return DD.forEach((function(DD) {
          CD = Math.min(CD, DD.frame), cD = Math.max(cD, DD.frame)
        })), {
          min: CD,
          max: cD
        }
      }
    }

    function yI(DD, CD, cD, iD, fD, bD) {
      const QD = {
          attributes: {},
          influence: DD.influence,
          name: DD.name
        },
        wD = CD.geometry;
      if (!wD) return pD.Tools.Warn("Attempted to export morph target data from a mesh without geometry. This should not happen."), QD;
      const BD = bD ? -1 : 1,
        yD = ID.cZ.Zero();
      let MD, tD;
      if (DD.hasPositions) {
        const iD = DD.getPositions(),
          bD = wD.getVerticesData(SD.e.PositionKind);
        if (bD) {
          const DD = new Float32Array(bD.length),
            CD = [1 / 0, 1 / 0, 1 / 0],
            pD = [-1 / 0, -1 / 0, -1 / 0];
          tD = bD.length / 3, MD = 0;
          for (let cD = MD; cD < tD; ++cD) {
            const fD = ID.cZ.FromArray(bD, 3 * cD);
            ID.cZ.FromArray(iD, 3 * cD).subtractToRef(fD, yD), yD.x *= BD, CD[0] = Math.min(CD[0], yD.x), pD[0] = Math.max(pD[0], yD.x), CD[1] = Math.min(CD[1], yD.y), pD[1] = Math.max(pD[1], yD.y), CD[2] = Math.min(CD[2], yD.z), pD[2] = Math.max(pD[2], yD.z), DD[3 * cD] = yD.x, DD[3 * cD + 1] = yD.y, DD[3 * cD + 2] = yD.z
          }
          const wD = cD.createBufferView(DD, 12),
            SD = cD.createAccessor(wD, "VEC3", 5126, iD.length / 3, 0, {
              min: CD,
              max: pD
            });
          fD.push(SD), QD.attributes.POSITION = fD.length - 1
        } else pD.Tools.Warn(`Morph target positions for mesh ${CD.name} were not exported. Mesh does not have position vertex data`)
      }
      if (DD.hasNormals) {
        const iD = DD.getNormals(),
          bD = wD.getVerticesData(SD.e.NormalKind);
        if (bD) {
          const DD = new Float32Array(bD.length);
          tD = bD.length / 3, MD = 0;
          for (let cD = MD; cD < tD; ++cD) {
            const CD = ID.cZ.FromArray(bD, 3 * cD).normalize();
            ID.cZ.FromArray(iD, 3 * cD).normalize().subtractToRef(CD, yD), DD[3 * cD] = yD.x * BD, DD[3 * cD + 1] = yD.y, DD[3 * cD + 2] = yD.z
          }
          const CD = cD.createBufferView(DD, 12),
            pD = cD.createAccessor(CD, "VEC3", 5126, iD.length / 3, 0);
          fD.push(pD), QD.attributes.NORMAL = fD.length - 1
        } else pD.Tools.Warn(`Morph target normals for mesh ${CD.name} were not exported. Mesh does not have normals vertex data`)
      }
      if (DD.hasTangents) {
        const iD = DD.getTangents(),
          bD = wD.getVerticesData(SD.e.TangentKind);
        if (bD) {
          tD = bD.length / 4;
          const DD = new Float32Array(3 * tD);
          MD = 0;
          for (let cD = MD; cD < tD; ++cD) {
            const CD = ID.cZ.FromArray(bD, 4 * cD);
            Yc(CD);
            const pD = ID.cZ.FromArray(iD, 3 * cD);
            Yc(pD), pD.subtractToRef(CD, yD), DD[3 * cD] = yD.x * BD, DD[3 * cD + 1] = yD.y, DD[3 * cD + 2] = yD.z
          }
          const CD = cD.createBufferView(DD, 12),
            pD = cD.createAccessor(CD, "VEC3", 5126, tD, 0);
          fD.push(pD), QD.attributes.TANGENT = fD.length - 1
        } else pD.Tools.Warn(`Morph target tangents for mesh ${CD.name} were not exported. Mesh does not have tangents vertex data`)
      }
      if (DD.hasColors) {
        const iD = DD.getColors(),
          bD = wD.getVerticesData(SD.e.ColorKind),
          BD = wD.getVertexBuffer(SD.e.ColorKind);
        if (bD && BD) {
          const DD = BD.getSize();
          tD = bD.length / DD;
          const CD = new Float32Array(tD * DD);
          MD = 0;
          for (let cD = MD; cD < tD; ++cD)
            if (3 === DD) {
              const pD = ID.cZ.FromArray(bD, cD * DD);
              ID.cZ.FromArray(iD, cD * DD).subtractToRef(pD, yD), CD[3 * cD] = yD.x, CD[3 * cD + 1] = yD.y, CD[3 * cD + 2] = yD.z
            } else if (4 === DD) {
            const pD = new ID.Vector4,
              fD = ID.Vector4.FromArray(bD, cD * DD);
            ID.Vector4.FromArray(iD, cD * DD).subtractToRef(fD, pD), CD[4 * cD] = pD.x, CD[4 * cD + 1] = pD.y, CD[4 * cD + 2] = pD.z, CD[4 * cD + 3] = pD.w
          } else pD.Tools.Warn(`Unsupported number of components for color attribute: ${DD}`);
          const wD = cD.createBufferView(CD, 4 * DD),
            SD = cD.createAccessor(wD, 3 === DD ? "VEC3" : "VEC4", 5126, tD, 0);
          fD.push(SD), QD.attributes.COLOR_0 = fD.length - 1
        } else pD.Tools.Warn(`Morph target colors for mesh ${CD.name} were not exported. Mesh does not have colors vertex data`)
      }
      return QD
    }
    var MI = cD(40641);
    class tI {}
    tI.DEFAULT_COLOR = sD.d.White(), tI.DEFAULT_WIDTH_ATTENUATED = 1, tI.DEFAULT_WIDTH = .1;
    var ZI = cD(40166);
    class oI {
      constructor(DD) {
        this._paths = [], this._tempPaths = [], this._holes = [], this._resolution = DD
      }
      moveTo(DD, CD) {
        this._currentPath = new ZI.e(DD, CD), this._tempPaths.push(this._currentPath)
      }
      lineTo(DD, CD) {
        this._currentPath.addLineTo(DD, CD)
      }
      quadraticCurveTo(DD, CD, cD, ID) {
        this._currentPath.addQuadraticCurveTo(DD, CD, cD, ID, this._resolution)
      }
      bezierCurveTo(DD, CD, cD, ID, pD, iD) {
        this._currentPath.addBezierCurveTo(DD, CD, cD, ID, pD, iD, this._resolution)
      }
      extractHoles() {
        for (const DD of this._tempPaths) DD.area() > 0 ? this._holes.push(DD) : this._paths.push(DD);
        if (!this._paths.length && this._holes.length) {
          const DD = this._holes;
          this._holes = this._paths, this._paths = DD
        }
        this._tempPaths.length = 0
      }
      get paths() {
        return this._paths
      }
      get holes() {
        return this._holes
      }
    }

    function vI(DD, CD, cD, ID, pD, iD) {
      const fD = iD.glyphs[DD] || iD.glyphs["?"];
      if (!fD) return null;
      const bD = new oI(pD);
      if (fD.o) {
        const DD = fD.o.split(" ");
        for (let pD = 0, iD = DD.length; pD < iD;) {
          switch (DD[pD++]) {
            case "m": {
              const iD = parseInt(DD[pD++]) * CD + cD,
                fD = parseInt(DD[pD++]) * CD + ID;
              bD.moveTo(iD, fD);
              break
            }
            case "l": {
              const iD = parseInt(DD[pD++]) * CD + cD,
                fD = parseInt(DD[pD++]) * CD + ID;
              bD.lineTo(iD, fD);
              break
            }
            case "q": {
              const iD = parseInt(DD[pD++]) * CD + cD,
                fD = parseInt(DD[pD++]) * CD + ID,
                QD = parseInt(DD[pD++]) * CD + cD,
                wD = parseInt(DD[pD++]) * CD + ID;
              bD.quadraticCurveTo(QD, wD, iD, fD);
              break
            }
            case "b": {
              const iD = parseInt(DD[pD++]) * CD + cD,
                fD = parseInt(DD[pD++]) * CD + ID,
                QD = parseInt(DD[pD++]) * CD + cD,
                wD = parseInt(DD[pD++]) * CD + ID,
                SD = parseInt(DD[pD++]) * CD + cD,
                BD = parseInt(DD[pD++]) * CD + ID;
              bD.bezierCurveTo(QD, wD, SD, BD, iD, fD);
              break
            }
          }
        }
      }
      return bD.extractHoles(), {
        offsetX: fD.ha * CD,
        shapePath: bD
      }
    }

    function NI(DD, CD, cD, ID) {
      const pD = Array.from(DD),
        iD = CD / ID.resolution,
        fD = (ID.boundingBox.yMax - ID.boundingBox.yMin + ID.underlineThickness) * iD,
        bD = [];
      let QD = 0,
        wD = 0;
      for (let SD = 0; SD < pD.length; SD++) {
        const DD = pD[SD];
        if ("\n" === DD) QD = 0, wD -= fD;
        else {
          const CD = vI(DD, iD, QD, wD, cD, ID);
          CD && (QD += CD.offsetX, bD.push(CD.shapePath))
        }
      }
      return bD
    }
    class gI {
      static ConvertPoints(DD, CD) {
        if (DD.length && Array.isArray(DD) && "number" === typeof DD[0]) return [DD];
        if (DD.length && Array.isArray(DD[0]) && "number" === typeof DD[0][0]) return DD;
        if (DD.length && !Array.isArray(DD[0]) && DD[0] instanceof TD.p) {
          const CD = [];
          for (let cD = 0; cD < DD.length; cD++) {
            const ID = DD[cD];
            CD.push(ID.x, ID.y, ID.z)
          }
          return [CD]
        }
        if (DD.length > 0 && Array.isArray(DD[0]) && DD[0].length > 0 && DD[0][0] instanceof TD.p) {
          const CD = [],
            cD = DD;
          for (const DD of cD) CD.push(DD.flatMap((DD => [DD.x, DD.y, DD.z])));
          return CD
        }
        if (DD instanceof Float32Array) {
          if (CD?.floatArrayStride) {
            const cD = [],
              ID = 3 * CD.floatArrayStride;
            for (let CD = 0; CD < DD.length; CD += ID) {
              const pD = new Array(ID);
              for (let cD = 0; cD < ID; cD++) pD[cD] = DD[CD + cD];
              cD.push(pD)
            }
            return cD
          }
          return [Array.from(DD)]
        }
        if (DD.length && DD[0] instanceof Float32Array) {
          const CD = [];
          for (const cD of DD) CD.push(Array.from(cD));
          return CD
        }
        return []
      }
      static OmitZeroLengthPredicate(DD, CD, cD) {
        const ID = [];
        return CD.subtract(DD).lengthSquared() > 0 && ID.push([DD, CD]), cD.subtract(CD).lengthSquared() > 0 && ID.push([CD, cD]), DD.subtract(cD).lengthSquared() > 0 && ID.push([cD, DD]), 0 === ID.length ? null : ID
      }
      static OmitDuplicatesPredicate(DD, CD, cD, ID) {
        const pD = [];
        return gI._SearchInPoints(DD, CD, ID) || pD.push([DD, CD]), gI._SearchInPoints(CD, cD, ID) || pD.push([CD, cD]), gI._SearchInPoints(cD, DD, ID) || pD.push([cD, DD]), 0 === pD.length ? null : pD
      }
      static _SearchInPoints(DD, CD, cD) {
        for (const ID of cD)
          for (let cD = 0; cD < ID.length; cD++)
            if (ID[cD]?.equals(DD) && (ID[cD + 1]?.equals(CD) || ID[cD - 1]?.equals(CD))) return !0;
        return !1
      }
      static MeshesToLines(DD, CD) {
        const cD = [];
        for (let ID = 0; ID < DD.length; ID++) {
          const pD = DD[ID],
            iD = pD.getVerticesData(GD.k.PositionKind),
            fD = pD.ncD();
          if (iD && fD)
            for (let DD = 0, bD = 0; DD < fD.length; DD++) {
              const QD = 3 * fD[bD++],
                wD = 3 * fD[bD++],
                SD = 3 * fD[bD++],
                BD = new TD.p(iD[QD], iD[QD + 1], iD[QD + 2]),
                yD = new TD.p(iD[wD], iD[wD + 1], iD[wD + 2]),
                MD = new TD.p(iD[SD], iD[SD + 1], iD[SD + 2]);
              if (CD) {
                const bD = CD(BD, yD, MD, cD, DD, QD, pD, ID, iD, fD);
                if (bD)
                  for (const DD of bD) cD.push(DD)
              } else cD.push([BD, yD], [yD, MD], [MD, BD])
            }
        }
        return cD
      }
      static ToVector3Array(DD) {
        if (Array.isArray(DD[0])) {
          const CD = [],
            cD = DD;
          for (const DD of cD) {
            const cD = [];
            for (let CD = 0; CD < DD.length; CD += 3) cD.push(new TD.p(DD[CD], DD[CD + 1], DD[CD + 2]));
            CD.push(cD)
          }
          return CD
        }
        const CD = DD,
          cD = [];
        for (let ID = 0; ID < CD.length; ID += 3) cD.push(new TD.p(CD[ID], CD[ID + 1], CD[ID + 2]));
        return cD
      }
      static ToNumberArray(DD) {
        return DD.flatMap((DD => [DD.x, DD.y, DD.z]))
      }
      static GetPointsCountInfo(DD) {
        const CD = new Array(DD.length);
        let cD = 0;
        for (let ID = DD.length; ID--;) CD[ID] = DD[ID].length / 3, cD += CD[ID];
        return {
          total: cD,
          counts: CD
        }
      }
      static GetLineLength(DD) {
        if (0 === DD.length) return 0;
        let CD;
        CD = "number" === typeof DD[0] ? gI.ToVector3Array(DD) : DD;
        const cD = TD.l.cZ[0];
        let ID = 0;
        for (let pD = 0; pD < CD.length - 1; pD++) {
          const DD = CD[pD];
          ID += CD[pD + 1].subtractToRef(DD, cD).length()
        }
        return ID
      }
      static GetLineLengthArray(DD, CD) {
        const cD = CD ? new Float32Array(CD, 0, DD.length / 3) : new Float32Array(DD.length / 3);
        let ID = 0;
        for (let pD = 0, iD = DD.length / 3 - 1; pD < iD; pD++) {
          let CD = DD[3 * pD + 0],
            iD = DD[3 * pD + 1],
            fD = DD[3 * pD + 2];
          CD -= DD[3 * pD + 3], iD -= DD[3 * pD + 4], fD -= DD[3 * pD + 5];
          ID += Math.sqrt(CD * CD + iD * iD + fD * fD), cD[pD + 1] = ID
        }
        return cD
      }
      static SegmentizeSegmentByCount(DD, CD, cD) {
        const ID = [],
          pD = CD.subtract(DD),
          iD = TD.l.cZ[0];
        iD.YF(cD);
        const fD = TD.l.cZ[1];
        pD.divideToRef(iD, fD);
        let bD = DD.clone();
        ID.push(bD);
        for (let QD = 0; QD < cD; QD++) bD = bD.clone(), ID.push(bD.addInPlace(fD));
        return ID
      }
      static SegmentizeLineBySegmentLength(DD, CD) {
        const cD = DD[0] instanceof TD.p ? gI.GetLineSegments(DD) : "number" === typeof DD[0] ? gI.GetLineSegments(gI.ToVector3Array(DD)) : DD,
          ID = [];
        for (const pD of cD)
          if (pD.length > CD) {
            const DD = gI.SegmentizeSegmentByCount(pD.point1, pD.point2, Math.ceil(pD.length / CD));
            for (const CD of DD) ID.push(CD)
          } else ID.push(pD.point1), ID.push(pD.point2);
        return ID
      }
      static SegmentizeLineBySegmentCount(DD, CD) {
        const cD = "number" === typeof DD[0] ? gI.ToVector3Array(DD) : DD,
          ID = gI.GetLineLength(cD) / CD;
        return gI.SegmentizeLineBySegmentLength(cD, ID)
      }
      static GetLineSegments(DD) {
        const CD = [];
        for (let cD = 0; cD < DD.length - 1; cD++) {
          const ID = DD[cD],
            pD = DD[cD + 1],
            iD = pD.subtract(ID).length();
          CD.push({
            point1: ID,
            point2: pD,
            length: iD
          })
        }
        return CD
      }
      static GetMinMaxSegmentLength(DD) {
        const CD = gI.GetLineSegments(DD).sort((DD => DD.length));
        return {
          min: CD[0].length,
          max: CD[CD.length - 1].length
        }
      }
      static GetPositionOnLineByVisibility(DD, CD, cD) {
        let ID = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const pD = CD * cD;
        let iD = 0,
          fD = 0;
        const bD = DD.length;
        for (let wD = 0; wD < bD; wD++) {
          if (pD <= iD + DD[wD].length) {
            fD = wD;
            break
          }
          iD += DD[wD].length
        }
        const QD = (pD - iD) / DD[fD].length;
        return DD[fD].point2.subtractToRef(DD[fD].point1, TD.l.cZ[0]), TD.l.cZ[0].scaleToRef(QD, TD.l.cZ[1]), ID || TD.l.cZ[1].addInPlace(DD[fD].point1), TD.l.cZ[1].clone()
      }
      static GetCircleLinePoints(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : DD,
          pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2 * Math.PI / CD;
        const iD = [];
        for (let fD = 0; fD <= CD; fD++) iD.push(new TD.p(Math.cos(fD * pD) * DD, Math.sin(fD * pD) * ID, cD));
        return iD
      }
      static GetBezierLinePoints(DD, CD, cD, ID) {
        return ZI.c.CreateQuadraticBezier(DD, CD, cD, ID).getPoints().flatMap((DD => [DD.x, DD.y, DD.z]))
      }
      static GetArrowCap(DD, CD, cD, ID, pD) {
        let iD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          fD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        return {
          points: [DD.clone(), DD.add(CD.multiplyByFloats(cD, cD, cD))],
          widths: [ID, pD, iD, fD]
        }
      }
      static GetPointsFromText(DD, CD, cD, ID) {
        let pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          iD = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        const fD = [],
          bD = NI(DD, CD, cD, ID);
        for (const QD of bD) {
          for (const DD of QD.paths) {
            const CD = [],
              cD = DD.getPoints();
            for (const DD of cD) CD.push(DD.x, DD.y, pD);
            fD.push(CD)
          }
          if (iD)
            for (const DD of QD.holes) {
              const CD = [],
                cD = DD.getPoints();
              for (const DD of cD) CD.push(DD.x, DD.y, pD);
              fD.push(CD)
            }
        }
        return fD
      }
      static Color3toRGBAUint8(DD) {
        const CD = new Uint8Array(4 * DD.length);
        for (let cD = 0, ID = 0; cD < DD.length; cD++) CD[ID++] = 255 * DD[cD].r, CD[ID++] = 255 * DD[cD].g, CD[ID++] = 255 * DD[cD].b, CD[ID++] = 255;
        return CD
      }
      static CreateColorsTexture(DD, CD, cD, ID) {
        const pD = ID.DZ().getCaps().maxTextureSize ?? 1,
          iD = CD.length > pD ? pD : CD.length,
          fD = Math.ceil(CD.length / pD);
        fD > 1 && (CD = [...CD, ...Array(iD * fD - CD.length).fill(CD[0])]);
        const bD = gI.Color3toRGBAUint8(CD),
          QD = new nD.e(bD, iD, fD, Sc.c.TEXTUREFORMAT_RGBA, ID, !1, !0, cD);
        return QD.name = DD, QD
      }
      static PrepareEmptyColorsTexture(DD) {
        if (!tI.EmptyColorsTexture) {
          const CD = new Uint8Array(4);
          tI.EmptyColorsTexture = new nD.e(CD, 1, 1, Sc.c.TEXTUREFORMAT_RGBA, DD, !1, !1, nD.e.NEAREST_NEAREST), tI.EmptyColorsTexture.name = "grlEmptyColorsTexture", tI.EmptyColorsTexture.Aq.addOnce((() => {
            tI.EmptyColorsTexture = null
          }))
        }
        return tI.EmptyColorsTexture
      }
      static DisposeEmptyColorsTexture() {
        tI.EmptyColorsTexture?.dispose(), tI.EmptyColorsTexture = null
      }
      static BooleanToNumber(DD) {
        return DD ? 1 : 0
      }
    }
    class XI extends RD.e {
      constructor() {
        super(...arguments), this.GREASED_LINE_HAS_COLOR = !1, this.GREASED_LINE_SIZE_ATTENUATION = !1, this.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = !1, this.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = !1, this.GREASED_LINE_CAMERA_FACING = !0, this.GREASED_LINE_USE_OFFSETS = !1
      }
    }
    class mI extends kD.e {
      isCompatible(DD) {
        return !0
      }
      constructor(DD, CD, cD) {
        cD = cD || {
          color: tI.DEFAULT_COLOR
        };
        const ID = new XI;
        ID.GREASED_LINE_HAS_COLOR = !!cD.color && !cD.useColors, ID.GREASED_LINE_SIZE_ATTENUATION = cD.sizeAttenuation ?? !1, ID.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === cD.colorDistributionType, ID.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = (CD ?? DD.hq()).useRightHandedSystem, ID.GREASED_LINE_CAMERA_FACING = cD.cameraFacing ?? !0, super(DD, mI.GREASED_LINE_MATERIAL_NAME, 200, ID, !0, !0), this.colorsTexture = null, this._forceGLSL = !1, this._forceGLSL = cD?.forceGLSL || mI.ForceGLSL, this._scene = CD ?? DD.hq(), this._engine = this._scene.DZ(), this._cameraFacing = cD.cameraFacing ?? !0, this.visibility = cD.visibility ?? 1, this.useDash = cD.useDash ?? !1, this.dashRatio = cD.dashRatio ?? .5, this.dashOffset = cD.dashOffset ?? 0, this.width = cD.width ? cD.width : cD.sizeAttenuation ? tI.DEFAULT_WIDTH_ATTENUATED : tI.DEFAULT_WIDTH, this._sizeAttenuation = cD.sizeAttenuation ?? !1, this.colorMode = cD.colorMode ?? 0, this._color = cD.color ?? null, this.useColors = cD.useColors ?? !1, this._colorsDistributionType = cD.colorDistributionType ?? 0, this.colorsSampling = cD.colorsSampling ?? nD.e.NEAREST_NEAREST, this._colors = cD.colors ?? null, this.dashCount = cD.dashCount ?? 1, this.resolution = cD.resolution ?? new TD.n(this._engine.getRenderWidth(), this._engine.getRenderHeight()), cD.colorsTexture ? this.colorsTexture = cD.colorsTexture : this._colors ? this.colorsTexture = gI.CreateColorsTexture(`${DD.name}-colors-texture`, this._colors, this.colorsSampling, this._scene) : (this._color = this._color ?? tI.DEFAULT_COLOR, gI.PrepareEmptyColorsTexture(this._scene)), this._engine.Aq.add((() => {
          gI.DisposeEmptyColorsTexture()
        }))
      }
      getAttributes(DD) {
        DD.push("grl_offsets"), DD.push("grl_widths"), DD.push("grl_colorPointers"), DD.push("grl_counters"), this._cameraFacing ? (DD.push("grl_previousAndSide"), DD.push("grl_nextAndCounters")) : DD.push("grl_slopes")
      }
      getSamplers(DD) {
        DD.push("grl_colors")
      }
      getActiveTextures(DD) {
        this.colorsTexture && DD.push(this.colorsTexture)
      }
      getUniforms() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const CD = [{
          name: "grl_singleColor",
          size: 3,
          type: "vec3"
        }, {
          name: "grl_textureSize",
          size: 2,
          type: "vec2"
        }, {
          name: "grl_dashOptions",
          size: 4,
          type: "vec4"
        }, {
          name: "grl_colorMode_visibility_colorsWidth_useColors",
          size: 4,
          type: "vec4"
        }];
        return this._cameraFacing && CD.push({
          name: "grl_projection",
          size: 16,
          type: "mat4"
        }, {
          name: "grl_aspect_resolution_lineWidth",
          size: 4,
          type: "vec4"
        }), 1 === DD && CD.push({
          name: "viewProjection",
          size: 16,
          type: "mat4"
        }), {
          ubo: CD,
          vertex: this._cameraFacing && this._isGLSL(DD) ? "\n                    uniform vec4 grl_aspect_resolution_lineWidth;\n                    uniform mat4 grl_projection;\n    " : "",
          fragment: this._isGLSL(DD) ? "\n                    uniform vec4 grl_dashOptions;\n                    uniform vec2 grl_textureSize;\n                    uniform vec4 grl_colorMode_visibility_colorsWidth_useColors;\n                    uniform vec3 grl_singleColor;\n    " : ""
        }
      }
      get isEnabled() {
        return !0
      }
      bindForSubMesh(DD) {
        if (this._cameraFacing) {
          DD.o5("grl_projection", this._scene.getProjectionMatrix()), this._isGLSL(this._material.shaderLanguage) || DD.o5("viewProjection", this._scene.getTransformMatrix());
          const CD = TD.l.Vector4[0];
          CD.x = this._aspect, CD.y = this._resolution.x, CD.z = this._resolution.y, CD.w = this.width, DD.updateVector4("grl_aspect_resolution_lineWidth", CD)
        }
        const CD = TD.l.Vector4[0];
        CD.x = gI.BooleanToNumber(this.useDash), CD.y = this._dashArray, CD.z = this.dashOffset, CD.w = this.dashRatio, DD.updateVector4("grl_dashOptions", CD);
        const cD = TD.l.Vector4[1];
        cD.x = this.colorMode, cD.y = this.visibility, cD.z = this.colorsTexture ? this.colorsTexture.getSize().width : 0, cD.w = gI.BooleanToNumber(this.useColors), DD.updateVector4("grl_colorMode_visibility_colorsWidth_useColors", cD), this._color && DD.updateColor3("grl_singleColor", this._color);
        const ID = this.colorsTexture ?? tI.EmptyColorsTexture;
        DD.setTexture("grl_colors", ID), DD.updateFloat2("grl_textureSize", ID?.getSize().width ?? 1, ID?.getSize().height ?? 1)
      }
      prepareDefines(DD, CD, cD) {
        DD.GREASED_LINE_HAS_COLOR = !!this.color && !this.useColors, DD.GREASED_LINE_SIZE_ATTENUATION = this._sizeAttenuation, DD.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === this._colorsDistributionType, DD.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = CD.useRightHandedSystem, DD.GREASED_LINE_CAMERA_FACING = this._cameraFacing, DD.GREASED_LINE_USE_OFFSETS = !!cD.offsets
      }
      getClassName() {
        return mI.GREASED_LINE_MATERIAL_NAME
      }
      getCustomCode(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._isGLSL(CD) ? function(DD, CD) {
          if ("vertex" === DD) {
            const DD = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute float grl_widths;\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute vec3 grl_offsets;\n                #endif\n                attribute float grl_colorPointers;\n                varying float grlCounters;\n                varying float grlColorPointer;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute vec4 grl_previousAndSide;\n                    attribute vec4 grl_nextAndCounters;\n\n                    vec2 grlFix( vec4 i, float aspect ) {\n                        vec2 res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute vec3 grl_slopes;\n                    attribute float grl_counters;\n                #endif\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    vec3 grlPositionOffset = grl_offsets;\n                #else\n                    vec3 grlPositionOffset = vec3(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (grl_slopes * grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                grlColorPointer = grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    float grlAspect = grl_aspect_resolution_lineWidth.x;\n                    float grlBaseWidth = grl_aspect_resolution_lineWidth.w;\n\n                    vec3 grlPrevious = grl_previousAndSide.xyz;\n                    float grlSide = grl_previousAndSide.w;\n\n                    vec3 grlNext = grl_nextAndCounters.xyz;\n                    grlCounters = grl_nextAndCounters.w;\n                    float grlWidth = grlBaseWidth * grl_widths;\n                    \n                    vec3 worldDir = normalize(grlNext - grlPrevious);\n                    vec3 nearPosition = positionUpdated + (worldDir * 0.01);\n                    mat4 grlMatrix = viewProjection * finalWorld;\n                    vec4 grlFinalPosition = grlMatrix * vec4(positionUpdated , 1.0);\n                    vec4 screenNearPos = grlMatrix * vec4(nearPosition, 1.0);\n                    vec2 grlLinePosition = grlFix(grlFinalPosition, grlAspect);\n                    vec2 grlLineNearPosition = grlFix(screenNearPos, grlAspect);\n                    vec2 grlDir = normalize(grlLineNearPosition - grlLinePosition);\n\n                    vec4 grlNormal = vec4(-grlDir.y, grlDir.x, 0., 1.);\n\n                    #ifdef GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM\n                        grlNormal.xy *= -.5 * grlWidth;\n                    #else\n                        grlNormal.xy *= .5 * grlWidth;\n                    #endif\n\n                    grlNormal *= grl_projection;\n\n                    #ifdef GREASED_LINE_SIZE_ATTENUATION\n                        grlNormal.xy *= grlFinalPosition.w;\n                        grlNormal.xy /= (vec4(grl_aspect_resolution_lineWidth.yz, 0., 1.) * grl_projection).xy;\n                    #endif\n\n                    grlFinalPosition.xy += grlNormal.xy * grlSide;\n                    gl_Position = grlFinalPosition;\n\n                    vPositionW = vec3(grlFinalPosition);\n                #else\n                    grlCounters = grl_counters;\n                #endif\n                "
            };
            return CD && (DD["!gl_Position\\=viewProjection\\*worldPos;"] = "//"), DD
          }
          return "fragment" === DD ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying float grlCounters;\n                    varying float grlColorPointer;\n                    uniform sampler2D grl_colors;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    float grlColorMode = grl_colorMode_visibility_colorsWidth_useColors.x;\n                    float grlVisibility = grl_colorMode_visibility_colorsWidth_useColors.y;\n                    float grlColorsWidth = grl_colorMode_visibility_colorsWidth_useColors.z;\n                    float grlUseColors = grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    float grlUseDash = grl_dashOptions.x;\n                    float grlDashArray = grl_dashOptions.y;\n                    float grlDashOffset = grl_dashOptions.z;\n                    float grlDashRatio = grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(grlCounters, grlVisibility);\n                    if(grlFinalColor.a == 0.) discard;\n\n                    if(grlUseDash == 1.){\n                        grlFinalColor.a *= ceil(mod(grlCounters + grlDashOffset, grlDashArray) - (grlDashArray * grlDashRatio));\n                        if (grlFinalColor.a == 0.) discard;\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor.rgb = grl_singleColor;\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor.rgb += grl_singleColor;\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor.rgb *= grl_singleColor;\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                vec4 grlColor = texture2D(grl_colors, vec2(grlCounters, 0.), 0.);\n                            #else\n                                vec2 lookup = vec2(fract(grlColorPointer / grl_textureSize.x), 1.0 - floor(grlColorPointer / grl_textureSize.x) / max(grl_textureSize.y - 1.0, 1.0));\n                                vec4 grlColor = texture2D(grl_colors, lookup, 0.0);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n                "
          } : null
        }(DD, this._cameraFacing) : function(DD, CD) {
          if ("vertex" === DD) {
            const DD = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute grl_widths: f32;\n                attribute grl_colorPointers: f32;\n                varying grlCounters: f32;\n                varying grlColorPointer: f32;\n\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute grl_offsets: vec3f;   \n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute grl_previousAndSide : vec4f;\n                    attribute grl_nextAndCounters : vec4f;\n\n                    fn grlFix(i: vec4f, aspect: f32) -> vec2f {\n                        var res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute grl_slopes: f32;\n                    attribute grl_counters: f32;\n                #endif\n\n\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    var grlPositionOffset: vec3f = input.grl_offsets;\n                #else\n                    var grlPositionOffset = vec3f(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (input.grl_slopes * input.grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                vertexOutputs.grlColorPointer = input.grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    let grlAspect: f32 = uniforms.grl_aspect_resolution_lineWidth.x;\n                    let grlBaseWidth: f32 = uniforms.grl_aspect_resolution_lineWidth.w;\n\n                    let grlPrevious: vec3f = input.grl_previousAndSide.xyz;\n                    let grlSide: f32 = input.grl_previousAndSide.w;\n\n                    let grlNext: vec3f = input.grl_nextAndCounters.xyz;\n                    vertexOutputs.grlCounters = input.grl_nextAndCounters.w;\n\n                    let grlWidth: f32 = grlBaseWidth * input.grl_widths;\n\n                    let worldDir: vec3f = normalize(grlNext - grlPrevious);\n                    let nearPosition: vec3f = positionUpdated + (worldDir * 0.01);\n                    let grlMatrix: mat4x4f = uniforms.viewProjection * finalWorld;\n                    let grlFinalPosition: vec4f = grlMatrix * vec4f(positionUpdated, 1.0); \n                    let screenNearPos: vec4f = grlMatrix * vec4(nearPosition, 1.0);\n                    let grlLinePosition: vec2f = grlFix(grlFinalPosition, grlAspect);\n                    let grlLineNearPosition: vec2f = grlFix(screenNearPos, grlAspect);\n                    let grlDir: vec2f = normalize(grlLineNearPosition - grlLinePosition);\n\n                    var grlNormal: vec4f = vec4f(-grlDir.y, grlDir.x, 0.0, 1.0);\n\n                    let grlHalfWidth: f32 = 0.5 * grlWidth;\n                    #if defined(GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM)\n                        grlNormal.x *= -grlHalfWidth;\n                        grlNormal.y *= -grlHalfWidth;\n                    #else\n                        grlNormal.x *= grlHalfWidth;\n                        grlNormal.y *= grlHalfWidth;\n                    #endif\n\n                    grlNormal *= uniforms.grl_projection;\n\n                    #if defined(GREASED_LINE_SIZE_ATTENUATION)\n                        grlNormal.x *= grlFinalPosition.w;\n                        grlNormal.y *= grlFinalPosition.w;\n\n                        let pr = vec4f(uniforms.grl_aspect_resolution_lineWidth.yz, 0.0, 1.0) * uniforms.grl_projection;\n                        grlNormal.x /= pr.x;\n                        grlNormal.y /= pr.y;\n                    #endif\n\n                    vertexOutputs.position = vec4f(grlFinalPosition.xy + grlNormal.xy * grlSide, grlFinalPosition.z, grlFinalPosition.w);\n                    vertexOutputs.vPositionW = vertexOutputs.position.xyz;\n                \n                #else\n                    vertexOutputs.grlCounters = input.grl_counters;\n                #endif\n                "
            };
            return CD && (DD["!vertexOutputs\\.position\\s=\\sscene\\.viewProjection\\s\\*\\sworldPos;"] = "//"), DD
          }
          return "fragment" === DD ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying grlCounters: f32;\n                    varying grlColorPointer: 32;\n\n                    var grl_colors: texture_2d<f32>;\n                    var grl_colorsSampler: sampler;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    let grlColorMode: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.x;\n                    let grlVisibility: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.y;\n                    let grlColorsWidth: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.z;\n                    let grlUseColors: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    let grlUseDash: f32 = uniforms.grl_dashOptions.x;\n                    let grlDashArray: f32 = uniforms.grl_dashOptions.y;\n                    let grlDashOffset: f32 = uniforms.grl_dashOptions.z;\n                    let grlDashRatio: f32 = uniforms.grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(fragmentInputs.grlCounters, grlVisibility);\n                    if (grlFinalColor.a == 0.0) {\n                        discard;\n                    }\n\n                    if (grlUseDash == 1.0) {\n                        let dashPosition = (fragmentInputs.grlCounters + grlDashOffset) % grlDashArray;\n                        grlFinalColor.a *= ceil(dashPosition - (grlDashArray * grlDashRatio));\n\n                        if (grlFinalColor.a == 0.0) {\n                            discard;\n                        }\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor = vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor += vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor *= vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, vec2f(fragmentInputs.grlCounters, 0.));\n                            #else\n                                let lookup: vec2f = vec2(fract(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x), 1.0 - floor(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x) / max(uniforms.grl_textureSize.y - 1.0, 1.0));\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, lookup);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n\n\n                "
          } : null
        }(DD, this._cameraFacing)
      }
      dispose() {
        this.colorsTexture?.dispose(), super.dispose()
      }
      get colors() {
        return this._colors
      }
      set colors(DD) {
        this.setColors(DD)
      }
      setColors(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const ID = this._colors?.length ?? 0;
        if (this._colors = DD, null !== DD && 0 !== DD.length) {
          if (!CD || cD)
            if (this.colorsTexture && ID === DD.length && !cD) {
              const CD = gI.Color3toRGBAUint8(DD);
              this.colorsTexture.update(CD)
            } else this.colorsTexture?.dispose(), this.colorsTexture = gI.CreateColorsTexture(`${this._material.name}-colors-texture`, DD, this.colorsSampling, this._scene)
        } else this.colorsTexture?.dispose()
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(DD) {
        this._dashCount = DD, this._dashArray = 1 / DD
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(DD) {
        this._sizeAttenuation = DD, this.markAllDefinesAsDirty()
      }
      get color() {
        return this._color
      }
      set color(DD) {
        this.setColor(DD)
      }
      setColor(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null === this._color && null !== DD || null !== this._color && null === DD ? (this._color = DD, CD || this.markAllDefinesAsDirty()) : this._color = DD
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(DD) {
        this._colorsDistributionType = DD, this.markAllDefinesAsDirty()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(DD) {
        this._aspect = DD.x / DD.y, this._resolution = DD
      }
      serialize() {
        const DD = super.serialize(),
          CD = {
            colorDistributionType: this._colorsDistributionType,
            colorsSampling: this.colorsSampling,
            colorMode: this.colorMode,
            dashCount: this._dashCount,
            dashOffset: this.dashOffset,
            dashRatio: this.dashRatio,
            resolution: this._resolution,
            sizeAttenuation: this._sizeAttenuation,
            useColors: this.useColors,
            useDash: this.useDash,
            visibility: this.visibility,
            width: this.width
          };
        return this._colors && (CD.colors = this._colors), this._color && (CD.color = this._color), DD.greasedLineMaterialOptions = CD, DD
      }
      parse(DD, CD, cD) {
        super.parse(DD, CD, cD);
        const ID = DD.greasedLineMaterialOptions;
        this.colorsTexture?.dispose(), ID.color && this.setColor(ID.color, !0), ID.colorDistributionType && (this.colorsDistributionType = ID.colorDistributionType), ID.colors && (this.colors = ID.colors), ID.colorsSampling && (this.colorsSampling = ID.colorsSampling), ID.colorMode && (this.colorMode = ID.colorMode), ID.useColors && (this.useColors = ID.useColors), ID.visibility && (this.visibility = ID.visibility), ID.useDash && (this.useDash = ID.useDash), ID.dashCount && (this.dashCount = ID.dashCount), ID.dashRatio && (this.dashRatio = ID.dashRatio), ID.dashOffset && (this.dashOffset = ID.dashOffset), ID.width && (this.width = ID.width), ID.sizeAttenuation && (this.sizeAttenuation = ID.sizeAttenuation), ID.resolution && (this.resolution = ID.resolution), this.colors ? this.colorsTexture = gI.CreateColorsTexture(`${this._material.name}-colors-texture`, this.colors, this.colorsSampling, CD) : gI.PrepareEmptyColorsTexture(CD), this.markAllDefinesAsDirty()
      }
      copyTo(DD) {
        const CD = DD;
        CD.colorsTexture?.dispose(), this._colors && (CD.colorsTexture = gI.CreateColorsTexture(`${CD._material.name}-colors-texture`, this._colors, CD.colorsSampling, this._scene)), CD.setColor(this.color, !0), CD.colorsDistributionType = this.colorsDistributionType, CD.colorsSampling = this.colorsSampling, CD.colorMode = this.colorMode, CD.useColors = this.useColors, CD.visibility = this.visibility, CD.useDash = this.useDash, CD.dashCount = this.dashCount, CD.dashRatio = this.dashRatio, CD.dashOffset = this.dashOffset, CD.width = this.width, CD.sizeAttenuation = this.sizeAttenuation, CD.resolution = this.resolution, CD.markAllDefinesAsDirty()
      }
      _isGLSL(DD) {
        return 0 === DD || this._forceGLSL
      }
    }
    mI.GREASED_LINE_MATERIAL_NAME = "GreasedLinePluginMaterial", mI.ForceGLSL = !1;
    var nI = cD(39531),
      OI = cD(39545),
      PI = cD(38045),
      HI = cD(39590),
      UI = cD(38982);
    class xI extends HI.p {
      constructor(DD, CD, ID) {
        const pD = CD.DZ(),
          iD = pD.isWebGPU && !(ID.forceGLSL || xI.ForceGLSL),
          fD = ["COLOR_DISTRIBUTION_TYPE_LINE 1.", "COLOR_DISTRIBUTION_TYPE_SEGMENT 0.", "COLOR_MODE_SET 0.", "COLOR_MODE_ADD 1.", "COLOR_MODE_MULTIPLY 2."];
        CD.useRightHandedSystem && fD.push("GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM");
        const bD = ["position", "grl_widths", "grl_offsets", "grl_colorPointers"];
        ID.cameraFacing ? (fD.push("GREASED_LINE_CAMERA_FACING"), bD.push("grl_previousAndSide", "grl_nextAndCounters")) : (bD.push("grl_slopes"), bD.push("grl_counters"));
        const QD = ["grlColorsWidth", "grlUseColors", "grlWidth", "grlColor", "grl_colorModeAndColorDistributionType", "grlResolution", "grlAspect", "grlAizeAttenuation", "grlDashArray", "grlDashOffset", "grlDashRatio", "grlUseDash", "grlVisibility", "grlColors"];
        if (iD || QD.push("world", "viewProjection", "view", "projection"), super(DD, CD, {
            vertex: "greasedLine",
            fragment: "greasedLine"
          }, {
            uniformBuffers: iD ? ["Scene", "Mesh"] : void 0,
            attributes: bD,
            uniforms: QD,
            samplers: iD ? [] : ["grlColors"],
            defines: fD,
            extraInitializationsAsync: async () => {
              iD ? await Promise.all([cD.e(324).then((() => cD(61071))), cD.e(383).then((() => cD(61077)))]) : await Promise.all([cD.e(317).then((() => cD(61084))), cD.e(384).then((() => cD(61093)))])
            },
            shaderLanguage: iD ? 1 : 0
          }), this._color = sD.d.White(), this._colorsDistributionType = 0, this._colorsTexture = null, ID = ID || {
            color: tI.DEFAULT_COLOR
          }, this.visibility = ID.visibility ?? 1, this.useDash = ID.useDash ?? !1, this.dashRatio = ID.dashRatio ?? .5, this.dashOffset = ID.dashOffset ?? 0, this.dashCount = ID.dashCount ?? 1, this.width = ID.width ? ID.width : ID.sizeAttenuation && ID.cameraFacing ? tI.DEFAULT_WIDTH_ATTENUATED : tI.DEFAULT_WIDTH, this.sizeAttenuation = ID.sizeAttenuation ?? !1, this.color = ID.color ?? sD.d.White(), this.useColors = ID.useColors ?? !1, this.colorsDistributionType = ID.colorDistributionType ?? 0, this.colorsSampling = ID.colorsSampling ?? nD.e.NEAREST_NEAREST, this.colorMode = ID.colorMode ?? 0, this._colors = ID.colors ?? null, this._cameraFacing = ID.cameraFacing ?? !0, this.resolution = ID.resolution ?? new TD.n(pD.getRenderWidth(), pD.getRenderHeight()), ID.colorsTexture ? this.colorsTexture = ID.colorsTexture : this._colors ? this.colorsTexture = gI.CreateColorsTexture(`${this.name}-colors-texture`, this._colors, this.colorsSampling, CD) : (this._color = this._color ?? tI.DEFAULT_COLOR, this.colorsTexture = gI.PrepareEmptyColorsTexture(CD)), iD) {
          const DD = new UI.b;
          DD.setParameters(), DD.samplingMode = this.colorsSampling, this.setTextureSampler("grlColorsSampler", DD)
        }
        pD.Aq.add((() => {
          gI.DisposeEmptyColorsTexture()
        }))
      }
      dispose() {
        this._colorsTexture && this._colorsTexture !== tI.EmptyColorsTexture && this._colorsTexture.dispose(), super.dispose()
      }
      _setColorModeAndColorDistributionType() {
        this.setVector2("grl_colorModeAndColorDistributionType", new TD.n(this._colorMode, this._colorsDistributionType))
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get colors() {
        return this._colors
      }
      set colors(DD) {
        this.setColors(DD)
      }
      setColors(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const ID = this._colors?.length ?? 0;
        if (this._colors = DD, null !== DD && 0 !== DD.length) {
          if (!CD || cD)
            if (this._colorsTexture && ID === DD.length && !cD) {
              const CD = gI.Color3toRGBAUint8(DD);
              this._colorsTexture.update(CD)
            } else this._colorsTexture && this._colorsTexture !== tI.EmptyColorsTexture && this._colorsTexture.dispose(), this.colorsTexture = gI.CreateColorsTexture(`${this.name}-colors-texture`, DD, this.colorsSampling, this.hq())
        } else {
          this._colorsTexture && this._colorsTexture !== tI.EmptyColorsTexture && this._colorsTexture.dispose();
          const DD = this.hq();
          DD && (this.colorsTexture = gI.PrepareEmptyColorsTexture(DD))
        }
      }
      get colorsTexture() {
        return this._colorsTexture ?? null
      }
      set colorsTexture(DD) {
        this._colorsTexture = DD, this.setFloat("grlColorsWidth", this._colorsTexture.getSize().width), this.setTexture("grlColors", this._colorsTexture)
      }
      get width() {
        return this._width
      }
      set width(DD) {
        this._width = DD, this.setFloat("grlWidth", DD)
      }
      get useColors() {
        return this._useColors
      }
      set useColors(DD) {
        this._useColors = DD, this.setFloat("grlUseColors", gI.BooleanToNumber(DD))
      }
      get colorsSampling() {
        return this._colorsSampling
      }
      set colorsSampling(DD) {
        this._colorsSampling = DD
      }
      get visibility() {
        return this._visibility
      }
      set visibility(DD) {
        this._visibility = DD, this.setFloat("grlVisibility", DD)
      }
      get useDash() {
        return this._useDash
      }
      set useDash(DD) {
        this._useDash = DD, this.setFloat("grlUseDash", gI.BooleanToNumber(DD))
      }
      get dashOffset() {
        return this._dashOffset
      }
      set dashOffset(DD) {
        this._dashOffset = DD, this.setFloat("grlDashOffset", DD)
      }
      get dashRatio() {
        return this._dashRatio
      }
      set dashRatio(DD) {
        this._dashRatio = DD, this.setFloat("grlDashRatio", DD)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(DD) {
        this._dashCount = DD, this._dashArray = 1 / DD, this.setFloat("grlDashArray", this._dashArray)
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(DD) {
        this._sizeAttenuation = DD, this.setFloat("grlSizeAttenuation", gI.BooleanToNumber(DD))
      }
      get color() {
        return this._color
      }
      set color(DD) {
        this.setColor(DD)
      }
      setColor(DD) {
        DD = DD ?? tI.DEFAULT_COLOR, this._color = DD, this.setColor3("grlColor", DD)
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(DD) {
        this._colorsDistributionType = DD, this._setColorModeAndColorDistributionType()
      }
      get colorMode() {
        return this._colorMode
      }
      set colorMode(DD) {
        this._colorMode = DD, this._setColorModeAndColorDistributionType()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(DD) {
        this._resolution = DD, this.setVector2("grlResolution", DD), this.setFloat("grlAspect", DD.x / DD.y)
      }
      serialize() {
        const DD = super.serialize(),
          CD = {
            colorDistributionType: this._colorsDistributionType,
            colorsSampling: this._colorsSampling,
            colorMode: this._colorMode,
            color: this._color,
            dashCount: this._dashCount,
            dashOffset: this._dashOffset,
            dashRatio: this._dashRatio,
            resolution: this._resolution,
            sizeAttenuation: this._sizeAttenuation,
            useColors: this._useColors,
            useDash: this._useDash,
            visibility: this._visibility,
            width: this._width,
            cameraFacing: this._cameraFacing
          };
        return this._colors && (CD.colors = this._colors), DD.greasedLineMaterialOptions = CD, DD
      }
      parse(DD, CD, cD) {
        const ID = DD.greasedLineMaterialOptions;
        this._colorsTexture?.dispose(), ID.color && (this.color = ID.color), ID.colorDistributionType && (this.colorsDistributionType = ID.colorDistributionType), ID.colorsSampling && (this.colorsSampling = ID.colorsSampling), ID.colorMode && (this.colorMode = ID.colorMode), ID.useColors && (this.useColors = ID.useColors), ID.visibility && (this.visibility = ID.visibility), ID.useDash && (this.useDash = ID.useDash), ID.dashCount && (this.dashCount = ID.dashCount), ID.dashRatio && (this.dashRatio = ID.dashRatio), ID.dashOffset && (this.dashOffset = ID.dashOffset), ID.width && (this.width = ID.width), ID.sizeAttenuation && (this.sizeAttenuation = ID.sizeAttenuation), ID.resolution && (this.resolution = ID.resolution), ID.colors ? this.colorsTexture = gI.CreateColorsTexture(`${this.name}-colors-texture`, ID.colors, this.colorsSampling, this.hq()) : this.colorsTexture = gI.PrepareEmptyColorsTexture(CD), this._cameraFacing = ID.cameraFacing ?? !0, this.setDefine("GREASED_LINE_CAMERA_FACING", this._cameraFacing)
      }
    }
    var qI, JI, KI;
    xI.ForceGLSL = !1,
      function(DD) {
        DD[DD.POINTS_MODE_POINTS = 0] = "POINTS_MODE_POINTS", DD[DD.POINTS_MODE_PATHS = 1] = "POINTS_MODE_PATHS"
      }(qI || (qI = {})),
      function(DD) {
        DD[DD.FACES_MODE_SINGLE_SIDED = 0] = "FACES_MODE_SINGLE_SIDED", DD[DD.FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING = 1] = "FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING", DD[DD.FACES_MODE_DOUBLE_SIDED = 2] = "FACES_MODE_DOUBLE_SIDED"
      }(JI || (JI = {})),
      function(DD) {
        DD[DD.AUTO_DIRECTIONS_FROM_FIRST_SEGMENT = 0] = "AUTO_DIRECTIONS_FROM_FIRST_SEGMENT", DD[DD.AUTO_DIRECTIONS_FROM_ALL_SEGMENTS = 1] = "AUTO_DIRECTIONS_FROM_ALL_SEGMENTS", DD[DD.AUTO_DIRECTIONS_ENHANCED = 2] = "AUTO_DIRECTIONS_ENHANCED", DD[DD.AUTO_DIRECTIONS_FACE_TO = 3] = "AUTO_DIRECTIONS_FACE_TO", DD[DD.AUTO_DIRECTIONS_NONE = 99] = "AUTO_DIRECTIONS_NONE"
      }(KI || (KI = {}));
    class aI extends nI.d {
      constructor(DD, CD, cD) {
        super(DD, CD, null, null, !1, !1), this.name = DD, this._options = cD, this._lazy = !1, this._updatable = !1, this._engine = CD.DZ(), this._lazy = cD.lazy ?? !1, this._updatable = cD.updatable ?? !1, this._vertexPositions = [], this._indices = [], this._uvs = [], this._points = [], this._colorPointers = cD.colorPointers ?? [], this._widths = cD.widths ?? new Array(cD.points.length).fill(1)
      }
      getClassName() {
        return "GreasedLineMesh"
      }
      _updateWidthsWithValue(DD) {
        let CD = 0;
        for (const ID of this._points) CD += ID.length;
        const cD = CD / 3 * 2 - this._widths.length;
        for (let ID = 0; ID < cD; ID++) this._widths.push(DD)
      }
      updateLazy() {
        this._setPoints(this._points), this._options.colorPointers || this._updateColorPointers(), this._createVertexBuffers(this._options.ribbonOptions?.smoothShading), !this.pZ && this.refreshBoundingInfo(), this.greasedLineMaterial?.updateLazy()
      }
      addPoints(DD, CD) {
        for (const cD of DD) this._points.push(cD);
        this._lazy || this.setPoints(this._points, CD)
      }
      dispose(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super.dispose(DD, CD)
      }
      isLazy() {
        return this._lazy
      }
      get uvs() {
        return this._uvs
      }
      set uvs(DD) {
        this._uvs = DD instanceof Float32Array ? DD : new Float32Array(DD), this._createVertexBuffers()
      }
      get offsets() {
        return this._offsets
      }
      set offsets(DD) {
        this.material instanceof xI && this.material.setDefine("GREASED_LINE_USE_OFFSETS", DD?.length > 0), this._offsets = DD, this._offsetsBuffer ? this._offsetsBuffer.update(DD) : this._createOffsetsBuffer(DD)
      }
      get widths() {
        return this._widths
      }
      set widths(DD) {
        this._widths = DD, this._lazy || this._widthsBuffer && this._widthsBuffer.update(DD)
      }
      get colorPointers() {
        return this._colorPointers
      }
      set colorPointers(DD) {
        this._colorPointers = DD, this._lazy || this._colorPointersBuffer && this._colorPointersBuffer.update(DD)
      }
      get greasedLineMaterial() {
        if (this.material && this.material instanceof xI) return this.material;
        const DD = this.material?.pluginManager?.getPlugin(mI.GREASED_LINE_MATERIAL_NAME);
        return DD || void 0
      }
      get points() {
        const DD = [];
        return PI.e.DeepCopy(this._points, DD), DD
      }
      setPoints(DD, CD) {
        this._points = gI.ConvertPoints(DD, CD?.pointsOptions ?? this._options.pointsOptions), this._updateWidths(), CD?.colorPointers || this._updateColorPointers(), this._setPoints(this._points, CD)
      }
      _initGreasedLine() {
        this._vertexPositions = [], this._indices = [], this._uvs = []
      }
      _createLineOptions() {
        return {
          points: this._points,
          colorPointers: this._colorPointers,
          lazy: this._lazy,
          updatable: this._updatable,
          uvs: this._uvs,
          widths: this._widths,
          ribbonOptions: this._options.ribbonOptions
        }
      }
      serialize(DD) {
        super.serialize(DD), DD.type = this.getClassName(), DD.lineOptions = this._createLineOptions()
      }
      _createVertexBuffers() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const CD = new OI.c;
        return CD.positions = this._vertexPositions, CD.indices = this._indices, CD.uvs = this._uvs, DD && (CD.normals = [], OI.c.ComputeNormals(this._vertexPositions, this._indices, CD.normals)), CD.applyToMesh(this, this._options.updatable), CD
      }
      _createOffsetsBuffer(DD) {
        const CD = this._scene.DZ(),
          cD = new GD.c(CD, DD, this._updatable, 3);
        this.setVerticesBuffer(cD.createVertexBuffer("grl_offsets", 0, 3)), this._offsetsBuffer = cD
      }
    }
    class VI {
      constructor(DD, CD) {
        this._indicesAccessorMap = new Map, this._vertexBufferViewMap = new Map, this._vertexAccessorMap = new Map, this._remappedBufferView = new Map, this._meshMorphTargetMap = new Map, this._vertexMapColorAlpha = new Map, this._exportedNodes = new Set, this._meshMap = new Map, this.convertedToRightHandedBuffers = new Map, this.convertToRightHanded = DD, this.wasAddedByNoopNode = CD
      }
      getIndicesAccessor(DD, CD, cD, ID, pD) {
        return this._indicesAccessorMap.get(DD)?.get(CD)?.get(cD)?.get(ID)?.get(pD)
      }
      setIndicesAccessor(DD, CD, cD, ID, pD, iD) {
        let fD = this._indicesAccessorMap.get(DD);
        fD || (fD = new Map, this._indicesAccessorMap.set(DD, fD));
        let bD = fD.get(CD);
        bD || (bD = new Map, fD.set(CD, bD));
        let QD = bD.get(cD);
        QD || (QD = new Map, bD.set(cD, QD));
        let wD = QD.get(ID);
        wD || (wD = new Map, QD.set(ID, wD)), wD.set(pD, iD)
      }
      pushExportedNode(DD) {
        this._exportedNodes.has(DD) || this._exportedNodes.add(DD)
      }
      getNodesSet() {
        return this._exportedNodes
      }
      getVertexBufferView(DD) {
        return this._vertexBufferViewMap.get(DD)
      }
      setVertexBufferView(DD, CD) {
        this._vertexBufferViewMap.set(DD, CD)
      }
      setRemappedBufferView(DD, CD, cD) {
        this._remappedBufferView.set(DD, new Map), this._remappedBufferView.get(DD).set(CD, cD)
      }
      getRemappedBufferView(DD, CD) {
        return this._remappedBufferView.get(DD)?.get(CD)
      }
      getVertexAccessor(DD, CD, cD) {
        return this._vertexAccessorMap.get(DD)?.get(CD)?.get(cD)
      }
      setVertexAccessor(DD, CD, cD, ID) {
        let pD = this._vertexAccessorMap.get(DD);
        pD || (pD = new Map, this._vertexAccessorMap.set(DD, pD));
        let iD = pD.get(CD);
        iD || (iD = new Map, pD.set(CD, iD)), iD.set(cD, ID)
      }
      hasVertexColorAlpha(DD) {
        return this._vertexMapColorAlpha.get(DD) || !1
      }
      setHasVertexColorAlpha(DD, CD) {
        return this._vertexMapColorAlpha.set(DD, CD)
      }
      getMesh(DD) {
        return this._meshMap.get(DD)
      }
      setMesh(DD, CD) {
        this._meshMap.set(DD, CD)
      }
      bindMorphDataToMesh(DD, CD) {
        const cD = this._meshMorphTargetMap.get(DD) || [];
        this._meshMorphTargetMap.set(DD, cD), -1 === cD.indexOf(CD) && cD.push(CD)
      }
      getMorphTargetsFromMesh(DD) {
        return this._meshMorphTargetMap.get(DD)
      }
    }
    class zI {
      _ApplyExtension(DD, CD, cD, ID) {
        if (cD >= CD.length) return Promise.resolve(DD);
        const pD = ID(CD[cD], DD);
        return pD ? pD.then((async DD => DD ? await this._ApplyExtension(DD, CD, cD + 1, ID) : null)) : this._ApplyExtension(DD, CD, cD + 1, ID)
      }
      _ApplyExtensions(DD, CD) {
        const cD = [];
        for (const ID of zI._ExtensionNames) cD.push(this._extensions[ID]);
        return this._ApplyExtension(DD, cD, 0, CD)
      }
      _extensionsPostExportNodeAsync(DD, CD, cD, ID, pD) {
        return this._ApplyExtensions(CD, ((CD, iD) => CD.postExportNodeAsync && CD.postExportNodeAsync(DD, iD, cD, ID, pD, this._bufferManager)))
      }
      _extensionsPostExportMaterialAsync(DD, CD, cD) {
        return this._ApplyExtensions(CD, ((CD, ID) => CD.postExportMaterialAsync && CD.postExportMaterialAsync(DD, ID, cD)))
      }
      async _extensionsPostExportMaterialAdditionalTexturesAsync(DD, CD, cD) {
        const ID = [];
        return await Promise.all(zI._ExtensionNames.map((async pD => {
          const iD = this._extensions[pD];
          if (iD.postExportMaterialAdditionalTexturesAsync) {
            const pD = await iD.postExportMaterialAdditionalTexturesAsync(DD, CD, cD);
            ID.push(...pD)
          }
        }))), ID
      }
      _extensionsPostExportTextures(DD, CD, cD) {
        for (const ID of zI._ExtensionNames) {
          const pD = this._extensions[ID];
          pD.postExportTexture && pD.postExportTexture(DD, CD, cD)
        }
      }
      _extensionsPostExportMeshPrimitive(DD) {
        for (const CD of zI._ExtensionNames) {
          const cD = this._extensions[CD];
          cD.postExportMeshPrimitive && cD.postExportMeshPrimitive(DD, this._bufferManager, this._accessors)
        }
      }
      async _extensionsPreGenerateBinaryAsync() {
        for (const DD of zI._ExtensionNames) {
          const CD = this._extensions[DD];
          CD.preGenerateBinaryAsync && await CD.preGenerateBinaryAsync(this._bufferManager)
        }
      }
      _forEachExtensions(DD) {
        for (const CD of zI._ExtensionNames) {
          const cD = this._extensions[CD];
          cD.enabled && DD(cD)
        }
      }
      _extensionsOnExporting() {
        this._forEachExtensions((DD => {
          var CD, cD, ID;
          DD.wasUsed && ((CD = this._glTF).extensionsUsed || (CD.extensionsUsed = []), -1 === this._glTF.extensionsUsed.indexOf(DD.name) && this._glTF.extensionsUsed.push(DD.name), DD.required && ((cD = this._glTF).extensionsRequired || (cD.extensionsRequired = []), -1 === this._glTF.extensionsRequired.indexOf(DD.name) && this._glTF.extensionsRequired.push(DD.name)), (ID = this._glTF).extensions || (ID.extensions = {}), DD.onExporting && DD.onExporting())
        }))
      }
      _loadExtensions() {
        for (const DD of zI._ExtensionNames) {
          const CD = zI._ExtensionFactories[DD](this);
          this._extensions[DD] = CD
        }
      }
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ZD.b.LastCreatedScene,
          CD = arguments.length > 1 ? arguments[1] : void 0;
        if (this._glTF = {
            asset: {
              generator: `Babylon.js v${tD.e.Version}`,
              version: "2.0"
            }
          }, this._animations = [], this._accessors = [], this._bufferViews = [], this._cameras = [], this._images = [], this._materials = [], this._meshes = [], this._nodes = [], this._samplers = [], this._scenes = [], this._skins = [], this._textures = [], this._imageData = {}, this._shouldUseGlb = !1, this._materialExporter = new Jc(this), this._extensions = {}, this._bufferManager = new cI, this._shouldExportNodeMap = new Map, this._nodeMap = new Map, this._animationGroupMap = new Map, this._materialMap = new Map, this._camerasMap = new Map, this._nodesCameraMap = new Map, this._skinMap = new Map, this._nodesSkinMap = new Map, this._materialNeedsUVsSet = new Set, !DD) throw new Error("No scene available to export");
        this._babylonScene = DD, this._options = {
          shouldExportNode: () => !0,
          shouldExportAnimation: () => !0,
          metadataSelector: DD => DD?.Jq?.extras,
          animationSampleRate: 1 / 60,
          exportWithoutWaitingForScene: !1,
          exportUnusedUVs: !1,
          removeNoopRootNodes: !0,
          includeCoordinateSystemConversionNodes: !1,
          meshCompressionMethod: "None",
          khrInteractivity: void 0,
          ...CD
        }, this._loadExtensions()
      }
      dispose() {
        for (const DD in this._extensions) {
          this._extensions[DD].dispose()
        }
      }
      get options() {
        return this._options
      }
      static RegisterExtension(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        zI.UnregisterExtension(DD) && pD.Tools.Warn(`Extension with the name ${DD} already exists`), zI._ExtensionFactories[DD] = CD;
        const ID = cD ?? 0;
        zI._ExtensionOrders[DD] = ID;
        let iD = zI._ExtensionNames.length;
        for (let pD = 0; pD < zI._ExtensionNames.length; pD++) {
          const DD = zI._ExtensionNames[pD];
          if (ID < zI._ExtensionOrders[DD]) {
            iD = pD;
            break
          }
        }
        zI._ExtensionNames.splice(iD, 0, DD)
      }
      static UnregisterExtension(DD) {
        if (!zI._ExtensionFactories[DD]) return !1;
        delete zI._ExtensionFactories[DD], delete zI._ExtensionOrders[DD];
        const CD = zI._ExtensionNames.indexOf(DD);
        return -1 !== CD && zI._ExtensionNames.splice(CD, 1), !0
      }
      _generateJSON(DD, CD, cD) {
        const ID = {
          byteLength: DD
        };
        return ID.byteLength && (this._glTF.buffers = [ID]), this._nodes && this._nodes.length && (this._glTF.nodes = this._nodes), this._meshes && this._meshes.length && (this._glTF.meshes = this._meshes), this._scenes && this._scenes.length && (this._glTF.scenes = this._scenes, this._glTF.wo = 0), this._cameras && this._cameras.length && (this._glTF.cameras = this._cameras), this._bufferViews && this._bufferViews.length && (this._glTF.bufferViews = this._bufferViews), this._accessors && this._accessors.length && (this._glTF.accessors = this._accessors), this._animations && this._animations.length && (this._glTF.animations = this._animations), this._materials && this._materials.length && (this._glTF.materials = this._materials), this._textures && this._textures.length && (this._glTF.textures = this._textures), this._samplers && this._samplers.length && (this._glTF.samplers = this._samplers), this._skins && this._skins.length && (this._glTF.skins = this._skins), this._images && this._images.length && (this._glTF.images = this._images), this._shouldUseGlb || (ID.uri = CD + ".bin"), cD ? JSON.stringify(this._glTF, null, 2) : JSON.stringify(this._glTF)
      }
      async generateGLTFAsync(DD) {
        const CD = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const cD = this._generateJSON(CD.byteLength, DD, !0),
          ID = new Blob([CD], {
            type: "application/octet-stream"
          }),
          pD = DD + ".gltf",
          iD = DD + ".bin",
          fD = new wD;
        if (fD.files[pD] = cD, fD.files[iD] = ID, this._imageData)
          for (const bD in this._imageData) fD.files[bD] = this._imageData[bD];
        return fD
      }
      async _generateBinaryAsync() {
        return await this._exportSceneAsync(), await this._extensionsPreGenerateBinaryAsync(), this._bufferManager.generateBinary(this._bufferViews)
      }
      _getPadding(DD) {
        const CD = DD % 4;
        return 0 === CD ? CD : 4 - CD
      }
      async generateGLBAsync(DD) {
        this._shouldUseGlb = !0;
        const CD = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const cD = this._generateJSON(CD.byteLength),
          ID = DD + ".glb";
        let pD, iD = cD.length;
        if ("undefined" !== typeof TextEncoder) {
          pD = (new TextEncoder).encode(cD), iD = pD.length
        }
        const fD = this._getPadding(iD),
          bD = this._getPadding(CD.byteLength),
          QD = 28 + iD + fD + CD.byteLength + bD,
          SD = new DI(QD);
        if (SD.writeUInt32(1179937895), SD.writeUInt32(2), SD.writeUInt32(QD), SD.writeUInt32(iD + fD), SD.writeUInt32(1313821514), pD) SD.writeTypedArray(pD);
        else {
          const DD = "_".charCodeAt(0);
          for (let CD = 0; CD < iD; ++CD) {
            const ID = cD.charCodeAt(CD);
            ID != cD.codePointAt(CD) ? SD.writeUInt8(DD) : SD.writeUInt8(ID)
          }
        }
        for (let wD = 0; wD < fD; ++wD) SD.writeUInt8(32);
        SD.writeUInt32(CD.byteLength + bD), SD.writeUInt32(5130562), SD.writeTypedArray(CD);
        for (let wD = 0; wD < bD; ++wD) SD.writeUInt8(0);
        const BD = new wD;
        return BD.files[ID] = new Blob([SD.getOutputData()], {
          type: "application/octet-stream"
        }), BD
      }
      _setNodeTransformation(DD, CD, cD) {
        if (CD.getPivotPoint().equalsWithEpsilon(lc, Vc.c) || pD.Tools.Warn("Pivot points are not supported in the glTF serializer"), !CD.position.equalsWithEpsilon(lc, Vc.c)) {
          const pD = ID.TmpVectors.cZ[0].YCD(CD.position);
          cD && Wc(pD), DD.translation = pD.XcD()
        }
        CD.ci.equalsWithEpsilon(Tc, Vc.c) || (DD.scale = CD.ci.XcD());
        const iD = CD.rotationQuaternion?.clone() || ID.Quaternion.FromEulerAngles(CD.rotation.x, CD.rotation.y, CD.rotation.z);
        iD.equalsWithEpsilon(Lc, Vc.c) || (cD && sc(iD), DD.rotation = iD.normalize().XcD())
      }
      _setCameraTransformation(DD, CD, cD) {
        const pD = ID.TmpVectors.cZ[0],
          iD = ID.TmpVectors.Quaternion[0],
          fD = CD.getWorldMatrix();
        if (CD.parent) {
          const DD = CD.parent.getWorldMatrix().invertToRef(ID.TmpVectors.Matrix[0]);
          fD.multiplyToRef(DD, ID.TmpVectors.Matrix[1]).decompose(void 0, iD, pD)
        } else fD.decompose(void 0, iD, pD);
        pD.equalsWithEpsilon(lc, Vc.c) || (cD && Wc(pD), DD.translation = pD.XcD()), cD && sc(iD), this._babylonScene.useRightHandedSystem || Ec(iD), iD.equalsWithEpsilon(Lc, Vc.c) || (DD.rotation = iD.XcD())
      }
      _listAvailableCameras() {
        for (const DD of this._babylonScene.cameras) {
          const CD = {
            type: DD.mode === II.c.PERSPECTIVE_CAMERA ? "perspective" : "orthographic"
          };
          if (DD.name && (CD.name = DD.name), "perspective" === CD.type) CD.perspective = {
            aspectRatio: DD.DZ().getAspectRatio(DD),
            yfov: DD.fovMode === II.c.FOVMODE_VERTICAL_FIXED ? DD.fov : DD.fov * DD.DZ().getAspectRatio(DD),
            znear: DD.minZ,
            zfar: DD.maxZ
          };
          else if ("orthographic" === CD.type) {
            const cD = DD.orthoLeft && DD.orthoRight ? .5 * (DD.orthoRight - DD.orthoLeft) : .5 * DD.DZ().getRenderWidth(),
              ID = DD.orthoBottom && DD.orthoTop ? .5 * (DD.orthoTop - DD.orthoBottom) : .5 * DD.DZ().getRenderHeight();
            CD.orthographic = {
              xmag: cD,
              ymag: ID,
              znear: DD.minZ,
              zfar: DD.maxZ
            }
          }
          this._camerasMap.set(DD, CD)
        }
      }
      _exportAndAssignCameras() {
        const DD = Array.from(this._camerasMap.values());
        for (const CD of DD) {
          const DD = this._nodesCameraMap.get(CD);
          if (void 0 !== DD) {
            this._cameras.push(CD);
            for (const CD of DD) CD.camera = this._cameras.length - 1
          }
        }
      }
      _listAvailableSkeletons() {
        for (const DD of this._babylonScene.skeletons) {
          if (DD.bones.length <= 0) continue;
          const CD = {
            joints: []
          };
          this._skinMap.set(DD, CD)
        }
      }
      _exportAndAssignSkeletons(DD) {
        for (const cD of this._babylonScene.skeletons) {
          if (cD.bones.length <= 0) continue;
          const iD = this._skinMap.get(cD);
          if (void 0 == iD) continue;
          const fD = {};
          let bD = -1;
          for (let DD = 0; DD < cD.bones.length; ++DD) {
            const CD = cD.bones[DD],
              ID = CD.getIndex() ?? DD; - 1 !== ID && (fD[ID] = CD, ID > bD && (bD = ID))
          }
          const QD = [];
          for (let cD = 0; cD <= bD; ++cD) {
            const bD = fD[cD],
              wD = bD.getTransformNode(),
              SD = wD ? this._nodeMap.get(wD) : void 0;
            if (void 0 === SD) {
              pD.Tools.Warn("Exporting a bone without a linked transform node is currently unsupported.");
              continue
            }
            iD.joints.push(SD);
            const BD = bD.getAbsoluteInverseBindMatrix().clone();
            DD.has(wD) && (CD = BD, zc.invertToRef(ID.TmpVectors.Matrix[0]).multiplyToRef(CD, CD).multiplyToRef(zc, CD)), QD.push(BD)
          }
          const wD = this._nodesSkinMap.get(iD);
          if (iD.joints.length > 0 && void 0 !== wD) {
            const DD = new Float32Array(16 * QD.length);
            QD.forEach(((CD, cD) => {
              DD.set(CD.m, 16 * cD)
            }));
            const CD = this._bufferManager.createBufferView(DD);
            this._accessors.push(this._bufferManager.createAccessor(CD, "MAT4", 5126, QD.length)), iD.inverseBindMatrices = this._accessors.length - 1, this._skins.push(iD);
            const cD = this._skins.length - 1;
            for (const ID of wD) ID.skin = cD
          }
        }
        var CD
      }
      async _exportSceneAsync() {
        const DD = {
          nodes: []
        };
        if (this._babylonScene.metadata) {
          const CD = this._options.metadataSelector(this._babylonScene.metadata);
          CD && (DD.extras = CD)
        }
        const CD = new Array,
          cD = new Array,
          ID = new Array,
          pD = this._options.removeNoopRootNodes && !this._options.khrInteractivity;
        let iD;
        if (pD && !this._options.includeCoordinateSystemConversionNodes)
          for (const wD of this._babylonScene.animationGroups)
            for (const DD of wD.targetedAnimations) {
              const CD = DD.target;
              CD instanceof BD.e && !CD.parent && (iD ?? (iD = new Set)).add(CD)
            }
        for (const wD of this._babylonScene.rootNodes) {
          const DD = wD.animations,
            fD = !!DD && DD.length > 0 || iD?.has(wD);
          pD && !this._options.includeCoordinateSystemConversionNodes && jc(wD, this._babylonScene.useRightHandedSystem) && !fD ? ID.push(...wD.getChildren()) : this._babylonScene.useRightHandedSystem ? CD.push(wD) : cD.push(wD)
        }
        this._listAvailableCameras(), this._listAvailableSkeletons();
        const fD = new VI(!0, !1);
        DD.nodes.push(...await this._exportNodesAsync(cD, fD));
        const bD = new VI(!1, !1);
        DD.nodes.push(...await this._exportNodesAsync(CD, bD));
        const QD = new VI(!1, !0);
        DD.nodes.push(...await this._exportNodesAsync(ID, QD)), DD.nodes.length && this._scenes.push(DD), this._exportAndAssignCameras(), this._exportAndAssignSkeletons(fD.getNodesSet()), this._babylonScene.animationGroups.length && BI._CreateNodeAndMorphAnimationFromAnimationGroups(this._babylonScene, this._animations, this._nodeMap, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, fD.getNodesSet(), this._options.shouldExportAnimation, this._animationGroupMap)
      }
      _getNodeIndex(DD) {
        return this._nodeMap.get(DD)
      }
      _getAnimationIndex(DD) {
        return this._animationGroupMap.get(DD)
      }
      _getCameraIndex(DD) {
        const CD = this._camerasMap.get(DD);
        if (!CD) return;
        const cD = this._cameras.indexOf(CD);
        return cD >= 0 ? cD : void 0
      }
      _getMaterialIndex(DD) {
        return this._materialMap.get(DD)
      }
      _getRootIndex(DD, CD) {
        switch (DD) {
          case "nodes":
            return this._getNodeIndex(CD);
          case "animations":
            return this._getAnimationIndex(CD);
          case "cameras":
            return this._getCameraIndex(CD);
          case "materials":
            return this._getMaterialIndex(CD);
          case "meshes": {
            const DD = this._getNodeIndex(CD);
            return void 0 === DD ? void 0 : this._nodes[DD]?.mesh
          }
          case "textures":
            return this._materialExporter.getTextureInfo(CD)?.index;
          case "images": {
            const DD = this._materialExporter.getTextureInfo(CD)?.index;
            if (void 0 === DD) return;
            const cD = this._textures[DD];
            for (const CD of ["KHR_texture_basisu", "EXT_texture_webp", "EXT_texture_avif"]) {
              const DD = cD?.extensions?.[CD]?.source;
              if ("number" === typeof DD) return DD
            }
            return cD?.source
          }
          case "samplers": {
            const DD = this._materialExporter.getTextureInfo(CD)?.index;
            return void 0 === DD ? void 0 : this._textures[DD]?.sampler
          }
          case "skins": {
            const DD = this._skinMap.get(CD),
              cD = DD ? this._skins.indexOf(DD) : -1;
            return cD >= 0 ? cD : void 0
          }
          case "scenes":
            return CD === this._babylonScene && this._scenes.length > 0 ? 0 : void 0
        }
      }
      _setNodeExtension(DD, CD, cD) {
        const ID = this._nodes[DD];
        if (!ID) throw new Error(`Cannot write ${CD}: glTF node ${DD} does not exist.`);
        ID.extensions || (ID.extensions = {}), ID.extensions[CD] = cD
      }
      _shouldExportNode(DD) {
        let CD = this._shouldExportNodeMap.get(DD);
        return void 0 === CD && (CD = this._options.shouldExportNode(DD), this._shouldExportNodeMap.set(DD, CD)), CD
      }
      async _exportNodesAsync(DD, CD) {
        const cD = new Array;
        this._exportBuffers(DD, CD);
        for (const ID of DD) await this._exportNodeAsync(ID, cD, CD);
        return cD
      }
      _collectBuffers(DD, CD, cD, ID, pD) {
        if (this._shouldExportNode(DD) && DD instanceof yD.e && DD.geometry) {
          const iD = DD.geometry.getVertexBuffers();
          if (iD)
            for (const ID in iD) {
              if (!dc(ID)) continue;
              const fD = iD[ID];
              pD.setHasVertexColorAlpha(fD, DD.hasVertexAlpha);
              const bD = fD._buffer,
                QD = CD.get(bD) || [];
              CD.set(bD, QD), -1 === QD.indexOf(fD) && QD.push(fD);
              const wD = cD.get(fD) || [];
              cD.set(fD, wD), -1 === wD.indexOf(DD) && wD.push(DD)
            }
          const fD = DD.morphTargetManager;
          if (fD)
            for (let CD = 0; CD < fD.numTargets; CD++) {
              const cD = fD.getTarget(CD),
                pD = ID.get(cD) || [];
              ID.set(cD, pD), -1 === pD.indexOf(DD) && pD.push(DD)
            }
        }
        for (const iD of DD.getChildren()) this._collectBuffers(iD, CD, cD, ID, pD)
      }
      _exportBuffers(DD, CD) {
        const cD = new Map,
          ID = new Map,
          pD = new Map;
        for (const bD of DD) this._collectBuffers(bD, cD, ID, pD, CD);
        const iD = Array.from(cD.keys());
        for (const bD of iD) {
          const DD = bD.getData();
          if (!DD) throw new Error("Buffer data is not available");
          const pD = cD.get(bD);
          if (!pD) continue;
          const iD = pD[0].byteStride;
          if (pD.some((DD => DD.byteStride !== iD))) throw new Error("Vertex buffers pointing to the same buffer must have the same byte stride");
          const fD = hc(DD).slice();
          for (const CD of pD) {
            const DD = ID.get(CD),
              {
                byteOffset: cD,
                byteStride: pD,
                componentCount: iD,
                type: bD,
                count: QD,
                normalized: wD,
                kind: BD
              } = Rc(CD, DD);
            switch (BD) {
              case SD.e.NormalKind:
              case SD.e.TangentKind:
                (0, Kc.j)(fD, cD, pD, iD, bD, QD, wD, (DD => {
                  const CD = Math.sqrt(DD[0] * DD[0] + DD[1] * DD[1] + DD[2] * DD[2]);
                  if (CD > 0) {
                    const cD = 1 / CD;
                    DD[0] *= cD, DD[1] *= cD, DD[2] *= cD
                  }
                }));
                break;
              case SD.e.ColorKind: {
                const CD = DD.filter((DD => DD.material instanceof iI.StandardMaterial || null == DD.material)).length;
                if (0 == CD) break;
                if (CD != DD.length) {
                  xD.e.Warn("Not converting vertex color space, as buffer is shared by StandardMaterials and other material types. Results may look incorrect.");
                  break
                }
                bD == SD.e.UNSIGNED_BYTE && xD.e.Warn("Converting uint8 vertex colors to linear space. Results may look incorrect.");
                const ID = new oD.Color3,
                  BD = new oD.c,
                  yD = this._babylonScene.DZ().useExactSrgbConversions;
                (0, Kc.j)(fD, cD, pD, iD, bD, QD, wD, (DD => {
                  3 === DD.length ? (ID.QCD(DD, 0), ID.toLinearSpaceToRef(ID, yD), ID.toArray(DD, 0)) : (BD.QCD(DD, 0), BD.toLinearSpaceToRef(BD, yD), BD.toArray(DD, 0))
                }))
              }
            }
          }
          if (CD.convertToRightHanded) {
            for (const DD of pD) {
              const CD = ID.get(DD),
                {
                  byteOffset: cD,
                  byteStride: pD,
                  componentCount: iD,
                  type: bD,
                  count: QD,
                  normalized: wD,
                  kind: BD
                } = Rc(DD, CD);
              switch (BD) {
                case SD.e.PositionKind:
                case SD.e.NormalKind:
                case SD.e.TangentKind:
                  (0, Kc.j)(fD, cD, pD, iD, bD, QD, wD, (DD => {
                    DD[0] = -DD[0]
                  }))
              }
            }
            CD.convertedToRightHandedBuffers.set(bD, fD)
          }
          const QD = this._bufferManager.createBufferView(fD, iD);
          CD.setVertexBufferView(bD, QD);
          const wD = new Map;
          for (const CD of pD) {
            const DD = ID.get(CD),
              {
                kind: cD,
                totalVertices: pD
              } = Rc(CD, DD);
            switch (cD) {
              case SD.e.MatricesIndicesKind:
              case SD.e.MatricesIndicesExtraKind:
                if (CD.type == SD.e.FLOAT) {
                  const DD = CD.getFloatData(pD);
                  null !== DD && wD.set(CD, DD)
                }
            }
          }
          0 !== wD.size && xD.e.Warn("Joint indices conversion needed: some joint indices are stored as floats in Babylon but GLTF requires UNSIGNED BYTES. We will perform the conversion but this might lead to unused data in the buffer.");
          const BD = Array.from(wD.keys());
          for (const cD of BD) {
            const DD = wD.get(cD);
            if (!DD) continue;
            const ID = DD.some((DD => DD >= 256)),
              pD = new(ID ? Uint16Array : Uint8Array)(DD.length);
            for (let CD = 0; CD < DD.length; CD++) pD[CD] = DD[CD];
            const iD = this._bufferManager.createBufferView(pD, 4 * (ID ? 2 : 1));
            CD.setRemappedBufferView(bD, cD, iD)
          }
        }
        const fD = Array.from(pD.keys());
        for (const bD of fD) {
          const DD = pD.get(bD);
          if (!DD) continue;
          const cD = yI(bD, DD[0], this._bufferManager, this._bufferViews, this._accessors, CD.convertToRightHanded);
          for (const ID of DD) CD.bindMorphDataToMesh(ID, cD)
        }
      }
      async _exportNodeAsync(DD, CD, cD) {
        let ID = this._nodeMap.get(DD);
        if (void 0 !== ID) return void(CD.includes(ID) || CD.push(ID));
        const pD = await this._createNodeAsync(DD, cD);
        if (pD) {
          ID = this._nodes.length, this._nodes.push(pD), this._nodeMap.set(DD, ID), cD.pushExportedNode(DD), CD.push(ID);
          const iD = {
              name: "runtime animations",
              channels: [],
              samplers: []
            },
            fD = [];
          this._babylonScene.animationGroups.length || (BI._CreateMorphTargetAnimationFromMorphTargetAnimations(DD, iD, fD, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, cD.convertToRightHanded, this._options.shouldExportAnimation), DD.animations.length && BI._CreateNodeAnimationFromNodeAnimations(DD, iD, fD, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, cD.convertToRightHanded, this._options.shouldExportAnimation)), iD.channels.length && iD.samplers.length && this._animations.push(iD), fD.forEach((DD => {
            DD.channels.length && DD.samplers.length && this._animations.push(DD)
          }))
        }
        const iD = pD ? [] : CD;
        for (const fD of DD.getChildren()) await this._exportNodeAsync(fD, iD, cD);
        pD && iD.length && (pD.children = iD)
      }
      async _createNodeAsync(DD, CD) {
        if (!this._shouldExportNode(DD)) return null;
        const cD = {};
        if (DD.name && (cD.name = DD.name), DD.metadata) {
          const CD = this._options.metadataSelector(DD.metadata);
          CD && (cD.extras = CD)
        }
        if (DD instanceof BD.e && (this._setNodeTransformation(cD, DD, CD.convertToRightHanded), DD instanceof yD.e)) {
          const ID = DD instanceof MD.b ? DD.OID : DD;
          if (ID.IH && ID.IH.length > 0 && (cD.mesh = await this._exportMeshAsync(ID, CD)), DD.skeleton) {
            const CD = this._skinMap.get(DD.skeleton);
            void 0 !== CD && (void 0 === this._nodesSkinMap.get(CD) && this._nodesSkinMap.set(CD, []), this._nodesSkinMap.get(CD)?.push(cD))
          }
        }
        if (DD instanceof ac.e) {
          const ID = this._camerasMap.get(DD);
          if (ID) {
            void 0 === this._nodesCameraMap.get(ID) && this._nodesCameraMap.set(ID, []), this._setCameraTransformation(cD, DD, CD.convertToRightHanded);
            const pD = DD.parent;
            if (null !== pD && uc(DD, pD)) {
              const DD = this._nodeMap.get(pD);
              if (void 0 !== DD) {
                const CD = this._nodes[DD];
                return ec(cD, CD), this._nodesCameraMap.get(ID)?.push(CD), null
              }
            }
            this._nodesCameraMap.get(ID)?.push(cD)
          }
        }
        return await this._extensionsPostExportNodeAsync("exportNodeAsync", cD, DD, this._nodeMap, CD.convertToRightHanded) ? cD : (xD.e.Warn(`Not exporting node ${DD.name}`), null)
      }
      _exportIndices(DD, CD, cD, ID, pD, fD, bD, QD, wD) {
        let SD = null;
        wD.mode = function(DD) {
          switch (DD) {
            case iD.d.TriangleFillMode:
              return 4;
            case iD.d.TriangleStripDrawMode:
              return 5;
            case iD.d.TriangleFanDrawMode:
              return 6;
            case iD.d.PointListDrawMode:
            case iD.d.PointFillMode:
              return 0;
            case iD.d.LineLoopDrawMode:
              return 2;
            case iD.d.LineListDrawMode:
              return 1;
            case iD.d.LineStripDrawMode:
              return 3
          }
          throw new Error(`Unknown fill mode: ${DD}`)
        }(fD);
        const BD = bD !== iD.d.CounterClockWiseSideOrientation && function(DD) {
          switch (DD) {
            case iD.d.TriangleFillMode:
            case iD.d.TriangleStripDrawMode:
            case iD.d.TriangleFanDrawMode:
              return !0
          }
          return !1
        }(fD);
        if (BD) {
          if (fD === iD.d.TriangleStripDrawMode || fD === iD.d.TriangleFanDrawMode) throw new Error("Triangle strip/fan fill mode is not implemented");
          const bD = CD ? new Uint32Array(ID) : new Uint16Array(ID);
          if (DD)
            for (let CD = 0; CD + 2 < ID; CD += 3) bD[CD] = DD[cD + CD] + pD, bD[CD + 1] = DD[cD + CD + 2] + pD, bD[CD + 2] = DD[cD + CD + 1] + pD;
          else
            for (let DD = 0; DD + 2 < ID; DD += 3) bD[DD] = DD, bD[DD + 1] = DD + 2, bD[DD + 2] = DD + 1;
          SD = bD
        } else if (DD && 0 !== pD) {
          const iD = CD ? new Uint32Array(ID) : new Uint16Array(ID);
          for (let CD = 0; CD < ID; CD++) iD[CD] = DD[cD + CD] + pD;
          SD = iD
        } else DD && (SD = function(DD, CD, cD, ID) {
          let pD = DD;
          return 0 === CD && cD === DD.length || (pD = Array.isArray(DD) ? DD.slice(CD, CD + cD) : DD.subarray(CD, CD + cD)), pD instanceof Int32Array ? new Uint32Array(pD.buffer, pD.byteOffset, pD.length) : Array.isArray(pD) ? ID ? new Uint32Array(pD) : new Uint16Array(pD) : pD
        }(DD, cD, ID, CD));
        if (SD) {
          let iD = QD.getIndicesAccessor(DD, cD, ID, pD, BD);
          if (void 0 === iD) {
            const fD = this._bufferManager.createBufferView(SD),
              bD = CD ? 5125 : 5123;
            this._accessors.push(this._bufferManager.createAccessor(fD, "SCALAR", bD, ID, 0)), iD = this._accessors.length - 1, QD.setIndicesAccessor(DD, cD, ID, pD, BD, iD)
          }
          wD.indices = iD
        }
      }
      _exportVertexBuffer(DD, CD, cD, ID, pD, iD) {
        const fD = DD.getKind();
        if (!dc(fD)) return;
        if (fD.startsWith("uv") && !this._options.exportUnusedUVs && (!CD || !this._materialNeedsUVsSet.has(CD))) return;
        let bD = pD.getVertexAccessor(DD, cD, ID);
        if (void 0 === bD) {
          const CD = pD.convertedToRightHandedBuffers.get(DD._buffer) || DD._buffer.getData(),
            iD = fD === SD.e.PositionKind ? function(DD, CD, cD, ID) {
              const {
                byteOffset: pD,
                byteStride: iD,
                type: fD,
                normalized: bD
              } = CD, QD = CD.getSize(), wD = new Array(QD).fill(1 / 0), SD = new Array(QD).fill(-1 / 0);
              return (0, Kc.j)(DD, pD + cD * iD, iD, QD, fD, ID * QD, bD, (DD => {
                for (let CD = 0; CD < QD; CD++) wD[CD] = Math.min(wD[CD], DD[CD]), SD[CD] = Math.max(SD[CD], DD[CD])
              })), {
                min: wD,
                max: SD
              }
            }(CD, DD, cD, ID) : void 0,
            QD = (fD === SD.e.MatricesIndicesKind || fD === SD.e.MatricesIndicesExtraKind) && DD.type === SD.e.FLOAT,
            wD = QD ? SD.e.UNSIGNED_BYTE : DD.type,
            BD = QD ? void 0 : DD.normalized,
            yD = QD ? pD.getRemappedBufferView(DD._buffer, DD) : pD.getVertexBufferView(DD._buffer),
            MD = DD.byteOffset + cD * DD.byteStride;
          this._accessors.push(this._bufferManager.createAccessor(yD, function(DD, CD) {
            if (DD == SD.e.ColorKind) return CD ? "VEC4" : "VEC3";
            switch (DD) {
              case SD.e.PositionKind:
              case SD.e.NormalKind:
                return "VEC3";
              case SD.e.TangentKind:
              case SD.e.MatricesIndicesKind:
              case SD.e.MatricesIndicesExtraKind:
              case SD.e.MatricesWeightsKind:
              case SD.e.MatricesWeightsExtraKind:
                return "VEC4";
              case SD.e.UVKind:
              case SD.e.UV2Kind:
              case SD.e.UV3Kind:
              case SD.e.UV4Kind:
              case SD.e.UV5Kind:
              case SD.e.UV6Kind:
                return "VEC2"
            }
            throw new Error(`Unknown kind ${DD}`)
          }(fD, pD.hasVertexColorAlpha(DD)), wD, ID, MD, iD, BD)), bD = this._accessors.length - 1, pD.setVertexAccessor(DD, cD, ID, bD)
        }
        iD.attributes[function(DD) {
          switch (DD) {
            case SD.e.PositionKind:
              return "POSITION";
            case SD.e.NormalKind:
              return "NORMAL";
            case SD.e.TangentKind:
              return "TANGENT";
            case SD.e.ColorKind:
              return "COLOR_0";
            case SD.e.UVKind:
              return "TEXCOORD_0";
            case SD.e.UV2Kind:
              return "TEXCOORD_1";
            case SD.e.UV3Kind:
              return "TEXCOORD_2";
            case SD.e.UV4Kind:
              return "TEXCOORD_3";
            case SD.e.UV5Kind:
              return "TEXCOORD_4";
            case SD.e.UV6Kind:
              return "TEXCOORD_5";
            case SD.e.MatricesIndicesKind:
              return "JOINTS_0";
            case SD.e.MatricesIndicesExtraKind:
              return "JOINTS_1";
            case SD.e.MatricesWeightsKind:
              return "WEIGHTS_0";
            case SD.e.MatricesWeightsExtraKind:
              return "WEIGHTS_1"
          }
          throw new Error(`Unknown kind: ${DD}`)
        }(fD)] = bD
      }
      async _exportMaterialAsync(DD, CD, cD, ID) {
        let pD = this._materialMap.get(DD);
        if (void 0 === pD) {
          const ID = CD && Object.keys(CD).some((DD => DD.startsWith("uv")));
          if ((DD = DD instanceof pI.c ? DD.Z2[cD.materialIndex] : DD) instanceof nC) pD = await this._materialExporter.exportPBRMaterialAsync(DD, ID);
          else if (DD instanceof iI.StandardMaterial) pD = await this._materialExporter.exportStandardMaterialAsync(DD, ID);
          else {
            if (!(DD instanceof AC)) return void xD.e.Warn(`Unsupported material '${DD.name}' with type ${DD.getClassName()}`);
            pD = await this._materialExporter.exportOpenPBRMaterialAsync(DD, ID)
          }
          this._materialMap.set(DD, pD)
        }
        ID.material = pD
      }
      async _exportMeshAsync(DD, CD) {
        let cD = CD.getMesh(DD);
        if (void 0 !== cD) return cD;
        const ID = {
          primitives: []
        };
        cD = this._meshes.length, this._meshes.push(ID), CD.setMesh(DD, cD);
        const pD = DD.isUnIndexed ? null : DD.ncD(),
          fD = DD.geometry?.getVertexBuffers(),
          bD = CD.getMorphTargetsFromMesh(DD),
          QD = DD instanceof MI.e,
          wD = DD instanceof aI,
          SD = DD.IH;
        if (fD && SD && SD.length > 0)
          for (const BD of SD) {
            const cD = {
                attributes: {}
              },
              SD = BD.iZ() || this._babylonScene.defaultMaterial;
            if (wD) {
              const CD = {
                  name: SD.name
                },
                ID = DD,
                pD = oD.Color3.White(),
                iD = ID.material?.alpha ?? 1,
                fD = ID.greasedLineMaterial?.color ?? pD;
              (!fD.equalsWithEpsilon(pD, Vc.c) || iD < 1) && (CD.pbrMetallicRoughness = {
                baseColorFactor: [...fD.XcD(), iD]
              }), this._materials.push(CD), cD.material = this._materials.length - 1
            } else if (QD) {
              const CD = {
                  name: SD.name
                },
                ID = DD;
              (!ID.color.equalsWithEpsilon(oD.Color3.White(), Vc.c) || ID.alpha < 1) && (CD.pbrMetallicRoughness = {
                baseColorFactor: [...ID.color.XcD(), ID.alpha]
              }), this._materials.push(CD), cD.material = this._materials.length - 1
            } else await this._exportMaterialAsync(SD, fD, BD, cD);
            const yD = QD || wD ? iD.d.LineListDrawMode : DD.overrideRenderingFillMode ?? SD.fillMode;
            let MD = SD._getEffectiveOrientation(DD);
            CD.wasAddedByNoopNode && !DD.hq().useRightHandedSystem && (MD = MD === iD.d.ClockWiseSideOrientation ? iD.d.CounterClockWiseSideOrientation : iD.d.ClockWiseSideOrientation), this._exportIndices(pD, pD ? (0, Kc.c)(pD, BD.indexCount, BD.indexStart, BD.verticesStart) : BD.verticesCount > 65535, pD ? BD.indexStart : BD.verticesStart, pD ? BD.indexCount : BD.verticesCount, -BD.verticesStart, yD, MD, CD, cD);
            for (const DD of Object.values(fD)) this._exportVertexBuffer(DD, SD, BD.verticesStart, BD.verticesCount, CD, cD);
            if (bD) {
              cD.targets = [];
              for (const DD of bD) cD.targets.push(DD.attributes)
            }
            ID.primitives.push(cD), this._extensionsPostExportMeshPrimitive(cD)
          }
        if (bD) {
          ID.weights = [], ID.extras || (ID.extras = {}), ID.extras.targetNames = [];
          for (const DD of bD) ID.weights.push(DD.influence), ID.extras.targetNames.push(DD.name)
        }
        return cD
      }
    }
    zI._ExtensionNames = new Array, zI._ExtensionFactories = {}, zI._ExtensionOrders = {};
    class jI {
      static async GLTFAsync(DD, CD, cD) {
        cD && cD.exportWithoutWaitingForScene || await DD.whenReadyAsync();
        const ID = new zI(DD, cD),
          pD = await ID.generateGLTFAsync(CD.replace(/\.[^/.]+$/, ""));
        return ID.dispose(), pD
      }
      static async GLBAsync(DD, CD, cD) {
        cD && cD.exportWithoutWaitingForScene || await DD.whenReadyAsync();
        const ID = new zI(DD, cD),
          pD = await ID.generateGLBAsync(CD.replace(/\.[^/.]+$/, ""));
        return ID.dispose(), pD
      }
    }
    const lI = "EXT_mesh_gpu_instancing";

    function LI(DD, CD) {
      const cD = new Float32Array(3 * CD);
      for (let ID = 0; ID < CD; ID++) cD[3 * ID + 0] = DD[4 * ID + 0], cD[3 * ID + 1] = DD[4 * ID + 1], cD[3 * ID + 2] = DD[4 * ID + 2];
      return cD
    }
    class TI {
      constructor(DD) {
        this.name = lI, this.enabled = !0, this.required = !1, this._instanceColorWarned = !1, this._wasUsed = !1, this._exporter = DD
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportNodeAsync(DD, CD, cD, ID, pD, iD) {
        return await new Promise((DD => {
          if (CD && cD instanceof nI.d && cD.hasThinInstances && this._exporter) {
            this._wasUsed = !0;
            const DD = TD.p.Zero(),
              ID = TD.h.Identity(),
              fD = TD.p.One(),
              bD = cD.thinInstanceGetWorldMatrices(),
              QD = TD.l.cZ[2],
              wD = TD.l.Quaternion[1],
              SD = TD.l.cZ[3];
            let BD = !1,
              yD = !1,
              MD = !1;
            const tD = new Float32Array(3 * cD.Q0),
              ZD = new Float32Array(4 * cD.Q0),
              oD = new Float32Array(3 * cD.Q0);
            let vD = 0;
            for (const CD of bD) CD.decompose(SD, wD, QD), pD && (Wc(QD), sc(wD)), tD.set(QD.XcD(), 3 * vD), ZD.set(wD.normalize().XcD(), 4 * vD), oD.set(SD.XcD(), 3 * vD), BD = BD || !QD.equalsWithEpsilon(DD), yD = yD || !wD.equalsWithEpsilon(ID), MD = MD || !SD.equalsWithEpsilon(fD), vD++;
            const ND = {
              attributes: {}
            };
            BD && (ND.attributes.TRANSLATION = this._buildAccessor(tD, "VEC3", cD.Q0, iD)), yD && (ND.attributes.ROTATION = this._buildAccessor(ZD, "VEC4", cD.Q0, iD)), MD && (ND.attributes.SCALE = this._buildAccessor(oD, "VEC3", cD.Q0, iD));
            let gD = cD._userThinInstanceBuffersStorage?.data?.instanceColor;
            if (gD) {
              const DD = cD.Q0,
                CD = "VEC3";
              cD.hasVertexAlpha && gD.length === 4 * DD ? (this._instanceColorWarned || (xD.e.Warn("EXT_mesh_gpu_instancing: Exporting instance colors as RGB, alpha channel of instance color is not exported"), this._instanceColorWarned = !0), gD = LI(gD, DD)) : gD.length === 4 * DD && (gD = LI(gD, DD)), gD.length === 3 * DD && (ND.attributes._COLOR_0 = this._buildAccessor(gD, CD, DD, iD))
            }
            CD.extensions = CD.extensions || {}, CD.extensions[lI] = ND
          }
          DD(CD)
        }))
      }
      _buildAccessor(DD, CD, cD, ID) {
        const pD = ID.createBufferView(DD),
          iD = ID.createAccessor(pD, CD, 5126, cD);
        return this._exporter._accessors.push(iD), this._exporter._accessors.length - 1
      }
    }
    let GI = !1;

    function RI() {
      GI || (GI = !0, zI.RegisterExtension(lI, (DD => new TI(DD))))
    }
    cD(39602);
    RI();
    var kI = cD(40963);

    function dI(DD, CD, cD, ID) {
      const pD = DD;
      let iD = null,
        fD = null,
        bD = null,
        QD = null;
      const wD = {},
        SD = CD.find((DD => "POSITION" === DD.dracoName));
      if (!SD) throw new Error("Draco: Missing position attribute for encoding.");
      if (!cD) {
        const DD = SD.data.length / SD.size;
        cD = new(DD > 65535 ? Uint32Array : Uint16Array)(DD);
        for (let CD = 0; CD < DD; CD++) cD[CD] = CD
      }
      try {
        iD = new pD.Encoder, fD = new pD.MeshBuilder, bD = new pD.Mesh, fD.AddFacesToMesh(bD, cD.length / 3, cD);
        const DD = new Map([
          [Float32Array, (DD, CD, cD, ID, pD, iD) => DD.AddFloatAttribute(CD, cD, ID, pD, iD)],
          [Uint32Array, (DD, CD, cD, ID, pD, iD) => DD.AddUInt32Attribute(CD, cD, ID, pD, iD)],
          [Uint16Array, (DD, CD, cD, ID, pD, iD) => DD.AddUInt16Attribute(CD, cD, ID, pD, iD)],
          [Uint8Array, (DD, CD, cD, ID, pD, iD) => DD.AddUInt8Attribute(CD, cD, ID, pD, iD)],
          [Int32Array, (DD, CD, cD, ID, pD, iD) => DD.AddInt32Attribute(CD, cD, ID, pD, iD)],
          [Int16Array, (DD, CD, cD, ID, pD, iD) => DD.AddInt16Attribute(CD, cD, ID, pD, iD)],
          [Int8Array, (DD, CD, cD, ID, pD, iD) => DD.AddInt8Attribute(CD, cD, ID, pD, iD)]
        ]);
        for (const cD of CD) {
          cD.data instanceof Uint8ClampedArray && (cD.data = new Uint8Array(cD.data));
          const CD = DD.get(cD.data.constructor),
            QD = cD.data.length / cD.size;
          wD[cD.kind] = CD(fD, bD, pD[cD.dracoName], QD, cD.size, cD.data), ID.quantizationBits && ID.quantizationBits[cD.dracoName] && iD.SetAttributeQuantization(pD[cD.dracoName], ID.quantizationBits[cD.dracoName])
        }
        ID.method && iD.SetEncodingMethod(pD[ID.method]), void 0 !== ID.encodeSpeed && void 0 !== ID.decodeSpeed && iD.SetSpeedOptions(ID.encodeSpeed, ID.decodeSpeed), QD = new pD.DracoInt8Array;
        const SD = iD.EncodeMeshToDracoBuffer(bD, QD);
        if (SD <= 0) throw new Error("Draco: Failed to encode.");
        const BD = new Int8Array(SD);
        for (let CD = 0; CD < SD; CD++) BD[CD] = QD.GetValue(CD);
        return {
          data: BD,
          attributeIds: wD
        }
      } finally {
        bD && pD.destroy(bD), fD && pD.destroy(fD), iD && pD.destroy(iD), QD && pD.destroy(QD)
      }
    }

    function YI() {
      let DD;
      onmessage = CD => {
        const cD = CD.data;
        switch (cD.id) {
          case "init": {
            cD.url && importScripts(cD.url);
            const CD = cD.wasmBinary ? {
              wasmBinary: cD.wasmBinary
            } : {};
            DD = DracoEncoderModule(CD), postMessage({
              id: "initDone"
            });
            break
          }
          case "encodeMesh":
            if (!DD) throw new Error("Draco: Encoder module is not available.");
            DD.then((DD => {
              const CD = dI(DD, cD.attributes, cD.indices, cD.options);
              postMessage({
                id: "encodeMeshSuccess",
                encodedMeshData: CD
              }, CD ? [CD.data.buffer] : void 0)
            })).catch((DD => {
              postMessage({
                id: "encodeMeshError",
                errorMessage: DD.message
              })
            }))
        }
      }
    }
    class WI {
      constructor(DD) {
        if (DD.workerPool) return void(this._workerPoolPromise = Promise.resolve(DD.workerPool));
        const CD = DD.wasmBinary,
          cD = DD.numWorkers ?? ("object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1),
          ID = cD && "function" === typeof Worker && "function" === typeof URL,
          pD = ID || !DD.jsModule,
          iD = DD.wasmUrl && DD.wasmBinaryUrl && "object" === typeof WebAssembly ? {
            url: pD ? PC.g.GetBabylonScriptURL(DD.wasmUrl, !0) : "",
            wasmBinaryPromise: CD ? Promise.resolve(CD) : PC.g.LoadFileAsync(PC.g.GetBabylonScriptURL(DD.wasmBinaryUrl, !0))
          } : {
            url: pD ? PC.g.GetBabylonScriptURL(DD.fallbackUrl) : "",
            wasmBinaryPromise: Promise.resolve(void 0)
          };
        ID ? this._workerPoolPromise = iD.wasmBinaryPromise.then((DD => {
          const CD = this._getWorkerContent(),
            ID = URL.createObjectURL(new Blob([CD], {
              type: "application/javascript"
            }));
          return new kI.b(cD, (() => async function(DD, CD, cD) {
            return await new Promise(((ID, pD) => {
              const iD = CD => {
                  DD.removeEventListener("error", iD), DD.removeEventListener("message", fD), pD(CD)
                },
                fD = CD => {
                  "initDone" === CD.data.id && (DD.removeEventListener("error", iD), DD.removeEventListener("message", fD), ID(DD))
                };
              if (DD.addEventListener("error", iD), DD.addEventListener("message", fD), CD) {
                const ID = CD.slice(0);
                DD.postMessage({
                  id: "init",
                  url: cD,
                  wasmBinary: ID
                }, [ID])
              } else DD.postMessage({
                id: "init",
                url: cD
              })
            }))
          }(new Worker(ID), DD, iD.url)))
        })) : this._modulePromise = iD.wasmBinaryPromise.then((async CD => {
          if (!this._isModuleAvailable() && !DD.jsModule) {
            if (!iD.url) throw new Error("Draco codec module is not available");
            await PC.g.LoadBabylonScriptAsync(iD.url)
          }
          return await this._createModuleAsync(CD, DD.jsModule)
        }))
      }
      async whenReadyAsync() {
        this._workerPoolPromise ? await this._workerPoolPromise : this._modulePromise && await this._modulePromise
      }
      dispose() {
        this._workerPoolPromise && this._workerPoolPromise.then((DD => {
          DD.dispose()
        })), delete this._workerPoolPromise, delete this._modulePromise
      }
    }

    function sI() {
      const DD = DD => !!DD && "object" === typeof DD;
      for (var CD = arguments.length, cD = new Array(CD), ID = 0; ID < CD; ID++) cD[ID] = arguments[ID];
      return cD.reduce(((CD, cD) => {
        const ID = Object.keys(cD);
        for (const pD of ID) {
          const ID = CD[pD],
            iD = cD[pD];
          Array.isArray(ID) && Array.isArray(iD) ? CD[pD] = ID.concat(iD) : DD(ID) && DD(iD) ? CD[pD] = sI(ID, iD) : CD[pD] = iD
        }
        return CD
      }), {})
    }

    function EI(DD) {
      return DD === GD.k.PositionKind ? "POSITION" : DD === GD.k.NormalKind ? "NORMAL" : DD === GD.k.ColorKind ? "COLOR" : DD.startsWith(GD.k.UVKind) ? "TEX_COORD" : "GENERIC"
    }
    const eI = {
      decodeSpeed: 5,
      encodeSpeed: 5,
      method: "MESH_EDGEBREAKER_ENCODING",
      quantizationBits: {
        POSITION: 14,
        NORMAL: 10,
        COLOR: 8,
        TEX_COORD: 12,
        GENERIC: 12
      }
    };
    class uI extends WI {
      static get DefaultAvailable() {
        return !!((DD = uI.DefaultConfiguration).wasmUrl && (DD.wasmBinary || DD.wasmBinaryUrl) && "object" === typeof WebAssembly || DD.fallbackUrl);
        var DD
      }
      static get Default() {
        return uI._Default ?? (uI._Default = new uI), uI._Default
      }
      static ResetDefault(DD) {
        uI._Default && (DD || uI._Default.dispose(), uI._Default = null)
      }
      _isModuleAvailable() {
        return "undefined" !== typeof DracoEncoderModule
      }
      async _createModuleAsync(DD, CD) {
        return {
          module: await (CD || DracoEncoderModule)({
            wasmBinary: DD
          })
        }
      }
      _getWorkerContent() {
        return `${dI}(${YI})()`
      }
      constructor() {
        super(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uI.DefaultConfiguration)
      }
      async _encodeAsync(DD, CD, cD) {
        const ID = cD ? sI(eI, cD) : eI;
        if (this._workerPoolPromise) {
          const cD = await this._workerPoolPromise;
          return await new Promise(((pD, iD) => {
            cD.push(((cD, fD) => {
              const bD = DD => {
                  cD.removeEventListener("error", bD), cD.removeEventListener("message", QD), iD(DD), fD()
                },
                QD = DD => {
                  "encodeMeshSuccess" === DD.data.id ? (cD.removeEventListener("error", bD), cD.removeEventListener("message", QD), pD(DD.data.encodedMeshData), fD()) : "encodeMeshError" === DD.data.id && (cD.removeEventListener("error", bD), cD.removeEventListener("message", QD), iD(new Error(DD.data.errorMessage)), fD())
                };
              cD.addEventListener("error", bD), cD.addEventListener("message", QD);
              const wD = [];
              for (const CD of DD) wD.push(CD.data.buffer);
              CD && wD.push(CD.buffer), cD.postMessage({
                id: "encodeMesh",
                attributes: DD,
                indices: CD,
                options: ID
              }, wD)
            }))
          }))
        }
        if (this._modulePromise) {
          return dI((await this._modulePromise).module, DD, CD, ID)
        }
        throw new Error("Draco: Encoder module is not available")
      }
      async encodeMeshAsync(DD, CD) {
        if (0 == DD.getTotalVertices()) throw new Error("Draco: Cannot encode geometry with no vertices.");
        DD instanceof nI.d && DD.morphTargetManager && "MESH_EDGEBREAKER_ENCODING" === CD?.method && (xD.e.Warn("Draco: Cannot use EDGEBREAKER encoding method with morph targets. Falling back to SEQUENTIAL method."), CD.method = "MESH_SEQUENTIAL_ENCODING");
        const cD = function(DD) {
            let CD = DD.ncD(void 0, !0);
            return !CD || CD instanceof Uint32Array || CD instanceof Uint16Array || (CD = ((0, Kc.c)(CD, CD.length) ? Uint32Array : Uint16Array).from(CD)), CD
          }(DD),
          ID = function(DD, CD) {
            const cD = [];
            for (const ID of DD.getVerticesDataKinds()) {
              if (CD?.includes(ID)) {
                if (ID === GD.k.PositionKind) throw new Error("Draco: Cannot exclude position attribute from encoding.");
                continue
              }
              const pD = DD.getVertexBuffer(ID),
                iD = pD.getSize(),
                fD = (0, Kc.u)(pD.getData(), iD, pD.type, pD.byteOffset, pD.byteStride, DD.getTotalVertices(), !0);
              cD.push({
                kind: ID,
                dracoName: EI(ID),
                size: iD,
                data: fD
              })
            }
            return cD
          }(DD, CD?.excludedAttributes);
        return await this._encodeAsync(ID, cD, CD)
      }
    }
    uI.DefaultConfiguration = {
      wasmUrl: `${PC.g._DefaultCdnUrl}/draco_encoder_wasm_wrapper.js`,
      wasmBinaryUrl: `${PC.g._DefaultCdnUrl}/draco_encoder.wasm`,
      fallbackUrl: `${PC.g._DefaultCdnUrl}/draco_encoder.js`
    }, uI._Default = null;
    const hI = "KHR_draco_mesh_compression";
    class rI {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(DD) {
        this.name = hI, this.required = !0, this._bufferViewsUsed = new Set, this._accessorsUsed = new Set, this._encodePromises = [], this._wasUsed = !1, this.enabled = "Draco" === DD.options.meshCompressionMethod && uI.DefaultAvailable
      }
      dispose() {}
      postExportMeshPrimitive(DD, CD, cD) {
        if (!this.enabled) return;
        if (4 !== DD.mode && 5 !== DD.mode) return void xD.e.Warn("Cannot compress primitive with mode " + DD.mode + ".");
        const ID = [],
          pD = [];
        let iD = null;
        if (void 0 !== DD.indices) {
          const fD = cD[DD.indices],
            bD = CD.getBufferView(fD);
          iD = CD.getData(bD).slice(), ID.push(bD), pD.push(fD)
        }
        const fD = [];
        for (const [SD, BD] of Object.entries(DD.attributes)) {
          const DD = cD[BD],
            iD = CD.getBufferView(DD),
            QD = kc(DD.type),
            wD = (0, Kc.u)(CD.getData(iD), QD, DD.componentType, DD.byteOffset || 0, iD.byteStride || (0, Kc.r)(DD.componentType) * QD, DD.count, !0);
          fD.push({
            kind: SD,
            dracoName: (bD = SD, "POSITION" === bD ? "POSITION" : "NORMAL" === bD ? "NORMAL" : bD.startsWith("COLOR") ? "COLOR" : bD.startsWith("TEXCOORD") ? "TEX_COORD" : "GENERIC"),
            size: kc(DD.type),
            data: wD
          }), ID.push(iD), pD.push(DD)
        }
        var bD;
        const QD = {
            method: DD.targets ? "MESH_SEQUENTIAL_ENCODING" : "MESH_EDGEBREAKER_ENCODING"
          },
          wD = uI.Default._encodeAsync(fD, iD, QD).then((cD => {
            const iD = {
                bufferView: -1,
                attributes: cD.attributeIds
              },
              fD = CD.createBufferView(cD.data);
            CD.setBufferView(iD, fD);
            for (const DD of ID) this._bufferViewsUsed.add(DD);
            for (const DD of pD) this._accessorsUsed.add(DD);
            DD.extensions || (DD.extensions = {}), DD.extensions[hI] = iD
          })).catch((DD => {
            xD.e.Error("KHR_draco_mesh_compression: Failed to export Draco-encoded primitive. Resulting glTF may be invalid. " + DD.message)
          }));
        this._encodePromises.push(wD), this._wasUsed = !0
      }
      async preGenerateBinaryAsync(DD) {
        this.enabled && (await Promise.all(this._encodePromises), this._bufferViewsUsed.forEach((CD => {
          DD.getPropertiesWithBufferView(CD).every((DD => this._accessorsUsed.has(DD))) && DD.removeBufferView(CD)
        })), this._bufferViewsUsed.clear(), this._accessorsUsed.clear())
      }
    }
    let AI = !1;

    function FI() {
      AI || (AI = !0, zI.RegisterExtension(hI, (DD => new rI(DD))))
    }
    FI();
    var Dp = cD(40636);
    const Cp = "KHR_lights_punctual",
      cp = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        range: Number.MAX_VALUE
      },
      Ip = {
        innerConeAngle: 0,
        outerConeAngle: Math.PI / 4
      },
      pp = TD.p.Backward();
    class ip {
      constructor(DD) {
        this.name = Cp, this.enabled = !0, this.required = !1, this._exporter = DD
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[Cp] = this._lights
      }
      async postExportNodeAsync(DD, CD, cD, ID, pD) {
        return await new Promise((iD => {
          if (!(cD instanceof SI.b)) return void iD(CD);
          const fD = cD.getTypeID() == SI.b.LIGHTTYPEID_POINTLIGHT ? "point" : cD.getTypeID() == SI.b.LIGHTTYPEID_DIRECTIONALLIGHT ? "directional" : cD.getTypeID() == SI.b.LIGHTTYPEID_SPOTLIGHT ? "spot" : null;
          if (!fD || !(cD instanceof Dp.b)) return xD.e.Warn(`${DD}: Light ${cD.name} is not supported in ${Cp}`), void iD(CD);
          if (cD.falloffType !== SI.b.FALLOFF_GLTF && xD.e.Warn(`${DD}: Light falloff for ${cD.name} does not match the ${Cp} specification!`), !cD.position.wfD(0, 0, 0)) {
            const DD = TD.l.cZ[0].YCD(cD.position);
            pD && Wc(DD), CD.translation = DD.XcD()
          }
          if ("point" !== fD) {
            const DD = cD.direction.normalizeToRef(TD.l.cZ[0]);
            pD && Wc(DD);
            const ID = TD.h.FromUnitVectorsToRef(pp, DD, TD.l.Quaternion[0]);
            TD.h.IsIdentity(ID) || (CD.rotation = ID.XcD())
          }
          const bD = {
            type: fD,
            name: cD.name,
            color: cD.diffuse.XcD(),
            intensity: cD.intensity,
            range: cD.range
          };
          if (rc(bD, cp), "spot" === fD) {
            const DD = cD;
            bD.spot = {
              innerConeAngle: DD.innerAngle / 2,
              outerConeAngle: DD.angle / 2
            }, rc(bD.spot, Ip)
          }
          this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(bD);
          const QD = {
              light: this._lights.lights.length - 1
            },
            wD = cD.parent;
          if (wD && uc(cD, wD)) {
            const DD = ID.get(wD);
            if (DD) {
              const cD = this._exporter._nodes[DD];
              return ec(CD, cD), cD.extensions || (cD.extensions = {}), cD.extensions[Cp] = QD, void iD(null)
            }
          }
          CD.extensions || (CD.extensions = {}), CD.extensions[Cp] = QD, iD(CD)
        }))
      }
    }
    let fp = !1;

    function bp() {
      fp || (fp = !0, zI.RegisterExtension(Cp, (DD => new ip(DD))))
    }
    bp();
    const Qp = "KHR_interactivity";
    class wp {
      constructor(DD) {
        this._exporter = DD, this.name = Qp, this.enabled = !!DD.options.khrInteractivity, this.required = DD.options.khrInteractivity?.required ?? !1
      }
      dispose() {
        this._exporter = null
      }
      get wasUsed() {
        return this.enabled
      }
      onExporting() {
        var DD, CD, cD;
        const ID = this._exporter.options.khrInteractivity;
        if (!ID) return;
        const pD = ID.build({
          getNodeCount: () => this._exporter._nodes.length,
          getNodeIndex: DD => this._exporter._getNodeIndex(DD),
          getAnimationIndex: DD => this._exporter._getAnimationIndex(DD),
          getCameraIndex: DD => this._exporter._getCameraIndex(DD),
          getMaterialIndex: DD => this._exporter._getMaterialIndex(DD),
          getRootIndex: (DD, CD) => this._exporter._getRootIndex(DD, CD),
          setNodeExtension: (DD, CD, cD) => this._exporter._setNodeExtension(DD, CD, cD)
        });
        this._exporter._glTF.extensions[Qp] = pD;
        for (const iD of ID.additionalExtensionsUsed)(DD = this._exporter._glTF).extensionsUsed || (DD.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(iD) && this._exporter._glTF.extensionsUsed.push(iD);
        for (const iD of ID.additionalExtensionsRequired)(CD = this._exporter._glTF).extensionsUsed || (CD.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(iD) && this._exporter._glTF.extensionsUsed.push(iD), (cD = this._exporter._glTF).extensionsRequired || (cD.extensionsRequired = []), -1 === this._exporter._glTF.extensionsRequired.indexOf(iD) && this._exporter._glTF.extensionsRequired.push(iD)
      }
    }
    let Sp = !1;

    function Bp() {
      Sp || (Sp = !0, zI.RegisterExtension(Qp, (DD => new wp(DD)), 200))
    }
    Bp();
    const yp = "EXT_lights_area",
      Mp = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        size: 1
      },
      tp = {
        aspect: 1
      },
      Zp = TD.p.Backward();
    class op {
      constructor(DD) {
        this.name = yp, this.enabled = !0, this.required = !1, this._exporter = DD
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[yp] = this._lights
      }
      async postExportNodeAsync(DD, CD, cD, ID, pD) {
        return await new Promise((iD => {
          if (!(cD instanceof SI.b)) return void iD(CD);
          const fD = cD.getTypeID() == SI.b.LIGHTTYPEID_RECT_AREALIGHT ? "rect" : null;
          if (!fD) return xD.e.Warn(`${DD}: Light ${cD.name} is not supported in ${yp}`), void iD(CD);
          const bD = cD;
          if (bD.falloffType !== SI.b.FALLOFF_GLTF && xD.e.Warn(`${DD}: Light falloff for ${cD.name} does not match the ${yp} specification!`), !bD.position.wfD(0, 0, 0)) {
            const DD = TD.l.cZ[0].YCD(bD.position);
            pD && Wc(DD), CD.translation = DD.XcD()
          }
          const QD = TD.p.Forward();
          pD && Wc(QD);
          const wD = TD.h.FromUnitVectorsToRef(Zp, QD, TD.l.Quaternion[0]);
          TD.h.IsIdentity(wD) || (CD.rotation = wD.XcD());
          const SD = {
            type: fD,
            name: bD.name,
            color: bD.diffuse.XcD(),
            intensity: bD.intensity,
            size: bD.height,
            rect: {
              aspect: bD.width / bD.height
            }
          };
          rc(SD, Mp), SD.rect && rc(SD.rect, tp), this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(SD);
          const BD = {
              light: this._lights.lights.length - 1
            },
            yD = cD.parent;
          if (yD && uc(bD, yD)) {
            const DD = ID.get(yD);
            if (DD) {
              const cD = this._exporter._nodes[DD];
              return ec(CD, cD), cD.extensions || (cD.extensions = {}), cD.extensions[yp] = BD, void iD(null)
            }
          }
          CD.extensions || (CD.extensions = {}), CD.extensions[yp] = BD, iD(CD)
        }))
      }
    }
    let vp = !1;

    function Np() {
      vp || (vp = !0, zI.RegisterExtension(yp, (DD => new op(DD))))
    }
    Np();
    const gp = "KHR_materials_anisotropy";
    class Xp {
      constructor(DD) {
        this.name = gp, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._anisoTexturesMap = {}, this._exporter = DD
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(DD, CD, cD) {
        const ID = [];
        if (cD instanceof nC) {
          if (cD.anisotropy.isEnabled && !cD.anisotropy.legacy) return cD.anisotropy.texture && ID.push(cD.anisotropy.texture), ID
        } else if (cD instanceof AC && cD.specularRoughnessAnisotropy > 0) {
          const DD = function(DD) {
            const CD = DD.specularRoughnessAnisotropyTexture,
              cD = DD.geometryTangentTexture;
            return `${CD&&CD.getInternalTexture()?CD.getInternalTexture().uniqueId:"NoStrength"}_${cD&&cD.getInternalTexture()?cD.getInternalTexture().uniqueId:"NoTangent"}`
          }(cD);
          if (this._anisoTexturesMap[DD]) ID.push(this._anisoTexturesMap[DD]);
          else {
            const CD = await async function(DD) {
              const CD = DD.hq(),
                cD = DD.specularRoughnessAnisotropyTexture,
                ID = DD.geometryTangentTexture;
              return cD || ID ? await fc("AnisotropyTexture", wc(ID ? bc(ID, 0) : Qc(1), ID ? bc(ID, 1) : Qc(0), cD ? bc(cD, 0) : Qc(1)), CD) : null
            }(cD);
            CD && (ID.push(CD), this._anisoTexturesMap[DD] = CD)
          }
          return ID
        }
        return []
      }
      postExportMaterialAsync(DD, CD, cD) {
        return new Promise((DD => {
          var ID;
          if (cD instanceof nC) {
            if (!cD.anisotropy.isEnabled || cD.anisotropy.legacy) return void DD(CD);
            this._wasUsed = !0, CD.extensions = CD.extensions || {};
            const ID = this._exporter._materialExporter.getTextureInfo(cD.anisotropy.texture),
              pD = {
                anisotropyStrength: cD.anisotropy.intensity,
                anisotropyRotation: cD.anisotropy.angle,
                anisotropyTexture: ID ?? void 0
              };
            null !== pD.anisotropyTexture && this._exporter._materialNeedsUVsSet.add(cD), CD.extensions[gp] = pD
          } else if (cD instanceof AC && cD.specularRoughnessAnisotropy > 0) {
            this._wasUsed = !0, CD.extensions = CD.extensions || {};
            let pD = cD.specularRoughnessTexture;
            cD._useRoughnessFromMetallicTextureGreen && (pD = cD.baseMetalnessTexture);
            const iD = this._anisoTexturesMap[cD.id];
            if (!pD && !iD) {
              let ID = cD.specularRoughness,
                pD = cD.specularRoughnessAnisotropy;
              if (!cD._useGltfStyleAnisotropy) {
                const DD = function(DD, CD) {
                  const cD = DD * DD,
                    ID = cD * Math.sqrt(2 / (1 + (1 - CD) * (1 - CD))),
                    pD = (1 - CD) * ID;
                  return {
                    newBaseRoughness: Math.sqrt(pD),
                    newAnisotropyStrength: Math.min(Math.sqrt((ID - cD) / Math.max(1 - cD, 1e-4)), 1)
                  }
                }(cD.specularRoughness, cD.specularRoughnessAnisotropy);
                ID = DD.newBaseRoughness, pD = DD.newAnisotropyStrength
              }
              CD.pbrMetallicRoughness && (CD.pbrMetallicRoughness.roughnessFactor = ID);
              const iD = {
                anisotropyStrength: pD,
                anisotropyRotation: cD.geometryTangentAngle + .5 * Math.PI,
                anisotropyTexture: void 0
              };
              return CD.extensions[gp] = iD, DD(CD)
            }
            const fD = iD ? this._exporter._materialExporter.getTextureInfo(iD) : null,
              bD = {
                anisotropyStrength: cD.specularRoughnessAnisotropy,
                anisotropyRotation: cD.geometryTangentAngle,
                anisotropyTexture: fD || void 0,
                extensions: {}
              };
            cD._useGltfStyleAnisotropy || (CD.extensions.KHR_materials_openpbr = {}, (ID = this._exporter._glTF).extensionsUsed || (ID.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr")), this._exporter._materialNeedsUVsSet.add(cD), CD.extensions[gp] = bD
          }
          DD(CD)
        }))
      }
    }
    let mp = !1;

    function np() {
      mp || (mp = !0, zI.RegisterExtension(gp, (DD => new Xp(DD))))
    }
    np();
    const Op = "KHR_materials_clearcoat";

    function Pp(DD, CD) {
      const cD = new JD.c(CD.name, CD.hq());
      return cD._texture = DD, cD.coordinatesIndex = CD.coordinatesIndex, CD instanceof JD.c && (cD.uOffset = CD.uOffset, cD.vOffset = CD.vOffset, cD.uScale = CD.uScale, cD.vScale = CD.vScale, cD.wAng = CD.wAng), cD.wrapU = CD.wrapU, cD.wrapV = CD.wrapV, cD
    }
    class Hp {
      constructor(DD) {
        this.name = Op, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = DD
      }
      dispose() {
        for (const DD of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[DD].dispose()
        }
        this._mergedTexturesMap = {};
        for (const DD of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[DD].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(DD, CD, cD) {
        const ID = [];
        if (cD instanceof nC) {
          if (cD.clearCoat.isEnabled) return cD.clearCoat.texture && ID.push(cD.clearCoat.texture), !cD.clearCoat.useRoughnessFromMainTexture && cD.clearCoat.textureRoughness && ID.push(cD.clearCoat.textureRoughness), cD.clearCoat.bumpTexture && ID.push(cD.clearCoat.bumpTexture), ID
        } else if (cD instanceof AC && cD.coatWeight > 0) {
          let DD = !1;
          if (cD.coatWeightTexture ? cD.coatRoughnessTexture ? cD._useCoatRoughnessFromGreenChannel && cD.coatWeightTexture.getInternalTexture() === cD.coatRoughnessTexture.getInternalTexture() ? (ID.push(cD.coatWeightTexture), ID.push(cD.coatRoughnessTexture)) : DD = !0 : ID.push(cD.coatWeightTexture) : cD.coatRoughnessTexture && (cD._useCoatRoughnessFromGreenChannel ? ID.push(cD.coatRoughnessTexture) : DD = !0), DD) {
            const DD = function(DD) {
              const CD = DD.coatWeightTexture,
                cD = CD && CD.getInternalTexture() ? CD.getInternalTexture().uniqueId : "NoCoat",
                ID = DD.coatRoughnessTexture;
              return `${cD}_${ID&&ID.getInternalTexture()?ID.getInternalTexture().uniqueId:"NoRoughness"}`
            }(cD);
            if (!this._cachedInternalTexturesMap[DD]) {
              const CD = await async function(DD) {
                const CD = DD.hq(),
                  cD = DD.coatWeightTexture,
                  ID = DD.coatRoughnessTexture;
                return cD || ID ? (await fc("CoatTexture", wc(cD ? bc(cD, 0) : Qc(1), ID ? bc(ID, DD._useCoatRoughnessFromGreenChannel ? 1 : 0) : Qc(1)), CD)).getInternalTexture() : null
              }(cD);
              CD && (this._cachedInternalTexturesMap[DD] = CD)
            }
            this._cachedInternalTexturesMap[DD] && (cD.coatWeightTexture && (this._mergedTexturesMap[cD.coatWeightTexture.uniqueId] = Pp(this._cachedInternalTexturesMap[DD], cD.coatWeightTexture), ID.push(this._mergedTexturesMap[cD.coatWeightTexture.uniqueId])), cD.coatRoughnessTexture && (this._mergedTexturesMap[cD.coatRoughnessTexture.uniqueId] = Pp(this._cachedInternalTexturesMap[DD], cD.coatRoughnessTexture), ID.push(this._mergedTexturesMap[cD.coatRoughnessTexture.uniqueId])))
          }
          return cD.geometryCoatNormalTexture && ID.push(cD.geometryCoatNormalTexture), ID
        }
        return []
      }
      postExportMaterialAsync(DD, CD, cD) {
        return new Promise((DD => {
          if (cD instanceof nC) {
            if (!cD.clearCoat.isEnabled) return void DD(CD);
            this._wasUsed = !0, CD.extensions = CD.extensions || {};
            const ID = this._exporter._materialExporter.getTextureInfo(cD.clearCoat.texture);
            let pD;
            pD = cD.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(cD.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(cD.clearCoat.textureRoughness), cD.clearCoat.isTintEnabled && PC.g.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${cD.name}`), cD.clearCoat.remapF0OnInterfaceChange && PC.g.Warn(`Clear Color F0 remapping is not supported for glTF export. Ignoring for: ${cD.name}`);
            const iD = this._exporter._materialExporter.getTextureInfo(cD.clearCoat.bumpTexture),
              fD = {
                clearcoatFactor: cD.clearCoat.intensity,
                clearcoatTexture: ID ?? void 0,
                clearcoatRoughnessFactor: cD.clearCoat.roughness,
                clearcoatRoughnessTexture: pD ?? void 0,
                clearcoatNormalTexture: iD ?? void 0
              };
            null === fD.clearcoatTexture && null === fD.clearcoatRoughnessTexture && null === fD.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(cD), CD.extensions[Op] = fD
          } else if (cD instanceof AC) {
            if (0 == cD.coatWeight) return void DD(CD);
            let ID, pD, iD, fD;
            this._wasUsed = !0, CD.extensions = CD.extensions || {}, cD.coatWeightTexture && (ID = this._mergedTexturesMap[cD.coatWeightTexture.uniqueId], pD = this._exporter._materialExporter.getTextureInfo(ID)), cD.coatRoughnessTexture && (iD = this._mergedTexturesMap[cD.coatRoughnessTexture.uniqueId], fD = this._exporter._materialExporter.getTextureInfo(iD)), cD.coatColorTexture && PC.g.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${cD.name}`);
            const bD = this._exporter._materialExporter.getTextureInfo(cD.geometryCoatNormalTexture),
              QD = {
                clearcoatFactor: cD.coatWeight,
                clearcoatTexture: pD ?? void 0,
                clearcoatRoughnessFactor: cD.coatRoughness,
                clearcoatRoughnessTexture: fD ?? void 0,
                clearcoatNormalTexture: bD ?? void 0
              };
            null === QD.clearcoatTexture && null === QD.clearcoatRoughnessTexture && null === QD.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(cD), CD.extensions[Op] = QD
          }
          DD(CD)
        }))
      }
    }
    let Up = !1;

    function xp() {
      Up || (Up = !0, zI.RegisterExtension(Op, (DD => new Hp(DD))))
    }
    xp();
    const qp = "KHR_materials_coat";

    function Jp(DD) {
      const CD = DD.coatRoughnessAnisotropyTexture,
        cD = DD.geometryCoatTangentTexture;
      return `${CD&&CD.getInternalTexture()?CD.getInternalTexture().uniqueId:"NoStrength"}_${cD&&cD.getInternalTexture()?cD.getInternalTexture().uniqueId:"NoTangent"}`
    }

    function Kp(DD, CD) {
      const cD = new JD.c(CD.name, CD.hq());
      return cD._texture = DD, cD.coordinatesIndex = CD.coordinatesIndex, CD instanceof JD.c && (cD.uOffset = CD.uOffset, cD.vOffset = CD.vOffset, cD.uScale = CD.uScale, cD.vScale = CD.vScale, cD.wAng = CD.wAng), cD.wrapU = CD.wrapU, cD.wrapV = CD.wrapV, cD
    }
    class ap {
      constructor(DD) {
        this.name = qp, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = DD
      }
      dispose() {
        for (const DD of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[DD].dispose()
        }
        this._mergedTexturesMap = {};
        for (const DD of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[DD].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(DD, CD, cD) {
        const ID = [];
        if (cD instanceof nC) {
          if (cD.clearCoat.isEnabled) return cD.clearCoat.texture && ID.push(cD.clearCoat.texture), !cD.clearCoat.useRoughnessFromMainTexture && cD.clearCoat.textureRoughness && ID.push(cD.clearCoat.textureRoughness), cD.clearCoat.bumpTexture && ID.push(cD.clearCoat.bumpTexture), cD.clearCoat.tintTexture && ID.push(cD.clearCoat.tintTexture), ID
        } else if (cD instanceof AC && cD.coatWeight > 0) {
          let DD = !1;
          if (cD.coatWeightTexture ? cD.coatRoughnessTexture ? cD._useCoatRoughnessFromGreenChannel && cD.coatWeightTexture.getInternalTexture() === cD.coatRoughnessTexture.getInternalTexture() ? (ID.push(cD.coatWeightTexture), ID.push(cD.coatRoughnessTexture)) : DD = !0 : ID.push(cD.coatWeightTexture) : cD.coatRoughnessTexture && (cD._useCoatRoughnessFromGreenChannel ? ID.push(cD.coatRoughnessTexture) : DD = !0), DD) {
            const DD = function(DD) {
              const CD = DD.coatWeightTexture,
                cD = CD && CD.getInternalTexture() ? CD.getInternalTexture().uniqueId : "NoCoat",
                ID = DD.coatRoughnessTexture;
              return `${cD}_${ID&&ID.getInternalTexture()?ID.getInternalTexture().uniqueId:"NoRoughness"}`
            }(cD);
            if (!this._cachedInternalTexturesMap[DD]) {
              const CD = await async function(DD) {
                const CD = DD.hq(),
                  cD = DD.coatWeightTexture,
                  ID = DD.coatRoughnessTexture;
                return cD || ID ? (await fc("CoatTexture", wc(cD ? bc(cD, 0) : Qc(1), ID ? bc(ID, DD._useCoatRoughnessFromGreenChannel ? 1 : 0) : Qc(1)), CD)).getInternalTexture() : null
              }(cD);
              CD && (this._cachedInternalTexturesMap[DD] = CD)
            }
            this._cachedInternalTexturesMap[DD] && (cD.coatWeightTexture && (this._mergedTexturesMap[cD.coatWeightTexture.uniqueId] = Kp(this._cachedInternalTexturesMap[DD], cD.coatWeightTexture), ID.push(this._mergedTexturesMap[cD.coatWeightTexture.uniqueId])), cD.coatRoughnessTexture && (this._mergedTexturesMap[cD.coatRoughnessTexture.uniqueId] = Kp(this._cachedInternalTexturesMap[DD], cD.coatRoughnessTexture), ID.push(this._mergedTexturesMap[cD.coatRoughnessTexture.uniqueId])))
          }
          if (cD.geometryCoatNormalTexture && ID.push(cD.geometryCoatNormalTexture), cD.coatColorTexture && ID.push(cD.coatColorTexture), cD.coatRoughnessAnisotropy > 0) {
            const DD = Jp(cD);
            if (this._mergedTexturesMap[DD]) ID.push(this._mergedTexturesMap[DD]);
            else {
              const CD = await async function(DD) {
                const CD = DD.hq(),
                  cD = DD.coatRoughnessAnisotropyTexture,
                  ID = DD.geometryCoatTangentTexture;
                return cD || ID ? await fc("AnisotropyTexture", wc(ID ? bc(ID, 0) : Qc(1), ID ? bc(ID, 1) : Qc(0), cD ? bc(cD, 0) : Qc(1)), CD) : null
              }(cD);
              CD && (ID.push(CD), this._mergedTexturesMap[DD] = CD)
            }
            return ID
          }
          return ID
        }
        return []
      }
      postExportMaterialAsync(DD, CD, cD) {
        return new Promise((DD => {
          var ID;
          if (cD instanceof nC) {
            if (!cD.clearCoat.isEnabled) return void DD(CD);
            this._wasUsed = !0, CD.extensions = CD.extensions || {};
            const ID = this._exporter._materialExporter.getTextureInfo(cD.clearCoat.texture);
            let pD, iD;
            pD = cD.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(cD.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(cD.clearCoat.textureRoughness), cD.clearCoat.isTintEnabled && (iD = this._exporter._materialExporter.getTextureInfo(cD.clearCoat.tintTexture));
            const fD = this._exporter._materialExporter.getTextureInfo(cD.clearCoat.bumpTexture),
              bD = cD.clearCoat.indexOfRefraction,
              QD = {
                coatFactor: cD.clearCoat.intensity,
                coatTexture: ID ?? void 0,
                coatRoughnessFactor: cD.clearCoat.roughness,
                coatRoughnessTexture: pD ?? void 0,
                coatNormalTexture: fD ?? void 0,
                coatColorFactor: cD.clearCoat.tintColor.XcD(),
                coatColorTexture: iD ?? void 0,
                coatIor: 1.5 !== bD ? bD : void 0
              };
            null === QD.coatTexture && null === QD.coatRoughnessTexture && null === QD.coatRoughnessTexture && null === QD.coatColorTexture || this._exporter._materialNeedsUVsSet.add(cD), CD.extensions[qp] = QD
          } else if (cD instanceof AC) {
            if (0 == cD.coatWeight) return void DD(CD);
            let pD, iD, fD, bD;
            this._wasUsed = !0, CD.extensions = CD.extensions || {}, cD.coatWeightTexture && (pD = this._mergedTexturesMap[cD.coatWeightTexture.uniqueId] ? this._mergedTexturesMap[cD.coatWeightTexture.uniqueId] : cD.coatWeightTexture, iD = this._exporter._materialExporter.getTextureInfo(pD)), cD.coatRoughnessTexture && (fD = this._mergedTexturesMap[cD.coatRoughnessTexture.uniqueId] ? this._mergedTexturesMap[cD.coatRoughnessTexture.uniqueId] : cD.coatRoughnessTexture, bD = this._exporter._materialExporter.getTextureInfo(fD));
            const QD = this._exporter._materialExporter.getTextureInfo(cD.geometryCoatNormalTexture),
              wD = this._exporter._materialExporter.getTextureInfo(cD.coatColorTexture),
              SD = cD.coatIor,
              BD = cD.coatDarkening,
              yD = cD.coatRoughnessTexture,
              MD = Jp(cD),
              tD = this._mergedTexturesMap[MD];
            let ZD, oD = 0,
              vD = 0;
            if (cD.coatRoughnessAnisotropy > 0) {
              if (yD || tD) {
                const DD = tD ? this._exporter._materialExporter.getTextureInfo(tD) : null;
                oD = cD.coatRoughnessAnisotropy, vD = cD.geometryCoatTangentAngle, ZD = DD || void 0
              } else {
                let DD = cD.coatRoughness,
                  ID = cD.coatRoughnessAnisotropy;
                if (!cD._useGltfStyleAnisotropy) {
                  const CD = function(DD, CD) {
                    const cD = DD * DD,
                      ID = cD * Math.sqrt(2 / (1 + (1 - CD) * (1 - CD))),
                      pD = (1 - CD) * ID;
                    return {
                      newBaseRoughness: Math.sqrt(pD),
                      newAnisotropyStrength: Math.min(Math.sqrt((ID - cD) / Math.max(1 - cD, 1e-4)), 1)
                    }
                  }(cD.coatRoughness, cD.coatRoughnessAnisotropy);
                  DD = CD.newBaseRoughness, ID = CD.newAnisotropyStrength
                }
                CD.pbrMetallicRoughness && (CD.pbrMetallicRoughness.roughnessFactor = DD), oD = ID, vD = cD.geometryCoatTangentAngle + .5 * Math.PI, ZD = void 0
              }
              cD._useGltfStyleAnisotropy || (CD.extensions.KHR_materials_openpbr = {}, (ID = this._exporter._glTF).extensionsUsed || (ID.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr"))
            }
            const ND = {
              coatFactor: cD.coatWeight,
              coatTexture: iD ?? void 0,
              coatRoughnessFactor: cD.coatRoughness,
              coatRoughnessTexture: bD ?? void 0,
              coatNormalTexture: QD ?? void 0,
              coatColorFactor: cD.coatColor.XcD(),
              coatColorTexture: wD ?? void 0,
              coatIor: 1.5 !== SD ? SD : void 0,
              coatDarkeningFactor: 1 !== BD ? BD : void 0,
              coatAnisotropyRotation: vD,
              coatAnisotropyStrength: oD,
              coatAnisotropyTexture: ZD
            };
            null === ND.coatTexture && null === ND.coatRoughnessTexture && null === ND.coatRoughnessTexture && null === ND.coatAnisotropyTexture && null === ND.coatColorTexture || this._exporter._materialNeedsUVsSet.add(cD), CD.extensions[qp] = ND
          }
          DD(CD)
        }))
      }
    }
    let Vp = !1;

    function zp() {
      Vp || (Vp = !0, zI.RegisterExtension(qp, (DD => new ap(DD))))
    }
    zp();
    let jp = (() => {
      var DD, CD, cD, ID, pD, fD, bD, QD, wD, SD, BD, yD, MD, tD, ZD, oD, vD, ND, gD, XD, mD, nD, OD, PD, xD, qD, JD, KD, aD, VD, jD, lD, LD, TD, GD, RD, kD, dD, YD, WD, ED, eD, uD, hD, rD, AD, FD, DC, CC, cC, IC, pC, iC, fC, bC, QC, wC, SC, BC, yC, MC, tC, ZC, oC, vC, NC, gC;
      let XC, mC, PC, HC, UC, xC, qC, JC, KC, aC, VC, zC, jC, lC, LC, TC, GC, RC, kC, dC, YC, WC, sC, EC, eC, uC, hC, rC, AC, FC, Dc, Cc, cc, Ic, pc, ic, fc, bc, Qc, wc, Sc, Bc, yc, Mc, tc, Zc, oc, vc, Nc, gc, Xc, mc, nc, Oc, Pc, Hc, Uc, xc, qc, Jc, Kc, ac, Vc, zc, jc, lc, Lc, Tc, Gc = nC,
        Rc = [],
        kc = [],
        dc = [],
        Yc = [],
        Wc = [],
        sc = [],
        Ec = [],
        ec = [],
        uc = [],
        hc = [],
        rc = [],
        Ac = [],
        Fc = [],
        DI = [],
        CI = [],
        cI = [],
        II = [],
        pI = [],
        iI = [],
        fI = [],
        bI = [],
        QI = [],
        wI = [],
        SI = [],
        BI = [],
        yI = [],
        MI = [],
        tI = [],
        ZI = [],
        oI = [],
        vI = [],
        NI = [],
        gI = [],
        XI = [],
        mI = [],
        nI = [],
        OI = [],
        PI = [],
        HI = [],
        UI = [],
        xI = [],
        qI = [],
        JI = [],
        KI = [],
        aI = [],
        VI = [],
        zI = [],
        jI = [],
        lI = [],
        LI = [],
        TI = [],
        GI = [],
        RI = [],
        kI = [],
        dI = [],
        YI = [],
        WI = [],
        sI = [],
        EI = [],
        eI = [],
        uI = [],
        hI = [],
        rI = [],
        AI = [],
        FI = [],
        Dp = [],
        Cp = [],
        cp = [],
        Ip = [],
        pp = [],
        ip = [],
        fp = [],
        bp = [],
        Qp = [],
        wp = [],
        Sp = [],
        Bp = [],
        yp = [],
        Mp = [],
        tp = [],
        Zp = [],
        op = [],
        vp = [],
        Np = [],
        gp = [],
        Xp = [],
        mp = [],
        np = [],
        Op = [],
        Pp = [],
        Hp = [],
        Up = [],
        xp = [],
        qp = [],
        Jp = [],
        Kp = [],
        ap = [],
        Vp = [],
        zp = [],
        jp = [],
        lp = [],
        Lp = [],
        Tp = [],
        Gp = [],
        Rp = [],
        kp = [],
        dp = [],
        Yp = [],
        Wp = [],
        sp = [],
        Ep = [],
        ep = [],
        hp = [],
        rp = [],
        Ap = [],
        Fp = [],
        Di = [],
        Ci = [],
        ci = [],
        Ii = [],
        ii = [],
        fi = [],
        bi = [],
        Qi = [],
        wi = [],
        Si = [],
        Bi = [],
        yi = [],
        Mi = [],
        ti = [],
        Zi = [],
        oi = [],
        vi = [];
      return DD = class extends Gc {
        get directIntensity() {
          return (0, HD.d)(this, CD, "f")
        }
        set directIntensity(DD) {
          (0, HD.g)(this, CD, DD, "f")
        }
        get emissiveIntensity() {
          return (0, HD.d)(this, cD, "f")
        }
        set emissiveIntensity(DD) {
          (0, HD.g)(this, cD, DD, "f")
        }
        get environmentIntensity() {
          return (0, HD.d)(this, ID, "f")
        }
        set environmentIntensity(DD) {
          (0, HD.g)(this, ID, DD, "f")
        }
        get specularIntensity() {
          return (0, HD.d)(this, pD, "f")
        }
        set specularIntensity(DD) {
          (0, HD.g)(this, pD, DD, "f")
        }
        get disableBumpMap() {
          return (0, HD.d)(this, fD, "f")
        }
        set disableBumpMap(DD) {
          (0, HD.g)(this, fD, DD, "f")
        }
        get albedoTexture() {
          return (0, HD.d)(this, bD, "f")
        }
        set albedoTexture(DD) {
          (0, HD.g)(this, bD, DD, "f")
        }
        get baseWeightTexture() {
          return (0, HD.d)(this, QD, "f")
        }
        set baseWeightTexture(DD) {
          (0, HD.g)(this, QD, DD, "f")
        }
        get baseDiffuseRoughnessTexture() {
          return (0, HD.d)(this, wD, "f")
        }
        set baseDiffuseRoughnessTexture(DD) {
          (0, HD.g)(this, wD, DD, "f")
        }
        get ambientTexture() {
          return (0, HD.d)(this, SD, "f")
        }
        set ambientTexture(DD) {
          (0, HD.g)(this, SD, DD, "f")
        }
        get ambientTextureStrength() {
          return (0, HD.d)(this, BD, "f")
        }
        set ambientTextureStrength(DD) {
          (0, HD.g)(this, BD, DD, "f")
        }
        get ambientTextureImpactOnAnalyticalLights() {
          return (0, HD.d)(this, yD, "f")
        }
        set ambientTextureImpactOnAnalyticalLights(DD) {
          (0, HD.g)(this, yD, DD, "f")
        }
        get opacityTexture() {
          return (0, HD.d)(this, MD, "f")
        }
        set opacityTexture(DD) {
          (0, HD.g)(this, MD, DD, "f")
        }
        get reflectionTexture() {
          return (0, HD.d)(this, tD, "f")
        }
        set reflectionTexture(DD) {
          (0, HD.g)(this, tD, DD, "f")
        }
        get emissiveTexture() {
          return (0, HD.d)(this, ZD, "f")
        }
        set emissiveTexture(DD) {
          (0, HD.g)(this, ZD, DD, "f")
        }
        get reflectivityTexture() {
          return (0, HD.d)(this, oD, "f")
        }
        set reflectivityTexture(DD) {
          (0, HD.g)(this, oD, DD, "f")
        }
        get metallicTexture() {
          return (0, HD.d)(this, vD, "f")
        }
        set metallicTexture(DD) {
          (0, HD.g)(this, vD, DD, "f")
        }
        get metallic() {
          return (0, HD.d)(this, ND, "f")
        }
        set metallic(DD) {
          (0, HD.g)(this, ND, DD, "f")
        }
        get roughness() {
          return (0, HD.d)(this, gD, "f")
        }
        set roughness(DD) {
          (0, HD.g)(this, gD, DD, "f")
        }
        get metallicF0Factor() {
          return (0, HD.d)(this, XD, "f")
        }
        set metallicF0Factor(DD) {
          (0, HD.g)(this, XD, DD, "f")
        }
        get metallicReflectanceColor() {
          return (0, HD.d)(this, mD, "f")
        }
        set metallicReflectanceColor(DD) {
          (0, HD.g)(this, mD, DD, "f")
        }
        get useOnlyMetallicFromMetallicReflectanceTexture() {
          return (0, HD.d)(this, nD, "f")
        }
        set useOnlyMetallicFromMetallicReflectanceTexture(DD) {
          (0, HD.g)(this, nD, DD, "f")
        }
        get metallicReflectanceTexture() {
          return (0, HD.d)(this, OD, "f")
        }
        set metallicReflectanceTexture(DD) {
          (0, HD.g)(this, OD, DD, "f")
        }
        get reflectanceTexture() {
          return (0, HD.d)(this, PD, "f")
        }
        set reflectanceTexture(DD) {
          (0, HD.g)(this, PD, DD, "f")
        }
        get microSurfaceTexture() {
          return (0, HD.d)(this, xD, "f")
        }
        set microSurfaceTexture(DD) {
          (0, HD.g)(this, xD, DD, "f")
        }
        get bumpTexture() {
          return (0, HD.d)(this, qD, "f")
        }
        set bumpTexture(DD) {
          (0, HD.g)(this, qD, DD, "f")
        }
        get lightmapTexture() {
          return (0, HD.d)(this, JD, "f")
        }
        set lightmapTexture(DD) {
          (0, HD.g)(this, JD, DD, "f")
        }
        get refractionTexture() {
          return this.subSurface.refractionTexture
        }
        set refractionTexture(DD) {
          this.subSurface.refractionTexture = DD, DD ? this.subSurface.isRefractionEnabled = !0 : this.subSurface.linkRefractionWithTransparency || (this.subSurface.isRefractionEnabled = !1)
        }
        get ambientColor() {
          return (0, HD.d)(this, KD, "f")
        }
        set ambientColor(DD) {
          (0, HD.g)(this, KD, DD, "f")
        }
        get albedoColor() {
          return (0, HD.d)(this, aD, "f")
        }
        set albedoColor(DD) {
          (0, HD.g)(this, aD, DD, "f")
        }
        get baseWeight() {
          return (0, HD.d)(this, VD, "f")
        }
        set baseWeight(DD) {
          (0, HD.g)(this, VD, DD, "f")
        }
        get baseDiffuseRoughness() {
          return (0, HD.d)(this, jD, "f")
        }
        set baseDiffuseRoughness(DD) {
          (0, HD.g)(this, jD, DD, "f")
        }
        get reflectivityColor() {
          return (0, HD.d)(this, lD, "f")
        }
        set reflectivityColor(DD) {
          (0, HD.g)(this, lD, DD, "f")
        }
        get reflectionColor() {
          return (0, HD.d)(this, LD, "f")
        }
        set reflectionColor(DD) {
          (0, HD.g)(this, LD, DD, "f")
        }
        get emissiveColor() {
          return (0, HD.d)(this, TD, "f")
        }
        set emissiveColor(DD) {
          (0, HD.g)(this, TD, DD, "f")
        }
        get microSurface() {
          return (0, HD.d)(this, GD, "f")
        }
        set microSurface(DD) {
          (0, HD.g)(this, GD, DD, "f")
        }
        get indexOfRefraction() {
          return this.subSurface.indexOfRefraction
        }
        set indexOfRefraction(DD) {
          this.subSurface.indexOfRefraction = DD
        }
        get invertRefractionY() {
          return this.subSurface.invertRefractionY
        }
        set invertRefractionY(DD) {
          this.subSurface.invertRefractionY = DD
        }
        get linkRefractionWithTransparency() {
          return this.subSurface.linkRefractionWithTransparency
        }
        set linkRefractionWithTransparency(DD) {
          this.subSurface.linkRefractionWithTransparency = DD, DD && (this.subSurface.isRefractionEnabled = !0)
        }
        get useLightmapAsShadowmap() {
          return (0, HD.d)(this, RD, "f")
        }
        set useLightmapAsShadowmap(DD) {
          (0, HD.g)(this, RD, DD, "f")
        }
        get useAlphaFromAlbedoTexture() {
          return (0, HD.d)(this, kD, "f")
        }
        set useAlphaFromAlbedoTexture(DD) {
          (0, HD.g)(this, kD, DD, "f")
        }
        get forceAlphaTest() {
          return (0, HD.d)(this, dD, "f")
        }
        set forceAlphaTest(DD) {
          (0, HD.g)(this, dD, DD, "f")
        }
        get alphaCutOff() {
          return (0, HD.d)(this, YD, "f")
        }
        set alphaCutOff(DD) {
          (0, HD.g)(this, YD, DD, "f")
        }
        get useSpecularOverAlpha() {
          return (0, HD.d)(this, WD, "f")
        }
        set useSpecularOverAlpha(DD) {
          (0, HD.g)(this, WD, DD, "f")
        }
        get useMicroSurfaceFromReflectivityMapAlpha() {
          return (0, HD.d)(this, ED, "f")
        }
        set useMicroSurfaceFromReflectivityMapAlpha(DD) {
          (0, HD.g)(this, ED, DD, "f")
        }
        get useRoughnessFromMetallicTextureAlpha() {
          return (0, HD.d)(this, eD, "f")
        }
        set useRoughnessFromMetallicTextureAlpha(DD) {
          (0, HD.g)(this, eD, DD, "f")
        }
        get useRoughnessFromMetallicTextureGreen() {
          return (0, HD.d)(this, uD, "f")
        }
        set useRoughnessFromMetallicTextureGreen(DD) {
          (0, HD.g)(this, uD, DD, "f")
        }
        get useMetallnessFromMetallicTextureBlue() {
          return (0, HD.d)(this, hD, "f")
        }
        set useMetallnessFromMetallicTextureBlue(DD) {
          (0, HD.g)(this, hD, DD, "f")
        }
        get useAmbientOcclusionFromMetallicTextureRed() {
          return (0, HD.d)(this, rD, "f")
        }
        set useAmbientOcclusionFromMetallicTextureRed(DD) {
          (0, HD.g)(this, rD, DD, "f")
        }
        get useAmbientInGrayScale() {
          return (0, HD.d)(this, AD, "f")
        }
        set useAmbientInGrayScale(DD) {
          (0, HD.g)(this, AD, DD, "f")
        }
        get useAutoMicroSurfaceFromReflectivityMap() {
          return (0, HD.d)(this, FD, "f")
        }
        set useAutoMicroSurfaceFromReflectivityMap(DD) {
          (0, HD.g)(this, FD, DD, "f")
        }
        get usePhysicalLightFalloff() {
          return this._lightFalloff === nC.LIGHTFALLOFF_PHYSICAL
        }
        set usePhysicalLightFalloff(DD) {
          DD !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = DD ? nC.LIGHTFALLOFF_PHYSICAL : nC.LIGHTFALLOFF_STANDARD)
        }
        get useGLTFLightFalloff() {
          return this._lightFalloff === nC.LIGHTFALLOFF_GLTF
        }
        set useGLTFLightFalloff(DD) {
          DD !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = DD ? nC.LIGHTFALLOFF_GLTF : nC.LIGHTFALLOFF_STANDARD)
        }
        get useRadianceOverAlpha() {
          return (0, HD.d)(this, DC, "f")
        }
        set useRadianceOverAlpha(DD) {
          (0, HD.g)(this, DC, DD, "f")
        }
        get useObjectSpaceNormalMap() {
          return (0, HD.d)(this, CC, "f")
        }
        set useObjectSpaceNormalMap(DD) {
          (0, HD.g)(this, CC, DD, "f")
        }
        get useParallax() {
          return (0, HD.d)(this, cC, "f")
        }
        set useParallax(DD) {
          (0, HD.g)(this, cC, DD, "f")
        }
        get useParallaxOcclusion() {
          return (0, HD.d)(this, IC, "f")
        }
        set useParallaxOcclusion(DD) {
          (0, HD.g)(this, IC, DD, "f")
        }
        get parallaxScaleBias() {
          return (0, HD.d)(this, pC, "f")
        }
        set parallaxScaleBias(DD) {
          (0, HD.g)(this, pC, DD, "f")
        }
        get disableLighting() {
          return (0, HD.d)(this, iC, "f")
        }
        set disableLighting(DD) {
          (0, HD.g)(this, iC, DD, "f")
        }
        get forceIrradianceInFragment() {
          return (0, HD.d)(this, fC, "f")
        }
        set forceIrradianceInFragment(DD) {
          (0, HD.g)(this, fC, DD, "f")
        }
        get maxSimultaneousLights() {
          return (0, HD.d)(this, bC, "f")
        }
        set maxSimultaneousLights(DD) {
          (0, HD.g)(this, bC, DD, "f")
        }
        get invertNormalMapX() {
          return (0, HD.d)(this, QC, "f")
        }
        set invertNormalMapX(DD) {
          (0, HD.g)(this, QC, DD, "f")
        }
        get invertNormalMapY() {
          return (0, HD.d)(this, wC, "f")
        }
        set invertNormalMapY(DD) {
          (0, HD.g)(this, wC, DD, "f")
        }
        get twoSidedLighting() {
          return (0, HD.d)(this, SC, "f")
        }
        set twoSidedLighting(DD) {
          (0, HD.g)(this, SC, DD, "f")
        }
        get useAlphaFresnel() {
          return (0, HD.d)(this, BC, "f")
        }
        set useAlphaFresnel(DD) {
          (0, HD.g)(this, BC, DD, "f")
        }
        get useLinearAlphaFresnel() {
          return (0, HD.d)(this, yC, "f")
        }
        set useLinearAlphaFresnel(DD) {
          (0, HD.g)(this, yC, DD, "f")
        }
        get environmentBRDFTexture() {
          return (0, HD.d)(this, MC, "f")
        }
        set environmentBRDFTexture(DD) {
          (0, HD.g)(this, MC, DD, "f")
        }
        get forceNormalForward() {
          return (0, HD.d)(this, tC, "f")
        }
        set forceNormalForward(DD) {
          (0, HD.g)(this, tC, DD, "f")
        }
        get enableSpecularAntiAliasing() {
          return (0, HD.d)(this, ZC, "f")
        }
        set enableSpecularAntiAliasing(DD) {
          (0, HD.g)(this, ZC, DD, "f")
        }
        get useHorizonOcclusion() {
          return (0, HD.d)(this, oC, "f")
        }
        set useHorizonOcclusion(DD) {
          (0, HD.g)(this, oC, DD, "f")
        }
        get useRadianceOcclusion() {
          return (0, HD.d)(this, vC, "f")
        }
        set useRadianceOcclusion(DD) {
          (0, HD.g)(this, vC, DD, "f")
        }
        get unlit() {
          return (0, HD.d)(this, NC, "f")
        }
        set unlit(DD) {
          (0, HD.g)(this, NC, DD, "f")
        }
        get applyDecalMapAfterDetailMap() {
          return (0, HD.d)(this, gC, "f")
        }
        set applyDecalMapAfterDetailMap(DD) {
          (0, HD.g)(this, gC, DD, "f")
        }
        constructor(iD, UD) {
          super(iD, UD, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), CD.set(this, ((0, HD.m)(this, Rc), (0, HD.m)(this, kc, 1))), cD.set(this, ((0, HD.m)(this, dc), (0, HD.m)(this, Yc, 1))), ID.set(this, ((0, HD.m)(this, Wc), (0, HD.m)(this, sc, 1))), pD.set(this, ((0, HD.m)(this, Ec), (0, HD.m)(this, ec, 1))), fD.set(this, ((0, HD.m)(this, uc), (0, HD.m)(this, hc, !1))), bD.set(this, ((0, HD.m)(this, rc), (0, HD.m)(this, Ac, void 0))), QD.set(this, ((0, HD.m)(this, Fc), (0, HD.m)(this, DI, void 0))), wD.set(this, ((0, HD.m)(this, CI), (0, HD.m)(this, cI, void 0))), SD.set(this, ((0, HD.m)(this, II), (0, HD.m)(this, pI, void 0))), BD.set(this, ((0, HD.m)(this, iI), (0, HD.m)(this, fI, 1))), yD.set(this, ((0, HD.m)(this, bI), (0, HD.m)(this, QI, DD.DEFAULT_AO_ON_ANALYTICAL_LIGHTS))), MD.set(this, ((0, HD.m)(this, wI), (0, HD.m)(this, SI, void 0))), tD.set(this, ((0, HD.m)(this, BI), (0, HD.m)(this, yI, void 0))), ZD.set(this, ((0, HD.m)(this, MI), (0, HD.m)(this, tI, void 0))), oD.set(this, ((0, HD.m)(this, ZI), (0, HD.m)(this, oI, void 0))), vD.set(this, ((0, HD.m)(this, vI), (0, HD.m)(this, NI, void 0))), ND.set(this, ((0, HD.m)(this, gI), (0, HD.m)(this, XI, void 0))), gD.set(this, ((0, HD.m)(this, mI), (0, HD.m)(this, nI, void 0))), XD.set(this, ((0, HD.m)(this, OI), (0, HD.m)(this, PI, 1))), mD.set(this, ((0, HD.m)(this, HI), (0, HD.m)(this, UI, sD.d.White()))), nD.set(this, ((0, HD.m)(this, xI), (0, HD.m)(this, qI, !1))), OD.set(this, ((0, HD.m)(this, JI), (0, HD.m)(this, KI, void 0))), PD.set(this, ((0, HD.m)(this, aI), (0, HD.m)(this, VI, void 0))), xD.set(this, ((0, HD.m)(this, zI), (0, HD.m)(this, jI, void 0))), qD.set(this, ((0, HD.m)(this, lI), (0, HD.m)(this, LI, void 0))), JD.set(this, ((0, HD.m)(this, TI), (0, HD.m)(this, GI, void 0))), KD.set(this, ((0, HD.m)(this, RI), (0, HD.m)(this, kI, new sD.d(0, 0, 0)))), aD.set(this, ((0, HD.m)(this, dI), (0, HD.m)(this, YI, new sD.d(1, 1, 1)))), VD.set(this, ((0, HD.m)(this, WI), (0, HD.m)(this, sI, 1))), jD.set(this, ((0, HD.m)(this, EI), (0, HD.m)(this, eI, void 0))), lD.set(this, ((0, HD.m)(this, uI), (0, HD.m)(this, hI, new sD.d(1, 1, 1)))), LD.set(this, ((0, HD.m)(this, rI), (0, HD.m)(this, AI, new sD.d(1, 1, 1)))), TD.set(this, ((0, HD.m)(this, FI), (0, HD.m)(this, Dp, new sD.d(0, 0, 0)))), GD.set(this, ((0, HD.m)(this, Cp), (0, HD.m)(this, cp, 1))), RD.set(this, ((0, HD.m)(this, Ip), (0, HD.m)(this, pp, !1))), kD.set(this, ((0, HD.m)(this, ip), (0, HD.m)(this, fp, !1))), dD.set(this, ((0, HD.m)(this, bp), (0, HD.m)(this, Qp, !1))), YD.set(this, ((0, HD.m)(this, wp), (0, HD.m)(this, Sp, .4))), WD.set(this, ((0, HD.m)(this, Bp), (0, HD.m)(this, yp, !0))), ED.set(this, ((0, HD.m)(this, Mp), (0, HD.m)(this, tp, !1))), eD.set(this, ((0, HD.m)(this, Zp), (0, HD.m)(this, op, !0))), uD.set(this, ((0, HD.m)(this, vp), (0, HD.m)(this, Np, !1))), hD.set(this, ((0, HD.m)(this, gp), (0, HD.m)(this, Xp, !1))), rD.set(this, ((0, HD.m)(this, mp), (0, HD.m)(this, np, !1))), AD.set(this, ((0, HD.m)(this, Op), (0, HD.m)(this, Pp, !1))), FD.set(this, ((0, HD.m)(this, Hp), (0, HD.m)(this, Up, !1))), DC.set(this, ((0, HD.m)(this, xp), (0, HD.m)(this, qp, !0))), CC.set(this, ((0, HD.m)(this, Jp), (0, HD.m)(this, Kp, !1))), cC.set(this, ((0, HD.m)(this, ap), (0, HD.m)(this, Vp, !1))), IC.set(this, ((0, HD.m)(this, zp), (0, HD.m)(this, jp, !1))), pC.set(this, ((0, HD.m)(this, lp), (0, HD.m)(this, Lp, .05))), iC.set(this, ((0, HD.m)(this, Tp), (0, HD.m)(this, Gp, !1))), fC.set(this, ((0, HD.m)(this, Rp), (0, HD.m)(this, kp, !1))), bC.set(this, ((0, HD.m)(this, dp), (0, HD.m)(this, Yp, 4))), QC.set(this, ((0, HD.m)(this, Wp), (0, HD.m)(this, sp, !1))), wC.set(this, ((0, HD.m)(this, Ep), (0, HD.m)(this, ep, !1))), SC.set(this, ((0, HD.m)(this, hp), (0, HD.m)(this, rp, !1))), BC.set(this, ((0, HD.m)(this, Ap), (0, HD.m)(this, Fp, !1))), yC.set(this, ((0, HD.m)(this, Di), (0, HD.m)(this, Ci, !1))), MC.set(this, ((0, HD.m)(this, ci), (0, HD.m)(this, Ii, null))), tC.set(this, ((0, HD.m)(this, ii), (0, HD.m)(this, fi, !1))), ZC.set(this, ((0, HD.m)(this, bi), (0, HD.m)(this, Qi, !1))), oC.set(this, ((0, HD.m)(this, wi), (0, HD.m)(this, Si, !0))), vC.set(this, ((0, HD.m)(this, Bi), (0, HD.m)(this, yi, !0))), NC.set(this, ((0, HD.m)(this, Mi), (0, HD.m)(this, ti, !1))), gC.set(this, ((0, HD.m)(this, Zi), (0, HD.m)(this, oi, !1))), (0, HD.m)(this, vi), this._environmentBRDFTexture = zD(this.hq())
        }
        getClassName() {
          return "PBRMaterial"
        }
        clone(CD) {
          let cD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            ID = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const pD = OC.d.Clone((() => new DD(CD, this.hq())), this, {
            cloneTexturesOnlyOnce: cD
          });
          return pD.id = CD, pD.name = CD, this.stencil.copyTo(pD.stencil), this._clonePlugins(pD, ID), pD
        }
        serialize() {
          const DD = super.serialize();
          return DD.customType = "BABYLON.PBRMaterial", DD
        }
        static Parse(CD, cD, ID) {
          const pD = OC.d.Parse((() => new DD(CD.name, cD)), CD, cD, ID);
          return CD.stencil && pD.stencil.parse(CD.stencil, cD, ID), iD.d._ParsePlugins(CD, pD, cD, ID), CD.clearCoat && pD.clearCoat.parse(CD.clearCoat, cD, ID), CD.anisotropy && pD.anisotropy.parse(CD.anisotropy, cD, ID), CD.brdf && pD.brdf.parse(CD.brdf, cD, ID), CD.sheen && pD.sheen.parse(CD.sheen, cD, ID), CD.subSurface && pD.subSurface.parse(CD.subSurface, cD, ID), CD.iridescence && pD.iridescence.parse(CD.iridescence, cD, ID), pD
        }
      }, CD = new WeakMap, cD = new WeakMap, ID = new WeakMap, pD = new WeakMap, fD = new WeakMap, bD = new WeakMap, QD = new WeakMap, wD = new WeakMap, SD = new WeakMap, BD = new WeakMap, yD = new WeakMap, MD = new WeakMap, tD = new WeakMap, ZD = new WeakMap, oD = new WeakMap, vD = new WeakMap, ND = new WeakMap, gD = new WeakMap, XD = new WeakMap, mD = new WeakMap, nD = new WeakMap, OD = new WeakMap, PD = new WeakMap, xD = new WeakMap, qD = new WeakMap, JD = new WeakMap, KD = new WeakMap, aD = new WeakMap, VD = new WeakMap, jD = new WeakMap, lD = new WeakMap, LD = new WeakMap, TD = new WeakMap, GD = new WeakMap, RD = new WeakMap, kD = new WeakMap, dD = new WeakMap, YD = new WeakMap, WD = new WeakMap, ED = new WeakMap, eD = new WeakMap, uD = new WeakMap, hD = new WeakMap, rD = new WeakMap, AD = new WeakMap, FD = new WeakMap, DC = new WeakMap, CC = new WeakMap, cC = new WeakMap, IC = new WeakMap, pC = new WeakMap, iC = new WeakMap, fC = new WeakMap, bC = new WeakMap, QC = new WeakMap, wC = new WeakMap, SC = new WeakMap, BC = new WeakMap, yC = new WeakMap, MC = new WeakMap, tC = new WeakMap, ZC = new WeakMap, oC = new WeakMap, vC = new WeakMap, NC = new WeakMap, gC = new WeakMap, (() => {
        const CD = "function" === typeof Symbol && Symbol.metadata ? Object.create(Gc[Symbol.metadata] ?? null) : void 0;
        XC = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], mC = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], PC = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], HC = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], UC = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], xC = [(0, UD.w)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], qC = [(0, UD.w)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], JC = [(0, UD.w)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], KC = [(0, UD.w)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], aC = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], VC = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], zC = [(0, UD.w)(), (0, UD.c)("_markAllSubMeshesAsTexturesAndMiscDirty")], jC = [(0, UD.w)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], lC = [(0, UD.w)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], LC = [(0, UD.w)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], TC = [(0, UD.w)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], GC = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], RC = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], kC = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], dC = [(0, UD.l)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], YC = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], WC = [(0, UD.w)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], sC = [(0, UD.w)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], EC = [(0, UD.w)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], eC = [(0, UD.w)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], uC = [(0, UD.w)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty", null)], hC = [(0, UD.l)("ambient"), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], rC = [(0, UD.l)("albedo"), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], AC = [(0, UD.G)("baseWeight"), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], FC = [(0, UD.G)("baseDiffuseRoughness"), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], Dc = [(0, UD.l)("reflectivity"), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], Cc = [(0, UD.l)("reflection"), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], cc = [(0, UD.l)("emissive"), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], Ic = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], pc = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], ic = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesAndMiscDirty")], fc = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesAndMiscDirty")], bc = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesAndMiscDirty")], Qc = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], wc = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], Sc = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], Bc = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], yc = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], Mc = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], tc = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], Zc = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], oc = [(0, UD.G)()], vc = [(0, UD.G)()], Nc = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], gc = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], Xc = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], mc = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], nc = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], Oc = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsLightsDirty")], Pc = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], Hc = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsLightsDirty")], Uc = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], xc = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], qc = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], Jc = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], Kc = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], ac = [(0, UD.c)("_markAllSubMeshesAsTexturesDirty")], Vc = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], zc = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], jc = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], lc = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsTexturesDirty")], Lc = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsMiscDirty")], Tc = [(0, UD.G)(), (0, UD.c)("_markAllSubMeshesAsMiscDirty")], (0, HD.k)(DD, null, XC, {
          kind: "accessor",
          name: "directIntensity",
          static: !1,
          private: !1,
          access: {
            has: DD => "directIntensity" in DD,
            get: DD => DD.directIntensity,
            set: (DD, CD) => {
              DD.directIntensity = CD
            }
          },
          metadata: CD
        }, kc, dc), (0, HD.k)(DD, null, mC, {
          kind: "accessor",
          name: "emissiveIntensity",
          static: !1,
          private: !1,
          access: {
            has: DD => "emissiveIntensity" in DD,
            get: DD => DD.emissiveIntensity,
            set: (DD, CD) => {
              DD.emissiveIntensity = CD
            }
          },
          metadata: CD
        }, Yc, Wc), (0, HD.k)(DD, null, PC, {
          kind: "accessor",
          name: "environmentIntensity",
          static: !1,
          private: !1,
          access: {
            has: DD => "environmentIntensity" in DD,
            get: DD => DD.environmentIntensity,
            set: (DD, CD) => {
              DD.environmentIntensity = CD
            }
          },
          metadata: CD
        }, sc, Ec), (0, HD.k)(DD, null, HC, {
          kind: "accessor",
          name: "specularIntensity",
          static: !1,
          private: !1,
          access: {
            has: DD => "specularIntensity" in DD,
            get: DD => DD.specularIntensity,
            set: (DD, CD) => {
              DD.specularIntensity = CD
            }
          },
          metadata: CD
        }, ec, uc), (0, HD.k)(DD, null, UC, {
          kind: "accessor",
          name: "disableBumpMap",
          static: !1,
          private: !1,
          access: {
            has: DD => "disableBumpMap" in DD,
            get: DD => DD.disableBumpMap,
            set: (DD, CD) => {
              DD.disableBumpMap = CD
            }
          },
          metadata: CD
        }, hc, rc), (0, HD.k)(DD, null, xC, {
          kind: "accessor",
          name: "albedoTexture",
          static: !1,
          private: !1,
          access: {
            has: DD => "albedoTexture" in DD,
            get: DD => DD.albedoTexture,
            set: (DD, CD) => {
              DD.albedoTexture = CD
            }
          },
          metadata: CD
        }, Ac, Fc), (0, HD.k)(DD, null, qC, {
          kind: "accessor",
          name: "baseWeightTexture",
          static: !1,
          private: !1,
          access: {
            has: DD => "baseWeightTexture" in DD,
            get: DD => DD.baseWeightTexture,
            set: (DD, CD) => {
              DD.baseWeightTexture = CD
            }
          },
          metadata: CD
        }, DI, CI), (0, HD.k)(DD, null, JC, {
          kind: "accessor",
          name: "baseDiffuseRoughnessTexture",
          static: !1,
          private: !1,
          access: {
            has: DD => "baseDiffuseRoughnessTexture" in DD,
            get: DD => DD.baseDiffuseRoughnessTexture,
            set: (DD, CD) => {
              DD.baseDiffuseRoughnessTexture = CD
            }
          },
          metadata: CD
        }, cI, II), (0, HD.k)(DD, null, KC, {
          kind: "accessor",
          name: "ambientTexture",
          static: !1,
          private: !1,
          access: {
            has: DD => "ambientTexture" in DD,
            get: DD => DD.ambientTexture,
            set: (DD, CD) => {
              DD.ambientTexture = CD
            }
          },
          metadata: CD
        }, pI, iI), (0, HD.k)(DD, null, aC, {
          kind: "accessor",
          name: "ambientTextureStrength",
          static: !1,
          private: !1,
          access: {
            has: DD => "ambientTextureStrength" in DD,
            get: DD => DD.ambientTextureStrength,
            set: (DD, CD) => {
              DD.ambientTextureStrength = CD
            }
          },
          metadata: CD
        }, fI, bI), (0, HD.k)(DD, null, VC, {
          kind: "accessor",
          name: "ambientTextureImpactOnAnalyticalLights",
          static: !1,
          private: !1,
          access: {
            has: DD => "ambientTextureImpactOnAnalyticalLights" in DD,
            get: DD => DD.ambientTextureImpactOnAnalyticalLights,
            set: (DD, CD) => {
              DD.ambientTextureImpactOnAnalyticalLights = CD
            }
          },
          metadata: CD
        }, QI, wI), (0, HD.k)(DD, null, zC, {
          kind: "accessor",
          name: "opacityTexture",
          static: !1,
          private: !1,
          access: {
            has: DD => "opacityTexture" in DD,
            get: DD => DD.opacityTexture,
            set: (DD, CD) => {
              DD.opacityTexture = CD
            }
          },
          metadata: CD
        }, SI, BI), (0, HD.k)(DD, null, jC, {
          kind: "accessor",
          name: "reflectionTexture",
          static: !1,
          private: !1,
          access: {
            has: DD => "reflectionTexture" in DD,
            get: DD => DD.reflectionTexture,
            set: (DD, CD) => {
              DD.reflectionTexture = CD
            }
          },
          metadata: CD
        }, yI, MI), (0, HD.k)(DD, null, lC, {
          kind: "accessor",
          name: "emissiveTexture",
          static: !1,
          private: !1,
          access: {
            has: DD => "emissiveTexture" in DD,
            get: DD => DD.emissiveTexture,
            set: (DD, CD) => {
              DD.emissiveTexture = CD
            }
          },
          metadata: CD
        }, tI, ZI), (0, HD.k)(DD, null, LC, {
          kind: "accessor",
          name: "reflectivityTexture",
          static: !1,
          private: !1,
          access: {
            has: DD => "reflectivityTexture" in DD,
            get: DD => DD.reflectivityTexture,
            set: (DD, CD) => {
              DD.reflectivityTexture = CD
            }
          },
          metadata: CD
        }, oI, vI), (0, HD.k)(DD, null, TC, {
          kind: "accessor",
          name: "metallicTexture",
          static: !1,
          private: !1,
          access: {
            has: DD => "metallicTexture" in DD,
            get: DD => DD.metallicTexture,
            set: (DD, CD) => {
              DD.metallicTexture = CD
            }
          },
          metadata: CD
        }, NI, gI), (0, HD.k)(DD, null, GC, {
          kind: "accessor",
          name: "metallic",
          static: !1,
          private: !1,
          access: {
            has: DD => "metallic" in DD,
            get: DD => DD.metallic,
            set: (DD, CD) => {
              DD.metallic = CD
            }
          },
          metadata: CD
        }, XI, mI), (0, HD.k)(DD, null, RC, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: DD => "roughness" in DD,
            get: DD => DD.roughness,
            set: (DD, CD) => {
              DD.roughness = CD
            }
          },
          metadata: CD
        }, nI, OI), (0, HD.k)(DD, null, kC, {
          kind: "accessor",
          name: "metallicF0Factor",
          static: !1,
          private: !1,
          access: {
            has: DD => "metallicF0Factor" in DD,
            get: DD => DD.metallicF0Factor,
            set: (DD, CD) => {
              DD.metallicF0Factor = CD
            }
          },
          metadata: CD
        }, PI, HI), (0, HD.k)(DD, null, dC, {
          kind: "accessor",
          name: "metallicReflectanceColor",
          static: !1,
          private: !1,
          access: {
            has: DD => "metallicReflectanceColor" in DD,
            get: DD => DD.metallicReflectanceColor,
            set: (DD, CD) => {
              DD.metallicReflectanceColor = CD
            }
          },
          metadata: CD
        }, UI, xI), (0, HD.k)(DD, null, YC, {
          kind: "accessor",
          name: "useOnlyMetallicFromMetallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: DD => "useOnlyMetallicFromMetallicReflectanceTexture" in DD,
            get: DD => DD.useOnlyMetallicFromMetallicReflectanceTexture,
            set: (DD, CD) => {
              DD.useOnlyMetallicFromMetallicReflectanceTexture = CD
            }
          },
          metadata: CD
        }, qI, JI), (0, HD.k)(DD, null, WC, {
          kind: "accessor",
          name: "metallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: DD => "metallicReflectanceTexture" in DD,
            get: DD => DD.metallicReflectanceTexture,
            set: (DD, CD) => {
              DD.metallicReflectanceTexture = CD
            }
          },
          metadata: CD
        }, KI, aI), (0, HD.k)(DD, null, sC, {
          kind: "accessor",
          name: "reflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: DD => "reflectanceTexture" in DD,
            get: DD => DD.reflectanceTexture,
            set: (DD, CD) => {
              DD.reflectanceTexture = CD
            }
          },
          metadata: CD
        }, VI, zI), (0, HD.k)(DD, null, EC, {
          kind: "accessor",
          name: "microSurfaceTexture",
          static: !1,
          private: !1,
          access: {
            has: DD => "microSurfaceTexture" in DD,
            get: DD => DD.microSurfaceTexture,
            set: (DD, CD) => {
              DD.microSurfaceTexture = CD
            }
          },
          metadata: CD
        }, jI, lI), (0, HD.k)(DD, null, eC, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: DD => "bumpTexture" in DD,
            get: DD => DD.bumpTexture,
            set: (DD, CD) => {
              DD.bumpTexture = CD
            }
          },
          metadata: CD
        }, LI, TI), (0, HD.k)(DD, null, uC, {
          kind: "accessor",
          name: "lightmapTexture",
          static: !1,
          private: !1,
          access: {
            has: DD => "lightmapTexture" in DD,
            get: DD => DD.lightmapTexture,
            set: (DD, CD) => {
              DD.lightmapTexture = CD
            }
          },
          metadata: CD
        }, GI, RI), (0, HD.k)(DD, null, hC, {
          kind: "accessor",
          name: "ambientColor",
          static: !1,
          private: !1,
          access: {
            has: DD => "ambientColor" in DD,
            get: DD => DD.ambientColor,
            set: (DD, CD) => {
              DD.ambientColor = CD
            }
          },
          metadata: CD
        }, kI, dI), (0, HD.k)(DD, null, rC, {
          kind: "accessor",
          name: "albedoColor",
          static: !1,
          private: !1,
          access: {
            has: DD => "albedoColor" in DD,
            get: DD => DD.albedoColor,
            set: (DD, CD) => {
              DD.albedoColor = CD
            }
          },
          metadata: CD
        }, YI, WI), (0, HD.k)(DD, null, AC, {
          kind: "accessor",
          name: "baseWeight",
          static: !1,
          private: !1,
          access: {
            has: DD => "baseWeight" in DD,
            get: DD => DD.baseWeight,
            set: (DD, CD) => {
              DD.baseWeight = CD
            }
          },
          metadata: CD
        }, sI, EI), (0, HD.k)(DD, null, FC, {
          kind: "accessor",
          name: "baseDiffuseRoughness",
          static: !1,
          private: !1,
          access: {
            has: DD => "baseDiffuseRoughness" in DD,
            get: DD => DD.baseDiffuseRoughness,
            set: (DD, CD) => {
              DD.baseDiffuseRoughness = CD
            }
          },
          metadata: CD
        }, eI, uI), (0, HD.k)(DD, null, Dc, {
          kind: "accessor",
          name: "reflectivityColor",
          static: !1,
          private: !1,
          access: {
            has: DD => "reflectivityColor" in DD,
            get: DD => DD.reflectivityColor,
            set: (DD, CD) => {
              DD.reflectivityColor = CD
            }
          },
          metadata: CD
        }, hI, rI), (0, HD.k)(DD, null, Cc, {
          kind: "accessor",
          name: "reflectionColor",
          static: !1,
          private: !1,
          access: {
            has: DD => "reflectionColor" in DD,
            get: DD => DD.reflectionColor,
            set: (DD, CD) => {
              DD.reflectionColor = CD
            }
          },
          metadata: CD
        }, AI, FI), (0, HD.k)(DD, null, cc, {
          kind: "accessor",
          name: "emissiveColor",
          static: !1,
          private: !1,
          access: {
            has: DD => "emissiveColor" in DD,
            get: DD => DD.emissiveColor,
            set: (DD, CD) => {
              DD.emissiveColor = CD
            }
          },
          metadata: CD
        }, Dp, Cp), (0, HD.k)(DD, null, Ic, {
          kind: "accessor",
          name: "microSurface",
          static: !1,
          private: !1,
          access: {
            has: DD => "microSurface" in DD,
            get: DD => DD.microSurface,
            set: (DD, CD) => {
              DD.microSurface = CD
            }
          },
          metadata: CD
        }, cp, Ip), (0, HD.k)(DD, null, pc, {
          kind: "accessor",
          name: "useLightmapAsShadowmap",
          static: !1,
          private: !1,
          access: {
            has: DD => "useLightmapAsShadowmap" in DD,
            get: DD => DD.useLightmapAsShadowmap,
            set: (DD, CD) => {
              DD.useLightmapAsShadowmap = CD
            }
          },
          metadata: CD
        }, pp, ip), (0, HD.k)(DD, null, ic, {
          kind: "accessor",
          name: "useAlphaFromAlbedoTexture",
          static: !1,
          private: !1,
          access: {
            has: DD => "useAlphaFromAlbedoTexture" in DD,
            get: DD => DD.useAlphaFromAlbedoTexture,
            set: (DD, CD) => {
              DD.useAlphaFromAlbedoTexture = CD
            }
          },
          metadata: CD
        }, fp, bp), (0, HD.k)(DD, null, fc, {
          kind: "accessor",
          name: "forceAlphaTest",
          static: !1,
          private: !1,
          access: {
            has: DD => "forceAlphaTest" in DD,
            get: DD => DD.forceAlphaTest,
            set: (DD, CD) => {
              DD.forceAlphaTest = CD
            }
          },
          metadata: CD
        }, Qp, wp), (0, HD.k)(DD, null, bc, {
          kind: "accessor",
          name: "alphaCutOff",
          static: !1,
          private: !1,
          access: {
            has: DD => "alphaCutOff" in DD,
            get: DD => DD.alphaCutOff,
            set: (DD, CD) => {
              DD.alphaCutOff = CD
            }
          },
          metadata: CD
        }, Sp, Bp), (0, HD.k)(DD, null, Qc, {
          kind: "accessor",
          name: "useSpecularOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: DD => "useSpecularOverAlpha" in DD,
            get: DD => DD.useSpecularOverAlpha,
            set: (DD, CD) => {
              DD.useSpecularOverAlpha = CD
            }
          },
          metadata: CD
        }, yp, Mp), (0, HD.k)(DD, null, wc, {
          kind: "accessor",
          name: "useMicroSurfaceFromReflectivityMapAlpha",
          static: !1,
          private: !1,
          access: {
            has: DD => "useMicroSurfaceFromReflectivityMapAlpha" in DD,
            get: DD => DD.useMicroSurfaceFromReflectivityMapAlpha,
            set: (DD, CD) => {
              DD.useMicroSurfaceFromReflectivityMapAlpha = CD
            }
          },
          metadata: CD
        }, tp, Zp), (0, HD.k)(DD, null, Sc, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureAlpha",
          static: !1,
          private: !1,
          access: {
            has: DD => "useRoughnessFromMetallicTextureAlpha" in DD,
            get: DD => DD.useRoughnessFromMetallicTextureAlpha,
            set: (DD, CD) => {
              DD.useRoughnessFromMetallicTextureAlpha = CD
            }
          },
          metadata: CD
        }, op, vp), (0, HD.k)(DD, null, Bc, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureGreen",
          static: !1,
          private: !1,
          access: {
            has: DD => "useRoughnessFromMetallicTextureGreen" in DD,
            get: DD => DD.useRoughnessFromMetallicTextureGreen,
            set: (DD, CD) => {
              DD.useRoughnessFromMetallicTextureGreen = CD
            }
          },
          metadata: CD
        }, Np, gp), (0, HD.k)(DD, null, yc, {
          kind: "accessor",
          name: "useMetallnessFromMetallicTextureBlue",
          static: !1,
          private: !1,
          access: {
            has: DD => "useMetallnessFromMetallicTextureBlue" in DD,
            get: DD => DD.useMetallnessFromMetallicTextureBlue,
            set: (DD, CD) => {
              DD.useMetallnessFromMetallicTextureBlue = CD
            }
          },
          metadata: CD
        }, Xp, mp), (0, HD.k)(DD, null, Mc, {
          kind: "accessor",
          name: "useAmbientOcclusionFromMetallicTextureRed",
          static: !1,
          private: !1,
          access: {
            has: DD => "useAmbientOcclusionFromMetallicTextureRed" in DD,
            get: DD => DD.useAmbientOcclusionFromMetallicTextureRed,
            set: (DD, CD) => {
              DD.useAmbientOcclusionFromMetallicTextureRed = CD
            }
          },
          metadata: CD
        }, np, Op), (0, HD.k)(DD, null, tc, {
          kind: "accessor",
          name: "useAmbientInGrayScale",
          static: !1,
          private: !1,
          access: {
            has: DD => "useAmbientInGrayScale" in DD,
            get: DD => DD.useAmbientInGrayScale,
            set: (DD, CD) => {
              DD.useAmbientInGrayScale = CD
            }
          },
          metadata: CD
        }, Pp, Hp), (0, HD.k)(DD, null, Zc, {
          kind: "accessor",
          name: "useAutoMicroSurfaceFromReflectivityMap",
          static: !1,
          private: !1,
          access: {
            has: DD => "useAutoMicroSurfaceFromReflectivityMap" in DD,
            get: DD => DD.useAutoMicroSurfaceFromReflectivityMap,
            set: (DD, CD) => {
              DD.useAutoMicroSurfaceFromReflectivityMap = CD
            }
          },
          metadata: CD
        }, Up, xp), (0, HD.k)(DD, null, oc, {
          kind: "getter",
          name: "usePhysicalLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: DD => "usePhysicalLightFalloff" in DD,
            get: DD => DD.usePhysicalLightFalloff
          },
          metadata: CD
        }, null, Rc), (0, HD.k)(DD, null, vc, {
          kind: "getter",
          name: "useGLTFLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: DD => "useGLTFLightFalloff" in DD,
            get: DD => DD.useGLTFLightFalloff
          },
          metadata: CD
        }, null, Rc), (0, HD.k)(DD, null, Nc, {
          kind: "accessor",
          name: "useRadianceOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: DD => "useRadianceOverAlpha" in DD,
            get: DD => DD.useRadianceOverAlpha,
            set: (DD, CD) => {
              DD.useRadianceOverAlpha = CD
            }
          },
          metadata: CD
        }, qp, Jp), (0, HD.k)(DD, null, gc, {
          kind: "accessor",
          name: "useObjectSpaceNormalMap",
          static: !1,
          private: !1,
          access: {
            has: DD => "useObjectSpaceNormalMap" in DD,
            get: DD => DD.useObjectSpaceNormalMap,
            set: (DD, CD) => {
              DD.useObjectSpaceNormalMap = CD
            }
          },
          metadata: CD
        }, Kp, ap), (0, HD.k)(DD, null, Xc, {
          kind: "accessor",
          name: "useParallax",
          static: !1,
          private: !1,
          access: {
            has: DD => "useParallax" in DD,
            get: DD => DD.useParallax,
            set: (DD, CD) => {
              DD.useParallax = CD
            }
          },
          metadata: CD
        }, Vp, zp), (0, HD.k)(DD, null, mc, {
          kind: "accessor",
          name: "useParallaxOcclusion",
          static: !1,
          private: !1,
          access: {
            has: DD => "useParallaxOcclusion" in DD,
            get: DD => DD.useParallaxOcclusion,
            set: (DD, CD) => {
              DD.useParallaxOcclusion = CD
            }
          },
          metadata: CD
        }, jp, lp), (0, HD.k)(DD, null, nc, {
          kind: "accessor",
          name: "parallaxScaleBias",
          static: !1,
          private: !1,
          access: {
            has: DD => "parallaxScaleBias" in DD,
            get: DD => DD.parallaxScaleBias,
            set: (DD, CD) => {
              DD.parallaxScaleBias = CD
            }
          },
          metadata: CD
        }, Lp, Tp), (0, HD.k)(DD, null, Oc, {
          kind: "accessor",
          name: "disableLighting",
          static: !1,
          private: !1,
          access: {
            has: DD => "disableLighting" in DD,
            get: DD => DD.disableLighting,
            set: (DD, CD) => {
              DD.disableLighting = CD
            }
          },
          metadata: CD
        }, Gp, Rp), (0, HD.k)(DD, null, Pc, {
          kind: "accessor",
          name: "forceIrradianceInFragment",
          static: !1,
          private: !1,
          access: {
            has: DD => "forceIrradianceInFragment" in DD,
            get: DD => DD.forceIrradianceInFragment,
            set: (DD, CD) => {
              DD.forceIrradianceInFragment = CD
            }
          },
          metadata: CD
        }, kp, dp), (0, HD.k)(DD, null, Hc, {
          kind: "accessor",
          name: "maxSimultaneousLights",
          static: !1,
          private: !1,
          access: {
            has: DD => "maxSimultaneousLights" in DD,
            get: DD => DD.maxSimultaneousLights,
            set: (DD, CD) => {
              DD.maxSimultaneousLights = CD
            }
          },
          metadata: CD
        }, Yp, Wp), (0, HD.k)(DD, null, Uc, {
          kind: "accessor",
          name: "invertNormalMapX",
          static: !1,
          private: !1,
          access: {
            has: DD => "invertNormalMapX" in DD,
            get: DD => DD.invertNormalMapX,
            set: (DD, CD) => {
              DD.invertNormalMapX = CD
            }
          },
          metadata: CD
        }, sp, Ep), (0, HD.k)(DD, null, xc, {
          kind: "accessor",
          name: "invertNormalMapY",
          static: !1,
          private: !1,
          access: {
            has: DD => "invertNormalMapY" in DD,
            get: DD => DD.invertNormalMapY,
            set: (DD, CD) => {
              DD.invertNormalMapY = CD
            }
          },
          metadata: CD
        }, ep, hp), (0, HD.k)(DD, null, qc, {
          kind: "accessor",
          name: "twoSidedLighting",
          static: !1,
          private: !1,
          access: {
            has: DD => "twoSidedLighting" in DD,
            get: DD => DD.twoSidedLighting,
            set: (DD, CD) => {
              DD.twoSidedLighting = CD
            }
          },
          metadata: CD
        }, rp, Ap), (0, HD.k)(DD, null, Jc, {
          kind: "accessor",
          name: "useAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: DD => "useAlphaFresnel" in DD,
            get: DD => DD.useAlphaFresnel,
            set: (DD, CD) => {
              DD.useAlphaFresnel = CD
            }
          },
          metadata: CD
        }, Fp, Di), (0, HD.k)(DD, null, Kc, {
          kind: "accessor",
          name: "useLinearAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: DD => "useLinearAlphaFresnel" in DD,
            get: DD => DD.useLinearAlphaFresnel,
            set: (DD, CD) => {
              DD.useLinearAlphaFresnel = CD
            }
          },
          metadata: CD
        }, Ci, ci), (0, HD.k)(DD, null, ac, {
          kind: "accessor",
          name: "environmentBRDFTexture",
          static: !1,
          private: !1,
          access: {
            has: DD => "environmentBRDFTexture" in DD,
            get: DD => DD.environmentBRDFTexture,
            set: (DD, CD) => {
              DD.environmentBRDFTexture = CD
            }
          },
          metadata: CD
        }, Ii, ii), (0, HD.k)(DD, null, Vc, {
          kind: "accessor",
          name: "forceNormalForward",
          static: !1,
          private: !1,
          access: {
            has: DD => "forceNormalForward" in DD,
            get: DD => DD.forceNormalForward,
            set: (DD, CD) => {
              DD.forceNormalForward = CD
            }
          },
          metadata: CD
        }, fi, bi), (0, HD.k)(DD, null, zc, {
          kind: "accessor",
          name: "enableSpecularAntiAliasing",
          static: !1,
          private: !1,
          access: {
            has: DD => "enableSpecularAntiAliasing" in DD,
            get: DD => DD.enableSpecularAntiAliasing,
            set: (DD, CD) => {
              DD.enableSpecularAntiAliasing = CD
            }
          },
          metadata: CD
        }, Qi, wi), (0, HD.k)(DD, null, jc, {
          kind: "accessor",
          name: "useHorizonOcclusion",
          static: !1,
          private: !1,
          access: {
            has: DD => "useHorizonOcclusion" in DD,
            get: DD => DD.useHorizonOcclusion,
            set: (DD, CD) => {
              DD.useHorizonOcclusion = CD
            }
          },
          metadata: CD
        }, Si, Bi), (0, HD.k)(DD, null, lc, {
          kind: "accessor",
          name: "useRadianceOcclusion",
          static: !1,
          private: !1,
          access: {
            has: DD => "useRadianceOcclusion" in DD,
            get: DD => DD.useRadianceOcclusion,
            set: (DD, CD) => {
              DD.useRadianceOcclusion = CD
            }
          },
          metadata: CD
        }, yi, Mi), (0, HD.k)(DD, null, Lc, {
          kind: "accessor",
          name: "unlit",
          static: !1,
          private: !1,
          access: {
            has: DD => "unlit" in DD,
            get: DD => DD.unlit,
            set: (DD, CD) => {
              DD.unlit = CD
            }
          },
          metadata: CD
        }, ti, Zi), (0, HD.k)(DD, null, Tc, {
          kind: "accessor",
          name: "applyDecalMapAfterDetailMap",
          static: !1,
          private: !1,
          access: {
            has: DD => "applyDecalMapAfterDetailMap" in DD,
            get: DD => DD.applyDecalMapAfterDetailMap,
            set: (DD, CD) => {
              DD.applyDecalMapAfterDetailMap = CD
            }
          },
          metadata: CD
        }, oi, vi), CD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: CD
        })
      })(), DD.PBRMATERIAL_OPAQUE = nC.PBRMATERIAL_OPAQUE, DD.PBRMATERIAL_ALPHATEST = nC.PBRMATERIAL_ALPHATEST, DD.PBRMATERIAL_ALPHABLEND = nC.PBRMATERIAL_ALPHABLEND, DD.PBRMATERIAL_ALPHATESTANDBLEND = nC.PBRMATERIAL_ALPHATESTANDBLEND, DD.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = nC.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, DD
    })();
    const lp = "KHR_materials_diffuse_transmission";

    function Lp(DD, CD) {
      const cD = CD.subSurface;
      let ID = null;
      return cD.translucencyIntensityTexture ? ID = cD.translucencyIntensityTexture : cD.thicknessTexture && cD.useMaskFromThicknessTexture && (ID = cD.thicknessTexture), ID && !cD.useGltfStyleTextures ? (xD.e.Warn(`${DD}: Translucency intensity texture is not supported when useGltfStyleTextures = false. Ignoring for: ${CD.name}`, 1), null) : ID
    }
    class Tp {
      constructor(DD) {
        this.name = lp, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = DD
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(DD, CD, cD) {
        const ID = [];
        if (cD instanceof jp && this._isExtensionEnabled(cD)) {
          const CD = Lp(DD, cD);
          return CD && ID.push(CD), cD.subSurface.translucencyColorTexture && ID.push(cD.subSurface.translucencyColorTexture), ID
        }
        return ID
      }
      _isExtensionEnabled(DD) {
        if (DD.unlit) return !1;
        const CD = DD.subSurface;
        return !!CD.isTranslucencyEnabled && (!DD.unlit && !CD.useAlbedoToTintTranslucency && CD.useGltfStyleTextures && 1 === CD.volumeIndexOfRefraction && 0 === CD.minimumThickness && 0 === CD.maximumThickness)
      }
      postExportMaterialAsync(DD, CD, cD) {
        return new Promise((ID => {
          if (cD instanceof jp && this._isExtensionEnabled(cD)) {
            this._wasUsed = !0;
            const ID = cD.subSurface,
              pD = Lp(DD, cD),
              iD = 0 == ID.translucencyIntensity ? void 0 : ID.translucencyIntensity,
              fD = this._exporter._materialExporter.getTextureInfo(pD) ?? void 0,
              bD = !ID.translucencyColor || ID.translucencyColor.equalsFloats(1, 1, 1) ? void 0 : ID.translucencyColor.XcD(),
              QD = this._exporter._materialExporter.getTextureInfo(ID.translucencyColorTexture) ?? void 0,
              wD = {
                diffuseTransmissionFactor: iD,
                diffuseTransmissionTexture: fD,
                diffuseTransmissionColorFactor: bD,
                diffuseTransmissionColorTexture: QD
              };
            (fD || QD) && this._exporter._materialNeedsUVsSet.add(cD), CD.extensions = CD.extensions || {}, CD.extensions[lp] = wD
          }
          ID(CD)
        }))
      }
    }
    let Gp = !1;

    function Rp() {
      Gp || (Gp = !0, zI.RegisterExtension(lp, (DD => new Tp(DD))))
    }
    Rp();
    const kp = "KHR_materials_dispersion";
    class dp {
      constructor() {
        this.name = kp, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(DD) {
        if (DD.unlit) return !1;
        const CD = DD.subSurface;
        return !(!CD.isRefractionEnabled && !CD.isDispersionEnabled)
      }
      postExportMaterialAsync(DD, CD, cD) {
        return new Promise((DD => {
          if (cD instanceof jp && this._isExtensionEnabled(cD)) {
            this._wasUsed = !0;
            const DD = {
              dispersion: cD.subSurface.dispersion
            };
            CD.extensions = CD.extensions || {}, CD.extensions[kp] = DD
          }
          DD(CD)
        }))
      }
    }
    let Yp = !1;

    function Wp() {
      Yp || (Yp = !0, zI.RegisterExtension(kp, (() => new dp)))
    }
    Wp();
    const sp = "KHR_materials_emissive_strength";
    class Ep {
      constructor() {
        this.name = sp, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAsync(DD, CD, cD) {
        return await new Promise((DD => {
          if (!(cD instanceof jp)) return DD(CD);
          const ID = cD.emissiveColor.scale(cD.emissiveIntensity),
            pD = Math.max(...ID.XcD());
          if (pD > 1) {
            CD.emissiveFactor = ID.scale(1 / pD).XcD(), this._wasUsed = !0;
            const DD = {
              emissiveStrength: pD
            };
            CD.extensions || (CD.extensions = {}), CD.extensions[sp] = DD
          } else CD.emissiveFactor = ID.XcD();
          return DD(CD)
        }))
      }
    }
    let ep = !1;

    function hp() {
      ep || (ep = !0, zI.RegisterExtension(sp, (() => new Ep)))
    }
    hp();
    const rp = "KHR_materials_ior";
    class Ap {
      constructor() {
        this.name = rp, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(DD) {
        return !DD.unlit && (DD instanceof AC ? 1.5 != DD.specularIor : DD instanceof jp && (void 0 != DD.indexOfRefraction && 1.5 != DD.indexOfRefraction))
      }
      postExportMaterialAsync(DD, CD, cD) {
        return new Promise((DD => {
          if (cD instanceof jp && this._isExtensionEnabled(cD)) {
            this._wasUsed = !0;
            const DD = {
              ior: cD.indexOfRefraction
            };
            CD.extensions = CD.extensions || {}, CD.extensions[rp] = DD
          } else if (cD instanceof AC && this._isExtensionEnabled(cD)) {
            this._wasUsed = !0;
            const DD = {
              ior: cD.specularIor
            };
            CD.extensions = CD.extensions || {}, CD.extensions[rp] = DD
          }
          DD(CD)
        }))
      }
    }
    let Fp = !1;

    function Di() {
      Fp || (Fp = !0, zI.RegisterExtension(rp, (() => new Ap)))
    }
    Di();
    const Ci = "KHR_materials_iridescence";
    class ci {
      constructor(DD) {
        this.name = Ci, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = DD
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(DD, CD, cD) {
        const ID = [];
        if (cD instanceof nC) {
          if (cD.iridescence.isEnabled) return cD.iridescence.texture && ID.push(cD.iridescence.texture), cD.iridescence.thicknessTexture && cD.iridescence.thicknessTexture !== cD.iridescence.texture && ID.push(cD.iridescence.thicknessTexture), ID
        } else if (cD instanceof AC && cD.thinFilmWeight > 0) return cD.thinFilmWeightTexture && ID.push(cD.thinFilmWeightTexture), cD.thinFilmThicknessTexture && cD.thinFilmThicknessTexture !== cD.thinFilmWeightTexture && ID.push(cD.thinFilmThicknessTexture), ID;
        return []
      }
      postExportMaterialAsync(DD, CD, cD) {
        return new Promise((DD => {
          if (cD instanceof nC) {
            if (!cD.iridescence.isEnabled) return void DD(CD);
            this._wasUsed = !0, CD.extensions = CD.extensions || {};
            const ID = this._exporter._materialExporter.getTextureInfo(cD.iridescence.texture),
              pD = this._exporter._materialExporter.getTextureInfo(cD.iridescence.thicknessTexture),
              iD = {
                iridescenceFactor: cD.iridescence.intensity,
                iridescenceIor: cD.iridescence.indexOfRefraction,
                iridescenceThicknessMinimum: cD.iridescence.minimumThickness,
                iridescenceThicknessMaximum: cD.iridescence.maximumThickness,
                iridescenceTexture: ID ?? void 0,
                iridescenceThicknessTexture: pD ?? void 0
              };
            null === iD.iridescenceTexture && null === iD.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(cD), CD.extensions[Ci] = iD
          } else if (cD instanceof AC) {
            if (cD.thinFilmWeight <= 0) return void DD(CD);
            this._wasUsed = !0, CD.extensions = CD.extensions || {};
            const ID = this._exporter._materialExporter.getTextureInfo(cD.thinFilmWeightTexture),
              pD = this._exporter._materialExporter.getTextureInfo(cD.thinFilmThicknessTexture),
              iD = {
                iridescenceFactor: cD.thinFilmWeight,
                iridescenceIor: cD.thinFilmIor,
                iridescenceThicknessMinimum: 1e3 * cD.thinFilmThicknessMin,
                iridescenceThicknessMaximum: 1e3 * cD.thinFilmThickness,
                iridescenceTexture: ID ?? void 0,
                iridescenceThicknessTexture: pD ?? void 0
              };
            null === iD.iridescenceTexture && null === iD.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(cD), CD.extensions[Ci] = iD
          }
          DD(CD)
        }))
      }
    }
    let Ii = !1;

    function ii() {
      Ii || (Ii = !0, zI.RegisterExtension(Ci, (DD => new ci(DD))))
    }
    ii();
    const fi = "KHR_materials_sheen";
    class bi {
      constructor(DD) {
        this.name = fi, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = DD
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(DD, CD, cD) {
        return cD instanceof jp && cD.sheen.isEnabled && cD.sheen.texture ? [cD.sheen.texture] : []
      }
      async postExportMaterialAsync(DD, CD, cD) {
        return await new Promise((DD => {
          if (cD instanceof jp) {
            if (!cD.sheen.isEnabled) return void DD(CD);
            this._wasUsed = !0, null == CD.extensions && (CD.extensions = {});
            const ID = {
              sheenColorFactor: cD.sheen.color.XcD(),
              sheenRoughnessFactor: cD.sheen.roughness ?? 0
            };
            null === ID.sheenColorTexture && null === ID.sheenRoughnessTexture || this._exporter._materialNeedsUVsSet.add(cD), cD.sheen.texture && (ID.sheenColorTexture = this._exporter._materialExporter.getTextureInfo(cD.sheen.texture) ?? void 0), cD.sheen.textureRoughness && !cD.sheen.useRoughnessFromMainTexture ? ID.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(cD.sheen.textureRoughness) ?? void 0 : cD.sheen.texture && cD.sheen.useRoughnessFromMainTexture && (ID.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(cD.sheen.texture) ?? void 0), CD.extensions[fi] = ID
          }
          DD(CD)
        }))
      }
    }
    let Qi = !1;

    function wi() {
      Qi || (Qi = !0, zI.RegisterExtension(fi, (DD => new bi(DD))))
    }
    wi();
    const Si = "KHR_materials_fuzz";

    function Bi(DD, CD) {
      const cD = new JD.c(CD.name, CD.hq());
      return cD._texture = DD, cD.coordinatesIndex = CD.coordinatesIndex, CD instanceof JD.c && (cD.uOffset = CD.uOffset, cD.vOffset = CD.vOffset, cD.uScale = CD.uScale, cD.vScale = CD.vScale, cD.wAng = CD.wAng), cD.wrapU = CD.wrapU, cD.wrapV = CD.wrapV, cD
    }
    class yi {
      constructor(DD) {
        this.name = Si, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = DD
      }
      dispose() {
        for (const DD of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[DD].dispose()
        }
        this._mergedTexturesMap = {};
        for (const DD of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[DD].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(DD, CD, cD) {
        if (cD instanceof AC) {
          const DD = [];
          if (cD.fuzzWeight > 0) {
            cD.fuzzWeightTexture && DD.push(cD.fuzzWeightTexture);
            let CD = !1;
            if (cD.fuzzRoughnessTexture && (cD._useFuzzRoughnessFromTextureAlpha ? DD.push(cD.fuzzRoughnessTexture) : CD = !0), cD.fuzzColorTexture && !CD && DD.push(cD.fuzzColorTexture), CD) {
              const CD = function(DD) {
                const CD = DD.fuzzColorTexture,
                  cD = CD && CD.getInternalTexture() ? CD.getInternalTexture().uniqueId : "NoFuzzColor",
                  ID = DD.fuzzRoughnessTexture;
                return `FuzzColor_${cD}_FuzzRoughness_${ID&&ID.getInternalTexture()?ID.getInternalTexture().uniqueId:"NoFuzzRoughness"}`
              }(cD);
              if (!this._cachedInternalTexturesMap[CD]) {
                const DD = await async function(DD) {
                  const CD = DD.hq(),
                    cD = DD.fuzzColorTexture,
                    ID = DD.fuzzRoughnessTexture;
                  return cD || ID ? (await fc("FuzzTexture", wc(cD ? bc(cD, 0) : Qc(1), cD ? bc(cD, 1) : Qc(1), cD ? bc(cD, 2) : Qc(1), ID ? bc(ID, DD._useFuzzRoughnessFromTextureAlpha ? 3 : 0) : Qc(1)), CD)).getInternalTexture() : null
                }(cD);
                DD && (this._cachedInternalTexturesMap[CD] = DD)
              }
              this._cachedInternalTexturesMap[CD] && (cD.fuzzColorTexture && (this._mergedTexturesMap[cD.fuzzColorTexture.uniqueId] = Bi(this._cachedInternalTexturesMap[CD], cD.fuzzColorTexture), DD.push(this._mergedTexturesMap[cD.fuzzColorTexture.uniqueId])), cD.fuzzRoughnessTexture && (this._mergedTexturesMap[cD.fuzzRoughnessTexture.uniqueId] = Bi(this._cachedInternalTexturesMap[CD], cD.fuzzRoughnessTexture), DD.push(this._mergedTexturesMap[cD.fuzzRoughnessTexture.uniqueId])))
            }
          }
          return DD
        }
        return []
      }
      async postExportMaterialAsync(DD, CD, cD) {
        return await new Promise((DD => {
          if (cD instanceof AC) {
            if (0 == cD.fuzzWeight) return void DD(CD);
            this._wasUsed = !0, null == CD.extensions && (CD.extensions = {});
            const ID = {
              fuzzFactor: cD.fuzzWeight,
              fuzzColorFactor: cD.fuzzColor.XcD(),
              fuzzRoughnessFactor: cD.fuzzRoughness
            };
            let pD, iD;
            cD.fuzzWeightTexture && (ID.fuzzTexture = this._exporter._materialExporter.getTextureInfo(cD.fuzzWeightTexture) ?? void 0), cD.fuzzColorTexture && (pD = this._mergedTexturesMap[cD.fuzzColorTexture.uniqueId] ? this._mergedTexturesMap[cD.fuzzColorTexture.uniqueId] : cD.fuzzColorTexture, ID.fuzzColorTexture = this._exporter._materialExporter.getTextureInfo(pD) ?? void 0), cD.fuzzRoughnessTexture && (iD = this._mergedTexturesMap[cD.fuzzRoughnessTexture.uniqueId] ? this._mergedTexturesMap[cD.fuzzRoughnessTexture.uniqueId] : cD.fuzzRoughnessTexture, ID.fuzzRoughnessTexture = this._exporter._materialExporter.getTextureInfo(iD) ?? void 0), null === ID.fuzzColorTexture && null === ID.fuzzRoughnessTexture || this._exporter._materialNeedsUVsSet.add(cD), CD.extensions[Si] = ID
          }
          DD(CD)
        }))
      }
    }
    let Mi = !1;

    function ti() {
      Mi || (Mi = !0, zI.RegisterExtension(Si, (DD => new yi(DD))))
    }
    ti();
    const Zi = "KHR_materials_specular";
    class oi {
      constructor(DD) {
        this.name = Zi, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = DD
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(DD, CD, cD) {
        const ID = [];
        return cD instanceof jp && this._isExtensionEnabled(cD) ? (cD.metallicReflectanceTexture && ID.push(cD.metallicReflectanceTexture), cD.reflectanceTexture && ID.push(cD.reflectanceTexture), ID) : ID
      }
      _isExtensionEnabled(DD) {
        return !DD.unlit && (void 0 != DD.metallicF0Factor && 1 != DD.metallicF0Factor || void 0 != DD.metallicReflectanceColor && !DD.metallicReflectanceColor.equalsFloats(1, 1, 1) || this._hasTexturesExtension(DD))
      }
      _hasTexturesExtension(DD) {
        return null != DD.metallicReflectanceTexture || null != DD.reflectanceTexture
      }
      postExportMaterialAsync(DD, CD, cD) {
        return new Promise((DD => {
          var ID;
          if (cD instanceof jp && this._isExtensionEnabled(cD)) {
            this._wasUsed = !0, CD.extensions = CD.extensions || {};
            const DD = this._exporter._materialExporter.getTextureInfo(cD.metallicReflectanceTexture) ?? void 0,
              ID = this._exporter._materialExporter.getTextureInfo(cD.reflectanceTexture) ?? void 0,
              pD = {
                specularFactor: 1 == cD.metallicF0Factor ? void 0 : cD.metallicF0Factor,
                specularTexture: DD,
                specularColorFactor: cD.metallicReflectanceColor.equalsFloats(1, 1, 1) ? void 0 : cD.metallicReflectanceColor.XcD(),
                specularColorTexture: ID
              };
            this._hasTexturesExtension(cD) && this._exporter._materialNeedsUVsSet.add(cD), CD.extensions[Zi] = pD
          } else if (cD instanceof AC) {
            CD.extensions = CD.extensions || {};
            const pD = this._exporter._materialExporter.getTextureInfo(cD.specularWeightTexture) ?? void 0,
              iD = this._exporter._materialExporter.getTextureInfo(cD.specularColorTexture) ?? void 0,
              fD = 1 == cD.specularWeight ? void 0 : cD.specularWeight,
              bD = cD.specularColor.equalsFloats(1, 1, 1) ? void 0 : cD.specularColor.XcD();
            if (!iD && !pD && void 0 === fD && void 0 === bD) return DD(CD);
            this._wasUsed = !0;
            const QD = {
                specularEdgeColorEnabled: !0
              },
              wD = {
                specularFactor: fD,
                specularTexture: pD,
                specularColorFactor: bD,
                specularColorTexture: iD,
                extensions: {}
              };
            wD.extensions.EXT_materials_specular_edge_color = QD, (ID = this._exporter._glTF).extensionsUsed || (ID.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("EXT_materials_specular_edge_color") && this._exporter._glTF.extensionsUsed.push("EXT_materials_specular_edge_color"), (pD || iD) && this._exporter._materialNeedsUVsSet.add(cD), CD.extensions[Zi] = wD
          }
          DD(CD)
        }))
      }
    }
    let vi = !1;

    function Ni() {
      vi || (vi = !0, zI.RegisterExtension(Zi, (DD => new oi(DD))))
    }
    Ni();
    const gi = "KHR_materials_transmission";
    class Xi {
      constructor(DD) {
        this.name = gi, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = DD
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(DD, CD, cD) {
        const ID = [];
        if (cD instanceof jp) {
          if (this._isExtensionEnabled(cD)) return cD.subSurface.refractionIntensityTexture && cD.subSurface.useGltfStyleTextures && ID.push(cD.subSurface.refractionIntensityTexture), ID
        } else cD instanceof AC && (cD.transmissionWeight > 0 && cD.transmissionWeightTexture && (ID.push(cD.transmissionWeightTexture), cD.transmissionColorTexture && ID.push(cD.transmissionColorTexture)), cD.subsurfaceWeight > 0 && cD.subsurfaceWeightTexture && ID.push(cD.subsurfaceWeightTexture));
        return ID
      }
      _isExtensionEnabled(DD) {
        if (DD instanceof AC && !DD.unlit) return DD.transmissionWeight > 0 || DD.subsurfaceWeight > 0;
        if (DD instanceof jp && !DD.unlit) {
          const CD = DD.subSurface;
          return CD.isRefractionEnabled && void 0 != CD.refractionIntensity && 0 != CD.refractionIntensity || null != CD.refractionIntensityTexture && CD.useGltfStyleTextures
        }
        return !1
      }
      async postExportMaterialAsync(DD, CD, cD) {
        if (!this._isExtensionEnabled(cD)) return CD;
        if (cD instanceof jp) {
          this._wasUsed = !0;
          const ID = cD.subSurface,
            pD = {
              transmissionFactor: 0 === ID.refractionIntensity ? void 0 : ID.refractionIntensity
            };
          if (ID.refractionIntensityTexture)
            if (ID.useGltfStyleTextures) {
              this._exporter._materialNeedsUVsSet.add(cD);
              const DD = this._exporter._materialExporter.getTextureInfo(ID.refractionIntensityTexture);
              DD && (pD.transmissionTexture = DD)
            } else xD.e.Warn(`${DD}: Exporting a subsurface refraction intensity texture without \`useGltfStyleTextures\` is not supported`);
          CD.extensions || (CD.extensions = {}), CD.extensions[gi] = pD
        } else if (cD instanceof AC) {
          this._wasUsed = !0;
          const DD = {
            transmissionFactor: (1 - cD.transmissionWeight) * cD.subsurfaceWeight + cD.transmissionWeight
          };
          if (cD.transmissionWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(cD);
            const CD = this._exporter._materialExporter.getTextureInfo(cD.transmissionWeightTexture);
            CD && (DD.transmissionTexture = CD)
          } else if (cD.subsurfaceWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(cD);
            const CD = this._exporter._materialExporter.getTextureInfo(cD.subsurfaceWeightTexture);
            CD && (DD.transmissionTexture = CD)
          }
          if (0 == cD.transmissionDepth && (!cD.transmissionColor.equals(sD.d.White()) || cD.transmissionColorTexture) && CD.pbrMetallicRoughness && (CD.pbrMetallicRoughness.baseColorFactor || (CD.pbrMetallicRoughness.baseColorFactor = [1, 1, 1, 1]), CD.pbrMetallicRoughness.baseColorFactor[0] *= cD.transmissionColor.r, CD.pbrMetallicRoughness.baseColorFactor[1] *= cD.transmissionColor.g, CD.pbrMetallicRoughness.baseColorFactor[2] *= cD.transmissionColor.b, cD.transmissionColorTexture && !CD.pbrMetallicRoughness.baseColorTexture)) {
            const DD = this._exporter._materialExporter.getTextureInfo(cD.transmissionColorTexture);
            DD && (CD.pbrMetallicRoughness.baseColorTexture = DD, this._exporter._materialNeedsUVsSet.add(cD))
          }
          CD.extensions || (CD.extensions = {}), CD.extensions[gi] = DD
        }
        return CD
      }
    }
    let mi = !1;

    function ni() {
      mi || (mi = !0, zI.RegisterExtension(gi, (DD => new Xi(DD))))
    }
    ni();
    var Oi = cD(39400);
    const Pi = "KHR_materials_unlit";
    class Hi {
      constructor() {
        this.name = Pi, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      get wasUsed() {
        return this._wasUsed
      }
      dispose() {}
      postExportMaterialAsync(DD, CD, cD) {
        return new Promise((DD => {
          let ID = !1;
          cD instanceof jp ? ID = cD.unlit : cD instanceof Oi.g && (ID = cD.disableLighting), ID && (this._wasUsed = !0, null == CD.extensions && (CD.extensions = {}), CD.extensions[Pi] = {}), DD(CD)
        }))
      }
    }
    let Ui = !1;

    function xi() {
      Ui || (Ui = !0, zI.RegisterExtension(Pi, (() => new Hi)))
    }
    xi();
    const qi = "KHR_materials_volume";
    class Ji {
      constructor(DD) {
        this.name = qi, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = DD
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(DD, CD, cD) {
        const ID = [];
        if (cD instanceof jp) {
          if (this._isExtensionEnabled(cD)) return cD.subSurface.thicknessTexture && ID.push(cD.subSurface.thicknessTexture), ID
        } else cD instanceof AC && (cD.transmissionWeight > 0 || cD.subsurfaceWeight > 0) && cD.geometryThicknessTexture && ID.push(cD.geometryThicknessTexture);
        return ID
      }
      _isExtensionEnabled(DD) {
        if (DD.unlit) return !1;
        const CD = DD.subSurface;
        return !(!CD.isRefractionEnabled && !CD.isTranslucencyEnabled) && (void 0 != CD.maximumThickness && 0 != CD.maximumThickness || void 0 != CD.tintColorAtDistance && CD.tintColorAtDistance != Number.POSITIVE_INFINITY || void 0 != CD.tintColor && CD.tintColor != sD.d.White() || this._hasTexturesExtension(DD))
      }
      _hasTexturesExtension(DD) {
        return null != DD.subSurface.thicknessTexture
      }
      postExportMaterialAsync(DD, CD, cD) {
        return new Promise((DD => {
          if (cD instanceof jp && this._isExtensionEnabled(cD)) {
            this._wasUsed = !0;
            const DD = cD.subSurface,
              ID = {
                thicknessFactor: 0 == DD.maximumThickness ? void 0 : DD.maximumThickness,
                thicknessTexture: this._exporter._materialExporter.getTextureInfo(DD.thicknessTexture) ?? void 0,
                attenuationDistance: DD.tintColorAtDistance == Number.POSITIVE_INFINITY ? void 0 : DD.tintColorAtDistance,
                attenuationColor: DD.tintColor.equalsFloats(1, 1, 1) ? void 0 : DD.tintColor.XcD()
              };
            this._hasTexturesExtension(cD) && this._exporter._materialNeedsUVsSet.add(cD), CD.extensions = CD.extensions || {}, CD.extensions[qi] = ID
          } else if (cD instanceof AC) {
            const DD = cD.transmissionWeight > 0 && !cD.geometryThinWalled,
              ID = cD.subsurfaceWeight > 0 && !cD.geometryThinWalled;
            if (DD || ID) {
              this._wasUsed = !0;
              const pD = cD.geometryThickness,
                iD = this._exporter._materialExporter.getTextureInfo(cD.geometryThicknessTexture) ?? void 0;
              let fD;
              iD && this._exporter._materialNeedsUVsSet.add(cD);
              const bD = sD.d.White().XcD();
              if (DD && cD.transmissionDepth > 0) {
                const DD = 1 / cD.transmissionDepth;
                let CD = new TD.p(-Math.log(cD.transmissionColor.r) * DD, -Math.log(cD.transmissionColor.g) * DD, -Math.log(cD.transmissionColor.b) * DD);
                const ID = new TD.p(cD.transmissionScatter.r * DD, cD.transmissionScatter.g * DD, cD.transmissionScatter.b * DD),
                  pD = CD.subtract(ID),
                  iD = Math.min(pD.x, pD.y, pD.z);
                iD < 0 && (pD.x = pD.x - iD, pD.y = pD.y - iD, pD.z = pD.z - iD), CD = pD.add(ID);
                fD = 1 / Math.max(CD.x, CD.y, CD.z), bD[0] = Math.exp(-CD.x * fD), bD[1] = Math.exp(-CD.y * fD), bD[2] = Math.exp(-CD.z * fD)
              } else fD = Number.MAX_VALUE, bD[0] = 1, bD[1] = 1, bD[2] = 1;
              let QD = 1;
              const wD = sD.d.White().XcD();
              if (ID) {
                const DD = cD.subsurfaceRadius,
                  CD = cD.subsurfaceRadiusScale,
                  ID = new TD.p(CD.r, CD.g, CD.b).multiplyByFloats(DD, DD, DD),
                  pD = new TD.p(1 / Math.max(ID.x, 1e-6), 1 / Math.max(ID.y, 1e-6), 1 / Math.max(ID.z, 1e-6));
                QD = 1 / Math.max(pD.x, pD.y, pD.z), wD[0] = Math.exp(-pD.x * QD), wD[1] = Math.exp(-pD.y * QD), wD[2] = Math.exp(-pD.z * QD)
              }
              const SD = (1 - cD.transmissionWeight) * cD.subsurfaceWeight,
                BD = SD + cD.transmissionWeight,
                yD = 1 / Math.max(BD, 1e-6),
                MD = cD.transmissionWeight * yD,
                tD = SD * yD,
                ZD = bD.map(((DD, CD) => DD * MD + wD[CD] * tD)),
                oD = {
                  thicknessFactor: pD,
                  thicknessTexture: iD,
                  attenuationDistance: fD * MD + QD * tD,
                  attenuationColor: ZD
                };
              CD.extensions = CD.extensions || {}, CD.extensions[qi] = oD
            }
          }
          DD(CD)
        }))
      }
    }
    let Ki = !1;

    function ai() {
      Ki || (Ki = !0, zI.RegisterExtension(qi, (DD => new Ji(DD))))
    }
    ai();
    const Vi = "KHR_materials_volume_scatter";
    class zi {
      constructor(DD) {
        this.name = Vi, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = DD
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(DD, CD, cD) {
        const ID = [];
        return cD instanceof AC && (cD.transmissionWeight > 0 && cD.transmissionScatterTexture && ID.push(cD.transmissionScatterTexture), cD.subsurfaceWeight > 0 && cD.subsurfaceColorTexture && ID.push(cD.subsurfaceColorTexture)), ID
      }
      _isExtensionEnabled(DD) {
        if (DD.unlit) return !1;
        const CD = DD.transmissionWeight > 0 && !DD.geometryThinWalled && DD.transmissionDepth > 0 && !DD.transmissionScatter.equals(sD.d.Black()),
          cD = DD.subsurfaceWeight > 0 && !DD.geometryThinWalled;
        return !(!CD && !cD)
      }
      postExportMaterialAsync(DD, CD, cD) {
        return new Promise((DD => {
          if (cD instanceof AC && this._isExtensionEnabled(cD)) {
            this._wasUsed = !0;
            let DD = TD.p.Zero(),
              ID = 0;
            if (cD.transmissionWeight > 0) {
              DD = function(DD) {
                const CD = new TD.p(Math.sqrt(1 - DD.x), Math.sqrt(1 - DD.y), Math.sqrt(1 - DD.z)),
                  cD = new TD.p(1, 1, 1),
                  ID = cD.subtract(CD),
                  pD = cD.subtract(new TD.p(.139, .139, .139).multiplyInPlace(CD)),
                  iD = cD.add(new TD.p(1.17, 1.17, 1.17).multiplyInPlace(CD));
                return ID.multiplyInPlace(pD).divideInPlace(iD)
              }(new TD.p(cD.transmissionScatter.r, cD.transmissionScatter.g, cD.transmissionScatter.b)), ID = cD.transmissionScatterAnisotropy
            }
            const pD = TD.p.Zero();
            let iD = 0;
            cD.subsurfaceWeight > 0 && (pD.set(cD.subsurfaceColor.r, cD.subsurfaceColor.g, cD.subsurfaceColor.b), iD = cD.subsurfaceScatterAnisotropy);
            const fD = (1 - cD.transmissionWeight) * cD.subsurfaceWeight,
              bD = fD + cD.transmissionWeight,
              QD = 1 / Math.max(bD, 1e-6),
              wD = cD.transmissionWeight * QD,
              SD = fD * QD,
              BD = {
                multiscatterColorFactor: DD.multiplyByFloats(wD, wD, wD).addInPlace(pD.multiplyByFloats(SD, SD, SD)).XcD(),
                scatterAnisotropy: ID * wD + iD * SD
              };
            if (cD.subsurfaceWeight > 0 && cD.subsurfaceColorTexture) {
              this._exporter._materialNeedsUVsSet.add(cD);
              const DD = this._exporter._materialExporter.getTextureInfo(cD.subsurfaceColorTexture);
              DD && (BD.multiscatterColorTexture = DD)
            } else if (cD.transmissionWeight > 0 && cD.transmissionScatterTexture) {
              this._exporter._materialNeedsUVsSet.add(cD);
              const DD = this._exporter._materialExporter.getTextureInfo(cD.transmissionScatterTexture);
              DD && (BD.multiscatterColorTexture = DD)
            }
            CD.extensions = CD.extensions || {}, CD.extensions[Vi] = BD
          }
          DD(CD)
        }))
      }
    }
    let ji = !1;

    function li() {
      ji || (ji = !0, zI.RegisterExtension(Vi, (DD => new zi(DD)), 101))
    }
    li();
    const Li = "KHR_materials_diffuse_roughness";
    class Ti {
      constructor(DD) {
        this.name = Li, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = DD
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(DD, CD, cD) {
        const ID = [];
        if (cD instanceof nC) {
          if (cD._baseDiffuseRoughness) return cD._baseDiffuseRoughnessTexture && ID.push(cD._baseDiffuseRoughnessTexture), ID
        } else if (cD instanceof AC && cD.baseDiffuseRoughness) return cD.baseDiffuseRoughnessTexture && ID.push(cD.baseDiffuseRoughnessTexture), ID;
        return []
      }
      postExportMaterialAsync(DD, CD, cD) {
        return new Promise((DD => {
          let ID = null,
            pD = null;
          if (cD instanceof nC ? (ID = cD._baseDiffuseRoughness, pD = cD._baseDiffuseRoughnessTexture) : cD instanceof AC && (ID = cD.baseDiffuseRoughness, pD = cD.baseDiffuseRoughnessTexture), !ID) return void DD(CD);
          this._wasUsed = !0, CD.extensions = CD.extensions || {};
          const iD = {
            diffuseRoughnessFactor: ID,
            diffuseRoughnessTexture: this._exporter._materialExporter.getTextureInfo(pD) ?? void 0
          };
          null !== iD.diffuseRoughnessTexture && this._exporter._materialNeedsUVsSet.add(cD), CD.extensions[Li] = iD, DD(CD)
        }))
      }
    }
    let Gi = !1;

    function Ri() {
      Gi || (Gi = !0, zI.RegisterExtension(Li, (DD => new Ti(DD))))
    }
    Ri();
    const ki = "KHR_materials_openpbr";
    class di {
      constructor() {
        this.name = ki, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportMaterialAsync(DD, CD, cD) {
        return new Promise((DD => {
          cD instanceof AC && (this._wasUsed = !0, CD.extensions = CD.extensions || {}, CD.extensions[ki] = {}), DD(CD)
        }))
      }
    }
    let Yi = !1;

    function Wi() {
      Yi || (Yi = !0, zI.RegisterExtension(ki, (() => new di)))
    }
    Wi();
    const si = "KHR_texture_transform";
    class Ei {
      constructor() {
        this.name = si, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportTexture(DD, CD, cD) {
        if (cD.hq() || PC.g.Warn(`${DD}: "scene" is not defined for Babylon texture ${cD.name}!`), (0 !== cD.uAng || 0 !== cD.vAng) && (PC.g.Warn(`${DD}: Texture ${cD.name} with rotation in the u or v axis is not supported in glTF.`), 0 !== cD.uRotationCenter || 0 !== cD.vRotationCenter)) return;
        const ID = {};
        let pD = !1;
        if (0 === cD.uOffset && 0 === cD.vOffset || (ID.offset = [cD.uOffset, cD.vOffset], pD = !0), 1 === cD.uScale && 1 === cD.vScale || (ID.scale = [cD.uScale, cD.vScale], pD = !0), 0 !== cD.wAng) {
          if (0 !== cD.uRotationCenter || 0 !== cD.vRotationCenter) {
            if (cD.homogeneousRotationInUVTransform && cD.uScale !== cD.vScale) return void PC.g.Warn(`${DD}: Texture ${cD.name} with homogenousRotationInUVTransform, non-uniform scaling, and non-zero rotation cannot be exported with ${si}.`);
            PC.g.Warn(`${DD}: Texture ${cD.name} with non-origin rotation center will be exported using an adjusted offset with ${si}.`), ID.offset = function(DD) {
              const {
                uOffset: CD,
                vOffset: cD,
                uRotationCenter: ID,
                vRotationCenter: pD,
                uScale: iD,
                vScale: fD,
                wAng: bD
              } = DD, QD = Math.cos(bD), wD = Math.sin(bD), SD = ID * iD, BD = pD * fD;
              return [CD + (SD * (1 - QD) + BD * wD), cD + (BD * (1 - QD) - SD * wD)]
            }(cD)
          }
          ID.rotation = -cD.wAng, pD = !0
        }
        0 !== cD.coordinatesIndex && (ID.texCoord = cD.coordinatesIndex, pD = !0), pD && (this._wasUsed = !0, CD.extensions || (CD.extensions = {}), CD.extensions[si] = ID)
      }
    }
    let ei = !1;

    function ui() {
      ei || (ei = !0, zI.RegisterExtension(si, (() => new Ei)))
    }
    ui();
    var ri = cD(39193);
    const Ai = "KHR_texture_basisu";
    class Fi {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(DD) {
        this.name = Ai, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = DD
      }
      dispose() {}
      postExportTexture(DD, CD) {
        const cD = this._exporter._textures[CD.index],
          ID = cD.source;
        if (void 0 === ID) return;
        const pD = this._exporter._images[ID];
        "image/ktx2" === (pD.mimeType || (0, ri.i)(pD.uri)) && (cD.source = void 0, cD.extensions || (cD.extensions = {}), cD.extensions[Ai] = {
          source: ID
        }, this._wasUsed = !0)
      }
    }
    let Df = !1;

    function Cf() {
      Df || (Df = !0, zI.RegisterExtension(Ai, (DD => new Fi(DD))))
    }
    Cf();
    const If = "EXT_texture_webp";
    class pf {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(DD) {
        this.name = If, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = DD
      }
      dispose() {}
      postExportTexture(DD, CD) {
        const cD = this._exporter._textures[CD.index],
          ID = cD.source;
        if (void 0 === ID) return;
        const pD = this._exporter._images[ID];
        "image/webp" === (pD.mimeType || (0, ri.i)(pD.uri)) && (cD.source = void 0, cD.extensions || (cD.extensions = {}), cD.extensions[If] = {
          source: ID
        }, this._wasUsed = !0)
      }
    }
    let ff = !1;

    function bf() {
      ff || (ff = !0, zI.RegisterExtension(If, (DD => new pf(DD))))
    }
    bf();
    const Qf = "EXT_texture_avif";
    class wf {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(DD) {
        this.name = Qf, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = DD
      }
      dispose() {}
      postExportTexture(DD, CD) {
        const cD = this._exporter._textures[CD.index],
          ID = cD.source;
        if (void 0 === ID) return;
        const pD = this._exporter._images[ID];
        "image/avif" === (pD.mimeType || (0, ri.i)(pD.uri)) && (cD.source = void 0, cD.extensions || (cD.extensions = {}), cD.extensions[Qf] = {
          source: ID
        }, this._wasUsed = !0)
      }
    }
    let Sf = !1;

    function Bf() {
      Sf || (Sf = !0, zI.RegisterExtension(Qf, (DD => new wf(DD))))
    }
    Bf();
    class yf {
      static CreateSTL(DD) {
        let CD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "stlmesh",
          pD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          iD = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          fD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          bD = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          QD = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        const wD = function(DD, CD, cD) {
            const pD = [3 * DD[cD], 3 * DD[cD + 1], 3 * DD[cD + 2]],
              iD = [new ID.cZ(CD[pD[0]], CD[pD[0] + 2], CD[pD[0] + 1]), new ID.cZ(CD[pD[1]], CD[pD[1] + 2], CD[pD[1] + 1]), new ID.cZ(CD[pD[2]], CD[pD[2] + 2], CD[pD[2] + 1])],
              fD = iD[0].subtract(iD[1]),
              bD = iD[2].subtract(iD[1]);
            return {
              v: iD,
              n: ID.cZ.Cross(bD, fD).normalize()
            }
          },
          BD = function(DD, CD, cD, ID) {
            return CD = yD(DD, CD, cD.x, ID), CD = yD(DD, CD, cD.y, ID), yD(DD, CD, cD.z, ID)
          },
          yD = function(DD, CD, cD, ID) {
            return DD.setFloat32(CD, cD, ID), CD + 4
          },
          tD = function(DD) {
            if (bD) {
              let CD = DD;
              DD instanceof MD.b && (CD = DD.OID);
              const cD = CD.getVerticesData(SD.e.PositionKind, !0, !0);
              if (!cD) return [];
              const pD = ID.cZ.Zero();
              let iD;
              for (iD = 0; iD < cD.length; iD += 3) ID.cZ.TransformCoordinatesFromFloatsToRef(cD[iD], cD[iD + 1], cD[iD + 2], DD.computeWorldMatrix(!0), pD).toArray(cD, iD);
              return cD
            }
            return DD.getVerticesData(SD.e.PositionKind) || []
          };
        bD && (fD = !0);
        let ZD = "",
          oD = 0,
          vD = 0;
        if (pD) {
          for (let cD = 0; cD < DD.length; cD++) {
            const CD = DD[cD].ncD();
            oD += CD ? CD.length / 3 : 0
          }
          const CD = new ArrayBuffer(84 + 50 * oD);
          ZD = new DataView(CD), vD += 80, ZD.setUint32(vD, oD, iD), vD += 4
        } else QD || (ZD = "solid stlmesh\r\n");
        for (let ID = 0; ID < DD.length; ID++) {
          const CD = DD[ID];
          !pD && QD && (ZD += "solid " + CD.name + "\r\n"), !fD && CD instanceof wI.d && CD.bakeCurrentTransformIntoVertices();
          const cD = tD(CD),
            bD = CD.ncD() || [];
          for (let DD = 0; DD < bD.length; DD += 3) {
            const CD = wD(bD, cD, DD);
            pD ? (vD = BD(ZD, vD, CD.n, iD), vD = BD(ZD, vD, CD.v[0], iD), vD = BD(ZD, vD, CD.v[1], iD), vD = BD(ZD, vD, CD.v[2], iD), vD += 2) : (ZD += "\tfacet normal " + CD.n.x + " " + CD.n.y + " " + CD.n.z + "\r\n", ZD += "\t\touter loop\r\n", ZD += "\t\t\tvertex " + CD.v[0].x + " " + CD.v[0].y + " " + CD.v[0].z + "\r\n", ZD += "\t\t\tvertex " + CD.v[1].x + " " + CD.v[1].y + " " + CD.v[1].z + "\r\n", ZD += "\t\t\tvertex " + CD.v[2].x + " " + CD.v[2].y + " " + CD.v[2].z + "\r\n", ZD += "\t\tendloop\r\n", ZD += "\tendfacet\r\n")
          }!pD && QD && (ZD += "endsolid " + name + "\r\n")
        }
        if (pD || QD || (ZD += "endsolid stlmesh"), CD) {
          const DD = document.createElement("a"),
            CD = new Blob([ZD], {
              type: "application/octet-stream"
            });
          DD.href = window.URL.createObjectURL(CD), DD.download = cD + ".stl", DD.click()
        }
        return ZD
      }
    }

    function Mf(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
        ID = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const pD = [];
      for (let iD = 0; iD < DD.length / cD; iD++) {
        const fD = DD[iD * cD] * (ID ? -1 : 1),
          bD = DD[iD * cD + 1],
          QD = DD[iD * cD + 2];
        pD.push(`(${fD.toPrecision(CD.precision)}, ${bD.toPrecision(CD.precision)}, ${QD.toPrecision(CD.precision)})`)
      }
      return pD.join(", ")
    }

    function tf(DD, CD) {
      const cD = [];
      for (let ID = 0; ID < DD.length / 2; ID++) {
        const pD = DD[2 * ID],
          iD = DD[2 * ID + 1];
        cD.push(`(${pD.toPrecision(CD.precision)}, ${(1-iD).toPrecision(CD.precision)})`)
      }
      return cD.join(", ")
    }

    function Zf(DD, CD, cD, ID) {
      const pD = DD.getVerticesData(SD.e.PositionKind),
        iD = DD.getVerticesData(SD.e.NormalKind);
      if (pD && iD) return `\n\tdef Mesh "Geometry"\n\t{\n        uniform token orientation = "${cD}"\n\t\tint[] faceVertexCounts = [${function(DD){const CD=DD.ncD()?.length?DD.getTotalIndices():DD.getTotalVertices();return Array(CD/3).fill(3).join(", ")}(DD)}]\n\t\tint[] faceVertexIndices = [${function(DD){const CD=DD.ncD(),cD=CD?.length??DD.getTotalVertices(),ID=[];if(null!==CD)for(let pD=0;pD<cD;pD++)ID.push(CD[pD]);else for(let pD=0;pD<cD;pD++)ID.push(pD);return ID.join(", ")}(DD)}]\n\t\tnormal3f[] normals = [${Mf(iD,CD,void 0,ID)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)\n\t\tpoint3f[] points = [${Mf(pD,CD,void 0,ID)}]\n        ${function(DD,CD){let cD="";for(let pD=0;pD<4;pD++){const ID=pD>0?pD:"",iD=DD.getVerticesData(SD.e.UVKind+(ID?ID+1:""));iD&&(cD+=`\n\t\ttexCoord2f[] primvars:st${ID} = [${tf(iD,CD)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)`)}const ID=DD.getVerticesData(SD.e.ColorKind);return ID&&(cD+=`\
      n\ tcolor3f[] primvars: displayColor = [$ {
        Mf(ID, CD, ID.length / DD.getTotalVertices())
      }](\n\ t\ tinterpolation = "vertex"\
        n\ t\ t)`),cD}(DD,CD)}\n\t\tuniform token subdivisionScheme = "none"\n\t}\n`
    }

    function of(DD, CD, cD, ID) {
      return `\n        def "Geometry"\n        {\n        ${Zf(DD,CD,cD,ID)}\n        }\n        `
    }

    function vf(DD) {
      let CD = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      return CD += DD, fflate.strToU8(CD)
    }

    function Nf(DD) {
      const CD = DD.m;
      return `( ${gf(CD,0)}, ${gf(CD,4)}, ${gf(CD,8)}, ${gf(CD,12)} )`
    }

    function gf(DD, CD) {
      return `(${DD[CD+0]}, ${DD[CD+1]}, ${DD[CD+2]}, ${DD[CD+3]})`
    }

    function Xf(DD, CD) {
      const cD = "Object_" + DD.uniqueId,
        ID = Nf(CD);
      return `def Xform "${cD}" (\n\tprepend references = @./geometries/Geometry_${DD.geometry.uniqueId}.usda@</Geometry>\n\tprepend apiSchemas = ["MaterialBindingAPI"]\n)\n{\n\tmatrix4d xformOp:transform = ${ID}\n\tuniform token[] xformOpOrder = ["xformOp:transform"]\t\n\n    rel material:binding = </Root/Materials/Material_${DD.material.uniqueId}>\n}\n\n`
    }

    function mf(DD) {
      switch (DD) {
        case OD.b.TEXTURE_CLAMP_ADDRESSMODE:
          return "clamp";
        case OD.b.TEXTURE_MIRROR_ADDRESSMODE:
          return "mirror";
        case OD.b.TEXTURE_WRAP_ADDRESSMODE:
        default:
          return "repeat"
      }
    }

    function nf(DD) {
      return `(${DD.x}, ${DD.y})`
    }

    function Of(DD) {
      return `(${DD.r}, ${DD.g}, ${DD.b})`
    }

    function Pf(DD) {
      return "image/jpeg" === DD || "image/png" === DD
    }

    function Hf(DD, CD, cD, pD, iD, fD) {
      const bD = DD.getInternalTexture().uniqueId + "_" + DD.invertY,
        wD = DD.mimeType || (0, QD.c)(DD.getInternalTexture()?.url ?? ""),
        SD = Pf(wD) ? wD : "image/png",
        BD = "image/jpeg" === SD ? "jpg" : "png";
      iD[bD] = {
        texture: DD,
        mimeType: SD,
        ext: BD
      };
      const yD = DD.coordinatesIndex > 0 ? "st" + DD.coordinatesIndex : "st",
        MD = new ID.Vector2(DD.uScale, DD.vScale),
        tD = new ID.Vector2(DD.uOffset, DD.vOffset),
        ZD = DD.wAng,
        oD = Math.sin(ZD),
        vD = Math.cos(ZD);
      return tD.y = 1 - tD.y - MD.y, tD.x += oD * MD.x, tD.y += (1 - vD) * MD.y, `\n    def Shader "PrimvarReader_${cD}"\n    {\n        uniform token info:id = "UsdPrimvarReader_float2"\n        float2 inputs:fallback = (0.0, 0.0)\n        token inputs:varname = "${yD}"\n        float2 outputs:result\n    }\n\n    def Shader "Transform2d_${cD}"\n    {\n        uniform token info:id = "UsdTransform2d"\n        token inputs:in.connect = </Root/Materials/Material_${CD.uniqueId}/PrimvarReader_${cD}.outputs:result>\n        float inputs:rotation = ${(ZD*(180/Math.PI)).toFixed(fD.precision)}\n        float2 inputs:scale = ${nf(MD)}\n        float2 inputs:translation = ${nf(tD)}\n        float2 outputs:result\n    }\n\n    def Shader "Texture_${DD.uniqueId}_${cD}"\n    {\n        uniform token info:id = "UsdUVTexture"\n        asset inputs:file = @textures/Texture_${bD}.${BD}@\n        float2 inputs:st.connect = </Root/Materials/Material_${CD.uniqueId}/Transform2d_${cD}.outputs:result>\n        ${pD?"float4 inputs:scale = "+function(DD){return`(${DD.r}, ${DD.g}, ${DD.b}, 1.0)`}(pD):""}\n        token inputs:sourceColorSpace = "${DD.gammaSpace?"sRGB":"raw"}"\n        token inputs:wrapS = "${mf(DD.wrapU)}"\n        token inputs:wrapT = "${mf(DD.wrapV)}"\n        float outputs:r\n        float outputs:g\n        float outputs:b\n        float3 outputs:rgb\n        ${CD.needAlphaBlending()||CD.needAlphaTesting()?"float outputs:a":""}\n    }`
    }

    function Uf(DD, CD, cD) {
      const ID = "\t\t\t",
        pD = [],
        iD = [],
        {
          diffuseMap: fD,
          diffuse: bD,
          alphaCutOff: QD,
          emissiveMap: wD,
          emissive: SD,
          normalMap: BD,
          roughnessMap: yD,
          roughnessChannel: MD,
          roughness: tD,
          metalnessMap: ZD,
          metalnessChannel: vD,
          metalness: ND,
          aoMap: gD,
          aoMapChannel: XD,
          aoMapIntensity: mD,
          alphaMap: nD,
          ior: OD,
          clearCoatEnabled: PD,
          clearCoat: HD,
          clearCoatMap: UD,
          clearCoatRoughness: xD,
          clearCoatRoughnessMap: qD
        } = function(DD) {
          const CD = {
            diffuseMap: null,
            diffuse: null,
            alphaCutOff: 0,
            emissiveMap: null,
            emissive: null,
            normalMap: null,
            roughnessMap: null,
            roughnessChannel: "a",
            roughness: 0,
            metalnessMap: null,
            metalnessChannel: "r",
            metalness: 0,
            aoMap: null,
            aoMapChannel: "rgb",
            aoMapIntensity: 0,
            alphaMap: null,
            ior: 1,
            clearCoatEnabled: !1,
            clearCoat: 0,
            clearCoatMap: null,
            clearCoatRoughness: 0,
            clearCoatRoughnessMap: null
          };
          return DD instanceof iI.StandardMaterial ? {
            ...CD,
            diffuseMap: DD.diffuseTexture,
            diffuse: DD.diffuseColor,
            alphaCutOff: DD.alphaCutOff,
            emissiveMap: DD.emissiveTexture,
            emissive: DD.emissiveColor,
            roughness: 1,
            alphaMap: DD.opacityTexture
          } : DD instanceof nC ? {
            ...CD,
            diffuseMap: DD._albedoTexture,
            diffuse: DD._albedoColor,
            alphaCutOff: DD._alphaCutOff,
            emissiveMap: DD._emissiveTexture,
            emissive: DD._emissiveColor,
            normalMap: DD._bumpTexture,
            roughnessMap: DD._metallicTexture,
            roughnessChannel: DD._useRoughnessFromMetallicTextureAlpha ? "a" : "g",
            roughness: DD._roughness ?? 1,
            metalnessMap: DD._metallicTexture,
            metalnessChannel: DD._useMetallnessFromMetallicTextureBlue ? "b" : "r",
            metalness: DD._metallic ?? 0,
            aoMap: DD._ambientTexture,
            aoMapChannel: DD._useAmbientInGrayScale ? "r" : "rgb",
            aoMapIntensity: DD._ambientTextureStrength,
            alphaMap: DD._opacityTexture,
            ior: DD.subSurface.indexOfRefraction,
            clearCoatEnabled: DD.clearCoat.isEnabled,
            clearCoat: DD.clearCoat.intensity,
            clearCoatMap: DD.clearCoat.texture,
            clearCoatRoughness: DD.clearCoat.roughness,
            clearCoatRoughnessMap: DD.clearCoat.useRoughnessFromMainTexture ? DD.clearCoat.texture : DD.clearCoat.textureRoughness
          } : CD
        }(DD);
      return null !== fD ? (pD.push(`${ID}color3f inputs:diffuseColor.connect = </Root/Materials/Material_${DD.uniqueId}/Texture_${fD.uniqueId}_diffuse.outputs:rgb>`), DD.needAlphaBlending() ? pD.push(`${ID}float inputs:opacity.connect = </Root/Materials/Material_${DD.uniqueId}/Texture_${fD.uniqueId}_diffuse.outputs:a>`) : DD.needAlphaTesting() && (pD.push(`${ID}float inputs:opacity.connect = </Root/Materials/Material_${DD.uniqueId}/Texture_${fD.uniqueId}_diffuse.outputs:a>`), pD.push(`${ID}float inputs:opacityThreshold = ${QD}`)), iD.push(Hf(fD, DD, "diffuse", bD, CD, cD))) : pD.push(`${ID}color3f inputs:diffuseColor = ${Of(bD||oD.Color3.White())}`), null !== wD ? (pD.push(`${ID}color3f inputs:emissiveColor.connect = </Root/Materials/Material_${DD.uniqueId}/Texture_${wD.uniqueId}_emissive.outputs:rgb>`), iD.push(Hf(wD, DD, "emissive", SD, CD, cD))) : SD && SD.toLuminance() > 0 && pD.push(`${ID}color3f inputs:emissiveColor = ${Of(SD)}`), null !== BD && (pD.push(`${ID}normal3f inputs:normal.connect = </Root/Materials/Material_${DD.uniqueId}/Texture_${BD.uniqueId}_normal.outputs:rgb>`), iD.push(Hf(BD, DD, "normal", null, CD, cD))), null !== gD && (pD.push(`${ID}float inputs:occlusion.connect = </Root/Materials/Material_${DD.uniqueId}/Texture_${gD.uniqueId}_occlusion.outputs:${XD}>`), iD.push(Hf(gD, DD, "occlusion", new oD.Color3(mD, mD, mD), CD, cD))), null !== yD ? (pD.push(`${ID}float inputs:roughness.connect = </Root/Materials/Material_${DD.uniqueId}/Texture_${yD.uniqueId}_roughness.outputs:${MD}>`), iD.push(Hf(yD, DD, "roughness", new oD.Color3(tD, tD, tD), CD, cD))) : pD.push(`${ID}float inputs:roughness = ${tD}`), null !== ZD ? (pD.push(`${ID}float inputs:metallic.connect = </Root/Materials/Material_${DD.uniqueId}/Texture_${ZD.uniqueId}_metallic.outputs:${vD}>`), iD.push(Hf(ZD, DD, "metallic", new oD.Color3(ND, ND, ND), CD, cD))) : pD.push(`${ID}float inputs:metallic = ${ND}`), null !== nD ? (pD.push(`${ID}float inputs:opacity.connect = </Root/Materials/Material_${DD.uniqueId}/Texture_${nD.uniqueId}_opacity.outputs:r>`), pD.push(`${ID}float inputs:opacityThreshold = 0.0001`), iD.push(Hf(nD, DD, "opacity", null, CD, cD))) : pD.push(`${ID}float inputs:opacity = ${DD.alpha}`), PD && (null !== UD ? (pD.push(`${ID}float inputs:clearcoat.connect = </Root/Materials/Material_${DD.uniqueId}/Texture_${UD.uniqueId}_clearcoat.outputs:r>`), iD.push(Hf(UD, DD, "clearcoat", new oD.Color3(HD, HD, HD), CD, cD))) : pD.push(`${ID}float inputs:clearcoat = ${HD}`), null !== qD ? (pD.push(`${ID}float inputs:clearcoatRoughness.connect = </Root/Materials/Material_${DD.uniqueId}/Texture_${qD.uniqueId}_clearcoatRoughness.outputs:g>`), iD.push(Hf(qD, DD, "clearcoatRoughness", new oD.Color3(xD, xD, xD), CD, cD))) : pD.push(`${ID}float inputs:clearcoatRoughness = ${xD}`)), pD.push(`${ID}float inputs:ior = ${OD}`), `\n\tdef Material "Material_${DD.uniqueId}"\n\t{\n\t\tdef Shader "PreviewSurface"\n\t\t{\n\t\t\tuniform token info:id = "UsdPreviewSurface"\n${pD.join("\n")}\n\t\t\tint inputs:useSpecularWorkflow = 0\n\t\t\ttoken outputs:surface\n\t\t}\n\n\t\ttoken outputs:surface.connect = </Root/Materials/Material_${DD.uniqueId}/PreviewSurface.outputs:surface>\n\n${iD.join("\n")}\n\n\t}\n`
    }

    function xf(DD) {
      DD.computeWorldMatrix(!0);
      const CD = DD.getWorldMatrix().clone(),
        cD = DD.hq().useRightHandedSystem;
      let ID = DD.material?._getEffectiveOrientation(DD) ?? DD.sideOrientation,
        fD = !cD,
        bD = DD.parent;
      for (; bD;) {
        if (jc(bD, cD) && null === bD.parent) {
          cD || (CD.multiplyToRef(bD.getWorldMatrix().invert(), CD), ID = ID === iD.d.ClockWiseSideOrientation ? iD.d.CounterClockWiseSideOrientation : iD.d.ClockWiseSideOrientation), fD = !1;
          break
        }
        bD = bD.parent
      }
      return CD.determinant() < 0 && pD.Tools.Warn(`Mesh ${DD.name} has a negative scale, which may look incorrect in destinations like QuickLook.`), {
        matrix: CD,
        windingOrder: ID === iD.d.ClockWiseSideOrientation ? "leftHanded" : "rightHanded",
        convertToRightHanded: fD
      }
    }
    async function qf(DD, CD, cD) {
      const iD = {
        fflateUrl: "https://unpkg.com/fflate@0.8.2",
        includeAnchoringProperties: !0,
        anchoringType: "plane",
        planeAnchoringAlignment: "horizontal",
        modelFileName: "model.usda",
        precision: 5,
        exportCamera: !1,
        cameraSensorWidth: 35,
        ...CD
      };
      "undefined" === typeof fflate && await pD.Tools.LoadScriptAsync(iD.fflateUrl);
      const fD = {};
      fD[iD.modelFileName] = null;
      let bD = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      bD += function(DD) {
        return `def Xform "Root"\n    {\n        def Scope "Scenes" (\n            kind = "sceneLibrary"\n        )\n        {\n            def Xform "Scene" (\n                customData = {\n                    bool preliminary_collidesWithEnvironment = 0\n                    string sceneName = "Scene"\n                }\n                sceneName = "Scene"\n            )\n            {${!0===DD.includeAnchoringProperties?`\n\t\ttoken preliminary:anchoring:type = "${DD.anchoringType}"\n\t\ttoken preliminary:planeAnchoring:alignment = "${DD.planeAnchoringAlignment}"`:""}\n            `
      }(iD);
      const QD = {};
      for (const ID of DD.meshes) {
        if (0 === ID.getTotalVertices()) continue;
        const DD = ID,
          CD = DD.geometry,
          wD = DD.material;
        if (!wD || !CD || cD && !cD(DD)) continue;
        if (-1 !== ["StandardMaterial", "PBRMaterial", "PBRMetallicRoughnessMaterial"].indexOf(wD.getClassName())) {
          const cD = "geometries/Geometry_" + CD.uniqueId + ".usda",
            {
              matrix: ID,
              windingOrder: pD,
              convertToRightHanded: SD
            } = xf(DD);
          if (!(cD in fD)) {
            const DD = of(CD, iD, pD, SD);
            fD[cD] = vf(DD)
          }
          wD.uniqueId in QD || (QD[wD.uniqueId] = wD), bD += Xf(DD, ID)
        } else pD.Tools.Warn("USDZExportAsync does not support this material type: " + wD.getClassName())
      }
      DD.activeCamera && iD.exportCamera && (bD += function(DD, CD) {
        const cD = "Camera_" + DD.uniqueId,
          pD = Nf(ID.Matrix.RotationY(Math.PI).multiply(DD.getWorldMatrix()));
        if (DD.mode === OD.b.ORTHOGRAPHIC_CAMERA) return `def Camera "${cD}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${pD}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${DD.minZ.toPrecision(CD.precision)}, ${DD.maxZ.toPrecision(CD.precision)})\n\t\t\tfloat horizontalAperture = ${(10*(Math.abs(DD.orthoLeft||1)+Math.abs(DD.orthoRight||1))).toPrecision(CD.precision)}\n\t\t\tfloat verticalAperture = ${(10*(Math.abs(DD.orthoTop||1)+Math.abs(DD.orthoBottom||1))).toPrecision(CD.precision)}\n\t\t\ttoken projection = "orthographic"\n\t\t}\n\t\n\t`;
        {
          const ID = DD.DZ().getAspectRatio(DD),
            iD = CD.cameraSensorWidth || 35;
          return `def Camera "${cD}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${pD}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${DD.minZ.toPrecision(CD.precision)}, ${DD.maxZ.toPrecision(CD.precision)})\n\t\t\tfloat focalLength = ${(iD/(2*Math.tan(.5*DD.fov))).toPrecision(CD.precision)}\n            token projection = "perspective"\n\t\t\tfloat horizontalAperture = ${(iD*ID).toPrecision(CD.precision)}\n\t\t\tfloat verticalAperture = ${(iD/ID).toPrecision(CD.precision)}            \n\t\t}\n\t\n\t`
        }
      }(DD.activeCamera, iD)), bD += "\n            }\n        }";
      const wD = {};
      bD += function(DD, CD, cD) {
        const ID = [];
        for (const pD in DD) {
          const iD = DD[pD];
          ID.push(Uf(iD, CD, cD))
        }
        return `\n    def "Materials"\n{\n${ID.join("")}\n}\n\n`
      }(QD, wD, iD), bD += "\n    }", fD[iD.modelFileName] = fflate.strToU8(bD);
      for (const ID in wD) {
        const {
          texture: DD,
          ext: CD,
          mimeType: cD
        } = wD[ID], pD = await vc(DD);
        if (pD && Pf(pD.mimeType) && pD.mimeType === cD) fD[`textures/Texture_${ID}.${CD}`] = new Uint8Array(pD.data);
        else {
          const pD = DD.getSize(),
            iD = await (0, XD.g)(DD),
            bD = await PD.DumpTools.DumpDataAsync(pD.width, pD.height, iD, cD, void 0, !1, !0);
          fD[`textures/Texture_${ID}.${CD}`] = new Uint8Array(bD).slice()
        }
      }
      let SD = 0;
      for (const ID in fD) {
        const DD = fD[ID];
        if (!DD) continue;
        SD += 34 + ID.length;
        const CD = 63 & SD;
        if (4 !== CD) {
          const cD = new Uint8Array(64 - CD);
          fD[ID] = [DD, {
            extra: {
              12345: cD
            }
          }]
        }
        SD = DD.length
      }
      return fflate.zipSync(fD, {
        level: 0
      })
    }
    var Jf = cD(40175);
    class Kf {
      static Export(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          cD = arguments.length > 2 ? arguments[2] : void 0;
        if (!DD || 0 === DD.bones.length) throw new Error("Invalid or empty skeleton provided");
        let ID = CD;
        CD && 0 !== CD.length || (ID = DD.animations.map((DD => DD.name)));
        let pD = null;
        for (const wD of ID) {
          const CD = DD.getAnimationRange(wD);
          CD && (pD = pD ? new Jf.d("animation-range", Math.min(pD.from, CD.from), Math.max(pD.to, CD.to)) : CD)
        }
        if (!pD && (DD.animations.length > 0 && (pD = DD.getAnimationRange(DD.animations[0].name)), !pD)) throw new Error("No animation range found in skeleton");
        const iD = cD || 1 / (DD.animations[0]?.framePerSecond || 30),
          fD = this._BuildBoneHierarchy(DD, ID);
        let bD = 0;
        for (const wD of fD) wD.positionKeys.length > 0 && (bD = Math.max(bD, wD.positionKeys.length)), wD.rotationKeys.length > 0 && (bD = Math.max(bD, wD.rotationKeys.length));
        0 === bD && (bD = Math.floor((pD.to - pD.from) / iD) + 1);
        let QD = "";
        return QD += "HIERARCHY\n", QD += this._ExportHierarchy(fD, 0), QD += "MOTION\n", QD += `Frames: ${bD}\n`, QD += `Frame Time: ${iD.toFixed(6)}\n`, QD += this._ExportMotionData(fD, bD, 0, ID), QD
      }
      static _BuildBoneHierarchy(DD, CD) {
        const cD = new Map,
          ID = [];
        for (const pD of DD.bones) {
          const DD = {
            bone: pD,
            children: [],
            hasPositionChannels: !1,
            hasRotationChannels: !1,
            positionKeys: [],
            rotationKeys: []
          };
          cD.set(pD, DD)
        }
        for (const pD of DD.bones) {
          const DD = cD.get(pD);
          if (pD.animations.length > 0)
            for (const cD of pD.animations) CD.includes(cD.name) && ("position" === cD.targetProperty ? (DD.hasPositionChannels = !0, DD.positionKeys.push(...cD.getKeys())) : "rotationQuaternion" === cD.targetProperty && (DD.hasRotationChannels = !0, DD.rotationKeys.push(...cD.getKeys())));
          if (pD.getParent()) {
            const CD = cD.get(pD.getParent());
            CD && CD.children.push(DD)
          } else ID.push(DD)
        }
        return ID
      }
      static _ExportHierarchy(DD, CD) {
        let cD = "";
        const ID = "    ".repeat(CD);
        for (const pD of DD) {
          const DD = pD.bone;
          if (this._IsEndSite(pD)) {
            cD += `${ID}End Site\n`, cD += `${ID}{\n`;
            const CD = this._GetBoneOffset(DD);
            cD += `${ID}    OFFSET ${CD.x.toFixed(6)} ${CD.y.toFixed(6)} ${CD.z.toFixed(6)}\n`, cD += `${ID}}\n`
          } else {
            cD += `${0===CD?"ROOT":`${ID}JOINT`} ${DD.name}\n`, cD += `${ID}{\n`;
            const iD = this._GetBoneOffset(DD);
            cD += `${ID}    OFFSET ${iD.x.toFixed(6)} ${iD.y.toFixed(6)} ${iD.z.toFixed(6)}\n`;
            const fD = [];
            pD.hasPositionChannels && fD.push("Xposition", "Yposition", "Zposition"), pD.hasRotationChannels && fD.push("Zrotation", "Xrotation", "Yrotation"), fD.length > 0 && (cD += `${ID}    CHANNELS ${fD.length} ${fD.join(" ")}\n`), pD.children.length > 0 && (cD += this._ExportHierarchy(pD.children, CD + 1)), cD += `${ID}}\n`
          }
        }
        return cD
      }
      static _IsEndSite(DD) {
        return 0 === DD.children.length
      }
      static _GetBoneOffset(DD) {
        try {
          if (!DD.getParent()) return DD.getRestMatrix().getTranslation();
          return DD.getLocalMatrix().getTranslation()
        } catch (CD) {
          return ID.cZ.Zero()
        }
      }
      static _ExportMotionData(DD, CD, cD, ID) {
        let pD = "";
        for (let iD = 0; iD < CD; iD++) {
          const CD = [];
          this._CollectFrameValues(DD, iD + cD, CD, ID), pD += CD.map((DD => DD.toFixed(6))).join(" ") + "\n"
        }
        return pD
      }
      static _CollectFrameValues(DD, CD, cD, ID) {
        for (const pD of DD)
          if (!this._IsEndSite(pD)) {
            if (pD.hasPositionChannels) {
              const DD = this._GetPositionAtFrameIndex(pD.positionKeys, CD);
              cD.push(DD.x, DD.y, DD.z)
            }
            if (pD.hasRotationChannels) {
              const DD = this._GetRotationAtFrameIndex(pD.rotationKeys, CD),
                ID = this._QuaternionToEuler(DD);
              cD.push(ID.z, ID.x, ID.y)
            }
            pD.children.length > 0 && this._CollectFrameValues(pD.children, CD, cD, ID)
          }
      }
      static _GetPositionAtFrameIndex(DD, CD) {
        if (0 === DD.length) return ID.cZ.Zero();
        return DD[Math.max(0, Math.min(CD, DD.length - 1))].value.clone()
      }
      static _GetRotationAtFrameIndex(DD, CD) {
        if (0 === DD.length) return ID.Quaternion.Identity();
        return DD[Math.max(0, Math.min(CD, DD.length - 1))].value.clone()
      }
      static _QuaternionToEuler(DD) {
        const CD = new ID.Matrix;
        DD.toRotationMatrix(CD);
        const cD = CD.m;
        let iD, fD, bD;
        const QD = Math.sqrt(cD[0] * cD[0] + cD[1] * cD[1]);
        return QD > Vc.c ? (iD = Math.atan2(cD[6], cD[10]), fD = Math.atan2(-cD[2], QD), bD = Math.atan2(cD[1], cD[0])) : (iD = Math.atan2(-cD[9], cD[5]), fD = Math.atan2(-cD[2], QD), bD = 0), new ID.cZ(pD.Tools.ToDegrees(iD), pD.Tools.ToDegrees(fD), pD.Tools.ToDegrees(bD))
      }
    }

    function af(DD) {
      return "string" === typeof DD?.name
    }
    const Vf = Symbol("__xml:meta$__"),
      zf = Symbol("__xml:name$__");

    function jf(DD, CD) {
      Object.prototype.hasOwnProperty.call(DD.metadata, Vf) || (DD.metadata[Vf] = []), DD.metadata[Vf].push(CD)
    }

    function lf(DD) {
      return (CD, cD) => {
        CD[zf] = DD
      }
    }

    function Lf() {
      return (DD, CD) => jf(CD, {
        kind: "none",
        prop: String(CD.name),
        ignore: !0
      })
    }

    function Tf(DD) {
      return (CD, cD) => jf(cD, {
        kind: "attr",
        prop: String(cD.name),
        ...DD
      })
    }

    function Gf(DD) {
      return (CD, cD) => jf(cD, {
        kind: "elem",
        prop: String(cD.name),
        ...DD
      })
    }

    function Rf(DD) {
      const CD = "function" === typeof DD ? DD : DD?.constructor,
        cD = CD?.[Symbol.metadata];
      if (!cD) return [];
      const ID = [];
      let pD = cD;
      for (; pD;) Object.prototype.hasOwnProperty.call(pD, Vf) && ID.push(...pD[Vf]), pD = Object.getPrototypeOf(pD);
      return ID
    }

    function kf(DD) {
      const CD = DD?.constructor?.[zf];
      return CD || void 0
    }

    function df(DD) {
      return /^[A-Za-z_][A-Za-z0-9._-]*$/.test(DD)
    }

    function Yf(DD) {
      if (af(DD)) return DD;
      const CD = (DD ?? "").trim();
      if (!CD) return {
        name: ""
      };
      const cD = CD.indexOf(":");
      if (-1 === cD) return {
        name: CD
      };
      if (-1 !== CD.indexOf(":", cD + 1)) return {
        name: CD
      };
      const ID = CD.slice(0, cD),
        pD = CD.slice(cD + 1);
      return df(ID) && df(pD) ? {
        ns: ID,
        name: pD
      } : {
        name: CD
      }
    }

    function Wf(DD, CD) {
      return CD ? `${CD}:${DD}` : DD
    }
    const sf = Object.freeze({
        eps: 1e-6,
        maxDecimalsCap: 15,
        trimTrailingZeros: !0,
        allowScientific: !1,
        snapNearZero: !0
      }),
      Ef = Object.freeze({
        number: sf
      });

    function ef(DD) {
      const CD = DD?.eps ?? sf.eps;
      return {
        eps: CD,
        maxDecimalsCap: DD?.maxDecimalsCap ?? sf.maxDecimalsCap,
        trimTrailingZeros: DD?.trimTrailingZeros ?? sf.trimTrailingZeros,
        fixedDecimals: DD?.fixedDecimals,
        allowScientific: DD?.allowScientific ?? sf.allowScientific,
        snapNearZero: DD?.snapNearZero ?? sf.snapNearZero,
        zeroThreshold: DD?.zeroThreshold ?? CD,
        perAttributeEps: DD?.perAttributeEps
      }
    }

    function uf(DD) {
      return {
        number: ef(DD?.number)
      }
    }
    class hf {
      constructor(DD) {
        if (this.o = DD, this._o = DD.number, !Number.isFinite(this._o.eps) || this._o.eps <= 0) throw new Error("opts.eps must be a finite, positive number")
      }
      toString(DD) {
        if (!Number.isFinite(DD)) throw new Error(`Cannot format non-finite number: ${DD}`);
        const CD = this._o,
          cD = this._clampInt(CD.maxDecimalsCap ?? 15, 0, 20),
          ID = CD.trimTrailingZeros ?? !0,
          pD = CD.snapNearZero ?? !0,
          iD = CD.zeroThreshold ?? CD.eps,
          fD = 1 / CD.eps;
        let bD, QD = Math.round(DD * fD) / fD;
        if (Object.is(QD, -0) && (QD = 0), pD && Math.abs(QD) <= iD && (QD = 0), bD = void 0 !== CD.fixedDecimals ? this._clampInt(CD.fixedDecimals, 0, cD) : this._clampInt(Math.ceil(-Math.log10(CD.eps)), 0, cD), CD.allowScientific, 0 === bD) return String(Math.trunc(QD));
        let wD = QD.toFixed(bD);
        if (ID && void 0 === CD.fixedDecimals && (wD = wD.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "").replace(/\.$/, "")), /[eE]/.test(wD)) throw new Error(`Scientific notation not allowed in XML output: ${wD}`);
        return wD
      }
      _clampInt(DD, CD, cD) {
        return Number.isFinite(DD) ? (DD = Math.trunc(DD), Math.max(CD, Math.min(cD, DD))) : CD
      }
    }

    function rf(DD) {
      return DD instanceof Date
    }

    function Af(DD) {
      return "string" === typeof DD
    }

    function Ff(DD) {
      return "string" === typeof DD || "number" === typeof DD || "boolean" === typeof DD || "bigint" === typeof DD || rf(DD)
    }

    function Db(DD) {
      return "number" === typeof DD || "boolean" === typeof DD || "bigint" === typeof DD || rf(DD)
    }
    class Cb {
      constructor(DD, CD) {
        this._ns = new Map, this._prefixCount = 0, this._builder = DD, this._format = uf(CD), this._nFmt = new hf(this._format)
      }
      withNamespace() {
        for (var DD = arguments.length, CD = new Array(DD), cD = 0; cD < DD; cD++) CD[cD] = arguments[cD];
        for (const ID of CD) this._assignNamespace(ID);
        return this
      }
      serialize(DD, CD) {
        if (!(CD = CD ?? kf(DD))) throw new Error("can not find name for given object");
        const cD = Yf(CD);
        cD.ns && this._assignNamespace(cD.ns, "xmlns"), this._gatherNamespaces(DD, new WeakSet);
        const ID = this._builder.ele(null, cD.name);
        for (const [pD, iD] of Array.from(this._ns.entries())) ID.att("xmlns", iD, pD);
        this._writeObjectContent(ID, DD, (new WeakSet).add(DD)), this._builder.end()
      }
      _writeObject(DD, CD, cD) {
        if (cD.has(CD)) return;
        if (cD.add(CD), Array.isArray(CD)) {
          for (const ID of CD) Db(ID) || (Af(ID) ? this._builder.text(ID) : this._writeObject(DD, ID, cD));
          return
        }
        const ID = kf(CD);
        if (!ID) return;
        const pD = Yf(ID),
          iD = this._getPrefix(pD),
          fD = Wf(pD.name, iD);
        DD.ele(null, fD), this._writeObjectContent(DD, CD, cD), this._builder.end()
      }
      _getPrefix(DD) {
        if (DD.ns) {
          const CD = this._ns.get(DD.ns.toLowerCase());
          if ("xmlns" !== CD) return CD
        }
      }
      _writeObjectContent(DD, CD, cD) {
        const ID = Rf(CD) ?? [],
          pD = new Map;
        for (const fD of ID) {
          const DD = pD.get(fD.prop) ?? [];
          DD.push(fD), pD.set(fD.prop, DD)
        }
        const iD = Object.keys(CD).sort(((DD, CD) => {
          const cD = (pD.get(DD) ?? []).some((DD => "attr" === DD.kind));
          return cD === (pD.get(CD) ?? []).some((DD => "attr" === DD.kind)) ? 0 : cD ? -1 : 1
        }));
        for (const fD of iD) {
          const ID = CD[fD];
          if (null === ID || void 0 === ID) continue;
          const iD = pD.get(fD);
          if (iD) {
            if (iD.some((DD => !0 === DD.ignore || "none" === DD.kind))) continue;
            for (const CD of iD) {
              const cD = CD.name ?? CD.prop.toLowerCase();
              if (cD) switch (CD.kind) {
                case "attr": {
                  let pD = null;
                  if ("number" === typeof ID && this._nFmt && (pD = this._nFmt.toString(ID)), CD.formatter) {
                    pD = new CD.formatter(this._format).toString(ID)
                  }
                  if (pD = pD ?? ID.toString(), pD) {
                    const CD = Yf(cD),
                      ID = this._getPrefix(CD),
                      iD = Wf(CD.name, ID);
                    DD.att(null, iD, pD)
                  }
                  break
                }
              }
            }
          } else Db(ID) || (Af(ID) ? this._builder.text(ID) : this._writeObject(DD, ID, cD))
        }
      }
      _gatherNamespaces(DD, CD) {
        if (CD.has(DD)) return;
        if (CD.add(DD), Array.isArray(DD)) {
          for (const cD of DD) Ff(cD) || this._gatherNamespaces(cD, CD);
          return
        }
        const cD = kf(DD);
        cD && this._assignNamespace(cD);
        const ID = Rf(DD) ?? [],
          pD = new Map;
        for (const fD of ID) {
          const DD = pD.get(fD.prop) ?? [];
          DD.push(fD), pD.set(fD.prop, DD)
        }
        const iD = [];
        for (const fD of Object.keys(DD)) {
          const CD = DD[fD];
          if (null === CD || void 0 === CD) continue;
          const cD = pD.get(fD);
          if (cD) {
            if (cD.some((DD => !0 === DD.ignore || "none" === DD.kind))) continue;
            for (const DD of cD) DD.name && this._assignNamespace(DD.name)
          }
          iD.push(CD)
        }
        for (const fD of iD) Ff(fD) || this._gatherNamespaces(fD, CD)
      }
      _assignNamespace(DD, CD) {
        const cD = Yf(DD);
        if (cD?.ns) {
          const DD = cD.ns.toLowerCase();
          this._ns.get(DD) || this._ns.set(DD, CD ?? this._buildNsPrefix(DD))
        } else if ("xmlns" === CD) {
          const DD = cD.name.toLowerCase();
          this._ns.get(DD) || this._ns.set(DD, CD ?? this._buildNsPrefix(DD))
        }
      }
      _buildNsPrefix(DD) {
        let CD, cD = !1;
        do {
          CD = "ns" + this._prefixCount++;
          for (const DD of Array.from(this._ns.values()))
            if (DD === CD) {
              cD = !0;
              break
            }
        } while (cD);
        return CD
      }
    }
    class cb {}
    var Ib;
    cb.OpenTag = "<", cb.CloseTag = ">", cb.Slash = "/", cb.Question = "?", cb.Quote = '"', cb.Equal = "=", cb.Space = " ", cb.Semicolon = ":", cb.Dec = "<?xml", cb.Xml = "xml", cb.Xmlns = "xmlns", cb.Xsi = "xsi", cb.VersionKeyword = "version", cb.EncodingKeyword = "encoding", cb.StandaloneKeyword = "standalone",
      function(DD) {
        DD[DD.Declaration = 0] = "Declaration", DD[DD.Tag = 1] = "Tag", DD[DD.Attribute = 2] = "Attribute", DD[DD.Text = 3] = "Text"
      }(Ib || (Ib = {}));
    class pb {
      constructor(DD) {
        this._ctxStack = [], this._d = 0, this._w = DD
      }
      dec(DD, CD, cD) {
        return this._w.write(cb.Dec), this._writeAttStr(cb.VersionKeyword, DD), CD && this._writeAttStr(cb.EncodingKeyword, CD), void 0 !== cD && this._writeAttStr(cb.StandaloneKeyword, cD ? "yes" : "no"), this._w.write(cb.Question, cb.CloseTag), this
      }
      att(DD, CD, cD) {
        const ID = this._peekContext();
        if (!ID) throw new Error("att() without open element");
        if (ID.closed) throw new Error(`att() after start tag closed for <${ID.name}>`);
        if (this._isXmlnsDecl(DD, CD)) {
          if (CD === cb.Xmlns) ID.defaultNs = cD, this._registerNamespace(ID, "", cD), this._writeAttStr(cb.Xmlns, cD);
          else if (DD) this._registerNamespace(ID, CD, cD), this._writeAttStr(`${DD}:${CD}`, cD);
          else {
            const DD = CD.slice(6);
            this._registerNamespace(ID, DD, cD), this._writeAttStr(CD, cD)
          }
          return ID.lastToken = Ib.Attribute, this
        }
        let pD = CD;
        if (DD) {
          pD = `${this._ensurePrefixDeclared(ID,DD)}:${CD}`
        }
        return ID.lastToken = Ib.Attribute, this._writeAttStr(pD, cD), this
      }
      ele(DD, CD) {
        const cD = this._peekContext();
        cD && this._closeOpenTagIfNeeded(cD);
        let ID = CD;
        if (DD) {
          ID = `${this._lookupPrefix(DD)??DD}:${CD}`
        }
        return this._pushContext(ID, ++this._d), this._w.write(cb.OpenTag, ID), this
      }
      text(DD) {
        const CD = this._peekContext();
        if (!CD) throw new Error("text() without open element");
        return this._closeOpenTagIfNeeded(CD), CD.lastToken = Ib.Text, this._w.write(this._escText(DD)), this
      }
      end() {
        const DD = this._popContext();
        return DD && (this._d--, DD.closed ? this._w.write(cb.OpenTag, cb.Slash, DD.name, cb.CloseTag) : this._w.write(cb.Slash, cb.CloseTag)), this
      }
      _pushContext(DD, CD) {
        const cD = new pb.Context(DD, CD);
        return this._ctxStack.push(cD), cD
      }
      _popContext() {
        return this._ctxStack.pop()
      }
      _peekContext() {
        return this._ctxStack[this._ctxStack.length - 1]
      }
      get _contextDepth() {
        return this._ctxStack.length
      }
      _writeAttStr(DD, CD) {
        this._w.write(cb.Space, DD, cb.Equal, cb.Quote, this._escAttr(CD), cb.Quote)
      }
      _lookupPrefix(DD) {
        let CD = this._ctxStack.length - 1;
        if (CD >= 0)
          do {
            const cD = this._ctxStack[CD--],
              ID = cD.ns2prefix?.get(DD);
            if (ID) return ID
          } while (CD >= 0)
      }
      _escText(DD) {
        return DD.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      }
      _escAttr(DD) {
        return this._escText(DD).replace(/"/g, "&quot;").replace(/'/g, "&apos;")
      }
      _isXmlnsDecl(DD, CD) {
        if (DD) return DD === cb.Xmlns;
        const cD = CD.length,
          ID = cb.Xmlns.length;
        return cD >= ID && (CD.startsWith(cb.Xmlns) && (CD.length == ID || CD[ID] == cb.Semicolon))
      }
      _registerNamespace(DD, CD, cD) {
        if (CD === cb.Xml || CD === cb.Xmlns) throw new Error(`reserved prefix '${CD}'`);
        const ID = DD.prefix2ns.get(CD);
        if (ID && ID !== cD) throw new Error(`prefix '${CD}' already bound to a different namespace`);
        DD.ns2prefix.get(cD) || DD.ns2prefix.set(cD, CD), DD.prefix2ns.set(CD, cD)
      }
      _allocPrefix(DD) {
        let CD = 1;
        for (;;) {
          const cD = "ns" + CD++;
          if (!DD.prefix2ns.has(cD)) return cD
        }
      }
      _ensurePrefixDeclared(DD, CD) {
        const cD = this._lookupPrefix(CD);
        if (cD) return cD;
        if (DD.closed) throw new Error(`can not declare namespace after start tag closed for <${DD.name}>`);
        const ID = this._allocPrefix(DD);
        return this._writeAttStr(`${cb.Xmlns}:${ID}`, CD), this._registerNamespace(DD, ID, CD), ID
      }
      _closeOpenTagIfNeeded(DD) {
        DD.closed || (this._w.write(cb.CloseTag), DD.closed = !0)
      }
    }
    pb.Context = class {
      constructor(DD, CD) {
        this.name = "", this.closed = !1, this.lastToken = null, this.ns2prefix = new Map, this.prefix2ns = new Map, this.defaultNs = null, this.name = DD, this.depth = CD
      }
    };
    class ib {
      constructor() {
        this.count = 0, this._chunks = []
      }
      write() {
        for (var DD = arguments.length, CD = new Array(DD), cD = 0; cD < DD; cD++) CD[cD] = arguments[cD];
        if (0 === CD.length) return this;
        const ID = CD.join("");
        return this._chunks.push(ID), this.count += ID.length, this
      }
      toString() {
        return this._chunks.join("")
      }
      clear() {
        this._chunks = [], this.count = 0
      }
    }
    class fb {
      constructor(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._sink = DD, this._opts = CD, this.count = 0, this._encoder = new TextEncoder, this._pending = "", this._pendingChars = 0
      }
      write() {
        for (var DD = arguments.length, CD = new Array(DD), cD = 0; cD < DD; cD++) CD[cD] = arguments[cD];
        if (0 === CD.length) return this;
        const ID = CD.join("");
        if (0 === ID.length) return this;
        this._pending += ID, this._pendingChars += ID.length;
        const pD = this._opts.flushChars ?? 65536;
        return this._pendingChars >= pD && this.flush(), this
      }
      flush() {
        if (0 === this._pendingChars) return this;
        const DD = this._encoder.encode(this._pending);
        return this._sink.push(DD), this.count += DD.length, this._pending = "", this._pendingChars = 0, this
      }
      finish() {
        this.flush(), this._sink.push(new Uint8Array(0), !0)
      }
      clear() {
        this._pending = "", this._pendingChars = 0, this.count = 0
      }
    }
    const bb = "http://schemas.microsoft.com/3dmanufacturing/core/2015/02",
      Qb = "http://schemas.microsoft.com/3dmanufacturing/trianglesets/2021/07";
    var wb, Sb;
    ! function(DD) {
      DD.micron = "micron", DD.millimeter = "millimeter", DD.centimeter = "centimeter", DD.inch = "inch", DD.foot = "foot", DD.meter = "meter"
    }(wb || (wb = {})),
    function(DD) {
      DD.model = "model", DD.solidsupport = "solidsupport", DD.support = "support", DD.surface = "surface", DD.other = "other"
    }(Sb || (Sb = {}));
    const Bb = "http://schemas.openxmlformats.org/package/2006/content-types",
      yb = "http://schemas.openxmlformats.org/package/2006/relationships";
    var Mb;
    ! function(DD) {
      DD.Relationships = "application/vnd.openxmlformats-package.relationships+xml", DD.Model = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml", DD.Materials = "application/vnd.ms-package.3dmanufacturing-material+xml", DD.Colors = "application/vnd.ms-package.3dmanufacturing-colors+xml", DD.Texture = "application/vnd.ms-package.3dmanufacturing-texture+xml", DD.Texture2D = "application/vnd.ms-package.3dmanufacturing-texture2d+xml", DD.Production = "application/vnd.ms-package.3dmanufacturing-production+xml", DD.Slice = "application/vnd.ms-package.3dmanufacturing-slice+xml", DD.BeamLattice = "application/vnd.ms-package.3dmanufacturing-beamlattice+xml", DD.SecureContent = "application/vnd.ms-package.3dmanufacturing-securecontent+xml", DD.Png = "image/png", DD.Jpeg = "image/jpeg", DD.Tiff = "image/tiff", DD.Xml = "application/xml"
    }(Mb || (Mb = {}));
    const tb = "_rels/",
      Zb = "3D/",
      ob = "3dmodel.model",
      vb = ".rels",
      Nb = "[Content_Types].xml";
    class gb {
      static IsKnown(DD) {
        return gb.Known.has(DD)
      }
      static IsThreeDimModel(DD) {
        return DD === gb.ThreeDimModel
      }
    }
    gb.ThreeDimModel = "http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel", gb.Thumbnail = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail", gb.PrintTicket = "http://schemas.microsoft.com/3dmanufacturing/2013/01/printticket", gb.MustPreserve = "http://schemas.openxmlformats.org/package/2006/relationships/mustpreserve", gb.Known = new Set([gb.ThreeDimModel, gb.Thumbnail, gb.PrintTicket, gb.MustPreserve]);
    let Xb = (() => {
        let DD, CD, cD = [lf({
            ns: Bb,
            name: "Types"
          })],
          ID = [];
        CD = class {
          constructor() {
            this.items = []
          }
        };
        return (0, HD.o)(CD, "ThreeMfContentTypes"), (() => {
          const pD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, HD.k)(null, DD = {
            value: CD
          }, cD, {
            kind: "class",
            name: CD.name,
            metadata: pD
          }, null, ID), CD = DD.value, pD && Object.defineProperty(CD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: pD
          }), (0, HD.m)(CD, ID)
        })(), CD
      })(),
      mb = (() => {
        let DD, CD, cD, ID, pD = [lf({
            ns: Bb,
            name: "Default"
          })],
          iD = [],
          fD = [],
          bD = [],
          QD = [],
          wD = [];
        CD = class {
          constructor(DD, CD) {
            this.ext = (0, HD.m)(this, fD, void 0), this.ct = ((0, HD.m)(this, bD), (0, HD.m)(this, QD, void 0)), (0, HD.m)(this, wD), this.ext = DD, this.ct = CD
          }
        };
        return (0, HD.o)(CD, "ThreeMfContentType"), (() => {
          const SD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          cD = [Tf({
            name: {
              ns: Bb,
              name: "Extension"
            }
          })], ID = [Tf({
            name: {
              ns: Bb,
              name: "ContentType"
            }
          })], (0, HD.k)(null, null, cD, {
            kind: "field",
            name: "ext",
            static: !1,
            private: !1,
            access: {
              has: DD => "ext" in DD,
              get: DD => DD.ext,
              set: (DD, CD) => {
                DD.ext = CD
              }
            },
            metadata: SD
          }, fD, bD), (0, HD.k)(null, null, ID, {
            kind: "field",
            name: "ct",
            static: !1,
            private: !1,
            access: {
              has: DD => "ct" in DD,
              get: DD => DD.ct,
              set: (DD, CD) => {
                DD.ct = CD
              }
            },
            metadata: SD
          }, QD, wD), (0, HD.k)(null, DD = {
            value: CD
          }, pD, {
            kind: "class",
            name: CD.name,
            metadata: SD
          }, null, iD), CD = DD.value, SD && Object.defineProperty(CD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: SD
          }), (0, HD.m)(CD, iD)
        })(), CD
      })(),
      nb = (() => {
        let DD, CD, cD = [lf({
            ns: yb,
            name: "Relationships"
          })],
          ID = [];
        CD = class {
          constructor() {
            this.items = []
          }
        };
        return (0, HD.o)(CD, "ThreeMfRelationships"), (() => {
          const pD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, HD.k)(null, DD = {
            value: CD
          }, cD, {
            kind: "class",
            name: CD.name,
            metadata: pD
          }, null, ID), CD = DD.value, pD && Object.defineProperty(CD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: pD
          }), (0, HD.m)(CD, ID)
        })(), CD
      })(),
      Ob = (() => {
        let DD, CD, cD, ID, pD, iD = [lf({
            ns: yb,
            name: "Relationship"
          })],
          fD = [],
          bD = [],
          QD = [],
          wD = [],
          SD = [],
          BD = [],
          yD = [];
        CD = class {
          constructor(DD, CD, cD) {
            this.id = (0, HD.m)(this, bD, void 0), this.type = ((0, HD.m)(this, QD), (0, HD.m)(this, wD, void 0)), this.target = ((0, HD.m)(this, SD), (0, HD.m)(this, BD, void 0)), (0, HD.m)(this, yD), this.id = DD, this.type = CD, this.target = cD
          }
        };
        return (0, HD.o)(CD, "ThreeMfRelationship"), (() => {
          const MD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          cD = [Tf({
            name: "Id"
          })], ID = [Tf({
            name: "Type"
          })], pD = [Tf({
            name: "Target"
          })], (0, HD.k)(null, null, cD, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: DD => "id" in DD,
              get: DD => DD.id,
              set: (DD, CD) => {
                DD.id = CD
              }
            },
            metadata: MD
          }, bD, QD), (0, HD.k)(null, null, ID, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: DD => "type" in DD,
              get: DD => DD.type,
              set: (DD, CD) => {
                DD.type = CD
              }
            },
            metadata: MD
          }, wD, SD), (0, HD.k)(null, null, pD, {
            kind: "field",
            name: "target",
            static: !1,
            private: !1,
            access: {
              has: DD => "target" in DD,
              get: DD => DD.target,
              set: (DD, CD) => {
                DD.target = CD
              }
            },
            metadata: MD
          }, BD, yD), (0, HD.k)(null, DD = {
            value: CD
          }, iD, {
            kind: "class",
            name: CD.name,
            metadata: MD
          }, null, fD), CD = DD.value, MD && Object.defineProperty(CD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: MD
          }), (0, HD.m)(CD, fD)
        })(), CD
      })();
    class Pb {
      constructor(DD, CD, cD) {
        this.contentTypes = DD, this.relationships = CD, this.model = cD
      }
    }
    class Hb {
      static Zero() {
        return new Hb([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }
      constructor(DD) {
        this.values = DD
      }
      toString() {
        return this.values.join(" ")
      }
    }
    class Ub {
      constructor(DD) {
        this.o = DD, this._f = new hf(DD)
      }
      toString(DD) {
        return DD.values.map((DD => this._f.toString(DD))).join(" ")
      }
    }
    let xb = (() => {
        let DD, CD, cD, ID, pD, iD = [lf({
            ns: bb,
            name: "model"
          })],
          fD = [],
          bD = [],
          QD = [],
          wD = [],
          SD = [],
          BD = [],
          yD = [];
        CD = class {
          constructor() {
            this.unit = (0, HD.m)(this, bD, wb.millimeter), this.requiredextensions = ((0, HD.m)(this, QD), (0, HD.m)(this, wD, void 0)), this.recommendedextensions = ((0, HD.m)(this, SD), (0, HD.m)(this, BD, void 0)), this.metadata = (0, HD.m)(this, yD)
          }
        };
        return (0, HD.o)(CD, "ThreeMfModel"), (() => {
          const MD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          cD = [Tf({
            name: "unit"
          })], ID = [Tf({
            name: "requiredextensions"
          })], pD = [Tf({
            name: "recommendedextensions"
          })], (0, HD.k)(null, null, cD, {
            kind: "field",
            name: "unit",
            static: !1,
            private: !1,
            access: {
              has: DD => "unit" in DD,
              get: DD => DD.unit,
              set: (DD, CD) => {
                DD.unit = CD
              }
            },
            metadata: MD
          }, bD, QD), (0, HD.k)(null, null, ID, {
            kind: "field",
            name: "requiredextensions",
            static: !1,
            private: !1,
            access: {
              has: DD => "requiredextensions" in DD,
              get: DD => DD.requiredextensions,
              set: (DD, CD) => {
                DD.requiredextensions = CD
              }
            },
            metadata: MD
          }, wD, SD), (0, HD.k)(null, null, pD, {
            kind: "field",
            name: "recommendedextensions",
            static: !1,
            private: !1,
            access: {
              has: DD => "recommendedextensions" in DD,
              get: DD => DD.recommendedextensions,
              set: (DD, CD) => {
                DD.recommendedextensions = CD
              }
            },
            metadata: MD
          }, BD, yD), (0, HD.k)(null, DD = {
            value: CD
          }, iD, {
            kind: "class",
            name: CD.name,
            metadata: MD
          }, null, fD), CD = DD.value, MD && Object.defineProperty(CD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: MD
          })
        })(), CD.KnownMeta = ["Title", "Designer", "Description", "Copyright", "LicenseTerms", "Rating", "CreationDate", "ModificationDate", "Application"], (0, HD.m)(CD, fD), CD
      })(),
      qb = (() => {
        let DD, CD, cD, ID, pD, iD = [lf({
            ns: bb,
            name: "meta"
          })],
          fD = [],
          bD = [],
          QD = [],
          wD = [],
          SD = [],
          BD = [],
          yD = [];
        CD = class {
          constructor(DD, CD, cD, ID) {
            this.name = (0, HD.m)(this, bD, void 0), this.preserve = ((0, HD.m)(this, QD), (0, HD.m)(this, wD, void 0)), this.type = ((0, HD.m)(this, SD), (0, HD.m)(this, BD, void 0)), this.value = (0, HD.m)(this, yD), this.name = DD, this.value = CD, this.preserve = cD, this.type = ID
          }
        };
        return (0, HD.o)(CD, "ThreeMfMeta"), (() => {
          const MD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          cD = [Tf({
            name: "name"
          })], ID = [Tf({
            name: "preserve"
          })], pD = [Tf({
            name: "type"
          })], (0, HD.k)(null, null, cD, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: DD => "name" in DD,
              get: DD => DD.name,
              set: (DD, CD) => {
                DD.name = CD
              }
            },
            metadata: MD
          }, bD, QD), (0, HD.k)(null, null, ID, {
            kind: "field",
            name: "preserve",
            static: !1,
            private: !1,
            access: {
              has: DD => "preserve" in DD,
              get: DD => DD.preserve,
              set: (DD, CD) => {
                DD.preserve = CD
              }
            },
            metadata: MD
          }, wD, SD), (0, HD.k)(null, null, pD, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: DD => "type" in DD,
              get: DD => DD.type,
              set: (DD, CD) => {
                DD.type = CD
              }
            },
            metadata: MD
          }, BD, yD), (0, HD.k)(null, DD = {
            value: CD
          }, iD, {
            kind: "class",
            name: CD.name,
            metadata: MD
          }, null, fD), CD = DD.value, MD && Object.defineProperty(CD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: MD
          }), (0, HD.m)(CD, fD)
        })(), CD
      })(),
      Jb = (() => {
        let DD, CD, cD = [lf({
            ns: bb,
            name: "metadatagroup"
          })],
          ID = [];
        CD = class {
          constructor() {
            this.metadata = []
          }
        };
        return (0, HD.o)(CD, "ThreeMfMetadataGroup"), (() => {
          const pD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, HD.k)(null, DD = {
            value: CD
          }, cD, {
            kind: "class",
            name: CD.name,
            metadata: pD
          }, null, ID), CD = DD.value, pD && Object.defineProperty(CD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: pD
          }), (0, HD.m)(CD, ID)
        })(), CD
      })(),
      Kb = (() => {
        let DD, CD, cD = [lf({
            ns: bb,
            name: "resources"
          })],
          ID = [];
        CD = class {
          constructor() {
            this.object = []
          }
        };
        return (0, HD.o)(CD, "ThreeMfResources"), (() => {
          const pD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, HD.k)(null, DD = {
            value: CD
          }, cD, {
            kind: "class",
            name: CD.name,
            metadata: pD
          }, null, ID), CD = DD.value, pD && Object.defineProperty(CD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: pD
          }), (0, HD.m)(CD, ID)
        })(), CD
      })(),
      ab = (() => {
        let DD, CD, cD, ID, pD, iD, fD, bD, QD, wD = [lf({
            ns: bb,
            name: "object"
          })],
          SD = [],
          BD = [],
          yD = [],
          MD = [],
          tD = [],
          ZD = [],
          oD = [],
          vD = [],
          ND = [],
          gD = [],
          XD = [],
          mD = [],
          nD = [],
          OD = [],
          PD = [];
        CD = class {
          constructor(DD) {
            let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Sb.model;
            this.id = (0, HD.m)(this, BD, void 0), this.type = ((0, HD.m)(this, yD), (0, HD.m)(this, MD, void 0)), this.thumbnail = ((0, HD.m)(this, tD), (0, HD.m)(this, ZD, void 0)), this.partnumber = ((0, HD.m)(this, oD), (0, HD.m)(this, vD, void 0)), this.name = ((0, HD.m)(this, ND), (0, HD.m)(this, gD, void 0)), this.pid = ((0, HD.m)(this, XD), (0, HD.m)(this, mD, void 0)), this.pindex = ((0, HD.m)(this, nD), (0, HD.m)(this, OD, void 0)), this.metadatagroup = (0, HD.m)(this, PD), this.id = DD, this.type = CD
          }
        };
        return (0, HD.o)(CD, "ThreeMfObject"), (() => {
          const UD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          cD = [Tf({
            name: "id"
          })], ID = [Tf({
            name: "type"
          })], pD = [Tf({
            name: "thumbnail"
          })], iD = [Tf({
            name: "partnumber"
          })], fD = [Tf({
            name: "name"
          })], bD = [Tf({
            name: "pid"
          })], QD = [Tf({
            name: "pindex"
          })], (0, HD.k)(null, null, cD, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: DD => "id" in DD,
              get: DD => DD.id,
              set: (DD, CD) => {
                DD.id = CD
              }
            },
            metadata: UD
          }, BD, yD), (0, HD.k)(null, null, ID, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: DD => "type" in DD,
              get: DD => DD.type,
              set: (DD, CD) => {
                DD.type = CD
              }
            },
            metadata: UD
          }, MD, tD), (0, HD.k)(null, null, pD, {
            kind: "field",
            name: "thumbnail",
            static: !1,
            private: !1,
            access: {
              has: DD => "thumbnail" in DD,
              get: DD => DD.thumbnail,
              set: (DD, CD) => {
                DD.thumbnail = CD
              }
            },
            metadata: UD
          }, ZD, oD), (0, HD.k)(null, null, iD, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: DD => "partnumber" in DD,
              get: DD => DD.partnumber,
              set: (DD, CD) => {
                DD.partnumber = CD
              }
            },
            metadata: UD
          }, vD, ND), (0, HD.k)(null, null, fD, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: DD => "name" in DD,
              get: DD => DD.name,
              set: (DD, CD) => {
                DD.name = CD
              }
            },
            metadata: UD
          }, gD, XD), (0, HD.k)(null, null, bD, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: DD => "pid" in DD,
              get: DD => DD.pid,
              set: (DD, CD) => {
                DD.pid = CD
              }
            },
            metadata: UD
          }, mD, nD), (0, HD.k)(null, null, QD, {
            kind: "field",
            name: "pindex",
            static: !1,
            private: !1,
            access: {
              has: DD => "pindex" in DD,
              get: DD => DD.pindex,
              set: (DD, CD) => {
                DD.pindex = CD
              }
            },
            metadata: UD
          }, OD, PD), (0, HD.k)(null, DD = {
            value: CD
          }, wD, {
            kind: "class",
            name: CD.name,
            metadata: UD
          }, null, SD), CD = DD.value, UD && Object.defineProperty(CD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: UD
          }), (0, HD.m)(CD, SD)
        })(), CD
      })(),
      Vb = (() => {
        let DD, CD, cD = [lf({
            ns: bb,
            name: "mesh"
          })],
          ID = [];
        CD = class {
          constructor(DD, CD) {
            this.vertices = DD ?? new zb, this.triangles = CD ?? new lb
          }
        };
        return (0, HD.o)(CD, "ThreeMfMesh"), (() => {
          const pD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, HD.k)(null, DD = {
            value: CD
          }, cD, {
            kind: "class",
            name: CD.name,
            metadata: pD
          }, null, ID), CD = DD.value, pD && Object.defineProperty(CD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: pD
          }), (0, HD.m)(CD, ID)
        })(), CD
      })(),
      zb = (() => {
        let DD, CD, cD = [lf({
            ns: bb,
            name: "vertices"
          })],
          ID = [];
        CD = class {
          constructor() {
            this.vertex = []
          }
        };
        return (0, HD.o)(CD, "ThreeMfVertices"), (() => {
          const pD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, HD.k)(null, DD = {
            value: CD
          }, cD, {
            kind: "class",
            name: CD.name,
            metadata: pD
          }, null, ID), CD = DD.value, pD && Object.defineProperty(CD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: pD
          }), (0, HD.m)(CD, ID)
        })(), CD
      })(),
      jb = (() => {
        let DD, CD, cD, ID, pD, iD = [lf({
            ns: bb,
            name: "vertex"
          })],
          fD = [],
          bD = [],
          QD = [],
          wD = [],
          SD = [],
          BD = [],
          yD = [];
        CD = class {
          constructor() {
            let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            this.x = (0, HD.m)(this, bD, void 0), this.y = ((0, HD.m)(this, QD), (0, HD.m)(this, wD, void 0)), this.z = ((0, HD.m)(this, SD), (0, HD.m)(this, BD, void 0)), (0, HD.m)(this, yD), this.x = DD, this.y = CD, this.z = cD
          }
        };
        return (0, HD.o)(CD, "ThreeMfVertex"), (() => {
          const MD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          cD = [Tf({
            name: "x"
          })], ID = [Tf({
            name: "y"
          })], pD = [Tf({
            name: "z"
          })], (0, HD.k)(null, null, cD, {
            kind: "field",
            name: "x",
            static: !1,
            private: !1,
            access: {
              has: DD => "x" in DD,
              get: DD => DD.x,
              set: (DD, CD) => {
                DD.x = CD
              }
            },
            metadata: MD
          }, bD, QD), (0, HD.k)(null, null, ID, {
            kind: "field",
            name: "y",
            static: !1,
            private: !1,
            access: {
              has: DD => "y" in DD,
              get: DD => DD.y,
              set: (DD, CD) => {
                DD.y = CD
              }
            },
            metadata: MD
          }, wD, SD), (0, HD.k)(null, null, pD, {
            kind: "field",
            name: "z",
            static: !1,
            private: !1,
            access: {
              has: DD => "z" in DD,
              get: DD => DD.z,
              set: (DD, CD) => {
                DD.z = CD
              }
            },
            metadata: MD
          }, BD, yD), (0, HD.k)(null, DD = {
            value: CD
          }, iD, {
            kind: "class",
            name: CD.name,
            metadata: MD
          }, null, fD), CD = DD.value, MD && Object.defineProperty(CD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: MD
          }), (0, HD.m)(CD, fD)
        })(), CD
      })(),
      lb = (() => {
        let DD, CD, cD = [lf({
            ns: bb,
            name: "triangles"
          })],
          ID = [];
        CD = class {
          constructor() {
            this.triangle = []
          }
        };
        return (0, HD.o)(CD, "ThreeMfTriangles"), (() => {
          const pD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, HD.k)(null, DD = {
            value: CD
          }, cD, {
            kind: "class",
            name: CD.name,
            metadata: pD
          }, null, ID), CD = DD.value, pD && Object.defineProperty(CD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: pD
          }), (0, HD.m)(CD, ID)
        })(), CD
      })(),
      Lb = (() => {
        let DD, CD, cD, ID, pD, iD, fD, bD, QD, wD = [lf({
            ns: bb,
            name: "triangle"
          })],
          SD = [],
          BD = [],
          yD = [],
          MD = [],
          tD = [],
          ZD = [],
          oD = [],
          vD = [],
          ND = [],
          gD = [],
          XD = [],
          mD = [],
          nD = [],
          OD = [],
          PD = [];
        CD = class {
          constructor(DD, CD, cD) {
            this.v1 = (0, HD.m)(this, BD, void 0), this.v2 = ((0, HD.m)(this, yD), (0, HD.m)(this, MD, void 0)), this.v3 = ((0, HD.m)(this, tD), (0, HD.m)(this, ZD, void 0)), this.p1 = ((0, HD.m)(this, oD), (0, HD.m)(this, vD, void 0)), this.p2 = ((0, HD.m)(this, ND), (0, HD.m)(this, gD, void 0)), this.p3 = ((0, HD.m)(this, XD), (0, HD.m)(this, mD, void 0)), this.pid = ((0, HD.m)(this, nD), (0, HD.m)(this, OD, void 0)), (0, HD.m)(this, PD), this.v1 = DD, this.v2 = CD, this.v3 = cD
          }
        };
        return (0, HD.o)(CD, "ThreeMfTriangle"), (() => {
          const UD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          cD = [Tf({
            name: "v1"
          })], ID = [Tf({
            name: "v2"
          })], pD = [Tf({
            name: "v3"
          })], iD = [Tf({
            name: "p1"
          })], fD = [Tf({
            name: "p2"
          })], bD = [Tf({
            name: "p3"
          })], QD = [Tf({
            name: "pid"
          })], (0, HD.k)(null, null, cD, {
            kind: "field",
            name: "v1",
            static: !1,
            private: !1,
            access: {
              has: DD => "v1" in DD,
              get: DD => DD.v1,
              set: (DD, CD) => {
                DD.v1 = CD
              }
            },
            metadata: UD
          }, BD, yD), (0, HD.k)(null, null, ID, {
            kind: "field",
            name: "v2",
            static: !1,
            private: !1,
            access: {
              has: DD => "v2" in DD,
              get: DD => DD.v2,
              set: (DD, CD) => {
                DD.v2 = CD
              }
            },
            metadata: UD
          }, MD, tD), (0, HD.k)(null, null, pD, {
            kind: "field",
            name: "v3",
            static: !1,
            private: !1,
            access: {
              has: DD => "v3" in DD,
              get: DD => DD.v3,
              set: (DD, CD) => {
                DD.v3 = CD
              }
            },
            metadata: UD
          }, ZD, oD), (0, HD.k)(null, null, iD, {
            kind: "field",
            name: "p1",
            static: !1,
            private: !1,
            access: {
              has: DD => "p1" in DD,
              get: DD => DD.p1,
              set: (DD, CD) => {
                DD.p1 = CD
              }
            },
            metadata: UD
          }, vD, ND), (0, HD.k)(null, null, fD, {
            kind: "field",
            name: "p2",
            static: !1,
            private: !1,
            access: {
              has: DD => "p2" in DD,
              get: DD => DD.p2,
              set: (DD, CD) => {
                DD.p2 = CD
              }
            },
            metadata: UD
          }, gD, XD), (0, HD.k)(null, null, bD, {
            kind: "field",
            name: "p3",
            static: !1,
            private: !1,
            access: {
              has: DD => "p3" in DD,
              get: DD => DD.p3,
              set: (DD, CD) => {
                DD.p3 = CD
              }
            },
            metadata: UD
          }, mD, nD), (0, HD.k)(null, null, QD, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: DD => "pid" in DD,
              get: DD => DD.pid,
              set: (DD, CD) => {
                DD.pid = CD
              }
            },
            metadata: UD
          }, OD, PD), (0, HD.k)(null, DD = {
            value: CD
          }, wD, {
            kind: "class",
            name: CD.name,
            metadata: UD
          }, null, SD), CD = DD.value, UD && Object.defineProperty(CD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: UD
          }), (0, HD.m)(CD, SD)
        })(), CD
      })(),
      Tb = (() => {
        let DD, CD, cD = [lf({
            ns: bb,
            name: "components"
          })],
          ID = [];
        CD = class {
          constructor() {
            this.component = []
          }
        };
        return (0, HD.o)(CD, "ThreeMfComponents"), (() => {
          const pD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, HD.k)(null, DD = {
            value: CD
          }, cD, {
            kind: "class",
            name: CD.name,
            metadata: pD
          }, null, ID), CD = DD.value, pD && Object.defineProperty(CD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: pD
          }), (0, HD.m)(CD, ID)
        })(), CD
      })(),
      Gb = (() => {
        let DD, CD, cD, ID, pD = [lf({
            ns: bb,
            name: "component"
          })],
          iD = [],
          fD = [],
          bD = [],
          QD = [],
          wD = [];
        CD = class {
          constructor(DD, CD) {
            this.objectid = (0, HD.m)(this, fD, void 0), this.transform = ((0, HD.m)(this, bD), (0, HD.m)(this, QD, void 0)), (0, HD.m)(this, wD), this.objectid = DD, this.transform = CD
          }
        };
        return (0, HD.o)(CD, "ThreeMfComponent"), (() => {
          const SD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          cD = [Tf({
            name: "objectid"
          })], ID = [Tf({
            name: "transform",
            formatter: Ub
          })], (0, HD.k)(null, null, cD, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: DD => "objectid" in DD,
              get: DD => DD.objectid,
              set: (DD, CD) => {
                DD.objectid = CD
              }
            },
            metadata: SD
          }, fD, bD), (0, HD.k)(null, null, ID, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: DD => "transform" in DD,
              get: DD => DD.transform,
              set: (DD, CD) => {
                DD.transform = CD
              }
            },
            metadata: SD
          }, QD, wD), (0, HD.k)(null, DD = {
            value: CD
          }, pD, {
            kind: "class",
            name: CD.name,
            metadata: SD
          }, null, iD), CD = DD.value, SD && Object.defineProperty(CD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: SD
          }), (0, HD.m)(CD, iD)
        })(), CD
      })(),
      Rb = (() => {
        let DD, CD, cD, ID = [lf({
            ns: bb,
            name: "basematerials"
          })],
          pD = [],
          iD = [],
          fD = [];
        CD = class {
          constructor(DD) {
            this.id = (0, HD.m)(this, iD, void 0), this.base = ((0, HD.m)(this, fD), []), this.id = DD
          }
        };
        return (0, HD.o)(CD, "ThreeMfBaseMaterials"), (() => {
          const bD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          cD = [Tf({
            name: "id"
          })], (0, HD.k)(null, null, cD, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: DD => "id" in DD,
              get: DD => DD.id,
              set: (DD, CD) => {
                DD.id = CD
              }
            },
            metadata: bD
          }, iD, fD), (0, HD.k)(null, DD = {
            value: CD
          }, ID, {
            kind: "class",
            name: CD.name,
            metadata: bD
          }, null, pD), CD = DD.value, bD && Object.defineProperty(CD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: bD
          }), (0, HD.m)(CD, pD)
        })(), CD
      })(),
      kb = (() => {
        let DD, CD, cD, ID, pD = [lf({
            ns: bb,
            name: "base"
          })],
          iD = [],
          fD = [],
          bD = [],
          QD = [],
          wD = [];
        CD = class {
          constructor(DD, CD) {
            this.name = (0, HD.m)(this, fD, void 0), this.displaycolor = ((0, HD.m)(this, bD), (0, HD.m)(this, QD, void 0)), (0, HD.m)(this, wD), this.name = DD, this.displaycolor = CD
          }
        };
        return (0, HD.o)(CD, "ThreeMfBase"), (() => {
          const SD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          cD = [Tf({
            name: "name"
          })], ID = [Tf({
            name: "displaycolor"
          })], (0, HD.k)(null, null, cD, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: DD => "name" in DD,
              get: DD => DD.name,
              set: (DD, CD) => {
                DD.name = CD
              }
            },
            metadata: SD
          }, fD, bD), (0, HD.k)(null, null, ID, {
            kind: "field",
            name: "displaycolor",
            static: !1,
            private: !1,
            access: {
              has: DD => "displaycolor" in DD,
              get: DD => DD.displaycolor,
              set: (DD, CD) => {
                DD.displaycolor = CD
              }
            },
            metadata: SD
          }, QD, wD), (0, HD.k)(null, DD = {
            value: CD
          }, pD, {
            kind: "class",
            name: CD.name,
            metadata: SD
          }, null, iD), CD = DD.value, SD && Object.defineProperty(CD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: SD
          }), (0, HD.m)(CD, iD)
        })(), CD
      })(),
      db = (() => {
        let DD, CD, cD = [lf({
            ns: bb,
            name: "build"
          })],
          ID = [];
        CD = class {
          constructor() {
            this.item = []
          }
        };
        return (0, HD.o)(CD, "ThreeMfBuild"), (() => {
          const pD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, HD.k)(null, DD = {
            value: CD
          }, cD, {
            kind: "class",
            name: CD.name,
            metadata: pD
          }, null, ID), CD = DD.value, pD && Object.defineProperty(CD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: pD
          }), (0, HD.m)(CD, ID)
        })(), CD
      })(),
      Yb = (() => {
        let DD, CD, cD, ID, pD, iD = [lf({
            ns: bb,
            name: "item"
          })],
          fD = [],
          bD = [],
          QD = [],
          wD = [],
          SD = [],
          BD = [],
          yD = [];
        CD = class {
          constructor(DD, CD, cD) {
            this.objectid = (0, HD.m)(this, bD, void 0), this.transform = ((0, HD.m)(this, QD), (0, HD.m)(this, wD, void 0)), this.partnumber = ((0, HD.m)(this, SD), (0, HD.m)(this, BD, void 0)), this.metadatagroup = (0, HD.m)(this, yD), this.objectid = DD, this.transform = CD, this.partnumber = cD
          }
        };
        return (0, HD.o)(CD, "ThreeMfItem"), (() => {
          const MD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          cD = [Tf({
            name: "objectid"
          })], ID = [Tf({
            name: "transform",
            formatter: Ub
          })], pD = [Tf({
            name: "partnumber"
          })], (0, HD.k)(null, null, cD, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: DD => "objectid" in DD,
              get: DD => DD.objectid,
              set: (DD, CD) => {
                DD.objectid = CD
              }
            },
            metadata: MD
          }, bD, QD), (0, HD.k)(null, null, ID, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: DD => "transform" in DD,
              get: DD => DD.transform,
              set: (DD, CD) => {
                DD.transform = CD
              }
            },
            metadata: MD
          }, wD, SD), (0, HD.k)(null, null, pD, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: DD => "partnumber" in DD,
              get: DD => DD.partnumber,
              set: (DD, CD) => {
                DD.partnumber = CD
              }
            },
            metadata: MD
          }, BD, yD), (0, HD.k)(null, DD = {
            value: CD
          }, iD, {
            kind: "class",
            name: CD.name,
            metadata: MD
          }, null, fD), CD = DD.value, MD && Object.defineProperty(CD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: MD
          }), (0, HD.m)(CD, fD)
        })(), CD
      })();
    class Wb {
      constructor(DD, CD) {
        this._object = new ab(DD, CD)
      }
      withName(DD) {
        return this._object.name = DD, this
      }
      withThumbnail(DD) {
        return this._object.thumbnail = DD, this
      }
      withProperty(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._object.pid = DD, this._object.id = CD, this
      }
      build() {
        return this._object
      }
      reset(DD, CD) {
        this._object = new ab(DD, CD)
      }
    }
    class sb extends Wb {
      constructor(DD) {
        super(DD, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Sb.model), this._object.content = new Tb
      }
      withComponent(DD, CD) {
        return this._object.content.component.push(new Gb(DD, CD)), this
      }
    }
    class Eb extends Wb {
      constructor(DD) {
        super(DD, Sb.model)
      }
      withPostProcessHandlers(DD, CD) {
        return this._vh = DD, this._th = CD, this
      }
      withData(DD) {
        return this._object.content = this._buildMesh(DD), this
      }
      withMaterial(DD, CD) {
        return this._object.pid = DD, this._object.pindex = CD, this
      }
      _buildMesh(DD) {
        const CD = this._buildVertices(DD.positions),
          cD = this._buildTriangle(DD.indices);
        return new Vb(CD, cD)
      }
      _buildVertices(DD) {
        const CD = new zb;
        if (DD)
          for (let cD = 0; cD < DD.length;) {
            const ID = DD[cD++],
              pD = DD[cD++],
              iD = DD[cD++];
            let fD = new jb(ID, pD, iD);
            this._vh && (fD = this._vh(fD)), CD.vertex.push(fD)
          }
        return CD
      }
      _buildTriangle(DD) {
        const CD = new lb;
        if (DD)
          for (let cD = 0; cD < DD.length;) {
            const ID = DD[cD++],
              pD = DD[cD++],
              iD = DD[cD++];
            let fD = new Lb(ID, pD, iD);
            this._th && (fD = this._th(fD)), CD.triangle.push(fD)
          }
        return CD
      }
    }
    class eb {
      constructor(DD) {
        this._m = new Rb(DD)
      }
      withColor(DD, CD) {
        this._m.base = this._m.base ?? [];
        let cD = this._m.base.find((CD => CD.name.toLowerCase() === DD.toLowerCase()));
        return cD ? (cD.displaycolor = this._rgbaToHex(CD), this) : (cD = new kb(DD, this._rgbaToHex(CD)), this._m.base.push(cD), this)
      }
      build() {
        return this._m
      }
      _rgbaToHex(DD) {
        const CD = DD => Math.round(Math.min(255, Math.max(0, 255 * Math.pow(DD, 1 / 2.2)))),
          cD = CD(DD.r).toString(16).padStart(2, "0").toUpperCase(),
          ID = CD(DD.g).toString(16).padStart(2, "0").toUpperCase(),
          pD = CD(DD.b).toString(16).padStart(2, "0").toUpperCase();
        if ("number" === typeof DD.a) {
          return `#${cD}${ID}${pD}${Math.round(Math.min(255,Math.max(0,255*DD.a))).toString(16).padStart(2,"0").toUpperCase()}`
        }
        return `#${cD}${ID}${pD}`
      }
    }
    class ub {
      constructor() {
        this._model = new xb, this._objects = new Map
      }
      withMetaData(DD, CD, cD, ID) {
        return this._model.metadata || (this._model.metadata = new Array), this._model.metadata.push(new qb(DD, CD, cD, ID)), this
      }
      withMaterial(DD) {
        return DD instanceof eb && (DD = DD.build()), DD && (this._model.resources = this._model.resources ?? new Kb, this._model.resources.basematerials = this._model.resources.basematerials ?? [], this._model.resources.basematerials.push(DD)), this
      }
      withMesh(DD) {
        return DD instanceof Eb && (DD = DD.build()), this._model.resources = this._model.resources ?? new Kb, this._model.resources.object.push(DD), this
      }
      withComponents(DD) {
        return DD instanceof sb && (DD = DD.build()), this._model.resources = this._model.resources ?? new Kb, this._model.resources.object.push(DD), this
      }
      withBuild(DD, CD, cD) {
        return this._model.build = this._model.build ?? new db, this._model.build.item?.push(new Yb(DD, CD, cD)), this
      }
      withUnit(DD) {
        return this._model.unit = DD, this
      }
      reset() {
        return this._model = new xb, this._objects = new Map, this
      }
      build() {
        if (!this._model.resources?.object?.length) throw new Error("Invalid state: resources MUST be defined ");
        if (!this._model.build?.item?.length) throw new Error("Invalid state: Build MUST be defined ");
        return this._model
      }
    }
    ub.KnownMetaSet = new Set(xb.KnownMeta.map((DD => DD.toLowerCase())));
    class hb {
      withContentType(DD) {
        this._cts || (this._cts = new Xb);
        const CD = this._cts.items;
        return CD.some((CD => CD.ext === DD.ext && CD.ct === DD.ct)) || CD.push(DD), this
      }
      withRelationship(DD) {
        this._rs || (this._rs = new nb);
        const CD = this._rs.items;
        return CD.some((CD => CD.id === DD.id)) || CD.push(DD), this.withContentType(new mb("rels", Mb.Relationships)), this
      }
      withModel(DD) {
        return DD instanceof ub && (DD = DD.build()), this._m = DD, this.withContentType(new mb("model", Mb.Model)), this
      }
      build() {
        if (!this._m) throw new Error("Invalid state: you Must provide at least a model.");
        const DD = `${Zb}${ob}`;
        if (!this._rs) {
          const CD = `/${DD}`;
          this.withRelationship(new Ob("rel0", gb.ThreeDimModel, CD))
        }
        return new Pb(this._cts, this._rs, this._m)
      }
    }
    class rb {
      constructor(DD) {
        this._o = DD
      }
      get options() {
        return this._o
      }
      async serializeAsync(DD) {
        const CD = await this.ensureZipLibReadyAsync();
        if (!CD) return;
        const cD = CD.Zip,
          ID = CD.ZipDeflate;
        if (!cD || !ID) throw new Error("fflate Zip / ZipDeflate not available");
        const pD = function(DD, CD, cD) {
          const pD = new ID(CD, {
            level: 6
          });
          DD.add(pD);
          const iD = function(DD) {
              return {
                push: (CD, cD) => DD.push(CD, cD)
              }
            }(pD),
            fD = new fb(iD),
            bD = new pb(fD).dec("1.0", "UTF-8");
          new Cb(bD).serialize(cD), fD.finish()
        };
        for (var iD = arguments.length, fD = new Array(iD > 1 ? iD - 1 : 0), bD = 1; bD < iD; bD++) fD[bD - 1] = arguments[bD];
        const QD = this.toDocument(...fD);
        if (!QD) return;
        const wD = new cD(DD);
        pD(wD, Nb, QD.contentTypes), pD(wD, `${tb}${vb}`, QD.relationships), pD(wD, `${Zb}${ob}`, QD.model), wD.end()
      }
      toDocument() {
        const DD = (new ub).withUnit(this._o?.unit ?? wb.millimeter);
        if (this.options.metadata)
          for (const pD in this.options.metadata) DD.withMetaData(pD, this.options.metadata[pD]);
        for (var CD = arguments.length, cD = new Array(CD), ID = 0; ID < CD; ID++) cD[ID] = arguments[ID];
        return (new hb).withModel(this.toModel(DD, ...cD)).build()
      }
    }
    class Ab {
      static async SerializeToMemoryAsync(DD) {
        const CD = new Array;
        let cD = 0;
        for (var ID = arguments.length, pD = new Array(ID > 1 ? ID - 1 : 0), iD = 1; iD < ID; iD++) pD[iD - 1] = arguments[iD];
        if (await DD.serializeAsync((function(DD, ID, pD) {
            CD.push(ID), cD += ID.length
          }), ...pD), !cD) return;
        const fD = new Uint8Array(cD);
        let bD = 0;
        for (const QD of CD) fD.set(QD, bD), bD += QD.length;
        return fD
      }
    }
    class Fb {}
    Fb.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class DQ {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MIN_SAFE_INTEGER,
          cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._from = DD, this._to = CD, this._step = cD, this._i = DD
      }
      next() {
        if (this._i < this._to) throw new Error("ST_ResourceID out of bound");
        const DD = this._i;
        return this._i += this._step, DD
      }
      reset() {
        return this._i = this._from, this
      }
    }
    class CQ extends rb {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super({
          ...CQ.DefaultOptions,
          ...DD
        })
      }
      toModel(DD) {
        for (var CD = arguments.length, cD = new Array(CD > 1 ? CD - 1 : 0), ID = 1; ID < CD; ID++) cD[ID - 1] = arguments[ID];
        cD = cD.filter((DD => DD instanceof wI.d || DD instanceof MD.b));
        const pD = new DQ,
          iD = DD,
          fD = new Map,
          bD = this.options.exportInstances ? [] : null;
        for (let QD = 0; QD < cD.length; QD++) {
          const DD = cD[QD];
          if (DD instanceof MD.b) {
            bD?.push(DD);
            continue
          }
          const CD = DD.name || `mesh${QD}`,
            ID = DD.getWorldMatrix(),
            wD = this._handleBabylonTo3mfMatrixTransformToRef(ID, Hb.Zero()),
            SD = DD.IH;
          if (void 0 === SD) continue;
          const BD = 1 == SD.length;
          for (let cD = 0; cD < SD.length; cD++) {
            const ID = SD[cD],
              bD = this._extractSubMesh(DD, ID);
            if (bD) {
              const DD = BD ? `${CD}` : `${CD}_${cD}`,
                QD = new Eb(pD.next()).withData(bD).withName(DD).build();
              iD.withMesh(QD), iD.withBuild(QD.id, wD), fD.set(ID, QD)
            }
          }
        }
        if (bD && bD.length) {
          const DD = this._groupBy(bD, (DD => DD.OID));
          for (const [CD, cD] of Array.from(DD.entries()))
            if (cD && cD.length)
              for (let DD = 0; DD < cD.length; DD++) {
                const ID = cD[DD].getWorldMatrix(),
                  pD = CD.IH;
                for (let DD = 0; DD < pD.length; DD++) {
                  const CD = pD[DD],
                    cD = fD.get(CD);
                  cD && iD.withBuild(cD.id, this._handleBabylonTo3mfMatrixTransformToRef(ID, Hb.Zero()))
                }
              }
        }
        return iD.build()
      }
      async ensureZipLibReadyAsync() {
        return this._fflateReadyPromise || (this._fflateReadyPromise = (async () => {
          const DD = globalThis;
          return DD.fflate || await pD.Tools.LoadScriptAsync(Fb.FFLATEUrl), DD.fflate
        })()), await this._fflateReadyPromise
      }
      _extractSubMesh(DD, CD) {
        const cD = DD.ncD();
        if (!cD) return;
        const ID = DD.getVerticesData(CQ._PositionKind);
        if (!ID) return;
        if (0 == CD.indexStart && CD.indexCount == cD.length) return {
          positions: ID,
          indices: cD
        };
        const pD = CD.indexStart,
          iD = new Map,
          fD = [],
          bD = new Uint32Array(CD.indexCount);
        for (let QD = 0; QD < CD.indexCount; QD++) {
          const DD = cD[pD + QD];
          let CD = iD.get(DD);
          if (void 0 === CD) {
            CD = iD.size, iD.set(DD, CD);
            const cD = 3 * DD;
            fD.push(ID[cD], ID[cD + 1], ID[cD + 2])
          }
          bD[QD] = CD
        }
        return {
          positions: new Float32Array(fD),
          indices: bD
        }
      }
      _groupBy(DD, CD) {
        const cD = new Map;
        for (const ID of DD) {
          const DD = CD(ID),
            pD = cD.get(DD);
          pD ? pD.push(ID) : cD.set(DD, [ID])
        }
        return cD
      }
      _handleBabylonTo3mfMatrixTransformToRef(DD, CD) {
        const cD = DD.multiplyToRef(CQ._R_BJS_TO_3MF, TD.d.Zero()).m;
        return CD.values = [cD[0], cD[1], cD[2], cD[4], cD[5], cD[6], cD[8], cD[9], cD[10], cD[12], cD[13], cD[14]], CD
      }
    }
    CQ.DefaultOptions = {
      unit: wb.meter,
      exportInstances: !1
    }, CQ._PositionKind = "position", CQ._R_BJS_TO_3MF = TD.d.RotationX(Math.PI / 2).multiply(TD.d.Scaling(1, -1, 1))
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);